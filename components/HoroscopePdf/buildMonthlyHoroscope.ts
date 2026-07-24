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

import {
  buildMonthlyPlanetaryInfluences,
} from "./month/buildMonthlyPlanetaryInfluences";

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

export type MonthlyWeekScores = {
  energy: number;
  love: number;
  career: number;
  money: number;
  health: number;
};

export type MonthlyWeekContent = {
  title: string;
  dateLabel: string;
  introduction: string;
  text: string;
  opportunity: string;
  vigilance: string;
  advice: string;
  scores: MonthlyWeekScores;
};

export type MonthlyHoroscopeWeeks = {
  week1: MonthlyWeekContent;
  week2: MonthlyWeekContent;
  week3: MonthlyWeekContent;
  week4: MonthlyWeekContent;
};

export type MonthlyHoroscopeResult = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  content: HoroscopePdfContent;
  weeks: MonthlyHoroscopeWeeks;
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

function formatShortDate(
  year: number,
  monthIndex: number,
  day: number,
): string {
  return new Intl.DateTimeFormat(
    "fr-CA",
    {
      day: "numeric",
      month: "long",
    },
  ).format(
    new Date(
      year,
      monthIndex,
      day,
    ),
  );
}

function getMonthlyWeekLabels(
  isoMonth: string,
): [
  string,
  string,
  string,
  string,
] {
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

  return [
    `Du ${formatShortDate(
      year,
      monthIndex,
      1,
    )} au ${formatShortDate(
      year,
      monthIndex,
      7,
    )}`,

    `Du ${formatShortDate(
      year,
      monthIndex,
      8,
    )} au ${formatShortDate(
      year,
      monthIndex,
      14,
    )}`,

    `Du ${formatShortDate(
      year,
      monthIndex,
      15,
    )} au ${formatShortDate(
      year,
      monthIndex,
      21,
    )}`,

    `Du ${formatShortDate(
      year,
      monthIndex,
      22,
    )} au ${formatShortDate(
      year,
      monthIndex,
      lastDay,
    )}`,
  ];
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

function buildWeekScores(
  seed: number,
  weekNumber: number,
): MonthlyWeekScores {
  const baseOffset =
    20 + weekNumber * 10;

  return {
    energy: createScore(
      seed,
      baseOffset + 1,
      66,
      95,
    ),

    love: createScore(
      seed,
      baseOffset + 2,
      66,
      95,
    ),

    career: createScore(
      seed,
      baseOffset + 3,
      66,
      95,
    ),

    money: createScore(
      seed,
      baseOffset + 4,
      66,
      95,
    ),

    health: createScore(
      seed,
      baseOffset + 5,
      66,
      95,
    ),
  };
}

function buildMonthlyWeek(
  source: readonly {
    title: string;
    introduction: string;
    text: string;
    opportunity: string;
    vigilance: string;
    advice: string;
  }[],
  seed: number,
  weekNumber: number,
  dateLabel: string,
): MonthlyWeekContent {
  const selected = pick(
    source,
    seed,
    30 + weekNumber,
  );

  return {
    ...selected,
    dateLabel,
    scores: buildWeekScores(
      seed,
      weekNumber,
    ),
  };
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
| Textes — progression des quatre semaines
|--------------------------------------------------------------------------
*/

const WEEK_1_TEXTS = [
  {
    title: "Poser des bases solides",

    introduction:
      "Cette première semaine vous invite à ralentir suffisamment pour définir une direction claire.",

    text:
      "Les premiers jours du mois sont favorables à l’observation, à l’organisation et aux décisions préparées avec soin. Vous gagnerez à déterminer ce qui mérite réellement votre énergie avant de multiplier les initiatives.",

    opportunity:
      "Une idée encore imprécise peut devenir un projet concret si vous lui donnez une structure simple et réaliste.",

    vigilance:
      "Évitez de vouloir obtenir immédiatement toutes les réponses. Certaines informations apparaîtront progressivement.",

    advice:
      "Commencez par une priorité essentielle. Une base stable vous permettra d’avancer plus rapidement durant les semaines suivantes.",
  },

  {
    title: "Clarifier vos priorités",

    introduction:
      "Le début du mois met en lumière ce qui doit être conservé, ajusté ou laissé derrière vous.",

    text:
      "Votre lucidité augmente lorsque vous prenez le temps d’examiner vos besoins sans tenir compte des attentes extérieures. Une décision simple pourrait alléger considérablement la suite du mois.",

    opportunity:
      "Vous pouvez reprendre le contrôle d’une situation en définissant clairement vos limites et votre objectif principal.",

    vigilance:
      "La dispersion pourrait vous faire perdre du temps sur des détails qui ne changent pas réellement le résultat.",

    advice:
      "Choisissez ce qui soutient votre équilibre à long terme plutôt que ce qui vous procure seulement un soulagement immédiat.",
  },

  {
    title: "Préparer un nouveau départ",

    introduction:
      "Une énergie de renouvellement accompagne cette première étape du mois.",

    text:
      "Vous pourriez ressentir le besoin de modifier une habitude, une méthode ou une manière de communiquer. Les changements les plus prometteurs seront ceux que vous pourrez intégrer progressivement.",

    opportunity:
      "Une nouvelle façon d’aborder un projet ou une relation peut ouvrir une possibilité que vous n’aviez pas encore envisagée.",

    vigilance:
      "Ne confondez pas nouveauté et précipitation. Un changement durable demande un minimum de préparation.",

    advice:
      "Donnez une forme concrète à votre intention : une date, une première action et un résultat réaliste à atteindre.",
  },
] as const;

const WEEK_2_TEXTS = [
  {
    title: "Passer à l’action",

    introduction:
      "Cette deuxième semaine favorise les initiatives, les échanges dynamiques et les décisions concrètes.",

    text:
      "Après avoir posé vos bases, vous disposez d’un meilleur élan pour faire progresser un projet ou régler une situation restée en attente. Votre efficacité augmentera si vous avancez selon un ordre clair.",

    opportunity:
      "Une occasion intéressante peut apparaître dans un domaine où vous hésitiez encore à agir.",

    vigilance:
      "L’enthousiasme pourrait vous pousser à accepter trop de responsabilités ou à commencer plusieurs choses simultanément.",

    advice:
      "Agissez avec confiance, mais vérifiez que chaque décision contribue réellement à votre objectif du mois.",
  },

  {
    title: "Faire avancer vos projets",

    introduction:
      "Le rythme s’accélère et vous encourage à transformer vos intentions en résultats visibles.",

    text:
      "Les démarches entreprises cette semaine peuvent produire une réponse plus rapide que prévu. Une conversation, une demande ou une proposition bien préparée favorisera votre progression.",

    opportunity:
      "Votre capacité à expliquer clairement votre idée peut attirer un soutien, un conseil ou une collaboration utile.",

    vigilance:
      "Évitez d’interpréter un délai ou une hésitation comme un refus définitif.",

    advice:
      "Concentrez votre énergie sur l’action qui peut créer le plus d’effet plutôt que sur la quantité de tâches accomplies.",
  },

  {
    title: "Affirmer votre direction",

    introduction:
      "Cette semaine renforce votre volonté et votre capacité à prendre davantage de place.",

    text:
      "Vous pourriez être amenée à défendre une idée, exprimer un besoin ou prendre une décision que vous repoussiez. Une attitude calme et déterminée donnera plus de poids à votre message.",

    opportunity:
      "Une initiative personnelle peut vous permettre de reprendre l’avantage dans une situation devenue trop passive.",

    vigilance:
      "La fermeté sera utile, mais une réaction trop rapide pourrait fermer une porte encore intéressante.",

    advice:
      "Affirmez votre choix sans chercher à convaincre tout le monde. La cohérence de vos gestes parlera pour vous.",
  },
] as const;

const WEEK_3_TEXTS = [
  {
    title: "Ajuster votre trajectoire",

    introduction:
      "La troisième semaine vous invite à observer les résultats obtenus et à corriger ce qui doit l’être.",

    text:
      "Vous disposez maintenant de suffisamment d’informations pour distinguer ce qui fonctionne de ce qui demande une autre approche. Un petit ajustement pourrait être plus efficace qu’un changement radical.",

    opportunity:
      "Une erreur, un retard ou une hésitation peut révéler une meilleure manière d’atteindre votre objectif.",

    vigilance:
      "Évitez de poursuivre une stratégie uniquement parce que vous y avez déjà consacré du temps.",

    advice:
      "Restez fidèle à votre direction, mais acceptez de modifier le chemin utilisé pour l’atteindre.",
  },

  {
    title: "Retrouver votre équilibre",

    introduction:
      "Cette période demande une meilleure répartition entre vos obligations, vos relations et votre récupération.",

    text:
      "Vous pourriez constater qu’un domaine a occupé trop de place depuis le début du mois. En rééquilibrant votre horaire ou vos priorités, vous retrouverez davantage de disponibilité mentale.",

    opportunity:
      "Une limite clairement posée peut améliorer une relation ou vous redonner du temps pour un projet important.",

    vigilance:
      "La fatigue pourrait amplifier une contrariété ou vous faire douter inutilement de vos progrès.",

    advice:
      "Avant de prendre une décision importante, assurez-vous de disposer du calme et de l’énergie nécessaires.",
  },

  {
    title: "Écouter les signes utiles",

    introduction:
      "Votre intuition devient plus précise lorsque vous la confrontez aux faits et à votre expérience.",

    text:
      "Une impression récurrente mérite votre attention, particulièrement si plusieurs événements semblent indiquer la même direction. Prenez toutefois le temps de vérifier ce que vous ressentez.",

    opportunity:
      "Une prise de conscience peut vous aider à comprendre une relation ou une situation sous un angle entièrement différent.",

    vigilance:
      "Ne laissez pas une inquiétude momentanée devenir une certitude sans preuve suffisante.",

    advice:
      "Écoutez votre ressenti, puis appuyez votre décision sur des éléments concrets et observables.",
  },
] as const;

const WEEK_4_TEXTS = [
  {
    title: "Consolider vos acquis",

    introduction:
      "La dernière partie du mois vous invite à stabiliser ce que vous avez construit et à reconnaître votre progression.",

    text:
      "Certaines démarches commencent à produire des effets plus visibles. Vous gagnerez à terminer ce qui est déjà bien engagé avant de vous tourner vers un nouvel objectif.",

    opportunity:
      "Un résultat, une réponse ou une confirmation peut vous montrer que vos efforts réguliers n’ont pas été inutiles.",

    vigilance:
      "Évitez de minimiser vos avancées simplement parce que tout n’est pas encore parfaitement terminé.",

    advice:
      "Prenez le temps de mesurer le chemin parcouru et choisissez consciemment ce que vous souhaitez poursuivre le mois prochain.",
  },

  {
    title: "Récolter les résultats",

    introduction:
      "Cette quatrième semaine met en évidence les conséquences de vos choix et de vos efforts précédents.",

    text:
      "Vous pourriez recevoir une réponse attendue, constater une amélioration ou comprendre enfin la portée d’une décision. Les résultats les plus utiles vous indiqueront aussi la prochaine étape.",

    opportunity:
      "Une réussite discrète peut devenir la base d’un développement plus important durant le prochain cycle.",

    vigilance:
      "Le désir de conclure rapidement pourrait vous faire négliger un dernier détail important.",

    advice:
      "Finalisez avec soin. Une conclusion bien préparée protège les progrès réalisés et facilite la suite.",
  },

  {
    title: "Préparer le prochain cycle",

    introduction:
      "La fin du mois crée un espace favorable à la synthèse, au détachement et à la préparation.",

    text:
      "Vous comprenez mieux ce que cette période vous a appris sur vos besoins, vos limites et vos ambitions. Cette lucidité vous permettra d’aborder le mois suivant avec une direction plus précise.",

    opportunity:
      "Une décision prise maintenant peut simplifier considérablement votre organisation ou votre état d’esprit pour la suite.",

    vigilance:
      "Ne transportez pas automatiquement dans le prochain mois une obligation qui ne correspond plus à vos priorités.",

    advice:
      "Conservez les apprentissages utiles, terminez ce qui peut l’être et laissez de l’espace à une nouvelle étape.",
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

  const weekLabels =
    getMonthlyWeekLabels(isoMonth);

  const planetary =
    buildMonthlyPlanetaryInfluences({
      zodiacSign: normalizedSign,
      zodiacSignLabel,
      isoMonth,
      seed,
    });

  const weeks: MonthlyHoroscopeWeeks = {
    week1: buildMonthlyWeek(
      WEEK_1_TEXTS,
      seed,
      1,
      weekLabels[0],
    ),

    week2: buildMonthlyWeek(
      WEEK_2_TEXTS,
      seed,
      2,
      weekLabels[1],
    ),

    week3: buildMonthlyWeek(
      WEEK_3_TEXTS,
      seed,
      3,
      weekLabels[2],
    ),

    week4: buildMonthlyWeek(
      WEEK_4_TEXTS,
      seed,
      4,
      weekLabels[3],
    ),
  };

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
    | Influences planétaires mensuelles
    |--------------------------------------------------------------------------
    |
    | Cette première version fournit une lecture astrologique symbolique et
    | déterministe selon le signe et le mois sélectionné. Elle ne présente
    | aucune position céleste ou aucun aspect astronomique non calculé.
    |
    */

    planetaryIntroduction:
      planetary.introduction,

    planetaryInfluences:
      planetary.influences,

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
    | Progression du mois — compatibilité avec les composants communs
    |--------------------------------------------------------------------------
    |
    | Les quatre pages mensuelles utilisent directement result.weeks.
    | La timeline demeure présente pour les anciens composants partagés.
    |
    */

    timeline: [
      {
        period: "morning",
        title: weeks.week1.title,
        text: weeks.week1.text,
        score: Math.round(
          (
            weeks.week1.scores.energy +
            weeks.week1.scores.love +
            weeks.week1.scores.career +
            weeks.week1.scores.money +
            weeks.week1.scores.health
          ) / 5,
        ),
      },

      {
        period: "afternoon",
        title: weeks.week2.title,
        text: weeks.week2.text,
        score: Math.round(
          (
            weeks.week2.scores.energy +
            weeks.week2.scores.love +
            weeks.week2.scores.career +
            weeks.week2.scores.money +
            weeks.week2.scores.health
          ) / 5,
        ),
      },

      {
        period: "evening",
        title:
          `${weeks.week3.title} — ${weeks.week4.title}`,

        text:
          `${weeks.week3.text} ${weeks.week4.text}`,

        score: Math.round(
          (
            weeks.week3.scores.energy +
            weeks.week3.scores.love +
            weeks.week3.scores.career +
            weeks.week3.scores.money +
            weeks.week3.scores.health +
            weeks.week4.scores.energy +
            weeks.week4.scores.love +
            weeks.week4.scores.career +
            weeks.week4.scores.money +
            weeks.week4.scores.health
          ) / 10,
        ),
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
    weeks,

    zodiacIconUrl:
      getHoroscopeZodiacIconUrl(
        normalizedSign,
      ),
  };
}
