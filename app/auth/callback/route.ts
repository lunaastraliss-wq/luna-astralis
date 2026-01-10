// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeNext(v: string | null) {
  const s = (v || "").trim();
  if (!s) return "/chat";

  // Block absolute URLs / protocol-relative
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return "/chat";

  const path = s.startsWith("/") ? s : `/${s}`;

  // Avoid redirecting back to login/signup accidentally
  if (path.startsWith("/login") || path.startsWith("/signup") || path.startsWith("/auth")) {
    return "/chat";
  }
  return path;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const supabase = createRouteHandlerClient({ cookies });

  const next = safeNext(url.searchParams.get("next"));
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const errorDesc = url.searchParams.get("error_description");

  // If provider returned an error (user cancelled, etc.)
  if (error) {
    return NextResponse.redirect(
      new URL(
        `/login?oauth=1&next=${encodeURIComponent(next)}&error=${encodeURIComponent(
          error
        )}&error_description=${encodeURIComponent(errorDesc || "")}`,
        url.origin
      )
    );
  }

  if (!code) {
    return NextResponse.redirect(
      new URL(`/login?oauth=1&next=${encodeURIComponent(next)}`, url.origin)
    );
  }

  const { error: exchangeErr } = await supabase.auth.exchangeCodeForSession(code);

  if (exchangeErr) {
    return NextResponse.redirect(
      new URL(
        `/login?oauth=1&next=${encodeURIComponent(next)}&error=${encodeURIComponent(
          "exchange_failed"
        )}&error_description=${encodeURIComponent(exchangeErr.message)}`,
        url.origin
      )
    );
  }

  return NextResponse.redirect(new URL(next, url.origin));
}
