import type {
  CompatibilityAspect,
  CompatibilityScores,
} from "./CompatibilityPdfTypes";

type ScoreCategory =
  | "emotional"
  | "communication"
  | "romantic"
  | "attraction"
  | "stability"
  | "growth";

type AspectType =
  | "conjunction"
  | "sextile"
  | "square"
  | "trine"
  | "quincunx"
  | "opposition";

interface CategoryAccumulator {
  total: number;
  weight: number;
  aspectCount: number;
}

const CATEGORY_BASE_SCORE: Record<ScoreCategory, number> = {
  emotional: 58,
  communication: 58,
  romantic: 58,
  attraction: 58,
  stability: 55,
  growth: 58,
};

const ASPECT_SCORE: Record<AspectType, number> = {
  conjunction: 72,
  sextile: 78,
  square: 38,
  trine: 88,
  quincunx: 44,
  opposition: 46,
};

const ASPECT_MAX_ORB: Record<AspectType, number> = {
  conjunction: 8,
  sextile: 5,
  square: 7,
  trine: 7,
  quincunx: 3,
  opposition: 8,
};

const PLANET_IMPORTANCE: Record<string, number> = {
  sun: 1.25,
  moon: 1.35,
  mercury: 1.1,
  venus: 1.3,
  mars: 1.2,
  jupiter: 0.95,
  saturn: 1.15,
  uranus: 0.75,
  neptune: 0.8,
  pluto: 0.9,
};

const CATEGORY_PAIRS: Record<
  ScoreCategory,
  Array<[string, string]>
> = {
  emotional: [
    ["moon", "moon"],
    ["sun", "moon"],
    ["moon", "venus"],
    ["moon", "saturn"],
    ["moon", "neptune"],
  ],

  communication: [
    ["mercury", "mercury"],
    ["sun", "mercury"],
    ["moon", "mercury"],
    ["mercury", "venus"],
    ["mercury", "mars"],
    ["mercury", "saturn"],
    ["mercury", "uranus"],
  ],

  romantic: [
    ["venus", "venus"],
    ["sun", "venus"],
    ["moon", "venus"],
    ["venus", "mars"],
    ["venus", "neptune"],
    ["venus", "saturn"],
  ],

  attraction: [
    ["venus", "mars"],
    ["mars", "mars"],
    ["sun", "mars"],
    ["moon", "mars"],
    ["mars", "pluto"],
    ["venus", "pluto"],
    ["mars", "uranus"],
  ],

  stability: [
    ["sun", "saturn"],
    ["moon", "saturn"],
    ["venus", "saturn"],
    ["mars", "saturn"],
    ["saturn", "saturn"],
    ["sun", "sun"],
    ["moon", "moon"],
  ],

  growth: [
    ["sun", "jupiter"],
    ["moon", "jupiter"],
    ["mercury", "jupiter"],
    ["venus", "jupiter"],
    ["mars", "jupiter"],
    ["jupiter", "jupiter"],
    ["sun", "uranus"],
    ["moon", "uranus"],
    ["sun", "neptune"],
    ["moon", "neptune"],
    ["sun", "pluto"],
    ["moon", "pluto"],
  ],
};

function clampScore(score: number): number {
  if (!Number.isFinite(score)) {
    return 0;
  }

  return Math.max(0, Math.min(100, Math.round(score)));
}

function normalizePlanetName(
  planetName: string,
): string {
  return typeof planetName === "string"
    ? planetName.trim().toLowerCase()
    : "";
}

function normalizeAspectType(
  aspectType: string,
): AspectType | null {
  const normalized =
    typeof aspectType === "string"
      ? aspectType.trim().toLowerCase()
      : "";

  if (
    normalized === "conjunction" ||
    normalized === "sextile" ||
    normalized === "square" ||
    normalized === "trine" ||
    normalized === "quincunx" ||
    normalized === "opposition"
  ) {
    return normalized;
  }

  return null;
}

function isPlanetPair(
  firstPlanet: string,
  secondPlanet: string,
  expectedFirst: string,
  expectedSecond: string,
): boolean {
  return (
    (firstPlanet === expectedFirst &&
      secondPlanet === expectedSecond) ||
    (firstPlanet === expectedSecond &&
      secondPlanet === expectedFirst)
  );
}

