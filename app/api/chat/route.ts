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
  apiKey: OPENAI_API_KEY,
});

const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      })
    : null;

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

const LANG_LABEL: Record<Lang, string> = {
  fr: "français",
  en: "English",
  es: "español",
  de: "Deutsch",
  it: "italiano",
  pt: "português do Brasil",
};

const UPSELL_TEXT: Record<Lang, string> = {
  fr: " Pour aller plus loin avec Luna : accès complet.",
  en: " To go further with Luna: unlock full access.",
  es: " Para profundizar con Luna: desbloquea el acceso completo.",
  de: " Für mehr mit Luna: vollständigen Zugang freischalten.",
  it: " Per approfondire con Luna: sblocca l’accesso completo.",
  pt: " Para ir além com a Luna: libere o acesso completo.",
};

const S1_VARIANTS: Record<Lang, string[]> = {
  fr: [
    "Je te lis.",
    "Je suis là.",
    "D’accord, je comprends.",
    "Merci de me le dire.",
    "OK, je t’écoute.",
  ],
  en: [
    "I hear you.",
    "I’m here.",
    "I understand.",
    "Thank you for telling me.",
    "I’m listening.",
  ],
  es: [
    "Te leo.",
    "Estoy aquí.",
    "Entiendo.",
    "Gracias por contármelo.",
    "Te escucho.",
  ],
  de: [
    "Ich höre dir zu.",
    "Ich bin da.",
    "Ich verstehe.",
    "Danke, dass du mir das sagst.",
    "Ich höre zu.",
  ],
  it: [
    "Ti ascolto.",
    "Sono qui.",
    "Capisco.",
    "Grazie per avermelo detto.",
    "Ti sto ascoltando.",
  ],
  pt: [
    "Estou te ouvindo.",
    "Estou aqui.",
    "Entendo.",
    "Obrigado por me contar.",
    "Estou ouvindo você.",
  ],
};

const S2_VARIANTS: Record<Lang, string[]> = {
  fr: [
    "Il semble y avoir une émotion importante derrière ce que tu vis.",
    "On dirait que quelque chose demande à être clarifié en toi.",
    "Je sens une tension entre ce que tu ressens et ce que tu veux.",
    "Cette situation semble toucher une limite ou un besoin profond.",
    "Il y a peut-être un choix intérieur qui cherche à se préciser.",
    "Ton signe peut aider à mettre des mots sur ce que tu traverses.",
  ],
  en: [
    "There seems to be an important emotion behind what you’re going through.",
    "It sounds like something inside you needs more clarity.",
    "There may be tension between what you feel and what you want.",
    "This situation may be touching a deeper need or boundary.",
    "An inner choice may be trying to become clearer.",
    "Your sign can help put words to what you’re experiencing.",
  ],
  es: [
    "Parece haber una emoción importante detrás de lo que estás viviendo.",
    "Da la impresión de que algo dentro de ti necesita más claridad.",
    "Puede haber una tensión entre lo que sientes y lo que quieres.",
    "Esta situación puede estar tocando una necesidad o un límite profundo.",
    "Tal vez una elección interior esté intentando definirse.",
    "Tu signo puede ayudarte a poner palabras a lo que estás viviendo.",
  ],
  de: [
    "Hinter dem, was du gerade erlebst, scheint eine wichtige Emotion zu stehen.",
    "Es wirkt, als brauche etwas in dir mehr Klarheit.",
    "Vielleicht gibt es eine Spannung zwischen dem, was du fühlst, und dem, was du willst.",
    "Diese Situation berührt möglicherweise ein tieferes Bedürfnis oder eine Grenze.",
    "Vielleicht möchte sich eine innere Entscheidung klarer zeigen.",
    "Dein Sternzeichen kann helfen, Worte für das zu finden, was du erlebst.",
  ],
  it: [
    "Sembra esserci un’emozione importante dietro ciò che stai vivendo.",
    "Sembra che qualcosa dentro di te abbia bisogno di maggiore chiarezza.",
    "Potrebbe esserci una tensione tra ciò che senti e ciò che vuoi.",
    "Questa situazione può toccare un bisogno o un limite profondo.",
    "Forse una scelta interiore sta cercando di definirsi meglio.",
    "Il tuo segno può aiutarti a dare un nome a ciò che stai vivendo.",
  ],
  pt: [
    "Parece haver uma emoção importante por trás do que você está vivendo.",
    "Parece que algo dentro de você precisa de mais clareza.",
    "Pode existir uma tensão entre o que você sente e o que você quer.",
    "Essa situação pode estar tocando uma necessidade ou um limite mais profundo.",
    "Talvez uma escolha interior esteja tentando se definir.",
    "Seu signo pode ajudar a colocar em palavras o que você está vivendo.",
  ],
};

