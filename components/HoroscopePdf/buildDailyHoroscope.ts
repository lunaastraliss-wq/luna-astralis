import type {
  HoroscopeIdentity,
  HoroscopePdfContent,
  HoroscopePeriodData,
  HoroscopeZodiacSign,
} from "./HoroscopePdfTypes";

import {
  buildHoroscopeReportTitle,
  formatHoroscopeDate,
  getHoroscopeZodiacIconUrl,
  getHoroscopeZodiacLabel,
  normalizeHoroscopeZodiacSign,
} from "./HoroscopePdfUtils";

type BuildDailyHoroscopeOptions = {
  firstName?: string;
  zodiacSign: HoroscopeZodiacSign | string;
  date?: string;

  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  birthCountry?: string;
};

export type DailyHoroscopeResult = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  content: HoroscopePdfContent;
  zodiacIconUrl: string;
};

/**
 * Retourne une date au format YYYY-MM-DD.
 *
 * L’utilisation des méthodes locales évite qu’une conversion UTC
 * déplace accidentellement la date au jour précédent.
 */
function getLocalIsoDate(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/**
 * Vérifie qu’une date respecte le format YYYY-MM-DD.
 */
function normalizeIsoDate(value?: string): string {
  if (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(value)
  ) {
    return value;
  }

  return getLocalIsoDate();
}

/**
 * Crée un nombre déterministe à partir du signe et de la date.
 *
 * Cela permet de conserver exactement le même horoscope pendant
 * toute la journée, même si la page est rechargée.
 */
function createSeed(value: string): number {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function pick<T>(
  values: readonly T[],
  seed: number,
  offset = 0,
): T {
  return values[(seed + offset) % values.length];
}

function createScore(
  seed: number,
  offset: number,
  minimum = 68,
  maximum = 92,
): number {
  const range = maximum - minimum + 1;

  return minimum + ((seed + offset * 17) % range);
}

const SUMMARY_TEXTS = [
  {
    introduction:
      "Cette journée vous invite à avancer avec davantage de discernement.",
    text:
      "Certaines situations deviennent plus claires lorsque vous prenez le temps d’observer avant d’agir. Votre perception est fine aujourd’hui, mais vous gagnerez à distinguer votre intuition d’une inquiétude passagère.",
    advice:
      "Accordez-vous quelques instants de recul avant une décision importante.",
    highlights: [
      "Clarté intérieure",
      "Observation",
      "Décision réfléchie",
    ],
  },
  {
    introduction:
      "Une énergie de renouvellement accompagne votre journée.",
    text:
      "Vous pourriez ressentir le besoin de modifier une habitude, une priorité ou votre manière d’aborder une situation. Un changement discret peut produire un résultat plus important que prévu.",
    advice:
      "Commencez par une action simple, concrète et réaliste.",
    highlights: [
      "Renouveau",
      "Initiative",
      "Progression",
    ],
  },
  {
    introduction:
      "Les échanges occupent une place importante aujourd’hui.",
    text:
      "Une conversation peut vous aider à comprendre un détail qui vous échappait. Restez attentive aux mots employés, mais aussi à ce qui n’est pas exprimé directement.",
    advice:
      "Posez des questions claires plutôt que de tirer des conclusions rapides.",
    highlights: [
      "Communication",
      "Compréhension",
      "Écoute",
    ],
  },
] as const;

const ENERGY_TEXTS = [
  {
    introduction:
      "Votre énergie s’installe progressivement au fil de la journée.",
    text:
      "Le démarrage peut être plus lent, mais votre concentration devient ensuite plus stable. Évitez de disperser vos efforts entre trop de tâches simultanées.",
    advice:
      "Choisissez une priorité et terminez-la avant de passer à la suivante.",
    highlights: [
      "Concentration",
      "Stabilité",
      "Progression",
    ],
  },
  {
    introduction:
      "Votre rythme est dynamique, mais il doit rester maîtrisé.",
    text:
      "Vous disposez d’un bon élan pour accomplir ce qui demande de l’initiative. Une tendance à vouloir aller trop vite pourrait toutefois créer une fatigue inutile.",
    advice:
      "Alternez les périodes d’action et les courtes pauses.",
    highlights: [
      "Dynamisme",
      "Motivation",
      "Maîtrise",
    ],
  },
  {
    introduction:
      "Votre sensibilité influence directement votre niveau d’énergie.",
    text:
      "Une ambiance calme vous aide à rester productive, tandis que les tensions extérieures peuvent vous fatiguer davantage. Protégez votre concentration lorsque cela est possible.",
    advice:
      "Éloignez-vous temporairement des distractions qui vous épuisent.",
    highlights: [
      "Sensibilité",
      "Calme",
      "Protection",
    ],
  },
] as const;

const LOVE_TEXTS = [
  {
    introduction:
      "Les sentiments demandent aujourd’hui davantage de franchise.",
    text:
      "En couple, une discussion sincère peut dissiper une incompréhension. Célibataire, une rencontre ou un échange pourrait éveiller votre curiosité sans révéler immédiatement toutes ses intentions.",
    advice:
      "Exprimez vos besoins sans tester inutilement les réactions de l’autre.",
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
      "Les petites attentions auront plus d’impact que les grandes déclarations. Une présence calme et authentique peut renforcer un lien qui compte pour vous.",
    advice:
      "Montrez votre affection d’une manière simple et naturelle.",
    highlights: [
      "Douceur",
      "Présence",
      "Complicité",
    ],
  },
  {
    introduction:
      "Votre besoin de liberté et votre besoin de proximité cherchent un équilibre.",
    text:
      "Vous pourriez vouloir préserver votre espace tout en souhaitant être rassurée. Une communication directe évitera que l’autre interprète mal votre attitude.",
    advice:
      "Expliquez clairement ce dont vous avez besoin aujourd’hui.",
    highlights: [
      "Équilibre",
      "Liberté",
      "Clarté",
    ],
  },
] as const;

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
      "Votre sens de l’organisation vous permet de régler un problème plus rapidement que prévu. Ne sous-estimez pas la valeur d’une méthode simple et bien structurée.",
    advice:
      "Commencez par la tâche qui aura le plus grand effet concret.",
    highlights: [
      "Organisation",
      "Efficacité",
      "Résultat",
    ],
  },
  {
    introduction:
      "La collaboration peut accélérer votre progression.",
    text:
      "Même si vous préférez parfois travailler seule, une idée extérieure pourrait améliorer votre approche. Écoutez les suggestions sans abandonner votre propre jugement.",
    advice:
      "Demandez un avis précis à une personne compétente.",
    highlights: [
      "Collaboration",
      "Ouverture",
      "Progression",
    ],
  },
] as const;

