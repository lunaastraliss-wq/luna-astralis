import type {
  MonthlyAspect,
  MonthlyAspectType,
  MonthlyAstrologyPeriodResult,
  MonthlyPeriodCategory,
  MonthlyPeriodStrength,
  MonthlyPlanetName,
  MonthlyTransit,
} from "./types";

/*
|--------------------------------------------------------------------------
| Résultat retourné par le calcul
|--------------------------------------------------------------------------
*/

export type CalculateMonthlyPeriodsResult = {
  favorablePeriods:
    MonthlyAstrologyPeriodResult[];

  delicatePeriods:
    MonthlyAstrologyPeriodResult[];
};

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

type PeriodTone =
  | "favorable"
  | "delicate";

type DailyPeriodSignal = {
  date: string;

  category:
    MonthlyPeriodCategory;

  favorableScore: number;
  delicateScore: number;

  relatedPlanets:
    Set<MonthlyPlanetName>;

  relatedAspectIds:
    Set<string>;
};

type PeriodCandidate = {
  tone: PeriodTone;

  category:
    MonthlyPeriodCategory;

  startDate: string;
  endDate: string;

  score: number;

  relatedPlanets:
    MonthlyPlanetName[];

  relatedAspectIds:
    string[];
};

/*
|--------------------------------------------------------------------------
| Poids des aspects
|--------------------------------------------------------------------------
*/

const ASPECT_SCORE:
  Record<
    MonthlyAspectType,
    {
      favorable: number;
      delicate: number;
    }
  > = {
    conjunction: {
      favorable: 5,
      delicate: 5,
    },

    sextile: {
      favorable: 9,
      delicate: 0,
    },

    square: {
      favorable: 0,
      delicate: 10,
    },

    trine: {
      favorable: 11,
      delicate: 0,
    },

    opposition: {
      favorable: 0,
      delicate: 11,
    },
  };

/*
|--------------------------------------------------------------------------
| Catégories associées aux planètes
|--------------------------------------------------------------------------
*/

const PLANET_CATEGORIES:
  Record<
    MonthlyPlanetName,
    MonthlyPeriodCategory[]
  > = {
    Soleil: [
      "energy",
      "career",
      "general",
    ],

    Lune: [
      "wellbeing",
      "love",
      "general",
    ],

    Mercure: [
      "communication",
      "career",
      "money",
    ],

    Vénus: [
      "love",
      "money",
      "wellbeing",
    ],

    Mars: [
      "energy",
      "career",
      "general",
    ],

    Jupiter: [
      "career",
      "money",
      "general",
    ],

    Saturne: [
      "career",
      "money",
      "general",
    ],

    Uranus: [
      "general",
      "career",
      "communication",
    ],

    Neptune: [
      "wellbeing",
      "love",
      "general",
    ],

    Pluton: [
      "general",
      "career",
      "energy",
    ],

    Chiron: [
      "wellbeing",
      "love",
      "general",
    ],

    "Nœud Nord": [
      "general",
      "career",
      "love",
    ],

    "Nœud Sud": [
      "general",
      "wellbeing",
    ],
  };

/*
|--------------------------------------------------------------------------
| Utilitaires généraux
|--------------------------------------------------------------------------
*/

function clamp(
  value: number,
  minimum: number,
  maximum: number,
): number {
  return Math.max(
    minimum,
    Math.min(
      maximum,
      value,
    ),
  );
}

function roundValue(
  value: number,
  decimals = 2,
): number {
  const multiplier =
    10 ** decimals;

  return (
    Math.round(
      value * multiplier,
    ) / multiplier
  );
}

function cleanIdPart(
  value: string,
): string {
  return value
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .replace(
      /[^a-zA-Z0-9]+/g,
      "-",
    )
    .replace(
      /^-+|-+$/g,
      "",
    )
    .toLowerCase();
}

function formatDateId(
  value: string,
): string {
  return value.replace(
    /[^0-9]/g,
    "",
  );
}

function createDateRange({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}): string[] {
  const start =
    new Date(
      `${startDate}T12:00:00Z`,
    );

  const end =
    new Date(
      `${endDate}T12:00:00Z`,
    );

  if (
    Number.isNaN(
      start.getTime(),
    ) ||
    Number.isNaN(
      end.getTime(),
    ) ||
    start > end
  ) {
    return [];
  }

  const dates: string[] = [];

  const current =
    new Date(start);

  while (
    current <= end
  ) {
    dates.push(
      current
        .toISOString()
        .slice(
          0,
          10,
        ),
    );

    current.setUTCDate(
      current.getUTCDate() +
        1,
    );
  }

  return dates;
}

