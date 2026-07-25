import type {
  MonthlyActivatedHouse,
  MonthlyAspectType,
  MonthlyTransit,
} from "./types";

/*
|--------------------------------------------------------------------------
| Définition des maisons astrologiques
|--------------------------------------------------------------------------
*/

type HouseDefinition = {
  house: number;

  title: string;

  themes: string[];
};

const HOUSE_DEFINITIONS:
  HouseDefinition[] = [
    {
      house: 1,

      title:
        "Identité et affirmation",

      themes: [
        "identité",
        "apparence",
        "initiatives personnelles",
        "affirmation",
      ],
    },

    {
      house: 2,

      title:
        "Finances et valeurs",

      themes: [
        "argent",
        "ressources",
        "sécurité matérielle",
        "valeurs personnelles",
      ],
    },

    {
      house: 3,

      title:
        "Communication et entourage",

      themes: [
        "communication",
        "déplacements",
        "apprentissages",
        "entourage proche",
      ],
    },

    {
      house: 4,

      title:
        "Foyer et fondations",

      themes: [
        "famille",
        "foyer",
        "passé",
        "sécurité émotionnelle",
      ],
    },

    {
      house: 5,

      title:
        "Créativité et plaisir",

      themes: [
        "créativité",
        "amour",
        "plaisirs",
        "expression personnelle",
      ],
    },

    {
      house: 6,

      title:
        "Travail quotidien et bien-être",

      themes: [
        "organisation",
        "travail quotidien",
        "habitudes",
        "santé",
      ],
    },

    {
      house: 7,

      title:
        "Relations et engagements",

      themes: [
        "couple",
        "associations",
        "engagements",
        "équilibre relationnel",
      ],
    },

    {
      house: 8,

      title:
        "Transformation et ressources partagées",

      themes: [
        "transformation",
        "intimité",
        "finances partagées",
        "détachement",
      ],
    },

    {
      house: 9,

      title:
        "Expansion et vision",

      themes: [
        "voyages",
        "études",
        "croyances",
        "ouverture",
      ],
    },

    {
      house: 10,

      title:
        "Carrière et accomplissement",

      themes: [
        "carrière",
        "réputation",
        "objectifs",
        "responsabilités",
      ],
    },

    {
      house: 11,

      title:
        "Projets et vie sociale",

      themes: [
        "projets",
        "amitiés",
        "réseaux",
        "avenir",
      ],
    },

    {
      house: 12,

      title:
        "Intériorité et libération",

      themes: [
        "repos",
        "intuition",
        "inconscient",
        "fin de cycle",
      ],
    },
  ];

