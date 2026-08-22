import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  PaidPdfLocale,
  Record<string, string>
> = {
  fr: {},

  en: {
    "Horoscope annuel":
      "Yearly Horoscope",
    "Votre climat astrologique":
      "Your Astrological Climate",
    "Votre conseil":
      "Your Guidance",
    "Comment ces énergies se combinent":
      "How These Energies Work Together",
    "Conseil astrologique":
      "Astrological Guidance",
  },

  es: {
    "Horoscope annuel":
      "Horóscopo anual",
    "Votre climat astrologique":
      "Tu clima astrológico",
    "Votre conseil":
      "Tu consejo",
    "Comment ces énergies se combinent":
      "Cómo se combinan estas energías",
    "Conseil astrologique":
      "Consejo astrológico",
  },

  de: {
    "Horoscope annuel":
      "Jahreshoroskop",
    "Votre climat astrologique":
      "Ihr astrologisches Klima",
    "Votre conseil":
      "Ihr Rat",
    "Comment ces énergies se combinent":
      "Wie diese Energien zusammenwirken",
    "Conseil astrologique":
      "Astrologischer Rat",
  },

  it: {
    "Horoscope annuel":
      "Oroscopo annuale",
    "Votre climat astrologique":
      "Il tuo clima astrologico",
    "Votre conseil":
      "Il tuo consiglio",
    "Comment ces énergies se combinent":
      "Come si combinano queste energie",
    "Conseil astrologique":
      "Consiglio astrologico",
  },

  pt: {
    "Horoscope annuel":
      "Horóscopo anual",
    "Votre climat astrologique":
      "Seu clima astrológico",
    "Votre conseil":
      "Seu conselho",
    "Comment ces énergies se combinent":
      "Como essas energias se combinam",
    "Conseil astrologique":
      "Conselho astrológico",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeMajorEnergies(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  for (
    const [french, translated] of
    Object.entries(TRANSLATIONS[locale])
  ) {
    output =
      output.split(french).join(translated);
  }

  return output;
}
