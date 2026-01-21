// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

const CANON_HOST = "luna-astralis.app"; // mets TON domaine canon (avec ou sans www, mais un seul)

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // ✅ 0) Force le domaine PARTOUT (important pour /auth/callback + cookies)
  const host = req.headers.get("host") || "";
  if (host && host !== CANON_HOST) {
    const url = req.nextUrl.clone();
    url.host = CANON_HOST;
    url.pathname = pathname;
    url.search = search;
    return NextResponse.redirect(url);
  }

  // ✅ 1) Ignorer assets / next internals
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // ✅ 2) Routes publiques (IMPORTANT: auth/callback doit être public)
  if (
    pathname === "/" ||
    pathname.startsWith("/pricing") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/auth/callback") ||
    pathname.startsWith("/checkout/success") ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  // ✅ 3) Protéger /chat uniquement (mais avec vraie session Supabase)
  if (pathname.startsWith("/chat")) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("next", pathname + (search || ""));
      return NextResponse.redirect(loginUrl);
    }

    return res; // IMPORTANT: retourne res (pas NextResponse.next()) pour que les cookies soient bien gérés
  }

  return NextResponse.next();
}

// ✅ matcher large pour que la redirection de domaine marche aussi sur /auth/callback
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
