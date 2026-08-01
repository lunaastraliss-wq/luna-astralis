// i18n/pages/astrologie/pluton.ts

import type {
  Locale,
} from "@/i18n/config";

export type PlutoCard = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
};

export type PlutoFunction = {
  number: string;
  title: string;
  text: string;
};

export type PlutoSign = {
  sign: string;
  symbol: string;
  text: string;
};

export type PlutoHouse = {
  house: string;
  text: string;
};

export type PlutoAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type PlutoFaqItem = {
  question: string;
  answer: string;
};

export type PlutoPageText = {
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

  transformation: {
    title: string;
    cards: PlutoCard[];
  };

  functions: {
    title: string;
    cards: PlutoFunction[];
  };

  planets: {
    title: string;
    cards: PlutoCard[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  signs: PlutoSign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  houses: PlutoHouse[];

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

  aspects: PlutoAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: PlutoFaqItem[];
  };

  disclaimer: string;
};

export const PLUTON_TRANSLATIONS:
  Record<
    Locale,
    PlutoPageText
  > = {
  fr: {
    metadata: {
      title:
        "Pluton en astrologie : transformation, pouvoir et renaissance | Luna Astralis",

      description:
        "Découvrez la signification de Pluton en astrologie, son influence sur les transformations, le pouvoir intérieur, les crises, la régénération et son expression dans les 12 signes.",

      ogTitle:
        "Pluton en astrologie : transformation, pouvoir et renaissance",

      ogDescription:
        "Comprenez le rôle de Pluton dans votre thème natal et découvrez comment cette planète symbolise les transformations profondes, le pouvoir intérieur et la régénération.",

      twitterTitle:
        "Pluton en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Pluton symbolise la transformation, la puissance intérieure, les crises et la renaissance.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Pluton en astrologie : transformation, pouvoir et renaissance",

      description:
        "Guide complet consacré au rôle de Pluton dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "♇ Planètes et thème natal",

      title:
        "Pluton en astrologie",

      lead:
        "Pluton représente vos transformations profondes, votre pouvoir intérieur, vos crises de croissance et votre capacité à renaître après les grands bouleversements.",

      createChart:
        "Créer ma carte du ciel gratuite",

      seeSigns:
        "Voir les 12 signes",
    },

    introduction: {
      kicker:
        "Comprendre votre pouvoir de transformation",

      title:
        "Que représente Pluton dans un thème astral ?",

      paragraphs: [
        "En astrologie, Pluton symbolise les transformations profondes, les crises, les rapports de pouvoir et la régénération. Il décrit les processus qui obligent une personne à abandonner ce qui n’est plus viable afin de reconstruire autrement.",

        "Sa position dans votre carte du ciel peut révéler les domaines dans lesquels vous vivez des expériences intenses, des remises en question majeures et un besoin profond de vérité.",

        "Pluton n’annonce pas nécessairement des événements négatifs. Il représente surtout la capacité à traverser une crise, à comprendre les mécanismes cachés et à retrouver une force intérieure plus consciente.",
      ],
    },

    transformation: {
      title:
        "Pluton, le pouvoir et la transformation",

      cards: [
        {
          symbol:
            "♇",

          title:
            "Votre transformation",

          text:
            "Pluton décrit les domaines dans lesquels vous êtes invité à abandonner une ancienne forme pour évoluer profondément.",
        },

        {
          symbol:
            "✦",

          title:
            "Votre pouvoir intérieur",

          text:
            "Il révèle votre capacité à affronter les situations complexes, à résister et à reconstruire après une période difficile.",
        },

        {
          symbol:
            "◈",

          title:
            "Votre profondeur",

          text:
            "Pluton montre votre besoin de comprendre les vérités cachées, les motivations profondes et les mécanismes invisibles.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions de Pluton",

      cards: [
        {
          number:
            "01",

          title:
            "Révéler",

          text:
            "Pluton met en lumière les vérités cachées, les peurs, les attachements et les mécanismes de pouvoir.",
        },

        {
          number:
            "02",

          title:
            "Détruire",

          text:
            "Il symbolise la fin des structures devenues trop rigides, artificielles ou incapables de soutenir l’évolution.",
        },

        {
          number:
            "03",

          title:
            "Transformer",

          text:
            "Pluton pousse à modifier profondément les comportements, les rapports de force et les manières de vivre.",
        },

        {
          number:
            "04",

          title:
            "Régénérer",

          text:
            "Il représente la capacité à reconstruire, à retrouver sa puissance et à renaître après une période de crise.",
        },
      ],
    },

    planets: {
      title:
        "Pluton, Neptune et Saturne",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturne",

          text:
            "Il représente les structures, les limites, la responsabilité et la construction durable.",

          link:
            "Découvrir Saturne",
        },

        {
          symbol:
            "♆",

          title:
            "Neptune",

          text:
            "Il symbolise l’intuition, l’imagination, les idéaux et les perceptions subtiles.",

          link:
            "Découvrir Neptune",
        },

        {
          symbol:
            "♇",

          title:
            "Pluton",

          text:
            "Il représente la transformation profonde, le pouvoir, les crises et la régénération.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions de Pluton",

      title:
        "Pluton dans les 12 signes astrologiques",

      introduction:
        "Pluton conserve toujours sa fonction de transformation, de pouvoir et de régénération. Le signe dans lequel il se trouve décrit la manière dont une génération traverse les grandes crises et remises en question collectives.",

      titlePrefix:
        "Pluton en",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Pluton en Bélier transforme profondément le rapport à l’action, à l’indépendance et à l’affirmation personnelle. Cette position générationnelle peut remettre en question les modèles de pouvoir fondés sur la force, la conquête et l’autorité directe.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Pluton en Taureau bouleverse le rapport aux ressources, à la sécurité et aux valeurs matérielles. Cette position invite à reconstruire des bases plus solides après des transformations économiques, sociales ou personnelles majeures.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Pluton en Gémeaux transforme les idées, les communications et la circulation des connaissances. Cette position peut révéler la puissance des mots, de l’information et des nouvelles manières de comprendre le monde.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Pluton en Cancer transforme les modèles familiaux, les racines et le sentiment d’appartenance. Cette position peut provoquer une profonde remise en question des structures protectrices et des héritages émotionnels.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Pluton en Lion transforme le rapport à la créativité, à la reconnaissance et au pouvoir personnel. Cette position peut intensifier le besoin d’expression tout en révélant les limites de l’ego et de l’autorité individuelle.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Pluton en Vierge transforme les méthodes de travail, les habitudes et le rapport à l’efficacité. Cette position cherche à purifier, corriger et reconstruire ce qui ne fonctionne plus dans les systèmes quotidiens.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Pluton en Balance transforme les relations, les contrats et les modèles de partenariat. Cette position révèle les rapports de pouvoir dans les liens et pousse à rechercher une réciprocité plus authentique.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Pluton en Scorpion intensifie les transformations, les crises et la recherche de vérité. Cette position générationnelle confronte les tabous, les attachements et les mécanismes de pouvoir afin de favoriser une profonde régénération.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Pluton en Sagittaire transforme les croyances, les idéologies et les visions du monde. Cette position remet en question les certitudes collectives et pousse à rechercher une compréhension plus profonde du sens et de la vérité.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Pluton en Capricorne transforme les institutions, les structures de pouvoir et les modèles de réussite. Cette position révèle les failles des systèmes trop rigides et pousse à reconstruire des bases plus responsables.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Pluton en Verseau transforme les réseaux, les groupes, les technologies et les idéaux collectifs. Cette position peut bouleverser les rapports entre l’individu, la communauté et les nouvelles formes de pouvoir social.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Pluton en Poissons transforme les croyances invisibles, les idéaux, la spiritualité symbolique et les frontières émotionnelles. Cette position peut révéler les illusions collectives afin de permettre une profonde renaissance intérieure.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines de votre transformation",

      title:
        "Pluton dans les 12 maisons astrologiques",

      introduction:
        "Le signe de Pluton décrit une transformation collective, tandis que sa maison indique le domaine de vie dans lequel votre pouvoir intérieur, vos crises et votre capacité de régénération s’expriment le plus personnellement.",

      titlePrefix:
        "Pluton en",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Pluton en Maison I donne une présence intense, magnétique et profondément transformatrice. La personne peut vivre plusieurs renaissances identitaires et développer une grande puissance intérieure.",
      },

      {
        house:
          "Maison II",

        text:
          "Pluton en Maison II transforme le rapport aux ressources, aux valeurs et à la sécurité. La personne peut traverser des changements matériels importants qui l’amènent à redéfinir ce qui possède réellement de la valeur.",
      },

      {
        house:
          "Maison III",

        text:
          "Pluton en Maison III donne une pensée profonde, investigatrice et persuasive. La personne peut chercher à comprendre les non-dits, les mécanismes cachés et la véritable portée des mots.",
      },

      {
        house:
          "Maison IV",

        text:
          "Pluton en Maison IV intensifie les expériences liées au foyer, à la famille et aux racines. La personne peut être appelée à transformer profondément certains héritages émotionnels ou familiaux.",
      },

      {
        house:
          "Maison V",

        text:
          "Pluton en Maison V donne une créativité intense, des passions puissantes et un besoin profond d’expression personnelle. Les relations amoureuses et les projets créatifs peuvent devenir des expériences transformatrices.",
      },

      {
        house:
          "Maison VI",

        text:
          "Pluton en Maison VI transforme les habitudes, le travail et l’organisation quotidienne. La personne peut ressentir un besoin puissant d’améliorer les méthodes, d’éliminer les dysfonctionnements et de reprendre le contrôle de son quotidien.",
      },

      {
        house:
          "Maison VII",

        text:
          "Pluton en Maison VII intensifie les relations et révèle les rapports de pouvoir dans les partenariats. Les liens importants peuvent provoquer de profondes transformations personnelles.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Pluton en Maison VIII renforce la capacité à traverser les crises, les pertes et les transformations. La personne peut posséder une grande profondeur psychologique et une forte aptitude à se régénérer.",
      },

      {
        house:
          "Maison IX",

        text:
          "Pluton en Maison IX transforme les croyances, les convictions et la vision du monde. Les études, les voyages ou certaines expériences peuvent remettre en question des certitudes profondément ancrées.",
      },

      {
        house:
          "Maison X",

        text:
          "Pluton en Maison X intensifie l’ambition, la vocation et le rapport au pouvoir professionnel. La personne peut connaître plusieurs transformations de carrière et chercher à exercer une influence profonde.",
      },

      {
        house:
          "Maison XI",

        text:
          "Pluton en Maison XI transforme les amitiés, les réseaux et les projets collectifs. La personne peut jouer un rôle puissant dans un groupe et être appelée à redéfinir ses alliances.",
      },

      {
        house:
          "Maison XII",

        text:
          "Pluton en Maison XII révèle des forces inconscientes, des peurs profondes et des mécanismes cachés. L’introspection peut devenir un puissant outil de guérison symbolique et de transformation intérieure.",
      },
    ],

    retrograde: {
      kicker:
        "Transformation intérieure",

      title:
        "Que signifie Pluton rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Pluton semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un mouvement apparent lié aux positions relatives de la Terre et de Pluton.",

        "Dans l’interprétation astrologique, Pluton rétrograde est souvent associé à un processus de transformation plus intérieur. La personne peut explorer profondément son rapport au pouvoir, au contrôle et aux peurs cachées.",

        "Cette période peut inviter à reconnaître les attachements devenus trop lourds, à observer les mécanismes inconscients et à reprendre son pouvoir personnel sans chercher à contrôler les autres.",
      ],

      cardSymbol:
        "♇℞",

      cardTitle:
        "Une invitation à transformer",

      items: [
        "Observer son rapport au contrôle",
        "Reconnaître les peurs profondes",
        "Abandonner les anciens attachements",
        "Reprendre son pouvoir personnel",
        "Transformer les schémas inconscients",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis de Pluton",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Une puissance de régénération",

      strengths: [
        "Résilience",
        "Profondeur psychologique",
        "Courage face aux crises",
        "Capacité de transformation",
        "Lucidité",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Utiliser le pouvoir avec conscience",

      challenges: [
        "Besoin de contrôle",
        "Méfiance excessive",
        "Obsession",
        "Difficulté à lâcher prise",
        "Rapports de force",
      ],
    },

    aspectsSection: {
      title:
        "Les aspects astrologiques de Pluton",

      introduction:
        "Les aspects relient Pluton aux autres planètes du thème natal. Ils apportent des nuances à votre rapport au pouvoir, aux transformations, aux crises et à la régénération.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Pluton avec une autre planète et intensifie profondément son expression.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une capacité naturelle à transformer, approfondir et régénérer les qualités de l’autre planète.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel de transformation constructive, de lucidité et de croissance intérieure.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut créer une tension intense autour du pouvoir, du contrôle ou de la nécessité de changer profondément.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à reconnaître les rapports de force extérieurs et à trouver un équilibre entre contrôle et lâcher-prise.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Pluton ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Pluton, votre Neptune, votre Uranus, votre Saturne et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Pluton en astrologie",

      items: [
        {
          question:
            "Que représente Pluton en astrologie ?",

          answer:
            "Pluton représente symboliquement les transformations profondes, les crises, le pouvoir, les pertes, la régénération, les vérités cachées et la capacité à renaître après une période de bouleversement.",
        },

        {
          question:
            "Pourquoi Pluton est-il associé à la transformation ?",

          answer:
            "Pluton symbolise les processus qui obligent à abandonner une ancienne structure devenue inadéquate afin de reconstruire quelque chose de plus authentique et plus solide.",
        },

        {
          question:
            "Que signifie le signe de Pluton ?",

          answer:
            "Le signe de Pluton décrit la manière dont une génération vit les transformations collectives, les crises de pouvoir et les grandes remises en question de son époque.",
        },

        {
          question:
            "Que signifie Pluton rétrograde dans un thème natal ?",

          answer:
            "Pluton rétrograde à la naissance peut symboliser une transformation plus intérieure, un rapport personnel au pouvoir et une tendance à explorer profondément les mécanismes inconscients.",
        },

        {
          question:
            "Pluton rétrograde est-il négatif ?",

          answer:
            "Non. Cette position est plutôt interprétée comme une invitation à examiner son rapport au contrôle, aux peurs, aux attachements et aux transformations intérieures.",
        },

        {
          question:
            "Comment connaître mon signe de Pluton ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Pluton.",
        },

        {
          question:
            "Quelle différence entre Neptune et Pluton ?",

          answer:
            "Neptune symbolise l’intuition, l’imagination et la dissolution des frontières, tandis que Pluton représente la transformation profonde, le pouvoir, les crises et la régénération.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Pluto in Astrology: Transformation, Power and Rebirth | Luna Astralis",

      description:
        "Discover the meaning of Pluto in astrology, its influence on transformation, inner power, crises, regeneration and its expression through the 12 zodiac signs.",

      ogTitle:
        "Pluto in Astrology: Transformation, Power and Rebirth",

      ogDescription:
        "Understand Pluto’s role in your birth chart and discover how this planet symbolizes profound transformation, inner power and regeneration.",

      twitterTitle:
        "Pluto in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Pluto symbolizes transformation, inner power, crises and rebirth.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Pluto in Astrology: Transformation, Power and Rebirth",

      description:
        "A complete guide to Pluto’s role in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "♇ Planets and birth chart",

      title:
        "Pluto in Astrology",

      lead:
        "Pluto represents your profound transformations, inner power, growth crises and ability to be reborn after major upheavals.",

      createChart:
        "Create my free birth chart",

      seeSigns:
        "See the 12 signs",
    },

    introduction: {
      kicker:
        "Understand your power of transformation",

      title:
        "What does Pluto represent in a birth chart?",

      paragraphs: [
        "In astrology, Pluto symbolizes profound transformation, crises, power dynamics and regeneration. It describes the processes that force a person to release what is no longer viable in order to rebuild differently.",

        "Its position in your birth chart may reveal the areas in which you experience intense events, major questioning and a deep need for truth.",

        "Pluto does not necessarily announce negative events. It mainly represents the ability to move through a crisis, understand hidden mechanisms and recover a more conscious inner strength.",
      ],
    },

    transformation: {
      title:
        "Pluto, power and transformation",

      cards: [
        {
          symbol:
            "♇",

          title:
            "Your transformation",

          text:
            "Pluto describes the areas in which you are invited to release an old form in order to evolve profoundly.",
        },

        {
          symbol:
            "✦",

          title:
            "Your inner power",

          text:
            "It reveals your ability to face complex situations, endure and rebuild after a difficult period.",
        },

        {
          symbol:
            "◈",

          title:
            "Your depth",

          text:
            "Pluto shows your need to understand hidden truths, deep motivations and invisible mechanisms.",
        },
      ],
    },

    functions: {
      title:
        "Pluto’s main functions",

      cards: [
        {
          number:
            "01",

          title:
            "Reveal",

          text:
            "Pluto brings hidden truths, fears, attachments and power mechanisms to light.",
        },

        {
          number:
            "02",

          title:
            "Destroy",

          text:
            "It symbolizes the end of structures that have become too rigid, artificial or unable to support growth.",
        },

        {
          number:
            "03",

          title:
            "Transform",

          text:
            "Pluto pushes for profound changes in behavior, power dynamics and ways of living.",
        },

        {
          number:
            "04",

          title:
            "Regenerate",

          text:
            "It represents the ability to rebuild, recover personal strength and be reborn after a period of crisis.",
        },
      ],
    },

    planets: {
      title:
        "Pluto, Neptune and Saturn",

      cards: [
        {
          symbol:
            "♄",

          title:
            "Saturn",

          text:
            "It represents structures, limits, responsibility and lasting construction.",

          link:
            "Discover Saturn",
        },

        {
          symbol:
            "♆",

          title:
            "Neptune",

          text:
            "It symbolizes intuition, imagination, ideals and subtle perceptions.",

          link:
            "Discover Neptune",
        },

        {
          symbol:
            "♇",

          title:
            "Pluto",

          text:
            "It represents profound transformation, power, crises and regeneration.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Pluto",

      title:
        "Pluto in the 12 zodiac signs",

      introduction:
        "Pluto always retains its function of transformation, power and regeneration. The sign it occupies describes how a generation experiences major collective crises and periods of questioning.",

      titlePrefix:
        "Pluto in",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Pluto in Aries profoundly transforms the relationship with action, independence and personal assertion. This generational position may challenge models of power based on force, conquest and direct authority.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Pluto in Taurus transforms the relationship with resources, security and material values. This position invites the rebuilding of stronger foundations after major economic, social or personal transformations.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Pluto in Gemini transforms ideas, communication and the circulation of knowledge. This position may reveal the power of words, information and new ways of understanding the world.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Pluto in Cancer transforms family patterns, roots and the sense of belonging. This position may provoke profound questioning of protective structures and emotional inheritances.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Pluto in Leo transforms the relationship with creativity, recognition and personal power. This position may intensify the need for expression while revealing the limits of ego and individual authority.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Pluto in Virgo transforms working methods, habits and the relationship with efficiency. This position seeks to purify, correct and rebuild what no longer functions in everyday systems.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Pluto in Libra transforms relationships, contracts and partnership models. This position reveals power dynamics within bonds and encourages more authentic reciprocity.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Pluto in Scorpio intensifies transformation, crises and the search for truth. This generational position confronts taboos, attachments and power mechanisms in order to encourage profound regeneration.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Pluto in Sagittarius transforms beliefs, ideologies and worldviews. This position challenges collective certainties and encourages a deeper understanding of meaning and truth.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Pluto in Capricorn transforms institutions, power structures and models of success. This position reveals weaknesses in overly rigid systems and encourages the rebuilding of more responsible foundations.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Pluto in Aquarius transforms networks, groups, technologies and collective ideals. This position may profoundly change the relationship between individuals, communities and new forms of social power.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Pluto in Pisces transforms invisible beliefs, ideals, symbolic spirituality and emotional boundaries. This position may reveal collective illusions in order to allow profound inner rebirth.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of your transformation",

      title:
        "Pluto in the 12 astrological houses",

      introduction:
        "Pluto’s sign describes a collective transformation, while its house indicates the area of life in which your inner power, crises and capacity for regeneration are expressed most personally.",

      titlePrefix:
        "Pluto in",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Pluto in House I gives an intense, magnetic and deeply transformative presence. The person may experience several identity rebirths and develop great inner strength.",
      },

      {
        house:
          "House II",

        text:
          "Pluto in House II transforms the relationship with resources, values and security. The person may experience major material changes that lead them to redefine what truly possesses value.",
      },

      {
        house:
          "House III",

        text:
          "Pluto in House III gives deep, investigative and persuasive thinking. The person may seek to understand what is unspoken, hidden mechanisms and the true power of words.",
      },

      {
        house:
          "House IV",

        text:
          "Pluto in House IV intensifies experiences connected with home, family and roots. The person may be called to profoundly transform emotional or family inheritances.",
      },

      {
        house:
          "House V",

        text:
          "Pluto in House V gives intense creativity, powerful passions and a deep need for personal expression. Romantic relationships and creative projects may become transformative experiences.",
      },

      {
        house:
          "House VI",

        text:
          "Pluto in House VI transforms habits, work and daily organization. The person may feel a powerful need to improve methods, eliminate dysfunction and regain control of everyday life.",
      },

      {
        house:
          "House VII",

        text:
          "Pluto in House VII intensifies relationships and reveals power dynamics within partnerships. Important bonds may provoke profound personal transformations.",
      },

      {
        house:
          "House VIII",

        text:
          "Pluto in House VIII strengthens the ability to move through crises, losses and transformation. The person may possess great psychological depth and a strong capacity for regeneration.",
      },

      {
        house:
          "House IX",

        text:
          "Pluto in House IX transforms beliefs, convictions and worldview. Studies, travel or certain experiences may challenge deeply rooted certainties.",
      },

      {
        house:
          "House X",

        text:
          "Pluto in House X intensifies ambition, vocation and the relationship with professional power. The person may experience several career transformations and seek to exercise profound influence.",
      },

      {
        house:
          "House XI",

        text:
          "Pluto in House XI transforms friendships, networks and collective projects. The person may play a powerful role within a group and be called to redefine alliances.",
      },

      {
        house:
          "House XII",

        text:
          "Pluto in House XII reveals unconscious forces, deep fears and hidden mechanisms. Introspection may become a powerful tool for symbolic healing and inner transformation.",
      },
    ],

    retrograde: {
      kicker:
        "Inner transformation",

      title:
        "What does retrograde Pluto mean?",

      paragraphs: [
        "From Earth, Pluto sometimes appears to slow down and temporarily move backward in the sky. This is an apparent movement caused by the relative positions of Earth and Pluto.",

        "In astrological interpretation, retrograde Pluto is often associated with a more inward process of transformation. The person may deeply explore their relationship with power, control and hidden fears.",

        "This period may invite the recognition of attachments that have become too heavy, observation of unconscious mechanisms and the recovery of personal power without seeking to control others.",
      ],

      cardSymbol:
        "♇℞",

      cardTitle:
        "An invitation to transform",

      items: [
        "Observe your relationship with control",
        "Recognize deep fears",
        "Release old attachments",
        "Reclaim personal power",
        "Transform unconscious patterns",
      ],
    },

    strengths: {
      title:
        "Pluto’s strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "A power of regeneration",

      strengths: [
        "Resilience",
        "Psychological depth",
        "Courage during crises",
        "Capacity for transformation",
        "Insight",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Use power consciously",

      challenges: [
        "Need for control",
        "Excessive distrust",
        "Obsession",
        "Difficulty letting go",
        "Power struggles",
      ],
    },

    aspectsSection: {
      title:
        "Pluto’s astrological aspects",

      introduction:
        "Aspects connect Pluto with the other planets in the birth chart. They add nuance to your relationship with power, transformation, crises and regeneration.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Pluto with another planet and profoundly intensifies its expression.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a natural ability to transform, deepen and regenerate the qualities of the other planet.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for constructive transformation, insight and inner growth.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may create intense tension around power, control or the need for profound change.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It invites recognition of external power dynamics and balance between control and letting go.",
      },
    ],

    cta: {
      kicker:
        "Discover your position",

      title:
        "Which sign and house contain your Pluto?",

      text:
        "Generate your free birth chart to discover Pluto, Neptune, Uranus, Saturn and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Pluto in astrology",

      items: [
        {
          question:
            "What does Pluto represent in astrology?",

          answer:
            "Pluto symbolically represents profound transformation, crises, power, loss, regeneration, hidden truths and the ability to be reborn after a period of upheaval.",
        },

        {
          question:
            "Why is Pluto associated with transformation?",

          answer:
            "Pluto symbolizes processes that require an outdated structure to be released so that something more authentic and solid can be rebuilt.",
        },

        {
          question:
            "What does Pluto’s sign mean?",

          answer:
            "Pluto’s sign describes how a generation experiences collective transformation, power crises and the major periods of questioning of its era.",
        },

        {
          question:
            "What does retrograde Pluto mean in a birth chart?",

          answer:
            "Natal retrograde Pluto may symbolize a more inward transformation, a personal relationship with power and a tendency to explore unconscious mechanisms deeply.",
        },

        {
          question:
            "Is retrograde Pluto negative?",

          answer:
            "No. This position is generally interpreted as an invitation to examine your relationship with control, fears, attachments and inner transformation.",
        },

        {
          question:
            "How can I find my Pluto sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine Pluto’s exact position.",
        },

        {
          question:
            "What is the difference between Neptune and Pluto?",

          answer:
            "Neptune symbolizes intuition, imagination and the dissolution of boundaries, while Pluto represents profound transformation, power, crises and regeneration.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Plutón en astrología: transformación, poder y renacimiento | Luna Astralis",
      description:
        "Descubre el significado de Plutón en astrología, su influencia sobre las transformaciones, el poder interior, las crisis, la regeneración y su expresión en los 12 signos.",
      ogTitle:
        "Plutón en astrología: transformación, poder y renacimiento",
      ogDescription:
        "Comprende el papel de Plutón en tu carta natal y descubre cómo este planeta simboliza las transformaciones profundas, el poder interior y la regeneración.",
      twitterTitle:
        "Plutón en astrología | Luna Astralis",
      twitterDescription:
        "Descubre cómo Plutón simboliza la transformación, el poder interior, las crisis y el renacimiento.",
      locale:
        "es_ES",
      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Plutón en astrología: transformación, poder y renacimiento",
      description:
        "Guía completa sobre el papel de Plutón en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "♇ Planetas y carta natal",
      title:
        "Plutón en astrología",
      lead:
        "Plutón representa tus transformaciones profundas, tu poder interior, tus crisis de crecimiento y tu capacidad de renacer después de grandes cambios.",
      createChart:
        "Crear mi carta natal gratis",
      seeSigns:
        "Ver los 12 signos",
    },

    introduction: {
      kicker:
        "Comprender tu poder de transformación",
      title:
        "¿Qué representa Plutón en una carta natal?",
      paragraphs: [
        "En astrología, Plutón simboliza las transformaciones profundas, las crisis, las relaciones de poder y la regeneración. Describe los procesos que obligan a una persona a abandonar aquello que ya no es viable para reconstruir de otra manera.",
        "Su posición en tu carta natal puede revelar los ámbitos en los que vives experiencias intensas, grandes cuestionamientos y una profunda necesidad de verdad.",
        "Plutón no anuncia necesariamente acontecimientos negativos. Representa principalmente la capacidad de atravesar una crisis, comprender los mecanismos ocultos y recuperar una fuerza interior más consciente.",
      ],
    },

    transformation: {
      title:
        "Plutón, el poder y la transformación",
      cards: [
        {
          symbol:
            "♇",
          title:
            "Tu transformación",
          text:
            "Plutón describe los ámbitos en los que estás invitado a abandonar una forma antigua para evolucionar profundamente.",
        },
        {
          symbol:
            "✦",
          title:
            "Tu poder interior",
          text:
            "Revela tu capacidad para afrontar situaciones complejas, resistir y reconstruir después de un período difícil.",
        },
        {
          symbol:
            "◈",
          title:
            "Tu profundidad",
          text:
            "Plutón muestra tu necesidad de comprender las verdades ocultas, las motivaciones profundas y los mecanismos invisibles.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Plutón",
      cards: [
        {
          number:
            "01",
          title:
            "Revelar",
          text:
            "Plutón saca a la luz las verdades ocultas, los miedos, los apegos y los mecanismos de poder.",
        },
        {
          number:
            "02",
          title:
            "Destruir",
          text:
            "Simboliza el final de las estructuras que se han vuelto demasiado rígidas, artificiales o incapaces de sostener la evolución.",
        },
        {
          number:
            "03",
          title:
            "Transformar",
          text:
            "Plutón impulsa cambios profundos en los comportamientos, las relaciones de fuerza y las maneras de vivir.",
        },
        {
          number:
            "04",
          title:
            "Regenerar",
          text:
            "Representa la capacidad de reconstruir, recuperar el poder personal y renacer después de un período de crisis.",
        },
      ],
    },

    planets: {
      title:
        "Plutón, Neptuno y Saturno",
      cards: [
        {
          symbol:
            "♄",
          title:
            "Saturno",
          text:
            "Representa las estructuras, los límites, la responsabilidad y la construcción duradera.",
          link:
            "Descubrir Saturno",
        },
        {
          symbol:
            "♆",
          title:
            "Neptuno",
          text:
            "Simboliza la intuición, la imaginación, los ideales y las percepciones sutiles.",
          link:
            "Descubrir Neptuno",
        },
        {
          symbol:
            "♇",
          title:
            "Plutón",
          text:
            "Representa la transformación profunda, el poder, las crisis y la regeneración.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Plutón",
      title:
        "Plutón en los 12 signos astrológicos",
      introduction:
        "Plutón siempre conserva su función de transformación, poder y regeneración. El signo en el que se encuentra describe cómo una generación atraviesa las grandes crisis y los cuestionamientos colectivos.",
      titlePrefix:
        "Plutón en",
    },

    signs: [
      {
        sign:
          "Aries",
        symbol:
          "♈",
        text:
          "Plutón en Aries transforma profundamente la relación con la acción, la independencia y la afirmación personal. Esta posición generacional puede cuestionar los modelos de poder basados en la fuerza, la conquista y la autoridad directa.",
      },
      {
        sign:
          "Tauro",
        symbol:
          "♉",
        text:
          "Plutón en Tauro transforma la relación con los recursos, la seguridad y los valores materiales. Esta posición invita a reconstruir bases más sólidas después de importantes transformaciones económicas, sociales o personales.",
      },
      {
        sign:
          "Géminis",
        symbol:
          "♊",
        text:
          "Plutón en Géminis transforma las ideas, las comunicaciones y la circulación del conocimiento. Esta posición puede revelar el poder de las palabras, la información y las nuevas maneras de comprender el mundo.",
      },
      {
        sign:
          "Cáncer",
        symbol:
          "♋",
        text:
          "Plutón en Cáncer transforma los modelos familiares, las raíces y el sentimiento de pertenencia. Esta posición puede provocar un profundo cuestionamiento de las estructuras protectoras y las herencias emocionales.",
      },
      {
        sign:
          "Leo",
        symbol:
          "♌",
        text:
          "Plutón en Leo transforma la relación con la creatividad, el reconocimiento y el poder personal. Esta posición puede intensificar la necesidad de expresión y revelar los límites del ego y de la autoridad individual.",
      },
      {
        sign:
          "Virgo",
        symbol:
          "♍",
        text:
          "Plutón en Virgo transforma los métodos de trabajo, los hábitos y la relación con la eficacia. Esta posición busca purificar, corregir y reconstruir aquello que ya no funciona en los sistemas cotidianos.",
      },
      {
        sign:
          "Libra",
        symbol:
          "♎",
        text:
          "Plutón en Libra transforma las relaciones, los contratos y los modelos de pareja. Esta posición revela las relaciones de poder dentro de los vínculos e impulsa una reciprocidad más auténtica.",
      },
      {
        sign:
          "Escorpio",
        symbol:
          "♏",
        text:
          "Plutón en Escorpio intensifica las transformaciones, las crisis y la búsqueda de la verdad. Esta posición generacional enfrenta los tabúes, los apegos y los mecanismos de poder para favorecer una profunda regeneración.",
      },
      {
        sign:
          "Sagitario",
        symbol:
          "♐",
        text:
          "Plutón en Sagitario transforma las creencias, las ideologías y las visiones del mundo. Esta posición cuestiona las certezas colectivas e impulsa una comprensión más profunda del sentido y la verdad.",
      },
      {
        sign:
          "Capricornio",
        symbol:
          "♑",
        text:
          "Plutón en Capricornio transforma las instituciones, las estructuras de poder y los modelos de éxito. Esta posición revela las fallas de los sistemas demasiado rígidos e impulsa la reconstrucción de bases más responsables.",
      },
      {
        sign:
          "Acuario",
        symbol:
          "♒",
        text:
          "Plutón en Acuario transforma las redes, los grupos, las tecnologías y los ideales colectivos. Esta posición puede alterar profundamente la relación entre el individuo, la comunidad y las nuevas formas de poder social.",
      },
      {
        sign:
          "Piscis",
        symbol:
          "♓",
        text:
          "Plutón en Piscis transforma las creencias invisibles, los ideales, la espiritualidad simbólica y los límites emocionales. Esta posición puede revelar las ilusiones colectivas para permitir un profundo renacimiento interior.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos de tu transformación",
      title:
        "Plutón en las 12 casas astrológicas",
      introduction:
        "El signo de Plutón describe una transformación colectiva, mientras que su casa indica el ámbito de vida en el que tu poder interior, tus crisis y tu capacidad de regeneración se expresan de manera más personal.",
      titlePrefix:
        "Plutón en",
    },

    houses: [
      {
        house:
          "Casa I",
        text:
          "Plutón en la Casa I aporta una presencia intensa, magnética y profundamente transformadora. La persona puede vivir varios renacimientos de identidad y desarrollar un gran poder interior.",
      },
      {
        house:
          "Casa II",
        text:
          "Plutón en la Casa II transforma la relación con los recursos, los valores y la seguridad. La persona puede atravesar importantes cambios materiales que la llevan a redefinir aquello que posee verdadero valor.",
      },
      {
        house:
          "Casa III",
        text:
          "Plutón en la Casa III aporta un pensamiento profundo, investigador y persuasivo. La persona puede buscar comprender lo que no se dice, los mecanismos ocultos y el verdadero alcance de las palabras.",
      },
      {
        house:
          "Casa IV",
        text:
          "Plutón en la Casa IV intensifica las experiencias relacionadas con el hogar, la familia y las raíces. La persona puede verse llamada a transformar profundamente ciertas herencias emocionales o familiares.",
      },
      {
        house:
          "Casa V",
        text:
          "Plutón en la Casa V aporta una creatividad intensa, pasiones poderosas y una profunda necesidad de expresión personal. Las relaciones amorosas y los proyectos creativos pueden convertirse en experiencias transformadoras.",
      },
      {
        house:
          "Casa VI",
        text:
          "Plutón en la Casa VI transforma los hábitos, el trabajo y la organización cotidiana. La persona puede sentir una poderosa necesidad de mejorar los métodos, eliminar los problemas y recuperar el control de su vida diaria.",
      },
      {
        house:
          "Casa VII",
        text:
          "Plutón en la Casa VII intensifica las relaciones y revela las dinámicas de poder dentro de las parejas. Los vínculos importantes pueden provocar profundas transformaciones personales.",
      },
      {
        house:
          "Casa VIII",
        text:
          "Plutón en la Casa VIII refuerza la capacidad para atravesar crisis, pérdidas y transformaciones. La persona puede poseer una gran profundidad psicológica y una fuerte capacidad de regeneración.",
      },
      {
        house:
          "Casa IX",
        text:
          "Plutón en la Casa IX transforma las creencias, las convicciones y la visión del mundo. Los estudios, los viajes o ciertas experiencias pueden cuestionar certezas profundamente arraigadas.",
      },
      {
        house:
          "Casa X",
        text:
          "Plutón en la Casa X intensifica la ambición, la vocación y la relación con el poder profesional. La persona puede vivir varias transformaciones de carrera y buscar ejercer una influencia profunda.",
      },
      {
        house:
          "Casa XI",
        text:
          "Plutón en la Casa XI transforma las amistades, las redes y los proyectos colectivos. La persona puede desempeñar un papel poderoso dentro de un grupo y verse llamada a redefinir sus alianzas.",
      },
      {
        house:
          "Casa XII",
        text:
          "Plutón en la Casa XII revela fuerzas inconscientes, miedos profundos y mecanismos ocultos. La introspección puede convertirse en una poderosa herramienta de sanación simbólica y transformación interior.",
      },
    ],

    retrograde: {
      kicker:
        "Transformación interior",
      title:
        "¿Qué significa Plutón retrógrado?",
      paragraphs: [
        "Desde la Tierra, Plutón a veces parece disminuir su velocidad y retroceder temporalmente en el cielo. Se trata de un movimiento aparente relacionado con las posiciones relativas de la Tierra y Plutón.",
        "En la interpretación astrológica, Plutón retrógrado suele asociarse con un proceso de transformación más interior. La persona puede explorar profundamente su relación con el poder, el control y los miedos ocultos.",
        "Este período puede invitar a reconocer los apegos que se han vuelto demasiado pesados, observar los mecanismos inconscientes y recuperar el poder personal sin intentar controlar a los demás.",
      ],
      cardSymbol:
        "♇℞",
      cardTitle:
        "Una invitación a transformar",
      items: [
        "Observar la relación con el control",
        "Reconocer los miedos profundos",
        "Abandonar los antiguos apegos",
        "Recuperar el poder personal",
        "Transformar los patrones inconscientes",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Plutón",
      strengthsKicker:
        "Fortalezas posibles",
      strengthsTitle:
        "Un poder de regeneración",
      strengths: [
        "Resiliencia",
        "Profundidad psicológica",
        "Valor frente a las crisis",
        "Capacidad de transformación",
        "Lucidez",
      ],
      challengesKicker:
        "Puntos de atención",
      challengesTitle:
        "Utilizar el poder con conciencia",
      challenges: [
        "Necesidad de control",
        "Desconfianza excesiva",
        "Obsesión",
        "Dificultad para soltar",
        "Relaciones de poder",
      ],
    },

    aspectsSection: {
      title:
        "Los aspectos astrológicos de Plutón",
      introduction:
        "Los aspectos relacionan Plutón con los demás planetas de la carta natal. Aportan matices a tu relación con el poder, las transformaciones, las crisis y la regeneración.",
    },

    aspects: [
      {
        symbol:
          "☌",
        title:
          "La conjunción",
        text:
          "Fusiona Plutón con otro planeta e intensifica profundamente su expresión.",
      },
      {
        symbol:
          "△",
        title:
          "El trígono",
        text:
          "Puede simbolizar una capacidad natural para transformar, profundizar y regenerar las cualidades del otro planeta.",
      },
      {
        symbol:
          "✶",
        title:
          "El sextil",
        text:
          "Representa un potencial de transformación constructiva, lucidez y crecimiento interior.",
      },
      {
        symbol:
          "□",
        title:
          "La cuadratura",
        text:
          "Puede crear una tensión intensa relacionada con el poder, el control o la necesidad de cambiar profundamente.",
      },
      {
        symbol:
          "☍",
        title:
          "La oposición",
        text:
          "Invita a reconocer las relaciones de fuerza externas y encontrar un equilibrio entre el control y la capacidad de soltar.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",
      title:
        "¿En qué signo y casa se encuentra tu Plutón?",
      text:
        "Genera gratuitamente tu carta natal para descubrir Plutón, Neptuno, Urano, Saturno y las posiciones de tus principales planetas.",
      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",
      title:
        "Preguntas sobre Plutón en astrología",
      items: [
        {
          question:
            "¿Qué representa Plutón en astrología?",
          answer:
            "Plutón representa simbólicamente las transformaciones profundas, las crisis, el poder, las pérdidas, la regeneración, las verdades ocultas y la capacidad de renacer después de un período de grandes cambios.",
        },
        {
          question:
            "¿Por qué Plutón se asocia con la transformación?",
          answer:
            "Plutón simboliza los procesos que obligan a abandonar una antigua estructura que ya no es adecuada para reconstruir algo más auténtico y sólido.",
        },
        {
          question:
            "¿Qué significa el signo de Plutón?",
          answer:
            "El signo de Plutón describe cómo una generación vive las transformaciones colectivas, las crisis de poder y los grandes cuestionamientos de su época.",
        },
        {
          question:
            "¿Qué significa Plutón retrógrado en una carta natal?",
          answer:
            "Plutón retrógrado al nacer puede simbolizar una transformación más interior, una relación personal con el poder y una tendencia a explorar profundamente los mecanismos inconscientes.",
        },
        {
          question:
            "¿Plutón retrógrado es negativo?",
          answer:
            "No. Esta posición se interpreta más bien como una invitación a examinar la relación con el control, los miedos, los apegos y las transformaciones interiores.",
        },
        {
          question:
            "¿Cómo conocer mi signo de Plutón?",
          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Plutón.",
        },
        {
          question:
            "¿Cuál es la diferencia entre Neptuno y Plutón?",
          answer:
            "Neptuno simboliza la intuición, la imaginación y la disolución de los límites, mientras que Plutón representa la transformación profunda, el poder, las crisis y la regeneración.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Pluto in der Astrologie: Transformation, Macht und Wiedergeburt | Luna Astralis",
      description:
        "Entdecken Sie die Bedeutung Plutos in der Astrologie, seinen Einfluss auf Transformation, innere Macht, Krisen, Regeneration und seinen Ausdruck in den 12 Tierkreiszeichen.",
      ogTitle:
        "Pluto in der Astrologie: Transformation, Macht und Wiedergeburt",
      ogDescription:
        "Verstehen Sie Plutos Rolle im Geburtshoroskop und entdecken Sie, wie dieser Planet tiefgreifende Transformation, innere Macht und Regeneration symbolisiert.",
      twitterTitle:
        "Pluto in der Astrologie | Luna Astralis",
      twitterDescription:
        "Entdecken Sie, wie Pluto Transformation, innere Stärke, Krisen und Wiedergeburt symbolisiert.",
      locale:
        "de_DE",
      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Pluto in der Astrologie: Transformation, Macht und Wiedergeburt",
      description:
        "Ein vollständiger Leitfaden zu Plutos Rolle im Geburtshoroskop und seinem Ausdruck in den zwölf Tierkreiszeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "♇ Planeten und Geburtshoroskop",
      title:
        "Pluto in der Astrologie",
      lead:
        "Pluto steht für tiefgreifende Veränderungen, innere Macht, Wachstumskrisen und die Fähigkeit, nach großen Umbrüchen neu zu beginnen.",
      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",
      seeSigns:
        "Die 12 Zeichen ansehen",
    },

    introduction: {
      kicker:
        "Ihre Transformationskraft verstehen",
      title:
        "Was bedeutet Pluto im Geburtshoroskop?",
      paragraphs: [
        "In der Astrologie symbolisiert Pluto tiefgreifende Veränderungen, Krisen, Machtverhältnisse und Regeneration. Er beschreibt Prozesse, die einen Menschen dazu zwingen, nicht mehr tragfähige Strukturen loszulassen und sich neu aufzubauen.",
        "Seine Position im Geburtshoroskop kann die Bereiche zeigen, in denen Sie intensive Erfahrungen, große Infragestellungen und ein tiefes Bedürfnis nach Wahrheit erleben.",
        "Pluto kündigt nicht zwangsläufig negative Ereignisse an. Er steht vor allem für die Fähigkeit, Krisen zu durchlaufen, verborgene Mechanismen zu verstehen und eine bewusstere innere Stärke zurückzugewinnen.",
      ],
    },

    transformation: {
      title:
        "Pluto, Macht und Transformation",
      cards: [
        {
          symbol:
            "♇",
          title:
            "Ihre Transformation",
          text:
            "Pluto beschreibt die Bereiche, in denen Sie aufgefordert werden, eine alte Form loszulassen, um sich tiefgreifend weiterzuentwickeln.",
        },
        {
          symbol:
            "✦",
          title:
            "Ihre innere Macht",
          text:
            "Er zeigt Ihre Fähigkeit, komplexe Situationen zu bewältigen, durchzuhalten und sich nach schwierigen Zeiten neu aufzubauen.",
        },
        {
          symbol:
            "◈",
          title:
            "Ihre Tiefe",
          text:
            "Pluto zeigt Ihr Bedürfnis, verborgene Wahrheiten, tiefe Motivationen und unsichtbare Mechanismen zu verstehen.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen Plutos",
      cards: [
        {
          number:
            "01",
          title:
            "Enthüllen",
          text:
            "Pluto bringt verborgene Wahrheiten, Ängste, Bindungen und Machtmechanismen ans Licht.",
        },
        {
          number:
            "02",
          title:
            "Zerstören",
          text:
            "Er symbolisiert das Ende von Strukturen, die zu starr, künstlich oder unfähig geworden sind, weiteres Wachstum zu tragen.",
        },
        {
          number:
            "03",
          title:
            "Transformieren",
          text:
            "Pluto drängt zu tiefgreifenden Veränderungen von Verhaltensweisen, Machtverhältnissen und Lebensformen.",
        },
        {
          number:
            "04",
          title:
            "Regenerieren",
          text:
            "Er steht für die Fähigkeit, sich neu aufzubauen, die eigene Kraft zurückzugewinnen und nach einer Krise neu zu beginnen.",
        },
      ],
    },

    planets: {
      title:
        "Pluto, Neptun und Saturn",
      cards: [
        {
          symbol:
            "♄",
          title:
            "Saturn",
          text:
            "Er steht für Strukturen, Grenzen, Verantwortung und dauerhaften Aufbau.",
          link:
            "Saturn entdecken",
        },
        {
          symbol:
            "♆",
          title:
            "Neptun",
          text:
            "Er symbolisiert Intuition, Fantasie, Ideale und feine Wahrnehmungen.",
          link:
            "Neptun entdecken",
        },
        {
          symbol:
            "♇",
          title:
            "Pluto",
          text:
            "Er steht für tiefgreifende Transformation, Macht, Krisen und Regeneration.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen Plutos",
      title:
        "Pluto in den 12 Tierkreiszeichen",
      introduction:
        "Pluto behält stets seine Funktion von Transformation, Macht und Regeneration. Das Zeichen, in dem er steht, beschreibt, wie eine Generation große kollektive Krisen und Zeiten der Infragestellung erlebt.",
      titlePrefix:
        "Pluto in",
    },

    signs: [
      {
        sign:
          "Widder",
        symbol:
          "♈",
        text:
          "Pluto im Widder verändert tiefgreifend das Verhältnis zu Handlung, Unabhängigkeit und persönlicher Durchsetzung. Diese Generationenstellung kann Machtmodelle infrage stellen, die auf Stärke, Eroberung und direkter Autorität beruhen.",
      },
      {
        sign:
          "Stier",
        symbol:
          "♉",
        text:
          "Pluto im Stier verändert das Verhältnis zu Ressourcen, Sicherheit und materiellen Werten. Diese Stellung lädt dazu ein, nach großen wirtschaftlichen, sozialen oder persönlichen Veränderungen stabilere Grundlagen aufzubauen.",
      },
      {
        sign:
          "Zwillinge",
        symbol:
          "♊",
        text:
          "Pluto in den Zwillingen verändert Ideen, Kommunikation und Wissensvermittlung. Diese Stellung kann die Macht von Worten, Informationen und neuen Arten des Weltverständnisses sichtbar machen.",
      },
      {
        sign:
          "Krebs",
        symbol:
          "♋",
        text:
          "Pluto im Krebs verändert Familienmuster, Wurzeln und Zugehörigkeitsgefühl. Diese Stellung kann Schutzstrukturen und emotionale Erbschaften tiefgreifend infrage stellen.",
      },
      {
        sign:
          "Löwe",
        symbol:
          "♌",
        text:
          "Pluto im Löwen verändert das Verhältnis zu Kreativität, Anerkennung und persönlicher Macht. Diese Stellung kann das Ausdrucksbedürfnis verstärken und zugleich die Grenzen von Ego und individueller Autorität offenlegen.",
      },
      {
        sign:
          "Jungfrau",
        symbol:
          "♍",
        text:
          "Pluto in der Jungfrau verändert Arbeitsmethoden, Gewohnheiten und den Umgang mit Effizienz. Diese Stellung versucht zu reinigen, zu korrigieren und neu aufzubauen, was in alltäglichen Systemen nicht mehr funktioniert.",
      },
      {
        sign:
          "Waage",
        symbol:
          "♎",
        text:
          "Pluto in der Waage verändert Beziehungen, Verträge und Partnerschaftsmodelle. Diese Stellung macht Machtverhältnisse in Bindungen sichtbar und fordert zu echterer Gegenseitigkeit auf.",
      },
      {
        sign:
          "Skorpion",
        symbol:
          "♏",
        text:
          "Pluto im Skorpion verstärkt Veränderungen, Krisen und die Suche nach Wahrheit. Diese Generationenstellung konfrontiert Tabus, Bindungen und Machtmechanismen, um tiefgreifende Regeneration zu ermöglichen.",
      },
      {
        sign:
          "Schütze",
        symbol:
          "♐",
        text:
          "Pluto im Schützen verändert Überzeugungen, Ideologien und Weltbilder. Diese Stellung stellt kollektive Gewissheiten infrage und drängt zu einem tieferen Verständnis von Sinn und Wahrheit.",
      },
      {
        sign:
          "Steinbock",
        symbol:
          "♑",
        text:
          "Pluto im Steinbock verändert Institutionen, Machtstrukturen und Erfolgsmodelle. Diese Stellung legt Schwächen zu starrer Systeme offen und fordert den Aufbau verantwortungsvollerer Grundlagen.",
      },
      {
        sign:
          "Wassermann",
        symbol:
          "♒",
        text:
          "Pluto im Wassermann verändert Netzwerke, Gruppen, Technologien und kollektive Ideale. Diese Stellung kann das Verhältnis zwischen Individuum, Gemeinschaft und neuen Formen sozialer Macht grundlegend verändern.",
      },
      {
        sign:
          "Fische",
        symbol:
          "♓",
        text:
          "Pluto in den Fischen verändert unsichtbare Überzeugungen, Ideale, symbolische Spiritualität und emotionale Grenzen. Diese Stellung kann kollektive Illusionen offenlegen und eine tiefgreifende innere Wiedergeburt ermöglichen.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche Ihrer Transformation",
      title:
        "Pluto in den 12 astrologischen Häusern",
      introduction:
        "Plutos Zeichen beschreibt eine kollektive Transformation, während sein Haus den Lebensbereich zeigt, in dem sich Ihre innere Macht, Krisen und Regenerationsfähigkeit am persönlichsten ausdrücken.",
      titlePrefix:
        "Pluto in",
    },

    houses: [
      {
        house:
          "Haus I",
        text:
          "Pluto im ersten Haus verleiht eine intensive, magnetische und tief transformierende Präsenz. Die Person kann mehrere Identitätswandlungen erleben und große innere Kraft entwickeln.",
      },
      {
        house:
          "Haus II",
        text:
          "Pluto im zweiten Haus verändert das Verhältnis zu Ressourcen, Werten und Sicherheit. Die Person kann bedeutende materielle Veränderungen erleben, die zu einer Neudefinition dessen führen, was wirklich wertvoll ist.",
      },
      {
        house:
          "Haus III",
        text:
          "Pluto im dritten Haus verleiht tiefes, forschendes und überzeugendes Denken. Die Person kann unausgesprochene Inhalte, verborgene Mechanismen und die wahre Wirkung von Worten verstehen wollen.",
      },
      {
        house:
          "Haus IV",
        text:
          "Pluto im vierten Haus intensiviert Erfahrungen rund um Zuhause, Familie und Wurzeln. Die Person kann aufgefordert werden, emotionale oder familiäre Erbschaften tiefgreifend zu verändern.",
      },
      {
        house:
          "Haus V",
        text:
          "Pluto im fünften Haus verleiht intensive Kreativität, starke Leidenschaften und ein tiefes Ausdrucksbedürfnis. Liebesbeziehungen und kreative Projekte können zu transformierenden Erfahrungen werden.",
      },
      {
        house:
          "Haus VI",
        text:
          "Pluto im sechsten Haus verändert Gewohnheiten, Arbeit und Alltagsorganisation. Die Person kann ein starkes Bedürfnis verspüren, Methoden zu verbessern, Fehlfunktionen zu beseitigen und Kontrolle über den Alltag zurückzugewinnen.",
      },
      {
        house:
          "Haus VII",
        text:
          "Pluto im siebten Haus intensiviert Beziehungen und macht Machtverhältnisse in Partnerschaften sichtbar. Bedeutende Bindungen können tiefgreifende persönliche Veränderungen auslösen.",
      },
      {
        house:
          "Haus VIII",
        text:
          "Pluto im achten Haus stärkt die Fähigkeit, Krisen, Verluste und Veränderungen zu durchlaufen. Die Person kann große psychologische Tiefe und starke Regenerationsfähigkeit besitzen.",
      },
      {
        house:
          "Haus IX",
        text:
          "Pluto im neunten Haus verändert Überzeugungen, Weltanschauungen und Lebensbilder. Studium, Reisen oder bestimmte Erfahrungen können tief verwurzelte Gewissheiten infrage stellen.",
      },
      {
        house:
          "Haus X",
        text:
          "Pluto im zehnten Haus verstärkt Ehrgeiz, Berufung und das Verhältnis zu beruflicher Macht. Die Person kann mehrere berufliche Veränderungen erleben und nach tiefgreifendem Einfluss streben.",
      },
      {
        house:
          "Haus XI",
        text:
          "Pluto im elften Haus verändert Freundschaften, Netzwerke und Gemeinschaftsprojekte. Die Person kann eine starke Rolle in Gruppen spielen und ihre Bündnisse neu definieren müssen.",
      },
      {
        house:
          "Haus XII",
        text:
          "Pluto im zwölften Haus enthüllt unbewusste Kräfte, tiefe Ängste und verborgene Mechanismen. Selbstreflexion kann zu einem kraftvollen Werkzeug symbolischer Heilung und innerer Transformation werden.",
      },
    ],

    retrograde: {
      kicker:
        "Innere Transformation",
      title:
        "Was bedeutet rückläufiger Pluto?",
      paragraphs: [
        "Von der Erde aus scheint Pluto manchmal langsamer zu werden und sich vorübergehend rückwärts am Himmel zu bewegen. Dabei handelt es sich um eine scheinbare Bewegung, die mit den relativen Positionen von Erde und Pluto zusammenhängt.",
        "In der astrologischen Deutung wird rückläufiger Pluto häufig mit einem stärker innerlichen Transformationsprozess verbunden. Die Person kann ihr Verhältnis zu Macht, Kontrolle und verborgenen Ängsten tief erforschen.",
        "Diese Phase kann dazu einladen, zu schwer gewordene Bindungen zu erkennen, unbewusste Mechanismen zu beobachten und die eigene Macht zurückzugewinnen, ohne andere kontrollieren zu wollen.",
      ],
      cardSymbol:
        "♇℞",
      cardTitle:
        "Eine Einladung zur Transformation",
      items: [
        "Das Verhältnis zu Kontrolle beobachten",
        "Tiefe Ängste erkennen",
        "Alte Bindungen loslassen",
        "Persönliche Macht zurückgewinnen",
        "Unbewusste Muster verändern",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen Plutos",
      strengthsKicker:
        "Mögliche Stärken",
      strengthsTitle:
        "Eine Kraft der Regeneration",
      strengths: [
        "Widerstandsfähigkeit",
        "Psychologische Tiefe",
        "Mut in Krisen",
        "Transformationsfähigkeit",
        "Klarheit",
      ],
      challengesKicker:
        "Wichtige Lernfelder",
      challengesTitle:
        "Macht bewusst einsetzen",
      challenges: [
        "Kontrollbedürfnis",
        "Übermäßiges Misstrauen",
        "Besessenheit",
        "Schwierigkeit loszulassen",
        "Machtkämpfe",
      ],
    },

    aspectsSection: {
      title:
        "Die astrologischen Aspekte Plutos",
      introduction:
        "Aspekte verbinden Pluto mit den anderen Planeten im Geburtshoroskop. Sie verleihen Ihrem Verhältnis zu Macht, Veränderung, Krisen und Regeneration zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",
        title:
          "Die Konjunktion",
        text:
          "Sie verbindet Pluto mit einem anderen Planeten und intensiviert dessen Ausdruck tiefgreifend.",
      },
      {
        symbol:
          "△",
        title:
          "Das Trigon",
        text:
          "Es kann eine natürliche Fähigkeit symbolisieren, die Eigenschaften des anderen Planeten zu verändern, zu vertiefen und zu regenerieren.",
      },
      {
        symbol:
          "✶",
        title:
          "Das Sextil",
        text:
          "Es steht für Potenzial zu konstruktiver Transformation, Klarheit und innerem Wachstum.",
      },
      {
        symbol:
          "□",
        title:
          "Das Quadrat",
        text:
          "Es kann intensive Spannungen rund um Macht, Kontrolle oder die Notwendigkeit tiefgreifender Veränderung erzeugen.",
      },
      {
        symbol:
          "☍",
        title:
          "Die Opposition",
        text:
          "Sie lädt dazu ein, äußere Machtverhältnisse zu erkennen und ein Gleichgewicht zwischen Kontrolle und Loslassen zu finden.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",
      title:
        "In welchem Zeichen und Haus steht Ihr Pluto?",
      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Pluto, Neptun, Uranus, Saturn und die Positionen Ihrer wichtigsten Planeten.",
      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",
      title:
        "Fragen zu Pluto in der Astrologie",
      items: [
        {
          question:
            "Was bedeutet Pluto in der Astrologie?",
          answer:
            "Pluto symbolisiert tiefgreifende Veränderungen, Krisen, Macht, Verluste, Regeneration, verborgene Wahrheiten und die Fähigkeit, nach einer Phase des Umbruchs neu zu beginnen.",
        },
        {
          question:
            "Warum wird Pluto mit Transformation verbunden?",
          answer:
            "Pluto symbolisiert Prozesse, die dazu zwingen, eine ungeeignete alte Struktur aufzugeben, damit etwas Authentischeres und Stabileres entstehen kann.",
        },
        {
          question:
            "Was bedeutet Plutos Zeichen?",
          answer:
            "Plutos Zeichen beschreibt, wie eine Generation kollektive Veränderungen, Machtkrisen und die großen Infragestellungen ihrer Zeit erlebt.",
        },
        {
          question:
            "Was bedeutet rückläufiger Pluto im Geburtshoroskop?",
          answer:
            "Rückläufiger Pluto bei der Geburt kann eine stärker innerliche Transformation, ein persönliches Verhältnis zu Macht und eine Neigung symbolisieren, unbewusste Mechanismen tief zu erforschen.",
        },
        {
          question:
            "Ist rückläufiger Pluto negativ?",
          answer:
            "Nein. Diese Stellung wird eher als Einladung verstanden, das eigene Verhältnis zu Kontrolle, Ängsten, Bindungen und inneren Veränderungen zu untersuchen.",
        },
        {
          question:
            "Wie finde ich mein Plutozeichen?",
          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Geburtsdatum, Geburtszeit und Geburtsort berechnen, um Plutos genaue Position zu bestimmen.",
        },
        {
          question:
            "Was ist der Unterschied zwischen Neptun und Pluto?",
          answer:
            "Neptun symbolisiert Intuition, Fantasie und die Auflösung von Grenzen, während Pluto für tiefgreifende Transformation, Macht, Krisen und Regeneration steht.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Plutone in astrologia: trasformazione, potere e rinascita | Luna Astralis",
      description:
        "Scopri il significato di Plutone in astrologia, la sua influenza sulle trasformazioni, il potere interiore, le crisi, la rigenerazione e la sua espressione nei 12 segni.",
      ogTitle:
        "Plutone in astrologia: trasformazione, potere e rinascita",
      ogDescription:
        "Comprendi il ruolo di Plutone nel tema natale e scopri come questo pianeta simboleggia le trasformazioni profonde, il potere interiore e la rigenerazione.",
      twitterTitle:
        "Plutone in astrologia | Luna Astralis",
      twitterDescription:
        "Scopri come Plutone simboleggia trasformazione, potere interiore, crisi e rinascita.",
      locale:
        "it_IT",
      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Plutone in astrologia: trasformazione, potere e rinascita",
      description:
        "Guida completa al ruolo di Plutone nel tema natale e alla sua espressione nei dodici segni e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "♇ Pianeti e tema natale",
      title:
        "Plutone in astrologia",
      lead:
        "Plutone rappresenta le tue trasformazioni profonde, il tuo potere interiore, le tue crisi di crescita e la tua capacità di rinascere dopo grandi sconvolgimenti.",
      createChart:
        "Creare gratuitamente il mio tema natale",
      seeSigns:
        "Vedere i 12 segni",
    },

    introduction: {
      kicker:
        "Comprendere il tuo potere di trasformazione",
      title:
        "Che cosa rappresenta Plutone nel tema natale?",
      paragraphs: [
        "In astrologia, Plutone simboleggia le trasformazioni profonde, le crisi, i rapporti di potere e la rigenerazione. Descrive i processi che obbligano una persona ad abbandonare ciò che non è più sostenibile per ricostruire in modo diverso.",
        "La sua posizione nel tema natale può rivelare gli ambiti in cui vivi esperienze intense, grandi messe in discussione e un profondo bisogno di verità.",
        "Plutone non annuncia necessariamente eventi negativi. Rappresenta soprattutto la capacità di attraversare una crisi, comprendere i meccanismi nascosti e ritrovare una forza interiore più consapevole.",
      ],
    },

    transformation: {
      title:
        "Plutone, il potere e la trasformazione",
      cards: [
        {
          symbol:
            "♇",
          title:
            "La tua trasformazione",
          text:
            "Plutone descrive gli ambiti in cui sei invitato ad abbandonare una vecchia forma per evolvere profondamente.",
        },
        {
          symbol:
            "✦",
          title:
            "Il tuo potere interiore",
          text:
            "Rivela la tua capacità di affrontare situazioni complesse, resistere e ricostruire dopo un periodo difficile.",
        },
        {
          symbol:
            "◈",
          title:
            "La tua profondità",
          text:
            "Plutone mostra il tuo bisogno di comprendere le verità nascoste, le motivazioni profonde e i meccanismi invisibili.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Plutone",
      cards: [
        {
          number:
            "01",
          title:
            "Rivelare",
          text:
            "Plutone porta alla luce le verità nascoste, le paure, gli attaccamenti e i meccanismi di potere.",
        },
        {
          number:
            "02",
          title:
            "Distruggere",
          text:
            "Simboleggia la fine delle strutture diventate troppo rigide, artificiali o incapaci di sostenere l’evoluzione.",
        },
        {
          number:
            "03",
          title:
            "Trasformare",
          text:
            "Plutone spinge a modificare profondamente i comportamenti, i rapporti di forza e i modi di vivere.",
        },
        {
          number:
            "04",
          title:
            "Rigenerare",
          text:
            "Rappresenta la capacità di ricostruire, ritrovare il proprio potere e rinascere dopo un periodo di crisi.",
        },
      ],
    },

    planets: {
      title:
        "Plutone, Nettuno e Saturno",
      cards: [
        {
          symbol:
            "♄",
          title:
            "Saturno",
          text:
            "Rappresenta le strutture, i limiti, la responsabilità e la costruzione duratura.",
          link:
            "Scoprire Saturno",
        },
        {
          symbol:
            "♆",
          title:
            "Nettuno",
          text:
            "Simboleggia intuizione, immaginazione, ideali e percezioni sottili.",
          link:
            "Scoprire Nettuno",
        },
        {
          symbol:
            "♇",
          title:
            "Plutone",
          text:
            "Rappresenta trasformazione profonda, potere, crisi e rigenerazione.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Plutone",
      title:
        "Plutone nei 12 segni zodiacali",
      introduction:
        "Plutone conserva sempre la propria funzione di trasformazione, potere e rigenerazione. Il segno in cui si trova descrive il modo in cui una generazione attraversa le grandi crisi e le messe in discussione collettive.",
      titlePrefix:
        "Plutone in",
    },

    signs: [
      {
        sign:
          "Ariete",
        symbol:
          "♈",
        text:
          "Plutone in Ariete trasforma profondamente il rapporto con l’azione, l’indipendenza e l’affermazione personale. Questa posizione generazionale può mettere in discussione i modelli di potere fondati sulla forza, sulla conquista e sull’autorità diretta.",
      },
      {
        sign:
          "Toro",
        symbol:
          "♉",
        text:
          "Plutone in Toro trasforma il rapporto con le risorse, la sicurezza e i valori materiali. Questa posizione invita a ricostruire basi più solide dopo importanti trasformazioni economiche, sociali o personali.",
      },
      {
        sign:
          "Gemelli",
        symbol:
          "♊",
        text:
          "Plutone in Gemelli trasforma le idee, la comunicazione e la circolazione delle conoscenze. Questa posizione può rivelare il potere delle parole, dell’informazione e dei nuovi modi di comprendere il mondo.",
      },
      {
        sign:
          "Cancro",
        symbol:
          "♋",
        text:
          "Plutone in Cancro trasforma i modelli familiari, le radici e il senso di appartenenza. Questa posizione può provocare una profonda messa in discussione delle strutture protettive e delle eredità emotive.",
      },
      {
        sign:
          "Leone",
        symbol:
          "♌",
        text:
          "Plutone in Leone trasforma il rapporto con la creatività, il riconoscimento e il potere personale. Questa posizione può intensificare il bisogno di espressione, rivelando al tempo stesso i limiti dell’ego e dell’autorità individuale.",
      },
      {
        sign:
          "Vergine",
        symbol:
          "♍",
        text:
          "Plutone in Vergine trasforma i metodi di lavoro, le abitudini e il rapporto con l’efficienza. Questa posizione cerca di purificare, correggere e ricostruire ciò che non funziona più nei sistemi quotidiani.",
      },
      {
        sign:
          "Bilancia",
        symbol:
          "♎",
        text:
          "Plutone in Bilancia trasforma le relazioni, i contratti e i modelli di coppia. Questa posizione rivela i rapporti di potere nei legami e spinge verso una reciprocità più autentica.",
      },
      {
        sign:
          "Scorpione",
        symbol:
          "♏",
        text:
          "Plutone in Scorpione intensifica le trasformazioni, le crisi e la ricerca della verità. Questa posizione generazionale affronta tabù, attaccamenti e meccanismi di potere per favorire una profonda rigenerazione.",
      },
      {
        sign:
          "Sagittario",
        symbol:
          "♐",
        text:
          "Plutone in Sagittario trasforma convinzioni, ideologie e visioni del mondo. Questa posizione mette in discussione le certezze collettive e spinge verso una comprensione più profonda del significato e della verità.",
      },
      {
        sign:
          "Capricorno",
        symbol:
          "♑",
        text:
          "Plutone in Capricorno trasforma istituzioni, strutture di potere e modelli di successo. Questa posizione rivela le debolezze dei sistemi troppo rigidi e spinge a ricostruire basi più responsabili.",
      },
      {
        sign:
          "Acquario",
        symbol:
          "♒",
        text:
          "Plutone in Acquario trasforma reti, gruppi, tecnologie e ideali collettivi. Questa posizione può modificare profondamente i rapporti tra individuo, comunità e nuove forme di potere sociale.",
      },
      {
        sign:
          "Pesci",
        symbol:
          "♓",
        text:
          "Plutone in Pesci trasforma le convinzioni invisibili, gli ideali, la spiritualità simbolica e i confini emotivi. Questa posizione può rivelare illusioni collettive per permettere una profonda rinascita interiore.",
      },
    ],

    housesSection: {
      kicker:
        "Gli ambiti della tua trasformazione",
      title:
        "Plutone nelle 12 case astrologiche",
      introduction:
        "Il segno di Plutone descrive una trasformazione collettiva, mentre la sua casa indica l’ambito della vita in cui il tuo potere interiore, le tue crisi e la tua capacità di rigenerazione si esprimono in modo più personale.",
      titlePrefix:
        "Plutone in",
    },

    houses: [
      {
        house:
          "Casa I",
        text:
          "Plutone in Casa I dona una presenza intensa, magnetica e profondamente trasformativa. La persona può vivere diverse rinascite identitarie e sviluppare un grande potere interiore.",
      },
      {
        house:
          "Casa II",
        text:
          "Plutone in Casa II trasforma il rapporto con risorse, valori e sicurezza. La persona può attraversare importanti cambiamenti materiali che la portano a ridefinire ciò che possiede realmente valore.",
      },
      {
        house:
          "Casa III",
        text:
          "Plutone in Casa III dona un pensiero profondo, investigativo e persuasivo. La persona può cercare di comprendere ciò che non viene detto, i meccanismi nascosti e la vera portata delle parole.",
      },
      {
        house:
          "Casa IV",
        text:
          "Plutone in Casa IV intensifica le esperienze legate alla casa, alla famiglia e alle radici. La persona può essere chiamata a trasformare profondamente alcune eredità emotive o familiari.",
      },
      {
        house:
          "Casa V",
        text:
          "Plutone in Casa V dona una creatività intensa, passioni potenti e un profondo bisogno di espressione personale. Le relazioni amorose e i progetti creativi possono diventare esperienze trasformative.",
      },
      {
        house:
          "Casa VI",
        text:
          "Plutone in Casa VI trasforma le abitudini, il lavoro e l’organizzazione quotidiana. La persona può sentire un forte bisogno di migliorare i metodi, eliminare i problemi e riprendere il controllo della vita quotidiana.",
      },
      {
        house:
          "Casa VII",
        text:
          "Plutone in Casa VII intensifica le relazioni e rivela i rapporti di potere nelle coppie. I legami importanti possono provocare profonde trasformazioni personali.",
      },
      {
        house:
          "Casa VIII",
        text:
          "Plutone in Casa VIII rafforza la capacità di attraversare crisi, perdite e trasformazioni. La persona può possedere grande profondità psicologica e una forte capacità di rigenerazione.",
      },
      {
        house:
          "Casa IX",
        text:
          "Plutone in Casa IX trasforma convinzioni, idee e visione del mondo. Gli studi, i viaggi o alcune esperienze possono mettere in discussione certezze profondamente radicate.",
      },
      {
        house:
          "Casa X",
        text:
          "Plutone in Casa X intensifica l’ambizione, la vocazione e il rapporto con il potere professionale. La persona può vivere diverse trasformazioni di carriera e cercare di esercitare una profonda influenza.",
      },
      {
        house:
          "Casa XI",
        text:
          "Plutone in Casa XI trasforma amicizie, reti e progetti collettivi. La persona può svolgere un ruolo potente all’interno di un gruppo ed essere chiamata a ridefinire le proprie alleanze.",
      },
      {
        house:
          "Casa XII",
        text:
          "Plutone in Casa XII rivela forze inconsce, paure profonde e meccanismi nascosti. L’introspezione può diventare un potente strumento di guarigione simbolica e trasformazione interiore.",
      },
    ],

    retrograde: {
      kicker:
        "Trasformazione interiore",
      title:
        "Che cosa significa Plutone retrogrado?",
      paragraphs: [
        "Dalla Terra, Plutone sembra talvolta rallentare e retrocedere temporaneamente nel cielo. Si tratta di un movimento apparente legato alle posizioni relative della Terra e di Plutone.",
        "Nell’interpretazione astrologica, Plutone retrogrado è spesso associato a un processo di trasformazione più interiore. La persona può esplorare profondamente il proprio rapporto con il potere, il controllo e le paure nascoste.",
        "Questo periodo può invitare a riconoscere gli attaccamenti diventati troppo pesanti, osservare i meccanismi inconsci e riprendere il proprio potere personale senza cercare di controllare gli altri.",
      ],
      cardSymbol:
        "♇℞",
      cardTitle:
        "Un invito a trasformare",
      items: [
        "Osservare il proprio rapporto con il controllo",
        "Riconoscere le paure profonde",
        "Abbandonare i vecchi attaccamenti",
        "Riprendere il proprio potere personale",
        "Trasformare gli schemi inconsci",
      ],
    },

    strengths: {
      title:
        "I punti di forza e le sfide di Plutone",
      strengthsKicker:
        "Possibili punti di forza",
      strengthsTitle:
        "Un potere di rigenerazione",
      strengths: [
        "Resilienza",
        "Profondità psicologica",
        "Coraggio di fronte alle crisi",
        "Capacità di trasformazione",
        "Lucidità",
      ],
      challengesKicker:
        "Punti di attenzione",
      challengesTitle:
        "Usare il potere con consapevolezza",
      challenges: [
        "Bisogno di controllo",
        "Eccessiva diffidenza",
        "Ossessione",
        "Difficoltà a lasciar andare",
        "Rapporti di forza",
      ],
    },

    aspectsSection: {
      title:
        "Gli aspetti astrologici di Plutone",
      introduction:
        "Gli aspetti collegano Plutone agli altri pianeti del tema natale. Aggiungono sfumature al tuo rapporto con il potere, le trasformazioni, le crisi e la rigenerazione.",
    },

    aspects: [
      {
        symbol:
          "☌",
        title:
          "La congiunzione",
        text:
          "Fonde Plutone con un altro pianeta e intensifica profondamente la sua espressione.",
      },
      {
        symbol:
          "△",
        title:
          "Il trigono",
        text:
          "Può simboleggiare una capacità naturale di trasformare, approfondire e rigenerare le qualità dell’altro pianeta.",
      },
      {
        symbol:
          "✶",
        title:
          "Il sestile",
        text:
          "Rappresenta un potenziale di trasformazione costruttiva, lucidità e crescita interiore.",
      },
      {
        symbol:
          "□",
        title:
          "La quadratura",
        text:
          "Può creare una tensione intensa intorno al potere, al controllo o alla necessità di cambiare profondamente.",
      },
      {
        symbol:
          "☍",
        title:
          "L’opposizione",
        text:
          "Invita a riconoscere i rapporti di forza esterni e a trovare un equilibrio tra controllo e capacità di lasciar andare.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",
      title:
        "In quale segno e casa si trova il tuo Plutone?",
      text:
        "Genera gratuitamente il tuo tema natale per scoprire Plutone, Nettuno, Urano, Saturno e le posizioni dei principali pianeti.",
      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",
      title:
        "Domande su Plutone in astrologia",
      items: [
        {
          question:
            "Che cosa rappresenta Plutone in astrologia?",
          answer:
            "Plutone rappresenta simbolicamente trasformazioni profonde, crisi, potere, perdite, rigenerazione, verità nascoste e capacità di rinascere dopo un periodo di sconvolgimento.",
        },
        {
          question:
            "Perché Plutone è associato alla trasformazione?",
          answer:
            "Plutone simboleggia i processi che obbligano ad abbandonare una vecchia struttura diventata inadeguata per ricostruire qualcosa di più autentico e solido.",
        },
        {
          question:
            "Che cosa significa il segno di Plutone?",
          answer:
            "Il segno di Plutone descrive il modo in cui una generazione vive le trasformazioni collettive, le crisi di potere e le grandi messe in discussione della propria epoca.",
        },
        {
          question:
            "Che cosa significa Plutone retrogrado nel tema natale?",
          answer:
            "Plutone retrogrado alla nascita può simboleggiare una trasformazione più interiore, un rapporto personale con il potere e una tendenza a esplorare profondamente i meccanismi inconsci.",
        },
        {
          question:
            "Plutone retrogrado è negativo?",
          answer:
            "No. Questa posizione viene piuttosto interpretata come un invito a esaminare il proprio rapporto con il controllo, le paure, gli attaccamenti e le trasformazioni interiori.",
        },
        {
          question:
            "Come conoscere il mio segno di Plutone?",
          answer:
            "Devi calcolare il tuo tema natale utilizzando data, ora e luogo di nascita per conoscere la posizione esatta di Plutone.",
        },
        {
          question:
            "Qual è la differenza tra Nettuno e Plutone?",
          answer:
            "Nettuno simboleggia intuizione, immaginazione e dissoluzione dei confini, mentre Plutone rappresenta trasformazione profonda, potere, crisi e rigenerazione.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Plutão na astrologia: transformação, poder e renascimento | Luna Astralis",
      description:
        "Descubra o significado de Plutão na astrologia, sua influência sobre as transformações, o poder interior, as crises, a regeneração e sua expressão nos 12 signos.",
      ogTitle:
        "Plutão na astrologia: transformação, poder e renascimento",
      ogDescription:
        "Compreenda o papel de Plutão no seu mapa natal e descubra como este planeta simboliza transformações profundas, poder interior e regeneração.",
      twitterTitle:
        "Plutão na astrologia | Luna Astralis",
      twitterDescription:
        "Descubra como Plutão simboliza transformação, poder interior, crises e renascimento.",
      locale:
        "pt_BR",
      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Plutão na astrologia: transformação, poder e renascimento",
      description:
        "Guia completo sobre o papel de Plutão no mapa natal e sua expressão nos doze signos e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "♇ Planetas e mapa natal",
      title:
        "Plutão na astrologia",
      lead:
        "Plutão representa suas transformações profundas, seu poder interior, suas crises de crescimento e sua capacidade de renascer depois de grandes mudanças.",
      createChart:
        "Criar meu mapa astral grátis",
      seeSigns:
        "Ver os 12 signos",
    },

    introduction: {
      kicker:
        "Compreender seu poder de transformação",
      title:
        "O que Plutão representa no mapa natal?",
      paragraphs: [
        "Na astrologia, Plutão simboliza transformações profundas, crises, relações de poder e regeneração. Ele descreve os processos que obrigam uma pessoa a abandonar aquilo que não é mais viável para reconstruir de outra maneira.",
        "Sua posição no mapa natal pode revelar as áreas em que você vive experiências intensas, grandes questionamentos e uma profunda necessidade de verdade.",
        "Plutão não anuncia necessariamente acontecimentos negativos. Ele representa principalmente a capacidade de atravessar uma crise, compreender mecanismos ocultos e recuperar uma força interior mais consciente.",
      ],
    },

    transformation: {
      title:
        "Plutão, poder e transformação",
      cards: [
        {
          symbol:
            "♇",
          title:
            "Sua transformação",
          text:
            "Plutão descreve as áreas em que você é convidado a abandonar uma forma antiga para evoluir profundamente.",
        },
        {
          symbol:
            "✦",
          title:
            "Seu poder interior",
          text:
            "Ele revela sua capacidade de enfrentar situações complexas, resistir e reconstruir depois de um período difícil.",
        },
        {
          symbol:
            "◈",
          title:
            "Sua profundidade",
          text:
            "Plutão mostra sua necessidade de compreender verdades ocultas, motivações profundas e mecanismos invisíveis.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Plutão",
      cards: [
        {
          number:
            "01",
          title:
            "Revelar",
          text:
            "Plutão traz à luz verdades ocultas, medos, apegos e mecanismos de poder.",
        },
        {
          number:
            "02",
          title:
            "Destruir",
          text:
            "Ele simboliza o fim de estruturas que se tornaram rígidas, artificiais ou incapazes de sustentar a evolução.",
        },
        {
          number:
            "03",
          title:
            "Transformar",
          text:
            "Plutão impulsiona mudanças profundas nos comportamentos, nas relações de força e nas maneiras de viver.",
        },
        {
          number:
            "04",
          title:
            "Regenerar",
          text:
            "Ele representa a capacidade de reconstruir, recuperar o próprio poder e renascer depois de um período de crise.",
        },
      ],
    },

    planets: {
      title:
        "Plutão, Netuno e Saturno",
      cards: [
        {
          symbol:
            "♄",
          title:
            "Saturno",
          text:
            "Ele representa estruturas, limites, responsabilidade e construção duradoura.",
          link:
            "Descobrir Saturno",
        },
        {
          symbol:
            "♆",
          title:
            "Netuno",
          text:
            "Ele simboliza intuição, imaginação, ideais e percepções sutis.",
          link:
            "Descobrir Netuno",
        },
        {
          symbol:
            "♇",
          title:
            "Plutão",
          text:
            "Ele representa transformação profunda, poder, crises e regeneração.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Plutão",
      title:
        "Plutão nos 12 signos astrológicos",
      introduction:
        "Plutão sempre conserva sua função de transformação, poder e regeneração. O signo em que ele se encontra descreve a maneira como uma geração atravessa grandes crises e questionamentos coletivos.",
      titlePrefix:
        "Plutão em",
    },

    signs: [
      {
        sign:
          "Áries",
        symbol:
          "♈",
        text:
          "Plutão em Áries transforma profundamente a relação com a ação, a independência e a afirmação pessoal. Esta posição geracional pode questionar modelos de poder baseados na força, na conquista e na autoridade direta.",
      },
      {
        sign:
          "Touro",
        symbol:
          "♉",
        text:
          "Plutão em Touro transforma a relação com os recursos, a segurança e os valores materiais. Esta posição convida a reconstruir bases mais sólidas depois de grandes transformações econômicas, sociais ou pessoais.",
      },
      {
        sign:
          "Gêmeos",
        symbol:
          "♊",
        text:
          "Plutão em Gêmeos transforma ideias, comunicações e a circulação do conhecimento. Esta posição pode revelar o poder das palavras, da informação e de novas maneiras de compreender o mundo.",
      },
      {
        sign:
          "Câncer",
        symbol:
          "♋",
        text:
          "Plutão em Câncer transforma padrões familiares, raízes e o sentimento de pertencimento. Esta posição pode provocar um profundo questionamento das estruturas protetoras e das heranças emocionais.",
      },
      {
        sign:
          "Leão",
        symbol:
          "♌",
        text:
          "Plutão em Leão transforma a relação com a criatividade, o reconhecimento e o poder pessoal. Esta posição pode intensificar a necessidade de expressão e revelar os limites do ego e da autoridade individual.",
      },
      {
        sign:
          "Virgem",
        symbol:
          "♍",
        text:
          "Plutão em Virgem transforma métodos de trabalho, hábitos e a relação com a eficiência. Esta posição procura purificar, corrigir e reconstruir aquilo que não funciona mais nos sistemas cotidianos.",
      },
      {
        sign:
          "Libra",
        symbol:
          "♎",
        text:
          "Plutão em Libra transforma relacionamentos, contratos e modelos de parceria. Esta posição revela relações de poder nos vínculos e impulsiona uma reciprocidade mais autêntica.",
      },
      {
        sign:
          "Escorpião",
        symbol:
          "♏",
        text:
          "Plutão em Escorpião intensifica transformações, crises e a busca pela verdade. Esta posição geracional confronta tabus, apegos e mecanismos de poder para favorecer uma profunda regeneração.",
      },
      {
        sign:
          "Sagitário",
        symbol:
          "♐",
        text:
          "Plutão em Sagitário transforma crenças, ideologias e visões de mundo. Esta posição questiona certezas coletivas e impulsiona uma compreensão mais profunda do sentido e da verdade.",
      },
      {
        sign:
          "Capricórnio",
        symbol:
          "♑",
        text:
          "Plutão em Capricórnio transforma instituições, estruturas de poder e modelos de sucesso. Esta posição revela falhas em sistemas rígidos demais e impulsiona a reconstrução de bases mais responsáveis.",
      },
      {
        sign:
          "Aquário",
        symbol:
          "♒",
        text:
          "Plutão em Aquário transforma redes, grupos, tecnologias e ideais coletivos. Esta posição pode alterar profundamente a relação entre indivíduo, comunidade e novas formas de poder social.",
      },
      {
        sign:
          "Peixes",
        symbol:
          "♓",
        text:
          "Plutão em Peixes transforma crenças invisíveis, ideais, espiritualidade simbólica e limites emocionais. Esta posição pode revelar ilusões coletivas para permitir um profundo renascimento interior.",
      },
    ],

    housesSection: {
      kicker:
        "As áreas da sua transformação",
      title:
        "Plutão nas 12 casas astrológicas",
      introduction:
        "O signo de Plutão descreve uma transformação coletiva, enquanto sua casa indica a área da vida em que seu poder interior, suas crises e sua capacidade de regeneração se expressam de maneira mais pessoal.",
      titlePrefix:
        "Plutão em",
    },

    houses: [
      {
        house:
          "Casa I",
        text:
          "Plutão na Casa I proporciona uma presença intensa, magnética e profundamente transformadora. A pessoa pode viver vários renascimentos de identidade e desenvolver grande poder interior.",
      },
      {
        house:
          "Casa II",
        text:
          "Plutão na Casa II transforma a relação com recursos, valores e segurança. A pessoa pode atravessar importantes mudanças materiais que a levam a redefinir aquilo que realmente possui valor.",
      },
      {
        house:
          "Casa III",
        text:
          "Plutão na Casa III proporciona um pensamento profundo, investigativo e persuasivo. A pessoa pode procurar compreender o que não é dito, os mecanismos ocultos e o verdadeiro alcance das palavras.",
      },
      {
        house:
          "Casa IV",
        text:
          "Plutão na Casa IV intensifica experiências ligadas ao lar, à família e às raízes. A pessoa pode ser chamada a transformar profundamente certas heranças emocionais ou familiares.",
      },
      {
        house:
          "Casa V",
        text:
          "Plutão na Casa V proporciona criatividade intensa, paixões poderosas e profunda necessidade de expressão pessoal. Relacionamentos amorosos e projetos criativos podem se tornar experiências transformadoras.",
      },
      {
        house:
          "Casa VI",
        text:
          "Plutão na Casa VI transforma hábitos, trabalho e organização cotidiana. A pessoa pode sentir uma forte necessidade de melhorar métodos, eliminar problemas e retomar o controle do cotidiano.",
      },
      {
        house:
          "Casa VII",
        text:
          "Plutão na Casa VII intensifica relacionamentos e revela relações de poder nas parcerias. Vínculos importantes podem provocar profundas transformações pessoais.",
      },
      {
        house:
          "Casa VIII",
        text:
          "Plutão na Casa VIII reforça a capacidade de atravessar crises, perdas e transformações. A pessoa pode possuir grande profundidade psicológica e forte capacidade de regeneração.",
      },
      {
        house:
          "Casa IX",
        text:
          "Plutão na Casa IX transforma crenças, convicções e visão de mundo. Estudos, viagens ou determinadas experiências podem questionar certezas profundamente enraizadas.",
      },
      {
        house:
          "Casa X",
        text:
          "Plutão na Casa X intensifica ambição, vocação e a relação com o poder profissional. A pessoa pode viver várias transformações de carreira e procurar exercer profunda influência.",
      },
      {
        house:
          "Casa XI",
        text:
          "Plutão na Casa XI transforma amizades, redes e projetos coletivos. A pessoa pode desempenhar um papel poderoso dentro de um grupo e ser chamada a redefinir suas alianças.",
      },
      {
        house:
          "Casa XII",
        text:
          "Plutão na Casa XII revela forças inconscientes, medos profundos e mecanismos ocultos. A introspecção pode se tornar uma poderosa ferramenta de cura simbólica e transformação interior.",
      },
    ],

    retrograde: {
      kicker:
        "Transformação interior",
      title:
        "O que significa Plutão retrógrado?",
      paragraphs: [
        "A partir da Terra, Plutão às vezes parece desacelerar e se mover temporariamente para trás no céu. Trata-se de um movimento aparente relacionado às posições relativas da Terra e de Plutão.",
        "Na interpretação astrológica, Plutão retrógrado costuma ser associado a um processo de transformação mais interior. A pessoa pode explorar profundamente sua relação com poder, controle e medos ocultos.",
        "Esse período pode convidar a reconhecer apegos que se tornaram pesados, observar mecanismos inconscientes e recuperar o próprio poder sem tentar controlar os outros.",
      ],
      cardSymbol:
        "♇℞",
      cardTitle:
        "Um convite para transformar",
      items: [
        "Observar a relação com o controle",
        "Reconhecer medos profundos",
        "Abandonar antigos apegos",
        "Retomar o poder pessoal",
        "Transformar padrões inconscientes",
      ],
    },

    strengths: {
      title:
        "As forças e os desafios de Plutão",
      strengthsKicker:
        "Possíveis forças",
      strengthsTitle:
        "Um poder de regeneração",
      strengths: [
        "Resiliência",
        "Profundidade psicológica",
        "Coragem diante das crises",
        "Capacidade de transformação",
        "Lucidez",
      ],
      challengesKicker:
        "Pontos de atenção",
      challengesTitle:
        "Utilizar o poder com consciência",
      challenges: [
        "Necessidade de controle",
        "Desconfiança excessiva",
        "Obsessão",
        "Dificuldade para deixar ir",
        "Relações de poder",
      ],
    },

    aspectsSection: {
      title:
        "Os aspectos astrológicos de Plutão",
      introduction:
        "Os aspectos ligam Plutão aos outros planetas do mapa natal. Eles acrescentam nuances à sua relação com poder, transformações, crises e regeneração.",
    },

    aspects: [
      {
        symbol:
          "☌",
        title:
          "A conjunção",
        text:
          "Ela funde Plutão com outro planeta e intensifica profundamente sua expressão.",
      },
      {
        symbol:
          "△",
        title:
          "O trígono",
        text:
          "Ele pode simbolizar uma capacidade natural de transformar, aprofundar e regenerar as qualidades do outro planeta.",
      },
      {
        symbol:
          "✶",
        title:
          "O sextil",
        text:
          "Ele representa um potencial de transformação construtiva, lucidez e crescimento interior.",
      },
      {
        symbol:
          "□",
        title:
          "A quadratura",
        text:
          "Ela pode criar uma tensão intensa relacionada ao poder, ao controle ou à necessidade de mudança profunda.",
      },
      {
        symbol:
          "☍",
        title:
          "A oposição",
        text:
          "Ela convida a reconhecer relações de força externas e encontrar equilíbrio entre controle e capacidade de deixar ir.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",
      title:
        "Em qual signo e casa está seu Plutão?",
      text:
        "Gere gratuitamente seu mapa natal para descobrir Plutão, Netuno, Urano, Saturno e as posições dos seus principais planetas.",
      button:
        "Descobrir meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",
      title:
        "Perguntas sobre Plutão na astrologia",
      items: [
        {
          question:
            "O que Plutão representa na astrologia?",
          answer:
            "Plutão representa simbolicamente transformações profundas, crises, poder, perdas, regeneração, verdades ocultas e capacidade de renascer depois de um período de grandes mudanças.",
        },
        {
          question:
            "Por que Plutão é associado à transformação?",
          answer:
            "Plutão simboliza processos que obrigam a abandonar uma estrutura antiga que se tornou inadequada para reconstruir algo mais autêntico e sólido.",
        },
        {
          question:
            "O que significa o signo de Plutão?",
          answer:
            "O signo de Plutão descreve a maneira como uma geração vive transformações coletivas, crises de poder e os grandes questionamentos de sua época.",
        },
        {
          question:
            "O que significa Plutão retrógrado no mapa natal?",
          answer:
            "Plutão retrógrado no nascimento pode simbolizar uma transformação mais interior, uma relação pessoal com o poder e uma tendência a explorar profundamente mecanismos inconscientes.",
        },
        {
          question:
            "Plutão retrógrado é negativo?",
          answer:
            "Não. Essa posição costuma ser interpretada como um convite para examinar a relação com controle, medos, apegos e transformações interiores.",
        },
        {
          question:
            "Como descobrir meu signo de Plutão?",
          answer:
            "Você deve calcular seu mapa natal usando data, hora e local de nascimento para conhecer a posição exata de Plutão.",
        },
        {
          question:
            "Qual é a diferença entre Netuno e Plutão?",
          answer:
            "Netuno simboliza intuição, imaginação e dissolução dos limites, enquanto Plutão representa transformação profunda, poder, crises e regeneração.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
