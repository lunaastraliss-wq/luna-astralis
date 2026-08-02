// i18n/pages/astrologie/venus.ts

import type {
  Locale,
} from "@/i18n/config";

export type VenusSign = {
  sign: string;
  symbol: string;
  text: string;
};

export type VenusHouse = {
  house: string;
  text: string;
};

export type VenusInfoCard = {
  symbol: string;
  title: string;
  text: string;
};

export type VenusFunctionCard = {
  number: string;
  title: string;
  text: string;
};

export type VenusPillar = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
};

export type VenusAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type VenusFaqItem = {
  question: string;
  answer: string;
};

export type VenusPageText = {
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
    viewSigns: string;
  };

  meaning: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  loveAndValues: {
    title: string;
    cards: VenusInfoCard[];
  };

  functions: {
    title: string;
    cards: VenusFunctionCard[];
  };

  planets: {
    title: string;
    cards: VenusPillar[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  signs: VenusSign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  houses: VenusHouse[];

  retrograde: {
    kicker: string;
    title: string;
    paragraphs: string[];
    symbol: string;
    cardTitle: string;
    points: string[];
  };

  strengths: {
    title: string;

    strengthsKicker: string;
    strengthsTitle: string;
    strengths: string[];

    challengesKicker: string;
    challengesTitle: string;
    challenges: string[];
  };

  aspectsSection: {
    title: string;
    introduction: string;
  };

  aspects: VenusAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: VenusFaqItem[];
  };

  disclaimer: string;
};

