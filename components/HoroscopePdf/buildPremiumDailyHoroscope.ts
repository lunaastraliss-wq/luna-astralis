import type {
  HoroscopeIdentity,
  HoroscopePdfContent,
  HoroscopePeriodData,
  HoroscopeZodiacSign,
} from "./HoroscopePdfTypes";

type BuildPremiumDailyHoroscopeOptions = {
  firstName?: string;
  zodiacSign: HoroscopeZodiacSign;
  zodiacSignLabel: string;

  date?: string;

  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  birthCountry?: string;
};

export type PremiumDailyHoroscopeResult = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  content: HoroscopePdfContent;
};

/*
|--------------------------------------------------------------------------
| Informations des signes
|--------------------------------------------------------------------------
*/

const SIGN_DATA: Record<
  HoroscopeZodiacSign,
  {
    element: string;
    planet: string;
    color: string;
    stone: string;
    keyword: string;
  }
> = {
  belier: {
    element: "Feu",
    planet: "Mars",
    color: "Rouge",
    stone: "Cornaline",
    keyword: "Initiative",
  },

  taureau: {
    element: "Terre",
    planet: "Vénus",
    color: "Vert",
    stone: "Quartz rose",
    keyword: "Stabilité",
  },

  gemeaux: {
    element: "Air",
    planet: "Mercure",
    color: "Jaune",
    stone: "Citrine",
    keyword: "Communication",
  },

  cancer: {
    element: "Eau",
    planet: "Lune",
    color: "Blanc",
    stone: "Pierre de lune",
    keyword: "Sensibilité",
  },

  lion: {
    element: "Feu",
    planet: "Soleil",
    color: "Or",
    stone: "Œil-de-tigre",
    keyword: "Rayonnement",
  },

  vierge: {
    element: "Terre",
    planet: "Mercure",
    color: "Beige",
    stone: "Amazonite",
    keyword: "Organisation",
  },

  balance: {
    element: "Air",
    planet: "Vénus",
    color: "Rose",
    stone: "Quartz rose",
    keyword: "Harmonie",
  },

  scorpion: {
    element: "Eau",
    planet: "Pluton",
    color: "Bordeaux",
    stone: "Obsidienne",
    keyword: "Transformation",
  },

  sagittaire: {
    element: "Feu",
    planet: "Jupiter",
    color: "Violet",
    stone: "Améthyste",
    keyword: "Expansion",
  },

  capricorne: {
    element: "Terre",
    planet: "Saturne",
    color: "Brun",
    stone: "Onyx",
    keyword: "Discipline",
  },

  verseau: {
    element: "Air",
    planet: "Uranus",
    color: "Bleu électrique",
    stone: "Labradorite",
    keyword: "Innovation",
  },

  poissons: {
    element: "Eau",
    planet: "Neptune",
    color: "Turquoise",
    stone: "Aigue-marine",
    keyword: "Intuition",
  },
};

/*
|--------------------------------------------------------------------------
| Banques de textes Premium
|--------------------------------------------------------------------------
*/

const SUMMARY_TEXTS = [
  {
    introduction:
      "Cette journée vous invite à observer attentivement ce qui se déroule autour de vous.",

    text:
      "Certaines réponses ne viendront pas immédiatement, mais votre intuition vous permettra de reconnaître les situations qui méritent votre attention. Une décision prise avec calme pourrait modifier positivement la suite de votre journée.",

    advice:
      "Prenez le temps de distinguer une véritable intuition d’une réaction provoquée par la fatigue ou l’impatience.",

    highlights: [
      "Clarté intérieure",
      "Décision réfléchie",
      "Intuition",
    ],
  },

  {
    introduction:
      "Une énergie de renouvellement accompagne votre journée.",

    text:
      "Vous pourriez ressentir le besoin de modifier une habitude, de reprendre un projet ou de clarifier une situation demeurée en suspens. Une petite action concrète pourrait provoquer un changement plus important que prévu.",

    advice:
      "Commencez par ce qui dépend directement de vous.",

    highlights: [
      "Renouveau",
      "Progression",
      "Initiative",
    ],
  },

  {
    introduction:
      "Les relations et les échanges occupent une place importante aujourd’hui.",

    text:
      "Une conversation pourrait vous aider à comprendre un détail qui vous échappait. Les mots auront leur importance, mais les silences et les attitudes pourraient également vous transmettre une information utile.",

    advice:
      "Posez une question claire plutôt que de laisser une incertitude s’installer.",

    highlights: [
      "Communication",
      "Compréhension",
      "Authenticité",
    ],
  },
];