function getDayDifference(
  firstDate: string,
  secondDate: string,
): number {
  const first =
    new Date(
      `${firstDate}T12:00:00Z`,
    );

  const second =
    new Date(
      `${secondDate}T12:00:00Z`,
    );

  return Math.round(
    (
      second.getTime() -
      first.getTime()
    ) / 86_400_000,
  );
}

/*
|--------------------------------------------------------------------------
| Initialisation des signaux quotidiens
|--------------------------------------------------------------------------
*/

function buildSignalKey({
  date,
  category,
}: {
  date: string;
  category:
    MonthlyPeriodCategory;
}): string {
  return `${date}|${category}`;
}

function createDailySignal({
  date,
  category,
}: {
  date: string;
  category:
    MonthlyPeriodCategory;
}): DailyPeriodSignal {
  return {
    date,
    category,

    favorableScore: 0,
    delicateScore: 0,

    relatedPlanets:
      new Set<
        MonthlyPlanetName
      >(),

    relatedAspectIds:
      new Set<string>(),
  };
}

function getOrCreateSignal({
  signals,
  date,
  category,
}: {
  signals: Map<
    string,
    DailyPeriodSignal
  >;

  date: string;

  category:
    MonthlyPeriodCategory;
}): DailyPeriodSignal {
  const key =
    buildSignalKey({
      date,
      category,
    });

  const existing =
    signals.get(key);

  if (existing) {
    return existing;
  }

  const created =
    createDailySignal({
      date,
      category,
    });

  signals.set(
    key,
    created,
  );

  return created;
}

/*
|--------------------------------------------------------------------------
| Catégories d’un événement
|--------------------------------------------------------------------------
*/

function getPlanetCategories(
  planet:
    MonthlyPlanetName,
): MonthlyPeriodCategory[] {
  return (
    PLANET_CATEGORIES[
      planet
    ] ?? ["general"]
  );
}

function getSharedCategories({
  firstPlanet,
  secondPlanet,
}: {
  firstPlanet:
    MonthlyPlanetName;

  secondPlanet:
    MonthlyPlanetName;
}): MonthlyPeriodCategory[] {
  const firstCategories =
    getPlanetCategories(
      firstPlanet,
    );

  const secondCategories =
    getPlanetCategories(
      secondPlanet,
    );

  const combined =
    new Set<
      MonthlyPeriodCategory
    >([
      ...firstCategories,
      ...secondCategories,
      "general",
    ]);

  return Array.from(
    combined,
  );
}

/*
|--------------------------------------------------------------------------
| Influence d’un événement sur les jours voisins
|--------------------------------------------------------------------------
|
| Le jour exact reçoit toute l’intensité.
| Le jour avant et le jour après reçoivent une partie de l’influence.
|
*/

function getInfluencedDates(
  date: string,
): {
  date: string;
  multiplier: number;
}[] {
  const exactDate =
    new Date(
      `${date}T12:00:00Z`,
    );

  if (
    Number.isNaN(
      exactDate.getTime(),
    )
  ) {
    return [];
  }

  const previousDate =
    new Date(
      exactDate,
    );

  previousDate.setUTCDate(
    previousDate.getUTCDate() -
      1,
  );

  const nextDate =
    new Date(
      exactDate,
    );

  nextDate.setUTCDate(
    nextDate.getUTCDate() +
      1,
  );

  return [
    {
      date:
        previousDate
          .toISOString()
          .slice(
            0,
            10,
          ),

      multiplier: 0.45,
    },

    {
      date,
      multiplier: 1,
    },

    {
      date:
        nextDate
          .toISOString()
          .slice(
            0,
            10,
          ),

      multiplier: 0.45,
    },
  ];
}

/*
|--------------------------------------------------------------------------
| Score d’un aspect
|--------------------------------------------------------------------------
*/

