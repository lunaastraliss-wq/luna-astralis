import type {
  HoroscopeIdentity,
  HoroscopePdfContent,
  HoroscopePeriodData,
  HoroscopeZodiacSign,
} from "./HoroscopePdfTypes";

import {
  getHoroscopeZodiacIconUrl,
  getHoroscopeZodiacLabel,
  normalizeHoroscopeZodiacSign,
} from "./HoroscopePdfUtils";

/*
|--------------------------------------------------------------------------
| Générateurs annuels
|--------------------------------------------------------------------------
*/

import {
  buildYearlyLove,
  buildYearlyCareer,
  buildYearlyFinance,
  buildYearlyHealth,
  buildYearlySocial,
  buildYearlyChallenge,
  buildYearlyOpportunity,
  buildYearlyTransit,
  buildYearlyQuarters,
  buildYearlyMonths,
} from "./year/data";

import {
  buildYearlyMantra,
} from "./year/mantra/buildYearlyMantra";

/*
|--------------------------------------------------------------------------
| Types annuels
|--------------------------------------------------------------------------
*/

import type {
  YearlyHoroscopeIdentity,
  YearlyHoroscopePeriod,
  YearlyHoroscopeQuarters,
  YearlyHoroscopeMonths,
  YearlyMajorEnergiesResult,
  YearlyAstrologyResult,
  YearlyMantraResult,
} from "./year/data/types";

/*
|--------------------------------------------------------------------------
| Options du constructeur
|--------------------------------------------------------------------------
*/

export type BuildYearlyHoroscopeOptions = {
  firstName?: string;

  zodiacSign:
    | HoroscopeZodiacSign
    | string;

  /*
  |--------------------------------------------------------------------------
  | Année du rapport
  |--------------------------------------------------------------------------
  |
  | Exemple :
  |
  | 2027
  | "2027"
  |
  */

  year?: number | string;

  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  birthCountry?: string;
};

/*
|--------------------------------------------------------------------------
| Résultat annuel complet
|--------------------------------------------------------------------------
*/

export type YearlyHoroscopeResult = {
  identity: HoroscopeIdentity;

  period: HoroscopePeriodData;

  content: HoroscopePdfContent;

  quarters: YearlyHoroscopeQuarters;

  months: YearlyHoroscopeMonths;

  majorEnergies: YearlyMajorEnergiesResult;

  astrology: YearlyAstrologyResult;

  mantra: YearlyMantraResult;

  zodiacIconUrl: string;
};

/*
|--------------------------------------------------------------------------
| Gestion de l’année
|--------------------------------------------------------------------------
*/

function getCurrentYear(): number {
  return new Date().getFullYear();
}

function normalizeYear(
  value?: number | string,
): number {
  if (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 1900 &&
    value <= 2200
  ) {
    return value;
  }

  if (
    typeof value === "string" &&
    /^\d{4}$/.test(value)
  ) {
    const parsedYear =
      Number(value);

    if (
      parsedYear >= 1900 &&
      parsedYear <= 2200
    ) {
      return parsedYear;
    }
  }

  return getCurrentYear();
}

function getYearDates(
  year: number,
): {
  startDate: string;
  endDate: string;
} {
  return {
    startDate:
      `${year}-01-01`,

    endDate:
      `${year}-12-31`,
  };
}

function formatHoroscopeYear(
  year: number,
): string {
  return `Année ${year}`;
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
  if (values.length === 0) {
    throw new Error(
      "Impossible de sélectionner une variante dans une liste vide.",
    );
  }

  return values[
    Math.abs(
      seed + offset * 31,
    ) % values.length
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
    Math.abs(
      seed + offset * 17,
    ) %
      range
  );
}

/*
|--------------------------------------------------------------------------
| Vue d’ensemble annuelle
|--------------------------------------------------------------------------
*/