const ENERGY_TEXTS = [
  {
    introduction:
      "Votre énergie s’installe progressivement au fil de la journée.",

    text:
      "Le début de journée pourrait demander davantage d’efforts, mais votre concentration gagnera en stabilité. Évitez de disperser votre attention entre plusieurs priorités.",

    advice:
      "Terminez une tâche importante avant d’en commencer une autre.",

    highlights: [
      "Concentration",
      "Stabilité",
      "Progression",
    ],
  },

  {
    introduction:
      "Vous disposez d’un bon élan pour faire avancer vos projets.",

    text:
      "Votre motivation sera présente, mais une tendance à vouloir tout accomplir rapidement pourrait vous fatiguer. Votre efficacité dépendra davantage de votre organisation que de votre vitesse.",

    advice:
      "Alternez les périodes d’action et les courtes pauses.",

    highlights: [
      "Motivation",
      "Dynamisme",
      "Organisation",
    ],
  },
];

const LOVE_TEXTS = [
  {
    introduction:
      "Les sentiments demandent aujourd’hui davantage de franchise.",

    text:
      "En couple, une discussion sincère pourrait permettre de dissiper une incompréhension. Célibataire, une personne intrigante pourrait attirer votre attention, mais ses intentions ne seront peut-être pas immédiatement évidentes.",

    advice:
      "Exprimez ce que vous ressentez sans chercher à provoquer une réaction particulière.",

    highlights: [
      "Sincérité",
      "Rapprochement",
      "Émotions",
    ],
  },

  {
    introduction:
      "Une énergie plus douce favorise les rapprochements.",

    text:
      "Les petites attentions auront davantage d’impact que les grandes déclarations. Une présence calme et authentique pourrait renforcer un lien qui compte pour vous.",

    advice:
      "Montrez votre affection d’une manière simple et naturelle.",

    highlights: [
      "Douceur",
      "Complicité",
      "Présence",
    ],
  },
];

const CAREER_TEXTS = [
  {
    introduction:
      "Votre capacité d’analyse constitue votre meilleur avantage.",

    text:
      "Une situation professionnelle mérite d’être examinée avant toute intervention. Vous pourriez remarquer un détail important que les autres n’ont pas encore considéré.",

    advice:
      "Préparez vos arguments et appuyez-vous sur des faits précis.",

    highlights: [
      "Analyse",
      "Stratégie",
      "Préparation",
    ],
  },

  {
    introduction:
      "Une occasion de démontrer votre efficacité peut se présenter.",

    text:
      "Votre sens de l’organisation vous aidera à régler un problème ou à faire progresser un projet. Une méthode simple et structurée pourrait produire un excellent résultat.",

    advice:
      "Commencez par la tâche qui aura le plus grand effet concret.",

    highlights: [
      "Organisation",
      "Efficacité",
      "Résultats",
    ],
  },
];

const MONEY_TEXTS = [
  {
    introduction:
      "La prudence financière reste votre meilleure alliée.",

    text:
      "Une dépense pourrait sembler urgente sans l’être réellement. Prenez le temps de vérifier les détails et de comparer les possibilités avant de prendre une décision.",

    advice:
      "Évitez les décisions impulsives et conservez une marge de sécurité.",

    highlights: [
      "Prudence",
      "Vérification",
      "Sécurité",
    ],
  },

  {
    introduction:
      "Une meilleure organisation pourrait diminuer une préoccupation financière.",

    text:
      "Le fait de revoir une échéance, une dépense ou une priorité pourrait vous redonner une impression de contrôle. Une correction simple aujourd’hui peut prévenir une difficulté future.",

    advice:
      "Examinez un poste de dépense que vous pouvez ajuster facilement.",

    highlights: [
      "Organisation",
      "Prévision",
      "Contrôle",
    ],
  },
];