function calculateAspectScores(
  aspect:
    MonthlyAspect,
): {
  favorable: number;
  delicate: number;
} {
  const base =
    ASPECT_SCORE[
      aspect.type
    ];

  const importance =
    Number.isFinite(
      aspect.importance,
    )
      ? clamp(
          aspect.importance,
          0,
          100,
        )
      : 50;

  const orb =
    Number.isFinite(
      aspect.orb,
    )
      ? Math.max(
          0,
          aspect.orb,
        )
      : 5;

  const exactness =
    clamp(
      1 -
        orb / 10,
      0.2,
      1,
    );

  const importanceMultiplier =
    0.6 +
    importance / 100;

  let favorable =
    base.favorable *
    exactness *
    importanceMultiplier;

  let delicate =
    base.delicate *
    exactness *
    importanceMultiplier;

  /*
   * Une conjonction est neutre par nature.
   * Sa tonalité dépend ici des planètes impliquées.
   */
  if (
    aspect.type ===
    "conjunction"
  ) {
    const conjunctionTone =
      getConjunctionTone([
        aspect.planet1,
        aspect.planet2,
      ]);

    if (
      conjunctionTone ===
      "favorable"
    ) {
      favorable *= 1.6;
      delicate *= 0.4;
    }

    if (
      conjunctionTone ===
      "delicate"
    ) {
      delicate *= 1.6;
      favorable *= 0.4;
    }
  }

  return {
    favorable:
      roundValue(
        favorable,
      ),

    delicate:
      roundValue(
        delicate,
      ),
  };
}

/*
|--------------------------------------------------------------------------
| Tonalité d’une conjonction
|--------------------------------------------------------------------------
*/

function getConjunctionTone(
  planets:
    MonthlyPlanetName[],
): PeriodTone | "mixed" {
  const favorablePlanets =
    new Set<
      MonthlyPlanetName
    >([
      "Soleil",
      "Vénus",
      "Jupiter",
      "Nœud Nord",
    ]);

  const delicatePlanets =
    new Set<
      MonthlyPlanetName
    >([
      "Mars",
      "Saturne",
      "Uranus",
      "Pluton",
      "Nœud Sud",
    ]);

  let favorableCount = 0;
  let delicateCount = 0;

  for (
    const planet
    of planets
  ) {
    if (
      favorablePlanets.has(
        planet,
      )
    ) {
      favorableCount += 1;
    }

    if (
      delicatePlanets.has(
        planet,
      )
    ) {
      delicateCount += 1;
    }
  }

  if (
    favorableCount >
    delicateCount
  ) {
    return "favorable";
  }

  if (
    delicateCount >
    favorableCount
  ) {
    return "delicate";
  }

  return "mixed";
}

/*
|--------------------------------------------------------------------------
| Ajout des aspects aux signaux quotidiens
|--------------------------------------------------------------------------
*/

function addAspectSignals({
  signals,
  aspect,
  startDate,
  endDate,
}: {
  signals: Map<
    string,
    DailyPeriodSignal
  >;

  aspect: MonthlyAspect;

  startDate: string;
  endDate: string;
}): void {
  const categories =
    getSharedCategories({
      firstPlanet:
        aspect.planet1,

      secondPlanet:
        aspect.planet2,
    });

  const scores =
    calculateAspectScores(
      aspect,
    );

  const influencedDates =
    getInfluencedDates(
      aspect.date,
    );

  for (
    const influenced
    of influencedDates
  ) {
    if (
      influenced.date <
        startDate ||
      influenced.date >
        endDate
    ) {
      continue;
    }

    for (
      const category
      of categories
    ) {
      const signal =
        getOrCreateSignal({
          signals,

          date:
            influenced.date,

          category,
        });

      signal.favorableScore +=
        scores.favorable *
        influenced.multiplier;

      signal.delicateScore +=
        scores.delicate *
        influenced.multiplier;

      signal.relatedPlanets.add(
        aspect.planet1,
      );

      signal.relatedPlanets.add(
        aspect.planet2,
      );

      signal.relatedAspectIds.add(
        aspect.id,
      );
    }
  }
}

/*
|--------------------------------------------------------------------------
| Score d’un transit
|--------------------------------------------------------------------------
*/

