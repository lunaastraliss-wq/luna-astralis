// i18n/pages/astrologie/jupiter.ts

import type {
  Locale,
} from "@/i18n/config";

export type JupiterCard = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
};

export type JupiterFunction = {
  number: string;
  title: string;
  text: string;
};

export type JupiterSign = {
  sign: string;
  symbol: string;
  text: string;
};

export type JupiterHouse = {
  house: string;
  text: string;
};

export type JupiterAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type JupiterFaqItem = {
  question: string;
  answer: string;
};

export type JupiterPageText = {
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

  growth: {
    title: string;
    cards: JupiterCard[];
  };

  functions: {
    title: string;
    cards: JupiterFunction[];
  };

  planets: {
    title: string;
    cards: JupiterCard[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  signs: JupiterSign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  houses: JupiterHouse[];

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

  aspects: JupiterAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: JupiterFaqItem[];
  };

  disclaimer: string;
};

export const JUPITER_TRANSLATIONS:
  Record<
    Locale,
    JupiterPageText
  > = {
  fr: {
    metadata: {
      title:
        "Jupiter en astrologie : expansion, chance et croissance | Luna Astralis",

      description:
        "Découvrez la signification de Jupiter en astrologie, son influence sur l’expansion, la confiance, les croyances et son expression dans les 12 signes du zodiaque.",

      ogTitle:
        "Jupiter en astrologie : expansion, confiance et croissance",

      ogDescription:
        "Comprenez le rôle de Jupiter dans votre thème natal et découvrez comment cette planète symbolise l’expansion, les possibilités, les croyances et la recherche de sens.",

      twitterTitle:
        "Jupiter en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Jupiter symbolise la croissance, la confiance, les possibilités et la recherche de sens.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Jupiter en astrologie : expansion, confiance et croissance",

      description:
        "Guide complet consacré au rôle de Jupiter dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "♃ Planètes et thème natal",

      title:
        "Jupiter en astrologie",

      lead:
        "Jupiter représente votre manière de grandir, d’élargir vos horizons, de développer votre confiance et de donner un sens plus vaste à vos expériences.",

      createChart:
        "Créer ma carte du ciel gratuite",

      seeSigns:
        "Voir les 12 signes",
    },

    introduction: {
      kicker:
        "Comprendre votre potentiel d’expansion",

      title:
        "Que représente Jupiter dans un thème astral ?",

      paragraphs: [
        "En astrologie, Jupiter symbolise l’expansion, la confiance, les croyances et la recherche de sens. Il décrit la manière dont une personne cherche à grandir, à apprendre et à dépasser ses limites habituelles.",

        "Sa position dans votre carte du ciel peut indiquer les domaines dans lesquels vous ressentez un besoin d’ouverture, de découverte ou de développement. Elle révèle également la manière dont vous construisez votre vision du monde.",

        "Jupiter est souvent associé à la chance, mais il ne garantit pas automatiquement la réussite. Il symbolise plutôt une tendance à reconnaître les possibilités et à les développer avec confiance, discernement et engagement.",
      ],
    },

    growth: {
      title:
        "Jupiter, la croissance et la confiance",

      cards: [
        {
          symbol:
            "♃",

          title:
            "Votre expansion",

          text:
            "Jupiter décrit la manière dont vous élargissez vos connaissances, vos expériences et votre vision de la vie.",
        },

        {
          symbol:
            "✦",

          title:
            "Votre confiance",

          text:
            "Il révèle ce qui vous aide à croire en vos possibilités et à avancer avec davantage d’optimisme.",
        },

        {
          symbol:
            "✧",

          title:
            "Votre recherche de sens",

          text:
            "Jupiter représente les croyances, les valeurs philosophiques et les idées qui donnent une direction plus vaste à votre existence.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions de Jupiter",

      cards: [
        {
          number:
            "01",

          title:
            "Explorer",

          text:
            "Jupiter encourage la découverte de nouvelles idées, cultures, connaissances et façons de comprendre le monde.",
        },

        {
          number:
            "02",

          title:
            "Grandir",

          text:
            "Il représente le besoin de dépasser ses limites habituelles et de développer un potentiel encore inexploité.",
        },

        {
          number:
            "03",

          title:
            "Transmettre",

          text:
            "Jupiter symbolise le partage des connaissances, l’enseignement et la capacité à inspirer les autres par une vision.",
        },

        {
          number:
            "04",

          title:
            "Donner du sens",

          text:
            "Il aide à relier les expériences à une philosophie personnelle, à des convictions ou à une compréhension plus large de la vie.",
        },
      ],
    },

    planets: {
      title:
        "Jupiter, Mars et Saturne",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "Il représente l’action, le désir, le courage et la manière dont vous poursuivez vos objectifs.",

          link:
            "Découvrir Mars",
        },

        {
          symbol:
            "♃",

          title:
            "Jupiter",

          text:
            "Il symbolise l’expansion, la confiance, les possibilités et la recherche d’un sens plus vaste.",
        },

        {
          symbol:
            "♄",

          title:
            "Saturne",

          text:
            "Il représente la structure, les responsabilités, les limites et la maturation progressive.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions de Jupiter",

      title:
        "Jupiter dans les 12 signes astrologiques",

      introduction:
        "Jupiter conserve toujours sa fonction de croissance, de confiance et d’expansion. Le signe dans lequel il se trouve décrit la manière particulière dont ces qualités s’expriment.",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Jupiter en Bélier favorise la croissance par l’initiative, le courage et l’indépendance. La personne peut développer sa confiance lorsqu’elle ose commencer, prendre des risques mesurés et ouvrir de nouvelles voies.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Jupiter en Taureau recherche une expansion stable, concrète et durable. La croissance peut passer par la patience, la fidélité aux valeurs, le rapport à la nature et la construction progressive de ressources.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Jupiter en Gémeaux favorise l’expansion par les idées, les échanges et l’apprentissage. La curiosité, les rencontres et la capacité à considérer plusieurs points de vue enrichissent la compréhension du monde.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Jupiter en Cancer développe la confiance à travers les liens affectifs, le foyer et le sentiment d’appartenance. La générosité, la protection et la transmission familiale peuvent devenir des sources d’épanouissement.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Jupiter en Lion favorise la croissance par la créativité, l’expression personnelle et la confiance en soi. La personne peut s’épanouir lorsqu’elle ose rayonner, inspirer et partager généreusement ses talents.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Jupiter en Vierge recherche le développement par le travail, l’amélioration et l’utilité. La croissance passe souvent par l’apprentissage de méthodes efficaces et la mise en pratique des connaissances.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Jupiter en Balance favorise l’expansion à travers les relations, la coopération et la justice. La personne peut grandir grâce au dialogue, aux partenariats et à la recherche d’un équilibre respectueux.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Jupiter en Scorpion encourage une croissance profonde et transformatrice. La personne peut développer sa force en explorant la psychologie, les vérités cachées et les expériences qui invitent à se renouveler.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Jupiter en Sagittaire favorise l’exploration, les études, les voyages et la recherche de sens. La personne s’épanouit souvent lorsqu’elle élargit ses horizons et partage une vision inspirante.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Jupiter en Capricorne recherche une croissance structurée, responsable et réaliste. Les possibilités se développent par la discipline, la persévérance et la construction d’objectifs à long terme.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Jupiter en Verseau favorise l’expansion par les idées nouvelles, les réseaux et les projets collectifs. La personne peut grandir lorsqu’elle contribue à une vision tournée vers l’avenir.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Jupiter en Poissons développe la confiance par l’intuition, la compassion et l’imagination. La croissance peut passer par la créativité, la spiritualité symbolique et l’ouverture aux dimensions sensibles de l’existence.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines de votre expansion",

      title:
        "Jupiter dans les 12 maisons astrologiques",

      introduction:
        "Le signe de Jupiter décrit votre manière de grandir, tandis que sa maison indique le domaine de vie dans lequel votre besoin d’expansion, de découverte et de confiance s’exprime le plus.",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Jupiter en Maison I peut renforcer la confiance, l’enthousiasme et le désir de grandir. La personne peut aborder la vie avec optimisme et chercher constamment à élargir ses possibilités.",
      },

      {
        house:
          "Maison II",

        text:
          "Jupiter en Maison II dirige l’expansion vers les ressources, les valeurs et la sécurité matérielle. La personne peut chercher à développer ses talents et à construire une relation généreuse avec l’abondance.",
      },

      {
        house:
          "Maison III",

        text:
          "Jupiter en Maison III favorise les apprentissages, les échanges, l’écriture et les déplacements. La personne peut posséder une grande curiosité et aimer transmettre ses connaissances.",
      },

      {
        house:
          "Maison IV",

        text:
          "Jupiter en Maison IV peut favoriser un sentiment d’expansion à travers le foyer, la famille et les racines. La personne cherche souvent à créer un environnement protecteur et accueillant.",
      },

      {
        house:
          "Maison V",

        text:
          "Jupiter en Maison V encourage la créativité, le plaisir, l’expression personnelle et la confiance. La personne peut s’épanouir par les arts, les loisirs, les projets passionnés et la transmission.",
      },

      {
        house:
          "Maison VI",

        text:
          "Jupiter en Maison VI dirige la croissance vers le travail, les méthodes et les habitudes quotidiennes. La personne peut progresser en développant des compétences utiles et une organisation plus efficace.",
      },

      {
        house:
          "Maison VII",

        text:
          "Jupiter en Maison VII favorise l’expansion à travers les relations, les partenariats et la coopération. La personne peut apprendre beaucoup grâce aux autres et rechercher des engagements enrichissants.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Jupiter en Maison VIII encourage une croissance profonde à travers les transformations, l’intimité et les ressources partagées. La personne peut développer une grande compréhension psychologique.",
      },

      {
        house:
          "Maison IX",

        text:
          "Jupiter en Maison IX renforce le besoin d’explorer, d’étudier et de rechercher un sens plus vaste. Les voyages, les cultures, la philosophie et les connaissances peuvent occuper une place centrale.",
      },

      {
        house:
          "Maison X",

        text:
          "Jupiter en Maison X peut soutenir l’ambition, la reconnaissance et le développement professionnel. La personne cherche souvent à construire une vocation porteuse de sens et d’influence.",
      },

      {
        house:
          "Maison XI",

        text:
          "Jupiter en Maison XI favorise l’expansion par les groupes, les réseaux et les projets collectifs. Les amitiés et les idéaux partagés peuvent ouvrir de nouvelles possibilités.",
      },

      {
        house:
          "Maison XII",

        text:
          "Jupiter en Maison XII développe une croissance intérieure, intuitive et discrète. La personne peut trouver du sens dans la solitude, la compassion, la spiritualité symbolique ou l’aide apportée aux autres.",
      },
    ],

    retrograde: {
      kicker:
        "Révision des croyances",

      title:
        "Que signifie Jupiter rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Jupiter semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un mouvement apparent lié aux positions relatives de la Terre et de Jupiter.",

        "Dans l’interprétation astrologique, Jupiter rétrograde est souvent associé à une recherche de sens plus intérieure. La personne peut avoir besoin de développer ses propres croyances plutôt que d’adopter celles de son environnement.",

        "Cette période peut inviter à revoir ses objectifs de croissance, sa définition de la réussite et les idées qui orientent ses choix. Elle ne signifie pas que les possibilités disparaissent.",
      ],

      cardSymbol:
        "♃℞",

      cardTitle:
        "Une invitation à approfondir",

      items: [
        "Revoir ses croyances",
        "Clarifier sa vision de la réussite",
        "Approfondir ses connaissances",
        "Repenser ses objectifs d’expansion",
        "Développer une confiance plus intérieure",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis de Jupiter",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Une vision expansive",

      strengths: [
        "Optimisme",
        "Confiance",
        "Curiosité intellectuelle",
        "Générosité",
        "Capacité à inspirer",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Préserver le sens de la mesure",

      challenges: [
        "Excès de confiance",
        "Promesses difficiles à tenir",
        "Dispersion",
        "Tendance à exagérer",
        "Difficulté à reconnaître les limites",
      ],
    },

    aspectsSection: {
      title:
        "Les aspects astrologiques de Jupiter",

      introduction:
        "Les aspects relient Jupiter aux autres planètes du thème natal. Ils apportent des nuances à votre manière de développer votre confiance, vos croyances et votre potentiel d’expansion.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Jupiter avec une autre planète et amplifie leur expression commune dans le thème natal.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une circulation naturelle entre la confiance de Jupiter et les qualités de l’autre planète.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel de développement, d’ouverture et de coopération constructive.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut créer une tension entre le désir d’expansion et la nécessité de développer davantage de discernement.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à équilibrer deux visions, deux croyances ou deux manières différentes de rechercher la croissance.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Jupiter ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Jupiter, votre Mars, votre Vénus, votre Soleil, votre Lune et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Jupiter en astrologie",

      items: [
        {
          question:
            "Que représente Jupiter en astrologie ?",

          answer:
            "Jupiter représente symboliquement l’expansion, la croissance, la confiance, les croyances, la recherche de sens et la capacité à reconnaître de nouvelles possibilités.",
        },

        {
          question:
            "Pourquoi Jupiter est-il associé à la chance ?",

          answer:
            "Jupiter est traditionnellement associé aux occasions, à l’ouverture et à la croissance. Cela ne signifie pas qu’il garantit des événements heureux, mais qu’il peut symboliser les domaines où une personne cherche à se développer.",
        },

        {
          question:
            "Que signifie le signe de Jupiter ?",

          answer:
            "Le signe de Jupiter décrit la manière dont vous développez votre confiance, élargissez vos connaissances et recherchez un sens plus vaste à vos expériences.",
        },

        {
          question:
            "Que signifie Jupiter rétrograde dans un thème natal ?",

          answer:
            "Dans l’interprétation astrologique, Jupiter rétrograde à la naissance peut symboliser une recherche de sens plus intérieure, personnelle et indépendante des croyances collectives.",
        },

        {
          question:
            "Jupiter rétrograde est-il négatif ?",

          answer:
            "Non. Cette période est plutôt interprétée comme une invitation à revoir ses croyances, ses objectifs de croissance et la manière dont on définit la réussite ou l’abondance.",
        },

        {
          question:
            "Comment connaître mon signe de Jupiter ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Jupiter.",
        },

        {
          question:
            "Quelle différence entre Jupiter et Saturne ?",

          answer:
            "Jupiter symbolise l’expansion, la confiance et les possibilités, tandis que Saturne représente davantage la structure, les limites, les responsabilités et la maturation.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Jupiter in Astrology: Expansion, Luck and Growth | Luna Astralis",

      description:
        "Discover the meaning of Jupiter in astrology, its influence on expansion, confidence, beliefs and its expression through the 12 zodiac signs.",

      ogTitle:
        "Jupiter in Astrology: Expansion, Confidence and Growth",

      ogDescription:
        "Understand Jupiter’s role in your birth chart and discover how this planet symbolizes expansion, possibilities, beliefs and the search for meaning.",

      twitterTitle:
        "Jupiter in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Jupiter symbolizes growth, confidence, possibilities and the search for meaning.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Jupiter in Astrology: Expansion, Confidence and Growth",

      description:
        "A complete guide to Jupiter’s role in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "♃ Planets and birth chart",

      title:
        "Jupiter in Astrology",

      lead:
        "Jupiter represents how you grow, broaden your horizons, develop confidence and give greater meaning to your experiences.",

      createChart:
        "Create my free birth chart",

      seeSigns:
        "See the 12 signs",
    },

    introduction: {
      kicker:
        "Understand your potential for expansion",

      title:
        "What does Jupiter represent in a birth chart?",

      paragraphs: [
        "In astrology, Jupiter symbolizes expansion, confidence, beliefs and the search for meaning. It describes how a person seeks to grow, learn and move beyond familiar limitations.",

        "Its position in your birth chart may indicate the areas in which you feel a need for openness, discovery or development. It also reveals how you construct your worldview.",

        "Jupiter is often associated with luck, but it does not automatically guarantee success. It more accurately symbolizes a tendency to recognize possibilities and develop them with confidence, discernment and commitment.",
      ],
    },

    growth: {
      title:
        "Jupiter, growth and confidence",

      cards: [
        {
          symbol:
            "♃",

          title:
            "Your expansion",

          text:
            "Jupiter describes how you broaden your knowledge, experiences and vision of life.",
        },

        {
          symbol:
            "✦",

          title:
            "Your confidence",

          text:
            "It reveals what helps you believe in your possibilities and move forward with greater optimism.",
        },

        {
          symbol:
            "✧",

          title:
            "Your search for meaning",

          text:
            "Jupiter represents the beliefs, philosophical values and ideas that give your life a broader direction.",
        },
      ],
    },

    functions: {
      title:
        "Jupiter’s main functions",

      cards: [
        {
          number:
            "01",

          title:
            "Explore",

          text:
            "Jupiter encourages the discovery of new ideas, cultures, knowledge and ways of understanding the world.",
        },

        {
          number:
            "02",

          title:
            "Grow",

          text:
            "It represents the need to move beyond familiar limits and develop potential that has not yet been used.",
        },

        {
          number:
            "03",

          title:
            "Share",

          text:
            "Jupiter symbolizes the sharing of knowledge, teaching and the ability to inspire others through a vision.",
        },

        {
          number:
            "04",

          title:
            "Create meaning",

          text:
            "It helps connect experiences with a personal philosophy, beliefs or a broader understanding of life.",
        },
      ],
    },

    planets: {
      title:
        "Jupiter, Mars and Saturn",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "It represents action, desire, courage and the way you pursue your goals.",

          link:
            "Discover Mars",
        },

        {
          symbol:
            "♃",

          title:
            "Jupiter",

          text:
            "It symbolizes expansion, confidence, possibilities and the search for greater meaning.",
        },

        {
          symbol:
            "♄",

          title:
            "Saturn",

          text:
            "It represents structure, responsibilities, limits and progressive maturity.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Jupiter",

      title:
        "Jupiter in the 12 zodiac signs",

      introduction:
        "Jupiter always retains its function of growth, confidence and expansion. The sign it occupies describes the particular way these qualities are expressed.",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Jupiter in Aries encourages growth through initiative, courage and independence. Confidence may develop when the person dares to begin, take measured risks and open new paths.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Jupiter in Taurus seeks stable, practical and lasting expansion. Growth may come through patience, loyalty to personal values, a relationship with nature and the gradual development of resources.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Jupiter in Gemini encourages expansion through ideas, exchange and learning. Curiosity, encounters and the ability to consider multiple perspectives enrich the understanding of the world.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Jupiter in Cancer develops confidence through emotional bonds, home and a sense of belonging. Generosity, protection and family transmission may become sources of fulfillment.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Jupiter in Leo encourages growth through creativity, self-expression and confidence. The person may flourish by daring to shine, inspire and generously share their talents.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Jupiter in Virgo seeks development through work, improvement and usefulness. Growth often comes through learning effective methods and applying knowledge in practical ways.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Jupiter in Libra encourages expansion through relationships, cooperation and justice. The person may grow through dialogue, partnerships and the search for respectful balance.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Jupiter in Scorpio encourages deep and transformative growth. Strength may develop through exploring psychology, hidden truths and experiences that invite renewal.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Jupiter in Sagittarius encourages exploration, study, travel and the search for meaning. The person often flourishes when broadening their horizons and sharing an inspiring vision.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Jupiter in Capricorn seeks structured, responsible and realistic growth. Possibilities develop through discipline, perseverance and the construction of long-term goals.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Jupiter in Aquarius encourages expansion through new ideas, networks and collective projects. The person may grow when contributing to a future-oriented vision.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Jupiter in Pisces develops confidence through intuition, compassion and imagination. Growth may come through creativity, symbolic spirituality and openness to the sensitive dimensions of existence.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of your expansion",

      title:
        "Jupiter in the 12 astrological houses",

      introduction:
        "Jupiter’s sign describes how you grow, while its house indicates the area of life in which your need for expansion, discovery and confidence is expressed most strongly.",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Jupiter in House I may strengthen confidence, enthusiasm and the desire to grow. The person may approach life optimistically and constantly seek to broaden their possibilities.",
      },

      {
        house:
          "House II",

        text:
          "Jupiter in House II directs expansion toward resources, values and material security. The person may seek to develop talents and build a generous relationship with abundance.",
      },

      {
        house:
          "House III",

        text:
          "Jupiter in House III encourages learning, exchange, writing and movement. The person may possess great curiosity and enjoy sharing knowledge.",
      },

      {
        house:
          "House IV",

        text:
          "Jupiter in House IV may encourage a sense of expansion through home, family and roots. The person often seeks to create a protective and welcoming environment.",
      },

      {
        house:
          "House V",

        text:
          "Jupiter in House V encourages creativity, pleasure, self-expression and confidence. The person may flourish through art, leisure, passionate projects and transmission.",
      },

      {
        house:
          "House VI",

        text:
          "Jupiter in House VI directs growth toward work, methods and daily habits. The person may progress by developing useful skills and more effective organization.",
      },

      {
        house:
          "House VII",

        text:
          "Jupiter in House VII encourages expansion through relationships, partnerships and cooperation. The person may learn greatly through others and seek enriching commitments.",
      },

      {
        house:
          "House VIII",

        text:
          "Jupiter in House VIII encourages deep growth through transformation, intimacy and shared resources. The person may develop strong psychological understanding.",
      },

      {
        house:
          "House IX",

        text:
          "Jupiter in House IX strengthens the need to explore, study and search for greater meaning. Travel, cultures, philosophy and knowledge may occupy a central place.",
      },

      {
        house:
          "House X",

        text:
          "Jupiter in House X may support ambition, recognition and professional development. The person often seeks to build a meaningful and influential vocation.",
      },

      {
        house:
          "House XI",

        text:
          "Jupiter in House XI encourages expansion through groups, networks and collective projects. Friendships and shared ideals may open new possibilities.",
      },

      {
        house:
          "House XII",

        text:
          "Jupiter in House XII develops inner, intuitive and discreet growth. The person may find meaning through solitude, compassion, symbolic spirituality or helping others.",
      },
    ],

    retrograde: {
      kicker:
        "Reconsidering beliefs",

      title:
        "What does retrograde Jupiter mean?",

      paragraphs: [
        "From Earth, Jupiter sometimes appears to slow down and temporarily move backward in the sky. This is an apparent movement caused by the relative positions of Earth and Jupiter.",

        "In astrological interpretation, retrograde Jupiter is often associated with a more inward search for meaning. A person may need to develop personal beliefs rather than adopting those of the surrounding environment.",

        "This period may invite a review of growth goals, definitions of success and the ideas that guide choices. It does not mean that possibilities disappear.",
      ],

      cardSymbol:
        "♃℞",

      cardTitle:
        "An invitation to go deeper",

      items: [
        "Review personal beliefs",
        "Clarify the meaning of success",
        "Deepen knowledge",
        "Reconsider expansion goals",
        "Develop greater inner confidence",
      ],
    },

    strengths: {
      title:
        "Jupiter’s strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "An expansive vision",

      strengths: [
        "Optimism",
        "Confidence",
        "Intellectual curiosity",
        "Generosity",
        "Ability to inspire",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Maintain a sense of proportion",

      challenges: [
        "Overconfidence",
        "Promises that are difficult to keep",
        "Scattered energy",
        "Tendency to exaggerate",
        "Difficulty recognizing limits",
      ],
    },

    aspectsSection: {
      title:
        "Jupiter’s astrological aspects",

      introduction:
        "Aspects connect Jupiter with the other planets in the birth chart. They add nuance to the way you develop confidence, beliefs and your potential for expansion.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Jupiter with another planet and amplifies their shared expression in the birth chart.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a natural flow between Jupiter’s confidence and the qualities of the other planet.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for development, openness and constructive cooperation.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may create tension between the desire for expansion and the need to develop greater discernment.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It invites balance between two visions, two beliefs or two different ways of seeking growth.",
      },
    ],

    cta: {
      kicker:
        "Discover your position",

      title:
        "Which sign and house contain your Jupiter?",

      text:
        "Generate your free birth chart to discover your Jupiter, Mars, Venus, Sun, Moon and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Jupiter in astrology",

      items: [
        {
          question:
            "What does Jupiter represent in astrology?",

          answer:
            "Jupiter symbolically represents expansion, growth, confidence, beliefs, the search for meaning and the ability to recognize new possibilities.",
        },

        {
          question:
            "Why is Jupiter associated with luck?",

          answer:
            "Jupiter is traditionally associated with opportunity, openness and growth. This does not mean it guarantees positive events, but it may symbolize the areas in which a person seeks development.",
        },

        {
          question:
            "What does Jupiter’s sign mean?",

          answer:
            "Jupiter’s sign describes how you develop confidence, broaden your knowledge and seek greater meaning in your experiences.",
        },

        {
          question:
            "What does retrograde Jupiter mean in a birth chart?",

          answer:
            "In astrological interpretation, natal retrograde Jupiter may symbolize a more inward, personal search for meaning that is independent of collective beliefs.",
        },

        {
          question:
            "Is retrograde Jupiter negative?",

          answer:
            "No. This period is generally interpreted as an invitation to review beliefs, growth goals and the way success or abundance is defined.",
        },

        {
          question:
            "How can I find my Jupiter sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine Jupiter’s exact position.",
        },

        {
          question:
            "What is the difference between Jupiter and Saturn?",

          answer:
            "Jupiter symbolizes expansion, confidence and possibilities, while Saturn is more closely associated with structure, limits, responsibilities and maturity.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Júpiter en astrología: expansión, suerte y crecimiento | Luna Astralis",

      description:
        "Descubre el significado de Júpiter en astrología, su influencia sobre la expansión, la confianza, las creencias y su expresión en los 12 signos del zodiaco.",

      ogTitle:
        "Júpiter en astrología: expansión, confianza y crecimiento",

      ogDescription:
        "Comprende el papel de Júpiter en tu carta natal y descubre cómo este planeta simboliza la expansión, las posibilidades, las creencias y la búsqueda de sentido.",

      twitterTitle:
        "Júpiter en astrología | Luna Astralis",

      twitterDescription:
        "Descubre cómo Júpiter simboliza el crecimiento, la confianza, las posibilidades y la búsqueda de sentido.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Júpiter en astrología: expansión, confianza y crecimiento",

      description:
        "Guía completa sobre el papel de Júpiter en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "♃ Planetas y carta natal",

      title:
        "Júpiter en astrología",

      lead:
        "Júpiter representa tu manera de crecer, ampliar tus horizontes, desarrollar tu confianza y dar un sentido más amplio a tus experiencias.",

      createChart:
        "Crear mi carta natal gratis",

      seeSigns:
        "Ver los 12 signos",
    },

    introduction: {
      kicker:
        "Comprender tu potencial de expansión",

      title:
        "¿Qué representa Júpiter en una carta natal?",

      paragraphs: [
        "En astrología, Júpiter simboliza la expansión, la confianza, las creencias y la búsqueda de sentido. Describe la manera en que una persona busca crecer, aprender y superar sus límites habituales.",

        "Su posición en tu carta natal puede indicar los ámbitos en los que sientes una necesidad de apertura, descubrimiento o desarrollo. También revela la manera en que construyes tu visión del mundo.",

        "Júpiter suele asociarse con la suerte, pero no garantiza automáticamente el éxito. Simboliza más bien una tendencia a reconocer las posibilidades y desarrollarlas con confianza, discernimiento y compromiso.",
      ],
    },

    growth: {
      title:
        "Júpiter, el crecimiento y la confianza",

      cards: [
        {
          symbol:
            "♃",

          title:
            "Tu expansión",

          text:
            "Júpiter describe la manera en que amplías tus conocimientos, tus experiencias y tu visión de la vida.",
        },

        {
          symbol:
            "✦",

          title:
            "Tu confianza",

          text:
            "Revela lo que te ayuda a creer en tus posibilidades y avanzar con mayor optimismo.",
        },

        {
          symbol:
            "✧",

          title:
            "Tu búsqueda de sentido",

          text:
            "Júpiter representa las creencias, los valores filosóficos y las ideas que dan una dirección más amplia a tu existencia.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Júpiter",

      cards: [
        {
          number:
            "01",

          title:
            "Explorar",

          text:
            "Júpiter favorece el descubrimiento de nuevas ideas, culturas, conocimientos y formas de comprender el mundo.",
        },

        {
          number:
            "02",

          title:
            "Crecer",

          text:
            "Representa la necesidad de superar los límites habituales y desarrollar un potencial todavía no utilizado.",
        },

        {
          number:
            "03",

          title:
            "Transmitir",

          text:
            "Júpiter simboliza la transmisión del conocimiento, la enseñanza y la capacidad de inspirar a los demás mediante una visión.",
        },

        {
          number:
            "04",

          title:
            "Dar sentido",

          text:
            "Ayuda a relacionar las experiencias con una filosofía personal, unas convicciones o una comprensión más amplia de la vida.",
        },
      ],
    },

    planets: {
      title:
        "Júpiter, Marte y Saturno",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Representa la acción, el deseo, el valor y la manera en que persigues tus objetivos.",

          link:
            "Descubrir Marte",
        },

        {
          symbol:
            "♃",

          title:
            "Júpiter",

          text:
            "Simboliza la expansión, la confianza, las posibilidades y la búsqueda de un sentido más amplio.",
        },

        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Representa la estructura, las responsabilidades, los límites y la maduración progresiva.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Júpiter",

      title:
        "Júpiter en los 12 signos astrológicos",

      introduction:
        "Júpiter siempre conserva su función de crecimiento, confianza y expansión. El signo en el que se encuentra describe la manera particular en que estas cualidades se expresan.",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Júpiter en Aries favorece el crecimiento mediante la iniciativa, el valor y la independencia. La persona puede desarrollar confianza cuando se atreve a comenzar, asumir riesgos moderados y abrir nuevos caminos.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Júpiter en Tauro busca una expansión estable, concreta y duradera. El crecimiento puede pasar por la paciencia, la fidelidad a los valores, la relación con la naturaleza y la construcción progresiva de recursos.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Júpiter en Géminis favorece la expansión mediante las ideas, los intercambios y el aprendizaje. La curiosidad, los encuentros y la capacidad de considerar varios puntos de vista enriquecen la comprensión del mundo.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Júpiter en Cáncer desarrolla la confianza a través de los vínculos afectivos, el hogar y el sentimiento de pertenencia. La generosidad, la protección y la transmisión familiar pueden convertirse en fuentes de realización.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Júpiter en Leo favorece el crecimiento mediante la creatividad, la expresión personal y la confianza en uno mismo. La persona puede realizarse cuando se atreve a brillar, inspirar y compartir generosamente sus talentos.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Júpiter en Virgo busca el desarrollo mediante el trabajo, la mejora y la utilidad. El crecimiento suele pasar por el aprendizaje de métodos eficaces y la aplicación práctica de los conocimientos.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Júpiter en Libra favorece la expansión a través de las relaciones, la cooperación y la justicia. La persona puede crecer mediante el diálogo, las asociaciones y la búsqueda de un equilibrio respetuoso.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Júpiter en Escorpio favorece un crecimiento profundo y transformador. La persona puede desarrollar su fuerza explorando la psicología, las verdades ocultas y las experiencias que invitan a renovarse.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Júpiter en Sagitario favorece la exploración, los estudios, los viajes y la búsqueda de sentido. La persona suele realizarse cuando amplía sus horizontes y comparte una visión inspiradora.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Júpiter en Capricornio busca un crecimiento estructurado, responsable y realista. Las posibilidades se desarrollan mediante la disciplina, la perseverancia y la construcción de objetivos a largo plazo.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Júpiter en Acuario favorece la expansión mediante las nuevas ideas, las redes y los proyectos colectivos. La persona puede crecer cuando contribuye a una visión orientada hacia el futuro.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Júpiter en Piscis desarrolla la confianza mediante la intuición, la compasión y la imaginación. El crecimiento puede pasar por la creatividad, la espiritualidad simbólica y la apertura a las dimensiones sensibles de la existencia.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos de tu expansión",

      title:
        "Júpiter en las 12 casas astrológicas",

      introduction:
        "El signo de Júpiter describe tu manera de crecer, mientras que su casa indica el ámbito de vida en el que tu necesidad de expansión, descubrimiento y confianza se expresa con mayor fuerza.",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Júpiter en la Casa I puede reforzar la confianza, el entusiasmo y el deseo de crecer. La persona puede abordar la vida con optimismo y buscar constantemente ampliar sus posibilidades.",
      },

      {
        house:
          "Casa II",

        text:
          "Júpiter en la Casa II dirige la expansión hacia los recursos, los valores y la seguridad material. La persona puede buscar desarrollar sus talentos y construir una relación generosa con la abundancia.",
      },

      {
        house:
          "Casa III",

        text:
          "Júpiter en la Casa III favorece el aprendizaje, los intercambios, la escritura y los desplazamientos. La persona puede poseer una gran curiosidad y disfrutar transmitiendo conocimientos.",
      },

      {
        house:
          "Casa IV",

        text:
          "Júpiter en la Casa IV puede favorecer un sentimiento de expansión a través del hogar, la familia y las raíces. La persona suele buscar crear un entorno protector y acogedor.",
      },

      {
        house:
          "Casa V",

        text:
          "Júpiter en la Casa V favorece la creatividad, el placer, la expresión personal y la confianza. La persona puede realizarse mediante las artes, el ocio, los proyectos apasionados y la transmisión.",
      },

      {
        house:
          "Casa VI",

        text:
          "Júpiter en la Casa VI dirige el crecimiento hacia el trabajo, los métodos y los hábitos cotidianos. La persona puede progresar desarrollando habilidades útiles y una organización más eficaz.",
      },

      {
        house:
          "Casa VII",

        text:
          "Júpiter en la Casa VII favorece la expansión mediante las relaciones, las asociaciones y la cooperación. La persona puede aprender mucho gracias a los demás y buscar compromisos enriquecedores.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Júpiter en la Casa VIII favorece un crecimiento profundo mediante las transformaciones, la intimidad y los recursos compartidos. La persona puede desarrollar una gran comprensión psicológica.",
      },

      {
        house:
          "Casa IX",

        text:
          "Júpiter en la Casa IX refuerza la necesidad de explorar, estudiar y buscar un sentido más amplio. Los viajes, las culturas, la filosofía y el conocimiento pueden ocupar un lugar central.",
      },

      {
        house:
          "Casa X",

        text:
          "Júpiter en la Casa X puede apoyar la ambición, el reconocimiento y el desarrollo profesional. La persona suele buscar construir una vocación con sentido e influencia.",
      },

      {
        house:
          "Casa XI",

        text:
          "Júpiter en la Casa XI favorece la expansión mediante los grupos, las redes y los proyectos colectivos. Las amistades y los ideales compartidos pueden abrir nuevas posibilidades.",
      },

      {
        house:
          "Casa XII",

        text:
          "Júpiter en la Casa XII desarrolla un crecimiento interior, intuitivo y discreto. La persona puede encontrar sentido en la soledad, la compasión, la espiritualidad simbólica o la ayuda a los demás.",
      },
    ],

    retrograde: {
      kicker:
        "Revisión de las creencias",

      title:
        "¿Qué significa Júpiter retrógrado?",

      paragraphs: [
        "Desde la Tierra, Júpiter a veces parece disminuir su velocidad y retroceder temporalmente en el cielo. Se trata de un movimiento aparente relacionado con las posiciones relativas de la Tierra y Júpiter.",

        "En la interpretación astrológica, Júpiter retrógrado suele asociarse con una búsqueda de sentido más interior. La persona puede necesitar desarrollar sus propias creencias en lugar de adoptar las de su entorno.",

        "Este período puede invitar a revisar los objetivos de crecimiento, la definición del éxito y las ideas que orientan las decisiones. No significa que las posibilidades desaparezcan.",
      ],

      cardSymbol:
        "♃℞",

      cardTitle:
        "Una invitación a profundizar",

      items: [
        "Revisar las creencias",
        "Aclarar la visión del éxito",
        "Profundizar los conocimientos",
        "Replantear los objetivos de expansión",
        "Desarrollar una confianza más interior",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Júpiter",

      strengthsKicker:
        "Fortalezas posibles",

      strengthsTitle:
        "Una visión expansiva",

      strengths: [
        "Optimismo",
        "Confianza",
        "Curiosidad intelectual",
        "Generosidad",
        "Capacidad para inspirar",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Conservar el sentido de la medida",

      challenges: [
        "Exceso de confianza",
        "Promesas difíciles de cumplir",
        "Dispersión",
        "Tendencia a exagerar",
        "Dificultad para reconocer los límites",
      ],
    },

    aspectsSection: {
      title:
        "Los aspectos astrológicos de Júpiter",

      introduction:
        "Los aspectos relacionan Júpiter con los demás planetas de la carta natal. Aportan matices a tu manera de desarrollar la confianza, las creencias y el potencial de expansión.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjunción",

        text:
          "Fusiona Júpiter con otro planeta y amplifica su expresión común en la carta natal.",
      },

      {
        symbol:
          "△",

        title:
          "El trígono",

        text:
          "Puede simbolizar una circulación natural entre la confianza de Júpiter y las cualidades del otro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "El sextil",

        text:
          "Representa un potencial de desarrollo, apertura y cooperación constructiva.",
      },

      {
        symbol:
          "□",

        title:
          "La cuadratura",

        text:
          "Puede crear tensión entre el deseo de expansión y la necesidad de desarrollar un mayor discernimiento.",
      },

      {
        symbol:
          "☍",

        title:
          "La oposición",

        text:
          "Invita a equilibrar dos visiones, dos creencias o dos maneras diferentes de buscar el crecimiento.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",

      title:
        "¿En qué signo y casa se encuentra tu Júpiter?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tu Júpiter, Marte, Venus, Sol, Luna y las posiciones de tus principales planetas.",

      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Júpiter en astrología",

      items: [
        {
          question:
            "¿Qué representa Júpiter en astrología?",

          answer:
            "Júpiter representa simbólicamente la expansión, el crecimiento, la confianza, las creencias, la búsqueda de sentido y la capacidad de reconocer nuevas posibilidades.",
        },

        {
          question:
            "¿Por qué Júpiter se asocia con la suerte?",

          answer:
            "Júpiter se asocia tradicionalmente con las oportunidades, la apertura y el crecimiento. Esto no significa que garantice acontecimientos felices, sino que puede simbolizar los ámbitos en los que una persona busca desarrollarse.",
        },

        {
          question:
            "¿Qué significa el signo de Júpiter?",

          answer:
            "El signo de Júpiter describe la manera en que desarrollas tu confianza, amplías tus conocimientos y buscas un sentido más amplio en tus experiencias.",
        },

        {
          question:
            "¿Qué significa Júpiter retrógrado en una carta natal?",

          answer:
            "En la interpretación astrológica, Júpiter retrógrado al nacer puede simbolizar una búsqueda de sentido más interior, personal e independiente de las creencias colectivas.",
        },

        {
          question:
            "¿Júpiter retrógrado es negativo?",

          answer:
            "No. Este período se interpreta más bien como una invitación a revisar las creencias, los objetivos de crecimiento y la manera de definir el éxito o la abundancia.",
        },

        {
          question:
            "¿Cómo conocer mi signo de Júpiter?",

          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Júpiter.",
        },

        {
          question:
            "¿Cuál es la diferencia entre Júpiter y Saturno?",

          answer:
            "Júpiter simboliza la expansión, la confianza y las posibilidades, mientras que Saturno representa en mayor medida la estructura, los límites, las responsabilidades y la maduración.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Jupiter in der Astrologie: Expansion, Glück und Wachstum | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung Jupiters in der Astrologie, seinen Einfluss auf Expansion, Vertrauen, Überzeugungen und seinen Ausdruck in den 12 Tierkreiszeichen.",

      ogTitle:
        "Jupiter in der Astrologie: Expansion, Vertrauen und Wachstum",

      ogDescription:
        "Verstehen Sie Jupiters Rolle im Geburtshoroskop und entdecken Sie, wie dieser Planet Expansion, Möglichkeiten, Überzeugungen und Sinnsuche symbolisiert.",

      twitterTitle:
        "Jupiter in der Astrologie | Luna Astralis",

      twitterDescription:
        "Entdecken Sie, wie Jupiter Wachstum, Vertrauen, Möglichkeiten und Sinnsuche symbolisiert.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Jupiter in der Astrologie: Expansion, Vertrauen und Wachstum",

      description:
        "Ein vollständiger Leitfaden zu Jupiters Rolle im Geburtshoroskop und seinem Ausdruck in den zwölf Zeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "♃ Planeten und Geburtshoroskop",

      title:
        "Jupiter in der Astrologie",

      lead:
        "Jupiter beschreibt, wie Sie wachsen, Ihren Horizont erweitern, Vertrauen entwickeln und Ihren Erfahrungen eine umfassendere Bedeutung geben.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      seeSigns:
        "Die 12 Zeichen ansehen",
    },

    introduction: {
      kicker:
        "Ihr Expansionspotenzial verstehen",

      title:
        "Was bedeutet Jupiter im Geburtshoroskop?",

      paragraphs: [
        "In der Astrologie symbolisiert Jupiter Expansion, Vertrauen, Überzeugungen und Sinnsuche. Er beschreibt, wie ein Mensch wachsen, lernen und vertraute Grenzen überschreiten möchte.",

        "Seine Position im Geburtshoroskop kann die Lebensbereiche anzeigen, in denen Sie Offenheit, Entdeckung oder Entwicklung suchen. Sie zeigt außerdem, wie Sie Ihr Weltbild aufbauen.",

        "Jupiter wird häufig mit Glück verbunden, garantiert jedoch nicht automatisch Erfolg. Er symbolisiert vielmehr die Tendenz, Möglichkeiten zu erkennen und sie mit Vertrauen, Urteilsvermögen und Engagement zu entwickeln.",
      ],
    },

    growth: {
      title:
        "Jupiter, Wachstum und Vertrauen",

      cards: [
        {
          symbol:
            "♃",

          title:
            "Ihre Expansion",

          text:
            "Jupiter beschreibt, wie Sie Ihr Wissen, Ihre Erfahrungen und Ihre Sicht auf das Leben erweitern.",
        },

        {
          symbol:
            "✦",

          title:
            "Ihr Vertrauen",

          text:
            "Er zeigt, was Ihnen hilft, an Ihre Möglichkeiten zu glauben und optimistischer voranzugehen.",
        },

        {
          symbol:
            "✧",

          title:
            "Ihre Sinnsuche",

          text:
            "Jupiter steht für Überzeugungen, philosophische Werte und Ideen, die Ihrem Leben eine umfassendere Richtung geben.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen Jupiters",

      cards: [
        {
          number:
            "01",

          title:
            "Erkunden",

          text:
            "Jupiter fördert die Entdeckung neuer Ideen, Kulturen, Kenntnisse und Möglichkeiten, die Welt zu verstehen.",
        },

        {
          number:
            "02",

          title:
            "Wachsen",

          text:
            "Er steht für das Bedürfnis, vertraute Grenzen zu überschreiten und bisher ungenutztes Potenzial zu entwickeln.",
        },

        {
          number:
            "03",

          title:
            "Vermitteln",

          text:
            "Jupiter symbolisiert Wissensvermittlung, Unterricht und die Fähigkeit, andere durch eine Vision zu inspirieren.",
        },

        {
          number:
            "04",

          title:
            "Sinn schaffen",

          text:
            "Er hilft, Erfahrungen mit einer persönlichen Philosophie, Überzeugungen oder einem umfassenderen Verständnis des Lebens zu verbinden.",
        },
      ],
    },

    planets: {
      title:
        "Jupiter, Mars und Saturn",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Mars",

          text:
            "Er steht für Handlung, Verlangen, Mut und die Art, wie Sie Ihre Ziele verfolgen.",

          link:
            "Mars entdecken",
        },

        {
          symbol:
            "♃",

          title:
            "Jupiter",

          text:
            "Er symbolisiert Expansion, Vertrauen, Möglichkeiten und die Suche nach umfassenderem Sinn.",
        },

        {
          symbol:
            "♄",

          title:
            "Saturn",

          text:
            "Er steht für Struktur, Verantwortung, Grenzen und fortschreitende Reife.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen Jupiters",

      title:
        "Jupiter in den 12 Tierkreiszeichen",

      introduction:
        "Jupiter behält stets seine Funktion von Wachstum, Vertrauen und Expansion. Das Zeichen, in dem er steht, beschreibt, wie diese Eigenschaften ausgedrückt werden.",
    },

    signs: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Jupiter im Widder fördert Wachstum durch Initiative, Mut und Unabhängigkeit. Vertrauen kann entstehen, wenn die Person den Anfang wagt, angemessene Risiken eingeht und neue Wege eröffnet.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Jupiter im Stier sucht stabile, konkrete und dauerhafte Expansion. Wachstum kann durch Geduld, Treue zu persönlichen Werten, Naturverbundenheit und den schrittweisen Aufbau von Ressourcen entstehen.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Jupiter in den Zwillingen fördert Expansion durch Ideen, Austausch und Lernen. Neugier, Begegnungen und die Fähigkeit, verschiedene Perspektiven zu betrachten, erweitern das Weltverständnis.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Jupiter im Krebs entwickelt Vertrauen durch emotionale Bindungen, Zuhause und Zugehörigkeit. Großzügigkeit, Schutz und familiäre Weitergabe können zu Quellen der Erfüllung werden.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Jupiter im Löwen fördert Wachstum durch Kreativität, Selbstausdruck und Selbstvertrauen. Die Person kann aufblühen, wenn sie zu strahlen wagt, andere inspiriert und ihre Talente großzügig teilt.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Jupiter in der Jungfrau sucht Entwicklung durch Arbeit, Verbesserung und Nützlichkeit. Wachstum entsteht häufig durch das Erlernen wirksamer Methoden und die praktische Anwendung von Wissen.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Jupiter in der Waage fördert Expansion durch Beziehungen, Zusammenarbeit und Gerechtigkeit. Die Person kann durch Dialog, Partnerschaften und das Streben nach respektvollem Gleichgewicht wachsen.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Jupiter im Skorpion fördert tiefes und transformierendes Wachstum. Stärke kann durch die Erforschung von Psychologie, verborgenen Wahrheiten und erneuernden Erfahrungen entstehen.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Jupiter im Schützen fördert Erkundung, Studium, Reisen und Sinnsuche. Die Person blüht häufig auf, wenn sie ihren Horizont erweitert und eine inspirierende Vision teilt.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Jupiter im Steinbock sucht strukturiertes, verantwortliches und realistisches Wachstum. Möglichkeiten entwickeln sich durch Disziplin, Ausdauer und langfristige Ziele.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Jupiter im Wassermann fördert Expansion durch neue Ideen, Netzwerke und kollektive Projekte. Die Person kann wachsen, wenn sie zu einer zukunftsorientierten Vision beiträgt.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Jupiter in den Fischen entwickelt Vertrauen durch Intuition, Mitgefühl und Fantasie. Wachstum kann durch Kreativität, symbolische Spiritualität und Offenheit für sensible Dimensionen des Lebens entstehen.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche Ihrer Expansion",

      title:
        "Jupiter in den 12 astrologischen Häusern",

      introduction:
        "Jupiters Zeichen beschreibt, wie Sie wachsen, während sein Haus den Lebensbereich zeigt, in dem Ihr Bedürfnis nach Expansion, Entdeckung und Vertrauen am stärksten zum Ausdruck kommt.",
    },

    houses: [
      {
        house:
          "Haus I",

        text:
          "Jupiter im ersten Haus kann Vertrauen, Begeisterung und Wachstumswillen stärken. Die Person kann optimistisch auf das Leben zugehen und ständig versuchen, ihre Möglichkeiten zu erweitern.",
      },

      {
        house:
          "Haus II",

        text:
          "Jupiter im zweiten Haus richtet Expansion auf Ressourcen, Werte und materielle Sicherheit. Die Person kann Talente entwickeln und eine großzügige Beziehung zu Wohlstand aufbauen.",
      },

      {
        house:
          "Haus III",

        text:
          "Jupiter im dritten Haus fördert Lernen, Austausch, Schreiben und Bewegung. Die Person kann sehr neugierig sein und Wissen gern weitergeben.",
      },

      {
        house:
          "Haus IV",

        text:
          "Jupiter im vierten Haus kann Expansion durch Zuhause, Familie und Wurzeln fördern. Die Person möchte häufig eine schützende und einladende Umgebung schaffen.",
      },

      {
        house:
          "Haus V",

        text:
          "Jupiter im fünften Haus fördert Kreativität, Freude, Selbstausdruck und Vertrauen. Die Person kann durch Kunst, Freizeit, leidenschaftliche Projekte und Weitergabe aufblühen.",
      },

      {
        house:
          "Haus VI",

        text:
          "Jupiter im sechsten Haus richtet Wachstum auf Arbeit, Methoden und tägliche Gewohnheiten. Die Person kann durch nützliche Fähigkeiten und bessere Organisation Fortschritte machen.",
      },

      {
        house:
          "Haus VII",

        text:
          "Jupiter im siebten Haus fördert Expansion durch Beziehungen, Partnerschaften und Zusammenarbeit. Die Person kann viel durch andere lernen und bereichernde Bindungen suchen.",
      },

      {
        house:
          "Haus VIII",

        text:
          "Jupiter im achten Haus fördert tiefes Wachstum durch Transformation, Intimität und gemeinsame Ressourcen. Die Person kann ein ausgeprägtes psychologisches Verständnis entwickeln.",
      },

      {
        house:
          "Haus IX",

        text:
          "Jupiter im neunten Haus verstärkt das Bedürfnis zu erkunden, zu studieren und umfassenderen Sinn zu suchen. Reisen, Kulturen, Philosophie und Wissen können zentral werden.",
      },

      {
        house:
          "Haus X",

        text:
          "Jupiter im zehnten Haus kann Ehrgeiz, Anerkennung und berufliche Entwicklung unterstützen. Die Person möchte häufig eine sinnvolle und einflussreiche Berufung aufbauen.",
      },

      {
        house:
          "Haus XI",

        text:
          "Jupiter im elften Haus fördert Expansion durch Gruppen, Netzwerke und kollektive Projekte. Freundschaften und gemeinsame Ideale können neue Möglichkeiten eröffnen.",
      },

      {
        house:
          "Haus XII",

        text:
          "Jupiter im zwölften Haus entwickelt inneres, intuitives und zurückhaltendes Wachstum. Die Person kann in Einsamkeit, Mitgefühl, symbolischer Spiritualität oder Hilfe für andere Sinn finden.",
      },
    ],

    retrograde: {
      kicker:
        "Überzeugungen überdenken",

      title:
        "Was bedeutet rückläufiger Jupiter?",

      paragraphs: [
        "Von der Erde aus scheint Jupiter manchmal langsamer zu werden und sich vorübergehend rückwärts zu bewegen. Dies ist eine scheinbare Bewegung, die mit den relativen Positionen von Erde und Jupiter zusammenhängt.",

        "In astrologischer Deutung wird rückläufiger Jupiter häufig mit einer innerlicheren Sinnsuche verbunden. Die Person kann eigene Überzeugungen entwickeln müssen, statt jene der Umgebung zu übernehmen.",

        "Diese Phase kann dazu einladen, Wachstumsziele, die Definition von Erfolg und richtungsweisende Ideen zu überprüfen. Sie bedeutet nicht, dass Möglichkeiten verschwinden.",
      ],

      cardSymbol:
        "♃℞",

      cardTitle:
        "Eine Einladung zur Vertiefung",

      items: [
        "Überzeugungen überprüfen",
        "Die eigene Vorstellung von Erfolg klären",
        "Wissen vertiefen",
        "Expansionsziele neu betrachten",
        "Inneres Vertrauen entwickeln",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen Jupiters",

      strengthsKicker:
        "Mögliche Stärken",

      strengthsTitle:
        "Eine expansive Vision",

      strengths: [
        "Optimismus",
        "Vertrauen",
        "Geistige Neugier",
        "Großzügigkeit",
        "Fähigkeit zu inspirieren",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Das richtige Maß bewahren",

      challenges: [
        "Übermäßiges Vertrauen",
        "Schwer einzuhaltende Versprechen",
        "Zerstreutheit",
        "Neigung zur Übertreibung",
        "Schwierigkeit, Grenzen zu erkennen",
      ],
    },

    aspectsSection: {
      title:
        "Jupiters astrologische Aspekte",

      introduction:
        "Aspekte verbinden Jupiter mit den anderen Planeten im Geburtshoroskop. Sie verleihen der Entwicklung von Vertrauen, Überzeugungen und Expansionspotenzial zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "Die Konjunktion",

        text:
          "Sie verbindet Jupiter mit einem anderen Planeten und verstärkt ihren gemeinsamen Ausdruck im Geburtshoroskop.",
      },

      {
        symbol:
          "△",

        title:
          "Das Trigon",

        text:
          "Es kann einen natürlichen Fluss zwischen Jupiters Vertrauen und den Eigenschaften des anderen Planeten symbolisieren.",
      },

      {
        symbol:
          "✶",

        title:
          "Das Sextil",

        text:
          "Es steht für Entwicklungspotenzial, Offenheit und konstruktive Zusammenarbeit.",
      },

      {
        symbol:
          "□",

        title:
          "Das Quadrat",

        text:
          "Es kann Spannung zwischen Expansionswunsch und der Notwendigkeit größeren Urteilsvermögens erzeugen.",
      },

      {
        symbol:
          "☍",

        title:
          "Die Opposition",

        text:
          "Sie fordert dazu auf, zwei Sichtweisen, Überzeugungen oder unterschiedliche Wege des Wachstums auszubalancieren.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",

      title:
        "In welchem Zeichen und Haus steht Ihr Jupiter?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Jupiter, Mars, Venus, Sonne, Mond und die Positionen Ihrer wichtigsten Planeten.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zu Jupiter in der Astrologie",

      items: [
        {
          question:
            "Was bedeutet Jupiter in der Astrologie?",

          answer:
            "Jupiter symbolisiert Expansion, Wachstum, Vertrauen, Überzeugungen, Sinnsuche und die Fähigkeit, neue Möglichkeiten zu erkennen.",
        },

        {
          question:
            "Warum wird Jupiter mit Glück verbunden?",

          answer:
            "Jupiter wird traditionell mit Gelegenheiten, Offenheit und Wachstum verbunden. Das bedeutet nicht, dass er glückliche Ereignisse garantiert, sondern dass er Lebensbereiche anzeigen kann, in denen Entwicklung gesucht wird.",
        },

        {
          question:
            "Was bedeutet Jupiters Zeichen?",

          answer:
            "Jupiters Zeichen beschreibt, wie Sie Vertrauen entwickeln, Ihr Wissen erweitern und umfassenderen Sinn in Ihren Erfahrungen suchen.",
        },

        {
          question:
            "Was bedeutet rückläufiger Jupiter im Geburtshoroskop?",

          answer:
            "Rückläufiger Jupiter bei der Geburt kann astrologisch eine innerlichere, persönliche Sinnsuche symbolisieren, die unabhängiger von kollektiven Überzeugungen ist.",
        },

        {
          question:
            "Ist rückläufiger Jupiter negativ?",

          answer:
            "Nein. Diese Phase wird eher als Einladung verstanden, Überzeugungen, Wachstumsziele und die eigene Definition von Erfolg oder Fülle zu überprüfen.",
        },

        {
          question:
            "Wie finde ich mein Jupiterzeichen?",

          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Datum, Uhrzeit und Geburtsort berechnen, um Jupiters genaue Position zu bestimmen.",
        },

        {
          question:
            "Was ist der Unterschied zwischen Jupiter und Saturn?",

          answer:
            "Jupiter symbolisiert Expansion, Vertrauen und Möglichkeiten, während Saturn stärker für Struktur, Grenzen, Verantwortung und Reife steht.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Giove in astrologia: espansione, fortuna e crescita | Luna Astralis",

      description:
        "Scopri il significato di Giove in astrologia, la sua influenza sull’espansione, la fiducia, le convinzioni e la sua espressione nei 12 segni zodiacali.",

      ogTitle:
        "Giove in astrologia: espansione, fiducia e crescita",

      ogDescription:
        "Comprendi il ruolo di Giove nel tema natale e scopri come questo pianeta simboleggia espansione, possibilità, convinzioni e ricerca di significato.",

      twitterTitle:
        "Giove in astrologia | Luna Astralis",

      twitterDescription:
        "Scopri come Giove simboleggia crescita, fiducia, possibilità e ricerca di significato.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Giove in astrologia: espansione, fiducia e crescita",

      description:
        "Guida completa al ruolo di Giove nel tema natale e alla sua espressione nei dodici segni e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "♃ Pianeti e tema natale",

      title:
        "Giove in astrologia",

      lead:
        "Giove rappresenta il modo in cui cresci, allarghi i tuoi orizzonti, sviluppi fiducia e attribuisci un significato più ampio alle tue esperienze.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      seeSigns:
        "Vedere i 12 segni",
    },

    introduction: {
      kicker:
        "Comprendere il tuo potenziale di espansione",

      title:
        "Che cosa rappresenta Giove nel tema natale?",

      paragraphs: [
        "In astrologia, Giove simboleggia l’espansione, la fiducia, le convinzioni e la ricerca di significato. Descrive il modo in cui una persona cerca di crescere, imparare e superare i propri limiti abituali.",

        "La sua posizione nel tema natale può indicare gli ambiti in cui senti un bisogno di apertura, scoperta o sviluppo. Rivela inoltre il modo in cui costruisci la tua visione del mondo.",

        "Giove viene spesso associato alla fortuna, ma non garantisce automaticamente il successo. Simboleggia piuttosto una tendenza a riconoscere le possibilità e svilupparle con fiducia, discernimento e impegno.",
      ],
    },

    growth: {
      title:
        "Giove, crescita e fiducia",

      cards: [
        {
          symbol:
            "♃",

          title:
            "La tua espansione",

          text:
            "Giove descrive il modo in cui ampli conoscenze, esperienze e visione della vita.",
        },

        {
          symbol:
            "✦",

          title:
            "La tua fiducia",

          text:
            "Rivela ciò che ti aiuta a credere nelle tue possibilità e ad avanzare con maggiore ottimismo.",
        },

        {
          symbol:
            "✧",

          title:
            "La tua ricerca di significato",

          text:
            "Giove rappresenta le convinzioni, i valori filosofici e le idee che danno una direzione più ampia alla tua esistenza.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Giove",

      cards: [
        {
          number:
            "01",

          title:
            "Esplorare",

          text:
            "Giove incoraggia la scoperta di nuove idee, culture, conoscenze e modi di comprendere il mondo.",
        },

        {
          number:
            "02",

          title:
            "Crescere",

          text:
            "Rappresenta il bisogno di superare i limiti abituali e sviluppare un potenziale ancora inutilizzato.",
        },

        {
          number:
            "03",

          title:
            "Trasmettere",

          text:
            "Giove simboleggia la condivisione della conoscenza, l’insegnamento e la capacità di ispirare gli altri attraverso una visione.",
        },

        {
          number:
            "04",

          title:
            "Dare significato",

          text:
            "Aiuta a collegare le esperienze a una filosofia personale, a convinzioni o a una comprensione più ampia della vita.",
        },
      ],
    },

    planets: {
      title:
        "Giove, Marte e Saturno",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Rappresenta l’azione, il desiderio, il coraggio e il modo in cui persegui i tuoi obiettivi.",

          link:
            "Scoprire Marte",
        },

        {
          symbol:
            "♃",

          title:
            "Giove",

          text:
            "Simboleggia l’espansione, la fiducia, le possibilità e la ricerca di un significato più ampio.",
        },

        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Rappresenta la struttura, le responsabilità, i limiti e la maturazione progressiva.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Giove",

      title:
        "Giove nei 12 segni zodiacali",

      introduction:
        "Giove conserva sempre la propria funzione di crescita, fiducia ed espansione. Il segno in cui si trova descrive il modo particolare in cui queste qualità si esprimono.",
    },

    signs: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Giove in Ariete favorisce la crescita attraverso iniziativa, coraggio e indipendenza. La persona può sviluppare fiducia quando osa iniziare, assumere rischi misurati e aprire nuove strade.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Giove in Toro cerca un’espansione stabile, concreta e duratura. La crescita può passare attraverso pazienza, fedeltà ai valori, rapporto con la natura e costruzione progressiva delle risorse.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "Giove in Gemelli favorisce l’espansione attraverso idee, scambi e apprendimento. Curiosità, incontri e capacità di considerare diversi punti di vista arricchiscono la comprensione del mondo.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Giove in Cancro sviluppa fiducia attraverso i legami affettivi, la casa e il senso di appartenenza. Generosità, protezione e trasmissione familiare possono diventare fonti di realizzazione.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Giove in Leone favorisce la crescita attraverso creatività, espressione personale e fiducia in sé. La persona può realizzarsi quando osa brillare, ispirare e condividere generosamente i propri talenti.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "Giove in Vergine cerca sviluppo attraverso lavoro, miglioramento e utilità. La crescita passa spesso dall’apprendimento di metodi efficaci e dall’applicazione pratica delle conoscenze.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "Giove in Bilancia favorisce l’espansione attraverso relazioni, cooperazione e giustizia. La persona può crescere grazie al dialogo, alle collaborazioni e alla ricerca di un equilibrio rispettoso.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Giove in Scorpione incoraggia una crescita profonda e trasformativa. La persona può sviluppare forza esplorando la psicologia, le verità nascoste e le esperienze che invitano al rinnovamento.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Giove in Sagittario favorisce esplorazione, studi, viaggi e ricerca di significato. La persona spesso si realizza quando amplia i propri orizzonti e condivide una visione ispiratrice.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Giove in Capricorno cerca una crescita strutturata, responsabile e realistica. Le possibilità si sviluppano attraverso disciplina, perseveranza e costruzione di obiettivi a lungo termine.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "Giove in Acquario favorisce l’espansione attraverso nuove idee, reti e progetti collettivi. La persona può crescere contribuendo a una visione orientata verso il futuro.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "Giove in Pesci sviluppa fiducia attraverso intuizione, compassione e immaginazione. La crescita può passare dalla creatività, dalla spiritualità simbolica e dall’apertura alle dimensioni sensibili dell’esistenza.",
      },
    ],

    housesSection: {
      kicker:
        "Gli ambiti della tua espansione",

      title:
        "Giove nelle 12 case astrologiche",

      introduction:
        "Il segno di Giove descrive il tuo modo di crescere, mentre la casa indica l’ambito della vita in cui il bisogno di espansione, scoperta e fiducia si esprime maggiormente.",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Giove in Casa I può rafforzare fiducia, entusiasmo e desiderio di crescere. La persona può affrontare la vita con ottimismo e cercare costantemente di ampliare le proprie possibilità.",
      },

      {
        house:
          "Casa II",

        text:
          "Giove in Casa II dirige l’espansione verso risorse, valori e sicurezza materiale. La persona può cercare di sviluppare talenti e costruire un rapporto generoso con l’abbondanza.",
      },

      {
        house:
          "Casa III",

        text:
          "Giove in Casa III favorisce apprendimento, scambi, scrittura e spostamenti. La persona può possedere grande curiosità e amare trasmettere le proprie conoscenze.",
      },

      {
        house:
          "Casa IV",

        text:
          "Giove in Casa IV può favorire un senso di espansione attraverso casa, famiglia e radici. La persona cerca spesso di creare un ambiente protettivo e accogliente.",
      },

      {
        house:
          "Casa V",

        text:
          "Giove in Casa V favorisce creatività, piacere, espressione personale e fiducia. La persona può realizzarsi attraverso arti, svaghi, progetti appassionanti e trasmissione.",
      },

      {
        house:
          "Casa VI",

        text:
          "Giove in Casa VI dirige la crescita verso lavoro, metodi e abitudini quotidiane. La persona può progredire sviluppando competenze utili e un’organizzazione più efficace.",
      },

      {
        house:
          "Casa VII",

        text:
          "Giove in Casa VII favorisce l’espansione attraverso relazioni, collaborazioni e cooperazione. La persona può imparare molto grazie agli altri e cercare impegni arricchenti.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Giove in Casa VIII incoraggia una crescita profonda attraverso trasformazioni, intimità e risorse condivise. La persona può sviluppare una grande comprensione psicologica.",
      },

      {
        house:
          "Casa IX",

        text:
          "Giove in Casa IX rafforza il bisogno di esplorare, studiare e cercare un significato più ampio. Viaggi, culture, filosofia e conoscenza possono occupare un ruolo centrale.",
      },

      {
        house:
          "Casa X",

        text:
          "Giove in Casa X può sostenere ambizione, riconoscimento e sviluppo professionale. La persona cerca spesso di costruire una vocazione significativa e influente.",
      },

      {
        house:
          "Casa XI",

        text:
          "Giove in Casa XI favorisce l’espansione attraverso gruppi, reti e progetti collettivi. Amicizie e ideali condivisi possono aprire nuove possibilità.",
      },

      {
        house:
          "Casa XII",

        text:
          "Giove in Casa XII sviluppa una crescita interiore, intuitiva e discreta. La persona può trovare significato nella solitudine, nella compassione, nella spiritualità simbolica o nell’aiuto agli altri.",
      },
    ],

    retrograde: {
      kicker:
        "Revisione delle convinzioni",

      title:
        "Che cosa significa Giove retrogrado?",

      paragraphs: [
        "Dalla Terra, Giove sembra talvolta rallentare e retrocedere temporaneamente nel cielo. Si tratta di un movimento apparente legato alle posizioni relative della Terra e di Giove.",

        "Nell’interpretazione astrologica, Giove retrogrado è spesso associato a una ricerca di significato più interiore. La persona può avere bisogno di sviluppare convinzioni proprie invece di adottare quelle dell’ambiente.",

        "Questo periodo può invitare a rivedere obiettivi di crescita, definizione del successo e idee che orientano le scelte. Non significa che le possibilità scompaiano.",
      ],

      cardSymbol:
        "♃℞",

      cardTitle:
        "Un invito ad approfondire",

      items: [
        "Rivedere le proprie convinzioni",
        "Chiarire la propria visione del successo",
        "Approfondire le conoscenze",
        "Ripensare gli obiettivi di espansione",
        "Sviluppare una fiducia più interiore",
      ],
    },

    strengths: {
      title:
        "I punti di forza e le sfide di Giove",

      strengthsKicker:
        "Possibili punti di forza",

      strengthsTitle:
        "Una visione espansiva",

      strengths: [
        "Ottimismo",
        "Fiducia",
        "Curiosità intellettuale",
        "Generosità",
        "Capacità di ispirare",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Conservare il senso della misura",

      challenges: [
        "Eccesso di fiducia",
        "Promesse difficili da mantenere",
        "Dispersione",
        "Tendenza a esagerare",
        "Difficoltà a riconoscere i limiti",
      ],
    },

    aspectsSection: {
      title:
        "Gli aspetti astrologici di Giove",

      introduction:
        "Gli aspetti collegano Giove agli altri pianeti del tema natale. Aggiungono sfumature al modo in cui sviluppi fiducia, convinzioni e potenziale di espansione.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La congiunzione",

        text:
          "Fonde Giove con un altro pianeta e amplifica la loro espressione comune nel tema natale.",
      },

      {
        symbol:
          "△",

        title:
          "Il trigono",

        text:
          "Può simboleggiare un flusso naturale tra la fiducia di Giove e le qualità dell’altro pianeta.",
      },

      {
        symbol:
          "✶",

        title:
          "Il sestile",

        text:
          "Rappresenta un potenziale di sviluppo, apertura e cooperazione costruttiva.",
      },

      {
        symbol:
          "□",

        title:
          "La quadratura",

        text:
          "Può creare tensione tra il desiderio di espansione e la necessità di sviluppare maggiore discernimento.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposizione",

        text:
          "Invita a equilibrare due visioni, due convinzioni o due modi differenti di cercare crescita.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",

      title:
        "In quale segno e casa si trova il tuo Giove?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire Giove, Marte, Venere, Sole, Luna e le posizioni dei principali pianeti.",

      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande su Giove in astrologia",

      items: [
        {
          question:
            "Che cosa rappresenta Giove in astrologia?",

          answer:
            "Giove rappresenta simbolicamente espansione, crescita, fiducia, convinzioni, ricerca di significato e capacità di riconoscere nuove possibilità.",
        },

        {
          question:
            "Perché Giove è associato alla fortuna?",

          answer:
            "Giove è tradizionalmente associato alle opportunità, all’apertura e alla crescita. Non significa che garantisca eventi felici, ma può simboleggiare gli ambiti in cui una persona cerca di svilupparsi.",
        },

        {
          question:
            "Che cosa significa il segno di Giove?",

          answer:
            "Il segno di Giove descrive il modo in cui sviluppi fiducia, ampli le tue conoscenze e cerchi un significato più ampio nelle esperienze.",
        },

        {
          question:
            "Che cosa significa Giove retrogrado nel tema natale?",

          answer:
            "Nell’interpretazione astrologica, Giove retrogrado alla nascita può simboleggiare una ricerca di significato più interiore, personale e indipendente dalle convinzioni collettive.",
        },

        {
          question:
            "Giove retrogrado è negativo?",

          answer:
            "No. Questo periodo viene piuttosto interpretato come un invito a rivedere convinzioni, obiettivi di crescita e il modo in cui si definiscono successo o abbondanza.",
        },

        {
          question:
            "Come conoscere il mio segno di Giove?",

          answer:
            "Devi calcolare il tuo tema natale utilizzando data, ora e luogo di nascita per conoscere la posizione esatta di Giove.",
        },

        {
          question:
            "Qual è la differenza tra Giove e Saturno?",

          answer:
            "Giove simboleggia espansione, fiducia e possibilità, mentre Saturno rappresenta maggiormente struttura, limiti, responsabilità e maturazione.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Júpiter na astrologia: expansão, sorte e crescimento | Luna Astralis",

      description:
        "Descubra o significado de Júpiter na astrologia, sua influência sobre a expansão, a confiança, as crenças e sua expressão nos 12 signos do zodíaco.",

      ogTitle:
        "Júpiter na astrologia: expansão, confiança e crescimento",

      ogDescription:
        "Compreenda o papel de Júpiter no seu mapa natal e descubra como este planeta simboliza expansão, possibilidades, crenças e busca de sentido.",

      twitterTitle:
        "Júpiter na astrologia | Luna Astralis",

      twitterDescription:
        "Descubra como Júpiter simboliza crescimento, confiança, possibilidades e busca de sentido.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Júpiter na astrologia: expansão, confiança e crescimento",

      description:
        "Guia completo sobre o papel de Júpiter no mapa natal e sua expressão nos doze signos e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "♃ Planetas e mapa natal",

      title:
        "Júpiter na astrologia",

      lead:
        "Júpiter representa sua maneira de crescer, ampliar horizontes, desenvolver confiança e atribuir um sentido mais amplo às suas experiências.",

      createChart:
        "Criar meu mapa astral grátis",

      seeSigns:
        "Ver os 12 signos",
    },

    introduction: {
      kicker:
        "Compreender seu potencial de expansão",

      title:
        "O que Júpiter representa no mapa natal?",

      paragraphs: [
        "Na astrologia, Júpiter simboliza expansão, confiança, crenças e busca de sentido. Ele descreve a maneira como uma pessoa procura crescer, aprender e ultrapassar seus limites habituais.",

        "Sua posição no mapa natal pode indicar as áreas em que você sente necessidade de abertura, descoberta ou desenvolvimento. Também revela a maneira como você constrói sua visão de mundo.",

        "Júpiter costuma ser associado à sorte, mas não garante automaticamente o sucesso. Ele simboliza, sobretudo, uma tendência a reconhecer possibilidades e desenvolvê-las com confiança, discernimento e compromisso.",
      ],
    },

    growth: {
      title:
        "Júpiter, crescimento e confiança",

      cards: [
        {
          symbol:
            "♃",

          title:
            "Sua expansão",

          text:
            "Júpiter descreve a maneira como você amplia conhecimentos, experiências e visão da vida.",
        },

        {
          symbol:
            "✦",

          title:
            "Sua confiança",

          text:
            "Ele revela o que ajuda você a acreditar em suas possibilidades e avançar com maior otimismo.",
        },

        {
          symbol:
            "✧",

          title:
            "Sua busca de sentido",

          text:
            "Júpiter representa crenças, valores filosóficos e ideias que dão uma direção mais ampla à sua existência.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Júpiter",

      cards: [
        {
          number:
            "01",

          title:
            "Explorar",

          text:
            "Júpiter incentiva a descoberta de novas ideias, culturas, conhecimentos e maneiras de compreender o mundo.",
        },

        {
          number:
            "02",

          title:
            "Crescer",

          text:
            "Ele representa a necessidade de ultrapassar limites habituais e desenvolver um potencial ainda não utilizado.",
        },

        {
          number:
            "03",

          title:
            "Transmitir",

          text:
            "Júpiter simboliza o compartilhamento de conhecimentos, o ensino e a capacidade de inspirar outras pessoas por meio de uma visão.",
        },

        {
          number:
            "04",

          title:
            "Dar sentido",

          text:
            "Ele ajuda a relacionar experiências a uma filosofia pessoal, crenças ou uma compreensão mais ampla da vida.",
        },
      ],
    },

    planets: {
      title:
        "Júpiter, Marte e Saturno",

      cards: [
        {
          symbol:
            "♂",

          title:
            "Marte",

          text:
            "Ele representa a ação, o desejo, a coragem e a maneira como você busca seus objetivos.",

          link:
            "Descobrir Marte",
        },

        {
          symbol:
            "♃",

          title:
            "Júpiter",

          text:
            "Ele simboliza expansão, confiança, possibilidades e busca de um sentido mais amplo.",
        },

        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Ele representa estrutura, responsabilidades, limites e amadurecimento progressivo.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Júpiter",

      title:
        "Júpiter nos 12 signos astrológicos",

      introduction:
        "Júpiter sempre conserva sua função de crescimento, confiança e expansão. O signo em que ele se encontra descreve a maneira particular como essas qualidades se expressam.",
    },

    signs: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Júpiter em Áries favorece o crescimento por meio da iniciativa, coragem e independência. A pessoa pode desenvolver confiança quando ousa começar, assumir riscos moderados e abrir novos caminhos.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Júpiter em Touro procura uma expansão estável, concreta e duradoura. O crescimento pode ocorrer por meio da paciência, fidelidade aos valores, relação com a natureza e construção gradual de recursos.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Júpiter em Gêmeos favorece a expansão por meio das ideias, trocas e aprendizagem. A curiosidade, os encontros e a capacidade de considerar vários pontos de vista enriquecem a compreensão do mundo.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Júpiter em Câncer desenvolve confiança através dos vínculos afetivos, do lar e do sentimento de pertencimento. A generosidade, a proteção e a transmissão familiar podem se tornar fontes de realização.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Júpiter em Leão favorece o crescimento por meio da criatividade, expressão pessoal e autoconfiança. A pessoa pode se realizar quando ousa brilhar, inspirar e compartilhar generosamente seus talentos.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Júpiter em Virgem procura desenvolvimento por meio do trabalho, aprimoramento e utilidade. O crescimento costuma ocorrer pelo aprendizado de métodos eficazes e aplicação prática dos conhecimentos.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Júpiter em Libra favorece a expansão através dos relacionamentos, da cooperação e da justiça. A pessoa pode crescer por meio do diálogo, das parcerias e da busca por um equilíbrio respeitoso.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Júpiter em Escorpião incentiva um crescimento profundo e transformador. A pessoa pode desenvolver força explorando a psicologia, verdades ocultas e experiências que convidam à renovação.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Júpiter em Sagitário favorece a exploração, os estudos, as viagens e a busca de sentido. A pessoa costuma se realizar ao ampliar horizontes e compartilhar uma visão inspiradora.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Júpiter em Capricórnio procura um crescimento estruturado, responsável e realista. As possibilidades se desenvolvem por meio da disciplina, perseverança e construção de objetivos de longo prazo.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Júpiter em Aquário favorece a expansão por meio de novas ideias, redes e projetos coletivos. A pessoa pode crescer quando contribui para uma visão voltada ao futuro.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Júpiter em Peixes desenvolve confiança através da intuição, compaixão e imaginação. O crescimento pode ocorrer por meio da criatividade, espiritualidade simbólica e abertura às dimensões sensíveis da existência.",
      },
    ],

    housesSection: {
      kicker:
        "As áreas da sua expansão",

      title:
        "Júpiter nas 12 casas astrológicas",

      introduction:
        "O signo de Júpiter descreve sua maneira de crescer, enquanto a casa indica a área da vida em que sua necessidade de expansão, descoberta e confiança se expressa com maior intensidade.",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Júpiter na Casa I pode fortalecer confiança, entusiasmo e desejo de crescer. A pessoa pode abordar a vida com otimismo e procurar constantemente ampliar suas possibilidades.",
      },

      {
        house:
          "Casa II",

        text:
          "Júpiter na Casa II direciona a expansão para recursos, valores e segurança material. A pessoa pode procurar desenvolver talentos e construir uma relação generosa com a abundância.",
      },

      {
        house:
          "Casa III",

        text:
          "Júpiter na Casa III favorece aprendizagem, trocas, escrita e deslocamentos. A pessoa pode possuir grande curiosidade e gostar de transmitir conhecimentos.",
      },

      {
        house:
          "Casa IV",

        text:
          "Júpiter na Casa IV pode favorecer um sentimento de expansão por meio do lar, da família e das raízes. A pessoa costuma procurar criar um ambiente protetor e acolhedor.",
      },

      {
        house:
          "Casa V",

        text:
          "Júpiter na Casa V favorece criatividade, prazer, expressão pessoal e confiança. A pessoa pode se realizar através das artes, lazer, projetos apaixonantes e transmissão.",
      },

      {
        house:
          "Casa VI",

        text:
          "Júpiter na Casa VI direciona o crescimento para o trabalho, os métodos e os hábitos cotidianos. A pessoa pode progredir desenvolvendo habilidades úteis e uma organização mais eficaz.",
      },

      {
        house:
          "Casa VII",

        text:
          "Júpiter na Casa VII favorece a expansão através dos relacionamentos, das parcerias e da cooperação. A pessoa pode aprender muito com os outros e procurar compromissos enriquecedores.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Júpiter na Casa VIII incentiva um crescimento profundo por meio das transformações, intimidade e recursos compartilhados. A pessoa pode desenvolver grande compreensão psicológica.",
      },

      {
        house:
          "Casa IX",

        text:
          "Júpiter na Casa IX reforça a necessidade de explorar, estudar e buscar um sentido mais amplo. Viagens, culturas, filosofia e conhecimento podem ocupar um lugar central.",
      },

      {
        house:
          "Casa X",

        text:
          "Júpiter na Casa X pode apoiar ambição, reconhecimento e desenvolvimento profissional. A pessoa costuma procurar construir uma vocação significativa e influente.",
      },

      {
        house:
          "Casa XI",

        text:
          "Júpiter na Casa XI favorece a expansão por meio de grupos, redes e projetos coletivos. Amizades e ideais compartilhados podem abrir novas possibilidades.",
      },

      {
        house:
          "Casa XII",

        text:
          "Júpiter na Casa XII desenvolve um crescimento interior, intuitivo e discreto. A pessoa pode encontrar sentido na solidão, compaixão, espiritualidade simbólica ou ajuda aos outros.",
      },
    ],

    retrograde: {
      kicker:
        "Revisão das crenças",

      title:
        "O que significa Júpiter retrógrado?",

      paragraphs: [
        "A partir da Terra, Júpiter às vezes parece desacelerar e se mover temporariamente para trás no céu. Trata-se de um movimento aparente ligado às posições relativas da Terra e de Júpiter.",

        "Na interpretação astrológica, Júpiter retrógrado costuma ser associado a uma busca de sentido mais interior. A pessoa pode precisar desenvolver suas próprias crenças em vez de adotar as do ambiente.",

        "Esse período pode convidar à revisão dos objetivos de crescimento, da definição de sucesso e das ideias que orientam as escolhas. Isso não significa que as possibilidades desapareçam.",
      ],

      cardSymbol:
        "♃℞",

      cardTitle:
        "Um convite para aprofundar",

      items: [
        "Rever as crenças",
        "Esclarecer a visão de sucesso",
        "Aprofundar os conhecimentos",
        "Repensar os objetivos de expansão",
        "Desenvolver uma confiança mais interior",
      ],
    },

    strengths: {
      title:
        "As forças e os desafios de Júpiter",

      strengthsKicker:
        "Possíveis forças",

      strengthsTitle:
        "Uma visão expansiva",

      strengths: [
        "Otimismo",
        "Confiança",
        "Curiosidade intelectual",
        "Generosidade",
        "Capacidade de inspirar",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "Preservar o senso de medida",

      challenges: [
        "Excesso de confiança",
        "Promessas difíceis de cumprir",
        "Dispersão",
        "Tendência a exagerar",
        "Dificuldade para reconhecer limites",
      ],
    },

    aspectsSection: {
      title:
        "Os aspectos astrológicos de Júpiter",

      introduction:
        "Os aspectos ligam Júpiter aos outros planetas do mapa natal. Eles acrescentam nuances à sua maneira de desenvolver confiança, crenças e potencial de expansão.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "A conjunção",

        text:
          "Ela funde Júpiter com outro planeta e amplia sua expressão conjunta no mapa natal.",
      },

      {
        symbol:
          "△",

        title:
          "O trígono",

        text:
          "Ele pode simbolizar uma circulação natural entre a confiança de Júpiter e as qualidades do outro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "O sextil",

        text:
          "Ele representa um potencial de desenvolvimento, abertura e cooperação construtiva.",
      },

      {
        symbol:
          "□",

        title:
          "A quadratura",

        text:
          "Ela pode criar tensão entre o desejo de expansão e a necessidade de desenvolver maior discernimento.",
      },

      {
        symbol:
          "☍",

        title:
          "A oposição",

        text:
          "Ela convida a equilibrar duas visões, duas crenças ou duas maneiras diferentes de buscar crescimento.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",

      title:
        "Em qual signo e casa está seu Júpiter?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir Júpiter, Marte, Vênus, Sol, Lua e as posições dos seus principais planetas.",

      button:
        "Descobrir meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Júpiter na astrologia",

      items: [
        {
          question:
            "O que Júpiter representa na astrologia?",

          answer:
            "Júpiter representa simbolicamente expansão, crescimento, confiança, crenças, busca de sentido e capacidade de reconhecer novas possibilidades.",
        },

        {
          question:
            "Por que Júpiter é associado à sorte?",

          answer:
            "Júpiter é tradicionalmente associado às oportunidades, à abertura e ao crescimento. Isso não significa que garanta acontecimentos felizes, mas pode simbolizar as áreas em que a pessoa procura se desenvolver.",
        },

        {
          question:
            "O que significa o signo de Júpiter?",

          answer:
            "O signo de Júpiter descreve a maneira como você desenvolve confiança, amplia conhecimentos e busca um sentido mais amplo para suas experiências.",
        },

        {
          question:
            "O que significa Júpiter retrógrado no mapa natal?",

          answer:
            "Na interpretação astrológica, Júpiter retrógrado no nascimento pode simbolizar uma busca de sentido mais interior, pessoal e independente das crenças coletivas.",
        },

        {
          question:
            "Júpiter retrógrado é negativo?",

          answer:
            "Não. Esse período costuma ser interpretado como um convite para rever crenças, objetivos de crescimento e a maneira de definir sucesso ou abundância.",
        },

        {
          question:
            "Como descobrir meu signo de Júpiter?",

          answer:
            "Você deve calcular seu mapa natal usando data, hora e local de nascimento para conhecer a posição exata de Júpiter.",
        },

        {
          question:
            "Qual é a diferença entre Júpiter e Saturno?",

          answer:
            "Júpiter simboliza expansão, confiança e possibilidades, enquanto Saturno representa mais a estrutura, os limites, as responsabilidades e o amadurecimento.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
