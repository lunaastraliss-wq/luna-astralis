// app/api/cron/reminders/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";
type Kind = "welcome" | "r1" | "r2" | "r3";

function unauthorized() {
  return NextResponse.json(
    { ok: false, error: "Unauthorized" },
    { status: 401 }
  );
}

function json(status: number, payload: any) {
  return NextResponse.json(payload, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function safeEmail(v: unknown): string | null {
  if (typeof v !== "string") return null;

  const s = v.trim().toLowerCase();

  if (!s || s.length > 254) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(s)) return null;

  return s;
}

function normalizeLang(v: unknown): Lang {
  const raw =
    typeof v === "string"
      ? v.trim().toLowerCase().replace("_", "-")
      : "";

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

const M = 60 * 1000;
const D = 24 * 60 * 60 * 1000;

const COPY: Record<
  Lang,
  Record<
    Kind,
    {
      subject: string;
      bodyHtml: string;
      ctaText: string;
      footer: string;
      text: string;
    }
  >
> = {
  fr: {
    welcome: {
      subject: "🌙 Bienvenue sur Luna Astralis",
      bodyHtml: "Bienvenue ✨ Tu peux commencer ton exploration dès maintenant.",
      ctaText: "Commencer le chat",
      footer: "Tu peux répondre à ce mail pour nous écrire.",
      text: "Bienvenue sur Luna Astralis ✨",
    },
    r1: {
      subject: "Ton signe t’attend 🌙",
      bodyHtml: "Ton signe t’attend. Reviens quand tu veux 💜",
      ctaText: "Revenir au chat",
      footer: "Tu peux répondre à ce mail pour nous écrire.",
      text: "Ton signe t’attend 🌙",
    },
    r2: {
      subject: "Tu veux aller plus loin ? ✨",
      bodyHtml: "Si tu veux une expérience plus complète, tu peux débloquer l’accès.",
      ctaText: "Voir les offres",
      footer: "Tu peux répondre à ce mail pour nous écrire.",
      text: "Tu veux aller plus loin ? ✨",
    },
    r3: {
      subject: "Un petit check-in 🌙",
      bodyHtml: "Petit rappel doux : Luna Astralis est là quand tu es prête 🌙",
      ctaText: "Revenir au chat",
      footer: "Tu peux répondre à ce mail pour nous écrire.",
      text: "Un petit check-in 🌙",
    },
  },

  en: {
    welcome: {
      subject: "🌙 Welcome to Luna Astralis",
      bodyHtml: "Welcome ✨ You can start your exploration right now.",
      ctaText: "Start the chat",
      footer: "You can reply to this email if you want to reach us.",
      text: "Welcome to Luna Astralis ✨",
    },
    r1: {
      subject: "Your sign is waiting 🌙",
      bodyHtml: "Your sign is waiting. Come back whenever you like 💜",
      ctaText: "Return to chat",
      footer: "You can reply to this email if you want to reach us.",
      text: "Your sign is waiting 🌙",
    },
    r2: {
      subject: "Want to go further? ✨",
      bodyHtml: "If you want a more complete experience, you can unlock full access.",
      ctaText: "View plans",
      footer: "You can reply to this email if you want to reach us.",
      text: "Want to go further? ✨",
    },
    r3: {
      subject: "A little check-in 🌙",
      bodyHtml: "A gentle reminder: Luna Astralis is here whenever you're ready 🌙",
      ctaText: "Return to chat",
      footer: "You can reply to this email if you want to reach us.",
      text: "A little check-in 🌙",
    },
  },

  es: {
    welcome: {
      subject: "🌙 Bienvenido a Luna Astralis",
      bodyHtml: "Bienvenido ✨ Puedes comenzar tu exploración ahora mismo.",
      ctaText: "Comenzar el chat",
      footer: "Puedes responder a este correo si quieres escribirnos.",
      text: "Bienvenido a Luna Astralis ✨",
    },
    r1: {
      subject: "Tu signo te espera 🌙",
      bodyHtml: "Tu signo te espera. Vuelve cuando quieras 💜",
      ctaText: "Volver al chat",
      footer: "Puedes responder a este correo si quieres escribirnos.",
      text: "Tu signo te espera 🌙",
    },
    r2: {
      subject: "¿Quieres ir más lejos? ✨",
      bodyHtml: "Si quieres una experiencia más completa, puedes desbloquear el acceso.",
      ctaText: "Ver planes",
      footer: "Puedes responder a este correo si quieres escribirnos.",
      text: "¿Quieres ir más lejos? ✨",
    },
    r3: {
      subject: "Un pequeño recordatorio 🌙",
      bodyHtml: "Un recordatorio suave: Luna Astralis está aquí cuando estés listo/a 🌙",
      ctaText: "Volver al chat",
      footer: "Puedes responder a este correo si quieres escribirnos.",
      text: "Un pequeño recordatorio 🌙",
    },
  },

  de: {
    welcome: {
      subject: "🌙 Willkommen bei Luna Astralis",
      bodyHtml: "Willkommen ✨ Du kannst deine Entdeckungsreise jetzt beginnen.",
      ctaText: "Chat starten",
      footer: "Du kannst auf diese E-Mail antworten, wenn du uns schreiben möchtest.",
      text: "Willkommen bei Luna Astralis ✨",
    },
    r1: {
      subject: "Dein Sternzeichen wartet 🌙",
      bodyHtml: "Dein Sternzeichen wartet. Komm jederzeit zurück 💜",
      ctaText: "Zurück zum Chat",
      footer: "Du kannst auf diese E-Mail antworten, wenn du uns schreiben möchtest.",
      text: "Dein Sternzeichen wartet 🌙",
    },
    r2: {
      subject: "Möchtest du weitergehen? ✨",
      bodyHtml: "Wenn du eine umfassendere Erfahrung möchtest, kannst du den vollständigen Zugang freischalten.",
      ctaText: "Tarife ansehen",
      footer: "Du kannst auf diese E-Mail antworten, wenn du uns schreiben möchtest.",
      text: "Möchtest du weitergehen? ✨",
    },
    r3: {
      subject: "Ein kleiner Check-in 🌙",
      bodyHtml: "Eine sanfte Erinnerung: Luna Astralis ist da, wenn du bereit bist 🌙",
      ctaText: "Zurück zum Chat",
      footer: "Du kannst auf diese E-Mail antworten, wenn du uns schreiben möchtest.",
      text: "Ein kleiner Check-in 🌙",
    },
  },

  it: {
    welcome: {
      subject: "🌙 Benvenuto su Luna Astralis",
      bodyHtml: "Benvenuto ✨ Puoi iniziare subito la tua esplorazione.",
      ctaText: "Inizia la chat",
      footer: "Puoi rispondere a questa email se vuoi scriverci.",
      text: "Benvenuto su Luna Astralis ✨",
    },
    r1: {
      subject: "Il tuo segno ti aspetta 🌙",
      bodyHtml: "Il tuo segno ti aspetta. Torna quando vuoi 💜",
      ctaText: "Torna alla chat",
      footer: "Puoi rispondere a questa email se vuoi scriverci.",
      text: "Il tuo segno ti aspetta 🌙",
    },
    r2: {
      subject: "Vuoi andare oltre? ✨",
      bodyHtml: "Se vuoi un’esperienza più completa, puoi sbloccare l’accesso.",
      ctaText: "Vedi i piani",
      footer: "Puoi rispondere a questa email se vuoi scriverci.",
      text: "Vuoi andare oltre? ✨",
    },
    r3: {
      subject: "Un piccolo check-in 🌙",
      bodyHtml: "Un promemoria gentile: Luna Astralis è qui quando sei pronto/a 🌙",
      ctaText: "Torna alla chat",
      footer: "Puoi rispondere a questa email se vuoi scriverci.",
      text: "Un piccolo check-in 🌙",
    },
  },

  pt: {
    welcome: {
      subject: "🌙 Bem-vindo à Luna Astralis",
      bodyHtml: "Bem-vindo ✨ Você pode começar sua exploração agora mesmo.",
      ctaText: "Começar o chat",
      footer: "Você pode responder a este email se quiser falar conosco.",
      text: "Bem-vindo à Luna Astralis ✨",
    },
    r1: {
      subject: "Seu signo está esperando 🌙",
      bodyHtml: "Seu signo está esperando. Volte quando quiser 💜",
      ctaText: "Voltar ao chat",
      footer: "Você pode responder a este email se quiser falar conosco.",
      text: "Seu signo está esperando 🌙",
    },
    r2: {
      subject: "Quer ir mais longe? ✨",
      bodyHtml: "Se você quiser uma experiência mais completa, pode liberar o acesso.",
      ctaText: "Ver planos",
      footer: "Você pode responder a este email se quiser falar conosco.",
      text: "Quer ir mais longe? ✨",
    },
    r3: {
      subject: "Um pequeno check-in 🌙",
      bodyHtml: "Um lembrete gentil: a Luna Astralis está aqui quando você estiver pronto(a) 🌙",
      ctaText: "Voltar ao chat",
      footer: "Você pode responder a este email se quiser falar conosco.",
      text: "Um pequeno check-in 🌙",
    },
  },
};

function buildEmail(
  kind: Kind,
  siteUrl: string,
  lang: Lang
) {
  const copy = COPY[lang][kind];

  const ctaHref =
    kind === "r2"
      ? `${siteUrl}/${lang}/pricing`
      : `${siteUrl}/${lang}/chat`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
      <h2>🌙 Luna Astralis</h2>

      <p>${copy.bodyHtml}</p>

      <p>
        <a
          href="${ctaHref}"
          style="
            display:inline-block;
            padding:12px 18px;
            background:#6d28d9;
            color:#fff;
            border-radius:10px;
            text-decoration:none;
          "
        >
          ${copy.ctaText}
        </a>
      </p>

      <p style="opacity:.75;font-size:12px;margin-top:18px">
        ${copy.footer}
      </p>
    </div>
  `.trim();

  const text =
    `${copy.text}\n\n` +
    `${copy.ctaText}: ${ctaHref}\n\n` +
    `${copy.footer}`;

  return {
    subject: copy.subject,
    html,
    text,
  };
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");

  if (
    !secret ||
    secret !== process.env.CRON_SECRET
  ) {
    return unauthorized();
  }

  const resendKey =
    process.env.RESEND_API_KEY;

  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const serviceRole =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  const siteUrl =
    (
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://luna-astralis.app"
    ).replace(/\/$/, "");

  const fromEmail =
    process.env.FROM_EMAIL ||
    "Luna Astralis <contact@luna-astralis.app>";

  const replyTo =
    process.env.RESEND_REPLY_TO ||
    "lunaastraliss@gmail.com";

  if (!resendKey) {
    return json(400, {
      ok: false,
      error: "Missing RESEND_API_KEY",
    });
  }

  if (!supabaseUrl) {
    return json(400, {
      ok: false,
      error: "Missing SUPABASE_URL",
    });
  }

  if (!serviceRole) {
    return json(400, {
      ok: false,
      error: "Missing SUPABASE_SERVICE_ROLE_KEY",
    });
  }

  const supabase =
    createClient(
      supabaseUrl,
      serviceRole,
      {
        auth: {
          persistSession: false,
        },
      }
    );

  const resend =
    new Resend(resendKey);

  const now =
    Date.now();

  /*
    IMPORTANT :
    On essaie de lire "lang" si la colonne existe dans email_reminders.

    Pour que le cron puisse savoir dans quelle langue envoyer les rappels,
    il faut idéalement stocker la langue de l'utilisateur dans cette table.

    Si lang est NULL / absente dans une ligne, français est utilisé en fallback.
  */
  const {
    data: rows,
    error,
  } = await supabase
    .from("email_reminders")
    .select(
      "id,email,created_at,is_premium,last_seen_at,sent_welcome_at,sent_r1_at,sent_r2_at,sent_r3_at,lang"
    )
    .eq("is_premium", false)
    .not("email", "is", null)
    .neq("email", "")
    .order("created_at", {
      ascending: true,
    })
    .limit(200);

  if (error) {
    /*
      Compatibilité avec ta table actuelle :
      si la colonne lang n'existe pas encore, on refait la requête sans lang.
    */
    const fallback = await supabase
      .from("email_reminders")
      .select(
        "id,email,created_at,is_premium,last_seen_at,sent_welcome_at,sent_r1_at,sent_r2_at,sent_r3_at"
      )
      .eq("is_premium", false)
      .not("email", "is", null)
      .neq("email", "")
      .order("created_at", {
        ascending: true,
      })
      .limit(200);

    if (fallback.error) {
      return json(400, {
        ok: false,
        error:
          fallback.error.message ??
          fallback.error,
      });
    }

    return await processRows(
      fallback.data ?? [],
      supabase,
      resend,
      {
        now,
        siteUrl,
        fromEmail,
        replyTo,
        forceFallbackLang: true,
      }
    );
  }

  return await processRows(
    rows ?? [],
    supabase,
    resend,
    {
      now,
      siteUrl,
      fromEmail,
      replyTo,
      forceFallbackLang: false,
    }
  );
}

async function processRows(
  rows: any[],
  supabase: any,
  resend: Resend,
  config: {
    now: number;
    siteUrl: string;
    fromEmail: string;
    replyTo: string;
    forceFallbackLang: boolean;
  }
) {
  const {
    now,
    siteUrl,
    fromEmail,
    replyTo,
    forceFallbackLang,
  } = config;

  let sent = 0;

  const errors: Array<{
    email: string;
    error: string;
  }> = [];

  for (const r of rows) {
    if (!r?.created_at) continue;

    const to =
      safeEmail(r.email);

    if (!to) continue;

    const lang =
      forceFallbackLang
        ? "fr"
        : normalizeLang(r?.lang);

    const createdAt =
      new Date(r.created_at).getTime();

    if (!Number.isFinite(createdAt)) {
      continue;
    }

    /*
      Stop si l'utilisateur est revenu :
      last_seen_at > created_at
    */
    const lastSeenAt =
      r.last_seen_at
        ? new Date(r.last_seen_at).getTime()
        : null;

    const hasReturned =
      lastSeenAt !== null &&
      Number.isFinite(lastSeenAt) &&
      lastSeenAt > createdAt;

    if (hasReturned) {
      continue;
    }

    /*
      Empêche r1 / r2 / r3
      si welcome n'a jamais été envoyé.
    */
    const hasWelcome =
      !!r.sent_welcome_at;

    const dueWelcome =
      !r.sent_welcome_at &&
      now - createdAt >= 30 * M;

    const dueR1 =
      hasWelcome &&
      !r.sent_r1_at &&
      now - createdAt >= 1 * D;

    const dueR2 =
      hasWelcome &&
      !r.sent_r2_at &&
      now - createdAt >= 3 * D;

    const dueR3 =
      hasWelcome &&
      !r.sent_r3_at &&
      now - createdAt >= 7 * D;

    let kind: Kind | null =
      null;

    if (dueWelcome) {
      kind = "welcome";
    } else if (dueR1) {
      kind = "r1";
    } else if (dueR2) {
      kind = "r2";
    } else if (dueR3) {
      kind = "r3";
    }

    if (!kind) {
      continue;
    }

    const {
      subject,
      html,
      text,
    } = buildEmail(
      kind,
      siteUrl,
      lang
    );

    const {
      error: sendErr,
    } = await resend.emails.send({
      from: fromEmail,
      to,
      replyTo,
      subject,
      html,
      text,
      tags: [
        {
          name: "type",
          value: kind,
        },
        {
          name: "lang",
          value: lang,
        },
      ],
    });

    if (sendErr) {
      errors.push({
        email: to,
        error:
          sendErr.message ??
          String(sendErr),
      });

      continue;
    }

    const iso =
      new Date().toISOString();

    const patch:
      Record<string, string> = {};

    if (kind === "welcome") {
      patch.sent_welcome_at = iso;
    }

    if (kind === "r1") {
      patch.sent_r1_at = iso;
    }

    if (kind === "r2") {
      patch.sent_r2_at = iso;
    }

    if (kind === "r3") {
      patch.sent_r3_at = iso;
    }

    const {
      error: upErr,
    } = await supabase
      .from("email_reminders")
      .update(patch)
      .eq("id", r.id);

    if (upErr) {
      errors.push({
        email: to,
        error:
          upErr.message ??
          String(upErr),
      });

      continue;
    }

    sent++;
  }

  return json(200, {
    ok: true,
    sent,
    errorsCount: errors.length,
    errors: errors.slice(0, 20),
    languageFallback:
      forceFallbackLang
        ? "fr"
        : null,
  });
}
