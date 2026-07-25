import type {
  MonthlyActivatedHouse,
  MonthlyAspectType,
  MonthlyTransit,
} from "./types";

/*
|--------------------------------------------------------------------------
| Types internes
|--------------------------------------------------------------------------
*/

type HouseDefinition = {
  house: number;
  lifeArea: string;
  themes: string[];
};

type HouseScore = {
  house: number;

  rawScore: number;

  transitCount: number;

  supportiveCount: number;

  challengingCount: number;

  activatingPlanets: string[];

  dates: string[];

  strongestDate?: string;

  strongestTransit?: string;

  strongestEventScore: number;
};

type TransitRecord =
  Record<
    string,
    unknown
  >;

/*
|--------------------------------------------------------------------------
| Signification des maisons
|--------------------------------------------------------------------------
*/

const HOUSE_DEFINITIONS:
  HouseDefinition[] = [
    {
      house: 1,

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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

      lifeArea:
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
  Partial<
    Record<
      MonthlyAspectType,
      number
    >
  > = {
    conjunction: 12,
    sextile: 7,
    square: 10,
    trine: 8,
    opposition: 11,
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

function normalizeString(
  value: unknown,
): string | null {
  if (
    typeof value !==
    "string"
  ) {
    return null;
  }

  const normalized =
    value.trim();

  return normalized.length > 0
    ? normalized
    : null;
}

function addUniqueString(
  values: string[],
  value: string | null,
): void {
  if (
    !value ||
    values.includes(
      value,
    )
  ) {
    return;
  }

  values.push(
    value,
  );
}

/*
|--------------------------------------------------------------------------
| Lecture sécurisée des propriétés d’un transit
|--------------------------------------------------------------------------
*/

function getTransitRecord(
  transit:
    MonthlyTransit,
): TransitRecord {
  return transit as unknown as
    TransitRecord;
}

function getTransitPlanet(
  transit:
    MonthlyTransit,
): string | null {
  const record =
    getTransitRecord(
      transit,
    );

  const possibleValues = [
    record.transitingPlanet,
    record.planet,
    record.transitPlanet,
    record.planetName,
    record.movingPlanet,
  ];

  for (
    const value
    of possibleValues
  ) {
    const planet =
      normalizeString(
        value,
      );

    if (planet) {
      return planet;
    }
  }

  return null;
}

function getTransitDate(
  transit:
    MonthlyTransit,
): string | null {
  return normalizeString(
    transit.date,
  );
}

function getTransitTitle(
  transit:
    MonthlyTransit,
): string | null {
  return normalizeString(
    transit.title,
  );
}

/*
|--------------------------------------------------------------------------
| Création du score d’une maison
|--------------------------------------------------------------------------
*/

function createHouseScore(
  house: number,
): HouseScore {
  return {
    house,

    rawScore: 0,

    transitCount: 0,

    supportiveCount: 0,

    challengingCount: 0,

    activatingPlanets: [],

    dates: [],

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
| Nature des aspects
|--------------------------------------------------------------------------
*/

function isSupportiveAspect(
  aspect?:
    MonthlyAspectType,
): boolean {
  return (
    aspect ===
      "sextile" ||
    aspect ===
      "trine"
  );
}

function isChallengingAspect(
  aspect?:
    MonthlyAspectType,
): boolean {
  return (
    aspect ===
      "square" ||
    aspect ===
      "opposition"
  );
}

/*
|--------------------------------------------------------------------------
| Contribution d’un transit
|--------------------------------------------------------------------------
*/

function addTransitToHouse({
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
    typeof transit.importance ===
        "number" &&
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
    isSupportiveAspect(
      transit.aspect,
    )
  ) {
    houseScore.supportiveCount +=
      1;
  }

  if (
    isChallengingAspect(
      transit.aspect,
    )
  ) {
    houseScore.challengingCount +=
      1;
  }

  addUniqueString(
    houseScore.activatingPlanets,
    getTransitPlanet(
      transit,
    ),
  );

  addUniqueString(
    houseScore.dates,
    getTransitDate(
      transit,
    ),
  );

  if (
    eventScore >
    houseScore
      .strongestEventScore
  ) {
    houseScore.strongestEventScore =
      eventScore;

    houseScore.strongestDate =
      getTransitDate(
        transit,
      ) ?? undefined;

    houseScore.strongestTransit =
      getTransitTitle(
        transit,
      ) ?? undefined;
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
      } active${
        score.transitCount > 1
          ? "nt"
          : ""
      } cette maison.`,
    );
  }

  if (
    score.activatingPlanets.length >
    0
  ) {
    reasons.push(
      `Planète${
        score.activatingPlanets.length >
        1
          ? "s"
          : ""
      } activatrice${
        score.activatingPlanets.length >
        1
          ? "s"
          : ""
      } : ${score.activatingPlanets.join(
        ", ",
      )}.`,
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
      } soutienne${
        score.supportiveCount > 1
          ? "nt"
          : ""
      } ce domaine.`,
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
      `L’activation est particulièrement importante autour du ${score.strongestDate}.`,
    );
  }

  return reasons.slice(
    0,
    4,
  );
}

/*
|--------------------------------------------------------------------------
| Texte descriptif
|--------------------------------------------------------------------------
*/

function buildTitle({
  definition,
}: {
  definition:
    HouseDefinition;
}): string {
  return (
    `Maison ${definition.house} — ` +
    definition.lifeArea
  );
}

function buildDescription({
  definition,
  score,
}: {
  definition:
    HouseDefinition;

  score:
    HouseScore;
}): string {
  const primaryTheme =
    definition.themes[0];

  const secondaryTheme =
    definition.themes[1] ??
    primaryTheme;

  if (
    score.supportiveCount >
    score.challengingCount
  ) {
    return (
      `La maison ${definition.house} est favorablement activée durant le mois. ` +
      `Elle met en lumière les domaines de ${primaryTheme} et de ${secondaryTheme}. ` +
      "Des occasions de progression peuvent apparaître lorsque vous prenez une initiative concrète."
    );
  }

  if (
    score.challengingCount >
    score.supportiveCount
  ) {
    return (
      `La maison ${definition.house} devient un secteur important d’évolution. ` +
      `Les thèmes de ${primaryTheme} et de ${secondaryTheme} peuvent demander des ajustements, des décisions ou une nouvelle manière d’aborder la situation.`
    );
  }

  return (
    `La maison ${definition.house} attire votre attention sur les thèmes de ${primaryTheme} et de ${secondaryTheme}. ` +
    "Le mois peut alterner entre ouvertures et ajustements, ce qui vous invite à avancer avec souplesse."
  );
}

function buildAdvice({
  definition,
  score,
}: {
  definition:
    HouseDefinition;

  score:
    HouseScore;
}): string {
  const primaryTheme =
    definition.themes[0];

  if (
    score.supportiveCount >
    score.challengingCount
  ) {
    return (
      `Profitez des occasions liées à ${primaryTheme}, ` +
      "mais accompagnez-les par des décisions et des actions concrètes."
    );
  }

  if (
    score.challengingCount >
    score.supportiveCount
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

  const result:
    MonthlyActivatedHouse = {
      house:
        houseScore.house,

      lifeArea:
        definition.lifeArea,

      activatingPlanets:
        houseScore.activatingPlanets,

      dates:
        houseScore.dates,

      score:
        clamp(
          normalizedScore,
          1,
          100,
        ),

      rank,

      reasons:
        buildReasons(
          houseScore,
        ),

      title:
        buildTitle({
          definition,
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
    };

  return result;
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
    addTransitToHouse({
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
