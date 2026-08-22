import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type YearlyHoroscopeBuilderTranslations = {
  reportTitle: string;
  yearLabel: string;
};

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  PaidPdfLocale,
  YearlyHoroscopeBuilderTranslations
> = {
  fr: {
    reportTitle: "Horoscope de l’année",
    yearLabel: "Année",
  },

  en: {
    reportTitle: "Yearly Horoscope",
    yearLabel: "Year",
  },

  es: {
    reportTitle: "Horóscopo anual",
    yearLabel: "Año",
  },

  de: {
    reportTitle: "Jahreshoroskop",
    yearLabel: "Jahr",
  },

  it: {
    reportTitle: "Oroscopo annuale",
    yearLabel: "Anno",
  },

  pt: {
    reportTitle: "Horóscopo anual",
    yearLabel: "Ano",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearlyHoroscopeBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const translations =
    TRANSLATIONS[locale];

  let output = source;

  /* =======================================================
     COVER — REPORT TITLE
  ======================================================= */

  output = output.replace(
    `"Horoscope de l’année"`,
    JSON.stringify(
      translations.reportTitle,
    ),
  );

  /* =======================================================
     COVER — YEAR LABEL
     `Année ${year}` -> `Year ${year}`, etc.
  ======================================================= */

  output = output.replace(
    "return `Année ${year}`;",
    `return \`${translations.yearLabel} \${year}\`;`,
  );

  return output;
}
