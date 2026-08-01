// i18n/pages/astrologie/conjonction.ts

import type {
  Locale,
} from "@/i18n/config";

export type ConjunctionExample = {
  planets: string;
  symbol: string;
  keywords: string;
  text: string;
};

export type ConjunctionReadingStep = {
  number: string;
  title: string;
  text: string;
};

export type ConjunctionPolarityCard = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type ConjunctionMethodItem = {
  number: string;
  title: string;
  text: string;
};

export type ConjunctionOrbCard = {
  value: string;
  title: string;
  text: string;
};

export type ConjunctionSignCard = {
  label: string;
  signs: string;
  text: string;
};

export type ConjunctionHouseCard = {
  title: string;
  text: string;
};

export type ConjunctionFaqItem = {
  question: string;
  answer: string;
};

export type ConjunctionPageText = {
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

  breadcrumb: {
    ariaLabel: string;
    home: string;
    aspects: string;
    current: string;
  };

  hero: {
    badge: string;
    title: string;
    lead: string;
    angleLabel: string;
    angleValue: string;
    dynamicLabel: string;
    dynamicValue: string;
    functionLabel: string;
    functionValue: string;
    createChart: string;
    understandConjunction: string;
  };

  meaning: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  functioning: {
    title: string;
    steps: ConjunctionReadingStep[];
  };

  polarity: {
    kicker: string;
    title: string;
    introduction: string;
    cards: ConjunctionPolarityCard[];
  };

  interpretation: {
    kicker: string;
    title: string;
    methods: ConjunctionMethodItem[];
  };

  orb: {
    title: string;
    introduction: string;
    cards: ConjunctionOrbCard[];
    conclusion: string;
  };

  examplesSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  examples: ConjunctionExample[];

  signsSection: {
    title: string;
    introduction: string;
    signs: ConjunctionSignCard[];
  };

  housesSection: {
    title: string;
    introduction: string;
    houses: ConjunctionHouseCard[];
  };

  stellium: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
  };

  transits: {
    title: string;
    paragraphs: string[];
  };

  cta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };

  faq: {
    kicker: string;
    title: string;
    items: ConjunctionFaqItem[];
  };

  navigation: {
    ariaLabel: string;
    previous: string;
    next: string;
  };

  disclaimer: string;
};

