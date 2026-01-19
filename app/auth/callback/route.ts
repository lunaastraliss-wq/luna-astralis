// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FALLBACK_NEXT = "/chat";
const SIGN_COOKIE = "la_sign";

/** ✅ Origine fiable (Vercel/proxy-safe) */
function getOrigin(reqUrl: string) {
  const h = headers();
  const proto = h.get("x-forwarded-proto") || "https";
  const host = h.get("x-forwarded-host") || h.get("host");
  if (host) return `${proto}://${host}`;
  return new URL(reqUrl).origin;
}

/** ✅ Anti open-redirect + évite boucles */
function safeNext(raw: string | null): string {
  const s = (raw ?? "").trim();
  if (!s) return FALLBACK_NEXT;

  // block absolute / protocol-relative
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return FALLBACK_NEXT;

  const path = s.startsWith("/") ? s : `/${s}`;

  // avoid loops
  if (path.startsWith("/auth") || path.startsWith("/login") || path.startsWith("/signup")) {
    return FALLBACK_NEXT;
  }

  // allow only intended areas
  const allowed =
    path.startsWith("/chat") ||
    path.startsWith("/pricing") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/checkout/success") ||
    path === "/";

  return allowed ? path : FALLBACK_NEXT;
}

/** ✅ Ajoute le signe au /chat si absent (via cookie la_sign) */
function withSignIfNeeded(nextPath: string) {
  // uniquement pour /chat (ou /chat?...), et si pas déjà "sign="
  if (!nextPath.startsWith("/chat")) return nextPath;
  if (/[?&]sign=/.test(nextPath)) return nextPath;

  const c = cookies().get(SIGN_COOKIE)?.value?.trim() || "";
  if (!c) return nextPath;

  const sep = nextPath.includes("?") ? "&" : "?";
  return `${nextPath}${sep}sign=${encodeURIComponent(c)}`;
}

function buildLogin(origin: string, extra?: Record<string, string>) {
  const u = new URL("/login", origin);
  u.searchParams.set("oauth", "1");
  u.searchParams.set("next", "/chat"); // fallback simple

  if (extra) {
    for (const [k, v] of Object.entries(extra)) {
      if (v != null && String(v).length) u.searchParams.set(k, String(v));
    }
  }
  return NextResponse.redirect(u);
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = getOrigin(req.url);

  const code = url.searchParams.get("code");

  const oauthError = url.searchParams.get("error");
  const oauthErrorDesc = url.searchParams.get("error_description");

  // 1) Erreur provider
  if (oauthError) {
    return buildLogin(origin, {
      error: oauthError,
      error_description: oauthErrorDesc || "",
    });
  }

  // 2) Pas de code
  if (!code) {
    return buildLogin(origin, { error: "missing_code" });
  }

  // 3) Exchange => session cookies
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return buildLogin(origin, {
      error: "exchange_failed",
      error_description: error.message,
    });
  }

  // 4) Redirection finale
  // - on respecte ?next=... si fourni (sanitisé)
  // - et on “injecte” le signe depuis cookie la_sign pour /chat
  const nextRaw = url.searchParams.get("next");
  const nextSafe = safeNext(nextRaw);
  const finalPath = withSignIfNeeded(nextSafe);

  return NextResponse.redirect(new URL(finalPath, origin));
}
