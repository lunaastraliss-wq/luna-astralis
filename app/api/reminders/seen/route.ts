import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(status: number, payload: any) {
  return NextResponse.json(payload, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
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
  const email = (user.email || "").trim().toLowerCase();
  if (!email) return json(400, { ok: false, error: "Missing email" });

  // 2) service role (admin)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) return json(400, { ok: false, error: "Missing NEXT_PUBLIC_SUPABASE_URL" });
  if (!serviceRole) return json(400, { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" });

  const admin = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false } });

  const nowIso = new Date().toISOString();

  // ✅ crée ou met à jour la ligne + last_seen_at
  const { error: upErr } = await admin
    .from("email_reminders")
    .upsert(
      {
        user_id: userId,
        email,
        is_premium: false,
        last_seen_at: nowIso,
      },
      { onConflict: "user_id" }
    );

  if (upErr) return json(400, { ok: false, error: upErr.message ?? upErr });

  return json(200, { ok: true });
}
