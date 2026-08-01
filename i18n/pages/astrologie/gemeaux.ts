// i18n/pages/astrologie/gemeaux.ts

import type {
  Locale,
} from "@/i18n/config";

export type GeminiTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type GeminiPillar = {
  symbol: string;
  title: string;
  text: string;
};

export type GeminiPlacement = {
  symbol: string;
  title: string;
  text: string;
  link: string;
};

export type GeminiCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type GeminiFaqItem = {
  question: string;
  answer: string;
};

export type GeminiPageText = {
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

  badge: string;
  title: string;
  lead: string;

  createChart: string;
  discoverGemini: string;

  personalityKicker: string;
  personalityTitle: string;
  personalityParagraphs: string[];

  traitsTitle: string;
  traits: GeminiTrait[];

  pillarsTitle: string;
  pillars: GeminiPillar[];

  strengthsTitle: string;
  strengthsKicker: string;
  strengthsSubtitle: string;
  strengths: string[];

  challengesKicker: string;
  challengesSubtitle: string;
  challenges: string[];

  loveTitle: string;
  loveParagraphs: string[];

  workTitle: string;
  workParagraphs: string[];

  placementsTitle: string;
  placements: GeminiPlacement[];

  compatibilityTitle: string;
  compatibilityParagraphs: string[];
  compatibilityLabel: string;
  compatibilities: GeminiCompatibility[];

  natalTitle: string;
  natalParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: GeminiFaqItem[];

  disclaimer: string;
};

