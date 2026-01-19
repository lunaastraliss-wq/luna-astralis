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

  // ✅ Cas spécial autorisé: /login?next=/chat (permet de repasser par LoginClient)
  if (path.startsWith("/login")) {
    try {
      const u = new URL(path, "http://dummy.local");
      const n = (u.searchParams.get("next") || "").trim();
      if (n === "/chat") return "/login?next=/chat";
    } catch {}
    return FALLBACK_NEXT;
  }

  // Avoid loops
  if (path.startsWith("/signup") || path.startsWith("/auth")) {
    return FALLBACK_NEXT;
  }

  // Allow only intended areas
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

  // ✅ IMPORTANT: on force next=/chat pour que LoginClient gère /chat?sign=...
  // (LoginClient lit localStorage la_sign et redirige correctement)
  redirectUrl.searchParams.set("next", "/chat");

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

  // ✅ On accepte éventuellement un next fourni, mais on le "sanitize"
  // (même si on force ensuite next=/chat dans buildLoginRedirect)
  const _next = safeNext(url.searchParams.get("next"));

  // OAuth provider errors
  const oauthError = url.searchParams.get("error");
  const oauthErrorDesc = url.searchParams.get("error_description");

  if (oauthError) {
    return buildLoginRedirect(origin, _next, {
      error: oauthError,
      error_description: oauthErrorDesc || "",
    });
  }

  // No code => return to login
  if (!code) {
    return buildLoginRedirect(origin, _next, { error: "missing_code" });
  }

  // Exchange code for session (sets auth cookies)
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return buildLoginRedirect(origin, _next, {
      error: "exchange_failed",
      error_description: error.message,
    });
  }

  /**
   * ✅ Après OAuth, on repasse TOUJOURS par /login.
   * /login (client) lit localStorage (la_sign) et redirige vers:
   * - /chat?sign=... (✅ PAS "signe")
   * - ou /onboarding/sign si aucun signe
   */
  return buildLoginRedirect(origin, _next);
}