const Q_VARIANTS: Record<Lang, string[]> = {
  fr: [
    "Qu’est-ce qui pèse le plus en ce moment ?",
    "Qu’aimerais-tu mieux comprendre dans cette situation ?",
    "Quelle émotion revient le plus souvent ?",
    "Qu’est-ce que tu aimerais changer concrètement ?",
    "De quoi aurais-tu besoin pour te sentir plus aligné(e) ?",
    "Qu’est-ce que ton intuition te dit déjà ?",
    "Par quoi veux-tu commencer ?",
  ],
  en: [
    "What feels heaviest right now?",
    "What would you like to understand better in this situation?",
    "Which emotion keeps coming back?",
    "What would you like to change concretely?",
    "What would help you feel more aligned?",
    "What is your intuition already telling you?",
    "Where would you like to start?",
  ],
  es: [
    "¿Qué es lo que más pesa en este momento?",
    "¿Qué te gustaría comprender mejor de esta situación?",
    "¿Qué emoción aparece con más frecuencia?",
    "¿Qué te gustaría cambiar de forma concreta?",
    "¿Qué necesitarías para sentirte más alineado/a?",
    "¿Qué te dice ya tu intuición?",
    "¿Por dónde quieres empezar?",
  ],
  de: [
    "Was belastet dich im Moment am meisten?",
    "Was möchtest du in dieser Situation besser verstehen?",
    "Welche Emotion kehrt am häufigsten zurück?",
    "Was möchtest du konkret verändern?",
    "Was würde dir helfen, dich mehr im Einklang mit dir selbst zu fühlen?",
    "Was sagt dir deine Intuition bereits?",
    "Womit möchtest du anfangen?",
  ],
  it: [
    "Che cosa pesa di più in questo momento?",
    "Che cosa vorresti capire meglio di questa situazione?",
    "Quale emozione torna più spesso?",
    "Che cosa vorresti cambiare concretamente?",
    "Di che cosa avresti bisogno per sentirti più in sintonia con te stesso/a?",
    "Che cosa ti sta già dicendo la tua intuizione?",
    "Da dove vuoi iniziare?",
  ],
  pt: [
    "O que está pesando mais neste momento?",
    "O que você gostaria de entender melhor nessa situação?",
    "Qual emoção aparece com mais frequência?",
    "O que você gostaria de mudar de forma concreta?",
    "Do que você precisa para se sentir mais alinhado(a)?",
    "O que a sua intuição já está dizendo?",
    "Por onde você quer começar?",
  ],
};

function cleanStr(v: unknown) {
  return (v == null ? "" : String(v)).trim();
}