export const GEMEAUX_TRANSLATIONS:
  Record<
    Locale,
    GeminiPageText
  > = {
  fr: {
    metadata: {
      title:
        "Gémeaux : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe des Gémeaux en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, planète Mercure, élément Air, Lune et Ascendant en Gémeaux.",

      ogTitle:
        "Les Gémeaux en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe des Gémeaux : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",

      twitterTitle:
        "Le signe des Gémeaux | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité des Gémeaux, leurs qualités, leurs défis, leurs relations et leurs compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Les Gémeaux en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe des Gémeaux, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    badge:
      "♊ Troisième signe du zodiaque",

    title:
      "Les Gémeaux en astrologie",

    lead:
      "Les Gémeaux symbolisent la curiosité, la communication, le mouvement et la découverte. Ce signe d’Air cherche à comprendre le monde par les idées, les échanges et les expériences variées.",

    createChart:
      "Créer ma carte du ciel gratuite",

    discoverGemini:
      "Découvrir les Gémeaux",

    personalityKicker:
      "Personnalité des Gémeaux",

    personalityTitle:
      "Que représente le signe des Gémeaux ?",

    personalityParagraphs: [
      "Les Gémeaux sont le troisième signe du zodiaque. Ils représentent l’éveil de la pensée, la communication, la curiosité et la capacité de relier plusieurs idées entre elles.",

      "Une personne marquée par les Gémeaux cherche généralement à comprendre ce qui l’entoure. Elle apprend par les échanges, les questions, les déplacements et les expériences qui stimulent son esprit.",

      "Cette énergie apporte souplesse, vivacité et polyvalence. Elle demande toutefois d’apprendre à approfondir, à ralentir le flot mental et à maintenir une direction suffisamment longtemps.",
    ],

    traitsTitle:
      "Les grandes caractéristiques des Gémeaux",

    traits: [
      {
        title:
          "La curiosité",

        symbol:
          "✦",

        text:
          "Les Gémeaux cherchent naturellement à comprendre, observer et découvrir. Leur esprit mobile s’intéresse rapidement aux idées, aux personnes et aux situations nouvelles.",
      },

      {
        title:
          "La communication",

        symbol:
          "☿",

        text:
          "Ce signe possède souvent une grande facilité à transmettre, expliquer, questionner et créer des liens. Les mots occupent une place importante dans sa manière d’exister.",
      },

      {
        title:
          "L’adaptabilité",

        symbol:
          "◇",

        text:
          "Les Gémeaux peuvent changer rapidement de perspective et s’ajuster à leur environnement. Cette souplesse leur permet de naviguer entre plusieurs centres d’intérêt.",
      },
    ],

    pillarsTitle:
      "Élément, modalité et planète maîtresse",

    pillars: [
      {
        symbol:
          "🌬️",

        title:
          "Élément Air",

        text:
          "L’Air apporte réflexion, communication, curiosité et besoin d’échanges. Il pousse les Gémeaux à comprendre le monde par les idées.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalité mutable",

        text:
          "La modalité mutable favorise l’adaptation, la souplesse et la capacité de changer de point de vue selon les circonstances.",
      },

      {
        symbol:
          "☿",

        title:
          "Planète Mercure",

        text:
          "Mercure représente la pensée, les mots, les apprentissages et les déplacements. Elle renforce la vivacité mentale des Gémeaux.",
      },
    ],

    strengthsTitle:
      "Les forces et les défis des Gémeaux",

    strengthsKicker:
      "Forces naturelles",

    strengthsSubtitle:
      "Ce que les Gémeaux apportent",

    strengths: [
      "Curiosité",
      "Adaptabilité",
      "Vivacité d’esprit",
      "Communication",
      "Polyvalence",
      "Ouverture aux idées",
    ],

    challengesKicker:
      "Points d’attention",

    challengesSubtitle:
      "Ce que les Gémeaux apprennent",

    challenges: [
      "Dispersion",
      "Hésitation",
      "Difficulté à approfondir",
      "Nervosité mentale",
      "Tendance à changer rapidement d’intérêt",
      "Besoin constant de stimulation",
    ],

    loveTitle:
      "Les Gémeaux en amour",

    loveParagraphs: [
      "En amour, les Gémeaux recherchent généralement une relation vivante, stimulante et ouverte au dialogue. Ils ont besoin de sentir qu’ils peuvent échanger, apprendre et partager des idées avec l’autre.",

      "L’humour, la complicité intellectuelle et la légèreté peuvent jouer un rôle important dans leur manière de créer un lien. Ils apprécient souvent les relations qui conservent une certaine spontanéité.",

      "Leur principal défi consiste à rester présents lorsque la nouveauté diminue. Une relation durable leur demande d’approfondir les émotions et de ne pas éviter les conversations plus exigeantes.",
    ],

    workTitle:
      "Les Gémeaux au travail",

    workParagraphs: [
      "Dans la vie professionnelle, les Gémeaux se distinguent souvent par leur rapidité d’esprit, leur curiosité et leur capacité à gérer plusieurs informations en même temps.",

      "Ils peuvent être particulièrement efficaces dans les domaines liés à la communication, à l’enseignement, à l’écriture, aux médias, au commerce, aux langues ou aux nouvelles technologies.",

      "Les environnements trop répétitifs peuvent réduire leur motivation. Ils gagnent à organiser leurs priorités et à terminer leurs projets avant de multiplier les nouvelles idées.",
    ],

    placementsTitle:
      "Soleil, Lune et Ascendant en Gémeaux",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Soleil en Gémeaux",

        text:
          "Le Soleil en Gémeaux construit son identité par la curiosité, la communication et la découverte constante de nouvelles idées.",

        link:
          "Comprendre le Soleil",
      },

      {
        symbol:
          "🌙",

        title:
          "Lune en Gémeaux",

        text:
          "La Lune en Gémeaux a besoin de parler, de comprendre et de stimuler son esprit pour retrouver son équilibre émotionnel.",

        link:
          "Comprendre la Lune",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendant Gémeaux",

        text:
          "L’Ascendant Gémeaux donne une présence vive, sociable et mobile. Il aborde généralement la vie avec curiosité et souplesse.",

        link:
          "Comprendre l’Ascendant",
      },
    ],

    compatibilityTitle:
      "Les compatibilités des Gémeaux",

    compatibilityParagraphs: [
      "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

      "Certaines associations peuvent néanmoins sembler naturellement plus fluides lorsqu’elles partagent un besoin de liberté, de dialogue et de stimulation intellectuelle.",
    ],

    compatibilityLabel:
      "Gémeaux et",

    compatibilities: [
      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "La Balance partage avec les Gémeaux un goût pour les échanges, les idées et la vie sociale. Cette relation peut être fluide, légère et stimulante.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Le Verseau nourrit la curiosité des Gémeaux par son originalité et son indépendance. Ensemble, ils peuvent partager une grande liberté intellectuelle.",
      },

      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Le Bélier apporte mouvement, spontanéité et audace. Les Gémeaux offrent en retour souplesse, humour et variété.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Le Lion peut apprécier l’intelligence vive et la créativité des Gémeaux. Cette combinaison favorise l’expression, le plaisir et les projets dynamiques.",
      },
    ],

    natalTitle:
      "Les Gémeaux dans votre thème natal",

    natalParagraphs: [
      "Les Gémeaux ne concernent pas uniquement les personnes nées sous ce signe. Chaque thème natal contient les Gémeaux dans une maison astrologique particulière.",

      "Cette maison montre le domaine de vie dans lequel vous cherchez à comprendre, communiquer, apprendre ou multiplier les expériences. La présence de planètes en Gémeaux renforce également cette énergie.",
    ],

    ctaKicker:
      "Découvrez votre thème natal",

    ctaTitle:
      "Où se trouvent les Gémeaux dans votre carte du ciel ?",

    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir vos signes, vos maisons astrologiques, votre Ascendant et les positions de vos planètes.",

    ctaButton:
      "Créer ma carte du ciel",

    faqKicker:
      "Questions fréquentes",

    faqTitle:
      "Questions sur les Gémeaux",

    faq: [
      {
        question:
          "Quelles sont les principales qualités des Gémeaux ?",

        answer:
          "Les Gémeaux sont souvent associés à la curiosité, à l’intelligence vive, à l’adaptabilité, à la communication et à la capacité de s’intéresser à plusieurs sujets.",
      },

      {
        question:
          "Quels sont les principaux défis des Gémeaux ?",

        answer:
          "Les Gémeaux peuvent parfois se disperser, changer rapidement d’intérêt ou avoir de la difficulté à approfondir. Leur évolution passe souvent par davantage de concentration et de continuité.",
      },

      {
        question:
          "Quelle planète gouverne les Gémeaux ?",

        answer:
          "Les Gémeaux sont gouvernés par Mercure, planète traditionnellement associée à la pensée, à la communication, aux apprentissages, aux déplacements et aux échanges.",
      },

      {
        question:
          "Quel est l’élément des Gémeaux ?",

        answer:
          "Les Gémeaux appartiennent à l’élément Air. Cet élément est lié aux idées, aux relations, à la communication, à la curiosité et à la circulation de l’information.",
      },

      {
        question:
          "Comment savoir si les Gémeaux sont importants dans mon thème natal ?",

        answer:
          "Les Gémeaux peuvent être importants si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
      },
    ],

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Gemini: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Gemini in astrology: personality, strengths, challenges, love, career, compatibility, Mercury, the Air element, Gemini Moon and Gemini Rising.",

      ogTitle:
        "Gemini in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Gemini: personality, strengths, challenges, relationships, career, ruling planet and major astrological compatibility.",

      twitterTitle:
        "The Gemini Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Gemini’s personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Gemini in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Gemini, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    badge:
      "♊ Third sign of the zodiac",

    title:
      "Gemini in Astrology",

    lead:
      "Gemini symbolizes curiosity, communication, movement and discovery. This Air sign seeks to understand the world through ideas, exchanges and varied experiences.",

    createChart:
      "Create my free birth chart",

    discoverGemini:
      "Discover Gemini",

    personalityKicker:
      "Gemini personality",

    personalityTitle:
      "What does the Gemini zodiac sign represent?",

    personalityParagraphs: [
      "Gemini is the third sign of the zodiac. It represents the awakening of thought, communication, curiosity and the ability to connect several ideas.",

      "A person strongly influenced by Gemini generally seeks to understand what surrounds them. They learn through exchanges, questions, movement and experiences that stimulate the mind.",

      "This energy brings flexibility, liveliness and versatility. It also requires learning to explore subjects more deeply, slow down the flow of thoughts and maintain one direction long enough.",
    ],

    traitsTitle:
      "The main characteristics of Gemini",

    traits: [
      {
        title:
          "Curiosity",

        symbol:
          "✦",

        text:
          "Gemini naturally seeks to understand, observe and discover. Its active mind quickly becomes interested in new ideas, people and situations.",
      },

      {
        title:
          "Communication",

        symbol:
          "☿",

        text:
          "This sign often has a strong ability to communicate, explain, question and create connections. Words play an important role in the way Gemini experiences life.",
      },

      {
        title:
          "Adaptability",

        symbol:
          "◇",

        text:
          "Gemini can quickly change perspective and adjust to the surrounding environment. This flexibility allows it to move between several interests.",
      },
    ],

    pillarsTitle:
      "Element, modality and ruling planet",

    pillars: [
      {
        symbol:
          "🌬️",

        title:
          "Air element",

        text:
          "Air brings thought, communication, curiosity and a need for exchange. It encourages Gemini to understand the world through ideas.",
      },

      {
        symbol:
          "◇",

        title:
          "Mutable modality",

        text:
          "The mutable modality encourages adaptation, flexibility and the ability to change perspective according to circumstances.",
      },

      {
        symbol:
          "☿",

        title:
          "Planet Mercury",

        text:
          "Mercury represents thought, words, learning and movement. It strengthens Gemini’s mental liveliness.",
      },
    ],

    strengthsTitle:
      "Gemini’s strengths and challenges",

    strengthsKicker:
      "Natural strengths",

    strengthsSubtitle:
      "What Gemini brings",

    strengths: [
      "Curiosity",
      "Adaptability",
      "Mental liveliness",
      "Communication",
      "Versatility",
      "Openness to ideas",
    ],

    challengesKicker:
      "Points of attention",

    challengesSubtitle:
      "What Gemini learns",

    challenges: [
      "Scattered attention",
      "Hesitation",
      "Difficulty going deeper",
      "Mental nervousness",
      "Tendency to change interests quickly",
      "Constant need for stimulation",
    ],

    loveTitle:
      "Gemini in love",

    loveParagraphs: [
      "In love, Gemini generally seeks a lively, stimulating relationship that remains open to dialogue. It needs to feel able to exchange, learn and share ideas with the other person.",

      "Humor, intellectual connection and lightness may play an important role in the way Gemini creates a bond. It often appreciates relationships that retain a certain spontaneity.",

      "Its main challenge is remaining present when the novelty decreases. A lasting relationship requires Gemini to explore emotions more deeply and not avoid more demanding conversations.",
    ],

    workTitle:
      "Gemini at work",

    workParagraphs: [
      "In professional life, Gemini often stands out through quick thinking, curiosity and the ability to manage several pieces of information at the same time.",

      "Gemini may be especially effective in fields related to communication, teaching, writing, media, business, languages or new technologies.",

      "Overly repetitive environments may reduce motivation. Gemini benefits from organizing priorities and completing projects before multiplying new ideas.",
    ],

    placementsTitle:
      "Sun, Moon and Rising in Gemini",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sun in Gemini",

        text:
          "The Sun in Gemini builds identity through curiosity, communication and the constant discovery of new ideas.",

        link:
          "Understand the Sun",
      },

      {
        symbol:
          "🌙",

        title:
          "Moon in Gemini",

        text:
          "The Moon in Gemini needs to speak, understand and stimulate the mind in order to restore emotional balance.",

        link:
          "Understand the Moon",
      },

      {
        symbol:
          "↑",

        title:
          "Gemini Rising",

        text:
          "Gemini Rising gives a lively, sociable and mobile presence. It generally approaches life with curiosity and flexibility.",

        link:
          "Understand the Ascendant",
      },
    ],

    compatibilityTitle:
      "Gemini compatibility",

    compatibilityParagraphs: [
      "Astrological compatibility is never based solely on the Sun sign. The Moon, Venus, Mars, the Ascendant and the aspects between both charts provide essential information.",

      "Some combinations may nevertheless feel naturally smoother when they share a need for freedom, dialogue and intellectual stimulation.",
    ],

    compatibilityLabel:
      "Gemini and",

    compatibilities: [
      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra shares Gemini’s interest in conversation, ideas and social life. This relationship can be smooth, light and stimulating.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Aquarius feeds Gemini’s curiosity through originality and independence. Together, they can share great intellectual freedom.",
      },

      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries brings movement, spontaneity and boldness. Gemini offers flexibility, humor and variety in return.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo may appreciate Gemini’s lively intelligence and creativity. This combination encourages expression, enjoyment and dynamic projects.",
      },
    ],

    natalTitle:
      "Gemini in your birth chart",

    natalParagraphs: [
      "Gemini does not concern only people born under this sign. Every birth chart contains Gemini in a particular astrological house.",

      "This house shows the area of life in which you seek to understand, communicate, learn or multiply experiences. Planets in Gemini also strengthen this energy.",
    ],

    ctaKicker:
      "Discover your birth chart",

    ctaTitle:
      "Where is Gemini in your birth chart?",

    ctaText:
      "Generate your free birth chart to discover your signs, astrological houses, Ascendant and planetary positions.",

    ctaButton:
      "Create my birth chart",

    faqKicker:
      "Frequently asked questions",

    faqTitle:
      "Questions about Gemini",

    faq: [
      {
        question:
          "What are Gemini’s main qualities?",

        answer:
          "Gemini is often associated with curiosity, quick intelligence, adaptability, communication and the ability to become interested in many subjects.",
      },

      {
        question:
          "What are Gemini’s main challenges?",

        answer:
          "Gemini may sometimes become scattered, change interests quickly or have difficulty exploring subjects deeply. Its growth often requires greater concentration and continuity.",
      },

      {
        question:
          "Which planet rules Gemini?",

        answer:
          "Gemini is ruled by Mercury, the planet traditionally associated with thought, communication, learning, movement and exchange.",
      },

      {
        question:
          "What is Gemini’s element?",

        answer:
          "Gemini belongs to the Air element. This element is connected with ideas, relationships, communication, curiosity and the circulation of information.",
      },

      {
        question:
          "How can I know whether Gemini is important in my birth chart?",

        answer:
          "Gemini may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart can confirm it.",
      },
    ],

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Géminis: personalidad, amor, trabajo y compatibilidades | Luna Astralis",

      description:
        "Descubre Géminis en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidades, Mercurio, elemento Aire, Luna y Ascendente Géminis.",

      ogTitle:
        "Géminis en astrología: personalidad, amor y compatibilidades",

      ogDescription:
        "Guía completa de Géminis: carácter, fortalezas, desafíos, relaciones, carrera, planeta regente y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Géminis | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Géminis, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Géminis en astrología: personalidad, amor, trabajo y compatibilidades",

      description:
        "Guía completa dedicada al signo de Géminis, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    badge:
      "♊ Tercer signo del zodiaco",

    title:
      "Géminis en astrología",

    lead:
      "Géminis simboliza la curiosidad, la comunicación, el movimiento y el descubrimiento. Este signo de Aire busca comprender el mundo mediante las ideas, los intercambios y las experiencias variadas.",

    createChart:
      "Crear mi carta natal gratis",

    discoverGemini:
      "Descubrir Géminis",

    personalityKicker:
      "Personalidad de Géminis",

    personalityTitle:
      "¿Qué representa el signo de Géminis?",

    personalityParagraphs: [
      "Géminis es el tercer signo del zodiaco. Representa el despertar del pensamiento, la comunicación, la curiosidad y la capacidad de relacionar varias ideas.",

      "Una persona marcada por Géminis generalmente busca comprender lo que la rodea. Aprende mediante los intercambios, las preguntas, los desplazamientos y las experiencias que estimulan su mente.",

      "Esta energía aporta flexibilidad, vivacidad y versatilidad. Sin embargo, exige aprender a profundizar, ralentizar el flujo mental y mantener una dirección durante el tiempo suficiente.",
    ],

    traitsTitle:
      "Las principales características de Géminis",

    traits: [
      {
        title:
          "La curiosidad",

        symbol:
          "✦",

        text:
          "Géminis busca naturalmente comprender, observar y descubrir. Su mente móvil se interesa rápidamente por las ideas, las personas y las situaciones nuevas.",
      },

      {
        title:
          "La comunicación",

        symbol:
          "☿",

        text:
          "Este signo suele tener una gran facilidad para transmitir, explicar, preguntar y crear vínculos. Las palabras ocupan un lugar importante en su manera de vivir.",
      },

      {
        title:
          "La adaptabilidad",

        symbol:
          "◇",

        text:
          "Géminis puede cambiar rápidamente de perspectiva y adaptarse al entorno. Esta flexibilidad le permite moverse entre varios centros de interés.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidad y planeta regente",

    pillars: [
      {
        symbol:
          "🌬️",

        title:
          "Elemento Aire",

        text:
          "El Aire aporta reflexión, comunicación, curiosidad y necesidad de intercambio. Impulsa a Géminis a comprender el mundo mediante las ideas.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalidad mutable",

        text:
          "La modalidad mutable favorece la adaptación, la flexibilidad y la capacidad de cambiar de punto de vista según las circunstancias.",
      },

      {
        symbol:
          "☿",

        title:
          "Planeta Mercurio",

        text:
          "Mercurio representa el pensamiento, las palabras, el aprendizaje y los desplazamientos. Refuerza la vivacidad mental de Géminis.",
      },
    ],

    strengthsTitle:
      "Las fortalezas y los desafíos de Géminis",

    strengthsKicker:
      "Fortalezas naturales",

    strengthsSubtitle:
      "Lo que aporta Géminis",

    strengths: [
      "Curiosidad",
      "Adaptabilidad",
      "Vivacidad mental",
      "Comunicación",
      "Versatilidad",
      "Apertura a las ideas",
    ],

    challengesKicker:
      "Puntos de atención",

    challengesSubtitle:
      "Lo que aprende Géminis",

    challenges: [
      "Dispersión",
      "Indecisión",
      "Dificultad para profundizar",
      "Nerviosismo mental",
      "Tendencia a cambiar rápidamente de interés",
      "Necesidad constante de estimulación",
    ],

    loveTitle:
      "Géminis en el amor",

    loveParagraphs: [
      "En el amor, Géminis suele buscar una relación viva, estimulante y abierta al diálogo. Necesita sentir que puede intercambiar, aprender y compartir ideas con la otra persona.",

      "El humor, la complicidad intelectual y la ligereza pueden desempeñar un papel importante en su forma de crear vínculos. Suele apreciar las relaciones que conservan cierta espontaneidad.",

      "Su principal desafío consiste en permanecer presente cuando disminuye la novedad. Una relación duradera le exige profundizar en las emociones y no evitar las conversaciones más exigentes.",
    ],

    workTitle:
      "Géminis en el trabajo",

    workParagraphs: [
      "En la vida profesional, Géminis suele destacar por su rapidez mental, su curiosidad y su capacidad para manejar varias informaciones al mismo tiempo.",

      "Puede ser especialmente eficaz en ámbitos relacionados con la comunicación, la enseñanza, la escritura, los medios, el comercio, los idiomas o las nuevas tecnologías.",

      "Los entornos demasiado repetitivos pueden reducir su motivación. Le conviene organizar sus prioridades y terminar sus proyectos antes de multiplicar nuevas ideas.",
    ],

    placementsTitle:
      "Sol, Luna y Ascendente en Géminis",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol en Géminis",

        text:
          "El Sol en Géminis construye su identidad mediante la curiosidad, la comunicación y el descubrimiento constante de nuevas ideas.",

        link:
          "Comprender el Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna en Géminis",

        text:
          "La Luna en Géminis necesita hablar, comprender y estimular su mente para recuperar el equilibrio emocional.",

        link:
          "Comprender la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Géminis",

        text:
          "El Ascendente Géminis aporta una presencia viva, sociable y móvil. Generalmente aborda la vida con curiosidad y flexibilidad.",

        link:
          "Comprender el Ascendente",
      },
    ],

    compatibilityTitle:
      "Las compatibilidades de Géminis",

    compatibilityParagraphs: [
      "Las compatibilidades astrológicas nunca dependen únicamente del signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

      "Sin embargo, algunas asociaciones pueden parecer naturalmente más fluidas cuando comparten una necesidad de libertad, diálogo y estimulación intelectual.",
    ],

    compatibilityLabel:
      "Géminis y",

    compatibilities: [
      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra comparte con Géminis el gusto por los intercambios, las ideas y la vida social. Esta relación puede ser fluida, ligera y estimulante.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Acuario alimenta la curiosidad de Géminis mediante su originalidad e independencia. Juntos pueden compartir una gran libertad intelectual.",
      },

      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries aporta movimiento, espontaneidad y audacia. Géminis ofrece a cambio flexibilidad, humor y variedad.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo puede apreciar la inteligencia viva y la creatividad de Géminis. Esta combinación favorece la expresión, el placer y los proyectos dinámicos.",
      },
    ],

    natalTitle:
      "Géminis en tu carta natal",

    natalParagraphs: [
      "Géminis no se refiere únicamente a las personas nacidas bajo este signo. Cada carta natal contiene Géminis en una casa astrológica determinada.",

      "Esa casa muestra el ámbito de vida en el que buscas comprender, comunicar, aprender o multiplicar las experiencias. La presencia de planetas en Géminis también refuerza esta energía.",
    ],

    ctaKicker:
      "Descubre tu carta natal",

    ctaTitle:
      "¿Dónde se encuentra Géminis en tu carta natal?",

    ctaText:
      "Genera gratuitamente tu carta natal para descubrir tus signos, tus casas astrológicas, tu Ascendente y las posiciones de tus planetas.",

    ctaButton:
      "Crear mi carta natal",

    faqKicker:
      "Preguntas frecuentes",

    faqTitle:
      "Preguntas sobre Géminis",

    faq: [
      {
        question:
          "¿Cuáles son las principales cualidades de Géminis?",

        answer:
          "Géminis suele asociarse con la curiosidad, la inteligencia viva, la adaptabilidad, la comunicación y la capacidad de interesarse por varios temas.",
      },

      {
        question:
          "¿Cuáles son los principales desafíos de Géminis?",

        answer:
          "Géminis puede dispersarse, cambiar rápidamente de interés o tener dificultad para profundizar. Su evolución suele requerir mayor concentración y continuidad.",
      },

      {
        question:
          "¿Qué planeta gobierna Géminis?",

        answer:
          "Géminis está regido por Mercurio, planeta tradicionalmente asociado con el pensamiento, la comunicación, el aprendizaje, los desplazamientos y los intercambios.",
      },

      {
        question:
          "¿Cuál es el elemento de Géminis?",

        answer:
          "Géminis pertenece al elemento Aire. Este elemento está relacionado con las ideas, las relaciones, la comunicación, la curiosidad y la circulación de información.",
      },

      {
        question:
          "¿Cómo saber si Géminis es importante en mi carta natal?",

        answer:
          "Géminis puede ser importante si tu Sol, tu Luna, tu Ascendente o varios planetas se encuentran en este signo. Una carta natal completa permite comprobarlo.",
      },
    ],

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Zwillinge: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie die Zwillinge in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Merkur, Luftelement, Mond und Aszendent.",

      ogTitle:
        "Die Zwillinge in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zu den Zwillingen: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Herrscherplanet und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Zwillinge | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit der Zwillinge, ihre Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Die Zwillinge in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Sternzeichen Zwillinge, seinen Stärken, Herausforderungen, Beziehungen, beruflichen Themen und wichtigsten astrologischen Eigenschaften.",
    },

    badge:
      "♊ Drittes Tierkreiszeichen",

    title:
      "Die Zwillinge in der Astrologie",

    lead:
      "Die Zwillinge symbolisieren Neugier, Kommunikation, Bewegung und Entdeckung. Dieses Luftzeichen möchte die Welt durch Ideen, Austausch und vielfältige Erfahrungen verstehen.",

    createChart:
      "Mein kostenloses Geburtshoroskop erstellen",

    discoverGemini:
      "Die Zwillinge entdecken",

    personalityKicker:
      "Persönlichkeit der Zwillinge",

    personalityTitle:
      "Wofür steht das Sternzeichen Zwillinge?",

    personalityParagraphs: [
      "Die Zwillinge sind das dritte Tierkreiszeichen. Sie stehen für das Erwachen des Denkens, Kommunikation, Neugier und die Fähigkeit, mehrere Ideen miteinander zu verbinden.",

      "Ein Mensch mit starker Zwillinge-Betonung möchte gewöhnlich verstehen, was ihn umgibt. Er lernt durch Austausch, Fragen, Bewegung und Erfahrungen, die seinen Geist anregen.",

      "Diese Energie bringt Flexibilität, Lebendigkeit und Vielseitigkeit. Gleichzeitig verlangt sie, Themen gründlicher zu erforschen, den Gedankenstrom zu verlangsamen und eine Richtung lange genug beizubehalten.",
    ],

    traitsTitle:
      "Die wichtigsten Eigenschaften der Zwillinge",

    traits: [
      {
        title:
          "Neugier",

        symbol:
          "✦",

        text:
          "Die Zwillinge möchten von Natur aus verstehen, beobachten und entdecken. Ihr beweglicher Geist interessiert sich schnell für neue Ideen, Menschen und Situationen.",
      },

      {
        title:
          "Kommunikation",

        symbol:
          "☿",

        text:
          "Dieses Zeichen besitzt häufig eine große Fähigkeit zu vermitteln, zu erklären, Fragen zu stellen und Verbindungen herzustellen. Worte spielen in seiner Lebensweise eine wichtige Rolle.",
      },

      {
        title:
          "Anpassungsfähigkeit",

        symbol:
          "◇",

        text:
          "Die Zwillinge können ihre Perspektive schnell verändern und sich an ihre Umgebung anpassen. Diese Flexibilität erlaubt ihnen, zwischen mehreren Interessen zu wechseln.",
      },
    ],

    pillarsTitle:
      "Element, Modalität und Herrscherplanet",

    pillars: [
      {
        symbol:
          "🌬️",

        title:
          "Element Luft",

        text:
          "Luft bringt Denken, Kommunikation, Neugier und das Bedürfnis nach Austausch. Sie führt die Zwillinge dazu, die Welt durch Ideen zu verstehen.",
      },

      {
        symbol:
          "◇",

        title:
          "Veränderliche Modalität",

        text:
          "Die veränderliche Modalität fördert Anpassung, Flexibilität und die Fähigkeit, die Sichtweise entsprechend den Umständen zu verändern.",
      },

      {
        symbol:
          "☿",

        title:
          "Planet Merkur",

        text:
          "Merkur steht für Denken, Worte, Lernen und Bewegung. Er verstärkt die geistige Lebendigkeit der Zwillinge.",
      },
    ],

    strengthsTitle:
      "Stärken und Herausforderungen der Zwillinge",

    strengthsKicker:
      "Natürliche Stärken",

    strengthsSubtitle:
      "Was die Zwillinge einbringen",

    strengths: [
      "Neugier",
      "Anpassungsfähigkeit",
      "Geistige Lebendigkeit",
      "Kommunikation",
      "Vielseitigkeit",
      "Offenheit für Ideen",
    ],

    challengesKicker:
      "Wichtige Lernfelder",

    challengesSubtitle:
      "Was die Zwillinge lernen",

    challenges: [
      "Zerstreutheit",
      "Unentschlossenheit",
      "Schwierigkeit, in die Tiefe zu gehen",
      "Geistige Nervosität",
      "Schneller Wechsel der Interessen",
      "Ständiges Bedürfnis nach Anregung",
    ],

    loveTitle:
      "Die Zwillinge in der Liebe",

    loveParagraphs: [
      "In der Liebe suchen die Zwillinge meist eine lebendige, anregende und dialogorientierte Beziehung. Sie müssen das Gefühl haben, sich austauschen, lernen und Ideen mit der anderen Person teilen zu können.",

      "Humor, geistige Verbundenheit und Leichtigkeit können eine wichtige Rolle in ihrer Art spielen, Beziehungen aufzubauen. Sie schätzen häufig Verbindungen, die eine gewisse Spontaneität bewahren.",

      "Ihre größte Herausforderung besteht darin, präsent zu bleiben, wenn die Neuheit nachlässt. Eine dauerhafte Beziehung verlangt, Gefühle tiefer zu erforschen und anspruchsvollere Gespräche nicht zu vermeiden.",
    ],

    workTitle:
      "Die Zwillinge im Beruf",

    workParagraphs: [
      "Im Berufsleben zeichnen sich die Zwillinge häufig durch schnelles Denken, Neugier und die Fähigkeit aus, mehrere Informationen gleichzeitig zu verarbeiten.",

      "Sie können besonders erfolgreich in Bereichen wie Kommunikation, Unterricht, Schreiben, Medien, Handel, Sprachen oder neuen Technologien sein.",

      "Zu repetitive Umgebungen können ihre Motivation verringern. Sie profitieren davon, Prioritäten zu organisieren und Projekte abzuschließen, bevor sie zahlreiche neue Ideen verfolgen.",
    ],

    placementsTitle:
      "Sonne, Mond und Aszendent in den Zwillingen",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sonne in den Zwillingen",

        text:
          "Die Sonne in den Zwillingen entwickelt ihre Identität durch Neugier, Kommunikation und die ständige Entdeckung neuer Ideen.",

        link:
          "Die Sonne verstehen",
      },

      {
        symbol:
          "🌙",

        title:
          "Mond in den Zwillingen",

        text:
          "Der Mond in den Zwillingen braucht Gespräche, Verständnis und geistige Anregung, um sein emotionales Gleichgewicht wiederzufinden.",

        link:
          "Den Mond verstehen",
      },

      {
        symbol:
          "↑",

        title:
          "Zwillinge-Aszendent",

        text:
          "Der Zwillinge-Aszendent vermittelt eine lebendige, gesellige und bewegliche Präsenz. Er begegnet dem Leben meist mit Neugier und Flexibilität.",

        link:
          "Den Aszendenten verstehen",
      },
    ],

    compatibilityTitle:
      "Kompatibilität der Zwillinge",

    compatibilityParagraphs: [
      "Astrologische Kompatibilität beruht niemals allein auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

      "Einige Verbindungen können dennoch natürlicher wirken, wenn ein gemeinsames Bedürfnis nach Freiheit, Dialog und geistiger Anregung besteht.",
    ],

    compatibilityLabel:
      "Zwillinge und",

    compatibilities: [
      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Die Waage teilt mit den Zwillingen die Freude an Austausch, Ideen und gesellschaftlichem Leben. Diese Beziehung kann leicht, fließend und anregend sein.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Der Wassermann nährt die Neugier der Zwillinge durch Originalität und Unabhängigkeit. Gemeinsam können sie große geistige Freiheit erleben.",
      },

      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Der Widder bringt Bewegung, Spontaneität und Mut. Die Zwillinge bieten dafür Flexibilität, Humor und Abwechslung.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Der Löwe kann die lebendige Intelligenz und Kreativität der Zwillinge schätzen. Diese Verbindung fördert Ausdruck, Freude und dynamische Projekte.",
      },
    ],

    natalTitle:
      "Die Zwillinge in Ihrem Geburtshoroskop",

    natalParagraphs: [
      "Die Zwillinge betreffen nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält die Zwillinge in einem bestimmten astrologischen Haus.",

      "Dieses Haus zeigt den Lebensbereich, in dem Sie verstehen, kommunizieren, lernen oder vielfältige Erfahrungen sammeln möchten. Planeten in den Zwillingen verstärken diese Energie zusätzlich.",
    ],

    ctaKicker:
      "Entdecken Sie Ihr Geburtshoroskop",

    ctaTitle:
      "Wo befinden sich die Zwillinge in Ihrem Geburtshoroskop?",

    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, Häuser, Ihren Aszendenten und die Positionen Ihrer Planeten.",

    ctaButton:
      "Mein Geburtshoroskop erstellen",

    faqKicker:
      "Häufige Fragen",

    faqTitle:
      "Fragen zu den Zwillingen",

    faq: [
      {
        question:
          "Was sind die wichtigsten Eigenschaften der Zwillinge?",

        answer:
          "Die Zwillinge werden häufig mit Neugier, schneller Intelligenz, Anpassungsfähigkeit, Kommunikation und Interesse an vielen Themen verbunden.",
      },

      {
        question:
          "Was sind die größten Herausforderungen der Zwillinge?",

        answer:
          "Die Zwillinge können zerstreut sein, ihre Interessen schnell wechseln oder Schwierigkeiten haben, Themen zu vertiefen. Ihre Entwicklung erfordert häufig mehr Konzentration und Kontinuität.",
      },

      {
        question:
          "Welcher Planet regiert die Zwillinge?",

        answer:
          "Die Zwillinge werden von Merkur regiert, dem Planeten, der traditionell mit Denken, Kommunikation, Lernen, Bewegung und Austausch verbunden ist.",
      },

      {
        question:
          "Welches Element gehört zu den Zwillingen?",

        answer:
          "Die Zwillinge gehören zum Element Luft. Dieses Element steht für Ideen, Beziehungen, Kommunikation, Neugier und den Austausch von Informationen.",
      },

      {
        question:
          "Wie erkenne ich, ob die Zwillinge in meinem Geburtshoroskop wichtig sind?",

        answer:
          "Die Zwillinge können wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop kann dies zeigen.",
      },
    ],

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Gemelli: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri i Gemelli in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Mercurio, elemento Aria, Luna e Ascendente Gemelli.",

      ogTitle:
        "I Gemelli in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa ai Gemelli: carattere, punti di forza, sfide, relazioni, carriera, pianeta governatore e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno dei Gemelli | Luna Astralis",

      twitterDescription:
        "Scopri la personalità dei Gemelli, le loro qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "I Gemelli in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al segno dei Gemelli, alle sue qualità, sfide, relazioni, carriera e principali caratteristiche astrologiche.",
    },

    badge:
      "♊ Terzo segno dello zodiaco",

    title:
      "I Gemelli in astrologia",

    lead:
      "I Gemelli simboleggiano la curiosità, la comunicazione, il movimento e la scoperta. Questo segno d’Aria cerca di comprendere il mondo attraverso le idee, gli scambi e le esperienze diverse.",

    createChart:
      "Creare gratuitamente il mio tema natale",

    discoverGemini:
      "Scoprire i Gemelli",

    personalityKicker:
      "Personalità dei Gemelli",

    personalityTitle:
      "Che cosa rappresenta il segno dei Gemelli?",

    personalityParagraphs: [
      "I Gemelli sono il terzo segno dello zodiaco. Rappresentano il risveglio del pensiero, la comunicazione, la curiosità e la capacità di collegare diverse idee.",

      "Una persona fortemente influenzata dai Gemelli cerca generalmente di comprendere ciò che la circonda. Impara attraverso gli scambi, le domande, gli spostamenti e le esperienze che stimolano la mente.",

      "Questa energia porta flessibilità, vivacità e versatilità. Richiede però di imparare ad approfondire, rallentare il flusso mentale e mantenere una direzione abbastanza a lungo.",
    ],

    traitsTitle:
      "Le principali caratteristiche dei Gemelli",

    traits: [
      {
        title:
          "La curiosità",

        symbol:
          "✦",

        text:
          "I Gemelli cercano naturalmente di comprendere, osservare e scoprire. La loro mente mobile si interessa rapidamente alle idee, alle persone e alle situazioni nuove.",
      },

      {
        title:
          "La comunicazione",

        symbol:
          "☿",

        text:
          "Questo segno possiede spesso una grande facilità nel comunicare, spiegare, fare domande e creare legami. Le parole occupano un posto importante nel suo modo di vivere.",
      },

      {
        title:
          "L’adattabilità",

        symbol:
          "◇",

        text:
          "I Gemelli possono cambiare rapidamente prospettiva e adattarsi all’ambiente. Questa flessibilità permette loro di muoversi tra diversi interessi.",
      },
    ],

    pillarsTitle:
      "Elemento, modalità e pianeta governatore",

    pillars: [
      {
        symbol:
          "🌬️",

        title:
          "Elemento Aria",

        text:
          "L’Aria porta riflessione, comunicazione, curiosità e bisogno di scambio. Spinge i Gemelli a comprendere il mondo attraverso le idee.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalità mobile",

        text:
          "La modalità mobile favorisce l’adattamento, la flessibilità e la capacità di cambiare punto di vista secondo le circostanze.",
      },

      {
        symbol:
          "☿",

        title:
          "Pianeta Mercurio",

        text:
          "Mercurio rappresenta il pensiero, le parole, l’apprendimento e gli spostamenti. Rafforza la vivacità mentale dei Gemelli.",
      },
    ],

    strengthsTitle:
      "I punti di forza e le sfide dei Gemelli",

    strengthsKicker:
      "Punti di forza naturali",

    strengthsSubtitle:
      "Ciò che portano i Gemelli",

    strengths: [
      "Curiosità",
      "Adattabilità",
      "Vivacità mentale",
      "Comunicazione",
      "Versatilità",
      "Apertura alle idee",
    ],

    challengesKicker:
      "Punti di attenzione",

    challengesSubtitle:
      "Ciò che imparano i Gemelli",

    challenges: [
      "Dispersione",
      "Indecisione",
      "Difficoltà ad approfondire",
      "Nervosismo mentale",
      "Tendenza a cambiare rapidamente interesse",
      "Bisogno costante di stimoli",
    ],

    loveTitle:
      "I Gemelli in amore",

    loveParagraphs: [
      "In amore, i Gemelli cercano generalmente una relazione viva, stimolante e aperta al dialogo. Hanno bisogno di sentire di poter scambiare, imparare e condividere idee con l’altra persona.",

      "L’umorismo, la complicità intellettuale e la leggerezza possono svolgere un ruolo importante nel loro modo di creare un legame. Apprezzano spesso le relazioni che conservano una certa spontaneità.",

      "La loro principale sfida consiste nel rimanere presenti quando la novità diminuisce. Una relazione duratura richiede di approfondire le emozioni e non evitare le conversazioni più impegnative.",
    ],

    workTitle:
      "I Gemelli nel lavoro",

    workParagraphs: [
      "Nella vita professionale, i Gemelli si distinguono spesso per la rapidità mentale, la curiosità e la capacità di gestire diverse informazioni contemporaneamente.",

      "Possono essere particolarmente efficaci nei settori legati alla comunicazione, all’insegnamento, alla scrittura, ai media, al commercio, alle lingue o alle nuove tecnologie.",

      "Gli ambienti troppo ripetitivi possono ridurre la loro motivazione. Traggono beneficio dall’organizzare le priorità e completare i progetti prima di moltiplicare le nuove idee.",
    ],

    placementsTitle:
      "Sole, Luna e Ascendente in Gemelli",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sole in Gemelli",

        text:
          "Il Sole in Gemelli costruisce la propria identità attraverso la curiosità, la comunicazione e la scoperta costante di nuove idee.",

        link:
          "Comprendere il Sole",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna in Gemelli",

        text:
          "La Luna in Gemelli ha bisogno di parlare, comprendere e stimolare la mente per ritrovare il proprio equilibrio emotivo.",

        link:
          "Comprendere la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Gemelli",

        text:
          "L’Ascendente Gemelli dona una presenza vivace, socievole e mobile. Affronta generalmente la vita con curiosità e flessibilità.",

        link:
          "Comprendere l’Ascendente",
      },
    ],

    compatibilityTitle:
      "Le compatibilità dei Gemelli",

    compatibilityParagraphs: [
      "Le compatibilità astrologiche non dipendono mai soltanto dal segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

      "Alcune associazioni possono tuttavia sembrare naturalmente più fluide quando condividono il bisogno di libertà, dialogo e stimolazione intellettuale.",
    ],

    compatibilityLabel:
      "Gemelli e",

    compatibilities: [
      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "La Bilancia condivide con i Gemelli il gusto per gli scambi, le idee e la vita sociale. Questa relazione può essere fluida, leggera e stimolante.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "L’Acquario alimenta la curiosità dei Gemelli attraverso la propria originalità e indipendenza. Insieme possono condividere una grande libertà intellettuale.",
      },

      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "L’Ariete porta movimento, spontaneità e audacia. I Gemelli offrono in cambio flessibilità, umorismo e varietà.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Il Leone può apprezzare l’intelligenza vivace e la creatività dei Gemelli. Questa combinazione favorisce l’espressione, il piacere e i progetti dinamici.",
      },
    ],

    natalTitle:
      "I Gemelli nel tuo tema natale",

    natalParagraphs: [
      "I Gemelli non riguardano soltanto le persone nate sotto questo segno. Ogni tema natale contiene i Gemelli in una determinata casa astrologica.",

      "Questa casa mostra l’ambito della vita in cui cerchi di comprendere, comunicare, imparare o moltiplicare le esperienze. La presenza di pianeti in Gemelli rafforza inoltre questa energia.",
    ],

    ctaKicker:
      "Scopri il tuo tema natale",

    ctaTitle:
      "Dove si trovano i Gemelli nel tuo tema natale?",

    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire i tuoi segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

    ctaButton:
      "Creare il mio tema natale",

    faqKicker:
      "Domande frequenti",

    faqTitle:
      "Domande sui Gemelli",

    faq: [
      {
        question:
          "Quali sono le principali qualità dei Gemelli?",

        answer:
          "I Gemelli sono spesso associati alla curiosità, all’intelligenza vivace, all’adattabilità, alla comunicazione e alla capacità di interessarsi a diversi argomenti.",
      },

      {
        question:
          "Quali sono le principali sfide dei Gemelli?",

        answer:
          "I Gemelli possono disperdersi, cambiare rapidamente interesse o avere difficoltà ad approfondire. La loro crescita richiede spesso maggiore concentrazione e continuità.",
      },

      {
        question:
          "Quale pianeta governa i Gemelli?",

        answer:
          "I Gemelli sono governati da Mercurio, pianeta tradizionalmente associato al pensiero, alla comunicazione, all’apprendimento, agli spostamenti e agli scambi.",
      },

      {
        question:
          "Qual è l’elemento dei Gemelli?",

        answer:
          "I Gemelli appartengono all’elemento Aria. Questo elemento è legato alle idee, alle relazioni, alla comunicazione, alla curiosità e alla circolazione delle informazioni.",
      },

      {
        question:
          "Come sapere se i Gemelli sono importanti nel mio tema natale?",

        answer:
          "I Gemelli possono essere importanti se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette di verificarlo.",
      },
    ],

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Gêmeos: personalidade, amor, trabalho e compatibilidades | Luna Astralis",

      description:
        "Descubra Gêmeos na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidades, Mercúrio, elemento Ar, Lua e Ascendente em Gêmeos.",

      ogTitle:
        "Gêmeos na astrologia: personalidade, amor e compatibilidades",

      ogDescription:
        "Guia completo de Gêmeos: personalidade, forças, desafios, relacionamentos, carreira, planeta regente e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Gêmeos | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Gêmeos, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Gêmeos na astrologia: personalidade, amor, trabalho e compatibilidades",

      description:
        "Guia completo sobre o signo de Gêmeos, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    badge:
      "♊ Terceiro signo do zodíaco",

    title:
      "Gêmeos na astrologia",

    lead:
      "Gêmeos simboliza a curiosidade, a comunicação, o movimento e a descoberta. Este signo de Ar procura compreender o mundo por meio das ideias, das trocas e das experiências variadas.",

    createChart:
      "Criar meu mapa astral grátis",

    discoverGemini:
      "Descobrir Gêmeos",

    personalityKicker:
      "Personalidade de Gêmeos",

    personalityTitle:
      "O que representa o signo de Gêmeos?",

    personalityParagraphs: [
      "Gêmeos é o terceiro signo do zodíaco. Ele representa o despertar do pensamento, a comunicação, a curiosidade e a capacidade de relacionar várias ideias.",

      "Uma pessoa fortemente marcada por Gêmeos geralmente procura compreender o que está ao seu redor. Aprende por meio das trocas, das perguntas, dos deslocamentos e das experiências que estimulam a mente.",

      "Essa energia traz flexibilidade, vivacidade e versatilidade. No entanto, exige aprender a aprofundar, desacelerar o fluxo mental e manter uma direção por tempo suficiente.",
    ],

    traitsTitle:
      "As principais características de Gêmeos",

    traits: [
      {
        title:
          "A curiosidade",

        symbol:
          "✦",

        text:
          "Gêmeos procura naturalmente compreender, observar e descobrir. Sua mente móvel se interessa rapidamente por ideias, pessoas e situações novas.",
      },

      {
        title:
          "A comunicação",

        symbol:
          "☿",

        text:
          "Este signo costuma ter grande facilidade para transmitir, explicar, fazer perguntas e criar vínculos. As palavras ocupam um lugar importante em sua maneira de viver.",
      },

      {
        title:
          "A adaptabilidade",

        symbol:
          "◇",

        text:
          "Gêmeos pode mudar rapidamente de perspectiva e se adaptar ao ambiente. Essa flexibilidade permite navegar entre vários centros de interesse.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidade e planeta regente",

    pillars: [
      {
        symbol:
          "🌬️",

        title:
          "Elemento Ar",

        text:
          "O Ar traz reflexão, comunicação, curiosidade e necessidade de troca. Ele leva Gêmeos a compreender o mundo por meio das ideias.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalidade mutável",

        text:
          "A modalidade mutável favorece a adaptação, a flexibilidade e a capacidade de mudar de ponto de vista de acordo com as circunstâncias.",
      },

      {
        symbol:
          "☿",

        title:
          "Planeta Mercúrio",

        text:
          "Mercúrio representa o pensamento, as palavras, a aprendizagem e os deslocamentos. Ele reforça a vivacidade mental de Gêmeos.",
      },
    ],

    strengthsTitle:
      "As forças e os desafios de Gêmeos",

    strengthsKicker:
      "Forças naturais",

    strengthsSubtitle:
      "O que Gêmeos oferece",

    strengths: [
      "Curiosidade",
      "Adaptabilidade",
      "Vivacidade mental",
      "Comunicação",
      "Versatilidade",
      "Abertura às ideias",
    ],

    challengesKicker:
      "Pontos de atenção",

    challengesSubtitle:
      "O que Gêmeos aprende",

    challenges: [
      "Dispersão",
      "Indecisão",
      "Dificuldade para aprofundar",
      "Nervosismo mental",
      "Tendência a mudar rapidamente de interesse",
      "Necessidade constante de estímulo",
    ],

    loveTitle:
      "Gêmeos no amor",

    loveParagraphs: [
      "No amor, Gêmeos geralmente procura uma relação viva, estimulante e aberta ao diálogo. Precisa sentir que pode trocar, aprender e compartilhar ideias com a outra pessoa.",

      "O humor, a cumplicidade intelectual e a leveza podem desempenhar um papel importante em sua forma de criar vínculos. Costuma apreciar relações que conservam certa espontaneidade.",

      "Seu principal desafio consiste em permanecer presente quando a novidade diminui. Uma relação duradoura exige aprofundar as emoções e não evitar as conversas mais exigentes.",
    ],

    workTitle:
      "Gêmeos no trabalho",

    workParagraphs: [
      "Na vida profissional, Gêmeos costuma se destacar pela rapidez mental, curiosidade e capacidade de administrar várias informações ao mesmo tempo.",

      "Pode ser especialmente eficiente em áreas ligadas à comunicação, ao ensino, à escrita, à mídia, ao comércio, aos idiomas ou às novas tecnologias.",

      "Ambientes excessivamente repetitivos podem reduzir sua motivação. Gêmeos se beneficia ao organizar prioridades e concluir projetos antes de multiplicar novas ideias.",
    ],

    placementsTitle:
      "Sol, Lua e Ascendente em Gêmeos",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol em Gêmeos",

        text:
          "O Sol em Gêmeos constrói sua identidade por meio da curiosidade, da comunicação e da descoberta constante de novas ideias.",

        link:
          "Compreender o Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Lua em Gêmeos",

        text:
          "A Lua em Gêmeos precisa falar, compreender e estimular a mente para recuperar o equilíbrio emocional.",

        link:
          "Compreender a Lua",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente em Gêmeos",

        text:
          "O Ascendente em Gêmeos proporciona uma presença viva, sociável e móvel. Geralmente aborda a vida com curiosidade e flexibilidade.",

        link:
          "Compreender o Ascendente",
      },
    ],

    compatibilityTitle:
      "As compatibilidades de Gêmeos",

    compatibilityParagraphs: [
      "As compatibilidades astrológicas nunca dependem apenas do signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

      "Algumas combinações podem, porém, parecer naturalmente mais fluidas quando compartilham uma necessidade de liberdade, diálogo e estímulo intelectual.",
    ],

    compatibilityLabel:
      "Gêmeos e",

    compatibilities: [
      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra compartilha com Gêmeos o gosto pelas trocas, pelas ideias e pela vida social. Essa relação pode ser fluida, leve e estimulante.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Aquário alimenta a curiosidade de Gêmeos por meio de sua originalidade e independência. Juntos, podem compartilhar grande liberdade intelectual.",
      },

      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Áries traz movimento, espontaneidade e ousadia. Gêmeos oferece em troca flexibilidade, humor e variedade.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Leão pode apreciar a inteligência viva e a criatividade de Gêmeos. Essa combinação favorece a expressão, o prazer e os projetos dinâmicos.",
      },
    ],

    natalTitle:
      "Gêmeos no seu mapa natal",

    natalParagraphs: [
      "Gêmeos não diz respeito apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Gêmeos em uma determinada casa astrológica.",

      "Essa casa mostra a área da vida em que você procura compreender, comunicar, aprender ou multiplicar experiências. A presença de planetas em Gêmeos também reforça essa energia.",
    ],

    ctaKicker:
      "Descubra seu mapa natal",

    ctaTitle:
      "Onde Gêmeos está no seu mapa natal?",

    ctaText:
      "Gere gratuitamente seu mapa natal para descobrir seus signos, suas casas astrológicas, seu Ascendente e as posições dos planetas.",

    ctaButton:
      "Criar meu mapa natal",

    faqKicker:
      "Perguntas frequentes",

    faqTitle:
      "Perguntas sobre Gêmeos",

    faq: [
      {
        question:
          "Quais são as principais qualidades de Gêmeos?",

        answer:
          "Gêmeos costuma ser associado à curiosidade, à inteligência viva, à adaptabilidade, à comunicação e à capacidade de se interessar por vários assuntos.",
      },

      {
        question:
          "Quais são os principais desafios de Gêmeos?",

        answer:
          "Gêmeos pode se dispersar, mudar rapidamente de interesse ou ter dificuldade para aprofundar. Seu crescimento costuma exigir maior concentração e continuidade.",
      },

      {
        question:
          "Qual planeta governa Gêmeos?",

        answer:
          "Gêmeos é governado por Mercúrio, planeta tradicionalmente associado ao pensamento, à comunicação, à aprendizagem, aos deslocamentos e às trocas.",
      },

      {
        question:
          "Qual é o elemento de Gêmeos?",

        answer:
          "Gêmeos pertence ao elemento Ar. Esse elemento está ligado às ideias, aos relacionamentos, à comunicação, à curiosidade e à circulação de informações.",
      },

      {
        question:
          "Como saber se Gêmeos é importante no meu mapa natal?",

        answer:
          "Gêmeos pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo permite verificar isso.",
      },
    ],

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
