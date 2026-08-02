// i18n/pages/astrologie/trigone.ts

import type {
  Locale,
} from "@/i18n/config";

export type TrineReadingCard = {
  number: string;
  title: string;
  text: string;
};

export type TrinePolarityCard = {
  symbol: string;
  title: string;
  paragraphs: string[];
};

export type TrineMethod = {
  number: string;
  title: string;
  text: string;
};

export type TrineOrbCard = {
  value: string;
  title: string;
  text: string;
};

export type TrineExample = {
  planets: string;
  symbol: string;
  keywords: string;
  text: string;
};

export type TrineElementCard = {
  symbol: string;
  title: string;
  signs: string;
  text: string;
};

export type TrineHouseCard = {
  title: string;
  text: string;
};

export type TrineFaqItem = {
  question: string;
  answer: string;
};

export type TrinePageText = {
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
    home: string;
    aspects: string;
    current: string;
    ariaLabel: string;
  };

  hero: {
    badge: string;
    symbol: string;
    title: string;
    lead: string;

    data: {
      angleLabel: string;
      angleValue: string;
      dynamicLabel: string;
      dynamicValue: string;
      functionLabel: string;
      functionValue: string;
    };

    createChart: string;
    understand: string;
  };

  meaning: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };

  functioning: {
    title: string;
    cards: TrineReadingCard[];
  };

  benefits: {
    kicker: string;
    title: string;
    introduction: string;
    cards: TrinePolarityCard[];
  };

  interpretation: {
    kicker: string;
    title: string;
    methods: TrineMethod[];
  };

  orb: {
    title: string;
    introduction: string;
    cards: TrineOrbCard[];
    conclusion: string;
  };

  examplesSection: {
    kicker: string;
    title: string;
    introduction: string;
  };

  examples: TrineExample[];

  elementsSection: {
    title: string;
    introduction: string;
  };

  elements: TrineElementCard[];

  housesSection: {
    title: string;
    introduction: string;
  };

  houses: TrineHouseCard[];

  grandTrine: {
    kicker: string;
    title: string;
    symbol: string;
    subtitle: string;
    paragraphs: string[];
  };

  dynamicAspects: {
    kicker: string;
    title: string;
    trineSymbol: string;
    dynamicSymbol: string;
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
    items: TrineFaqItem[];
  };

  navigation: {
    ariaLabel: string;
    previous: string;
    next: string;
  };

  disclaimer: string;
};

