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
const GUEST_USAGE_TABLE = "guest_usage";
const GUEST_USAGE_COL_ID = "guest_id";
const GUEST_USAGE_COL_COUNT = "count";

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
  // 1) format "messages"
  const old = Array.isArray(body?.messages) ? body.messages : null;
  if (old) {
    return old
      .map((m: any) => ({
        role: m?.role === "assistant" ? "assistant" : "user",
        content: cleanStr(m?.content),
      }))
      .filter((m: any) => m.content);
  }

  // 2) format historique custom
  const hist = Array.isArray(body?.history) ? body.history : [];
  const last = cleanStr(body?.message);

  const msgs = hist.map((m: any) => ({
    role: m?.role === "ai" || m?.role === "assistant" ? "assistant" : "user",
    content: cleanStr(m?.text ?? m?.content),
  }));

  if (last) msgs.push({ role: "user", content: last });

  // 3) message seul, sans history
  if (!msgs.length && last) {
    return [{ role: "user" as const, content: last }];
  }

  return msgs.filter((m: any) => m.content);
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
    out = out.replace(/[\uD800-\uDBFF]$/g, ""); // évite couper un surrogate pair
    if (!/[?]\s*$/.test(out)) {
      out = out.replace(/[.!…]\s*$/g, "").trimEnd();
      if (out.length > 238) out = out.slice(0, 238).trimEnd();
      out += " ?";
    }
  }

  return out;
}

function getSupabaseAdmin() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;

  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
}

function getOpenAI() {
  return new OpenAI({ apiKey: OPENAI_API_KEY });
}

/**
 * Détecte si l'erreur ressemble à "relation does not exist"
 * (Postgres 42P01) ou message équivalent.
 */
function isMissingTableError(err: any) {
  const msg = cleanStr(err?.message || err?.hint || err?.details || "");
  const code = cleanStr(err?.code);
  return code === "42P01" || /relation .* does not exist/i.test(msg);
}

/* ===========================
   SUPABASE: QUOTA GUEST
=========================== */
async function ensureGuestRowAndGetCount(supabaseAdmin: ReturnType<typeof getSupabaseAdmin>, guest_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const { data: existing, error: readErr } = await supabaseAdmin
    .from(GUEST_USAGE_TABLE)
    .select(`${GUEST_USAGE_COL_ID}, ${GUEST_USAGE_COL_COUNT}`)
    .eq(GUEST_USAGE_COL_ID, guest_id)
    .maybeSingle();

  if (readErr) throw readErr;

  if (!existing) {
    const { data: created, error: insErr } = await supabaseAdmin
      .from(GUEST_USAGE_TABLE)
      .insert({ [GUEST_USAGE_COL_ID]: guest_id, [GUEST_USAGE_COL_COUNT]: 0 })
      .select(`${GUEST_USAGE_COL_COUNT}`)
      .single();

    if (insErr) throw insErr;
    return created?.[GUEST_USAGE_COL_COUNT] ?? 0;
  }

  return existing?.[GUEST_USAGE_COL_COUNT] ?? 0;
}

async function incrementGuestCount(supabaseAdmin: ReturnType<typeof getSupabaseAdmin>, guest_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const current = await ensureGuestRowAndGetCount(supabaseAdmin, guest_id);
  const next = current + 1;

  const { error: updErr } = await supabaseAdmin
    .from(GUEST_USAGE_TABLE)
    .update({ [GUEST_USAGE_COL_COUNT]: next })
    .eq(GUEST_USAGE_COL_ID, guest_id);

  if (updErr) throw updErr;
  return next;
}

