// i18n/pages/astrologie/verseau.ts

import type {
  Locale,
} from "@/i18n/config";

export type AquariusTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type AquariusCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type AquariusFaqItem = {
  question: string;
  answer: string;
};

export type AquariusPillar = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
};

export type AquariusPageText = {
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

  traits: AquariusTrait[];

  foundations: {
    title: string;

    element: AquariusPillar;
    modality: AquariusPillar;
    rulers: AquariusPillar;
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

    sun: AquariusPillar;
    moon: AquariusPillar;
    ascendant: AquariusPillar;
  };

  compatibilitySection: {
    title: string;
    paragraphs: string[];
    titlePrefix: string;
  };

  compatibilities: AquariusCompatibility[];

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
    items: AquariusFaqItem[];
  };

  disclaimer: string;
};

export const VERSEAU_TRANSLATIONS:
  Record<
    Locale,
    AquariusPageText
  > = {
  fr: {
    metadata: {
      title:
        "Verseau : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Verseau en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Uranus, Saturne, élément Air, Lune et Ascendant Verseau.",

      ogTitle:
        "Le Verseau en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Verseau : caractère, forces, défis, relations, carrière, Uranus, Saturne et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe du Verseau | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Verseau, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Verseau en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Verseau, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    hero: {
      badge:
        "♒ Onzième signe du zodiaque",

      title:
        "Le Verseau en astrologie",

      lead:
        "Le Verseau symbolise la liberté, l’innovation, l’originalité et la vision collective. Ce signe d’Air cherche à penser autrement, à dépasser les conventions et à imaginer de nouvelles façons de construire l’avenir.",

      createChart:
        "Créer ma carte du ciel gratuite",

      discover:
        "Découvrir le Verseau",
    },

    personality: {
      kicker:
        "Personnalité du Verseau",

      title:
        "Que représente le signe du Verseau ?",

      paragraphs: [
        "Le Verseau est le onzième signe du zodiaque. Il représente l’indépendance, l’innovation, les idées collectives, les changements et la capacité à envisager un avenir différent.",

        "Une personne marquée par le Verseau cherche généralement à préserver sa liberté de pensée. Elle aime comprendre les systèmes, remettre en question les habitudes et explorer des solutions nouvelles.",

        "Cette énergie apporte originalité, intelligence et ouverture. Elle demande toutefois d’apprendre à rester présente dans les liens, à écouter les émotions et à ne pas confondre indépendance et éloignement affectif.",
      ],
    },

    traitsSection: {
      title:
        "Les grandes caractéristiques du Verseau",
    },

    traits: [
      {
        title:
          "L’indépendance",

        symbol:
          "♒",

        text:
          "Le Verseau possède un fort besoin de liberté et d’autonomie. Il cherche à penser par lui-même, à suivre sa propre voie et à ne pas se laisser enfermer dans des attentes trop rigides.",
      },

      {
        title:
          "L’originalité",

        symbol:
          "♅",

        text:
          "Ce signe est naturellement attiré par les idées nouvelles, les approches différentes et les solutions innovantes. Il peut percevoir des possibilités que les autres n’envisagent pas encore.",
      },

      {
        title:
          "La vision collective",

        symbol:
          "✦",

        text:
          "Le Verseau s’intéresse souvent à l’évolution de la société, aux communautés et aux projets qui peuvent améliorer la vie collective. Il cherche à relier l’individuel à une vision plus vaste.",
      },
    ],

    foundations: {
      title:
        "Élément, modalité et planètes maîtresses",

      element: {
        symbol:
          "🌬️",

        title:
          "Élément Air",

        text:
          "L’Air apporte réflexion, communication, curiosité et besoin d’échanges. Il pousse le Verseau à comprendre le monde par les idées et les réseaux.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalité fixe",

        text:
          "La modalité fixe favorise la persévérance, la fidélité aux convictions et la capacité à soutenir une vision. Elle peut aussi renforcer l’entêtement intellectuel.",
      },

      rulers: {
        symbol:
          "♅",

        title:
          "Uranus et Saturne",

        text:
          "Uranus représente l’innovation et la liberté. Saturne apporte structure et responsabilité. Ensemble, ils relient changement et construction durable.",
      },
    },

    strengthsSection: {
      title:
        "Les forces et les défis du Verseau",

      strengthsKicker:
        "Forces naturelles",

      strengthsTitle:
        "Ce que le Verseau apporte",

      strengths: [
        "Originalité",
        "Indépendance",
        "Ouverture d’esprit",
        "Créativité",
        "Vision d’avenir",
        "Esprit humaniste",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Ce que le Verseau apprend",

      challenges: [
        "Détachement émotionnel",
        "Imprévisibilité",
        "Rigidité dans ses idées",
        "Besoin excessif d’indépendance",
        "Difficulté avec les contraintes",
        "Tendance à intellectualiser ses émotions",
      ],
    },

    love: {
      title:
        "Le Verseau en amour",

      paragraphs: [
        "En amour, le Verseau recherche généralement une relation fondée sur la liberté, l’amitié, le dialogue et le respect de l’individualité. Il a besoin de sentir qu’il peut rester lui-même.",

        "Il apprécie souvent les partenaires curieux, ouverts et capables de partager des idées, des projets ou une vision commune. Il peut créer des relations originales qui ne suivent pas toujours les modèles traditionnels.",

        "Son principal défi consiste à ne pas rester uniquement dans l’analyse ou la distance. Une relation durable lui demande de montrer ses émotions, de rassurer l’autre et d’accepter une certaine forme de vulnérabilité.",
      ],
    },

    work: {
      title:
        "Le Verseau au travail",

      paragraphs: [
        "Dans la vie professionnelle, le Verseau se distingue souvent par son originalité, sa vision globale et sa capacité à proposer des solutions différentes.",

        "Il peut être particulièrement efficace dans les domaines liés aux technologies, à la recherche, aux sciences, à l’innovation, aux communications, aux réseaux, aux organismes sociaux ou aux projets collectifs.",

        "Les environnements trop rigides ou hiérarchiques peuvent réduire sa motivation. Il gagne toutefois à structurer ses idées, à respecter les étapes et à maintenir une continuité dans ses projets.",
      ],
    },

    placements: {
      title:
        "Soleil, Lune et Ascendant en Verseau",

      sun: {
        symbol:
          "☀️",

        title:
          "Soleil en Verseau",

        text:
          "Le Soleil en Verseau construit son identité par l’indépendance, l’originalité, les idées nouvelles et le désir de contribuer à une vision collective.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Comprendre le Soleil",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lune en Verseau",

        text:
          "La Lune en Verseau a besoin d’espace, de liberté et de stimulation intellectuelle pour retrouver son équilibre émotionnel.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Comprendre la Lune",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendant Verseau",

        text:
          "L’Ascendant Verseau donne une présence originale, indépendante et parfois imprévisible. Il aborde généralement la vie avec curiosité et liberté.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Comprendre l’Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Les compatibilités du Verseau",

      paragraphs: [
        "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

        "Certaines associations peuvent néanmoins sembler naturellement plus fluides lorsqu’elles partagent un besoin de liberté, de dialogue, d’innovation et de stimulation intellectuelle.",
      ],

      titlePrefix:
        "Verseau et",
    },

    compatibilities: [
      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Les Gémeaux stimulent le Verseau par leur curiosité, leur souplesse et leur goût pour les échanges. Leur relation peut être légère, intellectuelle et très vivante.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "La Balance partage avec le Verseau un besoin de dialogue, d’ouverture et de coopération. Ensemble, ils peuvent créer un lien harmonieux et tourné vers l’avenir.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Le Sagittaire et le Verseau partagent un grand besoin de liberté, de découverte et d’indépendance. Leur relation peut être stimulante, originale et peu conventionnelle.",
      },

      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Le Bélier apporte énergie, audace et spontanéité. Le Verseau lui offre en retour créativité, vision et capacité à explorer de nouvelles directions.",
      },
    ],

    natalChart: {
      title:
        "Le Verseau dans votre thème natal",

      paragraphs: [
        "Le Verseau ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Verseau dans une maison astrologique particulière.",

        "Cette maison montre le domaine de vie dans lequel vous cherchez à vous libérer, à innover, à penser autrement ou à contribuer à une vision collective. La présence de planètes en Verseau renforce également cette énergie.",
      ],

      cta: {
        kicker:
          "Découvrez votre thème natal",

        title:
          "Où se trouve le Verseau dans votre carte du ciel ?",

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
        "Questions sur le Verseau",

      items: [
        {
          question:
            "Quelles sont les principales qualités du Verseau ?",

          answer:
            "Le Verseau est souvent associé à l’originalité, à l’indépendance, à l’ouverture d’esprit, à la créativité, à la vision d’avenir et à l’intérêt pour les projets collectifs.",
        },

        {
          question:
            "Quels sont les principaux défis du Verseau ?",

          answer:
            "Le Verseau peut parfois sembler distant, imprévisible ou très attaché à ses propres idées. Son évolution passe par une plus grande présence émotionnelle, davantage de souplesse et une meilleure écoute des besoins relationnels.",
        },

        {
          question:
            "Quelle planète gouverne le Verseau ?",

          answer:
            "Le Verseau est traditionnellement associé à Saturne et, dans l’astrologie moderne, à Uranus. Saturne représente la structure et la responsabilité, tandis qu’Uranus symbolise l’innovation, la liberté et le changement.",
        },

        {
          question:
            "Quel est l’élément du Verseau ?",

          answer:
            "Le Verseau appartient à l’élément Air. Cet élément est lié à la pensée, à la communication, aux idées, aux relations et à la circulation des connaissances.",
        },

        {
          question:
            "Comment savoir si le Verseau est important dans mon thème natal ?",

          answer:
            "Le Verseau peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par le Verseau.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Aquarius: Personality, Love, Work and Compatibility | Luna Astralis",

      description:
        "Discover Aquarius in astrology: personality, strengths, challenges, love, work, compatibility, Uranus, Saturn, Air element, Aquarius Moon and Ascendant.",

      ogTitle:
        "Aquarius in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Aquarius: character, strengths, challenges, relationships, career, Uranus, Saturn and main astrological compatibilities.",

      twitterTitle:
        "The Aquarius Sign | Luna Astralis",

      twitterDescription:
        "Discover the Aquarius personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Aquarius in Astrology: Personality, Love, Work and Compatibility",

      description:
        "A complete guide to Aquarius, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    hero: {
      badge:
        "♒ Eleventh sign of the zodiac",

      title:
        "Aquarius in Astrology",

      lead:
        "Aquarius symbolizes freedom, innovation, originality and collective vision. This Air sign seeks to think differently, move beyond convention and imagine new ways of building the future.",

      createChart:
        "Create my free birth chart",

      discover:
        "Discover Aquarius",
    },

    personality: {
      kicker:
        "Aquarius personality",

      title:
        "What does the sign of Aquarius represent?",

      paragraphs: [
        "Aquarius is the eleventh sign of the zodiac. It represents independence, innovation, collective ideas, change and the ability to imagine a different future.",

        "A person strongly influenced by Aquarius generally seeks to preserve freedom of thought. They enjoy understanding systems, questioning habits and exploring new solutions.",

        "This energy brings originality, intelligence and openness. However, it also requires learning to remain present in relationships, listen to emotions and avoid confusing independence with emotional distance.",
      ],
    },

    traitsSection: {
      title:
        "The main characteristics of Aquarius",
    },

    traits: [
      {
        title:
          "Independence",

        symbol:
          "♒",

        text:
          "Aquarius has a strong need for freedom and autonomy. It seeks to think independently, follow its own path and avoid being trapped by overly rigid expectations.",
      },

      {
        title:
          "Originality",

        symbol:
          "♅",

        text:
          "This sign is naturally attracted to new ideas, different approaches and innovative solutions. It may perceive possibilities that others have not yet considered.",
      },

      {
        title:
          "Collective vision",

        symbol:
          "✦",

        text:
          "Aquarius is often interested in the evolution of society, communities and projects that can improve collective life. It seeks to connect individuality with a broader vision.",
      },
    ],

    foundations: {
      title:
        "Element, modality and ruling planets",

      element: {
        symbol:
          "🌬️",

        title:
          "Air element",

        text:
          "Air brings reflection, communication, curiosity and a need for exchange. It encourages Aquarius to understand the world through ideas and networks.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Fixed modality",

        text:
          "The fixed modality supports perseverance, loyalty to convictions and the ability to sustain a vision. It may also strengthen intellectual stubbornness.",
      },

      rulers: {
        symbol:
          "♅",

        title:
          "Uranus and Saturn",

        text:
          "Uranus represents innovation and freedom. Saturn brings structure and responsibility. Together, they connect change with lasting construction.",
      },
    },

    strengthsSection: {
      title:
        "Aquarius strengths and challenges",

      strengthsKicker:
        "Natural strengths",

      strengthsTitle:
        "What Aquarius brings",

      strengths: [
        "Originality",
        "Independence",
        "Open-mindedness",
        "Creativity",
        "Future vision",
        "Humanitarian spirit",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "What Aquarius learns",

      challenges: [
        "Emotional detachment",
        "Unpredictability",
        "Rigidity in ideas",
        "Excessive need for independence",
        "Difficulty with restrictions",
        "Tendency to intellectualize emotions",
      ],
    },

    love: {
      title:
        "Aquarius in love",

      paragraphs: [
        "In love, Aquarius generally seeks a relationship based on freedom, friendship, dialogue and respect for individuality. It needs to feel able to remain itself.",

        "Aquarius often appreciates curious, open-minded partners who can share ideas, projects or a common vision. It may create original relationships that do not always follow traditional models.",

        "Its main challenge is to avoid remaining only in analysis or emotional distance. A lasting relationship requires expressing feelings, reassuring the other person and accepting a certain degree of vulnerability.",
      ],
    },

    work: {
      title:
        "Aquarius at work",

      paragraphs: [
        "In professional life, Aquarius often stands out through originality, broad vision and the ability to propose different solutions.",

        "It may be especially effective in fields connected with technology, research, science, innovation, communication, networks, social organizations or collective projects.",

        "Overly rigid or hierarchical environments may reduce motivation. Aquarius nevertheless benefits from structuring ideas, respecting necessary stages and maintaining continuity in projects.",
      ],
    },

    placements: {
      title:
        "Aquarius Sun, Moon and Ascendant",

      sun: {
        symbol:
          "☀️",

        title:
          "Sun in Aquarius",

        text:
          "The Sun in Aquarius builds identity through independence, originality, new ideas and the desire to contribute to a collective vision.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Understand the Sun",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Moon in Aquarius",

        text:
          "The Moon in Aquarius needs space, freedom and intellectual stimulation to regain emotional balance.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Understand the Moon",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Aquarius Ascendant",

        text:
          "The Aquarius Ascendant creates an original, independent and sometimes unpredictable presence. It generally approaches life with curiosity and freedom.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Understand the Ascendant",
      },
    },

    compatibilitySection: {
      title:
        "Aquarius compatibility",

      paragraphs: [
        "Astrological compatibility is never based only on the Sun sign. The Moon, Venus, Mars, the Ascendant and the aspects between both charts provide essential information.",

        "Some combinations may nevertheless feel more naturally fluid when they share a need for freedom, dialogue, innovation and intellectual stimulation.",
      ],

      titlePrefix:
        "Aquarius and",
    },

    compatibilities: [
      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Gemini stimulates Aquarius through curiosity, flexibility and a love of conversation. Their relationship may be light, intellectual and very lively.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra shares Aquarius’s need for dialogue, openness and cooperation. Together, they may create a harmonious relationship focused on the future.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Sagittarius and Aquarius share a strong need for freedom, discovery and independence. Their relationship may be stimulating, original and unconventional.",
      },

      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries brings energy, courage and spontaneity. Aquarius offers creativity, vision and the ability to explore new directions in return.",
      },
    ],

    natalChart: {
      title:
        "Aquarius in your birth chart",

      paragraphs: [
        "Aquarius does not concern only people born under this sign. Every birth chart contains Aquarius in a particular astrological house.",

        "This house shows the area of life in which you seek freedom, innovation, different thinking or contribution to a collective vision. Planets in Aquarius also strengthen this energy.",
      ],

      cta: {
        kicker:
          "Discover your birth chart",

        title:
          "Where is Aquarius in your birth chart?",

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
        "Questions about Aquarius",

      items: [
        {
          question:
            "What are the main qualities of Aquarius?",

          answer:
            "Aquarius is often associated with originality, independence, open-mindedness, creativity, future vision and interest in collective projects.",
        },

        {
          question:
            "What are the main challenges of Aquarius?",

          answer:
            "Aquarius may sometimes seem distant, unpredictable or strongly attached to its own ideas. Its development involves greater emotional presence, more flexibility and better awareness of relational needs.",
        },

        {
          question:
            "Which planet rules Aquarius?",

          answer:
            "Aquarius is traditionally associated with Saturn and, in modern astrology, with Uranus. Saturn represents structure and responsibility, while Uranus symbolizes innovation, freedom and change.",
        },

        {
          question:
            "What is the element of Aquarius?",

          answer:
            "Aquarius belongs to the Air element. This element is connected with thought, communication, ideas, relationships and the circulation of knowledge.",
        },

        {
          question:
            "How can I know whether Aquarius is important in my birth chart?",

          answer:
            "Aquarius may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals the astrological house occupied by Aquarius.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Acuario: personalidad, amor, trabajo y compatibilidad | Luna Astralis",

      description:
        "Descubre Acuario en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidad, Urano, Saturno, elemento Aire, Luna y Ascendente en Acuario.",

      ogTitle:
        "Acuario en astrología: personalidad, amor y compatibilidad",

      ogDescription:
        "Guía completa de Acuario: carácter, fortalezas, desafíos, relaciones, carrera, Urano, Saturno y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Acuario | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Acuario, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Acuario en astrología: personalidad, amor, trabajo y compatibilidad",

      description:
        "Guía completa sobre Acuario, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    hero: {
      badge:
        "♒ Undécimo signo del zodiaco",

      title:
        "Acuario en astrología",

      lead:
        "Acuario simboliza la libertad, la innovación, la originalidad y la visión colectiva. Este signo de Aire busca pensar de manera diferente, superar las convenciones e imaginar nuevas formas de construir el futuro.",

      createChart:
        "Crear mi carta natal gratis",

      discover:
        "Descubrir Acuario",
    },

    personality: {
      kicker:
        "Personalidad de Acuario",

      title:
        "¿Qué representa el signo de Acuario?",

      paragraphs: [
        "Acuario es el undécimo signo del zodiaco. Representa la independencia, la innovación, las ideas colectivas, los cambios y la capacidad de imaginar un futuro diferente.",

        "Una persona fuertemente influenciada por Acuario generalmente busca preservar su libertad de pensamiento. Le gusta comprender los sistemas, cuestionar los hábitos y explorar soluciones nuevas.",

        "Esta energía aporta originalidad, inteligencia y apertura. Sin embargo, también requiere aprender a permanecer presente en los vínculos, escuchar las emociones y no confundir independencia con distancia afectiva.",
      ],
    },

    traitsSection: {
      title:
        "Las principales características de Acuario",
    },

    traits: [
      {
        title:
          "La independencia",

        symbol:
          "♒",

        text:
          "Acuario posee una fuerte necesidad de libertad y autonomía. Busca pensar por sí mismo, seguir su propio camino y no quedar atrapado en expectativas demasiado rígidas.",
      },

      {
        title:
          "La originalidad",

        symbol:
          "♅",

        text:
          "Este signo se siente naturalmente atraído por las ideas nuevas, los enfoques diferentes y las soluciones innovadoras. Puede percibir posibilidades que los demás todavía no han considerado.",
      },

      {
        title:
          "La visión colectiva",

        symbol:
          "✦",

        text:
          "Acuario suele interesarse por la evolución de la sociedad, las comunidades y los proyectos que pueden mejorar la vida colectiva. Busca conectar lo individual con una visión más amplia.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidad y planetas regentes",

      element: {
        symbol:
          "🌬️",

        title:
          "Elemento Aire",

        text:
          "El Aire aporta reflexión, comunicación, curiosidad y necesidad de intercambio. Impulsa a Acuario a comprender el mundo mediante las ideas y las redes.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalidad fija",

        text:
          "La modalidad fija favorece la perseverancia, la fidelidad a las convicciones y la capacidad de sostener una visión. También puede reforzar la obstinación intelectual.",
      },

      rulers: {
        symbol:
          "♅",

        title:
          "Urano y Saturno",

        text:
          "Urano representa la innovación y la libertad. Saturno aporta estructura y responsabilidad. Juntos conectan el cambio con la construcción duradera.",
      },
    },

    strengthsSection: {
      title:
        "Las fortalezas y los desafíos de Acuario",

      strengthsKicker:
        "Fortalezas naturales",

      strengthsTitle:
        "Lo que aporta Acuario",

      strengths: [
        "Originalidad",
        "Independencia",
        "Apertura mental",
        "Creatividad",
        "Visión de futuro",
        "Espíritu humanitario",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Lo que aprende Acuario",

      challenges: [
        "Distancia emocional",
        "Imprevisibilidad",
        "Rigidez en sus ideas",
        "Necesidad excesiva de independencia",
        "Dificultad con las restricciones",
        "Tendencia a intelectualizar las emociones",
      ],
    },

    love: {
      title:
        "Acuario en el amor",

      paragraphs: [
        "En el amor, Acuario suele buscar una relación basada en la libertad, la amistad, el diálogo y el respeto por la individualidad. Necesita sentir que puede seguir siendo él mismo.",

        "Suele apreciar a las parejas curiosas, abiertas y capaces de compartir ideas, proyectos o una visión común. Puede crear relaciones originales que no siempre siguen los modelos tradicionales.",

        "Su principal desafío consiste en no permanecer únicamente en el análisis o la distancia emocional. Una relación duradera le exige mostrar sus sentimientos, tranquilizar a la otra persona y aceptar cierta vulnerabilidad.",
      ],
    },

    work: {
      title:
        "Acuario en el trabajo",

      paragraphs: [
        "En la vida profesional, Acuario suele destacar por su originalidad, su visión global y su capacidad para proponer soluciones diferentes.",

        "Puede ser especialmente eficaz en ámbitos relacionados con la tecnología, la investigación, la ciencia, la innovación, la comunicación, las redes, las organizaciones sociales o los proyectos colectivos.",

        "Los entornos demasiado rígidos o jerárquicos pueden reducir su motivación. Sin embargo, se beneficia al estructurar sus ideas, respetar las etapas necesarias y mantener continuidad en sus proyectos.",
      ],
    },

    placements: {
      title:
        "Sol, Luna y Ascendente en Acuario",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol en Acuario",

        text:
          "El Sol en Acuario construye su identidad mediante la independencia, la originalidad, las ideas nuevas y el deseo de contribuir a una visión colectiva.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Comprender el Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna en Acuario",

        text:
          "La Luna en Acuario necesita espacio, libertad y estimulación intelectual para recuperar su equilibrio emocional.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Comprender la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente en Acuario",

        text:
          "El Ascendente en Acuario proporciona una presencia original, independiente y a veces imprevisible. Generalmente aborda la vida con curiosidad y libertad.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Comprender el Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Las compatibilidades de Acuario",

      paragraphs: [
        "La compatibilidad astrológica nunca se basa únicamente en el signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

        "Algunas combinaciones pueden, sin embargo, sentirse naturalmente más fluidas cuando comparten una necesidad de libertad, diálogo, innovación y estimulación intelectual.",
      ],

      titlePrefix:
        "Acuario y",
    },

    compatibilities: [
      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Géminis estimula a Acuario mediante su curiosidad, flexibilidad y gusto por los intercambios. Su relación puede ser ligera, intelectual y muy dinámica.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra comparte con Acuario una necesidad de diálogo, apertura y cooperación. Juntos pueden crear un vínculo armonioso y orientado hacia el futuro.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Sagitario y Acuario comparten una gran necesidad de libertad, descubrimiento e independencia. Su relación puede ser estimulante, original y poco convencional.",
      },

      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries aporta energía, audacia y espontaneidad. Acuario le ofrece creatividad, visión y capacidad para explorar nuevas direcciones.",
      },
    ],

    natalChart: {
      title:
        "Acuario en tu carta natal",

      paragraphs: [
        "Acuario no se relaciona únicamente con las personas nacidas bajo este signo. Toda carta natal contiene Acuario en una casa astrológica determinada.",

        "Esta casa muestra el ámbito de vida en el que buscas liberarte, innovar, pensar de manera diferente o contribuir a una visión colectiva. La presencia de planetas en Acuario también refuerza esta energía.",
      ],

      cta: {
        kicker:
          "Descubre tu carta natal",

        title:
          "¿Dónde se encuentra Acuario en tu carta natal?",

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
        "Preguntas sobre Acuario",

      items: [
        {
          question:
            "¿Cuáles son las principales cualidades de Acuario?",

          answer:
            "Acuario suele asociarse con la originalidad, la independencia, la apertura mental, la creatividad, la visión de futuro y el interés por los proyectos colectivos.",
        },

        {
          question:
            "¿Cuáles son los principales desafíos de Acuario?",

          answer:
            "Acuario puede parecer distante, imprevisible o muy aferrado a sus propias ideas. Su evolución requiere una mayor presencia emocional, más flexibilidad y una mejor comprensión de las necesidades relacionales.",
        },

        {
          question:
            "¿Qué planeta rige Acuario?",

          answer:
            "Acuario se asocia tradicionalmente con Saturno y, en la astrología moderna, con Urano. Saturno representa la estructura y la responsabilidad, mientras que Urano simboliza la innovación, la libertad y el cambio.",
        },

        {
          question:
            "¿Cuál es el elemento de Acuario?",

          answer:
            "Acuario pertenece al elemento Aire. Este elemento se relaciona con el pensamiento, la comunicación, las ideas, las relaciones y la circulación del conocimiento.",
        },

        {
          question:
            "¿Cómo saber si Acuario es importante en mi carta natal?",

          answer:
            "Acuario puede ser importante si tu Sol, Luna, Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también permite descubrir la casa astrológica ocupada por Acuario.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Wassermann: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Wassermann in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Uranus, Saturn, Luftelement, Mond und Aszendent.",

      ogTitle:
        "Wassermann in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Wassermann: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Uranus, Saturn und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Zeichen Wassermann | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit des Wassermanns, seine Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Wassermann in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Wassermann, seinen Stärken, Herausforderungen, Beziehungen, seinem Beruf und seinen wichtigsten astrologischen Eigenschaften.",
    },

    hero: {
      badge:
        "♒ Elftes Zeichen des Tierkreises",

      title:
        "Der Wassermann in der Astrologie",

      lead:
        "Der Wassermann symbolisiert Freiheit, Innovation, Originalität und kollektive Vision. Dieses Luftzeichen möchte anders denken, Konventionen überwinden und neue Wege für die Zukunft entwickeln.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      discover:
        "Den Wassermann entdecken",
    },

    personality: {
      kicker:
        "Persönlichkeit des Wassermanns",

      title:
        "Was bedeutet das Zeichen Wassermann?",

      paragraphs: [
        "Der Wassermann ist das elfte Zeichen des Tierkreises. Er steht für Unabhängigkeit, Innovation, kollektive Ideen, Veränderung und die Fähigkeit, sich eine andere Zukunft vorzustellen.",

        "Ein stark vom Wassermann geprägter Mensch möchte gewöhnlich seine Gedankenfreiheit bewahren. Er versteht gerne Systeme, hinterfragt Gewohnheiten und erforscht neue Lösungen.",

        "Diese Energie bringt Originalität, Intelligenz und Offenheit. Sie verlangt jedoch auch, in Beziehungen präsent zu bleiben, Emotionen wahrzunehmen und Unabhängigkeit nicht mit emotionaler Distanz zu verwechseln.",
      ],
    },

    traitsSection: {
      title:
        "Die wichtigsten Eigenschaften des Wassermanns",
    },

    traits: [
      {
        title:
          "Unabhängigkeit",

        symbol:
          "♒",

        text:
          "Der Wassermann besitzt ein starkes Bedürfnis nach Freiheit und Autonomie. Er möchte selbstständig denken, seinen eigenen Weg gehen und sich nicht durch zu starre Erwartungen einengen lassen.",
      },

      {
        title:
          "Originalität",

        symbol:
          "♅",

        text:
          "Dieses Zeichen fühlt sich von neuen Ideen, anderen Ansätzen und innovativen Lösungen angezogen. Es kann Möglichkeiten erkennen, die andere noch nicht wahrgenommen haben.",
      },

      {
        title:
          "Kollektive Vision",

        symbol:
          "✦",

        text:
          "Der Wassermann interessiert sich häufig für gesellschaftliche Entwicklung, Gemeinschaften und Projekte, die das kollektive Leben verbessern können. Er verbindet das Individuelle mit einer größeren Vision.",
      },
    ],

    foundations: {
      title:
        "Element, Modalität und Herrscherplaneten",

      element: {
        symbol:
          "🌬️",

        title:
          "Element Luft",

        text:
          "Luft bringt Reflexion, Kommunikation, Neugier und ein Bedürfnis nach Austausch. Sie regt den Wassermann dazu an, die Welt durch Ideen und Netzwerke zu verstehen.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Fixe Modalität",

        text:
          "Die fixe Modalität unterstützt Ausdauer, Treue zu Überzeugungen und die Fähigkeit, eine Vision aufrechtzuerhalten. Sie kann jedoch auch geistige Sturheit verstärken.",
      },

      rulers: {
        symbol:
          "♅",

        title:
          "Uranus und Saturn",

        text:
          "Uranus steht für Innovation und Freiheit. Saturn bringt Struktur und Verantwortung. Gemeinsam verbinden sie Veränderung mit dauerhaftem Aufbau.",
      },
    },

    strengthsSection: {
      title:
        "Stärken und Herausforderungen des Wassermanns",

      strengthsKicker:
        "Natürliche Stärken",

      strengthsTitle:
        "Was der Wassermann einbringt",

      strengths: [
        "Originalität",
        "Unabhängigkeit",
        "Offenheit",
        "Kreativität",
        "Zukunftsvision",
        "Humanitärer Geist",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Was der Wassermann lernt",

      challenges: [
        "Emotionale Distanz",
        "Unberechenbarkeit",
        "Starre Vorstellungen",
        "Übermäßiges Bedürfnis nach Unabhängigkeit",
        "Schwierigkeiten mit Einschränkungen",
        "Neigung, Gefühle zu intellektualisieren",
      ],
    },

    love: {
      title:
        "Der Wassermann in der Liebe",

      paragraphs: [
        "In der Liebe sucht der Wassermann gewöhnlich eine Beziehung, die auf Freiheit, Freundschaft, Dialog und Respekt für die Individualität beruht. Er muss das Gefühl haben, er selbst bleiben zu können.",

        "Er schätzt häufig neugierige, offene Partner, mit denen er Ideen, Projekte oder eine gemeinsame Vision teilen kann. Seine Beziehungen können originell sein und nicht immer traditionellen Modellen folgen.",

        "Seine wichtigste Herausforderung besteht darin, nicht nur in Analyse oder emotionaler Distanz zu bleiben. Eine dauerhafte Beziehung verlangt, Gefühle zu zeigen, den anderen zu beruhigen und eine gewisse Verletzlichkeit zuzulassen.",
      ],
    },

    work: {
      title:
        "Der Wassermann im Beruf",

      paragraphs: [
        "Im Berufsleben zeichnet sich der Wassermann häufig durch Originalität, Weitblick und die Fähigkeit aus, ungewöhnliche Lösungen vorzuschlagen.",

        "Er kann besonders wirkungsvoll in Bereichen sein, die mit Technologie, Forschung, Wissenschaft, Innovation, Kommunikation, Netzwerken, sozialen Organisationen oder kollektiven Projekten verbunden sind.",

        "Zu starre oder hierarchische Umgebungen können seine Motivation verringern. Er profitiert jedoch davon, seine Ideen zu strukturieren, notwendige Schritte einzuhalten und Kontinuität in seinen Projekten zu bewahren.",
      ],
    },

    placements: {
      title:
        "Sonne, Mond und Aszendent im Wassermann",

      sun: {
        symbol:
          "☀️",

        title:
          "Sonne im Wassermann",

        text:
          "Die Sonne im Wassermann entwickelt ihre Identität durch Unabhängigkeit, Originalität, neue Ideen und den Wunsch, zu einer kollektiven Vision beizutragen.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Die Sonne verstehen",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Mond im Wassermann",

        text:
          "Der Mond im Wassermann braucht Freiraum, Freiheit und geistige Anregung, um sein emotionales Gleichgewicht wiederzufinden.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Den Mond verstehen",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Aszendent Wassermann",

        text:
          "Der Aszendent Wassermann verleiht eine originelle, unabhängige und manchmal unvorhersehbare Ausstrahlung. Er begegnet dem Leben gewöhnlich mit Neugier und Freiheitsliebe.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Den Aszendenten verstehen",
      },
    },

    compatibilitySection: {
      title:
        "Die Kompatibilitäten des Wassermanns",

      paragraphs: [
        "Astrologische Kompatibilität basiert niemals ausschließlich auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

        "Einige Kombinationen können sich dennoch natürlicher anfühlen, wenn sie ein Bedürfnis nach Freiheit, Dialog, Innovation und geistiger Anregung teilen.",
      ],

      titlePrefix:
        "Wassermann und",
    },

    compatibilities: [
      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Die Zwillinge regen den Wassermann durch Neugier, Flexibilität und Freude am Austausch an. Ihre Beziehung kann leicht, geistig und sehr lebendig sein.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Die Waage teilt mit dem Wassermann das Bedürfnis nach Dialog, Offenheit und Zusammenarbeit. Gemeinsam können sie eine harmonische und zukunftsorientierte Verbindung schaffen.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Schütze und Wassermann teilen ein starkes Bedürfnis nach Freiheit, Entdeckung und Unabhängigkeit. Ihre Beziehung kann anregend, originell und unkonventionell sein.",
      },

      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Der Widder bringt Energie, Mut und Spontaneität. Der Wassermann bietet im Gegenzug Kreativität, Vision und die Fähigkeit, neue Richtungen zu erforschen.",
      },
    ],

    natalChart: {
      title:
        "Der Wassermann in Ihrem Geburtshoroskop",

      paragraphs: [
        "Der Wassermann betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Wassermann in einem bestimmten astrologischen Haus.",

        "Dieses Haus zeigt den Lebensbereich, in dem Sie sich befreien, erneuern, anders denken oder zu einer kollektiven Vision beitragen möchten. Planeten im Wassermann verstärken diese Energie zusätzlich.",
      ],

      cta: {
        kicker:
          "Entdecken Sie Ihr Geburtshoroskop",

        title:
          "Wo befindet sich der Wassermann in Ihrem Geburtshoroskop?",

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
        "Fragen zum Wassermann",

      items: [
        {
          question:
            "Was sind die wichtigsten Eigenschaften des Wassermanns?",

          answer:
            "Der Wassermann wird häufig mit Originalität, Unabhängigkeit, Offenheit, Kreativität, Zukunftsvision und Interesse an kollektiven Projekten verbunden.",
        },

        {
          question:
            "Was sind die wichtigsten Herausforderungen des Wassermanns?",

          answer:
            "Der Wassermann kann manchmal distanziert, unberechenbar oder stark an seinen eigenen Vorstellungen festhalten. Seine Entwicklung erfordert mehr emotionale Präsenz, Flexibilität und Aufmerksamkeit für Beziehungsbedürfnisse.",
        },

        {
          question:
            "Welcher Planet herrscht über den Wassermann?",

          answer:
            "Der Wassermann wird traditionell Saturn und in der modernen Astrologie Uranus zugeordnet. Saturn steht für Struktur und Verantwortung, während Uranus Innovation, Freiheit und Veränderung symbolisiert.",
        },

        {
          question:
            "Welches Element hat der Wassermann?",

          answer:
            "Der Wassermann gehört zum Element Luft. Dieses Element ist mit Denken, Kommunikation, Ideen, Beziehungen und dem Austausch von Wissen verbunden.",
        },

        {
          question:
            "Wie erkenne ich, ob der Wassermann in meinem Geburtshoroskop wichtig ist?",

          answer:
            "Der Wassermann kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem das astrologische Haus des Wassermanns.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Acquario: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri l’Acquario in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Urano, Saturno, elemento Aria, Luna e Ascendente in Acquario.",

      ogTitle:
        "L’Acquario in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa all’Acquario: carattere, punti di forza, sfide, relazioni, carriera, Urano, Saturno e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno dell’Acquario | Luna Astralis",

      twitterDescription:
        "Scopri la personalità dell’Acquario, le sue qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "L’Acquario in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa dedicata all’Acquario, alle sue qualità, alle sfide, alle relazioni, alla carriera e alle principali caratteristiche astrologiche.",
    },

    hero: {
      badge:
        "♒ Undicesimo segno dello zodiaco",

      title:
        "L’Acquario in astrologia",

      lead:
        "L’Acquario simboleggia la libertà, l’innovazione, l’originalità e la visione collettiva. Questo segno d’Aria cerca di pensare in modo diverso, superare le convenzioni e immaginare nuovi modi di costruire il futuro.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      discover:
        "Scoprire l’Acquario",
    },

    personality: {
      kicker:
        "Personalità dell’Acquario",

      title:
        "Che cosa rappresenta il segno dell’Acquario?",

      paragraphs: [
        "L’Acquario è l’undicesimo segno dello zodiaco. Rappresenta l’indipendenza, l’innovazione, le idee collettive, i cambiamenti e la capacità di immaginare un futuro differente.",

        "Una persona fortemente influenzata dall’Acquario cerca generalmente di preservare la propria libertà di pensiero. Ama comprendere i sistemi, mettere in discussione le abitudini ed esplorare nuove soluzioni.",

        "Questa energia porta originalità, intelligenza e apertura. Richiede tuttavia di imparare a rimanere presenti nelle relazioni, ascoltare le emozioni e non confondere l’indipendenza con la distanza affettiva.",
      ],
    },

    traitsSection: {
      title:
        "Le principali caratteristiche dell’Acquario",
    },

    traits: [
      {
        title:
          "L’indipendenza",

        symbol:
          "♒",

        text:
          "L’Acquario possiede un forte bisogno di libertà e autonomia. Cerca di pensare con la propria testa, seguire il proprio percorso e non lasciarsi rinchiudere in aspettative troppo rigide.",
      },

      {
        title:
          "L’originalità",

        symbol:
          "♅",

        text:
          "Questo segno è naturalmente attratto dalle idee nuove, dagli approcci differenti e dalle soluzioni innovative. Può percepire possibilità che gli altri non hanno ancora considerato.",
      },

      {
        title:
          "La visione collettiva",

        symbol:
          "✦",

        text:
          "L’Acquario si interessa spesso all’evoluzione della società, alle comunità e ai progetti che possono migliorare la vita collettiva. Cerca di collegare l’individuo a una visione più ampia.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalità e pianeti governatori",

      element: {
        symbol:
          "🌬️",

        title:
          "Elemento Aria",

        text:
          "L’Aria porta riflessione, comunicazione, curiosità e bisogno di scambio. Spinge l’Acquario a comprendere il mondo attraverso le idee e le reti.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalità fissa",

        text:
          "La modalità fissa favorisce la perseveranza, la fedeltà alle convinzioni e la capacità di sostenere una visione. Può anche rafforzare l’ostinazione intellettuale.",
      },

      rulers: {
        symbol:
          "♅",

        title:
          "Urano e Saturno",

        text:
          "Urano rappresenta l’innovazione e la libertà. Saturno porta struttura e responsabilità. Insieme collegano il cambiamento alla costruzione duratura.",
      },
    },

    strengthsSection: {
      title:
        "I punti di forza e le sfide dell’Acquario",

      strengthsKicker:
        "Punti di forza naturali",

      strengthsTitle:
        "Ciò che l’Acquario porta",

      strengths: [
        "Originalità",
        "Indipendenza",
        "Apertura mentale",
        "Creatività",
        "Visione del futuro",
        "Spirito umanitario",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Ciò che l’Acquario impara",

      challenges: [
        "Distacco emotivo",
        "Imprevedibilità",
        "Rigidità nelle idee",
        "Bisogno eccessivo di indipendenza",
        "Difficoltà con le restrizioni",
        "Tendenza a intellettualizzare le emozioni",
      ],
    },

    love: {
      title:
        "L’Acquario in amore",

      paragraphs: [
        "In amore, l’Acquario cerca generalmente una relazione fondata sulla libertà, sull’amicizia, sul dialogo e sul rispetto dell’individualità. Ha bisogno di sentire di poter rimanere se stesso.",

        "Apprezza spesso partner curiosi, aperti e capaci di condividere idee, progetti o una visione comune. Può creare relazioni originali che non seguono sempre i modelli tradizionali.",

        "La sua principale sfida consiste nel non rimanere soltanto nell’analisi o nella distanza emotiva. Una relazione duratura richiede di mostrare i propri sentimenti, rassicurare l’altra persona e accettare una certa vulnerabilità.",
      ],
    },

    work: {
      title:
        "L’Acquario nel lavoro",

      paragraphs: [
        "Nella vita professionale, l’Acquario si distingue spesso per la sua originalità, la visione globale e la capacità di proporre soluzioni differenti.",

        "Può essere particolarmente efficace nei settori legati alla tecnologia, alla ricerca, alla scienza, all’innovazione, alla comunicazione, alle reti, alle organizzazioni sociali o ai progetti collettivi.",

        "Gli ambienti troppo rigidi o gerarchici possono ridurre la sua motivazione. Trae tuttavia beneficio dal dare struttura alle proprie idee, rispettare le fasi necessarie e mantenere continuità nei progetti.",
      ],
    },

    placements: {
      title:
        "Sole, Luna e Ascendente in Acquario",

      sun: {
        symbol:
          "☀️",

        title:
          "Sole in Acquario",

        text:
          "Il Sole in Acquario costruisce la propria identità attraverso l’indipendenza, l’originalità, le idee nuove e il desiderio di contribuire a una visione collettiva.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Comprendere il Sole",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Luna in Acquario",

        text:
          "La Luna in Acquario ha bisogno di spazio, libertà e stimolazione intellettuale per ritrovare il proprio equilibrio emotivo.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Comprendere la Luna",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente Acquario",

        text:
          "L’Ascendente Acquario dona una presenza originale, indipendente e talvolta imprevedibile. Affronta generalmente la vita con curiosità e libertà.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Comprendere l’Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "Le compatibilità dell’Acquario",

      paragraphs: [
        "La compatibilità astrologica non si basa mai soltanto sul segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

        "Alcune combinazioni possono tuttavia risultare naturalmente più fluide quando condividono un bisogno di libertà, dialogo, innovazione e stimolazione intellettuale.",
      ],

      titlePrefix:
        "Acquario e",
    },

    compatibilities: [
      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "I Gemelli stimolano l’Acquario con la loro curiosità, flessibilità e passione per gli scambi. La loro relazione può essere leggera, intellettuale e molto vivace.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "La Bilancia condivide con l’Acquario il bisogno di dialogo, apertura e cooperazione. Insieme possono creare un legame armonioso e orientato verso il futuro.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Sagittario e Acquario condividono un forte bisogno di libertà, scoperta e indipendenza. La loro relazione può essere stimolante, originale e poco convenzionale.",
      },

      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "L’Ariete porta energia, audacia e spontaneità. L’Acquario offre in cambio creatività, visione e capacità di esplorare nuove direzioni.",
      },
    ],

    natalChart: {
      title:
        "L’Acquario nel tuo tema natale",

      paragraphs: [
        "L’Acquario non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene l’Acquario in una determinata casa astrologica.",

        "Questa casa mostra l’ambito della vita in cui cerchi di liberarti, innovare, pensare diversamente o contribuire a una visione collettiva. Anche la presenza di pianeti in Acquario rafforza questa energia.",
      ],

      cta: {
        kicker:
          "Scopri il tuo tema natale",

        title:
          "Dove si trova l’Acquario nel tuo tema natale?",

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
        "Domande sull’Acquario",

      items: [
        {
          question:
            "Quali sono le principali qualità dell’Acquario?",

          answer:
            "L’Acquario è spesso associato all’originalità, all’indipendenza, all’apertura mentale, alla creatività, alla visione del futuro e all’interesse per i progetti collettivi.",
        },

        {
          question:
            "Quali sono le principali sfide dell’Acquario?",

          answer:
            "L’Acquario può talvolta apparire distante, imprevedibile o molto legato alle proprie idee. La sua evoluzione richiede una maggiore presenza emotiva, più flessibilità e una migliore comprensione dei bisogni relazionali.",
        },

        {
          question:
            "Quale pianeta governa l’Acquario?",

          answer:
            "L’Acquario è tradizionalmente associato a Saturno e, nell’astrologia moderna, a Urano. Saturno rappresenta la struttura e la responsabilità, mentre Urano simboleggia l’innovazione, la libertà e il cambiamento.",
        },

        {
          question:
            "Qual è l’elemento dell’Acquario?",

          answer:
            "L’Acquario appartiene all’elemento Aria. Questo elemento è legato al pensiero, alla comunicazione, alle idee, alle relazioni e alla circolazione delle conoscenze.",
        },

        {
          question:
            "Come sapere se l’Acquario è importante nel mio tema natale?",

          answer:
            "L’Acquario può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette anche di scoprire la casa astrologica occupata dall’Acquario.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },
    pt: {
    metadata: {
      title:
        "Aquário: personalidade, amor, trabalho e compatibilidade | Luna Astralis",

      description:
        "Descubra Aquário na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidade, Urano, Saturno, elemento Ar, Lua e Ascendente em Aquário.",

      ogTitle:
        "Aquário na astrologia: personalidade, amor e compatibilidade",

      ogDescription:
        "Guia completo de Aquário: personalidade, pontos fortes, desafios, relacionamentos, carreira, Urano, Saturno e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Aquário | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Aquário, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Aquário na astrologia: personalidade, amor, trabalho e compatibilidade",

      description:
        "Guia completo sobre Aquário, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    hero: {
      badge:
        "♒ Décimo primeiro signo do zodíaco",

      title:
        "Aquário na astrologia",

      lead:
        "Aquário simboliza liberdade, inovação, originalidade e visão coletiva. Esse signo de Ar procura pensar de maneira diferente, superar convenções e imaginar novas formas de construir o futuro.",

      createChart:
        "Criar meu mapa astral grátis",

      discover:
        "Descobrir Aquário",
    },

    personality: {
      kicker:
        "Personalidade de Aquário",

      title:
        "O que representa o signo de Aquário?",

      paragraphs: [
        "Aquário é o décimo primeiro signo do zodíaco. Ele representa independência, inovação, ideias coletivas, mudanças e a capacidade de imaginar um futuro diferente.",

        "Uma pessoa fortemente influenciada por Aquário geralmente procura preservar sua liberdade de pensamento. Gosta de compreender sistemas, questionar hábitos e explorar novas soluções.",

        "Essa energia traz originalidade, inteligência e abertura. No entanto, também exige aprender a permanecer presente nos relacionamentos, escutar as emoções e não confundir independência com distância afetiva.",
      ],
    },

    traitsSection: {
      title:
        "As principais características de Aquário",
    },

    traits: [
      {
        title:
          "A independência",

        symbol:
          "♒",

        text:
          "Aquário possui uma forte necessidade de liberdade e autonomia. Procura pensar por si mesmo, seguir seu próprio caminho e não ficar preso a expectativas rígidas demais.",
      },

      {
        title:
          "A originalidade",

        symbol:
          "♅",

        text:
          "Esse signo se sente naturalmente atraído por novas ideias, abordagens diferentes e soluções inovadoras. Pode perceber possibilidades que outras pessoas ainda não consideraram.",
      },

      {
        title:
          "A visão coletiva",

        symbol:
          "✦",

        text:
          "Aquário costuma se interessar pela evolução da sociedade, pelas comunidades e pelos projetos capazes de melhorar a vida coletiva. Procura conectar o individual a uma visão mais ampla.",
      },
    ],

    foundations: {
      title:
        "Elemento, modalidade e planetas regentes",

      element: {
        symbol:
          "🌬️",

        title:
          "Elemento Ar",

        text:
          "O Ar traz reflexão, comunicação, curiosidade e necessidade de troca. Ele incentiva Aquário a compreender o mundo por meio das ideias e das redes.",
      },

      modality: {
        symbol:
          "◆",

        title:
          "Modalidade fixa",

        text:
          "A modalidade fixa favorece a perseverança, a fidelidade às convicções e a capacidade de sustentar uma visão. Também pode reforçar a rigidez intelectual.",
      },

      rulers: {
        symbol:
          "♅",

        title:
          "Urano e Saturno",

        text:
          "Urano representa inovação e liberdade. Saturno traz estrutura e responsabilidade. Juntos, eles conectam mudança e construção duradoura.",
      },
    },

    strengthsSection: {
      title:
        "Os pontos fortes e os desafios de Aquário",

      strengthsKicker:
        "Pontos fortes naturais",

      strengthsTitle:
        "O que Aquário oferece",

      strengths: [
        "Originalidade",
        "Independência",
        "Mente aberta",
        "Criatividade",
        "Visão de futuro",
        "Espírito humanitário",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "O que Aquário aprende",

      challenges: [
        "Distanciamento emocional",
        "Imprevisibilidade",
        "Rigidez nas ideias",
        "Necessidade excessiva de independência",
        "Dificuldade com limitações",
        "Tendência a intelectualizar as emoções",
      ],
    },

    love: {
      title:
        "Aquário no amor",

      paragraphs: [
        "No amor, Aquário geralmente procura um relacionamento baseado em liberdade, amizade, diálogo e respeito pela individualidade. Precisa sentir que pode continuar sendo quem é.",

        "Costuma apreciar parceiros curiosos, abertos e capazes de compartilhar ideias, projetos ou uma visão em comum. Pode criar relacionamentos originais que nem sempre seguem modelos tradicionais.",

        "Seu principal desafio é não permanecer apenas na análise ou na distância emocional. Um relacionamento duradouro exige demonstrar sentimentos, tranquilizar a outra pessoa e aceitar certa vulnerabilidade.",
      ],
    },

    work: {
      title:
        "Aquário no trabalho",

      paragraphs: [
        "Na vida profissional, Aquário costuma se destacar pela originalidade, pela visão ampla e pela capacidade de propor soluções diferentes.",

        "Pode ser especialmente eficiente em áreas relacionadas à tecnologia, pesquisa, ciência, inovação, comunicação, redes, organizações sociais ou projetos coletivos.",

        "Ambientes rígidos ou hierárquicos demais podem reduzir sua motivação. Ainda assim, Aquário se beneficia ao estruturar suas ideias, respeitar as etapas necessárias e manter continuidade nos projetos.",
      ],
    },

    placements: {
      title:
        "Sol, Lua e Ascendente em Aquário",

      sun: {
        symbol:
          "☀️",

        title:
          "Sol em Aquário",

        text:
          "O Sol em Aquário constrói sua identidade por meio da independência, da originalidade, das novas ideias e do desejo de contribuir para uma visão coletiva.",

        link:
          "/astrologie/soleil",

        linkLabel:
          "Compreender o Sol",
      },

      moon: {
        symbol:
          "🌙",

        title:
          "Lua em Aquário",

        text:
          "A Lua em Aquário precisa de espaço, liberdade e estímulo intelectual para recuperar seu equilíbrio emocional.",

        link:
          "/astrologie/lune",

        linkLabel:
          "Compreender a Lua",
      },

      ascendant: {
        symbol:
          "↑",

        title:
          "Ascendente em Aquário",

        text:
          "O Ascendente em Aquário proporciona uma presença original, independente e às vezes imprevisível. Geralmente aborda a vida com curiosidade e liberdade.",

        link:
          "/astrologie/ascendant",

        linkLabel:
          "Compreender o Ascendente",
      },
    },

    compatibilitySection: {
      title:
        "As compatibilidades de Aquário",

      paragraphs: [
        "A compatibilidade astrológica nunca se baseia apenas no signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

        "Algumas combinações podem, no entanto, parecer naturalmente mais harmoniosas quando compartilham uma necessidade de liberdade, diálogo, inovação e estímulo intelectual.",
      ],

      titlePrefix:
        "Aquário e",
    },

    compatibilities: [
      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Gêmeos estimula Aquário por meio da curiosidade, da flexibilidade e do gosto pelas conversas. O relacionamento pode ser leve, intelectual e muito dinâmico.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra compartilha com Aquário a necessidade de diálogo, abertura e cooperação. Juntos, podem criar um vínculo harmonioso e voltado para o futuro.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Sagitário e Aquário compartilham uma forte necessidade de liberdade, descoberta e independência. O relacionamento pode ser estimulante, original e pouco convencional.",
      },

      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Áries traz energia, coragem e espontaneidade. Aquário oferece criatividade, visão e capacidade de explorar novas direções.",
      },
    ],

    natalChart: {
      title:
        "Aquário no seu mapa natal",

      paragraphs: [
        "Aquário não se relaciona apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Aquário em uma determinada casa astrológica.",

        "Essa casa mostra a área da vida em que você procura se libertar, inovar, pensar de maneira diferente ou contribuir para uma visão coletiva. A presença de planetas em Aquário também reforça essa energia.",
      ],

      cta: {
        kicker:
          "Descubra seu mapa natal",

        title:
          "Onde está Aquário no seu mapa astral?",

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
        "Perguntas sobre Aquário",

      items: [
        {
          question:
            "Quais são as principais qualidades de Aquário?",

          answer:
            "Aquário costuma ser associado à originalidade, à independência, à mente aberta, à criatividade, à visão de futuro e ao interesse por projetos coletivos.",
        },

        {
          question:
            "Quais são os principais desafios de Aquário?",

          answer:
            "Aquário pode parecer distante, imprevisível ou muito apegado às próprias ideias. Seu desenvolvimento exige maior presença emocional, mais flexibilidade e melhor compreensão das necessidades relacionais.",
        },

        {
          question:
            "Qual planeta rege Aquário?",

          answer:
            "Aquário é tradicionalmente associado a Saturno e, na astrologia moderna, a Urano. Saturno representa estrutura e responsabilidade, enquanto Urano simboliza inovação, liberdade e mudança.",
        },

        {
          question:
            "Qual é o elemento de Aquário?",

          answer:
            "Aquário pertence ao elemento Ar. Esse elemento está relacionado ao pensamento, à comunicação, às ideias, aos relacionamentos e à circulação do conhecimento.",
        },

        {
          question:
            "Como saber se Aquário é importante no meu mapa natal?",

          answer:
            "Aquário pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo também permite descobrir a casa astrológica ocupada por Aquário.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui aconselhamento médico, psicológico, jurídico ou financeiro.",
  },
};
