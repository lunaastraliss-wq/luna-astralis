import {
  buildYearlySeed,
  pickDistinctVariants,
  pickVariant,
} from "./helpers";

import type {
  BuildYearlySectionParams,
  YearActivatedHouseItem,
  YearAnnualPagesResult,
  YearDominantPlanetItem,
  YearMajorAspectItem,
  YearMajorEnergyItem,
  YearOverviewAxis,
} from "./types";

/*
|--------------------------------------------------------------------------
| Profils astrologiques par signe
|--------------------------------------------------------------------------
*/

type SignProfile = {
  element: string;
  modality: string;
  rulingPlanet: string;
  secondaryPlanet?: string;
  keywords: string[];
  strengths: string[];
  challenges: string[];
  houses: number[];
};

const SIGN_PROFILES: Record<
  string,
  SignProfile
> = {
  belier: {
    element: "Feu",
    modality: "Cardinal",
    rulingPlanet: "Mars",
    keywords: [
      "initiative",
      "courage",
      "renouveau",
      "affirmation",
    ],
    strengths: [
      "audace",
      "rapidité d’action",
      "volonté",
      "leadership",
    ],
    challenges: [
      "impatience",
      "réactions impulsives",
      "dispersion",
      "confrontations",
    ],
    houses: [1, 5, 10],
  },

  taureau: {
    element: "Terre",
    modality: "Fixe",
    rulingPlanet: "Vénus",
    keywords: [
      "stabilité",
      "construction",
      "sécurité",
      "plaisir",
    ],
    strengths: [
      "persévérance",
      "patience",
      "fidélité",
      "sens pratique",
    ],
    challenges: [
      "résistance au changement",
      "attachement",
      "lenteur",
      "rigidité",
    ],
    houses: [2, 4, 6],
  },

  gemeaux: {
    element: "Air",
    modality: "Mutable",
    rulingPlanet: "Mercure",
    keywords: [
      "communication",
      "curiosité",
      "mouvement",
      "apprentissage",
    ],
    strengths: [
      "adaptabilité",
      "intelligence",
      "souplesse",
      "sociabilité",
    ],
    challenges: [
      "dispersion",
      "indécision",
      "nervosité",
      "superficialité",
    ],
    houses: [3, 7, 11],
  },

  cancer: {
    element: "Eau",
    modality: "Cardinal",
    rulingPlanet: "Lune",
    keywords: [
      "émotions",
      "famille",
      "protection",
      "intimité",
    ],
    strengths: [
      "intuition",
      "sensibilité",
      "loyauté",
      "empathie",
    ],
    challenges: [
      "hypersensibilité",
      "repli",
      "nostalgie",
      "insécurité",
    ],
    houses: [4, 8, 12],
  },

  lion: {
    element: "Feu",
    modality: "Fixe",
    rulingPlanet: "Soleil",
    keywords: [
      "rayonnement",
      "créativité",
      "expression",
      "reconnaissance",
    ],
    strengths: [
      "générosité",
      "charisme",
      "créativité",
      "confiance",
    ],
    challenges: [
      "orgueil",
      "besoin de validation",
      "dramatisation",
      "entêtement",
    ],
    houses: [1, 5, 10],
  },

  vierge: {
    element: "Terre",
    modality: "Mutable",
    rulingPlanet: "Mercure",
    keywords: [
      "organisation",
      "amélioration",
      "service",
      "précision",
    ],
    strengths: [
      "analyse",
      "discipline",
      "fiabilité",
      "méthode",
    ],
    challenges: [
      "perfectionnisme",
      "inquiétude",
      "autocritique",
      "contrôle",
    ],
    houses: [2, 6, 10],
  },

  balance: {
    element: "Air",
    modality: "Cardinal",
    rulingPlanet: "Vénus",
    keywords: [
      "équilibre",
      "relations",
      "harmonie",
      "coopération",
    ],
    strengths: [
      "diplomatie",
      "élégance",
      "écoute",
      "sens de la justice",
    ],
    challenges: [
      "indécision",
      "évitement",
      "dépendance au regard",
      "compromis excessifs",
    ],
    houses: [3, 7, 11],
  },

  scorpion: {
    element: "Eau",
    modality: "Fixe",
    rulingPlanet: "Pluton",
    secondaryPlanet: "Mars",
    keywords: [
      "transformation",
      "intensité",
      "vérité",
      "régénération",
    ],
    strengths: [
      "profondeur",
      "résilience",
      "intuition",
      "détermination",
    ],
    challenges: [
      "méfiance",
      "contrôle",
      "obsession",
      "radicalité",
    ],
    houses: [4, 8, 12],
  },

  sagittaire: {
    element: "Feu",
    modality: "Mutable",
    rulingPlanet: "Jupiter",
    keywords: [
      "expansion",
      "aventure",
      "connaissance",
      "liberté",
    ],
    strengths: [
      "optimisme",
      "vision",
      "enthousiasme",
      "franchise",
    ],
    challenges: [
      "excès",
      "imprudence",
      "dispersion",
      "manque de constance",
    ],
    houses: [5, 9, 11],
  },

  capricorne: {
    element: "Terre",
    modality: "Cardinal",
    rulingPlanet: "Saturne",
    keywords: [
      "ambition",
      "structure",
      "responsabilité",
      "accomplissement",
    ],
    strengths: [
      "discipline",
      "endurance",
      "maturité",
      "stratégie",
    ],
    challenges: [
      "rigidité",
      "pessimisme",
      "surmenage",
      "distance émotionnelle",
    ],
    houses: [2, 6, 10],
  },

  verseau: {
    element: "Air",
    modality: "Fixe",
    rulingPlanet: "Uranus",
    secondaryPlanet: "Saturne",
    keywords: [
      "innovation",
      "indépendance",
      "avenir",
      "collectif",
    ],
    strengths: [
      "originalité",
      "vision",
      "autonomie",
      "inventivité",
    ],
    challenges: [
      "détachement",
      "imprévisibilité",
      "entêtement",
      "ruptures brusques",
    ],
    houses: [3, 7, 11],
  },

  poissons: {
    element: "Eau",
    modality: "Mutable",
    rulingPlanet: "Neptune",
    secondaryPlanet: "Jupiter",
    keywords: [
      "intuition",
      "spiritualité",
      "compassion",
      "imagination",
    ],
    strengths: [
      "empathie",
      "créativité",
      "réceptivité",
      "inspiration",
    ],
    challenges: [
      "confusion",
      "fuite",
      "idéalisme",
      "limites fragiles",
    ],
    houses: [4, 8, 12],
  },
};

