// i18n/pages/astrologie/belier.ts

import type {
  Locale,
} from "@/i18n/config";

export type AriesTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type AriesPillar = {
  symbol: string;
  title: string;
  text: string;
};

export type AriesPlacement = {
  symbol: string;
  title: string;
  text: string;
  link: string;
};

export type AriesCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type AriesFaqItem = {
  question: string;
  answer: string;
};

export type AriesPageText = {
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
  discoverAries: string;

  personalityKicker: string;
  personalityTitle: string;
  personalityParagraphs: string[];

  traitsTitle: string;
  traits: AriesTrait[];

  pillarsTitle: string;
  pillars: AriesPillar[];

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
  placements: AriesPlacement[];

  compatibilityTitle: string;
  compatibilityParagraphs: string[];
  compatibilityLabel: string;
  compatibilities: AriesCompatibility[];

  natalTitle: string;
  natalParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: AriesFaqItem[];

  disclaimer: string;
};

export const BELIER_TRANSLATIONS:
  Record<
    Locale,
    AriesPageText
  > = {
  fr: {
    metadata: {
      title:
        "Bélier : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Bélier en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, planète Mars, élément Feu, Lune et Ascendant en Bélier.",

      ogTitle:
        "Le Bélier en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Bélier : caractère, forces, défis, relations, carrière, planète maîtresse et principales compatibilités.",

      twitterTitle:
        "Le signe du Bélier | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Bélier, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Bélier en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Bélier, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    badge:
      "♈ Premier signe du zodiaque",

    title:
      "Le Bélier en astrologie",

    lead:
      "Le Bélier symbolise l’élan initial, le courage, l’action et la volonté d’avancer. Ce signe de Feu cherche à expérimenter directement la vie et à ouvrir de nouveaux chemins.",

    createChart:
      "Créer ma carte du ciel gratuite",

    discoverAries:
      "Découvrir le Bélier",

    personalityKicker:
      "Personnalité du Bélier",

    personalityTitle:
      "Que représente le signe du Bélier ?",

    personalityParagraphs: [
      "Le Bélier est le premier signe du zodiaque. Il symbolise le commencement, l’impulsion, la naissance d’un désir et la volonté de passer à l’action. Son énergie est directe, spontanée et orientée vers l’expérience.",

      "Une personne marquée par le Bélier cherche généralement à avancer avec autonomie. Elle préfère souvent apprendre par l’action, tester ses propres limites et prendre rapidement des décisions.",

      "Cette énergie peut donner beaucoup de courage et d’initiative. Elle demande cependant d’apprendre à canaliser l’impatience, à tenir compte du rythme des autres et à poursuivre les projets après l’enthousiasme du départ.",
    ],

    traitsTitle:
      "Les grandes caractéristiques du Bélier",

    traits: [
      {
        title:
          "L’initiative",

        symbol:
          "✦",

        text:
          "Le Bélier possède un instinct naturel pour commencer, agir et ouvrir la voie. Il préfère généralement avancer plutôt que d’attendre que les circonstances changent.",
      },

      {
        title:
          "Le courage",

        symbol:
          "⚡",

        text:
          "Ce signe affronte souvent les difficultés avec franchise et énergie. Il peut prendre des risques lorsqu’il estime qu’une action est nécessaire.",
      },

      {
        title:
          "L’indépendance",

        symbol:
          "↑",

        text:
          "Le Bélier a besoin de conserver une certaine liberté de décision. Il se sent plus vivant lorsqu’il peut suivre son propre mouvement et défendre ses choix.",
      },
    ],

    pillarsTitle:
      "Élément, modalité et planète maîtresse",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Élément Feu",

        text:
          "Le Feu apporte enthousiasme, inspiration, spontanéité et besoin d’expression. Il pousse le Bélier à agir selon son instinct et sa volonté.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalité cardinale",

        text:
          "La modalité cardinale favorise le commencement, l’initiative et la capacité de lancer un mouvement ou un nouveau projet.",
      },

      {
        symbol:
          "♂",

        title:
          "Planète Mars",

        text:
          "Mars représente l’action, le désir, l’affirmation et l’énergie combative. Elle renforce le caractère direct et volontaire du Bélier.",
      },
    ],

    strengthsTitle:
      "Les forces et les défis du Bélier",

    strengthsKicker:
      "Forces naturelles",

    strengthsSubtitle:
      "Ce que le Bélier apporte",

    strengths: [
      "Courage",
      "Spontanéité",
      "Initiative",
      "Franchise",
      "Énergie",
      "Détermination",
    ],

    challengesKicker:
      "Points d’attention",

    challengesSubtitle:
      "Ce que le Bélier apprend",

    challenges: [
      "Impatience",
      "Impulsivité",
      "Réactions rapides",
      "Difficulté à ralentir",
      "Compétitivité",
      "Tendance à agir avant de réfléchir",
    ],

    loveTitle:
      "Le Bélier en amour",

    loveParagraphs: [
      "En amour, le Bélier recherche souvent une relation vivante, sincère et stimulante. Il apprécie la spontanéité, la franchise et le sentiment que la relation continue d’avancer.",

      "Il peut exprimer son intérêt de manière directe et intense. Lorsqu’il se sent attiré, il préfère généralement agir plutôt que cacher longtemps ses sentiments.",

      "Le principal défi consiste à préserver l’écoute et la patience. Le Bélier peut avoir besoin d’apprendre que l’intensité du début doit ensuite être soutenue par la présence, la constance et le respect du rythme de l’autre.",
    ],

    workTitle:
      "Le Bélier au travail",

    workParagraphs: [
      "Dans la vie professionnelle, le Bélier se distingue souvent par son sens de l’initiative. Il aime les environnements où il peut agir, décider, résoudre des problèmes et relever des défis.",

      "Il peut être particulièrement efficace dans les projets qui demandent du courage, de la rapidité, de l’autonomie ou une capacité à démarrer quelque chose de nouveau.",

      "Les tâches très répétitives ou les structures trop rigides peuvent toutefois réduire sa motivation. Il gagne à développer la planification, la patience et la continuité afin de transformer ses idées en réalisations durables.",
    ],

    placementsTitle:
      "Soleil, Lune et Ascendant en Bélier",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Soleil en Bélier",

        text:
          "Le Soleil en Bélier construit son identité par l’action, l’indépendance et le courage d’affirmer ses propres choix.",

        link:
          "Comprendre le Soleil",
      },

      {
        symbol:
          "🌙",

        title:
          "Lune en Bélier",

        text:
          "La Lune en Bélier ressent rapidement et réagit spontanément. Elle a besoin de mouvement et d’autonomie pour retrouver son équilibre.",

        link:
          "Comprendre la Lune",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendant Bélier",

        text:
          "L’Ascendant Bélier donne une présence énergique, directe et volontaire. Il aborde souvent la vie avec rapidité et audace.",

        link:
          "Comprendre l’Ascendant",
      },
    ],

    compatibilityTitle:
      "Les compatibilités du Bélier",

    compatibilityParagraphs: [
      "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

      "Certaines associations peuvent néanmoins sembler naturellement plus fluides en raison d’un rythme, d’un élément ou d’un besoin de liberté partagé.",
    ],

    compatibilityLabel:
      "Bélier et",

    compatibilities: [
      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Le Lion partage avec le Bélier une énergie chaleureuse, créative et expressive. Cette relation peut être dynamique, passionnée et stimulante.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Le Sagittaire comprend le besoin de liberté et de mouvement du Bélier. Ensemble, ils peuvent partager enthousiasme, projets et goût de l’aventure.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Le Gémeaux apporte curiosité, humour et souplesse. Il peut stimuler le Bélier intellectuellement et accompagner son besoin de nouveauté.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Le Verseau valorise l’indépendance et les idées nouvelles. Cette combinaison peut favoriser une relation vivante, libre et tournée vers l’avenir.",
      },
    ],

    natalTitle:
      "Le Bélier dans votre thème natal",

    natalParagraphs: [
      "Le Bélier ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Bélier dans une maison astrologique particulière. Cette maison montre le domaine de vie où vous pouvez agir avec davantage de spontanéité, d’audace ou d’initiative.",

      "La présence de planètes en Bélier renforce également cette énergie. Mars, Vénus, Mercure ou la Lune en Bélier ne s’expriment pas de la même manière, mais chacune adopte une qualité plus directe, active et volontaire.",
    ],

    ctaKicker:
      "Découvrez votre thème natal",

    ctaTitle:
      "Où se trouve le Bélier dans votre carte du ciel ?",

    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir vos signes, vos maisons astrologiques, votre Ascendant et les positions de vos planètes.",

    ctaButton:
      "Créer ma carte du ciel",

    faqKicker:
      "Questions fréquentes",

    faqTitle:
      "Questions sur le Bélier",

    faq: [
      {
        question:
          "Quelles sont les principales qualités du Bélier ?",

        answer:
          "Le Bélier est souvent associé au courage, à l’initiative, à la spontanéité, à la franchise et à la capacité de commencer rapidement de nouveaux projets.",
      },

      {
        question:
          "Quels sont les principaux défis du Bélier ?",

        answer:
          "Le Bélier peut parfois agir trop rapidement, manquer de patience ou réagir avec intensité. Son évolution passe souvent par l’apprentissage du recul et de la constance.",
      },

      {
        question:
          "Quelle planète gouverne le Bélier ?",

        answer:
          "Le Bélier est gouverné par Mars, planète traditionnellement associée à l’action, au désir, à l’affirmation, au courage et à l’énergie combative.",
      },

      {
        question:
          "Quel est l’élément du Bélier ?",

        answer:
          "Le Bélier appartient à l’élément Feu. Cet élément est lié à l’élan, à l’enthousiasme, à la créativité, à la volonté et au besoin d’expression.",
      },

      {
        question:
          "Comment savoir si le Bélier est important dans mon thème natal ?",

        answer:
          "Le Bélier peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet de le vérifier.",
      },
    ],

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Aries: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Aries in astrology: personality, strengths, challenges, love, career, compatibility, Mars, the Fire element, Aries Moon and Aries Rising.",

      ogTitle:
        "Aries in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Aries: personality, strengths, challenges, relationships, career, ruling planet and major astrological compatibility.",

      twitterTitle:
        "The Aries Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Aries personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Aries in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Aries, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    badge:
      "♈ First sign of the zodiac",

    title:
      "Aries in Astrology",

    lead:
      "Aries symbolizes the initial impulse, courage, action and the desire to move forward. This Fire sign seeks to experience life directly and open new paths.",

    createChart:
      "Create my free birth chart",

    discoverAries:
      "Discover Aries",

    personalityKicker:
      "Aries personality",

    personalityTitle:
      "What does the Aries zodiac sign represent?",

    personalityParagraphs: [
      "Aries is the first sign of the zodiac. It symbolizes beginnings, impulse, the birth of desire and the willingness to take action. Its energy is direct, spontaneous and focused on experience.",

      "A person strongly influenced by Aries generally seeks to move forward independently. They often prefer to learn through action, test their own limits and make decisions quickly.",

      "This energy can provide great courage and initiative. It also requires learning to manage impatience, respect the pace of others and continue projects after the initial enthusiasm has passed.",
    ],

    traitsTitle:
      "The main characteristics of Aries",

    traits: [
      {
        title:
          "Initiative",

        symbol:
          "✦",

        text:
          "Aries has a natural instinct to begin, act and lead the way. It generally prefers moving forward rather than waiting for circumstances to change.",
      },

      {
        title:
          "Courage",

        symbol:
          "⚡",

        text:
          "This sign often faces difficulties with honesty and energy. It may take risks when it believes action is necessary.",
      },

      {
        title:
          "Independence",

        symbol:
          "↑",

        text:
          "Aries needs to preserve a certain freedom of decision. It feels more alive when it can follow its own momentum and defend its choices.",
      },
    ],

    pillarsTitle:
      "Element, modality and ruling planet",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Fire element",

        text:
          "Fire brings enthusiasm, inspiration, spontaneity and a need for expression. It encourages Aries to act according to instinct and personal will.",
      },

      {
        symbol:
          "✦",

        title:
          "Cardinal modality",

        text:
          "The cardinal modality encourages beginnings, initiative and the ability to launch a movement or a new project.",
      },

      {
        symbol:
          "♂",

        title:
          "Planet Mars",

        text:
          "Mars represents action, desire, assertion and fighting energy. It strengthens the direct and determined nature of Aries.",
      },
    ],

    strengthsTitle:
      "Aries strengths and challenges",

    strengthsKicker:
      "Natural strengths",

    strengthsSubtitle:
      "What Aries brings",

    strengths: [
      "Courage",
      "Spontaneity",
      "Initiative",
      "Honesty",
      "Energy",
      "Determination",
    ],

    challengesKicker:
      "Points of attention",

    challengesSubtitle:
      "What Aries learns",

    challenges: [
      "Impatience",
      "Impulsiveness",
      "Quick reactions",
      "Difficulty slowing down",
      "Competitiveness",
      "Acting before thinking",
    ],

    loveTitle:
      "Aries in love",

    loveParagraphs: [
      "In love, Aries often seeks a lively, sincere and stimulating relationship. It appreciates spontaneity, honesty and the feeling that the relationship continues to move forward.",

      "Aries may express interest directly and intensely. When attracted to someone, it generally prefers taking action rather than hiding its feelings for a long time.",

      "The main challenge is preserving listening and patience. Aries may need to learn that the intensity of the beginning must later be supported by presence, consistency and respect for the other person’s pace.",
    ],

    workTitle:
      "Aries at work",

    workParagraphs: [
      "In professional life, Aries often stands out through initiative. It enjoys environments where it can act, decide, solve problems and face challenges.",

      "Aries can be especially effective in projects requiring courage, speed, independence or the ability to begin something new.",

      "Very repetitive tasks or overly rigid structures may reduce motivation. Aries benefits from developing planning, patience and continuity in order to transform ideas into lasting achievements.",
    ],

    placementsTitle:
      "Sun, Moon and Rising in Aries",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sun in Aries",

        text:
          "The Sun in Aries builds identity through action, independence and the courage to assert personal choices.",

        link:
          "Understand the Sun",
      },

      {
        symbol:
          "🌙",

        title:
          "Moon in Aries",

        text:
          "The Moon in Aries feels quickly and reacts spontaneously. It needs movement and independence to restore emotional balance.",

        link:
          "Understand the Moon",
      },

      {
        symbol:
          "↑",

        title:
          "Aries Rising",

        text:
          "Aries Rising gives an energetic, direct and determined presence. It often approaches life with speed and boldness.",

        link:
          "Understand the Ascendant",
      },
    ],

    compatibilityTitle:
      "Aries compatibility",

    compatibilityParagraphs: [
      "Astrological compatibility is never based solely on the Sun sign. The Moon, Venus, Mars, the Ascendant and the aspects between both charts provide essential information.",

      "Some combinations may nevertheless feel naturally smoother because of a shared pace, element or need for freedom.",
    ],

    compatibilityLabel:
      "Aries and",

    compatibilities: [
      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo shares a warm, creative and expressive energy with Aries. This relationship can be dynamic, passionate and stimulating.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Sagittarius understands Aries’ need for freedom and movement. Together, they can share enthusiasm, projects and a taste for adventure.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Gemini brings curiosity, humor and flexibility. It can stimulate Aries intellectually and support its need for novelty.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Aquarius values independence and new ideas. This combination can encourage a lively, free and future-oriented relationship.",
      },
    ],

    natalTitle:
      "Aries in your birth chart",

    natalParagraphs: [
      "Aries does not concern only people born under this sign. Every birth chart contains Aries in a particular astrological house. This house shows the area of life in which you may act with greater spontaneity, boldness or initiative.",

      "Planets located in Aries also strengthen this energy. Mars, Venus, Mercury or the Moon in Aries do not express themselves in the same way, but each takes on a more direct, active and determined quality.",
    ],

    ctaKicker:
      "Discover your birth chart",

    ctaTitle:
      "Where is Aries in your birth chart?",

    ctaText:
      "Generate your free birth chart to discover your signs, astrological houses, Ascendant and planetary positions.",

    ctaButton:
      "Create my birth chart",

    faqKicker:
      "Frequently asked questions",

    faqTitle:
      "Questions about Aries",

    faq: [
      {
        question:
          "What are the main qualities of Aries?",

        answer:
          "Aries is often associated with courage, initiative, spontaneity, honesty and the ability to begin new projects quickly.",
      },

      {
        question:
          "What are the main challenges of Aries?",

        answer:
          "Aries may sometimes act too quickly, lack patience or react intensely. Its growth often involves learning perspective and consistency.",
      },

      {
        question:
          "Which planet rules Aries?",

        answer:
          "Aries is ruled by Mars, the planet traditionally associated with action, desire, assertion, courage and fighting energy.",
      },

      {
        question:
          "What is the element of Aries?",

        answer:
          "Aries belongs to the Fire element. This element is associated with momentum, enthusiasm, creativity, willpower and the need for expression.",
      },

      {
        question:
          "How can I know whether Aries is important in my birth chart?",

        answer:
          "Aries may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart can confirm it.",
      },
    ],

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Aries: personalidad, amor, trabajo y compatibilidades | Luna Astralis",

      description:
        "Descubre el signo de Aries en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidades, planeta Marte, elemento Fuego, Luna y Ascendente Aries.",

      ogTitle:
        "Aries en astrología: personalidad, amor y compatibilidades",

      ogDescription:
        "Guía completa del signo de Aries: carácter, fortalezas, desafíos, relaciones, carrera, planeta regente y principales compatibilidades.",

      twitterTitle:
        "El signo de Aries | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Aries, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Aries en astrología: personalidad, amor, trabajo y compatibilidades",

      description:
        "Guía completa dedicada al signo de Aries, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    badge:
      "♈ Primer signo del zodiaco",

    title:
      "Aries en astrología",

    lead:
      "Aries simboliza el impulso inicial, el valor, la acción y la voluntad de avanzar. Este signo de Fuego busca experimentar la vida directamente y abrir nuevos caminos.",

    createChart:
      "Crear mi carta natal gratis",

    discoverAries:
      "Descubrir Aries",

    personalityKicker:
      "Personalidad de Aries",

    personalityTitle:
      "¿Qué representa el signo de Aries?",

    personalityParagraphs: [
      "Aries es el primer signo del zodiaco. Simboliza el comienzo, el impulso, el nacimiento de un deseo y la voluntad de pasar a la acción. Su energía es directa, espontánea y orientada a la experiencia.",

      "Una persona marcada por Aries suele buscar avanzar con autonomía. A menudo prefiere aprender mediante la acción, poner a prueba sus propios límites y tomar decisiones rápidamente.",

      "Esta energía puede aportar mucho valor e iniciativa. Sin embargo, requiere aprender a controlar la impaciencia, respetar el ritmo de los demás y continuar los proyectos después del entusiasmo inicial.",
    ],

    traitsTitle:
      "Las principales características de Aries",

    traits: [
      {
        title:
          "La iniciativa",

        symbol:
          "✦",

        text:
          "Aries posee un instinto natural para comenzar, actuar y abrir camino. Generalmente prefiere avanzar antes que esperar a que cambien las circunstancias.",
      },

      {
        title:
          "El valor",

        symbol:
          "⚡",

        text:
          "Este signo suele afrontar las dificultades con franqueza y energía. Puede asumir riesgos cuando considera que una acción es necesaria.",
      },

      {
        title:
          "La independencia",

        symbol:
          "↑",

        text:
          "Aries necesita conservar cierta libertad de decisión. Se siente más vivo cuando puede seguir su propio impulso y defender sus elecciones.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidad y planeta regente",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Elemento Fuego",

        text:
          "El Fuego aporta entusiasmo, inspiración, espontaneidad y necesidad de expresión. Impulsa a Aries a actuar según su instinto y su voluntad.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalidad cardinal",

        text:
          "La modalidad cardinal favorece los comienzos, la iniciativa y la capacidad de iniciar un movimiento o un nuevo proyecto.",
      },

      {
        symbol:
          "♂",

        title:
          "Planeta Marte",

        text:
          "Marte representa la acción, el deseo, la afirmación y la energía combativa. Refuerza el carácter directo y voluntarioso de Aries.",
      },
    ],

    strengthsTitle:
      "Las fortalezas y los desafíos de Aries",

    strengthsKicker:
      "Fortalezas naturales",

    strengthsSubtitle:
      "Lo que aporta Aries",

    strengths: [
      "Valor",
      "Espontaneidad",
      "Iniciativa",
      "Franqueza",
      "Energía",
      "Determinación",
    ],

    challengesKicker:
      "Puntos de atención",

    challengesSubtitle:
      "Lo que aprende Aries",

    challenges: [
      "Impaciencia",
      "Impulsividad",
      "Reacciones rápidas",
      "Dificultad para bajar el ritmo",
      "Competitividad",
      "Tendencia a actuar antes de pensar",
    ],

    loveTitle:
      "Aries en el amor",

    loveParagraphs: [
      "En el amor, Aries suele buscar una relación viva, sincera y estimulante. Valora la espontaneidad, la franqueza y la sensación de que la relación continúa avanzando.",

      "Puede expresar su interés de manera directa e intensa. Cuando se siente atraído, generalmente prefiere actuar antes que ocultar sus sentimientos durante mucho tiempo.",

      "El principal desafío consiste en mantener la escucha y la paciencia. Aries puede necesitar aprender que la intensidad del comienzo debe sostenerse después mediante la presencia, la constancia y el respeto por el ritmo de la otra persona.",
    ],

    workTitle:
      "Aries en el trabajo",

    workParagraphs: [
      "En la vida profesional, Aries suele destacar por su sentido de la iniciativa. Le gustan los entornos donde puede actuar, decidir, resolver problemas y afrontar desafíos.",

      "Puede ser especialmente eficaz en proyectos que requieren valor, rapidez, autonomía o la capacidad de comenzar algo nuevo.",

      "Las tareas muy repetitivas o las estructuras demasiado rígidas pueden reducir su motivación. Le conviene desarrollar la planificación, la paciencia y la continuidad para convertir sus ideas en logros duraderos.",
    ],

    placementsTitle:
      "Sol, Luna y Ascendente en Aries",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol en Aries",

        text:
          "El Sol en Aries construye su identidad mediante la acción, la independencia y el valor de afirmar sus propias decisiones.",

        link:
          "Comprender el Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna en Aries",

        text:
          "La Luna en Aries siente rápidamente y reacciona de forma espontánea. Necesita movimiento y autonomía para recuperar el equilibrio.",

        link:
          "Comprender la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Aries",

        text:
          "El Ascendente Aries aporta una presencia enérgica, directa y voluntariosa. Suele abordar la vida con rapidez y audacia.",

        link:
          "Comprender el Ascendente",
      },
    ],

    compatibilityTitle:
      "Las compatibilidades de Aries",

    compatibilityParagraphs: [
      "Las compatibilidades astrológicas nunca dependen únicamente del signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

      "Sin embargo, algunas asociaciones pueden parecer naturalmente más fluidas debido a un ritmo, un elemento o una necesidad de libertad compartidos.",
    ],

    compatibilityLabel:
      "Aries y",

    compatibilities: [
      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Leo comparte con Aries una energía cálida, creativa y expresiva. Esta relación puede ser dinámica, apasionada y estimulante.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Sagitario comprende la necesidad de libertad y movimiento de Aries. Juntos pueden compartir entusiasmo, proyectos y gusto por la aventura.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Géminis aporta curiosidad, humor y flexibilidad. Puede estimular intelectualmente a Aries y acompañar su necesidad de novedad.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Acuario valora la independencia y las ideas nuevas. Esta combinación puede favorecer una relación viva, libre y orientada hacia el futuro.",
      },
    ],

    natalTitle:
      "Aries en tu carta natal",

    natalParagraphs: [
      "Aries no se refiere únicamente a las personas nacidas bajo este signo. Cada carta natal contiene Aries en una casa astrológica determinada. Esta casa muestra el ámbito de vida en el que puedes actuar con mayor espontaneidad, audacia o iniciativa.",

      "La presencia de planetas en Aries también refuerza esta energía. Marte, Venus, Mercurio o la Luna en Aries no se expresan de la misma manera, pero cada uno adopta una cualidad más directa, activa y voluntariosa.",
    ],

    ctaKicker:
      "Descubre tu carta natal",

    ctaTitle:
      "¿Dónde se encuentra Aries en tu carta natal?",

    ctaText:
      "Genera gratuitamente tu carta natal para descubrir tus signos, tus casas astrológicas, tu Ascendente y las posiciones de tus planetas.",

    ctaButton:
      "Crear mi carta natal",

    faqKicker:
      "Preguntas frecuentes",

    faqTitle:
      "Preguntas sobre Aries",

    faq: [
      {
        question:
          "¿Cuáles son las principales cualidades de Aries?",

        answer:
          "Aries suele asociarse con el valor, la iniciativa, la espontaneidad, la franqueza y la capacidad de comenzar rápidamente nuevos proyectos.",
      },

      {
        question:
          "¿Cuáles son los principales desafíos de Aries?",

        answer:
          "Aries puede actuar demasiado rápido, carecer de paciencia o reaccionar con intensidad. Su evolución suele implicar aprender perspectiva y constancia.",
      },

      {
        question:
          "¿Qué planeta gobierna Aries?",

        answer:
          "Aries está regido por Marte, planeta tradicionalmente asociado con la acción, el deseo, la afirmación, el valor y la energía combativa.",
      },

      {
        question:
          "¿Cuál es el elemento de Aries?",

        answer:
          "Aries pertenece al elemento Fuego. Este elemento está relacionado con el impulso, el entusiasmo, la creatividad, la voluntad y la necesidad de expresión.",
      },

      {
        question:
          "¿Cómo saber si Aries es importante en mi carta natal?",

        answer:
          "Aries puede ser importante si tu Sol, tu Luna, tu Ascendente o varios planetas se encuentran en este signo. Una carta natal completa permite comprobarlo.",
      },
    ],

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Widder: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Widder in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Mars, Feuerelement, Widder-Mond und Widder-Aszendent.",

      ogTitle:
        "Der Widder in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Widder: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Herrscherplanet und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Widder | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit des Widders, seine Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Der Widder in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Sternzeichen Widder, seinen Stärken, Herausforderungen, Beziehungen, beruflichen Themen und wichtigsten astrologischen Eigenschaften.",
    },

    badge:
      "♈ Erstes Tierkreiszeichen",

    title:
      "Der Widder in der Astrologie",

    lead:
      "Der Widder symbolisiert den ersten Impuls, Mut, Handlung und den Willen, voranzugehen. Dieses Feuerzeichen möchte das Leben unmittelbar erfahren und neue Wege eröffnen.",

    createChart:
      "Mein kostenloses Geburtshoroskop erstellen",

    discoverAries:
      "Den Widder entdecken",

    personalityKicker:
      "Persönlichkeit des Widders",

    personalityTitle:
      "Wofür steht das Sternzeichen Widder?",

    personalityParagraphs: [
      "Der Widder ist das erste Tierkreiszeichen. Er symbolisiert den Anfang, den Impuls, die Entstehung eines Wunsches und den Willen zum Handeln. Seine Energie ist direkt, spontan und auf Erfahrung ausgerichtet.",

      "Ein Mensch mit starker Widder-Betonung möchte meist selbstständig vorankommen. Er lernt häufig lieber durch Handeln, testet seine eigenen Grenzen und trifft Entscheidungen schnell.",

      "Diese Energie kann großen Mut und viel Initiative verleihen. Gleichzeitig verlangt sie, Ungeduld zu lenken, das Tempo anderer zu berücksichtigen und Projekte nach der anfänglichen Begeisterung weiterzuführen.",
    ],

    traitsTitle:
      "Die wichtigsten Eigenschaften des Widders",

    traits: [
      {
        title:
          "Initiative",

        symbol:
          "✦",

        text:
          "Der Widder besitzt einen natürlichen Instinkt, zu beginnen, zu handeln und den Weg zu öffnen. Er geht meist lieber voran, als darauf zu warten, dass sich die Umstände verändern.",
      },

      {
        title:
          "Mut",

        symbol:
          "⚡",

        text:
          "Dieses Zeichen begegnet Schwierigkeiten häufig mit Offenheit und Energie. Es kann Risiken eingehen, wenn es eine Handlung für notwendig hält.",
      },

      {
        title:
          "Unabhängigkeit",

        symbol:
          "↑",

        text:
          "Der Widder braucht eine gewisse Entscheidungsfreiheit. Er fühlt sich lebendiger, wenn er seinem eigenen Impuls folgen und seine Entscheidungen verteidigen kann.",
      },
    ],

    pillarsTitle:
      "Element, Modalität und Herrscherplanet",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Element Feuer",

        text:
          "Feuer bringt Begeisterung, Inspiration, Spontaneität und Ausdrucksbedürfnis. Es führt den Widder dazu, nach Instinkt und persönlichem Willen zu handeln.",
      },

      {
        symbol:
          "✦",

        title:
          "Kardinale Modalität",

        text:
          "Die kardinale Modalität fördert Anfänge, Initiative und die Fähigkeit, eine Bewegung oder ein neues Projekt zu starten.",
      },

      {
        symbol:
          "♂",

        title:
          "Planet Mars",

        text:
          "Mars steht für Handlung, Verlangen, Durchsetzung und kämpferische Energie. Er verstärkt den direkten und willensstarken Charakter des Widders.",
      },
    ],

    strengthsTitle:
      "Stärken und Herausforderungen des Widders",

    strengthsKicker:
      "Natürliche Stärken",

    strengthsSubtitle:
      "Was der Widder einbringt",

    strengths: [
      "Mut",
      "Spontaneität",
      "Initiative",
      "Offenheit",
      "Energie",
      "Entschlossenheit",
    ],

    challengesKicker:
      "Wichtige Lernfelder",

    challengesSubtitle:
      "Was der Widder lernt",

    challenges: [
      "Ungeduld",
      "Impulsivität",
      "Schnelle Reaktionen",
      "Schwierigkeit, langsamer zu werden",
      "Wettbewerbsorientierung",
      "Handeln vor dem Nachdenken",
    ],

    loveTitle:
      "Der Widder in der Liebe",

    loveParagraphs: [
      "In der Liebe sucht der Widder häufig eine lebendige, ehrliche und anregende Beziehung. Er schätzt Spontaneität, Offenheit und das Gefühl, dass sich die Beziehung weiterentwickelt.",

      "Der Widder kann sein Interesse direkt und intensiv ausdrücken. Wenn er sich angezogen fühlt, handelt er meist lieber, als seine Gefühle lange zu verbergen.",

      "Die größte Herausforderung besteht darin, zuzuhören und geduldig zu bleiben. Der Widder muss möglicherweise lernen, dass die Intensität des Anfangs später durch Präsenz, Beständigkeit und Respekt vor dem Tempo des anderen getragen werden muss.",
    ],

    workTitle:
      "Der Widder im Beruf",

    workParagraphs: [
      "Im Berufsleben zeichnet sich der Widder oft durch Initiative aus. Er mag Umgebungen, in denen er handeln, entscheiden, Probleme lösen und Herausforderungen annehmen kann.",

      "Er kann besonders erfolgreich in Projekten sein, die Mut, Schnelligkeit, Selbstständigkeit oder die Fähigkeit verlangen, etwas Neues zu beginnen.",

      "Sehr wiederholende Aufgaben oder zu starre Strukturen können seine Motivation verringern. Der Widder profitiert davon, Planung, Geduld und Kontinuität zu entwickeln, um Ideen in dauerhafte Ergebnisse zu verwandeln.",
    ],

    placementsTitle:
      "Sonne, Mond und Aszendent im Widder",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sonne im Widder",

        text:
          "Die Sonne im Widder entwickelt ihre Identität durch Handlung, Unabhängigkeit und den Mut, eigene Entscheidungen zu vertreten.",

        link:
          "Die Sonne verstehen",
      },

      {
        symbol:
          "🌙",

        title:
          "Mond im Widder",

        text:
          "Der Mond im Widder fühlt schnell und reagiert spontan. Er braucht Bewegung und Selbstständigkeit, um sein inneres Gleichgewicht wiederzufinden.",

        link:
          "Den Mond verstehen",
      },

      {
        symbol:
          "↑",

        title:
          "Widder-Aszendent",

        text:
          "Der Widder-Aszendent vermittelt eine energische, direkte und willensstarke Präsenz. Er begegnet dem Leben häufig mit Schnelligkeit und Mut.",

        link:
          "Den Aszendenten verstehen",
      },
    ],

    compatibilityTitle:
      "Kompatibilität des Widders",

    compatibilityParagraphs: [
      "Astrologische Kompatibilität beruht niemals allein auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

      "Einige Verbindungen können dennoch natürlicher wirken, wenn ein gemeinsames Tempo, Element oder Freiheitsbedürfnis besteht.",
    ],

    compatibilityLabel:
      "Widder und",

    compatibilities: [
      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Der Löwe teilt mit dem Widder eine warme, kreative und ausdrucksstarke Energie. Diese Beziehung kann dynamisch, leidenschaftlich und anregend sein.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Der Schütze versteht das Bedürfnis des Widders nach Freiheit und Bewegung. Gemeinsam können sie Begeisterung, Projekte und Abenteuerlust teilen.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Die Zwillinge bringen Neugier, Humor und Flexibilität. Sie können den Widder geistig anregen und sein Bedürfnis nach Neuem unterstützen.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Der Wassermann schätzt Unabhängigkeit und neue Ideen. Diese Verbindung kann eine lebendige, freie und zukunftsorientierte Beziehung fördern.",
      },
    ],

    natalTitle:
      "Der Widder in Ihrem Geburtshoroskop",

    natalParagraphs: [
      "Der Widder betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Widder in einem bestimmten astrologischen Haus. Dieses Haus zeigt den Lebensbereich, in dem Sie spontaner, mutiger oder initiativer handeln können.",

      "Planeten im Widder verstärken diese Energie ebenfalls. Mars, Venus, Merkur oder Mond im Widder drücken sich unterschiedlich aus, doch jeder erhält eine direktere, aktivere und willensstärkere Qualität.",
    ],

    ctaKicker:
      "Entdecken Sie Ihr Geburtshoroskop",

    ctaTitle:
      "Wo befindet sich der Widder in Ihrem Geburtshoroskop?",

    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, Häuser, Ihren Aszendenten und die Positionen Ihrer Planeten.",

    ctaButton:
      "Mein Geburtshoroskop erstellen",

    faqKicker:
      "Häufige Fragen",

    faqTitle:
      "Fragen zum Widder",

    faq: [
      {
        question:
          "Was sind die wichtigsten Eigenschaften des Widders?",

        answer:
          "Der Widder wird häufig mit Mut, Initiative, Spontaneität, Offenheit und der Fähigkeit verbunden, neue Projekte schnell zu beginnen.",
      },

      {
        question:
          "Was sind die größten Herausforderungen des Widders?",

        answer:
          "Der Widder kann manchmal zu schnell handeln, ungeduldig sein oder intensiv reagieren. Seine Entwicklung besteht häufig darin, Abstand und Beständigkeit zu lernen.",
      },

      {
        question:
          "Welcher Planet regiert den Widder?",

        answer:
          "Der Widder wird von Mars regiert, dem Planeten, der traditionell mit Handlung, Verlangen, Durchsetzung, Mut und kämpferischer Energie verbunden ist.",
      },

      {
        question:
          "Welches Element gehört zum Widder?",

        answer:
          "Der Widder gehört zum Element Feuer. Dieses Element steht für Schwung, Begeisterung, Kreativität, Willenskraft und Ausdrucksbedürfnis.",
      },

      {
        question:
          "Wie erkenne ich, ob der Widder in meinem Geburtshoroskop wichtig ist?",

        answer:
          "Der Widder kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop kann dies zeigen.",
      },
    ],

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Ariete: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri il segno dell’Ariete in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Marte, elemento Fuoco, Luna e Ascendente Ariete.",

      ogTitle:
        "L’Ariete in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa all’Ariete: carattere, punti di forza, sfide, relazioni, carriera, pianeta governatore e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno dell’Ariete | Luna Astralis",

      twitterDescription:
        "Scopri la personalità dell’Ariete, le sue qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "L’Ariete in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al segno dell’Ariete, alle sue qualità, sfide, relazioni, carriera e principali caratteristiche astrologiche.",
    },

    badge:
      "♈ Primo segno dello zodiaco",

    title:
      "L’Ariete in astrologia",

    lead:
      "L’Ariete simboleggia l’impulso iniziale, il coraggio, l’azione e la volontà di avanzare. Questo segno di Fuoco cerca di vivere direttamente l’esperienza e aprire nuove strade.",

    createChart:
      "Creare gratuitamente il mio tema natale",

    discoverAries:
      "Scoprire l’Ariete",

    personalityKicker:
      "Personalità dell’Ariete",

    personalityTitle:
      "Che cosa rappresenta il segno dell’Ariete?",

    personalityParagraphs: [
      "L’Ariete è il primo segno dello zodiaco. Simboleggia l’inizio, l’impulso, la nascita di un desiderio e la volontà di passare all’azione. La sua energia è diretta, spontanea e orientata all’esperienza.",

      "Una persona fortemente influenzata dall’Ariete cerca generalmente di avanzare in autonomia. Spesso preferisce imparare attraverso l’azione, mettere alla prova i propri limiti e prendere decisioni rapidamente.",

      "Questa energia può offrire molto coraggio e iniziativa. Richiede però di imparare a gestire l’impazienza, rispettare il ritmo degli altri e continuare i progetti dopo l’entusiasmo iniziale.",
    ],

    traitsTitle:
      "Le principali caratteristiche dell’Ariete",

    traits: [
      {
        title:
          "L’iniziativa",

        symbol:
          "✦",

        text:
          "L’Ariete possiede un istinto naturale per iniziare, agire e aprire la strada. Generalmente preferisce avanzare piuttosto che aspettare che le circostanze cambino.",
      },

      {
        title:
          "Il coraggio",

        symbol:
          "⚡",

        text:
          "Questo segno affronta spesso le difficoltà con franchezza ed energia. Può correre rischi quando ritiene necessaria un’azione.",
      },

      {
        title:
          "L’indipendenza",

        symbol:
          "↑",

        text:
          "L’Ariete ha bisogno di conservare una certa libertà decisionale. Si sente più vivo quando può seguire il proprio impulso e difendere le proprie scelte.",
      },
    ],

    pillarsTitle:
      "Elemento, modalità e pianeta governatore",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Elemento Fuoco",

        text:
          "Il Fuoco porta entusiasmo, ispirazione, spontaneità e bisogno di espressione. Spinge l’Ariete ad agire secondo il proprio istinto e la propria volontà.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalità cardinale",

        text:
          "La modalità cardinale favorisce gli inizi, l’iniziativa e la capacità di avviare un movimento o un nuovo progetto.",
      },

      {
        symbol:
          "♂",

        title:
          "Pianeta Marte",

        text:
          "Marte rappresenta l’azione, il desiderio, l’affermazione e l’energia combattiva. Rafforza il carattere diretto e determinato dell’Ariete.",
      },
    ],

    strengthsTitle:
      "I punti di forza e le sfide dell’Ariete",

    strengthsKicker:
      "Punti di forza naturali",

    strengthsSubtitle:
      "Ciò che porta l’Ariete",

    strengths: [
      "Coraggio",
      "Spontaneità",
      "Iniziativa",
      "Franchezza",
      "Energia",
      "Determinazione",
    ],

    challengesKicker:
      "Punti di attenzione",

    challengesSubtitle:
      "Ciò che impara l’Ariete",

    challenges: [
      "Impazienza",
      "Impulsività",
      "Reazioni rapide",
      "Difficoltà a rallentare",
      "Competitività",
      "Tendenza ad agire prima di riflettere",
    ],

    loveTitle:
      "L’Ariete in amore",

    loveParagraphs: [
      "In amore, l’Ariete cerca spesso una relazione viva, sincera e stimolante. Apprezza la spontaneità, la franchezza e la sensazione che la relazione continui ad avanzare.",

      "Può esprimere il proprio interesse in modo diretto e intenso. Quando si sente attratto, generalmente preferisce agire piuttosto che nascondere a lungo i propri sentimenti.",

      "La sfida principale consiste nel mantenere ascolto e pazienza. L’Ariete può aver bisogno di imparare che l’intensità iniziale deve poi essere sostenuta dalla presenza, dalla costanza e dal rispetto del ritmo dell’altra persona.",
    ],

    workTitle:
      "L’Ariete nel lavoro",

    workParagraphs: [
      "Nella vita professionale, l’Ariete si distingue spesso per il senso dell’iniziativa. Ama gli ambienti in cui può agire, decidere, risolvere problemi e affrontare sfide.",

      "Può essere particolarmente efficace nei progetti che richiedono coraggio, rapidità, autonomia o la capacità di iniziare qualcosa di nuovo.",

      "Le attività molto ripetitive o le strutture troppo rigide possono però ridurre la sua motivazione. Trae beneficio dallo sviluppare pianificazione, pazienza e continuità per trasformare le idee in risultati duraturi.",
    ],

    placementsTitle:
      "Sole, Luna e Ascendente in Ariete",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sole in Ariete",

        text:
          "Il Sole in Ariete costruisce la propria identità attraverso l’azione, l’indipendenza e il coraggio di affermare le proprie scelte.",

        link:
          "Comprendere il Sole",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna in Ariete",

        text:
          "La Luna in Ariete sente rapidamente e reagisce spontaneamente. Ha bisogno di movimento e autonomia per ritrovare il proprio equilibrio.",

        link:
          "Comprendere la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Ariete",

        text:
          "L’Ascendente Ariete dona una presenza energica, diretta e determinata. Affronta spesso la vita con rapidità e audacia.",

        link:
          "Comprendere l’Ascendente",
      },
    ],

    compatibilityTitle:
      "Le compatibilità dell’Ariete",

    compatibilityParagraphs: [
      "Le compatibilità astrologiche non dipendono mai soltanto dal segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

      "Alcune associazioni possono comunque sembrare naturalmente più fluide grazie a un ritmo, un elemento o un bisogno di libertà condiviso.",
    ],

    compatibilityLabel:
      "Ariete e",

    compatibilities: [
      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Il Leone condivide con l’Ariete un’energia calda, creativa ed espressiva. Questa relazione può essere dinamica, appassionata e stimolante.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Il Sagittario comprende il bisogno di libertà e movimento dell’Ariete. Insieme possono condividere entusiasmo, progetti e gusto per l’avventura.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "I Gemelli portano curiosità, umorismo e flessibilità. Possono stimolare intellettualmente l’Ariete e accompagnare il suo bisogno di novità.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "L’Acquario valorizza l’indipendenza e le idee nuove. Questa combinazione può favorire una relazione viva, libera e orientata al futuro.",
      },
    ],

    natalTitle:
      "L’Ariete nel tuo tema natale",

    natalParagraphs: [
      "L’Ariete non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene l’Ariete in una determinata casa astrologica. Questa casa mostra l’ambito della vita in cui puoi agire con maggiore spontaneità, audacia o iniziativa.",

      "La presenza di pianeti in Ariete rafforza inoltre questa energia. Marte, Venere, Mercurio o la Luna in Ariete non si esprimono allo stesso modo, ma ciascuno assume una qualità più diretta, attiva e determinata.",
    ],

    ctaKicker:
      "Scopri il tuo tema natale",

    ctaTitle:
      "Dove si trova l’Ariete nel tuo tema natale?",

    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire i tuoi segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

    ctaButton:
      "Creare il mio tema natale",

    faqKicker:
      "Domande frequenti",

    faqTitle:
      "Domande sull’Ariete",

    faq: [
      {
        question:
          "Quali sono le principali qualità dell’Ariete?",

        answer:
          "L’Ariete è spesso associato al coraggio, all’iniziativa, alla spontaneità, alla franchezza e alla capacità di iniziare rapidamente nuovi progetti.",
      },

      {
        question:
          "Quali sono le principali sfide dell’Ariete?",

        answer:
          "L’Ariete può agire troppo rapidamente, avere poca pazienza o reagire con intensità. La sua crescita passa spesso attraverso l’apprendimento della prospettiva e della costanza.",
      },

      {
        question:
          "Quale pianeta governa l’Ariete?",

        answer:
          "L’Ariete è governato da Marte, pianeta tradizionalmente associato all’azione, al desiderio, all’affermazione, al coraggio e all’energia combattiva.",
      },

      {
        question:
          "Qual è l’elemento dell’Ariete?",

        answer:
          "L’Ariete appartiene all’elemento Fuoco. Questo elemento è legato allo slancio, all’entusiasmo, alla creatività, alla volontà e al bisogno di espressione.",
      },

      {
        question:
          "Come sapere se l’Ariete è importante nel mio tema natale?",

        answer:
          "L’Ariete può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette di verificarlo.",
      },
    ],

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Áries: personalidade, amor, trabalho e compatibilidades | Luna Astralis",

      description:
        "Descubra o signo de Áries na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidades, Marte, elemento Fogo, Lua e Ascendente em Áries.",

      ogTitle:
        "Áries na astrologia: personalidade, amor e compatibilidades",

      ogDescription:
        "Guia completo de Áries: personalidade, forças, desafios, relacionamentos, carreira, planeta regente e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Áries | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Áries, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Áries na astrologia: personalidade, amor, trabalho e compatibilidades",

      description:
        "Guia completo sobre o signo de Áries, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    badge:
      "♈ Primeiro signo do zodíaco",

    title:
      "Áries na astrologia",

    lead:
      "Áries simboliza o impulso inicial, a coragem, a ação e a vontade de avançar. Este signo de Fogo procura experimentar a vida diretamente e abrir novos caminhos.",

    createChart:
      "Criar meu mapa astral grátis",

    discoverAries:
      "Descobrir Áries",

    personalityKicker:
      "Personalidade de Áries",

    personalityTitle:
      "O que representa o signo de Áries?",

    personalityParagraphs: [
      "Áries é o primeiro signo do zodíaco. Ele simboliza o começo, o impulso, o nascimento de um desejo e a vontade de agir. Sua energia é direta, espontânea e orientada para a experiência.",

      "Uma pessoa fortemente marcada por Áries geralmente procura avançar com autonomia. Muitas vezes prefere aprender por meio da ação, testar os próprios limites e tomar decisões rapidamente.",

      "Essa energia pode oferecer muita coragem e iniciativa. No entanto, exige aprender a controlar a impaciência, respeitar o ritmo dos outros e continuar os projetos depois do entusiasmo inicial.",
    ],

    traitsTitle:
      "As principais características de Áries",

    traits: [
      {
        title:
          "A iniciativa",

        symbol:
          "✦",

        text:
          "Áries possui um instinto natural para começar, agir e abrir caminho. Geralmente prefere avançar em vez de esperar que as circunstâncias mudem.",
      },

      {
        title:
          "A coragem",

        symbol:
          "⚡",

        text:
          "Este signo costuma enfrentar as dificuldades com franqueza e energia. Pode assumir riscos quando considera uma ação necessária.",
      },

      {
        title:
          "A independência",

        symbol:
          "↑",

        text:
          "Áries precisa manter certa liberdade de decisão. Sente-se mais vivo quando pode seguir o próprio impulso e defender suas escolhas.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidade e planeta regente",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Elemento Fogo",

        text:
          "O Fogo traz entusiasmo, inspiração, espontaneidade e necessidade de expressão. Ele leva Áries a agir de acordo com o próprio instinto e vontade.",
      },

      {
        symbol:
          "✦",

        title:
          "Modalidade cardinal",

        text:
          "A modalidade cardinal favorece os começos, a iniciativa e a capacidade de iniciar um movimento ou um novo projeto.",
      },

      {
        symbol:
          "♂",

        title:
          "Planeta Marte",

        text:
          "Marte representa a ação, o desejo, a afirmação e a energia combativa. Ele reforça o caráter direto e determinado de Áries.",
      },
    ],

    strengthsTitle:
      "As forças e os desafios de Áries",

    strengthsKicker:
      "Forças naturais",

    strengthsSubtitle:
      "O que Áries oferece",

    strengths: [
      "Coragem",
      "Espontaneidade",
      "Iniciativa",
      "Franqueza",
      "Energia",
      "Determinação",
    ],

    challengesKicker:
      "Pontos de atenção",

    challengesSubtitle:
      "O que Áries aprende",

    challenges: [
      "Impaciência",
      "Impulsividade",
      "Reações rápidas",
      "Dificuldade para desacelerar",
      "Competitividade",
      "Tendência a agir antes de pensar",
    ],

    loveTitle:
      "Áries no amor",

    loveParagraphs: [
      "No amor, Áries costuma procurar uma relação viva, sincera e estimulante. Valoriza a espontaneidade, a franqueza e a sensação de que a relação continua avançando.",

      "Pode expressar seu interesse de forma direta e intensa. Quando se sente atraído, geralmente prefere agir em vez de esconder seus sentimentos por muito tempo.",

      "O principal desafio consiste em manter a escuta e a paciência. Áries pode precisar aprender que a intensidade do início deve depois ser sustentada pela presença, constância e respeito pelo ritmo da outra pessoa.",
    ],

    workTitle:
      "Áries no trabalho",

    workParagraphs: [
      "Na vida profissional, Áries costuma se destacar pelo senso de iniciativa. Gosta de ambientes onde pode agir, decidir, resolver problemas e enfrentar desafios.",

      "Pode ser especialmente eficiente em projetos que exigem coragem, rapidez, autonomia ou a capacidade de começar algo novo.",

      "Tarefas muito repetitivas ou estruturas excessivamente rígidas podem reduzir sua motivação. Áries se beneficia ao desenvolver planejamento, paciência e continuidade para transformar ideias em resultados duradouros.",
    ],

    placementsTitle:
      "Sol, Lua e Ascendente em Áries",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol em Áries",

        text:
          "O Sol em Áries constrói sua identidade por meio da ação, da independência e da coragem de afirmar as próprias escolhas.",

        link:
          "Compreender o Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Lua em Áries",

        text:
          "A Lua em Áries sente rapidamente e reage de forma espontânea. Precisa de movimento e autonomia para recuperar seu equilíbrio.",

        link:
          "Compreender a Lua",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente em Áries",

        text:
          "O Ascendente em Áries proporciona uma presença enérgica, direta e determinada. Geralmente aborda a vida com rapidez e ousadia.",

        link:
          "Compreender o Ascendente",
      },
    ],

    compatibilityTitle:
      "As compatibilidades de Áries",

    compatibilityParagraphs: [
      "As compatibilidades astrológicas nunca dependem apenas do signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

      "Algumas combinações podem, porém, parecer naturalmente mais fluidas devido a um ritmo, elemento ou necessidade de liberdade compartilhados.",
    ],

    compatibilityLabel:
      "Áries e",

    compatibilities: [
      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Leão compartilha com Áries uma energia calorosa, criativa e expressiva. Essa relação pode ser dinâmica, apaixonada e estimulante.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Sagitário compreende a necessidade de liberdade e movimento de Áries. Juntos, podem compartilhar entusiasmo, projetos e gosto pela aventura.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Gêmeos traz curiosidade, humor e flexibilidade. Pode estimular Áries intelectualmente e acompanhar sua necessidade de novidade.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Aquário valoriza a independência e as ideias novas. Essa combinação pode favorecer uma relação viva, livre e voltada para o futuro.",
      },
    ],

    natalTitle:
      "Áries no seu mapa natal",

    natalParagraphs: [
      "Áries não diz respeito apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Áries em uma determinada casa astrológica. Essa casa mostra a área da vida em que você pode agir com maior espontaneidade, ousadia ou iniciativa.",

      "A presença de planetas em Áries também reforça essa energia. Marte, Vênus, Mercúrio ou a Lua em Áries não se expressam da mesma forma, mas cada um adota uma qualidade mais direta, ativa e determinada.",
    ],

    ctaKicker:
      "Descubra seu mapa natal",

    ctaTitle:
      "Onde Áries está no seu mapa natal?",

    ctaText:
      "Gere gratuitamente seu mapa natal para descobrir seus signos, suas casas astrológicas, seu Ascendente e as posições dos planetas.",

    ctaButton:
      "Criar meu mapa natal",

    faqKicker:
      "Perguntas frequentes",

    faqTitle:
      "Perguntas sobre Áries",

    faq: [
      {
        question:
          "Quais são as principais qualidades de Áries?",

        answer:
          "Áries costuma ser associado à coragem, à iniciativa, à espontaneidade, à franqueza e à capacidade de começar rapidamente novos projetos.",
      },

      {
        question:
          "Quais são os principais desafios de Áries?",

        answer:
          "Áries pode agir rápido demais, ter pouca paciência ou reagir com intensidade. Seu crescimento costuma envolver o aprendizado da perspectiva e da constância.",
      },

      {
        question:
          "Qual planeta governa Áries?",

        answer:
          "Áries é governado por Marte, planeta tradicionalmente associado à ação, ao desejo, à afirmação, à coragem e à energia combativa.",
      },

      {
        question:
          "Qual é o elemento de Áries?",

        answer:
          "Áries pertence ao elemento Fogo. Esse elemento está ligado ao impulso, ao entusiasmo, à criatividade, à vontade e à necessidade de expressão.",
      },

      {
        question:
          "Como saber se Áries é importante no meu mapa natal?",

        answer:
          "Áries pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo permite verificar isso.",
      },
    ],

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
