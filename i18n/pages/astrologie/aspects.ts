// i18n/pages/astrologie/aspects.ts

import type {
  Locale,
} from "@/i18n/config";

export type AspectItem = {
  name: string;
  discoverName: string;
  title: string;
  href: string;
  symbol: string;
  degree: string;
  category: string;
  keywords: string;
  text: string;
};

export type ReadingStep = {
  number: string;
  title: string;
  text: string;
};

export type OrbCard = {
  value: string;
  title: string;
  text: string;
};

export type MovementCard = {
  icon: string;
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AspectsPageText = {
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
    name: string;
    headline: string;
    description: string;
  };

  badge: string;
  title: string;
  lead: string;
  createChart: string;
  exploreAspects: string;

  introduction: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  interpretationTitle: string;
  interpretationSteps: ReadingStep[];

  aspectsSection: {
    kicker: string;
    title: string;
    description: string;
  };

  discoverLabel: string;
  discoverAria: string;
  aspects: AspectItem[];

  groups: {
    kicker: string;
    title: string;
    harmoniousTitle: string;
    harmoniousParagraphs: string[];
    dynamicTitle: string;
    dynamicParagraphs: string[];
  };

  conjunction: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    link: string;
  };

  orb: {
    kicker: string;
    title: string;
    introduction: string;
    cards: OrbCard[];
    conclusion: string;
  };

  movement: {
    title: string;
    cards: MovementCard[];
  };

  importance: {
    title: string;
    paragraphs: string[];
  };

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faqKicker: string;
  faqTitle: string;
  faq: FaqItem[];
  disclaimer: string;
};

