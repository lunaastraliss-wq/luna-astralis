// app/api/email/send-premium/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

const EMAIL_TEXT: Record<
  Lang,
  {
    subject: string;
    title: string;
    activated: string;
    goChat: string;
    support: string;
    textThanks: string;
    textChat: string;
    textSupport: string;
    invalidJson: string;
    invalidEmail: string;
    missingKey: string;
  }
> = {
  fr: {
    subject: "Abonnement activé — Luna Astralis",
    title: "✅ Abonnement activé",
    activated: "Merci ✨ Ton abonnement est maintenant actif.",
    goChat: "Aller au chat",
    support: "Besoin d’aide ? Réponds à ce mail 💜",
    textThanks: "Merci ! Ton abonnement est activé.",
    textChat: "Accède au chat",
    textSupport: "Support : réponds à ce mail 💜",
    invalidJson: "JSON invalide",
    invalidEmail: "Email invalide",
    missingKey: "Clé API Resend manquante",
  },

  en: {
    subject: "Subscription activated — Luna Astralis",
    title: "✅ Subscription activated",
    activated: "Thank you ✨ Your subscription is now active.",
    goChat: "Go to chat",
    support: "Need help? Reply to this email 💜",
    textThanks: "Thank you! Your subscription is active.",
    textChat: "Access the chat",
    textSupport: "Support: reply to this email 💜",
    invalidJson: "Invalid JSON",
    invalidEmail: "Invalid email",
    missingKey: "Missing Resend API key",
  },

  es: {
    subject: "Suscripción activada — Luna Astralis",
    title: "✅ Suscripción activada",
    activated: "Gracias ✨ Tu suscripción ya está activa.",
    goChat: "Ir al chat",
    support: "¿Necesitas ayuda? Responde a este correo 💜",
    textThanks: "¡Gracias! Tu suscripción está activa.",
    textChat: "Accede al chat",
    textSupport: "Soporte: responde a este correo 💜",
    invalidJson: "JSON inválido",
    invalidEmail: "Correo electrónico inválido",
    missingKey: "Falta la clave API de Resend",
  },

  de: {
    subject: "Abonnement aktiviert — Luna Astralis",
    title: "✅ Abonnement aktiviert",
    activated: "Danke ✨ Dein Abonnement ist jetzt aktiv.",
    goChat: "Zum Chat",
    support: "Brauchst du Hilfe? Antworte auf diese E-Mail 💜",
    textThanks: "Danke! Dein Abonnement ist aktiv.",
    textChat: "Zum Chat",
    textSupport: "Support: Antworte auf diese E-Mail 💜",
    invalidJson: "Ungültiges JSON",
    invalidEmail: "Ungültige E-Mail-Adresse",
    missingKey: "Resend-API-Schlüssel fehlt",
  },

  it: {
    subject: "Abbonamento attivato — Luna Astralis",
    title: "✅ Abbonamento attivato",
    activated: "Grazie ✨ Il tuo abbonamento è ora attivo.",
    goChat: "Vai alla chat",
    support: "Hai bisogno di aiuto? Rispondi a questa email 💜",
    textThanks: "Grazie! Il tuo abbonamento è attivo.",
    textChat: "Accedi alla chat",
    textSupport: "Supporto: rispondi a questa email 💜",
    invalidJson: "JSON non valido",
    invalidEmail: "Email non valida",
    missingKey: "Chiave API Resend mancante",
  },

  pt: {
    subject: "Assinatura ativada — Luna Astralis",
    title: "✅ Assinatura ativada",
    activated: "Obrigado ✨ Sua assinatura agora está ativa.",
    goChat: "Ir para o chat",
    support: "Precisa de ajuda? Responda a este email 💜",
    textThanks: "Obrigado! Sua assinatura está ativa.",
    textChat: "Acesse o chat",
    textSupport: "Suporte: responda a este email 💜",
    invalidJson: "JSON inválido",
    invalidEmail: "Email inválido",
    missingKey: "Chave da API Resend ausente",
  },
};

