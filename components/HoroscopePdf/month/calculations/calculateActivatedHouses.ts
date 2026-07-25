import type {
  MonthlyActivatedHouse,
  MonthlyAspectType,
  MonthlyTransit,
} from "./types";

/*
|--------------------------------------------------------------------------
| Signification des maisons
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
| Structure interne
|--------------------------------------------------------------------------
*/

type HouseScore = {
  house: number;

  score: number;
  transitCount: number;

  supportiveCount: number;
  challengingCount: number;

  strongestDate?: string;
  strongestTransit?: string;

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

function normalizeHouse(
  value: unknown,
): number | null {
  if (
    typeof value !==
      "number" ||
    !Number.isFinite(value)
  ) {
    return null;
  }

  const house =
    Math.round(value);

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

    score: 0,
    transitCount: 0,

    supportiveCount: 0,
    challengingCount: 0,

    strongestEventScore: 0,
  };
}

function getOrCreateHouseScore(
  scores: Map<
    number,
    HouseScore
  >,
  house: number,
): HouseScore {
  const existing =
    scores.get(house);

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

function isSupportiveAspect(
  aspect?: MonthlyAspectType,
): boolean {
  return (
    aspect === "sextile" ||
    aspect === "trine"
  );
}

function isChallengingAspect(
  aspect?: MonthlyAspectType,
): boolean {
  return (
    aspect === "square" ||
    aspect === "opposition"
  );
}

function getActivationTone(
  score: HouseScore,
): string {
  if (
    score.challengingCount >
    score.supportiveCount
  ) {
    return "évolutive";
  }

  if (
    score.supportiveCount >
    score.challengingCount
  ) {
    return "favorable";
  }

  return "mixte";
}

function getActivationLevel(
  normalizedScore: number,
): string {
  if (
    normalizedScore >= 80
  ) {
    return "Très forte";
  }

  if (
    normalizedScore >= 60
  ) {
    return "Forte";
  }

  if (
    normalizedScore >= 40
  ) {
    return "Modérée";
  }

  return "Légère";
}

/*
|--------------------------------------------------------------------------
| Interprétation
|--------------------------------------------------------------------------
*/

function buildInterpretation({
  definition,
  tone,
}: {
  definition: HouseDefinition;
  tone: string;
}): string {
  const primaryTheme =
    definition.themes[0];

  const secondaryTheme =
    definition.themes[1] ??
    definition.themes[0];

  if (
    tone === "favorable"
  ) {
    return (
      `La maison ${definition.house} met favorablement en lumière les domaines de ${primaryTheme} et de ${secondaryTheme}. ` +
      "Des occasions de progression peuvent apparaître plus naturellement, particulièrement lorsque vous prenez une initiative concrète."
    );
  }

  if (
    tone === "évolutive"
  ) {
    return (
      `La maison ${definition.house} devient un secteur important d’évolution. ` +
      `Les thèmes de ${primaryTheme} et de ${secondaryTheme} peuvent demander des ajustements, des décisions ou une nouvelle façon d’aborder la situation.`
    );
  }

  return (
    `La maison ${definition.house} attire votre attention sur les thèmes de ${primaryTheme} et de ${secondaryTheme}. ` +
    "Le mois alterne entre ouvertures et ajustements, ce qui vous invite à avancer avec souplesse."
  );
}

function buildAdvice({
  definition,
  tone,
}: {
  definition: HouseDefinition;
  tone: string;
}): string {
  const primaryTheme =
    definition.themes[0];

  if (
    tone === "favorable"
  ) {
    return (
      `Profitez des occasions liées à ${primaryTheme}, ` +
      "sans attendre que les événements se développent seuls."
    );
  }

  if (
    tone === "évolutive"
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
| Ajout d’un transit
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
  transit: MonthlyTransit;
}): void {
  const house =
    normalizeHouse(
      transit.natalHouse,
    );

  if (!house) {
    return;
  }

  const score =
    getOrCreateHouseScore(
      scores,
      house,
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

  score.score +=
    eventScore;

  score.transitCount += 1;

  if (
    isSupportiveAspect(
      transit.aspect,
    )
  ) {
    score.supportiveCount += 1;
  }

  if (
    isChallengingAspect(
      transit.aspect,
    )
  ) {
    score.challengingCount += 1;
  }

  if (
    eventScore >
    score.strongestEventScore
  ) {
    score.strongestEventScore =
      eventScore;

    score.strongestDate =
      transit.date;

    score.strongestTransit =
      transit.title;
  }
}

/*
|--------------------------------------------------------------------------
| Conversion vers le résultat final
|--------------------------------------------------------------------------
*/

function convertToActivatedHouse({
  score,
  maximumScore,
}: {
  score: HouseScore;
  maximumScore: number;
}): MonthlyActivatedHouse {
  const definition =
    HOUSE_MAP.get(
      score.house,
    );

  if (!definition) {
    throw new Error(
      `Définition absente pour la maison ${score.house}.`,
    );
  }

  const normalizedScore =
    maximumScore > 0
      ? Math.round(
          (
            score.score /
            maximumScore
          ) * 100,
        )
      : 0;

  const tone =
    getActivationTone(
      score,
    );

  return {
    house:
      score.house,

    title:
      definition.title,

    themes:
      definition.themes,

    score:
      clamp(
        normalizedScore,
        1,
        100,
      ),

    activationLevel:
      getActivationLevel(
        normalizedScore,
      ),

    tone,

    transitCount:
      score.transitCount,

    supportiveCount:
      score.supportiveCount,

    challengingCount:
      score.challengingCount,

    strongestDate:
      score.strongestDate,

    strongestTransit:
      score.strongestTransit,

    interpretation:
      buildInterpretation({
        definition,
        tone,
      }),

    advice:
      buildAdvice({
        definition,
        tone,
      }),
  };
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
  transits: MonthlyTransit[];
  limit?: number;
}): MonthlyActivatedHouse[] {
  const scores =
    new Map<
      number,
      HouseScore
    >();

  for (const transit of transits) {
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
          score.transitCount > 0,
      )
      .sort(
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
        convertToActivatedHouse({
          score,
          maximumScore,
        }),
    );
}