const HOUSE_MAP =
  new Map<
    number,
    HouseDefinition
  >(
    HOUSE_DEFINITIONS.map(
      (definition) => [
        definition.house,
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
    sextile: 7,
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
| Types internes
|--------------------------------------------------------------------------
*/

type HouseScore = {
  house: number;

  rawScore: number;

  transitCount: number;

  supportiveCount: number;

  challengingCount: number;

  transitIds: string[];

  strongestDate?: string;

  strongestTransit?: string;

  strongestEventScore: number;
};

type HouseTone =
  | "favorable"
  | "challenging"
  | "balanced";

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

function normalizeHouse(
  value: unknown,
): number | null {
  if (
    typeof value !==
      "number" ||
    !Number.isFinite(
      value,
    )
  ) {
    return null;
  }

  const house =
    Math.round(
      value,
    );

  if (
    house < 1 ||
    house > 12
  ) {
    return null;
  }

  return house;
}

function createHouseScore(
  house: number,
): HouseScore {
  return {
    house,

    rawScore: 0,

    transitCount: 0,

    supportiveCount: 0,

    challengingCount: 0,

    transitIds: [],

    strongestEventScore: 0,
  };
}

function getOrCreateHouseScore({
  scores,
  house,
}: {
  scores: Map<
    number,
    HouseScore
  >;

  house: number;
}): HouseScore {
  const existing =
    scores.get(
      house,
    );

  if (existing) {
    return existing;
  }

  const created =
    createHouseScore(
      house,
    );

  scores.set(
    house,
    created,
  );

  return created;
}

/*
|--------------------------------------------------------------------------
| Nature de l’activation
|--------------------------------------------------------------------------
*/

function getHouseTone(
  score:
    HouseScore,
): HouseTone {
  if (
    score.supportiveCount >
    score.challengingCount
  ) {
    return "favorable";
  }

  if (
    score.challengingCount >
    score.supportiveCount
  ) {
    return "challenging";
  }

  return "balanced";
}

/*
|--------------------------------------------------------------------------
| Contribution d’un transit
|--------------------------------------------------------------------------
*/

function addTransitContribution({
  scores,
  transit,
}: {
  scores: Map<
    number,
    HouseScore
  >;

  transit:
    MonthlyTransit;
}): void {
  const house =
    normalizeHouse(
      transit.natalHouse,
    );

  if (!house) {
    return;
  }

  const houseScore =
    getOrCreateHouseScore({
      scores,
      house,
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
          transit.orb,
          0,
        )
      : 5;

  const precisionBonus =
    clamp(
      8 - orb,
      0,
      8,
    );

  const aspectBonus =
    transit.aspect
      ? ASPECT_WEIGHT[
          transit.aspect
        ] ?? 5
      : 5;

  const eventScore =
    importance / 5 +
    precisionBonus +
    aspectBonus;

  houseScore.rawScore +=
    eventScore;

  houseScore.transitCount +=
    1;

  if (
    transit.aspect &&
    SUPPORTIVE_ASPECTS.has(
      transit.aspect,
    )
  ) {
    houseScore.supportiveCount +=
      1;
  }

  if (
    transit.aspect &&
    CHALLENGING_ASPECTS.has(
      transit.aspect,
    )
  ) {
    houseScore.challengingCount +=
      1;
  }

  if (
    !houseScore.transitIds.includes(
      transit.id,
    )
  ) {
    houseScore.transitIds.push(
      transit.id,
    );
  }

  if (
    eventScore >
    houseScore
      .strongestEventScore
  ) {
    houseScore.strongestEventScore =
      eventScore;

    houseScore.strongestDate =
      transit.date;

    houseScore.strongestTransit =
      transit.title;
  }
}

/*
|--------------------------------------------------------------------------
| Raisons de l’activation
|--------------------------------------------------------------------------
*/

function buildReasons(
  score:
    HouseScore,
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
      } active${
        score.transitCount > 1
          ? "nt"
          : ""
      } cette maison.`,
    );
  }

  if (
    score.supportiveCount > 0
  ) {
    reasons.push(
      `${score.supportiveCount} influence${
        score.supportiveCount > 1
          ? "s"
          : ""
      } favorable${
        score.supportiveCount > 1
          ? "s"
          : ""
      } facilite${
        score.supportiveCount > 1
          ? "nt"
          : ""
      } son expression.`,
    );
  }

  if (
    score.challengingCount > 0
  ) {
    reasons.push(
      `${score.challengingCount} influence${
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
    score.strongestDate
  ) {
    reasons.push(
      `L’activation devient particulièrement importante autour du ${score.strongestDate}.`,
    );
  }

  if (
    score.strongestTransit
  ) {
    reasons.push(
      `Le transit le plus marquant est : ${score.strongestTransit}.`,
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
  definition,
  rank,
}: {
  definition:
    HouseDefinition;

  rank: number;
}): string {
  if (rank === 1) {
    return (
      `Maison ${definition.house} — ` +
      `${definition.title}`
    );
  }

  return (
    `Maison ${definition.house} — ` +
    `${definition.title}`
  );
}

/*
|--------------------------------------------------------------------------
| Description
|--------------------------------------------------------------------------
*/

function buildDescription({
  definition,
  score,
}: {
  definition:
    HouseDefinition;

  score:
    HouseScore;
}): string {
  const tone =
    getHouseTone(
      score,
    );

  const primaryTheme =
    definition.themes[0];

  const secondaryTheme =
    definition.themes[1] ??
    definition.themes[0];

  if (
    tone ===
    "favorable"
  ) {
    return (
      `La maison ${definition.house} est favorablement activée durant le mois. ` +
      `Elle met en lumière les domaines de ${primaryTheme} et de ${secondaryTheme}. ` +
      "Des occasions de progression peuvent apparaître plus naturellement lorsque vous prenez une initiative concrète."
    );
  }

  if (
    tone ===
    "challenging"
  ) {
    return (
      `La maison ${definition.house} devient un secteur important d’évolution durant le mois. ` +
      `Les thèmes de ${primaryTheme} et de ${secondaryTheme} peuvent demander des ajustements, des décisions ou une nouvelle manière d’aborder certaines situations.`
    );
  }

  return (
    `La maison ${definition.house} attire votre attention sur les domaines de ${primaryTheme} et de ${secondaryTheme}. ` +
    "Le mois peut alterner entre ouvertures et ajustements, ce qui vous invite à avancer avec souplesse."
  );
}

/*
|--------------------------------------------------------------------------
| Conseil
|--------------------------------------------------------------------------
*/

function buildAdvice({
  definition,
  score,
}: {
  definition:
    HouseDefinition;

  score:
    HouseScore;
}): string {
  const tone =
    getHouseTone(
      score,
    );

  const primaryTheme =
    definition.themes[0];

  if (
    tone ===
    "favorable"
  ) {
    return (
      `Profitez des occasions liées à ${primaryTheme}, ` +
      "mais accompagnez-les par des décisions et des actions concrètes."
    );
  }

  if (
    tone ===
    "challenging"
  ) {
    return (
      `Prenez le temps de revoir votre manière de gérer ${primaryTheme} ` +
      "et évitez les décisions prises uniquement sous pression."
    );
  }

  return (
    `Cherchez un équilibre réaliste dans le domaine de ${primaryTheme} ` +
    "et ajustez vos priorités selon les circonstances."
  );
}

/*
|--------------------------------------------------------------------------
| Conversion vers MonthlyActivatedHouse
|--------------------------------------------------------------------------
*/

function convertToActivatedHouse({
  houseScore,
  maximumScore,
  rank,
}: {
  houseScore:
    HouseScore;

  maximumScore: number;

  rank: number;
}): MonthlyActivatedHouse {
  const definition =
    HOUSE_MAP.get(
      houseScore.house,
    );

  if (!definition) {
    throw new Error(
      `Définition absente pour la maison ${houseScore.house}.`,
    );
  }

  const normalizedScore =
    maximumScore > 0
      ? Math.round(
          (
            houseScore.rawScore /
            maximumScore
          ) * 100,
        )
      : 1;

  /*
   * La conversion est centralisée ici afin que le reste
   * du calcul demeure indépendant de l’affichage PDF.
   */
  return {
    house:
      houseScore.house,

    score:
      clamp(
        normalizedScore,
        1,
        100,
      ),

    rank,

    themes:
      definition.themes,

    transitIds:
      houseScore.transitIds,

    reasons:
      buildReasons(
        houseScore,
      ),

    title:
      buildTitle({
        definition,
        rank,
      }),

    description:
      buildDescription({
        definition,
        score:
          houseScore,
      }),

    advice:
      buildAdvice({
        definition,
        score:
          houseScore,
      }),
  } as MonthlyActivatedHouse;
}

/*
|--------------------------------------------------------------------------
| Fonction principale
|--------------------------------------------------------------------------
*/

export function calculateActivatedHouses({
  transits,
  limit = 4,
}: {
  transits:
    MonthlyTransit[];

  limit?: number;
}): MonthlyActivatedHouse[] {
  const safeTransits =
    Array.isArray(
      transits,
    )
      ? transits
      : [];

  const scores =
    new Map<
      number,
      HouseScore
    >();

  for (
    const transit
    of safeTransits
  ) {
    addTransitContribution({
      scores,
      transit,
    });
  }

  const sortedScores =
    Array.from(
      scores.values(),
    )
      .filter(
        (score) =>
          score.transitCount >
          0,
      )
      .sort(
        (
          first,
          second,
        ) =>
          second.rawScore -
          first.rawScore,
      );

  if (
    sortedScores.length === 0
  ) {
    return [];
  }

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
        houseScore,
        index,
      ) =>
        convertToActivatedHouse({
          houseScore,
          maximumScore,

          rank:
            index + 1,
        }),
    );
}
