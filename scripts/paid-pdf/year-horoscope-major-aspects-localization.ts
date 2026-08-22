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
    "Les mouvements du ciel":
      "The Movements of the Sky",
    "Votre climat astrologique":
      "Your Astrological Climate",
    "Les trois influences les plus marquantes de l’année":
      "The Three Most Significant Influences of the Year",
    "Dynamique planétaire":
      "Planetary Dynamics",
    "Conseil":
      "Guidance",
    "Votre ligne directrice":
      "Your Guiding Direction",
    "Ouverture possible :":
      "Possible Opportunity:",
    "Planète dominante":
      "Dominant Planet",
    "Influence associée":
      "Associated Influence",
  },

  es: {
    "Les mouvements du ciel":
      "Los movimientos del cielo",
    "Votre climat astrologique":
      "Tu clima astrológico",
    "Les trois influences les plus marquantes de l’année":
      "Las tres influencias más destacadas del año",
    "Dynamique planétaire":
      "Dinámica planetaria",
    "Conseil":
      "Consejo",
    "Votre ligne directrice":
      "Tu línea directriz",
    "Ouverture possible :":
      "Oportunidad posible:",
    "Planète dominante":
      "Planeta dominante",
    "Influence associée":
      "Influencia asociada",
  },

  de: {
    "Les mouvements du ciel":
      "Die Bewegungen des Himmels",
    "Votre climat astrologique":
      "Ihr astrologisches Klima",
    "Les trois influences les plus marquantes de l’année":
      "Die drei prägendsten Einflüsse des Jahres",
    "Dynamique planétaire":
      "Planetarische Dynamik",
    "Conseil":
      "Rat",
    "Votre ligne directrice":
      "Ihre Leitlinie",
    "Ouverture possible :":
      "Mögliche Chance:",
    "Planète dominante":
      "Dominanter Planet",
    "Influence associée":
      "Zugehöriger Einfluss",
  },

  it: {
    "Les mouvements du ciel":
      "I movimenti del cielo",
    "Votre climat astrologique":
      "Il tuo clima astrologico",
    "Les trois influences les plus marquantes de l’année":
      "Le tre influenze più significative dell’anno",
    "Dynamique planétaire":
      "Dinamica planetaria",
    "Conseil":
      "Consiglio",
    "Votre ligne directrice":
      "La tua linea guida",
    "Ouverture possible :":
      "Possibile opportunità:",
    "Planète dominante":
      "Pianeta dominante",
    "Influence associée":
      "Influenza associata",
  },

  pt: {
    "Les mouvements du ciel":
      "Os movimentos do céu",
    "Votre climat astrologique":
      "Seu clima astrológico",
    "Les trois influences les plus marquantes de l’année":
      "As três influências mais marcantes do ano",
    "Dynamique planétaire":
      "Dinâmica planetária",
    "Conseil":
      "Conselho",
    "Votre ligne directrice":
      "Sua linha orientadora",
    "Ouverture possible :":
      "Oportunidade possível:",
    "Planète dominante":
      "Planeta dominante",
    "Influence associée":
      "Influência associada",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeMajorAspects(
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
