// i18n/pages/astrologie/quinconce.ts

import type {
  Locale,
} from "@/i18n/config";

export type QuincunxCard = {
  number: string;
  title: string;
  text: string;
};

export type QuincunxPolarityCard = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type QuincunxMethod = {
  number: string;
  title: string;
  text: string;
};

export type QuincunxOrb = {
  value: string;
  title: string;
  text: string;
};

export type QuincunxExample = {
  planets: string;
  symbol: string;
  keywords: string;
  text: string;
};

export type QuincunxSign = {
  symbol: string;
  title: string;
  text: string;
};

export type QuincunxHouse = {
  title: string;
  text: string;
};

export type QuincunxComparison = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type QuincunxFaqItem = {
  question: string;
  answer: string;
};

export type QuincunxPageText = {
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    locale: string;
    language: string;
  };

  jsonLd: {
    headline: string;
    description: string;
  };

  breadcrumb: {
    home: string;
    aspects: string;
    current: string;
    ariaLabel: string;
  };

  hero: {
    badge: string;
    symbol: string;
    title: string;
    lead: string;

    data: {
      angleLabel: string;
      angleValue: string;
      dynamicLabel: string;
      dynamicValue: string;
      functionLabel: string;
      functionValue: string;
    };

    createChart: string;
    understand: string;
  };

  meaning: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  functioning: {
    title: string;
    cards: QuincunxCard[];
  };

  difficulty: {
    kicker: string;
    title: string;
    introduction: string;
    cards: QuincunxPolarityCard[];
  };

  interpretation: {
    kicker: string;
    title: string;
    methods: QuincunxMethod[];
  };

  orb: {
    title: string;
    introduction: string;
    cards: QuincunxOrb[];
    conclusion: string;
  };

  examplesSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  examples: QuincunxExample[];

  signsSection: {
    title: string;
    introduction: string;
  };

  signs: QuincunxSign[];

  housesSection: {
    title: string;
    introduction: string;
  };

  houses: QuincunxHouse[];

  comparisonSection: {
    kicker: string;
    title: string;
    cards: QuincunxComparison[];
  };

  yod: {
    kicker: string;
    title: string;
    symbol: string;
    subtitle: string;
    paragraphs: string[];
  };

  transits: {
    title: string;
    paragraphs: string[];
  };

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: QuincunxFaqItem[];
  };

  navigation: {
    ariaLabel: string;
    previous: string;
    next: string;
  };

  disclaimer: string;
};

