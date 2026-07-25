import type {
  MonthlyAspect,
  MonthlyAspectType,
  MonthlyDominantPlanet,
  MonthlyPlanetName,
  MonthlyTransit,
} from "./types";

/*
|--------------------------------------------------------------------------
| Configuration des planètes
|--------------------------------------------------------------------------
*/

type PlanetDefinition = {
  planet: MonthlyPlanetName;
  baseWeight: number;
  themes: string[];
};

const PLANET_DEFINITIONS:
  PlanetDefinition[] = [
    {
      planet: "Soleil",
      baseWeight: 8,
      themes: [
        "identité",
        "affirmation",
        "vitalité",
        "direction personnelle",
      ],
    },
    {
      planet: "Lune",
      baseWeight: 6,
      themes: [
        "émotions",
        "intuition",
        "sécurité intérieure",
        "besoins personnels",
      ],
    },
    {
      planet: "Mercure",
      baseWeight: 6,
      themes: [
        "communication",
        "réflexion",
        "échanges",
        "décisions",
      ],
    },
    {
      planet: "Vénus",
      baseWeight: 7,
      themes: [
        "relations",
        "attirance",
        "harmonie",
        "valeurs",
      ],
    },
    {
      planet: "Mars",
      baseWeight: 8,
      themes: [
        "action",
        "désir",
        "courage",
        "initiative",
      ],
    },
    {
      planet: "Jupiter",
      baseWeight: 9,
      themes: [
        "expansion",
        "occasions",
        "confiance",
        "évolution",
      ],
    },
    {
      planet: "Saturne",
      baseWeight: 10,
      themes: [
        "responsabilités",
        "structure",
        "limites",
        "maturité",
      ],
    },
    {
      planet: "Uranus",
      baseWeight: 9,
      themes: [
        "changements",
        "liberté",
        "surprises",
        "renouveau",
      ],
    },
    {
      planet: "Neptune",
      baseWeight: 9,
      themes: [
        "intuition",
        "inspiration",
        "sensibilité",
        "idéaux",
      ],
    },
    {
      planet: "Pluton",
      baseWeight: 10,
      themes: [
        "transformation",
        "vérité",
        "pouvoir intérieur",
        "renaissance",
      ],
    },
    {
      planet: "Chiron",
      baseWeight: 7,
      themes: [
        "guérison",
        "vulnérabilité",
        "compréhension",
        "réparation",
      ],
    },
    {
      planet: "Nœud Nord",
      baseWeight: 8,
      themes: [
        "évolution",
        "direction",
        "apprentissage",
        "destin",
      ],
    },
    {
      planet: "Nœud Sud",
      baseWeight: 6,
      themes: [
        "passé",
        "habitudes",
        "détachement",
        "expérience acquise",
      ],
    },
  ];

const PLANET_MAP =
  new Map<
    MonthlyPlanetName,
    PlanetDefinition
  >(
    PLANET_DEFINITIONS.map(
      (definition) => [
        definition.planet,
        definition,
      ],
    ),
  );

/*
|--------------------------------------------------------------------------
| Poids des aspects
|--------------------------------------------------------------------------
*/

const ASPECT_WEIGHT:
  Record<MonthlyAspectType, number> = {
    conjunction: 12,
    sextile: 6,
    square: 10,
    trine: 8,
    opposition: 11,
  };

const CHALLENGING_ASPECTS =
  new Set<MonthlyAspectType>([
    "square",
    "opposition",
  ]);

const SUPPORTIVE_ASPECTS =
  new Set<MonthlyAspectType>([
    "sextile",
    "trine",
  ]);

/*
|--------------------------------------------------------------------------
| Structure interne
|--------------------------------------------------------------------------
*/

type PlanetScore = {
  planet: MonthlyPlanetName;

  score: number;

  aspectCount: number;
  transitCount: number;

  supportiveCount: number;
  challengingCount: number;
  conjunctionCount: number;

  exactnessScore: number;

  strongestDate?: string;
  strongestEventScore: number;
};

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

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

function createPlanetScore(
  planet: MonthlyPlanetName,
): PlanetScore {
  const definition =
    PLANET_MAP.get(planet);

  return {
    planet,

    score:
      definition?.baseWeight ??
      5,

    aspectCount: 0,
    transitCount: 0,

    supportiveCount: 0,
    challengingCount: 0,
    conjunctionCount: 0,

    exactnessScore: 0,

    strongestEventScore: 0,
  };
}

function getOrCreateScore(
  scores: Map<
    MonthlyPlanetName,
    PlanetScore
  >,
  planet: MonthlyPlanetName,
): PlanetScore {
  const existing =
    scores.get(planet);

  if (existing) {
    return existing;
  }

  const created =
    createPlanetScore(
      planet,
    );

  scores.set(
    planet,
    created,
  );

  return created;
}