function normalizeLang(v: unknown): Lang {
  const raw = cleanStr(v).toLowerCase().replace("_", "-");
  const base = raw.split("-")[0];

  if (
    base === "fr" ||
    base === "en" ||
    base === "es" ||
    base === "de" ||
    base === "it" ||
    base === "pt"
  ) {
    return base;
  }

  return "fr";
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

function enforceShortFormat(input: string, lang: Lang, lastS2?: string) {
  const text = cleanStr(input).replace(/\s+/g, " ");

  const parts = text
    .split(/(?<=[.!?¡¿])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const qIdx = parts.findIndex((p) => p.includes("?"));
  const qSentence = qIdx >= 0 ? parts[qIdx] : "";
  const nonQ = qIdx >= 0 ? parts.filter((_, i) => i !== qIdx) : parts;

  let s1 = nonQ[0] ?? "";
  let s2 = nonQ[1] ?? "";
  let q = qSentence;

  if (!s1) s1 = pickOne(S1_VARIANTS[lang]);

  if (!s2) {
    const pool = lastS2
      ? S2_VARIANTS[lang].filter((x) => x !== lastS2)
      : S2_VARIANTS[lang];

    s2 = pickOne(pool.length ? pool : S2_VARIANTS[lang]);
  }

  if (!q) q = pickOne(Q_VARIANTS[lang]);

  if (!/[?]\s*$/.test(q)) {
    q = q.replace(/[.!…]\s*$/, "").trimEnd() + "?";
  }

  if (s1 && !/[.!?…]\s*$/.test(s1)) s1 += ".";
  if (s2 && !/[.!?…]\s*$/.test(s2)) s2 += ".";

  let out = `${s1} ${s2} ${q}`.replace(/\s+/g, " ").trim();

  if (out.length > 240) {
    const fallback = `${s1} ${q}`.replace(/\s+/g, " ").trim();
    out = fallback.length <= 240 ? fallback : fallback.slice(0, 239).trimEnd();

    if (!/[?]\s*$/.test(out)) {
      out = out.replace(/[.!…]\s*$/g, "").trimEnd();
      if (out.length > 238) out = out.slice(0, 238).trimEnd();
      out += "?";
    }
  }

  return out;
}

function extractSecondSentence(text: string) {
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
  lang: Lang;
  signName: string;
  signKey: string;
}) {
  const { lang, signName, signKey } = params;

  return `
You are Luna, the official astrology guide of Luna Astralis.

Use astrology as a tool for reflection, introspection and personal development.

Help the user better understand:
- emotions;
- strengths;
- challenges;
- habits;
- stress;
- self-confidence;
- goals;
- choices;
- career;
- family;
- relationships;
- personal growth.

Never bring the conversation back to love or romantic compatibility unless the user brings it up.

Style:
- warm;
- insightful;
- clear;
- concrete;
- supportive;
- never dramatic.

IMPORTANT:
- Never claim to be a doctor, psychologist, lawyer or fortune teller.
- Never diagnose.
- Never predict the future as a certainty.
- Offer reflection inspired by astrology.
- Adapt subtly to the provided zodiac sign.
- Avoid empty generalities.
- Give useful, human and actionable responses.

Response structure:
1) What the situation may reveal
2) What the user's sign may illuminate
3) One concrete direction
4) One small action to take now

LANGUAGE RULE:
Reply only in ${LANG_LABEL[lang]}.
Do not switch language unless the user explicitly asks you to.

Zodiac sign: ${signName || signKey || "—"}.
  `.trim();
}

function buildFreeSystemPrompt(params: {
  lang: Lang;
  signName: string;
  signKey: string;
}) {
  const { lang, signName, signKey } = params;

  return `
You are Luna, the official astrology guide of Luna Astralis.

Use astrology as a tool for reflection and personal development.

Help the user better understand:
- emotions;
- challenges;
- strengths;
- stress;
- choices;
- needs;
- boundaries;
- relationships only if the user brings them up.

Never bring the conversation back to love on your own.
Only discuss love or compatibility if the user clearly asks about it.

FREE VERSION RULES:
- Help the user clarify what they are experiencing.
- Identify the main emotion, blockage or need.
- Offer one short reflection inspired by the user's sign.
- Do not give a long analysis.
- Always end with one short open question.

VERY SHORT RESPONSE:
2 short sentences + 1 question.
Maximum 240 characters.

STYLE:
Warm, calm, direct, human, non-dramatic.

LANGUAGE RULE:
Reply only in ${LANG_LABEL[lang]}.
Do not switch language unless the user explicitly asks you to.

Zodiac sign: ${signName || signKey || "—"}.
  `.trim();
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    hasOpenAIKey: !!OPENAI_API_KEY,
    hasSupabaseAdmin: !!supabaseAdmin,
  });
}

