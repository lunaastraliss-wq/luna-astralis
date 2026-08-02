import type {
  Locale,
} from "@/i18n/config";

export type PremiumFeature = {
  icon: string;
  title: string;
  description: string;
};

export type PremiumBenefit = {
  icon: string;
  title: string;
  text: string;
};

export type PremiumProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type PremiumFaqItem = {
  question: string;
  answer: string;
};

export type PremiumPageText = {
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    locale: string;
    language: string;
    imageAlt: string;
  };

  jsonLd: {
    name: string;
    description: string;
  };

  reportPrice: string;
  reportPages: string;

  hero: {
    badge: string;
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    createButton: string;
    previewButton: string;
    previewLink: string;
    personalizedPdf: string;
    downloadAfterPayment: string;
    reportName: string;
    uniquePayment: string;
    coverAlt: string;
    createdForYou: string;
  };

  introduction: {
    label: string;
    title: string;
    description: string;

    solarSignLabel: string;
    solarSignTitle: string;
    solarSignText: string;
    freeChartLink: string;

    featuredLabel: string;
    natalChartLabel: string;
    natalChartTitle: string;
    natalChartText: string;
    startAnalysisLink: string;
  };

  showcase: {
    middlePageText: string;
    label: string;
    title: string;
    description: string;

    personalizedPages: string;
    mainPillars: string;
    uniqueChart: string;

    checklist: string[];

    previewButton: string;
    createButton: string;
    coverAlt: string;
  };

  contents: {
    label: string;
    title: string;
    description: string;
    features: PremiumFeature[];
    button: string;
  };

  benefits: {
    label: string;
    title: string;
    description: string;
    previewLink: string;
    items: PremiumBenefit[];
  };

  process: {
    label: string;
    title: string;
    description: string;
    steps: PremiumProcessStep[];
    button: string;
  };

  order: {
    label: string;
    title: string;
    description: string;

    summaryLabel: string;
    reportName: string;
    uniquePayment: string;

    items: string[];

    securePayment: string;
    noSubscription: string;
    previewLink: string;
  };

  faq: {
    label: string;
    title: string;
    items: PremiumFaqItem[];
  };

  comparison: {
    label: string;
    title: string;
    description: string;
    compareButton: string;
    chooseButton: string;
  };

  disclaimer: string;
};

export const PREMIUM_TRANSLATIONS: Record<
  Locale,
  PremiumPageText