export const VENUS_TRANSLATIONS:
  Record<
    Locale,
    VenusPageText
  > = {
  fr: {
    metadata: {
      title:
        "Vénus en astrologie : amour, relations, désir et valeurs | Luna Astralis",

      description:
        "Découvrez la signification de Vénus en astrologie, son influence sur l’amour, les relations, l’attirance, les valeurs et son expression dans les 12 signes du zodiaque.",

      ogTitle:
        "Vénus en astrologie : amour, attirance, plaisir et relations",

      ogDescription:
        "Comprenez le rôle de Vénus dans votre thème natal et découvrez comment cette planète influence votre manière d’aimer, vos valeurs et vos relations.",

      twitterTitle:
        "Vénus en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Vénus influence votre vie amoureuse, vos relations, vos goûts et vos valeurs.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Vénus en astrologie : amour, relations, attirance et valeurs",

      description:
        "Guide complet consacré au rôle de Vénus dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "♀ Planètes et thème natal",

      title:
        "Vénus en astrologie",

      lead:
        "Vénus représente votre manière d’aimer, ce qui vous attire, vos valeurs, votre rapport au plaisir et votre recherche d’harmonie dans les relations.",

      createChart:
        "Créer ma carte du ciel gratuite",

      viewSigns:
        "Voir les 12 signes",
    },

    meaning: {
      kicker:
        "Comprendre votre langage amoureux",

      title:
        "Que représente Vénus dans un thème astral ?",

      paragraphs: [
        "En astrologie, Vénus symbolise l’amour, l’attirance, les relations, le plaisir et les valeurs personnelles. Elle décrit ce qui vous touche, ce que vous trouvez beau et la manière dont vous recherchez l’harmonie.",

        "Sa position dans votre carte du ciel peut révéler la façon dont vous exprimez votre affection, les qualités que vous appréciez chez les autres et les conditions qui vous permettent de vous sentir aimé et valorisé.",

        "Vénus ne décrit pas à elle seule toute votre vie amoureuse. La Lune, Mars, la Maison V, la Maison VII et les aspects astrologiques apportent également des informations importantes sur vos besoins affectifs et relationnels.",
      ],
    },

    loveAndValues: {
      title:
        "Vénus, l’amour et les valeurs",

      cards: [
        {
          symbol:
            "♀",

          title:
            "Votre manière d’aimer",

          text:
            "Vénus décrit la façon dont vous exprimez votre affection et les gestes qui vous permettent de créer un lien harmonieux.",
        },

        {
          symbol:
            "♡",

          title:
            "Ce qui vous attire",

          text:
            "Elle révèle les qualités, les comportements et les ambiances qui éveillent votre intérêt et votre désir de rapprochement.",
        },

        {
          symbol:
            "✦",

          title:
            "Vos valeurs",

          text:
            "Vénus montre ce que vous appréciez, ce que vous cherchez à préserver et ce qui vous procure un véritable sentiment de satisfaction.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions de Vénus",

      cards: [
        {
          number:
            "01",

          title:
            "Attirer",

          text:
            "Vénus symbolise ce qui vous attire et la manière dont vous suscitez naturellement l’intérêt, la sympathie ou le rapprochement.",
        },

        {
          number:
            "02",

          title:
            "Aimer",

          text:
            "Elle décrit votre manière d’offrir de l’affection, de recevoir l’amour et de construire une relation agréable.",
        },

        {
          number:
            "03",

          title:
            "Apprécier",

          text:
            "Vénus représente vos goûts, vos préférences, votre sens esthétique et votre rapport aux plaisirs de la vie.",
        },

        {
          number:
            "04",

          title:
            "Harmoniser",

          text:
            "Elle recherche l’équilibre, la coopération, la réciprocité et la création de liens plus doux et plus respectueux.",
        },
      ],
    },

    planets: {
      title:
        "Vénus, la Lune et Mars",

      cards: [
        {
          symbol:
            "🌙",

          title:
            "La Lune",

          text:
            "Elle représente vos besoins émotionnels, vos réactions instinctives et votre sentiment de sécurité intérieure.",

          link:
            "/astrologie/lune",

          linkLabel:
            "Découvrir la Lune",
        },

        {
          symbol:
            "♀",

          title:
            "Vénus",

          text:
            "Elle décrit votre manière d’aimer, vos goûts, vos valeurs et ce qui vous attire dans une relation.",
        },

        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "Il représente le désir, l’action, l’élan, l’affirmation et la manière dont vous poursuivez ce que vous voulez.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions de Vénus",

      title:
        "Vénus dans les 12 signes astrologiques",

      introduction:
        "Vénus conserve toujours sa fonction d’amour, de plaisir, d’attirance et d’harmonie. Le signe dans lequel elle se trouve décrit la manière particulière dont ces qualités s’expriment.",

      titlePrefix:
        "Vénus en",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Vénus en Bélier aime avec spontanéité, enthousiasme et intensité. Cette position recherche des relations vivantes, stimulantes et capables d’entretenir le désir de découverte.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Vénus en Taureau recherche la stabilité, la sensualité et la fidélité. L’amour s’exprime souvent par la présence, les gestes concrets, le toucher et la création d’un environnement sécurisant.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Vénus en Gémeaux est attirée par les échanges, l’intelligence et la curiosité. La complicité mentale, l’humour et la liberté de communiquer occupent une place essentielle dans les relations.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Vénus en Cancer aime avec sensibilité, douceur et attachement. Elle recherche une relation rassurante, intime et profondément liée au sentiment de sécurité émotionnelle.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Vénus en Lion exprime l’amour avec chaleur, générosité et créativité. Elle souhaite se sentir choisie, admirée et pleinement engagée dans une relation vivante et sincère.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Vénus en Vierge montre son affection par l’attention, la disponibilité et les gestes utiles. Elle recherche une relation honnête, cohérente et construite sur la confiance quotidienne.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Vénus en Balance accorde une grande importance à l’harmonie, au dialogue et à l’équilibre. Elle recherche une relation élégante, respectueuse et fondée sur la réciprocité.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Vénus en Scorpion aime avec intensité, profondeur et loyauté. Elle recherche une connexion authentique, transformatrice et capable de dépasser les apparences superficielles.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Vénus en Sagittaire associe l’amour à la liberté, à l’aventure et à l’élargissement des horizons. Elle apprécie les relations qui permettent de grandir, d’explorer et de rester pleinement soi-même.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Vénus en Capricorne recherche la stabilité, la loyauté et la maturité. L’amour se construit progressivement par les engagements, les responsabilités partagées et la confiance.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Vénus en Verseau valorise l’indépendance, l’originalité et la complicité intellectuelle. Elle recherche une relation libre, sincère et capable de respecter l’individualité de chacun.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Vénus en Poissons aime avec compassion, romantisme et intuition. Elle recherche une connexion émotionnelle et spirituelle profonde, tout en devant préserver des limites relationnelles claires.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines du cœur",

      title:
        "Vénus dans les 12 maisons astrologiques",

      introduction:
        "Le signe de Vénus décrit votre style amoureux, tandis que sa maison indique le domaine de vie dans lequel l’amour, le plaisir, les valeurs et la recherche d’harmonie prennent une importance particulière.",

      titlePrefix:
        "Vénus en",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Vénus en Maison I renforce le charme, la douceur et le besoin de créer des relations harmonieuses. La personne peut exprimer naturellement une présence agréable, attirante ou diplomatique.",
      },

      {
        house:
          "Maison II",

        text:
          "Vénus en Maison II relie les relations aux valeurs, au confort et à la sécurité matérielle. La personne accorde souvent une importance particulière à la qualité, à la stabilité et au plaisir des sens.",
      },

      {
        house:
          "Maison III",

        text:
          "Vénus en Maison III favorise une communication aimable, séduisante et conciliante. Les échanges, l’écriture, les apprentissages et les liens de proximité peuvent procurer beaucoup de plaisir.",
      },

      {
        house:
          "Maison IV",

        text:
          "Vénus en Maison IV recherche l’harmonie dans le foyer et la vie privée. La personne peut avoir besoin de créer un environnement chaleureux, esthétique et émotionnellement sécurisant.",
      },

      {
        house:
          "Maison V",

        text:
          "Vénus en Maison V renforce le romantisme, la créativité, la séduction et le plaisir d’aimer. Cette position peut favoriser l’expression artistique et le besoin de vivre des relations inspirantes.",
      },

      {
        house:
          "Maison VI",

        text:
          "Vénus en Maison VI exprime l’affection par l’aide, la présence et les gestes quotidiens. La personne recherche souvent un environnement de travail harmonieux et des habitudes agréables.",
      },

      {
        house:
          "Maison VII",

        text:
          "Vénus en Maison VII souligne l’importance du couple, de la coopération et de l’équilibre relationnel. La personne s’épanouit souvent à travers les partenariats et les engagements réciproques.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Vénus en Maison VIII recherche une intimité profonde, émotionnelle et transformatrice. Les relations peuvent être vécues avec intensité, attachement et désir de fusion.",
      },

      {
        house:
          "Maison IX",

        text:
          "Vénus en Maison IX associe l’amour à la découverte, aux voyages et à l’ouverture culturelle. La personne peut être attirée par des relations qui élargissent sa vision du monde.",
      },

      {
        house:
          "Maison X",

        text:
          "Vénus en Maison X peut favoriser une image publique agréable, diplomatique ou créative. Les relations, l’esthétique ou la recherche d’harmonie peuvent jouer un rôle important dans la vocation.",
      },

      {
        house:
          "Maison XI",

        text:
          "Vénus en Maison XI valorise l’amitié, les réseaux et les projets collectifs. Les relations amoureuses peuvent naître d’une complicité intellectuelle ou d’un idéal partagé.",
      },

      {
        house:
          "Maison XII",

        text:
          "Vénus en Maison XII donne une vie affective intérieure, sensible et parfois secrète. La personne peut idéaliser l’amour et doit apprendre à reconnaître clairement ses besoins et ses limites.",
      },
    ],

    retrograde: {
      kicker:
        "Réflexion affective",

      title:
        "Que signifie Vénus rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Vénus semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un mouvement apparent produit par la position relative de la Terre et de Vénus.",

        "Dans l’interprétation astrologique, une période de Vénus rétrograde est souvent associée à une réflexion sur les relations, les valeurs, l’estime de soi, les désirs et les attentes affectives.",

        "Elle ne signifie pas automatiquement qu’une relation va se terminer ou qu’un ancien amour reviendra. Elle peut plutôt inviter à observer ce qui vous rend réellement heureux et à clarifier vos besoins.",
      ],

      symbol:
        "♀℞",

      cardTitle:
        "Une invitation à réévaluer",

      points: [
        "Repenser ses attentes amoureuses",
        "Clarifier ses valeurs",
        "Observer son rapport au plaisir",
        "Réviser ses limites relationnelles",
        "Renforcer l’estime de soi",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis de Vénus",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Créer des liens harmonieux",

      strengths: [
        "Sensibilité relationnelle",
        "Diplomatie",
        "Capacité à apprécier la beauté",
        "Tendresse et affection",
        "Recherche de réciprocité",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Préserver son équilibre personnel",

      challenges: [
        "Besoin excessif d’approbation",
        "Difficulté à poser des limites",
        "Idéalisation des relations",
        "Peur du conflit",
        "Dépendance au regard des autres",
      ],
    },

    aspectsSection: {
      title:
        "Les aspects astrologiques de Vénus",

      introduction:
        "Les aspects relient Vénus aux autres planètes de votre thème natal. Ils apportent des nuances à votre manière d’aimer, à vos valeurs et à votre façon de vivre l’attirance et les relations.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Vénus avec l’énergie d’une autre planète et renforce leur expression commune dans la vie affective.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une circulation naturelle entre les sentiments, les valeurs et les qualités de l’autre planète.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel de coopération, d’ouverture et d’épanouissement dans les relations.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut révéler une tension entre les désirs, les valeurs et les attentes, invitant à développer plus de conscience.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à trouver un équilibre entre ses propres besoins affectifs et ceux des autres.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Vénus ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Vénus, votre Soleil, votre Lune, votre Ascendant et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Vénus en astrologie",

      items: [
        {
          question:
            "Que représente Vénus en astrologie ?",

          answer:
            "Vénus représente symboliquement l’amour, l’attirance, les relations, le plaisir, les goûts personnels, les valeurs et la manière dont une personne cherche l’harmonie.",
        },

        {
          question:
            "Que signifie le signe de Vénus ?",

          answer:
            "Le signe de Vénus décrit votre manière d’aimer, ce qui vous attire, ce que vous appréciez dans une relation et la façon dont vous exprimez votre affection.",
        },

        {
          question:
            "Vénus représente-t-elle seulement la vie amoureuse ?",

          answer:
            "Non. Vénus concerne aussi les valeurs, le rapport au plaisir, l’esthétique, la créativité, la diplomatie et la manière dont vous recherchez l’équilibre.",
        },

        {
          question:
            "Que signifie Vénus rétrograde dans un thème natal ?",

          answer:
            "Dans l’interprétation astrologique, Vénus rétrograde à la naissance peut symboliser une manière plus intérieure ou personnelle de vivre les sentiments, les valeurs et l’estime de soi.",
        },

        {
          question:
            "Vénus rétrograde annonce-t-elle une rupture ?",

          answer:
            "Non. L’astrologie ne permet pas d’affirmer qu’une rupture se produira. Cette période est plutôt interprétée comme une invitation à réfléchir aux relations, aux valeurs et aux attentes affectives.",
        },

        {
          question:
            "Comment connaître mon signe de Vénus ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Vénus.",
        },

        {
          question:
            "Quelle différence entre Vénus et la Lune ?",

          answer:
            "La Lune représente les besoins émotionnels et la sécurité intérieure, tandis que Vénus décrit la manière d’aimer, les goûts, l’attirance et les valeurs relationnelles.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Venus in Astrology: Love, Relationships, Desire and Values | Luna Astralis",

      description:
        "Discover the meaning of Venus in astrology, its influence on love, relationships, attraction, values and its expression through the 12 zodiac signs.",

      ogTitle:
        "Venus in Astrology: Love, Attraction, Pleasure and Relationships",

      ogDescription:
        "Understand the role of Venus in your birth chart and discover how this planet influences the way you love, your values and your relationships.",

      twitterTitle:
        "Venus in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Venus influences your love life, relationships, tastes and values.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Venus in Astrology: Love, Relationships, Attraction and Values",

      description:
        "A complete guide to the role of Venus in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "♀ Planets and birth chart",

      title:
        "Venus in Astrology",

      lead:
        "Venus represents the way you love, what attracts you, your values, your relationship with pleasure and your search for harmony in relationships.",

      createChart:
        "Create my free birth chart",

      viewSigns:
        "View the 12 signs",
    },

    meaning: {
      kicker:
        "Understanding your love language",

      title:
        "What does Venus represent in a birth chart?",

      paragraphs: [
        "In astrology, Venus symbolizes love, attraction, relationships, pleasure and personal values. It describes what touches you, what you find beautiful and how you seek harmony.",

        "Its position in your birth chart may reveal how you express affection, the qualities you appreciate in others and the conditions that allow you to feel loved and valued.",

        "Venus alone does not describe your entire love life. The Moon, Mars, the fifth house, the seventh house and astrological aspects also provide important information about emotional and relational needs.",
      ],
    },

    loveAndValues: {
      title:
        "Venus, love and values",

      cards: [
        {
          symbol:
            "♀",

          title:
            "The way you love",

          text:
            "Venus describes how you express affection and the gestures that allow you to create a harmonious bond.",
        },

        {
          symbol:
            "♡",

          title:
            "What attracts you",

          text:
            "It reveals the qualities, behaviors and atmospheres that awaken your interest and desire for closeness.",
        },

        {
          symbol:
            "✦",

          title:
            "Your values",

          text:
            "Venus shows what you appreciate, what you seek to preserve and what gives you a genuine feeling of satisfaction.",
        },
      ],
    },

    functions: {
      title:
        "The main functions of Venus",

      cards: [
        {
          number:
            "01",

          title:
            "Attract",

          text:
            "Venus symbolizes what attracts you and how you naturally inspire interest, sympathy or closeness.",
        },

        {
          number:
            "02",

          title:
            "Love",

          text:
            "It describes how you offer affection, receive love and build an enjoyable relationship.",
        },

        {
          number:
            "03",

          title:
            "Appreciate",

          text:
            "Venus represents your tastes, preferences, aesthetic sense and relationship with life’s pleasures.",
        },

        {
          number:
            "04",

          title:
            "Harmonize",

          text:
            "It seeks balance, cooperation, reciprocity and the creation of gentler, more respectful bonds.",
        },
      ],
    },

    planets: {
      title:
        "Venus, the Moon and Mars",

      cards: [
        {
          symbol:
            "🌙",

          title:
            "The Moon",

          text:
            "It represents your emotional needs, instinctive reactions and sense of inner security.",

          link:
            "/astrologie/lune",

          linkLabel:
            "Discover the Moon",
        },

        {
          symbol:
            "♀",

          title:
            "Venus",

          text:
            "It describes how you love, your tastes, your values and what attracts you in a relationship.",
        },

        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "It represents desire, action, drive, assertion and how you pursue what you want.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Venus",

      title:
        "Venus in the 12 zodiac signs",

      introduction:
        "Venus always retains its function of love, pleasure, attraction and harmony. The sign it occupies describes the particular way these qualities are expressed.",

      titlePrefix:
        "Venus in",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Venus in Aries loves with spontaneity, enthusiasm and intensity. This placement seeks lively, stimulating relationships that maintain a desire for discovery.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Venus in Taurus seeks stability, sensuality and loyalty. Love is often expressed through presence, practical gestures, touch and the creation of a secure environment.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Venus in Gemini is attracted to conversation, intelligence and curiosity. Mental connection, humor and freedom of communication are essential in relationships.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Venus in Cancer loves with sensitivity, tenderness and attachment. It seeks a reassuring, intimate relationship deeply connected with emotional security.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Venus in Leo expresses love with warmth, generosity and creativity. It wants to feel chosen, admired and fully engaged in a lively and sincere relationship.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Venus in Virgo shows affection through attentiveness, availability and helpful gestures. It seeks an honest, consistent relationship built on everyday trust.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Venus in Libra places great importance on harmony, dialogue and balance. It seeks an elegant, respectful relationship based on reciprocity.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Venus in Scorpio loves with intensity, depth and loyalty. It seeks an authentic, transformative connection capable of moving beyond superficial appearances.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Venus in Sagittarius connects love with freedom, adventure and expanding horizons. It appreciates relationships that allow growth, exploration and authentic self-expression.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Venus in Capricorn seeks stability, loyalty and maturity. Love develops gradually through commitment, shared responsibilities and trust.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Venus in Aquarius values independence, originality and intellectual connection. It seeks a free and sincere relationship that respects each person’s individuality.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Venus in Pisces loves with compassion, romance and intuition. It seeks a deep emotional and spiritual connection while needing to preserve clear relational boundaries.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of the heart",

      title:
        "Venus in the 12 astrological houses",

      introduction:
        "The sign of Venus describes your style of love, while its house indicates the area of life in which love, pleasure, values and the search for harmony become especially important.",

      titlePrefix:
        "Venus in",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Venus in House I strengthens charm, gentleness and the need to create harmonious relationships. The person may naturally express a pleasant, attractive or diplomatic presence.",
      },

      {
        house:
          "House II",

        text:
          "Venus in House II connects relationships with values, comfort and material security. The person often gives particular importance to quality, stability and sensory pleasure.",
      },

      {
        house:
          "House III",

        text:
          "Venus in House III encourages kind, attractive and conciliatory communication. Conversation, writing, learning and close relationships may provide considerable pleasure.",
      },

      {
        house:
          "House IV",

        text:
          "Venus in House IV seeks harmony in the home and private life. The person may need to create a warm, beautiful and emotionally secure environment.",
      },

      {
        house:
          "House V",

        text:
          "Venus in House V strengthens romance, creativity, seduction and the pleasure of loving. This placement may encourage artistic expression and the desire for inspiring relationships.",
      },

      {
        house:
          "House VI",

        text:
          "Venus in House VI expresses affection through help, presence and everyday gestures. The person often seeks a harmonious work environment and pleasant routines.",
      },

      {
        house:
          "House VII",

        text:
          "Venus in House VII emphasizes partnership, cooperation and relational balance. The person often flourishes through partnerships and mutual commitments.",
      },

      {
        house:
          "House VIII",

        text:
          "Venus in House VIII seeks deep, emotional and transformative intimacy. Relationships may be experienced with intensity, attachment and a desire for fusion.",
      },

      {
        house:
          "House IX",

        text:
          "Venus in House IX connects love with discovery, travel and cultural openness. The person may be attracted to relationships that expand their worldview.",
      },

      {
        house:
          "House X",

        text:
          "Venus in House X may support a pleasant, diplomatic or creative public image. Relationships, aesthetics or the search for harmony may play an important role in vocation.",
      },

      {
        house:
          "House XI",

        text:
          "Venus in House XI values friendship, networks and collective projects. Romantic relationships may emerge from intellectual connection or a shared ideal.",
      },

      {
        house:
          "House XII",

        text:
          "Venus in House XII creates a sensitive, inward and sometimes secret emotional life. The person may idealize love and must learn to recognize needs and boundaries clearly.",
      },
    ],

    retrograde: {
      kicker:
        "Emotional reflection",

      title:
        "What does Venus retrograde mean?",

      paragraphs: [
        "From Earth, Venus sometimes appears to slow down and temporarily move backward in the sky. This is an apparent motion produced by the relative positions of Earth and Venus.",

        "In astrological interpretation, a Venus retrograde period is often associated with reflection on relationships, values, self-esteem, desires and emotional expectations.",

        "It does not automatically mean that a relationship will end or that a former love will return. It may instead encourage you to observe what truly makes you happy and clarify your needs.",
      ],

      symbol:
        "♀℞",

      cardTitle:
        "An invitation to reassess",

      points: [
        "Reconsider romantic expectations",
        "Clarify personal values",
        "Observe your relationship with pleasure",
        "Review relational boundaries",
        "Strengthen self-esteem",
      ],
    },

    strengths: {
      title:
        "Venus strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "Creating harmonious bonds",

      strengths: [
        "Relational sensitivity",
        "Diplomacy",
        "Ability to appreciate beauty",
        "Tenderness and affection",
        "Search for reciprocity",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Preserving personal balance",

      challenges: [
        "Excessive need for approval",
        "Difficulty setting boundaries",
        "Idealization of relationships",
        "Fear of conflict",
        "Dependence on other people’s opinions",
      ],
    },

    aspectsSection: {
      title:
        "The astrological aspects of Venus",

      introduction:
        "Aspects connect Venus with the other planets in your birth chart. They add nuance to the way you love, your values and how you experience attraction and relationships.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Venus with the energy of another planet and strengthens their combined expression in emotional life.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a natural flow between feelings, values and the qualities of the other planet.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for cooperation, openness and fulfillment in relationships.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may reveal tension between desires, values and expectations, encouraging greater awareness.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It encourages balance between your own emotional needs and those of other people.",
      },
    ],

    cta: {
      kicker:
        "Discover your placement",

      title:
        "In which sign and house is your Venus?",

      text:
        "Generate your free birth chart to discover Venus, your Sun, Moon, Ascendant and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Venus in astrology",

      items: [
        {
          question:
            "What does Venus represent in astrology?",

          answer:
            "Venus symbolically represents love, attraction, relationships, pleasure, personal tastes, values and the way a person seeks harmony.",
        },

        {
          question:
            "What does the Venus sign mean?",

          answer:
            "The Venus sign describes how you love, what attracts you, what you appreciate in a relationship and how you express affection.",
        },

        {
          question:
            "Does Venus only represent romantic life?",

          answer:
            "No. Venus also concerns values, pleasure, aesthetics, creativity, diplomacy and the way you seek balance.",
        },

        {
          question:
            "What does Venus retrograde mean in a birth chart?",

          answer:
            "In astrological interpretation, Venus retrograde at birth may symbolize a more inward or personal way of experiencing feelings, values and self-esteem.",
        },

        {
          question:
            "Does Venus retrograde predict a breakup?",

          answer:
            "No. Astrology cannot establish that a breakup will occur. This period is instead interpreted as an invitation to reflect on relationships, values and emotional expectations.",
        },

        {
          question:
            "How can I know my Venus sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine the exact position of Venus.",
        },

        {
          question:
            "What is the difference between Venus and the Moon?",

          answer:
            "The Moon represents emotional needs and inner security, while Venus describes the way you love, your tastes, attraction and relational values.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Venus en astrología: amor, relaciones, deseo y valores | Luna Astralis",

      description:
        "Descubre el significado de Venus en astrología, su influencia en el amor, las relaciones, la atracción, los valores y su expresión en los 12 signos del zodiaco.",

      ogTitle:
        "Venus en astrología: amor, atracción, placer y relaciones",

      ogDescription:
        "Comprende el papel de Venus en tu carta natal y descubre cómo este planeta influye en tu manera de amar, tus valores y tus relaciones.",

      twitterTitle:
        "Venus en astrología | Luna Astralis",

      twitterDescription:
        "Descubre cómo Venus influye en tu vida amorosa, tus relaciones, tus gustos y tus valores.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Venus en astrología: amor, relaciones, atracción y valores",

      description:
        "Guía completa sobre el papel de Venus en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "♀ Planetas y carta natal",

      title:
        "Venus en astrología",

      lead:
        "Venus representa tu manera de amar, aquello que te atrae, tus valores, tu relación con el placer y tu búsqueda de armonía en las relaciones.",

      createChart:
        "Crear mi carta natal gratis",

      viewSigns:
        "Ver los 12 signos",
    },

    meaning: {
      kicker:
        "Comprender tu lenguaje amoroso",

      title:
        "¿Qué representa Venus en una carta natal?",

      paragraphs: [
        "En astrología, Venus simboliza el amor, la atracción, las relaciones, el placer y los valores personales. Describe aquello que te conmueve, lo que encuentras bello y la manera en que buscas la armonía.",

        "Su posición en tu carta natal puede revelar cómo expresas tu afecto, las cualidades que aprecias en los demás y las condiciones que te permiten sentirte amado y valorado.",

        "Venus no describe por sí sola toda tu vida amorosa. La Luna, Marte, la Casa V, la Casa VII y los aspectos astrológicos también aportan información importante sobre tus necesidades afectivas y relacionales.",
      ],
    },

    loveAndValues: {
      title:
        "Venus, el amor y los valores",

      cards: [
        {
          symbol:
            "♀",

          title:
            "Tu manera de amar",

          text:
            "Venus describe cómo expresas tu afecto y los gestos que te permiten crear un vínculo armonioso.",
        },

        {
          symbol:
            "♡",

          title:
            "Lo que te atrae",

          text:
            "Revela las cualidades, los comportamientos y los ambientes que despiertan tu interés y tu deseo de acercamiento.",
        },

        {
          symbol:
            "✦",

          title:
            "Tus valores",

          text:
            "Venus muestra lo que aprecias, lo que buscas preservar y aquello que te proporciona una verdadera sensación de satisfacción.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Venus",

      cards: [
        {
          number:
            "01",

          title:
            "Atraer",

          text:
            "Venus simboliza aquello que te atrae y la manera en que despiertas naturalmente interés, simpatía o acercamiento.",
        },

        {
          number:
            "02",

          title:
            "Amar",

          text:
            "Describe tu manera de ofrecer afecto, recibir amor y construir una relación agradable.",
        },

        {
          number:
            "03",

          title:
            "Apreciar",

          text:
            "Venus representa tus gustos, preferencias, sentido estético y relación con los placeres de la vida.",
        },

        {
          number:
            "04",

          title:
            "Armonizar",

          text:
            "Busca el equilibrio, la cooperación, la reciprocidad y la creación de vínculos más suaves y respetuosos.",
        },
      ],
    },

    planets: {
      title:
        "Venus, la Luna y Marte",

      cards: [
        {
          symbol:
            "🌙",

          title:
            "La Luna",

          text:
            "Representa tus necesidades emocionales, tus reacciones instintivas y tu sensación de seguridad interior.",

          link:
            "/astrologie/lune",

          linkLabel:
            "Descubrir la Luna",
        },

        {
          symbol:
            "♀",

          title:
            "Venus",

          text:
            "Describe tu manera de amar, tus gustos, tus valores y aquello que te atrae en una relación.",
        },

        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Representa el deseo, la acción, el impulso, la afirmación y la manera en que persigues lo que quieres.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Venus",

      title:
        "Venus en los 12 signos del zodiaco",

      introduction:
        "Venus conserva siempre su función de amor, placer, atracción y armonía. El signo en el que se encuentra describe la manera particular en que se expresan estas cualidades.",

      titlePrefix:
        "Venus en",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Venus en Aries ama con espontaneidad, entusiasmo e intensidad. Esta posición busca relaciones vivas, estimulantes y capaces de mantener el deseo de descubrimiento.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Venus en Tauro busca estabilidad, sensualidad y fidelidad. El amor suele expresarse mediante la presencia, los gestos concretos, el contacto y la creación de un entorno seguro.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Venus en Géminis se siente atraída por los intercambios, la inteligencia y la curiosidad. La complicidad mental, el humor y la libertad para comunicarse ocupan un lugar esencial en las relaciones.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Venus en Cáncer ama con sensibilidad, dulzura y apego. Busca una relación reconfortante, íntima y profundamente vinculada con la seguridad emocional.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Venus en Leo expresa el amor con calidez, generosidad y creatividad. Desea sentirse elegida, admirada y plenamente comprometida en una relación viva y sincera.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Venus en Virgo demuestra su afecto mediante la atención, la disponibilidad y los gestos útiles. Busca una relación honesta, coherente y construida sobre la confianza cotidiana.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Venus en Libra concede una gran importancia a la armonía, el diálogo y el equilibrio. Busca una relación elegante, respetuosa y basada en la reciprocidad.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Venus en Escorpio ama con intensidad, profundidad y lealtad. Busca una conexión auténtica, transformadora y capaz de superar las apariencias superficiales.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Venus en Sagitario asocia el amor con la libertad, la aventura y la ampliación de horizontes. Aprecia las relaciones que permiten crecer, explorar y seguir siendo plenamente uno mismo.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Venus en Capricornio busca estabilidad, lealtad y madurez. El amor se construye progresivamente mediante compromisos, responsabilidades compartidas y confianza.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Venus en Acuario valora la independencia, la originalidad y la complicidad intelectual. Busca una relación libre, sincera y capaz de respetar la individualidad de cada persona.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Venus en Piscis ama con compasión, romanticismo e intuición. Busca una conexión emocional y espiritual profunda, al mismo tiempo que necesita conservar límites relacionales claros.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos del corazón",

      title:
        "Venus en las 12 casas astrológicas",

      introduction:
        "El signo de Venus describe tu estilo amoroso, mientras que su casa indica el ámbito de vida en el que el amor, el placer, los valores y la búsqueda de armonía adquieren una importancia particular.",

      titlePrefix:
        "Venus en",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Venus en la Casa I refuerza el encanto, la dulzura y la necesidad de crear relaciones armoniosas. La persona puede expresar naturalmente una presencia agradable, atractiva o diplomática.",
      },

      {
        house:
          "Casa II",

        text:
          "Venus en la Casa II relaciona las relaciones con los valores, la comodidad y la seguridad material. La persona suele conceder una importancia especial a la calidad, la estabilidad y el placer de los sentidos.",
      },

      {
        house:
          "Casa III",

        text:
          "Venus en la Casa III favorece una comunicación amable, seductora y conciliadora. Los intercambios, la escritura, el aprendizaje y los vínculos cercanos pueden proporcionar mucho placer.",
      },

      {
        house:
          "Casa IV",

        text:
          "Venus en la Casa IV busca armonía en el hogar y la vida privada. La persona puede necesitar crear un entorno cálido, bello y emocionalmente seguro.",
      },

      {
        house:
          "Casa V",

        text:
          "Venus en la Casa V refuerza el romanticismo, la creatividad, la seducción y el placer de amar. Esta posición puede favorecer la expresión artística y el deseo de vivir relaciones inspiradoras.",
      },

      {
        house:
          "Casa VI",

        text:
          "Venus en la Casa VI expresa afecto mediante la ayuda, la presencia y los gestos cotidianos. La persona suele buscar un entorno laboral armonioso y rutinas agradables.",
      },

      {
        house:
          "Casa VII",

        text:
          "Venus en la Casa VII destaca la importancia de la pareja, la cooperación y el equilibrio relacional. La persona suele desarrollarse a través de las asociaciones y los compromisos recíprocos.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Venus en la Casa VIII busca una intimidad profunda, emocional y transformadora. Las relaciones pueden vivirse con intensidad, apego y deseo de fusión.",
      },

      {
        house:
          "Casa IX",

        text:
          "Venus en la Casa IX asocia el amor con el descubrimiento, los viajes y la apertura cultural. La persona puede sentirse atraída por relaciones que amplían su visión del mundo.",
      },

      {
        house:
          "Casa X",

        text:
          "Venus en la Casa X puede favorecer una imagen pública agradable, diplomática o creativa. Las relaciones, la estética o la búsqueda de armonía pueden desempeñar un papel importante en la vocación.",
      },

      {
        house:
          "Casa XI",

        text:
          "Venus en la Casa XI valora la amistad, las redes y los proyectos colectivos. Las relaciones amorosas pueden surgir de una complicidad intelectual o de un ideal compartido.",
      },

      {
        house:
          "Casa XII",

        text:
          "Venus en la Casa XII genera una vida afectiva interior, sensible y a veces secreta. La persona puede idealizar el amor y debe aprender a reconocer claramente sus necesidades y límites.",
      },
    ],

    retrograde: {
      kicker:
        "Reflexión afectiva",

      title:
        "¿Qué significa Venus retrógrado?",

      paragraphs: [
        "Desde la Tierra, Venus parece a veces ralentizarse y retroceder temporalmente en el cielo. Se trata de un movimiento aparente producido por la posición relativa de la Tierra y Venus.",

        "En la interpretación astrológica, un período de Venus retrógrado suele asociarse con una reflexión sobre las relaciones, los valores, la autoestima, los deseos y las expectativas afectivas.",

        "No significa automáticamente que una relación vaya a terminar o que un antiguo amor vaya a regresar. Puede invitar más bien a observar qué te hace realmente feliz y a aclarar tus necesidades.",
      ],

      symbol:
        "♀℞",

      cardTitle:
        "Una invitación a reevaluar",

      points: [
        "Replantear las expectativas amorosas",
        "Aclarar los valores personales",
        "Observar la relación con el placer",
        "Revisar los límites relacionales",
        "Fortalecer la autoestima",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Venus",

      strengthsKicker:
        "Fortalezas posibles",

      strengthsTitle:
        "Crear vínculos armoniosos",

      strengths: [
        "Sensibilidad relacional",
        "Diplomacia",
        "Capacidad para apreciar la belleza",
        "Ternura y afecto",
        "Búsqueda de reciprocidad",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Preservar el equilibrio personal",

      challenges: [
        "Necesidad excesiva de aprobación",
        "Dificultad para establecer límites",
        "Idealización de las relaciones",
        "Miedo al conflicto",
        "Dependencia de la opinión ajena",
      ],
    },

    aspectsSection: {
      title:
        "Los aspectos astrológicos de Venus",

      introduction:
        "Los aspectos conectan Venus con los demás planetas de tu carta natal. Aportan matices a tu manera de amar, tus valores y tu forma de vivir la atracción y las relaciones.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjunción",

        text:
          "Fusiona Venus con la energía de otro planeta y refuerza su expresión conjunta en la vida afectiva.",
      },

      {
        symbol:
          "△",

        title:
          "El trígono",

        text:
          "Puede simbolizar una circulación natural entre los sentimientos, los valores y las cualidades del otro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "El sextil",

        text:
          "Representa un potencial de cooperación, apertura y desarrollo en las relaciones.",
      },

      {
        symbol:
          "□",

        title:
          "La cuadratura",

        text:
          "Puede revelar tensión entre los deseos, los valores y las expectativas, invitando a desarrollar mayor conciencia.",
      },

      {
        symbol:
          "☍",

        title:
          "La oposición",

        text:
          "Invita a encontrar un equilibrio entre las propias necesidades afectivas y las de los demás.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",

      title:
        "¿En qué signo y casa se encuentra tu Venus?",

      text:
        "Genera gratuitamente tu carta natal para descubrir Venus, tu Sol, tu Luna, tu Ascendente y las posiciones de tus principales planetas.",

      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Venus en astrología",

      items: [
        {
          question:
            "¿Qué representa Venus en astrología?",

          answer:
            "Venus representa simbólicamente el amor, la atracción, las relaciones, el placer, los gustos personales, los valores y la manera en que una persona busca la armonía.",
        },

        {
          question:
            "¿Qué significa el signo de Venus?",

          answer:
            "El signo de Venus describe tu manera de amar, aquello que te atrae, lo que aprecias en una relación y la forma en que expresas tu afecto.",
        },

        {
          question:
            "¿Venus representa solamente la vida amorosa?",

          answer:
            "No. Venus también se relaciona con los valores, el placer, la estética, la creatividad, la diplomacia y la manera en que buscas el equilibrio.",
        },

        {
          question:
            "¿Qué significa Venus retrógrado en una carta natal?",

          answer:
            "En la interpretación astrológica, Venus retrógrado al nacer puede simbolizar una manera más interior o personal de vivir los sentimientos, los valores y la autoestima.",
        },

        {
          question:
            "¿Venus retrógrado anuncia una ruptura?",

          answer:
            "No. La astrología no permite afirmar que se producirá una ruptura. Este período se interpreta más bien como una invitación a reflexionar sobre las relaciones, los valores y las expectativas afectivas.",
        },

        {
          question:
            "¿Cómo conocer mi signo de Venus?",

          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Venus.",
        },

        {
          question:
            "¿Cuál es la diferencia entre Venus y la Luna?",

          answer:
            "La Luna representa las necesidades emocionales y la seguridad interior, mientras que Venus describe la manera de amar, los gustos, la atracción y los valores relacionales.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Venus in der Astrologie: Liebe, Beziehungen, Begehren und Werte | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung von Venus in der Astrologie, ihren Einfluss auf Liebe, Beziehungen, Anziehung, Werte und ihren Ausdruck in den 12 Tierkreiszeichen.",

      ogTitle:
        "Venus in der Astrologie: Liebe, Anziehung, Freude und Beziehungen",

      ogDescription:
        "Verstehen Sie die Rolle von Venus in Ihrem Geburtshoroskop und entdecken Sie, wie dieser Planet Ihre Art zu lieben, Ihre Werte und Ihre Beziehungen beeinflusst.",

      twitterTitle:
        "Venus in der Astrologie | Luna Astralis",

      twitterDescription:
        "Entdecken Sie, wie Venus Ihr Liebesleben, Ihre Beziehungen, Vorlieben und Werte beeinflusst.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Venus in der Astrologie: Liebe, Beziehungen, Anziehung und Werte",

      description:
        "Ein vollständiger Leitfaden zur Rolle von Venus im Geburtshoroskop und zu ihrem Ausdruck in den zwölf Tierkreiszeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "♀ Planeten und Geburtshoroskop",

      title:
        "Venus in der Astrologie",

      lead:
        "Venus steht für Ihre Art zu lieben, das, was Sie anzieht, Ihre Werte, Ihren Umgang mit Freude und Ihr Streben nach Harmonie in Beziehungen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      viewSigns:
        "Die 12 Zeichen ansehen",
    },

    meaning: {
      kicker:
        "Ihre Liebessprache verstehen",

      title:
        "Was bedeutet Venus im Geburtshoroskop?",

      paragraphs: [
        "In der Astrologie symbolisiert Venus Liebe, Anziehung, Beziehungen, Freude und persönliche Werte. Sie beschreibt, was Sie berührt, was Sie schön finden und wie Sie Harmonie suchen.",

        "Ihre Position im Geburtshoroskop kann zeigen, wie Sie Zuneigung ausdrücken, welche Eigenschaften Sie an anderen schätzen und unter welchen Bedingungen Sie sich geliebt und wertgeschätzt fühlen.",

        "Venus allein beschreibt nicht Ihr gesamtes Liebesleben. Mond, Mars, das fünfte Haus, das siebte Haus und astrologische Aspekte liefern ebenfalls wichtige Informationen über emotionale und partnerschaftliche Bedürfnisse.",
      ],
    },

    loveAndValues: {
      title:
        "Venus, Liebe und Werte",

      cards: [
        {
          symbol:
            "♀",

          title:
            "Ihre Art zu lieben",

          text:
            "Venus beschreibt, wie Sie Zuneigung ausdrücken und welche Gesten Ihnen helfen, eine harmonische Verbindung aufzubauen.",
        },

        {
          symbol:
            "♡",

          title:
            "Was Sie anzieht",

          text:
            "Sie zeigt die Eigenschaften, Verhaltensweisen und Atmosphären, die Ihr Interesse und Ihren Wunsch nach Nähe wecken.",
        },

        {
          symbol:
            "✦",

          title:
            "Ihre Werte",

          text:
            "Venus zeigt, was Sie schätzen, was Sie bewahren möchten und was Ihnen echte Zufriedenheit vermittelt.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen von Venus",

      cards: [
        {
          number:
            "01",

          title:
            "Anziehen",

          text:
            "Venus symbolisiert, was Sie anzieht und wie Sie auf natürliche Weise Interesse, Sympathie oder Nähe wecken.",
        },

        {
          number:
            "02",

          title:
            "Lieben",

          text:
            "Sie beschreibt, wie Sie Zuneigung schenken, Liebe empfangen und eine angenehme Beziehung aufbauen.",
        },

        {
          number:
            "03",

          title:
            "Wertschätzen",

          text:
            "Venus steht für Ihre Vorlieben, Ihren Geschmack, Ihr ästhetisches Empfinden und Ihren Umgang mit den Freuden des Lebens.",
        },

        {
          number:
            "04",

          title:
            "Harmonisieren",

          text:
            "Sie strebt nach Gleichgewicht, Kooperation, Gegenseitigkeit und sanfteren, respektvolleren Verbindungen.",
        },
      ],
    },

    planets: {
      title:
        "Venus, Mond und Mars",

      cards: [
        {
          symbol:
            "🌙",

          title:
            "Der Mond",

          text:
            "Er steht für Ihre emotionalen Bedürfnisse, instinktiven Reaktionen und Ihr inneres Sicherheitsgefühl.",

          link:
            "/astrologie/lune",

          linkLabel:
            "Den Mond entdecken",
        },

        {
          symbol:
            "♀",

          title:
            "Venus",

          text:
            "Sie beschreibt Ihre Art zu lieben, Ihre Vorlieben, Werte und das, was Sie in einer Beziehung anzieht.",
        },

        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "Er steht für Begehren, Handlung, Antrieb, Durchsetzung und die Art, wie Sie verfolgen, was Sie möchten.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen von Venus",

      title:
        "Venus in den 12 Tierkreiszeichen",

      introduction:
        "Venus behält stets ihre Funktion von Liebe, Freude, Anziehung und Harmonie. Das Zeichen, in dem sie steht, beschreibt die besondere Art, wie sich diese Eigenschaften ausdrücken.",

      titlePrefix:
        "Venus in",
    },

    signs: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Venus im Widder liebt spontan, begeistert und intensiv. Diese Stellung sucht lebendige, anregende Beziehungen, die den Wunsch nach Entdeckung aufrechterhalten.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Venus im Stier sucht Stabilität, Sinnlichkeit und Treue. Liebe zeigt sich häufig durch Anwesenheit, konkrete Gesten, Berührung und die Schaffung einer sicheren Umgebung.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Venus in den Zwillingen fühlt sich von Austausch, Intelligenz und Neugier angezogen. Geistige Verbundenheit, Humor und freie Kommunikation sind in Beziehungen besonders wichtig.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Venus im Krebs liebt mit Sensibilität, Sanftheit und Bindung. Sie sucht eine beruhigende, intime Beziehung, die tief mit emotionaler Sicherheit verbunden ist.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Venus im Löwen drückt Liebe mit Wärme, Großzügigkeit und Kreativität aus. Sie möchte sich gewählt, bewundert und vollständig in eine lebendige, aufrichtige Beziehung eingebunden fühlen.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Venus in der Jungfrau zeigt Zuneigung durch Aufmerksamkeit, Verfügbarkeit und hilfreiche Gesten. Sie sucht eine ehrliche, beständige Beziehung, die auf alltäglichem Vertrauen beruht.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Venus in der Waage legt großen Wert auf Harmonie, Dialog und Gleichgewicht. Sie sucht eine elegante, respektvolle Beziehung, die auf Gegenseitigkeit beruht.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Venus im Skorpion liebt intensiv, tief und treu. Sie sucht eine authentische, verwandelnde Verbindung, die über oberflächliche Erscheinungen hinausgeht.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Venus im Schützen verbindet Liebe mit Freiheit, Abenteuer und Horizonterweiterung. Sie schätzt Beziehungen, die Wachstum, Entdeckung und authentisches Selbstsein ermöglichen.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Venus im Steinbock sucht Stabilität, Treue und Reife. Liebe entwickelt sich schrittweise durch Verpflichtung, gemeinsame Verantwortung und Vertrauen.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Venus im Wassermann schätzt Unabhängigkeit, Originalität und geistige Verbundenheit. Sie sucht eine freie, aufrichtige Beziehung, die die Individualität jedes Menschen respektiert.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Venus in den Fischen liebt mit Mitgefühl, Romantik und Intuition. Sie sucht eine tiefe emotionale und spirituelle Verbindung und muss zugleich klare Beziehungsgrenzen bewahren.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche des Herzens",

      title:
        "Venus in den 12 astrologischen Häusern",

      introduction:
        "Das Zeichen der Venus beschreibt Ihren Liebesstil, während ihr Haus den Lebensbereich zeigt, in dem Liebe, Freude, Werte und das Streben nach Harmonie besonders wichtig werden.",

      titlePrefix:
        "Venus in",
    },

    houses: [
      {
        house:
          "Haus I",

        text:
          "Venus im ersten Haus verstärkt Charme, Sanftheit und das Bedürfnis nach harmonischen Beziehungen. Die Person kann von Natur aus angenehm, anziehend oder diplomatisch wirken.",
      },

      {
        house:
          "Haus II",

        text:
          "Venus im zweiten Haus verbindet Beziehungen mit Werten, Komfort und materieller Sicherheit. Die Person legt häufig besonderen Wert auf Qualität, Stabilität und sinnlichen Genuss.",
      },

      {
        house:
          "Haus III",

        text:
          "Venus im dritten Haus fördert freundliche, anziehende und ausgleichende Kommunikation. Gespräche, Schreiben, Lernen und nahe Verbindungen können viel Freude bereiten.",
      },

      {
        house:
          "Haus IV",

        text:
          "Venus im vierten Haus sucht Harmonie im Zuhause und im Privatleben. Die Person möchte möglicherweise eine warme, schöne und emotional sichere Umgebung schaffen.",
      },

      {
        house:
          "Haus V",

        text:
          "Venus im fünften Haus verstärkt Romantik, Kreativität, Verführung und die Freude am Lieben. Diese Stellung kann künstlerischen Ausdruck und den Wunsch nach inspirierenden Beziehungen fördern.",
      },

      {
        house:
          "Haus VI",

        text:
          "Venus im sechsten Haus zeigt Zuneigung durch Hilfe, Anwesenheit und alltägliche Gesten. Die Person sucht häufig ein harmonisches Arbeitsumfeld und angenehme Gewohnheiten.",
      },

      {
        house:
          "Haus VII",

        text:
          "Venus im siebten Haus betont Partnerschaft, Zusammenarbeit und Beziehungsgleichgewicht. Die Person entfaltet sich häufig durch Partnerschaften und gegenseitige Verpflichtungen.",
      },

      {
        house:
          "Haus VIII",

        text:
          "Venus im achten Haus sucht tiefe, emotionale und verwandelnde Intimität. Beziehungen können intensiv, bindend und mit einem starken Wunsch nach Verschmelzung erlebt werden.",
      },

      {
        house:
          "Haus IX",

        text:
          "Venus im neunten Haus verbindet Liebe mit Entdeckung, Reisen und kultureller Offenheit. Die Person kann sich zu Beziehungen hingezogen fühlen, die ihre Weltsicht erweitern.",
      },

      {
        house:
          "Haus X",

        text:
          "Venus im zehnten Haus kann ein angenehmes, diplomatisches oder kreatives öffentliches Bild fördern. Beziehungen, Ästhetik oder das Streben nach Harmonie können in der Berufung wichtig sein.",
      },

      {
        house:
          "Haus XI",

        text:
          "Venus im elften Haus schätzt Freundschaft, Netzwerke und gemeinsame Projekte. Liebesbeziehungen können aus geistiger Verbundenheit oder einem gemeinsamen Ideal entstehen.",
      },

      {
        house:
          "Haus XII",

        text:
          "Venus im zwölften Haus erzeugt ein inneres, sensibles und manchmal verborgenes Gefühlsleben. Die Person kann Liebe idealisieren und muss lernen, Bedürfnisse und Grenzen klar zu erkennen.",
      },
    ],

    retrograde: {
      kicker:
        "Emotionale Reflexion",

      title:
        "Was bedeutet Venus rückläufig?",

      paragraphs: [
        "Von der Erde aus scheint Venus manchmal langsamer zu werden und sich vorübergehend rückwärts am Himmel zu bewegen. Dabei handelt es sich um eine scheinbare Bewegung, die durch die relative Position von Erde und Venus entsteht.",

        "In der astrologischen Deutung wird eine rückläufige Venus häufig mit einer Reflexion über Beziehungen, Werte, Selbstwertgefühl, Wünsche und emotionale Erwartungen verbunden.",

        "Sie bedeutet nicht automatisch, dass eine Beziehung endet oder eine frühere Liebe zurückkehrt. Sie kann vielmehr dazu anregen, zu beobachten, was Sie wirklich glücklich macht, und Ihre Bedürfnisse zu klären.",
      ],

      symbol:
        "♀℞",

      cardTitle:
        "Eine Einladung zur Neubewertung",

      points: [
        "Liebeserwartungen überdenken",
        "Eigene Werte klären",
        "Den Umgang mit Freude beobachten",
        "Beziehungsgrenzen überprüfen",
        "Das Selbstwertgefühl stärken",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen von Venus",

      strengthsKicker:
        "Mögliche Stärken",

      strengthsTitle:
        "Harmonische Verbindungen schaffen",

      strengths: [
        "Beziehungssensibilität",
        "Diplomatie",
        "Fähigkeit, Schönheit zu schätzen",
        "Zärtlichkeit und Zuneigung",
        "Streben nach Gegenseitigkeit",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Das persönliche Gleichgewicht bewahren",

      challenges: [
        "Übermäßiges Bedürfnis nach Zustimmung",
        "Schwierigkeit, Grenzen zu setzen",
        "Idealisierung von Beziehungen",
        "Angst vor Konflikten",
        "Abhängigkeit von der Meinung anderer",
      ],
    },

    aspectsSection: {
      title:
        "Die astrologischen Aspekte von Venus",

      introduction:
        "Aspekte verbinden Venus mit den anderen Planeten Ihres Geburtshoroskops. Sie geben Ihrer Art zu lieben, Ihren Werten und Ihrem Erleben von Anziehung und Beziehungen zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "Die Konjunktion",

        text:
          "Sie verbindet Venus mit der Energie eines anderen Planeten und verstärkt ihren gemeinsamen Ausdruck im Gefühlsleben.",
      },

      {
        symbol:
          "△",

        title:
          "Das Trigon",

        text:
          "Es kann einen natürlichen Fluss zwischen Gefühlen, Werten und den Eigenschaften des anderen Planeten symbolisieren.",
      },

      {
        symbol:
          "✶",

        title:
          "Das Sextil",

        text:
          "Es steht für Potenzial zur Zusammenarbeit, Offenheit und Entfaltung in Beziehungen.",
      },

      {
        symbol:
          "□",

        title:
          "Das Quadrat",

        text:
          "Es kann Spannungen zwischen Wünschen, Werten und Erwartungen zeigen und zu größerem Bewusstsein anregen.",
      },

      {
        symbol:
          "☍",

        title:
          "Die Opposition",

        text:
          "Sie fordert dazu auf, ein Gleichgewicht zwischen den eigenen emotionalen Bedürfnissen und denen anderer zu finden.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",

      title:
        "In welchem Zeichen und Haus steht Ihre Venus?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Venus, Sonne, Mond, Aszendent und die Positionen Ihrer wichtigsten Planeten.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zu Venus in der Astrologie",

      items: [
        {
          question:
            "Was bedeutet Venus in der Astrologie?",

          answer:
            "Venus steht symbolisch für Liebe, Anziehung, Beziehungen, Freude, persönliche Vorlieben, Werte und die Art, wie ein Mensch Harmonie sucht.",
        },

        {
          question:
            "Was bedeutet das Venuszeichen?",

          answer:
            "Das Venuszeichen beschreibt Ihre Art zu lieben, was Sie anzieht, was Sie in einer Beziehung schätzen und wie Sie Zuneigung ausdrücken.",
        },

        {
          question:
            "Steht Venus nur für das Liebesleben?",

          answer:
            "Nein. Venus betrifft auch Werte, Freude, Ästhetik, Kreativität, Diplomatie und die Art, wie Sie Gleichgewicht suchen.",
        },

        {
          question:
            "Was bedeutet Venus rückläufig im Geburtshoroskop?",

          answer:
            "In der astrologischen Deutung kann eine rückläufige Venus bei der Geburt eine stärker nach innen gerichtete oder persönliche Art symbolisieren, Gefühle, Werte und Selbstwert zu erleben.",
        },

        {
          question:
            "Kündigt Venus rückläufig eine Trennung an?",

          answer:
            "Nein. Astrologie kann nicht feststellen, dass eine Trennung eintreten wird. Diese Phase wird eher als Einladung verstanden, über Beziehungen, Werte und emotionale Erwartungen nachzudenken.",
        },

        {
          question:
            "Wie erfahre ich mein Venuszeichen?",

          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Geburtsdatum, Geburtszeit und Geburtsort berechnen, um die genaue Position von Venus zu bestimmen.",
        },

        {
          question:
            "Was ist der Unterschied zwischen Venus und Mond?",

          answer:
            "Der Mond steht für emotionale Bedürfnisse und innere Sicherheit, während Venus die Art zu lieben, Vorlieben, Anziehung und Beziehungswerte beschreibt.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Venere in astrologia: amore, relazioni, desiderio e valori | Luna Astralis",

      description:
        "Scopri il significato di Venere in astrologia, la sua influenza sull'amore, le relazioni, l'attrazione, i valori e la sua espressione nei 12 segni zodiacali.",

      ogTitle:
        "Venere in astrologia: amore, attrazione, piacere e relazioni",

      ogDescription:
        "Comprendi il ruolo di Venere nel tema natale e scopri come questo pianeta influenza il tuo modo di amare, i tuoi valori e le tue relazioni.",

      twitterTitle:
        "Venere in astrologia | Luna Astralis",

      twitterDescription:
        "Scopri come Venere influenza la tua vita sentimentale, le relazioni, i gusti e i valori.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Venere in astrologia: amore, relazioni, attrazione e valori",

      description:
        "Guida completa al ruolo di Venere nel tema natale e alla sua espressione nei dodici segni zodiacali e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "♀ Pianeti e tema natale",

      title:
        "Venere in astrologia",

      lead:
        "Venere rappresenta il tuo modo di amare, ciò che ti attrae, i tuoi valori, il tuo rapporto con il piacere e la tua ricerca di armonia nelle relazioni.",

      createChart:
        "Crea gratuitamente il mio tema natale",

      viewSigns:
        "Vedi i 12 segni",
    },

    meaning: {
      kicker:
        "Comprendere il tuo linguaggio dell'amore",

      title:
        "Che cosa rappresenta Venere nel tema natale?",

      paragraphs: [
        "In astrologia, Venere simboleggia l'amore, l'attrazione, le relazioni, il piacere e i valori personali. Descrive ciò che ti emoziona, ciò che trovi bello e il modo in cui cerchi l'armonia.",

        "La sua posizione nel tema natale può rivelare come esprimi l'affetto, le qualità che apprezzi negli altri e le condizioni che ti permettono di sentirti amato e valorizzato.",

        "Venere non descrive da sola tutta la tua vita sentimentale. Anche la Luna, Marte, la quinta casa, la settima casa e gli aspetti astrologici forniscono informazioni importanti sui bisogni emotivi e relazionali.",
      ],
    },

    loveAndValues: {
      title:
        "Venere, l'amore e i valori",

      cards: [
        {
          symbol:
            "♀",

          title:
            "Il tuo modo di amare",

          text:
            "Venere descrive come esprimi l'affetto e i gesti che ti permettono di creare un legame armonioso.",
        },

        {
          symbol:
            "♡",

          title:
            "Ciò che ti attrae",

          text:
            "Rivela le qualità, i comportamenti e le atmosfere che risvegliano il tuo interesse e il desiderio di avvicinarti agli altri.",
        },

        {
          symbol:
            "✦",

          title:
            "I tuoi valori",

          text:
            "Venere mostra ciò che apprezzi, ciò che desideri preservare e ciò che ti procura un autentico senso di soddisfazione.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Venere",

      cards: [
        {
          number:
            "01",

          title:
            "Attrarre",

          text:
            "Venere simboleggia ciò che ti attrae e il modo in cui susciti naturalmente interesse, simpatia o vicinanza.",
        },

        {
          number:
            "02",

          title:
            "Amare",

          text:
            "Descrive come offri affetto, ricevi amore e costruisci una relazione piacevole.",
        },

        {
          number:
            "03",

          title:
            "Apprezzare",

          text:
            "Venere rappresenta i tuoi gusti, le tue preferenze, il senso estetico e il rapporto con i piaceri della vita.",
        },

        {
          number:
            "04",

          title:
            "Armonizzare",

          text:
            "Ricerca equilibrio, cooperazione, reciprocità e la creazione di legami più sereni e rispettosi.",
        },
      ],
    },

    planets: {
      title:
        "Venere, Luna e Marte",

      cards: [
        {
          symbol:
            "🌙",

          title:
            "La Luna",

          text:
            "Rappresenta i tuoi bisogni emotivi, le reazioni istintive e il senso di sicurezza interiore.",

          link:
            "/astrologie/lune",

          linkLabel:
            "Scoprire la Luna",
        },

        {
          symbol:
            "♀",

          title:
            "Venere",

          text:
            "Descrive il tuo modo di amare, i tuoi gusti, i tuoi valori e ciò che ti attrae in una relazione.",
        },

        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Rappresenta il desiderio, l'azione, l'iniziativa, l'affermazione e il modo in cui persegui ciò che desideri.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Venere",

      title:
        "Venere nei 12 segni zodiacali",

      introduction:
        "Venere conserva sempre la sua funzione di amore, piacere, attrazione e armonia. Il segno in cui si trova descrive il modo particolare in cui queste qualità si esprimono.",

      titlePrefix:
        "Venere in",
    },

    signs: [
      {
        sign: "Ariete",
        symbol: "♈",
        text:
          "Venere in Ariete ama con spontaneità, entusiasmo e intensità. Questa posizione ricerca relazioni vive, stimolanti e capaci di alimentare il desiderio di scoperta.",
      },
      {
        sign: "Toro",
        symbol: "♉",
        text:
          "Venere in Toro ricerca stabilità, sensualità e fedeltà. L'amore si esprime spesso attraverso la presenza, i gesti concreti, il contatto fisico e la creazione di un ambiente sicuro.",
      },
      {
        sign: "Gemelli",
        symbol: "♊",
        text:
          "Venere in Gemelli è attratta dagli scambi, dall'intelligenza e dalla curiosità. La complicità mentale, l'umorismo e la libertà di comunicare sono essenziali nelle relazioni.",
      },
      {
        sign: "Cancro",
        symbol: "♋",
        text:
          "Venere in Cancro ama con sensibilità, dolcezza e attaccamento. Cerca una relazione rassicurante, intima e profondamente legata alla sicurezza emotiva.",
      },
      {
        sign: "Leone",
        symbol: "♌",
        text:
          "Venere in Leone esprime l'amore con calore, generosità e creatività. Desidera sentirsi scelta, ammirata e pienamente coinvolta in una relazione sincera e appassionata.",
      },
      {
        sign: "Vergine",
        symbol: "♍",
        text:
          "Venere in Vergine dimostra il proprio affetto attraverso l'attenzione, la disponibilità e i gesti utili. Cerca una relazione onesta, coerente e costruita sulla fiducia quotidiana.",
      },
      {
        sign: "Bilancia",
        symbol: "♎",
        text:
          "Venere in Bilancia attribuisce grande importanza all'armonia, al dialogo e all'equilibrio. Cerca una relazione elegante, rispettosa e fondata sulla reciprocità.",
      },
      {
        sign: "Scorpione",
        symbol: "♏",
        text:
          "Venere in Scorpione ama con intensità, profondità e lealtà. Cerca un legame autentico e trasformativo, capace di andare oltre le apparenze.",
      },
      {
        sign: "Sagittario",
        symbol: "♐",
        text:
          "Venere in Sagittario associa l'amore alla libertà, all'avventura e all'apertura verso nuovi orizzonti. Apprezza relazioni che permettono di crescere e rimanere autentici.",
      },
      {
        sign: "Capricorno",
        symbol: "♑",
        text:
          "Venere in Capricorno ricerca stabilità, fedeltà e maturità. L'amore si costruisce progressivamente attraverso impegno, responsabilità condivise e fiducia.",
      },
      {
        sign: "Acquario",
        symbol: "♒",
        text:
          "Venere in Acquario valorizza indipendenza, originalità e complicità intellettuale. Cerca una relazione libera, sincera e rispettosa dell'individualità.",
      },
      {
        sign: "Pesci",
        symbol: "♓",
        text:
          "Venere in Pesci ama con compassione, romanticismo e intuizione. Cerca una connessione emotiva e spirituale profonda, mantenendo però confini relazionali chiari.",
      },
    ],
          housesSection: {
      kicker:
        "Gli ambiti del cuore",

      title:
        "Venere nelle 12 case astrologiche",

      introduction:
        "Il segno di Venere descrive il tuo stile affettivo, mentre la casa indica l'ambito della vita in cui amore, piacere, valori e ricerca dell'armonia assumono un'importanza particolare.",

      titlePrefix:
        "Venere in",
    },

    houses: [
      {
        house: "Casa I",
        text:
          "Venere nella Casa I rafforza fascino, dolcezza e bisogno di creare relazioni armoniose. La persona può trasmettere naturalmente un'immagine piacevole, attraente e diplomatica.",
      },
      {
        house: "Casa II",
        text:
          "Venere nella Casa II collega le relazioni ai valori, al comfort e alla sicurezza materiale. La persona attribuisce spesso grande importanza alla qualità, alla stabilità e ai piaceri dei sensi.",
      },
      {
        house: "Casa III",
        text:
          "Venere nella Casa III favorisce una comunicazione gentile, seducente e conciliatrice. Conversazioni, scrittura, apprendimento e rapporti con l'ambiente vicino possono dare molta soddisfazione.",
      },
      {
        house: "Casa IV",
        text:
          "Venere nella Casa IV ricerca armonia nella casa e nella vita privata. La persona desidera spesso creare un ambiente accogliente, bello e rassicurante dal punto di vista emotivo.",
      },
      {
        house: "Casa V",
        text:
          "Venere nella Casa V rafforza romanticismo, creatività, seduzione e piacere di amare. Questa posizione favorisce anche l'espressione artistica e il desiderio di vivere relazioni ispiratrici.",
      },
      {
        house: "Casa VI",
        text:
          "Venere nella Casa VI esprime l'affetto attraverso aiuto, presenza e piccoli gesti quotidiani. La persona cerca spesso un ambiente di lavoro armonioso e abitudini piacevoli.",
      },
      {
        house: "Casa VII",
        text:
          "Venere nella Casa VII sottolinea l'importanza della coppia, della cooperazione e dell'equilibrio relazionale. La persona tende a realizzarsi attraverso partnership e impegni reciproci.",
      },
      {
        house: "Casa VIII",
        text:
          "Venere nella Casa VIII ricerca un'intimità profonda, emotiva e trasformativa. Le relazioni possono essere vissute con intensità, forte attaccamento e desiderio di fusione.",
      },
      {
        house: "Casa IX",
        text:
          "Venere nella Casa IX collega l'amore alla scoperta, ai viaggi e all'apertura culturale. La persona può essere attratta da relazioni che ampliano la propria visione del mondo.",
      },
      {
        house: "Casa X",
        text:
          "Venere nella Casa X può favorire un'immagine pubblica piacevole, diplomatica o creativa. Le relazioni, l'estetica o la ricerca dell'armonia possono avere un ruolo importante nella carriera.",
      },
      {
        house: "Casa XI",
        text:
          "Venere nella Casa XI valorizza amicizie, reti sociali e progetti collettivi. Le relazioni sentimentali possono nascere da una forte complicità intellettuale o da ideali condivisi.",
      },
      {
        house: "Casa XII",
        text:
          "Venere nella Casa XII dona una vita affettiva interiore, sensibile e talvolta riservata. La persona può idealizzare l'amore e deve imparare a riconoscere chiaramente bisogni e limiti.",
      },
    ],

    retrograde: {
      kicker:
        "Riflessione affettiva",

      title:
        "Che cosa significa Venere retrograda?",

      paragraphs: [
        "Vista dalla Terra, Venere sembra talvolta rallentare e muoversi temporaneamente all'indietro nel cielo. Si tratta di un movimento apparente dovuto alla posizione relativa della Terra e di Venere.",

        "Nell'interpretazione astrologica, un periodo di Venere retrograda è spesso associato a una riflessione su relazioni, valori, autostima, desideri e aspettative affettive.",

        "Non significa automaticamente che una relazione terminerà o che un vecchio amore tornerà. Può piuttosto invitare a comprendere ciò che rende davvero felici e a chiarire i propri bisogni.",
      ],

      symbol:
        "♀℞",

      cardTitle:
        "Un invito a rivalutare",

      points: [
        "Ripensare le aspettative sentimentali",
        "Chiarire i propri valori",
        "Osservare il rapporto con il piacere",
        "Rivedere i limiti relazionali",
        "Rafforzare l'autostima",
      ],
    },
          strengths: {
      title:
        "I punti di forza e le sfide di Venere",

      strengthsKicker:
        "Possibili punti di forza",

      strengthsTitle:
        "Creare legami armoniosi",

      strengths: [
        "Sensibilità relazionale",
        "Diplomazia",
        "Capacità di apprezzare la bellezza",
        "Tenerezza e affetto",
        "Ricerca della reciprocità",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Preservare il proprio equilibrio personale",

      challenges: [
        "Bisogno eccessivo di approvazione",
        "Difficoltà a stabilire limiti",
        "Idealizzazione delle relazioni",
        "Paura del conflitto",
        "Dipendenza dal giudizio degli altri",
      ],
    },

    aspectsSection: {
      title:
        "Gli aspetti astrologici di Venere",

      introduction:
        "Gli aspetti collegano Venere agli altri pianeti del tema natale. Aggiungono sfumature al tuo modo di amare, ai tuoi valori e alla maniera in cui vivi l'attrazione e le relazioni.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La congiunzione",

        text:
          "Unisce Venere all'energia di un altro pianeta e rafforza la loro espressione comune nella vita affettiva.",
      },

      {
        symbol:
          "△",

        title:
          "Il trigono",

        text:
          "Può simboleggiare una circolazione naturale tra i sentimenti, i valori e le qualità dell'altro pianeta.",
      },

      {
        symbol:
          "✶",

        title:
          "Il sestile",

        text:
          "Rappresenta un potenziale di cooperazione, apertura e realizzazione nelle relazioni.",
      },

      {
        symbol:
          "□",

        title:
          "La quadratura",

        text:
          "Può rivelare una tensione tra desideri, valori e aspettative, invitando a sviluppare una maggiore consapevolezza.",
      },

      {
        symbol:
          "☍",

        title:
          "L'opposizione",

        text:
          "Invita a trovare un equilibrio tra i propri bisogni affettivi e quelli degli altri.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",

      title:
        "In quale segno e casa si trova la tua Venere?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire Venere, il Sole, la Luna, l'Ascendente e le posizioni dei tuoi principali pianeti.",

      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande su Venere in astrologia",

      items: [
        {
          question:
            "Che cosa rappresenta Venere in astrologia?",

          answer:
            "Venere rappresenta simbolicamente l'amore, l'attrazione, le relazioni, il piacere, i gusti personali, i valori e il modo in cui una persona ricerca l'armonia.",
        },

        {
          question:
            "Che cosa significa il segno di Venere?",

          answer:
            "Il segno di Venere descrive il tuo modo di amare, ciò che ti attrae, ciò che apprezzi in una relazione e il modo in cui esprimi il tuo affetto.",
        },

        {
          question:
            "Venere rappresenta soltanto la vita sentimentale?",

          answer:
            "No. Venere riguarda anche i valori, il rapporto con il piacere, l'estetica, la creatività, la diplomazia e il modo in cui cerchi l'equilibrio.",
        },

        {
          question:
            "Che cosa significa Venere retrograda nel tema natale?",

          answer:
            "Nell'interpretazione astrologica, Venere retrograda alla nascita può simboleggiare un modo più interiore o personale di vivere i sentimenti, i valori e l'autostima.",
        },

        {
          question:
            "Venere retrograda annuncia una separazione?",

          answer:
            "No. L'astrologia non permette di affermare che avverrà una separazione. Questo periodo viene piuttosto interpretato come un invito a riflettere sulle relazioni, sui valori e sulle aspettative affettive.",
        },

        {
          question:
            "Come posso conoscere il mio segno di Venere?",

          answer:
            "Devi calcolare il tuo tema natale utilizzando la data, l'ora e il luogo di nascita per conoscere la posizione esatta di Venere.",
        },

        {
          question:
            "Qual è la differenza tra Venere e la Luna?",

          answer:
            "La Luna rappresenta i bisogni emotivi e la sicurezza interiore, mentre Venere descrive il modo di amare, i gusti, l'attrazione e i valori relazionali.",
        },
      ],
    },

    disclaimer:
      "L'astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

   pt: {
    metadata: {
      title:
        "Vênus na astrologia: amor, relacionamentos, desejo e valores | Luna Astralis",

      description:
        "Descubra o significado de Vênus na astrologia, sua influência sobre o amor, os relacionamentos, a atração, os valores e sua expressão nos 12 signos do zodíaco.",

      ogTitle:
        "Vênus na astrologia: amor, atração, prazer e relacionamentos",

      ogDescription:
        "Compreenda o papel de Vênus no seu mapa natal e descubra como esse planeta influencia sua maneira de amar, seus valores e seus relacionamentos.",

      twitterTitle:
        "Vênus na astrologia | Luna Astralis",

      twitterDescription:
        "Descubra como Vênus influencia sua vida amorosa, seus relacionamentos, seus gostos e seus valores.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Vênus na astrologia: amor, relacionamentos, atração e valores",

      description:
        "Guia completo sobre o papel de Vênus no mapa natal e sua expressão nos doze signos do zodíaco e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "♀ Planetas e mapa natal",

      title:
        "Vênus na astrologia",

      lead:
        "Vênus representa sua maneira de amar, aquilo que desperta sua atração, seus valores, sua relação com o prazer e sua busca por harmonia nos relacionamentos.",

      createChart:
        "Criar meu mapa astral grátis",

      viewSigns:
        "Ver os 12 signos",
    },

    meaning: {
      kicker:
        "Compreender sua linguagem do amor",

      title:
        "O que Vênus representa em um mapa natal?",

      paragraphs: [
        "Na astrologia, Vênus simboliza o amor, a atração, os relacionamentos, o prazer e os valores pessoais. Ela descreve o que toca você, aquilo que considera belo e a maneira como procura harmonia.",

        "Sua posição no mapa natal pode revelar como você demonstra afeto, quais qualidades aprecia nas outras pessoas e em quais condições se sente amado e valorizado.",

        "Vênus não descreve sozinha toda a sua vida amorosa. A Lua, Marte, a Casa V, a Casa VII e os aspectos astrológicos também fornecem informações importantes sobre necessidades emocionais e relacionais.",
      ],
    },

    loveAndValues: {
      title:
        "Vênus, o amor e os valores",

      cards: [
        {
          symbol:
            "♀",

          title:
            "Sua maneira de amar",

          text:
            "Vênus descreve como você expressa afeto e os gestos que ajudam a criar um vínculo harmonioso.",
        },

        {
          symbol:
            "♡",

          title:
            "O que atrai você",

          text:
            "Ela revela as qualidades, os comportamentos e os ambientes que despertam seu interesse e seu desejo de aproximação.",
        },

        {
          symbol:
            "✦",

          title:
            "Seus valores",

          text:
            "Vênus mostra aquilo que você aprecia, o que deseja preservar e aquilo que proporciona um verdadeiro sentimento de satisfação.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Vênus",

      cards: [
        {
          number:
            "01",

          title:
            "Atrair",

          text:
            "Vênus simboliza aquilo que atrai você e a maneira como desperta naturalmente interesse, simpatia ou aproximação.",
        },

        {
          number:
            "02",

          title:
            "Amar",

          text:
            "Ela descreve como você oferece afeto, recebe amor e constrói um relacionamento agradável.",
        },

        {
          number:
            "03",

          title:
            "Valorizar",

          text:
            "Vênus representa seus gostos, preferências, senso estético e sua relação com os prazeres da vida.",
        },

        {
          number:
            "04",

          title:
            "Harmonizar",

          text:
            "Ela busca equilíbrio, cooperação, reciprocidade e a criação de vínculos mais suaves e respeitosos.",
        },
      ],
    },

    planets: {
      title:
        "Vênus, Lua e Marte",

      cards: [
        {
          symbol:
            "🌙",

          title:
            "Lua",

          text:
            "Ela representa suas necessidades emocionais, reações instintivas e sentimento de segurança interior.",

          link:
            "/astrologie/lune",

          linkLabel:
            "Descobrir a Lua",
        },

        {
          symbol:
            "♀",

          title:
            "Vênus",

          text:
            "Ela descreve sua maneira de amar, seus gostos, seus valores e aquilo que desperta sua atração em um relacionamento.",
        },

        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Ele representa desejo, ação, iniciativa, afirmação e a maneira como você busca aquilo que deseja.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Vênus",

      title:
        "Vênus nos 12 signos do zodíaco",

      introduction:
        "Vênus conserva sempre sua função de amor, prazer, atração e harmonia. O signo em que ela se encontra descreve a forma particular como essas qualidades se expressam.",

      titlePrefix:
        "Vênus em",
    },

    signs: [
      {
        sign: "Áries",
        symbol: "♈",
        text:
          "Vênus em Áries ama com espontaneidade, entusiasmo e intensidade. Essa posição procura relacionamentos vivos, estimulantes e capazes de manter o desejo de descoberta.",
      },
      {
        sign: "Touro",
        symbol: "♉",
        text:
          "Vênus em Touro busca estabilidade, sensualidade e fidelidade. O amor costuma ser demonstrado por meio da presença, do toque, dos gestos concretos e da criação de um ambiente seguro.",
      },
      {
        sign: "Gêmeos",
        symbol: "♊",
        text:
          "Vênus em Gêmeos sente atração pela comunicação, pela inteligência e pela curiosidade. A cumplicidade intelectual, o humor e a liberdade de diálogo são essenciais.",
      },
      {
        sign: "Câncer",
        symbol: "♋",
        text:
          "Vênus em Câncer ama com sensibilidade, ternura e apego. Busca um relacionamento acolhedor, íntimo e profundamente ligado à segurança emocional.",
      },
      {
        sign: "Leão",
        symbol: "♌",
        text:
          "Vênus em Leão expressa o amor com calor, generosidade e criatividade. Deseja sentir-se escolhida, admirada e plenamente envolvida em uma relação sincera.",
      },
      {
        sign: "Virgem",
        symbol: "♍",
        text:
          "Vênus em Virgem demonstra afeto por meio da atenção, disponibilidade e pequenos gestos úteis. Busca relações honestas, coerentes e baseadas na confiança diária.",
      },
      {
        sign: "Libra",
        symbol: "♎",
        text:
          "Vênus em Libra valoriza a harmonia, o diálogo e o equilíbrio. Procura um relacionamento elegante, respeitoso e fundamentado na reciprocidade.",
      },
      {
        sign: "Escorpião",
        symbol: "♏",
        text:
          "Vênus em Escorpião ama com intensidade, profundidade e lealdade. Busca uma ligação autêntica, transformadora e capaz de ir além das aparências.",
      },
      {
        sign: "Sagitário",
        symbol: "♐",
        text:
          "Vênus em Sagitário associa o amor à liberdade, à aventura e à ampliação de horizontes. Valoriza relações que permitam crescer e permanecer fiel a si mesmo.",
      },
      {
        sign: "Capricórnio",
        symbol: "♑",
        text:
          "Vênus em Capricórnio busca estabilidade, lealdade e maturidade. O amor se constrói gradualmente por meio do compromisso, da responsabilidade compartilhada e da confiança.",
      },
      {
        sign: "Aquário",
        symbol: "♒",
        text:
          "Vênus em Aquário valoriza independência, originalidade e cumplicidade intelectual. Procura um relacionamento livre, sincero e respeitoso com a individualidade de cada pessoa.",
      },
      {
        sign: "Peixes",
        symbol: "♓",
        text:
          "Vênus em Peixes ama com compaixão, romantismo e intuição. Busca uma profunda conexão emocional e espiritual, preservando limites saudáveis.",
      },
    ],
         housesSection: {
      kicker:
        "As áreas do coração",

      title:
        "Vênus nas 12 casas astrológicas",

      introduction:
        "O signo de Vênus descreve seu estilo afetivo, enquanto a casa indica a área da vida em que o amor, o prazer, os valores e a busca pela harmonia assumem maior importância.",

      titlePrefix:
        "Vênus em",
    },

    houses: [
      {
        house: "Casa I",
        text:
          "Vênus na Casa I fortalece o charme, a delicadeza e a necessidade de criar relacionamentos harmoniosos. A pessoa costuma transmitir naturalmente uma presença agradável, atraente e diplomática.",
      },
      {
        house: "Casa II",
        text:
          "Vênus na Casa II relaciona os vínculos afetivos aos valores, ao conforto e à segurança material. A pessoa tende a valorizar qualidade, estabilidade e os prazeres dos sentidos.",
      },
      {
        house: "Casa III",
        text:
          "Vênus na Casa III favorece uma comunicação gentil, sedutora e conciliadora. Conversas, estudos, escrita e relações próximas podem trazer grande satisfação.",
      },
      {
        house: "Casa IV",
        text:
          "Vênus na Casa IV busca harmonia no lar e na vida privada. A pessoa costuma desejar um ambiente acolhedor, bonito e emocionalmente seguro.",
      },
      {
        house: "Casa V",
        text:
          "Vênus na Casa V reforça o romantismo, a criatividade, a sedução e o prazer de amar. Também favorece a expressão artística e relacionamentos inspiradores.",
      },
      {
        house: "Casa VI",
        text:
          "Vênus na Casa VI demonstra afeto por meio da ajuda, da presença e dos pequenos gestos do cotidiano. A pessoa busca um ambiente de trabalho harmonioso e rotinas agradáveis.",
      },
      {
        house: "Casa VII",
        text:
          "Vênus na Casa VII destaca a importância do casamento, das parcerias e do equilíbrio nas relações. A pessoa tende a florescer através de compromissos e cooperação.",
      },
      {
        house: "Casa VIII",
        text:
          "Vênus na Casa VIII procura uma intimidade profunda, emocional e transformadora. Os relacionamentos podem ser vividos com intensidade, forte apego e desejo de fusão.",
      },
      {
        house: "Casa IX",
        text:
          "Vênus na Casa IX associa o amor às viagens, à descoberta e à abertura cultural. A pessoa pode sentir atração por relações que ampliem sua visão de mundo.",
      },
      {
        house: "Casa X",
        text:
          "Vênus na Casa X pode favorecer uma imagem pública agradável, diplomática ou criativa. Os relacionamentos e a busca pela harmonia podem desempenhar um papel importante na carreira.",
      },
      {
        house: "Casa XI",
        text:
          "Vênus na Casa XI valoriza amizades, redes de contato e projetos coletivos. Os relacionamentos amorosos podem nascer de uma forte cumplicidade intelectual ou de ideais compartilhados.",
      },
      {
        house: "Casa XII",
        text:
          "Vênus na Casa XII proporciona uma vida afetiva interior, sensível e por vezes reservada. A pessoa pode idealizar o amor e precisa aprender a reconhecer claramente seus limites e necessidades.",
      },
    ],

    retrograde: {
      kicker:
        "Reflexão afetiva",

      title:
        "O que significa Vênus retrógrada?",

      paragraphs: [
        "Vista da Terra, Vênus às vezes parece desacelerar e mover-se temporariamente para trás no céu. Trata-se de um movimento aparente causado pelas posições relativas da Terra e de Vênus.",

        "Na interpretação astrológica, um período de Vênus retrógrada costuma estar associado a uma reflexão sobre relacionamentos, valores, autoestima, desejos e expectativas afetivas.",

        "Isso não significa automaticamente que um relacionamento terminará ou que um antigo amor retornará. Em vez disso, pode representar um momento para compreender melhor aquilo que realmente traz felicidade e satisfação.",
      ],

      symbol:
        "♀℞",

      cardTitle:
        "Um convite para reavaliar",

      points: [
        "Rever expectativas amorosas",
        "Esclarecer valores pessoais",
        "Observar a relação com o prazer",
        "Reavaliar limites nos relacionamentos",
        "Fortalecer a autoestima",
      ],
    },

    strengths: {
      title:
        "Os pontos fortes e os desafios de Vênus",

      strengthsKicker:
        "Possíveis qualidades",

      strengthsTitle:
        "Criar relações harmoniosas",

      strengths: [
        "Sensibilidade nos relacionamentos",
        "Diplomacia",
        "Capacidade de apreciar a beleza",
        "Carinho e ternura",
        "Busca pela reciprocidade",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "Preservar o equilíbrio pessoal",

      challenges: [
        "Necessidade excessiva de aprovação",
        "Dificuldade em estabelecer limites",
        "Idealização dos relacionamentos",
        "Medo de conflitos",
        "Dependência da opinião dos outros",
      ],
    },

    aspectsSection: {
      title:
        "Os aspectos astrológicos de Vênus",

      introduction:
        "Os aspectos unem Vênus aos demais planetas do mapa natal. Eles acrescentam nuances à maneira como você ama, aos seus valores e à forma como vive a atração e os relacionamentos.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "A conjunção",

        text:
          "Une Vênus à energia de outro planeta e fortalece sua expressão conjunta na vida afetiva.",
      },

      {
        symbol:
          "△",

        title:
          "O trígono",

        text:
          "Pode simbolizar uma circulação natural entre sentimentos, valores e as qualidades do outro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "O sextil",

        text:
          "Representa potencial para cooperação, abertura e desenvolvimento nos relacionamentos.",
      },

      {
        symbol:
          "□",

        title:
          "A quadratura",

        text:
          "Pode revelar tensão entre desejos, valores e expectativas, incentivando maior consciência.",
      },

      {
        symbol:
          "☍",

        title:
          "A oposição",

        text:
          "Convida a encontrar equilíbrio entre suas necessidades afetivas e as necessidades das outras pessoas.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",

      title:
        "Em qual signo e casa está sua Vênus?",

      text:
        "Gere gratuitamente seu mapa astral para descobrir Vênus, o Sol, a Lua, o Ascendente e as posições dos seus principais planetas.",

      button:
        "Descobrir meu mapa astral",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Vênus na astrologia",

      items: [
        {
          question:
            "O que Vênus representa na astrologia?",

          answer:
            "Vênus representa simbolicamente o amor, a atração, os relacionamentos, o prazer, os gostos pessoais, os valores e a maneira como uma pessoa procura harmonia.",
        },
        {
          question:
            "O que significa o signo de Vênus?",

          answer:
            "O signo de Vênus descreve sua maneira de amar, aquilo que desperta sua atração, o que você aprecia em um relacionamento e como demonstra afeto.",
        },
        {
          question:
            "Vênus representa apenas a vida amorosa?",

          answer:
            "Não. Vênus também está relacionada aos valores, ao prazer, à estética, à criatividade, à diplomacia e à forma como você busca equilíbrio.",
        },
        {
          question:
            "O que significa Vênus retrógrada no mapa natal?",

          answer:
            "Na interpretação astrológica, Vênus retrógrada no nascimento pode simbolizar uma forma mais interior ou pessoal de viver os sentimentos, os valores e a autoestima.",
        },
        {
          question:
            "Vênus retrógrada anuncia uma separação?",

          answer:
            "Não. A astrologia não permite afirmar que ocorrerá uma separação. Esse período é geralmente interpretado como um convite para refletir sobre relacionamentos, valores e expectativas afetivas.",
        },
        {
          question:
            "Como descobrir meu signo de Vênus?",

          answer:
            "É necessário calcular seu mapa astral utilizando sua data, horário e local de nascimento para conhecer a posição exata de Vênus.",
        },
        {
          question:
            "Qual é a diferença entre Vênus e a Lua?",

          answer:
            "A Lua representa as necessidades emocionais e a segurança interior, enquanto Vênus descreve a maneira de amar, os gostos, a atração e os valores nos relacionamentos.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui aconselhamento médico, psicológico, jurídico ou financeiro.",
  },
};
