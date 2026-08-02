// i18n/pages/astrologie/taureau.ts

import type {
  Locale,
} from "@/i18n/config";

export type TaurusCard = {
  title: string;
  symbol: string;
  text: string;
};

export type TaurusCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type TaurusFaqItem = {
  question: string;
  answer: string;
};

export type TaurusPageText = {
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

  traits: TaurusCard[];

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

  compatibilities: TaurusCompatibility[];

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
    items: TaurusFaqItem[];
  };

  disclaimer: string;
};

export const TAUREAU_TRANSLATIONS:
  Record<
    Locale,
    TaurusPageText
  > = {
  fr: {
    metadata: {
      title:
        "Taureau : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Taureau en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, planète Vénus, élément Terre, Lune et Ascendant en Taureau.",

      ogTitle:
        "Le Taureau en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Taureau : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",

      twitterTitle:
        "Le signe du Taureau | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Taureau, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Taureau en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Taureau, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    hero: {
      badge:
        "♉ Deuxième signe du zodiaque",

      title:
        "Le Taureau en astrologie",

      lead:
        "Le Taureau symbolise la stabilité, la patience, l’enracinement et le besoin de construire quelque chose de solide. Ce signe de Terre avance avec constance et fidélité à ses valeurs.",

      createChart:
        "Créer ma carte du ciel gratuite",

      discover:
        "Découvrir le Taureau",
    },

    personality: {
      kicker:
        "Personnalité du Taureau",

      title:
        "Que représente le signe du Taureau ?",

      paragraphs: [
        "Le Taureau est le deuxième signe du zodiaque. Il représente la construction, la continuité et le développement de bases suffisamment solides pour soutenir la croissance.",

        "Une personne marquée par le Taureau recherche généralement la sécurité, la stabilité et la cohérence. Elle préfère prendre le temps d’observer, d’évaluer et de progresser à son propre rythme plutôt que de se précipiter.",

        "Cette énergie apporte souvent de la patience, du réalisme et une forte capacité de persévérance. Elle demande toutefois d’apprendre à accueillir le changement et à ne pas confondre stabilité et immobilité.",
      ],
    },

    traitsSection: {
      title:
        "Les grandes caractéristiques du Taureau",
    },

    traits: [
      {
        title:
          "La stabilité",

        symbol:
          "✦",

        text:
          "Le Taureau recherche des bases solides, des repères fiables et une progression durable. Il préfère généralement construire lentement plutôt que prendre des décisions précipitées.",
      },

      {
        title:
          "La persévérance",

        symbol:
          "◇",

        text:
          "Lorsqu’il s’engage dans une direction, le Taureau peut faire preuve d’une grande constance. Il avance avec patience et résiste aux obstacles grâce à sa détermination.",
      },

      {
        title:
          "Le sens des valeurs",

        symbol:
          "♢",

        text:
          "Le Taureau accorde de l’importance à ce qui possède une valeur réelle, qu’elle soit matérielle, affective ou symbolique. Il cherche à protéger ce qu’il considère comme essentiel.",
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
          "La Terre apporte réalisme, patience, sens pratique et besoin de sécurité. Elle pousse le Taureau à bâtir de manière concrète et durable.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalité fixe",

        text:
          "La modalité fixe renforce la constance, la stabilité et la capacité à maintenir un effort dans le temps.",
      },

      ruler: {
        symbol:
          "♀",

        title:
          "Planète Vénus",

        text:
          "Vénus représente les valeurs, les liens, le plaisir, la beauté et l’harmonie. Elle nourrit le besoin de confort et d’attachement du Taureau.",
      },
    },

    strengthsSection: {
      title:
        "Les forces et les défis du Taureau",

      strengthsKicker:
        "Forces naturelles",

      strengthsTitle:
        "Ce que le Taureau apporte",

      strengths: [
        "Patience",
        "Fiabilité",
        "Persévérance",
        "Loyauté",
        "Sens pratique",
        "Stabilité",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Ce que le Taureau apprend",

      challenges: [
        "Résistance au changement",
        "Entêtement",
        "Attachement aux habitudes",
        "Possessivité",
        "Difficulté à lâcher prise",
        "Tendance à rester dans sa zone de confort",
      ],
    },

    love: {
      title:
        "Le Taureau en amour",

      paragraphs: [
        "En amour, le Taureau recherche généralement une relation stable, sincère et sécurisante. Il apprécie la constance, la fidélité et les gestes concrets qui témoignent d’un engagement réel.",

        "Il peut prendre du temps avant de s’ouvrir complètement, mais son attachement devient souvent profond lorsqu’il se sent en confiance. Il accorde une grande valeur à la présence, au contact, au confort et aux habitudes partagées.",

        "Son principal défi consiste à éviter la possessivité ou la peur du changement. Une relation saine lui demande de préserver la sécurité sans limiter la liberté de l’autre.",
      ],
    },

    work: {
      title:
        "Le Taureau au travail",

      paragraphs: [
        "Dans la vie professionnelle, le Taureau se distingue souvent par sa fiabilité, sa patience et sa capacité à maintenir un effort sur une longue période.",

        "Il peut être particulièrement efficace dans les environnements où la rigueur, la stabilité, le sens pratique et la gestion des ressources sont valorisés.",

        "Il préfère généralement savoir où il va et comprendre la valeur concrète de son travail. Les changements brusques ou les décisions imprévisibles peuvent réduire son sentiment de sécurité.",
      ],
    },

    placements: {
      title:
        "Soleil, Lune et Ascendant en Taureau",

      sun: {
        symbol:
          "☀️",

        title:
          "Soleil en Taureau",

        text:
          "Le Soleil en Taureau construit son identité par la stabilité, la fidélité à ses valeurs et la recherche d’une progression durable.",

        link:
          "Comprendre le Soleil",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lune en Taureau",

        text:
          "La Lune en Taureau a besoin de calme, de repères et de sécurité concrète pour retrouver son équilibre émotionnel.",

        link:
          "Comprendre la Lune",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendant Taureau",

        text:
          "L’Ascendant Taureau donne une présence calme, stable et rassurante. Il aborde généralement la vie avec prudence et constance.",

        link:
          "Comprendre l’Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Les compatibilités du Taureau",

      paragraphs: [
        "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

        "Certaines associations peuvent néanmoins sembler plus naturelles lorsqu’elles partagent un besoin de sécurité, de constance ou de profondeur émotionnelle.",
      ],

      titlePrefix:
        "Taureau et",
    },

    compatibilities: [
      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "La Vierge partage avec le Taureau un besoin de stabilité, de réalisme et de confiance. Cette relation peut se construire progressivement sur des bases solides.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Le Capricorne comprend la prudence et la persévérance du Taureau. Ensemble, ils peuvent créer une relation durable, structurée et orientée vers des objectifs communs.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Le Cancer peut apporter chaleur, sensibilité et attachement au foyer. Le Taureau offre en retour stabilité, présence et sécurité concrète.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Les Poissons apportent imagination, intuition et douceur. Le Taureau peut offrir une base rassurante qui aide cette relation à prendre une forme plus stable.",
      },
    ],

    natalChart: {
      title:
        "Le Taureau dans votre thème natal",

      paragraphs: [
        "Le Taureau ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Taureau dans une maison astrologique particulière.",

        "Cette maison montre le domaine de vie dans lequel vous recherchez davantage de stabilité, de continuité et de sécurité. La présence de planètes en Taureau renforce également cette énergie.",
      ],

      cta: {
        kicker:
          "Découvrez votre thème natal",

        title:
          "Où se trouve le Taureau dans votre carte du ciel ?",

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
        "Questions sur le Taureau",

      items: [
        {
          question:
            "Quelles sont les principales qualités du Taureau ?",

          answer:
            "Le Taureau est souvent associé à la patience, à la loyauté, à la persévérance, au sens pratique et à la capacité de construire progressivement quelque chose de durable.",
        },

        {
          question:
            "Quels sont les principaux défis du Taureau ?",

          answer:
            "Le Taureau peut parfois résister au changement, s’attacher fortement à ses habitudes ou avoir de la difficulté à lâcher prise. Son évolution passe souvent par davantage de souplesse.",
        },

        {
          question:
            "Quelle planète gouverne le Taureau ?",

          answer:
            "Le Taureau est gouverné par Vénus, planète traditionnellement associée aux valeurs, aux relations, au plaisir, à la beauté, à l’harmonie et à l’attachement.",
        },

        {
          question:
            "Quel est l’élément du Taureau ?",

          answer:
            "Le Taureau appartient à l’élément Terre. Cet élément est associé au réalisme, à la stabilité, au concret, à la patience et au besoin de sécurité.",
        },

        {
          question:
            "Comment savoir si le Taureau est important dans mon thème natal ?",

          answer:
            "Le Taureau peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Taurus: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Taurus in astrology: personality, strengths, challenges, love, career, compatibility, Venus, the Earth element, Taurus Moon and Taurus Rising.",

      ogTitle:
        "Taurus in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Taurus: personality, strengths, challenges, relationships, career, ruling planet and main astrological compatibilities.",

      twitterTitle:
        "The Taurus Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Taurus personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Taurus in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Taurus, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    hero: {
      badge:
        "♉ Second sign of the zodiac",

      title:
        "Taurus in Astrology",

      lead:
        "Taurus symbolizes stability, patience, grounding and the need to build something solid. This Earth sign moves forward with consistency and loyalty to its values.",

      createChart:
        "Create my free birth chart",

      discover:
        "Discover Taurus",
    },

    personality: {
      kicker:
        "Taurus personality",

      title:
        "What does Taurus represent?",

      paragraphs: [
        "Taurus is the second sign of the zodiac. It represents construction, continuity and the development of foundations strong enough to support growth.",

        "A person strongly influenced by Taurus generally seeks security, stability and consistency. They prefer to take time to observe, evaluate and progress at their own pace rather than rush.",

        "This energy often brings patience, realism and a strong capacity for perseverance. However, it requires learning to welcome change and avoid confusing stability with immobility.",
      ],
    },

    traitsSection: {
      title:
        "The main characteristics of Taurus",
    },

    traits: [
      {
        title:
          "Stability",

        symbol:
          "✦",

        text:
          "Taurus seeks solid foundations, reliable reference points and lasting progress. It generally prefers to build slowly rather than make rushed decisions.",
      },

      {
        title:
          "Perseverance",

        symbol:
          "◇",

        text:
          "Once Taurus commits to a direction, it can demonstrate great consistency. It moves forward patiently and resists obstacles through determination.",
      },

      {
        title:
          "A strong sense of values",

        symbol:
          "♢",

        text:
          "Taurus gives importance to what has real value, whether material, emotional or symbolic. It seeks to protect what it considers essential.",
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
          "Earth brings realism, patience, practicality and a need for security. It encourages Taurus to build in a concrete and lasting way.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Fixed modality",

        text:
          "The fixed modality strengthens consistency, stability and the ability to sustain effort over time.",
      },

      ruler: {
        symbol:
          "♀",

        title:
          "Venus",

        text:
          "Venus represents values, relationships, pleasure, beauty and harmony. It supports Taurus’ need for comfort and attachment.",
      },
    },

    strengthsSection: {
      title:
        "Taurus strengths and challenges",

      strengthsKicker:
        "Natural strengths",

      strengthsTitle:
        "What Taurus brings",

      strengths: [
        "Patience",
        "Reliability",
        "Perseverance",
        "Loyalty",
        "Practical sense",
        "Stability",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "What Taurus learns",

      challenges: [
        "Resistance to change",
        "Stubbornness",
        "Attachment to habits",
        "Possessiveness",
        "Difficulty letting go",
        "Tendency to remain in a comfort zone",
      ],
    },

    love: {
      title:
        "Taurus in love",

      paragraphs: [
        "In love, Taurus generally seeks a stable, sincere and reassuring relationship. It appreciates consistency, loyalty and concrete gestures that demonstrate genuine commitment.",

        "Taurus may take time before opening completely, but its attachment often becomes deep once trust is established. It places great value on presence, touch, comfort and shared routines.",

        "Its main challenge is avoiding possessiveness or fear of change. A healthy relationship requires preserving security without limiting the other person’s freedom.",
      ],
    },

    work: {
      title:
        "Taurus at work",

      paragraphs: [
        "In professional life, Taurus often stands out through reliability, patience and the ability to maintain effort over a long period.",

        "It may be particularly effective in environments where rigor, stability, practicality and resource management are valued.",

        "Taurus generally prefers to know where it is going and understand the concrete value of its work. Sudden changes or unpredictable decisions may reduce its sense of security.",
      ],
    },

    placements: {
      title:
        "Taurus Sun, Moon and Rising",

      sun: {
        symbol:
          "☀️",

        title:
          "Sun in Taurus",

        text:
          "The Sun in Taurus builds identity through stability, loyalty to personal values and the search for lasting progress.",

        link:
          "Understand the Sun",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Moon in Taurus",

        text:
          "The Moon in Taurus needs calm, reliable reference points and concrete security to restore emotional balance.",

        link:
          "Understand the Moon",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Taurus Rising",

        text:
          "Taurus Rising gives a calm, stable and reassuring presence. It generally approaches life with caution and consistency.",

        link:
          "Understand the Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Taurus compatibility",

      paragraphs: [
        "Astrological compatibility is never based only on the Sun sign. The Moon, Venus, Mars, the Ascendant and aspects between two charts provide essential information.",

        "Some combinations may nevertheless feel more natural when they share a need for security, consistency or emotional depth.",
      ],

      titlePrefix:
        "Taurus and",
    },

    compatibilities: [
      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo shares Taurus’ need for stability, realism and trust. This relationship may develop gradually on solid foundations.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Capricorn understands Taurus’ caution and perseverance. Together, they may create a lasting, structured relationship focused on shared goals.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Cancer may bring warmth, sensitivity and attachment to home. Taurus offers stability, presence and practical security in return.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Pisces brings imagination, intuition and gentleness. Taurus may offer a reassuring foundation that helps the relationship develop into a more stable form.",
      },
    ],

    natalChart: {
      title:
        "Taurus in your birth chart",

      paragraphs: [
        "Taurus does not concern only people born under this sign. Every birth chart contains Taurus in a particular astrological house.",

        "This house shows the area of life in which you seek greater stability, continuity and security. The presence of planets in Taurus also strengthens this energy.",
      ],

      cta: {
        kicker:
          "Discover your birth chart",

        title:
          "Where is Taurus located in your birth chart?",

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
        "Questions about Taurus",

      items: [
        {
          question:
            "What are the main qualities of Taurus?",

          answer:
            "Taurus is often associated with patience, loyalty, perseverance, practicality and the ability to build something lasting gradually.",
        },

        {
          question:
            "What are the main challenges of Taurus?",

          answer:
            "Taurus may sometimes resist change, become strongly attached to habits or struggle to let go. Growth often involves greater flexibility.",
        },

        {
          question:
            "Which planet rules Taurus?",

          answer:
            "Taurus is ruled by Venus, the planet traditionally associated with values, relationships, pleasure, beauty, harmony and attachment.",
        },

        {
          question:
            "What is the element of Taurus?",

          answer:
            "Taurus belongs to the Earth element. Earth is associated with realism, stability, practicality, patience and the need for security.",
        },

        {
          question:
            "How can I know whether Taurus is important in my birth chart?",

          answer:
            "Taurus may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart can confirm it.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Tauro: personalidad, amor, trabajo y compatibilidad | Luna Astralis",

      description:
        "Descubre Tauro en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidad, Venus, elemento Tierra, Luna y Ascendente Tauro.",

      ogTitle:
        "Tauro en astrología: personalidad, amor y compatibilidad",

      ogDescription:
        "Guía completa de Tauro: personalidad, fortalezas, desafíos, relaciones, carrera, planeta regente y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Tauro | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Tauro, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Tauro en astrología: personalidad, amor, trabajo y compatibilidad",

      description:
        "Guía completa sobre Tauro, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    hero: {
      badge:
        "♉ Segundo signo del zodiaco",

      title:
        "Tauro en astrología",

      lead:
        "Tauro simboliza la estabilidad, la paciencia, el arraigo y la necesidad de construir algo sólido. Este signo de Tierra avanza con constancia y fidelidad a sus valores.",

      createChart:
        "Crear mi carta natal gratis",

      discover:
        "Descubrir Tauro",
    },

    personality: {
      kicker:
        "Personalidad de Tauro",

      title:
        "¿Qué representa el signo de Tauro?",

      paragraphs: [
        "Tauro es el segundo signo del zodiaco. Representa la construcción, la continuidad y el desarrollo de bases suficientemente sólidas para sostener el crecimiento.",

        "Una persona influenciada por Tauro suele buscar seguridad, estabilidad y coherencia. Prefiere tomarse el tiempo necesario para observar, evaluar y avanzar a su propio ritmo en lugar de precipitarse.",

        "Esta energía suele aportar paciencia, realismo y una gran capacidad de perseverancia. Sin embargo, exige aprender a aceptar el cambio y a no confundir estabilidad con inmovilidad.",
      ],
    },

    traitsSection: {
      title:
        "Las principales características de Tauro",
    },

    traits: [
      {
        title:
          "La estabilidad",

        symbol:
          "✦",

        text:
          "Tauro busca bases sólidas, puntos de referencia fiables y un progreso duradero. Generalmente prefiere construir lentamente antes que tomar decisiones precipitadas.",
      },

      {
        title:
          "La perseverancia",

        symbol:
          "◇",

        text:
          "Cuando se compromete con una dirección, Tauro puede demostrar una gran constancia. Avanza con paciencia y resiste los obstáculos gracias a su determinación.",
      },

      {
        title:
          "El sentido de los valores",

        symbol:
          "♢",

        text:
          "Tauro da importancia a todo lo que posee un valor real, ya sea material, afectivo o simbólico. Busca proteger aquello que considera esencial.",
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
          "La Tierra aporta realismo, paciencia, sentido práctico y necesidad de seguridad. Impulsa a Tauro a construir de manera concreta y duradera.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidad fija",

        text:
          "La modalidad fija refuerza la constancia, la estabilidad y la capacidad de mantener un esfuerzo a lo largo del tiempo.",
      },

      ruler: {
        symbol:
          "♀",

        title:
          "Planeta Venus",

        text:
          "Venus representa los valores, los vínculos, el placer, la belleza y la armonía. Alimenta la necesidad de comodidad y apego de Tauro.",
      },
    },

    strengthsSection: {
      title:
        "Las fortalezas y los desafíos de Tauro",

      strengthsKicker:
        "Fortalezas naturales",

      strengthsTitle:
        "Lo que aporta Tauro",

      strengths: [
        "Paciencia",
        "Fiabilidad",
        "Perseverancia",
        "Lealtad",
        "Sentido práctico",
        "Estabilidad",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Lo que aprende Tauro",

      challenges: [
        "Resistencia al cambio",
        "Terquedad",
        "Apego a las costumbres",
        "Posesividad",
        "Dificultad para soltar",
        "Tendencia a permanecer en su zona de confort",
      ],
    },

    love: {
      title:
        "Tauro en el amor",

      paragraphs: [
        "En el amor, Tauro suele buscar una relación estable, sincera y segura. Aprecia la constancia, la fidelidad y los gestos concretos que demuestran un compromiso verdadero.",

        "Puede tardar en abrirse completamente, pero su apego suele volverse profundo cuando se siente en confianza. Da mucha importancia a la presencia, el contacto, la comodidad y las costumbres compartidas.",

        "Su principal desafío consiste en evitar la posesividad o el miedo al cambio. Una relación sana exige conservar la seguridad sin limitar la libertad de la otra persona.",
      ],
    },

    work: {
      title:
        "Tauro en el trabajo",

      paragraphs: [
        "En la vida profesional, Tauro suele destacar por su fiabilidad, paciencia y capacidad para mantener un esfuerzo durante un largo período.",

        "Puede ser especialmente eficaz en entornos donde se valoran el rigor, la estabilidad, el sentido práctico y la gestión de los recursos.",

        "Generalmente prefiere saber hacia dónde se dirige y comprender el valor concreto de su trabajo. Los cambios bruscos o las decisiones imprevisibles pueden reducir su sensación de seguridad.",
      ],
    },

    placements: {
      title:
        "Sol, Luna y Ascendente en Tauro",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol en Tauro",

        text:
          "El Sol en Tauro construye su identidad mediante la estabilidad, la fidelidad a sus valores y la búsqueda de un progreso duradero.",

        link:
          "Comprender el Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna en Tauro",

        text:
          "La Luna en Tauro necesita calma, puntos de referencia y seguridad concreta para recuperar su equilibrio emocional.",

        link:
          "Comprender la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Tauro",

        text:
          "El Ascendente Tauro aporta una presencia tranquila, estable y reconfortante. Suele abordar la vida con prudencia y constancia.",

        link:
          "Comprender el Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Las compatibilidades de Tauro",

      paragraphs: [
        "La compatibilidad astrológica nunca se basa únicamente en el signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre las dos cartas aportan información esencial.",

        "Sin embargo, algunas asociaciones pueden parecer más naturales cuando comparten una necesidad de seguridad, constancia o profundidad emocional.",
      ],

      titlePrefix:
        "Tauro y",
    },

    compatibilities: [
      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo comparte con Tauro una necesidad de estabilidad, realismo y confianza. Esta relación puede construirse progresivamente sobre bases sólidas.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Capricornio comprende la prudencia y la perseverancia de Tauro. Juntos pueden crear una relación duradera, estructurada y orientada hacia objetivos comunes.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Cáncer puede aportar calidez, sensibilidad y apego al hogar. Tauro ofrece a cambio estabilidad, presencia y seguridad concreta.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Piscis aporta imaginación, intuición y dulzura. Tauro puede ofrecer una base reconfortante que ayude a la relación a adoptar una forma más estable.",
      },
    ],

    natalChart: {
      title:
        "Tauro en tu carta natal",

      paragraphs: [
        "Tauro no se relaciona únicamente con las personas nacidas bajo este signo. Cada carta natal contiene Tauro en una casa astrológica particular.",

        "Esta casa muestra el ámbito de vida en el que buscas mayor estabilidad, continuidad y seguridad. La presencia de planetas en Tauro también refuerza esta energía.",
      ],

      cta: {
        kicker:
          "Descubre tu carta natal",

        title:
          "¿Dónde se encuentra Tauro en tu carta natal?",

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
        "Preguntas sobre Tauro",

      items: [
        {
          question:
            "¿Cuáles son las principales cualidades de Tauro?",

          answer:
            "Tauro suele asociarse con la paciencia, la lealtad, la perseverancia, el sentido práctico y la capacidad de construir progresivamente algo duradero.",
        },

        {
          question:
            "¿Cuáles son los principales desafíos de Tauro?",

          answer:
            "Tauro puede resistirse al cambio, apegarse fuertemente a sus costumbres o tener dificultades para soltar. Su evolución suele requerir mayor flexibilidad.",
        },

        {
          question:
            "¿Qué planeta gobierna Tauro?",

          answer:
            "Tauro está gobernado por Venus, planeta tradicionalmente asociado con los valores, las relaciones, el placer, la belleza, la armonía y el apego.",
        },

        {
          question:
            "¿Cuál es el elemento de Tauro?",

          answer:
            "Tauro pertenece al elemento Tierra. Este elemento se asocia con el realismo, la estabilidad, lo concreto, la paciencia y la necesidad de seguridad.",
        },

        {
          question:
            "¿Cómo saber si Tauro es importante en mi carta natal?",

          answer:
            "Tauro puede ser importante si tu Sol, Luna, Ascendente o varios planetas se encuentran en este signo. Una carta natal completa permite comprobarlo.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Stier: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Stier in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Venus, Erdelement, Mond und Aszendent Stier.",

      ogTitle:
        "Stier in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Stier: Persönlichkeit, Stärken, Herausforderungen, Beziehungen, Beruf, Herrscherplanet und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Stier | Luna Astralis",

      twitterDescription:
        "Entdecken Sie Persönlichkeit, Stärken, Herausforderungen, Beziehungen und astrologische Kompatibilität des Stiers.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Stier in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Stier, seinen Stärken, Herausforderungen, Beziehungen, seinem Beruf und seinen wichtigsten astrologischen Eigenschaften.",
    },

    hero: {
      badge:
        "♉ Zweites Tierkreiszeichen",

      title:
        "Der Stier in der Astrologie",

      lead:
        "Der Stier symbolisiert Stabilität, Geduld, Verwurzelung und das Bedürfnis, etwas Solides aufzubauen. Dieses Erdzeichen schreitet beständig und seinen Werten treu voran.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      discover:
        "Den Stier entdecken",
    },

    personality: {
      kicker:
        "Persönlichkeit des Stiers",

      title:
        "Was bedeutet das Zeichen Stier?",

      paragraphs: [
        "Der Stier ist das zweite Zeichen des Tierkreises. Er steht für Aufbau, Kontinuität und die Entwicklung stabiler Grundlagen, die Wachstum ermöglichen.",

        "Ein stark vom Stier geprägter Mensch sucht meist Sicherheit, Stabilität und Beständigkeit. Er nimmt sich lieber Zeit zum Beobachten, Bewerten und Voranschreiten, anstatt überstürzt zu handeln.",

        "Diese Energie bringt häufig Geduld, Realismus und große Ausdauer. Sie verlangt jedoch, Veränderungen anzunehmen und Stabilität nicht mit Stillstand zu verwechseln.",
      ],
    },

    traitsSection: {
      title:
        "Die wichtigsten Eigenschaften des Stiers",
    },

    traits: [
      {
        title:
          "Stabilität",

        symbol:
          "✦",

        text:
          "Der Stier sucht solide Grundlagen, verlässliche Orientierungspunkte und dauerhaften Fortschritt. Er baut meist lieber langsam auf, als übereilte Entscheidungen zu treffen.",
      },

      {
        title:
          "Ausdauer",

        symbol:
          "◇",

        text:
          "Wenn sich der Stier für eine Richtung entschieden hat, kann er große Beständigkeit zeigen. Er schreitet geduldig voran und widersteht Hindernissen durch seine Entschlossenheit.",
      },

      {
        title:
          "Wertebewusstsein",

        symbol:
          "♢",

        text:
          "Der Stier misst allem Bedeutung bei, was einen echten materiellen, emotionalen oder symbolischen Wert besitzt. Er möchte schützen, was er für wesentlich hält.",
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
          "Erde bringt Realismus, Geduld, praktischen Sinn und Sicherheitsbedürfnis. Sie bewegt den Stier dazu, konkret und dauerhaft aufzubauen.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Feste Modalität",

        text:
          "Die feste Modalität verstärkt Beständigkeit, Stabilität und die Fähigkeit, eine Anstrengung über längere Zeit aufrechtzuerhalten.",
      },

      ruler: {
        symbol:
          "♀",

        title:
          "Planet Venus",

        text:
          "Venus steht für Werte, Beziehungen, Freude, Schönheit und Harmonie. Sie stärkt das Bedürfnis des Stiers nach Komfort und Verbundenheit.",
      },
    },

    strengthsSection: {
      title:
        "Stärken und Herausforderungen des Stiers",

      strengthsKicker:
        "Natürliche Stärken",

      strengthsTitle:
        "Was der Stier einbringt",

      strengths: [
        "Geduld",
        "Zuverlässigkeit",
        "Ausdauer",
        "Treue",
        "Praktischer Sinn",
        "Stabilität",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Was der Stier lernt",

      challenges: [
        "Widerstand gegen Veränderungen",
        "Sturheit",
        "Festhalten an Gewohnheiten",
        "Besitzdenken",
        "Schwierigkeit loszulassen",
        "Neigung, in der Komfortzone zu bleiben",
      ],
    },

    love: {
      title:
        "Der Stier in der Liebe",

      paragraphs: [
        "In der Liebe sucht der Stier meist eine stabile, aufrichtige und sichere Beziehung. Er schätzt Beständigkeit, Treue und konkrete Gesten, die echtes Engagement zeigen.",

        "Es kann einige Zeit dauern, bis er sich vollständig öffnet, doch sein Bindungsgefühl wird häufig tief, sobald Vertrauen entsteht. Nähe, Berührung, Komfort und gemeinsame Gewohnheiten sind ihm besonders wichtig.",

        "Seine größte Herausforderung besteht darin, Besitzdenken oder Angst vor Veränderungen zu vermeiden. Eine gesunde Beziehung verlangt, Sicherheit zu bewahren, ohne die Freiheit des anderen einzuschränken.",
      ],
    },

    work: {
      title:
        "Der Stier im Beruf",

      paragraphs: [
        "Im Berufsleben zeichnet sich der Stier häufig durch Zuverlässigkeit, Geduld und die Fähigkeit aus, über lange Zeit eine konstante Leistung aufrechtzuerhalten.",

        "Er kann besonders erfolgreich in Umgebungen sein, in denen Genauigkeit, Stabilität, praktischer Sinn und Ressourcenmanagement geschätzt werden.",

        "Der Stier weiß meist gern, wohin er geht, und möchte den konkreten Wert seiner Arbeit verstehen. Plötzliche Veränderungen oder unvorhersehbare Entscheidungen können sein Sicherheitsgefühl beeinträchtigen.",
      ],
    },

    placements: {
      title:
        "Sonne, Mond und Aszendent im Stier",

      sun: {
        symbol:
          "☀️",

        title:
          "Sonne im Stier",

        text:
          "Die Sonne im Stier entwickelt ihre Identität durch Stabilität, Treue zu den eigenen Werten und das Streben nach dauerhaftem Fortschritt.",

        link:
          "Die Sonne verstehen",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Mond im Stier",

        text:
          "Der Mond im Stier braucht Ruhe, verlässliche Orientierung und konkrete Sicherheit, um emotionales Gleichgewicht zu finden.",

        link:
          "Den Mond verstehen",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Aszendent Stier",

        text:
          "Der Aszendent Stier verleiht eine ruhige, stabile und beruhigende Ausstrahlung. Er begegnet dem Leben meist vorsichtig und beständig.",

        link:
          "Den Aszendenten verstehen",
      },
    },

    compatibilitySection: {
      title:
        "Die Kompatibilität des Stiers",

      paragraphs: [
        "Astrologische Kompatibilität beruht niemals nur auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen zwei Horoskopen liefern wichtige zusätzliche Informationen.",

        "Manche Verbindungen können sich dennoch natürlicher anfühlen, wenn beide Seiten ein Bedürfnis nach Sicherheit, Beständigkeit oder emotionaler Tiefe teilen.",
      ],

      titlePrefix:
        "Stier und",
    },

    compatibilities: [
      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Die Jungfrau teilt mit dem Stier das Bedürfnis nach Stabilität, Realismus und Vertrauen. Diese Beziehung kann sich schrittweise auf soliden Grundlagen entwickeln.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Der Steinbock versteht die Vorsicht und Ausdauer des Stiers. Gemeinsam können sie eine dauerhafte, strukturierte und auf gemeinsame Ziele ausgerichtete Beziehung aufbauen.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Der Krebs kann Wärme, Sensibilität und Verbundenheit mit dem Zuhause einbringen. Der Stier bietet im Gegenzug Stabilität, Präsenz und konkrete Sicherheit.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Die Fische bringen Fantasie, Intuition und Sanftheit ein. Der Stier kann eine beruhigende Grundlage bieten, die der Beziehung mehr Stabilität verleiht.",
      },
    ],

    natalChart: {
      title:
        "Der Stier in Ihrem Geburtshoroskop",

      paragraphs: [
        "Der Stier betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Stier in einem bestimmten astrologischen Haus.",

        "Dieses Haus zeigt den Lebensbereich, in dem Sie mehr Stabilität, Kontinuität und Sicherheit suchen. Planeten im Stier verstärken diese Energie zusätzlich.",
      ],

      cta: {
        kicker:
          "Entdecken Sie Ihr Geburtshoroskop",

        title:
          "Wo befindet sich der Stier in Ihrem Geburtshoroskop?",

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
        "Fragen zum Stier",

      items: [
        {
          question:
            "Was sind die wichtigsten Stärken des Stiers?",

          answer:
            "Der Stier wird häufig mit Geduld, Treue, Ausdauer, praktischem Sinn und der Fähigkeit verbunden, schrittweise etwas Dauerhaftes aufzubauen.",
        },

        {
          question:
            "Was sind die wichtigsten Herausforderungen des Stiers?",

          answer:
            "Der Stier kann Veränderungen ablehnen, stark an Gewohnheiten festhalten oder Schwierigkeiten beim Loslassen haben. Seine Entwicklung verlangt häufig mehr Flexibilität.",
        },

        {
          question:
            "Welcher Planet herrscht über den Stier?",

          answer:
            "Der Stier wird von Venus beherrscht, dem Planeten, der traditionell mit Werten, Beziehungen, Freude, Schönheit, Harmonie und Bindung verbunden wird.",
        },

        {
          question:
            "Welches Element gehört zum Stier?",

          answer:
            "Der Stier gehört zum Element Erde. Dieses Element steht für Realismus, Stabilität, Konkretheit, Geduld und Sicherheitsbedürfnis.",
        },

        {
          question:
            "Wie erkenne ich, ob der Stier in meinem Geburtshoroskop wichtig ist?",

          answer:
            "Der Stier kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop kann dies bestätigen.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Toro: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri il Toro in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Venere, elemento Terra, Luna e Ascendente Toro.",

      ogTitle:
        "Toro in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa al Toro: personalità, punti di forza, sfide, relazioni, carriera, pianeta governatore e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno del Toro | Luna Astralis",

      twitterDescription:
        "Scopri la personalità del Toro, i suoi punti di forza, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Toro in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al Toro, ai suoi punti di forza, alle sfide, alle relazioni, alla carriera e alle principali caratteristiche astrologiche.",
    },

    hero: {
      badge:
        "♉ Secondo segno dello zodiaco",

      title:
        "Il Toro in astrologia",

      lead:
        "Il Toro simboleggia stabilità, pazienza, radicamento e bisogno di costruire qualcosa di solido. Questo segno di Terra avanza con costanza e fedeltà ai propri valori.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      discover:
        "Scoprire il Toro",
    },

    personality: {
      kicker:
        "Personalità del Toro",

      title:
        "Che cosa rappresenta il segno del Toro?",

      paragraphs: [
        "Il Toro è il secondo segno dello zodiaco. Rappresenta la costruzione, la continuità e lo sviluppo di basi sufficientemente solide da sostenere la crescita.",

        "Una persona fortemente influenzata dal Toro ricerca generalmente sicurezza, stabilità e coerenza. Preferisce prendersi il tempo necessario per osservare, valutare e avanzare al proprio ritmo invece di agire con precipitazione.",

        "Questa energia porta spesso pazienza, realismo e una grande capacità di perseveranza. Richiede però di imparare ad accogliere il cambiamento e a non confondere la stabilità con l’immobilità.",
      ],
    },

    traitsSection: {
      title:
        "Le principali caratteristiche del Toro",
    },

    traits: [
      {
        title:
          "La stabilità",

        symbol:
          "✦",

        text:
          "Il Toro ricerca basi solide, punti di riferimento affidabili e un progresso duraturo. Generalmente preferisce costruire lentamente piuttosto che prendere decisioni affrettate.",
      },

      {
        title:
          "La perseveranza",

        symbol:
          "◇",

        text:
          "Quando si impegna in una direzione, il Toro può dimostrare una grande costanza. Avanza con pazienza e supera gli ostacoli grazie alla propria determinazione.",
      },

      {
        title:
          "Il senso dei valori",

        symbol:
          "♢",

        text:
          "Il Toro attribuisce importanza a ciò che possiede un valore reale, materiale, affettivo o simbolico. Cerca di proteggere ciò che considera essenziale.",
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
          "La Terra porta realismo, pazienza, senso pratico e bisogno di sicurezza. Spinge il Toro a costruire in modo concreto e duraturo.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalità fissa",

        text:
          "La modalità fissa rafforza la costanza, la stabilità e la capacità di mantenere uno sforzo nel tempo.",
      },

      ruler: {
        symbol:
          "♀",

        title:
          "Pianeta Venere",

        text:
          "Venere rappresenta i valori, i legami, il piacere, la bellezza e l’armonia. Alimenta il bisogno di comfort e di attaccamento del Toro.",
      },
    },

    strengthsSection: {
      title:
        "I punti di forza e le sfide del Toro",

      strengthsKicker:
        "Punti di forza naturali",

      strengthsTitle:
        "Ciò che il Toro apporta",

      strengths: [
        "Pazienza",
        "Affidabilità",
        "Perseveranza",
        "Lealtà",
        "Senso pratico",
        "Stabilità",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Ciò che il Toro impara",

      challenges: [
        "Resistenza al cambiamento",
        "Testardaggine",
        "Attaccamento alle abitudini",
        "Possessività",
        "Difficoltà a lasciar andare",
        "Tendenza a rimanere nella propria zona di comfort",
      ],
    },

    love: {
      title:
        "Il Toro in amore",

      paragraphs: [
        "In amore, il Toro cerca generalmente una relazione stabile, sincera e rassicurante. Apprezza la costanza, la fedeltà e i gesti concreti che dimostrano un impegno reale.",

        "Può impiegare del tempo prima di aprirsi completamente, ma il suo attaccamento diventa spesso profondo quando si sente al sicuro. Attribuisce grande importanza alla presenza, al contatto, al comfort e alle abitudini condivise.",

        "La sua principale sfida consiste nell’evitare possessività o paura del cambiamento. Una relazione sana richiede di preservare la sicurezza senza limitare la libertà dell’altra persona.",
      ],
    },

    work: {
      title:
        "Il Toro nel lavoro",

      paragraphs: [
        "Nella vita professionale, il Toro si distingue spesso per affidabilità, pazienza e capacità di mantenere uno sforzo per un lungo periodo.",

        "Può essere particolarmente efficace negli ambienti in cui sono valorizzati il rigore, la stabilità, il senso pratico e la gestione delle risorse.",

        "Generalmente preferisce sapere dove sta andando e comprendere il valore concreto del proprio lavoro. I cambiamenti improvvisi o le decisioni imprevedibili possono ridurre il suo senso di sicurezza.",
      ],
    },

    placements: {
      title:
        "Sole, Luna e Ascendente in Toro",

      sun: {
        symbol:
          "☀️",

        title:
          "Sole in Toro",

        text:
          "Il Sole in Toro costruisce la propria identità attraverso stabilità, fedeltà ai propri valori e ricerca di un progresso duraturo.",

        link:
          "Comprendere il Sole",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna in Toro",

        text:
          "La Luna in Toro ha bisogno di calma, punti di riferimento e sicurezza concreta per ritrovare il proprio equilibrio emotivo.",

        link:
          "Comprendere la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Toro",

        text:
          "L’Ascendente Toro dona una presenza calma, stabile e rassicurante. Affronta generalmente la vita con prudenza e costanza.",

        link:
          "Comprendere l’Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Le compatibilità del Toro",

      paragraphs: [
        "La compatibilità astrologica non si basa mai soltanto sul segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

        "Alcune associazioni possono tuttavia sembrare più naturali quando condividono un bisogno di sicurezza, costanza o profondità emotiva.",
      ],

      titlePrefix:
        "Toro e",
    },

    compatibilities: [
      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "La Vergine condivide con il Toro il bisogno di stabilità, realismo e fiducia. Questa relazione può costruirsi progressivamente su basi solide.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Il Capricorno comprende la prudenza e la perseveranza del Toro. Insieme possono creare una relazione duratura, strutturata e orientata verso obiettivi comuni.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Il Cancro può apportare calore, sensibilità e attaccamento alla casa. Il Toro offre in cambio stabilità, presenza e sicurezza concreta.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "I Pesci portano immaginazione, intuizione e dolcezza. Il Toro può offrire una base rassicurante che aiuta la relazione a diventare più stabile.",
      },
    ],

    natalChart: {
      title:
        "Il Toro nel tuo tema natale",

      paragraphs: [
        "Il Toro non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene il Toro in una particolare casa astrologica.",

        "Questa casa mostra l’ambito della vita in cui cerchi maggiore stabilità, continuità e sicurezza. La presenza di pianeti in Toro rafforza inoltre questa energia.",
      ],

      cta: {
        kicker:
          "Scopri il tuo tema natale",

        title:
          "Dove si trova il Toro nel tuo tema natale?",

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
        "Domande sul Toro",

      items: [
        {
          question:
            "Quali sono le principali qualità del Toro?",

          answer:
            "Il Toro è spesso associato a pazienza, lealtà, perseveranza, senso pratico e capacità di costruire progressivamente qualcosa di duraturo.",
        },

        {
          question:
            "Quali sono le principali sfide del Toro?",

          answer:
            "Il Toro può resistere al cambiamento, attaccarsi fortemente alle proprie abitudini o avere difficoltà a lasciar andare. La sua evoluzione richiede spesso maggiore flessibilità.",
        },

        {
          question:
            "Quale pianeta governa il Toro?",

          answer:
            "Il Toro è governato da Venere, pianeta tradizionalmente associato a valori, relazioni, piacere, bellezza, armonia e attaccamento.",
        },

        {
          question:
            "Qual è l’elemento del Toro?",

          answer:
            "Il Toro appartiene all’elemento Terra. Questo elemento è associato a realismo, stabilità, concretezza, pazienza e bisogno di sicurezza.",
        },

        {
          question:
            "Come sapere se il Toro è importante nel mio tema natale?",

          answer:
            "Il Toro può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette di verificarlo.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Touro: personalidade, amor, trabalho e compatibilidade | Luna Astralis",

      description:
        "Descubra Touro na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidade, Vênus, elemento Terra, Lua e Ascendente em Touro.",

      ogTitle:
        "Touro na astrologia: personalidade, amor e compatibilidade",

      ogDescription:
        "Guia completo de Touro: personalidade, forças, desafios, relacionamentos, carreira, planeta regente e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Touro | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Touro, suas forças, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Touro na astrologia: personalidade, amor, trabalho e compatibilidade",

      description:
        "Guia completo sobre Touro, suas forças, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    hero: {
      badge:
        "♉ Segundo signo do zodíaco",

      title:
        "Touro na astrologia",

      lead:
        "Touro simboliza estabilidade, paciência, enraizamento e necessidade de construir algo sólido. Este signo de Terra avança com constância e fidelidade aos seus valores.",

      createChart:
        "Criar meu mapa astral grátis",

      discover:
        "Descobrir Touro",
    },

    personality: {
      kicker:
        "Personalidade de Touro",

      title:
        "O que representa o signo de Touro?",

      paragraphs: [
        "Touro é o segundo signo do zodíaco. Representa construção, continuidade e desenvolvimento de bases suficientemente sólidas para sustentar o crescimento.",

        "Uma pessoa fortemente influenciada por Touro geralmente procura segurança, estabilidade e coerência. Prefere reservar tempo para observar, avaliar e avançar no próprio ritmo em vez de agir precipitadamente.",

        "Essa energia costuma trazer paciência, realismo e grande capacidade de perseverança. No entanto, exige aprender a acolher a mudança e evitar confundir estabilidade com imobilidade.",
      ],
    },

    traitsSection: {
      title:
        "As principais características de Touro",
    },

    traits: [
      {
        title:
          "A estabilidade",

        symbol:
          "✦",

        text:
          "Touro procura bases sólidas, referências confiáveis e progresso duradouro. Geralmente prefere construir lentamente em vez de tomar decisões precipitadas.",
      },

      {
        title:
          "A perseverança",

        symbol:
          "◇",

        text:
          "Quando se compromete com uma direção, Touro pode demonstrar grande constância. Avança com paciência e enfrenta os obstáculos graças à sua determinação.",
      },

      {
        title:
          "O senso de valores",

        symbol:
          "♢",

        text:
          "Touro dá importância ao que possui valor real, seja material, afetivo ou simbólico. Procura proteger aquilo que considera essencial.",
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
          "A Terra traz realismo, paciência, senso prático e necessidade de segurança. Ela impulsiona Touro a construir de maneira concreta e duradoura.",
      },

      modality: {
        symbol:
          "◇",

        title:
          "Modalidade fixa",

        text:
          "A modalidade fixa reforça a constância, a estabilidade e a capacidade de manter um esforço ao longo do tempo.",
      },

      ruler: {
        symbol:
          "♀",

        title:
          "Planeta Vênus",

        text:
          "Vênus representa valores, vínculos, prazer, beleza e harmonia. Ela alimenta a necessidade de conforto e apego de Touro.",
      },
    },

    strengthsSection: {
      title:
        "As forças e os desafios de Touro",

      strengthsKicker:
        "Forças naturais",

      strengthsTitle:
        "O que Touro oferece",

      strengths: [
        "Paciência",
        "Confiabilidade",
        "Perseverança",
        "Lealdade",
        "Senso prático",
        "Estabilidade",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "O que Touro aprende",

      challenges: [
        "Resistência à mudança",
        "Teimosia",
        "Apego aos hábitos",
        "Possessividade",
        "Dificuldade para desapegar",
        "Tendência a permanecer na zona de conforto",
      ],
    },

    love: {
      title:
        "Touro no amor",

      paragraphs: [
        "No amor, Touro geralmente procura um relacionamento estável, sincero e seguro. Aprecia constância, fidelidade e gestos concretos que demonstrem um compromisso verdadeiro.",

        "Pode levar algum tempo para se abrir completamente, mas seu apego costuma se tornar profundo quando se sente seguro. Dá grande importância à presença, ao contato, ao conforto e aos hábitos compartilhados.",

        "Seu principal desafio consiste em evitar possessividade ou medo da mudança. Um relacionamento saudável exige preservar a segurança sem limitar a liberdade da outra pessoa.",
      ],
    },

    work: {
      title:
        "Touro no trabalho",

      paragraphs: [
        "Na vida profissional, Touro costuma se destacar pela confiabilidade, paciência e capacidade de manter um esforço durante um longo período.",

        "Pode ser especialmente eficiente em ambientes nos quais rigor, estabilidade, senso prático e gestão de recursos são valorizados.",

        "Geralmente prefere saber para onde está indo e compreender o valor concreto do seu trabalho. Mudanças repentinas ou decisões imprevisíveis podem reduzir seu sentimento de segurança.",
      ],
    },

    placements: {
      title:
        "Sol, Lua e Ascendente em Touro",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol em Touro",

        text:
          "O Sol em Touro constrói sua identidade por meio da estabilidade, fidelidade aos próprios valores e busca de um progresso duradouro.",

        link:
          "Compreender o Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lua em Touro",

        text:
          "A Lua em Touro precisa de calma, referências e segurança concreta para recuperar o equilíbrio emocional.",

        link:
          "Compreender a Lua",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente em Touro",

        text:
          "O Ascendente em Touro proporciona uma presença calma, estável e tranquilizadora. Geralmente aborda a vida com prudência e constância.",

        link:
          "Compreender o Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "As compatibilidades de Touro",

      paragraphs: [
        "A compatibilidade astrológica nunca se baseia apenas no signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

        "Algumas associações podem, no entanto, parecer mais naturais quando compartilham uma necessidade de segurança, constância ou profundidade emocional.",
      ],

      titlePrefix:
        "Touro e",
    },

    compatibilities: [
      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Virgem compartilha com Touro uma necessidade de estabilidade, realismo e confiança. Esse relacionamento pode ser construído progressivamente sobre bases sólidas.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Capricórnio compreende a prudência e a perseverança de Touro. Juntos, podem criar um relacionamento duradouro, estruturado e voltado para objetivos comuns.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Câncer pode trazer calor, sensibilidade e apego ao lar. Touro oferece em troca estabilidade, presença e segurança concreta.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Peixes traz imaginação, intuição e suavidade. Touro pode oferecer uma base tranquilizadora que ajuda o relacionamento a se tornar mais estável.",
      },
    ],

    natalChart: {
      title:
        "Touro no seu mapa natal",

      paragraphs: [
        "Touro não se relaciona apenas às pessoas nascidas sob este signo. Todo mapa natal contém Touro em uma determinada casa astrológica.",

        "Essa casa mostra a área da vida em que você procura maior estabilidade, continuidade e segurança. A presença de planetas em Touro também reforça essa energia.",
      ],

      cta: {
        kicker:
          "Descubra seu mapa natal",

        title:
          "Onde está Touro no seu mapa natal?",

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
        "Perguntas sobre Touro",

      items: [
        {
          question:
            "Quais são as principais qualidades de Touro?",

          answer:
            "Touro costuma ser associado à paciência, lealdade, perseverança, senso prático e capacidade de construir progressivamente algo duradouro.",
        },

        {
          question:
            "Quais são os principais desafios de Touro?",

          answer:
            "Touro pode resistir à mudança, se apegar fortemente aos hábitos ou ter dificuldade para desapegar. Sua evolução costuma exigir maior flexibilidade.",
        },

        {
          question:
            "Qual planeta rege Touro?",

          answer:
            "Touro é regido por Vênus, planeta tradicionalmente associado a valores, relacionamentos, prazer, beleza, harmonia e apego.",
        },

        {
          question:
            "Qual é o elemento de Touro?",

          answer:
            "Touro pertence ao elemento Terra. Esse elemento está associado ao realismo, estabilidade, concretude, paciência e necessidade de segurança.",
        },

        {
          question:
            "Como saber se Touro é importante no meu mapa natal?",

          answer:
            "Touro pode ser importante se seu Sol, Lua, Ascendente ou vários planetas estiverem neste signo. Um mapa natal completo permite verificar isso.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
