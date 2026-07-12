export type PremiumPlanetStrengths = Record<
  string,
  Record<string, string[]>
>;

export const PREMIUM_PLANET_STRENGTHS: PremiumPlanetStrengths = {
  Sun: {
    Aries: [
      "Courage d’initiative",
      "Esprit de décision",
      "Énergie mobilisatrice",
      "Capacité à ouvrir la voie",
    ],

    Taurus: [
      "Persévérance",
      "Stabilité intérieure",
      "Sens des valeurs",
      "Capacité de construction",
    ],

    Gemini: [
      "Curiosité intellectuelle",
      "Adaptabilité",
      "Facilité de communication",
      "Vivacité d’esprit",
    ],

    Cancer: [
      "Intuition émotionnelle",
      "Instinct protecteur",
      "Fidélité aux proches",
      "Mémoire profonde",
    ],

    Leo: [
      "Créativité",
      "Générosité",
      "Force de présence",
      "Capacité d’inspiration",
    ],

    Virgo: [
      "Sens de l’analyse",
      "Fiabilité",
      "Précision",
      "Capacité d’amélioration",
    ],

    Libra: [
      "Diplomatie",
      "Sens de l’équilibre",
      "Intelligence relationnelle",
      "Recherche de justice",
    ],

    Scorpio: [
      "Persévérance",
      "Intuition",
      "Courage émotionnel",
      "Capacité de transformation",
    ],

    Sagittarius: [
      "Enthousiasme",
      "Vision d’ensemble",
      "Ouverture d’esprit",
      "Capacité à transmettre l’espoir",
    ],

    Capricorn: [
      "Discipline",
      "Sens des responsabilités",
      "Endurance",
      "Capacité de réalisation",
    ],

    Aquarius: [
      "Originalité",
      "Indépendance d’esprit",
      "Vision novatrice",
      "Capacité à remettre en question",
    ],

    Pisces: [
      "Empathie",
      "Imagination",
      "Intuition",
      "Sensibilité créatrice",
    ],
  },
};

const FALLBACK_STRENGTHS: Record<
  string,
  string[]
> = {
  Sun: [
    "Conscience de soi",
    "Volonté personnelle",
    "Capacité d’affirmation",
    "Potentiel de rayonnement",
  ],

  Moon: [
    "Sensibilité",
    "Intuition émotionnelle",
    "Capacité d’adaptation",
    "Profondeur intérieure",
  ],

  Mercury: [
    "Curiosité",
    "Capacité d’apprentissage",
    "Communication",
    "Souplesse mentale",
  ],

  Venus: [
    "Sensibilité relationnelle",
    "Capacité d’affection",
    "Sens des valeurs",
    "Recherche d’harmonie",
  ],

  Mars: [
    "Courage",
    "Force d’action",
    "Détermination",
    "Capacité d’affirmation",
  ],

  Jupiter: [
    "Confiance",
    "Ouverture",
    "Capacité de croissance",
    "Vision positive",
  ],

  Saturn: [
    "Discipline",
    "Patience",
    "Persévérance",
    "Sens des responsabilités",
  ],

  Uranus: [
    "Originalité",
    "Indépendance",
    "Innovation",
    "Capacité de renouvellement",
  ],

  Neptune: [
    "Intuition",
    "Imagination",
    "Réceptivité",
    "Inspiration",
  ],

  Pluto: [
    "Profondeur",
    "Résilience",
    "Lucidité",
    "Capacité de transformation",
  ],
};

export function getPremiumPlanetStrengths(
  planet: string,
  sign: string
): string[] {
  const planetStrengths =
    PREMIUM_PLANET_STRENGTHS[
      planet
    ];

  const signStrengths =
    planetStrengths?.[sign];

  if (
    Array.isArray(signStrengths) &&
    signStrengths.length > 0
  ) {
    return signStrengths;
  }

  const fallback =
    FALLBACK_STRENGTHS[
      planet
    ];

  if (
    Array.isArray(fallback) &&
    fallback.length > 0
  ) {
    return fallback;
  }

  return [
    "Conscience personnelle",
    "Capacité d’adaptation",
    "Potentiel d’évolution",
    "Expression authentique",
  ];
}
