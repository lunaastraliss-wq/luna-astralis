"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

const TEXT: Record<
  Lang,
  {
    confirmed: string;
    redirecting: string;
  }
> = {
  fr: {
    confirmed: "Paiement confirmé ✅",
    redirecting: "Redirection en cours…",
  },

  en: {
    confirmed: "Payment confirmed ✅",
    redirecting: "Redirecting…",
  },

  es: {
    confirmed: "Pago confirmado ✅",
    redirecting: "Redirigiendo…",
  },

  de: {
    confirmed: "Zahlung bestätigt ✅",
    redirecting: "Weiterleitung…",
  },

  it: {
    confirmed: "Pagamento confermato ✅",
    redirecting: "Reindirizzamento…",
  },

  pt: {
    confirmed: "Pagamento confirmado ✅",
    redirecting: "Redirecionando…",
  },
};

function normalizeLang(v: string | null): Lang | null {
  const raw = (v || "")
    .trim()
    .toLowerCase()
    .replace("_", "-");

  const base = raw.split("-")[0];

  if (
    base === "fr" ||
    base === "en" ||
    base === "es" ||
    base === "de" ||
    base === "it" ||
    base === "pt"
  ) {
    return base;
  }

  return null;
}

function langFromPath(pathname: string | null): Lang | null {
  const first = pathname
    ?.split("/")
    .filter(Boolean)[0];

  return normalizeLang(first || null);
}

function stripLocale(path: string) {
  return path.replace(
    /^\/(fr|en|es|de|it|pt)(?=\/|$)/,
    ""
  );
}

function localizePath(path: string, lang: Lang) {
  const clean =
    path.startsWith("/")
      ? path
      : `/${path}`;

  const withoutLocale =
    stripLocale(clean);

  return `/${lang}${withoutLocale || ""}`;
}

function safeNext(
  raw: string | null,
  lang: Lang
) {
  const fallback =
    `/${lang}/chat`;

  const value =
    (raw || "").trim();

  if (!value) {
    return fallback;
  }

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("//")
  ) {
    return fallback;
  }

  return localizePath(
    value,
    lang
  );
}

export default function SuccessClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const pathname = usePathname();

  const ran = useRef(false);

  /*
    Priorité langue :
    1) ?lang= envoyé par /api/checkout
    2) URL /es/checkout/success
    3) français fallback
  */
  const lang = useMemo<Lang>(() => {
    return (
      normalizeLang(sp.get("lang")) ||
      langFromPath(pathname) ||
      "fr"
    );
  }, [sp, pathname]);

  const ui = TEXT[lang];

  const sessionId =
    sp.get("session_id");

  const next = useMemo(
    () =>
      safeNext(
        sp.get("next"),
        lang
      ),
    [sp, lang]
  );

  useEffect(() => {
    if (ran.current) {
      return;
    }

    ran.current = true;

    (async () => {
      /*
        Conversion Google Ads.
        Cette valeur est technique :
        elle ne doit PAS être traduite.
      */
      try {
        // @ts-ignore
        window.gtag?.(
          "event",
          "conversion",
          {
            send_to:
              "AW-17878472225/YvPXCMjrQQcBEKgsJ81C",
          }
        );
      } catch {}

      const supabase =
        createClientComponentClient();

      /*
        Synchronisation Stripe.
      */
      if (sessionId) {
        try {
          await fetch(
            "/api/stripe/sync",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                session_id:
                  sessionId,

                lang,
              }),
            }
          );
        } catch {}
      }

      /*
        Vérification de session.
      */
      const { data } =
        await supabase.auth.getSession();

      const isAuth =
        !!data.session;

      if (isAuth) {
        router.replace(next);
        return;
      }

      /*
        Login dans la même langue.
      */
      router.replace(
        `/${lang}/login?next=${encodeURIComponent(
          next
        )}`
      );
    })();
  }, [
    router,
    sessionId,
    next,
    lang,
  ]);

  return (
    <div style={{ padding: 24 }}>
      <div>
        {ui.confirmed}
      </div>

      <div>
        {ui.redirecting}
      </div>
    </div>
  );
}
