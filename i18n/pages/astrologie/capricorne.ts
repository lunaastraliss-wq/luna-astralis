// i18n/pages/astrologie/capricorne.ts

import type {
  Locale,
} from "@/i18n/config";

export type CapricornTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type CapricornPillar = {
  symbol: string;
  title: string;
  text: string;
};

export type CapricornPlacement = {
  symbol: string;
  title: string;
  text: string;
  link: string;
};

export type CapricornCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type CapricornFaqItem = {
  question: string;
  answer: string;
};

export type CapricornPageText = {
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
  discoverCapricorn: string;

  personalityKicker: string;
  personalityTitle: string;
  personalityParagraphs: string[];

  traitsTitle: string;
  traits: CapricornTrait[];

  pillarsTitle: string;
  pillars: CapricornPillar[];

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
  placements: CapricornPlacement[];

  compatibilityTitle: string;
  compatibilityParagraphs: string[];
  compatibilityLabel: string;
  compatibilities: CapricornCompatibility[];

  natalTitle: string;
  natalParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: CapricornFaqItem[];

  disclaimer: string;
};

export const CAPRICORNE_TRANSLATIONS:
  Record<
    Locale,
    CapricornPageText
  > = {
  fr: {
    metadata: {
      title:
        "Capricorne : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Capricorne en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Saturne, élément Terre, Lune et Ascendant Capricorne.",

      ogTitle:
        "Le Capricorne en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Capricorne : caractère, forces, défis, relations, carrière, planète Saturne et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe du Capricorne | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Capricorne, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Capricorne en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Capricorne, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    badge:
      "♑ Dixième signe du zodiaque",

    title:
      "Le Capricorne en astrologie",

    lead:
      "Le Capricorne symbolise l’ambition, la discipline, la maturité et la construction. Ce signe de Terre cherche à bâtir une vie solide, à assumer ses responsabilités et à progresser avec patience vers des objectifs durables.",

    createChart:
      "Créer ma carte du ciel gratuite",

    discoverCapricorn:
      "Découvrir le Capricorne",

    personalityKicker:
      "Personnalité du Capricorne",

    personalityTitle:
      "Que représente le signe du Capricorne ?",

    personalityParagraphs: [
      "Le Capricorne est le dixième signe du zodiaque. Il représente la structure, la responsabilité, l’ambition, le temps et la capacité à construire progressivement quelque chose de durable.",

      "Une personne marquée par le Capricorne cherche généralement à maîtriser sa trajectoire. Elle préfère avancer avec prudence, prévoir les étapes nécessaires et consolider ses acquis avant de prendre de nouveaux risques.",

      "Cette énergie apporte endurance, maturité et fiabilité. Elle demande toutefois d’apprendre à se détendre, à accueillir l’imprévu et à ne pas mesurer sa valeur uniquement à travers ses résultats ou ses responsabilités.",
    ],

    traitsTitle:
      "Les grandes caractéristiques du Capricorne",

    traits: [
      {
        title:
          "L’ambition",

        symbol:
          "♑",

        text:
          "Le Capricorne cherche naturellement à construire quelque chose de durable. Il avance avec patience, fixe des objectifs précis et accepte souvent de fournir des efforts soutenus pour atteindre ce qu’il désire.",
      },

      {
        title:
          "La discipline",

        symbol:
          "♄",

        text:
          "Ce signe possède généralement une grande capacité à se structurer et à respecter ses engagements. Il sait que les résultats solides demandent du temps, de la constance et une méthode claire.",
      },

      {
        title:
          "Le sens des responsabilités",

        symbol:
          "◆",

        text:
          "Le Capricorne prend ses obligations au sérieux. Il cherche à être fiable, à protéger ce qu’il a construit et à assumer pleinement les conséquences de ses choix.",
      },
    ],

    pillarsTitle:
      "Élément, modalité et planète maîtresse",

    pillars: [
      {
        symbol:
          "⛰️",

        title:
          "Élément Terre",

        text:
          "La Terre apporte stabilité, réalisme, patience et sens pratique. Elle pousse le Capricorne à transformer ses ambitions en réalisations concrètes.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalité cardinale",

        text:
          "La modalité cardinale favorise l’initiative, l’organisation et le passage à l’action. Elle donne au Capricorne la volonté de diriger et de structurer.",
      },

      {
        symbol:
          "♄",

        title:
          "Planète Saturne",

        text:
          "Saturne représente le temps, les limites, la discipline et la maturité. Elle enseigne au Capricorne la patience et la construction à long terme.",
      },
    ],

    strengthsTitle:
      "Les forces et les défis du Capricorne",

    strengthsKicker:
      "Forces naturelles",

    strengthsSubtitle:
      "Ce que le Capricorne apporte",

    strengths: [
      "Persévérance",
      "Discipline",
      "Fiabilité",
      "Patience",
      "Ambition",
      "Sens des responsabilités",
    ],

    challengesKicker:
      "Points d’attention",

    challengesSubtitle:
      "Ce que le Capricorne apprend",

    challenges: [
      "Rigidité",
      "Pessimisme",
      "Difficulté à se détendre",
      "Besoin de contrôle",
      "Exigence envers soi",
      "Tendance à cacher sa vulnérabilité",
    ],

    loveTitle:
      "Le Capricorne en amour",

    loveParagraphs: [
      "En amour, le Capricorne recherche généralement une relation stable, fiable et construite dans le temps. Il peut prendre du temps avant de se livrer, car il préfère observer la solidité du lien avant de s’engager pleinement.",

      "Lorsqu’il accorde sa confiance, il peut être loyal, protecteur et profondément constant. Il exprime souvent ses sentiments par sa présence, son soutien concret et sa volonté de bâtir un avenir durable.",

      "Son principal défi consiste à montrer davantage sa sensibilité et à ne pas laisser le travail ou les responsabilités prendre toute la place. Une relation durable lui demande de partager ses émotions et de créer aussi des moments de légèreté.",
    ],

    workTitle:
      "Le Capricorne au travail",

    workParagraphs: [
      "Dans la vie professionnelle, le Capricorne se distingue souvent par son sérieux, son endurance et sa capacité à travailler avec méthode sur des objectifs à long terme.",

      "Il peut être particulièrement efficace dans les domaines liés à la gestion, à l’administration, aux finances, à l’immobilier, au droit, à l’ingénierie, à la direction, à la construction ou à l’entrepreneuriat.",

      "Il apprécie généralement les environnements où les responsabilités sont clairement définies et où les efforts sont reconnus. Il gagne toutefois à déléguer, à préserver son énergie et à ne pas transformer chaque objectif en obligation.",
    ],

    placementsTitle:
      "Soleil, Lune et Ascendant en Capricorne",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Soleil en Capricorne",

        text:
          "Le Soleil en Capricorne construit son identité par la discipline, l’ambition, la maturité et la création de résultats durables.",

        link:
          "Comprendre le Soleil",
      },

      {
        symbol:
          "🌙",

        title:
          "Lune en Capricorne",

        text:
          "La Lune en Capricorne a besoin de stabilité, de maîtrise et de repères concrets pour se sentir émotionnellement en sécurité.",

        link:
          "Comprendre la Lune",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendant Capricorne",

        text:
          "L’Ascendant Capricorne donne une présence sérieuse, réservée et déterminée. Il aborde généralement la vie avec prudence, méthode et sens des responsabilités.",

        link:
          "Comprendre l’Ascendant",
      },
    ],

    compatibilityTitle:
      "Les compatibilités du Capricorne",

    compatibilityParagraphs: [
      "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

      "Certaines associations peuvent néanmoins sembler naturellement plus harmonieuses lorsqu’elles partagent un besoin de stabilité, de loyauté, de constance et de sécurité.",
    ],

    compatibilityLabel:
      "Capricorne et",

    compatibilities: [
      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Le Taureau et le Capricorne partagent un besoin de stabilité, de sécurité et de constance. Leur relation peut se construire lentement sur des bases solides.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "La Vierge apprécie le sérieux et la fiabilité du Capricorne. Ensemble, ils peuvent organiser leur vie avec méthode et bâtir des projets durables.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Le Scorpion et le Capricorne partagent une grande détermination et un goût pour les liens profonds. Leur relation peut être loyale, intense et résistante.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Les Poissons apportent douceur, intuition et imagination. Le Capricorne offre en retour structure, stabilité et sécurité concrète.",
      },
    ],

    natalTitle:
      "Le Capricorne dans votre thème natal",

    natalParagraphs: [
      "Le Capricorne ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Capricorne dans une maison astrologique particulière.",

      "Cette maison montre le domaine de vie dans lequel vous cherchez à structurer, à assumer des responsabilités, à progresser avec patience ou à construire quelque chose de durable. La présence de planètes en Capricorne renforce également cette énergie.",
    ],

    ctaKicker:
      "Découvrez votre thème natal",

    ctaTitle:
      "Où se trouve le Capricorne dans votre carte du ciel ?",

    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir vos signes, vos maisons astrologiques, votre Ascendant et les positions de vos planètes.",

    ctaButton:
      "Créer ma carte du ciel",

    faqKicker:
      "Questions fréquentes",

    faqTitle:
      "Questions sur le Capricorne",

    faq: [
      {
        question:
          "Quelles sont les principales qualités du Capricorne ?",

        answer:
          "Le Capricorne est souvent associé à la discipline, à la persévérance, à la fiabilité, à la patience, à l’ambition et au sens des responsabilités.",
      },

      {
        question:
          "Quels sont les principaux défis du Capricorne ?",

        answer:
          "Le Capricorne peut parfois devenir rigide, trop exigeant envers lui-même ou avoir de la difficulté à se détendre. Son évolution passe par davantage de souplesse, de confiance et d’ouverture émotionnelle.",
      },

      {
        question:
          "Quelle planète gouverne le Capricorne ?",

        answer:
          "Le Capricorne est gouverné par Saturne, planète traditionnellement associée au temps, aux responsabilités, aux limites, à la discipline, à la maturité et à la construction durable.",
      },

      {
        question:
          "Quel est l’élément du Capricorne ?",

        answer:
          "Le Capricorne appartient à l’élément Terre. Cet élément est lié au réalisme, à la stabilité, au sens pratique, à la patience et à la capacité de construire des résultats concrets.",
      },

      {
        question:
          "Comment savoir si le Capricorne est important dans mon thème natal ?",

        answer:
          "Le Capricorne peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet aussi de découvrir la maison astrologique occupée par le Capricorne.",
      },
    ],

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Capricorn: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Capricorn in astrology: personality, strengths, challenges, love, career, compatibility, Saturn, the Earth element, Capricorn Moon and Capricorn Rising.",

      ogTitle:
        "Capricorn in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Capricorn: personality, strengths, challenges, relationships, career, Saturn and major astrological compatibility.",

      twitterTitle:
        "The Capricorn Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Capricorn’s personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Capricorn in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Capricorn, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    badge:
      "♑ Tenth sign of the zodiac",

    title:
      "Capricorn in Astrology",

    lead:
      "Capricorn symbolizes ambition, discipline, maturity and construction. This Earth sign seeks to build a solid life, assume responsibilities and progress patiently toward lasting goals.",

    createChart:
      "Create my free birth chart",

    discoverCapricorn:
      "Discover Capricorn",

    personalityKicker:
      "Capricorn personality",

    personalityTitle:
      "What does the Capricorn zodiac sign represent?",

    personalityParagraphs: [
      "Capricorn is the tenth sign of the zodiac. It represents structure, responsibility, ambition, time and the ability to gradually build something lasting.",

      "A person strongly influenced by Capricorn generally seeks to control their direction. They prefer to move forward cautiously, anticipate the necessary steps and consolidate their achievements before taking new risks.",

      "This energy brings endurance, maturity and reliability. It also requires learning to relax, welcome the unexpected and avoid measuring personal worth only through results or responsibilities.",
    ],

    traitsTitle:
      "The main characteristics of Capricorn",

    traits: [
      {
        title:
          "Ambition",

        symbol:
          "♑",

        text:
          "Capricorn naturally seeks to build something lasting. It moves forward patiently, sets precise goals and is often willing to make sustained efforts to achieve what it wants.",
      },

      {
        title:
          "Discipline",

        symbol:
          "♄",

        text:
          "This sign generally has a strong ability to organize itself and respect its commitments. It understands that solid results require time, consistency and a clear method.",
      },

      {
        title:
          "A sense of responsibility",

        symbol:
          "◆",

        text:
          "Capricorn takes its obligations seriously. It seeks to be reliable, protect what it has built and fully accept the consequences of its choices.",
      },
    ],

    pillarsTitle:
      "Element, modality and ruling planet",

    pillars: [
      {
        symbol:
          "⛰️",

        title:
          "Earth element",

        text:
          "Earth brings stability, realism, patience and practicality. It encourages Capricorn to transform ambitions into concrete achievements.",
      },

      {
        symbol:
          "◇",

        title:
          "Cardinal modality",

        text:
          "The cardinal modality supports initiative, organization and action. It gives Capricorn the desire to lead and create structure.",
      },

      {
        symbol:
          "♄",

        title:
          "Planet Saturn",

        text:
          "Saturn represents time, limits, discipline and maturity. It teaches Capricorn patience and long-term construction.",
      },
    ],

    strengthsTitle:
      "Capricorn’s strengths and challenges",

    strengthsKicker:
      "Natural strengths",

    strengthsSubtitle:
      "What Capricorn brings",

    strengths: [
      "Perseverance",
      "Discipline",
      "Reliability",
      "Patience",
      "Ambition",
      "Sense of responsibility",
    ],

    challengesKicker:
      "Points of attention",

    challengesSubtitle:
      "What Capricorn learns",

    challenges: [
      "Rigidity",
      "Pessimism",
      "Difficulty relaxing",
      "Need for control",
      "Excessive self-demand",
      "Tendency to hide vulnerability",
    ],

    loveTitle:
      "Capricorn in love",

    loveParagraphs: [
      "In love, Capricorn generally seeks a stable, reliable relationship built over time. It may take time to open up because it prefers to observe the strength of the bond before fully committing.",

      "When Capricorn gives its trust, it can be loyal, protective and deeply consistent. It often expresses feelings through presence, practical support and the desire to build a lasting future.",

      "Its main challenge is showing greater sensitivity and not allowing work or responsibilities to take up all the space. A lasting relationship requires sharing emotions and creating moments of lightness as well.",
    ],

    workTitle:
      "Capricorn at work",

    workParagraphs: [
      "In professional life, Capricorn often stands out through seriousness, endurance and the ability to work methodically toward long-term objectives.",

      "It may be especially effective in fields related to management, administration, finance, real estate, law, engineering, leadership, construction or entrepreneurship.",

      "Capricorn generally appreciates environments where responsibilities are clearly defined and efforts are recognized. It benefits, however, from delegating, preserving its energy and not turning every objective into an obligation.",
    ],

    placementsTitle:
      "Sun, Moon and Rising in Capricorn",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sun in Capricorn",

        text:
          "The Sun in Capricorn builds identity through discipline, ambition, maturity and the creation of lasting results.",

        link:
          "Understand the Sun",
      },

      {
        symbol:
          "🌙",

        title:
          "Moon in Capricorn",

        text:
          "The Moon in Capricorn needs stability, control and practical reference points to feel emotionally secure.",

        link:
          "Understand the Moon",
      },

      {
        symbol:
          "↑",

        title:
          "Capricorn Rising",

        text:
          "Capricorn Rising gives a serious, reserved and determined presence. It generally approaches life with caution, method and a strong sense of responsibility.",

        link:
          "Understand the Ascendant",
      },
    ],

    compatibilityTitle:
      "Capricorn compatibility",

    compatibilityParagraphs: [
      "Astrological compatibility is never based solely on the Sun sign. The Moon, Venus, Mars, the Ascendant and the aspects between both charts provide essential information.",

      "Some combinations may nevertheless feel naturally more harmonious when they share a need for stability, loyalty, consistency and security.",
    ],

    compatibilityLabel:
      "Capricorn and",

    compatibilities: [
      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Taurus and Capricorn share a need for stability, security and consistency. Their relationship can develop slowly on solid foundations.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo appreciates Capricorn’s seriousness and reliability. Together, they can organize their lives methodically and build lasting projects.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Scorpio and Capricorn share strong determination and an attraction to deep bonds. Their relationship can be loyal, intense and resilient.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Pisces brings gentleness, intuition and imagination. Capricorn offers structure, stability and practical security in return.",
      },
    ],

    natalTitle:
      "Capricorn in your birth chart",

    natalParagraphs: [
      "Capricorn does not concern only people born under this sign. Every birth chart contains Capricorn in a particular astrological house.",

      "This house shows the area of life in which you seek to create structure, assume responsibility, progress patiently or build something lasting. Planets in Capricorn also strengthen this energy.",
    ],

    ctaKicker:
      "Discover your birth chart",

    ctaTitle:
      "Where is Capricorn in your birth chart?",

    ctaText:
      "Generate your free birth chart to discover your signs, astrological houses, Ascendant and planetary positions.",

    ctaButton:
      "Create my birth chart",

    faqKicker:
      "Frequently asked questions",

    faqTitle:
      "Questions about Capricorn",

    faq: [
      {
        question:
          "What are Capricorn’s main qualities?",

        answer:
          "Capricorn is often associated with discipline, perseverance, reliability, patience, ambition and a strong sense of responsibility.",
      },

      {
        question:
          "What are Capricorn’s main challenges?",

        answer:
          "Capricorn may sometimes become rigid, overly demanding of itself or have difficulty relaxing. Its growth involves greater flexibility, trust and emotional openness.",
      },

      {
        question:
          "Which planet rules Capricorn?",

        answer:
          "Capricorn is ruled by Saturn, the planet traditionally associated with time, responsibility, limits, discipline, maturity and lasting construction.",
      },

      {
        question:
          "What is Capricorn’s element?",

        answer:
          "Capricorn belongs to the Earth element. This element is connected with realism, stability, practicality, patience and the ability to build concrete results.",
      },

      {
        question:
          "How can I know whether Capricorn is important in my birth chart?",

        answer:
          "Capricorn may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals which astrological house contains Capricorn.",
      },
    ],

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Capricornio: personalidad, amor, trabajo y compatibilidades | Luna Astralis",

      description:
        "Descubre Capricornio en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidades, Saturno, elemento Tierra, Luna y Ascendente Capricornio.",

      ogTitle:
        "Capricornio en astrología: personalidad, amor y compatibilidades",

      ogDescription:
        "Guía completa de Capricornio: carácter, fortalezas, desafíos, relaciones, carrera, planeta Saturno y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Capricornio | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Capricornio, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Capricornio en astrología: personalidad, amor, trabajo y compatibilidades",

      description:
        "Guía completa dedicada al signo de Capricornio, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    badge:
      "♑ Décimo signo del zodiaco",

    title:
      "Capricornio en astrología",

    lead:
      "Capricornio simboliza la ambición, la disciplina, la madurez y la construcción. Este signo de Tierra busca construir una vida sólida, asumir sus responsabilidades y avanzar con paciencia hacia objetivos duraderos.",

    createChart:
      "Crear mi carta natal gratis",

    discoverCapricorn:
      "Descubrir Capricornio",

    personalityKicker:
      "Personalidad de Capricornio",

    personalityTitle:
      "¿Qué representa el signo de Capricornio?",

    personalityParagraphs: [
      "Capricornio es el décimo signo del zodiaco. Representa la estructura, la responsabilidad, la ambición, el tiempo y la capacidad de construir progresivamente algo duradero.",

      "Una persona marcada por Capricornio generalmente busca controlar su trayectoria. Prefiere avanzar con prudencia, prever las etapas necesarias y consolidar sus logros antes de asumir nuevos riesgos.",

      "Esta energía aporta resistencia, madurez y fiabilidad. Sin embargo, requiere aprender a relajarse, aceptar lo imprevisto y no medir el propio valor únicamente mediante los resultados o las responsabilidades.",
    ],

    traitsTitle:
      "Las principales características de Capricornio",

    traits: [
      {
        title:
          "La ambición",

        symbol:
          "♑",

        text:
          "Capricornio busca naturalmente construir algo duradero. Avanza con paciencia, establece objetivos precisos y suele aceptar esfuerzos sostenidos para alcanzar lo que desea.",
      },

      {
        title:
          "La disciplina",

        symbol:
          "♄",

        text:
          "Este signo generalmente posee una gran capacidad para organizarse y respetar sus compromisos. Sabe que los resultados sólidos requieren tiempo, constancia y un método claro.",
      },

      {
        title:
          "El sentido de la responsabilidad",

        symbol:
          "◆",

        text:
          "Capricornio toma sus obligaciones en serio. Busca ser fiable, proteger lo que ha construido y asumir plenamente las consecuencias de sus decisiones.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidad y planeta regente",

    pillars: [
      {
        symbol:
          "⛰️",

        title:
          "Elemento Tierra",

        text:
          "La Tierra aporta estabilidad, realismo, paciencia y sentido práctico. Impulsa a Capricornio a transformar sus ambiciones en logros concretos.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalidad cardinal",

        text:
          "La modalidad cardinal favorece la iniciativa, la organización y el paso a la acción. Da a Capricornio la voluntad de dirigir y estructurar.",
      },

      {
        symbol:
          "♄",

        title:
          "Planeta Saturno",

        text:
          "Saturno representa el tiempo, los límites, la disciplina y la madurez. Enseña a Capricornio la paciencia y la construcción a largo plazo.",
      },
    ],

    strengthsTitle:
      "Las fortalezas y los desafíos de Capricornio",

    strengthsKicker:
      "Fortalezas naturales",

    strengthsSubtitle:
      "Lo que aporta Capricornio",

    strengths: [
      "Perseverancia",
      "Disciplina",
      "Fiabilidad",
      "Paciencia",
      "Ambición",
      "Sentido de la responsabilidad",
    ],

    challengesKicker:
      "Puntos de atención",

    challengesSubtitle:
      "Lo que aprende Capricornio",

    challenges: [
      "Rigidez",
      "Pesimismo",
      "Dificultad para relajarse",
      "Necesidad de control",
      "Exigencia consigo mismo",
      "Tendencia a ocultar su vulnerabilidad",
    ],

    loveTitle:
      "Capricornio en el amor",

    loveParagraphs: [
      "En el amor, Capricornio generalmente busca una relación estable, fiable y construida con el tiempo. Puede tardar en abrirse porque prefiere observar la solidez del vínculo antes de comprometerse plenamente.",

      "Cuando concede su confianza, puede ser leal, protector y profundamente constante. Suele expresar sus sentimientos mediante su presencia, su apoyo concreto y su voluntad de construir un futuro duradero.",

      "Su principal desafío consiste en mostrar más sensibilidad y no permitir que el trabajo o las responsabilidades ocupen todo el espacio. Una relación duradera le exige compartir sus emociones y crear también momentos de ligereza.",
    ],

    workTitle:
      "Capricornio en el trabajo",

    workParagraphs: [
      "En la vida profesional, Capricornio suele destacar por su seriedad, resistencia y capacidad para trabajar metódicamente en objetivos a largo plazo.",

      "Puede ser especialmente eficaz en ámbitos relacionados con la gestión, la administración, las finanzas, los bienes raíces, el derecho, la ingeniería, la dirección, la construcción o el emprendimiento.",

      "Generalmente aprecia los entornos donde las responsabilidades están claramente definidas y los esfuerzos son reconocidos. Sin embargo, le conviene delegar, proteger su energía y no convertir cada objetivo en una obligación.",
    ],

    placementsTitle:
      "Sol, Luna y Ascendente en Capricornio",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol en Capricornio",

        text:
          "El Sol en Capricornio construye su identidad mediante la disciplina, la ambición, la madurez y la creación de resultados duraderos.",

        link:
          "Comprender el Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna en Capricornio",

        text:
          "La Luna en Capricornio necesita estabilidad, control y referencias concretas para sentirse emocionalmente segura.",

        link:
          "Comprender la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Capricornio",

        text:
          "El Ascendente Capricornio aporta una presencia seria, reservada y determinada. Generalmente aborda la vida con prudencia, método y sentido de la responsabilidad.",

        link:
          "Comprender el Ascendente",
      },
    ],

    compatibilityTitle:
      "Las compatibilidades de Capricornio",

    compatibilityParagraphs: [
      "Las compatibilidades astrológicas nunca dependen únicamente del signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

      "Sin embargo, algunas asociaciones pueden parecer naturalmente más armoniosas cuando comparten una necesidad de estabilidad, lealtad, constancia y seguridad.",
    ],

    compatibilityLabel:
      "Capricornio y",

    compatibilities: [
      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Tauro y Capricornio comparten una necesidad de estabilidad, seguridad y constancia. Su relación puede construirse lentamente sobre bases sólidas.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Virgo aprecia la seriedad y la fiabilidad de Capricornio. Juntos pueden organizar su vida con método y construir proyectos duraderos.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Escorpio y Capricornio comparten una gran determinación y un gusto por los vínculos profundos. Su relación puede ser leal, intensa y resistente.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Piscis aporta dulzura, intuición e imaginación. Capricornio ofrece a cambio estructura, estabilidad y seguridad concreta.",
      },
    ],

    natalTitle:
      "Capricornio en tu carta natal",

    natalParagraphs: [
      "Capricornio no se refiere únicamente a las personas nacidas bajo este signo. Cada carta natal contiene Capricornio en una casa astrológica determinada.",

      "Esa casa muestra el ámbito de vida en el que buscas estructurar, asumir responsabilidades, progresar con paciencia o construir algo duradero. La presencia de planetas en Capricornio también refuerza esta energía.",
    ],

    ctaKicker:
      "Descubre tu carta natal",

    ctaTitle:
      "¿Dónde se encuentra Capricornio en tu carta natal?",

    ctaText:
      "Genera gratuitamente tu carta natal para descubrir tus signos, tus casas astrológicas, tu Ascendente y las posiciones de tus planetas.",

    ctaButton:
      "Crear mi carta natal",

    faqKicker:
      "Preguntas frecuentes",

    faqTitle:
      "Preguntas sobre Capricornio",

    faq: [
      {
        question:
          "¿Cuáles son las principales cualidades de Capricornio?",

        answer:
          "Capricornio suele asociarse con la disciplina, la perseverancia, la fiabilidad, la paciencia, la ambición y el sentido de la responsabilidad.",
      },

      {
        question:
          "¿Cuáles son los principales desafíos de Capricornio?",

        answer:
          "Capricornio puede volverse rígido, demasiado exigente consigo mismo o tener dificultad para relajarse. Su evolución pasa por una mayor flexibilidad, confianza y apertura emocional.",
      },

      {
        question:
          "¿Qué planeta gobierna Capricornio?",

        answer:
          "Capricornio está regido por Saturno, planeta tradicionalmente asociado con el tiempo, las responsabilidades, los límites, la disciplina, la madurez y la construcción duradera.",
      },

      {
        question:
          "¿Cuál es el elemento de Capricornio?",

        answer:
          "Capricornio pertenece al elemento Tierra. Este elemento está relacionado con el realismo, la estabilidad, el sentido práctico, la paciencia y la capacidad de construir resultados concretos.",
      },

      {
        question:
          "¿Cómo saber si Capricornio es importante en mi carta natal?",

        answer:
          "Capricornio puede ser importante si tu Sol, tu Luna, tu Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también permite descubrir qué casa astrológica ocupa Capricornio.",
      },
    ],

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Steinbock: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Steinbock in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Saturn, Erdelement, Steinbock-Mond und Aszendent.",

      ogTitle:
        "Der Steinbock in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Steinbock: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Saturn und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Steinbock | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit des Steinbocks, seine Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Der Steinbock in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Sternzeichen Steinbock, seinen Stärken, Herausforderungen, Beziehungen, beruflichen Themen und wichtigsten astrologischen Eigenschaften.",
    },

    badge:
      "♑ Zehntes Tierkreiszeichen",

    title:
      "Der Steinbock in der Astrologie",

    lead:
      "Der Steinbock symbolisiert Ehrgeiz, Disziplin, Reife und Aufbau. Dieses Erdzeichen möchte ein solides Leben schaffen, Verantwortung übernehmen und geduldig auf dauerhafte Ziele hinarbeiten.",

    createChart:
      "Mein kostenloses Geburtshoroskop erstellen",

    discoverCapricorn:
      "Den Steinbock entdecken",

    personalityKicker:
      "Persönlichkeit des Steinbocks",

    personalityTitle:
      "Wofür steht das Sternzeichen Steinbock?",

    personalityParagraphs: [
      "Der Steinbock ist das zehnte Tierkreiszeichen. Er steht für Struktur, Verantwortung, Ehrgeiz, Zeit und die Fähigkeit, schrittweise etwas Dauerhaftes aufzubauen.",

      "Ein Mensch mit starker Steinbock-Betonung möchte seinen Weg meist kontrollieren. Er geht lieber vorsichtig vor, plant die notwendigen Schritte und festigt Erreichtes, bevor er neue Risiken eingeht.",

      "Diese Energie bringt Ausdauer, Reife und Zuverlässigkeit. Gleichzeitig verlangt sie, sich zu entspannen, Unerwartetes anzunehmen und den eigenen Wert nicht ausschließlich an Ergebnissen oder Verantwortung zu messen.",
    ],

    traitsTitle:
      "Die wichtigsten Eigenschaften des Steinbocks",

    traits: [
      {
        title:
          "Ehrgeiz",

        symbol:
          "♑",

        text:
          "Der Steinbock möchte von Natur aus etwas Dauerhaftes aufbauen. Er geht geduldig vor, setzt klare Ziele und ist oft bereit, anhaltende Anstrengungen zu leisten, um das Gewünschte zu erreichen.",
      },

      {
        title:
          "Disziplin",

        symbol:
          "♄",

        text:
          "Dieses Zeichen besitzt meist eine starke Fähigkeit zur Selbstorganisation und hält seine Verpflichtungen ein. Es weiß, dass solide Ergebnisse Zeit, Beständigkeit und eine klare Methode benötigen.",
      },

      {
        title:
          "Verantwortungsbewusstsein",

        symbol:
          "◆",

        text:
          "Der Steinbock nimmt seine Verpflichtungen ernst. Er möchte zuverlässig sein, das Erreichte schützen und die Folgen seiner Entscheidungen vollständig übernehmen.",
      },
    ],

    pillarsTitle:
      "Element, Modalität und Herrscherplanet",

    pillars: [
      {
        symbol:
          "⛰️",

        title:
          "Element Erde",

        text:
          "Erde bringt Stabilität, Realismus, Geduld und praktische Fähigkeiten. Sie führt den Steinbock dazu, seine Ambitionen in konkrete Ergebnisse zu verwandeln.",
      },

      {
        symbol:
          "◇",

        title:
          "Kardinale Modalität",

        text:
          "Die kardinale Modalität fördert Initiative, Organisation und Handlungsbereitschaft. Sie gibt dem Steinbock den Wunsch zu führen und Strukturen zu schaffen.",
      },

      {
        symbol:
          "♄",

        title:
          "Planet Saturn",

        text:
          "Saturn steht für Zeit, Grenzen, Disziplin und Reife. Er lehrt den Steinbock Geduld und langfristigen Aufbau.",
      },
    ],

    strengthsTitle:
      "Stärken und Herausforderungen des Steinbocks",

    strengthsKicker:
      "Natürliche Stärken",

    strengthsSubtitle:
      "Was der Steinbock einbringt",

    strengths: [
      "Ausdauer",
      "Disziplin",
      "Zuverlässigkeit",
      "Geduld",
      "Ehrgeiz",
      "Verantwortungsbewusstsein",
    ],

    challengesKicker:
      "Wichtige Lernfelder",

    challengesSubtitle:
      "Was der Steinbock lernt",

    challenges: [
      "Starrheit",
      "Pessimismus",
      "Schwierigkeit, sich zu entspannen",
      "Kontrollbedürfnis",
      "Hohe Ansprüche an sich selbst",
      "Tendenz, Verletzlichkeit zu verbergen",
    ],

    loveTitle:
      "Der Steinbock in der Liebe",

    loveParagraphs: [
      "In der Liebe sucht der Steinbock meist eine stabile, zuverlässige Beziehung, die sich mit der Zeit entwickelt. Er kann lange brauchen, um sich zu öffnen, weil er zuerst die Beständigkeit der Verbindung beobachten möchte.",

      "Wenn er Vertrauen schenkt, kann er loyal, beschützend und sehr beständig sein. Seine Gefühle zeigt er häufig durch Präsenz, konkrete Unterstützung und den Wunsch, eine dauerhafte Zukunft aufzubauen.",

      "Seine größte Herausforderung besteht darin, mehr Sensibilität zu zeigen und Arbeit oder Verantwortung nicht den gesamten Raum einnehmen zu lassen. Eine dauerhafte Beziehung verlangt, Gefühle zu teilen und auch Leichtigkeit zuzulassen.",
    ],

    workTitle:
      "Der Steinbock im Beruf",

    workParagraphs: [
      "Im Berufsleben zeichnet sich der Steinbock häufig durch Ernsthaftigkeit, Ausdauer und die Fähigkeit aus, methodisch an langfristigen Zielen zu arbeiten.",

      "Er kann besonders erfolgreich in Bereichen wie Management, Verwaltung, Finanzen, Immobilien, Recht, Ingenieurwesen, Führung, Bauwesen oder Unternehmertum sein.",

      "Der Steinbock schätzt meist Umgebungen, in denen Verantwortlichkeiten klar definiert und Anstrengungen anerkannt werden. Er profitiert jedoch davon, Aufgaben abzugeben, seine Energie zu schützen und nicht jedes Ziel in eine Pflicht zu verwandeln.",
    ],

    placementsTitle:
      "Sonne, Mond und Aszendent im Steinbock",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sonne im Steinbock",

        text:
          "Die Sonne im Steinbock entwickelt ihre Identität durch Disziplin, Ehrgeiz, Reife und die Schaffung dauerhafter Ergebnisse.",

        link:
          "Die Sonne verstehen",
      },

      {
        symbol:
          "🌙",

        title:
          "Mond im Steinbock",

        text:
          "Der Mond im Steinbock braucht Stabilität, Kontrolle und konkrete Bezugspunkte, um sich emotional sicher zu fühlen.",

        link:
          "Den Mond verstehen",
      },

      {
        symbol:
          "↑",

        title:
          "Steinbock-Aszendent",

        text:
          "Der Steinbock-Aszendent vermittelt eine ernste, zurückhaltende und entschlossene Präsenz. Er begegnet dem Leben meist mit Vorsicht, Methode und Verantwortungsbewusstsein.",

        link:
          "Den Aszendenten verstehen",
      },
    ],

    compatibilityTitle:
      "Kompatibilität des Steinbocks",

    compatibilityParagraphs: [
      "Astrologische Kompatibilität beruht niemals allein auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

      "Einige Verbindungen können dennoch natürlicher und harmonischer wirken, wenn ein gemeinsames Bedürfnis nach Stabilität, Loyalität, Beständigkeit und Sicherheit besteht.",
    ],

    compatibilityLabel:
      "Steinbock und",

    compatibilities: [
      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Stier und Steinbock teilen ein Bedürfnis nach Stabilität, Sicherheit und Beständigkeit. Ihre Beziehung kann sich langsam auf einem soliden Fundament entwickeln.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Die Jungfrau schätzt die Ernsthaftigkeit und Zuverlässigkeit des Steinbocks. Gemeinsam können sie ihr Leben methodisch organisieren und dauerhafte Projekte aufbauen.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Skorpion und Steinbock teilen starke Entschlossenheit und eine Vorliebe für tiefe Bindungen. Ihre Beziehung kann loyal, intensiv und widerstandsfähig sein.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Die Fische bringen Sanftheit, Intuition und Fantasie. Der Steinbock bietet dafür Struktur, Stabilität und praktische Sicherheit.",
      },
    ],

    natalTitle:
      "Der Steinbock in Ihrem Geburtshoroskop",

    natalParagraphs: [
      "Der Steinbock betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Steinbock in einem bestimmten astrologischen Haus.",

      "Dieses Haus zeigt den Lebensbereich, in dem Sie Struktur schaffen, Verantwortung übernehmen, geduldig vorankommen oder etwas Dauerhaftes aufbauen möchten. Planeten im Steinbock verstärken diese Energie zusätzlich.",
    ],

    ctaKicker:
      "Entdecken Sie Ihr Geburtshoroskop",

    ctaTitle:
      "Wo befindet sich der Steinbock in Ihrem Geburtshoroskop?",

    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, Häuser, Ihren Aszendenten und die Positionen Ihrer Planeten.",

    ctaButton:
      "Mein Geburtshoroskop erstellen",

    faqKicker:
      "Häufige Fragen",

    faqTitle:
      "Fragen zum Steinbock",

    faq: [
      {
        question:
          "Was sind die wichtigsten Eigenschaften des Steinbocks?",

        answer:
          "Der Steinbock wird häufig mit Disziplin, Ausdauer, Zuverlässigkeit, Geduld, Ehrgeiz und Verantwortungsbewusstsein verbunden.",
      },

      {
        question:
          "Was sind die größten Herausforderungen des Steinbocks?",

        answer:
          "Der Steinbock kann starr, zu anspruchsvoll mit sich selbst oder unfähig sein, sich zu entspannen. Seine Entwicklung führt über mehr Flexibilität, Vertrauen und emotionale Offenheit.",
      },

      {
        question:
          "Welcher Planet regiert den Steinbock?",

        answer:
          "Der Steinbock wird von Saturn regiert, dem Planeten, der traditionell mit Zeit, Verantwortung, Grenzen, Disziplin, Reife und dauerhaftem Aufbau verbunden wird.",
      },

      {
        question:
          "Welches Element gehört zum Steinbock?",

        answer:
          "Der Steinbock gehört zum Element Erde. Dieses Element steht für Realismus, Stabilität, praktische Fähigkeiten, Geduld und die Fähigkeit, konkrete Ergebnisse aufzubauen.",
      },

      {
        question:
          "Wie erkenne ich, ob der Steinbock in meinem Geburtshoroskop wichtig ist?",

        answer:
          "Der Steinbock kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem, in welchem Haus sich der Steinbock befindet.",
      },
    ],

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Capricorno: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri il Capricorno in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Saturno, elemento Terra, Luna e Ascendente Capricorno.",

      ogTitle:
        "Il Capricorno in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa al Capricorno: carattere, punti di forza, sfide, relazioni, carriera, pianeta Saturno e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno del Capricorno | Luna Astralis",

      twitterDescription:
        "Scopri la personalità del Capricorno, le sue qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Il Capricorno in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al segno del Capricorno, alle sue qualità, sfide, relazioni, carriera e principali caratteristiche astrologiche.",
    },

    badge:
      "♑ Decimo segno dello zodiaco",

    title:
      "Il Capricorno in astrologia",

    lead:
      "Il Capricorno simboleggia l’ambizione, la disciplina, la maturità e la costruzione. Questo segno di Terra cerca di costruire una vita solida, assumersi le proprie responsabilità e avanzare con pazienza verso obiettivi duraturi.",

    createChart:
      "Creare gratuitamente il mio tema natale",

    discoverCapricorn:
      "Scoprire il Capricorno",

    personalityKicker:
      "Personalità del Capricorno",

    personalityTitle:
      "Che cosa rappresenta il segno del Capricorno?",

    personalityParagraphs: [
      "Il Capricorno è il decimo segno dello zodiaco. Rappresenta la struttura, la responsabilità, l’ambizione, il tempo e la capacità di costruire gradualmente qualcosa di duraturo.",

      "Una persona fortemente influenzata dal Capricorno cerca generalmente di controllare la propria traiettoria. Preferisce avanzare con prudenza, prevedere le tappe necessarie e consolidare i risultati prima di assumere nuovi rischi.",

      "Questa energia porta resistenza, maturità e affidabilità. Richiede però di imparare a rilassarsi, accogliere l’imprevisto e non misurare il proprio valore soltanto attraverso risultati o responsabilità.",
    ],

    traitsTitle:
      "Le principali caratteristiche del Capricorno",

    traits: [
      {
        title:
          "L’ambizione",

        symbol:
          "♑",

        text:
          "Il Capricorno cerca naturalmente di costruire qualcosa di duraturo. Avanza con pazienza, stabilisce obiettivi precisi e spesso accetta di compiere sforzi costanti per raggiungere ciò che desidera.",
      },

      {
        title:
          "La disciplina",

        symbol:
          "♄",

        text:
          "Questo segno possiede generalmente una grande capacità di organizzarsi e rispettare i propri impegni. Sa che i risultati solidi richiedono tempo, costanza e un metodo chiaro.",
      },

      {
        title:
          "Il senso di responsabilità",

        symbol:
          "◆",

        text:
          "Il Capricorno prende sul serio i propri obblighi. Cerca di essere affidabile, proteggere ciò che ha costruito e assumersi pienamente le conseguenze delle proprie scelte.",
      },
    ],

    pillarsTitle:
      "Elemento, modalità e pianeta governatore",

    pillars: [
      {
        symbol:
          "⛰️",

        title:
          "Elemento Terra",

        text:
          "La Terra porta stabilità, realismo, pazienza e senso pratico. Spinge il Capricorno a trasformare le proprie ambizioni in risultati concreti.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalità cardinale",

        text:
          "La modalità cardinale favorisce l’iniziativa, l’organizzazione e il passaggio all’azione. Dona al Capricorno la volontà di dirigere e strutturare.",
      },

      {
        symbol:
          "♄",

        title:
          "Pianeta Saturno",

        text:
          "Saturno rappresenta il tempo, i limiti, la disciplina e la maturità. Insegna al Capricorno la pazienza e la costruzione a lungo termine.",
      },
    ],

    strengthsTitle:
      "I punti di forza e le sfide del Capricorno",

    strengthsKicker:
      "Punti di forza naturali",

    strengthsSubtitle:
      "Ciò che porta il Capricorno",

    strengths: [
      "Perseveranza",
      "Disciplina",
      "Affidabilità",
      "Pazienza",
      "Ambizione",
      "Senso di responsabilità",
    ],

    challengesKicker:
      "Punti di attenzione",

    challengesSubtitle:
      "Ciò che impara il Capricorno",

    challenges: [
      "Rigidità",
      "Pessimismo",
      "Difficoltà a rilassarsi",
      "Bisogno di controllo",
      "Eccessiva severità verso sé stesso",
      "Tendenza a nascondere la vulnerabilità",
    ],

    loveTitle:
      "Il Capricorno in amore",

    loveParagraphs: [
      "In amore, il Capricorno cerca generalmente una relazione stabile, affidabile e costruita nel tempo. Può impiegare tempo prima di aprirsi, perché preferisce osservare la solidità del legame prima di impegnarsi pienamente.",

      "Quando concede la propria fiducia, può essere leale, protettivo e profondamente costante. Esprime spesso i sentimenti attraverso la presenza, il sostegno concreto e il desiderio di costruire un futuro duraturo.",

      "La sua principale sfida consiste nel mostrare maggiore sensibilità e non lasciare che il lavoro o le responsabilità occupino tutto lo spazio. Una relazione duratura richiede di condividere le emozioni e creare anche momenti di leggerezza.",
    ],

    workTitle:
      "Il Capricorno nel lavoro",

    workParagraphs: [
      "Nella vita professionale, il Capricorno si distingue spesso per serietà, resistenza e capacità di lavorare con metodo su obiettivi a lungo termine.",

      "Può essere particolarmente efficace nei settori legati alla gestione, all’amministrazione, alla finanza, agli immobili, al diritto, all’ingegneria, alla direzione, all’edilizia o all’imprenditoria.",

      "Apprezza generalmente gli ambienti in cui le responsabilità sono chiaramente definite e gli sforzi vengono riconosciuti. Tuttavia, trae beneficio dal delegare, proteggere la propria energia e non trasformare ogni obiettivo in un obbligo.",
    ],

    placementsTitle:
      "Sole, Luna e Ascendente in Capricorno",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sole in Capricorno",

        text:
          "Il Sole in Capricorno costruisce la propria identità attraverso la disciplina, l’ambizione, la maturità e la creazione di risultati duraturi.",

        link:
          "Comprendere il Sole",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna in Capricorno",

        text:
          "La Luna in Capricorno ha bisogno di stabilità, controllo e riferimenti concreti per sentirsi emotivamente al sicuro.",

        link:
          "Comprendere la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Capricorno",

        text:
          "L’Ascendente Capricorno dona una presenza seria, riservata e determinata. Affronta generalmente la vita con prudenza, metodo e senso di responsabilità.",

        link:
          "Comprendere l’Ascendente",
      },
    ],

    compatibilityTitle:
      "Le compatibilità del Capricorno",

    compatibilityParagraphs: [
      "Le compatibilità astrologiche non dipendono mai soltanto dal segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

      "Alcune associazioni possono tuttavia sembrare naturalmente più armoniose quando condividono il bisogno di stabilità, lealtà, costanza e sicurezza.",
    ],

    compatibilityLabel:
      "Capricorno e",

    compatibilities: [
      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Toro e Capricorno condividono un bisogno di stabilità, sicurezza e costanza. La loro relazione può costruirsi lentamente su basi solide.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "La Vergine apprezza la serietà e l’affidabilità del Capricorno. Insieme possono organizzare la propria vita con metodo e costruire progetti duraturi.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Scorpione e Capricorno condividono una grande determinazione e un gusto per i legami profondi. La loro relazione può essere leale, intensa e resistente.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "I Pesci portano dolcezza, intuizione e immaginazione. Il Capricorno offre in cambio struttura, stabilità e sicurezza concreta.",
      },
    ],

    natalTitle:
      "Il Capricorno nel tuo tema natale",

    natalParagraphs: [
      "Il Capricorno non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene il Capricorno in una determinata casa astrologica.",

      "Questa casa mostra l’ambito della vita in cui cerchi di strutturare, assumerti responsabilità, avanzare con pazienza o costruire qualcosa di duraturo. La presenza di pianeti in Capricorno rafforza inoltre questa energia.",
    ],

    ctaKicker:
      "Scopri il tuo tema natale",

    ctaTitle:
      "Dove si trova il Capricorno nel tuo tema natale?",

    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire i tuoi segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

    ctaButton:
      "Creare il mio tema natale",

    faqKicker:
      "Domande frequenti",

    faqTitle:
      "Domande sul Capricorno",

    faq: [
      {
        question:
          "Quali sono le principali qualità del Capricorno?",

        answer:
          "Il Capricorno è spesso associato alla disciplina, alla perseveranza, all’affidabilità, alla pazienza, all’ambizione e al senso di responsabilità.",
      },

      {
        question:
          "Quali sono le principali sfide del Capricorno?",

        answer:
          "Il Capricorno può diventare rigido, troppo esigente con sé stesso o avere difficoltà a rilassarsi. La sua crescita passa attraverso maggiore flessibilità, fiducia e apertura emotiva.",
      },

      {
        question:
          "Quale pianeta governa il Capricorno?",

        answer:
          "Il Capricorno è governato da Saturno, pianeta tradizionalmente associato al tempo, alle responsabilità, ai limiti, alla disciplina, alla maturità e alla costruzione duratura.",
      },

      {
        question:
          "Qual è l’elemento del Capricorno?",

        answer:
          "Il Capricorno appartiene all’elemento Terra. Questo elemento è legato al realismo, alla stabilità, al senso pratico, alla pazienza e alla capacità di costruire risultati concreti.",
      },

      {
        question:
          "Come sapere se il Capricorno è importante nel mio tema natale?",

        answer:
          "Il Capricorno può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette anche di scoprire quale casa astrologica contiene il Capricorno.",
      },
    ],

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Capricórnio: personalidade, amor, trabalho e compatibilidades | Luna Astralis",

      description:
        "Descubra Capricórnio na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidades, Saturno, elemento Terra, Lua e Ascendente em Capricórnio.",

      ogTitle:
        "Capricórnio na astrologia: personalidade, amor e compatibilidades",

      ogDescription:
        "Guia completo de Capricórnio: personalidade, forças, desafios, relacionamentos, carreira, planeta Saturno e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Capricórnio | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Capricórnio, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Capricórnio na astrologia: personalidade, amor, trabalho e compatibilidades",

      description:
        "Guia completo sobre o signo de Capricórnio, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    badge:
      "♑ Décimo signo do zodíaco",

    title:
      "Capricórnio na astrologia",

    lead:
      "Capricórnio simboliza a ambição, a disciplina, a maturidade e a construção. Este signo de Terra procura construir uma vida sólida, assumir responsabilidades e avançar com paciência em direção a objetivos duradouros.",

    createChart:
      "Criar meu mapa astral grátis",

    discoverCapricorn:
      "Descobrir Capricórnio",

    personalityKicker:
      "Personalidade de Capricórnio",

    personalityTitle:
      "O que representa o signo de Capricórnio?",

    personalityParagraphs: [
      "Capricórnio é o décimo signo do zodíaco. Ele representa a estrutura, a responsabilidade, a ambição, o tempo e a capacidade de construir gradualmente algo duradouro.",

      "Uma pessoa fortemente marcada por Capricórnio geralmente procura controlar sua trajetória. Prefere avançar com prudência, prever as etapas necessárias e consolidar suas conquistas antes de assumir novos riscos.",

      "Essa energia traz resistência, maturidade e confiabilidade. No entanto, exige aprender a relaxar, acolher o inesperado e não medir o próprio valor apenas por resultados ou responsabilidades.",
    ],

    traitsTitle:
      "As principais características de Capricórnio",

    traits: [
      {
        title:
          "A ambição",

        symbol:
          "♑",

        text:
          "Capricórnio procura naturalmente construir algo duradouro. Avança com paciência, estabelece objetivos precisos e frequentemente aceita esforços constantes para alcançar o que deseja.",
      },

      {
        title:
          "A disciplina",

        symbol:
          "♄",

        text:
          "Este signo geralmente possui grande capacidade de se organizar e respeitar seus compromissos. Sabe que resultados sólidos exigem tempo, constância e um método claro.",
      },

      {
        title:
          "O senso de responsabilidade",

        symbol:
          "◆",

        text:
          "Capricórnio leva suas obrigações a sério. Procura ser confiável, proteger o que construiu e assumir plenamente as consequências de suas escolhas.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidade e planeta regente",

    pillars: [
      {
        symbol:
          "⛰️",

        title:
          "Elemento Terra",

        text:
          "A Terra traz estabilidade, realismo, paciência e senso prático. Ela leva Capricórnio a transformar suas ambições em realizações concretas.",
      },

      {
        symbol:
          "◇",

        title:
          "Modalidade cardinal",

        text:
          "A modalidade cardinal favorece a iniciativa, a organização e a ação. Ela dá a Capricórnio a vontade de liderar e estruturar.",
      },

      {
        symbol:
          "♄",

        title:
          "Planeta Saturno",

        text:
          "Saturno representa o tempo, os limites, a disciplina e a maturidade. Ele ensina a Capricórnio a paciência e a construção a longo prazo.",
      },
    ],

    strengthsTitle:
      "As forças e os desafios de Capricórnio",

    strengthsKicker:
      "Forças naturais",

    strengthsSubtitle:
      "O que Capricórnio oferece",

    strengths: [
      "Perseverança",
      "Disciplina",
      "Confiabilidade",
      "Paciência",
      "Ambição",
      "Senso de responsabilidade",
    ],

    challengesKicker:
      "Pontos de atenção",

    challengesSubtitle:
      "O que Capricórnio aprende",

    challenges: [
      "Rigidez",
      "Pessimismo",
      "Dificuldade para relaxar",
      "Necessidade de controle",
      "Exigência consigo mesmo",
      "Tendência a esconder a vulnerabilidade",
    ],

    loveTitle:
      "Capricórnio no amor",

    loveParagraphs: [
      "No amor, Capricórnio geralmente procura uma relação estável, confiável e construída ao longo do tempo. Pode demorar para se abrir porque prefere observar a solidez do vínculo antes de se comprometer plenamente.",

      "Quando oferece sua confiança, pode ser leal, protetor e profundamente constante. Costuma expressar seus sentimentos por meio da presença, do apoio concreto e da vontade de construir um futuro duradouro.",

      "Seu principal desafio é mostrar mais sensibilidade e não permitir que o trabalho ou as responsabilidades ocupem todo o espaço. Uma relação duradoura exige compartilhar emoções e criar também momentos de leveza.",
    ],

    workTitle:
      "Capricórnio no trabalho",

    workParagraphs: [
      "Na vida profissional, Capricórnio costuma se destacar pela seriedade, resistência e capacidade de trabalhar metodicamente em objetivos de longo prazo.",

      "Pode ser especialmente eficiente em áreas ligadas à gestão, administração, finanças, imóveis, direito, engenharia, liderança, construção ou empreendedorismo.",

      "Geralmente aprecia ambientes em que as responsabilidades são claramente definidas e os esforços são reconhecidos. No entanto, se beneficia ao delegar, preservar sua energia e não transformar cada objetivo em uma obrigação.",
    ],

    placementsTitle:
      "Sol, Lua e Ascendente em Capricórnio",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol em Capricórnio",

        text:
          "O Sol em Capricórnio constrói sua identidade por meio da disciplina, da ambição, da maturidade e da criação de resultados duradouros.",

        link:
          "Compreender o Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Lua em Capricórnio",

        text:
          "A Lua em Capricórnio precisa de estabilidade, controle e referências concretas para se sentir emocionalmente segura.",

        link:
          "Compreender a Lua",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente em Capricórnio",

        text:
          "O Ascendente em Capricórnio proporciona uma presença séria, reservada e determinada. Geralmente aborda a vida com prudência, método e senso de responsabilidade.",

        link:
          "Compreender o Ascendente",
      },
    ],

    compatibilityTitle:
      "As compatibilidades de Capricórnio",

    compatibilityParagraphs: [
      "As compatibilidades astrológicas nunca dependem apenas do signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

      "Algumas combinações podem, porém, parecer naturalmente mais harmoniosas quando compartilham uma necessidade de estabilidade, lealdade, constância e segurança.",
    ],

    compatibilityLabel:
      "Capricórnio e",

    compatibilities: [
      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Touro e Capricórnio compartilham uma necessidade de estabilidade, segurança e constância. Sua relação pode ser construída lentamente sobre bases sólidas.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Virgem aprecia a seriedade e a confiabilidade de Capricórnio. Juntos, podem organizar a vida com método e construir projetos duradouros.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Escorpião e Capricórnio compartilham grande determinação e interesse por vínculos profundos. Sua relação pode ser leal, intensa e resistente.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Peixes traz suavidade, intuição e imaginação. Capricórnio oferece em troca estrutura, estabilidade e segurança concreta.",
      },
    ],

    natalTitle:
      "Capricórnio no seu mapa natal",

    natalParagraphs: [
      "Capricórnio não diz respeito apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Capricórnio em uma determinada casa astrológica.",

      "Essa casa mostra a área da vida em que você procura estruturar, assumir responsabilidades, avançar com paciência ou construir algo duradouro. A presença de planetas em Capricórnio também reforça essa energia.",
    ],

    ctaKicker:
      "Descubra seu mapa natal",

    ctaTitle:
      "Onde Capricórnio está no seu mapa natal?",

    ctaText:
      "Gere gratuitamente seu mapa natal para descobrir seus signos, suas casas astrológicas, seu Ascendente e as posições dos planetas.",

    ctaButton:
      "Criar meu mapa natal",

    faqKicker:
      "Perguntas frequentes",

    faqTitle:
      "Perguntas sobre Capricórnio",

    faq: [
      {
        question:
          "Quais são as principais qualidades de Capricórnio?",

        answer:
          "Capricórnio costuma ser associado à disciplina, à perseverança, à confiabilidade, à paciência, à ambição e ao senso de responsabilidade.",
      },

      {
        question:
          "Quais são os principais desafios de Capricórnio?",

        answer:
          "Capricórnio pode se tornar rígido, exigente demais consigo mesmo ou ter dificuldade para relaxar. Seu crescimento passa por maior flexibilidade, confiança e abertura emocional.",
      },

      {
        question:
          "Qual planeta governa Capricórnio?",

        answer:
          "Capricórnio é governado por Saturno, planeta tradicionalmente associado ao tempo, às responsabilidades, aos limites, à disciplina, à maturidade e à construção duradoura.",
      },

      {
        question:
          "Qual é o elemento de Capricórnio?",

        answer:
          "Capricórnio pertence ao elemento Terra. Esse elemento está ligado ao realismo, à estabilidade, ao senso prático, à paciência e à capacidade de construir resultados concretos.",
      },

      {
        question:
          "Como saber se Capricórnio é importante no meu mapa natal?",

        answer:
          "Capricórnio pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo também mostra qual casa astrológica contém Capricórnio.",
      },
    ],

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
