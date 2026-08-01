// i18n/pages/astrologie/sagittaire.ts

import type {
  Locale,
} from "@/i18n/config";

export type SagittariusCard = {
  title: string;
  symbol: string;
  text: string;
};

export type SagittariusCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type SagittariusFaqItem = {
  question: string;
  answer: string;
};

export type SagittariusPageText = {
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

  hero: {
    badge: string;
    title: string;
    lead: string;
    createChart: string;
    discover: string;
  };

  personality: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  traitsSection: {
    title: string;
  };

  traits: SagittariusCard[];

  foundations: {
    title: string;

    element: {
      symbol: string;
      title: string;
      text: string;
    };

    modality: {
      symbol: string;
      title: string;
      text: string;
    };

    ruler: {
      symbol: string;
      title: string;
      text: string;
    };
  };

  strengthsSection: {
    title: string;
    strengthsKicker: string;
    strengthsTitle: string;
    strengths: string[];
    challengesKicker: string;
    challengesTitle: string;
    challenges: string[];
  };

  love: {
    title: string;
    paragraphs: string[];
  };

  work: {
    title: string;
    paragraphs: string[];
  };

  placements: {
    title: string;

    sun: {
      symbol: string;
      title: string;
      text: string;
      link: string;
    };

    moon: {
      symbol: string;
      title: string;
      text: string;
      link: string;
    };

    ascendant: {
      symbol: string;
      title: string;
      text: string;
      link: string;
    };
  };

  compatibilitySection: {
    title: string;
    paragraphs: string[];
    titlePrefix: string;
  };

  compatibilities: SagittariusCompatibility[];

  natalChart: {
    title: string;
    paragraphs: string[];

    cta: {
      kicker: string;
      title: string;
      text: string;
      button: string;
    };
  };

  faq: {
    kicker: string;
    title: string;
    items: SagittariusFaqItem[];
  };

  disclaimer: string;
};