const SUMMARY_TEXTS = [
  {
    introduction:
      "Cette année ouvre un cycle de progression, de clarification et de transformation personnelle.",

    text:
      "Les prochains mois vous inviteront à mieux définir vos priorités et à construire une direction cohérente. Certaines évolutions seront rapides, tandis que d’autres demanderont du temps, de la patience et une meilleure compréhension de vos véritables besoins.",

    advice:
      "Avancez avec constance et accordez davantage d’importance à la solidité de vos choix qu’à la rapidité des résultats.",

    highlights: [
      "Évolution",
      "Clarté",
      "Construction",
    ],
  },

  {
    introduction:
      "Une énergie de renouvellement accompagne cette nouvelle année.",

    text:
      "Vous pourriez ressentir le besoin de revoir certaines habitudes, relations ou ambitions. Les transformations les plus importantes seront celles que vous pourrez intégrer durablement à votre quotidien.",

    advice:
      "Choisissez quelques changements essentiels et donnez-leur suffisamment de temps pour produire leurs effets.",

    highlights: [
      "Renouveau",
      "Transformation",
      "Décision",
    ],
  },

  {
    introduction:
      "Cette année favorise une meilleure compréhension de votre direction personnelle.",

    text:
      "Les expériences traversées au fil des mois vous aideront à distinguer ce qui correspond réellement à vos aspirations de ce qui vous éloigne de votre équilibre. Cette lucidité soutiendra des décisions plus solides.",

    advice:
      "Conservez ce qui nourrit votre évolution et réduisez progressivement ce qui disperse votre énergie.",

    highlights: [
      "Compréhension",
      "Priorités",
      "Alignement",
    ],
  },
] as const;

/*
|--------------------------------------------------------------------------
| Énergie générale annuelle
|--------------------------------------------------------------------------
*/