function json(
  status: number,
  payload: any
) {
  return NextResponse.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
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

function isValidEmail(
  v: unknown
): v is string {
  if (typeof v !== "string") {
    return false;
  }

  const s = v.trim();

  return (
    s.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(s)
  );
}

function cleanUrl(
  v: unknown,
  fallback: string
) {
  const s =
    typeof v === "string"
      ? v.trim()
      : "";

  const url = s || fallback;

  return url.endsWith("/")
    ? url.slice(0, -1)
    : url;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(
  req: Request
) {
  /*
    0) Secret interne :
    empêche l'utilisation publique directe de cette route.
  */
  const secret =
    req.headers.get("x-email-secret") || "";

  const expected =
    process.env.INTERNAL_EMAIL_SECRET || "";

  if (
    !expected ||
    secret !== expected
  ) {
    return json(401, {
      ok: false,
      error: "Unauthorized",
    });
  }

  /*
    1) Body
  */
  let body: any;

  try {
    body = await req.json();
  } catch {
    return json(400, {
      ok: false,
      error: "INVALID_JSON",
    });
  }

  const lang = normalizeLang(body?.lang);
  const ui = EMAIL_TEXT[lang];

  const email = body?.email;

  const plan =
    typeof body?.plan === "string" &&
    body.plan.trim()
      ? body.plan.trim()
      : "premium";

  if (!isValidEmail(email)) {
    return json(400, {
      ok: false,
      error: ui.invalidEmail,
    });
  }

  /*
    2) ENV
  */
  const key =
    process.env.RESEND_API_KEY;

  if (!key) {
    return json(400, {
      ok: false,
      error: ui.missingKey,
    });
  }

  const from =
    process.env.FROM_EMAIL ||
    "Luna Astralis <contact@luna-astralis.app>";

  const replyTo =
    process.env.RESEND_REPLY_TO ||
    "lunaastraliss@gmail.com";

  const siteUrl = cleanUrl(
    process.env.NEXT_PUBLIC_SITE_URL,
    "https://luna-astralis.app"
  );

  /*
    Chat localisé :
    /fr/chat
    /en/chat
    /es/chat
    /de/chat
    /it/chat
    /pt/chat
  */
  const chatUrl =
    `${siteUrl}/${lang}/chat`;

  /*
    3) Contenu email
  */
  const safePlan =
    escapeHtml(plan);

  const text =
    `${ui.textThanks}\n\n` +
    `${ui.textChat}: ${chatUrl}\n\n` +
    `${ui.textSupport}`;

  const html = `
    <div
      style="
        font-family:Arial,sans-serif;
        line-height:1.6;
        color:#111827;
      "
    >
      <h2>${ui.title}</h2>

      <p>
        ${ui.activated}
      </p>

      <p>
        <strong>${safePlan}</strong>
      </p>

      <p>
        <a
          href="${chatUrl}"
          style="
            display:inline-block;
            padding:12px 18px;
            background:#16a34a;
            color:#ffffff;
            border-radius:10px;
            text-decoration:none;
            font-weight:600;
          "
        >
          ${ui.goChat}
        </a>
      </p>

      <p
        style="
          opacity:.8;
          font-size:13px;
          margin-top:18px;
        "
      >
        ${ui.support}
      </p>
    </div>
  `;

  /*
    4) Envoi Resend
  */
  const resend =
    new Resend(key);

  const {
    data,
    error,
  } = await resend.emails.send({
    from,
    to: email
      .trim()
      .toLowerCase(),
    replyTo,
    subject: ui.subject,
    text,
    html,
    tags: [
      {
        name: "type",
        value: "premium",
      },
      {
        name: "lang",
        value: lang,
      },
    ],
  });

  if (error) {
    return json(400, {
      ok: false,
      error:
        error.message ||
        "Resend error",
    });
  }

  return json(200, {
    ok: true,
    id: data?.id ?? null,
    lang,
  });
}
