import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ 1) Toujours ignorer les assets / next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    /\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // ✅ 2) Routes publiques (IMPORTANT: checkout success)
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
    /**
     * Supabase cookies possibles :
     * - Ancien: "sb-access-token"
     * - Auth helpers: cookies qui contiennent "-auth-token"
     * On accepte les 2 pour être robuste.
     */
    const hasOld = !!req.cookies.get("sb-access-token")?.value;

    const hasHelpers = req.cookies
      .getAll()
      .some((c) => c.name.includes("-auth-token") && !!c.value);

    const isAuth = hasOld || hasHelpers;

    if (!isAuth) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/login";

      // next = page demandée + querystring
      const fullPath = pathname + (req.nextUrl.search || "");
      loginUrl.searchParams.set("next", fullPath);

      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

// ✅ matcher = on applique le middleware seulement à /chat
export const config = {
  matcher: ["/chat/:path*"],
};