function registerStrongestDate({
  score,
  date,
  eventScore,
}: {
  score: PlanetScore;
  date: string;
  eventScore: number;
}): void {
  if (
    eventScore >
    score.strongestEventScore
  ) {
    score.strongestEventScore =
      eventScore;

    score.strongestDate =
      date;
  }
}

/*
|--------------------------------------------------------------------------
| Contribution des aspects célestes
|--------------------------------------------------------------------------
*/

function addAspectContribution({
  scores,
  aspect,
}: {
  scores: Map<
    MonthlyPlanetName,
    PlanetScore
  >;
  aspect: MonthlyAspect;
}): void {
  const aspectWeight =
    ASPECT_WEIGHT[
      aspect.type
    ] ?? 5;

  const importance =
    Number.isFinite(
      aspect.importance,
    )
      ? aspect.importance
      : 50;

  const orb =
    Number.isFinite(
      aspect.orb,
    )
      ? aspect.orb
      : 5;

  const precisionBonus =
    clamp(
      8 - orb,
      0,
      8,
    );

  const eventScore =
    aspectWeight +
    importance / 10 +
    precisionBonus;

  const planets = [
    aspect.planet1,
    aspect.planet2,
  ];

  for (const planet of planets) {
    const score =
      getOrCreateScore(
        scores,
        planet,
      );

    score.aspectCount += 1;

    score.score +=
      eventScore;

    score.exactnessScore +=
      precisionBonus;

    if (
      SUPPORTIVE_ASPECTS.has(
        aspect.type,
      )
    ) {
      score.supportiveCount += 1;
    }

    if (
      CHALLENGING_ASPECTS.has(
        aspect.type,
      )
    ) {
      score.challengingCount += 1;
    }

    if (
      aspect.type ===
      "conjunction"
    ) {
      score.conjunctionCount += 1;
    }

    registerStrongestDate({
      score,
      date: aspect.date,
      eventScore,
    });
  }
}

/*
|--------------------------------------------------------------------------
| Contribution des transits personnalisés
|--------------------------------------------------------------------------
*/

function addTransitContribution({
  scores,
  transit,
}: {
  scores: Map<
    MonthlyPlanetName,
    PlanetScore
  >;
  transit: MonthlyTransit;
}): void {
  const transitPlanet =
    transit.transitPlanet;

  if (!transitPlanet) {
    return;
  }

  const score =
    getOrCreateScore(
      scores,
      transitPlanet,
    );

  const importance =
    Number.isFinite(
      transit.importance,
    )
      ? transit.importance
      : 50;

  const orb =
    typeof transit.orb ===
        "number" &&
      Number.isFinite(
        transit.orb,
      )
      ? transit.orb
      : 5;

  const precisionBonus =
    clamp(
      8 - orb,
      0,
      8,
    );

  const aspectWeight =
    transit.aspect
      ? ASPECT_WEIGHT[
          transit.aspect
        ] ?? 5
      : 5;

  const eventScore =
    aspectWeight +
    importance / 8 +
    precisionBonus;

  /*
   * Les transits personnalisés comptent
   * davantage que les aspects généraux.
   */
  score.score +=
    eventScore * 1.35;

  score.transitCount += 1;

  score.exactnessScore +=
    precisionBonus;

  if (
    transit.aspect &&
    SUPPORTIVE_ASPECTS.has(
      transit.aspect,
    )
  ) {
    score.supportiveCount += 1;
  }

  if (
    transit.aspect &&
    CHALLENGING_ASPECTS.has(
      transit.aspect,
    )
  ) {
    score.challengingCount += 1;
  }

  if (
    transit.aspect ===
    "conjunction"
  ) {
    score.conjunctionCount += 1;
  }

  registerStrongestDate({
    score,
    date: transit.date,
    eventScore:
      eventScore * 1.35,
  });
}

/*
|--------------------------------------------------------------------------
| Niveau d’influence
|--------------------------------------------------------------------------
*/

function getInfluenceLevel(
  normalizedScore: number,
): string {
  if (
    normalizedScore >= 85
  ) {
    return "Très dominante";
  }

  if (
    normalizedScore >= 70
  ) {
    return "Dominante";
  }

  if (
    normalizedScore >= 55
  ) {
    return "Marquée";
  }

  if (
    normalizedScore >= 40
  ) {
    return "Présente";
  }

  return "Secondaire";
}

/*
|--------------------------------------------------------------------------
| Tonalité de la planète
|--------------------------------------------------------------------------
*/

function getPlanetTone(
  score: PlanetScore,
): string {
  if (
    score.challengingCount >
    score.supportiveCount + 1
  ) {
    return "transformatrice";
  }

  if (
    score.supportiveCount >
    score.challengingCount + 1
  ) {
    return "favorable";
  }

  if (
    score.conjunctionCount >= 2
  ) {
    return "intense";
  }

  return "équilibrée";
}

/*
|--------------------------------------------------------------------------
| Interprétation
|--------------------------------------------------------------------------
*/

