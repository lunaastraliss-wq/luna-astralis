// i18n/pages/astrologie/poissons.ts

import type {
  Locale,
} from "@/i18n/config";

export type PiscesCard = {
  title: string;
  symbol: string;
  text: string;
};

export type PiscesCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type PiscesFaqItem = {
  question: string;
  answer: string;
};

export type PiscesPageText = {
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

  traits: PiscesCard[];

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

    rulers: {
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

  compatibilities: PiscesCompatibility[];

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
    items: PiscesFaqItem[];
  };

  disclaimer: string;
};

export const POISSONS_TRANSLATIONS:
  Record<
    Locale,
    PiscesPageText
  > = {
  fr: {
    metadata: {
      title:
        "Poissons : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe des Poissons en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Neptune, Jupiter, élément Eau, Lune et Ascendant Poissons.",

      ogTitle:
        "Les Poissons en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe des Poissons : caractère, forces, défis, relations, carrière, Neptune, Jupiter et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe des Poissons | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité des Poissons, leurs qualités, leurs défis, leurs relations et leurs compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Les Poissons en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe des Poissons, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    hero: {
      badge:
        "♓ Douzième signe du zodiaque",

      title:
        "Les Poissons en astrologie",

      lead:
        "Les Poissons symbolisent l’intuition, la sensibilité, l’imagination et la compassion. Ce signe d’Eau cherche à comprendre le monde par les émotions, les rêves et les liens invisibles qui unissent les êtres.",

      createChart:
        "Créer ma carte du ciel gratuite",

      discover:
        "Découvrir les Poissons",
    },

    personality: {
      kicker:
        "Personnalité des Poissons",

      title:
        "Que représente le signe des Poissons ?",

      paragraphs: [
        "Les Poissons sont le douzième et dernier signe du zodiaque. Ils représentent l’intuition, l’imagination, la compassion, la sensibilité et la capacité à percevoir ce qui dépasse parfois les mots ou la logique.",

        "Une personne marquée par les Poissons cherche généralement à comprendre la vie à travers ses ressentis. Elle peut percevoir très rapidement les émotions, les besoins et les changements d’atmosphère présents autour d’elle.",

        "Cette énergie apporte douceur, créativité et profondeur émotionnelle. Elle demande toutefois d’apprendre à poser des limites, à rester ancré dans la réalité et à distinguer ses propres émotions de celles de son entourage.",
      ],
    },

    traitsSection: {
      title:
        "Les grandes caractéristiques des Poissons",
    },

    traits: [
      {
        title:
          "La sensibilité",

        symbol:
          "♓",

        text:
          "Les Poissons ressentent profondément les ambiances, les émotions et les besoins de leur entourage. Leur grande réceptivité leur permet souvent de comprendre ce qui n’est pas exprimé directement.",
      },

      {
        title:
          "L’imagination",

        symbol:
          "♆",

        text:
          "Ce signe possède un univers intérieur riche et créatif. Il peut transformer ses émotions, ses rêves et ses perceptions en musique, en images, en récits ou en projets inspirants.",
      },

      {
        title:
          "La compassion",

        symbol:
          "♡",

        text:
          "Les Poissons cherchent naturellement à soulager, accompagner et comprendre. Leur empathie peut créer des liens profonds, à condition qu’ils apprennent aussi à protéger leur propre énergie.",
      },
    ],

    foundations: {
      title:
        "Élément, modalité et planètes maîtresses",

      element: {
        symbol:
          "🌊",

        title:
          "Élément Eau",

        text:
          "L’Eau apporte sensibilité, intuition, réceptivité et profondeur émotionnelle. Elle pousse les Poissons à ressentir intensément les personnes et les situations.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalité mutable",

        text:
          "La modalité mutable favorise l’adaptation, la souplesse et la capacité à suivre les changements. Elle renforce la réceptivité et la fluidité des Poissons.",
      },

      rulers: {
        symbol:
          "♆",

        title:
          "Neptune et Jupiter",

        text:
          "Neptune représente l’intuition, les rêves et l’imagination. Jupiter apporte foi, expansion et recherche de sens. Ensemble, ils nourrissent la vision intérieure des Poissons.",
      },
    },

    strengthsSection: {
      title:
        "Les forces et les défis des Poissons",

      strengthsKicker:
        "Forces naturelles",

      strengthsTitle:
        "Ce que les Poissons apportent",

      strengths: [
        "Intuition",
        "Empathie",
        "Imagination",
        "Compassion",
        "Créativité",
        "Capacité d’adaptation",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Ce que les Poissons apprennent",

      challenges: [
        "Hypersensibilité",
        "Difficulté à poser des limites",
        "Tendance à idéaliser",
        "Fuite devant la réalité",
        "Indécision",
        "Absorption des émotions des autres",
      ],
    },

    love: {
      title:
        "Les Poissons en amour",

      paragraphs: [
        "En amour, les Poissons recherchent généralement une relation profonde, tendre et émotionnellement significative. Ils ont besoin de sentir qu’un lien sincère et intuitif existe avec l’autre.",

        "Ils peuvent être romantiques, attentionnés et extrêmement réceptifs aux besoins de leur partenaire. Leur imagination nourrit souvent une vision très inspirante de l’amour et de la vie à deux.",

        "Leur principal défi consiste à ne pas idéaliser la relation ou à se sacrifier pour préserver le lien. Une relation durable leur demande de poser des limites claires, d’exprimer leurs besoins et de maintenir leur propre identité.",
      ],
    },

    work: {
      title:
        "Les Poissons au travail",

      paragraphs: [
        "Dans la vie professionnelle, les Poissons se distinguent souvent par leur intuition, leur créativité et leur capacité à comprendre les émotions ou les besoins des autres.",

        "Ils peuvent être particulièrement à l’aise dans les domaines liés à l’art, à la musique, à l’écriture, à la photographie, au cinéma, à l’accompagnement, à la santé, au bien-être ou aux professions d’aide.",

        "Les environnements trop froids, compétitifs ou rigides peuvent réduire leur motivation. Ils gagnent à structurer leur travail, à définir des priorités et à protéger leur énergie émotionnelle.",
      ],
    },

    placements: {
      title:
        "Soleil, Lune et Ascendant en Poissons",

      sun: {
        symbol:
          "☀️",

        title:
          "Soleil en Poissons",

        text:
          "Le Soleil en Poissons construit son identité par l’intuition, la compassion, l’imagination et la recherche d’un lien profond avec la vie.",

        link:
          "Comprendre le Soleil",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lune en Poissons",

        text:
          "La Lune en Poissons ressent les émotions avec une grande intensité. Elle a besoin de douceur, de calme et d’un espace créatif pour retrouver son équilibre.",

        link:
          "Comprendre la Lune",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendant Poissons",

        text:
          "L’Ascendant Poissons donne une présence douce, intuitive et réceptive. Il aborde généralement la vie avec sensibilité, imagination et compassion.",

        link:
          "Comprendre l’Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Les compatibilités des Poissons",

      paragraphs: [
        "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

        "Certaines associations peuvent néanmoins sembler naturellement plus harmonieuses lorsqu’elles partagent un besoin de sensibilité, de sécurité, de profondeur et de compréhension émotionnelle.",
      ],

      titlePrefix:
        "Poissons et",
    },

    compatibilities: [
      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Le Cancer et les Poissons partagent une grande sensibilité et un besoin de sécurité émotionnelle. Leur relation peut être douce, intuitive et profondément affective.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Le Scorpion apporte intensité, profondeur et protection. Les Poissons offrent en retour douceur, compréhension et ouverture émotionnelle.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Le Taureau peut offrir aux Poissons stabilité, présence et sécurité concrète. Les Poissons enrichissent la relation par leur imagination et leur sensibilité.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Le Capricorne apporte structure, réalisme et fiabilité. Les Poissons l’aident à se connecter davantage à son intuition, à ses émotions et à son imagination.",
      },
    ],

    natalChart: {
      title:
        "Les Poissons dans votre thème natal",

      paragraphs: [
        "Les Poissons ne concernent pas uniquement les personnes nées sous ce signe. Chaque thème natal contient les Poissons dans une maison astrologique particulière.",

        "Cette maison montre le domaine de vie dans lequel vous cherchez à ressentir, à imaginer, à aider ou à vous connecter à une réalité plus subtile. La présence de planètes en Poissons renforce également cette énergie.",
      ],

      cta: {
        kicker:
          "Découvrez votre thème natal",

        title:
          "Où se trouvent les Poissons dans votre carte du ciel ?",

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
        "Questions sur les Poissons",

      items: [
        {
          question:
            "Quelles sont les principales qualités des Poissons ?",

          answer:
            "Les Poissons sont souvent associés à l’intuition, à l’empathie, à la compassion, à l’imagination, à la créativité et à une grande sensibilité émotionnelle.",
        },

        {
          question:
            "Quels sont les principaux défis des Poissons ?",

          answer:
            "Les Poissons peuvent parfois idéaliser les situations, absorber les émotions de leur entourage ou avoir de la difficulté à poser des limites. Leur évolution passe par davantage d’ancrage, de discernement et de protection émotionnelle.",
        },

        {
          question:
            "Quelle planète gouverne les Poissons ?",

          answer:
            "Les Poissons sont traditionnellement associés à Jupiter et, dans l’astrologie moderne, à Neptune. Neptune représente l’intuition, l’imagination et les rêves, tandis que Jupiter symbolise l’expansion, la foi et la recherche de sens.",
        },

        {
          question:
            "Quel est l’élément des Poissons ?",

          answer:
            "Les Poissons appartiennent à l’élément Eau. Cet élément est lié aux émotions, à l’intuition, à la réceptivité, à la sensibilité et aux liens affectifs.",
        },

        {
          question:
            "Comment savoir si les Poissons sont importants dans mon thème natal ?",

          answer:
            "Les Poissons peuvent être importants si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet également de découvrir la maison astrologique occupée par les Poissons.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Pisces: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Pisces in astrology: personality, strengths, challenges, love, career, compatibility, Neptune, Jupiter, the Water element, Pisces Moon and Pisces Rising.",

      ogTitle:
        "Pisces in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Pisces: personality, strengths, challenges, relationships, career, Neptune, Jupiter and main astrological compatibilities.",

      twitterTitle:
        "The Pisces Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover the Pisces personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Pisces in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Pisces, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    hero: {
      badge:
        "♓ Twelfth sign of the zodiac",

      title:
        "Pisces in Astrology",

      lead:
        "Pisces symbolizes intuition, sensitivity, imagination and compassion. This Water sign seeks to understand the world through emotions, dreams and the invisible bonds that connect people.",

      createChart:
        "Create my free birth chart",

      discover:
        "Discover Pisces",
    },

    personality: {
      kicker:
        "Pisces personality",

      title:
        "What does Pisces represent?",

      paragraphs: [
        "Pisces is the twelfth and final sign of the zodiac. It represents intuition, imagination, compassion, sensitivity and the ability to perceive what may exist beyond words or logic.",

        "A person strongly influenced by Pisces generally seeks to understand life through feelings. They may quickly perceive the emotions, needs and atmospheric changes around them.",

        "This energy brings gentleness, creativity and emotional depth. However, it requires learning to establish boundaries, remain grounded in reality and distinguish personal emotions from those of other people.",
      ],
    },

    traitsSection: {
      title:
        "The main characteristics of Pisces",
    },

    traits: [
      {
        title:
          "Sensitivity",

        symbol:
          "♓",

        text:
          "Pisces deeply feels the atmospheres, emotions and needs of the people around them. Their strong receptivity often allows them to understand what is not directly expressed.",
      },

      {
        title:
          "Imagination",

        symbol:
          "♆",

        text:
          "This sign possesses a rich and creative inner world. Pisces may transform emotions, dreams and perceptions into music, images, stories or inspiring projects.",
      },

      {
        title:
          "Compassion",

        symbol:
          "♡",

        text:
          "Pisces naturally seeks to comfort, support and understand others. Their empathy may create deep bonds, provided they also learn to protect their own energy.",
      },
    ],

    foundations: {
      title:
        "Element, modality and ruling planets",

      element: {
        symbol:
          "🌊",

        title:
          "Water element",

        text:
          "Water brings sensitivity, intuition, receptivity and emotional depth. It encourages Pisces to feel people and situations intensely.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Mutable modality",

        text:
          "The mutable modality encourages adaptation, flexibility and the ability to follow change. It strengthens Pisces’ receptivity and fluidity.",
      },

      rulers: {
        symbol:
          "♆",

        title:
          "Neptune and Jupiter",

        text:
          "Neptune represents intuition, dreams and imagination. Jupiter brings faith, expansion and the search for meaning. Together, they nourish Pisces’ inner vision.",
      },
    },

    strengthsSection: {
      title:
        "Pisces strengths and challenges",

      strengthsKicker:
        "Natural strengths",

      strengthsTitle:
        "What Pisces brings",

      strengths: [
        "Intuition",
        "Empathy",
        "Imagination",
        "Compassion",
        "Creativity",
        "Adaptability",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "What Pisces learns",

      challenges: [
        "Hypersensitivity",
        "Difficulty establishing boundaries",
        "Tendency to idealize",
        "Escaping reality",
        "Indecision",
        "Absorbing other people’s emotions",
      ],
    },

    love: {
      title:
        "Pisces in love",

      paragraphs: [
        "In love, Pisces generally seeks a deep, tender and emotionally meaningful relationship. They need to feel that a sincere and intuitive bond exists with their partner.",

        "They may be romantic, attentive and extremely receptive to their partner’s needs. Their imagination often nourishes a highly inspiring vision of love and life together.",

        "Their main challenge is avoiding idealizing the relationship or sacrificing themselves to preserve the bond. A lasting relationship requires clear boundaries, honest expression of needs and the preservation of personal identity.",
      ],
    },

    work: {
      title:
        "Pisces at work",

      paragraphs: [
        "In professional life, Pisces often stands out through intuition, creativity and an ability to understand the emotions or needs of others.",

        "They may be especially comfortable in fields connected with art, music, writing, photography, cinema, counselling, healthcare, wellness or helping professions.",

        "Environments that are too cold, competitive or rigid may reduce their motivation. Pisces benefits from structuring work, defining priorities and protecting emotional energy.",
      ],
    },

    placements: {
      title:
        "Pisces Sun, Moon and Rising",

      sun: {
        symbol:
          "☀️",

        title:
          "Sun in Pisces",

        text:
          "The Sun in Pisces builds identity through intuition, compassion, imagination and the search for a deep connection with life.",

        link:
          "Understand the Sun",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Moon in Pisces",

        text:
          "The Moon in Pisces experiences emotions with great intensity. It needs gentleness, calm and a creative space to restore balance.",

        link:
          "Understand the Moon",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Pisces Rising",

        text:
          "Pisces Rising gives a gentle, intuitive and receptive presence. It generally approaches life with sensitivity, imagination and compassion.",

        link:
          "Understand the Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Pisces compatibility",

      paragraphs: [
        "Astrological compatibility is never based only on the Sun sign. The Moon, Venus, Mars, the Ascendant and aspects between two charts provide essential information.",

        "Some combinations may nevertheless feel naturally more harmonious when they share a need for sensitivity, security, depth and emotional understanding.",
      ],

      titlePrefix:
        "Pisces and",
    },

    compatibilities: [
      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Cancer and Pisces share great sensitivity and a need for emotional security. Their relationship may be gentle, intuitive and deeply affectionate.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Scorpio brings intensity, depth and protection. Pisces offers gentleness, understanding and emotional openness in return.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Taurus may offer Pisces stability, presence and practical security. Pisces enriches the relationship through imagination and sensitivity.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Capricorn brings structure, realism and reliability. Pisces helps Capricorn connect more deeply with intuition, emotions and imagination.",
      },
    ],

    natalChart: {
      title:
        "Pisces in your birth chart",

      paragraphs: [
        "Pisces does not concern only people born under this sign. Every birth chart contains Pisces in a particular astrological house.",

        "This house shows the area of life in which you seek to feel, imagine, help or connect with a subtler reality. The presence of planets in Pisces also strengthens this energy.",
      ],

      cta: {
        kicker:
          "Discover your birth chart",

        title:
          "Where is Pisces located in your birth chart?",

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
        "Questions about Pisces",

      items: [
        {
          question:
            "What are the main qualities of Pisces?",

          answer:
            "Pisces is often associated with intuition, empathy, compassion, imagination, creativity and great emotional sensitivity.",
        },

        {
          question:
            "What are the main challenges of Pisces?",

          answer:
            "Pisces may sometimes idealize situations, absorb the emotions of others or have difficulty establishing boundaries. Growth involves greater grounding, discernment and emotional protection.",
        },

        {
          question:
            "Which planet rules Pisces?",

          answer:
            "Pisces is traditionally associated with Jupiter and, in modern astrology, with Neptune. Neptune represents intuition, imagination and dreams, while Jupiter symbolizes expansion, faith and the search for meaning.",
        },

        {
          question:
            "What is the element of Pisces?",

          answer:
            "Pisces belongs to the Water element. Water is associated with emotions, intuition, receptivity, sensitivity and emotional bonds.",
        },

        {
          question:
            "How can I know whether Pisces is important in my birth chart?",

          answer:
            "Pisces may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals the astrological house occupied by Pisces.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Piscis: personalidad, amor, trabajo y compatibilidad | Luna Astralis",

      description:
        "Descubre Piscis en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidad, Neptuno, Júpiter, elemento Agua, Luna y Ascendente Piscis.",

      ogTitle:
        "Piscis en astrología: personalidad, amor y compatibilidad",

      ogDescription:
        "Guía completa de Piscis: personalidad, fortalezas, desafíos, relaciones, carrera, Neptuno, Júpiter y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Piscis | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Piscis, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Piscis en astrología: personalidad, amor, trabajo y compatibilidad",

      description:
        "Guía completa sobre Piscis, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    hero: {
      badge:
        "♓ Duodécimo signo del zodiaco",

      title:
        "Piscis en astrología",

      lead:
        "Piscis simboliza la intuición, la sensibilidad, la imaginación y la compasión. Este signo de Agua busca comprender el mundo mediante las emociones, los sueños y los vínculos invisibles que unen a las personas.",

      createChart:
        "Crear mi carta natal gratis",

      discover:
        "Descubrir Piscis",
    },

    personality: {
      kicker:
        "Personalidad de Piscis",

      title:
        "¿Qué representa el signo de Piscis?",

      paragraphs: [
        "Piscis es el duodécimo y último signo del zodiaco. Representa la intuición, la imaginación, la compasión, la sensibilidad y la capacidad de percibir aquello que a veces supera las palabras o la lógica.",

        "Una persona marcada por Piscis suele intentar comprender la vida a través de sus sentimientos. Puede percibir rápidamente las emociones, las necesidades y los cambios de ambiente presentes a su alrededor.",

        "Esta energía aporta dulzura, creatividad y profundidad emocional. Sin embargo, exige aprender a establecer límites, permanecer conectado con la realidad y distinguir las propias emociones de las de los demás.",
      ],
    },

    traitsSection: {
      title:
        "Las principales características de Piscis",
    },

    traits: [
      {
        title:
          "La sensibilidad",

        symbol:
          "♓",

        text:
          "Piscis percibe profundamente los ambientes, las emociones y las necesidades de quienes lo rodean. Su gran receptividad le permite comprender con frecuencia aquello que no se expresa directamente.",
      },

      {
        title:
          "La imaginación",

        symbol:
          "♆",

        text:
          "Este signo posee un mundo interior rico y creativo. Puede transformar sus emociones, sueños y percepciones en música, imágenes, historias o proyectos inspiradores.",
      },

      {
        title:
          "La compasión",

        symbol:
          "♡",

        text:
          "Piscis busca naturalmente aliviar, acompañar y comprender. Su empatía puede crear vínculos profundos, siempre que también aprenda a proteger su propia energía.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidad y planetas regentes",

      element: {
        symbol:
          "🌊",

        title:
          "Elemento Agua",

        text:
          "El Agua aporta sensibilidad, intuición, receptividad y profundidad emocional. Impulsa a Piscis a sentir intensamente a las personas y las situaciones.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidad mutable",

        text:
          "La modalidad mutable favorece la adaptación, la flexibilidad y la capacidad de acompañar los cambios. Refuerza la receptividad y la fluidez de Piscis.",
      },

      rulers: {
        symbol:
          "♆",

        title:
          "Neptuno y Júpiter",

        text:
          "Neptuno representa la intuición, los sueños y la imaginación. Júpiter aporta fe, expansión y búsqueda de sentido. Juntos alimentan la visión interior de Piscis.",
      },
    },

    strengthsSection: {
      title:
        "Las fortalezas y los desafíos de Piscis",

      strengthsKicker:
        "Fortalezas naturales",

      strengthsTitle:
        "Lo que aporta Piscis",

      strengths: [
        "Intuición",
        "Empatía",
        "Imaginación",
        "Compasión",
        "Creatividad",
        "Capacidad de adaptación",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Lo que aprende Piscis",

      challenges: [
        "Hipersensibilidad",
        "Dificultad para establecer límites",
        "Tendencia a idealizar",
        "Huida de la realidad",
        "Indecisión",
        "Absorción de las emociones ajenas",
      ],
    },

    love: {
      title:
        "Piscis en el amor",

      paragraphs: [
        "En el amor, Piscis suele buscar una relación profunda, tierna y emocionalmente significativa. Necesita sentir que existe un vínculo sincero e intuitivo con la otra persona.",

        "Puede ser romántico, atento y extremadamente receptivo a las necesidades de su pareja. Su imaginación suele alimentar una visión muy inspiradora del amor y de la vida en común.",

        "Su principal desafío consiste en no idealizar la relación ni sacrificarse para conservar el vínculo. Una relación duradera requiere límites claros, expresión de las propias necesidades y mantenimiento de la identidad personal.",
      ],
    },

    work: {
      title:
        "Piscis en el trabajo",

      paragraphs: [
        "En la vida profesional, Piscis suele destacar por su intuición, creatividad y capacidad para comprender las emociones o necesidades de los demás.",

        "Puede sentirse especialmente cómodo en ámbitos relacionados con el arte, la música, la escritura, la fotografía, el cine, el acompañamiento, la salud, el bienestar o las profesiones de ayuda.",

        "Los ambientes demasiado fríos, competitivos o rígidos pueden reducir su motivación. Piscis se beneficia de estructurar su trabajo, definir prioridades y proteger su energía emocional.",
      ],
    },

    placements: {
      title:
        "Sol, Luna y Ascendente en Piscis",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol en Piscis",

        text:
          "El Sol en Piscis construye su identidad mediante la intuición, la compasión, la imaginación y la búsqueda de una conexión profunda con la vida.",

        link:
          "Comprender el Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna en Piscis",

        text:
          "La Luna en Piscis vive las emociones con gran intensidad. Necesita dulzura, calma y un espacio creativo para recuperar su equilibrio.",

        link:
          "Comprender la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Piscis",

        text:
          "El Ascendente Piscis aporta una presencia dulce, intuitiva y receptiva. Suele abordar la vida con sensibilidad, imaginación y compasión.",

        link:
          "Comprender el Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Las compatibilidades de Piscis",

      paragraphs: [
        "La compatibilidad astrológica nunca se basa únicamente en el signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

        "Sin embargo, algunas combinaciones pueden parecer naturalmente más armoniosas cuando comparten una necesidad de sensibilidad, seguridad, profundidad y comprensión emocional.",
      ],

      titlePrefix:
        "Piscis y",
    },

    compatibilities: [
      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Cáncer y Piscis comparten una gran sensibilidad y una necesidad de seguridad emocional. Su relación puede ser dulce, intuitiva y profundamente afectiva.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Escorpio aporta intensidad, profundidad y protección. Piscis ofrece a cambio dulzura, comprensión y apertura emocional.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Tauro puede ofrecer a Piscis estabilidad, presencia y seguridad concreta. Piscis enriquece la relación con su imaginación y sensibilidad.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Capricornio aporta estructura, realismo y fiabilidad. Piscis lo ayuda a conectarse más profundamente con su intuición, emociones e imaginación.",
      },
    ],

    natalChart: {
      title:
        "Piscis en tu carta natal",

      paragraphs: [
        "Piscis no se relaciona únicamente con las personas nacidas bajo este signo. Cada carta natal contiene Piscis en una casa astrológica particular.",

        "Esta casa muestra el ámbito de vida en el que buscas sentir, imaginar, ayudar o conectarte con una realidad más sutil. La presencia de planetas en Piscis también refuerza esta energía.",
      ],

      cta: {
        kicker:
          "Descubre tu carta natal",

        title:
          "¿Dónde se encuentra Piscis en tu carta natal?",

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
        "Preguntas sobre Piscis",

      items: [
        {
          question:
            "¿Cuáles son las principales cualidades de Piscis?",

          answer:
            "Piscis suele asociarse con la intuición, la empatía, la compasión, la imaginación, la creatividad y una gran sensibilidad emocional.",
        },

        {
          question:
            "¿Cuáles son los principales desafíos de Piscis?",

          answer:
            "Piscis puede idealizar las situaciones, absorber las emociones de los demás o tener dificultades para establecer límites. Su evolución requiere mayor arraigo, discernimiento y protección emocional.",
        },

        {
          question:
            "¿Qué planeta gobierna Piscis?",

          answer:
            "Piscis se asocia tradicionalmente con Júpiter y, en la astrología moderna, con Neptuno. Neptuno representa la intuición, la imaginación y los sueños, mientras que Júpiter simboliza la expansión, la fe y la búsqueda de sentido.",
        },

        {
          question:
            "¿Cuál es el elemento de Piscis?",

          answer:
            "Piscis pertenece al elemento Agua. Este elemento se relaciona con las emociones, la intuición, la receptividad, la sensibilidad y los vínculos afectivos.",
        },

        {
          question:
            "¿Cómo saber si Piscis es importante en mi carta natal?",

          answer:
            "Piscis puede ser importante si tu Sol, Luna, Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también permite descubrir la casa astrológica ocupada por Piscis.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Fische: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie die Fische in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Neptun, Jupiter, Wasserelement, Mond und Aszendent Fische.",

      ogTitle:
        "Fische in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zu den Fischen: Persönlichkeit, Stärken, Herausforderungen, Beziehungen, Beruf, Neptun, Jupiter und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Fische | Luna Astralis",

      twitterDescription:
        "Entdecken Sie Persönlichkeit, Stärken, Herausforderungen, Beziehungen und astrologische Kompatibilität der Fische.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Fische in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zu den Fischen, ihren Stärken, Herausforderungen, Beziehungen, ihrem Beruf und ihren wichtigsten astrologischen Eigenschaften.",
    },

    hero: {
      badge:
        "♓ Zwölftes Tierkreiszeichen",

      title:
        "Fische in der Astrologie",

      lead:
        "Die Fische symbolisieren Intuition, Sensibilität, Fantasie und Mitgefühl. Dieses Wasserzeichen versucht, die Welt durch Gefühle, Träume und unsichtbare Verbindungen zwischen den Menschen zu verstehen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      discover:
        "Die Fische entdecken",
    },

    personality: {
      kicker:
        "Persönlichkeit der Fische",

      title:
        "Was bedeutet das Zeichen Fische?",

      paragraphs: [
        "Die Fische sind das zwölfte und letzte Zeichen des Tierkreises. Sie stehen für Intuition, Fantasie, Mitgefühl, Sensibilität und die Fähigkeit, Dinge wahrzunehmen, die über Worte oder Logik hinausgehen.",

        "Ein stark von den Fischen geprägter Mensch versucht meist, das Leben durch Gefühle zu verstehen. Er kann Emotionen, Bedürfnisse und Veränderungen der Atmosphäre in seiner Umgebung sehr schnell wahrnehmen.",

        "Diese Energie bringt Sanftheit, Kreativität und emotionale Tiefe. Sie verlangt jedoch, klare Grenzen zu setzen, in der Realität verankert zu bleiben und eigene Gefühle von denen anderer zu unterscheiden.",
      ],
    },

    traitsSection: {
      title:
        "Die wichtigsten Eigenschaften der Fische",
    },

    traits: [
      {
        title:
          "Sensibilität",

        symbol:
          "♓",

        text:
          "Die Fische nehmen Stimmungen, Gefühle und Bedürfnisse ihres Umfelds tief wahr. Ihre große Empfänglichkeit hilft ihnen häufig, unausgesprochene Inhalte zu verstehen.",
      },

      {
        title:
          "Fantasie",

        symbol:
          "♆",

        text:
          "Dieses Zeichen besitzt eine reiche und kreative Innenwelt. Es kann Gefühle, Träume und Wahrnehmungen in Musik, Bilder, Geschichten oder inspirierende Projekte verwandeln.",
      },

      {
        title:
          "Mitgefühl",

        symbol:
          "♡",

        text:
          "Die Fische möchten von Natur aus helfen, begleiten und verstehen. Ihre Empathie kann tiefe Bindungen schaffen, sofern sie auch lernen, ihre eigene Energie zu schützen.",
      },
    ],

    foundations: {
      title:
        "Element, Modalität und Herrscherplaneten",

      element: {
        symbol:
          "🌊",

        title:
          "Element Wasser",

        text:
          "Wasser bringt Sensibilität, Intuition, Empfänglichkeit und emotionale Tiefe. Es lässt die Fische Menschen und Situationen intensiv wahrnehmen.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Veränderliche Modalität",

        text:
          "Die veränderliche Modalität fördert Anpassungsfähigkeit, Flexibilität und die Fähigkeit, Veränderungen zu folgen. Sie stärkt die Empfänglichkeit und Beweglichkeit der Fische.",
      },

      rulers: {
        symbol:
          "♆",

        title:
          "Neptun und Jupiter",

        text:
          "Neptun steht für Intuition, Träume und Fantasie. Jupiter bringt Vertrauen, Expansion und Sinnsuche. Gemeinsam nähren sie die innere Vision der Fische.",
      },
    },

    strengthsSection: {
      title:
        "Stärken und Herausforderungen der Fische",

      strengthsKicker:
        "Natürliche Stärken",

      strengthsTitle:
        "Was die Fische einbringen",

      strengths: [
        "Intuition",
        "Empathie",
        "Fantasie",
        "Mitgefühl",
        "Kreativität",
        "Anpassungsfähigkeit",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Was die Fische lernen",

      challenges: [
        "Überempfindlichkeit",
        "Schwierigkeit, Grenzen zu setzen",
        "Neigung zur Idealisierung",
        "Flucht vor der Realität",
        "Unentschlossenheit",
        "Aufnahme fremder Gefühle",
      ],
    },

    love: {
      title:
        "Die Fische in der Liebe",

      paragraphs: [
        "In der Liebe suchen die Fische meist eine tiefe, zärtliche und emotional bedeutungsvolle Beziehung. Sie müssen spüren, dass eine aufrichtige und intuitive Verbindung zum anderen besteht.",

        "Sie können romantisch, aufmerksam und äußerst empfänglich für die Bedürfnisse ihres Partners sein. Ihre Fantasie nährt häufig eine sehr inspirierende Vorstellung von Liebe und gemeinsamem Leben.",

        "Ihre größte Herausforderung besteht darin, die Beziehung nicht zu idealisieren oder sich selbst für den Erhalt der Bindung aufzuopfern. Eine dauerhafte Beziehung verlangt klare Grenzen, den Ausdruck eigener Bedürfnisse und die Bewahrung der persönlichen Identität.",
      ],
    },

    work: {
      title:
        "Die Fische im Beruf",

      paragraphs: [
        "Im Berufsleben zeichnen sich die Fische häufig durch Intuition, Kreativität und die Fähigkeit aus, Gefühle oder Bedürfnisse anderer zu verstehen.",

        "Sie können sich besonders in Bereichen wohlfühlen, die mit Kunst, Musik, Schreiben, Fotografie, Film, Beratung, Gesundheit, Wohlbefinden oder helfenden Berufen verbunden sind.",

        "Zu kalte, wettbewerbsorientierte oder starre Umgebungen können ihre Motivation verringern. Die Fische profitieren davon, ihre Arbeit zu strukturieren, Prioritäten festzulegen und ihre emotionale Energie zu schützen.",
      ],
    },

    placements: {
      title:
        "Sonne, Mond und Aszendent in den Fischen",

      sun: {
        symbol:
          "☀️",

        title:
          "Sonne in den Fischen",

        text:
          "Die Sonne in den Fischen entwickelt ihre Identität durch Intuition, Mitgefühl, Fantasie und die Suche nach einer tiefen Verbindung mit dem Leben.",

        link:
          "Die Sonne verstehen",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Mond in den Fischen",

        text:
          "Der Mond in den Fischen erlebt Gefühle mit großer Intensität. Er benötigt Sanftheit, Ruhe und kreativen Raum, um sein Gleichgewicht wiederzufinden.",

        link:
          "Den Mond verstehen",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Aszendent Fische",

        text:
          "Der Aszendent Fische verleiht eine sanfte, intuitive und empfängliche Ausstrahlung. Er begegnet dem Leben meist mit Sensibilität, Fantasie und Mitgefühl.",

        link:
          "Den Aszendenten verstehen",
      },
    },

    compatibilitySection: {
      title:
        "Die Kompatibilität der Fische",

      paragraphs: [
        "Astrologische Kompatibilität beruht niemals nur auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und Aspekte zwischen zwei Horoskopen liefern wichtige zusätzliche Informationen.",

        "Bestimmte Verbindungen können sich dennoch besonders harmonisch anfühlen, wenn beide Seiten ein Bedürfnis nach Sensibilität, Sicherheit, Tiefe und emotionalem Verständnis teilen.",
      ],

      titlePrefix:
        "Fische und",
    },

    compatibilities: [
      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Krebs und Fische teilen große Sensibilität und ein Bedürfnis nach emotionaler Sicherheit. Ihre Beziehung kann sanft, intuitiv und tief liebevoll sein.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Der Skorpion bringt Intensität, Tiefe und Schutz. Die Fische schenken im Gegenzug Sanftheit, Verständnis und emotionale Offenheit.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Der Stier kann den Fischen Stabilität, Präsenz und praktische Sicherheit bieten. Die Fische bereichern die Beziehung durch Fantasie und Sensibilität.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Der Steinbock bringt Struktur, Realismus und Zuverlässigkeit. Die Fische helfen ihm, sich stärker mit Intuition, Gefühlen und Fantasie zu verbinden.",
      },
    ],

    natalChart: {
      title:
        "Die Fische in Ihrem Geburtshoroskop",

      paragraphs: [
        "Die Fische betreffen nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält die Fische in einem bestimmten astrologischen Haus.",

        "Dieses Haus zeigt den Lebensbereich, in dem Sie fühlen, träumen, helfen oder sich mit einer subtileren Wirklichkeit verbinden möchten. Planeten in den Fischen verstärken diese Energie zusätzlich.",
      ],

      cta: {
        kicker:
          "Entdecken Sie Ihr Geburtshoroskop",

        title:
          "Wo befinden sich die Fische in Ihrem Geburtshoroskop?",

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
        "Fragen zu den Fischen",

      items: [
        {
          question:
            "Was sind die wichtigsten Stärken der Fische?",

          answer:
            "Die Fische werden häufig mit Intuition, Empathie, Mitgefühl, Fantasie, Kreativität und großer emotionaler Sensibilität verbunden.",
        },

        {
          question:
            "Was sind die wichtigsten Herausforderungen der Fische?",

          answer:
            "Die Fische können Situationen idealisieren, die Gefühle anderer aufnehmen oder Schwierigkeiten haben, Grenzen zu setzen. Entwicklung erfordert mehr Bodenhaftung, Unterscheidungsvermögen und emotionalen Schutz.",
        },

        {
          question:
            "Welcher Planet herrscht über die Fische?",

          answer:
            "Traditionell werden die Fische Jupiter und in der modernen Astrologie Neptun zugeordnet. Neptun steht für Intuition, Fantasie und Träume, während Jupiter Expansion, Vertrauen und Sinnsuche symbolisiert.",
        },

        {
          question:
            "Welches Element gehört zu den Fischen?",

          answer:
            "Die Fische gehören zum Element Wasser. Dieses Element steht für Gefühle, Intuition, Empfänglichkeit, Sensibilität und emotionale Bindungen.",
        },

        {
          question:
            "Wie erkenne ich, ob die Fische in meinem Geburtshoroskop wichtig sind?",

          answer:
            "Die Fische können wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem, welches astrologische Haus von den Fischen besetzt wird.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Pesci: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri i Pesci in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Nettuno, Giove, elemento Acqua, Luna e Ascendente Pesci.",

      ogTitle:
        "Pesci in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa ai Pesci: personalità, punti di forza, sfide, relazioni, carriera, Nettuno, Giove e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno dei Pesci | Luna Astralis",

      twitterDescription:
        "Scopri la personalità dei Pesci, i loro punti di forza, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Pesci in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa ai Pesci, ai loro punti di forza, alle sfide, alle relazioni, alla carriera e alle principali caratteristiche astrologiche.",
    },

    hero: {
      badge:
        "♓ Dodicesimo segno dello zodiaco",

      title:
        "I Pesci in astrologia",

      lead:
        "I Pesci simboleggiano intuizione, sensibilità, immaginazione e compassione. Questo segno d’Acqua cerca di comprendere il mondo attraverso le emozioni, i sogni e i legami invisibili che uniscono le persone.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      discover:
        "Scoprire i Pesci",
    },

    personality: {
      kicker:
        "Personalità dei Pesci",

      title:
        "Che cosa rappresenta il segno dei Pesci?",

      paragraphs: [
        "I Pesci sono il dodicesimo e ultimo segno dello zodiaco. Rappresentano intuizione, immaginazione, compassione, sensibilità e capacità di percepire ciò che talvolta supera le parole o la logica.",

        "Una persona fortemente influenzata dai Pesci cerca generalmente di comprendere la vita attraverso le proprie sensazioni. Può percepire molto rapidamente le emozioni, i bisogni e i cambiamenti di atmosfera presenti intorno a sé.",

        "Questa energia porta dolcezza, creatività e profondità emotiva. Richiede però di imparare a stabilire limiti, rimanere ancorati alla realtà e distinguere le proprie emozioni da quelle degli altri.",
      ],
    },

    traitsSection: {
      title:
        "Le principali caratteristiche dei Pesci",
    },

    traits: [
      {
        title:
          "La sensibilità",

        symbol:
          "♓",

        text:
          "I Pesci percepiscono profondamente le atmosfere, le emozioni e i bisogni delle persone che li circondano. La loro grande ricettività permette spesso di comprendere ciò che non viene espresso direttamente.",
      },

      {
        title:
          "L’immaginazione",

        symbol:
          "♆",

        text:
          "Questo segno possiede un mondo interiore ricco e creativo. Può trasformare emozioni, sogni e percezioni in musica, immagini, racconti o progetti ispiratori.",
      },

      {
        title:
          "La compassione",

        symbol:
          "♡",

        text:
          "I Pesci cercano naturalmente di alleviare, accompagnare e comprendere. La loro empatia può creare legami profondi, purché imparino anche a proteggere la propria energia.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalità e pianeti governatori",

      element: {
        symbol:
          "🌊",

        title:
          "Elemento Acqua",

        text:
          "L’Acqua porta sensibilità, intuizione, ricettività e profondità emotiva. Spinge i Pesci a percepire intensamente persone e situazioni.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalità mutevole",

        text:
          "La modalità mutevole favorisce adattamento, flessibilità e capacità di seguire i cambiamenti. Rafforza la ricettività e la fluidità dei Pesci.",
      },

      rulers: {
        symbol:
          "♆",

        title:
          "Nettuno e Giove",

        text:
          "Nettuno rappresenta intuizione, sogni e immaginazione. Giove porta fede, espansione e ricerca di significato. Insieme alimentano la visione interiore dei Pesci.",
      },
    },

    strengthsSection: {
      title:
        "I punti di forza e le sfide dei Pesci",

      strengthsKicker:
        "Punti di forza naturali",

      strengthsTitle:
        "Ciò che i Pesci apportano",

      strengths: [
        "Intuizione",
        "Empatia",
        "Immaginazione",
        "Compassione",
        "Creatività",
        "Capacità di adattamento",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Ciò che i Pesci imparano",

      challenges: [
        "Ipersensibilità",
        "Difficoltà a stabilire limiti",
        "Tendenza a idealizzare",
        "Fuga dalla realtà",
        "Indecisione",
        "Assorbimento delle emozioni altrui",
      ],
    },

    love: {
      title:
        "I Pesci in amore",

      paragraphs: [
        "In amore, i Pesci cercano generalmente una relazione profonda, tenera ed emotivamente significativa. Hanno bisogno di sentire che esiste un legame sincero e intuitivo con l’altra persona.",

        "Possono essere romantici, premurosi ed estremamente ricettivi ai bisogni del partner. La loro immaginazione alimenta spesso una visione molto ispirante dell’amore e della vita di coppia.",

        "La loro principale sfida consiste nel non idealizzare la relazione o sacrificarsi per preservare il legame. Una relazione duratura richiede limiti chiari, espressione dei propri bisogni e mantenimento dell’identità personale.",
      ],
    },

    work: {
      title:
        "I Pesci nel lavoro",

      paragraphs: [
        "Nella vita professionale, i Pesci si distinguono spesso per intuizione, creatività e capacità di comprendere le emozioni o i bisogni degli altri.",

        "Possono sentirsi particolarmente a loro agio nei campi legati all’arte, alla musica, alla scrittura, alla fotografia, al cinema, all’accompagnamento, alla salute, al benessere o alle professioni di aiuto.",

        "Gli ambienti troppo freddi, competitivi o rigidi possono ridurre la loro motivazione. I Pesci traggono beneficio dalla strutturazione del lavoro, dalla definizione delle priorità e dalla protezione della propria energia emotiva.",
      ],
    },

    placements: {
      title:
        "Sole, Luna e Ascendente in Pesci",

      sun: {
        symbol:
          "☀️",

        title:
          "Sole in Pesci",

        text:
          "Il Sole in Pesci costruisce la propria identità attraverso intuizione, compassione, immaginazione e ricerca di un legame profondo con la vita.",

        link:
          "Comprendere il Sole",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna in Pesci",

        text:
          "La Luna in Pesci vive le emozioni con grande intensità. Ha bisogno di dolcezza, calma e di uno spazio creativo per ritrovare il proprio equilibrio.",

        link:
          "Comprendere la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Pesci",

        text:
          "L’Ascendente Pesci dona una presenza dolce, intuitiva e ricettiva. Affronta generalmente la vita con sensibilità, immaginazione e compassione.",

        link:
          "Comprendere l’Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Le compatibilità dei Pesci",

      paragraphs: [
        "La compatibilità astrologica non si basa mai soltanto sul segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

        "Alcune combinazioni possono tuttavia sembrare naturalmente più armoniose quando condividono un bisogno di sensibilità, sicurezza, profondità e comprensione emotiva.",
      ],

      titlePrefix:
        "Pesci e",
    },

    compatibilities: [
      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Cancro e Pesci condividono una grande sensibilità e un bisogno di sicurezza emotiva. La loro relazione può essere dolce, intuitiva e profondamente affettuosa.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Lo Scorpione porta intensità, profondità e protezione. I Pesci offrono in cambio dolcezza, comprensione e apertura emotiva.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Il Toro può offrire ai Pesci stabilità, presenza e sicurezza concreta. I Pesci arricchiscono la relazione con immaginazione e sensibilità.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Il Capricorno porta struttura, realismo e affidabilità. I Pesci lo aiutano a connettersi maggiormente con intuizione, emozioni e immaginazione.",
      },
    ],

    natalChart: {
      title:
        "I Pesci nel tuo tema natale",

      paragraphs: [
        "I Pesci non riguardano soltanto le persone nate sotto questo segno. Ogni tema natale contiene i Pesci in una particolare casa astrologica.",

        "Questa casa mostra l’ambito della vita in cui cerchi di sentire, immaginare, aiutare o connetterti a una realtà più sottile. La presenza di pianeti in Pesci rafforza inoltre questa energia.",
      ],

      cta: {
        kicker:
          "Scopri il tuo tema natale",

        title:
          "Dove si trovano i Pesci nel tuo tema natale?",

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
        "Domande sui Pesci",

      items: [
        {
          question:
            "Quali sono le principali qualità dei Pesci?",

          answer:
            "I Pesci sono spesso associati a intuizione, empatia, compassione, immaginazione, creatività e grande sensibilità emotiva.",
        },

        {
          question:
            "Quali sono le principali sfide dei Pesci?",

          answer:
            "I Pesci possono idealizzare le situazioni, assorbire le emozioni degli altri o avere difficoltà a stabilire limiti. La loro evoluzione richiede maggiore concretezza, discernimento e protezione emotiva.",
        },

        {
          question:
            "Quale pianeta governa i Pesci?",

          answer:
            "I Pesci sono tradizionalmente associati a Giove e, nell’astrologia moderna, a Nettuno. Nettuno rappresenta intuizione, immaginazione e sogni, mentre Giove simboleggia espansione, fede e ricerca di significato.",
        },

        {
          question:
            "Qual è l’elemento dei Pesci?",

          answer:
            "I Pesci appartengono all’elemento Acqua. Questo elemento è associato alle emozioni, all’intuizione, alla ricettività, alla sensibilità e ai legami affettivi.",
        },

        {
          question:
            "Come sapere se i Pesci sono importanti nel mio tema natale?",

          answer:
            "I Pesci possono essere importanti se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo mostra anche la casa astrologica occupata dai Pesci.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Peixes: personalidade, amor, trabalho e compatibilidade | Luna Astralis",

      description:
        "Descubra Peixes na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidade, Netuno, Júpiter, elemento Água, Lua e Ascendente em Peixes.",

      ogTitle:
        "Peixes na astrologia: personalidade, amor e compatibilidade",

      ogDescription:
        "Guia completo de Peixes: personalidade, forças, desafios, relacionamentos, carreira, Netuno, Júpiter e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Peixes | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Peixes, suas forças, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Peixes na astrologia: personalidade, amor, trabalho e compatibilidade",

      description:
        "Guia completo sobre Peixes, suas forças, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    hero: {
      badge:
        "♓ Décimo segundo signo do zodíaco",

      title:
        "Peixes na astrologia",

      lead:
        "Peixes simboliza intuição, sensibilidade, imaginação e compaixão. Este signo de Água procura compreender o mundo por meio das emoções, dos sonhos e dos vínculos invisíveis que unem as pessoas.",

      createChart:
        "Criar meu mapa astral grátis",

      discover:
        "Descobrir Peixes",
    },

    personality: {
      kicker:
        "Personalidade de Peixes",

      title:
        "O que representa o signo de Peixes?",

      paragraphs: [
        "Peixes é o décimo segundo e último signo do zodíaco. Representa intuição, imaginação, compaixão, sensibilidade e capacidade de perceber aquilo que às vezes ultrapassa as palavras ou a lógica.",

        "Uma pessoa fortemente marcada por Peixes geralmente procura compreender a vida por meio dos sentimentos. Ela pode perceber rapidamente as emoções, necessidades e mudanças de atmosfera ao seu redor.",

        "Essa energia traz suavidade, criatividade e profundidade emocional. No entanto, exige aprender a estabelecer limites, permanecer ancorado na realidade e distinguir as próprias emoções das emoções dos outros.",
      ],
    },

    traitsSection: {
      title:
        "As principais características de Peixes",
    },

    traits: [
      {
        title:
          "A sensibilidade",

        symbol:
          "♓",

        text:
          "Peixes percebe profundamente os ambientes, as emoções e as necessidades das pessoas ao redor. Sua grande receptividade frequentemente permite compreender aquilo que não é expresso diretamente.",
      },

      {
        title:
          "A imaginação",

        symbol:
          "♆",

        text:
          "Este signo possui um mundo interior rico e criativo. Pode transformar emoções, sonhos e percepções em música, imagens, histórias ou projetos inspiradores.",
      },

      {
        title:
          "A compaixão",

        symbol:
          "♡",

        text:
          "Peixes procura naturalmente aliviar, acompanhar e compreender. Sua empatia pode criar vínculos profundos, desde que também aprenda a proteger a própria energia.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidade e planetas regentes",

      element: {
        symbol:
          "🌊",

        title:
          "Elemento Água",

        text:
          "A Água traz sensibilidade, intuição, receptividade e profundidade emocional. Ela estimula Peixes a sentir intensamente pessoas e situações.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidade mutável",

        text:
          "A modalidade mutável favorece adaptação, flexibilidade e capacidade de acompanhar mudanças. Ela reforça a receptividade e a fluidez de Peixes.",
      },

      rulers: {
        symbol:
          "♆",

        title:
          "Netuno e Júpiter",

        text:
          "Netuno representa intuição, sonhos e imaginação. Júpiter traz fé, expansão e busca de sentido. Juntos, alimentam a visão interior de Peixes.",
      },
    },

    strengthsSection: {
      title:
        "As forças e os desafios de Peixes",

      strengthsKicker:
        "Forças naturais",

      strengthsTitle:
        "O que Peixes oferece",

      strengths: [
        "Intuição",
        "Empatia",
        "Imaginação",
        "Compaixão",
        "Criatividade",
        "Capacidade de adaptação",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "O que Peixes aprende",

      challenges: [
        "Hipersensibilidade",
        "Dificuldade para estabelecer limites",
        "Tendência a idealizar",
        "Fuga da realidade",
        "Indecisão",
        "Absorção das emoções alheias",
      ],
    },

    love: {
      title:
        "Peixes no amor",

      paragraphs: [
        "No amor, Peixes geralmente procura um relacionamento profundo, carinhoso e emocionalmente significativo. Precisa sentir que existe uma conexão sincera e intuitiva com a outra pessoa.",

        "Pode ser romântico, atencioso e extremamente receptivo às necessidades do parceiro. Sua imaginação frequentemente alimenta uma visão muito inspiradora do amor e da vida a dois.",

        "Seu principal desafio consiste em não idealizar o relacionamento nem se sacrificar para preservar o vínculo. Uma relação duradoura exige limites claros, expressão das próprias necessidades e manutenção da identidade pessoal.",
      ],
    },

    work: {
      title:
        "Peixes no trabalho",

      paragraphs: [
        "Na vida profissional, Peixes costuma se destacar pela intuição, criatividade e capacidade de compreender as emoções ou necessidades dos outros.",

        "Pode se sentir especialmente confortável em áreas relacionadas à arte, música, escrita, fotografia, cinema, acompanhamento, saúde, bem-estar ou profissões de ajuda.",

        "Ambientes excessivamente frios, competitivos ou rígidos podem reduzir sua motivação. Peixes se beneficia ao estruturar o trabalho, definir prioridades e proteger sua energia emocional.",
      ],
    },

    placements: {
      title:
        "Sol, Lua e Ascendente em Peixes",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol em Peixes",

        text:
          "O Sol em Peixes constrói sua identidade por meio da intuição, compaixão, imaginação e busca de uma conexão profunda com a vida.",

        link:
          "Compreender o Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lua em Peixes",

        text:
          "A Lua em Peixes vive as emoções com grande intensidade. Precisa de suavidade, calma e espaço criativo para recuperar o equilíbrio.",

        link:
          "Compreender a Lua",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente em Peixes",

        text:
          "O Ascendente em Peixes proporciona uma presença suave, intuitiva e receptiva. Geralmente aborda a vida com sensibilidade, imaginação e compaixão.",

        link:
          "Compreender o Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "As compatibilidades de Peixes",

      paragraphs: [
        "A compatibilidade astrológica nunca se baseia apenas no signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

        "Algumas combinações podem, no entanto, parecer naturalmente mais harmoniosas quando compartilham uma necessidade de sensibilidade, segurança, profundidade e compreensão emocional.",
      ],

      titlePrefix:
        "Peixes e",
    },

    compatibilities: [
      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Câncer e Peixes compartilham grande sensibilidade e necessidade de segurança emocional. O relacionamento pode ser suave, intuitivo e profundamente afetuoso.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Escorpião traz intensidade, profundidade e proteção. Peixes oferece em troca suavidade, compreensão e abertura emocional.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Touro pode oferecer a Peixes estabilidade, presença e segurança concreta. Peixes enriquece a relação com imaginação e sensibilidade.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Capricórnio traz estrutura, realismo e confiabilidade. Peixes o ajuda a se conectar mais profundamente com intuição, emoções e imaginação.",
      },
    ],

    natalChart: {
      title:
        "Peixes no seu mapa natal",

      paragraphs: [
        "Peixes não se relaciona apenas às pessoas nascidas sob este signo. Todo mapa natal contém Peixes em uma determinada casa astrológica.",

        "Essa casa mostra a área da vida em que você procura sentir, imaginar, ajudar ou se conectar com uma realidade mais sutil. A presença de planetas em Peixes também reforça essa energia.",
      ],

      cta: {
        kicker:
          "Descubra seu mapa natal",

        title:
          "Onde está Peixes no seu mapa natal?",

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
        "Perguntas sobre Peixes",

      items: [
        {
          question:
            "Quais são as principais qualidades de Peixes?",

          answer:
            "Peixes costuma ser associado à intuição, empatia, compaixão, imaginação, criatividade e grande sensibilidade emocional.",
        },

        {
          question:
            "Quais são os principais desafios de Peixes?",

          answer:
            "Peixes pode idealizar situações, absorver as emoções dos outros ou ter dificuldade para estabelecer limites. Sua evolução exige maior ancoragem, discernimento e proteção emocional.",
        },

        {
          question:
            "Qual planeta rege Peixes?",

          answer:
            "Peixes é tradicionalmente associado a Júpiter e, na astrologia moderna, a Netuno. Netuno representa intuição, imaginação e sonhos, enquanto Júpiter simboliza expansão, fé e busca de sentido.",
        },

        {
          question:
            "Qual é o elemento de Peixes?",

          answer:
            "Peixes pertence ao elemento Água. Esse elemento está relacionado às emoções, intuição, receptividade, sensibilidade e vínculos afetivos.",
        },

        {
          question:
            "Como saber se Peixes é importante no meu mapa natal?",

          answer:
            "Peixes pode ser importante se seu Sol, Lua, Ascendente ou vários planetas estiverem neste signo. Um mapa natal completo também revela a casa astrológica ocupada por Peixes.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