> = {
  fr: {
    metadata: {
      title:
        "Rapport Carte du ciel Premium | Thème astral personnalisé de 40 pages",
      description:
        "Découvrez votre thème astral avec le rapport Premium Luna Astralis : 40 pages personnalisées sur votre personnalité, vos maisons, vos aspects, vos relations, votre carrière, vos forces et vos défis.",
      ogTitle:
        "Rapport Carte du ciel Premium | Luna Astralis",
      ogDescription:
        "Une analyse astrologique approfondie et personnalisée de 40 pages.",
      twitterTitle:
        "Rapport Carte du ciel Premium | Luna Astralis",
      twitterDescription:
        "Explorez votre thème natal en profondeur dans un rapport PDF personnalisé de 40 pages.",
      locale:
        "fr_CA",
      language:
        "fr-CA",
      imageAlt:
        "Couverture du rapport Carte du ciel Premium",
    },

    jsonLd: {
      name:
        "Rapport Carte du ciel Premium",
      description:
        "Rapport astrologique personnalisé de 40 pages comprenant les planètes, les maisons, les aspects, les dominantes, les relations, la carrière, les forces et les défis.",
    },

    reportPrice:
      "49,99 $ US",

    reportPages:
      "40 pages",

    hero: {
      badge:
        "✨ Rapport astrologique personnalisé",
      eyebrow:
        "Votre thème natal • Une analyse approfondie",
      titleBefore:
        "Explorez en profondeur votre",
      titleHighlight:
        "carte du ciel",
      description:
        "Explorez votre personnalité, vos maisons, vos aspects, vos dominantes, vos relations, vos forces et votre potentiel dans un rapport de 40 pages entièrement personnalisé.",
      createButton:
        "Créer mon rapport",
      previewButton:
        "Voir l’aperçu PDF",
      previewLink:
        "📖 Consulter un véritable aperçu du rapport",
      personalizedPdf:
        "PDF personnalisé",
      downloadAfterPayment:
        "Téléchargement après paiement",
      reportName:
        "Rapport Premium",
      uniquePayment:
        "Paiement unique",
      coverAlt:
        "Couverture du rapport Carte du ciel Premium",
      createdForYou:
        "Créé pour vous",
    },

    introduction: {
      label:
        "Au-delà de votre signe",
      title:
        "Vous êtes bien plus que votre signe solaire",
      description:
        "Votre signe astrologique représente une partie importante de votre personnalité, mais il ne raconte pas toute votre histoire. Votre Lune, votre Ascendant, vos planètes, vos maisons et vos aspects permettent d’obtenir une lecture beaucoup plus riche et nuancée de votre fonctionnement.",

      solarSignLabel:
        "Votre signe solaire",
      solarSignTitle:
        "Une première facette",
      solarSignText:
        "Il représente votre identité centrale, votre vitalité et votre manière naturelle de rayonner.",
      freeChartLink:
        "Découvrir la carte gratuite",

      featuredLabel:
        "Analyse personnalisée",
      natalChartLabel:
        "Votre thème natal",
      natalChartTitle:
        "Une personnalité complète",
      natalChartText:
        "Le rapport Premium réunit vos planètes, vos maisons, vos aspects et vos dominantes pour vous offrir une lecture complète, précise et profondément personnelle.",
      startAnalysisLink:
        "Commencer mon analyse",
    },

    showcase: {
      middlePageText:
        "Votre thème astral",
      label:
        "Votre rapport personnalisé",
      title:
        "Une lecture approfondie des grandes dynamiques de votre thème",
      description:
        "Le rapport Premium vous offre un portrait astrologique structuré, détaillé et facile à comprendre. Il relie vos placements, vos maisons, vos aspects et vos dominantes afin de révéler les grandes dynamiques de votre thème.",

      personalizedPages:
        "pages personnalisées",
      mainPillars:
        "piliers principaux",
      uniqueChart:
        "thème unique",

      checklist: [
        "Votre Soleil, votre Lune et votre Ascendant",
        "Les principales planètes de votre thème",
        "Votre équilibre élémentaire",
        "Vos modalités dominantes",
        "Une synthèse claire de vos principales énergies",
      ],

      previewButton:
        "📖 Voir l’aperçu du rapport",
      createButton:
        "Créer mon rapport",
      coverAlt:
        "Aperçu de la couverture du rapport Premium",
    },

    contents: {
      label:
        "Dans votre rapport",
      title:
        "Les grandes dynamiques de votre personnalité astrologique",
      description:
        "Chaque partie du rapport vous aide à mieux comprendre une dimension précise de votre fonctionnement intérieur, de vos relations et de votre potentiel.",

      features: [
        {
          icon:
            "☉",
          title:
            "Soleil, Lune et Ascendant",
          description:
            "Découvrez les trois piliers de votre personnalité astrologique et la manière dont ils interagissent dans votre thème.",
        },
        {
          icon:
            "☿",
          title:
            "Vos planètes",
          description:
            "Explorez les positions planétaires approfondies qui influencent votre pensée, vos émotions, vos désirs et vos actions.",
        },
        {
          icon:
            "△",
          title:
            "Éléments et modalités",
          description:
            "Comprenez l’équilibre entre le Feu, la Terre, l’Air et l’Eau ainsi que votre manière d’agir, de persévérer et de vous adapter.",
        },
        {
          icon:
            "⌂",
          title:
            "Vos maisons astrologiques",
          description:
            "Découvrez dans quels domaines de votre vie les différentes énergies de votre thème s’expriment avec le plus de force.",
        },
        {
          icon:
            "◇",
          title:
            "Vos aspects planétaires",
          description:
            "Analysez les liens harmonieux et les tensions entre vos planètes afin de mieux comprendre vos dynamiques intérieures.",
        },
        {
          icon:
            "★",
          title:
            "Vos dominantes",
          description:
            "Identifiez les planètes, les signes et les énergies qui occupent une place centrale dans votre personnalité.",
        },
        {
          icon:
            "⚖",
          title:
            "Forces et défis",
          description:
            "Mettez en lumière vos aptitudes naturelles, vos zones de tension et les défis qui favorisent votre évolution.",
        },
        {
          icon:
            "♡",
          title:
            "Relations et vie affective",
          description:
            "Comprenez vos besoins relationnels, votre manière d’aimer et les dynamiques qui influencent vos liens.",
        },
        {
          icon:
            "↗",
          title:
            "Carrière et potentiel",
          description:
            "Découvrez vos talents, vos motivations professionnelles et les environnements qui soutiennent votre épanouissement.",
        },
      ],

      button:
        "Obtenir mon rapport Premium",
    },

    benefits: {
      label:
        "Une lecture approfondie de soi",
      title:
        "Comprenez les dynamiques qui façonnent votre parcours",
      description:
        "L’astrologie ne vous enferme pas dans une définition. Elle vous offre un langage symbolique pour observer vos tendances, vos besoins et vos forces avec davantage de recul.",
      previewLink:
        "Consulter l’aperçu réel",

      items: [
        {
          icon:
            "✦",
          title:
            "Comprendre vos contradictions",
          text:
            "Reliez les différentes facettes de votre personnalité afin de mieux comprendre les tensions que vous ressentez parfois.",
        },
        {
          icon:
            "⌂",
          title:
            "Explorer vos domaines de vie",
          text:
            "Découvrez comment vos planètes s’expriment dans vos relations, votre carrière, votre foyer et votre évolution personnelle.",
        },
        {
          icon:
            "◇",
          title:
            "Décoder vos dynamiques intérieures",
          text:
            "Observez les accords et les tensions entre vos planètes pour mieux comprendre vos réactions et vos décisions.",
        },
        {
          icon:
            "★",
          title:
            "Reconnaître votre potentiel",
          text:
            "Identifiez vos dominantes, vos forces naturelles et les défis qui peuvent devenir de véritables leviers de croissance.",
        },
      ],
    },

    process: {
      label:
        "Simple et immédiat",
      title:
        "Comment obtenir votre rapport ?",
      description:
        "Quelques minutes suffisent pour transmettre vos informations et lancer la création de votre analyse personnalisée.",

      steps: [
        {
          number:
            "01",
          title:
            "Indiquez votre naissance",
          description:
            "Entrez votre prénom, votre date, votre heure ainsi que votre ville et votre pays de naissance.",
        },
        {
          number:
            "02",
          title:
            "Votre thème complet est calculé",
          description:
            "Vos planètes, votre Ascendant, vos maisons, vos aspects et vos dominantes sont calculés automatiquement.",
        },
        {
          number:
            "03",
          title:
            "Téléchargez votre rapport",
          description:
            "Après le paiement, votre rapport Premium personnalisé de 40 pages est généré et offert en téléchargement.",
        },
      ],

      button:
        "Commencer maintenant",
    },

    order: {
      label:
        "Votre rapport personnalisé",
      title:
        "Créez votre rapport Carte du ciel Premium",
      description:
        "Entrez vos informations de naissance afin de calculer votre thème natal et de préparer votre rapport astrologique personnalisé.",

      summaryLabel:
        "Votre commande",
      reportName:
        "Rapport Premium",
      uniquePayment:
        "Paiement unique",

      items: [
        "Rapport PDF personnalisé",
        "40 pages d’analyse",
        "Soleil, Lune et Ascendant",
        "Planètes principales",
        "Éléments et modalités",
        "Maisons et aspects",
        "Dominantes, forces et défis",
        "Relations et carrière",
        "Téléchargement après le paiement",
      ],

      securePayment:
        "Paiement sécurisé",
      noSubscription:
        "Aucun abonnement",
      previewLink:
        "Voir l’aperçu avant de commander",
    },

    faq: {
      label:
        "Questions fréquentes",
      title:
        "Tout savoir avant de commencer",

      items: [
        {
          question:
            "Quelle est la différence entre Essentielle et Premium ?",
          answer:
            "Le rapport Essentielle présente les fondations de votre thème astral. Le rapport Premium va plus loin avec vos maisons astrologiques, vos aspects planétaires, vos dominantes, vos forces, vos défis, vos relations et votre potentiel professionnel.",
        },
        {
          question:
            "Quelles informations dois-je fournir ?",
          answer:
            "Vous devez fournir votre prénom, votre date de naissance, votre heure de naissance ainsi que votre ville et votre pays de naissance.",
        },
        {
          question:
            "Pourquoi l’heure de naissance est-elle importante ?",
          answer:
            "Une heure précise permet de calculer correctement votre Ascendant et vos maisons astrologiques. Sans heure fiable, certaines sections du rapport pourraient être inexactes.",
        },
        {
          question:
            "Le rapport est-il réellement personnalisé ?",
          answer:
            "Oui. Le rapport est généré à partir de vos propres positions planétaires, de vos maisons, de vos aspects et de votre véritable carte du ciel.",
        },
        {
          question:
            "Comment vais-je recevoir mon rapport ?",
          answer:
            "Votre rapport personnalisé est généré au format PDF après le paiement. Vous pourrez le télécharger directement depuis la page de confirmation.",
        },
        {
          question:
            "Le paiement est-il récurrent ?",
          answer:
            "Non. Il s’agit d’un paiement unique de 49,99 $ US. Aucun abonnement n’est associé à votre commande.",
        },
      ],
    },

    comparison: {
      label:
        "Vous souhaitez comparer les trois niveaux ?",
      title:
        "Comparez les trois rapports Carte du ciel",
      description:
        "Découvrez les différences entre les rapports Essentielle, Premium et Signature afin de choisir le niveau d’analyse qui vous convient.",
      compareButton:
        "Comparer les trois rapports",
      chooseButton:
        "Choisir Premium",
    },

    disclaimer:
      "L’astrologie est proposée comme un outil symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Premium Birth Chart Report | Personalized 40-Page Astrology Report",
      description:
        "Discover your birth chart with the Luna Astralis Premium Report: 40 personalized pages about your personality, houses, aspects, relationships, career, strengths and challenges.",
      ogTitle:
        "Premium Birth Chart Report | Luna Astralis",
      ogDescription:
        "An in-depth and personalized 40-page astrology analysis.",
      twitterTitle:
        "Premium Birth Chart Report | Luna Astralis",
      twitterDescription:
        "Explore your birth chart in depth with a personalized 40-page PDF report.",
      locale:
        "en_US",
      language:
        "en-US",
      imageAlt:
        "Cover of the Premium Birth Chart Report",
    },

    jsonLd: {
      name:
        "Premium Birth Chart Report",
      description:
        "A personalized 40-page astrology report covering planets, houses, aspects, dominant energies, relationships, career, strengths and challenges.",
    },

    reportPrice:
      "US$49.99",

    reportPages:
      "40 pages",

    hero: {
      badge:
        "✨ Personalized astrology report",
      eyebrow:
        "Your birth chart • An in-depth analysis",
      titleBefore:
        "Explore your",
      titleHighlight:
        "birth chart in depth",
      description:
        "Explore your personality, houses, aspects, dominant energies, relationships, strengths and potential in a fully personalized 40-page report.",
      createButton:
        "Create my report",
      previewButton:
        "View the PDF preview",
      previewLink:
        "📖 View a real preview of the report",
      personalizedPdf:
        "Personalized PDF",
      downloadAfterPayment:
        "Download after payment",
      reportName:
        "Premium Report",
      uniquePayment:
        "One-time payment",
      coverAlt:
        "Cover of the Premium Birth Chart Report",
      createdForYou:
        "Created for you",
    },

    introduction: {
      label:
        "Beyond your zodiac sign",
      title:
        "You are much more than your Sun sign",
      description:
        "Your zodiac sign represents an important part of your personality, but it does not tell your whole story. Your Moon, Ascendant, planets, houses and aspects provide a much richer and more nuanced understanding of how you function.",

      solarSignLabel:
        "Your Sun sign",
      solarSignTitle:
        "A first dimension",
      solarSignText:
        "It represents your core identity, vitality and natural way of expressing your light.",
      freeChartLink:
        "Discover the free birth chart",

      featuredLabel:
        "Personalized analysis",
      natalChartLabel:
        "Your birth chart",
      natalChartTitle:
        "A complete personality",
      natalChartText:
        "The Premium Report brings together your planets, houses, aspects and dominant energies to offer a complete, precise and deeply personal interpretation.",
      startAnalysisLink:
        "Start my analysis",
    },

    showcase: {
      middlePageText:
        "Your birth chart",
      label:
        "Your personalized report",
      title:
        "An in-depth interpretation of the major dynamics in your chart",
      description:
        "The Premium Report offers a structured, detailed and easy-to-understand astrological portrait. It connects your placements, houses, aspects and dominant energies to reveal the major dynamics in your chart.",

      personalizedPages:
        "personalized pages",
      mainPillars:
        "main pillars",
      uniqueChart:
        "unique chart",

      checklist: [
        "Your Sun, Moon and Ascendant",
        "The main planets in your chart",
        "Your elemental balance",
        "Your dominant modalities",
        "A clear summary of your main energies",
      ],

      previewButton:
        "📖 View the report preview",
      createButton:
        "Create my report",
      coverAlt:
        "Preview of the Premium Report cover",
    },

    contents: {
      label:
        "Inside your report",
      title:
        "The major dynamics of your astrological personality",
      description:
        "Each section helps you understand a specific dimension of your inner functioning, relationships and potential.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sun, Moon and Ascendant",
          description:
            "Discover the three pillars of your astrological personality and how they interact within your chart.",
        },
        {
          icon:
            "☿",
          title:
            "Your planets",
          description:
            "Explore the planetary placements that influence your thoughts, emotions, desires and actions.",
        },
        {
          icon:
            "△",
          title:
            "Elements and modalities",
          description:
            "Understand the balance between Fire, Earth, Air and Water, as well as how you act, persist and adapt.",
        },
        {
          icon:
            "⌂",
          title:
            "Your astrological houses",
          description:
            "Discover the areas of life in which the different energies of your chart express themselves most strongly.",
        },
        {
          icon:
            "◇",
          title:
            "Your planetary aspects",
          description:
            "Analyze the harmonious connections and tensions between your planets to better understand your inner dynamics.",
        },
        {
          icon:
            "★",
          title:
            "Your dominant energies",
          description:
            "Identify the planets, signs and energies that play a central role in your personality.",
        },
        {
          icon:
            "⚖",
          title:
            "Strengths and challenges",
          description:
            "Highlight your natural abilities, areas of tension and the challenges that support your growth.",
        },
        {
          icon:
            "♡",
          title:
            "Relationships and emotional life",
          description:
            "Understand your relationship needs, the way you love and the dynamics that influence your connections.",
        },
        {
          icon:
            "↗",
          title:
            "Career and potential",
          description:
            "Discover your talents, professional motivations and the environments that support your fulfillment.",
        },
      ],

      button:
        "Get my Premium Report",
    },

    benefits: {
      label:
        "An in-depth exploration of yourself",
      title:
        "Understand the dynamics shaping your journey",
      description:
        "Astrology does not confine you to a definition. It offers a symbolic language through which you can observe your tendencies, needs and strengths with greater perspective.",
      previewLink:
        "View the real preview",

      items: [
        {
          icon:
            "✦",
          title:
            "Understand your contradictions",
          text:
            "Connect the different facets of your personality to better understand the tensions you sometimes experience.",
        },
        {
          icon:
            "⌂",
          title:
            "Explore your areas of life",
          text:
            "Discover how your planets express themselves through relationships, career, home and personal development.",
        },
        {
          icon:
            "◇",
          title:
            "Decode your inner dynamics",
          text:
            "Observe the harmonies and tensions between your planets to better understand your reactions and decisions.",
        },
        {
          icon:
            "★",
          title:
            "Recognize your potential",
          text:
            "Identify your dominant energies, natural strengths and the challenges that can become powerful drivers of growth.",
        },
      ],
    },

    process: {
      label:
        "Simple and immediate",
      title:
        "How do you receive your report?",
      description:
        "It only takes a few minutes to provide your information and begin creating your personalized analysis.",

      steps: [
        {
          number:
            "01",
          title:
            "Enter your birth information",
          description:
            "Enter your first name, birth date, birth time, birth city and birth country.",
        },
        {
          number:
            "02",
          title:
            "Your complete chart is calculated",
          description:
            "Your planets, Ascendant, houses, aspects and dominant energies are calculated automatically.",
        },
        {
          number:
            "03",
          title:
            "Download your report",
          description:
            "After payment, your personalized 40-page Premium Report is generated and made available for download.",
        },
      ],

      button:
        "Start now",
    },

    order: {
      label:
        "Your personalized report",
      title:
        "Create your Premium Birth Chart Report",
      description:
        "Enter your birth information so your birth chart can be calculated and your personalized astrology report prepared.",

      summaryLabel:
        "Your order",
      reportName:
        "Premium Report",
      uniquePayment:
        "One-time payment",

      items: [
        "Personalized PDF report",
        "40 pages of analysis",
        "Sun, Moon and Ascendant",
        "Main planets",
        "Elements and modalities",
        "Houses and aspects",
        "Dominant energies, strengths and challenges",
        "Relationships and career",
        "Download after payment",
      ],

      securePayment:
        "Secure payment",
      noSubscription:
        "No subscription",
      previewLink:
        "View the preview before ordering",
    },

    faq: {
      label:
        "Frequently asked questions",
      title:
        "Everything you need to know before starting",

      items: [
        {
          question:
            "What is the difference between Essential and Premium?",
          answer:
            "The Essential Report presents the foundations of your birth chart. The Premium Report goes further with your astrological houses, planetary aspects, dominant energies, strengths, challenges, relationships and professional potential.",
        },
        {
          question:
            "What information do I need to provide?",
          answer:
            "You must provide your first name, birth date, birth time, birth city and birth country.",
        },
        {
          question:
            "Why is the birth time important?",
          answer:
            "An accurate birth time allows your Ascendant and astrological houses to be calculated correctly. Without a reliable time, some sections of the report may be inaccurate.",
        },
        {
          question:
            "Is the report truly personalized?",
          answer:
            "Yes. The report is generated from your own planetary positions, houses, aspects and actual birth chart.",
        },
        {
          question:
            "How will I receive my report?",
          answer:
            "Your personalized report is generated as a PDF after payment. You can download it directly from the confirmation page.",
        },
        {
          question:
            "Is the payment recurring?",
          answer:
            "No. It is a one-time payment of US$49.99. No subscription is associated with your order.",
        },
      ],
    },

    comparison: {
      label:
        "Would you like to compare all three levels?",
      title:
        "Compare the three Birth Chart Reports",
      description:
        "Discover the differences between the Essential, Premium and Signature Reports to choose the level of analysis that best suits you.",
      compareButton:
        "Compare the three reports",
      chooseButton:
        "Choose Premium",
    },

    disclaimer:
      "Astrology is offered as a symbolic tool for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Informe Premium de Carta Natal | Informe astrológico personalizado de 40 páginas",
      description:
        "Descubre tu carta natal con el Informe Premium Luna Astralis: 40 páginas personalizadas sobre tu personalidad, casas, aspectos, relaciones, carrera, fortalezas y desafíos.",
      ogTitle:
        "Informe Premium de Carta Natal | Luna Astralis",
      ogDescription:
        "Un análisis astrológico profundo y personalizado de 40 páginas.",
      twitterTitle:
        "Informe Premium de Carta Natal | Luna Astralis",
      twitterDescription:
        "Explora tu carta natal en profundidad con un informe PDF personalizado de 40 páginas.",
      locale:
        "es_ES",
      language:
        "es-ES",
      imageAlt:
        "Portada del Informe Premium de Carta Natal",
    },

    jsonLd: {
      name:
        "Informe Premium de Carta Natal",
      description:
        "Informe astrológico personalizado de 40 páginas que incluye planetas, casas, aspectos, energías dominantes, relaciones, carrera, fortalezas y desafíos.",
    },

    reportPrice:
      "49,99 US$",

    reportPages:
      "40 páginas",

    hero: {
      badge:
        "✨ Informe astrológico personalizado",
      eyebrow:
        "Tu carta natal • Un análisis profundo",
      titleBefore:
        "Explora en profundidad tu",
      titleHighlight:
        "carta natal",
      description:
        "Explora tu personalidad, tus casas, tus aspectos, tus energías dominantes, tus relaciones, tus fortalezas y tu potencial en un informe completamente personalizado de 40 páginas.",
      createButton:
        "Crear mi informe",
      previewButton:
        "Ver la vista previa en PDF",
      previewLink:
        "📖 Consultar una vista previa real del informe",
      personalizedPdf:
        "PDF personalizado",
      downloadAfterPayment:
        "Descarga después del pago",
      reportName:
        "Informe Premium",
      uniquePayment:
        "Pago único",
      coverAlt:
        "Portada del Informe Premium de Carta Natal",
      createdForYou:
        "Creado para ti",
    },

    introduction: {
      label:
        "Más allá de tu signo",
      title:
        "Eres mucho más que tu signo solar",
      description:
        "Tu signo astrológico representa una parte importante de tu personalidad, pero no cuenta toda tu historia. Tu Luna, tu Ascendente, tus planetas, tus casas y tus aspectos permiten obtener una lectura mucho más rica y matizada de tu funcionamiento.",

      solarSignLabel:
        "Tu signo solar",
      solarSignTitle:
        "Una primera faceta",
      solarSignText:
        "Representa tu identidad central, tu vitalidad y tu manera natural de brillar.",
      freeChartLink:
        "Descubrir la carta natal gratuita",

      featuredLabel:
        "Análisis personalizado",
      natalChartLabel:
        "Tu carta natal",
      natalChartTitle:
        "Una personalidad completa",
      natalChartText:
        "El Informe Premium reúne tus planetas, tus casas, tus aspectos y tus energías dominantes para ofrecerte una lectura completa, precisa y profundamente personal.",
      startAnalysisLink:
        "Comenzar mi análisis",
    },

    showcase: {
      middlePageText:
        "Tu carta natal",
      label:
        "Tu informe personalizado",
      title:
        "Una lectura profunda de las grandes dinámicas de tu carta",
      description:
        "El Informe Premium te ofrece un retrato astrológico estructurado, detallado y fácil de comprender. Relaciona tus posiciones, tus casas, tus aspectos y tus energías dominantes para revelar las grandes dinámicas de tu carta.",

      personalizedPages:
        "páginas personalizadas",
      mainPillars:
        "pilares principales",
      uniqueChart:
        "carta única",

      checklist: [
        "Tu Sol, tu Luna y tu Ascendente",
        "Los principales planetas de tu carta",
        "Tu equilibrio elemental",
        "Tus modalidades dominantes",
        "Una síntesis clara de tus principales energías",
      ],

      previewButton:
        "📖 Ver la vista previa del informe",
      createButton:
        "Crear mi informe",
      coverAlt:
        "Vista previa de la portada del Informe Premium",
    },

    contents: {
      label:
        "En tu informe",
      title:
        "Las grandes dinámicas de tu personalidad astrológica",
      description:
        "Cada sección te ayuda a comprender una dimensión específica de tu funcionamiento interior, tus relaciones y tu potencial.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sol, Luna y Ascendente",
          description:
            "Descubre los tres pilares de tu personalidad astrológica y la manera en que interactúan dentro de tu carta.",
        },
        {
          icon:
            "☿",
          title:
            "Tus planetas",
          description:
            "Explora las posiciones planetarias que influyen en tus pensamientos, emociones, deseos y acciones.",
        },
        {
          icon:
            "△",
          title:
            "Elementos y modalidades",
          description:
            "Comprende el equilibrio entre Fuego, Tierra, Aire y Agua, así como tu manera de actuar, perseverar y adaptarte.",
        },
        {
          icon:
            "⌂",
          title:
            "Tus casas astrológicas",
          description:
            "Descubre en qué ámbitos de tu vida se expresan con mayor fuerza las diferentes energías de tu carta.",
        },
        {
          icon:
            "◇",
          title:
            "Tus aspectos planetarios",
          description:
            "Analiza los vínculos armoniosos y las tensiones entre tus planetas para comprender mejor tus dinámicas interiores.",
        },
        {
          icon:
            "★",
          title:
            "Tus energías dominantes",
          description:
            "Identifica los planetas, signos y energías que ocupan un lugar central en tu personalidad.",
        },
        {
          icon:
            "⚖",
          title:
            "Fortalezas y desafíos",
          description:
            "Destaca tus aptitudes naturales, tus zonas de tensión y los desafíos que favorecen tu evolución.",
        },
        {
          icon:
            "♡",
          title:
            "Relaciones y vida afectiva",
          description:
            "Comprende tus necesidades relacionales, tu manera de amar y las dinámicas que influyen en tus vínculos.",
        },
        {
          icon:
            "↗",
          title:
            "Carrera y potencial",
          description:
            "Descubre tus talentos, tus motivaciones profesionales y los entornos que favorecen tu realización.",
        },
      ],

      button:
        "Obtener mi Informe Premium",
    },

    benefits: {
      label:
        "Una exploración profunda de ti",
      title:
        "Comprende las dinámicas que dan forma a tu camino",
      description:
        "La astrología no te encierra en una definición. Te ofrece un lenguaje simbólico para observar tus tendencias, tus necesidades y tus fortalezas con mayor perspectiva.",
      previewLink:
        "Consultar la vista previa real",

      items: [
        {
          icon:
            "✦",
          title:
            "Comprender tus contradicciones",
          text:
            "Relaciona las diferentes facetas de tu personalidad para comprender mejor las tensiones que a veces experimentas.",
        },
        {
          icon:
            "⌂",
          title:
            "Explorar tus ámbitos de vida",
          text:
            "Descubre cómo se expresan tus planetas en tus relaciones, tu carrera, tu hogar y tu evolución personal.",
        },
        {
          icon:
            "◇",
          title:
            "Descifrar tus dinámicas interiores",
          text:
            "Observa las armonías y tensiones entre tus planetas para comprender mejor tus reacciones y decisiones.",
        },
        {
          icon:
            "★",
          title:
            "Reconocer tu potencial",
          text:
            "Identifica tus energías dominantes, tus fortalezas naturales y los desafíos que pueden convertirse en verdaderos motores de crecimiento.",
        },
      ],
    },

    process: {
      label:
        "Simple e inmediato",
      title:
        "¿Cómo obtener tu informe?",
      description:
        "Solo necesitas unos minutos para proporcionar tus datos e iniciar la creación de tu análisis personalizado.",

      steps: [
        {
          number:
            "01",
          title:
            "Indica tus datos de nacimiento",
          description:
            "Introduce tu nombre, fecha, hora, ciudad y país de nacimiento.",
        },
        {
          number:
            "02",
          title:
            "Tu carta completa es calculada",
          description:
            "Tus planetas, tu Ascendente, tus casas, tus aspectos y tus energías dominantes se calculan automáticamente.",
        },
        {
          number:
            "03",
          title:
            "Descarga tu informe",
          description:
            "Después del pago, tu Informe Premium personalizado de 40 páginas se genera y queda disponible para descargar.",
        },
      ],

      button:
        "Comenzar ahora",
    },

    order: {
      label:
        "Tu informe personalizado",
      title:
        "Crea tu Informe Premium de Carta Natal",
      description:
        "Introduce tus datos de nacimiento para calcular tu carta natal y preparar tu informe astrológico personalizado.",

      summaryLabel:
        "Tu pedido",
      reportName:
        "Informe Premium",
      uniquePayment:
        "Pago único",

      items: [
        "Informe PDF personalizado",
        "40 páginas de análisis",
        "Sol, Luna y Ascendente",
        "Planetas principales",
        "Elementos y modalidades",
        "Casas y aspectos",
        "Energías dominantes, fortalezas y desafíos",
        "Relaciones y carrera",
        "Descarga después del pago",
      ],

      securePayment:
        "Pago seguro",
      noSubscription:
        "Sin suscripción",
      previewLink:
        "Ver la vista previa antes de comprar",
    },

    faq: {
      label:
        "Preguntas frecuentes",
      title:
        "Todo lo que debes saber antes de comenzar",

      items: [
        {
          question:
            "¿Cuál es la diferencia entre Esencial y Premium?",
          answer:
            "El Informe Esencial presenta las bases de tu carta natal. El Informe Premium va más lejos con tus casas astrológicas, tus aspectos planetarios, tus energías dominantes, tus fortalezas, tus desafíos, tus relaciones y tu potencial profesional.",
        },
        {
          question:
            "¿Qué información debo proporcionar?",
          answer:
            "Debes proporcionar tu nombre, fecha de nacimiento, hora de nacimiento, ciudad y país de nacimiento.",
        },
        {
          question:
            "¿Por qué es importante la hora de nacimiento?",
          answer:
            "Una hora precisa permite calcular correctamente tu Ascendente y tus casas astrológicas. Sin una hora fiable, algunas secciones del informe pueden ser inexactas.",
        },
        {
          question:
            "¿El informe es realmente personalizado?",
          answer:
            "Sí. El informe se genera a partir de tus propias posiciones planetarias, tus casas, tus aspectos y tu carta natal real.",
        },
        {
          question:
            "¿Cómo recibiré mi informe?",
          answer:
            "Tu informe personalizado se genera en formato PDF después del pago. Podrás descargarlo directamente desde la página de confirmación.",
        },
        {
          question:
            "¿El pago es recurrente?",
          answer:
            "No. Se trata de un pago único de 49,99 US$. No hay ninguna suscripción asociada a tu pedido.",
        },
      ],
    },

    comparison: {
      label:
        "¿Quieres comparar los tres niveles?",
      title:
        "Compara los tres Informes de Carta Natal",
      description:
        "Descubre las diferencias entre los informes Esencial, Premium y Signature para elegir el nivel de análisis que mejor se adapte a ti.",
      compareButton:
        "Comparar los tres informes",
      chooseButton:
        "Elegir Premium",
    },

    disclaimer:
      "La astrología se propone como una herramienta simbólica de exploración personal. No sustituye el asesoramiento médico, psicológico, legal o financiero.",
  },

  de: {
    metadata: {
      title:
        "Premium-Geburtshoroskop-Bericht | Persönliche astrologische Analyse mit 40 Seiten",
      description:
        "Entdecken Sie Ihr Geburtshoroskop mit dem Luna Astralis Premium-Bericht: 40 persönliche Seiten über Persönlichkeit, Häuser, Aspekte, Beziehungen, Karriere, Stärken und Herausforderungen.",
      ogTitle:
        "Premium-Geburtshoroskop-Bericht | Luna Astralis",
      ogDescription:
        "Eine ausführliche und persönliche astrologische Analyse mit 40 Seiten.",
      twitterTitle:
        "Premium-Geburtshoroskop-Bericht | Luna Astralis",
      twitterDescription:
        "Entdecken Sie Ihr Geburtshoroskop ausführlich in einem persönlichen PDF-Bericht mit 40 Seiten.",
      locale:
        "de_DE",
      language:
        "de-DE",
      imageAlt:
        "Titelbild des Premium-Geburtshoroskop-Berichts",
    },

    jsonLd: {
      name:
        "Premium-Geburtshoroskop-Bericht",
      description:
        "Persönlicher astrologischer Bericht mit 40 Seiten über Planeten, Häuser, Aspekte, dominante Energien, Beziehungen, Karriere, Stärken und Herausforderungen.",
    },

    reportPrice:
      "49,99 US$",

    reportPages:
      "40 Seiten",

    hero: {
      badge:
        "✨ Persönlicher astrologischer Bericht",
      eyebrow:
        "Ihr Geburtshoroskop • Eine ausführliche Analyse",
      titleBefore:
        "Entdecken Sie ausführlich Ihr",
      titleHighlight:
        "Geburtshoroskop",
      description:
        "Entdecken Sie Ihre Persönlichkeit, Häuser, Aspekte, dominanten Energien, Beziehungen, Stärken und Ihr Potenzial in einem vollständig persönlichen Bericht mit 40 Seiten.",
      createButton:
        "Meinen Bericht erstellen",
      previewButton:
        "PDF-Vorschau ansehen",
      previewLink:
        "📖 Eine echte Vorschau des Berichts ansehen",
      personalizedPdf:
        "Persönliches PDF",
      downloadAfterPayment:
        "Download nach der Zahlung",
      reportName:
        "Premium-Bericht",
      uniquePayment:
        "Einmalige Zahlung",
      coverAlt:
        "Titelbild des Premium-Geburtshoroskop-Berichts",
      createdForYou:
        "Für Sie erstellt",
    },

    introduction: {
      label:
        "Mehr als nur Ihr Sternzeichen",
      title:
        "Sie sind viel mehr als Ihr Sonnenzeichen",
      description:
        "Ihr Sternzeichen beschreibt einen wichtigen Teil Ihrer Persönlichkeit, erzählt jedoch nicht Ihre ganze Geschichte. Mond, Aszendent, Planeten, Häuser und Aspekte ermöglichen eine wesentlich reichere und differenziertere Deutung Ihrer inneren Funktionsweise.",

      solarSignLabel:
        "Ihr Sonnenzeichen",
      solarSignTitle:
        "Eine erste Facette",
      solarSignText:
        "Es steht für Ihre zentrale Identität, Ihre Vitalität und Ihre natürliche Art zu strahlen.",
      freeChartLink:
        "Das kostenlose Geburtshoroskop entdecken",

      featuredLabel:
        "Persönliche Analyse",
      natalChartLabel:
        "Ihr Geburtshoroskop",
      natalChartTitle:
        "Eine vollständige Persönlichkeit",
      natalChartText:
        "Der Premium-Bericht verbindet Ihre Planeten, Häuser, Aspekte und dominanten Energien zu einer vollständigen, präzisen und tief persönlichen Deutung.",
      startAnalysisLink:
        "Meine Analyse beginnen",
    },

    showcase: {
      middlePageText:
        "Ihr Geburtshoroskop",
      label:
        "Ihr persönlicher Bericht",
      title:
        "Eine ausführliche Deutung der großen Dynamiken Ihres Horoskops",
      description:
        "Der Premium-Bericht bietet ein strukturiertes, detailliertes und leicht verständliches astrologisches Porträt. Er verbindet Ihre Positionen, Häuser, Aspekte und dominanten Energien, um die großen Dynamiken Ihres Horoskops sichtbar zu machen.",

      personalizedPages:
        "persönliche Seiten",
      mainPillars:
        "zentrale Säulen",
      uniqueChart:
        "einzigartiges Horoskop",

      checklist: [
        "Ihre Sonne, Ihr Mond und Ihr Aszendent",
        "Die wichtigsten Planeten Ihres Horoskops",
        "Ihr elementares Gleichgewicht",
        "Ihre dominanten Modalitäten",
        "Eine klare Zusammenfassung Ihrer wichtigsten Energien",
      ],

      previewButton:
        "📖 Berichtsvorschau ansehen",
      createButton:
        "Meinen Bericht erstellen",
      coverAlt:
        "Vorschau des Titelbilds des Premium-Berichts",
    },

    contents: {
      label:
        "In Ihrem Bericht",
      title:
        "Die großen Dynamiken Ihrer astrologischen Persönlichkeit",
      description:
        "Jeder Abschnitt hilft Ihnen, eine bestimmte Dimension Ihres inneren Funktionierens, Ihrer Beziehungen und Ihres Potenzials besser zu verstehen.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sonne, Mond und Aszendent",
          description:
            "Entdecken Sie die drei Säulen Ihrer astrologischen Persönlichkeit und wie sie in Ihrem Horoskop zusammenwirken.",
        },
        {
          icon:
            "☿",
          title:
            "Ihre Planeten",
          description:
            "Entdecken Sie die Planetenpositionen, die Ihr Denken, Ihre Gefühle, Wünsche und Handlungen beeinflussen.",
        },
        {
          icon:
            "△",
          title:
            "Elemente und Modalitäten",
          description:
            "Verstehen Sie das Gleichgewicht zwischen Feuer, Erde, Luft und Wasser sowie Ihre Art zu handeln, durchzuhalten und sich anzupassen.",
        },
        {
          icon:
            "⌂",
          title:
            "Ihre astrologischen Häuser",
          description:
            "Entdecken Sie, in welchen Lebensbereichen sich die verschiedenen Energien Ihres Horoskops am stärksten ausdrücken.",
        },
        {
          icon:
            "◇",
          title:
            "Ihre planetarischen Aspekte",
          description:
            "Analysieren Sie harmonische Verbindungen und Spannungen zwischen Ihren Planeten, um Ihre inneren Dynamiken besser zu verstehen.",
        },
        {
          icon:
            "★",
          title:
            "Ihre dominanten Energien",
          description:
            "Erkennen Sie die Planeten, Zeichen und Energien, die eine zentrale Rolle in Ihrer Persönlichkeit spielen.",
        },
        {
          icon:
            "⚖",
          title:
            "Stärken und Herausforderungen",
          description:
            "Machen Sie Ihre natürlichen Fähigkeiten, Spannungsbereiche und die Herausforderungen sichtbar, die Ihre Entwicklung fördern.",
        },
        {
          icon:
            "♡",
          title:
            "Beziehungen und Gefühlsleben",
          description:
            "Verstehen Sie Ihre Beziehungsbedürfnisse, Ihre Art zu lieben und die Dynamiken, die Ihre Verbindungen beeinflussen.",
        },
        {
          icon:
            "↗",
          title:
            "Karriere und Potenzial",
          description:
            "Entdecken Sie Ihre Talente, beruflichen Motivationen und die Umgebungen, die Ihre Entfaltung unterstützen.",
        },
      ],

      button:
        "Meinen Premium-Bericht erhalten",
    },

    benefits: {
      label:
        "Eine ausführliche Erkundung Ihrer selbst",
      title:
        "Verstehen Sie die Dynamiken, die Ihren Weg prägen",
      description:
        "Astrologie legt Sie nicht auf eine Definition fest. Sie bietet eine symbolische Sprache, mit der Sie Ihre Tendenzen, Bedürfnisse und Stärken aus größerer Distanz betrachten können.",
      previewLink:
        "Die echte Vorschau ansehen",

      items: [
        {
          icon:
            "✦",
          title:
            "Ihre Widersprüche verstehen",
          text:
            "Verbinden Sie die verschiedenen Facetten Ihrer Persönlichkeit, um Spannungen, die Sie manchmal erleben, besser zu verstehen.",
        },
        {
          icon:
            "⌂",
          title:
            "Ihre Lebensbereiche erkunden",
          text:
            "Entdecken Sie, wie sich Ihre Planeten in Beziehungen, Karriere, Zuhause und persönlicher Entwicklung ausdrücken.",
        },
        {
          icon:
            "◇",
          title:
            "Ihre inneren Dynamiken entschlüsseln",
          text:
            "Beobachten Sie Harmonien und Spannungen zwischen Ihren Planeten, um Ihre Reaktionen und Entscheidungen besser zu verstehen.",
        },
        {
          icon:
            "★",
          title:
            "Ihr Potenzial erkennen",
          text:
            "Erkennen Sie dominante Energien, natürliche Stärken und Herausforderungen, die zu starken Wachstumsimpulsen werden können.",
        },
      ],
    },

    process: {
      label:
        "Einfach und sofort",
      title:
        "Wie erhalten Sie Ihren Bericht?",
      description:
        "Es dauert nur wenige Minuten, Ihre Daten einzugeben und die Erstellung Ihrer persönlichen Analyse zu starten.",

      steps: [
        {
          number:
            "01",
          title:
            "Geben Sie Ihre Geburtsdaten ein",
          description:
            "Geben Sie Ihren Vornamen, Ihr Geburtsdatum, Ihre Geburtszeit, Ihre Geburtsstadt und Ihr Geburtsland ein.",
        },
        {
          number:
            "02",
          title:
            "Ihr vollständiges Horoskop wird berechnet",
          description:
            "Ihre Planeten, Ihr Aszendent, Ihre Häuser, Aspekte und dominanten Energien werden automatisch berechnet.",
        },
        {
          number:
            "03",
          title:
            "Laden Sie Ihren Bericht herunter",
          description:
            "Nach der Zahlung wird Ihr persönlicher Premium-Bericht mit 40 Seiten erstellt und zum Download bereitgestellt.",
        },
      ],

      button:
        "Jetzt beginnen",
    },

    order: {
      label:
        "Ihr persönlicher Bericht",
      title:
        "Erstellen Sie Ihren Premium-Geburtshoroskop-Bericht",
      description:
        "Geben Sie Ihre Geburtsdaten ein, damit Ihr Geburtshoroskop berechnet und Ihr persönlicher astrologischer Bericht erstellt werden kann.",

      summaryLabel:
        "Ihre Bestellung",
      reportName:
        "Premium-Bericht",
      uniquePayment:
        "Einmalige Zahlung",

      items: [
        "Persönlicher PDF-Bericht",
        "40 Seiten Analyse",
        "Sonne, Mond und Aszendent",
        "Wichtigste Planeten",
        "Elemente und Modalitäten",
        "Häuser und Aspekte",
        "Dominante Energien, Stärken und Herausforderungen",
        "Beziehungen und Karriere",
        "Download nach der Zahlung",
      ],

      securePayment:
        "Sichere Zahlung",
      noSubscription:
        "Kein Abonnement",
      previewLink:
        "Vorschau vor der Bestellung ansehen",
    },

    faq: {
      label:
        "Häufige Fragen",
      title:
        "Alles, was Sie vor dem Start wissen sollten",

      items: [
        {
          question:
            "Was ist der Unterschied zwischen Essentiell und Premium?",
          answer:
            "Der Essentielle Bericht zeigt die Grundlagen Ihres Geburtshoroskops. Der Premium-Bericht geht weiter und umfasst astrologische Häuser, planetarische Aspekte, dominante Energien, Stärken, Herausforderungen, Beziehungen und berufliches Potenzial.",
        },
        {
          question:
            "Welche Informationen muss ich angeben?",
          answer:
            "Sie müssen Ihren Vornamen, Ihr Geburtsdatum, Ihre Geburtszeit sowie Geburtsstadt und Geburtsland angeben.",
        },
        {
          question:
            "Warum ist die Geburtszeit wichtig?",
          answer:
            "Eine genaue Geburtszeit ermöglicht die korrekte Berechnung Ihres Aszendenten und Ihrer astrologischen Häuser. Ohne verlässliche Zeit können einige Abschnitte ungenau sein.",
        },
        {
          question:
            "Ist der Bericht wirklich persönlich?",
          answer:
            "Ja. Der Bericht wird aus Ihren eigenen Planetenpositionen, Häusern, Aspekten und Ihrem tatsächlichen Geburtshoroskop erstellt.",
        },
        {
          question:
            "Wie erhalte ich meinen Bericht?",
          answer:
            "Ihr persönlicher Bericht wird nach der Zahlung als PDF erstellt. Sie können ihn direkt auf der Bestätigungsseite herunterladen.",
        },
        {
          question:
            "Ist die Zahlung wiederkehrend?",
          answer:
            "Nein. Es handelt sich um eine einmalige Zahlung von 49,99 US$. Mit Ihrer Bestellung ist kein Abonnement verbunden.",
        },
      ],
    },

    comparison: {
      label:
        "Möchten Sie alle drei Stufen vergleichen?",
      title:
        "Vergleichen Sie die drei Geburtshoroskop-Berichte",
      description:
        "Entdecken Sie die Unterschiede zwischen Essentiellem, Premium- und Signature-Bericht und wählen Sie die passende Analysetiefe.",
      compareButton:
        "Die drei Berichte vergleichen",
      chooseButton:
        "Premium wählen",
    },

    disclaimer:
      "Astrologie wird als symbolisches Werkzeug zur persönlichen Erkundung angeboten. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Rapporto Premium del Tema Natale | Analisi astrologica personalizzata di 40 pagine",
      description:
        "Scopri il tuo tema natale con il Rapporto Premium Luna Astralis: 40 pagine personalizzate su personalità, case, aspetti, relazioni, carriera, punti di forza e sfide.",
      ogTitle:
        "Rapporto Premium del Tema Natale | Luna Astralis",
      ogDescription:
        "Un’analisi astrologica approfondita e personalizzata di 40 pagine.",
      twitterTitle:
        "Rapporto Premium del Tema Natale | Luna Astralis",
      twitterDescription:
        "Esplora in profondità il tuo tema natale in un rapporto PDF personalizzato di 40 pagine.",
      locale:
        "it_IT",
      language:
        "it-IT",
      imageAlt:
        "Copertina del Rapporto Premium del Tema Natale",
    },

    jsonLd: {
      name:
        "Rapporto Premium del Tema Natale",
      description:
        "Rapporto astrologico personalizzato di 40 pagine dedicato a pianeti, case, aspetti, energie dominanti, relazioni, carriera, punti di forza e sfide.",
    },

    reportPrice:
      "49,99 USD",

    reportPages:
      "40 pagine",

    hero: {
      badge:
        "✨ Rapporto astrologico personalizzato",
      eyebrow:
        "Il tuo tema natale • Un’analisi approfondita",
      titleBefore:
        "Esplora in profondità il tuo",
      titleHighlight:
        "tema natale",
      description:
        "Esplora la tua personalità, le case, gli aspetti, le energie dominanti, le relazioni, i punti di forza e il tuo potenziale in un rapporto completamente personalizzato di 40 pagine.",
      createButton:
        "Crea il mio rapporto",
      previewButton:
        "Vedi l’anteprima PDF",
      previewLink:
        "📖 Consulta una vera anteprima del rapporto",
      personalizedPdf:
        "PDF personalizzato",
      downloadAfterPayment:
        "Download dopo il pagamento",
      reportName:
        "Rapporto Premium",
      uniquePayment:
        "Pagamento unico",
      coverAlt:
        "Copertina del Rapporto Premium del Tema Natale",
      createdForYou:
        "Creato per te",
    },

    introduction: {
      label:
        "Oltre il tuo segno",
      title:
        "Sei molto più del tuo segno solare",
      description:
        "Il tuo segno astrologico rappresenta una parte importante della tua personalità, ma non racconta tutta la tua storia. La Luna, l’Ascendente, i pianeti, le case e gli aspetti offrono una lettura molto più ricca e sfumata del tuo funzionamento.",

      solarSignLabel:
        "Il tuo segno solare",
      solarSignTitle:
        "Una prima sfaccettatura",
      solarSignText:
        "Rappresenta la tua identità centrale, la tua vitalità e il tuo modo naturale di risplendere.",
      freeChartLink:
        "Scopri il tema natale gratuito",

      featuredLabel:
        "Analisi personalizzata",
      natalChartLabel:
        "Il tuo tema natale",
      natalChartTitle:
        "Una personalità completa",
      natalChartText:
        "Il Rapporto Premium riunisce pianeti, case, aspetti ed energie dominanti per offrirti una lettura completa, precisa e profondamente personale.",
      startAnalysisLink:
        "Inizia la mia analisi",
    },

    showcase: {
      middlePageText:
        "Il tuo tema natale",
      label:
        "Il tuo rapporto personalizzato",
      title:
        "Una lettura approfondita delle grandi dinamiche del tuo tema",
      description:
        "Il Rapporto Premium offre un ritratto astrologico strutturato, dettagliato e facile da comprendere. Collega posizioni, case, aspetti ed energie dominanti per rivelare le grandi dinamiche del tuo tema.",

      personalizedPages:
        "pagine personalizzate",
      mainPillars:
        "pilastri principali",
      uniqueChart:
        "tema unico",

      checklist: [
        "Il tuo Sole, la tua Luna e il tuo Ascendente",
        "I principali pianeti del tuo tema",
        "Il tuo equilibrio elementale",
        "Le tue modalità dominanti",
        "Una sintesi chiara delle tue principali energie",
      ],

      previewButton:
        "📖 Vedi l’anteprima del rapporto",
      createButton:
        "Crea il mio rapporto",
      coverAlt:
        "Anteprima della copertina del Rapporto Premium",
    },

    contents: {
      label:
        "Nel tuo rapporto",
      title:
        "Le grandi dinamiche della tua personalità astrologica",
      description:
        "Ogni sezione ti aiuta a comprendere una dimensione precisa del tuo funzionamento interiore, delle relazioni e del potenziale.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sole, Luna e Ascendente",
          description:
            "Scopri i tre pilastri della tua personalità astrologica e il modo in cui interagiscono nel tuo tema.",
        },
        {
          icon:
            "☿",
          title:
            "I tuoi pianeti",
          description:
            "Esplora le posizioni planetarie che influenzano pensieri, emozioni, desideri e azioni.",
        },
        {
          icon:
            "△",
          title:
            "Elementi e modalità",
          description:
            "Comprendi l’equilibrio tra Fuoco, Terra, Aria e Acqua e il tuo modo di agire, perseverare e adattarti.",
        },
        {
          icon:
            "⌂",
          title:
            "Le tue case astrologiche",
          description:
            "Scopri in quali ambiti della vita si esprimono con maggiore forza le diverse energie del tuo tema.",
        },
        {
          icon:
            "◇",
          title:
            "I tuoi aspetti planetari",
          description:
            "Analizza i legami armoniosi e le tensioni tra i pianeti per comprendere meglio le tue dinamiche interiori.",
        },
        {
          icon:
            "★",
          title:
            "Le tue energie dominanti",
          description:
            "Identifica pianeti, segni ed energie che occupano una posizione centrale nella tua personalità.",
        },
        {
          icon:
            "⚖",
          title:
            "Punti di forza e sfide",
          description:
            "Metti in luce le tue capacità naturali, le aree di tensione e le sfide che favoriscono la tua evoluzione.",
        },
        {
          icon:
            "♡",
          title:
            "Relazioni e vita affettiva",
          description:
            "Comprendi i tuoi bisogni relazionali, il tuo modo di amare e le dinamiche che influenzano i tuoi legami.",
        },
        {
          icon:
            "↗",
          title:
            "Carriera e potenziale",
          description:
            "Scopri i tuoi talenti, le motivazioni professionali e gli ambienti che favoriscono la tua realizzazione.",
        },
      ],

      button:
        "Ottieni il mio Rapporto Premium",
    },

    benefits: {
      label:
        "Un’esplorazione approfondita di te",
      title:
        "Comprendi le dinamiche che modellano il tuo percorso",
      description:
        "L’astrologia non ti rinchiude in una definizione. Offre un linguaggio simbolico per osservare tendenze, bisogni e punti di forza con maggiore prospettiva.",
      previewLink:
        "Consulta l’anteprima reale",

      items: [
        {
          icon:
            "✦",
          title:
            "Comprendere le tue contraddizioni",
          text:
            "Collega le diverse sfaccettature della tua personalità per comprendere meglio le tensioni che a volte provi.",
        },
        {
          icon:
            "⌂",
          title:
            "Esplorare i tuoi ambiti di vita",
          text:
            "Scopri come si esprimono i tuoi pianeti nelle relazioni, nella carriera, nella casa e nell’evoluzione personale.",
        },
        {
          icon:
            "◇",
          title:
            "Decodificare le tue dinamiche interiori",
          text:
            "Osserva armonie e tensioni tra i pianeti per comprendere meglio reazioni e decisioni.",
        },
        {
          icon:
            "★",
          title:
            "Riconoscere il tuo potenziale",
          text:
            "Identifica le energie dominanti, i punti di forza naturali e le sfide che possono diventare potenti leve di crescita.",
        },
      ],
    },

    process: {
      label:
        "Semplice e immediato",
      title:
        "Come ottenere il tuo rapporto?",
      description:
        "Bastano pochi minuti per inserire i tuoi dati e avviare la creazione della tua analisi personalizzata.",

      steps: [
        {
          number:
            "01",
          title:
            "Inserisci i tuoi dati di nascita",
          description:
            "Inserisci nome, data, ora, città e paese di nascita.",
        },
        {
          number:
            "02",
          title:
            "Il tuo tema completo viene calcolato",
          description:
            "Pianeti, Ascendente, case, aspetti ed energie dominanti vengono calcolati automaticamente.",
        },
        {
          number:
            "03",
          title:
            "Scarica il tuo rapporto",
          description:
            "Dopo il pagamento, il tuo Rapporto Premium personalizzato di 40 pagine viene generato e reso disponibile per il download.",
        },
      ],

      button:
        "Inizia ora",
    },

    order: {
      label:
        "Il tuo rapporto personalizzato",
      title:
        "Crea il tuo Rapporto Premium del Tema Natale",
      description:
        "Inserisci i tuoi dati di nascita per calcolare il tema natale e preparare il tuo rapporto astrologico personalizzato.",

      summaryLabel:
        "Il tuo ordine",
      reportName:
        "Rapporto Premium",
      uniquePayment:
        "Pagamento unico",

      items: [
        "Rapporto PDF personalizzato",
        "40 pagine di analisi",
        "Sole, Luna e Ascendente",
        "Pianeti principali",
        "Elementi e modalità",
        "Case e aspetti",
        "Energie dominanti, punti di forza e sfide",
        "Relazioni e carriera",
        "Download dopo il pagamento",
      ],

      securePayment:
        "Pagamento sicuro",
      noSubscription:
        "Nessun abbonamento",
      previewLink:
        "Vedi l’anteprima prima di ordinare",
    },

    faq: {
      label:
        "Domande frequenti",
      title:
        "Tutto ciò che devi sapere prima di iniziare",

      items: [
        {
          question:
            "Qual è la differenza tra Essenziale e Premium?",
          answer:
            "Il Rapporto Essenziale presenta le fondamenta del tema natale. Il Rapporto Premium approfondisce case astrologiche, aspetti planetari, energie dominanti, punti di forza, sfide, relazioni e potenziale professionale.",
        },
        {
          question:
            "Quali informazioni devo fornire?",
          answer:
            "Devi fornire nome, data di nascita, ora di nascita, città e paese di nascita.",
        },
        {
          question:
            "Perché l’ora di nascita è importante?",
          answer:
            "Un’ora precisa permette di calcolare correttamente l’Ascendente e le case astrologiche. Senza un’ora affidabile, alcune sezioni potrebbero essere inesatte.",
        },
        {
          question:
            "Il rapporto è davvero personalizzato?",
          answer:
            "Sì. Il rapporto viene generato a partire dalle tue posizioni planetarie, dalle case, dagli aspetti e dal tuo vero tema natale.",
        },
        {
          question:
            "Come riceverò il mio rapporto?",
          answer:
            "Il rapporto personalizzato viene generato in formato PDF dopo il pagamento. Potrai scaricarlo direttamente dalla pagina di conferma.",
        },
        {
          question:
            "Il pagamento è ricorrente?",
          answer:
            "No. Si tratta di un pagamento unico di 49,99 USD. Nessun abbonamento è associato all’ordine.",
        },
      ],
    },

    comparison: {
      label:
        "Vuoi confrontare tutti e tre i livelli?",
      title:
        "Confronta i tre Rapporti del Tema Natale",
      description:
        "Scopri le differenze tra i rapporti Essenziale, Premium e Signature per scegliere il livello di analisi più adatto a te.",
      compareButton:
        "Confronta i tre rapporti",
      chooseButton:
        "Scegli Premium",
    },

    disclaimer:
      "L’astrologia viene proposta come strumento simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Relatório Premium do Mapa Astral | Análise astrológica personalizada de 40 páginas",
      description:
        "Descubra seu mapa astral com o Relatório Premium Luna Astralis: 40 páginas personalizadas sobre personalidade, casas, aspectos, relações, carreira, forças e desafios.",
      ogTitle:
        "Relatório Premium do Mapa Astral | Luna Astralis",
      ogDescription:
        "Uma análise astrológica profunda e personalizada de 40 páginas.",
      twitterTitle:
        "Relatório Premium do Mapa Astral | Luna Astralis",
      twitterDescription:
        "Explore seu mapa astral em profundidade em um relatório PDF personalizado de 40 páginas.",
      locale:
        "pt_PT",
      language:
        "pt-PT",
      imageAlt:
        "Capa do Relatório Premium do Mapa Astral",
    },

    jsonLd: {
      name:
        "Relatório Premium do Mapa Astral",
      description:
        "Relatório astrológico personalizado de 40 páginas sobre planetas, casas, aspectos, energias dominantes, relações, carreira, forças e desafios.",
    },

    reportPrice:
      "49,99 US$",

    reportPages:
      "40 páginas",

    hero: {
      badge:
        "✨ Relatório astrológico personalizado",
      eyebrow:
        "Seu mapa natal • Uma análise profunda",
      titleBefore:
        "Explore em profundidade seu",
      titleHighlight:
        "mapa astral",
      description:
        "Explore sua personalidade, casas, aspectos, energias dominantes, relações, forças e potencial em um relatório totalmente personalizado de 40 páginas.",
      createButton:
        "Criar meu relatório",
      previewButton:
        "Ver a prévia em PDF",
      previewLink:
        "📖 Consultar uma prévia real do relatório",
      personalizedPdf:
        "PDF personalizado",
      downloadAfterPayment:
        "Download após o pagamento",
      reportName:
        "Relatório Premium",
      uniquePayment:
        "Pagamento único",
      coverAlt:
        "Capa do Relatório Premium do Mapa Astral",
      createdForYou:
        "Criado para você",
    },

    introduction: {
      label:
        "Além do seu signo",
      title:
        "Você é muito mais do que seu signo solar",
      description:
        "Seu signo astrológico representa uma parte importante da sua personalidade, mas não conta toda a sua história. Sua Lua, seu Ascendente, seus planetas, suas casas e seus aspectos permitem uma leitura muito mais rica e detalhada do seu funcionamento.",

      solarSignLabel:
        "Seu signo solar",
      solarSignTitle:
        "Uma primeira faceta",
      solarSignText:
        "Ele representa sua identidade central, sua vitalidade e sua maneira natural de brilhar.",
      freeChartLink:
        "Descobrir o mapa astral gratuito",

      featuredLabel:
        "Análise personalizada",
      natalChartLabel:
        "Seu mapa natal",
      natalChartTitle:
        "Uma personalidade completa",
      natalChartText:
        "O Relatório Premium reúne seus planetas, casas, aspectos e energias dominantes para oferecer uma leitura completa, precisa e profundamente pessoal.",
      startAnalysisLink:
        "Começar minha análise",
    },

    showcase: {
      middlePageText:
        "Seu mapa astral",
      label:
        "Seu relatório personalizado",
      title:
        "Uma leitura profunda das grandes dinâmicas do seu mapa",
      description:
        "O Relatório Premium oferece um retrato astrológico estruturado, detalhado e fácil de compreender. Ele conecta suas posições, casas, aspectos e energias dominantes para revelar as grandes dinâmicas do seu mapa.",

      personalizedPages:
        "páginas personalizadas",
      mainPillars:
        "pilares principais",
      uniqueChart:
        "mapa único",

      checklist: [
        "Seu Sol, sua Lua e seu Ascendente",
        "Os principais planetas do seu mapa",
        "Seu equilíbrio elemental",
        "Suas modalidades dominantes",
        "Uma síntese clara das suas principais energias",
      ],

      previewButton:
        "📖 Ver a prévia do relatório",
      createButton:
        "Criar meu relatório",
      coverAlt:
        "Prévia da capa do Relatório Premium",
    },

    contents: {
      label:
        "No seu relatório",
      title:
        "As grandes dinâmicas da sua personalidade astrológica",
      description:
        "Cada seção ajuda você a compreender uma dimensão específica do seu funcionamento interior, das relações e do potencial.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sol, Lua e Ascendente",
          description:
            "Descubra os três pilares da sua personalidade astrológica e como eles interagem no seu mapa.",
        },
        {
          icon:
            "☿",
          title:
            "Seus planetas",
          description:
            "Explore as posições planetárias que influenciam seus pensamentos, emoções, desejos e ações.",
        },
        {
          icon:
            "△",
          title:
            "Elementos e modalidades",
          description:
            "Compreenda o equilíbrio entre Fogo, Terra, Ar e Água, além da sua maneira de agir, perseverar e se adaptar.",
        },
        {
          icon:
            "⌂",
          title:
            "Suas casas astrológicas",
          description:
            "Descubra em quais áreas da vida as diferentes energias do seu mapa se expressam com maior força.",
        },
        {
          icon:
            "◇",
          title:
            "Seus aspectos planetários",
          description:
            "Analise as conexões harmoniosas e as tensões entre seus planetas para compreender melhor suas dinâmicas interiores.",
        },
        {
          icon:
            "★",
          title:
            "Suas energias dominantes",
          description:
            "Identifique os planetas, signos e energias que ocupam um papel central na sua personalidade.",
        },
        {
          icon:
            "⚖",
          title:
            "Forças e desafios",
          description:
            "Destaque suas aptidões naturais, áreas de tensão e os desafios que favorecem sua evolução.",
        },
        {
          icon:
            "♡",
          title:
            "Relações e vida afetiva",
          description:
            "Compreenda suas necessidades relacionais, sua maneira de amar e as dinâmicas que influenciam seus vínculos.",
        },
        {
          icon:
            "↗",
          title:
            "Carreira e potencial",
          description:
            "Descubra seus talentos, motivações profissionais e os ambientes que favorecem sua realização.",
        },
      ],

      button:
        "Obter meu Relatório Premium",
    },

    benefits: {
      label:
        "Uma exploração profunda de si",
      title:
        "Compreenda as dinâmicas que moldam seu caminho",
      description:
        "A astrologia não prende você a uma definição. Ela oferece uma linguagem simbólica para observar suas tendências, necessidades e forças com maior perspectiva.",
      previewLink:
        "Consultar a prévia real",

      items: [
        {
          icon:
            "✦",
          title:
            "Compreender suas contradições",
          text:
            "Conecte as diferentes facetas da sua personalidade para compreender melhor as tensões que você às vezes sente.",
        },
        {
          icon:
            "⌂",
          title:
            "Explorar suas áreas de vida",
          text:
            "Descubra como seus planetas se expressam nas relações, na carreira, no lar e na evolução pessoal.",
        },
        {
          icon:
            "◇",
          title:
            "Decifrar suas dinâmicas interiores",
          text:
            "Observe harmonias e tensões entre seus planetas para compreender melhor suas reações e decisões.",
        },
        {
          icon:
            "★",
          title:
            "Reconhecer seu potencial",
          text:
            "Identifique suas energias dominantes, forças naturais e os desafios que podem se tornar importantes motores de crescimento.",
        },
      ],
    },

    process: {
      label:
        "Simples e imediato",
      title:
        "Como obter seu relatório?",
      description:
        "Bastam alguns minutos para fornecer seus dados e iniciar a criação da sua análise personalizada.",

      steps: [
        {
          number:
            "01",
          title:
            "Informe seus dados de nascimento",
          description:
            "Digite seu nome, data, hora, cidade e país de nascimento.",
        },
        {
          number:
            "02",
          title:
            "Seu mapa completo é calculado",
          description:
            "Seus planetas, Ascendente, casas, aspectos e energias dominantes são calculados automaticamente.",
        },
        {
          number:
            "03",
          title:
            "Baixe seu relatório",
          description:
            "Após o pagamento, seu Relatório Premium personalizado de 40 páginas é gerado e disponibilizado para download.",
        },
      ],

      button:
        "Começar agora",
    },

    order: {
      label:
        "Seu relatório personalizado",
      title:
        "Crie seu Relatório Premium do Mapa Astral",
      description:
        "Informe seus dados de nascimento para calcular seu mapa natal e preparar seu relatório astrológico personalizado.",

      summaryLabel:
        "Seu pedido",
      reportName:
        "Relatório Premium",
      uniquePayment:
        "Pagamento único",

      items: [
        "Relatório PDF personalizado",
        "40 páginas de análise",
        "Sol, Lua e Ascendente",
        "Planetas principais",
        "Elementos e modalidades",
        "Casas e aspectos",
        "Energias dominantes, forças e desafios",
        "Relações e carreira",
        "Download após o pagamento",
      ],

      securePayment:
        "Pagamento seguro",
      noSubscription:
        "Sem assinatura",
      previewLink:
        "Ver a prévia antes de comprar",
    },

    faq: {
      label:
        "Perguntas frequentes",
      title:
        "Tudo o que você precisa saber antes de começar",

      items: [
        {
          question:
            "Qual é a diferença entre Essencial e Premium?",
          answer:
            "O Relatório Essencial apresenta as bases do seu mapa astral. O Relatório Premium aprofunda casas astrológicas, aspectos planetários, energias dominantes, forças, desafios, relações e potencial profissional.",
        },
        {
          question:
            "Quais informações preciso fornecer?",
          answer:
            "Você deve fornecer seu nome, data de nascimento, hora de nascimento, cidade e país de nascimento.",
        },
        {
          question:
            "Por que a hora de nascimento é importante?",
          answer:
            "Uma hora precisa permite calcular corretamente seu Ascendente e suas casas astrológicas. Sem uma hora confiável, algumas seções do relatório podem ficar imprecisas.",
        },
        {
          question:
            "O relatório é realmente personalizado?",
          answer:
            "Sim. O relatório é gerado a partir das suas próprias posições planetárias, casas, aspectos e do seu verdadeiro mapa astral.",
        },
        {
          question:
            "Como receberei meu relatório?",
          answer:
            "Seu relatório personalizado é gerado em PDF após o pagamento. Você poderá baixá-lo diretamente na página de confirmação.",
        },
        {
          question:
            "O pagamento é recorrente?",
          answer:
            "Não. Trata-se de um pagamento único de 49,99 US$. Nenhuma assinatura está associada ao pedido.",
        },
      ],
    },

    comparison: {
      label:
        "Deseja comparar os três níveis?",
      title:
        "Compare os três Relatórios do Mapa Astral",
      description:
        "Descubra as diferenças entre os relatórios Essencial, Premium e Signature para escolher o nível de análise mais adequado.",
      compareButton:
        "Comparar os três relatórios",
      chooseButton:
        "Escolher Premium",
    },

    disclaimer:
      "A astrologia é apresentada como uma ferramenta simbólica de exploração pessoal. Ela não substitui aconselhamento médico, psicológico, jurídico ou financeiro.",
  },
};
