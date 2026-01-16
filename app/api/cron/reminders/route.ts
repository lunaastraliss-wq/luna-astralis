import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: Request) {
  const url = new URL(req.url);

  const secret = url.searchParams.get("secret");
  if (!secret || secret !== process.env.CRON_SECRET) return unauthorized();

  const resendKey = process.env.RESEND_API_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!resendKey) return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 400 });
  if (!supabaseUrl) return NextResponse.json({ ok: false, error: "Missing NEXT_PUBLIC_SUPABASE_URL" }, { status: 400 });
  if (!serviceRole) return NextResponse.json({ ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" }, { status: 400 });

  const supabase = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false } });
  const resend = new Resend(resendKey);

  const now = Date.now();
  const H = 60 * 60 * 1000;
  const D = 24 * H;
  const M = 60 * 1000;

  // ✅ On relance seulement les FREE non premium
  const { data: rows, error } = await supabase
    .from("email_reminders")
    .select("id,email,created_at,is_premium,sent_welcome_at,sent_r1_at,sent_r2_at,sent_r3_at")
    .eq("is_premium", false)
    .not("email", "is", null)
    .neq("email", "")
    .order("created_at", { ascending: true })
    .limit(200);

  if (error) return NextResponse.json({ ok: false, error }, { status: 400 });

  let sent = 0;

  for (const r of rows ?? []) {
    const createdAt = new Date(r.created_at).getTime();

    // ✅ Envoi en cascade: Welcome (30 min) -> R1 (24h) -> R2 (72h) -> R3 (7j)
    const dueWelcome = !r.sent_welcome_at && now - createdAt >= 30 * M;
    const dueR1 = !r.sent_r1_at && now - createdAt >= 1 * D;
    const dueR2 = !r.sent_r2_at && now - createdAt >= 3 * D;
    const dueR3 = !r.sent_r3_at && now - createdAt >= 7 * D;

    let kind: "welcome" | "r1" | "r2" | "r3" | null = null;
    if (dueWelcome) kind = "welcome";
    else if (dueR1) kind = "r1";
    else if (dueR2) kind = "r2";
    else if (dueR3) kind = "r3";
    if (!kind) continue;

    // ✅ Anti “vient de payer” : on re-check juste avant l'envoi
    const { data: latest, error: latestErr } = await supabase
      .from("email_reminders")
      .select("is_premium")
      .eq("id", r.id)
      .single();

    if (latestErr) continue;
    if (!latest || latest.is_premium) continue;

    const subject =
      kind === "welcome"
        ? "🌙 Bienvenue sur Luna Astralis"
        : kind === "r1"
        ? "Ton signe t’attend 🌙"
        : kind === "r2"
        ? "Tu veux aller plus loin ? ✨"
        : "Un petit check-in 🌙";

    const ctaHref =
      kind === "r2" ? "https://www.luna-astralis.app/pricing" : "https://www.luna-astralis.app/chat";

    const ctaText = kind === "r2" ? "Voir les offres" : "Revenir au chat";

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>🌙 Luna Astralis</h2>
        ${
          kind === "welcome"
            ? "<p>Bienvenue ✨ Tu peux commencer ton exploration dès maintenant.</p>"
            : kind === "r1"
            ? "<p>Ton signe t’attend. Reviens quand tu veux 💜</p>"
            : kind === "r2"
            ? "<p>Si tu veux une expérience plus complète, tu peux débloquer l’accès.</p>"
            : "<p>Petit rappel doux : Luna Astralis est là quand tu es prête 🌙</p>"
        }
        <p>
          <a href="${ctaHref}"
             style="display:inline-block;padding:12px 18px;background:#6d28d9;color:#fff;border-radius:10px;text-decoration:none;">
            ${ctaText}
          </a>
        </p>
        <p style="opacity:.75;font-size:12px;margin-top:18px">
          Tu peux répondre à ce mail pour nous écrire.
        </p>
      </div>
    `;

    const { error: sendErr } = await resend.emails.send({
      from: "Luna Astralis <contact@luna-astralis.app>",
      to: r.email,
      replyTo: "lunaastraliss@gmail.com",
      subject,
      html,
    });

    if (sendErr) {
      console.error("Resend error", r.email, sendErr);
      continue;
    }

    sent++;

    const iso = new Date().toISOString();
    const patch: Record<string, string> = {};
    if (kind === "welcome") patch.sent_welcome_at = iso;
    if (kind === "r1") patch.sent_r1_at = iso;
    if (kind === "r2") patch.sent_r2_at = iso;
    if (kind === "r3") patch.sent_r3_at = iso;

    const { error: upErr } = await supabase.from("email_reminders").update(patch).eq("id", r.id);
    if (upErr) console.error("Update error", r.id, upErr);
  }

  return NextResponse.json({ ok: true, sent });
}