function getMatchingCategories(
  firstPlanet: string,
  secondPlanet: string,
): ScoreCategory[] {
  const categories: ScoreCategory[] = [];

  (
    Object.entries(CATEGORY_PAIRS) as Array<
      [
        ScoreCategory,
        Array<[string, string]>,
      ]
    >
  ).forEach(([category, pairs]) => {
    const matches = pairs.some(
      ([expectedFirst, expectedSecond]) =>
        isPlanetPair(
          firstPlanet,
          secondPlanet,
          expectedFirst,
          expectedSecond,
        ),
    );

    if (matches) {
      categories.push(category);
    }
  });

  return categories;
}

function getOrbStrength(
  type: AspectType,
  orb: number,
): number {
  const maximumOrb = ASPECT_MAX_ORB[type];

  if (
    typeof orb !== "number" ||
    !Number.isFinite(orb)
  ) {
    return 0.45;
  }

  const normalizedOrb = Math.max(
    0,
    Math.min(maximumOrb, orb),
  );

  /*
   * Un aspect exact conserve 100 % de sa force.
   * À la limite de l'orbe, il conserve encore 35 %.
   */
  return 1 - (normalizedOrb / maximumOrb) * 0.65;
}

function getPlanetWeight(
  firstPlanet: string,
  secondPlanet: string,
): number {
  const firstWeight =
    PLANET_IMPORTANCE[firstPlanet] ?? 0.7;

  const secondWeight =
    PLANET_IMPORTANCE[secondPlanet] ?? 0.7;

  return (firstWeight + secondWeight) / 2;
}

function getConjunctionScore(
  firstPlanet: string,
  secondPlanet: string,
): number {
  /*
   * Une conjonction n'est pas toujours harmonieuse.
   * Son score dépend donc de la paire de planètes.
   */
  if (
    isPlanetPair(
      firstPlanet,
      secondPlanet,
      "venus",
      "mars",
    )
  ) {
    return 91;
  }

  if (
    isPlanetPair(
      firstPlanet,
      secondPlanet,
      "moon",
      "moon",
    ) ||
    isPlanetPair(
      firstPlanet,
      secondPlanet,
      "sun",
      "moon",
    )
  ) {
    return 86;
  }

  if (
    isPlanetPair(
      firstPlanet,
      secondPlanet,
      "mercury",
      "mercury",
    )
  ) {
    return 84;
  }

  if (
    firstPlanet === "saturn" ||
    secondPlanet === "saturn"
  ) {
    return 64;
  }

  if (
    firstPlanet === "uranus" ||
    secondPlanet === "uranus"
  ) {
    return 68;
  }

  if (
    firstPlanet === "pluto" ||
    secondPlanet === "pluto"
  ) {
    return 70;
  }

  return ASPECT_SCORE.conjunction;
}

function getAspectBaseScore(
  type: AspectType,
  firstPlanet: string,
  secondPlanet: string,
): number {
  if (type === "conjunction") {
    return getConjunctionScore(
      firstPlanet,
      secondPlanet,
    );
  }

  let score = ASPECT_SCORE[type];

  /*
   * Les aspects difficiles avec Saturne peuvent être
   * lourds, mais ils ajoutent aussi de la durabilité.
   */
  if (
    (type === "square" ||
      type === "opposition" ||
      type === "quincunx") &&
    (firstPlanet === "saturn" ||
      secondPlanet === "saturn")
  ) {
    score += 4;
  }

  /*
   * Les aspects harmonieux impliquant Vénus, la Lune
   * ou Jupiter sont particulièrement favorables.
   */
  if (
    (type === "trine" || type === "sextile") &&
    (
      firstPlanet === "venus" ||
      secondPlanet === "venus" ||
      firstPlanet === "moon" ||
      secondPlanet === "moon" ||
      firstPlanet === "jupiter" ||
      secondPlanet === "jupiter"
    )
  ) {
    score += 4;
  }

  return Math.max(0, Math.min(100, score));
}