function buildInterpretation(
  score: PlanetScore,
): string {
  const definition =
    PLANET_MAP.get(
      score.planet,
    );

  const themes =
    definition?.themes ??
    [
      "évolution",
      "prise de conscience",
    ];

  const tone =
    getPlanetTone(
      score,
    );

  const primaryTheme =
    themes[0];

  const secondaryTheme =
    themes[1] ??
    themes[0];

  if (
    tone === "favorable"
  ) {
    return (
      `${score.planet} exerce une influence favorable sur le mois. ` +
      `Elle soutient particulièrement les thèmes de ${primaryTheme} et de ${secondaryTheme}. ` +
      "Les occasions peuvent se présenter plus naturellement, à condition de rester attentive aux gestes concrets qui permettent de les saisir."
    );
  }

  if (
    tone === "transformatrice"
  ) {
    return (
      `${score.planet} occupe une place transformatrice durant le mois. ` +
      `Elle met en mouvement les thèmes de ${primaryTheme} et de ${secondaryTheme}. ` +
      "Certaines tensions peuvent demander une adaptation, mais elles servent aussi à révéler ce qui doit évoluer."
    );
  }

  if (
    tone === "intense"
  ) {
    return (
      `${score.planet} concentre une énergie particulièrement intense. ` +
      `Les thèmes de ${primaryTheme} et de ${secondaryTheme} prennent davantage de place. ` +
      "Cette influence gagne à être dirigée vers un objectif précis afin d’éviter la dispersion."
    );
  }

  return (
    `${score.planet} accompagne plusieurs mouvements importants du mois. ` +
    `Son influence touche surtout les thèmes de ${primaryTheme} et de ${secondaryTheme}. ` +
    "Elle invite à maintenir un équilibre entre les occasions de progression et les ajustements nécessaires."
  );
}

/*
|--------------------------------------------------------------------------
| Conseil
|--------------------------------------------------------------------------
*/

function buildAdvice(
  score: PlanetScore,
): string {
  const tone =
    getPlanetTone(
      score,
    );

  if (
    tone === "favorable"
  ) {
    return "Profitez des ouvertures présentes, mais transformez-les en décisions et en actions concrètes.";
  }

  if (
    tone === "transformatrice"
  ) {
    return "Ne résistez pas automatiquement au changement : observez ce que cette influence cherche à réorganiser.";
  }

  if (
    tone === "intense"
  ) {
    return "Canalisez votre énergie vers une priorité claire et évitez de vouloir tout régler en même temps.";
  }

  return "Avancez avec constance et ajustez votre rythme selon les événements plutôt que de forcer les résultats.";
}

/*
|--------------------------------------------------------------------------
| Conversion vers le résultat final
|--------------------------------------------------------------------------
*/

function convertToDominantPlanet({
  score,
  maximumScore,
}: {
  score: PlanetScore;
  maximumScore: number;
}): MonthlyDominantPlanet {
  const normalizedScore =
    maximumScore > 0
      ? Math.round(
          (
            score.score /
            maximumScore
          ) * 100,
        )
      : 0;

  const definition =
    PLANET_MAP.get(
      score.planet,
    );

  return {
    planet: score.planet,

    score:
      clamp(
        normalizedScore,
        1,
        100,
      ),

    influenceLevel:
      getInfluenceLevel(
        normalizedScore,
      ),

    tone:
      getPlanetTone(
        score,
      ),

    themes:
      definition?.themes ??
      [],

    aspectCount:
      score.aspectCount,

    transitCount:
      score.transitCount,

    supportiveCount:
      score.supportiveCount,

    challengingCount:
      score.challengingCount,

    strongestDate:
      score.strongestDate,

    interpretation:
      buildInterpretation(
        score,
      ),

    advice:
      buildAdvice(
        score,
      ),
  };
}

/*
|--------------------------------------------------------------------------
| Fonction principale
|--------------------------------------------------------------------------
*/

export function calculateMonthlyDominants({
  aspects,
  transits,
  limit = 5,
}: {
  aspects: MonthlyAspect[];
  transits: MonthlyTransit[];
  limit?: number;
}): MonthlyDominantPlanet[] {
  const scores =
    new Map<
      MonthlyPlanetName,
      PlanetScore
    >();

  for (
    const definition
    of PLANET_DEFINITIONS
  ) {
    scores.set(
      definition.planet,
      createPlanetScore(
        definition.planet,
      ),
    );
  }

  for (const aspect of aspects) {
    addAspectContribution({
      scores,
      aspect,
    });
  }

  for (const transit of transits) {
    addTransitContribution({
      scores,
      transit,
    });
  }

  const sortedScores =
    Array.from(
      scores.values(),
    ).sort(
      (
        first,
        second,
      ) =>
        second.score -
        first.score,
    );

  const maximumScore =
    sortedScores[0]?.score ??
    1;

  return sortedScores
    .slice(
      0,
      Math.max(
        1,
        limit,
      ),
    )
    .map(
      (score) =>
        convertToDominantPlanet({
          score,
          maximumScore,
        }),
    );
}
