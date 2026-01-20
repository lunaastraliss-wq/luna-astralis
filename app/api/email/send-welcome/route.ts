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

export async function POST() {
  // 1) User connecté (cookie session)
  const supabaseAuth = createRouteHandlerClient({ cookies });
  const { data: userRes, error: userErr } = await supabaseAuth.auth.getUser();

  if (userErr || !userRes?.user) {
    return json(401, { ok: false, error: "Unauthorized" });
  }

  const userId = userRes.user.id;
  const email = (userRes.user.email || "").trim().toLowerCase();
  if (!email) return json(400, { ok: false, error: "Missing email" });

  // 2) Admin Supabase (service role)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) return json(400, { ok: false, error: "Missing NEXT_PUBLIC_SUPABASE_URL" });
  if (!serviceRole) return json(400, { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" });

  const admin = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false } });

  const nowIso = new Date().toISOString();

  // 3) Crée ou update la ligne (sans toucher sent_welcome_at)
  const { error: upErr } = await admin
    .from("email_reminders")
    .upsert(
      {
        user_id: userId,
        email,
        last_seen_at: nowIso,
      },
      { onConflict: "user_id" }
    );

  if (upErr) return json(400, { ok: false, error: upErr.message ?? String(upErr) });

  // 4) Check si welcome déjà envoyé
  const { data: row, error: selErr } = await admin
    .from("email_reminders")
    .select("sent_welcome_at")
    .eq("user_id", userId)
    .maybeSingle();

  if (selErr) return json(400, { ok: false, error: selErr.message ?? String(selErr) });

  if (row?.sent_welcome_at) {
    return json(200, { ok: true, skipped: true, reason: "welcome_already_sent" });
  }

  // 5) Resend
  const key = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL || "Luna Astralis <contact@luna-astralis.app>";
  const replyTo = process.env.RESEND_REPLY_TO || "lunaastraliss@gmail.com";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luna-astralis.app";

  if (!key) return json(400, { ok: false, error: "Missing RESEND_API_KEY" });

  const chatUrl = `${siteUrl.replace(/\/$/, "")}/chat`;
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

  // 6) Marque le welcome comme envoyé
  const { error: markErr } = await admin
    .from("email_reminders")
    .update({ sent_welcome_at: nowIso })
    .eq("user_id", userId);

  if (markErr) {
    return json(200, {
      ok: true,
      sent: true,
      id: data?.id ?? null,
      warning: "sent_but_not_marked",
    });
  }

  return json(200, { ok: true, sent: true, id: data?.id ?? null });
}
