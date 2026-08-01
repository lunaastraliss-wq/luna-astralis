// i18n/pages/astrologie/carre.ts

import type {
  Locale,
} from "@/i18n/config";

export type SquareExample = {
  planets: string;
  symbol: string;
  keywords: string;
  text: string;
};

export type SquareReadingStep = {
  number: string;
  title: string;
  text: string;
};

export type SquarePolarityCard = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type SquareMethodItem = {
  number: string;
  title: string;
  text: string;
};

export type SquareOrbCard = {
  value: string;
  title: string;
  text: string;
};

export type SquareModeCard = {
  label: string;
  signs: string;
  text: string;
};

export type SquareHouseCard = {
  title: string;
  text: string;
};

export type SquareFaqItem = {
  question: string;
  answer: string;
};

export type SquarePageText = {
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
    ariaLabel: string;
    home: string;
    aspects: string;
    current: string;
  };

  hero: {
    badge: string;
    title: string;
    lead: string;
    angleLabel: string;
    angleValue: string;
    dynamicLabel: string;
    dynamicValue: string;
    functionLabel: string;
    functionValue: string;
    createChart: string;
    understandSquare: string;
  };

  meaning: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  functioning: {
    title: string;
    steps: SquareReadingStep[];
  };

  difficulty: {
    kicker: string;
    title: string;
    introduction: string;
    cards: SquarePolarityCard[];
  };

  interpretation: {
    kicker: string;
    title: string;
    methods: SquareMethodItem[];
  };

  orb: {
    title: string;
    introduction: string;
    cards: SquareOrbCard[];
    conclusion: string;
  };

  examplesSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  examples: SquareExample[];

  signsSection: {
    title: string;
    introduction: string;
    modes: SquareModeCard[];
  };

  housesSection: {
    title: string;
    introduction: string;
    houses: SquareHouseCard[];
  };

  grandSquare: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
  };

  tSquare: {
    kicker: string;
    title: string;
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
    items: SquareFaqItem[];
  };

  navigation: {
    ariaLabel: string;
    previous: string;
    next: string;
  };

  disclaimer: string;
};

