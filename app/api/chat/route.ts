// app/api/chat/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FREE_LIMIT = 15;
const UPSELL_WHEN_REMAINING_LTE = 5;
const UPSELL_TEXT_FR =
  " Pour aller plus loin avec Luna: accès complet.";

const CHAT_USAGE_TABLE = "chat_usage";

const SUBS_TABLE = "user_subscriptions";
const SUBS_COL_USER_ID = "user_id";
const SUBS_COL_STATUS = "status";
const SUBS_COL_CURRENT_PERIOD_END = "current_period_end";
const ACTIVE_STATUSES = new Set(["active", "trialing"]);

const OPENAI_API_KEY = (process.env.OPENAI_API_KEY ?? "").trim();

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

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

function pickOne(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
    if (msgs[i]?.role === "user" && cleanStr(msgs[i].content)) {
      return cleanStr(msgs[i].content);
    }
  }

  return "";
}

function pickLastNMessages(
  msgs: Array<{ role: string; content: string }>,
  n: number
) {
  return msgs
    .slice(Math.max(0, msgs.length - n))
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: cleanStr(m.content),
    }))
    .filter((m) => m.content);
}

const S1_VARIANTS_FR = [
  "Je te lis.",
  "Je suis là.",
  "D’accord, je comprends.",
  "Merci de me le dire.",
  "Ok, je t’écoute.",
];

const S2_VARIANTS_FR = [
  "Il semble y avoir une émotion importante derrière ce que tu vis.",
  "On dirait que quelque chose demande à être clarifié en toi.",
  "Je sens une tension entre ce que tu ressens et ce que tu veux vraiment.",
  "Cette situation semble toucher une limite ou un besoin profond.",
  "Il y a peut-être un choix intérieur qui cherche à se préciser.",
  "Ton signe peut aider à mettre des mots sur ce que tu traverses.",
];

const Q_VARIANTS_FR = [
  "Qu’est-ce qui pèse le plus en ce moment ?",
  "Qu’aimerais-tu mieux comprendre dans cette situation ?",
  "Quelle émotion revient le plus souvent ?",
  "Qu’est-ce que tu aimerais changer concrètement ?",
  "De quoi aurais-tu besoin pour te sentir plus aligné(e) ?",
  "Qu’est-ce que ton intuition te dit déjà ?",
  "Par quoi veux-tu commencer ?",
];