/*
|--------------------------------------------------------------------------
| Textes généraux
|--------------------------------------------------------------------------
*/

const OVERVIEW_INTRODUCTIONS = [
  "Cette année ouvre un cycle de progression dans lequel les choix conscients auront davantage de poids que les réactions immédiates.",
  "L’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.",
  "Une dynamique de transformation progressive accompagne cette période et vous invite à faire évoluer vos priorités.",
  "Cette année favorise une compréhension plus profonde de vos besoins, de vos ambitions et de vos relations.",
  "Le climat annuel vous encourage à unir intuition, lucidité et constance afin d’avancer avec davantage de maîtrise.",
] as const;

const OVERVIEW_SUMMARIES = [
  "Les prochains mois alterneront entre phases d’expansion et moments de recentrage. Les périodes les plus constructives seront celles où vous accepterez d’avancer sans précipitation.",
  "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.",
  "L’année vous demande de renforcer ce qui est solide, de transformer ce qui ne correspond plus à vos besoins et de préserver votre énergie.",
  "Plusieurs décisions importantes pourront modifier durablement votre trajectoire. Une vision claire de vos priorités sera votre meilleur repère.",
  "La période favorise les changements réfléchis, les prises de conscience et la création de nouvelles bases plus conformes à votre identité.",
] as const;

const GENERAL_ADVICES = [
  "Avancez par étapes et vérifiez régulièrement que vos décisions correspondent encore à vos priorités profondes.",
  "Conservez une direction claire, mais accordez-vous la liberté d’ajuster votre stratégie lorsque les circonstances évoluent.",
  "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.",
  "Écoutez vos intuitions sans négliger les faits concrets. L’équilibre entre ressenti et réalisme vous aidera à faire les meilleurs choix.",
  "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.",
] as const;