function createAccumulator(): CategoryAccumulator {
  return {
    total: 0,
    weight: 0,
    aspectCount: 0,
  };
}

function calculateCategoryScore(
  accumulator: CategoryAccumulator,
  category: ScoreCategory,
): number {
  if (
    accumulator.weight <= 0 ||
    accumulator.aspectCount === 0
  ) {
    return CATEGORY_BASE_SCORE[category];
  }

  const weightedAverage =
    accumulator.total / accumulator.weight;

  /*
   * On garde une petite part du score de base pour éviter
   * qu'un seul aspect domine entièrement une catégorie.
   */
  const confidence = Math.min(
    1,
    accumulator.aspectCount / 4,
  );

  const blendedScore =
    CATEGORY_BASE_SCORE[category] *
      (1 - confidence) +
    weightedAverage * confidence;

  return clampScore(blendedScore);
}

function calculateOverallScore(
  scores: Omit<CompatibilityScores, "overall">,
): number {
  const weightedTotal =
    scores.emotional * 1.2 +
    scores.communication * 1.05 +
    scores.romantic * 1.2 +
    scores.attraction * 1 +
    scores.stability * 1.15 +
    scores.growth * 0.9;

  const totalWeight =
    1.2 + 1.05 + 1.2 + 1 + 1.15 + 0.9;

  return clampScore(weightedTotal / totalWeight);
}

/*
 * Calcule les sept indices de compatibilité à partir
 * des aspects de synastrie.
 *
 * Le résultat demeure entre 0 et 100.
 * Si aucun aspect valide n'est disponible, les catégories
 * reçoivent une valeur neutre plutôt que 0.
 */
export function calculateCompatibilityScores(
  aspects: CompatibilityAspect[],
): CompatibilityScores {
  const accumulators: Record<
    ScoreCategory,
    CategoryAccumulator
  > = {
    emotional: createAccumulator(),
    communication: createAccumulator(),
    romantic: createAccumulator(),
    attraction: createAccumulator(),
    stability: createAccumulator(),
    growth: createAccumulator(),
  };

  const safeAspects = Array.isArray(aspects)
    ? aspects
    : [];

  safeAspects.forEach((aspect) => {
    const firstPlanet = normalizePlanetName(
      aspect.person1Planet,
    );

    const secondPlanet = normalizePlanetName(
      aspect.person2Planet,
    );

    const type = normalizeAspectType(
      aspect.type,
    );

    if (
      !firstPlanet ||
      !secondPlanet ||
      !type
    ) {
      return;
    }

    const categories = getMatchingCategories(
      firstPlanet,
      secondPlanet,
    );

    if (categories.length === 0) {
      return;
    }

    const orb =
      typeof aspect.orb === "number"
        ? aspect.orb
        : 0;

    const baseScore = getAspectBaseScore(
      type,
      firstPlanet,
      secondPlanet,
    );

    const orbStrength = getOrbStrength(
      type,
      orb,
    );

    const planetWeight = getPlanetWeight(
      firstPlanet,
      secondPlanet,
    );

    const finalWeight =
      orbStrength * planetWeight;

    categories.forEach((category) => {
      const accumulator =
        accumulators[category];

      accumulator.total +=
        baseScore * finalWeight;

      accumulator.weight += finalWeight;
      accumulator.aspectCount += 1;
    });
  });

  const categoryScores: Omit<
    CompatibilityScores,
    "overall"
  > = {
    emotional: calculateCategoryScore(
      accumulators.emotional,
      "emotional",
    ),

    communication: calculateCategoryScore(
      accumulators.communication,
      "communication",
    ),

    romantic: calculateCategoryScore(
      accumulators.romantic,
      "romantic",
    ),

    attraction: calculateCategoryScore(
      accumulators.attraction,
      "attraction",
    ),

    stability: calculateCategoryScore(
      accumulators.stability,
      "stability",
    ),

    growth: calculateCategoryScore(
      accumulators.growth,
      "growth",
    ),
  };

  return {
    overall:
      calculateOverallScore(categoryScores),

    ...categoryScores,
  };
}
