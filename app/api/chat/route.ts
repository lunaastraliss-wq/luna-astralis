// app/api/chat/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Luna Astralis — API Chat (FR)
 * ✅ Règles côté API (non contournables)
 * - Guest (pas de session): FREE_LIMIT via public.guest_usage
 * - Auth (session): PREMIUM obligatoire => sinon PREMIUM_REQUIRED
 * - Réponse guest ultra courte (2 phrases + 1 question, max 240 chars)
 * - Upsell ajouté uniquement vers la fin (ex: <= 2 messages restants)
 */

const FREE_LIMIT = 15;

// Quand déclencher le message d'encouragement/paiement (ex: 2 derniers messages)
const UPSELL_WHEN_REMAINING_LTE = 2;

// Texte upsell (court, naturel)
const UPSELL_TEXT_FR =
  " Si tu veux approfondir davantage et comprendre ce qui se joue en profondeur, l’accès complet te permet d’aller beaucoup plus loin.";

// ====== Supabase / DB config (AJUSTE si besoin) ======
const GUEST_USAGE_TABLE = "guest_usage"; // schema public
const GUEST_USAGE_COL_ID = "guest_id";
const GUEST_USAGE_COL_COUNT = "count";

// Table abonnement (AJUSTE selon ton schéma)
const SUBS_TABLE = "user_subscriptions"; // ex: "subscriptions" ou autre
const SUBS_COL_USER_ID = "user_id";
const SUBS_COL_STATUS = "status"; // ex: "active" / "trialing"
const SUBS_COL_CURRENT_PERIOD_END = "current_period_end"; // optionnel

// Valeurs reconnues comme premium actif
const ACTIVE_STATUSES = new Set(["active", "trialing"]);

// ====== ENV ======
const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

// ====== Clients ======
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

// ====== Utils ======
function jsonError(code: string, status = 400, extra: Record<string, any> = {}) {
  return NextResponse.json({ ok: false, error: code, ...extra }, { status });
}

function cleanStr(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}

function makeGuestId() {
  return crypto.randomBytes(16).toString("hex");
}

function nowUnix() {
  return Math.floor(Date.now() / 1000);
}

function toUnixMaybe(v: any): number | null {
  if (!v) return null;
  if (typeof v === "number") return v; // seconds already
  const t = Date.parse(String(v));
  if (Number.isFinite(t)) return Math.floor(t / 1000);
  return null;
}

/**
 * Enforce guest format:
 * - 2 phrases + 1 question
 * - max 240 chars
 */
function enforceGuestFormat(input: string) {
  let text = cleanStr(input).replace(/\s+/g, " ");

  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);

  // find question
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

  // Hard trim to 240 chars
  if (out.length > 240) {
    out = out.slice(0, 239).trimEnd();
    out = out.replace(/[\uD800-\uDBFF]$/g, ""); // avoid cutting surrogate
    if (!/[?]\s*$/.test(out)) {
      out = out.replace(/[.!…]\s*$/g, "").trimEnd();
      if (out.length > 238) out = out.slice(0, 238).trimEnd();
      out += " ?";
    }
  }

  return out;
}

async function getOrCreateGuestId() {
  const cookieStore = await cookies();
  let gid = cookieStore.get("la_gid")?.value;
  if (!gid) gid = makeGuestId();
  return gid;
}

