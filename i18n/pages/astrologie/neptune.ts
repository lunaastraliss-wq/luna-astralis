// i18n/pages/astrologie/neptune.ts

import type {
  Locale,
} from "@/i18n/config";

export type NeptuneCard = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
};

export type NeptuneFunction = {
  number: string;
  title: string;
  text: string;
};

export type NeptuneSign = {
  sign: string;
  symbol: string;
  text: string;
};

export type NeptuneHouse = {
  house: string;
  text: string;
};

export type NeptuneAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type NeptuneFaqItem = {
  question: string;
  answer: string;
};

export type NeptunePageText = {
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

  intuition: {
    title: string;
    cards: NeptuneCard[];
  };

  functions: {
    title: string;
    cards: NeptuneFunction[];
  };

  planets: {
    title: string;
    cards: NeptuneCard[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  signs: NeptuneSign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  houses: NeptuneHouse[];

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

  aspects: NeptuneAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: NeptuneFaqItem[];
  };

  disclaimer: string;
};

export const NEPTUNE_TRANSLATIONS:
  Record<
    Locale,
    NeptunePageText
  > = {
  fr: {
    metadata: {
      title:
        "Neptune en astrologie : intuition, imagination et idéal | Luna Astralis",

      description:
        "Découvrez la signification de Neptune en astrologie, son influence sur l’intuition, l’imagination, la compassion, les idéaux et son expression dans les 12 signes du zodiaque.",

      ogTitle:
        "Neptune en astrologie : intuition, imagination et sensibilité",

      ogDescription:
        "Comprenez le rôle de Neptune dans votre thème natal et découvrez comment cette planète symbolise l’intuition, les rêves, la compassion, les idéaux et les perceptions subtiles.",

      twitterTitle:
        "Neptune en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Neptune symbolise l’intuition, l’imagination, les rêves, les idéaux et la sensibilité.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Neptune en astrologie : intuition, imagination et idéal",

      description:
        "Guide complet consacré au rôle de Neptune dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "♆ Planètes et thème natal",

      title:
        "Neptune en astrologie",

      lead:
        "Neptune représente votre imagination, votre intuition, vos idéaux, votre sensibilité et votre manière de percevoir ce qui dépasse les apparences.",

      createChart:
        "Créer ma carte du ciel gratuite",

      seeSigns:
        "Voir les 12 signes",
    },

    introduction: {
      kicker:
        "Comprendre votre monde imaginaire",

      title:
        "Que représente Neptune dans un thème astral ?",

      paragraphs: [
        "En astrologie, Neptune symbolise l’imagination, l’intuition, les rêves, la compassion et les idéaux. Il représente les dimensions de l’expérience qui ne se laissent pas toujours saisir par la logique ou les faits immédiats.",

        "Sa position dans votre carte du ciel peut révéler les domaines dans lesquels vous êtes particulièrement sensible, inspiré ou réceptif aux émotions et aux ambiances.",

        "Neptune peut favoriser la créativité, l’empathie et la perception symbolique. Il invite cependant à maintenir des limites claires afin de distinguer l’intuition, les projections et les attentes idéalisées.",
      ],
    },

    intuition: {
      title:
        "Neptune, l’intuition et l’imagination",

      cards: [
        {
          symbol:
            "♆",

          title:
            "Votre intuition",

          text:
            "Neptune décrit votre réceptivité aux ambiances, aux émotions et aux perceptions qui ne passent pas toujours par la logique.",
        },

        {
          symbol:
            "✦",

          title:
            "Votre imagination",

          text:
            "Il révèle votre capacité à créer des images, des histoires, des symboles et des visions inspirantes.",
        },

        {
          symbol:
            "♡",

          title:
            "Votre compassion",

          text:
            "Neptune montre comment vous percevez la vulnérabilité, la souffrance et le besoin de créer davantage de douceur.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions de Neptune",

      cards: [
        {
          number:
            "01",

          title:
            "Inspirer",

          text:
            "Neptune nourrit la créativité, les rêves et les visions capables de donner un sens plus profond aux expériences.",
        },

        {
          number:
            "02",

          title:
            "Ressentir",

          text:
            "Il accentue la sensibilité aux émotions, aux atmosphères et aux mouvements subtils de l’environnement.",
        },

        {
          number:
            "03",

          title:
            "Relier",

          text:
            "Neptune invite à percevoir ce qui unit les êtres, les expériences et les symboles au-delà des différences visibles.",
        },

        {
          number:
            "04",

          title:
            "Idéaliser",

          text:
            "Il représente la capacité à imaginer un idéal, mais aussi le risque de projeter sur une situation ce que l’on souhaite y voir.",
        },
      ],
    },

    planets: {
      title:
        "Neptune, Uranus et Pluton",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Uranus",

          text:
            "Il représente la liberté, l’innovation, l’éveil et les changements qui renouvellent les structures.",

          link:
            "Découvrir Uranus",
        },

        {
          symbol:
            "♆",

          title:
            "Neptune",

          text:
            "Il symbolise l’intuition, l’imagination, les idéaux, la compassion et les perceptions subtiles.",
        },

        {
          symbol:
            "♇",

          title:
            "Pluton",

          text:
            "Il représente les transformations profondes, le pouvoir intérieur et les cycles de régénération.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions de Neptune",

      title:
        "Neptune dans les 12 signes astrologiques",

      introduction:
        "Neptune conserve toujours sa fonction d’intuition, d’imagination et d’idéal. Le signe dans lequel il se trouve décrit la manière dont une génération exprime ses rêves, sa sensibilité et ses aspirations collectives.",

      titlePrefix:
        "Neptune en",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Neptune en Bélier associe l’imagination à l’action, à l’initiative et au désir d’ouvrir de nouvelles voies. Cette position générationnelle peut inspirer des idéaux audacieux, tout en demandant de distinguer l’intuition de l’impulsivité.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Neptune en Taureau relie les idéaux à la matière, aux valeurs et à la sécurité. Cette position peut inspirer une sensibilité particulière à la nature, à l’art et aux plaisirs, tout en invitant à préserver un rapport réaliste aux ressources.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Neptune en Gémeaux nourrit une pensée imaginative, intuitive et symbolique. Cette position peut favoriser la poésie, les récits et les idées inspirées, mais demande de vérifier les informations et de clarifier les messages.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Neptune en Cancer intensifie la sensibilité aux émotions, à la famille et au sentiment d’appartenance. Cette position peut développer une grande compassion, tout en invitant à différencier ses propres émotions de celles des autres.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Neptune en Lion favorise une créativité inspirée, théâtrale et généreuse. Cette position peut nourrir de grands idéaux artistiques ou romantiques, tout en demandant de préserver une vision réaliste de la reconnaissance.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Neptune en Vierge cherche à donner une forme concrète à la compassion, à l’intuition et au service. Cette position peut inspirer une grande sensibilité aux besoins des autres, mais demande des méthodes claires et des limites pratiques.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Neptune en Balance idéalise les relations, l’harmonie et la coopération. Cette position peut favoriser une grande sensibilité à la beauté et à la justice, tout en invitant à éviter les projections affectives.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Neptune en Scorpion approfondit l’intuition, la perception psychologique et le besoin de transformation. Cette position peut être attirée par les mystères et les vérités cachées, tout en demandant de préserver des limites émotionnelles solides.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Neptune en Sagittaire associe l’idéal à la quête de sens, aux croyances et à l’exploration. Cette position peut inspirer une grande ouverture spirituelle ou philosophique, tout en demandant de questionner les certitudes absolues.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Neptune en Capricorne cherche à donner une structure aux rêves, aux idéaux et aux ambitions collectives. Cette position peut inspirer de nouvelles visions de la réussite, tout en révélant les illusions liées au pouvoir ou au statut.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Neptune en Verseau nourrit les idéaux collectifs, les visions d’avenir et le désir de contribuer à une société plus inclusive. Cette position peut inspirer des projets humanistes, tout en demandant de rester attentif aux utopies irréalistes.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Neptune en Poissons renforce l’intuition, l’imagination, la compassion et la réceptivité symbolique. Cette position peut favoriser une grande créativité, tout en exigeant des limites claires pour éviter la confusion ou l’idéalisation.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines de votre inspiration",

      title:
        "Neptune dans les 12 maisons astrologiques",

      introduction:
        "Le signe de Neptune décrit une sensibilité collective, tandis que sa maison indique le domaine de vie dans lequel votre intuition, vos idéaux, votre imagination et vos projections s’expriment le plus personnellement.",

      titlePrefix:
        "Neptune en",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Neptune en Maison I peut donner une présence sensible, intuitive et difficile à définir. La personne peut absorber facilement les ambiances et doit apprendre à construire une identité claire sans perdre sa réceptivité.",
      },

      {
        house:
          "Maison II",

        text:
          "Neptune en Maison II relie les valeurs, les ressources et l’estime de soi à l’intuition ou à l’idéal. La personne doit veiller à maintenir une gestion concrète et transparente de ses finances.",
      },

      {
        house:
          "Maison III",

        text:
          "Neptune en Maison III favorise une pensée imagée, intuitive et créative. La personne peut communiquer avec poésie et sensibilité, mais doit vérifier les faits et éviter les messages trop ambigus.",
      },

      {
        house:
          "Maison IV",

        text:
          "Neptune en Maison IV intensifie la sensibilité au foyer, aux racines et aux souvenirs. La personne peut idéaliser la famille ou rechercher un refuge intérieur très inspirant.",
      },

      {
        house:
          "Maison V",

        text:
          "Neptune en Maison V favorise l’imagination, le romantisme et la créativité artistique. La personne peut vivre ses passions avec intensité, tout en devant éviter d’idéaliser excessivement les relations.",
      },

      {
        house:
          "Maison VI",

        text:
          "Neptune en Maison VI invite à apporter de la compassion, de l’intuition et du sens au quotidien. La personne peut avoir besoin d’un travail inspirant, mais doit préserver des habitudes et des limites claires.",
      },

      {
        house:
          "Maison VII",

        text:
          "Neptune en Maison VII peut favoriser des relations sensibles, inspirantes et profondément empathiques. La personne doit toutefois distinguer l’amour réel des projections, des attentes ou du désir de sauver l’autre.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Neptune en Maison VIII intensifie la perception intuitive de l’intimité, des transformations et des liens invisibles. La personne doit protéger ses limites émotionnelles et clarifier les ressources partagées.",
      },

      {
        house:
          "Maison IX",

        text:
          "Neptune en Maison IX nourrit une quête spirituelle, philosophique ou artistique. Les voyages, les études et les croyances peuvent devenir des sources d’inspiration profonde.",
      },

      {
        house:
          "Maison X",

        text:
          "Neptune en Maison X peut orienter la vocation vers l’art, l’aide, l’imaginaire ou les domaines fondés sur l’inspiration. La personne doit clarifier ses objectifs professionnels et éviter les attentes trop floues.",
      },

      {
        house:
          "Maison XI",

        text:
          "Neptune en Maison XI favorise les idéaux collectifs, la compassion et les projets humanistes. La personne peut rêver d’un monde meilleur, tout en devant choisir ses groupes et ses alliances avec discernement.",
      },

      {
        house:
          "Maison XII",

        text:
          "Neptune en Maison XII renforce l’intuition, les rêves, l’imagination et la vie intérieure. La solitude, la création et l’introspection peuvent devenir des ressources importantes lorsqu’elles sont soutenues par des repères concrets.",
      },
    ],

    retrograde: {
      kicker:
        "Révision des idéaux",

      title:
        "Que signifie Neptune rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Neptune semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un mouvement apparent lié aux positions relatives de la Terre et de Neptune.",

        "Dans l’interprétation astrologique, Neptune rétrograde est souvent associé à une imagination et à une intuition plus intérieures. La personne peut remettre en question les idéaux collectifs et chercher une vérité plus personnelle.",

        "Cette période peut inviter à reconnaître les illusions, à clarifier les attentes et à distinguer les perceptions intuitives des projections émotionnelles.",
      ],

      cardSymbol:
        "♆℞",

      cardTitle:
        "Une invitation à clarifier",

      items: [
        "Revoir ses idéaux",
        "Observer ses projections",
        "Clarifier ses limites",
        "Approfondir son intuition",
        "Donner une forme concrète à ses rêves",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis de Neptune",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Une grande sensibilité intérieure",

      strengths: [
        "Imagination",
        "Intuition",
        "Compassion",
        "Créativité",
        "Perception symbolique",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Préserver des repères clairs",

      challenges: [
        "Idéalisation",
        "Confusion",
        "Limites floues",
        "Tendance à fuir la réalité",
        "Difficulté à vérifier ses perceptions",
      ],
    },

    aspectsSection: {
      title:
        "Les aspects astrologiques de Neptune",

      introduction:
        "Les aspects relient Neptune aux autres planètes du thème natal. Ils apportent des nuances à votre imagination, à votre intuition, à vos idéaux et à votre manière de percevoir les émotions.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Neptune avec une autre planète et rend son expression plus intuitive, imaginative ou difficile à définir.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une circulation naturelle entre l’intuition de Neptune et les qualités de l’autre planète.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel d’inspiration, de créativité, de compassion et d’ouverture symbolique.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut créer une tension entre les attentes, les perceptions et la réalité, invitant à développer plus de clarté.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à équilibrer les idéaux personnels avec les faits, les limites et les attentes provenant de l’extérieur.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Neptune ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Neptune, votre Uranus, votre Saturne, votre Jupiter et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Neptune en astrologie",

      items: [
        {
          question:
            "Que représente Neptune en astrologie ?",

          answer:
            "Neptune représente symboliquement l’intuition, l’imagination, les rêves, la compassion, les idéaux, la sensibilité et les perceptions qui dépassent le raisonnement strictement rationnel.",
        },

        {
          question:
            "Pourquoi Neptune est-il associé aux illusions ?",

          answer:
            "Neptune symbolise les frontières floues, les projections et l’idéalisation. Son influence astrologique invite à développer l’intuition tout en vérifiant les faits et en maintenant des limites claires.",
        },

        {
          question:
            "Que signifie le signe de Neptune ?",

          answer:
            "Le signe de Neptune décrit la manière dont une génération exprime ses rêves, ses idéaux, son imagination et sa vision du collectif.",
        },

        {
          question:
            "Que signifie Neptune rétrograde dans un thème natal ?",

          answer:
            "Neptune rétrograde à la naissance peut symboliser une vie imaginative et intuitive plus intérieure, ainsi qu’un besoin personnel de clarifier ses idéaux, ses rêves et ses perceptions.",
        },

        {
          question:
            "Neptune rétrograde est-il négatif ?",

          answer:
            "Non. Cette période est plutôt interprétée comme une invitation à revoir ses idéaux, à reconnaître les illusions éventuelles et à approfondir son rapport à l’intuition.",
        },

        {
          question:
            "Comment connaître mon signe de Neptune ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance pour connaître la position exacte de Neptune.",
        },

        {
          question:
            "Quelle différence entre Uranus et Neptune ?",

          answer:
            "Uranus symbolise la liberté, l’innovation et les changements rapides, tandis que Neptune représente l’intuition, l’imagination, les idéaux et la dissolution des frontières.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Neptune in Astrology: Intuition, Imagination and Ideals | Luna Astralis",

      description:
        "Discover the meaning of Neptune in astrology, its influence on intuition, imagination, compassion, ideals and its expression through the 12 zodiac signs.",

      ogTitle:
        "Neptune in Astrology: Intuition, Imagination and Sensitivity",

      ogDescription:
        "Understand Neptune’s role in your birth chart and discover how this planet symbolizes intuition, dreams, compassion, ideals and subtle perceptions.",

      twitterTitle:
        "Neptune in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Neptune symbolizes intuition, imagination, dreams, ideals and sensitivity.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Neptune in Astrology: Intuition, Imagination and Ideals",

      description:
        "A complete guide to Neptune’s role in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "♆ Planets and birth chart",

      title:
        "Neptune in Astrology",

      lead:
        "Neptune represents your imagination, intuition, ideals, sensitivity and way of perceiving what lies beyond appearances.",

      createChart:
        "Create my free birth chart",

      seeSigns:
        "See the 12 signs",
    },

    introduction: {
      kicker:
        "Understand your inner imaginative world",

      title:
        "What does Neptune represent in a birth chart?",

      paragraphs: [
        "In astrology, Neptune symbolizes imagination, intuition, dreams, compassion and ideals. It represents dimensions of experience that cannot always be understood through logic or immediate facts.",

        "Its position in your birth chart may reveal the areas in which you are especially sensitive, inspired or receptive to emotions and atmospheres.",

        "Neptune may encourage creativity, empathy and symbolic perception. It also invites you to maintain clear boundaries in order to distinguish intuition, projections and idealized expectations.",
      ],
    },

    intuition: {
      title:
        "Neptune, intuition and imagination",

      cards: [
        {
          symbol:
            "♆",

          title:
            "Your intuition",

          text:
            "Neptune describes your receptivity to atmospheres, emotions and perceptions that do not always pass through logic.",
        },

        {
          symbol:
            "✦",

          title:
            "Your imagination",

          text:
            "It reveals your ability to create images, stories, symbols and inspiring visions.",
        },

        {
          symbol:
            "♡",

          title:
            "Your compassion",

          text:
            "Neptune shows how you perceive vulnerability, suffering and the need to create greater gentleness.",
        },
      ],
    },

    functions: {
      title:
        "Neptune’s main functions",

      cards: [
        {
          number:
            "01",

          title:
            "Inspire",

          text:
            "Neptune nourishes creativity, dreams and visions capable of giving deeper meaning to experiences.",
        },

        {
          number:
            "02",

          title:
            "Feel",

          text:
            "It increases sensitivity to emotions, atmospheres and subtle movements in the environment.",
        },

        {
          number:
            "03",

          title:
            "Connect",

          text:
            "Neptune invites you to perceive what unites people, experiences and symbols beyond visible differences.",
        },

        {
          number:
            "04",

          title:
            "Idealize",

          text:
            "It represents the ability to imagine an ideal, but also the risk of projecting onto a situation what you wish to see.",
        },
      ],
    },

    planets: {
      title:
        "Neptune, Uranus and Pluto",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Uranus",

          text:
            "It represents freedom, innovation, awakening and changes that renew existing structures.",

          link:
            "Discover Uranus",
        },

        {
          symbol:
            "♆",

          title:
            "Neptune",

          text:
            "It symbolizes intuition, imagination, ideals, compassion and subtle perceptions.",
        },

        {
          symbol:
            "♇",

          title:
            "Pluto",

          text:
            "It represents profound transformations, inner power and cycles of regeneration.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Neptune",

      title:
        "Neptune in the 12 zodiac signs",

      introduction:
        "Neptune always retains its function of intuition, imagination and ideals. The sign it occupies describes how a generation expresses its dreams, sensitivity and collective aspirations.",

      titlePrefix:
        "Neptune in",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Neptune in Aries connects imagination with action, initiative and the desire to open new paths. This generational position may inspire bold ideals while requiring a distinction between intuition and impulsiveness.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Neptune in Taurus connects ideals with matter, values and security. This position may inspire particular sensitivity to nature, art and pleasure while encouraging a realistic relationship with resources.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Neptune in Gemini encourages imaginative, intuitive and symbolic thinking. This position may support poetry, storytelling and inspired ideas, but requires information to be verified and messages clarified.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Neptune in Cancer intensifies sensitivity to emotions, family and belonging. This position may develop great compassion while requiring the person to distinguish personal emotions from those of others.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Neptune in Leo encourages inspired, theatrical and generous creativity. This position may nourish strong artistic or romantic ideals while requiring a realistic view of recognition.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Neptune in Virgo seeks to give practical form to compassion, intuition and service. This position may inspire sensitivity to the needs of others, but requires clear methods and practical boundaries.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Neptune in Libra idealizes relationships, harmony and cooperation. This position may encourage sensitivity to beauty and justice while inviting the person to avoid emotional projection.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Neptune in Scorpio deepens intuition, psychological perception and the need for transformation. This position may be attracted to mysteries and hidden truths while requiring strong emotional boundaries.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Neptune in Sagittarius connects ideals with the search for meaning, beliefs and exploration. This position may inspire spiritual or philosophical openness while requiring absolute certainties to be questioned.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Neptune in Capricorn seeks to give structure to dreams, ideals and collective ambitions. This position may inspire new visions of success while revealing illusions connected with power or status.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Neptune in Aquarius nourishes collective ideals, visions of the future and the desire to contribute to a more inclusive society. This position may inspire humanitarian projects while requiring awareness of unrealistic utopias.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Neptune in Pisces strengthens intuition, imagination, compassion and symbolic receptivity. This position may encourage great creativity while requiring clear boundaries to avoid confusion or idealization.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of your inspiration",

      title:
        "Neptune in the 12 astrological houses",

      introduction:
        "Neptune’s sign describes collective sensitivity, while its house indicates the area of life in which your intuition, ideals, imagination and projections are expressed most personally.",

      titlePrefix:
        "Neptune in",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Neptune in House I may give a sensitive, intuitive presence that is difficult to define. The person may easily absorb atmospheres and must learn to build a clear identity without losing receptivity.",
      },

      {
        house:
          "House II",

        text:
          "Neptune in House II connects values, resources and self-esteem with intuition or ideals. The person must maintain practical and transparent financial management.",
      },

      {
        house:
          "House III",

        text:
          "Neptune in House III encourages imaginative, intuitive and creative thinking. The person may communicate with poetry and sensitivity but should verify facts and avoid overly ambiguous messages.",
      },

      {
        house:
          "House IV",

        text:
          "Neptune in House IV intensifies sensitivity to home, roots and memories. The person may idealize family or seek a deeply inspiring inner refuge.",
      },

      {
        house:
          "House V",

        text:
          "Neptune in House V encourages imagination, romance and artistic creativity. The person may experience passions intensely while needing to avoid excessively idealizing relationships.",
      },

      {
        house:
          "House VI",

        text:
          "Neptune in House VI invites compassion, intuition and meaning into everyday life. The person may need inspiring work but should preserve clear habits and boundaries.",
      },

      {
        house:
          "House VII",

        text:
          "Neptune in House VII may encourage sensitive, inspiring and deeply empathetic relationships. The person must distinguish real love from projections, expectations or the desire to save another person.",
      },

      {
        house:
          "House VIII",

        text:
          "Neptune in House VIII intensifies intuitive perception of intimacy, transformation and invisible bonds. The person must protect emotional boundaries and clarify shared resources.",
      },

      {
        house:
          "House IX",

        text:
          "Neptune in House IX nourishes a spiritual, philosophical or artistic search. Travel, study and beliefs may become sources of deep inspiration.",
      },

      {
        house:
          "House X",

        text:
          "Neptune in House X may direct vocation toward art, helping professions, imagination or fields based on inspiration. The person must clarify professional goals and avoid expectations that are too vague.",
      },

      {
        house:
          "House XI",

        text:
          "Neptune in House XI encourages collective ideals, compassion and humanitarian projects. The person may dream of a better world while needing to choose groups and alliances carefully.",
      },

      {
        house:
          "House XII",

        text:
          "Neptune in House XII strengthens intuition, dreams, imagination and inner life. Solitude, creativity and introspection may become important resources when supported by practical reference points.",
      },
    ],

    retrograde: {
      kicker:
        "Reviewing ideals",

      title:
        "What does retrograde Neptune mean?",

      paragraphs: [
        "From Earth, Neptune sometimes appears to slow down and temporarily move backward in the sky. This is an apparent movement caused by the relative positions of Earth and Neptune.",

        "In astrological interpretation, retrograde Neptune is often associated with more inward imagination and intuition. A person may question collective ideals and seek a more personal truth.",

        "This period may invite the recognition of illusions, the clarification of expectations and the distinction between intuitive perceptions and emotional projections.",
      ],

      cardSymbol:
        "♆℞",

      cardTitle:
        "An invitation to clarify",

      items: [
        "Review personal ideals",
        "Observe personal projections",
        "Clarify boundaries",
        "Deepen intuition",
        "Give practical form to dreams",
      ],
    },

    strengths: {
      title:
        "Neptune’s strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "Great inner sensitivity",

      strengths: [
        "Imagination",
        "Intuition",
        "Compassion",
        "Creativity",
        "Symbolic perception",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Maintain clear reference points",

      challenges: [
        "Idealization",
        "Confusion",
        "Unclear boundaries",
        "Tendency to escape reality",
        "Difficulty verifying perceptions",
      ],
    },

    aspectsSection: {
      title:
        "Neptune’s astrological aspects",

      introduction:
        "Aspects connect Neptune with the other planets in the birth chart. They add nuance to your imagination, intuition, ideals and way of perceiving emotions.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Neptune with another planet and makes their expression more intuitive, imaginative or difficult to define.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a natural flow between Neptune’s intuition and the qualities of the other planet.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for inspiration, creativity, compassion and symbolic openness.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may create tension between expectations, perceptions and reality, inviting greater clarity.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It invites a balance between personal ideals and facts, boundaries and expectations coming from outside.",
      },
    ],

    cta: {
      kicker:
        "Discover your position",

      title:
        "Which sign and house contain your Neptune?",

      text:
        "Generate your free birth chart to discover your Neptune, Uranus, Saturn, Jupiter and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Neptune in astrology",

      items: [
        {
          question:
            "What does Neptune represent in astrology?",

          answer:
            "Neptune symbolically represents intuition, imagination, dreams, compassion, ideals, sensitivity and perceptions that extend beyond strictly rational reasoning.",
        },

        {
          question:
            "Why is Neptune associated with illusions?",

          answer:
            "Neptune symbolizes blurred boundaries, projection and idealization. Its astrological influence encourages intuition while also requiring facts to be verified and clear boundaries maintained.",
        },

        {
          question:
            "What does Neptune’s sign mean?",

          answer:
            "Neptune’s sign describes how a generation expresses its dreams, ideals, imagination and collective vision.",
        },

        {
          question:
            "What does retrograde Neptune mean in a birth chart?",

          answer:
            "Natal retrograde Neptune may symbolize a more inward imaginative and intuitive life, as well as a personal need to clarify ideals, dreams and perceptions.",
        },

        {
          question:
            "Is retrograde Neptune negative?",

          answer:
            "No. This period is generally interpreted as an invitation to review ideals, recognize possible illusions and deepen your relationship with intuition.",
        },

        {
          question:
            "How can I find my Neptune sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine Neptune’s exact position.",
        },

        {
          question:
            "What is the difference between Uranus and Neptune?",

          answer:
            "Uranus symbolizes freedom, innovation and rapid change, while Neptune represents intuition, imagination, ideals and the dissolution of boundaries.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Neptuno en astrología: intuición, imaginación e ideal | Luna Astralis",

      description:
        "Descubre el significado de Neptuno en astrología, su influencia sobre la intuición, la imaginación, la compasión, los ideales y su expresión en los 12 signos del zodiaco.",

      ogTitle:
        "Neptuno en astrología: intuición, imaginación y sensibilidad",

      ogDescription:
        "Comprende el papel de Neptuno en tu carta natal y descubre cómo este planeta simboliza la intuición, los sueños, la compasión, los ideales y las percepciones sutiles.",

      twitterTitle:
        "Neptuno en astrología | Luna Astralis",

      twitterDescription:
        "Descubre cómo Neptuno simboliza la intuición, la imaginación, los sueños, los ideales y la sensibilidad.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Neptuno en astrología: intuición, imaginación e ideal",

      description:
        "Guía completa sobre el papel de Neptuno en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "♆ Planetas y carta natal",

      title:
        "Neptuno en astrología",

      lead:
        "Neptuno representa tu imaginación, tu intuición, tus ideales, tu sensibilidad y tu manera de percibir aquello que supera las apariencias.",

      createChart:
        "Crear mi carta natal gratis",

      seeSigns:
        "Ver los 12 signos",
    },

    introduction: {
      kicker:
        "Comprender tu mundo imaginario",

      title:
        "¿Qué representa Neptuno en una carta natal?",

      paragraphs: [
        "En astrología, Neptuno simboliza la imaginación, la intuición, los sueños, la compasión y los ideales. Representa las dimensiones de la experiencia que no siempre pueden comprenderse mediante la lógica o los hechos inmediatos.",

        "Su posición en tu carta natal puede revelar los ámbitos en los que eres especialmente sensible, inspirado o receptivo a las emociones y a los ambientes.",

        "Neptuno puede favorecer la creatividad, la empatía y la percepción simbólica. Sin embargo, invita a mantener límites claros para distinguir la intuición, las proyecciones y las expectativas idealizadas.",
      ],
    },

    intuition: {
      title:
        "Neptuno, la intuición y la imaginación",

      cards: [
        {
          symbol:
            "♆",

          title:
            "Tu intuición",

          text:
            "Neptuno describe tu receptividad a los ambientes, las emociones y las percepciones que no siempre pasan por la lógica.",
        },

        {
          symbol:
            "✦",

          title:
            "Tu imaginación",

          text:
            "Revela tu capacidad para crear imágenes, historias, símbolos y visiones inspiradoras.",
        },

        {
          symbol:
            "♡",

          title:
            "Tu compasión",

          text:
            "Neptuno muestra cómo percibes la vulnerabilidad, el sufrimiento y la necesidad de crear mayor dulzura.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Neptuno",

      cards: [
        {
          number:
            "01",

          title:
            "Inspirar",

          text:
            "Neptuno alimenta la creatividad, los sueños y las visiones capaces de dar un sentido más profundo a las experiencias.",
        },

        {
          number:
            "02",

          title:
            "Sentir",

          text:
            "Acentúa la sensibilidad a las emociones, las atmósferas y los movimientos sutiles del entorno.",
        },

        {
          number:
            "03",

          title:
            "Relacionar",

          text:
            "Neptuno invita a percibir aquello que une a las personas, las experiencias y los símbolos más allá de las diferencias visibles.",
        },

        {
          number:
            "04",

          title:
            "Idealizar",

          text:
            "Representa la capacidad de imaginar un ideal, pero también el riesgo de proyectar sobre una situación aquello que se desea ver.",
        },
      ],
    },

    planets: {
      title:
        "Neptuno, Urano y Plutón",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Urano",

          text:
            "Representa la libertad, la innovación, el despertar y los cambios que renuevan las estructuras.",

          link:
            "Descubrir Urano",
        },

        {
          symbol:
            "♆",

          title:
            "Neptuno",

          text:
            "Simboliza la intuición, la imaginación, los ideales, la compasión y las percepciones sutiles.",
        },

        {
          symbol:
            "♇",

          title:
            "Plutón",

          text:
            "Representa las transformaciones profundas, el poder interior y los ciclos de regeneración.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Neptuno",

      title:
        "Neptuno en los 12 signos astrológicos",

      introduction:
        "Neptuno siempre conserva su función de intuición, imaginación e ideal. El signo en el que se encuentra describe la manera en que una generación expresa sus sueños, su sensibilidad y sus aspiraciones colectivas.",

      titlePrefix:
        "Neptuno en",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Neptuno en Aries relaciona la imaginación con la acción, la iniciativa y el deseo de abrir nuevos caminos. Esta posición generacional puede inspirar ideales audaces, pero exige distinguir la intuición de la impulsividad.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Neptuno en Tauro relaciona los ideales con la materia, los valores y la seguridad. Esta posición puede inspirar una sensibilidad especial hacia la naturaleza, el arte y los placeres, pero invita a mantener una relación realista con los recursos.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Neptuno en Géminis alimenta un pensamiento imaginativo, intuitivo y simbólico. Esta posición puede favorecer la poesía, los relatos y las ideas inspiradas, pero exige verificar la información y aclarar los mensajes.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Neptuno en Cáncer intensifica la sensibilidad hacia las emociones, la familia y el sentimiento de pertenencia. Esta posición puede desarrollar una gran compasión, pero invita a diferenciar las emociones propias de las ajenas.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Neptuno en Leo favorece una creatividad inspirada, teatral y generosa. Esta posición puede alimentar grandes ideales artísticos o románticos, pero exige conservar una visión realista del reconocimiento.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Neptuno en Virgo busca dar una forma concreta a la compasión, la intuición y el servicio. Esta posición puede inspirar una gran sensibilidad hacia las necesidades de los demás, pero requiere métodos claros y límites prácticos.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Neptuno en Libra idealiza las relaciones, la armonía y la cooperación. Esta posición puede favorecer una gran sensibilidad hacia la belleza y la justicia, pero invita a evitar las proyecciones afectivas.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Neptuno en Escorpio profundiza la intuición, la percepción psicológica y la necesidad de transformación. Esta posición puede sentirse atraída por los misterios y las verdades ocultas, pero exige mantener límites emocionales sólidos.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Neptuno en Sagitario relaciona el ideal con la búsqueda de sentido, las creencias y la exploración. Esta posición puede inspirar una gran apertura espiritual o filosófica, pero exige cuestionar las certezas absolutas.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Neptuno en Capricornio busca dar estructura a los sueños, los ideales y las ambiciones colectivas. Esta posición puede inspirar nuevas visiones del éxito, pero también revelar ilusiones relacionadas con el poder o el estatus.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Neptuno en Acuario alimenta los ideales colectivos, las visiones de futuro y el deseo de contribuir a una sociedad más inclusiva. Esta posición puede inspirar proyectos humanistas, pero exige permanecer atento a las utopías poco realistas.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Neptuno en Piscis refuerza la intuición, la imaginación, la compasión y la receptividad simbólica. Esta posición puede favorecer una gran creatividad, pero exige límites claros para evitar la confusión o la idealización.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos de tu inspiración",

      title:
        "Neptuno en las 12 casas astrológicas",

      introduction:
        "El signo de Neptuno describe una sensibilidad colectiva, mientras que su casa indica el ámbito de vida en el que tu intuición, tus ideales, tu imaginación y tus proyecciones se expresan de manera más personal.",

      titlePrefix:
        "Neptuno en",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Neptuno en la Casa I puede aportar una presencia sensible, intuitiva y difícil de definir. La persona puede absorber fácilmente los ambientes y debe aprender a construir una identidad clara sin perder su receptividad.",
      },

      {
        house:
          "Casa II",

        text:
          "Neptuno en la Casa II relaciona los valores, los recursos y la autoestima con la intuición o el ideal. La persona debe procurar mantener una gestión concreta y transparente de sus finanzas.",
      },

      {
        house:
          "Casa III",

        text:
          "Neptuno en la Casa III favorece un pensamiento imaginativo, intuitivo y creativo. La persona puede comunicarse con poesía y sensibilidad, pero debe verificar los hechos y evitar mensajes demasiado ambiguos.",
      },

      {
        house:
          "Casa IV",

        text:
          "Neptuno en la Casa IV intensifica la sensibilidad hacia el hogar, las raíces y los recuerdos. La persona puede idealizar a la familia o buscar un refugio interior muy inspirador.",
      },

      {
        house:
          "Casa V",

        text:
          "Neptuno en la Casa V favorece la imaginación, el romanticismo y la creatividad artística. La persona puede vivir sus pasiones con intensidad, pero debe evitar idealizar excesivamente las relaciones.",
      },

      {
        house:
          "Casa VI",

        text:
          "Neptuno en la Casa VI invita a aportar compasión, intuición y sentido a la vida cotidiana. La persona puede necesitar un trabajo inspirador, pero debe mantener hábitos y límites claros.",
      },

      {
        house:
          "Casa VII",

        text:
          "Neptuno en la Casa VII puede favorecer relaciones sensibles, inspiradoras y profundamente empáticas. La persona debe distinguir el amor real de las proyecciones, las expectativas o el deseo de salvar al otro.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Neptuno en la Casa VIII intensifica la percepción intuitiva de la intimidad, las transformaciones y los vínculos invisibles. La persona debe proteger sus límites emocionales y aclarar los recursos compartidos.",
      },

      {
        house:
          "Casa IX",

        text:
          "Neptuno en la Casa IX alimenta una búsqueda espiritual, filosófica o artística. Los viajes, los estudios y las creencias pueden convertirse en fuentes de profunda inspiración.",
      },

      {
        house:
          "Casa X",

        text:
          "Neptuno en la Casa X puede orientar la vocación hacia el arte, la ayuda, la imaginación o los ámbitos basados en la inspiración. La persona debe aclarar sus objetivos profesionales y evitar expectativas demasiado imprecisas.",
      },

      {
        house:
          "Casa XI",

        text:
          "Neptuno en la Casa XI favorece los ideales colectivos, la compasión y los proyectos humanistas. La persona puede soñar con un mundo mejor, pero debe elegir sus grupos y alianzas con discernimiento.",
      },

      {
        house:
          "Casa XII",

        text:
          "Neptuno en la Casa XII refuerza la intuición, los sueños, la imaginación y la vida interior. La soledad, la creación y la introspección pueden convertirse en recursos importantes cuando están sostenidas por referencias concretas.",
      },
    ],

    retrograde: {
      kicker:
        "Revisión de los ideales",

      title:
        "¿Qué significa Neptuno retrógrado?",

      paragraphs: [
        "Desde la Tierra, Neptuno parece a veces disminuir su velocidad y retroceder temporalmente en el cielo. Se trata de un movimiento aparente relacionado con las posiciones relativas de la Tierra y Neptuno.",

        "En la interpretación astrológica, Neptuno retrógrado suele asociarse con una imaginación y una intuición más interiores. La persona puede cuestionar los ideales colectivos y buscar una verdad más personal.",

        "Este período puede invitar a reconocer las ilusiones, aclarar las expectativas y distinguir las percepciones intuitivas de las proyecciones emocionales.",
      ],

      cardSymbol:
        "♆℞",

      cardTitle:
        "Una invitación a aclarar",

      items: [
        "Revisar los propios ideales",
        "Observar las propias proyecciones",
        "Aclarar los límites",
        "Profundizar la intuición",
        "Dar una forma concreta a los sueños",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Neptuno",

      strengthsKicker:
        "Fortalezas posibles",

      strengthsTitle:
        "Una gran sensibilidad interior",

      strengths: [
        "Imaginación",
        "Intuición",
        "Compasión",
        "Creatividad",
        "Percepción simbólica",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Mantener referencias claras",

      challenges: [
        "Idealización",
        "Confusión",
        "Límites poco claros",
        "Tendencia a huir de la realidad",
        "Dificultad para verificar las percepciones",
      ],
    },

    aspectsSection: {
      title:
        "Los aspectos astrológicos de Neptuno",

      introduction:
        "Los aspectos relacionan Neptuno con los demás planetas de la carta natal. Aportan matices a tu imaginación, tu intuición, tus ideales y tu manera de percibir las emociones.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjunción",

        text:
          "Fusiona Neptuno con otro planeta y hace que su expresión sea más intuitiva, imaginativa o difícil de definir.",
      },

      {
        symbol:
          "△",

        title:
          "El trígono",

        text:
          "Puede simbolizar una circulación natural entre la intuición de Neptuno y las cualidades del otro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "El sextil",

        text:
          "Representa un potencial de inspiración, creatividad, compasión y apertura simbólica.",
      },

      {
        symbol:
          "□",

        title:
          "La cuadratura",

        text:
          "Puede crear una tensión entre las expectativas, las percepciones y la realidad, invitando a desarrollar mayor claridad.",
      },

      {
        symbol:
          "☍",

        title:
          "La oposición",

        text:
          "Invita a equilibrar los ideales personales con los hechos, los límites y las expectativas procedentes del exterior.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",

      title:
        "¿En qué signo y casa se encuentra tu Neptuno?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tu Neptuno, Urano, Saturno, Júpiter y las posiciones de tus principales planetas.",

      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Neptuno en astrología",

      items: [
        {
          question:
            "¿Qué representa Neptuno en astrología?",

          answer:
            "Neptuno representa simbólicamente la intuición, la imaginación, los sueños, la compasión, los ideales, la sensibilidad y las percepciones que superan el razonamiento estrictamente racional.",
        },

        {
          question:
            "¿Por qué Neptuno se asocia con las ilusiones?",

          answer:
            "Neptuno simboliza los límites difusos, las proyecciones y la idealización. Su influencia astrológica invita a desarrollar la intuición mientras se verifican los hechos y se mantienen límites claros.",
        },

        {
          question:
            "¿Qué significa el signo de Neptuno?",

          answer:
            "El signo de Neptuno describe la manera en que una generación expresa sus sueños, sus ideales, su imaginación y su visión colectiva.",
        },

        {
          question:
            "¿Qué significa Neptuno retrógrado en una carta natal?",

          answer:
            "Neptuno retrógrado al nacer puede simbolizar una vida imaginativa e intuitiva más interior, así como una necesidad personal de aclarar los ideales, los sueños y las percepciones.",
        },

        {
          question:
            "¿Neptuno retrógrado es negativo?",

          answer:
            "No. Este período se interpreta más bien como una invitación a revisar los ideales, reconocer posibles ilusiones y profundizar la relación con la intuición.",
        },

        {
          question:
            "¿Cómo conocer mi signo de Neptuno?",

          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Neptuno.",
        },

        {
          question:
            "¿Cuál es la diferencia entre Urano y Neptuno?",

          answer:
            "Urano simboliza la libertad, la innovación y los cambios rápidos, mientras que Neptuno representa la intuición, la imaginación, los ideales y la disolución de los límites.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Neptun in der Astrologie: Intuition, Fantasie und Ideale | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung Neptuns in der Astrologie, seinen Einfluss auf Intuition, Fantasie, Mitgefühl, Ideale und seinen Ausdruck in den 12 Tierkreiszeichen.",

      ogTitle:
        "Neptun in der Astrologie: Intuition, Fantasie und Sensibilität",

      ogDescription:
        "Verstehen Sie Neptuns Rolle im Geburtshoroskop und entdecken Sie, wie dieser Planet Intuition, Träume, Mitgefühl, Ideale und feine Wahrnehmungen symbolisiert.",

      twitterTitle:
        "Neptun in der Astrologie | Luna Astralis",

      twitterDescription:
        "Entdecken Sie, wie Neptun Intuition, Fantasie, Träume, Ideale und Sensibilität symbolisiert.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Neptun in der Astrologie: Intuition, Fantasie und Ideale",

      description:
        "Ein vollständiger Leitfaden zu Neptuns Rolle im Geburtshoroskop und seinem Ausdruck in den zwölf Zeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "♆ Planeten und Geburtshoroskop",

      title:
        "Neptun in der Astrologie",

      lead:
        "Neptun steht für Ihre Fantasie, Intuition, Ideale, Sensibilität und Ihre Art, das wahrzunehmen, was über den äußeren Anschein hinausgeht.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      seeSigns:
        "Die 12 Zeichen ansehen",
    },

    introduction: {
      kicker:
        "Ihre innere Vorstellungswelt verstehen",

      title:
        "Was bedeutet Neptun im Geburtshoroskop?",

      paragraphs: [
        "In der Astrologie symbolisiert Neptun Fantasie, Intuition, Träume, Mitgefühl und Ideale. Er steht für Erfahrungsbereiche, die sich nicht immer durch Logik oder unmittelbar erkennbare Fakten erfassen lassen.",

        "Seine Position im Geburtshoroskop kann die Bereiche zeigen, in denen Sie besonders sensibel, inspiriert oder empfänglich für Gefühle und Stimmungen sind.",

        "Neptun kann Kreativität, Einfühlungsvermögen und symbolische Wahrnehmung fördern. Gleichzeitig fordert er dazu auf, klare Grenzen zu bewahren, um Intuition, Projektionen und idealisierte Erwartungen voneinander zu unterscheiden.",
      ],
    },

    intuition: {
      title:
        "Neptun, Intuition und Fantasie",

      cards: [
        {
          symbol:
            "♆",

          title:
            "Ihre Intuition",

          text:
            "Neptun beschreibt Ihre Empfänglichkeit für Stimmungen, Gefühle und Wahrnehmungen, die nicht immer über die Logik vermittelt werden.",
        },

        {
          symbol:
            "✦",

          title:
            "Ihre Fantasie",

          text:
            "Er zeigt Ihre Fähigkeit, Bilder, Geschichten, Symbole und inspirierende Visionen zu erschaffen.",
        },

        {
          symbol:
            "♡",

          title:
            "Ihr Mitgefühl",

          text:
            "Neptun zeigt, wie Sie Verletzlichkeit, Leid und das Bedürfnis nach mehr Sanftheit wahrnehmen.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen Neptuns",

      cards: [
        {
          number:
            "01",

          title:
            "Inspirieren",

          text:
            "Neptun nährt Kreativität, Träume und Visionen, die Erfahrungen eine tiefere Bedeutung verleihen können.",
        },

        {
          number:
            "02",

          title:
            "Empfinden",

          text:
            "Er verstärkt die Sensibilität für Gefühle, Atmosphären und feine Bewegungen in der Umgebung.",
        },

        {
          number:
            "03",

          title:
            "Verbinden",

          text:
            "Neptun lädt dazu ein, wahrzunehmen, was Menschen, Erfahrungen und Symbole jenseits sichtbarer Unterschiede verbindet.",
        },

        {
          number:
            "04",

          title:
            "Idealisieren",

          text:
            "Er steht für die Fähigkeit, ein Ideal zu entwerfen, aber auch für das Risiko, auf eine Situation das zu projizieren, was man darin sehen möchte.",
        },
      ],
    },

    planets: {
      title:
        "Neptun, Uranus und Pluto",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Uranus",

          text:
            "Er steht für Freiheit, Innovation, Erwachen und Veränderungen, die bestehende Strukturen erneuern.",

          link:
            "Uranus entdecken",
        },

        {
          symbol:
            "♆",

          title:
            "Neptun",

          text:
            "Er symbolisiert Intuition, Fantasie, Ideale, Mitgefühl und feine Wahrnehmungen.",
        },

        {
          symbol:
            "♇",

          title:
            "Pluto",

          text:
            "Er steht für tiefgreifende Veränderungen, innere Kraft und Zyklen der Erneuerung.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen Neptuns",

      title:
        "Neptun in den 12 Tierkreiszeichen",

      introduction:
        "Neptun behält stets seine Funktion von Intuition, Fantasie und Ideal. Das Zeichen, in dem er steht, beschreibt, wie eine Generation ihre Träume, Sensibilität und kollektiven Bestrebungen ausdrückt.",

      titlePrefix:
        "Neptun in",
    },

    signs: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Neptun im Widder verbindet Fantasie mit Handlung, Initiative und dem Wunsch, neue Wege zu eröffnen. Diese Generationenstellung kann mutige Ideale inspirieren, verlangt jedoch eine klare Unterscheidung zwischen Intuition und Impulsivität.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Neptun im Stier verbindet Ideale mit Materie, Werten und Sicherheit. Diese Stellung kann eine besondere Sensibilität für Natur, Kunst und Genuss fördern, verlangt jedoch einen realistischen Umgang mit Ressourcen.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Neptun in den Zwillingen fördert ein fantasievolles, intuitives und symbolisches Denken. Diese Stellung kann Poesie, Erzählungen und inspirierte Ideen unterstützen, verlangt jedoch die Überprüfung von Informationen und klare Botschaften.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Neptun im Krebs verstärkt die Sensibilität für Gefühle, Familie und Zugehörigkeit. Diese Stellung kann großes Mitgefühl entwickeln, verlangt jedoch, die eigenen Gefühle von denen anderer zu unterscheiden.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Neptun im Löwen fördert eine inspirierte, theatralische und großzügige Kreativität. Diese Stellung kann große künstlerische oder romantische Ideale nähren, verlangt jedoch eine realistische Sicht auf Anerkennung.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Neptun in der Jungfrau versucht, Mitgefühl, Intuition und Hilfsbereitschaft eine konkrete Form zu geben. Diese Stellung kann eine starke Sensibilität für die Bedürfnisse anderer fördern, benötigt jedoch klare Methoden und praktische Grenzen.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Neptun in der Waage idealisiert Beziehungen, Harmonie und Zusammenarbeit. Diese Stellung kann eine große Sensibilität für Schönheit und Gerechtigkeit fördern, fordert jedoch dazu auf, emotionale Projektionen zu vermeiden.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Neptun im Skorpion vertieft Intuition, psychologische Wahrnehmung und das Bedürfnis nach Veränderung. Diese Stellung kann von Geheimnissen und verborgenen Wahrheiten angezogen werden, benötigt jedoch stabile emotionale Grenzen.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Neptun im Schützen verbindet das Ideal mit Sinnsuche, Überzeugungen und Erkundung. Diese Stellung kann große spirituelle oder philosophische Offenheit inspirieren, verlangt jedoch, absolute Gewissheiten zu hinterfragen.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Neptun im Steinbock versucht, Träumen, Idealen und kollektiven Ambitionen Struktur zu geben. Diese Stellung kann neue Vorstellungen von Erfolg inspirieren und zugleich Illusionen rund um Macht oder Status sichtbar machen.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Neptun im Wassermann nährt kollektive Ideale, Zukunftsvisionen und den Wunsch, zu einer inklusiveren Gesellschaft beizutragen. Diese Stellung kann humanitäre Projekte inspirieren, verlangt jedoch Aufmerksamkeit gegenüber unrealistischen Utopien.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Neptun in den Fischen verstärkt Intuition, Fantasie, Mitgefühl und symbolische Empfänglichkeit. Diese Stellung kann große Kreativität fördern, verlangt jedoch klare Grenzen, um Verwirrung oder Idealisierung zu vermeiden.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche Ihrer Inspiration",

      title:
        "Neptun in den 12 astrologischen Häusern",

      introduction:
        "Neptuns Zeichen beschreibt eine kollektive Sensibilität, während sein Haus den Lebensbereich zeigt, in dem Ihre Intuition, Ideale, Fantasie und Projektionen am persönlichsten zum Ausdruck kommen.",

      titlePrefix:
        "Neptun in",
    },

    houses: [
      {
        house:
          "Haus I",

        text:
          "Neptun im ersten Haus kann eine sensible, intuitive und schwer zu definierende Ausstrahlung verleihen. Die Person kann Stimmungen leicht aufnehmen und muss lernen, eine klare Identität aufzubauen, ohne ihre Empfänglichkeit zu verlieren.",
      },

      {
        house:
          "Haus II",

        text:
          "Neptun im zweiten Haus verbindet Werte, Ressourcen und Selbstwert mit Intuition oder Idealen. Die Person sollte auf eine konkrete und transparente Verwaltung ihrer Finanzen achten.",
      },

      {
        house:
          "Haus III",

        text:
          "Neptun im dritten Haus fördert bildhaftes, intuitives und kreatives Denken. Die Person kann poetisch und sensibel kommunizieren, sollte jedoch Fakten überprüfen und zu mehrdeutige Botschaften vermeiden.",
      },

      {
        house:
          "Haus IV",

        text:
          "Neptun im vierten Haus verstärkt die Sensibilität für Zuhause, Wurzeln und Erinnerungen. Die Person kann die Familie idealisieren oder nach einem stark inspirierenden inneren Zufluchtsort suchen.",
      },

      {
        house:
          "Haus V",

        text:
          "Neptun im fünften Haus fördert Fantasie, Romantik und künstlerische Kreativität. Die Person kann ihre Leidenschaften intensiv erleben, sollte Beziehungen jedoch nicht übermäßig idealisieren.",
      },

      {
        house:
          "Haus VI",

        text:
          "Neptun im sechsten Haus lädt dazu ein, Mitgefühl, Intuition und Sinn in den Alltag einzubringen. Die Person benötigt möglicherweise eine inspirierende Arbeit, sollte jedoch klare Gewohnheiten und Grenzen bewahren.",
      },

      {
        house:
          "Haus VII",

        text:
          "Neptun im siebten Haus kann sensible, inspirierende und tief empathische Beziehungen fördern. Die Person muss wirkliche Liebe von Projektionen, Erwartungen oder dem Wunsch unterscheiden, den anderen zu retten.",
      },

      {
        house:
          "Haus VIII",

        text:
          "Neptun im achten Haus verstärkt die intuitive Wahrnehmung von Intimität, Veränderungen und unsichtbaren Bindungen. Die Person sollte emotionale Grenzen schützen und gemeinsame Ressourcen klar regeln.",
      },

      {
        house:
          "Haus IX",

        text:
          "Neptun im neunten Haus nährt eine spirituelle, philosophische oder künstlerische Suche. Reisen, Studien und Überzeugungen können zu Quellen tiefer Inspiration werden.",
      },

      {
        house:
          "Haus X",

        text:
          "Neptun im zehnten Haus kann die Berufung auf Kunst, Hilfe, Fantasie oder inspirierende Bereiche ausrichten. Die Person sollte berufliche Ziele klären und zu vage Erwartungen vermeiden.",
      },

      {
        house:
          "Haus XI",

        text:
          "Neptun im elften Haus fördert kollektive Ideale, Mitgefühl und humanitäre Projekte. Die Person kann von einer besseren Welt träumen, sollte Gruppen und Bündnisse jedoch mit Urteilsvermögen wählen.",
      },

      {
        house:
          "Haus XII",

        text:
          "Neptun im zwölften Haus verstärkt Intuition, Träume, Fantasie und Innenleben. Einsamkeit, Kreativität und Selbstreflexion können wichtige Ressourcen werden, wenn sie durch konkrete Orientierung gestützt werden.",
      },
    ],

    retrograde: {
      kicker:
        "Ideale überprüfen",

      title:
        "Was bedeutet rückläufiger Neptun?",

      paragraphs: [
        "Von der Erde aus scheint Neptun manchmal langsamer zu werden und sich vorübergehend rückwärts am Himmel zu bewegen. Dabei handelt es sich um eine scheinbare Bewegung, die mit den relativen Positionen von Erde und Neptun zusammenhängt.",

        "In der astrologischen Deutung wird rückläufiger Neptun häufig mit einer stärker nach innen gerichteten Fantasie und Intuition verbunden. Die Person kann kollektive Ideale infrage stellen und nach einer persönlicheren Wahrheit suchen.",

        "Diese Phase kann dazu einladen, Illusionen zu erkennen, Erwartungen zu klären und intuitive Wahrnehmungen von emotionalen Projektionen zu unterscheiden.",
      ],

      cardSymbol:
        "♆℞",

      cardTitle:
        "Eine Einladung zur Klärung",

      items: [
        "Eigene Ideale überprüfen",
        "Eigene Projektionen beobachten",
        "Grenzen klären",
        "Intuition vertiefen",
        "Träumen eine konkrete Form geben",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen Neptuns",

      strengthsKicker:
        "Mögliche Stärken",

      strengthsTitle:
        "Große innere Sensibilität",

      strengths: [
        "Fantasie",
        "Intuition",
        "Mitgefühl",
        "Kreativität",
        "Symbolische Wahrnehmung",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Klare Orientierung bewahren",

      challenges: [
        "Idealisierung",
        "Verwirrung",
        "Unklare Grenzen",
        "Neigung zur Realitätsflucht",
        "Schwierigkeit, Wahrnehmungen zu überprüfen",
      ],
    },

    aspectsSection: {
      title:
        "Die astrologischen Aspekte Neptuns",

      introduction:
        "Aspekte verbinden Neptun mit den anderen Planeten im Geburtshoroskop. Sie verleihen Ihrer Fantasie, Intuition, Ihren Idealen und Ihrer Wahrnehmung von Gefühlen zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "Die Konjunktion",

        text:
          "Sie verbindet Neptun mit einem anderen Planeten und macht ihren Ausdruck intuitiver, fantasievoller oder schwerer zu definieren.",
      },

      {
        symbol:
          "△",

        title:
          "Das Trigon",

        text:
          "Es kann einen natürlichen Fluss zwischen Neptuns Intuition und den Eigenschaften des anderen Planeten symbolisieren.",
      },

      {
        symbol:
          "✶",

        title:
          "Das Sextil",

        text:
          "Es steht für Potenzial zu Inspiration, Kreativität, Mitgefühl und symbolischer Offenheit.",
      },

      {
        symbol:
          "□",

        title:
          "Das Quadrat",

        text:
          "Es kann Spannung zwischen Erwartungen, Wahrnehmungen und Realität erzeugen und dazu einladen, mehr Klarheit zu entwickeln.",
      },

      {
        symbol:
          "☍",

        title:
          "Die Opposition",

        text:
          "Sie fordert dazu auf, persönliche Ideale mit Fakten, Grenzen und Erwartungen von außen auszubalancieren.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",

      title:
        "In welchem Zeichen und Haus steht Ihr Neptun?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Neptun, Uranus, Saturn, Jupiter und die Positionen Ihrer wichtigsten Planeten.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zu Neptun in der Astrologie",

      items: [
        {
          question:
            "Was bedeutet Neptun in der Astrologie?",

          answer:
            "Neptun symbolisiert Intuition, Fantasie, Träume, Mitgefühl, Ideale, Sensibilität und Wahrnehmungen, die über streng rationales Denken hinausgehen.",
        },

        {
          question:
            "Warum wird Neptun mit Illusionen verbunden?",

          answer:
            "Neptun symbolisiert verschwommene Grenzen, Projektionen und Idealisierung. Sein astrologischer Einfluss lädt dazu ein, Intuition zu entwickeln und zugleich Fakten zu überprüfen sowie klare Grenzen zu bewahren.",
        },

        {
          question:
            "Was bedeutet Neptuns Zeichen?",

          answer:
            "Neptuns Zeichen beschreibt, wie eine Generation ihre Träume, Ideale, Fantasie und kollektive Vision ausdrückt.",
        },

        {
          question:
            "Was bedeutet rückläufiger Neptun im Geburtshoroskop?",

          answer:
            "Rückläufiger Neptun bei der Geburt kann ein stärker nach innen gerichtetes Fantasie- und Intuitionsleben sowie ein persönliches Bedürfnis symbolisieren, Ideale, Träume und Wahrnehmungen zu klären.",
        },

        {
          question:
            "Ist rückläufiger Neptun negativ?",

          answer:
            "Nein. Diese Phase wird eher als Einladung verstanden, Ideale zu überprüfen, mögliche Illusionen zu erkennen und die Beziehung zur Intuition zu vertiefen.",
        },

        {
          question:
            "Wie finde ich mein Neptunzeichen?",

          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Geburtsdatum, Geburtszeit und Geburtsort berechnen, um Neptuns genaue Position zu bestimmen.",
        },

        {
          question:
            "Was ist der Unterschied zwischen Uranus und Neptun?",

          answer:
            "Uranus symbolisiert Freiheit, Innovation und schnelle Veränderungen, während Neptun für Intuition, Fantasie, Ideale und die Auflösung von Grenzen steht.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Nettuno in astrologia: intuizione, immaginazione e ideali | Luna Astralis",

      description:
        "Scopri il significato di Nettuno in astrologia, la sua influenza sull’intuizione, l’immaginazione, la compassione, gli ideali e la sua espressione nei 12 segni zodiacali.",

      ogTitle:
        "Nettuno in astrologia: intuizione, immaginazione e sensibilità",

      ogDescription:
        "Comprendi il ruolo di Nettuno nel tema natale e scopri come questo pianeta simboleggia intuizione, sogni, compassione, ideali e percezioni sottili.",

      twitterTitle:
        "Nettuno in astrologia | Luna Astralis",

      twitterDescription:
        "Scopri come Nettuno simboleggia intuizione, immaginazione, sogni, ideali e sensibilità.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Nettuno in astrologia: intuizione, immaginazione e ideali",

      description:
        "Guida completa al ruolo di Nettuno nel tema natale e alla sua espressione nei dodici segni e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "♆ Pianeti e tema natale",

      title:
        "Nettuno in astrologia",

      lead:
        "Nettuno rappresenta la tua immaginazione, la tua intuizione, i tuoi ideali, la tua sensibilità e il tuo modo di percepire ciò che supera le apparenze.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      seeSigns:
        "Vedere i 12 segni",
    },

    introduction: {
      kicker:
        "Comprendere il tuo mondo immaginativo",

      title:
        "Che cosa rappresenta Nettuno nel tema natale?",

      paragraphs: [
        "In astrologia, Nettuno simboleggia l’immaginazione, l’intuizione, i sogni, la compassione e gli ideali. Rappresenta le dimensioni dell’esperienza che non possono sempre essere comprese attraverso la logica o i fatti immediati.",

        "La sua posizione nel tema natale può rivelare gli ambiti in cui sei particolarmente sensibile, ispirato o ricettivo alle emozioni e alle atmosfere.",

        "Nettuno può favorire la creatività, l’empatia e la percezione simbolica. Invita però a mantenere limiti chiari per distinguere l’intuizione, le proiezioni e le aspettative idealizzate.",
      ],
    },

    intuition: {
      title:
        "Nettuno, intuizione e immaginazione",

      cards: [
        {
          symbol:
            "♆",

          title:
            "La tua intuizione",

          text:
            "Nettuno descrive la tua ricettività alle atmosfere, alle emozioni e alle percezioni che non passano sempre attraverso la logica.",
        },

        {
          symbol:
            "✦",

          title:
            "La tua immaginazione",

          text:
            "Rivela la tua capacità di creare immagini, storie, simboli e visioni ispiratrici.",
        },

        {
          symbol:
            "♡",

          title:
            "La tua compassione",

          text:
            "Nettuno mostra come percepisci la vulnerabilità, la sofferenza e il bisogno di creare maggiore dolcezza.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Nettuno",

      cards: [
        {
          number:
            "01",

          title:
            "Ispirare",

          text:
            "Nettuno alimenta la creatività, i sogni e le visioni capaci di dare un significato più profondo alle esperienze.",
        },

        {
          number:
            "02",

          title:
            "Sentire",

          text:
            "Accentua la sensibilità alle emozioni, alle atmosfere e ai movimenti sottili dell’ambiente.",
        },

        {
          number:
            "03",

          title:
            "Collegare",

          text:
            "Nettuno invita a percepire ciò che unisce le persone, le esperienze e i simboli oltre le differenze visibili.",
        },

        {
          number:
            "04",

          title:
            "Idealizzare",

          text:
            "Rappresenta la capacità di immaginare un ideale, ma anche il rischio di proiettare su una situazione ciò che si desidera vedere.",
        },
      ],
    },

    planets: {
      title:
        "Nettuno, Urano e Plutone",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Urano",

          text:
            "Rappresenta la libertà, l’innovazione, il risveglio e i cambiamenti che rinnovano le strutture.",

          link:
            "Scoprire Urano",
        },

        {
          symbol:
            "♆",

          title:
            "Nettuno",

          text:
            "Simboleggia intuizione, immaginazione, ideali, compassione e percezioni sottili.",
        },

        {
          symbol:
            "♇",

          title:
            "Plutone",

          text:
            "Rappresenta trasformazioni profonde, potere interiore e cicli di rigenerazione.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Nettuno",

      title:
        "Nettuno nei 12 segni zodiacali",

      introduction:
        "Nettuno conserva sempre la propria funzione di intuizione, immaginazione e ideale. Il segno in cui si trova descrive il modo in cui una generazione esprime i propri sogni, la propria sensibilità e le proprie aspirazioni collettive.",

      titlePrefix:
        "Nettuno in",
    },

    signs: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Nettuno in Ariete collega l’immaginazione all’azione, all’iniziativa e al desiderio di aprire nuove strade. Questa posizione generazionale può ispirare ideali audaci, ma richiede di distinguere l’intuizione dall’impulsività.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Nettuno in Toro collega gli ideali alla materia, ai valori e alla sicurezza. Questa posizione può ispirare una particolare sensibilità verso la natura, l’arte e i piaceri, ma invita a mantenere un rapporto realistico con le risorse.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "Nettuno in Gemelli alimenta un pensiero immaginativo, intuitivo e simbolico. Questa posizione può favorire la poesia, i racconti e le idee ispirate, ma richiede di verificare le informazioni e chiarire i messaggi.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Nettuno in Cancro intensifica la sensibilità verso le emozioni, la famiglia e il senso di appartenenza. Questa posizione può sviluppare una grande compassione, ma invita a distinguere le proprie emozioni da quelle degli altri.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Nettuno in Leone favorisce una creatività ispirata, teatrale e generosa. Questa posizione può alimentare grandi ideali artistici o romantici, ma richiede di conservare una visione realistica del riconoscimento.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "Nettuno in Vergine cerca di dare una forma concreta alla compassione, all’intuizione e al servizio. Questa posizione può ispirare una grande sensibilità verso i bisogni altrui, ma richiede metodi chiari e limiti pratici.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "Nettuno in Bilancia idealizza le relazioni, l’armonia e la cooperazione. Questa posizione può favorire una grande sensibilità verso la bellezza e la giustizia, ma invita a evitare le proiezioni affettive.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Nettuno in Scorpione approfondisce l’intuizione, la percezione psicologica e il bisogno di trasformazione. Questa posizione può essere attratta dai misteri e dalle verità nascoste, ma richiede limiti emotivi solidi.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Nettuno in Sagittario collega l’ideale alla ricerca di significato, alle convinzioni e all’esplorazione. Questa posizione può ispirare una grande apertura spirituale o filosofica, ma richiede di mettere in discussione le certezze assolute.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Nettuno in Capricorno cerca di dare struttura ai sogni, agli ideali e alle ambizioni collettive. Questa posizione può ispirare nuove visioni del successo, ma può anche rivelare illusioni legate al potere o allo status.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "Nettuno in Acquario alimenta gli ideali collettivi, le visioni del futuro e il desiderio di contribuire a una società più inclusiva. Questa posizione può ispirare progetti umanitari, ma richiede attenzione verso le utopie poco realistiche.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "Nettuno in Pesci rafforza l’intuizione, l’immaginazione, la compassione e la ricettività simbolica. Questa posizione può favorire una grande creatività, ma richiede limiti chiari per evitare confusione o idealizzazione.",
      },
    ],

    housesSection: {
      kicker:
        "Gli ambiti della tua ispirazione",

      title:
        "Nettuno nelle 12 case astrologiche",

      introduction:
        "Il segno di Nettuno descrive una sensibilità collettiva, mentre la sua casa indica l’ambito della vita in cui la tua intuizione, i tuoi ideali, la tua immaginazione e le tue proiezioni si esprimono in modo più personale.",

      titlePrefix:
        "Nettuno in",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Nettuno in Casa I può donare una presenza sensibile, intuitiva e difficile da definire. La persona può assorbire facilmente le atmosfere e deve imparare a costruire un’identità chiara senza perdere la propria ricettività.",
      },

      {
        house:
          "Casa II",

        text:
          "Nettuno in Casa II collega i valori, le risorse e l’autostima all’intuizione o all’ideale. La persona deve mantenere una gestione concreta e trasparente delle proprie finanze.",
      },

      {
        house:
          "Casa III",

        text:
          "Nettuno in Casa III favorisce un pensiero immaginativo, intuitivo e creativo. La persona può comunicare con poesia e sensibilità, ma deve verificare i fatti ed evitare messaggi troppo ambigui.",
      },

      {
        house:
          "Casa IV",

        text:
          "Nettuno in Casa IV intensifica la sensibilità verso la casa, le radici e i ricordi. La persona può idealizzare la famiglia o cercare un rifugio interiore molto ispirante.",
      },

      {
        house:
          "Casa V",

        text:
          "Nettuno in Casa V favorisce l’immaginazione, il romanticismo e la creatività artistica. La persona può vivere le proprie passioni con intensità, ma deve evitare di idealizzare eccessivamente le relazioni.",
      },

      {
        house:
          "Casa VI",

        text:
          "Nettuno in Casa VI invita a portare compassione, intuizione e significato nella vita quotidiana. La persona può avere bisogno di un lavoro ispirante, ma deve mantenere abitudini e limiti chiari.",
      },

      {
        house:
          "Casa VII",

        text:
          "Nettuno in Casa VII può favorire relazioni sensibili, ispiratrici e profondamente empatiche. La persona deve distinguere l’amore reale dalle proiezioni, dalle aspettative o dal desiderio di salvare l’altro.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Nettuno in Casa VIII intensifica la percezione intuitiva dell’intimità, delle trasformazioni e dei legami invisibili. La persona deve proteggere i propri limiti emotivi e chiarire le risorse condivise.",
      },

      {
        house:
          "Casa IX",

        text:
          "Nettuno in Casa IX alimenta una ricerca spirituale, filosofica o artistica. I viaggi, gli studi e le convinzioni possono diventare fonti di profonda ispirazione.",
      },

      {
        house:
          "Casa X",

        text:
          "Nettuno in Casa X può orientare la vocazione verso l’arte, l’aiuto, l’immaginazione o gli ambiti fondati sull’ispirazione. La persona deve chiarire i propri obiettivi professionali ed evitare aspettative troppo vaghe.",
      },

      {
        house:
          "Casa XI",

        text:
          "Nettuno in Casa XI favorisce gli ideali collettivi, la compassione e i progetti umanitari. La persona può sognare un mondo migliore, ma deve scegliere gruppi e alleanze con discernimento.",
      },

      {
        house:
          "Casa XII",

        text:
          "Nettuno in Casa XII rafforza l’intuizione, i sogni, l’immaginazione e la vita interiore. La solitudine, la creatività e l’introspezione possono diventare risorse importanti quando sono sostenute da riferimenti concreti.",
      },
    ],

    retrograde: {
      kicker:
        "Revisione degli ideali",

      title:
        "Che cosa significa Nettuno retrogrado?",

      paragraphs: [
        "Dalla Terra, Nettuno sembra talvolta rallentare e retrocedere temporaneamente nel cielo. Si tratta di un movimento apparente legato alle posizioni relative della Terra e di Nettuno.",

        "Nell’interpretazione astrologica, Nettuno retrogrado è spesso associato a un’immaginazione e a un’intuizione più interiori. La persona può mettere in discussione gli ideali collettivi e cercare una verità più personale.",

        "Questo periodo può invitare a riconoscere le illusioni, chiarire le aspettative e distinguere le percezioni intuitive dalle proiezioni emotive.",
      ],

      cardSymbol:
        "♆℞",

      cardTitle:
        "Un invito a chiarire",

      items: [
        "Rivedere i propri ideali",
        "Osservare le proprie proiezioni",
        "Chiarire i limiti",
        "Approfondire l’intuizione",
        "Dare una forma concreta ai sogni",
      ],
    },

    strengths: {
      title:
        "I punti di forza e le sfide di Nettuno",

      strengthsKicker:
        "Possibili punti di forza",

      strengthsTitle:
        "Una grande sensibilità interiore",

      strengths: [
        "Immaginazione",
        "Intuizione",
        "Compassione",
        "Creatività",
        "Percezione simbolica",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Mantenere riferimenti chiari",

      challenges: [
        "Idealizzazione",
        "Confusione",
        "Limiti poco chiari",
        "Tendenza a fuggire dalla realtà",
        "Difficoltà a verificare le percezioni",
      ],
    },

    aspectsSection: {
      title:
        "Gli aspetti astrologici di Nettuno",

      introduction:
        "Gli aspetti collegano Nettuno agli altri pianeti del tema natale. Aggiungono sfumature alla tua immaginazione, alla tua intuizione, ai tuoi ideali e al tuo modo di percepire le emozioni.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La congiunzione",

        text:
          "Fonde Nettuno con un altro pianeta e rende la loro espressione più intuitiva, immaginativa o difficile da definire.",
      },

      {
        symbol:
          "△",

        title:
          "Il trigono",

        text:
          "Può simboleggiare un flusso naturale tra l’intuizione di Nettuno e le qualità dell’altro pianeta.",
      },

      {
        symbol:
          "✶",

        title:
          "Il sestile",

        text:
          "Rappresenta un potenziale di ispirazione, creatività, compassione e apertura simbolica.",
      },

      {
        symbol:
          "□",

        title:
          "La quadratura",

        text:
          "Può creare una tensione tra aspettative, percezioni e realtà, invitando a sviluppare maggiore chiarezza.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposizione",

        text:
          "Invita a equilibrare gli ideali personali con i fatti, i limiti e le aspettative provenienti dall’esterno.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",

      title:
        "In quale segno e casa si trova il tuo Nettuno?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire Nettuno, Urano, Saturno, Giove e le posizioni dei principali pianeti.",

      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande su Nettuno in astrologia",

      items: [
        {
          question:
            "Che cosa rappresenta Nettuno in astrologia?",

          answer:
            "Nettuno rappresenta simbolicamente l’intuizione, l’immaginazione, i sogni, la compassione, gli ideali, la sensibilità e le percezioni che superano il ragionamento strettamente razionale.",
        },

        {
          question:
            "Perché Nettuno è associato alle illusioni?",

          answer:
            "Nettuno simboleggia i confini sfumati, le proiezioni e l’idealizzazione. La sua influenza astrologica invita a sviluppare l’intuizione verificando al tempo stesso i fatti e mantenendo limiti chiari.",
        },

        {
          question:
            "Che cosa significa il segno di Nettuno?",

          answer:
            "Il segno di Nettuno descrive il modo in cui una generazione esprime i propri sogni, ideali, immaginazione e visione collettiva.",
        },

        {
          question:
            "Che cosa significa Nettuno retrogrado nel tema natale?",

          answer:
            "Nettuno retrogrado alla nascita può simboleggiare una vita immaginativa e intuitiva più interiore, oltre a un bisogno personale di chiarire ideali, sogni e percezioni.",
        },

        {
          question:
            "Nettuno retrogrado è negativo?",

          answer:
            "No. Questo periodo viene piuttosto interpretato come un invito a rivedere gli ideali, riconoscere eventuali illusioni e approfondire il rapporto con l’intuizione.",
        },

        {
          question:
            "Come conoscere il mio segno di Nettuno?",

          answer:
            "Devi calcolare il tuo tema natale utilizzando data, ora e luogo di nascita per conoscere la posizione esatta di Nettuno.",
        },

        {
          question:
            "Qual è la differenza tra Urano e Nettuno?",

          answer:
            "Urano simboleggia libertà, innovazione e cambiamenti rapidi, mentre Nettuno rappresenta intuizione, immaginazione, ideali e dissoluzione dei confini.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Netuno na astrologia: intuição, imaginação e ideais | Luna Astralis",

      description:
        "Descubra o significado de Netuno na astrologia, sua influência sobre a intuição, a imaginação, a compaixão, os ideais e sua expressão nos 12 signos do zodíaco.",

      ogTitle:
        "Netuno na astrologia: intuição, imaginação e sensibilidade",

      ogDescription:
        "Compreenda o papel de Netuno no seu mapa natal e descubra como este planeta simboliza intuição, sonhos, compaixão, ideais e percepções sutis.",

      twitterTitle:
        "Netuno na astrologia | Luna Astralis",

      twitterDescription:
        "Descubra como Netuno simboliza intuição, imaginação, sonhos, ideais e sensibilidade.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Netuno na astrologia: intuição, imaginação e ideais",

      description:
        "Guia completo sobre o papel de Netuno no mapa natal e sua expressão nos doze signos e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "♆ Planetas e mapa natal",

      title:
        "Netuno na astrologia",

      lead:
        "Netuno representa sua imaginação, sua intuição, seus ideais, sua sensibilidade e sua maneira de perceber aquilo que ultrapassa as aparências.",

      createChart:
        "Criar meu mapa astral grátis",

      seeSigns:
        "Ver os 12 signos",
    },

    introduction: {
      kicker:
        "Compreender seu mundo imaginativo",

      title:
        "O que Netuno representa no mapa natal?",

      paragraphs: [
        "Na astrologia, Netuno simboliza imaginação, intuição, sonhos, compaixão e ideais. Ele representa dimensões da experiência que nem sempre podem ser compreendidas pela lógica ou pelos fatos imediatos.",

        "Sua posição no mapa natal pode revelar as áreas em que você é especialmente sensível, inspirado ou receptivo às emoções e aos ambientes.",

        "Netuno pode favorecer criatividade, empatia e percepção simbólica. No entanto, ele convida a manter limites claros para distinguir intuição, projeções e expectativas idealizadas.",
      ],
    },

    intuition: {
      title:
        "Netuno, intuição e imaginação",

      cards: [
        {
          symbol:
            "♆",

          title:
            "Sua intuição",

          text:
            "Netuno descreve sua receptividade aos ambientes, às emoções e às percepções que nem sempre passam pela lógica.",
        },

        {
          symbol:
            "✦",

          title:
            "Sua imaginação",

          text:
            "Ele revela sua capacidade de criar imagens, histórias, símbolos e visões inspiradoras.",
        },

        {
          symbol:
            "♡",

          title:
            "Sua compaixão",

          text:
            "Netuno mostra como você percebe a vulnerabilidade, o sofrimento e a necessidade de criar maior suavidade.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Netuno",

      cards: [
        {
          number:
            "01",

          title:
            "Inspirar",

          text:
            "Netuno alimenta a criatividade, os sonhos e as visões capazes de dar um sentido mais profundo às experiências.",
        },

        {
          number:
            "02",

          title:
            "Sentir",

          text:
            "Ele acentua a sensibilidade às emoções, às atmosferas e aos movimentos sutis do ambiente.",
        },

        {
          number:
            "03",

          title:
            "Conectar",

          text:
            "Netuno convida a perceber aquilo que une as pessoas, as experiências e os símbolos além das diferenças visíveis.",
        },

        {
          number:
            "04",

          title:
            "Idealizar",

          text:
            "Ele representa a capacidade de imaginar um ideal, mas também o risco de projetar sobre uma situação aquilo que se deseja ver.",
        },
      ],
    },

    planets: {
      title:
        "Netuno, Urano e Plutão",

      cards: [
        {
          symbol:
            "♅",

          title:
            "Urano",

          text:
            "Ele representa liberdade, inovação, despertar e mudanças que renovam as estruturas.",

          link:
            "Descobrir Urano",
        },

        {
          symbol:
            "♆",

          title:
            "Netuno",

          text:
            "Ele simboliza intuição, imaginação, ideais, compaixão e percepções sutis.",
        },

        {
          symbol:
            "♇",

          title:
            "Plutão",

          text:
            "Ele representa transformações profundas, poder interior e ciclos de regeneração.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Netuno",

      title:
        "Netuno nos 12 signos astrológicos",

      introduction:
        "Netuno sempre conserva sua função de intuição, imaginação e ideal. O signo em que ele se encontra descreve a maneira como uma geração expressa seus sonhos, sua sensibilidade e suas aspirações coletivas.",

      titlePrefix:
        "Netuno em",
    },

    signs: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Netuno em Áries relaciona a imaginação à ação, à iniciativa e ao desejo de abrir novos caminhos. Esta posição geracional pode inspirar ideais ousados, mas exige distinguir intuição de impulsividade.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Netuno em Touro relaciona os ideais à matéria, aos valores e à segurança. Esta posição pode inspirar uma sensibilidade especial à natureza, à arte e aos prazeres, mas convida a manter uma relação realista com os recursos.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Netuno em Gêmeos alimenta um pensamento imaginativo, intuitivo e simbólico. Esta posição pode favorecer poesia, histórias e ideias inspiradas, mas exige verificar as informações e esclarecer as mensagens.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Netuno em Câncer intensifica a sensibilidade às emoções, à família e ao sentimento de pertencimento. Esta posição pode desenvolver grande compaixão, mas convida a diferenciar as próprias emoções das emoções dos outros.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Netuno em Leão favorece uma criatividade inspirada, teatral e generosa. Esta posição pode alimentar grandes ideais artísticos ou românticos, mas exige conservar uma visão realista do reconhecimento.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Netuno em Virgem procura dar forma concreta à compaixão, à intuição e ao serviço. Esta posição pode inspirar grande sensibilidade às necessidades dos outros, mas requer métodos claros e limites práticos.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Netuno em Libra idealiza os relacionamentos, a harmonia e a cooperação. Esta posição pode favorecer grande sensibilidade à beleza e à justiça, mas convida a evitar projeções afetivas.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Netuno em Escorpião aprofunda a intuição, a percepção psicológica e a necessidade de transformação. Esta posição pode se sentir atraída por mistérios e verdades ocultas, mas exige limites emocionais sólidos.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Netuno em Sagitário relaciona o ideal à busca de sentido, às crenças e à exploração. Esta posição pode inspirar grande abertura espiritual ou filosófica, mas exige questionar certezas absolutas.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Netuno em Capricórnio procura dar estrutura aos sonhos, aos ideais e às ambições coletivas. Esta posição pode inspirar novas visões de sucesso, mas também revelar ilusões ligadas ao poder ou ao status.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Netuno em Aquário alimenta ideais coletivos, visões de futuro e o desejo de contribuir para uma sociedade mais inclusiva. Esta posição pode inspirar projetos humanitários, mas exige atenção a utopias pouco realistas.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Netuno em Peixes reforça a intuição, a imaginação, a compaixão e a receptividade simbólica. Esta posição pode favorecer grande criatividade, mas exige limites claros para evitar confusão ou idealização.",
      },
    ],

    housesSection: {
      kicker:
        "As áreas da sua inspiração",

      title:
        "Netuno nas 12 casas astrológicas",

      introduction:
        "O signo de Netuno descreve uma sensibilidade coletiva, enquanto sua casa indica a área da vida em que sua intuição, seus ideais, sua imaginação e suas projeções se expressam de maneira mais pessoal.",

      titlePrefix:
        "Netuno em",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Netuno na Casa I pode proporcionar uma presença sensível, intuitiva e difícil de definir. A pessoa pode absorver facilmente os ambientes e deve aprender a construir uma identidade clara sem perder sua receptividade.",
      },

      {
        house:
          "Casa II",

        text:
          "Netuno na Casa II relaciona valores, recursos e autoestima à intuição ou ao ideal. A pessoa deve procurar manter uma gestão concreta e transparente de suas finanças.",
      },

      {
        house:
          "Casa III",

        text:
          "Netuno na Casa III favorece um pensamento imaginativo, intuitivo e criativo. A pessoa pode se comunicar com poesia e sensibilidade, mas deve verificar os fatos e evitar mensagens excessivamente ambíguas.",
      },

      {
        house:
          "Casa IV",

        text:
          "Netuno na Casa IV intensifica a sensibilidade ao lar, às raízes e às lembranças. A pessoa pode idealizar a família ou procurar um refúgio interior muito inspirador.",
      },

      {
        house:
          "Casa V",

        text:
          "Netuno na Casa V favorece imaginação, romantismo e criatividade artística. A pessoa pode viver suas paixões com intensidade, mas deve evitar idealizar excessivamente os relacionamentos.",
      },

      {
        house:
          "Casa VI",

        text:
          "Netuno na Casa VI convida a levar compaixão, intuição e sentido para o cotidiano. A pessoa pode precisar de um trabalho inspirador, mas deve manter hábitos e limites claros.",
      },

      {
        house:
          "Casa VII",

        text:
          "Netuno na Casa VII pode favorecer relacionamentos sensíveis, inspiradores e profundamente empáticos. A pessoa deve distinguir o amor real das projeções, expectativas ou do desejo de salvar o outro.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Netuno na Casa VIII intensifica a percepção intuitiva da intimidade, das transformações e dos vínculos invisíveis. A pessoa deve proteger seus limites emocionais e esclarecer os recursos compartilhados.",
      },

      {
        house:
          "Casa IX",

        text:
          "Netuno na Casa IX alimenta uma busca espiritual, filosófica ou artística. Viagens, estudos e crenças podem se tornar fontes de profunda inspiração.",
      },

      {
        house:
          "Casa X",

        text:
          "Netuno na Casa X pode orientar a vocação para a arte, a ajuda, a imaginação ou áreas baseadas na inspiração. A pessoa deve esclarecer seus objetivos profissionais e evitar expectativas excessivamente vagas.",
      },

      {
        house:
          "Casa XI",

        text:
          "Netuno na Casa XI favorece ideais coletivos, compaixão e projetos humanitários. A pessoa pode sonhar com um mundo melhor, mas deve escolher grupos e alianças com discernimento.",
      },

      {
        house:
          "Casa XII",

        text:
          "Netuno na Casa XII reforça a intuição, os sonhos, a imaginação e a vida interior. A solidão, a criatividade e a introspecção podem se tornar recursos importantes quando apoiadas por referências concretas.",
      },
    ],

    retrograde: {
      kicker:
        "Revisão dos ideais",

      title:
        "O que significa Netuno retrógrado?",

      paragraphs: [
        "A partir da Terra, Netuno às vezes parece desacelerar e se mover temporariamente para trás no céu. Trata-se de um movimento aparente relacionado às posições relativas da Terra e de Netuno.",

        "Na interpretação astrológica, Netuno retrógrado costuma ser associado a uma imaginação e uma intuição mais interiores. A pessoa pode questionar os ideais coletivos e buscar uma verdade mais pessoal.",

        "Esse período pode convidar a reconhecer ilusões, esclarecer expectativas e distinguir percepções intuitivas de projeções emocionais.",
      ],

      cardSymbol:
        "♆℞",

      cardTitle:
        "Um convite para esclarecer",

      items: [
        "Rever os próprios ideais",
        "Observar as próprias projeções",
        "Esclarecer os limites",
        "Aprofundar a intuição",
        "Dar forma concreta aos sonhos",
      ],
    },

    strengths: {
      title:
        "As forças e os desafios de Netuno",

      strengthsKicker:
        "Possíveis forças",

      strengthsTitle:
        "Grande sensibilidade interior",

      strengths: [
        "Imaginação",
        "Intuição",
        "Compaixão",
        "Criatividade",
        "Percepção simbólica",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "Manter referências claras",

      challenges: [
        "Idealização",
        "Confusão",
        "Limites pouco claros",
        "Tendência a fugir da realidade",
        "Dificuldade para verificar as percepções",
      ],
    },

    aspectsSection: {
      title:
        "Os aspectos astrológicos de Netuno",

      introduction:
        "Os aspectos ligam Netuno aos outros planetas do mapa natal. Eles acrescentam nuances à sua imaginação, sua intuição, seus ideais e sua maneira de perceber as emoções.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "A conjunção",

        text:
          "Ela funde Netuno com outro planeta e torna sua expressão mais intuitiva, imaginativa ou difícil de definir.",
      },

      {
        symbol:
          "△",

        title:
          "O trígono",

        text:
          "Ele pode simbolizar uma circulação natural entre a intuição de Netuno e as qualidades do outro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "O sextil",

        text:
          "Ele representa um potencial de inspiração, criatividade, compaixão e abertura simbólica.",
      },

      {
        symbol:
          "□",

        title:
          "A quadratura",

        text:
          "Ela pode criar tensão entre expectativas, percepções e realidade, convidando ao desenvolvimento de maior clareza.",
      },

      {
        symbol:
          "☍",

        title:
          "A oposição",

        text:
          "Ela convida a equilibrar os ideais pessoais com os fatos, os limites e as expectativas provenientes do exterior.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",

      title:
        "Em qual signo e casa está seu Netuno?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir Netuno, Urano, Saturno, Júpiter e as posições dos seus principais planetas.",

      button:
        "Descobrir meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Netuno na astrologia",

      items: [
        {
          question:
            "O que Netuno representa na astrologia?",

          answer:
            "Netuno representa simbolicamente intuição, imaginação, sonhos, compaixão, ideais, sensibilidade e percepções que ultrapassam o raciocínio estritamente racional.",
        },

        {
          question:
            "Por que Netuno é associado às ilusões?",

          answer:
            "Netuno simboliza limites difusos, projeções e idealização. Sua influência astrológica convida a desenvolver a intuição enquanto se verificam os fatos e se mantêm limites claros.",
        },

        {
          question:
            "O que significa o signo de Netuno?",

          answer:
            "O signo de Netuno descreve a maneira como uma geração expressa seus sonhos, seus ideais, sua imaginação e sua visão coletiva.",
        },

        {
          question:
            "O que significa Netuno retrógrado no mapa natal?",

          answer:
            "Netuno retrógrado no nascimento pode simbolizar uma vida imaginativa e intuitiva mais interior, além de uma necessidade pessoal de esclarecer ideais, sonhos e percepções.",
        },

        {
          question:
            "Netuno retrógrado é negativo?",

          answer:
            "Não. Esse período costuma ser interpretado como um convite para rever os ideais, reconhecer possíveis ilusões e aprofundar a relação com a intuição.",
        },

        {
          question:
            "Como descobrir meu signo de Netuno?",

          answer:
            "Você deve calcular seu mapa natal usando data, hora e local de nascimento para conhecer a posição exata de Netuno.",
        },

        {
          question:
            "Qual é a diferença entre Urano e Netuno?",

          answer:
            "Urano simboliza liberdade, inovação e mudanças rápidas, enquanto Netuno representa intuição, imaginação, ideais e dissolução dos limites.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
