import __i18n from "../../../../i18n/migrated/fr/app/api/email/send-premium/route.json";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(status: number, payload: any) {
  return NextResponse.json(payload, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isValidEmail(v: unknown): v is string {
  if (typeof v !== "string") return false;
  const s = v.trim();
  return s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(s);
}

function cleanUrl(v: unknown, fallback: string) {
  const s = (typeof v === "string" ? v : "").trim();
  const url = s || fallback;
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export async function POST(req: Request) {
  // ✅ 0) Secret interne pour éviter le spam public
  const secret = req.headers.get("x-email-secret") || "";
  const expected = process.env.INTERNAL_EMAIL_SECRET || "";
  if (!expected || secret !== expected) {
    return json(401, { ok: false, error: "Unauthorized" });
  }

  // ✅ 1) ENV
  const key = process.env.RESEND_API_KEY;
  if (!key) return json(400, { ok: false, error: __i18n["missing_resend_api_key"] });

  const from = process.env.FROM_EMAIL || "Luna Astralis <contact@luna-astralis.app>";
  const replyTo = process.env.RESEND_REPLY_TO || "lunaastraliss@gmail.com";
  const siteUrl = cleanUrl(process.env.NEXT_PUBLIC_SITE_URL, "https://luna-astralis.app");
  const chatUrl = `${siteUrl}/chat`;

  // ✅ 2) Body
  let body: any;
  try {
    body = await req.json();
  } catch {
    return json(400, { ok: false, error: __i18n["invalid_json"] });
  }

  const email = body?.email;
  const plan = typeof body?.plan === "string" ? body.plan.trim() : "premium";

  if (!isValidEmail(email)) return json(400, { ok: false, error: __i18n["invalid_email"] });

  // ✅ 3) Envoi
  const resend = new Resend(key);

  const { data, error } = await resend.emails.send({
    from,
    to: email.trim().toLowerCase(),
    replyTo,
    subject: __i18n["abonnement_active_luna_astralis"],
    text:
      `Merci ! Ton abonnement (${plan}) est activé.\n\n` +
      `Accède au chat : ${chatUrl}\n\n` +
      `Support : réponds à ce mail 💜`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>✅ Abonnement activé</h2>
        <p>Merci ✨ Ton abonnement <b>${escapeHtml(plan)}</b> est maintenant actif.</p>
        <p>
          <a href="${chatUrl}"
             style="display:inline-block;padding:12px 18px;background:#16a34a;color:#fff;border-radius:10px;text-decoration:none;">
            Aller au chat
          </a>
        </p>
        <p style="opacity:.8;font-size:13px;margin-top:18px;">
          Besoin d’aide ? Réponds à ce mail 💜
        </p>
      </div>
    `,
    tags: [{ name: "type", value: "premium" }],
  });

  if (error) return json(400, { ok: false, error: error.message ?? "Resend error" });
  return json(200, { ok: true, id: data?.id ?? null });
}

// mini protection HTML
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
