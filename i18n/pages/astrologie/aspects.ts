// i18n/pages/astrologie/aspects.ts

import type {
  Locale,
} from "@/i18n/config";

type AspectItem = {
  name: string;
  title: string;
  slug: string;
  symbol: string;
  degree: string;
  category: string;
  keywords: string;
  text: string;
};

type ReadingStep = {
  number: string;
  title: string;
  text: string;
};

type OrbCard = {
  value: string;
  title: string;
  text: string;
};

type MovementCard = {
  icon: string;
  title: string;
  text: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type AspectsText = {
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

const fr: AspectsText = {
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

      title:
        "Conjonction en astrologie",

      slug:
        "conjonction",

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

      title:
        "Opposition en astrologie",

      slug:
        "opposition",

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

      title:
        "Carré en astrologie",

      slug:
        "carre",

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

      title:
        "Trigone en astrologie",

      slug:
        "trigone",

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

      title:
        "Sextile en astrologie",

      slug:
        "sextile",

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

      title:
        "Quinconce en astrologie",

      slug:
        "quinconce",

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
};

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
|
| Ne copie pas temporairement le français dans les autres langues.
| Chaque langue doit recevoir sa traduction complète avant publication.
|
*/

export const ASPECTS_TRANSLATIONS:
  Record<Locale, AspectsText> = {
    fr,

    /*
     * Remplace ces cinq lignes par les objets complets
     * en, es, de, it et pt au fur et à mesure.
     */

    en: fr,
    es: fr,
    de: fr,
    it: fr,
    pt: fr,
  };
