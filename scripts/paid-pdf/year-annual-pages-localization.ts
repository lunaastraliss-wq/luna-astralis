import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap = Record<
  string,
  string
>;

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
    "Feu": "Fire",
    "Terre": "Earth",
    "Eau": "Water",

    "Cardinal": "Cardinal",
    "Fixe": "Fixed",
    "Mutable": "Mutable",

    "Vénus": "Venus",
    "Lune": "Moon",
    "Soleil": "Sun",
    "Pluton": "Pluto",
    "Saturne": "Saturn",

    "Votre année": "Your Year",
    "Énergie dominante": "Dominant Energy",
    "Les grandes énergies de l’année":
      "The Major Energies of the Year",
    "Les aspects majeurs de l’année":
      "The Major Aspects of the Year",
    "Les planètes dominantes":
      "The Dominant Planets",
    "Les maisons activées":
      "The Activated Houses",
  },

  es: {
    "Feu": "Fuego",
    "Terre": "Tierra",
    "Eau": "Agua",

    "Cardinal": "Cardinal",
    "Fixe": "Fija",
    "Mutable": "Mutable",

    "Vénus": "Venus",
    "Lune": "Luna",
    "Soleil": "Sol",
    "Pluton": "Plutón",
    "Saturne": "Saturno",

    "Votre année": "Tu año",
    "Énergie dominante": "Energía dominante",
    "Les grandes énergies de l’année":
      "Las grandes energías del año",
    "Les aspects majeurs de l’année":
      "Los aspectos principales del año",
    "Les planètes dominantes":
      "Los planetas dominantes",
    "Les maisons activées":
      "Las casas activadas",
  },

  de: {
    "Feu": "Feuer",
    "Terre": "Erde",
    "Eau": "Wasser",

    "Cardinal": "Kardinal",
    "Fixe": "Fix",
    "Mutable": "Veränderlich",

    "Vénus": "Venus",
    "Lune": "Mond",
    "Soleil": "Sonne",
    "Pluton": "Pluto",
    "Saturne": "Saturn",

    "Votre année": "Ihr Jahr",
    "Énergie dominante": "Dominante Energie",
    "Les grandes énergies de l’année":
      "Die großen Energien des Jahres",
    "Les aspects majeurs de l’année":
      "Die wichtigsten Aspekte des Jahres",
    "Les planètes dominantes":
      "Die dominanten Planeten",
    "Les maisons activées":
      "Die aktivierten Häuser",
  },

  it: {
    "Feu": "Fuoco",
    "Terre": "Terra",
    "Eau": "Acqua",

    "Cardinal": "Cardinale",
    "Fixe": "Fissa",
    "Mutable": "Mutevole",

    "Vénus": "Venere",
    "Lune": "Luna",
    "Soleil": "Sole",
    "Pluton": "Plutone",
    "Saturne": "Saturno",

    "Votre année": "Il tuo anno",
    "Énergie dominante": "Energia dominante",
    "Les grandes énergies de l’année":
      "Le grandi energie dell’anno",
    "Les aspects majeurs de l’année":
      "Gli aspetti principali dell’anno",
    "Les planètes dominantes":
      "I pianeti dominanti",
    "Les maisons activées":
      "Le case attivate",
  },

  pt: {
    "Feu": "Fogo",
    "Terre": "Terra",
    "Eau": "Água",

    "Cardinal": "Cardinal",
    "Fixe": "Fixa",
    "Mutable": "Mutável",

    "Vénus": "Vênus",
    "Lune": "Lua",
    "Soleil": "Sol",
    "Pluton": "Plutão",
    "Saturne": "Saturno",

    "Votre année": "Seu ano",
    "Énergie dominante": "Energia dominante",
    "Les grandes énergies de l’année":
      "As grandes energias do ano",
    "Les aspects majeurs de l’année":
      "Os principais aspectos do ano",
    "Les planètes dominantes":
      "Os planetas dominantes",
    "Les maisons activées":
      "As casas ativadas",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearAnnualPages(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  for (
    const [french, translated] of
    Object.entries(
      TRANSLATIONS[locale],
    )
  ) {
    output =
      output.split(french).join(translated);
  }

  return output;
}
