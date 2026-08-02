// i18n/pages/astrologie/scorpion.ts

import type {
  Locale,
} from "@/i18n/config";

export type ScorpioCard = {
  title: string;
  symbol: string;
  text: string;
};

export type ScorpioCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type ScorpioFaqItem = {
  question: string;
  answer: string;
};

export type ScorpioPageText = {
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

  traits: ScorpioCard[];

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

  compatibilities: ScorpioCompatibility[];

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
    items: ScorpioFaqItem[];
  };

  disclaimer: string;
};

export const SCORPION_TRANSLATIONS:
  Record<
    Locale,
    ScorpioPageText
  > = {
  fr: {
    metadata: {
      title:
        "Scorpion : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Scorpion en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Pluton, Mars, élément Eau, Lune et Ascendant Scorpion.",

      ogTitle:
        "Le Scorpion en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Scorpion : caractère, forces, défis, relations, carrière, Pluton, Mars et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe du Scorpion | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Scorpion, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Scorpion en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Scorpion, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    hero: {
      badge:
        "♏ Huitième signe du zodiaque",

      title:
        "Le Scorpion en astrologie",

      lead:
        "Le Scorpion symbolise la profondeur, la transformation, l’intuition et la puissance émotionnelle. Ce signe d’Eau cherche à comprendre les vérités cachées, à créer des liens profonds et à renaître après les périodes de changement.",

      createChart:
        "Créer ma carte du ciel gratuite",

      discover:
        "Découvrir le Scorpion",
    },

    personality: {
      kicker:
        "Personnalité du Scorpion",

      title:
        "Que représente le signe du Scorpion ?",

      paragraphs: [
        "Le Scorpion est le huitième signe du zodiaque. Il représente la transformation, l’intimité, les vérités cachées, la puissance émotionnelle et la capacité à évoluer profondément.",

        "Une personne marquée par le Scorpion cherche généralement à comprendre ce qui se trouve sous la surface. Elle observe attentivement les comportements, les émotions et les intentions qui ne sont pas toujours exprimées ouvertement.",

        "Cette énergie apporte intuition, courage et profondeur. Elle demande toutefois d’apprendre à faire confiance, à exprimer ses émotions sans stratégie et à accepter que tout ne peut pas être contrôlé.",
      ],
    },

    traitsSection: {
      title:
        "Les grandes caractéristiques du Scorpion",
    },

    traits: [
      {
        title:
          "La profondeur",

        symbol:
          "♏",

        text:
          "Le Scorpion cherche naturellement à comprendre ce qui se cache derrière les apparences. Il observe les motivations, les émotions et les vérités que les autres ne perçoivent pas toujours.",
      },

      {
        title:
          "La transformation",

        symbol:
          "♇",

        text:
          "Ce signe possède une grande capacité à traverser les périodes de changement et à se reconstruire. Il peut transformer les crises en occasions de croissance et de renouvellement.",
      },

      {
        title:
          "L’intensité",

        symbol:
          "✦",

        text:
          "Le Scorpion vit rarement les choses à moitié. Ses sentiments, ses engagements et ses convictions peuvent être profonds, puissants et difficiles à ignorer.",
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
          "L’Eau apporte intuition, sensibilité, profondeur et réceptivité émotionnelle. Elle pousse le Scorpion à vivre ses liens avec intensité et authenticité.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalité fixe",

        text:
          "La modalité fixe favorise la détermination, la fidélité et la capacité à maintenir une direction. Elle peut aussi renforcer l’entêtement et la difficulté à lâcher prise.",
      },

      rulers: {
        symbol:
          "♇",

        title:
          "Pluton et Mars",

        text:
          "Pluton représente la transformation et le pouvoir intérieur. Mars apporte action, courage et désir. Ensemble, ils renforcent l’intensité du Scorpion.",
      },
    },

    strengthsSection: {
      title:
        "Les forces et les défis du Scorpion",

      strengthsKicker:
        "Forces naturelles",

      strengthsTitle:
        "Ce que le Scorpion apporte",

      strengths: [
        "Intuition",
        "Détermination",
        "Loyauté",
        "Profondeur",
        "Courage émotionnel",
        "Capacité de transformation",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Ce que le Scorpion apprend",

      challenges: [
        "Méfiance",
        "Jalousie",
        "Besoin de contrôle",
        "Difficulté à pardonner",
        "Tendance à garder ses émotions",
        "Intensité parfois excessive",
      ],
    },

    love: {
      title:
        "Le Scorpion en amour",

      paragraphs: [
        "En amour, le Scorpion recherche généralement une relation profonde, sincère et engagée. Il ne se satisfait pas facilement d’un lien superficiel et cherche à comprendre réellement la personne avec laquelle il partage sa vie.",

        "Lorsqu’il accorde sa confiance, il peut être profondément loyal, protecteur et passionné. Il accorde beaucoup d’importance à l’intimité, à la fidélité et au sentiment de pouvoir se révéler sans masque.",

        "Son principal défi consiste à ne pas laisser la peur de perdre l’autre nourrir la jalousie ou le contrôle. Une relation durable lui demande de communiquer clairement, de respecter l’autonomie de l’autre et d’accepter sa propre vulnérabilité.",
      ],
    },

    work: {
      title:
        "Le Scorpion au travail",

      paragraphs: [
        "Dans la vie professionnelle, le Scorpion se distingue souvent par sa concentration, sa persévérance et sa capacité à gérer des situations complexes ou sensibles.",

        "Il peut être particulièrement efficace dans les domaines liés à la psychologie, à la recherche, à la médecine, aux finances, à l’enquête, à la stratégie, à la sécurité, à la gestion de crise ou à l’accompagnement du changement.",

        "Il préfère généralement les projets qui ont du sens et qui lui permettent d’aller au fond des choses. Il gagne toutefois à partager davantage l’information et à éviter de vouloir tout gérer seul.",
      ],
    },

    placements: {
      title:
        "Soleil, Lune et Ascendant en Scorpion",

      sun: {
        symbol:
          "☀️",

        title:
          "Soleil en Scorpion",

        text:
          "Le Soleil en Scorpion construit son identité par la profondeur, la transformation, la détermination et la recherche de vérité.",

        link:
          "Comprendre le Soleil",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lune en Scorpion",

        text:
          "La Lune en Scorpion ressent les émotions avec intensité. Elle a besoin de confiance, d’authenticité et de liens profonds pour se sentir en sécurité.",

        link:
          "Comprendre la Lune",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendant Scorpion",

        text:
          "L’Ascendant Scorpion donne une présence intense, mystérieuse et observatrice. Il aborde généralement la vie avec prudence, intuition et détermination.",

        link:
          "Comprendre l’Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Les compatibilités du Scorpion",

      paragraphs: [
        "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

        "Certaines associations peuvent néanmoins sembler naturellement plus harmonieuses lorsqu’elles partagent un besoin de loyauté, de profondeur, de stabilité et de sécurité émotionnelle.",
      ],

      titlePrefix:
        "Scorpion et",
    },

    compatibilities: [
      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Le Cancer et le Scorpion partagent une grande sensibilité et un besoin de sécurité émotionnelle. Leur relation peut devenir profonde, protectrice et très intuitive.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Les Poissons apportent douceur, imagination et compréhension émotionnelle. Le Scorpion offre en retour intensité, protection et force intérieure.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "La Vierge peut apprécier la loyauté et la détermination du Scorpion. Le Scorpion respecte souvent son intelligence, sa discrétion et son sens de l’engagement.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Le Capricorne et le Scorpion partagent une grande détermination et un goût pour les relations solides. Ensemble, ils peuvent construire avec patience, ambition et fidélité.",
      },
    ],

    natalChart: {
      title:
        "Le Scorpion dans votre thème natal",

      paragraphs: [
        "Le Scorpion ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Scorpion dans une maison astrologique particulière.",

        "Cette maison montre le domaine de vie dans lequel vous cherchez à approfondir, à transformer, à comprendre ce qui est caché ou à développer votre puissance intérieure. La présence de planètes en Scorpion renforce également cette énergie.",
      ],

      cta: {
        kicker:
          "Découvrez votre thème natal",

        title:
          "Où se trouve le Scorpion dans votre carte du ciel ?",

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
        "Questions sur le Scorpion",

      items: [
        {
          question:
            "Quelles sont les principales qualités du Scorpion ?",

          answer:
            "Le Scorpion est souvent associé à l’intuition, à la détermination, à la loyauté, à la profondeur émotionnelle, au courage et à la capacité de se transformer.",
        },

        {
          question:
            "Quels sont les principaux défis du Scorpion ?",

          answer:
            "Le Scorpion peut parfois devenir méfiant, jaloux ou chercher à contrôler ce qui lui échappe. Son évolution passe par la confiance, le lâcher-prise et une expression plus directe de ses émotions.",
        },

        {
          question:
            "Quelle planète gouverne le Scorpion ?",

          answer:
            "Le Scorpion est traditionnellement associé à Mars et, dans l’astrologie moderne, à Pluton. Mars représente l’action et le désir, tandis que Pluton symbolise la transformation, le pouvoir intérieur et la régénération.",
        },

        {
          question:
            "Quel est l’élément du Scorpion ?",

          answer:
            "Le Scorpion appartient à l’élément Eau. Cet élément est lié aux émotions, à l’intuition, à la sensibilité, à la profondeur psychologique et aux liens affectifs.",
        },

        {
          question:
            "Comment savoir si le Scorpion est important dans mon thème natal ?",

          answer:
            "Le Scorpion peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet également de découvrir la maison astrologique occupée par le Scorpion.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Scorpio: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Scorpio in astrology: personality, strengths, challenges, love, career, compatibility, Pluto, Mars, the Water element, Scorpio Moon and Scorpio Rising.",

      ogTitle:
        "Scorpio in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Scorpio: personality, strengths, challenges, relationships, career, Pluto, Mars and main astrological compatibilities.",

      twitterTitle:
        "The Scorpio Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Scorpio personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Scorpio in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Scorpio, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    hero: {
      badge:
        "♏ Eighth sign of the zodiac",

      title:
        "Scorpio in Astrology",

      lead:
        "Scorpio symbolizes depth, transformation, intuition and emotional power. This Water sign seeks to understand hidden truths, create profound bonds and rise again after periods of change.",

      createChart:
        "Create my free birth chart",

      discover:
        "Discover Scorpio",
    },

    personality: {
      kicker:
        "Scorpio personality",

      title:
        "What does Scorpio represent?",

      paragraphs: [
        "Scorpio is the eighth sign of the zodiac. It represents transformation, intimacy, hidden truths, emotional power and the ability to evolve profoundly.",

        "A person strongly influenced by Scorpio generally seeks to understand what lies beneath the surface. They carefully observe behaviors, emotions and intentions that are not always openly expressed.",

        "This energy brings intuition, courage and depth. However, it requires learning to trust, express emotions without strategy and accept that not everything can be controlled.",
      ],
    },

    traitsSection: {
      title:
        "The main characteristics of Scorpio",
    },

    traits: [
      {
        title:
          "Depth",

        symbol:
          "♏",

        text:
          "Scorpio naturally seeks to understand what lies behind appearances. It observes motivations, emotions and truths that other people may not always perceive.",
      },

      {
        title:
          "Transformation",

        symbol:
          "♇",

        text:
          "This sign possesses a strong ability to move through periods of change and rebuild itself. It may transform crises into opportunities for growth and renewal.",
      },

      {
        title:
          "Intensity",

        symbol:
          "✦",

        text:
          "Scorpio rarely experiences things halfway. Its feelings, commitments and convictions may be deep, powerful and difficult to ignore.",
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
          "Water brings intuition, sensitivity, depth and emotional receptivity. It encourages Scorpio to experience bonds with intensity and authenticity.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Fixed modality",

        text:
          "The fixed modality supports determination, loyalty and the ability to maintain a direction. It may also strengthen stubbornness and difficulty letting go.",
      },

      rulers: {
        symbol:
          "♇",

        title:
          "Pluto and Mars",

        text:
          "Pluto represents transformation and inner power. Mars brings action, courage and desire. Together, they strengthen Scorpio’s intensity.",
      },
    },

    strengthsSection: {
      title:
        "Scorpio strengths and challenges",

      strengthsKicker:
        "Natural strengths",

      strengthsTitle:
        "What Scorpio brings",

      strengths: [
        "Intuition",
        "Determination",
        "Loyalty",
        "Depth",
        "Emotional courage",
        "Capacity for transformation",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "What Scorpio learns",

      challenges: [
        "Distrust",
        "Jealousy",
        "Need for control",
        "Difficulty forgiving",
        "Tendency to hold emotions inside",
        "Sometimes excessive intensity",
      ],
    },

    love: {
      title:
        "Scorpio in love",

      paragraphs: [
        "In love, Scorpio generally seeks a deep, sincere and committed relationship. It is rarely satisfied with a superficial bond and wants to genuinely understand the person with whom it shares life.",

        "When Scorpio gives its trust, it may be deeply loyal, protective and passionate. It places great importance on intimacy, faithfulness and the feeling of being able to reveal itself without a mask.",

        "Its main challenge is avoiding allowing the fear of losing the other person to fuel jealousy or control. A lasting relationship requires clear communication, respect for the other person’s autonomy and acceptance of personal vulnerability.",
      ],
    },

    work: {
      title:
        "Scorpio at work",

      paragraphs: [
        "In professional life, Scorpio often stands out through concentration, perseverance and the ability to manage complex or sensitive situations.",

        "It may be particularly effective in fields connected with psychology, research, medicine, finance, investigation, strategy, security, crisis management or supporting transformation.",

        "Scorpio generally prefers meaningful projects that allow it to go beneath the surface. However, it benefits from sharing more information and avoiding the desire to manage everything alone.",
      ],
    },

    placements: {
      title:
        "Scorpio Sun, Moon and Rising",

      sun: {
        symbol:
          "☀️",

        title:
          "Sun in Scorpio",

        text:
          "The Sun in Scorpio builds identity through depth, transformation, determination and the search for truth.",

        link:
          "Understand the Sun",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Moon in Scorpio",

        text:
          "The Moon in Scorpio experiences emotions intensely. It needs trust, authenticity and deep bonds to feel secure.",

        link:
          "Understand the Moon",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Scorpio Rising",

        text:
          "Scorpio Rising gives an intense, mysterious and observant presence. It generally approaches life with caution, intuition and determination.",

        link:
          "Understand the Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Scorpio compatibility",

      paragraphs: [
        "Astrological compatibility is never based only on the Sun sign. The Moon, Venus, Mars, the Ascendant and aspects between two charts provide essential information.",

        "Some combinations may nevertheless feel naturally more harmonious when they share a need for loyalty, depth, stability and emotional security.",
      ],

      titlePrefix:
        "Scorpio and",
    },

    compatibilities: [
      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Cancer and Scorpio share great sensitivity and a need for emotional security. Their relationship may become deep, protective and highly intuitive.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Pisces brings gentleness, imagination and emotional understanding. Scorpio offers intensity, protection and inner strength in return.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo may appreciate Scorpio’s loyalty and determination. Scorpio often respects Virgo’s intelligence, discretion and sense of commitment.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Capricorn and Scorpio share strong determination and a preference for solid relationships. Together, they may build with patience, ambition and loyalty.",
      },
    ],

    natalChart: {
      title:
        "Scorpio in your birth chart",

      paragraphs: [
        "Scorpio does not concern only people born under this sign. Every birth chart contains Scorpio in a particular astrological house.",

        "This house shows the area of life in which you seek to deepen, transform, understand what is hidden or develop inner power. The presence of planets in Scorpio also strengthens this energy.",
      ],

      cta: {
        kicker:
          "Discover your birth chart",

        title:
          "Where is Scorpio located in your birth chart?",

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
        "Questions about Scorpio",

      items: [
        {
          question:
            "What are the main qualities of Scorpio?",

          answer:
            "Scorpio is often associated with intuition, determination, loyalty, emotional depth, courage and the capacity for transformation.",
        },

        {
          question:
            "What are the main challenges of Scorpio?",

          answer:
            "Scorpio may sometimes become distrustful, jealous or attempt to control what escapes it. Growth involves trust, letting go and more direct emotional expression.",
        },

        {
          question:
            "Which planet rules Scorpio?",

          answer:
            "Scorpio is traditionally associated with Mars and, in modern astrology, with Pluto. Mars represents action and desire, while Pluto symbolizes transformation, inner power and regeneration.",
        },

        {
          question:
            "What is the element of Scorpio?",

          answer:
            "Scorpio belongs to the Water element. Water is connected with emotions, intuition, sensitivity, psychological depth and emotional bonds.",
        },

        {
          question:
            "How can I know whether Scorpio is important in my birth chart?",

          answer:
            "Scorpio may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals the astrological house occupied by Scorpio.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Escorpio: personalidad, amor, trabajo y compatibilidad | Luna Astralis",

      description:
        "Descubre Escorpio en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidad, Plutón, Marte, elemento Agua, Luna y Ascendente Escorpio.",

      ogTitle:
        "Escorpio en astrología: personalidad, amor y compatibilidad",

      ogDescription:
        "Guía completa de Escorpio: personalidad, fortalezas, desafíos, relaciones, carrera, Plutón, Marte y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Escorpio | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Escorpio, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Escorpio en astrología: personalidad, amor, trabajo y compatibilidad",

      description:
        "Guía completa sobre Escorpio, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    hero: {
      badge:
        "♏ Octavo signo del zodiaco",

      title:
        "Escorpio en astrología",

      lead:
        "Escorpio simboliza la profundidad, la transformación, la intuición y el poder emocional. Este signo de Agua busca comprender las verdades ocultas, crear vínculos profundos y renacer después de los períodos de cambio.",

      createChart:
        "Crear mi carta natal gratis",

      discover:
        "Descubrir Escorpio",
    },

    personality: {
      kicker:
        "Personalidad de Escorpio",

      title:
        "¿Qué representa el signo de Escorpio?",

      paragraphs: [
        "Escorpio es el octavo signo del zodiaco. Representa la transformación, la intimidad, las verdades ocultas, el poder emocional y la capacidad de evolucionar profundamente.",

        "Una persona marcada por Escorpio suele intentar comprender lo que se encuentra bajo la superficie. Observa atentamente los comportamientos, las emociones y las intenciones que no siempre se expresan abiertamente.",

        "Esta energía aporta intuición, valentía y profundidad. Sin embargo, exige aprender a confiar, expresar las emociones sin estrategia y aceptar que no todo puede controlarse.",
      ],
    },

    traitsSection: {
      title:
        "Las principales características de Escorpio",
    },

    traits: [
      {
        title:
          "La profundidad",

        symbol:
          "♏",

        text:
          "Escorpio busca naturalmente comprender lo que se oculta detrás de las apariencias. Observa las motivaciones, las emociones y las verdades que los demás no siempre perciben.",
      },

      {
        title:
          "La transformación",

        symbol:
          "♇",

        text:
          "Este signo posee una gran capacidad para atravesar períodos de cambio y reconstruirse. Puede transformar las crisis en oportunidades de crecimiento y renovación.",
      },

      {
        title:
          "La intensidad",

        symbol:
          "✦",

        text:
          "Escorpio rara vez vive las cosas a medias. Sus sentimientos, compromisos y convicciones pueden ser profundos, poderosos y difíciles de ignorar.",
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
          "El Agua aporta intuición, sensibilidad, profundidad y receptividad emocional. Impulsa a Escorpio a vivir sus vínculos con intensidad y autenticidad.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalidad fija",

        text:
          "La modalidad fija favorece la determinación, la fidelidad y la capacidad de mantener una dirección. También puede reforzar la obstinación y la dificultad para soltar.",
      },

      rulers: {
        symbol:
          "♇",

        title:
          "Plutón y Marte",

        text:
          "Plutón representa la transformación y el poder interior. Marte aporta acción, valentía y deseo. Juntos refuerzan la intensidad de Escorpio.",
      },
    },

    strengthsSection: {
      title:
        "Las fortalezas y los desafíos de Escorpio",

      strengthsKicker:
        "Fortalezas naturales",

      strengthsTitle:
        "Lo que aporta Escorpio",

      strengths: [
        "Intuición",
        "Determinación",
        "Lealtad",
        "Profundidad",
        "Valentía emocional",
        "Capacidad de transformación",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Lo que aprende Escorpio",

      challenges: [
        "Desconfianza",
        "Celos",
        "Necesidad de control",
        "Dificultad para perdonar",
        "Tendencia a guardar las emociones",
        "Intensidad a veces excesiva",
      ],
    },

    love: {
      title:
        "Escorpio en el amor",

      paragraphs: [
        "En el amor, Escorpio suele buscar una relación profunda, sincera y comprometida. No se conforma fácilmente con un vínculo superficial y desea comprender realmente a la persona con la que comparte su vida.",

        "Cuando concede su confianza, puede ser profundamente leal, protector y apasionado. Da mucha importancia a la intimidad, la fidelidad y la sensación de poder mostrarse sin máscaras.",

        "Su principal desafío consiste en no permitir que el miedo a perder a la otra persona alimente los celos o el control. Una relación duradera exige comunicación clara, respeto por la autonomía del otro y aceptación de la propia vulnerabilidad.",
      ],
    },

    work: {
      title:
        "Escorpio en el trabajo",

      paragraphs: [
        "En la vida profesional, Escorpio suele destacar por su concentración, perseverancia y capacidad para manejar situaciones complejas o sensibles.",

        "Puede ser especialmente eficaz en ámbitos relacionados con la psicología, la investigación, la medicina, las finanzas, la investigación criminal, la estrategia, la seguridad, la gestión de crisis o el acompañamiento del cambio.",

        "Generalmente prefiere los proyectos con significado que le permitan llegar al fondo de las cosas. Sin embargo, se beneficia de compartir más información y evitar querer gestionarlo todo en solitario.",
      ],
    },

    placements: {
      title:
        "Sol, Luna y Ascendente en Escorpio",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol en Escorpio",

        text:
          "El Sol en Escorpio construye su identidad mediante la profundidad, la transformación, la determinación y la búsqueda de la verdad.",

        link:
          "Comprender el Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna en Escorpio",

        text:
          "La Luna en Escorpio vive las emociones con intensidad. Necesita confianza, autenticidad y vínculos profundos para sentirse segura.",

        link:
          "Comprender la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Escorpio",

        text:
          "El Ascendente Escorpio aporta una presencia intensa, misteriosa y observadora. Suele abordar la vida con prudencia, intuición y determinación.",

        link:
          "Comprender el Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Las compatibilidades de Escorpio",

      paragraphs: [
        "La compatibilidad astrológica nunca se basa únicamente en el signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre las dos cartas aportan información esencial.",

        "Sin embargo, algunas combinaciones pueden parecer naturalmente más armoniosas cuando comparten una necesidad de lealtad, profundidad, estabilidad y seguridad emocional.",
      ],

      titlePrefix:
        "Escorpio y",
    },

    compatibilities: [
      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Cáncer y Escorpio comparten una gran sensibilidad y una necesidad de seguridad emocional. Su relación puede volverse profunda, protectora y muy intuitiva.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Piscis aporta dulzura, imaginación y comprensión emocional. Escorpio ofrece a cambio intensidad, protección y fuerza interior.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo puede apreciar la lealtad y la determinación de Escorpio. Escorpio suele respetar su inteligencia, discreción y sentido del compromiso.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Capricornio y Escorpio comparten una gran determinación y una preferencia por las relaciones sólidas. Juntos pueden construir con paciencia, ambición y fidelidad.",
      },
    ],

    natalChart: {
      title:
        "Escorpio en tu carta natal",

      paragraphs: [
        "Escorpio no se relaciona únicamente con las personas nacidas bajo este signo. Cada carta natal contiene Escorpio en una casa astrológica particular.",

        "Esta casa muestra el ámbito de vida en el que buscas profundizar, transformar, comprender lo que está oculto o desarrollar tu poder interior. La presencia de planetas en Escorpio también refuerza esta energía.",
      ],

      cta: {
        kicker:
          "Descubre tu carta natal",

        title:
          "¿Dónde se encuentra Escorpio en tu carta natal?",

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
        "Preguntas sobre Escorpio",

      items: [
        {
          question:
            "¿Cuáles son las principales cualidades de Escorpio?",

          answer:
            "Escorpio suele asociarse con la intuición, la determinación, la lealtad, la profundidad emocional, la valentía y la capacidad de transformación.",
        },

        {
          question:
            "¿Cuáles son los principales desafíos de Escorpio?",

          answer:
            "Escorpio puede volverse desconfiado, celoso o intentar controlar aquello que se le escapa. Su evolución requiere confianza, capacidad de soltar y una expresión más directa de sus emociones.",
        },

        {
          question:
            "¿Qué planeta gobierna Escorpio?",

          answer:
            "Escorpio se asocia tradicionalmente con Marte y, en la astrología moderna, con Plutón. Marte representa la acción y el deseo, mientras que Plutón simboliza la transformación, el poder interior y la regeneración.",
        },

        {
          question:
            "¿Cuál es el elemento de Escorpio?",

          answer:
            "Escorpio pertenece al elemento Agua. Este elemento se relaciona con las emociones, la intuición, la sensibilidad, la profundidad psicológica y los vínculos afectivos.",
        },

        {
          question:
            "¿Cómo saber si Escorpio es importante en mi carta natal?",

          answer:
            "Escorpio puede ser importante si tu Sol, Luna, Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también permite descubrir la casa astrológica ocupada por Escorpio.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Skorpion: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Skorpion in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Pluto, Mars, Wasserelement, Mond und Aszendent Skorpion.",

      ogTitle:
        "Skorpion in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Skorpion: Persönlichkeit, Stärken, Herausforderungen, Beziehungen, Beruf, Pluto, Mars und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Skorpion | Luna Astralis",

      twitterDescription:
        "Entdecken Sie Persönlichkeit, Stärken, Herausforderungen, Beziehungen und astrologische Kompatibilität des Skorpions.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Skorpion in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Skorpion, seinen Stärken, Herausforderungen, Beziehungen, seinem Beruf und seinen wichtigsten astrologischen Eigenschaften.",
    },

    hero: {
      badge:
        "♏ Achtes Tierkreiszeichen",

      title:
        "Der Skorpion in der Astrologie",

      lead:
        "Der Skorpion symbolisiert Tiefe, Transformation, Intuition und emotionale Kraft. Dieses Wasserzeichen möchte verborgene Wahrheiten verstehen, tiefe Bindungen schaffen und nach Zeiten des Wandels neu entstehen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      discover:
        "Den Skorpion entdecken",
    },

    personality: {
      kicker:
        "Persönlichkeit des Skorpions",

      title:
        "Was bedeutet das Zeichen Skorpion?",

      paragraphs: [
        "Der Skorpion ist das achte Zeichen des Tierkreises. Er steht für Transformation, Intimität, verborgene Wahrheiten, emotionale Kraft und die Fähigkeit zu tiefgreifender Entwicklung.",

        "Ein stark vom Skorpion geprägter Mensch versucht meist zu verstehen, was unter der Oberfläche liegt. Er beobachtet aufmerksam Verhaltensweisen, Gefühle und Absichten, die nicht immer offen ausgedrückt werden.",

        "Diese Energie bringt Intuition, Mut und Tiefe. Sie verlangt jedoch, Vertrauen zu lernen, Gefühle ohne Strategie auszudrücken und zu akzeptieren, dass nicht alles kontrolliert werden kann.",
      ],
    },

    traitsSection: {
      title:
        "Die wichtigsten Eigenschaften des Skorpions",
    },

    traits: [
      {
        title:
          "Tiefe",

        symbol:
          "♏",

        text:
          "Der Skorpion möchte von Natur aus verstehen, was sich hinter äußeren Erscheinungen verbirgt. Er beobachtet Motivationen, Gefühle und Wahrheiten, die andere nicht immer wahrnehmen.",
      },

      {
        title:
          "Transformation",

        symbol:
          "♇",

        text:
          "Dieses Zeichen besitzt eine große Fähigkeit, Zeiten des Wandels zu durchlaufen und sich neu aufzubauen. Es kann Krisen in Möglichkeiten für Wachstum und Erneuerung verwandeln.",
      },

      {
        title:
          "Intensität",

        symbol:
          "✦",

        text:
          "Der Skorpion erlebt Dinge selten nur halb. Seine Gefühle, Verpflichtungen und Überzeugungen können tief, kraftvoll und schwer zu übersehen sein.",
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
          "Wasser bringt Intuition, Sensibilität, Tiefe und emotionale Empfänglichkeit. Es bewegt den Skorpion dazu, Bindungen intensiv und authentisch zu erleben.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Feste Modalität",

        text:
          "Die feste Modalität fördert Entschlossenheit, Treue und die Fähigkeit, eine Richtung beizubehalten. Sie kann jedoch auch Sturheit und Schwierigkeiten beim Loslassen verstärken.",
      },

      rulers: {
        symbol:
          "♇",

        title:
          "Pluto und Mars",

        text:
          "Pluto steht für Transformation und innere Macht. Mars bringt Handlung, Mut und Verlangen. Gemeinsam verstärken sie die Intensität des Skorpions.",
      },
    },

    strengthsSection: {
      title:
        "Stärken und Herausforderungen des Skorpions",

      strengthsKicker:
        "Natürliche Stärken",

      strengthsTitle:
        "Was der Skorpion einbringt",

      strengths: [
        "Intuition",
        "Entschlossenheit",
        "Treue",
        "Tiefe",
        "Emotionaler Mut",
        "Transformationsfähigkeit",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Was der Skorpion lernt",

      challenges: [
        "Misstrauen",
        "Eifersucht",
        "Kontrollbedürfnis",
        "Schwierigkeit zu vergeben",
        "Neigung, Gefühle zurückzuhalten",
        "Manchmal übermäßige Intensität",
      ],
    },

    love: {
      title:
        "Der Skorpion in der Liebe",

      paragraphs: [
        "In der Liebe sucht der Skorpion meist eine tiefe, aufrichtige und verbindliche Beziehung. Eine oberflächliche Bindung genügt ihm selten, und er möchte den Menschen, mit dem er sein Leben teilt, wirklich verstehen.",

        "Wenn er Vertrauen schenkt, kann er außerordentlich treu, beschützend und leidenschaftlich sein. Intimität, Loyalität und das Gefühl, sich ohne Maske zeigen zu können, sind ihm sehr wichtig.",

        "Seine größte Herausforderung besteht darin, nicht zuzulassen, dass Verlustangst Eifersucht oder Kontrolle nährt. Eine dauerhafte Beziehung erfordert klare Kommunikation, Respekt vor der Autonomie des anderen und die Annahme der eigenen Verletzlichkeit.",
      ],
    },

    work: {
      title:
        "Der Skorpion im Beruf",

      paragraphs: [
        "Im Berufsleben zeichnet sich der Skorpion häufig durch Konzentration, Ausdauer und die Fähigkeit aus, komplexe oder sensible Situationen zu bewältigen.",

        "Er kann besonders erfolgreich in Bereichen sein, die mit Psychologie, Forschung, Medizin, Finanzen, Ermittlungen, Strategie, Sicherheit, Krisenmanagement oder Veränderungsbegleitung verbunden sind.",

        "Der Skorpion bevorzugt meist sinnvolle Projekte, bei denen er den Dingen auf den Grund gehen kann. Er profitiert jedoch davon, mehr Informationen zu teilen und nicht alles allein kontrollieren zu wollen.",
      ],
    },

    placements: {
      title:
        "Sonne, Mond und Aszendent im Skorpion",

      sun: {
        symbol:
          "☀️",

        title:
          "Sonne im Skorpion",

        text:
          "Die Sonne im Skorpion entwickelt ihre Identität durch Tiefe, Transformation, Entschlossenheit und die Suche nach Wahrheit.",

        link:
          "Die Sonne verstehen",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Mond im Skorpion",

        text:
          "Der Mond im Skorpion erlebt Gefühle sehr intensiv. Er benötigt Vertrauen, Authentizität und tiefe Bindungen, um sich sicher zu fühlen.",

        link:
          "Den Mond verstehen",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Aszendent Skorpion",

        text:
          "Der Aszendent Skorpion verleiht eine intensive, geheimnisvolle und beobachtende Ausstrahlung. Er begegnet dem Leben meist mit Vorsicht, Intuition und Entschlossenheit.",

        link:
          "Den Aszendenten verstehen",
      },
    },

    compatibilitySection: {
      title:
        "Die Kompatibilität des Skorpions",

      paragraphs: [
        "Astrologische Kompatibilität beruht niemals nur auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und Aspekte zwischen zwei Horoskopen liefern wichtige zusätzliche Informationen.",

        "Bestimmte Verbindungen können sich dennoch besonders harmonisch anfühlen, wenn beide Seiten ein Bedürfnis nach Treue, Tiefe, Stabilität und emotionaler Sicherheit teilen.",
      ],

      titlePrefix:
        "Skorpion und",
    },

    compatibilities: [
      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Krebs und Skorpion teilen große Sensibilität und ein Bedürfnis nach emotionaler Sicherheit. Ihre Beziehung kann tief, beschützend und sehr intuitiv werden.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Die Fische bringen Sanftheit, Fantasie und emotionales Verständnis. Der Skorpion bietet im Gegenzug Intensität, Schutz und innere Stärke.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Die Jungfrau kann die Treue und Entschlossenheit des Skorpions schätzen. Der Skorpion respektiert häufig ihre Intelligenz, Diskretion und Verbindlichkeit.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Steinbock und Skorpion teilen starke Entschlossenheit und eine Vorliebe für solide Beziehungen. Gemeinsam können sie mit Geduld, Ehrgeiz und Treue aufbauen.",
      },
    ],

    natalChart: {
      title:
        "Der Skorpion in Ihrem Geburtshoroskop",

      paragraphs: [
        "Der Skorpion betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Skorpion in einem bestimmten astrologischen Haus.",

        "Dieses Haus zeigt den Lebensbereich, in dem Sie vertiefen, transformieren, Verborgenes verstehen oder innere Kraft entwickeln möchten. Planeten im Skorpion verstärken diese Energie zusätzlich.",
      ],

      cta: {
        kicker:
          "Entdecken Sie Ihr Geburtshoroskop",

        title:
          "Wo befindet sich der Skorpion in Ihrem Geburtshoroskop?",

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
        "Fragen zum Skorpion",

      items: [
        {
          question:
            "Was sind die wichtigsten Stärken des Skorpions?",

          answer:
            "Der Skorpion wird häufig mit Intuition, Entschlossenheit, Treue, emotionaler Tiefe, Mut und Transformationsfähigkeit verbunden.",
        },

        {
          question:
            "Was sind die wichtigsten Herausforderungen des Skorpions?",

          answer:
            "Der Skorpion kann misstrauisch oder eifersüchtig werden oder versuchen, das zu kontrollieren, was sich ihm entzieht. Seine Entwicklung verlangt Vertrauen, Loslassen und einen direkteren Ausdruck der Gefühle.",
        },

        {
          question:
            "Welcher Planet herrscht über den Skorpion?",

          answer:
            "Traditionell wird der Skorpion Mars und in der modernen Astrologie Pluto zugeordnet. Mars steht für Handlung und Verlangen, während Pluto Transformation, innere Macht und Regeneration symbolisiert.",
        },

        {
          question:
            "Welches Element gehört zum Skorpion?",

          answer:
            "Der Skorpion gehört zum Element Wasser. Dieses Element steht für Gefühle, Intuition, Sensibilität, psychologische Tiefe und emotionale Bindungen.",
        },

        {
          question:
            "Wie erkenne ich, ob der Skorpion in meinem Geburtshoroskop wichtig ist?",

          answer:
            "Der Skorpion kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem das astrologische Haus, das vom Skorpion besetzt wird.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Scorpione: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri lo Scorpione in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Plutone, Marte, elemento Acqua, Luna e Ascendente Scorpione.",

      ogTitle:
        "Scorpione in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa allo Scorpione: personalità, punti di forza, sfide, relazioni, carriera, Plutone, Marte e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno dello Scorpione | Luna Astralis",

      twitterDescription:
        "Scopri la personalità dello Scorpione, i suoi punti di forza, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Scorpione in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa allo Scorpione, ai suoi punti di forza, alle sfide, alle relazioni, alla carriera e alle principali caratteristiche astrologiche.",
    },

    hero: {
      badge:
        "♏ Ottavo segno dello zodiaco",

      title:
        "Lo Scorpione in astrologia",

      lead:
        "Lo Scorpione simboleggia profondità, trasformazione, intuizione e potere emotivo. Questo segno d’Acqua cerca di comprendere le verità nascoste, creare legami profondi e rinascere dopo i periodi di cambiamento.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      discover:
        "Scoprire lo Scorpione",
    },

    personality: {
      kicker:
        "Personalità dello Scorpione",

      title:
        "Che cosa rappresenta il segno dello Scorpione?",

      paragraphs: [
        "Lo Scorpione è l’ottavo segno dello zodiaco. Rappresenta trasformazione, intimità, verità nascoste, potere emotivo e capacità di evolvere profondamente.",

        "Una persona fortemente influenzata dallo Scorpione cerca generalmente di comprendere ciò che si trova sotto la superficie. Osserva attentamente comportamenti, emozioni e intenzioni che non vengono sempre espressi apertamente.",

        "Questa energia porta intuizione, coraggio e profondità. Richiede però di imparare a fidarsi, esprimere le emozioni senza strategie e accettare che non tutto può essere controllato.",
      ],
    },

    traitsSection: {
      title:
        "Le principali caratteristiche dello Scorpione",
    },

    traits: [
      {
        title:
          "La profondità",

        symbol:
          "♏",

        text:
          "Lo Scorpione cerca naturalmente di comprendere ciò che si nasconde dietro le apparenze. Osserva motivazioni, emozioni e verità che gli altri non sempre percepiscono.",
      },

      {
        title:
          "La trasformazione",

        symbol:
          "♇",

        text:
          "Questo segno possiede una grande capacità di attraversare i periodi di cambiamento e ricostruirsi. Può trasformare le crisi in occasioni di crescita e rinnovamento.",
      },

      {
        title:
          "L’intensità",

        symbol:
          "✦",

        text:
          "Lo Scorpione vive raramente le cose a metà. I suoi sentimenti, impegni e convinzioni possono essere profondi, potenti e difficili da ignorare.",
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
          "L’Acqua porta intuizione, sensibilità, profondità e ricettività emotiva. Spinge lo Scorpione a vivere i propri legami con intensità e autenticità.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalità fissa",

        text:
          "La modalità fissa favorisce determinazione, fedeltà e capacità di mantenere una direzione. Può anche rafforzare ostinazione e difficoltà a lasciar andare.",
      },

      rulers: {
        symbol:
          "♇",

        title:
          "Plutone e Marte",

        text:
          "Plutone rappresenta trasformazione e potere interiore. Marte porta azione, coraggio e desiderio. Insieme rafforzano l’intensità dello Scorpione.",
      },
    },

    strengthsSection: {
      title:
        "I punti di forza e le sfide dello Scorpione",

      strengthsKicker:
        "Punti di forza naturali",

      strengthsTitle:
        "Ciò che lo Scorpione apporta",

      strengths: [
        "Intuizione",
        "Determinazione",
        "Lealtà",
        "Profondità",
        "Coraggio emotivo",
        "Capacità di trasformazione",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Ciò che lo Scorpione impara",

      challenges: [
        "Diffidenza",
        "Gelosia",
        "Bisogno di controllo",
        "Difficoltà a perdonare",
        "Tendenza a trattenere le emozioni",
        "Intensità talvolta eccessiva",
      ],
    },

    love: {
      title:
        "Lo Scorpione in amore",

      paragraphs: [
        "In amore, lo Scorpione cerca generalmente una relazione profonda, sincera e impegnata. Non si accontenta facilmente di un legame superficiale e desidera comprendere davvero la persona con cui condivide la propria vita.",

        "Quando concede la propria fiducia, può essere profondamente leale, protettivo e passionale. Attribuisce grande importanza all’intimità, alla fedeltà e alla possibilità di mostrarsi senza maschere.",

        "La sua principale sfida consiste nel non lasciare che la paura di perdere l’altra persona alimenti gelosia o controllo. Una relazione duratura richiede comunicazione chiara, rispetto dell’autonomia altrui e accettazione della propria vulnerabilità.",
      ],
    },

    work: {
      title:
        "Lo Scorpione nel lavoro",

      paragraphs: [
        "Nella vita professionale, lo Scorpione si distingue spesso per concentrazione, perseveranza e capacità di gestire situazioni complesse o delicate.",

        "Può essere particolarmente efficace nei campi legati alla psicologia, alla ricerca, alla medicina, alla finanza, all’investigazione, alla strategia, alla sicurezza, alla gestione delle crisi o all’accompagnamento del cambiamento.",

        "Preferisce generalmente progetti significativi che gli permettano di andare in profondità. Trae tuttavia beneficio dal condividere maggiormente le informazioni e dall’evitare di voler gestire tutto da solo.",
      ],
    },

    placements: {
      title:
        "Sole, Luna e Ascendente in Scorpione",

      sun: {
        symbol:
          "☀️",

        title:
          "Sole in Scorpione",

        text:
          "Il Sole in Scorpione costruisce la propria identità attraverso profondità, trasformazione, determinazione e ricerca della verità.",

        link:
          "Comprendere il Sole",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna in Scorpione",

        text:
          "La Luna in Scorpione vive le emozioni con intensità. Ha bisogno di fiducia, autenticità e legami profondi per sentirsi al sicuro.",

        link:
          "Comprendere la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Scorpione",

        text:
          "L’Ascendente Scorpione dona una presenza intensa, misteriosa e osservatrice. Affronta generalmente la vita con prudenza, intuizione e determinazione.",

        link:
          "Comprendere l’Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Le compatibilità dello Scorpione",

      paragraphs: [
        "La compatibilità astrologica non si basa mai soltanto sul segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

        "Alcune combinazioni possono tuttavia sembrare naturalmente più armoniose quando condividono un bisogno di lealtà, profondità, stabilità e sicurezza emotiva.",
      ],

      titlePrefix:
        "Scorpione e",
    },

    compatibilities: [
      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Cancro e Scorpione condividono una grande sensibilità e un bisogno di sicurezza emotiva. La loro relazione può diventare profonda, protettiva e molto intuitiva.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "I Pesci portano dolcezza, immaginazione e comprensione emotiva. Lo Scorpione offre in cambio intensità, protezione e forza interiore.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "La Vergine può apprezzare la lealtà e la determinazione dello Scorpione. Lo Scorpione rispetta spesso la sua intelligenza, discrezione e senso dell’impegno.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Capricorno e Scorpione condividono una grande determinazione e il gusto per le relazioni solide. Insieme possono costruire con pazienza, ambizione e fedeltà.",
      },
    ],

    natalChart: {
      title:
        "Lo Scorpione nel tuo tema natale",

      paragraphs: [
        "Lo Scorpione non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene lo Scorpione in una particolare casa astrologica.",

        "Questa casa mostra l’ambito della vita in cui cerchi di approfondire, trasformare, comprendere ciò che è nascosto o sviluppare il tuo potere interiore. La presenza di pianeti in Scorpione rafforza inoltre questa energia.",
      ],

      cta: {
        kicker:
          "Scopri il tuo tema natale",

        title:
          "Dove si trova lo Scorpione nel tuo tema natale?",

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
        "Domande sullo Scorpione",

      items: [
        {
          question:
            "Quali sono le principali qualità dello Scorpione?",

          answer:
            "Lo Scorpione è spesso associato a intuizione, determinazione, lealtà, profondità emotiva, coraggio e capacità di trasformazione.",
        },

        {
          question:
            "Quali sono le principali sfide dello Scorpione?",

          answer:
            "Lo Scorpione può diventare diffidente, geloso o cercare di controllare ciò che gli sfugge. La sua evoluzione richiede fiducia, capacità di lasciar andare ed espressione più diretta delle emozioni.",
        },

        {
          question:
            "Quale pianeta governa lo Scorpione?",

          answer:
            "Lo Scorpione è tradizionalmente associato a Marte e, nell’astrologia moderna, a Plutone. Marte rappresenta azione e desiderio, mentre Plutone simboleggia trasformazione, potere interiore e rigenerazione.",
        },

        {
          question:
            "Qual è l’elemento dello Scorpione?",

          answer:
            "Lo Scorpione appartiene all’elemento Acqua. Questo elemento è legato alle emozioni, all’intuizione, alla sensibilità, alla profondità psicologica e ai legami affettivi.",
        },

        {
          question:
            "Come sapere se lo Scorpione è importante nel mio tema natale?",

          answer:
            "Lo Scorpione può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo mostra anche la casa astrologica occupata dallo Scorpione.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Escorpião: personalidade, amor, trabalho e compatibilidade | Luna Astralis",

      description:
        "Descubra Escorpião na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidade, Plutão, Marte, elemento Água, Lua e Ascendente em Escorpião.",

      ogTitle:
        "Escorpião na astrologia: personalidade, amor e compatibilidade",

      ogDescription:
        "Guia completo de Escorpião: personalidade, forças, desafios, relacionamentos, carreira, Plutão, Marte e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Escorpião | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Escorpião, suas forças, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Escorpião na astrologia: personalidade, amor, trabalho e compatibilidade",

      description:
        "Guia completo sobre Escorpião, suas forças, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    hero: {
      badge:
        "♏ Oitavo signo do zodíaco",

      title:
        "Escorpião na astrologia",

      lead:
        "Escorpião simboliza profundidade, transformação, intuição e poder emocional. Este signo de Água procura compreender verdades ocultas, criar vínculos profundos e renascer depois dos períodos de mudança.",

      createChart:
        "Criar meu mapa astral grátis",

      discover:
        "Descobrir Escorpião",
    },

    personality: {
      kicker:
        "Personalidade de Escorpião",

      title:
        "O que representa o signo de Escorpião?",

      paragraphs: [
        "Escorpião é o oitavo signo do zodíaco. Representa transformação, intimidade, verdades ocultas, poder emocional e capacidade de evoluir profundamente.",

        "Uma pessoa fortemente influenciada por Escorpião geralmente procura compreender o que existe sob a superfície. Ela observa atentamente comportamentos, emoções e intenções que nem sempre são expressos abertamente.",

        "Essa energia traz intuição, coragem e profundidade. No entanto, exige aprender a confiar, expressar as emoções sem estratégia e aceitar que nem tudo pode ser controlado.",
      ],
    },

    traitsSection: {
      title:
        "As principais características de Escorpião",
    },

    traits: [
      {
        title:
          "A profundidade",

        symbol:
          "♏",

        text:
          "Escorpião procura naturalmente compreender o que se esconde por trás das aparências. Observa motivações, emoções e verdades que os outros nem sempre percebem.",
      },

      {
        title:
          "A transformação",

        symbol:
          "♇",

        text:
          "Este signo possui grande capacidade de atravessar períodos de mudança e se reconstruir. Pode transformar crises em oportunidades de crescimento e renovação.",
      },

      {
        title:
          "A intensidade",

        symbol:
          "✦",

        text:
          "Escorpião raramente vive as coisas pela metade. Seus sentimentos, compromissos e convicções podem ser profundos, poderosos e difíceis de ignorar.",
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
          "A Água traz intuição, sensibilidade, profundidade e receptividade emocional. Ela impulsiona Escorpião a viver seus vínculos com intensidade e autenticidade.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalidade fixa",

        text:
          "A modalidade fixa favorece determinação, fidelidade e capacidade de manter uma direção. Também pode reforçar teimosia e dificuldade para desapegar.",
      },

      rulers: {
        symbol:
          "♇",

        title:
          "Plutão e Marte",

        text:
          "Plutão representa transformação e poder interior. Marte traz ação, coragem e desejo. Juntos, reforçam a intensidade de Escorpião.",
      },
    },

    strengthsSection: {
      title:
        "As forças e os desafios de Escorpião",

      strengthsKicker:
        "Forças naturais",

      strengthsTitle:
        "O que Escorpião oferece",

      strengths: [
        "Intuição",
        "Determinação",
        "Lealdade",
        "Profundidade",
        "Coragem emocional",
        "Capacidade de transformação",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "O que Escorpião aprende",

      challenges: [
        "Desconfiança",
        "Ciúme",
        "Necessidade de controle",
        "Dificuldade para perdoar",
        "Tendência a guardar as emoções",
        "Intensidade às vezes excessiva",
      ],
    },

    love: {
      title:
        "Escorpião no amor",

      paragraphs: [
        "No amor, Escorpião geralmente procura um relacionamento profundo, sincero e comprometido. Raramente se satisfaz com um vínculo superficial e deseja compreender verdadeiramente a pessoa com quem compartilha a vida.",

        "Quando oferece sua confiança, pode ser profundamente leal, protetor e apaixonado. Dá grande importância à intimidade, à fidelidade e à sensação de poder se revelar sem máscaras.",

        "Seu principal desafio consiste em não permitir que o medo de perder a outra pessoa alimente ciúme ou controle. Uma relação duradoura exige comunicação clara, respeito pela autonomia do outro e aceitação da própria vulnerabilidade.",
      ],
    },

    work: {
      title:
        "Escorpião no trabalho",

      paragraphs: [
        "Na vida profissional, Escorpião costuma se destacar pela concentração, perseverança e capacidade de lidar com situações complexas ou delicadas.",

        "Pode ser especialmente eficiente em áreas relacionadas à psicologia, pesquisa, medicina, finanças, investigação, estratégia, segurança, gestão de crises ou acompanhamento de mudanças.",

        "Geralmente prefere projetos significativos que permitam chegar ao fundo das questões. No entanto, beneficia-se ao compartilhar mais informações e evitar querer administrar tudo sozinho.",
      ],
    },

    placements: {
      title:
        "Sol, Lua e Ascendente em Escorpião",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol em Escorpião",

        text:
          "O Sol em Escorpião constrói sua identidade por meio da profundidade, transformação, determinação e busca da verdade.",

        link:
          "Compreender o Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lua em Escorpião",

        text:
          "A Lua em Escorpião vive as emoções com intensidade. Precisa de confiança, autenticidade e vínculos profundos para se sentir segura.",

        link:
          "Compreender a Lua",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente em Escorpião",

        text:
          "O Ascendente em Escorpião proporciona uma presença intensa, misteriosa e observadora. Geralmente aborda a vida com prudência, intuição e determinação.",

        link:
          "Compreender o Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "As compatibilidades de Escorpião",

      paragraphs: [
        "A compatibilidade astrológica nunca se baseia apenas no signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

        "Algumas combinações podem, no entanto, parecer naturalmente mais harmoniosas quando compartilham uma necessidade de lealdade, profundidade, estabilidade e segurança emocional.",
      ],

      titlePrefix:
        "Escorpião e",
    },

    compatibilities: [
      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Câncer e Escorpião compartilham grande sensibilidade e necessidade de segurança emocional. O relacionamento pode se tornar profundo, protetor e muito intuitivo.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Peixes traz suavidade, imaginação e compreensão emocional. Escorpião oferece em troca intensidade, proteção e força interior.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Virgem pode apreciar a lealdade e a determinação de Escorpião. Escorpião costuma respeitar sua inteligência, discrição e senso de compromisso.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Capricórnio e Escorpião compartilham grande determinação e gosto por relações sólidas. Juntos, podem construir com paciência, ambição e fidelidade.",
      },
    ],

    natalChart: {
      title:
        "Escorpião no seu mapa natal",

      paragraphs: [
        "Escorpião não se relaciona apenas às pessoas nascidas sob este signo. Todo mapa natal contém Escorpião em uma determinada casa astrológica.",

        "Essa casa mostra a área da vida em que você procura aprofundar, transformar, compreender aquilo que está oculto ou desenvolver seu poder interior. A presença de planetas em Escorpião também reforça essa energia.",
      ],

      cta: {
        kicker:
          "Descubra seu mapa natal",

        title:
          "Onde está Escorpião no seu mapa natal?",

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
        "Perguntas sobre Escorpião",

      items: [
        {
          question:
            "Quais são as principais qualidades de Escorpião?",

          answer:
            "Escorpião costuma ser associado à intuição, determinação, lealdade, profundidade emocional, coragem e capacidade de transformação.",
        },

        {
          question:
            "Quais são os principais desafios de Escorpião?",

          answer:
            "Escorpião pode se tornar desconfiado, ciumento ou tentar controlar aquilo que lhe escapa. Sua evolução exige confiança, desapego e expressão mais direta das emoções.",
        },

        {
          question:
            "Qual planeta rege Escorpião?",

          answer:
            "Escorpião é tradicionalmente associado a Marte e, na astrologia moderna, a Plutão. Marte representa ação e desejo, enquanto Plutão simboliza transformação, poder interior e regeneração.",
        },

        {
          question:
            "Qual é o elemento de Escorpião?",

          answer:
            "Escorpião pertence ao elemento Água. Esse elemento está ligado às emoções, intuição, sensibilidade, profundidade psicológica e vínculos afetivos.",
        },

        {
          question:
            "Como saber se Escorpião é importante no meu mapa natal?",

          answer:
            "Escorpião pode ser importante se seu Sol, Lua, Ascendente ou vários planetas estiverem neste signo. Um mapa natal completo também permite descobrir a casa astrológica ocupada por Escorpião.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
