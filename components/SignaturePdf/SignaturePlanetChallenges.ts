export type SignaturePlanetChallenges = Record<
  string,
  Record<string, string[]>
>;

export const SIGNATURE_PLANET_CHALLENGES: SignaturePlanetChallenges = {
  Sun: {
    Aries: [
      "Impulsivité",
      "Manque de patience",
      "Difficulté à écouter les autres",
      "Tendance à vouloir tout diriger",
    ],

    Taurus: [
      "Résistance au changement",
      "Attachement excessif aux habitudes",
      "Possessivité",
      "Difficulté à sortir de sa zone de confort",
    ],

    Gemini: [
      "Dispersion",
      "Hésitation",
      "Difficulté à approfondir",
      "Surcharge mentale",
    ],

    Cancer: [
      "Hypersensibilité",
      "Attachement au passé",
      "Difficulté à exprimer directement ses besoins",
      "Protection émotionnelle excessive",
    ],

    Leo: [
      "Besoin de reconnaissance",
      "Fierté blessée",
      "Difficulté à accepter la critique",
      "Tendance à vouloir tout contrôler",
    ],

    Virgo: [
      "Perfectionnisme",
      "Autocritique",
      "Anxiété face aux erreurs",
      "Difficulté à lâcher prise",
    ],

    Libra: [
      "Indécision",
      "Peur du conflit",
      "Recherche excessive d'approbation",
      "Difficulté à affirmer ses besoins",
    ],

    Scorpio: [
      "Difficulté à lâcher prise",
      "Tendance à tout intérioriser",
      "Besoin de contrôler certaines situations",
      "Méfiance excessive",
    ],

    Sagittarius: [
      "Excès d'optimisme",
      "Manque de constance",
      "Difficulté avec les contraintes",
      "Impatience",
    ],

    Capricorn: [
      "Rigidité",
      "Exigence envers soi-même",
      "Difficulté à montrer sa vulnérabilité",
      "Priorité excessive au travail",
    ],

    Aquarius: [
      "Distance émotionnelle",
      "Besoin d'indépendance très marqué",
      "Remise en question permanente",
      "Difficulté avec l'autorité",
    ],

    Pisces: [
      "Manque de limites",
      "Idéalisation",
      "Tendance à fuir certaines réalités",
      "Grande sensibilité émotionnelle",
    ],
  },
};

const FALLBACK_CHALLENGES: Record<
  string,
  string[]
> = {
  Sun: [
    "Affirmer pleinement son identité",
    "Développer une confiance stable",
    "Trouver son équilibre personnel",
    "Exprimer son potentiel",
  ],

  Moon: [
    "Gérer les émotions",
    "Créer une sécurité intérieure",
    "Éviter les réactions impulsives",
    "Exprimer ses besoins",
  ],

  Mercury: [
    "Canaliser le mental",
    "Clarifier la communication",
    "Éviter la dispersion",
    "Développer l'écoute",
  ],

  Venus: [
    "Équilibrer le donner et le recevoir",
    "Développer l'estime de soi",
    "Poser des limites saines",
    "Clarifier ses attentes",
  ],

  Mars: [
    "Canaliser l'énergie",
    "Gérer l'impatience",
    "Choisir ses combats",
    "Agir avec discernement",
  ],

  Jupiter: [
    "Éviter les excès",
    "Conserver le sens des réalités",
    "Mesurer les risques",
    "Développer la constance",
  ],

  Saturn: [
    "Alléger la pression",
    "Faire confiance au temps",
    "Accepter l'imperfection",
    "Reconnaître ses réussites",
  ],

  Uranus: [
    "Trouver un équilibre entre liberté et stabilité",
    "Canaliser les changements",
    "Accepter certains cadres",
    "Développer la patience",
  ],

  Neptune: [
    "Rester ancré dans le réel",
    "Clarifier ses intuitions",
    "Éviter les illusions",
    "Protéger son énergie",
  ],

  Pluto: [
    "Lâcher le contrôle",
    "Accepter les transformations",
    "Faire confiance au renouveau",
    "Transformer les peurs en forces",
  ],
};

export function getSignaturePlanetChallenges(
  planet: string,
  sign: string
): string[] {
  const planetChallenges =
    SIGNATURE_PLANET_CHALLENGES[
      planet
    ];

  const signChallenges =
    planetChallenges?.[sign];

  if (
    Array.isArray(signChallenges) &&
    signChallenges.length > 0
  ) {
    return signChallenges;
  }

  const fallback =
    FALLBACK_CHALLENGES[
      planet
    ];

  if (
    Array.isArray(fallback) &&
    fallback.length > 0
  ) {
    return fallback;
  }

  return [
    "Développer davantage de conscience",
    "Trouver un meilleur équilibre",
    "Faire confiance à son évolution",
    "Exprimer pleinement son potentiel",
  ];
}
