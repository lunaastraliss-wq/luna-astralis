// app/api/chat/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ===========================
   LIMITES
=========================== */
const FREE_LIMIT = 15;
const UPSELL_WHEN_REMAINING_LTE = 2;

const UPSELL_TEXT_FR =
  " Si tu veux approfondir davantage et comprendre ce qui se joue en profondeur, l’accès complet te permet d’aller beaucoup plus loin.";

/* ===========================
   DB TABLES
=========================== */
// quota invité
const GUEST_USAGE_TABLE = "guest_usage";
const GUEST_USAGE_COL_ID = "guest_id";
const GUEST_USAGE_COL_USED = "used";
const GUEST_USAGE_COL_UPDATED_AT = "updated_at";

// quota user (lifetime)
const USER_USAGE_TABLE = "user_usage_lifetime";
const USER_USAGE_COL_ID = "user_id";
const USER_USAGE_COL_USED = "used";
const USER_USAGE_COL_UPDATED_AT = "updated_at";

// lien guest -> user (pour éviter 15 + 15)
const GUEST_USER_LINKS_TABLE = "guest_user_links";

// chat invité (persistant)
const GUEST_THREADS_TABLE = "guest_threads";
const GUEST_MESSAGES_TABLE = "guest_messages";
const GUEST_CONTEXT_LAST_N = 12;

// subs
const SUBS_TABLE = "user_subscriptions";
const SUBS_COL_USER_ID = "user_id";
const SUBS_COL_STATUS = "status";
const SUBS_COL_CURRENT_PERIOD_END = "current_period_end";
const ACTIVE_STATUSES = new Set(["active", "trialing"]);

/* ===========================
   ENV
=========================== */
const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";

// accepte SUPABASE_URL (serveur) OU NEXT_PUBLIC_SUPABASE_URL (public)
const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/* ===========================
   CLIENTS
=========================== */
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

/* ===========================
   HELPERS
=========================== */
function cleanStr(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}

function jsonError(code: string, status = 400, extra: Record<string, any> = {}) {
  return NextResponse.json({ error: code, ...extra }, { status });
}

function makeGuestId() {
  return crypto.randomBytes(16).toString("hex");
}

function nowUnix() {
  return Math.floor(Date.now() / 1000);
}

function toUnixMaybe(v: any): number | null {
  if (!v) return null;
  if (typeof v === "number") return v;
  const t = Date.parse(String(v));
  if (Number.isFinite(t)) return Math.floor(t / 1000);
  return null;
}

