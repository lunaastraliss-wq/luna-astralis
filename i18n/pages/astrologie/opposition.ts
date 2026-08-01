// i18n/pages/astrologie/opposition.ts

import type {
  Locale,
} from "@/i18n/config";

export type OppositionExample = {
  planets: string;
  symbol: string;
  keywords: string;
  text: string;
};

export type OppositionFaqItem = {
  question: string;
  answer: string;
};

export type OppositionCard = {
  number: string;
  title: string;
  text: string;
};

export type OppositionPolarityCard = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type OppositionMethod = {
  number: string;
  title: string;
  text: string;
};

export type OppositionOrb = {
  value: string;
  title: string;
  text: string;
};

export type OppositionAxis = {
  symbol: string;
  title: string;
  text: string;
};

export type OppositionHouseAxis = {
  title: string;
  text: string;
};

export type OppositionPageText = {
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
    cards: OppositionCard[];
  };

  difficulty: {
    kicker: string;
    title: string;
    introduction: string;
    cards: OppositionPolarityCard[];
  };

  interpretation: {
    kicker: string;
    title: string;
    methods: OppositionMethod[];
  };

  orb: {
    title: string;
    introduction: string;
    cards: OppositionOrb[];
    conclusion: string;
  };

  examplesSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  examples: OppositionExample[];

  axesSection: {
    title: string;
    introduction: string;
  };

  axes: OppositionAxis[];

  housesSection: {
    title: string;
    introduction: string;
  };

  houses: OppositionHouseAxis[];

  projection: {
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
    items: OppositionFaqItem[];
  };

  navigation: {
    ariaLabel: string;
    previous: string;
    next: string;
  };

  disclaimer: string;
};

