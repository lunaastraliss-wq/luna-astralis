// i18n/pages/astrologie/sextile.ts

import type {
  Locale,
} from "@/i18n/config";

export type SextileReadingCard = {
  number: string;
  title: string;
  text: string;
};

export type SextilePolarityCard = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type SextileMethod = {
  number: string;
  title: string;
  text: string;
};

export type SextileOrb = {
  value: string;
  title: string;
  text: string;
};

export type SextileExample = {
  planets: string;
  symbol: string;
  keywords: string;
  text: string;
};

export type SextileElement = {
  symbols: string[];
  title: string;
  keywords: string;
  text: string;
};

export type SextileHouse = {
  title: string;
  text: string;
};

export type SextileComparison = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type SextileFaqItem = {
  question: string;
  answer: string;
};

export type SextilePageText = {
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
    cards: SextileReadingCard[];
  };

  benefits: {
    kicker: string;
    title: string;
    introduction: string;
    cards: SextilePolarityCard[];
  };

  interpretation: {
    kicker: string;
    title: string;
    methods: SextileMethod[];
  };

  orb: {
    title: string;
    introduction: string;
    cards: SextileOrb[];
    conclusion: string;
  };

  examplesSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  examples: SextileExample[];

  elementsSection: {
    title: string;
    introduction: string;
  };

  elements: SextileElement[];

  housesSection: {
    title: string;
    introduction: string;
  };

  houses: SextileHouse[];

  comparisonSection: {
    kicker: string;
    title: string;
    cards: SextileComparison[];
  };

  patterns: {
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
    items: SextileFaqItem[];
  };

  navigation: {
    ariaLabel: string;
    previous: string;
    next: string;
  };

  disclaimer: string;
};