function calculateTransitScores(
  transit:
    MonthlyTransit,
): {
  favorable: number;
  delicate: number;
} {
  const importance =
    Number.isFinite(
      transit.importance,
    )
      ? clamp(
          transit.importance,
          0,
          100,
        )
      : 50;

  const aspect =
    transit.aspect;

  if (!aspect) {
    return {
      favorable:
        roundValue(
          importance /
            20,
        ),

      delicate:
        roundValue(
          importance /
            30,
        ),
    };
  }

  const base =
    ASPECT_SCORE[
      aspect
    ];

  const orb =
    typeof transit.orb ===
        "number" &&
      Number.isFinite(
        transit.orb,
      )
      ? Math.max(
          0,
          transit.orb,
        )
      : 5;

  const exactness =
    clamp(
      1 -
        orb / 10,
      0.2,
      1,
    );

  const importanceMultiplier =
    0.7 +
    importance / 90;

  let favorable =
    base.favorable *
    exactness *
    importanceMultiplier;

  let delicate =
    base.delicate *
    exactness *
    importanceMultiplier;

  if (
    aspect ===
    "conjunction"
  ) {
    const planets:
      MonthlyPlanetName[] = [
        transit.transitPlanet,
      ];

    if (
      transit.natalPlanet
    ) {
      planets.push(
        transit.natalPlanet,
      );
    }

    const conjunctionTone =
      getConjunctionTone(
        planets,
      );

    if (
      conjunctionTone ===
      "favorable"
    ) {
      favorable *= 1.7;
      delicate *= 0.35;
    }

    if (
      conjunctionTone ===
      "delicate"
    ) {
      delicate *= 1.7;
      favorable *= 0.35;
    }
  }

  /*
   * Les transits personnalisés ont plus de poids
   * que les aspects généraux du ciel.
   */
  return {
    favorable:
      roundValue(
        favorable * 1.25,
      ),

    delicate:
      roundValue(
        delicate * 1.25,
      ),
  };
}

/*
|--------------------------------------------------------------------------
| Catégories d’un transit
|--------------------------------------------------------------------------
*/

function getTransitCategories(
  transit:
    MonthlyTransit,
): MonthlyPeriodCategory[] {
  const categories =
    new Set<
      MonthlyPeriodCategory
    >([
      ...getPlanetCategories(
        transit.transitPlanet,
      ),
      "general",
    ]);

  if (
    transit.natalPlanet
  ) {
    for (
      const category
      of getPlanetCategories(
        transit.natalPlanet,
      )
    ) {
      categories.add(
        category,
      );
    }
  }

  /*
   * Correspondance approximative selon la maison natale activée.
   */
  switch (
    transit.natalHouse
  ) {
    case 1:
      categories.add(
        "energy",
      );
      break;

    case 2:
      categories.add(
        "money",
      );
      break;

    case 3:
      categories.add(
        "communication",
      );
      break;

    case 5:
      categories.add(
        "love",
      );
      break;

    case 6:
      categories.add(
        "wellbeing",
      );
      categories.add(
        "career",
      );
      break;

    case 7:
      categories.add(
        "love",
      );
      break;

    case 8:
      categories.add(
        "money",
      );
      categories.add(
        "love",
      );
      break;

    case 9:
      categories.add(
        "general",
      );
      break;

    case 10:
      categories.add(
        "career",
      );
      break;

    case 11:
      categories.add(
        "career",
      );
      categories.add(
        "communication",
      );
      break;

    case 12:
      categories.add(
        "wellbeing",
      );
      break;
  }

  return Array.from(
    categories,
  );
}

/*
|--------------------------------------------------------------------------
| Ajout des transits aux signaux quotidiens
|--------------------------------------------------------------------------
*/

function addTransitSignals({
  signals,
  transit,
  startDate,
  endDate,
}: {
  signals: Map<
    string,
    DailyPeriodSignal
  >;

  transit: MonthlyTransit;

  startDate: string;
  endDate: string;
}): void {
  const categories =
    getTransitCategories(
      transit,
    );

  const scores =
    calculateTransitScores(
      transit,
    );

  const influencedDates =
    getInfluencedDates(
      transit.date,
    );

  for (
    const influenced
    of influencedDates
  ) {
    if (
      influenced.date <
        startDate ||
      influenced.date >
        endDate
    ) {
      continue;
    }

    for (
      const category
      of categories
    ) {
      const signal =
        getOrCreateSignal({
          signals,

          date:
            influenced.date,

          category,
        });

      signal.favorableScore +=
        scores.favorable *
        influenced.multiplier;

      signal.delicateScore +=
        scores.delicate *
        influenced.multiplier;

      signal.relatedPlanets.add(
        transit.transitPlanet,
      );

      if (
        transit.natalPlanet
      ) {
        signal.relatedPlanets.add(
          transit.natalPlanet,
        );
      }
    }
  }
}

