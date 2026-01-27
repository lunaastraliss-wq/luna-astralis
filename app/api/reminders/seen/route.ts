// app/api/reminders/seen/route.ts
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

function clean(s: unknown) {
  return (s == null ? "" : String(s)).trim();
}

export async function POST() {
  // 1) user connecté (session cookie)
  const supabaseAuth = createRouteHandlerClient({ cookies });
  const { data: userRes, error: userErr } = await supabaseAuth.auth.getUser();

  if (userErr || !userRes?.user) {
    return json(401, { ok: false, error: "Unauthorized" });
  }

  const user = userRes.user;
  const userId = user.id;
  const email = clean(user.email).toLowerCase();
  if (!email) return json(400, { ok: false, error: "Missing email" });

  // 2) service role (admin)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) return json(400, { ok: false, error: "Missing NEXT_PUBLIC_SUPABASE_URL" });
  if (!serviceRole) return json(400, { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" });

  const admin = createClient(supabaseUrl, serviceRole, {
    auth: { persistSession: false },
  });

  const nowIso = new Date().toISOString();

  // 3) Lire is_premium depuis profiles (si dispo)
  let isPremium = false;
  try {
    const { data: p } = await admin
      .from("profiles")
      .select("is_premium")
      .eq("id", userId)
      .maybeSingle();

    isPremium = !!p?.is_premium;
  } catch {
    // si profiles n'a pas ce champ, on ignore
  }

  // 4) Lire la ligne email_reminders existante
  const { data: existing, error: getErr } = await admin
    .from("email_reminders")
    .select("user_id, email, reminder_stage")
    .eq("user_id", userId)
    .maybeSingle();

  if (getErr) return json(400, { ok: false, error: getErr.message ?? getErr });

  const reminderStage = Number(existing?.reminder_stage ?? 0);

  // 5) Upsert last_seen_at à chaque fois
  const { error: upErr } = await admin
    .from("email_reminders")
    .upsert(
      {
        user_id: userId,
        email,
        is_premium: isPremium,
        last_seen_at: nowIso,
        // si la ligne n'existe pas, on démarre à 0
        reminder_stage: reminderStage,
      },
      { onConflict: "user_id" }
    );

  if (upErr) return json(400, { ok: false, error: upErr.message ?? upErr });

  // 6) Envoyer le welcome UNE SEULE FOIS (stage 0 → stage 1)
  const resendKey = clean(process.env.RESEND_API_KEY);
  const fromEmail = clean(process.env.FROM_EMAIL);

  // Si pas de Resend configuré, on n'envoie pas, mais on laisse le tracking
  if (!resendKey || !fromEmail) {
    return json(200, {
      ok: true,
      sent: false,
      reason: !resendKey ? "Missing RESEND_API_KEY" : "Missing FROM_EMAIL",
      reminder_stage: reminderStage,
    });
  }

  // Déjà envoyé? on ne renvoie pas
  if (reminderStage >= 1) {
    return json(200, { ok: true, sent: false, reminder_stage: reminderStage });
  }

  // Construire email (simple + safe)
  const subject = "Bienvenue sur Luna Astralis ✨";
  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5">
    <h2>Bienvenue ✨</h2>
    <p>Merci de t’être inscrit(e) sur <strong>Luna Astralis</strong>.</p>
    <p>Ton compte est maintenant actif.</p>
    <p>Le chat est accessible dès maintenant.</p>
    <p style="margin-top:16px">— Luna Astralis</p>
  </div>
`;

  let sent = false;
  try {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject,
      html,
    });
    sent = true;
  } catch (e: any) {
    return json(200, {
      ok: true,
      sent: false,
      error: e?.message ?? String(e),
      reminder_stage: reminderStage,
    });
  }

  // 7) Si envoyé, on passe stage 1 + last_reminder_at
  if (sent) {
    const { error: stageErr } = await admin
      .from("email_reminders")
      .update({
        reminder_stage: 1,
        last_reminder_at: nowIso,
      })
      .eq("user_id", userId);

    if (stageErr) {
      // email envoyé, mais update stage failed → on le signale
      return json(200, {
        ok: true,
        sent: true,
        warning: stageErr.message ?? stageErr,
      });
    }
  }

  return json(200, { ok: true, sent: true, reminder_stage: 1 });
      }
