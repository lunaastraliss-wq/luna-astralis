// i18n/pages/astrologie/lion.ts

import type {
  Locale,
} from "@/i18n/config";

export type LionTrait = {
  title: string;
  symbol: string;
  text: string;
};

export type LionPillar = {
  symbol: string;
  title: string;
  text: string;
};

export type LionPlacement = {
  symbol: string;
  title: string;
  text: string;
  link: string;
};

export type LionCompatibility = {
  sign: string;
  symbol: string;
  text: string;
};

export type LionFaqItem = {
  question: string;
  answer: string;
};

export type LionPageText = {
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
  discoverLion: string;

  personalityKicker: string;
  personalityTitle: string;
  personalityParagraphs: string[];

  traitsTitle: string;
  traits: LionTrait[];

  pillarsTitle: string;
  pillars: LionPillar[];

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
  placements: LionPlacement[];

  compatibilityTitle: string;
  compatibilityParagraphs: string[];
  compatibilityLabel: string;
  compatibilities: LionCompatibility[];

  natalTitle: string;
  natalParagraphs: string[];

  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  faqKicker: string;
  faqTitle: string;
  faq: LionFaqItem[];

  disclaimer: string;
};

export const LION_TRANSLATIONS:
  Record<
    Locale,
    LionPageText
  > = {
  fr: {
    metadata: {
      title:
        "Lion : personnalité, amour, travail et compatibilités | Luna Astralis",

      description:
        "Découvrez le signe du Lion en astrologie : personnalité, qualités, défis, amour, travail, compatibilités, Soleil, élément Feu, Lune et Ascendant Lion.",

      ogTitle:
        "Le Lion en astrologie : personnalité, amour et compatibilités",

      ogDescription:
        "Guide complet du signe du Lion : caractère, forces, défis, relations, carrière, Soleil et principales compatibilités astrologiques.",

      twitterTitle:
        "Le signe du Lion | Luna Astralis",

      twitterDescription:
        "Découvrez la personnalité du Lion, ses qualités, ses défis, ses relations et ses compatibilités astrologiques.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le Lion en astrologie : personnalité, amour, travail et compatibilités",

      description:
        "Guide complet consacré au signe du Lion, à ses qualités, ses défis, ses relations, sa carrière et ses principales caractéristiques astrologiques.",
    },

    badge:
      "♌ Cinquième signe du zodiaque",

    title:
      "Le Lion en astrologie",

    lead:
      "Le Lion symbolise le rayonnement, la créativité, la confiance et l’expression personnelle. Ce signe de Feu cherche à vivre avec intensité, à partager sa lumière et à créer une existence dont il peut être fier.",

    createChart:
      "Créer ma carte du ciel gratuite",

    discoverLion:
      "Découvrir le Lion",

    personalityKicker:
      "Personnalité du Lion",

    personalityTitle:
      "Que représente le signe du Lion ?",

    personalityParagraphs: [
      "Le Lion est le cinquième signe du zodiaque. Il représente l’affirmation de soi, la créativité, la confiance, la joie de vivre et le besoin d’exprimer son identité avec authenticité.",

      "Une personne marquée par le Lion cherche généralement à prendre pleinement sa place. Elle souhaite développer ses talents, partager ce qui l’anime et être reconnue pour ce qu’elle apporte de personnel au monde.",

      "Cette énergie apporte chaleur, courage et générosité. Elle demande toutefois d’apprendre à rayonner sans dominer, à recevoir la critique avec maturité et à construire une confiance qui ne dépend pas uniquement de l’approbation des autres.",
    ],

    traitsTitle:
      "Les grandes caractéristiques du Lion",

    traits: [
      {
        title:
          "Le rayonnement",

        symbol:
          "☀",

        text:
          "Le Lion possède une énergie naturellement expressive. Il cherche à affirmer son identité, à partager sa lumière et à laisser une empreinte personnelle dans ce qu’il accomplit.",
      },

      {
        title:
          "La créativité",

        symbol:
          "✦",

        text:
          "Ce signe aime créer, imaginer et donner vie à ce qui l’inspire. Son besoin d’expression peut se manifester dans l’art, les projets, les relations ou sa manière unique de se présenter.",
      },

      {
        title:
          "La générosité",

        symbol:
          "♡",

        text:
          "Le Lion donne souvent avec chaleur et loyauté. Lorsqu’il se sent apprécié, il peut offrir beaucoup de soutien, de protection et d’enthousiasme aux personnes qu’il aime.",
      },
    ],

    pillarsTitle:
      "Élément, modalité et astre maître",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Élément Feu",

        text:
          "Le Feu apporte passion, enthousiasme, spontanéité et désir d’agir. Il nourrit chez le Lion la volonté de créer, d’aimer et de vivre pleinement.",
      },

      {
        symbol:
          "◆",

        title:
          "Modalité fixe",

        text:
          "La modalité fixe favorise la persévérance, la fidélité et la capacité à maintenir une direction. Elle peut aussi renforcer l’entêtement et la résistance au changement.",
      },

      {
        symbol:
          "☀",

        title:
          "Astre maître : le Soleil",

        text:
          "Le Soleil représente l’identité, la volonté, la vitalité et le rayonnement personnel. Il invite le Lion à développer une expression authentique de lui-même.",
      },
    ],

    strengthsTitle:
      "Les forces et les défis du Lion",

    strengthsKicker:
      "Forces naturelles",

    strengthsSubtitle:
      "Ce que le Lion apporte",

    strengths: [
      "Confiance",
      "Créativité",
      "Générosité",
      "Loyauté",
      "Courage",
      "Capacité à inspirer",
    ],

    challengesKicker:
      "Points d’attention",

    challengesSubtitle:
      "Ce que le Lion apprend",

    challenges: [
      "Besoin de reconnaissance",
      "Orgueil",
      "Difficulté à accepter la critique",
      "Tendance à vouloir diriger",
      "Dramatisation",
      "Peur de ne pas être apprécié",
    ],

    loveTitle:
      "Le Lion en amour",

    loveParagraphs: [
      "En amour, le Lion recherche généralement une relation chaleureuse, passionnée et sincère. Il a besoin de sentir que ses sentiments sont reconnus, que sa présence est appréciée et que la relation possède une véritable intensité.",

      "Lorsqu’il aime, le Lion peut être généreux, protecteur et profondément loyal. Il apprécie les gestes d’affection, les moments romantiques et la fierté de construire quelque chose de beau avec la personne qu’il aime.",

      "Son principal défi consiste à ne pas confondre amour et admiration constante. Une relation durable lui demande de laisser également de l’espace à l’autre, d’écouter ses besoins et d’accepter de montrer sa vulnérabilité.",
    ],

    workTitle:
      "Le Lion au travail",

    workParagraphs: [
      "Dans la vie professionnelle, le Lion se distingue souvent par sa confiance, sa créativité et sa capacité à mobiliser les autres autour d’une vision ou d’un projet.",

      "Il peut être particulièrement à l’aise dans les domaines liés à la direction, à l’entrepreneuriat, à la création, à l’enseignement, au spectacle, à la communication, aux événements ou à toute fonction qui permet de prendre des initiatives.",

      "Le Lion a besoin de sentir que son travail possède une valeur et que ses efforts sont reconnus. Il gagne toutefois à collaborer sans chercher à tout contrôler et à valoriser également les contributions de son entourage.",
    ],

    placementsTitle:
      "Soleil, Lune et Ascendant en Lion",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Soleil en Lion",

        text:
          "Le Soleil en Lion construit son identité par la créativité, la confiance, la générosité et le désir de rayonner avec authenticité.",

        link:
          "Comprendre le Soleil",
      },

      {
        symbol:
          "🌙",

        title:
          "Lune en Lion",

        text:
          "La Lune en Lion a besoin de chaleur, d’affection, de reconnaissance et de liberté créative pour retrouver son équilibre émotionnel.",

        link:
          "Comprendre la Lune",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendant Lion",

        text:
          "L’Ascendant Lion donne une présence expressive, chaleureuse et charismatique. Il aborde généralement la vie avec confiance et créativité.",

        link:
          "Comprendre l’Ascendant",
      },
    ],

    compatibilityTitle:
      "Les compatibilités du Lion",

    compatibilityParagraphs: [
      "Les compatibilités astrologiques ne reposent jamais uniquement sur le signe solaire. La Lune, Vénus, Mars, l’Ascendant et les aspects entre les deux thèmes apportent des informations essentielles.",

      "Certaines associations peuvent néanmoins sembler naturellement plus harmonieuses lorsqu’elles partagent un besoin de passion, de créativité, de mouvement et d’expression personnelle.",
    ],

    compatibilityLabel:
      "Lion et",

    compatibilities: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Le Bélier et le Lion partagent une énergie dynamique, courageuse et passionnée. Cette relation peut favoriser l’action, l’enthousiasme et les projets ambitieux.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Le Sagittaire nourrit le Lion par son optimisme, sa liberté et son désir d’aventure. Ensemble, ils peuvent créer une relation chaleureuse et inspirante.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "La Balance apprécie le charisme et la créativité du Lion. Le Lion peut être séduit par son élégance, son sens de l’harmonie et sa douceur relationnelle.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Les Gémeaux stimulent le Lion par leur curiosité, leur humour et leur vivacité. Cette combinaison favorise la communication, les sorties et les projets créatifs.",
      },
    ],

    natalTitle:
      "Le Lion dans votre thème natal",

    natalParagraphs: [
      "Le Lion ne concerne pas uniquement les personnes nées sous ce signe. Chaque thème natal contient le Lion dans une maison astrologique particulière.",

      "Cette maison montre le domaine de vie dans lequel vous cherchez à créer, à rayonner, à développer votre confiance et à exprimer votre identité. La présence de planètes en Lion renforce également cette énergie.",
    ],

    ctaKicker:
      "Découvrez votre thème natal",

    ctaTitle:
      "Où se trouve le Lion dans votre carte du ciel ?",

    ctaText:
      "Générez gratuitement votre carte du ciel pour découvrir vos signes, vos maisons astrologiques, votre Ascendant et les positions de vos planètes.",

    ctaButton:
      "Créer ma carte du ciel",

    faqKicker:
      "Questions fréquentes",

    faqTitle:
      "Questions sur le Lion",

    faq: [
      {
        question:
          "Quelles sont les principales qualités du Lion ?",

        answer:
          "Le Lion est souvent associé à la confiance, à la créativité, à la générosité, à la loyauté, au courage et à la capacité d’inspirer les autres.",
      },

      {
        question:
          "Quels sont les principaux défis du Lion ?",

        answer:
          "Le Lion peut parfois rechercher fortement la reconnaissance, avoir de la difficulté à accepter la critique ou vouloir contrôler certaines situations. Son évolution passe par une confiance intérieure moins dépendante du regard extérieur.",
      },

      {
        question:
          "Quelle planète gouverne le Lion ?",

        answer:
          "Le Lion est gouverné par le Soleil, astre traditionnellement associé à l’identité, à la vitalité, à la créativité, à la volonté et au rayonnement personnel.",
      },

      {
        question:
          "Quel est l’élément du Lion ?",

        answer:
          "Le Lion appartient à l’élément Feu. Cet élément est associé à l’enthousiasme, à l’action, à la passion, à la créativité et au désir d’exprimer pleinement son identité.",
      },

      {
        question:
          "Comment savoir si le Lion est important dans mon thème natal ?",

        answer:
          "Le Lion peut être important si votre Soleil, votre Lune, votre Ascendant ou plusieurs planètes se trouvent dans ce signe. Une carte du ciel complète permet également de découvrir la maison astrologique occupée par le Lion.",
      },
    ],

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Leo: Personality, Love, Career and Compatibility | Luna Astralis",

      description:
        "Discover Leo in astrology: personality, strengths, challenges, love, career, compatibility, the Sun, Fire element, Leo Moon and Leo Rising.",

      ogTitle:
        "Leo in Astrology: Personality, Love and Compatibility",

      ogDescription:
        "A complete guide to Leo: character, strengths, challenges, relationships, career, the Sun and major astrological compatibility.",

      twitterTitle:
        "The Leo Zodiac Sign | Luna Astralis",

      twitterDescription:
        "Discover Leo’s personality, strengths, challenges, relationships and astrological compatibility.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Leo in Astrology: Personality, Love, Career and Compatibility",

      description:
        "A complete guide to Leo, its strengths, challenges, relationships, career and main astrological characteristics.",
    },

    badge:
      "♌ Fifth sign of the zodiac",

    title:
      "Leo in Astrology",

    lead:
      "Leo symbolizes radiance, creativity, confidence and personal expression. This Fire sign seeks to live intensely, share its light and create a life it can be proud of.",

    createChart:
      "Create my free birth chart",

    discoverLion:
      "Discover Leo",

    personalityKicker:
      "Leo personality",

    personalityTitle:
      "What does the Leo zodiac sign represent?",

    personalityParagraphs: [
      "Leo is the fifth sign of the zodiac. It represents self-affirmation, creativity, confidence, joy and the need to express one’s identity authentically.",

      "A person strongly influenced by Leo generally seeks to take their rightful place. They want to develop their talents, share what inspires them and be recognized for the personal contribution they bring to the world.",

      "This energy brings warmth, courage and generosity. It also requires learning to shine without dominating, accept criticism with maturity and build confidence that does not depend solely on the approval of others.",
    ],

    traitsTitle:
      "The main characteristics of Leo",

    traits: [
      {
        title:
          "Radiance",

        symbol:
          "☀",

        text:
          "Leo possesses naturally expressive energy. It seeks to affirm its identity, share its light and leave a personal mark on what it accomplishes.",
      },

      {
        title:
          "Creativity",

        symbol:
          "✦",

        text:
          "This sign enjoys creating, imagining and bringing inspiration to life. Its need for expression may appear through art, projects, relationships or a unique way of presenting itself.",
      },

      {
        title:
          "Generosity",

        symbol:
          "♡",

        text:
          "Leo often gives with warmth and loyalty. When appreciated, it can offer significant support, protection and enthusiasm to the people it loves.",
      },
    ],

    pillarsTitle:
      "Element, modality and ruling body",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Fire element",

        text:
          "Fire brings passion, enthusiasm, spontaneity and a desire to act. It strengthens Leo’s desire to create, love and live fully.",
      },

      {
        symbol:
          "◆",

        title:
          "Fixed modality",

        text:
          "The fixed modality encourages perseverance, loyalty and the ability to maintain a direction. It may also reinforce stubbornness and resistance to change.",
      },

      {
        symbol:
          "☀",

        title:
          "Ruling body: the Sun",

        text:
          "The Sun represents identity, willpower, vitality and personal radiance. It encourages Leo to develop an authentic expression of self.",
      },
    ],

    strengthsTitle:
      "Leo’s strengths and challenges",

    strengthsKicker:
      "Natural strengths",

    strengthsSubtitle:
      "What Leo brings",

    strengths: [
      "Confidence",
      "Creativity",
      "Generosity",
      "Loyalty",
      "Courage",
      "Ability to inspire",
    ],

    challengesKicker:
      "Points of attention",

    challengesSubtitle:
      "What Leo learns",

    challenges: [
      "Need for recognition",
      "Pride",
      "Difficulty accepting criticism",
      "Tendency to take control",
      "Dramatization",
      "Fear of not being appreciated",
    ],

    loveTitle:
      "Leo in love",

    loveParagraphs: [
      "In love, Leo generally seeks a warm, passionate and sincere relationship. It needs to feel that its feelings are acknowledged, its presence is appreciated and the relationship has genuine intensity.",

      "When in love, Leo can be generous, protective and deeply loyal. It appreciates affectionate gestures, romantic moments and the pride of building something beautiful with the person it loves.",

      "Its main challenge is not confusing love with constant admiration. A lasting relationship requires Leo to give the other person space, listen to their needs and accept showing vulnerability.",
    ],

    workTitle:
      "Leo at work",

    workParagraphs: [
      "In professional life, Leo often stands out through confidence, creativity and the ability to bring others together around a vision or project.",

      "It may be especially comfortable in leadership, entrepreneurship, creation, teaching, entertainment, communication, events or any role that allows initiative.",

      "Leo needs to feel that its work has value and that its efforts are recognized. It benefits from collaborating without trying to control everything and from valuing the contributions of others.",
    ],

    placementsTitle:
      "Sun, Moon and Rising in Leo",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sun in Leo",

        text:
          "The Sun in Leo builds identity through creativity, confidence, generosity and the desire to shine authentically.",

        link:
          "Understand the Sun",
      },

      {
        symbol:
          "🌙",

        title:
          "Moon in Leo",

        text:
          "The Moon in Leo needs warmth, affection, recognition and creative freedom to restore emotional balance.",

        link:
          "Understand the Moon",
      },

      {
        symbol:
          "↑",

        title:
          "Leo Rising",

        text:
          "Leo Rising gives an expressive, warm and charismatic presence. It generally approaches life with confidence and creativity.",

        link:
          "Understand the Ascendant",
      },
    ],

    compatibilityTitle:
      "Leo compatibility",

    compatibilityParagraphs: [
      "Astrological compatibility is never based solely on the Sun sign. The Moon, Venus, Mars, Ascendant and the aspects between both charts provide essential information.",

      "Some combinations may nevertheless feel naturally more harmonious when they share a need for passion, creativity, movement and personal expression.",
    ],

    compatibilityLabel:
      "Leo and",

    compatibilities: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries and Leo share dynamic, courageous and passionate energy. This relationship can encourage action, enthusiasm and ambitious projects.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Sagittarius nourishes Leo through optimism, freedom and a desire for adventure. Together, they can create a warm and inspiring relationship.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra appreciates Leo’s charisma and creativity. Leo may be attracted to Libra’s elegance, sense of harmony and relational gentleness.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Gemini stimulates Leo through curiosity, humor and liveliness. This combination encourages communication, outings and creative projects.",
      },
    ],

    natalTitle:
      "Leo in your birth chart",

    natalParagraphs: [
      "Leo does not concern only people born under this sign. Every birth chart contains Leo in a particular astrological house.",

      "This house shows the area of life in which you seek to create, shine, develop confidence and express your identity. Planets in Leo also strengthen this energy.",
    ],

    ctaKicker:
      "Discover your birth chart",

    ctaTitle:
      "Where is Leo in your birth chart?",

    ctaText:
      "Generate your free birth chart to discover your signs, astrological houses, Ascendant and planetary positions.",

    ctaButton:
      "Create my birth chart",

    faqKicker:
      "Frequently asked questions",

    faqTitle:
      "Questions about Leo",

    faq: [
      {
        question:
          "What are Leo’s main qualities?",

        answer:
          "Leo is often associated with confidence, creativity, generosity, loyalty, courage and the ability to inspire others.",
      },

      {
        question:
          "What are Leo’s main challenges?",

        answer:
          "Leo may strongly seek recognition, have difficulty accepting criticism or want to control certain situations. Its growth involves developing inner confidence that depends less on outside approval.",
      },

      {
        question:
          "Which planet rules Leo?",

        answer:
          "Leo is ruled by the Sun, traditionally associated with identity, vitality, creativity, willpower and personal radiance.",
      },

      {
        question:
          "What is Leo’s element?",

        answer:
          "Leo belongs to the Fire element. This element is associated with enthusiasm, action, passion, creativity and the desire to express one’s identity fully.",
      },

      {
        question:
          "How can I know whether Leo is important in my birth chart?",

        answer:
          "Leo may be important if your Sun, Moon, Ascendant or several planets are located in this sign. A complete birth chart also reveals the astrological house occupied by Leo.",
      },
    ],

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Leo: personalidad, amor, trabajo y compatibilidades | Luna Astralis",

      description:
        "Descubre Leo en astrología: personalidad, cualidades, desafíos, amor, trabajo, compatibilidades, Sol, elemento Fuego, Luna y Ascendente Leo.",

      ogTitle:
        "Leo en astrología: personalidad, amor y compatibilidades",

      ogDescription:
        "Guía completa de Leo: carácter, fortalezas, desafíos, relaciones, carrera, Sol y principales compatibilidades astrológicas.",

      twitterTitle:
        "El signo de Leo | Luna Astralis",

      twitterDescription:
        "Descubre la personalidad de Leo, sus cualidades, desafíos, relaciones y compatibilidades astrológicas.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Leo en astrología: personalidad, amor, trabajo y compatibilidades",

      description:
        "Guía completa dedicada al signo de Leo, sus cualidades, desafíos, relaciones, carrera y principales características astrológicas.",
    },

    badge:
      "♌ Quinto signo del zodiaco",

    title:
      "Leo en astrología",

    lead:
      "Leo simboliza el brillo, la creatividad, la confianza y la expresión personal. Este signo de Fuego busca vivir con intensidad, compartir su luz y crear una vida de la que pueda sentirse orgulloso.",

    createChart:
      "Crear mi carta natal gratis",

    discoverLion:
      "Descubrir Leo",

    personalityKicker:
      "Personalidad de Leo",

    personalityTitle:
      "¿Qué representa el signo de Leo?",

    personalityParagraphs: [
      "Leo es el quinto signo del zodiaco. Representa la afirmación personal, la creatividad, la confianza, la alegría de vivir y la necesidad de expresar la identidad con autenticidad.",

      "Una persona marcada por Leo suele buscar ocupar plenamente su lugar. Desea desarrollar sus talentos, compartir lo que la inspira y ser reconocida por su aportación personal al mundo.",

      "Esta energía aporta calidez, valor y generosidad. Sin embargo, exige aprender a brillar sin dominar, recibir las críticas con madurez y construir una confianza que no dependa únicamente de la aprobación ajena.",
    ],

    traitsTitle:
      "Las principales características de Leo",

    traits: [
      {
        title:
          "El brillo",

        symbol:
          "☀",

        text:
          "Leo posee una energía naturalmente expresiva. Busca afirmar su identidad, compartir su luz y dejar una huella personal en aquello que realiza.",
      },

      {
        title:
          "La creatividad",

        symbol:
          "✦",

        text:
          "A este signo le gusta crear, imaginar y dar vida a lo que lo inspira. Su necesidad de expresión puede manifestarse en el arte, los proyectos, las relaciones o su forma única de presentarse.",
      },

      {
        title:
          "La generosidad",

        symbol:
          "♡",

        text:
          "Leo suele dar con calidez y lealtad. Cuando se siente valorado, puede ofrecer mucho apoyo, protección y entusiasmo a las personas que ama.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidad y astro regente",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Elemento Fuego",

        text:
          "El Fuego aporta pasión, entusiasmo, espontaneidad y deseo de actuar. Alimenta en Leo la voluntad de crear, amar y vivir plenamente.",
      },

      {
        symbol:
          "◆",

        title:
          "Modalidad fija",

        text:
          "La modalidad fija favorece la perseverancia, la lealtad y la capacidad de mantener una dirección. También puede reforzar la obstinación y la resistencia al cambio.",
      },

      {
        symbol:
          "☀",

        title:
          "Astro regente: el Sol",

        text:
          "El Sol representa la identidad, la voluntad, la vitalidad y el brillo personal. Invita a Leo a desarrollar una expresión auténtica de sí mismo.",
      },
    ],

    strengthsTitle:
      "Las fortalezas y los desafíos de Leo",

    strengthsKicker:
      "Fortalezas naturales",

    strengthsSubtitle:
      "Lo que aporta Leo",

    strengths: [
      "Confianza",
      "Creatividad",
      "Generosidad",
      "Lealtad",
      "Valor",
      "Capacidad para inspirar",
    ],

    challengesKicker:
      "Puntos de atención",

    challengesSubtitle:
      "Lo que aprende Leo",

    challenges: [
      "Necesidad de reconocimiento",
      "Orgullo",
      "Dificultad para aceptar las críticas",
      "Tendencia a querer dirigir",
      "Dramatización",
      "Miedo a no ser valorado",
    ],

    loveTitle:
      "Leo en el amor",

    loveParagraphs: [
      "En el amor, Leo suele buscar una relación cálida, apasionada y sincera. Necesita sentir que sus sentimientos son reconocidos, que su presencia es valorada y que la relación posee una verdadera intensidad.",

      "Cuando ama, Leo puede ser generoso, protector y profundamente leal. Aprecia los gestos de afecto, los momentos románticos y el orgullo de construir algo hermoso con la persona que ama.",

      "Su principal desafío consiste en no confundir el amor con la admiración constante. Una relación duradera le exige dejar espacio a la otra persona, escuchar sus necesidades y aceptar mostrar vulnerabilidad.",
    ],

    workTitle:
      "Leo en el trabajo",

    workParagraphs: [
      "En la vida profesional, Leo suele destacar por su confianza, creatividad y capacidad para movilizar a los demás alrededor de una visión o proyecto.",

      "Puede sentirse especialmente cómodo en ámbitos relacionados con la dirección, el emprendimiento, la creación, la enseñanza, el espectáculo, la comunicación, los eventos o cualquier función que permita tomar iniciativas.",

      "Leo necesita sentir que su trabajo tiene valor y que sus esfuerzos son reconocidos. Sin embargo, le conviene colaborar sin intentar controlarlo todo y valorar también las aportaciones de quienes lo rodean.",
    ],

    placementsTitle:
      "Sol, Luna y Ascendente en Leo",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol en Leo",

        text:
          "El Sol en Leo construye su identidad mediante la creatividad, la confianza, la generosidad y el deseo de brillar con autenticidad.",

        link:
          "Comprender el Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna en Leo",

        text:
          "La Luna en Leo necesita calidez, afecto, reconocimiento y libertad creativa para recuperar el equilibrio emocional.",

        link:
          "Comprender la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Leo",

        text:
          "El Ascendente Leo aporta una presencia expresiva, cálida y carismática. Generalmente aborda la vida con confianza y creatividad.",

        link:
          "Comprender el Ascendente",
      },
    ],

    compatibilityTitle:
      "Las compatibilidades de Leo",

    compatibilityParagraphs: [
      "Las compatibilidades astrológicas nunca dependen únicamente del signo solar. La Luna, Venus, Marte, el Ascendente y los aspectos entre ambas cartas aportan información esencial.",

      "Algunas asociaciones pueden parecer naturalmente más armoniosas cuando comparten una necesidad de pasión, creatividad, movimiento y expresión personal.",
    ],

    compatibilityLabel:
      "Leo y",

    compatibilities: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Aries y Leo comparten una energía dinámica, valiente y apasionada. Esta relación puede favorecer la acción, el entusiasmo y los proyectos ambiciosos.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Sagitario alimenta a Leo con su optimismo, libertad y deseo de aventura. Juntos pueden crear una relación cálida e inspiradora.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra aprecia el carisma y la creatividad de Leo. Leo puede sentirse atraído por su elegancia, su sentido de la armonía y su dulzura en las relaciones.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Géminis estimula a Leo mediante su curiosidad, humor y vivacidad. Esta combinación favorece la comunicación, las salidas y los proyectos creativos.",
      },
    ],

    natalTitle:
      "Leo en tu carta natal",

    natalParagraphs: [
      "Leo no se refiere únicamente a las personas nacidas bajo este signo. Cada carta natal contiene Leo en una casa astrológica determinada.",

      "Esa casa muestra el ámbito de vida en el que buscas crear, brillar, desarrollar tu confianza y expresar tu identidad. La presencia de planetas en Leo también refuerza esta energía.",
    ],

    ctaKicker:
      "Descubre tu carta natal",

    ctaTitle:
      "¿Dónde se encuentra Leo en tu carta natal?",

    ctaText:
      "Genera gratuitamente tu carta natal para descubrir tus signos, tus casas astrológicas, tu Ascendente y las posiciones de tus planetas.",

    ctaButton:
      "Crear mi carta natal",

    faqKicker:
      "Preguntas frecuentes",

    faqTitle:
      "Preguntas sobre Leo",

    faq: [
      {
        question:
          "¿Cuáles son las principales cualidades de Leo?",

        answer:
          "Leo suele asociarse con la confianza, la creatividad, la generosidad, la lealtad, el valor y la capacidad de inspirar a los demás.",
      },

      {
        question:
          "¿Cuáles son los principales desafíos de Leo?",

        answer:
          "Leo puede buscar intensamente el reconocimiento, tener dificultad para aceptar las críticas o querer controlar determinadas situaciones. Su evolución pasa por una confianza interior menos dependiente de la mirada ajena.",
      },

      {
        question:
          "¿Qué planeta gobierna Leo?",

        answer:
          "Leo está regido por el Sol, astro tradicionalmente asociado con la identidad, la vitalidad, la creatividad, la voluntad y el brillo personal.",
      },

      {
        question:
          "¿Cuál es el elemento de Leo?",

        answer:
          "Leo pertenece al elemento Fuego. Este elemento está asociado con el entusiasmo, la acción, la pasión, la creatividad y el deseo de expresar plenamente la identidad.",
      },

      {
        question:
          "¿Cómo saber si Leo es importante en mi carta natal?",

        answer:
          "Leo puede ser importante si tu Sol, tu Luna, tu Ascendente o varios planetas se encuentran en este signo. Una carta natal completa también permite descubrir la casa astrológica ocupada por Leo.",
      },
    ],

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Löwe: Persönlichkeit, Liebe, Beruf und Kompatibilität | Luna Astralis",

      description:
        "Entdecken Sie den Löwen in der Astrologie: Persönlichkeit, Stärken, Herausforderungen, Liebe, Beruf, Kompatibilität, Sonne, Feuerelement, Mond und Aszendent Löwe.",

      ogTitle:
        "Der Löwe in der Astrologie: Persönlichkeit, Liebe und Kompatibilität",

      ogDescription:
        "Ein vollständiger Leitfaden zum Löwen: Charakter, Stärken, Herausforderungen, Beziehungen, Beruf, Sonne und wichtigste astrologische Kompatibilitäten.",

      twitterTitle:
        "Das Sternzeichen Löwe | Luna Astralis",

      twitterDescription:
        "Entdecken Sie die Persönlichkeit des Löwen, seine Stärken, Herausforderungen, Beziehungen und astrologischen Kompatibilitäten.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Der Löwe in der Astrologie: Persönlichkeit, Liebe, Beruf und Kompatibilität",

      description:
        "Ein vollständiger Leitfaden zum Sternzeichen Löwe, seinen Stärken, Herausforderungen, Beziehungen, beruflichen Themen und wichtigsten astrologischen Eigenschaften.",
    },

    badge:
      "♌ Fünftes Tierkreiszeichen",

    title:
      "Der Löwe in der Astrologie",

    lead:
      "Der Löwe symbolisiert Ausstrahlung, Kreativität, Selbstvertrauen und persönlichen Ausdruck. Dieses Feuerzeichen möchte intensiv leben, sein Licht teilen und ein Leben erschaffen, auf das es stolz sein kann.",

    createChart:
      "Mein kostenloses Geburtshoroskop erstellen",

    discoverLion:
      "Den Löwen entdecken",

    personalityKicker:
      "Persönlichkeit des Löwen",

    personalityTitle:
      "Wofür steht das Sternzeichen Löwe?",

    personalityParagraphs: [
      "Der Löwe ist das fünfte Tierkreiszeichen. Er steht für Selbstbehauptung, Kreativität, Vertrauen, Lebensfreude und das Bedürfnis, die eigene Identität authentisch auszudrücken.",

      "Ein Mensch mit starker Löwe-Betonung möchte gewöhnlich seinen Platz vollständig einnehmen. Er möchte seine Talente entwickeln, seine Begeisterung teilen und für seinen persönlichen Beitrag zur Welt anerkannt werden.",

      "Diese Energie bringt Wärme, Mut und Großzügigkeit. Gleichzeitig verlangt sie, zu strahlen, ohne zu dominieren, Kritik mit Reife anzunehmen und ein Vertrauen aufzubauen, das nicht ausschließlich von äußerer Anerkennung abhängt.",
    ],

    traitsTitle:
      "Die wichtigsten Eigenschaften des Löwen",

    traits: [
      {
        title:
          "Ausstrahlung",

        symbol:
          "☀",

        text:
          "Der Löwe besitzt eine natürlich ausdrucksstarke Energie. Er möchte seine Identität behaupten, sein Licht teilen und in seinen Leistungen eine persönliche Spur hinterlassen.",
      },

      {
        title:
          "Kreativität",

        symbol:
          "✦",

        text:
          "Dieses Zeichen liebt es, zu erschaffen, zu gestalten und Inspiration lebendig werden zu lassen. Sein Ausdrucksbedürfnis kann sich in Kunst, Projekten, Beziehungen oder seiner einzigartigen Präsentation zeigen.",
      },

      {
        title:
          "Großzügigkeit",

        symbol:
          "♡",

        text:
          "Der Löwe gibt häufig mit Wärme und Loyalität. Wenn er sich geschätzt fühlt, kann er den Menschen, die er liebt, viel Unterstützung, Schutz und Begeisterung schenken.",
      },
    ],

    pillarsTitle:
      "Element, Modalität und Herrscher",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Element Feuer",

        text:
          "Feuer bringt Leidenschaft, Begeisterung, Spontaneität und Handlungswillen. Es stärkt im Löwen den Wunsch zu erschaffen, zu lieben und vollständig zu leben.",
      },

      {
        symbol:
          "◆",

        title:
          "Fixe Modalität",

        text:
          "Die fixe Modalität fördert Ausdauer, Loyalität und die Fähigkeit, eine Richtung beizubehalten. Sie kann außerdem Sturheit und Widerstand gegen Veränderung verstärken.",
      },

      {
        symbol:
          "☀",

        title:
          "Herrscher: die Sonne",

        text:
          "Die Sonne steht für Identität, Willenskraft, Vitalität und persönliche Ausstrahlung. Sie ermutigt den Löwen, einen authentischen Selbstausdruck zu entwickeln.",
      },
    ],

    strengthsTitle:
      "Stärken und Herausforderungen des Löwen",

    strengthsKicker:
      "Natürliche Stärken",

    strengthsSubtitle:
      "Was der Löwe einbringt",

    strengths: [
      "Selbstvertrauen",
      "Kreativität",
      "Großzügigkeit",
      "Loyalität",
      "Mut",
      "Fähigkeit zu inspirieren",
    ],

    challengesKicker:
      "Wichtige Lernfelder",

    challengesSubtitle:
      "Was der Löwe lernt",

    challenges: [
      "Bedürfnis nach Anerkennung",
      "Stolz",
      "Schwierigkeit, Kritik anzunehmen",
      "Neigung zur Führung",
      "Dramatisierung",
      "Angst, nicht geschätzt zu werden",
    ],

    loveTitle:
      "Der Löwe in der Liebe",

    loveParagraphs: [
      "In der Liebe sucht der Löwe meist eine warme, leidenschaftliche und aufrichtige Beziehung. Er muss spüren, dass seine Gefühle anerkannt, seine Anwesenheit geschätzt und die Beziehung intensiv erlebt wird.",

      "Wenn er liebt, kann der Löwe großzügig, beschützend und zutiefst loyal sein. Er schätzt liebevolle Gesten, romantische Momente und den Stolz, mit der geliebten Person etwas Schönes aufzubauen.",

      "Seine größte Herausforderung besteht darin, Liebe nicht mit ständiger Bewunderung zu verwechseln. Eine dauerhafte Beziehung verlangt, dem anderen Raum zu geben, dessen Bedürfnisse anzuhören und Verletzlichkeit zuzulassen.",
    ],

    workTitle:
      "Der Löwe im Beruf",

    workParagraphs: [
      "Im Berufsleben zeichnet sich der Löwe häufig durch Selbstvertrauen, Kreativität und die Fähigkeit aus, andere für eine Vision oder ein Projekt zu begeistern.",

      "Er kann sich besonders in Führung, Unternehmertum, Gestaltung, Unterricht, Unterhaltung, Kommunikation, Veranstaltungen oder Aufgaben wohlfühlen, die Eigeninitiative ermöglichen.",

      "Der Löwe muss spüren, dass seine Arbeit einen Wert besitzt und seine Anstrengungen anerkannt werden. Gleichzeitig profitiert er davon, zusammenzuarbeiten, ohne alles kontrollieren zu wollen, und die Beiträge anderer zu würdigen.",
    ],

    placementsTitle:
      "Sonne, Mond und Aszendent im Löwen",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sonne im Löwen",

        text:
          "Die Sonne im Löwen entwickelt ihre Identität durch Kreativität, Selbstvertrauen, Großzügigkeit und den Wunsch, authentisch zu strahlen.",

        link:
          "Die Sonne verstehen",
      },

      {
        symbol:
          "🌙",

        title:
          "Mond im Löwen",

        text:
          "Der Mond im Löwen braucht Wärme, Zuneigung, Anerkennung und kreative Freiheit, um emotionales Gleichgewicht zu finden.",

        link:
          "Den Mond verstehen",
      },

      {
        symbol:
          "↑",

        title:
          "Löwe-Aszendent",

        text:
          "Der Löwe-Aszendent vermittelt eine ausdrucksstarke, warme und charismatische Präsenz. Er begegnet dem Leben meist mit Vertrauen und Kreativität.",

        link:
          "Den Aszendenten verstehen",
      },
    ],

    compatibilityTitle:
      "Kompatibilität des Löwen",

    compatibilityParagraphs: [
      "Astrologische Kompatibilität beruht niemals allein auf dem Sonnenzeichen. Mond, Venus, Mars, Aszendent und die Aspekte zwischen beiden Horoskopen liefern wichtige Informationen.",

      "Einige Verbindungen können dennoch natürlicher wirken, wenn sie ein gemeinsames Bedürfnis nach Leidenschaft, Kreativität, Bewegung und persönlichem Ausdruck besitzen.",
    ],

    compatibilityLabel:
      "Löwe und",

    compatibilities: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Widder und Löwe teilen dynamische, mutige und leidenschaftliche Energie. Diese Beziehung kann Handlung, Begeisterung und ehrgeizige Projekte fördern.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Der Schütze nährt den Löwen durch Optimismus, Freiheit und Abenteuerlust. Gemeinsam können sie eine warme und inspirierende Beziehung schaffen.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Die Waage schätzt das Charisma und die Kreativität des Löwen. Der Löwe kann von ihrer Eleganz, ihrem Harmoniegefühl und ihrer sanften Beziehungsart angezogen werden.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Die Zwillinge regen den Löwen durch Neugier, Humor und Lebendigkeit an. Diese Verbindung fördert Kommunikation, gemeinsame Unternehmungen und kreative Projekte.",
      },
    ],

    natalTitle:
      "Der Löwe in Ihrem Geburtshoroskop",

    natalParagraphs: [
      "Der Löwe betrifft nicht nur Menschen, die unter diesem Zeichen geboren wurden. Jedes Geburtshoroskop enthält den Löwen in einem bestimmten astrologischen Haus.",

      "Dieses Haus zeigt den Lebensbereich, in dem Sie erschaffen, strahlen, Vertrauen entwickeln und Ihre Identität ausdrücken möchten. Planeten im Löwen verstärken diese Energie zusätzlich.",
    ],

    ctaKicker:
      "Entdecken Sie Ihr Geburtshoroskop",

    ctaTitle:
      "Wo befindet sich der Löwe in Ihrem Geburtshoroskop?",

    ctaText:
      "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Zeichen, Häuser, Ihren Aszendenten und die Positionen Ihrer Planeten.",

    ctaButton:
      "Mein Geburtshoroskop erstellen",

    faqKicker:
      "Häufige Fragen",

    faqTitle:
      "Fragen zum Löwen",

    faq: [
      {
        question:
          "Was sind die wichtigsten Eigenschaften des Löwen?",

        answer:
          "Der Löwe wird häufig mit Selbstvertrauen, Kreativität, Großzügigkeit, Loyalität, Mut und der Fähigkeit verbunden, andere zu inspirieren.",
      },

      {
        question:
          "Was sind die größten Herausforderungen des Löwen?",

        answer:
          "Der Löwe kann stark nach Anerkennung suchen, Schwierigkeiten haben, Kritik anzunehmen oder bestimmte Situationen kontrollieren wollen. Seine Entwicklung führt zu einem inneren Vertrauen, das weniger vom Blick anderer abhängt.",
      },

      {
        question:
          "Welcher Planet regiert den Löwen?",

        answer:
          "Der Löwe wird von der Sonne regiert, die traditionell mit Identität, Vitalität, Kreativität, Willenskraft und persönlicher Ausstrahlung verbunden ist.",
      },

      {
        question:
          "Welches Element gehört zum Löwen?",

        answer:
          "Der Löwe gehört zum Element Feuer. Dieses Element steht für Begeisterung, Handlung, Leidenschaft, Kreativität und den Wunsch, die eigene Identität vollständig auszudrücken.",
      },

      {
        question:
          "Wie erkenne ich, ob der Löwe in meinem Geburtshoroskop wichtig ist?",

        answer:
          "Der Löwe kann wichtig sein, wenn Sonne, Mond, Aszendent oder mehrere Planeten in diesem Zeichen stehen. Ein vollständiges Geburtshoroskop zeigt außerdem das astrologische Haus des Löwen.",
      },
    ],

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Leone: personalità, amore, lavoro e compatibilità | Luna Astralis",

      description:
        "Scopri il Leone in astrologia: personalità, qualità, sfide, amore, lavoro, compatibilità, Sole, elemento Fuoco, Luna e Ascendente Leone.",

      ogTitle:
        "Il Leone in astrologia: personalità, amore e compatibilità",

      ogDescription:
        "Guida completa al Leone: carattere, punti di forza, sfide, relazioni, carriera, Sole e principali compatibilità astrologiche.",

      twitterTitle:
        "Il segno del Leone | Luna Astralis",

      twitterDescription:
        "Scopri la personalità del Leone, le sue qualità, le sfide, le relazioni e le compatibilità astrologiche.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Il Leone in astrologia: personalità, amore, lavoro e compatibilità",

      description:
        "Guida completa al segno del Leone, alle sue qualità, sfide, relazioni, carriera e principali caratteristiche astrologiche.",
    },

    badge:
      "♌ Quinto segno dello zodiaco",

    title:
      "Il Leone in astrologia",

    lead:
      "Il Leone simboleggia lo splendore, la creatività, la fiducia e l’espressione personale. Questo segno di Fuoco cerca di vivere intensamente, condividere la propria luce e creare una vita di cui essere orgoglioso.",

    createChart:
      "Creare gratuitamente il mio tema natale",

    discoverLion:
      "Scoprire il Leone",

    personalityKicker:
      "Personalità del Leone",

    personalityTitle:
      "Che cosa rappresenta il segno del Leone?",

    personalityParagraphs: [
      "Il Leone è il quinto segno dello zodiaco. Rappresenta l’affermazione di sé, la creatività, la fiducia, la gioia di vivere e il bisogno di esprimere la propria identità con autenticità.",

      "Una persona fortemente influenzata dal Leone cerca generalmente di occupare pienamente il proprio posto. Desidera sviluppare i propri talenti, condividere ciò che la anima ed essere riconosciuta per il contributo personale che porta al mondo.",

      "Questa energia porta calore, coraggio e generosità. Richiede però di imparare a brillare senza dominare, accogliere le critiche con maturità e costruire una fiducia che non dipenda soltanto dall’approvazione altrui.",
    ],

    traitsTitle:
      "Le principali caratteristiche del Leone",

    traits: [
      {
        title:
          "Lo splendore",

        symbol:
          "☀",

        text:
          "Il Leone possiede un’energia naturalmente espressiva. Cerca di affermare la propria identità, condividere la propria luce e lasciare un’impronta personale in ciò che realizza.",
      },

      {
        title:
          "La creatività",

        symbol:
          "✦",

        text:
          "Questo segno ama creare, immaginare e dare vita a ciò che lo ispira. Il suo bisogno di espressione può manifestarsi nell’arte, nei progetti, nelle relazioni o nel suo modo unico di presentarsi.",
      },

      {
        title:
          "La generosità",

        symbol:
          "♡",

        text:
          "Il Leone dona spesso con calore e lealtà. Quando si sente apprezzato, può offrire molto sostegno, protezione ed entusiasmo alle persone che ama.",
      },
    ],

    pillarsTitle:
      "Elemento, modalità e astro governatore",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Elemento Fuoco",

        text:
          "Il Fuoco porta passione, entusiasmo, spontaneità e desiderio di agire. Alimenta nel Leone la volontà di creare, amare e vivere pienamente.",
      },

      {
        symbol:
          "◆",

        title:
          "Modalità fissa",

        text:
          "La modalità fissa favorisce perseveranza, fedeltà e capacità di mantenere una direzione. Può anche rafforzare ostinazione e resistenza al cambiamento.",
      },

      {
        symbol:
          "☀",

        title:
          "Astro governatore: il Sole",

        text:
          "Il Sole rappresenta identità, volontà, vitalità e splendore personale. Invita il Leone a sviluppare un’espressione autentica di sé.",
      },
    ],

    strengthsTitle:
      "I punti di forza e le sfide del Leone",

    strengthsKicker:
      "Punti di forza naturali",

    strengthsSubtitle:
      "Ciò che porta il Leone",

    strengths: [
      "Fiducia",
      "Creatività",
      "Generosità",
      "Lealtà",
      "Coraggio",
      "Capacità di ispirare",
    ],

    challengesKicker:
      "Punti di attenzione",

    challengesSubtitle:
      "Ciò che impara il Leone",

    challenges: [
      "Bisogno di riconoscimento",
      "Orgoglio",
      "Difficoltà ad accettare le critiche",
      "Tendenza a voler dirigere",
      "Drammatizzazione",
      "Paura di non essere apprezzato",
    ],

    loveTitle:
      "Il Leone in amore",

    loveParagraphs: [
      "In amore, il Leone cerca generalmente una relazione calda, appassionata e sincera. Ha bisogno di sentire che i suoi sentimenti sono riconosciuti, che la sua presenza è apprezzata e che la relazione possiede una vera intensità.",

      "Quando ama, il Leone può essere generoso, protettivo e profondamente leale. Apprezza i gesti d’affetto, i momenti romantici e l’orgoglio di costruire qualcosa di bello con la persona amata.",

      "La sua principale sfida consiste nel non confondere l’amore con l’ammirazione costante. Una relazione duratura richiede di lasciare spazio all’altra persona, ascoltare i suoi bisogni e accettare di mostrare vulnerabilità.",
    ],

    workTitle:
      "Il Leone nel lavoro",

    workParagraphs: [
      "Nella vita professionale, il Leone si distingue spesso per fiducia, creatività e capacità di coinvolgere gli altri attorno a una visione o a un progetto.",

      "Può trovarsi particolarmente a proprio agio nei settori legati alla direzione, all’imprenditoria, alla creazione, all’insegnamento, allo spettacolo, alla comunicazione, agli eventi o a qualunque ruolo permetta di prendere iniziative.",

      "Il Leone ha bisogno di sentire che il proprio lavoro possiede valore e che i suoi sforzi vengono riconosciuti. Trae però beneficio dal collaborare senza cercare di controllare tutto e dal valorizzare anche i contributi degli altri.",
    ],

    placementsTitle:
      "Sole, Luna e Ascendente in Leone",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sole in Leone",

        text:
          "Il Sole in Leone costruisce la propria identità attraverso creatività, fiducia, generosità e desiderio di brillare con autenticità.",

        link:
          "Comprendere il Sole",
      },

      {
        symbol:
          "🌙",

        title:
          "Luna in Leone",

        text:
          "La Luna in Leone ha bisogno di calore, affetto, riconoscimento e libertà creativa per ritrovare l’equilibrio emotivo.",

        link:
          "Comprendere la Luna",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente Leone",

        text:
          "L’Ascendente Leone dona una presenza espressiva, calorosa e carismatica. Affronta generalmente la vita con fiducia e creatività.",

        link:
          "Comprendere l’Ascendente",
      },
    ],

    compatibilityTitle:
      "Le compatibilità del Leone",

    compatibilityParagraphs: [
      "Le compatibilità astrologiche non dipendono mai soltanto dal segno solare. La Luna, Venere, Marte, l’Ascendente e gli aspetti tra i due temi forniscono informazioni essenziali.",

      "Alcune associazioni possono tuttavia sembrare naturalmente più armoniose quando condividono un bisogno di passione, creatività, movimento ed espressione personale.",
    ],

    compatibilityLabel:
      "Leone e",

    compatibilities: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Ariete e Leone condividono un’energia dinamica, coraggiosa e appassionata. Questa relazione può favorire azione, entusiasmo e progetti ambiziosi.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Il Sagittario nutre il Leone attraverso ottimismo, libertà e desiderio di avventura. Insieme possono creare una relazione calda e ispiratrice.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "La Bilancia apprezza il carisma e la creatività del Leone. Il Leone può essere attratto dalla sua eleganza, dal senso dell’armonia e dalla dolcezza relazionale.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "I Gemelli stimolano il Leone attraverso curiosità, umorismo e vivacità. Questa combinazione favorisce comunicazione, uscite e progetti creativi.",
      },
    ],

    natalTitle:
      "Il Leone nel tuo tema natale",

    natalParagraphs: [
      "Il Leone non riguarda soltanto le persone nate sotto questo segno. Ogni tema natale contiene il Leone in una particolare casa astrologica.",

      "Questa casa mostra l’ambito della vita in cui cerchi di creare, brillare, sviluppare fiducia ed esprimere la tua identità. La presenza di pianeti in Leone rafforza inoltre questa energia.",
    ],

    ctaKicker:
      "Scopri il tuo tema natale",

    ctaTitle:
      "Dove si trova il Leone nel tuo tema natale?",

    ctaText:
      "Genera gratuitamente il tuo tema natale per scoprire i tuoi segni, le case astrologiche, l’Ascendente e le posizioni dei pianeti.",

    ctaButton:
      "Creare il mio tema natale",

    faqKicker:
      "Domande frequenti",

    faqTitle:
      "Domande sul Leone",

    faq: [
      {
        question:
          "Quali sono le principali qualità del Leone?",

        answer:
          "Il Leone è spesso associato alla fiducia, alla creatività, alla generosità, alla lealtà, al coraggio e alla capacità di ispirare gli altri.",
      },

      {
        question:
          "Quali sono le principali sfide del Leone?",

        answer:
          "Il Leone può cercare fortemente il riconoscimento, avere difficoltà ad accettare le critiche o voler controllare determinate situazioni. La sua crescita passa attraverso una fiducia interiore meno dipendente dallo sguardo altrui.",
      },

      {
        question:
          "Quale pianeta governa il Leone?",

        answer:
          "Il Leone è governato dal Sole, astro tradizionalmente associato all’identità, alla vitalità, alla creatività, alla volontà e allo splendore personale.",
      },

      {
        question:
          "Qual è l’elemento del Leone?",

        answer:
          "Il Leone appartiene all’elemento Fuoco. Questo elemento è associato all’entusiasmo, all’azione, alla passione, alla creatività e al desiderio di esprimere pienamente la propria identità.",
      },

      {
        question:
          "Come sapere se il Leone è importante nel mio tema natale?",

        answer:
          "Il Leone può essere importante se il Sole, la Luna, l’Ascendente o diversi pianeti si trovano in questo segno. Un tema natale completo permette anche di scoprire la casa astrologica occupata dal Leone.",
      },
    ],

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Leão: personalidade, amor, trabalho e compatibilidades | Luna Astralis",

      description:
        "Descubra Leão na astrologia: personalidade, qualidades, desafios, amor, trabalho, compatibilidades, Sol, elemento Fogo, Lua e Ascendente em Leão.",

      ogTitle:
        "Leão na astrologia: personalidade, amor e compatibilidades",

      ogDescription:
        "Guia completo de Leão: personalidade, forças, desafios, relacionamentos, carreira, Sol e principais compatibilidades astrológicas.",

      twitterTitle:
        "O signo de Leão | Luna Astralis",

      twitterDescription:
        "Descubra a personalidade de Leão, suas qualidades, desafios, relacionamentos e compatibilidades astrológicas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Leão na astrologia: personalidade, amor, trabalho e compatibilidades",

      description:
        "Guia completo sobre o signo de Leão, suas qualidades, desafios, relacionamentos, carreira e principais características astrológicas.",
    },

    badge:
      "♌ Quinto signo do zodíaco",

    title:
      "Leão na astrologia",

    lead:
      "Leão simboliza o brilho, a criatividade, a confiança e a expressão pessoal. Este signo de Fogo procura viver intensamente, compartilhar sua luz e criar uma vida da qual possa se orgulhar.",

    createChart:
      "Criar meu mapa astral grátis",

    discoverLion:
      "Descobrir Leão",

    personalityKicker:
      "Personalidade de Leão",

    personalityTitle:
      "O que representa o signo de Leão?",

    personalityParagraphs: [
      "Leão é o quinto signo do zodíaco. Ele representa a afirmação pessoal, a criatividade, a confiança, a alegria de viver e a necessidade de expressar a identidade com autenticidade.",

      "Uma pessoa fortemente marcada por Leão geralmente procura ocupar plenamente seu lugar. Deseja desenvolver seus talentos, compartilhar o que a inspira e ser reconhecida pela contribuição pessoal que oferece ao mundo.",

      "Essa energia traz calor, coragem e generosidade. No entanto, exige aprender a brilhar sem dominar, receber críticas com maturidade e construir uma confiança que não dependa apenas da aprovação dos outros.",
    ],

    traitsTitle:
      "As principais características de Leão",

    traits: [
      {
        title:
          "O brilho",

        symbol:
          "☀",

        text:
          "Leão possui uma energia naturalmente expressiva. Procura afirmar sua identidade, compartilhar sua luz e deixar uma marca pessoal naquilo que realiza.",
      },

      {
        title:
          "A criatividade",

        symbol:
          "✦",

        text:
          "Este signo gosta de criar, imaginar e dar vida ao que o inspira. Sua necessidade de expressão pode aparecer na arte, nos projetos, nos relacionamentos ou em sua maneira única de se apresentar.",
      },

      {
        title:
          "A generosidade",

        symbol:
          "♡",

        text:
          "Leão costuma oferecer com calor e lealdade. Quando se sente valorizado, pode proporcionar muito apoio, proteção e entusiasmo às pessoas que ama.",
      },
    ],

    pillarsTitle:
      "Elemento, modalidade e astro regente",

    pillars: [
      {
        symbol:
          "🔥",

        title:
          "Elemento Fogo",

        text:
          "O Fogo traz paixão, entusiasmo, espontaneidade e desejo de agir. Ele alimenta em Leão a vontade de criar, amar e viver plenamente.",
      },

      {
        symbol:
          "◆",

        title:
          "Modalidade fixa",

        text:
          "A modalidade fixa favorece perseverança, lealdade e capacidade de manter uma direção. Também pode reforçar teimosia e resistência à mudança.",
      },

      {
        symbol:
          "☀",

        title:
          "Astro regente: o Sol",

        text:
          "O Sol representa identidade, vontade, vitalidade e brilho pessoal. Ele convida Leão a desenvolver uma expressão autêntica de si mesmo.",
      },
    ],

    strengthsTitle:
      "As forças e os desafios de Leão",

    strengthsKicker:
      "Forças naturais",

    strengthsSubtitle:
      "O que Leão oferece",

    strengths: [
      "Confiança",
      "Criatividade",
      "Generosidade",
      "Lealdade",
      "Coragem",
      "Capacidade de inspirar",
    ],

    challengesKicker:
      "Pontos de atenção",

    challengesSubtitle:
      "O que Leão aprende",

    challenges: [
      "Necessidade de reconhecimento",
      "Orgulho",
      "Dificuldade para aceitar críticas",
      "Tendência a querer liderar",
      "Dramatização",
      "Medo de não ser valorizado",
    ],

    loveTitle:
      "Leão no amor",

    loveParagraphs: [
      "No amor, Leão geralmente procura uma relação calorosa, apaixonada e sincera. Precisa sentir que seus sentimentos são reconhecidos, que sua presença é valorizada e que a relação possui verdadeira intensidade.",

      "Quando ama, Leão pode ser generoso, protetor e profundamente leal. Aprecia gestos de carinho, momentos românticos e o orgulho de construir algo bonito com a pessoa que ama.",

      "Seu principal desafio consiste em não confundir amor com admiração constante. Uma relação duradoura exige deixar espaço para a outra pessoa, ouvir suas necessidades e aceitar mostrar vulnerabilidade.",
    ],

    workTitle:
      "Leão no trabalho",

    workParagraphs: [
      "Na vida profissional, Leão costuma se destacar pela confiança, criatividade e capacidade de mobilizar outras pessoas em torno de uma visão ou projeto.",

      "Pode se sentir especialmente à vontade em áreas ligadas à liderança, empreendedorismo, criação, ensino, entretenimento, comunicação, eventos ou qualquer função que permita tomar iniciativas.",

      "Leão precisa sentir que seu trabalho possui valor e que seus esforços são reconhecidos. No entanto, se beneficia ao colaborar sem tentar controlar tudo e ao valorizar também as contribuições das pessoas ao redor.",
    ],

    placementsTitle:
      "Sol, Lua e Ascendente em Leão",

    placements: [
      {
        symbol:
          "☀️",

        title:
          "Sol em Leão",

        text:
          "O Sol em Leão constrói sua identidade por meio da criatividade, confiança, generosidade e desejo de brilhar com autenticidade.",

        link:
          "Compreender o Sol",
      },

      {
        symbol:
          "🌙",

        title:
          "Lua em Leão",

        text:
          "A Lua em Leão precisa de calor, afeto, reconhecimento e liberdade criativa para recuperar o equilíbrio emocional.",

        link:
          "Compreender a Lua",
      },

      {
        symbol:
          "↑",

        title:
          "Ascendente em Leão",

        text:
          "O Ascendente em Leão proporciona uma presença expressiva, calorosa e carismática. Geralmente aborda a vida com confiança e criatividade.",

        link:
          "Compreender o Ascendente",
      },
    ],

    compatibilityTitle:
      "As compatibilidades de Leão",

    compatibilityParagraphs: [
      "As compatibilidades astrológicas nunca dependem apenas do signo solar. A Lua, Vênus, Marte, o Ascendente e os aspectos entre os dois mapas fornecem informações essenciais.",

      "Algumas combinações podem, porém, parecer naturalmente mais harmoniosas quando compartilham uma necessidade de paixão, criatividade, movimento e expressão pessoal.",
    ],

    compatibilityLabel:
      "Leão e",

    compatibilities: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Áries e Leão compartilham uma energia dinâmica, corajosa e apaixonada. Essa relação pode favorecer ação, entusiasmo e projetos ambiciosos.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Sagitário alimenta Leão por meio de seu otimismo, liberdade e desejo de aventura. Juntos, podem criar uma relação calorosa e inspiradora.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Libra aprecia o carisma e a criatividade de Leão. Leão pode se sentir atraído por sua elegância, senso de harmonia e suavidade nos relacionamentos.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Gêmeos estimula Leão por meio de sua curiosidade, humor e vivacidade. Essa combinação favorece comunicação, passeios e projetos criativos.",
      },
    ],

    natalTitle:
      "Leão no seu mapa natal",

    natalParagraphs: [
      "Leão não diz respeito apenas às pessoas nascidas sob esse signo. Todo mapa natal contém Leão em uma determinada casa astrológica.",

      "Essa casa mostra a área da vida em que você procura criar, brilhar, desenvolver confiança e expressar sua identidade. A presença de planetas em Leão também reforça essa energia.",
    ],

    ctaKicker:
      "Descubra seu mapa natal",

    ctaTitle:
      "Onde Leão está no seu mapa natal?",

    ctaText:
      "Gere gratuitamente seu mapa natal para descobrir seus signos, suas casas astrológicas, seu Ascendente e as posições dos planetas.",

    ctaButton:
      "Criar meu mapa natal",

    faqKicker:
      "Perguntas frequentes",

    faqTitle:
      "Perguntas sobre Leão",

    faq: [
      {
        question:
          "Quais são as principais qualidades de Leão?",

        answer:
          "Leão costuma ser associado à confiança, criatividade, generosidade, lealdade, coragem e capacidade de inspirar outras pessoas.",
      },

      {
        question:
          "Quais são os principais desafios de Leão?",

        answer:
          "Leão pode buscar intensamente reconhecimento, ter dificuldade para aceitar críticas ou querer controlar determinadas situações. Seu crescimento passa por uma confiança interior menos dependente da opinião externa.",
      },

      {
        question:
          "Qual planeta governa Leão?",

        answer:
          "Leão é governado pelo Sol, astro tradicionalmente associado à identidade, vitalidade, criatividade, vontade e brilho pessoal.",
      },

      {
        question:
          "Qual é o elemento de Leão?",

        answer:
          "Leão pertence ao elemento Fogo. Esse elemento está associado ao entusiasmo, ação, paixão, criatividade e desejo de expressar plenamente a identidade.",
      },

      {
        question:
          "Como saber se Leão é importante no meu mapa natal?",

        answer:
          "Leão pode ser importante se seu Sol, sua Lua, seu Ascendente ou vários planetas estiverem nesse signo. Um mapa natal completo também permite descobrir a casa astrológica ocupada por Leão.",
      },
    ],

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
