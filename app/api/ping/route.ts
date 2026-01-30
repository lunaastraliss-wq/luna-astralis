import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key =
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (!url || !key) {
      return NextResponse.json({ ok: false, error: "Missing env" }, { status: 500 });
    }

    const supabase = createClient(url, key, { auth: { persistSession: false } });

    // Requête ultra-légère : lit 1 ligne sur une table qui existe
    // 👉 Remplace "chat_usage" par une table sûre chez toi si besoin.
    const { error } = await supabase.from("chat_usage").select("id").limit(1);

    return NextResponse.json({ ok: !error, ts: Date.now(), error: error?.message ?? null });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
  }
}
