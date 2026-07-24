import type {
  HoroscopeIdentity,
  HoroscopePdfContent,
  HoroscopePeriodData,
  HoroscopeZodiacSign,
} from "./HoroscopePdfTypes";

import {
  buildHoroscopeReportTitle,
  getHoroscopeZodiacIconUrl,
  getHoroscopeZodiacLabel,
  normalizeHoroscopeZodiacSign,
} from "./HoroscopePdfUtils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type BuildMonthlyHoroscopeOptions = {
  firstName?: string;
  zodiacSign: HoroscopeZodiacSign | string;

  /*
  | Format attendu : YYYY-MM
  | Exemple : 2026-07
  */

  month?: string;

  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  birthCountry?: string;
};

export type MonthlyHoroscopeResult = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  content: HoroscopePdfContent;
  zodiacIconUrl: string;
};

/*
|--------------------------------------------------------------------------
| Gestion du mois
|--------------------------------------------------------------------------
*/

function getLocalIsoMonth(date = new Date()): string {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1,
  ).padStart(2, "0");

  return `${year}-${month}`;
}

function normalizeIsoMonth(
  value?: string,
): string {
  if (
    typeof value === "string" &&
    /^\d{4}-\d{2}$/.test(value)
  ) {
    const monthNumber = Number(
      value.slice(5, 7),
    );

    if (
      monthNumber >= 1 &&
      monthNumber <= 12
    ) {
      return value;
    }
  }

  return getLocalIsoMonth();
}

function getMonthDates(
  isoMonth: string,
): {
  startDate: string;
  endDate: string;
} {
  const [
    yearValue,
    monthValue,
  ] = isoMonth.split("-");

  const year = Number(yearValue);
  const monthIndex =
    Number(monthValue) - 1;

  const lastDay = new Date(
    year,
    monthIndex + 1,
    0,
  ).getDate();

  return {
    startDate:
      `${yearValue}-${monthValue}-01`,

    endDate:
      `${yearValue}-${monthValue}-${String(
        lastDay,
      ).padStart(2, "0")}`,
  };
}

function formatHoroscopeMonth(
  isoMonth: string,
): string {
  const [
    yearValue,
    monthValue,
  ] = isoMonth.split("-");

  const date = new Date(
    Number(yearValue),
    Number(monthValue) - 1,
    1,
  );

  const formatted =
    new Intl.DateTimeFormat(
      "fr-CA",
      {
        month: "long",
        year: "numeric",
      },
    ).format(date);

  return (
    formatted.charAt(0).toUpperCase() +
    formatted.slice(1)
  );
}

/*
|--------------------------------------------------------------------------
| Génération déterministe
|--------------------------------------------------------------------------
*/

function createSeed(
  value: string,
): number {
  let hash = 0;

  for (
    let index = 0;
    index < value.length;
    index += 1
  ) {
    hash =
      (
        hash * 31 +
        value.charCodeAt(index)
      ) >>> 0;
  }

  return hash;
}

function pick<T>(
  values: readonly T[],
  seed: number,
  offset = 0,
): T {
  return values[
    (seed + offset) %
      values.length
  ];
}

function createScore(
  seed: number,
  offset: number,
  minimum = 68,
  maximum = 94,
): number {
  const range =
    maximum - minimum + 1;

  return (
    minimum +
    (
      seed +
      offset * 17
    ) %
      range
  );
}

/*
|--------------------------------------------------------------------------
| Textes — vue d’ensemble
|--------------------------------------------------------------------------
*/

