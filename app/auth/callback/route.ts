// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Autorise uniquement des chemins internes (pas d'URL absolue),
 * évite les boucles vers login/signup/auth, et force /chat par défaut.
 */
function safeNext(raw: string | null): string {
  const s = (raw ?? "").trim();
  if (!s) return "/chat";

  // Bloque URLs absolues / protocol-relative
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return "/chat";

  const path = s.startsWith("/") ? s : `/${s}`;

  // Évite boucles
  if (
    path.startsWith("/login") ||
    path.startsWith("/signup") ||
    path.startsWith("/auth")
  ) {
    return "/chat";
  }

  return path;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = url.origin;

  const code = url.searchParams.get("code");
  const next = safeNext(url.searchParams.get("next"));

  // Erreurs OAuth (ex: user cancelled)
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

  // Si pas de code, on retourne au login (ou tu peux envoyer à / si tu préfères)
  if (!code) {
    const redirectUrl = new URL("/login", origin);
    redirectUrl.searchParams.set("oauth", "1");
    redirectUrl.searchParams.set("next", next);
    return NextResponse.redirect(redirectUrl);
  }

  // Échange code -> session
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

  // OK -> va au chat (ou au next)
  return NextResponse.redirect(new URL(next, origin));
}