export const QUINCONCE_TRANSLATIONS:
  Record<
    Locale,
    QuincunxPageText
  > = {
  fr: {
    metadata: {
      title:
        "Le quinconce en astrologie : signification dans le thème natal | Luna Astralis",

      description:
        "Découvrez la signification du quinconce en astrologie, son angle de 150°, ses ajustements nécessaires et son interprétation entre les planètes dans le thème natal.",

      ogTitle:
        "Le quinconce en astrologie : ajustement, inconfort et transformation",

      ogDescription:
        "Comprenez comment le quinconce relie deux planètes difficiles à harmoniser et révèle des ajustements nécessaires dans le thème natal.",

      twitterTitle:
        "Le quinconce en astrologie | Luna Astralis",

      twitterDescription:
        "Angle de 150°, ajustements, adaptation et recherche d’un nouvel équilibre dans le thème natal.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le quinconce en astrologie : signification dans le thème natal",

      description:
        "Guide complet pour comprendre le quinconce astrologique, son angle de 150 degrés, son orbe et son interprétation entre les planètes.",
    },

    breadcrumb: {
      home:
        "Accueil",

      aspects:
        "Aspects",

      current:
        "Quinconce",

      ariaLabel:
        "Fil d’Ariane",
    },

    hero: {
      badge:
        "✦ Aspect astrologique d’ajustement",

      symbol:
        "⚻",

      title:
        "Le quinconce en astrologie",

      lead:
        "Le quinconce se forme lorsque deux planètes sont séparées par un angle de 150 degrés. Il révèle un décalage persistant, une difficulté d’adaptation et la nécessité de réajuster certaines parties de la personnalité.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "150°",

        dynamicLabel:
          "Dynamique",

        dynamicValue:
          "Ajustement",

        functionLabel:
          "Fonction",

        functionValue:
          "Adaptation",
      },

      createChart:
        "Créer ma carte du ciel gratuite",

      understand:
        "Comprendre le quinconce",
    },

    meaning: {
      kicker:
        "Un équilibre difficile à maintenir",

      title:
        "Que signifie un quinconce en astrologie ?",

      paragraphs: [
        "Le quinconce est un aspect qui se forme lorsque deux planètes sont séparées par un angle d’environ 150 degrés dans le cercle zodiacal.",

        "Les fonctions représentées par les deux planètes n’entrent pas nécessairement en conflit ouvert. Elles semblent plutôt fonctionner selon des logiques qui ne se comprennent pas facilement.",

        "La personne peut avoir l’impression qu’une partie de sa vie doit être continuellement réorganisée afin de répondre aux besoins des deux planètes.",
      ],
    },

    functioning: {
      title:
        "Comment fonctionne le quinconce ?",

      cards: [
        {
          number:
            "01",

          title:
            "Deux fonctions se comprennent mal",

          text:
            "Les planètes n’utilisent pas les mêmes méthodes et peuvent sembler difficiles à coordonner.",
        },

        {
          number:
            "02",

          title:
            "Un inconfort diffus apparaît",

          text:
            "La tension n’est pas toujours évidente, mais elle peut produire une insatisfaction persistante.",
        },

        {
          number:
            "03",

          title:
            "Des ajustements deviennent nécessaires",

          text:
            "La personne doit modifier ses habitudes, ses attentes ou sa manière de réagir.",
        },

        {
          number:
            "04",

          title:
            "Une nouvelle adaptation se construit",

          text:
            "Avec le temps, l’aspect peut développer souplesse, conscience et capacité de transformation.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Une tension subtile",

      title:
        "Le quinconce est-il un aspect difficile ?",

      introduction:
        "Le quinconce est souvent considéré comme un aspect inconfortable. Sa difficulté vient du fait qu’il ne produit pas toujours une tension directe et facile à identifier.",

      cards: [
        {
          symbol:
            "⚠",

          title:
            "Les défis du quinconce",

          paragraphs: [
            "Le quinconce peut produire une sensation de décalage, de fatigue, d’insatisfaction ou d’adaptation permanente.",

            "La personne peut avoir du mal à comprendre pourquoi certaines situations reviennent malgré ses efforts.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Le potentiel du quinconce",

          paragraphs: [
            "L’aspect peut développer une grande capacité à observer, à corriger et à trouver des solutions originales.",

            "Les ajustements répétés peuvent devenir une véritable force d’adaptation et de transformation.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Les éléments à observer",

      title:
        "Comment interpréter un quinconce dans un thème natal ?",

      methods: [
        {
          number:
            "1",

          title:
            "Identifier les deux planètes",

          text:
            "Les planètes indiquent les fonctions qui ont du mal à se coordonner ou à répondre simultanément à leurs besoins.",
        },

        {
          number:
            "2",

          title:
            "Observer les signes",

          text:
            "Les signes montrent les méthodes très différentes utilisées par les deux planètes pour agir ou réagir.",
        },

        {
          number:
            "3",

          title:
            "Étudier les maisons",

          text:
            "Les maisons révèlent les domaines de vie entre lesquels les ajustements doivent être réalisés.",
        },

        {
          number:
            "4",

          title:
            "Repérer les répétitions",

          text:
            "Le quinconce se manifeste souvent par des situations récurrentes qui indiquent qu’un nouvel équilibre doit être trouvé.",
        },

        {
          number:
            "5",

          title:
            "Chercher un compromis évolutif",

          text:
            "Il ne s’agit pas de choisir une planète contre l’autre, mais de créer une manière plus souple de répondre aux deux.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe du quinconce",

      introduction:
        "L’orbe représente l’écart entre l’angle exact de 150 degrés et la position réelle des planètes. Le quinconce est généralement interprété avec une marge plus serrée que les aspects majeurs.",

      cards: [
        {
          value:
            "0° à 1°",

          title:
            "Quinconce très serré",

          text:
            "Le décalage entre les deux planètes est très visible et peut devenir un thème important de la personnalité.",
        },

        {
          value:
            "1° à 2°",

          title:
            "Quinconce fort",

          text:
            "Les ajustements sont clairement perceptibles et reviennent souvent dans plusieurs situations.",
        },

        {
          value:
            "2° à 3°",

          title:
            "Quinconce plus large",

          text:
            "L’aspect peut encore être significatif, surtout lorsqu’il implique le Soleil, la Lune ou l’Ascendant.",
        },
      ],

      conclusion:
        "Plus le quinconce est exact, plus son besoin d’ajustement est facile à reconnaître. Son importance dépend également de la place des planètes dans l’ensemble du thème.",
    },

    examplesSection: {
      kicker:
        "Exemples d’interprétation",

      title:
        "Les principaux quinconces entre les planètes",

      introduction:
        "Chaque quinconce s’exprime selon les signes, les maisons et les autres aspects du thème. Les exemples suivants présentent leur dynamique générale.",
    },

    examples: [
      {
        planets:
          "Soleil quinconce Lune",

        symbol:
          "☀ ⚻ ☽",

        keywords:
          "Identité • émotions • adaptation",

        text:
          "Le Soleil quinconce à la Lune peut créer un décalage entre l’identité consciente et les besoins émotionnels. La personne doit régulièrement ajuster ses choix afin de respecter ces deux dimensions.",
      },

      {
        planets:
          "Mercure quinconce Saturne",

        symbol:
          "☿ ⚻ ♄",

        keywords:
          "Pensée • contrôle • confiance",

        text:
          "Mercure quinconce à Saturne peut produire une hésitation entre le besoin de s’exprimer et la peur de se tromper. La confiance intellectuelle se développe progressivement.",
      },

      {
        planets:
          "Vénus quinconce Uranus",

        symbol:
          "♀ ⚻ ♅",

        keywords:
          "Relations • liberté • instabilité",

        text:
          "Vénus quinconce à Uranus peut rendre difficile l’équilibre entre proximité affective et besoin d’indépendance. Les relations demandent des ajustements fréquents.",
      },

      {
        planets:
          "Mars quinconce Neptune",

        symbol:
          "♂ ⚻ ♆",

        keywords:
          "Action • intuition • direction",

        text:
          "Mars quinconce à Neptune peut créer une difficulté à savoir quand agir ou dans quelle direction avancer. La personne doit apprendre à relier intuition et action concrète.",
      },

      {
        planets:
          "Jupiter quinconce Pluton",

        symbol:
          "♃ ⚻ ♇",

        keywords:
          "Expansion • pouvoir • transformation",

        text:
          "Jupiter quinconce à Pluton peut produire une tension entre désir de croissance et besoin de contrôle. L’ambition doit être réajustée pour éviter les excès.",
      },

      {
        planets:
          "Lune quinconce Saturne",

        symbol:
          "☽ ⚻ ♄",

        keywords:
          "Émotions • responsabilité • sécurité",

        text:
          "La Lune quinconce à Saturne peut compliquer l’expression des besoins émotionnels. La personne apprend à construire une sécurité intérieure sans nier sa sensibilité.",
      },
    ],

    signsSection: {
      title:
        "Pourquoi les signes en quinconce se comprennent-ils mal ?",

      introduction:
        "Les signes séparés par 150 degrés ne partagent généralement ni le même élément ni la même modalité. Ils possèdent donc des rythmes, des besoins et des méthodes très différents.",
    },

    signs: [
      {
        symbol:
          "♈ ⚻ ♍",

        title:
          "Bélier et Vierge",

        text:
          "Le Bélier agit rapidement et instinctivement, tandis que la Vierge analyse, organise et corrige avant d’avancer.",
      },

      {
        symbol:
          "♉ ⚻ ♎",

        title:
          "Taureau et Balance",

        text:
          "Le Taureau cherche une sécurité stable et concrète, tandis que la Balance ajuste constamment ses choix selon les relations.",
      },

      {
        symbol:
          "♊ ⚻ ♏",

        title:
          "Gémeaux et Scorpion",

        text:
          "Les Gémeaux explorent plusieurs idées avec légèreté, tandis que le Scorpion cherche la profondeur, l’intensité et la vérité cachée.",
      },

      {
        symbol:
          "♋ ⚻ ♐",

        title:
          "Cancer et Sagittaire",

        text:
          "Le Cancer protège ses repères émotionnels, tandis que le Sagittaire recherche l’expansion, la liberté et les découvertes.",
      },

      {
        symbol:
          "♌ ⚻ ♑",

        title:
          "Lion et Capricorne",

        text:
          "Le Lion veut exprimer sa créativité et être reconnu, tandis que le Capricorne privilégie la maîtrise, la structure et les résultats.",
      },

      {
        symbol:
          "♍ ⚻ ♒",

        title:
          "Vierge et Verseau",

        text:
          "La Vierge améliore les détails du quotidien, tandis que le Verseau s’intéresse aux idées nouvelles et aux transformations collectives.",
      },

      {
        symbol:
          "♎ ⚻ ♓",

        title:
          "Balance et Poissons",

        text:
          "La Balance cherche un équilibre relationnel clair, tandis que les Poissons fonctionnent davantage par intuition, compassion et fusion émotionnelle.",
      },

      {
        symbol:
          "♏ ⚻ ♈",

        title:
          "Scorpion et Bélier",

        text:
          "Le Scorpion transforme lentement et profondément, tandis que le Bélier agit immédiatement selon son instinct.",
      },

      {
        symbol:
          "♐ ⚻ ♉",

        title:
          "Sagittaire et Taureau",

        text:
          "Le Sagittaire veut explorer et élargir ses horizons, tandis que le Taureau préfère la stabilité, la prévisibilité et la continuité.",
      },

      {
        symbol:
          "♑ ⚻ ♊",

        title:
          "Capricorne et Gémeaux",

        text:
          "Le Capricorne avance avec une stratégie structurée, tandis que les Gémeaux changent rapidement de perspective et d’intérêt.",
      },

      {
        symbol:
          "♒ ⚻ ♋",

        title:
          "Verseau et Cancer",

        text:
          "Le Verseau recherche l’autonomie et une vision collective, tandis que le Cancer protège les liens personnels et la sécurité affective.",
      },

      {
        symbol:
          "♓ ⚻ ♌",

        title:
          "Poissons et Lion",

        text:
          "Les Poissons dissolvent les frontières individuelles, tandis que le Lion cherche à affirmer une identité créative et personnelle.",
      },
    ],

    housesSection: {
      title:
        "Le quinconce dans les maisons astrologiques",

      introduction:
        "Les maisons concernées indiquent les domaines de vie entre lesquels un ajustement permanent peut être nécessaire.",
    },

    houses: [
      {
        title:
          "Maisons personnelles",

        text:
          "Les maisons 1 à 3 peuvent demander des ajustements liés à l’identité, aux ressources, à la pensée et à la communication.",
      },

      {
        title:
          "Maisons intimes",

        text:
          "Les maisons 4 à 6 peuvent créer un décalage entre la famille, la créativité, les responsabilités et les habitudes quotidiennes.",
      },

      {
        title:
          "Maisons relationnelles",

        text:
          "Les maisons 7 à 9 peuvent demander des ajustements entre les relations, les transformations, les croyances et l’ouverture au monde.",
      },

      {
        title:
          "Maisons collectives",

        text:
          "Les maisons 10 à 12 peuvent produire un décalage entre la carrière, les projets sociaux et la vie intérieure.",
      },
    ],

    comparisonSection: {
      kicker:
        "Carré ou quinconce",

      title:
        "Quelle est la différence entre un quinconce et un carré ?",

      cards: [
        {
          symbol:
            "□",

          title:
            "Le carré",

          paragraphs: [
            "Le carré crée une tension directe et visible. Les deux planètes semblent se confronter et obligent la personne à agir.",

            "Sa pression peut être difficile, mais elle produit souvent une forte motivation et un désir de dépassement.",
          ],
        },

        {
          symbol:
            "⚻",

          title:
            "Le quinconce",

          paragraphs: [
            "Le quinconce crée un décalage plus subtil. Les deux planètes ne se confrontent pas directement, mais elles ont du mal à coopérer.",

            "Son inconfort demande des ajustements répétés plutôt qu’une résolution unique et définitive.",
          ],
        },
      ],
    },

    yod: {
      kicker:
        "Une figure astrologique majeure",

      title:
        "Qu’est-ce qu’un Yod en astrologie ?",

      symbol:
        "Y",

      subtitle:
        "Deux quinconces dirigés vers une planète",

      paragraphs: [
        "Un Yod se forme lorsqu’une planète reçoit deux quinconces provenant de deux autres planètes reliées entre elles par un sextile.",

        "La planète située au sommet du Yod devient un point central d’ajustement. Elle peut représenter une fonction qui exige une grande attention et plusieurs transformations.",

        "Cette configuration est parfois appelée le doigt de Dieu. Elle ne représente pas nécessairement un destin prédéterminé, mais elle peut indiquer un chemin particulièrement exigeant et évolutif.",
      ],
    },

    transits: {
      title:
        "Le quinconce dans les transits astrologiques",

      paragraphs: [
        "Un quinconce peut également se former lorsqu’une planète en mouvement crée un angle de 150 degrés avec une planète de votre thème natal.",

        "Ce transit peut correspondre à une période où une organisation, une relation, une habitude ou une direction de vie doit être réajustée.",

        "Les événements peuvent sembler imprévus ou difficiles à comprendre, mais ils attirent souvent l’attention sur un déséquilibre qui ne peut plus être ignoré.",
      ],
    },

    cta: {
      kicker:
        "Découvrez votre thème natal",

      title:
        "Avez-vous un quinconce important dans votre carte du ciel ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir vos planètes, vos maisons et les principaux aspects de votre naissance.",

      button:
        "Voir ma carte du ciel",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur le quinconce en astrologie",

      items: [
        {
          question:
            "Qu’est-ce qu’un quinconce en astrologie ?",

          answer:
            "Un quinconce se forme lorsque deux planètes sont séparées par un angle d’environ 150 degrés. Il représente un décalage entre deux fonctions qui doivent être régulièrement ajustées.",
        },

        {
          question:
            "Le quinconce est-il un aspect difficile ?",

          answer:
            "Le quinconce peut être inconfortable, car les deux planètes ont souvent du mal à se comprendre. Il ne crée pas toujours un conflit direct, mais plutôt une sensation persistante de déséquilibre.",
        },

        {
          question:
            "Quel orbe utiliser pour un quinconce ?",

          answer:
            "Le quinconce est généralement interprété avec un orbe serré, souvent autour de 2 à 3 degrés. Certains astrologues utilisent une marge légèrement plus grande avec le Soleil ou la Lune.",
        },

        {
          question:
            "Quelle est la différence entre un quinconce et un carré ?",

          answer:
            "Le carré crée une tension directe qui pousse à agir. Le quinconce produit plutôt un décalage difficile à identifier, qui demande des ajustements répétés.",
        },

        {
          question:
            "Pourquoi le quinconce est-il difficile à comprendre ?",

          answer:
            "Les signes reliés par un quinconce ne partagent généralement ni le même élément ni la même modalité. Ils fonctionnent donc selon des logiques très différentes.",
        },

        {
          question:
            "Le quinconce peut-il devenir une force ?",

          answer:
            "Oui. Avec le temps, les ajustements demandés par le quinconce peuvent développer une grande capacité d’adaptation, de conscience et de transformation personnelle.",
        },

        {
          question:
            "Comment savoir si j’ai un quinconce dans mon thème natal ?",

          answer:
            "Il faut générer votre carte du ciel et comparer la position des planètes. Deux planètes séparées par environ 150 degrés peuvent former un quinconce.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation entre les aspects astrologiques",

      previous:
        "Retour à tous les aspects : sextile",

      next:
        "Voir tous les aspects",
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Quincunx in Astrology: Meaning in the Birth Chart | Luna Astralis",

      description:
        "Discover the meaning of the quincunx in astrology, its 150° angle, the adjustments it requires and its interpretation between planets in the birth chart.",

      ogTitle:
        "Quincunx in Astrology: Adjustment, Discomfort and Transformation",

      ogDescription:
        "Understand how the quincunx connects two planets that are difficult to harmonize and reveals necessary adjustments in the birth chart.",

      twitterTitle:
        "Quincunx in Astrology | Luna Astralis",

      twitterDescription:
        "A 150° angle, adjustment, adaptation and the search for a new balance in the birth chart.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Quincunx in Astrology: Meaning in the Birth Chart",

      description:
        "A complete guide to understanding the astrological quincunx, its 150-degree angle, its orb and its interpretation between planets.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspects",

      current:
        "Quincunx",

      ariaLabel:
        "Breadcrumb",
    },

    hero: {
      badge:
        "✦ Astrological aspect of adjustment",

      symbol:
        "⚻",

      title:
        "Quincunx in Astrology",

      lead:
        "A quincunx forms when two planets are separated by an angle of 150 degrees. It reveals a persistent mismatch, difficulty adapting and the need to readjust certain parts of the personality.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "150°",

        dynamicLabel:
          "Dynamic",

        dynamicValue:
          "Adjustment",

        functionLabel:
          "Function",

        functionValue:
          "Adaptation",
      },

      createChart:
        "Create my free birth chart",

      understand:
        "Understand the quincunx",
    },

    meaning: {
      kicker:
        "A difficult balance to maintain",

      title:
        "What does a quincunx mean in astrology?",

      paragraphs: [
        "A quincunx is an aspect formed when two planets are separated by an angle of approximately 150 degrees in the zodiac circle.",

        "The functions represented by the two planets do not necessarily enter into open conflict. Instead, they seem to operate according to approaches that do not easily understand each other.",

        "The person may feel that part of life must be continually reorganized in order to meet the needs of both planets.",
      ],
    },

    functioning: {
      title:
        "How does a quincunx work?",

      cards: [
        {
          number:
            "01",

          title:
            "Two functions struggle to understand each other",

          text:
            "The planets do not use the same methods and may seem difficult to coordinate.",
        },

        {
          number:
            "02",

          title:
            "Diffuse discomfort appears",

          text:
            "The tension is not always obvious, but it may produce persistent dissatisfaction.",
        },

        {
          number:
            "03",

          title:
            "Adjustments become necessary",

          text:
            "The person must modify habits, expectations or ways of reacting.",
        },

        {
          number:
            "04",

          title:
            "A new adaptation is built",

          text:
            "Over time, the aspect may develop flexibility, awareness and capacity for transformation.",
        },
      ],
    },

    difficulty: {
      kicker:
        "A subtle tension",

      title:
        "Is the quincunx a difficult aspect?",

      introduction:
        "The quincunx is often considered an uncomfortable aspect. Its difficulty comes from the fact that it does not always produce direct tension that is easy to identify.",

      cards: [
        {
          symbol:
            "⚠",

          title:
            "The challenges of the quincunx",

          paragraphs: [
            "The quincunx may produce a sense of mismatch, fatigue, dissatisfaction or constant adaptation.",

            "The person may struggle to understand why certain situations keep returning despite their efforts.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "The potential of the quincunx",

          paragraphs: [
            "The aspect may develop a strong ability to observe, correct and find original solutions.",

            "Repeated adjustments may become a genuine strength of adaptation and transformation.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "The elements to observe",

      title:
        "How do you interpret a quincunx in a birth chart?",

      methods: [
        {
          number:
            "1",

          title:
            "Identify the two planets",

          text:
            "The planets indicate the functions that struggle to coordinate or meet their needs simultaneously.",
        },

        {
          number:
            "2",

          title:
            "Observe the signs",

          text:
            "The signs show the very different methods used by the two planets to act or react.",
        },

        {
          number:
            "3",

          title:
            "Study the houses",

          text:
            "The houses reveal the areas of life between which adjustments must be made.",
        },

        {
          number:
            "4",

          title:
            "Identify recurring patterns",

          text:
            "The quincunx often appears through recurring situations indicating that a new balance must be found.",
        },

        {
          number:
            "5",

          title:
            "Find an evolving compromise",

          text:
            "The goal is not to choose one planet over the other, but to create a more flexible way of responding to both.",
        },
      ],
    },

    orb: {
      title:
        "The orb of the quincunx",

      introduction:
        "The orb represents the difference between the exact 150-degree angle and the planets’ actual positions. The quincunx is generally interpreted with a narrower margin than major aspects.",

      cards: [
        {
          value:
            "0° to 1°",

          title:
            "Very tight quincunx",

          text:
            "The mismatch between the two planets is highly visible and may become an important personality theme.",
        },

        {
          value:
            "1° to 2°",

          title:
            "Strong quincunx",

          text:
            "The adjustments are clearly noticeable and often return in several situations.",
        },

        {
          value:
            "2° to 3°",

          title:
            "Wider quincunx",

          text:
            "The aspect may still be significant, especially when it involves the Sun, Moon or Ascendant.",
        },
      ],

      conclusion:
        "The more exact the quincunx, the easier its need for adjustment is to recognize. Its importance also depends on the role of the planets within the entire chart.",
    },

    examplesSection: {
      kicker:
        "Interpretation examples",

      title:
        "The main quincunxes between planets",

      introduction:
        "Each quincunx is expressed according to its signs, houses and the other aspects of the chart. The following examples present their general dynamics.",
    },

    examples: [
      {
        planets:
          "Sun quincunx Moon",

        symbol:
          "☀ ⚻ ☽",

        keywords:
          "Identity • emotions • adaptation",

        text:
          "The Sun quincunx the Moon may create a mismatch between conscious identity and emotional needs. The person must regularly adjust choices in order to respect both dimensions.",
      },

      {
        planets:
          "Mercury quincunx Saturn",

        symbol:
          "☿ ⚻ ♄",

        keywords:
          "Thinking • control • confidence",

        text:
          "Mercury quincunx Saturn may create hesitation between the need to express oneself and the fear of making a mistake. Intellectual confidence develops gradually.",
      },

      {
        planets:
          "Venus quincunx Uranus",

        symbol:
          "♀ ⚻ ♅",

        keywords:
          "Relationships • freedom • instability",

        text:
          "Venus quincunx Uranus may make it difficult to balance emotional closeness with the need for independence. Relationships require frequent adjustments.",
      },

      {
        planets:
          "Mars quincunx Neptune",

        symbol:
          "♂ ⚻ ♆",

        keywords:
          "Action • intuition • direction",

        text:
          "Mars quincunx Neptune may create difficulty knowing when to act or which direction to take. The person must learn to connect intuition with practical action.",
      },

      {
        planets:
          "Jupiter quincunx Pluto",

        symbol:
          "♃ ⚻ ♇",

        keywords:
          "Expansion • power • transformation",

        text:
          "Jupiter quincunx Pluto may create tension between the desire for growth and the need for control. Ambition must be readjusted to avoid excess.",
      },

      {
        planets:
          "Moon quincunx Saturn",

        symbol:
          "☽ ⚻ ♄",

        keywords:
          "Emotions • responsibility • security",

        text:
          "The Moon quincunx Saturn may complicate the expression of emotional needs. The person learns to build inner security without denying sensitivity.",
      },
    ],

    signsSection: {
      title:
        "Why do quincunx signs struggle to understand each other?",

      introduction:
        "Signs separated by 150 degrees generally share neither the same element nor the same modality. They therefore possess very different rhythms, needs and methods.",
    },

    signs: [
      {
        symbol:
          "♈ ⚻ ♍",

        title:
          "Aries and Virgo",

        text:
          "Aries acts quickly and instinctively, while Virgo analyzes, organizes and corrects before moving forward.",
      },

      {
        symbol:
          "♉ ⚻ ♎",

        title:
          "Taurus and Libra",

        text:
          "Taurus seeks stable and practical security, while Libra constantly adjusts choices according to relationships.",
      },

      {
        symbol:
          "♊ ⚻ ♏",

        title:
          "Gemini and Scorpio",

        text:
          "Gemini explores several ideas lightly, while Scorpio seeks depth, intensity and hidden truth.",
      },

      {
        symbol:
          "♋ ⚻ ♐",

        title:
          "Cancer and Sagittarius",

        text:
          "Cancer protects emotional reference points, while Sagittarius seeks expansion, freedom and discovery.",
      },

      {
        symbol:
          "♌ ⚻ ♑",

        title:
          "Leo and Capricorn",

        text:
          "Leo wants to express creativity and be recognized, while Capricorn prioritizes mastery, structure and results.",
      },

      {
        symbol:
          "♍ ⚻ ♒",

        title:
          "Virgo and Aquarius",

        text:
          "Virgo improves the details of everyday life, while Aquarius focuses on new ideas and collective transformation.",
      },

      {
        symbol:
          "♎ ⚻ ♓",

        title:
          "Libra and Pisces",

        text:
          "Libra seeks clear relational balance, while Pisces operates more through intuition, compassion and emotional fusion.",
      },

      {
        symbol:
          "♏ ⚻ ♈",

        title:
          "Scorpio and Aries",

        text:
          "Scorpio transforms slowly and deeply, while Aries acts immediately according to instinct.",
      },

      {
        symbol:
          "♐ ⚻ ♉",

        title:
          "Sagittarius and Taurus",

        text:
          "Sagittarius wants to explore and broaden horizons, while Taurus prefers stability, predictability and continuity.",
      },

      {
        symbol:
          "♑ ⚻ ♊",

        title:
          "Capricorn and Gemini",

        text:
          "Capricorn advances with a structured strategy, while Gemini quickly changes perspective and interest.",
      },

      {
        symbol:
          "♒ ⚻ ♋",

        title:
          "Aquarius and Cancer",

        text:
          "Aquarius seeks autonomy and a collective vision, while Cancer protects personal bonds and emotional security.",
      },

      {
        symbol:
          "♓ ⚻ ♌",

        title:
          "Pisces and Leo",

        text:
          "Pisces dissolves individual boundaries, while Leo seeks to affirm a creative and personal identity.",
      },
    ],

    housesSection: {
      title:
        "The quincunx in the astrological houses",

      introduction:
        "The houses involved indicate the areas of life between which permanent adjustment may be necessary.",
    },

    houses: [
      {
        title:
          "Personal houses",

        text:
          "Houses 1 to 3 may require adjustments connected with identity, resources, thinking and communication.",
      },

      {
        title:
          "Intimate houses",

        text:
          "Houses 4 to 6 may create a mismatch between family, creativity, responsibilities and everyday habits.",
      },

      {
        title:
          "Relational houses",

        text:
          "Houses 7 to 9 may require adjustments between relationships, transformation, beliefs and openness to the world.",
      },

      {
        title:
          "Collective houses",

        text:
          "Houses 10 to 12 may create a mismatch between career, social projects and inner life.",
      },
    ],

    comparisonSection: {
      kicker:
        "Square or quincunx",

      title:
        "What is the difference between a quincunx and a square?",

      cards: [
        {
          symbol:
            "□",

          title:
            "The square",

          paragraphs: [
            "The square creates direct and visible tension. The two planets appear to confront each other and force the person to act.",

            "Its pressure may be difficult, but it often produces strong motivation and a desire to overcome obstacles.",
          ],
        },

        {
          symbol:
            "⚻",

          title:
            "The quincunx",

          paragraphs: [
            "The quincunx creates a subtler mismatch. The two planets do not directly confront each other, but they struggle to cooperate.",

            "Its discomfort requires repeated adjustments rather than one single and final resolution.",
          ],
        },
      ],
    },

    yod: {
      kicker:
        "A major astrological pattern",

      title:
        "What is a Yod in astrology?",

      symbol:
        "Y",

      subtitle:
        "Two quincunxes directed toward one planet",

      paragraphs: [
        "A Yod forms when one planet receives two quincunxes from two other planets connected to each other by a sextile.",

        "The planet at the apex of the Yod becomes a central point of adjustment. It may represent a function requiring great attention and several transformations.",

        "This configuration is sometimes called the Finger of God. It does not necessarily represent a predetermined destiny, but it may indicate a particularly demanding and developmental path.",
      ],
    },

    transits: {
      title:
        "The quincunx in astrological transits",

      paragraphs: [
        "A quincunx may also form when a moving planet creates a 150-degree angle with a planet in your birth chart.",

        "This transit may correspond to a period when an organization, relationship, habit or direction in life must be readjusted.",

        "Events may appear unexpected or difficult to understand, but they often draw attention to an imbalance that can no longer be ignored.",
      ],
    },

    cta: {
      kicker:
        "Discover your birth chart",

      title:
        "Do you have an important quincunx in your birth chart?",

      text:
        "Generate your free birth chart to discover your planets, houses and the main aspects present at your birth.",

      button:
        "View my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about the quincunx in astrology",

      items: [
        {
          question:
            "What is a quincunx in astrology?",

          answer:
            "A quincunx forms when two planets are separated by an angle of approximately 150 degrees. It represents a mismatch between two functions that must be regularly adjusted.",
        },

        {
          question:
            "Is the quincunx a difficult aspect?",

          answer:
            "The quincunx may be uncomfortable because the two planets often struggle to understand each other. It does not always create direct conflict, but rather a persistent sense of imbalance.",
        },

        {
          question:
            "What orb should be used for a quincunx?",

          answer:
            "The quincunx is generally interpreted with a narrow orb, often around 2 to 3 degrees. Some astrologers use a slightly wider margin when the Sun or Moon is involved.",
        },

        {
          question:
            "What is the difference between a quincunx and a square?",

          answer:
            "A square creates direct tension that pushes a person to act. A quincunx produces a mismatch that is harder to identify and requires repeated adjustments.",
        },

        {
          question:
            "Why is the quincunx difficult to understand?",

          answer:
            "Signs connected by a quincunx generally share neither the same element nor the same modality. They therefore function according to very different approaches.",
        },

        {
          question:
            "Can a quincunx become a strength?",

          answer:
            "Yes. Over time, the adjustments required by a quincunx may develop strong adaptability, awareness and personal transformation.",
        },

        {
          question:
            "How can I know whether I have a quincunx in my birth chart?",

          answer:
            "You must generate your birth chart and compare the positions of the planets. Two planets separated by approximately 150 degrees may form a quincunx.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation between astrological aspects",

      previous:
        "Back to all aspects: sextile",

      next:
        "View all aspects",
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "El quincuncio en astrología: significado en la carta natal | Luna Astralis",

      description:
        "Descubre el significado del quincuncio en astrología, su ángulo de 150°, los ajustes que requiere y su interpretación entre los planetas de la carta natal.",

      ogTitle:
        "El quincuncio en astrología: ajuste, incomodidad y transformación",

      ogDescription:
        "Comprende cómo el quincuncio relaciona dos planetas difíciles de armonizar y revela los ajustes necesarios en la carta natal.",

      twitterTitle:
        "El quincuncio en astrología | Luna Astralis",

      twitterDescription:
        "Ángulo de 150°, ajustes, adaptación y búsqueda de un nuevo equilibrio en la carta natal.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "El quincuncio en astrología: significado en la carta natal",

      description:
        "Guía completa para comprender el quincuncio astrológico, su ángulo de 150 grados, su orbe y su interpretación entre los planetas.",
    },

    breadcrumb: {
      home:
        "Inicio",

      aspects:
        "Aspectos",

      current:
        "Quincuncio",

      ariaLabel:
        "Migas de pan",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico de ajuste",

      symbol:
        "⚻",

      title:
        "El quincuncio en astrología",

      lead:
        "El quincuncio se forma cuando dos planetas están separados por un ángulo de 150 grados. Revela un desajuste persistente, una dificultad de adaptación y la necesidad de reajustar ciertas partes de la personalidad.",

      data: {
        angleLabel:
          "Ángulo",

        angleValue:
          "150°",

        dynamicLabel:
          "Dinámica",

        dynamicValue:
          "Ajuste",

        functionLabel:
          "Función",

        functionValue:
          "Adaptación",
      },

      createChart:
        "Crear mi carta natal gratis",

      understand:
        "Comprender el quincuncio",
    },

    meaning: {
      kicker:
        "Un equilibrio difícil de mantener",

      title:
        "¿Qué significa un quincuncio en astrología?",

      paragraphs: [
        "El quincuncio es un aspecto que se forma cuando dos planetas están separados por un ángulo de aproximadamente 150 grados en el círculo zodiacal.",

        "Las funciones representadas por los dos planetas no entran necesariamente en un conflicto abierto. Más bien parecen funcionar según lógicas que no se comprenden fácilmente.",

        "La persona puede tener la impresión de que una parte de su vida debe reorganizarse continuamente para responder a las necesidades de ambos planetas.",
      ],
    },

    functioning: {
      title:
        "¿Cómo funciona el quincuncio?",

      cards: [
        {
          number:
            "01",

          title:
            "Dos funciones se comprenden con dificultad",

          text:
            "Los planetas no utilizan los mismos métodos y pueden parecer difíciles de coordinar.",
        },

        {
          number:
            "02",

          title:
            "Aparece una incomodidad difusa",

          text:
            "La tensión no siempre es evidente, pero puede producir una insatisfacción persistente.",
        },

        {
          number:
            "03",

          title:
            "Los ajustes se vuelven necesarios",

          text:
            "La persona debe modificar sus hábitos, expectativas o manera de reaccionar.",
        },

        {
          number:
            "04",

          title:
            "Se construye una nueva adaptación",

          text:
            "Con el tiempo, el aspecto puede desarrollar flexibilidad, conciencia y capacidad de transformación.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Una tensión sutil",

      title:
        "¿Es el quincuncio un aspecto difícil?",

      introduction:
        "El quincuncio suele considerarse un aspecto incómodo. Su dificultad procede del hecho de que no siempre produce una tensión directa y fácil de identificar.",

      cards: [
        {
          symbol:
            "⚠",

          title:
            "Los desafíos del quincuncio",

          paragraphs: [
            "El quincuncio puede producir una sensación de desajuste, cansancio, insatisfacción o adaptación permanente.",

            "La persona puede tener dificultades para comprender por qué ciertas situaciones se repiten a pesar de sus esfuerzos.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "El potencial del quincuncio",

          paragraphs: [
            "El aspecto puede desarrollar una gran capacidad para observar, corregir y encontrar soluciones originales.",

            "Los ajustes repetidos pueden convertirse en una verdadera fortaleza de adaptación y transformación.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Los elementos que deben observarse",

      title:
        "¿Cómo interpretar un quincuncio en una carta natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar los dos planetas",

          text:
            "Los planetas indican las funciones que tienen dificultades para coordinarse o responder simultáneamente a sus necesidades.",
        },

        {
          number:
            "2",

          title:
            "Observar los signos",

          text:
            "Los signos muestran los métodos muy diferentes que utilizan los dos planetas para actuar o reaccionar.",
        },

        {
          number:
            "3",

          title:
            "Estudiar las casas",

          text:
            "Las casas revelan los ámbitos de vida entre los que deben realizarse los ajustes.",
        },

        {
          number:
            "4",

          title:
            "Detectar las repeticiones",

          text:
            "El quincuncio suele manifestarse mediante situaciones recurrentes que indican que debe encontrarse un nuevo equilibrio.",
        },

        {
          number:
            "5",

          title:
            "Buscar un compromiso evolutivo",

          text:
            "No se trata de elegir un planeta contra el otro, sino de crear una manera más flexible de responder a ambos.",
        },
      ],
    },

    orb: {
      title:
        "El orbe del quincuncio",

      introduction:
        "El orbe representa la diferencia entre el ángulo exacto de 150 grados y la posición real de los planetas. El quincuncio suele interpretarse con un margen más estrecho que los aspectos mayores.",

      cards: [
        {
          value:
            "0° a 1°",

          title:
            "Quincuncio muy cerrado",

          text:
            "El desajuste entre los dos planetas es muy visible y puede convertirse en un tema importante de la personalidad.",
        },

        {
          value:
            "1° a 2°",

          title:
            "Quincuncio fuerte",

          text:
            "Los ajustes son claramente perceptibles y suelen repetirse en varias situaciones.",
        },

        {
          value:
            "2° a 3°",

          title:
            "Quincuncio más amplio",

          text:
            "El aspecto aún puede ser significativo, especialmente cuando implica al Sol, la Luna o el Ascendente.",
        },
      ],

      conclusion:
        "Cuanto más exacto es el quincuncio, más fácil resulta reconocer su necesidad de ajuste. Su importancia también depende del papel de los planetas en el conjunto de la carta natal.",
    },

    examplesSection: {
      kicker:
        "Ejemplos de interpretación",

      title:
        "Los principales quincuncios entre los planetas",

      introduction:
        "Cada quincuncio se expresa según los signos, las casas y los demás aspectos de la carta. Los siguientes ejemplos presentan su dinámica general.",
    },

    examples: [
      {
        planets:
          "Sol quincuncio Luna",

        symbol:
          "☀ ⚻ ☽",

        keywords:
          "Identidad • emociones • adaptación",

        text:
          "El Sol en quincuncio con la Luna puede crear un desajuste entre la identidad consciente y las necesidades emocionales. La persona debe ajustar regularmente sus decisiones para respetar ambas dimensiones.",
      },

      {
        planets:
          "Mercurio quincuncio Saturno",

        symbol:
          "☿ ⚻ ♄",

        keywords:
          "Pensamiento • control • confianza",

        text:
          "Mercurio en quincuncio con Saturno puede producir dudas entre la necesidad de expresarse y el miedo a equivocarse. La confianza intelectual se desarrolla progresivamente.",
      },

      {
        planets:
          "Venus quincuncio Urano",

        symbol:
          "♀ ⚻ ♅",

        keywords:
          "Relaciones • libertad • inestabilidad",

        text:
          "Venus en quincuncio con Urano puede dificultar el equilibrio entre la cercanía afectiva y la necesidad de independencia. Las relaciones requieren ajustes frecuentes.",
      },

      {
        planets:
          "Marte quincuncio Neptuno",

        symbol:
          "♂ ⚻ ♆",

        keywords:
          "Acción • intuición • dirección",

        text:
          "Marte en quincuncio con Neptuno puede crear dificultades para saber cuándo actuar o en qué dirección avanzar. La persona debe aprender a relacionar la intuición con la acción concreta.",
      },

      {
        planets:
          "Júpiter quincuncio Plutón",

        symbol:
          "♃ ⚻ ♇",

        keywords:
          "Expansión • poder • transformación",

        text:
          "Júpiter en quincuncio con Plutón puede producir tensión entre el deseo de crecimiento y la necesidad de control. La ambición debe reajustarse para evitar los excesos.",
      },

      {
        planets:
          "Luna quincuncio Saturno",

        symbol:
          "☽ ⚻ ♄",

        keywords:
          "Emociones • responsabilidad • seguridad",

        text:
          "La Luna en quincuncio con Saturno puede complicar la expresión de las necesidades emocionales. La persona aprende a construir seguridad interior sin negar su sensibilidad.",
      },
    ],

    signsSection: {
      title:
        "¿Por qué los signos en quincuncio se comprenden con dificultad?",

      introduction:
        "Los signos separados por 150 grados generalmente no comparten ni el mismo elemento ni la misma modalidad. Por lo tanto, poseen ritmos, necesidades y métodos muy diferentes.",
    },

    signs: [
      {
        symbol:
          "♈ ⚻ ♍",

        title:
          "Aries y Virgo",

        text:
          "Aries actúa rápida e instintivamente, mientras que Virgo analiza, organiza y corrige antes de avanzar.",
      },

      {
        symbol:
          "♉ ⚻ ♎",

        title:
          "Tauro y Libra",

        text:
          "Tauro busca una seguridad estable y concreta, mientras que Libra ajusta constantemente sus decisiones según las relaciones.",
      },

      {
        symbol:
          "♊ ⚻ ♏",

        title:
          "Géminis y Escorpio",

        text:
          "Géminis explora varias ideas con ligereza, mientras que Escorpio busca profundidad, intensidad y verdades ocultas.",
      },

      {
        symbol:
          "♋ ⚻ ♐",

        title:
          "Cáncer y Sagitario",

        text:
          "Cáncer protege sus referencias emocionales, mientras que Sagitario busca expansión, libertad y descubrimientos.",
      },

      {
        symbol:
          "♌ ⚻ ♑",

        title:
          "Leo y Capricornio",

        text:
          "Leo quiere expresar su creatividad y recibir reconocimiento, mientras que Capricornio prioriza el dominio, la estructura y los resultados.",
      },

      {
        symbol:
          "♍ ⚻ ♒",

        title:
          "Virgo y Acuario",

        text:
          "Virgo mejora los detalles de la vida cotidiana, mientras que Acuario se interesa por las ideas nuevas y las transformaciones colectivas.",
      },

      {
        symbol:
          "♎ ⚻ ♓",

        title:
          "Libra y Piscis",

        text:
          "Libra busca un equilibrio relacional claro, mientras que Piscis funciona principalmente mediante la intuición, la compasión y la fusión emocional.",
      },

      {
        symbol:
          "♏ ⚻ ♈",

        title:
          "Escorpio y Aries",

        text:
          "Escorpio se transforma lenta y profundamente, mientras que Aries actúa inmediatamente según su instinto.",
      },

      {
        symbol:
          "♐ ⚻ ♉",

        title:
          "Sagitario y Tauro",

        text:
          "Sagitario quiere explorar y ampliar sus horizontes, mientras que Tauro prefiere estabilidad, previsibilidad y continuidad.",
      },

      {
        symbol:
          "♑ ⚻ ♊",

        title:
          "Capricornio y Géminis",

        text:
          "Capricornio avanza con una estrategia estructurada, mientras que Géminis cambia rápidamente de perspectiva e interés.",
      },

      {
        symbol:
          "♒ ⚻ ♋",

        title:
          "Acuario y Cáncer",

        text:
          "Acuario busca autonomía y una visión colectiva, mientras que Cáncer protege los vínculos personales y la seguridad emocional.",
      },

      {
        symbol:
          "♓ ⚻ ♌",

        title:
          "Piscis y Leo",

        text:
          "Piscis disuelve los límites individuales, mientras que Leo busca afirmar una identidad creativa y personal.",
      },
    ],

    housesSection: {
      title:
        "El quincuncio en las casas astrológicas",

      introduction:
        "Las casas implicadas indican los ámbitos de vida entre los que puede ser necesario realizar ajustes permanentes.",
    },

    houses: [
      {
        title:
          "Casas personales",

        text:
          "Las casas 1 a 3 pueden requerir ajustes relacionados con la identidad, los recursos, el pensamiento y la comunicación.",
      },

      {
        title:
          "Casas íntimas",

        text:
          "Las casas 4 a 6 pueden crear un desajuste entre la familia, la creatividad, las responsabilidades y los hábitos cotidianos.",
      },

      {
        title:
          "Casas relacionales",

        text:
          "Las casas 7 a 9 pueden requerir ajustes entre las relaciones, las transformaciones, las creencias y la apertura al mundo.",
      },

      {
        title:
          "Casas colectivas",

        text:
          "Las casas 10 a 12 pueden crear un desajuste entre la carrera, los proyectos sociales y la vida interior.",
      },
    ],

    comparisonSection: {
      kicker:
        "Cuadratura o quincuncio",

      title:
        "¿Cuál es la diferencia entre un quincuncio y una cuadratura?",

      cards: [
        {
          symbol:
            "□",

          title:
            "La cuadratura",

          paragraphs: [
            "La cuadratura crea una tensión directa y visible. Los dos planetas parecen enfrentarse y obligan a la persona a actuar.",

            "Su presión puede ser difícil, pero suele producir una gran motivación y un deseo de superación.",
          ],
        },

        {
          symbol:
            "⚻",

          title:
            "El quincuncio",

          paragraphs: [
            "El quincuncio crea un desajuste más sutil. Los dos planetas no se enfrentan directamente, pero tienen dificultades para cooperar.",

            "Su incomodidad requiere ajustes repetidos en lugar de una resolución única y definitiva.",
          ],
        },
      ],
    },

    yod: {
      kicker:
        "Una figura astrológica importante",

      title:
        "¿Qué es un Yod en astrología?",

      symbol:
        "Y",

      subtitle:
        "Dos quincuncios dirigidos hacia un planeta",

      paragraphs: [
        "Un Yod se forma cuando un planeta recibe dos quincuncios procedentes de otros dos planetas relacionados entre sí mediante un sextil.",

        "El planeta situado en la cima del Yod se convierte en un punto central de ajuste. Puede representar una función que exige mucha atención y varias transformaciones.",

        "Esta configuración se denomina a veces el dedo de Dios. No representa necesariamente un destino predeterminado, pero puede indicar un camino especialmente exigente y evolutivo.",
      ],
    },

    transits: {
      title:
        "El quincuncio en los tránsitos astrológicos",

      paragraphs: [
        "Un quincuncio también puede formarse cuando un planeta en movimiento crea un ángulo de 150 grados con un planeta de tu carta natal.",

        "Este tránsito puede corresponder a un período en el que una organización, una relación, un hábito o una dirección de vida debe reajustarse.",

        "Los acontecimientos pueden parecer inesperados o difíciles de comprender, pero suelen llamar la atención sobre un desequilibrio que ya no puede ignorarse.",
      ],
    },

    cta: {
      kicker:
        "Descubre tu carta natal",

      title:
        "¿Tienes un quincuncio importante en tu carta natal?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tus planetas, tus casas y los principales aspectos presentes en tu nacimiento.",

      button:
        "Ver mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre el quincuncio en astrología",

      items: [
        {
          question:
            "¿Qué es un quincuncio en astrología?",

          answer:
            "Un quincuncio se forma cuando dos planetas están separados por un ángulo de aproximadamente 150 grados. Representa un desajuste entre dos funciones que deben reajustarse regularmente.",
        },

        {
          question:
            "¿Es el quincuncio un aspecto difícil?",

          answer:
            "El quincuncio puede resultar incómodo porque los dos planetas suelen tener dificultades para comprenderse. No siempre crea un conflicto directo, sino una sensación persistente de desequilibrio.",
        },

        {
          question:
            "¿Qué orbe debe utilizarse para un quincuncio?",

          answer:
            "El quincuncio suele interpretarse con un orbe estrecho, generalmente de entre 2 y 3 grados. Algunos astrólogos utilizan un margen ligeramente mayor cuando intervienen el Sol o la Luna.",
        },

        {
          question:
            "¿Cuál es la diferencia entre un quincuncio y una cuadratura?",

          answer:
            "La cuadratura crea una tensión directa que impulsa a actuar. El quincuncio produce un desajuste más difícil de identificar que requiere ajustes repetidos.",
        },

        {
          question:
            "¿Por qué el quincuncio es difícil de comprender?",

          answer:
            "Los signos relacionados por un quincuncio generalmente no comparten ni el mismo elemento ni la misma modalidad. Por eso funcionan según lógicas muy diferentes.",
        },

        {
          question:
            "¿Puede el quincuncio convertirse en una fortaleza?",

          answer:
            "Sí. Con el tiempo, los ajustes exigidos por el quincuncio pueden desarrollar una gran capacidad de adaptación, conciencia y transformación personal.",
        },

        {
          question:
            "¿Cómo saber si tengo un quincuncio en mi carta natal?",

          answer:
            "Debes generar tu carta natal y comparar la posición de los planetas. Dos planetas separados por aproximadamente 150 grados pueden formar un quincuncio.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegación entre los aspectos astrológicos",

      previous:
        "Volver a todos los aspectos: sextil",

      next:
        "Ver todos los aspectos",
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Der Quinkunx in der Astrologie: Bedeutung im Geburtshoroskop | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung des Quinkunx in der Astrologie, seinen 150°-Winkel, die erforderlichen Anpassungen und seine Deutung zwischen Planeten im Geburtshoroskop.",

      ogTitle:
        "Der Quinkunx in der Astrologie: Anpassung, Unbehagen und Transformation",

      ogDescription:
        "Verstehen Sie, wie der Quinkunx zwei schwer miteinander zu vereinbarende Planeten verbindet und notwendige Anpassungen im Geburtshoroskop sichtbar macht.",

      twitterTitle:
        "Der Quinkunx in der Astrologie | Luna Astralis",

      twitterDescription:
        "150°-Winkel, Anpassung und die Suche nach einem neuen Gleichgewicht im Geburtshoroskop.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Der Quinkunx in der Astrologie: Bedeutung im Geburtshoroskop",

      description:
        "Ein vollständiger Leitfaden zum astrologischen Quinkunx, seinem 150-Grad-Winkel, seinem Orbis und seiner Deutung zwischen Planeten.",
    },

    breadcrumb: {
      home:
        "Startseite",

      aspects:
        "Aspekte",

      current:
        "Quinkunx",

      ariaLabel:
        "Brotkrümelnavigation",
    },

    hero: {
      badge:
        "✦ Astrologischer Anpassungsaspekt",

      symbol:
        "⚻",

      title:
        "Der Quinkunx in der Astrologie",

      lead:
        "Ein Quinkunx entsteht, wenn zwei Planeten durch einen Winkel von 150 Grad getrennt sind. Er zeigt eine anhaltende Unstimmigkeit, Anpassungsschwierigkeiten und die Notwendigkeit, bestimmte Teile der Persönlichkeit neu auszurichten.",

      data: {
        angleLabel:
          "Winkel",

        angleValue:
          "150°",

        dynamicLabel:
          "Dynamik",

        dynamicValue:
          "Anpassung",

        functionLabel:
          "Funktion",

        functionValue:
          "Neuausrichtung",
      },

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      understand:
        "Den Quinkunx verstehen",
    },

    meaning: {
      kicker:
        "Ein schwer aufrechtzuerhaltendes Gleichgewicht",

      title:
        "Was bedeutet ein Quinkunx in der Astrologie?",

      paragraphs: [
        "Ein Quinkunx ist ein Aspekt, der entsteht, wenn zwei Planeten im Tierkreis durch einen Winkel von ungefähr 150 Grad getrennt sind.",

        "Die von den beiden Planeten dargestellten Funktionen geraten nicht unbedingt in einen offenen Konflikt. Sie scheinen vielmehr nach Vorgehensweisen zu funktionieren, die sich nur schwer miteinander vereinbaren lassen.",

        "Die Person kann das Gefühl haben, dass ein Teil ihres Lebens ständig neu organisiert werden muss, um den Bedürfnissen beider Planeten gerecht zu werden.",
      ],
    },

    functioning: {
      title:
        "Wie funktioniert ein Quinkunx?",

      cards: [
        {
          number:
            "01",

          title:
            "Zwei Funktionen verstehen sich nur schwer",

          text:
            "Die Planeten verwenden nicht dieselben Methoden und können schwer zu koordinieren sein.",
        },

        {
          number:
            "02",

          title:
            "Ein diffuses Unbehagen entsteht",

          text:
            "Die Spannung ist nicht immer offensichtlich, kann jedoch anhaltende Unzufriedenheit erzeugen.",
        },

        {
          number:
            "03",

          title:
            "Anpassungen werden notwendig",

          text:
            "Die Person muss Gewohnheiten, Erwartungen oder Reaktionsweisen verändern.",
        },

        {
          number:
            "04",

          title:
            "Eine neue Anpassungsfähigkeit entsteht",

          text:
            "Mit der Zeit kann der Aspekt Flexibilität, Bewusstsein und Transformationsfähigkeit entwickeln.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Eine subtile Spannung",

      title:
        "Ist der Quinkunx ein schwieriger Aspekt?",

      introduction:
        "Der Quinkunx gilt häufig als unbequemer Aspekt. Seine Schwierigkeit besteht darin, dass er nicht immer eine direkte und leicht erkennbare Spannung erzeugt.",

      cards: [
        {
          symbol:
            "⚠",

          title:
            "Die Herausforderungen des Quinkunx",

          paragraphs: [
            "Der Quinkunx kann ein Gefühl von Unstimmigkeit, Müdigkeit, Unzufriedenheit oder ständiger Anpassung hervorrufen.",

            "Die Person kann nur schwer verstehen, warum bestimmte Situationen trotz ihrer Bemühungen immer wiederkehren.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Das Potenzial des Quinkunx",

          paragraphs: [
            "Der Aspekt kann eine große Fähigkeit entwickeln, zu beobachten, zu korrigieren und originelle Lösungen zu finden.",

            "Wiederholte Anpassungen können zu einer echten Stärke der Anpassungsfähigkeit und Transformation werden.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Die zu beobachtenden Elemente",

      title:
        "Wie deutet man einen Quinkunx im Geburtshoroskop?",

      methods: [
        {
          number:
            "1",

          title:
            "Die beiden Planeten bestimmen",

          text:
            "Die Planeten zeigen die Funktionen, die sich nur schwer koordinieren oder gleichzeitig erfüllen lassen.",
        },

        {
          number:
            "2",

          title:
            "Die Zeichen betrachten",

          text:
            "Die Zeichen zeigen die sehr unterschiedlichen Methoden, mit denen die beiden Planeten handeln oder reagieren.",
        },

        {
          number:
            "3",

          title:
            "Die Häuser untersuchen",

          text:
            "Die Häuser zeigen die Lebensbereiche, zwischen denen Anpassungen vorgenommen werden müssen.",
        },

        {
          number:
            "4",

          title:
            "Wiederholungen erkennen",

          text:
            "Der Quinkunx zeigt sich häufig durch wiederkehrende Situationen, die darauf hinweisen, dass ein neues Gleichgewicht gefunden werden muss.",
        },

        {
          number:
            "5",

          title:
            "Einen entwicklungsfördernden Kompromiss finden",

          text:
            "Es geht nicht darum, einen Planeten gegen den anderen zu wählen, sondern eine flexiblere Möglichkeit zu schaffen, auf beide zu reagieren.",
        },
      ],
    },

    orb: {
      title:
        "Der Orbis des Quinkunx",

      introduction:
        "Der Orbis bezeichnet die Abweichung zwischen dem exakten 150-Grad-Winkel und den tatsächlichen Positionen der Planeten. Der Quinkunx wird gewöhnlich mit einem engeren Orbis als die Hauptaspekte gedeutet.",

      cards: [
        {
          value:
            "0° bis 1°",

          title:
            "Sehr enger Quinkunx",

          text:
            "Die Unstimmigkeit zwischen den beiden Planeten ist deutlich sichtbar und kann zu einem wichtigen Persönlichkeitsthema werden.",
        },

        {
          value:
            "1° bis 2°",

          title:
            "Starker Quinkunx",

          text:
            "Die Anpassungen sind klar wahrnehmbar und wiederholen sich häufig in verschiedenen Situationen.",
        },

        {
          value:
            "2° bis 3°",

          title:
            "Weiterer Quinkunx",

          text:
            "Der Aspekt kann weiterhin bedeutsam sein, besonders wenn Sonne, Mond oder Aszendent beteiligt sind.",
        },
      ],

      conclusion:
        "Je genauer der Quinkunx ist, desto leichter lässt sich sein Anpassungsbedarf erkennen. Seine Bedeutung hängt außerdem von der Rolle der Planeten im gesamten Horoskop ab.",
    },

    examplesSection: {
      kicker:
        "Deutungsbeispiele",

      title:
        "Die wichtigsten Quinkunxe zwischen Planeten",

      introduction:
        "Jeder Quinkunx zeigt sich entsprechend den Zeichen, Häusern und weiteren Aspekten des Horoskops. Die folgenden Beispiele beschreiben ihre allgemeine Dynamik.",
    },

    examples: [
      {
        planets:
          "Sonne Quinkunx Mond",

        symbol:
          "☀ ⚻ ☽",

        keywords:
          "Identität • Gefühle • Anpassung",

        text:
          "Sonne im Quinkunx zum Mond kann eine Unstimmigkeit zwischen bewusster Identität und emotionalen Bedürfnissen erzeugen. Die Person muss ihre Entscheidungen regelmäßig anpassen, um beiden Bereichen gerecht zu werden.",
      },

      {
        planets:
          "Merkur Quinkunx Saturn",

        symbol:
          "☿ ⚻ ♄",

        keywords:
          "Denken • Kontrolle • Vertrauen",

        text:
          "Merkur im Quinkunx zu Saturn kann Unsicherheit zwischen dem Bedürfnis nach Ausdruck und der Angst vor Fehlern erzeugen. Geistiges Selbstvertrauen entwickelt sich schrittweise.",
      },

      {
        planets:
          "Venus Quinkunx Uranus",

        symbol:
          "♀ ⚻ ♅",

        keywords:
          "Beziehungen • Freiheit • Instabilität",

        text:
          "Venus im Quinkunx zu Uranus kann das Gleichgewicht zwischen emotionaler Nähe und Unabhängigkeitsbedürfnis erschweren. Beziehungen benötigen häufige Anpassungen.",
      },

      {
        planets:
          "Mars Quinkunx Neptun",

        symbol:
          "♂ ⚻ ♆",

        keywords:
          "Handlung • Intuition • Richtung",

        text:
          "Mars im Quinkunx zu Neptun kann es erschweren, den richtigen Zeitpunkt zum Handeln oder eine klare Richtung zu erkennen. Die Person muss lernen, Intuition mit konkretem Handeln zu verbinden.",
      },

      {
        planets:
          "Jupiter Quinkunx Pluto",

        symbol:
          "♃ ⚻ ♇",

        keywords:
          "Expansion • Macht • Transformation",

        text:
          "Jupiter im Quinkunx zu Pluto kann Spannung zwischen Wachstumswunsch und Kontrollbedürfnis erzeugen. Ehrgeiz muss neu ausgerichtet werden, um Übertreibungen zu vermeiden.",
      },

      {
        planets:
          "Mond Quinkunx Saturn",

        symbol:
          "☽ ⚻ ♄",

        keywords:
          "Gefühle • Verantwortung • Sicherheit",

        text:
          "Mond im Quinkunx zu Saturn kann den Ausdruck emotionaler Bedürfnisse erschweren. Die Person lernt, innere Sicherheit aufzubauen, ohne ihre Sensibilität zu verleugnen.",
      },
    ],

    signsSection: {
      title:
        "Warum verstehen sich Zeichen im Quinkunx nur schwer?",

      introduction:
        "Zeichen, die 150 Grad voneinander entfernt liegen, teilen gewöhnlich weder dasselbe Element noch dieselbe Modalität. Sie besitzen daher sehr unterschiedliche Rhythmen, Bedürfnisse und Methoden.",
    },

    signs: [
      {
        symbol:
          "♈ ⚻ ♍",

        title:
          "Widder und Jungfrau",

        text:
          "Der Widder handelt schnell und instinktiv, während die Jungfrau analysiert, organisiert und korrigiert, bevor sie voranschreitet.",
      },

      {
        symbol:
          "♉ ⚻ ♎",

        title:
          "Stier und Waage",

        text:
          "Der Stier sucht stabile und konkrete Sicherheit, während die Waage ihre Entscheidungen ständig an Beziehungen anpasst.",
      },

      {
        symbol:
          "♊ ⚻ ♏",

        title:
          "Zwillinge und Skorpion",

        text:
          "Die Zwillinge erkunden verschiedene Ideen mit Leichtigkeit, während der Skorpion Tiefe, Intensität und verborgene Wahrheit sucht.",
      },

      {
        symbol:
          "♋ ⚻ ♐",

        title:
          "Krebs und Schütze",

        text:
          "Der Krebs schützt seine emotionalen Bezugspunkte, während der Schütze Expansion, Freiheit und Entdeckungen sucht.",
      },

      {
        symbol:
          "♌ ⚻ ♑",

        title:
          "Löwe und Steinbock",

        text:
          "Der Löwe möchte seine Kreativität ausdrücken und Anerkennung erhalten, während der Steinbock Kontrolle, Struktur und Ergebnisse bevorzugt.",
      },

      {
        symbol:
          "♍ ⚻ ♒",

        title:
          "Jungfrau und Wassermann",

        text:
          "Die Jungfrau verbessert die Details des Alltags, während der Wassermann sich auf neue Ideen und kollektive Veränderungen konzentriert.",
      },

      {
        symbol:
          "♎ ⚻ ♓",

        title:
          "Waage und Fische",

        text:
          "Die Waage sucht ein klares Beziehungsgleichgewicht, während die Fische stärker durch Intuition, Mitgefühl und emotionale Verschmelzung funktionieren.",
      },

      {
        symbol:
          "♏ ⚻ ♈",

        title:
          "Skorpion und Widder",

        text:
          "Der Skorpion verändert langsam und tiefgreifend, während der Widder unmittelbar seinem Instinkt folgt.",
      },

      {
        symbol:
          "♐ ⚻ ♉",

        title:
          "Schütze und Stier",

        text:
          "Der Schütze möchte erkunden und seinen Horizont erweitern, während der Stier Stabilität, Vorhersehbarkeit und Kontinuität bevorzugt.",
      },

      {
        symbol:
          "♑ ⚻ ♊",

        title:
          "Steinbock und Zwillinge",

        text:
          "Der Steinbock geht mit einer strukturierten Strategie vor, während die Zwillinge schnell Perspektive und Interesse wechseln.",
      },

      {
        symbol:
          "♒ ⚻ ♋",

        title:
          "Wassermann und Krebs",

        text:
          "Der Wassermann sucht Autonomie und eine kollektive Vision, während der Krebs persönliche Bindungen und emotionale Sicherheit schützt.",
      },

      {
        symbol:
          "♓ ⚻ ♌",

        title:
          "Fische und Löwe",

        text:
          "Die Fische lösen individuelle Grenzen auf, während der Löwe eine kreative und persönliche Identität behaupten möchte.",
      },
    ],

    housesSection: {
      title:
        "Der Quinkunx in den astrologischen Häusern",

      introduction:
        "Die beteiligten Häuser zeigen die Lebensbereiche, zwischen denen eine dauerhafte Anpassung notwendig sein kann.",
    },

    houses: [
      {
        title:
          "Persönliche Häuser",

        text:
          "Die Häuser 1 bis 3 können Anpassungen rund um Identität, Ressourcen, Denken und Kommunikation erfordern.",
      },

      {
        title:
          "Intime Häuser",

        text:
          "Die Häuser 4 bis 6 können eine Unstimmigkeit zwischen Familie, Kreativität, Verantwortung und Alltagsgewohnheiten erzeugen.",
      },

      {
        title:
          "Beziehungshäuser",

        text:
          "Die Häuser 7 bis 9 können Anpassungen zwischen Beziehungen, Transformation, Überzeugungen und Offenheit gegenüber der Welt erfordern.",
      },

      {
        title:
          "Kollektive Häuser",

        text:
          "Die Häuser 10 bis 12 können eine Unstimmigkeit zwischen Beruf, sozialen Projekten und Innenleben erzeugen.",
      },
    ],

    comparisonSection: {
      kicker:
        "Quadrat oder Quinkunx",

      title:
        "Was ist der Unterschied zwischen einem Quinkunx und einem Quadrat?",

      cards: [
        {
          symbol:
            "□",

          title:
            "Das Quadrat",

          paragraphs: [
            "Das Quadrat erzeugt direkte und sichtbare Spannung. Die beiden Planeten scheinen sich gegenüberzustehen und zwingen die Person zum Handeln.",

            "Sein Druck kann schwierig sein, erzeugt jedoch häufig starke Motivation und den Wunsch, Hindernisse zu überwinden.",
          ],
        },

        {
          symbol:
            "⚻",

          title:
            "Der Quinkunx",

          paragraphs: [
            "Der Quinkunx erzeugt eine subtilere Unstimmigkeit. Die beiden Planeten stehen sich nicht direkt gegenüber, können jedoch nur schwer zusammenarbeiten.",

            "Sein Unbehagen erfordert wiederholte Anpassungen statt einer einmaligen und endgültigen Lösung.",
          ],
        },
      ],
    },

    yod: {
      kicker:
        "Eine bedeutende astrologische Figur",

      title:
        "Was ist ein Yod in der Astrologie?",

      symbol:
        "Y",

      subtitle:
        "Zwei Quinkunxe richten sich auf einen Planeten",

      paragraphs: [
        "Ein Yod entsteht, wenn ein Planet zwei Quinkunxe von zwei anderen Planeten erhält, die durch ein Sextil miteinander verbunden sind.",

        "Der Planet an der Spitze des Yod wird zu einem zentralen Anpassungspunkt. Er kann eine Funktion darstellen, die große Aufmerksamkeit und mehrere Transformationen erfordert.",

        "Diese Konfiguration wird manchmal als Finger Gottes bezeichnet. Sie bedeutet nicht unbedingt ein vorherbestimmtes Schicksal, kann jedoch auf einen besonders anspruchsvollen und entwicklungsfördernden Weg hinweisen.",
      ],
    },

    transits: {
      title:
        "Der Quinkunx in astrologischen Transiten",

      paragraphs: [
        "Ein Quinkunx kann auch entstehen, wenn ein laufender Planet einen Winkel von 150 Grad zu einem Planeten des Geburtshoroskops bildet.",

        "Dieser Transit kann einer Phase entsprechen, in der eine Organisation, Beziehung, Gewohnheit oder Lebensrichtung neu angepasst werden muss.",

        "Ereignisse können unerwartet oder schwer verständlich erscheinen, lenken die Aufmerksamkeit jedoch häufig auf ein Ungleichgewicht, das nicht länger ignoriert werden kann.",
      ],
    },

    cta: {
      kicker:
        "Entdecken Sie Ihr Geburtshoroskop",

      title:
        "Haben Sie einen wichtigen Quinkunx in Ihrem Geburtshoroskop?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Planeten, Häuser und wichtigsten Aspekte Ihrer Geburt.",

      button:
        "Mein Geburtshoroskop ansehen",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zum Quinkunx in der Astrologie",

      items: [
        {
          question:
            "Was ist ein Quinkunx in der Astrologie?",

          answer:
            "Ein Quinkunx entsteht, wenn zwei Planeten durch einen Winkel von ungefähr 150 Grad getrennt sind. Er steht für eine Unstimmigkeit zwischen zwei Funktionen, die regelmäßig angepasst werden müssen.",
        },

        {
          question:
            "Ist der Quinkunx ein schwieriger Aspekt?",

          answer:
            "Der Quinkunx kann unangenehm sein, weil die beiden Planeten häufig Schwierigkeiten haben, sich zu verstehen. Er erzeugt nicht immer einen direkten Konflikt, sondern eher ein anhaltendes Gefühl von Ungleichgewicht.",
        },

        {
          question:
            "Welchen Orbis verwendet man für einen Quinkunx?",

          answer:
            "Der Quinkunx wird gewöhnlich mit einem engen Orbis von ungefähr 2 bis 3 Grad gedeutet. Manche Astrologen verwenden einen etwas größeren Spielraum, wenn Sonne oder Mond beteiligt sind.",
        },

        {
          question:
            "Was ist der Unterschied zwischen einem Quinkunx und einem Quadrat?",

          answer:
            "Ein Quadrat erzeugt direkte Spannung, die zum Handeln drängt. Ein Quinkunx schafft eine schwerer erkennbare Unstimmigkeit, die wiederholte Anpassungen erfordert.",
        },

        {
          question:
            "Warum ist der Quinkunx schwer zu verstehen?",

          answer:
            "Zeichen, die durch einen Quinkunx verbunden sind, teilen gewöhnlich weder dasselbe Element noch dieselbe Modalität. Sie funktionieren daher nach sehr unterschiedlichen Prinzipien.",
        },

        {
          question:
            "Kann ein Quinkunx zu einer Stärke werden?",

          answer:
            "Ja. Mit der Zeit können die durch den Quinkunx geforderten Anpassungen große Anpassungsfähigkeit, Bewusstsein und persönliche Transformation entwickeln.",
        },

        {
          question:
            "Wie erkenne ich einen Quinkunx in meinem Geburtshoroskop?",

          answer:
            "Sie müssen Ihr Geburtshoroskop erstellen und die Planetenpositionen vergleichen. Zwei Planeten, die ungefähr 150 Grad voneinander entfernt sind, können einen Quinkunx bilden.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation zwischen astrologischen Aspekten",

      previous:
        "Zurück zu allen Aspekten: Sextil",

      next:
        "Alle Aspekte ansehen",
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Il quinconce in astrologia: significato nel tema natale | Luna Astralis",

      description:
        "Scopri il significato del quinconce in astrologia, il suo angolo di 150°, gli adattamenti necessari e la sua interpretazione tra i pianeti del tema natale.",

      ogTitle:
        "Il quinconce in astrologia: adattamento, disagio e trasformazione",

      ogDescription:
        "Comprendi come il quinconce colleghi due pianeti difficili da armonizzare e riveli gli adattamenti necessari nel tema natale.",

      twitterTitle:
        "Il quinconce in astrologia | Luna Astralis",

      twitterDescription:
        "Angolo di 150°, adattamento e ricerca di un nuovo equilibrio nel tema natale.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Il quinconce in astrologia: significato nel tema natale",

      description:
        "Guida completa per comprendere il quinconce astrologico, il suo angolo di 150 gradi, il suo orbe e la sua interpretazione tra i pianeti.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspetti",

      current:
        "Quinconce",

      ariaLabel:
        "Percorso di navigazione",
    },

    hero: {
      badge:
        "✦ Aspetto astrologico di adattamento",

      symbol:
        "⚻",

      title:
        "Il quinconce in astrologia",

      lead:
        "Il quinconce si forma quando due pianeti sono separati da un angolo di 150 gradi. Rivela un disallineamento persistente, una difficoltà di adattamento e la necessità di riequilibrare alcune parti della personalità.",

      data: {
        angleLabel:
          "Angolo",

        angleValue:
          "150°",

        dynamicLabel:
          "Dinamica",

        dynamicValue:
          "Adattamento",

        functionLabel:
          "Funzione",

        functionValue:
          "Riequilibrio",
      },

      createChart:
        "Creare gratuitamente il mio tema natale",

      understand:
        "Comprendere il quinconce",
    },

    meaning: {
      kicker:
        "Un equilibrio difficile da mantenere",

      title:
        "Che cosa significa un quinconce in astrologia?",

      paragraphs: [
        "Il quinconce è un aspetto che si forma quando due pianeti sono separati da un angolo di circa 150 gradi nel cerchio zodiacale.",

        "Le funzioni rappresentate dai due pianeti non entrano necessariamente in un conflitto aperto. Sembrano piuttosto funzionare secondo logiche che faticano a comprendersi.",

        "La persona può avere l’impressione che una parte della propria vita debba essere continuamente riorganizzata per rispondere ai bisogni di entrambi i pianeti.",
      ],
    },

    functioning: {
      title:
        "Come funziona il quinconce?",

      cards: [
        {
          number:
            "01",

          title:
            "Due funzioni faticano a comprendersi",

          text:
            "I pianeti non utilizzano gli stessi metodi e possono essere difficili da coordinare.",
        },

        {
          number:
            "02",

          title:
            "Compare un disagio diffuso",

          text:
            "La tensione non è sempre evidente, ma può produrre un’insoddisfazione persistente.",
        },

        {
          number:
            "03",

          title:
            "Gli adattamenti diventano necessari",

          text:
            "La persona deve modificare le proprie abitudini, aspettative o modalità di reazione.",
        },

        {
          number:
            "04",

          title:
            "Si costruisce un nuovo adattamento",

          text:
            "Con il tempo, l’aspetto può sviluppare flessibilità, consapevolezza e capacità di trasformazione.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Una tensione sottile",

      title:
        "Il quinconce è un aspetto difficile?",

      introduction:
        "Il quinconce è spesso considerato un aspetto scomodo. La sua difficoltà deriva dal fatto che non produce sempre una tensione diretta e facile da identificare.",

      cards: [
        {
          symbol:
            "⚠",

          title:
            "Le sfide del quinconce",

          paragraphs: [
            "Il quinconce può produrre una sensazione di disallineamento, stanchezza, insoddisfazione o adattamento continuo.",

            "La persona può faticare a comprendere perché determinate situazioni continuino a ripresentarsi nonostante i suoi sforzi.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Il potenziale del quinconce",

          paragraphs: [
            "L’aspetto può sviluppare una grande capacità di osservare, correggere e trovare soluzioni originali.",

            "Gli adattamenti ripetuti possono diventare una vera forza di adattamento e trasformazione.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Gli elementi da osservare",

      title:
        "Come interpretare un quinconce nel tema natale?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificare i due pianeti",

          text:
            "I pianeti indicano le funzioni che faticano a coordinarsi o a rispondere contemporaneamente ai propri bisogni.",
        },

        {
          number:
            "2",

          title:
            "Osservare i segni",

          text:
            "I segni mostrano i metodi molto diversi utilizzati dai due pianeti per agire o reagire.",
        },

        {
          number:
            "3",

          title:
            "Studiare le case",

          text:
            "Le case rivelano gli ambiti della vita tra i quali devono essere realizzati gli adattamenti.",
        },

        {
          number:
            "4",

          title:
            "Individuare le ripetizioni",

          text:
            "Il quinconce si manifesta spesso attraverso situazioni ricorrenti che indicano la necessità di trovare un nuovo equilibrio.",
        },

        {
          number:
            "5",

          title:
            "Cercare un compromesso evolutivo",

          text:
            "Non si tratta di scegliere un pianeta contro l’altro, ma di creare un modo più flessibile di rispondere a entrambi.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe del quinconce",

      introduction:
        "L’orbe rappresenta la differenza tra l’angolo esatto di 150 gradi e la posizione reale dei pianeti. Il quinconce viene generalmente interpretato con un margine più stretto rispetto agli aspetti maggiori.",

      cards: [
        {
          value:
            "Da 0° a 1°",

          title:
            "Quinconce molto stretto",

          text:
            "Il disallineamento tra i due pianeti è molto visibile e può diventare un tema importante della personalità.",
        },

        {
          value:
            "Da 1° a 2°",

          title:
            "Quinconce forte",

          text:
            "Gli adattamenti sono chiaramente percepibili e tendono a ripresentarsi in diverse situazioni.",
        },

        {
          value:
            "Da 2° a 3°",

          title:
            "Quinconce più ampio",

          text:
            "L’aspetto può essere ancora significativo, soprattutto quando coinvolge il Sole, la Luna o l’Ascendente.",
        },
      ],

      conclusion:
        "Più il quinconce è esatto, più è facile riconoscere il suo bisogno di adattamento. La sua importanza dipende inoltre dal ruolo dei pianeti nell’insieme del tema natale.",
    },

    examplesSection: {
      kicker:
        "Esempi di interpretazione",

      title:
        "I principali quinconce tra i pianeti",

      introduction:
        "Ogni quinconce si esprime in base ai segni, alle case e agli altri aspetti del tema. Gli esempi seguenti presentano la loro dinamica generale.",
    },

    examples: [
      {
        planets:
          "Sole in quinconce alla Luna",

        symbol:
          "☀ ⚻ ☽",

        keywords:
          "Identità • emozioni • adattamento",

        text:
          "Il Sole in quinconce alla Luna può creare un disallineamento tra l’identità cosciente e i bisogni emotivi. La persona deve adattare regolarmente le proprie scelte per rispettare entrambe le dimensioni.",
      },

      {
        planets:
          "Mercurio in quinconce a Saturno",

        symbol:
          "☿ ⚻ ♄",

        keywords:
          "Pensiero • controllo • fiducia",

        text:
          "Mercurio in quinconce a Saturno può creare esitazione tra il bisogno di esprimersi e la paura di sbagliare. La fiducia intellettuale si sviluppa progressivamente.",
      },

      {
        planets:
          "Venere in quinconce a Urano",

        symbol:
          "♀ ⚻ ♅",

        keywords:
          "Relazioni • libertà • instabilità",

        text:
          "Venere in quinconce a Urano può rendere difficile l’equilibrio tra vicinanza affettiva e bisogno di indipendenza. Le relazioni richiedono adattamenti frequenti.",
      },

      {
        planets:
          "Marte in quinconce a Nettuno",

        symbol:
          "♂ ⚻ ♆",

        keywords:
          "Azione • intuizione • direzione",

        text:
          "Marte in quinconce a Nettuno può creare difficoltà nel sapere quando agire o in quale direzione avanzare. La persona deve imparare a collegare intuizione e azione concreta.",
      },

      {
        planets:
          "Giove in quinconce a Plutone",

        symbol:
          "♃ ⚻ ♇",

        keywords:
          "Espansione • potere • trasformazione",

        text:
          "Giove in quinconce a Plutone può produrre una tensione tra desiderio di crescita e bisogno di controllo. L’ambizione deve essere riequilibrata per evitare gli eccessi.",
      },

      {
        planets:
          "Luna in quinconce a Saturno",

        symbol:
          "☽ ⚻ ♄",

        keywords:
          "Emozioni • responsabilità • sicurezza",

        text:
          "La Luna in quinconce a Saturno può complicare l’espressione dei bisogni emotivi. La persona impara a costruire sicurezza interiore senza negare la propria sensibilità.",
      },
    ],

    signsSection: {
      title:
        "Perché i segni in quinconce faticano a comprendersi?",

      introduction:
        "I segni separati da 150 gradi generalmente non condividono né lo stesso elemento né la stessa modalità. Possiedono quindi ritmi, bisogni e metodi molto diversi.",
    },

    signs: [
      {
        symbol:
          "♈ ⚻ ♍",

        title:
          "Ariete e Vergine",

        text:
          "L’Ariete agisce rapidamente e istintivamente, mentre la Vergine analizza, organizza e corregge prima di procedere.",
      },

      {
        symbol:
          "♉ ⚻ ♎",

        title:
          "Toro e Bilancia",

        text:
          "Il Toro cerca sicurezza stabile e concreta, mentre la Bilancia adatta continuamente le proprie scelte alle relazioni.",
      },

      {
        symbol:
          "♊ ⚻ ♏",

        title:
          "Gemelli e Scorpione",

        text:
          "I Gemelli esplorano diverse idee con leggerezza, mentre lo Scorpione cerca profondità, intensità e verità nascoste.",
      },

      {
        symbol:
          "♋ ⚻ ♐",

        title:
          "Cancro e Sagittario",

        text:
          "Il Cancro protegge i propri riferimenti emotivi, mentre il Sagittario cerca espansione, libertà e scoperte.",
      },

      {
        symbol:
          "♌ ⚻ ♑",

        title:
          "Leone e Capricorno",

        text:
          "Il Leone vuole esprimere la propria creatività ed essere riconosciuto, mentre il Capricorno privilegia controllo, struttura e risultati.",
      },

      {
        symbol:
          "♍ ⚻ ♒",

        title:
          "Vergine e Acquario",

        text:
          "La Vergine migliora i dettagli della vita quotidiana, mentre l’Acquario si concentra su nuove idee e trasformazioni collettive.",
      },

      {
        symbol:
          "♎ ⚻ ♓",

        title:
          "Bilancia e Pesci",

        text:
          "La Bilancia cerca un equilibrio relazionale chiaro, mentre i Pesci funzionano maggiormente attraverso intuizione, compassione e fusione emotiva.",
      },

      {
        symbol:
          "♏ ⚻ ♈",

        title:
          "Scorpione e Ariete",

        text:
          "Lo Scorpione si trasforma lentamente e profondamente, mentre l’Ariete agisce immediatamente secondo il proprio istinto.",
      },

      {
        symbol:
          "♐ ⚻ ♉",

        title:
          "Sagittario e Toro",

        text:
          "Il Sagittario vuole esplorare e ampliare i propri orizzonti, mentre il Toro preferisce stabilità, prevedibilità e continuità.",
      },

      {
        symbol:
          "♑ ⚻ ♊",

        title:
          "Capricorno e Gemelli",

        text:
          "Il Capricorno procede con una strategia strutturata, mentre i Gemelli cambiano rapidamente prospettiva e interesse.",
      },

      {
        symbol:
          "♒ ⚻ ♋",

        title:
          "Acquario e Cancro",

        text:
          "L’Acquario cerca autonomia e una visione collettiva, mentre il Cancro protegge i legami personali e la sicurezza emotiva.",
      },

      {
        symbol:
          "♓ ⚻ ♌",

        title:
          "Pesci e Leone",

        text:
          "I Pesci dissolvono i confini individuali, mentre il Leone cerca di affermare un’identità creativa e personale.",
      },
    ],

    housesSection: {
      title:
        "Il quinconce nelle case astrologiche",

      introduction:
        "Le case coinvolte indicano gli ambiti della vita tra i quali può essere necessario un adattamento permanente.",
    },

    houses: [
      {
        title:
          "Case personali",

        text:
          "Le case da 1 a 3 possono richiedere adattamenti legati all’identità, alle risorse, al pensiero e alla comunicazione.",
      },

      {
        title:
          "Case intime",

        text:
          "Le case da 4 a 6 possono creare un disallineamento tra famiglia, creatività, responsabilità e abitudini quotidiane.",
      },

      {
        title:
          "Case relazionali",

        text:
          "Le case da 7 a 9 possono richiedere adattamenti tra relazioni, trasformazioni, convinzioni e apertura al mondo.",
      },

      {
        title:
          "Case collettive",

        text:
          "Le case da 10 a 12 possono creare un disallineamento tra carriera, progetti sociali e vita interiore.",
      },
    ],

    comparisonSection: {
      kicker:
        "Quadratura o quinconce",

      title:
        "Qual è la differenza tra un quinconce e una quadratura?",

      cards: [
        {
          symbol:
            "□",

          title:
            "La quadratura",

          paragraphs: [
            "La quadratura crea una tensione diretta e visibile. I due pianeti sembrano confrontarsi e obbligano la persona ad agire.",

            "La sua pressione può essere difficile, ma spesso produce una forte motivazione e un desiderio di superamento.",
          ],
        },

        {
          symbol:
            "⚻",

          title:
            "Il quinconce",

          paragraphs: [
            "Il quinconce crea un disallineamento più sottile. I due pianeti non si confrontano direttamente, ma faticano a cooperare.",

            "Il suo disagio richiede adattamenti ripetuti anziché una risoluzione unica e definitiva.",
          ],
        },
      ],
    },

    yod: {
      kicker:
        "Una configurazione astrologica importante",

      title:
        "Che cos’è uno Yod in astrologia?",

      symbol:
        "Y",

      subtitle:
        "Due quinconce diretti verso un pianeta",

      paragraphs: [
        "Uno Yod si forma quando un pianeta riceve due quinconce provenienti da altri due pianeti collegati tra loro da un sestile.",

        "Il pianeta situato al vertice dello Yod diventa un punto centrale di adattamento. Può rappresentare una funzione che richiede grande attenzione e diverse trasformazioni.",

        "Questa configurazione viene talvolta chiamata dito di Dio. Non rappresenta necessariamente un destino predeterminato, ma può indicare un percorso particolarmente esigente ed evolutivo.",
      ],
    },

    transits: {
      title:
        "Il quinconce nei transiti astrologici",

      paragraphs: [
        "Un quinconce può formarsi anche quando un pianeta in movimento crea un angolo di 150 gradi con un pianeta del tema natale.",

        "Questo transito può corrispondere a un periodo in cui un’organizzazione, una relazione, un’abitudine o una direzione di vita deve essere riequilibrata.",

        "Gli eventi possono sembrare imprevisti o difficili da comprendere, ma spesso attirano l’attenzione su uno squilibrio che non può più essere ignorato.",
      ],
    },

    cta: {
      kicker:
        "Scopri il tuo tema natale",

      title:
        "Hai un quinconce importante nel tuo tema natale?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire i pianeti, le case e i principali aspetti presenti alla nascita.",

      button:
        "Vedere il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sul quinconce in astrologia",

      items: [
        {
          question:
            "Che cos’è un quinconce in astrologia?",

          answer:
            "Un quinconce si forma quando due pianeti sono separati da un angolo di circa 150 gradi. Rappresenta un disallineamento tra due funzioni che devono essere regolarmente adattate.",
        },

        {
          question:
            "Il quinconce è un aspetto difficile?",

          answer:
            "Il quinconce può essere scomodo perché i due pianeti spesso faticano a comprendersi. Non crea sempre un conflitto diretto, ma piuttosto una sensazione persistente di squilibrio.",
        },

        {
          question:
            "Quale orbe si utilizza per un quinconce?",

          answer:
            "Il quinconce viene generalmente interpretato con un orbe stretto, spesso tra 2 e 3 gradi. Alcuni astrologi utilizzano un margine leggermente più ampio quando sono coinvolti il Sole o la Luna.",
        },

        {
          question:
            "Qual è la differenza tra un quinconce e una quadratura?",

          answer:
            "La quadratura crea una tensione diretta che spinge ad agire. Il quinconce produce un disallineamento più difficile da identificare e richiede adattamenti ripetuti.",
        },

        {
          question:
            "Perché il quinconce è difficile da comprendere?",

          answer:
            "I segni collegati da un quinconce generalmente non condividono né lo stesso elemento né la stessa modalità. Funzionano quindi secondo logiche molto diverse.",
        },

        {
          question:
            "Un quinconce può diventare una forza?",

          answer:
            "Sì. Con il tempo, gli adattamenti richiesti dal quinconce possono sviluppare grande capacità di adattamento, consapevolezza e trasformazione personale.",
        },

        {
          question:
            "Come sapere se ho un quinconce nel tema natale?",

          answer:
            "Devi generare il tuo tema natale e confrontare le posizioni dei pianeti. Due pianeti separati da circa 150 gradi possono formare un quinconce.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigazione tra gli aspetti astrologici",

      previous:
        "Tornare a tutti gli aspetti: sestile",

      next:
        "Vedere tutti gli aspetti",
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "O quincúncio na astrologia: significado no mapa natal | Luna Astralis",

      description:
        "Descubra o significado do quincúncio na astrologia, seu ângulo de 150°, os ajustes necessários e sua interpretação entre os planetas do mapa natal.",

      ogTitle:
        "O quincúncio na astrologia: ajuste, desconforto e transformação",

      ogDescription:
        "Compreenda como o quincúncio conecta dois planetas difíceis de harmonizar e revela os ajustes necessários no mapa natal.",

      twitterTitle:
        "O quincúncio na astrologia | Luna Astralis",

      twitterDescription:
        "Ângulo de 150°, ajustes, adaptação e busca de um novo equilíbrio no mapa natal.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "O quincúncio na astrologia: significado no mapa natal",

      description:
        "Guia completo para compreender o quincúncio astrológico, seu ângulo de 150 graus, seu orbe e sua interpretação entre os planetas.",
    },

    breadcrumb: {
      home:
        "Início",

      aspects:
        "Aspectos",

      current:
        "Quincúncio",

      ariaLabel:
        "Navegação estrutural",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico de ajuste",

      symbol:
        "⚻",

      title:
        "O quincúncio na astrologia",

      lead:
        "O quincúncio se forma quando dois planetas estão separados por um ângulo de 150 graus. Ele revela um desalinhamento persistente, dificuldade de adaptação e a necessidade de reajustar certas partes da personalidade.",

      data: {
        angleLabel:
          "Ângulo",

        angleValue:
          "150°",

        dynamicLabel:
          "Dinâmica",

        dynamicValue:
          "Ajuste",

        functionLabel:
          "Função",

        functionValue:
          "Adaptação",
      },

      createChart:
        "Criar meu mapa astral grátis",

      understand:
        "Compreender o quincúncio",
    },

    meaning: {
      kicker:
        "Um equilíbrio difícil de manter",

      title:
        "O que significa um quincúncio na astrologia?",

      paragraphs: [
        "O quincúncio é um aspecto que se forma quando dois planetas estão separados por um ângulo de aproximadamente 150 graus no círculo zodiacal.",

        "As funções representadas pelos dois planetas não entram necessariamente em conflito aberto. Elas parecem funcionar segundo lógicas que têm dificuldade para se compreender.",

        "A pessoa pode ter a impressão de que uma parte da sua vida precisa ser continuamente reorganizada para atender às necessidades dos dois planetas.",
      ],
    },

    functioning: {
      title:
        "Como funciona o quincúncio?",

      cards: [
        {
          number:
            "01",

          title:
            "Duas funções se compreendem com dificuldade",

          text:
            "Os planetas não utilizam os mesmos métodos e podem ser difíceis de coordenar.",
        },

        {
          number:
            "02",

          title:
            "Surge um desconforto difuso",

          text:
            "A tensão nem sempre é evidente, mas pode produzir uma insatisfação persistente.",
        },

        {
          number:
            "03",

          title:
            "Os ajustes se tornam necessários",

          text:
            "A pessoa precisa modificar hábitos, expectativas ou formas de reagir.",
        },

        {
          number:
            "04",

          title:
            "Uma nova adaptação é construída",

          text:
            "Com o tempo, o aspecto pode desenvolver flexibilidade, consciência e capacidade de transformação.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Uma tensão sutil",

      title:
        "O quincúncio é um aspecto difícil?",

      introduction:
        "O quincúncio costuma ser considerado um aspecto desconfortável. Sua dificuldade vem do fato de que nem sempre produz uma tensão direta e fácil de identificar.",

      cards: [
        {
          symbol:
            "⚠",

          title:
            "Os desafios do quincúncio",

          paragraphs: [
            "O quincúncio pode produzir uma sensação de desalinhamento, cansaço, insatisfação ou adaptação permanente.",

            "A pessoa pode ter dificuldade para compreender por que certas situações continuam se repetindo apesar de seus esforços.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "O potencial do quincúncio",

          paragraphs: [
            "O aspecto pode desenvolver grande capacidade de observar, corrigir e encontrar soluções originais.",

            "Os ajustes repetidos podem se tornar uma verdadeira força de adaptação e transformação.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Os elementos que devem ser observados",

      title:
        "Como interpretar um quincúncio no mapa natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar os dois planetas",

          text:
            "Os planetas indicam as funções que têm dificuldade para se coordenar ou atender simultaneamente às suas necessidades.",
        },

        {
          number:
            "2",

          title:
            "Observar os signos",

          text:
            "Os signos mostram os métodos muito diferentes utilizados pelos dois planetas para agir ou reagir.",
        },

        {
          number:
            "3",

          title:
            "Estudar as casas",

          text:
            "As casas revelam as áreas da vida entre as quais os ajustes precisam ser realizados.",
        },

        {
          number:
            "4",

          title:
            "Identificar as repetições",

          text:
            "O quincúncio costuma se manifestar por meio de situações recorrentes que indicam a necessidade de encontrar um novo equilíbrio.",
        },

        {
          number:
            "5",

          title:
            "Buscar um compromisso evolutivo",

          text:
            "Não se trata de escolher um planeta contra o outro, mas de criar uma maneira mais flexível de responder aos dois.",
        },
      ],
    },

    orb: {
      title:
        "O orbe do quincúncio",

      introduction:
        "O orbe representa a diferença entre o ângulo exato de 150 graus e a posição real dos planetas. O quincúncio costuma ser interpretado com uma margem mais estreita do que os aspectos maiores.",

      cards: [
        {
          value:
            "0° a 1°",

          title:
            "Quincúncio muito exato",

          text:
            "O desalinhamento entre os dois planetas é muito visível e pode se tornar um tema importante da personalidade.",
        },

        {
          value:
            "1° a 2°",

          title:
            "Quincúncio forte",

          text:
            "Os ajustes são claramente perceptíveis e costumam se repetir em várias situações.",
        },

        {
          value:
            "2° a 3°",

          title:
            "Quincúncio mais amplo",

          text:
            "O aspecto ainda pode ser significativo, principalmente quando envolve o Sol, a Lua ou o Ascendente.",
        },
      ],

      conclusion:
        "Quanto mais exato o quincúncio, mais fácil é reconhecer sua necessidade de ajuste. Sua importância também depende do papel dos planetas no conjunto do mapa natal.",
    },

    examplesSection: {
      kicker:
        "Exemplos de interpretação",

      title:
        "Os principais quincúncios entre os planetas",

      introduction:
        "Cada quincúncio se expressa de acordo com os signos, as casas e os demais aspectos do mapa. Os exemplos seguintes apresentam sua dinâmica geral.",
    },

    examples: [
      {
        planets:
          "Sol em quincúncio com a Lua",

        symbol:
          "☀ ⚻ ☽",

        keywords:
          "Identidade • emoções • adaptação",

        text:
          "O Sol em quincúncio com a Lua pode criar um desalinhamento entre a identidade consciente e as necessidades emocionais. A pessoa precisa ajustar regularmente suas escolhas para respeitar as duas dimensões.",
      },

      {
        planets:
          "Mercúrio em quincúncio com Saturno",

        symbol:
          "☿ ⚻ ♄",

        keywords:
          "Pensamento • controle • confiança",

        text:
          "Mercúrio em quincúncio com Saturno pode produzir hesitação entre a necessidade de se expressar e o medo de errar. A confiança intelectual se desenvolve progressivamente.",
      },

      {
        planets:
          "Vênus em quincúncio com Urano",

        symbol:
          "♀ ⚻ ♅",

        keywords:
          "Relacionamentos • liberdade • instabilidade",

        text:
          "Vênus em quincúncio com Urano pode dificultar o equilíbrio entre proximidade afetiva e necessidade de independência. Os relacionamentos exigem ajustes frequentes.",
      },

      {
        planets:
          "Marte em quincúncio com Netuno",

        symbol:
          "♂ ⚻ ♆",

        keywords:
          "Ação • intuição • direção",

        text:
          "Marte em quincúncio com Netuno pode criar dificuldade para saber quando agir ou em qual direção avançar. A pessoa precisa aprender a conectar intuição e ação concreta.",
      },

      {
        planets:
          "Júpiter em quincúncio com Plutão",

        symbol:
          "♃ ⚻ ♇",

        keywords:
          "Expansão • poder • transformação",

        text:
          "Júpiter em quincúncio com Plutão pode produzir tensão entre o desejo de crescimento e a necessidade de controle. A ambição precisa ser reajustada para evitar excessos.",
      },

      {
        planets:
          "Lua em quincúncio com Saturno",

        symbol:
          "☽ ⚻ ♄",

        keywords:
          "Emoções • responsabilidade • segurança",

        text:
          "A Lua em quincúncio com Saturno pode complicar a expressão das necessidades emocionais. A pessoa aprende a construir segurança interior sem negar sua sensibilidade.",
      },
    ],

    signsSection: {
      title:
        "Por que os signos em quincúncio se compreendem com dificuldade?",

      introduction:
        "Os signos separados por 150 graus geralmente não compartilham nem o mesmo elemento nem a mesma modalidade. Portanto, possuem ritmos, necessidades e métodos muito diferentes.",
    },

    signs: [
      {
        symbol:
          "♈ ⚻ ♍",

        title:
          "Áries e Virgem",

        text:
          "Áries age rápida e instintivamente, enquanto Virgem analisa, organiza e corrige antes de avançar.",
      },

      {
        symbol:
          "♉ ⚻ ♎",

        title:
          "Touro e Libra",

        text:
          "Touro procura segurança estável e concreta, enquanto Libra ajusta constantemente suas escolhas conforme os relacionamentos.",
      },

      {
        symbol:
          "♊ ⚻ ♏",

        title:
          "Gêmeos e Escorpião",

        text:
          "Gêmeos explora várias ideias com leveza, enquanto Escorpião procura profundidade, intensidade e verdades ocultas.",
      },

      {
        symbol:
          "♋ ⚻ ♐",

        title:
          "Câncer e Sagitário",

        text:
          "Câncer protege suas referências emocionais, enquanto Sagitário procura expansão, liberdade e descobertas.",
      },

      {
        symbol:
          "♌ ⚻ ♑",

        title:
          "Leão e Capricórnio",

        text:
          "Leão quer expressar sua criatividade e ser reconhecido, enquanto Capricórnio prioriza domínio, estrutura e resultados.",
      },

      {
        symbol:
          "♍ ⚻ ♒",

        title:
          "Virgem e Aquário",

        text:
          "Virgem melhora os detalhes do cotidiano, enquanto Aquário se interessa por novas ideias e transformações coletivas.",
      },

      {
        symbol:
          "♎ ⚻ ♓",

        title:
          "Libra e Peixes",

        text:
          "Libra procura um equilíbrio relacional claro, enquanto Peixes funciona mais por meio da intuição, compaixão e fusão emocional.",
      },

      {
        symbol:
          "♏ ⚻ ♈",

        title:
          "Escorpião e Áries",

        text:
          "Escorpião se transforma lenta e profundamente, enquanto Áries age imediatamente de acordo com o instinto.",
      },

      {
        symbol:
          "♐ ⚻ ♉",

        title:
          "Sagitário e Touro",

        text:
          "Sagitário quer explorar e ampliar seus horizontes, enquanto Touro prefere estabilidade, previsibilidade e continuidade.",
      },

      {
        symbol:
          "♑ ⚻ ♊",

        title:
          "Capricórnio e Gêmeos",

        text:
          "Capricórnio avança com uma estratégia estruturada, enquanto Gêmeos muda rapidamente de perspectiva e interesse.",
      },

      {
        symbol:
          "♒ ⚻ ♋",

        title:
          "Aquário e Câncer",

        text:
          "Aquário procura autonomia e uma visão coletiva, enquanto Câncer protege os vínculos pessoais e a segurança emocional.",
      },

      {
        symbol:
          "♓ ⚻ ♌",

        title:
          "Peixes e Leão",

        text:
          "Peixes dissolve os limites individuais, enquanto Leão procura afirmar uma identidade criativa e pessoal.",
      },
    ],

    housesSection: {
      title:
        "O quincúncio nas casas astrológicas",

      introduction:
        "As casas envolvidas indicam as áreas da vida entre as quais pode ser necessário um ajuste permanente.",
    },

    houses: [
      {
        title:
          "Casas pessoais",

        text:
          "As casas 1 a 3 podem exigir ajustes relacionados à identidade, aos recursos, ao pensamento e à comunicação.",
      },

      {
        title:
          "Casas íntimas",

        text:
          "As casas 4 a 6 podem criar um desalinhamento entre família, criatividade, responsabilidades e hábitos cotidianos.",
      },

      {
        title:
          "Casas relacionais",

        text:
          "As casas 7 a 9 podem exigir ajustes entre relacionamentos, transformações, crenças e abertura para o mundo.",
      },

      {
        title:
          "Casas coletivas",

        text:
          "As casas 10 a 12 podem criar um desalinhamento entre carreira, projetos sociais e vida interior.",
      },
    ],

    comparisonSection: {
      kicker:
        "Quadratura ou quincúncio",

      title:
        "Qual é a diferença entre um quincúncio e uma quadratura?",

      cards: [
        {
          symbol:
            "□",

          title:
            "A quadratura",

          paragraphs: [
            "A quadratura cria uma tensão direta e visível. Os dois planetas parecem se confrontar e obrigam a pessoa a agir.",

            "Sua pressão pode ser difícil, mas frequentemente produz forte motivação e desejo de superação.",
          ],
        },

        {
          symbol:
            "⚻",

          title:
            "O quincúncio",

          paragraphs: [
            "O quincúncio cria um desalinhamento mais sutil. Os dois planetas não se confrontam diretamente, mas têm dificuldade para cooperar.",

            "Seu desconforto exige ajustes repetidos em vez de uma resolução única e definitiva.",
          ],
        },
      ],
    },

    yod: {
      kicker:
        "Uma configuração astrológica importante",

      title:
        "O que é um Yod na astrologia?",

      symbol:
        "Y",

      subtitle:
        "Dois quincúncios direcionados para um planeta",

      paragraphs: [
        "Um Yod se forma quando um planeta recebe dois quincúncios provenientes de outros dois planetas conectados entre si por um sextil.",

        "O planeta situado no ápice do Yod se torna um ponto central de ajuste. Ele pode representar uma função que exige muita atenção e várias transformações.",

        "Essa configuração às vezes é chamada de dedo de Deus. Ela não representa necessariamente um destino predeterminado, mas pode indicar um caminho especialmente exigente e evolutivo.",
      ],
    },

    transits: {
      title:
        "O quincúncio nos trânsitos astrológicos",

      paragraphs: [
        "Um quincúncio também pode se formar quando um planeta em movimento cria um ângulo de 150 graus com um planeta do mapa natal.",

        "Esse trânsito pode corresponder a um período em que uma organização, um relacionamento, um hábito ou uma direção de vida precisa ser reajustada.",

        "Os acontecimentos podem parecer inesperados ou difíceis de compreender, mas frequentemente chamam a atenção para um desequilíbrio que não pode mais ser ignorado.",
      ],
    },

    cta: {
      kicker:
        "Descubra seu mapa natal",

      title:
        "Você possui um quincúncio importante no seu mapa natal?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir seus planetas, suas casas e os principais aspectos presentes no nascimento.",

      button:
        "Ver meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre o quincúncio na astrologia",

      items: [
        {
          question:
            "O que é um quincúncio na astrologia?",

          answer:
            "Um quincúncio se forma quando dois planetas estão separados por um ângulo de aproximadamente 150 graus. Ele representa um desalinhamento entre duas funções que precisam ser reajustadas regularmente.",
        },

        {
          question:
            "O quincúncio é um aspecto difícil?",

          answer:
            "O quincúncio pode ser desconfortável porque os dois planetas costumam ter dificuldade para se compreender. Ele nem sempre cria conflito direto, mas sim uma sensação persistente de desequilíbrio.",
        },

        {
          question:
            "Qual orbe deve ser usado para um quincúncio?",

          answer:
            "O quincúncio costuma ser interpretado com um orbe estreito, geralmente entre 2 e 3 graus. Alguns astrólogos utilizam uma margem um pouco maior quando o Sol ou a Lua está envolvido.",
        },

        {
          question:
            "Qual é a diferença entre um quincúncio e uma quadratura?",

          answer:
            "A quadratura cria uma tensão direta que impulsiona a ação. O quincúncio produz um desalinhamento mais difícil de identificar e exige ajustes repetidos.",
        },

        {
          question:
            "Por que o quincúncio é difícil de compreender?",

          answer:
            "Os signos ligados por um quincúncio geralmente não compartilham nem o mesmo elemento nem a mesma modalidade. Portanto, funcionam segundo lógicas muito diferentes.",
        },

        {
          question:
            "Um quincúncio pode se tornar uma força?",

          answer:
            "Sim. Com o tempo, os ajustes exigidos pelo quincúncio podem desenvolver grande capacidade de adaptação, consciência e transformação pessoal.",
        },

        {
          question:
            "Como saber se tenho um quincúncio no mapa natal?",

          answer:
            "Você deve gerar seu mapa natal e comparar as posições dos planetas. Dois planetas separados por aproximadamente 150 graus podem formar um quincúncio.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegação entre os aspectos astrológicos",

      previous:
        "Voltar para todos os aspectos: sextil",

      next:
        "Ver todos os aspectos",
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