const SUMMARY_TEXTS = [
  {
    introduction:
      "Ce mois marque une période de progression intérieure et de clarification.",

    text:
      "Les événements évoluent graduellement et vous invitent à observer les changements avant de prendre des décisions définitives. Certaines réponses apparaîtront au fil des semaines plutôt qu’immédiatement.",

    advice:
      "Avancez étape par étape et laissez les situations révéler leur véritable direction.",

    highlights: [
      "Évolution",
      "Clarté",
      "Progression",
    ],
  },

  {
    introduction:
      "Une énergie de renouvellement accompagne ce nouveau mois.",

    text:
      "Vous pourriez ressentir le besoin de revoir certaines habitudes, priorités ou relations. Les changements les plus utiles seront ceux que vous pourrez maintenir dans le temps.",

    advice:
      "Choisissez une transformation réaliste plutôt que plusieurs changements simultanés.",

    highlights: [
      "Renouveau",
      "Décision",
      "Transformation",
    ],
  },

  {
    introduction:
      "Ce mois favorise une meilleure compréhension de vos besoins personnels.",

    text:
      "Vous pourriez prendre conscience de ce qui vous motive réellement, mais aussi de ce qui vous demande trop d’énergie. Cette lucidité vous permettra de mieux organiser vos efforts.",

    advice:
      "Conservez ce qui vous nourrit et réduisez ce qui vous disperse.",

    highlights: [
      "Compréhension",
      "Priorités",
      "Équilibre",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Textes — énergie
|--------------------------------------------------------------------------
*/

const ENERGY_TEXTS = [
  {
    introduction:
      "Votre énergie évoluera progressivement au fil du mois.",

    text:
      "Certaines semaines seront plus dynamiques, tandis que d’autres vous inviteront à ralentir. En respectant ces variations, vous conserverez une meilleure stabilité physique et mentale.",

    advice:
      "Adaptez votre rythme plutôt que de vous imposer la même intensité chaque jour.",

    highlights: [
      "Rythme",
      "Stabilité",
      "Adaptation",
    ],
  },

  {
    introduction:
      "Ce mois vous apporte un regain de motivation.",

    text:
      "Vous disposez d’un bon élan pour relancer un projet ou reprendre une démarche laissée en attente. Une organisation claire vous aidera à transformer cette motivation en résultats durables.",

    advice:
      "Fixez-vous des étapes précises et mesurables pour chaque semaine.",

    highlights: [
      "Motivation",
      "Action",
      "Résultats",
    ],
  },

  {
    introduction:
      "Votre sensibilité influence fortement votre niveau d’énergie ce mois-ci.",

    text:
      "Les environnements agités pourraient vous fatiguer davantage, tandis que les moments de calme favoriseront votre concentration et votre créativité.",

    advice:
      "Protégez régulièrement votre espace mental et votre temps de récupération.",

    highlights: [
      "Sensibilité",
      "Protection",
      "Récupération",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Textes — amour
|--------------------------------------------------------------------------
*/

const LOVE_TEXTS = [
  {
    introduction:
      "Votre vie affective entre dans une période de clarification.",

    text:
      "En couple, certaines conversations permettront de mieux comprendre les besoins de chacun. Célibataire, une rencontre pourrait évoluer progressivement sans révéler immédiatement tout son potentiel.",

    advice:
      "Laissez les liens se développer naturellement sans chercher à accélérer les réponses.",

    highlights: [
      "Clarification",
      "Évolution",
      "Sincérité",
    ],
  },

  {
    introduction:
      "Ce mois favorise les rapprochements et les échanges plus profonds.",

    text:
      "Les gestes simples, la disponibilité et l’écoute auront davantage d’impact que les grandes déclarations. Une relation pourrait se renforcer grâce à une présence plus constante.",

    advice:
      "Exprimez votre affection d’une manière concrète et régulière.",

    highlights: [
      "Rapprochement",
      "Écoute",
      "Complicité",
    ],
  },

  {
    introduction:
      "Votre besoin de liberté cherche à s’accorder avec votre besoin de sécurité.",

    text:
      "Vous pourriez alterner entre le désir de vous rapprocher et celui de préserver votre espace. Une communication claire empêchera les malentendus de s’installer.",

    advice:
      "Expliquez vos besoins sans vous éloigner silencieusement.",

    highlights: [
      "Liberté",
      "Sécurité",
      "Communication",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Textes — travail
|--------------------------------------------------------------------------
*/

const CAREER_TEXTS = [
  {
    introduction:
      "Ce mois favorise la planification et les décisions professionnelles réfléchies.",

    text:
      "Vous pourriez constater qu’un projet demande une meilleure structure avant de pouvoir progresser. Une méthode claire vous permettra d’éviter les efforts inutiles.",

    advice:
      "Définissez vos priorités avant d’ajouter de nouvelles responsabilités.",

    highlights: [
      "Planification",
      "Structure",
      "Progression",
    ],
  },

  {
    introduction:
      "Une occasion de démontrer vos compétences peut apparaître.",

    text:
      "Votre efficacité ou votre capacité à résoudre un problème pourrait être remarquée. Veillez toutefois à ne pas accepter une charge excessive simplement pour prouver votre valeur.",

    advice:
      "Montrez ce que vous savez faire tout en respectant vos limites.",

    highlights: [
      "Compétence",
      "Reconnaissance",
      "Limites",
    ],
  },

  {
    introduction:
      "La collaboration joue un rôle important dans votre évolution professionnelle.",

    text:
      "Une discussion, un partenariat ou une idée extérieure pourrait accélérer un projet. Vous gagnerez à rester ouverte aux suggestions tout en conservant votre jugement.",

    advice:
      "Choisissez des collaborations fondées sur des objectifs clairs.",

    highlights: [
      "Collaboration",
      "Ouverture",
      "Stratégie",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Textes — finances
|--------------------------------------------------------------------------
*/

const MONEY_TEXTS = [
  {
    introduction:
      "Ce mois vous invite à renforcer votre organisation financière.",

    text:
      "Une meilleure vue d’ensemble de vos dépenses et de vos priorités pourrait vous permettre de retrouver davantage de contrôle. Les petites corrections auront un effet cumulatif important.",

    advice:
      "Examinez vos dépenses récurrentes avant d’envisager de nouveaux engagements.",

    highlights: [
      "Organisation",
      "Contrôle",
      "Prévision",
    ],
  },

  {
    introduction:
      "Une possibilité financière mérite d’être étudiée attentivement.",

    text:
      "Une proposition, un achat ou un projet pourrait sembler intéressant, mais certaines conditions devront être vérifiées. La patience vous aidera à distinguer une véritable occasion d’une décision impulsive.",

    advice:
      "Comparez les options et vérifiez les conséquences à long terme.",

    highlights: [
      "Occasion",
      "Analyse",
      "Patience",
    ],
  },

  {
    introduction:
      "La stabilité demeure plus importante que la rapidité ce mois-ci.",

    text:
      "Vous pourriez être tentée d’accélérer une décision pour obtenir un résultat immédiat. Une approche progressive vous permettra toutefois de préserver une meilleure marge de sécurité.",

    advice:
      "Privilégiez les décisions que vous pourrez soutenir durablement.",

    highlights: [
      "Stabilité",
      "Sécurité",
      "Prudence",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Textes — bien-être
|--------------------------------------------------------------------------
*/

const HEALTH_TEXTS = [
  {
    introduction:
      "Votre bien-être dépendra principalement de la régularité.",

    text:
      "Les habitudes simples et répétées auront davantage d’effet qu’un changement intense difficile à maintenir. Votre corps bénéficiera d’un rythme stable.",

    advice:
      "Choisissez une routine réaliste que vous pourrez conserver tout le mois.",

    highlights: [
      "Régularité",
      "Routine",
      "Stabilité",
    ],
  },

  {
    introduction:
      "Ce mois vous invite à mieux équilibrer activité et récupération.",

    text:
      "Votre motivation pourrait vous pousser à dépasser vos limites pendant certaines périodes. Les pauses et le sommeil seront essentiels pour maintenir votre énergie.",

    advice:
      "Planifiez votre récupération avec la même importance que vos activités.",

    highlights: [
      "Équilibre",
      "Repos",
      "Énergie",
    ],
  },

  {
    introduction:
      "Votre calme mental influence directement votre énergie physique.",

    text:
      "Une surcharge de pensées ou de responsabilités pourrait créer davantage de fatigue que prévu. Des périodes sans sollicitations favoriseront votre récupération.",

    advice:
      "Réservez régulièrement du temps à une activité réellement apaisante.",

    highlights: [
      "Calme",
      "Détente",
      "Récupération",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Textes — vie sociale
|--------------------------------------------------------------------------
*/

const SOCIAL_TEXTS = [
  {
    introduction:
      "Ce mois privilégie la qualité des relations plutôt que leur nombre.",

    text:
      "Vous pourriez rechercher des échanges plus authentiques et vous éloigner naturellement des interactions superficielles. Une relation importante pourrait gagner en profondeur.",

    advice:
      "Accordez davantage de temps aux personnes avec lesquelles vous pouvez rester vous-même.",

    highlights: [
      "Authenticité",
      "Profondeur",
      "Sélection",
    ],
  },

  {
    introduction:
      "Votre présence attire davantage l’attention ce mois-ci.",

    text:
      "Vous pourriez être invitée à prendre plus de place dans un groupe ou à exprimer vos idées. Votre naturel produira une meilleure impression que toute tentative de convaincre.",

    advice:
      "Exprimez-vous avec confiance sans chercher l’approbation générale.",

    highlights: [
      "Présence",
      "Expression",
      "Confiance",
    ],
  },

  {
    introduction:
      "Certaines relations demandent une mise au point constructive.",

    text:
      "Un malentendu ou une tension pourrait être réglé plus facilement que prévu grâce à une conversation directe. Évitez toutefois d’aborder un sujet important sous le coup de l’émotion.",

    advice:
      "Choisissez un moment calme pour clarifier ce qui doit l’être.",

    highlights: [
      "Dialogue",
      "Apaisement",
      "Compréhension",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Éléments symboliques
|--------------------------------------------------------------------------
*/

const COLORS = [
  "Bordeaux",
  "Bleu nuit",
  "Vert émeraude",
  "Or",
  "Violet profond",
  "Rose poudré",
] as const;

const STONES = [
  "Obsidienne",
  "Améthyste",
  "Quartz rose",
  "Labradorite",
  "Citrine",
  "Pierre de lune",
] as const;

const KEYWORDS = [
  "Transformation",
  "Clarté",
  "Confiance",
  "Équilibre",
  "Renouveau",
  "Intuition",
] as const;

const SIGN_ELEMENTS: Record<
  HoroscopeZodiacSign,
  string
> = {
  belier: "Feu",
  taureau: "Terre",
  gemeaux: "Air",
  cancer: "Eau",
  lion: "Feu",
  vierge: "Terre",
  balance: "Air",
  scorpion: "Eau",
  sagittaire: "Feu",
  capricorne: "Terre",
  verseau: "Air",
  poissons: "Eau",
};

const SIGN_PLANETS: Record<
  HoroscopeZodiacSign,
  string
> = {
  belier: "Mars",
  taureau: "Vénus",
  gemeaux: "Mercure",
  cancer: "Lune",
  lion: "Soleil",
  vierge: "Mercure",
  balance: "Vénus",
  scorpion: "Pluton",
  sagittaire: "Jupiter",
  capricorne: "Saturne",
  verseau: "Uranus",
  poissons: "Neptune",
};

/*
|--------------------------------------------------------------------------
| Construction du rapport mensuel
|--------------------------------------------------------------------------
*/

export function buildMonthlyHoroscope({
  firstName,
  zodiacSign,
  month,
  birthDate,
  birthTime,
  birthCity,
  birthCountry,
}: BuildMonthlyHoroscopeOptions): MonthlyHoroscopeResult {
  const normalizedSign =
    typeof zodiacSign === "string"
      ? normalizeHoroscopeZodiacSign(
          zodiacSign,
        )
      : zodiacSign;

  if (!normalizedSign) {
    throw new Error(
      `Signe astrologique invalide : ${String(
        zodiacSign,
      )}`,
    );
  }

  const isoMonth =
    normalizeIsoMonth(month);

  const {
    startDate,
    endDate,
  } = getMonthDates(isoMonth);

  const formattedMonth =
    formatHoroscopeMonth(isoMonth);

  const zodiacSignLabel =
    getHoroscopeZodiacLabel(
      normalizedSign,
    );

  /*
  | Le contenu reste identique pendant tout le mois.
  */

  const seed = createSeed(
    `${normalizedSign}-${isoMonth}`,
  );

  const summary = pick(
    SUMMARY_TEXTS,
    seed,
    1,
  );

  const energy = pick(
    ENERGY_TEXTS,
    seed,
    2,
  );

  const love = pick(
    LOVE_TEXTS,
    seed,
    3,
  );

  const career = pick(
    CAREER_TEXTS,
    seed,
    4,
  );

  const money = pick(
    MONEY_TEXTS,
    seed,
    5,
  );

  const health = pick(
    HEALTH_TEXTS,
    seed,
    6,
  );

  const social = pick(
    SOCIAL_TEXTS,
    seed,
    7,
  );

  const scores = {
    energy: createScore(seed, 1),
    love: createScore(seed, 2),
    career: createScore(seed, 3),
    money: createScore(seed, 4),
    health: createScore(seed, 5),
    social: createScore(seed, 6),
  };

  const identity: HoroscopeIdentity = {
    firstName,
    zodiacSign: normalizedSign,
    zodiacSignLabel,
    birthDate,
    birthTime,
    birthCity,
    birthCountry,
  };

  const period: HoroscopePeriodData = {
    type: "month",
    label: formattedMonth,
    startDate,
    endDate,
  };

  const content: HoroscopePdfContent = {
    reportTitle:
      buildHoroscopeReportTitle(
        "month",
        normalizedSign,
      ),

    reportSubtitle:
      `${zodiacSignLabel} — ${formattedMonth}`,

    welcomeText: firstName
      ? `${firstName}, cette lecture vous accompagne à travers les principales tendances symboliques de votre mois.`
      : "Cette lecture vous accompagne à travers les principales tendances symboliques de votre mois.",

    openingQuote:
      "Chaque mois ouvre un nouveau cycle et révèle une direction différente.",

    summary: {
      title: "Vue d’ensemble du mois",
      ...summary,
      score: createScore(seed, 7),
    },

    energy: {
      title: "Énergie du mois",
      ...energy,
      score: scores.energy,
    },

    /*
    |--------------------------------------------------------------------------
    | Influences astrologiques réelles
    |--------------------------------------------------------------------------
    |
    | Les transits, aspects et phases lunaires seront ajoutés lorsque le
    | calcul astrologique mensuel sera branché.
    |
    | On ne génère aucune position planétaire fictive.
    |
    */

    planetaryIntroduction:
      "Cette section présentera les principales influences planétaires calculées pour le mois sélectionné.",

    planetaryInfluences: [],

    love: {
      title: "Amour et relations",
      ...love,
      score: scores.love,
    },

    career: {
      title: "Travail et carrière",
      ...career,
      score: scores.career,
    },

    money: {
      title: "Finances",
      ...money,
      score: scores.money,
    },

    health: {
      title: "Bien-être",
      ...health,
      score: scores.health,
    },

    social: {
      title: "Vie sociale et familiale",
      ...social,
      score: scores.social,
    },

    challengesIntroduction:
      "Les défis du mois vous invitent à mieux répartir votre énergie et à éviter les décisions précipitées.",

    challenges: [
      {
        title:
          "Maintenir votre constance",

        theme:
          "Progression",

        description:
          "Votre motivation pourrait varier d’une semaine à l’autre.",

        advice:
          "Appuyez-vous sur une organisation simple plutôt que sur votre motivation du moment.",
      },

      {
        title:
          "Éviter les conclusions prématurées",

        theme:
          "Discernement",

        description:
          "Une situation pourrait évoluer plusieurs fois avant la fin du mois.",

        advice:
          "Attendez de disposer de toutes les informations avant de prendre une décision définitive.",
      },
    ],

    opportunitiesIntroduction:
      "Certaines possibilités apparaîtront progressivement au fil des semaines.",

    opportunities: [
      {
        title:
          "Faire évoluer un projet",

        theme:
          "Développement",

        description:
          "Une idée laissée en attente pourrait retrouver une nouvelle direction.",

        action:
          "Définissez une étape concrète à accomplir chaque semaine.",
      },

      {
        title:
          "Clarifier une relation",

        theme:
          "Communication",

        description:
          "Une conversation importante pourrait modifier votre compréhension d’une situation.",

        action:
          "Exprimez clairement vos attentes et écoutez la réponse sans l’anticiper.",
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | Progression du mois
    |--------------------------------------------------------------------------
    |
    | Cette timeline temporaire permet aux composants communs de fonctionner.
    | Les véritables pages Semaine 1 à Semaine 5 seront ajoutées dans
    | components/HoroscopePdf/month/.
    |
    */

    timeline: [
      {
        period: "morning",
        title:
          "Début du mois",

        text:
          "Cette première période favorise l’observation, l’organisation et la définition de vos priorités.",

        score:
          createScore(seed, 8),
      },

      {
        period: "afternoon",
        title:
          "Milieu du mois",

        text:
          "L’énergie devient plus active et favorise les décisions concrètes ainsi que les échanges importants.",

        score:
          createScore(seed, 9),
      },

      {
        period: "evening",
        title:
          "Fin du mois",

        text:
          "Cette dernière période vous invite à mesurer votre progression et à préparer le cycle suivant.",

        score:
          createScore(seed, 10),
      },
    ],

    lucky: {
      introduction:
        "Ces éléments symboliques peuvent accompagner votre mois.",

      numbers: Array.from(
        {
          length: 6,
        },

        (_, index) =>
          1 +
          (
            seed +
            index * 13
          ) %
            49,
      ),

      color: pick(
        COLORS,
        seed,
        8,
      ),

      stone: pick(
        STONES,
        seed,
        9,
      ),

      element:
        SIGN_ELEMENTS[
          normalizedSign
        ],

      planet:
        SIGN_PLANETS[
          normalizedSign
        ],

      time:
        `Semaine ${
          1 + (seed % 4)
        }`,

      quote:
        "Les changements les plus importants commencent souvent par une décision discrète.",

      keyword: pick(
        KEYWORDS,
        seed,
        10,
      ),
    },

    scores,

    conclusionTitle:
      "Votre message du mois",

    conclusion:
      "Ce mois vous invite à progresser avec constance, à observer les changements au fil des semaines et à choisir vos actions avec discernement. Vous n’avez pas besoin de tout accomplir immédiatement. Une direction claire et des gestes réguliers peuvent produire une évolution durable.",

    finalMessage:
      "Votre force réside ce mois-ci dans votre capacité à respecter votre rythme tout en restant fidèle à la direction que vous avez choisie.",
  };

  return {
    identity,
    period,
    content,

    zodiacIconUrl:
      getHoroscopeZodiacIconUrl(
        normalizedSign,
      ),
  };
}
