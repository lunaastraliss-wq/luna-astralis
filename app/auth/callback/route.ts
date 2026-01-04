// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeNext(v: string | null) {
  const s = (v || "").trim();
  if (!s) return "/chat";
  if (s.includes("http://") || s.includes("https://") || s.startsWith("//")) return "/chat";
  return s.startsWith("/") ? s : "/" + s;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const next = safeNext(url.searchParams.get("next"));

  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.exchangeCodeForSession(url);

  if (error) {
    return NextResponse.redirect(
      new URL(`/login?oauth=1&next=${encodeURIComponent(next)}`, url.origin)
    );
  }

  return NextResponse.redirect(new URL(next, url.origin));
}