export const SEXTILE_TRANSLATIONS:
  Record<
    Locale,
    SextilePageText
  > = {
  fr: {
    metadata: {
      title:
        "Le sextile en astrologie : signification dans le thème natal | Luna Astralis",

      description:
        "Découvrez la signification du sextile en astrologie, son angle de 60°, ses occasions favorables et son interprétation entre les planètes dans le thème natal.",

      ogTitle:
        "Le sextile en astrologie : possibilités, coopération et potentiel",

      ogDescription:
        "Comprenez comment le sextile relie deux planètes de manière favorable et révèle des possibilités qui doivent être activées consciemment.",

      twitterTitle:
        "Le sextile en astrologie | Luna Astralis",

      twitterDescription:
        "Angle de 60°, possibilités, talents à développer et occasions favorables dans le thème natal.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le sextile en astrologie : signification dans le thème natal",

      description:
        "Guide complet pour comprendre le sextile astrologique, son angle de 60 degrés, son orbe et son interprétation entre les planètes.",
    },

    breadcrumb: {
      home:
        "Accueil",

      aspects:
        "Aspects",

      current:
        "Sextile",

      ariaLabel:
        "Fil d’Ariane",
    },

    hero: {
      badge:
        "✦ Aspect astrologique majeur",

      symbol:
        "⚹",

      title:
        "Le sextile en astrologie",

      lead:
        "Le sextile se forme lorsque deux planètes sont séparées par un angle de 60 degrés. Il révèle une possibilité de coopération, un talent à développer ou une occasion favorable qui demande une participation consciente.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "60°",

        dynamicLabel:
          "Dynamique",

        dynamicValue:
          "Possibilité",

        functionLabel:
          "Fonction",

        functionValue:
          "Activation",
      },

      createChart:
        "Créer ma carte du ciel gratuite",

      understand:
        "Comprendre le sextile",
    },

    meaning: {
      kicker:
        "Une occasion à saisir",

      title:
        "Que signifie un sextile en astrologie ?",

      paragraphs: [
        "Le sextile est un aspect qui se forme lorsque deux planètes sont séparées par un angle d’environ 60 degrés dans le cercle zodiacal.",

        "Les fonctions représentées par les deux planètes peuvent collaborer de manière favorable. Cette entente n’agit toutefois pas toujours automatiquement.",

        "Le sextile représente souvent une possibilité, un talent ou une ressource qui demande d’être activé par une décision, un effort ou une initiative personnelle.",
      ],
    },

    functioning: {
      title:
        "Comment fonctionne le sextile ?",

      cards: [
        {
          number:
            "01",

          title:
            "Deux planètes peuvent coopérer",

          text:
            "Leurs fonctions sont compatibles et peuvent se soutenir sans créer une forte tension.",
        },

        {
          number:
            "02",

          title:
            "Une possibilité apparaît",

          text:
            "L’aspect montre un talent, une ouverture ou une occasion qui peut être utilisée.",
        },

        {
          number:
            "03",

          title:
            "Une initiative est nécessaire",

          text:
            "Le potentiel devient plus visible lorsque la personne décide d’agir ou de développer cette ressource.",
        },

        {
          number:
            "04",

          title:
            "Une compétence se renforce",

          text:
            "Avec la pratique, le sextile peut devenir un talent solide et un appui important du thème natal.",
        },
      ],
    },

    benefits: {
      kicker:
        "Un aspect favorable mais actif",

      title:
        "Le sextile est-il toujours bénéfique ?",

      introduction:
        "Le sextile est généralement classé parmi les aspects harmonieux. Il facilite la collaboration entre les planètes et peut ouvrir des chemins intéressants.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Les forces du sextile",

          paragraphs: [
            "Le sextile favorise l’apprentissage, la curiosité, l’adaptation, les rencontres utiles et la capacité à reconnaître les possibilités.",

            "Il peut aussi faciliter la coopération entre deux qualités complémentaires de la personnalité.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Les limites du sextile",

          paragraphs: [
            "Comme il ne produit pas une forte pression, le sextile peut rester discret ou ne jamais être utilisé pleinement.",

            "La personne peut reconnaître une possibilité sans prendre les mesures nécessaires pour la transformer en résultat concret.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Les éléments à observer",

      title:
        "Comment interpréter un sextile dans un thème natal ?",

      methods: [
        {
          number:
            "1",

          title:
            "Identifier les deux planètes",

          text:
            "Les planètes montrent les fonctions qui peuvent collaborer et créer une possibilité favorable.",
        },

        {
          number:
            "2",

          title:
            "Observer les signes",

          text:
            "Les signes expliquent comment les deux énergies s’expriment et pourquoi elles peuvent se compléter.",
        },

        {
          number:
            "3",

          title:
            "Étudier les maisons",

          text:
            "Les maisons révèlent les domaines de vie dans lesquels les occasions et les talents peuvent apparaître.",
        },

        {
          number:
            "4",

          title:
            "Repérer les occasions",

          text:
            "Il faut observer les situations où la personne reçoit une aide, une ouverture ou une possibilité de progression.",
        },

        {
          number:
            "5",

          title:
            "Vérifier l’initiative personnelle",

          text:
            "Le sextile produit ses meilleurs résultats lorsque la personne agit consciemment et transforme le potentiel en expérience.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe du sextile",

      introduction:
        "L’orbe représente l’écart entre l’angle exact de 60 degrés et la position réelle des planètes. Comme le sextile est généralement moins puissant qu’une conjonction ou une opposition, son orbe est souvent plus serré.",

      cards: [
        {
          value:
            "0° à 1°",

          title:
            "Sextile très serré",

          text:
            "La possibilité de coopération est forte et peut devenir un talent important lorsqu’elle est utilisée.",
        },

        {
          value:
            "2° à 3°",

          title:
            "Sextile fort",

          text:
            "La relation entre les deux planètes reste clairement visible et peut soutenir plusieurs domaines de vie.",
        },

        {
          value:
            "4° à 5°",

          title:
            "Sextile plus large",

          text:
            "L’aspect peut encore être significatif, surtout s’il implique le Soleil, la Lune ou une planète dominante.",
        },
      ],

      conclusion:
        "Plus le sextile est exact, plus sa coopération est facile à reconnaître. Sa véritable importance dépend toutefois de la place des planètes dans l’ensemble du thème natal.",
    },

    examplesSection: {
      kicker:
        "Exemples d’interprétation",

      title:
        "Les principaux sextiles entre les planètes",

      introduction:
        "Chaque sextile s’exprime selon les signes, les maisons et les autres aspects du thème. Les exemples suivants présentent leur dynamique générale.",
    },

    examples: [
      {
        planets:
          "Soleil sextile Lune",

        symbol:
          "☀ ⚹ ☽",

        keywords:
          "Identité • émotions • coopération",

        text:
          "Le Soleil sextile à la Lune favorise une coopération naturelle entre l’identité consciente et les besoins émotionnels. La personne peut développer une plus grande cohérence intérieure par ses choix.",
      },

      {
        planets:
          "Mercure sextile Vénus",

        symbol:
          "☿ ⚹ ♀",

        keywords:
          "Communication • charme • diplomatie",

        text:
          "Mercure sextile à Vénus peut faciliter l’expression agréable, la diplomatie et la créativité verbale. La personne possède souvent un talent relationnel qui se renforce avec la pratique.",
      },

      {
        planets:
          "Vénus sextile Mars",

        symbol:
          "♀ ⚹ ♂",

        keywords:
          "Relations • désir • attraction",

        text:
          "Vénus sextile à Mars favorise une coopération entre l’affection et le désir. Cet aspect peut soutenir le charme, la créativité et la capacité à exprimer ses sentiments.",
      },

      {
        planets:
          "Mars sextile Jupiter",

        symbol:
          "♂ ⚹ ♃",

        keywords:
          "Action • confiance • expansion",

        text:
          "Mars sextile à Jupiter peut apporter enthousiasme, initiative et confiance dans l’action. Les possibilités deviennent plus importantes lorsque la personne ose agir.",
      },

      {
        planets:
          "Saturne sextile Uranus",

        symbol:
          "♄ ⚹ ♅",

        keywords:
          "Structure • innovation • adaptation",

        text:
          "Saturne sextile à Uranus permet de combiner stabilité et changement. La personne peut moderniser une structure sans perdre le sens des responsabilités.",
      },

      {
        planets:
          "Lune sextile Neptune",

        symbol:
          "☽ ⚹ ♆",

        keywords:
          "Émotions • intuition • imagination",

        text:
          "La Lune sextile à Neptune peut favoriser l’empathie, l’intuition et la sensibilité artistique. Ces qualités se développent lorsqu’elles sont exprimées concrètement.",
      },
    ],

    elementsSection: {
      title:
        "Le sextile et les éléments compatibles",

      introduction:
        "Le sextile relie généralement des signes appartenant à des éléments différents mais compatibles. Cette complémentarité favorise l’échange et la coopération.",
    },

    elements: [
      {
        symbols: [
          "🔥",
          "◌",
        ],

        title:
          "Feu et Air",

        keywords:
          "Inspiration • idées • mouvement",

        text:
          "L’Air stimule les idées et la réflexion, tandis que le Feu apporte l’enthousiasme et le courage de passer à l’action.",
      },

      {
        symbols: [
          "🌿",
          "💧",
        ],

        title:
          "Terre et Eau",

        keywords:
          "Sensibilité • stabilité • création",

        text:
          "L’Eau apporte l’intuition et la profondeur émotionnelle, tandis que la Terre donne une forme concrète aux émotions et aux inspirations.",
      },
    ],

    housesSection: {
      title:
        "Le sextile dans les maisons astrologiques",

      introduction:
        "Les maisons concernées indiquent les domaines de vie dans lesquels les occasions, les contacts favorables et les talents à développer sont les plus visibles.",
    },

    houses: [
      {
        title:
          "Maisons personnelles",

        text:
          "Les maisons 1 à 3 peuvent offrir des occasions liées à l’identité, aux ressources, aux apprentissages et à la communication.",
      },

      {
        title:
          "Maisons intimes",

        text:
          "Les maisons 4 à 6 peuvent soutenir la famille, la créativité, le travail, les habitudes et l’organisation quotidienne.",
      },

      {
        title:
          "Maisons relationnelles",

        text:
          "Les maisons 7 à 9 peuvent favoriser les partenariats, les rencontres, les transformations et les découvertes.",
      },

      {
        title:
          "Maisons collectives",

        text:
          "Les maisons 10 à 12 peuvent offrir des possibilités liées à la carrière, aux projets, aux réseaux et à la vie intérieure.",
      },
    ],

    comparisonSection: {
      kicker:
        "Trigone ou sextile",

      title:
        "Quelle est la différence entre un sextile et un trigone ?",

      cards: [
        {
          symbol:
            "△",

          title:
            "Le trigone",

          paragraphs: [
            "Le trigone représente une facilité naturelle. L’énergie circule presque spontanément entre les deux planètes.",

            "Son talent peut être puissant, mais il risque parfois d’être tenu pour acquis ou insuffisamment développé.",
          ],
        },

        {
          symbol:
            "⚹",

          title:
            "Le sextile",

          paragraphs: [
            "Le sextile représente une possibilité favorable qui demande généralement une initiative ou une participation consciente.",

            "Son potentiel se développe par la curiosité, l’apprentissage, les décisions et les expériences.",
          ],
        },
      ],
    },

    patterns: {
      kicker:
        "Une figure de possibilités",

      title:
        "Le sextile dans les figures astrologiques",

      symbol:
        "⚹",

      subtitle:
        "Un lien qui peut soutenir une configuration plus grande",

      paragraphs: [
        "Plusieurs sextiles peuvent former des structures astrologiques plus complexes lorsqu’ils sont reliés à des trigones, des oppositions ou d’autres aspects.",

        "Dans un cerf-volant astrologique, par exemple, les sextiles peuvent aider à transformer les talents d’un grand trigone en possibilités plus concrètes.",

        "Le sextile agit alors comme un passage entre un potentiel naturel et une action consciente.",
      ],
    },

    transits: {
      title:
        "Le sextile dans les transits astrologiques",

      paragraphs: [
        "Un sextile peut également se former lorsqu’une planète en mouvement crée un angle de 60 degrés avec une planète de votre thème natal.",

        "Ce transit peut correspondre à une période favorable pour apprendre, communiquer, rencontrer une personne, développer une idée ou saisir une nouvelle possibilité.",

        "Le sextile n’impose généralement pas un événement. Il ouvre plutôt une porte qui demande d’être reconnue et franchie.",
      ],
    },

    cta: {
      kicker:
        "Découvrez votre thème natal",

      title:
        "Avez-vous un sextile important dans votre carte du ciel ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir vos planètes, vos maisons et les principaux aspects de votre naissance.",

      button:
        "Voir ma carte du ciel",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur le sextile en astrologie",

      items: [
        {
          question:
            "Qu’est-ce qu’un sextile en astrologie ?",

          answer:
            "Un sextile se forme lorsque deux planètes sont séparées par un angle d’environ 60 degrés. Il représente une possibilité favorable de coopération entre les fonctions des deux planètes.",
        },

        {
          question:
            "Le sextile est-il un aspect positif ?",

          answer:
            "Oui, le sextile est généralement considéré comme harmonieux. Il offre des possibilités, mais celles-ci demandent souvent une initiative ou un choix conscient pour se développer.",
        },

        {
          question:
            "Quel orbe utiliser pour un sextile ?",

          answer:
            "L’orbe du sextile est généralement plus serré que celui des aspects majeurs plus puissants. Il est souvent interprété jusqu’à environ 5 degrés.",
        },

        {
          question:
            "Quelle est la différence entre un sextile et un trigone ?",

          answer:
            "Le trigone représente une facilité naturelle qui fonctionne presque spontanément. Le sextile indique plutôt une possibilité favorable qui devient plus forte lorsqu’elle est activée.",
        },

        {
          question:
            "Pourquoi le sextile relie-t-il des éléments compatibles ?",

          answer:
            "Les signes séparés de 60 degrés appartiennent généralement à des éléments complémentaires, comme le Feu et l’Air ou la Terre et l’Eau.",
        },

        {
          question:
            "Un sextile peut-il rester inutilisé ?",

          answer:
            "Oui. Comme il ne crée pas une forte tension, son potentiel peut rester discret si la personne ne prend pas l’initiative de le développer.",
        },

        {
          question:
            "Comment savoir si j’ai un sextile dans mon thème natal ?",

          answer:
            "Il faut générer votre carte du ciel et comparer la position de vos planètes. Deux planètes séparées par environ 60 degrés peuvent former un sextile.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation entre les aspects astrologiques",

      previous:
        "Aspect précédent : trigone",

      next:
        "Aspect suivant : quinconce",
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Sextile in Astrology: Meaning in the Birth Chart | Luna Astralis",

      description:
        "Discover the meaning of the sextile in astrology, its 60° angle, favorable opportunities and its interpretation between planets in the birth chart.",

      ogTitle:
        "Sextile in Astrology: Possibilities, Cooperation and Potential",

      ogDescription:
        "Understand how the sextile connects two planets favorably and reveals possibilities that must be consciously activated.",

      twitterTitle:
        "Sextile in Astrology | Luna Astralis",

      twitterDescription:
        "A 60° angle, possibilities, talents to develop and favorable opportunities in the birth chart.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Sextile in Astrology: Meaning in the Birth Chart",

      description:
        "A complete guide to understanding the astrological sextile, its 60-degree angle, its orb and its interpretation between planets.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspects",

      current:
        "Sextile",

      ariaLabel:
        "Breadcrumb",
    },

    hero: {
      badge:
        "✦ Major astrological aspect",

      symbol:
        "⚹",

      title:
        "Sextile in Astrology",

      lead:
        "A sextile forms when two planets are separated by an angle of 60 degrees. It reveals an opportunity for cooperation, a talent to develop or a favorable opening that requires conscious participation.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "60°",

        dynamicLabel:
          "Dynamic",

        dynamicValue:
          "Possibility",

        functionLabel:
          "Function",

        functionValue:
          "Activation",
      },

      createChart:
        "Create my free birth chart",

      understand:
        "Understand the sextile",
    },

    meaning: {
      kicker:
        "An opportunity to seize",

      title:
        "What does a sextile mean in astrology?",

      paragraphs: [
        "A sextile is an aspect formed when two planets are separated by an angle of approximately 60 degrees in the zodiac circle.",

        "The functions represented by the two planets may cooperate favorably. However, this agreement does not always operate automatically.",

        "A sextile often represents an opportunity, talent or resource that must be activated through a decision, effort or personal initiative.",
      ],
    },

    functioning: {
      title:
        "How does a sextile work?",

      cards: [
        {
          number:
            "01",

          title:
            "Two planets can cooperate",

          text:
            "Their functions are compatible and may support each other without creating strong tension.",
        },

        {
          number:
            "02",

          title:
            "An opportunity appears",

          text:
            "The aspect reveals a talent, opening or opportunity that may be used.",
        },

        {
          number:
            "03",

          title:
            "Initiative is required",

          text:
            "The potential becomes more visible when the person decides to act or develop this resource.",
        },

        {
          number:
            "04",

          title:
            "A skill becomes stronger",

          text:
            "With practice, the sextile may become a solid talent and an important support in the birth chart.",
        },
      ],
    },

    benefits: {
      kicker:
        "A favorable but active aspect",

      title:
        "Is the sextile always beneficial?",

      introduction:
        "The sextile is generally classified among harmonious aspects. It facilitates cooperation between planets and may open interesting paths.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "The strengths of the sextile",

          paragraphs: [
            "The sextile encourages learning, curiosity, adaptation, useful encounters and the ability to recognize possibilities.",

            "It may also facilitate cooperation between two complementary qualities of the personality.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "The limits of the sextile",

          paragraphs: [
            "Because it does not create strong pressure, the sextile may remain subtle or never be fully used.",

            "The person may recognize an opportunity without taking the steps required to transform it into a concrete result.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "The elements to observe",

      title:
        "How do you interpret a sextile in a birth chart?",

      methods: [
        {
          number:
            "1",

          title:
            "Identify the two planets",

          text:
            "The planets reveal the functions that may cooperate and create a favorable opportunity.",
        },

        {
          number:
            "2",

          title:
            "Observe the signs",

          text:
            "The signs explain how the two energies are expressed and why they may complement each other.",
        },

        {
          number:
            "3",

          title:
            "Study the houses",

          text:
            "The houses reveal the areas of life in which opportunities and talents may appear.",
        },

        {
          number:
            "4",

          title:
            "Notice the opportunities",

          text:
            "Observe the situations in which the person receives help, an opening or an opportunity for progress.",
        },

        {
          number:
            "5",

          title:
            "Check personal initiative",

          text:
            "The sextile produces its best results when the person acts consciously and transforms potential into experience.",
        },
      ],
    },

    orb: {
      title:
        "The orb of the sextile",

      introduction:
        "The orb represents the difference between the exact 60-degree angle and the planets’ actual positions. Because the sextile is generally less powerful than a conjunction or opposition, its orb is often narrower.",

      cards: [
        {
          value:
            "0° to 1°",

          title:
            "Very tight sextile",

          text:
            "The opportunity for cooperation is strong and may become an important talent when it is used.",
        },

        {
          value:
            "2° to 3°",

          title:
            "Strong sextile",

          text:
            "The relationship between the two planets remains clearly visible and may support several areas of life.",
        },

        {
          value:
            "4° to 5°",

          title:
            "Wider sextile",

          text:
            "The aspect may still be significant, especially when it involves the Sun, Moon or a dominant planet.",
        },
      ],

      conclusion:
        "The more exact the sextile, the easier its cooperation is to recognize. Its true importance nevertheless depends on the role of the planets within the entire birth chart.",
    },

    examplesSection: {
      kicker:
        "Interpretation examples",

      title:
        "The main sextiles between planets",

      introduction:
        "Each sextile is expressed according to its signs, houses and the other aspects of the chart. The following examples present their general dynamics.",
    },

    examples: [
      {
        planets:
          "Sun sextile Moon",

        symbol:
          "☀ ⚹ ☽",

        keywords:
          "Identity • emotions • cooperation",

        text:
          "The Sun sextile the Moon encourages natural cooperation between conscious identity and emotional needs. The person may develop greater inner coherence through their choices.",
      },

      {
        planets:
          "Mercury sextile Venus",

        symbol:
          "☿ ⚹ ♀",

        keywords:
          "Communication • charm • diplomacy",

        text:
          "Mercury sextile Venus may facilitate pleasant expression, diplomacy and verbal creativity. The person often possesses a relational talent that becomes stronger with practice.",
      },

      {
        planets:
          "Venus sextile Mars",

        symbol:
          "♀ ⚹ ♂",

        keywords:
          "Relationships • desire • attraction",

        text:
          "Venus sextile Mars encourages cooperation between affection and desire. This aspect may support charm, creativity and the ability to express feelings.",
      },

      {
        planets:
          "Mars sextile Jupiter",

        symbol:
          "♂ ⚹ ♃",

        keywords:
          "Action • confidence • expansion",

        text:
          "Mars sextile Jupiter may bring enthusiasm, initiative and confidence in action. Opportunities become more important when the person dares to act.",
      },

      {
        planets:
          "Saturn sextile Uranus",

        symbol:
          "♄ ⚹ ♅",

        keywords:
          "Structure • innovation • adaptation",

        text:
          "Saturn sextile Uranus allows stability and change to be combined. The person may modernize a structure without losing a sense of responsibility.",
      },

      {
        planets:
          "Moon sextile Neptune",

        symbol:
          "☽ ⚹ ♆",

        keywords:
          "Emotions • intuition • imagination",

        text:
          "The Moon sextile Neptune may encourage empathy, intuition and artistic sensitivity. These qualities develop when they are expressed concretely.",
      },
    ],

    elementsSection: {
      title:
        "The sextile and compatible elements",

      introduction:
        "The sextile generally connects signs belonging to different but compatible elements. This complementarity encourages exchange and cooperation.",
    },

    elements: [
      {
        symbols: [
          "🔥",
          "◌",
        ],

        title:
          "Fire and Air",

        keywords:
          "Inspiration • ideas • movement",

        text:
          "Air stimulates ideas and reflection, while Fire brings enthusiasm and the courage to take action.",
      },

      {
        symbols: [
          "🌿",
          "💧",
        ],

        title:
          "Earth and Water",

        keywords:
          "Sensitivity • stability • creation",

        text:
          "Water brings intuition and emotional depth, while Earth gives concrete form to emotions and inspiration.",
      },
    ],

    housesSection: {
      title:
        "The sextile in the astrological houses",

      introduction:
        "The houses involved indicate the areas of life in which opportunities, favorable contacts and talents to develop are most visible.",
    },

    houses: [
      {
        title:
          "Personal houses",

        text:
          "Houses 1 to 3 may offer opportunities connected with identity, resources, learning and communication.",
      },

      {
        title:
          "Intimate houses",

        text:
          "Houses 4 to 6 may support family, creativity, work, habits and everyday organization.",
      },

      {
        title:
          "Relational houses",

        text:
          "Houses 7 to 9 may encourage partnerships, encounters, transformation and discovery.",
      },

      {
        title:
          "Collective houses",

        text:
          "Houses 10 to 12 may offer possibilities connected with career, projects, networks and inner life.",
      },
    ],

    comparisonSection: {
      kicker:
        "Trine or sextile",

      title:
        "What is the difference between a sextile and a trine?",

      cards: [
        {
          symbol:
            "△",

          title:
            "The trine",

          paragraphs: [
            "The trine represents a natural ease. Energy flows almost spontaneously between the two planets.",

            "Its talent may be powerful, but it may sometimes be taken for granted or remain insufficiently developed.",
          ],
        },

        {
          symbol:
            "⚹",

          title:
            "The sextile",

          paragraphs: [
            "The sextile represents a favorable possibility that generally requires initiative or conscious participation.",

            "Its potential develops through curiosity, learning, decisions and experience.",
          ],
        },
      ],
    },

    patterns: {
      kicker:
        "A pattern of possibilities",

      title:
        "The sextile in astrological patterns",

      symbol:
        "⚹",

      subtitle:
        "A connection that may support a larger configuration",

      paragraphs: [
        "Several sextiles may form more complex astrological structures when connected with trines, oppositions or other aspects.",

        "In a kite pattern, for example, sextiles may help transform the talents of a grand trine into more concrete possibilities.",

        "The sextile then acts as a bridge between natural potential and conscious action.",
      ],
    },

    transits: {
      title:
        "The sextile in astrological transits",

      paragraphs: [
        "A sextile may also form when a moving planet creates a 60-degree angle with a planet in your birth chart.",

        "This transit may correspond to a favorable period for learning, communicating, meeting someone, developing an idea or seizing a new opportunity.",

        "The sextile generally does not impose an event. Instead, it opens a door that must be recognized and entered.",
      ],
    },

    cta: {
      kicker:
        "Discover your birth chart",

      title:
        "Do you have an important sextile in your birth chart?",

      text:
        "Generate your free birth chart to discover your planets, houses and the main aspects present at your birth.",

      button:
        "View my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about the sextile in astrology",

      items: [
        {
          question:
            "What is a sextile in astrology?",

          answer:
            "A sextile forms when two planets are separated by an angle of approximately 60 degrees. It represents a favorable opportunity for cooperation between the functions of both planets.",
        },

        {
          question:
            "Is the sextile a positive aspect?",

          answer:
            "Yes. The sextile is generally considered harmonious. It offers possibilities, but they often require initiative or a conscious choice in order to develop.",
        },

        {
          question:
            "What orb should be used for a sextile?",

          answer:
            "The sextile’s orb is generally narrower than that of more powerful major aspects. It is often interpreted up to approximately 5 degrees.",
        },

        {
          question:
            "What is the difference between a sextile and a trine?",

          answer:
            "The trine represents natural ease that functions almost spontaneously. The sextile instead indicates a favorable possibility that becomes stronger when activated.",
        },

        {
          question:
            "Why does the sextile connect compatible elements?",

          answer:
            "Signs separated by 60 degrees generally belong to complementary elements, such as Fire and Air or Earth and Water.",
        },

        {
          question:
            "Can a sextile remain unused?",

          answer:
            "Yes. Because it does not create strong tension, its potential may remain subtle if the person does not take the initiative to develop it.",
        },

        {
          question:
            "How can I know whether I have a sextile in my birth chart?",

          answer:
            "You must generate your birth chart and compare the positions of your planets. Two planets separated by approximately 60 degrees may form a sextile.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation between astrological aspects",

      previous:
        "Previous aspect: trine",

      next:
        "Next aspect: quincunx",
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "El sextil en astrología: significado en la carta natal | Luna Astralis",

      description:
        "Descubre el significado del sextil en astrología, su ángulo de 60°, sus oportunidades favorables y su interpretación entre los planetas de la carta natal.",

      ogTitle:
        "El sextil en astrología: posibilidades, cooperación y potencial",

      ogDescription:
        "Comprende cómo el sextil conecta favorablemente dos planetas y revela posibilidades que deben activarse conscientemente.",

      twitterTitle:
        "El sextil en astrología | Luna Astralis",

      twitterDescription:
        "Ángulo de 60°, posibilidades, talentos por desarrollar y oportunidades favorables en la carta natal.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "El sextil en astrología: significado en la carta natal",

      description:
        "Guía completa para comprender el sextil astrológico, su ángulo de 60 grados, su orbe y su interpretación entre los planetas.",
    },

    breadcrumb: {
      home:
        "Inicio",

      aspects:
        "Aspectos",

      current:
        "Sextil",

      ariaLabel:
        "Migas de pan",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico mayor",

      symbol:
        "⚹",

      title:
        "El sextil en astrología",

      lead:
        "El sextil se forma cuando dos planetas están separados por un ángulo de 60 grados. Revela una posibilidad de cooperación, un talento por desarrollar o una oportunidad favorable que requiere una participación consciente.",

      data: {
        angleLabel:
          "Ángulo",

        angleValue:
          "60°",

        dynamicLabel:
          "Dinámica",

        dynamicValue:
          "Posibilidad",

        functionLabel:
          "Función",

        functionValue:
          "Activación",
      },

      createChart:
        "Crear mi carta natal gratis",

      understand:
        "Comprender el sextil",
    },

    meaning: {
      kicker:
        "Una oportunidad que aprovechar",

      title:
        "¿Qué significa un sextil en astrología?",

      paragraphs: [
        "El sextil es un aspecto que se forma cuando dos planetas están separados por un ángulo de aproximadamente 60 grados en el círculo zodiacal.",

        "Las funciones representadas por ambos planetas pueden colaborar favorablemente. Sin embargo, esta armonía no siempre actúa de manera automática.",

        "El sextil suele representar una posibilidad, un talento o un recurso que debe activarse mediante una decisión, un esfuerzo o una iniciativa personal.",
      ],
    },

    functioning: {
      title:
        "¿Cómo funciona el sextil?",

      cards: [
        {
          number:
            "01",

          title:
            "Dos planetas pueden cooperar",

          text:
            "Sus funciones son compatibles y pueden apoyarse sin crear una tensión intensa.",
        },

        {
          number:
            "02",

          title:
            "Aparece una posibilidad",

          text:
            "El aspecto muestra un talento, una apertura o una oportunidad que puede utilizarse.",
        },

        {
          number:
            "03",

          title:
            "Es necesaria una iniciativa",

          text:
            "El potencial se vuelve más visible cuando la persona decide actuar o desarrollar este recurso.",
        },

        {
          number:
            "04",

          title:
            "Una habilidad se fortalece",

          text:
            "Con la práctica, el sextil puede convertirse en un talento sólido y en un apoyo importante de la carta natal.",
        },
      ],
    },

    benefits: {
      kicker:
        "Un aspecto favorable pero activo",

      title:
        "¿El sextil es siempre beneficioso?",

      introduction:
        "El sextil suele clasificarse entre los aspectos armoniosos. Facilita la colaboración entre los planetas y puede abrir caminos interesantes.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Las fortalezas del sextil",

          paragraphs: [
            "El sextil favorece el aprendizaje, la curiosidad, la adaptación, los encuentros útiles y la capacidad de reconocer posibilidades.",

            "También puede facilitar la cooperación entre dos cualidades complementarias de la personalidad.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Los límites del sextil",

          paragraphs: [
            "Como no produce una gran presión, el sextil puede permanecer discreto o no llegar a utilizarse plenamente.",

            "La persona puede reconocer una oportunidad sin tomar las medidas necesarias para transformarla en un resultado concreto.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Los elementos que deben observarse",

      title:
        "¿Cómo interpretar un sextil en una carta natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar los dos planetas",

          text:
            "Los planetas muestran las funciones que pueden colaborar y crear una posibilidad favorable.",
        },

        {
          number:
            "2",

          title:
            "Observar los signos",

          text:
            "Los signos explican cómo se expresan ambas energías y por qué pueden complementarse.",
        },

        {
          number:
            "3",

          title:
            "Estudiar las casas",

          text:
            "Las casas revelan los ámbitos de vida en los que pueden aparecer oportunidades y talentos.",
        },

        {
          number:
            "4",

          title:
            "Detectar las oportunidades",

          text:
            "Deben observarse las situaciones en las que la persona recibe ayuda, una apertura o una posibilidad de progreso.",
        },

        {
          number:
            "5",

          title:
            "Comprobar la iniciativa personal",

          text:
            "El sextil produce sus mejores resultados cuando la persona actúa conscientemente y transforma el potencial en experiencia.",
        },
      ],
    },

    orb: {
      title:
        "El orbe del sextil",

      introduction:
        "El orbe representa la diferencia entre el ángulo exacto de 60 grados y la posición real de los planetas. Como el sextil suele ser menos potente que una conjunción o una oposición, su orbe suele ser más estrecho.",

      cards: [
        {
          value:
            "0° a 1°",

          title:
            "Sextil muy cerrado",

          text:
            "La posibilidad de cooperación es fuerte y puede convertirse en un talento importante cuando se utiliza.",
        },

        {
          value:
            "2° a 3°",

          title:
            "Sextil fuerte",

          text:
            "La relación entre los dos planetas sigue siendo claramente visible y puede apoyar varios ámbitos de la vida.",
        },

        {
          value:
            "4° a 5°",

          title:
            "Sextil más amplio",

          text:
            "El aspecto aún puede ser significativo, especialmente si implica al Sol, la Luna o un planeta dominante.",
        },
      ],

      conclusion:
        "Cuanto más exacto es el sextil, más fácil resulta reconocer su cooperación. Sin embargo, su verdadera importancia depende del papel de los planetas en el conjunto de la carta natal.",
    },

    examplesSection: {
      kicker:
        "Ejemplos de interpretación",

      title:
        "Los principales sextiles entre los planetas",

      introduction:
        "Cada sextil se expresa según los signos, las casas y los demás aspectos de la carta. Los siguientes ejemplos presentan su dinámica general.",
    },

    examples: [
      {
        planets:
          "Sol sextil Luna",

        symbol:
          "☀ ⚹ ☽",

        keywords:
          "Identidad • emociones • cooperación",

        text:
          "El Sol en sextil con la Luna favorece una cooperación natural entre la identidad consciente y las necesidades emocionales. La persona puede desarrollar una mayor coherencia interior mediante sus decisiones.",
      },

      {
        planets:
          "Mercurio sextil Venus",

        symbol:
          "☿ ⚹ ♀",

        keywords:
          "Comunicación • encanto • diplomacia",

        text:
          "Mercurio en sextil con Venus puede facilitar una expresión agradable, la diplomacia y la creatividad verbal. La persona suele poseer un talento relacional que se fortalece con la práctica.",
      },

      {
        planets:
          "Venus sextil Marte",

        symbol:
          "♀ ⚹ ♂",

        keywords:
          "Relaciones • deseo • atracción",

        text:
          "Venus en sextil con Marte favorece la cooperación entre el afecto y el deseo. Este aspecto puede apoyar el encanto, la creatividad y la capacidad de expresar los sentimientos.",
      },

      {
        planets:
          "Marte sextil Júpiter",

        symbol:
          "♂ ⚹ ♃",

        keywords:
          "Acción • confianza • expansión",

        text:
          "Marte en sextil con Júpiter puede aportar entusiasmo, iniciativa y confianza en la acción. Las posibilidades aumentan cuando la persona se atreve a actuar.",
      },

      {
        planets:
          "Saturno sextil Urano",

        symbol:
          "♄ ⚹ ♅",

        keywords:
          "Estructura • innovación • adaptación",

        text:
          "Saturno en sextil con Urano permite combinar estabilidad y cambio. La persona puede modernizar una estructura sin perder el sentido de la responsabilidad.",
      },

      {
        planets:
          "Luna sextil Neptuno",

        symbol:
          "☽ ⚹ ♆",

        keywords:
          "Emociones • intuición • imaginación",

        text:
          "La Luna en sextil con Neptuno puede favorecer la empatía, la intuición y la sensibilidad artística. Estas cualidades se desarrollan cuando se expresan concretamente.",
      },
    ],

    elementsSection: {
      title:
        "El sextil y los elementos compatibles",

      introduction:
        "El sextil suele conectar signos pertenecientes a elementos diferentes pero compatibles. Esta complementariedad favorece el intercambio y la cooperación.",
    },

    elements: [
      {
        symbols: [
          "🔥",
          "◌",
        ],

        title:
          "Fuego y Aire",

        keywords:
          "Inspiración • ideas • movimiento",

        text:
          "El Aire estimula las ideas y la reflexión, mientras que el Fuego aporta entusiasmo y valentía para pasar a la acción.",
      },

      {
        symbols: [
          "🌿",
          "💧",
        ],

        title:
          "Tierra y Agua",

        keywords:
          "Sensibilidad • estabilidad • creación",

        text:
          "El Agua aporta intuición y profundidad emocional, mientras que la Tierra da una forma concreta a las emociones y a la inspiración.",
      },
    ],

    housesSection: {
      title:
        "El sextil en las casas astrológicas",

      introduction:
        "Las casas implicadas indican los ámbitos de vida en los que las oportunidades, los contactos favorables y los talentos por desarrollar son más visibles.",
    },

    houses: [
      {
        title:
          "Casas personales",

        text:
          "Las casas 1 a 3 pueden ofrecer oportunidades relacionadas con la identidad, los recursos, el aprendizaje y la comunicación.",
      },

      {
        title:
          "Casas íntimas",

        text:
          "Las casas 4 a 6 pueden apoyar a la familia, la creatividad, el trabajo, los hábitos y la organización cotidiana.",
      },

      {
        title:
          "Casas relacionales",

        text:
          "Las casas 7 a 9 pueden favorecer las asociaciones, los encuentros, las transformaciones y los descubrimientos.",
      },

      {
        title:
          "Casas colectivas",

        text:
          "Las casas 10 a 12 pueden ofrecer posibilidades relacionadas con la carrera, los proyectos, las redes y la vida interior.",
      },
    ],

    comparisonSection: {
      kicker:
        "Trígono o sextil",

      title:
        "¿Cuál es la diferencia entre un sextil y un trígono?",

      cards: [
        {
          symbol:
            "△",

          title:
            "El trígono",

          paragraphs: [
            "El trígono representa una facilidad natural. La energía circula casi espontáneamente entre los dos planetas.",

            "Su talento puede ser poderoso, pero a veces puede darse por sentado o desarrollarse de manera insuficiente.",
          ],
        },

        {
          symbol:
            "⚹",

          title:
            "El sextil",

          paragraphs: [
            "El sextil representa una posibilidad favorable que generalmente requiere iniciativa o participación consciente.",

            "Su potencial se desarrolla mediante la curiosidad, el aprendizaje, las decisiones y las experiencias.",
          ],
        },
      ],
    },

    patterns: {
      kicker:
        "Una figura de posibilidades",

      title:
        "El sextil en las figuras astrológicas",

      symbol:
        "⚹",

      subtitle:
        "Un vínculo que puede apoyar una configuración mayor",

      paragraphs: [
        "Varios sextiles pueden formar estructuras astrológicas más complejas cuando están conectados con trígonos, oposiciones u otros aspectos.",

        "En una figura de cometa, por ejemplo, los sextiles pueden ayudar a transformar los talentos de un gran trígono en posibilidades más concretas.",

        "El sextil actúa entonces como un puente entre un potencial natural y una acción consciente.",
      ],
    },

    transits: {
      title:
        "El sextil en los tránsitos astrológicos",

      paragraphs: [
        "Un sextil también puede formarse cuando un planeta en movimiento crea un ángulo de 60 grados con un planeta de tu carta natal.",

        "Este tránsito puede corresponder a un período favorable para aprender, comunicarse, conocer a una persona, desarrollar una idea o aprovechar una nueva posibilidad.",

        "El sextil generalmente no impone un acontecimiento. Más bien abre una puerta que debe ser reconocida y atravesada.",
      ],
    },

    cta: {
      kicker:
        "Descubre tu carta natal",

      title:
        "¿Tienes un sextil importante en tu carta natal?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tus planetas, tus casas y los principales aspectos presentes en tu nacimiento.",

      button:
        "Ver mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre el sextil en astrología",

      items: [
        {
          question:
            "¿Qué es un sextil en astrología?",

          answer:
            "Un sextil se forma cuando dos planetas están separados por un ángulo de aproximadamente 60 grados. Representa una posibilidad favorable de cooperación entre las funciones de ambos planetas.",
        },

        {
          question:
            "¿El sextil es un aspecto positivo?",

          answer:
            "Sí. El sextil suele considerarse armonioso. Ofrece posibilidades, pero estas suelen requerir una iniciativa o una decisión consciente para desarrollarse.",
        },

        {
          question:
            "¿Qué orbe debe utilizarse para un sextil?",

          answer:
            "El orbe del sextil suele ser más estrecho que el de los aspectos mayores más potentes. Generalmente se interpreta hasta aproximadamente 5 grados.",
        },

        {
          question:
            "¿Cuál es la diferencia entre un sextil y un trígono?",

          answer:
            "El trígono representa una facilidad natural que funciona casi espontáneamente. El sextil indica una posibilidad favorable que se fortalece cuando se activa.",
        },

        {
          question:
            "¿Por qué el sextil conecta elementos compatibles?",

          answer:
            "Los signos separados por 60 grados suelen pertenecer a elementos complementarios, como Fuego y Aire o Tierra y Agua.",
        },

        {
          question:
            "¿Puede un sextil permanecer sin utilizarse?",

          answer:
            "Sí. Como no crea una tensión fuerte, su potencial puede permanecer discreto si la persona no toma la iniciativa de desarrollarlo.",
        },

        {
          question:
            "¿Cómo saber si tengo un sextil en mi carta natal?",

          answer:
            "Debes generar tu carta natal y comparar las posiciones de tus planetas. Dos planetas separados por aproximadamente 60 grados pueden formar un sextil.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegación entre los aspectos astrológicos",

      previous:
        "Aspecto anterior: trígono",

      next:
        "Aspecto siguiente: quincuncio",
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Das Sextil in der Astrologie: Bedeutung im Geburtshoroskop | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung des Sextils in der Astrologie, seinen 60°-Winkel, günstige Möglichkeiten und seine Deutung zwischen Planeten im Geburtshoroskop.",

      ogTitle:
        "Das Sextil in der Astrologie: Möglichkeiten, Zusammenarbeit und Potenzial",

      ogDescription:
        "Verstehen Sie, wie das Sextil zwei Planeten günstig verbindet und Möglichkeiten offenbart, die bewusst aktiviert werden müssen.",

      twitterTitle:
        "Das Sextil in der Astrologie | Luna Astralis",

      twitterDescription:
        "60°-Winkel, Möglichkeiten, zu entwickelnde Talente und günstige Gelegenheiten im Geburtshoroskop.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Das Sextil in der Astrologie: Bedeutung im Geburtshoroskop",

      description:
        "Ein vollständiger Leitfaden zum astrologischen Sextil, seinem 60-Grad-Winkel, seinem Orbis und seiner Deutung zwischen Planeten.",
    },

    breadcrumb: {
      home:
        "Startseite",

      aspects:
        "Aspekte",

      current:
        "Sextil",

      ariaLabel:
        "Brotkrümelnavigation",
    },

    hero: {
      badge:
        "✦ Bedeutender astrologischer Aspekt",

      symbol:
        "⚹",

      title:
        "Das Sextil in der Astrologie",

      lead:
        "Ein Sextil entsteht, wenn zwei Planeten durch einen Winkel von 60 Grad getrennt sind. Es zeigt eine Möglichkeit zur Zusammenarbeit, ein zu entwickelndes Talent oder eine günstige Gelegenheit, die bewusste Beteiligung erfordert.",

      data: {
        angleLabel:
          "Winkel",

        angleValue:
          "60°",

        dynamicLabel:
          "Dynamik",

        dynamicValue:
          "Möglichkeit",

        functionLabel:
          "Funktion",

        functionValue:
          "Aktivierung",
      },

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      understand:
        "Das Sextil verstehen",
    },

    meaning: {
      kicker:
        "Eine Gelegenheit, die genutzt werden will",

      title:
        "Was bedeutet ein Sextil in der Astrologie?",

      paragraphs: [
        "Ein Sextil ist ein Aspekt, der entsteht, wenn zwei Planeten im Tierkreis durch einen Winkel von ungefähr 60 Grad getrennt sind.",

        "Die von den beiden Planeten dargestellten Funktionen können günstig zusammenarbeiten. Diese Harmonie wirkt jedoch nicht immer automatisch.",

        "Das Sextil steht häufig für eine Möglichkeit, ein Talent oder eine Ressource, die durch eine Entscheidung, Anstrengung oder persönliche Initiative aktiviert werden muss.",
      ],
    },

    functioning: {
      title:
        "Wie funktioniert ein Sextil?",

      cards: [
        {
          number:
            "01",

          title:
            "Zwei Planeten können zusammenarbeiten",

          text:
            "Ihre Funktionen sind miteinander vereinbar und können sich unterstützen, ohne starke Spannung zu erzeugen.",
        },

        {
          number:
            "02",

          title:
            "Eine Möglichkeit entsteht",

          text:
            "Der Aspekt zeigt ein Talent, eine Öffnung oder eine Gelegenheit, die genutzt werden kann.",
        },

        {
          number:
            "03",

          title:
            "Initiative ist notwendig",

          text:
            "Das Potenzial wird sichtbarer, wenn die Person handelt oder diese Ressource bewusst entwickelt.",
        },

        {
          number:
            "04",

          title:
            "Eine Fähigkeit wird gestärkt",

          text:
            "Mit Übung kann das Sextil zu einem soliden Talent und einer wichtigen Unterstützung im Geburtshoroskop werden.",
        },
      ],
    },

    benefits: {
      kicker:
        "Ein günstiger, aber aktiver Aspekt",

      title:
        "Ist das Sextil immer vorteilhaft?",

      introduction:
        "Das Sextil wird gewöhnlich zu den harmonischen Aspekten gezählt. Es erleichtert die Zusammenarbeit zwischen Planeten und kann interessante Wege eröffnen.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Die Stärken des Sextils",

          paragraphs: [
            "Das Sextil fördert Lernen, Neugier, Anpassung, nützliche Begegnungen und die Fähigkeit, Möglichkeiten zu erkennen.",

            "Es kann außerdem die Zusammenarbeit zwischen zwei sich ergänzenden Persönlichkeitsqualitäten erleichtern.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Die Grenzen des Sextils",

          paragraphs: [
            "Da es keinen starken Druck erzeugt, kann das Sextil unauffällig bleiben oder nie vollständig genutzt werden.",

            "Die Person kann eine Möglichkeit erkennen, ohne die notwendigen Schritte zu unternehmen, um sie in ein konkretes Ergebnis zu verwandeln.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Die zu beobachtenden Elemente",

      title:
        "Wie deutet man ein Sextil im Geburtshoroskop?",

      methods: [
        {
          number:
            "1",

          title:
            "Die beiden Planeten bestimmen",

          text:
            "Die Planeten zeigen die Funktionen, die zusammenarbeiten und eine günstige Möglichkeit schaffen können.",
        },

        {
          number:
            "2",

          title:
            "Die Zeichen betrachten",

          text:
            "Die Zeichen erklären, wie sich beide Energien ausdrücken und warum sie einander ergänzen können.",
        },

        {
          number:
            "3",

          title:
            "Die Häuser untersuchen",

          text:
            "Die Häuser zeigen die Lebensbereiche, in denen Gelegenheiten und Talente auftreten können.",
        },

        {
          number:
            "4",

          title:
            "Gelegenheiten erkennen",

          text:
            "Beobachtet werden sollten Situationen, in denen die Person Hilfe, eine Öffnung oder eine Entwicklungsmöglichkeit erhält.",
        },

        {
          number:
            "5",

          title:
            "Die persönliche Initiative prüfen",

          text:
            "Das Sextil erzielt seine besten Ergebnisse, wenn die Person bewusst handelt und Potenzial in Erfahrung verwandelt.",
        },
      ],
    },

    orb: {
      title:
        "Der Orbis des Sextils",

      introduction:
        "Der Orbis bezeichnet die Abweichung zwischen dem exakten 60-Grad-Winkel und den tatsächlichen Positionen der Planeten. Da das Sextil gewöhnlich weniger kraftvoll ist als eine Konjunktion oder Opposition, wird häufig ein engerer Orbis verwendet.",

      cards: [
        {
          value:
            "0° bis 1°",

          title:
            "Sehr enges Sextil",

          text:
            "Die Möglichkeit zur Zusammenarbeit ist stark und kann bei bewusster Nutzung zu einem wichtigen Talent werden.",
        },

        {
          value:
            "2° bis 3°",

          title:
            "Starkes Sextil",

          text:
            "Die Verbindung zwischen den beiden Planeten bleibt deutlich sichtbar und kann mehrere Lebensbereiche unterstützen.",
        },

        {
          value:
            "4° bis 5°",

          title:
            "Weiteres Sextil",

          text:
            "Der Aspekt kann weiterhin bedeutsam sein, besonders wenn Sonne, Mond oder ein dominanter Planet beteiligt sind.",
        },
      ],

      conclusion:
        "Je genauer das Sextil ist, desto leichter lässt sich seine Zusammenarbeit erkennen. Seine tatsächliche Bedeutung hängt jedoch von der Stellung der Planeten im gesamten Geburtshoroskop ab.",
    },

    examplesSection: {
      kicker:
        "Deutungsbeispiele",

      title:
        "Die wichtigsten Sextile zwischen Planeten",

      introduction:
        "Jedes Sextil zeigt sich entsprechend den Zeichen, Häusern und weiteren Aspekten des Horoskops. Die folgenden Beispiele beschreiben ihre allgemeine Dynamik.",
    },

    examples: [
      {
        planets:
          "Sonne Sextil Mond",

        symbol:
          "☀ ⚹ ☽",

        keywords:
          "Identität • Gefühle • Zusammenarbeit",

        text:
          "Sonne im Sextil zum Mond fördert eine natürliche Zusammenarbeit zwischen bewusster Identität und emotionalen Bedürfnissen. Die Person kann durch ihre Entscheidungen größere innere Stimmigkeit entwickeln.",
      },

      {
        planets:
          "Merkur Sextil Venus",

        symbol:
          "☿ ⚹ ♀",

        keywords:
          "Kommunikation • Charme • Diplomatie",

        text:
          "Merkur im Sextil zu Venus kann angenehmen Ausdruck, Diplomatie und sprachliche Kreativität fördern. Die Person besitzt häufig ein Beziehungstalent, das sich durch Übung verstärkt.",
      },

      {
        planets:
          "Venus Sextil Mars",

        symbol:
          "♀ ⚹ ♂",

        keywords:
          "Beziehungen • Verlangen • Anziehung",

        text:
          "Venus im Sextil zu Mars fördert die Zusammenarbeit zwischen Zuneigung und Verlangen. Dieser Aspekt kann Charme, Kreativität und die Fähigkeit unterstützen, Gefühle auszudrücken.",
      },

      {
        planets:
          "Mars Sextil Jupiter",

        symbol:
          "♂ ⚹ ♃",

        keywords:
          "Handlung • Vertrauen • Expansion",

        text:
          "Mars im Sextil zu Jupiter kann Begeisterung, Initiative und Vertrauen im Handeln bringen. Möglichkeiten werden größer, wenn die Person den Mut zum Handeln findet.",
      },

      {
        planets:
          "Saturn Sextil Uranus",

        symbol:
          "♄ ⚹ ♅",

        keywords:
          "Struktur • Innovation • Anpassung",

        text:
          "Saturn im Sextil zu Uranus ermöglicht die Verbindung von Stabilität und Veränderung. Die Person kann eine Struktur modernisieren, ohne das Verantwortungsbewusstsein zu verlieren.",
      },

      {
        planets:
          "Mond Sextil Neptun",

        symbol:
          "☽ ⚹ ♆",

        keywords:
          "Gefühle • Intuition • Vorstellungskraft",

        text:
          "Mond im Sextil zu Neptun kann Empathie, Intuition und künstlerische Sensibilität fördern. Diese Eigenschaften entwickeln sich, wenn sie konkret ausgedrückt werden.",
      },
    ],

    elementsSection: {
      title:
        "Das Sextil und kompatible Elemente",

      introduction:
        "Das Sextil verbindet gewöhnlich Zeichen unterschiedlicher, aber kompatibler Elemente. Diese Ergänzung fördert Austausch und Zusammenarbeit.",
    },

    elements: [
      {
        symbols: [
          "🔥",
          "◌",
        ],

        title:
          "Feuer und Luft",

        keywords:
          "Inspiration • Ideen • Bewegung",

        text:
          "Luft regt Ideen und Reflexion an, während Feuer Begeisterung und den Mut zum Handeln bringt.",
      },

      {
        symbols: [
          "🌿",
          "💧",
        ],

        title:
          "Erde und Wasser",

        keywords:
          "Sensibilität • Stabilität • Schöpfung",

        text:
          "Wasser bringt Intuition und emotionale Tiefe, während Erde Gefühlen und Inspiration eine konkrete Form verleiht.",
      },
    ],

    housesSection: {
      title:
        "Das Sextil in den astrologischen Häusern",

      introduction:
        "Die beteiligten Häuser zeigen die Lebensbereiche, in denen Möglichkeiten, günstige Kontakte und zu entwickelnde Talente am deutlichsten sichtbar werden.",
    },

    houses: [
      {
        title:
          "Persönliche Häuser",

        text:
          "Die Häuser 1 bis 3 können Möglichkeiten rund um Identität, Ressourcen, Lernen und Kommunikation bieten.",
      },

      {
        title:
          "Intime Häuser",

        text:
          "Die Häuser 4 bis 6 können Familie, Kreativität, Arbeit, Gewohnheiten und Alltagsorganisation unterstützen.",
      },

      {
        title:
          "Beziehungshäuser",

        text:
          "Die Häuser 7 bis 9 können Partnerschaften, Begegnungen, Transformation und Entdeckung fördern.",
      },

      {
        title:
          "Kollektive Häuser",

        text:
          "Die Häuser 10 bis 12 können Möglichkeiten rund um Beruf, Projekte, Netzwerke und Innenleben bieten.",
      },
    ],

    comparisonSection: {
      kicker:
        "Trigon oder Sextil",

      title:
        "Was ist der Unterschied zwischen einem Sextil und einem Trigon?",

      cards: [
        {
          symbol:
            "△",

          title:
            "Das Trigon",

          paragraphs: [
            "Das Trigon steht für natürliche Leichtigkeit. Die Energie fließt fast spontan zwischen den beiden Planeten.",

            "Sein Talent kann kraftvoll sein, wird jedoch manchmal als selbstverständlich betrachtet oder nicht ausreichend entwickelt.",
          ],
        },

        {
          symbol:
            "⚹",

          title:
            "Das Sextil",

          paragraphs: [
            "Das Sextil steht für eine günstige Möglichkeit, die gewöhnlich Initiative oder bewusste Beteiligung erfordert.",

            "Sein Potenzial entwickelt sich durch Neugier, Lernen, Entscheidungen und Erfahrungen.",
          ],
        },
      ],
    },

    patterns: {
      kicker:
        "Eine Figur der Möglichkeiten",

      title:
        "Das Sextil in astrologischen Figuren",

      symbol:
        "⚹",

      subtitle:
        "Eine Verbindung, die eine größere Konfiguration unterstützen kann",

      paragraphs: [
        "Mehrere Sextile können komplexere astrologische Strukturen bilden, wenn sie mit Trigonen, Oppositionen oder anderen Aspekten verbunden sind.",

        "In einer Drachenfigur können Sextile beispielsweise helfen, die Talente eines großen Trigons in konkretere Möglichkeiten umzuwandeln.",

        "Das Sextil wirkt dann als Brücke zwischen natürlichem Potenzial und bewusstem Handeln.",
      ],
    },

    transits: {
      title:
        "Das Sextil in astrologischen Transiten",

      paragraphs: [
        "Ein Sextil kann auch entstehen, wenn ein laufender Planet einen Winkel von 60 Grad zu einem Planeten des Geburtshoroskops bildet.",

        "Dieser Transit kann einer günstigen Phase zum Lernen, Kommunizieren, Kennenlernen einer Person, Entwickeln einer Idee oder Nutzen einer neuen Möglichkeit entsprechen.",

        "Das Sextil erzwingt gewöhnlich kein Ereignis. Es öffnet vielmehr eine Tür, die erkannt und durchschritten werden muss.",
      ],
    },

    cta: {
      kicker:
        "Entdecken Sie Ihr Geburtshoroskop",

      title:
        "Haben Sie ein wichtiges Sextil in Ihrem Geburtshoroskop?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Planeten, Häuser und wichtigsten Aspekte Ihrer Geburt.",

      button:
        "Mein Geburtshoroskop ansehen",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zum Sextil in der Astrologie",

      items: [
        {
          question:
            "Was ist ein Sextil in der Astrologie?",

          answer:
            "Ein Sextil entsteht, wenn zwei Planeten durch einen Winkel von ungefähr 60 Grad getrennt sind. Es steht für eine günstige Möglichkeit zur Zusammenarbeit zwischen den Funktionen beider Planeten.",
        },

        {
          question:
            "Ist das Sextil ein positiver Aspekt?",

          answer:
            "Ja. Das Sextil gilt gewöhnlich als harmonisch. Es bietet Möglichkeiten, die jedoch häufig Initiative oder eine bewusste Entscheidung benötigen, um sich zu entwickeln.",
        },

        {
          question:
            "Welchen Orbis verwendet man für ein Sextil?",

          answer:
            "Der Orbis des Sextils ist gewöhnlich enger als der kraftvollerer Hauptaspekte. Häufig wird es bis zu ungefähr 5 Grad berücksichtigt.",
        },

        {
          question:
            "Was ist der Unterschied zwischen einem Sextil und einem Trigon?",

          answer:
            "Das Trigon steht für eine natürliche Leichtigkeit, die fast spontan funktioniert. Das Sextil zeigt dagegen eine günstige Möglichkeit, die stärker wird, wenn sie aktiviert wird.",
        },

        {
          question:
            "Warum verbindet das Sextil kompatible Elemente?",

          answer:
            "Zeichen, die 60 Grad voneinander entfernt sind, gehören gewöhnlich zu sich ergänzenden Elementen wie Feuer und Luft oder Erde und Wasser.",
        },

        {
          question:
            "Kann ein Sextil ungenutzt bleiben?",

          answer:
            "Ja. Da es keine starke Spannung erzeugt, kann sein Potenzial unauffällig bleiben, wenn die Person nicht die Initiative ergreift, es zu entwickeln.",
        },

        {
          question:
            "Wie erkenne ich ein Sextil in meinem Geburtshoroskop?",

          answer:
            "Sie müssen Ihr Geburtshoroskop erstellen und die Planetenpositionen vergleichen. Zwei Planeten, die ungefähr 60 Grad voneinander entfernt sind, können ein Sextil bilden.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation zwischen astrologischen Aspekten",

      previous:
        "Vorheriger Aspekt: Trigon",

      next:
        "Nächster Aspekt: Quinkunx",
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Il sestile in astrologia: significato nel tema natale | Luna Astralis",

      description:
        "Scopri il significato del sestile in astrologia, il suo angolo di 60°, le opportunità favorevoli e la sua interpretazione tra i pianeti del tema natale.",

      ogTitle:
        "Il sestile in astrologia: possibilità, cooperazione e potenziale",

      ogDescription:
        "Comprendi come il sestile colleghi favorevolmente due pianeti e riveli possibilità che devono essere attivate consapevolmente.",

      twitterTitle:
        "Il sestile in astrologia | Luna Astralis",

      twitterDescription:
        "Angolo di 60°, possibilità, talenti da sviluppare e opportunità favorevoli nel tema natale.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Il sestile in astrologia: significato nel tema natale",

      description:
        "Guida completa per comprendere il sestile astrologico, il suo angolo di 60 gradi, il suo orbe e la sua interpretazione tra i pianeti.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspetti",

      current:
        "Sestile",

      ariaLabel:
        "Percorso di navigazione",
    },

    hero: {
      badge:
        "✦ Aspetto astrologico maggiore",

      symbol:
        "⚹",

      title:
        "Il sestile in astrologia",

      lead:
        "Il sestile si forma quando due pianeti sono separati da un angolo di 60 gradi. Rivela una possibilità di cooperazione, un talento da sviluppare o un’opportunità favorevole che richiede una partecipazione consapevole.",

      data: {
        angleLabel:
          "Angolo",

        angleValue:
          "60°",

        dynamicLabel:
          "Dinamica",

        dynamicValue:
          "Possibilità",

        functionLabel:
          "Funzione",

        functionValue:
          "Attivazione",
      },

      createChart:
        "Creare gratuitamente il mio tema natale",

      understand:
        "Comprendere il sestile",
    },

    meaning: {
      kicker:
        "Un’opportunità da cogliere",

      title:
        "Che cosa significa un sestile in astrologia?",

      paragraphs: [
        "Il sestile è un aspetto che si forma quando due pianeti sono separati da un angolo di circa 60 gradi nel cerchio zodiacale.",

        "Le funzioni rappresentate dai due pianeti possono collaborare favorevolmente. Questa armonia, tuttavia, non agisce sempre in modo automatico.",

        "Il sestile rappresenta spesso una possibilità, un talento o una risorsa che deve essere attivata attraverso una decisione, uno sforzo o un’iniziativa personale.",
      ],
    },

    functioning: {
      title:
        "Come funziona il sestile?",

      cards: [
        {
          number:
            "01",

          title:
            "Due pianeti possono cooperare",

          text:
            "Le loro funzioni sono compatibili e possono sostenersi senza creare una forte tensione.",
        },

        {
          number:
            "02",

          title:
            "Compare una possibilità",

          text:
            "L’aspetto mostra un talento, un’apertura o un’opportunità che può essere utilizzata.",
        },

        {
          number:
            "03",

          title:
            "È necessaria un’iniziativa",

          text:
            "Il potenziale diventa più visibile quando la persona decide di agire o di sviluppare questa risorsa.",
        },

        {
          number:
            "04",

          title:
            "Una competenza si rafforza",

          text:
            "Con la pratica, il sestile può diventare un talento solido e un sostegno importante nel tema natale.",
        },
      ],
    },

    benefits: {
      kicker:
        "Un aspetto favorevole ma attivo",

      title:
        "Il sestile è sempre benefico?",

      introduction:
        "Il sestile è generalmente classificato tra gli aspetti armonici. Facilita la collaborazione tra i pianeti e può aprire percorsi interessanti.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "I punti di forza del sestile",

          paragraphs: [
            "Il sestile favorisce l’apprendimento, la curiosità, l’adattamento, gli incontri utili e la capacità di riconoscere le possibilità.",

            "Può inoltre facilitare la cooperazione tra due qualità complementari della personalità.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "I limiti del sestile",

          paragraphs: [
            "Poiché non produce una forte pressione, il sestile può rimanere discreto o non essere mai utilizzato pienamente.",

            "La persona può riconoscere un’opportunità senza compiere i passi necessari per trasformarla in un risultato concreto.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Gli elementi da osservare",

      title:
        "Come interpretare un sestile nel tema natale?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificare i due pianeti",

          text:
            "I pianeti mostrano le funzioni che possono collaborare e creare una possibilità favorevole.",
        },

        {
          number:
            "2",

          title:
            "Osservare i segni",

          text:
            "I segni spiegano come si esprimono le due energie e perché possono completarsi.",
        },

        {
          number:
            "3",

          title:
            "Studiare le case",

          text:
            "Le case rivelano gli ambiti della vita in cui possono apparire opportunità e talenti.",
        },

        {
          number:
            "4",

          title:
            "Individuare le opportunità",

          text:
            "Occorre osservare le situazioni in cui la persona riceve un aiuto, un’apertura o una possibilità di progresso.",
        },

        {
          number:
            "5",

          title:
            "Verificare l’iniziativa personale",

          text:
            "Il sestile produce i risultati migliori quando la persona agisce consapevolmente e trasforma il potenziale in esperienza.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe del sestile",

      introduction:
        "L’orbe rappresenta la differenza tra l’angolo esatto di 60 gradi e la posizione reale dei pianeti. Poiché il sestile è generalmente meno potente di una congiunzione o di un’opposizione, il suo orbe è spesso più stretto.",

      cards: [
        {
          value:
            "Da 0° a 1°",

          title:
            "Sestile molto stretto",

          text:
            "La possibilità di cooperazione è forte e può diventare un talento importante quando viene utilizzata.",
        },

        {
          value:
            "Da 2° a 3°",

          title:
            "Sestile forte",

          text:
            "La relazione tra i due pianeti rimane chiaramente visibile e può sostenere diversi ambiti della vita.",
        },

        {
          value:
            "Da 4° a 5°",

          title:
            "Sestile più ampio",

          text:
            "L’aspetto può essere ancora significativo, soprattutto se coinvolge il Sole, la Luna o un pianeta dominante.",
        },
      ],

      conclusion:
        "Più il sestile è esatto, più è facile riconoscere la sua cooperazione. La sua vera importanza dipende tuttavia dal ruolo dei pianeti nell’insieme del tema natale.",
    },

    examplesSection: {
      kicker:
        "Esempi di interpretazione",

      title:
        "I principali sestili tra i pianeti",

      introduction:
        "Ogni sestile si esprime in base ai segni, alle case e agli altri aspetti del tema. Gli esempi seguenti presentano la loro dinamica generale.",
    },

    examples: [
      {
        planets:
          "Sole in sestile alla Luna",

        symbol:
          "☀ ⚹ ☽",

        keywords:
          "Identità • emozioni • cooperazione",

        text:
          "Il Sole in sestile alla Luna favorisce una cooperazione naturale tra l’identità cosciente e i bisogni emotivi. La persona può sviluppare una maggiore coerenza interiore attraverso le proprie scelte.",
      },

      {
        planets:
          "Mercurio in sestile a Venere",

        symbol:
          "☿ ⚹ ♀",

        keywords:
          "Comunicazione • fascino • diplomazia",

        text:
          "Mercurio in sestile a Venere può facilitare un’espressione piacevole, la diplomazia e la creatività verbale. La persona possiede spesso un talento relazionale che si rafforza con la pratica.",
      },

      {
        planets:
          "Venere in sestile a Marte",

        symbol:
          "♀ ⚹ ♂",

        keywords:
          "Relazioni • desiderio • attrazione",

        text:
          "Venere in sestile a Marte favorisce la cooperazione tra affetto e desiderio. Questo aspetto può sostenere il fascino, la creatività e la capacità di esprimere i sentimenti.",
      },

      {
        planets:
          "Marte in sestile a Giove",

        symbol:
          "♂ ⚹ ♃",

        keywords:
          "Azione • fiducia • espansione",

        text:
          "Marte in sestile a Giove può portare entusiasmo, iniziativa e fiducia nell’azione. Le possibilità aumentano quando la persona osa agire.",
      },

      {
        planets:
          "Saturno in sestile a Urano",

        symbol:
          "♄ ⚹ ♅",

        keywords:
          "Struttura • innovazione • adattamento",

        text:
          "Saturno in sestile a Urano permette di combinare stabilità e cambiamento. La persona può modernizzare una struttura senza perdere il senso della responsabilità.",
      },

      {
        planets:
          "Luna in sestile a Nettuno",

        symbol:
          "☽ ⚹ ♆",

        keywords:
          "Emozioni • intuizione • immaginazione",

        text:
          "La Luna in sestile a Nettuno può favorire empatia, intuizione e sensibilità artistica. Queste qualità si sviluppano quando vengono espresse concretamente.",
      },
    ],

    elementsSection: {
      title:
        "Il sestile e gli elementi compatibili",

      introduction:
        "Il sestile collega generalmente segni appartenenti a elementi diversi ma compatibili. Questa complementarità favorisce lo scambio e la cooperazione.",
    },

    elements: [
      {
        symbols: [
          "🔥",
          "◌",
        ],

        title:
          "Fuoco e Aria",

        keywords:
          "Ispirazione • idee • movimento",

        text:
          "L’Aria stimola le idee e la riflessione, mentre il Fuoco porta entusiasmo e coraggio per passare all’azione.",
      },

      {
        symbols: [
          "🌿",
          "💧",
        ],

        title:
          "Terra e Acqua",

        keywords:
          "Sensibilità • stabilità • creazione",

        text:
          "L’Acqua porta intuizione e profondità emotiva, mentre la Terra dà una forma concreta alle emozioni e all’ispirazione.",
      },
    ],

    housesSection: {
      title:
        "Il sestile nelle case astrologiche",

      introduction:
        "Le case coinvolte indicano gli ambiti della vita in cui le opportunità, i contatti favorevoli e i talenti da sviluppare sono più visibili.",
    },

    houses: [
      {
        title:
          "Case personali",

        text:
          "Le case da 1 a 3 possono offrire opportunità legate all’identità, alle risorse, all’apprendimento e alla comunicazione.",
      },

      {
        title:
          "Case intime",

        text:
          "Le case da 4 a 6 possono sostenere la famiglia, la creatività, il lavoro, le abitudini e l’organizzazione quotidiana.",
      },

      {
        title:
          "Case relazionali",

        text:
          "Le case da 7 a 9 possono favorire collaborazioni, incontri, trasformazioni e scoperte.",
      },

      {
        title:
          "Case collettive",

        text:
          "Le case da 10 a 12 possono offrire possibilità legate alla carriera, ai progetti, alle reti e alla vita interiore.",
      },
    ],

    comparisonSection: {
      kicker:
        "Trigono o sestile",

      title:
        "Qual è la differenza tra un sestile e un trigono?",

      cards: [
        {
          symbol:
            "△",

          title:
            "Il trigono",

          paragraphs: [
            "Il trigono rappresenta una facilità naturale. L’energia circola quasi spontaneamente tra i due pianeti.",

            "Il suo talento può essere potente, ma rischia talvolta di essere dato per scontato o di non essere sviluppato a sufficienza.",
          ],
        },

        {
          symbol:
            "⚹",

          title:
            "Il sestile",

          paragraphs: [
            "Il sestile rappresenta una possibilità favorevole che richiede generalmente iniziativa o partecipazione consapevole.",

            "Il suo potenziale si sviluppa attraverso curiosità, apprendimento, decisioni ed esperienze.",
          ],
        },
      ],
    },

    patterns: {
      kicker:
        "Una configurazione di possibilità",

      title:
        "Il sestile nelle configurazioni astrologiche",

      symbol:
        "⚹",

      subtitle:
        "Un collegamento che può sostenere una configurazione più ampia",

      paragraphs: [
        "Più sestili possono formare strutture astrologiche più complesse quando sono collegati a trigoni, opposizioni o altri aspetti.",

        "In una configurazione ad aquilone, per esempio, i sestili possono aiutare a trasformare i talenti di un grande trigono in possibilità più concrete.",

        "Il sestile agisce allora come un ponte tra un potenziale naturale e un’azione consapevole.",
      ],
    },

    transits: {
      title:
        "Il sestile nei transiti astrologici",

      paragraphs: [
        "Un sestile può formarsi anche quando un pianeta in movimento crea un angolo di 60 gradi con un pianeta del tema natale.",

        "Questo transito può corrispondere a un periodo favorevole per imparare, comunicare, incontrare una persona, sviluppare un’idea o cogliere una nuova possibilità.",

        "Il sestile generalmente non impone un evento. Apre piuttosto una porta che deve essere riconosciuta e attraversata.",
      ],
    },

    cta: {
      kicker:
        "Scopri il tuo tema natale",

      title:
        "Hai un sestile importante nel tuo tema natale?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire i pianeti, le case e i principali aspetti presenti alla nascita.",

      button:
        "Vedere il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sul sestile in astrologia",

      items: [
        {
          question:
            "Che cos’è un sestile in astrologia?",

          answer:
            "Un sestile si forma quando due pianeti sono separati da un angolo di circa 60 gradi. Rappresenta una possibilità favorevole di cooperazione tra le funzioni dei due pianeti.",
        },

        {
          question:
            "Il sestile è un aspetto positivo?",

          answer:
            "Sì. Il sestile è generalmente considerato armonico. Offre possibilità che spesso richiedono iniziativa o una scelta consapevole per svilupparsi.",
        },

        {
          question:
            "Quale orbe si utilizza per un sestile?",

          answer:
            "L’orbe del sestile è generalmente più stretto rispetto a quello degli aspetti maggiori più potenti. Spesso viene interpretato fino a circa 5 gradi.",
        },

        {
          question:
            "Qual è la differenza tra un sestile e un trigono?",

          answer:
            "Il trigono rappresenta una facilità naturale che funziona quasi spontaneamente. Il sestile indica invece una possibilità favorevole che si rafforza quando viene attivata.",
        },

        {
          question:
            "Perché il sestile collega elementi compatibili?",

          answer:
            "I segni separati da 60 gradi appartengono generalmente a elementi complementari, come Fuoco e Aria oppure Terra e Acqua.",
        },

        {
          question:
            "Un sestile può rimanere inutilizzato?",

          answer:
            "Sì. Poiché non crea una forte tensione, il suo potenziale può rimanere discreto se la persona non prende l’iniziativa di svilupparlo.",
        },

        {
          question:
            "Come sapere se ho un sestile nel tema natale?",

          answer:
            "Devi generare il tuo tema natale e confrontare le posizioni dei pianeti. Due pianeti separati da circa 60 gradi possono formare un sestile.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigazione tra gli aspetti astrologici",

      previous:
        "Aspetto precedente: trigono",

      next:
        "Aspetto successivo: quinconce",
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },
    pt: {
    metadata: {
      title:
        "O sextil na astrologia: significado no mapa natal | Luna Astralis",

      description:
        "Descubra o significado do sextil na astrologia, seu ângulo de 60°, as oportunidades favoráveis e sua interpretação entre os planetas do mapa natal.",

      ogTitle:
        "O sextil na astrologia: possibilidades, cooperação e potencial",

      ogDescription:
        "Compreenda como o sextil conecta favoravelmente dois planetas e revela possibilidades que precisam ser ativadas conscientemente.",

      twitterTitle:
        "O sextil na astrologia | Luna Astralis",

      twitterDescription:
        "Ângulo de 60°, possibilidades, talentos a desenvolver e oportunidades favoráveis no mapa natal.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "O sextil na astrologia: significado no mapa natal",

      description:
        "Guia completo para compreender o sextil astrológico, seu ângulo de 60 graus, seu orbe e sua interpretação entre os planetas.",
    },

    breadcrumb: {
      home:
        "Início",

      aspects:
        "Aspectos",

      current:
        "Sextil",

      ariaLabel:
        "Navegação estrutural",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico maior",

      symbol:
        "⚹",

      title:
        "O sextil na astrologia",

      lead:
        "O sextil se forma quando dois planetas estão separados por um ângulo de 60 graus. Ele revela uma possibilidade de cooperação, um talento a desenvolver ou uma oportunidade favorável que exige participação consciente.",

      data: {
        angleLabel:
          "Ângulo",

        angleValue:
          "60°",

        dynamicLabel:
          "Dinâmica",

        dynamicValue:
          "Possibilidade",

        functionLabel:
          "Função",

        functionValue:
          "Ativação",
      },

      createChart:
        "Criar meu mapa astral grátis",

      understand:
        "Compreender o sextil",
    },

    meaning: {
      kicker:
        "Uma oportunidade a aproveitar",

      title:
        "O que significa um sextil na astrologia?",

      paragraphs: [
        "O sextil é um aspecto que se forma quando dois planetas estão separados por um ângulo de aproximadamente 60 graus no círculo zodiacal.",

        "As funções representadas pelos dois planetas podem colaborar de maneira favorável. No entanto, essa harmonia nem sempre funciona automaticamente.",

        "O sextil costuma representar uma possibilidade, um talento ou um recurso que precisa ser ativado por meio de uma decisão, de um esforço ou de uma iniciativa pessoal.",
      ],
    },

    functioning: {
      title:
        "Como funciona o sextil?",

      cards: [
        {
          number:
            "01",

          title:
            "Dois planetas podem cooperar",

          text:
            "Suas funções são compatíveis e podem se apoiar sem criar uma tensão intensa.",
        },

        {
          number:
            "02",

          title:
            "Surge uma possibilidade",

          text:
            "O aspecto mostra um talento, uma abertura ou uma oportunidade que pode ser utilizada.",
        },

        {
          number:
            "03",

          title:
            "Uma iniciativa é necessária",

          text:
            "O potencial se torna mais visível quando a pessoa decide agir ou desenvolver esse recurso.",
        },

        {
          number:
            "04",

          title:
            "Uma habilidade se fortalece",

          text:
            "Com a prática, o sextil pode se tornar um talento sólido e um apoio importante no mapa natal.",
        },
      ],
    },

    benefits: {
      kicker:
        "Um aspecto favorável, mas ativo",

      title:
        "O sextil é sempre benéfico?",

      introduction:
        "O sextil costuma ser classificado entre os aspectos harmoniosos. Ele facilita a colaboração entre os planetas e pode abrir caminhos interessantes.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "As forças do sextil",

          paragraphs: [
            "O sextil favorece o aprendizado, a curiosidade, a adaptação, os encontros úteis e a capacidade de reconhecer possibilidades.",

            "Ele também pode facilitar a cooperação entre duas qualidades complementares da personalidade.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Os limites do sextil",

          paragraphs: [
            "Como não produz uma pressão intensa, o sextil pode permanecer discreto ou nunca ser plenamente utilizado.",

            "A pessoa pode reconhecer uma oportunidade sem tomar as medidas necessárias para transformá-la em um resultado concreto.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Os elementos que devem ser observados",

      title:
        "Como interpretar um sextil no mapa natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar os dois planetas",

          text:
            "Os planetas mostram as funções que podem colaborar e criar uma possibilidade favorável.",
        },

        {
          number:
            "2",

          title:
            "Observar os signos",

          text:
            "Os signos explicam como as duas energias se expressam e por que podem se complementar.",
        },

        {
          number:
            "3",

          title:
            "Estudar as casas",

          text:
            "As casas revelam as áreas da vida em que oportunidades e talentos podem surgir.",
        },

        {
          number:
            "4",

          title:
            "Identificar as oportunidades",

          text:
            "É importante observar as situações em que a pessoa recebe ajuda, uma abertura ou uma possibilidade de progresso.",
        },

        {
          number:
            "5",

          title:
            "Verificar a iniciativa pessoal",

          text:
            "O sextil produz seus melhores resultados quando a pessoa age conscientemente e transforma o potencial em experiência.",
        },
      ],
    },

    orb: {
      title:
        "O orbe do sextil",

      introduction:
        "O orbe representa a diferença entre o ângulo exato de 60 graus e a posição real dos planetas. Como o sextil costuma ser menos poderoso do que uma conjunção ou uma oposição, seu orbe geralmente é mais estreito.",

      cards: [
        {
          value:
            "0° a 1°",

          title:
            "Sextil muito exato",

          text:
            "A possibilidade de cooperação é forte e pode se tornar um talento importante quando é utilizada.",
        },

        {
          value:
            "2° a 3°",

          title:
            "Sextil forte",

          text:
            "A relação entre os dois planetas permanece claramente visível e pode apoiar várias áreas da vida.",
        },

        {
          value:
            "4° a 5°",

          title:
            "Sextil mais amplo",

          text:
            "O aspecto ainda pode ser significativo, principalmente quando envolve o Sol, a Lua ou um planeta dominante.",
        },
      ],

      conclusion:
        "Quanto mais exato o sextil, mais fácil é reconhecer sua cooperação. No entanto, sua verdadeira importância depende do papel dos planetas no conjunto do mapa natal.",
    },

    examplesSection: {
      kicker:
        "Exemplos de interpretação",

      title:
        "Os principais sextis entre os planetas",

      introduction:
        "Cada sextil se expressa de acordo com os signos, as casas e os demais aspectos do mapa. Os exemplos seguintes apresentam sua dinâmica geral.",
    },

    examples: [
      {
        planets:
          "Sol em sextil com a Lua",

        symbol:
          "☀ ⚹ ☽",

        keywords:
          "Identidade • emoções • cooperação",

        text:
          "O Sol em sextil com a Lua favorece uma cooperação natural entre a identidade consciente e as necessidades emocionais. A pessoa pode desenvolver maior coerência interior por meio das próprias escolhas.",
      },

      {
        planets:
          "Mercúrio em sextil com Vênus",

        symbol:
          "☿ ⚹ ♀",

        keywords:
          "Comunicação • charme • diplomacia",

        text:
          "Mercúrio em sextil com Vênus pode facilitar uma expressão agradável, a diplomacia e a criatividade verbal. A pessoa costuma possuir um talento relacional que se fortalece com a prática.",
      },

      {
        planets:
          "Vênus em sextil com Marte",

        symbol:
          "♀ ⚹ ♂",

        keywords:
          "Relacionamentos • desejo • atração",

        text:
          "Vênus em sextil com Marte favorece a cooperação entre afeto e desejo. Esse aspecto pode apoiar o charme, a criatividade e a capacidade de expressar sentimentos.",
      },

      {
        planets:
          "Marte em sextil com Júpiter",

        symbol:
          "♂ ⚹ ♃",

        keywords:
          "Ação • confiança • expansão",

        text:
          "Marte em sextil com Júpiter pode trazer entusiasmo, iniciativa e confiança na ação. As possibilidades aumentam quando a pessoa se permite agir.",
      },

      {
        planets:
          "Saturno em sextil com Urano",

        symbol:
          "♄ ⚹ ♅",

        keywords:
          "Estrutura • inovação • adaptação",

        text:
          "Saturno em sextil com Urano permite combinar estabilidade e mudança. A pessoa pode modernizar uma estrutura sem perder o senso de responsabilidade.",
      },

      {
        planets:
          "Lua em sextil com Netuno",

        symbol:
          "☽ ⚹ ♆",

        keywords:
          "Emoções • intuição • imaginação",

        text:
          "A Lua em sextil com Netuno pode favorecer empatia, intuição e sensibilidade artística. Essas qualidades se desenvolvem quando são expressas de maneira concreta.",
      },
    ],

    elementsSection: {
      title:
        "O sextil e os elementos compatíveis",

      introduction:
        "O sextil geralmente conecta signos pertencentes a elementos diferentes, mas compatíveis. Essa complementaridade favorece a troca e a cooperação.",
    },

    elements: [
      {
        symbols: [
          "🔥",
          "◌",
        ],

        title:
          "Fogo e Ar",

        keywords:
          "Inspiração • ideias • movimento",

        text:
          "O Ar estimula as ideias e a reflexão, enquanto o Fogo traz entusiasmo e coragem para agir.",
      },

      {
        symbols: [
          "🌿",
          "💧",
        ],

        title:
          "Terra e Água",

        keywords:
          "Sensibilidade • estabilidade • criação",

        text:
          "A Água traz intuição e profundidade emocional, enquanto a Terra dá forma concreta às emoções e à inspiração.",
      },
    ],

    housesSection: {
      title:
        "O sextil nas casas astrológicas",

      introduction:
        "As casas envolvidas indicam as áreas da vida em que as oportunidades, os contatos favoráveis e os talentos a desenvolver se tornam mais visíveis.",
    },

    houses: [
      {
        title:
          "Casas pessoais",

        text:
          "As casas 1 a 3 podem oferecer oportunidades relacionadas à identidade, aos recursos, ao aprendizado e à comunicação.",
      },

      {
        title:
          "Casas íntimas",

        text:
          "As casas 4 a 6 podem apoiar a família, a criatividade, o trabalho, os hábitos e a organização cotidiana.",
      },

      {
        title:
          "Casas relacionais",

        text:
          "As casas 7 a 9 podem favorecer parcerias, encontros, transformações e descobertas.",
      },

      {
        title:
          "Casas coletivas",

        text:
          "As casas 10 a 12 podem oferecer possibilidades relacionadas à carreira, aos projetos, às redes e à vida interior.",
      },
    ],

    comparisonSection: {
      kicker:
        "Trígono ou sextil",

      title:
        "Qual é a diferença entre um sextil e um trígono?",

      cards: [
        {
          symbol:
            "△",

          title:
            "O trígono",

          paragraphs: [
            "O trígono representa uma facilidade natural. A energia circula quase espontaneamente entre os dois planetas.",

            "Seu talento pode ser poderoso, mas às vezes corre o risco de ser considerado garantido ou de não ser suficientemente desenvolvido.",
          ],
        },

        {
          symbol:
            "⚹",

          title:
            "O sextil",

          paragraphs: [
            "O sextil representa uma possibilidade favorável que geralmente exige iniciativa ou participação consciente.",

            "Seu potencial se desenvolve por meio da curiosidade, do aprendizado, das decisões e das experiências.",
          ],
        },
      ],
    },

    patterns: {
      kicker:
        "Uma configuração de possibilidades",

      title:
        "O sextil nas configurações astrológicas",

      symbol:
        "⚹",

      subtitle:
        "Uma conexão que pode apoiar uma configuração maior",

      paragraphs: [
        "Vários sextis podem formar estruturas astrológicas mais complexas quando estão conectados a trígonos, oposições ou outros aspectos.",

        "Em uma configuração de pipa, por exemplo, os sextis podem ajudar a transformar os talentos de um grande trígono em possibilidades mais concretas.",

        "O sextil atua então como uma ponte entre um potencial natural e uma ação consciente.",
      ],
    },

    transits: {
      title:
        "O sextil nos trânsitos astrológicos",

      paragraphs: [
        "Um sextil também pode se formar quando um planeta em movimento cria um ângulo de 60 graus com um planeta do mapa natal.",

        "Esse trânsito pode corresponder a um período favorável para aprender, comunicar, conhecer uma pessoa, desenvolver uma ideia ou aproveitar uma nova possibilidade.",

        "O sextil geralmente não impõe um acontecimento. Em vez disso, ele abre uma porta que precisa ser reconhecida e atravessada.",
      ],
    },

    cta: {
      kicker:
        "Descubra seu mapa natal",

      title:
        "Você possui um sextil importante no seu mapa natal?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir seus planetas, suas casas e os principais aspectos presentes no nascimento.",

      button:
        "Ver meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre o sextil na astrologia",

      items: [
        {
          question:
            "O que é um sextil na astrologia?",

          answer:
            "Um sextil se forma quando dois planetas estão separados por um ângulo de aproximadamente 60 graus. Ele representa uma possibilidade favorável de cooperação entre as funções dos dois planetas.",
        },

        {
          question:
            "O sextil é um aspecto positivo?",

          answer:
            "Sim. O sextil costuma ser considerado harmonioso. Ele oferece possibilidades, mas elas frequentemente exigem iniciativa ou uma escolha consciente para se desenvolver.",
        },

        {
          question:
            "Qual orbe deve ser usado para um sextil?",

          answer:
            "O orbe do sextil geralmente é mais estreito do que o dos aspectos maiores mais poderosos. Ele costuma ser interpretado até aproximadamente 5 graus.",
        },

        {
          question:
            "Qual é a diferença entre um sextil e um trígono?",

          answer:
            "O trígono representa uma facilidade natural que funciona quase espontaneamente. O sextil indica uma possibilidade favorável que se fortalece quando é ativada.",
        },

        {
          question:
            "Por que o sextil conecta elementos compatíveis?",

          answer:
            "Os signos separados por 60 graus geralmente pertencem a elementos complementares, como Fogo e Ar ou Terra e Água.",
        },

        {
          question:
            "Um sextil pode permanecer sem ser utilizado?",

          answer:
            "Sim. Como não cria uma tensão intensa, seu potencial pode permanecer discreto se a pessoa não tomar a iniciativa de desenvolvê-lo.",
        },

        {
          question:
            "Como saber se tenho um sextil no mapa natal?",

          answer:
            "Você deve gerar seu mapa natal e comparar as posições dos planetas. Dois planetas separados por aproximadamente 60 graus podem formar um sextil.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegação entre os aspectos astrológicos",

      previous:
        "Aspecto anterior: trígono",

      next:
        "Aspecto seguinte: quincúncio",
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
