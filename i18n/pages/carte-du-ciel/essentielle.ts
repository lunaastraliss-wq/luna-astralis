import type {
  Locale,
} from "@/i18n/config";

export type EssentialFeature = {
  icon: string;
  title: string;
  description: string;
};

export type EssentialBenefit = {
  icon: string;
  title: string;
  text: string;
};

export type EssentialProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type EssentialFaqItem = {
  question: string;
  answer: string;
};

export type EssentialPageText = {
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
    features: EssentialFeature[];
    button: string;
  };

  benefits: {
    label: string;
    title: string;
    description: string;
    previewLink: string;
    items: EssentialBenefit[];
  };

  process: {
    label: string;
    title: string;
    description: string;
    steps: EssentialProcessStep[];
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
    items: EssentialFaqItem[];
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

export const ESSENTIAL_TRANSLATIONS: Record<
  Locale,
  EssentialPageText
> = {
  fr: {
    metadata: {
      title:
        "Rapport Carte du ciel Essentielle | Thème astral personnalisé",
      description:
        "Découvrez votre Soleil, votre Lune, votre Ascendant, vos planètes, vos éléments et vos modalités dans un rapport astrologique personnalisé de 17 pages.",
      ogTitle:
        "Rapport Carte du ciel Essentielle | Luna Astralis",
      ogDescription:
        "Une lecture claire et personnalisée des principales énergies de votre thème astral.",
      twitterTitle:
        "Rapport Carte du ciel Essentielle | Luna Astralis",
      twitterDescription:
        "Découvrez les fondations de votre thème astral dans un rapport PDF personnalisé de 17 pages.",
      locale:
        "fr_CA",
      language:
        "fr-CA",
      imageAlt:
        "Couverture du rapport Carte du ciel Essentielle",
    },

    jsonLd: {
      name:
        "Rapport Carte du ciel Essentielle",
      description:
        "Rapport astrologique personnalisé de 17 pages présentant le Soleil, la Lune, l’Ascendant, les planètes, les éléments et les modalités du thème natal.",
    },

    reportPrice:
      "24,99 $ US",

    reportPages:
      "17 pages",

    hero: {
      badge:
        "✨ Rapport astrologique personnalisé",
      eyebrow:
        "Votre thème natal • Vos énergies essentielles",
      titleBefore:
        "Découvrez les fondations de votre",
      titleHighlight:
        "carte du ciel",
      description:
        "Explorez votre Soleil, votre Lune, votre Ascendant et les principales influences de votre thème astral dans un rapport clair, élégant et entièrement personnalisé.",
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
        "Rapport Essentielle",
      uniquePayment:
        "Paiement unique",
      coverAlt:
        "Couverture du rapport Carte du ciel Essentielle",
      createdForYou:
        "Créé pour vous",
    },

    introduction: {
      label:
        "Au-delà de votre signe",
      title:
        "Vous êtes bien plus que votre signe solaire",
      description:
        "Votre signe astrologique représente une partie importante de votre personnalité, mais il ne raconte pas toute votre histoire. Votre Lune, votre Ascendant, vos planètes et l’équilibre de vos énergies permettent d’obtenir une lecture beaucoup plus nuancée de votre nature.",

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
        "Le rapport Essentielle réunit vos principaux placements pour vous offrir une lecture plus précise et plus personnelle.",
      startAnalysisLink:
        "Commencer mon analyse",
    },

    showcase: {
      middlePageText:
        "Votre thème astral",
      label:
        "Votre rapport personnalisé",
      title:
        "Une lecture accessible des principales énergies de votre thème",
      description:
        "Le rapport Essentielle vous offre un premier portrait astrologique structuré, personnalisé et facile à comprendre. Il vous permet de découvrir les grandes fondations de votre personnalité sans vous perdre dans des notions trop complexes.",

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
        "Aperçu de la couverture du rapport Essentielle",
    },

    contents: {
      label:
        "Dans votre rapport",
      title:
        "Les fondations de votre personnalité astrologique",
      description:
        "Chaque partie du rapport vous aide à mieux comprendre une dimension précise de votre fonctionnement intérieur.",

      features: [
        {
          icon:
            "☉",
          title:
            "Votre Soleil",
          description:
            "Découvrez votre identité profonde, votre volonté, votre vitalité et la manière dont vous cherchez naturellement à rayonner.",
        },
        {
          icon:
            "☾",
          title:
            "Votre Lune",
          description:
            "Comprenez vos émotions, vos besoins affectifs, vos réactions instinctives et ce qui vous procure un sentiment de sécurité.",
        },
        {
          icon:
            "↑",
          title:
            "Votre Ascendant",
          description:
            "Explorez votre manière d’aborder la vie, votre tempérament visible et l’impression que vous donnez spontanément aux autres.",
        },
        {
          icon:
            "☿",
          title:
            "Vos planètes",
          description:
            "Découvrez les principales influences planétaires qui façonnent votre pensée, vos sentiments, vos désirs et votre manière d’agir.",
        },
        {
          icon:
            "△",
          title:
            "Vos éléments",
          description:
            "Analysez l’équilibre entre le Feu, la Terre, l’Air et l’Eau afin de mieux comprendre votre énergie dominante.",
        },
        {
          icon:
            "◇",
          title:
            "Vos modalités",
          description:
            "Comprenez votre façon de commencer, de poursuivre et d’adapter vos actions grâce aux modes Cardinal, Fixe et Mutable.",
        },
      ],

      button:
        "Obtenir mon rapport Essentielle",
    },

    benefits: {
      label:
        "Une première exploration de soi",
      title:
        "Comprenez ce qui vous anime naturellement",
      description:
        "L’astrologie ne vous enferme pas dans une définition. Elle vous offre un langage symbolique pour observer vos tendances, vos besoins et vos forces avec davantage de recul.",
      previewLink:
        "Consulter l’aperçu réel",

      items: [
        {
          icon:
            "✦",
          title:
            "Mieux vous comprendre",
          text:
            "Mettez des mots sur les principales facettes de votre personnalité et sur les contradictions que vous ressentez parfois.",
        },
        {
          icon:
            "☾",
          title:
            "Comprendre vos émotions",
          text:
            "Identifiez ce dont vous avez besoin pour vous sentir en sécurité, compris et émotionnellement équilibré.",
        },
        {
          icon:
            "☉",
          title:
            "Reconnaître vos forces",
          text:
            "Découvrez les qualités naturelles sur lesquelles vous pouvez vous appuyer dans votre vie personnelle et professionnelle.",
        },
        {
          icon:
            "△",
          title:
            "Observer votre équilibre",
          text:
            "Comprenez quelles énergies sont dominantes dans votre thème et lesquelles demandent davantage d’attention.",
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
            "Entrez votre prénom, votre date, votre heure et votre lieu de naissance dans le formulaire.",
        },
        {
          number:
            "02",
          title:
            "Votre thème est calculé",
          description:
            "Les positions de vos planètes, votre Ascendant, vos éléments et vos modalités sont calculés automatiquement.",
        },
        {
          number:
            "03",
          title:
            "Téléchargez votre rapport",
          description:
            "Après le paiement, votre rapport PDF personnalisé est généré et offert en téléchargement.",
        },
      ],

      button:
        "Commencer maintenant",
    },

    order: {
      label:
        "Votre rapport personnalisé",
      title:
        "Créez votre rapport Carte du ciel Essentielle",
      description:
        "Entrez vos informations de naissance afin de calculer votre thème natal et de préparer votre rapport astrologique personnalisé.",

      summaryLabel:
        "Votre commande",
      reportName:
        "Rapport Essentielle",
      uniquePayment:
        "Paiement unique",

      items: [
        "Rapport PDF personnalisé",
        "17 pages d’analyse",
        "Soleil, Lune et Ascendant",
        "Planètes principales",
        "Éléments et modalités",
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
            "Quelle est la différence avec la carte du ciel gratuite ?",
          answer:
            "La carte du ciel gratuite présente principalement votre roue astrologique et vos placements. Le rapport Essentielle ajoute une interprétation personnalisée de votre Soleil, de votre Lune, de votre Ascendant, de vos planètes, de vos éléments et de vos modalités.",
        },
        {
          question:
            "Quelles informations dois-je fournir ?",
          answer:
            "Vous devez fournir votre prénom, votre date de naissance, votre heure de naissance ainsi que votre ville et votre pays de naissance.",
        },
        {
          question:
            "Que se passe-t-il si je ne connais pas mon heure de naissance ?",
          answer:
            "Une heure précise est recommandée, car elle permet de calculer correctement votre Ascendant. Sans heure fiable, certaines parties du rapport pourraient être inexactes.",
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
            "Non. Il s’agit d’un paiement unique de 24,99 $ US. Aucun abonnement n’est associé à votre commande.",
        },
      ],
    },

    comparison: {
      label:
        "Besoin d’une analyse plus complète ?",
      title:
        "Comparez les trois rapports Carte du ciel",
      description:
        "Découvrez les différences entre les rapports Essentielle, Premium et Signature afin de choisir le niveau d’analyse qui vous convient.",
      compareButton:
        "Comparer les trois rapports",
      chooseButton:
        "Choisir Essentielle",
    },

    disclaimer:
      "L’astrologie est proposée comme un outil symbolique d’exploration personnelle. Elle ne remplace pas un avis médical, psychologique, juridique ou financier.",
  },

  en: {
    metadata: {
      title:
        "Essential Birth Chart Report | Personalized Astrology Report",
      description:
        "Discover your Sun, Moon, Ascendant, planets, elements and modalities in a personalized 17-page astrology report.",
      ogTitle:
        "Essential Birth Chart Report | Luna Astralis",
      ogDescription:
        "A clear and personalized interpretation of the main energies in your birth chart.",
      twitterTitle:
        "Essential Birth Chart Report | Luna Astralis",
      twitterDescription:
        "Discover the foundations of your birth chart in a personalized 17-page PDF report.",
      locale:
        "en_US",
      language:
        "en-US",
      imageAlt:
        "Cover of the Essential Birth Chart Report",
    },

    jsonLd: {
      name:
        "Essential Birth Chart Report",
      description:
        "A personalized 17-page astrology report featuring the Sun, Moon, Ascendant, planets, elements and modalities of the birth chart.",
    },

    reportPrice:
      "US$24.99",

    reportPages:
      "17 pages",

    hero: {
      badge:
        "✨ Personalized astrology report",
      eyebrow:
        "Your birth chart • Your essential energies",
      titleBefore:
        "Discover the foundations of your",
      titleHighlight:
        "birth chart",
      description:
        "Explore your Sun, Moon, Ascendant and the main influences in your birth chart through a clear, elegant and fully personalized report.",
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
        "Essential Report",
      uniquePayment:
        "One-time payment",
      coverAlt:
        "Cover of the Essential Birth Chart Report",
      createdForYou:
        "Created for you",
    },

    introduction: {
      label:
        "Beyond your zodiac sign",
      title:
        "You are much more than your Sun sign",
      description:
        "Your zodiac sign represents an important part of your personality, but it does not tell your whole story. Your Moon, Ascendant, planets and the balance of your energies provide a much richer and more nuanced understanding of your nature.",

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
        "The Essential Report brings together your main placements to offer a more precise and personal interpretation.",
      startAnalysisLink:
        "Start my analysis",
    },

    showcase: {
      middlePageText:
        "Your birth chart",
      label:
        "Your personalized report",
      title:
        "An accessible interpretation of the main energies in your chart",
      description:
        "The Essential Report gives you a structured, personalized and easy-to-understand introduction to your birth chart. It reveals the main foundations of your personality without overwhelming you with overly complex concepts.",

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
        "Preview of the Essential Report cover",
    },

    contents: {
      label:
        "Inside your report",
      title:
        "The foundations of your astrological personality",
      description:
        "Each section of the report helps you understand a specific dimension of your inner functioning.",

      features: [
        {
          icon:
            "☉",
          title:
            "Your Sun",
          description:
            "Discover your core identity, willpower, vitality and the way you naturally seek to shine.",
        },
        {
          icon:
            "☾",
          title:
            "Your Moon",
          description:
            "Understand your emotions, emotional needs, instinctive reactions and what gives you a sense of security.",
        },
        {
          icon:
            "↑",
          title:
            "Your Ascendant",
          description:
            "Explore your approach to life, visible temperament and the spontaneous impression you make on others.",
        },
        {
          icon:
            "☿",
          title:
            "Your planets",
          description:
            "Discover the main planetary influences shaping your thoughts, feelings, desires and actions.",
        },
        {
          icon:
            "△",
          title:
            "Your elements",
          description:
            "Analyze the balance between Fire, Earth, Air and Water to better understand your dominant energy.",
        },
        {
          icon:
            "◇",
          title:
            "Your modalities",
          description:
            "Understand how you begin, continue and adapt your actions through the Cardinal, Fixed and Mutable modalities.",
        },
      ],

      button:
        "Get my Essential Report",
    },

    benefits: {
      label:
        "A first exploration of yourself",
      title:
        "Understand what naturally motivates you",
      description:
        "Astrology does not confine you to a definition. It offers a symbolic language through which you can observe your tendencies, needs and strengths with greater perspective.",
      previewLink:
        "View the real preview",

      items: [
        {
          icon:
            "✦",
          title:
            "Understand yourself better",
          text:
            "Put words to the main aspects of your personality and the contradictions you may sometimes experience.",
        },
        {
          icon:
            "☾",
          title:
            "Understand your emotions",
          text:
            "Identify what you need to feel safe, understood and emotionally balanced.",
        },
        {
          icon:
            "☉",
          title:
            "Recognize your strengths",
          text:
            "Discover the natural qualities you can rely on in your personal and professional life.",
        },
        {
          icon:
            "△",
          title:
            "Observe your balance",
          text:
            "Understand which energies dominate your chart and which ones may require more attention.",
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
            "Enter your first name, birth date, birth time and birth place in the form.",
        },
        {
          number:
            "02",
          title:
            "Your chart is calculated",
          description:
            "Your planetary positions, Ascendant, elements and modalities are calculated automatically.",
        },
        {
          number:
            "03",
          title:
            "Download your report",
          description:
            "After payment, your personalized PDF report is generated and made available for download.",
        },
      ],

      button:
        "Start now",
    },

    order: {
      label:
        "Your personalized report",
      title:
        "Create your Essential Birth Chart Report",
      description:
        "Enter your birth information so your birth chart can be calculated and your personalized astrology report prepared.",

      summaryLabel:
        "Your order",
      reportName:
        "Essential Report",
      uniquePayment:
        "One-time payment",

      items: [
        "Personalized PDF report",
        "17 pages of analysis",
        "Sun, Moon and Ascendant",
        "Main planets",
        "Elements and modalities",
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
            "What is the difference from the free birth chart?",
          answer:
            "The free birth chart mainly presents your astrological wheel and placements. The Essential Report adds a personalized interpretation of your Sun, Moon, Ascendant, planets, elements and modalities.",
        },
        {
          question:
            "What information do I need to provide?",
          answer:
            "You must provide your first name, birth date, birth time, birth city and birth country.",
        },
        {
          question:
            "What happens if I do not know my birth time?",
          answer:
            "An accurate birth time is recommended because it allows your Ascendant to be calculated correctly. Without a reliable time, some parts of the report may be inaccurate.",
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
            "No. It is a one-time payment of US$24.99. No subscription is associated with your order.",
        },
      ],
    },

    comparison: {
      label:
        "Need a more complete analysis?",
      title:
        "Compare the three Birth Chart Reports",
      description:
        "Discover the differences between the Essential, Premium and Signature Reports to choose the level of analysis that best suits you.",
      compareButton:
        "Compare the three reports",
      chooseButton:
        "Choose Essential",
    },

    disclaimer:
      "Astrology is offered as a symbolic tool for personal exploration. It does not replace medical, psychological, legal or financial advice.",
  },
    es: {
    metadata: {
      title:
        "Informe Esencial de Carta Natal | Informe astrológico personalizado",
      description:
        "Descubre tu Sol, tu Luna, tu Ascendente, tus planetas, tus elementos y tus modalidades en un informe astrológico personalizado de 17 páginas.",
      ogTitle:
        "Informe Esencial de Carta Natal | Luna Astralis",
      ogDescription:
        "Una lectura clara y personalizada de las principales energías de tu carta natal.",
      twitterTitle:
        "Informe Esencial de Carta Natal | Luna Astralis",
      twitterDescription:
        "Descubre las bases de tu carta natal en un informe PDF personalizado de 17 páginas.",
      locale:
        "es_ES",
      language:
        "es-ES",
      imageAlt:
        "Portada del Informe Esencial de Carta Natal",
    },

    jsonLd: {
      name:
        "Informe Esencial de Carta Natal",
      description:
        "Informe astrológico personalizado de 17 páginas que presenta el Sol, la Luna, el Ascendente, los planetas, los elementos y las modalidades de la carta natal.",
    },

    reportPrice:
      "24,99 US$",

    reportPages:
      "17 páginas",

    hero: {
      badge:
        "✨ Informe astrológico personalizado",
      eyebrow:
        "Tu carta natal • Tus energías esenciales",
      titleBefore:
        "Descubre las bases de tu",
      titleHighlight:
        "carta natal",
      description:
        "Explora tu Sol, tu Luna, tu Ascendente y las principales influencias de tu carta natal en un informe claro, elegante y completamente personalizado.",
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
        "Informe Esencial",
      uniquePayment:
        "Pago único",
      coverAlt:
        "Portada del Informe Esencial de Carta Natal",
      createdForYou:
        "Creado para ti",
    },

    introduction: {
      label:
        "Más allá de tu signo",
      title:
        "Eres mucho más que tu signo solar",
      description:
        "Tu signo astrológico representa una parte importante de tu personalidad, pero no cuenta toda tu historia. Tu Luna, tu Ascendente, tus planetas y el equilibrio de tus energías permiten obtener una lectura mucho más rica y matizada de tu naturaleza.",

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
        "El Informe Esencial reúne tus principales posiciones para ofrecerte una lectura más precisa y personal.",
      startAnalysisLink:
        "Comenzar mi análisis",
    },

    showcase: {
      middlePageText:
        "Tu carta natal",
      label:
        "Tu informe personalizado",
      title:
        "Una lectura accesible de las principales energías de tu carta",
      description:
        "El Informe Esencial te ofrece un primer retrato astrológico estructurado, personalizado y fácil de comprender. Te permite descubrir las grandes bases de tu personalidad sin perderte en conceptos demasiado complejos.",

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
        "Vista previa de la portada del Informe Esencial",
    },

    contents: {
      label:
        "En tu informe",
      title:
        "Las bases de tu personalidad astrológica",
      description:
        "Cada parte del informe te ayuda a comprender mejor una dimensión específica de tu funcionamiento interior.",

      features: [
        {
          icon:
            "☉",
          title:
            "Tu Sol",
          description:
            "Descubre tu identidad profunda, tu voluntad, tu vitalidad y la manera en que buscas brillar naturalmente.",
        },
        {
          icon:
            "☾",
          title:
            "Tu Luna",
          description:
            "Comprende tus emociones, tus necesidades afectivas, tus reacciones instintivas y lo que te proporciona seguridad.",
        },
        {
          icon:
            "↑",
          title:
            "Tu Ascendente",
          description:
            "Explora tu manera de abordar la vida, tu temperamento visible y la impresión espontánea que causas en los demás.",
        },
        {
          icon:
            "☿",
          title:
            "Tus planetas",
          description:
            "Descubre las principales influencias planetarias que moldean tus pensamientos, sentimientos, deseos y acciones.",
        },
        {
          icon:
            "△",
          title:
            "Tus elementos",
          description:
            "Analiza el equilibrio entre Fuego, Tierra, Aire y Agua para comprender mejor tu energía dominante.",
        },
        {
          icon:
            "◇",
          title:
            "Tus modalidades",
          description:
            "Comprende cómo comienzas, continúas y adaptas tus acciones mediante las modalidades Cardinal, Fija y Mutable.",
        },
      ],

      button:
        "Obtener mi Informe Esencial",
    },

    benefits: {
      label:
        "Una primera exploración de ti",
      title:
        "Comprende lo que te motiva naturalmente",
      description:
        "La astrología no te encierra en una definición. Te ofrece un lenguaje simbólico para observar tus tendencias, tus necesidades y tus fortalezas con mayor perspectiva.",
      previewLink:
        "Consultar la vista previa real",

      items: [
        {
          icon:
            "✦",
          title:
            "Comprenderte mejor",
          text:
            "Pon palabras a las principales facetas de tu personalidad y a las contradicciones que a veces puedes sentir.",
        },
        {
          icon:
            "☾",
          title:
            "Comprender tus emociones",
          text:
            "Identifica lo que necesitas para sentirte seguro, comprendido y emocionalmente equilibrado.",
        },
        {
          icon:
            "☉",
          title:
            "Reconocer tus fortalezas",
          text:
            "Descubre las cualidades naturales en las que puedes apoyarte en tu vida personal y profesional.",
        },
        {
          icon:
            "△",
          title:
            "Observar tu equilibrio",
          text:
            "Comprende qué energías dominan tu carta y cuáles requieren más atención.",
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
            "Introduce tu nombre, fecha, hora y lugar de nacimiento en el formulario.",
        },
        {
          number:
            "02",
          title:
            "Tu carta es calculada",
          description:
            "Las posiciones de tus planetas, tu Ascendente, tus elementos y tus modalidades se calculan automáticamente.",
        },
        {
          number:
            "03",
          title:
            "Descarga tu informe",
          description:
            "Después del pago, tu informe PDF personalizado se genera y queda disponible para descargar.",
        },
      ],

      button:
        "Comenzar ahora",
    },

    order: {
      label:
        "Tu informe personalizado",
      title:
        "Crea tu Informe Esencial de Carta Natal",
      description:
        "Introduce tus datos de nacimiento para calcular tu carta natal y preparar tu informe astrológico personalizado.",

      summaryLabel:
        "Tu pedido",
      reportName:
        "Informe Esencial",
      uniquePayment:
        "Pago único",

      items: [
        "Informe PDF personalizado",
        "17 páginas de análisis",
        "Sol, Luna y Ascendente",
        "Planetas principales",
        "Elementos y modalidades",
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
            "¿Cuál es la diferencia con la carta natal gratuita?",
          answer:
            "La carta natal gratuita presenta principalmente tu rueda astrológica y tus posiciones. El Informe Esencial añade una interpretación personalizada de tu Sol, tu Luna, tu Ascendente, tus planetas, tus elementos y tus modalidades.",
        },
        {
          question:
            "¿Qué información debo proporcionar?",
          answer:
            "Debes proporcionar tu nombre, fecha de nacimiento, hora de nacimiento, ciudad y país de nacimiento.",
        },
        {
          question:
            "¿Qué ocurre si no conozco mi hora de nacimiento?",
          answer:
            "Se recomienda una hora precisa porque permite calcular correctamente tu Ascendente. Sin una hora fiable, algunas partes del informe pueden ser inexactas.",
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
            "No. Se trata de un pago único de 24,99 US$. No hay ninguna suscripción asociada a tu pedido.",
        },
      ],
    },

    comparison: {
      label:
        "¿Necesitas un análisis más completo?",
      title:
        "Compara los tres Informes de Carta Natal",
      description:
        "Descubre las diferencias entre los informes Esencial, Premium y Signature para elegir el nivel de análisis que más te conviene.",
      compareButton:
        "Comparar los tres informes",
      chooseButton:
        "Elegir Esencial",
    },

    disclaimer:
      "La astrología se propone como una herramienta simbólica de exploración personal. No sustituye el asesoramiento médico, psicológico, legal o financiero.",
  },

  de: {
    metadata: {
      title:
        "Essentieller Geburtshoroskop-Bericht | Persönliche astrologische Analyse",
      description:
        "Entdecken Sie Sonne, Mond, Aszendent, Planeten, Elemente und Modalitäten in einem persönlichen astrologischen Bericht mit 17 Seiten.",
      ogTitle:
        "Essentieller Geburtshoroskop-Bericht | Luna Astralis",
      ogDescription:
        "Eine klare und persönliche Deutung der wichtigsten Energien Ihres Geburtshoroskops.",
      twitterTitle:
        "Essentieller Geburtshoroskop-Bericht | Luna Astralis",
      twitterDescription:
        "Entdecken Sie die Grundlagen Ihres Geburtshoroskops in einem persönlichen PDF-Bericht mit 17 Seiten.",
      locale:
        "de_DE",
      language:
        "de-DE",
      imageAlt:
        "Titelbild des Essentiellen Geburtshoroskop-Berichts",
    },

    jsonLd: {
      name:
        "Essentieller Geburtshoroskop-Bericht",
      description:
        "Persönlicher astrologischer Bericht mit 17 Seiten über Sonne, Mond, Aszendent, Planeten, Elemente und Modalitäten des Geburtshoroskops.",
    },

    reportPrice:
      "24,99 US$",

    reportPages:
      "17 Seiten",

    hero: {
      badge:
        "✨ Persönlicher astrologischer Bericht",
      eyebrow:
        "Ihr Geburtshoroskop • Ihre wesentlichen Energien",
      titleBefore:
        "Entdecken Sie die Grundlagen Ihres",
      titleHighlight:
        "Geburtshoroskops",
      description:
        "Entdecken Sie Sonne, Mond, Aszendent und die wichtigsten Einflüsse Ihres Geburtshoroskops in einem klaren, eleganten und vollständig persönlichen Bericht.",
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
        "Essentieller Bericht",
      uniquePayment:
        "Einmalige Zahlung",
      coverAlt:
        "Titelbild des Essentiellen Geburtshoroskop-Berichts",
      createdForYou:
        "Für Sie erstellt",
    },

    introduction: {
      label:
        "Mehr als nur Ihr Sternzeichen",
      title:
        "Sie sind viel mehr als Ihr Sonnenzeichen",
      description:
        "Ihr Sternzeichen beschreibt einen wichtigen Teil Ihrer Persönlichkeit, erzählt jedoch nicht Ihre ganze Geschichte. Mond, Aszendent, Planeten und das Gleichgewicht Ihrer Energien ermöglichen eine wesentlich reichere und differenziertere Deutung Ihrer Natur.",

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
        "Der Essentielle Bericht verbindet Ihre wichtigsten Positionen zu einer präziseren und persönlicheren Deutung.",
      startAnalysisLink:
        "Meine Analyse beginnen",
    },

    showcase: {
      middlePageText:
        "Ihr Geburtshoroskop",
      label:
        "Ihr persönlicher Bericht",
      title:
        "Eine verständliche Deutung der wichtigsten Energien Ihres Horoskops",
      description:
        "Der Essentielle Bericht bietet Ihnen ein strukturiertes, persönliches und leicht verständliches erstes astrologisches Porträt. Sie entdecken die wichtigsten Grundlagen Ihrer Persönlichkeit, ohne sich in zu komplexen Begriffen zu verlieren.",

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
        "Vorschau des Titelbilds des Essentiellen Berichts",
    },

    contents: {
      label:
        "In Ihrem Bericht",
      title:
        "Die Grundlagen Ihrer astrologischen Persönlichkeit",
      description:
        "Jeder Abschnitt hilft Ihnen, eine bestimmte Dimension Ihres inneren Funktionierens besser zu verstehen.",

      features: [
        {
          icon:
            "☉",
          title:
            "Ihre Sonne",
          description:
            "Entdecken Sie Ihre zentrale Identität, Ihren Willen, Ihre Vitalität und Ihre natürliche Art zu strahlen.",
        },
        {
          icon:
            "☾",
          title:
            "Ihr Mond",
          description:
            "Verstehen Sie Ihre Gefühle, emotionalen Bedürfnisse, instinktiven Reaktionen und das, was Ihnen Sicherheit gibt.",
        },
        {
          icon:
            "↑",
          title:
            "Ihr Aszendent",
          description:
            "Entdecken Sie Ihre Art, dem Leben zu begegnen, Ihr sichtbares Temperament und den spontanen Eindruck, den Sie vermitteln.",
        },
        {
          icon:
            "☿",
          title:
            "Ihre Planeten",
          description:
            "Entdecken Sie die wichtigsten planetarischen Einflüsse auf Ihr Denken, Fühlen, Wünschen und Handeln.",
        },
        {
          icon:
            "△",
          title:
            "Ihre Elemente",
          description:
            "Analysieren Sie das Gleichgewicht zwischen Feuer, Erde, Luft und Wasser, um Ihre dominante Energie besser zu verstehen.",
        },
        {
          icon:
            "◇",
          title:
            "Ihre Modalitäten",
          description:
            "Verstehen Sie anhand der kardinalen, fixen und veränderlichen Modalitäten, wie Sie handeln, fortfahren und sich anpassen.",
        },
      ],

      button:
        "Meinen Essentiellen Bericht erhalten",
    },

    benefits: {
      label:
        "Eine erste Erkundung Ihrer selbst",
      title:
        "Verstehen Sie, was Sie natürlich antreibt",
      description:
        "Astrologie legt Sie nicht auf eine Definition fest. Sie bietet eine symbolische Sprache, mit der Sie Ihre Tendenzen, Bedürfnisse und Stärken aus größerer Distanz betrachten können.",
      previewLink:
        "Die echte Vorschau ansehen",

      items: [
        {
          icon:
            "✦",
          title:
            "Sich selbst besser verstehen",
          text:
            "Finden Sie Worte für die wichtigsten Facetten Ihrer Persönlichkeit und für Widersprüche, die Sie manchmal empfinden.",
        },
        {
          icon:
            "☾",
          title:
            "Ihre Gefühle verstehen",
          text:
            "Erkennen Sie, was Sie brauchen, um sich sicher, verstanden und emotional ausgeglichen zu fühlen.",
        },
        {
          icon:
            "☉",
          title:
            "Ihre Stärken erkennen",
          text:
            "Entdecken Sie die natürlichen Qualitäten, auf die Sie sich im privaten und beruflichen Leben stützen können.",
        },
        {
          icon:
            "△",
          title:
            "Ihr Gleichgewicht beobachten",
          text:
            "Verstehen Sie, welche Energien Ihr Horoskop dominieren und welche mehr Aufmerksamkeit benötigen.",
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
            "Geben Sie Ihren Vornamen, Ihr Geburtsdatum, Ihre Geburtszeit und Ihren Geburtsort in das Formular ein.",
        },
        {
          number:
            "02",
          title:
            "Ihr Horoskop wird berechnet",
          description:
            "Ihre Planetenpositionen, Ihr Aszendent, Ihre Elemente und Modalitäten werden automatisch berechnet.",
        },
        {
          number:
            "03",
          title:
            "Laden Sie Ihren Bericht herunter",
          description:
            "Nach der Zahlung wird Ihr persönlicher PDF-Bericht erstellt und zum Download bereitgestellt.",
        },
      ],

      button:
        "Jetzt beginnen",
    },

    order: {
      label:
        "Ihr persönlicher Bericht",
      title:
        "Erstellen Sie Ihren Essentiellen Geburtshoroskop-Bericht",
      description:
        "Geben Sie Ihre Geburtsdaten ein, damit Ihr Geburtshoroskop berechnet und Ihr persönlicher astrologischer Bericht erstellt werden kann.",

      summaryLabel:
        "Ihre Bestellung",
      reportName:
        "Essentieller Bericht",
      uniquePayment:
        "Einmalige Zahlung",

      items: [
        "Persönlicher PDF-Bericht",
        "17 Seiten Analyse",
        "Sonne, Mond und Aszendent",
        "Wichtigste Planeten",
        "Elemente und Modalitäten",
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
            "Was ist der Unterschied zum kostenlosen Geburtshoroskop?",
          answer:
            "Das kostenlose Geburtshoroskop zeigt hauptsächlich Ihre astrologische Radix und Ihre Positionen. Der Essentielle Bericht ergänzt eine persönliche Deutung von Sonne, Mond, Aszendent, Planeten, Elementen und Modalitäten.",
        },
        {
          question:
            "Welche Informationen muss ich angeben?",
          answer:
            "Sie müssen Ihren Vornamen, Ihr Geburtsdatum, Ihre Geburtszeit sowie Geburtsstadt und Geburtsland angeben.",
        },
        {
          question:
            "Was passiert, wenn ich meine Geburtszeit nicht kenne?",
          answer:
            "Eine genaue Geburtszeit wird empfohlen, da sie für die korrekte Berechnung des Aszendenten benötigt wird. Ohne verlässliche Zeit können Teile des Berichts ungenau sein.",
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
            "Nein. Es handelt sich um eine einmalige Zahlung von 24,99 US$. Mit Ihrer Bestellung ist kein Abonnement verbunden.",
        },
      ],
    },

    comparison: {
      label:
        "Benötigen Sie eine ausführlichere Analyse?",
      title:
        "Vergleichen Sie die drei Geburtshoroskop-Berichte",
      description:
        "Entdecken Sie die Unterschiede zwischen Essentiellem, Premium- und Signature-Bericht und wählen Sie die passende Analysetiefe.",
      compareButton:
        "Die drei Berichte vergleichen",
      chooseButton:
        "Essentiell wählen",
    },

    disclaimer:
      "Astrologie wird als symbolisches Werkzeug zur persönlichen Erkundung angeboten. Sie ersetzt keine medizinische, psychologische, rechtliche oder finanzielle Beratung.",
  },

  it: {
    metadata: {
      title:
        "Rapporto Essenziale del Tema Natale | Analisi astrologica personalizzata",
      description:
        "Scopri Sole, Luna, Ascendente, pianeti, elementi e modalità in un rapporto astrologico personalizzato di 17 pagine.",
      ogTitle:
        "Rapporto Essenziale del Tema Natale | Luna Astralis",
      ogDescription:
        "Una lettura chiara e personalizzata delle principali energie del tuo tema natale.",
      twitterTitle:
        "Rapporto Essenziale del Tema Natale | Luna Astralis",
      twitterDescription:
        "Scopri le fondamenta del tuo tema natale in un rapporto PDF personalizzato di 17 pagine.",
      locale:
        "it_IT",
      language:
        "it-IT",
      imageAlt:
        "Copertina del Rapporto Essenziale del Tema Natale",
    },

    jsonLd: {
      name:
        "Rapporto Essenziale del Tema Natale",
      description:
        "Rapporto astrologico personalizzato di 17 pagine dedicato a Sole, Luna, Ascendente, pianeti, elementi e modalità del tema natale.",
    },

    reportPrice:
      "24,99 USD",

    reportPages:
      "17 pagine",

    hero: {
      badge:
        "✨ Rapporto astrologico personalizzato",
      eyebrow:
        "Il tuo tema natale • Le tue energie essenziali",
      titleBefore:
        "Scopri le fondamenta del tuo",
      titleHighlight:
        "tema natale",
      description:
        "Esplora il tuo Sole, la tua Luna, il tuo Ascendente e le principali influenze del tuo tema natale in un rapporto chiaro, elegante e completamente personalizzato.",
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
        "Rapporto Essenziale",
      uniquePayment:
        "Pagamento unico",
      coverAlt:
        "Copertina del Rapporto Essenziale del Tema Natale",
      createdForYou:
        "Creato per te",
    },

    introduction: {
      label:
        "Oltre il tuo segno",
      title:
        "Sei molto più del tuo segno solare",
      description:
        "Il tuo segno astrologico rappresenta una parte importante della tua personalità, ma non racconta tutta la tua storia. La Luna, l’Ascendente, i pianeti e l’equilibrio delle energie offrono una lettura molto più ricca e sfumata della tua natura.",

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
        "Il Rapporto Essenziale riunisce le tue principali posizioni per offrirti una lettura più precisa e personale.",
      startAnalysisLink:
        "Inizia la mia analisi",
    },

    showcase: {
      middlePageText:
        "Il tuo tema natale",
      label:
        "Il tuo rapporto personalizzato",
      title:
        "Una lettura accessibile delle principali energie del tuo tema",
      description:
        "Il Rapporto Essenziale ti offre un primo ritratto astrologico strutturato, personalizzato e facile da comprendere. Ti permette di scoprire le grandi fondamenta della tua personalità senza perderti in concetti troppo complessi.",

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
        "Anteprima della copertina del Rapporto Essenziale",
    },

    contents: {
      label:
        "Nel tuo rapporto",
      title:
        "Le fondamenta della tua personalità astrologica",
      description:
        "Ogni parte del rapporto ti aiuta a comprendere meglio una dimensione precisa del tuo funzionamento interiore.",

      features: [
        {
          icon:
            "☉",
          title:
            "Il tuo Sole",
          description:
            "Scopri la tua identità profonda, la tua volontà, la tua vitalità e il modo in cui cerchi naturalmente di risplendere.",
        },
        {
          icon:
            "☾",
          title:
            "La tua Luna",
          description:
            "Comprendi le tue emozioni, i tuoi bisogni affettivi, le tue reazioni istintive e ciò che ti dona sicurezza.",
        },
        {
          icon:
            "↑",
          title:
            "Il tuo Ascendente",
          description:
            "Esplora il tuo modo di affrontare la vita, il tuo temperamento visibile e l’impressione spontanea che dai agli altri.",
        },
        {
          icon:
            "☿",
          title:
            "I tuoi pianeti",
          description:
            "Scopri le principali influenze planetarie che modellano pensieri, sentimenti, desideri e azioni.",
        },
        {
          icon:
            "△",
          title:
            "I tuoi elementi",
          description:
            "Analizza l’equilibrio tra Fuoco, Terra, Aria e Acqua per comprendere meglio la tua energia dominante.",
        },
        {
          icon:
            "◇",
          title:
            "Le tue modalità",
          description:
            "Comprendi come inizi, prosegui e adatti le tue azioni attraverso le modalità Cardinale, Fissa e Mobile.",
        },
      ],

      button:
        "Ottieni il mio Rapporto Essenziale",
    },

    benefits: {
      label:
        "Una prima esplorazione di te",
      title:
        "Comprendi ciò che ti motiva naturalmente",
      description:
        "L’astrologia non ti rinchiude in una definizione. Offre un linguaggio simbolico per osservare tendenze, bisogni e punti di forza con maggiore prospettiva.",
      previewLink:
        "Consulta l’anteprima reale",

      items: [
        {
          icon:
            "✦",
          title:
            "Comprenderti meglio",
          text:
            "Dai un nome alle principali sfaccettature della tua personalità e alle contraddizioni che a volte puoi sentire.",
        },
        {
          icon:
            "☾",
          title:
            "Comprendere le tue emozioni",
          text:
            "Identifica ciò di cui hai bisogno per sentirti al sicuro, compreso ed emotivamente equilibrato.",
        },
        {
          icon:
            "☉",
          title:
            "Riconoscere i tuoi punti di forza",
          text:
            "Scopri le qualità naturali su cui puoi fare affidamento nella vita personale e professionale.",
        },
        {
          icon:
            "△",
          title:
            "Osservare il tuo equilibrio",
          text:
            "Comprendi quali energie dominano il tuo tema e quali richiedono maggiore attenzione.",
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
            "Inserisci nome, data, ora e luogo di nascita nel modulo.",
        },
        {
          number:
            "02",
          title:
            "Il tuo tema viene calcolato",
          description:
            "Le posizioni dei pianeti, l’Ascendente, gli elementi e le modalità vengono calcolati automaticamente.",
        },
        {
          number:
            "03",
          title:
            "Scarica il tuo rapporto",
          description:
            "Dopo il pagamento, il tuo rapporto PDF personalizzato viene generato e reso disponibile per il download.",
        },
      ],

      button:
        "Inizia ora",
    },

    order: {
      label:
        "Il tuo rapporto personalizzato",
      title:
        "Crea il tuo Rapporto Essenziale del Tema Natale",
      description:
        "Inserisci i tuoi dati di nascita per calcolare il tema natale e preparare il tuo rapporto astrologico personalizzato.",

      summaryLabel:
        "Il tuo ordine",
      reportName:
        "Rapporto Essenziale",
      uniquePayment:
        "Pagamento unico",

      items: [
        "Rapporto PDF personalizzato",
        "17 pagine di analisi",
        "Sole, Luna e Ascendente",
        "Pianeti principali",
        "Elementi e modalità",
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
            "Qual è la differenza rispetto al tema natale gratuito?",
          answer:
            "Il tema natale gratuito presenta principalmente la ruota astrologica e le posizioni. Il Rapporto Essenziale aggiunge un’interpretazione personalizzata di Sole, Luna, Ascendente, pianeti, elementi e modalità.",
        },
        {
          question:
            "Quali informazioni devo fornire?",
          answer:
            "Devi fornire nome, data di nascita, ora di nascita, città e paese di nascita.",
        },
        {
          question:
            "Cosa succede se non conosco l’ora di nascita?",
          answer:
            "Si consiglia un’ora precisa perché permette di calcolare correttamente l’Ascendente. Senza un’ora affidabile, alcune parti del rapporto potrebbero essere inesatte.",
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
            "No. Si tratta di un pagamento unico di 24,99 USD. Nessun abbonamento è associato all’ordine.",
        },
      ],
    },

    comparison: {
      label:
        "Hai bisogno di un’analisi più completa?",
      title:
        "Confronta i tre Rapporti del Tema Natale",
      description:
        "Scopri le differenze tra i rapporti Essenziale, Premium e Signature per scegliere il livello di analisi più adatto a te.",
      compareButton:
        "Confronta i tre rapporti",
      chooseButton:
        "Scegli Essenziale",
    },

    disclaimer:
      "L’astrologia viene proposta come strumento simbolico di esplorazione personale. Non sostituisce un parere medico, psicologico, legale o finanziario.",
  },

  pt: {
    metadata: {
      title:
        "Relatório Essencial do Mapa Astral | Análise astrológica personalizada",
      description:
        "Descubra seu Sol, sua Lua, seu Ascendente, seus planetas, elementos e modalidades em um relatório astrológico personalizado de 17 páginas.",
      ogTitle:
        "Relatório Essencial do Mapa Astral | Luna Astralis",
      ogDescription:
        "Uma leitura clara e personalizada das principais energias do seu mapa astral.",
      twitterTitle:
        "Relatório Essencial do Mapa Astral | Luna Astralis",
      twitterDescription:
        "Descubra as bases do seu mapa astral em um relatório PDF personalizado de 17 páginas.",
      locale:
        "pt_PT",
      language:
        "pt-PT",
      imageAlt:
        "Capa do Relatório Essencial do Mapa Astral",
    },

    jsonLd: {
      name:
        "Relatório Essencial do Mapa Astral",
      description:
        "Relatório astrológico personalizado de 17 páginas com o Sol, a Lua, o Ascendente, os planetas, os elementos e as modalidades do mapa natal.",
    },

    reportPrice:
      "24,99 US$",

    reportPages:
      "17 páginas",

    hero: {
      badge:
        "✨ Relatório astrológico personalizado",
      eyebrow:
        "Seu mapa natal • Suas energias essenciais",
      titleBefore:
        "Descubra as bases do seu",
      titleHighlight:
        "mapa astral",
      description:
        "Explore seu Sol, sua Lua, seu Ascendente e as principais influências do seu mapa astral em um relatório claro, elegante e totalmente personalizado.",
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
        "Relatório Essencial",
      uniquePayment:
        "Pagamento único",
      coverAlt:
        "Capa do Relatório Essencial do Mapa Astral",
      createdForYou:
        "Criado para você",
    },

    introduction: {
      label:
        "Além do seu signo",
      title:
        "Você é muito mais do que seu signo solar",
      description:
        "Seu signo astrológico representa uma parte importante da sua personalidade, mas não conta toda a sua história. Sua Lua, seu Ascendente, seus planetas e o equilíbrio das suas energias permitem uma leitura muito mais rica e detalhada da sua natureza.",

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
        "O Relatório Essencial reúne suas principais posições para oferecer uma leitura mais precisa e pessoal.",
      startAnalysisLink:
        "Começar minha análise",
    },

    showcase: {
      middlePageText:
        "Seu mapa astral",
      label:
        "Seu relatório personalizado",
      title:
        "Uma leitura acessível das principais energias do seu mapa",
      description:
        "O Relatório Essencial oferece um primeiro retrato astrológico estruturado, personalizado e fácil de compreender. Ele permite descobrir as grandes bases da sua personalidade sem se perder em conceitos muito complexos.",

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
        "Prévia da capa do Relatório Essencial",
    },

    contents: {
      label:
        "No seu relatório",
      title:
        "As bases da sua personalidade astrológica",
      description:
        "Cada parte do relatório ajuda você a compreender melhor uma dimensão específica do seu funcionamento interior.",

      features: [
        {
          icon:
            "☉",
          title:
            "Seu Sol",
          description:
            "Descubra sua identidade profunda, sua vontade, sua vitalidade e a maneira como você naturalmente busca brilhar.",
        },
        {
          icon:
            "☾",
          title:
            "Sua Lua",
          description:
            "Compreenda suas emoções, suas necessidades afetivas, suas reações instintivas e o que proporciona segurança.",
        },
        {
          icon:
            "↑",
          title:
            "Seu Ascendente",
          description:
            "Explore sua maneira de abordar a vida, seu temperamento visível e a impressão espontânea que transmite aos outros.",
        },
        {
          icon:
            "☿",
          title:
            "Seus planetas",
          description:
            "Descubra as principais influências planetárias que moldam seus pensamentos, sentimentos, desejos e ações.",
        },
        {
          icon:
            "△",
          title:
            "Seus elementos",
          description:
            "Analise o equilíbrio entre Fogo, Terra, Ar e Água para compreender melhor sua energia dominante.",
        },
        {
          icon:
            "◇",
          title:
            "Suas modalidades",
          description:
            "Compreenda como você inicia, continua e adapta suas ações por meio das modalidades Cardinal, Fixa e Mutável.",
        },
      ],

      button:
        "Obter meu Relatório Essencial",
    },

    benefits: {
      label:
        "Uma primeira exploração de si",
      title:
        "Compreenda o que motiva você naturalmente",
      description:
        "A astrologia não prende você a uma definição. Ela oferece uma linguagem simbólica para observar suas tendências, necessidades e forças com maior perspectiva.",
      previewLink:
        "Consultar a prévia real",

      items: [
        {
          icon:
            "✦",
          title:
            "Compreender-se melhor",
          text:
            "Coloque em palavras as principais facetas da sua personalidade e as contradições que você às vezes sente.",
        },
        {
          icon:
            "☾",
          title:
            "Compreender suas emoções",
          text:
            "Identifique o que você precisa para se sentir seguro, compreendido e emocionalmente equilibrado.",
        },
        {
          icon:
            "☉",
          title:
            "Reconhecer suas forças",
          text:
            "Descubra as qualidades naturais nas quais você pode se apoiar na vida pessoal e profissional.",
        },
        {
          icon:
            "△",
          title:
            "Observar seu equilíbrio",
          text:
            "Compreenda quais energias dominam seu mapa e quais precisam de mais atenção.",
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
            "Digite seu nome, data, hora e local de nascimento no formulário.",
        },
        {
          number:
            "02",
          title:
            "Seu mapa é calculado",
          description:
            "As posições dos seus planetas, seu Ascendente, seus elementos e modalidades são calculados automaticamente.",
        },
        {
          number:
            "03",
          title:
            "Baixe seu relatório",
          description:
            "Após o pagamento, seu relatório PDF personalizado é gerado e disponibilizado para download.",
        },
      ],

      button:
        "Começar agora",
    },

    order: {
      label:
        "Seu relatório personalizado",
      title:
        "Crie seu Relatório Essencial do Mapa Astral",
      description:
        "Informe seus dados de nascimento para calcular seu mapa natal e preparar seu relatório astrológico personalizado.",

      summaryLabel:
        "Seu pedido",
      reportName:
        "Relatório Essencial",
      uniquePayment:
        "Pagamento único",

      items: [
        "Relatório PDF personalizado",
        "17 páginas de análise",
        "Sol, Lua e Ascendente",
        "Planetas principais",
        "Elementos e modalidades",
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
            "Qual é a diferença em relação ao mapa astral gratuito?",
          answer:
            "O mapa astral gratuito apresenta principalmente a roda astrológica e suas posições. O Relatório Essencial acrescenta uma interpretação personalizada do seu Sol, da sua Lua, do seu Ascendente, dos seus planetas, elementos e modalidades.",
        },
        {
          question:
            "Quais informações preciso fornecer?",
          answer:
            "Você deve fornecer seu nome, data de nascimento, hora de nascimento, cidade e país de nascimento.",
        },
        {
          question:
            "O que acontece se eu não souber minha hora de nascimento?",
          answer:
            "Uma hora precisa é recomendada porque permite calcular corretamente o Ascendente. Sem uma hora confiável, algumas partes do relatório podem ficar imprecisas.",
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
            "Não. Trata-se de um pagamento único de 24,99 US$. Nenhuma assinatura está associada ao pedido.",
        },
      ],
    },

    comparison: {
      label:
        "Precisa de uma análise mais completa?",
      title:
        "Compare os três Relatórios do Mapa Astral",
      description:
        "Descubra as diferenças entre os relatórios Essencial, Premium e Signature para escolher o nível de análise mais adequado.",
      compareButton:
        "Comparar os três relatórios",
      chooseButton:
        "Escolher Essencial",
    },

    disclaimer:
      "A astrologia é apresentada como uma ferramenta simbólica de exploração pessoal. Ela não substitui aconselhamento médico, psicológico, jurídico ou financeiro.",
  },
};
