import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
    "Horoscope de l’année":
      "Yearly Horoscope",
    "Année":
      "Year",

    "Bordeaux":
      "Burgundy",
    "Bleu nuit":
      "Midnight blue",
    "Vert émeraude":
      "Emerald green",
    "Or":
      "Gold",
    "Violet profond":
      "Deep purple",
    "Rose poudré":
      "Powder pink",

    "Obsidienne":
      "Obsidian",
    "Améthyste":
      "Amethyst",
    "Quartz rose":
      "Rose quartz",
    "Labradorite":
      "Labradorite",
    "Citrine":
      "Citrine",
    "Pierre de lune":
      "Moonstone",

    "Transformation":
      "Transformation",
    "Clarté":
      "Clarity",
    "Confiance":
      "Confidence",
    "Équilibre":
      "Balance",
    "Renouveau":
      "Renewal",
    "Intuition":
      "Intuition",

    "Feu":
      "Fire",
    "Terre":
      "Earth",
    "Air":
      "Air",
    "Eau":
      "Water",

    "Vénus":
      "Venus",
    "Mercure":
      "Mercury",
    "Lune":
      "Moon",
    "Soleil":
      "Sun",
    "Pluton":
      "Pluto",
    "Saturne":
      "Saturn",
    "Uranus":
      "Uranus",
    "Neptune":
      "Neptune",

    "Trimestre":
      "Quarter",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "These symbolic elements can accompany you throughout your year.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "The most important transformations take shape through decisions repeated with consistency.",

    "Votre message de l’année":
      "Your Message for the Year",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Your strength this year lies in your ability to remain true to your direction while adapting your path to new realities.",
  },

  es: {
    "Horoscope de l’année":
      "Horóscopo anual",
    "Année":
      "Año",

    "Bordeaux":
      "Burdeos",
    "Bleu nuit":
      "Azul noche",
    "Vert émeraude":
      "Verde esmeralda",
    "Or":
      "Dorado",
    "Violet profond":
      "Violeta profundo",
    "Rose poudré":
      "Rosa empolvado",

    "Obsidienne":
      "Obsidiana",
    "Améthyste":
      "Amatista",
    "Quartz rose":
      "Cuarzo rosa",
    "Labradorite":
      "Labradorita",
    "Citrine":
      "Citrino",
    "Pierre de lune":
      "Piedra lunar",

    "Transformation":
      "Transformación",
    "Clarté":
      "Claridad",
    "Confiance":
      "Confianza",
    "Équilibre":
      "Equilibrio",
    "Renouveau":
      "Renovación",
    "Intuition":
      "Intuición",

    "Feu":
      "Fuego",
    "Terre":
      "Tierra",
    "Air":
      "Aire",
    "Eau":
      "Agua",

    "Vénus":
      "Venus",
    "Mercure":
      "Mercurio",
    "Lune":
      "Luna",
    "Soleil":
      "Sol",
    "Pluton":
      "Plutón",
    "Saturne":
      "Saturno",
    "Uranus":
      "Urano",
    "Neptune":
      "Neptuno",

    "Trimestre":
      "Trimestre",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Estos elementos simbólicos pueden acompañarte a lo largo del año.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "Las transformaciones más importantes toman forma a través de decisiones repetidas con constancia.",

    "Votre message de l’année":
      "Tu mensaje del año",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Tu fuerza este año reside en tu capacidad para mantenerte fiel a tu dirección mientras adaptas tu camino a las nuevas realidades.",
  },

  de: {
    "Horoscope de l’année":
      "Jahreshoroskop",
    "Année":
      "Jahr",

    "Bordeaux":
      "Bordeauxrot",
    "Bleu nuit":
      "Mitternachtsblau",
    "Vert émeraude":
      "Smaragdgrün",
    "Or":
      "Gold",
    "Violet profond":
      "Dunkelviolett",
    "Rose poudré":
      "Puderrosa",

    "Obsidienne":
      "Obsidian",
    "Améthyste":
      "Amethyst",
    "Quartz rose":
      "Rosenquarz",
    "Labradorite":
      "Labradorit",
    "Citrine":
      "Citrin",
    "Pierre de lune":
      "Mondstein",

    "Transformation":
      "Transformation",
    "Clarté":
      "Klarheit",
    "Confiance":
      "Vertrauen",
    "Équilibre":
      "Gleichgewicht",
    "Renouveau":
      "Erneuerung",
    "Intuition":
      "Intuition",

    "Feu":
      "Feuer",
    "Terre":
      "Erde",
    "Air":
      "Luft",
    "Eau":
      "Wasser",

    "Vénus":
      "Venus",
    "Mercure":
      "Merkur",
    "Lune":
      "Mond",
    "Soleil":
      "Sonne",
    "Pluton":
      "Pluto",
    "Saturne":
      "Saturn",
    "Uranus":
      "Uranus",
    "Neptune":
      "Neptun",

    "Trimestre":
      "Quartal",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Diese symbolischen Elemente können Sie durch Ihr Jahr begleiten.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "Die wichtigsten Veränderungen entstehen durch Entscheidungen, die mit Beständigkeit wiederholt werden.",

    "Votre message de l’année":
      "Ihre Botschaft für das Jahr",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Ihre Stärke liegt in diesem Jahr darin, Ihrer Richtung treu zu bleiben und zugleich Ihren Weg an neue Realitäten anzupassen.",
  },

  it: {
    "Horoscope de l’année":
      "Oroscopo annuale",
    "Année":
      "Anno",

    "Bordeaux":
      "Bordeaux",
    "Bleu nuit":
      "Blu notte",
    "Vert émeraude":
      "Verde smeraldo",
    "Or":
      "Oro",
    "Violet profond":
      "Viola intenso",
    "Rose poudré":
      "Rosa cipria",

    "Obsidienne":
      "Ossidiana",
    "Améthyste":
      "Ametista",
    "Quartz rose":
      "Quarzo rosa",
    "Labradorite":
      "Labradorite",
    "Citrine":
      "Citrino",
    "Pierre de lune":
      "Pietra di luna",

    "Transformation":
      "Trasformazione",
    "Clarté":
      "Chiarezza",
    "Confiance":
      "Fiducia",
    "Équilibre":
      "Equilibrio",
    "Renouveau":
      "Rinnovamento",
    "Intuition":
      "Intuizione",

    "Feu":
      "Fuoco",
    "Terre":
      "Terra",
    "Air":
      "Aria",
    "Eau":
      "Acqua",

    "Vénus":
      "Venere",
    "Mercure":
      "Mercurio",
    "Lune":
      "Luna",
    "Soleil":
      "Sole",
    "Pluton":
      "Plutone",
    "Saturne":
      "Saturno",
    "Uranus":
      "Urano",
    "Neptune":
      "Nettuno",

    "Trimestre":
      "Trimestre",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Questi elementi simbolici possono accompagnarti durante il tuo anno.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "Le trasformazioni più importanti prendono forma attraverso decisioni ripetute con costanza.",

    "Votre message de l’année":
      "Il tuo messaggio dell’anno",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "La tua forza quest’anno risiede nella capacità di rimanere fedele alla tua direzione adattando al tempo stesso il tuo percorso alle nuove realtà.",
  },

  pt: {
    "Horoscope de l’année":
      "Horóscopo anual",
    "Année":
      "Ano",

    "Bordeaux":
      "Bordô",
    "Bleu nuit":
      "Azul-noturno",
    "Vert émeraude":
      "Verde-esmeralda",
    "Or":
      "Dourado",
    "Violet profond":
      "Violeta profundo",
    "Rose poudré":
      "Rosa-pó",

    "Obsidienne":
      "Obsidiana",
    "Améthyste":
      "Ametista",
    "Quartz rose":
      "Quartzo rosa",
    "Labradorite":
      "Labradorita",
    "Citrine":
      "Citrino",
    "Pierre de lune":
      "Pedra da lua",

    "Transformation":
      "Transformação",
    "Clarté":
      "Clareza",
    "Confiance":
      "Confiança",
    "Équilibre":
      "Equilíbrio",
    "Renouveau":
      "Renovação",
    "Intuition":
      "Intuição",

    "Feu":
      "Fogo",
    "Terre":
      "Terra",
    "Air":
      "Ar",
    "Eau":
      "Água",

    "Vénus":
      "Vênus",
    "Mercure":
      "Mercúrio",
    "Lune":
      "Lua",
    "Soleil":
      "Sol",
    "Pluton":
      "Plutão",
    "Saturne":
      "Saturno",
    "Uranus":
      "Urano",
    "Neptune":
      "Netuno",

    "Trimestre":
      "Trimestre",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Esses elementos simbólicos podem acompanhar você ao longo do ano.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "As transformações mais importantes tomam forma por meio de decisões repetidas com constância.",

    "Votre message de l’année":
      "Sua mensagem do ano",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Sua força neste ano está na capacidade de permanecer fiel à sua direção enquanto adapta seu caminho às novas realidades.",
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