const MONEY_TEXTS = [
  {
    introduction:
      "La prudence financière reste votre meilleure alliée.",
    text:
      "Une dépense peut sembler urgente sans l’être réellement. Prenez le temps de vérifier les détails, de comparer les options et de mesurer les conséquences à plus long terme.",
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
      "Une meilleure organisation peut alléger une préoccupation financière.",
    text:
      "Le simple fait de revoir vos priorités ou vos échéances peut vous redonner une impression de contrôle. Une petite correction aujourd’hui peut prévenir une difficulté future.",
    advice:
      "Examinez un poste de dépense que vous pouvez ajuster facilement.",
    highlights: [
      "Organisation",
      "Prévision",
      "Contrôle",
    ],
  },
  {
    introduction:
      "Une occasion intéressante mérite d’être évaluée sans précipitation.",
    text:
      "Une proposition ou une idée pourrait présenter un potentiel réel, mais toutes les informations ne sont peut-être pas encore disponibles.",
    advice:
      "Vérifiez les conditions complètes avant de vous engager.",
    highlights: [
      "Occasion",
      "Analyse",
      "Patience",
    ],
  },
] as const;

const HEALTH_TEXTS = [
  {
    introduction:
      "Votre corps pourrait réclamer davantage de récupération.",
    text:
      "Une fatigue accumulée peut réduire votre concentration ou votre patience. Le mouvement demeure bénéfique, mais votre rythme doit respecter votre niveau d’énergie réel.",
    advice:
      "Alternez activité douce, hydratation et repos.",
    highlights: [
      "Repos",
      "Hydratation",
      "Équilibre",
    ],
  },
  {
    introduction:
      "Votre bien-être dépend aujourd’hui de la régularité.",
    text:
      "Des habitudes simples auront davantage d’effet qu’un effort intense et difficile à maintenir. Votre corps appréciera un rythme stable.",
    advice:
      "Privilégiez une routine réaliste que vous pourrez répéter.",
    highlights: [
      "Régularité",
      "Routine",
      "Stabilité",
    ],
  },
  {
    introduction:
      "Le calme mental influence positivement votre énergie physique.",
    text:
      "Une surcharge de pensées peut vous fatiguer davantage qu’une activité concrète. Une courte période sans écran ni sollicitations pourrait vous faire du bien.",
    advice:
      "Réservez quelques minutes à une activité véritablement apaisante.",
    highlights: [
      "Calme",
      "Détente",
      "Récupération",
    ],
  },
] as const;

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
      "Votre présence attire plus facilement l’attention.",
    text:
      "Vous pourriez être sollicitée ou invitée à prendre davantage de place dans un groupe. Votre manière naturelle de vous exprimer fera une impression positive.",
    advice:
      "Partagez vos idées sans chercher à convaincre tout le monde.",
    highlights: [
      "Présence",
      "Expression",
      "Confiance",
    ],
  },
  {
    introduction:
      "Une mise au point peut améliorer une relation.",
    text:
      "Un malentendu léger pourrait être résolu rapidement si chacun s’exprime clairement. Évitez de laisser une irritation mineure s’installer.",
    advice:
      "Abordez le sujet calmement et restez centrée sur les faits.",
    highlights: [
      "Dialogue",
      "Apaisement",
      "Compréhension",
    ],
  },
] as const;

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

