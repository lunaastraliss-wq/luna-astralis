// components/Footer.tsx

"use client";





import __i18n from "../i18n/migrated/fr/components/footer.json";
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
    support: __i18n["support"],
    response: __i18n["reponse_sous_24_h"],
  },

  en: {
    support: __i18n["support_2"],
    response: __i18n["reply_within_24_hours"],
  },

  es: {
    support: __i18n["soporte"],
    response: __i18n["respuesta_en_menos_de_24_horas"],
  },

  de: {
    support: __i18n["support_3"],
    response: __i18n["antwort_innerhalb_von_24_stunden"],
  },

  it: {
    support: __i18n["supporto"],
    response: __i18n["risposta_entro_24_ore"],
  },

  pt: {
    support: __i18n["suporte"],
    response: __i18n["resposta_em_ate_24_horas"],
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
        {__i18n["contact_luna_astralis_app"]}</a>

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