/*
|--------------------------------------------------------------------------
| Score net quotidien
|--------------------------------------------------------------------------
*/

function getNetSignalScore({
  signal,
  tone,
}: {
  signal:
    DailyPeriodSignal;

  tone:
    PeriodTone;
}): number {
  if (
    tone ===
    "favorable"
  ) {
    return (
      signal.favorableScore -
      signal.delicateScore *
        0.55
    );
  }

  return (
    signal.delicateScore -
    signal.favorableScore *
      0.55
  );
}

/*
|--------------------------------------------------------------------------
| Création des périodes continues
|--------------------------------------------------------------------------
*/

function buildPeriodCandidates({
  signals,
  dates,
  tone,
}: {
  signals:
    DailyPeriodSignal[];

  dates: string[];

  tone:
    PeriodTone;
}): PeriodCandidate[] {
  const candidates:
    PeriodCandidate[] = [];

  const categories:
    MonthlyPeriodCategory[] = [
      "love",
      "career",
      "money",
      "communication",
      "energy",
      "wellbeing",
      "general",
    ];

  for (
    const category
    of categories
  ) {
    const categorySignals =
      new Map<
        string,
        DailyPeriodSignal
      >();

    for (
      const signal
      of signals
    ) {
      if (
        signal.category ===
        category
      ) {
        categorySignals.set(
          signal.date,
          signal,
        );
      }
    }

    let currentDates:
      string[] = [];

    let currentScores:
      number[] = [];

    const relatedPlanets =
      new Set<
        MonthlyPlanetName
      >();

    const relatedAspectIds =
      new Set<string>();

    const closeCurrentPeriod =
      (): void => {
        if (
          currentDates.length ===
          0
        ) {
          return;
        }

        const averageScore =
          currentScores.reduce(
            (
              total,
              value,
            ) =>
              total + value,
            0,
          ) /
          currentScores.length;

        const maximumScore =
          Math.max(
            ...currentScores,
          );

        const finalScore =
          averageScore * 0.65 +
          maximumScore * 0.35;

        if (
          finalScore >= 3.5
        ) {
          candidates.push({
            tone,
            category,

            startDate:
              currentDates[0],

            endDate:
              currentDates[
                currentDates.length -
                  1
              ],

            score:
              roundValue(
                finalScore,
              ),

            relatedPlanets:
              Array.from(
                relatedPlanets,
              ),

            relatedAspectIds:
              Array.from(
                relatedAspectIds,
              ),
          });
        }

        currentDates = [];
        currentScores = [];

        relatedPlanets.clear();
        relatedAspectIds.clear();
      };

    for (
      const date
      of dates
    ) {
      const signal =
        categorySignals.get(
          date,
        );

      const score =
        signal
          ? getNetSignalScore({
              signal,
              tone,
            })
          : 0;

      const isActive =
        score >= 3.5;

      if (!isActive) {
        closeCurrentPeriod();
        continue;
      }

      currentDates.push(
        date,
      );

      currentScores.push(
        score,
      );

      if (signal) {
        for (
          const planet
          of signal.relatedPlanets
        ) {
          relatedPlanets.add(
            planet,
          );
        }

        for (
          const aspectId
          of signal.relatedAspectIds
        ) {
          relatedAspectIds.add(
            aspectId,
          );
        }
      }
    }

    closeCurrentPeriod();
  }

  return candidates;
}

/*
|--------------------------------------------------------------------------
| Fusion des périodes très proches
|--------------------------------------------------------------------------
*/