export const ASPECTS_TRANSLATIONS:
  Record<
    Locale,
    AspectsPageText
  > = {
  fr: {
    metadata: {
      title:
        "Les aspects astrologiques : signification, angles et interprétation | Luna Astralis",

      description:
        "Découvrez la signification de la conjonction, de l’opposition, du carré, du trigone, du sextile et du quinconce dans un thème natal.",

      ogTitle:
        "Les aspects astrologiques : comprendre les relations entre les planètes",

      ogDescription:
        "Explorez les principaux aspects astrologiques et découvrez comment les planètes coopèrent, se renforcent ou entrent en tension dans une carte du ciel.",

      twitterTitle:
        "Les aspects astrologiques | Luna Astralis",

      twitterDescription:
        "Conjonction, opposition, carré, trigone, sextile et quinconce : découvrez leur signification dans le thème natal.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      name:
        "Les aspects astrologiques",

      headline:
        "Les aspects astrologiques : signification, angles et interprétation",

      description:
        "Guide des principaux aspects astrologiques utilisés pour interpréter les relations entre les planètes dans un thème natal.",
    },

    badge:
      "✦ Bibliothèque astrologique",

    title:
      "Les aspects astrologiques",

    lead:
      "Les aspects sont les angles formés entre les planètes dans votre thème natal. Ils révèlent comment vos différentes énergies intérieures coopèrent, se renforcent, se confrontent ou cherchent un nouvel équilibre.",

    createChart:
      "Créer ma carte du ciel gratuite",

    exploreAspects:
      "Explorer les aspects",

    introduction: {
      kicker:
        "Le dialogue entre les planètes",

      title:
        "Qu’est-ce qu’un aspect astrologique ?",

      paragraphs: [
        "Dans une carte du ciel, chaque planète occupe une position précise sur le cercle du zodiaque. La distance angulaire entre deux planètes peut former un aspect astrologique.",

        "Ces angles sont interprétés comme des relations entre différentes fonctions de la personnalité. Le Soleil représente par exemple l’identité, tandis que la Lune décrit le monde émotionnel. Un aspect entre ces deux luminaires indique donc la manière dont l’identité consciente et les besoins émotionnels interagissent.",

        "Certains aspects facilitent la circulation de l’énergie, tandis que d’autres créent davantage de tension ou demandent des ajustements. Aucun aspect ne doit toutefois être considéré isolément ou simplement classé comme positif ou négatif.",
      ],
    },

    interpretationTitle:
      "Comment interpréter un aspect dans un thème natal ?",

    interpretationSteps: [
      {
        number:
          "01",

        title:
          "Les planètes",

        text:
          "Elles indiquent les fonctions concernées : penser, ressentir, aimer, agir, grandir, structurer ou transformer.",
      },

      {
        number:
          "02",

        title:
          "Le type d’aspect",

        text:
          "L’angle précise la nature de la relation : fusion, coopération, tension, fluidité, ajustement ou polarité.",
      },

      {
        number:
          "03",

        title:
          "Les signes",

        text:
          "Les signes décrivent la manière dont chaque planète exprime son énergie et réagit à l’autre.",
      },

      {
        number:
          "04",

        title:
          "Les maisons",

        text:
          "Les maisons montrent les domaines de vie dans lesquels l’aspect se manifeste le plus directement.",
      },
    ],

    aspectsSection: {
      kicker:
        "Les principaux angles astrologiques",

      title:
        "Signification des aspects astrologiques",

      description:
        "Sélectionnez un aspect pour découvrir sa signification détaillée, son angle, son fonctionnement psychologique et des exemples d’interprétation entre différentes planètes.",
    },

    discoverLabel:
      "Découvrir",

    discoverAria:
      "Découvrir la signification astrologique de",

    aspects: [
      {
        name:
          "Conjonction",

        discoverName:
          "la conjonction",

        title:
          "Conjonction en astrologie",

        href:
          "/astrologie/conjonction",

        symbol:
          "☌",

        degree:
          "0°",

        category:
          "Fusion",

        keywords:
          "Intensité • union • concentration",

        text:
          "La conjonction réunit deux planètes dans une même zone du thème natal. Leurs fonctions se mélangent, se renforcent et agissent comme une seule énergie.",
      },

      {
        name:
          "Opposition",

        discoverName:
          "l’opposition",

        title:
          "Opposition en astrologie",

        href:
          "/astrologie/opposition",

        symbol:
          "☍",

        degree:
          "180°",

        category:
          "Polarité",

        keywords:
          "Équilibre • confrontation • projection",

        text:
          "L’opposition place deux planètes face à face. Elle met en lumière deux besoins complémentaires qu’il faut apprendre à reconnaître et à équilibrer.",
      },

      {
        name:
          "Carré",

        discoverName:
          "le carré",

        title:
          "Carré en astrologie",

        href:
          "/astrologie/carre",

        symbol:
          "□",

        degree:
          "90°",

        category:
          "Tension",

        keywords:
          "Défi • action • évolution",

        text:
          "Le carré crée une tension dynamique entre deux planètes. Il peut produire des blocages, mais il devient aussi un puissant moteur d’action et de transformation.",
      },

      {
        name:
          "Trigone",

        discoverName:
          "le trigone",

        title:
          "Trigone en astrologie",

        href:
          "/astrologie/trigone",

        symbol:
          "△",

        degree:
          "120°",

        category:
          "Harmonie",

        keywords:
          "Fluidité • talent • facilité",

        text:
          "Le trigone relie généralement des signes du même élément. Il indique une circulation naturelle de l’énergie, des talents spontanés et des ressources faciles à mobiliser.",
      },

      {
        name:
          "Sextile",

        discoverName:
          "le sextile",

        title:
          "Sextile en astrologie",

        href:
          "/astrologie/sextile",

        symbol:
          "⚹",

        degree:
          "60°",

        category:
          "Coopération",

        keywords:
          "Possibilité • échange • ouverture",

        text:
          "Le sextile favorise la coopération entre deux planètes. Il représente des possibilités constructives qui demandent souvent une initiative consciente pour se développer.",
      },

      {
        name:
          "Quinconce",

        discoverName:
          "le quinconce",

        title:
          "Quinconce en astrologie",

        href:
          "/astrologie/quinconce",

        symbol:
          "⚻",

        degree:
          "150°",

        category:
          "Ajustement",

        keywords:
          "Adaptation • décalage • réorganisation",

        text:
          "Le quinconce relie deux planètes qui fonctionnent de manière très différente. Il demande des ajustements réguliers, de la souplesse et une réorganisation intérieure.",
      },
    ],

    groups: {
      kicker:
        "Deux grandes dynamiques",

      title:
        "Aspects harmonieux et aspects dynamiques",

      harmoniousTitle:
        "Les aspects harmonieux",

      harmoniousParagraphs: [
        "Le trigone et le sextile facilitent généralement la coopération entre les planètes. Ils peuvent représenter des talents, des ressources, des occasions et des qualités qui s’expriment avec davantage de naturel.",

        "Ils ne garantissent toutefois pas automatiquement le développement de leur potentiel. Une facilité peut rester peu utilisée si elle n’est jamais reconnue ou cultivée.",
      ],

      dynamicTitle:
        "Les aspects dynamiques",

      dynamicParagraphs: [
        "Le carré et l’opposition mettent en évidence des différences, des contradictions ou des tensions entre les planètes concernées.",

        "Ces aspects demandent davantage de conscience et d’effort, mais ils peuvent devenir des moteurs importants de décision, d’évolution et de dépassement.",
      ],
    },

    conjunction: {
      title:
        "La conjonction est-elle harmonieuse ou difficile ?",

      subtitle:
        "Une fusion d’énergies",

      paragraphs: [
        "La conjonction ne fait pas partie d’une catégorie strictement harmonieuse ou dynamique. Elle fusionne les fonctions des deux planètes et augmente leur intensité.",

        "Son expression dépend beaucoup des planètes concernées. Une conjonction entre Vénus et Jupiter peut favoriser l’enthousiasme et la générosité, tandis qu’une conjonction entre Mars et Saturne peut produire une combinaison plus exigeante entre l’action et le contrôle.",
      ],

      link:
        "Comprendre la conjonction",
    },

    orb: {
      kicker:
        "La précision de l’angle",

      title:
        "Qu’est-ce que l’orbe en astrologie ?",

      introduction:
        "Un aspect n’a pas besoin d’être parfaitement exact pour être interprété. L’écart entre l’angle théorique et l’angle réel est appelé l’orbe.",

      cards: [
        {
          value:
            "0°",

          title:
            "Aspect exact",

          text:
            "Les deux planètes forment exactement l’angle associé à l’aspect. Son influence est généralement considérée comme particulièrement forte.",
        },

        {
          value:
            "1° à 3°",

          title:
            "Orbe serré",

          text:
            "L’aspect reste très précis. La relation entre les planètes peut être facilement perceptible dans le caractère ou l’expérience.",
        },

        {
          value:
            "4° à 8°",

          title:
            "Orbe plus large",

          text:
            "L’aspect peut encore être retenu selon les planètes, le type d’aspect et la méthode astrologique utilisée.",
        },
      ],

      conclusion:
        "Les astrologues n’utilisent pas tous les mêmes orbes. Les luminaires reçoivent souvent des orbes plus larges, tandis que les aspects mineurs sont généralement étudiés avec des marges plus serrées.",
    },

    movement: {
      title:
        "Aspects appliquants et séparants",

      cards: [
        {
          icon:
            "→",

          title:
            "Aspect appliquant",

          text:
            "L’aspect est appliquant lorsque les planètes se rapprochent de l’angle exact. Cette dynamique peut symboliser une énergie qui se construit, gagne en intensité ou cherche à s’accomplir.",
        },

        {
          icon:
            "←",

          title:
            "Aspect séparant",

          text:
            "L’aspect est séparant lorsque les planètes ont déjà dépassé l’angle exact. Il peut représenter une expérience déjà intégrée, connue ou en cours d’assimilation.",
        },
      ],
    },

    importance: {
      title:
        "Pourquoi les aspects sont-ils essentiels dans un thème natal ?",

      paragraphs: [
        "Les signes indiquent comment les planètes s’expriment et les maisons montrent dans quels domaines de vie elles agissent. Les aspects ajoutent une troisième dimension : ils expliquent comment toutes ces énergies fonctionnent ensemble.",

        "Une personne peut par exemple avoir une Vénus très relationnelle, mais un carré de Saturne à Vénus peut ajouter de la prudence, des exigences ou une peur du rejet. Un trigone de Jupiter à Vénus peut au contraire renforcer l’optimisme, la sociabilité ou la générosité.",

        "Les aspects permettent donc de dépasser une lecture isolée des planètes. Ils révèlent les contradictions, les complémentarités, les talents naturels et les mécanismes d’évolution propres à chaque thème natal.",
      ],
    },

    cta: {
      kicker:
        "Découvrez vos aspects",

      title:
        "Quelles planètes sont reliées dans votre thème natal ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir vos positions planétaires, vos maisons et les principaux aspects de votre naissance.",

      button:
        "Découvrir ma carte du ciel",
    },

    faqKicker:
      "Questions fréquentes",

    faqTitle:
      "Questions sur les aspects astrologiques",

    faq: [
      {
        question:
          "Qu’est-ce qu’un aspect astrologique ?",

        answer:
          "Un aspect astrologique est un angle formé entre deux planètes ou points importants d’un thème natal. Cet angle décrit symboliquement la manière dont leurs fonctions interagissent.",
      },

      {
        question:
          "Quels sont les principaux aspects astrologiques ?",

        answer:
          "Les aspects les plus étudiés sont la conjonction à 0 degré, le sextile à 60 degrés, le carré à 90 degrés, le trigone à 120 degrés et l’opposition à 180 degrés. Le quinconce à 150 degrés est également souvent interprété.",
      },

      {
        question:
          "Quel est l’aspect astrologique le plus puissant ?",

        answer:
          "La puissance d’un aspect dépend de sa précision, des planètes concernées, de leur position et de l’ensemble du thème. Une conjonction exacte est souvent très intense, mais un carré ou une opposition peut également être dominant.",
      },

      {
        question:
          "Les aspects difficiles sont-ils négatifs ?",

        answer:
          "Non. Les carrés et les oppositions peuvent créer des tensions, mais ils favorisent aussi l’action, la prise de conscience, la résilience et le développement personnel.",
      },

      {
        question:
          "Que signifie l’orbe d’un aspect ?",

        answer:
          "L’orbe représente l’écart accepté entre l’angle exact d’un aspect et la position réelle des planètes. Plus l’orbe est petit, plus l’aspect est généralement considéré comme précis et perceptible.",
      },

      {
        question:
          "Un thème natal peut-il ne contenir aucun aspect ?",

        answer:
          "Un thème natal contient presque toujours plusieurs aspects. Certaines planètes peuvent toutefois être peu reliées aux autres ou ne former aucun aspect majeur très précis.",
      },

      {
        question:
          "Comment connaître les aspects de mon thème natal ?",

        answer:
          "Vous devez générer une carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance. Les lignes tracées au centre de la roue représentent généralement les principaux aspects.",
      },
    ],

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Astrological Aspects: Meaning, Angles and Interpretation | Luna Astralis",

      description:
        "Discover the meaning of conjunction, opposition, square, trine, sextile and quincunx in a birth chart.",

      ogTitle:
        "Astrological Aspects: Understanding Relationships Between Planets",

      ogDescription:
        "Explore the main astrological aspects and discover how planets cooperate, reinforce one another or create tension in a birth chart.",

      twitterTitle:
        "Astrological Aspects | Luna Astralis",

      twitterDescription:
        "Conjunction, opposition, square, trine, sextile and quincunx: discover their meaning in the birth chart.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      name:
        "Astrological aspects",

      headline:
        "Astrological Aspects: Meaning, Angles and Interpretation",

      description:
        "A guide to the main astrological aspects used to interpret relationships between planets in a birth chart.",
    },

    badge:
      "✦ Astrology library",

    title:
      "Astrological Aspects",

    lead:
      "Aspects are the angles formed between the planets in your birth chart. They reveal how your inner energies cooperate, reinforce one another, clash or seek a new balance.",

    createChart:
      "Create my free birth chart",

    exploreAspects:
      "Explore the aspects",

    introduction: {
      kicker:
        "The dialogue between planets",

      title:
        "What is an astrological aspect?",

      paragraphs: [
        "In a birth chart, each planet occupies a precise position on the zodiac circle. The angular distance between two planets can form an astrological aspect.",

        "These angles are interpreted as relationships between different functions of the personality. The Sun represents identity, for example, while the Moon describes the emotional world. An aspect between these two luminaries therefore shows how conscious identity and emotional needs interact.",

        "Some aspects help energy flow, while others create more tension or require adjustment. No aspect should be interpreted in isolation or simply classified as positive or negative.",
      ],
    },

    interpretationTitle:
      "How do you interpret an aspect in a birth chart?",

    interpretationSteps: [
      {
        number:
          "01",

        title:
          "The planets",

        text:
          "They identify the functions involved: thinking, feeling, loving, acting, growing, structuring or transforming.",
      },

      {
        number:
          "02",

        title:
          "The type of aspect",

        text:
          "The angle defines the nature of the relationship: fusion, cooperation, tension, flow, adjustment or polarity.",
      },

      {
        number:
          "03",

        title:
          "The signs",

        text:
          "The signs describe how each planet expresses its energy and responds to the other.",
      },

      {
        number:
          "04",

        title:
          "The houses",

        text:
          "The houses show the areas of life where the aspect manifests most directly.",
      },
    ],

    aspectsSection: {
      kicker:
        "The main astrological angles",

      title:
        "Meaning of the astrological aspects",

      description:
        "Select an aspect to discover its detailed meaning, angle, psychological dynamics and interpretation examples involving different planets.",
    },

    discoverLabel:
      "Discover",

    discoverAria:
      "Discover the astrological meaning of",

    aspects: [
      {
        name:
          "Conjunction",

        discoverName:
          "the conjunction",

        title:
          "Conjunction in astrology",

        href:
          "/astrologie/conjonction",

        symbol:
          "☌",

        degree:
          "0°",

        category:
          "Fusion",

        keywords:
          "Intensity • union • concentration",

        text:
          "A conjunction brings two planets together in the same area of the birth chart. Their functions blend, reinforce one another and act like a single energy.",
      },

      {
        name:
          "Opposition",

        discoverName:
          "the opposition",

        title:
          "Opposition in astrology",

        href:
          "/astrologie/opposition",

        symbol:
          "☍",

        degree:
          "180°",

        category:
          "Polarity",

        keywords:
          "Balance • confrontation • projection",

        text:
          "An opposition places two planets face to face. It highlights two complementary needs that must be recognized and balanced.",
      },

      {
        name:
          "Square",

        discoverName:
          "the square",

        title:
          "Square in astrology",

        href:
          "/astrologie/carre",

        symbol:
          "□",

        degree:
          "90°",

        category:
          "Tension",

        keywords:
          "Challenge • action • growth",

        text:
          "A square creates dynamic tension between two planets. It can produce obstacles, but it can also become a powerful force for action and transformation.",
      },

      {
        name:
          "Trine",

        discoverName:
          "the trine",

        title:
          "Trine in astrology",

        href:
          "/astrologie/trigone",

        symbol:
          "△",

        degree:
          "120°",

        category:
          "Harmony",

        keywords:
          "Flow • talent • ease",

        text:
          "A trine generally connects signs of the same element. It indicates a natural flow of energy, spontaneous talents and resources that are easy to access.",
      },

      {
        name:
          "Sextile",

        discoverName:
          "the sextile",

        title:
          "Sextile in astrology",

        href:
          "/astrologie/sextile",

        symbol:
          "⚹",

        degree:
          "60°",

        category:
          "Cooperation",

        keywords:
          "Opportunity • exchange • openness",

        text:
          "A sextile supports cooperation between two planets. It represents constructive possibilities that often require conscious initiative to develop.",
      },

      {
        name:
          "Quincunx",

        discoverName:
          "the quincunx",

        title:
          "Quincunx in astrology",

        href:
          "/astrologie/quinconce",

        symbol:
          "⚻",

        degree:
          "150°",

        category:
          "Adjustment",

        keywords:
          "Adaptation • mismatch • reorganization",

        text:
          "A quincunx connects two planets that operate very differently. It requires regular adjustment, flexibility and inner reorganization.",
      },
    ],

    groups: {
      kicker:
        "Two major dynamics",

      title:
        "Harmonious and dynamic aspects",

      harmoniousTitle:
        "Harmonious aspects",

      harmoniousParagraphs: [
        "The trine and sextile generally support cooperation between planets. They can represent talents, resources, opportunities and qualities that are expressed more naturally.",

        "They do not automatically guarantee that their potential will be developed. An ability can remain unused when it is never recognized or cultivated.",
      ],

      dynamicTitle:
        "Dynamic aspects",

      dynamicParagraphs: [
        "The square and opposition highlight differences, contradictions or tensions between the planets involved.",

        "These aspects require greater awareness and effort, but they can become important forces for decision, growth and self-improvement.",
      ],
    },

    conjunction: {
      title:
        "Is a conjunction harmonious or difficult?",

      subtitle:
        "A fusion of energies",

      paragraphs: [
        "A conjunction does not belong to a strictly harmonious or dynamic category. It merges the functions of the two planets and increases their intensity.",

        "Its expression depends greatly on the planets involved. A conjunction between Venus and Jupiter can encourage enthusiasm and generosity, while a conjunction between Mars and Saturn can create a more demanding combination of action and control.",
      ],

      link:
        "Understand the conjunction",
    },

    orb: {
      kicker:
        "The precision of the angle",

      title:
        "What is an orb in astrology?",

      introduction:
        "An aspect does not need to be perfectly exact to be interpreted. The difference between the theoretical angle and the actual angle is called the orb.",

      cards: [
        {
          value:
            "0°",

          title:
            "Exact aspect",

          text:
            "The two planets form the exact angle associated with the aspect. Its influence is generally considered particularly strong.",
        },

        {
          value:
            "1° to 3°",

          title:
            "Tight orb",

          text:
            "The aspect remains very precise. The relationship between the planets may be easily noticeable in personality or experience.",
        },

        {
          value:
            "4° to 8°",

          title:
            "Wider orb",

          text:
            "The aspect may still be considered depending on the planets, the type of aspect and the astrological method being used.",
        },
      ],

      conclusion:
        "Astrologers do not all use the same orbs. The luminaries are often given wider orbs, while minor aspects are generally studied with narrower margins.",
    },

    movement: {
      title:
        "Applying and separating aspects",

      cards: [
        {
          icon:
            "→",

          title:
            "Applying aspect",

          text:
            "An aspect is applying when the planets are moving toward the exact angle. This dynamic can symbolize energy that is building, increasing in intensity or seeking expression.",
        },

        {
          icon:
            "←",

          title:
            "Separating aspect",

          text:
            "An aspect is separating when the planets have already passed the exact angle. It can represent an experience that has already been integrated, recognized or is still being assimilated.",
        },
      ],
    },

    importance: {
      title:
        "Why are aspects essential in a birth chart?",

      paragraphs: [
        "The signs show how the planets express themselves, while the houses show the areas of life in which they act. Aspects add a third dimension by explaining how all these energies work together.",

        "A person may have a highly relationship-oriented Venus, but a Saturn square to Venus can add caution, high expectations or fear of rejection. A Jupiter trine to Venus can instead strengthen optimism, sociability or generosity.",

        "Aspects therefore make it possible to move beyond an isolated reading of the planets. They reveal contradictions, complementary qualities, natural talents and personal growth patterns within each birth chart.",
      ],
    },

    cta: {
      kicker:
        "Discover your aspects",

      title:
        "Which planets are connected in your birth chart?",

      text:
        "Generate your free birth chart to discover your planetary positions, houses and main birth aspects.",

      button:
        "Discover my birth chart",
    },

    faqKicker:
      "Frequently asked questions",

    faqTitle:
      "Questions about astrological aspects",

    faq: [
      {
        question:
          "What is an astrological aspect?",

        answer:
          "An astrological aspect is an angle formed between two planets or important points in a birth chart. This angle symbolically describes how their functions interact.",
      },

      {
        question:
          "What are the main astrological aspects?",

        answer:
          "The most commonly studied aspects are the conjunction at 0 degrees, sextile at 60 degrees, square at 90 degrees, trine at 120 degrees and opposition at 180 degrees. The quincunx at 150 degrees is also frequently interpreted.",
      },

      {
        question:
          "Which astrological aspect is the most powerful?",

        answer:
          "The strength of an aspect depends on its precision, the planets involved, their positions and the birth chart as a whole. An exact conjunction is often very intense, but a square or opposition can also be dominant.",
      },

      {
        question:
          "Are difficult aspects negative?",

        answer:
          "No. Squares and oppositions can create tension, but they also encourage action, awareness, resilience and personal growth.",
      },

      {
        question:
          "What does the orb of an aspect mean?",

        answer:
          "The orb is the accepted difference between the exact angle of an aspect and the actual positions of the planets. The smaller the orb, the more precise and noticeable the aspect is generally considered.",
      },

      {
        question:
          "Can a birth chart contain no aspects?",

        answer:
          "A birth chart almost always contains several aspects. Some planets may nevertheless have few connections or form no very precise major aspect.",
      },

      {
        question:
          "How can I find the aspects in my birth chart?",

        answer:
          "Generate a birth chart using your birth date, time and place. The lines drawn in the center of the chart wheel usually represent the main aspects.",
      },
    ],

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Aspectos astrológicos: significado, ángulos e interpretación | Luna Astralis",

      description:
        "Descubre el significado de la conjunción, la oposición, la cuadratura, el trígono, el sextil y el quincuncio en una carta natal.",

      ogTitle:
        "Los aspectos astrológicos: comprender las relaciones entre los planetas",

      ogDescription:
        "Explora los principales aspectos astrológicos y descubre cómo los planetas cooperan, se refuerzan o entran en tensión en una carta natal.",

      twitterTitle:
        "Los aspectos astrológicos | Luna Astralis",

      twitterDescription:
        "Conjunción, oposición, cuadratura, trígono, sextil y quincuncio: descubre su significado en la carta natal.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      name:
        "Los aspectos astrológicos",

      headline:
        "Aspectos astrológicos: significado, ángulos e interpretación",

      description:
        "Guía de los principales aspectos astrológicos utilizados para interpretar las relaciones entre los planetas de una carta natal.",
    },

    badge:
      "✦ Biblioteca astrológica",

    title:
      "Los aspectos astrológicos",

    lead:
      "Los aspectos son los ángulos formados entre los planetas de tu carta natal. Revelan cómo tus energías interiores cooperan, se refuerzan, entran en tensión o buscan un nuevo equilibrio.",

    createChart:
      "Crear mi carta natal gratis",

    exploreAspects:
      "Explorar los aspectos",

    introduction: {
      kicker:
        "El diálogo entre los planetas",

      title:
        "¿Qué es un aspecto astrológico?",

      paragraphs: [
        "En una carta natal, cada planeta ocupa una posición precisa en el círculo del zodiaco. La distancia angular entre dos planetas puede formar un aspecto astrológico.",

        "Estos ángulos se interpretan como relaciones entre diferentes funciones de la personalidad. El Sol representa, por ejemplo, la identidad, mientras que la Luna describe el mundo emocional. Un aspecto entre ambos luminares indica cómo interactúan la identidad consciente y las necesidades emocionales.",

        "Algunos aspectos facilitan la circulación de la energía, mientras que otros crean más tensión o requieren ajustes. Ningún aspecto debe interpretarse de manera aislada ni clasificarse simplemente como positivo o negativo.",
      ],
    },

    interpretationTitle:
      "¿Cómo interpretar un aspecto en una carta natal?",

    interpretationSteps: [
      {
        number:
          "01",

        title:
          "Los planetas",

        text:
          "Indican las funciones implicadas: pensar, sentir, amar, actuar, crecer, estructurar o transformar.",
      },

      {
        number:
          "02",

        title:
          "El tipo de aspecto",

        text:
          "El ángulo define la naturaleza de la relación: fusión, cooperación, tensión, fluidez, ajuste o polaridad.",
      },

      {
        number:
          "03",

        title:
          "Los signos",

        text:
          "Los signos describen cómo cada planeta expresa su energía y reacciona al otro.",
      },

      {
        number:
          "04",

        title:
          "Las casas",

        text:
          "Las casas muestran los ámbitos de vida en los que el aspecto se manifiesta de forma más directa.",
      },
    ],

    aspectsSection: {
      kicker:
        "Los principales ángulos astrológicos",

      title:
        "Significado de los aspectos astrológicos",

      description:
        "Selecciona un aspecto para descubrir su significado detallado, su ángulo, su dinámica psicológica y ejemplos de interpretación entre diferentes planetas.",
    },

    discoverLabel:
      "Descubrir",

    discoverAria:
      "Descubrir el significado astrológico de",

    aspects: [
      {
        name:
          "Conjunción",

        discoverName:
          "la conjunción",

        title:
          "Conjunción en astrología",

        href:
          "/astrologie/conjonction",

        symbol:
          "☌",

        degree:
          "0°",

        category:
          "Fusión",

        keywords:
          "Intensidad • unión • concentración",

        text:
          "La conjunción reúne dos planetas en una misma zona de la carta natal. Sus funciones se mezclan, se refuerzan y actúan como una sola energía.",
      },

      {
        name:
          "Oposición",

        discoverName:
          "la oposición",

        title:
          "Oposición en astrología",

        href:
          "/astrologie/opposition",

        symbol:
          "☍",

        degree:
          "180°",

        category:
          "Polaridad",

        keywords:
          "Equilibrio • confrontación • proyección",

        text:
          "La oposición coloca dos planetas frente a frente. Destaca dos necesidades complementarias que deben aprender a reconocerse y equilibrarse.",
      },

      {
        name:
          "Cuadratura",

        discoverName:
          "la cuadratura",

        title:
          "Cuadratura en astrología",

        href:
          "/astrologie/carre",

        symbol:
          "□",

        degree:
          "90°",

        category:
          "Tensión",

        keywords:
          "Desafío • acción • evolución",

        text:
          "La cuadratura crea una tensión dinámica entre dos planetas. Puede producir bloqueos, pero también convertirse en un poderoso motor de acción y transformación.",
      },

      {
        name:
          "Trígono",

        discoverName:
          "el trígono",

        title:
          "Trígono en astrología",

        href:
          "/astrologie/trigone",

        symbol:
          "△",

        degree:
          "120°",

        category:
          "Armonía",

        keywords:
          "Fluidez • talento • facilidad",

        text:
          "El trígono suele conectar signos del mismo elemento. Indica una circulación natural de la energía, talentos espontáneos y recursos fáciles de movilizar.",
      },

      {
        name:
          "Sextil",

        discoverName:
          "el sextil",

        title:
          "Sextil en astrología",

        href:
          "/astrologie/sextile",

        symbol:
          "⚹",

        degree:
          "60°",

        category:
          "Cooperación",

        keywords:
          "Posibilidad • intercambio • apertura",

        text:
          "El sextil favorece la cooperación entre dos planetas. Representa posibilidades constructivas que suelen requerir una iniciativa consciente para desarrollarse.",
      },

      {
        name:
          "Quincuncio",

        discoverName:
          "el quincuncio",

        title:
          "Quincuncio en astrología",

        href:
          "/astrologie/quinconce",

        symbol:
          "⚻",

        degree:
          "150°",

        category:
          "Ajuste",

        keywords:
          "Adaptación • desfase • reorganización",

        text:
          "El quincuncio conecta dos planetas que funcionan de manera muy diferente. Requiere ajustes frecuentes, flexibilidad y una reorganización interior.",
      },
    ],

    groups: {
      kicker:
        "Dos grandes dinámicas",

      title:
        "Aspectos armónicos y aspectos dinámicos",

      harmoniousTitle:
        "Los aspectos armónicos",

      harmoniousParagraphs: [
        "El trígono y el sextil suelen facilitar la cooperación entre los planetas. Pueden representar talentos, recursos, oportunidades y cualidades que se expresan con mayor naturalidad.",

        "Sin embargo, no garantizan automáticamente el desarrollo de su potencial. Una facilidad puede quedar poco utilizada si nunca se reconoce o cultiva.",
      ],

      dynamicTitle:
        "Los aspectos dinámicos",

      dynamicParagraphs: [
        "La cuadratura y la oposición ponen de relieve diferencias, contradicciones o tensiones entre los planetas implicados.",

        "Estos aspectos requieren mayor conciencia y esfuerzo, pero pueden convertirse en importantes motores de decisión, evolución y superación.",
      ],
    },

    conjunction: {
      title:
        "¿La conjunción es armónica o difícil?",

      subtitle:
        "Una fusión de energías",

      paragraphs: [
        "La conjunción no pertenece a una categoría estrictamente armónica o dinámica. Fusiona las funciones de los dos planetas y aumenta su intensidad.",

        "Su expresión depende mucho de los planetas implicados. Una conjunción entre Venus y Júpiter puede favorecer el entusiasmo y la generosidad, mientras que una conjunción entre Marte y Saturno puede crear una combinación más exigente entre acción y control.",
      ],

      link:
        "Comprender la conjunción",
    },

    orb: {
      kicker:
        "La precisión del ángulo",

      title:
        "¿Qué es el orbe en astrología?",

      introduction:
        "Un aspecto no necesita ser perfectamente exacto para interpretarse. La diferencia entre el ángulo teórico y el ángulo real se denomina orbe.",

      cards: [
        {
          value:
            "0°",

          title:
            "Aspecto exacto",

          text:
            "Los dos planetas forman exactamente el ángulo asociado al aspecto. Su influencia suele considerarse especialmente fuerte.",
        },

        {
          value:
            "1° a 3°",

          title:
            "Orbe cerrado",

          text:
            "El aspecto sigue siendo muy preciso. La relación entre los planetas puede percibirse fácilmente en el carácter o en la experiencia.",
        },

        {
          value:
            "4° a 8°",

          title:
            "Orbe más amplio",

          text:
            "El aspecto aún puede considerarse según los planetas, el tipo de aspecto y el método astrológico utilizado.",
        },
      ],

      conclusion:
        "No todos los astrólogos utilizan los mismos orbes. Los luminares suelen recibir orbes más amplios, mientras que los aspectos menores se estudian generalmente con márgenes más estrechos.",
    },

    movement: {
      title:
        "Aspectos aplicativos y separativos",

      cards: [
        {
          icon:
            "→",

          title:
            "Aspecto aplicativo",

          text:
            "El aspecto es aplicativo cuando los planetas se acercan al ángulo exacto. Esta dinámica puede simbolizar una energía que se construye, aumenta de intensidad o busca realizarse.",
        },

        {
          icon:
            "←",

          title:
            "Aspecto separativo",

          text:
            "El aspecto es separativo cuando los planetas ya han superado el ángulo exacto. Puede representar una experiencia ya integrada, conocida o todavía en proceso de asimilación.",
        },
      ],
    },

    importance: {
      title:
        "¿Por qué son esenciales los aspectos en una carta natal?",

      paragraphs: [
        "Los signos indican cómo se expresan los planetas y las casas muestran en qué ámbitos de vida actúan. Los aspectos añaden una tercera dimensión: explican cómo funcionan juntas todas estas energías.",

        "Una persona puede tener una Venus muy orientada a las relaciones, pero una cuadratura de Saturno a Venus puede añadir prudencia, exigencias o miedo al rechazo. Un trígono de Júpiter a Venus puede, por el contrario, reforzar el optimismo, la sociabilidad o la generosidad.",

        "Los aspectos permiten superar una lectura aislada de los planetas. Revelan contradicciones, complementariedades, talentos naturales y mecanismos de evolución propios de cada carta natal.",
      ],
    },

    cta: {
      kicker:
        "Descubre tus aspectos",

      title:
        "¿Qué planetas están conectados en tu carta natal?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tus posiciones planetarias, tus casas y los principales aspectos de tu nacimiento.",

      button:
        "Descubrir mi carta natal",
    },

    faqKicker:
      "Preguntas frecuentes",

    faqTitle:
      "Preguntas sobre los aspectos astrológicos",

    faq: [
      {
        question:
          "¿Qué es un aspecto astrológico?",

        answer:
          "Un aspecto astrológico es un ángulo formado entre dos planetas o puntos importantes de una carta natal. Este ángulo describe simbólicamente cómo interactúan sus funciones.",
      },

      {
        question:
          "¿Cuáles son los principales aspectos astrológicos?",

        answer:
          "Los aspectos más estudiados son la conjunción a 0 grados, el sextil a 60 grados, la cuadratura a 90 grados, el trígono a 120 grados y la oposición a 180 grados. El quincuncio a 150 grados también se interpreta con frecuencia.",
      },

      {
        question:
          "¿Cuál es el aspecto astrológico más poderoso?",

        answer:
          "La fuerza de un aspecto depende de su precisión, de los planetas implicados, de sus posiciones y del conjunto de la carta natal. Una conjunción exacta suele ser muy intensa, pero una cuadratura o una oposición también puede ser dominante.",
      },

      {
        question:
          "¿Los aspectos difíciles son negativos?",

        answer:
          "No. Las cuadraturas y las oposiciones pueden crear tensiones, pero también favorecen la acción, la toma de conciencia, la resiliencia y el crecimiento personal.",
      },

      {
        question:
          "¿Qué significa el orbe de un aspecto?",

        answer:
          "El orbe representa la diferencia aceptada entre el ángulo exacto de un aspecto y la posición real de los planetas. Cuanto menor es el orbe, más preciso y perceptible suele considerarse el aspecto.",
      },

      {
        question:
          "¿Puede una carta natal no contener ningún aspecto?",

        answer:
          "Una carta natal casi siempre contiene varios aspectos. Sin embargo, algunos planetas pueden estar poco conectados o no formar ningún aspecto mayor muy preciso.",
      },

      {
        question:
          "¿Cómo puedo conocer los aspectos de mi carta natal?",

        answer:
          "Genera una carta natal con tu fecha, hora y lugar de nacimiento. Las líneas trazadas en el centro de la rueda suelen representar los principales aspectos.",
      },
    ],

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Astrologische Aspekte: Bedeutung, Winkel und Deutung | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung von Konjunktion, Opposition, Quadrat, Trigon, Sextil und Quinkunx im Geburtshoroskop.",

      ogTitle:
        "Astrologische Aspekte: Beziehungen zwischen Planeten verstehen",

      ogDescription:
        "Entdecken Sie die wichtigsten astrologischen Aspekte und erfahren Sie, wie Planeten zusammenwirken, sich verstärken oder Spannungen erzeugen.",

      twitterTitle:
        "Astrologische Aspekte | Luna Astralis",

      twitterDescription:
        "Konjunktion, Opposition, Quadrat, Trigon, Sextil und Quinkunx: Entdecken Sie ihre Bedeutung im Geburtshoroskop.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      name:
        "Astrologische Aspekte",

      headline:
        "Astrologische Aspekte: Bedeutung, Winkel und Deutung",

      description:
        "Ein Leitfaden zu den wichtigsten astrologischen Aspekten zur Deutung der Beziehungen zwischen Planeten im Geburtshoroskop.",
    },

    badge:
      "✦ Astrologische Bibliothek",

    title:
      "Astrologische Aspekte",

    lead:
      "Aspekte sind die Winkel zwischen den Planeten Ihres Geburtshoroskops. Sie zeigen, wie Ihre inneren Energien zusammenarbeiten, sich verstärken, in Spannung geraten oder ein neues Gleichgewicht suchen.",

    createChart:
      "Mein kostenloses Geburtshoroskop erstellen",

    exploreAspects:
      "Aspekte erkunden",

    introduction: {
      kicker:
        "Der Dialog zwischen den Planeten",

      title:
        "Was ist ein astrologischer Aspekt?",

      paragraphs: [
        "In einem Geburtshoroskop nimmt jeder Planet eine genaue Position im Tierkreis ein. Der Winkelabstand zwischen zwei Planeten kann einen astrologischen Aspekt bilden.",

        "Diese Winkel werden als Beziehungen zwischen verschiedenen Persönlichkeitsfunktionen gedeutet. Die Sonne steht beispielsweise für die Identität, während der Mond die Gefühlswelt beschreibt. Ein Aspekt zwischen diesen beiden Himmelskörpern zeigt daher, wie bewusste Identität und emotionale Bedürfnisse zusammenwirken.",

        "Einige Aspekte erleichtern den Energiefluss, während andere mehr Spannung erzeugen oder Anpassung verlangen. Kein Aspekt sollte isoliert betrachtet oder einfach als positiv oder negativ eingestuft werden.",
      ],
    },

    interpretationTitle:
      "Wie deutet man einen Aspekt im Geburtshoroskop?",

    interpretationSteps: [
      {
        number:
          "01",

        title:
          "Die Planeten",

        text:
          "Sie zeigen die beteiligten Funktionen: Denken, Fühlen, Lieben, Handeln, Wachsen, Strukturieren oder Verwandeln.",
      },

      {
        number:
          "02",

        title:
          "Die Art des Aspekts",

        text:
          "Der Winkel beschreibt die Art der Beziehung: Verschmelzung, Zusammenarbeit, Spannung, Fluss, Anpassung oder Polarität.",
      },

      {
        number:
          "03",

        title:
          "Die Zeichen",

        text:
          "Die Zeichen beschreiben, wie jeder Planet seine Energie ausdrückt und auf den anderen reagiert.",
      },

      {
        number:
          "04",

        title:
          "Die Häuser",

        text:
          "Die Häuser zeigen die Lebensbereiche, in denen sich der Aspekt am deutlichsten ausdrückt.",
      },
    ],

    aspectsSection: {
      kicker:
        "Die wichtigsten astrologischen Winkel",

      title:
        "Bedeutung der astrologischen Aspekte",

      description:
        "Wählen Sie einen Aspekt aus, um seine genaue Bedeutung, seinen Winkel, seine psychologische Dynamik und Deutungsbeispiele zwischen verschiedenen Planeten zu entdecken.",
    },

    discoverLabel:
      "Entdecken",

    discoverAria:
      "Die astrologische Bedeutung entdecken von",

    aspects: [
      {
        name:
          "Konjunktion",

        discoverName:
          "die Konjunktion",

        title:
          "Konjunktion in der Astrologie",

        href:
          "/astrologie/conjonction",

        symbol:
          "☌",

        degree:
          "0°",

        category:
          "Verschmelzung",

        keywords:
          "Intensität • Vereinigung • Konzentration",

        text:
          "Eine Konjunktion bringt zwei Planeten im selben Bereich des Geburtshoroskops zusammen. Ihre Funktionen verbinden und verstärken sich und wirken wie eine einzige Energie.",
      },

      {
        name:
          "Opposition",

        discoverName:
          "die Opposition",

        title:
          "Opposition in der Astrologie",

        href:
          "/astrologie/opposition",

        symbol:
          "☍",

        degree:
          "180°",

        category:
          "Polarität",

        keywords:
          "Gleichgewicht • Konfrontation • Projektion",

        text:
          "Eine Opposition stellt zwei Planeten einander gegenüber. Sie macht zwei ergänzende Bedürfnisse sichtbar, die erkannt und ausgeglichen werden müssen.",
      },

      {
        name:
          "Quadrat",

        discoverName:
          "das Quadrat",

        title:
          "Quadrat in der Astrologie",

        href:
          "/astrologie/carre",

        symbol:
          "□",

        degree:
          "90°",

        category:
          "Spannung",

        keywords:
          "Herausforderung • Handlung • Entwicklung",

        text:
          "Ein Quadrat erzeugt eine dynamische Spannung zwischen zwei Planeten. Es kann Blockaden schaffen, aber auch zu einer starken Kraft für Handlung und Veränderung werden.",
      },

      {
        name:
          "Trigon",

        discoverName:
          "das Trigon",

        title:
          "Trigon in der Astrologie",

        href:
          "/astrologie/trigone",

        symbol:
          "△",

        degree:
          "120°",

        category:
          "Harmonie",

        keywords:
          "Fluss • Talent • Leichtigkeit",

        text:
          "Ein Trigon verbindet meist Zeichen desselben Elements. Es zeigt einen natürlichen Energiefluss, spontane Talente und leicht zugängliche Ressourcen.",
      },

      {
        name:
          "Sextil",

        discoverName:
          "das Sextil",

        title:
          "Sextil in der Astrologie",

        href:
          "/astrologie/sextile",

        symbol:
          "⚹",

        degree:
          "60°",

        category:
          "Zusammenarbeit",

        keywords:
          "Möglichkeit • Austausch • Offenheit",

        text:
          "Ein Sextil unterstützt die Zusammenarbeit zwischen zwei Planeten. Es steht für konstruktive Möglichkeiten, die häufig bewusste Initiative benötigen, um sich zu entwickeln.",
      },

      {
        name:
          "Quinkunx",

        discoverName:
          "das Quinkunx",

        title:
          "Quinkunx in der Astrologie",

        href:
          "/astrologie/quinconce",

        symbol:
          "⚻",

        degree:
          "150°",

        category:
          "Anpassung",

        keywords:
          "Anpassung • Unstimmigkeit • Neuordnung",

        text:
          "Ein Quinkunx verbindet zwei Planeten, die sehr unterschiedlich funktionieren. Es verlangt regelmäßige Anpassung, Flexibilität und innere Neuordnung.",
      },
    ],

    groups: {
      kicker:
        "Zwei grundlegende Dynamiken",

      title:
        "Harmonische und dynamische Aspekte",

      harmoniousTitle:
        "Harmonische Aspekte",

      harmoniousParagraphs: [
        "Trigon und Sextil erleichtern in der Regel die Zusammenarbeit zwischen den Planeten. Sie können Talente, Ressourcen, Möglichkeiten und Eigenschaften darstellen, die sich natürlicher ausdrücken.",

        "Sie garantieren jedoch nicht automatisch, dass ihr Potenzial entwickelt wird. Eine Fähigkeit kann ungenutzt bleiben, wenn sie nie erkannt oder gefördert wird.",
      ],

      dynamicTitle:
        "Dynamische Aspekte",

      dynamicParagraphs: [
        "Quadrat und Opposition machen Unterschiede, Widersprüche oder Spannungen zwischen den beteiligten Planeten sichtbar.",

        "Diese Aspekte verlangen mehr Bewusstsein und Anstrengung, können aber zu wichtigen Kräften für Entscheidungen, Entwicklung und Selbstüberwindung werden.",
      ],
    },

    conjunction: {
      title:
        "Ist eine Konjunktion harmonisch oder schwierig?",

      subtitle:
        "Eine Verschmelzung von Energien",

      paragraphs: [
        "Eine Konjunktion gehört weder eindeutig zu den harmonischen noch zu den dynamischen Aspekten. Sie verbindet die Funktionen beider Planeten und steigert ihre Intensität.",

        "Ihre Wirkung hängt stark von den beteiligten Planeten ab. Eine Konjunktion zwischen Venus und Jupiter kann Begeisterung und Großzügigkeit fördern, während eine Konjunktion zwischen Mars und Saturn eine anspruchsvollere Verbindung von Handlung und Kontrolle erzeugen kann.",
      ],

      link:
        "Die Konjunktion verstehen",
    },

    orb: {
      kicker:
        "Die Genauigkeit des Winkels",

      title:
        "Was ist ein Orbis in der Astrologie?",

      introduction:
        "Ein Aspekt muss nicht vollkommen exakt sein, um gedeutet zu werden. Der Abstand zwischen dem theoretischen und dem tatsächlichen Winkel wird Orbis genannt.",

      cards: [
        {
          value:
            "0°",

          title:
            "Exakter Aspekt",

          text:
            "Die beiden Planeten bilden genau den Winkel des Aspekts. Sein Einfluss wird im Allgemeinen als besonders stark angesehen.",
        },

        {
          value:
            "1° bis 3°",

          title:
            "Enger Orbis",

          text:
            "Der Aspekt bleibt sehr genau. Die Beziehung zwischen den Planeten kann im Charakter oder in Erfahrungen deutlich wahrnehmbar sein.",
        },

        {
          value:
            "4° bis 8°",

          title:
            "Weiterer Orbis",

          text:
            "Der Aspekt kann je nach Planeten, Aspektart und verwendeter astrologischer Methode weiterhin berücksichtigt werden.",
        },
      ],

      conclusion:
        "Nicht alle Astrologen verwenden dieselben Orben. Sonne und Mond erhalten häufig weitere Orben, während kleinere Aspekte meist mit engeren Abständen untersucht werden.",
    },

    movement: {
      title:
        "Applikative und separative Aspekte",

      cards: [
        {
          icon:
            "→",

          title:
            "Applikativer Aspekt",

          text:
            "Ein Aspekt ist applikativ, wenn sich die Planeten dem exakten Winkel nähern. Diese Dynamik kann eine Energie symbolisieren, die sich aufbaut, intensiver wird oder sich verwirklichen möchte.",
        },

        {
          icon:
            "←",

          title:
            "Separativer Aspekt",

          text:
            "Ein Aspekt ist separativ, wenn die Planeten den exakten Winkel bereits überschritten haben. Er kann eine Erfahrung darstellen, die bereits integriert, bekannt oder noch in Verarbeitung ist.",
        },
      ],
    },

    importance: {
      title:
        "Warum sind Aspekte im Geburtshoroskop so wichtig?",

      paragraphs: [
        "Die Zeichen zeigen, wie sich die Planeten ausdrücken, und die Häuser zeigen, in welchen Lebensbereichen sie wirken. Aspekte fügen eine dritte Dimension hinzu: Sie erklären, wie all diese Energien zusammenarbeiten.",

        "Eine Person kann beispielsweise eine sehr beziehungsorientierte Venus haben, doch ein Quadrat von Saturn zu Venus kann Vorsicht, hohe Ansprüche oder Angst vor Zurückweisung hinzufügen. Ein Trigon von Jupiter zu Venus kann dagegen Optimismus, Geselligkeit oder Großzügigkeit verstärken.",

        "Aspekte ermöglichen es daher, über eine isolierte Deutung der Planeten hinauszugehen. Sie zeigen Widersprüche, Ergänzungen, natürliche Talente und individuelle Entwicklungsmuster im Geburtshoroskop.",
      ],
    },

    cta: {
      kicker:
        "Entdecken Sie Ihre Aspekte",

      title:
        "Welche Planeten sind in Ihrem Geburtshoroskop verbunden?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop, um Ihre Planetenpositionen, Häuser und wichtigsten Geburtsaspekte zu entdecken.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faqKicker:
      "Häufige Fragen",

    faqTitle:
      "Fragen zu astrologischen Aspekten",

    faq: [
      {
        question:
          "Was ist ein astrologischer Aspekt?",

        answer:
          "Ein astrologischer Aspekt ist ein Winkel zwischen zwei Planeten oder wichtigen Punkten eines Geburtshoroskops. Dieser Winkel beschreibt symbolisch, wie ihre Funktionen zusammenwirken.",
      },

      {
        question:
          "Was sind die wichtigsten astrologischen Aspekte?",

        answer:
          "Die am häufigsten untersuchten Aspekte sind die Konjunktion bei 0 Grad, das Sextil bei 60 Grad, das Quadrat bei 90 Grad, das Trigon bei 120 Grad und die Opposition bei 180 Grad. Auch das Quinkunx bei 150 Grad wird häufig gedeutet.",
      },

      {
        question:
          "Welcher astrologische Aspekt ist am stärksten?",

        answer:
          "Die Stärke eines Aspekts hängt von seiner Genauigkeit, den beteiligten Planeten, ihren Positionen und dem gesamten Geburtshoroskop ab. Eine exakte Konjunktion ist oft sehr intensiv, aber auch ein Quadrat oder eine Opposition kann dominierend sein.",
      },

      {
        question:
          "Sind schwierige Aspekte negativ?",

        answer:
          "Nein. Quadrate und Oppositionen können Spannungen erzeugen, fördern aber auch Handlung, Bewusstsein, Widerstandskraft und persönliche Entwicklung.",
      },

      {
        question:
          "Was bedeutet der Orbis eines Aspekts?",

        answer:
          "Der Orbis ist der akzeptierte Abstand zwischen dem exakten Winkel eines Aspekts und den tatsächlichen Positionen der Planeten. Je kleiner der Orbis, desto genauer und deutlicher wird der Aspekt normalerweise eingeschätzt.",
      },

      {
        question:
          "Kann ein Geburtshoroskop keine Aspekte enthalten?",

        answer:
          "Ein Geburtshoroskop enthält fast immer mehrere Aspekte. Einige Planeten können jedoch nur wenige Verbindungen haben oder keinen sehr genauen Hauptaspekt bilden.",
      },

      {
        question:
          "Wie finde ich die Aspekte meines Geburtshoroskops?",

        answer:
          "Erstellen Sie ein Geburtshoroskop mit Ihrem Geburtsdatum, Ihrer Geburtszeit und Ihrem Geburtsort. Die Linien in der Mitte des Horoskoprads stellen normalerweise die wichtigsten Aspekte dar.",
      },
    ],

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Aspetti astrologici: significato, angoli e interpretazione | Luna Astralis",

      description:
        "Scopri il significato di congiunzione, opposizione, quadratura, trigono, sestile e quinconce nel tema natale.",

      ogTitle:
        "Gli aspetti astrologici: comprendere le relazioni tra i pianeti",

      ogDescription:
        "Esplora i principali aspetti astrologici e scopri come i pianeti collaborano, si rafforzano o entrano in tensione nel tema natale.",

      twitterTitle:
        "Gli aspetti astrologici | Luna Astralis",

      twitterDescription:
        "Congiunzione, opposizione, quadratura, trigono, sestile e quinconce: scopri il loro significato nel tema natale.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      name:
        "Gli aspetti astrologici",

      headline:
        "Aspetti astrologici: significato, angoli e interpretazione",

      description:
        "Guida ai principali aspetti astrologici utilizzati per interpretare le relazioni tra i pianeti nel tema natale.",
    },

    badge:
      "✦ Biblioteca astrologica",

    title:
      "Gli aspetti astrologici",

    lead:
      "Gli aspetti sono gli angoli formati tra i pianeti del tuo tema natale. Rivelano come le tue energie interiori collaborano, si rafforzano, entrano in tensione o cercano un nuovo equilibrio.",

    createChart:
      "Creare gratuitamente il mio tema natale",

    exploreAspects:
      "Esplorare gli aspetti",

    introduction: {
      kicker:
        "Il dialogo tra i pianeti",

      title:
        "Che cos’è un aspetto astrologico?",

      paragraphs: [
        "In un tema natale, ogni pianeta occupa una posizione precisa nel cerchio zodiacale. La distanza angolare tra due pianeti può formare un aspetto astrologico.",

        "Questi angoli vengono interpretati come relazioni tra diverse funzioni della personalità. Il Sole rappresenta, per esempio, l’identità, mentre la Luna descrive il mondo emotivo. Un aspetto tra questi due luminari indica quindi come interagiscono l’identità cosciente e i bisogni emotivi.",

        "Alcuni aspetti facilitano il flusso dell’energia, mentre altri creano maggiore tensione o richiedono aggiustamenti. Nessun aspetto dovrebbe essere interpretato isolatamente o classificato semplicemente come positivo o negativo.",
      ],
    },

    interpretationTitle:
      "Come interpretare un aspetto nel tema natale?",

    interpretationSteps: [
      {
        number:
          "01",

        title:
          "I pianeti",

        text:
          "Indicano le funzioni coinvolte: pensare, sentire, amare, agire, crescere, strutturare o trasformare.",
      },

      {
        number:
          "02",

        title:
          "Il tipo di aspetto",

        text:
          "L’angolo definisce la natura della relazione: fusione, cooperazione, tensione, fluidità, adattamento o polarità.",
      },

      {
        number:
          "03",

        title:
          "I segni",

        text:
          "I segni descrivono come ogni pianeta esprime la propria energia e reagisce all’altro.",
      },

      {
        number:
          "04",

        title:
          "Le case",

        text:
          "Le case mostrano gli ambiti della vita nei quali l’aspetto si manifesta più direttamente.",
      },
    ],

    aspectsSection: {
      kicker:
        "I principali angoli astrologici",

      title:
        "Significato degli aspetti astrologici",

      description:
        "Seleziona un aspetto per scoprirne il significato dettagliato, l’angolo, la dinamica psicologica e alcuni esempi di interpretazione tra pianeti diversi.",
    },

    discoverLabel:
      "Scoprire",

    discoverAria:
      "Scoprire il significato astrologico di",

    aspects: [
      {
        name:
          "Congiunzione",

        discoverName:
          "la congiunzione",

        title:
          "Congiunzione in astrologia",

        href:
          "/astrologie/conjonction",

        symbol:
          "☌",

        degree:
          "0°",

        category:
          "Fusione",

        keywords:
          "Intensità • unione • concentrazione",

        text:
          "La congiunzione riunisce due pianeti nella stessa zona del tema natale. Le loro funzioni si mescolano, si rafforzano e agiscono come un’unica energia.",
      },

      {
        name:
          "Opposizione",

        discoverName:
          "l’opposizione",

        title:
          "Opposizione in astrologia",

        href:
          "/astrologie/opposition",

        symbol:
          "☍",

        degree:
          "180°",

        category:
          "Polarità",

        keywords:
          "Equilibrio • confronto • proiezione",

        text:
          "L’opposizione pone due pianeti uno di fronte all’altro. Evidenzia due bisogni complementari che devono essere riconosciuti ed equilibrati.",
      },

      {
        name:
          "Quadratura",

        discoverName:
          "la quadratura",

        title:
          "Quadratura in astrologia",

        href:
          "/astrologie/carre",

        symbol:
          "□",

        degree:
          "90°",

        category:
          "Tensione",

        keywords:
          "Sfida • azione • evoluzione",

        text:
          "La quadratura crea una tensione dinamica tra due pianeti. Può produrre blocchi, ma può anche diventare una potente forza di azione e trasformazione.",
      },

      {
        name:
          "Trigono",

        discoverName:
          "il trigono",

        title:
          "Trigono in astrologia",

        href:
          "/astrologie/trigone",

        symbol:
          "△",

        degree:
          "120°",

        category:
          "Armonia",

        keywords:
          "Fluidità • talento • facilità",

        text:
          "Il trigono collega generalmente segni dello stesso elemento. Indica un flusso naturale dell’energia, talenti spontanei e risorse facili da utilizzare.",
      },

      {
        name:
          "Sestile",

        discoverName:
          "il sestile",

        title:
          "Sestile in astrologia",

        href:
          "/astrologie/sextile",

        symbol:
          "⚹",

        degree:
          "60°",

        category:
          "Cooperazione",

        keywords:
          "Possibilità • scambio • apertura",

        text:
          "Il sestile favorisce la cooperazione tra due pianeti. Rappresenta possibilità costruttive che spesso richiedono un’iniziativa consapevole per svilupparsi.",
      },

      {
        name:
          "Quinconce",

        discoverName:
          "il quinconce",

        title:
          "Quinconce in astrologia",

        href:
          "/astrologie/quinconce",

        symbol:
          "⚻",

        degree:
          "150°",

        category:
          "Adattamento",

        keywords:
          "Adattamento • disallineamento • riorganizzazione",

        text:
          "Il quinconce collega due pianeti che funzionano in modo molto diverso. Richiede aggiustamenti regolari, flessibilità e una riorganizzazione interiore.",
      },
    ],

    groups: {
      kicker:
        "Due grandi dinamiche",

      title:
        "Aspetti armonici e aspetti dinamici",

      harmoniousTitle:
        "Gli aspetti armonici",

      harmoniousParagraphs: [
        "Il trigono e il sestile facilitano generalmente la cooperazione tra i pianeti. Possono rappresentare talenti, risorse, opportunità e qualità che si esprimono con maggiore naturalezza.",

        "Tuttavia, non garantiscono automaticamente lo sviluppo del loro potenziale. Una facilità può rimanere poco utilizzata se non viene mai riconosciuta o coltivata.",
      ],

      dynamicTitle:
        "Gli aspetti dinamici",

      dynamicParagraphs: [
        "La quadratura e l’opposizione evidenziano differenze, contraddizioni o tensioni tra i pianeti coinvolti.",

        "Questi aspetti richiedono maggiore consapevolezza e impegno, ma possono diventare importanti motori di decisione, evoluzione e superamento personale.",
      ],
    },

    conjunction: {
      title:
        "La congiunzione è armonica o difficile?",

      subtitle:
        "Una fusione di energie",

      paragraphs: [
        "La congiunzione non appartiene a una categoria strettamente armonica o dinamica. Unisce le funzioni dei due pianeti e ne aumenta l’intensità.",

        "La sua espressione dipende molto dai pianeti coinvolti. Una congiunzione tra Venere e Giove può favorire entusiasmo e generosità, mentre una congiunzione tra Marte e Saturno può creare una combinazione più impegnativa tra azione e controllo.",
      ],

      link:
        "Comprendere la congiunzione",
    },

    orb: {
      kicker:
        "La precisione dell’angolo",

      title:
        "Che cos’è l’orbe in astrologia?",

      introduction:
        "Un aspetto non deve essere perfettamente esatto per essere interpretato. La differenza tra l’angolo teorico e quello reale è chiamata orbe.",

      cards: [
        {
          value:
            "0°",

          title:
            "Aspetto esatto",

          text:
            "I due pianeti formano esattamente l’angolo associato all’aspetto. La sua influenza è generalmente considerata particolarmente forte.",
        },

        {
          value:
            "Da 1° a 3°",

          title:
            "Orbe stretto",

          text:
            "L’aspetto rimane molto preciso. La relazione tra i pianeti può essere facilmente percepibile nel carattere o nell’esperienza.",
        },

        {
          value:
            "Da 4° a 8°",

          title:
            "Orbe più ampio",

          text:
            "L’aspetto può ancora essere considerato in base ai pianeti, al tipo di aspetto e al metodo astrologico utilizzato.",
        },
      ],

      conclusion:
        "Gli astrologi non utilizzano tutti gli stessi orbi. Ai luminari vengono spesso concessi orbi più ampi, mentre gli aspetti minori sono generalmente studiati con margini più stretti.",
    },

    movement: {
      title:
        "Aspetti applicativi e separativi",

      cards: [
        {
          icon:
            "→",

          title:
            "Aspetto applicativo",

          text:
            "Un aspetto è applicativo quando i pianeti si avvicinano all’angolo esatto. Questa dinamica può simboleggiare un’energia che si costruisce, aumenta d’intensità o cerca di realizzarsi.",
        },

        {
          icon:
            "←",

          title:
            "Aspetto separativo",

          text:
            "Un aspetto è separativo quando i pianeti hanno già superato l’angolo esatto. Può rappresentare un’esperienza già integrata, conosciuta o ancora in fase di assimilazione.",
        },
      ],
    },

    importance: {
      title:
        "Perché gli aspetti sono essenziali nel tema natale?",

      paragraphs: [
        "I segni indicano come si esprimono i pianeti e le case mostrano in quali ambiti della vita agiscono. Gli aspetti aggiungono una terza dimensione: spiegano come tutte queste energie funzionano insieme.",

        "Una persona può avere una Venere molto orientata alle relazioni, ma una quadratura di Saturno a Venere può aggiungere prudenza, aspettative elevate o paura del rifiuto. Un trigono di Giove a Venere può invece rafforzare ottimismo, socievolezza o generosità.",

        "Gli aspetti permettono quindi di andare oltre una lettura isolata dei pianeti. Rivelano contraddizioni, complementarità, talenti naturali e meccanismi di evoluzione propri di ogni tema natale.",
      ],
    },

    cta: {
      kicker:
        "Scopri i tuoi aspetti",

      title:
        "Quali pianeti sono collegati nel tuo tema natale?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire le posizioni planetarie, le case e i principali aspetti della nascita.",

      button:
        "Scoprire il mio tema natale",
    },

    faqKicker:
      "Domande frequenti",

    faqTitle:
      "Domande sugli aspetti astrologici",

    faq: [
      {
        question:
          "Che cos’è un aspetto astrologico?",

        answer:
          "Un aspetto astrologico è un angolo formato tra due pianeti o punti importanti di un tema natale. Questo angolo descrive simbolicamente come interagiscono le loro funzioni.",
      },

      {
        question:
          "Quali sono i principali aspetti astrologici?",

        answer:
          "Gli aspetti più studiati sono la congiunzione a 0 gradi, il sestile a 60 gradi, la quadratura a 90 gradi, il trigono a 120 gradi e l’opposizione a 180 gradi. Anche il quinconce a 150 gradi viene interpretato frequentemente.",
      },

      {
        question:
          "Qual è l’aspetto astrologico più potente?",

        answer:
          "La forza di un aspetto dipende dalla sua precisione, dai pianeti coinvolti, dalle loro posizioni e dal tema natale nel suo insieme. Una congiunzione esatta è spesso molto intensa, ma anche una quadratura o un’opposizione può essere dominante.",
      },

      {
        question:
          "Gli aspetti difficili sono negativi?",

        answer:
          "No. Quadrature e opposizioni possono creare tensioni, ma favoriscono anche l’azione, la consapevolezza, la resilienza e la crescita personale.",
      },

      {
        question:
          "Che cosa significa l’orbe di un aspetto?",

        answer:
          "L’orbe rappresenta la differenza accettata tra l’angolo esatto di un aspetto e la posizione reale dei pianeti. Più piccolo è l’orbe, più l’aspetto viene generalmente considerato preciso e percepibile.",
      },

      {
        question:
          "Un tema natale può non contenere aspetti?",

        answer:
          "Un tema natale contiene quasi sempre diversi aspetti. Alcuni pianeti possono tuttavia essere poco collegati o non formare alcun aspetto maggiore molto preciso.",
      },

      {
        question:
          "Come posso conoscere gli aspetti del mio tema natale?",

        answer:
          "Genera un tema natale utilizzando data, ora e luogo di nascita. Le linee tracciate al centro della ruota rappresentano generalmente i principali aspetti.",
      },
    ],

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Aspectos astrológicos: significado, ângulos e interpretação | Luna Astralis",

      description:
        "Descubra o significado da conjunção, oposição, quadratura, trígono, sextil e quincúncio no mapa natal.",

      ogTitle:
        "Os aspectos astrológicos: compreender as relações entre os planetas",

      ogDescription:
        "Explore os principais aspectos astrológicos e descubra como os planetas cooperam, se reforçam ou entram em tensão no mapa natal.",

      twitterTitle:
        "Os aspectos astrológicos | Luna Astralis",

      twitterDescription:
        "Conjunção, oposição, quadratura, trígono, sextil e quincúncio: descubra seus significados no mapa natal.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      name:
        "Os aspectos astrológicos",

      headline:
        "Aspectos astrológicos: significado, ângulos e interpretação",

      description:
        "Guia dos principais aspectos astrológicos utilizados para interpretar as relações entre os planetas no mapa natal.",
    },

    badge:
      "✦ Biblioteca astrológica",

    title:
      "Os aspectos astrológicos",

    lead:
      "Os aspectos são os ângulos formados entre os planetas do seu mapa natal. Eles revelam como suas energias interiores cooperam, se reforçam, entram em tensão ou buscam um novo equilíbrio.",

    createChart:
      "Criar meu mapa astral grátis",

    exploreAspects:
      "Explorar os aspectos",

    introduction: {
      kicker:
        "O diálogo entre os planetas",

      title:
        "O que é um aspecto astrológico?",

      paragraphs: [
        "Em um mapa natal, cada planeta ocupa uma posição precisa no círculo do zodíaco. A distância angular entre dois planetas pode formar um aspecto astrológico.",

        "Esses ângulos são interpretados como relações entre diferentes funções da personalidade. O Sol representa, por exemplo, a identidade, enquanto a Lua descreve o mundo emocional. Um aspecto entre esses dois luminares indica, portanto, como a identidade consciente e as necessidades emocionais interagem.",

        "Alguns aspectos facilitam o fluxo da energia, enquanto outros criam mais tensão ou exigem ajustes. Nenhum aspecto deve ser interpretado isoladamente ou simplesmente classificado como positivo ou negativo.",
      ],
    },

    interpretationTitle:
      "Como interpretar um aspecto no mapa natal?",

    interpretationSteps: [
      {
        number:
          "01",

        title:
          "Os planetas",

        text:
          "Eles indicam as funções envolvidas: pensar, sentir, amar, agir, crescer, estruturar ou transformar.",
      },

      {
        number:
          "02",

        title:
          "O tipo de aspecto",

        text:
          "O ângulo define a natureza da relação: fusão, cooperação, tensão, fluidez, ajuste ou polaridade.",
      },

      {
        number:
          "03",

        title:
          "Os signos",

        text:
          "Os signos descrevem como cada planeta expressa sua energia e reage ao outro.",
      },

      {
        number:
          "04",

        title:
          "As casas",

        text:
          "As casas mostram as áreas da vida nas quais o aspecto se manifesta de forma mais direta.",
      },
    ],

    aspectsSection: {
      kicker:
        "Os principais ângulos astrológicos",

      title:
        "Significado dos aspectos astrológicos",

      description:
        "Selecione um aspecto para descobrir seu significado detalhado, seu ângulo, sua dinâmica psicológica e exemplos de interpretação entre diferentes planetas.",
    },

    discoverLabel:
      "Descobrir",

    discoverAria:
      "Descobrir o significado astrológico de",

    aspects: [
      {
        name:
          "Conjunção",

        discoverName:
          "a conjunção",

        title:
          "Conjunção na astrologia",

        href:
          "/astrologie/conjonction",

        symbol:
          "☌",

        degree:
          "0°",

        category:
          "Fusão",

        keywords:
          "Intensidade • união • concentração",

        text:
          "A conjunção reúne dois planetas na mesma área do mapa natal. Suas funções se misturam, se reforçam e agem como uma única energia.",
      },

      {
        name:
          "Oposição",

        discoverName:
          "a oposição",

        title:
          "Oposição na astrologia",

        href:
          "/astrologie/opposition",

        symbol:
          "☍",

        degree:
          "180°",

        category:
          "Polaridade",

        keywords:
          "Equilíbrio • confronto • projeção",

        text:
          "A oposição coloca dois planetas frente a frente. Ela destaca duas necessidades complementares que precisam ser reconhecidas e equilibradas.",
      },

      {
        name:
          "Quadratura",

        discoverName:
          "a quadratura",

        title:
          "Quadratura na astrologia",

        href:
          "/astrologie/carre",

        symbol:
          "□",

        degree:
          "90°",

        category:
          "Tensão",

        keywords:
          "Desafio • ação • evolução",

        text:
          "A quadratura cria uma tensão dinâmica entre dois planetas. Ela pode produzir bloqueios, mas também se tornar uma poderosa força de ação e transformação.",
      },

      {
        name:
          "Trígono",

        discoverName:
          "o trígono",

        title:
          "Trígono na astrologia",

        href:
          "/astrologie/trigone",

        symbol:
          "△",

        degree:
          "120°",

        category:
          "Harmonia",

        keywords:
          "Fluidez • talento • facilidade",

        text:
          "O trígono geralmente conecta signos do mesmo elemento. Ele indica um fluxo natural de energia, talentos espontâneos e recursos fáceis de mobilizar.",
      },

      {
        name:
          "Sextil",

        discoverName:
          "o sextil",

        title:
          "Sextil na astrologia",

        href:
          "/astrologie/sextile",

        symbol:
          "⚹",

        degree:
          "60°",

        category:
          "Cooperação",

        keywords:
          "Possibilidade • troca • abertura",

        text:
          "O sextil favorece a cooperação entre dois planetas. Ele representa possibilidades construtivas que muitas vezes exigem iniciativa consciente para se desenvolver.",
      },

      {
        name:
          "Quincúncio",

        discoverName:
          "o quincúncio",

        title:
          "Quincúncio na astrologia",

        href:
          "/astrologie/quinconce",

        symbol:
          "⚻",

        degree:
          "150°",

        category:
          "Ajuste",

        keywords:
          "Adaptação • desalinhamento • reorganização",

        text:
          "O quincúncio conecta dois planetas que funcionam de maneiras muito diferentes. Ele exige ajustes regulares, flexibilidade e reorganização interior.",
      },
    ],

    groups: {
      kicker:
        "Duas grandes dinâmicas",

      title:
        "Aspectos harmônicos e aspectos dinâmicos",

      harmoniousTitle:
        "Os aspectos harmônicos",

      harmoniousParagraphs: [
        "O trígono e o sextil geralmente facilitam a cooperação entre os planetas. Eles podem representar talentos, recursos, oportunidades e qualidades que se expressam com maior naturalidade.",

        "No entanto, não garantem automaticamente o desenvolvimento de seu potencial. Uma facilidade pode permanecer pouco utilizada quando nunca é reconhecida ou cultivada.",
      ],

      dynamicTitle:
        "Os aspectos dinâmicos",

      dynamicParagraphs: [
        "A quadratura e a oposição destacam diferenças, contradições ou tensões entre os planetas envolvidos.",

        "Esses aspectos exigem mais consciência e esforço, mas podem se tornar importantes forças de decisão, evolução e superação.",
      ],
    },

    conjunction: {
      title:
        "A conjunção é harmônica ou difícil?",

      subtitle:
        "Uma fusão de energias",

      paragraphs: [
        "A conjunção não pertence a uma categoria estritamente harmônica ou dinâmica. Ela une as funções dos dois planetas e aumenta sua intensidade.",

        "Sua expressão depende muito dos planetas envolvidos. Uma conjunção entre Vênus e Júpiter pode favorecer entusiasmo e generosidade, enquanto uma conjunção entre Marte e Saturno pode criar uma combinação mais exigente entre ação e controle.",
      ],

      link:
        "Compreender a conjunção",
    },

    orb: {
      kicker:
        "A precisão do ângulo",

      title:
        "O que é orbe na astrologia?",

      introduction:
        "Um aspecto não precisa ser perfeitamente exato para ser interpretado. A diferença entre o ângulo teórico e o ângulo real é chamada de orbe.",

      cards: [
        {
          value:
            "0°",

          title:
            "Aspecto exato",

          text:
            "Os dois planetas formam exatamente o ângulo associado ao aspecto. Sua influência é geralmente considerada especialmente forte.",
        },

        {
          value:
            "1° a 3°",

          title:
            "Orbe fechado",

          text:
            "O aspecto permanece muito preciso. A relação entre os planetas pode ser facilmente percebida na personalidade ou na experiência.",
        },

        {
          value:
            "4° a 8°",

          title:
            "Orbe mais amplo",

          text:
            "O aspecto ainda pode ser considerado de acordo com os planetas, o tipo de aspecto e o método astrológico utilizado.",
        },
      ],

      conclusion:
        "Os astrólogos não utilizam todos os mesmos orbes. Os luminares frequentemente recebem orbes mais amplos, enquanto os aspectos menores são geralmente estudados com margens mais estreitas.",
    },

    movement: {
      title:
        "Aspectos aplicativos e separativos",

      cards: [
        {
          icon:
            "→",

          title:
            "Aspecto aplicativo",

          text:
            "O aspecto é aplicativo quando os planetas se aproximam do ângulo exato. Essa dinâmica pode simbolizar uma energia que está se construindo, aumentando de intensidade ou buscando realização.",
        },

        {
          icon:
            "←",

          title:
            "Aspecto separativo",

          text:
            "O aspecto é separativo quando os planetas já ultrapassaram o ângulo exato. Ele pode representar uma experiência já integrada, conhecida ou ainda em processo de assimilação.",
        },
      ],
    },

    importance: {
      title:
        "Por que os aspectos são essenciais no mapa natal?",

      paragraphs: [
        "Os signos indicam como os planetas se expressam e as casas mostram em quais áreas da vida eles atuam. Os aspectos acrescentam uma terceira dimensão: explicam como todas essas energias funcionam juntas.",

        "Uma pessoa pode ter uma Vênus muito voltada para os relacionamentos, mas uma quadratura de Saturno com Vênus pode acrescentar prudência, exigências ou medo de rejeição. Um trígono de Júpiter com Vênus pode, por outro lado, reforçar o otimismo, a sociabilidade ou a generosidade.",

        "Os aspectos permitem ir além de uma leitura isolada dos planetas. Eles revelam contradições, complementaridades, talentos naturais e mecanismos de evolução próprios de cada mapa natal.",
      ],
    },

    cta: {
      kicker:
        "Descubra seus aspectos",

      title:
        "Quais planetas estão conectados no seu mapa natal?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir suas posições planetárias, suas casas e os principais aspectos do nascimento.",

      button:
        "Descobrir meu mapa natal",
    },

    faqKicker:
      "Perguntas frequentes",

    faqTitle:
      "Perguntas sobre os aspectos astrológicos",

    faq: [
      {
        question:
          "O que é um aspecto astrológico?",

        answer:
          "Um aspecto astrológico é um ângulo formado entre dois planetas ou pontos importantes de um mapa natal. Esse ângulo descreve simbolicamente como suas funções interagem.",
      },

      {
        question:
          "Quais são os principais aspectos astrológicos?",

        answer:
          "Os aspectos mais estudados são a conjunção a 0 grau, o sextil a 60 graus, a quadratura a 90 graus, o trígono a 120 graus e a oposição a 180 graus. O quincúncio a 150 graus também é frequentemente interpretado.",
      },

      {
        question:
          "Qual é o aspecto astrológico mais poderoso?",

        answer:
          "A força de um aspecto depende de sua precisão, dos planetas envolvidos, de suas posições e do mapa natal como um todo. Uma conjunção exata costuma ser muito intensa, mas uma quadratura ou oposição também pode ser dominante.",
      },

      {
        question:
          "Os aspectos difíceis são negativos?",

        answer:
          "Não. Quadraturas e oposições podem criar tensões, mas também favorecem a ação, a consciência, a resiliência e o crescimento pessoal.",
      },

      {
        question:
          "O que significa o orbe de um aspecto?",

        answer:
          "O orbe representa a diferença aceita entre o ângulo exato de um aspecto e a posição real dos planetas. Quanto menor o orbe, mais preciso e perceptível o aspecto costuma ser considerado.",
      },

      {
        question:
          "Um mapa natal pode não conter aspectos?",

        answer:
          "Um mapa natal quase sempre contém vários aspectos. Alguns planetas podem, no entanto, ter poucas conexões ou não formar nenhum aspecto maior muito preciso.",
      },

      {
        question:
          "Como posso conhecer os aspectos do meu mapa natal?",

        answer:
          "Gere um mapa natal usando sua data, hora e local de nascimento. As linhas desenhadas no centro da roda normalmente representam os principais aspectos.",
      },
    ],

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