export const SAGITTAIRE_TRANSLATIONS:
  Record<
    Locale,
    SagittariusPageText
  > = {
  fr: {
    metadata: {
      title:
        "Sagittaire : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Sagittaire en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Jupiter, élément Feu, Lune et Ascendant Sagittaire.",

      ogTitle:
        "Le Sagittaire en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Sagittaire : caractère, forces, défis, relations, carrière, planète Jupiter et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe du Sagittaire | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Sagittaire, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Sagittaire en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Sagittaire, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    hero: {
      badge:
        "♐ Neuvième signe du zodiaque",

      title:
        "Le Sagittaire en astrologie",

      lead:
        "Le Sagittaire symbolise la liberté, l’exploration, l’optimisme et la recherche de sens. Ce signe de Feu cherche à élargir ses horizons, à découvrir le monde et à vivre selon une vision qui l’inspire.",

      createChart:
        "Créer ma carte du ciel gratuite",

      discover:
        "Découvrir le Sagittaire",
    },

    personality: {
      kicker:
        "Personnalité du Sagittaire",

      title:
        "Que représente le signe du Sagittaire ?",

      paragraphs: [
        "Le Sagittaire est le neuvième signe du zodiaque. Il représente l’expansion, la liberté, les voyages, les grandes idées et la recherche d’un sens plus vaste à l’existence.",

        "Une personne marquée par le Sagittaire cherche généralement à comprendre le monde en vivant de nouvelles expériences. Elle apprécie les découvertes, les apprentissages et les rencontres qui lui permettent d’élargir sa vision.",

        "Cette énergie apporte enthousiasme, courage et confiance. Elle demande toutefois d’apprendre à tenir compte des détails, à mesurer ses paroles et à poursuivre ses engagements même lorsque la nouveauté disparaît.",
      ],
    },

    traitsSection: {
      title:
        "Les grandes caractéristiques du Sagittaire",
    },

    traits: [
      {
        title:
          "La liberté",

        symbol:
          "♐",

        text:
          "Le Sagittaire possède un besoin profond d’espace, de mouvement et d’autonomie. Il cherche à suivre sa propre direction et à découvrir la vie au-delà des limites qui lui sont imposées.",
      },

      {
        title:
          "L’exploration",

        symbol:
          "✦",

        text:
          "Ce signe est attiré par les voyages, les idées nouvelles et les expériences qui élargissent sa compréhension du monde. Il apprend souvent en avançant et en expérimentant.",
      },

      {
        title:
          "L’optimisme",

        symbol:
          "♃",

        text:
          "Le Sagittaire possède généralement une capacité naturelle à voir les possibilités. Même après une difficulté, il cherche un sens, une leçon ou une nouvelle occasion de progresser.",
      },
    ],

    foundations: {
      title:
        "Élément, modalité et planète maîtresse",

      element: {
        symbol:
          "🔥",

        title:
          "Élément Feu",

        text:
          "Le Feu apporte enthousiasme, spontanéité, courage et désir d’agir. Il pousse le Sagittaire à avancer, à explorer et à poursuivre ce qui l’inspire.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalité mutable",

        text:
          "La modalité mutable favorise l’adaptation, l’ouverture et la capacité à changer de direction. Elle renforce la souplesse et la curiosité du Sagittaire.",
      },

      ruler: {
        symbol:
          "♃",

        title:
          "Planète Jupiter",

        text:
          "Jupiter représente l’expansion, la confiance, la connaissance et la recherche de sens. Elle renforce le besoin du Sagittaire de grandir et de dépasser ses limites.",
      },
    },

    strengthsSection: {
      title:
        "Les forces et les défis du Sagittaire",

      strengthsKicker:
        "Forces naturelles",

      strengthsTitle:
        "Ce que le Sagittaire apporte",

      strengths: [
        "Optimisme",
        "Sincérité",
        "Enthousiasme",
        "Ouverture d’esprit",
        "Courage",
        "Goût de l’aventure",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Ce que le Sagittaire apprend",

      challenges: [
        "Impatience",
        "Manque de tact",
        "Difficulté avec les contraintes",
        "Tendance à se disperser",
        "Promesses parfois excessives",
        "Besoin constant de nouveauté",
      ],
    },

    love: {
      title:
        "Le Sagittaire en amour",

      paragraphs: [
        "En amour, le Sagittaire recherche généralement une relation vivante, sincère et ouverte. Il a besoin de sentir qu’il peut rester lui-même, explorer ses intérêts et conserver une certaine liberté.",

        "Il apprécie souvent les relations fondées sur l’humour, la complicité, les projets et les découvertes partagées. Lorsqu’il se sent libre et compris, il peut être généreux, enthousiaste et profondément encourageant.",

        "Son principal défi consiste à ne pas fuir lorsque la relation demande davantage de profondeur ou de constance. Une relation durable lui demande de concilier liberté personnelle et engagement émotionnel.",
      ],
    },

    work: {
      title:
        "Le Sagittaire au travail",

      paragraphs: [
        "Dans la vie professionnelle, le Sagittaire se distingue souvent par son enthousiasme, sa vision globale et sa capacité à motiver les personnes qui l’entourent.",

        "Il peut être particulièrement efficace dans les domaines liés aux voyages, à l’enseignement, aux langues, à la communication, au droit, au sport, au tourisme, à l’entrepreneuriat ou à la transmission des connaissances.",

        "Les environnements trop rigides ou répétitifs peuvent rapidement réduire sa motivation. Il gagne à organiser ses idées, à respecter les échéances et à terminer les projets déjà commencés.",
      ],
    },

    placements: {
      title:
        "Soleil, Lune et Ascendant en Sagittaire",

      sun: {
        symbol:
          "☀️",

        title:
          "Soleil en Sagittaire",

        text:
          "Le Soleil en Sagittaire construit son identité par la liberté, l’exploration, l’optimisme et la recherche d’une vision inspirante.",

        link:
          "Comprendre le Soleil",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lune en Sagittaire",

        text:
          "La Lune en Sagittaire a besoin d’espace, de mouvement, d’espoir et de nouvelles perspectives pour retrouver son équilibre émotionnel.",

        link:
          "Comprendre la Lune",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendant Sagittaire",

        text:
          "L’Ascendant Sagittaire donne une présence spontanée, ouverte et enthousiaste. Il aborde généralement la vie comme une aventure riche en possibilités.",

        link:
          "Comprendre l’Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Les compatibilités du Sagittaire",

      paragraphs: [
        "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

        "Certaines associations peuvent néanmoins sembler naturellement plus fluides lorsqu’elles partagent un besoin de liberté, de mouvement, d’optimisme et de découvertes.",
      ],

      titlePrefix:
        "Sagittaire et",
    },

    compatibilities: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Le Bélier et le Sagittaire partagent une énergie spontanée, courageuse et dynamique. Leur relation peut être passionnée, active et remplie de projets.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Le Lion apprécie l’enthousiasme et la franchise du Sagittaire. Ensemble, ils peuvent partager une relation chaleureuse, créative et inspirante.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "La Balance apporte charme, diplomatie et sens de la relation. Le Sagittaire lui offre mouvement, optimisme et ouverture vers de nouvelles expériences.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Le Verseau et le Sagittaire partagent un grand besoin de liberté, d’indépendance et de découverte. Leur lien peut être original, stimulant et peu conventionnel.",
      },
    ],

    natalChart: {
      title:
        "Le Sagittaire dans votre thème natal",

      paragraphs: [
        "Le Sagittaire ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Sagittaire dans une maison astrologique particulière.",

        "Cette maison montre le domaine de vie dans lequel vous cherchez à explorer, à apprendre, à élargir vos horizons ou à trouver un sens plus profond. La présence de planètes en Sagittaire renforce également cette énergie.",
      ],

      cta: {
        kicker:
          "Découvrez votre thème natal",

        title:
          "Où se trouve le Sagittaire dans votre carte du ciel ?",

        text:
          "Générez gratuitement votre carte du ciel pour découvrir vos signes, vos maisons astrologiques, votre Ascendant et les positions de vos planètes.",

        button:
          "Créer ma carte du ciel",
      },
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur le Sagittaire",

      items: [
        {
          question:
            "Quelles sont les principales qualités du Sagittaire ?",

          answer:
            "Le Sagittaire est souvent associé à l’optimisme, à l’enthousiasme, à la sincérité, à l’ouverture d’esprit, au courage et au goût de l’aventure.",
        },

        {
          question:
            "Quels sont les principaux défis du Sagittaire ?",

          answer:
            "Le Sagittaire peut parfois manquer de tact, devenir impatient ou avoir de la difficulté à respecter les contraintes. Son évolution passe par davantage de constance, d’écoute et de réalisme.",
        },

        {
          question:
            "Quelle planète gouverne le Sagittaire ?",

          answer:
            "Le Sagittaire est gouverné par Jupiter, planète traditionnellement associée à l’expansion, à la croissance, à la connaissance, aux voyages, à la confiance et à la recherche de sens.",
        },

        {
          question:
            "Quel est l’élément du Sagittaire ?",

          answer:
            "Le Sagittaire appartient à l’élément Feu. Cet élément est lié à l’action, à l’enthousiasme, à la créativité, à l’instinct et au désir d’avancer.",
        },

        {
          question:
            "Comment savoir si le Sagittaire est important dans mon thème natal ?",

          answer:
            "Le Sagittaire peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par le Sagittaire.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Sagittarius: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Sagittarius in astrology: personality, strengths, challenges, love, career, compatibility, Jupiter, the Fire element, Sagittarius Moon and Sagittarius Rising.",

      ogTitle:
        "Sagittarius in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Sagittarius: personality, strengths, challenges, relationships, career, Jupiter and main astrological compatibilities.",

      twitterTitle:
        "The Sagittarius Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Sagittarius personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Sagittarius in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Sagittarius, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    hero: {
      badge:
        "♐ Ninth sign of the zodiac",

      title:
        "Sagittarius in Astrology",

      lead:
        "Sagittarius symbolizes freedom, exploration, optimism and the search for meaning. This Fire sign seeks to broaden its horizons, discover the world and live according to an inspiring vision.",

      createChart:
        "Create my free birth chart",

      discover:
        "Discover Sagittarius",
    },

    personality: {
      kicker:
        "Sagittarius personality",

      title:
        "What does Sagittarius represent?",

      paragraphs: [
        "Sagittarius is the ninth sign of the zodiac. It represents expansion, freedom, travel, big ideas and the search for a broader meaning in life.",

        "A person strongly influenced by Sagittarius generally seeks to understand the world through new experiences. They appreciate discoveries, learning and encounters that allow them to broaden their perspective.",

        "This energy brings enthusiasm, courage and confidence. However, it requires learning to consider details, measure words and continue commitments even after the excitement of novelty fades.",
      ],
    },

    traitsSection: {
      title:
        "The main characteristics of Sagittarius",
    },

    traits: [
      {
        title:
          "Freedom",

        symbol:
          "♐",

        text:
          "Sagittarius has a deep need for space, movement and autonomy. It seeks to follow its own direction and discover life beyond imposed limits.",
      },

      {
        title:
          "Exploration",

        symbol:
          "✦",

        text:
          "This sign is attracted to travel, new ideas and experiences that broaden its understanding of the world. It often learns by moving forward and experimenting.",
      },

      {
        title:
          "Optimism",

        symbol:
          "♃",

        text:
          "Sagittarius generally possesses a natural ability to see possibilities. Even after difficulty, it seeks meaning, a lesson or a new opportunity to progress.",
      },
    ],

    foundations: {
      title:
        "Element, modality and ruling planet",

      element: {
        symbol:
          "🔥",

        title:
          "Fire element",

        text:
          "Fire brings enthusiasm, spontaneity, courage and the desire to act. It encourages Sagittarius to move forward, explore and pursue what inspires them.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Mutable modality",

        text:
          "The mutable modality encourages adaptation, openness and the ability to change direction. It strengthens Sagittarius flexibility and curiosity.",
      },

      ruler: {
        symbol:
          "♃",

        title:
          "Jupiter",

        text:
          "Jupiter represents expansion, confidence, knowledge and the search for meaning. It strengthens Sagittarius’ need to grow and move beyond limits.",
      },
    },

    strengthsSection: {
      title:
        "Sagittarius strengths and challenges",

      strengthsKicker:
        "Natural strengths",

      strengthsTitle:
        "What Sagittarius brings",

      strengths: [
        "Optimism",
        "Sincerity",
        "Enthusiasm",
        "Open-mindedness",
        "Courage",
        "Love of adventure",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "What Sagittarius learns",

      challenges: [
        "Impatience",
        "Lack of tact",
        "Difficulty with restrictions",
        "Tendency to become scattered",
        "Excessive promises",
        "Constant need for novelty",
      ],
    },

    love: {
      title:
        "Sagittarius in love",

      paragraphs: [
        "In love, Sagittarius generally seeks a lively, sincere and open relationship. They need to feel free to remain themselves, explore their interests and maintain some independence.",

        "They often appreciate relationships based on humor, companionship, projects and shared discoveries. When they feel free and understood, they may be generous, enthusiastic and deeply encouraging.",

        "Their main challenge is avoiding escape when the relationship requires greater depth or consistency. A lasting relationship asks Sagittarius to balance personal freedom with emotional commitment.",
      ],
    },

    work: {
      title:
        "Sagittarius at work",

      paragraphs: [
        "In professional life, Sagittarius often stands out through enthusiasm, broad vision and the ability to motivate the people around them.",

        "They may be particularly effective in fields connected with travel, teaching, languages, communication, law, sports, tourism, entrepreneurship or the transmission of knowledge.",

        "Environments that are too rigid or repetitive may quickly reduce motivation. Sagittarius benefits from organizing ideas, respecting deadlines and completing projects already started.",
      ],
    },

    placements: {
      title:
        "Sagittarius Sun, Moon and Rising",

      sun: {
        symbol:
          "☀️",

        title:
          "Sun in Sagittarius",

        text:
          "The Sun in Sagittarius builds identity through freedom, exploration, optimism and the search for an inspiring vision.",

        link:
          "Understand the Sun",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Moon in Sagittarius",

        text:
          "The Moon in Sagittarius needs space, movement, hope and new perspectives to restore emotional balance.",

        link:
          "Understand the Moon",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Sagittarius Rising",

        text:
          "Sagittarius Rising gives a spontaneous, open and enthusiastic presence. It generally approaches life as an adventure filled with possibilities.",

        link:
          "Understand the Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Sagittarius compatibility",

      paragraphs: [
        "Astrological compatibility is never based only on the Sun sign. The Moon, Venus, Mars, the Ascendant and aspects between two charts provide essential information.",

        "Some combinations may nevertheless feel naturally more fluid when they share a need for freedom, movement, optimism and discovery.",
      ],

      titlePrefix:
        "Sagittarius and",
    },

    compatibilities: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries and Sagittarius share spontaneous, courageous and dynamic energy. Their relationship may be passionate, active and filled with projects.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo appreciates Sagittarius’ enthusiasm and honesty. Together, they may share a warm, creative and inspiring relationship.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra brings charm, diplomacy and relationship awareness. Sagittarius offers movement, optimism and openness to new experiences.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Aquarius and Sagittarius share a strong need for freedom, independence and discovery. Their bond may be original, stimulating and unconventional.",
      },
    ],

    natalChart: {
      title:
        "Sagittarius in your birth chart",

      paragraphs: [
        "Sagittarius does not concern only people born under this sign. Every birth chart contains Sagittarius in a particular astrological house.",

        "This house shows the area of life in which you seek to explore, learn, broaden your horizons or find deeper meaning. The presence of planets in Sagittarius also strengthens this energy.",
      ],

      cta: {
        kicker:
          "Discover your birth chart",

        title:
          "Where is Sagittarius located in your birth chart?",

        text:
          "Generate your free birth chart to discover your signs, astrological houses, Ascendant and planetary positions.",

        button:
          "Create my birth chart",
      },
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Sagittarius",

      items: [
        {
          question:
            "What are the main qualities of Sagittarius?",

          answer:
            "Sagittarius is often associated with optimism, enthusiasm, sincerity, open-mindedness, courage and a love of adventure.",
        },

        {
          question:
            "What are the main challenges of Sagittarius?",

          answer:
            "Sagittarius may sometimes lack tact, become impatient or struggle with restrictions. Growth involves greater consistency, listening and realism.",
        },

        {
          question:
            "Which planet rules Sagittarius?",

          answer:
            "Sagittarius is ruled by Jupiter, traditionally associated with expansion, growth, knowledge, travel, confidence and the search for meaning.",
        },

        {
          question:
            "What is the element of Sagittarius?",

          answer:
            "Sagittarius belongs to the Fire element. Fire is associated with action, enthusiasm, creativity, instinct and the desire to move forward.",
        },

        {
          question:
            "How can I know whether Sagittarius is important in my birth chart?",

          answer:
            "Sagittarius may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals the astrological house occupied by Sagittarius.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Sagitario: personalidad, amor, trabajo y compatibilidad | Luna Astralis",

      description:
        "Descubre Sagitario en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidad, Júpiter, elemento Fuego, Luna y Ascendente Sagitario.",

      ogTitle:
        "Sagitario en astrología: personalidad, amor y compatibilidad",

      ogDescription:
        "Guía completa de Sagitario: personalidad, fortalezas, desafíos, relaciones, carrera, Júpiter y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Sagitario | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Sagitario, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Sagitario en astrología: personalidad, amor, trabajo y compatibilidad",

      description:
        "Guía completa sobre Sagitario, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    hero: {
      badge:
        "♐ Noveno signo del zodiaco",

      title:
        "Sagitario en astrología",

      lead:
        "Sagitario simboliza la libertad, la exploración, el optimismo y la búsqueda de sentido. Este signo de Fuego busca ampliar sus horizontes, descubrir el mundo y vivir según una visión que lo inspire.",

      createChart:
        "Crear mi carta natal gratis",

      discover:
        "Descubrir Sagitario",
    },

    personality: {
      kicker:
        "Personalidad de Sagitario",

      title:
        "¿Qué representa el signo de Sagitario?",

      paragraphs: [
        "Sagitario es el noveno signo del zodiaco. Representa la expansión, la libertad, los viajes, las grandes ideas y la búsqueda de un sentido más amplio de la existencia.",

        "Una persona influenciada por Sagitario suele intentar comprender el mundo mediante nuevas experiencias. Disfruta de los descubrimientos, los aprendizajes y los encuentros que le permiten ampliar su visión.",

        "Esta energía aporta entusiasmo, valentía y confianza. Sin embargo, exige aprender a prestar atención a los detalles, medir las palabras y mantener los compromisos incluso cuando desaparece la novedad.",
      ],
    },

    traitsSection: {
      title:
        "Las principales características de Sagitario",
    },

    traits: [
      {
        title:
          "La libertad",

        symbol:
          "♐",

        text:
          "Sagitario posee una profunda necesidad de espacio, movimiento y autonomía. Busca seguir su propia dirección y descubrir la vida más allá de los límites que se le imponen.",
      },

      {
        title:
          "La exploración",

        symbol:
          "✦",

        text:
          "Este signo se siente atraído por los viajes, las ideas nuevas y las experiencias que amplían su comprensión del mundo. Suele aprender avanzando y experimentando.",
      },

      {
        title:
          "El optimismo",

        symbol:
          "♃",

        text:
          "Sagitario suele poseer una capacidad natural para ver las posibilidades. Incluso después de una dificultad, busca un sentido, una lección o una nueva oportunidad para avanzar.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidad y planeta regente",

      element: {
        symbol:
          "🔥",

        title:
          "Elemento Fuego",

        text:
          "El Fuego aporta entusiasmo, espontaneidad, valentía y deseo de actuar. Impulsa a Sagitario a avanzar, explorar y perseguir aquello que lo inspira.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidad mutable",

        text:
          "La modalidad mutable favorece la adaptación, la apertura y la capacidad de cambiar de dirección. Refuerza la flexibilidad y la curiosidad de Sagitario.",
      },

      ruler: {
        symbol:
          "♃",

        title:
          "Planeta Júpiter",

        text:
          "Júpiter representa la expansión, la confianza, el conocimiento y la búsqueda de sentido. Refuerza la necesidad de Sagitario de crecer y superar sus límites.",
      },
    },

    strengthsSection: {
      title:
        "Las fortalezas y los desafíos de Sagitario",

      strengthsKicker:
        "Fortalezas naturales",

      strengthsTitle:
        "Lo que aporta Sagitario",

      strengths: [
        "Optimismo",
        "Sinceridad",
        "Entusiasmo",
        "Mentalidad abierta",
        "Valentía",
        "Gusto por la aventura",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Lo que aprende Sagitario",

      challenges: [
        "Impaciencia",
        "Falta de tacto",
        "Dificultad con las restricciones",
        "Tendencia a dispersarse",
        "Promesas a veces excesivas",
        "Necesidad constante de novedad",
      ],
    },

    love: {
      title:
        "Sagitario en el amor",

      paragraphs: [
        "En el amor, Sagitario suele buscar una relación viva, sincera y abierta. Necesita sentir que puede seguir siendo él mismo, explorar sus intereses y conservar cierta libertad.",

        "Suele apreciar las relaciones basadas en el humor, la complicidad, los proyectos y los descubrimientos compartidos. Cuando se siente libre y comprendido, puede ser generoso, entusiasta y profundamente alentador.",

        "Su principal desafío consiste en no huir cuando la relación exige mayor profundidad o constancia. Una relación duradera le pide equilibrar la libertad personal con el compromiso emocional.",
      ],
    },

    work: {
      title:
        "Sagitario en el trabajo",

      paragraphs: [
        "En la vida profesional, Sagitario suele destacar por su entusiasmo, su visión global y su capacidad para motivar a las personas que lo rodean.",

        "Puede ser especialmente eficaz en ámbitos relacionados con los viajes, la enseñanza, los idiomas, la comunicación, el derecho, el deporte, el turismo, el emprendimiento o la transmisión del conocimiento.",

        "Los entornos demasiado rígidos o repetitivos pueden reducir rápidamente su motivación. Sagitario se beneficia de organizar sus ideas, respetar los plazos y terminar los proyectos ya iniciados.",
      ],
    },

    placements: {
      title:
        "Sol, Luna y Ascendente en Sagitario",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol en Sagitario",

        text:
          "El Sol en Sagitario construye su identidad mediante la libertad, la exploración, el optimismo y la búsqueda de una visión inspiradora.",

        link:
          "Comprender el Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna en Sagitario",

        text:
          "La Luna en Sagitario necesita espacio, movimiento, esperanza y nuevas perspectivas para recuperar su equilibrio emocional.",

        link:
          "Comprender la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Sagitario",

        text:
          "El Ascendente Sagitario aporta una presencia espontánea, abierta y entusiasta. Suele abordar la vida como una aventura llena de posibilidades.",

        link:
          "Comprender el Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Las compatibilidades de Sagitario",

      paragraphs: [
        "La compatibilidad astrológica nunca se basa únicamente en el signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre las dos cartas aportan información esencial.",

        "Sin embargo, algunas combinaciones pueden parecer naturalmente más fluidas cuando comparten una necesidad de libertad, movimiento, optimismo y descubrimiento.",
      ],

      titlePrefix:
        "Sagitario y",
    },

    compatibilities: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries y Sagitario comparten una energía espontánea, valiente y dinámica. Su relación puede ser apasionada, activa y llena de proyectos.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo aprecia el entusiasmo y la sinceridad de Sagitario. Juntos pueden compartir una relación cálida, creativa e inspiradora.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra aporta encanto, diplomacia y sentido de la relación. Sagitario ofrece movimiento, optimismo y apertura hacia nuevas experiencias.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Acuario y Sagitario comparten una gran necesidad de libertad, independencia y descubrimiento. Su vínculo puede ser original, estimulante y poco convencional.",
      },
    ],

    natalChart: {
      title:
        "Sagitario en tu carta natal",

      paragraphs: [
        "Sagitario no se relaciona únicamente con las personas nacidas bajo este signo. Cada carta natal contiene Sagitario en una casa astrológica determinada.",

        "Esta casa muestra el ámbito de vida en el que buscas explorar, aprender, ampliar tus horizontes o encontrar un sentido más profundo. La presencia de planetas en Sagitario también refuerza esta energía.",
      ],

      cta: {
        kicker:
          "Descubre tu carta natal",

        title:
          "¿Dónde se encuentra Sagitario en tu carta natal?",

        text:
          "Genera gratuitamente tu carta natal para descubrir tus signos, casas astrológicas, Ascendente y posiciones planetarias.",

        button:
          "Crear mi carta natal",
      },
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Sagitario",

      items: [
        {
          question:
            "¿Cuáles son las principales cualidades de Sagitario?",

          answer:
            "Sagitario suele asociarse con el optimismo, el entusiasmo, la sinceridad, la mentalidad abierta, la valentía y el gusto por la aventura.",
        },

        {
          question:
            "¿Cuáles son los principales desafíos de Sagitario?",

          answer:
            "Sagitario puede carecer de tacto, volverse impaciente o tener dificultades con las restricciones. Su evolución requiere mayor constancia, escucha y realismo.",
        },

        {
          question:
            "¿Qué planeta gobierna Sagitario?",

          answer:
            "Sagitario está gobernado por Júpiter, planeta tradicionalmente asociado con la expansión, el crecimiento, el conocimiento, los viajes, la confianza y la búsqueda de sentido.",
        },

        {
          question:
            "¿Cuál es el elemento de Sagitario?",

          answer:
            "Sagitario pertenece al elemento Fuego. Este elemento se relaciona con la acción, el entusiasmo, la creatividad, el instinto y el deseo de avanzar.",
        },

        {
          question:
            "¿Cómo saber si Sagitario es importante en mi carta natal?",

          answer:
            "Sagitario puede ser importante si tu Sol, Luna, Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también revela la casa astrológica ocupada por Sagitario.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Schütze: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Schützen in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Jupiter, Feuerelement, Mond und Aszendent Schütze.",

      ogTitle:
        "Schütze in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Schützen: Persönlichkeit, Stärken, Herausforderungen, Beziehungen, Beruf, Jupiter und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Schütze | Luna Astralis",

      twitterDescription:
        "Entdecken Sie Persönlichkeit, Stärken, Herausforderungen, Beziehungen und astrologische Kompatibilität des Schützen.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Schütze in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Schützen, seinen Stärken, Herausforderungen, Beziehungen, seinem Beruf und seinen wichtigsten astrologischen Eigenschaften.",
    },

    hero: {
      badge:
        "♐ Neuntes Tierkreiszeichen",

      title:
        "Der Schütze in der Astrologie",

      lead:
        "Der Schütze symbolisiert Freiheit, Entdeckung, Optimismus und Sinnsuche. Dieses Feuerzeichen möchte seinen Horizont erweitern, die Welt entdecken und nach einer inspirierenden Vision leben.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      discover:
        "Den Schützen entdecken",
    },

    personality: {
      kicker:
        "Persönlichkeit des Schützen",

      title:
        "Was bedeutet das Zeichen Schütze?",

      paragraphs: [
        "Der Schütze ist das neunte Zeichen des Tierkreises. Er steht für Expansion, Freiheit, Reisen, große Ideen und die Suche nach einem umfassenderen Sinn des Lebens.",

        "Ein stark vom Schützen geprägter Mensch versucht meist, die Welt durch neue Erfahrungen zu verstehen. Er schätzt Entdeckungen, Lernen und Begegnungen, die seine Sichtweise erweitern.",

        "Diese Energie bringt Begeisterung, Mut und Vertrauen. Sie verlangt jedoch, Details zu berücksichtigen, Worte sorgfältiger zu wählen und Verpflichtungen auch dann weiterzuführen, wenn die anfängliche Neuheit verschwindet.",
      ],
    },

    traitsSection: {
      title:
        "Die wichtigsten Eigenschaften des Schützen",
    },

    traits: [
      {
        title:
          "Freiheit",

        symbol:
          "♐",

        text:
          "Der Schütze besitzt ein tiefes Bedürfnis nach Raum, Bewegung und Unabhängigkeit. Er möchte seinem eigenen Weg folgen und das Leben jenseits auferlegter Grenzen entdecken.",
      },

      {
        title:
          "Entdeckung",

        symbol:
          "✦",

        text:
          "Dieses Zeichen fühlt sich von Reisen, neuen Ideen und Erfahrungen angezogen, die sein Verständnis der Welt erweitern. Es lernt häufig durch Handeln und Ausprobieren.",
      },

      {
        title:
          "Optimismus",

        symbol:
          "♃",

        text:
          "Der Schütze besitzt meist eine natürliche Fähigkeit, Möglichkeiten zu erkennen. Selbst nach Schwierigkeiten sucht er nach Sinn, einer Lektion oder einer neuen Gelegenheit zur Weiterentwicklung.",
      },
    ],

    foundations: {
      title:
        "Element, Modalität und Herrscherplanet",

      element: {
        symbol:
          "🔥",

        title:
          "Element Feuer",

        text:
          "Feuer bringt Begeisterung, Spontaneität, Mut und Handlungswillen. Es treibt den Schützen dazu an, voranzugehen, zu entdecken und dem zu folgen, was ihn inspiriert.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Veränderliche Modalität",

        text:
          "Die veränderliche Modalität fördert Anpassung, Offenheit und die Fähigkeit, die Richtung zu wechseln. Sie stärkt die Flexibilität und Neugier des Schützen.",
      },

      ruler: {
        symbol:
          "♃",

        title:
          "Planet Jupiter",

        text:
          "Jupiter steht für Expansion, Vertrauen, Wissen und Sinnsuche. Er verstärkt das Bedürfnis des Schützen, zu wachsen und seine Grenzen zu überschreiten.",
      },
    },

    strengthsSection: {
      title:
        "Stärken und Herausforderungen des Schützen",

      strengthsKicker:
        "Natürliche Stärken",

      strengthsTitle:
        "Was der Schütze einbringt",

      strengths: [
        "Optimismus",
        "Aufrichtigkeit",
        "Begeisterung",
        "Offenheit",
        "Mut",
        "Abenteuerlust",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Was der Schütze lernt",

      challenges: [
        "Ungeduld",
        "Mangel an Taktgefühl",
        "Schwierigkeit mit Einschränkungen",
        "Neigung zur Zerstreuung",
        "Übertriebene Versprechen",
        "Ständiges Bedürfnis nach Neuem",
      ],
    },

    love: {
      title:
        "Der Schütze in der Liebe",

      paragraphs: [
        "In der Liebe sucht der Schütze meist eine lebendige, aufrichtige und offene Beziehung. Er muss spüren, dass er er selbst bleiben, seinen Interessen folgen und eine gewisse Freiheit behalten kann.",

        "Er schätzt häufig Beziehungen, die auf Humor, Verbundenheit, gemeinsamen Projekten und Entdeckungen beruhen. Wenn er sich frei und verstanden fühlt, kann er großzügig, begeistert und sehr ermutigend sein.",

        "Seine größte Herausforderung besteht darin, nicht zu fliehen, wenn eine Beziehung mehr Tiefe oder Beständigkeit verlangt. Eine dauerhafte Verbindung erfordert ein Gleichgewicht zwischen persönlicher Freiheit und emotionalem Engagement.",
      ],
    },

    work: {
      title:
        "Der Schütze im Beruf",

      paragraphs: [
        "Im Berufsleben zeichnet sich der Schütze häufig durch Begeisterung, Weitblick und die Fähigkeit aus, andere Menschen zu motivieren.",

        "Er kann besonders erfolgreich in Bereichen sein, die mit Reisen, Unterricht, Sprachen, Kommunikation, Recht, Sport, Tourismus, Unternehmertum oder Wissensvermittlung verbunden sind.",

        "Zu starre oder wiederholende Umgebungen können seine Motivation schnell verringern. Der Schütze profitiert davon, seine Ideen zu organisieren, Fristen einzuhalten und bereits begonnene Projekte zu beenden.",
      ],
    },

    placements: {
      title:
        "Sonne, Mond und Aszendent im Schützen",

      sun: {
        symbol:
          "☀️",

        title:
          "Sonne im Schützen",

        text:
          "Die Sonne im Schützen entwickelt ihre Identität durch Freiheit, Entdeckung, Optimismus und die Suche nach einer inspirierenden Vision.",

        link:
          "Die Sonne verstehen",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Mond im Schützen",

        text:
          "Der Mond im Schützen braucht Raum, Bewegung, Hoffnung und neue Perspektiven, um sein emotionales Gleichgewicht wiederzufinden.",

        link:
          "Den Mond verstehen",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Aszendent Schütze",

        text:
          "Der Aszendent Schütze verleiht eine spontane, offene und begeisterte Ausstrahlung. Er betrachtet das Leben meist als ein Abenteuer voller Möglichkeiten.",

        link:
          "Den Aszendenten verstehen",
      },
    },

    compatibilitySection: {
      title:
        "Die Kompatibilität des Schützen",

      paragraphs: [
        "Astrologische Kompatibilität beruht niemals nur auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen zwei Horoskopen liefern wichtige zusätzliche Informationen.",

        "Bestimmte Verbindungen können sich dennoch besonders fließend anfühlen, wenn beide Seiten ein Bedürfnis nach Freiheit, Bewegung, Optimismus und Entdeckung teilen.",
      ],

      titlePrefix:
        "Schütze und",
    },

    compatibilities: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Widder und Schütze teilen spontane, mutige und dynamische Energie. Ihre Beziehung kann leidenschaftlich, aktiv und voller gemeinsamer Projekte sein.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Der Löwe schätzt die Begeisterung und Aufrichtigkeit des Schützen. Gemeinsam können sie eine warme, kreative und inspirierende Beziehung führen.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Die Waage bringt Charme, Diplomatie und Beziehungssinn ein. Der Schütze bietet Bewegung, Optimismus und Offenheit für neue Erfahrungen.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Wassermann und Schütze teilen ein starkes Bedürfnis nach Freiheit, Unabhängigkeit und Entdeckung. Ihre Verbindung kann originell, anregend und unkonventionell sein.",
      },
    ],

    natalChart: {
      title:
        "Der Schütze in Ihrem Geburtshoroskop",

      paragraphs: [
        "Der Schütze betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Schützen in einem bestimmten astrologischen Haus.",

        "Dieses Haus zeigt den Lebensbereich, in dem Sie entdecken, lernen, Ihren Horizont erweitern oder einen tieferen Sinn finden möchten. Planeten im Schützen verstärken diese Energie zusätzlich.",
      ],

      cta: {
        kicker:
          "Entdecken Sie Ihr Geburtshoroskop",

        title:
          "Wo befindet sich der Schütze in Ihrem Geburtshoroskop?",

        text:
          "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, astrologischen Häuser, Ihren Aszendenten und die Positionen Ihrer Planeten.",

        button:
          "Mein Geburtshoroskop erstellen",
      },
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zum Schützen",

      items: [
        {
          question:
            "Was sind die wichtigsten Stärken des Schützen?",

          answer:
            "Der Schütze wird häufig mit Optimismus, Begeisterung, Aufrichtigkeit, Offenheit, Mut und Abenteuerlust verbunden.",
        },

        {
          question:
            "Was sind die wichtigsten Herausforderungen des Schützen?",

          answer:
            "Der Schütze kann manchmal taktlos, ungeduldig oder unzufrieden mit Einschränkungen sein. Seine Entwicklung erfordert mehr Beständigkeit, Zuhören und Realismus.",
        },

        {
          question:
            "Welcher Planet herrscht über den Schützen?",

          answer:
            "Der Schütze wird von Jupiter beherrscht, der traditionell mit Expansion, Wachstum, Wissen, Reisen, Vertrauen und Sinnsuche verbunden wird.",
        },

        {
          question:
            "Welches Element gehört zum Schützen?",

          answer:
            "Der Schütze gehört zum Element Feuer. Dieses Element steht für Handlung, Begeisterung, Kreativität, Instinkt und den Wunsch, voranzugehen.",
        },

        {
          question:
            "Wie erkenne ich, ob der Schütze in meinem Geburtshoroskop wichtig ist?",

          answer:
            "Der Schütze kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem, welches astrologische Haus vom Schützen besetzt wird.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Sagittario: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri il Sagittario in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Giove, elemento Fuoco, Luna e Ascendente Sagittario.",

      ogTitle:
        "Sagittario in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa al Sagittario: personalità, punti di forza, sfide, relazioni, carriera, Giove e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno del Sagittario | Luna Astralis",

      twitterDescription:
        "Scopri la personalità del Sagittario, i suoi punti di forza, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Sagittario in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al Sagittario, ai suoi punti di forza, alle sfide, alle relazioni, alla carriera e alle principali caratteristiche astrologiche.",
    },

    hero: {
      badge:
        "♐ Nono segno dello zodiaco",

      title:
        "Il Sagittario in astrologia",

      lead:
        "Il Sagittario simboleggia libertà, esplorazione, ottimismo e ricerca di significato. Questo segno di Fuoco cerca di ampliare i propri orizzonti, scoprire il mondo e vivere secondo una visione che lo ispira.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      discover:
        "Scoprire il Sagittario",
    },

    personality: {
      kicker:
        "Personalità del Sagittario",

      title:
        "Che cosa rappresenta il segno del Sagittario?",

      paragraphs: [
        "Il Sagittario è il nono segno dello zodiaco. Rappresenta espansione, libertà, viaggi, grandi idee e ricerca di un significato più ampio dell’esistenza.",

        "Una persona fortemente influenzata dal Sagittario cerca generalmente di comprendere il mondo attraverso nuove esperienze. Apprezza scoperte, apprendimenti e incontri che le permettono di ampliare la propria visione.",

        "Questa energia porta entusiasmo, coraggio e fiducia. Richiede però di imparare a considerare i dettagli, misurare le parole e mantenere gli impegni anche quando la novità scompare.",
      ],
    },

    traitsSection: {
      title:
        "Le principali caratteristiche del Sagittario",
    },

    traits: [
      {
        title:
          "La libertà",

        symbol:
          "♐",

        text:
          "Il Sagittario possiede un profondo bisogno di spazio, movimento e autonomia. Cerca di seguire la propria direzione e scoprire la vita oltre i limiti imposti.",
      },

      {
        title:
          "L’esplorazione",

        symbol:
          "✦",

        text:
          "Questo segno è attratto dai viaggi, dalle nuove idee e dalle esperienze che ampliano la sua comprensione del mondo. Impara spesso procedendo e sperimentando.",
      },

      {
        title:
          "L’ottimismo",

        symbol:
          "♃",

        text:
          "Il Sagittario possiede generalmente una naturale capacità di vedere le possibilità. Anche dopo una difficoltà, cerca un significato, una lezione o una nuova occasione per progredire.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalità e pianeta governatore",

      element: {
        symbol:
          "🔥",

        title:
          "Elemento Fuoco",

        text:
          "Il Fuoco porta entusiasmo, spontaneità, coraggio e desiderio di agire. Spinge il Sagittario ad avanzare, esplorare e seguire ciò che lo ispira.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalità mutevole",

        text:
          "La modalità mutevole favorisce adattamento, apertura e capacità di cambiare direzione. Rafforza la flessibilità e la curiosità del Sagittario.",
      },

      ruler: {
        symbol:
          "♃",

        title:
          "Pianeta Giove",

        text:
          "Giove rappresenta espansione, fiducia, conoscenza e ricerca di significato. Rafforza il bisogno del Sagittario di crescere e superare i propri limiti.",
      },
    },

    strengthsSection: {
      title:
        "I punti di forza e le sfide del Sagittario",

      strengthsKicker:
        "Punti di forza naturali",

      strengthsTitle:
        "Ciò che il Sagittario apporta",

      strengths: [
        "Ottimismo",
        "Sincerità",
        "Entusiasmo",
        "Apertura mentale",
        "Coraggio",
        "Gusto per l’avventura",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Ciò che il Sagittario impara",

      challenges: [
        "Impazienza",
        "Mancanza di tatto",
        "Difficoltà con le restrizioni",
        "Tendenza a disperdersi",
        "Promesse talvolta eccessive",
        "Bisogno costante di novità",
      ],
    },

    love: {
      title:
        "Il Sagittario in amore",

      paragraphs: [
        "In amore, il Sagittario cerca generalmente una relazione viva, sincera e aperta. Ha bisogno di sentire di poter rimanere se stesso, esplorare i propri interessi e conservare una certa libertà.",

        "Apprezza spesso le relazioni fondate sull’umorismo, sulla complicità, sui progetti e sulle scoperte condivise. Quando si sente libero e compreso, può essere generoso, entusiasta e profondamente incoraggiante.",

        "La sua principale sfida consiste nel non fuggire quando la relazione richiede maggiore profondità o costanza. Una relazione duratura gli chiede di conciliare libertà personale e impegno emotivo.",
      ],
    },

    work: {
      title:
        "Il Sagittario nel lavoro",

      paragraphs: [
        "Nella vita professionale, il Sagittario si distingue spesso per entusiasmo, visione globale e capacità di motivare le persone che lo circondano.",

        "Può essere particolarmente efficace nei campi legati ai viaggi, all’insegnamento, alle lingue, alla comunicazione, al diritto, allo sport, al turismo, all’imprenditoria o alla trasmissione delle conoscenze.",

        "Gli ambienti troppo rigidi o ripetitivi possono ridurre rapidamente la sua motivazione. Il Sagittario trae beneficio dall’organizzazione delle idee, dal rispetto delle scadenze e dal completamento dei progetti già iniziati.",
      ],
    },

    placements: {
      title:
        "Sole, Luna e Ascendente in Sagittario",

      sun: {
        symbol:
          "☀️",

        title:
          "Sole in Sagittario",

        text:
          "Il Sole in Sagittario costruisce la propria identità attraverso libertà, esplorazione, ottimismo e ricerca di una visione ispiratrice.",

        link:
          "Comprendere il Sole",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna in Sagittario",

        text:
          "La Luna in Sagittario ha bisogno di spazio, movimento, speranza e nuove prospettive per ritrovare il proprio equilibrio emotivo.",

        link:
          "Comprendere la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Sagittario",

        text:
          "L’Ascendente Sagittario dona una presenza spontanea, aperta ed entusiasta. Affronta generalmente la vita come un’avventura ricca di possibilità.",

        link:
          "Comprendere l’Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Le compatibilità del Sagittario",

      paragraphs: [
        "La compatibilità astrologica non si basa mai soltanto sul segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

        "Alcune combinazioni possono tuttavia sembrare naturalmente più fluide quando condividono un bisogno di libertà, movimento, ottimismo e scoperta.",
      ],

      titlePrefix:
        "Sagittario e",
    },

    compatibilities: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Ariete e Sagittario condividono un’energia spontanea, coraggiosa e dinamica. La loro relazione può essere passionale, attiva e ricca di progetti.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Il Leone apprezza l’entusiasmo e la sincerità del Sagittario. Insieme possono condividere una relazione calorosa, creativa e ispiratrice.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "La Bilancia porta fascino, diplomazia e senso della relazione. Il Sagittario offre movimento, ottimismo e apertura verso nuove esperienze.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "Acquario e Sagittario condividono un forte bisogno di libertà, indipendenza e scoperta. Il loro legame può essere originale, stimolante e poco convenzionale.",
      },
    ],

    natalChart: {
      title:
        "Il Sagittario nel tuo tema natale",

      paragraphs: [
        "Il Sagittario non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene il Sagittario in una particolare casa astrologica.",

        "Questa casa mostra l’ambito della vita in cui cerchi di esplorare, imparare, ampliare i tuoi orizzonti o trovare un significato più profondo. La presenza di pianeti in Sagittario rafforza inoltre questa energia.",
      ],

      cta: {
        kicker:
          "Scopri il tuo tema natale",

        title:
          "Dove si trova il Sagittario nel tuo tema natale?",

        text:
          "Genera gratuitamente il tuo tema natale per scoprire i segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

        button:
          "Creare il mio tema natale",
      },
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sul Sagittario",

      items: [
        {
          question:
            "Quali sono le principali qualità del Sagittario?",

          answer:
            "Il Sagittario è spesso associato a ottimismo, entusiasmo, sincerità, apertura mentale, coraggio e gusto per l’avventura.",
        },

        {
          question:
            "Quali sono le principali sfide del Sagittario?",

          answer:
            "Il Sagittario può talvolta mancare di tatto, diventare impaziente o avere difficoltà con le restrizioni. La sua evoluzione richiede maggiore costanza, ascolto e realismo.",
        },

        {
          question:
            "Quale pianeta governa il Sagittario?",

          answer:
            "Il Sagittario è governato da Giove, pianeta tradizionalmente associato a espansione, crescita, conoscenza, viaggi, fiducia e ricerca di significato.",
        },

        {
          question:
            "Qual è l’elemento del Sagittario?",

          answer:
            "Il Sagittario appartiene all’elemento Fuoco. Questo elemento è legato all’azione, all’entusiasmo, alla creatività, all’istinto e al desiderio di avanzare.",
        },

        {
          question:
            "Come sapere se il Sagittario è importante nel mio tema natale?",

          answer:
            "Il Sagittario può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo mostra anche la casa astrologica occupata dal Sagittario.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Sagitário: personalidade, amor, trabalho e compatibilidade | Luna Astralis",

      description:
        "Descubra Sagitário na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidade, Júpiter, elemento Fogo, Lua e Ascendente em Sagitário.",

      ogTitle:
        "Sagitário na astrologia: personalidade, amor e compatibilidade",

      ogDescription:
        "Guia completo de Sagitário: personalidade, forças, desafios, relacionamentos, carreira, Júpiter e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Sagitário | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Sagitário, suas forças, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Sagitário na astrologia: personalidade, amor, trabalho e compatibilidade",

      description:
        "Guia completo sobre Sagitário, suas forças, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    hero: {
      badge:
        "♐ Nono signo do zodíaco",

      title:
        "Sagitário na astrologia",

      lead:
        "Sagitário simboliza liberdade, exploração, otimismo e busca de sentido. Este signo de Fogo procura ampliar seus horizontes, descobrir o mundo e viver de acordo com uma visão inspiradora.",

      createChart:
        "Criar meu mapa astral grátis",

      discover:
        "Descobrir Sagitário",
    },

    personality: {
      kicker:
        "Personalidade de Sagitário",

      title:
        "O que representa o signo de Sagitário?",

      paragraphs: [
        "Sagitário é o nono signo do zodíaco. Representa expansão, liberdade, viagens, grandes ideias e busca de um sentido mais amplo para a existência.",

        "Uma pessoa fortemente influenciada por Sagitário geralmente procura compreender o mundo por meio de novas experiências. Ela aprecia descobertas, aprendizados e encontros que ampliam sua visão.",

        "Essa energia traz entusiasmo, coragem e confiança. No entanto, exige aprender a considerar os detalhes, medir as palavras e manter os compromissos mesmo quando a novidade desaparece.",
      ],
    },

    traitsSection: {
      title:
        "As principais características de Sagitário",
    },

    traits: [
      {
        title:
          "A liberdade",

        symbol:
          "♐",

        text:
          "Sagitário possui uma profunda necessidade de espaço, movimento e autonomia. Procura seguir sua própria direção e descobrir a vida além dos limites que lhe são impostos.",
      },

      {
        title:
          "A exploração",

        symbol:
          "✦",

        text:
          "Este signo se sente atraído por viagens, novas ideias e experiências que ampliam sua compreensão do mundo. Costuma aprender avançando e experimentando.",
      },

      {
        title:
          "O otimismo",

        symbol:
          "♃",

        text:
          "Sagitário geralmente possui uma capacidade natural de enxergar possibilidades. Mesmo depois de uma dificuldade, procura um sentido, uma lição ou uma nova oportunidade de avançar.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidade e planeta regente",

      element: {
        symbol:
          "🔥",

        title:
          "Elemento Fogo",

        text:
          "O Fogo traz entusiasmo, espontaneidade, coragem e desejo de agir. Ele impulsiona Sagitário a avançar, explorar e seguir aquilo que o inspira.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidade mutável",

        text:
          "A modalidade mutável favorece adaptação, abertura e capacidade de mudar de direção. Ela reforça a flexibilidade e a curiosidade de Sagitário.",
      },

      ruler: {
        symbol:
          "♃",

        title:
          "Planeta Júpiter",

        text:
          "Júpiter representa expansão, confiança, conhecimento e busca de sentido. Ele reforça a necessidade de Sagitário de crescer e superar seus limites.",
      },
    },

    strengthsSection: {
      title:
        "As forças e os desafios de Sagitário",

      strengthsKicker:
        "Forças naturais",

      strengthsTitle:
        "O que Sagitário oferece",

      strengths: [
        "Otimismo",
        "Sinceridade",
        "Entusiasmo",
        "Mente aberta",
        "Coragem",
        "Gosto pela aventura",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "O que Sagitário aprende",

      challenges: [
        "Impaciência",
        "Falta de tato",
        "Dificuldade com restrições",
        "Tendência a se dispersar",
        "Promessas às vezes excessivas",
        "Necessidade constante de novidade",
      ],
    },

    love: {
      title:
        "Sagitário no amor",

      paragraphs: [
        "No amor, Sagitário geralmente procura um relacionamento vivo, sincero e aberto. Precisa sentir que pode continuar sendo ele mesmo, explorar seus interesses e conservar certa liberdade.",

        "Costuma apreciar relações baseadas em humor, cumplicidade, projetos e descobertas compartilhadas. Quando se sente livre e compreendido, pode ser generoso, entusiasmado e profundamente encorajador.",

        "Seu principal desafio consiste em não fugir quando o relacionamento exige maior profundidade ou constância. Uma relação duradoura pede que Sagitário concilie liberdade pessoal e compromisso emocional.",
      ],
    },

    work: {
      title:
        "Sagitário no trabalho",

      paragraphs: [
        "Na vida profissional, Sagitário costuma se destacar pelo entusiasmo, visão global e capacidade de motivar as pessoas ao seu redor.",

        "Pode ser especialmente eficiente em áreas relacionadas a viagens, ensino, idiomas, comunicação, direito, esportes, turismo, empreendedorismo ou transmissão de conhecimento.",

        "Ambientes muito rígidos ou repetitivos podem reduzir rapidamente sua motivação. Sagitário se beneficia ao organizar suas ideias, respeitar prazos e concluir os projetos já iniciados.",
      ],
    },

    placements: {
      title:
        "Sol, Lua e Ascendente em Sagitário",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol em Sagitário",

        text:
          "O Sol em Sagitário constrói sua identidade por meio da liberdade, exploração, otimismo e busca de uma visão inspiradora.",

        link:
          "Compreender o Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lua em Sagitário",

        text:
          "A Lua em Sagitário precisa de espaço, movimento, esperança e novas perspectivas para recuperar o equilíbrio emocional.",

        link:
          "Compreender a Lua",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente em Sagitário",

        text:
          "O Ascendente em Sagitário proporciona uma presença espontânea, aberta e entusiasmada. Geralmente aborda a vida como uma aventura repleta de possibilidades.",

        link:
          "Compreender o Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "As compatibilidades de Sagitário",

      paragraphs: [
        "A compatibilidade astrológica nunca se baseia apenas no signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

        "Algumas combinações podem, no entanto, parecer naturalmente mais fluidas quando compartilham uma necessidade de liberdade, movimento, otimismo e descoberta.",
      ],

      titlePrefix:
        "Sagitário e",
    },

    compatibilities: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Áries e Sagitário compartilham uma energia espontânea, corajosa e dinâmica. O relacionamento pode ser apaixonado, ativo e cheio de projetos.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Leão aprecia o entusiasmo e a sinceridade de Sagitário. Juntos, podem compartilhar um relacionamento caloroso, criativo e inspirador.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra traz charme, diplomacia e senso de relacionamento. Sagitário oferece movimento, otimismo e abertura para novas experiências.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Aquário e Sagitário compartilham uma grande necessidade de liberdade, independência e descoberta. O vínculo pode ser original, estimulante e pouco convencional.",
      },
    ],

    natalChart: {
      title:
        "Sagitário no seu mapa natal",

      paragraphs: [
        "Sagitário não se relaciona apenas às pessoas nascidas sob este signo. Todo mapa natal contém Sagitário em uma determinada casa astrológica.",

        "Essa casa mostra a área da vida em que você procura explorar, aprender, ampliar seus horizontes ou encontrar um sentido mais profundo. A presença de planetas em Sagitário também reforça essa energia.",
      ],

      cta: {
        kicker:
          "Descubra seu mapa natal",

        title:
          "Onde está Sagitário no seu mapa natal?",

        text:
          "Gere gratuitamente seu mapa natal para descobrir seus signos, casas astrológicas, Ascendente e posições planetárias.",

        button:
          "Criar meu mapa natal",
      },
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Sagitário",

      items: [
        {
          question:
            "Quais são as principais qualidades de Sagitário?",

          answer:
            "Sagitário costuma ser associado ao otimismo, entusiasmo, sinceridade, mente aberta, coragem e gosto pela aventura.",
        },

        {
          question:
            "Quais são os principais desafios de Sagitário?",

          answer:
            "Sagitário pode às vezes demonstrar falta de tato, impaciência ou dificuldade com restrições. Sua evolução exige maior constância, escuta e realismo.",
        },

        {
          question:
            "Qual planeta rege Sagitário?",

          answer:
            "Sagitário é regido por Júpiter, planeta tradicionalmente associado à expansão, crescimento, conhecimento, viagens, confiança e busca de sentido.",
        },

        {
          question:
            "Qual é o elemento de Sagitário?",

          answer:
            "Sagitário pertence ao elemento Fogo. Esse elemento está relacionado à ação, entusiasmo, criatividade, instinto e desejo de avançar.",
        },

        {
          question:
            "Como saber se Sagitário é importante no meu mapa natal?",

          answer:
            "Sagitário pode ser importante se seu Sol, Lua, Ascendente ou vários planetas estiverem neste signo. Um mapa natal completo também revela a casa astrológica ocupada por Sagitário.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