function mergeClosePeriods(
  periods:
    PeriodCandidate[],
): PeriodCandidate[] {
  const sorted =
    [...periods].sort(
      (
        first,
        second,
      ) => {
        const categoryDifference =
          first.category.localeCompare(
            second.category,
          );

        if (
          categoryDifference !== 0
        ) {
          return categoryDifference;
        }

        return first.startDate.localeCompare(
          second.startDate,
        );
      },
    );

  const merged:
    PeriodCandidate[] = [];

  for (
    const period
    of sorted
  ) {
    const previous =
      merged[
        merged.length - 1
      ];

    if (
      !previous ||
      previous.category !==
        period.category ||
      previous.tone !==
        period.tone
    ) {
      merged.push({
        ...period,

        relatedPlanets: [
          ...period.relatedPlanets,
        ],

        relatedAspectIds: [
          ...period.relatedAspectIds,
        ],
      });

      continue;
    }

    const gap =
      getDayDifference(
        previous.endDate,
        period.startDate,
      );

    if (
      gap > 2
    ) {
      merged.push({
        ...period,

        relatedPlanets: [
          ...period.relatedPlanets,
        ],

        relatedAspectIds: [
          ...period.relatedAspectIds,
        ],
      });

      continue;
    }

    previous.endDate =
      period.endDate;

    previous.score =
      roundValue(
        (
          previous.score +
          period.score
        ) / 2,
      );

    previous.relatedPlanets =
      Array.from(
        new Set([
          ...previous.relatedPlanets,
          ...period.relatedPlanets,
        ]),
      );

    previous.relatedAspectIds =
      Array.from(
        new Set([
          ...previous.relatedAspectIds,
          ...period.relatedAspectIds,
        ]),
      );
  }

  return merged;
}

/*
|--------------------------------------------------------------------------
| Niveau d’intensité
|--------------------------------------------------------------------------
*/

function getPeriodStrength(
  score: number,
): MonthlyPeriodStrength {
  if (
    score >= 15
  ) {
    return "very-strong";
  }

  if (
    score >= 8
  ) {
    return "strong";
  }

  return "moderate";
}

/*
|--------------------------------------------------------------------------
| Normalisation du score
|--------------------------------------------------------------------------
*/

function normalizePeriodScores(
  periods:
    PeriodCandidate[],
): {
  period:
    PeriodCandidate;

  normalizedScore: number;
}[] {
  const maximumScore =
    Math.max(
      1,
      ...periods.map(
        (period) =>
          period.score,
      ),
    );

  return periods.map(
    (period) => ({
      period,

      normalizedScore:
        clamp(
          Math.round(
            (
              period.score /
              maximumScore
            ) * 100,
          ),
          1,
          100,
        ),
    }),
  );
}

/*
|--------------------------------------------------------------------------
| Titres
|--------------------------------------------------------------------------
*/

function getCategoryLabel(
  category:
    MonthlyPeriodCategory,
): string {
  switch (category) {
    case "love":
      return "Amour et relations";

    case "career":
      return "Travail et carrière";

    case "money":
      return "Finances";

    case "communication":
      return "Communication";

    case "energy":
      return "Énergie et action";

    case "wellbeing":
      return "Bien-être";

    case "general":
      return "Évolution générale";
  }
}

function buildPeriodTitle({
  tone,
  category,
}: {
  tone:
    PeriodTone;

  category:
    MonthlyPeriodCategory;
}): string {
  const categoryLabel =
    getCategoryLabel(
      category,
    );

  if (
    tone ===
    "favorable"
  ) {
    return `Période favorable — ${categoryLabel}`;
  }

  return `Période délicate — ${categoryLabel}`;
}

/*
|--------------------------------------------------------------------------
| Descriptions favorables
|--------------------------------------------------------------------------
*/

function buildFavorableDescription(
  category:
    MonthlyPeriodCategory,
): string {
  switch (category) {
    case "love":
      return "Cette période favorise les rapprochements, les échanges sincères et une meilleure compréhension des besoins affectifs. Les relations peuvent évoluer plus naturellement lorsque les intentions sont clairement exprimées.";

    case "career":
      return "Cette période soutient les initiatives professionnelles, les décisions utiles et les démarches qui permettent de faire avancer un objectif. Les efforts peuvent produire des résultats plus visibles.";

    case "money":
      return "Cette période peut faciliter les décisions financières, les négociations ou la recherche de solutions concrètes. Elle favorise une gestion plus claire des ressources disponibles.";

    case "communication":
      return "Les échanges, les discussions et les démarches administratives bénéficient d’une énergie plus fluide. Il devient plus facile d’exprimer une idée ou de clarifier une situation.";

    case "energy":
      return "L’énergie disponible permet d’agir avec davantage de motivation et de confiance. Cette période convient particulièrement aux initiatives et aux projets qui demandent de l’élan.";

    case "wellbeing":
      return "Cette période soutient le repos, l’équilibre émotionnel et l’écoute des besoins personnels. Elle peut aider à retrouver un rythme plus harmonieux.";

    case "general":
      return "Plusieurs influences constructives se rejoignent durant cette période. Les événements peuvent progresser plus facilement lorsque les occasions sont accompagnées d’actions concrètes.";
  }
}