async function ensureGuestRowAndGetCount(guest_id: string) {
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

async function incrementGuestCount(guest_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");
  const current = await ensureGuestRowAndGetCount(guest_id);
  const next = current + 1;

  const { error: updErr } = await supabaseAdmin
    .from(GUEST_USAGE_TABLE)
    .update({ [GUEST_USAGE_COL_COUNT]: next })
    .eq(GUEST_USAGE_COL_ID, guest_id);

  if (updErr) throw updErr;
  return next;
}

async function isPremiumActive(user_id: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const { data, error } = await supabaseAdmin
    .from(SUBS_TABLE)
    .select(`${SUBS_COL_STATUS}, ${SUBS_COL_CURRENT_PERIOD_END}`)
    .eq(SUBS_COL_USER_ID, user_id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!data) return false;

  const status = cleanStr((data as any)[SUBS_COL_STATUS]).toLowerCase();
  if (!ACTIVE_STATUSES.has(status)) return false;

  const cpe = (data as any)[SUBS_COL_CURRENT_PERIOD_END];
  const cpeUnix = toUnixMaybe(cpe);
  if (cpeUnix == null) return true; // si tu n'as pas cette colonne, laisse comme ça

  return cpeUnix > nowUnix();
}

function setGuestCookie(res: NextResponse, guest_id: string) {
  res.headers.append(
    "Set-Cookie",
    `la_gid=${guest_id}; Path=/; Max-Age=31536000; SameSite=Lax`
  );
}

// ====== Handler ======
export async function POST(req: Request) {
  try {
    if (!OPENAI_API_KEY) return jsonError("OPENAI_API_KEY_MISSING", 500);
    if (!supabaseAdmin) return jsonError("SUPABASE_ADMIN_MISSING", 500);

    const body = await req.json().catch(() => null);
    if (!body) return jsonError("INVALID_JSON", 400);

    const userMessages = Array.isArray(body.messages) ? body.messages : [];
    const lang = cleanStr(body.lang || "fr") || "fr";

    // Session Supabase (auth)
    const supabaseAuth = createRouteHandlerClient({ cookies });
    const {
      data: { session },
    } = await supabaseAuth.auth.getSession();

    const isAuthed = Boolean(session?.user?.id);
    const user_id = session?.user?.id ?? null;

    // =========================
    // GUEST FLOW
    // =========================
    if (!isAuthed) {
      const guest_id = await getOrCreateGuestId();

      const count = await ensureGuestRowAndGetCount(guest_id);
      if (count >= FREE_LIMIT) {
        const res = NextResponse.json(
          { ok: false, error: "FREE_LIMIT_REACHED", free_limit: FREE_LIMIT },
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
`.trim();

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
          { role: "system", content: system },
          ...userMessages.map((m: any) => ({
            role: m?.role === "assistant" ? "assistant" : "user",
            content: cleanStr(m?.content),
          })),
        ],
      });

      const raw = cleanStr(completion.choices?.[0]?.message?.content ?? "");
      let short = enforceGuestFormat(raw);

      const newCount = await incrementGuestCount(guest_id);
      const remaining = Math.max(0, FREE_LIMIT - newCount);

      // ✅ Upsell seulement vers la fin
      if (remaining <= UPSELL_WHEN_REMAINING_LTE) {
        // IMPORTANT: on reste court. Si ça dépasse 240, on tronque proprement.
        const candidate = (short + UPSELL_TEXT_FR).replace(/\s+/g, " ").trim();
        short = candidate.length <= 240 ? candidate : enforceGuestFormat(candidate);
      }

      const res = NextResponse.json(
        { ok: true, mode: "guest", remaining, message: short },
        { status: 200 }
      );
      setGuestCookie(res, guest_id);
      return res;
    }

    // =========================
    // AUTH FLOW (premium required)
    // =========================
    if (!user_id) return jsonError("AUTH_REQUIRED", 401);

    const premium = await isPremiumActive(user_id);
    if (!premium) return jsonError("PREMIUM_REQUIRED", 402);

    const system = `
Tu es l’assistante Luna Astralis.
Style: chaleureux, profond, clair, concret.
Tu peux développer, proposer des pistes, poser des questions pertinentes.
Tu ne prétends pas être médecin; pas de diagnostics.
Langue: ${lang}.
`.trim();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.8,
      messages: [
        { role: "system", content: system },
        ...userMessages.map((m: any) => ({
          role: m?.role === "assistant" ? "assistant" : "user",
          content: cleanStr(m?.content),
        })),
      ],
    });

    const answer = cleanStr(completion.choices?.[0]?.message?.content ?? "");

    return NextResponse.json(
      { ok: true, mode: "auth", message: answer },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR", detail: cleanStr(e?.message) },
      { status: 500 }
    );
  }
}