const GENERAL_CONCLUSIONS = [
  "Cette année peut devenir une étape déterminante si vous transformez vos prises de conscience en décisions concrètes.",
  "Votre capacité à rester fidèle à votre vision tout en évoluant avec souplesse constituera l’une de vos plus grandes forces.",
  "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.",
  "En cultivant patience, discernement et constance, vous pourrez faire de cette année une période de réelle progression.",
  "L’année vous offre l’occasion de construire une trajectoire plus consciente et davantage alignée avec la personne que vous devenez.",
] as const;

const ENERGY_TITLES = [
  "Expansion personnelle",
  "Transformation intérieure",
  "Stabilité et construction",
  "Ouverture relationnelle",
  "Réorientation professionnelle",
  "Créativité et expression",
  "Guérison émotionnelle",
  "Affirmation de soi",
  "Organisation et discipline",
  "Intuition et compréhension",
] as const;

const ASPECTS = [
  {
    planets: "Jupiter et Soleil",
    aspect: "Aspect d’expansion",
  },
  {
    planets: "Saturne et Soleil",
    aspect: "Aspect de structuration",
  },
  {
    planets: "Vénus et Jupiter",
    aspect: "Aspect d’harmonie",
  },
  {
    planets: "Mars et Saturne",
    aspect: "Aspect de maîtrise",
  },
  {
    planets: "Mercure et Uranus",
    aspect: "Aspect d’innovation",
  },
  {
    planets: "Lune et Neptune",
    aspect: "Aspect d’intuition",
  },
  {
    planets: "Pluton et Soleil",
    aspect: "Aspect de transformation",
  },
  {
    planets: "Jupiter et Saturne",
    aspect: "Aspect de consolidation",
  },
] as const;

const PLANET_AREAS: Record<
  string,
  string
> = {
  Soleil: "identité, confiance et rayonnement",
  Lune: "émotions, intuition et sécurité intérieure",
  Mercure: "communication, décisions et apprentissage",
  Vénus: "relations, valeurs et harmonie",
  Mars: "action, courage et affirmation",
  Jupiter: "expansion, opportunités et évolution",
  Saturne: "structure, responsabilités et maturité",
  Uranus: "changement, liberté et innovation",
  Neptune: "intuition, imagination et spiritualité",
  Pluton: "transformation, pouvoir personnel et régénération",
};

const HOUSE_TITLES: Record<
  number,
  string
> = {
  1: "Identité et nouveaux départs",
  2: "Ressources et sécurité",
  3: "Communication et apprentissage",
  4: "Foyer et racines",
  5: "Créativité et expression",
  6: "Travail quotidien et bien-être",
  7: "Relations et engagements",
  8: "Transformation et intimité",
  9: "Expansion et vision",
  10: "Carrière et accomplissement",
  11: "Projets et vie sociale",
  12: "Intériorité et guérison",
};

const HOUSE_AREAS: Record<
  number,
  string
> = {
  1: "votre identité, vos initiatives et votre manière de vous affirmer",
  2: "vos finances, vos valeurs et votre sentiment de sécurité",
  3: "vos échanges, vos apprentissages et votre environnement proche",
  4: "votre vie familiale, votre foyer et vos fondations émotionnelles",
  5: "votre créativité, vos plaisirs et votre expression personnelle",
  6: "vos habitudes, votre organisation et votre équilibre quotidien",
  7: "vos relations importantes, vos associations et vos engagements",
  8: "vos transformations profondes, votre intimité et vos ressources partagées",
  9: "vos projets d’expansion, vos convictions et votre ouverture au monde",
  10: "votre carrière, votre réputation et vos ambitions",
  11: "vos projets collectifs, vos amitiés et votre vision de l’avenir",
  12: "votre monde intérieur, votre intuition et vos processus de guérison",
};

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires internes
|--------------------------------------------------------------------------
*/

function normalizeSign(
  zodiacSign: string,
): string {
  return zodiacSign
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    );
}

function getSignProfile(
  zodiacSign: string,
): SignProfile {
  const normalizedSign =
    normalizeSign(zodiacSign);

  return (
    SIGN_PROFILES[normalizedSign] ??
    SIGN_PROFILES.belier
  );
}

function getPersonName(
  firstName?: string,
): string {
  const normalizedName =
    firstName?.trim();

  return normalizedName || "vous";
}