/*
|--------------------------------------------------------------------------
| Conseils favorables
|--------------------------------------------------------------------------
*/

function buildFavorableAdvice(
  category:
    MonthlyPeriodCategory,
): string {
  switch (category) {
    case "love":
      return "Exprimez clairement vos sentiments et profitez de cette ouverture pour renforcer les liens importants.";

    case "career":
      return "Présentez vos idées, avancez vos démarches et concentrez vos efforts sur une priorité professionnelle.";

    case "money":
      return "Prenez les décisions utiles avec réalisme et vérifiez les détails avant de confirmer un engagement.";

    case "communication":
      return "Utilisez cette période pour discuter, négocier, écrire ou clarifier ce qui demeurait imprécis.";

    case "energy":
      return "Canalisez votre motivation vers un objectif précis afin de transformer l’élan en résultat concret.";

    case "wellbeing":
      return "Accordez du temps aux habitudes qui restaurent votre énergie physique et émotionnelle.";

    case "general":
      return "Profitez des ouvertures présentes sans attendre que les événements se développent entièrement seuls.";
  }
}

/*
|--------------------------------------------------------------------------
| Descriptions délicates
|--------------------------------------------------------------------------
*/

function buildDelicateDescription(
  category:
    MonthlyPeriodCategory,
): string {
  switch (category) {
    case "love":
      return "Cette période peut rendre les émotions ou les attentes relationnelles plus sensibles. Des incompréhensions peuvent apparaître lorsque les besoins ne sont pas exprimés clairement.";

    case "career":
      return "Cette période peut apporter des ralentissements, des responsabilités supplémentaires ou des divergences professionnelles. Les résultats demandent davantage de patience et de méthode.";

    case "money":
      return "Cette période demande davantage de prudence dans les dépenses, les engagements et les décisions financières. Certains détails peuvent nécessiter une vérification supplémentaire.";

    case "communication":
      return "Les échanges peuvent être plus tendus, imprécis ou facilement mal interprétés. Une réponse trop rapide risque d’aggraver une situation qui pourrait être clarifiée calmement.";

    case "energy":
      return "L’énergie peut devenir irrégulière, excessive ou difficile à canaliser. La précipitation augmente le risque de fatigue, de conflit ou de décision impulsive.";

    case "wellbeing":
      return "Cette période peut accentuer la fatigue, la sensibilité ou le besoin de recul. Le corps et les émotions demandent davantage d’attention.";

    case "general":
      return "Plusieurs influences demandent des ajustements durant cette période. Les tensions ne sont pas nécessairement négatives, mais elles signalent ce qui doit être revu ou réorganisé.";
  }
}

/*
|--------------------------------------------------------------------------
| Conseils délicats
|--------------------------------------------------------------------------
*/

function buildDelicateAdvice(
  category:
    MonthlyPeriodCategory,
): string {
  switch (category) {
    case "love":
      return "Évitez les conclusions rapides et privilégiez une discussion honnête lorsque les émotions sont redescendues.";

    case "career":
      return "Revérifiez les détails, respectez les étapes nécessaires et ne forcez pas une décision qui manque encore de clarté.";

    case "money":
      return "Limitez les décisions impulsives et prenez le temps de comparer les options avant de vous engager.";

    case "communication":
      return "Relisez les messages importants et demandez une clarification plutôt que de présumer des intentions de l’autre personne.";

    case "energy":
      return "Ralentissez avant d’atteindre l’épuisement et évitez de disperser vos efforts dans trop de directions.";

    case "wellbeing":
      return "Respectez vos limites, réduisez les surcharges inutiles et donnez davantage de place au repos.";

    case "general":
      return "Observez ce qui résiste avant d’agir et utilisez cette période pour ajuster votre stratégie.";
  }
}