const HEALTH_TEXTS = [
  {
    introduction:
      "Votre corps pourrait réclamer davantage de récupération.",

    text:
      "Une fatigue accumulée pourrait réduire votre concentration ou votre patience. Le mouvement demeure bénéfique, mais votre rythme doit respecter votre énergie réelle.",

    advice:
      "Alternez activité douce, hydratation et repos.",

    highlights: [
      "Récupération",
      "Hydratation",
      "Équilibre",
    ],
  },

  {
    introduction:
      "Votre bien-être dépend aujourd’hui de la régularité.",

    text:
      "Des habitudes simples auront davantage d’effet qu’un effort intense difficile à maintenir. Votre corps appréciera un rythme stable et réaliste.",

    advice:
      "Choisissez une routine que vous pourrez répéter sans vous épuiser.",

    highlights: [
      "Régularité",
      "Routine",
      "Stabilité",
    ],
  },
];

const SOCIAL_TEXTS = [
  {
    introduction:
      "Vous recherchez des échanges authentiques plutôt que nombreux.",

    text:
      "Une conversation profonde vous apportera davantage qu’une succession d’interactions superficielles. Vous pourriez être plus sélective dans votre entourage.",

    advice:
      "Accordez votre temps aux personnes avec lesquelles vous pouvez rester vous-même.",

    highlights: [
      "Authenticité",
      "Profondeur",
      "Sélection",
    ],
  },

  {
    introduction:
      "Votre présence pourrait attirer davantage l’attention.",

    text:
      "Vous pourriez être sollicitée ou invitée à prendre davantage de place dans un groupe. Votre manière naturelle de vous exprimer laissera une impression positive.",

    advice:
      "Partagez vos idées sans chercher à convaincre tout le monde.",

    highlights: [
      "Présence",
      "Expression",
      "Confiance",
    ],
  },
];

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

function getTorontoDate(): string {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "America/Toronto",
  }).format(new Date());
}

function formatDate(date: string): string {
  const [year, month, day] = date
    .split("-")
    .map(Number);

  return new Intl.DateTimeFormat("fr-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Toronto",
  }).format(
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
        12,
      ),
    ),
  );
}

function createSeed(value: string): number {
  return Array.from(value).reduce(
    (total, character) =>
      total + character.charCodeAt(0),
    0,
  );
}

function pick<T>(
  values: readonly T[],
  seed: number,
  offset: number,
): T {
  return values[
    (seed + offset) %
      values.length
  ];
}

function createScore(
  seed: number,
  offset: number,
): number {
  return (
    70 +
    ((seed + offset * 17) % 23)
  );
}

/*
|--------------------------------------------------------------------------
| Générateur Premium du jour
|--------------------------------------------------------------------------
*/

