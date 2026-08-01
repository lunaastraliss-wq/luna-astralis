// components/Footer.tsx

"use client";

import {
  usePathname,
} from "next/navigation";

import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

const FOOTER_TEXT: Record<
  Locale,
  {
    support: string;
    response: string;
  }
> = {
  fr: {
    support: "Support :",
    response: "Réponse sous 24 h",
  },

  en: {
    support: "Support:",
    response: "Reply within 24 hours",
  },

  es: {
    support: "Soporte:",
    response: "Respuesta en menos de 24 horas",
  },

  de: {
    support: "Support:",
    response: "Antwort innerhalb von 24 Stunden",
  },

  it: {
    support: "Supporto:",
    response: "Risposta entro 24 ore",
  },

  pt: {
    support: "Suporte:",
    response: "Resposta em até 24 horas",
  },
};

/*
|--------------------------------------------------------------------------
| Détection de la langue
|--------------------------------------------------------------------------
*/

function getLocaleFromPathname(
  pathname: string
): Locale {
  const firstSegment =
    pathname.split("/")[1];

  if (
    firstSegment &&
    isLocale(firstSegment)
  ) {
    return firstSegment;
  }

  return defaultLocale;
}

/*
|--------------------------------------------------------------------------
| Footer
|--------------------------------------------------------------------------
*/

export default function Footer() {
  const pathname =
    usePathname();

  const locale =
    getLocaleFromPathname(
      pathname
    );

  const text =
    FOOTER_TEXT[
      locale
    ];

  return (
    <footer
      style={{
        padding:
          "18px 16px",
        borderTop:
          "1px solid rgba(212,175,55,0.25)",
        color:
          "rgba(243,244,246,0.85)",
        fontSize: 13,
        textAlign:
          "center",
      }}
    >
      {text.support}{" "}

      <a
        href="mailto:contact@luna-astralis.app"
        style={{
          color:
            "inherit",
          textDecoration:
            "underline",
        }}
      >
        contact@luna-astralis.app
      </a>

      <span
        style={{
          opacity: 0.8,
        }}
      >
        {" "}
        ·{" "}
        {text.response}
      </span>
    </footer>
  );
}