export const TRIGONE_TRANSLATIONS:
  Record<
    Locale,
    TrinePageText
  > = {
  fr: {
    metadata: {
      title:
        "Le trigone en astrologie : signification dans le thème natal | Luna Astralis",

      description:
        "Découvrez la signification du trigone en astrologie, son angle de 120°, ses facilités naturelles et son interprétation entre les planètes dans le thème natal.",

      ogTitle:
        "Le trigone en astrologie : harmonie, talents et fluidité",

      ogDescription:
        "Comprenez comment le trigone relie deux planètes avec fluidité et révèle des talents naturels, des ressources et des facilités dans le thème natal.",

      twitterTitle:
        "Le trigone en astrologie | Luna Astralis",

      twitterDescription:
        "Angle de 120°, harmonie, talents naturels et potentiel d’épanouissement dans le thème natal.",

      locale:
        "fr_CA",

      language:
        "fr-CA",
    },

    jsonLd: {
      headline:
        "Le trigone en astrologie : signification dans le thème natal",

      description:
        "Guide complet pour comprendre le trigone astrologique, son angle de 120 degrés, son orbe et son interprétation entre les planètes.",
    },

    breadcrumb: {
      home:
        "Accueil",

      aspects:
        "Aspects",

      current:
        "Trigone",

      ariaLabel:
        "Fil d’Ariane",
    },

    hero: {
      badge:
        "✦ Aspect astrologique majeur",

      symbol:
        "△",

      title:
        "Le trigone en astrologie",

      lead:
        "Le trigone se forme lorsque deux planètes sont séparées par un angle de 120 degrés. Il révèle une circulation fluide de l’énergie, des talents naturels et des ressources qui peuvent s’exprimer avec facilité.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "120°",

        dynamicLabel:
          "Dynamique",

        dynamicValue:
          "Harmonie",

        functionLabel:
          "Fonction",

        functionValue:
          "Fluidité",
      },

      createChart:
        "Créer ma carte du ciel gratuite",

      understand:
        "Comprendre le trigone",
    },

    meaning: {
      kicker:
        "Une énergie qui circule naturellement",

      title:
        "Que signifie un trigone en astrologie ?",

      paragraphs: [
        "Le trigone est un aspect qui se forme lorsque deux planètes sont séparées par un angle d’environ 120 degrés dans le cercle zodiacal.",

        "Les fonctions représentées par les deux planètes s’accordent facilement. Elles peuvent collaborer sans produire une tension importante ni exiger un effort constant.",

        "Le trigone indique souvent des talents, des qualités ou des ressources déjà accessibles. Son potentiel devient toutefois plus puissant lorsque la personne choisit de l’utiliser consciemment.",
      ],
    },

    functioning: {
      title:
        "Comment fonctionne le trigone ?",

      cards: [
        {
          number:
            "01",

          title:
            "Les planètes se comprennent",

          text:
            "Leurs fonctions symboliques peuvent collaborer naturellement et se renforcer mutuellement.",
        },

        {
          number:
            "02",

          title:
            "L’énergie circule facilement",

          text:
            "La personne peut exprimer ces qualités sans ressentir de conflit intérieur important.",
        },

        {
          number:
            "03",

          title:
            "Un talent devient accessible",

          text:
            "L’aspect peut révéler une capacité, une attitude ou une ressource naturelle.",
        },

        {
          number:
            "04",

          title:
            "Le potentiel doit être cultivé",

          text:
            "Une facilité peut rester sous-utilisée lorsqu’elle ne demande aucun effort particulier.",
        },
      ],
    },

    benefits: {
      kicker:
        "Une harmonie à développer",

      title:
        "Le trigone est-il toujours bénéfique ?",

      introduction:
        "Le trigone est généralement classé parmi les aspects harmonieux. Il favorise la coopération entre les planètes et peut apporter une sensation de confiance, de fluidité ou de stabilité.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Les forces du trigone",

          paragraphs: [
            "Le trigone peut faciliter l’expression des talents, la confiance en soi, la créativité, les relations ou l’adaptation aux circonstances.",

            "Il permet souvent d’utiliser deux fonctions planétaires de manière cohérente et complémentaire.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Les limites du trigone",

          paragraphs: [
            "Une qualité très naturelle peut être tenue pour acquise. La personne peut manquer de motivation pour la développer davantage.",

            "Le trigone peut aussi favoriser la facilité excessive, la passivité ou le refus de sortir de sa zone de confort.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Les éléments à observer",

      title:
        "Comment interpréter un trigone dans un thème natal ?",

      methods: [
        {
          number:
            "1",

          title:
            "Identifier les deux planètes",

          text:
            "Les planètes indiquent les fonctions qui se soutiennent et peuvent agir avec fluidité.",
        },

        {
          number:
            "2",

          title:
            "Observer les signes",

          text:
            "Les signes montrent la manière dont les qualités du trigone s’expriment dans la personnalité.",
        },

        {
          number:
            "3",

          title:
            "Étudier les maisons",

          text:
            "Les maisons révèlent les domaines de vie dans lesquels la facilité et le talent sont les plus visibles.",
        },

        {
          number:
            "4",

          title:
            "Repérer les talents naturels",

          text:
            "Il est utile d’identifier ce que la personne accomplit facilement ou comprend intuitivement.",
        },

        {
          number:
            "5",

          title:
            "Vérifier si le potentiel est utilisé",

          text:
            "Un trigone devient plus puissant lorsqu’il est soutenu par des décisions, des efforts et des objectifs concrets.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe du trigone",

      introduction:
        "L’orbe représente l’écart entre l’angle exact de 120 degrés et la position réelle des planètes. Selon les méthodes astrologiques, un trigone peut souvent être interprété jusqu’à environ 7 degrés.",

      cards: [
        {
          value:
            "0° à 2°",

          title:
            "Trigone très serré",

          text:
            "L’harmonie entre les deux planètes est particulièrement forte et peut constituer un talent majeur du thème natal.",
        },

        {
          value:
            "3° à 5°",

          title:
            "Trigone fort",

          text:
            "La facilité reste clairement perceptible dans la personnalité, les comportements et les expériences.",
        },

        {
          value:
            "6° à 7°",

          title:
            "Trigone plus large",

          text:
            "L’aspect peut encore être significatif, surtout lorsqu’il implique le Soleil ou la Lune.",
        },
      ],

      conclusion:
        "Un trigone exact est souvent plus visible. Son importance dépend néanmoins de la place occupée par les planètes dans l’ensemble du thème.",
    },

    examplesSection: {
      kicker:
        "Exemples d’interprétation",

      title:
        "Les principaux trigones entre les planètes",

      introduction:
        "Chaque trigone s’exprime selon les signes, les maisons et les autres aspects du thème. Les exemples suivants présentent leur dynamique générale.",
    },

    examples: [
      {
        planets:
          "Soleil trigone Lune",

        symbol:
          "☀ △ ☽",

        keywords:
          "Identité • émotions • cohérence intérieure",

        text:
          "Le Soleil trigone à la Lune favorise une bonne entente entre l’identité consciente et les besoins émotionnels. La personne peut agir avec davantage de cohérence et de stabilité intérieure.",
      },

      {
        planets:
          "Mercure trigone Uranus",

        symbol:
          "☿ △ ♅",

        keywords:
          "Intelligence • intuition • innovation",

        text:
          "Mercure trigone à Uranus peut favoriser une pensée rapide, originale et intuitive. La personne comprend facilement les idées nouvelles et peut trouver des solutions inhabituelles.",
      },

      {
        planets:
          "Vénus trigone Jupiter",

        symbol:
          "♀ △ ♃",

        keywords:
          "Relations • générosité • confiance",

        text:
          "Vénus trigone à Jupiter apporte souvent chaleur, optimisme et générosité dans les relations. Cet aspect peut faciliter les liens sociaux, la créativité et le plaisir.",
      },

      {
        planets:
          "Mars trigone Saturne",

        symbol:
          "♂ △ ♄",

        keywords:
          "Action • discipline • endurance",

        text:
          "Mars trigone à Saturne permet de combiner énergie et maîtrise. La personne peut agir avec patience, structure et constance afin d’atteindre ses objectifs.",
      },

      {
        planets:
          "Jupiter trigone Neptune",

        symbol:
          "♃ △ ♆",

        keywords:
          "Foi • inspiration • compassion",

        text:
          "Jupiter trigone à Neptune peut soutenir l’intuition, l’imagination et une vision généreuse de la vie. Il favorise souvent la confiance dans un idéal ou une vocation.",
      },

      {
        planets:
          "Lune trigone Pluton",

        symbol:
          "☽ △ ♇",

        keywords:
          "Émotions • profondeur • régénération",

        text:
          "La Lune trigone à Pluton peut donner une grande profondeur émotionnelle et une capacité naturelle à comprendre les mécanismes intérieurs. La personne peut se reconstruire après les épreuves.",
      },
    ],

    elementsSection: {
      title:
        "Le trigone et les quatre éléments",

      introduction:
        "Les trigones relient généralement des signes appartenant au même élément. Ils partagent donc une manière semblable de percevoir, de ressentir ou d’utiliser l’énergie.",
    },

    elements: [
      {
        symbol:
          "🔥",

        title:
          "Trigones de Feu",

        signs:
          "Bélier • Lion • Sagittaire",

        text:
          "Ils favorisent l’enthousiasme, l’audace, la créativité, l’inspiration et la confiance en l’action.",
      },

      {
        symbol:
          "🌿",

        title:
          "Trigones de Terre",

        signs:
          "Taureau • Vierge • Capricorne",

        text:
          "Ils apportent réalisme, stabilité, patience, sens pratique et capacité à construire dans le temps.",
      },

      {
        symbol:
          "◌",

        title:
          "Trigones d’Air",

        signs:
          "Gémeaux • Balance • Verseau",

        text:
          "Ils favorisent la communication, les idées, la sociabilité, la compréhension et la circulation des connaissances.",
      },

      {
        symbol:
          "💧",

        title:
          "Trigones d’Eau",

        signs:
          "Cancer • Scorpion • Poissons",

        text:
          "Ils développent l’intuition, la sensibilité, l’empathie, la profondeur émotionnelle et l’imagination.",
      },
    ],

    housesSection: {
      title:
        "Le trigone dans les maisons astrologiques",

      introduction:
        "Les maisons concernées indiquent les domaines de vie dans lesquels les talents naturels et la circulation harmonieuse de l’énergie sont les plus visibles.",
    },

    houses: [
      {
        title:
          "Maisons personnelles",

        text:
          "Les maisons 1 à 3 peuvent faciliter l’expression de soi, la confiance, les apprentissages et la communication.",
      },

      {
        title:
          "Maisons intimes",

        text:
          "Les maisons 4 à 6 peuvent soutenir la vie familiale, la créativité, l’organisation et les habitudes quotidiennes.",
      },

      {
        title:
          "Maisons relationnelles",

        text:
          "Les maisons 7 à 9 peuvent favoriser les relations, les partenariats, les transformations et la recherche de sens.",
      },

      {
        title:
          "Maisons collectives",

        text:
          "Les maisons 10 à 12 peuvent faciliter la carrière, les projets, les liens sociaux, l’intuition et la vie intérieure.",
      },
    ],

    grandTrine: {
      kicker:
        "Une figure astrologique harmonieuse",

      title:
        "Qu’est-ce qu’un grand trigone en astrologie ?",

      symbol:
        "△",

      subtitle:
        "Trois planètes reliées par trois trigones",

      paragraphs: [
        "Un grand trigone se forme lorsque trois planètes sont reliées par trois aspects de 120 degrés. Elles dessinent un grand triangle dans la carte du ciel.",

        "Les trois planètes appartiennent généralement à des signes du même élément. L’énergie circule donc avec une grande fluidité entre plusieurs fonctions du thème.",

        "Cette configuration peut révéler un talent important, une grande stabilité ou une ressource intérieure naturelle. Elle doit cependant être activée pour éviter l’inertie ou la facilité excessive.",
      ],
    },

    dynamicAspects: {
      kicker:
        "Harmonie et motivation",

      title:
        "Le trigone a-t-il besoin des aspects dynamiques ?",

      trineSymbol:
        "△",

      dynamicSymbol:
        "□",

      subtitle:
        "Les talents deviennent plus puissants lorsqu’ils sont activés",

      paragraphs: [
        "Un thème natal composé uniquement d’aspects harmonieux pourrait manquer de tension, de motivation ou de volonté de changement.",

        "Les carrés et les oppositions peuvent pousser la personne à utiliser les ressources indiquées par ses trigones.",

        "Les aspects harmonieux et dynamiques ne s’annulent donc pas. Ils travaillent ensemble pour créer un potentiel plus complet.",
      ],
    },

    transits: {
      title:
        "Le trigone dans les transits astrologiques",

      paragraphs: [
        "Un trigone peut également se former lorsqu’une planète en mouvement crée un angle de 120 degrés avec une planète de votre thème natal.",

        "Ce transit peut correspondre à une période plus fluide, à une occasion naturelle ou à une meilleure circulation de l’énergie dans un domaine précis.",

        "Les trigones de Jupiter peuvent soutenir la confiance et l’expansion, tandis que ceux de Saturne peuvent consolider les efforts et rendre une situation plus stable.",
      ],
    },

    cta: {
      kicker:
        "Découvrez votre thème natal",

      title:
        "Avez-vous un trigone important dans votre carte du ciel ?",

      text:
        "Générez gratuitement votre carte du ciel pour découvrir vos planètes, vos maisons et les principaux aspects de votre naissance.",

      button:
        "Voir ma carte du ciel",
    },

    faq: {
      kicker:
        "Questions fréquentes",

      title:
        "Questions sur le trigone en astrologie",

      items: [
        {
          question:
            "Qu’est-ce qu’un trigone en astrologie ?",

          answer:
            "Un trigone se forme lorsque deux planètes sont séparées par un angle d’environ 120 degrés. Il représente une circulation fluide entre les fonctions des deux planètes.",
        },

        {
          question:
            "Le trigone est-il toujours positif ?",

          answer:
            "Le trigone est généralement considéré comme harmonieux, mais il peut rendre certaines qualités tellement naturelles qu’elles sont peu développées ou tenues pour acquises.",
        },

        {
          question:
            "Quel orbe utiliser pour un trigone ?",

          answer:
            "L’orbe varie selon les méthodes. Un trigone est souvent interprété jusqu’à environ 7 degrés, avec une marge parfois plus large lorsque le Soleil ou la Lune est impliqué.",
        },

        {
          question:
            "Quelle est la différence entre un trigone et un sextile ?",

          answer:
            "Le trigone représente une facilité naturelle et spontanée. Le sextile offre plutôt une possibilité favorable qui doit être activée par l’initiative et les choix.",
        },

        {
          question:
            "Pourquoi les trigones relient-ils souvent les mêmes éléments ?",

          answer:
            "Les signes séparés de 120 degrés appartiennent généralement au même élément. Ils partagent donc une manière semblable de percevoir et d’exprimer l’énergie.",
        },

        {
          question:
            "Un trigone peut-il rendre passif ?",

          answer:
            "Oui. Une facilité très naturelle peut réduire la motivation à faire des efforts. Le potentiel du trigone devient plus puissant lorsqu’il est consciemment cultivé.",
        },

        {
          question:
            "Comment savoir si j’ai un trigone dans mon thème natal ?",

          answer:
            "Il faut générer votre carte du ciel et comparer la position des planètes. Deux planètes séparées par environ 120 degrés peuvent former un trigone.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation entre les aspects astrologiques",

      previous:
        "Aspect précédent : carré",

      next:
        "Aspect suivant : sextile",
    },

    disclaimer:
      "L’astrologie est présentée comme un langage symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Trine in Astrology: Meaning in the Birth Chart | Luna Astralis",

      description:
        "Discover the meaning of the trine in astrology, its 120° angle, natural abilities and interpretation between planets in the birth chart.",

      ogTitle:
        "Trine in Astrology: Harmony, Talents and Flow",

      ogDescription:
        "Understand how the trine connects two planets fluidly and reveals natural talents, resources and abilities in the birth chart.",

      twitterTitle:
        "Trine in Astrology | Luna Astralis",

      twitterDescription:
        "A 120° angle, harmony, natural talents and potential for fulfillment in the birth chart.",

      locale:
        "en_US",

      language:
        "en-US",
    },

    jsonLd: {
      headline:
        "Trine in Astrology: Meaning in the Birth Chart",

      description:
        "A complete guide to understanding the astrological trine, its 120-degree angle, orb and interpretation between planets.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspects",

      current:
        "Trine",

      ariaLabel:
        "Breadcrumb",
    },

    hero: {
      badge:
        "✦ Major astrological aspect",

      symbol:
        "△",

      title:
        "Trine in Astrology",

      lead:
        "A trine forms when two planets are separated by an angle of 120 degrees. It reveals a fluid circulation of energy, natural talents and resources that may be expressed with ease.",

      data: {
        angleLabel:
          "Angle",

        angleValue:
          "120°",

        dynamicLabel:
          "Dynamic",

        dynamicValue:
          "Harmony",

        functionLabel:
          "Function",

        functionValue:
          "Flow",
      },

      createChart:
        "Create my free birth chart",

      understand:
        "Understand the trine",
    },

    meaning: {
      kicker:
        "Energy that flows naturally",

      title:
        "What does a trine mean in astrology?",

      paragraphs: [
        "A trine is an aspect formed when two planets are separated by an angle of approximately 120 degrees in the zodiac circle.",

        "The functions represented by the two planets work together easily. They may cooperate without creating significant tension or requiring constant effort.",

        "A trine often indicates talents, qualities or resources that are already accessible. Its potential becomes more powerful when the person chooses to use it consciously.",
      ],
    },

    functioning: {
      title:
        "How does a trine work?",

      cards: [
        {
          number:
            "01",

          title:
            "The planets understand each other",

          text:
            "Their symbolic functions may cooperate naturally and strengthen one another.",
        },

        {
          number:
            "02",

          title:
            "Energy flows easily",

          text:
            "The person may express these qualities without experiencing significant inner conflict.",
        },

        {
          number:
            "03",

          title:
            "A talent becomes accessible",

          text:
            "The aspect may reveal a natural ability, attitude or resource.",
        },

        {
          number:
            "04",

          title:
            "The potential must be cultivated",

          text:
            "An ability may remain underused when it does not require any particular effort.",
        },
      ],
    },

    benefits: {
      kicker:
        "Harmony to develop",

      title:
        "Is the trine always beneficial?",

      introduction:
        "The trine is generally classified among harmonious aspects. It encourages cooperation between planets and may bring a feeling of confidence, flow or stability.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "The strengths of the trine",

          paragraphs: [
            "The trine may facilitate the expression of talents, self-confidence, creativity, relationships or adaptation to circumstances.",

            "It often allows two planetary functions to be used coherently and complementarily.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "The limits of the trine",

          paragraphs: [
            "A very natural quality may be taken for granted. The person may lack motivation to develop it further.",

            "The trine may also encourage excessive ease, passivity or refusal to leave the comfort zone.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "The elements to observe",

      title:
        "How do you interpret a trine in a birth chart?",

      methods: [
        {
          number:
            "1",

          title:
            "Identify the two planets",

          text:
            "The planets indicate the functions that support one another and may operate fluidly.",
        },

        {
          number:
            "2",

          title:
            "Observe the signs",

          text:
            "The signs show how the qualities of the trine are expressed through the personality.",
        },

        {
          number:
            "3",

          title:
            "Study the houses",

          text:
            "The houses reveal the areas of life in which ease and talent are most visible.",
        },

        {
          number:
            "4",

          title:
            "Recognize natural talents",

          text:
            "It is useful to identify what the person accomplishes easily or understands intuitively.",
        },

        {
          number:
            "5",

          title:
            "Check whether the potential is used",

          text:
            "A trine becomes more powerful when supported by decisions, effort and concrete goals.",
        },
      ],
    },

    orb: {
      title:
        "The orb of the trine",

      introduction:
        "The orb represents the difference between the exact 120-degree angle and the planets’ actual positions. Depending on the astrological method, a trine may often be interpreted up to approximately 7 degrees.",

      cards: [
        {
          value:
            "0° to 2°",

          title:
            "Very tight trine",

          text:
            "The harmony between the two planets is especially strong and may represent a major talent in the birth chart.",
        },

        {
          value:
            "3° to 5°",

          title:
            "Strong trine",

          text:
            "The ease remains clearly visible in personality, behavior and experience.",
        },

        {
          value:
            "6° to 7°",

          title:
            "Wider trine",

          text:
            "The aspect may still be significant, especially when it involves the Sun or Moon.",
        },
      ],

      conclusion:
        "An exact trine is often more visible. Its importance nevertheless depends on the role of the planets within the entire chart.",
    },

    examplesSection: {
      kicker:
        "Interpretation examples",

      title:
        "The main trines between planets",

      introduction:
        "Each trine is expressed according to its signs, houses and the other aspects of the chart. The following examples present their general dynamics.",
    },

    examples: [
      {
        planets:
          "Sun trine Moon",

        symbol:
          "☀ △ ☽",

        keywords:
          "Identity • emotions • inner coherence",

        text:
          "The Sun trine the Moon encourages a good relationship between conscious identity and emotional needs. The person may act with greater coherence and inner stability.",
      },

      {
        planets:
          "Mercury trine Uranus",

        symbol:
          "☿ △ ♅",

        keywords:
          "Intelligence • intuition • innovation",

        text:
          "Mercury trine Uranus may encourage quick, original and intuitive thinking. The person understands new ideas easily and may find unusual solutions.",
      },

      {
        planets:
          "Venus trine Jupiter",

        symbol:
          "♀ △ ♃",

        keywords:
          "Relationships • generosity • confidence",

        text:
          "Venus trine Jupiter often brings warmth, optimism and generosity to relationships. This aspect may facilitate social connections, creativity and enjoyment.",
      },

      {
        planets:
          "Mars trine Saturn",

        symbol:
          "♂ △ ♄",

        keywords:
          "Action • discipline • endurance",

        text:
          "Mars trine Saturn allows energy and self-control to work together. The person may act patiently, structurally and consistently to reach their goals.",
      },

      {
        planets:
          "Jupiter trine Neptune",

        symbol:
          "♃ △ ♆",

        keywords:
          "Faith • inspiration • compassion",

        text:
          "Jupiter trine Neptune may support intuition, imagination and a generous vision of life. It often encourages confidence in an ideal or vocation.",
      },

      {
        planets:
          "Moon trine Pluto",

        symbol:
          "☽ △ ♇",

        keywords:
          "Emotions • depth • regeneration",

        text:
          "The Moon trine Pluto may bring great emotional depth and a natural ability to understand inner mechanisms. The person may rebuild after difficult experiences.",
      },
    ],

    elementsSection: {
      title:
        "The trine and the four elements",

      introduction:
        "Trines generally connect signs belonging to the same element. They therefore share a similar way of perceiving, feeling or using energy.",
    },

    elements: [
      {
        symbol:
          "🔥",

        title:
          "Fire trines",

        signs:
          "Aries • Leo • Sagittarius",

        text:
          "They encourage enthusiasm, boldness, creativity, inspiration and confidence in action.",
      },

      {
        symbol:
          "🌿",

        title:
          "Earth trines",

        signs:
          "Taurus • Virgo • Capricorn",

        text:
          "They bring realism, stability, patience, practicality and the ability to build over time.",
      },

      {
        symbol:
          "◌",

        title:
          "Air trines",

        signs:
          "Gemini • Libra • Aquarius",

        text:
          "They encourage communication, ideas, sociability, understanding and the circulation of knowledge.",
      },

      {
        symbol:
          "💧",

        title:
          "Water trines",

        signs:
          "Cancer • Scorpio • Pisces",

        text:
          "They develop intuition, sensitivity, empathy, emotional depth and imagination.",
      },
    ],

    housesSection: {
      title:
        "The trine in the astrological houses",

      introduction:
        "The houses involved indicate the areas of life in which natural talents and the harmonious circulation of energy are most visible.",
    },

    houses: [
      {
        title:
          "Personal houses",

        text:
          "Houses 1 to 3 may facilitate self-expression, confidence, learning and communication.",
      },

      {
        title:
          "Intimate houses",

        text:
          "Houses 4 to 6 may support family life, creativity, organization and everyday habits.",
      },

      {
        title:
          "Relational houses",

        text:
          "Houses 7 to 9 may encourage relationships, partnerships, transformation and the search for meaning.",
      },

      {
        title:
          "Collective houses",

        text:
          "Houses 10 to 12 may facilitate career, projects, social connections, intuition and inner life.",
      },
    ],

    grandTrine: {
      kicker:
        "A harmonious astrological pattern",

      title:
        "What is a grand trine in astrology?",

      symbol:
        "△",

      subtitle:
        "Three planets connected by three trines",

      paragraphs: [
        "A grand trine forms when three planets are connected by three 120-degree aspects. They create a large triangle in the birth chart.",

        "The three planets generally occupy signs belonging to the same element. Energy therefore flows very easily between several functions of the chart.",

        "This pattern may reveal an important talent, great stability or a natural inner resource. However, it must be activated to avoid inertia or excessive ease.",
      ],
    },

    dynamicAspects: {
      kicker:
        "Harmony and motivation",

      title:
        "Does the trine need dynamic aspects?",

      trineSymbol:
        "△",

      dynamicSymbol:
        "□",

      subtitle:
        "Talents become more powerful when activated",

      paragraphs: [
        "A birth chart composed only of harmonious aspects might lack tension, motivation or the desire for change.",

        "Squares and oppositions may encourage the person to use the resources indicated by their trines.",

        "Harmonious and dynamic aspects do not cancel each other out. They work together to create more complete potential.",
      ],
    },

    transits: {
      title:
        "The trine in astrological transits",

      paragraphs: [
        "A trine may also form when a moving planet creates a 120-degree angle with a planet in your birth chart.",

        "This transit may correspond to a more fluid period, a natural opportunity or improved energy flow in a specific area.",

        "Jupiter trines may support confidence and expansion, while Saturn trines may consolidate effort and make a situation more stable.",
      ],
    },

    cta: {
      kicker:
        "Discover your birth chart",

      title:
        "Do you have an important trine in your birth chart?",

      text:
        "Generate your free birth chart to discover your planets, houses and the main aspects present at your birth.",

      button:
        "View my birth chart",
    },

    faq: {
      kicker:
        "Frequently asked questions",

      title:
        "Questions about the trine in astrology",

      items: [
        {
          question:
            "What is a trine in astrology?",

          answer:
            "A trine forms when two planets are separated by an angle of approximately 120 degrees. It represents a fluid relationship between the functions of both planets.",
        },

        {
          question:
            "Is the trine always positive?",

          answer:
            "The trine is generally considered harmonious, but it may make certain qualities so natural that they remain underdeveloped or are taken for granted.",
        },

        {
          question:
            "What orb should be used for a trine?",

          answer:
            "The orb varies according to the method. A trine is often interpreted up to approximately 7 degrees, with a wider allowance sometimes used when the Sun or Moon is involved.",
        },

        {
          question:
            "What is the difference between a trine and a sextile?",

          answer:
            "The trine represents natural and spontaneous ease. The sextile instead offers a favorable possibility that must be activated through initiative and choices.",
        },

        {
          question:
            "Why do trines often connect the same elements?",

          answer:
            "Signs separated by 120 degrees generally belong to the same element. They therefore share a similar way of perceiving and expressing energy.",
        },

        {
          question:
            "Can a trine make someone passive?",

          answer:
            "Yes. A very natural ability may reduce the motivation to make an effort. The trine’s potential becomes more powerful when consciously cultivated.",
        },

        {
          question:
            "How can I know whether I have a trine in my birth chart?",

          answer:
            "You must generate your birth chart and compare the positions of your planets. Two planets separated by approximately 120 degrees may form a trine.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation between astrological aspects",

      previous:
        "Previous aspect: square",

      next:
        "Next aspect: sextile",
    },

    disclaimer:
      "Astrology is presented as a symbolic language for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "El trígono en astrología: significado en la carta natal | Luna Astralis",

      description:
        "Descubre el significado del trígono en astrología, su ángulo de 120°, sus facilidades naturales y su interpretación entre los planetas de la carta natal.",

      ogTitle:
        "El trígono en astrología: armonía, talentos y fluidez",

      ogDescription:
        "Comprende cómo el trígono conecta dos planetas con fluidez y revela talentos naturales, recursos y facilidades en la carta natal.",

      twitterTitle:
        "El trígono en astrología | Luna Astralis",

      twitterDescription:
        "Ángulo de 120°, armonía, talentos naturales y potencial de realización en la carta natal.",

      locale:
        "es_ES",

      language:
        "es-ES",
    },

    jsonLd: {
      headline:
        "El trígono en astrología: significado en la carta natal",

      description:
        "Guía completa para comprender el trígono astrológico, su ángulo de 120 grados, su orbe y su interpretación entre los planetas.",
    },

    breadcrumb: {
      home:
        "Inicio",

      aspects:
        "Aspectos",

      current:
        "Trígono",

      ariaLabel:
        "Migas de pan",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico mayor",

      symbol:
        "△",

      title:
        "El trígono en astrología",

      lead:
        "El trígono se forma cuando dos planetas están separados por un ángulo de 120 grados. Revela una circulación fluida de la energía, talentos naturales y recursos que pueden expresarse con facilidad.",

      data: {
        angleLabel:
          "Ángulo",

        angleValue:
          "120°",

        dynamicLabel:
          "Dinámica",

        dynamicValue:
          "Armonía",

        functionLabel:
          "Función",

        functionValue:
          "Fluidez",
      },

      createChart:
        "Crear mi carta natal gratis",

      understand:
        "Comprender el trígono",
    },

    meaning: {
      kicker:
        "Una energía que fluye naturalmente",

      title:
        "¿Qué significa un trígono en astrología?",

      paragraphs: [
        "El trígono es un aspecto que se forma cuando dos planetas están separados por un ángulo de aproximadamente 120 grados en el círculo zodiacal.",

        "Las funciones representadas por ambos planetas se armonizan con facilidad. Pueden colaborar sin producir una tensión importante ni exigir un esfuerzo constante.",

        "El trígono suele indicar talentos, cualidades o recursos ya accesibles. Sin embargo, su potencial se vuelve más poderoso cuando la persona decide utilizarlo conscientemente.",
      ],
    },

    functioning: {
      title:
        "¿Cómo funciona el trígono?",

      cards: [
        {
          number:
            "01",

          title:
            "Los planetas se comprenden",

          text:
            "Sus funciones simbólicas pueden colaborar naturalmente y reforzarse mutuamente.",
        },

        {
          number:
            "02",

          title:
            "La energía circula con facilidad",

          text:
            "La persona puede expresar estas cualidades sin experimentar un conflicto interior importante.",
        },

        {
          number:
            "03",

          title:
            "Un talento se vuelve accesible",

          text:
            "El aspecto puede revelar una capacidad, una actitud o un recurso natural.",
        },

        {
          number:
            "04",

          title:
            "El potencial debe cultivarse",

          text:
            "Una facilidad puede permanecer poco utilizada cuando no requiere ningún esfuerzo particular.",
        },
      ],
    },

    benefits: {
      kicker:
        "Una armonía que debe desarrollarse",

      title:
        "¿El trígono es siempre beneficioso?",

      introduction:
        "El trígono suele clasificarse entre los aspectos armoniosos. Favorece la cooperación entre los planetas y puede aportar una sensación de confianza, fluidez o estabilidad.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Las fortalezas del trígono",

          paragraphs: [
            "El trígono puede facilitar la expresión de talentos, la confianza en uno mismo, la creatividad, las relaciones o la adaptación a las circunstancias.",

            "A menudo permite utilizar dos funciones planetarias de manera coherente y complementaria.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Los límites del trígono",

          paragraphs: [
            "Una cualidad muy natural puede darse por sentada. La persona puede carecer de motivación para desarrollarla más.",

            "El trígono también puede favorecer una facilidad excesiva, la pasividad o la resistencia a salir de la zona de confort.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Los elementos que deben observarse",

      title:
        "¿Cómo interpretar un trígono en una carta natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar los dos planetas",

          text:
            "Los planetas indican las funciones que se apoyan y pueden actuar con fluidez.",
        },

        {
          number:
            "2",

          title:
            "Observar los signos",

          text:
            "Los signos muestran cómo se expresan las cualidades del trígono en la personalidad.",
        },

        {
          number:
            "3",

          title:
            "Estudiar las casas",

          text:
            "Las casas revelan los ámbitos de vida en los que la facilidad y el talento son más visibles.",
        },

        {
          number:
            "4",

          title:
            "Reconocer los talentos naturales",

          text:
            "Resulta útil identificar lo que la persona realiza con facilidad o comprende intuitivamente.",
        },

        {
          number:
            "5",

          title:
            "Comprobar si se utiliza el potencial",

          text:
            "Un trígono se vuelve más poderoso cuando está respaldado por decisiones, esfuerzos y objetivos concretos.",
        },
      ],
    },

    orb: {
      title:
        "El orbe del trígono",

      introduction:
        "El orbe representa la diferencia entre el ángulo exacto de 120 grados y la posición real de los planetas. Según el método astrológico, un trígono suele interpretarse hasta aproximadamente 7 grados.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Trígono muy cerrado",

          text:
            "La armonía entre los dos planetas es especialmente fuerte y puede representar un talento importante de la carta natal.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Trígono fuerte",

          text:
            "La facilidad continúa siendo claramente perceptible en la personalidad, el comportamiento y las experiencias.",
        },

        {
          value:
            "6° a 7°",

          title:
            "Trígono más amplio",

          text:
            "El aspecto todavía puede ser significativo, especialmente cuando implica al Sol o a la Luna.",
        },
      ],

      conclusion:
        "Un trígono exacto suele ser más visible. Sin embargo, su importancia depende del papel que ocupan los planetas dentro del conjunto de la carta natal.",
    },

    examplesSection: {
      kicker:
        "Ejemplos de interpretación",

      title:
        "Los principales trígonos entre los planetas",

      introduction:
        "Cada trígono se expresa según los signos, las casas y los demás aspectos de la carta. Los siguientes ejemplos presentan su dinámica general.",
    },

    examples: [
      {
        planets:
          "Sol trígono Luna",

        symbol:
          "☀ △ ☽",

        keywords:
          "Identidad • emociones • coherencia interior",

        text:
          "El Sol en trígono con la Luna favorece una buena relación entre la identidad consciente y las necesidades emocionales. La persona puede actuar con mayor coherencia y estabilidad interior.",
      },

      {
        planets:
          "Mercurio trígono Urano",

        symbol:
          "☿ △ ♅",

        keywords:
          "Inteligencia • intuición • innovación",

        text:
          "Mercurio en trígono con Urano puede favorecer un pensamiento rápido, original e intuitivo. La persona comprende fácilmente las ideas nuevas y puede encontrar soluciones poco habituales.",
      },

      {
        planets:
          "Venus trígono Júpiter",

        symbol:
          "♀ △ ♃",

        keywords:
          "Relaciones • generosidad • confianza",

        text:
          "Venus en trígono con Júpiter suele aportar calidez, optimismo y generosidad en las relaciones. Este aspecto puede facilitar los vínculos sociales, la creatividad y el placer.",
      },

      {
        planets:
          "Marte trígono Saturno",

        symbol:
          "♂ △ ♄",

        keywords:
          "Acción • disciplina • resistencia",

        text:
          "Marte en trígono con Saturno permite combinar energía y dominio personal. La persona puede actuar con paciencia, estructura y constancia para alcanzar sus objetivos.",
      },

      {
        planets:
          "Júpiter trígono Neptuno",

        symbol:
          "♃ △ ♆",

        keywords:
          "Fe • inspiración • compasión",

        text:
          "Júpiter en trígono con Neptuno puede apoyar la intuición, la imaginación y una visión generosa de la vida. Suele favorecer la confianza en un ideal o una vocación.",
      },

      {
        planets:
          "Luna trígono Plutón",

        symbol:
          "☽ △ ♇",

        keywords:
          "Emociones • profundidad • regeneración",

        text:
          "La Luna en trígono con Plutón puede aportar una gran profundidad emocional y una capacidad natural para comprender los mecanismos interiores. La persona puede reconstruirse después de las pruebas.",
      },
    ],

    elementsSection: {
      title:
        "El trígono y los cuatro elementos",

      introduction:
        "Los trígonos suelen conectar signos pertenecientes al mismo elemento. Por lo tanto, comparten una manera similar de percibir, sentir o utilizar la energía.",
    },

    elements: [
      {
        symbol:
          "🔥",

        title:
          "Trígonos de Fuego",

        signs:
          "Aries • Leo • Sagitario",

        text:
          "Favorecen el entusiasmo, la audacia, la creatividad, la inspiración y la confianza en la acción.",
      },

      {
        symbol:
          "🌿",

        title:
          "Trígonos de Tierra",

        signs:
          "Tauro • Virgo • Capricornio",

        text:
          "Aportan realismo, estabilidad, paciencia, sentido práctico y capacidad para construir a largo plazo.",
      },

      {
        symbol:
          "◌",

        title:
          "Trígonos de Aire",

        signs:
          "Géminis • Libra • Acuario",

        text:
          "Favorecen la comunicación, las ideas, la sociabilidad, la comprensión y la circulación del conocimiento.",
      },

      {
        symbol:
          "💧",

        title:
          "Trígonos de Agua",

        signs:
          "Cáncer • Escorpio • Piscis",

        text:
          "Desarrollan la intuición, la sensibilidad, la empatía, la profundidad emocional y la imaginación.",
      },
    ],

    housesSection: {
      title:
        "El trígono en las casas astrológicas",

      introduction:
        "Las casas implicadas indican los ámbitos de vida en los que los talentos naturales y la circulación armoniosa de la energía son más visibles.",
    },

    houses: [
      {
        title:
          "Casas personales",

        text:
          "Las casas 1 a 3 pueden facilitar la expresión personal, la confianza, el aprendizaje y la comunicación.",
      },

      {
        title:
          "Casas íntimas",

        text:
          "Las casas 4 a 6 pueden apoyar la vida familiar, la creatividad, la organización y los hábitos cotidianos.",
      },

      {
        title:
          "Casas relacionales",

        text:
          "Las casas 7 a 9 pueden favorecer las relaciones, las asociaciones, las transformaciones y la búsqueda de sentido.",
      },

      {
        title:
          "Casas colectivas",

        text:
          "Las casas 10 a 12 pueden facilitar la carrera, los proyectos, los vínculos sociales, la intuición y la vida interior.",
      },
    ],

    grandTrine: {
      kicker:
        "Una figura astrológica armoniosa",

      title:
        "¿Qué es un gran trígono en astrología?",

      symbol:
        "△",

      subtitle:
        "Tres planetas conectados por tres trígonos",

      paragraphs: [
        "Un gran trígono se forma cuando tres planetas están conectados por tres aspectos de 120 grados. Dibujan un gran triángulo en la carta natal.",

        "Los tres planetas suelen encontrarse en signos del mismo elemento. La energía circula entonces con gran fluidez entre varias funciones de la carta.",

        "Esta configuración puede revelar un talento importante, una gran estabilidad o un recurso interior natural. Sin embargo, debe activarse para evitar la inercia o una facilidad excesiva.",
      ],
    },

    dynamicAspects: {
      kicker:
        "Armonía y motivación",

      title:
        "¿El trígono necesita aspectos dinámicos?",

      trineSymbol:
        "△",

      dynamicSymbol:
        "□",

      subtitle:
        "Los talentos se vuelven más poderosos cuando se activan",

      paragraphs: [
        "Una carta natal compuesta únicamente por aspectos armoniosos podría carecer de tensión, motivación o deseo de cambio.",

        "Las cuadraturas y las oposiciones pueden impulsar a la persona a utilizar los recursos indicados por sus trígonos.",

        "Los aspectos armoniosos y dinámicos no se anulan. Trabajan juntos para crear un potencial más completo.",
      ],
    },

    transits: {
      title:
        "El trígono en los tránsitos astrológicos",

      paragraphs: [
        "Un trígono también puede formarse cuando un planeta en movimiento crea un ángulo de 120 grados con un planeta de la carta natal.",

        "Este tránsito puede corresponder a un período más fluido, una oportunidad natural o una mejor circulación de la energía en un ámbito específico.",

        "Los trígonos de Júpiter pueden apoyar la confianza y la expansión, mientras que los de Saturno pueden consolidar los esfuerzos y volver una situación más estable.",
      ],
    },

    cta: {
      kicker:
        "Descubre tu carta natal",

      title:
        "¿Tienes un trígono importante en tu carta natal?",

      text:
        "Genera gratuitamente tu carta natal para descubrir tus planetas, tus casas y los principales aspectos presentes en tu nacimiento.",

      button:
        "Ver mi carta natal",
    },

    faq: {
      kicker:
        "Preguntas frecuentes",

      title:
        "Preguntas sobre el trígono en astrología",

      items: [
        {
          question:
            "¿Qué es un trígono en astrología?",

          answer:
            "Un trígono se forma cuando dos planetas están separados por un ángulo de aproximadamente 120 grados. Representa una relación fluida entre las funciones de ambos planetas.",
        },

        {
          question:
            "¿El trígono es siempre positivo?",

          answer:
            "El trígono suele considerarse armonioso, pero puede volver ciertas cualidades tan naturales que permanezcan poco desarrolladas o se den por sentadas.",
        },

        {
          question:
            "¿Qué orbe debe utilizarse para un trígono?",

          answer:
            "El orbe varía según el método. Un trígono suele interpretarse hasta aproximadamente 7 grados, con un margen a veces mayor cuando intervienen el Sol o la Luna.",
        },

        {
          question:
            "¿Cuál es la diferencia entre un trígono y un sextil?",

          answer:
            "El trígono representa una facilidad natural y espontánea. El sextil ofrece una posibilidad favorable que debe activarse mediante la iniciativa y las decisiones.",
        },

        {
          question:
            "¿Por qué los trígonos conectan con frecuencia los mismos elementos?",

          answer:
            "Los signos separados por 120 grados suelen pertenecer al mismo elemento. Por ello, comparten una manera similar de percibir y expresar la energía.",
        },

        {
          question:
            "¿Puede un trígono volver pasiva a una persona?",

          answer:
            "Sí. Una facilidad muy natural puede reducir la motivación para esforzarse. El potencial del trígono se vuelve más poderoso cuando se cultiva conscientemente.",
        },

        {
          question:
            "¿Cómo saber si tengo un trígono en mi carta natal?",

          answer:
            "Debes generar tu carta natal y comparar las posiciones de los planetas. Dos planetas separados por aproximadamente 120 grados pueden formar un trígono.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegación entre los aspectos astrológicos",

      previous:
        "Aspecto anterior: cuadratura",

      next:
        "Aspecto siguiente: sextil",
    },

    disclaimer:
      "La astrología se presenta como un lenguaje simbólico de exploración personal. No sustituye el asesoramiento médico, psicológico, jurídico o financiero.",
  },

  de: {
    metadata: {
      title:
        "Das Trigon in der Astrologie: Bedeutung im Geburtshoroskop | Luna Astralis",

      description:
        "Entdecken Sie die Bedeutung des Trigons in der Astrologie, seinen 120°-Winkel, natürliche Fähigkeiten und seine Deutung zwischen Planeten im Geburtshoroskop.",

      ogTitle:
        "Das Trigon in der Astrologie: Harmonie, Talente und Fluss",

      ogDescription:
        "Verstehen Sie, wie das Trigon zwei Planeten harmonisch verbindet und natürliche Talente, Ressourcen und Fähigkeiten im Geburtshoroskop offenbart.",

      twitterTitle:
        "Das Trigon in der Astrologie | Luna Astralis",

      twitterDescription:
        "120°-Winkel, Harmonie, natürliche Talente und Entfaltungspotenzial im Geburtshoroskop.",

      locale:
        "de_DE",

      language:
        "de-DE",
    },

    jsonLd: {
      headline:
        "Das Trigon in der Astrologie: Bedeutung im Geburtshoroskop",

      description:
        "Ein vollständiger Leitfaden zum astrologischen Trigon, seinem 120-Grad-Winkel, seinem Orbis und seiner Deutung zwischen Planeten.",
    },

    breadcrumb: {
      home:
        "Startseite",

      aspects:
        "Aspekte",

      current:
        "Trigon",

      ariaLabel:
        "Brotkrümelnavigation",
    },

    hero: {
      badge:
        "✦ Bedeutender astrologischer Aspekt",

      symbol:
        "△",

      title:
        "Das Trigon in der Astrologie",

      lead:
        "Ein Trigon entsteht, wenn zwei Planeten durch einen Winkel von 120 Grad getrennt sind. Es zeigt einen fließenden Energieaustausch, natürliche Talente und Ressourcen, die sich mit Leichtigkeit ausdrücken können.",

      data: {
        angleLabel:
          "Winkel",

        angleValue:
          "120°",

        dynamicLabel:
          "Dynamik",

        dynamicValue:
          "Harmonie",

        functionLabel:
          "Funktion",

        functionValue:
          "Fluss",
      },

      createChart:
        "Mein kostenloses Geburtshoroskop erstellen",

      understand:
        "Das Trigon verstehen",
    },

    meaning: {
      kicker:
        "Energie, die natürlich fließt",

      title:
        "Was bedeutet ein Trigon in der Astrologie?",

      paragraphs: [
        "Ein Trigon ist ein Aspekt, der entsteht, wenn zwei Planeten im Tierkreis durch einen Winkel von ungefähr 120 Grad getrennt sind.",

        "Die von den beiden Planeten dargestellten Funktionen harmonieren leicht miteinander. Sie können zusammenarbeiten, ohne starke Spannung zu erzeugen oder ständige Anstrengung zu verlangen.",

        "Ein Trigon weist häufig auf Talente, Eigenschaften oder Ressourcen hin, die bereits zugänglich sind. Sein Potenzial wird jedoch stärker, wenn die Person es bewusst nutzt.",
      ],
    },

    functioning: {
      title:
        "Wie funktioniert ein Trigon?",

      cards: [
        {
          number:
            "01",

          title:
            "Die Planeten verstehen einander",

          text:
            "Ihre symbolischen Funktionen können natürlich zusammenarbeiten und sich gegenseitig verstärken.",
        },

        {
          number:
            "02",

          title:
            "Die Energie fließt leicht",

          text:
            "Die Person kann diese Eigenschaften ausdrücken, ohne einen starken inneren Konflikt zu erleben.",
        },

        {
          number:
            "03",

          title:
            "Ein Talent wird zugänglich",

          text:
            "Der Aspekt kann eine natürliche Fähigkeit, Haltung oder Ressource offenbaren.",
        },

        {
          number:
            "04",

          title:
            "Das Potenzial muss entwickelt werden",

          text:
            "Eine Fähigkeit kann ungenutzt bleiben, wenn sie keine besondere Anstrengung erfordert.",
        },
      ],
    },

    benefits: {
      kicker:
        "Eine Harmonie, die entwickelt werden will",

      title:
        "Ist das Trigon immer vorteilhaft?",

      introduction:
        "Das Trigon wird gewöhnlich zu den harmonischen Aspekten gezählt. Es fördert die Zusammenarbeit zwischen Planeten und kann ein Gefühl von Vertrauen, Fluss oder Stabilität erzeugen.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "Die Stärken des Trigons",

          paragraphs: [
            "Das Trigon kann den Ausdruck von Talenten, Selbstvertrauen, Kreativität, Beziehungen oder Anpassungsfähigkeit erleichtern.",

            "Es ermöglicht häufig, zwei planetare Funktionen kohärent und ergänzend einzusetzen.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Die Grenzen des Trigons",

          paragraphs: [
            "Eine sehr natürliche Eigenschaft kann als selbstverständlich angesehen werden. Der Person kann die Motivation fehlen, sie weiterzuentwickeln.",

            "Das Trigon kann außerdem übermäßige Bequemlichkeit, Passivität oder die Weigerung fördern, die Komfortzone zu verlassen.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Die zu beobachtenden Elemente",

      title:
        "Wie deutet man ein Trigon im Geburtshoroskop?",

      methods: [
        {
          number:
            "1",

          title:
            "Die beiden Planeten bestimmen",

          text:
            "Die Planeten zeigen die Funktionen, die einander unterstützen und fließend zusammenwirken können.",
        },

        {
          number:
            "2",

          title:
            "Die Zeichen betrachten",

          text:
            "Die Zeichen zeigen, wie sich die Eigenschaften des Trigons in der Persönlichkeit ausdrücken.",
        },

        {
          number:
            "3",

          title:
            "Die Häuser untersuchen",

          text:
            "Die Häuser zeigen die Lebensbereiche, in denen Leichtigkeit und Talent am deutlichsten sichtbar werden.",
        },

        {
          number:
            "4",

          title:
            "Natürliche Talente erkennen",

          text:
            "Es ist hilfreich zu erkennen, was die Person mühelos erreicht oder intuitiv versteht.",
        },

        {
          number:
            "5",

          title:
            "Prüfen, ob das Potenzial genutzt wird",

          text:
            "Ein Trigon wird stärker, wenn es durch Entscheidungen, Anstrengung und konkrete Ziele unterstützt wird.",
        },
      ],
    },

    orb: {
      title:
        "Der Orbis des Trigons",

      introduction:
        "Der Orbis bezeichnet die Abweichung zwischen dem exakten 120-Grad-Winkel und den tatsächlichen Positionen der Planeten. Je nach astrologischer Methode wird ein Trigon häufig bis zu ungefähr 7 Grad berücksichtigt.",

      cards: [
        {
          value:
            "0° bis 2°",

          title:
            "Sehr enges Trigon",

          text:
            "Die Harmonie zwischen den beiden Planeten ist besonders stark und kann ein bedeutendes Talent des Geburtshoroskops darstellen.",
        },

        {
          value:
            "3° bis 5°",

          title:
            "Starkes Trigon",

          text:
            "Die Leichtigkeit bleibt in Persönlichkeit, Verhalten und Erfahrungen deutlich wahrnehmbar.",
        },

        {
          value:
            "6° bis 7°",

          title:
            "Weiteres Trigon",

          text:
            "Der Aspekt kann weiterhin bedeutsam sein, besonders wenn Sonne oder Mond beteiligt sind.",
        },
      ],

      conclusion:
        "Ein exaktes Trigon ist häufig deutlicher sichtbar. Seine Bedeutung hängt jedoch von der Rolle der beteiligten Planeten im gesamten Horoskop ab.",
    },

    examplesSection: {
      kicker:
        "Deutungsbeispiele",

      title:
        "Die wichtigsten Trigone zwischen Planeten",

      introduction:
        "Jedes Trigon zeigt sich entsprechend den Zeichen, Häusern und weiteren Aspekten des Horoskops. Die folgenden Beispiele beschreiben ihre allgemeine Dynamik.",
    },

    examples: [
      {
        planets:
          "Sonne Trigon Mond",

        symbol:
          "☀ △ ☽",

        keywords:
          "Identität • Gefühle • innere Stimmigkeit",

        text:
          "Sonne im Trigon zum Mond fördert ein gutes Zusammenspiel zwischen bewusster Identität und emotionalen Bedürfnissen. Die Person kann mit größerer innerer Stimmigkeit und Stabilität handeln.",
      },

      {
        planets:
          "Merkur Trigon Uranus",

        symbol:
          "☿ △ ♅",

        keywords:
          "Intelligenz • Intuition • Innovation",

        text:
          "Merkur im Trigon zu Uranus kann schnelles, originelles und intuitives Denken fördern. Die Person versteht neue Ideen leicht und kann ungewöhnliche Lösungen finden.",
      },

      {
        planets:
          "Venus Trigon Jupiter",

        symbol:
          "♀ △ ♃",

        keywords:
          "Beziehungen • Großzügigkeit • Vertrauen",

        text:
          "Venus im Trigon zu Jupiter bringt häufig Wärme, Optimismus und Großzügigkeit in Beziehungen. Dieser Aspekt kann soziale Kontakte, Kreativität und Freude erleichtern.",
      },

      {
        planets:
          "Mars Trigon Saturn",

        symbol:
          "♂ △ ♄",

        keywords:
          "Handlung • Disziplin • Ausdauer",

        text:
          "Mars im Trigon zu Saturn ermöglicht die Verbindung von Energie und Selbstbeherrschung. Die Person kann geduldig, strukturiert und beständig handeln, um ihre Ziele zu erreichen.",
      },

      {
        planets:
          "Jupiter Trigon Neptun",

        symbol:
          "♃ △ ♆",

        keywords:
          "Glaube • Inspiration • Mitgefühl",

        text:
          "Jupiter im Trigon zu Neptun kann Intuition, Vorstellungskraft und eine großzügige Lebenssicht unterstützen. Häufig fördert es das Vertrauen in ein Ideal oder eine Berufung.",
      },

      {
        planets:
          "Mond Trigon Pluto",

        symbol:
          "☽ △ ♇",

        keywords:
          "Gefühle • Tiefe • Regeneration",

        text:
          "Mond im Trigon zu Pluto kann große emotionale Tiefe und eine natürliche Fähigkeit vermitteln, innere Mechanismen zu verstehen. Die Person kann sich nach schwierigen Erfahrungen neu aufbauen.",
      },
    ],

    elementsSection: {
      title:
        "Das Trigon und die vier Elemente",

      introduction:
        "Trigone verbinden gewöhnlich Zeichen desselben Elements. Sie teilen daher eine ähnliche Art, Energie wahrzunehmen, zu empfinden oder einzusetzen.",
    },

    elements: [
      {
        symbol:
          "🔥",

        title:
          "Feuertrigone",

        signs:
          "Widder • Löwe • Schütze",

        text:
          "Sie fördern Begeisterung, Mut, Kreativität, Inspiration und Vertrauen im Handeln.",
      },

      {
        symbol:
          "🌿",

        title:
          "Erdtrigone",

        signs:
          "Stier • Jungfrau • Steinbock",

        text:
          "Sie bringen Realismus, Stabilität, Geduld, praktischen Sinn und die Fähigkeit, langfristig aufzubauen.",
      },

      {
        symbol:
          "◌",

        title:
          "Lufttrigone",

        signs:
          "Zwillinge • Waage • Wassermann",

        text:
          "Sie fördern Kommunikation, Ideen, Geselligkeit, Verständnis und den Austausch von Wissen.",
      },

      {
        symbol:
          "💧",

        title:
          "Wassertrigone",

        signs:
          "Krebs • Skorpion • Fische",

        text:
          "Sie entwickeln Intuition, Sensibilität, Empathie, emotionale Tiefe und Vorstellungskraft.",
      },
    ],

    housesSection: {
      title:
        "Das Trigon in den astrologischen Häusern",

      introduction:
        "Die beteiligten Häuser zeigen die Lebensbereiche, in denen natürliche Talente und der harmonische Energiefluss am deutlichsten sichtbar werden.",
    },

    houses: [
      {
        title:
          "Persönliche Häuser",

        text:
          "Die Häuser 1 bis 3 können Selbstausdruck, Selbstvertrauen, Lernen und Kommunikation erleichtern.",
      },

      {
        title:
          "Intime Häuser",

        text:
          "Die Häuser 4 bis 6 können Familienleben, Kreativität, Organisation und Alltagsgewohnheiten unterstützen.",
      },

      {
        title:
          "Beziehungshäuser",

        text:
          "Die Häuser 7 bis 9 können Beziehungen, Partnerschaften, Transformation und Sinnsuche fördern.",
      },

      {
        title:
          "Kollektive Häuser",

        text:
          "Die Häuser 10 bis 12 können Beruf, Projekte, soziale Verbindungen, Intuition und Innenleben erleichtern.",
      },
    ],

    grandTrine: {
      kicker:
        "Eine harmonische astrologische Figur",

      title:
        "Was ist ein großes Trigon in der Astrologie?",

      symbol:
        "△",

      subtitle:
        "Drei Planeten, die durch drei Trigone verbunden sind",

      paragraphs: [
        "Ein großes Trigon entsteht, wenn drei Planeten durch drei 120-Grad-Aspekte verbunden sind. Sie bilden ein großes Dreieck im Geburtshoroskop.",

        "Die drei Planeten befinden sich gewöhnlich in Zeichen desselben Elements. Dadurch fließt die Energie sehr leicht zwischen mehreren Funktionen des Horoskops.",

        "Diese Konfiguration kann ein bedeutendes Talent, große Stabilität oder eine natürliche innere Ressource offenbaren. Sie muss jedoch aktiviert werden, um Trägheit oder übermäßige Bequemlichkeit zu vermeiden.",
      ],
    },

    dynamicAspects: {
      kicker:
        "Harmonie und Motivation",

      title:
        "Benötigt das Trigon dynamische Aspekte?",

      trineSymbol:
        "△",

      dynamicSymbol:
        "□",

      subtitle:
        "Talente werden kraftvoller, wenn sie aktiviert werden",

      paragraphs: [
        "Ein Geburtshoroskop, das ausschließlich aus harmonischen Aspekten besteht, könnte Spannung, Motivation oder den Wunsch nach Veränderung vermissen lassen.",

        "Quadrate und Oppositionen können die Person dazu bewegen, die durch ihre Trigone angezeigten Ressourcen zu nutzen.",

        "Harmonische und dynamische Aspekte heben einander daher nicht auf. Sie wirken zusammen und schaffen ein umfassenderes Potenzial.",
      ],
    },

    transits: {
      title:
        "Das Trigon in astrologischen Transiten",

      paragraphs: [
        "Ein Trigon kann auch entstehen, wenn ein laufender Planet einen Winkel von 120 Grad zu einem Planeten im Geburtshoroskop bildet.",

        "Dieser Transit kann einer flüssigeren Phase, einer natürlichen Gelegenheit oder einem verbesserten Energiefluss in einem bestimmten Bereich entsprechen.",

        "Jupiter-Trigone können Vertrauen und Expansion unterstützen, während Saturn-Trigone Anstrengungen festigen und eine Situation stabiler machen können.",
      ],
    },

    cta: {
      kicker:
        "Entdecken Sie Ihr Geburtshoroskop",

      title:
        "Haben Sie ein wichtiges Trigon in Ihrem Geburtshoroskop?",

      text:
        "Erstellen Sie kostenlos Ihr Geburtshoroskop und entdecken Sie Ihre Planeten, Häuser und wichtigsten Aspekte Ihrer Geburt.",

      button:
        "Mein Geburtshoroskop ansehen",
    },

    faq: {
      kicker:
        "Häufige Fragen",

      title:
        "Fragen zum Trigon in der Astrologie",

      items: [
        {
          question:
            "Was ist ein Trigon in der Astrologie?",

          answer:
            "Ein Trigon entsteht, wenn zwei Planeten durch einen Winkel von ungefähr 120 Grad getrennt sind. Es steht für eine fließende Verbindung zwischen den Funktionen beider Planeten.",
        },

        {
          question:
            "Ist das Trigon immer positiv?",

          answer:
            "Das Trigon gilt gewöhnlich als harmonisch, kann manche Eigenschaften jedoch so selbstverständlich machen, dass sie wenig entwickelt oder als gegeben betrachtet werden.",
        },

        {
          question:
            "Welchen Orbis verwendet man für ein Trigon?",

          answer:
            "Der Orbis variiert je nach Methode. Ein Trigon wird häufig bis zu ungefähr 7 Grad berücksichtigt, mit einem manchmal größeren Spielraum, wenn Sonne oder Mond beteiligt sind.",
        },

        {
          question:
            "Was ist der Unterschied zwischen einem Trigon und einem Sextil?",

          answer:
            "Das Trigon steht für natürliche und spontane Leichtigkeit. Das Sextil bietet dagegen eine günstige Möglichkeit, die durch Initiative und Entscheidungen aktiviert werden muss.",
        },

        {
          question:
            "Warum verbinden Trigone häufig dieselben Elemente?",

          answer:
            "Zeichen, die 120 Grad voneinander entfernt sind, gehören gewöhnlich demselben Element an. Sie teilen deshalb eine ähnliche Art, Energie wahrzunehmen und auszudrücken.",
        },

        {
          question:
            "Kann ein Trigon passiv machen?",

          answer:
            "Ja. Eine sehr natürliche Fähigkeit kann die Motivation zur Anstrengung verringern. Das Potenzial des Trigons wird stärker, wenn es bewusst entwickelt wird.",
        },

        {
          question:
            "Wie erkenne ich ein Trigon in meinem Geburtshoroskop?",

          answer:
            "Sie müssen Ihr Geburtshoroskop erstellen und die Positionen der Planeten vergleichen. Zwei Planeten, die ungefähr 120 Grad voneinander entfernt sind, können ein Trigon bilden.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigation zwischen astrologischen Aspekten",

      previous:
        "Vorheriger Aspekt: Quadrat",

      next:
        "Nächster Aspekt: Sextil",
    },

    disclaimer:
      "Astrologie wird als symbolische Sprache zur persönlichen Erkundung dargestellt. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },
    it: {
    metadata: {
      title:
        "Il trigono in astrologia: significato nel tema natale | Luna Astralis",

      description:
        "Scopri il significato del trigono in astrologia, il suo angolo di 120°, le facilità naturali e la sua interpretazione tra i pianeti nel tema natale.",

      ogTitle:
        "Il trigono in astrologia: armonia, talenti e fluidità",

      ogDescription:
        "Comprendi come il trigono colleghi due pianeti con fluidità e riveli talenti naturali, risorse e facilità nel tema natale.",

      twitterTitle:
        "Il trigono in astrologia | Luna Astralis",

      twitterDescription:
        "Angolo di 120°, armonia, talenti naturali e potenziale di realizzazione nel tema natale.",

      locale:
        "it_IT",

      language:
        "it-IT",
    },

    jsonLd: {
      headline:
        "Il trigono in astrologia: significato nel tema natale",

      description:
        "Guida completa per comprendere il trigono astrologico, il suo angolo di 120 gradi, il suo orbe e la sua interpretazione tra i pianeti.",
    },

    breadcrumb: {
      home:
        "Home",

      aspects:
        "Aspetti",

      current:
        "Trigono",

      ariaLabel:
        "Percorso di navigazione",
    },

    hero: {
      badge:
        "✦ Aspetto astrologico maggiore",

      symbol:
        "△",

      title:
        "Il trigono in astrologia",

      lead:
        "Il trigono si forma quando due pianeti sono separati da un angolo di 120 gradi. Rivela una circolazione fluida dell’energia, talenti naturali e risorse che possono esprimersi con facilità.",

      data: {
        angleLabel:
          "Angolo",

        angleValue:
          "120°",

        dynamicLabel:
          "Dinamica",

        dynamicValue:
          "Armonia",

        functionLabel:
          "Funzione",

        functionValue:
          "Fluidità",
      },

      createChart:
        "Creare gratuitamente il mio tema natale",

      understand:
        "Comprendere il trigono",
    },

    meaning: {
      kicker:
        "Un’energia che scorre naturalmente",

      title:
        "Che cosa significa un trigono in astrologia?",

      paragraphs: [
        "Il trigono è un aspetto che si forma quando due pianeti sono separati da un angolo di circa 120 gradi nel cerchio zodiacale.",

        "Le funzioni rappresentate dai due pianeti si accordano facilmente. Possono collaborare senza produrre una tensione importante o richiedere uno sforzo costante.",

        "Il trigono indica spesso talenti, qualità o risorse già accessibili. Il suo potenziale diventa tuttavia più potente quando la persona sceglie di utilizzarlo consapevolmente.",
      ],
    },

    functioning: {
      title:
        "Come funziona il trigono?",

      cards: [
        {
          number:
            "01",

          title:
            "I pianeti si comprendono",

          text:
            "Le loro funzioni simboliche possono collaborare naturalmente e rafforzarsi reciprocamente.",
        },

        {
          number:
            "02",

          title:
            "L’energia scorre facilmente",

          text:
            "La persona può esprimere queste qualità senza sperimentare un importante conflitto interiore.",
        },

        {
          number:
            "03",

          title:
            "Un talento diventa accessibile",

          text:
            "L’aspetto può rivelare una capacità, un atteggiamento o una risorsa naturale.",
        },

        {
          number:
            "04",

          title:
            "Il potenziale deve essere coltivato",

          text:
            "Una facilità può rimanere poco utilizzata quando non richiede uno sforzo particolare.",
        },
      ],
    },

    benefits: {
      kicker:
        "Un’armonia da sviluppare",

      title:
        "Il trigono è sempre benefico?",

      introduction:
        "Il trigono è generalmente classificato tra gli aspetti armonici. Favorisce la collaborazione tra i pianeti e può portare una sensazione di fiducia, fluidità o stabilità.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "I punti di forza del trigono",

          paragraphs: [
            "Il trigono può facilitare l’espressione dei talenti, la fiducia in sé, la creatività, le relazioni o l’adattamento alle circostanze.",

            "Permette spesso di utilizzare due funzioni planetarie in modo coerente e complementare.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "I limiti del trigono",

          paragraphs: [
            "Una qualità molto naturale può essere data per scontata. La persona può non avere motivazione sufficiente per svilupparla ulteriormente.",

            "Il trigono può inoltre favorire un’eccessiva facilità, la passività o il rifiuto di uscire dalla propria zona di comfort.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Gli elementi da osservare",

      title:
        "Come interpretare un trigono nel tema natale?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificare i due pianeti",

          text:
            "I pianeti indicano le funzioni che si sostengono e possono agire con fluidità.",
        },

        {
          number:
            "2",

          title:
            "Osservare i segni",

          text:
            "I segni mostrano come le qualità del trigono si esprimono nella personalità.",
        },

        {
          number:
            "3",

          title:
            "Studiare le case",

          text:
            "Le case rivelano gli ambiti della vita in cui facilità e talento sono più visibili.",
        },

        {
          number:
            "4",

          title:
            "Riconoscere i talenti naturali",

          text:
            "È utile identificare ciò che la persona realizza facilmente o comprende intuitivamente.",
        },

        {
          number:
            "5",

          title:
            "Verificare se il potenziale viene utilizzato",

          text:
            "Un trigono diventa più potente quando è sostenuto da decisioni, sforzi e obiettivi concreti.",
        },
      ],
    },

    orb: {
      title:
        "L’orbe del trigono",

      introduction:
        "L’orbe rappresenta la differenza tra l’angolo esatto di 120 gradi e la posizione reale dei pianeti. Secondo il metodo astrologico, un trigono viene spesso interpretato fino a circa 7 gradi.",

      cards: [
        {
          value:
            "Da 0° a 2°",

          title:
            "Trigono molto stretto",

          text:
            "L’armonia tra i due pianeti è particolarmente forte e può rappresentare un talento importante del tema natale.",
        },

        {
          value:
            "Da 3° a 5°",

          title:
            "Trigono forte",

          text:
            "La facilità rimane chiaramente percepibile nella personalità, nei comportamenti e nelle esperienze.",
        },

        {
          value:
            "Da 6° a 7°",

          title:
            "Trigono più ampio",

          text:
            "L’aspetto può essere ancora significativo, soprattutto quando coinvolge il Sole o la Luna.",
        },
      ],

      conclusion:
        "Un trigono esatto è spesso più visibile. La sua importanza dipende tuttavia dal ruolo dei pianeti nell’insieme del tema natale.",
    },

    examplesSection: {
      kicker:
        "Esempi di interpretazione",

      title:
        "I principali trigoni tra i pianeti",

      introduction:
        "Ogni trigono si esprime in base ai segni, alle case e agli altri aspetti del tema. Gli esempi seguenti presentano la loro dinamica generale.",
    },

    examples: [
      {
        planets:
          "Sole in trigono alla Luna",

        symbol:
          "☀ △ ☽",

        keywords:
          "Identità • emozioni • coerenza interiore",

        text:
          "Il Sole in trigono alla Luna favorisce una buona armonia tra l’identità cosciente e i bisogni emotivi. La persona può agire con maggiore coerenza e stabilità interiore.",
      },

      {
        planets:
          "Mercurio in trigono a Urano",

        symbol:
          "☿ △ ♅",

        keywords:
          "Intelligenza • intuizione • innovazione",

        text:
          "Mercurio in trigono a Urano può favorire un pensiero rapido, originale e intuitivo. La persona comprende facilmente le idee nuove e può trovare soluzioni insolite.",
      },

      {
        planets:
          "Venere in trigono a Giove",

        symbol:
          "♀ △ ♃",

        keywords:
          "Relazioni • generosità • fiducia",

        text:
          "Venere in trigono a Giove porta spesso calore, ottimismo e generosità nelle relazioni. Questo aspetto può facilitare i legami sociali, la creatività e il piacere.",
      },

      {
        planets:
          "Marte in trigono a Saturno",

        symbol:
          "♂ △ ♄",

        keywords:
          "Azione • disciplina • resistenza",

        text:
          "Marte in trigono a Saturno permette di combinare energia e padronanza. La persona può agire con pazienza, struttura e costanza per raggiungere i propri obiettivi.",
      },

      {
        planets:
          "Giove in trigono a Nettuno",

        symbol:
          "♃ △ ♆",

        keywords:
          "Fede • ispirazione • compassione",

        text:
          "Giove in trigono a Nettuno può sostenere l’intuizione, l’immaginazione e una visione generosa della vita. Favorisce spesso la fiducia in un ideale o in una vocazione.",
      },

      {
        planets:
          "Luna in trigono a Plutone",

        symbol:
          "☽ △ ♇",

        keywords:
          "Emozioni • profondità • rigenerazione",

        text:
          "La Luna in trigono a Plutone può donare una grande profondità emotiva e una capacità naturale di comprendere i meccanismi interiori. La persona può ricostruirsi dopo le prove.",
      },
    ],

    elementsSection: {
      title:
        "Il trigono e i quattro elementi",

      introduction:
        "I trigoni collegano generalmente segni appartenenti allo stesso elemento. Condividono quindi un modo simile di percepire, sentire o utilizzare l’energia.",
    },

    elements: [
      {
        symbol:
          "🔥",

        title:
          "Trigoni di Fuoco",

        signs:
          "Ariete • Leone • Sagittario",

        text:
          "Favoriscono entusiasmo, audacia, creatività, ispirazione e fiducia nell’azione.",
      },

      {
        symbol:
          "🌿",

        title:
          "Trigoni di Terra",

        signs:
          "Toro • Vergine • Capricorno",

        text:
          "Portano realismo, stabilità, pazienza, senso pratico e capacità di costruire nel tempo.",
      },

      {
        symbol:
          "◌",

        title:
          "Trigoni d’Aria",

        signs:
          "Gemelli • Bilancia • Acquario",

        text:
          "Favoriscono comunicazione, idee, socievolezza, comprensione e circolazione delle conoscenze.",
      },

      {
        symbol:
          "💧",

        title:
          "Trigoni d’Acqua",

        signs:
          "Cancro • Scorpione • Pesci",

        text:
          "Sviluppano intuizione, sensibilità, empatia, profondità emotiva e immaginazione.",
      },
    ],

    housesSection: {
      title:
        "Il trigono nelle case astrologiche",

      introduction:
        "Le case coinvolte indicano gli ambiti della vita in cui i talenti naturali e la circolazione armoniosa dell’energia sono più visibili.",
    },

    houses: [
      {
        title:
          "Case personali",

        text:
          "Le case da 1 a 3 possono facilitare l’espressione di sé, la fiducia, l’apprendimento e la comunicazione.",
      },

      {
        title:
          "Case intime",

        text:
          "Le case da 4 a 6 possono sostenere la vita familiare, la creatività, l’organizzazione e le abitudini quotidiane.",
      },

      {
        title:
          "Case relazionali",

        text:
          "Le case da 7 a 9 possono favorire le relazioni, le collaborazioni, le trasformazioni e la ricerca di significato.",
      },

      {
        title:
          "Case collettive",

        text:
          "Le case da 10 a 12 possono facilitare la carriera, i progetti, i legami sociali, l’intuizione e la vita interiore.",
      },
    ],

    grandTrine: {
      kicker:
        "Una configurazione astrologica armoniosa",

      title:
        "Che cos’è un grande trigono in astrologia?",

      symbol:
        "△",

      subtitle:
        "Tre pianeti collegati da tre trigoni",

      paragraphs: [
        "Un grande trigono si forma quando tre pianeti sono collegati da tre aspetti di 120 gradi. Disegnano un grande triangolo nel tema natale.",

        "I tre pianeti si trovano generalmente in segni dello stesso elemento. L’energia scorre quindi con grande fluidità tra diverse funzioni del tema.",

        "Questa configurazione può rivelare un talento importante, una grande stabilità o una risorsa interiore naturale. Deve però essere attivata per evitare inerzia o eccessiva facilità.",
      ],
    },

    dynamicAspects: {
      kicker:
        "Armonia e motivazione",

      title:
        "Il trigono ha bisogno degli aspetti dinamici?",

      trineSymbol:
        "△",

      dynamicSymbol:
        "□",

      subtitle:
        "I talenti diventano più potenti quando vengono attivati",

      paragraphs: [
        "Un tema natale composto soltanto da aspetti armonici potrebbe mancare di tensione, motivazione o desiderio di cambiamento.",

        "Le quadrature e le opposizioni possono spingere la persona a utilizzare le risorse indicate dai propri trigoni.",

        "Gli aspetti armonici e dinamici non si annullano. Lavorano insieme per creare un potenziale più completo.",
      ],
    },

    transits: {
      title:
        "Il trigono nei transiti astrologici",

      paragraphs: [
        "Un trigono può formarsi anche quando un pianeta in movimento crea un angolo di 120 gradi con un pianeta del tema natale.",

        "Questo transito può corrispondere a un periodo più fluido, a un’opportunità naturale o a una migliore circolazione dell’energia in un ambito preciso.",

        "I trigoni di Giove possono sostenere fiducia ed espansione, mentre quelli di Saturno possono consolidare gli sforzi e rendere una situazione più stabile.",
      ],
    },

    cta: {
      kicker:
        "Scopri il tuo tema natale",

      title:
        "Hai un trigono importante nel tuo tema natale?",

      text:
        "Genera gratuitamente il tuo tema natale per scoprire i pianeti, le case e i principali aspetti presenti alla nascita.",

      button:
        "Vedere il mio tema natale",
    },

    faq: {
      kicker:
        "Domande frequenti",

      title:
        "Domande sul trigono in astrologia",

      items: [
        {
          question:
            "Che cos’è un trigono in astrologia?",

          answer:
            "Un trigono si forma quando due pianeti sono separati da un angolo di circa 120 gradi. Rappresenta una relazione fluida tra le funzioni dei due pianeti.",
        },

        {
          question:
            "Il trigono è sempre positivo?",

          answer:
            "Il trigono è generalmente considerato armonico, ma può rendere alcune qualità così naturali da lasciarle poco sviluppate o date per scontate.",
        },

        {
          question:
            "Quale orbe si utilizza per un trigono?",

          answer:
            "L’orbe varia secondo il metodo. Un trigono viene spesso interpretato fino a circa 7 gradi, con un margine talvolta più ampio quando sono coinvolti il Sole o la Luna.",
        },

        {
          question:
            "Qual è la differenza tra un trigono e un sestile?",

          answer:
            "Il trigono rappresenta una facilità naturale e spontanea. Il sestile offre invece una possibilità favorevole che deve essere attivata attraverso iniziativa e decisioni.",
        },

        {
          question:
            "Perché i trigoni collegano spesso gli stessi elementi?",

          answer:
            "I segni separati da 120 gradi appartengono generalmente allo stesso elemento. Condividono quindi un modo simile di percepire ed esprimere l’energia.",
        },

        {
          question:
            "Un trigono può rendere passivi?",

          answer:
            "Sì. Una facilità molto naturale può ridurre la motivazione a impegnarsi. Il potenziale del trigono diventa più potente quando viene coltivato consapevolmente.",
        },

        {
          question:
            "Come sapere se ho un trigono nel tema natale?",

          answer:
            "Devi generare il tuo tema natale e confrontare le posizioni dei pianeti. Due pianeti separati da circa 120 gradi possono formare un trigono.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navigazione tra gli aspetti astrologici",

      previous:
        "Aspetto precedente: quadratura",

      next:
        "Aspetto successivo: sestile",
    },

    disclaimer:
      "L’astrologia è presentata come un linguaggio simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "O trígono na astrologia: significado no mapa natal | Luna Astralis",

      description:
        "Descubra o significado do trígono na astrologia, seu ângulo de 120°, suas facilidades naturais e sua interpretação entre os planetas no mapa natal.",

      ogTitle:
        "O trígono na astrologia: harmonia, talentos e fluidez",

      ogDescription:
        "Compreenda como o trígono conecta dois planetas com fluidez e revela talentos naturais, recursos e facilidades no mapa natal.",

      twitterTitle:
        "O trígono na astrologia | Luna Astralis",

      twitterDescription:
        "Ângulo de 120°, harmonia, talentos naturais e potencial de realização no mapa natal.",

      locale:
        "pt_BR",

      language:
        "pt-BR",
    },

    jsonLd: {
      headline:
        "O trígono na astrologia: significado no mapa natal",

      description:
        "Guia completo para compreender o trígono astrológico, seu ângulo de 120 graus, seu orbe e sua interpretação entre os planetas.",
    },

    breadcrumb: {
      home:
        "Início",

      aspects:
        "Aspectos",

      current:
        "Trígono",

      ariaLabel:
        "Navegação estrutural",
    },

    hero: {
      badge:
        "✦ Aspecto astrológico maior",

      symbol:
        "△",

      title:
        "O trígono na astrologia",

      lead:
        "O trígono se forma quando dois planetas estão separados por um ângulo de 120 graus. Ele revela uma circulação fluida da energia, talentos naturais e recursos que podem se expressar com facilidade.",

      data: {
        angleLabel:
          "Ângulo",

        angleValue:
          "120°",

        dynamicLabel:
          "Dinâmica",

        dynamicValue:
          "Harmonia",

        functionLabel:
          "Função",

        functionValue:
          "Fluidez",
      },

      createChart:
        "Criar meu mapa astral grátis",

      understand:
        "Compreender o trígono",
    },

    meaning: {
      kicker:
        "Uma energia que flui naturalmente",

      title:
        "O que significa um trígono na astrologia?",

      paragraphs: [
        "O trígono é um aspecto que se forma quando dois planetas estão separados por um ângulo de aproximadamente 120 graus no círculo zodiacal.",

        "As funções representadas pelos dois planetas se harmonizam com facilidade. Elas podem colaborar sem produzir uma tensão importante ou exigir esforço constante.",

        "O trígono costuma indicar talentos, qualidades ou recursos já acessíveis. No entanto, seu potencial se torna mais poderoso quando a pessoa decide utilizá-lo conscientemente.",
      ],
    },

    functioning: {
      title:
        "Como funciona o trígono?",

      cards: [
        {
          number:
            "01",

          title:
            "Os planetas se compreendem",

          text:
            "Suas funções simbólicas podem colaborar naturalmente e se fortalecer mutuamente.",
        },

        {
          number:
            "02",

          title:
            "A energia flui com facilidade",

          text:
            "A pessoa pode expressar essas qualidades sem experimentar um conflito interior importante.",
        },

        {
          number:
            "03",

          title:
            "Um talento se torna acessível",

          text:
            "O aspecto pode revelar uma capacidade, uma atitude ou um recurso natural.",
        },

        {
          number:
            "04",

          title:
            "O potencial precisa ser cultivado",

          text:
            "Uma facilidade pode permanecer pouco utilizada quando não exige nenhum esforço especial.",
        },
      ],
    },

    benefits: {
      kicker:
        "Uma harmonia a desenvolver",

      title:
        "O trígono é sempre benéfico?",

      introduction:
        "O trígono costuma ser classificado entre os aspectos harmoniosos. Ele favorece a colaboração entre os planetas e pode trazer uma sensação de confiança, fluidez ou estabilidade.",

      cards: [
        {
          symbol:
            "✦",

          title:
            "As forças do trígono",

          paragraphs: [
            "O trígono pode facilitar a expressão dos talentos, a autoconfiança, a criatividade, os relacionamentos ou a adaptação às circunstâncias.",

            "Ele frequentemente permite utilizar duas funções planetárias de maneira coerente e complementar.",
          ],
        },

        {
          symbol:
            "◇",

          title:
            "Os limites do trígono",

          paragraphs: [
            "Uma qualidade muito natural pode ser considerada garantida. A pessoa pode não ter motivação para desenvolvê-la ainda mais.",

            "O trígono também pode favorecer facilidade excessiva, passividade ou resistência em sair da zona de conforto.",
          ],
        },
      ],
    },

    interpretation: {
      kicker:
        "Os elementos que devem ser observados",

      title:
        "Como interpretar um trígono no mapa natal?",

      methods: [
        {
          number:
            "1",

          title:
            "Identificar os dois planetas",

          text:
            "Os planetas indicam as funções que se apoiam e podem agir com fluidez.",
        },

        {
          number:
            "2",

          title:
            "Observar os signos",

          text:
            "Os signos mostram como as qualidades do trígono se expressam na personalidade.",
        },

        {
          number:
            "3",

          title:
            "Estudar as casas",

          text:
            "As casas revelam as áreas da vida em que a facilidade e o talento são mais visíveis.",
        },

        {
          number:
            "4",

          title:
            "Reconhecer os talentos naturais",

          text:
            "É útil identificar aquilo que a pessoa realiza com facilidade ou compreende intuitivamente.",
        },

        {
          number:
            "5",

          title:
            "Verificar se o potencial é utilizado",

          text:
            "Um trígono se torna mais poderoso quando é apoiado por decisões, esforços e objetivos concretos.",
        },
      ],
    },

    orb: {
      title:
        "O orbe do trígono",

      introduction:
        "O orbe representa a diferença entre o ângulo exato de 120 graus e a posição real dos planetas. Conforme o método astrológico, um trígono costuma ser interpretado até aproximadamente 7 graus.",

      cards: [
        {
          value:
            "0° a 2°",

          title:
            "Trígono muito exato",

          text:
            "A harmonia entre os dois planetas é especialmente forte e pode representar um talento importante do mapa natal.",
        },

        {
          value:
            "3° a 5°",

          title:
            "Trígono forte",

          text:
            "A facilidade permanece claramente perceptível na personalidade, nos comportamentos e nas experiências.",
        },

        {
          value:
            "6° a 7°",

          title:
            "Trígono mais amplo",

          text:
            "O aspecto ainda pode ser significativo, principalmente quando envolve o Sol ou a Lua.",
        },
      ],

      conclusion:
        "Um trígono exato costuma ser mais visível. No entanto, sua importância depende do papel dos planetas no conjunto do mapa natal.",
    },

    examplesSection: {
      kicker:
        "Exemplos de interpretação",

      title:
        "Os principais trígonos entre os planetas",

      introduction:
        "Cada trígono se expressa de acordo com os signos, as casas e os demais aspectos do mapa. Os exemplos seguintes apresentam sua dinâmica geral.",
    },

    examples: [
      {
        planets:
          "Sol em trígono com a Lua",

        symbol:
          "☀ △ ☽",

        keywords:
          "Identidade • emoções • coerência interior",

        text:
          "O Sol em trígono com a Lua favorece uma boa relação entre a identidade consciente e as necessidades emocionais. A pessoa pode agir com maior coerência e estabilidade interior.",
      },

      {
        planets:
          "Mercúrio em trígono com Urano",

        symbol:
          "☿ △ ♅",

        keywords:
          "Inteligência • intuição • inovação",

        text:
          "Mercúrio em trígono com Urano pode favorecer um pensamento rápido, original e intuitivo. A pessoa compreende facilmente novas ideias e pode encontrar soluções incomuns.",
      },

      {
        planets:
          "Vênus em trígono com Júpiter",

        symbol:
          "♀ △ ♃",

        keywords:
          "Relacionamentos • generosidade • confiança",

        text:
          "Vênus em trígono com Júpiter costuma trazer calor, otimismo e generosidade aos relacionamentos. Esse aspecto pode facilitar os vínculos sociais, a criatividade e o prazer.",
      },

      {
        planets:
          "Marte em trígono com Saturno",

        symbol:
          "♂ △ ♄",

        keywords:
          "Ação • disciplina • resistência",

        text:
          "Marte em trígono com Saturno permite combinar energia e domínio pessoal. A pessoa pode agir com paciência, estrutura e constância para alcançar seus objetivos.",
      },

      {
        planets:
          "Júpiter em trígono com Netuno",

        symbol:
          "♃ △ ♆",

        keywords:
          "Fé • inspiração • compaixão",

        text:
          "Júpiter em trígono com Netuno pode apoiar a intuição, a imaginação e uma visão generosa da vida. Frequentemente favorece a confiança em um ideal ou em uma vocação.",
      },

      {
        planets:
          "Lua em trígono com Plutão",

        symbol:
          "☽ △ ♇",

        keywords:
          "Emoções • profundidade • regeneração",

        text:
          "A Lua em trígono com Plutão pode trazer grande profundidade emocional e uma capacidade natural de compreender os mecanismos interiores. A pessoa pode se reconstruir depois das dificuldades.",
      },
    ],

    elementsSection: {
      title:
        "O trígono e os quatro elementos",

      introduction:
        "Os trígonos geralmente conectam signos pertencentes ao mesmo elemento. Eles compartilham, portanto, uma maneira semelhante de perceber, sentir ou utilizar a energia.",
    },

    elements: [
      {
        symbol:
          "🔥",

        title:
          "Trígonos de Fogo",

        signs:
          "Áries • Leão • Sagitário",

        text:
          "Favorecem entusiasmo, ousadia, criatividade, inspiração e confiança na ação.",
      },

      {
        symbol:
          "🌿",

        title:
          "Trígonos de Terra",

        signs:
          "Touro • Virgem • Capricórnio",

        text:
          "Trazem realismo, estabilidade, paciência, senso prático e capacidade de construir ao longo do tempo.",
      },

      {
        symbol:
          "◌",

        title:
          "Trígonos de Ar",

        signs:
          "Gêmeos • Libra • Aquário",

        text:
          "Favorecem comunicação, ideias, sociabilidade, compreensão e circulação do conhecimento.",
      },

      {
        symbol:
          "💧",

        title:
          "Trígonos de Água",

        signs:
          "Câncer • Escorpião • Peixes",

        text:
          "Desenvolvem intuição, sensibilidade, empatia, profundidade emocional e imaginação.",
      },
    ],

    housesSection: {
      title:
        "O trígono nas casas astrológicas",

      introduction:
        "As casas envolvidas indicam as áreas da vida em que os talentos naturais e a circulação harmoniosa da energia são mais visíveis.",
    },

    houses: [
      {
        title:
          "Casas pessoais",

        text:
          "As casas 1 a 3 podem facilitar a expressão pessoal, a confiança, o aprendizado e a comunicação.",
      },

      {
        title:
          "Casas íntimas",

        text:
          "As casas 4 a 6 podem apoiar a vida familiar, a criatividade, a organização e os hábitos cotidianos.",
      },

      {
        title:
          "Casas relacionais",

        text:
          "As casas 7 a 9 podem favorecer os relacionamentos, as parcerias, as transformações e a busca de sentido.",
      },

      {
        title:
          "Casas coletivas",

        text:
          "As casas 10 a 12 podem facilitar a carreira, os projetos, os vínculos sociais, a intuição e a vida interior.",
      },
    ],

    grandTrine: {
      kicker:
        "Uma configuração astrológica harmoniosa",

      title:
        "O que é um grande trígono na astrologia?",

      symbol:
        "△",

      subtitle:
        "Três planetas conectados por três trígonos",

      paragraphs: [
        "Um grande trígono se forma quando três planetas estão conectados por três aspectos de 120 graus. Eles desenham um grande triângulo no mapa natal.",

        "Os três planetas geralmente se encontram em signos do mesmo elemento. A energia circula então com grande fluidez entre várias funções do mapa.",

        "Essa configuração pode revelar um talento importante, grande estabilidade ou um recurso interior natural. No entanto, precisa ser ativada para evitar inércia ou facilidade excessiva.",
      ],
    },

    dynamicAspects: {
      kicker:
        "Harmonia e motivação",

      title:
        "O trígono precisa dos aspectos dinâmicos?",

      trineSymbol:
        "△",

      dynamicSymbol:
        "□",

      subtitle:
        "Os talentos se tornam mais poderosos quando são ativados",

      paragraphs: [
        "Um mapa natal composto apenas por aspectos harmoniosos poderia apresentar pouca tensão, motivação ou vontade de mudança.",

        "As quadraturas e as oposições podem incentivar a pessoa a utilizar os recursos indicados pelos seus trígonos.",

        "Os aspectos harmoniosos e dinâmicos não se anulam. Eles trabalham juntos para criar um potencial mais completo.",
      ],
    },

    transits: {
      title:
        "O trígono nos trânsitos astrológicos",

      paragraphs: [
        "Um trígono também pode se formar quando um planeta em movimento cria um ângulo de 120 graus com um planeta do mapa natal.",

        "Esse trânsito pode corresponder a um período mais fluido, a uma oportunidade natural ou a uma melhor circulação da energia em uma área específica.",

        "Os trígonos de Júpiter podem apoiar a confiança e a expansão, enquanto os de Saturno podem consolidar os esforços e tornar uma situação mais estável.",
      ],
    },

    cta: {
      kicker:
        "Descubra seu mapa natal",

      title:
        "Você possui um trígono importante no seu mapa natal?",

      text:
        "Gere gratuitamente seu mapa natal para descobrir seus planetas, suas casas e os principais aspectos presentes no nascimento.",

      button:
        "Ver meu mapa natal",
    },

    faq: {
      kicker:
        "Perguntas frequentes",

      title:
        "Perguntas sobre o trígono na astrologia",

      items: [
        {
          question:
            "O que é um trígono na astrologia?",

          answer:
            "Um trígono se forma quando dois planetas estão separados por um ângulo de aproximadamente 120 graus. Ele representa uma relação fluida entre as funções dos dois planetas.",
        },

        {
          question:
            "O trígono é sempre positivo?",

          answer:
            "O trígono costuma ser considerado harmonioso, mas pode tornar certas qualidades tão naturais que elas permaneçam pouco desenvolvidas ou sejam consideradas garantidas.",
        },

        {
          question:
            "Qual orbe deve ser utilizado para um trígono?",

          answer:
            "O orbe varia conforme o método. Um trígono costuma ser interpretado até aproximadamente 7 graus, com uma margem às vezes maior quando o Sol ou a Lua estão envolvidos.",
        },

        {
          question:
            "Qual é a diferença entre um trígono e um sextil?",

          answer:
            "O trígono representa uma facilidade natural e espontânea. O sextil oferece uma possibilidade favorável que precisa ser ativada por meio da iniciativa e das decisões.",
        },

        {
          question:
            "Por que os trígonos conectam frequentemente os mesmos elementos?",

          answer:
            "Os signos separados por 120 graus geralmente pertencem ao mesmo elemento. Portanto, compartilham uma maneira semelhante de perceber e expressar a energia.",
        },

        {
          question:
            "Um trígono pode tornar uma pessoa passiva?",

          answer:
            "Sim. Uma facilidade muito natural pode reduzir a motivação para se esforçar. O potencial do trígono se torna mais poderoso quando é cultivado conscientemente.",
        },

        {
          question:
            "Como saber se tenho um trígono no mapa natal?",

          answer:
            "Você deve gerar seu mapa natal e comparar as posições dos planetas. Dois planetas separados por aproximadamente 120 graus podem formar um trígono.",
        },
      ],
    },

    navigation: {
      ariaLabel:
        "Navegação entre os aspectos astrológicos",

      previous:
        "Aspecto anterior: quadratura",

      next:
        "Aspecto seguinte: sextil",
    },

    disclaimer:
      "A astrologia é apresentada como uma linguagem simbólica de exploração pessoal. Ela não substitui orientação médica, psicológica, jurídica ou financeira.",
  },
};