function setGuestCookie(res: NextResponse, guest_id: string) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.headers.append(
    "Set-Cookie",
    `la_gid=${guest_id}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
  );
}

function readBearer(req: Request) {
  const h = req.headers.get("authorization") || "";
  const m = h.match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : "";
}

/**
 * Supporte:
 * - body.messages (format OpenAI)
 * - body.history + body.message (format custom)
 * - body.message seul
 */
function buildChatMessages(body: any) {
  const old = Array.isArray(body?.messages) ? body.messages : null;
  if (old) {
    return old
      .map((m: any) => ({
        role: m?.role === "assistant" ? "assistant" : "user",
        content: cleanStr(m?.content),
      }))
      .filter((m: any) => m.content);
  }

  const hist = Array.isArray(body?.history) ? body.history : [];
  const last = cleanStr(body?.message);

  const msgs = hist.map((m: any) => ({
    role: m?.role === "ai" || m?.role === "assistant" ? "assistant" : "user",
    content: cleanStr(m?.text ?? m?.content),
  }));

  if (last) msgs.push({ role: "user", content: last });
  if (!msgs.length && last) return [{ role: "user" as const, content: last }];

  return msgs.filter((m: any) => m.content);
}

function getLastUserMessage(
  userMessages: Array<{ role: string; content: string }>
) {
  for (let i = userMessages.length - 1; i >= 0; i--) {
    if (userMessages[i]?.role === "user" && cleanStr(userMessages[i]?.content)) {
      return cleanStr(userMessages[i].content);
    }
  }
  return "";
}

// force: 2 phrases + 1 question (max ~240 chars)
function enforceGuestFormat(input: string) {
  let text = cleanStr(input).replace(/\s+/g, " ");

  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const qIdx = parts.findIndex((p) => p.includes("?"));
  const qSentence = qIdx >= 0 ? parts[qIdx] : "";
  const nonQ = qIdx >= 0 ? parts.filter((_, i) => i !== qIdx) : parts;

  let s1 = nonQ[0] ?? "";
  let s2 = nonQ[1] ?? "";
  let q = qSentence;

  if (!s1) s1 = "Je te lis.";
  if (!s2) s2 = "On peut éclaircir ça ensemble.";
  if (!q) q = "Qu’est-ce qui te pèse le plus là, maintenant ?";

  if (!/[?]\s*$/.test(q)) q = q.replace(/[.!…]\s*$/, "").trimEnd() + " ?";
  if (s1 && !/[.!?…]\s*$/.test(s1)) s1 += ".";
  if (s2 && !/[.!?…]\s*$/.test(s2)) s2 += ".";

  let out = `${s1} ${s2} ${q}`.replace(/\s+/g, " ").trim();

  if (out.length > 240) {
    out = out.slice(0, 239).trimEnd();
    out = out.replace(/[\uD800-\uDBFF]$/g, "");
    if (!/[?]\s*$/.test(out)) {
      out = out.replace(/[.!…]\s*$/g, "").trimEnd();
      if (out.length > 238) out = out.slice(0, 238).trimEnd();
      out += " ?";
    }
  }

  return out;
}

/* ===========================
   SUPABASE: QUOTA GUEST
=========================== */
async function ensureGuestRowAndGetUsed(guest_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const { data: existing, error: readErr } = await supabaseAdmin
    .from(GUEST_USAGE_TABLE)
    .select(`${GUEST_USAGE_COL_ID}, ${GUEST_USAGE_COL_USED}`)
    .eq(GUEST_USAGE_COL_ID, guest_id)
    .maybeSingle();

  if (readErr) throw readErr;

  if (!existing) {
    const { data: created, error: insErr } = await supabaseAdmin
      .from(GUEST_USAGE_TABLE)
      .insert({
        [GUEST_USAGE_COL_ID]: guest_id,
        [GUEST_USAGE_COL_USED]: 0,
        [GUEST_USAGE_COL_UPDATED_AT]: new Date().toISOString(),
      })
      .select(`${GUEST_USAGE_COL_USED}`)
      .single();

    if (insErr) throw insErr;
    return Number(created?.[GUEST_USAGE_COL_USED] ?? 0);
  }

  return Number(existing?.[GUEST_USAGE_COL_USED] ?? 0);
}

async function incrementGuestUsed(guest_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const current = await ensureGuestRowAndGetUsed(guest_id);
  const next = current + 1;

  const { error: updErr } = await supabaseAdmin
    .from(GUEST_USAGE_TABLE)
    .update({
      [GUEST_USAGE_COL_USED]: next,
      [GUEST_USAGE_COL_UPDATED_AT]: new Date().toISOString(),
    })
    .eq(GUEST_USAGE_COL_ID, guest_id);

  if (updErr) throw updErr;
  return next;
}

/* ===========================
   SUPABASE: QUOTA USER (lifetime)
=========================== */
async function ensureUserRowAndGetUsed(user_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const { data: existing, error: readErr } = await supabaseAdmin
    .from(USER_USAGE_TABLE)
    .select(`${USER_USAGE_COL_ID}, ${USER_USAGE_COL_USED}`)
    .eq(USER_USAGE_COL_ID, user_id)
    .maybeSingle();

  if (readErr) throw readErr;

  if (!existing) {
    const { data: created, error: insErr } = await supabaseAdmin
      .from(USER_USAGE_TABLE)
      .insert({
        [USER_USAGE_COL_ID]: user_id,
        [USER_USAGE_COL_USED]: 0,
        [USER_USAGE_COL_UPDATED_AT]: new Date().toISOString(),
      })
      .select(`${USER_USAGE_COL_USED}`)
      .single();

    if (insErr) throw insErr;
    return Number(created?.[USER_USAGE_COL_USED] ?? 0);
  }

  return Number(existing?.[USER_USAGE_COL_USED] ?? 0);
}

async function incrementUserUsed(user_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const current = await ensureUserRowAndGetUsed(user_id);
  const next = current + 1;

  const { error: updErr } = await supabaseAdmin
    .from(USER_USAGE_TABLE)
    .update({
      [USER_USAGE_COL_USED]: next,
      [USER_USAGE_COL_UPDATED_AT]: new Date().toISOString(),
    })
    .eq(USER_USAGE_COL_ID, user_id);

  if (updErr) throw updErr;
  return next;
}

/* ===========================
   SUPABASE: LINK GUEST -> USER & MERGE USAGE
   (évite 15 + 15)
=========================== */
async function linkGuestToUserAndMerge(guest_id: string, user_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  // upsert lien (idempotent)
  const { error: linkErr } = await supabaseAdmin.from(GUEST_USER_LINKS_TABLE).upsert(
    {
      guest_id,
      user_id,
      linked_at: new Date().toISOString(),
    },
    { onConflict: "guest_id" }
  );
  if (linkErr) throw linkErr;

  // merge usage: prendre le MAX (ne redonne jamais de quota)
  const gUsed = await ensureGuestRowAndGetUsed(guest_id);
  const uUsed = await ensureUserRowAndGetUsed(user_id);
  const merged = Math.max(gUsed, uUsed);

  // écrire merged dans user_usage_lifetime
  const { error: uUpdErr } = await supabaseAdmin
    .from(USER_USAGE_TABLE)
    .update({
      [USER_USAGE_COL_USED]: merged,
      [USER_USAGE_COL_UPDATED_AT]: new Date().toISOString(),
    })
    .eq(USER_USAGE_COL_ID, user_id);

  if (uUpdErr) throw uUpdErr;

  return merged;
}

/* ===========================
   SUPABASE: CHAT INVITÉ (persistant)
=========================== */
async function getOrCreateGuestThreadId(
  guest_id: string,
  signKey: string,
  signName: string
) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const sk = cleanStr(signKey || "");
  const sn = cleanStr(signName || "");

  const { data: existing, error: readErr } = await supabaseAdmin
    .from(GUEST_THREADS_TABLE)
    .select("id")
    .eq("guest_id", guest_id)
    .eq("sign_key", sk)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (readErr) throw readErr;

  if (existing?.id != null) return Number(existing.id);

  const { data: created, error: insErr } = await supabaseAdmin
    .from(GUEST_THREADS_TABLE)
    .insert({
      guest_id,
      sign_key: sk,
      sign_name: sn,
      updated_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (insErr) throw insErr;
  return Number(created?.id);
}

async function loadGuestContextMessages(threadId: number, lastN: number) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const { data, error } = await supabaseAdmin
    .from(GUEST_MESSAGES_TABLE)
    .select("role, content, created_at")
    .eq("thread_id", threadId)
    .order("created_at", { ascending: false })
    .limit(lastN);

  if (error) throw error;

  const rows = Array.isArray(data) ? data : [];
  rows.reverse(); // back to chronological

  return rows
    .map((m: any) => ({
      role: m?.role === "assistant" ? ("assistant" as const) : ("user" as const),
      content: cleanStr(m?.content),
    }))
    .filter((m) => m.content);
}

async function saveGuestMessage(
  threadId: number,
  role: "user" | "assistant",
  content: string
) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const text = cleanStr(content);
  if (!text) return;

  const { error } = await supabaseAdmin.from(GUEST_MESSAGES_TABLE).insert({
    thread_id: threadId,
    role,
    content: text,
  });

  if (error) throw error;

  // ping updated_at (best effort)
  await supabaseAdmin
    .from(GUEST_THREADS_TABLE)
    .update({ updated_at: new Date().toISOString() })
    .eq("id", threadId);
}

/* ===========================
   SUPABASE: PREMIUM
=========================== */
async function isPremiumActive(user_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const { data, error } = await supabaseAdmin
    .from(SUBS_TABLE)
    .select(`${SUBS_COL_STATUS}, ${SUBS_COL_CURRENT_PERIOD_END}, created_at`)
    .eq(SUBS_COL_USER_ID, user_id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!data) return false;

  const status = cleanStr((data as any)[SUBS_COL_STATUS]).toLowerCase();
  if (!ACTIVE_STATUSES.has(status)) return false;

  const cpeUnix = toUnixMaybe((data as any)[SUBS_COL_CURRENT_PERIOD_END]);
  if (cpeUnix == null) return true;

  return cpeUnix > nowUnix();
}

function pickLastNMessages(
  msgs: Array<{ role: string; content: string }>,
  n: number
) {
  const arr = Array.isArray(msgs) ? msgs : [];
  const sliced = arr.slice(Math.max(0, arr.length - n));
  return sliced
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: cleanStr(m.content),
    }))
    .filter((m) => m.content);
}

/* ===========================
   ROUTES
=========================== */
export async function GET() {
  return NextResponse.json({
    ok: true,
    hint: "Use POST /api/chat",
    hasOpenAIKey: !!OPENAI_API_KEY,
    hasSupabaseAdmin: !!supabaseAdmin,
  });
}

export async function POST(req: Request) {
  try {
    if (!OPENAI_API_KEY) return jsonError("OPENAI_API_KEY_MISSING", 500);
    if (!supabaseAdmin) return jsonError("SUPABASE_ADMIN_MISSING", 500);

    const body = await req.json().catch(() => null);
    if (!body) return jsonError("INVALID_JSON", 400);

    const lang = cleanStr(body.lang || "fr") || "fr";
    const signName = cleanStr(body.signName || "");
    const signKey = cleanStr(body.signKey || "");

    const userMessages = buildChatMessages(body);
    if (!userMessages.length) return jsonError("NO_MESSAGES", 400);

    const lastUserText = getLastUserMessage(userMessages);
    if (!lastUserText) return jsonError("NO_USER_MESSAGE", 400);

    // ===== Auth: Bearer puis cookies session
    let user_id: string | null = null;

    const bearer = readBearer(req);
    if (bearer) {
      const { data, error } = await supabaseAdmin.auth.getUser(bearer);
      if (!error && data?.user?.id) user_id = data.user.id;
    }

    if (!user_id && SUPABASE_URL && SUPABASE_ANON_KEY) {
      try {
        const supabaseAuth = createRouteHandlerClient({ cookies });
        const { data } = await supabaseAuth.auth.getSession();
        user_id = data?.session?.user?.id ?? null;
      } catch {
        user_id = null;
      }
    }

    const isAuthed = !!user_id;

    // ===== Guest id: payload > cookie > new
    const cookieStore = cookies();
    const cookieGid = cookieStore.get("la_gid")?.value;
    const payloadGid = cleanStr(body.guestId);
    const guest_id = payloadGid || cookieGid || makeGuestId();

    /* =========================
       GUEST FLOW (quota + chat cross-device)
    ========================= */
    if (!isAuthed) {
      // quota
      let used = 0;
      try {
        used = await ensureGuestRowAndGetUsed(guest_id);
      } catch (err: any) {
        return jsonError("GUEST_USAGE_READ_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
      }

      if (used >= FREE_LIMIT) {
        const res = NextResponse.json(
          { error: "FREE_LIMIT_REACHED", free_limit: FREE_LIMIT },
          { status: 402 }
        );
        setGuestCookie(res, guest_id);
        return res;
      }

      // threadId: optional (front), sinon (guest_id + signKey)
      const payloadThreadIdRaw = body?.threadId;
      const payloadThreadId =
        typeof payloadThreadIdRaw === "number"
          ? payloadThreadIdRaw
          : Number(payloadThreadIdRaw || 0) || 0;

      let threadId = payloadThreadId;

      if (!threadId) {
        try {
          threadId = await getOrCreateGuestThreadId(guest_id, signKey, signName);
        } catch (err: any) {
          return jsonError("GUEST_THREAD_FAILED", 500, {
            detail: cleanStr(err?.message || err),
          });
        }
      }

      // contexte DB (dernier N)
      let dbContext: Array<{ role: "user" | "assistant"; content: string }> = [];
      try {
        dbContext = (await loadGuestContextMessages(
          threadId,
          GUEST_CONTEXT_LAST_N
        )) as any;
      } catch (err: any) {
        return jsonError("GUEST_THREAD_LOAD_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
      }

      const system = `
Tu es l’assistante Luna Astralis.
Style: chaleureux, calme, direct, sans dramatiser.
Tu aides sur astrologie, psycho douce, relations, introspection.
Tu ne prétends pas être médecin; pas de diagnostics.
Réponse TRÈS courte: 2 phrases + 1 question, max 240 caractères.
Langue: ${lang}.
Signe: ${signName || signKey || "—"}.
`.trim();

      // OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
          { role: "system", content: system },
          ...dbContext,
          { role: "user", content: lastUserText },
        ],
      });

      const raw = cleanStr(completion.choices?.[0]?.message?.content ?? "");
      let short = enforceGuestFormat(raw);

      // Quota: incrémenter seulement si OpenAI a réussi
      let newUsed = used;
      try {
        newUsed = await incrementGuestUsed(guest_id);
      } catch (err: any) {
        return jsonError("GUEST_USAGE_UPDATE_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
      }

      const remaining = Math.max(0, FREE_LIMIT - newUsed);

      // Upsell (si proche de la fin)
      if (remaining <= UPSELL_WHEN_REMAINING_LTE) {
        const candidate = (short + UPSELL_TEXT_FR).replace(/\s+/g, " ").trim();
        short = candidate.length <= 240 ? candidate : enforceGuestFormat(candidate);
      }

      // Sauvegarde DB (après succès OpenAI)
      try {
        await saveGuestMessage(threadId, "user", lastUserText);
        await saveGuestMessage(threadId, "assistant", short);
      } catch (err: any) {
        return jsonError("GUEST_CHAT_SAVE_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
      }

      const res = NextResponse.json(
        { message: short, reply: short, mode: "guest", remaining, guestId: guest_id, threadId },
        { status: 200 }
      );
      setGuestCookie(res, guest_id);
      return res;
    }

    /* =========================
       AUTH FLOW
       - Premium: réponses longues (illimité/quota plan)
       - Non premium: 15 messages lifetime (même logique que guest)
       - Link guest->user pour éviter 15 + 15
    ========================= */
    let premium = false;
    try {
      premium = await isPremiumActive(user_id!);
    } catch (err: any) {
      return jsonError("SUBSCRIPTION_CHECK_FAILED", 500, {
        detail: cleanStr(err?.message || err),
      });
    }

    // Si pas premium => quota lifetime 15 (user_usage_lifetime)
    if (!premium) {
      // merge guest->user si on a un guest_id (cookie/payload)
      // (idempotent; ne redonne jamais du quota)
      try {
        await linkGuestToUserAndMerge(guest_id, user_id!);
      } catch (err: any) {
        return jsonError("GUEST_LINK_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
      }

      let used = 0;
      try {
        used = await ensureUserRowAndGetUsed(user_id!);
      } catch (err: any) {
        return jsonError("USER_USAGE_READ_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
      }

      if (used >= FREE_LIMIT) {
        const res = NextResponse.json(
          { error: "FREE_LIMIT_REACHED", free_limit: FREE_LIMIT, mode: "auth_free" },
          { status: 402 }
        );
        // on garde le cookie guest_id (utile pour lier si l'utilisateur switch device)
        setGuestCookie(res, guest_id);
        return res;
      }

      const system = `
Tu es l’assistante Luna Astralis.
Style: chaleureux, calme, direct, sans dramatiser.
Tu aides sur astrologie, psycho douce, relations, introspection.
Tu ne prétends pas être médecin; pas de diagnostics.
Réponse TRÈS courte: 2 phrases + 1 question, max 240 caractères.
Langue: ${lang}.
Signe: ${signName || signKey || "—"}.
`.trim();

      // petit contexte depuis le front (pas de DB pour users ici)
      const context = pickLastNMessages(userMessages, 10);

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [{ role: "system", content: system }, ...context],
      });

      const raw = cleanStr(completion.choices?.[0]?.message?.content ?? "");
      let short = enforceGuestFormat(raw);

      // incrément après succès OpenAI
      let newUsed = used;
      try {
        newUsed = await incrementUserUsed(user_id!);
      } catch (err: any) {
        return jsonError("USER_USAGE_UPDATE_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
      }

      const remaining = Math.max(0, FREE_LIMIT - newUsed);

      if (remaining <= UPSELL_WHEN_REMAINING_LTE) {
        const candidate = (short + UPSELL_TEXT_FR).replace(/\s+/g, " ").trim();
        short = candidate.length <= 240 ? candidate : enforceGuestFormat(candidate);
      }

      const res = NextResponse.json(
        { message: short, reply: short, mode: "auth_free", remaining, guestId: guest_id },
        { status: 200 }
      );
      setGuestCookie(res, guest_id);
      return res;
    }

    // Premium => réponses longues (ton flow actuel)
    const system = `
Tu es l’assistante Luna Astralis.
Style: chaleureux, profond, clair, concret.
Tu peux développer, proposer des pistes, poser des questions pertinentes.
Tu ne prétends pas être médecin; pas de diagnostics.
Langue: ${lang}.
Signe: ${signName || signKey || "—"}.
`.trim();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.8,
      messages: [{ role: "system", content: system }, ...userMessages],
    });

    const answer = cleanStr(completion.choices?.[0]?.message?.content ?? "");

    const res = NextResponse.json(
      { message: answer, reply: answer, mode: "auth_premium" },
      { status: 200 }
    );
    setGuestCookie(res, guest_id);
    return res;
  } catch (e: any) {
    return NextResponse.json(
      { error: "SERVER_ERROR", detail: cleanStr(e?.message || e) },
      { status: 500 }
    );
  }
     }
