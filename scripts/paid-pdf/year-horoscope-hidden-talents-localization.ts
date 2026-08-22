import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   HIDDEN TALENTS — TRANSLATIONS
========================================================= */

const HIDDEN_TALENTS_TRANSLATIONS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    "Vos talents cachés":
      "Your hidden talents",
  },

  es: {
    "Vos talents cachés":
      "Tus talentos ocultos",
  },

  de: {
    "Vos talents cachés":
      "Ihre verborgenen Talente",
  },

  it: {
    "Vos talents cachés":
      "I vostri talenti nascosti",
  },

  pt: {
    "Vos talents cachés":
      "Seus talentos ocultos",
  },
};

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  for (
    const [from, to]
    of Object.entries(translations)
  ) {
    output =
      output.split(from).join(to);
  }

  return output;
}

/* =========================================================
   HIDDEN TALENTS LOCALIZER
========================================================= */

export function localizeYearHoroscopeHiddenTalents(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const translations =
    HIDDEN_TALENTS_TRANSLATIONS[
      locale
    ];

  return applyTranslations(
    source,
    translations,
  );
}