export const CARRE_TRANSLATIONS:
  Record<
    Locale,
    SquarePageText
  > = {
  fr: {
    metadata: {
      title:
        "Le carré en astrologie : signification dans le thème natal | Luna Astralis",

      description:
        "Découvrez la signification du carré en astrologie, son angle de 90°, ses tensions entre les planètes et son interprétation dans un thème natal.",

      ogTitle:
        "Le carré en astrologie : tension, action et dépassement",

      ogDescription:
        "Comprenez comment le carré crée une tension entre deux planètes et pousse à agir, évoluer et développer de nouvelles forces.",

      twitterTitle:
        "Le carré en astrologie | Luna Astralis",

      twitterDescription:
        "Angle de 90°, tensions intérieures, défis et potentiel d’évolution dans le thème natal.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le carré en astrologie : signification dans le thème natal",

      description:
        "Guide complet pour comprendre le carré astrologique, son angle de 90 degrés, son orbe et son interprétation entre les planètes.",
    },

    breadcrumb: {
      ariaLabel:
        "Fil d’Ariane",

      home:
        "Accueil",

      aspects:
        "Aspects",

      current:
        "Carré",
    },

    hero: {
      badge:
        "✦ Aspect astrologique majeur",

      title:
        "Le carré en astrologie",

      lead:
        "Le carré se forme lorsque deux planètes sont séparées par un angle de 90 degrés. Il crée une tension dynamique qui pousse à agir, à surmonter les obstacles et à développer de nouvelles forces.",

      angleLabel:
        "Angle",

      angleValue:
        "90°",

      dynamicLabel:
        "Dynamique",

      dynamicValue:
        "Tension",

      functionLabel:
        "Fonction",

      functionValue:
        "Évolution",

      createChart:
        "Créer ma carte du ciel gratuite",

      understandSquare:
        "Comprendre le carré",
    },

    meaning: {
      kicker:
        "Une tension qui pousse à évoluer",

      title:
        "Que signifie un carré en astrologie ?",

      paragraphs: [
        "Le carré est un aspect qui se forme lorsque deux planètes sont séparées par un angle d’environ 90 degrés dans le cercle zodiacal.",

        "Les fonctions représentées par les deux planètes cherchent toutes les deux à s’exprimer, mais elles ne fonctionnent pas naturellement ensemble. Cette friction peut créer des frustrations, des obstacles ou des réactions répétitives.",

        "Le carré est toutefois un aspect profondément actif. Il empêche la personne de rester passive et l’oblige à chercher des solutions, à se dépasser et à développer une plus grande maîtrise d’elle-même.",
      ],
    },

    functioning: {
      title:
        "Comment fonctionne le carré ?",

      steps: [
        {
          number:
            "01",

          title:
            "Deux fonctions se heurtent",

          text:
            "Les planètes expriment des besoins différents qui ne s’accordent pas spontanément.",
        },

        {
          number:
            "02",

          title:
            "Une tension s’accumule",

          text:
            "La friction peut devenir visible dans les réactions, les décisions ou les situations répétitives.",
        },

        {
          number:
            "03",

          title:
            "L’action devient nécessaire",

          text:
            "Le carré demande de modifier une attitude, une habitude ou une manière de répondre aux défis.",
        },

        {
          number:
            "04",

          title:
            "Une force se construit",

          text:
            "Les efforts répétés peuvent développer une compétence, une endurance ou une grande maturité.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Un aspect dynamique",

      title:
        "Le carré est-il un aspect difficile ?",

      introduction:
        "Le carré est généralement classé parmi les aspects dynamiques ou dissonants. Il peut créer une tension intérieure importante, surtout lorsque les planètes concernées représentent des besoins très différents.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "Les défis du carré",

          paragraphs: [
            "Le carré peut produire de la frustration, de l’impatience, des blocages ou l’impression de rencontrer toujours le même type d’obstacle.",

            "La personne peut également compenser excessivement l’une des planètes ou passer d’un extrême à l’autre.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Le potentiel du carré",

          paragraphs: [
            "Le carré apporte une grande quantité d’énergie disponible pour évoluer, entreprendre et apprendre par l’expérience.",

            "Lorsqu’il est mieux maîtrisé, il peut devenir une source de courage, de discipline, de créativité et de persévérance.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Les éléments à observer",

      title:
        "Comment interpréter un carré dans un thème natal ?",

      methods: [
        {
          number:
            "1",

          title:
            "Identifier les deux planètes",

          text:
            "Il faut comprendre les fonctions symboliques de chaque planète et observer pourquoi elles ont de la difficulté à collaborer.",
        },

        {
          number:
            "2",

          title:
            "Observer les signes",

          text:
            "Les signes montrent les attitudes, les besoins et les styles d’expression qui entrent en tension.",
        },

        {
          number:
            "3",

          title:
            "Étudier les maisons",

          text:
            "Les maisons révèlent les domaines de vie dans lesquels les défis du carré se manifestent le plus souvent.",
        },

        {
          number:
            "4",

          title:
            "Repérer les répétitions",

          text:
            "Les carrés apparaissent souvent sous la forme de situations qui se répètent jusqu’à ce qu’une nouvelle réponse soit développée.",
        },

        {
          number:
            "5",

          title:
            "Chercher une action constructive",

          text:
            "Le carré demande généralement une réponse active, concrète et consciente plutôt qu’un simple compromis intérieur.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe du carré",

      introduction:
        "L’orbe représente l’écart entre l’angle exact de 90 degrés et la position réelle des planètes. Selon les méthodes utilisées, un carré peut souvent être interprété jusqu’à environ 7 degrés.",

      cards: [
        {
          value:
            "0° à 2°",

          title:
            "Carré très serré",

          text:
            "La tension est très intense et peut devenir l’un des principaux moteurs d’évolution du thème natal.",
        },

        {
          value:
            "3° à 5°",

          title:
            "Carré fort",

          text:
            "La friction entre les deux planètes demeure clairement perceptible dans la personnalité et les expériences.",
        },

        {
          value:
            "6° à 7°",

          title:
            "Carré plus large",

          text:
            "L’aspect peut encore être significatif, particulièrement lorsque le Soleil ou la Lune est concerné.",
        },
      ],

      conclusion:
        "Un carré très exact est souvent plus visible, mais son importance dépend également du rôle des planètes dans l’ensemble du thème natal.",
    },

    examplesSection: {
      kicker:
        "Exemples d’interprétation",

      title:
        "Les principaux carrés entre les planètes",

      introduction:
        "Chaque carré s’exprime différemment selon les signes, les maisons et les autres aspects du thème. Les exemples suivants présentent leur dynamique générale.",
    },

    examples: [
      {
        planets:
          "Soleil carré Lune",

        symbol:
          "☀ □ ☽",

        keywords:
          "Identité • émotions • conflit intérieur",

        text:
          "Le Soleil carré à la Lune peut créer une tension entre l’identité consciente et les besoins émotionnels. La personne doit apprendre à agir sans ignorer ce qu’elle ressent réellement.",
      },

      {
        planets:
          "Mercure carré Saturne",

        symbol:
          "☿ □ ♄",

        keywords:
          "Pensée • retenue • discipline mentale",

        text:
          "Mercure carré à Saturne peut produire une pensée prudente, exigeante ou critique. Cet aspect peut compliquer l’expression spontanée, mais il favorise aussi la concentration et la rigueur.",
      },

      {
        planets:
          "Vénus carrée Pluton",

        symbol:
          "♀ □ ♇",

        keywords:
          "Relations • intensité • transformation",

        text:
          "Vénus carrée à Pluton peut intensifier les sentiments, l’attachement et les rapports de pouvoir. Elle demande d’apprendre à aimer sans chercher à contrôler ou à posséder.",
      },

      {
        planets:
          "Mars carré Saturne",

        symbol:
          "♂ □ ♄",

        keywords:
          "Action • frustration • endurance",

        text:
          "Mars carré à Saturne peut donner l’impression d’avancer avec le frein serré. La frustration peut être forte, mais cet aspect développe souvent une grande persévérance.",
      },

      {
        planets:
          "Jupiter carré Neptune",

        symbol:
          "♃ □ ♆",

        keywords:
          "Expansion • idéal • discernement",

        text:
          "Jupiter carré à Neptune peut favoriser de grandes aspirations, mais aussi des attentes irréalistes. La personne doit apprendre à unir inspiration et discernement.",
      },

      {
        planets:
          "Lune carrée Uranus",

        symbol:
          "☽ □ ♅",

        keywords:
          "Émotions • liberté • imprévisibilité",

        text:
          "La Lune carrée à Uranus peut rendre les réactions émotionnelles rapides et changeantes. Le besoin de sécurité entre souvent en conflit avec le désir de liberté.",
      },
    ],

    signsSection: {
      title:
        "Le carré dans les signes astrologiques",

      introduction:
        "Les carrés se forment souvent entre des signes appartenant au même mode. Ils partagent une manière semblable d’agir, mais expriment des éléments et des besoins différents.",

      modes: [
        {
          label:
            "Signes cardinaux",

          signs:
            "Bélier, Cancer, Balance, Capricorne",

          text:
            "Les tensions concernent souvent l’initiative, les décisions, les relations, la sécurité et les responsabilités.",
        },

        {
          label:
            "Signes fixes",

          signs:
            "Taureau, Lion, Scorpion, Verseau",

          text:
            "Les défis touchent la stabilité, la volonté, l’attachement, le contrôle et la difficulté à changer de direction.",
        },

        {
          label:
            "Signes mutables",

          signs:
            "Gémeaux, Vierge, Sagittaire, Poissons",

          text:
            "Les tensions se manifestent dans les idées, l’adaptation, les croyances, l’organisation et le besoin de lâcher-prise.",
        },
      ],
    },

    housesSection: {
      title:
        "Le carré dans les maisons astrologiques",

      introduction:
        "Les maisons concernées indiquent les domaines de vie dans lesquels la friction et le besoin d’évolution se manifestent le plus fortement.",

      houses: [
        {
          title:
            "Maisons personnelles",

          text:
            "Les maisons 1 à 3 peuvent mettre l’accent sur l’identité, les ressources, la confiance et la communication.",
        },

        {
          title:
            "Maisons intimes",

          text:
            "Les maisons 4 à 6 peuvent créer des défis liés à la famille, aux émotions, à la créativité, au travail ou à la santé.",
        },

        {
          title:
            "Maisons relationnelles",

          text:
            "Les maisons 7 à 9 peuvent mettre en tension les relations, l’intimité, les croyances et la recherche de sens.",
        },

        {
          title:
            "Maisons collectives",

          text:
            "Les maisons 10 à 12 peuvent concerner la carrière, les projets, la vie sociale, les rêves et la vie intérieure.",
        },
      ],
    },

    grandSquare: {
      kicker:
        "Une structure de tension",

      title:
        "Qu’est-ce qu’un grand carré en astrologie ?",

      subtitle:
        "Quatre planètes reliées par des carrés",

      paragraphs: [
        "Un grand carré est une figure astrologique formée lorsque quatre planètes créent plusieurs carrés et deux oppositions dans le thème natal.",

        "Cette configuration concentre une forte tension dans plusieurs domaines de vie. La personne peut se sentir poussée dans différentes directions et devoir constamment agir pour maintenir un équilibre.",

        "Malgré ses défis, le grand carré peut donner une grande énergie, une forte capacité de résistance et un potentiel important de réalisation.",
      ],
    },

    tSquare: {
      kicker:
        "Une figure d’évolution",

      title:
        "Qu’est-ce qu’un carré en T ?",

      subtitle:
        "Une opposition activée par une troisième planète",

      paragraphs: [
        "Un carré en T se forme lorsqu’une planète est en carré avec les deux planètes d’une opposition.",

        "La planète située au sommet du carré en T concentre une grande partie de la tension. Elle devient souvent un point d’action, de défi et de développement essentiel dans le thème natal.",

        "Cette configuration pousse la personne à agir et à trouver une manière plus constructive d’utiliser son énergie.",
      ],
    },

    transits: {
      title:
        "Le carré dans les transits astrologiques",

      paragraphs: [
        "Un carré peut également se former lorsqu’une planète en mouvement crée un angle de 90 degrés avec une planète de votre thème natal.",

        "Ce transit peut correspondre à une période de pression, de décision, d’effort ou de changement. Il met souvent en évidence une situation qui ne peut plus être ignorée.",

        "Les carrés de Saturne peuvent demander davantage de discipline et de responsabilité, tandis que ceux d’Uranus peuvent pousser à rompre avec une structure devenue trop rigide.",
      ],
    },

    cta: {
      kicker:
        "Découvrez votre thème natal",

      title:
        "Avez-vous un carré important dans votre carte du ciel ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir vos planètes, vos maisons et les principaux aspects de votre naissance.",

      button:
        "Voir ma carte du ciel",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur le carré en astrologie",

      items: [
        {
          question:
            "Qu’est-ce qu’un carré en astrologie ?",

          answer:
            "Un carré se forme lorsque deux planètes sont séparées par un angle d’environ 90 degrés. Il représente une tension dynamique qui pousse la personne à agir, à s’adapter et à développer de nouvelles capacités.",
        },

        {
          question:
            "Le carré est-il toujours négatif ?",

          answer:
            "Non. Le carré peut créer de la frustration ou des obstacles, mais il apporte aussi de l’énergie, de la motivation et un fort potentiel de dépassement.",
        },

        {
          question:
            "Quel orbe utiliser pour un carré ?",

          answer:
            "L’orbe varie selon les méthodes astrologiques. Un carré est souvent interprété jusqu’à environ 7 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est impliqué.",
        },

        {
          question:
            "Pourquoi le carré pousse-t-il à agir ?",

          answer:
            "Les fonctions des deux planètes ne s’accordent pas naturellement. La tension ressentie devient difficile à ignorer et pousse la personne à chercher des solutions concrètes.",
        },

        {
          question:
            "Quelle est la différence entre un carré et une opposition ?",

          answer:
            "L’opposition met deux forces face à face et demande un équilibre. Le carré crée davantage de friction intérieure et pousse directement à l’action et au changement.",
        },

        {
          question:
            "Un carré peut-il devenir une force ?",

          answer:
            "Oui. Avec le temps, les carrés peuvent devenir des sources de courage, de persévérance, de compétence et de maîtrise personnelle.",
        },

        {
          question:
            "Comment savoir si j’ai un carré dans mon thème natal ?",

          answer:
            "Il faut générer votre carte du ciel et comparer la position de vos planètes. Deux planètes séparées par environ 90 degrés peuvent former un carré.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation entre les aspects astrologiques",

      previous:
        "Aspect précédent : opposition",

      next:
        "Aspect suivant : trigone",
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "The Square in Astrology: Meaning in the Birth Chart | Luna Astralis",

      description:
        "Discover the meaning of the square in astrology, its 90° angle, the tension it creates between planets and its interpretation in a birth chart.",

      ogTitle:
        "The Square in Astrology: Tension, Action and Growth",

      ogDescription:
        "Understand how a square creates tension between two planets and encourages action, growth and the development of new strengths.",

      twitterTitle:
        "The Square in Astrology | Luna Astralis",

      twitterDescription:
        "A 90° angle, inner tension, challenges and growth potential in the birth chart.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "The Square in Astrology: Meaning in the Birth Chart",

      description:
        "A complete guide to understanding the astrological square, its 90-degree angle, orb and interpretation between planets.",
    },

    breadcrumb: {
      ariaLabel:
        "Breadcrumb",

      home:
        "Home",

      aspects:
        "Aspects",

      current:
        "Square",
    },

    hero: {
      badge:
        "✦ Major astrological aspect",

      title:
        "The Square in Astrology",

      lead:
        "A square forms when two planets are separated by an angle of 90 degrees. It creates dynamic tension that encourages action, overcoming obstacles and developing new strengths.",

      angleLabel:
        "Angle",

      angleValue:
        "90°",

      dynamicLabel:
        "Dynamic",

      dynamicValue:
        "Tension",

      functionLabel:
        "Function",

      functionValue:
        "Growth",

      createChart:
        "Create my free birth chart",

      understandSquare:
        "Understand the square",
    },

    meaning: {
      kicker:
        "Tension that encourages growth",

      title:
        "What does a square mean in astrology?",

      paragraphs: [
        "A square is an aspect that forms when two planets are separated by an angle of approximately 90 degrees in the zodiac circle.",

        "The functions represented by both planets are trying to express themselves, but they do not naturally work together. This friction can create frustration, obstacles or recurring reactions.",

        "The square is nevertheless a deeply active aspect. It prevents a person from remaining passive and compels them to seek solutions, overcome limitations and develop greater self-mastery.",
      ],
    },

    functioning: {
      title:
        "How does the square work?",

      steps: [
        {
          number:
            "01",

          title:
            "Two functions collide",

          text:
            "The planets express different needs that do not naturally agree.",
        },

        {
          number:
            "02",

          title:
            "Tension builds",

          text:
            "The friction may become visible in reactions, decisions or recurring situations.",
        },

        {
          number:
            "03",

          title:
            "Action becomes necessary",

          text:
            "The square requires a change in attitude, habit or way of responding to challenges.",
        },

        {
          number:
            "04",

          title:
            "Strength is developed",

          text:
            "Repeated effort can develop skill, endurance or great maturity.",
        },
      ],
    },

    difficulty: {
      kicker:
        "A dynamic aspect",

      title:
        "Is the square a difficult aspect?",

      introduction:
        "The square is generally classified as a dynamic or discordant aspect. It can create significant inner tension, especially when the planets involved represent very different needs.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "The challenges of the square",

          paragraphs: [
            "The square can produce frustration, impatience, obstacles or the feeling of repeatedly encountering the same kind of difficulty.",

            "A person may also overcompensate through one of the planets or alternate between two extremes.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "The potential of the square",

          paragraphs: [
            "The square provides a large amount of energy that can be used to grow, undertake projects and learn through experience.",

            "When better mastered, it can become a source of courage, discipline, creativity and perseverance.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Elements to observe",

      title:
        "How do you interpret a square in a birth chart?",

      methods: [
        {
          number:
            "1",

          title:
            "Identify the two planets",

          text:
            "Understand the symbolic functions of each planet and observe why they have difficulty cooperating.",
        },

        {
          number:
            "2",

          title:
            "Observe the signs",

          text:
            "The signs reveal the attitudes, needs and styles of expression that are in tension.",
        },

        {
          number:
            "3",

          title:
            "Study the houses",

          text:
            "The houses reveal the areas of life in which the challenges of the square appear most often.",
        },

        {
          number:
            "4",

          title:
            "Notice recurring patterns",

          text:
            "Squares often appear through situations that repeat until a new response is developed.",
        },

        {
          number:
            "5",

          title:
            "Find constructive action",

          text:
            "The square generally requires an active, practical and conscious response rather than a simple inner compromise.",
        },
      ],
    },

    orb: {
      title:
        "The orb of the square",

      introduction:
        "The orb represents the difference between the exact 90-degree angle and the actual positions of the planets. Depending on the method used, a square is often interpreted with an orb of up to approximately 7 degrees.",

      cards: [
        {
          value:
            "0° to 2°",

          title:
            "Very tight square",

          text:
            "The tension is very intense and may become one of the main forces of growth in the birth chart.",
        },

        {
          value:
            "3° to 5°",

          title:
            "Strong square",

          text:
            "The friction between the two planets remains clearly noticeable in the personality and life experiences.",
        },

        {
          value:
            "6° to 7°",

          title:
            "Wider square",

          text:
            "The aspect may still be significant, particularly when the Sun or Moon is involved.",
        },
      ],

      conclusion:
        "A very exact square is often more noticeable, but its importance also depends on the role of the planets within the entire birth chart.",
    },

    examplesSection: {
      kicker:
        "Interpretation examples",

      title:
        "The main squares between planets",

      introduction:
        "Each square expresses itself differently according to the signs, houses and other aspects in the chart. The following examples describe their general dynamics.",
    },

    examples: [
      {
        planets:
          "Sun square Moon",

        symbol:
          "☀ □ ☽",

        keywords:
          "Identity • emotions • inner conflict",

        text:
          "The Sun square Moon can create tension between conscious identity and emotional needs. The person must learn to act without ignoring what they truly feel.",
      },

      {
        planets:
          "Mercury square Saturn",

        symbol:
          "☿ □ ♄",

        keywords:
          "Thinking • restraint • mental discipline",

        text:
          "Mercury square Saturn may produce cautious, demanding or critical thinking. This aspect can complicate spontaneous expression, but it also supports concentration and rigor.",
      },

      {
        planets:
          "Venus square Pluto",

        symbol:
          "♀ □ ♇",

        keywords:
          "Relationships • intensity • transformation",

        text:
          "Venus square Pluto can intensify feelings, attachment and power dynamics. It requires learning to love without trying to control or possess.",
      },

      {
        planets:
          "Mars square Saturn",

        symbol:
          "♂ □ ♄",

        keywords:
          "Action • frustration • endurance",

        text:
          "Mars square Saturn can create the feeling of moving forward with the brakes applied. Frustration may be strong, but this aspect often develops great perseverance.",
      },

      {
        planets:
          "Jupiter square Neptune",

        symbol:
          "♃ □ ♆",

        keywords:
          "Expansion • ideals • discernment",

        text:
          "Jupiter square Neptune can encourage great aspirations but also unrealistic expectations. The person must learn to combine inspiration with discernment.",
      },

      {
        planets:
          "Moon square Uranus",

        symbol:
          "☽ □ ♅",

        keywords:
          "Emotions • freedom • unpredictability",

        text:
          "The Moon square Uranus can make emotional reactions quick and changeable. The need for security often conflicts with the desire for freedom.",
      },
    ],

    signsSection: {
      title:
        "The square in the zodiac signs",

      introduction:
        "Squares often form between signs belonging to the same modality. They share a similar way of acting but express different elements and needs.",

      modes: [
        {
          label:
            "Cardinal signs",

          signs:
            "Aries, Cancer, Libra, Capricorn",

          text:
            "The tension often involves initiative, decisions, relationships, security and responsibility.",
        },

        {
          label:
            "Fixed signs",

          signs:
            "Taurus, Leo, Scorpio, Aquarius",

          text:
            "The challenges involve stability, willpower, attachment, control and difficulty changing direction.",
        },

        {
          label:
            "Mutable signs",

          signs:
            "Gemini, Virgo, Sagittarius, Pisces",

          text:
            "The tension appears through ideas, adaptation, beliefs, organization and the need to let go.",
        },
      ],
    },

    housesSection: {
      title:
        "The square in the astrological houses",

      introduction:
        "The houses involved indicate the areas of life in which friction and the need for growth manifest most strongly.",

      houses: [
        {
          title:
            "Personal houses",

          text:
            "Houses 1 to 3 may emphasize identity, resources, confidence and communication.",
        },

        {
          title:
            "Intimate houses",

          text:
            "Houses 4 to 6 may create challenges involving family, emotions, creativity, work or health.",
        },

        {
          title:
            "Relational houses",

          text:
            "Houses 7 to 9 may create tension in relationships, intimacy, beliefs and the search for meaning.",
        },

        {
          title:
            "Collective houses",

          text:
            "Houses 10 to 12 may concern career, projects, social life, dreams and the inner world.",
        },
      ],
    },

    grandSquare: {
      kicker:
        "A structure of tension",

      title:
        "What is a grand cross in astrology?",

      subtitle:
        "Four planets connected by squares",

      paragraphs: [
        "A grand cross is an astrological configuration formed when four planets create several squares and two oppositions in the birth chart.",

        "This configuration concentrates strong tension across several areas of life. The person may feel pulled in different directions and may need to act constantly to maintain balance.",

        "Despite its challenges, the grand cross can provide great energy, strong resilience and significant potential for achievement.",
      ],
    },

    tSquare: {
      kicker:
        "A pattern of growth",

      title:
        "What is a T-square?",

      subtitle:
        "An opposition activated by a third planet",

      paragraphs: [
        "A T-square forms when one planet is square to both planets in an opposition.",

        "The planet at the apex of the T-square concentrates much of the tension. It often becomes an essential point of action, challenge and development in the birth chart.",

        "This configuration encourages the person to act and find a more constructive way to use their energy.",
      ],
    },

    transits: {
      title:
        "The square in astrological transits",

      paragraphs: [
        "A square can also form when a moving planet creates a 90-degree angle with a planet in your birth chart.",

        "This transit may correspond to a period of pressure, decision, effort or change. It often highlights a situation that can no longer be ignored.",

        "Saturn squares may require greater discipline and responsibility, while Uranus squares may encourage breaking away from a structure that has become too rigid.",
      ],
    },

    cta: {
      kicker:
        "Discover your birth chart",

      title:
        "Do you have an important square in your birth chart?",

      text:
        "Generate your free birth chart to discover your planets, houses and main birth aspects.",

      button:
        "View my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about the square in astrology",

      items: [
        {
          question:
            "What is a square in astrology?",

          answer:
            "A square forms when two planets are separated by an angle of approximately 90 degrees. It represents dynamic tension that encourages a person to act, adapt and develop new abilities.",
        },

        {
          question:
            "Is the square always negative?",

          answer:
            "No. A square may create frustration or obstacles, but it also provides energy, motivation and strong potential for growth.",
        },

        {
          question:
            "What orb should be used for a square?",

          answer:
            "The orb varies according to the astrological method. A square is often interpreted with an orb of up to approximately 7 degrees, sometimes wider when the Sun or Moon is involved.",
        },

        {
          question:
            "Why does the square encourage action?",

          answer:
            "The functions of the two planets do not naturally agree. The resulting tension becomes difficult to ignore and encourages the person to seek practical solutions.",
        },

        {
          question:
            "What is the difference between a square and an opposition?",

          answer:
            "An opposition places two forces face to face and requires balance. A square creates more inner friction and directly encourages action and change.",
        },

        {
          question:
            "Can a square become a strength?",

          answer:
            "Yes. Over time, squares can become sources of courage, perseverance, skill and personal mastery.",
        },

        {
          question:
            "How can I know whether I have a square in my birth chart?",

          answer:
            "Generate your birth chart and compare the positions of your planets. Two planets separated by approximately 90 degrees may form a square.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation between astrological aspects",

      previous:
        "Previous aspect: opposition",

      next:
        "Next aspect: trine",
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "La cuadratura en astrología: significado en la carta natal | Luna Astralis",

      description:
        "Descubre el significado de la cuadratura en astrología, su ángulo de 90°, las tensiones entre los planetas y su interpretación en la carta natal.",

      ogTitle:
        "La cuadratura en astrología: tensión, acción y superación",

      ogDescription:
        "Comprende cómo la cuadratura crea tensión entre dos planetas e impulsa a actuar, evolucionar y desarrollar nuevas fortalezas.",

      twitterTitle:
        "La cuadratura en astrología | Luna Astralis",

      twitterDescription:
        "Ángulo de 90°, tensiones interiores, desafíos y potencial de evolución en la carta natal.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "La cuadratura en astrología: significado en la carta natal",

      description:
        "Guía completa para comprender la cuadratura astrológica, su ángulo de 90 grados, su orbe y su interpretación entre los planetas.",
    },

    breadcrumb: {
      ariaLabel:
        "Migas de pan",

      home:
        "Inicio",

      aspects:
        "Aspectos",

      current:
        "Cuadratura",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico mayor",

      title:
        "La cuadratura en astrología",

      lead:
        "La cuadratura se forma cuando dos planetas están separados por un ángulo de 90 grados. Crea una tensión dinámica que impulsa a actuar, superar obstáculos y desarrollar nuevas fortalezas.",

      angleLabel:
        "Ángulo",

      angleValue:
        "90°",

      dynamicLabel:
        "Dinámica",

      dynamicValue:
        "Tensión",

      functionLabel:
        "Función",

      functionValue:
        "Evolución",

      createChart:
        "Crear mi carta natal gratis",

      understandSquare:
        "Comprender la cuadratura",
    },

    meaning: {
      kicker:
        "Una tensión que impulsa a evolucionar",

      title:
        "¿Qué significa una cuadratura en astrología?",

      paragraphs: [
        "La cuadratura es un aspecto que se forma cuando dos planetas están separados por un ángulo aproximado de 90 grados en el círculo zodiacal.",

        "Las funciones representadas por ambos planetas intentan expresarse, pero no funcionan juntas de manera natural. Esta fricción puede crear frustraciones, obstáculos o reacciones repetitivas.",

        "Sin embargo, la cuadratura es un aspecto profundamente activo. Impide que la persona permanezca pasiva y la obliga a buscar soluciones, superarse y desarrollar un mayor dominio de sí misma.",
      ],
    },

    functioning: {
      title:
        "¿Cómo funciona la cuadratura?",

      steps: [
        {
          number:
            "01",

          title:
            "Dos funciones chocan",

          text:
            "Los planetas expresan necesidades diferentes que no se armonizan espontáneamente.",
        },

        {
          number:
            "02",

          title:
            "La tensión se acumula",

          text:
            "La fricción puede hacerse visible en las reacciones, decisiones o situaciones repetitivas.",
        },

        {
          number:
            "03",

          title:
            "La acción se vuelve necesaria",

          text:
            "La cuadratura exige modificar una actitud, un hábito o una forma de responder a los desafíos.",
        },

        {
          number:
            "04",

          title:
            "Se construye una fuerza",

          text:
            "Los esfuerzos repetidos pueden desarrollar una habilidad, resistencia o gran madurez.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Un aspecto dinámico",

      title:
        "¿La cuadratura es un aspecto difícil?",

      introduction:
        "La cuadratura suele clasificarse entre los aspectos dinámicos o disonantes. Puede crear una tensión interior importante, especialmente cuando los planetas implicados representan necesidades muy diferentes.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "Los desafíos de la cuadratura",

          paragraphs: [
            "La cuadratura puede producir frustración, impaciencia, bloqueos o la sensación de encontrar siempre el mismo tipo de obstáculo.",

            "La persona también puede compensar excesivamente uno de los planetas o pasar de un extremo al otro.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "El potencial de la cuadratura",

          paragraphs: [
            "La cuadratura aporta una gran cantidad de energía disponible para evolucionar, emprender y aprender mediante la experiencia.",

            "Cuando se domina mejor, puede convertirse en una fuente de valor, disciplina, creatividad y perseverancia.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Los elementos que deben observarse",

      title:
        "¿Cómo interpretar una cuadratura en una carta natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar los dos planetas",

          text:
            "Es necesario comprender las funciones simbólicas de cada planeta y observar por qué tienen dificultad para colaborar.",
        },

        {
          number:
            "2",

          title:
            "Observar los signos",

          text:
            "Los signos muestran las actitudes, necesidades y estilos de expresión que entran en tensión.",
        },

        {
          number:
            "3",

          title:
            "Estudiar las casas",

          text:
            "Las casas revelan los ámbitos de vida en los que los desafíos de la cuadratura se manifiestan con mayor frecuencia.",
        },

        {
          number:
            "4",

          title:
            "Detectar las repeticiones",

          text:
            "Las cuadraturas suelen aparecer mediante situaciones que se repiten hasta que se desarrolla una nueva respuesta.",
        },

        {
          number:
            "5",

          title:
            "Buscar una acción constructiva",

          text:
            "La cuadratura suele exigir una respuesta activa, concreta y consciente en lugar de un simple compromiso interior.",
        },
      ],
    },

    orb: {
      title:
        "El orbe de la cuadratura",

      introduction:
        "El orbe representa la diferencia entre el ángulo exacto de 90 grados y la posición real de los planetas. Según el método utilizado, una cuadratura suele interpretarse con un orbe de hasta aproximadamente 7 grados.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Cuadratura muy cerrada",

          text:
            "La tensión es muy intensa y puede convertirse en uno de los principales motores de evolución de la carta natal.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Cuadratura fuerte",

          text:
            "La fricción entre ambos planetas sigue siendo claramente perceptible en la personalidad y las experiencias.",
        },

        {
          value:
            "6° a 7°",

          title:
            "Cuadratura más amplia",

          text:
            "El aspecto todavía puede ser significativo, especialmente cuando están implicados el Sol o la Luna.",
        },
      ],

      conclusion:
        "Una cuadratura muy exacta suele ser más visible, pero su importancia también depende del papel de los planetas en el conjunto de la carta natal.",
    },

    examplesSection: {
      kicker:
        "Ejemplos de interpretación",

      title:
        "Las principales cuadraturas entre los planetas",

      introduction:
        "Cada cuadratura se expresa de forma diferente según los signos, las casas y los demás aspectos de la carta. Los siguientes ejemplos presentan su dinámica general.",
    },

    examples: [
      {
        planets:
          "Sol cuadratura Luna",

        symbol:
          "☀ □ ☽",

        keywords:
          "Identidad • emociones • conflicto interior",

        text:
          "El Sol en cuadratura con la Luna puede crear tensión entre la identidad consciente y las necesidades emocionales. La persona debe aprender a actuar sin ignorar lo que realmente siente.",
      },

      {
        planets:
          "Mercurio cuadratura Saturno",

        symbol:
          "☿ □ ♄",

        keywords:
          "Pensamiento • contención • disciplina mental",

        text:
          "Mercurio en cuadratura con Saturno puede producir un pensamiento prudente, exigente o crítico. Este aspecto puede dificultar la expresión espontánea, pero también favorece la concentración y el rigor.",
      },

      {
        planets:
          "Venus cuadratura Plutón",

        symbol:
          "♀ □ ♇",

        keywords:
          "Relaciones • intensidad • transformación",

        text:
          "Venus en cuadratura con Plutón puede intensificar los sentimientos, el apego y las relaciones de poder. Exige aprender a amar sin intentar controlar o poseer.",
      },

      {
        planets:
          "Marte cuadratura Saturno",

        symbol:
          "♂ □ ♄",

        keywords:
          "Acción • frustración • resistencia",

        text:
          "Marte en cuadratura con Saturno puede producir la sensación de avanzar con el freno puesto. La frustración puede ser fuerte, pero este aspecto suele desarrollar una gran perseverancia.",
      },

      {
        planets:
          "Júpiter cuadratura Neptuno",

        symbol:
          "♃ □ ♆",

        keywords:
          "Expansión • ideal • discernimiento",

        text:
          "Júpiter en cuadratura con Neptuno puede favorecer grandes aspiraciones, pero también expectativas poco realistas. La persona debe aprender a unir inspiración y discernimiento.",
      },

      {
        planets:
          "Luna cuadratura Urano",

        symbol:
          "☽ □ ♅",

        keywords:
          "Emociones • libertad • imprevisibilidad",

        text:
          "La Luna en cuadratura con Urano puede hacer que las reacciones emocionales sean rápidas y cambiantes. La necesidad de seguridad suele entrar en conflicto con el deseo de libertad.",
      },
    ],

    signsSection: {
      title:
        "La cuadratura en los signos zodiacales",

      introduction:
        "Las cuadraturas suelen formarse entre signos que pertenecen a la misma modalidad. Comparten una forma similar de actuar, pero expresan elementos y necesidades diferentes.",

      modes: [
        {
          label:
            "Signos cardinales",

          signs:
            "Aries, Cáncer, Libra, Capricornio",

          text:
            "Las tensiones suelen estar relacionadas con la iniciativa, las decisiones, las relaciones, la seguridad y las responsabilidades.",
        },

        {
          label:
            "Signos fijos",

          signs:
            "Tauro, Leo, Escorpio, Acuario",

          text:
            "Los desafíos afectan la estabilidad, la voluntad, el apego, el control y la dificultad para cambiar de dirección.",
        },

        {
          label:
            "Signos mutables",

          signs:
            "Géminis, Virgo, Sagitario, Piscis",

          text:
            "Las tensiones se manifiestan en las ideas, la adaptación, las creencias, la organización y la necesidad de soltar.",
        },
      ],
    },

    housesSection: {
      title:
        "La cuadratura en las casas astrológicas",

      introduction:
        "Las casas implicadas indican los ámbitos de vida en los que la fricción y la necesidad de evolución se manifiestan con mayor intensidad.",

      houses: [
        {
          title:
            "Casas personales",

          text:
            "Las casas 1 a 3 pueden poner el énfasis en la identidad, los recursos, la confianza y la comunicación.",
        },

        {
          title:
            "Casas íntimas",

          text:
            "Las casas 4 a 6 pueden crear desafíos relacionados con la familia, las emociones, la creatividad, el trabajo o la salud.",
        },

        {
          title:
            "Casas relacionales",

          text:
            "Las casas 7 a 9 pueden crear tensión en las relaciones, la intimidad, las creencias y la búsqueda de sentido.",
        },

        {
          title:
            "Casas colectivas",

          text:
            "Las casas 10 a 12 pueden estar relacionadas con la carrera, los proyectos, la vida social, los sueños y el mundo interior.",
        },
      ],
    },

    grandSquare: {
      kicker:
        "Una estructura de tensión",

      title:
        "¿Qué es una gran cruz en astrología?",

      subtitle:
        "Cuatro planetas conectados mediante cuadraturas",

      paragraphs: [
        "Una gran cruz es una configuración astrológica formada cuando cuatro planetas crean varias cuadraturas y dos oposiciones en la carta natal.",

        "Esta configuración concentra una fuerte tensión en varios ámbitos de vida. La persona puede sentirse empujada en distintas direcciones y tener que actuar constantemente para mantener el equilibrio.",

        "A pesar de sus desafíos, la gran cruz puede aportar mucha energía, una gran capacidad de resistencia y un importante potencial de realización.",
      ],
    },

    tSquare: {
      kicker:
        "Una figura de evolución",

      title:
        "¿Qué es una cuadratura en T?",

      subtitle:
        "Una oposición activada por un tercer planeta",

      paragraphs: [
        "Una cuadratura en T se forma cuando un planeta está en cuadratura con los dos planetas de una oposición.",

        "El planeta situado en la cima de la cuadratura en T concentra gran parte de la tensión. Suele convertirse en un punto esencial de acción, desafío y desarrollo en la carta natal.",

        "Esta configuración impulsa a la persona a actuar y encontrar una forma más constructiva de utilizar su energía.",
      ],
    },

    transits: {
      title:
        "La cuadratura en los tránsitos astrológicos",

      paragraphs: [
        "Una cuadratura también puede formarse cuando un planeta en movimiento crea un ángulo de 90 grados con un planeta de tu carta natal.",

        "Este tránsito puede corresponder a un período de presión, decisión, esfuerzo o cambio. Suele destacar una situación que ya no puede ignorarse.",

        "Las cuadraturas de Saturno pueden exigir más disciplina y responsabilidad, mientras que las de Urano pueden impulsar a romper con una estructura que se ha vuelto demasiado rígida.",
      ],
    },

    cta: {
      kicker:
        "Descubre tu carta natal",

      title:
        "¿Tienes una cuadratura importante en tu carta natal?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tus planetas, tus casas y los principales aspectos de tu nacimiento.",

      button:
        "Ver mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre la cuadratura en astrología",

      items: [
        {
          question:
            "¿Qué es una cuadratura en astrología?",

          answer:
            "Una cuadratura se forma cuando dos planetas están separados por un ángulo aproximado de 90 grados. Representa una tensión dinámica que impulsa a la persona a actuar, adaptarse y desarrollar nuevas capacidades.",
        },

        {
          question:
            "¿La cuadratura es siempre negativa?",

          answer:
            "No. La cuadratura puede crear frustración u obstáculos, pero también aporta energía, motivación y un fuerte potencial de superación.",
        },

        {
          question:
            "¿Qué orbe debe utilizarse para una cuadratura?",

          answer:
            "El orbe varía según el método astrológico. Una cuadratura suele interpretarse con un orbe de hasta aproximadamente 7 grados, a veces más amplio cuando están implicados el Sol o la Luna.",
        },

        {
          question:
            "¿Por qué la cuadratura impulsa a actuar?",

          answer:
            "Las funciones de los dos planetas no se armonizan de forma natural. La tensión se vuelve difícil de ignorar e impulsa a la persona a buscar soluciones concretas.",
        },

        {
          question:
            "¿Cuál es la diferencia entre una cuadratura y una oposición?",

          answer:
            "La oposición coloca dos fuerzas frente a frente y exige equilibrio. La cuadratura crea más fricción interior e impulsa directamente a la acción y al cambio.",
        },

        {
          question:
            "¿Una cuadratura puede convertirse en una fortaleza?",

          answer:
            "Sí. Con el tiempo, las cuadraturas pueden convertirse en fuentes de valor, perseverancia, competencia y dominio personal.",
        },

        {
          question:
            "¿Cómo saber si tengo una cuadratura en mi carta natal?",

          answer:
            "Debes generar tu carta natal y comparar las posiciones de tus planetas. Dos planetas separados por aproximadamente 90 grados pueden formar una cuadratura.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegación entre los aspectos astrológicos",

      previous:
        "Aspecto anterior: oposición",

      next:
        "Aspecto siguiente: trígono",
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Das Quadrat in der Astrologie: Bedeutung im Geburtshoroskop | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung des Quadrats in der Astrologie, seinen 90°-Winkel, die Spannungen zwischen Planeten und seine Deutung im Geburtshoroskop.",

      ogTitle:
        "Das Quadrat in der Astrologie: Spannung, Handlung und Entwicklung",

      ogDescription:
        "Verstehen Sie, wie das Quadrat Spannung zwischen zwei Planeten erzeugt und zu Handlung, Entwicklung und neuen Stärken anregt.",

      twitterTitle:
        "Das Quadrat in der Astrologie | Luna Astralis",

      twitterDescription:
        "90°-Winkel, innere Spannungen, Herausforderungen und Entwicklungspotenzial im Geburtshoroskop.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Das Quadrat in der Astrologie: Bedeutung im Geburtshoroskop",

      description:
        "Ein vollständiger Leitfaden zum astrologischen Quadrat, seinem 90-Grad-Winkel, seinem Orbis und seiner Deutung zwischen Planeten.",
    },

    breadcrumb: {
      ariaLabel:
        "Brotkrümelnavigation",

      home:
        "Startseite",

      aspects:
        "Aspekte",

      current:
        "Quadrat",
    },

    hero: {
      badge:
        "✦ Bedeutender astrologischer Aspekt",

      title:
        "Das Quadrat in der Astrologie",

      lead:
        "Ein Quadrat entsteht, wenn zwei Planeten durch einen Winkel von 90 Grad getrennt sind. Es erzeugt dynamische Spannung, die zum Handeln, zum Überwinden von Hindernissen und zur Entwicklung neuer Stärken anregt.",

      angleLabel:
        "Winkel",

      angleValue:
        "90°",

      dynamicLabel:
        "Dynamik",

      dynamicValue:
        "Spannung",

      functionLabel:
        "Funktion",

      functionValue:
        "Entwicklung",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      understandSquare:
        "Das Quadrat verstehen",
    },

    meaning: {
      kicker:
        "Spannung, die zur Entwicklung anregt",

      title:
        "Was bedeutet ein Quadrat in der Astrologie?",

      paragraphs: [
        "Ein Quadrat ist ein Aspekt, der entsteht, wenn zwei Planeten im Tierkreis durch einen Winkel von ungefähr 90 Grad getrennt sind.",

        "Die durch beide Planeten dargestellten Funktionen möchten sich ausdrücken, arbeiten jedoch nicht auf natürliche Weise zusammen. Diese Reibung kann Frustration, Hindernisse oder wiederkehrende Reaktionen erzeugen.",

        "Das Quadrat ist dennoch ein zutiefst aktiver Aspekt. Es verhindert Passivität und zwingt die Person, Lösungen zu suchen, Grenzen zu überwinden und größere Selbstbeherrschung zu entwickeln.",
      ],
    },

    functioning: {
      title:
        "Wie funktioniert das Quadrat?",

      steps: [
        {
          number:
            "01",

          title:
            "Zwei Funktionen stoßen aufeinander",

          text:
            "Die Planeten drücken unterschiedliche Bedürfnisse aus, die nicht spontan miteinander harmonieren.",
        },

        {
          number:
            "02",

          title:
            "Spannung baut sich auf",

          text:
            "Die Reibung kann in Reaktionen, Entscheidungen oder wiederkehrenden Situationen sichtbar werden.",
        },

        {
          number:
            "03",

          title:
            "Handlung wird notwendig",

          text:
            "Das Quadrat verlangt eine Veränderung der Haltung, einer Gewohnheit oder der Reaktion auf Herausforderungen.",
        },

        {
          number:
            "04",

          title:
            "Eine Stärke entsteht",

          text:
            "Wiederholte Anstrengungen können Fähigkeiten, Ausdauer oder große Reife entwickeln.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Ein dynamischer Aspekt",

      title:
        "Ist das Quadrat ein schwieriger Aspekt?",

      introduction:
        "Das Quadrat wird gewöhnlich als dynamischer oder disharmonischer Aspekt eingeordnet. Es kann starke innere Spannung erzeugen, besonders wenn die beteiligten Planeten sehr unterschiedliche Bedürfnisse darstellen.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "Die Herausforderungen des Quadrats",

          paragraphs: [
            "Das Quadrat kann Frustration, Ungeduld, Blockaden oder das Gefühl hervorrufen, immer wieder auf dieselbe Art von Hindernis zu treffen.",

            "Die Person kann außerdem einen der Planeten überkompensieren oder zwischen zwei Extremen schwanken.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Das Potenzial des Quadrats",

          paragraphs: [
            "Das Quadrat stellt viel Energie zur Verfügung, die für Entwicklung, Unternehmungen und Lernen durch Erfahrung genutzt werden kann.",

            "Wenn es besser gemeistert wird, kann es zu einer Quelle von Mut, Disziplin, Kreativität und Ausdauer werden.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Zu beobachtende Elemente",

      title:
        "Wie deutet man ein Quadrat im Geburtshoroskop?",

      methods: [
        {
          number:
            "1",

          title:
            "Die beiden Planeten bestimmen",

          text:
            "Die symbolischen Funktionen jedes Planeten müssen verstanden und die Gründe ihrer schwierigen Zusammenarbeit beobachtet werden.",
        },

        {
          number:
            "2",

          title:
            "Die Zeichen beobachten",

          text:
            "Die Zeichen zeigen die Haltungen, Bedürfnisse und Ausdrucksweisen, die miteinander in Spannung stehen.",
        },

        {
          number:
            "3",

          title:
            "Die Häuser untersuchen",

          text:
            "Die Häuser zeigen die Lebensbereiche, in denen sich die Herausforderungen des Quadrats am häufigsten ausdrücken.",
        },

        {
          number:
            "4",

          title:
            "Wiederholungen erkennen",

          text:
            "Quadrate zeigen sich häufig durch Situationen, die sich wiederholen, bis eine neue Reaktion entwickelt wird.",
        },

        {
          number:
            "5",

          title:
            "Konstruktives Handeln suchen",

          text:
            "Das Quadrat verlangt meist eine aktive, konkrete und bewusste Antwort statt eines einfachen inneren Kompromisses.",
        },
      ],
    },

    orb: {
      title:
        "Der Orbis des Quadrats",

      introduction:
        "Der Orbis beschreibt den Abstand zwischen dem exakten 90-Grad-Winkel und den tatsächlichen Planetenpositionen. Je nach Methode wird ein Quadrat häufig bis zu einem Orbis von ungefähr 7 Grad gedeutet.",

      cards: [
        {
          value:
            "0° bis 2°",

          title:
            "Sehr enges Quadrat",

          text:
            "Die Spannung ist sehr intensiv und kann zu einer der wichtigsten Entwicklungskräfte des Geburtshoroskops werden.",
        },

        {
          value:
            "3° bis 5°",

          title:
            "Starkes Quadrat",

          text:
            "Die Reibung zwischen den beiden Planeten bleibt in der Persönlichkeit und den Erfahrungen deutlich wahrnehmbar.",
        },

        {
          value:
            "6° bis 7°",

          title:
            "Weiteres Quadrat",

          text:
            "Der Aspekt kann weiterhin bedeutsam sein, besonders wenn Sonne oder Mond beteiligt sind.",
        },
      ],

      conclusion:
        "Ein sehr exaktes Quadrat ist häufig deutlicher sichtbar, doch seine Bedeutung hängt auch von der Rolle der Planeten im gesamten Geburtshoroskop ab.",
    },

    examplesSection: {
      kicker:
        "Deutungsbeispiele",

      title:
        "Die wichtigsten Quadrate zwischen den Planeten",

      introduction:
        "Jedes Quadrat drückt sich je nach Zeichen, Häusern und anderen Aspekten im Horoskop unterschiedlich aus. Die folgenden Beispiele zeigen ihre allgemeine Dynamik.",
    },

    examples: [
      {
        planets:
          "Sonne Quadrat Mond",

        symbol:
          "☀ □ ☽",

        keywords:
          "Identität • Gefühle • innerer Konflikt",

        text:
          "Sonne Quadrat Mond kann Spannung zwischen bewusster Identität und emotionalen Bedürfnissen erzeugen. Die Person muss lernen zu handeln, ohne ihre wahren Gefühle zu ignorieren.",
      },

      {
        planets:
          "Merkur Quadrat Saturn",

        symbol:
          "☿ □ ♄",

        keywords:
          "Denken • Zurückhaltung • mentale Disziplin",

        text:
          "Merkur Quadrat Saturn kann vorsichtiges, anspruchsvolles oder kritisches Denken erzeugen. Dieser Aspekt kann spontanen Ausdruck erschweren, fördert jedoch Konzentration und Gründlichkeit.",
      },

      {
        planets:
          "Venus Quadrat Pluto",

        symbol:
          "♀ □ ♇",

        keywords:
          "Beziehungen • Intensität • Transformation",

        text:
          "Venus Quadrat Pluto kann Gefühle, Bindung und Machtdynamiken intensivieren. Es verlangt, lieben zu lernen, ohne kontrollieren oder besitzen zu wollen.",
      },

      {
        planets:
          "Mars Quadrat Saturn",

        symbol:
          "♂ □ ♄",

        keywords:
          "Handlung • Frustration • Ausdauer",

        text:
          "Mars Quadrat Saturn kann das Gefühl erzeugen, mit angezogener Bremse voranzukommen. Die Frustration kann stark sein, doch dieser Aspekt entwickelt häufig große Ausdauer.",
      },

      {
        planets:
          "Jupiter Quadrat Neptun",

        symbol:
          "♃ □ ♆",

        keywords:
          "Expansion • Ideal • Urteilsvermögen",

        text:
          "Jupiter Quadrat Neptun kann große Hoffnungen, aber auch unrealistische Erwartungen fördern. Die Person muss Inspiration und Urteilsvermögen miteinander verbinden.",
      },

      {
        planets:
          "Mond Quadrat Uranus",

        symbol:
          "☽ □ ♅",

        keywords:
          "Gefühle • Freiheit • Unberechenbarkeit",

        text:
          "Mond Quadrat Uranus kann emotionale Reaktionen schnell und wechselhaft machen. Das Bedürfnis nach Sicherheit steht häufig im Konflikt mit dem Wunsch nach Freiheit.",
      },
    ],

    signsSection: {
      title:
        "Das Quadrat in den Tierkreiszeichen",

      introduction:
        "Quadrate entstehen häufig zwischen Zeichen derselben Modalität. Sie teilen eine ähnliche Handlungsweise, drücken jedoch unterschiedliche Elemente und Bedürfnisse aus.",

      modes: [
        {
          label:
            "Kardinale Zeichen",

          signs:
            "Widder, Krebs, Waage, Steinbock",

          text:
            "Die Spannungen betreffen häufig Initiative, Entscheidungen, Beziehungen, Sicherheit und Verantwortung.",
        },

        {
          label:
            "Fixe Zeichen",

          signs:
            "Stier, Löwe, Skorpion, Wassermann",

          text:
            "Die Herausforderungen betreffen Stabilität, Willenskraft, Bindung, Kontrolle und die Schwierigkeit, die Richtung zu ändern.",
        },

        {
          label:
            "Veränderliche Zeichen",

          signs:
            "Zwillinge, Jungfrau, Schütze, Fische",

          text:
            "Die Spannungen zeigen sich in Ideen, Anpassung, Überzeugungen, Organisation und dem Bedürfnis loszulassen.",
        },
      ],
    },

    housesSection: {
      title:
        "Das Quadrat in den astrologischen Häusern",

      introduction:
        "Die beteiligten Häuser zeigen die Lebensbereiche, in denen sich Reibung und Entwicklungsbedarf am stärksten ausdrücken.",

      houses: [
        {
          title:
            "Persönliche Häuser",

          text:
            "Die Häuser 1 bis 3 können Identität, Ressourcen, Selbstvertrauen und Kommunikation betonen.",
        },

        {
          title:
            "Intime Häuser",

          text:
            "Die Häuser 4 bis 6 können Herausforderungen in Familie, Gefühlen, Kreativität, Arbeit oder Gesundheit erzeugen.",
        },

        {
          title:
            "Beziehungshäuser",

          text:
            "Die Häuser 7 bis 9 können Beziehungen, Intimität, Überzeugungen und Sinnsuche unter Spannung setzen.",
        },

        {
          title:
            "Kollektive Häuser",

          text:
            "Die Häuser 10 bis 12 können Karriere, Projekte, gesellschaftliches Leben, Träume und Innenleben betreffen.",
        },
      ],
    },

    grandSquare: {
      kicker:
        "Eine Spannungsstruktur",

      title:
        "Was ist ein großes Kreuz in der Astrologie?",

      subtitle:
        "Vier durch Quadrate verbundene Planeten",

      paragraphs: [
        "Ein großes Kreuz ist eine astrologische Figur, die entsteht, wenn vier Planeten mehrere Quadrate und zwei Oppositionen im Geburtshoroskop bilden.",

        "Diese Konfiguration konzentriert starke Spannung in mehreren Lebensbereichen. Die Person kann sich in verschiedene Richtungen gedrängt fühlen und ständig handeln müssen, um Gleichgewicht zu bewahren.",

        "Trotz seiner Herausforderungen kann das große Kreuz viel Energie, starke Widerstandskraft und bedeutendes Leistungspotenzial verleihen.",
      ],
    },

    tSquare: {
      kicker:
        "Eine Entwicklungsfigur",

      title:
        "Was ist ein T-Quadrat?",

      subtitle:
        "Eine Opposition, die durch einen dritten Planeten aktiviert wird",

      paragraphs: [
        "Ein T-Quadrat entsteht, wenn ein Planet zu beiden Planeten einer Opposition im Quadrat steht.",

        "Der Planet an der Spitze des T-Quadrats konzentriert einen großen Teil der Spannung. Er wird häufig zu einem wesentlichen Punkt für Handlung, Herausforderung und Entwicklung im Geburtshoroskop.",

        "Diese Konfiguration drängt die Person zum Handeln und dazu, ihre Energie konstruktiver zu nutzen.",
      ],
    },

    transits: {
      title:
        "Das Quadrat in astrologischen Transiten",

      paragraphs: [
        "Ein Quadrat kann auch entstehen, wenn ein laufender Planet einen 90-Grad-Winkel zu einem Planeten Ihres Geburtshoroskops bildet.",

        "Dieser Transit kann einer Phase von Druck, Entscheidung, Anstrengung oder Veränderung entsprechen. Er hebt häufig eine Situation hervor, die nicht länger ignoriert werden kann.",

        "Saturnquadrate können mehr Disziplin und Verantwortung verlangen, während Uranusquadrate dazu anregen können, eine zu starr gewordene Struktur zu verlassen.",
      ],
    },

    cta: {
      kicker:
        "Entdecken Sie Ihr Geburtshoroskop",

      title:
        "Haben Sie ein wichtiges Quadrat in Ihrem Geburtshoroskop?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Planeten, Häuser und wichtigsten Geburtsaspekte.",

      button:
        "Mein Geburtshoroskop ansehen",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zum Quadrat in der Astrologie",

      items: [
        {
          question:
            "Was ist ein Quadrat in der Astrologie?",

          answer:
            "Ein Quadrat entsteht, wenn zwei Planeten durch einen Winkel von ungefähr 90 Grad getrennt sind. Es steht für dynamische Spannung, die zum Handeln, Anpassen und Entwickeln neuer Fähigkeiten anregt.",
        },

        {
          question:
            "Ist das Quadrat immer negativ?",

          answer:
            "Nein. Das Quadrat kann Frustration oder Hindernisse erzeugen, bringt aber auch Energie, Motivation und starkes Entwicklungspotenzial.",
        },

        {
          question:
            "Welcher Orbis sollte für ein Quadrat verwendet werden?",

          answer:
            "Der Orbis variiert je nach astrologischer Methode. Ein Quadrat wird häufig bis zu ungefähr 7 Grad gedeutet, manchmal weiter, wenn Sonne oder Mond beteiligt sind.",
        },

        {
          question:
            "Warum drängt das Quadrat zum Handeln?",

          answer:
            "Die Funktionen der beiden Planeten harmonieren nicht auf natürliche Weise. Die Spannung wird schwer zu ignorieren und drängt die Person dazu, konkrete Lösungen zu suchen.",
        },

        {
          question:
            "Was ist der Unterschied zwischen einem Quadrat und einer Opposition?",

          answer:
            "Eine Opposition stellt zwei Kräfte einander gegenüber und verlangt Ausgleich. Ein Quadrat erzeugt mehr innere Reibung und drängt direkt zu Handlung und Veränderung.",
        },

        {
          question:
            "Kann ein Quadrat zu einer Stärke werden?",

          answer:
            "Ja. Mit der Zeit können Quadrate zu Quellen von Mut, Ausdauer, Kompetenz und persönlicher Meisterschaft werden.",
        },

        {
          question:
            "Wie erkenne ich ein Quadrat in meinem Geburtshoroskop?",

          answer:
            "Erstellen Sie Ihr Geburtshoroskop und vergleichen Sie die Positionen Ihrer Planeten. Zwei Planeten mit einem Abstand von ungefähr 90 Grad können ein Quadrat bilden.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation zwischen astrologischen Aspekten",

      previous:
        "Vorheriger Aspekt: Opposition",

      next:
        "Nächster Aspekt: Trigon",
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "La quadratura in astrologia: significato nel tema natale | Luna Astralis",

      description:
        "Scopri il significato della quadratura in astrologia, il suo angolo di 90°, le tensioni tra i pianeti e la sua interpretazione nel tema natale.",

      ogTitle:
        "La quadratura in astrologia: tensione, azione e superamento",

      ogDescription:
        "Comprendi come la quadratura crea tensione tra due pianeti e spinge ad agire, evolvere e sviluppare nuove forze.",

      twitterTitle:
        "La quadratura in astrologia | Luna Astralis",

      twitterDescription:
        "Angolo di 90°, tensioni interiori, sfide e potenziale di evoluzione nel tema natale.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "La quadratura in astrologia: significato nel tema natale",

      description:
        "Guida completa per comprendere la quadratura astrologica, il suo angolo di 90 gradi, il suo orbe e la sua interpretazione tra i pianeti.",
    },

    breadcrumb: {
      ariaLabel:
        "Percorso di navigazione",

      home:
        "Home",

      aspects:
        "Aspetti",

      current:
        "Quadratura",
    },

    hero: {
      badge:
        "✦ Aspetto astrologico maggiore",

      title:
        "La quadratura in astrologia",

      lead:
        "La quadratura si forma quando due pianeti sono separati da un angolo di 90 gradi. Crea una tensione dinamica che spinge ad agire, superare gli ostacoli e sviluppare nuove forze.",

      angleLabel:
        "Angolo",

      angleValue:
        "90°",

      dynamicLabel:
        "Dinamica",

      dynamicValue:
        "Tensione",

      functionLabel:
        "Funzione",

      functionValue:
        "Evoluzione",

      createChart:
        "Creare gratuitamente il mio tema natale",

      understandSquare:
        "Comprendere la quadratura",
    },

    meaning: {
      kicker:
        "Una tensione che spinge a evolvere",

      title:
        "Che cosa significa una quadratura in astrologia?",

      paragraphs: [
        "La quadratura è un aspetto che si forma quando due pianeti sono separati da un angolo di circa 90 gradi nel cerchio zodiacale.",

        "Le funzioni rappresentate dai due pianeti cercano entrambe di esprimersi, ma non collaborano in modo naturale. Questa frizione può creare frustrazione, ostacoli o reazioni ripetitive.",

        "La quadratura è tuttavia un aspetto profondamente attivo. Impedisce alla persona di rimanere passiva e la obbliga a cercare soluzioni, superarsi e sviluppare una maggiore padronanza di sé.",
      ],
    },

    functioning: {
      title:
        "Come funziona la quadratura?",

      steps: [
        {
          number:
            "01",

          title:
            "Due funzioni si scontrano",

          text:
            "I pianeti esprimono bisogni diversi che non si armonizzano spontaneamente.",
        },

        {
          number:
            "02",

          title:
            "La tensione si accumula",

          text:
            "La frizione può diventare visibile nelle reazioni, nelle decisioni o nelle situazioni ripetitive.",
        },

        {
          number:
            "03",

          title:
            "L’azione diventa necessaria",

          text:
            "La quadratura richiede di modificare un atteggiamento, un’abitudine o un modo di rispondere alle sfide.",
        },

        {
          number:
            "04",

          title:
            "Si costruisce una forza",

          text:
            "Gli sforzi ripetuti possono sviluppare una competenza, una resistenza o una grande maturità.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Un aspetto dinamico",

      title:
        "La quadratura è un aspetto difficile?",

      introduction:
        "La quadratura viene generalmente classificata tra gli aspetti dinamici o dissonanti. Può creare una forte tensione interiore, soprattutto quando i pianeti coinvolti rappresentano bisogni molto diversi.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "Le sfide della quadratura",

          paragraphs: [
            "La quadratura può produrre frustrazione, impazienza, blocchi o la sensazione di incontrare sempre lo stesso tipo di ostacolo.",

            "La persona può inoltre compensare eccessivamente uno dei pianeti o passare da un estremo all’altro.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "Il potenziale della quadratura",

          paragraphs: [
            "La quadratura offre una grande quantità di energia disponibile per evolvere, intraprendere e imparare attraverso l’esperienza.",

            "Quando viene gestita meglio, può diventare una fonte di coraggio, disciplina, creatività e perseveranza.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Gli elementi da osservare",

      title:
        "Come interpretare una quadratura nel tema natale?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificare i due pianeti",

          text:
            "Bisogna comprendere le funzioni simboliche di ogni pianeta e osservare perché hanno difficoltà a collaborare.",
        },

        {
          number:
            "2",

          title:
            "Osservare i segni",

          text:
            "I segni mostrano gli atteggiamenti, i bisogni e gli stili espressivi che entrano in tensione.",
        },

        {
          number:
            "3",

          title:
            "Studiare le case",

          text:
            "Le case rivelano gli ambiti della vita in cui le sfide della quadratura si manifestano più spesso.",
        },

        {
          number:
            "4",

          title:
            "Individuare le ripetizioni",

          text:
            "Le quadrature appaiono spesso attraverso situazioni che si ripetono finché non viene sviluppata una nuova risposta.",
        },

        {
          number:
            "5",

          title:
            "Cercare un’azione costruttiva",

          text:
            "La quadratura richiede generalmente una risposta attiva, concreta e consapevole invece di un semplice compromesso interiore.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe della quadratura",

      introduction:
        "L’orbe rappresenta la differenza tra l’angolo esatto di 90 gradi e la posizione reale dei pianeti. Secondo il metodo utilizzato, una quadratura viene spesso interpretata fino a un orbe di circa 7 gradi.",

      cards: [
        {
          value:
            "Da 0° a 2°",

          title:
            "Quadratura molto stretta",

          text:
            "La tensione è molto intensa e può diventare uno dei principali motori di evoluzione del tema natale.",
        },

        {
          value:
            "Da 3° a 5°",

          title:
            "Quadratura forte",

          text:
            "La frizione tra i due pianeti rimane chiaramente percepibile nella personalità e nelle esperienze.",
        },

        {
          value:
            "Da 6° a 7°",

          title:
            "Quadratura più ampia",

          text:
            "L’aspetto può essere ancora significativo, soprattutto quando sono coinvolti il Sole o la Luna.",
        },
      ],

      conclusion:
        "Una quadratura molto esatta è spesso più visibile, ma la sua importanza dipende anche dal ruolo dei pianeti nell’intero tema natale.",
    },

    examplesSection: {
      kicker:
        "Esempi di interpretazione",

      title:
        "Le principali quadrature tra i pianeti",

      introduction:
        "Ogni quadratura si esprime in modo diverso secondo i segni, le case e gli altri aspetti del tema. Gli esempi seguenti presentano la loro dinamica generale.",
    },

    examples: [
      {
        planets:
          "Sole quadrato Luna",

        symbol:
          "☀ □ ☽",

        keywords:
          "Identità • emozioni • conflitto interiore",

        text:
          "Il Sole quadrato alla Luna può creare tensione tra l’identità cosciente e i bisogni emotivi. La persona deve imparare ad agire senza ignorare ciò che sente realmente.",
      },

      {
        planets:
          "Mercurio quadrato Saturno",

        symbol:
          "☿ □ ♄",

        keywords:
          "Pensiero • contenimento • disciplina mentale",

        text:
          "Mercurio quadrato a Saturno può produrre un pensiero prudente, esigente o critico. Questo aspetto può rendere più difficile l’espressione spontanea, ma favorisce anche concentrazione e rigore.",
      },

      {
        planets:
          "Venere quadrata Plutone",

        symbol:
          "♀ □ ♇",

        keywords:
          "Relazioni • intensità • trasformazione",

        text:
          "Venere quadrata a Plutone può intensificare i sentimenti, l’attaccamento e i rapporti di potere. Richiede di imparare ad amare senza cercare di controllare o possedere.",
      },

      {
        planets:
          "Marte quadrato Saturno",

        symbol:
          "♂ □ ♄",

        keywords:
          "Azione • frustrazione • resistenza",

        text:
          "Marte quadrato a Saturno può dare la sensazione di avanzare con il freno tirato. La frustrazione può essere forte, ma questo aspetto sviluppa spesso una grande perseveranza.",
      },

      {
        planets:
          "Giove quadrato Nettuno",

        symbol:
          "♃ □ ♆",

        keywords:
          "Espansione • ideale • discernimento",

        text:
          "Giove quadrato a Nettuno può favorire grandi aspirazioni, ma anche aspettative poco realistiche. La persona deve imparare a unire ispirazione e discernimento.",
      },

      {
        planets:
          "Luna quadrata Urano",

        symbol:
          "☽ □ ♅",

        keywords:
          "Emozioni • libertà • imprevedibilità",

        text:
          "La Luna quadrata a Urano può rendere le reazioni emotive rapide e mutevoli. Il bisogno di sicurezza entra spesso in conflitto con il desiderio di libertà.",
      },
    ],

    signsSection: {
      title:
        "La quadratura nei segni zodiacali",

      introduction:
        "Le quadrature si formano spesso tra segni appartenenti alla stessa modalità. Condividono un modo simile di agire, ma esprimono elementi e bisogni diversi.",

      modes: [
        {
          label:
            "Segni cardinali",

          signs:
            "Ariete, Cancro, Bilancia, Capricorno",

          text:
            "Le tensioni riguardano spesso l’iniziativa, le decisioni, le relazioni, la sicurezza e le responsabilità.",
        },

        {
          label:
            "Segni fissi",

          signs:
            "Toro, Leone, Scorpione, Acquario",

          text:
            "Le sfide riguardano la stabilità, la volontà, l’attaccamento, il controllo e la difficoltà a cambiare direzione.",
        },

        {
          label:
            "Segni mobili",

          signs:
            "Gemelli, Vergine, Sagittario, Pesci",

          text:
            "Le tensioni si manifestano nelle idee, nell’adattamento, nelle convinzioni, nell’organizzazione e nel bisogno di lasciar andare.",
        },
      ],
    },

    housesSection: {
      title:
        "La quadratura nelle case astrologiche",

      introduction:
        "Le case coinvolte indicano gli ambiti della vita in cui la frizione e il bisogno di evoluzione si manifestano con maggiore forza.",

      houses: [
        {
          title:
            "Case personali",

          text:
            "Le case dalla 1 alla 3 possono mettere l’accento su identità, risorse, fiducia e comunicazione.",
        },

        {
          title:
            "Case intime",

          text:
            "Le case dalla 4 alla 6 possono creare sfide legate alla famiglia, alle emozioni, alla creatività, al lavoro o alla salute.",
        },

        {
          title:
            "Case relazionali",

          text:
            "Le case dalla 7 alla 9 possono creare tensione nelle relazioni, nell’intimità, nelle convinzioni e nella ricerca di significato.",
        },

        {
          title:
            "Case collettive",

          text:
            "Le case dalla 10 alla 12 possono riguardare la carriera, i progetti, la vita sociale, i sogni e la vita interiore.",
        },
      ],
    },

    grandSquare: {
      kicker:
        "Una struttura di tensione",

      title:
        "Che cos’è una grande croce in astrologia?",

      subtitle:
        "Quattro pianeti collegati da quadrature",

      paragraphs: [
        "Una grande croce è una configurazione astrologica che si forma quando quattro pianeti creano diverse quadrature e due opposizioni nel tema natale.",

        "Questa configurazione concentra una forte tensione in diversi ambiti della vita. La persona può sentirsi spinta in direzioni differenti e dover agire costantemente per mantenere l’equilibrio.",

        "Nonostante le sue sfide, la grande croce può offrire molta energia, una forte capacità di resistenza e un importante potenziale di realizzazione.",
      ],
    },

    tSquare: {
      kicker:
        "Una figura di evoluzione",

      title:
        "Che cos’è una quadratura a T?",

      subtitle:
        "Un’opposizione attivata da un terzo pianeta",

      paragraphs: [
        "Una quadratura a T si forma quando un pianeta è in quadratura con entrambi i pianeti di un’opposizione.",

        "Il pianeta situato al vertice della quadratura a T concentra gran parte della tensione. Diventa spesso un punto essenziale di azione, sfida e sviluppo nel tema natale.",

        "Questa configurazione spinge la persona ad agire e a trovare un modo più costruttivo di utilizzare la propria energia.",
      ],
    },

    transits: {
      title:
        "La quadratura nei transiti astrologici",

      paragraphs: [
        "Una quadratura può formarsi anche quando un pianeta in movimento crea un angolo di 90 gradi con un pianeta del tema natale.",

        "Questo transito può corrispondere a un periodo di pressione, decisione, impegno o cambiamento. Spesso mette in evidenza una situazione che non può più essere ignorata.",

        "Le quadrature di Saturno possono richiedere maggiore disciplina e responsabilità, mentre quelle di Urano possono spingere a rompere con una struttura diventata troppo rigida.",
      ],
    },

    cta: {
      kicker:
        "Scopri il tuo tema natale",

      title:
        "Hai una quadratura importante nel tuo tema natale?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire i pianeti, le case e i principali aspetti della nascita.",

      button:
        "Vedere il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sulla quadratura in astrologia",

      items: [
        {
          question:
            "Che cos’è una quadratura in astrologia?",

          answer:
            "Una quadratura si forma quando due pianeti sono separati da un angolo di circa 90 gradi. Rappresenta una tensione dinamica che spinge la persona ad agire, adattarsi e sviluppare nuove capacità.",
        },

        {
          question:
            "La quadratura è sempre negativa?",

          answer:
            "No. La quadratura può creare frustrazione o ostacoli, ma porta anche energia, motivazione e un forte potenziale di superamento.",
        },

        {
          question:
            "Quale orbe utilizzare per una quadratura?",

          answer:
            "L’orbe varia secondo il metodo astrologico. Una quadratura viene spesso interpretata fino a circa 7 gradi, con un margine talvolta più ampio quando sono coinvolti il Sole o la Luna.",
        },

        {
          question:
            "Perché la quadratura spinge ad agire?",

          answer:
            "Le funzioni dei due pianeti non si armonizzano naturalmente. La tensione diventa difficile da ignorare e spinge la persona a cercare soluzioni concrete.",
        },

        {
          question:
            "Qual è la differenza tra una quadratura e un’opposizione?",

          answer:
            "L’opposizione mette due forze una di fronte all’altra e richiede equilibrio. La quadratura crea maggiore frizione interiore e spinge direttamente all’azione e al cambiamento.",
        },

        {
          question:
            "Una quadratura può diventare una forza?",

          answer:
            "Sì. Con il tempo, le quadrature possono diventare fonti di coraggio, perseveranza, competenza e padronanza personale.",
        },

        {
          question:
            "Come sapere se ho una quadratura nel tema natale?",

          answer:
            "Genera il tuo tema natale e confronta le posizioni dei pianeti. Due pianeti separati da circa 90 gradi possono formare una quadratura.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigazione tra gli aspetti astrologici",

      previous:
        "Aspetto precedente: opposizione",

      next:
        "Aspetto successivo: trigono",
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "A quadratura na astrologia: significado no mapa natal | Luna Astralis",

      description:
        "Descubra o significado da quadratura na astrologia, seu ângulo de 90°, as tensões entre os planetas e sua interpretação no mapa natal.",

      ogTitle:
        "A quadratura na astrologia: tensão, ação e superação",

      ogDescription:
        "Entenda como a quadratura cria tensão entre dois planetas e impulsiona a ação, a evolução e o desenvolvimento de novas forças.",

      twitterTitle:
        "A quadratura na astrologia | Luna Astralis",

      twitterDescription:
        "Ângulo de 90°, tensões interiores, desafios e potencial de evolução no mapa natal.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "A quadratura na astrologia: significado no mapa natal",

      description:
        "Guia completo para compreender a quadratura astrológica, seu ângulo de 90 graus, seu orbe e sua interpretação entre os planetas.",
    },

    breadcrumb: {
      ariaLabel:
        "Trilha de navegação",

      home:
        "Início",

      aspects:
        "Aspectos",

      current:
        "Quadratura",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico maior",

      title:
        "A quadratura na astrologia",

      lead:
        "A quadratura se forma quando dois planetas estão separados por um ângulo de 90 graus. Ela cria uma tensão dinâmica que impulsiona a ação, a superação de obstáculos e o desenvolvimento de novas forças.",

      angleLabel:
        "Ângulo",

      angleValue:
        "90°",

      dynamicLabel:
        "Dinâmica",

      dynamicValue:
        "Tensão",

      functionLabel:
        "Função",

      functionValue:
        "Evolução",

      createChart:
        "Criar meu mapa astral grátis",

      understandSquare:
        "Compreender a quadratura",
    },

    meaning: {
      kicker:
        "Uma tensão que impulsiona a evolução",

      title:
        "O que significa uma quadratura na astrologia?",

      paragraphs: [
        "A quadratura é um aspecto que se forma quando dois planetas estão separados por um ângulo de aproximadamente 90 graus no círculo zodiacal.",

        "As funções representadas pelos dois planetas tentam se expressar, mas não trabalham naturalmente juntas. Essa fricção pode criar frustrações, obstáculos ou reações repetitivas.",

        "A quadratura é, porém, um aspecto profundamente ativo. Ela impede que a pessoa permaneça passiva e a obriga a buscar soluções, superar limites e desenvolver maior domínio de si mesma.",
      ],
    },

    functioning: {
      title:
        "Como funciona a quadratura?",

      steps: [
        {
          number:
            "01",

          title:
            "Duas funções entram em conflito",

          text:
            "Os planetas expressam necessidades diferentes que não se harmonizam espontaneamente.",
        },

        {
          number:
            "02",

          title:
            "A tensão se acumula",

          text:
            "A fricção pode se tornar visível nas reações, decisões ou situações repetitivas.",
        },

        {
          number:
            "03",

          title:
            "A ação se torna necessária",

          text:
            "A quadratura exige a mudança de uma atitude, hábito ou maneira de responder aos desafios.",
        },

        {
          number:
            "04",

          title:
            "Uma força é construída",

          text:
            "Os esforços repetidos podem desenvolver uma habilidade, resistência ou grande maturidade.",
        },
      ],
    },

    difficulty: {
      kicker:
        "Um aspecto dinâmico",

      title:
        "A quadratura é um aspecto difícil?",

      introduction:
        "A quadratura geralmente é classificada entre os aspectos dinâmicos ou dissonantes. Ela pode criar uma tensão interior importante, especialmente quando os planetas envolvidos representam necessidades muito diferentes.",

      cards: [
        {
          symbol:
            "⚡",

          title:
            "Os desafios da quadratura",

          paragraphs: [
            "A quadratura pode produzir frustração, impaciência, bloqueios ou a sensação de encontrar sempre o mesmo tipo de obstáculo.",

            "A pessoa também pode compensar excessivamente um dos planetas ou passar de um extremo ao outro.",
          ],
        },

        {
          symbol:
            "✦",

          title:
            "O potencial da quadratura",

          paragraphs: [
            "A quadratura oferece uma grande quantidade de energia disponível para evoluir, empreender e aprender por meio da experiência.",

            "Quando é melhor administrada, pode se tornar uma fonte de coragem, disciplina, criatividade e perseverança.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Os elementos que devem ser observados",

      title:
        "Como interpretar uma quadratura no mapa natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar os dois planetas",

          text:
            "É necessário compreender as funções simbólicas de cada planeta e observar por que eles têm dificuldade para colaborar.",
        },

        {
          number:
            "2",

          title:
            "Observar os signos",

          text:
            "Os signos mostram as atitudes, necessidades e estilos de expressão que entram em tensão.",
        },

        {
          number:
            "3",

          title:
            "Estudar as casas",

          text:
            "As casas revelam as áreas da vida em que os desafios da quadratura se manifestam com maior frequência.",
        },

        {
          number:
            "4",

          title:
            "Identificar as repetições",

          text:
            "As quadraturas costumam aparecer por meio de situações que se repetem até que uma nova resposta seja desenvolvida.",
        },

        {
          number:
            "5",

          title:
            "Buscar uma ação construtiva",

          text:
            "A quadratura geralmente exige uma resposta ativa, concreta e consciente em vez de um simples compromisso interior.",
        },
      ],
    },

    orb: {
      title:
        "O orbe da quadratura",

      introduction:
        "O orbe representa a diferença entre o ângulo exato de 90 graus e a posição real dos planetas. De acordo com o método utilizado, uma quadratura costuma ser interpretada com um orbe de até aproximadamente 7 graus.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Quadratura muito fechada",

          text:
            "A tensão é muito intensa e pode se tornar um dos principais motores de evolução do mapa natal.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Quadratura forte",

          text:
            "A fricção entre os dois planetas continua claramente perceptível na personalidade e nas experiências.",
        },

        {
          value:
            "6° a 7°",

          title:
            "Quadratura mais ampla",

          text:
            "O aspecto ainda pode ser significativo, especialmente quando o Sol ou a Lua está envolvido.",
        },
      ],

      conclusion:
        "Uma quadratura muito exata costuma ser mais visível, mas sua importância também depende do papel dos planetas no conjunto do mapa natal.",
    },

    examplesSection: {
      kicker:
        "Exemplos de interpretação",

      title:
        "As principais quadraturas entre os planetas",

      introduction:
        "Cada quadratura se expressa de maneira diferente de acordo com os signos, as casas e os outros aspectos do mapa. Os exemplos a seguir apresentam sua dinâmica geral.",
    },

    examples: [
      {
        planets:
          "Sol quadratura Lua",

        symbol:
          "☀ □ ☽",

        keywords:
          "Identidade • emoções • conflito interior",

        text:
          "O Sol em quadratura com a Lua pode criar tensão entre a identidade consciente e as necessidades emocionais. A pessoa deve aprender a agir sem ignorar o que realmente sente.",
      },

      {
        planets:
          "Mercúrio quadratura Saturno",

        symbol:
          "☿ □ ♄",

        keywords:
          "Pensamento • contenção • disciplina mental",

        text:
          "Mercúrio em quadratura com Saturno pode produzir um pensamento prudente, exigente ou crítico. Esse aspecto pode dificultar a expressão espontânea, mas também favorece a concentração e o rigor.",
      },

      {
        planets:
          "Vênus quadratura Plutão",

        symbol:
          "♀ □ ♇",

        keywords:
          "Relacionamentos • intensidade • transformação",

        text:
          "Vênus em quadratura com Plutão pode intensificar os sentimentos, o apego e as relações de poder. Exige aprender a amar sem tentar controlar ou possuir.",
      },

      {
        planets:
          "Marte quadratura Saturno",

        symbol:
          "♂ □ ♄",

        keywords:
          "Ação • frustração • resistência",

        text:
          "Marte em quadratura com Saturno pode dar a sensação de avançar com o freio puxado. A frustração pode ser forte, mas esse aspecto costuma desenvolver grande perseverança.",
      },

      {
        planets:
          "Júpiter quadratura Netuno",

        symbol:
          "♃ □ ♆",

        keywords:
          "Expansão • ideal • discernimento",

        text:
          "Júpiter em quadratura com Netuno pode favorecer grandes aspirações, mas também expectativas pouco realistas. A pessoa deve aprender a unir inspiração e discernimento.",
      },

      {
        planets:
          "Lua quadratura Urano",

        symbol:
          "☽ □ ♅",

        keywords:
          "Emoções • liberdade • imprevisibilidade",

        text:
          "A Lua em quadratura com Urano pode tornar as reações emocionais rápidas e mutáveis. A necessidade de segurança costuma entrar em conflito com o desejo de liberdade.",
      },
    ],

    signsSection: {
      title:
        "A quadratura nos signos zodiacais",

      introduction:
        "As quadraturas costumam se formar entre signos pertencentes à mesma modalidade. Eles compartilham uma forma semelhante de agir, mas expressam elementos e necessidades diferentes.",

      modes: [
        {
          label:
            "Signos cardinais",

          signs:
            "Áries, Câncer, Libra, Capricórnio",

          text:
            "As tensões costumam envolver iniciativa, decisões, relacionamentos, segurança e responsabilidades.",
        },

        {
          label:
            "Signos fixos",

          signs:
            "Touro, Leão, Escorpião, Aquário",

          text:
            "Os desafios envolvem estabilidade, vontade, apego, controle e dificuldade para mudar de direção.",
        },

        {
          label:
            "Signos mutáveis",

          signs:
            "Gêmeos, Virgem, Sagitário, Peixes",

          text:
            "As tensões se manifestam nas ideias, na adaptação, nas crenças, na organização e na necessidade de soltar.",
        },
      ],
    },

    housesSection: {
      title:
        "A quadratura nas casas astrológicas",

      introduction:
        "As casas envolvidas indicam as áreas da vida em que a fricção e a necessidade de evolução se manifestam com maior intensidade.",

      houses: [
        {
          title:
            "Casas pessoais",

          text:
            "As casas 1 a 3 podem destacar a identidade, os recursos, a confiança e a comunicação.",
        },

        {
          title:
            "Casas íntimas",

          text:
            "As casas 4 a 6 podem criar desafios relacionados à família, às emoções, à criatividade, ao trabalho ou à saúde.",
        },

        {
          title:
            "Casas relacionais",

          text:
            "As casas 7 a 9 podem criar tensão nos relacionamentos, na intimidade, nas crenças e na busca de sentido.",
        },

        {
          title:
            "Casas coletivas",

          text:
            "As casas 10 a 12 podem envolver a carreira, os projetos, a vida social, os sonhos e o mundo interior.",
        },
      ],
    },

    grandSquare: {
      kicker:
        "Uma estrutura de tensão",

      title:
        "O que é uma grande cruz na astrologia?",

      subtitle:
        "Quatro planetas conectados por quadraturas",

      paragraphs: [
        "Uma grande cruz é uma configuração astrológica formada quando quatro planetas criam várias quadraturas e duas oposições no mapa natal.",

        "Essa configuração concentra uma forte tensão em diversas áreas da vida. A pessoa pode se sentir puxada em diferentes direções e precisar agir constantemente para manter o equilíbrio.",

        "Apesar de seus desafios, a grande cruz pode proporcionar muita energia, forte capacidade de resistência e importante potencial de realização.",
      ],
    },

    tSquare: {
      kicker:
        "Uma figura de evolução",

      title:
        "O que é uma quadratura em T?",

      subtitle:
        "Uma oposição ativada por um terceiro planeta",

      paragraphs: [
        "Uma quadratura em T se forma quando um planeta está em quadratura com os dois planetas de uma oposição.",

        "O planeta situado no ápice da quadratura em T concentra grande parte da tensão. Ele costuma se tornar um ponto essencial de ação, desafio e desenvolvimento no mapa natal.",

        "Essa configuração impulsiona a pessoa a agir e encontrar uma maneira mais construtiva de utilizar sua energia.",
      ],
    },

    transits: {
      title:
        "A quadratura nos trânsitos astrológicos",

      paragraphs: [
        "Uma quadratura também pode se formar quando um planeta em movimento cria um ângulo de 90 graus com um planeta do seu mapa natal.",

        "Esse trânsito pode corresponder a um período de pressão, decisão, esforço ou mudança. Ele costuma destacar uma situação que não pode mais ser ignorada.",

        "As quadraturas de Saturno podem exigir mais disciplina e responsabilidade, enquanto as de Urano podem impulsionar o rompimento com uma estrutura que se tornou rígida demais.",
      ],
    },

    cta: {
      kicker:
        "Descubra seu mapa natal",

      title:
        "Você tem uma quadratura importante no seu mapa natal?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir seus planetas, suas casas e os principais aspectos do nascimento.",

      button:
        "Ver meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre a quadratura na astrologia",

      items: [
        {
          question:
            "O que é uma quadratura na astrologia?",

          answer:
            "Uma quadratura se forma quando dois planetas estão separados por um ângulo de aproximadamente 90 graus. Ela representa uma tensão dinâmica que impulsiona a pessoa a agir, adaptar-se e desenvolver novas capacidades.",
        },

        {
          question:
            "A quadratura é sempre negativa?",

          answer:
            "Não. A quadratura pode criar frustração ou obstáculos, mas também oferece energia, motivação e um forte potencial de superação.",
        },

        {
          question:
            "Qual orbe deve ser usado para uma quadratura?",

          answer:
            "O orbe varia de acordo com o método astrológico. Uma quadratura costuma ser interpretada com um orbe de até aproximadamente 7 graus, às vezes mais amplo quando o Sol ou a Lua está envolvido.",
        },

        {
          question:
            "Por que a quadratura impulsiona a ação?",

          answer:
            "As funções dos dois planetas não se harmonizam naturalmente. A tensão se torna difícil de ignorar e impulsiona a pessoa a buscar soluções concretas.",
        },

        {
          question:
            "Qual é a diferença entre uma quadratura e uma oposição?",

          answer:
            "A oposição coloca duas forças frente a frente e exige equilíbrio. A quadratura cria mais fricção interior e impulsiona diretamente a ação e a mudança.",
        },

        {
          question:
            "Uma quadratura pode se tornar uma força?",

          answer:
            "Sim. Com o tempo, as quadraturas podem se tornar fontes de coragem, perseverança, competência e domínio pessoal.",
        },

        {
          question:
            "Como saber se tenho uma quadratura no meu mapa natal?",

          answer:
            "Gere seu mapa natal e compare as posições dos planetas. Dois planetas separados por aproximadamente 90 graus podem formar uma quadratura.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegação entre os aspectos astrológicos",

      previous:
        "Aspecto anterior: oposição",

      next:
        "Próximo aspecto: trígono",
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
