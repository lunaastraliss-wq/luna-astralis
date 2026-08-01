// i18n/pages/astrologie/saturne.ts

import type {
  Locale,
} from "@/i18n/config";

export type SaturnCard = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
};

export type SaturnFunction = {
  number: string;
  title: string;
  text: string;
};

export type SaturnSign = {
  sign: string;
  symbol: string;
  text: string;
};

export type SaturnHouse = {
  house: string;
  text: string;
};

export type SaturnAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type SaturnFaqItem = {
  question: string;
  answer: string;
};

export type SaturnPageText = {
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

  structure: {
    title: string;
    cards: SaturnCard[];
  };

  functions: {
    title: string;
    cards: SaturnFunction[];
  };

  planets: {
    title: string;
    cards: SaturnCard[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  signs: SaturnSign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  houses: SaturnHouse[];

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

  aspects: SaturnAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: SaturnFaqItem[];
  };

  disclaimer: string;
};

export const SATURNE_TRANSLATIONS:
  Record<
    Locale,
    SaturnPageText
  > = {
  fr: {
    metadata: {
      title:
        "Saturne en astrologie : limites, maturité et responsabilités | Luna Astralis",

      description:
        "Découvrez la signification de Saturne en astrologie, son influence sur les responsabilités, les limites, la discipline et son expression dans les 12 signes du zodiaque.",

      ogTitle:
        "Saturne en astrologie : structure, maturité et responsabilités",

      ogDescription:
        "Comprenez le rôle de Saturne dans votre thème natal et découvrez comment cette planète symbolise les limites, la discipline, les responsabilités et la construction durable.",

      twitterTitle:
        "Saturne en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Saturne symbolise la maturité, les responsabilités, les limites et la persévérance.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Saturne en astrologie : structure, limites et maturité",

      description:
        "Guide complet consacré au rôle de Saturne dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "♄ Planètes et thème natal",

      title:
        "Saturne en astrologie",

      lead:
        "Saturne représente vos responsabilités, vos limites, votre discipline et la manière dont vous construisez une force durable avec le temps.",

      createChart:
        "Créer ma carte du ciel gratuite",

      seeSigns:
        "Voir les 12 signes",
    },

    introduction: {
      kicker:
        "Comprendre votre maturation",

      title:
        "Que représente Saturne dans un thème astral ?",

      paragraphs: [
        "En astrologie, Saturne symbolise la structure, les limites, le temps, les responsabilités et la maturation. Il décrit les domaines dans lesquels une personne doit souvent développer davantage de patience, de discipline et de maîtrise.",

        "Sa position dans votre carte du ciel peut révéler les expériences qui demandent un effort soutenu, mais aussi les domaines dans lesquels vous pouvez construire une compétence particulièrement solide.",

        "Saturne n’est pas uniquement associé aux difficultés. Il représente également la persévérance, l’engagement, la fiabilité et la capacité à transformer l’expérience en sagesse concrète.",
      ],
    },

    structure: {
      title:
        "Saturne, la structure et les responsabilités",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Vos responsabilités",

          text:
            "Saturne décrit les domaines dans lesquels vous êtes invité à devenir plus autonome, fiable et conscient de vos engagements.",
        },

        {
          symbol:
            "⏳",

          title:
            "Votre rapport au temps",

          text:
            "Il rappelle que certaines constructions exigent de la patience, de la répétition et une progression régulière.",
        },

        {
          symbol:
            "✦",

          title:
            "Votre maturité",

          text:
            "Saturne montre comment l’expérience, les limites et les choix responsables peuvent renforcer votre stabilité intérieure.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions de Saturne",

      cards: [
        {
          number:
            "01",

          title:
            "Structurer",

          text:
            "Saturne donne une forme concrète aux idées, aux projets et aux ambitions en imposant une organisation réaliste.",
        },

        {
          number:
            "02",

          title:
            "Limiter",

          text:
            "Il représente les frontières, les règles et les contraintes nécessaires pour préserver l’équilibre et la cohérence.",
        },

        {
          number:
            "03",

          title:
            "Consolider",

          text:
            "Saturne favorise la construction de bases durables grâce à la patience, à l’effort et à la répétition.",
        },

        {
          number:
            "04",

          title:
            "Maîtriser",

          text:
            "Il symbolise la compétence qui se développe progressivement lorsque l’on accepte d’apprendre de l’expérience.",
        },
      ],
    },

    planets: {
      title:
        "Saturne, Jupiter et le Soleil",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Le Soleil",

          text:
            "Il représente votre identité consciente, votre volonté et la direction intérieure que vous cherchez à exprimer.",

          link:
            "Découvrir le Soleil",
        },

        {
          symbol:
            "♃",

          title:
            "Jupiter",

          text:
            "Il symbolise l’expansion, la confiance, les possibilités et la recherche d’un sens plus vaste.",

          link:
            "Découvrir Jupiter",
        },

        {
          symbol:
            "♄",

          title:
            "Saturne",

          text:
            "Il représente les limites, la discipline, les responsabilités et la construction dans le temps.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions de Saturne",

      title:
        "Saturne dans les 12 signes astrologiques",

      introduction:
        "Saturne conserve toujours sa fonction de structure, de responsabilité et de maturation. Le signe dans lequel il se trouve décrit la manière particulière dont ces apprentissages prennent forme.",

      titlePrefix:
        "Saturne en",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Saturne en Bélier invite à construire une affirmation personnelle plus consciente. La personne apprend progressivement à agir avec courage sans confondre spontanéité, précipitation et véritable autonomie.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Saturne en Taureau met l’accent sur la sécurité, les ressources et la stabilité. La personne développe sa solidité par la patience, la constance et une relation plus réaliste à ses besoins matériels.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Saturne en Gémeaux demande de structurer la pensée, la parole et les apprentissages. La personne peut apprendre à communiquer avec davantage de précision, de profondeur et de responsabilité.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Saturne en Cancer invite à construire une sécurité émotionnelle intérieure. La personne peut ressentir de fortes responsabilités familiales et apprendre progressivement à exprimer ses besoins avec plus de confiance.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Saturne en Lion demande de développer une confiance créative solide. La personne apprend à exprimer ses talents sans dépendre entièrement de la reconnaissance ou de l’approbation extérieure.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Saturne en Vierge renforce le sens du devoir, de la méthode et de la précision. La personne apprend à rechercher l’efficacité sans tomber dans le perfectionnisme ou l’autocritique excessive.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Saturne en Balance met l’accent sur les engagements, l’équilibre et la responsabilité relationnelle. La personne apprend à construire des liens durables fondés sur la réciprocité et des limites claires.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Saturne en Scorpion invite à affronter les peurs, les attachements et les transformations profondes. La personne peut développer une grande force intérieure en apprenant à faire confiance sans perdre son discernement.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Saturne en Sagittaire demande de structurer les croyances, les connaissances et la recherche de sens. La personne apprend à construire une vision cohérente à partir de l’expérience et de la réflexion.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Saturne en Capricorne favorise la discipline, l’ambition et la construction à long terme. La personne peut développer une grande capacité de responsabilité, à condition de ne pas porter seule toutes les obligations.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Saturne en Verseau invite à donner une forme concrète aux idées nouvelles. La personne apprend à contribuer au collectif, à organiser des projets et à concilier indépendance et responsabilité sociale.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Saturne en Poissons demande de créer des limites dans les domaines émotionnels, intuitifs et imaginaires. La personne apprend à transformer sa sensibilité en force structurée et utilisable.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines de votre construction",

      title:
        "Saturne dans les 12 maisons astrologiques",

      introduction:
        "Le signe de Saturne décrit votre manière de développer la discipline, tandis que sa maison indique le domaine de vie dans lequel les responsabilités, les limites et la maturation prennent une importance particulière.",

      titlePrefix:
        "Saturne en",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Saturne en Maison I peut donner une attitude sérieuse, réservée ou responsable. La personne construit progressivement sa confiance, son identité et sa capacité à prendre sa place avec solidité.",
      },

      {
        house:
          "Maison II",

        text:
          "Saturne en Maison II met l’accent sur les ressources, les valeurs et la sécurité matérielle. La personne apprend à bâtir une stabilité durable par la patience, la prévoyance et l’autonomie.",
      },

      {
        house:
          "Maison III",

        text:
          "Saturne en Maison III invite à structurer la pensée, la communication et les apprentissages. La personne peut développer une parole réfléchie, précise et profondément responsable.",
      },

      {
        house:
          "Maison IV",

        text:
          "Saturne en Maison IV souligne les responsabilités liées au foyer, à la famille et aux racines. La personne apprend à créer une sécurité intérieure indépendante du passé.",
      },

      {
        house:
          "Maison V",

        text:
          "Saturne en Maison V demande de construire la confiance créative, la spontanéité et le plaisir. La personne peut prendre ses talents très au sérieux et apprendre à s’exprimer sans craindre le jugement.",
      },

      {
        house:
          "Maison VI",

        text:
          "Saturne en Maison VI renforce le sens du travail, des responsabilités et de l’organisation quotidienne. La personne développe sa maîtrise grâce à la discipline et à des habitudes durables.",
      },

      {
        house:
          "Maison VII",

        text:
          "Saturne en Maison VII met l’accent sur les engagements, les contrats et la maturité relationnelle. La personne recherche généralement des liens solides, responsables et construits dans le temps.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Saturne en Maison VIII invite à approfondir le rapport à l’intimité, à la confiance et aux ressources partagées. La personne apprend à traverser les transformations sans perdre sa stabilité intérieure.",
      },

      {
        house:
          "Maison IX",

        text:
          "Saturne en Maison IX demande de structurer les croyances, les études et la vision du monde. La personne développe une philosophie fondée sur l’expérience, la rigueur et la réflexion.",
      },

      {
        house:
          "Maison X",

        text:
          "Saturne en Maison X renforce l’ambition, la responsabilité et la construction professionnelle. La personne peut avancer lentement, mais elle recherche une réussite solide, crédible et durable.",
      },

      {
        house:
          "Maison XI",

        text:
          "Saturne en Maison XI met l’accent sur les projets collectifs, les réseaux et les responsabilités sociales. La personne apprend à construire des alliances fiables autour d’objectifs communs.",
      },

      {
        house:
          "Maison XII",

        text:
          "Saturne en Maison XII invite à reconnaître les peurs intérieures, les mécanismes inconscients et les charges invisibles. La solitude constructive et l’introspection peuvent favoriser une profonde maturation.",
      },
    ],

    retrograde: {
      kicker:
        "Révision des structures",

      title:
        "Que signifie Saturne rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Saturne semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un mouvement apparent lié aux positions relatives de la Terre et de Saturne.",

        "Dans l’interprétation astrologique, Saturne rétrograde est souvent associé à une relation plus intérieure aux responsabilités, aux règles, à l’autorité et au sentiment de légitimité.",

        "Cette période peut inviter à revoir certaines structures, à clarifier ses engagements et à distinguer les responsabilités réellement utiles des charges devenues trop lourdes.",
      ],

      cardSymbol:
        "♄℞",

      cardTitle:
        "Une invitation à restructurer",

      items: [
        "Revoir ses responsabilités",
        "Clarifier ses limites",
        "Réorganiser ses priorités",
        "Examiner son rapport à l’autorité",
        "Consolider ce qui doit durer",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis de Saturne",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Une solidité construite dans le temps",

      strengths: [
        "Discipline",
        "Fiabilité",
        "Persévérance",
        "Sens des responsabilités",
        "Capacité à construire durablement",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Assouplir les structures trop rigides",

      challenges: [
        "Peur de l’échec",
        "Autocritique excessive",
        "Rigidité",
        "Difficulté à déléguer",
        "Tendance à porter trop de responsabilités",
      ],
    },

    aspectsSection: {
      title:
        "Les aspects astrologiques de Saturne",

      introduction:
        "Les aspects relient Saturne aux autres planètes du thème natal. Ils apportent des nuances à votre rapport aux responsabilités, aux limites, à la discipline et à la construction personnelle.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Saturne avec une autre planète et donne davantage de sérieux, de structure ou d’exigence à leur expression commune.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une capacité naturelle à organiser, stabiliser et utiliser les qualités de l’autre planète.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel de construction, de coopération et de progression réaliste.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut créer une tension entre le désir d’expression et les limites, invitant à développer patience et maîtrise.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à équilibrer les responsabilités, les limites personnelles et les attentes provenant de l’extérieur.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Saturne ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Saturne, votre Jupiter, votre Mars, votre Vénus et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Saturne en astrologie",

      items: [
        {
          question:
            "Que représente Saturne en astrologie ?",

          answer:
            "Saturne représente symboliquement les limites, les responsabilités, la discipline, la patience, la maturité et la capacité à construire quelque chose de solide dans le temps.",
        },

        {
          question:
            "Pourquoi Saturne est-il parfois considéré comme difficile ?",

          answer:
            "Saturne est associé aux délais, aux efforts et aux réalités que l’on ne peut pas éviter. Son rôle symbolique n’est toutefois pas seulement restrictif : il représente aussi la maîtrise, l’endurance et la stabilité.",
        },

        {
          question:
            "Que signifie le signe de Saturne ?",

          answer:
            "Le signe de Saturne décrit la manière dont vous apprenez à développer la discipline, la responsabilité et la maturité dans votre vie.",
        },

        {
          question:
            "Que signifie Saturne rétrograde dans un thème natal ?",

          answer:
            "Dans l’interprétation astrologique, Saturne rétrograde à la naissance peut symboliser une relation plus intérieure aux règles, aux responsabilités, à l’autorité et au sentiment de légitimité.",
        },

        {
          question:
            "Saturne rétrograde est-il négatif ?",

          answer:
            "Non. Cette période est plutôt interprétée comme une invitation à revoir ses structures, ses responsabilités, ses limites et la manière dont on exerce son autorité personnelle.",
        },

        {
          question:
            "Comment connaître mon signe de Saturne ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Saturne.",
        },

        {
          question:
            "Quelle différence entre Jupiter et Saturne ?",

          answer:
            "Jupiter symbolise l’expansion, la confiance et les possibilités, tandis que Saturne représente la structure, les limites, la responsabilité et la construction durable.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Saturn in Astrology: Limits, Maturity and Responsibility | Luna Astralis",

      description:
        "Discover the meaning of Saturn in astrology, its influence on responsibility, limits, discipline and its expression through the 12 zodiac signs.",

      ogTitle:
        "Saturn in Astrology: Structure, Maturity and Responsibility",

      ogDescription:
        "Understand Saturn’s role in your birth chart and discover how this planet symbolizes limits, discipline, responsibility and lasting construction.",

      twitterTitle:
        "Saturn in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Saturn symbolizes maturity, responsibility, limits and perseverance.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Saturn in Astrology: Structure, Limits and Maturity",

      description:
        "A complete guide to Saturn’s role in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "♄ Planets and birth chart",

      title:
        "Saturn in Astrology",

      lead:
        "Saturn represents your responsibilities, limits, discipline and the way you build lasting strength over time.",

      createChart:
        "Create my free birth chart",

      seeSigns:
        "See the 12 signs",
    },

    introduction: {
      kicker:
        "Understand your maturation",

      title:
        "What does Saturn represent in a birth chart?",

      paragraphs: [
        "In astrology, Saturn symbolizes structure, limits, time, responsibility and maturation. It describes the areas in which a person often needs to develop greater patience, discipline and mastery.",

        "Its position in your birth chart may reveal experiences requiring sustained effort, but also the areas in which you can build especially solid competence.",

        "Saturn is not associated only with difficulty. It also represents perseverance, commitment, reliability and the ability to transform experience into practical wisdom.",
      ],
    },

    structure: {
      title:
        "Saturn, structure and responsibility",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Your responsibilities",

          text:
            "Saturn describes the areas in which you are invited to become more autonomous, reliable and conscious of your commitments.",
        },

        {
          symbol:
            "⏳",

          title:
            "Your relationship with time",

          text:
            "It reminds you that some constructions require patience, repetition and steady progress.",
        },

        {
          symbol:
            "✦",

          title:
            "Your maturity",

          text:
            "Saturn shows how experience, limits and responsible choices can strengthen your inner stability.",
        },
      ],
    },

    functions: {
      title:
        "Saturn’s main functions",

      cards: [
        {
          number:
            "01",

          title:
            "Structure",

          text:
            "Saturn gives practical form to ideas, projects and ambitions by requiring realistic organization.",
        },

        {
          number:
            "02",

          title:
            "Limit",

          text:
            "It represents the boundaries, rules and constraints needed to preserve balance and coherence.",
        },

        {
          number:
            "03",

          title:
            "Consolidate",

          text:
            "Saturn supports the construction of lasting foundations through patience, effort and repetition.",
        },

        {
          number:
            "04",

          title:
            "Master",

          text:
            "It symbolizes the competence that develops gradually when experience is accepted as a teacher.",
        },
      ],
    },

    planets: {
      title:
        "Saturn, Jupiter and the Sun",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "The Sun",

          text:
            "It represents your conscious identity, will and the inner direction you seek to express.",

          link:
            "Discover the Sun",
        },

        {
          symbol:
            "♃",

          title:
            "Jupiter",

          text:
            "It symbolizes expansion, confidence, possibility and the search for broader meaning.",

          link:
            "Discover Jupiter",
        },

        {
          symbol:
            "♄",

          title:
            "Saturn",

          text:
            "It represents limits, discipline, responsibility and construction over time.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Saturn",

      title:
        "Saturn in the 12 zodiac signs",

      introduction:
        "Saturn always retains its function of structure, responsibility and maturation. The sign it occupies describes the particular way these lessons take form.",

      titlePrefix:
        "Saturn in",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Saturn in Aries invites the development of more conscious self-assertion. The person gradually learns to act courageously without confusing spontaneity, haste and genuine autonomy.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Saturn in Taurus emphasizes security, resources and stability. The person develops strength through patience, consistency and a more realistic relationship with material needs.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Saturn in Gemini asks for structured thinking, communication and learning. The person may learn to communicate with greater precision, depth and responsibility.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Saturn in Cancer invites the construction of inner emotional security. The person may experience strong family responsibilities and gradually learn to express needs with greater confidence.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Saturn in Leo asks for solid creative confidence. The person learns to express talents without depending entirely on external recognition or approval.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Saturn in Virgo strengthens duty, method and precision. The person learns to seek efficiency without falling into perfectionism or excessive self-criticism.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Saturn in Libra emphasizes commitment, balance and relational responsibility. The person learns to build lasting bonds based on reciprocity and clear boundaries.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Saturn in Scorpio invites confrontation with fears, attachments and profound transformation. The person may develop great inner strength by learning to trust without losing discernment.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Saturn in Sagittarius asks for structured beliefs, knowledge and the search for meaning. The person learns to build a coherent vision from experience and reflection.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Saturn in Capricorn supports discipline, ambition and long-term construction. The person may develop a great capacity for responsibility, provided they do not carry every obligation alone.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Saturn in Aquarius invites new ideas to be given practical form. The person learns to contribute to the collective, organize projects and balance independence with social responsibility.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Saturn in Pisces asks for boundaries in emotional, intuitive and imaginative areas. The person learns to transform sensitivity into a structured and usable strength.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of your construction",

      title:
        "Saturn in the 12 astrological houses",

      introduction:
        "Saturn’s sign describes how you develop discipline, while its house indicates the area of life in which responsibility, limits and maturation become especially important.",

      titlePrefix:
        "Saturn in",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Saturn in House I may give a serious, reserved or responsible attitude. The person gradually builds confidence, identity and the ability to take their place with solidity.",
      },

      {
        house:
          "House II",

        text:
          "Saturn in House II emphasizes resources, values and material security. The person learns to build lasting stability through patience, foresight and autonomy.",
      },

      {
        house:
          "House III",

        text:
          "Saturn in House III invites structured thinking, communication and learning. The person may develop thoughtful, precise and deeply responsible speech.",
      },

      {
        house:
          "House IV",

        text:
          "Saturn in House IV highlights responsibilities connected with home, family and roots. The person learns to create inner security independent of the past.",
      },

      {
        house:
          "House V",

        text:
          "Saturn in House V asks for creative confidence, spontaneity and pleasure to be built gradually. The person may take talents very seriously and learn to express themselves without fearing judgment.",
      },

      {
        house:
          "House VI",

        text:
          "Saturn in House VI strengthens work ethic, responsibility and daily organization. The person develops mastery through discipline and lasting habits.",
      },

      {
        house:
          "House VII",

        text:
          "Saturn in House VII emphasizes commitment, contracts and relational maturity. The person generally seeks solid, responsible bonds built over time.",
      },

      {
        house:
          "House VIII",

        text:
          "Saturn in House VIII invites a deeper relationship with intimacy, trust and shared resources. The person learns to move through transformation without losing inner stability.",
      },

      {
        house:
          "House IX",

        text:
          "Saturn in House IX asks for structured beliefs, studies and worldview. The person develops a philosophy based on experience, rigor and reflection.",
      },

      {
        house:
          "House X",

        text:
          "Saturn in House X strengthens ambition, responsibility and professional construction. The person may progress slowly, but seeks success that is solid, credible and lasting.",
      },

      {
        house:
          "House XI",

        text:
          "Saturn in House XI emphasizes collective projects, networks and social responsibilities. The person learns to build reliable alliances around shared goals.",
      },

      {
        house:
          "House XII",

        text:
          "Saturn in House XII invites recognition of inner fears, unconscious mechanisms and invisible burdens. Constructive solitude and introspection may support profound maturation.",
      },
    ],

    retrograde: {
      kicker:
        "Reviewing structures",

      title:
        "What does retrograde Saturn mean?",

      paragraphs: [
        "From Earth, Saturn sometimes appears to slow down and temporarily move backward in the sky. This is an apparent movement caused by the relative positions of Earth and Saturn.",

        "In astrological interpretation, retrograde Saturn is often associated with a more inward relationship with responsibility, rules, authority and the sense of legitimacy.",

        "This period may invite you to review certain structures, clarify commitments and distinguish genuinely useful responsibilities from burdens that have become too heavy.",
      ],

      cardSymbol:
        "♄℞",

      cardTitle:
        "An invitation to restructure",

      items: [
        "Review responsibilities",
        "Clarify boundaries",
        "Reorganize priorities",
        "Examine your relationship with authority",
        "Consolidate what must last",
      ],
    },

    strengths: {
      title:
        "Saturn’s strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "Strength built over time",

      strengths: [
        "Discipline",
        "Reliability",
        "Perseverance",
        "Sense of responsibility",
        "Ability to build sustainably",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Soften overly rigid structures",

      challenges: [
        "Fear of failure",
        "Excessive self-criticism",
        "Rigidity",
        "Difficulty delegating",
        "Tendency to carry too much responsibility",
      ],
    },

    aspectsSection: {
      title:
        "Saturn’s astrological aspects",

      introduction:
        "Aspects connect Saturn with the other planets in the birth chart. They add nuance to your relationship with responsibility, limits, discipline and personal construction.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Saturn with another planet and gives greater seriousness, structure or demand to their shared expression.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a natural ability to organize, stabilize and use the qualities of the other planet.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for construction, cooperation and realistic progress.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may create tension between the desire for expression and existing limits, encouraging patience and mastery.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It invites a balance between responsibility, personal limits and expectations coming from outside.",
      },
    ],

    cta: {
      kicker:
        "Discover your position",

      title:
        "Which sign and house contain your Saturn?",

      text:
        "Generate your free birth chart to discover Saturn, Jupiter, Mars, Venus and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Saturn in astrology",

      items: [
        {
          question:
            "What does Saturn represent in astrology?",

          answer:
            "Saturn symbolically represents limits, responsibility, discipline, patience, maturity and the ability to build something solid over time.",
        },

        {
          question:
            "Why is Saturn sometimes considered difficult?",

          answer:
            "Saturn is associated with delays, effort and realities that cannot be avoided. Its symbolic role is not only restrictive, however: it also represents mastery, endurance and stability.",
        },

        {
          question:
            "What does Saturn’s sign mean?",

          answer:
            "Saturn’s sign describes the way you learn to develop discipline, responsibility and maturity in your life.",
        },

        {
          question:
            "What does retrograde Saturn mean in a birth chart?",

          answer:
            "In astrological interpretation, natal retrograde Saturn may symbolize a more inward relationship with rules, responsibility, authority and the sense of legitimacy.",
        },

        {
          question:
            "Is retrograde Saturn negative?",

          answer:
            "No. This period is generally interpreted as an invitation to review structures, responsibilities, limits and the way personal authority is exercised.",
        },

        {
          question:
            "How can I find my Saturn sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine Saturn’s exact position.",
        },

        {
          question:
            "What is the difference between Jupiter and Saturn?",

          answer:
            "Jupiter symbolizes expansion, confidence and possibility, while Saturn represents structure, limits, responsibility and lasting construction.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Saturno en astrología: límites, madurez y responsabilidades | Luna Astralis",

      description:
        "Descubre el significado de Saturno en astrología, su influencia sobre las responsabilidades, los límites, la disciplina y su expresión en los 12 signos del zodiaco.",

      ogTitle:
        "Saturno en astrología: estructura, madurez y responsabilidades",

      ogDescription:
        "Comprende el papel de Saturno en tu carta natal y descubre cómo este planeta simboliza los límites, la disciplina, las responsabilidades y la construcción duradera.",

      twitterTitle:
        "Saturno en astrología | Luna Astralis",

      twitterDescription:
        "Descubre cómo Saturno simboliza la madurez, las responsabilidades, los límites y la perseverancia.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Saturno en astrología: estructura, límites y madurez",

      description:
        "Guía completa sobre el papel de Saturno en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "♄ Planetas y carta natal",

      title:
        "Saturno en astrología",

      lead:
        "Saturno representa tus responsabilidades, tus límites, tu disciplina y la manera en que construyes una fuerza duradera con el tiempo.",

      createChart:
        "Crear mi carta natal gratis",

      seeSigns:
        "Ver los 12 signos",
    },

    introduction: {
      kicker:
        "Comprender tu maduración",

      title:
        "¿Qué representa Saturno en una carta natal?",

      paragraphs: [
        "En astrología, Saturno simboliza la estructura, los límites, el tiempo, las responsabilidades y la maduración. Describe los ámbitos en los que una persona necesita desarrollar mayor paciencia, disciplina y dominio.",

        "Su posición en tu carta natal puede revelar las experiencias que requieren un esfuerzo sostenido, pero también los ámbitos en los que puedes construir una competencia especialmente sólida.",

        "Saturno no se relaciona únicamente con las dificultades. También representa la perseverancia, el compromiso, la fiabilidad y la capacidad de transformar la experiencia en sabiduría práctica.",
      ],
    },

    structure: {
      title:
        "Saturno, la estructura y las responsabilidades",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Tus responsabilidades",

          text:
            "Saturno describe los ámbitos en los que estás invitado a ser más autónomo, fiable y consciente de tus compromisos.",
        },

        {
          symbol:
            "⏳",

          title:
            "Tu relación con el tiempo",

          text:
            "Recuerda que algunas construcciones requieren paciencia, repetición y un progreso constante.",
        },

        {
          symbol:
            "✦",

          title:
            "Tu madurez",

          text:
            "Saturno muestra cómo la experiencia, los límites y las decisiones responsables pueden fortalecer tu estabilidad interior.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Saturno",

      cards: [
        {
          number:
            "01",

          title:
            "Estructurar",

          text:
            "Saturno da una forma concreta a las ideas, los proyectos y las ambiciones mediante una organización realista.",
        },

        {
          number:
            "02",

          title:
            "Limitar",

          text:
            "Representa las fronteras, las reglas y las restricciones necesarias para preservar el equilibrio y la coherencia.",
        },

        {
          number:
            "03",

          title:
            "Consolidar",

          text:
            "Saturno favorece la construcción de bases duraderas mediante la paciencia, el esfuerzo y la repetición.",
        },

        {
          number:
            "04",

          title:
            "Dominar",

          text:
            "Simboliza la competencia que se desarrolla progresivamente cuando se acepta aprender de la experiencia.",
        },
      ],
    },

    planets: {
      title:
        "Saturno, Júpiter y el Sol",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "El Sol",

          text:
            "Representa tu identidad consciente, tu voluntad y la dirección interior que buscas expresar.",

          link:
            "Descubrir el Sol",
        },

        {
          symbol:
            "♃",

          title:
            "Júpiter",

          text:
            "Simboliza la expansión, la confianza, las posibilidades y la búsqueda de un sentido más amplio.",

          link:
            "Descubrir Júpiter",
        },

        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Representa los límites, la disciplina, las responsabilidades y la construcción a través del tiempo.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Saturno",

      title:
        "Saturno en los 12 signos astrológicos",

      introduction:
        "Saturno conserva siempre su función de estructura, responsabilidad y maduración. El signo en el que se encuentra describe la manera particular en que estos aprendizajes toman forma.",

      titlePrefix:
        "Saturno en",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Saturno en Aries invita a construir una afirmación personal más consciente. La persona aprende progresivamente a actuar con valentía sin confundir espontaneidad, precipitación y verdadera autonomía.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Saturno en Tauro pone el énfasis en la seguridad, los recursos y la estabilidad. La persona desarrolla solidez mediante la paciencia, la constancia y una relación más realista con sus necesidades materiales.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Saturno en Géminis exige estructurar el pensamiento, la palabra y el aprendizaje. La persona puede aprender a comunicarse con mayor precisión, profundidad y responsabilidad.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Saturno en Cáncer invita a construir una seguridad emocional interior. La persona puede sentir fuertes responsabilidades familiares y aprender progresivamente a expresar sus necesidades con mayor confianza.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Saturno en Leo pide desarrollar una confianza creativa sólida. La persona aprende a expresar sus talentos sin depender completamente del reconocimiento o de la aprobación externa.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Saturno en Virgo refuerza el sentido del deber, el método y la precisión. La persona aprende a buscar eficacia sin caer en el perfeccionismo o la autocrítica excesiva.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Saturno en Libra pone el énfasis en los compromisos, el equilibrio y la responsabilidad relacional. La persona aprende a construir vínculos duraderos basados en la reciprocidad y en límites claros.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Saturno en Escorpio invita a afrontar los miedos, los apegos y las transformaciones profundas. La persona puede desarrollar una gran fuerza interior al aprender a confiar sin perder el discernimiento.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Saturno en Sagitario pide estructurar las creencias, los conocimientos y la búsqueda de sentido. La persona aprende a construir una visión coherente a partir de la experiencia y la reflexión.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Saturno en Capricornio favorece la disciplina, la ambición y la construcción a largo plazo. La persona puede desarrollar una gran capacidad de responsabilidad, siempre que no cargue sola con todas las obligaciones.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Saturno en Acuario invita a dar una forma concreta a las ideas nuevas. La persona aprende a contribuir al colectivo, organizar proyectos y conciliar independencia con responsabilidad social.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Saturno en Piscis pide crear límites en los ámbitos emocionales, intuitivos e imaginarios. La persona aprende a transformar su sensibilidad en una fuerza estructurada y utilizable.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos de tu construcción",

      title:
        "Saturno en las 12 casas astrológicas",

      introduction:
        "El signo de Saturno describe tu manera de desarrollar la disciplina, mientras que su casa indica el ámbito de vida en el que las responsabilidades, los límites y la maduración adquieren una importancia particular.",

      titlePrefix:
        "Saturno en",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Saturno en la Casa I puede aportar una actitud seria, reservada o responsable. La persona construye progresivamente su confianza, su identidad y su capacidad de ocupar su lugar con solidez.",
      },

      {
        house:
          "Casa II",

        text:
          "Saturno en la Casa II pone el énfasis en los recursos, los valores y la seguridad material. La persona aprende a construir una estabilidad duradera mediante la paciencia, la previsión y la autonomía.",
      },

      {
        house:
          "Casa III",

        text:
          "Saturno en la Casa III invita a estructurar el pensamiento, la comunicación y el aprendizaje. La persona puede desarrollar una palabra reflexiva, precisa y profundamente responsable.",
      },

      {
        house:
          "Casa IV",

        text:
          "Saturno en la Casa IV destaca las responsabilidades relacionadas con el hogar, la familia y las raíces. La persona aprende a crear una seguridad interior independiente del pasado.",
      },

      {
        house:
          "Casa V",

        text:
          "Saturno en la Casa V pide construir la confianza creativa, la espontaneidad y el placer. La persona puede tomarse muy en serio sus talentos y aprender a expresarse sin temer el juicio.",
      },

      {
        house:
          "Casa VI",

        text:
          "Saturno en la Casa VI refuerza el sentido del trabajo, las responsabilidades y la organización cotidiana. La persona desarrolla dominio mediante la disciplina y hábitos duraderos.",
      },

      {
        house:
          "Casa VII",

        text:
          "Saturno en la Casa VII pone el énfasis en los compromisos, los contratos y la madurez relacional. La persona suele buscar vínculos sólidos, responsables y construidos con el tiempo.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Saturno en la Casa VIII invita a profundizar la relación con la intimidad, la confianza y los recursos compartidos. La persona aprende a atravesar las transformaciones sin perder su estabilidad interior.",
      },

      {
        house:
          "Casa IX",

        text:
          "Saturno en la Casa IX pide estructurar las creencias, los estudios y la visión del mundo. La persona desarrolla una filosofía basada en la experiencia, el rigor y la reflexión.",
      },

      {
        house:
          "Casa X",

        text:
          "Saturno en la Casa X refuerza la ambición, la responsabilidad y la construcción profesional. La persona puede avanzar lentamente, pero busca un éxito sólido, creíble y duradero.",
      },

      {
        house:
          "Casa XI",

        text:
          "Saturno en la Casa XI pone el énfasis en los proyectos colectivos, las redes y las responsabilidades sociales. La persona aprende a construir alianzas fiables en torno a objetivos comunes.",
      },

      {
        house:
          "Casa XII",

        text:
          "Saturno en la Casa XII invita a reconocer los miedos interiores, los mecanismos inconscientes y las cargas invisibles. La soledad constructiva y la introspección pueden favorecer una profunda maduración.",
      },
    ],

    retrograde: {
      kicker:
        "Revisión de las estructuras",

      title:
        "¿Qué significa Saturno retrógrado?",

      paragraphs: [
        "Desde la Tierra, Saturno parece a veces disminuir su velocidad y retroceder temporalmente en el cielo. Se trata de un movimiento aparente relacionado con las posiciones relativas de la Tierra y Saturno.",

        "En la interpretación astrológica, Saturno retrógrado suele asociarse con una relación más interior con las responsabilidades, las reglas, la autoridad y el sentimiento de legitimidad.",

        "Este período puede invitar a revisar ciertas estructuras, aclarar los compromisos y distinguir las responsabilidades realmente útiles de las cargas que se han vuelto demasiado pesadas.",
      ],

      cardSymbol:
        "♄℞",

      cardTitle:
        "Una invitación a reestructurar",

      items: [
        "Revisar las responsabilidades",
        "Aclarar los límites",
        "Reorganizar las prioridades",
        "Examinar la relación con la autoridad",
        "Consolidar aquello que debe durar",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Saturno",

      strengthsKicker:
        "Fortalezas posibles",

      strengthsTitle:
        "Una solidez construida con el tiempo",

      strengths: [
        "Disciplina",
        "Fiabilidad",
        "Perseverancia",
        "Sentido de la responsabilidad",
        "Capacidad de construir a largo plazo",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Flexibilizar las estructuras demasiado rígidas",

      challenges: [
        "Miedo al fracaso",
        "Autocrítica excesiva",
        "Rigidez",
        "Dificultad para delegar",
        "Tendencia a cargar con demasiadas responsabilidades",
      ],
    },

    aspectsSection: {
      title:
        "Los aspectos astrológicos de Saturno",

      introduction:
        "Los aspectos relacionan Saturno con los demás planetas de la carta natal. Aportan matices a tu relación con las responsabilidades, los límites, la disciplina y la construcción personal.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjunción",

        text:
          "Fusiona Saturno con otro planeta y aporta mayor seriedad, estructura o exigencia a su expresión conjunta.",
      },

      {
        symbol:
          "△",

        title:
          "El trígono",

        text:
          "Puede simbolizar una capacidad natural para organizar, estabilizar y utilizar las cualidades del otro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "El sextil",

        text:
          "Representa un potencial de construcción, cooperación y progreso realista.",
      },

      {
        symbol:
          "□",

        title:
          "La cuadratura",

        text:
          "Puede crear una tensión entre el deseo de expresión y los límites, invitando a desarrollar paciencia y dominio.",
      },

      {
        symbol:
          "☍",

        title:
          "La oposición",

        text:
          "Invita a equilibrar las responsabilidades, los límites personales y las expectativas procedentes del exterior.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",

      title:
        "¿En qué signo y casa se encuentra tu Saturno?",

      text:
        "Genera gratuitamente tu carta natal para descubrir Saturno, Júpiter, Marte, Venus y las posiciones de tus principales planetas.",

      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Saturno en astrología",

      items: [
        {
          question:
            "¿Qué representa Saturno en astrología?",

          answer:
            "Saturno representa simbólicamente los límites, las responsabilidades, la disciplina, la paciencia, la madurez y la capacidad de construir algo sólido con el tiempo.",
        },

        {
          question:
            "¿Por qué Saturno se considera a veces difícil?",

          answer:
            "Saturno se asocia con los retrasos, los esfuerzos y las realidades que no pueden evitarse. Sin embargo, su papel simbólico no es únicamente restrictivo: también representa el dominio, la resistencia y la estabilidad.",
        },

        {
          question:
            "¿Qué significa el signo de Saturno?",

          answer:
            "El signo de Saturno describe la manera en que aprendes a desarrollar disciplina, responsabilidad y madurez en tu vida.",
        },

        {
          question:
            "¿Qué significa Saturno retrógrado en una carta natal?",

          answer:
            "En la interpretación astrológica, Saturno retrógrado al nacer puede simbolizar una relación más interior con las reglas, las responsabilidades, la autoridad y el sentimiento de legitimidad.",
        },

        {
          question:
            "¿Saturno retrógrado es negativo?",

          answer:
            "No. Este período suele interpretarse como una invitación a revisar las estructuras, las responsabilidades, los límites y la manera de ejercer la autoridad personal.",
        },

        {
          question:
            "¿Cómo conocer mi signo de Saturno?",

          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Saturno.",
        },

        {
          question:
            "¿Cuál es la diferencia entre Júpiter y Saturno?",

          answer:
            "Júpiter simboliza la expansión, la confianza y las posibilidades, mientras que Saturno representa la estructura, los límites, la responsabilidad y la construcción duradera.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Saturn in der Astrologie: Grenzen, Reife und Verantwortung | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung Saturns in der Astrologie, seinen Einfluss auf Verantwortung, Grenzen, Disziplin und seinen Ausdruck in den 12 Tierkreiszeichen.",

      ogTitle:
        "Saturn in der Astrologie: Struktur, Reife und Verantwortung",

      ogDescription:
        "Verstehen Sie Saturns Rolle im Geburtshoroskop und entdecken Sie, wie dieser Planet Grenzen, Disziplin, Verantwortung und dauerhaften Aufbau symbolisiert.",

      twitterTitle:
        "Saturn in der Astrologie | Luna Astralis",

      twitterDescription:
        "Entdecken Sie, wie Saturn Reife, Verantwortung, Grenzen und Ausdauer symbolisiert.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Saturn in der Astrologie: Struktur, Grenzen und Reife",

      description:
        "Ein vollständiger Leitfaden zu Saturns Rolle im Geburtshoroskop und seinem Ausdruck in den zwölf Tierkreiszeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "♄ Planeten und Geburtshoroskop",

      title:
        "Saturn in der Astrologie",

      lead:
        "Saturn steht für Ihre Verantwortungen, Grenzen, Disziplin und die Art, wie Sie im Laufe der Zeit dauerhafte Stärke aufbauen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      seeSigns:
        "Die 12 Zeichen ansehen",
    },

    introduction: {
      kicker:
        "Ihre Reifung verstehen",

      title:
        "Was bedeutet Saturn im Geburtshoroskop?",

      paragraphs: [
        "In der Astrologie symbolisiert Saturn Struktur, Grenzen, Zeit, Verantwortung und Reifung. Er beschreibt die Bereiche, in denen ein Mensch häufig mehr Geduld, Disziplin und Beherrschung entwickeln muss.",

        "Seine Position im Geburtshoroskop kann Erfahrungen zeigen, die anhaltende Anstrengung verlangen, aber auch Bereiche, in denen Sie eine besonders solide Kompetenz aufbauen können.",

        "Saturn wird nicht nur mit Schwierigkeiten verbunden. Er steht auch für Ausdauer, Engagement, Zuverlässigkeit und die Fähigkeit, Erfahrung in praktische Weisheit zu verwandeln.",
      ],
    },

    structure: {
      title:
        "Saturn, Struktur und Verantwortung",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Ihre Verantwortungen",

          text:
            "Saturn beschreibt die Bereiche, in denen Sie aufgefordert sind, autonomer, zuverlässiger und bewusster mit Ihren Verpflichtungen umzugehen.",
        },

        {
          symbol:
            "⏳",

          title:
            "Ihr Verhältnis zur Zeit",

          text:
            "Er erinnert daran, dass manche Entwicklungen Geduld, Wiederholung und stetigen Fortschritt erfordern.",
        },

        {
          symbol:
            "✦",

          title:
            "Ihre Reife",

          text:
            "Saturn zeigt, wie Erfahrung, Grenzen und verantwortungsvolle Entscheidungen Ihre innere Stabilität stärken können.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen Saturns",

      cards: [
        {
          number:
            "01",

          title:
            "Strukturieren",

          text:
            "Saturn gibt Ideen, Projekten und Ambitionen eine konkrete Form, indem er realistische Organisation verlangt.",
        },

        {
          number:
            "02",

          title:
            "Begrenzen",

          text:
            "Er steht für Grenzen, Regeln und notwendige Einschränkungen, die Gleichgewicht und Kohärenz bewahren.",
        },

        {
          number:
            "03",

          title:
            "Festigen",

          text:
            "Saturn unterstützt den Aufbau dauerhafter Grundlagen durch Geduld, Anstrengung und Wiederholung.",
        },

        {
          number:
            "04",

          title:
            "Meistern",

          text:
            "Er symbolisiert die Kompetenz, die sich schrittweise entwickelt, wenn Erfahrung als Lehrmeister angenommen wird.",
        },
      ],
    },

    planets: {
      title:
        "Saturn, Jupiter und die Sonne",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Die Sonne",

          text:
            "Sie steht für Ihre bewusste Identität, Ihren Willen und die innere Richtung, die Sie ausdrücken möchten.",

          link:
            "Die Sonne entdecken",
        },

        {
          symbol:
            "♃",

          title:
            "Jupiter",

          text:
            "Er symbolisiert Expansion, Vertrauen, Möglichkeiten und die Suche nach einem umfassenderen Sinn.",

          link:
            "Jupiter entdecken",
        },

        {
          symbol:
            "♄",

          title:
            "Saturn",

          text:
            "Er steht für Grenzen, Disziplin, Verantwortung und Aufbau im Laufe der Zeit.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen Saturns",

      title:
        "Saturn in den 12 Tierkreiszeichen",

      introduction:
        "Saturn behält stets seine Funktion von Struktur, Verantwortung und Reifung. Das Zeichen, in dem er steht, beschreibt die besondere Weise, in der diese Lernprozesse Gestalt annehmen.",

      titlePrefix:
        "Saturn in",
    },

    signs: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Saturn im Widder lädt dazu ein, eine bewusstere Selbstbehauptung aufzubauen. Die Person lernt schrittweise, mutig zu handeln, ohne Spontaneität, Übereilung und echte Autonomie zu verwechseln.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Saturn im Stier betont Sicherheit, Ressourcen und Stabilität. Die Person entwickelt Festigkeit durch Geduld, Beständigkeit und einen realistischeren Umgang mit materiellen Bedürfnissen.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Saturn in den Zwillingen verlangt eine Strukturierung von Denken, Sprache und Lernen. Die Person kann lernen, präziser, tiefgründiger und verantwortungsvoller zu kommunizieren.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Saturn im Krebs lädt zum Aufbau innerer emotionaler Sicherheit ein. Die Person kann starke familiäre Verantwortungen empfinden und schrittweise lernen, Bedürfnisse selbstbewusster auszudrücken.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Saturn im Löwen fordert den Aufbau soliden kreativen Selbstvertrauens. Die Person lernt, Talente auszudrücken, ohne vollständig von äußerer Anerkennung oder Zustimmung abhängig zu sein.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Saturn in der Jungfrau stärkt Pflichtgefühl, Methode und Genauigkeit. Die Person lernt, Effizienz anzustreben, ohne in Perfektionismus oder übermäßige Selbstkritik zu verfallen.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Saturn in der Waage betont Verpflichtung, Gleichgewicht und Beziehungverantwortung. Die Person lernt, dauerhafte Bindungen auf Gegenseitigkeit und klaren Grenzen aufzubauen.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Saturn im Skorpion lädt dazu ein, Ängste, Bindungen und tiefgreifende Veränderungen zu bewältigen. Die Person kann große innere Stärke entwickeln, indem sie Vertrauen lernt, ohne ihre Urteilskraft zu verlieren.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Saturn im Schützen verlangt eine Strukturierung von Überzeugungen, Wissen und Sinnsuche. Die Person lernt, aus Erfahrung und Reflexion eine kohärente Sichtweise aufzubauen.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Saturn im Steinbock fördert Disziplin, Ehrgeiz und langfristigen Aufbau. Die Person kann ein starkes Verantwortungsvermögen entwickeln, solange sie nicht alle Verpflichtungen allein trägt.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Saturn im Wassermann lädt dazu ein, neuen Ideen eine konkrete Form zu geben. Die Person lernt, zum Kollektiv beizutragen, Projekte zu organisieren und Unabhängigkeit mit sozialer Verantwortung zu verbinden.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Saturn in den Fischen verlangt Grenzen in emotionalen, intuitiven und imaginativen Bereichen. Die Person lernt, Sensibilität in eine strukturierte und nutzbare Stärke zu verwandeln.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche Ihres Aufbaus",

      title:
        "Saturn in den 12 astrologischen Häusern",

      introduction:
        "Saturns Zeichen beschreibt, wie Sie Disziplin entwickeln, während sein Haus den Lebensbereich zeigt, in dem Verantwortung, Grenzen und Reifung besonders wichtig werden.",

      titlePrefix:
        "Saturn in",
    },

    houses: [
      {
        house:
          "Haus I",

        text:
          "Saturn im ersten Haus kann eine ernste, zurückhaltende oder verantwortungsvolle Haltung verleihen. Die Person baut schrittweise Selbstvertrauen, Identität und die Fähigkeit auf, ihren Platz mit Festigkeit einzunehmen.",
      },

      {
        house:
          "Haus II",

        text:
          "Saturn im zweiten Haus betont Ressourcen, Werte und materielle Sicherheit. Die Person lernt, durch Geduld, Voraussicht und Eigenständigkeit dauerhafte Stabilität aufzubauen.",
      },

      {
        house:
          "Haus III",

        text:
          "Saturn im dritten Haus lädt zur Strukturierung von Denken, Kommunikation und Lernen ein. Die Person kann eine überlegte, präzise und tief verantwortungsvolle Ausdrucksweise entwickeln.",
      },

      {
        house:
          "Haus IV",

        text:
          "Saturn im vierten Haus hebt Verantwortungen rund um Zuhause, Familie und Wurzeln hervor. Die Person lernt, innere Sicherheit unabhängig von der Vergangenheit aufzubauen.",
      },

      {
        house:
          "Haus V",

        text:
          "Saturn im fünften Haus verlangt, kreatives Selbstvertrauen, Spontaneität und Freude schrittweise aufzubauen. Die Person kann Talente sehr ernst nehmen und lernen, sich ohne Angst vor Bewertung auszudrücken.",
      },

      {
        house:
          "Haus VI",

        text:
          "Saturn im sechsten Haus stärkt Arbeitsmoral, Verantwortung und Alltagsorganisation. Die Person entwickelt Beherrschung durch Disziplin und dauerhafte Gewohnheiten.",
      },

      {
        house:
          "Haus VII",

        text:
          "Saturn im siebten Haus betont Verpflichtung, Verträge und Beziehungsreife. Die Person sucht häufig solide, verantwortungsvolle Bindungen, die im Laufe der Zeit aufgebaut werden.",
      },

      {
        house:
          "Haus VIII",

        text:
          "Saturn im achten Haus lädt dazu ein, das Verhältnis zu Intimität, Vertrauen und gemeinsamen Ressourcen zu vertiefen. Die Person lernt, Veränderungen zu durchlaufen, ohne die innere Stabilität zu verlieren.",
      },

      {
        house:
          "Haus IX",

        text:
          "Saturn im neunten Haus verlangt eine Strukturierung von Überzeugungen, Studium und Weltanschauung. Die Person entwickelt eine Philosophie, die auf Erfahrung, Strenge und Reflexion beruht.",
      },

      {
        house:
          "Haus X",

        text:
          "Saturn im zehnten Haus stärkt Ehrgeiz, Verantwortung und beruflichen Aufbau. Die Person kann langsam vorankommen, strebt jedoch nach solidem, glaubwürdigem und dauerhaftem Erfolg.",
      },

      {
        house:
          "Haus XI",

        text:
          "Saturn im elften Haus betont Gemeinschaftsprojekte, Netzwerke und soziale Verantwortung. Die Person lernt, zuverlässige Bündnisse rund um gemeinsame Ziele aufzubauen.",
      },

      {
        house:
          "Haus XII",

        text:
          "Saturn im zwölften Haus lädt dazu ein, innere Ängste, unbewusste Mechanismen und unsichtbare Lasten zu erkennen. Konstruktive Einsamkeit und Selbstreflexion können tiefe Reifung fördern.",
      },
    ],

    retrograde: {
      kicker:
        "Überprüfung der Strukturen",

      title:
        "Was bedeutet rückläufiger Saturn?",

      paragraphs: [
        "Von der Erde aus scheint Saturn manchmal langsamer zu werden und sich vorübergehend rückwärts am Himmel zu bewegen. Dabei handelt es sich um eine scheinbare Bewegung, die mit den relativen Positionen von Erde und Saturn zusammenhängt.",

        "In der astrologischen Deutung wird rückläufiger Saturn häufig mit einem stärker innerlichen Verhältnis zu Verantwortung, Regeln, Autorität und dem Gefühl von Legitimität verbunden.",

        "Diese Phase kann dazu einladen, bestimmte Strukturen zu überprüfen, Verpflichtungen zu klären und wirklich nützliche Verantwortungen von zu schwer gewordenen Lasten zu unterscheiden.",
      ],

      cardSymbol:
        "♄℞",

      cardTitle:
        "Eine Einladung zur Umstrukturierung",

      items: [
        "Verantwortungen überprüfen",
        "Grenzen klären",
        "Prioritäten neu ordnen",
        "Das Verhältnis zu Autorität untersuchen",
        "Festigen, was Bestand haben soll",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen Saturns",

      strengthsKicker:
        "Mögliche Stärken",

      strengthsTitle:
        "Im Laufe der Zeit aufgebaute Festigkeit",

      strengths: [
        "Disziplin",
        "Zuverlässigkeit",
        "Ausdauer",
        "Verantwortungsbewusstsein",
        "Fähigkeit, dauerhaft aufzubauen",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Zu starre Strukturen lockern",

      challenges: [
        "Angst vor Versagen",
        "Übermäßige Selbstkritik",
        "Starrheit",
        "Schwierigkeit zu delegieren",
        "Neigung, zu viel Verantwortung zu tragen",
      ],
    },

    aspectsSection: {
      title:
        "Die astrologischen Aspekte Saturns",

      introduction:
        "Aspekte verbinden Saturn mit den anderen Planeten im Geburtshoroskop. Sie verleihen Ihrem Verhältnis zu Verantwortung, Grenzen, Disziplin und persönlichem Aufbau zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "Die Konjunktion",

        text:
          "Sie verbindet Saturn mit einem anderen Planeten und verleiht ihrem gemeinsamen Ausdruck mehr Ernsthaftigkeit, Struktur oder Anspruch.",
      },

      {
        symbol:
          "△",

        title:
          "Das Trigon",

        text:
          "Es kann eine natürliche Fähigkeit symbolisieren, die Eigenschaften des anderen Planeten zu organisieren, zu stabilisieren und zu nutzen.",
      },

      {
        symbol:
          "✶",

        title:
          "Das Sextil",

        text:
          "Es steht für Potenzial zu Aufbau, Zusammenarbeit und realistischem Fortschritt.",
      },

      {
        symbol:
          "□",

        title:
          "Das Quadrat",

        text:
          "Es kann Spannung zwischen Ausdruckswunsch und Grenzen erzeugen und dazu auffordern, Geduld und Beherrschung zu entwickeln.",
      },

      {
        symbol:
          "☍",

        title:
          "Die Opposition",

        text:
          "Sie lädt dazu ein, Verantwortung, persönliche Grenzen und Erwartungen von außen miteinander auszugleichen.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",

      title:
        "In welchem Zeichen und Haus steht Ihr Saturn?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Saturn, Jupiter, Mars, Venus und die Positionen Ihrer wichtigsten Planeten.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zu Saturn in der Astrologie",

      items: [
        {
          question:
            "Was bedeutet Saturn in der Astrologie?",

          answer:
            "Saturn symbolisiert Grenzen, Verantwortung, Disziplin, Geduld, Reife und die Fähigkeit, im Laufe der Zeit etwas Solides aufzubauen.",
        },

        {
          question:
            "Warum gilt Saturn manchmal als schwierig?",

          answer:
            "Saturn wird mit Verzögerungen, Anstrengung und Realitäten verbunden, die nicht vermieden werden können. Seine symbolische Rolle ist jedoch nicht nur einschränkend: Er steht auch für Beherrschung, Ausdauer und Stabilität.",
        },

        {
          question:
            "Was bedeutet Saturns Zeichen?",

          answer:
            "Saturns Zeichen beschreibt, wie Sie lernen, Disziplin, Verantwortung und Reife in Ihrem Leben zu entwickeln.",
        },

        {
          question:
            "Was bedeutet rückläufiger Saturn im Geburtshoroskop?",

          answer:
            "In der astrologischen Deutung kann rückläufiger Saturn bei der Geburt ein stärker innerliches Verhältnis zu Regeln, Verantwortung, Autorität und dem Gefühl von Legitimität symbolisieren.",
        },

        {
          question:
            "Ist rückläufiger Saturn negativ?",

          answer:
            "Nein. Diese Phase wird eher als Einladung verstanden, Strukturen, Verantwortungen, Grenzen und die Ausübung persönlicher Autorität zu überprüfen.",
        },

        {
          question:
            "Wie finde ich mein Saturnzeichen?",

          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Geburtsdatum, Geburtszeit und Geburtsort berechnen, um Saturns genaue Position zu bestimmen.",
        },

        {
          question:
            "Was ist der Unterschied zwischen Jupiter und Saturn?",

          answer:
            "Jupiter symbolisiert Expansion, Vertrauen und Möglichkeiten, während Saturn für Struktur, Grenzen, Verantwortung und dauerhaften Aufbau steht.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Saturno in astrologia: limiti, maturità e responsabilità | Luna Astralis",

      description:
        "Scopri il significato di Saturno in astrologia, la sua influenza sulle responsabilità, i limiti, la disciplina e la sua espressione nei 12 segni zodiacali.",

      ogTitle:
        "Saturno in astrologia: struttura, maturità e responsabilità",

      ogDescription:
        "Comprendi il ruolo di Saturno nel tema natale e scopri come questo pianeta simboleggia limiti, disciplina, responsabilità e costruzione duratura.",

      twitterTitle:
        "Saturno in astrologia | Luna Astralis",

      twitterDescription:
        "Scopri come Saturno simboleggia maturità, responsabilità, limiti e perseveranza.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Saturno in astrologia: struttura, limiti e maturità",

      description:
        "Guida completa al ruolo di Saturno nel tema natale e alla sua espressione nei dodici segni e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "♄ Pianeti e tema natale",

      title:
        "Saturno in astrologia",

      lead:
        "Saturno rappresenta le tue responsabilità, i tuoi limiti, la tua disciplina e il modo in cui costruisci una forza duratura nel tempo.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      seeSigns:
        "Vedere i 12 segni",
    },

    introduction: {
      kicker:
        "Comprendere la tua maturazione",

      title:
        "Che cosa rappresenta Saturno nel tema natale?",

      paragraphs: [
        "In astrologia, Saturno simboleggia struttura, limiti, tempo, responsabilità e maturazione. Descrive gli ambiti in cui una persona deve spesso sviluppare maggiore pazienza, disciplina e padronanza.",

        "La sua posizione nel tema natale può rivelare le esperienze che richiedono uno sforzo costante, ma anche gli ambiti in cui è possibile costruire una competenza particolarmente solida.",

        "Saturno non è associato soltanto alle difficoltà. Rappresenta anche perseveranza, impegno, affidabilità e capacità di trasformare l’esperienza in saggezza concreta.",
      ],
    },

    structure: {
      title:
        "Saturno, struttura e responsabilità",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Le tue responsabilità",

          text:
            "Saturno descrive gli ambiti in cui sei invitato a diventare più autonomo, affidabile e consapevole dei tuoi impegni.",
        },

        {
          symbol:
            "⏳",

          title:
            "Il tuo rapporto con il tempo",

          text:
            "Ricorda che alcune costruzioni richiedono pazienza, ripetizione e un progresso costante.",
        },

        {
          symbol:
            "✦",

          title:
            "La tua maturità",

          text:
            "Saturno mostra come esperienza, limiti e scelte responsabili possano rafforzare la tua stabilità interiore.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Saturno",

      cards: [
        {
          number:
            "01",

          title:
            "Strutturare",

          text:
            "Saturno dà una forma concreta alle idee, ai progetti e alle ambizioni imponendo un’organizzazione realistica.",
        },

        {
          number:
            "02",

          title:
            "Limitare",

          text:
            "Rappresenta i confini, le regole e le restrizioni necessarie per preservare equilibrio e coerenza.",
        },

        {
          number:
            "03",

          title:
            "Consolidare",

          text:
            "Saturno favorisce la costruzione di basi durature attraverso pazienza, impegno e ripetizione.",
        },

        {
          number:
            "04",

          title:
            "Padroneggiare",

          text:
            "Simboleggia la competenza che si sviluppa progressivamente quando si accetta di imparare dall’esperienza.",
        },
      ],
    },

    planets: {
      title:
        "Saturno, Giove e il Sole",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Il Sole",

          text:
            "Rappresenta la tua identità cosciente, la volontà e la direzione interiore che cerchi di esprimere.",

          link:
            "Scoprire il Sole",
        },

        {
          symbol:
            "♃",

          title:
            "Giove",

          text:
            "Simboleggia espansione, fiducia, possibilità e ricerca di un significato più ampio.",

          link:
            "Scoprire Giove",
        },

        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Rappresenta limiti, disciplina, responsabilità e costruzione nel tempo.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Saturno",

      title:
        "Saturno nei 12 segni zodiacali",

      introduction:
        "Saturno conserva sempre la propria funzione di struttura, responsabilità e maturazione. Il segno in cui si trova descrive il modo particolare in cui questi apprendimenti prendono forma.",

      titlePrefix:
        "Saturno in",
    },

    signs: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Saturno in Ariete invita a costruire un’affermazione personale più consapevole. La persona impara progressivamente ad agire con coraggio senza confondere spontaneità, precipitazione e vera autonomia.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Saturno in Toro pone l’accento su sicurezza, risorse e stabilità. La persona sviluppa solidità attraverso pazienza, costanza e un rapporto più realistico con i bisogni materiali.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "Saturno in Gemelli chiede di strutturare pensiero, parola e apprendimento. La persona può imparare a comunicare con maggiore precisione, profondità e responsabilità.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Saturno in Cancro invita a costruire una sicurezza emotiva interiore. La persona può sentire forti responsabilità familiari e imparare progressivamente a esprimere i propri bisogni con maggiore fiducia.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Saturno in Leone richiede di sviluppare una solida fiducia creativa. La persona impara a esprimere i propri talenti senza dipendere completamente dal riconoscimento o dall’approvazione esterna.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "Saturno in Vergine rafforza il senso del dovere, del metodo e della precisione. La persona impara a ricercare l’efficienza senza cadere nel perfezionismo o nell’autocritica eccessiva.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "Saturno in Bilancia pone l’accento sugli impegni, sull’equilibrio e sulla responsabilità relazionale. La persona impara a costruire legami duraturi fondati sulla reciprocità e su limiti chiari.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Saturno in Scorpione invita ad affrontare paure, attaccamenti e trasformazioni profonde. La persona può sviluppare una grande forza interiore imparando a fidarsi senza perdere discernimento.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Saturno in Sagittario chiede di strutturare convinzioni, conoscenze e ricerca di significato. La persona impara a costruire una visione coerente a partire dall’esperienza e dalla riflessione.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Saturno in Capricorno favorisce disciplina, ambizione e costruzione a lungo termine. La persona può sviluppare una grande capacità di responsabilità, purché non porti da sola tutti gli obblighi.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "Saturno in Acquario invita a dare una forma concreta alle nuove idee. La persona impara a contribuire al collettivo, organizzare progetti e conciliare indipendenza e responsabilità sociale.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "Saturno in Pesci richiede di creare limiti negli ambiti emotivi, intuitivi e immaginativi. La persona impara a trasformare la propria sensibilità in una forza strutturata e utilizzabile.",
      },
    ],

    housesSection: {
      kicker:
        "Gli ambiti della tua costruzione",

      title:
        "Saturno nelle 12 case astrologiche",

      introduction:
        "Il segno di Saturno descrive il modo in cui sviluppi la disciplina, mentre la sua casa indica l’ambito della vita in cui responsabilità, limiti e maturazione assumono un’importanza particolare.",

      titlePrefix:
        "Saturno in",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Saturno in Casa I può donare un atteggiamento serio, riservato o responsabile. La persona costruisce progressivamente fiducia, identità e capacità di occupare il proprio posto con solidità.",
      },

      {
        house:
          "Casa II",

        text:
          "Saturno in Casa II pone l’accento su risorse, valori e sicurezza materiale. La persona impara a costruire una stabilità duratura attraverso pazienza, previdenza e autonomia.",
      },

      {
        house:
          "Casa III",

        text:
          "Saturno in Casa III invita a strutturare pensiero, comunicazione e apprendimento. La persona può sviluppare un modo di esprimersi riflessivo, preciso e profondamente responsabile.",
      },

      {
        house:
          "Casa IV",

        text:
          "Saturno in Casa IV sottolinea le responsabilità legate alla casa, alla famiglia e alle radici. La persona impara a creare una sicurezza interiore indipendente dal passato.",
      },

      {
        house:
          "Casa V",

        text:
          "Saturno in Casa V richiede di costruire fiducia creativa, spontaneità e piacere. La persona può prendere molto sul serio i propri talenti e imparare a esprimersi senza temere il giudizio.",
      },

      {
        house:
          "Casa VI",

        text:
          "Saturno in Casa VI rafforza il senso del lavoro, delle responsabilità e dell’organizzazione quotidiana. La persona sviluppa padronanza attraverso disciplina e abitudini durature.",
      },

      {
        house:
          "Casa VII",

        text:
          "Saturno in Casa VII pone l’accento sugli impegni, sui contratti e sulla maturità relazionale. La persona ricerca generalmente legami solidi, responsabili e costruiti nel tempo.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Saturno in Casa VIII invita ad approfondire il rapporto con intimità, fiducia e risorse condivise. La persona impara ad attraversare le trasformazioni senza perdere la propria stabilità interiore.",
      },

      {
        house:
          "Casa IX",

        text:
          "Saturno in Casa IX chiede di strutturare convinzioni, studi e visione del mondo. La persona sviluppa una filosofia fondata sull’esperienza, sul rigore e sulla riflessione.",
      },

      {
        house:
          "Casa X",

        text:
          "Saturno in Casa X rafforza ambizione, responsabilità e costruzione professionale. La persona può avanzare lentamente, ma ricerca un successo solido, credibile e duraturo.",
      },

      {
        house:
          "Casa XI",

        text:
          "Saturno in Casa XI pone l’accento su progetti collettivi, reti e responsabilità sociali. La persona impara a costruire alleanze affidabili intorno a obiettivi comuni.",
      },

      {
        house:
          "Casa XII",

        text:
          "Saturno in Casa XII invita a riconoscere paure interiori, meccanismi inconsci e pesi invisibili. La solitudine costruttiva e l’introspezione possono favorire una profonda maturazione.",
      },
    ],

    retrograde: {
      kicker:
        "Revisione delle strutture",

      title:
        "Che cosa significa Saturno retrogrado?",

      paragraphs: [
        "Dalla Terra, Saturno sembra talvolta rallentare e retrocedere temporaneamente nel cielo. Si tratta di un movimento apparente legato alle posizioni relative della Terra e di Saturno.",

        "Nell’interpretazione astrologica, Saturno retrogrado è spesso associato a un rapporto più interiore con responsabilità, regole, autorità e senso di legittimità.",

        "Questo periodo può invitare a rivedere alcune strutture, chiarire gli impegni e distinguere le responsabilità realmente utili dai pesi diventati troppo gravosi.",
      ],

      cardSymbol:
        "♄℞",

      cardTitle:
        "Un invito a ristrutturare",

      items: [
        "Rivedere le responsabilità",
        "Chiarire i limiti",
        "Riorganizzare le priorità",
        "Esaminare il rapporto con l’autorità",
        "Consolidare ciò che deve durare",
      ],
    },

    strengths: {
      title:
        "I punti di forza e le sfide di Saturno",

      strengthsKicker:
        "Possibili punti di forza",

      strengthsTitle:
        "Una solidità costruita nel tempo",

      strengths: [
        "Disciplina",
        "Affidabilità",
        "Perseveranza",
        "Senso di responsabilità",
        "Capacità di costruire in modo duraturo",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Rendere più flessibili le strutture troppo rigide",

      challenges: [
        "Paura del fallimento",
        "Autocritica eccessiva",
        "Rigidità",
        "Difficoltà a delegare",
        "Tendenza a portare troppe responsabilità",
      ],
    },

    aspectsSection: {
      title:
        "Gli aspetti astrologici di Saturno",

      introduction:
        "Gli aspetti collegano Saturno agli altri pianeti del tema natale. Aggiungono sfumature al tuo rapporto con responsabilità, limiti, disciplina e costruzione personale.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La congiunzione",

        text:
          "Fonde Saturno con un altro pianeta e dona maggiore serietà, struttura o esigenza alla loro espressione comune.",
      },

      {
        symbol:
          "△",

        title:
          "Il trigono",

        text:
          "Può simboleggiare una capacità naturale di organizzare, stabilizzare e utilizzare le qualità dell’altro pianeta.",
      },

      {
        symbol:
          "✶",

        title:
          "Il sestile",

        text:
          "Rappresenta un potenziale di costruzione, cooperazione e progresso realistico.",
      },

      {
        symbol:
          "□",

        title:
          "La quadratura",

        text:
          "Può creare una tensione tra il desiderio di espressione e i limiti, invitando a sviluppare pazienza e padronanza.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposizione",

        text:
          "Invita a equilibrare responsabilità, limiti personali e aspettative provenienti dall’esterno.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",

      title:
        "In quale segno e casa si trova il tuo Saturno?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire Saturno, Giove, Marte, Venere e le posizioni dei principali pianeti.",

      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande su Saturno in astrologia",

      items: [
        {
          question:
            "Che cosa rappresenta Saturno in astrologia?",

          answer:
            "Saturno rappresenta simbolicamente limiti, responsabilità, disciplina, pazienza, maturità e capacità di costruire qualcosa di solido nel tempo.",
        },

        {
          question:
            "Perché Saturno è talvolta considerato difficile?",

          answer:
            "Saturno è associato a ritardi, sforzi e realtà che non possono essere evitate. Il suo ruolo simbolico non è però soltanto restrittivo: rappresenta anche padronanza, resistenza e stabilità.",
        },

        {
          question:
            "Che cosa significa il segno di Saturno?",

          answer:
            "Il segno di Saturno descrive il modo in cui impari a sviluppare disciplina, responsabilità e maturità nella tua vita.",
        },

        {
          question:
            "Che cosa significa Saturno retrogrado nel tema natale?",

          answer:
            "Nell’interpretazione astrologica, Saturno retrogrado alla nascita può simboleggiare un rapporto più interiore con regole, responsabilità, autorità e senso di legittimità.",
        },

        {
          question:
            "Saturno retrogrado è negativo?",

          answer:
            "No. Questo periodo viene piuttosto interpretato come un invito a rivedere strutture, responsabilità, limiti e il modo in cui si esercita l’autorità personale.",
        },

        {
          question:
            "Come conoscere il mio segno di Saturno?",

          answer:
            "Devi calcolare il tuo tema natale utilizzando data, ora e luogo di nascita per conoscere la posizione esatta di Saturno.",
        },

        {
          question:
            "Qual è la differenza tra Giove e Saturno?",

          answer:
            "Giove simboleggia espansione, fiducia e possibilità, mentre Saturno rappresenta struttura, limiti, responsabilità e costruzione duratura.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Saturno na astrologia: limites, maturidade e responsabilidades | Luna Astralis",

      description:
        "Descubra o significado de Saturno na astrologia, sua influência sobre responsabilidades, limites, disciplina e sua expressão nos 12 signos do zodíaco.",

      ogTitle:
        "Saturno na astrologia: estrutura, maturidade e responsabilidades",

      ogDescription:
        "Compreenda o papel de Saturno no mapa natal e descubra como este planeta simboliza limites, disciplina, responsabilidade e construção duradoura.",

      twitterTitle:
        "Saturno na astrologia | Luna Astralis",

      twitterDescription:
        "Descubra como Saturno simboliza maturidade, responsabilidades, limites e perseverança.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Saturno na astrologia: estrutura, limites e maturidade",

      description:
        "Guia completo sobre o papel de Saturno no mapa natal e sua expressão nos doze signos e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "♄ Planetas e mapa natal",

      title:
        "Saturno na astrologia",

      lead:
        "Saturno representa suas responsabilidades, seus limites, sua disciplina e a maneira como você constrói uma força duradoura ao longo do tempo.",

      createChart:
        "Criar meu mapa astral grátis",

      seeSigns:
        "Ver os 12 signos",
    },

    introduction: {
      kicker:
        "Compreender sua maturação",

      title:
        "O que Saturno representa no mapa natal?",

      paragraphs: [
        "Na astrologia, Saturno simboliza estrutura, limites, tempo, responsabilidades e maturação. Ele descreve as áreas em que uma pessoa frequentemente precisa desenvolver mais paciência, disciplina e domínio.",

        "Sua posição no mapa natal pode revelar experiências que exigem esforço contínuo, mas também as áreas em que você pode construir uma competência especialmente sólida.",

        "Saturno não está associado apenas às dificuldades. Ele também representa perseverança, compromisso, confiabilidade e capacidade de transformar experiência em sabedoria prática.",
      ],
    },

    structure: {
      title:
        "Saturno, estrutura e responsabilidades",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Suas responsabilidades",

          text:
            "Saturno descreve as áreas em que você é convidado a se tornar mais autônomo, confiável e consciente dos seus compromissos.",
        },

        {
          symbol:
            "⏳",

          title:
            "Sua relação com o tempo",

          text:
            "Ele lembra que algumas construções exigem paciência, repetição e progresso constante.",
        },

        {
          symbol:
            "✦",

          title:
            "Sua maturidade",

          text:
            "Saturno mostra como experiência, limites e escolhas responsáveis podem fortalecer sua estabilidade interior.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Saturno",

      cards: [
        {
          number:
            "01",

          title:
            "Estruturar",

          text:
            "Saturno dá forma concreta às ideias, aos projetos e às ambições por meio de uma organização realista.",
        },

        {
          number:
            "02",

          title:
            "Limitar",

          text:
            "Ele representa fronteiras, regras e restrições necessárias para preservar equilíbrio e coerência.",
        },

        {
          number:
            "03",

          title:
            "Consolidar",

          text:
            "Saturno favorece a construção de bases duradouras por meio de paciência, esforço e repetição.",
        },

        {
          number:
            "04",

          title:
            "Dominar",

          text:
            "Ele simboliza a competência que se desenvolve progressivamente quando se aceita aprender com a experiência.",
        },
      ],
    },

    planets: {
      title:
        "Saturno, Júpiter e o Sol",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "O Sol",

          text:
            "Ele representa sua identidade consciente, sua vontade e a direção interior que você procura expressar.",

          link:
            "Descobrir o Sol",
        },

        {
          symbol:
            "♃",

          title:
            "Júpiter",

          text:
            "Ele simboliza expansão, confiança, possibilidades e busca de um sentido mais amplo.",

          link:
            "Descobrir Júpiter",
        },

        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Ele representa limites, disciplina, responsabilidades e construção ao longo do tempo.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Saturno",

      title:
        "Saturno nos 12 signos astrológicos",

      introduction:
        "Saturno sempre conserva sua função de estrutura, responsabilidade e maturação. O signo em que ele se encontra descreve a maneira particular como esses aprendizados tomam forma.",

      titlePrefix:
        "Saturno em",
    },

    signs: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Saturno em Áries convida a construir uma afirmação pessoal mais consciente. A pessoa aprende progressivamente a agir com coragem sem confundir espontaneidade, precipitação e verdadeira autonomia.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Saturno em Touro enfatiza segurança, recursos e estabilidade. A pessoa desenvolve solidez por meio de paciência, constância e uma relação mais realista com suas necessidades materiais.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Saturno em Gêmeos pede estrutura no pensamento, na fala e no aprendizado. A pessoa pode aprender a se comunicar com mais precisão, profundidade e responsabilidade.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Saturno em Câncer convida à construção de segurança emocional interior. A pessoa pode sentir fortes responsabilidades familiares e aprender progressivamente a expressar suas necessidades com mais confiança.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Saturno em Leão pede o desenvolvimento de uma confiança criativa sólida. A pessoa aprende a expressar seus talentos sem depender completamente do reconhecimento ou da aprovação externa.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Saturno em Virgem reforça o senso de dever, método e precisão. A pessoa aprende a buscar eficiência sem cair no perfeccionismo ou na autocrítica excessiva.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Saturno em Libra enfatiza compromissos, equilíbrio e responsabilidade relacional. A pessoa aprende a construir vínculos duradouros baseados em reciprocidade e limites claros.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Saturno em Escorpião convida a enfrentar medos, apegos e transformações profundas. A pessoa pode desenvolver grande força interior ao aprender a confiar sem perder o discernimento.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Saturno em Sagitário pede estrutura nas crenças, no conhecimento e na busca de sentido. A pessoa aprende a construir uma visão coerente a partir da experiência e da reflexão.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Saturno em Capricórnio favorece disciplina, ambição e construção a longo prazo. A pessoa pode desenvolver grande capacidade de responsabilidade, desde que não carregue sozinha todas as obrigações.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Saturno em Aquário convida a dar forma concreta às novas ideias. A pessoa aprende a contribuir para o coletivo, organizar projetos e conciliar independência com responsabilidade social.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Saturno em Peixes pede limites nos âmbitos emocionais, intuitivos e imaginativos. A pessoa aprende a transformar sua sensibilidade em uma força estruturada e utilizável.",
      },
    ],

    housesSection: {
      kicker:
        "As áreas da sua construção",

      title:
        "Saturno nas 12 casas astrológicas",

      introduction:
        "O signo de Saturno descreve a maneira como você desenvolve disciplina, enquanto sua casa indica a área da vida em que responsabilidades, limites e maturação assumem importância especial.",

      titlePrefix:
        "Saturno em",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Saturno na Casa I pode proporcionar uma atitude séria, reservada ou responsável. A pessoa constrói progressivamente confiança, identidade e capacidade de ocupar seu lugar com solidez.",
      },

      {
        house:
          "Casa II",

        text:
          "Saturno na Casa II enfatiza recursos, valores e segurança material. A pessoa aprende a construir estabilidade duradoura por meio de paciência, previsão e autonomia.",
      },

      {
        house:
          "Casa III",

        text:
          "Saturno na Casa III convida a estruturar pensamento, comunicação e aprendizado. A pessoa pode desenvolver uma fala reflexiva, precisa e profundamente responsável.",
      },

      {
        house:
          "Casa IV",

        text:
          "Saturno na Casa IV destaca responsabilidades ligadas ao lar, à família e às raízes. A pessoa aprende a criar segurança interior independente do passado.",
      },

      {
        house:
          "Casa V",

        text:
          "Saturno na Casa V pede a construção de confiança criativa, espontaneidade e prazer. A pessoa pode levar seus talentos muito a sério e aprender a se expressar sem medo do julgamento.",
      },

      {
        house:
          "Casa VI",

        text:
          "Saturno na Casa VI reforça o senso de trabalho, responsabilidade e organização cotidiana. A pessoa desenvolve domínio por meio de disciplina e hábitos duradouros.",
      },

      {
        house:
          "Casa VII",

        text:
          "Saturno na Casa VII enfatiza compromissos, contratos e maturidade relacional. A pessoa geralmente procura vínculos sólidos, responsáveis e construídos ao longo do tempo.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Saturno na Casa VIII convida a aprofundar a relação com intimidade, confiança e recursos compartilhados. A pessoa aprende a atravessar transformações sem perder sua estabilidade interior.",
      },

      {
        house:
          "Casa IX",

        text:
          "Saturno na Casa IX pede estrutura nas crenças, nos estudos e na visão de mundo. A pessoa desenvolve uma filosofia baseada em experiência, rigor e reflexão.",
      },

      {
        house:
          "Casa X",

        text:
          "Saturno na Casa X reforça ambição, responsabilidade e construção profissional. A pessoa pode avançar lentamente, mas procura um sucesso sólido, confiável e duradouro.",
      },

      {
        house:
          "Casa XI",

        text:
          "Saturno na Casa XI enfatiza projetos coletivos, redes e responsabilidades sociais. A pessoa aprende a construir alianças confiáveis em torno de objetivos comuns.",
      },

      {
        house:
          "Casa XII",

        text:
          "Saturno na Casa XII convida a reconhecer medos interiores, mecanismos inconscientes e cargas invisíveis. A solidão construtiva e a introspecção podem favorecer profunda maturação.",
      },
    ],

    retrograde: {
      kicker:
        "Revisão das estruturas",

      title:
        "O que significa Saturno retrógrado?",

      paragraphs: [
        "A partir da Terra, Saturno às vezes parece desacelerar e se mover temporariamente para trás no céu. Trata-se de um movimento aparente relacionado às posições relativas da Terra e de Saturno.",

        "Na interpretação astrológica, Saturno retrógrado costuma ser associado a uma relação mais interior com responsabilidades, regras, autoridade e sentimento de legitimidade.",

        "Esse período pode convidar a revisar certas estruturas, esclarecer compromissos e distinguir responsabilidades realmente úteis de cargas que se tornaram pesadas demais.",
      ],

      cardSymbol:
        "♄℞",

      cardTitle:
        "Um convite para reestruturar",

      items: [
        "Revisar responsabilidades",
        "Esclarecer limites",
        "Reorganizar prioridades",
        "Examinar a relação com a autoridade",
        "Consolidar aquilo que deve durar",
      ],
    },

    strengths: {
      title:
        "As forças e os desafios de Saturno",

      strengthsKicker:
        "Possíveis forças",

      strengthsTitle:
        "Uma solidez construída ao longo do tempo",

      strengths: [
        "Disciplina",
        "Confiabilidade",
        "Perseverança",
        "Senso de responsabilidade",
        "Capacidade de construir de forma duradoura",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "Flexibilizar estruturas rígidas demais",

      challenges: [
        "Medo do fracasso",
        "Autocrítica excessiva",
        "Rigidez",
        "Dificuldade para delegar",
        "Tendência a carregar responsabilidades demais",
      ],
    },

    aspectsSection: {
      title:
        "Os aspectos astrológicos de Saturno",

      introduction:
        "Os aspectos ligam Saturno aos outros planetas do mapa natal. Eles acrescentam nuances à sua relação com responsabilidades, limites, disciplina e construção pessoal.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "A conjunção",

        text:
          "Ela funde Saturno com outro planeta e acrescenta maior seriedade, estrutura ou exigência à expressão conjunta.",
      },

      {
        symbol:
          "△",

        title:
          "O trígono",

        text:
          "Ele pode simbolizar uma capacidade natural de organizar, estabilizar e utilizar as qualidades do outro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "O sextil",

        text:
          "Ele representa potencial de construção, cooperação e progresso realista.",
      },

      {
        symbol:
          "□",

        title:
          "A quadratura",

        text:
          "Ela pode criar tensão entre o desejo de expressão e os limites, convidando ao desenvolvimento de paciência e domínio.",
      },

      {
        symbol:
          "☍",

        title:
          "A oposição",

        text:
          "Ela convida a equilibrar responsabilidades, limites pessoais e expectativas vindas do exterior.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",

      title:
        "Em qual signo e casa está seu Saturno?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir Saturno, Júpiter, Marte, Vênus e as posições dos seus principais planetas.",

      button:
        "Descobrir meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Saturno na astrologia",

      items: [
        {
          question:
            "O que Saturno representa na astrologia?",

          answer:
            "Saturno representa simbolicamente limites, responsabilidades, disciplina, paciência, maturidade e capacidade de construir algo sólido ao longo do tempo.",
        },

        {
          question:
            "Por que Saturno às vezes é considerado difícil?",

          answer:
            "Saturno está associado a atrasos, esforços e realidades que não podem ser evitadas. No entanto, seu papel simbólico não é apenas restritivo: ele também representa domínio, resistência e estabilidade.",
        },

        {
          question:
            "O que significa o signo de Saturno?",

          answer:
            "O signo de Saturno descreve a maneira como você aprende a desenvolver disciplina, responsabilidade e maturidade na sua vida.",
        },

        {
          question:
            "O que significa Saturno retrógrado no mapa natal?",

          answer:
            "Na interpretação astrológica, Saturno retrógrado no nascimento pode simbolizar uma relação mais interior com regras, responsabilidades, autoridade e sentimento de legitimidade.",
        },

        {
          question:
            "Saturno retrógrado é negativo?",

          answer:
            "Não. Esse período costuma ser interpretado como um convite para revisar estruturas, responsabilidades, limites e a maneira de exercer autoridade pessoal.",
        },

        {
          question:
            "Como descobrir meu signo de Saturno?",

          answer:
            "Você deve calcular seu mapa natal usando data, hora e local de nascimento para conhecer a posição exata de Saturno.",
        },

        {
          question:
            "Qual é a diferença entre Júpiter e Saturno?",

          answer:
            "Júpiter simboliza expansão, confiança e possibilidades, enquanto Saturno representa estrutura, limites, responsabilidade e construção duradoura.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
