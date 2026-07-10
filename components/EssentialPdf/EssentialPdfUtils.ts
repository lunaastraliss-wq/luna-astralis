import {
  SUN,
  MOON,
  MERCURY,
  VENUS,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
  PLUTO,
} from "@/lib/astrology";

export const SIGN_FR: Record<string, string> = {
  Aries: "Bélier",
  Taurus: "Taureau",
  Gemini: "Gémeaux",
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",
};

export const PLANET_FR: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

export const PLANET_MEANINGS: Record<string, string> = {
  Sun: "Identité et volonté",
  Moon: "Émotions et besoins",
  Mercury: "Pensée et communication",
  Venus: "Amour et valeurs",
  Mars: "Action et désir",
  Jupiter: "Expansion et confiance",
  Saturn: "Structure et apprentissage",
  Uranus: "Liberté et changement",
  Neptune: "Intuition et idéal",
  Pluto: "Transformation et puissance",
};

export const PLANET_TEXTS: Record<
  string,
  Record<string, string>
> = {
  Sun: SUN,
  Moon: MOON,
  Mercury: MERCURY,
  Venus: VENUS,
  Mars: MARS,
  Jupiter: JUPITER,
  Saturn: SATURN,
  Uranus: URANUS,
  Neptune: NEPTUNE,
  Pluto: PLUTO,
};

export const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

export const ELEMENT_PROFILES: Record<
  string,
  {
    qualities: string[];
    challenges: string[];
    summary: string;
  }
> = {
  Feu: {
    qualities: [
      "Enthousiasme",
      "Courage",
      "Créativité",
    ],
    challenges: [
      "Impatience",
      "Impulsivité",
    ],
    summary:
      "Votre dominante de Feu vous pousse à agir avec passion, spontanéité et confiance. Vous avancez grâce à votre enthousiasme et à votre désir de créer.",
  },

  Terre: {
    qualities: [
      "Stabilité",
      "Réalisme",
      "Persévérance",
    ],
    challenges: [
      "Rigidité",
      "Besoin de contrôle",
    ],
    summary:
      "Votre dominante de Terre vous donne un grand sens pratique, de la constance et le désir de construire quelque chose de durable.",
  },

  Air: {
    qualities: [
      "Curiosité",
      "Communication",
      "Ouverture",
    ],
    challenges: [
      "Dispersion",
      "Détachement émotionnel",
    ],
    summary:
      "Votre dominante d’Air favorise la réflexion, les échanges et l’ouverture aux idées nouvelles. Vous avez besoin de comprendre et de communiquer.",
  },

  Eau: {
    qualities: [
      "Intuition",
      "Empathie",
      "Profondeur",
    ],
    challenges: [
      "Hypersensibilité",
      "Difficulté à lâcher prise",
    ],
    summary:
      "Votre dominante d’Eau vous rend particulièrement intuitive, réceptive et sensible aux ambiances. Vous comprenez souvent ce qui n’est pas exprimé.",
  },
};

export const MODALITY_PROFILES: Record<
  string,
  {
    quality: string;
    challenge: string;
    summary: string;
  }
> = {
  Cardinal: {
    quality: "Initiative",
    challenge:
      "Aller au bout de chaque projet",
    summary:
      "La modalité Cardinale vous pousse à entreprendre, à initier les changements et à ouvrir de nouvelles voies.",
  },

  Fixe: {
    quality: "Persévérance",
    challenge:
      "Accepter plus facilement le changement",
    summary:
      "La modalité Fixe vous apporte de la loyauté, de l’endurance et une remarquable capacité à maintenir vos efforts dans le temps.",
  },

  Mutable: {
    quality: "Adaptabilité",
    challenge:
      "Maintenir une direction stable",
    summary:
      "La modalité Mutable vous permet de vous adapter, d’évoluer et de comprendre rapidement les changements qui vous entourent.",
  },
};

export function signFr(
  sign?: string
): string {
  if (!sign) {
    return "—";
  }

  return SIGN_FR[sign] || sign;
}

export function translateSigns(
  value?: string
): string {
  if (!value) {
    return "—";
  }

  let translated = value;

  Object.keys(SIGN_FR).forEach(
    (englishSign) => {
      translated = translated.replace(
        new RegExp(englishSign, "g"),
        SIGN_FR[englishSign]
      );
    }
  );

  return translated;
}

export function getPlanet(
  planets: any[],
  name: string
) {
  return planets.find(
    (planet) => planet.name === name
  );
}

export function getPlanetSignName(
  planet: any
): string {
  if (!planet) {
    return "";
  }

  if (
    typeof planet.signName === "string"
  ) {
    return planet.signName;
  }

  if (
    typeof planet.sign === "string"
  ) {
    return planet.sign;
  }

  return "";
}

export function getAscendantSign(
  angles: any
): string {
  const ascendant =
    angles?.ascendant ||
    angles?.Ascendant ||
    angles?.ASC ||
    null;

  if (!ascendant) {
    return "";
  }

  if (
    typeof ascendant.signName ===
    "string"
  ) {
    return ascendant.signName;
  }

  if (
    typeof ascendant.sign === "string"
  ) {
    return ascendant.sign;
  }

  if (
    typeof ascendant.formatted ===
    "string"
  ) {
    const englishSign =
      Object.keys(SIGN_FR).find(
        (sign) =>
          ascendant.formatted.includes(
            sign
          )
      );

    return (
      englishSign ||
      ascendant.formatted
    );
  }

  return "";
}

export function getPlanetInterpretation(
  planetName: string,
  signName?: string
): string {
  if (!signName) {
    return "Cette position n’a pas pu être calculée avec les données disponibles.";
  }

  return (
    PLANET_TEXTS[planetName]?.[
      signName
    ] ||
    "Cette planète révèle une dimension importante de votre personnalité, de vos besoins et de votre évolution intérieure."
  );
}

export function formatDegree(
  value: unknown
): string {
  const degree = Number(value);

  if (!Number.isFinite(degree)) {
    return "";
  }

  const normalized =
    ((degree % 30) + 30) % 30;

  const wholeDegrees =
    Math.floor(normalized);

  const minutes = Math.round(
    (normalized - wholeDegrees) * 60
  );

  if (minutes === 60) {
    return `${wholeDegrees + 1}°00'`;
  }

  return `${wholeDegrees}°${String(
    minutes
  ).padStart(2, "0")}'`;
}

export function getPlanetDegree(
  planet: any
): string {
  if (!planet) {
    return "";
  }

  const possibleValues = [
    planet.degreeInSign,
    planet.signDegree,
    planet.degree,
    planet.degrees,
    planet.positionInSign,
  ];

  for (const value of possibleValues) {
    if (typeof value === "number") {
      return formatDegree(value);
    }
  }

  if (
    typeof planet.formatted ===
    "string"
  ) {
    const match =
      planet.formatted.match(
        /(\d{1,2})[°\s]+(\d{1,2})?/
      );

    if (match) {
      const degrees = match[1];
      const minutes =
        match[2] || "00";

      return `${degrees}°${minutes.padStart(
        2,
        "0"
      )}'`;
    }
  }

  return "";
}