export const CONJONCTION_TRANSLATIONS:
  Record<
    Locale,
    ConjunctionPageText
  > = {
  fr: {
    metadata: {
      title:
        "La conjonction en astrologie : signification dans le thème natal | Luna Astralis",

      description:
        "Découvrez la signification de la conjonction en astrologie, son angle de 0°, ses effets entre les planètes et son interprétation dans un thème natal.",

      ogTitle:
        "La conjonction en astrologie : fusion et intensité planétaire",

      ogDescription:
        "Comprenez comment la conjonction fusionne les énergies de deux planètes et influence leur expression dans une carte du ciel.",

      twitterTitle:
        "La conjonction en astrologie | Luna Astralis",

      twitterDescription:
        "Angle de 0°, fusion des planètes, intensité et exemples d’interprétation dans le thème natal.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "La conjonction en astrologie : signification dans le thème natal",

      description:
        "Guide complet pour comprendre la conjonction astrologique, son angle de 0 degré, son orbe et son interprétation entre les planètes.",
    },

    breadcrumb: {
      ariaLabel:
        "Fil d’Ariane",

      home:
        "Accueil",

      aspects:
        "Aspects",

      current:
        "Conjonction",
    },

    hero: {
      badge:
        "✦ Aspect astrologique majeur",

      title:
        "La conjonction en astrologie",

      lead:
        "La conjonction se forme lorsque deux planètes occupent presque le même degré du zodiaque. Leurs énergies fusionnent, se renforcent et deviennent profondément liées dans le thème natal.",

      angleLabel:
        "Angle",

      angleValue:
        "0°",

      dynamicLabel:
        "Dynamique",

      dynamicValue:
        "Fusion",

      functionLabel:
        "Fonction",

      functionValue:
        "Intensification",

      createChart:
        "Créer ma carte du ciel gratuite",

      understandConjunction:
        "Comprendre la conjonction",
    },

    meaning: {
      kicker:
        "Une fusion planétaire",

      title:
        "Que signifie une conjonction en astrologie ?",

      paragraphs: [
        "La conjonction est un aspect qui se forme lorsque deux planètes sont situées très près l’une de l’autre dans le cercle zodiacal. L’angle exact de la conjonction est de 0 degré, mais une certaine marge, appelée orbe, est généralement acceptée.",

        "Dans une conjonction, les fonctions symboliques des deux planètes se mélangent. Elles ne fonctionnent plus de manière totalement séparée. Elles forment une combinaison unique qui peut devenir très visible dans le caractère, les décisions ou les expériences de la personne.",

        "Une conjonction peut être fluide, intense, exigeante ou ambivalente. Son interprétation dépend surtout de la nature des planètes impliquées, du signe dans lequel elles se trouvent, de la maison concernée et des autres aspects qui les touchent.",
      ],
    },

    functioning: {
      title:
        "Comment fonctionne la conjonction ?",

      steps: [
        {
          number:
            "01",

          title:
            "Les énergies fusionnent",

          text:
            "Les deux planètes agissent ensemble et deviennent difficiles à séparer dans l’interprétation.",
        },

        {
          number:
            "02",

          title:
            "Leur intensité augmente",

          text:
            "La zone du thème occupée par la conjonction reçoit une forte concentration d’énergie.",
        },

        {
          number:
            "03",

          title:
            "Les fonctions se colorent",

          text:
            "Chaque planète influence la manière dont l’autre se manifeste et exprime sa fonction.",
        },

        {
          number:
            "04",

          title:
            "Le thème devient plus concentré",

          text:
            "La maison et le signe de la conjonction peuvent devenir des éléments dominants du thème natal.",
        },
      ],
    },

    polarity: {
      kicker:
        "Une énergie neutre à l’origine",

      title:
        "La conjonction est-elle harmonieuse ou difficile ?",

      introduction:
        "Contrairement au trigone, au sextile, au carré ou à l’opposition, la conjonction n’est pas automatiquement classée comme harmonieuse ou dynamique. Elle agit principalement comme un amplificateur.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Une conjonction fluide",

          paragraphs: [
            "Lorsque les fonctions des planètes s’accordent facilement, la conjonction peut créer une force naturelle, cohérente et productive.",

            "Par exemple, Mercure conjoint à Vénus peut relier la pensée, la communication, l’esthétique et la diplomatie.",
          ],
        },

        {
          symbol:
            "⚡",

          title:
            "Une conjonction exigeante",

          paragraphs: [
            "Lorsque les planètes ont des fonctions très différentes, leur fusion peut produire une tension intérieure ou une énergie plus difficile à contrôler.",

            "Mars conjoint à Saturne peut par exemple créer un conflit entre l’impulsion d’agir et le besoin de ralentir ou de se contrôler.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Les éléments à observer",

      title:
        "Comment interpréter une conjonction dans un thème natal ?",

      methods: [
        {
          number:
            "1",

          title:
            "Identifier les deux planètes",

          text:
            "Chaque planète représente une fonction particulière. Il faut d’abord comprendre ce que chacune symbolise avant d’étudier leur combinaison.",
        },

        {
          number:
            "2",

          title:
            "Observer leur signe",

          text:
            "Le signe décrit la manière dont les deux planètes conjointes expriment leur énergie commune.",
        },

        {
          number:
            "3",

          title:
            "Étudier leur maison",

          text:
            "La maison révèle le domaine de vie dans lequel la conjonction se manifeste avec le plus de force.",
        },

        {
          number:
            "4",

          title:
            "Vérifier la précision",

          text:
            "Plus les planètes sont proches de l’angle exact de 0 degré, plus leur fusion est généralement considérée comme intense.",
        },

        {
          number:
            "5",

          title:
            "Examiner les autres aspects",

          text:
            "Un carré, un trigone ou une opposition formé avec une autre planète peut modifier la façon dont la conjonction s’exprime.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe de la conjonction",

      introduction:
        "L’orbe est l’écart entre la position réelle des planètes et l’angle exact de 0 degré. Les pratiques varient, mais une conjonction peut souvent être étudiée jusqu’à environ 8 degrés.",

      cards: [
        {
          value:
            "0° à 2°",

          title:
            "Conjonction très serrée",

          text:
            "La fusion est très forte. Les planètes fonctionnent presque comme une seule unité dans le thème natal.",
        },

        {
          value:
            "3° à 5°",

          title:
            "Conjonction forte",

          text:
            "L’aspect reste clairement perceptible et peut occuper une place importante dans la personnalité.",
        },

        {
          value:
            "6° à 8°",

          title:
            "Conjonction plus large",

          text:
            "L’aspect peut encore être retenu, particulièrement lorsque le Soleil ou la Lune est impliqué.",
        },
      ],

      conclusion:
        "Une conjonction très précise est souvent plus visible, mais l’orbe ne doit jamais être étudié seul. La nature des planètes et leur rôle dans l’ensemble du thème restent essentiels.",
    },

    examplesSection: {
      kicker:
        "Exemples d’interprétation",

      title:
        "Les principales conjonctions entre les planètes",

      introduction:
        "Une même conjonction peut s’exprimer différemment selon le signe, la maison et les autres aspects. Les exemples suivants présentent leur dynamique générale.",
    },

    examples: [
      {
        planets:
          "Soleil conjoint Lune",

        symbol:
          "☀ ☌ ☽",

        keywords:
          "Identité • émotions • unité intérieure",

        text:
          "Le Soleil conjoint à la Lune rapproche fortement l’identité consciente et les besoins émotionnels. La personne peut agir de manière très cohérente avec ce qu’elle ressent, mais elle peut aussi avoir plus de difficulté à prendre du recul sur ses réactions.",
      },

      {
        planets:
          "Mercure conjoint Vénus",

        symbol:
          "☿ ☌ ♀",

        keywords:
          "Communication • charme • créativité",

        text:
          "Mercure conjoint à Vénus peut favoriser une expression agréable, diplomatique ou artistique. Les idées, les valeurs et la manière de communiquer fonctionnent ensemble avec beaucoup de naturel.",
      },

      {
        planets:
          "Vénus conjointe Mars",

        symbol:
          "♀ ☌ ♂",

        keywords:
          "Attirance • désir • intensité relationnelle",

        text:
          "Vénus conjointe à Mars unit le désir d’harmonie et l’énergie d’action. Cette combinaison peut renforcer l’attirance, le magnétisme, la créativité et l’intensité dans les relations.",
      },

      {
        planets:
          "Mars conjoint Saturne",

        symbol:
          "♂ ☌ ♄",

        keywords:
          "Effort • contrôle • endurance",

        text:
          "Mars conjoint à Saturne réunit l’impulsion d’agir et le besoin de contrôle. Cette conjonction peut créer de la frustration, mais aussi une grande capacité d’endurance, de discipline et de concentration.",
      },

      {
        planets:
          "Jupiter conjoint Saturne",

        symbol:
          "♃ ☌ ♄",

        keywords:
          "Expansion • structure • construction",

        text:
          "Jupiter conjoint à Saturne cherche à équilibrer la croissance et la prudence. Cette combinaison peut aider à transformer de grandes ambitions en projets solides et durables.",
      },

      {
        planets:
          "Lune conjointe Pluton",

        symbol:
          "☽ ☌ ♇",

        keywords:
          "Profondeur • instinct • transformation",

        text:
          "La Lune conjointe à Pluton intensifie le monde émotionnel. Les sentiments peuvent être profonds, puissants et parfois difficiles à contrôler, avec une grande capacité de transformation intérieure.",
      },
    ],

    signsSection: {
      title:
        "La conjonction dans les signes astrologiques",

      introduction:
        "Le signe donne une couleur particulière à la conjonction. Il décrit la manière dont les planètes conjointes expriment leur énergie commune.",

      signs: [
        {
          label:
            "Feu",

          signs:
            "Bélier, Lion, Sagittaire",

          text:
            "La conjonction tend à s’exprimer avec dynamisme, spontanéité, enthousiasme et besoin d’action.",
        },

        {
          label:
            "Terre",

          signs:
            "Taureau, Vierge, Capricorne",

          text:
            "L’énergie devient plus concrète, structurée, prudente et orientée vers les résultats durables.",
        },

        {
          label:
            "Air",

          signs:
            "Gémeaux, Balance, Verseau",

          text:
            "La conjonction s’exprime davantage par les idées, les échanges, les relations et la compréhension.",
        },

        {
          label:
            "Eau",

          signs:
            "Cancer, Scorpion, Poissons",

          text:
            "La fusion planétaire devient plus émotionnelle, intuitive, sensible et profondément intérieure.",
        },
      ],
    },

    housesSection: {
      title:
        "La conjonction dans les maisons astrologiques",

      introduction:
        "La maison occupée par la conjonction montre le domaine de vie où cette énergie combinée cherche à se manifester.",

      houses: [
        {
          title:
            "Maisons 1 à 3",

          text:
            "Identité, apparence, ressources, valeurs, pensée, apprentissage et communication.",
        },

        {
          title:
            "Maisons 4 à 6",

          text:
            "Famille, vie intérieure, créativité, amour, travail, habitudes et santé quotidienne.",
        },

        {
          title:
            "Maisons 7 à 9",

          text:
            "Relations, engagements, transformations, croyances, voyages et recherche de sens.",
        },

        {
          title:
            "Maisons 10 à 12",

          text:
            "Carrière, réputation, projets, groupes, vie intérieure, spiritualité et inconscient.",
        },
      ],
    },

    stellium: {
      kicker:
        "Concentration planétaire",

      title:
        "Quelle est la différence entre une conjonction et un stellium ?",

      subtitle:
        "Plusieurs planètes regroupées",

      paragraphs: [
        "Une conjonction concerne généralement deux planètes. Un stellium désigne un regroupement de trois planètes ou plus dans un même signe ou une même maison.",

        "Un stellium concentre une grande partie de l’énergie du thème natal dans une zone précise. Le signe et la maison concernés peuvent alors devenir particulièrement importants dans la vie de la personne.",
      ],
    },

    transits: {
      title:
        "La conjonction dans les transits astrologiques",

      paragraphs: [
        "Une conjonction peut également se produire lorsqu’une planète en mouvement passe sur une planète ou un point de votre thème natal. On parle alors de transit.",

        "Un transit de conjonction peut annoncer une période de concentration, de commencement, d’intensification ou de transformation dans le domaine représenté par la planète et la maison concernées.",

        "L’interprétation dépend de la planète en transit. Jupiter peut amplifier et ouvrir de nouvelles possibilités, tandis que Saturne peut demander davantage de structure, de patience ou de responsabilité.",
      ],
    },

    cta: {
      kicker:
        "Découvrez votre thème natal",

      title:
        "Avez-vous une conjonction importante dans votre carte du ciel ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir vos planètes, vos maisons et les principaux aspects de votre naissance.",

      button:
        "Voir ma carte du ciel",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur la conjonction en astrologie",

      items: [
        {
          question:
            "Qu’est-ce qu’une conjonction en astrologie ?",

          answer:
            "Une conjonction se forme lorsque deux planètes sont très proches l’une de l’autre dans le zodiaque, autour d’un angle de 0 degré. Leurs fonctions symboliques se mélangent et agissent avec une grande intensité.",
        },

        {
          question:
            "La conjonction est-elle un aspect positif ?",

          answer:
            "La conjonction n’est ni automatiquement positive ni négative. Son expression dépend des planètes concernées, des signes, des maisons et des autres aspects du thème natal.",
        },

        {
          question:
            "Quel orbe utiliser pour une conjonction ?",

          answer:
            "L’orbe dépend de la méthode astrologique utilisée. Une conjonction est souvent interprétée jusqu’à environ 8 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est impliqué.",
        },

        {
          question:
            "Une conjonction rend-elle les planètes plus fortes ?",

          answer:
            "Elle augmente généralement leur présence dans le thème natal. Les deux planètes deviennent étroitement liées et leur combinaison peut jouer un rôle central dans la personnalité ou l’expérience.",
        },

        {
          question:
            "Que signifie une conjonction dans la même maison ?",

          answer:
            "Lorsque deux planètes sont conjointes dans une maison, leurs fonctions se concentrent dans le domaine de vie représenté par cette maison, comme les relations, la carrière, la famille ou les ressources.",
        },

        {
          question:
            "Peut-on avoir plusieurs conjonctions dans un thème natal ?",

          answer:
            "Oui. Un thème natal peut contenir plusieurs conjonctions et même un regroupement de trois planètes ou plus, parfois appelé amas planétaire ou stellium.",
        },

        {
          question:
            "Comment savoir si j’ai une conjonction dans mon thème ?",

          answer:
            "Il faut générer votre carte du ciel et comparer la position en degrés de vos planètes. Deux planètes très proches peuvent former une conjonction selon l’orbe retenu.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation entre les aspects astrologiques",

      previous:
        "Tous les aspects",

      next:
        "Aspect suivant : opposition",
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "The Conjunction in Astrology: Meaning in the Birth Chart | Luna Astralis",

      description:
        "Discover the meaning of the conjunction in astrology, its 0° angle, its effects between planets and its interpretation in a birth chart.",

      ogTitle:
        "The Conjunction in Astrology: Planetary Fusion and Intensity",

      ogDescription:
        "Understand how the conjunction blends the energies of two planets and influences their expression in a birth chart.",

      twitterTitle:
        "The Conjunction in Astrology | Luna Astralis",

      twitterDescription:
        "A 0° angle, planetary fusion, intensity and interpretation examples in the birth chart.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "The Conjunction in Astrology: Meaning in the Birth Chart",

      description:
        "A complete guide to understanding the astrological conjunction, its 0-degree angle, its orb and its interpretation between planets.",
    },

    breadcrumb: {
      ariaLabel:
        "Breadcrumb",

      home:
        "Home",

      aspects:
        "Aspects",

      current:
        "Conjunction",
    },

    hero: {
      badge:
        "✦ Major astrological aspect",

      title:
        "The Conjunction in Astrology",

      lead:
        "A conjunction forms when two planets occupy almost the same degree of the zodiac. Their energies merge, strengthen each other and become deeply connected in the birth chart.",

      angleLabel:
        "Angle",

      angleValue:
        "0°",

      dynamicLabel:
        "Dynamic",

      dynamicValue:
        "Fusion",

      functionLabel:
        "Function",

      functionValue:
        "Intensification",

      createChart:
        "Create my free birth chart",

      understandConjunction:
        "Understand the conjunction",
    },

    meaning: {
      kicker:
        "A planetary fusion",

      title:
        "What does a conjunction mean in astrology?",

      paragraphs: [
        "A conjunction is an aspect that forms when two planets are positioned very close to each other in the zodiac circle. The exact conjunction angle is 0 degrees, but a certain margin, known as an orb, is generally accepted.",

        "In a conjunction, the symbolic functions of the two planets blend together. They no longer operate in a completely separate way. They form a unique combination that may become highly visible in a person’s character, decisions or experiences.",

        "A conjunction may be harmonious, intense, demanding or ambivalent. Its interpretation mainly depends on the nature of the planets involved, the sign in which they are located, the house concerned and the other aspects affecting them.",
      ],
    },

    functioning: {
      title:
        "How does the conjunction work?",

      steps: [
        {
          number:
            "01",

          title:
            "The energies merge",

          text:
            "The two planets act together and become difficult to separate in interpretation.",
        },

        {
          number:
            "02",

          title:
            "Their intensity increases",

          text:
            "The area of the chart occupied by the conjunction receives a strong concentration of energy.",
        },

        {
          number:
            "03",

          title:
            "The functions influence each other",

          text:
            "Each planet affects the way the other manifests and expresses its function.",
        },

        {
          number:
            "04",

          title:
            "The chart becomes more concentrated",

          text:
            "The house and sign of the conjunction may become dominant elements of the birth chart.",
        },
      ],
    },

    polarity: {
      kicker:
        "An originally neutral energy",

      title:
        "Is the conjunction harmonious or difficult?",

      introduction:
        "Unlike the trine, sextile, square or opposition, the conjunction is not automatically classified as harmonious or dynamic. It mainly acts as an amplifier.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "A harmonious conjunction",

          paragraphs: [
            "When the functions of the planets work together easily, the conjunction can create a natural, coherent and productive strength.",

            "For example, Mercury conjunct Venus can connect thought, communication, aesthetics and diplomacy.",
          ],
        },

        {
          symbol:
            "⚡",

          title:
            "A demanding conjunction",

          paragraphs: [
            "When the planets have very different functions, their fusion may produce inner tension or energy that is more difficult to control.",

            "Mars conjunct Saturn may, for example, create conflict between the impulse to act and the need to slow down or control oneself.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Elements to observe",

      title:
        "How do you interpret a conjunction in a birth chart?",

      methods: [
        {
          number:
            "1",

          title:
            "Identify the two planets",

          text:
            "Each planet represents a particular function. First understand what each one symbolizes before studying their combination.",
        },

        {
          number:
            "2",

          title:
            "Observe their sign",

          text:
            "The sign describes how the two conjunct planets express their shared energy.",
        },

        {
          number:
            "3",

          title:
            "Study their house",

          text:
            "The house reveals the area of life in which the conjunction manifests most strongly.",
        },

        {
          number:
            "4",

          title:
            "Check the precision",

          text:
            "The closer the planets are to the exact 0-degree angle, the more intense their fusion is generally considered.",
        },

        {
          number:
            "5",

          title:
            "Examine the other aspects",

          text:
            "A square, trine or opposition formed with another planet can modify the way the conjunction is expressed.",
        },
      ],
    },

    orb: {
      title:
        "The orb of the conjunction",

      introduction:
        "The orb is the difference between the actual positions of the planets and the exact 0-degree angle. Practices vary, but a conjunction can often be studied with an orb of up to approximately 8 degrees.",

      cards: [
        {
          value:
            "0° to 2°",

          title:
            "Very tight conjunction",

          text:
            "The fusion is very strong. The planets function almost as a single unit in the birth chart.",
        },

        {
          value:
            "3° to 5°",

          title:
            "Strong conjunction",

          text:
            "The aspect remains clearly noticeable and may occupy an important place in the personality.",
        },

        {
          value:
            "6° to 8°",

          title:
            "Wider conjunction",

          text:
            "The aspect may still be considered, particularly when the Sun or Moon is involved.",
        },
      ],

      conclusion:
        "A very exact conjunction is often more noticeable, but the orb should never be studied alone. The nature of the planets and their role within the entire chart remain essential.",
    },

    examplesSection: {
      kicker:
        "Interpretation examples",

      title:
        "The main conjunctions between planets",

      introduction:
        "The same conjunction may express itself differently according to the sign, house and other aspects. The following examples describe their general dynamics.",
    },

    examples: [
      {
        planets:
          "Sun conjunct Moon",

        symbol:
          "☀ ☌ ☽",

        keywords:
          "Identity • emotions • inner unity",

        text:
          "The Sun conjunct Moon strongly connects conscious identity and emotional needs. The person may act in a way that is highly consistent with what they feel, but may also find it harder to step back from their reactions.",
      },

      {
        planets:
          "Mercury conjunct Venus",

        symbol:
          "☿ ☌ ♀",

        keywords:
          "Communication • charm • creativity",

        text:
          "Mercury conjunct Venus may support pleasant, diplomatic or artistic expression. Ideas, values and communication work together very naturally.",
      },

      {
        planets:
          "Venus conjunct Mars",

        symbol:
          "♀ ☌ ♂",

        keywords:
          "Attraction • desire • relational intensity",

        text:
          "Venus conjunct Mars unites the desire for harmony with the energy of action. This combination can strengthen attraction, magnetism, creativity and intensity in relationships.",
      },

      {
        planets:
          "Mars conjunct Saturn",

        symbol:
          "♂ ☌ ♄",

        keywords:
          "Effort • control • endurance",

        text:
          "Mars conjunct Saturn combines the impulse to act with the need for control. This conjunction may create frustration, but also great endurance, discipline and concentration.",
      },

      {
        planets:
          "Jupiter conjunct Saturn",

        symbol:
          "♃ ☌ ♄",

        keywords:
          "Expansion • structure • construction",

        text:
          "Jupiter conjunct Saturn seeks to balance growth and caution. This combination can help transform major ambitions into solid and lasting projects.",
      },

      {
        planets:
          "Moon conjunct Pluto",

        symbol:
          "☽ ☌ ♇",

        keywords:
          "Depth • instinct • transformation",

        text:
          "The Moon conjunct Pluto intensifies the emotional world. Feelings may be deep, powerful and sometimes difficult to control, with a strong capacity for inner transformation.",
      },
    ],

    signsSection: {
      title:
        "The conjunction in the zodiac signs",

      introduction:
        "The sign gives the conjunction a particular quality. It describes how the conjunct planets express their shared energy.",

      signs: [
        {
          label:
            "Fire",

          signs:
            "Aries, Leo, Sagittarius",

          text:
            "The conjunction tends to express itself through dynamism, spontaneity, enthusiasm and a need for action.",
        },

        {
          label:
            "Earth",

          signs:
            "Taurus, Virgo, Capricorn",

          text:
            "The energy becomes more practical, structured, cautious and focused on lasting results.",
        },

        {
          label:
            "Air",

          signs:
            "Gemini, Libra, Aquarius",

          text:
            "The conjunction is expressed more through ideas, exchanges, relationships and understanding.",
        },

        {
          label:
            "Water",

          signs:
            "Cancer, Scorpio, Pisces",

          text:
            "The planetary fusion becomes more emotional, intuitive, sensitive and deeply internal.",
        },
      ],
    },

    housesSection: {
      title:
        "The conjunction in the astrological houses",

      introduction:
        "The house occupied by the conjunction shows the area of life in which this combined energy seeks to manifest.",

      houses: [
        {
          title:
            "Houses 1 to 3",

          text:
            "Identity, appearance, resources, values, thought, learning and communication.",
        },

        {
          title:
            "Houses 4 to 6",

          text:
            "Family, inner life, creativity, love, work, habits and everyday health.",
        },

        {
          title:
            "Houses 7 to 9",

          text:
            "Relationships, commitments, transformation, beliefs, travel and the search for meaning.",
        },

        {
          title:
            "Houses 10 to 12",

          text:
            "Career, reputation, projects, groups, inner life, spirituality and the unconscious.",
        },
      ],
    },

    stellium: {
      kicker:
        "Planetary concentration",

      title:
        "What is the difference between a conjunction and a stellium?",

      subtitle:
        "Several planets grouped together",

      paragraphs: [
        "A conjunction generally involves two planets. A stellium refers to a grouping of three or more planets in the same sign or house.",

        "A stellium concentrates a large portion of the birth chart’s energy in one specific area. The sign and house involved may then become particularly important in the person’s life.",
      ],
    },

    transits: {
      title:
        "The conjunction in astrological transits",

      paragraphs: [
        "A conjunction may also occur when a moving planet passes over a planet or point in your birth chart. This is known as a transit.",

        "A conjunction transit may indicate a period of concentration, beginning, intensification or transformation in the area represented by the planet and house involved.",

        "The interpretation depends on the transiting planet. Jupiter may amplify and open new possibilities, while Saturn may require more structure, patience or responsibility.",
      ],
    },

    cta: {
      kicker:
        "Discover your birth chart",

      title:
        "Do you have an important conjunction in your birth chart?",

      text:
        "Generate your free birth chart to discover your planets, houses and main birth aspects.",

      button:
        "View my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about the conjunction in astrology",

      items: [
        {
          question:
            "What is a conjunction in astrology?",

          answer:
            "A conjunction forms when two planets are very close to each other in the zodiac, around an angle of 0 degrees. Their symbolic functions blend and operate with great intensity.",
        },

        {
          question:
            "Is the conjunction a positive aspect?",

          answer:
            "A conjunction is not automatically positive or negative. Its expression depends on the planets involved, the signs, the houses and the other aspects in the birth chart.",
        },

        {
          question:
            "What orb should be used for a conjunction?",

          answer:
            "The orb depends on the astrological method used. A conjunction is often interpreted with an orb of up to approximately 8 degrees, sometimes wider when the Sun or Moon is involved.",
        },

        {
          question:
            "Does a conjunction make the planets stronger?",

          answer:
            "It generally increases their presence in the birth chart. The two planets become closely connected and their combination may play a central role in the personality or life experience.",
        },

        {
          question:
            "What does a conjunction in the same house mean?",

          answer:
            "When two planets are conjunct in one house, their functions are concentrated in the area of life represented by that house, such as relationships, career, family or resources.",
        },

        {
          question:
            "Can a birth chart contain several conjunctions?",

          answer:
            "Yes. A birth chart may contain several conjunctions and even a grouping of three or more planets, sometimes called a planetary cluster or stellium.",
        },

        {
          question:
            "How can I know whether I have a conjunction in my chart?",

          answer:
            "Generate your birth chart and compare the degree positions of your planets. Two planets positioned very close together may form a conjunction according to the orb used.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation between astrological aspects",

      previous:
        "All aspects",

      next:
        "Next aspect: opposition",
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "La conjunción en astrología: significado en la carta natal | Luna Astralis",

      description:
        "Descubre el significado de la conjunción en astrología, su ángulo de 0°, sus efectos entre los planetas y su interpretación en una carta natal.",

      ogTitle:
        "La conjunción en astrología: fusión e intensidad planetaria",

      ogDescription:
        "Comprende cómo la conjunción fusiona las energías de dos planetas e influye en su expresión dentro de una carta natal.",

      twitterTitle:
        "La conjunción en astrología | Luna Astralis",

      twitterDescription:
        "Ángulo de 0°, fusión de los planetas, intensidad y ejemplos de interpretación en la carta natal.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "La conjunción en astrología: significado en la carta natal",

      description:
        "Guía completa para comprender la conjunción astrológica, su ángulo de 0 grados, su orbe y su interpretación entre los planetas.",
    },

    breadcrumb: {
      ariaLabel:
        "Migas de pan",

      home:
        "Inicio",

      aspects:
        "Aspectos",

      current:
        "Conjunción",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico mayor",

      title:
        "La conjunción en astrología",

      lead:
        "La conjunción se forma cuando dos planetas ocupan casi el mismo grado del zodiaco. Sus energías se fusionan, se refuerzan y quedan profundamente vinculadas en la carta natal.",

      angleLabel:
        "Ángulo",

      angleValue:
        "0°",

      dynamicLabel:
        "Dinámica",

      dynamicValue:
        "Fusión",

      functionLabel:
        "Función",

      functionValue:
        "Intensificación",

      createChart:
        "Crear mi carta natal gratis",

      understandConjunction:
        "Comprender la conjunción",
    },

    meaning: {
      kicker:
        "Una fusión planetaria",

      title:
        "¿Qué significa una conjunción en astrología?",

      paragraphs: [
        "La conjunción es un aspecto que se forma cuando dos planetas se encuentran muy cerca uno del otro en el círculo zodiacal. El ángulo exacto de la conjunción es de 0 grados, aunque normalmente se acepta cierto margen llamado orbe.",

        "En una conjunción, las funciones simbólicas de los dos planetas se mezclan. Ya no funcionan de manera completamente separada. Forman una combinación única que puede volverse muy visible en el carácter, las decisiones o las experiencias de la persona.",

        "Una conjunción puede ser fluida, intensa, exigente o ambivalente. Su interpretación depende principalmente de la naturaleza de los planetas implicados, del signo en el que se encuentran, de la casa correspondiente y de los demás aspectos que los afectan.",
      ],
    },

    functioning: {
      title:
        "¿Cómo funciona la conjunción?",

      steps: [
        {
          number:
            "01",

          title:
            "Las energías se fusionan",

          text:
            "Los dos planetas actúan juntos y se vuelven difíciles de separar en la interpretación.",
        },

        {
          number:
            "02",

          title:
            "Su intensidad aumenta",

          text:
            "La zona de la carta ocupada por la conjunción recibe una fuerte concentración de energía.",
        },

        {
          number:
            "03",

          title:
            "Las funciones se influyen",

          text:
            "Cada planeta modifica la manera en que el otro se manifiesta y expresa su función.",
        },

        {
          number:
            "04",

          title:
            "La carta se vuelve más concentrada",

          text:
            "La casa y el signo de la conjunción pueden convertirse en elementos dominantes de la carta natal.",
        },
      ],
    },

    polarity: {
      kicker:
        "Una energía originalmente neutra",

      title:
        "¿La conjunción es armoniosa o difícil?",

      introduction:
        "A diferencia del trígono, el sextil, la cuadratura o la oposición, la conjunción no se clasifica automáticamente como armoniosa o dinámica. Actúa principalmente como un amplificador.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Una conjunción fluida",

          paragraphs: [
            "Cuando las funciones de los planetas se armonizan con facilidad, la conjunción puede crear una fuerza natural, coherente y productiva.",

            "Por ejemplo, Mercurio conjunto a Venus puede relacionar el pensamiento, la comunicación, la estética y la diplomacia.",
          ],
        },

        {
          symbol:
            "⚡",

          title:
            "Una conjunción exigente",

          paragraphs: [
            "Cuando los planetas tienen funciones muy diferentes, su fusión puede producir tensión interior o una energía más difícil de controlar.",

            "Marte conjunto a Saturno puede, por ejemplo, crear un conflicto entre el impulso de actuar y la necesidad de frenar o controlarse.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Los elementos que deben observarse",

      title:
        "¿Cómo interpretar una conjunción en una carta natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar los dos planetas",

          text:
            "Cada planeta representa una función particular. Primero hay que comprender qué simboliza cada uno antes de estudiar su combinación.",
        },

        {
          number:
            "2",

          title:
            "Observar su signo",

          text:
            "El signo describe la manera en que los dos planetas conjuntos expresan su energía compartida.",
        },

        {
          number:
            "3",

          title:
            "Estudiar su casa",

          text:
            "La casa revela el ámbito de vida en el que la conjunción se manifiesta con mayor fuerza.",
        },

        {
          number:
            "4",

          title:
            "Comprobar la precisión",

          text:
            "Cuanto más cerca estén los planetas del ángulo exacto de 0 grados, más intensa se considera generalmente su fusión.",
        },

        {
          number:
            "5",

          title:
            "Examinar los demás aspectos",

          text:
            "Una cuadratura, un trígono o una oposición formada con otro planeta puede modificar la manera en que se expresa la conjunción.",
        },
      ],
    },

    orb: {
      title:
        "El orbe de la conjunción",

      introduction:
        "El orbe es la diferencia entre la posición real de los planetas y el ángulo exacto de 0 grados. Las prácticas varían, pero una conjunción suele estudiarse con un orbe de hasta aproximadamente 8 grados.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Conjunción muy cerrada",

          text:
            "La fusión es muy fuerte. Los planetas funcionan casi como una sola unidad en la carta natal.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Conjunción fuerte",

          text:
            "El aspecto sigue siendo claramente perceptible y puede ocupar un lugar importante en la personalidad.",
        },

        {
          value:
            "6° a 8°",

          title:
            "Conjunción más amplia",

          text:
            "El aspecto todavía puede considerarse, especialmente cuando están implicados el Sol o la Luna.",
        },
      ],

      conclusion:
        "Una conjunción muy exacta suele ser más visible, pero el orbe nunca debe estudiarse de forma aislada. La naturaleza de los planetas y su papel en el conjunto de la carta siguen siendo esenciales.",
    },

    examplesSection: {
      kicker:
        "Ejemplos de interpretación",

      title:
        "Las principales conjunciones entre los planetas",

      introduction:
        "Una misma conjunción puede expresarse de manera diferente según el signo, la casa y los demás aspectos. Los siguientes ejemplos presentan su dinámica general.",
    },

    examples: [
      {
        planets:
          "Sol conjunto Luna",

        symbol:
          "☀ ☌ ☽",

        keywords:
          "Identidad • emociones • unidad interior",

        text:
          "El Sol conjunto a la Luna vincula estrechamente la identidad consciente con las necesidades emocionales. La persona puede actuar de forma muy coherente con lo que siente, pero también puede tener más dificultad para tomar distancia de sus reacciones.",
      },

      {
        planets:
          "Mercurio conjunto Venus",

        symbol:
          "☿ ☌ ♀",

        keywords:
          "Comunicación • encanto • creatividad",

        text:
          "Mercurio conjunto a Venus puede favorecer una expresión agradable, diplomática o artística. Las ideas, los valores y la manera de comunicarse funcionan juntos con mucha naturalidad.",
      },

      {
        planets:
          "Venus conjunto Marte",

        symbol:
          "♀ ☌ ♂",

        keywords:
          "Atracción • deseo • intensidad relacional",

        text:
          "Venus conjunto a Marte une el deseo de armonía con la energía de acción. Esta combinación puede reforzar la atracción, el magnetismo, la creatividad y la intensidad en las relaciones.",
      },

      {
        planets:
          "Marte conjunto Saturno",

        symbol:
          "♂ ☌ ♄",

        keywords:
          "Esfuerzo • control • resistencia",

        text:
          "Marte conjunto a Saturno reúne el impulso de actuar y la necesidad de control. Esta conjunción puede crear frustración, pero también una gran capacidad de resistencia, disciplina y concentración.",
      },

      {
        planets:
          "Júpiter conjunto Saturno",

        symbol:
          "♃ ☌ ♄",

        keywords:
          "Expansión • estructura • construcción",

        text:
          "Júpiter conjunto a Saturno busca equilibrar el crecimiento y la prudencia. Esta combinación puede ayudar a transformar grandes ambiciones en proyectos sólidos y duraderos.",
      },

      {
        planets:
          "Luna conjunta Plutón",

        symbol:
          "☽ ☌ ♇",

        keywords:
          "Profundidad • instinto • transformación",

        text:
          "La Luna conjunta a Plutón intensifica el mundo emocional. Los sentimientos pueden ser profundos, poderosos y a veces difíciles de controlar, con una gran capacidad de transformación interior.",
      },
    ],

    signsSection: {
      title:
        "La conjunción en los signos zodiacales",

      introduction:
        "El signo aporta una cualidad particular a la conjunción. Describe cómo los planetas conjuntos expresan su energía compartida.",

      signs: [
        {
          label:
            "Fuego",

          signs:
            "Aries, Leo, Sagitario",

          text:
            "La conjunción tiende a expresarse con dinamismo, espontaneidad, entusiasmo y necesidad de acción.",
        },

        {
          label:
            "Tierra",

          signs:
            "Tauro, Virgo, Capricornio",

          text:
            "La energía se vuelve más concreta, estructurada, prudente y orientada hacia resultados duraderos.",
        },

        {
          label:
            "Aire",

          signs:
            "Géminis, Libra, Acuario",

          text:
            "La conjunción se expresa más a través de las ideas, los intercambios, las relaciones y la comprensión.",
        },

        {
          label:
            "Agua",

          signs:
            "Cáncer, Escorpio, Piscis",

          text:
            "La fusión planetaria se vuelve más emocional, intuitiva, sensible y profundamente interior.",
        },
      ],
    },

    housesSection: {
      title:
        "La conjunción en las casas astrológicas",

      introduction:
        "La casa ocupada por la conjunción muestra el ámbito de vida en el que esta energía combinada busca manifestarse.",

      houses: [
        {
          title:
            "Casas 1 a 3",

          text:
            "Identidad, apariencia, recursos, valores, pensamiento, aprendizaje y comunicación.",
        },

        {
          title:
            "Casas 4 a 6",

          text:
            "Familia, vida interior, creatividad, amor, trabajo, hábitos y salud cotidiana.",
        },

        {
          title:
            "Casas 7 a 9",

          text:
            "Relaciones, compromisos, transformaciones, creencias, viajes y búsqueda de sentido.",
        },

        {
          title:
            "Casas 10 a 12",

          text:
            "Carrera, reputación, proyectos, grupos, vida interior, espiritualidad e inconsciente.",
        },
      ],
    },

    stellium: {
      kicker:
        "Concentración planetaria",

      title:
        "¿Cuál es la diferencia entre una conjunción y un stellium?",

      subtitle:
        "Varios planetas agrupados",

      paragraphs: [
        "Una conjunción generalmente implica dos planetas. Un stellium designa una agrupación de tres o más planetas en el mismo signo o en la misma casa.",

        "Un stellium concentra una gran parte de la energía de la carta natal en una zona precisa. El signo y la casa correspondientes pueden volverse especialmente importantes en la vida de la persona.",
      ],
    },

    transits: {
      title:
        "La conjunción en los tránsitos astrológicos",

      paragraphs: [
        "Una conjunción también puede producirse cuando un planeta en movimiento pasa sobre un planeta o un punto de tu carta natal. En ese caso se habla de tránsito.",

        "Un tránsito de conjunción puede anunciar un período de concentración, comienzo, intensificación o transformación en el ámbito representado por el planeta y la casa implicados.",

        "La interpretación depende del planeta en tránsito. Júpiter puede amplificar y abrir nuevas posibilidades, mientras que Saturno puede exigir más estructura, paciencia o responsabilidad.",
      ],
    },

    cta: {
      kicker:
        "Descubre tu carta natal",

      title:
        "¿Tienes una conjunción importante en tu carta natal?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tus planetas, tus casas y los principales aspectos de tu nacimiento.",

      button:
        "Ver mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre la conjunción en astrología",

      items: [
        {
          question:
            "¿Qué es una conjunción en astrología?",

          answer:
            "Una conjunción se forma cuando dos planetas están muy cerca uno del otro en el zodiaco, alrededor de un ángulo de 0 grados. Sus funciones simbólicas se mezclan y actúan con gran intensidad.",
        },

        {
          question:
            "¿La conjunción es un aspecto positivo?",

          answer:
            "La conjunción no es automáticamente positiva ni negativa. Su expresión depende de los planetas implicados, los signos, las casas y los demás aspectos de la carta natal.",
        },

        {
          question:
            "¿Qué orbe debe utilizarse para una conjunción?",

          answer:
            "El orbe depende del método astrológico utilizado. Una conjunción suele interpretarse con un orbe de hasta aproximadamente 8 grados, a veces más amplio cuando están implicados el Sol o la Luna.",
        },

        {
          question:
            "¿Una conjunción hace más fuertes a los planetas?",

          answer:
            "Generalmente aumenta su presencia en la carta natal. Los dos planetas quedan estrechamente vinculados y su combinación puede desempeñar un papel central en la personalidad o la experiencia.",
        },

        {
          question:
            "¿Qué significa una conjunción en la misma casa?",

          answer:
            "Cuando dos planetas están conjuntos en una casa, sus funciones se concentran en el ámbito de vida representado por esa casa, como las relaciones, la carrera, la familia o los recursos.",
        },

        {
          question:
            "¿Puede haber varias conjunciones en una carta natal?",

          answer:
            "Sí. Una carta natal puede contener varias conjunciones e incluso una agrupación de tres o más planetas, a veces llamada concentración planetaria o stellium.",
        },

        {
          question:
            "¿Cómo saber si tengo una conjunción en mi carta?",

          answer:
            "Debes generar tu carta natal y comparar las posiciones en grados de tus planetas. Dos planetas muy cercanos pueden formar una conjunción según el orbe utilizado.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegación entre los aspectos astrológicos",

      previous:
        "Todos los aspectos",

      next:
        "Aspecto siguiente: oposición",
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Die Konjunktion in der Astrologie: Bedeutung im Geburtshoroskop | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung der Konjunktion in der Astrologie, ihren 0°-Winkel, ihre Wirkung zwischen Planeten und ihre Deutung im Geburtshoroskop.",

      ogTitle:
        "Die Konjunktion in der Astrologie: planetare Verschmelzung und Intensität",

      ogDescription:
        "Verstehen Sie, wie die Konjunktion die Energien zweier Planeten verbindet und ihren Ausdruck im Geburtshoroskop beeinflusst.",

      twitterTitle:
        "Die Konjunktion in der Astrologie | Luna Astralis",

      twitterDescription:
        "0°-Winkel, Verschmelzung der Planeten, Intensität und Deutungsbeispiele im Geburtshoroskop.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Die Konjunktion in der Astrologie: Bedeutung im Geburtshoroskop",

      description:
        "Ein vollständiger Leitfaden zur astrologischen Konjunktion, ihrem 0-Grad-Winkel, ihrem Orbis und ihrer Deutung zwischen Planeten.",
    },

    breadcrumb: {
      ariaLabel:
        "Brotkrümelnavigation",

      home:
        "Startseite",

      aspects:
        "Aspekte",

      current:
        "Konjunktion",
    },

    hero: {
      badge:
        "✦ Bedeutender astrologischer Aspekt",

      title:
        "Die Konjunktion in der Astrologie",

      lead:
        "Eine Konjunktion entsteht, wenn zwei Planeten nahezu denselben Grad im Tierkreis einnehmen. Ihre Energien verschmelzen, verstärken sich gegenseitig und werden im Geburtshoroskop eng miteinander verbunden.",

      angleLabel:
        "Winkel",

      angleValue:
        "0°",

      dynamicLabel:
        "Dynamik",

      dynamicValue:
        "Verschmelzung",

      functionLabel:
        "Funktion",

      functionValue:
        "Verstärkung",

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      understandConjunction:
        "Die Konjunktion verstehen",
    },

    meaning: {
      kicker:
        "Eine planetare Verschmelzung",

      title:
        "Was bedeutet eine Konjunktion in der Astrologie?",

      paragraphs: [
        "Eine Konjunktion ist ein Aspekt, der entsteht, wenn zwei Planeten im Tierkreis sehr nahe beieinanderstehen. Der exakte Winkel der Konjunktion beträgt 0 Grad, doch gewöhnlich wird ein gewisser Spielraum akzeptiert, der Orbis genannt wird.",

        "In einer Konjunktion vermischen sich die symbolischen Funktionen der beiden Planeten. Sie wirken nicht mehr vollständig getrennt. Sie bilden eine einzigartige Kombination, die im Charakter, in Entscheidungen oder Erfahrungen der Person sehr deutlich sichtbar werden kann.",

        "Eine Konjunktion kann harmonisch, intensiv, anspruchsvoll oder ambivalent sein. Ihre Deutung hängt vor allem von der Natur der beteiligten Planeten, ihrem Zeichen, dem betroffenen Haus und den weiteren Aspekten ab.",
      ],
    },

    functioning: {
      title:
        "Wie funktioniert die Konjunktion?",

      steps: [
        {
          number:
            "01",

          title:
            "Die Energien verschmelzen",

          text:
            "Die beiden Planeten wirken gemeinsam und lassen sich in der Deutung nur schwer voneinander trennen.",
        },

        {
          number:
            "02",

          title:
            "Ihre Intensität nimmt zu",

          text:
            "Der vom Aspekt besetzte Bereich des Horoskops erhält eine starke Energiekonzentration.",
        },

        {
          number:
            "03",

          title:
            "Die Funktionen beeinflussen sich",

          text:
            "Jeder Planet verändert die Art und Weise, wie der andere sich zeigt und seine Funktion ausdrückt.",
        },

        {
          number:
            "04",

          title:
            "Das Horoskop wird konzentrierter",

          text:
            "Haus und Zeichen der Konjunktion können zu dominierenden Elementen des Geburtshoroskops werden.",
        },
      ],
    },

    polarity: {
      kicker:
        "Eine ursprünglich neutrale Energie",

      title:
        "Ist die Konjunktion harmonisch oder schwierig?",

      introduction:
        "Im Gegensatz zu Trigon, Sextil, Quadrat oder Opposition wird die Konjunktion nicht automatisch als harmonisch oder dynamisch eingestuft. Sie wirkt vor allem als Verstärker.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Eine harmonische Konjunktion",

          paragraphs: [
            "Wenn die Funktionen der Planeten leicht zusammenwirken, kann die Konjunktion eine natürliche, stimmige und produktive Kraft erzeugen.",

            "Merkur in Konjunktion mit Venus kann beispielsweise Denken, Kommunikation, Ästhetik und Diplomatie miteinander verbinden.",
          ],
        },

        {
          symbol:
            "⚡",

          title:
            "Eine anspruchsvolle Konjunktion",

          paragraphs: [
            "Wenn die Planeten sehr unterschiedliche Funktionen haben, kann ihre Verschmelzung innere Spannung oder schwer kontrollierbare Energie erzeugen.",

            "Mars in Konjunktion mit Saturn kann zum Beispiel einen Konflikt zwischen dem Impuls zu handeln und dem Bedürfnis erzeugen, sich zu bremsen oder zu kontrollieren.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Zu beobachtende Elemente",

      title:
        "Wie deutet man eine Konjunktion im Geburtshoroskop?",

      methods: [
        {
          number:
            "1",

          title:
            "Die beiden Planeten bestimmen",

          text:
            "Jeder Planet steht für eine bestimmte Funktion. Zuerst sollte verstanden werden, was jeder einzelne symbolisiert, bevor ihre Kombination untersucht wird.",
        },

        {
          number:
            "2",

          title:
            "Ihr Zeichen beobachten",

          text:
            "Das Zeichen beschreibt, wie die beiden verbundenen Planeten ihre gemeinsame Energie ausdrücken.",
        },

        {
          number:
            "3",

          title:
            "Ihr Haus untersuchen",

          text:
            "Das Haus zeigt den Lebensbereich, in dem sich die Konjunktion am stärksten manifestiert.",
        },

        {
          number:
            "4",

          title:
            "Die Genauigkeit prüfen",

          text:
            "Je näher die Planeten am exakten 0-Grad-Winkel stehen, desto intensiver wird ihre Verschmelzung gewöhnlich eingeschätzt.",
        },

        {
          number:
            "5",

          title:
            "Weitere Aspekte untersuchen",

          text:
            "Ein Quadrat, Trigon oder eine Opposition zu einem anderen Planeten kann verändern, wie sich die Konjunktion ausdrückt.",
        },
      ],
    },

    orb: {
      title:
        "Der Orbis der Konjunktion",

      introduction:
        "Der Orbis ist der Abstand zwischen den tatsächlichen Planetenpositionen und dem exakten 0-Grad-Winkel. Die Methoden unterscheiden sich, doch eine Konjunktion wird häufig mit einem Orbis von bis zu ungefähr 8 Grad untersucht.",

      cards: [
        {
          value:
            "0° bis 2°",

          title:
            "Sehr enge Konjunktion",

          text:
            "Die Verschmelzung ist sehr stark. Die Planeten funktionieren im Geburtshoroskop beinahe wie eine einzige Einheit.",
        },

        {
          value:
            "3° bis 5°",

          title:
            "Starke Konjunktion",

          text:
            "Der Aspekt bleibt deutlich wahrnehmbar und kann einen wichtigen Platz in der Persönlichkeit einnehmen.",
        },

        {
          value:
            "6° bis 8°",

          title:
            "Weitere Konjunktion",

          text:
            "Der Aspekt kann weiterhin berücksichtigt werden, besonders wenn Sonne oder Mond beteiligt sind.",
        },
      ],

      conclusion:
        "Eine sehr genaue Konjunktion ist oft deutlicher sichtbar, doch der Orbis sollte niemals isoliert untersucht werden. Die Natur der Planeten und ihre Rolle im gesamten Horoskop bleiben entscheidend.",
    },

    examplesSection: {
      kicker:
        "Deutungsbeispiele",

      title:
        "Die wichtigsten Konjunktionen zwischen den Planeten",

      introduction:
        "Dieselbe Konjunktion kann sich je nach Zeichen, Haus und weiteren Aspekten unterschiedlich ausdrücken. Die folgenden Beispiele zeigen ihre allgemeine Dynamik.",
    },

    examples: [
      {
        planets:
          "Sonne Konjunktion Mond",

        symbol:
          "☀ ☌ ☽",

        keywords:
          "Identität • Gefühle • innere Einheit",

        text:
          "Sonne in Konjunktion mit Mond verbindet bewusste Identität und emotionale Bedürfnisse sehr eng. Die Person kann sehr stimmig mit ihren Gefühlen handeln, hat aber möglicherweise größere Schwierigkeiten, Abstand zu ihren Reaktionen zu gewinnen.",
      },

      {
        planets:
          "Merkur Konjunktion Venus",

        symbol:
          "☿ ☌ ♀",

        keywords:
          "Kommunikation • Charme • Kreativität",

        text:
          "Merkur in Konjunktion mit Venus kann einen angenehmen, diplomatischen oder künstlerischen Ausdruck fördern. Gedanken, Werte und Kommunikation wirken sehr natürlich zusammen.",
      },

      {
        planets:
          "Venus Konjunktion Mars",

        symbol:
          "♀ ☌ ♂",

        keywords:
          "Anziehung • Verlangen • Beziehungsintensität",

        text:
          "Venus in Konjunktion mit Mars verbindet den Wunsch nach Harmonie mit der Energie des Handelns. Diese Kombination kann Anziehung, Magnetismus, Kreativität und Intensität in Beziehungen verstärken.",
      },

      {
        planets:
          "Mars Konjunktion Saturn",

        symbol:
          "♂ ☌ ♄",

        keywords:
          "Anstrengung • Kontrolle • Ausdauer",

        text:
          "Mars in Konjunktion mit Saturn verbindet den Handlungsimpuls mit dem Bedürfnis nach Kontrolle. Diese Konjunktion kann Frustration, aber auch große Ausdauer, Disziplin und Konzentration erzeugen.",
      },

      {
        planets:
          "Jupiter Konjunktion Saturn",

        symbol:
          "♃ ☌ ♄",

        keywords:
          "Expansion • Struktur • Aufbau",

        text:
          "Jupiter in Konjunktion mit Saturn versucht Wachstum und Vorsicht auszugleichen. Diese Kombination kann helfen, große Ambitionen in solide und dauerhafte Projekte zu verwandeln.",
      },

      {
        planets:
          "Mond Konjunktion Pluto",

        symbol:
          "☽ ☌ ♇",

        keywords:
          "Tiefe • Instinkt • Transformation",

        text:
          "Mond in Konjunktion mit Pluto intensiviert die Gefühlswelt. Gefühle können tief, kraftvoll und manchmal schwer kontrollierbar sein, verbunden mit großer innerer Wandlungsfähigkeit.",
      },
    ],

    signsSection: {
      title:
        "Die Konjunktion in den Tierkreiszeichen",

      introduction:
        "Das Zeichen verleiht der Konjunktion eine besondere Färbung. Es beschreibt, wie die verbundenen Planeten ihre gemeinsame Energie ausdrücken.",

      signs: [
        {
          label:
            "Feuer",

          signs:
            "Widder, Löwe, Schütze",

          text:
            "Die Konjunktion neigt zu einem dynamischen, spontanen, begeisterten und handlungsorientierten Ausdruck.",
        },

        {
          label:
            "Erde",

          signs:
            "Stier, Jungfrau, Steinbock",

          text:
            "Die Energie wird konkreter, strukturierter, vorsichtiger und auf dauerhafte Ergebnisse ausgerichtet.",
        },

        {
          label:
            "Luft",

          signs:
            "Zwillinge, Waage, Wassermann",

          text:
            "Die Konjunktion drückt sich stärker durch Ideen, Austausch, Beziehungen und Verständnis aus.",
        },

        {
          label:
            "Wasser",

          signs:
            "Krebs, Skorpion, Fische",

          text:
            "Die planetare Verschmelzung wird emotionaler, intuitiver, sensibler und tief nach innen gerichtet.",
        },
      ],
    },

    housesSection: {
      title:
        "Die Konjunktion in den astrologischen Häusern",

      introduction:
        "Das von der Konjunktion besetzte Haus zeigt den Lebensbereich, in dem sich diese vereinte Energie ausdrücken möchte.",

      houses: [
        {
          title:
            "Häuser 1 bis 3",

          text:
            "Identität, Erscheinung, Ressourcen, Werte, Denken, Lernen und Kommunikation.",
        },

        {
          title:
            "Häuser 4 bis 6",

          text:
            "Familie, Innenleben, Kreativität, Liebe, Arbeit, Gewohnheiten und tägliche Gesundheit.",
        },

        {
          title:
            "Häuser 7 bis 9",

          text:
            "Beziehungen, Verpflichtungen, Transformationen, Überzeugungen, Reisen und Sinnsuche.",
        },

        {
          title:
            "Häuser 10 bis 12",

          text:
            "Karriere, Ansehen, Projekte, Gruppen, Innenleben, Spiritualität und Unterbewusstsein.",
        },
      ],
    },

    stellium: {
      kicker:
        "Planetare Konzentration",

      title:
        "Was ist der Unterschied zwischen einer Konjunktion und einem Stellium?",

      subtitle:
        "Mehrere Planeten in einer Gruppe",

      paragraphs: [
        "Eine Konjunktion betrifft gewöhnlich zwei Planeten. Ein Stellium bezeichnet eine Gruppe von drei oder mehr Planeten im selben Zeichen oder Haus.",

        "Ein Stellium konzentriert einen großen Teil der Energie des Geburtshoroskops auf einen bestimmten Bereich. Das betroffene Zeichen und Haus können dadurch im Leben der Person besonders wichtig werden.",
      ],
    },

    transits: {
      title:
        "Die Konjunktion in astrologischen Transiten",

      paragraphs: [
        "Eine Konjunktion kann auch entstehen, wenn ein laufender Planet über einen Planeten oder Punkt im Geburtshoroskop zieht. Dies wird als Transit bezeichnet.",

        "Ein Konjunktionstransit kann eine Phase von Konzentration, Beginn, Verstärkung oder Transformation in dem Bereich anzeigen, der durch den betreffenden Planeten und das Haus dargestellt wird.",

        "Die Deutung hängt vom laufenden Planeten ab. Jupiter kann verstärken und neue Möglichkeiten eröffnen, während Saturn mehr Struktur, Geduld oder Verantwortung verlangen kann.",
      ],
    },

    cta: {
      kicker:
        "Entdecken Sie Ihr Geburtshoroskop",

      title:
        "Haben Sie eine wichtige Konjunktion in Ihrem Geburtshoroskop?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Planeten, Häuser und wichtigsten Geburtsaspekte.",

      button:
        "Mein Geburtshoroskop ansehen",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zur Konjunktion in der Astrologie",

      items: [
        {
          question:
            "Was ist eine Konjunktion in der Astrologie?",

          answer:
            "Eine Konjunktion entsteht, wenn zwei Planeten im Tierkreis sehr nahe beieinanderstehen, ungefähr bei einem Winkel von 0 Grad. Ihre symbolischen Funktionen vermischen sich und wirken mit großer Intensität.",
        },

        {
          question:
            "Ist die Konjunktion ein positiver Aspekt?",

          answer:
            "Eine Konjunktion ist nicht automatisch positiv oder negativ. Ihr Ausdruck hängt von den beteiligten Planeten, Zeichen, Häusern und weiteren Aspekten des Geburtshoroskops ab.",
        },

        {
          question:
            "Welcher Orbis sollte für eine Konjunktion verwendet werden?",

          answer:
            "Der Orbis hängt von der verwendeten astrologischen Methode ab. Eine Konjunktion wird häufig mit einem Orbis von bis zu ungefähr 8 Grad gedeutet, manchmal weiter, wenn Sonne oder Mond beteiligt sind.",
        },

        {
          question:
            "Macht eine Konjunktion die Planeten stärker?",

          answer:
            "Sie erhöht gewöhnlich ihre Präsenz im Geburtshoroskop. Die beiden Planeten werden eng miteinander verbunden und ihre Kombination kann eine zentrale Rolle in der Persönlichkeit oder Erfahrung spielen.",
        },

        {
          question:
            "Was bedeutet eine Konjunktion im selben Haus?",

          answer:
            "Wenn zwei Planeten in einem Haus verbunden sind, konzentrieren sich ihre Funktionen auf den Lebensbereich dieses Hauses, etwa Beziehungen, Karriere, Familie oder Ressourcen.",
        },

        {
          question:
            "Kann ein Geburtshoroskop mehrere Konjunktionen enthalten?",

          answer:
            "Ja. Ein Geburtshoroskop kann mehrere Konjunktionen und sogar eine Gruppe von drei oder mehr Planeten enthalten, die häufig als Planetenballung oder Stellium bezeichnet wird.",
        },

        {
          question:
            "Wie erkenne ich eine Konjunktion in meinem Horoskop?",

          answer:
            "Erstellen Sie Ihr Geburtshoroskop und vergleichen Sie die Gradpositionen Ihrer Planeten. Zwei sehr nahe beieinanderstehende Planeten können je nach verwendetem Orbis eine Konjunktion bilden.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation zwischen astrologischen Aspekten",

      previous:
        "Alle Aspekte",

      next:
        "Nächster Aspekt: Opposition",
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "La congiunzione in astrologia: significato nel tema natale | Luna Astralis",

      description:
        "Scopri il significato della congiunzione in astrologia, il suo angolo di 0°, i suoi effetti tra i pianeti e la sua interpretazione nel tema natale.",

      ogTitle:
        "La congiunzione in astrologia: fusione e intensità planetaria",

      ogDescription:
        "Comprendi come la congiunzione fonde le energie di due pianeti e influenza la loro espressione nel tema natale.",

      twitterTitle:
        "La congiunzione in astrologia | Luna Astralis",

      twitterDescription:
        "Angolo di 0°, fusione dei pianeti, intensità ed esempi di interpretazione nel tema natale.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "La congiunzione in astrologia: significato nel tema natale",

      description:
        "Guida completa per comprendere la congiunzione astrologica, il suo angolo di 0 gradi, il suo orbe e la sua interpretazione tra i pianeti.",
    },

    breadcrumb: {
      ariaLabel:
        "Percorso di navigazione",

      home:
        "Home",

      aspects:
        "Aspetti",

      current:
        "Congiunzione",
    },

    hero: {
      badge:
        "✦ Aspetto astrologico maggiore",

      title:
        "La congiunzione in astrologia",

      lead:
        "La congiunzione si forma quando due pianeti occupano quasi lo stesso grado dello zodiaco. Le loro energie si fondono, si rafforzano e diventano profondamente collegate nel tema natale.",

      angleLabel:
        "Angolo",

      angleValue:
        "0°",

      dynamicLabel:
        "Dinamica",

      dynamicValue:
        "Fusione",

      functionLabel:
        "Funzione",

      functionValue:
        "Intensificazione",

      createChart:
        "Creare gratuitamente il mio tema natale",

      understandConjunction:
        "Comprendere la congiunzione",
    },

    meaning: {
      kicker:
        "Una fusione planetaria",

      title:
        "Che cosa significa una congiunzione in astrologia?",

      paragraphs: [
        "La congiunzione è un aspetto che si forma quando due pianeti si trovano molto vicini nel cerchio zodiacale. L’angolo esatto della congiunzione è di 0 gradi, ma viene generalmente accettato un certo margine chiamato orbe.",

        "In una congiunzione, le funzioni simboliche dei due pianeti si mescolano. Non funzionano più in modo completamente separato. Formano una combinazione unica che può diventare molto visibile nel carattere, nelle decisioni o nelle esperienze della persona.",

        "Una congiunzione può essere fluida, intensa, impegnativa o ambivalente. La sua interpretazione dipende soprattutto dalla natura dei pianeti coinvolti, dal segno in cui si trovano, dalla casa interessata e dagli altri aspetti che li influenzano.",
      ],
    },

    functioning: {
      title:
        "Come funziona la congiunzione?",

      steps: [
        {
          number:
            "01",

          title:
            "Le energie si fondono",

          text:
            "I due pianeti agiscono insieme e diventano difficili da separare nell’interpretazione.",
        },

        {
          number:
            "02",

          title:
            "La loro intensità aumenta",

          text:
            "La zona del tema occupata dalla congiunzione riceve una forte concentrazione di energia.",
        },

        {
          number:
            "03",

          title:
            "Le funzioni si influenzano",

          text:
            "Ogni pianeta modifica il modo in cui l’altro si manifesta ed esprime la propria funzione.",
        },

        {
          number:
            "04",

          title:
            "Il tema diventa più concentrato",

          text:
            "La casa e il segno della congiunzione possono diventare elementi dominanti del tema natale.",
        },
      ],
    },

    polarity: {
      kicker:
        "Un’energia originariamente neutra",

      title:
        "La congiunzione è armoniosa o difficile?",

      introduction:
        "A differenza del trigono, del sestile, della quadratura o dell’opposizione, la congiunzione non viene classificata automaticamente come armoniosa o dinamica. Agisce soprattutto come un amplificatore.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Una congiunzione fluida",

          paragraphs: [
            "Quando le funzioni dei pianeti si armonizzano facilmente, la congiunzione può creare una forza naturale, coerente e produttiva.",

            "Per esempio, Mercurio congiunto a Venere può collegare il pensiero, la comunicazione, l’estetica e la diplomazia.",
          ],
        },

        {
          symbol:
            "⚡",

          title:
            "Una congiunzione impegnativa",

          paragraphs: [
            "Quando i pianeti hanno funzioni molto diverse, la loro fusione può produrre tensione interiore o un’energia più difficile da controllare.",

            "Marte congiunto a Saturno può, per esempio, creare un conflitto tra l’impulso ad agire e il bisogno di rallentare o controllarsi.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Gli elementi da osservare",

      title:
        "Come interpretare una congiunzione nel tema natale?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificare i due pianeti",

          text:
            "Ogni pianeta rappresenta una funzione particolare. Bisogna prima comprendere che cosa simboleggia ciascuno prima di studiare la loro combinazione.",
        },

        {
          number:
            "2",

          title:
            "Osservare il loro segno",

          text:
            "Il segno descrive il modo in cui i due pianeti congiunti esprimono la loro energia comune.",
        },

        {
          number:
            "3",

          title:
            "Studiare la loro casa",

          text:
            "La casa rivela l’ambito della vita in cui la congiunzione si manifesta con maggiore forza.",
        },

        {
          number:
            "4",

          title:
            "Verificare la precisione",

          text:
            "Più i pianeti sono vicini all’angolo esatto di 0 gradi, più la loro fusione viene generalmente considerata intensa.",
        },

        {
          number:
            "5",

          title:
            "Esaminare gli altri aspetti",

          text:
            "Una quadratura, un trigono o un’opposizione con un altro pianeta può modificare il modo in cui la congiunzione si esprime.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe della congiunzione",

      introduction:
        "L’orbe è la differenza tra la posizione reale dei pianeti e l’angolo esatto di 0 gradi. Le pratiche variano, ma una congiunzione può spesso essere studiata fino a circa 8 gradi.",

      cards: [
        {
          value:
            "Da 0° a 2°",

          title:
            "Congiunzione molto stretta",

          text:
            "La fusione è molto forte. I pianeti funzionano quasi come un’unica unità nel tema natale.",
        },

        {
          value:
            "Da 3° a 5°",

          title:
            "Congiunzione forte",

          text:
            "L’aspetto rimane chiaramente percepibile e può occupare un posto importante nella personalità.",
        },

        {
          value:
            "Da 6° a 8°",

          title:
            "Congiunzione più ampia",

          text:
            "L’aspetto può essere ancora considerato, soprattutto quando sono coinvolti il Sole o la Luna.",
        },
      ],

      conclusion:
        "Una congiunzione molto precisa è spesso più visibile, ma l’orbe non deve mai essere studiato da solo. La natura dei pianeti e il loro ruolo nell’intero tema rimangono essenziali.",
    },

    examplesSection: {
      kicker:
        "Esempi di interpretazione",

      title:
        "Le principali congiunzioni tra i pianeti",

      introduction:
        "La stessa congiunzione può esprimersi diversamente secondo il segno, la casa e gli altri aspetti. Gli esempi seguenti presentano la loro dinamica generale.",
    },

    examples: [
      {
        planets:
          "Sole congiunto Luna",

        symbol:
          "☀ ☌ ☽",

        keywords:
          "Identità • emozioni • unità interiore",

        text:
          "Il Sole congiunto alla Luna collega fortemente l’identità cosciente e i bisogni emotivi. La persona può agire in modo molto coerente con ciò che sente, ma può anche avere più difficoltà a prendere le distanze dalle proprie reazioni.",
      },

      {
        planets:
          "Mercurio congiunto Venere",

        symbol:
          "☿ ☌ ♀",

        keywords:
          "Comunicazione • fascino • creatività",

        text:
          "Mercurio congiunto a Venere può favorire un’espressione piacevole, diplomatica o artistica. Le idee, i valori e il modo di comunicare funzionano insieme con grande naturalezza.",
      },

      {
        planets:
          "Venere congiunta Marte",

        symbol:
          "♀ ☌ ♂",

        keywords:
          "Attrazione • desiderio • intensità relazionale",

        text:
          "Venere congiunta a Marte unisce il desiderio di armonia con l’energia dell’azione. Questa combinazione può rafforzare l’attrazione, il magnetismo, la creatività e l’intensità nelle relazioni.",
      },

      {
        planets:
          "Marte congiunto Saturno",

        symbol:
          "♂ ☌ ♄",

        keywords:
          "Sforzo • controllo • resistenza",

        text:
          "Marte congiunto a Saturno riunisce l’impulso ad agire e il bisogno di controllo. Questa congiunzione può creare frustrazione, ma anche una grande capacità di resistenza, disciplina e concentrazione.",
      },

      {
        planets:
          "Giove congiunto Saturno",

        symbol:
          "♃ ☌ ♄",

        keywords:
          "Espansione • struttura • costruzione",

        text:
          "Giove congiunto a Saturno cerca di equilibrare crescita e prudenza. Questa combinazione può aiutare a trasformare grandi ambizioni in progetti solidi e duraturi.",
      },

      {
        planets:
          "Luna congiunta Plutone",

        symbol:
          "☽ ☌ ♇",

        keywords:
          "Profondità • istinto • trasformazione",

        text:
          "La Luna congiunta a Plutone intensifica il mondo emotivo. I sentimenti possono essere profondi, potenti e a volte difficili da controllare, con una grande capacità di trasformazione interiore.",
      },
    ],

    signsSection: {
      title:
        "La congiunzione nei segni zodiacali",

      introduction:
        "Il segno conferisce una qualità particolare alla congiunzione. Descrive il modo in cui i pianeti congiunti esprimono la loro energia comune.",

      signs: [
        {
          label:
            "Fuoco",

          signs:
            "Ariete, Leone, Sagittario",

          text:
            "La congiunzione tende a esprimersi con dinamismo, spontaneità, entusiasmo e bisogno di azione.",
        },

        {
          label:
            "Terra",

          signs:
            "Toro, Vergine, Capricorno",

          text:
            "L’energia diventa più concreta, strutturata, prudente e orientata verso risultati duraturi.",
        },

        {
          label:
            "Aria",

          signs:
            "Gemelli, Bilancia, Acquario",

          text:
            "La congiunzione si esprime maggiormente attraverso le idee, gli scambi, le relazioni e la comprensione.",
        },

        {
          label:
            "Acqua",

          signs:
            "Cancro, Scorpione, Pesci",

          text:
            "La fusione planetaria diventa più emotiva, intuitiva, sensibile e profondamente interiore.",
        },
      ],
    },

    housesSection: {
      title:
        "La congiunzione nelle case astrologiche",

      introduction:
        "La casa occupata dalla congiunzione mostra l’ambito della vita in cui questa energia combinata cerca di manifestarsi.",

      houses: [
        {
          title:
            "Case dalla 1 alla 3",

          text:
            "Identità, aspetto, risorse, valori, pensiero, apprendimento e comunicazione.",
        },

        {
          title:
            "Case dalla 4 alla 6",

          text:
            "Famiglia, vita interiore, creatività, amore, lavoro, abitudini e salute quotidiana.",
        },

        {
          title:
            "Case dalla 7 alla 9",

          text:
            "Relazioni, impegni, trasformazioni, convinzioni, viaggi e ricerca di significato.",
        },

        {
          title:
            "Case dalla 10 alla 12",

          text:
            "Carriera, reputazione, progetti, gruppi, vita interiore, spiritualità e inconscio.",
        },
      ],
    },

    stellium: {
      kicker:
        "Concentrazione planetaria",

      title:
        "Qual è la differenza tra una congiunzione e uno stellium?",

      subtitle:
        "Diversi pianeti raggruppati",

      paragraphs: [
        "Una congiunzione riguarda generalmente due pianeti. Uno stellium indica un raggruppamento di tre o più pianeti nello stesso segno o nella stessa casa.",

        "Uno stellium concentra una grande parte dell’energia del tema natale in una zona precisa. Il segno e la casa coinvolti possono quindi diventare particolarmente importanti nella vita della persona.",
      ],
    },

    transits: {
      title:
        "La congiunzione nei transiti astrologici",

      paragraphs: [
        "Una congiunzione può verificarsi anche quando un pianeta in movimento passa sopra un pianeta o un punto del tema natale. In questo caso si parla di transito.",

        "Un transito di congiunzione può indicare un periodo di concentrazione, inizio, intensificazione o trasformazione nell’ambito rappresentato dal pianeta e dalla casa coinvolti.",

        "L’interpretazione dipende dal pianeta in transito. Giove può amplificare e aprire nuove possibilità, mentre Saturno può richiedere maggiore struttura, pazienza o responsabilità.",
      ],
    },

    cta: {
      kicker:
        "Scopri il tuo tema natale",

      title:
        "Hai una congiunzione importante nel tuo tema natale?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire i pianeti, le case e i principali aspetti della nascita.",

      button:
        "Vedere il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sulla congiunzione in astrologia",

      items: [
        {
          question:
            "Che cos’è una congiunzione in astrologia?",

          answer:
            "Una congiunzione si forma quando due pianeti sono molto vicini nello zodiaco, attorno a un angolo di 0 gradi. Le loro funzioni simboliche si mescolano e agiscono con grande intensità.",
        },

        {
          question:
            "La congiunzione è un aspetto positivo?",

          answer:
            "La congiunzione non è automaticamente positiva o negativa. La sua espressione dipende dai pianeti coinvolti, dai segni, dalle case e dagli altri aspetti del tema natale.",
        },

        {
          question:
            "Quale orbe utilizzare per una congiunzione?",

          answer:
            "L’orbe dipende dal metodo astrologico utilizzato. Una congiunzione viene spesso interpretata fino a circa 8 gradi, con un margine talvolta più ampio quando sono coinvolti il Sole o la Luna.",
        },

        {
          question:
            "Una congiunzione rende i pianeti più forti?",

          answer:
            "Generalmente aumenta la loro presenza nel tema natale. I due pianeti diventano strettamente collegati e la loro combinazione può svolgere un ruolo centrale nella personalità o nell’esperienza.",
        },

        {
          question:
            "Che cosa significa una congiunzione nella stessa casa?",

          answer:
            "Quando due pianeti sono congiunti in una casa, le loro funzioni si concentrano nell’ambito della vita rappresentato da quella casa, come le relazioni, la carriera, la famiglia o le risorse.",
        },

        {
          question:
            "Si possono avere diverse congiunzioni nel tema natale?",

          answer:
            "Sì. Un tema natale può contenere diverse congiunzioni e anche un raggruppamento di tre o più pianeti, talvolta chiamato concentrazione planetaria o stellium.",
        },

        {
          question:
            "Come sapere se ho una congiunzione nel mio tema?",

          answer:
            "Genera il tuo tema natale e confronta le posizioni in gradi dei pianeti. Due pianeti molto vicini possono formare una congiunzione secondo l’orbe utilizzato.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigazione tra gli aspetti astrologici",

      previous:
        "Tutti gli aspetti",

      next:
        "Aspetto successivo: opposizione",
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "A conjunção na astrologia: significado no mapa natal | Luna Astralis",

      description:
        "Descubra o significado da conjunção na astrologia, seu ângulo de 0°, seus efeitos entre os planetas e sua interpretação no mapa natal.",

      ogTitle:
        "A conjunção na astrologia: fusão e intensidade planetária",

      ogDescription:
        "Entenda como a conjunção funde as energias de dois planetas e influencia sua expressão no mapa natal.",

      twitterTitle:
        "A conjunção na astrologia | Luna Astralis",

      twitterDescription:
        "Ângulo de 0°, fusão dos planetas, intensidade e exemplos de interpretação no mapa natal.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "A conjunção na astrologia: significado no mapa natal",

      description:
        "Guia completo para compreender a conjunção astrológica, seu ângulo de 0 graus, seu orbe e sua interpretação entre os planetas.",
    },

    breadcrumb: {
      ariaLabel:
        "Trilha de navegação",

      home:
        "Início",

      aspects:
        "Aspectos",

      current:
        "Conjunção",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico maior",

      title:
        "A conjunção na astrologia",

      lead:
        "A conjunção se forma quando dois planetas ocupam quase o mesmo grau do zodíaco. Suas energias se fundem, se fortalecem e se tornam profundamente ligadas no mapa natal.",

      angleLabel:
        "Ângulo",

      angleValue:
        "0°",

      dynamicLabel:
        "Dinâmica",

      dynamicValue:
        "Fusão",

      functionLabel:
        "Função",

      functionValue:
        "Intensificação",

      createChart:
        "Criar meu mapa astral grátis",

      understandConjunction:
        "Compreender a conjunção",
    },

    meaning: {
      kicker:
        "Uma fusão planetária",

      title:
        "O que significa uma conjunção na astrologia?",

      paragraphs: [
        "A conjunção é um aspecto que se forma quando dois planetas estão muito próximos um do outro no círculo zodiacal. O ângulo exato da conjunção é de 0 graus, mas geralmente se aceita uma margem chamada orbe.",

        "Em uma conjunção, as funções simbólicas dos dois planetas se misturam. Eles deixam de funcionar de maneira completamente separada. Formam uma combinação única que pode se tornar muito visível no caráter, nas decisões ou nas experiências da pessoa.",

        "Uma conjunção pode ser fluida, intensa, exigente ou ambivalente. Sua interpretação depende principalmente da natureza dos planetas envolvidos, do signo em que se encontram, da casa correspondente e dos outros aspectos que os afetam.",
      ],
    },

    functioning: {
      title:
        "Como funciona a conjunção?",

      steps: [
        {
          number:
            "01",

          title:
            "As energias se fundem",

          text:
            "Os dois planetas agem juntos e se tornam difíceis de separar na interpretação.",
        },

        {
          number:
            "02",

          title:
            "Sua intensidade aumenta",

          text:
            "A área do mapa ocupada pela conjunção recebe uma forte concentração de energia.",
        },

        {
          number:
            "03",

          title:
            "As funções se influenciam",

          text:
            "Cada planeta modifica a maneira como o outro se manifesta e expressa sua função.",
        },

        {
          number:
            "04",

          title:
            "O mapa se torna mais concentrado",

          text:
            "A casa e o signo da conjunção podem se tornar elementos dominantes do mapa natal.",
        },
      ],
    },

    polarity: {
      kicker:
        "Uma energia originalmente neutra",

      title:
        "A conjunção é harmoniosa ou difícil?",

      introduction:
        "Ao contrário do trígono, do sextil, da quadratura ou da oposição, a conjunção não é automaticamente classificada como harmoniosa ou dinâmica. Ela atua principalmente como um amplificador.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Uma conjunção fluida",

          paragraphs: [
            "Quando as funções dos planetas se harmonizam facilmente, a conjunção pode criar uma força natural, coerente e produtiva.",

            "Por exemplo, Mercúrio conjunto a Vênus pode ligar o pensamento, a comunicação, a estética e a diplomacia.",
          ],
        },

        {
          symbol:
            "⚡",

          title:
            "Uma conjunção exigente",

          paragraphs: [
            "Quando os planetas possuem funções muito diferentes, sua fusão pode produzir tensão interior ou uma energia mais difícil de controlar.",

            "Marte conjunto a Saturno pode, por exemplo, criar um conflito entre o impulso de agir e a necessidade de desacelerar ou se controlar.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Os elementos que devem ser observados",

      title:
        "Como interpretar uma conjunção no mapa natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar os dois planetas",

          text:
            "Cada planeta representa uma função particular. Primeiro é necessário compreender o que cada um simboliza antes de estudar sua combinação.",
        },

        {
          number:
            "2",

          title:
            "Observar o signo",

          text:
            "O signo descreve a maneira como os dois planetas conjuntos expressam sua energia compartilhada.",
        },

        {
          number:
            "3",

          title:
            "Estudar a casa",

          text:
            "A casa revela a área da vida em que a conjunção se manifesta com maior força.",
        },

        {
          number:
            "4",

          title:
            "Verificar a precisão",

          text:
            "Quanto mais próximos os planetas estiverem do ângulo exato de 0 graus, mais intensa costuma ser considerada sua fusão.",
        },

        {
          number:
            "5",

          title:
            "Examinar os outros aspectos",

          text:
            "Uma quadratura, um trígono ou uma oposição com outro planeta pode modificar a maneira como a conjunção se expressa.",
        },
      ],
    },

    orb: {
      title:
        "O orbe da conjunção",

      introduction:
        "O orbe é a diferença entre a posição real dos planetas e o ângulo exato de 0 graus. As práticas variam, mas uma conjunção costuma ser estudada com um orbe de até aproximadamente 8 graus.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Conjunção muito fechada",

          text:
            "A fusão é muito forte. Os planetas funcionam quase como uma única unidade no mapa natal.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Conjunção forte",

          text:
            "O aspecto continua claramente perceptível e pode ocupar um lugar importante na personalidade.",
        },

        {
          value:
            "6° a 8°",

          title:
            "Conjunção mais ampla",

          text:
            "O aspecto ainda pode ser considerado, especialmente quando o Sol ou a Lua está envolvido.",
        },
      ],

      conclusion:
        "Uma conjunção muito exata costuma ser mais visível, mas o orbe nunca deve ser estudado isoladamente. A natureza dos planetas e seu papel no conjunto do mapa continuam essenciais.",
    },

    examplesSection: {
      kicker:
        "Exemplos de interpretação",

      title:
        "As principais conjunções entre os planetas",

      introduction:
        "A mesma conjunção pode se expressar de maneira diferente de acordo com o signo, a casa e os outros aspectos. Os exemplos a seguir apresentam sua dinâmica geral.",
    },

    examples: [
      {
        planets:
          "Sol conjunto Lua",

        symbol:
          "☀ ☌ ☽",

        keywords:
          "Identidade • emoções • unidade interior",

        text:
          "O Sol conjunto à Lua liga fortemente a identidade consciente às necessidades emocionais. A pessoa pode agir de forma muito coerente com o que sente, mas também pode ter mais dificuldade para se distanciar de suas reações.",
      },

      {
        planets:
          "Mercúrio conjunto Vênus",

        symbol:
          "☿ ☌ ♀",

        keywords:
          "Comunicação • charme • criatividade",

        text:
          "Mercúrio conjunto a Vênus pode favorecer uma expressão agradável, diplomática ou artística. As ideias, os valores e a maneira de se comunicar funcionam juntos com muita naturalidade.",
      },

      {
        planets:
          "Vênus conjunta Marte",

        symbol:
          "♀ ☌ ♂",

        keywords:
          "Atração • desejo • intensidade relacional",

        text:
          "Vênus conjunta a Marte une o desejo de harmonia à energia de ação. Essa combinação pode fortalecer a atração, o magnetismo, a criatividade e a intensidade nos relacionamentos.",
      },

      {
        planets:
          "Marte conjunto Saturno",

        symbol:
          "♂ ☌ ♄",

        keywords:
          "Esforço • controle • resistência",

        text:
          "Marte conjunto a Saturno reúne o impulso de agir e a necessidade de controle. Essa conjunção pode criar frustração, mas também grande capacidade de resistência, disciplina e concentração.",
      },

      {
        planets:
          "Júpiter conjunto Saturno",

        symbol:
          "♃ ☌ ♄",

        keywords:
          "Expansão • estrutura • construção",

        text:
          "Júpiter conjunto a Saturno procura equilibrar crescimento e prudência. Essa combinação pode ajudar a transformar grandes ambições em projetos sólidos e duradouros.",
      },

      {
        planets:
          "Lua conjunta Plutão",

        symbol:
          "☽ ☌ ♇",

        keywords:
          "Profundidade • instinto • transformação",

        text:
          "A Lua conjunta a Plutão intensifica o mundo emocional. Os sentimentos podem ser profundos, poderosos e às vezes difíceis de controlar, com grande capacidade de transformação interior.",
      },
    ],

    signsSection: {
      title:
        "A conjunção nos signos zodiacais",

      introduction:
        "O signo dá uma qualidade particular à conjunção. Ele descreve a maneira como os planetas conjuntos expressam sua energia compartilhada.",

      signs: [
        {
          label:
            "Fogo",

          signs:
            "Áries, Leão, Sagitário",

          text:
            "A conjunção tende a se expressar com dinamismo, espontaneidade, entusiasmo e necessidade de ação.",
        },

        {
          label:
            "Terra",

          signs:
            "Touro, Virgem, Capricórnio",

          text:
            "A energia se torna mais concreta, estruturada, prudente e orientada para resultados duradouros.",
        },

        {
          label:
            "Ar",

          signs:
            "Gêmeos, Libra, Aquário",

          text:
            "A conjunção se expressa mais por meio das ideias, das trocas, dos relacionamentos e da compreensão.",
        },

        {
          label:
            "Água",

          signs:
            "Câncer, Escorpião, Peixes",

          text:
            "A fusão planetária se torna mais emocional, intuitiva, sensível e profundamente interior.",
        },
      ],
    },

    housesSection: {
      title:
        "A conjunção nas casas astrológicas",

      introduction:
        "A casa ocupada pela conjunção mostra a área da vida em que essa energia combinada procura se manifestar.",

      houses: [
        {
          title:
            "Casas 1 a 3",

          text:
            "Identidade, aparência, recursos, valores, pensamento, aprendizagem e comunicação.",
        },

        {
          title:
            "Casas 4 a 6",

          text:
            "Família, vida interior, criatividade, amor, trabalho, hábitos e saúde cotidiana.",
        },

        {
          title:
            "Casas 7 a 9",

          text:
            "Relacionamentos, compromissos, transformações, crenças, viagens e busca de sentido.",
        },

        {
          title:
            "Casas 10 a 12",

          text:
            "Carreira, reputação, projetos, grupos, vida interior, espiritualidade e inconsciente.",
        },
      ],
    },

    stellium: {
      kicker:
        "Concentração planetária",

      title:
        "Qual é a diferença entre uma conjunção e um stellium?",

      subtitle:
        "Vários planetas agrupados",

      paragraphs: [
        "Uma conjunção geralmente envolve dois planetas. Um stellium designa um agrupamento de três ou mais planetas no mesmo signo ou na mesma casa.",

        "Um stellium concentra grande parte da energia do mapa natal em uma área específica. O signo e a casa envolvidos podem então se tornar especialmente importantes na vida da pessoa.",
      ],
    },

    transits: {
      title:
        "A conjunção nos trânsitos astrológicos",

      paragraphs: [
        "Uma conjunção também pode ocorrer quando um planeta em movimento passa sobre um planeta ou ponto do seu mapa natal. Nesse caso, fala-se em trânsito.",

        "Um trânsito de conjunção pode indicar um período de concentração, começo, intensificação ou transformação na área representada pelo planeta e pela casa envolvidos.",

        "A interpretação depende do planeta em trânsito. Júpiter pode ampliar e abrir novas possibilidades, enquanto Saturno pode exigir mais estrutura, paciência ou responsabilidade.",
      ],
    },

    cta: {
      kicker:
        "Descubra seu mapa natal",

      title:
        "Você tem uma conjunção importante no seu mapa natal?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir seus planetas, suas casas e os principais aspectos do nascimento.",

      button:
        "Ver meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre a conjunção na astrologia",

      items: [
        {
          question:
            "O que é uma conjunção na astrologia?",

          answer:
            "Uma conjunção se forma quando dois planetas estão muito próximos no zodíaco, em torno de um ângulo de 0 graus. Suas funções simbólicas se misturam e agem com grande intensidade.",
        },

        {
          question:
            "A conjunção é um aspecto positivo?",

          answer:
            "A conjunção não é automaticamente positiva ou negativa. Sua expressão depende dos planetas envolvidos, dos signos, das casas e dos outros aspectos do mapa natal.",
        },

        {
          question:
            "Qual orbe deve ser usado para uma conjunção?",

          answer:
            "O orbe depende do método astrológico utilizado. Uma conjunção costuma ser interpretada com um orbe de até aproximadamente 8 graus, às vezes mais amplo quando o Sol ou a Lua está envolvido.",
        },

        {
          question:
            "Uma conjunção torna os planetas mais fortes?",

          answer:
            "Geralmente aumenta sua presença no mapa natal. Os dois planetas se tornam intimamente ligados e sua combinação pode desempenhar um papel central na personalidade ou na experiência.",
        },

        {
          question:
            "O que significa uma conjunção na mesma casa?",

          answer:
            "Quando dois planetas estão conjuntos em uma casa, suas funções se concentram na área da vida representada por essa casa, como relacionamentos, carreira, família ou recursos.",
        },

        {
          question:
            "É possível ter várias conjunções no mapa natal?",

          answer:
            "Sim. Um mapa natal pode conter várias conjunções e até um agrupamento de três ou mais planetas, às vezes chamado de concentração planetária ou stellium.",
        },

        {
          question:
            "Como saber se tenho uma conjunção no meu mapa?",

          answer:
            "Gere seu mapa natal e compare as posições em graus dos planetas. Dois planetas muito próximos podem formar uma conjunção de acordo com o orbe utilizado.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegação entre os aspectos astrológicos",

      previous:
        "Todos os aspectos",

      next:
        "Próximo aspecto: oposição",
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