function calculateScore(
  seed: number,
  minimum: number,
  maximum: number,
  offset: number,
): number {
  const range =
    maximum - minimum + 1;

  return (
    minimum +
    ((seed + offset * 7919) %
      range)
  );
}

function capitalize(
  value: string,
): string {
  if (!value) {
    return value;
  }

  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  );
}

/*
|--------------------------------------------------------------------------
| Construction de la vue d’ensemble
|--------------------------------------------------------------------------
*/

function buildOverview({
  identity,
  period,
}: BuildYearlySectionParams): YearAnnualPagesResult["overview"] {
  const seed = buildYearlySeed({
    identity,
    period,
    section: "year-overview",
  });

  const profile = getSignProfile(
    identity.zodiacSign,
  );

  const personName = getPersonName(
    identity.firstName,
  );

  const selectedKeywords =
    pickDistinctVariants(
      profile.keywords,
      3,
      seed,
      10,
    );

  const axes: YearOverviewAxis[] =
    selectedKeywords.map(
      (
        keyword,
        index,
      ): YearOverviewAxis => {
        const axisTexts = [
          `${capitalize(
            keyword,
          )} devient un thème important de l’année. Vous serez amené à lui donner une place plus consciente dans vos décisions et dans votre évolution personnelle.`,
          `Le domaine de la ${keyword} connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.`,
          `Votre rapport à la ${keyword} évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.`,
          `Cette année favorise une nouvelle façon d’aborder la ${keyword}. Les expériences vécues pourront modifier durablement vos priorités.`,
        ];

        return {
          title: capitalize(keyword),
          text: pickVariant(
            axisTexts,
            seed,
            20 + index,
          ),
        };
      },
    );

  return {
    title: `Votre année ${period.year}`,
    score: calculateScore(
      seed,
      74,
      94,
      1,
    ),

    introduction: `${personName}, ${pickVariant(
      OVERVIEW_INTRODUCTIONS,
      seed,
      2,
    )}`,

    summary: pickVariant(
      OVERVIEW_SUMMARIES,
      seed,
      3,
    ),

    dominantTheme: `L’énergie dominante de votre année repose sur la ${selectedKeywords[0]}, soutenue par votre élément ${profile.element} et par la dynamique ${profile.modality.toLowerCase()} de votre signe.`,

    axes,

    advice: pickVariant(
      GENERAL_ADVICES,
      seed,
      4,
    ),

    conclusion: pickVariant(
      GENERAL_CONCLUSIONS,
      seed,
      5,
    ),
  };
}

/*
|--------------------------------------------------------------------------
| Construction des énergies majeures
|--------------------------------------------------------------------------
*/

function buildMajorEnergies({
  identity,
  period,
}: BuildYearlySectionParams): YearAnnualPagesResult["majorEnergies"] {
  const seed = buildYearlySeed({
    identity,
    period,
    section: "year-major-energies",
  });

  const profile = getSignProfile(
    identity.zodiacSign,
  );

  const selectedTitles =
    pickDistinctVariants(
      ENERGY_TITLES,
      4,
      seed,
      10,
    );

  const selectedStrengths =
    pickDistinctVariants(
      profile.strengths,
      4,
      seed,
      20,
    );

  const selectedChallenges =
    pickDistinctVariants(
      profile.challenges,
      4,
      seed,
      30,
    );

  const energies: YearMajorEnergyItem[] =
    selectedTitles.map(
      (
        title,
        index,
      ): YearMajorEnergyItem => ({
        title,

        subtitle:
          index === 0
            ? "Énergie dominante"
            : `Influence complémentaire ${index + 1}`,

        intensity: calculateScore(
          seed,
          68,
          96,
          40 + index,
        ),

        text: `Cette énergie stimule votre ${selectedStrengths[index]} et vous encourage à développer une approche plus consciente de vos choix. Elle pourra se manifester dans plusieurs domaines au fil de l’année.`,

        advice: `Appuyez-vous sur votre ${selectedStrengths[index]}, tout en évitant que ${selectedChallenges[index]} ne ralentisse votre progression.`,
      }),
    );

  return {
    title: "Les grandes énergies de l’année",

    introduction: `Votre année ${period.year} est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.`,

    globalIntensity: calculateScore(
      seed,
      76,
      95,
      1,
    ),

    energies,

    synthesis: `L’équilibre entre votre élément ${profile.element} et votre modalité ${profile.modality} vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.`,

    advice: pickVariant(
      GENERAL_ADVICES,
      seed,
      50,
    ),

    conclusion: `Ces différentes énergies ne s’exprimeront pas toutes au même moment. Elles formeront ensemble le mouvement général de votre année et vous aideront à avancer vers une version plus affirmée de vous-même.`,
  };
}

