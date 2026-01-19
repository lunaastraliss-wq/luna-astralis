// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FALLBACK_NEXT = "/chat";

/** ✅ Anti open-redirect + évite boucles */
function safeNext(raw: string | null): string {
  const s = (raw ?? "").trim();
  if (!s) return FALLBACK_NEXT;

  // Block absolute / protocol-relative
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return FALLBACK_NEXT;

  const path = s.startsWith("/") ? s : `/${s}`;

  // Avoid loops
  if (path.startsWith("/login") || path.startsWith("/signup") || path.startsWith("/auth")) {
    return FALLBACK_NEXT;
  }

  // Allow only your intended areas
  const allowed =
    path.startsWith("/chat") ||
    path.startsWith("/pricing") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/checkout/success");

  return allowed ? path : FALLBACK_NEXT;
}

function buildLoginRedirect(origin: string, next: string, extra?: Record<string, string>) {
  const redirectUrl = new URL("/login", origin);
  redirectUrl.searchParams.set("oauth", "1");
  redirectUrl.searchParams.set("next", next);

  if (extra) {
    for (const [k, v] of Object.entries(extra)) {
      if (v !== undefined && v !== null) redirectUrl.searchParams.set(k, v);
    }
  }
  return NextResponse.redirect(redirectUrl);
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = url.origin;

  const code = url.searchParams.get("code");
  const next = safeNext(url.searchParams.get("next"));

  // OAuth provider errors
  const oauthError = url.searchParams.get("error");
  const oauthErrorDesc = url.searchParams.get("error_description");

  if (oauthError) {
    return buildLoginRedirect(origin, next, {
      error: oauthError,
      error_description: oauthErrorDesc || "",
    });
  }

  // No code => return to login
  if (!code) {
    return buildLoginRedirect(origin, next, { error: "missing_code" });
  }

  // Exchange code for session (sets auth cookies)
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return buildLoginRedirect(origin, next, {
      error: "exchange_failed",
      error_description: error.message,
    });
  }

  /**
   * ✅ IMPORTANT
   * Après OAuth, on repasse TOUJOURS par /login.
   * Car /login (client) peut lire localStorage (la_sign) et rediriger vers:
   * - /chat?signe=...
   * - ou /onboarding/sign si aucun signe
   */
  return buildLoginRedirect(origin, next);
}
