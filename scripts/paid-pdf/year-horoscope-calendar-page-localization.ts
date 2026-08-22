import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   PAGE TRANSLATIONS
========================================================= */

const CALENDAR_PAGE_TRANSLATIONS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    "Conseil du mois":
      "Monthly advice",

    "Période favorable":
      "Favorable period",

    "Vigilance":
      "Caution",

    "Votre année mois par mois":
      "Your year month by month",

    "Votre calendrier annuel":
      "Your yearly calendar",

    ", votre calendrier annuel":
      ", your yearly calendar",

    "Meilleur mois":
      "Best month",

    "Mois délicat":
      "Most challenging month",

    "Moyenne annuelle":
      "Yearly average",

    "Votre fil conducteur":
      "Your guiding theme",
  },

  es: {
    "Conseil du mois":
      "Consejo del mes",

    "Période favorable":
      "Período favorable",

    "Vigilance":
      "Atención",

    "Votre année mois par mois":
      "Tu año mes a mes",

    "Votre calendrier annuel":
      "Tu calendario anual",

    ", votre calendrier annuel":
      ", tu calendario anual",

    "Meilleur mois":
      "Mejor mes",

    "Mois délicat":
      "Mes más delicado",

    "Moyenne annuelle":
      "Promedio anual",

    "Votre fil conducteur":
      "Tu hilo conductor",
  },

  de: {
    "Conseil du mois":
      "Rat des Monats",

    "Période favorable":
      "Günstige Phase",

    "Vigilance":
      "Achtsamkeit",

    "Votre année mois par mois":
      "Ihr Jahr Monat für Monat",

    "Votre calendrier annuel":
      "Ihr Jahreskalender",

    ", votre calendrier annuel":
      ", Ihr Jahreskalender",

    "Meilleur mois":
      "Bester Monat",

    "Mois délicat":
      "Anspruchsvollster Monat",

    "Moyenne annuelle":
      "Jahresdurchschnitt",

    "Votre fil conducteur":
      "Ihr roter Faden",
  },

  it: {
    "Conseil du mois":
      "Consiglio del mese",

    "Période favorable":
      "Periodo favorevole",

    "Vigilance":
      "Attenzione",

    "Votre année mois par mois":
      "Il vostro anno mese per mese",

    "Votre calendrier annuel":
      "Il vostro calendario annuale",

    ", votre calendrier annuel":
      ", il vostro calendario annuale",

    "Meilleur mois":
      "Mese migliore",

    "Mois délicat":
      "Mese più delicato",

    "Moyenne annuelle":
      "Media annuale",

    "Votre fil conducteur":
      "Il vostro filo conduttore",
  },

  pt: {
    "Conseil du mois":
      "Conselho do mês",

    "Période favorable":
      "Período favorável",

    "Vigilance":
      "Atenção",

    "Votre année mois par mois":
      "Seu ano mês a mês",

    "Votre calendrier annuel":
      "Seu calendário anual",

    ", votre calendrier annuel":
      ", seu calendário anual",

    "Meilleur mois":
      "Melhor mês",

    "Mois délicat":
      "Mês mais delicado",

    "Moyenne annuelle":
      "Média anual",

    "Votre fil conducteur":
      "Seu fio condutor",
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

  const orderedTranslations =
    Object.entries(
      translations,
    ).sort(
      ([fromA], [fromB]) =>
        fromB.length -
        fromA.length,
    );

  for (
    const [from, to]
    of orderedTranslations
  ) {
    output =
      output
        .split(from)
        .join(to);
  }

  return output;
}

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeCalendarPage(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  return applyTranslations(
    source,
    CALENDAR_PAGE_TRANSLATIONS[
      locale
    ],
  );
}
