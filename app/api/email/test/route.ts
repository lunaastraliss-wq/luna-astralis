import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function GET() {
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 400 });
  }

  const resend = new Resend(key);

  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "lunaastraliss@gmail.com",
    subject: "Test Luna Astralis",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>🌙 Luna Astralis</h2>
        <p>Ton système d'emails fonctionne ✅</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true, data });
}
