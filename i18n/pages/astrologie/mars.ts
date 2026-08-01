// i18n/pages/astrologie/mars.ts

import type {
  Locale,
} from "@/i18n/config";

export type MarsCard = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
};

export type MarsFunction = {
  number: string;
  title: string;
  text: string;
};

export type MarsSign = {
  sign: string;
  symbol: string;
  text: string;
};

export type MarsHouse = {
  house: string;
  text: string;
};

export type MarsAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type MarsFaqItem = {
  question: string;
  answer: string;
};

export type MarsPageText = {
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
    seeSigns: string;
  };

  introduction: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  action: {
    title: string;
    cards: MarsCard[];
  };

  functions: {
    title: string;
    cards: MarsFunction[];
  };

  planets: {
    title: string;
    cards: MarsCard[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  signs: MarsSign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  houses: MarsHouse[];

  retrograde: {
    kicker: string;
    title: string;
    paragraphs: string[];
    cardSymbol: string;
    cardTitle: string;
    items: string[];
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

  aspects: MarsAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: MarsFaqItem[];
  };

  disclaimer: string;
};

export const MARS_TRANSLATIONS:
  Record<
    Locale,
    MarsPageText
  > = {
  fr: {
    metadata: {
      title:
        "Mars en astrologie : action, désir, courage et énergie | Luna Astralis",

      description:
        "Découvrez la signification de Mars en astrologie, son influence sur l’action, le désir, le courage, l’affirmation et son expression dans les 12 signes du zodiaque.",

      ogTitle:
        "Mars en astrologie : action, désir, courage et affirmation",

      ogDescription:
        "Comprenez le rôle de Mars dans votre thème natal et découvrez comment cette planète influence votre énergie, votre volonté d’agir et votre manière de vous affirmer.",

      twitterTitle:
        "Mars en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Mars influence votre énergie, votre désir, votre courage et votre manière de passer à l’action.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Mars en astrologie : action, désir, courage et affirmation",

      description:
        "Guide complet consacré au rôle de Mars dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "♂ Planètes et thème natal",

      title:
        "Mars en astrologie",

      lead:
        "Mars représente votre énergie, votre courage, votre désir, votre manière de passer à l’action et votre capacité à vous affirmer.",

      createChart:
        "Créer ma carte du ciel gratuite",

      seeSigns:
        "Voir les 12 signes",
    },

    introduction: {
      kicker:
        "Comprendre votre force d’action",

      title:
        "Que représente Mars dans un thème astral ?",

      paragraphs: [
        "En astrologie, Mars symbolise l’action, le désir, le courage et la capacité à défendre ses intérêts. Il décrit la manière dont une personne mobilise son énergie pour poursuivre ses objectifs.",

        "Sa position dans votre carte du ciel peut révéler votre style d’affirmation, votre manière de réagir face aux obstacles et les situations qui éveillent naturellement votre combativité.",

        "Mars ne représente pas uniquement la colère ou l’agressivité. Il symbolise également la motivation, la détermination, l’initiative et la capacité à poser des limites claires.",
      ],
    },

    action: {
      title:
        "Mars, l’action et l’affirmation",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Votre manière d’agir",

          text:
            "Mars décrit la façon dont vous transformez une intention en action et poursuivez concrètement vos objectifs.",
        },

        {
          symbol:
            "✦",

          title:
            "Votre désir",

          text:
            "Il révèle ce qui stimule votre énergie, votre passion et votre besoin de conquérir ou d’obtenir quelque chose.",
        },

        {
          symbol:
            "⚔",

          title:
            "Votre affirmation",

          text:
            "Mars montre comment vous défendez vos limites, exprimez votre désaccord et prenez votre place.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions de Mars",

      cards: [
        {
          number:
            "01",

          title:
            "Initier",

          text:
            "Mars donne l’impulsion nécessaire pour commencer une action, prendre une décision et sortir de l’immobilité.",
        },

        {
          number:
            "02",

          title:
            "Poursuivre",

          text:
            "Il symbolise la volonté de continuer malgré les obstacles, les résistances ou les difficultés rencontrées.",
        },

        {
          number:
            "03",

          title:
            "Défendre",

          text:
            "Mars permet de protéger ses intérêts, de poser des limites et de réagir lorsqu’une situation semble injuste ou menaçante.",
        },

        {
          number:
            "04",

          title:
            "Conquérir",

          text:
            "Il représente le besoin d’avancer vers un objectif, de relever un défi et de dépasser ses propres limites.",
        },
      ],
    },

    planets: {
      title:
        "Mars, Vénus et le Soleil",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Le Soleil",

          text:
            "Il représente votre identité consciente, votre volonté et la direction générale que vous cherchez à donner à votre vie.",

          link:
            "Découvrir le Soleil",
        },

        {
          symbol:
            "♀",

          title:
            "Vénus",

          text:
            "Elle décrit votre manière d’aimer, vos valeurs, vos goûts et ce qui vous attire dans les relations.",

          link:
            "Découvrir Vénus",
        },

        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "Il représente l’action, le désir, le courage et la manière dont vous poursuivez ce que vous voulez.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions de Mars",

      title:
        "Mars dans les 12 signes astrologiques",

      introduction:
        "Mars conserve toujours sa fonction d’action, de désir et d’affirmation. Le signe dans lequel il se trouve décrit la manière particulière dont votre énergie se mobilise.",

      titlePrefix:
        "Mars en",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Mars en Bélier agit avec rapidité, courage et spontanéité. Cette position favorise l’initiative, la compétition et le besoin d’avancer directement vers ses objectifs.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Mars en Taureau agit avec patience, endurance et détermination. La personne avance lentement, mais elle peut poursuivre ses efforts avec une grande constance lorsqu’elle désire vraiment quelque chose.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Mars en Gémeaux dirige son énergie vers les idées, les échanges et la découverte. La parole, l’intelligence et la curiosité deviennent des moyens privilégiés d’agir et de se défendre.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Mars en Cancer agit sous l’influence des émotions et du besoin de protéger. La personne peut mobiliser une grande force lorsqu’elle défend sa famille, son foyer ou ce qui lui tient profondément à cœur.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Mars en Lion agit avec confiance, créativité et fierté. Cette position recherche des actions valorisantes et permet souvent de mobiliser beaucoup d’énergie lorsqu’un objectif stimule le cœur.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Mars en Vierge agit avec précision, méthode et efficacité. La personne concentre son énergie sur les détails, l’organisation et l’amélioration concrète des situations.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Mars en Balance cherche à agir en tenant compte des autres et des conséquences relationnelles. La personne peut défendre l’équité, négocier et mobiliser son énergie pour rétablir l’harmonie.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Mars en Scorpion agit avec intensité, stratégie et profondeur. Cette position favorise la détermination, la résistance et la capacité à poursuivre un objectif malgré les obstacles.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Mars en Sagittaire agit avec enthousiasme, franchise et besoin de liberté. La personne mobilise son énergie lorsqu’elle peut explorer, apprendre, voyager ou défendre ses convictions.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Mars en Capricorne agit avec discipline, ambition et maîtrise. Cette position favorise la planification, la persévérance et la capacité à poursuivre des objectifs à long terme.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Mars en Verseau agit de manière indépendante, inventive et parfois imprévisible. La personne peut investir son énergie dans des idées nouvelles, des causes ou des projets collectifs.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Mars en Poissons agit grâce à l’intuition, à l’imagination et à la sensibilité. La personne peut mobiliser son énergie dans la création, l’aide aux autres ou les projets porteurs de sens.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines de votre action",

      title:
        "Mars dans les 12 maisons astrologiques",

      introduction:
        "Le signe de Mars décrit votre manière d’agir, tandis que sa maison indique le domaine de vie dans lequel votre énergie, votre courage et votre besoin d’affirmation s’expriment le plus.",

      titlePrefix:
        "Mars en",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Mars en Maison I renforce l’affirmation, l’initiative et le besoin d’agir directement. La personne peut dégager une énergie volontaire, combative ou particulièrement dynamique.",
      },

      {
        house:
          "Maison II",

        text:
          "Mars en Maison II dirige l’énergie vers les ressources, la sécurité et la construction matérielle. La personne peut se montrer très déterminée lorsqu’il s’agit de défendre ses valeurs ou ses possessions.",
      },

      {
        house:
          "Maison III",

        text:
          "Mars en Maison III donne une communication vive, directe et énergique. La personne peut défendre ses idées avec force et investir beaucoup d’énergie dans les apprentissages et les déplacements.",
      },

      {
        house:
          "Maison IV",

        text:
          "Mars en Maison IV concentre l’action dans la vie privée, le foyer et la famille. La personne peut ressentir un fort besoin de protéger ses racines ou de transformer son environnement personnel.",
      },

      {
        house:
          "Maison V",

        text:
          "Mars en Maison V stimule la créativité, le désir, la compétition et l’expression personnelle. La personne recherche souvent des activités passionnantes et des relations vivantes.",
      },

      {
        house:
          "Maison VI",

        text:
          "Mars en Maison VI dirige l’énergie vers le travail, les responsabilités et les habitudes quotidiennes. La personne peut être très productive lorsqu’elle dispose d’objectifs précis.",
      },

      {
        house:
          "Maison VII",

        text:
          "Mars en Maison VII rend les relations particulièrement dynamiques. La personne peut attirer des partenaires affirmés et doit apprendre à gérer les désaccords avec équilibre.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Mars en Maison VIII donne une volonté intense, stratégique et transformatrice. La personne peut affronter les crises avec courage et rechercher une intimité profonde.",
      },

      {
        house:
          "Maison IX",

        text:
          "Mars en Maison IX mobilise l’énergie autour des voyages, des études, des convictions et de la recherche de sens. La personne agit avec enthousiasme lorsqu’elle défend une vision.",
      },

      {
        house:
          "Maison X",

        text:
          "Mars en Maison X renforce l’ambition, le désir de réussite et la capacité à agir dans la sphère professionnelle. La personne peut poursuivre ses objectifs avec beaucoup de détermination.",
      },

      {
        house:
          "Maison XI",

        text:
          "Mars en Maison XI dirige l’action vers les projets, les réseaux et les causes collectives. La personne peut devenir un moteur important au sein d’un groupe.",
      },

      {
        house:
          "Maison XII",

        text:
          "Mars en Maison XII donne une énergie plus intérieure ou difficile à exprimer directement. La personne peut agir efficacement dans l’ombre, mais doit apprendre à reconnaître et canaliser sa colère.",
      },
    ],

    retrograde: {
      kicker:
        "Révision de l’action",

      title:
        "Que signifie Mars rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Mars semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un mouvement apparent produit par les positions relatives de la Terre et de Mars.",

        "Dans l’interprétation astrologique, Mars rétrograde est souvent associé à une période de réflexion sur les objectifs, la colère, la motivation et la manière d’utiliser son énergie.",

        "Cette période ne signifie pas nécessairement qu’il faut arrêter d’agir. Elle peut plutôt inviter à ralentir, à revoir sa stratégie et à éviter de gaspiller son énergie dans des conflits inutiles.",
      ],

      cardSymbol:
        "♂℞",

      cardTitle:
        "Une invitation à réorienter",

      items: [
        "Revoir ses objectifs",
        "Observer sa manière de gérer la colère",
        "Clarifier ses motivations",
        "Éviter les actions impulsives",
        "Reprendre un projet avec une nouvelle stratégie",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis de Mars",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Une énergie volontaire",

      strengths: [
        "Courage",
        "Initiative",
        "Détermination",
        "Capacité à défendre ses limites",
        "Goût du défi",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Canaliser l’intensité",

      challenges: [
        "Impulsivité",
        "Colère difficile à maîtriser",
        "Compétition excessive",
        "Tendance à agir trop vite",
        "Difficulté à accepter les obstacles",
      ],
    },

    aspectsSection: {
      title:
        "Les aspects astrologiques de Mars",

      introduction:
        "Les aspects relient Mars aux autres planètes du thème natal. Ils apportent des nuances à votre manière d’agir, de vous affirmer et de mobiliser votre énergie.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Mars avec une autre planète et intensifie leur expression commune dans l’action.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une circulation naturelle entre l’énergie de Mars et les qualités de l’autre planète.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel de coopération, d’initiative et de développement constructif.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut créer une tension qui pousse à développer davantage de maîtrise, de patience et de stratégie.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à trouver un équilibre entre ses propres désirs et les besoins ou les actions des autres.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Mars ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Mars, votre Vénus, votre Soleil, votre Lune et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Mars en astrologie",

      items: [
        {
          question:
            "Que représente Mars en astrologie ?",

          answer:
            "Mars représente symboliquement l’action, l’énergie, le courage, le désir, l’affirmation, la colère et la manière dont une personne poursuit ce qu’elle veut.",
        },

        {
          question:
            "Que signifie le signe de Mars ?",

          answer:
            "Le signe de Mars décrit votre manière d’agir, de vous défendre, d’exprimer votre désir et de mobiliser votre énergie face aux obstacles.",
        },

        {
          question:
            "Mars représente-t-il seulement l’agressivité ?",

          answer:
            "Non. Mars symbolise aussi l’initiative, le courage, la motivation, la détermination et la capacité à poser des limites ou à défendre ses intérêts.",
        },

        {
          question:
            "Que signifie Mars rétrograde dans un thème natal ?",

          answer:
            "Dans l’interprétation astrologique, Mars rétrograde à la naissance peut indiquer une manière plus intérieure, réfléchie ou personnelle d’exprimer la colère, le désir et l’affirmation.",
        },

        {
          question:
            "Mars rétrograde empêche-t-il d’agir ?",

          answer:
            "Non. Cette période est plutôt interprétée comme une invitation à revoir ses objectifs, son rythme d’action et la manière dont on utilise son énergie.",
        },

        {
          question:
            "Comment connaître mon signe de Mars ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Mars.",
        },

        {
          question:
            "Quelle différence entre Mars et Vénus ?",

          answer:
            "Vénus décrit l’attirance, les valeurs et la manière d’aimer, tandis que Mars représente le désir, l’action, l’initiative et la manière de poursuivre ce que l’on veut.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Mars in Astrology: Action, Desire, Courage and Energy | Luna Astralis",

      description:
        "Discover the meaning of Mars in astrology, its influence on action, desire, courage, assertiveness and its expression through the 12 zodiac signs.",

      ogTitle:
        "Mars in Astrology: Action, Desire, Courage and Assertiveness",

      ogDescription:
        "Understand Mars’s role in your birth chart and discover how this planet influences your energy, drive to act and way of asserting yourself.",

      twitterTitle:
        "Mars in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Mars influences your energy, desire, courage and way of taking action.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Mars in Astrology: Action, Desire, Courage and Assertiveness",

      description:
        "A complete guide to Mars’s role in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "♂ Planets and birth chart",

      title:
        "Mars in Astrology",

      lead:
        "Mars represents your energy, courage, desire, way of taking action and ability to assert yourself.",

      createChart:
        "Create my free birth chart",

      seeSigns:
        "See the 12 signs",
    },

    introduction: {
      kicker:
        "Understand your power of action",

      title:
        "What does Mars represent in a birth chart?",

      paragraphs: [
        "In astrology, Mars symbolizes action, desire, courage and the ability to defend personal interests. It describes how a person mobilizes energy to pursue goals.",

        "Its position in your birth chart may reveal your style of assertion, your way of reacting to obstacles and the situations that naturally awaken your fighting spirit.",

        "Mars does not represent only anger or aggression. It also symbolizes motivation, determination, initiative and the ability to establish clear boundaries.",
      ],
    },

    action: {
      title:
        "Mars, action and assertiveness",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Your way of acting",

          text:
            "Mars describes how you transform an intention into action and concretely pursue your goals.",
        },

        {
          symbol:
            "✦",

          title:
            "Your desire",

          text:
            "It reveals what stimulates your energy, passion and need to conquer or obtain something.",
        },

        {
          symbol:
            "⚔",

          title:
            "Your assertiveness",

          text:
            "Mars shows how you defend your boundaries, express disagreement and claim your place.",
        },
      ],
    },

    functions: {
      title:
        "Mars’s main functions",

      cards: [
        {
          number:
            "01",

          title:
            "Initiate",

          text:
            "Mars provides the impulse needed to begin an action, make a decision and move out of inactivity.",
        },

        {
          number:
            "02",

          title:
            "Pursue",

          text:
            "It symbolizes the will to continue despite obstacles, resistance or difficulties.",
        },

        {
          number:
            "03",

          title:
            "Defend",

          text:
            "Mars helps protect personal interests, establish boundaries and respond when a situation seems unfair or threatening.",
        },

        {
          number:
            "04",

          title:
            "Conquer",

          text:
            "It represents the need to move toward a goal, face a challenge and overcome personal limitations.",
        },
      ],
    },

    planets: {
      title:
        "Mars, Venus and the Sun",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "The Sun",

          text:
            "It represents your conscious identity, willpower and the general direction you seek to give your life.",

          link:
            "Discover the Sun",
        },

        {
          symbol:
            "♀",

          title:
            "Venus",

          text:
            "It describes your way of loving, your values, tastes and what attracts you in relationships.",

          link:
            "Discover Venus",
        },

        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "It represents action, desire, courage and the way you pursue what you want.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Mars",

      title:
        "Mars in the 12 zodiac signs",

      introduction:
        "Mars always retains its function of action, desire and assertiveness. The sign it occupies describes the particular way your energy is mobilized.",

      titlePrefix:
        "Mars in",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Mars in Aries acts with speed, courage and spontaneity. This position encourages initiative, competition and the need to move directly toward goals.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Mars in Taurus acts with patience, endurance and determination. The person moves slowly, but can maintain effort with great consistency when truly wanting something.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Mars in Gemini directs energy toward ideas, communication and discovery. Speech, intelligence and curiosity become preferred ways of acting and defending oneself.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Mars in Cancer acts under the influence of emotions and the need to protect. The person may mobilize great strength when defending family, home or something deeply important.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Mars in Leo acts with confidence, creativity and pride. This position seeks rewarding actions and often mobilizes significant energy when a goal inspires the heart.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Mars in Virgo acts with precision, method and efficiency. The person focuses energy on details, organization and the practical improvement of situations.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Mars in Libra seeks to act while considering others and relational consequences. The person may defend fairness, negotiate and use energy to restore harmony.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Mars in Scorpio acts with intensity, strategy and depth. This position encourages determination, resilience and the ability to pursue a goal despite obstacles.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Mars in Sagittarius acts with enthusiasm, honesty and a need for freedom. The person mobilizes energy through exploration, learning, travel or defending personal beliefs.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Mars in Capricorn acts with discipline, ambition and control. This position encourages planning, perseverance and the ability to pursue long-term goals.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Mars in Aquarius acts independently, inventively and sometimes unpredictably. The person may invest energy in new ideas, causes or collective projects.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Mars in Pisces acts through intuition, imagination and sensitivity. The person may mobilize energy through creativity, helping others or meaningful projects.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of your action",

      title:
        "Mars in the 12 astrological houses",

      introduction:
        "Mars’s sign describes how you act, while its house indicates the area of life in which your energy, courage and need for assertion are expressed most strongly.",

      titlePrefix:
        "Mars in",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Mars in House I strengthens assertiveness, initiative and the need to act directly. The person may project determined, combative or particularly dynamic energy.",
      },

      {
        house:
          "House II",

        text:
          "Mars in House II directs energy toward resources, security and material construction. The person may be very determined when defending values or possessions.",
      },

      {
        house:
          "House III",

        text:
          "Mars in House III gives lively, direct and energetic communication. The person may defend ideas strongly and invest substantial energy in learning and movement.",
      },

      {
        house:
          "House IV",

        text:
          "Mars in House IV concentrates action in private life, home and family. The person may feel a strong need to protect roots or transform the personal environment.",
      },

      {
        house:
          "House V",

        text:
          "Mars in House V stimulates creativity, desire, competition and personal expression. The person often seeks exciting activities and lively relationships.",
      },

      {
        house:
          "House VI",

        text:
          "Mars in House VI directs energy toward work, responsibilities and daily habits. The person may be highly productive when working toward precise goals.",
      },

      {
        house:
          "House VII",

        text:
          "Mars in House VII makes relationships particularly dynamic. The person may attract assertive partners and must learn to manage disagreements with balance.",
      },

      {
        house:
          "House VIII",

        text:
          "Mars in House VIII gives intense, strategic and transformative willpower. The person may face crises courageously and seek deep intimacy.",
      },

      {
        house:
          "House IX",

        text:
          "Mars in House IX mobilizes energy around travel, study, beliefs and the search for meaning. The person acts enthusiastically when defending a vision.",
      },

      {
        house:
          "House X",

        text:
          "Mars in House X strengthens ambition, the desire for success and the ability to act professionally. The person may pursue goals with great determination.",
      },

      {
        house:
          "House XI",

        text:
          "Mars in House XI directs action toward projects, networks and collective causes. The person may become an important driving force within a group.",
      },

      {
        house:
          "House XII",

        text:
          "Mars in House XII gives energy that is more internal or difficult to express directly. The person may act effectively behind the scenes but must learn to recognize and channel anger.",
      },
    ],

    retrograde: {
      kicker:
        "Reconsidering action",

      title:
        "What does retrograde Mars mean?",

      paragraphs: [
        "From Earth, Mars sometimes appears to slow down and temporarily move backward in the sky. This is an apparent movement produced by the relative positions of Earth and Mars.",

        "In astrological interpretation, retrograde Mars is often associated with a period of reflection about goals, anger, motivation and the way energy is used.",

        "This period does not necessarily mean that action should stop. It may instead invite slowing down, reviewing strategy and avoiding wasting energy in unnecessary conflicts.",
      ],

      cardSymbol:
        "♂℞",

      cardTitle:
        "An invitation to redirect",

      items: [
        "Review personal goals",
        "Observe how anger is managed",
        "Clarify motivations",
        "Avoid impulsive actions",
        "Resume a project with a new strategy",
      ],
    },

    strengths: {
      title:
        "Mars’s strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "Determined energy",

      strengths: [
        "Courage",
        "Initiative",
        "Determination",
        "Ability to defend boundaries",
        "Enjoyment of challenges",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Channel intensity",

      challenges: [
        "Impulsiveness",
        "Difficulty controlling anger",
        "Excessive competition",
        "Tendency to act too quickly",
        "Difficulty accepting obstacles",
      ],
    },

    aspectsSection: {
      title:
        "Mars’s astrological aspects",

      introduction:
        "Aspects connect Mars with the other planets in the birth chart. They add nuance to the way you act, assert yourself and mobilize your energy.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Mars with another planet and intensifies their shared expression through action.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a natural flow between Mars’s energy and the qualities of the other planet.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for cooperation, initiative and constructive development.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may create tension that encourages greater control, patience and strategy.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It invites balance between personal desires and the needs or actions of others.",
      },
    ],

    cta: {
      kicker:
        "Discover your position",

      title:
        "Which sign and house contain your Mars?",

      text:
        "Generate your free birth chart to discover your Mars, Venus, Sun, Moon and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Mars in astrology",

      items: [
        {
          question:
            "What does Mars represent in astrology?",

          answer:
            "Mars symbolically represents action, energy, courage, desire, assertiveness, anger and the way a person pursues what they want.",
        },

        {
          question:
            "What does the sign of Mars mean?",

          answer:
            "The sign of Mars describes how you act, defend yourself, express desire and mobilize energy when facing obstacles.",
        },

        {
          question:
            "Does Mars represent only aggression?",

          answer:
            "No. Mars also symbolizes initiative, courage, motivation, determination and the ability to establish boundaries or defend personal interests.",
        },

        {
          question:
            "What does retrograde Mars mean in a birth chart?",

          answer:
            "In astrological interpretation, natal retrograde Mars may indicate a more internal, thoughtful or personal way of expressing anger, desire and assertiveness.",
        },

        {
          question:
            "Does retrograde Mars prevent action?",

          answer:
            "No. This period is generally interpreted as an invitation to reconsider goals, pace of action and the way energy is used.",
        },

        {
          question:
            "How can I find my Mars sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine Mars’s exact position.",
        },

        {
          question:
            "What is the difference between Mars and Venus?",

          answer:
            "Venus describes attraction, values and the way you love, while Mars represents desire, action, initiative and the way you pursue what you want.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Marte en astrología: acción, deseo, valor y energía | Luna Astralis",

      description:
        "Descubre el significado de Marte en astrología, su influencia sobre la acción, el deseo, el valor, la afirmación personal y su expresión en los 12 signos del zodiaco.",

      ogTitle:
        "Marte en astrología: acción, deseo, valor y afirmación",

      ogDescription:
        "Comprende el papel de Marte en tu carta natal y descubre cómo este planeta influye en tu energía, tu voluntad de actuar y tu manera de afirmarte.",

      twitterTitle:
        "Marte en astrología | Luna Astralis",

      twitterDescription:
        "Descubre cómo Marte influye en tu energía, tu deseo, tu valor y tu manera de pasar a la acción.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Marte en astrología: acción, deseo, valor y afirmación",

      description:
        "Guía completa sobre el papel de Marte en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "♂ Planetas y carta natal",

      title:
        "Marte en astrología",

      lead:
        "Marte representa tu energía, tu valor, tu deseo, tu manera de pasar a la acción y tu capacidad para afirmarte.",

      createChart:
        "Crear mi carta natal gratis",

      seeSigns:
        "Ver los 12 signos",
    },

    introduction: {
      kicker:
        "Comprender tu fuerza de acción",

      title:
        "¿Qué representa Marte en una carta natal?",

      paragraphs: [
        "En astrología, Marte simboliza la acción, el deseo, el valor y la capacidad de defender los propios intereses. Describe la manera en que una persona moviliza su energía para alcanzar sus objetivos.",

        "Su posición en tu carta natal puede revelar tu estilo de afirmación, tu manera de reaccionar frente a los obstáculos y las situaciones que despiertan naturalmente tu combatividad.",

        "Marte no representa únicamente la ira o la agresividad. También simboliza la motivación, la determinación, la iniciativa y la capacidad de establecer límites claros.",
      ],
    },

    action: {
      title:
        "Marte, la acción y la afirmación",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Tu manera de actuar",

          text:
            "Marte describe cómo transformas una intención en acción y persigues concretamente tus objetivos.",
        },

        {
          symbol:
            "✦",

          title:
            "Tu deseo",

          text:
            "Revela lo que estimula tu energía, tu pasión y tu necesidad de conquistar u obtener algo.",
        },

        {
          symbol:
            "⚔",

          title:
            "Tu afirmación",

          text:
            "Marte muestra cómo defiendes tus límites, expresas tu desacuerdo y ocupas tu lugar.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Marte",

      cards: [
        {
          number:
            "01",

          title:
            "Iniciar",

          text:
            "Marte aporta el impulso necesario para comenzar una acción, tomar una decisión y salir de la inmovilidad.",
        },

        {
          number:
            "02",

          title:
            "Perseguir",

          text:
            "Simboliza la voluntad de continuar a pesar de los obstáculos, las resistencias o las dificultades encontradas.",
        },

        {
          number:
            "03",

          title:
            "Defender",

          text:
            "Marte permite proteger los propios intereses, establecer límites y reaccionar cuando una situación parece injusta o amenazante.",
        },

        {
          number:
            "04",

          title:
            "Conquistar",

          text:
            "Representa la necesidad de avanzar hacia un objetivo, afrontar un desafío y superar los propios límites.",
        },
      ],
    },

    planets: {
      title:
        "Marte, Venus y el Sol",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "El Sol",

          text:
            "Representa tu identidad consciente, tu voluntad y la dirección general que deseas dar a tu vida.",

          link:
            "Descubrir el Sol",
        },

        {
          symbol:
            "♀",

          title:
            "Venus",

          text:
            "Describe tu manera de amar, tus valores, tus gustos y lo que te atrae en las relaciones.",

          link:
            "Descubrir Venus",
        },

        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Representa la acción, el deseo, el valor y la manera en que persigues lo que deseas.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Marte",

      title:
        "Marte en los 12 signos astrológicos",

      introduction:
        "Marte siempre conserva su función de acción, deseo y afirmación. El signo en el que se encuentra describe la manera particular en que tu energía se moviliza.",

      titlePrefix:
        "Marte en",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Marte en Aries actúa con rapidez, valor y espontaneidad. Esta posición favorece la iniciativa, la competencia y la necesidad de avanzar directamente hacia los objetivos.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Marte en Tauro actúa con paciencia, resistencia y determinación. La persona avanza lentamente, pero puede mantener sus esfuerzos con gran constancia cuando desea verdaderamente algo.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Marte en Géminis dirige su energía hacia las ideas, los intercambios y el descubrimiento. La palabra, la inteligencia y la curiosidad se convierten en medios privilegiados para actuar y defenderse.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Marte en Cáncer actúa bajo la influencia de las emociones y la necesidad de proteger. La persona puede movilizar una gran fuerza cuando defiende a su familia, su hogar o aquello que le importa profundamente.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Marte en Leo actúa con confianza, creatividad y orgullo. Esta posición busca acciones valorizantes y suele movilizar mucha energía cuando un objetivo inspira el corazón.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Marte en Virgo actúa con precisión, método y eficacia. La persona concentra su energía en los detalles, la organización y la mejora concreta de las situaciones.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Marte en Libra intenta actuar teniendo en cuenta a los demás y las consecuencias relacionales. La persona puede defender la equidad, negociar y movilizar su energía para restablecer la armonía.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Marte en Escorpio actúa con intensidad, estrategia y profundidad. Esta posición favorece la determinación, la resistencia y la capacidad de perseguir un objetivo a pesar de los obstáculos.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Marte en Sagitario actúa con entusiasmo, franqueza y necesidad de libertad. La persona moviliza su energía cuando puede explorar, aprender, viajar o defender sus convicciones.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Marte en Capricornio actúa con disciplina, ambición y dominio. Esta posición favorece la planificación, la perseverancia y la capacidad de perseguir objetivos a largo plazo.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Marte en Acuario actúa de manera independiente, inventiva y a veces imprevisible. La persona puede invertir su energía en ideas nuevas, causas o proyectos colectivos.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Marte en Piscis actúa mediante la intuición, la imaginación y la sensibilidad. La persona puede movilizar su energía en la creación, la ayuda a los demás o los proyectos con sentido.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos de tu acción",

      title:
        "Marte en las 12 casas astrológicas",

      introduction:
        "El signo de Marte describe tu manera de actuar, mientras que su casa indica el ámbito de vida en el que tu energía, tu valor y tu necesidad de afirmación se expresan con mayor fuerza.",

      titlePrefix:
        "Marte en",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Marte en la Casa I refuerza la afirmación, la iniciativa y la necesidad de actuar directamente. La persona puede transmitir una energía voluntaria, combativa o especialmente dinámica.",
      },

      {
        house:
          "Casa II",

        text:
          "Marte en la Casa II dirige la energía hacia los recursos, la seguridad y la construcción material. La persona puede mostrarse muy determinada cuando se trata de defender sus valores o sus posesiones.",
      },

      {
        house:
          "Casa III",

        text:
          "Marte en la Casa III aporta una comunicación viva, directa y enérgica. La persona puede defender sus ideas con fuerza e invertir mucha energía en los aprendizajes y los desplazamientos.",
      },

      {
        house:
          "Casa IV",

        text:
          "Marte en la Casa IV concentra la acción en la vida privada, el hogar y la familia. La persona puede sentir una fuerte necesidad de proteger sus raíces o transformar su entorno personal.",
      },

      {
        house:
          "Casa V",

        text:
          "Marte en la Casa V estimula la creatividad, el deseo, la competencia y la expresión personal. La persona suele buscar actividades apasionantes y relaciones vivas.",
      },

      {
        house:
          "Casa VI",

        text:
          "Marte en la Casa VI dirige la energía hacia el trabajo, las responsabilidades y los hábitos cotidianos. La persona puede ser muy productiva cuando dispone de objetivos precisos.",
      },

      {
        house:
          "Casa VII",

        text:
          "Marte en la Casa VII hace que las relaciones sean especialmente dinámicas. La persona puede atraer parejas afirmadas y debe aprender a gestionar los desacuerdos con equilibrio.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Marte en la Casa VIII aporta una voluntad intensa, estratégica y transformadora. La persona puede afrontar las crisis con valor y buscar una intimidad profunda.",
      },

      {
        house:
          "Casa IX",

        text:
          "Marte en la Casa IX moviliza la energía alrededor de los viajes, los estudios, las convicciones y la búsqueda de sentido. La persona actúa con entusiasmo cuando defiende una visión.",
      },

      {
        house:
          "Casa X",

        text:
          "Marte en la Casa X refuerza la ambición, el deseo de éxito y la capacidad de actuar en el ámbito profesional. La persona puede perseguir sus objetivos con gran determinación.",
      },

      {
        house:
          "Casa XI",

        text:
          "Marte en la Casa XI dirige la acción hacia los proyectos, las redes y las causas colectivas. La persona puede convertirse en una fuerza importante dentro de un grupo.",
      },

      {
        house:
          "Casa XII",

        text:
          "Marte en la Casa XII aporta una energía más interior o difícil de expresar directamente. La persona puede actuar eficazmente en segundo plano, pero debe aprender a reconocer y canalizar su ira.",
      },
    ],

    retrograde: {
      kicker:
        "Revisión de la acción",

      title:
        "¿Qué significa Marte retrógrado?",

      paragraphs: [
        "Desde la Tierra, Marte a veces parece disminuir su velocidad y retroceder temporalmente en el cielo. Se trata de un movimiento aparente producido por las posiciones relativas de la Tierra y Marte.",

        "En la interpretación astrológica, Marte retrógrado suele asociarse con un período de reflexión sobre los objetivos, la ira, la motivación y la manera de utilizar la energía.",

        "Este período no significa necesariamente que haya que dejar de actuar. Puede invitar a reducir el ritmo, revisar la estrategia y evitar desperdiciar energía en conflictos innecesarios.",
      ],

      cardSymbol:
        "♂℞",

      cardTitle:
        "Una invitación a reorientarse",

      items: [
        "Revisar los objetivos",
        "Observar la manera de gestionar la ira",
        "Aclarar las motivaciones",
        "Evitar las acciones impulsivas",
        "Retomar un proyecto con una nueva estrategia",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Marte",

      strengthsKicker:
        "Fortalezas posibles",

      strengthsTitle:
        "Una energía decidida",

      strengths: [
        "Valor",
        "Iniciativa",
        "Determinación",
        "Capacidad para defender los límites",
        "Gusto por los desafíos",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Canalizar la intensidad",

      challenges: [
        "Impulsividad",
        "Ira difícil de controlar",
        "Competencia excesiva",
        "Tendencia a actuar demasiado rápido",
        "Dificultad para aceptar los obstáculos",
      ],
    },

    aspectsSection: {
      title:
        "Los aspectos astrológicos de Marte",

      introduction:
        "Los aspectos relacionan Marte con los demás planetas de la carta natal. Aportan matices a tu manera de actuar, afirmarte y movilizar tu energía.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjunción",

        text:
          "Fusiona Marte con otro planeta e intensifica su expresión común en la acción.",
      },

      {
        symbol:
          "△",

        title:
          "El trígono",

        text:
          "Puede simbolizar una circulación natural entre la energía de Marte y las cualidades del otro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "El sextil",

        text:
          "Representa un potencial de cooperación, iniciativa y desarrollo constructivo.",
      },

      {
        symbol:
          "□",

        title:
          "La cuadratura",

        text:
          "Puede crear una tensión que impulsa a desarrollar mayor dominio, paciencia y estrategia.",
      },

      {
        symbol:
          "☍",

        title:
          "La oposición",

        text:
          "Invita a encontrar un equilibrio entre los propios deseos y las necesidades o acciones de los demás.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",

      title:
        "¿En qué signo y casa se encuentra tu Marte?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tu Marte, Venus, Sol, Luna y las posiciones de tus principales planetas.",

      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Marte en astrología",

      items: [
        {
          question:
            "¿Qué representa Marte en astrología?",

          answer:
            "Marte representa simbólicamente la acción, la energía, el valor, el deseo, la afirmación, la ira y la manera en que una persona persigue lo que desea.",
        },

        {
          question:
            "¿Qué significa el signo de Marte?",

          answer:
            "El signo de Marte describe tu manera de actuar, defenderte, expresar tu deseo y movilizar tu energía frente a los obstáculos.",
        },

        {
          question:
            "¿Marte representa únicamente la agresividad?",

          answer:
            "No. Marte también simboliza la iniciativa, el valor, la motivación, la determinación y la capacidad de establecer límites o defender los propios intereses.",
        },

        {
          question:
            "¿Qué significa Marte retrógrado en una carta natal?",

          answer:
            "En la interpretación astrológica, Marte retrógrado al nacer puede indicar una manera más interior, reflexiva o personal de expresar la ira, el deseo y la afirmación.",
        },

        {
          question:
            "¿Marte retrógrado impide actuar?",

          answer:
            "No. Este período se interpreta más bien como una invitación a revisar los objetivos, el ritmo de acción y la manera en que se utiliza la energía.",
        },

        {
          question:
            "¿Cómo conocer mi signo de Marte?",

          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Marte.",
        },

        {
          question:
            "¿Cuál es la diferencia entre Marte y Venus?",

          answer:
            "Venus describe la atracción, los valores y la manera de amar, mientras que Marte representa el deseo, la acción, la iniciativa y la manera de perseguir lo que se desea.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Mars in der Astrologie: Handlung, Verlangen, Mut und Energie | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung des Mars in der Astrologie, seinen Einfluss auf Handlung, Verlangen, Mut, Durchsetzung und seinen Ausdruck in den 12 Tierkreiszeichen.",

      ogTitle:
        "Mars in der Astrologie: Handlung, Verlangen, Mut und Durchsetzung",

      ogDescription:
        "Verstehen Sie die Rolle des Mars im Geburtshoroskop und entdecken Sie, wie dieser Planet Energie, Handlungswillen und Durchsetzungsfähigkeit beeinflusst.",

      twitterTitle:
        "Mars in der Astrologie | Luna Astralis",

      twitterDescription:
        "Entdecken Sie, wie Mars Ihre Energie, Ihr Verlangen, Ihren Mut und Ihre Handlungsweise beeinflusst.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Mars in der Astrologie: Handlung, Verlangen, Mut und Durchsetzung",

      description:
        "Ein vollständiger Leitfaden zur Rolle des Mars im Geburtshoroskop und seinem Ausdruck in den zwölf Zeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "♂ Planeten und Geburtshoroskop",

      title:
        "Mars in der Astrologie",

      lead:
        "Mars steht für Ihre Energie, Ihren Mut, Ihr Verlangen, Ihre Art zu handeln und Ihre Fähigkeit, sich durchzusetzen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      seeSigns:
        "Die 12 Zeichen ansehen",
    },

    introduction: {
      kicker:
        "Ihre Handlungskraft verstehen",

      title:
        "Was bedeutet Mars im Geburtshoroskop?",

      paragraphs: [
        "In der Astrologie symbolisiert Mars Handlung, Verlangen, Mut und die Fähigkeit, persönliche Interessen zu verteidigen. Er beschreibt, wie ein Mensch Energie mobilisiert, um Ziele zu verfolgen.",

        "Seine Position im Geburtshoroskop kann Ihren Durchsetzungsstil, Ihre Reaktion auf Hindernisse und jene Situationen zeigen, die Ihre Kampfbereitschaft auf natürliche Weise wecken.",

        "Mars steht nicht nur für Ärger oder Aggressivität. Er symbolisiert außerdem Motivation, Entschlossenheit, Initiative und die Fähigkeit, klare Grenzen zu setzen.",
      ],
    },

    action: {
      title:
        "Mars, Handlung und Durchsetzung",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Ihre Art zu handeln",

          text:
            "Mars beschreibt, wie Sie eine Absicht in Handlung verwandeln und Ihre Ziele konkret verfolgen.",
        },

        {
          symbol:
            "✦",

          title:
            "Ihr Verlangen",

          text:
            "Er zeigt, was Ihre Energie, Leidenschaft und Ihr Bedürfnis anregt, etwas zu erobern oder zu erreichen.",
        },

        {
          symbol:
            "⚔",

          title:
            "Ihre Durchsetzung",

          text:
            "Mars zeigt, wie Sie Ihre Grenzen verteidigen, Widerspruch ausdrücken und Ihren Platz einnehmen.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen des Mars",

      cards: [
        {
          number:
            "01",

          title:
            "Beginnen",

          text:
            "Mars verleiht den notwendigen Impuls, um eine Handlung zu beginnen, eine Entscheidung zu treffen und die Untätigkeit zu verlassen.",
        },

        {
          number:
            "02",

          title:
            "Verfolgen",

          text:
            "Er symbolisiert den Willen, trotz Hindernissen, Widerständen oder Schwierigkeiten weiterzumachen.",
        },

        {
          number:
            "03",

          title:
            "Verteidigen",

          text:
            "Mars hilft, eigene Interessen zu schützen, Grenzen zu setzen und zu reagieren, wenn eine Situation ungerecht oder bedrohlich erscheint.",
        },

        {
          number:
            "04",

          title:
            "Erobern",

          text:
            "Er steht für das Bedürfnis, auf ein Ziel zuzugehen, eine Herausforderung anzunehmen und eigene Grenzen zu überwinden.",
        },
      ],
    },

    planets: {
      title:
        "Mars, Venus und die Sonne",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Die Sonne",

          text:
            "Sie steht für Ihre bewusste Identität, Ihren Willen und die allgemeine Richtung, die Sie Ihrem Leben geben möchten.",

          link:
            "Die Sonne entdecken",
        },

        {
          symbol:
            "♀",

          title:
            "Venus",

          text:
            "Sie beschreibt Ihre Art zu lieben, Ihre Werte, Vorlieben und das, was Sie in Beziehungen anzieht.",

          link:
            "Venus entdecken",
        },

        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "Er steht für Handlung, Verlangen, Mut und die Art, wie Sie verfolgen, was Sie möchten.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen des Mars",

      title:
        "Mars in den 12 Tierkreiszeichen",

      introduction:
        "Mars behält stets seine Funktion von Handlung, Verlangen und Durchsetzung. Das Zeichen, in dem er steht, beschreibt, wie Ihre Energie mobilisiert wird.",

      titlePrefix:
        "Mars in",
    },

    signs: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Mars im Widder handelt schnell, mutig und spontan. Diese Position fördert Initiative, Wettbewerb und das Bedürfnis, direkt auf Ziele zuzugehen.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Mars im Stier handelt mit Geduld, Ausdauer und Entschlossenheit. Die Person bewegt sich langsam, kann ihre Bemühungen jedoch sehr beständig fortsetzen, wenn sie etwas wirklich möchte.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Mars in den Zwillingen richtet seine Energie auf Ideen, Austausch und Entdeckung. Sprache, Intelligenz und Neugier werden zu bevorzugten Mitteln des Handelns und der Verteidigung.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Mars im Krebs handelt unter dem Einfluss von Gefühlen und dem Bedürfnis zu schützen. Die Person kann große Kraft mobilisieren, wenn sie Familie, Zuhause oder etwas tief Bedeutungsvolles verteidigt.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Mars im Löwen handelt mit Selbstvertrauen, Kreativität und Stolz. Diese Position sucht wertvolle Handlungen und kann viel Energie mobilisieren, wenn ein Ziel das Herz begeistert.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Mars in der Jungfrau handelt präzise, methodisch und effizient. Die Person konzentriert ihre Energie auf Details, Organisation und die konkrete Verbesserung von Situationen.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Mars in der Waage versucht, unter Berücksichtigung anderer und der Auswirkungen auf Beziehungen zu handeln. Die Person kann Fairness verteidigen, verhandeln und ihre Energie einsetzen, um Harmonie wiederherzustellen.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Mars im Skorpion handelt intensiv, strategisch und tiefgründig. Diese Position fördert Entschlossenheit, Widerstandskraft und die Fähigkeit, ein Ziel trotz Hindernissen zu verfolgen.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Mars im Schützen handelt enthusiastisch, offen und freiheitsliebend. Die Person mobilisiert ihre Energie, wenn sie erkunden, lernen, reisen oder ihre Überzeugungen verteidigen kann.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Mars im Steinbock handelt diszipliniert, ehrgeizig und kontrolliert. Diese Position fördert Planung, Ausdauer und die Fähigkeit, langfristige Ziele zu verfolgen.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Mars im Wassermann handelt unabhängig, erfinderisch und manchmal unvorhersehbar. Die Person kann ihre Energie in neue Ideen, Anliegen oder kollektive Projekte investieren.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Mars in den Fischen handelt durch Intuition, Fantasie und Sensibilität. Die Person kann ihre Energie in Kreativität, Hilfe für andere oder sinnvolle Projekte einbringen.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche Ihrer Handlung",

      title:
        "Mars in den 12 astrologischen Häusern",

      introduction:
        "Das Zeichen des Mars beschreibt Ihre Art zu handeln, während sein Haus den Lebensbereich zeigt, in dem Ihre Energie, Ihr Mut und Ihr Bedürfnis nach Durchsetzung am stärksten zum Ausdruck kommen.",

      titlePrefix:
        "Mars in",
    },

    houses: [
      {
        house:
          "Haus I",

        text:
          "Mars im ersten Haus verstärkt Durchsetzung, Initiative und das Bedürfnis, direkt zu handeln. Die Person kann eine entschlossene, kämpferische oder besonders dynamische Energie ausstrahlen.",
      },

      {
        house:
          "Haus II",

        text:
          "Mars im zweiten Haus richtet Energie auf Ressourcen, Sicherheit und materiellen Aufbau. Die Person kann sehr entschlossen sein, wenn es darum geht, Werte oder Besitz zu verteidigen.",
      },

      {
        house:
          "Haus III",

        text:
          "Mars im dritten Haus verleiht eine lebendige, direkte und energische Kommunikation. Die Person kann ihre Ideen kraftvoll verteidigen und viel Energie in Lernen und Bewegung investieren.",
      },

      {
        house:
          "Haus IV",

        text:
          "Mars im vierten Haus konzentriert Handlung auf Privatleben, Zuhause und Familie. Die Person kann ein starkes Bedürfnis verspüren, ihre Wurzeln zu schützen oder ihr persönliches Umfeld zu verändern.",
      },

      {
        house:
          "Haus V",

        text:
          "Mars im fünften Haus fördert Kreativität, Verlangen, Wettbewerb und persönlichen Ausdruck. Die Person sucht häufig aufregende Aktivitäten und lebendige Beziehungen.",
      },

      {
        house:
          "Haus VI",

        text:
          "Mars im sechsten Haus richtet Energie auf Arbeit, Verantwortung und tägliche Gewohnheiten. Die Person kann sehr produktiv sein, wenn klare Ziele vorhanden sind.",
      },

      {
        house:
          "Haus VII",

        text:
          "Mars im siebten Haus macht Beziehungen besonders dynamisch. Die Person kann durchsetzungsstarke Partner anziehen und muss lernen, Meinungsverschiedenheiten ausgeglichen zu bewältigen.",
      },

      {
        house:
          "Haus VIII",

        text:
          "Mars im achten Haus verleiht einen intensiven, strategischen und transformierenden Willen. Die Person kann Krisen mutig begegnen und tiefe Intimität suchen.",
      },

      {
        house:
          "Haus IX",

        text:
          "Mars im neunten Haus mobilisiert Energie rund um Reisen, Studium, Überzeugungen und Sinnsuche. Die Person handelt begeistert, wenn sie eine Vision verteidigt.",
      },

      {
        house:
          "Haus X",

        text:
          "Mars im zehnten Haus verstärkt Ehrgeiz, Erfolgsstreben und die Fähigkeit, im Beruf zu handeln. Die Person kann ihre Ziele mit großer Entschlossenheit verfolgen.",
      },

      {
        house:
          "Haus XI",

        text:
          "Mars im elften Haus richtet Handlung auf Projekte, Netzwerke und kollektive Anliegen. Die Person kann zu einer wichtigen treibenden Kraft innerhalb einer Gruppe werden.",
      },

      {
        house:
          "Haus XII",

        text:
          "Mars im zwölften Haus verleiht eine eher innere oder schwer direkt auszudrückende Energie. Die Person kann im Hintergrund wirksam handeln, muss jedoch lernen, Ärger zu erkennen und zu kanalisieren.",
      },
    ],

    retrograde: {
      kicker:
        "Handlung überdenken",

      title:
        "Was bedeutet rückläufiger Mars?",

      paragraphs: [
        "Von der Erde aus scheint Mars manchmal langsamer zu werden und sich vorübergehend rückwärts zu bewegen. Dies ist eine scheinbare Bewegung, die durch die relativen Positionen von Erde und Mars entsteht.",

        "In astrologischer Deutung wird rückläufiger Mars häufig mit einer Phase der Reflexion über Ziele, Ärger, Motivation und den Einsatz der eigenen Energie verbunden.",

        "Diese Phase bedeutet nicht unbedingt, dass Handeln beendet werden sollte. Sie kann vielmehr dazu einladen, langsamer zu werden, die Strategie zu überprüfen und Energie nicht in unnötigen Konflikten zu verschwenden.",
      ],

      cardSymbol:
        "♂℞",

      cardTitle:
        "Eine Einladung zur Neuorientierung",

      items: [
        "Ziele überprüfen",
        "Den Umgang mit Ärger beobachten",
        "Motivationen klären",
        "Impulsive Handlungen vermeiden",
        "Ein Projekt mit einer neuen Strategie wieder aufnehmen",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen des Mars",

      strengthsKicker:
        "Mögliche Stärken",

      strengthsTitle:
        "Eine entschlossene Energie",

      strengths: [
        "Mut",
        "Initiative",
        "Entschlossenheit",
        "Fähigkeit, Grenzen zu verteidigen",
        "Freude an Herausforderungen",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Intensität kanalisieren",

      challenges: [
        "Impulsivität",
        "Schwer kontrollierbarer Ärger",
        "Übermäßiger Wettbewerb",
        "Neigung, zu schnell zu handeln",
        "Schwierigkeit, Hindernisse anzunehmen",
      ],
    },

    aspectsSection: {
      title:
        "Die astrologischen Aspekte des Mars",

      introduction:
        "Aspekte verbinden Mars mit den anderen Planeten im Geburtshoroskop. Sie verleihen Ihrer Art zu handeln, sich durchzusetzen und Energie zu mobilisieren zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "Die Konjunktion",

        text:
          "Sie verbindet Mars mit einem anderen Planeten und verstärkt ihren gemeinsamen Ausdruck im Handeln.",
      },

      {
        symbol:
          "△",

        title:
          "Das Trigon",

        text:
          "Es kann einen natürlichen Fluss zwischen der Energie des Mars und den Eigenschaften des anderen Planeten symbolisieren.",
      },

      {
        symbol:
          "✶",

        title:
          "Das Sextil",

        text:
          "Es steht für Potenzial zu Zusammenarbeit, Initiative und konstruktiver Entwicklung.",
      },

      {
        symbol:
          "□",

        title:
          "Das Quadrat",

        text:
          "Es kann Spannung erzeugen, die zur Entwicklung von mehr Kontrolle, Geduld und Strategie anregt.",
      },

      {
        symbol:
          "☍",

        title:
          "Die Opposition",

        text:
          "Sie fordert dazu auf, ein Gleichgewicht zwischen den eigenen Wünschen und den Bedürfnissen oder Handlungen anderer zu finden.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",

      title:
        "In welchem Zeichen und Haus steht Ihr Mars?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Mars, Venus, Sonne, Mond und die Positionen Ihrer wichtigsten Planeten.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zu Mars in der Astrologie",

      items: [
        {
          question:
            "Was bedeutet Mars in der Astrologie?",

          answer:
            "Mars symbolisiert Handlung, Energie, Mut, Verlangen, Durchsetzung, Ärger und die Art, wie ein Mensch verfolgt, was er möchte.",
        },

        {
          question:
            "Was bedeutet das Zeichen des Mars?",

          answer:
            "Das Zeichen des Mars beschreibt, wie Sie handeln, sich verteidigen, Verlangen ausdrücken und Ihre Energie angesichts von Hindernissen mobilisieren.",
        },

        {
          question:
            "Steht Mars nur für Aggressivität?",

          answer:
            "Nein. Mars symbolisiert außerdem Initiative, Mut, Motivation, Entschlossenheit und die Fähigkeit, Grenzen zu setzen oder eigene Interessen zu verteidigen.",
        },

        {
          question:
            "Was bedeutet rückläufiger Mars im Geburtshoroskop?",

          answer:
            "Rückläufiger Mars bei der Geburt kann astrologisch eine eher innere, reflektierte oder persönliche Art anzeigen, Ärger, Verlangen und Durchsetzung auszudrücken.",
        },

        {
          question:
            "Verhindert rückläufiger Mars das Handeln?",

          answer:
            "Nein. Diese Phase wird eher als Einladung verstanden, Ziele, Handlungstempo und den Einsatz der eigenen Energie zu überprüfen.",
        },

        {
          question:
            "Wie finde ich mein Marszeichen?",

          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Datum, Uhrzeit und Geburtsort berechnen, um die genaue Position des Mars zu bestimmen.",
        },

        {
          question:
            "Was ist der Unterschied zwischen Mars und Venus?",

          answer:
            "Venus beschreibt Anziehung, Werte und die Art zu lieben, während Mars für Verlangen, Handlung, Initiative und die Art steht, wie Sie verfolgen, was Sie möchten.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Marte in astrologia: azione, desiderio, coraggio ed energia | Luna Astralis",

      description:
        "Scopri il significato di Marte in astrologia, la sua influenza sull’azione, il desiderio, il coraggio, l’affermazione personale e la sua espressione nei 12 segni zodiacali.",

      ogTitle:
        "Marte in astrologia: azione, desiderio, coraggio e affermazione",

      ogDescription:
        "Comprendi il ruolo di Marte nel tema natale e scopri come questo pianeta influenza la tua energia, la volontà di agire e il modo in cui ti affermi.",

      twitterTitle:
        "Marte in astrologia | Luna Astralis",

      twitterDescription:
        "Scopri come Marte influenza la tua energia, il desiderio, il coraggio e il modo in cui passi all’azione.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Marte in astrologia: azione, desiderio, coraggio e affermazione",

      description:
        "Guida completa al ruolo di Marte nel tema natale e alla sua espressione nei dodici segni e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "♂ Pianeti e tema natale",

      title:
        "Marte in astrologia",

      lead:
        "Marte rappresenta la tua energia, il tuo coraggio, il tuo desiderio, il tuo modo di passare all’azione e la tua capacità di affermarti.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      seeSigns:
        "Vedere i 12 segni",
    },

    introduction: {
      kicker:
        "Comprendere la tua forza d’azione",

      title:
        "Che cosa rappresenta Marte nel tema natale?",

      paragraphs: [
        "In astrologia, Marte simboleggia l’azione, il desiderio, il coraggio e la capacità di difendere i propri interessi. Descrive il modo in cui una persona mobilita la propria energia per perseguire gli obiettivi.",

        "La sua posizione nel tema natale può rivelare il tuo stile di affermazione, il modo in cui reagisci agli ostacoli e le situazioni che risvegliano naturalmente la tua combattività.",

        "Marte non rappresenta soltanto la rabbia o l’aggressività. Simboleggia anche la motivazione, la determinazione, l’iniziativa e la capacità di stabilire limiti chiari.",
      ],
    },

    action: {
      title:
        "Marte, azione e affermazione",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Il tuo modo di agire",

          text:
            "Marte descrive il modo in cui trasformi un’intenzione in azione e persegui concretamente i tuoi obiettivi.",
        },

        {
          symbol:
            "✦",

          title:
            "Il tuo desiderio",

          text:
            "Rivela ciò che stimola la tua energia, la tua passione e il bisogno di conquistare o ottenere qualcosa.",
        },

        {
          symbol:
            "⚔",

          title:
            "La tua affermazione",

          text:
            "Marte mostra come difendi i tuoi limiti, esprimi il disaccordo e occupi il tuo posto.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Marte",

      cards: [
        {
          number:
            "01",

          title:
            "Iniziare",

          text:
            "Marte fornisce l’impulso necessario per cominciare un’azione, prendere una decisione e uscire dall’immobilità.",
        },

        {
          number:
            "02",

          title:
            "Perseguire",

          text:
            "Simboleggia la volontà di continuare nonostante gli ostacoli, le resistenze o le difficoltà incontrate.",
        },

        {
          number:
            "03",

          title:
            "Difendere",

          text:
            "Marte permette di proteggere i propri interessi, stabilire limiti e reagire quando una situazione sembra ingiusta o minacciosa.",
        },

        {
          number:
            "04",

          title:
            "Conquistare",

          text:
            "Rappresenta il bisogno di avanzare verso un obiettivo, affrontare una sfida e superare i propri limiti.",
        },
      ],
    },

    planets: {
      title:
        "Marte, Venere e il Sole",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Il Sole",

          text:
            "Rappresenta la tua identità cosciente, la tua volontà e la direzione generale che desideri dare alla tua vita.",

          link:
            "Scoprire il Sole",
        },

        {
          symbol:
            "♀",

          title:
            "Venere",

          text:
            "Descrive il tuo modo di amare, i tuoi valori, i tuoi gusti e ciò che ti attrae nelle relazioni.",

          link:
            "Scoprire Venere",
        },

        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Rappresenta l’azione, il desiderio, il coraggio e il modo in cui persegui ciò che vuoi.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Marte",

      title:
        "Marte nei 12 segni zodiacali",

      introduction:
        "Marte conserva sempre la propria funzione di azione, desiderio e affermazione. Il segno in cui si trova descrive il modo particolare in cui la tua energia si mobilita.",

      titlePrefix:
        "Marte in",
    },

    signs: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Marte in Ariete agisce con rapidità, coraggio e spontaneità. Questa posizione favorisce l’iniziativa, la competizione e il bisogno di avanzare direttamente verso gli obiettivi.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Marte in Toro agisce con pazienza, resistenza e determinazione. La persona avanza lentamente, ma può mantenere i propri sforzi con grande costanza quando desidera veramente qualcosa.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "Marte in Gemelli dirige la propria energia verso le idee, gli scambi e la scoperta. La parola, l’intelligenza e la curiosità diventano mezzi privilegiati per agire e difendersi.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Marte in Cancro agisce sotto l’influenza delle emozioni e del bisogno di proteggere. La persona può mobilitare una grande forza quando difende la famiglia, la casa o ciò che le sta profondamente a cuore.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Marte in Leone agisce con fiducia, creatività e orgoglio. Questa posizione cerca azioni valorizzanti e può mobilitare molta energia quando un obiettivo ispira il cuore.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "Marte in Vergine agisce con precisione, metodo ed efficacia. La persona concentra la propria energia sui dettagli, sull’organizzazione e sul miglioramento concreto delle situazioni.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "Marte in Bilancia cerca di agire tenendo conto degli altri e delle conseguenze relazionali. La persona può difendere l’equità, negoziare e mobilitare la propria energia per ristabilire l’armonia.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Marte in Scorpione agisce con intensità, strategia e profondità. Questa posizione favorisce la determinazione, la resistenza e la capacità di perseguire un obiettivo nonostante gli ostacoli.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Marte in Sagittario agisce con entusiasmo, franchezza e bisogno di libertà. La persona mobilita la propria energia quando può esplorare, imparare, viaggiare o difendere le proprie convinzioni.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Marte in Capricorno agisce con disciplina, ambizione e controllo. Questa posizione favorisce la pianificazione, la perseveranza e la capacità di perseguire obiettivi a lungo termine.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "Marte in Acquario agisce in modo indipendente, inventivo e talvolta imprevedibile. La persona può investire la propria energia in idee nuove, cause o progetti collettivi.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "Marte in Pesci agisce attraverso l’intuizione, l’immaginazione e la sensibilità. La persona può mobilitare la propria energia nella creatività, nell’aiuto agli altri o nei progetti ricchi di significato.",
      },
    ],

    housesSection: {
      kicker:
        "Gli ambiti della tua azione",

      title:
        "Marte nelle 12 case astrologiche",

      introduction:
        "Il segno di Marte descrive il tuo modo di agire, mentre la sua casa indica l’ambito della vita in cui la tua energia, il tuo coraggio e il tuo bisogno di affermazione si esprimono maggiormente.",

      titlePrefix:
        "Marte in",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Marte in Casa I rafforza l’affermazione, l’iniziativa e il bisogno di agire direttamente. La persona può trasmettere un’energia determinata, combattiva o particolarmente dinamica.",
      },

      {
        house:
          "Casa II",

        text:
          "Marte in Casa II dirige l’energia verso le risorse, la sicurezza e la costruzione materiale. La persona può mostrarsi molto determinata quando deve difendere i propri valori o beni.",
      },

      {
        house:
          "Casa III",

        text:
          "Marte in Casa III dona una comunicazione vivace, diretta ed energica. La persona può difendere con forza le proprie idee e investire molta energia nell’apprendimento e negli spostamenti.",
      },

      {
        house:
          "Casa IV",

        text:
          "Marte in Casa IV concentra l’azione nella vita privata, nella casa e nella famiglia. La persona può sentire un forte bisogno di proteggere le proprie radici o trasformare il proprio ambiente personale.",
      },

      {
        house:
          "Casa V",

        text:
          "Marte in Casa V stimola la creatività, il desiderio, la competizione e l’espressione personale. La persona cerca spesso attività appassionanti e relazioni vivaci.",
      },

      {
        house:
          "Casa VI",

        text:
          "Marte in Casa VI dirige l’energia verso il lavoro, le responsabilità e le abitudini quotidiane. La persona può essere molto produttiva quando dispone di obiettivi precisi.",
      },

      {
        house:
          "Casa VII",

        text:
          "Marte in Casa VII rende le relazioni particolarmente dinamiche. La persona può attrarre partner determinati e deve imparare a gestire i disaccordi con equilibrio.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Marte in Casa VIII dona una volontà intensa, strategica e trasformativa. La persona può affrontare le crisi con coraggio e cercare un’intimità profonda.",
      },

      {
        house:
          "Casa IX",

        text:
          "Marte in Casa IX mobilita l’energia attorno ai viaggi, agli studi, alle convinzioni e alla ricerca di significato. La persona agisce con entusiasmo quando difende una visione.",
      },

      {
        house:
          "Casa X",

        text:
          "Marte in Casa X rafforza l’ambizione, il desiderio di successo e la capacità di agire nell’ambito professionale. La persona può perseguire i propri obiettivi con grande determinazione.",
      },

      {
        house:
          "Casa XI",

        text:
          "Marte in Casa XI dirige l’azione verso i progetti, le reti e le cause collettive. La persona può diventare una forza trainante importante all’interno di un gruppo.",
      },

      {
        house:
          "Casa XII",

        text:
          "Marte in Casa XII dona un’energia più interiore o difficile da esprimere direttamente. La persona può agire efficacemente dietro le quinte, ma deve imparare a riconoscere e canalizzare la rabbia.",
      },
    ],

    retrograde: {
      kicker:
        "Revisione dell’azione",

      title:
        "Che cosa significa Marte retrogrado?",

      paragraphs: [
        "Dalla Terra, Marte sembra talvolta rallentare e retrocedere temporaneamente nel cielo. Si tratta di un movimento apparente prodotto dalle posizioni relative della Terra e di Marte.",

        "Nell’interpretazione astrologica, Marte retrogrado è spesso associato a un periodo di riflessione sugli obiettivi, sulla rabbia, sulla motivazione e sul modo di utilizzare la propria energia.",

        "Questo periodo non significa necessariamente che bisogna smettere di agire. Può piuttosto invitare a rallentare, rivedere la strategia ed evitare di sprecare energia in conflitti inutili.",
      ],

      cardSymbol:
        "♂℞",

      cardTitle:
        "Un invito a riorientarsi",

      items: [
        "Rivedere i propri obiettivi",
        "Osservare il modo in cui si gestisce la rabbia",
        "Chiarire le proprie motivazioni",
        "Evitare le azioni impulsive",
        "Riprendere un progetto con una nuova strategia",
      ],
    },

    strengths: {
      title:
        "I punti di forza e le sfide di Marte",

      strengthsKicker:
        "Possibili punti di forza",

      strengthsTitle:
        "Un’energia determinata",

      strengths: [
        "Coraggio",
        "Iniziativa",
        "Determinazione",
        "Capacità di difendere i propri limiti",
        "Gusto per le sfide",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Canalizzare l’intensità",

      challenges: [
        "Impulsività",
        "Rabbia difficile da controllare",
        "Competizione eccessiva",
        "Tendenza ad agire troppo rapidamente",
        "Difficoltà ad accettare gli ostacoli",
      ],
    },

    aspectsSection: {
      title:
        "Gli aspetti astrologici di Marte",

      introduction:
        "Gli aspetti collegano Marte agli altri pianeti del tema natale. Aggiungono sfumature al tuo modo di agire, affermarti e mobilitare la tua energia.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La congiunzione",

        text:
          "Fonde Marte con un altro pianeta e intensifica la loro espressione comune nell’azione.",
      },

      {
        symbol:
          "△",

        title:
          "Il trigono",

        text:
          "Può simboleggiare un flusso naturale tra l’energia di Marte e le qualità dell’altro pianeta.",
      },

      {
        symbol:
          "✶",

        title:
          "Il sestile",

        text:
          "Rappresenta un potenziale di cooperazione, iniziativa e sviluppo costruttivo.",
      },

      {
        symbol:
          "□",

        title:
          "La quadratura",

        text:
          "Può creare una tensione che spinge a sviluppare maggiore controllo, pazienza e strategia.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposizione",

        text:
          "Invita a trovare un equilibrio tra i propri desideri e i bisogni o le azioni degli altri.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",

      title:
        "In quale segno e casa si trova il tuo Marte?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire Marte, Venere, Sole, Luna e le posizioni dei principali pianeti.",

      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande su Marte in astrologia",

      items: [
        {
          question:
            "Che cosa rappresenta Marte in astrologia?",

          answer:
            "Marte rappresenta simbolicamente l’azione, l’energia, il coraggio, il desiderio, l’affermazione, la rabbia e il modo in cui una persona persegue ciò che vuole.",
        },

        {
          question:
            "Che cosa significa il segno di Marte?",

          answer:
            "Il segno di Marte descrive il tuo modo di agire, difenderti, esprimere il desiderio e mobilitare la tua energia di fronte agli ostacoli.",
        },

        {
          question:
            "Marte rappresenta soltanto l’aggressività?",

          answer:
            "No. Marte simboleggia anche l’iniziativa, il coraggio, la motivazione, la determinazione e la capacità di stabilire limiti o difendere i propri interessi.",
        },

        {
          question:
            "Che cosa significa Marte retrogrado nel tema natale?",

          answer:
            "Nell’interpretazione astrologica, Marte retrogrado alla nascita può indicare un modo più interiore, riflessivo o personale di esprimere rabbia, desiderio e affermazione.",
        },

        {
          question:
            "Marte retrogrado impedisce di agire?",

          answer:
            "No. Questo periodo viene piuttosto interpretato come un invito a rivedere gli obiettivi, il ritmo dell’azione e il modo in cui si utilizza la propria energia.",
        },

        {
          question:
            "Come conoscere il mio segno di Marte?",

          answer:
            "Devi calcolare il tuo tema natale utilizzando data, ora e luogo di nascita per conoscere la posizione esatta di Marte.",
        },

        {
          question:
            "Qual è la differenza tra Marte e Venere?",

          answer:
            "Venere descrive l’attrazione, i valori e il modo di amare, mentre Marte rappresenta il desiderio, l’azione, l’iniziativa e il modo in cui persegui ciò che vuoi.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Marte na astrologia: ação, desejo, coragem e energia | Luna Astralis",

      description:
        "Descubra o significado de Marte na astrologia, sua influência sobre a ação, o desejo, a coragem, a afirmação pessoal e sua expressão nos 12 signos do zodíaco.",

      ogTitle:
        "Marte na astrologia: ação, desejo, coragem e afirmação",

      ogDescription:
        "Compreenda o papel de Marte no seu mapa natal e descubra como este planeta influencia sua energia, sua vontade de agir e sua maneira de se afirmar.",

      twitterTitle:
        "Marte na astrologia | Luna Astralis",

      twitterDescription:
        "Descubra como Marte influencia sua energia, seu desejo, sua coragem e sua maneira de agir.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Marte na astrologia: ação, desejo, coragem e afirmação",

      description:
        "Guia completo sobre o papel de Marte no mapa natal e sua expressão nos doze signos e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "♂ Planetas e mapa natal",

      title:
        "Marte na astrologia",

      lead:
        "Marte representa sua energia, sua coragem, seu desejo, sua maneira de agir e sua capacidade de se afirmar.",

      createChart:
        "Criar meu mapa astral grátis",

      seeSigns:
        "Ver os 12 signos",
    },

    introduction: {
      kicker:
        "Compreender sua força de ação",

      title:
        "O que Marte representa no mapa natal?",

      paragraphs: [
        "Na astrologia, Marte simboliza a ação, o desejo, a coragem e a capacidade de defender os próprios interesses. Ele descreve a maneira como uma pessoa mobiliza sua energia para alcançar objetivos.",

        "Sua posição no mapa natal pode revelar seu estilo de afirmação, sua maneira de reagir diante dos obstáculos e as situações que despertam naturalmente sua combatividade.",

        "Marte não representa apenas a raiva ou a agressividade. Ele também simboliza motivação, determinação, iniciativa e capacidade de estabelecer limites claros.",
      ],
    },

    action: {
      title:
        "Marte, ação e afirmação",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Sua maneira de agir",

          text:
            "Marte descreve como você transforma uma intenção em ação e busca concretamente seus objetivos.",
        },

        {
          symbol:
            "✦",

          title:
            "Seu desejo",

          text:
            "Ele revela o que estimula sua energia, sua paixão e sua necessidade de conquistar ou obter algo.",
        },

        {
          symbol:
            "⚔",

          title:
            "Sua afirmação",

          text:
            "Marte mostra como você defende seus limites, expressa desacordo e ocupa seu lugar.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Marte",

      cards: [
        {
          number:
            "01",

          title:
            "Iniciar",

          text:
            "Marte fornece o impulso necessário para começar uma ação, tomar uma decisão e sair da imobilidade.",
        },

        {
          number:
            "02",

          title:
            "Prosseguir",

          text:
            "Ele simboliza a vontade de continuar apesar dos obstáculos, das resistências ou das dificuldades encontradas.",
        },

        {
          number:
            "03",

          title:
            "Defender",

          text:
            "Marte permite proteger os próprios interesses, estabelecer limites e reagir quando uma situação parece injusta ou ameaçadora.",
        },

        {
          number:
            "04",

          title:
            "Conquistar",

          text:
            "Ele representa a necessidade de avançar em direção a um objetivo, enfrentar um desafio e superar os próprios limites.",
        },
      ],
    },

    planets: {
      title:
        "Marte, Vênus e o Sol",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "O Sol",

          text:
            "Ele representa sua identidade consciente, sua vontade e a direção geral que você procura dar à sua vida.",

          link:
            "Descobrir o Sol",
        },

        {
          symbol:
            "♀",

          title:
            "Vênus",

          text:
            "Ela descreve sua maneira de amar, seus valores, seus gostos e o que atrai você nos relacionamentos.",

          link:
            "Descobrir Vênus",
        },

        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Ele representa a ação, o desejo, a coragem e a maneira como você busca o que deseja.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Marte",

      title:
        "Marte nos 12 signos astrológicos",

      introduction:
        "Marte sempre conserva sua função de ação, desejo e afirmação. O signo em que ele se encontra descreve a maneira particular como sua energia se mobiliza.",

      titlePrefix:
        "Marte em",
    },

    signs: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Marte em Áries age com rapidez, coragem e espontaneidade. Esta posição favorece a iniciativa, a competição e a necessidade de avançar diretamente em direção aos objetivos.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Marte em Touro age com paciência, resistência e determinação. A pessoa avança lentamente, mas pode manter seus esforços com grande constância quando realmente deseja algo.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Marte em Gêmeos direciona sua energia para ideias, trocas e descobertas. A palavra, a inteligência e a curiosidade tornam-se meios privilegiados de agir e se defender.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Marte em Câncer age sob a influência das emoções e da necessidade de proteger. A pessoa pode mobilizar grande força ao defender sua família, seu lar ou aquilo que lhe é profundamente importante.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Marte em Leão age com confiança, criatividade e orgulho. Esta posição busca ações valorizadoras e costuma mobilizar muita energia quando um objetivo inspira o coração.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Marte em Virgem age com precisão, método e eficiência. A pessoa concentra sua energia nos detalhes, na organização e na melhoria concreta das situações.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Marte em Libra procura agir levando em consideração os outros e as consequências nos relacionamentos. A pessoa pode defender a equidade, negociar e mobilizar sua energia para restabelecer a harmonia.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Marte em Escorpião age com intensidade, estratégia e profundidade. Esta posição favorece a determinação, a resistência e a capacidade de perseguir um objetivo apesar dos obstáculos.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Marte em Sagitário age com entusiasmo, franqueza e necessidade de liberdade. A pessoa mobiliza sua energia quando pode explorar, aprender, viajar ou defender suas convicções.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Marte em Capricórnio age com disciplina, ambição e controle. Esta posição favorece o planejamento, a perseverança e a capacidade de perseguir objetivos de longo prazo.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Marte em Aquário age de maneira independente, inventiva e às vezes imprevisível. A pessoa pode investir sua energia em novas ideias, causas ou projetos coletivos.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Marte em Peixes age por meio da intuição, da imaginação e da sensibilidade. A pessoa pode mobilizar sua energia na criatividade, na ajuda aos outros ou em projetos significativos.",
      },
    ],

    housesSection: {
      kicker:
        "As áreas da sua ação",

      title:
        "Marte nas 12 casas astrológicas",

      introduction:
        "O signo de Marte descreve sua maneira de agir, enquanto sua casa indica a área da vida em que sua energia, sua coragem e sua necessidade de afirmação se expressam com maior intensidade.",

      titlePrefix:
        "Marte em",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Marte na Casa I reforça a afirmação, a iniciativa e a necessidade de agir diretamente. A pessoa pode transmitir uma energia determinada, combativa ou especialmente dinâmica.",
      },

      {
        house:
          "Casa II",

        text:
          "Marte na Casa II direciona a energia para recursos, segurança e construção material. A pessoa pode se mostrar muito determinada ao defender seus valores ou suas posses.",
      },

      {
        house:
          "Casa III",

        text:
          "Marte na Casa III proporciona uma comunicação viva, direta e enérgica. A pessoa pode defender suas ideias com força e investir muita energia na aprendizagem e nos deslocamentos.",
      },

      {
        house:
          "Casa IV",

        text:
          "Marte na Casa IV concentra a ação na vida privada, no lar e na família. A pessoa pode sentir uma forte necessidade de proteger suas raízes ou transformar seu ambiente pessoal.",
      },

      {
        house:
          "Casa V",

        text:
          "Marte na Casa V estimula a criatividade, o desejo, a competição e a expressão pessoal. A pessoa costuma procurar atividades apaixonantes e relacionamentos intensos.",
      },

      {
        house:
          "Casa VI",

        text:
          "Marte na Casa VI direciona a energia para o trabalho, as responsabilidades e os hábitos cotidianos. A pessoa pode ser muito produtiva quando possui objetivos precisos.",
      },

      {
        house:
          "Casa VII",

        text:
          "Marte na Casa VII torna os relacionamentos especialmente dinâmicos. A pessoa pode atrair parceiros afirmativos e deve aprender a administrar os desacordos com equilíbrio.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Marte na Casa VIII proporciona uma vontade intensa, estratégica e transformadora. A pessoa pode enfrentar crises com coragem e procurar uma intimidade profunda.",
      },

      {
        house:
          "Casa IX",

        text:
          "Marte na Casa IX mobiliza a energia em torno de viagens, estudos, convicções e busca de sentido. A pessoa age com entusiasmo quando defende uma visão.",
      },

      {
        house:
          "Casa X",

        text:
          "Marte na Casa X reforça a ambição, o desejo de sucesso e a capacidade de agir na esfera profissional. A pessoa pode perseguir seus objetivos com grande determinação.",
      },

      {
        house:
          "Casa XI",

        text:
          "Marte na Casa XI direciona a ação para projetos, redes e causas coletivas. A pessoa pode se tornar uma importante força motriz dentro de um grupo.",
      },

      {
        house:
          "Casa XII",

        text:
          "Marte na Casa XII proporciona uma energia mais interior ou difícil de expressar diretamente. A pessoa pode agir com eficiência nos bastidores, mas deve aprender a reconhecer e canalizar a raiva.",
      },
    ],

    retrograde: {
      kicker:
        "Revisão da ação",

      title:
        "O que significa Marte retrógrado?",

      paragraphs: [
        "A partir da Terra, Marte às vezes parece desacelerar e se mover temporariamente para trás no céu. Trata-se de um movimento aparente produzido pelas posições relativas da Terra e de Marte.",

        "Na interpretação astrológica, Marte retrógrado costuma ser associado a um período de reflexão sobre objetivos, raiva, motivação e maneira de utilizar a própria energia.",

        "Esse período não significa necessariamente que seja preciso parar de agir. Pode, em vez disso, convidar a desacelerar, rever a estratégia e evitar desperdiçar energia em conflitos desnecessários.",
      ],

      cardSymbol:
        "♂℞",

      cardTitle:
        "Um convite para redirecionar",

      items: [
        "Rever os objetivos",
        "Observar a maneira de administrar a raiva",
        "Esclarecer as motivações",
        "Evitar ações impulsivas",
        "Retomar um projeto com uma nova estratégia",
      ],
    },

    strengths: {
      title:
        "As forças e os desafios de Marte",

      strengthsKicker:
        "Possíveis forças",

      strengthsTitle:
        "Uma energia determinada",

      strengths: [
        "Coragem",
        "Iniciativa",
        "Determinação",
        "Capacidade de defender os próprios limites",
        "Gosto pelos desafios",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "Canalizar a intensidade",

      challenges: [
        "Impulsividade",
        "Raiva difícil de controlar",
        "Competição excessiva",
        "Tendência a agir rápido demais",
        "Dificuldade para aceitar obstáculos",
      ],
    },

    aspectsSection: {
      title:
        "Os aspectos astrológicos de Marte",

      introduction:
        "Os aspectos ligam Marte aos outros planetas do mapa natal. Eles acrescentam nuances à sua maneira de agir, se afirmar e mobilizar sua energia.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "A conjunção",

        text:
          "Ela funde Marte com outro planeta e intensifica sua expressão conjunta na ação.",
      },

      {
        symbol:
          "△",

        title:
          "O trígono",

        text:
          "Ele pode simbolizar uma circulação natural entre a energia de Marte e as qualidades do outro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "O sextil",

        text:
          "Ele representa um potencial de cooperação, iniciativa e desenvolvimento construtivo.",
      },

      {
        symbol:
          "□",

        title:
          "A quadratura",

        text:
          "Ela pode criar uma tensão que estimula o desenvolvimento de maior controle, paciência e estratégia.",
      },

      {
        symbol:
          "☍",

        title:
          "A oposição",

        text:
          "Ela convida a encontrar equilíbrio entre os próprios desejos e as necessidades ou ações dos outros.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",

      title:
        "Em qual signo e casa está seu Marte?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir Marte, Vênus, Sol, Lua e as posições dos seus principais planetas.",

      button:
        "Descobrir meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Marte na astrologia",

      items: [
        {
          question:
            "O que Marte representa na astrologia?",

          answer:
            "Marte representa simbolicamente ação, energia, coragem, desejo, afirmação, raiva e a maneira como uma pessoa busca aquilo que deseja.",
        },

        {
          question:
            "O que significa o signo de Marte?",

          answer:
            "O signo de Marte descreve sua maneira de agir, se defender, expressar desejo e mobilizar sua energia diante dos obstáculos.",
        },

        {
          question:
            "Marte representa apenas agressividade?",

          answer:
            "Não. Marte também simboliza iniciativa, coragem, motivação, determinação e capacidade de estabelecer limites ou defender os próprios interesses.",
        },

        {
          question:
            "O que significa Marte retrógrado no mapa natal?",

          answer:
            "Na interpretação astrológica, Marte retrógrado no nascimento pode indicar uma maneira mais interior, reflexiva ou pessoal de expressar raiva, desejo e afirmação.",
        },

        {
          question:
            "Marte retrógrado impede a ação?",

          answer:
            "Não. Esse período costuma ser interpretado como um convite para rever objetivos, ritmo de ação e maneira de utilizar a própria energia.",
        },

        {
          question:
            "Como descobrir meu signo de Marte?",

          answer:
            "Você deve calcular seu mapa natal usando data, hora e local de nascimento para conhecer a posição exata de Marte.",
        },

        {
          question:
            "Qual é a diferença entre Marte e Vênus?",

          answer:
            "Vênus descreve atração, valores e maneira de amar, enquanto Marte representa desejo, ação, iniciativa e a maneira como você busca o que deseja.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
