// middleware.ts

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

const CANON_HOST = "luna-astralis.app";

/*
|--------------------------------------------------------------------------
| Réponse protégée contre l’indexation
|--------------------------------------------------------------------------
*/

function addPrivateHeaders(
  response: NextResponse
): NextResponse {
  response.headers.set(
    "X-Robots-Tag",
    "noindex, nofollow, noarchive"
  );

  response.headers.set(
    "Cache-Control",
    "private, no-store, max-age=0"
  );

  return response;
}

/*
|--------------------------------------------------------------------------
| Vérification de l’accès aux pages /dev
|--------------------------------------------------------------------------
*/

function checkDevAccess(
  req: NextRequest
): NextResponse {
  const expectedUsername =
    process.env.DEV_USERNAME;

  const expectedPassword =
    process.env.DEV_PASSWORD;

  if (
    !expectedUsername ||
    !expectedPassword
  ) {
    return addPrivateHeaders(
      new NextResponse(
        "La protection des pages de développement n’est pas configurée.",
        {
          status: 500,
        }
      )
    );
  }

  const authorization =
    req.headers.get(
      "authorization"
    );

  if (authorization) {
    const [
      scheme,
      encodedCredentials,
    ] = authorization.split(" ");

    if (
      scheme === "Basic" &&
      encodedCredentials
    ) {
      try {
        const decodedCredentials =
          atob(
            encodedCredentials
          );

        const separatorIndex =
          decodedCredentials.indexOf(
            ":"
          );

        if (
          separatorIndex !== -1
        ) {
          const providedUsername =
            decodedCredentials.slice(
              0,
              separatorIndex
            );

          const providedPassword =
            decodedCredentials.slice(
              separatorIndex + 1
            );

          if (
            providedUsername ===
              expectedUsername &&
            providedPassword ===
              expectedPassword
          ) {
            return addPrivateHeaders(
              NextResponse.next()
            );
          }
        }
      } catch {
        // Les identifiants reçus ne sont pas valides.
      }
    }
  }

  return addPrivateHeaders(
    new NextResponse(
      "Accès réservé aux outils internes Luna Astralis.",
      {
        status: 401,
        headers: {
          "WWW-Authenticate":
            'Basic realm="Luna Astralis Dev", charset="UTF-8"',
        },
      }
    )
  );
}

/*
|--------------------------------------------------------------------------
| Middleware principal
|--------------------------------------------------------------------------
*/

export async function middleware(
  req: NextRequest
) {
  const {
    pathname,
    search,
  } = req.nextUrl;

  /*
  |--------------------------------------------------------------------------
  | 1. Forcer le domaine officiel
  |--------------------------------------------------------------------------
  */

  const host =
    req.headers.get("host") || "";

  if (
    host &&
    host !== CANON_HOST
  ) {
    const url =
      req.nextUrl.clone();

    url.protocol = "https:";
    url.host = CANON_HOST;
    url.pathname = pathname;
    url.search = search;

    return NextResponse.redirect(
      url
    );
  }

  /*
  |--------------------------------------------------------------------------
  | 2. Ignorer les fichiers statiques et les éléments internes de Next.js
  |--------------------------------------------------------------------------
  */

  if (
    pathname.startsWith(
      "/_next"
    ) ||
    pathname ===
      "/favicon.ico" ||
    pathname ===
      "/robots.txt" ||
    pathname ===
      "/sitemap.xml" ||
    /\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|woff|woff2|ttf|otf)$/i.test(
      pathname
    )
  ) {
    return NextResponse.next();
  }

  /*
  |--------------------------------------------------------------------------
  | 3. Protéger toutes les pages /dev
  |--------------------------------------------------------------------------
  */

  if (
    pathname === "/dev" ||
    pathname.startsWith(
      "/dev/"
    )
  ) {
    return checkDevAccess(
      req
    );
  }

  /*
  |--------------------------------------------------------------------------
  | 4. Routes publiques
  |--------------------------------------------------------------------------
  */

  if (
    pathname === "/" ||
    pathname.startsWith(
      "/pricing"
    ) ||
    pathname.startsWith(
      "/login"
    ) ||
    pathname.startsWith(
      "/signup"
    ) ||
    pathname.startsWith(
      "/auth/callback"
    ) ||
    pathname.startsWith(
      "/checkout/success"
    ) ||
    pathname.startsWith(
      "/api/"
    )
  ) {
    return NextResponse.next();
  }

  /*
  |--------------------------------------------------------------------------
  | 5. Protéger la section /chat avec Supabase
  |--------------------------------------------------------------------------
  */

  if (
    pathname === "/chat" ||
    pathname.startsWith(
      "/chat/"
    )
  ) {
    const response =
      NextResponse.next();

    const supabase =
      createMiddlewareClient({
        req,
        res: response,
      });

    const {
      data,
    } =
      await supabase.auth.getSession();

    if (!data.session) {
      const loginUrl =
        req.nextUrl.clone();

      loginUrl.pathname =
        "/login";

      loginUrl.search = "";

      loginUrl.searchParams.set(
        "next",
        pathname +
          (search || "")
      );

      return NextResponse.redirect(
        loginUrl
      );
    }

    return response;
  }

  /*
  |--------------------------------------------------------------------------
  | 6. Toutes les autres pages
  |--------------------------------------------------------------------------
  */

  return NextResponse.next();
}

/*
|--------------------------------------------------------------------------
| Routes analysées par le middleware
|--------------------------------------------------------------------------
*/

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
