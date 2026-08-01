// i18n/pages/astrologie/balance.ts

import type {
  Locale,
} from "@/i18n/config";

export type LibraTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type LibraPillar = {
  symbol: string;
  title: string;
  text: string;
};

export type LibraPlacement = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
};

export type LibraCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type LibraFaqItem = {
  question: string;
  answer: string;
};

export type LibraPageText = {
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
  discoverLibra: string;

  personalityKicker: string;
  personalityTitle: string;
  personalityParagraphs: string[];

  traitsTitle: string;
  traits: LibraTrait[];

  pillarsTitle: string;
  pillars: LibraPillar[];

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
  placements: LibraPlacement[];

  compatibilityTitle: string;
  compatibilityParagraphs: string[];
  compatibilityLabel: string;
  compatibilities: LibraCompatibility[];

  natalTitle: string;
  natalParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: LibraFaqItem[];

  disclaimer: string;
};

export const BALANCE_TRANSLATIONS:
  Record<
    Locale,
    LibraPageText
  > = {
  fr: {
    metadata: {
      title:
        "Balance : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe de la Balance en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Vénus, élément Air, Lune et Ascendant Balance.",

      ogTitle:
        "La Balance en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe de la Balance : caractère, forces, défis, relations, carrière, planète Vénus et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe de la Balance | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité de la Balance, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "La Balance en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe de la Balance, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    badge:
      "♎ Septième signe du zodiaque",

    title:
      "La Balance en astrologie",

    lead:
      "La Balance symbolise l’harmonie, les relations, la justice et la recherche d’équilibre. Ce signe d’Air cherche à créer des liens, à comprendre plusieurs points de vue et à construire des relations plus justes et plus harmonieuses.",

    createChart:
      "Créer ma carte du ciel gratuite",

    discoverLibra:
      "Découvrir la Balance",

    personalityKicker:
      "Personnalité de la Balance",

    personalityTitle:
      "Que représente le signe de la Balance ?",

    personalityParagraphs: [
      "La Balance est le septième signe du zodiaque. Elle représente la rencontre avec l’autre, l’équilibre, la coopération, la justice et la recherche d’harmonie dans les relations.",

      "Une personne marquée par la Balance cherche généralement à comprendre les différents points de vue avant de prendre position. Elle possède souvent une grande sensibilité aux ambiances, aux comportements et aux déséquilibres présents dans une relation.",

      "Cette énergie apporte diplomatie, élégance et ouverture. Elle demande toutefois d’apprendre à choisir, à affirmer ses besoins et à accepter qu’un désaccord ne détruit pas nécessairement une relation.",
    ],

    traitsTitle:
      "Les grandes caractéristiques de la Balance",

    traits: [
      {
        title:
          "La recherche d’harmonie",

        symbol:
          "♎",

        text:
          "La Balance cherche naturellement à créer un équilibre entre les personnes, les idées et les situations. Elle remarque rapidement les tensions et tente souvent de rétablir une atmosphère plus paisible.",
      },

      {
        title:
          "Le sens de la relation",

        symbol:
          "♡",

        text:
          "Ce signe se construit beaucoup à travers les échanges et les liens. Il possède souvent une grande capacité à écouter, à comprendre plusieurs points de vue et à favoriser la coopération.",
      },

      {
        title:
          "Le sens de la beauté",

        symbol:
          "♀",

        text:
          "La Balance est sensible à l’esthétique, à l’élégance et à l’harmonie des formes. Elle cherche généralement à créer un environnement agréable, équilibré et inspirant.",
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
          "L’Air apporte réflexion, communication, sociabilité et besoin d’échanges. Il pousse la Balance à comprendre le monde à travers les relations et les idées.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalité cardinale",

        text:
          "La modalité cardinale favorise l’initiative et le mouvement. Chez la Balance, elle se manifeste souvent par le désir d’établir un nouvel équilibre ou d’améliorer une relation.",
      },

      {
        symbol:
          "♀",

        title:
          "Planète Vénus",

        text:
          "Vénus représente l’amour, les valeurs, le plaisir, la beauté et les relations. Elle renforce chez la Balance le besoin de douceur, d’harmonie et de réciprocité.",
      },
    ],

    strengthsTitle:
      "Les forces et les défis de la Balance",

    strengthsKicker:
      "Forces naturelles",

    strengthsSubtitle:
      "Ce que la Balance apporte",

    strengths: [
      "Diplomatie",
      "Élégance",
      "Écoute",
      "Sens de la justice",
      "Sociabilité",
      "Capacité à coopérer",
    ],

    challengesKicker:
      "Points d’attention",

    challengesSubtitle:
      "Ce que la Balance apprend",

    challenges: [
      "Indécision",
      "Peur du conflit",
      "Dépendance au regard des autres",
      "Difficulté à choisir",
      "Tendance à vouloir plaire",
      "Évitement des désaccords",
    ],

    loveTitle:
      "La Balance en amour",

    loveParagraphs: [
      "En amour, la Balance recherche généralement une relation fondée sur le respect, la complicité et l’harmonie. Elle apprécie les échanges, les attentions et le sentiment de construire une véritable équipe avec l’autre.",

      "Elle possède souvent un grand sens du romantisme et accorde beaucoup d’importance à la qualité de la relation. Elle peut être attentive, douce et très investie lorsqu’elle se sent respectée et considérée.",

      "Son principal défi consiste à ne pas oublier ses propres besoins pour préserver la paix. Une relation durable lui demande d’exprimer clairement ce qu’elle souhaite et d’accepter les conversations plus difficiles.",
    ],

    workTitle:
      "La Balance au travail",

    workParagraphs: [
      "Dans la vie professionnelle, la Balance se distingue souvent par sa diplomatie, son sens du contact et sa capacité à travailler avec des personnalités différentes.",

      "Elle peut être particulièrement efficace dans les domaines liés aux relations humaines, au droit, à la médiation, à la communication, au design, à la mode, à l’art, à la vente ou au service-conseil.",

      "Elle apprécie généralement les environnements harmonieux et collaboratifs. Elle gagne toutefois à prendre des décisions plus rapidement et à ne pas attendre l’accord de tout le monde avant d’avancer.",
    ],

    placementsTitle:
      "Soleil, Lune et Ascendant en Balance",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Soleil en Balance",

        text:
          "Le Soleil en Balance construit son identité par les relations, la recherche de justice, la coopération et le désir de créer de l’harmonie.",

        link:
          "Comprendre le Soleil",
      },

      {
        symbol:
          "🌙",

        title:
          "Lune en Balance",

        text:
          "La Lune en Balance a besoin de calme, de beauté, de dialogue et de relations équilibrées pour retrouver son bien-être émotionnel.",

        link:
          "Comprendre la Lune",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendant Balance",

        text:
          "L’Ascendant Balance donne une présence sociable, élégante et diplomate. Il aborde généralement la vie avec charme, écoute et recherche d’équilibre.",

        link:
          "Comprendre l’Ascendant",
      },
    ],

    compatibilityTitle:
      "Les compatibilités de la Balance",

    compatibilityParagraphs: [
      "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

      "Certaines associations peuvent néanmoins sembler naturellement plus fluides lorsqu’elles partagent un besoin de dialogue, de liberté, d’harmonie et de stimulation intellectuelle.",
    ],

    compatibilityLabel:
      "Balance et",

    compatibilities: [
      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Les Gémeaux et la Balance partagent un goût prononcé pour les échanges, les idées et la vie sociale. Cette relation peut être légère, stimulante et très communicative.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Le Verseau stimule la Balance par son originalité et son indépendance. Ensemble, ils peuvent construire une relation basée sur la liberté, le dialogue et une vision commune.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Le Lion peut apprécier l’élégance et la douceur relationnelle de la Balance. La Balance est souvent attirée par son charisme, sa créativité et sa chaleur.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Le Sagittaire apporte mouvement, optimisme et spontanéité. La Balance offre en retour diplomatie, charme et capacité à créer un climat harmonieux.",
      },
    ],

    natalTitle:
      "La Balance dans votre thème natal",

    natalParagraphs: [
      "La Balance ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient la Balance dans une maison astrologique particulière.",

      "Cette maison montre le domaine de vie dans lequel vous cherchez à coopérer, à établir un équilibre, à créer des liens ou à développer votre sens de la justice. La présence de planètes en Balance renforce également cette énergie.",
    ],

    ctaKicker:
      "Découvrez votre thème natal",

    ctaTitle:
      "Où se trouve la Balance dans votre carte du ciel ?",

    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir vos signes, vos maisons astrologiques, votre Ascendant et les positions de vos planètes.",

    ctaButton:
      "Créer ma carte du ciel",

    faqKicker:
      "Questions fréquentes",

    faqTitle:
      "Questions sur la Balance",

    faq: [
      {
        question:
          "Quelles sont les principales qualités de la Balance ?",

        answer:
          "La Balance est souvent associée à la diplomatie, à l’élégance, à la sociabilité, au sens de la justice, à l’écoute et à la capacité de créer de l’harmonie.",
      },

      {
        question:
          "Quels sont les principaux défis de la Balance ?",

        answer:
          "La Balance peut parfois hésiter longtemps avant de choisir, éviter les conflits ou accorder trop d’importance au regard des autres. Son évolution passe par une plus grande affirmation de ses besoins et de ses décisions.",
      },

      {
        question:
          "Quelle planète gouverne la Balance ?",

        answer:
          "La Balance est gouvernée par Vénus, planète traditionnellement associée à l’amour, aux relations, au plaisir, à l’harmonie, aux valeurs et à la beauté.",
      },

      {
        question:
          "Quel est l’élément de la Balance ?",

        answer:
          "La Balance appartient à l’élément Air. Cet élément est lié à la pensée, à la communication, aux relations, aux idées et au besoin d’échanger avec les autres.",
      },

      {
        question:
          "Comment savoir si la Balance est importante dans mon thème natal ?",

        answer:
          "La Balance peut être importante si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par la Balance.",
      },
    ],

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Libra: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Libra in astrology: personality, strengths, challenges, love, career, compatibility, Venus, the Air element, Libra Moon and Libra Rising.",

      ogTitle:
        "Libra in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Libra: personality, strengths, challenges, relationships, career, Venus and major astrological compatibility.",

      twitterTitle:
        "The Libra Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Libra’s personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Libra in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Libra, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    badge:
      "♎ Seventh sign of the zodiac",

    title:
      "Libra in Astrology",

    lead:
      "Libra symbolizes harmony, relationships, justice and the search for balance. This Air sign seeks to create connections, understand different points of view and build fairer, more harmonious relationships.",

    createChart:
      "Create my free birth chart",

    discoverLibra:
      "Discover Libra",

    personalityKicker:
      "Libra personality",

    personalityTitle:
      "What does the Libra zodiac sign represent?",

    personalityParagraphs: [
      "Libra is the seventh sign of the zodiac. It represents meeting others, balance, cooperation, justice and the search for harmony in relationships.",

      "A person strongly influenced by Libra generally tries to understand different points of view before taking a position. They often have a strong sensitivity to atmospheres, behavior and imbalances within relationships.",

      "This energy brings diplomacy, elegance and openness. It also requires learning to choose, assert personal needs and accept that disagreement does not necessarily destroy a relationship.",
    ],

    traitsTitle:
      "The main characteristics of Libra",

    traits: [
      {
        title:
          "The search for harmony",

        symbol:
          "♎",

        text:
          "Libra naturally seeks to create balance between people, ideas and situations. It quickly notices tension and often tries to restore a more peaceful atmosphere.",
      },

      {
        title:
          "A strong relationship focus",

        symbol:
          "♡",

        text:
          "This sign develops greatly through exchanges and connections. It often has a strong ability to listen, understand several points of view and encourage cooperation.",
      },

      {
        title:
          "A sense of beauty",

        symbol:
          "♀",

        text:
          "Libra is sensitive to aesthetics, elegance and visual harmony. It generally seeks to create a pleasant, balanced and inspiring environment.",
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
          "Air brings thought, communication, sociability and a need for exchange. It encourages Libra to understand the world through relationships and ideas.",
      },

      {
        symbol:
          "◇",

        title:
          "Cardinal modality",

        text:
          "The cardinal modality encourages initiative and movement. In Libra, it often appears as a desire to establish a new balance or improve a relationship.",
      },

      {
        symbol:
          "♀",

        title:
          "Planet Venus",

        text:
          "Venus represents love, values, pleasure, beauty and relationships. It strengthens Libra’s need for gentleness, harmony and reciprocity.",
      },
    ],

    strengthsTitle:
      "Libra’s strengths and challenges",

    strengthsKicker:
      "Natural strengths",

    strengthsSubtitle:
      "What Libra brings",

    strengths: [
      "Diplomacy",
      "Elegance",
      "Listening skills",
      "Sense of justice",
      "Sociability",
      "Ability to cooperate",
    ],

    challengesKicker:
      "Points of attention",

    challengesSubtitle:
      "What Libra learns",

    challenges: [
      "Indecision",
      "Fear of conflict",
      "Dependence on others’ opinions",
      "Difficulty making choices",
      "Tendency to please",
      "Avoidance of disagreement",
    ],

    loveTitle:
      "Libra in love",

    loveParagraphs: [
      "In love, Libra generally seeks a relationship based on respect, connection and harmony. It appreciates communication, thoughtful gestures and the feeling of building a true partnership.",

      "Libra often has a strong romantic side and places great importance on the quality of the relationship. It can be attentive, gentle and deeply committed when it feels respected and valued.",

      "Its main challenge is not forgetting its own needs in order to preserve peace. A lasting relationship requires Libra to clearly express what it wants and accept more difficult conversations.",
    ],

    workTitle:
      "Libra at work",

    workParagraphs: [
      "In professional life, Libra often stands out through diplomacy, interpersonal skills and the ability to work with different personalities.",

      "It can be especially effective in fields related to human relations, law, mediation, communication, design, fashion, art, sales or consulting.",

      "Libra generally appreciates harmonious and collaborative environments. It benefits from making decisions more quickly and not waiting for everyone’s agreement before moving forward.",
    ],

    placementsTitle:
      "Sun, Moon and Rising in Libra",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sun in Libra",

        text:
          "The Sun in Libra builds identity through relationships, the search for justice, cooperation and the desire to create harmony.",

        link:
          "Understand the Sun",
      },

      {
        symbol:
          "🌙",

        title:
          "Moon in Libra",

        text:
          "The Moon in Libra needs calm, beauty, dialogue and balanced relationships to restore emotional well-being.",

        link:
          "Understand the Moon",
      },

      {
        symbol:
          "↑",

        title:
          "Libra Rising",

        text:
          "Libra Rising gives a sociable, elegant and diplomatic presence. It generally approaches life with charm, attentiveness and a search for balance.",

        link:
          "Understand the Ascendant",
      },
    ],

    compatibilityTitle:
      "Libra compatibility",

    compatibilityParagraphs: [
      "Astrological compatibility is never based solely on the Sun sign. The Moon, Venus, Mars, the Ascendant and the aspects between both charts provide essential information.",

      "Some combinations may nevertheless feel naturally smoother when they share a need for dialogue, freedom, harmony and intellectual stimulation.",
    ],

    compatibilityLabel:
      "Libra and",

    compatibilities: [
      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Gemini and Libra share a strong interest in conversation, ideas and social life. This relationship can be light, stimulating and highly communicative.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Aquarius stimulates Libra through originality and independence. Together, they can build a relationship based on freedom, dialogue and a shared vision.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo may appreciate Libra’s elegance and relational gentleness. Libra is often attracted to Leo’s charisma, creativity and warmth.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Sagittarius brings movement, optimism and spontaneity. Libra offers diplomacy, charm and the ability to create a harmonious atmosphere.",
      },
    ],

    natalTitle:
      "Libra in your birth chart",

    natalParagraphs: [
      "Libra does not concern only people born under this sign. Every birth chart contains Libra in a particular astrological house.",

      "This house shows the area of life in which you seek cooperation, balance, connection or a stronger sense of justice. Planets located in Libra also strengthen this energy.",
    ],

    ctaKicker:
      "Discover your birth chart",

    ctaTitle:
      "Where is Libra in your birth chart?",

    ctaText:
      "Generate your free birth chart to discover your signs, astrological houses, Ascendant and planetary positions.",

    ctaButton:
      "Create my birth chart",

    faqKicker:
      "Frequently asked questions",

    faqTitle:
      "Questions about Libra",

    faq: [
      {
        question:
          "What are Libra’s main qualities?",

        answer:
          "Libra is often associated with diplomacy, elegance, sociability, a sense of justice, listening skills and the ability to create harmony.",
      },

      {
        question:
          "What are Libra’s main challenges?",

        answer:
          "Libra may sometimes hesitate for a long time before choosing, avoid conflict or place too much importance on other people’s opinions. Its growth involves greater confidence in personal needs and decisions.",
      },

      {
        question:
          "Which planet rules Libra?",

        answer:
          "Libra is ruled by Venus, the planet traditionally associated with love, relationships, pleasure, harmony, values and beauty.",
      },

      {
        question:
          "What is Libra’s element?",

        answer:
          "Libra belongs to the Air element. This element is linked to thought, communication, relationships, ideas and the need to exchange with others.",
      },

      {
        question:
          "How can I know whether Libra is important in my birth chart?",

        answer:
          "Libra may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals which astrological house contains Libra.",
      },
    ],

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Libra: personalidad, amor, trabajo y compatibilidades | Luna Astralis",

      description:
        "Descubre el signo de Libra en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidades, Venus, elemento Aire, Luna y Ascendente Libra.",

      ogTitle:
        "Libra en astrología: personalidad, amor y compatibilidades",

      ogDescription:
        "Guía completa del signo de Libra: carácter, fortalezas, desafíos, relaciones, carrera, planeta Venus y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Libra | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Libra, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Libra en astrología: personalidad, amor, trabajo y compatibilidades",

      description:
        "Guía completa sobre el signo de Libra, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    badge:
      "♎ Séptimo signo del zodiaco",

    title:
      "Libra en astrología",

    lead:
      "Libra simboliza la armonía, las relaciones, la justicia y la búsqueda de equilibrio. Este signo de Aire busca crear vínculos, comprender diferentes puntos de vista y construir relaciones más justas y armoniosas.",

    createChart:
      "Crear mi carta natal gratis",

    discoverLibra:
      "Descubrir Libra",

    personalityKicker:
      "Personalidad de Libra",

    personalityTitle:
      "¿Qué representa el signo de Libra?",

    personalityParagraphs: [
      "Libra es el séptimo signo del zodiaco. Representa el encuentro con el otro, el equilibrio, la cooperación, la justicia y la búsqueda de armonía en las relaciones.",

      "Una persona marcada por Libra generalmente busca comprender distintos puntos de vista antes de tomar posición. Suele tener una gran sensibilidad hacia los ambientes, los comportamientos y los desequilibrios presentes en una relación.",

      "Esta energía aporta diplomacia, elegancia y apertura. Sin embargo, también exige aprender a elegir, afirmar las propias necesidades y aceptar que un desacuerdo no destruye necesariamente una relación.",
    ],

    traitsTitle:
      "Las grandes características de Libra",

    traits: [
      {
        title:
          "La búsqueda de armonía",

        symbol:
          "♎",

        text:
          "Libra busca naturalmente crear equilibrio entre las personas, las ideas y las situaciones. Detecta rápidamente las tensiones e intenta restablecer un ambiente más tranquilo.",
      },

      {
        title:
          "El sentido de la relación",

        symbol:
          "♡",

        text:
          "Este signo se construye mucho a través de los intercambios y los vínculos. Suele tener una gran capacidad para escuchar, comprender distintos puntos de vista y favorecer la cooperación.",
      },

      {
        title:
          "El sentido de la belleza",

        symbol:
          "♀",

        text:
          "Libra es sensible a la estética, la elegancia y la armonía de las formas. Generalmente busca crear un entorno agradable, equilibrado e inspirador.",
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
          "El Aire aporta reflexión, comunicación, sociabilidad y necesidad de intercambio. Impulsa a Libra a comprender el mundo a través de las relaciones y las ideas.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalidad cardinal",

        text:
          "La modalidad cardinal favorece la iniciativa y el movimiento. En Libra, suele manifestarse mediante el deseo de establecer un nuevo equilibrio o mejorar una relación.",
      },

      {
        symbol:
          "♀",

        title:
          "Planeta Venus",

        text:
          "Venus representa el amor, los valores, el placer, la belleza y las relaciones. Refuerza en Libra la necesidad de dulzura, armonía y reciprocidad.",
      },
    ],

    strengthsTitle:
      "Las fortalezas y los desafíos de Libra",

    strengthsKicker:
      "Fortalezas naturales",

    strengthsSubtitle:
      "Lo que aporta Libra",

    strengths: [
      "Diplomacia",
      "Elegancia",
      "Capacidad de escucha",
      "Sentido de la justicia",
      "Sociabilidad",
      "Capacidad de cooperación",
    ],

    challengesKicker:
      "Puntos de atención",

    challengesSubtitle:
      "Lo que aprende Libra",

    challenges: [
      "Indecisión",
      "Miedo al conflicto",
      "Dependencia de la opinión ajena",
      "Dificultad para elegir",
      "Tendencia a querer agradar",
      "Evitación de los desacuerdos",
    ],

    loveTitle:
      "Libra en el amor",

    loveParagraphs: [
      "En el amor, Libra suele buscar una relación basada en el respeto, la complicidad y la armonía. Valora los intercambios, las atenciones y la sensación de construir un verdadero equipo con la otra persona.",

      "Suele tener un gran sentido del romanticismo y concede mucha importancia a la calidad de la relación. Puede ser atento, dulce y muy comprometido cuando se siente respetado y valorado.",

      "Su principal desafío consiste en no olvidar sus propias necesidades para conservar la paz. Una relación duradera le exige expresar claramente lo que desea y aceptar las conversaciones más difíciles.",
    ],

    workTitle:
      "Libra en el trabajo",

    workParagraphs: [
      "En la vida profesional, Libra suele destacar por su diplomacia, su capacidad de relacionarse y su habilidad para trabajar con personalidades diferentes.",

      "Puede ser especialmente eficaz en ámbitos relacionados con los recursos humanos, el derecho, la mediación, la comunicación, el diseño, la moda, el arte, las ventas o la asesoría.",

      "Generalmente aprecia los entornos armoniosos y colaborativos. Sin embargo, le conviene tomar decisiones más rápidamente y no esperar el acuerdo de todo el mundo antes de avanzar.",
    ],

    placementsTitle:
      "Sol, Luna y Ascendente en Libra",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol en Libra",

        text:
          "El Sol en Libra construye su identidad a través de las relaciones, la búsqueda de justicia, la cooperación y el deseo de crear armonía.",

        link:
          "Comprender el Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna en Libra",

        text:
          "La Luna en Libra necesita calma, belleza, diálogo y relaciones equilibradas para recuperar su bienestar emocional.",

        link:
          "Comprender la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Libra",

        text:
          "El Ascendente Libra aporta una presencia sociable, elegante y diplomática. Generalmente aborda la vida con encanto, escucha y búsqueda de equilibrio.",

        link:
          "Comprender el Ascendente",
      },
    ],

    compatibilityTitle:
      "Las compatibilidades de Libra",

    compatibilityParagraphs: [
      "Las compatibilidades astrológicas nunca dependen únicamente del signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

      "Sin embargo, algunas asociaciones pueden parecer naturalmente más fluidas cuando comparten una necesidad de diálogo, libertad, armonía y estimulación intelectual.",
    ],

    compatibilityLabel:
      "Libra y",

    compatibilities: [
      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Géminis y Libra comparten un fuerte interés por los intercambios, las ideas y la vida social. Esta relación puede ser ligera, estimulante y muy comunicativa.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Acuario estimula a Libra con su originalidad e independencia. Juntos pueden construir una relación basada en la libertad, el diálogo y una visión compartida.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo puede apreciar la elegancia y la dulzura relacional de Libra. Libra suele sentirse atraído por su carisma, creatividad y calidez.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Sagitario aporta movimiento, optimismo y espontaneidad. Libra ofrece diplomacia, encanto y la capacidad de crear un ambiente armonioso.",
      },
    ],

    natalTitle:
      "Libra en tu carta natal",

    natalParagraphs: [
      "Libra no se refiere únicamente a las personas nacidas bajo este signo. Cada carta natal contiene Libra en una casa astrológica determinada.",

      "Esa casa muestra el ámbito de vida en el que buscas cooperar, establecer equilibrio, crear vínculos o desarrollar tu sentido de la justicia. La presencia de planetas en Libra también refuerza esta energía.",
    ],

    ctaKicker:
      "Descubre tu carta natal",

    ctaTitle:
      "¿Dónde se encuentra Libra en tu carta natal?",

    ctaText:
      "Genera gratuitamente tu carta natal para descubrir tus signos, tus casas astrológicas, tu Ascendente y las posiciones de tus planetas.",

    ctaButton:
      "Crear mi carta natal",

    faqKicker:
      "Preguntas frecuentes",

    faqTitle:
      "Preguntas sobre Libra",

    faq: [
      {
        question:
          "¿Cuáles son las principales cualidades de Libra?",

        answer:
          "Libra suele asociarse con la diplomacia, la elegancia, la sociabilidad, el sentido de la justicia, la capacidad de escucha y la habilidad para crear armonía.",
      },

      {
        question:
          "¿Cuáles son los principales desafíos de Libra?",

        answer:
          "Libra puede dudar durante mucho tiempo antes de elegir, evitar los conflictos o conceder demasiada importancia a la opinión ajena. Su evolución pasa por una mayor afirmación de sus necesidades y decisiones.",
      },

      {
        question:
          "¿Qué planeta gobierna Libra?",

        answer:
          "Libra está regido por Venus, planeta tradicionalmente asociado con el amor, las relaciones, el placer, la armonía, los valores y la belleza.",
      },

      {
        question:
          "¿Cuál es el elemento de Libra?",

        answer:
          "Libra pertenece al elemento Aire. Este elemento está relacionado con el pensamiento, la comunicación, las relaciones, las ideas y la necesidad de intercambiar con los demás.",
      },

      {
        question:
          "¿Cómo saber si Libra es importante en mi carta natal?",

        answer:
          "Libra puede ser importante si tu Sol, tu Luna, tu Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también permite descubrir qué casa astrológica ocupa Libra.",
      },
    ],

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Waage: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie das Sternzeichen Waage: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Venus, Luftelement, Waage-Mond und Waage-Aszendent.",

      ogTitle:
        "Die Waage in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zur Waage: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Venus und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Waage | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit der Waage, ihre Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Die Waage in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Sternzeichen Waage, seinen Stärken, Herausforderungen, Beziehungen, beruflichen Themen und astrologischen Eigenschaften.",
    },

    badge:
      "♎ Siebtes Tierkreiszeichen",

    title:
      "Die Waage in der Astrologie",

    lead:
      "Die Waage symbolisiert Harmonie, Beziehungen, Gerechtigkeit und die Suche nach Ausgleich. Dieses Luftzeichen möchte Verbindungen schaffen, verschiedene Standpunkte verstehen und gerechtere, harmonischere Beziehungen aufbauen.",

    createChart:
      "Mein kostenloses Geburtshoroskop erstellen",

    discoverLibra:
      "Die Waage entdecken",

    personalityKicker:
      "Persönlichkeit der Waage",

    personalityTitle:
      "Wofür steht das Sternzeichen Waage?",

    personalityParagraphs: [
      "Die Waage ist das siebte Tierkreiszeichen. Sie steht für die Begegnung mit anderen, Ausgleich, Zusammenarbeit, Gerechtigkeit und die Suche nach Harmonie in Beziehungen.",

      "Ein Mensch mit starker Waage-Betonung versucht meist, unterschiedliche Standpunkte zu verstehen, bevor er Stellung bezieht. Häufig besteht eine ausgeprägte Sensibilität für Stimmungen, Verhaltensweisen und Ungleichgewichte in Beziehungen.",

      "Diese Energie bringt Diplomatie, Eleganz und Offenheit. Gleichzeitig verlangt sie, Entscheidungen zu treffen, eigene Bedürfnisse zu vertreten und zu akzeptieren, dass ein Konflikt eine Beziehung nicht zwangsläufig zerstört.",
    ],

    traitsTitle:
      "Die wichtigsten Eigenschaften der Waage",

    traits: [
      {
        title:
          "Die Suche nach Harmonie",

        symbol:
          "♎",

        text:
          "Die Waage versucht von Natur aus, ein Gleichgewicht zwischen Menschen, Ideen und Situationen herzustellen. Sie bemerkt Spannungen schnell und bemüht sich oft um eine friedlichere Atmosphäre.",
      },

      {
        title:
          "Der Sinn für Beziehungen",

        symbol:
          "♡",

        text:
          "Dieses Zeichen entwickelt sich stark durch Austausch und Verbindungen. Es besitzt häufig eine große Fähigkeit zuzuhören, verschiedene Perspektiven zu verstehen und Zusammenarbeit zu fördern.",
      },

      {
        title:
          "Der Sinn für Schönheit",

        symbol:
          "♀",

        text:
          "Die Waage ist empfänglich für Ästhetik, Eleganz und harmonische Formen. Sie möchte meist eine angenehme, ausgeglichene und inspirierende Umgebung schaffen.",
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
          "Luft steht für Denken, Kommunikation, Geselligkeit und Austausch. Sie führt die Waage dazu, die Welt durch Beziehungen und Ideen zu verstehen.",
      },

      {
        symbol:
          "◇",

        title:
          "Kardinale Modalität",

        text:
          "Die kardinale Modalität fördert Initiative und Bewegung. Bei der Waage zeigt sie sich oft im Wunsch, ein neues Gleichgewicht herzustellen oder eine Beziehung zu verbessern.",
      },

      {
        symbol:
          "♀",

        title:
          "Planet Venus",

        text:
          "Venus steht für Liebe, Werte, Freude, Schönheit und Beziehungen. Sie verstärkt bei der Waage das Bedürfnis nach Sanftheit, Harmonie und Gegenseitigkeit.",
      },
    ],

    strengthsTitle:
      "Stärken und Herausforderungen der Waage",

    strengthsKicker:
      "Natürliche Stärken",

    strengthsSubtitle:
      "Was die Waage einbringt",

    strengths: [
      "Diplomatie",
      "Eleganz",
      "Zuhören",
      "Gerechtigkeitssinn",
      "Geselligkeit",
      "Kooperationsfähigkeit",
    ],

    challengesKicker:
      "Wichtige Lernfelder",

    challengesSubtitle:
      "Was die Waage lernt",

    challenges: [
      "Unentschlossenheit",
      "Angst vor Konflikten",
      "Abhängigkeit von der Meinung anderer",
      "Schwierigkeit, Entscheidungen zu treffen",
      "Tendenz, gefallen zu wollen",
      "Vermeidung von Meinungsverschiedenheiten",
    ],

    loveTitle:
      "Die Waage in der Liebe",

    loveParagraphs: [
      "In der Liebe sucht die Waage meist eine Beziehung, die auf Respekt, Verbundenheit und Harmonie beruht. Sie schätzt Austausch, Aufmerksamkeit und das Gefühl, mit dem anderen ein echtes Team zu bilden.",

      "Die Waage besitzt häufig eine romantische Seite und legt großen Wert auf die Qualität der Beziehung. Sie kann aufmerksam, sanft und sehr engagiert sein, wenn sie sich respektiert und wertgeschätzt fühlt.",

      "Ihre größte Herausforderung besteht darin, die eigenen Bedürfnisse nicht zu vergessen, nur um Frieden zu bewahren. Eine dauerhafte Beziehung verlangt, Wünsche klar auszudrücken und auch schwierigere Gespräche anzunehmen.",
    ],

    workTitle:
      "Die Waage im Beruf",

    workParagraphs: [
      "Im Berufsleben zeichnet sich die Waage häufig durch Diplomatie, Kontaktfähigkeit und den Umgang mit unterschiedlichen Persönlichkeiten aus.",

      "Sie kann besonders erfolgreich in Bereichen wie Personalwesen, Recht, Mediation, Kommunikation, Design, Mode, Kunst, Verkauf oder Beratung sein.",

      "Die Waage bevorzugt meist harmonische und kooperative Arbeitsumgebungen. Sie profitiert jedoch davon, schneller Entscheidungen zu treffen und nicht auf die Zustimmung aller zu warten.",
    ],

    placementsTitle:
      "Sonne, Mond und Aszendent in der Waage",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sonne in der Waage",

        text:
          "Die Sonne in der Waage entwickelt ihre Identität durch Beziehungen, Gerechtigkeitssinn, Zusammenarbeit und den Wunsch nach Harmonie.",

        link:
          "Die Sonne verstehen",
      },

      {
        symbol:
          "🌙",

        title:
          "Mond in der Waage",

        text:
          "Der Mond in der Waage braucht Ruhe, Schönheit, Dialog und ausgeglichene Beziehungen, um emotionales Wohlbefinden zu finden.",

        link:
          "Den Mond verstehen",
      },

      {
        symbol:
          "↑",

        title:
          "Waage-Aszendent",

        text:
          "Der Waage-Aszendent vermittelt eine gesellige, elegante und diplomatische Präsenz. Er begegnet dem Leben meist mit Charme, Aufmerksamkeit und dem Wunsch nach Ausgleich.",

        link:
          "Den Aszendenten verstehen",
      },
    ],

    compatibilityTitle:
      "Kompatibilität der Waage",

    compatibilityParagraphs: [
      "Astrologische Kompatibilität beruht niemals allein auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

      "Manche Verbindungen können dennoch natürlicher wirken, wenn beide Seiten ein Bedürfnis nach Dialog, Freiheit, Harmonie und geistiger Anregung teilen.",
    ],

    compatibilityLabel:
      "Waage und",

    compatibilities: [
      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Zwillinge und Waage teilen eine starke Freude an Austausch, Ideen und gesellschaftlichem Leben. Diese Verbindung kann leicht, anregend und sehr kommunikativ sein.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Der Wassermann inspiriert die Waage durch Originalität und Unabhängigkeit. Gemeinsam können sie eine Beziehung auf Freiheit, Dialog und gemeinsamen Vorstellungen aufbauen.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Der Löwe kann die Eleganz und zwischenmenschliche Sanftheit der Waage schätzen. Die Waage fühlt sich häufig von seinem Charisma, seiner Kreativität und Wärme angezogen.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Der Schütze bringt Bewegung, Optimismus und Spontaneität. Die Waage bietet Diplomatie, Charme und die Fähigkeit, eine harmonische Atmosphäre zu schaffen.",
      },
    ],

    natalTitle:
      "Die Waage in Ihrem Geburtshoroskop",

    natalParagraphs: [
      "Die Waage betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält die Waage in einem bestimmten astrologischen Haus.",

      "Dieses Haus zeigt den Lebensbereich, in dem Sie Zusammenarbeit, Ausgleich, Verbindung oder Gerechtigkeit suchen. Planeten in der Waage verstärken diese Energie zusätzlich.",
    ],

    ctaKicker:
      "Entdecken Sie Ihr Geburtshoroskop",

    ctaTitle:
      "Wo befindet sich die Waage in Ihrem Geburtshoroskop?",

    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, Häuser, Ihren Aszendenten und die Positionen Ihrer Planeten.",

    ctaButton:
      "Mein Geburtshoroskop erstellen",

    faqKicker:
      "Häufige Fragen",

    faqTitle:
      "Fragen zur Waage",

    faq: [
      {
        question:
          "Was sind die wichtigsten Eigenschaften der Waage?",

        answer:
          "Die Waage wird häufig mit Diplomatie, Eleganz, Geselligkeit, Gerechtigkeitssinn, Zuhören und der Fähigkeit verbunden, Harmonie zu schaffen.",
      },

      {
        question:
          "Was sind die größten Herausforderungen der Waage?",

        answer:
          "Die Waage kann lange zögern, Konflikte vermeiden oder der Meinung anderer zu viel Bedeutung geben. Ihre Entwicklung besteht darin, eigene Bedürfnisse und Entscheidungen stärker zu vertreten.",
      },

      {
        question:
          "Welcher Planet regiert die Waage?",

        answer:
          "Die Waage wird von Venus regiert, dem Planeten, der traditionell mit Liebe, Beziehungen, Freude, Harmonie, Werten und Schönheit verbunden wird.",
      },

      {
        question:
          "Welches Element gehört zur Waage?",

        answer:
          "Die Waage gehört zum Element Luft. Dieses Element steht für Denken, Kommunikation, Beziehungen, Ideen und das Bedürfnis nach Austausch.",
      },

      {
        question:
          "Wie erkenne ich, ob die Waage in meinem Geburtshoroskop wichtig ist?",

        answer:
          "Die Waage kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem, in welchem Haus sich die Waage befindet.",
      },
    ],

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Bilancia: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri il segno della Bilancia in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Venere, elemento Aria, Luna e Ascendente Bilancia.",

      ogTitle:
        "La Bilancia in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa alla Bilancia: carattere, punti di forza, sfide, relazioni, carriera, pianeta Venere e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno della Bilancia | Luna Astralis",

      twitterDescription:
        "Scopri la personalità della Bilancia, le sue qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "La Bilancia in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al segno della Bilancia, alle sue qualità, sfide, relazioni, carriera e principali caratteristiche astrologiche.",
    },

    badge:
      "♎ Settimo segno dello zodiaco",

    title:
      "La Bilancia in astrologia",

    lead:
      "La Bilancia simboleggia l’armonia, le relazioni, la giustizia e la ricerca dell’equilibrio. Questo segno d’Aria cerca di creare legami, comprendere diversi punti di vista e costruire relazioni più giuste e armoniose.",

    createChart:
      "Creare gratuitamente il mio tema natale",

    discoverLibra:
      "Scoprire la Bilancia",

    personalityKicker:
      "Personalità della Bilancia",

    personalityTitle:
      "Che cosa rappresenta il segno della Bilancia?",

    personalityParagraphs: [
      "La Bilancia è il settimo segno dello zodiaco. Rappresenta l’incontro con l’altro, l’equilibrio, la cooperazione, la giustizia e la ricerca dell’armonia nelle relazioni.",

      "Una persona fortemente influenzata dalla Bilancia cerca generalmente di comprendere diversi punti di vista prima di prendere posizione. Spesso possiede una grande sensibilità verso le atmosfere, i comportamenti e gli squilibri presenti in una relazione.",

      "Questa energia porta diplomazia, eleganza e apertura. Richiede però di imparare a scegliere, affermare i propri bisogni e accettare che un disaccordo non distrugga necessariamente una relazione.",
    ],

    traitsTitle:
      "Le principali caratteristiche della Bilancia",

    traits: [
      {
        title:
          "La ricerca dell’armonia",

        symbol:
          "♎",

        text:
          "La Bilancia cerca naturalmente di creare equilibrio tra persone, idee e situazioni. Nota rapidamente le tensioni e tenta spesso di ristabilire un’atmosfera più serena.",
      },

      {
        title:
          "Il senso della relazione",

        symbol:
          "♡",

        text:
          "Questo segno si sviluppa molto attraverso gli scambi e i legami. Possiede spesso una grande capacità di ascoltare, comprendere diversi punti di vista e favorire la cooperazione.",
      },

      {
        title:
          "Il senso della bellezza",

        symbol:
          "♀",

        text:
          "La Bilancia è sensibile all’estetica, all’eleganza e all’armonia delle forme. Cerca generalmente di creare un ambiente piacevole, equilibrato e stimolante.",
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
          "L’Aria porta riflessione, comunicazione, socialità e bisogno di scambio. Spinge la Bilancia a comprendere il mondo attraverso le relazioni e le idee.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalità cardinale",

        text:
          "La modalità cardinale favorisce l’iniziativa e il movimento. Nella Bilancia, si manifesta spesso attraverso il desiderio di creare un nuovo equilibrio o migliorare una relazione.",
      },

      {
        symbol:
          "♀",

        title:
          "Pianeta Venere",

        text:
          "Venere rappresenta l’amore, i valori, il piacere, la bellezza e le relazioni. Rafforza nella Bilancia il bisogno di dolcezza, armonia e reciprocità.",
      },
    ],

    strengthsTitle:
      "I punti di forza e le sfide della Bilancia",

    strengthsKicker:
      "Punti di forza naturali",

    strengthsSubtitle:
      "Ciò che porta la Bilancia",

    strengths: [
      "Diplomazia",
      "Eleganza",
      "Ascolto",
      "Senso della giustizia",
      "Socialità",
      "Capacità di cooperare",
    ],

    challengesKicker:
      "Punti di attenzione",

    challengesSubtitle:
      "Ciò che impara la Bilancia",

    challenges: [
      "Indecisione",
      "Paura del conflitto",
      "Dipendenza dall’opinione altrui",
      "Difficoltà a scegliere",
      "Tendenza a voler compiacere",
      "Evitamento dei disaccordi",
    ],

    loveTitle:
      "La Bilancia in amore",

    loveParagraphs: [
      "In amore, la Bilancia cerca generalmente una relazione fondata sul rispetto, sulla complicità e sull’armonia. Apprezza gli scambi, le attenzioni e la sensazione di costruire una vera squadra con l’altra persona.",

      "Possiede spesso un forte senso del romanticismo e attribuisce grande importanza alla qualità della relazione. Può essere attenta, dolce e molto coinvolta quando si sente rispettata e considerata.",

      "La sua principale sfida consiste nel non dimenticare i propri bisogni per preservare la pace. Una relazione duratura richiede di esprimere chiaramente ciò che desidera e accettare anche le conversazioni più difficili.",
    ],

    workTitle:
      "La Bilancia nel lavoro",

    workParagraphs: [
      "Nella vita professionale, la Bilancia si distingue spesso per la diplomazia, il senso del contatto e la capacità di lavorare con personalità diverse.",

      "Può essere particolarmente efficace nei settori legati alle risorse umane, al diritto, alla mediazione, alla comunicazione, al design, alla moda, all’arte, alle vendite o alla consulenza.",

      "Apprezza generalmente gli ambienti armoniosi e collaborativi. Tuttavia, trae beneficio dal prendere decisioni più rapidamente e dal non aspettare l’accordo di tutti prima di avanzare.",
    ],

    placementsTitle:
      "Sole, Luna e Ascendente in Bilancia",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sole in Bilancia",

        text:
          "Il Sole in Bilancia costruisce la propria identità attraverso le relazioni, la ricerca della giustizia, la cooperazione e il desiderio di creare armonia.",

        link:
          "Comprendere il Sole",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna in Bilancia",

        text:
          "La Luna in Bilancia ha bisogno di calma, bellezza, dialogo e relazioni equilibrate per ritrovare il benessere emotivo.",

        link:
          "Comprendere la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Bilancia",

        text:
          "L’Ascendente Bilancia dona una presenza socievole, elegante e diplomatica. Affronta generalmente la vita con fascino, ascolto e ricerca dell’equilibrio.",

        link:
          "Comprendere l’Ascendente",
      },
    ],

    compatibilityTitle:
      "Le compatibilità della Bilancia",

    compatibilityParagraphs: [
      "Le compatibilità astrologiche non dipendono mai soltanto dal segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

      "Alcune associazioni possono comunque sembrare naturalmente più fluide quando condividono il bisogno di dialogo, libertà, armonia e stimolazione intellettuale.",
    ],

    compatibilityLabel:
      "Bilancia e",

    compatibilities: [
      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "Gemelli e Bilancia condividono un forte interesse per gli scambi, le idee e la vita sociale. Questa relazione può essere leggera, stimolante e molto comunicativa.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "L’Acquario stimola la Bilancia con la sua originalità e indipendenza. Insieme possono costruire una relazione basata sulla libertà, sul dialogo e su una visione comune.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Il Leone può apprezzare l’eleganza e la dolcezza relazionale della Bilancia. La Bilancia è spesso attratta dal suo carisma, dalla creatività e dal calore.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Il Sagittario porta movimento, ottimismo e spontaneità. La Bilancia offre diplomazia, fascino e la capacità di creare un’atmosfera armoniosa.",
      },
    ],

    natalTitle:
      "La Bilancia nel tuo tema natale",

    natalParagraphs: [
      "La Bilancia non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene la Bilancia in una determinata casa astrologica.",

      "Questa casa mostra l’ambito della vita in cui cerchi cooperazione, equilibrio, legami o un maggiore senso della giustizia. Anche la presenza di pianeti in Bilancia rafforza questa energia.",
    ],

    ctaKicker:
      "Scopri il tuo tema natale",

    ctaTitle:
      "Dove si trova la Bilancia nel tuo tema natale?",

    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire i tuoi segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

    ctaButton:
      "Creare il mio tema natale",

    faqKicker:
      "Domande frequenti",

    faqTitle:
      "Domande sulla Bilancia",

    faq: [
      {
        question:
          "Quali sono le principali qualità della Bilancia?",

        answer:
          "La Bilancia è spesso associata alla diplomazia, all’eleganza, alla socialità, al senso della giustizia, all’ascolto e alla capacità di creare armonia.",
      },

      {
        question:
          "Quali sono le principali sfide della Bilancia?",

        answer:
          "La Bilancia può esitare a lungo prima di scegliere, evitare i conflitti o attribuire troppa importanza all’opinione degli altri. La sua crescita passa attraverso una maggiore affermazione dei propri bisogni e delle proprie decisioni.",
      },

      {
        question:
          "Quale pianeta governa la Bilancia?",

        answer:
          "La Bilancia è governata da Venere, pianeta tradizionalmente associato all’amore, alle relazioni, al piacere, all’armonia, ai valori e alla bellezza.",
      },

      {
        question:
          "Qual è l’elemento della Bilancia?",

        answer:
          "La Bilancia appartiene all’elemento Aria. Questo elemento è legato al pensiero, alla comunicazione, alle relazioni, alle idee e al bisogno di scambio con gli altri.",
      },

      {
        question:
          "Come sapere se la Bilancia è importante nel mio tema natale?",

        answer:
          "La Bilancia può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette anche di scoprire quale casa astrologica contiene la Bilancia.",
      },
    ],

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Libra: personalidade, amor, trabalho e compatibilidades | Luna Astralis",

      description:
        "Descubra o signo de Libra na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidades, Vênus, elemento Ar, Lua e Ascendente em Libra.",

      ogTitle:
        "Libra na astrologia: personalidade, amor e compatibilidades",

      ogDescription:
        "Guia completo de Libra: personalidade, forças, desafios, relacionamentos, carreira, planeta Vênus e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Libra | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Libra, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Libra na astrologia: personalidade, amor, trabalho e compatibilidades",

      description:
        "Guia completo sobre o signo de Libra, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    badge:
      "♎ Sétimo signo do zodíaco",

    title:
      "Libra na astrologia",

    lead:
      "Libra simboliza a harmonia, os relacionamentos, a justiça e a busca por equilíbrio. Este signo de Ar procura criar vínculos, compreender diferentes pontos de vista e construir relações mais justas e harmoniosas.",

    createChart:
      "Criar meu mapa astral grátis",

    discoverLibra:
      "Descobrir Libra",

    personalityKicker:
      "Personalidade de Libra",

    personalityTitle:
      "O que representa o signo de Libra?",

    personalityParagraphs: [
      "Libra é o sétimo signo do zodíaco. Ele representa o encontro com o outro, o equilíbrio, a cooperação, a justiça e a busca por harmonia nos relacionamentos.",

      "Uma pessoa fortemente marcada por Libra geralmente procura compreender diferentes pontos de vista antes de tomar posição. Costuma ter grande sensibilidade aos ambientes, aos comportamentos e aos desequilíbrios presentes em uma relação.",

      "Essa energia traz diplomacia, elegância e abertura. No entanto, também exige aprender a escolher, afirmar as próprias necessidades e aceitar que um desacordo não destrói necessariamente uma relação.",
    ],

    traitsTitle:
      "As principais características de Libra",

    traits: [
      {
        title:
          "A busca por harmonia",

        symbol:
          "♎",

        text:
          "Libra procura naturalmente criar equilíbrio entre pessoas, ideias e situações. Percebe rapidamente as tensões e frequentemente tenta restabelecer uma atmosfera mais tranquila.",
      },

      {
        title:
          "O sentido dos relacionamentos",

        symbol:
          "♡",

        text:
          "Este signo se desenvolve muito por meio das trocas e dos vínculos. Costuma ter grande capacidade de ouvir, compreender diferentes pontos de vista e favorecer a cooperação.",
      },

      {
        title:
          "O sentido da beleza",

        symbol:
          "♀",

        text:
          "Libra é sensível à estética, à elegância e à harmonia das formas. Geralmente busca criar um ambiente agradável, equilibrado e inspirador.",
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
          "O Ar traz reflexão, comunicação, sociabilidade e necessidade de troca. Ele leva Libra a compreender o mundo por meio dos relacionamentos e das ideias.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalidade cardinal",

        text:
          "A modalidade cardinal favorece a iniciativa e o movimento. Em Libra, costuma se manifestar pelo desejo de estabelecer um novo equilíbrio ou melhorar uma relação.",
      },

      {
        symbol:
          "♀",

        title:
          "Planeta Vênus",

        text:
          "Vênus representa o amor, os valores, o prazer, a beleza e os relacionamentos. Ela fortalece em Libra a necessidade de suavidade, harmonia e reciprocidade.",
      },
    ],

    strengthsTitle:
      "As forças e os desafios de Libra",

    strengthsKicker:
      "Forças naturais",

    strengthsSubtitle:
      "O que Libra oferece",

    strengths: [
      "Diplomacia",
      "Elegância",
      "Capacidade de ouvir",
      "Senso de justiça",
      "Sociabilidade",
      "Capacidade de cooperar",
    ],

    challengesKicker:
      "Pontos de atenção",

    challengesSubtitle:
      "O que Libra aprende",

    challenges: [
      "Indecisão",
      "Medo de conflito",
      "Dependência da opinião dos outros",
      "Dificuldade para escolher",
      "Tendência a querer agradar",
      "Evitação de desacordos",
    ],

    loveTitle:
      "Libra no amor",

    loveParagraphs: [
      "No amor, Libra geralmente procura uma relação baseada no respeito, na cumplicidade e na harmonia. Valoriza as trocas, as atenções e a sensação de construir uma verdadeira parceria.",

      "Costuma ter forte senso de romantismo e dá muita importância à qualidade da relação. Pode ser atencioso, gentil e muito envolvido quando se sente respeitado e valorizado.",

      "Seu principal desafio é não esquecer as próprias necessidades para preservar a paz. Uma relação duradoura exige expressar claramente o que deseja e aceitar conversas mais difíceis.",
    ],

    workTitle:
      "Libra no trabalho",

    workParagraphs: [
      "Na vida profissional, Libra frequentemente se destaca pela diplomacia, pela habilidade de relacionamento e pela capacidade de trabalhar com personalidades diferentes.",

      "Pode ser especialmente eficiente em áreas ligadas aos recursos humanos, ao direito, à mediação, à comunicação, ao design, à moda, à arte, às vendas ou à consultoria.",

      "Geralmente aprecia ambientes harmoniosos e colaborativos. No entanto, se beneficia ao tomar decisões mais rapidamente e não esperar o acordo de todos antes de avançar.",
    ],

    placementsTitle:
      "Sol, Lua e Ascendente em Libra",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol em Libra",

        text:
          "O Sol em Libra constrói sua identidade por meio dos relacionamentos, da busca por justiça, da cooperação e do desejo de criar harmonia.",

        link:
          "Compreender o Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Lua em Libra",

        text:
          "A Lua em Libra precisa de calma, beleza, diálogo e relações equilibradas para recuperar o bem-estar emocional.",

        link:
          "Compreender a Lua",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente em Libra",

        text:
          "O Ascendente em Libra proporciona uma presença sociável, elegante e diplomática. Geralmente aborda a vida com charme, atenção e busca por equilíbrio.",

        link:
          "Compreender o Ascendente",
      },
    ],

    compatibilityTitle:
      "As compatibilidades de Libra",

    compatibilityParagraphs: [
      "As compatibilidades astrológicas nunca dependem apenas do signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

      "Algumas combinações podem, porém, parecer naturalmente mais fluidas quando compartilham a necessidade de diálogo, liberdade, harmonia e estímulo intelectual.",
    ],

    compatibilityLabel:
      "Libra e",

    compatibilities: [
      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Gêmeos e Libra compartilham forte interesse pelas trocas, pelas ideias e pela vida social. Essa relação pode ser leve, estimulante e muito comunicativa.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Aquário estimula Libra com sua originalidade e independência. Juntos, podem construir uma relação baseada na liberdade, no diálogo e em uma visão compartilhada.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Leão pode apreciar a elegância e a delicadeza relacional de Libra. Libra costuma se sentir atraído pelo carisma, pela criatividade e pelo calor de Leão.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Sagitário traz movimento, otimismo e espontaneidade. Libra oferece diplomacia, charme e a capacidade de criar uma atmosfera harmoniosa.",
      },
    ],

    natalTitle:
      "Libra no seu mapa natal",

    natalParagraphs: [
      "Libra não diz respeito apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Libra em uma determinada casa astrológica.",

      "Essa casa mostra a área da vida em que você busca cooperação, equilíbrio, vínculos ou um senso mais forte de justiça. A presença de planetas em Libra também reforça essa energia.",
    ],

    ctaKicker:
      "Descubra seu mapa natal",

    ctaTitle:
      "Onde Libra está no seu mapa natal?",

    ctaText:
      "Gere gratuitamente seu mapa natal para descobrir seus signos, suas casas astrológicas, seu Ascendente e as posições dos planetas.",

    ctaButton:
      "Criar meu mapa natal",

    faqKicker:
      "Perguntas frequentes",

    faqTitle:
      "Perguntas sobre Libra",

    faq: [
      {
        question:
          "Quais são as principais qualidades de Libra?",

        answer:
          "Libra costuma ser associado à diplomacia, à elegância, à sociabilidade, ao senso de justiça, à capacidade de ouvir e à habilidade de criar harmonia.",
      },

      {
        question:
          "Quais são os principais desafios de Libra?",

        answer:
          "Libra pode hesitar por muito tempo antes de escolher, evitar conflitos ou dar importância excessiva à opinião dos outros. Seu crescimento passa por maior afirmação das próprias necessidades e decisões.",
      },

      {
        question:
          "Qual planeta governa Libra?",

        answer:
          "Libra é governado por Vênus, planeta tradicionalmente associado ao amor, aos relacionamentos, ao prazer, à harmonia, aos valores e à beleza.",
      },

      {
        question:
          "Qual é o elemento de Libra?",

        answer:
          "Libra pertence ao elemento Ar. Esse elemento está ligado ao pensamento, à comunicação, aos relacionamentos, às ideias e à necessidade de troca com os outros.",
      },

      {
        question:
          "Como saber se Libra é importante no meu mapa natal?",

        answer:
          "Libra pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo também mostra qual casa astrológica contém Libra.",
      },
    ],

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
