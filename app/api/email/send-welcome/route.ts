import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
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

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST() {
  // 1) User connecté
  const supabaseAuth = createRouteHandlerClient({ cookies });
  const { data: userRes, error: userErr } = await supabaseAuth.auth.getUser();

  if (userErr || !userRes?.user) return json(401, { ok: false, error: "Unauthorized" });

  const userId = userRes.user.id;
  const emailRaw = userRes.user.email ?? "";
  if (!isValidEmail(emailRaw)) return json(400, { ok: false, error: "Invalid or missing email" });
  const email = emailRaw.trim().toLowerCase();

  // 2) Admin Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl) return json(400, { ok: false, error: "Missing NEXT_PUBLIC_SUPABASE_URL" });
  if (!serviceRole) return json(400, { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" });

  const admin = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false } });

  const nowIso = new Date().toISOString();

  // 3) Upsert + récupère sent_welcome_at en une shot
  const { data: upRow, error: upErr } = await admin
    .from("email_reminders")
    .upsert(
      { user_id: userId, email, last_seen_at: nowIso },
      { onConflict: "user_id" }
    )
    .select("sent_welcome_at")
    .maybeSingle();

  if (upErr) return json(400, { ok: false, error: upErr.message ?? String(upErr) });

  // 4) Déjà envoyé ?
  if (upRow?.sent_welcome_at) {
    return json(200, { ok: true, skipped: true, reason: "welcome_already_sent" });
  }

  // 5) Resend
  const key = process.env.RESEND_API_KEY;
  if (!key) return json(400, { ok: false, error: "Missing RESEND_API_KEY" });

  const from = process.env.FROM_EMAIL || "Luna Astralis <contact@luna-astralis.app>";
  const replyTo = process.env.RESEND_REPLY_TO || "lunaastraliss@gmail.com";
  const siteUrl = cleanUrl(process.env.NEXT_PUBLIC_SITE_URL, "https://luna-astralis.app");
  const chatUrl = `${siteUrl}/chat`;

  const resend = new Resend(key);

  const { data, error } = await resend.emails.send({
    from,
    to: email,
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

  // 6) Marquer comme envoyé (uniquement si encore NULL)
  const { error: markErr } = await admin
    .from("email_reminders")
    .update({ sent_welcome_at: nowIso })
    .eq("user_id", userId)
    .is("sent_welcome_at", null);

  if (markErr) {
    return json(200, { ok: true, sent: true, id: data?.id ?? null, warning: "sent_but_not_marked" });
  }

  return json(200, { ok: true, sent: true, id: data?.id ?? null });
}