/*
|--------------------------------------------------------------------------
| Construction des aspects majeurs
|--------------------------------------------------------------------------
*/

function buildMajorAspects({
  identity,
  period,
}: BuildYearlySectionParams): YearAnnualPagesResult["majorAspects"] {
  const seed = buildYearlySeed({
    identity,
    period,
    section: "year-major-aspects",
  });

  const profile = getSignProfile(
    identity.zodiacSign,
  );

  const selectedAspects =
    pickDistinctVariants(
      ASPECTS,
      4,
      seed,
      10,
    );

  const periods = [
    "Début d’année",
    "Printemps",
    "Été",
    "Automne",
    "Fin d’année",
    "Plusieurs périodes de l’année",
  ] as const;

  const aspects: YearMajorAspectItem[] =
    selectedAspects.map(
      (
        selectedAspect,
        index,
      ): YearMajorAspectItem => {
        const period = pickVariant(
          periods,
          seed,
          20 + index,
        );

        return {
          planets:
            selectedAspect.planets,

          aspect:
            selectedAspect.aspect,

          period,

          influence: `Cet aspect agit sur votre capacité à développer davantage de ${profile.strengths[index]}. Il peut provoquer une évolution importante dans votre manière de décider et d’organiser vos priorités.`,

          opportunity: `Utiliser cette période pour renforcer votre ${profile.keywords[index]} et prendre des décisions capables de produire des résultats durables.`,

          caution: `Éviter que ${profile.challenges[index]} ne vous pousse à réagir trop rapidement ou à perdre de vue votre objectif principal.`,
        };
      },
    );

  return {
    title: "Les aspects majeurs de l’année",

    introduction: `Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année ${period.year}. Ils indiquent les périodes de mouvement, de structuration et de transformation.`,

    aspects,

    dominantAspect: `${aspects[0].planets} — ${aspects[0].aspect}`,

    synthesis: `L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique. Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.`,

    advice: `Observez les répétitions dans les événements de l’année. Elles pourront révéler le domaine précis dans lequel une transformation ou une décision devient nécessaire.`,

    conclusion: `Les aspects majeurs ne déterminent pas vos choix, mais ils décrivent les climats qui accompagnent votre évolution. Votre conscience et votre capacité d’adaptation resteront essentielles.`,
  };
}

/*
|--------------------------------------------------------------------------
| Construction des planètes dominantes
|--------------------------------------------------------------------------
*/

function buildDominantPlanets({
  identity,
  period,
}: BuildYearlySectionParams): YearAnnualPagesResult["dominantPlanets"] {
  const seed = buildYearlySeed({
    identity,
    period,
    section:
      "year-dominant-planets",
  });

  const profile = getSignProfile(
    identity.zodiacSign,
  );

  const availablePlanets = [
    profile.rulingPlanet,
    profile.secondaryPlanet,
    "Jupiter",
    "Saturne",
    "Vénus",
    "Mars",
    "Mercure",
    "Uranus",
    "Neptune",
    "Pluton",
    "Soleil",
    "Lune",
  ].filter(
    (
      planet,
    ): planet is string =>
      Boolean(planet),
  );

  const uniquePlanets = Array.from(
    new Set(availablePlanets),
  );

  const selectedPlanets =
    pickDistinctVariants(
      uniquePlanets,
      4,
      seed,
      10,
    );

  const planets: YearDominantPlanetItem[] =
    selectedPlanets.map(
      (
        planet,
        index,
      ): YearDominantPlanetItem => ({
        planet,

        influence: `${planet} accentue votre rapport à la ${profile.keywords[index]}. Son influence vous encourage à développer plus consciemment votre ${profile.strengths[index]}.`,

        area:
          PLANET_AREAS[planet] ??
          "évolution personnelle et décisions importantes",

        strength: calculateScore(
          seed,
          70,
          97,
          20 + index,
        ),

        message: `La présence symbolique de ${planet} vous rappelle que votre progression dépend autant de votre volonté que de votre capacité à comprendre le bon moment pour agir.`,

        advice: `Utilisez cette influence pour soutenir votre ${profile.strengths[index]}, sans laisser ${profile.challenges[index]} prendre trop de place.`,
      }),
    );

  return {
    title: "Les planètes dominantes",

    introduction: `Certaines planètes exercent une influence plus marquée sur le climat de votre année ${period.year}. Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.`,

    planets,

    dominantPlanet:
      planets[0].planet,

    synthesis: `${planets[0].planet} occupe une place centrale cette année. Son énergie est complétée par ${planets
      .slice(1)
      .map(
        (planet) =>
          planet.planet,
      )
      .join(
        ", ",
      )}, créant un mélange d’expansion, de réflexion et de transformation.`,

    advice: `Travaillez avec ces influences plutôt que de les subir. Chacune représente une capacité intérieure que vous pouvez utiliser de façon plus consciente.`,

    conclusion: `Les planètes dominantes mettent en lumière les qualités dont vous aurez le plus besoin cette année. Plus vous les exprimerez avec équilibre, plus votre progression sera harmonieuse.`,
  };
}

