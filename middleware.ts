// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANON_HOST = "luna-astralis.app"; // ✅ choisis 1 seul: soit ça, soit "www.luna-astralis.app"

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // ✅ 0) Force le domaine (évite www <-> non-www qui casse les cookies OAuth)
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

  // ✅ 2) Routes publiques
  if (
    pathname === "/" ||
    pathname.startsWith("/pricing") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/checkout/success") ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  // ✅ 3) Protéger /chat uniquement
  if (pathname.startsWith("/chat")) {
    const cookieNames = req.cookies.getAll().map((c) => c.name);

    // ✅ Auth helpers (souvent chunké: ...-auth-token.0 / .1)
    const hasAuthHelpers = cookieNames.some((n) => n.includes("-auth-token"));

    // (optionnel) ancien cookie
    const hasOld = !!req.cookies.get("sb-access-token")?.value;

    if (!hasAuthHelpers && !hasOld) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("next", pathname + (req.nextUrl.search || ""));
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// ✅ middleware seulement sur /chat
export const config = {
  matcher: ["/chat/:path*"],
};
