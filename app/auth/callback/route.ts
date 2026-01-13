// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeNext(raw: string | null): string {
  const s = (raw ?? "").trim();
  if (!s) return "/chat";

  // Block absolute / protocol-relative
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return "/chat";

  const path = s.startsWith("/") ? s : `/${s}`;

  // Avoid loops
  if (path.startsWith("/login") || path.startsWith("/signup") || path.startsWith("/auth")) {
    return "/chat";
  }

  // Allow only your intended areas (adjust if needed)
  const allowed =
    path.startsWith("/chat") ||
    path.startsWith("/pricing") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/checkout/success") ||
    path === "/";

  return allowed ? path : "/chat";
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = url.origin;

  const code = url.searchParams.get("code");
  const next = safeNext(url.searchParams.get("next"));

  const oauthError = url.searchParams.get("error");
  const oauthErrorDesc = url.searchParams.get("error_description");

  if (oauthError) {
    const redirectUrl = new URL("/login", origin);
    redirectUrl.searchParams.set("oauth", "1");
    redirectUrl.searchParams.set("next", next);
    redirectUrl.searchParams.set("error", oauthError);
    if (oauthErrorDesc) redirectUrl.searchParams.set("error_description", oauthErrorDesc);
    return NextResponse.redirect(redirectUrl);
  }

  if (!code) {
    const redirectUrl = new URL("/login", origin);
    redirectUrl.searchParams.set("oauth", "1");
    redirectUrl.searchParams.set("next", next);
    return NextResponse.redirect(redirectUrl);
  }

  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    const redirectUrl = new URL("/login", origin);
    redirectUrl.searchParams.set("oauth", "1");
    redirectUrl.searchParams.set("next", next);
    redirectUrl.searchParams.set("error", "exchange_failed");
    redirectUrl.searchParams.set("error_description", error.message);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.redirect(new URL(next, origin));
}