export async function POST(req: Request) {
  try {
    if (!OPENAI_API_KEY) {
      return jsonError("OPENAI_API_KEY_MISSING", 500);
    }

    if (!supabaseAdmin) {
      return jsonError("SUPABASE_ADMIN_MISSING", 500);
    }

    const body = await req.json().catch(() => null);

    if (!body) {
      return jsonError("INVALID_JSON", 400);
    }

    const lang = normalizeLang(body.lang);
    const signName = cleanStr(body.signName || "");
    const signKey = cleanStr(body.signKey || "");
    const guestId = cleanStr(body.guestId || "");

    const userMessages = buildChatMessages(body);

    if (!userMessages.length) {
      return jsonError("NO_MESSAGES", 400);
    }

    const lastUserText = getLastUserMessage(userMessages);

    if (!lastUserText) {
      return jsonError("NO_USER_MESSAGE", 400);
    }

    const supabaseAuth = createRouteHandlerClient({
      cookies: () => cookies(),
    });

    const { data: sess } = await supabaseAuth.auth.getSession();
    const user_id = sess?.session?.user?.id ?? null;

    const avatarSrc = "/ia-luna-astralis.png";

    /*
      ========================================================
      UTILISATEUR CONNECTÉ
      ========================================================
    */

    if (user_id) {
      const premium = await isPremiumActive(user_id);

      /*
        ---------------- PREMIUM ----------------
      */
      if (premium) {
        await incrementUsage({
          user_id,
          guest_id: null,
        }).catch(() => {});

        const system = buildPremiumSystemPrompt({
          lang,
          signName,
          signKey,
        });

        const completion = await openai.responses.create({
          model: "gpt-4o",
          input: [
            {
              role: "system",
              content: system,
            },
            ...userMessages,
          ] as any,
        });

        const answer = cleanStr(
          completion.output_text || ""
        );

        return NextResponse.json(
          {
            message: answer,
            reply: answer,
            mode: "auth_premium",
            lang,
            avatarSrc,
          },
          {
            status: 200,
          }
        );
      }

      /*
        ---------------- GRATUIT CONNECTÉ ----------------
      */

      const usage0 = await getOrCreateUsage({
        user_id,
        guest_id: null,
      });

      const used0 = Number(
        usage0.messages_count || 0
      );

      if (used0 >= FREE_LIMIT) {
        return NextResponse.json(
          {
            error: "FREE_LIMIT_REACHED",
            upgrade_required: true,
            free_limit: FREE_LIMIT,
            used: used0,
            remaining: 0,
            mode: "auth_free",
            lang,
          },
          {
            status: 402,
          }
        );
      }

      const context = pickLastNMessages(
        userMessages,
        10
      );

      const lastAssistant = [...context]
        .reverse()
        .find(
          (m) =>
            m.role === "assistant" &&
            cleanStr(m.content)
        );

      const lastS2 = lastAssistant
        ? extractSecondSentence(
            lastAssistant.content
          )
        : "";

      const system = buildFreeSystemPrompt({
        lang,
        signName,
        signKey,
      });

      const completion =
        await openai.responses.create({
          model: "gpt-4o-mini",
          input: [
            {
              role: "system",
              content: system,
            },
            ...context,
          ] as any,
        });

      const raw = cleanStr(
        completion.output_text || ""
      );

      let short = enforceShortFormat(
        raw,
        lang,
        lastS2 || undefined
      );

      const updated = await incrementUsage({
        user_id,
        guest_id: null,
      });

      const used = Number(
        updated.messages_count || 0
      );

      const remaining = Math.max(
        0,
        FREE_LIMIT - used
      );

      if (
        remaining <=
        UPSELL_WHEN_REMAINING_LTE
      ) {
        const candidate = (
          short + UPSELL_TEXT[lang]
        )
          .replace(/\s+/g, " ")
          .trim();

        short =
          candidate.length <= 240
            ? candidate
            : enforceShortFormat(
                candidate,
                lang,
                lastS2 || undefined
              );
      }

      return NextResponse.json(
        {
          message: short,
          reply: short,
          mode: "auth_free",
          used,
          remaining,
          free_limit: FREE_LIMIT,
          lang,
          avatarSrc,
        },
        {
          status: 200,
        }
      );
    }

    /*
      ========================================================
      INVITÉ
      ========================================================
    */

    if (!guestId) {
      return NextResponse.json(
        {
          error: "GUEST_ID_MISSING",
          detail:
            lang === "fr"
              ? "guestId requis pour le mode invité."
              : lang === "en"
              ? "guestId is required for guest mode."
              : lang === "es"
              ? "guestId es obligatorio para el modo invitado."
              : lang === "de"
              ? "guestId ist für den Gastmodus erforderlich."
              : lang === "it"
              ? "guestId è obbligatorio per la modalità ospite."
              : "guestId é obrigatório para o modo visitante.",
        },
        {
          status: 400,
        }
      );
    }

    const usage0 = await getOrCreateUsage({
      user_id: null,
      guest_id: guestId,
    });

    const used0 = Number(
      usage0.messages_count || 0
    );

    if (used0 >= FREE_LIMIT) {
      return NextResponse.json(
        {
          error: "FREE_LIMIT_REACHED",
          upgrade_required: true,
          free_limit: FREE_LIMIT,
          used: used0,
          remaining: 0,
          mode: "guest_free",
          lang,
        },
        {
          status: 402,
        }
      );
    }

    const context = pickLastNMessages(
      userMessages,
      10
    );

    const lastAssistant = [...context]
      .reverse()
      .find(
        (m) =>
          m.role === "assistant" &&
          cleanStr(m.content)
      );

    const lastS2 = lastAssistant
      ? extractSecondSentence(
          lastAssistant.content
        )
      : "";

    const system = buildFreeSystemPrompt({
      lang,
      signName,
      signKey,
    });

    const completion =
      await openai.responses.create({
        model: "gpt-4o-mini",
        input: [
          {
            role: "system",
            content: system,
          },
          ...context,
        ] as any,
      });

    const raw = cleanStr(
      completion.output_text || ""
    );

    let short = enforceShortFormat(
      raw,
      lang,
      lastS2 || undefined
    );

    const updated = await incrementUsage({
      user_id: null,
      guest_id: guestId,
    });

    const used = Number(
      updated.messages_count || 0
    );

    const remaining = Math.max(
      0,
      FREE_LIMIT - used
    );

    if (
      remaining <=
      UPSELL_WHEN_REMAINING_LTE
    ) {
      const candidate = (
        short + UPSELL_TEXT[lang]
      )
        .replace(/\s+/g, " ")
        .trim();

      short =
        candidate.length <= 240
          ? candidate
          : enforceShortFormat(
              candidate,
              lang,
              lastS2 || undefined
            );
    }

    return NextResponse.json(
      {
        message: short,
        reply: short,
        mode: "guest_free",
        used,
        remaining,
        free_limit: FREE_LIMIT,
        lang,
        avatarSrc,
      },
      {
        status: 200,
      }
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
      {
        status: 500,
      }
    );
  }
}
