import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname, search } = req.nextUrl;

  // 🔒 routes protégées
  const protectedRoutes = ["/chat", "/api/chat", "/onboarding"];

  const isProtected = protectedRoutes.some((p) =>
    pathname.startsWith(p)
  );

  if (isProtected && !session) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname + search);
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/chat/:path*", "/api/chat/:path*", "/onboarding/:path*"],
};
