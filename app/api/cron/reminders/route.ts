import __i18n from "../../../../i18n/migrated/fr/app/api/cron/reminders/route.json";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
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

// ✅ délais
const M = 60 * 1000;
const D = 24 * 60 * 60 * 1000;

type Kind = "welcome" | "r1" | "r2" | "r3";

function buildEmail(kind: Kind, siteUrl: string) {
  const subject =
    kind === "welcome"
      ? "🌙 Bienvenue sur Luna Astralis"
      : kind === "r1"
      ? "Ton signe t’attend 🌙"
      : kind === "r2"
      ? "Tu veux aller plus loin ? ✨"
      : "Un petit check-in 🌙";

  const ctaHref = kind === "r2" ? `${siteUrl}/pricing` : `${siteUrl}/chat`;
  const ctaText = kind === "r2" ? "Voir les offres" : "Revenir au chat";

  const bodyHtml =
    kind === "welcome"
      ? "<p>Bienvenue ✨ Tu peux commencer ton exploration dès maintenant.</p>"
      : kind === "r1"
      ? "<p>Ton signe t’attend. Reviens quand tu veux 💜</p>"
      : kind === "r2"
      ? "<p>Si tu veux une expérience plus complète, tu peux débloquer l’accès.</p>"
      : "<p>Petit rappel doux : Luna Astralis est là quand tu es prête 🌙</p>";

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
      <h2>🌙 Luna Astralis</h2>
      ${bodyHtml}
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
  `.trim();

  const text =
    kind === "welcome"
      ? `Bienvenue sur Luna Astralis ✨\n\nCommence ici : ${siteUrl}/chat\n\nRéponds à ce mail si tu as une question.`
      : kind === "r1"
      ? `Ton signe t’attend 🌙\n\nReviens au chat : ${siteUrl}/chat`
      : kind === "r2"
      ? `Tu veux aller plus loin ? ✨\n\nVoir les offres : ${siteUrl}/pricing`
      : `Un petit check-in 🌙\n\nLuna Astralis est là : ${siteUrl}/chat`;

  return { subject, html, text };
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");
  if (!secret || secret !== process.env.CRON_SECRET) return unauthorized();

  const resendKey = process.env.RESEND_API_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://luna-astralis.app").replace(/\/$/, "");
  const fromEmail = process.env.FROM_EMAIL || "Luna Astralis <contact@luna-astralis.app>";
  const replyTo = process.env.RESEND_REPLY_TO || "lunaastraliss@gmail.com";

  if (!resendKey) return json(400, { ok: false, error: __i18n["missing_resend_api_key"] });
  if (!supabaseUrl) return json(400, { ok: false, error: __i18n["missing_next_public_supabase_url"] });
  if (!serviceRole) return json(400, { ok: false, error: __i18n["missing_supabase_service_role_key"] });

  const supabase = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false } });
  const resend = new Resend(resendKey);

  const now = Date.now();

  const { data: rows, error } = await supabase
    .from("email_reminders")
    .select("id,email,created_at,is_premium,last_seen_at,sent_welcome_at,sent_r1_at,sent_r2_at,sent_r3_at")
    .eq("is_premium", false)
    .not("email", "is", null)
    .neq("email", "")
    .order("created_at", { ascending: true })
    .limit(200);

  if (error) return json(400, { ok: false, error: error.message ?? error });

  let sent = 0;
  const errors: Array<{ email: string; error: string }> = [];

  for (const r of rows ?? []) {
    if (!r?.created_at) continue;

    const to = safeEmail(r.email);
    if (!to) continue;

    const createdAt = new Date(r.created_at).getTime();
    if (!Number.isFinite(createdAt)) continue;

    // ✅ Stop si revenu (last_seen_at après created_at)
    const lastSeenAt = r.last_seen_at ? new Date(r.last_seen_at).getTime() : null;
    const hasReturned = lastSeenAt !== null && Number.isFinite(lastSeenAt) && lastSeenAt > createdAt;
    if (hasReturned) continue;

    // ✅ Empêche d’envoyer r1/r2/r3 si welcome jamais envoyé
    const hasWelcome = !!r.sent_welcome_at;

    const dueWelcome = !r.sent_welcome_at && now - createdAt >= 30 * M;
    const dueR1 = hasWelcome && !r.sent_r1_at && now - createdAt >= 1 * D;
    const dueR2 = hasWelcome && !r.sent_r2_at && now - createdAt >= 3 * D;
    const dueR3 = hasWelcome && !r.sent_r3_at && now - createdAt >= 7 * D;

    let kind: Kind | null = null;
    if (dueWelcome) kind = "welcome";
    else if (dueR1) kind = "r1";
    else if (dueR2) kind = "r2";
    else if (dueR3) kind = "r3";
    if (!kind) continue;

    const { subject, html, text } = buildEmail(kind, siteUrl);

    const { error: sendErr } = await resend.emails.send({
      from: fromEmail,
      to,
      replyTo,
      subject,
      html,
      text,
      tags: [{ name: "type", value: kind }],
    });

    if (sendErr) {
      errors.push({ email: to, error: sendErr.message ?? String(sendErr) });
      continue;
    }

    const iso = new Date().toISOString();
    const patch: Record<string, string> = {};
    if (kind === "welcome") patch.sent_welcome_at = iso;
    if (kind === "r1") patch.sent_r1_at = iso;
    if (kind === "r2") patch.sent_r2_at = iso;
    if (kind === "r3") patch.sent_r3_at = iso;

    const { error: upErr } = await supabase.from("email_reminders").update(patch).eq("id", r.id);
    if (upErr) {
      errors.push({ email: to, error: upErr.message ?? String(upErr) });
      continue;
    }

    sent++;
  }

  return json(200, { ok: true, sent, errorsCount: errors.length, errors: errors.slice(0, 20) });
}