/*
|--------------------------------------------------------------------------
| Construction des maisons activées
|--------------------------------------------------------------------------
*/

function buildActivatedHouses({
  identity,
  period,
}: BuildYearlySectionParams): YearAnnualPagesResult["activatedHouses"] {
  const seed = buildYearlySeed({
    identity,
    period,
    section:
      "year-activated-houses",
  });

  const profile = getSignProfile(
    identity.zodiacSign,
  );

  const otherHouses = [
    1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12,
  ].filter(
    (house) =>
      !profile.houses.includes(
        house,
      ),
  );

  const selectedAdditionalHouse =
    pickVariant(
      otherHouses,
      seed,
      10,
    );

  const selectedHouses = [
    ...profile.houses,
    selectedAdditionalHouse,
  ].slice(
    0,
    4,
  );

  const houses: YearActivatedHouseItem[] =
    selectedHouses.map(
      (
        house,
        index,
      ): YearActivatedHouseItem => ({
        house,

        title:
          HOUSE_TITLES[house],

        area:
          HOUSE_AREAS[house],

        intensity: calculateScore(
          seed,
          69,
          96,
          20 + index,
        ),

        influence: `Cette maison met l’accent sur ${HOUSE_AREAS[house]}. Plusieurs événements pourront vous amener à revoir vos habitudes, vos attentes ou votre manière d’agir dans ce secteur.`,

        opportunity: `Faire évoluer ce domaine grâce à davantage de ${profile.strengths[index]}. Les décisions prises avec constance pourront créer des effets durables.`,

        advice: `Évitez que ${profile.challenges[index]} ne vous empêche de reconnaître les possibilités de progression présentes dans ce secteur.`,
      }),
    );

  return {
    title: "Les maisons activées",

    introduction: `Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année ${period.year}.`,

    houses,

    dominantHouse:
      houses[0].house,

    synthesis: `La maison ${houses[0].house}, associée à ${houses[0].title.toLowerCase()}, forme le cœur de votre évolution annuelle. Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.`,

    advice: `Observez dans quels secteurs les changements se produisent le plus fréquemment. Ils indiqueront les domaines dans lesquels votre énergie demande à être utilisée avec davantage de conscience.`,

    conclusion: `Ces maisons activées dessinent une carte de vos principales priorités. Elles vous invitent à construire un meilleur équilibre entre vos besoins personnels, vos responsabilités et vos aspirations.`,
  };
}

/*
|--------------------------------------------------------------------------
| Générateur principal des cinq pages annuelles
|--------------------------------------------------------------------------
*/

export function buildYearAnnualPages({
  identity,
  period,
}: BuildYearlySectionParams): YearAnnualPagesResult {
  return {
    overview: buildOverview({
      identity,
      period,
    }),

    majorEnergies:
      buildMajorEnergies({
        identity,
        period,
      }),

    majorAspects:
      buildMajorAspects({
        identity,
        period,
      }),

    dominantPlanets:
      buildDominantPlanets({
        identity,
        period,
      }),

    activatedHouses:
      buildActivatedHouses({
        identity,
        period,
      }),
  };
}