const ENERGY_TEXTS = [
  {
    introduction:
      "Votre énergie évoluera par cycles distincts au cours de l’année.",

    text:
      "Certaines périodes seront propices à l’action et au développement, tandis que d’autres favoriseront davantage le recul, la récupération et la réflexion. Le respect de ces variations vous permettra de préserver votre stabilité.",

    advice:
      "Adaptez votre rythme aux différentes étapes de l’année plutôt que de maintenir constamment la même intensité.",

    highlights: [
      "Rythme",
      "Adaptation",
      "Stabilité",
    ],
  },

  {
    introduction:
      "Cette année soutient une progression régulière et structurée.",

    text:
      "Votre motivation pourra grandir à mesure que vos projets prendront une forme plus concrète. Une organisation réaliste vous aidera à transformer vos intentions en résultats durables.",

    advice:
      "Travaillez avec des objectifs trimestriels simples et vérifiez régulièrement votre progression.",

    highlights: [
      "Motivation",
      "Organisation",
      "Résultats",
    ],
  },

  {
    introduction:
      "Votre sensibilité jouera un rôle important dans la gestion de votre énergie.",

    text:
      "Les environnements, les relations et les responsabilités qui vous entourent pourront influencer fortement votre niveau de disponibilité. Une meilleure protection de votre temps facilitera votre concentration.",

    advice:
      "Préservez régulièrement des périodes de calme afin de retrouver votre énergie et votre clarté mentale.",

    highlights: [
      "Sensibilité",
      "Protection",
      "Récupération",
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
| Construction du rapport annuel
|--------------------------------------------------------------------------
*/

export function buildYearlyHoroscope({
  firstName,
  zodiacSign,
  year: requestedYear,
  birthDate,
  birthTime,
  birthCity,
  birthCountry,
}: BuildYearlyHoroscopeOptions): YearlyHoroscopeResult {
  /*
  |--------------------------------------------------------------------------
  | Signe astrologique
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | Année
  |--------------------------------------------------------------------------
  */

  const year =
    normalizeYear(requestedYear);

  const {
    startDate,
    endDate,
  } = getYearDates(year);

  const formattedYear =
    formatHoroscopeYear(year);

  const zodiacSignLabel =
    getHoroscopeZodiacLabel(
      normalizedSign,
    );

  /*
  |--------------------------------------------------------------------------
  | Graine annuelle
  |--------------------------------------------------------------------------
  |
  | Le même signe et la même année produisent toujours le même contenu.
  |
  */

  const seed =
    createSeed(
      `${normalizedSign}-${year}`,
    );

  /*
  |--------------------------------------------------------------------------
  | Identité principale
  |--------------------------------------------------------------------------
  */

  const identity: HoroscopeIdentity = {
    firstName:
      firstName ?? "",

    zodiacSign:
      normalizedSign,

    zodiacSignLabel,

    birthDate:
      birthDate ?? "",

    birthTime:
      birthTime ?? "",

    birthCity:
      birthCity ?? "",

    birthCountry:
      birthCountry ?? "",
  };

  /*
  |--------------------------------------------------------------------------
  | Période principale
  |--------------------------------------------------------------------------
  */

  const period: HoroscopePeriodData = {
    type: "year",

    label:
      formattedYear,

    startDate,

    endDate,
  };

  /*
  |--------------------------------------------------------------------------
  | Identité annuelle
  |--------------------------------------------------------------------------
  */

  const yearlyIdentity: YearlyHoroscopeIdentity = {
    firstName:
      firstName ?? "",

    birthDate:
      birthDate ?? "",

    birthTime:
      birthTime ?? "",

    birthPlace:
      [birthCity, birthCountry]
        .filter(Boolean)
        .join(", "),

    zodiacSign:
      normalizedSign,
  };

  /*
  |--------------------------------------------------------------------------
  | Période annuelle
  |--------------------------------------------------------------------------
  */

  const yearlyPeriod: YearlyHoroscopePeriod = {
    year,
  };

  /*
  |--------------------------------------------------------------------------
  | Paramètres communs
  |--------------------------------------------------------------------------
  */

  const yearlySectionParams = {
    identity:
      yearlyIdentity,

    period:
      yearlyPeriod,
  };

  /*
  |--------------------------------------------------------------------------
  | Générateurs de sections
  |--------------------------------------------------------------------------
  */

  const love =
    buildYearlyLove(
      yearlySectionParams,
    );

  const career =
    buildYearlyCareer(
      yearlySectionParams,
    );

  const money =
    buildYearlyFinance(
      yearlySectionParams,
    );

  const health =
    buildYearlyHealth(
      yearlySectionParams,
    );

  const social =
    buildYearlySocial(
      yearlySectionParams,
    );

  const challenge =
    buildYearlyChallenge(
      yearlySectionParams,
    );

  const opportunity =
    buildYearlyOpportunity(
      yearlySectionParams,
    );

  const transit =
    buildYearlyTransit(
      yearlySectionParams,
    );

  const quarters =
    buildYearlyQuarters(
      yearlySectionParams,
    );

  const months =
    buildYearlyMonths(
      yearlySectionParams,
    );

  const mantra =
    buildYearlyMantra(
      yearlySectionParams,
    );

  /*
  |--------------------------------------------------------------------------
  | Données astrologiques temporaires
  |--------------------------------------------------------------------------
  |
  | Ces objets seront remplacés lorsque les deux calculateurs annuels
  | correspondants seront branchés :
  |
  | - buildYearlyMajorEnergies
  | - calculateYearlyAstrology
  |
  */

  const majorEnergies =
    {
      title:
        "Les grandes énergies de l’année",

      introduction:
        transit.introduction,

      dominantInfluence:
        transit.dominantInfluence,

      influences: [
        ...transit.personalPlanets,
        ...transit.collectivePlanets,
      ],

      advice:
        transit.advice,

      conclusion:
        transit.conclusion,
    } as YearlyMajorEnergiesResult;

  const astrology =
    {
      year,

      dominantInfluence:
        transit.dominantInfluence,

      personalPlanets:
        transit.personalPlanets,

      collectivePlanets:
        transit.collectivePlanets,

      advice:
        transit.advice,

      conclusion:
        transit.conclusion,
    } as YearlyAstrologyResult;

  /*
  |--------------------------------------------------------------------------
  | Résumés généraux
  |--------------------------------------------------------------------------
  */

  const summary =
    pick(
      SUMMARY_TEXTS,
      seed,
      1,
    );

  const energy =
    pick(
      ENERGY_TEXTS,
      seed,
      2,
    );

  /*
  |--------------------------------------------------------------------------
  | Scores
  |--------------------------------------------------------------------------
  */

  const scores = {
    energy:
      createScore(
        seed,
        1,
      ),

    love:
      love.score,

    career:
      career.score,

    money:
      money.score,

    health:
      health.score,

    social:
      social.score,
  };

  /*
  |--------------------------------------------------------------------------
  | Contenu partagé du PDF
  |--------------------------------------------------------------------------
  */

  const content: HoroscopePdfContent = {
    reportTitle:
      "Horoscope de l’année",

    reportSubtitle:
      formattedYear,

    welcomeText:
      firstName
        ? `${firstName}, cette lecture vous accompagne à travers les principales tendances symboliques de votre année ${year}.`
        : `Cette lecture vous accompagne à travers les principales tendances symboliques de l’année ${year}.`,

    openingQuote:
      "Chaque année ouvre un nouveau cycle et révèle une direction différente.",

    /*
    |--------------------------------------------------------------------------
    | Vue d’ensemble
    |--------------------------------------------------------------------------
    */

    summary: {
      title:
        "Vue d’ensemble de l’année",

      ...summary,

      score:
        createScore(
          seed,
          7,
        ),
    },

    /*
    |--------------------------------------------------------------------------
    | Énergie
    |--------------------------------------------------------------------------
    */

    energy: {
      title:
        "Énergie de l’année",

      ...energy,

      score:
        scores.energy,
    },

    /*
    |--------------------------------------------------------------------------
    | Influences planétaires
    |--------------------------------------------------------------------------
    */

    planetaryIntroduction:
      transit.introduction,

    planetaryInfluences: [
      ...transit.personalPlanets,
      ...transit.collectivePlanets,
    ],

    /*
    |--------------------------------------------------------------------------
    | Amour
    |--------------------------------------------------------------------------
    */

    love,

    /*
    |--------------------------------------------------------------------------
    | Travail et carrière
    |--------------------------------------------------------------------------
    */

    career,

    /*
    |--------------------------------------------------------------------------
    | Finances
    |--------------------------------------------------------------------------
    */

    money,

    /*
    |--------------------------------------------------------------------------
    | Bien-être
    |--------------------------------------------------------------------------
    */

    health,

    /*
    |--------------------------------------------------------------------------
    | Vie sociale
    |--------------------------------------------------------------------------
    */

    social,

    /*
    |--------------------------------------------------------------------------
    | Défis
    |--------------------------------------------------------------------------
    */

    challengesIntroduction:
      challenge.introduction,

    challenges: [
      {
        title:
          challenge.title,

        theme:
          challenge.highlights[0] ??
          "Discernement",

        description:
          challenge.text,

        advice:
          challenge.advice,
      },

      {
        title:
          "Votre principal point de vigilance",

        theme:
          challenge.highlights[1] ??
          challenge.highlights[0] ??
          "Équilibre",

        description:
          challenge.keyPeriods?.join(
            " • ",
          ) ||
          challenge.highlights
            .slice(1)
            .join(" • ") ||
          challenge.text,

        advice:
          challenge.advice,
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | Opportunités
    |--------------------------------------------------------------------------
    */

    opportunitiesIntroduction:
      opportunity.introduction,

    opportunities: [
      {
        title:
          opportunity.title,

        theme:
          opportunity.highlights[0] ??
          "Développement",

        description:
          opportunity.text,

        action:
          opportunity.advice,
      },

      {
        title:
          "Une direction à explorer",

        theme:
          opportunity.highlights[1] ??
          opportunity.highlights[0] ??
          "Progression",

        description:
          opportunity.keyPeriods?.join(
            " • ",
          ) ||
          opportunity.highlights
            .slice(1)
            .join(" • ") ||
          opportunity.text,

        action:
          opportunity.advice,
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | Timeline partagée
    |--------------------------------------------------------------------------
    |
    | Les vraies pages annuelles utiliseront directement `quarters`.
    | Cette timeline permet aux anciens composants communs de fonctionner.
    |
    */

    timeline: [
      {
        period:
          "morning",

        title:
          quarters.quarter1.title,

        text:
          quarters.quarter1.text,

        score:
          quarters.quarter1.score,
      },

      {
        period:
          "afternoon",

        title:
          `${quarters.quarter2.title} — ${quarters.quarter3.title}`,

        text:
          `${quarters.quarter2.text} ${quarters.quarter3.text}`,

        score:
          Math.round(
            (
              quarters.quarter2.score +
              quarters.quarter3.score
            ) / 2,
          ),
      },

      {
        period:
          "evening",

        title:
          quarters.quarter4.title,

        text:
          quarters.quarter4.text,

        score:
          quarters.quarter4.score,
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | Éléments chanceux
    |--------------------------------------------------------------------------
    */

    lucky: {
      introduction:
        "Ces éléments symboliques peuvent accompagner votre année.",

      numbers:
        Array.from(
          {
            length: 6,
          },

          (_, index) =>
            1 +
            Math.abs(
              seed +
              index * 13,
            ) %
              49,
        ),

      color:
        pick(
          COLORS,
          seed,
          8,
        ),

      stone:
        pick(
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
        `Trimestre ${
          1 +
          Math.abs(seed) % 4
        }`,

      quote:
        "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.",

      keyword:
        pick(
          KEYWORDS,
          seed,
          10,
        ),
    },

    /*
    |--------------------------------------------------------------------------
    | Scores
    |--------------------------------------------------------------------------
    */

    scores,

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    conclusionTitle:
      "Votre message de l’année",

    conclusion:
      `L’année ${year} vous invite à progresser avec constance, à respecter les différentes étapes de votre évolution et à choisir vos engagements avec discernement. Vous n’avez pas besoin de tout transformer immédiatement. Une direction claire, des décisions cohérentes et des gestes réguliers peuvent produire une évolution profonde et durable.`,

    finalMessage:
      "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.",
  };

  /*
  |--------------------------------------------------------------------------
  | Résultat final
  |--------------------------------------------------------------------------
  */

  return {
    identity,
    period,
    content,
    quarters,
    months,
    majorEnergies,
    astrology,
    mantra,

    zodiacIconUrl:
      getHoroscopeZodiacIconUrl(
        normalizedSign,
      ),
  };
}
