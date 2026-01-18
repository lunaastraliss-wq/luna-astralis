import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");
  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 400 });

  const resend = new Resend(key);

  const to = url.searchParams.get("to") || "lunaastraliss@gmail.com";

  const { data, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL || "Luna Astralis <contact@luna-astralis.app>",
    to,
    subject: "Test Luna Astralis",
    text: "Test OK",
  });

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
