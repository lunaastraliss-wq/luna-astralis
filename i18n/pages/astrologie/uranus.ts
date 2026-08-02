// i18n/pages/astrologie/uranus.ts

import type {
  Locale,
} from "@/i18n/config";

export type UranusSign = {
  sign: string;
  symbol: string;
  text: string;
};

export type UranusHouse = {
  house: string;
  text: string;
};

export type UranusInfoCard = {
  symbol: string;
  title: string;
  text: string;
};

export type UranusFunctionCard = {
  number: string;
  title: string;
  text: string;
};

export type UranusPillar = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
};

export type UranusAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type UranusFaqItem = {
  question: string;
  answer: string;
};

export type UranusPageText = {
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

  innovation: {
    title: string;
    cards: UranusInfoCard[];
  };

  functions: {
    title: string;
    cards: UranusFunctionCard[];
  };

  planets: {
    title: string;
    cards: UranusPillar[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  signs: UranusSign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  houses: UranusHouse[];

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

  aspects: UranusAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: UranusFaqItem[];
  };

  disclaimer: string;
};

export const URANUS_TRANSLATIONS:
  Record<
    Locale,
    UranusPageText
  > = {
  fr: {
    metadata: {
      title:
        "Uranus en astrologie : liberté, changement et innovation | Luna Astralis",

      description:
        "Découvrez la signification d’Uranus en astrologie, son influence sur la liberté, les changements, l’originalité et son expression dans les 12 signes du zodiaque.",

      ogTitle:
        "Uranus en astrologie : liberté, innovation et changement",

      ogDescription:
        "Comprenez le rôle d’Uranus dans votre thème natal et découvrez comment cette planète symbolise l’indépendance, l’éveil, l’originalité et les transformations soudaines.",

      twitterTitle:
        "Uranus en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Uranus symbolise la liberté, l’innovation, l’indépendance et les changements inattendus.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Uranus en astrologie : liberté, changement et innovation",

      description:
        "Guide complet consacré au rôle d’Uranus dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "♅ Planètes et thème natal",

      title:
        "Uranus en astrologie",

      lead:
        "Uranus représente votre besoin de liberté, d’indépendance et de changement, ainsi que la manière dont vous innovez et refusez les modèles devenus trop rigides.",

      createChart:
        "Créer ma carte du ciel gratuite",

      viewSigns:
        "Voir les 12 signes",
    },

    meaning: {
      kicker:
        "Comprendre votre besoin de liberté",

      title:
        "Que représente Uranus dans un thème astral ?",

      paragraphs: [
        "En astrologie, Uranus symbolise la liberté, l’innovation, l’indépendance et les changements rapides. Il décrit la manière dont une personne cherche à sortir des modèles trop limitants et à exprimer son originalité.",

        "Sa position dans votre carte du ciel peut révéler les domaines dans lesquels vous ressentez un besoin de renouvellement, d’autonomie ou de transformation. Elle peut aussi montrer la façon dont vous réagissez aux changements inattendus.",

        "Uranus ne symbolise pas uniquement la rupture. Il représente également l’éveil, l’inventivité et la capacité à imaginer des solutions différentes lorsque les anciennes structures ne répondent plus aux besoins présents.",
      ],
    },

    innovation: {
      title:
        "Uranus, la liberté et l’innovation",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Votre indépendance",

          text:
            "Uranus décrit les domaines dans lesquels vous avez besoin de penser, de choisir et d’agir selon vos propres règles.",
        },

        {
          symbol:
            "⚡",

          title:
            "Votre capacité de changement",

          text:
            "Il révèle votre manière de rompre avec les habitudes devenues trop étroites et d’ouvrir un nouveau chemin.",
        },

        {
          symbol:
            "✦",

          title:
            "Votre originalité",

          text:
            "Uranus montre comment vos idées singulières peuvent contribuer à renouveler votre vie ou votre environnement.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions d’Uranus",

      cards: [
        {
          number:
            "01",

          title:
            "Libérer",

          text:
            "Uranus invite à se détacher des modèles, des habitudes et des contraintes qui empêchent une expression plus authentique.",
        },

        {
          number:
            "02",

          title:
            "Innover",

          text:
            "Il symbolise la capacité à imaginer des solutions nouvelles et à créer des méthodes différentes.",
        },

        {
          number:
            "03",

          title:
            "Réveiller",

          text:
            "Uranus peut provoquer des prises de conscience rapides qui modifient profondément la manière de comprendre une situation.",
        },

        {
          number:
            "04",

          title:
            "Transformer",

          text:
            "Il pousse à moderniser ce qui est devenu trop rigide et à construire une réalité plus cohérente avec l’évolution personnelle.",
        },
      ],
    },

    planets: {
      title:
        "Uranus, Saturne et Neptune",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturne",

          text:
            "Il représente les structures, les limites, la discipline et la construction durable.",

          link:
            "/astrologie/saturne",

          linkLabel:
            "Découvrir Saturne",
        },

        {
          symbol:
            "♅",

          title:
            "Uranus",

          text:
            "Il symbolise la liberté, l’innovation, l’éveil et les changements qui brisent les anciennes structures.",
        },

        {
          symbol:
            "♆",

          title:
            "Neptune",

          text:
            "Il représente l’intuition, l’imagination, la compassion et les perceptions subtiles.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions d’Uranus",

      title:
        "Uranus dans les 12 signes astrologiques",

      introduction:
        "Uranus conserve toujours sa fonction de liberté, d’innovation et de transformation. Le signe dans lequel il se trouve décrit la manière dont une génération cherche à renouveler certains modèles.",

      titlePrefix:
        "Uranus en",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Uranus en Bélier favorise une indépendance directe, audacieuse et spontanée. Cette génération cherche à ouvrir de nouvelles voies, à agir rapidement et à remettre en question les modèles qui limitent l’initiative personnelle.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Uranus en Taureau transforme progressivement le rapport aux ressources, aux valeurs et à la sécurité. Cette position invite à inventer de nouvelles façons de construire une stabilité plus libre et plus adaptée.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Uranus en Gémeaux stimule les idées nouvelles, les échanges rapides et les innovations liées à la communication. Cette position favorise une pensée originale, mobile et capable de relier des concepts inattendus.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Uranus en Cancer remet en question les modèles familiaux, les traditions et les manières de créer un sentiment d’appartenance. La liberté peut se construire par une définition plus personnelle du foyer et de la sécurité émotionnelle.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Uranus en Lion favorise une expression créative originale et indépendante. Cette position pousse à rayonner autrement, à inventer de nouvelles formes d’expression et à refuser les rôles trop rigides.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Uranus en Vierge transforme les méthodes, les habitudes et l’organisation du travail. Cette position recherche des solutions nouvelles, efficaces et capables d’améliorer concrètement le quotidien.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Uranus en Balance remet en question les modèles relationnels et les conventions sociales. Cette position favorise des partenariats plus libres, égalitaires et respectueux de l’individualité de chacun.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Uranus en Scorpion intensifie le besoin de transformation et de vérité. Cette position peut bouleverser les rapports au pouvoir, à l’intimité et aux attachements afin de libérer ce qui était profondément enfoui.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Uranus en Sagittaire favorise l’exploration de nouvelles croyances, cultures et visions du monde. Cette position remet en question les certitudes et encourage une recherche de sens plus libre et indépendante.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Uranus en Capricorne transforme les structures, les institutions et les modèles de réussite. Cette position cherche à moderniser ce qui est devenu rigide tout en construisant des systèmes plus adaptés à l’avenir.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Uranus en Verseau renforce l’innovation, l’indépendance et la vision collective. Cette position favorise les idées progressistes, les réseaux et les changements capables d’influencer durablement la société.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Uranus en Poissons transforme l’imagination, l’intuition et la sensibilité collective. Cette position peut ouvrir de nouvelles perceptions et encourager des formes originales de créativité ou de spiritualité symbolique.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines de votre liberté",

      title:
        "Uranus dans les 12 maisons astrologiques",

      introduction:
        "Le signe d’Uranus décrit une transformation collective, tandis que sa maison indique le domaine de vie dans lequel votre besoin de liberté, de changement et d’originalité s’exprime le plus personnellement.",

      titlePrefix:
        "Uranus en",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Uranus en Maison I renforce l’indépendance, l’originalité et le besoin de vivre selon ses propres règles. La personne peut se présenter de manière singulière et changer régulièrement sa façon d’affirmer son identité.",
      },

      {
        house:
          "Maison II",

        text:
          "Uranus en Maison II transforme le rapport à l’argent, aux ressources et aux valeurs. La personne peut rechercher des formes de sécurité plus flexibles et développer des talents dans des domaines innovants.",
      },

      {
        house:
          "Maison III",

        text:
          "Uranus en Maison III donne une pensée rapide, inventive et indépendante. La communication peut être originale, surprenante et tournée vers des idées nouvelles ou peu conventionnelles.",
      },

      {
        house:
          "Maison IV",

        text:
          "Uranus en Maison IV peut rendre la vie familiale ou résidentielle changeante. La personne cherche à créer un foyer qui respecte sa liberté et peut remettre en question certains modèles hérités.",
      },

      {
        house:
          "Maison V",

        text:
          "Uranus en Maison V favorise une créativité originale, des passions soudaines et une expression personnelle imprévisible. La personne recherche souvent des expériences stimulantes et non conventionnelles.",
      },

      {
        house:
          "Maison VI",

        text:
          "Uranus en Maison VI transforme le travail, les habitudes et l’organisation quotidienne. La personne peut avoir besoin de liberté dans ses méthodes et préférer des environnements souples ou innovants.",
      },

      {
        house:
          "Maison VII",

        text:
          "Uranus en Maison VII rend les relations dynamiques, originales et parfois imprévisibles. La personne recherche un partenaire capable de respecter son indépendance et son besoin d’espace.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Uranus en Maison VIII peut provoquer des transformations soudaines dans l’intimité, les ressources partagées ou la psychologie. La personne cherche à se libérer des attachements devenus limitants.",
      },

      {
        house:
          "Maison IX",

        text:
          "Uranus en Maison IX favorise une vision du monde indépendante et novatrice. Les voyages, les études et la découverte de nouvelles philosophies peuvent provoquer de véritables éveils.",
      },

      {
        house:
          "Maison X",

        text:
          "Uranus en Maison X peut donner un parcours professionnel atypique, changeant ou innovant. La personne cherche souvent à construire une vocation qui lui permet de préserver sa liberté.",
      },

      {
        house:
          "Maison XI",

        text:
          "Uranus en Maison XI renforce le lien avec les groupes, les réseaux et les projets collectifs. La personne peut contribuer à des idées nouvelles et attirer des amitiés originales ou indépendantes.",
      },

      {
        house:
          "Maison XII",

        text:
          "Uranus en Maison XII peut produire des prises de conscience soudaines et une vie intérieure très active. La personne peut ressentir un besoin profond de se libérer de mécanismes inconscients ou de peurs invisibles.",
      },
    ],

    retrograde: {
      kicker:
        "Révision du besoin de liberté",

      title:
        "Que signifie Uranus rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Uranus semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un mouvement apparent lié aux positions relatives de la Terre et d’Uranus.",

        "Dans l’interprétation astrologique, Uranus rétrograde est souvent associé à une indépendance plus intérieure. La personne peut remettre profondément en question les normes sans toujours exprimer immédiatement cette différence.",

        "Cette période peut inviter à réfléchir aux changements devenus nécessaires, aux habitudes qui limitent la liberté et à la manière d’introduire du renouveau sans agir uniquement par impulsion.",
      ],

      symbol:
        "♅℞",

      cardTitle:
        "Une invitation à se réinventer",

      points: [
        "Repenser son besoin de liberté",
        "Identifier les habitudes limitantes",
        "Clarifier les changements nécessaires",
        "Explorer de nouvelles solutions",
        "Affirmer son originalité avec conscience",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis d’Uranus",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Une vision libre et novatrice",

      strengths: [
        "Originalité",
        "Indépendance",
        "Inventivité",
        "Adaptation au changement",
        "Capacité à remettre en question",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Stabiliser le besoin de rupture",

      challenges: [
        "Impatience",
        "Rébellion automatique",
        "Changements trop brusques",
        "Difficulté avec les contraintes",
        "Instabilité",
      ],
    },

    aspectsSection: {
      title:
        "Les aspects astrologiques d’Uranus",

      introduction:
        "Les aspects relient Uranus aux autres planètes du thème natal. Ils apportent des nuances à votre besoin de liberté, à votre originalité et à votre manière de vivre les changements.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Uranus avec une autre planète et rend son expression plus originale, indépendante ou imprévisible.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une capacité naturelle à innover et à accepter les changements avec souplesse.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel de renouvellement, d’ouverture et d’expérimentation constructive.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut créer une tension entre le besoin de stabilité et le désir de changement ou d’indépendance.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à équilibrer la liberté personnelle avec les attentes, les besoins ou les engagements extérieurs.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Uranus ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Uranus, votre Saturne, votre Jupiter, votre Mars et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Uranus en astrologie",

      items: [
        {
          question:
            "Que représente Uranus en astrologie ?",

          answer:
            "Uranus représente symboliquement la liberté, l’indépendance, l’innovation, les changements soudains, l’éveil et le besoin de remettre en question les modèles devenus trop rigides.",
        },

        {
          question:
            "Pourquoi Uranus est-il associé aux changements imprévus ?",

          answer:
            "Dans l’interprétation astrologique, Uranus symbolise les ruptures de rythme, les prises de conscience rapides et les transformations qui permettent de sortir d’une situation devenue limitante.",
        },

        {
          question:
            "Que signifie le signe d’Uranus ?",

          answer:
            "Le signe d’Uranus décrit la manière dont une génération cherche à innover, à se libérer et à transformer certains domaines de la société.",
        },

        {
          question:
            "Que signifie Uranus rétrograde dans un thème natal ?",

          answer:
            "Uranus rétrograde à la naissance peut symboliser une indépendance plus intérieure, une originalité discrète et une manière très personnelle de remettre en question les normes.",
        },

        {
          question:
            "Uranus rétrograde est-il négatif ?",

          answer:
            "Non. Cette période est plutôt interprétée comme une invitation à réfléchir à son besoin de liberté, à ses résistances au changement et aux transformations devenues nécessaires.",
        },

        {
          question:
            "Comment connaître mon signe d’Uranus ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte d’Uranus.",
        },

        {
          question:
            "Quelle différence entre Saturne et Uranus ?",

          answer:
            "Saturne représente la structure, la stabilité et les règles, tandis qu’Uranus symbolise la liberté, l’innovation et la remise en question de ce qui est devenu trop rigide.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Uranus in Astrology: Freedom, Change and Innovation | Luna Astralis",

      description:
        "Discover the meaning of Uranus in astrology, its influence on freedom, change, originality and its expression through the 12 zodiac signs.",

      ogTitle:
        "Uranus in Astrology: Freedom, Innovation and Change",

      ogDescription:
        "Understand the role of Uranus in your birth chart and discover how this planet symbolizes independence, awakening, originality and sudden transformation.",

      twitterTitle:
        "Uranus in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Uranus symbolizes freedom, innovation, independence and unexpected change.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Uranus in Astrology: Freedom, Change and Innovation",

      description:
        "A complete guide to the role of Uranus in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "♅ Planets and birth chart",

      title:
        "Uranus in Astrology",

      lead:
        "Uranus represents your need for freedom, independence and change, as well as the way you innovate and reject patterns that have become too rigid.",

      createChart:
        "Create my free birth chart",

      viewSigns:
        "View the 12 signs",
    },

    meaning: {
      kicker:
        "Understanding your need for freedom",

      title:
        "What does Uranus represent in a birth chart?",

      paragraphs: [
        "In astrology, Uranus symbolizes freedom, innovation, independence and rapid change. It describes how a person seeks to break away from limiting patterns and express originality.",

        "Its position in your birth chart may reveal the areas in which you feel a need for renewal, autonomy or transformation. It may also show how you respond to unexpected changes.",

        "Uranus does not symbolize rupture alone. It also represents awakening, inventiveness and the ability to imagine different solutions when older structures no longer meet present needs.",
      ],
    },

    innovation: {
      title:
        "Uranus, freedom and innovation",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Your independence",

          text:
            "Uranus describes the areas in which you need to think, choose and act according to your own rules.",
        },

        {
          symbol:
            "⚡",

          title:
            "Your capacity for change",

          text:
            "It reveals how you break away from habits that have become too restrictive and open a new path.",
        },

        {
          symbol:
            "✦",

          title:
            "Your originality",

          text:
            "Uranus shows how your unique ideas may help renew your life or environment.",
        },
      ],
    },

    functions: {
      title:
        "The main functions of Uranus",

      cards: [
        {
          number:
            "01",

          title:
            "Liberate",

          text:
            "Uranus encourages detachment from patterns, habits and restrictions that prevent more authentic expression.",
        },

        {
          number:
            "02",

          title:
            "Innovate",

          text:
            "It symbolizes the ability to imagine new solutions and create different methods.",
        },

        {
          number:
            "03",

          title:
            "Awaken",

          text:
            "Uranus may trigger rapid realizations that deeply change the way a situation is understood.",
        },

        {
          number:
            "04",

          title:
            "Transform",

          text:
            "It encourages modernization of what has become too rigid and the creation of a reality more consistent with personal development.",
        },
      ],
    },

    planets: {
      title:
        "Uranus, Saturn and Neptune",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturn",

          text:
            "It represents structures, limits, discipline and lasting construction.",

          link:
            "/astrologie/saturne",

          linkLabel:
            "Discover Saturn",
        },

        {
          symbol:
            "♅",

          title:
            "Uranus",

          text:
            "It symbolizes freedom, innovation, awakening and the changes that break older structures.",
        },

        {
          symbol:
            "♆",

          title:
            "Neptune",

          text:
            "It represents intuition, imagination, compassion and subtle perceptions.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Uranus",

      title:
        "Uranus in the 12 zodiac signs",

      introduction:
        "Uranus always retains its function of freedom, innovation and transformation. The sign it occupies describes how a generation seeks to renew certain patterns.",

      titlePrefix:
        "Uranus in",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Uranus in Aries encourages direct, bold and spontaneous independence. This generation seeks to open new paths, act quickly and challenge patterns that restrict personal initiative.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Uranus in Taurus gradually transforms the relationship with resources, values and security. This position encourages new ways of building stability that are freer and more adaptable.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Uranus in Gemini stimulates new ideas, rapid exchanges and innovation connected with communication. This position supports original, mobile thinking that can connect unexpected concepts.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Uranus in Cancer challenges family patterns, traditions and conventional ways of creating belonging. Freedom may develop through a more personal definition of home and emotional security.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Uranus in Leo encourages original and independent creative expression. This position pushes people to shine differently, invent new forms of expression and reject overly rigid roles.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Uranus in Virgo transforms methods, habits and work organization. This position seeks new and efficient solutions capable of improving everyday life concretely.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Uranus in Libra challenges relationship models and social conventions. This position favors freer and more equal partnerships that respect each person’s individuality.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Uranus in Scorpio intensifies the need for transformation and truth. This position may disrupt relationships with power, intimacy and attachment in order to release what has remained deeply hidden.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Uranus in Sagittarius encourages exploration of new beliefs, cultures and worldviews. This position questions certainty and supports a freer and more independent search for meaning.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Uranus in Capricorn transforms structures, institutions and models of success. This position seeks to modernize what has become rigid while building systems better suited to the future.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Uranus in Aquarius strengthens innovation, independence and collective vision. This position supports progressive ideas, networks and changes capable of influencing society over time.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Uranus in Pisces transforms imagination, intuition and collective sensitivity. This position may open new perceptions and encourage original forms of creativity or symbolic spirituality.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of your freedom",

      title:
        "Uranus in the 12 astrological houses",

      introduction:
        "The sign of Uranus describes collective transformation, while its house indicates the area of life in which your need for freedom, change and originality is expressed most personally.",

      titlePrefix:
        "Uranus in",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Uranus in House I strengthens independence, originality and the need to live according to personal rules. The person may present themselves uniquely and regularly change how they affirm their identity.",
      },

      {
        house:
          "House II",

        text:
          "Uranus in House II transforms the relationship with money, resources and values. The person may seek more flexible forms of security and develop talents in innovative fields.",
      },

      {
        house:
          "House III",

        text:
          "Uranus in House III creates quick, inventive and independent thinking. Communication may be original, surprising and oriented toward new or unconventional ideas.",
      },

      {
        house:
          "House IV",

        text:
          "Uranus in House IV may make family or residential life changeable. The person seeks to create a home that respects freedom and may challenge inherited patterns.",
      },

      {
        house:
          "House V",

        text:
          "Uranus in House V encourages original creativity, sudden passions and unpredictable self-expression. The person often seeks stimulating and unconventional experiences.",
      },

      {
        house:
          "House VI",

        text:
          "Uranus in House VI transforms work, habits and everyday organization. The person may need freedom in their methods and prefer flexible or innovative environments.",
      },

      {
        house:
          "House VII",

        text:
          "Uranus in House VII makes relationships dynamic, original and sometimes unpredictable. The person seeks a partner capable of respecting independence and the need for space.",
      },

      {
        house:
          "House VIII",

        text:
          "Uranus in House VIII may create sudden transformations in intimacy, shared resources or psychology. The person seeks to free themselves from attachments that have become limiting.",
      },

      {
        house:
          "House IX",

        text:
          "Uranus in House IX encourages an independent and innovative worldview. Travel, education and the discovery of new philosophies may create genuine awakenings.",
      },

      {
        house:
          "House X",

        text:
          "Uranus in House X may produce an unusual, changing or innovative career path. The person often seeks to build a vocation that preserves freedom.",
      },

      {
        house:
          "House XI",

        text:
          "Uranus in House XI strengthens connections with groups, networks and collective projects. The person may contribute new ideas and attract original or independent friendships.",
      },

      {
        house:
          "House XII",

        text:
          "Uranus in House XII may produce sudden realizations and a very active inner life. The person may feel a deep need to free themselves from unconscious mechanisms or invisible fears.",
      },
    ],

    retrograde: {
      kicker:
        "Reviewing the need for freedom",

      title:
        "What does Uranus retrograde mean?",

      paragraphs: [
        "From Earth, Uranus sometimes appears to slow down and temporarily move backward in the sky. This is an apparent motion caused by the relative positions of Earth and Uranus.",

        "In astrological interpretation, Uranus retrograde is often associated with a more internal form of independence. The person may question norms deeply without always expressing that difference immediately.",

        "This period may encourage reflection on necessary changes, habits that restrict freedom and ways of introducing renewal without acting only on impulse.",
      ],

      symbol:
        "♅℞",

      cardTitle:
        "An invitation to reinvent yourself",

      points: [
        "Reconsider your need for freedom",
        "Identify limiting habits",
        "Clarify necessary changes",
        "Explore new solutions",
        "Express originality consciously",
      ],
    },

    strengths: {
      title:
        "Uranus strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "A free and innovative vision",

      strengths: [
        "Originality",
        "Independence",
        "Inventiveness",
        "Adaptation to change",
        "Ability to question established ideas",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Stabilizing the need for disruption",

      challenges: [
        "Impatience",
        "Automatic rebellion",
        "Changes that are too sudden",
        "Difficulty with restrictions",
        "Instability",
      ],
    },

    aspectsSection: {
      title:
        "The astrological aspects of Uranus",

      introduction:
        "Aspects connect Uranus with the other planets in the birth chart. They add nuance to your need for freedom, originality and the way you experience change.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Uranus with another planet and makes its expression more original, independent or unpredictable.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a natural ability to innovate and accept change with flexibility.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for renewal, openness and constructive experimentation.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may create tension between the need for stability and the desire for change or independence.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It encourages balance between personal freedom and external expectations, needs or commitments.",
      },
    ],

    cta: {
      kicker:
        "Discover your placement",

      title:
        "In which sign and house is your Uranus?",

      text:
        "Generate your free birth chart to discover your Uranus, Saturn, Jupiter, Mars and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Uranus in astrology",

      items: [
        {
          question:
            "What does Uranus represent in astrology?",

          answer:
            "Uranus symbolically represents freedom, independence, innovation, sudden changes, awakening and the need to question patterns that have become too rigid.",
        },

        {
          question:
            "Why is Uranus associated with unexpected changes?",

          answer:
            "In astrological interpretation, Uranus symbolizes breaks in rhythm, rapid realizations and transformations that make it possible to leave situations that have become limiting.",
        },

        {
          question:
            "What does the sign of Uranus mean?",

          answer:
            "The sign of Uranus describes how a generation seeks to innovate, free itself and transform certain areas of society.",
        },

        {
          question:
            "What does Uranus retrograde mean in a birth chart?",

          answer:
            "Uranus retrograde at birth may symbolize more internal independence, discreet originality and a highly personal way of questioning norms.",
        },

        {
          question:
            "Is Uranus retrograde negative?",

          answer:
            "No. This period is instead interpreted as an invitation to reflect on the need for freedom, resistance to change and transformations that have become necessary.",
        },

        {
          question:
            "How can I know my Uranus sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine the exact position of Uranus.",
        },

        {
          question:
            "What is the difference between Saturn and Uranus?",

          answer:
            "Saturn represents structure, stability and rules, while Uranus symbolizes freedom, innovation and the questioning of what has become too rigid.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Urano en astrología: libertad, cambio e innovación | Luna Astralis",

      description:
        "Descubre el significado de Urano en astrología, su influencia sobre la libertad, los cambios, la originalidad y su expresión en los 12 signos del zodiaco.",

      ogTitle:
        "Urano en astrología: libertad, innovación y cambio",

      ogDescription:
        "Comprende el papel de Urano en tu carta natal y descubre cómo este planeta simboliza la independencia, el despertar, la originalidad y las transformaciones repentinas.",

      twitterTitle:
        "Urano en astrología | Luna Astralis",

      twitterDescription:
        "Descubre cómo Urano simboliza la libertad, la innovación, la independencia y los cambios inesperados.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Urano en astrología: libertad, cambio e innovación",

      description:
        "Guía completa sobre el papel de Urano en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "♅ Planetas y carta natal",

      title:
        "Urano en astrología",

      lead:
        "Urano representa tu necesidad de libertad, independencia y cambio, así como la manera en que innovas y rechazas los modelos que se han vuelto demasiado rígidos.",

      createChart:
        "Crear mi carta natal gratis",

      viewSigns:
        "Ver los 12 signos",
    },

    meaning: {
      kicker:
        "Comprender tu necesidad de libertad",

      title:
        "¿Qué representa Urano en una carta natal?",

      paragraphs: [
        "En astrología, Urano simboliza la libertad, la innovación, la independencia y los cambios rápidos. Describe la manera en que una persona busca salir de modelos demasiado limitantes y expresar su originalidad.",

        "Su posición en tu carta natal puede revelar los ámbitos en los que sientes una necesidad de renovación, autonomía o transformación. También puede mostrar cómo reaccionas ante los cambios inesperados.",

        "Urano no simboliza únicamente la ruptura. También representa el despertar, la inventiva y la capacidad de imaginar soluciones diferentes cuando las antiguas estructuras ya no responden a las necesidades actuales.",
      ],
    },

    innovation: {
      title:
        "Urano, la libertad y la innovación",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Tu independencia",

          text:
            "Urano describe los ámbitos en los que necesitas pensar, elegir y actuar según tus propias reglas.",
        },

        {
          symbol:
            "⚡",

          title:
            "Tu capacidad de cambio",

          text:
            "Revela tu manera de romper con los hábitos que se han vuelto demasiado limitantes y de abrir un nuevo camino.",
        },

        {
          symbol:
            "✦",

          title:
            "Tu originalidad",

          text:
            "Urano muestra cómo tus ideas singulares pueden contribuir a renovar tu vida o tu entorno.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Urano",

      cards: [
        {
          number:
            "01",

          title:
            "Liberar",

          text:
            "Urano invita a desprenderse de los modelos, hábitos y restricciones que impiden una expresión más auténtica.",
        },

        {
          number:
            "02",

          title:
            "Innovar",

          text:
            "Simboliza la capacidad de imaginar soluciones nuevas y crear métodos diferentes.",
        },

        {
          number:
            "03",

          title:
            "Despertar",

          text:
            "Urano puede provocar tomas de conciencia rápidas que modifican profundamente la manera de comprender una situación.",
        },

        {
          number:
            "04",

          title:
            "Transformar",

          text:
            "Impulsa a modernizar lo que se ha vuelto demasiado rígido y a construir una realidad más coherente con la evolución personal.",
        },
      ],
    },

    planets: {
      title:
        "Urano, Saturno y Neptuno",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Representa las estructuras, los límites, la disciplina y la construcción duradera.",

          link:
            "/astrologie/saturne",

          linkLabel:
            "Descubrir Saturno",
        },

        {
          symbol:
            "♅",

          title:
            "Urano",

          text:
            "Simboliza la libertad, la innovación, el despertar y los cambios que rompen las antiguas estructuras.",
        },

        {
          symbol:
            "♆",

          title:
            "Neptuno",

          text:
            "Representa la intuición, la imaginación, la compasión y las percepciones sutiles.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Urano",

      title:
        "Urano en los 12 signos del zodiaco",

      introduction:
        "Urano conserva siempre su función de libertad, innovación y transformación. El signo en el que se encuentra describe la manera en que una generación busca renovar determinados modelos.",

      titlePrefix:
        "Urano en",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Urano en Aries favorece una independencia directa, audaz y espontánea. Esta generación busca abrir nuevos caminos, actuar con rapidez y cuestionar los modelos que limitan la iniciativa personal.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Urano en Tauro transforma progresivamente la relación con los recursos, los valores y la seguridad. Esta posición invita a inventar nuevas formas de construir una estabilidad más libre y adaptable.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Urano en Géminis estimula las ideas nuevas, los intercambios rápidos y las innovaciones relacionadas con la comunicación. Esta posición favorece un pensamiento original, móvil y capaz de conectar conceptos inesperados.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Urano en Cáncer cuestiona los modelos familiares, las tradiciones y las maneras de crear un sentimiento de pertenencia. La libertad puede construirse mediante una definición más personal del hogar y de la seguridad emocional.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Urano en Leo favorece una expresión creativa original e independiente. Esta posición impulsa a brillar de otra manera, inventar nuevas formas de expresión y rechazar los papeles demasiado rígidos.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Urano en Virgo transforma los métodos, los hábitos y la organización del trabajo. Esta posición busca soluciones nuevas, eficaces y capaces de mejorar concretamente la vida cotidiana.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Urano en Libra cuestiona los modelos relacionales y las convenciones sociales. Esta posición favorece asociaciones más libres, igualitarias y respetuosas de la individualidad de cada persona.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Urano en Escorpio intensifica la necesidad de transformación y verdad. Esta posición puede alterar las relaciones con el poder, la intimidad y los apegos para liberar aquello que permanecía profundamente oculto.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Urano en Sagitario favorece la exploración de nuevas creencias, culturas y visiones del mundo. Esta posición cuestiona las certezas y estimula una búsqueda de sentido más libre e independiente.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Urano en Capricornio transforma las estructuras, las instituciones y los modelos de éxito. Esta posición busca modernizar lo que se ha vuelto rígido mientras construye sistemas más adecuados para el futuro.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Urano en Acuario refuerza la innovación, la independencia y la visión colectiva. Esta posición favorece las ideas progresistas, las redes y los cambios capaces de influir duraderamente en la sociedad.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Urano en Piscis transforma la imaginación, la intuición y la sensibilidad colectiva. Esta posición puede abrir nuevas percepciones y estimular formas originales de creatividad o espiritualidad simbólica.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos de tu libertad",

      title:
        "Urano en las 12 casas astrológicas",

      introduction:
        "El signo de Urano describe una transformación colectiva, mientras que su casa indica el ámbito de vida en el que tu necesidad de libertad, cambio y originalidad se expresa de forma más personal.",

      titlePrefix:
        "Urano en",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Urano en la Casa I refuerza la independencia, la originalidad y la necesidad de vivir según las propias reglas. La persona puede presentarse de manera singular y cambiar regularmente su forma de afirmar su identidad.",
      },

      {
        house:
          "Casa II",

        text:
          "Urano en la Casa II transforma la relación con el dinero, los recursos y los valores. La persona puede buscar formas de seguridad más flexibles y desarrollar talentos en ámbitos innovadores.",
      },

      {
        house:
          "Casa III",

        text:
          "Urano en la Casa III aporta un pensamiento rápido, inventivo e independiente. La comunicación puede ser original, sorprendente y orientada hacia ideas nuevas o poco convencionales.",
      },

      {
        house:
          "Casa IV",

        text:
          "Urano en la Casa IV puede volver cambiante la vida familiar o residencial. La persona busca crear un hogar que respete su libertad y puede cuestionar determinados modelos heredados.",
      },

      {
        house:
          "Casa V",

        text:
          "Urano en la Casa V favorece una creatividad original, pasiones repentinas y una expresión personal imprevisible. La persona suele buscar experiencias estimulantes y poco convencionales.",
      },

      {
        house:
          "Casa VI",

        text:
          "Urano en la Casa VI transforma el trabajo, los hábitos y la organización cotidiana. La persona puede necesitar libertad en sus métodos y preferir entornos flexibles o innovadores.",
      },

      {
        house:
          "Casa VII",

        text:
          "Urano en la Casa VII vuelve las relaciones dinámicas, originales y a veces imprevisibles. La persona busca una pareja capaz de respetar su independencia y su necesidad de espacio.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Urano en la Casa VIII puede provocar transformaciones repentinas en la intimidad, los recursos compartidos o la psicología. La persona busca liberarse de los apegos que se han vuelto limitantes.",
      },

      {
        house:
          "Casa IX",

        text:
          "Urano en la Casa IX favorece una visión del mundo independiente e innovadora. Los viajes, los estudios y el descubrimiento de nuevas filosofías pueden provocar verdaderos despertares.",
      },

      {
        house:
          "Casa X",

        text:
          "Urano en la Casa X puede dar una trayectoria profesional atípica, cambiante o innovadora. La persona suele buscar una vocación que le permita preservar su libertad.",
      },

      {
        house:
          "Casa XI",

        text:
          "Urano en la Casa XI refuerza el vínculo con los grupos, las redes y los proyectos colectivos. La persona puede aportar ideas nuevas y atraer amistades originales o independientes.",
      },

      {
        house:
          "Casa XII",

        text:
          "Urano en la Casa XII puede producir tomas de conciencia repentinas y una vida interior muy activa. La persona puede sentir una necesidad profunda de liberarse de mecanismos inconscientes o miedos invisibles.",
      },
    ],

    retrograde: {
      kicker:
        "Revisión de la necesidad de libertad",

      title:
        "¿Qué significa Urano retrógrado?",

      paragraphs: [
        "Desde la Tierra, Urano parece a veces ralentizarse y retroceder temporalmente en el cielo. Se trata de un movimiento aparente relacionado con las posiciones relativas de la Tierra y Urano.",

        "En la interpretación astrológica, Urano retrógrado suele asociarse con una independencia más interior. La persona puede cuestionar profundamente las normas sin expresar siempre de inmediato esa diferencia.",

        "Este período puede invitar a reflexionar sobre los cambios que se han vuelto necesarios, los hábitos que limitan la libertad y la manera de introducir renovación sin actuar únicamente por impulso.",
      ],

      symbol:
        "♅℞",

      cardTitle:
        "Una invitación a reinventarse",

      points: [
        "Replantear la necesidad de libertad",
        "Identificar los hábitos limitantes",
        "Aclarar los cambios necesarios",
        "Explorar nuevas soluciones",
        "Afirmar la originalidad conscientemente",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Urano",

      strengthsKicker:
        "Fortalezas posibles",

      strengthsTitle:
        "Una visión libre e innovadora",

      strengths: [
        "Originalidad",
        "Independencia",
        "Inventiva",
        "Adaptación al cambio",
        "Capacidad de cuestionar",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Estabilizar la necesidad de ruptura",

      challenges: [
        "Impaciencia",
        "Rebeldía automática",
        "Cambios demasiado bruscos",
        "Dificultad con las restricciones",
        "Inestabilidad",
      ],
    },

    aspectsSection: {
      title:
        "Los aspectos astrológicos de Urano",

      introduction:
        "Los aspectos conectan Urano con los demás planetas de la carta natal. Aportan matices a tu necesidad de libertad, tu originalidad y tu manera de vivir los cambios.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjunción",

        text:
          "Fusiona Urano con otro planeta y vuelve su expresión más original, independiente o imprevisible.",
      },

      {
        symbol:
          "△",

        title:
          "El trígono",

        text:
          "Puede simbolizar una capacidad natural para innovar y aceptar los cambios con flexibilidad.",
      },

      {
        symbol:
          "✶",

        title:
          "El sextil",

        text:
          "Representa un potencial de renovación, apertura y experimentación constructiva.",
      },

      {
        symbol:
          "□",

        title:
          "La cuadratura",

        text:
          "Puede crear una tensión entre la necesidad de estabilidad y el deseo de cambio o independencia.",
      },

      {
        symbol:
          "☍",

        title:
          "La oposición",

        text:
          "Invita a equilibrar la libertad personal con las expectativas, necesidades o compromisos exteriores.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",

      title:
        "¿En qué signo y casa se encuentra tu Urano?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tu Urano, Saturno, Júpiter, Marte y las posiciones de tus principales planetas.",

      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Urano en astrología",

      items: [
        {
          question:
            "¿Qué representa Urano en astrología?",

          answer:
            "Urano representa simbólicamente la libertad, la independencia, la innovación, los cambios repentinos, el despertar y la necesidad de cuestionar los modelos que se han vuelto demasiado rígidos.",
        },

        {
          question:
            "¿Por qué Urano se asocia con los cambios imprevistos?",

          answer:
            "En la interpretación astrológica, Urano simboliza las rupturas de ritmo, las tomas de conciencia rápidas y las transformaciones que permiten salir de una situación que se ha vuelto limitante.",
        },

        {
          question:
            "¿Qué significa el signo de Urano?",

          answer:
            "El signo de Urano describe la manera en que una generación busca innovar, liberarse y transformar determinados ámbitos de la sociedad.",
        },

        {
          question:
            "¿Qué significa Urano retrógrado en una carta natal?",

          answer:
            "Urano retrógrado al nacer puede simbolizar una independencia más interior, una originalidad discreta y una manera muy personal de cuestionar las normas.",
        },

        {
          question:
            "¿Urano retrógrado es negativo?",

          answer:
            "No. Este período se interpreta más bien como una invitación a reflexionar sobre la necesidad de libertad, las resistencias al cambio y las transformaciones que se han vuelto necesarias.",
        },

        {
          question:
            "¿Cómo conocer mi signo de Urano?",

          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Urano.",
        },

        {
          question:
            "¿Cuál es la diferencia entre Saturno y Urano?",

          answer:
            "Saturno representa la estructura, la estabilidad y las reglas, mientras que Urano simboliza la libertad, la innovación y el cuestionamiento de aquello que se ha vuelto demasiado rígido.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Uranus in der Astrologie: Freiheit, Wandel und Innovation | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung von Uranus in der Astrologie, seinen Einfluss auf Freiheit, Veränderung, Originalität und seinen Ausdruck in den 12 Tierkreiszeichen.",

      ogTitle:
        "Uranus in der Astrologie: Freiheit, Innovation und Wandel",

      ogDescription:
        "Verstehen Sie die Rolle von Uranus in Ihrem Geburtshoroskop und entdecken Sie, wie dieser Planet Unabhängigkeit, Erwachen, Originalität und plötzliche Veränderungen symbolisiert.",

      twitterTitle:
        "Uranus in der Astrologie | Luna Astralis",

      twitterDescription:
        "Entdecken Sie, wie Uranus Freiheit, Innovation, Unabhängigkeit und unerwartete Veränderungen symbolisiert.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Uranus in der Astrologie: Freiheit, Wandel und Innovation",

      description:
        "Ein vollständiger Leitfaden zur Rolle von Uranus im Geburtshoroskop und zu seinem Ausdruck in den zwölf Tierkreiszeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "♅ Planeten und Geburtshoroskop",

      title:
        "Uranus in der Astrologie",

      lead:
        "Uranus steht für Ihr Bedürfnis nach Freiheit, Unabhängigkeit und Veränderung sowie für die Art, wie Sie innovativ handeln und zu starr gewordene Muster ablehnen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      viewSigns:
        "Die 12 Zeichen ansehen",
    },

    meaning: {
      kicker:
        "Ihr Bedürfnis nach Freiheit verstehen",

      title:
        "Was bedeutet Uranus im Geburtshoroskop?",

      paragraphs: [
        "In der Astrologie symbolisiert Uranus Freiheit, Innovation, Unabhängigkeit und schnelle Veränderungen. Er beschreibt, wie ein Mensch versucht, sich von zu begrenzenden Mustern zu lösen und seine Originalität auszudrücken.",

        "Seine Position im Geburtshoroskop kann die Bereiche zeigen, in denen Sie ein Bedürfnis nach Erneuerung, Autonomie oder Veränderung verspüren. Sie kann außerdem zeigen, wie Sie auf unerwartete Entwicklungen reagieren.",

        "Uranus symbolisiert nicht nur Bruch. Er steht ebenfalls für Erwachen, Erfindungsgeist und die Fähigkeit, neue Lösungen zu entwickeln, wenn alte Strukturen den gegenwärtigen Bedürfnissen nicht mehr entsprechen.",
      ],
    },

    innovation: {
      title:
        "Uranus, Freiheit und Innovation",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Ihre Unabhängigkeit",

          text:
            "Uranus beschreibt die Bereiche, in denen Sie nach Ihren eigenen Regeln denken, wählen und handeln möchten.",
        },

        {
          symbol:
            "⚡",

          title:
            "Ihre Fähigkeit zur Veränderung",

          text:
            "Er zeigt, wie Sie sich von zu eng gewordenen Gewohnheiten lösen und einen neuen Weg eröffnen.",
        },

        {
          symbol:
            "✦",

          title:
            "Ihre Originalität",

          text:
            "Uranus zeigt, wie Ihre besonderen Ideen dazu beitragen können, Ihr Leben oder Ihre Umgebung zu erneuern.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen von Uranus",

      cards: [
        {
          number:
            "01",

          title:
            "Befreien",

          text:
            "Uranus fordert dazu auf, sich von Mustern, Gewohnheiten und Einschränkungen zu lösen, die einen authentischeren Ausdruck verhindern.",
        },

        {
          number:
            "02",

          title:
            "Erneuern",

          text:
            "Er symbolisiert die Fähigkeit, neue Lösungen zu entwickeln und andere Methoden zu schaffen.",
        },

        {
          number:
            "03",

          title:
            "Erwecken",

          text:
            "Uranus kann schnelle Erkenntnisse auslösen, die das Verständnis einer Situation tiefgreifend verändern.",
        },

        {
          number:
            "04",

          title:
            "Verwandeln",

          text:
            "Er drängt dazu, zu starr Gewordenes zu modernisieren und eine Realität aufzubauen, die besser zur persönlichen Entwicklung passt.",
        },
      ],
    },

    planets: {
      title:
        "Uranus, Saturn und Neptun",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturn",

          text:
            "Er steht für Strukturen, Grenzen, Disziplin und dauerhaften Aufbau.",

          link:
            "/astrologie/saturne",

          linkLabel:
            "Saturn entdecken",
        },

        {
          symbol:
            "♅",

          title:
            "Uranus",

          text:
            "Er symbolisiert Freiheit, Innovation, Erwachen und Veränderungen, die alte Strukturen durchbrechen.",
        },

        {
          symbol:
            "♆",

          title:
            "Neptun",

          text:
            "Er steht für Intuition, Vorstellungskraft, Mitgefühl und feine Wahrnehmungen.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen von Uranus",

      title:
        "Uranus in den 12 Tierkreiszeichen",

      introduction:
        "Uranus behält stets seine Funktion von Freiheit, Innovation und Veränderung. Das Zeichen, in dem er steht, beschreibt, wie eine Generation bestimmte Muster erneuern möchte.",

      titlePrefix:
        "Uranus in",
    },

    signs: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Uranus im Widder fördert direkte, mutige und spontane Unabhängigkeit. Diese Generation möchte neue Wege eröffnen, schnell handeln und Muster infrage stellen, die persönliche Initiative begrenzen.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Uranus im Stier verändert schrittweise das Verhältnis zu Ressourcen, Werten und Sicherheit. Diese Stellung regt dazu an, neue Formen von Stabilität zu entwickeln, die freier und anpassungsfähiger sind.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Uranus in den Zwillingen fördert neue Ideen, schnellen Austausch und Innovationen in der Kommunikation. Diese Stellung unterstützt originelles, bewegliches Denken, das unerwartete Konzepte miteinander verbinden kann.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Uranus im Krebs stellt Familienmodelle, Traditionen und herkömmliche Formen der Zugehörigkeit infrage. Freiheit kann durch eine persönlichere Definition von Zuhause und emotionaler Sicherheit entstehen.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Uranus im Löwen fördert einen originellen und unabhängigen kreativen Ausdruck. Diese Stellung drängt dazu, anders zu strahlen, neue Ausdrucksformen zu erfinden und zu starre Rollen abzulehnen.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Uranus in der Jungfrau verändert Methoden, Gewohnheiten und Arbeitsorganisation. Diese Stellung sucht neue, effiziente Lösungen, die den Alltag konkret verbessern können.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Uranus in der Waage stellt Beziehungsmodelle und gesellschaftliche Konventionen infrage. Diese Stellung fördert freiere, gleichberechtigte Partnerschaften, die die Individualität jedes Menschen respektieren.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Uranus im Skorpion verstärkt das Bedürfnis nach Veränderung und Wahrheit. Diese Stellung kann Beziehungen zu Macht, Intimität und Bindung erschüttern, um tief Verborgenes zu befreien.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Uranus im Schützen fördert die Erforschung neuer Glaubensvorstellungen, Kulturen und Weltbilder. Diese Stellung hinterfragt Gewissheiten und unterstützt eine freiere, unabhängigere Sinnsuche.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Uranus im Steinbock verändert Strukturen, Institutionen und Erfolgsmodelle. Diese Stellung versucht, Erstarrtes zu modernisieren und zugleich zukunftsfähigere Systeme aufzubauen.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Uranus im Wassermann verstärkt Innovation, Unabhängigkeit und kollektive Vision. Diese Stellung fördert progressive Ideen, Netzwerke und Veränderungen, die die Gesellschaft langfristig beeinflussen können.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Uranus in den Fischen verändert Vorstellungskraft, Intuition und kollektive Sensibilität. Diese Stellung kann neue Wahrnehmungen eröffnen und originelle Formen von Kreativität oder symbolischer Spiritualität fördern.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche Ihrer Freiheit",

      title:
        "Uranus in den 12 astrologischen Häusern",

      introduction:
        "Das Zeichen von Uranus beschreibt eine kollektive Veränderung, während sein Haus den Lebensbereich zeigt, in dem sich Ihr Bedürfnis nach Freiheit, Wandel und Originalität am persönlichsten ausdrückt.",

      titlePrefix:
        "Uranus in",
    },

    houses: [
      {
        house:
          "Haus I",

        text:
          "Uranus im ersten Haus verstärkt Unabhängigkeit, Originalität und das Bedürfnis, nach eigenen Regeln zu leben. Die Person kann sich auf besondere Weise präsentieren und regelmäßig verändern, wie sie ihre Identität ausdrückt.",
      },

      {
        house:
          "Haus II",

        text:
          "Uranus im zweiten Haus verändert das Verhältnis zu Geld, Ressourcen und Werten. Die Person kann flexiblere Formen von Sicherheit suchen und Talente in innovativen Bereichen entwickeln.",
      },

      {
        house:
          "Haus III",

        text:
          "Uranus im dritten Haus verleiht schnelles, erfinderisches und unabhängiges Denken. Die Kommunikation kann originell, überraschend und auf neue oder unkonventionelle Ideen ausgerichtet sein.",
      },

      {
        house:
          "Haus IV",

        text:
          "Uranus im vierten Haus kann das Familien- oder Wohnleben wechselhaft machen. Die Person möchte ein Zuhause schaffen, das ihre Freiheit respektiert, und kann übernommene Muster infrage stellen.",
      },

      {
        house:
          "Haus V",

        text:
          "Uranus im fünften Haus fördert originelle Kreativität, plötzliche Leidenschaften und unvorhersehbaren Selbstausdruck. Die Person sucht häufig anregende und unkonventionelle Erfahrungen.",
      },

      {
        house:
          "Haus VI",

        text:
          "Uranus im sechsten Haus verändert Arbeit, Gewohnheiten und Alltagsorganisation. Die Person kann Freiheit in ihren Methoden benötigen und flexible oder innovative Umgebungen bevorzugen.",
      },

      {
        house:
          "Haus VII",

        text:
          "Uranus im siebten Haus macht Beziehungen dynamisch, originell und manchmal unvorhersehbar. Die Person sucht einen Partner, der ihre Unabhängigkeit und ihr Bedürfnis nach Freiraum respektiert.",
      },

      {
        house:
          "Haus VIII",

        text:
          "Uranus im achten Haus kann plötzliche Veränderungen in Intimität, gemeinsamen Ressourcen oder psychologischen Prozessen auslösen. Die Person möchte sich von begrenzenden Bindungen befreien.",
      },

      {
        house:
          "Haus IX",

        text:
          "Uranus im neunten Haus fördert eine unabhängige und innovative Weltsicht. Reisen, Bildung und die Entdeckung neuer Philosophien können echte Erkenntnissprünge auslösen.",
      },

      {
        house:
          "Haus X",

        text:
          "Uranus im zehnten Haus kann einen ungewöhnlichen, wechselhaften oder innovativen Berufsweg anzeigen. Die Person möchte häufig eine Berufung aufbauen, die ihre Freiheit bewahrt.",
      },

      {
        house:
          "Haus XI",

        text:
          "Uranus im elften Haus verstärkt die Verbindung zu Gruppen, Netzwerken und kollektiven Projekten. Die Person kann neue Ideen einbringen und originelle oder unabhängige Freundschaften anziehen.",
      },

      {
        house:
          "Haus XII",

        text:
          "Uranus im zwölften Haus kann plötzliche Erkenntnisse und ein sehr aktives Innenleben erzeugen. Die Person kann ein tiefes Bedürfnis verspüren, sich von unbewussten Mechanismen oder unsichtbaren Ängsten zu lösen.",
      },
    ],

    retrograde: {
      kicker:
        "Das Freiheitsbedürfnis überprüfen",

      title:
        "Was bedeutet Uranus rückläufig?",

      paragraphs: [
        "Von der Erde aus scheint Uranus manchmal langsamer zu werden und sich vorübergehend rückwärts am Himmel zu bewegen. Dabei handelt es sich um eine scheinbare Bewegung, die durch die relativen Positionen von Erde und Uranus entsteht.",

        "In der astrologischen Deutung wird ein rückläufiger Uranus häufig mit stärker nach innen gerichteter Unabhängigkeit verbunden. Die Person kann Normen tiefgreifend infrage stellen, ohne diesen Unterschied sofort sichtbar auszudrücken.",

        "Diese Phase kann dazu anregen, über notwendige Veränderungen, freiheitsbegrenzende Gewohnheiten und Möglichkeiten nachzudenken, Erneuerung einzuführen, ohne nur impulsiv zu handeln.",
      ],

      symbol:
        "♅℞",

      cardTitle:
        "Eine Einladung, sich neu zu erfinden",

      points: [
        "Das eigene Freiheitsbedürfnis überdenken",
        "Begrenzende Gewohnheiten erkennen",
        "Notwendige Veränderungen klären",
        "Neue Lösungen erforschen",
        "Originalität bewusst ausdrücken",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen von Uranus",

      strengthsKicker:
        "Mögliche Stärken",

      strengthsTitle:
        "Eine freie und innovative Sichtweise",

      strengths: [
        "Originalität",
        "Unabhängigkeit",
        "Erfindungsgeist",
        "Anpassung an Veränderungen",
        "Fähigkeit, Bestehendes infrage zu stellen",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Das Bedürfnis nach Bruch stabilisieren",

      challenges: [
        "Ungeduld",
        "Automatische Rebellion",
        "Zu abrupte Veränderungen",
        "Schwierigkeiten mit Einschränkungen",
        "Instabilität",
      ],
    },

    aspectsSection: {
      title:
        "Die astrologischen Aspekte von Uranus",

      introduction:
        "Aspekte verbinden Uranus mit den anderen Planeten des Geburtshoroskops. Sie geben Ihrem Freiheitsbedürfnis, Ihrer Originalität und Ihrer Art, Veränderungen zu erleben, zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "Die Konjunktion",

        text:
          "Sie verbindet Uranus mit einem anderen Planeten und macht dessen Ausdruck origineller, unabhängiger oder unvorhersehbarer.",
      },

      {
        symbol:
          "△",

        title:
          "Das Trigon",

        text:
          "Es kann eine natürliche Fähigkeit symbolisieren, innovativ zu handeln und Veränderungen flexibel anzunehmen.",
      },

      {
        symbol:
          "✶",

        title:
          "Das Sextil",

        text:
          "Es steht für Potenzial zur Erneuerung, Offenheit und konstruktiven Erprobung.",
      },

      {
        symbol:
          "□",

        title:
          "Das Quadrat",

        text:
          "Es kann Spannung zwischen dem Bedürfnis nach Stabilität und dem Wunsch nach Veränderung oder Unabhängigkeit erzeugen.",
      },

      {
        symbol:
          "☍",

        title:
          "Die Opposition",

        text:
          "Sie fordert dazu auf, persönliche Freiheit mit äußeren Erwartungen, Bedürfnissen oder Verpflichtungen auszubalancieren.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",

      title:
        "In welchem Zeichen und Haus steht Ihr Uranus?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Uranus, Saturn, Jupiter, Mars und die Positionen Ihrer wichtigsten Planeten.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zu Uranus in der Astrologie",

      items: [
        {
          question:
            "Was bedeutet Uranus in der Astrologie?",

          answer:
            "Uranus steht symbolisch für Freiheit, Unabhängigkeit, Innovation, plötzliche Veränderungen, Erwachen und das Bedürfnis, zu starr gewordene Muster infrage zu stellen.",
        },

        {
          question:
            "Warum wird Uranus mit unerwarteten Veränderungen verbunden?",

          answer:
            "In der astrologischen Deutung symbolisiert Uranus Unterbrechungen gewohnter Abläufe, schnelle Erkenntnisse und Veränderungen, die es ermöglichen, eine begrenzend gewordene Situation zu verlassen.",
        },

        {
          question:
            "Was bedeutet das Uranuszeichen?",

          answer:
            "Das Zeichen von Uranus beschreibt, wie eine Generation versucht, innovativ zu handeln, sich zu befreien und bestimmte Bereiche der Gesellschaft zu verändern.",
        },

        {
          question:
            "Was bedeutet Uranus rückläufig im Geburtshoroskop?",

          answer:
            "Ein rückläufiger Uranus bei der Geburt kann stärker nach innen gerichtete Unabhängigkeit, unauffällige Originalität und eine sehr persönliche Art symbolisieren, Normen infrage zu stellen.",
        },

        {
          question:
            "Ist Uranus rückläufig negativ?",

          answer:
            "Nein. Diese Phase wird eher als Einladung verstanden, über das eigene Freiheitsbedürfnis, Widerstände gegen Veränderungen und notwendig gewordene Entwicklungen nachzudenken.",
        },

        {
          question:
            "Wie erfahre ich mein Uranuszeichen?",

          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Geburtsdatum, Geburtszeit und Geburtsort berechnen, um die genaue Position von Uranus zu bestimmen.",
        },

        {
          question:
            "Was ist der Unterschied zwischen Saturn und Uranus?",

          answer:
            "Saturn steht für Struktur, Stabilität und Regeln, während Uranus Freiheit, Innovation und das Infragestellen zu starr gewordener Strukturen symbolisiert.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Urano in astrologia: libertà, cambiamento e innovazione | Luna Astralis",

      description:
        "Scopri il significato di Urano in astrologia, la sua influenza sulla libertà, i cambiamenti, l’originalità e la sua espressione nei 12 segni zodiacali.",

      ogTitle:
        "Urano in astrologia: libertà, innovazione e cambiamento",

      ogDescription:
        "Comprendi il ruolo di Urano nel tema natale e scopri come questo pianeta simboleggia indipendenza, risveglio, originalità e trasformazioni improvvise.",

      twitterTitle:
        "Urano in astrologia | Luna Astralis",

      twitterDescription:
        "Scopri come Urano simboleggia libertà, innovazione, indipendenza e cambiamenti inattesi.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Urano in astrologia: libertà, cambiamento e innovazione",

      description:
        "Guida completa al ruolo di Urano nel tema natale e alla sua espressione nei dodici segni zodiacali e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "♅ Pianeti e tema natale",

      title:
        "Urano in astrologia",

      lead:
        "Urano rappresenta il bisogno di libertà, indipendenza e cambiamento, oltre al modo in cui innovi e rifiuti i modelli diventati troppo rigidi.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      viewSigns:
        "Vedere i 12 segni",
    },

    meaning: {
      kicker:
        "Comprendere il bisogno di libertà",

      title:
        "Che cosa rappresenta Urano nel tema natale?",

      paragraphs: [
        "In astrologia, Urano simboleggia la libertà, l’innovazione, l’indipendenza e i cambiamenti rapidi. Descrive il modo in cui una persona cerca di uscire da modelli troppo limitanti e di esprimere la propria originalità.",

        "La sua posizione nel tema natale può rivelare gli ambiti in cui senti un bisogno di rinnovamento, autonomia o trasformazione. Può anche mostrare il modo in cui reagisci ai cambiamenti inattesi.",

        "Urano non simboleggia soltanto la rottura. Rappresenta anche il risveglio, l’inventiva e la capacità di immaginare soluzioni differenti quando le vecchie strutture non rispondono più alle esigenze presenti.",
      ],
    },

    innovation: {
      title:
        "Urano, la libertà e l’innovazione",

      cards: [
        {
          symbol:
            "♅",

          title:
            "La tua indipendenza",

          text:
            "Urano descrive gli ambiti in cui hai bisogno di pensare, scegliere e agire secondo le tue regole.",
        },

        {
          symbol:
            "⚡",

          title:
            "La tua capacità di cambiare",

          text:
            "Rivela il modo in cui rompi con le abitudini diventate troppo restrittive e apri una nuova strada.",
        },

        {
          symbol:
            "✦",

          title:
            "La tua originalità",

          text:
            "Urano mostra come le tue idee particolari possano contribuire a rinnovare la tua vita o il tuo ambiente.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Urano",

      cards: [
        {
          number:
            "01",

          title:
            "Liberare",

          text:
            "Urano invita a distaccarsi dai modelli, dalle abitudini e dalle restrizioni che impediscono un’espressione più autentica.",
        },

        {
          number:
            "02",

          title:
            "Innovare",

          text:
            "Simboleggia la capacità di immaginare nuove soluzioni e di creare metodi differenti.",
        },

        {
          number:
            "03",

          title:
            "Risvegliare",

          text:
            "Urano può provocare prese di coscienza rapide che modificano profondamente il modo di comprendere una situazione.",
        },

        {
          number:
            "04",

          title:
            "Trasformare",

          text:
            "Spinge a modernizzare ciò che è diventato troppo rigido e a costruire una realtà più coerente con l’evoluzione personale.",
        },
      ],
    },

    planets: {
      title:
        "Urano, Saturno e Nettuno",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Rappresenta le strutture, i limiti, la disciplina e la costruzione duratura.",

          link:
            "/astrologie/saturne",

          linkLabel:
            "Scoprire Saturno",
        },

        {
          symbol:
            "♅",

          title:
            "Urano",

          text:
            "Simboleggia la libertà, l’innovazione, il risveglio e i cambiamenti che spezzano le vecchie strutture.",
        },

        {
          symbol:
            "♆",

          title:
            "Nettuno",

          text:
            "Rappresenta l’intuizione, l’immaginazione, la compassione e le percezioni sottili.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Urano",

      title:
        "Urano nei 12 segni zodiacali",

      introduction:
        "Urano conserva sempre la propria funzione di libertà, innovazione e trasformazione. Il segno in cui si trova descrive il modo in cui una generazione cerca di rinnovare determinati modelli.",

      titlePrefix:
        "Urano in",
    },

    signs: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Urano in Ariete favorisce un’indipendenza diretta, audace e spontanea. Questa generazione cerca di aprire nuove strade, agire rapidamente e mettere in discussione i modelli che limitano l’iniziativa personale.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Urano in Toro trasforma progressivamente il rapporto con le risorse, i valori e la sicurezza. Questa posizione invita a inventare nuovi modi di costruire una stabilità più libera e adattabile.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "Urano in Gemelli stimola le nuove idee, gli scambi rapidi e le innovazioni legate alla comunicazione. Questa posizione favorisce un pensiero originale, mobile e capace di collegare concetti inattesi.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Urano in Cancro mette in discussione i modelli familiari, le tradizioni e i modi convenzionali di creare appartenenza. La libertà può costruirsi attraverso una definizione più personale della casa e della sicurezza emotiva.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Urano in Leone favorisce un’espressione creativa originale e indipendente. Questa posizione spinge a brillare in modo diverso, inventare nuove forme di espressione e rifiutare ruoli troppo rigidi.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "Urano in Vergine trasforma i metodi, le abitudini e l’organizzazione del lavoro. Questa posizione ricerca soluzioni nuove, efficaci e capaci di migliorare concretamente la vita quotidiana.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "Urano in Bilancia mette in discussione i modelli relazionali e le convenzioni sociali. Questa posizione favorisce collaborazioni più libere, egualitarie e rispettose dell’individualità di ciascuno.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Urano in Scorpione intensifica il bisogno di trasformazione e verità. Questa posizione può sconvolgere il rapporto con il potere, l’intimità e gli attaccamenti per liberare ciò che era rimasto profondamente nascosto.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Urano in Sagittario favorisce l’esplorazione di nuove convinzioni, culture e visioni del mondo. Questa posizione mette in discussione le certezze e incoraggia una ricerca di significato più libera e indipendente.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Urano in Capricorno trasforma le strutture, le istituzioni e i modelli di successo. Questa posizione cerca di modernizzare ciò che è diventato rigido costruendo sistemi più adatti al futuro.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "Urano in Acquario rafforza l’innovazione, l’indipendenza e la visione collettiva. Questa posizione favorisce idee progressiste, reti e cambiamenti capaci di influenzare la società nel lungo periodo.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "Urano in Pesci trasforma l’immaginazione, l’intuizione e la sensibilità collettiva. Questa posizione può aprire nuove percezioni e incoraggiare forme originali di creatività o spiritualità simbolica.",
      },
    ],

    housesSection: {
      kicker:
        "Gli ambiti della tua libertà",

      title:
        "Urano nelle 12 case astrologiche",

      introduction:
        "Il segno di Urano descrive una trasformazione collettiva, mentre la casa indica l’ambito della vita in cui il bisogno di libertà, cambiamento e originalità si esprime in modo più personale.",

      titlePrefix:
        "Urano in",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Urano in Casa I rafforza l’indipendenza, l’originalità e il bisogno di vivere secondo le proprie regole. La persona può presentarsi in modo singolare e modificare regolarmente il modo in cui afferma la propria identità.",
      },

      {
        house:
          "Casa II",

        text:
          "Urano in Casa II trasforma il rapporto con il denaro, le risorse e i valori. La persona può ricercare forme di sicurezza più flessibili e sviluppare talenti in ambiti innovativi.",
      },

      {
        house:
          "Casa III",

        text:
          "Urano in Casa III dona un pensiero rapido, inventivo e indipendente. La comunicazione può essere originale, sorprendente e orientata verso idee nuove o poco convenzionali.",
      },

      {
        house:
          "Casa IV",

        text:
          "Urano in Casa IV può rendere mutevole la vita familiare o abitativa. La persona cerca di creare una casa che rispetti la propria libertà e può mettere in discussione alcuni modelli ereditati.",
      },

      {
        house:
          "Casa V",

        text:
          "Urano in Casa V favorisce una creatività originale, passioni improvvise e un’espressione personale imprevedibile. La persona ricerca spesso esperienze stimolanti e non convenzionali.",
      },

      {
        house:
          "Casa VI",

        text:
          "Urano in Casa VI trasforma il lavoro, le abitudini e l’organizzazione quotidiana. La persona può avere bisogno di libertà nei propri metodi e preferire ambienti flessibili o innovativi.",
      },

      {
        house:
          "Casa VII",

        text:
          "Urano in Casa VII rende le relazioni dinamiche, originali e talvolta imprevedibili. La persona ricerca un partner capace di rispettare la sua indipendenza e il suo bisogno di spazio.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Urano in Casa VIII può provocare trasformazioni improvvise nell’intimità, nelle risorse condivise o nei processi psicologici. La persona cerca di liberarsi dagli attaccamenti diventati limitanti.",
      },

      {
        house:
          "Casa IX",

        text:
          "Urano in Casa IX favorisce una visione del mondo indipendente e innovativa. I viaggi, gli studi e la scoperta di nuove filosofie possono provocare autentici risvegli.",
      },

      {
        house:
          "Casa X",

        text:
          "Urano in Casa X può indicare un percorso professionale atipico, mutevole o innovativo. La persona cerca spesso di costruire una vocazione che le permetta di preservare la propria libertà.",
      },

      {
        house:
          "Casa XI",

        text:
          "Urano in Casa XI rafforza il legame con i gruppi, le reti e i progetti collettivi. La persona può contribuire con nuove idee e attirare amicizie originali o indipendenti.",
      },

      {
        house:
          "Casa XII",

        text:
          "Urano in Casa XII può produrre prese di coscienza improvvise e una vita interiore molto attiva. La persona può sentire un profondo bisogno di liberarsi da meccanismi inconsci o paure invisibili.",
      },
    ],

    retrograde: {
      kicker:
        "Rivedere il bisogno di libertà",

      title:
        "Che cosa significa Urano retrogrado?",

      paragraphs: [
        "Dalla Terra, Urano sembra talvolta rallentare e muoversi temporaneamente all’indietro nel cielo. Si tratta di un movimento apparente causato dalle posizioni relative della Terra e di Urano.",

        "Nell’interpretazione astrologica, Urano retrogrado è spesso associato a una forma di indipendenza più interiore. La persona può mettere profondamente in discussione le norme senza esprimere immediatamente questa differenza.",

        "Questo periodo può invitare a riflettere sui cambiamenti diventati necessari, sulle abitudini che limitano la libertà e sui modi di introdurre rinnovamento senza agire soltanto per impulso.",
      ],

      symbol:
        "♅℞",

      cardTitle:
        "Un invito a reinventarsi",

      points: [
        "Ripensare il proprio bisogno di libertà",
        "Identificare le abitudini limitanti",
        "Chiarire i cambiamenti necessari",
        "Esplorare nuove soluzioni",
        "Affermare consapevolmente la propria originalità",
      ],
    },

    strengths: {
      title:
        "I punti di forza e le sfide di Urano",

      strengthsKicker:
        "Possibili punti di forza",

      strengthsTitle:
        "Una visione libera e innovativa",

      strengths: [
        "Originalità",
        "Indipendenza",
        "Inventiva",
        "Adattamento al cambiamento",
        "Capacità di mettere in discussione",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Stabilizzare il bisogno di rottura",

      challenges: [
        "Impazienza",
        "Ribellione automatica",
        "Cambiamenti troppo bruschi",
        "Difficoltà con le restrizioni",
        "Instabilità",
      ],
    },

    aspectsSection: {
      title:
        "Gli aspetti astrologici di Urano",

      introduction:
        "Gli aspetti collegano Urano agli altri pianeti del tema natale. Aggiungono sfumature al bisogno di libertà, all’originalità e al modo di vivere i cambiamenti.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La congiunzione",

        text:
          "Unisce Urano a un altro pianeta e rende la sua espressione più originale, indipendente o imprevedibile.",
      },

      {
        symbol:
          "△",

        title:
          "Il trigono",

        text:
          "Può simboleggiare una capacità naturale di innovare e di accogliere i cambiamenti con flessibilità.",
      },

      {
        symbol:
          "✶",

        title:
          "Il sestile",

        text:
          "Rappresenta un potenziale di rinnovamento, apertura e sperimentazione costruttiva.",
      },

      {
        symbol:
          "□",

        title:
          "La quadratura",

        text:
          "Può creare una tensione tra il bisogno di stabilità e il desiderio di cambiamento o indipendenza.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposizione",

        text:
          "Invita a equilibrare la libertà personale con le aspettative, i bisogni o gli impegni esterni.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",

      title:
        "In quale segno e casa si trova il tuo Urano?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire Urano, Saturno, Giove, Marte e le posizioni dei principali pianeti.",

      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande su Urano in astrologia",

      items: [
        {
          question:
            "Che cosa rappresenta Urano in astrologia?",

          answer:
            "Urano rappresenta simbolicamente la libertà, l’indipendenza, l’innovazione, i cambiamenti improvvisi, il risveglio e il bisogno di mettere in discussione i modelli diventati troppo rigidi.",
        },

        {
          question:
            "Perché Urano è associato ai cambiamenti imprevisti?",

          answer:
            "Nell’interpretazione astrologica, Urano simboleggia le interruzioni del ritmo abituale, le prese di coscienza rapide e le trasformazioni che permettono di uscire da una situazione diventata limitante.",
        },

        {
          question:
            "Che cosa significa il segno di Urano?",

          answer:
            "Il segno di Urano descrive il modo in cui una generazione cerca di innovare, liberarsi e trasformare determinati ambiti della società.",
        },

        {
          question:
            "Che cosa significa Urano retrogrado nel tema natale?",

          answer:
            "Urano retrogrado alla nascita può simboleggiare un’indipendenza più interiore, un’originalità discreta e un modo molto personale di mettere in discussione le norme.",
        },

        {
          question:
            "Urano retrogrado è negativo?",

          answer:
            "No. Questo periodo viene piuttosto interpretato come un invito a riflettere sul bisogno di libertà, sulle resistenze al cambiamento e sulle trasformazioni diventate necessarie.",
        },

        {
          question:
            "Come posso conoscere il mio segno di Urano?",

          answer:
            "Devi calcolare il tuo tema natale utilizzando la data, l’ora e il luogo di nascita per conoscere la posizione esatta di Urano.",
        },

        {
          question:
            "Qual è la differenza tra Saturno e Urano?",

          answer:
            "Saturno rappresenta la struttura, la stabilità e le regole, mentre Urano simboleggia la libertà, l’innovazione e la messa in discussione di ciò che è diventato troppo rigido.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },
    pt: {
    metadata: {
      title:
        "Urano na astrologia: liberdade, mudança e inovação | Luna Astralis",

      description:
        "Descubra o significado de Urano na astrologia, sua influência sobre a liberdade, as mudanças, a originalidade e sua expressão nos 12 signos do zodíaco.",

      ogTitle:
        "Urano na astrologia: liberdade, inovação e mudança",

      ogDescription:
        "Compreenda o papel de Urano no seu mapa natal e descubra como esse planeta simboliza independência, despertar, originalidade e transformações repentinas.",

      twitterTitle:
        "Urano na astrologia | Luna Astralis",

      twitterDescription:
        "Descubra como Urano simboliza liberdade, inovação, independência e mudanças inesperadas.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Urano na astrologia: liberdade, mudança e inovação",

      description:
        "Guia completo sobre o papel de Urano no mapa natal e sua expressão nos doze signos do zodíaco e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "♅ Planetas e mapa natal",

      title:
        "Urano na astrologia",

      lead:
        "Urano representa sua necessidade de liberdade, independência e mudança, além da maneira como você inova e rejeita modelos que se tornaram rígidos demais.",

      createChart:
        "Criar meu mapa astral grátis",

      viewSigns:
        "Ver os 12 signos",
    },

    meaning: {
      kicker:
        "Compreender sua necessidade de liberdade",

      title:
        "O que Urano representa em um mapa natal?",

      paragraphs: [
        "Na astrologia, Urano simboliza liberdade, inovação, independência e mudanças rápidas. Ele descreve como uma pessoa procura romper com modelos muito limitantes e expressar sua originalidade.",

        "Sua posição no mapa natal pode revelar as áreas em que você sente necessidade de renovação, autonomia ou transformação. Ela também pode mostrar como você reage às mudanças inesperadas.",

        "Urano não simboliza apenas a ruptura. Ele também representa o despertar, a inventividade e a capacidade de imaginar soluções diferentes quando as antigas estruturas já não atendem às necessidades atuais.",
      ],
    },

    innovation: {
      title:
        "Urano, liberdade e inovação",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Sua independência",

          text:
            "Urano descreve as áreas em que você precisa pensar, escolher e agir de acordo com suas próprias regras.",
        },

        {
          symbol:
            "⚡",

          title:
            "Sua capacidade de mudança",

          text:
            "Ele revela como você rompe com hábitos que se tornaram restritivos demais e abre um novo caminho.",
        },

        {
          symbol:
            "✦",

          title:
            "Sua originalidade",

          text:
            "Urano mostra como suas ideias singulares podem contribuir para renovar sua vida ou seu ambiente.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Urano",

      cards: [
        {
          number:
            "01",

          title:
            "Libertar",

          text:
            "Urano convida a se afastar de modelos, hábitos e limitações que impedem uma expressão mais autêntica.",
        },

        {
          number:
            "02",

          title:
            "Inovar",

          text:
            "Ele simboliza a capacidade de imaginar novas soluções e criar métodos diferentes.",
        },

        {
          number:
            "03",

          title:
            "Despertar",

          text:
            "Urano pode provocar tomadas de consciência rápidas que modificam profundamente a maneira de compreender uma situação.",
        },

        {
          number:
            "04",

          title:
            "Transformar",

          text:
            "Ele incentiva a modernizar aquilo que se tornou rígido demais e a construir uma realidade mais coerente com a evolução pessoal.",
        },
      ],
    },

    planets: {
      title:
        "Urano, Saturno e Netuno",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturno",

          text:
            "Ele representa as estruturas, os limites, a disciplina e a construção duradoura.",

          link:
            "/astrologie/saturne",

          linkLabel:
            "Descobrir Saturno",
        },

        {
          symbol:
            "♅",

          title:
            "Urano",

          text:
            "Ele simboliza liberdade, inovação, despertar e mudanças que rompem antigas estruturas.",
        },

        {
          symbol:
            "♆",

          title:
            "Netuno",

          text:
            "Ele representa intuição, imaginação, compaixão e percepções sutis.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Urano",

      title:
        "Urano nos 12 signos do zodíaco",

      introduction:
        "Urano sempre conserva sua função de liberdade, inovação e transformação. O signo em que ele se encontra descreve como uma geração procura renovar determinados modelos.",

      titlePrefix:
        "Urano em",
    },

    signs: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Urano em Áries favorece uma independência direta, ousada e espontânea. Essa geração procura abrir novos caminhos, agir rapidamente e questionar os modelos que limitam a iniciativa pessoal.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Urano em Touro transforma progressivamente a relação com os recursos, os valores e a segurança. Essa posição incentiva a criação de novas formas de construir uma estabilidade mais livre e adaptável.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Urano em Gêmeos estimula novas ideias, trocas rápidas e inovações relacionadas à comunicação. Essa posição favorece um pensamento original, móvel e capaz de conectar conceitos inesperados.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Urano em Câncer questiona modelos familiares, tradições e maneiras convencionais de criar pertencimento. A liberdade pode ser construída por meio de uma definição mais pessoal de lar e segurança emocional.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Urano em Leão favorece uma expressão criativa original e independente. Essa posição incentiva a brilhar de outra maneira, inventar novas formas de expressão e rejeitar papéis rígidos demais.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Urano em Virgem transforma métodos, hábitos e a organização do trabalho. Essa posição procura soluções novas, eficientes e capazes de melhorar concretamente a vida cotidiana.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Urano em Libra questiona modelos de relacionamento e convenções sociais. Essa posição favorece parcerias mais livres, igualitárias e respeitosas da individualidade de cada pessoa.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Urano em Escorpião intensifica a necessidade de transformação e verdade. Essa posição pode alterar profundamente as relações com o poder, a intimidade e os apegos para liberar aquilo que permanecia oculto.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Urano em Sagitário favorece a exploração de novas crenças, culturas e visões de mundo. Essa posição questiona certezas e incentiva uma busca de sentido mais livre e independente.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Urano em Capricórnio transforma estruturas, instituições e modelos de sucesso. Essa posição procura modernizar aquilo que se tornou rígido enquanto constrói sistemas mais adequados ao futuro.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Urano em Aquário reforça a inovação, a independência e a visão coletiva. Essa posição favorece ideias progressistas, redes e mudanças capazes de influenciar a sociedade de forma duradoura.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Urano em Peixes transforma a imaginação, a intuição e a sensibilidade coletiva. Essa posição pode abrir novas percepções e incentivar formas originais de criatividade ou espiritualidade simbólica.",
      },
    ],

    housesSection: {
      kicker:
        "As áreas da sua liberdade",

      title:
        "Urano nas 12 casas astrológicas",

      introduction:
        "O signo de Urano descreve uma transformação coletiva, enquanto sua casa indica a área da vida em que sua necessidade de liberdade, mudança e originalidade se expressa de maneira mais pessoal.",

      titlePrefix:
        "Urano em",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Urano na Casa I reforça a independência, a originalidade e a necessidade de viver de acordo com as próprias regras. A pessoa pode se apresentar de maneira singular e mudar regularmente a forma como afirma sua identidade.",
      },

      {
        house:
          "Casa II",

        text:
          "Urano na Casa II transforma a relação com o dinheiro, os recursos e os valores. A pessoa pode procurar formas de segurança mais flexíveis e desenvolver talentos em áreas inovadoras.",
      },

      {
        house:
          "Casa III",

        text:
          "Urano na Casa III proporciona um pensamento rápido, inventivo e independente. A comunicação pode ser original, surpreendente e voltada para ideias novas ou pouco convencionais.",
      },

      {
        house:
          "Casa IV",

        text:
          "Urano na Casa IV pode tornar a vida familiar ou residencial mais instável. A pessoa procura criar um lar que respeite sua liberdade e pode questionar determinados modelos herdados.",
      },

      {
        house:
          "Casa V",

        text:
          "Urano na Casa V favorece uma criatividade original, paixões repentinas e uma expressão pessoal imprevisível. A pessoa costuma procurar experiências estimulantes e pouco convencionais.",
      },

      {
        house:
          "Casa VI",

        text:
          "Urano na Casa VI transforma o trabalho, os hábitos e a organização cotidiana. A pessoa pode precisar de liberdade nos métodos e preferir ambientes flexíveis ou inovadores.",
      },

      {
        house:
          "Casa VII",

        text:
          "Urano na Casa VII torna os relacionamentos dinâmicos, originais e às vezes imprevisíveis. A pessoa procura um parceiro capaz de respeitar sua independência e sua necessidade de espaço.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Urano na Casa VIII pode provocar transformações repentinas na intimidade, nos recursos compartilhados ou na psicologia. A pessoa procura se libertar de apegos que se tornaram limitantes.",
      },

      {
        house:
          "Casa IX",

        text:
          "Urano na Casa IX favorece uma visão de mundo independente e inovadora. Viagens, estudos e a descoberta de novas filosofias podem provocar verdadeiros despertares.",
      },

      {
        house:
          "Casa X",

        text:
          "Urano na Casa X pode indicar uma trajetória profissional atípica, variável ou inovadora. A pessoa costuma procurar uma vocação que permita preservar sua liberdade.",
      },

      {
        house:
          "Casa XI",

        text:
          "Urano na Casa XI reforça a ligação com grupos, redes e projetos coletivos. A pessoa pode contribuir com novas ideias e atrair amizades originais ou independentes.",
      },

      {
        house:
          "Casa XII",

        text:
          "Urano na Casa XII pode produzir tomadas de consciência repentinas e uma vida interior muito ativa. A pessoa pode sentir uma necessidade profunda de se libertar de mecanismos inconscientes ou medos invisíveis.",
      },
    ],

    retrograde: {
      kicker:
        "Revisão da necessidade de liberdade",

      title:
        "O que significa Urano retrógrado?",

      paragraphs: [
        "Visto da Terra, Urano às vezes parece desacelerar e se mover temporariamente para trás no céu. Trata-se de um movimento aparente causado pelas posições relativas da Terra e de Urano.",

        "Na interpretação astrológica, Urano retrógrado costuma ser associado a uma independência mais interior. A pessoa pode questionar profundamente as normas sem expressar imediatamente essa diferença.",

        "Esse período pode incentivar uma reflexão sobre mudanças que se tornaram necessárias, hábitos que limitam a liberdade e maneiras de introduzir renovação sem agir apenas por impulso.",
      ],

      symbol:
        "♅℞",

      cardTitle:
        "Um convite para se reinventar",

      points: [
        "Repensar sua necessidade de liberdade",
        "Identificar hábitos limitantes",
        "Esclarecer as mudanças necessárias",
        "Explorar novas soluções",
        "Expressar sua originalidade conscientemente",
      ],
    },

    strengths: {
      title:
        "As forças e os desafios de Urano",

      strengthsKicker:
        "Forças possíveis",

      strengthsTitle:
        "Uma visão livre e inovadora",

      strengths: [
        "Originalidade",
        "Independência",
        "Inventividade",
        "Adaptação à mudança",
        "Capacidade de questionar",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "Estabilizar a necessidade de ruptura",

      challenges: [
        "Impaciência",
        "Rebeldia automática",
        "Mudanças bruscas demais",
        "Dificuldade com limitações",
        "Instabilidade",
      ],
    },

    aspectsSection: {
      title:
        "Os aspectos astrológicos de Urano",

      introduction:
        "Os aspectos conectam Urano aos outros planetas do mapa natal. Eles acrescentam nuances à sua necessidade de liberdade, à sua originalidade e à maneira como você vive as mudanças.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "A conjunção",

        text:
          "Ela une Urano a outro planeta e torna sua expressão mais original, independente ou imprevisível.",
      },

      {
        symbol:
          "△",

        title:
          "O trígono",

        text:
          "Ele pode simbolizar uma capacidade natural de inovar e aceitar mudanças com flexibilidade.",
      },

      {
        symbol:
          "✶",

        title:
          "O sextil",

        text:
          "Ele representa um potencial de renovação, abertura e experimentação construtiva.",
      },

      {
        symbol:
          "□",

        title:
          "A quadratura",

        text:
          "Ela pode criar tensão entre a necessidade de estabilidade e o desejo de mudança ou independência.",
      },

      {
        symbol:
          "☍",

        title:
          "A oposição",

        text:
          "Ela convida a equilibrar a liberdade pessoal com expectativas, necessidades ou compromissos externos.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",

      title:
        "Em qual signo e casa está seu Urano?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir Urano, Saturno, Júpiter, Marte e as posições dos seus principais planetas.",

      button:
        "Descobrir meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Urano na astrologia",

      items: [
        {
          question:
            "O que Urano representa na astrologia?",

          answer:
            "Urano representa simbolicamente a liberdade, a independência, a inovação, as mudanças repentinas, o despertar e a necessidade de questionar modelos que se tornaram rígidos demais.",
        },

        {
          question:
            "Por que Urano está associado a mudanças inesperadas?",

          answer:
            "Na interpretação astrológica, Urano simboliza rupturas de ritmo, tomadas de consciência rápidas e transformações que permitem sair de uma situação que se tornou limitante.",
        },

        {
          question:
            "O que significa o signo de Urano?",

          answer:
            "O signo de Urano descreve como uma geração procura inovar, se libertar e transformar determinadas áreas da sociedade.",
        },

        {
          question:
            "O que significa Urano retrógrado no mapa natal?",

          answer:
            "Urano retrógrado no nascimento pode simbolizar uma independência mais interior, uma originalidade discreta e uma maneira muito pessoal de questionar as normas.",
        },

        {
          question:
            "Urano retrógrado é negativo?",

          answer:
            "Não. Esse período costuma ser interpretado como um convite para refletir sobre a necessidade de liberdade, as resistências à mudança e as transformações que se tornaram necessárias.",
        },

        {
          question:
            "Como descobrir meu signo de Urano?",

          answer:
            "Você deve calcular seu mapa natal usando sua data, horário e local de nascimento para conhecer a posição exata de Urano.",
        },

        {
          question:
            "Qual é a diferença entre Saturno e Urano?",

          answer:
            "Saturno representa estrutura, estabilidade e regras, enquanto Urano simboliza liberdade, inovação e o questionamento daquilo que se tornou rígido demais.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
