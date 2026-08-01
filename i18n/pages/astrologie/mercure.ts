// i18n/pages/astrologie/mercure.ts

import type {
  Locale,
} from "@/i18n/config";

export type MercuryCard = {
  symbol: string;
  title: string;
  text: string;
  link?: string;
};

export type MercuryFunction = {
  number: string;
  title: string;
  text: string;
};

export type MercurySign = {
  sign: string;
  symbol: string;
  text: string;
};

export type MercuryHouse = {
  house: string;
  text: string;
};

export type MercuryAspect = {
  symbol: string;
  title: string;
  text: string;
};

export type MercuryFaqItem = {
  question: string;
  answer: string;
};

export type MercuryPageText = {
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

  thought: {
    title: string;
    cards: MercuryCard[];
  };

  functions: {
    title: string;
    cards: MercuryFunction[];
  };

  planets: {
    title: string;
    cards: MercuryCard[];
  };

  signsSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  signs: MercurySign[];

  housesSection: {
    kicker: string;
    title: string;
    introduction: string;
    titlePrefix: string;
  };

  houses: MercuryHouse[];

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

  aspects: MercuryAspect[];

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: MercuryFaqItem[];
  };

  disclaimer: string;
};

export const MERCURE_TRANSLATIONS:
  Record<
    Locale,
    MercuryPageText
  > = {
  fr: {
    metadata: {
      title:
        "Mercure en astrologie : communication, pensée et intelligence | Luna Astralis",

      description:
        "Découvrez la signification de Mercure en astrologie, son influence sur la communication, la pensée et l’apprentissage, ainsi que son expression dans les 12 signes du zodiaque.",

      ogTitle:
        "Mercure en astrologie : pensée, communication et intelligence",

      ogDescription:
        "Comprenez le rôle de Mercure dans votre thème natal et découvrez comment cette planète influence votre manière de penser, de communiquer et d’apprendre.",

      twitterTitle:
        "Mercure en astrologie | Luna Astralis",

      twitterDescription:
        "Découvrez comment Mercure influence votre pensée, votre communication et votre manière d’apprendre.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Mercure en astrologie : communication, pensée et intelligence",

      description:
        "Guide complet consacré au rôle de Mercure dans le thème natal, à son expression dans les douze signes et les douze maisons astrologiques.",
    },

    hero: {
      badge:
        "☿ Planètes et thème natal",

      title:
        "Mercure en astrologie",

      lead:
        "Mercure représente votre manière de penser, d’apprendre, de communiquer et de comprendre le monde qui vous entoure.",

      createChart:
        "Créer ma carte du ciel gratuite",

      seeSigns:
        "Voir les 12 signes",
    },

    introduction: {
      kicker:
        "Comprendre votre esprit",

      title:
        "Que représente Mercure dans un thème astral ?",

      paragraphs: [
        "En astrologie, Mercure symbolise la pensée, l’intelligence, la communication et la manière dont une personne recueille, organise et transmet les informations.",

        "Sa position dans votre carte du ciel décrit votre manière de réfléchir, d’apprendre, de poser des questions et de partager vos idées. Elle peut également révéler votre style de communication, votre rythme mental et les sujets qui éveillent naturellement votre curiosité.",

        "Mercure ne détermine pas votre intelligence. Son rôle astrologique consiste plutôt à représenter la forme que prend votre pensée et la manière dont vous utilisez vos facultés intellectuelles au quotidien.",
      ],
    },

    thought: {
      title:
        "Mercure, la pensée et la communication",

      cards: [
        {
          symbol:
            "☿",

          title:
            "Votre manière de penser",

          text:
            "Mercure décrit la façon dont vous analysez une situation, établissez des liens et organisez mentalement les informations.",
        },

        {
          symbol:
            "✦",

          title:
            "Votre communication",

          text:
            "Il révèle votre manière de parler, d’écrire, d’écouter et de transmettre ce que vous pensez aux autres.",
        },

        {
          symbol:
            "✧",

          title:
            "Votre apprentissage",

          text:
            "Mercure montre comment votre curiosité s’éveille et de quelle manière vous assimilez le plus facilement de nouvelles connaissances.",
        },
      ],
    },

    functions: {
      title:
        "Les principales fonctions de Mercure",

      cards: [
        {
          number:
            "01",

          title:
            "Observer",

          text:
            "Mercure recueille les informations présentes dans l’environnement et remarque les détails utiles à la compréhension.",
        },

        {
          number:
            "02",

          title:
            "Comprendre",

          text:
            "Il classe les idées, compare les faits et cherche à donner une structure logique ou personnelle aux expériences.",
        },

        {
          number:
            "03",

          title:
            "Transmettre",

          text:
            "Mercure permet de transformer une pensée en paroles, en écrits, en gestes ou en messages compréhensibles.",
        },

        {
          number:
            "04",

          title:
            "S’adapter",

          text:
            "Il symbolise la capacité à modifier son point de vue, à apprendre et à répondre rapidement aux changements.",
        },
      ],
    },

    planets: {
      title:
        "Mercure, le Soleil et la Lune",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Le Soleil",

          text:
            "Il représente votre identité consciente, votre volonté et la direction que vous cherchez à donner à votre vie.",

          link:
            "Découvrir le Soleil",
        },

        {
          symbol:
            "🌙",

          title:
            "La Lune",

          text:
            "Elle décrit votre monde émotionnel, vos réactions instinctives et vos besoins de sécurité affective.",

          link:
            "Découvrir la Lune",
        },

        {
          symbol:
            "☿",

          title:
            "Mercure",

          text:
            "Il révèle votre fonctionnement mental, votre manière de communiquer et votre façon d’assimiler les informations.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Les douze expressions de Mercure",

      title:
        "Mercure dans les 12 signes astrologiques",

      introduction:
        "Mercure conserve toujours sa fonction de pensée, de communication et d’apprentissage. Le signe astrologique dans lequel il se trouve décrit la manière particulière dont ces facultés s’expriment.",

      titlePrefix:
        "Mercure en",
    },

    signs: [
      {
        sign:
          "Bélier",

        symbol:
          "♈",

        text:
          "Mercure en Bélier favorise une pensée rapide, directe et spontanée. La personne exprime généralement ses idées avec franchise et préfère aller droit au but plutôt que de multiplier les détours.",
      },

      {
        sign:
          "Taureau",

        symbol:
          "♉",

        text:
          "Mercure en Taureau développe une pensée concrète, patiente et pragmatique. La personne prend le temps d’assimiler les informations et accorde de l’importance à la cohérence, à l’expérience et au bon sens.",
      },

      {
        sign:
          "Gémeaux",

        symbol:
          "♊",

        text:
          "Mercure en Gémeaux stimule la curiosité, la vivacité intellectuelle et le besoin d’échanger. Cette position favorise l’apprentissage, la polyvalence et la capacité à relier rapidement plusieurs idées.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Mercure en Cancer associe la pensée aux émotions, aux souvenirs et à l’intuition. La communication peut être sensible, protectrice et particulièrement attentive aux besoins affectifs des autres.",
      },

      {
        sign:
          "Lion",

        symbol:
          "♌",

        text:
          "Mercure en Lion donne une expression chaleureuse, créative et assurée. La personne aime transmettre ses idées avec conviction et peut posséder un véritable talent pour raconter, inspirer ou captiver.",
      },

      {
        sign:
          "Vierge",

        symbol:
          "♍",

        text:
          "Mercure en Vierge favorise une pensée analytique, précise et méthodique. La personne remarque facilement les détails et cherche souvent à organiser, corriger ou améliorer ce qui l’entoure.",
      },

      {
        sign:
          "Balance",

        symbol:
          "♎",

        text:
          "Mercure en Balance développe une communication diplomatique, équilibrée et attentive aux différents points de vue. La personne cherche généralement les mots justes et privilégie le dialogue.",
      },

      {
        sign:
          "Scorpion",

        symbol:
          "♏",

        text:
          "Mercure en Scorpion donne une pensée profonde, stratégique et intuitive. La personne cherche à comprendre ce qui se cache derrière les apparences et communique souvent avec intensité et lucidité.",
      },

      {
        sign:
          "Sagittaire",

        symbol:
          "♐",

        text:
          "Mercure en Sagittaire favorise une pensée expansive, enthousiaste et orientée vers le sens. La personne aime explorer de nouvelles idées, partager ses convictions et élargir ses horizons.",
      },

      {
        sign:
          "Capricorne",

        symbol:
          "♑",

        text:
          "Mercure en Capricorne développe une pensée structurée, réaliste et stratégique. La personne communique généralement avec sérieux et cherche des solutions applicables, durables et efficaces.",
      },

      {
        sign:
          "Verseau",

        symbol:
          "♒",

        text:
          "Mercure en Verseau favorise une pensée originale, indépendante et tournée vers l’avenir. La personne aime remettre en question les idées établies et explorer de nouvelles manières de comprendre le monde.",
      },

      {
        sign:
          "Poissons",

        symbol:
          "♓",

        text:
          "Mercure en Poissons associe la pensée à l’imagination, à l’intuition et à la sensibilité. La personne peut communiquer par les images, les émotions, les symboles ou une perception très subtile de son environnement.",
      },
    ],

    housesSection: {
      kicker:
        "Les domaines de votre pensée",

      title:
        "Mercure dans les 12 maisons astrologiques",

      introduction:
        "Le signe de Mercure décrit votre style mental, tandis que sa maison indique le domaine de vie dans lequel votre curiosité, votre réflexion et votre besoin de communiquer s’expriment le plus naturellement.",

      titlePrefix:
        "Mercure en",
    },

    houses: [
      {
        house:
          "Maison I",

        text:
          "Mercure en Maison I renforce la curiosité, l’expression personnelle et le besoin de communiquer. La vivacité d’esprit peut être immédiatement perceptible dans la manière d’aborder les autres.",
      },

      {
        house:
          "Maison II",

        text:
          "Mercure en Maison II relie la réflexion aux valeurs, aux ressources et à la sécurité matérielle. La personne peut chercher à utiliser ses connaissances de manière concrète et productive.",
      },

      {
        house:
          "Maison III",

        text:
          "Mercure en Maison III accentue les échanges, l’apprentissage, les déplacements et la curiosité. Cette position favorise souvent la communication, l’écriture et la transmission des connaissances.",
      },

      {
        house:
          "Maison IV",

        text:
          "Mercure en Maison IV oriente la pensée vers le foyer, les racines et l’histoire familiale. Les souvenirs, les conversations intimes et la compréhension du passé peuvent occuper une place importante.",
      },

      {
        house:
          "Maison V",

        text:
          "Mercure en Maison V encourage une communication créative, expressive et ludique. La personne peut aimer raconter, écrire, enseigner ou partager ses idées avec enthousiasme.",
      },

      {
        house:
          "Maison VI",

        text:
          "Mercure en Maison VI développe une pensée pratique, organisée et attentive aux détails. Le travail quotidien, les méthodes et l’amélioration des habitudes sollicitent fortement l’esprit.",
      },

      {
        house:
          "Maison VII",

        text:
          "Mercure en Maison VII souligne l’importance du dialogue dans les relations. La personne recherche souvent un partenaire avec qui elle peut échanger, réfléchir et résoudre les désaccords.",
      },

      {
        house:
          "Maison VIII",

        text:
          "Mercure en Maison VIII favorise une pensée profonde et investigatrice. La personne peut s’intéresser aux secrets, à la psychologie, aux transformations et aux vérités difficiles à percevoir.",
      },

      {
        house:
          "Maison IX",

        text:
          "Mercure en Maison IX stimule le besoin d’élargir ses connaissances. Les voyages, la philosophie, les cultures, les études et la recherche de sens nourrissent particulièrement l’esprit.",
      },

      {
        house:
          "Maison X",

        text:
          "Mercure en Maison X peut faire de la communication, de l’analyse ou du savoir un élément important de la vocation. La personne souhaite que ses idées soient reconnues et utiles dans la société.",
      },

      {
        house:
          "Maison XI",

        text:
          "Mercure en Maison XI favorise les échanges au sein des groupes, des réseaux et des projets collectifs. La personne aime partager des idées nouvelles et participer à une vision commune.",
      },

      {
        house:
          "Maison XII",

        text:
          "Mercure en Maison XII donne une pensée intérieure, intuitive et parfois difficile à verbaliser immédiatement. L’écriture, la solitude et l’imagination peuvent aider à clarifier les perceptions.",
      },
    ],

    retrograde: {
      kicker:
        "Révision et réflexion",

      title:
        "Que signifie Mercure rétrograde ?",

      paragraphs: [
        "Depuis la Terre, Mercure semble parfois ralentir puis reculer temporairement dans le ciel. Il s’agit d’un effet apparent lié aux mouvements relatifs de la Terre et de Mercure, et non d’un véritable changement de direction de la planète.",

        "Dans l’interprétation astrologique, les périodes de Mercure rétrograde sont souvent associées à la révision, à la réflexion et à la nécessité de vérifier plus attentivement les informations, les communications ou les décisions.",

        "Mercure rétrograde ne signifie pas que tout doit nécessairement mal fonctionner. Cette période peut plutôt inviter à ralentir, à reprendre une conversation, à revoir un document ou à clarifier une situation restée incomplète.",
      ],

      cardSymbol:
        "℞",

      cardTitle:
        "Une invitation à réviser",

      items: [
        "Vérifier les informations importantes",
        "Relire les documents et les messages",
        "Clarifier les malentendus",
        "Repenser une décision",
        "Reprendre un projet inachevé",
      ],
    },

    strengths: {
      title:
        "Les forces et les défis de Mercure",

      strengthsKicker:
        "Forces possibles",

      strengthsTitle:
        "Une pensée vivante et adaptable",

      strengths: [
        "Curiosité intellectuelle",
        "Facilité à apprendre",
        "Capacité à communiquer",
        "Souplesse mentale",
        "Sens de l’observation",
      ],

      challengesKicker:
        "Points d’attention",

      challengesTitle:
        "Canaliser l’activité mentale",

      challenges: [
        "Dispersion",
        "Nervosité intellectuelle",
        "Surcharge d’informations",
        "Tendance à suranalyser",
        "Difficulté à écouter pleinement",
      ],
    },

    aspectsSection: {
      title:
        "L’importance des aspects de Mercure",

      introduction:
        "Les aspects astrologiques relient Mercure aux autres planètes de votre thème natal. Ils apportent des nuances supplémentaires à votre manière de penser et de communiquer.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjonction",

        text:
          "Elle fusionne Mercure avec l’énergie d’une autre planète et intensifie leur expression commune.",
      },

      {
        symbol:
          "△",

        title:
          "Le trigone",

        text:
          "Il peut symboliser une circulation fluide entre la pensée et les qualités de l’autre planète.",
      },

      {
        symbol:
          "✶",

        title:
          "Le sextile",

        text:
          "Il représente un potentiel de coopération et de développement intellectuel ou relationnel.",
      },

      {
        symbol:
          "□",

        title:
          "Le carré",

        text:
          "Il peut créer une tension mentale qui pousse à développer de nouvelles stratégies de communication.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposition",

        text:
          "Elle invite à trouver un équilibre entre deux façons différentes de penser, de comprendre ou de s’exprimer.",
      },
    ],

    cta: {
      kicker:
        "Découvrez votre position",

      title:
        "Dans quel signe et quelle maison se trouve votre Mercure ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir votre Mercure, votre Soleil, votre Lune, votre Ascendant et les positions de vos principales planètes.",

      button:
        "Découvrir mon thème natal",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur Mercure en astrologie",

      items: [
        {
          question:
            "Que représente Mercure en astrologie ?",

          answer:
            "Mercure représente symboliquement la pensée, la communication, la curiosité, l’apprentissage et la manière dont une personne traite et transmet les informations.",
        },

        {
          question:
            "Que signifie le signe de Mercure ?",

          answer:
            "Le signe de Mercure décrit la manière dont votre esprit fonctionne, le ton de votre communication et la façon dont vous apprenez, analysez et partagez vos idées.",
        },

        {
          question:
            "Mercure influence-t-il seulement la communication ?",

          answer:
            "Non. Mercure est également associé au raisonnement, à la mémoire, aux déplacements, à l’adaptation, à l’écriture et à la manière de comprendre son environnement.",
        },

        {
          question:
            "Que signifie Mercure rétrograde dans un thème natal ?",

          answer:
            "Dans l’interprétation astrologique, Mercure rétrograde à la naissance peut symboliser une pensée plus intérieure, réflexive ou personnelle. Cela ne signifie pas qu’une personne communique moins bien.",
        },

        {
          question:
            "Mercure rétrograde est-il toujours négatif ?",

          answer:
            "Non. En astrologie, cette période est souvent associée à la révision, à la réflexion et à la nécessité de vérifier certaines informations. Elle n’annonce pas automatiquement des événements négatifs.",
        },

        {
          question:
            "Comment connaître mon signe de Mercure ?",

          answer:
            "Vous devez calculer votre carte du ciel à partir de votre date, de votre heure et de votre lieu de naissance afin de connaître la position exacte de Mercure.",
        },

        {
          question:
            "Pourquoi Mercure peut-il être dans un autre signe que mon Soleil ?",

          answer:
            "Les planètes se déplacent à des rythmes différents. Votre signe solaire décrit votre identité consciente, tandis que Mercure peut se trouver dans un signe voisin et décrire une autre manière de penser.",
        },
      ],
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Mercury in Astrology: Communication, Thought and Intelligence | Luna Astralis",

      description:
        "Discover the meaning of Mercury in astrology, its influence on communication, thought and learning, and its expression through the 12 zodiac signs.",

      ogTitle:
        "Mercury in Astrology: Thought, Communication and Intelligence",

      ogDescription:
        "Understand Mercury’s role in your birth chart and discover how this planet influences the way you think, communicate and learn.",

      twitterTitle:
        "Mercury in Astrology | Luna Astralis",

      twitterDescription:
        "Discover how Mercury influences your thinking, communication and way of learning.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Mercury in Astrology: Communication, Thought and Intelligence",

      description:
        "A complete guide to Mercury’s role in the birth chart and its expression through the twelve zodiac signs and twelve astrological houses.",
    },

    hero: {
      badge:
        "☿ Planets and birth chart",

      title:
        "Mercury in Astrology",

      lead:
        "Mercury represents the way you think, learn, communicate and understand the world around you.",

      createChart:
        "Create my free birth chart",

      seeSigns:
        "See the 12 signs",
    },

    introduction: {
      kicker:
        "Understand your mind",

      title:
        "What does Mercury represent in a birth chart?",

      paragraphs: [
        "In astrology, Mercury symbolizes thought, intelligence, communication and the way a person gathers, organizes and transmits information.",

        "Its position in your birth chart describes how you think, learn, ask questions and share ideas. It may also reveal your communication style, mental rhythm and the subjects that naturally awaken your curiosity.",

        "Mercury does not determine your intelligence. Its astrological role is instead to represent the form your thinking takes and the way you use your intellectual abilities in everyday life.",
      ],
    },

    thought: {
      title:
        "Mercury, thought and communication",

      cards: [
        {
          symbol:
            "☿",

          title:
            "Your way of thinking",

          text:
            "Mercury describes how you analyze a situation, establish connections and mentally organize information.",
        },

        {
          symbol:
            "✦",

          title:
            "Your communication",

          text:
            "It reveals the way you speak, write, listen and communicate your thoughts to others.",
        },

        {
          symbol:
            "✧",

          title:
            "Your learning",

          text:
            "Mercury shows how your curiosity awakens and how you most easily absorb new knowledge.",
        },
      ],
    },

    functions: {
      title:
        "Mercury’s main functions",

      cards: [
        {
          number:
            "01",

          title:
            "Observe",

          text:
            "Mercury gathers information from the environment and notices details that are useful for understanding.",
        },

        {
          number:
            "02",

          title:
            "Understand",

          text:
            "It organizes ideas, compares facts and seeks to give experiences a logical or personal structure.",
        },

        {
          number:
            "03",

          title:
            "Communicate",

          text:
            "Mercury transforms thought into words, writing, gestures or understandable messages.",
        },

        {
          number:
            "04",

          title:
            "Adapt",

          text:
            "It symbolizes the ability to change perspective, learn and respond quickly to change.",
        },
      ],
    },

    planets: {
      title:
        "Mercury, the Sun and the Moon",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "The Sun",

          text:
            "It represents your conscious identity, willpower and the direction you seek to give your life.",

          link:
            "Discover the Sun",
        },

        {
          symbol:
            "🌙",

          title:
            "The Moon",

          text:
            "It describes your emotional world, instinctive reactions and need for emotional security.",

          link:
            "Discover the Moon",
        },

        {
          symbol:
            "☿",

          title:
            "Mercury",

          text:
            "It reveals your mental functioning, way of communicating and manner of processing information.",
        },
      ],
    },

    signsSection: {
      kicker:
        "The twelve expressions of Mercury",

      title:
        "Mercury in the 12 zodiac signs",

      introduction:
        "Mercury always retains its function of thought, communication and learning. The zodiac sign it occupies describes the particular way these abilities are expressed.",

      titlePrefix:
        "Mercury in",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Mercury in Aries encourages quick, direct and spontaneous thinking. The person generally expresses ideas frankly and prefers getting straight to the point rather than taking unnecessary detours.",
      },

      {
        sign:
          "Taurus",

        symbol:
          "♉",

        text:
          "Mercury in Taurus develops concrete, patient and practical thinking. The person takes time to absorb information and values consistency, experience and common sense.",
      },

      {
        sign:
          "Gemini",

        symbol:
          "♊",

        text:
          "Mercury in Gemini stimulates curiosity, intellectual liveliness and the need to exchange ideas. This position encourages learning, versatility and the ability to connect several ideas quickly.",
      },

      {
        sign:
          "Cancer",

        symbol:
          "♋",

        text:
          "Mercury in Cancer connects thought with emotions, memories and intuition. Communication may be sensitive, protective and especially attentive to the emotional needs of others.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Mercury in Leo gives a warm, creative and confident form of expression. The person enjoys communicating ideas with conviction and may possess a true talent for storytelling, inspiring or captivating others.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Mercury in Virgo encourages analytical, precise and methodical thinking. The person easily notices details and often seeks to organize, correct or improve the surrounding environment.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Mercury in Libra develops diplomatic, balanced communication that considers different points of view. The person generally seeks the right words and favors dialogue.",
      },

      {
        sign:
          "Scorpio",

        symbol:
          "♏",

        text:
          "Mercury in Scorpio gives deep, strategic and intuitive thinking. The person seeks to understand what lies beneath appearances and often communicates with intensity and insight.",
      },

      {
        sign:
          "Sagittarius",

        symbol:
          "♐",

        text:
          "Mercury in Sagittarius encourages expansive, enthusiastic and meaning-oriented thinking. The person enjoys exploring new ideas, sharing beliefs and broadening horizons.",
      },

      {
        sign:
          "Capricorn",

        symbol:
          "♑",

        text:
          "Mercury in Capricorn develops structured, realistic and strategic thinking. The person generally communicates seriously and seeks practical, lasting and effective solutions.",
      },

      {
        sign:
          "Aquarius",

        symbol:
          "♒",

        text:
          "Mercury in Aquarius encourages original, independent and future-oriented thinking. The person enjoys questioning established ideas and exploring new ways of understanding the world.",
      },

      {
        sign:
          "Pisces",

        symbol:
          "♓",

        text:
          "Mercury in Pisces connects thought with imagination, intuition and sensitivity. The person may communicate through images, emotions, symbols or a very subtle perception of the environment.",
      },
    ],

    housesSection: {
      kicker:
        "The areas of your thinking",

      title:
        "Mercury in the 12 astrological houses",

      introduction:
        "Mercury’s sign describes your mental style, while its house indicates the area of life in which your curiosity, reflection and need to communicate are expressed most naturally.",

      titlePrefix:
        "Mercury in",
    },

    houses: [
      {
        house:
          "House I",

        text:
          "Mercury in House I strengthens curiosity, self-expression and the need to communicate. Mental liveliness may be immediately noticeable in the way the person approaches others.",
      },

      {
        house:
          "House II",

        text:
          "Mercury in House II connects thought with values, resources and material security. The person may seek to use knowledge in practical and productive ways.",
      },

      {
        house:
          "House III",

        text:
          "Mercury in House III emphasizes exchange, learning, movement and curiosity. This position often supports communication, writing and the sharing of knowledge.",
      },

      {
        house:
          "House IV",

        text:
          "Mercury in House IV directs thought toward home, roots and family history. Memories, intimate conversations and understanding the past may hold an important place.",
      },

      {
        house:
          "House V",

        text:
          "Mercury in House V encourages creative, expressive and playful communication. The person may enjoy storytelling, writing, teaching or sharing ideas enthusiastically.",
      },

      {
        house:
          "House VI",

        text:
          "Mercury in House VI develops practical, organized and detail-oriented thinking. Daily work, methods and improving habits strongly engage the mind.",
      },

      {
        house:
          "House VII",

        text:
          "Mercury in House VII emphasizes the importance of dialogue in relationships. The person often seeks a partner with whom they can exchange ideas, reflect and resolve disagreements.",
      },

      {
        house:
          "House VIII",

        text:
          "Mercury in House VIII encourages deep and investigative thinking. The person may be interested in secrets, psychology, transformation and truths that are difficult to perceive.",
      },

      {
        house:
          "House IX",

        text:
          "Mercury in House IX stimulates the need to broaden knowledge. Travel, philosophy, cultures, study and the search for meaning strongly nourish the mind.",
      },

      {
        house:
          "House X",

        text:
          "Mercury in House X may make communication, analysis or knowledge an important part of a vocation. The person wants their ideas to be recognized and useful in society.",
      },

      {
        house:
          "House XI",

        text:
          "Mercury in House XI encourages exchange within groups, networks and collective projects. The person enjoys sharing new ideas and participating in a common vision.",
      },

      {
        house:
          "House XII",

        text:
          "Mercury in House XII gives inward, intuitive thinking that may be difficult to verbalize immediately. Writing, solitude and imagination may help clarify perceptions.",
      },
    ],

    retrograde: {
      kicker:
        "Review and reflection",

      title:
        "What does retrograde Mercury mean?",

      paragraphs: [
        "From Earth, Mercury sometimes appears to slow down and temporarily move backward in the sky. This is an apparent effect caused by the relative movements of Earth and Mercury, not an actual change in the planet’s direction.",

        "In astrological interpretation, Mercury retrograde periods are often associated with review, reflection and the need to verify information, communication or decisions more carefully.",

        "Mercury retrograde does not mean that everything must necessarily go wrong. This period may instead invite you to slow down, resume a conversation, review a document or clarify an unfinished situation.",
      ],

      cardSymbol:
        "℞",

      cardTitle:
        "An invitation to review",

      items: [
        "Verify important information",
        "Reread documents and messages",
        "Clarify misunderstandings",
        "Reconsider a decision",
        "Resume an unfinished project",
      ],
    },

    strengths: {
      title:
        "Mercury’s strengths and challenges",

      strengthsKicker:
        "Possible strengths",

      strengthsTitle:
        "A lively and adaptable mind",

      strengths: [
        "Intellectual curiosity",
        "Ease of learning",
        "Communication ability",
        "Mental flexibility",
        "Sense of observation",
      ],

      challengesKicker:
        "Points of attention",

      challengesTitle:
        "Channel mental activity",

      challenges: [
        "Scattered attention",
        "Intellectual nervousness",
        "Information overload",
        "Tendency to overanalyze",
        "Difficulty listening fully",
      ],
    },

    aspectsSection: {
      title:
        "The importance of Mercury’s aspects",

      introduction:
        "Astrological aspects connect Mercury with the other planets in your birth chart. They add further nuance to the way you think and communicate.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "The conjunction",

        text:
          "It merges Mercury with the energy of another planet and intensifies their shared expression.",
      },

      {
        symbol:
          "△",

        title:
          "The trine",

        text:
          "It may symbolize a smooth flow between thought and the qualities of the other planet.",
      },

      {
        symbol:
          "✶",

        title:
          "The sextile",

        text:
          "It represents potential for cooperation and intellectual or relational development.",
      },

      {
        symbol:
          "□",

        title:
          "The square",

        text:
          "It may create mental tension that encourages the development of new communication strategies.",
      },

      {
        symbol:
          "☍",

        title:
          "The opposition",

        text:
          "It invites balance between two different ways of thinking, understanding or expressing oneself.",
      },
    ],

    cta: {
      kicker:
        "Discover your position",

      title:
        "Which sign and house contain your Mercury?",

      text:
        "Generate your free birth chart to discover your Mercury, Sun, Moon, Ascendant and the positions of your main planets.",

      button:
        "Discover my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about Mercury in astrology",

      items: [
        {
          question:
            "What does Mercury represent in astrology?",

          answer:
            "Mercury symbolically represents thought, communication, curiosity, learning and the way a person processes and transmits information.",
        },

        {
          question:
            "What does Mercury’s sign mean?",

          answer:
            "Mercury’s sign describes how your mind functions, the tone of your communication and the way you learn, analyze and share ideas.",
        },

        {
          question:
            "Does Mercury influence only communication?",

          answer:
            "No. Mercury is also associated with reasoning, memory, movement, adaptation, writing and the way you understand your environment.",
        },

        {
          question:
            "What does retrograde Mercury mean in a birth chart?",

          answer:
            "In astrological interpretation, natal retrograde Mercury may symbolize a more inward, reflective or personal way of thinking. It does not mean that a person communicates less effectively.",
        },

        {
          question:
            "Is Mercury retrograde always negative?",

          answer:
            "No. In astrology, this period is often associated with review, reflection and the need to verify certain information. It does not automatically predict negative events.",
        },

        {
          question:
            "How can I find my Mercury sign?",

          answer:
            "You must calculate your birth chart using your date, time and place of birth to determine Mercury’s exact position.",
        },

        {
          question:
            "Why can Mercury be in a different sign from my Sun?",

          answer:
            "The planets move at different speeds. Your Sun sign describes your conscious identity, while Mercury may be in a neighboring sign and describe a different way of thinking.",
        },
      ],
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Mercurio en astrología: comunicación, pensamiento e inteligencia | Luna Astralis",

      description:
        "Descubre el significado de Mercurio en astrología, su influencia sobre la comunicación, el pensamiento y el aprendizaje, y su expresión en los 12 signos del zodiaco.",

      ogTitle:
        "Mercurio en astrología: pensamiento, comunicación e inteligencia",

      ogDescription:
        "Comprende el papel de Mercurio en tu carta natal y descubre cómo este planeta influye en tu manera de pensar, comunicarte y aprender.",

      twitterTitle:
        "Mercurio en astrología | Luna Astralis",

      twitterDescription:
        "Descubre cómo Mercurio influye en tu pensamiento, tu comunicación y tu manera de aprender.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "Mercurio en astrología: comunicación, pensamiento e inteligencia",

      description:
        "Guía completa sobre el papel de Mercurio en la carta natal y su expresión en los doce signos y las doce casas astrológicas.",
    },

    hero: {
      badge:
        "☿ Planetas y carta natal",

      title:
        "Mercurio en astrología",

      lead:
        "Mercurio representa tu manera de pensar, aprender, comunicarte y comprender el mundo que te rodea.",

      createChart:
        "Crear mi carta natal gratis",

      seeSigns:
        "Ver los 12 signos",
    },

    introduction: {
      kicker:
        "Comprender tu mente",

      title:
        "¿Qué representa Mercurio en una carta natal?",

      paragraphs: [
        "En astrología, Mercurio simboliza el pensamiento, la inteligencia, la comunicación y la manera en que una persona recoge, organiza y transmite la información.",

        "Su posición en tu carta natal describe tu manera de reflexionar, aprender, hacer preguntas y compartir ideas. También puede revelar tu estilo de comunicación, tu ritmo mental y los temas que despiertan naturalmente tu curiosidad.",

        "Mercurio no determina tu inteligencia. Su función astrológica consiste más bien en representar la forma que adopta tu pensamiento y la manera en que utilizas tus facultades intelectuales en la vida cotidiana.",
      ],
    },

    thought: {
      title:
        "Mercurio, el pensamiento y la comunicación",

      cards: [
        {
          symbol:
            "☿",

          title:
            "Tu manera de pensar",

          text:
            "Mercurio describe cómo analizas una situación, estableces relaciones y organizas mentalmente la información.",
        },

        {
          symbol:
            "✦",

          title:
            "Tu comunicación",

          text:
            "Revela tu manera de hablar, escribir, escuchar y transmitir a los demás lo que piensas.",
        },

        {
          symbol:
            "✧",

          title:
            "Tu aprendizaje",

          text:
            "Mercurio muestra cómo se despierta tu curiosidad y de qué manera asimilas más fácilmente nuevos conocimientos.",
        },
      ],
    },

    functions: {
      title:
        "Las principales funciones de Mercurio",

      cards: [
        {
          number:
            "01",

          title:
            "Observar",

          text:
            "Mercurio recoge la información presente en el entorno y percibe los detalles útiles para la comprensión.",
        },

        {
          number:
            "02",

          title:
            "Comprender",

          text:
            "Clasifica las ideas, compara los hechos y busca dar una estructura lógica o personal a las experiencias.",
        },

        {
          number:
            "03",

          title:
            "Transmitir",

          text:
            "Mercurio permite transformar un pensamiento en palabras, escritos, gestos o mensajes comprensibles.",
        },

        {
          number:
            "04",

          title:
            "Adaptarse",

          text:
            "Simboliza la capacidad de modificar el punto de vista, aprender y responder rápidamente a los cambios.",
        },
      ],
    },

    planets: {
      title:
        "Mercurio, el Sol y la Luna",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "El Sol",

          text:
            "Representa tu identidad consciente, tu voluntad y la dirección que deseas dar a tu vida.",

          link:
            "Descubrir el Sol",
        },

        {
          symbol:
            "🌙",

          title:
            "La Luna",

          text:
            "Describe tu mundo emocional, tus reacciones instintivas y tus necesidades de seguridad afectiva.",

          link:
            "Descubrir la Luna",
        },

        {
          symbol:
            "☿",

          title:
            "Mercurio",

          text:
            "Revela tu funcionamiento mental, tu manera de comunicarte y tu forma de asimilar la información.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Las doce expresiones de Mercurio",

      title:
        "Mercurio en los 12 signos astrológicos",

      introduction:
        "Mercurio siempre conserva su función de pensamiento, comunicación y aprendizaje. El signo astrológico en el que se encuentra describe la manera particular en que estas facultades se expresan.",

      titlePrefix:
        "Mercurio en",
    },

    signs: [
      {
        sign:
          "Aries",

        symbol:
          "♈",

        text:
          "Mercurio en Aries favorece un pensamiento rápido, directo y espontáneo. La persona suele expresar sus ideas con franqueza y prefiere ir directamente al punto en lugar de multiplicar los rodeos.",
      },

      {
        sign:
          "Tauro",

        symbol:
          "♉",

        text:
          "Mercurio en Tauro desarrolla un pensamiento concreto, paciente y pragmático. La persona se toma el tiempo necesario para asimilar la información y valora la coherencia, la experiencia y el sentido común.",
      },

      {
        sign:
          "Géminis",

        symbol:
          "♊",

        text:
          "Mercurio en Géminis estimula la curiosidad, la vivacidad intelectual y la necesidad de intercambiar ideas. Esta posición favorece el aprendizaje, la versatilidad y la capacidad de relacionar rápidamente varias ideas.",
      },

      {
        sign:
          "Cáncer",

        symbol:
          "♋",

        text:
          "Mercurio en Cáncer relaciona el pensamiento con las emociones, los recuerdos y la intuición. La comunicación puede ser sensible, protectora y especialmente atenta a las necesidades afectivas de los demás.",
      },

      {
        sign:
          "Leo",

        symbol:
          "♌",

        text:
          "Mercurio en Leo aporta una expresión cálida, creativa y segura. La persona disfruta transmitiendo sus ideas con convicción y puede poseer un verdadero talento para narrar, inspirar o cautivar.",
      },

      {
        sign:
          "Virgo",

        symbol:
          "♍",

        text:
          "Mercurio en Virgo favorece un pensamiento analítico, preciso y metódico. La persona percibe fácilmente los detalles y suele buscar organizar, corregir o mejorar lo que la rodea.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Mercurio en Libra desarrolla una comunicación diplomática, equilibrada y atenta a los diferentes puntos de vista. La persona suele buscar las palabras adecuadas y favorecer el diálogo.",
      },

      {
        sign:
          "Escorpio",

        symbol:
          "♏",

        text:
          "Mercurio en Escorpio aporta un pensamiento profundo, estratégico e intuitivo. La persona busca comprender lo que se oculta detrás de las apariencias y suele comunicarse con intensidad y lucidez.",
      },

      {
        sign:
          "Sagitario",

        symbol:
          "♐",

        text:
          "Mercurio en Sagitario favorece un pensamiento expansivo, entusiasta y orientado hacia el sentido. La persona disfruta explorando nuevas ideas, compartiendo sus convicciones y ampliando sus horizontes.",
      },

      {
        sign:
          "Capricornio",

        symbol:
          "♑",

        text:
          "Mercurio en Capricornio desarrolla un pensamiento estructurado, realista y estratégico. La persona suele comunicarse con seriedad y busca soluciones aplicables, duraderas y eficaces.",
      },

      {
        sign:
          "Acuario",

        symbol:
          "♒",

        text:
          "Mercurio en Acuario favorece un pensamiento original, independiente y orientado hacia el futuro. La persona disfruta cuestionando las ideas establecidas y explorando nuevas maneras de comprender el mundo.",
      },

      {
        sign:
          "Piscis",

        symbol:
          "♓",

        text:
          "Mercurio en Piscis relaciona el pensamiento con la imaginación, la intuición y la sensibilidad. La persona puede comunicarse mediante imágenes, emociones, símbolos o una percepción muy sutil de su entorno.",
      },
    ],

    housesSection: {
      kicker:
        "Los ámbitos de tu pensamiento",

      title:
        "Mercurio en las 12 casas astrológicas",

      introduction:
        "El signo de Mercurio describe tu estilo mental, mientras que su casa indica el ámbito de vida en el que tu curiosidad, tu reflexión y tu necesidad de comunicarte se expresan con mayor naturalidad.",

      titlePrefix:
        "Mercurio en",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Mercurio en la Casa I refuerza la curiosidad, la expresión personal y la necesidad de comunicarse. La vivacidad mental puede percibirse inmediatamente en la manera de relacionarse con los demás.",
      },

      {
        house:
          "Casa II",

        text:
          "Mercurio en la Casa II relaciona la reflexión con los valores, los recursos y la seguridad material. La persona puede buscar utilizar sus conocimientos de manera concreta y productiva.",
      },

      {
        house:
          "Casa III",

        text:
          "Mercurio en la Casa III acentúa los intercambios, el aprendizaje, los desplazamientos y la curiosidad. Esta posición suele favorecer la comunicación, la escritura y la transmisión de conocimientos.",
      },

      {
        house:
          "Casa IV",

        text:
          "Mercurio en la Casa IV orienta el pensamiento hacia el hogar, las raíces y la historia familiar. Los recuerdos, las conversaciones íntimas y la comprensión del pasado pueden ocupar un lugar importante.",
      },

      {
        house:
          "Casa V",

        text:
          "Mercurio en la Casa V favorece una comunicación creativa, expresiva y lúdica. La persona puede disfrutar narrando, escribiendo, enseñando o compartiendo sus ideas con entusiasmo.",
      },

      {
        house:
          "Casa VI",

        text:
          "Mercurio en la Casa VI desarrolla un pensamiento práctico, organizado y atento a los detalles. El trabajo cotidiano, los métodos y la mejora de los hábitos estimulan intensamente la mente.",
      },

      {
        house:
          "Casa VII",

        text:
          "Mercurio en la Casa VII destaca la importancia del diálogo en las relaciones. La persona suele buscar una pareja con la que pueda intercambiar ideas, reflexionar y resolver los desacuerdos.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Mercurio en la Casa VIII favorece un pensamiento profundo e investigador. La persona puede interesarse por los secretos, la psicología, las transformaciones y las verdades difíciles de percibir.",
      },

      {
        house:
          "Casa IX",

        text:
          "Mercurio en la Casa IX estimula la necesidad de ampliar los conocimientos. Los viajes, la filosofía, las culturas, los estudios y la búsqueda de sentido alimentan especialmente la mente.",
      },

      {
        house:
          "Casa X",

        text:
          "Mercurio en la Casa X puede convertir la comunicación, el análisis o el conocimiento en una parte importante de la vocación. La persona desea que sus ideas sean reconocidas y útiles para la sociedad.",
      },

      {
        house:
          "Casa XI",

        text:
          "Mercurio en la Casa XI favorece los intercambios dentro de los grupos, las redes y los proyectos colectivos. La persona disfruta compartiendo ideas nuevas y participando en una visión común.",
      },

      {
        house:
          "Casa XII",

        text:
          "Mercurio en la Casa XII aporta un pensamiento interior, intuitivo y a veces difícil de expresar inmediatamente con palabras. La escritura, la soledad y la imaginación pueden ayudar a aclarar las percepciones.",
      },
    ],

    retrograde: {
      kicker:
        "Revisión y reflexión",

      title:
        "¿Qué significa Mercurio retrógrado?",

      paragraphs: [
        "Desde la Tierra, Mercurio a veces parece disminuir su velocidad y retroceder temporalmente en el cielo. Se trata de un efecto aparente relacionado con los movimientos relativos de la Tierra y Mercurio, y no de un verdadero cambio de dirección del planeta.",

        "En la interpretación astrológica, los períodos de Mercurio retrógrado suelen asociarse con la revisión, la reflexión y la necesidad de comprobar con mayor atención la información, las comunicaciones o las decisiones.",

        "Mercurio retrógrado no significa que todo deba funcionar mal. Este período puede invitar a reducir el ritmo, retomar una conversación, revisar un documento o aclarar una situación que quedó incompleta.",
      ],

      cardSymbol:
        "℞",

      cardTitle:
        "Una invitación a revisar",

      items: [
        "Comprobar la información importante",
        "Releer los documentos y los mensajes",
        "Aclarar los malentendidos",
        "Reconsiderar una decisión",
        "Retomar un proyecto inacabado",
      ],
    },

    strengths: {
      title:
        "Las fortalezas y los desafíos de Mercurio",

      strengthsKicker:
        "Fortalezas posibles",

      strengthsTitle:
        "Un pensamiento vivo y adaptable",

      strengths: [
        "Curiosidad intelectual",
        "Facilidad para aprender",
        "Capacidad de comunicación",
        "Flexibilidad mental",
        "Sentido de la observación",
      ],

      challengesKicker:
        "Puntos de atención",

      challengesTitle:
        "Canalizar la actividad mental",

      challenges: [
        "Dispersión",
        "Nerviosismo intelectual",
        "Sobrecarga de información",
        "Tendencia a analizar demasiado",
        "Dificultad para escuchar plenamente",
      ],
    },

    aspectsSection: {
      title:
        "La importancia de los aspectos de Mercurio",

      introduction:
        "Los aspectos astrológicos relacionan Mercurio con los demás planetas de tu carta natal. Aportan matices adicionales a tu manera de pensar y comunicarte.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La conjunción",

        text:
          "Fusiona Mercurio con la energía de otro planeta e intensifica su expresión común.",
      },

      {
        symbol:
          "△",

        title:
          "El trígono",

        text:
          "Puede simbolizar una circulación fluida entre el pensamiento y las cualidades del otro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "El sextil",

        text:
          "Representa un potencial de cooperación y desarrollo intelectual o relacional.",
      },

      {
        symbol:
          "□",

        title:
          "La cuadratura",

        text:
          "Puede crear una tensión mental que impulsa a desarrollar nuevas estrategias de comunicación.",
      },

      {
        symbol:
          "☍",

        title:
          "La oposición",

        text:
          "Invita a encontrar un equilibrio entre dos maneras diferentes de pensar, comprender o expresarse.",
      },
    ],

    cta: {
      kicker:
        "Descubre tu posición",

      title:
        "¿En qué signo y casa se encuentra tu Mercurio?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tu Mercurio, tu Sol, tu Luna, tu Ascendente y las posiciones de tus principales planetas.",

      button:
        "Descubrir mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre Mercurio en astrología",

      items: [
        {
          question:
            "¿Qué representa Mercurio en astrología?",

          answer:
            "Mercurio representa simbólicamente el pensamiento, la comunicación, la curiosidad, el aprendizaje y la manera en que una persona procesa y transmite la información.",
        },

        {
          question:
            "¿Qué significa el signo de Mercurio?",

          answer:
            "El signo de Mercurio describe la manera en que funciona tu mente, el tono de tu comunicación y la forma en que aprendes, analizas y compartes tus ideas.",
        },

        {
          question:
            "¿Mercurio influye únicamente en la comunicación?",

          answer:
            "No. Mercurio también se relaciona con el razonamiento, la memoria, los desplazamientos, la adaptación, la escritura y la manera de comprender el entorno.",
        },

        {
          question:
            "¿Qué significa Mercurio retrógrado en una carta natal?",

          answer:
            "En la interpretación astrológica, Mercurio retrógrado al nacer puede simbolizar un pensamiento más interior, reflexivo o personal. Esto no significa que una persona se comunique peor.",
        },

        {
          question:
            "¿Mercurio retrógrado es siempre negativo?",

          answer:
            "No. En astrología, este período suele relacionarse con la revisión, la reflexión y la necesidad de comprobar determinada información. No anuncia automáticamente acontecimientos negativos.",
        },

        {
          question:
            "¿Cómo conocer mi signo de Mercurio?",

          answer:
            "Debes calcular tu carta natal a partir de tu fecha, hora y lugar de nacimiento para conocer la posición exacta de Mercurio.",
        },

        {
          question:
            "¿Por qué Mercurio puede estar en un signo diferente de mi Sol?",

          answer:
            "Los planetas se desplazan a ritmos diferentes. Tu signo solar describe tu identidad consciente, mientras que Mercurio puede encontrarse en un signo cercano y describir otra manera de pensar.",
        },
      ],
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },
    de: {
    metadata: {
      title:
        "Merkur in der Astrologie: Kommunikation, Denken und Intelligenz | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung des Merkur in der Astrologie, seinen Einfluss auf Kommunikation, Denken und Lernen sowie seinen Ausdruck in den 12 Tierkreiszeichen.",

      ogTitle:
        "Merkur in der Astrologie: Denken, Kommunikation und Intelligenz",

      ogDescription:
        "Verstehen Sie die Rolle des Merkur im Geburtshoroskop und entdecken Sie, wie dieser Planet Ihre Art zu denken, zu kommunizieren und zu lernen beeinflusst.",

      twitterTitle:
        "Merkur in der Astrologie | Luna Astralis",

      twitterDescription:
        "Entdecken Sie, wie Merkur Ihr Denken, Ihre Kommunikation und Ihre Art zu lernen beeinflusst.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Merkur in der Astrologie: Kommunikation, Denken und Intelligenz",

      description:
        "Ein vollständiger Leitfaden zur Rolle des Merkur im Geburtshoroskop und seinem Ausdruck in den zwölf Tierkreiszeichen und zwölf astrologischen Häusern.",
    },

    hero: {
      badge:
        "☿ Planeten und Geburtshoroskop",

      title:
        "Merkur in der Astrologie",

      lead:
        "Merkur steht für Ihre Art zu denken, zu lernen, zu kommunizieren und die Welt um Sie herum zu verstehen.",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      seeSigns:
        "Die 12 Zeichen ansehen",
    },

    introduction: {
      kicker:
        "Ihren Geist verstehen",

      title:
        "Was bedeutet Merkur im Geburtshoroskop?",

      paragraphs: [
        "In der Astrologie symbolisiert Merkur Denken, Intelligenz, Kommunikation und die Art, wie ein Mensch Informationen sammelt, ordnet und weitergibt.",

        "Seine Position im Geburtshoroskop beschreibt, wie Sie nachdenken, lernen, Fragen stellen und Ideen teilen. Sie kann außerdem Ihren Kommunikationsstil, Ihr geistiges Tempo und die Themen zeigen, die Ihre Neugier auf natürliche Weise wecken.",

        "Merkur bestimmt nicht Ihre Intelligenz. Seine astrologische Funktion besteht vielmehr darin, die Form Ihres Denkens und die Art darzustellen, wie Sie Ihre geistigen Fähigkeiten im Alltag einsetzen.",
      ],
    },

    thought: {
      title:
        "Merkur, Denken und Kommunikation",

      cards: [
        {
          symbol:
            "☿",

          title:
            "Ihre Art zu denken",

          text:
            "Merkur beschreibt, wie Sie eine Situation analysieren, Zusammenhänge herstellen und Informationen geistig ordnen.",
        },

        {
          symbol:
            "✦",

          title:
            "Ihre Kommunikation",

          text:
            "Er zeigt, wie Sie sprechen, schreiben, zuhören und anderen vermitteln, was Sie denken.",
        },

        {
          symbol:
            "✧",

          title:
            "Ihr Lernen",

          text:
            "Merkur zeigt, wie Ihre Neugier geweckt wird und auf welche Weise Sie neues Wissen am leichtesten aufnehmen.",
        },
      ],
    },

    functions: {
      title:
        "Die wichtigsten Funktionen des Merkur",

      cards: [
        {
          number:
            "01",

          title:
            "Beobachten",

          text:
            "Merkur sammelt Informationen aus der Umgebung und erkennt Details, die für das Verständnis nützlich sind.",
        },

        {
          number:
            "02",

          title:
            "Verstehen",

          text:
            "Er ordnet Ideen, vergleicht Fakten und versucht, Erfahrungen eine logische oder persönliche Struktur zu geben.",
        },

        {
          number:
            "03",

          title:
            "Vermitteln",

          text:
            "Merkur ermöglicht es, Gedanken in Worte, Texte, Gesten oder verständliche Botschaften zu verwandeln.",
        },

        {
          number:
            "04",

          title:
            "Sich anpassen",

          text:
            "Er symbolisiert die Fähigkeit, die Sichtweise zu verändern, zu lernen und schnell auf Veränderungen zu reagieren.",
        },
      ],
    },

    planets: {
      title:
        "Merkur, die Sonne und der Mond",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Die Sonne",

          text:
            "Sie steht für Ihre bewusste Identität, Ihren Willen und die Richtung, die Sie Ihrem Leben geben möchten.",

          link:
            "Die Sonne entdecken",
        },

        {
          symbol:
            "🌙",

          title:
            "Der Mond",

          text:
            "Er beschreibt Ihre Gefühlswelt, Ihre instinktiven Reaktionen und Ihre Bedürfnisse nach emotionaler Sicherheit.",

          link:
            "Den Mond entdecken",
        },

        {
          symbol:
            "☿",

          title:
            "Merkur",

          text:
            "Er zeigt Ihre geistige Funktionsweise, Ihre Art zu kommunizieren und Ihre Weise, Informationen aufzunehmen.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Die zwölf Ausdrucksformen des Merkur",

      title:
        "Merkur in den 12 Tierkreiszeichen",

      introduction:
        "Merkur behält stets seine Funktion von Denken, Kommunikation und Lernen. Das Tierkreiszeichen, in dem er steht, beschreibt, wie sich diese Fähigkeiten ausdrücken.",

      titlePrefix:
        "Merkur in",
    },

    signs: [
      {
        sign:
          "Widder",

        symbol:
          "♈",

        text:
          "Merkur im Widder fördert schnelles, direktes und spontanes Denken. Die Person äußert ihre Ideen meist offen und kommt lieber unmittelbar zur Sache, als viele Umwege zu machen.",
      },

      {
        sign:
          "Stier",

        symbol:
          "♉",

        text:
          "Merkur im Stier entwickelt konkretes, geduldiges und pragmatisches Denken. Die Person nimmt sich Zeit, Informationen aufzunehmen, und legt Wert auf Beständigkeit, Erfahrung und gesunden Menschenverstand.",
      },

      {
        sign:
          "Zwillinge",

        symbol:
          "♊",

        text:
          "Merkur in den Zwillingen fördert Neugier, geistige Lebendigkeit und das Bedürfnis nach Austausch. Diese Position unterstützt Lernen, Vielseitigkeit und die Fähigkeit, mehrere Ideen schnell miteinander zu verbinden.",
      },

      {
        sign:
          "Krebs",

        symbol:
          "♋",

        text:
          "Merkur im Krebs verbindet Denken mit Gefühlen, Erinnerungen und Intuition. Die Kommunikation kann sensibel, beschützend und besonders aufmerksam gegenüber den emotionalen Bedürfnissen anderer sein.",
      },

      {
        sign:
          "Löwe",

        symbol:
          "♌",

        text:
          "Merkur im Löwen verleiht einen warmen, kreativen und selbstbewussten Ausdruck. Die Person vermittelt ihre Ideen gern mit Überzeugung und kann ein ausgeprägtes Talent zum Erzählen, Inspirieren oder Fesseln besitzen.",
      },

      {
        sign:
          "Jungfrau",

        symbol:
          "♍",

        text:
          "Merkur in der Jungfrau fördert analytisches, präzises und methodisches Denken. Die Person erkennt leicht Details und versucht häufig, ihre Umgebung zu ordnen, zu korrigieren oder zu verbessern.",
      },

      {
        sign:
          "Waage",

        symbol:
          "♎",

        text:
          "Merkur in der Waage entwickelt eine diplomatische, ausgewogene Kommunikation, die verschiedene Sichtweisen berücksichtigt. Die Person sucht meist nach den richtigen Worten und bevorzugt den Dialog.",
      },

      {
        sign:
          "Skorpion",

        symbol:
          "♏",

        text:
          "Merkur im Skorpion verleiht tiefes, strategisches und intuitives Denken. Die Person möchte verstehen, was sich hinter den Erscheinungen verbirgt, und kommuniziert häufig intensiv und klar.",
      },

      {
        sign:
          "Schütze",

        symbol:
          "♐",

        text:
          "Merkur im Schützen fördert expansives, enthusiastisches und sinnorientiertes Denken. Die Person erkundet gern neue Ideen, teilt ihre Überzeugungen und erweitert ihren Horizont.",
      },

      {
        sign:
          "Steinbock",

        symbol:
          "♑",

        text:
          "Merkur im Steinbock entwickelt strukturiertes, realistisches und strategisches Denken. Die Person kommuniziert meist ernsthaft und sucht anwendbare, dauerhafte und wirksame Lösungen.",
      },

      {
        sign:
          "Wassermann",

        symbol:
          "♒",

        text:
          "Merkur im Wassermann fördert originelles, unabhängiges und zukunftsorientiertes Denken. Die Person hinterfragt gern bestehende Vorstellungen und erkundet neue Wege, die Welt zu verstehen.",
      },

      {
        sign:
          "Fische",

        symbol:
          "♓",

        text:
          "Merkur in den Fischen verbindet Denken mit Fantasie, Intuition und Sensibilität. Die Person kann über Bilder, Gefühle, Symbole oder eine sehr feine Wahrnehmung ihrer Umgebung kommunizieren.",
      },
    ],

    housesSection: {
      kicker:
        "Die Bereiche Ihres Denkens",

      title:
        "Merkur in den 12 astrologischen Häusern",

      introduction:
        "Das Zeichen des Merkur beschreibt Ihren geistigen Stil, während sein Haus den Lebensbereich zeigt, in dem sich Ihre Neugier, Ihr Denken und Ihr Kommunikationsbedürfnis am natürlichsten ausdrücken.",

      titlePrefix:
        "Merkur in",
    },

    houses: [
      {
        house:
          "Haus I",

        text:
          "Merkur im ersten Haus verstärkt Neugier, Selbstausdruck und das Bedürfnis zu kommunizieren. Die geistige Lebendigkeit kann in der Art, auf andere zuzugehen, unmittelbar wahrnehmbar sein.",
      },

      {
        house:
          "Haus II",

        text:
          "Merkur im zweiten Haus verbindet Denken mit Werten, Ressourcen und materieller Sicherheit. Die Person kann versuchen, ihr Wissen konkret und produktiv einzusetzen.",
      },

      {
        house:
          "Haus III",

        text:
          "Merkur im dritten Haus verstärkt Austausch, Lernen, Bewegung und Neugier. Diese Position fördert häufig Kommunikation, Schreiben und Wissensvermittlung.",
      },

      {
        house:
          "Haus IV",

        text:
          "Merkur im vierten Haus richtet das Denken auf Zuhause, Wurzeln und Familiengeschichte. Erinnerungen, vertrauliche Gespräche und das Verständnis der Vergangenheit können eine wichtige Rolle spielen.",
      },

      {
        house:
          "Haus V",

        text:
          "Merkur im fünften Haus fördert kreative, ausdrucksstarke und spielerische Kommunikation. Die Person erzählt, schreibt, unterrichtet oder teilt ihre Ideen möglicherweise mit großer Begeisterung.",
      },

      {
        house:
          "Haus VI",

        text:
          "Merkur im sechsten Haus entwickelt praktisches, organisiertes und detailorientiertes Denken. Tägliche Arbeit, Methoden und die Verbesserung von Gewohnheiten beanspruchen den Geist stark.",
      },

      {
        house:
          "Haus VII",

        text:
          "Merkur im siebten Haus betont die Bedeutung des Dialogs in Beziehungen. Die Person sucht häufig einen Partner, mit dem sie Ideen austauschen, nachdenken und Meinungsverschiedenheiten lösen kann.",
      },

      {
        house:
          "Haus VIII",

        text:
          "Merkur im achten Haus fördert tiefgründiges und forschendes Denken. Die Person kann sich für Geheimnisse, Psychologie, Veränderungen und schwer erkennbare Wahrheiten interessieren.",
      },

      {
        house:
          "Haus IX",

        text:
          "Merkur im neunten Haus fördert das Bedürfnis, Wissen zu erweitern. Reisen, Philosophie, Kulturen, Studien und Sinnsuche nähren den Geist besonders stark.",
      },

      {
        house:
          "Haus X",

        text:
          "Merkur im zehnten Haus kann Kommunikation, Analyse oder Wissen zu einem wichtigen Bestandteil der Berufung machen. Die Person möchte, dass ihre Ideen anerkannt werden und der Gesellschaft nützen.",
      },

      {
        house:
          "Haus XI",

        text:
          "Merkur im elften Haus fördert den Austausch in Gruppen, Netzwerken und gemeinsamen Projekten. Die Person teilt gern neue Ideen und beteiligt sich an einer gemeinsamen Vision.",
      },

      {
        house:
          "Haus XII",

        text:
          "Merkur im zwölften Haus verleiht ein inneres, intuitives Denken, das sich manchmal nur schwer sofort in Worte fassen lässt. Schreiben, Alleinsein und Fantasie können helfen, Wahrnehmungen zu klären.",
      },
    ],

    retrograde: {
      kicker:
        "Überprüfung und Reflexion",

      title:
        "Was bedeutet rückläufiger Merkur?",

      paragraphs: [
        "Von der Erde aus scheint Merkur manchmal langsamer zu werden und sich vorübergehend rückwärts am Himmel zu bewegen. Dabei handelt es sich um einen scheinbaren Effekt, der durch die relativen Bewegungen von Erde und Merkur entsteht, und nicht um einen tatsächlichen Richtungswechsel des Planeten.",

        "In der astrologischen Deutung werden Phasen des rückläufigen Merkur häufig mit Überprüfung, Reflexion und der Notwendigkeit verbunden, Informationen, Kommunikation oder Entscheidungen sorgfältiger zu kontrollieren.",

        "Rückläufiger Merkur bedeutet nicht, dass zwangsläufig alles schiefgehen muss. Diese Phase kann vielmehr dazu einladen, langsamer zu werden, ein Gespräch wieder aufzunehmen, ein Dokument zu überprüfen oder eine unvollständige Situation zu klären.",
      ],

      cardSymbol:
        "℞",

      cardTitle:
        "Eine Einladung zur Überprüfung",

      items: [
        "Wichtige Informationen überprüfen",
        "Dokumente und Nachrichten erneut lesen",
        "Missverständnisse klären",
        "Eine Entscheidung überdenken",
        "Ein unvollendetes Projekt wieder aufnehmen",
      ],
    },

    strengths: {
      title:
        "Stärken und Herausforderungen des Merkur",

      strengthsKicker:
        "Mögliche Stärken",

      strengthsTitle:
        "Ein lebendiger und anpassungsfähiger Geist",

      strengths: [
        "Geistige Neugier",
        "Leichtigkeit beim Lernen",
        "Kommunikationsfähigkeit",
        "Geistige Flexibilität",
        "Beobachtungsgabe",
      ],

      challengesKicker:
        "Wichtige Lernfelder",

      challengesTitle:
        "Geistige Aktivität kanalisieren",

      challenges: [
        "Zerstreutheit",
        "Geistige Nervosität",
        "Informationsüberlastung",
        "Neigung zur Überanalyse",
        "Schwierigkeit, vollständig zuzuhören",
      ],
    },

    aspectsSection: {
      title:
        "Die Bedeutung der Merkur-Aspekte",

      introduction:
        "Astrologische Aspekte verbinden Merkur mit den anderen Planeten Ihres Geburtshoroskops. Sie verleihen Ihrer Art zu denken und zu kommunizieren zusätzliche Nuancen.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "Die Konjunktion",

        text:
          "Sie verbindet Merkur mit der Energie eines anderen Planeten und verstärkt ihren gemeinsamen Ausdruck.",
      },

      {
        symbol:
          "△",

        title:
          "Das Trigon",

        text:
          "Es kann einen fließenden Austausch zwischen dem Denken und den Eigenschaften des anderen Planeten symbolisieren.",
      },

      {
        symbol:
          "✶",

        title:
          "Das Sextil",

        text:
          "Es steht für Potenzial zu Zusammenarbeit und geistiger oder zwischenmenschlicher Entwicklung.",
      },

      {
        symbol:
          "□",

        title:
          "Das Quadrat",

        text:
          "Es kann geistige Spannung erzeugen, die zur Entwicklung neuer Kommunikationsstrategien anregt.",
      },

      {
        symbol:
          "☍",

        title:
          "Die Opposition",

        text:
          "Sie fordert dazu auf, ein Gleichgewicht zwischen zwei unterschiedlichen Arten des Denkens, Verstehens oder Ausdrucks zu finden.",
      },
    ],

    cta: {
      kicker:
        "Entdecken Sie Ihre Position",

      title:
        "In welchem Zeichen und Haus steht Ihr Merkur?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Merkur, Sonne, Mond, Aszendent und die Positionen Ihrer wichtigsten Planeten.",

      button:
        "Mein Geburtshoroskop entdecken",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zu Merkur in der Astrologie",

      items: [
        {
          question:
            "Was bedeutet Merkur in der Astrologie?",

          answer:
            "Merkur symbolisiert Denken, Kommunikation, Neugier, Lernen und die Art, wie ein Mensch Informationen verarbeitet und weitergibt.",
        },

        {
          question:
            "Was bedeutet das Zeichen des Merkur?",

          answer:
            "Das Zeichen des Merkur beschreibt, wie Ihr Geist funktioniert, welchen Ton Ihre Kommunikation besitzt und wie Sie lernen, analysieren und Ideen teilen.",
        },

        {
          question:
            "Beeinflusst Merkur nur die Kommunikation?",

          answer:
            "Nein. Merkur wird außerdem mit Denken, Erinnerung, Bewegung, Anpassung, Schreiben und der Art verbunden, wie Sie Ihre Umgebung verstehen.",
        },

        {
          question:
            "Was bedeutet rückläufiger Merkur im Geburtshoroskop?",

          answer:
            "In der astrologischen Deutung kann rückläufiger Merkur bei der Geburt ein innerlicheres, reflektierteres oder persönlicheres Denken symbolisieren. Das bedeutet nicht, dass ein Mensch schlechter kommuniziert.",
        },

        {
          question:
            "Ist rückläufiger Merkur immer negativ?",

          answer:
            "Nein. In der Astrologie wird diese Phase häufig mit Überprüfung, Reflexion und der Notwendigkeit verbunden, bestimmte Informationen sorgfältiger zu kontrollieren. Sie kündigt nicht automatisch negative Ereignisse an.",
        },

        {
          question:
            "Wie finde ich mein Merkurzeichen?",

          answer:
            "Sie müssen Ihr Geburtshoroskop anhand von Geburtsdatum, Geburtszeit und Geburtsort berechnen, um die genaue Position des Merkur zu bestimmen.",
        },

        {
          question:
            "Warum kann Merkur in einem anderen Zeichen als meine Sonne stehen?",

          answer:
            "Die Planeten bewegen sich mit unterschiedlichen Geschwindigkeiten. Ihr Sonnenzeichen beschreibt Ihre bewusste Identität, während Merkur in einem benachbarten Zeichen stehen und eine andere Art des Denkens beschreiben kann.",
        },
      ],
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Mercurio in astrologia: comunicazione, pensiero e intelligenza | Luna Astralis",

      description:
        "Scopri il significato di Mercurio in astrologia, la sua influenza sulla comunicazione, sul pensiero e sull’apprendimento e la sua espressione nei 12 segni zodiacali.",

      ogTitle:
        "Mercurio in astrologia: pensiero, comunicazione e intelligenza",

      ogDescription:
        "Comprendi il ruolo di Mercurio nel tema natale e scopri come questo pianeta influenza il tuo modo di pensare, comunicare e imparare.",

      twitterTitle:
        "Mercurio in astrologia | Luna Astralis",

      twitterDescription:
        "Scopri come Mercurio influenza il tuo pensiero, la tua comunicazione e il tuo modo di imparare.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Mercurio in astrologia: comunicazione, pensiero e intelligenza",

      description:
        "Guida completa al ruolo di Mercurio nel tema natale e alla sua espressione nei dodici segni zodiacali e nelle dodici case astrologiche.",
    },

    hero: {
      badge:
        "☿ Pianeti e tema natale",

      title:
        "Mercurio in astrologia",

      lead:
        "Mercurio rappresenta il tuo modo di pensare, imparare, comunicare e comprendere il mondo che ti circonda.",

      createChart:
        "Creare gratuitamente il mio tema natale",

      seeSigns:
        "Vedere i 12 segni",
    },

    introduction: {
      kicker:
        "Comprendere la tua mente",

      title:
        "Che cosa rappresenta Mercurio nel tema natale?",

      paragraphs: [
        "In astrologia, Mercurio simboleggia il pensiero, l’intelligenza, la comunicazione e il modo in cui una persona raccoglie, organizza e trasmette le informazioni.",

        "La sua posizione nel tema natale descrive il modo in cui rifletti, impari, poni domande e condividi le tue idee. Può inoltre rivelare il tuo stile di comunicazione, il tuo ritmo mentale e gli argomenti che risvegliano naturalmente la tua curiosità.",

        "Mercurio non determina la tua intelligenza. Il suo ruolo astrologico consiste piuttosto nel rappresentare la forma assunta dal tuo pensiero e il modo in cui utilizzi le tue capacità intellettuali nella vita quotidiana.",
      ],
    },

    thought: {
      title:
        "Mercurio, il pensiero e la comunicazione",

      cards: [
        {
          symbol:
            "☿",

          title:
            "Il tuo modo di pensare",

          text:
            "Mercurio descrive come analizzi una situazione, stabilisci collegamenti e organizzi mentalmente le informazioni.",
        },

        {
          symbol:
            "✦",

          title:
            "La tua comunicazione",

          text:
            "Rivela il tuo modo di parlare, scrivere, ascoltare e trasmettere agli altri ciò che pensi.",
        },

        {
          symbol:
            "✧",

          title:
            "Il tuo apprendimento",

          text:
            "Mercurio mostra come si risveglia la tua curiosità e in quale modo assimili più facilmente nuove conoscenze.",
        },
      ],
    },

    functions: {
      title:
        "Le principali funzioni di Mercurio",

      cards: [
        {
          number:
            "01",

          title:
            "Osservare",

          text:
            "Mercurio raccoglie le informazioni presenti nell’ambiente e nota i dettagli utili alla comprensione.",
        },

        {
          number:
            "02",

          title:
            "Comprendere",

          text:
            "Classifica le idee, confronta i fatti e cerca di dare alle esperienze una struttura logica o personale.",
        },

        {
          number:
            "03",

          title:
            "Trasmettere",

          text:
            "Mercurio permette di trasformare un pensiero in parole, scritti, gesti o messaggi comprensibili.",
        },

        {
          number:
            "04",

          title:
            "Adattarsi",

          text:
            "Simboleggia la capacità di modificare il proprio punto di vista, imparare e rispondere rapidamente ai cambiamenti.",
        },
      ],
    },

    planets: {
      title:
        "Mercurio, il Sole e la Luna",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "Il Sole",

          text:
            "Rappresenta la tua identità cosciente, la tua volontà e la direzione che cerchi di dare alla tua vita.",

          link:
            "Scoprire il Sole",
        },

        {
          symbol:
            "🌙",

          title:
            "La Luna",

          text:
            "Descrive il tuo mondo emotivo, le tue reazioni istintive e i tuoi bisogni di sicurezza affettiva.",

          link:
            "Scoprire la Luna",
        },

        {
          symbol:
            "☿",

          title:
            "Mercurio",

          text:
            "Rivela il tuo funzionamento mentale, il tuo modo di comunicare e la tua maniera di assimilare le informazioni.",
        },
      ],
    },

    signsSection: {
      kicker:
        "Le dodici espressioni di Mercurio",

      title:
        "Mercurio nei 12 segni zodiacali",

      introduction:
        "Mercurio conserva sempre la propria funzione di pensiero, comunicazione e apprendimento. Il segno zodiacale in cui si trova descrive il modo particolare in cui queste facoltà si esprimono.",

      titlePrefix:
        "Mercurio in",
    },

    signs: [
      {
        sign:
          "Ariete",

        symbol:
          "♈",

        text:
          "Mercurio in Ariete favorisce un pensiero rapido, diretto e spontaneo. La persona esprime generalmente le proprie idee con franchezza e preferisce andare subito al punto invece di moltiplicare i giri di parole.",
      },

      {
        sign:
          "Toro",

        symbol:
          "♉",

        text:
          "Mercurio in Toro sviluppa un pensiero concreto, paziente e pragmatico. La persona si prende il tempo necessario per assimilare le informazioni e attribuisce importanza alla coerenza, all’esperienza e al buon senso.",
      },

      {
        sign:
          "Gemelli",

        symbol:
          "♊",

        text:
          "Mercurio in Gemelli stimola la curiosità, la vivacità intellettuale e il bisogno di scambio. Questa posizione favorisce l’apprendimento, la versatilità e la capacità di collegare rapidamente diverse idee.",
      },

      {
        sign:
          "Cancro",

        symbol:
          "♋",

        text:
          "Mercurio in Cancro collega il pensiero alle emozioni, ai ricordi e all’intuizione. La comunicazione può essere sensibile, protettiva e particolarmente attenta ai bisogni affettivi degli altri.",
      },

      {
        sign:
          "Leone",

        symbol:
          "♌",

        text:
          "Mercurio in Leone dona un’espressione calorosa, creativa e sicura. La persona ama trasmettere le proprie idee con convinzione e può possedere un vero talento nel raccontare, ispirare o affascinare.",
      },

      {
        sign:
          "Vergine",

        symbol:
          "♍",

        text:
          "Mercurio in Vergine favorisce un pensiero analitico, preciso e metodico. La persona nota facilmente i dettagli e cerca spesso di organizzare, correggere o migliorare ciò che la circonda.",
      },

      {
        sign:
          "Bilancia",

        symbol:
          "♎",

        text:
          "Mercurio in Bilancia sviluppa una comunicazione diplomatica, equilibrata e attenta ai diversi punti di vista. La persona cerca generalmente le parole giuste e privilegia il dialogo.",
      },

      {
        sign:
          "Scorpione",

        symbol:
          "♏",

        text:
          "Mercurio in Scorpione dona un pensiero profondo, strategico e intuitivo. La persona cerca di comprendere ciò che si nasconde dietro le apparenze e comunica spesso con intensità e lucidità.",
      },

      {
        sign:
          "Sagittario",

        symbol:
          "♐",

        text:
          "Mercurio in Sagittario favorisce un pensiero espansivo, entusiasta e orientato verso il significato. La persona ama esplorare nuove idee, condividere le proprie convinzioni e ampliare i propri orizzonti.",
      },

      {
        sign:
          "Capricorno",

        symbol:
          "♑",

        text:
          "Mercurio in Capricorno sviluppa un pensiero strutturato, realistico e strategico. La persona comunica generalmente con serietà e cerca soluzioni applicabili, durature ed efficaci.",
      },

      {
        sign:
          "Acquario",

        symbol:
          "♒",

        text:
          "Mercurio in Acquario favorisce un pensiero originale, indipendente e rivolto al futuro. La persona ama mettere in discussione le idee consolidate ed esplorare nuovi modi di comprendere il mondo.",
      },

      {
        sign:
          "Pesci",

        symbol:
          "♓",

        text:
          "Mercurio in Pesci collega il pensiero all’immaginazione, all’intuizione e alla sensibilità. La persona può comunicare attraverso immagini, emozioni, simboli o una percezione molto sottile del proprio ambiente.",
      },
    ],

    housesSection: {
      kicker:
        "Gli ambiti del tuo pensiero",

      title:
        "Mercurio nelle 12 case astrologiche",

      introduction:
        "Il segno di Mercurio descrive il tuo stile mentale, mentre la sua casa indica l’ambito della vita in cui la tua curiosità, la tua riflessione e il tuo bisogno di comunicare si esprimono più naturalmente.",

      titlePrefix:
        "Mercurio in",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Mercurio in Casa I rafforza la curiosità, l’espressione personale e il bisogno di comunicare. La vivacità mentale può essere immediatamente percepibile nel modo di avvicinarsi agli altri.",
      },

      {
        house:
          "Casa II",

        text:
          "Mercurio in Casa II collega la riflessione ai valori, alle risorse e alla sicurezza materiale. La persona può cercare di utilizzare le proprie conoscenze in modo concreto e produttivo.",
      },

      {
        house:
          "Casa III",

        text:
          "Mercurio in Casa III accentua gli scambi, l’apprendimento, gli spostamenti e la curiosità. Questa posizione favorisce spesso la comunicazione, la scrittura e la trasmissione delle conoscenze.",
      },

      {
        house:
          "Casa IV",

        text:
          "Mercurio in Casa IV orienta il pensiero verso la casa, le radici e la storia familiare. I ricordi, le conversazioni intime e la comprensione del passato possono occupare un posto importante.",
      },

      {
        house:
          "Casa V",

        text:
          "Mercurio in Casa V incoraggia una comunicazione creativa, espressiva e giocosa. La persona può amare raccontare, scrivere, insegnare o condividere le proprie idee con entusiasmo.",
      },

      {
        house:
          "Casa VI",

        text:
          "Mercurio in Casa VI sviluppa un pensiero pratico, organizzato e attento ai dettagli. Il lavoro quotidiano, i metodi e il miglioramento delle abitudini impegnano fortemente la mente.",
      },

      {
        house:
          "Casa VII",

        text:
          "Mercurio in Casa VII sottolinea l’importanza del dialogo nelle relazioni. La persona cerca spesso un partner con cui scambiare idee, riflettere e risolvere i disaccordi.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Mercurio in Casa VIII favorisce un pensiero profondo e investigativo. La persona può interessarsi ai segreti, alla psicologia, alle trasformazioni e alle verità difficili da percepire.",
      },

      {
        house:
          "Casa IX",

        text:
          "Mercurio in Casa IX stimola il bisogno di ampliare le proprie conoscenze. I viaggi, la filosofia, le culture, gli studi e la ricerca di significato nutrono particolarmente la mente.",
      },

      {
        house:
          "Casa X",

        text:
          "Mercurio in Casa X può rendere la comunicazione, l’analisi o la conoscenza una parte importante della vocazione. La persona desidera che le proprie idee siano riconosciute e utili nella società.",
      },

      {
        house:
          "Casa XI",

        text:
          "Mercurio in Casa XI favorisce gli scambi all’interno dei gruppi, delle reti e dei progetti collettivi. La persona ama condividere idee nuove e partecipare a una visione comune.",
      },

      {
        house:
          "Casa XII",

        text:
          "Mercurio in Casa XII dona un pensiero interiore, intuitivo e talvolta difficile da esprimere immediatamente a parole. La scrittura, la solitudine e l’immaginazione possono aiutare a chiarire le percezioni.",
      },
    ],

    retrograde: {
      kicker:
        "Revisione e riflessione",

      title:
        "Che cosa significa Mercurio retrogrado?",

      paragraphs: [
        "Dalla Terra, Mercurio sembra talvolta rallentare e retrocedere temporaneamente nel cielo. Si tratta di un effetto apparente legato ai movimenti relativi della Terra e di Mercurio, e non di un vero cambiamento di direzione del pianeta.",

        "Nell’interpretazione astrologica, i periodi di Mercurio retrogrado sono spesso associati alla revisione, alla riflessione e alla necessità di controllare più attentamente le informazioni, le comunicazioni o le decisioni.",

        "Mercurio retrogrado non significa che tutto debba necessariamente funzionare male. Questo periodo può piuttosto invitare a rallentare, riprendere una conversazione, rivedere un documento o chiarire una situazione rimasta incompleta.",
      ],

      cardSymbol:
        "℞",

      cardTitle:
        "Un invito a rivedere",

      items: [
        "Verificare le informazioni importanti",
        "Rileggere i documenti e i messaggi",
        "Chiarire i malintesi",
        "Ripensare una decisione",
        "Riprendere un progetto incompiuto",
      ],
    },

    strengths: {
      title:
        "I punti di forza e le sfide di Mercurio",

      strengthsKicker:
        "Possibili punti di forza",

      strengthsTitle:
        "Un pensiero vivace e adattabile",

      strengths: [
        "Curiosità intellettuale",
        "Facilità di apprendimento",
        "Capacità di comunicare",
        "Flessibilità mentale",
        "Senso dell’osservazione",
      ],

      challengesKicker:
        "Punti di attenzione",

      challengesTitle:
        "Canalizzare l’attività mentale",

      challenges: [
        "Dispersione",
        "Nervosismo intellettuale",
        "Sovraccarico di informazioni",
        "Tendenza ad analizzare troppo",
        "Difficoltà ad ascoltare pienamente",
      ],
    },

    aspectsSection: {
      title:
        "L’importanza degli aspetti di Mercurio",

      introduction:
        "Gli aspetti astrologici collegano Mercurio agli altri pianeti del tuo tema natale. Aggiungono ulteriori sfumature al tuo modo di pensare e comunicare.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "La congiunzione",

        text:
          "Fonde Mercurio con l’energia di un altro pianeta e intensifica la loro espressione comune.",
      },

      {
        symbol:
          "△",

        title:
          "Il trigono",

        text:
          "Può simboleggiare un flusso armonioso tra il pensiero e le qualità dell’altro pianeta.",
      },

      {
        symbol:
          "✶",

        title:
          "Il sestile",

        text:
          "Rappresenta un potenziale di cooperazione e sviluppo intellettuale o relazionale.",
      },

      {
        symbol:
          "□",

        title:
          "La quadratura",

        text:
          "Può creare una tensione mentale che spinge a sviluppare nuove strategie di comunicazione.",
      },

      {
        symbol:
          "☍",

        title:
          "L’opposizione",

        text:
          "Invita a trovare un equilibrio tra due modi diversi di pensare, comprendere o esprimersi.",
      },
    ],

    cta: {
      kicker:
        "Scopri la tua posizione",

      title:
        "In quale segno e casa si trova il tuo Mercurio?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire Mercurio, Sole, Luna, Ascendente e le posizioni dei principali pianeti.",

      button:
        "Scoprire il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande su Mercurio in astrologia",

      items: [
        {
          question:
            "Che cosa rappresenta Mercurio in astrologia?",

          answer:
            "Mercurio rappresenta simbolicamente il pensiero, la comunicazione, la curiosità, l’apprendimento e il modo in cui una persona elabora e trasmette le informazioni.",
        },

        {
          question:
            "Che cosa significa il segno di Mercurio?",

          answer:
            "Il segno di Mercurio descrive il modo in cui funziona la tua mente, il tono della tua comunicazione e la maniera in cui impari, analizzi e condividi le idee.",
        },

        {
          question:
            "Mercurio influenza soltanto la comunicazione?",

          answer:
            "No. Mercurio è associato anche al ragionamento, alla memoria, agli spostamenti, all’adattamento, alla scrittura e al modo di comprendere il proprio ambiente.",
        },

        {
          question:
            "Che cosa significa Mercurio retrogrado nel tema natale?",

          answer:
            "Nell’interpretazione astrologica, Mercurio retrogrado alla nascita può simboleggiare un pensiero più interiore, riflessivo o personale. Ciò non significa che una persona comunichi peggio.",
        },

        {
          question:
            "Mercurio retrogrado è sempre negativo?",

          answer:
            "No. In astrologia, questo periodo è spesso associato alla revisione, alla riflessione e alla necessità di verificare determinate informazioni. Non annuncia automaticamente eventi negativi.",
        },

        {
          question:
            "Come conoscere il mio segno di Mercurio?",

          answer:
            "Devi calcolare il tuo tema natale utilizzando data, ora e luogo di nascita per conoscere la posizione esatta di Mercurio.",
        },

        {
          question:
            "Perché Mercurio può trovarsi in un segno diverso dal mio Sole?",

          answer:
            "I pianeti si muovono a velocità diverse. Il tuo segno solare descrive la tua identità cosciente, mentre Mercurio può trovarsi in un segno vicino e descrivere un altro modo di pensare.",
        },
      ],
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },
    pt: {
    metadata: {
      title:
        "Mercúrio na astrologia: comunicação, pensamento e inteligência | Luna Astralis",

      description:
        "Descubra o significado de Mercúrio na astrologia, sua influência sobre a comunicação, o pensamento e a aprendizagem, e sua expressão nos 12 signos do zodíaco.",

      ogTitle:
        "Mercúrio na astrologia: pensamento, comunicação e inteligência",

      ogDescription:
        "Compreenda o papel de Mercúrio no seu mapa natal e descubra como este planeta influencia sua maneira de pensar, se comunicar e aprender.",

      twitterTitle:
        "Mercúrio na astrologia | Luna Astralis",

      twitterDescription:
        "Descubra como Mercúrio influencia seu pensamento, sua comunicação e sua maneira de aprender.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "Mercúrio na astrologia: comunicação, pensamento e inteligência",

      description:
        "Guia completo sobre o papel de Mercúrio no mapa natal e sua expressão nos doze signos do zodíaco e nas doze casas astrológicas.",
    },

    hero: {
      badge:
        "☿ Planetas e mapa natal",

      title:
        "Mercúrio na astrologia",

      lead:
        "Mercúrio representa sua maneira de pensar, aprender, se comunicar e compreender o mundo ao seu redor.",

      createChart:
        "Criar meu mapa astral grátis",

      seeSigns:
        "Ver os 12 signos",
    },

    introduction: {
      kicker:
        "Compreender sua mente",

      title:
        "O que Mercúrio representa no mapa natal?",

      paragraphs: [
        "Na astrologia, Mercúrio simboliza o pensamento, a inteligência, a comunicação e a maneira como uma pessoa coleta, organiza e transmite informações.",

        "Sua posição no mapa natal descreve sua maneira de refletir, aprender, fazer perguntas e compartilhar ideias. Também pode revelar seu estilo de comunicação, seu ritmo mental e os assuntos que despertam naturalmente sua curiosidade.",

        "Mercúrio não determina sua inteligência. Seu papel astrológico consiste, sobretudo, em representar a forma assumida pelo seu pensamento e a maneira como você utiliza suas capacidades intelectuais no cotidiano.",
      ],
    },

    thought: {
      title:
        "Mercúrio, o pensamento e a comunicação",

      cards: [
        {
          symbol:
            "☿",

          title:
            "Sua maneira de pensar",

          text:
            "Mercúrio descreve como você analisa uma situação, estabelece conexões e organiza mentalmente as informações.",
        },

        {
          symbol:
            "✦",

          title:
            "Sua comunicação",

          text:
            "Ele revela sua maneira de falar, escrever, ouvir e transmitir aos outros aquilo que você pensa.",
        },

        {
          symbol:
            "✧",

          title:
            "Sua aprendizagem",

          text:
            "Mercúrio mostra como sua curiosidade desperta e de que maneira você assimila novos conhecimentos com mais facilidade.",
        },
      ],
    },

    functions: {
      title:
        "As principais funções de Mercúrio",

      cards: [
        {
          number:
            "01",

          title:
            "Observar",

          text:
            "Mercúrio coleta as informações presentes no ambiente e percebe os detalhes úteis para a compreensão.",
        },

        {
          number:
            "02",

          title:
            "Compreender",

          text:
            "Ele organiza as ideias, compara os fatos e procura dar uma estrutura lógica ou pessoal às experiências.",
        },

        {
          number:
            "03",

          title:
            "Transmitir",

          text:
            "Mercúrio permite transformar um pensamento em palavras, textos, gestos ou mensagens compreensíveis.",
        },

        {
          number:
            "04",

          title:
            "Adaptar-se",

          text:
            "Ele simboliza a capacidade de modificar o ponto de vista, aprender e responder rapidamente às mudanças.",
        },
      ],
    },

    planets: {
      title:
        "Mercúrio, o Sol e a Lua",

      cards: [
        {
          symbol:
            "☀️",

          title:
            "O Sol",

          text:
            "Ele representa sua identidade consciente, sua vontade e a direção que você procura dar à sua vida.",

          link:
            "Descobrir o Sol",
        },

        {
          symbol:
            "🌙",

          title:
            "A Lua",

          text:
            "Ela descreve seu mundo emocional, suas reações instintivas e suas necessidades de segurança afetiva.",

          link:
            "Descobrir a Lua",
        },

        {
          symbol:
            "☿",

          title:
            "Mercúrio",

          text:
            "Ele revela seu funcionamento mental, sua maneira de se comunicar e sua forma de assimilar informações.",
        },
      ],
    },

    signsSection: {
      kicker:
        "As doze expressões de Mercúrio",

      title:
        "Mercúrio nos 12 signos astrológicos",

      introduction:
        "Mercúrio sempre conserva sua função de pensamento, comunicação e aprendizagem. O signo astrológico em que ele se encontra descreve a maneira particular como essas capacidades se expressam.",

      titlePrefix:
        "Mercúrio em",
    },

    signs: [
      {
        sign:
          "Áries",

        symbol:
          "♈",

        text:
          "Mercúrio em Áries favorece um pensamento rápido, direto e espontâneo. A pessoa costuma expressar suas ideias com franqueza e prefere ir diretamente ao ponto em vez de fazer muitos rodeios.",
      },

      {
        sign:
          "Touro",

        symbol:
          "♉",

        text:
          "Mercúrio em Touro desenvolve um pensamento concreto, paciente e pragmático. A pessoa reserva tempo para assimilar as informações e valoriza a coerência, a experiência e o bom senso.",
      },

      {
        sign:
          "Gêmeos",

        symbol:
          "♊",

        text:
          "Mercúrio em Gêmeos estimula a curiosidade, a vivacidade intelectual e a necessidade de trocar ideias. Essa posição favorece a aprendizagem, a versatilidade e a capacidade de relacionar rapidamente várias ideias.",
      },

      {
        sign:
          "Câncer",

        symbol:
          "♋",

        text:
          "Mercúrio em Câncer relaciona o pensamento às emoções, às lembranças e à intuição. A comunicação pode ser sensível, protetora e especialmente atenta às necessidades afetivas dos outros.",
      },

      {
        sign:
          "Leão",

        symbol:
          "♌",

        text:
          "Mercúrio em Leão proporciona uma expressão calorosa, criativa e segura. A pessoa gosta de transmitir suas ideias com convicção e pode possuir verdadeiro talento para narrar, inspirar ou cativar.",
      },

      {
        sign:
          "Virgem",

        symbol:
          "♍",

        text:
          "Mercúrio em Virgem favorece um pensamento analítico, preciso e metódico. A pessoa percebe facilmente os detalhes e costuma procurar organizar, corrigir ou melhorar aquilo que está ao seu redor.",
      },

      {
        sign:
          "Libra",

        symbol:
          "♎",

        text:
          "Mercúrio em Libra desenvolve uma comunicação diplomática, equilibrada e atenta aos diferentes pontos de vista. A pessoa costuma procurar as palavras certas e privilegiar o diálogo.",
      },

      {
        sign:
          "Escorpião",

        symbol:
          "♏",

        text:
          "Mercúrio em Escorpião proporciona um pensamento profundo, estratégico e intuitivo. A pessoa procura compreender o que se esconde por trás das aparências e costuma se comunicar com intensidade e lucidez.",
      },

      {
        sign:
          "Sagitário",

        symbol:
          "♐",

        text:
          "Mercúrio em Sagitário favorece um pensamento expansivo, entusiasmado e orientado para o sentido. A pessoa gosta de explorar novas ideias, compartilhar suas convicções e ampliar seus horizontes.",
      },

      {
        sign:
          "Capricórnio",

        symbol:
          "♑",

        text:
          "Mercúrio em Capricórnio desenvolve um pensamento estruturado, realista e estratégico. A pessoa costuma se comunicar com seriedade e procurar soluções aplicáveis, duradouras e eficazes.",
      },

      {
        sign:
          "Aquário",

        symbol:
          "♒",

        text:
          "Mercúrio em Aquário favorece um pensamento original, independente e voltado para o futuro. A pessoa gosta de questionar ideias estabelecidas e explorar novas maneiras de compreender o mundo.",
      },

      {
        sign:
          "Peixes",

        symbol:
          "♓",

        text:
          "Mercúrio em Peixes relaciona o pensamento à imaginação, à intuição e à sensibilidade. A pessoa pode se comunicar por meio de imagens, emoções, símbolos ou uma percepção muito sutil do ambiente.",
      },
    ],

    housesSection: {
      kicker:
        "As áreas do seu pensamento",

      title:
        "Mercúrio nas 12 casas astrológicas",

      introduction:
        "O signo de Mercúrio descreve seu estilo mental, enquanto sua casa indica a área da vida em que sua curiosidade, sua reflexão e sua necessidade de se comunicar se expressam de maneira mais natural.",

      titlePrefix:
        "Mercúrio em",
    },

    houses: [
      {
        house:
          "Casa I",

        text:
          "Mercúrio na Casa I reforça a curiosidade, a expressão pessoal e a necessidade de se comunicar. A vivacidade mental pode ser imediatamente percebida na maneira como a pessoa se aproxima dos outros.",
      },

      {
        house:
          "Casa II",

        text:
          "Mercúrio na Casa II relaciona a reflexão aos valores, aos recursos e à segurança material. A pessoa pode procurar utilizar seus conhecimentos de maneira concreta e produtiva.",
      },

      {
        house:
          "Casa III",

        text:
          "Mercúrio na Casa III acentua as trocas, a aprendizagem, os deslocamentos e a curiosidade. Essa posição costuma favorecer a comunicação, a escrita e a transmissão de conhecimentos.",
      },

      {
        house:
          "Casa IV",

        text:
          "Mercúrio na Casa IV orienta o pensamento para o lar, as raízes e a história familiar. As lembranças, as conversas íntimas e a compreensão do passado podem ocupar um lugar importante.",
      },

      {
        house:
          "Casa V",

        text:
          "Mercúrio na Casa V incentiva uma comunicação criativa, expressiva e lúdica. A pessoa pode gostar de narrar, escrever, ensinar ou compartilhar suas ideias com entusiasmo.",
      },

      {
        house:
          "Casa VI",

        text:
          "Mercúrio na Casa VI desenvolve um pensamento prático, organizado e atento aos detalhes. O trabalho cotidiano, os métodos e a melhoria dos hábitos estimulam intensamente a mente.",
      },

      {
        house:
          "Casa VII",

        text:
          "Mercúrio na Casa VII destaca a importância do diálogo nos relacionamentos. A pessoa costuma procurar um parceiro com quem possa trocar ideias, refletir e resolver desacordos.",
      },

      {
        house:
          "Casa VIII",

        text:
          "Mercúrio na Casa VIII favorece um pensamento profundo e investigativo. A pessoa pode se interessar por segredos, psicologia, transformações e verdades difíceis de perceber.",
      },

      {
        house:
          "Casa IX",

        text:
          "Mercúrio na Casa IX estimula a necessidade de ampliar os conhecimentos. Viagens, filosofia, culturas, estudos e busca de sentido alimentam especialmente a mente.",
      },

      {
        house:
          "Casa X",

        text:
          "Mercúrio na Casa X pode transformar a comunicação, a análise ou o conhecimento em uma parte importante da vocação. A pessoa deseja que suas ideias sejam reconhecidas e úteis para a sociedade.",
      },

      {
        house:
          "Casa XI",

        text:
          "Mercúrio na Casa XI favorece as trocas dentro de grupos, redes e projetos coletivos. A pessoa gosta de compartilhar ideias novas e participar de uma visão comum.",
      },

      {
        house:
          "Casa XII",

        text:
          "Mercúrio na Casa XII proporciona um pensamento interior, intuitivo e às vezes difícil de expressar imediatamente com palavras. A escrita, a solidão e a imaginação podem ajudar a esclarecer as percepções.",
      },
    ],

    retrograde: {
      kicker:
        "Revisão e reflexão",

      title:
        "O que significa Mercúrio retrógrado?",

      paragraphs: [
        "A partir da Terra, Mercúrio às vezes parece desacelerar e se mover temporariamente para trás no céu. Trata-se de um efeito aparente ligado aos movimentos relativos da Terra e de Mercúrio, e não de uma verdadeira mudança de direção do planeta.",

        "Na interpretação astrológica, os períodos de Mercúrio retrógrado costumam ser associados à revisão, à reflexão e à necessidade de verificar com mais atenção as informações, as comunicações ou as decisões.",

        "Mercúrio retrógrado não significa que tudo necessariamente dará errado. Esse período pode convidar a desacelerar, retomar uma conversa, revisar um documento ou esclarecer uma situação que permaneceu incompleta.",
      ],

      cardSymbol:
        "℞",

      cardTitle:
        "Um convite para revisar",

      items: [
        "Verificar as informações importantes",
        "Reler documentos e mensagens",
        "Esclarecer mal-entendidos",
        "Reconsiderar uma decisão",
        "Retomar um projeto inacabado",
      ],
    },

    strengths: {
      title:
        "As forças e os desafios de Mercúrio",

      strengthsKicker:
        "Possíveis forças",

      strengthsTitle:
        "Um pensamento vivo e adaptável",

      strengths: [
        "Curiosidade intelectual",
        "Facilidade para aprender",
        "Capacidade de comunicação",
        "Flexibilidade mental",
        "Sentido de observação",
      ],

      challengesKicker:
        "Pontos de atenção",

      challengesTitle:
        "Canalizar a atividade mental",

      challenges: [
        "Dispersão",
        "Nervosismo intelectual",
        "Sobrecarga de informações",
        "Tendência a analisar excessivamente",
        "Dificuldade para ouvir plenamente",
      ],
    },

    aspectsSection: {
      title:
        "A importância dos aspectos de Mercúrio",

      introduction:
        "Os aspectos astrológicos ligam Mercúrio aos outros planetas do seu mapa natal. Eles acrescentam nuances à sua maneira de pensar e se comunicar.",
    },

    aspects: [
      {
        symbol:
          "☌",

        title:
          "A conjunção",

        text:
          "Ela funde Mercúrio com a energia de outro planeta e intensifica sua expressão conjunta.",
      },

      {
        symbol:
          "△",

        title:
          "O trígono",

        text:
          "Ele pode simbolizar uma circulação fluida entre o pensamento e as qualidades do outro planeta.",
      },

      {
        symbol:
          "✶",

        title:
          "O sextil",

        text:
          "Ele representa um potencial de cooperação e desenvolvimento intelectual ou relacional.",
      },

      {
        symbol:
          "□",

        title:
          "A quadratura",

        text:
          "Ela pode criar uma tensão mental que estimula o desenvolvimento de novas estratégias de comunicação.",
      },

      {
        symbol:
          "☍",

        title:
          "A oposição",

        text:
          "Ela convida a encontrar equilíbrio entre duas maneiras diferentes de pensar, compreender ou se expressar.",
      },
    ],

    cta: {
      kicker:
        "Descubra sua posição",

      title:
        "Em qual signo e casa está seu Mercúrio?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir Mercúrio, Sol, Lua, Ascendente e as posições dos seus principais planetas.",

      button:
        "Descobrir meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre Mercúrio na astrologia",

      items: [
        {
          question:
            "O que Mercúrio representa na astrologia?",

          answer:
            "Mercúrio representa simbolicamente o pensamento, a comunicação, a curiosidade, a aprendizagem e a maneira como uma pessoa processa e transmite informações.",
        },

        {
          question:
            "O que significa o signo de Mercúrio?",

          answer:
            "O signo de Mercúrio descreve a maneira como sua mente funciona, o tom da sua comunicação e a forma como você aprende, analisa e compartilha ideias.",
        },

        {
          question:
            "Mercúrio influencia apenas a comunicação?",

          answer:
            "Não. Mercúrio também está associado ao raciocínio, à memória, aos deslocamentos, à adaptação, à escrita e à maneira de compreender o ambiente.",
        },

        {
          question:
            "O que significa Mercúrio retrógrado no mapa natal?",

          answer:
            "Na interpretação astrológica, Mercúrio retrógrado no nascimento pode simbolizar um pensamento mais interior, reflexivo ou pessoal. Isso não significa que uma pessoa se comunique pior.",
        },

        {
          question:
            "Mercúrio retrógrado é sempre negativo?",

          answer:
            "Não. Na astrologia, esse período costuma ser associado à revisão, à reflexão e à necessidade de verificar determinadas informações. Ele não anuncia automaticamente acontecimentos negativos.",
        },

        {
          question:
            "Como descobrir meu signo de Mercúrio?",

          answer:
            "Você deve calcular seu mapa natal usando sua data, hora e local de nascimento para conhecer a posição exata de Mercúrio.",
        },

        {
          question:
            "Por que Mercúrio pode estar em um signo diferente do meu Sol?",

          answer:
            "Os planetas se movimentam em velocidades diferentes. Seu signo solar descreve sua identidade consciente, enquanto Mercúrio pode estar em um signo próximo e descrever outra maneira de pensar.",
        },
      ],
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
