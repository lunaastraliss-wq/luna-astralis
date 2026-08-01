// i18n/pages/astrologie/cancer.ts

import type {
  Locale,
} from "@/i18n/config";

export type CancerTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type CancerPillar = {
  symbol: string;
  title: string;
  text: string;
};

export type CancerPlacement = {
  symbol: string;
  title: string;
  text: string;
  link: string;
};

export type CancerCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type CancerFaqItem = {
  question: string;
  answer: string;
};

export type CancerPageText = {
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
  discoverCancer: string;

  personalityKicker: string;
  personalityTitle: string;
  personalityParagraphs: string[];

  traitsTitle: string;
  traits: CancerTrait[];

  pillarsTitle: string;
  pillars: CancerPillar[];

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
  placements: CancerPlacement[];

  compatibilityTitle: string;
  compatibilityParagraphs: string[];
  compatibilityLabel: string;
  compatibilities: CancerCompatibility[];

  natalTitle: string;
  natalParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: CancerFaqItem[];

  disclaimer: string;
};

export const CANCER_TRANSLATIONS:
  Record<
    Locale,
    CancerPageText
  > = {
  fr: {
    metadata: {
      title:
        "Cancer : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Cancer en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Lune, élément Eau, Soleil, Lune et Ascendant en Cancer.",

      ogTitle:
        "Le Cancer en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Cancer : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",

      twitterTitle:
        "Le signe du Cancer | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Cancer, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Cancer en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Cancer, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    badge:
      "♋ Quatrième signe du zodiaque",

    title:
      "Le Cancer en astrologie",

    lead:
      "Le Cancer symbolise la sensibilité, l’intuition, les racines et le besoin de sécurité affective. Ce signe d’Eau cherche à protéger ce qui lui est cher et à créer un véritable sentiment d’appartenance.",

    createChart:
      "Créer ma carte du ciel gratuite",

    discoverCancer:
      "Découvrir le Cancer",

    personalityKicker:
      "Personnalité du Cancer",

    personalityTitle:
      "Que représente le signe du Cancer ?",

    personalityParagraphs: [
      "Le Cancer est le quatrième signe du zodiaque. Il représente le besoin de construire une sécurité intérieure, de préserver les liens affectifs et de créer un espace dans lequel il est possible de se sentir protégé.",

      "Une personne marquée par le Cancer ressent souvent très rapidement l’atmosphère d’un lieu ou les émotions des autres. Elle peut être intuitive, attentive et profondément attachée aux personnes qu’elle considère comme sa famille.",

      "Cette énergie apporte douceur, loyauté et capacité de protection. Elle demande toutefois d’apprendre à ne pas tout intérioriser, à exprimer clairement ses besoins et à ne pas rester prisonnier du passé.",
    ],

    traitsTitle:
      "Les grandes caractéristiques du Cancer",

    traits: [
      {
        title:
          "La sensibilité",

        symbol:
          "🌙",

        text:
          "Le Cancer ressent profondément les ambiances, les émotions et les changements subtils dans son environnement. Sa sensibilité nourrit son intuition et sa compréhension des autres.",
      },

      {
        title:
          "La protection",

        symbol:
          "✦",

        text:
          "Ce signe cherche naturellement à protéger les personnes, les liens et les espaces auxquels il tient. Il peut devenir très présent lorsqu’un proche a besoin de soutien.",
      },

      {
        title:
          "Les racines",

        symbol:
          "⌂",

        text:
          "Le Cancer accorde une grande importance au foyer, aux souvenirs, à la famille et au sentiment d’appartenance. Ses repères affectifs participent fortement à son équilibre.",
      },
    ],

    pillarsTitle:
      "Élément, modalité et astre maître",

    pillars: [
      {
        symbol:
          "🌊",

        title:
          "Élément Eau",

        text:
          "L’Eau apporte sensibilité, intuition, réceptivité et profondeur émotionnelle. Elle pousse le Cancer à ressentir avant d’agir.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalité cardinale",

        text:
          "La modalité cardinale favorise l’initiative. Chez le Cancer, elle se manifeste souvent par le désir de créer un foyer, un lien ou une sécurité durable.",
      },

      {
        symbol:
          "☾",

        title:
          "Astre maître : la Lune",

        text:
          "La Lune représente les émotions, les habitudes, les souvenirs et les besoins affectifs. Elle renforce la grande réceptivité du Cancer.",
      },
    ],

    strengthsTitle:
      "Les forces et les défis du Cancer",

    strengthsKicker:
      "Forces naturelles",

    strengthsSubtitle:
      "Ce que le Cancer apporte",

    strengths: [
      "Sensibilité",
      "Intuition",
      "Loyauté",
      "Empathie",
      "Protection",
      "Mémoire émotionnelle",
    ],

    challengesKicker:
      "Points d’attention",

    challengesSubtitle:
      "Ce que le Cancer apprend",

    challenges: [
      "Hypersensibilité",
      "Attachement au passé",
      "Peur du rejet",
      "Repli sur soi",
      "Difficulté à exprimer directement ses besoins",
      "Tendance à trop protéger",
    ],

    loveTitle:
      "Le Cancer en amour",

    loveParagraphs: [
      "En amour, le Cancer recherche généralement une relation profonde, sincère et sécurisante. Il a besoin de sentir que le lien repose sur la confiance, la présence et une véritable attention émotionnelle.",

      "Il peut se montrer très tendre, protecteur et fidèle lorsqu’il se sent en sécurité. Les gestes simples, les habitudes partagées et le sentiment de construire un foyer ont souvent beaucoup d’importance.",

      "Son principal défi consiste à ne pas attendre que l’autre devine ses besoins. Une relation équilibrée lui demande de communiquer plus directement et de laisser à chacun l’espace nécessaire pour évoluer.",
    ],

    workTitle:
      "Le Cancer au travail",

    workParagraphs: [
      "Dans la vie professionnelle, le Cancer se distingue souvent par son intuition, sa mémoire, son sens de l’écoute et sa capacité à comprendre les besoins humains.",

      "Il peut être particulièrement efficace dans les domaines liés à l’accompagnement, à la santé, à l’éducation, à l’hébergement, à l’alimentation, à l’immobilier ou à la création.",

      "Il a généralement besoin d’un environnement dans lequel il se sent respecté et en confiance. Une atmosphère trop froide ou instable peut diminuer sa motivation et sa capacité à s’investir.",
    ],

    placementsTitle:
      "Soleil, Lune et Ascendant en Cancer",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Soleil en Cancer",

        text:
          "Le Soleil en Cancer construit son identité par la sensibilité, les racines, la protection et l’importance accordée aux liens affectifs.",

        link:
          "Comprendre le Soleil",
      },

      {
        symbol:
          "🌙",

        title:
          "Lune en Cancer",

        text:
          "La Lune en Cancer ressent avec intensité et a besoin d’un foyer, de repères et de proximité émotionnelle pour se sentir en sécurité.",

        link:
          "Comprendre la Lune",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendant Cancer",

        text:
          "L’Ascendant Cancer donne une présence douce, prudente et réceptive. Il observe souvent l’atmosphère avant de s’ouvrir pleinement.",

        link:
          "Comprendre l’Ascendant",
      },
    ],

    compatibilityTitle:
      "Les compatibilités du Cancer",

    compatibilityParagraphs: [
      "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

      "Certaines associations peuvent néanmoins sembler plus naturelles lorsqu’elles partagent un besoin de profondeur émotionnelle, de loyauté et de sécurité.",
    ],

    compatibilityLabel:
      "Cancer et",

    compatibilities: [
      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Le Scorpion partage avec le Cancer une grande profondeur émotionnelle et un fort besoin de confiance. Cette relation peut devenir très intense et loyale.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Les Poissons comprennent la sensibilité et l’intuition du Cancer. Ensemble, ils peuvent créer un lien doux, réceptif et profondément affectif.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Le Taureau apporte stabilité, présence et sécurité concrète. Le Cancer nourrit la relation par sa chaleur, son attention et son attachement.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "La Vierge peut offrir structure, fiabilité et soutien pratique. Le Cancer apporte en retour sensibilité, écoute et profondeur émotionnelle.",
      },
    ],

    natalTitle:
      "Le Cancer dans votre thème natal",

    natalParagraphs: [
      "Le Cancer ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Cancer dans une maison astrologique particulière.",

      "Cette maison montre le domaine de vie dans lequel vous recherchez davantage de sécurité, de protection, d’appartenance et de continuité émotionnelle.",

      "La présence de planètes en Cancer renforce également cette énergie. Vénus, Mars, Mercure ou la Lune en Cancer ne s’expriment pas de la même façon, mais chacune adopte une qualité plus sensible, intuitive et protectrice.",
    ],

    ctaKicker:
      "Découvrez votre thème natal",

    ctaTitle:
      "Où se trouve le Cancer dans votre carte du ciel ?",

    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir vos signes, vos maisons astrologiques, votre Ascendant et les positions de vos planètes.",

    ctaButton:
      "Créer ma carte du ciel",

    faqKicker:
      "Questions fréquentes",

    faqTitle:
      "Questions sur le Cancer",

    faq: [
      {
        question:
          "Quelles sont les principales qualités du Cancer ?",

        answer:
          "Le Cancer est souvent associé à la sensibilité, à l’intuition, à l’empathie, à la loyauté, à la protection et à l’importance accordée aux liens affectifs.",
      },

      {
        question:
          "Quels sont les principaux défis du Cancer ?",

        answer:
          "Le Cancer peut parfois se replier sur lui-même, s’attacher au passé ou avoir de la difficulté à exprimer directement ses besoins. Son évolution passe souvent par davantage de confiance et de clarté émotionnelle.",
      },

      {
        question:
          "Quel astre gouverne le Cancer ?",

        answer:
          "Le Cancer est gouverné par la Lune, associée aux émotions, aux besoins affectifs, aux habitudes, à la mémoire, à l’intuition et à la sécurité intérieure.",
      },

      {
        question:
          "Quel est l’élément du Cancer ?",

        answer:
          "Le Cancer appartient à l’élément Eau. Cet élément est lié aux émotions, à l’intuition, à la réceptivité, à la sensibilité et à la profondeur intérieure.",
      },

      {
        question:
          "Comment savoir si le Cancer est important dans mon thème natal ?",

        answer:
          "Le Cancer peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
      },
    ],

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Cancer: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Cancer in astrology: personality, strengths, challenges, love, career, compatibility, the Moon, the Water element, Cancer Sun, Moon and Rising.",

      ogTitle:
        "Cancer in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Cancer: personality, strengths, challenges, relationships, career, ruling celestial body and major astrological compatibility.",

      twitterTitle:
        "The Cancer Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Cancer’s personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Cancer in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Cancer, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    badge:
      "♋ Fourth sign of the zodiac",

    title:
      "Cancer in Astrology",

    lead:
      "Cancer symbolizes sensitivity, intuition, roots and the need for emotional security. This Water sign seeks to protect what it values and create a genuine sense of belonging.",

    createChart:
      "Create my free birth chart",

    discoverCancer:
      "Discover Cancer",

    personalityKicker:
      "Cancer personality",

    personalityTitle:
      "What does the Cancer zodiac sign represent?",

    personalityParagraphs: [
      "Cancer is the fourth sign of the zodiac. It represents the need to build inner security, preserve emotional bonds and create a space in which it is possible to feel protected.",

      "A person strongly influenced by Cancer often senses the atmosphere of a place or the emotions of others very quickly. They may be intuitive, attentive and deeply attached to the people they consider family.",

      "This energy brings gentleness, loyalty and a strong protective instinct. It also requires learning not to internalize everything, to express needs clearly and not to remain trapped in the past.",
    ],

    traitsTitle:
      "The main characteristics of Cancer",

    traits: [
      {
        title:
          "Sensitivity",

        symbol:
          "🌙",

        text:
          "Cancer deeply senses atmospheres, emotions and subtle changes in the environment. This sensitivity supports intuition and an understanding of others.",
      },

      {
        title:
          "Protection",

        symbol:
          "✦",

        text:
          "This sign naturally seeks to protect the people, relationships and places it values. It can become very present when someone close needs support.",
      },

      {
        title:
          "Roots",

        symbol:
          "⌂",

        text:
          "Cancer places great importance on home, memories, family and a sense of belonging. Emotional reference points strongly contribute to its balance.",
      },
    ],

    pillarsTitle:
      "Element, modality and ruling celestial body",

    pillars: [
      {
        symbol:
          "🌊",

        title:
          "Water element",

        text:
          "Water brings sensitivity, intuition, receptivity and emotional depth. It encourages Cancer to feel before acting.",
      },

      {
        symbol:
          "✦",

        title:
          "Cardinal modality",

        text:
          "The cardinal modality supports initiative. In Cancer, it often appears through the desire to create a home, a bond or lasting security.",
      },

      {
        symbol:
          "☾",

        title:
          "Ruling celestial body: the Moon",

        text:
          "The Moon represents emotions, habits, memories and emotional needs. It strengthens Cancer’s great receptivity.",
      },
    ],

    strengthsTitle:
      "Cancer’s strengths and challenges",

    strengthsKicker:
      "Natural strengths",

    strengthsSubtitle:
      "What Cancer brings",

    strengths: [
      "Sensitivity",
      "Intuition",
      "Loyalty",
      "Empathy",
      "Protection",
      "Emotional memory",
    ],

    challengesKicker:
      "Points of attention",

    challengesSubtitle:
      "What Cancer learns",

    challenges: [
      "Oversensitivity",
      "Attachment to the past",
      "Fear of rejection",
      "Withdrawal",
      "Difficulty expressing needs directly",
      "Tendency to overprotect",
    ],

    loveTitle:
      "Cancer in love",

    loveParagraphs: [
      "In love, Cancer generally seeks a deep, sincere and reassuring relationship. It needs to feel that the bond is based on trust, presence and genuine emotional attention.",

      "Cancer can be very tender, protective and loyal when it feels secure. Simple gestures, shared routines and the feeling of building a home often carry great importance.",

      "Its main challenge is not expecting the other person to guess its needs. A balanced relationship requires more direct communication and enough space for each person to grow.",
    ],

    workTitle:
      "Cancer at work",

    workParagraphs: [
      "In professional life, Cancer often stands out through intuition, memory, listening skills and the ability to understand human needs.",

      "It may be especially effective in fields related to caregiving, health, education, hospitality, food, real estate or creative work.",

      "Cancer generally needs an environment in which it feels respected and trusted. An atmosphere that is too cold or unstable can reduce motivation and commitment.",
    ],

    placementsTitle:
      "Sun, Moon and Rising in Cancer",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sun in Cancer",

        text:
          "The Sun in Cancer builds identity through sensitivity, roots, protection and the importance placed on emotional bonds.",

        link:
          "Understand the Sun",
      },

      {
        symbol:
          "🌙",

        title:
          "Moon in Cancer",

        text:
          "The Moon in Cancer feels intensely and needs a home, familiar reference points and emotional closeness to feel secure.",

        link:
          "Understand the Moon",
      },

      {
        symbol:
          "↑",

        title:
          "Cancer Rising",

        text:
          "Cancer Rising gives a gentle, cautious and receptive presence. It often observes the atmosphere before opening fully.",

        link:
          "Understand the Ascendant",
      },
    ],

    compatibilityTitle:
      "Cancer compatibility",

    compatibilityParagraphs: [
      "Astrological compatibility is never based solely on the Sun sign. The Moon, Venus, Mars, the Ascendant and the aspects between both charts provide essential information.",

      "Some combinations may nevertheless feel more natural when they share a need for emotional depth, loyalty and security.",
    ],

    compatibilityLabel:
      "Cancer and",

    compatibilities: [
      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Scorpio shares great emotional depth and a strong need for trust with Cancer. This relationship can become very intense and loyal.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Pisces understands Cancer’s sensitivity and intuition. Together, they can create a gentle, receptive and deeply emotional bond.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Taurus brings stability, presence and practical security. Cancer nourishes the relationship through warmth, attention and attachment.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo can provide structure, reliability and practical support. Cancer brings sensitivity, listening and emotional depth in return.",
      },
    ],

    natalTitle:
      "Cancer in your birth chart",

    natalParagraphs: [
      "Cancer does not concern only people born under this sign. Every birth chart contains Cancer in a particular astrological house.",

      "This house shows the area of life in which you seek greater security, protection, belonging and emotional continuity.",

      "Planets located in Cancer also strengthen this energy. Venus, Mars, Mercury or the Moon in Cancer do not express themselves in the same way, but each takes on a more sensitive, intuitive and protective quality.",
    ],

    ctaKicker:
      "Discover your birth chart",

    ctaTitle:
      "Where is Cancer in your birth chart?",

    ctaText:
      "Generate your free birth chart to discover your signs, astrological houses, Ascendant and planetary positions.",

    ctaButton:
      "Create my birth chart",

    faqKicker:
      "Frequently asked questions",

    faqTitle:
      "Questions about Cancer",

    faq: [
      {
        question:
          "What are Cancer’s main qualities?",

        answer:
          "Cancer is often associated with sensitivity, intuition, empathy, loyalty, protection and the importance placed on emotional bonds.",
      },

      {
        question:
          "What are Cancer’s main challenges?",

        answer:
          "Cancer may sometimes withdraw, remain attached to the past or have difficulty expressing needs directly. Its growth often involves greater trust and emotional clarity.",
      },

      {
        question:
          "Which celestial body rules Cancer?",

        answer:
          "Cancer is ruled by the Moon, which is associated with emotions, emotional needs, habits, memory, intuition and inner security.",
      },

      {
        question:
          "What is Cancer’s element?",

        answer:
          "Cancer belongs to the Water element. This element is connected with emotions, intuition, receptivity, sensitivity and inner depth.",
      },

      {
        question:
          "How can I know whether Cancer is important in my birth chart?",

        answer:
          "Cancer may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart can confirm it.",
      },
    ],

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Cáncer: personalidad, amor, trabajo y compatibilidades | Luna Astralis",

      description:
        "Descubre el signo de Cáncer en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidades, Luna, elemento Agua, Sol, Luna y Ascendente en Cáncer.",

      ogTitle:
        "Cáncer en astrología: personalidad, amor y compatibilidades",

      ogDescription:
        "Guía completa del signo de Cáncer: carácter, fortalezas, desafíos, relaciones, carrera, astro regente y principales compatibilidades.",

      twitterTitle:
        "El signo de Cáncer | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Cáncer, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Cáncer en astrología: personalidad, amor, trabajo y compatibilidades",

      description:
        "Guía completa dedicada al signo de Cáncer, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    badge:
      "♋ Cuarto signo del zodiaco",

    title:
      "Cáncer en astrología",

    lead:
      "Cáncer simboliza la sensibilidad, la intuición, las raíces y la necesidad de seguridad emocional. Este signo de Agua busca proteger lo que ama y crear un verdadero sentimiento de pertenencia.",

    createChart:
      "Crear mi carta natal gratis",

    discoverCancer:
      "Descubrir Cáncer",

    personalityKicker:
      "Personalidad de Cáncer",

    personalityTitle:
      "¿Qué representa el signo de Cáncer?",

    personalityParagraphs: [
      "Cáncer es el cuarto signo del zodiaco. Representa la necesidad de construir seguridad interior, preservar los vínculos afectivos y crear un espacio en el que sea posible sentirse protegido.",

      "Una persona marcada por Cáncer suele percibir rápidamente el ambiente de un lugar o las emociones de los demás. Puede ser intuitiva, atenta y profundamente apegada a las personas que considera su familia.",

      "Esta energía aporta dulzura, lealtad y capacidad de protección. Sin embargo, requiere aprender a no interiorizarlo todo, expresar claramente las necesidades y no quedar atrapado en el pasado.",
    ],

    traitsTitle:
      "Las principales características de Cáncer",

    traits: [
      {
        title:
          "La sensibilidad",

        symbol:
          "🌙",

        text:
          "Cáncer percibe profundamente los ambientes, las emociones y los cambios sutiles de su entorno. Su sensibilidad alimenta su intuición y su comprensión de los demás.",
      },

      {
        title:
          "La protección",

        symbol:
          "✦",

        text:
          "Este signo busca naturalmente proteger a las personas, los vínculos y los espacios que valora. Puede estar muy presente cuando alguien cercano necesita apoyo.",
      },

      {
        title:
          "Las raíces",

        symbol:
          "⌂",

        text:
          "Cáncer concede gran importancia al hogar, los recuerdos, la familia y el sentimiento de pertenencia. Sus referencias afectivas contribuyen intensamente a su equilibrio.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidad y astro regente",

    pillars: [
      {
        symbol:
          "🌊",

        title:
          "Elemento Agua",

        text:
          "El Agua aporta sensibilidad, intuición, receptividad y profundidad emocional. Impulsa a Cáncer a sentir antes de actuar.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalidad cardinal",

        text:
          "La modalidad cardinal favorece la iniciativa. En Cáncer, suele manifestarse mediante el deseo de crear un hogar, un vínculo o una seguridad duradera.",
      },

      {
        symbol:
          "☾",

        title:
          "Astro regente: la Luna",

        text:
          "La Luna representa las emociones, los hábitos, los recuerdos y las necesidades afectivas. Refuerza la gran receptividad de Cáncer.",
      },
    ],

    strengthsTitle:
      "Las fortalezas y los desafíos de Cáncer",

    strengthsKicker:
      "Fortalezas naturales",

    strengthsSubtitle:
      "Lo que aporta Cáncer",

    strengths: [
      "Sensibilidad",
      "Intuición",
      "Lealtad",
      "Empatía",
      "Protección",
      "Memoria emocional",
    ],

    challengesKicker:
      "Puntos de atención",

    challengesSubtitle:
      "Lo que aprende Cáncer",

    challenges: [
      "Hipersensibilidad",
      "Apego al pasado",
      "Miedo al rechazo",
      "Aislamiento",
      "Dificultad para expresar directamente sus necesidades",
      "Tendencia a sobreproteger",
    ],

    loveTitle:
      "Cáncer en el amor",

    loveParagraphs: [
      "En el amor, Cáncer suele buscar una relación profunda, sincera y segura. Necesita sentir que el vínculo se basa en la confianza, la presencia y una verdadera atención emocional.",

      "Puede mostrarse muy tierno, protector y fiel cuando se siente seguro. Los gestos sencillos, las costumbres compartidas y la sensación de construir un hogar suelen tener mucha importancia.",

      "Su principal desafío consiste en no esperar que la otra persona adivine sus necesidades. Una relación equilibrada le exige comunicarse de forma más directa y permitir a cada persona el espacio necesario para evolucionar.",
    ],

    workTitle:
      "Cáncer en el trabajo",

    workParagraphs: [
      "En la vida profesional, Cáncer suele destacar por su intuición, su memoria, su capacidad de escucha y su habilidad para comprender las necesidades humanas.",

      "Puede ser especialmente eficaz en ámbitos relacionados con el acompañamiento, la salud, la educación, el alojamiento, la alimentación, los bienes raíces o la creación.",

      "Generalmente necesita un entorno en el que se sienta respetado y en confianza. Un ambiente demasiado frío o inestable puede reducir su motivación y su capacidad de compromiso.",
    ],

    placementsTitle:
      "Sol, Luna y Ascendente en Cáncer",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol en Cáncer",

        text:
          "El Sol en Cáncer construye su identidad mediante la sensibilidad, las raíces, la protección y la importancia concedida a los vínculos afectivos.",

        link:
          "Comprender el Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna en Cáncer",

        text:
          "La Luna en Cáncer siente con intensidad y necesita un hogar, referencias y cercanía emocional para sentirse segura.",

        link:
          "Comprender la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Cáncer",

        text:
          "El Ascendente Cáncer aporta una presencia dulce, prudente y receptiva. Suele observar el ambiente antes de abrirse plenamente.",

        link:
          "Comprender el Ascendente",
      },
    ],

    compatibilityTitle:
      "Las compatibilidades de Cáncer",

    compatibilityParagraphs: [
      "Las compatibilidades astrológicas nunca dependen únicamente del signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

      "Sin embargo, algunas asociaciones pueden parecer más naturales cuando comparten una necesidad de profundidad emocional, lealtad y seguridad.",
    ],

    compatibilityLabel:
      "Cáncer y",

    compatibilities: [
      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Escorpio comparte con Cáncer una gran profundidad emocional y una fuerte necesidad de confianza. Esta relación puede volverse muy intensa y leal.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Piscis comprende la sensibilidad y la intuición de Cáncer. Juntos pueden crear un vínculo dulce, receptivo y profundamente afectivo.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Tauro aporta estabilidad, presencia y seguridad concreta. Cáncer nutre la relación mediante su calidez, atención y apego.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo puede ofrecer estructura, fiabilidad y apoyo práctico. Cáncer aporta a cambio sensibilidad, escucha y profundidad emocional.",
      },
    ],

    natalTitle:
      "Cáncer en tu carta natal",

    natalParagraphs: [
      "Cáncer no se refiere únicamente a las personas nacidas bajo este signo. Cada carta natal contiene Cáncer en una casa astrológica determinada.",

      "Esa casa muestra el ámbito de vida en el que buscas más seguridad, protección, pertenencia y continuidad emocional.",

      "La presencia de planetas en Cáncer también refuerza esta energía. Venus, Marte, Mercurio o la Luna en Cáncer no se expresan de la misma forma, pero cada uno adopta una cualidad más sensible, intuitiva y protectora.",
    ],

    ctaKicker:
      "Descubre tu carta natal",

    ctaTitle:
      "¿Dónde se encuentra Cáncer en tu carta natal?",

    ctaText:
      "Genera gratuitamente tu carta natal para descubrir tus signos, tus casas astrológicas, tu Ascendente y las posiciones de tus planetas.",

    ctaButton:
      "Crear mi carta natal",

    faqKicker:
      "Preguntas frecuentes",

    faqTitle:
      "Preguntas sobre Cáncer",

    faq: [
      {
        question:
          "¿Cuáles son las principales cualidades de Cáncer?",

        answer:
          "Cáncer suele asociarse con la sensibilidad, la intuición, la empatía, la lealtad, la protección y la importancia concedida a los vínculos afectivos.",
      },

      {
        question:
          "¿Cuáles son los principales desafíos de Cáncer?",

        answer:
          "Cáncer puede replegarse, permanecer apegado al pasado o tener dificultad para expresar directamente sus necesidades. Su evolución suele pasar por una mayor confianza y claridad emocional.",
      },

      {
        question:
          "¿Qué astro gobierna Cáncer?",

        answer:
          "Cáncer está regido por la Luna, asociada con las emociones, las necesidades afectivas, los hábitos, la memoria, la intuición y la seguridad interior.",
      },

      {
        question:
          "¿Cuál es el elemento de Cáncer?",

        answer:
          "Cáncer pertenece al elemento Agua. Este elemento está relacionado con las emociones, la intuición, la receptividad, la sensibilidad y la profundidad interior.",
      },

      {
        question:
          "¿Cómo saber si Cáncer es importante en mi carta natal?",

        answer:
          "Cáncer puede ser importante si tu Sol, tu Luna, tu Ascendente o varios planetas se encuentran en este signo. Una carta natal completa permite comprobarlo.",
      },
    ],

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Krebs: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Krebs in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Mond, Wasserelement, Krebs-Sonne, Mond und Aszendent.",

      ogTitle:
        "Der Krebs in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Krebs: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Herrscher und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Krebs | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit des Krebses, seine Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Der Krebs in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Sternzeichen Krebs, seinen Stärken, Herausforderungen, Beziehungen, beruflichen Themen und wichtigsten astrologischen Eigenschaften.",
    },

    badge:
      "♋ Viertes Tierkreiszeichen",

    title:
      "Der Krebs in der Astrologie",

    lead:
      "Der Krebs symbolisiert Sensibilität, Intuition, Wurzeln und das Bedürfnis nach emotionaler Sicherheit. Dieses Wasserzeichen möchte schützen, was ihm wichtig ist, und ein echtes Gefühl von Zugehörigkeit schaffen.",

    createChart:
      "Mein kostenloses Geburtshoroskop erstellen",

    discoverCancer:
      "Den Krebs entdecken",

    personalityKicker:
      "Persönlichkeit des Krebses",

    personalityTitle:
      "Wofür steht das Sternzeichen Krebs?",

    personalityParagraphs: [
      "Der Krebs ist das vierte Tierkreiszeichen. Er steht für das Bedürfnis, innere Sicherheit aufzubauen, emotionale Bindungen zu bewahren und einen Raum zu schaffen, in dem man sich geschützt fühlen kann.",

      "Ein Mensch mit starker Krebs-Betonung nimmt häufig sehr schnell die Stimmung eines Ortes oder die Gefühle anderer wahr. Er kann intuitiv, aufmerksam und tief mit den Menschen verbunden sein, die er als Familie betrachtet.",

      "Diese Energie bringt Sanftheit, Loyalität und Schutzfähigkeit. Gleichzeitig verlangt sie, nicht alles in sich hineinzutragen, Bedürfnisse klar auszudrücken und nicht in der Vergangenheit gefangen zu bleiben.",
    ],

    traitsTitle:
      "Die wichtigsten Eigenschaften des Krebses",

    traits: [
      {
        title:
          "Sensibilität",

        symbol:
          "🌙",

        text:
          "Der Krebs nimmt Stimmungen, Gefühle und feine Veränderungen in seiner Umgebung tief wahr. Seine Sensibilität stärkt seine Intuition und sein Verständnis für andere.",
      },

      {
        title:
          "Schutz",

        symbol:
          "✦",

        text:
          "Dieses Zeichen möchte Menschen, Beziehungen und Orte schützen, die ihm wichtig sind. Wenn eine nahestehende Person Unterstützung braucht, kann es sehr präsent werden.",
      },

      {
        title:
          "Wurzeln",

        symbol:
          "⌂",

        text:
          "Der Krebs misst Zuhause, Erinnerungen, Familie und Zugehörigkeit große Bedeutung bei. Seine emotionalen Bezugspunkte tragen stark zu seinem Gleichgewicht bei.",
      },
    ],

    pillarsTitle:
      "Element, Modalität und Herrscher",

    pillars: [
      {
        symbol:
          "🌊",

        title:
          "Element Wasser",

        text:
          "Wasser bringt Sensibilität, Intuition, Empfänglichkeit und emotionale Tiefe. Es führt den Krebs dazu, zuerst zu fühlen und dann zu handeln.",
      },

      {
        symbol:
          "✦",

        title:
          "Kardinale Modalität",

        text:
          "Die kardinale Modalität unterstützt Initiative. Beim Krebs zeigt sie sich häufig im Wunsch, ein Zuhause, eine Bindung oder dauerhafte Sicherheit zu schaffen.",
      },

      {
        symbol:
          "☾",

        title:
          "Herrscher: der Mond",

        text:
          "Der Mond steht für Gefühle, Gewohnheiten, Erinnerungen und emotionale Bedürfnisse. Er verstärkt die große Empfänglichkeit des Krebses.",
      },
    ],

    strengthsTitle:
      "Stärken und Herausforderungen des Krebses",

    strengthsKicker:
      "Natürliche Stärken",

    strengthsSubtitle:
      "Was der Krebs einbringt",

    strengths: [
      "Sensibilität",
      "Intuition",
      "Loyalität",
      "Empathie",
      "Schutz",
      "Emotionales Gedächtnis",
    ],

    challengesKicker:
      "Wichtige Lernfelder",

    challengesSubtitle:
      "Was der Krebs lernt",

    challenges: [
      "Überempfindlichkeit",
      "Festhalten an der Vergangenheit",
      "Angst vor Zurückweisung",
      "Rückzug",
      "Schwierigkeit, Bedürfnisse direkt auszudrücken",
      "Tendenz zur Überfürsorge",
    ],

    loveTitle:
      "Der Krebs in der Liebe",

    loveParagraphs: [
      "In der Liebe sucht der Krebs meist eine tiefe, ehrliche und sichere Beziehung. Er muss spüren, dass die Verbindung auf Vertrauen, Präsenz und echter emotionaler Aufmerksamkeit beruht.",

      "Wenn er sich sicher fühlt, kann er sehr zärtlich, beschützend und treu sein. Einfache Gesten, gemeinsame Gewohnheiten und das Gefühl, ein Zuhause aufzubauen, sind häufig besonders wichtig.",

      "Seine größte Herausforderung besteht darin, nicht darauf zu warten, dass der andere seine Bedürfnisse errät. Eine ausgeglichene Beziehung verlangt direktere Kommunikation und genügend Raum für die Entwicklung beider Personen.",
    ],

    workTitle:
      "Der Krebs im Beruf",

    workParagraphs: [
      "Im Berufsleben zeichnet sich der Krebs häufig durch Intuition, Gedächtnis, Zuhören und die Fähigkeit aus, menschliche Bedürfnisse zu verstehen.",

      "Er kann besonders erfolgreich in Bereichen wie Betreuung, Gesundheit, Bildung, Gastgewerbe, Ernährung, Immobilien oder kreativer Arbeit sein.",

      "Der Krebs braucht meist eine Umgebung, in der er sich respektiert und sicher fühlt. Eine zu kalte oder instabile Atmosphäre kann Motivation und Einsatzbereitschaft verringern.",
    ],

    placementsTitle:
      "Sonne, Mond und Aszendent im Krebs",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sonne im Krebs",

        text:
          "Die Sonne im Krebs entwickelt ihre Identität durch Sensibilität, Wurzeln, Schutz und die Bedeutung emotionaler Bindungen.",

        link:
          "Die Sonne verstehen",
      },

      {
        symbol:
          "🌙",

        title:
          "Mond im Krebs",

        text:
          "Der Mond im Krebs fühlt intensiv und braucht ein Zuhause, vertraute Bezugspunkte und emotionale Nähe, um sich sicher zu fühlen.",

        link:
          "Den Mond verstehen",
      },

      {
        symbol:
          "↑",

        title:
          "Krebs-Aszendent",

        text:
          "Der Krebs-Aszendent vermittelt eine sanfte, vorsichtige und empfängliche Präsenz. Er beobachtet häufig zuerst die Atmosphäre, bevor er sich vollständig öffnet.",

        link:
          "Den Aszendenten verstehen",
      },
    ],

    compatibilityTitle:
      "Kompatibilität des Krebses",

    compatibilityParagraphs: [
      "Astrologische Kompatibilität beruht niemals allein auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

      "Einige Verbindungen können dennoch natürlicher wirken, wenn ein gemeinsames Bedürfnis nach emotionaler Tiefe, Loyalität und Sicherheit besteht.",
    ],

    compatibilityLabel:
      "Krebs und",

    compatibilities: [
      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Der Skorpion teilt mit dem Krebs große emotionale Tiefe und ein starkes Bedürfnis nach Vertrauen. Diese Beziehung kann sehr intensiv und loyal werden.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Die Fische verstehen die Sensibilität und Intuition des Krebses. Gemeinsam können sie eine sanfte, empfängliche und tief emotionale Verbindung schaffen.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Der Stier bringt Stabilität, Präsenz und praktische Sicherheit. Der Krebs nährt die Beziehung durch Wärme, Aufmerksamkeit und Verbundenheit.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Die Jungfrau kann Struktur, Zuverlässigkeit und praktische Unterstützung bieten. Der Krebs bringt dafür Sensibilität, Zuhören und emotionale Tiefe ein.",
      },
    ],

    natalTitle:
      "Der Krebs in Ihrem Geburtshoroskop",

    natalParagraphs: [
      "Der Krebs betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Krebs in einem bestimmten astrologischen Haus.",

      "Dieses Haus zeigt den Lebensbereich, in dem Sie mehr Sicherheit, Schutz, Zugehörigkeit und emotionale Kontinuität suchen.",

      "Planeten im Krebs verstärken diese Energie ebenfalls. Venus, Mars, Merkur oder Mond im Krebs drücken sich unterschiedlich aus, doch jeder erhält eine sensiblere, intuitivere und beschützendere Qualität.",
    ],

    ctaKicker:
      "Entdecken Sie Ihr Geburtshoroskop",

    ctaTitle:
      "Wo befindet sich der Krebs in Ihrem Geburtshoroskop?",

    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, Häuser, Ihren Aszendenten und die Positionen Ihrer Planeten.",

    ctaButton:
      "Mein Geburtshoroskop erstellen",

    faqKicker:
      "Häufige Fragen",

    faqTitle:
      "Fragen zum Krebs",

    faq: [
      {
        question:
          "Was sind die wichtigsten Eigenschaften des Krebses?",

        answer:
          "Der Krebs wird häufig mit Sensibilität, Intuition, Empathie, Loyalität, Schutz und der Bedeutung emotionaler Bindungen verbunden.",
      },

      {
        question:
          "Was sind die größten Herausforderungen des Krebses?",

        answer:
          "Der Krebs kann sich zurückziehen, an der Vergangenheit festhalten oder Schwierigkeiten haben, Bedürfnisse direkt auszudrücken. Seine Entwicklung führt häufig über mehr Vertrauen und emotionale Klarheit.",
      },

      {
        question:
          "Welcher Himmelskörper regiert den Krebs?",

        answer:
          "Der Krebs wird vom Mond regiert, der mit Gefühlen, emotionalen Bedürfnissen, Gewohnheiten, Erinnerung, Intuition und innerer Sicherheit verbunden ist.",
      },

      {
        question:
          "Welches Element gehört zum Krebs?",

        answer:
          "Der Krebs gehört zum Element Wasser. Dieses Element steht für Gefühle, Intuition, Empfänglichkeit, Sensibilität und innere Tiefe.",
      },

      {
        question:
          "Wie erkenne ich, ob der Krebs in meinem Geburtshoroskop wichtig ist?",

        answer:
          "Der Krebs kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop kann dies zeigen.",
      },
    ],

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Cancro: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri il segno del Cancro in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Luna, elemento Acqua, Sole, Luna e Ascendente Cancro.",

      ogTitle:
        "Il Cancro in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa al Cancro: carattere, punti di forza, sfide, relazioni, carriera, astro governatore e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno del Cancro | Luna Astralis",

      twitterDescription:
        "Scopri la personalità del Cancro, le sue qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Il Cancro in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al segno del Cancro, alle sue qualità, sfide, relazioni, carriera e principali caratteristiche astrologiche.",
    },

    badge:
      "♋ Quarto segno dello zodiaco",

    title:
      "Il Cancro in astrologia",

    lead:
      "Il Cancro simboleggia la sensibilità, l’intuizione, le radici e il bisogno di sicurezza emotiva. Questo segno d’Acqua cerca di proteggere ciò che ama e di creare un autentico senso di appartenenza.",

    createChart:
      "Creare gratuitamente il mio tema natale",

    discoverCancer:
      "Scoprire il Cancro",

    personalityKicker:
      "Personalità del Cancro",

    personalityTitle:
      "Che cosa rappresenta il segno del Cancro?",

    personalityParagraphs: [
      "Il Cancro è il quarto segno dello zodiaco. Rappresenta il bisogno di costruire sicurezza interiore, preservare i legami affettivi e creare uno spazio nel quale sia possibile sentirsi protetti.",

      "Una persona fortemente influenzata dal Cancro percepisce spesso molto rapidamente l’atmosfera di un luogo o le emozioni degli altri. Può essere intuitiva, attenta e profondamente legata alle persone che considera famiglia.",

      "Questa energia porta dolcezza, lealtà e capacità di protezione. Richiede però di imparare a non interiorizzare tutto, a esprimere chiaramente i propri bisogni e a non rimanere prigionieri del passato.",
    ],

    traitsTitle:
      "Le principali caratteristiche del Cancro",

    traits: [
      {
        title:
          "La sensibilità",

        symbol:
          "🌙",

        text:
          "Il Cancro percepisce profondamente le atmosfere, le emozioni e i cambiamenti sottili dell’ambiente. La sua sensibilità alimenta l’intuizione e la comprensione degli altri.",
      },

      {
        title:
          "La protezione",

        symbol:
          "✦",

        text:
          "Questo segno cerca naturalmente di proteggere le persone, i legami e gli spazi a cui tiene. Può essere molto presente quando una persona cara ha bisogno di sostegno.",
      },

      {
        title:
          "Le radici",

        symbol:
          "⌂",

        text:
          "Il Cancro attribuisce grande importanza alla casa, ai ricordi, alla famiglia e al senso di appartenenza. I suoi riferimenti affettivi contribuiscono fortemente al suo equilibrio.",
      },
    ],

    pillarsTitle:
      "Elemento, modalità e astro governatore",

    pillars: [
      {
        symbol:
          "🌊",

        title:
          "Elemento Acqua",

        text:
          "L’Acqua porta sensibilità, intuizione, ricettività e profondità emotiva. Spinge il Cancro a sentire prima di agire.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalità cardinale",

        text:
          "La modalità cardinale favorisce l’iniziativa. Nel Cancro, si manifesta spesso attraverso il desiderio di creare una casa, un legame o una sicurezza duratura.",
      },

      {
        symbol:
          "☾",

        title:
          "Astro governatore: la Luna",

        text:
          "La Luna rappresenta le emozioni, le abitudini, i ricordi e i bisogni affettivi. Rafforza la grande ricettività del Cancro.",
      },
    ],

    strengthsTitle:
      "I punti di forza e le sfide del Cancro",

    strengthsKicker:
      "Punti di forza naturali",

    strengthsSubtitle:
      "Ciò che porta il Cancro",

    strengths: [
      "Sensibilità",
      "Intuizione",
      "Lealtà",
      "Empatia",
      "Protezione",
      "Memoria emotiva",
    ],

    challengesKicker:
      "Punti di attenzione",

    challengesSubtitle:
      "Ciò che impara il Cancro",

    challenges: [
      "Ipersensibilità",
      "Attaccamento al passato",
      "Paura del rifiuto",
      "Chiusura in sé",
      "Difficoltà a esprimere direttamente i propri bisogni",
      "Tendenza a proteggere troppo",
    ],

    loveTitle:
      "Il Cancro in amore",

    loveParagraphs: [
      "In amore, il Cancro cerca generalmente una relazione profonda, sincera e rassicurante. Ha bisogno di sentire che il legame si basa sulla fiducia, sulla presenza e su una vera attenzione emotiva.",

      "Può mostrarsi molto tenero, protettivo e fedele quando si sente al sicuro. I gesti semplici, le abitudini condivise e la sensazione di costruire una casa hanno spesso grande importanza.",

      "La sua principale sfida consiste nel non aspettare che l’altra persona indovini i suoi bisogni. Una relazione equilibrata richiede una comunicazione più diretta e lo spazio necessario affinché ciascuno possa evolvere.",
    ],

    workTitle:
      "Il Cancro nel lavoro",

    workParagraphs: [
      "Nella vita professionale, il Cancro si distingue spesso per l’intuizione, la memoria, la capacità di ascolto e l’abilità di comprendere i bisogni umani.",

      "Può essere particolarmente efficace nei settori legati all’assistenza, alla salute, all’educazione, all’ospitalità, all’alimentazione, agli immobili o alla creatività.",

      "Generalmente ha bisogno di un ambiente in cui si senta rispettato e al sicuro. Un’atmosfera troppo fredda o instabile può ridurre la motivazione e la capacità di impegnarsi.",
    ],

    placementsTitle:
      "Sole, Luna e Ascendente in Cancro",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sole in Cancro",

        text:
          "Il Sole in Cancro costruisce la propria identità attraverso la sensibilità, le radici, la protezione e l’importanza attribuita ai legami affettivi.",

        link:
          "Comprendere il Sole",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna in Cancro",

        text:
          "La Luna in Cancro sente intensamente e ha bisogno di una casa, di riferimenti e di vicinanza emotiva per sentirsi al sicuro.",

        link:
          "Comprendere la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Cancro",

        text:
          "L’Ascendente Cancro dona una presenza dolce, prudente e ricettiva. Osserva spesso l’atmosfera prima di aprirsi pienamente.",

        link:
          "Comprendere l’Ascendente",
      },
    ],

    compatibilityTitle:
      "Le compatibilità del Cancro",

    compatibilityParagraphs: [
      "Le compatibilità astrologiche non dipendono mai soltanto dal segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

      "Alcune associazioni possono tuttavia sembrare più naturali quando condividono il bisogno di profondità emotiva, lealtà e sicurezza.",
    ],

    compatibilityLabel:
      "Cancro e",

    compatibilities: [
      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Lo Scorpione condivide con il Cancro una grande profondità emotiva e un forte bisogno di fiducia. Questa relazione può diventare molto intensa e leale.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "I Pesci comprendono la sensibilità e l’intuizione del Cancro. Insieme possono creare un legame dolce, ricettivo e profondamente affettivo.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Il Toro porta stabilità, presenza e sicurezza concreta. Il Cancro nutre la relazione con calore, attenzione e attaccamento.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "La Vergine può offrire struttura, affidabilità e sostegno pratico. Il Cancro porta in cambio sensibilità, ascolto e profondità emotiva.",
      },
    ],

    natalTitle:
      "Il Cancro nel tuo tema natale",

    natalParagraphs: [
      "Il Cancro non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene il Cancro in una determinata casa astrologica.",

      "Questa casa mostra l’ambito della vita in cui cerchi maggiore sicurezza, protezione, appartenenza e continuità emotiva.",

      "La presenza di pianeti in Cancro rafforza inoltre questa energia. Venere, Marte, Mercurio o la Luna in Cancro non si esprimono nello stesso modo, ma ciascuno assume una qualità più sensibile, intuitiva e protettiva.",
    ],

    ctaKicker:
      "Scopri il tuo tema natale",

    ctaTitle:
      "Dove si trova il Cancro nel tuo tema natale?",

    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire i tuoi segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

    ctaButton:
      "Creare il mio tema natale",

    faqKicker:
      "Domande frequenti",

    faqTitle:
      "Domande sul Cancro",

    faq: [
      {
        question:
          "Quali sono le principali qualità del Cancro?",

        answer:
          "Il Cancro è spesso associato alla sensibilità, all’intuizione, all’empatia, alla lealtà, alla protezione e all’importanza attribuita ai legami affettivi.",
      },

      {
        question:
          "Quali sono le principali sfide del Cancro?",

        answer:
          "Il Cancro può chiudersi in sé, rimanere legato al passato o avere difficoltà a esprimere direttamente i propri bisogni. La sua crescita passa spesso attraverso una maggiore fiducia e chiarezza emotiva.",
      },

      {
        question:
          "Quale astro governa il Cancro?",

        answer:
          "Il Cancro è governato dalla Luna, associata alle emozioni, ai bisogni affettivi, alle abitudini, alla memoria, all’intuizione e alla sicurezza interiore.",
      },

      {
        question:
          "Qual è l’elemento del Cancro?",

        answer:
          "Il Cancro appartiene all’elemento Acqua. Questo elemento è legato alle emozioni, all’intuizione, alla ricettività, alla sensibilità e alla profondità interiore.",
      },

      {
        question:
          "Come sapere se il Cancro è importante nel mio tema natale?",

        answer:
          "Il Cancro può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette di verificarlo.",
      },
    ],

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Câncer: personalidade, amor, trabalho e compatibilidades | Luna Astralis",

      description:
        "Descubra o signo de Câncer na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidades, Lua, elemento Água, Sol, Lua e Ascendente em Câncer.",

      ogTitle:
        "Câncer na astrologia: personalidade, amor e compatibilidades",

      ogDescription:
        "Guia completo de Câncer: personalidade, forças, desafios, relacionamentos, carreira, astro regente e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Câncer | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Câncer, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Câncer na astrologia: personalidade, amor, trabalho e compatibilidades",

      description:
        "Guia completo sobre o signo de Câncer, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    badge:
      "♋ Quarto signo do zodíaco",

    title:
      "Câncer na astrologia",

    lead:
      "Câncer simboliza a sensibilidade, a intuição, as raízes e a necessidade de segurança emocional. Este signo de Água procura proteger o que ama e criar um verdadeiro sentimento de pertencimento.",

    createChart:
      "Criar meu mapa astral grátis",

    discoverCancer:
      "Descobrir Câncer",

    personalityKicker:
      "Personalidade de Câncer",

    personalityTitle:
      "O que representa o signo de Câncer?",

    personalityParagraphs: [
      "Câncer é o quarto signo do zodíaco. Ele representa a necessidade de construir segurança interior, preservar os vínculos afetivos e criar um espaço no qual seja possível sentir-se protegido.",

      "Uma pessoa fortemente marcada por Câncer costuma perceber rapidamente a atmosfera de um lugar ou as emoções dos outros. Pode ser intuitiva, atenciosa e profundamente ligada às pessoas que considera sua família.",

      "Essa energia traz suavidade, lealdade e capacidade de proteção. No entanto, exige aprender a não interiorizar tudo, expressar claramente as próprias necessidades e não permanecer preso ao passado.",
    ],

    traitsTitle:
      "As principais características de Câncer",

    traits: [
      {
        title:
          "A sensibilidade",

        symbol:
          "🌙",

        text:
          "Câncer percebe profundamente os ambientes, as emoções e as mudanças sutis ao seu redor. Sua sensibilidade alimenta a intuição e a compreensão dos outros.",
      },

      {
        title:
          "A proteção",

        symbol:
          "✦",

        text:
          "Este signo procura naturalmente proteger as pessoas, os vínculos e os espaços que valoriza. Pode se tornar muito presente quando alguém próximo precisa de apoio.",
      },

      {
        title:
          "As raízes",

        symbol:
          "⌂",

        text:
          "Câncer dá grande importância ao lar, às lembranças, à família e ao sentimento de pertencimento. Suas referências afetivas contribuem fortemente para seu equilíbrio.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidade e astro regente",

    pillars: [
      {
        symbol:
          "🌊",

        title:
          "Elemento Água",

        text:
          "A Água traz sensibilidade, intuição, receptividade e profundidade emocional. Ela leva Câncer a sentir antes de agir.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalidade cardinal",

        text:
          "A modalidade cardinal favorece a iniciativa. Em Câncer, costuma se manifestar pelo desejo de criar um lar, um vínculo ou uma segurança duradoura.",
      },

      {
        symbol:
          "☾",

        title:
          "Astro regente: a Lua",

        text:
          "A Lua representa as emoções, os hábitos, as lembranças e as necessidades afetivas. Ela reforça a grande receptividade de Câncer.",
      },
    ],

    strengthsTitle:
      "As forças e os desafios de Câncer",

    strengthsKicker:
      "Forças naturais",

    strengthsSubtitle:
      "O que Câncer oferece",

    strengths: [
      "Sensibilidade",
      "Intuição",
      "Lealdade",
      "Empatia",
      "Proteção",
      "Memória emocional",
    ],

    challengesKicker:
      "Pontos de atenção",

    challengesSubtitle:
      "O que Câncer aprende",

    challenges: [
      "Hipersensibilidade",
      "Apego ao passado",
      "Medo de rejeição",
      "Isolamento",
      "Dificuldade para expressar diretamente suas necessidades",
      "Tendência a proteger demais",
    ],

    loveTitle:
      "Câncer no amor",

    loveParagraphs: [
      "No amor, Câncer geralmente procura uma relação profunda, sincera e segura. Precisa sentir que o vínculo se baseia na confiança, na presença e em uma verdadeira atenção emocional.",

      "Pode ser muito carinhoso, protetor e fiel quando se sente seguro. Gestos simples, hábitos compartilhados e a sensação de construir um lar costumam ter grande importância.",

      "Seu principal desafio é não esperar que a outra pessoa adivinhe suas necessidades. Uma relação equilibrada exige comunicação mais direta e espaço suficiente para que cada pessoa possa evoluir.",
    ],

    workTitle:
      "Câncer no trabalho",

    workParagraphs: [
      "Na vida profissional, Câncer costuma se destacar pela intuição, memória, capacidade de ouvir e habilidade de compreender as necessidades humanas.",

      "Pode ser especialmente eficiente em áreas ligadas ao cuidado, à saúde, à educação, à hospedagem, à alimentação, aos imóveis ou à criatividade.",

      "Geralmente precisa de um ambiente no qual se sinta respeitado e seguro. Uma atmosfera muito fria ou instável pode reduzir sua motivação e sua capacidade de envolvimento.",
    ],

    placementsTitle:
      "Sol, Lua e Ascendente em Câncer",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol em Câncer",

        text:
          "O Sol em Câncer constrói sua identidade por meio da sensibilidade, das raízes, da proteção e da importância dada aos vínculos afetivos.",

        link:
          "Compreender o Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Lua em Câncer",

        text:
          "A Lua em Câncer sente com intensidade e precisa de um lar, referências e proximidade emocional para se sentir segura.",

        link:
          "Compreender a Lua",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente em Câncer",

        text:
          "O Ascendente em Câncer proporciona uma presença suave, prudente e receptiva. Geralmente observa a atmosfera antes de se abrir plenamente.",

        link:
          "Compreender o Ascendente",
      },
    ],

    compatibilityTitle:
      "As compatibilidades de Câncer",

    compatibilityParagraphs: [
      "As compatibilidades astrológicas nunca dependem apenas do signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

      "Algumas combinações podem, porém, parecer mais naturais quando compartilham uma necessidade de profundidade emocional, lealdade e segurança.",
    ],

    compatibilityLabel:
      "Câncer e",

    compatibilities: [
      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Escorpião compartilha com Câncer grande profundidade emocional e uma forte necessidade de confiança. Essa relação pode se tornar muito intensa e leal.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Peixes compreende a sensibilidade e a intuição de Câncer. Juntos, podem criar um vínculo suave, receptivo e profundamente afetivo.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Touro traz estabilidade, presença e segurança concreta. Câncer nutre a relação com calor, atenção e apego.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Virgem pode oferecer estrutura, confiabilidade e apoio prático. Câncer traz em troca sensibilidade, escuta e profundidade emocional.",
      },
    ],

    natalTitle:
      "Câncer no seu mapa natal",

    natalParagraphs: [
      "Câncer não diz respeito apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Câncer em uma determinada casa astrológica.",

      "Essa casa mostra a área da vida em que você busca mais segurança, proteção, pertencimento e continuidade emocional.",

      "A presença de planetas em Câncer também reforça essa energia. Vênus, Marte, Mercúrio ou a Lua em Câncer não se expressam da mesma forma, mas cada um adota uma qualidade mais sensível, intuitiva e protetora.",
    ],

    ctaKicker:
      "Descubra seu mapa natal",

    ctaTitle:
      "Onde Câncer está no seu mapa natal?",

    ctaText:
      "Gere gratuitamente seu mapa natal para descobrir seus signos, suas casas astrológicas, seu Ascendente e as posições dos planetas.",

    ctaButton:
      "Criar meu mapa natal",

    faqKicker:
      "Perguntas frequentes",

    faqTitle:
      "Perguntas sobre Câncer",

    faq: [
      {
        question:
          "Quais são as principais qualidades de Câncer?",

        answer:
          "Câncer costuma ser associado à sensibilidade, à intuição, à empatia, à lealdade, à proteção e à importância dada aos vínculos afetivos.",
      },

      {
        question:
          "Quais são os principais desafios de Câncer?",

        answer:
          "Câncer pode se fechar, permanecer ligado ao passado ou ter dificuldade para expressar diretamente suas necessidades. Seu crescimento costuma passar por maior confiança e clareza emocional.",
      },

      {
        question:
          "Qual astro governa Câncer?",

        answer:
          "Câncer é governado pela Lua, associada às emoções, às necessidades afetivas, aos hábitos, à memória, à intuição e à segurança interior.",
      },

      {
        question:
          "Qual é o elemento de Câncer?",

        answer:
          "Câncer pertence ao elemento Água. Esse elemento está ligado às emoções, à intuição, à receptividade, à sensibilidade e à profundidade interior.",
      },

      {
        question:
          "Como saber se Câncer é importante no meu mapa natal?",

        answer:
          "Câncer pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo permite verificar isso.",
      },
    ],

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