export const OPPOSITION_TRANSLATIONS:
  Record<
    Locale,
    OppositionPageText
  > = {
  fr: {
    metadata: {
      title:
        "L’opposition en astrologie : signification dans le thème natal | Luna Astralis",

      description:
        "Découvrez la signification de l’opposition en astrologie, son angle de 180°, ses effets entre les planètes et son interprétation dans un thème natal.",

      ogTitle:
        "L’opposition en astrologie : polarité, tension et équilibre",

      ogDescription:
        "Comprenez comment l’opposition place deux planètes face à face et invite à équilibrer deux besoins complémentaires dans le thème natal.",

      twitterTitle:
        "L’opposition en astrologie | Luna Astralis",

      twitterDescription:
        "Angle de 180°, polarité, projection et recherche d’équilibre dans le thème natal.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "L’opposition en astrologie : signification dans le thème natal",

      description:
        "Guide complet pour comprendre l’opposition astrologique, son angle de 180 degrés, son orbe et son interprétation entre les planètes.",
    },

    breadcrumb: {
      home:
        "Accueil",

      aspects:
        "Aspects",

      current:
        "Opposition",

      ariaLabel:
        "Fil d’Ariane",
    },

    hero: {
      badge:
        "✦ Aspect astrologique majeur",

      symbol:
        "☍",

      title:
        "L’opposition en astrologie",

      lead:
        "L’opposition se forme lorsque deux planètes se trouvent face à face dans le zodiaque. Elle met en lumière une polarité intérieure et invite à réunir deux besoins qui semblent d’abord contradictoires.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "180°",

        dynamicLabel:
          "Dynamique",

        dynamicValue:
          "Polarité",

        functionLabel:
          "Fonction",

        functionValue:
          "Équilibre",
      },

      createChart:
        "Créer ma carte du ciel gratuite",

      understand:
        "Comprendre l’opposition",
    },

    meaning: {
      kicker:
        "Deux forces face à face",

      title:
        "Que signifie une opposition en astrologie ?",

      paragraphs: [
        "L’opposition est un aspect qui se forme lorsque deux planètes sont séparées par un angle d’environ 180 degrés. Elles occupent alors des positions opposées sur le cercle du zodiaque.",

        "Les deux planètes représentent des fonctions différentes qui cherchent toutes les deux à s’exprimer. La personne peut toutefois avoir l’impression qu’elle doit choisir l’une au détriment de l’autre.",

        "Le véritable travail de l’opposition consiste à reconnaître la valeur des deux pôles et à construire un équilibre. Elle ne demande pas d’éliminer une énergie, mais d’apprendre à les faire collaborer.",
      ],
    },

    functioning: {
      title:
        "Comment fonctionne l’opposition ?",

      cards: [
        {
          number:
            "01",

          title:
            "Deux besoins s’opposent",

          text:
            "Les planètes semblent tirer la personne dans deux directions différentes.",
        },

        {
          number:
            "02",

          title:
            "La tension devient visible",

          text:
            "L’opposition se manifeste souvent dans les relations, les choix ou les situations extérieures.",
        },

        {
          number:
            "03",

          title:
            "Une projection peut apparaître",

          text:
            "Une partie de l’aspect peut être attribuée aux autres avant d’être reconnue intérieurement.",
        },

        {
          number:
            "04",

          title:
            "Un équilibre devient possible",

          text:
            "Avec le temps, les deux planètes peuvent devenir complémentaires plutôt qu’adversaires.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Une tension qui crée la conscience",

      title:
        "L’opposition est-elle un aspect difficile ?",

      introduction:
        "L’opposition est généralement classée parmi les aspects dynamiques. Elle met en lumière des contradictions et peut créer une alternance entre deux comportements ou deux besoins.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "Le défi de l’opposition",

          paragraphs: [
            "La personne peut passer d’un pôle à l’autre sans parvenir à les réunir. Elle peut également vivre la tension à travers ses relations ou son environnement.",

            "L’impression de devoir choisir entre deux besoins peut produire de l’hésitation, de la frustration ou des réactions extrêmes.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Le potentiel de l’opposition",

          paragraphs: [
            "Une opposition intégrée permet de comprendre plusieurs perspectives et de développer une meilleure capacité d’adaptation.",

            "Elle peut favoriser la médiation, la négociation, la conscience de soi et la capacité de réunir des qualités complémentaires.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Les éléments à observer",

      title:
        "Comment interpréter une opposition dans un thème natal ?",

      methods: [
        {
          number:
            "1",

          title:
            "Identifier les deux planètes",

          text:
            "Il faut d’abord comprendre les fonctions représentées par chaque planète et la manière dont elles peuvent entrer en tension.",
        },

        {
          number:
            "2",

          title:
            "Observer les signes opposés",

          text:
            "Les signes indiquent deux manières différentes mais complémentaires d’exprimer la même polarité.",
        },

        {
          number:
            "3",

          title:
            "Étudier l’axe des maisons",

          text:
            "Les maisons concernées révèlent les deux domaines de vie qui cherchent à trouver un meilleur équilibre.",
        },

        {
          number:
            "4",

          title:
            "Repérer les projections",

          text:
            "Il est utile d’observer si l’une des planètes semble toujours être vécue à travers les autres ou les circonstances.",
        },

        {
          number:
            "5",

          title:
            "Chercher une voie d’intégration",

          text:
            "L’objectif est de permettre aux deux planètes de s’exprimer sans que l’une domine constamment l’autre.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe de l’opposition",

      introduction:
        "L’orbe représente l’écart entre l’angle exact de 180 degrés et la position réelle des planètes. Une opposition peut souvent être interprétée jusqu’à environ 8 degrés.",

      cards: [
        {
          value:
            "0° à 2°",

          title:
            "Opposition très serrée",

          text:
            "La polarité est très intense et peut devenir l’un des thèmes centraux de la personnalité.",
        },

        {
          value:
            "3° à 5°",

          title:
            "Opposition forte",

          text:
            "La tension entre les deux planètes reste clairement perceptible dans les décisions et les relations.",
        },

        {
          value:
            "6° à 8°",

          title:
            "Opposition plus large",

          text:
            "L’aspect peut encore être significatif, surtout lorsqu’il implique le Soleil ou la Lune.",
        },
      ],

      conclusion:
        "Plus l’opposition est exacte, plus elle peut être visible. Toutefois, la force d’un aspect dépend également de la place des planètes dans l’ensemble du thème natal.",
    },

    examplesSection: {
      kicker:
        "Exemples d’interprétation",

      title:
        "Les principales oppositions entre les planètes",

      introduction:
        "Une opposition s’exprime toujours selon le signe, les maisons et les autres aspects du thème. Les exemples suivants présentent leur dynamique générale.",
    },

    examples: [
      {
        planets:
          "Soleil opposé Lune",

        symbol:
          "☀ ☍ ☽",

        keywords:
          "Identité • émotions • équilibre intérieur",

        text:
          "Le Soleil opposé à la Lune peut créer une tension entre l’identité consciente et les besoins émotionnels. La personne cherche souvent à concilier ce qu’elle veut devenir avec ce dont elle a besoin pour se sentir en sécurité.",
      },

      {
        planets:
          "Mercure opposé Jupiter",

        symbol:
          "☿ ☍ ♃",

        keywords:
          "Détails • vision globale • jugement",

        text:
          "Mercure opposé à Jupiter peut opposer la pensée précise à une vision plus large. Cette configuration favorise les grandes idées, mais demande d’éviter les conclusions rapides ou les exagérations.",
      },

      {
        planets:
          "Vénus opposée Mars",

        symbol:
          "♀ ☍ ♂",

        keywords:
          "Attirance • désir • dynamique relationnelle",

        text:
          "Vénus opposée à Mars peut produire une forte attraction et une vie relationnelle intense. Le désir d’harmonie et le besoin d’agir peuvent toutefois entrer régulièrement en conflit.",
      },

      {
        planets:
          "Mars opposé Saturne",

        symbol:
          "♂ ☍ ♄",

        keywords:
          "Action • blocage • persévérance",

        text:
          "Mars opposé à Saturne peut créer une alternance entre l’impulsion d’avancer et la sensation d’être freiné. Avec le temps, cet aspect peut développer une grande endurance et une meilleure maîtrise de l’effort.",
      },

      {
        planets:
          "Jupiter opposé Saturne",

        symbol:
          "♃ ☍ ♄",

        keywords:
          "Expansion • prudence • maturité",

        text:
          "Jupiter opposé à Saturne met en tension le désir de croissance et le besoin de sécurité. La personne doit apprendre à avancer sans négliger les limites ni abandonner ses ambitions.",
      },

      {
        planets:
          "Lune opposée Pluton",

        symbol:
          "☽ ☍ ♇",

        keywords:
          "Émotions • contrôle • transformation",

        text:
          "La Lune opposée à Pluton peut intensifier les réactions émotionnelles et les rapports de pouvoir. Cet aspect invite à reconnaître les peurs profondes et à transformer les mécanismes de contrôle.",
      },
    ],

    axesSection: {
      title:
        "Les six axes de signes opposés",

      introduction:
        "Les signes opposés appartiennent au même mode, mais à des éléments différents. Ils représentent deux expressions complémentaires d’une même grande dynamique.",
    },

    axes: [
      {
        symbol:
          "♈ — ♎",

        title:
          "Bélier et Balance",

        text:
          "Trouver l’équilibre entre l’affirmation personnelle et la coopération avec les autres.",
      },

      {
        symbol:
          "♉ — ♏",

        title:
          "Taureau et Scorpion",

        text:
          "Concilier la stabilité, la sécurité et le lâcher-prise nécessaire à la transformation.",
      },

      {
        symbol:
          "♊ — ♐",

        title:
          "Gémeaux et Sagittaire",

        text:
          "Réunir les faits, les questions, les connaissances et une vision plus globale de l’existence.",
      },

      {
        symbol:
          "♋ — ♑",

        title:
          "Cancer et Capricorne",

        text:
          "Équilibrer la vie émotionnelle, la famille, les responsabilités et les ambitions extérieures.",
      },

      {
        symbol:
          "♌ — ♒",

        title:
          "Lion et Verseau",

        text:
          "Concilier l’expression individuelle, la créativité et la contribution à une vision collective.",
      },

      {
        symbol:
          "♍ — ♓",

        title:
          "Vierge et Poissons",

        text:
          "Trouver un équilibre entre l’organisation concrète, l’intuition, la sensibilité et le lâcher-prise.",
      },
    ],

    housesSection: {
      title:
        "L’opposition dans les maisons astrologiques",

      introduction:
        "Une opposition relie toujours deux maisons situées face à face. Elle met donc en tension deux domaines de vie qui doivent apprendre à fonctionner ensemble.",
    },

    houses: [
      {
        title:
          "Maisons 1 et 7",

        text:
          "Équilibre entre l’identité personnelle, l’autonomie, les relations et les engagements.",
      },

      {
        title:
          "Maisons 2 et 8",

        text:
          "Tension entre les ressources personnelles, le partage, l’intimité et les transformations.",
      },

      {
        title:
          "Maisons 3 et 9",

        text:
          "Recherche d’équilibre entre les informations concrètes, les apprentissages et les grandes convictions.",
      },

      {
        title:
          "Maisons 4 et 10",

        text:
          "Conciliation de la vie privée, des racines, de la carrière et de la place occupée dans le monde.",
      },

      {
        title:
          "Maisons 5 et 11",

        text:
          "Équilibre entre l’expression personnelle, la créativité, les projets collectifs et les groupes.",
      },

      {
        title:
          "Maisons 6 et 12",

        text:
          "Relation entre le quotidien, les responsabilités, le repos, la vie intérieure et le lâcher-prise.",
      },
    ],

    projection: {
      kicker:
        "Le mécanisme de projection",

      title:
        "Pourquoi l’opposition se manifeste-t-elle souvent dans les relations ?",

      symbol:
        "☍",

      subtitle:
        "Reconnaître l’autre pôle en soi",

      paragraphs: [
        "Dans une opposition, il est fréquent de s’identifier davantage à l’une des planètes. L’autre énergie peut alors sembler venir uniquement des partenaires, des proches ou des circonstances.",

        "Une personne ayant Vénus opposée à Saturne peut par exemple se percevoir comme affectueuse tout en rencontrant régulièrement des partenaires plus réservés ou exigeants.",

        "L’évolution commence lorsque la personne reconnaît que les deux planètes appartiennent à son propre fonctionnement intérieur.",
      ],
    },

    transits: {
      title:
        "L’opposition dans les transits astrologiques",

      paragraphs: [
        "Une opposition peut également se produire lorsqu’une planète en mouvement se place face à une planète de votre thème natal.",

        "Ce transit peut mettre en lumière une tension déjà présente, provoquer une prise de conscience ou demander un rééquilibrage dans un domaine précis de votre vie.",

        "Les oppositions de Saturne peuvent souligner des responsabilités ou des limites, tandis que celles de Jupiter peuvent exagérer une situation afin de révéler ce qui manque d’équilibre.",
      ],
    },

    cta: {
      kicker:
        "Découvrez votre thème natal",

      title:
        "Avez-vous une opposition importante dans votre carte du ciel ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir vos planètes, vos maisons et les principaux aspects de votre naissance.",

      button:
        "Voir ma carte du ciel",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur l’opposition en astrologie",

      items: [
        {
          question:
            "Qu’est-ce qu’une opposition en astrologie ?",

          answer:
            "Une opposition se forme lorsque deux planètes sont séparées par un angle d’environ 180 degrés. Elles se trouvent symboliquement face à face et représentent deux besoins qu’il faut apprendre à équilibrer.",
        },

        {
          question:
            "L’opposition est-elle un aspect négatif ?",

          answer:
            "Non. L’opposition peut créer des tensions, des projections ou des contradictions, mais elle favorise aussi la conscience, la complémentarité et la recherche d’un meilleur équilibre.",
        },

        {
          question:
            "Quel orbe utiliser pour une opposition ?",

          answer:
            "L’orbe varie selon les méthodes. Une opposition est souvent interprétée jusqu’à environ 8 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est concerné.",
        },

        {
          question:
            "Que signifie une opposition entre deux signes ?",

          answer:
            "Les signes opposés appartiennent généralement au même mode et à des éléments complémentaires. Ils représentent deux manières différentes mais liées d’aborder une même dynamique.",
        },

        {
          question:
            "Pourquoi l’opposition crée-t-elle de la projection ?",

          answer:
            "Une personne peut reconnaître plus facilement l’une des planètes et attribuer l’autre à son entourage. Elle rencontre alors cette énergie à travers ses relations avant de parvenir à l’intégrer intérieurement.",
        },

        {
          question:
            "Une opposition peut-elle devenir une force ?",

          answer:
            "Oui. Lorsqu’elle est comprise et équilibrée, l’opposition peut développer la capacité de voir plusieurs points de vue, de négocier, de créer des ponts et de réunir des besoins complémentaires.",
        },

        {
          question:
            "Comment savoir si j’ai une opposition dans mon thème natal ?",

          answer:
            "Il faut générer votre carte du ciel et comparer la position de vos planètes. Deux planètes situées presque à 180 degrés l’une de l’autre peuvent former une opposition.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation entre les aspects astrologiques",

      previous:
        "Aspect précédent : conjonction",

      next:
        "Aspect suivant : carré",
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Opposition in Astrology: Meaning in the Birth Chart | Luna Astralis",

      description:
        "Discover the meaning of opposition in astrology, its 180° angle, its effects between planets and its interpretation in a birth chart.",

      ogTitle:
        "Opposition in Astrology: Polarity, Tension and Balance",

      ogDescription:
        "Understand how an opposition places two planets face to face and invites you to balance two complementary needs in the birth chart.",

      twitterTitle:
        "Opposition in Astrology | Luna Astralis",

      twitterDescription:
        "A 180° angle, polarity, projection and the search for balance in the birth chart.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Opposition in Astrology: Meaning in the Birth Chart",

      description:
        "A complete guide to understanding astrological opposition, its 180-degree angle, its orb and its interpretation between planets.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspects",

      current:
        "Opposition",

      ariaLabel:
        "Breadcrumb",
    },

    hero: {
      badge:
        "✦ Major astrological aspect",

      symbol:
        "☍",

      title:
        "Opposition in Astrology",

      lead:
        "An opposition forms when two planets face each other across the zodiac. It highlights an inner polarity and invites you to unite two needs that may initially appear contradictory.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "180°",

        dynamicLabel:
          "Dynamic",

        dynamicValue:
          "Polarity",

        functionLabel:
          "Function",

        functionValue:
          "Balance",
      },

      createChart:
        "Create my free birth chart",

      understand:
        "Understand opposition",
    },

    meaning: {
      kicker:
        "Two forces facing each other",

      title:
        "What does an opposition mean in astrology?",

      paragraphs: [
        "An opposition is an aspect formed when two planets are separated by an angle of approximately 180 degrees. They occupy opposite positions on the zodiac circle.",

        "The two planets represent different functions that both seek expression. The person may nevertheless feel that one must be chosen at the expense of the other.",

        "The real work of an opposition is to recognize the value of both poles and build balance. It does not require eliminating one energy, but learning how to make both energies cooperate.",
      ],
    },

    functioning: {
      title:
        "How does an opposition work?",

      cards: [
        {
          number:
            "01",

          title:
            "Two needs oppose each other",

          text:
            "The planets appear to pull the person in two different directions.",
        },

        {
          number:
            "02",

          title:
            "The tension becomes visible",

          text:
            "The opposition often appears through relationships, choices or external situations.",
        },

        {
          number:
            "03",

          title:
            "Projection may appear",

          text:
            "Part of the aspect may be attributed to other people before being recognized internally.",
        },

        {
          number:
            "04",

          title:
            "Balance becomes possible",

          text:
            "Over time, the two planets may become complementary rather than adversarial.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Tension that creates awareness",

      title:
        "Is opposition a difficult aspect?",

      introduction:
        "Opposition is generally classified as a dynamic aspect. It highlights contradictions and may create alternation between two behaviors or needs.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "The challenge of opposition",

          paragraphs: [
            "The person may move from one pole to the other without being able to unite them. The tension may also be experienced through relationships or the surrounding environment.",

            "The feeling of having to choose between two needs may create hesitation, frustration or extreme reactions.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "The potential of opposition",

          paragraphs: [
            "An integrated opposition helps a person understand several perspectives and develop greater adaptability.",

            "It may encourage mediation, negotiation, self-awareness and the ability to unite complementary qualities.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "The elements to observe",

      title:
        "How do you interpret an opposition in a birth chart?",

      methods: [
        {
          number:
            "1",

          title:
            "Identify the two planets",

          text:
            "First, understand the functions represented by each planet and how they may come into tension.",
        },

        {
          number:
            "2",

          title:
            "Observe the opposing signs",

          text:
            "The signs indicate two different but complementary ways of expressing the same polarity.",
        },

        {
          number:
            "3",

          title:
            "Study the house axis",

          text:
            "The houses involved reveal the two areas of life that seek a better balance.",
        },

        {
          number:
            "4",

          title:
            "Identify projections",

          text:
            "It is useful to observe whether one planet always seems to be experienced through other people or circumstances.",
        },

        {
          number:
            "5",

          title:
            "Find a path of integration",

          text:
            "The goal is to allow both planets to express themselves without one constantly dominating the other.",
        },
      ],
    },

    orb: {
      title:
        "The orb of an opposition",

      introduction:
        "The orb represents the difference between the exact 180-degree angle and the planets’ actual positions. An opposition may often be interpreted within an orb of approximately 8 degrees.",

      cards: [
        {
          value:
            "0° to 2°",

          title:
            "Very tight opposition",

          text:
            "The polarity is highly intense and may become one of the central themes of the personality.",
        },

        {
          value:
            "3° to 5°",

          title:
            "Strong opposition",

          text:
            "The tension between the two planets remains clearly noticeable in decisions and relationships.",
        },

        {
          value:
            "6° to 8°",

          title:
            "Wider opposition",

          text:
            "The aspect may still be meaningful, especially when it involves the Sun or Moon.",
        },
      ],

      conclusion:
        "The more exact the opposition, the more visible it may become. However, the strength of an aspect also depends on the planets’ importance within the entire birth chart.",
    },

    examplesSection: {
      kicker:
        "Interpretation examples",

      title:
        "The main oppositions between planets",

      introduction:
        "An opposition is always expressed according to its signs, houses and the other aspects in the chart. The following examples present their general dynamics.",
    },

    examples: [
      {
        planets:
          "Sun opposite Moon",

        symbol:
          "☀ ☍ ☽",

        keywords:
          "Identity • emotions • inner balance",

        text:
          "The Sun opposite the Moon may create tension between conscious identity and emotional needs. The person often seeks to reconcile what they want to become with what they need in order to feel secure.",
      },

      {
        planets:
          "Mercury opposite Jupiter",

        symbol:
          "☿ ☍ ♃",

        keywords:
          "Details • broad vision • judgment",

        text:
          "Mercury opposite Jupiter may place precise thinking against a broader vision. This configuration supports big ideas but requires avoiding quick conclusions or exaggeration.",
      },

      {
        planets:
          "Venus opposite Mars",

        symbol:
          "♀ ☍ ♂",

        keywords:
          "Attraction • desire • relationship dynamics",

        text:
          "Venus opposite Mars may produce strong attraction and an intense relationship life. The desire for harmony and the need to act may nevertheless come into conflict regularly.",
      },

      {
        planets:
          "Mars opposite Saturn",

        symbol:
          "♂ ☍ ♄",

        keywords:
          "Action • restriction • perseverance",

        text:
          "Mars opposite Saturn may create alternation between the impulse to move forward and the feeling of being restrained. Over time, this aspect may develop great endurance and better control of effort.",
      },

      {
        planets:
          "Jupiter opposite Saturn",

        symbol:
          "♃ ☍ ♄",

        keywords:
          "Expansion • caution • maturity",

        text:
          "Jupiter opposite Saturn creates tension between the desire for growth and the need for security. The person must learn to advance without ignoring limits or abandoning ambitions.",
      },

      {
        planets:
          "Moon opposite Pluto",

        symbol:
          "☽ ☍ ♇",

        keywords:
          "Emotions • control • transformation",

        text:
          "The Moon opposite Pluto may intensify emotional reactions and power dynamics. This aspect invites the recognition of deep fears and the transformation of controlling patterns.",
      },
    ],

    axesSection: {
      title:
        "The six axes of opposing signs",

      introduction:
        "Opposing signs share the same modality but belong to different elements. They represent two complementary expressions of the same larger dynamic.",
    },

    axes: [
      {
        symbol:
          "♈ — ♎",

        title:
          "Aries and Libra",

        text:
          "Find balance between personal assertion and cooperation with others.",
      },

      {
        symbol:
          "♉ — ♏",

        title:
          "Taurus and Scorpio",

        text:
          "Reconcile stability and security with the surrender required for transformation.",
      },

      {
        symbol:
          "♊ — ♐",

        title:
          "Gemini and Sagittarius",

        text:
          "Unite facts, questions and knowledge with a broader vision of existence.",
      },

      {
        symbol:
          "♋ — ♑",

        title:
          "Cancer and Capricorn",

        text:
          "Balance emotional life, family, responsibilities and external ambitions.",
      },

      {
        symbol:
          "♌ — ♒",

        title:
          "Leo and Aquarius",

        text:
          "Reconcile individual expression and creativity with contribution to a collective vision.",
      },

      {
        symbol:
          "♍ — ♓",

        title:
          "Virgo and Pisces",

        text:
          "Find balance between practical organization, intuition, sensitivity and surrender.",
      },
    ],

    housesSection: {
      title:
        "Opposition in the astrological houses",

      introduction:
        "An opposition always connects two houses located opposite each other. It therefore creates tension between two areas of life that must learn to function together.",
    },

    houses: [
      {
        title:
          "Houses 1 and 7",

        text:
          "Balance between personal identity, autonomy, relationships and commitments.",
      },

      {
        title:
          "Houses 2 and 8",

        text:
          "Tension between personal resources, sharing, intimacy and transformation.",
      },

      {
        title:
          "Houses 3 and 9",

        text:
          "Search for balance between concrete information, learning and larger convictions.",
      },

      {
        title:
          "Houses 4 and 10",

        text:
          "Reconciliation of private life, roots, career and the place occupied in the world.",
      },

      {
        title:
          "Houses 5 and 11",

        text:
          "Balance between personal expression, creativity, collective projects and groups.",
      },

      {
        title:
          "Houses 6 and 12",

        text:
          "Relationship between daily life, responsibilities, rest, inner life and surrender.",
      },
    ],

    projection: {
      kicker:
        "The projection mechanism",

      title:
        "Why does opposition often appear in relationships?",

      symbol:
        "☍",

      subtitle:
        "Recognize the other pole within yourself",

      paragraphs: [
        "In an opposition, it is common to identify more strongly with one planet. The other energy may then appear to come only from partners, relatives or circumstances.",

        "A person with Venus opposite Saturn may, for example, see themselves as affectionate while repeatedly meeting partners who are more reserved or demanding.",

        "Growth begins when the person recognizes that both planets belong to their own inner functioning.",
      ],
    },

    transits: {
      title:
        "Opposition in astrological transits",

      paragraphs: [
        "An opposition may also occur when a moving planet positions itself opposite a planet in your birth chart.",

        "This transit may highlight an existing tension, create awareness or require rebalancing in a specific area of your life.",

        "Saturn oppositions may emphasize responsibilities or limits, while Jupiter oppositions may exaggerate a situation in order to reveal what lacks balance.",
      ],
    },

    cta: {
      kicker:
        "Discover your birth chart",

      title:
        "Do you have an important opposition in your birth chart?",

      text:
        "Generate your free birth chart to discover your planets, houses and the main aspects present at your birth.",

      button:
        "View my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about opposition in astrology",

      items: [
        {
          question:
            "What is an opposition in astrology?",

          answer:
            "An opposition forms when two planets are separated by an angle of approximately 180 degrees. They symbolically face each other and represent two needs that must be balanced.",
        },

        {
          question:
            "Is opposition a negative aspect?",

          answer:
            "No. Opposition may create tension, projection or contradiction, but it also encourages awareness, complementarity and the search for better balance.",
        },

        {
          question:
            "What orb should be used for an opposition?",

          answer:
            "The orb varies according to the method used. An opposition is often interpreted within approximately 8 degrees, with a wider margin sometimes used when the Sun or Moon is involved.",
        },

        {
          question:
            "What does opposition between two signs mean?",

          answer:
            "Opposing signs generally share the same modality and belong to complementary elements. They represent two different but connected ways of approaching the same dynamic.",
        },

        {
          question:
            "Why does opposition create projection?",

          answer:
            "A person may recognize one planet more easily and attribute the other to people around them. They then encounter this energy through relationships before integrating it internally.",
        },

        {
          question:
            "Can an opposition become a strength?",

          answer:
            "Yes. When it is understood and balanced, an opposition may develop the ability to see several perspectives, negotiate, build bridges and unite complementary needs.",
        },

        {
          question:
            "How can I know whether I have an opposition in my birth chart?",

          answer:
            "You must generate your birth chart and compare the positions of your planets. Two planets located almost 180 degrees apart may form an opposition.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation between astrological aspects",

      previous:
        "Previous aspect: conjunction",

      next:
        "Next aspect: square",
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "La oposición en astrología: significado en la carta natal | Luna Astralis",

      description:
        "Descubre el significado de la oposición en astrología, su ángulo de 180°, sus efectos entre los planetas y su interpretación en una carta natal.",

      ogTitle:
        "La oposición en astrología: polaridad, tensión y equilibrio",

      ogDescription:
        "Comprende cómo la oposición sitúa dos planetas frente a frente e invita a equilibrar dos necesidades complementarias en la carta natal.",

      twitterTitle:
        "La oposición en astrología | Luna Astralis",

      twitterDescription:
        "Ángulo de 180°, polaridad, proyección y búsqueda de equilibrio en la carta natal.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "La oposición en astrología: significado en la carta natal",

      description:
        "Guía completa para comprender la oposición astrológica, su ángulo de 180 grados, su orbe y su interpretación entre los planetas.",
    },

    breadcrumb: {
      home:
        "Inicio",

      aspects:
        "Aspectos",

      current:
        "Oposición",

      ariaLabel:
        "Migas de pan",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico mayor",

      symbol:
        "☍",

      title:
        "La oposición en astrología",

      lead:
        "La oposición se forma cuando dos planetas se encuentran frente a frente en el zodiaco. Destaca una polaridad interior e invita a reunir dos necesidades que al principio pueden parecer contradictorias.",

      data: {
        angleLabel:
          "Ángulo",

        angleValue:
          "180°",

        dynamicLabel:
          "Dinámica",

        dynamicValue:
          "Polaridad",

        functionLabel:
          "Función",

        functionValue:
          "Equilibrio",
      },

      createChart:
        "Crear mi carta natal gratis",

      understand:
        "Comprender la oposición",
    },

    meaning: {
      kicker:
        "Dos fuerzas frente a frente",

      title:
        "¿Qué significa una oposición en astrología?",

      paragraphs: [
        "La oposición es un aspecto que se forma cuando dos planetas están separados por un ángulo de aproximadamente 180 grados. Entonces ocupan posiciones opuestas en el círculo zodiacal.",

        "Los dos planetas representan funciones diferentes que buscan expresarse. Sin embargo, la persona puede tener la impresión de que debe elegir una en detrimento de la otra.",

        "El verdadero trabajo de la oposición consiste en reconocer el valor de ambos polos y construir un equilibrio. No exige eliminar una energía, sino aprender a hacerlas colaborar.",
      ],
    },

    functioning: {
      title:
        "¿Cómo funciona la oposición?",

      cards: [
        {
          number:
            "01",

          title:
            "Dos necesidades se oponen",

          text:
            "Los planetas parecen llevar a la persona en dos direcciones diferentes.",
        },

        {
          number:
            "02",

          title:
            "La tensión se vuelve visible",

          text:
            "La oposición suele manifestarse en las relaciones, las decisiones o las situaciones externas.",
        },

        {
          number:
            "03",

          title:
            "Puede aparecer una proyección",

          text:
            "Una parte del aspecto puede atribuirse a los demás antes de ser reconocida interiormente.",
        },

        {
          number:
            "04",

          title:
            "El equilibrio se vuelve posible",

          text:
            "Con el tiempo, los dos planetas pueden volverse complementarios en lugar de adversarios.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Una tensión que crea conciencia",

      title:
        "¿Es la oposición un aspecto difícil?",

      introduction:
        "La oposición suele clasificarse entre los aspectos dinámicos. Destaca contradicciones y puede crear una alternancia entre dos comportamientos o dos necesidades.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "El desafío de la oposición",

          paragraphs: [
            "La persona puede pasar de un polo al otro sin conseguir reunirlos. También puede vivir la tensión a través de sus relaciones o de su entorno.",

            "La impresión de tener que elegir entre dos necesidades puede producir dudas, frustración o reacciones extremas.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "El potencial de la oposición",

          paragraphs: [
            "Una oposición integrada permite comprender varias perspectivas y desarrollar una mejor capacidad de adaptación.",

            "Puede favorecer la mediación, la negociación, la conciencia de uno mismo y la capacidad de reunir cualidades complementarias.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Los elementos que deben observarse",

      title:
        "¿Cómo interpretar una oposición en una carta natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar los dos planetas",

          text:
            "Primero hay que comprender las funciones representadas por cada planeta y la manera en que pueden entrar en tensión.",
        },

        {
          number:
            "2",

          title:
            "Observar los signos opuestos",

          text:
            "Los signos indican dos maneras diferentes pero complementarias de expresar la misma polaridad.",
        },

        {
          number:
            "3",

          title:
            "Estudiar el eje de casas",

          text:
            "Las casas implicadas revelan los dos ámbitos de vida que buscan encontrar un mejor equilibrio.",
        },

        {
          number:
            "4",

          title:
            "Detectar las proyecciones",

          text:
            "Conviene observar si uno de los planetas parece vivirse siempre a través de los demás o de las circunstancias.",
        },

        {
          number:
            "5",

          title:
            "Buscar una vía de integración",

          text:
            "El objetivo es permitir que ambos planetas se expresen sin que uno domine constantemente al otro.",
        },
      ],
    },

    orb: {
      title:
        "El orbe de la oposición",

      introduction:
        "El orbe representa la diferencia entre el ángulo exacto de 180 grados y la posición real de los planetas. Una oposición suele interpretarse hasta un orbe aproximado de 8 grados.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Oposición muy cerrada",

          text:
            "La polaridad es muy intensa y puede convertirse en uno de los temas centrales de la personalidad.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Oposición fuerte",

          text:
            "La tensión entre los dos planetas sigue siendo claramente perceptible en las decisiones y las relaciones.",
        },

        {
          value:
            "6° a 8°",

          title:
            "Oposición más amplia",

          text:
            "El aspecto aún puede ser significativo, especialmente cuando implica al Sol o a la Luna.",
        },
      ],

      conclusion:
        "Cuanto más exacta es la oposición, más visible puede resultar. Sin embargo, la fuerza de un aspecto también depende de la importancia de los planetas en el conjunto de la carta natal.",
    },

    examplesSection: {
      kicker:
        "Ejemplos de interpretación",

      title:
        "Las principales oposiciones entre los planetas",

      introduction:
        "Una oposición siempre se expresa según los signos, las casas y los demás aspectos de la carta. Los siguientes ejemplos presentan su dinámica general.",
    },

    examples: [
      {
        planets:
          "Sol opuesto a la Luna",

        symbol:
          "☀ ☍ ☽",

        keywords:
          "Identidad • emociones • equilibrio interior",

        text:
          "El Sol opuesto a la Luna puede crear una tensión entre la identidad consciente y las necesidades emocionales. La persona suele intentar conciliar lo que desea llegar a ser con lo que necesita para sentirse segura.",
      },

      {
        planets:
          "Mercurio opuesto a Júpiter",

        symbol:
          "☿ ☍ ♃",

        keywords:
          "Detalles • visión global • juicio",

        text:
          "Mercurio opuesto a Júpiter puede enfrentar el pensamiento preciso con una visión más amplia. Esta configuración favorece las grandes ideas, pero exige evitar las conclusiones apresuradas o las exageraciones.",
      },

      {
        planets:
          "Venus opuesta a Marte",

        symbol:
          "♀ ☍ ♂",

        keywords:
          "Atracción • deseo • dinámica relacional",

        text:
          "Venus opuesta a Marte puede producir una fuerte atracción y una vida relacional intensa. Sin embargo, el deseo de armonía y la necesidad de actuar pueden entrar regularmente en conflicto.",
      },

      {
        planets:
          "Marte opuesto a Saturno",

        symbol:
          "♂ ☍ ♄",

        keywords:
          "Acción • bloqueo • perseverancia",

        text:
          "Marte opuesto a Saturno puede crear una alternancia entre el impulso de avanzar y la sensación de estar frenado. Con el tiempo, este aspecto puede desarrollar una gran resistencia y un mejor control del esfuerzo.",
      },

      {
        planets:
          "Júpiter opuesto a Saturno",

        symbol:
          "♃ ☍ ♄",

        keywords:
          "Expansión • prudencia • madurez",

        text:
          "Júpiter opuesto a Saturno crea tensión entre el deseo de crecimiento y la necesidad de seguridad. La persona debe aprender a avanzar sin ignorar los límites ni abandonar sus ambiciones.",
      },

      {
        planets:
          "Luna opuesta a Plutón",

        symbol:
          "☽ ☍ ♇",

        keywords:
          "Emociones • control • transformación",

        text:
          "La Luna opuesta a Plutón puede intensificar las reacciones emocionales y las dinámicas de poder. Este aspecto invita a reconocer los miedos profundos y transformar los mecanismos de control.",
      },
    ],

    axesSection: {
      title:
        "Los seis ejes de signos opuestos",

      introduction:
        "Los signos opuestos comparten la misma modalidad, pero pertenecen a elementos diferentes. Representan dos expresiones complementarias de una misma gran dinámica.",
    },

    axes: [
      {
        symbol:
          "♈ — ♎",

        title:
          "Aries y Libra",

        text:
          "Encontrar el equilibrio entre la afirmación personal y la cooperación con los demás.",
      },

      {
        symbol:
          "♉ — ♏",

        title:
          "Tauro y Escorpio",

        text:
          "Conciliar la estabilidad y la seguridad con la entrega necesaria para la transformación.",
      },

      {
        symbol:
          "♊ — ♐",

        title:
          "Géminis y Sagitario",

        text:
          "Reunir los hechos, las preguntas y los conocimientos con una visión más amplia de la existencia.",
      },

      {
        symbol:
          "♋ — ♑",

        title:
          "Cáncer y Capricornio",

        text:
          "Equilibrar la vida emocional, la familia, las responsabilidades y las ambiciones externas.",
      },

      {
        symbol:
          "♌ — ♒",

        title:
          "Leo y Acuario",

        text:
          "Conciliar la expresión individual y la creatividad con la contribución a una visión colectiva.",
      },

      {
        symbol:
          "♍ — ♓",

        title:
          "Virgo y Piscis",

        text:
          "Encontrar el equilibrio entre la organización concreta, la intuición, la sensibilidad y la entrega.",
      },
    ],

    housesSection: {
      title:
        "La oposición en las casas astrológicas",

      introduction:
        "Una oposición siempre relaciona dos casas situadas frente a frente. Por lo tanto, crea tensión entre dos ámbitos de vida que deben aprender a funcionar juntos.",
    },

    houses: [
      {
        title:
          "Casas 1 y 7",

        text:
          "Equilibrio entre la identidad personal, la autonomía, las relaciones y los compromisos.",
      },

      {
        title:
          "Casas 2 y 8",

        text:
          "Tensión entre los recursos personales, el intercambio, la intimidad y las transformaciones.",
      },

      {
        title:
          "Casas 3 y 9",

        text:
          "Búsqueda de equilibrio entre la información concreta, el aprendizaje y las grandes convicciones.",
      },

      {
        title:
          "Casas 4 y 10",

        text:
          "Conciliación de la vida privada, las raíces, la carrera y el lugar ocupado en el mundo.",
      },

      {
        title:
          "Casas 5 y 11",

        text:
          "Equilibrio entre la expresión personal, la creatividad, los proyectos colectivos y los grupos.",
      },

      {
        title:
          "Casas 6 y 12",

        text:
          "Relación entre la vida cotidiana, las responsabilidades, el descanso, la vida interior y la entrega.",
      },
    ],

    projection: {
      kicker:
        "El mecanismo de proyección",

      title:
        "¿Por qué la oposición suele manifestarse en las relaciones?",

      symbol:
        "☍",

      subtitle:
        "Reconocer el otro polo dentro de uno mismo",

      paragraphs: [
        "En una oposición, es frecuente identificarse más con uno de los planetas. La otra energía puede entonces parecer proceder únicamente de la pareja, los familiares o las circunstancias.",

        "Una persona con Venus opuesta a Saturno puede, por ejemplo, verse como afectuosa mientras encuentra repetidamente parejas más reservadas o exigentes.",

        "La evolución comienza cuando la persona reconoce que ambos planetas forman parte de su propio funcionamiento interior.",
      ],
    },

    transits: {
      title:
        "La oposición en los tránsitos astrológicos",

      paragraphs: [
        "Una oposición también puede producirse cuando un planeta en movimiento se sitúa frente a un planeta de tu carta natal.",

        "Este tránsito puede destacar una tensión ya presente, provocar una toma de conciencia o exigir un reequilibrio en un ámbito concreto de tu vida.",

        "Las oposiciones de Saturno pueden destacar responsabilidades o límites, mientras que las de Júpiter pueden exagerar una situación para revelar lo que carece de equilibrio.",
      ],
    },

    cta: {
      kicker:
        "Descubre tu carta natal",

      title:
        "¿Tienes una oposición importante en tu carta natal?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tus planetas, tus casas y los principales aspectos presentes en tu nacimiento.",

      button:
        "Ver mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre la oposición en astrología",

      items: [
        {
          question:
            "¿Qué es una oposición en astrología?",

          answer:
            "Una oposición se forma cuando dos planetas están separados por un ángulo de aproximadamente 180 grados. Simbólicamente se encuentran frente a frente y representan dos necesidades que deben aprender a equilibrarse.",
        },

        {
          question:
            "¿La oposición es un aspecto negativo?",

          answer:
            "No. La oposición puede crear tensiones, proyecciones o contradicciones, pero también favorece la conciencia, la complementariedad y la búsqueda de un mejor equilibrio.",
        },

        {
          question:
            "¿Qué orbe debe utilizarse para una oposición?",

          answer:
            "El orbe varía según el método utilizado. Una oposición suele interpretarse hasta aproximadamente 8 grados, con un margen a veces más amplio cuando intervienen el Sol o la Luna.",
        },

        {
          question:
            "¿Qué significa una oposición entre dos signos?",

          answer:
            "Los signos opuestos suelen compartir la misma modalidad y pertenecer a elementos complementarios. Representan dos maneras diferentes pero relacionadas de abordar una misma dinámica.",
        },

        {
          question:
            "¿Por qué la oposición crea proyección?",

          answer:
            "Una persona puede reconocer con mayor facilidad uno de los planetas y atribuir el otro a quienes la rodean. Entonces encuentra esa energía a través de sus relaciones antes de conseguir integrarla interiormente.",
        },

        {
          question:
            "¿Puede una oposición convertirse en una fuerza?",

          answer:
            "Sí. Cuando se comprende y equilibra, una oposición puede desarrollar la capacidad de ver varias perspectivas, negociar, crear puentes y reunir necesidades complementarias.",
        },

        {
          question:
            "¿Cómo saber si tengo una oposición en mi carta natal?",

          answer:
            "Debes generar tu carta natal y comparar la posición de tus planetas. Dos planetas situados casi a 180 grados uno del otro pueden formar una oposición.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegación entre los aspectos astrológicos",

      previous:
        "Aspecto anterior: conjunción",

      next:
        "Aspecto siguiente: cuadratura",
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Die Opposition in der Astrologie: Bedeutung im Geburtshoroskop | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung der Opposition in der Astrologie, ihren 180°-Winkel, ihre Wirkung zwischen Planeten und ihre Deutung im Geburtshoroskop.",

      ogTitle:
        "Die Opposition in der Astrologie: Polarität, Spannung und Gleichgewicht",

      ogDescription:
        "Verstehen Sie, wie eine Opposition zwei Planeten gegenüberstellt und dazu einlädt, zwei ergänzende Bedürfnisse im Geburtshoroskop auszugleichen.",

      twitterTitle:
        "Die Opposition in der Astrologie | Luna Astralis",

      twitterDescription:
        "180°-Winkel, Polarität, Projektion und die Suche nach Gleichgewicht im Geburtshoroskop.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Die Opposition in der Astrologie: Bedeutung im Geburtshoroskop",

      description:
        "Ein vollständiger Leitfaden zum Verständnis der astrologischen Opposition, ihres 180-Grad-Winkels, ihres Orbis und ihrer Deutung zwischen Planeten.",
    },

    breadcrumb: {
      home:
        "Startseite",

      aspects:
        "Aspekte",

      current:
        "Opposition",

      ariaLabel:
        "Brotkrümelnavigation",
    },

    hero: {
      badge:
        "✦ Bedeutender astrologischer Aspekt",

      symbol:
        "☍",

      title:
        "Die Opposition in der Astrologie",

      lead:
        "Eine Opposition entsteht, wenn sich zwei Planeten im Tierkreis gegenüberstehen. Sie macht eine innere Polarität sichtbar und lädt dazu ein, zwei Bedürfnisse zu vereinen, die zunächst widersprüchlich erscheinen können.",

      data: {
        angleLabel:
          "Winkel",

        angleValue:
          "180°",

        dynamicLabel:
          "Dynamik",

        dynamicValue:
          "Polarität",

        functionLabel:
          "Funktion",

        functionValue:
          "Gleichgewicht",
      },

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      understand:
        "Die Opposition verstehen",
    },

    meaning: {
      kicker:
        "Zwei Kräfte stehen sich gegenüber",

      title:
        "Was bedeutet eine Opposition in der Astrologie?",

      paragraphs: [
        "Eine Opposition ist ein Aspekt, der entsteht, wenn zwei Planeten durch einen Winkel von ungefähr 180 Grad getrennt sind. Sie besetzen dann gegenüberliegende Positionen im Tierkreis.",

        "Die beiden Planeten stehen für unterschiedliche Funktionen, die beide Ausdruck suchen. Die Person kann jedoch das Gefühl haben, eine Seite auf Kosten der anderen wählen zu müssen.",

        "Die eigentliche Aufgabe der Opposition besteht darin, den Wert beider Pole anzuerkennen und ein Gleichgewicht aufzubauen. Sie verlangt nicht, eine Energie zu beseitigen, sondern beide miteinander arbeiten zu lassen.",
      ],
    },

    functioning: {
      title:
        "Wie funktioniert eine Opposition?",

      cards: [
        {
          number:
            "01",

          title:
            "Zwei Bedürfnisse stehen sich gegenüber",

          text:
            "Die Planeten scheinen die Person in zwei unterschiedliche Richtungen zu ziehen.",
        },

        {
          number:
            "02",

          title:
            "Die Spannung wird sichtbar",

          text:
            "Die Opposition zeigt sich häufig in Beziehungen, Entscheidungen oder äußeren Situationen.",
        },

        {
          number:
            "03",

          title:
            "Projektion kann entstehen",

          text:
            "Ein Teil des Aspekts kann anderen zugeschrieben werden, bevor er innerlich erkannt wird.",
        },

        {
          number:
            "04",

          title:
            "Gleichgewicht wird möglich",

          text:
            "Mit der Zeit können die beiden Planeten ergänzend statt gegnerisch wirken.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Spannung, die Bewusstsein schafft",

      title:
        "Ist die Opposition ein schwieriger Aspekt?",

      introduction:
        "Die Opposition wird meist zu den dynamischen Aspekten gezählt. Sie macht Widersprüche sichtbar und kann einen Wechsel zwischen zwei Verhaltensweisen oder Bedürfnissen erzeugen.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "Die Herausforderung der Opposition",

          paragraphs: [
            "Die Person kann von einem Pol zum anderen wechseln, ohne beide miteinander verbinden zu können. Die Spannung kann sich außerdem über Beziehungen oder die Umgebung zeigen.",

            "Das Gefühl, zwischen zwei Bedürfnissen wählen zu müssen, kann Unsicherheit, Frustration oder extreme Reaktionen auslösen.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Das Potenzial der Opposition",

          paragraphs: [
            "Eine integrierte Opposition ermöglicht es, mehrere Perspektiven zu verstehen und größere Anpassungsfähigkeit zu entwickeln.",

            "Sie kann Vermittlung, Verhandlung, Selbstbewusstsein und die Fähigkeit fördern, ergänzende Eigenschaften miteinander zu verbinden.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Die zu beobachtenden Elemente",

      title:
        "Wie deutet man eine Opposition im Geburtshoroskop?",

      methods: [
        {
          number:
            "1",

          title:
            "Die beiden Planeten bestimmen",

          text:
            "Zuerst müssen die Funktionen beider Planeten und die Art ihrer möglichen Spannung verstanden werden.",
        },

        {
          number:
            "2",

          title:
            "Die gegenüberliegenden Zeichen betrachten",

          text:
            "Die Zeichen zeigen zwei unterschiedliche, aber ergänzende Arten, dieselbe Polarität auszudrücken.",
        },

        {
          number:
            "3",

          title:
            "Die Häuserachse untersuchen",

          text:
            "Die beteiligten Häuser zeigen die beiden Lebensbereiche, die ein besseres Gleichgewicht suchen.",
        },

        {
          number:
            "4",

          title:
            "Projektionen erkennen",

          text:
            "Es ist hilfreich zu beobachten, ob einer der Planeten scheinbar immer über andere Menschen oder Umstände erlebt wird.",
        },

        {
          number:
            "5",

          title:
            "Einen Integrationsweg finden",

          text:
            "Das Ziel besteht darin, beiden Planeten Ausdruck zu ermöglichen, ohne dass einer den anderen ständig dominiert.",
        },
      ],
    },

    orb: {
      title:
        "Der Orbis der Opposition",

      introduction:
        "Der Orbis bezeichnet den Abstand zwischen dem exakten 180-Grad-Winkel und den tatsächlichen Positionen der Planeten. Eine Opposition wird häufig bis zu einem Orbis von ungefähr 8 Grad gedeutet.",

      cards: [
        {
          value:
            "0° bis 2°",

          title:
            "Sehr enge Opposition",

          text:
            "Die Polarität ist sehr intensiv und kann zu einem zentralen Thema der Persönlichkeit werden.",
        },

        {
          value:
            "3° bis 5°",

          title:
            "Starke Opposition",

          text:
            "Die Spannung zwischen den beiden Planeten bleibt in Entscheidungen und Beziehungen deutlich wahrnehmbar.",
        },

        {
          value:
            "6° bis 8°",

          title:
            "Weitere Opposition",

          text:
            "Der Aspekt kann weiterhin bedeutsam sein, besonders wenn Sonne oder Mond beteiligt sind.",
        },
      ],

      conclusion:
        "Je genauer die Opposition ist, desto sichtbarer kann sie werden. Die Stärke eines Aspekts hängt jedoch auch von der Bedeutung der Planeten im gesamten Geburtshoroskop ab.",
    },

    examplesSection: {
      kicker:
        "Deutungsbeispiele",

      title:
        "Die wichtigsten Oppositionen zwischen Planeten",

      introduction:
        "Eine Opposition zeigt sich immer entsprechend den Zeichen, Häusern und weiteren Aspekten des Horoskops. Die folgenden Beispiele beschreiben ihre allgemeine Dynamik.",
    },

    examples: [
      {
        planets:
          "Sonne gegenüber Mond",

        symbol:
          "☀ ☍ ☽",

        keywords:
          "Identität • Gefühle • inneres Gleichgewicht",

        text:
          "Sonne gegenüber Mond kann Spannung zwischen bewusster Identität und emotionalen Bedürfnissen erzeugen. Die Person versucht häufig, das gewünschte Selbstbild mit dem Bedürfnis nach Sicherheit zu vereinen.",
      },

      {
        planets:
          "Merkur gegenüber Jupiter",

        symbol:
          "☿ ☍ ♃",

        keywords:
          "Details • Gesamtbild • Urteil",

        text:
          "Merkur gegenüber Jupiter kann präzises Denken einer größeren Vision gegenüberstellen. Diese Konstellation fördert große Ideen, verlangt jedoch, vorschnelle Schlüsse oder Übertreibungen zu vermeiden.",
      },

      {
        planets:
          "Venus gegenüber Mars",

        symbol:
          "♀ ☍ ♂",

        keywords:
          "Anziehung • Verlangen • Beziehungsdynamik",

        text:
          "Venus gegenüber Mars kann starke Anziehung und ein intensives Beziehungsleben erzeugen. Der Wunsch nach Harmonie und der Drang zum Handeln können jedoch regelmäßig in Konflikt geraten.",
      },

      {
        planets:
          "Mars gegenüber Saturn",

        symbol:
          "♂ ☍ ♄",

        keywords:
          "Handlung • Begrenzung • Ausdauer",

        text:
          "Mars gegenüber Saturn kann zwischen Vorwärtsdrang und dem Gefühl des Gebremstwerdens wechseln. Mit der Zeit kann dieser Aspekt große Ausdauer und bessere Kontrolle des eigenen Einsatzes entwickeln.",
      },

      {
        planets:
          "Jupiter gegenüber Saturn",

        symbol:
          "♃ ☍ ♄",

        keywords:
          "Expansion • Vorsicht • Reife",

        text:
          "Jupiter gegenüber Saturn erzeugt Spannung zwischen Wachstumswunsch und Sicherheitsbedürfnis. Die Person muss lernen, voranzugehen, ohne Grenzen zu vernachlässigen oder Ambitionen aufzugeben.",
      },

      {
        planets:
          "Mond gegenüber Pluto",

        symbol:
          "☽ ☍ ♇",

        keywords:
          "Gefühle • Kontrolle • Transformation",

        text:
          "Mond gegenüber Pluto kann emotionale Reaktionen und Machtdynamiken intensivieren. Dieser Aspekt lädt dazu ein, tiefe Ängste zu erkennen und Kontrollmuster zu verändern.",
      },
    ],

    axesSection: {
      title:
        "Die sechs Achsen gegenüberliegender Zeichen",

      introduction:
        "Gegenüberliegende Zeichen teilen dieselbe Modalität, gehören jedoch unterschiedlichen Elementen an. Sie stellen zwei ergänzende Ausdrucksformen derselben übergeordneten Dynamik dar.",
    },

    axes: [
      {
        symbol:
          "♈ — ♎",

        title:
          "Widder und Waage",

        text:
          "Gleichgewicht zwischen persönlicher Durchsetzung und Zusammenarbeit mit anderen finden.",
      },

      {
        symbol:
          "♉ — ♏",

        title:
          "Stier und Skorpion",

        text:
          "Stabilität und Sicherheit mit dem für Veränderung notwendigen Loslassen verbinden.",
      },

      {
        symbol:
          "♊ — ♐",

        title:
          "Zwillinge und Schütze",

        text:
          "Fakten, Fragen und Wissen mit einer umfassenderen Sicht auf das Leben verbinden.",
      },

      {
        symbol:
          "♋ — ♑",

        title:
          "Krebs und Steinbock",

        text:
          "Gefühlsleben, Familie, Verantwortung und äußere Ambitionen ausgleichen.",
      },

      {
        symbol:
          "♌ — ♒",

        title:
          "Löwe und Wassermann",

        text:
          "Individuellen Ausdruck und Kreativität mit dem Beitrag zu einer kollektiven Vision verbinden.",
      },

      {
        symbol:
          "♍ — ♓",

        title:
          "Jungfrau und Fische",

        text:
          "Gleichgewicht zwischen praktischer Organisation, Intuition, Sensibilität und Loslassen finden.",
      },
    ],

    housesSection: {
      title:
        "Die Opposition in den astrologischen Häusern",

      introduction:
        "Eine Opposition verbindet immer zwei einander gegenüberliegende Häuser. Sie erzeugt daher Spannung zwischen zwei Lebensbereichen, die lernen müssen, zusammenzuarbeiten.",
    },

    houses: [
      {
        title:
          "Häuser 1 und 7",

        text:
          "Gleichgewicht zwischen persönlicher Identität, Unabhängigkeit, Beziehungen und Verpflichtungen.",
      },

      {
        title:
          "Häuser 2 und 8",

        text:
          "Spannung zwischen persönlichen Ressourcen, Teilen, Intimität und Veränderung.",
      },

      {
        title:
          "Häuser 3 und 9",

        text:
          "Suche nach Gleichgewicht zwischen konkreten Informationen, Lernen und größeren Überzeugungen.",
      },

      {
        title:
          "Häuser 4 und 10",

        text:
          "Vereinbarung von Privatleben, Wurzeln, Beruf und der eigenen Stellung in der Welt.",
      },

      {
        title:
          "Häuser 5 und 11",

        text:
          "Gleichgewicht zwischen persönlichem Ausdruck, Kreativität, kollektiven Projekten und Gruppen.",
      },

      {
        title:
          "Häuser 6 und 12",

        text:
          "Beziehung zwischen Alltag, Verantwortung, Ruhe, Innenleben und Loslassen.",
      },
    ],

    projection: {
      kicker:
        "Der Projektionsmechanismus",

      title:
        "Warum zeigt sich die Opposition häufig in Beziehungen?",

      symbol:
        "☍",

      subtitle:
        "Den anderen Pol in sich selbst erkennen",

      paragraphs: [
        "Bei einer Opposition ist es häufig, dass man sich stärker mit einem Planeten identifiziert. Die andere Energie scheint dann nur von Partnern, Angehörigen oder Umständen zu kommen.",

        "Eine Person mit Venus gegenüber Saturn kann sich beispielsweise als liebevoll erleben und gleichzeitig wiederholt reservierte oder anspruchsvolle Partner treffen.",

        "Entwicklung beginnt, wenn die Person erkennt, dass beide Planeten zum eigenen inneren Funktionieren gehören.",
      ],
    },

    transits: {
      title:
        "Die Opposition in astrologischen Transiten",

      paragraphs: [
        "Eine Opposition kann auch entstehen, wenn sich ein laufender Planet einem Planeten des Geburtshoroskops gegenüberstellt.",

        "Dieser Transit kann eine bereits vorhandene Spannung hervorheben, Bewusstsein schaffen oder einen Ausgleich in einem bestimmten Lebensbereich verlangen.",

        "Saturn-Oppositionen können Verantwortung oder Grenzen betonen, während Jupiter-Oppositionen eine Situation übertreiben können, um ein fehlendes Gleichgewicht sichtbar zu machen.",
      ],
    },

    cta: {
      kicker:
        "Entdecken Sie Ihr Geburtshoroskop",

      title:
        "Haben Sie eine wichtige Opposition in Ihrem Geburtshoroskop?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Planeten, Häuser und wichtigsten Aspekte Ihrer Geburt.",

      button:
        "Mein Geburtshoroskop ansehen",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zur Opposition in der Astrologie",

      items: [
        {
          question:
            "Was ist eine Opposition in der Astrologie?",

          answer:
            "Eine Opposition entsteht, wenn zwei Planeten durch einen Winkel von ungefähr 180 Grad getrennt sind. Sie stehen sich symbolisch gegenüber und repräsentieren zwei Bedürfnisse, die ins Gleichgewicht gebracht werden müssen.",
        },

        {
          question:
            "Ist die Opposition ein negativer Aspekt?",

          answer:
            "Nein. Eine Opposition kann Spannung, Projektion oder Widersprüche erzeugen, fördert aber auch Bewusstsein, Ergänzung und die Suche nach einem besseren Gleichgewicht.",
        },

        {
          question:
            "Welchen Orbis verwendet man für eine Opposition?",

          answer:
            "Der Orbis variiert je nach Methode. Eine Opposition wird häufig bis ungefähr 8 Grad gedeutet, manchmal mit einem größeren Spielraum, wenn Sonne oder Mond beteiligt sind.",
        },

        {
          question:
            "Was bedeutet eine Opposition zwischen zwei Zeichen?",

          answer:
            "Gegenüberliegende Zeichen teilen meist dieselbe Modalität und gehören ergänzenden Elementen an. Sie repräsentieren zwei unterschiedliche, aber verbundene Arten, dieselbe Dynamik zu erleben.",
        },

        {
          question:
            "Warum erzeugt die Opposition Projektion?",

          answer:
            "Eine Person kann einen Planeten leichter erkennen und den anderen ihrem Umfeld zuschreiben. Sie begegnet dieser Energie dann zunächst über Beziehungen, bevor sie sie innerlich integriert.",
        },

        {
          question:
            "Kann eine Opposition zu einer Stärke werden?",

          answer:
            "Ja. Wenn sie verstanden und ausgeglichen wird, kann eine Opposition die Fähigkeit entwickeln, mehrere Perspektiven zu sehen, zu verhandeln, Brücken zu bauen und ergänzende Bedürfnisse zu vereinen.",
        },

        {
          question:
            "Wie erkenne ich eine Opposition in meinem Geburtshoroskop?",

          answer:
            "Sie müssen Ihr Geburtshoroskop erstellen und die Positionen Ihrer Planeten vergleichen. Zwei Planeten, die fast 180 Grad voneinander entfernt stehen, können eine Opposition bilden.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation zwischen astrologischen Aspekten",

      previous:
        "Vorheriger Aspekt: Konjunktion",

      next:
        "Nächster Aspekt: Quadrat",
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "L’opposizione in astrologia: significato nel tema natale | Luna Astralis",

      description:
        "Scopri il significato dell’opposizione in astrologia, il suo angolo di 180°, i suoi effetti tra i pianeti e la sua interpretazione nel tema natale.",

      ogTitle:
        "L’opposizione in astrologia: polarità, tensione ed equilibrio",

      ogDescription:
        "Comprendi come l’opposizione ponga due pianeti uno di fronte all’altro e inviti a equilibrare due bisogni complementari nel tema natale.",

      twitterTitle:
        "L’opposizione in astrologia | Luna Astralis",

      twitterDescription:
        "Angolo di 180°, polarità, proiezione e ricerca di equilibrio nel tema natale.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "L’opposizione in astrologia: significato nel tema natale",

      description:
        "Guida completa per comprendere l’opposizione astrologica, il suo angolo di 180 gradi, il suo orbe e la sua interpretazione tra i pianeti.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspetti",

      current:
        "Opposizione",

      ariaLabel:
        "Percorso di navigazione",
    },

    hero: {
      badge:
        "✦ Aspetto astrologico maggiore",

      symbol:
        "☍",

      title:
        "L’opposizione in astrologia",

      lead:
        "L’opposizione si forma quando due pianeti si trovano uno di fronte all’altro nello zodiaco. Evidenzia una polarità interiore e invita a riunire due bisogni che inizialmente possono sembrare contraddittori.",

      data: {
        angleLabel:
          "Angolo",

        angleValue:
          "180°",

        dynamicLabel:
          "Dinamica",

        dynamicValue:
          "Polarità",

        functionLabel:
          "Funzione",

        functionValue:
          "Equilibrio",
      },

      createChart:
        "Creare gratuitamente il mio tema natale",

      understand:
        "Comprendere l’opposizione",
    },

    meaning: {
      kicker:
        "Due forze una di fronte all’altra",

      title:
        "Che cosa significa un’opposizione in astrologia?",

      paragraphs: [
        "L’opposizione è un aspetto che si forma quando due pianeti sono separati da un angolo di circa 180 gradi. Occupano quindi posizioni opposte nel cerchio zodiacale.",

        "I due pianeti rappresentano funzioni diverse che cercano entrambe di esprimersi. La persona può tuttavia avere l’impressione di dover scegliere l’una a scapito dell’altra.",

        "Il vero lavoro dell’opposizione consiste nel riconoscere il valore di entrambi i poli e costruire un equilibrio. Non richiede di eliminare un’energia, ma di imparare a farle collaborare.",
      ],
    },

    functioning: {
      title:
        "Come funziona l’opposizione?",

      cards: [
        {
          number:
            "01",

          title:
            "Due bisogni si oppongono",

          text:
            "I pianeti sembrano spingere la persona in due direzioni diverse.",
        },

        {
          number:
            "02",

          title:
            "La tensione diventa visibile",

          text:
            "L’opposizione si manifesta spesso nelle relazioni, nelle scelte o nelle situazioni esterne.",
        },

        {
          number:
            "03",

          title:
            "Può apparire una proiezione",

          text:
            "Una parte dell’aspetto può essere attribuita agli altri prima di essere riconosciuta interiormente.",
        },

        {
          number:
            "04",

          title:
            "L’equilibrio diventa possibile",

          text:
            "Con il tempo, i due pianeti possono diventare complementari anziché avversari.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Una tensione che crea consapevolezza",

      title:
        "L’opposizione è un aspetto difficile?",

      introduction:
        "L’opposizione è generalmente classificata tra gli aspetti dinamici. Evidenzia contraddizioni e può creare un’alternanza tra due comportamenti o due bisogni.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "La sfida dell’opposizione",

          paragraphs: [
            "La persona può passare da un polo all’altro senza riuscire a riunirli. Può inoltre vivere la tensione attraverso le relazioni o l’ambiente.",

            "L’impressione di dover scegliere tra due bisogni può produrre esitazione, frustrazione o reazioni estreme.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Il potenziale dell’opposizione",

          paragraphs: [
            "Un’opposizione integrata permette di comprendere più prospettive e sviluppare una maggiore capacità di adattamento.",

            "Può favorire la mediazione, la negoziazione, la consapevolezza di sé e la capacità di riunire qualità complementari.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Gli elementi da osservare",

      title:
        "Come interpretare un’opposizione nel tema natale?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificare i due pianeti",

          text:
            "Bisogna innanzitutto comprendere le funzioni rappresentate da ciascun pianeta e il modo in cui possono entrare in tensione.",
        },

        {
          number:
            "2",

          title:
            "Osservare i segni opposti",

          text:
            "I segni indicano due modi diversi ma complementari di esprimere la stessa polarità.",
        },

        {
          number:
            "3",

          title:
            "Studiare l’asse delle case",

          text:
            "Le case coinvolte rivelano i due ambiti della vita che cercano un migliore equilibrio.",
        },

        {
          number:
            "4",

          title:
            "Individuare le proiezioni",

          text:
            "È utile osservare se uno dei pianeti sembra essere vissuto sempre attraverso gli altri o le circostanze.",
        },

        {
          number:
            "5",

          title:
            "Cercare una via di integrazione",

          text:
            "L’obiettivo è permettere a entrambi i pianeti di esprimersi senza che uno domini costantemente l’altro.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe dell’opposizione",

      introduction:
        "L’orbe rappresenta la distanza tra l’angolo esatto di 180 gradi e la posizione reale dei pianeti. Un’opposizione può spesso essere interpretata fino a un orbe di circa 8 gradi.",

      cards: [
        {
          value:
            "Da 0° a 2°",

          title:
            "Opposizione molto stretta",

          text:
            "La polarità è molto intensa e può diventare uno dei temi centrali della personalità.",
        },

        {
          value:
            "Da 3° a 5°",

          title:
            "Opposizione forte",

          text:
            "La tensione tra i due pianeti rimane chiaramente percepibile nelle decisioni e nelle relazioni.",
        },

        {
          value:
            "Da 6° a 8°",

          title:
            "Opposizione più ampia",

          text:
            "L’aspetto può essere ancora significativo, soprattutto quando coinvolge il Sole o la Luna.",
        },
      ],

      conclusion:
        "Più l’opposizione è esatta, più può essere visibile. Tuttavia, la forza di un aspetto dipende anche dall’importanza dei pianeti nell’insieme del tema natale.",
    },

    examplesSection: {
      kicker:
        "Esempi di interpretazione",

      title:
        "Le principali opposizioni tra i pianeti",

      introduction:
        "Un’opposizione si esprime sempre in base ai segni, alle case e agli altri aspetti del tema. Gli esempi seguenti presentano la loro dinamica generale.",
    },

    examples: [
      {
        planets:
          "Sole opposto alla Luna",

        symbol:
          "☀ ☍ ☽",

        keywords:
          "Identità • emozioni • equilibrio interiore",

        text:
          "Il Sole opposto alla Luna può creare una tensione tra l’identità cosciente e i bisogni emotivi. La persona cerca spesso di conciliare ciò che vuole diventare con ciò di cui ha bisogno per sentirsi sicura.",
      },

      {
        planets:
          "Mercurio opposto a Giove",

        symbol:
          "☿ ☍ ♃",

        keywords:
          "Dettagli • visione globale • giudizio",

        text:
          "Mercurio opposto a Giove può contrapporre il pensiero preciso a una visione più ampia. Questa configurazione favorisce le grandi idee, ma richiede di evitare conclusioni affrettate o esagerazioni.",
      },

      {
        planets:
          "Venere opposta a Marte",

        symbol:
          "♀ ☍ ♂",

        keywords:
          "Attrazione • desiderio • dinamica relazionale",

        text:
          "Venere opposta a Marte può produrre una forte attrazione e una vita relazionale intensa. Il desiderio di armonia e il bisogno di agire possono tuttavia entrare regolarmente in conflitto.",
      },

      {
        planets:
          "Marte opposto a Saturno",

        symbol:
          "♂ ☍ ♄",

        keywords:
          "Azione • blocco • perseveranza",

        text:
          "Marte opposto a Saturno può creare un’alternanza tra l’impulso ad avanzare e la sensazione di essere frenati. Con il tempo, questo aspetto può sviluppare grande resistenza e un migliore controllo dello sforzo.",
      },

      {
        planets:
          "Giove opposto a Saturno",

        symbol:
          "♃ ☍ ♄",

        keywords:
          "Espansione • prudenza • maturità",

        text:
          "Giove opposto a Saturno mette in tensione il desiderio di crescita e il bisogno di sicurezza. La persona deve imparare ad avanzare senza ignorare i limiti né abbandonare le proprie ambizioni.",
      },

      {
        planets:
          "Luna opposta a Plutone",

        symbol:
          "☽ ☍ ♇",

        keywords:
          "Emozioni • controllo • trasformazione",

        text:
          "La Luna opposta a Plutone può intensificare le reazioni emotive e le dinamiche di potere. Questo aspetto invita a riconoscere le paure profonde e trasformare i meccanismi di controllo.",
      },
    ],

    axesSection: {
      title:
        "I sei assi dei segni opposti",

      introduction:
        "I segni opposti condividono la stessa modalità, ma appartengono a elementi diversi. Rappresentano due espressioni complementari della stessa grande dinamica.",
    },

    axes: [
      {
        symbol:
          "♈ — ♎",

        title:
          "Ariete e Bilancia",

        text:
          "Trovare l’equilibrio tra l’affermazione personale e la cooperazione con gli altri.",
      },

      {
        symbol:
          "♉ — ♏",

        title:
          "Toro e Scorpione",

        text:
          "Conciliare stabilità e sicurezza con il lasciar andare necessario alla trasformazione.",
      },

      {
        symbol:
          "♊ — ♐",

        title:
          "Gemelli e Sagittario",

        text:
          "Unire fatti, domande e conoscenze a una visione più ampia dell’esistenza.",
      },

      {
        symbol:
          "♋ — ♑",

        title:
          "Cancro e Capricorno",

        text:
          "Equilibrare vita emotiva, famiglia, responsabilità e ambizioni esterne.",
      },

      {
        symbol:
          "♌ — ♒",

        title:
          "Leone e Acquario",

        text:
          "Conciliare espressione individuale e creatività con il contributo a una visione collettiva.",
      },

      {
        symbol:
          "♍ — ♓",

        title:
          "Vergine e Pesci",

        text:
          "Trovare equilibrio tra organizzazione concreta, intuizione, sensibilità e capacità di lasciar andare.",
      },
    ],

    housesSection: {
      title:
        "L’opposizione nelle case astrologiche",

      introduction:
        "Un’opposizione collega sempre due case poste una di fronte all’altra. Crea quindi tensione tra due ambiti della vita che devono imparare a funzionare insieme.",
    },

    houses: [
      {
        title:
          "Case 1 e 7",

        text:
          "Equilibrio tra identità personale, autonomia, relazioni e impegni.",
      },

      {
        title:
          "Case 2 e 8",

        text:
          "Tensione tra risorse personali, condivisione, intimità e trasformazioni.",
      },

      {
        title:
          "Case 3 e 9",

        text:
          "Ricerca di equilibrio tra informazioni concrete, apprendimento e grandi convinzioni.",
      },

      {
        title:
          "Case 4 e 10",

        text:
          "Conciliazione della vita privata, delle radici, della carriera e del posto occupato nel mondo.",
      },

      {
        title:
          "Case 5 e 11",

        text:
          "Equilibrio tra espressione personale, creatività, progetti collettivi e gruppi.",
      },

      {
        title:
          "Case 6 e 12",

        text:
          "Relazione tra quotidianità, responsabilità, riposo, vita interiore e capacità di lasciar andare.",
      },
    ],

    projection: {
      kicker:
        "Il meccanismo della proiezione",

      title:
        "Perché l’opposizione si manifesta spesso nelle relazioni?",

      symbol:
        "☍",

      subtitle:
        "Riconoscere l’altro polo dentro di sé",

      paragraphs: [
        "In un’opposizione, è frequente identificarsi maggiormente con uno dei pianeti. L’altra energia può allora sembrare provenire soltanto dai partner, dai familiari o dalle circostanze.",

        "Una persona con Venere opposta a Saturno può, per esempio, percepirsi come affettuosa mentre incontra ripetutamente partner più riservati o esigenti.",

        "L’evoluzione comincia quando la persona riconosce che entrambi i pianeti appartengono al proprio funzionamento interiore.",
      ],
    },

    transits: {
      title:
        "L’opposizione nei transiti astrologici",

      paragraphs: [
        "Un’opposizione può verificarsi anche quando un pianeta in movimento si colloca di fronte a un pianeta del tema natale.",

        "Questo transito può evidenziare una tensione già presente, provocare una presa di coscienza o richiedere un riequilibrio in un ambito preciso della vita.",

        "Le opposizioni di Saturno possono sottolineare responsabilità o limiti, mentre quelle di Giove possono esagerare una situazione per rivelare ciò che manca di equilibrio.",
      ],
    },

    cta: {
      kicker:
        "Scopri il tuo tema natale",

      title:
        "Hai un’opposizione importante nel tuo tema natale?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire i pianeti, le case e i principali aspetti presenti alla nascita.",

      button:
        "Vedere il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sull’opposizione in astrologia",

      items: [
        {
          question:
            "Che cos’è un’opposizione in astrologia?",

          answer:
            "Un’opposizione si forma quando due pianeti sono separati da un angolo di circa 180 gradi. Simbolicamente si trovano uno di fronte all’altro e rappresentano due bisogni che devono imparare a equilibrarsi.",
        },

        {
          question:
            "L’opposizione è un aspetto negativo?",

          answer:
            "No. L’opposizione può creare tensioni, proiezioni o contraddizioni, ma favorisce anche consapevolezza, complementarità e ricerca di un migliore equilibrio.",
        },

        {
          question:
            "Quale orbe si utilizza per un’opposizione?",

          answer:
            "L’orbe varia secondo il metodo utilizzato. Un’opposizione viene spesso interpretata fino a circa 8 gradi, con un margine talvolta più ampio quando sono coinvolti il Sole o la Luna.",
        },

        {
          question:
            "Che cosa significa un’opposizione tra due segni?",

          answer:
            "I segni opposti condividono generalmente la stessa modalità e appartengono a elementi complementari. Rappresentano due modi diversi ma collegati di affrontare la stessa dinamica.",
        },

        {
          question:
            "Perché l’opposizione crea proiezione?",

          answer:
            "Una persona può riconoscere più facilmente uno dei pianeti e attribuire l’altro alle persone che la circondano. Incontra allora questa energia attraverso le relazioni prima di riuscire a integrarla interiormente.",
        },

        {
          question:
            "Un’opposizione può diventare una forza?",

          answer:
            "Sì. Quando viene compresa ed equilibrata, un’opposizione può sviluppare la capacità di vedere più prospettive, negoziare, creare ponti e riunire bisogni complementari.",
        },

        {
          question:
            "Come sapere se ho un’opposizione nel tema natale?",

          answer:
            "Devi generare il tuo tema natale e confrontare le posizioni dei pianeti. Due pianeti situati quasi a 180 gradi l’uno dall’altro possono formare un’opposizione.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigazione tra gli aspetti astrologici",

      previous:
        "Aspetto precedente: congiunzione",

      next:
        "Aspetto successivo: quadratura",
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "A oposição na astrologia: significado no mapa natal | Luna Astralis",

      description:
        "Descubra o significado da oposição na astrologia, seu ângulo de 180°, seus efeitos entre os planetas e sua interpretação no mapa natal.",

      ogTitle:
        "A oposição na astrologia: polaridade, tensão e equilíbrio",

      ogDescription:
        "Compreenda como a oposição coloca dois planetas frente a frente e convida a equilibrar duas necessidades complementares no mapa natal.",

      twitterTitle:
        "A oposição na astrologia | Luna Astralis",

      twitterDescription:
        "Ângulo de 180°, polaridade, projeção e busca de equilíbrio no mapa natal.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "A oposição na astrologia: significado no mapa natal",

      description:
        "Guia completo para compreender a oposição astrológica, seu ângulo de 180 graus, seu orbe e sua interpretação entre os planetas.",
    },

    breadcrumb: {
      home:
        "Início",

      aspects:
        "Aspectos",

      current:
        "Oposição",

      ariaLabel:
        "Navegação estrutural",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico maior",

      symbol:
        "☍",

      title:
        "A oposição na astrologia",

      lead:
        "A oposição se forma quando dois planetas se encontram frente a frente no zodíaco. Ela destaca uma polaridade interior e convida a reunir duas necessidades que inicialmente podem parecer contraditórias.",

      data: {
        angleLabel:
          "Ângulo",

        angleValue:
          "180°",

        dynamicLabel:
          "Dinâmica",

        dynamicValue:
          "Polaridade",

        functionLabel:
          "Função",

        functionValue:
          "Equilíbrio",
      },

      createChart:
        "Criar meu mapa astral grátis",

      understand:
        "Compreender a oposição",
    },

    meaning: {
      kicker:
        "Duas forças frente a frente",

      title:
        "O que significa uma oposição na astrologia?",

      paragraphs: [
        "A oposição é um aspecto que se forma quando dois planetas estão separados por um ângulo de aproximadamente 180 graus. Eles ocupam então posições opostas no círculo do zodíaco.",

        "Os dois planetas representam funções diferentes que procuram se expressar. No entanto, a pessoa pode ter a impressão de que precisa escolher uma em detrimento da outra.",

        "O verdadeiro trabalho da oposição consiste em reconhecer o valor dos dois polos e construir equilíbrio. Ela não exige eliminar uma energia, mas aprender a fazê-las colaborar.",
      ],
    },

    functioning: {
      title:
        "Como funciona a oposição?",

      cards: [
        {
          number:
            "01",

          title:
            "Duas necessidades se opõem",

          text:
            "Os planetas parecem levar a pessoa em duas direções diferentes.",
        },

        {
          number:
            "02",

          title:
            "A tensão se torna visível",

          text:
            "A oposição costuma se manifestar nos relacionamentos, nas escolhas ou nas situações externas.",
        },

        {
          number:
            "03",

          title:
            "Uma projeção pode aparecer",

          text:
            "Uma parte do aspecto pode ser atribuída aos outros antes de ser reconhecida interiormente.",
        },

        {
          number:
            "04",

          title:
            "O equilíbrio se torna possível",

          text:
            "Com o tempo, os dois planetas podem se tornar complementares em vez de adversários.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Uma tensão que cria consciência",

      title:
        "A oposição é um aspecto difícil?",

      introduction:
        "A oposição costuma ser classificada entre os aspectos dinâmicos. Ela destaca contradições e pode criar alternância entre dois comportamentos ou duas necessidades.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "O desafio da oposição",

          paragraphs: [
            "A pessoa pode passar de um polo ao outro sem conseguir reuni-los. Também pode viver a tensão por meio de seus relacionamentos ou do ambiente.",

            "A impressão de precisar escolher entre duas necessidades pode produzir hesitação, frustração ou reações extremas.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "O potencial da oposição",

          paragraphs: [
            "Uma oposição integrada permite compreender várias perspectivas e desenvolver uma melhor capacidade de adaptação.",

            "Ela pode favorecer mediação, negociação, consciência de si e capacidade de reunir qualidades complementares.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Os elementos que devem ser observados",

      title:
        "Como interpretar uma oposição no mapa natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar os dois planetas",

          text:
            "Primeiro é necessário compreender as funções representadas por cada planeta e a maneira como podem entrar em tensão.",
        },

        {
          number:
            "2",

          title:
            "Observar os signos opostos",

          text:
            "Os signos indicam duas maneiras diferentes, mas complementares, de expressar a mesma polaridade.",
        },

        {
          number:
            "3",

          title:
            "Estudar o eixo das casas",

          text:
            "As casas envolvidas revelam as duas áreas da vida que procuram encontrar um melhor equilíbrio.",
        },

        {
          number:
            "4",

          title:
            "Identificar as projeções",

          text:
            "É útil observar se um dos planetas parece ser vivido sempre por meio das outras pessoas ou das circunstâncias.",
        },

        {
          number:
            "5",

          title:
            "Buscar uma via de integração",

          text:
            "O objetivo é permitir que os dois planetas se expressem sem que um domine constantemente o outro.",
        },
      ],
    },

    orb: {
      title:
        "O orbe da oposição",

      introduction:
        "O orbe representa a diferença entre o ângulo exato de 180 graus e a posição real dos planetas. Uma oposição costuma ser interpretada até um orbe de aproximadamente 8 graus.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Oposição muito exata",

          text:
            "A polaridade é muito intensa e pode se tornar um dos temas centrais da personalidade.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Oposição forte",

          text:
            "A tensão entre os dois planetas permanece claramente perceptível nas decisões e nos relacionamentos.",
        },

        {
          value:
            "6° a 8°",

          title:
            "Oposição mais ampla",

          text:
            "O aspecto ainda pode ser significativo, principalmente quando envolve o Sol ou a Lua.",
        },
      ],

      conclusion:
        "Quanto mais exata a oposição, mais visível ela pode se tornar. No entanto, a força de um aspecto também depende da importância dos planetas no conjunto do mapa natal.",
    },

    examplesSection: {
      kicker:
        "Exemplos de interpretação",

      title:
        "As principais oposições entre os planetas",

      introduction:
        "Uma oposição sempre se expressa de acordo com os signos, as casas e os demais aspectos do mapa. Os exemplos seguintes apresentam sua dinâmica geral.",
    },

    examples: [
      {
        planets:
          "Sol oposto à Lua",

        symbol:
          "☀ ☍ ☽",

        keywords:
          "Identidade • emoções • equilíbrio interior",

        text:
          "O Sol oposto à Lua pode criar tensão entre a identidade consciente e as necessidades emocionais. A pessoa costuma procurar conciliar aquilo que deseja se tornar com aquilo de que precisa para se sentir segura.",
      },

      {
        planets:
          "Mercúrio oposto a Júpiter",

        symbol:
          "☿ ☍ ♃",

        keywords:
          "Detalhes • visão global • julgamento",

        text:
          "Mercúrio oposto a Júpiter pode colocar o pensamento preciso diante de uma visão mais ampla. Essa configuração favorece grandes ideias, mas exige evitar conclusões rápidas ou exageros.",
      },

      {
        planets:
          "Vênus oposta a Marte",

        symbol:
          "♀ ☍ ♂",

        keywords:
          "Atração • desejo • dinâmica relacional",

        text:
          "Vênus oposta a Marte pode produzir forte atração e uma vida relacional intensa. O desejo de harmonia e a necessidade de agir podem, porém, entrar regularmente em conflito.",
      },

      {
        planets:
          "Marte oposto a Saturno",

        symbol:
          "♂ ☍ ♄",

        keywords:
          "Ação • bloqueio • perseverança",

        text:
          "Marte oposto a Saturno pode criar alternância entre o impulso de avançar e a sensação de estar sendo impedido. Com o tempo, esse aspecto pode desenvolver grande resistência e melhor controle do esforço.",
      },

      {
        planets:
          "Júpiter oposto a Saturno",

        symbol:
          "♃ ☍ ♄",

        keywords:
          "Expansão • prudência • maturidade",

        text:
          "Júpiter oposto a Saturno cria tensão entre o desejo de crescimento e a necessidade de segurança. A pessoa deve aprender a avançar sem ignorar os limites nem abandonar suas ambições.",
      },

      {
        planets:
          "Lua oposta a Plutão",

        symbol:
          "☽ ☍ ♇",

        keywords:
          "Emoções • controle • transformação",

        text:
          "A Lua oposta a Plutão pode intensificar as reações emocionais e as dinâmicas de poder. Esse aspecto convida a reconhecer medos profundos e transformar mecanismos de controle.",
      },
    ],

    axesSection: {
      title:
        "Os seis eixos de signos opostos",

      introduction:
        "Os signos opostos compartilham a mesma modalidade, mas pertencem a elementos diferentes. Eles representam duas expressões complementares da mesma grande dinâmica.",
    },

    axes: [
      {
        symbol:
          "♈ — ♎",

        title:
          "Áries e Libra",

        text:
          "Encontrar equilíbrio entre afirmação pessoal e cooperação com os outros.",
      },

      {
        symbol:
          "♉ — ♏",

        title:
          "Touro e Escorpião",

        text:
          "Conciliar estabilidade e segurança com a entrega necessária à transformação.",
      },

      {
        symbol:
          "♊ — ♐",

        title:
          "Gêmeos e Sagitário",

        text:
          "Reunir fatos, perguntas e conhecimentos com uma visão mais ampla da existência.",
      },

      {
        symbol:
          "♋ — ♑",

        title:
          "Câncer e Capricórnio",

        text:
          "Equilibrar vida emocional, família, responsabilidades e ambições externas.",
      },

      {
        symbol:
          "♌ — ♒",

        title:
          "Leão e Aquário",

        text:
          "Conciliar expressão individual e criatividade com contribuição para uma visão coletiva.",
      },

      {
        symbol:
          "♍ — ♓",

        title:
          "Virgem e Peixes",

        text:
          "Encontrar equilíbrio entre organização concreta, intuição, sensibilidade e capacidade de se entregar.",
      },
    ],

    housesSection: {
      title:
        "A oposição nas casas astrológicas",

      introduction:
        "Uma oposição sempre conecta duas casas situadas frente a frente. Portanto, cria tensão entre duas áreas da vida que precisam aprender a funcionar juntas.",
    },

    houses: [
      {
        title:
          "Casas 1 e 7",

        text:
          "Equilíbrio entre identidade pessoal, autonomia, relacionamentos e compromissos.",
      },

      {
        title:
          "Casas 2 e 8",

        text:
          "Tensão entre recursos pessoais, compartilhamento, intimidade e transformações.",
      },

      {
        title:
          "Casas 3 e 9",

        text:
          "Busca de equilíbrio entre informações concretas, aprendizagem e grandes convicções.",
      },

      {
        title:
          "Casas 4 e 10",

        text:
          "Conciliação da vida privada, das raízes, da carreira e do lugar ocupado no mundo.",
      },

      {
        title:
          "Casas 5 e 11",

        text:
          "Equilíbrio entre expressão pessoal, criatividade, projetos coletivos e grupos.",
      },

      {
        title:
          "Casas 6 e 12",

        text:
          "Relação entre cotidiano, responsabilidades, descanso, vida interior e capacidade de se entregar.",
      },
    ],

    projection: {
      kicker:
        "O mecanismo de projeção",

      title:
        "Por que a oposição costuma se manifestar nos relacionamentos?",

      symbol:
        "☍",

      subtitle:
        "Reconhecer o outro polo dentro de si",

      paragraphs: [
        "Em uma oposição, é comum identificar-se mais com um dos planetas. A outra energia pode então parecer vir apenas dos parceiros, familiares ou circunstâncias.",

        "Uma pessoa com Vênus oposta a Saturno pode, por exemplo, perceber-se como afetuosa enquanto encontra repetidamente parceiros mais reservados ou exigentes.",

        "O desenvolvimento começa quando a pessoa reconhece que os dois planetas pertencem ao seu próprio funcionamento interior.",
      ],
    },

    transits: {
      title:
        "A oposição nos trânsitos astrológicos",

      paragraphs: [
        "Uma oposição também pode ocorrer quando um planeta em movimento se posiciona diante de um planeta do seu mapa natal.",

        "Esse trânsito pode destacar uma tensão já existente, provocar uma tomada de consciência ou exigir reequilíbrio em uma área específica da sua vida.",

        "As oposições de Saturno podem destacar responsabilidades ou limites, enquanto as de Júpiter podem exagerar uma situação para revelar aquilo que está sem equilíbrio.",
      ],
    },

    cta: {
      kicker:
        "Descubra seu mapa natal",

      title:
        "Você possui uma oposição importante no seu mapa natal?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir seus planetas, suas casas e os principais aspectos presentes no nascimento.",

      button:
        "Ver meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre a oposição na astrologia",

      items: [
        {
          question:
            "O que é uma oposição na astrologia?",

          answer:
            "Uma oposição se forma quando dois planetas estão separados por um ângulo de aproximadamente 180 graus. Simbolicamente, eles ficam frente a frente e representam duas necessidades que precisam aprender a se equilibrar.",
        },

        {
          question:
            "A oposição é um aspecto negativo?",

          answer:
            "Não. A oposição pode criar tensões, projeções ou contradições, mas também favorece consciência, complementaridade e busca de um melhor equilíbrio.",
        },

        {
          question:
            "Qual orbe deve ser usado para uma oposição?",

          answer:
            "O orbe varia conforme o método utilizado. Uma oposição costuma ser interpretada até aproximadamente 8 graus, com uma margem às vezes maior quando envolve o Sol ou a Lua.",
        },

        {
          question:
            "O que significa uma oposição entre dois signos?",

          answer:
            "Os signos opostos geralmente compartilham a mesma modalidade e pertencem a elementos complementares. Eles representam duas maneiras diferentes, mas relacionadas, de abordar a mesma dinâmica.",
        },

        {
          question:
            "Por que a oposição cria projeção?",

          answer:
            "Uma pessoa pode reconhecer com maior facilidade um dos planetas e atribuir o outro às pessoas ao seu redor. Ela encontra essa energia nos relacionamentos antes de conseguir integrá-la interiormente.",
        },

        {
          question:
            "Uma oposição pode se tornar uma força?",

          answer:
            "Sim. Quando compreendida e equilibrada, uma oposição pode desenvolver a capacidade de enxergar várias perspectivas, negociar, construir pontes e reunir necessidades complementares.",
        },

        {
          question:
            "Como saber se tenho uma oposição no mapa natal?",

          answer:
            "Você deve gerar seu mapa natal e comparar a posição dos planetas. Dois planetas localizados quase a 180 graus um do outro podem formar uma oposição.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegação entre os aspectos astrológicos",

      previous:
        "Aspecto anterior: conjunção",

      next:
        "Próximo aspecto: quadratura",
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
