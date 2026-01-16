import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 400 });
  }

  const body = await req.json().catch(() => null);
  const email = body?.email;

  if (!email) {
    return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
  }

  const resend = new Resend(key);

  const { data, error } = await resend.emails.send({
    from: "Luna Astralis <contact@luna-astralis.app>",
    to: email,
    replyTo: "lunaastraliss@gmail.com",
    subject: "🌙 Bienvenue sur Luna Astralis",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>🌙 Bienvenue sur Luna Astralis</h2>
        <p>Je suis vraiment contente de te compter parmi nous ✨</p>
        <p>Tu peux commencer ton exploration dès maintenant :</p>
        <p>
          <a href="https://www.luna-astralis.app/chat"
             style="display:inline-block;padding:12px 18px;background:#6d28d9;color:#fff;border-radius:10px;text-decoration:none;">
            Commencer le chat
          </a>
        </p>
        <p style="opacity:.8;font-size:13px;margin-top:18px;">
          Si tu as une question, réponds simplement à ce mail 💜
        </p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  return NextResponse.json({ ok: true, data });
}