export function buildDailyHoroscope({
  firstName,
  zodiacSign,
  date,
  birthDate,
  birthTime,
  birthCity,
  birthCountry,
}: BuildDailyHoroscopeOptions): DailyHoroscopeResult {
  const normalizedSign =
    typeof zodiacSign === "string"
      ? normalizeHoroscopeZodiacSign(zodiacSign)
      : zodiacSign;

  if (!normalizedSign) {
    throw new Error(
      `Signe astrologique invalide : ${String(zodiacSign)}`,
    );
  }

  const isoDate = normalizeIsoDate(date);
  const zodiacSignLabel =
    getHoroscopeZodiacLabel(normalizedSign);

  const formattedDate = formatHoroscopeDate(isoDate);
  const seed = createSeed(`${normalizedSign}-${isoDate}`);

  const summary = pick(SUMMARY_TEXTS, seed, 1);
  const energy = pick(ENERGY_TEXTS, seed, 2);
  const love = pick(LOVE_TEXTS, seed, 3);
  const career = pick(CAREER_TEXTS, seed, 4);
  const money = pick(MONEY_TEXTS, seed, 5);
  const health = pick(HEALTH_TEXTS, seed, 6);
  const social = pick(SOCIAL_TEXTS, seed, 7);

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
    type: "day",
    label: formattedDate,
    startDate: isoDate,
    endDate: isoDate,
  };

  const content: HoroscopePdfContent = {
    reportTitle: buildHoroscopeReportTitle(
      "day",
      normalizedSign,
    ),

    reportSubtitle: `${zodiacSignLabel} — ${formattedDate}`,

    welcomeText: firstName
      ? `${firstName}, cette lecture vous accompagne à travers les principales tendances symboliques de votre journée.`
      : "Cette lecture vous accompagne à travers les principales tendances symboliques de votre journée.",

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

    /*
     * Les positions planétaires réelles seront ajoutées plus tard
     * depuis le moteur astrologique. On évite ici d’inventer des
     * positions ou des aspects astronomiques.
     */
    planetaryIntroduction:
      "Cette section présentera les influences planétaires calculées pour la date sélectionnée.",

    planetaryInfluences: [],

    love: {
      title: "Amour",
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
      "Les défis de la journée vous invitent à ralentir avant de réagir.",

    challenges: [
      {
        title: "Éviter les conclusions rapides",
        theme: "Discernement",
        description:
          "Une situation pourrait sembler plus claire qu’elle ne l’est réellement.",
        advice:
          "Vérifiez les faits avant de prendre une décision définitive.",
      },
      {
        title: "Respecter votre rythme",
        theme: "Équilibre",
        description:
          "Vouloir tout accomplir immédiatement pourrait diminuer votre efficacité.",
        advice:
          "Concentrez-vous sur ce qui est réellement prioritaire.",
      },
    ],

    opportunitiesIntroduction:
      "Certaines possibilités deviennent visibles lorsque vous restez attentive aux détails.",

    opportunities: [
      {
        title: "Clarifier une situation",
        theme: "Décision",
        description:
          "Une information ou une conversation peut modifier votre compréhension d’un problème.",
        action:
          "Notez les faits importants avant de choisir votre prochaine action.",
      },
      {
        title: "Faire progresser un projet",
        theme: "Initiative",
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
          "Commencez par organiser vos priorités sans céder aux urgences extérieures.",
        score: createScore(seed, 8),
      },
      {
        period: "afternoon",
        title: "Après-midi",
        text:
          "Votre concentration devient plus stable et favorise les décisions concrètes.",
        score: createScore(seed, 9),
      },
      {
        period: "evening",
        title: "Soirée",
        text:
          "Un rythme plus calme favorise les échanges sincères et la récupération.",
        score: createScore(seed, 10),
      },
    ],

    lucky: {
      introduction:
        "Ces éléments symboliques peuvent accompagner votre journée.",

      numbers: Array.from(
        { length: 6 },
        (_, index) =>
          1 + ((seed + index * 13) % 49),
      ),

      color: pick(COLORS, seed, 8),
      stone: pick(STONES, seed, 9),
      element: SIGN_ELEMENTS[normalizedSign],
      planet: SIGN_PLANETS[normalizedSign],
      time: `${8 + (seed % 13)} h ${String(
        (seed * 7) % 60,
      ).padStart(2, "0")}`,

      quote:
        "Ce que vous comprenez aujourd’hui peut transformer votre manière d’avancer demain.",

      keyword: pick(KEYWORDS, seed, 10),
    },

    scores,

    conclusionTitle: "Votre message du jour",

    conclusion:
      "Cette journée vous invite à avancer avec calme, discernement et constance. Vous n’avez pas besoin de tout régler immédiatement. Une action juste et bien choisie peut suffire à créer un mouvement positif.",

    finalMessage:
      "Votre force réside aujourd’hui dans votre capacité à observer clairement et à agir au moment opportun.",
  };

  return {
    identity,
    period,
    content,
    zodiacIconUrl:
      getHoroscopeZodiacIconUrl(normalizedSign),
  };
}
