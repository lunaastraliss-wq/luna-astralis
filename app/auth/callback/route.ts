// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FALLBACK_NEXT = "/chat";
const SIGN_COOKIE = "la_sign";

/** Origin fiable (Vercel/proxy-safe) */
function getOrigin(reqUrl: string) {
  const h = headers();
  const proto = h.get("x-forwarded-proto") || "https";
  const host = h.get("x-forwarded-host") || h.get("host");
  if (host) return `${proto}://${host}`;
  return new URL(reqUrl).origin;
}

/** Anti open-redirect + évite boucles */
function safeNext(raw: string | null): string {
  const s = (raw ?? "").trim();
  if (!s) return FALLBACK_NEXT;

  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return FALLBACK_NEXT;

  const path = s.startsWith("/") ? s : `/${s}`;

  // évite boucles
  if (path.startsWith("/auth") || path.startsWith("/login") || path.startsWith("/signup")) {
    return FALLBACK_NEXT;
  }

  // autorise seulement zones prévues
  const allowed =
    path.startsWith("/chat") ||
    path.startsWith("/pricing") ||
    path.startsWith("/onboarding") ||
    path.startsWith("/checkout/success") ||
    path === "/";

  return allowed ? path : FALLBACK_NEXT;
}

/** Normalise le signe en clé (belier, cancer, etc.) */
function normSign(raw: string) {
  return (raw || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

/** Ajoute sign au /chat si absent */
function addSignToChat(path: string, sign: string) {
  if (!path.startsWith("/chat")) return path;
  if (!sign) return path;
  if (/[?&]sign=/.test(path)) return path;

  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}sign=${encodeURIComponent(sign)}`;
}

function buildLogin(origin: string, extra?: Record<string, string>) {
  const u = new URL("/login", origin);
  u.searchParams.set("oauth", "1");
  u.searchParams.set("next", "/chat");

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

  // erreurs provider
  const oauthError = url.searchParams.get("error");
  const oauthErrorDesc = url.searchParams.get("error_description");

  if (oauthError) {
    return buildLogin(origin, {
      error: oauthError,
      error_description: oauthErrorDesc || "",
    });
  }

  const supabase = createRouteHandlerClient({ cookies });

// 1) Cas PKCE / OAuth: ?code=...
if (code) {
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return buildLogin(origin, {
      error: "exchange_failed",
      error_description: error.message,
    });
  }
} else {
  // 2) Cas confirmation email: ?token_hash=...&type=signup (ou magiclink, recovery, etc.)
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as any,
    });

    if (error) {
      return buildLogin(origin, {
        error: "verify_failed",
        error_description: error.message,
      });
    }
  } else {
    return buildLogin(origin, { error: "missing_code_or_token" });
  }
}

  // next (sanitisé)
  const nextSafe = safeNext(url.searchParams.get("next"));

  // ✅ signe vient du redirectTo (LoginClient)
  const sign = normSign(url.searchParams.get("sign") || "");

  // ✅ on le stocke côté serveur (cookie) + on le met dans l’URL de /chat
  if (sign) {
    const h = headers();
    const proto = h.get("x-forwarded-proto") || "https";

    cookies().set(SIGN_COOKIE, sign, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: proto === "https",
    });
  }

  const finalPath = addSignToChat(nextSafe, sign || cookies().get(SIGN_COOKIE)?.value || "");
  return NextResponse.redirect(new URL(finalPath, origin));
}
