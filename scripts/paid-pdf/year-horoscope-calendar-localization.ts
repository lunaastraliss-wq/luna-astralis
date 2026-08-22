import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   BUILD YEARLY CALENDAR — TRANSLATIONS
========================================================= */

const YEAR_CALENDAR_TRANSLATIONS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    /* MONTHS */

    "Janvier": "January",
    "Février": "February",
    "Mars": "March",
    "Avril": "April",
    "Mai": "May",
    "Juin": "June",
    "Juillet": "July",
    "Août": "August",
    "Septembre": "September",
    "Octobre": "October",
    "Novembre": "November",
    "Décembre": "December",

    /* ERRORS */

    "Le calendrier annuel ne contient aucun mois.":
      "The yearly calendar does not contain any months.",

    "Le calendrier annuel doit contenir au moins douze thèmes.":
      "The yearly calendar must contain at least twelve themes.",

    /* TITLE */

    "Votre calendrier astrologique ":
      "Your astrological calendar ",
  },

  es: {
    /* MONTHS */

    "Janvier": "Enero",
    "Février": "Febrero",
    "Mars": "Marzo",
    "Avril": "Abril",
    "Mai": "Mayo",
    "Juin": "Junio",
    "Juillet": "Julio",
    "Août": "Agosto",
    "Septembre": "Septiembre",
    "Octobre": "Octubre",
    "Novembre": "Noviembre",
    "Décembre": "Diciembre",

    /* ERRORS */

    "Le calendrier annuel ne contient aucun mois.":
      "El calendario anual no contiene ningún mes.",

    "Le calendrier annuel doit contenir au moins douze thèmes.":
      "El calendario anual debe contener al menos doce temas.",

    /* TITLE */

    "Votre calendrier astrologique ":
      "Tu calendario astrológico ",
  },

  de: {
    /* MONTHS */

    "Janvier": "Januar",
    "Février": "Februar",
    "Mars": "März",
    "Avril": "April",
    "Mai": "Mai",
    "Juin": "Juni",
    "Juillet": "Juli",
    "Août": "August",
    "Septembre": "September",
    "Octobre": "Oktober",
    "Novembre": "November",
    "Décembre": "Dezember",

    /* ERRORS */

    "Le calendrier annuel ne contient aucun mois.":
      "Der Jahreskalender enthält keine Monate.",

    "Le calendrier annuel doit contenir au moins douze thèmes.":
      "Der Jahreskalender muss mindestens zwölf Themen enthalten.",

    /* TITLE */

    "Votre calendrier astrologique ":
      "Ihr astrologischer Kalender ",
  },

  it: {
    /* MONTHS */

    "Janvier": "Gennaio",
    "Février": "Febbraio",
    "Mars": "Marzo",
    "Avril": "Aprile",
    "Mai": "Maggio",
    "Juin": "Giugno",
    "Juillet": "Luglio",
    "Août": "Agosto",
    "Septembre": "Settembre",
    "Octobre": "Ottobre",
    "Novembre": "Novembre",
    "Décembre": "Dicembre",

    /* ERRORS */

    "Le calendrier annuel ne contient aucun mois.":
      "Il calendario annuale non contiene alcun mese.",

    "Le calendrier annuel doit contenir au moins douze thèmes.":
      "Il calendario annuale deve contenere almeno dodici temi.",

    /* TITLE */

    "Votre calendrier astrologique ":
      "Il tuo calendario astrologico ",
  },

  pt: {
    /* MONTHS */

    "Janvier": "Janeiro",
    "Février": "Fevereiro",
    "Mars": "Março",
    "Avril": "Abril",
    "Mai": "Maio",
    "Juin": "Junho",
    "Juillet": "Julho",
    "Août": "Agosto",
    "Septembre": "Setembro",
    "Octobre": "Outubro",
    "Novembre": "Novembro",
    "Décembre": "Dezembro",

    /* ERRORS */

    "Le calendrier annuel ne contient aucun mois.":
      "O calendário anual não contém nenhum mês.",

    "Le calendrier annuel doit contenir au moins douze thèmes.":
      "O calendário anual deve conter pelo menos doze temas.",

    /* TITLE */

    "Votre calendrier astrologique ":
      "Seu calendário astrológico ",
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
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeCalendar(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  return applyTranslations(
    source,
    YEAR_CALENDAR_TRANSLATIONS[
      locale
    ],
  );
}
