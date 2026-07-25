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
  planet:
    MonthlyPlanetName;

  baseWeight: number;

  themes: string[];
};

const PLANET_DEFINITIONS:
  PlanetDefinition[] = [
    {
      planet:
        "Soleil",

      baseWeight: 8,

      themes: [
        "l’identité",
        "l’affirmation",
        "la vitalité",
        "la direction personnelle",
      ],
    },

    {
      planet:
        "Lune",

      baseWeight: 6,

      themes: [
        "les émotions",
        "l’intuition",
        "la sécurité intérieure",
        "les besoins personnels",
      ],
    },

    {
      planet:
        "Mercure",

      baseWeight: 6,

      themes: [
        "la communication",
        "la réflexion",
        "les échanges",
        "les décisions",
      ],
    },

    {
      planet:
        "Vénus",

      baseWeight: 7,

      themes: [
        "les relations",
        "l’attirance",
        "l’harmonie",
        "les valeurs",
      ],
    },

    {
      planet:
        "Mars",

      baseWeight: 8,

      themes: [
        "l’action",
        "le désir",
        "le courage",
        "l’initiative",
      ],
    },

    {
      planet:
        "Jupiter",

      baseWeight: 9,

      themes: [
        "l’expansion",
        "les occasions",
        "la confiance",
        "l’évolution",
      ],
    },

    {
      planet:
        "Saturne",

      baseWeight: 10,

      themes: [
        "les responsabilités",
        "la structure",
        "les limites",
        "la maturité",
      ],
    },

    {
      planet:
        "Uranus",

      baseWeight: 9,

      themes: [
        "les changements",
        "la liberté",
        "les surprises",
        "le renouveau",
      ],
    },

    {
      planet:
        "Neptune",

      baseWeight: 9,

      themes: [
        "l’intuition",
        "l’inspiration",
        "la sensibilité",
        "les idéaux",
      ],
    },

    {
      planet:
        "Pluton",

      baseWeight: 10,

      themes: [
        "la transformation",
        "la vérité",
        "le pouvoir intérieur",
        "la renaissance",
      ],
    },

    {
      planet:
        "Chiron",

      baseWeight: 7,

      themes: [
        "la guérison",
        "la vulnérabilité",
        "la compréhension",
        "la réparation",
      ],
    },

    {
      planet:
        "Nœud Nord",

      baseWeight: 8,

      themes: [
        "l’évolution",
        "la direction",
        "l’apprentissage",
        "le chemin personnel",
      ],
    },

    {
      planet:
        "Nœud Sud",

      baseWeight: 6,

      themes: [
        "le passé",
        "les habitudes",
        "le détachement",
        "l’expérience acquise",
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
  Record<
    MonthlyAspectType,
    number
  > = {
    conjunction: 12,
    sextile: 6,
    square: 10,
    trine: 8,
    opposition: 11,
  };

const SUPPORTIVE_ASPECTS =
  new Set<
    MonthlyAspectType
  >([
    "sextile",
    "trine",
  ]);

const CHALLENGING_ASPECTS =
  new Set<
    MonthlyAspectType
  >([
    "square",
    "opposition",
  ]);

/*
|--------------------------------------------------------------------------
| Structure interne du score
|--------------------------------------------------------------------------
*/

type PlanetScore = {
  planet:
    MonthlyPlanetName;

  rawScore: number;

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

function createPlanetScore(
  planet:
    MonthlyPlanetName,
): PlanetScore {
  const definition =
    PLANET_MAP.get(
      planet,
    );

  return {
    planet,

    rawScore:
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

function getOrCreateScore({
  scores,
  planet,
}: {
  scores: Map<
    MonthlyPlanetName,
    PlanetScore
  >;

  planet:
    MonthlyPlanetName;
}): PlanetScore {
  const existing =
    scores.get(
      planet,
    );

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

function registerStrongestEvent({
  score,
  date,
  eventScore,
}: {
  score:
    PlanetScore;

  date: string;

  eventScore: number;
}): void {
  if (
    eventScore <=
    score.strongestEventScore
  ) {
    return;
  }

  score.strongestEventScore =
    eventScore;

  score.strongestDate =
    date;
}

/*
|--------------------------------------------------------------------------
| Contribution des aspects généraux
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

  aspect:
    MonthlyAspect;
}): void {
  const aspectWeight =
    ASPECT_WEIGHT[
      aspect.type
    ] ?? 5;

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

  const planets:
    MonthlyPlanetName[] = [
      aspect.planet1,
      aspect.planet2,
    ];

  for (
    const planet
    of planets
  ) {
    const score =
      getOrCreateScore({
        scores,
        planet,
      });

    score.rawScore +=
      eventScore;

    score.aspectCount += 1;

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

    registerStrongestEvent({
      score,
      date:
        aspect.date,
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

  transit:
    MonthlyTransit;
}): void {
  const score =
    getOrCreateScore({
      scores,

      planet:
        transit.transitPlanet,
    });

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
    (
      aspectWeight +
      importance / 8 +
      precisionBonus
    ) * 1.35;

  score.rawScore +=
    eventScore;

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

  registerStrongestEvent({
    score,

    date:
      transit.date,

    eventScore,
  });

  /*
   * Une planète natale impliquée reçoit également
   * une contribution plus légère.
   */
  if (
    transit.natalPlanet
  ) {
    const natalScore =
      getOrCreateScore({
        scores,

        planet:
          transit.natalPlanet,
      });

    const natalContribution =
      eventScore * 0.45;

    natalScore.rawScore +=
      natalContribution;

    natalScore.transitCount += 1;

    if (
      transit.aspect &&
      SUPPORTIVE_ASPECTS.has(
        transit.aspect,
      )
    ) {
      natalScore.supportiveCount += 1;
    }

    if (
      transit.aspect &&
      CHALLENGING_ASPECTS.has(
        transit.aspect,
      )
    ) {
      natalScore.challengingCount += 1;
    }

    if (
      transit.aspect ===
      "conjunction"
    ) {
      natalScore.conjunctionCount += 1;
    }

    registerStrongestEvent({
      score:
        natalScore,

      date:
        transit.date,

      eventScore:
        natalContribution,
    });
  }
}

/*
|--------------------------------------------------------------------------
| Tonalité dominante
|--------------------------------------------------------------------------
*/

type DominantTone =
  | "favorable"
  | "challenging"
  | "intense"
  | "balanced";

function getDominantTone(
  score:
    PlanetScore,
): DominantTone {
  if (
    score.challengingCount >
    score.supportiveCount + 1
  ) {
    return "challenging";
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

  return "balanced";
}

/*
|--------------------------------------------------------------------------
| Raisons expliquant la dominance
|--------------------------------------------------------------------------
*/

function buildReasons(
  score:
    PlanetScore,
): string[] {
  const reasons:
    string[] = [];

  if (
    score.transitCount > 0
  ) {
    reasons.push(
      `${score.transitCount} transit${
        score.transitCount > 1
          ? "s"
          : ""
      } personnalisé${
        score.transitCount > 1
          ? "s"
          : ""
      } implique${
        score.transitCount > 1
          ? "nt"
          : ""
      } cette planète.`,
    );
  }

  if (
    score.aspectCount > 0
  ) {
    reasons.push(
      `${score.aspectCount} aspect${
        score.aspectCount > 1
          ? "s"
          : ""
      } important${
        score.aspectCount > 1
          ? "s"
          : ""
      } influence${
        score.aspectCount > 1
          ? "nt"
          : ""
      } son énergie.`,
    );
  }

  if (
    score.supportiveCount > 0
  ) {
    reasons.push(
      `${score.supportiveCount} configuration${
        score.supportiveCount > 1
          ? "s"
          : ""
      } favorable${
        score.supportiveCount > 1
          ? "s"
          : ""
      } soutient${
        score.supportiveCount === 1
          ? ""
          : "iennent"
      } son expression.`,
    );
  }

  if (
    score.challengingCount > 0
  ) {
    reasons.push(
      `${score.challengingCount} configuration${
        score.challengingCount > 1
          ? "s"
          : ""
      } exigeante${
        score.challengingCount > 1
          ? "s"
          : ""
      } demande${
        score.challengingCount > 1
          ? "nt"
          : ""
      } des ajustements.`,
    );
  }

  if (
    score.conjunctionCount > 0
  ) {
    reasons.push(
      `${score.conjunctionCount} conjonction${
        score.conjunctionCount > 1
          ? "s"
          : ""
      } concentre${
        score.conjunctionCount > 1
          ? "nt"
          : ""
      } fortement son influence.`,
    );
  }

  if (
    score.exactnessScore >= 10
  ) {
    reasons.push(
      "Plusieurs aspects précis renforcent son importance durant le mois.",
    );
  }

  if (
    score.strongestDate
  ) {
    reasons.push(
      `Son influence atteint un point particulièrement marqué autour du ${score.strongestDate}.`,
    );
  }

  if (
    reasons.length === 0
  ) {
    reasons.push(
      "Son poids astrologique naturel lui donne une place notable dans l’équilibre général du mois.",
    );
  }

  return reasons.slice(
    0,
    4,
  );
}

/*
|--------------------------------------------------------------------------
| Titre
|--------------------------------------------------------------------------
*/

function buildTitle({
  planet,
  rank,
}: {
  planet:
    MonthlyPlanetName;

  rank: number;
}): string {
  if (rank === 1) {
    return `${planet}, planète dominante du mois`;
  }

  return `${planet}, influence majeure no ${rank}`;
}

/*
|--------------------------------------------------------------------------
| Description
|--------------------------------------------------------------------------
*/

function buildDescription(
  score:
    PlanetScore,
): string {
  const definition =
    PLANET_MAP.get(
      score.planet,
    );

  const themes =
    definition?.themes ?? [
      "l’évolution",
      "la prise de conscience",
    ];

  const primaryTheme =
    themes[0];

  const secondaryTheme =
    themes[1] ??
    themes[0];

  const tone =
    getDominantTone(
      score,
    );

  if (
    tone ===
    "favorable"
  ) {
    return (
      `${score.planet} exerce une influence constructive durant le mois. ` +
      `Elle soutient particulièrement ${primaryTheme} et ${secondaryTheme}. ` +
      "Les occasions liées à cette planète peuvent se présenter plus naturellement lorsque vous accompagnez son énergie par des décisions concrètes."
    );
  }

  if (
    tone ===
    "challenging"
  ) {
    return (
      `${score.planet} occupe une place transformatrice durant le mois. ` +
      `Elle met particulièrement en mouvement ${primaryTheme} et ${secondaryTheme}. ` +
      "Certaines tensions peuvent demander une adaptation, mais elles révèlent aussi ce qui doit évoluer."
    );
  }

  if (
    tone ===
    "intense"
  ) {
    return (
      `${score.planet} concentre une énergie particulièrement forte durant le mois. ` +
      `Les thèmes associés à ${primaryTheme} et ${secondaryTheme} prennent davantage de place. ` +
      "Cette influence gagne à être dirigée vers une priorité claire."
    );
  }

  return (
    `${score.planet} accompagne plusieurs mouvements importants du mois. ` +
    `Son influence touche surtout ${primaryTheme} et ${secondaryTheme}. ` +
    "Elle invite à maintenir un équilibre entre les occasions de progression et les ajustements nécessaires."
  );
}

/*
|--------------------------------------------------------------------------
| Conseil
|--------------------------------------------------------------------------
*/

function buildAdvice(
  score:
    PlanetScore,
): string {
  const tone =
    getDominantTone(
      score,
    );

  switch (tone) {
    case "favorable":
      return "Profitez des ouvertures présentes et transformez-les en décisions et en actions concrètes.";

    case "challenging":
      return "Ne résistez pas automatiquement au changement : observez ce que cette influence cherche à réorganiser.";

    case "intense":
      return "Canalisez votre énergie vers une priorité claire et évitez de vouloir tout régler en même temps.";

    case "balanced":
      return "Avancez avec constance et ajustez votre rythme selon les événements plutôt que de forcer les résultats.";
  }
}

/*
|--------------------------------------------------------------------------
| Conversion vers MonthlyDominantPlanet
|--------------------------------------------------------------------------
*/

function convertToDominantPlanet({
  planetScore,
  maximumScore,
  rank,
}: {
  planetScore:
    PlanetScore;

  maximumScore: number;

  rank: number;
}): MonthlyDominantPlanet {
  const normalizedScore =
    maximumScore > 0
      ? Math.round(
          (
            planetScore.rawScore /
            maximumScore
          ) * 100,
        )
      : 1;

  return {
    planet:
      planetScore.planet,

    score:
      clamp(
        normalizedScore,
        1,
        100,
      ),

    rank,

    reasons:
      buildReasons(
        planetScore,
      ),

    title:
      buildTitle({
        planet:
          planetScore.planet,

        rank,
      }),

    description:
      buildDescription(
        planetScore,
      ),

    advice:
      buildAdvice(
        planetScore,
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
  aspects:
    MonthlyAspect[];

  transits:
    MonthlyTransit[];

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

  for (
    const aspect
    of aspects
  ) {
    addAspectContribution({
      scores,
      aspect,
    });
  }

  for (
    const transit
    of transits
  ) {
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
        second.rawScore -
        first.rawScore,
    );

  const maximumScore =
    sortedScores[0]
      ?.rawScore ?? 1;

  return sortedScores
    .slice(
      0,
      Math.max(
        1,
        limit,
      ),
    )
    .map(
      (
        planetScore,
        index,
      ) =>
        convertToDominantPlanet({
          planetScore,
          maximumScore,

          rank:
            index + 1,
        }),
    );
}