function enforceShortFormatFR(input: string, lastS2?: string) {
  const text = cleanStr(input).replace(/\s+/g, " ");

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

  if (!s1) s1 = pickOne(S1_VARIANTS_FR);

  if (!s2) {
    const pool = lastS2
      ? S2_VARIANTS_FR.filter((x) => x !== lastS2)
      : S2_VARIANTS_FR;

    s2 = pickOne(pool.length ? pool : S2_VARIANTS_FR);
  }

  if (!q) q = pickOne(Q_VARIANTS_FR);

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

function extractSecondSentenceFR(text: string) {
  const t = cleanStr(text).replace(/\s+/g, " ");

  const parts = t
    .split(/(?<=[.!?])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return parts[1] ? parts[1].replace(/[.!?…]\s*$/, "").trim() : "";
}

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

type UsageRow = {
  id: string;
  user_id: string | null;
  guest_id: string | null;
  messages_count: number;
  free_limit: number;
  first_message_at: string | null;
  last_message_at: string | null;
  limit_reached_at: string | null;
  created_at: string | null;
};

async function getOrCreateUsage(params: {
  user_id: string | null;
  guest_id: string | null;
}) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const uid = params.user_id || null;
  const gid = uid ? null : params.guest_id || null;

  if (!uid && !gid) throw new Error("MISSING_ID_FOR_USAGE");

  let query = supabaseAdmin.from(CHAT_USAGE_TABLE).select("*").limit(1);

  const { data: existing, error: readErr } = uid
    ? await query.eq("user_id", uid).maybeSingle()
    : await query.eq("guest_id", gid as string).maybeSingle();

  if (readErr) throw readErr;
  if (existing) return existing as UsageRow;

  const now = new Date().toISOString();

  const { data: created, error: insErr } = await supabaseAdmin
    .from(CHAT_USAGE_TABLE)
    .insert({
      user_id: uid,
      guest_id: gid,
      messages_count: 0,
      free_limit: FREE_LIMIT,
      first_message_at: null,
      last_message_at: null,
      limit_reached_at: null,
      created_at: now,
    })
    .select("*")
    .single();

  if (insErr) throw insErr;

  return created as UsageRow;
}

async function incrementUsage(params: {
  user_id: string | null;
  guest_id: string | null;
}) {
  if (!supabaseAdmin) throw new Error("Supabase admin not configured");

  const row = await getOrCreateUsage(params);
  const next = Math.max(0, Number(row.messages_count || 0)) + 1;

  const now = new Date().toISOString();
  const firstAt = row.first_message_at || now;
  const limitReachedAt =
    row.limit_reached_at || (next >= FREE_LIMIT ? now : null);

  const { data: updated, error: updErr } = await supabaseAdmin
    .from(CHAT_USAGE_TABLE)
    .update({
      messages_count: next,
      free_limit: FREE_LIMIT,
      first_message_at: firstAt,
      last_message_at: now,
      limit_reached_at: limitReachedAt,
    })
    .eq("id", row.id)
    .select("*")
    .single();

  if (updErr) throw updErr;

  return updated as UsageRow;
}

function buildPremiumSystemPrompt(params: {
  lang: string;
  signName: string;
  signKey: string;
}) {
  const { lang, signName, signKey } = params;

  return `
Tu es Luna, la guide astrologique officielle de Luna Astralis.

Tu utilises l’astrologie comme un outil de réflexion, d’introspection et de développement personnel.

Tu aides l’utilisateur à mieux comprendre :
- ses émotions;
- ses forces;
- ses défis;
- ses habitudes;
- son stress;
- sa confiance en lui/elle;
- ses objectifs;
- ses choix;
- sa carrière;
- sa famille;
- ses relations;
- son évolution personnelle.

Tu ne ramènes jamais spontanément la conversation à l’amour ou à la compatibilité amoureuse.
Tu abordes l’amour uniquement si l’utilisateur en parle lui-même.

Style :
- chaleureux;
- profond;
- clair;
- concret;
- bienveillant;
- sans dramatiser.

IMPORTANT :
- Tu ne prétends jamais être médecin, psychologue, avocat ou voyant.
- Tu ne poses pas de diagnostic.
- Tu ne prédis jamais l’avenir comme une certitude.
- Tu proposes des pistes de réflexion inspirées de l’astrologie.
- Tu adaptes subtilement ta réponse au signe astrologique fourni.
- Tu évites les généralités vides.
- Tu donnes une réponse utile, humaine et actionnable.

Structure de réponse :
1) Ce que la situation révèle
2) Ce que ton signe peut éclairer
3) Une direction concrète
4) Une petite action à poser maintenant

Langue: ${lang}.
Signe: ${signName || signKey || "—"}.
`.trim();
}

function buildFreeSystemPrompt(params: {
  signName: string;
  signKey: string;
}) {
  const { signName, signKey } = params;

  return `
Tu es Luna, la guide astrologique officielle de Luna Astralis.

Tu utilises l’astrologie comme un outil de réflexion et de développement personnel.

Tu aides l’utilisateur à mieux comprendre :
- ses émotions;
- ses défis;
- ses forces;
- son stress;
- ses choix;
- ses besoins;
- ses limites;
- ses relations seulement si l’utilisateur en parle.

Tu ne ramènes jamais spontanément la conversation à l’amour.
Tu parles d’amour ou de compatibilité seulement si l’utilisateur le demande clairement.

RÈGLES version gratuite :
- Tu aides l’utilisateur à clarifier ce qu’il vit.
- Tu identifies l’émotion, le blocage ou le besoin principal.
- Tu proposes une mini-piste de réflexion inspirée de son signe.
- Tu ne fais pas une longue analyse.
- Tu termines toujours par 1 question courte et ouverte.

Réponse très courte :
2 phrases + 1 question.
Maximum 240 caractères.

Style :
chaleureux, calme, direct, humain, sans dramatiser.

Langue: fr.
Signe: ${signName || signKey || "—"}.
`.trim();
}

export async function GET() {
  const key = process.env.OPENAI_API_KEY || "";

  return NextResponse.json({
    ok: true,
    hasOpenAIKey: !!key,
    keyLength: key.length,
    keyStart: key.slice(0, 12),
    keyEnd: key.slice(-12),
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
    const guestId = cleanStr(body.guestId || "");

    const userMessages = buildChatMessages(body);
    if (!userMessages.length) return jsonError("NO_MESSAGES", 400);

    const lastUserText = getLastUserMessage(userMessages);
    if (!lastUserText) return jsonError("NO_USER_MESSAGE", 400);

    const supabaseAuth = createRouteHandlerClient({
      cookies: () => cookies(),
    });

    const { data: sess } = await supabaseAuth.auth.getSession();
    const user_id = sess?.session?.user?.id ?? null;

    const avatarSrc = "/ia-luna-astralis.png";

    if (user_id) {
      const premium = await isPremiumActive(user_id);

      if (premium) {
        await incrementUsage({ user_id, guest_id: null }).catch(() => {});

        const system = buildPremiumSystemPrompt({
          lang,
          signName,
          signKey,
        });

        const completion = await openai.responses.create({
          model: "gpt-4o",
          input: [
            { role: "system", content: system },
            ...userMessages,
          ] as any,
        });

        const answer = cleanStr(completion.output_text || "");

        return NextResponse.json(
          {
            message: answer,
            reply: answer,
            mode: "auth_premium",
            avatarSrc,
          },
          { status: 200 }
        );
      }

      const usage0 = await getOrCreateUsage({ user_id, guest_id: null });
      const used0 = Number(usage0.messages_count || 0);

      if (used0 >= FREE_LIMIT) {
        return NextResponse.json(
          {
            error: "FREE_LIMIT_REACHED",
            upgrade_required: true,
            free_limit: FREE_LIMIT,
            used: used0,
            remaining: 0,
            mode: "auth_free",
          },
          { status: 402 }
        );
      }

      const context = pickLastNMessages(userMessages, 10);

      const lastAssistant = [...context]
        .reverse()
        .find((m) => m.role === "assistant" && cleanStr(m.content));

      const lastS2 = lastAssistant
        ? extractSecondSentenceFR(lastAssistant.content)
        : "";

      const system = buildFreeSystemPrompt({
        signName,
        signKey,
      });

      const completion = await openai.responses.create({
        model: "gpt-4o-mini",
        input: [
          { role: "system", content: system },
          ...context,
        ] as any,
      });

      const raw = cleanStr(completion.output_text || "");
      let short = enforceShortFormatFR(raw, lastS2 || undefined);

      const updated = await incrementUsage({ user_id, guest_id: null });
      const used = Number(updated.messages_count || 0);
      const remaining = Math.max(0, FREE_LIMIT - used);

      if (remaining <= UPSELL_WHEN_REMAINING_LTE) {
        const candidate = (short + UPSELL_TEXT_FR).replace(/\s+/g, " ").trim();

        short =
          candidate.length <= 240
            ? candidate
            : enforceShortFormatFR(candidate, lastS2 || undefined);
      }

      return NextResponse.json(
        {
          message: short,
          reply: short,
          mode: "auth_free",
          used,
          remaining,
          free_limit: FREE_LIMIT,
          avatarSrc,
        },
        { status: 200 }
      );
    }

    if (!guestId) {
      return NextResponse.json(
        {
          error: "GUEST_ID_MISSING",
          detail: "guestId requis pour le mode invité.",
        },
        { status: 400 }
      );
    }

    const usage0 = await getOrCreateUsage({
      user_id: null,
      guest_id: guestId,
    });

    const used0 = Number(usage0.messages_count || 0);

    if (used0 >= FREE_LIMIT) {
      return NextResponse.json(
        {
          error: "FREE_LIMIT_REACHED",
          upgrade_required: true,
          free_limit: FREE_LIMIT,
          used: used0,
          remaining: 0,
          mode: "guest_free",
        },
        { status: 402 }
      );
    }

    const context = pickLastNMessages(userMessages, 10);

    const lastAssistant = [...context]
      .reverse()
      .find((m) => m.role === "assistant" && cleanStr(m.content));

    const lastS2 = lastAssistant
      ? extractSecondSentenceFR(lastAssistant.content)
      : "";

    const system = buildFreeSystemPrompt({
      signName,
      signKey,
    });

    const completion = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        ...context,
      ] as any,
    });

    const raw = cleanStr(completion.output_text || "");
    let short = enforceShortFormatFR(raw, lastS2 || undefined);

    const updated = await incrementUsage({
      user_id: null,
      guest_id: guestId,
    });

    const used = Number(updated.messages_count || 0);
    const remaining = Math.max(0, FREE_LIMIT - used);

    if (remaining <= UPSELL_WHEN_REMAINING_LTE) {
      const candidate = (short + UPSELL_TEXT_FR).replace(/\s+/g, " ").trim();

      short =
        candidate.length <= 240
          ? candidate
          : enforceShortFormatFR(candidate, lastS2 || undefined);
    }

    return NextResponse.json(
      {
        message: short,
        reply: short,
        mode: "guest_free",
        used,
        remaining,
        free_limit: FREE_LIMIT,
        avatarSrc,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        error: "SERVER_ERROR",
        message: e?.message || null,
        status: e?.status || null,
        code: e?.code || null,
        type: e?.type || null,
        param: e?.param || null,
      },
      { status: 500 }
    );
  }
}
