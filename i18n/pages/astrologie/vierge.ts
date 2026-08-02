// i18n/pages/astrologie/vierge.ts

import type {
  Locale,
} from "@/i18n/config";

export type VirgoTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type VirgoCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type VirgoFaqItem = {
  question: string;
  answer: string;
};

export type VirgoPillar = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
};

export type VirgoPageText = {
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

  traits: VirgoTrait[];

  foundations: {
    title: string;
    element: VirgoPillar;
    modality: VirgoPillar;
    ruler: VirgoPillar;
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
    sun: VirgoPillar;
    moon: VirgoPillar;
    ascendant: VirgoPillar;
  };

  compatibilitySection: {
    title: string;
    paragraphs: string[];
    titlePrefix: string;
  };

  compatibilities: VirgoCompatibility[];

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
    items: VirgoFaqItem[];
  };

  disclaimer: string;
};

export const VIERGE_TRANSLATIONS:
  Record<
    Locale,
    VirgoPageText
  > = {
  fr: {
    metadata: {
      title:
        "Vierge : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe de la Vierge en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Mercure, élément Terre, Lune et Ascendant Vierge.",

      ogTitle:
        "La Vierge en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe de la Vierge : caractère, forces, défis, relations, carrière, Mercure, élément Terre et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe de la Vierge | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité de la Vierge, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "La Vierge en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe de la Vierge, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    hero: {
      badge:
        "♍ Sixième signe du zodiaque",

      title:
        "La Vierge en astrologie",

      lead:
        "La Vierge symbolise l’analyse, la précision, le sens du service et la recherche d’amélioration. Ce signe de Terre observe les détails, organise la réalité et cherche des solutions concrètes et utiles.",

      createChart:
        "Créer ma carte du ciel gratuite",

      discover:
        "Découvrir la Vierge",
    },

    personality: {
      kicker:
        "Personnalité de la Vierge",

      title:
        "Que représente le signe de la Vierge ?",

      paragraphs: [
        "La Vierge est le sixième signe du zodiaque. Elle représente l’analyse, l’organisation, le discernement, le travail consciencieux et la capacité à améliorer ce qui existe déjà.",

        "Une personne marquée par la Vierge cherche généralement à comprendre le fonctionnement des choses. Elle remarque les détails, identifie les incohérences et préfère souvent les solutions pratiques aux grandes promesses.",

        "Cette énergie apporte précision, fiabilité et sens des responsabilités. Elle demande toutefois d’apprendre à ne pas confondre amélioration et perfection, ni prudence et inquiétude permanente.",
      ],
    },

    traitsSection: {
      title:
        "Les grandes caractéristiques de la Vierge",
    },

    traits: [
      {
        title:
          "Le sens de l’analyse",

        symbol:
          "☿",

        text:
          "La Vierge observe attentivement les faits, les détails et les méthodes. Elle cherche à comprendre les causes d’un problème avant de proposer une solution adaptée.",
      },

      {
        title:
          "Le sens du service",

        symbol:
          "✦",

        text:
          "Ce signe aime se rendre utile, soutenir les autres et améliorer concrètement le quotidien. Il montre souvent son affection par des gestes pratiques et une présence fiable.",
      },

      {
        title:
          "La recherche de précision",

        symbol:
          "♍",

        text:
          "La Vierge accorde une grande importance à la qualité, à l’ordre et à la cohérence. Elle souhaite que les choses soient bien faites, compréhensibles et efficaces.",
      },
    ],

    foundations: {
      title:
        "Élément, modalité et planète maîtresse",

      element: {
        symbol:
          "🌿",

        title:
          "Élément Terre",

        text:
          "La Terre apporte réalisme, stabilité, sens pratique et besoin de résultats concrets. Elle pousse la Vierge à construire, organiser et améliorer ce qui peut être réellement utilisé.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalité mutable",

        text:
          "La modalité mutable favorise l’adaptation, l’apprentissage et la capacité à ajuster les méthodes. Elle peut toutefois renforcer l’hésitation ou la tendance à modifier constamment les détails.",
      },

      ruler: {
        symbol:
          "☿",

        title:
          "Mercure",

        text:
          "Mercure représente la pensée, l’analyse, la communication et l’organisation de l’information. Chez la Vierge, il fonctionne de manière précise, méthodique et pratique.",
      },
    },

    strengthsSection: {
      title:
        "Les forces et les défis de la Vierge",

      strengthsKicker:
        "Forces naturelles",

      strengthsTitle:
        "Ce que la Vierge apporte",

      strengths: [
        "Précision",
        "Fiabilité",
        "Sens de l’organisation",
        "Esprit d’analyse",
        "Capacité d’amélioration",
        "Sens du service",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Ce que la Vierge apprend",

      challenges: [
        "Perfectionnisme",
        "Autocritique",
        "Inquiétude excessive",
        "Difficulté à lâcher prise",
        "Attention excessive aux détails",
        "Tendance à vouloir tout corriger",
      ],
    },

    love: {
      title:
        "La Vierge en amour",

      paragraphs: [
        "En amour, la Vierge recherche généralement une relation honnête, stable et cohérente. Elle accorde une grande importance à la confiance, au respect des engagements et à la qualité de la communication quotidienne.",

        "Elle exprime souvent son affection par des gestes concrets : aider, écouter, organiser, soutenir ou prendre soin des détails que l’autre ne remarque pas toujours.",

        "Son principal défi consiste à ne pas analyser constamment la relation ou rechercher une perfection impossible. Elle gagne à exprimer plus directement ses sentiments et à reconnaître que la vulnérabilité ne diminue pas sa valeur.",
      ],
    },

    work: {
      title:
        "La Vierge au travail",

      paragraphs: [
        "Dans la vie professionnelle, la Vierge se distingue souvent par sa rigueur, sa méthode, sa capacité d’analyse et son souci du travail bien fait.",

        "Elle peut être particulièrement efficace dans les domaines liés à la santé, à l’administration, à la comptabilité, à la recherche, à l’écriture, à l’analyse de données, à l’organisation, à l’enseignement ou aux services spécialisés.",

        "Elle apprécie les environnements structurés dans lesquels les responsabilités sont claires. Elle doit toutefois éviter de s’épuiser en voulant tout vérifier, tout corriger ou tout accomplir seule.",
      ],
    },

    placements: {
      title:
        "Soleil, Lune et Ascendant en Vierge",

      sun: {
        symbol:
          "☀️",

        title:
          "Soleil en Vierge",

        text:
          "Le Soleil en Vierge construit son identité par le travail, l’amélioration, la précision et le désir de se rendre utile de manière concrète.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Comprendre le Soleil",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lune en Vierge",

        text:
          "La Lune en Vierge retrouve son équilibre émotionnel grâce à l’ordre, aux routines, à la compréhension des problèmes et au sentiment d’être utile.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Comprendre la Lune",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendant Vierge",

        text:
          "L’Ascendant Vierge donne une présence attentive, réservée et observatrice. Il aborde généralement la vie avec prudence, méthode et discernement.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Comprendre l’Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Les compatibilités de la Vierge",

      paragraphs: [
        "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

        "Certaines associations peuvent néanmoins sembler naturellement plus fluides lorsqu’elles partagent un besoin de stabilité, de loyauté, de réalisme et de construction à long terme.",
      ],

      titlePrefix:
        "Vierge et",
    },

    compatibilities: [
      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Le Taureau et la Vierge partagent un besoin de sécurité, de constance et de réalisme. Leur relation peut se construire lentement, mais devenir très stable et fiable.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Le Capricorne comprend le sérieux, la prudence et le sens des responsabilités de la Vierge. Ensemble, ils peuvent bâtir une relation structurée et durable.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Le Cancer apporte sensibilité, chaleur et profondeur affective. La Vierge offre soutien, stabilité et attention concrète, ce qui peut créer un lien rassurant.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Le Scorpion apporte intensité, loyauté et profondeur. La Vierge contribue par son discernement, sa constance et sa capacité à comprendre les détails d’une situation.",
      },
    ],

    natalChart: {
      title:
        "La Vierge dans votre thème natal",

      paragraphs: [
        "La Vierge ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient la Vierge dans une maison astrologique particulière.",

        "Cette maison montre le domaine de vie dans lequel vous cherchez à organiser, améliorer, analyser ou vous rendre utile. La présence de planètes en Vierge renforce également cette énergie.",
      ],

      cta: {
        kicker:
          "Découvrez votre thème natal",

        title:
          "Où se trouve la Vierge dans votre carte du ciel ?",

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
        "Questions sur la Vierge",

      items: [
        {
          question:
            "Quelles sont les principales qualités de la Vierge ?",

          answer:
            "La Vierge est souvent associée à la précision, à la fiabilité, au sens de l’organisation, à l’analyse, au discernement et au désir de se rendre utile.",
        },

        {
          question:
            "Quels sont les principaux défis de la Vierge ?",

          answer:
            "La Vierge peut parfois devenir trop critique, perfectionniste ou inquiète. Son évolution passe par davantage de souplesse, de confiance et d’acceptation de l’imperfection.",
        },

        {
          question:
            "Quelle planète gouverne la Vierge ?",

          answer:
            "La Vierge est gouvernée par Mercure. Cette planète symbolise la pensée, la communication, l’analyse et l’organisation de l’information.",
        },

        {
          question:
            "Quel est l’élément de la Vierge ?",

          answer:
            "La Vierge appartient à l’élément Terre. Cet élément est lié au réalisme, à la stabilité, au sens pratique, au travail et aux résultats concrets.",
        },

        {
          question:
            "Comment savoir si la Vierge est importante dans mon thème natal ?",

          answer:
            "La Vierge peut être importante si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète révèle également la maison astrologique occupée par la Vierge.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Virgo: Personality, Love, Work and Compatibility | Luna Astralis",

      description:
        "Discover Virgo in astrology: personality, strengths, challenges, love, work, compatibility, Mercury, Earth element, Virgo Moon and Ascendant.",

      ogTitle:
        "Virgo in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Virgo: character, strengths, challenges, relationships, career, Mercury, Earth element and main astrological compatibilities.",

      twitterTitle:
        "The Virgo Sign | Luna Astralis",

      twitterDescription:
        "Discover the Virgo personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Virgo in Astrology: Personality, Love, Work and Compatibility",

      description:
        "A complete guide to Virgo, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    hero: {
      badge:
        "♍ Sixth sign of the zodiac",

      title:
        "Virgo in Astrology",

      lead:
        "Virgo symbolizes analysis, precision, service and the search for improvement. This Earth sign observes details, organizes reality and seeks practical, useful solutions.",

      createChart:
        "Create my free birth chart",

      discover:
        "Discover Virgo",
    },

    personality: {
      kicker:
        "Virgo personality",

      title:
        "What does the sign of Virgo represent?",

      paragraphs: [
        "Virgo is the sixth sign of the zodiac. It represents analysis, organization, discernment, conscientious work and the ability to improve what already exists.",

        "A person strongly influenced by Virgo generally seeks to understand how things work. They notice details, identify inconsistencies and often prefer practical solutions to grand promises.",

        "This energy brings precision, reliability and responsibility. However, it also requires learning not to confuse improvement with perfection or caution with constant worry.",
      ],
    },

    traitsSection: {
      title:
        "The main characteristics of Virgo",
    },

    traits: [
      {
        title:
          "Analytical ability",

        symbol:
          "☿",

        text:
          "Virgo carefully observes facts, details and methods. It seeks to understand the causes of a problem before proposing an appropriate solution.",
      },

      {
        title:
          "A sense of service",

        symbol:
          "✦",

        text:
          "This sign enjoys being useful, supporting others and improving everyday life in practical ways. It often expresses affection through helpful gestures and reliable presence.",
      },

      {
        title:
          "The search for precision",

        symbol:
          "♍",

        text:
          "Virgo places great importance on quality, order and consistency. It wants things to be well done, understandable and effective.",
      },
    ],

    foundations: {
      title:
        "Element, modality and ruling planet",

      element: {
        symbol:
          "🌿",

        title:
          "Earth element",

        text:
          "Earth brings realism, stability, practicality and a need for concrete results. It encourages Virgo to build, organize and improve what can truly be used.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Mutable modality",

        text:
          "The mutable modality supports adaptation, learning and the ability to adjust methods. It may also increase hesitation or the tendency to continually modify details.",
      },

      ruler: {
        symbol:
          "☿",

        title:
          "Mercury",

        text:
          "Mercury represents thought, analysis, communication and the organization of information. In Virgo, it operates in a precise, methodical and practical way.",
      },
    },

    strengthsSection: {
      title:
        "Virgo strengths and challenges",

      strengthsKicker:
        "Natural strengths",

      strengthsTitle:
        "What Virgo brings",

      strengths: [
        "Precision",
        "Reliability",
        "Organization",
        "Analytical thinking",
        "Ability to improve",
        "A sense of service",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "What Virgo learns",

      challenges: [
        "Perfectionism",
        "Self-criticism",
        "Excessive worry",
        "Difficulty letting go",
        "Excessive focus on details",
        "Tendency to correct everything",
      ],
    },

    love: {
      title:
        "Virgo in love",

      paragraphs: [
        "In love, Virgo generally seeks an honest, stable and consistent relationship. It places great importance on trust, commitment and the quality of everyday communication.",

        "Virgo often expresses affection through practical gestures: helping, listening, organizing, supporting or taking care of details the other person may not always notice.",

        "Its main challenge is to avoid constantly analyzing the relationship or seeking impossible perfection. Virgo benefits from expressing feelings more directly and recognizing that vulnerability does not reduce personal value.",
      ],
    },

    work: {
      title:
        "Virgo at work",

      paragraphs: [
        "In professional life, Virgo often stands out through rigor, method, analytical ability and dedication to work done well.",

        "It may be especially effective in fields connected with health, administration, accounting, research, writing, data analysis, organization, education or specialized services.",

        "Virgo appreciates structured environments with clear responsibilities. However, it must avoid exhaustion caused by trying to verify, correct or complete everything alone.",
      ],
    },

    placements: {
      title:
        "Virgo Sun, Moon and Ascendant",

      sun: {
        symbol:
          "☀️",

        title:
          "Sun in Virgo",

        text:
          "The Sun in Virgo builds identity through work, improvement, precision and the desire to be useful in practical ways.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Understand the Sun",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Moon in Virgo",

        text:
          "The Moon in Virgo regains emotional balance through order, routines, understanding problems and the feeling of being useful.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Understand the Moon",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Virgo Ascendant",

        text:
          "The Virgo Ascendant creates an attentive, reserved and observant presence. It generally approaches life with caution, method and discernment.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Understand the Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Virgo compatibility",

      paragraphs: [
        "Astrological compatibility is never based only on the Sun sign. The Moon, Venus, Mars, the Ascendant and the aspects between both charts provide essential information.",

        "Some combinations may nevertheless feel more naturally fluid when they share a need for stability, loyalty, realism and long-term construction.",
      ],

      titlePrefix:
        "Virgo and",
    },

    compatibilities: [
      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Taurus and Virgo share a need for security, consistency and realism. Their relationship may develop slowly but become very stable and reliable.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Capricorn understands Virgo’s seriousness, caution and sense of responsibility. Together, they may build a structured and lasting relationship.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Cancer brings sensitivity, warmth and emotional depth. Virgo offers support, stability and practical attention, which may create a reassuring bond.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Scorpio brings intensity, loyalty and depth. Virgo contributes discernment, consistency and an ability to understand the details of a situation.",
      },
    ],

    natalChart: {
      title:
        "Virgo in your birth chart",

      paragraphs: [
        "Virgo does not concern only people born under this sign. Every birth chart contains Virgo in a particular astrological house.",

        "This house shows the area of life in which you seek to organize, improve, analyze or be useful. Planets in Virgo also strengthen this energy.",
      ],

      cta: {
        kicker:
          "Discover your birth chart",

        title:
          "Where is Virgo in your birth chart?",

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
        "Questions about Virgo",

      items: [
        {
          question:
            "What are the main qualities of Virgo?",

          answer:
            "Virgo is often associated with precision, reliability, organization, analysis, discernment and the desire to be useful.",
        },

        {
          question:
            "What are the main challenges of Virgo?",

          answer:
            "Virgo may sometimes become overly critical, perfectionistic or worried. Its development involves greater flexibility, trust and acceptance of imperfection.",
        },

        {
          question:
            "Which planet rules Virgo?",

          answer:
            "Virgo is ruled by Mercury. This planet symbolizes thought, communication, analysis and the organization of information.",
        },

        {
          question:
            "What is the element of Virgo?",

          answer:
            "Virgo belongs to the Earth element. This element is connected with realism, stability, practicality, work and concrete results.",
        },

        {
          question:
            "How can I know whether Virgo is important in my birth chart?",

          answer:
            "Virgo may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals the astrological house occupied by Virgo.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Virgo: personalidad, amor, trabajo y compatibilidad | Luna Astralis",

      description:
        "Descubre Virgo en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidad, Mercurio, elemento Tierra, Luna y Ascendente en Virgo.",

      ogTitle:
        "Virgo en astrología: personalidad, amor y compatibilidad",

      ogDescription:
        "Guía completa de Virgo: carácter, fortalezas, desafíos, relaciones, carrera, Mercurio, elemento Tierra y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Virgo | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Virgo, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Virgo en astrología: personalidad, amor, trabajo y compatibilidad",

      description:
        "Guía completa sobre Virgo, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    hero: {
      badge:
        "♍ Sexto signo del zodiaco",

      title:
        "Virgo en astrología",

      lead:
        "Virgo simboliza el análisis, la precisión, el sentido del servicio y la búsqueda de mejora. Este signo de Tierra observa los detalles, organiza la realidad y busca soluciones concretas y útiles.",

      createChart:
        "Crear mi carta natal gratis",

      discover:
        "Descubrir Virgo",
    },

    personality: {
      kicker:
        "Personalidad de Virgo",

      title:
        "¿Qué representa el signo de Virgo?",

      paragraphs: [
        "Virgo es el sexto signo del zodiaco. Representa el análisis, la organización, el discernimiento, el trabajo consciente y la capacidad de mejorar aquello que ya existe.",

        "Una persona fuertemente influenciada por Virgo suele buscar comprender cómo funcionan las cosas. Observa los detalles, identifica las incoherencias y generalmente prefiere las soluciones prácticas a las grandes promesas.",

        "Esta energía aporta precisión, fiabilidad y sentido de la responsabilidad. Sin embargo, también exige aprender a no confundir la mejora con la perfección ni la prudencia con la preocupación constante.",
      ],
    },

    traitsSection: {
      title:
        "Las principales características de Virgo",
    },

    traits: [
      {
        title:
          "La capacidad de análisis",

        symbol:
          "☿",

        text:
          "Virgo observa cuidadosamente los hechos, los detalles y los métodos. Busca comprender las causas de un problema antes de proponer una solución adecuada.",
      },

      {
        title:
          "El sentido del servicio",

        symbol:
          "✦",

        text:
          "Este signo disfruta siendo útil, apoyando a los demás y mejorando de manera concreta la vida cotidiana. Suele demostrar afecto mediante gestos prácticos y una presencia fiable.",
      },

      {
        title:
          "La búsqueda de precisión",

        symbol:
          "♍",

        text:
          "Virgo concede gran importancia a la calidad, el orden y la coherencia. Desea que las cosas estén bien hechas, sean comprensibles y funcionen con eficacia.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidad y planeta regente",

      element: {
        symbol:
          "🌿",

        title:
          "Elemento Tierra",

        text:
          "La Tierra aporta realismo, estabilidad, sentido práctico y necesidad de resultados concretos. Impulsa a Virgo a construir, organizar y mejorar aquello que puede utilizarse realmente.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidad mutable",

        text:
          "La modalidad mutable favorece la adaptación, el aprendizaje y la capacidad de ajustar los métodos. También puede aumentar la indecisión o la tendencia a modificar constantemente los detalles.",
      },

      ruler: {
        symbol:
          "☿",

        title:
          "Mercurio",

        text:
          "Mercurio representa el pensamiento, el análisis, la comunicación y la organización de la información. En Virgo, actúa de manera precisa, metódica y práctica.",
      },
    },

    strengthsSection: {
      title:
        "Las fortalezas y los desafíos de Virgo",

      strengthsKicker:
        "Fortalezas naturales",

      strengthsTitle:
        "Lo que aporta Virgo",

      strengths: [
        "Precisión",
        "Fiabilidad",
        "Sentido de la organización",
        "Pensamiento analítico",
        "Capacidad de mejora",
        "Sentido del servicio",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Lo que aprende Virgo",

      challenges: [
        "Perfeccionismo",
        "Autocrítica",
        "Preocupación excesiva",
        "Dificultad para soltar",
        "Atención excesiva a los detalles",
        "Tendencia a querer corregirlo todo",
      ],
    },

    love: {
      title:
        "Virgo en el amor",

      paragraphs: [
        "En el amor, Virgo suele buscar una relación honesta, estable y coherente. Concede gran importancia a la confianza, al respeto de los compromisos y a la calidad de la comunicación cotidiana.",

        "Suele expresar su afecto mediante gestos concretos: ayudar, escuchar, organizar, apoyar o atender detalles que la otra persona no siempre percibe.",

        "Su principal desafío consiste en no analizar constantemente la relación ni buscar una perfección imposible. Se beneficia al expresar sus sentimientos de manera más directa y reconocer que la vulnerabilidad no disminuye su valor.",
      ],
    },

    work: {
      title:
        "Virgo en el trabajo",

      paragraphs: [
        "En la vida profesional, Virgo suele destacar por su rigor, su método, su capacidad de análisis y su preocupación por el trabajo bien realizado.",

        "Puede ser especialmente eficaz en ámbitos relacionados con la salud, la administración, la contabilidad, la investigación, la escritura, el análisis de datos, la organización, la enseñanza o los servicios especializados.",

        "Aprecia los entornos estructurados en los que las responsabilidades están claramente definidas. Sin embargo, debe evitar agotarse intentando comprobar, corregir o realizar todo por sí mismo.",
      ],
    },

    placements: {
      title:
        "Sol, Luna y Ascendente en Virgo",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol en Virgo",

        text:
          "El Sol en Virgo construye su identidad mediante el trabajo, la mejora, la precisión y el deseo de ser útil de manera concreta.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Comprender el Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna en Virgo",

        text:
          "La Luna en Virgo recupera su equilibrio emocional mediante el orden, las rutinas, la comprensión de los problemas y la sensación de ser útil.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Comprender la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente en Virgo",

        text:
          "El Ascendente en Virgo proporciona una presencia atenta, reservada y observadora. Generalmente aborda la vida con prudencia, método y discernimiento.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Comprender el Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Las compatibilidades de Virgo",

      paragraphs: [
        "La compatibilidad astrológica nunca se basa únicamente en el signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

        "Algunas combinaciones pueden, sin embargo, sentirse naturalmente más fluidas cuando comparten una necesidad de estabilidad, lealtad, realismo y construcción a largo plazo.",
      ],

      titlePrefix:
        "Virgo y",
    },

    compatibilities: [
      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Tauro y Virgo comparten una necesidad de seguridad, constancia y realismo. Su relación puede desarrollarse lentamente, pero llegar a ser muy estable y fiable.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Capricornio comprende la seriedad, la prudencia y el sentido de la responsabilidad de Virgo. Juntos pueden construir una relación estructurada y duradera.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Cáncer aporta sensibilidad, calidez y profundidad emocional. Virgo ofrece apoyo, estabilidad y atención concreta, lo que puede crear un vínculo reconfortante.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Escorpio aporta intensidad, lealtad y profundidad. Virgo contribuye con discernimiento, constancia y capacidad para comprender los detalles de una situación.",
      },
    ],

    natalChart: {
      title:
        "Virgo en tu carta natal",

      paragraphs: [
        "Virgo no se relaciona únicamente con las personas nacidas bajo este signo. Toda carta natal contiene Virgo en una casa astrológica determinada.",

        "Esta casa muestra el ámbito de vida en el que buscas organizar, mejorar, analizar o ser útil. La presencia de planetas en Virgo también refuerza esta energía.",
      ],

      cta: {
        kicker:
          "Descubre tu carta natal",

        title:
          "¿Dónde se encuentra Virgo en tu carta natal?",

        text:
          "Genera gratuitamente tu carta natal para descubrir tus signos, tus casas astrológicas, tu Ascendente y las posiciones de tus planetas.",

        button:
          "Crear mi carta natal",
      },
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Virgo",

      items: [
        {
          question:
            "¿Cuáles son las principales cualidades de Virgo?",

          answer:
            "Virgo suele asociarse con la precisión, la fiabilidad, el sentido de la organización, el análisis, el discernimiento y el deseo de ser útil.",
        },

        {
          question:
            "¿Cuáles son los principales desafíos de Virgo?",

          answer:
            "Virgo puede volverse demasiado crítico, perfeccionista o preocupado. Su evolución requiere mayor flexibilidad, confianza y aceptación de la imperfección.",
        },

        {
          question:
            "¿Qué planeta rige Virgo?",

          answer:
            "Virgo está regido por Mercurio. Este planeta simboliza el pensamiento, la comunicación, el análisis y la organización de la información.",
        },

        {
          question:
            "¿Cuál es el elemento de Virgo?",

          answer:
            "Virgo pertenece al elemento Tierra. Este elemento se relaciona con el realismo, la estabilidad, el sentido práctico, el trabajo y los resultados concretos.",
        },

        {
          question:
            "¿Cómo saber si Virgo es importante en mi carta natal?",

          answer:
            "Virgo puede ser importante si tu Sol, tu Luna, tu Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también revela la casa astrológica ocupada por Virgo.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Jungfrau: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie die Jungfrau in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Merkur, Erdelement, Mond und Aszendent.",

      ogTitle:
        "Jungfrau in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zur Jungfrau: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Merkur, Erdelement und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Zeichen Jungfrau | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit der Jungfrau, ihre Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Jungfrau in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zur Jungfrau, ihren Stärken, Herausforderungen, Beziehungen, ihrem Beruf und ihren wichtigsten astrologischen Eigenschaften.",
    },

    hero: {
      badge:
        "♍ Sechstes Zeichen des Tierkreises",

      title:
        "Die Jungfrau in der Astrologie",

      lead:
        "Die Jungfrau symbolisiert Analyse, Präzision, Hilfsbereitschaft und das Streben nach Verbesserung. Dieses Erdzeichen beobachtet Details, ordnet die Wirklichkeit und sucht konkrete, nützliche Lösungen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      discover:
        "Die Jungfrau entdecken",
    },

    personality: {
      kicker:
        "Persönlichkeit der Jungfrau",

      title:
        "Was bedeutet das Zeichen Jungfrau?",

      paragraphs: [
        "Die Jungfrau ist das sechste Zeichen des Tierkreises. Sie steht für Analyse, Organisation, Urteilsvermögen, gewissenhafte Arbeit und die Fähigkeit, Bestehendes zu verbessern.",

        "Ein stark von der Jungfrau geprägter Mensch versucht gewöhnlich zu verstehen, wie Dinge funktionieren. Er bemerkt Details, erkennt Unstimmigkeiten und bevorzugt häufig praktische Lösungen gegenüber großen Versprechen.",

        "Diese Energie bringt Präzision, Zuverlässigkeit und Verantwortungsbewusstsein. Sie verlangt jedoch auch, Verbesserung nicht mit Perfektion und Vorsicht nicht mit ständiger Sorge zu verwechseln.",
      ],
    },

    traitsSection: {
      title:
        "Die wichtigsten Eigenschaften der Jungfrau",
    },

    traits: [
      {
        title:
          "Analytisches Denken",

        symbol:
          "☿",

        text:
          "Die Jungfrau beobachtet Fakten, Details und Methoden aufmerksam. Sie versucht, die Ursachen eines Problems zu verstehen, bevor sie eine passende Lösung entwickelt.",
      },

      {
        title:
          "Hilfsbereitschaft",

        symbol:
          "✦",

        text:
          "Dieses Zeichen ist gerne nützlich, unterstützt andere und verbessert den Alltag auf konkrete Weise. Zuneigung zeigt es häufig durch praktische Gesten und verlässliche Anwesenheit.",
      },

      {
        title:
          "Das Streben nach Präzision",

        symbol:
          "♍",

        text:
          "Die Jungfrau legt großen Wert auf Qualität, Ordnung und Stimmigkeit. Sie möchte, dass Dinge sorgfältig, verständlich und effizient ausgeführt werden.",
      },
    ],

    foundations: {
      title:
        "Element, Modalität und Herrscherplanet",

      element: {
        symbol:
          "🌿",

        title:
          "Element Erde",

        text:
          "Erde bringt Realismus, Stabilität, praktischen Sinn und ein Bedürfnis nach konkreten Ergebnissen. Sie regt die Jungfrau dazu an, Nutzbares aufzubauen, zu ordnen und zu verbessern.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Veränderliche Modalität",

        text:
          "Die veränderliche Modalität unterstützt Anpassung, Lernen und die Fähigkeit, Methoden anzupassen. Sie kann jedoch auch Unentschlossenheit oder die Tendenz verstärken, Details ständig zu verändern.",
      },

      ruler: {
        symbol:
          "☿",

        title:
          "Merkur",

        text:
          "Merkur steht für Denken, Analyse, Kommunikation und die Organisation von Informationen. In der Jungfrau wirkt er präzise, methodisch und praktisch.",
      },
    },

    strengthsSection: {
      title:
        "Stärken und Herausforderungen der Jungfrau",

      strengthsKicker:
        "Natürliche Stärken",

      strengthsTitle:
        "Was die Jungfrau einbringt",

      strengths: [
        "Präzision",
        "Zuverlässigkeit",
        "Organisation",
        "Analytisches Denken",
        "Fähigkeit zur Verbesserung",
        "Hilfsbereitschaft",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Was die Jungfrau lernt",

      challenges: [
        "Perfektionismus",
        "Selbstkritik",
        "Übermäßige Sorge",
        "Schwierigkeit loszulassen",
        "Zu starke Detailorientierung",
        "Tendenz, alles korrigieren zu wollen",
      ],
    },

    love: {
      title:
        "Die Jungfrau in der Liebe",

      paragraphs: [
        "In der Liebe sucht die Jungfrau gewöhnlich eine ehrliche, stabile und stimmige Beziehung. Sie legt großen Wert auf Vertrauen, Verbindlichkeit und die Qualität der alltäglichen Kommunikation.",

        "Sie zeigt Zuneigung häufig durch konkrete Gesten: helfen, zuhören, organisieren, unterstützen oder sich um Details kümmern, die der andere nicht immer bemerkt.",

        "Ihre größte Herausforderung besteht darin, die Beziehung nicht ständig zu analysieren oder nach unmöglicher Perfektion zu suchen. Sie profitiert davon, Gefühle direkter auszudrücken und zu erkennen, dass Verletzlichkeit ihren Wert nicht mindert.",
      ],
    },

    work: {
      title:
        "Die Jungfrau im Beruf",

      paragraphs: [
        "Im Berufsleben zeichnet sich die Jungfrau häufig durch Sorgfalt, Methode, analytische Fähigkeiten und den Wunsch nach gut ausgeführter Arbeit aus.",

        "Sie kann besonders wirkungsvoll in Bereichen sein, die mit Gesundheit, Verwaltung, Buchhaltung, Forschung, Schreiben, Datenanalyse, Organisation, Bildung oder spezialisierten Dienstleistungen verbunden sind.",

        "Sie schätzt strukturierte Umgebungen mit klaren Verantwortlichkeiten. Sie sollte jedoch vermeiden, sich zu erschöpfen, indem sie alles kontrollieren, korrigieren oder allein erledigen möchte.",
      ],
    },

    placements: {
      title:
        "Sonne, Mond und Aszendent in der Jungfrau",

      sun: {
        symbol:
          "☀️",

        title:
          "Sonne in der Jungfrau",

        text:
          "Die Sonne in der Jungfrau entwickelt ihre Identität durch Arbeit, Verbesserung, Präzision und den Wunsch, auf konkrete Weise nützlich zu sein.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Die Sonne verstehen",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Mond in der Jungfrau",

        text:
          "Der Mond in der Jungfrau findet sein emotionales Gleichgewicht durch Ordnung, Routinen, das Verstehen von Problemen und das Gefühl, nützlich zu sein.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Den Mond verstehen",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Aszendent Jungfrau",

        text:
          "Der Aszendent Jungfrau verleiht eine aufmerksame, zurückhaltende und beobachtende Ausstrahlung. Er begegnet dem Leben gewöhnlich mit Vorsicht, Methode und Urteilsvermögen.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Den Aszendenten verstehen",
      },
    },

    compatibilitySection: {
      title:
        "Die Kompatibilitäten der Jungfrau",

      paragraphs: [
        "Astrologische Kompatibilität basiert niemals ausschließlich auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

        "Einige Kombinationen können sich dennoch natürlicher anfühlen, wenn sie ein Bedürfnis nach Stabilität, Loyalität, Realismus und langfristigem Aufbau teilen.",
      ],

      titlePrefix:
        "Jungfrau und",
    },

    compatibilities: [
      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Stier und Jungfrau teilen ein Bedürfnis nach Sicherheit, Beständigkeit und Realismus. Ihre Beziehung kann sich langsam entwickeln, aber sehr stabil und verlässlich werden.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Der Steinbock versteht den Ernst, die Vorsicht und das Verantwortungsbewusstsein der Jungfrau. Gemeinsam können sie eine strukturierte und dauerhafte Beziehung aufbauen.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Der Krebs bringt Sensibilität, Wärme und emotionale Tiefe. Die Jungfrau bietet Unterstützung, Stabilität und konkrete Aufmerksamkeit, wodurch eine beruhigende Verbindung entstehen kann.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Der Skorpion bringt Intensität, Loyalität und Tiefe. Die Jungfrau trägt Urteilsvermögen, Beständigkeit und die Fähigkeit bei, die Einzelheiten einer Situation zu verstehen.",
      },
    ],

    natalChart: {
      title:
        "Die Jungfrau in Ihrem Geburtshoroskop",

      paragraphs: [
        "Die Jungfrau betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält die Jungfrau in einem bestimmten astrologischen Haus.",

        "Dieses Haus zeigt den Lebensbereich, in dem Sie ordnen, verbessern, analysieren oder nützlich sein möchten. Planeten in der Jungfrau verstärken diese Energie zusätzlich.",
      ],

      cta: {
        kicker:
          "Entdecken Sie Ihr Geburtshoroskop",

        title:
          "Wo befindet sich die Jungfrau in Ihrem Geburtshoroskop?",

        text:
          "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, astrologischen Häuser, Ihren Aszendenten und Ihre Planetenpositionen.",

        button:
          "Mein Geburtshoroskop erstellen",
      },
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zur Jungfrau",

      items: [
        {
          question:
            "Was sind die wichtigsten Eigenschaften der Jungfrau?",

          answer:
            "Die Jungfrau wird häufig mit Präzision, Zuverlässigkeit, Organisation, Analyse, Urteilsvermögen und dem Wunsch verbunden, nützlich zu sein.",
        },

        {
          question:
            "Was sind die wichtigsten Herausforderungen der Jungfrau?",

          answer:
            "Die Jungfrau kann manchmal zu kritisch, perfektionistisch oder besorgt werden. Ihre Entwicklung erfordert mehr Flexibilität, Vertrauen und Akzeptanz von Unvollkommenheit.",
        },

        {
          question:
            "Welcher Planet herrscht über die Jungfrau?",

          answer:
            "Die Jungfrau wird von Merkur beherrscht. Dieser Planet symbolisiert Denken, Kommunikation, Analyse und die Organisation von Informationen.",
        },

        {
          question:
            "Welches Element hat die Jungfrau?",

          answer:
            "Die Jungfrau gehört zum Element Erde. Dieses Element ist mit Realismus, Stabilität, praktischem Sinn, Arbeit und konkreten Ergebnissen verbunden.",
        },

        {
          question:
            "Wie erkenne ich, ob die Jungfrau in meinem Geburtshoroskop wichtig ist?",

          answer:
            "Die Jungfrau kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem das astrologische Haus der Jungfrau.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Vergine: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri la Vergine in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Mercurio, elemento Terra, Luna e Ascendente in Vergine.",

      ogTitle:
        "La Vergine in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa alla Vergine: carattere, punti di forza, sfide, relazioni, carriera, Mercurio, elemento Terra e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno della Vergine | Luna Astralis",

      twitterDescription:
        "Scopri la personalità della Vergine, le sue qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "La Vergine in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa dedicata alla Vergine, alle sue qualità, alle sfide, alle relazioni, alla carriera e alle principali caratteristiche astrologiche.",
    },

    hero: {
      badge:
        "♍ Sesto segno dello zodiaco",

      title:
        "La Vergine in astrologia",

      lead:
        "La Vergine simboleggia l’analisi, la precisione, il senso del servizio e la ricerca del miglioramento. Questo segno di Terra osserva i dettagli, organizza la realtà e cerca soluzioni concrete e utili.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      discover:
        "Scoprire la Vergine",
    },

    personality: {
      kicker:
        "Personalità della Vergine",

      title:
        "Che cosa rappresenta il segno della Vergine?",

      paragraphs: [
        "La Vergine è il sesto segno dello zodiaco. Rappresenta l’analisi, l’organizzazione, il discernimento, il lavoro coscienzioso e la capacità di migliorare ciò che esiste già.",

        "Una persona fortemente influenzata dalla Vergine cerca generalmente di comprendere come funzionano le cose. Nota i dettagli, individua le incoerenze e spesso preferisce le soluzioni pratiche alle grandi promesse.",

        "Questa energia porta precisione, affidabilità e senso di responsabilità. Richiede tuttavia di imparare a non confondere il miglioramento con la perfezione né la prudenza con la preoccupazione costante.",
      ],
    },

    traitsSection: {
      title:
        "Le principali caratteristiche della Vergine",
    },

    traits: [
      {
        title:
          "La capacità di analisi",

        symbol:
          "☿",

        text:
          "La Vergine osserva attentamente i fatti, i dettagli e i metodi. Cerca di comprendere le cause di un problema prima di proporre una soluzione adeguata.",
      },

      {
        title:
          "Il senso del servizio",

        symbol:
          "✦",

        text:
          "Questo segno ama rendersi utile, sostenere gli altri e migliorare concretamente la vita quotidiana. Dimostra spesso il proprio affetto attraverso gesti pratici e una presenza affidabile.",
      },

      {
        title:
          "La ricerca della precisione",

        symbol:
          "♍",

        text:
          "La Vergine attribuisce grande importanza alla qualità, all’ordine e alla coerenza. Desidera che le cose siano ben fatte, comprensibili ed efficaci.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalità e pianeta governatore",

      element: {
        symbol:
          "🌿",

        title:
          "Elemento Terra",

        text:
          "La Terra porta realismo, stabilità, senso pratico e bisogno di risultati concreti. Spinge la Vergine a costruire, organizzare e migliorare ciò che può essere realmente utilizzato.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalità mutevole",

        text:
          "La modalità mutevole favorisce l’adattamento, l’apprendimento e la capacità di modificare i metodi. Può tuttavia rafforzare l’esitazione o la tendenza a cambiare continuamente i dettagli.",
      },

      ruler: {
        symbol:
          "☿",

        title:
          "Mercurio",

        text:
          "Mercurio rappresenta il pensiero, l’analisi, la comunicazione e l’organizzazione delle informazioni. Nella Vergine agisce in modo preciso, metodico e pratico.",
      },
    },

    strengthsSection: {
      title:
        "I punti di forza e le sfide della Vergine",

      strengthsKicker:
        "Punti di forza naturali",

      strengthsTitle:
        "Ciò che la Vergine porta",

      strengths: [
        "Precisione",
        "Affidabilità",
        "Senso dell’organizzazione",
        "Pensiero analitico",
        "Capacità di miglioramento",
        "Senso del servizio",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Ciò che la Vergine impara",

      challenges: [
        "Perfezionismo",
        "Autocritica",
        "Preoccupazione eccessiva",
        "Difficoltà a lasciar andare",
        "Attenzione eccessiva ai dettagli",
        "Tendenza a voler correggere tutto",
      ],
    },

    love: {
      title:
        "La Vergine in amore",

      paragraphs: [
        "In amore, la Vergine cerca generalmente una relazione onesta, stabile e coerente. Attribuisce grande importanza alla fiducia, al rispetto degli impegni e alla qualità della comunicazione quotidiana.",

        "Esprime spesso il proprio affetto attraverso gesti concreti: aiutare, ascoltare, organizzare, sostenere o occuparsi di dettagli che l’altra persona non sempre nota.",

        "La sua principale sfida consiste nel non analizzare continuamente la relazione o cercare una perfezione impossibile. Trae beneficio dall’esprimere i sentimenti più direttamente e dal riconoscere che la vulnerabilità non diminuisce il proprio valore.",
      ],
    },

    work: {
      title:
        "La Vergine nel lavoro",

      paragraphs: [
        "Nella vita professionale, la Vergine si distingue spesso per rigore, metodo, capacità di analisi e attenzione al lavoro ben fatto.",

        "Può essere particolarmente efficace nei settori legati alla salute, all’amministrazione, alla contabilità, alla ricerca, alla scrittura, all’analisi dei dati, all’organizzazione, all’insegnamento o ai servizi specializzati.",

        "Apprezza gli ambienti strutturati in cui le responsabilità sono chiare. Deve tuttavia evitare di esaurirsi cercando di controllare, correggere o completare tutto da sola.",
      ],
    },

    placements: {
      title:
        "Sole, Luna e Ascendente in Vergine",

      sun: {
        symbol:
          "☀️",

        title:
          "Sole in Vergine",

        text:
          "Il Sole in Vergine costruisce la propria identità attraverso il lavoro, il miglioramento, la precisione e il desiderio di rendersi utile in modo concreto.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Comprendere il Sole",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna in Vergine",

        text:
          "La Luna in Vergine ritrova il proprio equilibrio emotivo attraverso l’ordine, le routine, la comprensione dei problemi e la sensazione di essere utile.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Comprendere la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Vergine",

        text:
          "L’Ascendente Vergine dona una presenza attenta, riservata e osservatrice. Affronta generalmente la vita con prudenza, metodo e discernimento.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Comprendere l’Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Le compatibilità della Vergine",

      paragraphs: [
        "La compatibilità astrologica non si basa mai soltanto sul segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

        "Alcune combinazioni possono tuttavia risultare naturalmente più fluide quando condividono un bisogno di stabilità, lealtà, realismo e costruzione a lungo termine.",
      ],

      titlePrefix:
        "Vergine e",
    },

    compatibilities: [
      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Toro e Vergine condividono un bisogno di sicurezza, costanza e realismo. La loro relazione può svilupparsi lentamente, ma diventare molto stabile e affidabile.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Il Capricorno comprende la serietà, la prudenza e il senso di responsabilità della Vergine. Insieme possono costruire una relazione strutturata e duratura.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Il Cancro porta sensibilità, calore e profondità emotiva. La Vergine offre sostegno, stabilità e attenzione concreta, creando un legame rassicurante.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Lo Scorpione porta intensità, lealtà e profondità. La Vergine contribuisce con discernimento, costanza e capacità di comprendere i dettagli di una situazione.",
      },
    ],

    natalChart: {
      title:
        "La Vergine nel tuo tema natale",

      paragraphs: [
        "La Vergine non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene la Vergine in una determinata casa astrologica.",

        "Questa casa mostra l’ambito della vita in cui cerchi di organizzare, migliorare, analizzare o renderti utile. Anche la presenza di pianeti in Vergine rafforza questa energia.",
      ],

      cta: {
        kicker:
          "Scopri il tuo tema natale",

        title:
          "Dove si trova la Vergine nel tuo tema natale?",

        text:
          "Genera gratuitamente il tuo tema natale per scoprire i tuoi segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

        button:
          "Creare il mio tema natale",
      },
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sulla Vergine",

      items: [
        {
          question:
            "Quali sono le principali qualità della Vergine?",

          answer:
            "La Vergine è spesso associata alla precisione, all’affidabilità, all’organizzazione, all’analisi, al discernimento e al desiderio di rendersi utile.",
        },

        {
          question:
            "Quali sono le principali sfide della Vergine?",

          answer:
            "La Vergine può talvolta diventare troppo critica, perfezionista o preoccupata. La sua evoluzione richiede maggiore flessibilità, fiducia e accettazione dell’imperfezione.",
        },

        {
          question:
            "Quale pianeta governa la Vergine?",

          answer:
            "La Vergine è governata da Mercurio. Questo pianeta simboleggia il pensiero, la comunicazione, l’analisi e l’organizzazione delle informazioni.",
        },

        {
          question:
            "Qual è l’elemento della Vergine?",

          answer:
            "La Vergine appartiene all’elemento Terra. Questo elemento è legato al realismo, alla stabilità, al senso pratico, al lavoro e ai risultati concreti.",
        },

        {
          question:
            "Come sapere se la Vergine è importante nel mio tema natale?",

          answer:
            "La Vergine può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette anche di scoprire la casa astrologica occupata dalla Vergine.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },
    pt: {
    metadata: {
      title:
        "Virgem: personalidade, amor, trabalho e compatibilidade | Luna Astralis",

      description:
        "Descubra Virgem na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidade, Mercúrio, elemento Terra, Lua e Ascendente em Virgem.",

      ogTitle:
        "Virgem na astrologia: personalidade, amor e compatibilidade",

      ogDescription:
        "Guia completo de Virgem: caráter, pontos fortes, desafios, relacionamentos, carreira, Mercúrio, elemento Terra e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Virgem | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Virgem, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Virgem na astrologia: personalidade, amor, trabalho e compatibilidade",

      description:
        "Guia completo sobre Virgem, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    hero: {
      badge:
        "♍ Sexto signo do zodíaco",

      title:
        "Virgem na astrologia",

      lead:
        "Virgem simboliza análise, precisão, senso de serviço e busca por aperfeiçoamento. Esse signo de Terra observa os detalhes, organiza a realidade e procura soluções concretas e úteis.",

      createChart:
        "Criar meu mapa astral grátis",

      discover:
        "Descobrir Virgem",
    },

    personality: {
      kicker:
        "Personalidade de Virgem",

      title:
        "O que representa o signo de Virgem?",

      paragraphs: [
        "Virgem é o sexto signo do zodíaco. Ele representa análise, organização, discernimento, trabalho cuidadoso e a capacidade de melhorar aquilo que já existe.",

        "Uma pessoa fortemente influenciada por Virgem geralmente procura compreender como as coisas funcionam. Ela percebe os detalhes, identifica incoerências e costuma preferir soluções práticas a grandes promessas.",

        "Essa energia traz precisão, confiabilidade e senso de responsabilidade. No entanto, também exige aprender a não confundir aperfeiçoamento com perfeição, nem prudência com preocupação constante.",
      ],
    },

    traitsSection: {
      title:
        "As principais características de Virgem",
    },

    traits: [
      {
        title:
          "A capacidade de análise",

        symbol:
          "☿",

        text:
          "Virgem observa cuidadosamente os fatos, os detalhes e os métodos. Procura compreender as causas de um problema antes de propor uma solução adequada.",
      },

      {
        title:
          "O senso de serviço",

        symbol:
          "✦",

        text:
          "Esse signo gosta de ser útil, apoiar as outras pessoas e melhorar concretamente a vida cotidiana. Costuma demonstrar afeto por meio de gestos práticos e de uma presença confiável.",
      },

      {
        title:
          "A busca pela precisão",

        symbol:
          "♍",

        text:
          "Virgem valoriza muito a qualidade, a ordem e a coerência. Deseja que as coisas sejam bem feitas, compreensíveis e eficientes.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidade e planeta regente",

      element: {
        symbol:
          "🌿",

        title:
          "Elemento Terra",

        text:
          "A Terra traz realismo, estabilidade, senso prático e necessidade de resultados concretos. Ela incentiva Virgem a construir, organizar e aperfeiçoar aquilo que pode ser realmente utilizado.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidade mutável",

        text:
          "A modalidade mutável favorece adaptação, aprendizado e capacidade de ajustar os métodos. Também pode reforçar a indecisão ou a tendência de modificar constantemente os detalhes.",
      },

      ruler: {
        symbol:
          "☿",

        title:
          "Mercúrio",

        text:
          "Mercúrio representa pensamento, análise, comunicação e organização das informações. Em Virgem, ele atua de maneira precisa, metódica e prática.",
      },
    },

    strengthsSection: {
      title:
        "Os pontos fortes e os desafios de Virgem",

      strengthsKicker:
        "Pontos fortes naturais",

      strengthsTitle:
        "O que Virgem oferece",

      strengths: [
        "Precisão",
        "Confiabilidade",
        "Senso de organização",
        "Pensamento analítico",
        "Capacidade de aperfeiçoamento",
        "Senso de serviço",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "O que Virgem aprende",

      challenges: [
        "Perfeccionismo",
        "Autocrítica",
        "Preocupação excessiva",
        "Dificuldade de relaxar",
        "Atenção excessiva aos detalhes",
        "Tendência a querer corrigir tudo",
      ],
    },

    love: {
      title:
        "Virgem no amor",

      paragraphs: [
        "No amor, Virgem geralmente procura um relacionamento honesto, estável e coerente. Valoriza muito a confiança, o respeito aos compromissos e a qualidade da comunicação cotidiana.",

        "Costuma demonstrar afeto por meio de gestos concretos: ajudar, escutar, organizar, apoiar ou cuidar de detalhes que a outra pessoa nem sempre percebe.",

        "Seu principal desafio é não analisar constantemente o relacionamento nem procurar uma perfeição impossível. Virgem se beneficia ao expressar os sentimentos de maneira mais direta e reconhecer que a vulnerabilidade não diminui seu valor.",
      ],
    },

    work: {
      title:
        "Virgem no trabalho",

      paragraphs: [
        "Na vida profissional, Virgem costuma se destacar pela disciplina, pelo método, pela capacidade de análise e pelo cuidado com o trabalho bem executado.",

        "Pode ser especialmente eficiente em áreas relacionadas à saúde, administração, contabilidade, pesquisa, escrita, análise de dados, organização, ensino ou serviços especializados.",

        "Virgem aprecia ambientes estruturados, nos quais as responsabilidades são claras. No entanto, precisa evitar o esgotamento causado pela tentativa de verificar, corrigir ou realizar tudo sozinho.",
      ],
    },

    placements: {
      title:
        "Sol, Lua e Ascendente em Virgem",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol em Virgem",

        text:
          "O Sol em Virgem constrói sua identidade por meio do trabalho, do aperfeiçoamento, da precisão e do desejo de ser útil de maneira concreta.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Compreender o Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lua em Virgem",

        text:
          "A Lua em Virgem recupera seu equilíbrio emocional por meio da ordem, das rotinas, da compreensão dos problemas e da sensação de ser útil.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Compreender a Lua",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente em Virgem",

        text:
          "O Ascendente em Virgem proporciona uma presença atenta, reservada e observadora. Geralmente aborda a vida com prudência, método e discernimento.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Compreender o Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "As compatibilidades de Virgem",

      paragraphs: [
        "A compatibilidade astrológica nunca se baseia apenas no signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

        "Algumas combinações podem, no entanto, parecer naturalmente mais harmoniosas quando compartilham uma necessidade de estabilidade, lealdade, realismo e construção a longo prazo.",
      ],

      titlePrefix:
        "Virgem e",
    },

    compatibilities: [
      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Touro e Virgem compartilham uma necessidade de segurança, constância e realismo. O relacionamento pode se desenvolver lentamente, mas se tornar muito estável e confiável.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Capricórnio compreende a seriedade, a prudência e o senso de responsabilidade de Virgem. Juntos, podem construir um relacionamento estruturado e duradouro.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Câncer traz sensibilidade, acolhimento e profundidade emocional. Virgem oferece apoio, estabilidade e atenção concreta, criando um vínculo reconfortante.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Escorpião traz intensidade, lealdade e profundidade. Virgem contribui com discernimento, constância e capacidade de compreender os detalhes de uma situação.",
      },
    ],

    natalChart: {
      title:
        "Virgem no seu mapa natal",

      paragraphs: [
        "Virgem não se relaciona apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Virgem em uma determinada casa astrológica.",

        "Essa casa mostra a área da vida em que você procura organizar, aperfeiçoar, analisar ou ser útil. A presença de planetas em Virgem também reforça essa energia.",
      ],

      cta: {
        kicker:
          "Descubra seu mapa natal",

        title:
          "Onde está Virgem no seu mapa astral?",

        text:
          "Gere gratuitamente seu mapa astral para descobrir seus signos, suas casas astrológicas, seu Ascendente e as posições dos seus planetas.",

        button:
          "Criar meu mapa astral",
      },
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Virgem",

      items: [
        {
          question:
            "Quais são as principais qualidades de Virgem?",

          answer:
            "Virgem costuma ser associado à precisão, à confiabilidade, à organização, à análise, ao discernimento e ao desejo de ser útil.",
        },

        {
          question:
            "Quais são os principais desafios de Virgem?",

          answer:
            "Virgem pode se tornar excessivamente crítico, perfeccionista ou preocupado. Seu desenvolvimento exige mais flexibilidade, confiança e aceitação da imperfeição.",
        },

        {
          question:
            "Qual planeta rege Virgem?",

          answer:
            "Virgem é regido por Mercúrio. Esse planeta simboliza pensamento, comunicação, análise e organização das informações.",
        },

        {
          question:
            "Qual é o elemento de Virgem?",

          answer:
            "Virgem pertence ao elemento Terra. Esse elemento está relacionado ao realismo, à estabilidade, ao senso prático, ao trabalho e aos resultados concretos.",
        },

        {
          question:
            "Como saber se Virgem é importante no meu mapa natal?",

          answer:
            "Virgem pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo também revela a casa astrológica ocupada por Virgem.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui aconselhamento médico, psicológico, jurídico ou financeiro.",
  },
};
