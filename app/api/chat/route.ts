// app/api/chat/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

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
const USER_USAGE_TABLE = "user_usage_lifetime";
const USER_USAGE_COL_ID = "user_id";
const USER_USAGE_COL_USED = "used";
const USER_USAGE_COL_UPDATED_AT = "updated_at";

const SUBS_TABLE = "user_subscriptions";
const SUBS_COL_USER_ID = "user_id";
const SUBS_COL_STATUS = "status";
const SUBS_COL_CURRENT_PERIOD_END = "current_period_end";
const ACTIVE_STATUSES = new Set(["active", "trialing"]);

/* ===========================
   ENV
=========================== */
const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

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
  return msgs.filter((m: any) => m.content);
}

function getLastUserMessage(msgs: Array<{ role: string; content: string }>) {
  for (let i = msgs.length - 1; i >= 0; i--) {
    if (msgs[i]?.role === "user" && cleanStr(msgs[i]?.content)) {
      return cleanStr(msgs[i].content);
    }
  }
  return "";
}

// 2 phrases + 1 question max ~240 chars
function enforceShortFormat(input: string) {
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
    if (!/[?]\s*$/.test(out)) {
      out = out.replace(/[.!…]\s*$/g, "").trimEnd();
      if (out.length > 238) out = out.slice(0, 238).trimEnd();
      out += " ?";
    }
  }

  return out;
}

/* ===========================
   SUPABASE: USER USAGE (lifetime)
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

    // ✅ Compte requis (session via cookies)
    const supabaseAuth = createRouteHandlerClient({
      cookies: () => cookies(),
    });

    const { data: sess, error: sessErr } = await supabaseAuth.auth.getSession();
    if (sessErr) {
      return jsonError("SESSION_ERROR", 401, { detail: cleanStr(sessErr.message) });
    }

    const user_id = sess?.session?.user?.id ?? null;
    if (!user_id) {
      return NextResponse.json(
        { error: "AUTH_REQUIRED", require_auth: true },
        { status: 401 }
      );
    }

    const premium = await isPremiumActive(user_id);

    // ===== Free (non premium): 15 lifetime, réponses courtes
    if (!premium) {
      const used = await ensureUserRowAndGetUsed(user_id);
      if (used >= FREE_LIMIT) {
        return NextResponse.json(
          {
            error: "FREE_LIMIT_REACHED",
            upgrade_required: true,
            free_limit: FREE_LIMIT,
            mode: "auth_free",
          },
          { status: 402 }
        );
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

      const context = pickLastNMessages(userMessages, 10);

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [{ role: "system", content: system }, ...context] as any,
      });

      const raw = cleanStr(completion.choices?.[0]?.message?.content ?? "");
      let short = enforceShortFormat(raw);

      // ✅ incrément après succès OpenAI
      const newUsed = await incrementUserUsed(user_id);
      const remaining = Math.max(0, FREE_LIMIT - newUsed);

      if (remaining <= UPSELL_WHEN_REMAINING_LTE) {
        const candidate = (short + UPSELL_TEXT_FR).replace(/\s+/g, " ").trim();
        short = candidate.length <= 240 ? candidate : enforceShortFormat(candidate);
      }

      return NextResponse.json(
        { message: short, reply: short, mode: "auth_free", remaining },
        { status: 200 }
      );
    }

    // ===== Premium: réponses longues
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
      messages: [{ role: "system", content: system }, ...userMessages] as any,
    });

    const answer = cleanStr(completion.choices?.[0]?.message?.content ?? "");

    return NextResponse.json(
      { message: answer, reply: answer, mode: "auth_premium" },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: "SERVER_ERROR", detail: cleanStr(e?.message || e) },
      { status: 500 }
    );
  }
}