export function buildPremiumDailyHoroscope({
  firstName,
  zodiacSign,
  zodiacSignLabel,
  date,
  birthDate,
  birthTime,
  birthCity,
  birthCountry,
}: BuildPremiumDailyHoroscopeOptions): PremiumDailyHoroscopeResult {
  const selectedDate =
    date ?? getTorontoDate();

  const formattedDate =
    formatDate(selectedDate);

  const seed =
    createSeed(
      `${selectedDate}-${zodiacSign}`,
    );

  const signData =
    SIGN_DATA[zodiacSign];

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

  const love =
    pick(
      LOVE_TEXTS,
      seed,
      3,
    );

  const career =
    pick(
      CAREER_TEXTS,
      seed,
      4,
    );

  const money =
    pick(
      MONEY_TEXTS,
      seed,
      5,
    );

  const health =
    pick(
      HEALTH_TEXTS,
      seed,
      6,
    );

  const social =
    pick(
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
    zodiacSign,
    zodiacSignLabel,
    birthDate,
    birthTime,
    birthCity,
    birthCountry,
  };

  const period: HoroscopePeriodData = {
    type: "day",
    label: formattedDate,
    startDate: selectedDate,
    endDate: selectedDate,
  };

  const content: HoroscopePdfContent = {
    reportTitle:
      "Votre horoscope Premium du jour",

    reportSubtitle:
      `${zodiacSignLabel} — ${formattedDate}`,

    welcomeText: firstName
      ? `${firstName}, cette lecture approfondie présente les principales énergies qui pourraient influencer votre journée.`
      : "Cette lecture approfondie présente les principales énergies qui pourraient influencer votre journée.",

    openingQuote:
      "Chaque journée révèle une direction lorsque vous prenez le temps de l’observer.",

    summary: {
      title: "Vue d’ensemble",
      ...summary,
      score: createScore(seed, 7),
    },

    energy: {
      title: "Énergie générale",
      ...energy,
      score: scores.energy,
    },

    planetaryIntroduction:
      "Les influences planétaires personnalisées seront calculées selon la date, l’heure et le lieu de naissance.",

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
      title: "Vie sociale",
      ...social,
      score: scores.social,
    },

    challengesIntroduction:
      "Les défis de cette journée vous invitent à agir avec davantage de discernement.",

    challenges: [
      {
        title:
          "Éviter les conclusions rapides",

        theme:
          "Discernement",

        description:
          "Une situation pourrait sembler plus claire qu’elle ne l’est réellement.",

        advice:
          "Vérifiez les faits avant de prendre une décision définitive.",
      },

      {
        title:
          "Respecter votre rythme",

        theme:
          "Équilibre",

        description:
          "Vouloir tout accomplir immédiatement pourrait réduire votre efficacité.",

        advice:
          "Concentrez-vous sur ce qui est réellement prioritaire.",
      },
    ],

    opportunitiesIntroduction:
      "Certaines possibilités deviennent visibles lorsque vous restez attentive aux détails.",

    opportunities: [
      {
        title:
          "Clarifier une situation",

        theme:
          "Décision",

        description:
          "Une information ou une conversation pourrait modifier votre compréhension d’un problème.",

        action:
          "Notez les faits importants avant de choisir votre prochaine action.",
      },

      {
        title:
          "Faire progresser un projet",

        theme:
          "Initiative",

        description:
          "Une petite étape concrète pourrait relancer une idée laissée en attente.",

        action:
          "Consacrez un moment précis à la prochaine étape réalisable.",
      },
    ],

    timeline: [
      {
        period: "morning",
        title: "Matin",

        text:
          "Commencez par organiser vos priorités sans céder immédiatement aux urgences extérieures.",

        score:
          createScore(seed, 8),
      },

      {
        period: "afternoon",
        title: "Après-midi",

        text:
          "Votre concentration devient plus stable et favorise les décisions concrètes.",

        score:
          createScore(seed, 9),
      },

      {
        period: "evening",
        title: "Soirée",

        text:
          "Un rythme plus calme favorise les échanges sincères, la réflexion et la récupération.",

        score:
          createScore(seed, 10),
      },
    ],

    lucky: {
      introduction:
        "Ces éléments symboliques peuvent accompagner votre journée.",

      numbers: Array.from(
        {
          length: 6,
        },
        (_, index) =>
          1 +
          ((seed +
            index * 13) %
            49),
      ),

      color:
        signData.color,

      stone:
        signData.stone,

      element:
        signData.element,

      planet:
        signData.planet,

      time:
        `${8 + (seed % 13)} h ${String(
          (seed * 7) % 60,
        ).padStart(2, "0")}`,

      quote:
        "Ce que vous comprenez aujourd’hui peut transformer votre manière d’avancer demain.",

      keyword:
        signData.keyword,
    },

    scores,

    conclusionTitle:
      "Votre message du jour",

    conclusion:
      "Cette journée vous invite à avancer avec calme, discernement et constance. Vous n’avez pas besoin de tout résoudre immédiatement. Une action juste et bien choisie peut suffire à créer un mouvement positif.",

    finalMessage:
      "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.",
  };

  return {
    identity,
    period,
    content,
  };
}