/*
|--------------------------------------------------------------------------
| Conversion vers MonthlyAstrologyPeriodResult
|--------------------------------------------------------------------------
*/

function convertPeriod({
  period,
  normalizedScore,
}: {
  period:
    PeriodCandidate;

  normalizedScore: number;
}): MonthlyAstrologyPeriodResult {
  return {
    id:
      `${period.tone}-` +
      `${cleanIdPart(
        period.category,
      )}-` +
      `${formatDateId(
        period.startDate,
      )}-` +
      `${formatDateId(
        period.endDate,
      )}`,

    startDate:
      period.startDate,

    endDate:
      period.endDate,

    category:
      period.category,

    strength:
      getPeriodStrength(
        period.score,
      ),

    score:
      normalizedScore,

    title:
      buildPeriodTitle({
        tone:
          period.tone,

        category:
          period.category,
      }),

    description:
      period.tone ===
      "favorable"
        ? buildFavorableDescription(
            period.category,
          )
        : buildDelicateDescription(
            period.category,
          ),

    advice:
      period.tone ===
      "favorable"
        ? buildFavorableAdvice(
            period.category,
          )
        : buildDelicateAdvice(
            period.category,
          ),

    relatedPlanets:
      period.relatedPlanets,

    relatedAspectIds:
      period.relatedAspectIds,
  };
}

/*
|--------------------------------------------------------------------------
| Limitation et tri
|--------------------------------------------------------------------------
*/

function selectBestPeriods(
  periods:
    MonthlyAstrologyPeriodResult[],

  limit: number,
): MonthlyAstrologyPeriodResult[] {
  return [...periods]
    .sort(
      (
        first,
        second,
      ) => {
        const scoreDifference =
          second.score -
          first.score;

        if (
          scoreDifference !== 0
        ) {
          return scoreDifference;
        }

        return first.startDate.localeCompare(
          second.startDate,
        );
      },
    )
    .slice(
      0,
      Math.max(
        1,
        limit,
      ),
    )
    .sort(
      (
        first,
        second,
      ) =>
        first.startDate.localeCompare(
          second.startDate,
        ),
    );
}

/*
|--------------------------------------------------------------------------
| Fonction principale
|--------------------------------------------------------------------------
*/

export function calculateMonthlyPeriods({
  aspects,
  transits,
  startDate,
  endDate,
  favorableLimit = 6,
  delicateLimit = 6,
}: {
  aspects: MonthlyAspect[];
  transits: MonthlyTransit[];

  startDate: string;
  endDate: string;

  favorableLimit?: number;
  delicateLimit?: number;
}): CalculateMonthlyPeriodsResult {
  const dates =
    createDateRange({
      startDate,
      endDate,
    });

  if (
    dates.length ===
    0
  ) {
    return {
      favorablePeriods: [],
      delicatePeriods: [],
    };
  }

  const signals =
    new Map<
      string,
      DailyPeriodSignal
    >();

  for (
    const aspect
    of aspects
  ) {
    addAspectSignals({
      signals,
      aspect,
      startDate,
      endDate,
    });
  }

  for (
    const transit
    of transits
  ) {
    addTransitSignals({
      signals,
      transit,
      startDate,
      endDate,
    });
  }

  const signalList =
    Array.from(
      signals.values(),
    );

  const favorableCandidates =
    mergeClosePeriods(
      buildPeriodCandidates({
        signals:
          signalList,

        dates,

        tone:
          "favorable",
      }),
    );

  const delicateCandidates =
    mergeClosePeriods(
      buildPeriodCandidates({
        signals:
          signalList,

        dates,

        tone:
          "delicate",
      }),
    );

  const favorablePeriods =
    normalizePeriodScores(
      favorableCandidates,
    ).map(
      ({
        period,
        normalizedScore,
      }) =>
        convertPeriod({
          period,
          normalizedScore,
        }),
    );

  const delicatePeriods =
    normalizePeriodScores(
      delicateCandidates,
    ).map(
      ({
        period,
        normalizedScore,
      }) =>
        convertPeriod({
          period,
          normalizedScore,
        }),
    );

  return {
    favorablePeriods:
      selectBestPeriods(
        favorablePeriods,
        favorableLimit,
      ),

    delicatePeriods:
      selectBestPeriods(
        delicatePeriods,
        delicateLimit,
      ),
  };
}