/* ===========================
   SUPABASE: PREMIUM
=========================== */
async function isPremiumActive(supabaseAdmin: ReturnType<typeof getSupabaseAdmin>, user_id: string) {
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

/* ===========================
   ROUTES
=========================== */
export async function GET() {
  return NextResponse.json({
    ok: true,
    hint: "Use POST /api/chat",
    hasOpenAIKey: !!OPENAI_API_KEY,
    hasSupabaseAdmin: !!(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY),
  });
}

export async function POST(req: Request) {
  try {
    // ===== ENV guards
    if (!OPENAI_API_KEY) return jsonError("OPENAI_API_KEY_MISSING", 500);
    if (!SUPABASE_URL) return jsonError("SUPABASE_URL_MISSING", 500);
    if (!SUPABASE_SERVICE_ROLE_KEY) return jsonError("SUPABASE_SERVICE_ROLE_KEY_MISSING", 500);

    const openai = getOpenAI();
    const supabaseAdmin = getSupabaseAdmin();
    if (!supabaseAdmin) return jsonError("SUPABASE_ADMIN_MISSING", 500);

    // ===== Body
    const body = await req.json().catch(() => null);
    if (!body) return jsonError("INVALID_JSON", 400);

    const lang = cleanStr(body.lang || "fr") || "fr";
    const signName = cleanStr(body.signName || "");
    const signKey = cleanStr(body.signKey || "");

    const userMessages = buildChatMessages(body);
    if (!userMessages.length) {
      return jsonError("NO_MESSAGES", 400, { receivedKeys: Object.keys(body || {}) });
    }

    // ===== Auth: Bearer puis session cookie
    let user_id: string | null = null;

    // 1) Bearer token
    const bearer = readBearer(req);
    if (bearer) {
      const { data, error } = await supabaseAdmin.auth.getUser(bearer);
      if (!error && data?.user?.id) user_id = data.user.id;
    }

    // 2) Session cookie (si ANON KEY dispo)
    if (!user_id && SUPABASE_ANON_KEY) {
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

    // =========================
    // GUEST FLOW
    // =========================
    if (!isAuthed) {
      let count = 0;

      try {
        count = await ensureGuestRowAndGetCount(supabaseAdmin, guest_id);
      } catch (err: any) {
        if (isMissingTableError(err)) {
          // IMPORTANT: erreur explicite au lieu d'un 500 flou
          const res = jsonError("GUEST_USAGE_TABLE_MISSING", 500, {
            table: GUEST_USAGE_TABLE,
            hint:
              "Crée la table guest_usage (guest_id text PK, count int) dans Supabase, puis redeploy.",
          });
          setGuestCookie(res, guest_id);
          return res;
        }

        const res = jsonError("GUEST_USAGE_READ_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
        setGuestCookie(res, guest_id);
        return res;
      }

      if (count >= FREE_LIMIT) {
        const res = NextResponse.json(
          { error: "FREE_LIMIT_REACHED", free_limit: FREE_LIMIT },
          { status: 402 }
        );
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

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [{ role: "system", content: system }, ...userMessages],
      });

      const raw = cleanStr(completion.choices?.[0]?.message?.content ?? "");
      let short = enforceGuestFormat(raw);

      let newCount = 0;
      try {
        newCount = await incrementGuestCount(supabaseAdmin, guest_id);
      } catch (err: any) {
        if (isMissingTableError(err)) {
          const res = jsonError("GUEST_USAGE_TABLE_MISSING", 500, {
            table: GUEST_USAGE_TABLE,
            hint:
              "Crée la table guest_usage (guest_id text PK, count int) dans Supabase, puis redeploy.",
          });
          setGuestCookie(res, guest_id);
          return res;
        }
        const res = jsonError("GUEST_USAGE_UPDATE_FAILED", 500, {
          detail: cleanStr(err?.message || err),
        });
        setGuestCookie(res, guest_id);
        return res;
      }

      const remaining = Math.max(0, FREE_LIMIT - newCount);

      if (remaining <= UPSELL_WHEN_REMAINING_LTE) {
        const candidate = (short + UPSELL_TEXT_FR).replace(/\s+/g, " ").trim();
        short = candidate.length <= 240 ? candidate : enforceGuestFormat(candidate);
      }

      const res = NextResponse.json(
        { message: short, reply: short, mode: "guest", remaining },
        { status: 200 }
      );
      setGuestCookie(res, guest_id);
      return res;
    }

    // =========================
    // AUTH FLOW (premium required)
    // =========================
    let premium = false;
    try {
      premium = await isPremiumActive(supabaseAdmin, user_id!);
    } catch (err: any) {
      return jsonError("SUBSCRIPTION_CHECK_FAILED", 500, {
        detail: cleanStr(err?.message || err),
      });
    }

    if (!premium) return jsonError("PREMIUM_REQUIRED", 402);

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

    return NextResponse.json(
      { message: answer, reply: answer, mode: "auth" },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: "SERVER_ERROR", detail: cleanStr(e?.message || e) },
      { status: 500 }
    );
  }
}
