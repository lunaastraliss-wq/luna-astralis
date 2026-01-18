import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(status: number, payload: any) {
  return NextResponse.json(payload, { status, headers: { "Cache-Control": "no-store" } });
}
function isValidEmail(v: unknown): v is string {
  if (typeof v !== "string") return false;
  const s = v.trim();
  return s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(s);
}

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL || "Luna Astralis <contact@luna-astralis.app>";
  const replyTo = process.env.RESEND_REPLY_TO || "lunaastraliss@gmail.com";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luna-astralis.app";
  if (!key) return json(400, { ok: false, error: "Missing RESEND_API_KEY" });

  let body: any;
  try { body = await req.json(); } catch { return json(400, { ok: false, error: "Invalid JSON" }); }

  const email = body?.email;
  if (!isValidEmail(email)) return json(400, { ok: false, error: "Invalid email" });

  const chatUrl = `${siteUrl.replace(/\/$/, "")}/chat`;
  const resend = new Resend(key);

  const { data, error } = await resend.emails.send({
    from,
    to: email.trim().toLowerCase(),
    replyTo,
    subject: "🌙 Bienvenue sur Luna Astralis",
    text: `Bienvenue sur Luna Astralis ✨\n\nCommence ici : ${chatUrl}\n\nRéponds à ce mail si tu as une question 💜`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>🌙 Bienvenue sur Luna Astralis</h2>
        <p>Je suis vraiment contente de te compter parmi nous ✨</p>
        <p>
          <a href="${chatUrl}"
             style="display:inline-block;padding:12px 18px;background:#6d28d9;color:#fff;border-radius:10px;text-decoration:none;">
            Commencer le chat
          </a>
        </p>
        <p style="opacity:.8;font-size:13px;margin-top:18px;">
          Si tu as une question, réponds simplement à ce mail 💜
        </p>
      </div>
    `,
    tags: [{ name: "type", value: "welcome" }],
  });

  if (error) return json(400, { ok: false, error: error.message ?? "Resend error" });
  return json(200, { ok: true, id: data?.id ?? null });
}
