import type {
  Locale,
} from "@/i18n/config";

export type SignatureFeature = {
  icon: string;
  title: string;
  description: string;
};

export type SignatureBenefit = {
  icon: string;
  title: string;
  text: string;
};

export type SignatureProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type SignatureFaqItem = {
  question: string;
  answer: string;
};

export type SignaturePageText = {
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
    features: SignatureFeature[];
    button: string;
  };

  benefits: {
    label: string;
    title: string;
    description: string;
    previewLink: string;
    items: SignatureBenefit[];
  };

  process: {
    label: string;
    title: string;
    description: string;
    steps: SignatureProcessStep[];
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
    items: SignatureFaqItem[];
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

export const SIGNATURE_TRANSLATIONS: Record<
  Locale,
  SignaturePageText
> = {
  fr: {
    metadata: {
      title:
        "Rapport Carte du ciel Signature | Thème astral personnalisé de 58 pages",
      description:
        "Découvrez votre thème astral avec le rapport Signature Luna Astralis : 58 pages personnalisées consacrées à votre personnalité, vos planètes, vos maisons, vos aspects, vos relations, votre carrière, votre évolution et votre synthèse astrologique.",
      ogTitle:
        "Rapport Carte du ciel Signature | Luna Astralis",
      ogDescription:
        "L’expérience astrologique la plus complète de Luna Astralis, dans un rapport personnalisé de 58 pages.",
      twitterTitle:
        "Rapport Carte du ciel Signature | Luna Astralis",
      twitterDescription:
        "Découvrez une lecture complète, structurée et profondément personnelle de votre thème natal dans un rapport PDF de 58 pages.",
      locale:
        "fr_CA",
      language:
        "fr-CA",
      imageAlt:
        "Couverture du rapport Carte du ciel Signature",
    },

    jsonLd: {
      name:
        "Rapport Carte du ciel Signature",
      description:
        "Rapport astrologique personnalisé de 58 pages comprenant les planètes, les maisons, les aspects, les dominantes, les relations, la carrière, l’évolution personnelle et une synthèse astrologique complète.",
    },

    reportPrice:
      "79,99 $ US",

    reportPages:
      "58 pages",

    hero: {
      badge:
        "✨ Rapport astrologique personnalisé",
      eyebrow:
        "Votre thème natal • L’analyse la plus complète",
      titleBefore:
        "Explorez en profondeur votre",
      titleHighlight:
        "carte du ciel",
      description:
        "Explorez votre personnalité, vos maisons, vos aspects, vos dominantes, vos relations, vos forces, votre évolution et votre potentiel dans un rapport de 58 pages entièrement personnalisé.",
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
        "Rapport Signature",
      uniquePayment:
        "Paiement unique",
      coverAlt:
        "Couverture du rapport Carte du ciel Signature",
      createdForYou:
        "Créé pour vous",
    },

    introduction: {
      label:
        "Au-delà de votre signe",
      title:
        "Vous êtes bien plus que votre signe solaire",
      description:
        "Votre signe astrologique représente une partie importante de votre personnalité, mais il ne raconte pas toute votre histoire. Votre Lune, votre Ascendant, vos planètes, vos maisons, vos aspects et vos dominantes permettent d’obtenir une lecture beaucoup plus riche et nuancée de votre fonctionnement.",

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
        "Le rapport Signature réunit vos planètes, vos maisons, vos aspects, vos dominantes et vos axes d’évolution pour vous offrir une lecture complète, précise et profondément personnelle.",
      startAnalysisLink:
        "Commencer mon analyse",
    },

    showcase: {
      middlePageText:
        "Votre thème astral",
      label:
        "Votre rapport personnalisé",
      title:
        "Une lecture d’exception des grandes dynamiques de votre thème",
      description:
        "Le rapport Signature vous offre un portrait astrologique structuré, détaillé et facile à comprendre. Il relie vos placements, vos maisons, vos aspects, vos dominantes et vos axes d’évolution afin de révéler les grandes dynamiques de votre thème.",

      personalizedPages:
        "pages personnalisées",
      mainPillars:
        "piliers principaux",
      uniqueChart:
        "thème unique",

      checklist: [
        "Votre Soleil, votre Lune et votre Ascendant",
        "Les principales planètes de votre thème",
        "Vos maisons et vos aspects",
        "Vos dominantes, vos forces et vos défis",
        "Votre évolution personnelle et votre synthèse astrologique",
      ],

      previewButton:
        "📖 Voir l’aperçu du rapport",
      createButton:
        "Créer mon rapport",
      coverAlt:
        "Aperçu de la couverture du rapport Signature",
    },

    contents: {
      label:
        "Dans votre rapport",
      title:
        "Une analyse complète de votre personnalité astrologique",
      description:
        "Chaque partie du rapport vous aide à comprendre une dimension précise de votre fonctionnement intérieur, de vos relations, de votre potentiel et de votre évolution.",

      features: [
        {
          icon:
            "☉",
          title:
            "Soleil, Lune et Ascendant",
          description:
            "Découvrez les trois piliers de votre personnalité et la manière dont ils façonnent votre identité, vos émotions et votre présence.",
        },
        {
          icon:
            "☿",
          title:
            "Vos planètes",
          description:
            "Explorez les principales fonctions astrologiques qui influencent votre pensée, vos désirs, vos relations et votre manière d’agir.",
        },
        {
          icon:
            "△",
          title:
            "Éléments et modalités",
          description:
            "Comprenez l’équilibre de vos énergies, votre tempérament et votre manière naturelle d’initier, de stabiliser ou d’adapter vos actions.",
        },
        {
          icon:
            "⌂",
          title:
            "Vos maisons astrologiques",
          description:
            "Découvrez les domaines de vie dans lesquels vos différentes énergies se manifestent avec le plus d’intensité.",
        },
        {
          icon:
            "◇",
          title:
            "Vos aspects planétaires",
          description:
            "Analysez les accords, les tensions et les interactions qui donnent à votre thème sa dynamique unique.",
        },
        {
          icon:
            "★",
          title:
            "Vos dominantes",
          description:
            "Identifiez les planètes, les signes, les éléments et les tendances qui occupent une place centrale dans votre fonctionnement.",
        },
        {
          icon:
            "⚖",
          title:
            "Forces et défis",
          description:
            "Mettez en lumière vos ressources naturelles, vos zones de tension et les défis qui soutiennent votre évolution.",
        },
        {
          icon:
            "♡",
          title:
            "Relations et vie affective",
          description:
            "Comprenez vos besoins relationnels, votre manière d’aimer, vos attentes et les dynamiques qui influencent vos liens.",
        },
        {
          icon:
            "↗",
          title:
            "Carrière et potentiel",
          description:
            "Découvrez vos talents, vos motivations, votre manière de contribuer et les environnements qui favorisent votre accomplissement.",
        },
        {
          icon:
            "☊",
          title:
            "Évolution personnelle",
          description:
            "Explorez les grands axes de croissance de votre thème et les mouvements intérieurs qui vous invitent à évoluer.",
        },
        {
          icon:
            "✧",
          title:
            "Synthèse astrologique",
          description:
            "Reliez toutes les dimensions de votre thème dans une lecture finale cohérente, personnelle et profondément révélatrice.",
        },
      ],

      button:
        "Obtenir mon rapport Signature",
    },

    benefits: {
      label:
        "Une lecture d’exception de soi",
      title:
        "Reliez les différentes forces qui façonnent votre parcours",
      description:
        "L’astrologie ne vous enferme pas dans une définition. Elle vous offre un langage symbolique pour observer vos tendances, vos besoins, vos forces et vos axes d’évolution avec davantage de recul.",
      previewLink:
        "Consulter l’aperçu réel",

      items: [
        {
          icon:
            "✦",
          title:
            "Relier toutes vos facettes",
          text:
            "Comprenez comment vos différentes énergies se complètent, s’opposent et créent la richesse de votre personnalité.",
        },
        {
          icon:
            "⌂",
          title:
            "Explorer tous vos domaines de vie",
          text:
            "Observez comment votre thème s’exprime dans vos relations, votre carrière, votre foyer, vos ambitions et votre évolution.",
        },
        {
          icon:
            "◇",
          title:
            "Comprendre vos dynamiques profondes",
          text:
            "Décodez les liens entre vos planètes, vos maisons et vos aspects afin de mieux comprendre vos réactions et vos choix.",
        },
        {
          icon:
            "☊",
          title:
            "Identifier vos axes d’évolution",
          text:
            "Repérez les défis, les ressources et les mouvements de croissance qui peuvent vous aider à avancer avec plus de conscience.",
        },
        {
          icon:
            "♡",
          title:
            "Éclairer vos relations",
          text:
            "Approfondissez votre manière d’aimer, vos besoins affectifs, vos attentes et les dynamiques qui influencent vos liens.",
        },
        {
          icon:
            "✧",
          title:
            "Recevoir une véritable synthèse",
          text:
            "Terminez votre lecture avec une vision d’ensemble qui relie les principales dimensions de votre thème natal.",
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
            "Votre thème complet est analysé",
          description:
            "Vos planètes, votre Ascendant, vos maisons, vos aspects, vos dominantes et vos axes d’évolution sont calculés.",
        },
        {
          number:
            "03",
          title:
            "Téléchargez votre rapport Signature",
          description:
            "Après le paiement, votre rapport personnalisé de 58 pages est généré et offert en téléchargement.",
        },
      ],

      button:
        "Commencer maintenant",
    },

    order: {
      label:
        "Votre rapport personnalisé",
      title:
        "Créez votre rapport Carte du ciel Signature",
      description:
        "Entrez vos informations de naissance afin de calculer votre thème natal et de préparer votre rapport astrologique personnalisé.",

      summaryLabel:
        "Votre commande",
      reportName:
        "Rapport Signature",
      uniquePayment:
        "Paiement unique",

      items: [
        "Rapport PDF personnalisé",
        "58 pages d’analyse",
        "Soleil, Lune et Ascendant",
        "Planètes principales",
        "Éléments et modalités",
        "Maisons et aspects",
        "Dominantes, forces et défis",
        "Relations et carrière",
        "Évolution personnelle",
        "Synthèse astrologique",
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
            "Quelle est la différence entre Premium et Signature ?",
          answer:
            "Le rapport Premium offre une analyse approfondie de votre thème. Le rapport Signature ajoute une lecture encore plus complète avec des sections d’évolution personnelle, une mise en relation plus poussée des différentes énergies et une synthèse astrologique finale.",
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
            "Oui. Le rapport est généré à partir de vos propres positions planétaires, de vos maisons, de vos aspects, de vos dominantes et de votre véritable carte du ciel.",
        },
        {
          question:
            "Comment vais-je recevoir mon rapport ?",
          answer:
            "Votre rapport Signature est généré au format PDF après le paiement. Vous pourrez le télécharger directement depuis la page de confirmation.",
        },
        {
          question:
            "Le paiement est-il récurrent ?",
          answer:
            "Non. Il s’agit d’un paiement unique de 79,99 $ US. Aucun abonnement n’est associé à votre commande.",
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
        "Choisir Signature",
    },

    disclaimer:
      "L’astrologie est proposée comme un outil symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Signature Birth Chart Report | Personalized 58-Page Astrology Report",
      description:
        "Discover your birth chart with the Luna Astralis Signature Report: 58 personalized pages about your personality, planets, houses, aspects, relationships, career, personal growth and astrological synthesis.",
      ogTitle:
        "Signature Birth Chart Report | Luna Astralis",
      ogDescription:
        "The most complete Luna Astralis astrology experience in a personalized 58-page report.",
      twitterTitle:
        "Signature Birth Chart Report | Luna Astralis",
      twitterDescription:
        "Discover a complete, structured and deeply personal interpretation of your birth chart in a 58-page PDF report.",
      locale:
        "en_US",
      language:
        "en-US",
      imageAlt:
        "Cover of the Signature Birth Chart Report",
    },

    jsonLd: {
      name:
        "Signature Birth Chart Report",
      description:
        "A personalized 58-page astrology report covering planets, houses, aspects, dominant energies, relationships, career, personal growth and a complete astrological synthesis.",
    },

    reportPrice:
      "US$79.99",

    reportPages:
      "58 pages",

    hero: {
      badge:
        "✨ Personalized astrology report",
      eyebrow:
        "Your birth chart • The most complete analysis",
      titleBefore:
        "Explore your",
      titleHighlight:
        "birth chart in depth",
      description:
        "Explore your personality, houses, aspects, dominant energies, relationships, strengths, growth and potential in a fully personalized 58-page report.",
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
        "Signature Report",
      uniquePayment:
        "One-time payment",
      coverAlt:
        "Cover of the Signature Birth Chart Report",
      createdForYou:
        "Created for you",
    },

    introduction: {
      label:
        "Beyond your zodiac sign",
      title:
        "You are much more than your Sun sign",
      description:
        "Your zodiac sign represents an important part of your personality, but it does not tell your whole story. Your Moon, Ascendant, planets, houses, aspects and dominant energies provide a much richer and more nuanced understanding of how you function.",

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
        "The Signature Report brings together your planets, houses, aspects, dominant energies and growth patterns to offer a complete, precise and deeply personal interpretation.",
      startAnalysisLink:
        "Start my analysis",
    },

    showcase: {
      middlePageText:
        "Your birth chart",
      label:
        "Your personalized report",
      title:
        "An exceptional interpretation of the major dynamics in your chart",
      description:
        "The Signature Report offers a structured, detailed and easy-to-understand astrological portrait. It connects your placements, houses, aspects, dominant energies and growth patterns to reveal the major dynamics in your chart.",

      personalizedPages:
        "personalized pages",
      mainPillars:
        "main pillars",
      uniqueChart:
        "unique chart",

      checklist: [
        "Your Sun, Moon and Ascendant",
        "The main planets in your chart",
        "Your houses and planetary aspects",
        "Your dominant energies, strengths and challenges",
        "Your personal growth and astrological synthesis",
      ],

      previewButton:
        "📖 View the report preview",
      createButton:
        "Create my report",
      coverAlt:
        "Preview of the Signature Report cover",
    },

    contents: {
      label:
        "Inside your report",
      title:
        "A complete analysis of your astrological personality",
      description:
        "Each section helps you understand a specific dimension of your inner functioning, relationships, potential and personal growth.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sun, Moon and Ascendant",
          description:
            "Discover the three pillars of your personality and how they shape your identity, emotions and visible presence.",
        },
        {
          icon:
            "☿",
          title:
            "Your planets",
          description:
            "Explore the main astrological functions influencing your thoughts, desires, relationships and actions.",
        },
        {
          icon:
            "△",
          title:
            "Elements and modalities",
          description:
            "Understand the balance of your energies, your temperament and your natural way of initiating, stabilizing or adapting your actions.",
        },
        {
          icon:
            "⌂",
          title:
            "Your astrological houses",
          description:
            "Discover the areas of life in which your different energies express themselves most intensely.",
        },
        {
          icon:
            "◇",
          title:
            "Your planetary aspects",
          description:
            "Analyze the harmonies, tensions and interactions that give your chart its unique dynamics.",
        },
        {
          icon:
            "★",
          title:
            "Your dominant energies",
          description:
            "Identify the planets, signs, elements and tendencies that play a central role in how you function.",
        },
        {
          icon:
            "⚖",
          title:
            "Strengths and challenges",
          description:
            "Highlight your natural resources, areas of tension and the challenges that support your growth.",
        },
        {
          icon:
            "♡",
          title:
            "Relationships and emotional life",
          description:
            "Understand your relationship needs, your way of loving, your expectations and the dynamics influencing your connections.",
        },
        {
          icon:
            "↗",
          title:
            "Career and potential",
          description:
            "Discover your talents, motivations, way of contributing and the environments that support your fulfillment.",
        },
        {
          icon:
            "☊",
          title:
            "Personal growth",
          description:
            "Explore the major growth patterns in your chart and the inner movements inviting you to evolve.",
        },
        {
          icon:
            "✧",
          title:
            "Astrological synthesis",
          description:
            "Connect every dimension of your chart in a coherent, personal and deeply revealing final interpretation.",
        },
      ],

      button:
        "Get my Signature Report",
    },

    benefits: {
      label:
        "An exceptional exploration of yourself",
      title:
        "Connect the different forces shaping your journey",
      description:
        "Astrology does not confine you to a definition. It offers a symbolic language for observing your tendencies, needs, strengths and growth patterns with greater perspective.",
      previewLink:
        "View the real preview",

      items: [
        {
          icon:
            "✦",
          title:
            "Connect every side of yourself",
          text:
            "Understand how your different energies complement or oppose one another and create the richness of your personality.",
        },
        {
          icon:
            "⌂",
          title:
            "Explore every area of your life",
          text:
            "Observe how your chart expresses itself through relationships, career, home, ambitions and personal growth.",
        },
        {
          icon:
            "◇",
          title:
            "Understand your deeper dynamics",
          text:
            "Decode the connections between your planets, houses and aspects to better understand your reactions and choices.",
        },
        {
          icon:
            "☊",
          title:
            "Identify your growth patterns",
          text:
            "Recognize the challenges, resources and movements of growth that can help you move forward with greater awareness.",
        },
        {
          icon:
            "♡",
          title:
            "Clarify your relationships",
          text:
            "Deepen your understanding of how you love, your emotional needs, expectations and relationship patterns.",
        },
        {
          icon:
            "✧",
          title:
            "Receive a true synthesis",
          text:
            "Complete your reading with an overall vision connecting the main dimensions of your birth chart.",
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
            "Your complete chart is analyzed",
          description:
            "Your planets, Ascendant, houses, aspects, dominant energies and growth patterns are calculated.",
        },
        {
          number:
            "03",
          title:
            "Download your Signature Report",
          description:
            "After payment, your personalized 58-page report is generated and made available for download.",
        },
      ],

      button:
        "Start now",
    },

    order: {
      label:
        "Your personalized report",
      title:
        "Create your Signature Birth Chart Report",
      description:
        "Enter your birth information so your birth chart can be calculated and your personalized astrology report prepared.",

      summaryLabel:
        "Your order",
      reportName:
        "Signature Report",
      uniquePayment:
        "One-time payment",

      items: [
        "Personalized PDF report",
        "58 pages of analysis",
        "Sun, Moon and Ascendant",
        "Main planets",
        "Elements and modalities",
        "Houses and aspects",
        "Dominant energies, strengths and challenges",
        "Relationships and career",
        "Personal growth",
        "Astrological synthesis",
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
            "What is the difference between Premium and Signature?",
          answer:
            "The Premium Report offers an in-depth analysis of your chart. The Signature Report adds an even more complete interpretation with personal-growth sections, deeper connections between the different energies and a final astrological synthesis.",
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
            "Yes. The report is generated from your own planetary positions, houses, aspects, dominant energies and actual birth chart.",
        },
        {
          question:
            "How will I receive my report?",
          answer:
            "Your Signature Report is generated as a PDF after payment. You can download it directly from the confirmation page.",
        },
        {
          question:
            "Is the payment recurring?",
          answer:
            "No. It is a one-time payment of US$79.99. No subscription is associated with your order.",
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
        "Choose Signature",
    },

    disclaimer:
      "Astrology is offered as a symbolic tool for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },

  es: {
    metadata: {
      title:
        "Informe Signature de Carta Natal | Informe personalizado de 58 páginas",
      description:
        "Descubre tu carta natal con el Informe Signature Luna Astralis: 58 páginas personalizadas sobre personalidad, planetas, casas, aspectos, relaciones, carrera, evolución y síntesis astrológica.",
      ogTitle:
        "Informe Signature de Carta Natal | Luna Astralis",
      ogDescription:
        "La experiencia astrológica más completa de Luna Astralis en un informe personalizado de 58 páginas.",
      twitterTitle:
        "Informe Signature de Carta Natal | Luna Astralis",
      twitterDescription:
        "Descubre una lectura completa, estructurada y profundamente personal de tu carta natal en un informe PDF de 58 páginas.",
      locale:
        "es_ES",
      language:
        "es-ES",
      imageAlt:
        "Portada del Informe Signature de Carta Natal",
    },

    jsonLd: {
      name:
        "Informe Signature de Carta Natal",
      description:
        "Informe astrológico personalizado de 58 páginas sobre planetas, casas, aspectos, energías dominantes, relaciones, carrera, evolución personal y síntesis astrológica.",
    },

    reportPrice:
      "79,99 US$",

    reportPages:
      "58 páginas",

    hero: {
      badge:
        "✨ Informe astrológico personalizado",
      eyebrow:
        "Tu carta natal • El análisis más completo",
      titleBefore:
        "Explora en profundidad tu",
      titleHighlight:
        "carta natal",
      description:
        "Explora tu personalidad, tus casas, aspectos, energías dominantes, relaciones, fortalezas, evolución y potencial en un informe completamente personalizado de 58 páginas.",
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
        "Informe Signature",
      uniquePayment:
        "Pago único",
      coverAlt:
        "Portada del Informe Signature de Carta Natal",
      createdForYou:
        "Creado para ti",
    },

    introduction: {
      label:
        "Más allá de tu signo",
      title:
        "Eres mucho más que tu signo solar",
      description:
        "Tu signo astrológico representa una parte importante de tu personalidad, pero no cuenta toda tu historia. Tu Luna, tu Ascendente, tus planetas, casas, aspectos y energías dominantes permiten obtener una lectura mucho más rica y matizada de tu funcionamiento.",

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
        "El Informe Signature reúne tus planetas, casas, aspectos, energías dominantes y ejes de evolución para ofrecerte una lectura completa, precisa y profundamente personal.",
      startAnalysisLink:
        "Comenzar mi análisis",
    },

    showcase: {
      middlePageText:
        "Tu carta natal",
      label:
        "Tu informe personalizado",
      title:
        "Una lectura excepcional de las grandes dinámicas de tu carta",
      description:
        "El Informe Signature te ofrece un retrato astrológico estructurado, detallado y fácil de comprender. Relaciona tus posiciones, casas, aspectos, energías dominantes y ejes de evolución para revelar las grandes dinámicas de tu carta.",

      personalizedPages:
        "páginas personalizadas",
      mainPillars:
        "pilares principales",
      uniqueChart:
        "carta única",

      checklist: [
        "Tu Sol, tu Luna y tu Ascendente",
        "Los principales planetas de tu carta",
        "Tus casas y aspectos planetarios",
        "Tus energías dominantes, fortalezas y desafíos",
        "Tu evolución personal y síntesis astrológica",
      ],

      previewButton:
        "📖 Ver la vista previa del informe",
      createButton:
        "Crear mi informe",
      coverAlt:
        "Vista previa de la portada del Informe Signature",
    },

    contents: {
      label:
        "En tu informe",
      title:
        "Un análisis completo de tu personalidad astrológica",
      description:
        "Cada sección te ayuda a comprender una dimensión específica de tu funcionamiento interior, tus relaciones, tu potencial y tu evolución.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sol, Luna y Ascendente",
          description:
            "Descubre los tres pilares de tu personalidad y cómo moldean tu identidad, tus emociones y tu presencia.",
        },
        {
          icon:
            "☿",
          title:
            "Tus planetas",
          description:
            "Explora las principales funciones astrológicas que influyen en tus pensamientos, deseos, relaciones y acciones.",
        },
        {
          icon:
            "△",
          title:
            "Elementos y modalidades",
          description:
            "Comprende el equilibrio de tus energías, tu temperamento y tu manera natural de iniciar, estabilizar o adaptar tus acciones.",
        },
        {
          icon:
            "⌂",
          title:
            "Tus casas astrológicas",
          description:
            "Descubre los ámbitos de vida en los que tus diferentes energías se manifiestan con mayor intensidad.",
        },
        {
          icon:
            "◇",
          title:
            "Tus aspectos planetarios",
          description:
            "Analiza las armonías, tensiones e interacciones que dan a tu carta su dinámica única.",
        },
        {
          icon:
            "★",
          title:
            "Tus energías dominantes",
          description:
            "Identifica los planetas, signos, elementos y tendencias que ocupan un lugar central en tu funcionamiento.",
        },
        {
          icon:
            "⚖",
          title:
            "Fortalezas y desafíos",
          description:
            "Destaca tus recursos naturales, zonas de tensión y los desafíos que sostienen tu evolución.",
        },
        {
          icon:
            "♡",
          title:
            "Relaciones y vida afectiva",
          description:
            "Comprende tus necesidades relacionales, tu manera de amar, tus expectativas y las dinámicas que influyen en tus vínculos.",
        },
        {
          icon:
            "↗",
          title:
            "Carrera y potencial",
          description:
            "Descubre tus talentos, motivaciones, forma de contribuir y los entornos que favorecen tu realización.",
        },
        {
          icon:
            "☊",
          title:
            "Evolución personal",
          description:
            "Explora los grandes ejes de crecimiento de tu carta y los movimientos interiores que te invitan a evolucionar.",
        },
        {
          icon:
            "✧",
          title:
            "Síntesis astrológica",
          description:
            "Relaciona todas las dimensiones de tu carta en una lectura final coherente, personal y profundamente reveladora.",
        },
      ],

      button:
        "Obtener mi Informe Signature",
    },

    benefits: {
      label:
        "Una exploración excepcional de ti",
      title:
        "Relaciona las diferentes fuerzas que dan forma a tu camino",
      description:
        "La astrología no te encierra en una definición. Te ofrece un lenguaje simbólico para observar tus tendencias, necesidades, fortalezas y ejes de evolución con mayor perspectiva.",
      previewLink:
        "Consultar la vista previa real",

      items: [
        {
          icon:
            "✦",
          title:
            "Relacionar todas tus facetas",
          text:
            "Comprende cómo tus diferentes energías se complementan, se oponen y crean la riqueza de tu personalidad.",
        },
        {
          icon:
            "⌂",
          title:
            "Explorar todos tus ámbitos de vida",
          text:
            "Observa cómo se expresa tu carta en tus relaciones, carrera, hogar, ambiciones y evolución.",
        },
        {
          icon:
            "◇",
          title:
            "Comprender tus dinámicas profundas",
          text:
            "Descifra los vínculos entre tus planetas, casas y aspectos para comprender mejor tus reacciones y elecciones.",
        },
        {
          icon:
            "☊",
          title:
            "Identificar tus ejes de evolución",
          text:
            "Reconoce los desafíos, recursos y movimientos de crecimiento que pueden ayudarte a avanzar con mayor conciencia.",
        },
        {
          icon:
            "♡",
          title:
            "Iluminar tus relaciones",
          text:
            "Profundiza en tu manera de amar, tus necesidades afectivas, expectativas y dinámicas relacionales.",
        },
        {
          icon:
            "✧",
          title:
            "Recibir una verdadera síntesis",
          text:
            "Termina tu lectura con una visión global que conecta las principales dimensiones de tu carta natal.",
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
            "Tu carta completa es analizada",
          description:
            "Tus planetas, Ascendente, casas, aspectos, energías dominantes y ejes de evolución son calculados.",
        },
        {
          number:
            "03",
          title:
            "Descarga tu Informe Signature",
          description:
            "Después del pago, tu informe personalizado de 58 páginas se genera y queda disponible para descargar.",
        },
      ],

      button:
        "Comenzar ahora",
    },

    order: {
      label:
        "Tu informe personalizado",
      title:
        "Crea tu Informe Signature de Carta Natal",
      description:
        "Introduce tus datos de nacimiento para calcular tu carta natal y preparar tu informe astrológico personalizado.",

      summaryLabel:
        "Tu pedido",
      reportName:
        "Informe Signature",
      uniquePayment:
        "Pago único",

      items: [
        "Informe PDF personalizado",
        "58 páginas de análisis",
        "Sol, Luna y Ascendente",
        "Planetas principales",
        "Elementos y modalidades",
        "Casas y aspectos",
        "Energías dominantes, fortalezas y desafíos",
        "Relaciones y carrera",
        "Evolución personal",
        "Síntesis astrológica",
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
            "¿Cuál es la diferencia entre Premium y Signature?",
          answer:
            "El Informe Premium ofrece un análisis profundo de tu carta. El Informe Signature añade una lectura todavía más completa con secciones de evolución personal, una relación más profunda entre las diferentes energías y una síntesis astrológica final.",
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
            "Sí. El informe se genera a partir de tus propias posiciones planetarias, casas, aspectos, energías dominantes y tu verdadera carta natal.",
        },
        {
          question:
            "¿Cómo recibiré mi informe?",
          answer:
            "Tu Informe Signature se genera en formato PDF después del pago. Podrás descargarlo directamente desde la página de confirmación.",
        },
        {
          question:
            "¿El pago es recurrente?",
          answer:
            "No. Se trata de un pago único de 79,99 US$. No hay ninguna suscripción asociada a tu pedido.",
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
        "Elegir Signature",
    },

    disclaimer:
      "La astrología se propone como una herramienta simbólica de exploración personal. No sustituye el asesoramiento médico, psicológico, legal o financiero.",
  },

  de: {
    metadata: {
      title:
        "Signature-Geburtshoroskop-Bericht | Persönliche Analyse mit 58 Seiten",
      description:
        "Entdecken Sie Ihr Geburtshoroskop mit dem Luna Astralis Signature-Bericht: 58 persönliche Seiten über Persönlichkeit, Planeten, Häuser, Aspekte, Beziehungen, Karriere, Entwicklung und astrologische Synthese.",
      ogTitle:
        "Signature-Geburtshoroskop-Bericht | Luna Astralis",
      ogDescription:
        "Die umfassendste astrologische Erfahrung von Luna Astralis in einem persönlichen Bericht mit 58 Seiten.",
      twitterTitle:
        "Signature-Geburtshoroskop-Bericht | Luna Astralis",
      twitterDescription:
        "Entdecken Sie eine vollständige, strukturierte und tief persönliche Deutung Ihres Geburtshoroskops in einem PDF-Bericht mit 58 Seiten.",
      locale:
        "de_DE",
      language:
        "de-DE",
      imageAlt:
        "Titelbild des Signature-Geburtshoroskop-Berichts",
    },

    jsonLd: {
      name:
        "Signature-Geburtshoroskop-Bericht",
      description:
        "Persönlicher astrologischer Bericht mit 58 Seiten über Planeten, Häuser, Aspekte, dominante Energien, Beziehungen, Karriere, persönliche Entwicklung und astrologische Synthese.",
    },

    reportPrice:
      "79,99 US$",

    reportPages:
      "58 Seiten",

    hero: {
      badge:
        "✨ Persönlicher astrologischer Bericht",
      eyebrow:
        "Ihr Geburtshoroskop • Die umfassendste Analyse",
      titleBefore:
        "Entdecken Sie ausführlich Ihr",
      titleHighlight:
        "Geburtshoroskop",
      description:
        "Entdecken Sie Ihre Persönlichkeit, Häuser, Aspekte, dominanten Energien, Beziehungen, Stärken, Entwicklung und Ihr Potenzial in einem vollständig persönlichen Bericht mit 58 Seiten.",
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
        "Signature-Bericht",
      uniquePayment:
        "Einmalige Zahlung",
      coverAlt:
        "Titelbild des Signature-Geburtshoroskop-Berichts",
      createdForYou:
        "Für Sie erstellt",
    },

    introduction: {
      label:
        "Mehr als nur Ihr Sternzeichen",
      title:
        "Sie sind viel mehr als Ihr Sonnenzeichen",
      description:
        "Ihr Sternzeichen beschreibt einen wichtigen Teil Ihrer Persönlichkeit, erzählt jedoch nicht Ihre ganze Geschichte. Mond, Aszendent, Planeten, Häuser, Aspekte und dominante Energien ermöglichen eine wesentlich reichere und differenziertere Deutung Ihrer inneren Funktionsweise.",

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
        "Der Signature-Bericht verbindet Ihre Planeten, Häuser, Aspekte, dominanten Energien und Entwicklungsthemen zu einer vollständigen, präzisen und tief persönlichen Deutung.",
      startAnalysisLink:
        "Meine Analyse beginnen",
    },

    showcase: {
      middlePageText:
        "Ihr Geburtshoroskop",
      label:
        "Ihr persönlicher Bericht",
      title:
        "Eine außergewöhnliche Deutung der großen Dynamiken Ihres Horoskops",
      description:
        "Der Signature-Bericht bietet ein strukturiertes, detailliertes und leicht verständliches astrologisches Porträt. Er verbindet Ihre Positionen, Häuser, Aspekte, dominanten Energien und Entwicklungsthemen, um die großen Dynamiken Ihres Horoskops sichtbar zu machen.",

      personalizedPages:
        "persönliche Seiten",
      mainPillars:
        "zentrale Säulen",
      uniqueChart:
        "einzigartiges Horoskop",

      checklist: [
        "Ihre Sonne, Ihr Mond und Ihr Aszendent",
        "Die wichtigsten Planeten Ihres Horoskops",
        "Ihre Häuser und planetarischen Aspekte",
        "Ihre dominanten Energien, Stärken und Herausforderungen",
        "Ihre persönliche Entwicklung und astrologische Synthese",
      ],

      previewButton:
        "📖 Berichtsvorschau ansehen",
      createButton:
        "Meinen Bericht erstellen",
      coverAlt:
        "Vorschau des Titelbilds des Signature-Berichts",
    },

    contents: {
      label:
        "In Ihrem Bericht",
      title:
        "Eine vollständige Analyse Ihrer astrologischen Persönlichkeit",
      description:
        "Jeder Abschnitt hilft Ihnen, eine bestimmte Dimension Ihres inneren Funktionierens, Ihrer Beziehungen, Ihres Potenzials und Ihrer Entwicklung zu verstehen.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sonne, Mond und Aszendent",
          description:
            "Entdecken Sie die drei Säulen Ihrer Persönlichkeit und wie sie Ihre Identität, Gefühle und sichtbare Präsenz prägen.",
        },
        {
          icon:
            "☿",
          title:
            "Ihre Planeten",
          description:
            "Entdecken Sie die wichtigsten astrologischen Funktionen, die Ihr Denken, Ihre Wünsche, Beziehungen und Handlungen beeinflussen.",
        },
        {
          icon:
            "△",
          title:
            "Elemente und Modalitäten",
          description:
            "Verstehen Sie das Gleichgewicht Ihrer Energien, Ihr Temperament und Ihre natürliche Art, Handlungen einzuleiten, zu stabilisieren oder anzupassen.",
        },
        {
          icon:
            "⌂",
          title:
            "Ihre astrologischen Häuser",
          description:
            "Entdecken Sie die Lebensbereiche, in denen sich Ihre verschiedenen Energien besonders intensiv zeigen.",
        },
        {
          icon:
            "◇",
          title:
            "Ihre planetarischen Aspekte",
          description:
            "Analysieren Sie Harmonien, Spannungen und Wechselwirkungen, die Ihrem Horoskop seine einzigartige Dynamik geben.",
        },
        {
          icon:
            "★",
          title:
            "Ihre dominanten Energien",
          description:
            "Erkennen Sie Planeten, Zeichen, Elemente und Tendenzen, die eine zentrale Rolle in Ihrer inneren Funktionsweise spielen.",
        },
        {
          icon:
            "⚖",
          title:
            "Stärken und Herausforderungen",
          description:
            "Machen Sie Ihre natürlichen Ressourcen, Spannungsbereiche und Herausforderungen sichtbar, die Ihre Entwicklung unterstützen.",
        },
        {
          icon:
            "♡",
          title:
            "Beziehungen und Gefühlsleben",
          description:
            "Verstehen Sie Ihre Beziehungsbedürfnisse, Ihre Art zu lieben, Erwartungen und die Dynamiken Ihrer Verbindungen.",
        },
        {
          icon:
            "↗",
          title:
            "Karriere und Potenzial",
          description:
            "Entdecken Sie Ihre Talente, Motivationen, Ihre Art beizutragen und die Umgebungen, die Ihre Entfaltung fördern.",
        },
        {
          icon:
            "☊",
          title:
            "Persönliche Entwicklung",
          description:
            "Entdecken Sie die großen Wachstumsthemen Ihres Horoskops und die inneren Bewegungen, die Sie zur Entwicklung einladen.",
        },
        {
          icon:
            "✧",
          title:
            "Astrologische Synthese",
          description:
            "Verbinden Sie alle Dimensionen Ihres Horoskops in einer kohärenten, persönlichen und tief aufschlussreichen abschließenden Deutung.",
        },
      ],

      button:
        "Meinen Signature-Bericht erhalten",
    },

    benefits: {
      label:
        "Eine außergewöhnliche Erkundung Ihrer selbst",
      title:
        "Verbinden Sie die verschiedenen Kräfte, die Ihren Weg prägen",
      description:
        "Astrologie legt Sie nicht auf eine Definition fest. Sie bietet eine symbolische Sprache, um Ihre Tendenzen, Bedürfnisse, Stärken und Entwicklungsthemen aus größerer Distanz zu betrachten.",
      previewLink:
        "Die echte Vorschau ansehen",

      items: [
        {
          icon:
            "✦",
          title:
            "Alle Facetten miteinander verbinden",
          text:
            "Verstehen Sie, wie Ihre verschiedenen Energien sich ergänzen, widersprechen und den Reichtum Ihrer Persönlichkeit erschaffen.",
        },
        {
          icon:
            "⌂",
          title:
            "Alle Lebensbereiche erkunden",
          text:
            "Beobachten Sie, wie sich Ihr Horoskop in Beziehungen, Karriere, Zuhause, Ambitionen und Entwicklung ausdrückt.",
        },
        {
          icon:
            "◇",
          title:
            "Ihre tiefen Dynamiken verstehen",
          text:
            "Entschlüsseln Sie die Verbindungen zwischen Planeten, Häusern und Aspekten, um Ihre Reaktionen und Entscheidungen besser zu verstehen.",
        },
        {
          icon:
            "☊",
          title:
            "Ihre Entwicklungsthemen erkennen",
          text:
            "Erkennen Sie Herausforderungen, Ressourcen und Wachstumsbewegungen, die Ihnen helfen können, bewusster voranzugehen.",
        },
        {
          icon:
            "♡",
          title:
            "Ihre Beziehungen klären",
          text:
            "Vertiefen Sie Ihr Verständnis für Ihre Art zu lieben, Ihre emotionalen Bedürfnisse, Erwartungen und Beziehungsmuster.",
        },
        {
          icon:
            "✧",
          title:
            "Eine echte Synthese erhalten",
          text:
            "Beenden Sie Ihre Lektüre mit einer Gesamtvision, die die wichtigsten Dimensionen Ihres Geburtshoroskops verbindet.",
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
            "Ihr vollständiges Horoskop wird analysiert",
          description:
            "Ihre Planeten, Ihr Aszendent, Ihre Häuser, Aspekte, dominanten Energien und Entwicklungsthemen werden berechnet.",
        },
        {
          number:
            "03",
          title:
            "Laden Sie Ihren Signature-Bericht herunter",
          description:
            "Nach der Zahlung wird Ihr persönlicher Bericht mit 58 Seiten erstellt und zum Download bereitgestellt.",
        },
      ],

      button:
        "Jetzt beginnen",
    },

    order: {
      label:
        "Ihr persönlicher Bericht",
      title:
        "Erstellen Sie Ihren Signature-Geburtshoroskop-Bericht",
      description:
        "Geben Sie Ihre Geburtsdaten ein, damit Ihr Geburtshoroskop berechnet und Ihr persönlicher astrologischer Bericht erstellt werden kann.",

      summaryLabel:
        "Ihre Bestellung",
      reportName:
        "Signature-Bericht",
      uniquePayment:
        "Einmalige Zahlung",

      items: [
        "Persönlicher PDF-Bericht",
        "58 Seiten Analyse",
        "Sonne, Mond und Aszendent",
        "Wichtigste Planeten",
        "Elemente und Modalitäten",
        "Häuser und Aspekte",
        "Dominante Energien, Stärken und Herausforderungen",
        "Beziehungen und Karriere",
        "Persönliche Entwicklung",
        "Astrologische Synthese",
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
            "Was ist der Unterschied zwischen Premium und Signature?",
          answer:
            "Der Premium-Bericht bietet eine ausführliche Analyse Ihres Horoskops. Der Signature-Bericht ergänzt eine noch umfassendere Deutung mit Abschnitten zur persönlichen Entwicklung, tieferen Verbindungen zwischen den Energien und einer abschließenden astrologischen Synthese.",
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
            "Ja. Der Bericht wird aus Ihren eigenen Planetenpositionen, Häusern, Aspekten, dominanten Energien und Ihrem tatsächlichen Geburtshoroskop erstellt.",
        },
        {
          question:
            "Wie erhalte ich meinen Bericht?",
          answer:
            "Ihr Signature-Bericht wird nach der Zahlung als PDF erstellt. Sie können ihn direkt auf der Bestätigungsseite herunterladen.",
        },
        {
          question:
            "Ist die Zahlung wiederkehrend?",
          answer:
            "Nein. Es handelt sich um eine einmalige Zahlung von 79,99 US$. Mit Ihrer Bestellung ist kein Abonnement verbunden.",
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
        "Signature wählen",
    },

    disclaimer:
      "Astrologie wird als symbolisches Werkzeug zur persönlichen Erkundung angeboten. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Rapporto Signature del Tema Natale | Analisi personalizzata di 58 pagine",
      description:
        "Scopri il tuo tema natale con il Rapporto Signature Luna Astralis: 58 pagine personalizzate su personalità, pianeti, case, aspetti, relazioni, carriera, evoluzione e sintesi astrologica.",
      ogTitle:
        "Rapporto Signature del Tema Natale | Luna Astralis",
      ogDescription:
        "L’esperienza astrologica più completa di Luna Astralis in un rapporto personalizzato di 58 pagine.",
      twitterTitle:
        "Rapporto Signature del Tema Natale | Luna Astralis",
      twitterDescription:
        "Scopri una lettura completa, strutturata e profondamente personale del tuo tema natale in un rapporto PDF di 58 pagine.",
      locale:
        "it_IT",
      language:
        "it-IT",
      imageAlt:
        "Copertina del Rapporto Signature del Tema Natale",
    },

    jsonLd: {
      name:
        "Rapporto Signature del Tema Natale",
      description:
        "Rapporto astrologico personalizzato di 58 pagine dedicato a pianeti, case, aspetti, energie dominanti, relazioni, carriera, evoluzione personale e sintesi astrologica.",
    },

    reportPrice:
      "79,99 USD",

    reportPages:
      "58 pagine",

    hero: {
      badge:
        "✨ Rapporto astrologico personalizzato",
      eyebrow:
        "Il tuo tema natale • L’analisi più completa",
      titleBefore:
        "Esplora in profondità il tuo",
      titleHighlight:
        "tema natale",
      description:
        "Esplora personalità, case, aspetti, energie dominanti, relazioni, punti di forza, evoluzione e potenziale in un rapporto completamente personalizzato di 58 pagine.",
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
        "Rapporto Signature",
      uniquePayment:
        "Pagamento unico",
      coverAlt:
        "Copertina del Rapporto Signature del Tema Natale",
      createdForYou:
        "Creato per te",
    },

    introduction: {
      label:
        "Oltre il tuo segno",
      title:
        "Sei molto più del tuo segno solare",
      description:
        "Il tuo segno astrologico rappresenta una parte importante della tua personalità, ma non racconta tutta la tua storia. Luna, Ascendente, pianeti, case, aspetti ed energie dominanti offrono una lettura molto più ricca e sfumata del tuo funzionamento.",

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
        "Il Rapporto Signature riunisce pianeti, case, aspetti, energie dominanti e percorsi di evoluzione per offrirti una lettura completa, precisa e profondamente personale.",
      startAnalysisLink:
        "Inizia la mia analisi",
    },

    showcase: {
      middlePageText:
        "Il tuo tema natale",
      label:
        "Il tuo rapporto personalizzato",
      title:
        "Una lettura eccezionale delle grandi dinamiche del tuo tema",
      description:
        "Il Rapporto Signature offre un ritratto astrologico strutturato, dettagliato e facile da comprendere. Collega posizioni, case, aspetti, energie dominanti e percorsi evolutivi per rivelare le grandi dinamiche del tuo tema.",

      personalizedPages:
        "pagine personalizzate",
      mainPillars:
        "pilastri principali",
      uniqueChart:
        "tema unico",

      checklist: [
        "Il tuo Sole, la tua Luna e il tuo Ascendente",
        "I principali pianeti del tuo tema",
        "Le tue case e gli aspetti planetari",
        "Le tue energie dominanti, i punti di forza e le sfide",
        "La tua evoluzione personale e la sintesi astrologica",
      ],

      previewButton:
        "📖 Vedi l’anteprima del rapporto",
      createButton:
        "Crea il mio rapporto",
      coverAlt:
        "Anteprima della copertina del Rapporto Signature",
    },

    contents: {
      label:
        "Nel tuo rapporto",
      title:
        "Un’analisi completa della tua personalità astrologica",
      description:
        "Ogni sezione ti aiuta a comprendere una dimensione specifica del tuo funzionamento interiore, delle relazioni, del potenziale e dell’evoluzione.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sole, Luna e Ascendente",
          description:
            "Scopri i tre pilastri della tua personalità e come modellano identità, emozioni e presenza.",
        },
        {
          icon:
            "☿",
          title:
            "I tuoi pianeti",
          description:
            "Esplora le principali funzioni astrologiche che influenzano pensieri, desideri, relazioni e azioni.",
        },
        {
          icon:
            "△",
          title:
            "Elementi e modalità",
          description:
            "Comprendi l’equilibrio delle tue energie, il temperamento e il tuo modo naturale di iniziare, stabilizzare o adattare le azioni.",
        },
        {
          icon:
            "⌂",
          title:
            "Le tue case astrologiche",
          description:
            "Scopri gli ambiti di vita in cui le tue diverse energie si manifestano con maggiore intensità.",
        },
        {
          icon:
            "◇",
          title:
            "I tuoi aspetti planetari",
          description:
            "Analizza armonie, tensioni e interazioni che danno al tuo tema la sua dinamica unica.",
        },
        {
          icon:
            "★",
          title:
            "Le tue energie dominanti",
          description:
            "Identifica pianeti, segni, elementi e tendenze che occupano un ruolo centrale nel tuo funzionamento.",
        },
        {
          icon:
            "⚖",
          title:
            "Punti di forza e sfide",
          description:
            "Metti in luce risorse naturali, aree di tensione e sfide che sostengono la tua evoluzione.",
        },
        {
          icon:
            "♡",
          title:
            "Relazioni e vita affettiva",
          description:
            "Comprendi i tuoi bisogni relazionali, il modo di amare, le aspettative e le dinamiche che influenzano i tuoi legami.",
        },
        {
          icon:
            "↗",
          title:
            "Carriera e potenziale",
          description:
            "Scopri talenti, motivazioni, il tuo modo di contribuire e gli ambienti che favoriscono la realizzazione.",
        },
        {
          icon:
            "☊",
          title:
            "Evoluzione personale",
          description:
            "Esplora i grandi percorsi di crescita del tuo tema e i movimenti interiori che ti invitano a evolvere.",
        },
        {
          icon:
            "✧",
          title:
            "Sintesi astrologica",
          description:
            "Collega tutte le dimensioni del tuo tema in una lettura finale coerente, personale e profondamente rivelatrice.",
        },
      ],

      button:
        "Ottieni il mio Rapporto Signature",
    },

    benefits: {
      label:
        "Un’esplorazione eccezionale di te",
      title:
        "Collega le diverse forze che modellano il tuo percorso",
      description:
        "L’astrologia non ti rinchiude in una definizione. Offre un linguaggio simbolico per osservare tendenze, bisogni, punti di forza e percorsi evolutivi con maggiore prospettiva.",
      previewLink:
        "Consulta l’anteprima reale",

      items: [
        {
          icon:
            "✦",
          title:
            "Collegare tutte le tue sfaccettature",
          text:
            "Comprendi come le tue diverse energie si completano, si oppongono e creano la ricchezza della tua personalità.",
        },
        {
          icon:
            "⌂",
          title:
            "Esplorare tutti gli ambiti della vita",
          text:
            "Osserva come il tuo tema si esprime nelle relazioni, nella carriera, nella casa, nelle ambizioni e nell’evoluzione.",
        },
        {
          icon:
            "◇",
          title:
            "Comprendere le tue dinamiche profonde",
          text:
            "Decodifica i legami tra pianeti, case e aspetti per comprendere meglio reazioni e scelte.",
        },
        {
          icon:
            "☊",
          title:
            "Identificare i tuoi percorsi evolutivi",
          text:
            "Riconosci sfide, risorse e movimenti di crescita che possono aiutarti ad avanzare con maggiore consapevolezza.",
        },
        {
          icon:
            "♡",
          title:
            "Illuminare le tue relazioni",
          text:
            "Approfondisci il tuo modo di amare, i bisogni affettivi, le aspettative e le dinamiche relazionali.",
        },
        {
          icon:
            "✧",
          title:
            "Ricevere una vera sintesi",
          text:
            "Concludi la lettura con una visione d’insieme che collega le principali dimensioni del tuo tema natale.",
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
            "Il tuo tema completo viene analizzato",
          description:
            "Pianeti, Ascendente, case, aspetti, energie dominanti e percorsi evolutivi vengono calcolati.",
        },
        {
          number:
            "03",
          title:
            "Scarica il tuo Rapporto Signature",
          description:
            "Dopo il pagamento, il tuo rapporto personalizzato di 58 pagine viene generato e reso disponibile per il download.",
        },
      ],

      button:
        "Inizia ora",
    },

    order: {
      label:
        "Il tuo rapporto personalizzato",
      title:
        "Crea il tuo Rapporto Signature del Tema Natale",
      description:
        "Inserisci i tuoi dati di nascita per calcolare il tema natale e preparare il tuo rapporto astrologico personalizzato.",

      summaryLabel:
        "Il tuo ordine",
      reportName:
        "Rapporto Signature",
      uniquePayment:
        "Pagamento unico",

      items: [
        "Rapporto PDF personalizzato",
        "58 pagine di analisi",
        "Sole, Luna e Ascendente",
        "Pianeti principali",
        "Elementi e modalità",
        "Case e aspetti",
        "Energie dominanti, punti di forza e sfide",
        "Relazioni e carriera",
        "Evoluzione personale",
        "Sintesi astrologica",
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
            "Qual è la differenza tra Premium e Signature?",
          answer:
            "Il Rapporto Premium offre un’analisi approfondita del tema. Il Rapporto Signature aggiunge una lettura ancora più completa con sezioni di evoluzione personale, collegamenti più profondi tra le energie e una sintesi astrologica finale.",
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
            "Sì. Il rapporto viene generato a partire dalle tue posizioni planetarie, case, aspetti, energie dominanti e dal tuo vero tema natale.",
        },
        {
          question:
            "Come riceverò il mio rapporto?",
          answer:
            "Il Rapporto Signature viene generato in formato PDF dopo il pagamento. Potrai scaricarlo direttamente dalla pagina di conferma.",
        },
        {
          question:
            "Il pagamento è ricorrente?",
          answer:
            "No. Si tratta di un pagamento unico di 79,99 USD. Nessun abbonamento è associato all’ordine.",
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
        "Scegli Signature",
    },

    disclaimer:
      "L’astrologia viene proposta come strumento simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Relatório Signature do Mapa Astral | Análise personalizada de 58 páginas",
      description:
        "Descubra seu mapa astral com o Relatório Signature Luna Astralis: 58 páginas personalizadas sobre personalidade, planetas, casas, aspectos, relações, carreira, evolução e síntese astrológica.",
      ogTitle:
        "Relatório Signature do Mapa Astral | Luna Astralis",
      ogDescription:
        "A experiência astrológica mais completa da Luna Astralis em um relatório personalizado de 58 páginas.",
      twitterTitle:
        "Relatório Signature do Mapa Astral | Luna Astralis",
      twitterDescription:
        "Descubra uma leitura completa, estruturada e profundamente pessoal do seu mapa natal em um relatório PDF de 58 páginas.",
      locale:
        "pt_PT",
      language:
        "pt-PT",
      imageAlt:
        "Capa do Relatório Signature do Mapa Astral",
    },

    jsonLd: {
      name:
        "Relatório Signature do Mapa Astral",
      description:
        "Relatório astrológico personalizado de 58 páginas sobre planetas, casas, aspectos, energias dominantes, relações, carreira, evolução pessoal e síntese astrológica.",
    },

    reportPrice:
      "79,99 US$",

    reportPages:
      "58 páginas",

    hero: {
      badge:
        "✨ Relatório astrológico personalizado",
      eyebrow:
        "Seu mapa natal • A análise mais completa",
      titleBefore:
        "Explore em profundidade seu",
      titleHighlight:
        "mapa astral",
      description:
        "Explore sua personalidade, casas, aspectos, energias dominantes, relações, forças, evolução e potencial em um relatório totalmente personalizado de 58 páginas.",
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
        "Relatório Signature",
      uniquePayment:
        "Pagamento único",
      coverAlt:
        "Capa do Relatório Signature do Mapa Astral",
      createdForYou:
        "Criado para você",
    },

    introduction: {
      label:
        "Além do seu signo",
      title:
        "Você é muito mais do que seu signo solar",
      description:
        "Seu signo astrológico representa uma parte importante da sua personalidade, mas não conta toda a sua história. Sua Lua, seu Ascendente, seus planetas, casas, aspectos e energias dominantes permitem uma leitura muito mais rica e detalhada do seu funcionamento.",

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
        "O Relatório Signature reúne seus planetas, casas, aspectos, energias dominantes e caminhos evolutivos para oferecer uma leitura completa, precisa e profundamente pessoal.",
      startAnalysisLink:
        "Começar minha análise",
    },

    showcase: {
      middlePageText:
        "Seu mapa astral",
      label:
        "Seu relatório personalizado",
      title:
        "Uma leitura excepcional das grandes dinâmicas do seu mapa",
      description:
        "O Relatório Signature oferece um retrato astrológico estruturado, detalhado e fácil de compreender. Ele conecta posições, casas, aspectos, energias dominantes e caminhos evolutivos para revelar as grandes dinâmicas do seu mapa.",

      personalizedPages:
        "páginas personalizadas",
      mainPillars:
        "pilares principais",
      uniqueChart:
        "mapa único",

      checklist: [
        "Seu Sol, sua Lua e seu Ascendente",
        "Os principais planetas do seu mapa",
        "Suas casas e aspectos planetários",
        "Suas energias dominantes, forças e desafios",
        "Sua evolução pessoal e síntese astrológica",
      ],

      previewButton:
        "📖 Ver a prévia do relatório",
      createButton:
        "Criar meu relatório",
      coverAlt:
        "Prévia da capa do Relatório Signature",
    },

    contents: {
      label:
        "No seu relatório",
      title:
        "Uma análise completa da sua personalidade astrológica",
      description:
        "Cada seção ajuda você a compreender uma dimensão específica do seu funcionamento interior, das relações, do potencial e da evolução.",

      features: [
        {
          icon:
            "☉",
          title:
            "Sol, Lua e Ascendente",
          description:
            "Descubra os três pilares da sua personalidade e como eles moldam sua identidade, emoções e presença.",
        },
        {
          icon:
            "☿",
          title:
            "Seus planetas",
          description:
            "Explore as principais funções astrológicas que influenciam seus pensamentos, desejos, relações e ações.",
        },
        {
          icon:
            "△",
          title:
            "Elementos e modalidades",
          description:
            "Compreenda o equilíbrio das suas energias, seu temperamento e sua maneira natural de iniciar, estabilizar ou adaptar suas ações.",
        },
        {
          icon:
            "⌂",
          title:
            "Suas casas astrológicas",
          description:
            "Descubra as áreas da vida em que suas diferentes energias se manifestam com maior intensidade.",
        },
        {
          icon:
            "◇",
          title:
            "Seus aspectos planetários",
          description:
            "Analise harmonias, tensões e interações que dão ao seu mapa sua dinâmica única.",
        },
        {
          icon:
            "★",
          title:
            "Suas energias dominantes",
          description:
            "Identifique os planetas, signos, elementos e tendências que ocupam um papel central no seu funcionamento.",
        },
        {
          icon:
            "⚖",
          title:
            "Forças e desafios",
          description:
            "Destaque seus recursos naturais, áreas de tensão e os desafios que sustentam sua evolução.",
        },
        {
          icon:
            "♡",
          title:
            "Relações e vida afetiva",
          description:
            "Compreenda suas necessidades relacionais, sua maneira de amar, expectativas e as dinâmicas dos seus vínculos.",
        },
        {
          icon:
            "↗",
          title:
            "Carreira e potencial",
          description:
            "Descubra seus talentos, motivações, sua maneira de contribuir e os ambientes que favorecem sua realização.",
        },
        {
          icon:
            "☊",
          title:
            "Evolução pessoal",
          description:
            "Explore os grandes caminhos de crescimento do seu mapa e os movimentos interiores que convidam você a evoluir.",
        },
        {
          icon:
            "✧",
          title:
            "Síntese astrológica",
          description:
            "Conecte todas as dimensões do seu mapa em uma leitura final coerente, pessoal e profundamente reveladora.",
        },
      ],

      button:
        "Obter meu Relatório Signature",
    },

    benefits: {
      label:
        "Uma exploração excepcional de si",
      title:
        "Conecte as diferentes forças que moldam seu caminho",
      description:
        "A astrologia não prende você a uma definição. Ela oferece uma linguagem simbólica para observar suas tendências, necessidades, forças e caminhos evolutivos com maior perspectiva.",
      previewLink:
        "Consultar a prévia real",

      items: [
        {
          icon:
            "✦",
          title:
            "Conectar todas as suas facetas",
          text:
            "Compreenda como suas diferentes energias se complementam, se opõem e criam a riqueza da sua personalidade.",
        },
        {
          icon:
            "⌂",
          title:
            "Explorar todas as áreas da vida",
          text:
            "Observe como seu mapa se expressa nas relações, carreira, lar, ambições e evolução.",
        },
        {
          icon:
            "◇",
          title:
            "Compreender suas dinâmicas profundas",
          text:
            "Decifre os vínculos entre planetas, casas e aspectos para compreender melhor suas reações e escolhas.",
        },
        {
          icon:
            "☊",
          title:
            "Identificar seus caminhos evolutivos",
          text:
            "Reconheça desafios, recursos e movimentos de crescimento que podem ajudar você a avançar com mais consciência.",
        },
        {
          icon:
            "♡",
          title:
            "Iluminar suas relações",
          text:
            "Aprofunde sua maneira de amar, suas necessidades afetivas, expectativas e dinâmicas relacionais.",
        },
        {
          icon:
            "✧",
          title:
            "Receber uma verdadeira síntese",
          text:
            "Conclua sua leitura com uma visão global que conecta as principais dimensões do seu mapa natal.",
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
            "Seu mapa completo é analisado",
          description:
            "Seus planetas, Ascendente, casas, aspectos, energias dominantes e caminhos evolutivos são calculados.",
        },
        {
          number:
            "03",
          title:
            "Baixe seu Relatório Signature",
          description:
            "Após o pagamento, seu relatório personalizado de 58 páginas é gerado e disponibilizado para download.",
        },
      ],

      button:
        "Começar agora",
    },

    order: {
      label:
        "Seu relatório personalizado",
      title:
        "Crie seu Relatório Signature do Mapa Astral",
      description:
        "Informe seus dados de nascimento para calcular seu mapa natal e preparar seu relatório astrológico personalizado.",

      summaryLabel:
        "Seu pedido",
      reportName:
        "Relatório Signature",
      uniquePayment:
        "Pagamento único",

      items: [
        "Relatório PDF personalizado",
        "58 páginas de análise",
        "Sol, Lua e Ascendente",
        "Planetas principais",
        "Elementos e modalidades",
        "Casas e aspectos",
        "Energias dominantes, forças e desafios",
        "Relações e carreira",
        "Evolução pessoal",
        "Síntese astrológica",
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
            "Qual é a diferença entre Premium e Signature?",
          answer:
            "O Relatório Premium oferece uma análise profunda do seu mapa. O Relatório Signature acrescenta uma leitura ainda mais completa com seções de evolução pessoal, conexões mais profundas entre as diferentes energias e uma síntese astrológica final.",
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
            "Sim. O relatório é gerado a partir das suas próprias posições planetárias, casas, aspectos, energias dominantes e do seu verdadeiro mapa astral.",
        },
        {
          question:
            "Como receberei meu relatório?",
          answer:
            "Seu Relatório Signature é gerado em PDF após o pagamento. Você poderá baixá-lo diretamente na página de confirmação.",
        },
        {
          question:
            "O pagamento é recorrente?",
          answer:
            "Não. Trata-se de um pagamento único de 79,99 US$. Nenhuma assinatura está associada ao pedido.",
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
        "Escolher Signature",
    },

    disclaimer:
      "A astrologia é apresentada como uma ferramenta simbólica de exploração pessoal. Ela não substitui aconselhamento médico, psicológico, jurídico ou financeiro.",
  },
};
