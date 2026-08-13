export type CompatibilityPdfLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

/*
 * ---------------------------------------------------------
 * NORMALISATION
 * ---------------------------------------------------------
 */

function normalizeValue(
  value?: string,
): string {
  return (value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/*
 * ---------------------------------------------------------
 * PLANÈTES
 * ---------------------------------------------------------
 */

const PLANET_ALIASES: Record<
  string,
  string
> = {
  sun: "sun",
  soleil: "sun",

  moon: "moon",
  lune: "moon",

  mercury: "mercury",
  mercure: "mercury",

  venus: "venus",
  vénus: "venus",

  mars: "mars",

  jupiter: "jupiter",

  saturn: "saturn",
  saturne: "saturn",

  uranus: "uranus",

  neptune: "neptune",

  pluto: "pluto",
  pluton: "pluto",
};

const PLANET_LABELS: Record<
  CompatibilityPdfLocale,
  Record<string, string>
> = {
  fr: {
    sun: "Soleil",
    moon: "Lune",
    mercury: "Mercure",
    venus: "Vénus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturne",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluton",
  },

  en: {
    sun: "Sun",
    moon: "Moon",
    mercury: "Mercury",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluto",
  },

  es: {
    sun: "Sol",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Neptuno",
    pluto: "Plutón",
  },

  de: {
    sun: "Sonne",
    moon: "Mond",
    mercury: "Merkur",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptun",
    pluto: "Pluto",
  },

  it: {
    sun: "Sole",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venere",
    mars: "Marte",
    jupiter: "Giove",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Nettuno",
    pluto: "Plutone",
  },

  pt: {
    sun: "Sol",
    moon: "Lua",
    mercury: "Mercúrio",
    venus: "Vênus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Netuno",
    pluto: "Plutão",
  },
};

export function translateCompatibilityPlanet(
  value: string | undefined,
  locale: CompatibilityPdfLocale,
): string {
  if (!value) {
    return "";
  }

  const normalized =
    normalizeValue(value);

  const key =
    PLANET_ALIASES[normalized] ??
    normalized;

  return (
    PLANET_LABELS[locale]?.[key] ??
    value
  );
}

/*
 * ---------------------------------------------------------
 * SIGNES
 * ---------------------------------------------------------
 */

const SIGN_ALIASES: Record<
  string,
  string
> = {
  aries: "aries",
  belier: "aries",

  taurus: "taurus",
  taureau: "taurus",

  gemini: "gemini",
  gemeaux: "gemini",

  cancer: "cancer",

  leo: "leo",
  lion: "leo",

  virgo: "virgo",
  vierge: "virgo",

  libra: "libra",
  balance: "libra",

  scorpio: "scorpio",
  scorpion: "scorpio",

  sagittarius: "sagittarius",
  sagittaire: "sagittarius",

  capricorn: "capricorn",
  capricorne: "capricorn",

  aquarius: "aquarius",
  verseau: "aquarius",

  pisces: "pisces",
  poissons: "pisces",
};

const SIGN_LABELS: Record<
  CompatibilityPdfLocale,
  Record<string, string>
> = {
  fr: {
    aries: "Bélier",
    taurus: "Taureau",
    gemini: "Gémeaux",
    cancer: "Cancer",
    leo: "Lion",
    virgo: "Vierge",
    libra: "Balance",
    scorpio: "Scorpion",
    sagittarius: "Sagittaire",
    capricorn: "Capricorne",
    aquarius: "Verseau",
    pisces: "Poissons",
  },

  en: {
    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",
  },

  es: {
    aries: "Aries",
    taurus: "Tauro",
    gemini: "Géminis",
    cancer: "Cáncer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Escorpio",
    sagittarius: "Sagitario",
    capricorn: "Capricornio",
    aquarius: "Acuario",
    pisces: "Piscis",
  },

  de: {
    aries: "Widder",
    taurus: "Stier",
    gemini: "Zwillinge",
    cancer: "Krebs",
    leo: "Löwe",
    virgo: "Jungfrau",
    libra: "Waage",
    scorpio: "Skorpion",
    sagittarius: "Schütze",
    capricorn: "Steinbock",
    aquarius: "Wassermann",
    pisces: "Fische",
  },

  it: {
    aries: "Ariete",
    taurus: "Toro",
    gemini: "Gemelli",
    cancer: "Cancro",
    leo: "Leone",
    virgo: "Vergine",
    libra: "Bilancia",
    scorpio: "Scorpione",
    sagittarius: "Sagittario",
    capricorn: "Capricorno",
    aquarius: "Acquario",
    pisces: "Pesci",
  },

  pt: {
    aries: "Áries",
    taurus: "Touro",
    gemini: "Gêmeos",
    cancer: "Câncer",
    leo: "Leão",
    virgo: "Virgem",
    libra: "Libra",
    scorpio: "Escorpião",
    sagittarius: "Sagitário",
    capricorn: "Capricórnio",
    aquarius: "Aquário",
    pisces: "Peixes",
  },
};

export function translateCompatibilitySign(
  value: string | undefined,
  locale: CompatibilityPdfLocale,
): string {
  if (!value) {
    return "";
  }

  const normalized =
    normalizeValue(value);

  const key =
    SIGN_ALIASES[normalized] ??
    normalized;

  return (
    SIGN_LABELS[locale]?.[key] ??
    value
  );
}

/*
 * ---------------------------------------------------------
 * ÉLÉMENTS
 * ---------------------------------------------------------
 */

const ELEMENT_ALIASES: Record<
  string,
  string
> = {
  fire: "fire",
  feu: "fire",

  earth: "earth",
  terre: "earth",

  air: "air",

  water: "water",
  eau: "water",
};

const ELEMENT_LABELS: Record<
  CompatibilityPdfLocale,
  Record<string, string>
> = {
  fr: {
    fire: "Feu",
    earth: "Terre",
    air: "Air",
    water: "Eau",
  },

  en: {
    fire: "Fire",
    earth: "Earth",
    air: "Air",
    water: "Water",
  },

  es: {
    fire: "Fuego",
    earth: "Tierra",
    air: "Aire",
    water: "Agua",
  },

  de: {
    fire: "Feuer",
    earth: "Erde",
    air: "Luft",
    water: "Wasser",
  },

  it: {
    fire: "Fuoco",
    earth: "Terra",
    air: "Aria",
    water: "Acqua",
  },

  pt: {
    fire: "Fogo",
    earth: "Terra",
    air: "Ar",
    water: "Água",
  },
};

export function translateCompatibilityElement(
  value: string | undefined,
  locale: CompatibilityPdfLocale,
): string {
  if (!value) {
    return "";
  }

  const normalized =
    normalizeValue(value);

  const key =
    ELEMENT_ALIASES[normalized] ??
    normalized;

  return (
    ELEMENT_LABELS[locale]?.[key] ??
    value
  );
}

/*
 * ---------------------------------------------------------
 * ASPECTS
 * ---------------------------------------------------------
 */

export type CompatibilityAspectKey =
  | "conjunction"
  | "opposition"
  | "trine"
  | "square"
  | "sextile"
  | "quincunx";

const ASPECT_LABELS: Record<
  CompatibilityPdfLocale,
  Record<
    CompatibilityAspectKey,
    string
  >
> = {
  fr: {
    conjunction: "Conjonction",
    opposition: "Opposition",
    trine: "Trigone",
    square: "Carré",
    sextile: "Sextile",
    quincunx: "Quinconce",
  },

  en: {
    conjunction: "Conjunction",
    opposition: "Opposition",
    trine: "Trine",
    square: "Square",
    sextile: "Sextile",
    quincunx: "Quincunx",
  },

  es: {
    conjunction: "Conjunción",
    opposition: "Oposición",
    trine: "Trígono",
    square: "Cuadratura",
    sextile: "Sextil",
    quincunx: "Quincuncio",
  },

  de: {
    conjunction: "Konjunktion",
    opposition: "Opposition",
    trine: "Trigon",
    square: "Quadrat",
    sextile: "Sextil",
    quincunx: "Quinkunx",
  },

  it: {
    conjunction: "Congiunzione",
    opposition: "Opposizione",
    trine: "Trigono",
    square: "Quadratura",
    sextile: "Sestile",
    quincunx: "Quinconce",
  },

  pt: {
    conjunction: "Conjunção",
    opposition: "Oposição",
    trine: "Trígono",
    square: "Quadratura",
    sextile: "Sextil",
    quincunx: "Quincúncio",
  },
};

export function translateCompatibilityAspectType(
  type: CompatibilityAspectKey,
  locale: CompatibilityPdfLocale,
): string {
  return (
    ASPECT_LABELS[locale]?.[type] ??
    type
  );
}

/*
 * ---------------------------------------------------------
 * NATURE DES ASPECTS
 * ---------------------------------------------------------
 */

export type CompatibilityNatureKey =
  | "harmonious"
  | "challenging"
  | "intense"
  | "adjustment";

const NATURE_LABELS: Record<
  CompatibilityPdfLocale,
  Record<
    CompatibilityNatureKey,
    string
  >
> = {
  fr: {
    harmonious: "Harmonieux",
    challenging: "Tension",
    intense: "Intense",
    adjustment: "Ajustement",
  },

  en: {
    harmonious: "Harmonious",
    challenging: "Challenging",
    intense: "Intense",
    adjustment: "Adjustment",
  },

  es: {
    harmonious: "Armonioso",
    challenging: "Desafiante",
    intense: "Intenso",
    adjustment: "Ajuste",
  },

  de: {
    harmonious: "Harmonisch",
    challenging: "Herausfordernd",
    intense: "Intensiv",
    adjustment: "Anpassung",
  },

  it: {
    harmonious: "Armonioso",
    challenging: "Impegnativo",
    intense: "Intenso",
    adjustment: "Adattamento",
  },

  pt: {
    harmonious: "Harmonioso",
    challenging: "Desafiador",
    intense: "Intenso",
    adjustment: "Ajuste",
  },
};

export function translateCompatibilityNature(
  nature:
    | CompatibilityNatureKey
    | undefined,
  locale: CompatibilityPdfLocale,
): string {
  if (!nature) {
    return "";
  }

  return (
    NATURE_LABELS[locale]?.[nature] ??
    nature
  );
}

/*
 * ---------------------------------------------------------
 * PETITS MOTS RÉUTILISABLES
 * ---------------------------------------------------------
 */

const COMMON_LABELS = {
  fr: {
    in: "en",
    element: "Élément",
    orb: "orbe",
    and: "et",
  },

  en: {
    in: "in",
    element: "Element",
    orb: "orb",
    and: "and",
  },

  es: {
    in: "en",
    element: "Elemento",
    orb: "orbe",
    and: "y",
  },

  de: {
    in: "in",
    element: "Element",
    orb: "Orb",
    and: "und",
  },

  it: {
    in: "in",
    element: "Elemento",
    orb: "orbe",
    and: "e",
  },

  pt: {
    in: "em",
    element: "Elemento",
    orb: "orbe",
    and: "e",
  },
} satisfies Record<
  CompatibilityPdfLocale,
  Record<string, string>
>;

export function compatibilityCommonLabel(
  key:
    | "in"
    | "element"
    | "orb"
    | "and",
  locale: CompatibilityPdfLocale,
): string {
  return COMMON_LABELS[locale][key];
}

/*
 * ---------------------------------------------------------
 * FORMATEURS
 * ---------------------------------------------------------
 */

export function formatCompatibilityPlacement(
  planet: string | undefined,
  sign: string | undefined,
  locale: CompatibilityPdfLocale,
): string {
  const translatedPlanet =
    translateCompatibilityPlanet(
      planet,
      locale,
    );

  const translatedSign =
    translateCompatibilitySign(
      sign,
      locale,
    );

  if (!translatedPlanet) {
    return translatedSign;
  }

  if (!translatedSign) {
    return translatedPlanet;
  }

  return `${translatedPlanet} ${
    COMMON_LABELS[locale].in
  } ${translatedSign}`;
}

export function formatCompatibilityAspect(
  planet1: string | undefined,
  type: CompatibilityAspectKey,
  planet2: string | undefined,
  locale: CompatibilityPdfLocale,
): string {
  return [
    translateCompatibilityPlanet(
      planet1,
      locale,
    ),
    translateCompatibilityAspectType(
      type,
      locale,
    ),
    translateCompatibilityPlanet(
      planet2,
      locale,
    ),
  ]
    .filter(Boolean)
    .join(" ");
}
