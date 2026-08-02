import type { Locale } from "@/i18n/config";

export type HoroscopeDailyPageText = {
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
  reportPrice: string;
  reportPages: string;
  hero: {
    kicker: string;
    title: string;
    description: string;
    createButton: string;
    previewButton: string;
    previewLink: string;
    personalizedPages: string;
    uniquePayment: string;
    downloadAfterPayment: string;
    coverAlt: string;
    offerLabel: string;
    previewBeforeOrder: string;
  };
  benefits: string[];
  introduction: {
    kicker: string;
    title: string;
    description: string;
    previewButton: string;
  };
  order: {
    kicker: string;
    title: string;
    description: string;
  };
  navigation: {
    ariaLabel: string;
    allFormulas: string;
    freeHoroscope: string;
  };
};

export const HOROSCOPE_DAILY_TRANSLATIONS: Record<Locale, HoroscopeDailyPageText> = {
  "fr": {
    "metadata": {
      "title": "Horoscope Premium du jour personnalisé | Luna Astralis",
      "description": "Créez votre horoscope Premium du jour à partir de votre date, votre heure et votre lieu de naissance.",
      "ogTitle": "Horoscope Premium du jour personnalisé | Luna Astralis",
      "ogDescription": "Découvrez les influences astrologiques de votre journée grâce à un horoscope personnalisé selon vos informations de naissance.",
      "twitterTitle": "Horoscope Premium du jour personnalisé | Luna Astralis",
      "twitterDescription": "Recevez une lecture astrologique personnalisée des influences actives dans votre journée.",
      "locale": "fr_CA",
      "language": "fr-CA",
      "imageAlt": "Couverture du rapport Horoscope Premium du jour"
    },
    "reportPrice": "9,99 $ US",
    "reportPages": "17 pages",
    "hero": {
      "kicker": "🌙 Horoscope Premium du jour",
      "title": "Comprenez les influences de votre journée grâce à votre ciel personnel",
      "description": "Recevez une lecture astrologique personnalisée à partir de votre date, votre heure et votre lieu de naissance. Vos transits du jour sont analysés pour vous aider à mieux comprendre vos émotions, vos relations et vos décisions.",
      "createButton": "Créer mon horoscope",
      "previewButton": "Voir l’aperçu PDF",
      "previewLink": "📖 Consulter un véritable aperçu du rapport",
      "personalizedPages": "personnalisées",
      "uniquePayment": "Paiement unique",
      "downloadAfterPayment": "Téléchargement après paiement",
      "coverAlt": "Couverture du rapport Horoscope Premium du jour",
      "offerLabel": "Votre rapport du jour",
      "previewBeforeOrder": "Voir l’aperçu avant de commander"
    },
    "benefits": [
      "Analyse personnalisée selon votre thème natal",
      "Transits astrologiques de votre journée",
      "Amour, travail, énergie et décisions",
      "Rapport PDF détaillé de 17 pages"
    ],
    "introduction": {
      "kicker": "Une lecture créée pour vous",
      "title": "Bien plus qu’un horoscope général",
      "description": "Un horoscope classique se base uniquement sur votre signe solaire. Votre horoscope Premium tient également compte de votre heure et de votre lieu de naissance afin de proposer une lecture beaucoup plus personnelle et nuancée.",
      "previewButton": "Découvrir l’aperçu du rapport"
    },
    "order": {
      "kicker": "Votre horoscope personnalisé",
      "title": "Entrez vos informations de naissance",
      "description": "Ces renseignements permettent de calculer votre thème natal et les transits astrologiques actifs aujourd’hui."
    },
    "navigation": {
      "ariaLabel": "Navigation Horoscope Premium",
      "allFormulas": "← Toutes les formules",
      "freeHoroscope": "Horoscope gratuit →"
    }
  },
  "en": {
    "metadata": {
      "title": "Personalized Daily Premium Horoscope | Luna Astralis",
      "description": "Create your Daily Premium Horoscope using your birth date, time and place.",
      "ogTitle": "Personalized Daily Premium Horoscope | Luna Astralis",
      "ogDescription": "Discover the astrological influences of your day with a horoscope personalized from your birth information.",
      "twitterTitle": "Personalized Daily Premium Horoscope | Luna Astralis",
      "twitterDescription": "Receive a personalized astrological interpretation of the influences active in your day.",
      "locale": "en_US",
      "language": "en-US",
      "imageAlt": "Cover of the Daily Premium Horoscope report"
    },
    "reportPrice": "US$9.99",
    "reportPages": "17 pages",
    "hero": {
      "kicker": "🌙 Daily Premium Horoscope",
      "title": "Understand the influences of your day through your personal sky",
      "description": "Receive a personalized astrological reading based on your birth date, time and place. Today’s transits are analyzed to help you better understand your emotions, relationships and decisions.",
      "createButton": "Create my horoscope",
      "previewButton": "View PDF preview",
      "previewLink": "📖 View a real preview of the report",
      "personalizedPages": "personalized",
      "uniquePayment": "One-time payment",
      "downloadAfterPayment": "Download after payment",
      "coverAlt": "Cover of the Daily Premium Horoscope report",
      "offerLabel": "Your daily report",
      "previewBeforeOrder": "View the preview before ordering"
    },
    "benefits": [
      "Personalized analysis based on your birth chart",
      "Astrological transits for your day",
      "Love, work, energy and decisions",
      "Detailed 17-page PDF report"
    ],
    "introduction": {
      "kicker": "A reading created for you",
      "title": "Much more than a general horoscope",
      "description": "A standard horoscope is based only on your Sun sign. Your Premium Horoscope also considers your birth time and place to provide a much more personal and nuanced interpretation.",
      "previewButton": "Discover the report preview"
    },
    "order": {
      "kicker": "Your personalized horoscope",
      "title": "Enter your birth information",
      "description": "This information is used to calculate your birth chart and the astrological transits active today."
    },
    "navigation": {
      "ariaLabel": "Premium Horoscope navigation",
      "allFormulas": "← All options",
      "freeHoroscope": "Free horoscope →"
    }
  },
  "es": {
    "metadata": {
      "title": "Horóscopo Premium diario personalizado | Luna Astralis",
      "description": "Crea tu Horóscopo Premium diario a partir de tu fecha, hora y lugar de nacimiento.",
      "ogTitle": "Horóscopo Premium diario personalizado | Luna Astralis",
      "ogDescription": "Descubre las influencias astrológicas de tu día con un horóscopo personalizado según tus datos de nacimiento.",
      "twitterTitle": "Horóscopo Premium diario personalizado | Luna Astralis",
      "twitterDescription": "Recibe una lectura astrológica personalizada de las influencias activas durante tu día.",
      "locale": "es_ES",
      "language": "es-ES",
      "imageAlt": "Portada del informe Horóscopo Premium diario"
    },
    "reportPrice": "9,99 US$",
    "reportPages": "17 páginas",
    "hero": {
      "kicker": "🌙 Horóscopo Premium diario",
      "title": "Comprende las influencias de tu día gracias a tu cielo personal",
      "description": "Recibe una lectura astrológica personalizada a partir de tu fecha, hora y lugar de nacimiento. Se analizan los tránsitos del día para ayudarte a comprender mejor tus emociones, relaciones y decisiones.",
      "createButton": "Crear mi horóscopo",
      "previewButton": "Ver la vista previa PDF",
      "previewLink": "📖 Consultar una vista previa real del informe",
      "personalizedPages": "personalizadas",
      "uniquePayment": "Pago único",
      "downloadAfterPayment": "Descarga después del pago",
      "coverAlt": "Portada del informe Horóscopo Premium diario",
      "offerLabel": "Tu informe diario",
      "previewBeforeOrder": "Ver la vista previa antes de comprar"
    },
    "benefits": [
      "Análisis personalizado según tu carta natal",
      "Tránsitos astrológicos de tu día",
      "Amor, trabajo, energía y decisiones",
      "Informe PDF detallado de 17 páginas"
    ],
    "introduction": {
      "kicker": "Una lectura creada para ti",
      "title": "Mucho más que un horóscopo general",
      "description": "Un horóscopo clásico se basa únicamente en tu signo solar. Tu Horóscopo Premium también tiene en cuenta tu hora y lugar de nacimiento para ofrecer una lectura mucho más personal y matizada.",
      "previewButton": "Descubrir la vista previa del informe"
    },
    "order": {
      "kicker": "Tu horóscopo personalizado",
      "title": "Introduce tus datos de nacimiento",
      "description": "Estos datos permiten calcular tu carta natal y los tránsitos astrológicos activos hoy."
    },
    "navigation": {
      "ariaLabel": "Navegación del Horóscopo Premium",
      "allFormulas": "← Todas las opciones",
      "freeHoroscope": "Horóscopo gratuito →"
    }
  },
  "de": {
    "metadata": {
      "title": "Personalisiertes Premium-Tageshoroskop | Luna Astralis",
      "description": "Erstellen Sie Ihr Premium-Tageshoroskop anhand von Geburtsdatum, Geburtszeit und Geburtsort.",
      "ogTitle": "Personalisiertes Premium-Tageshoroskop | Luna Astralis",
      "ogDescription": "Entdecken Sie die astrologischen Einflüsse Ihres Tages mit einem persönlichen Horoskop auf Grundlage Ihrer Geburtsdaten.",
      "twitterTitle": "Personalisiertes Premium-Tageshoroskop | Luna Astralis",
      "twitterDescription": "Erhalten Sie eine persönliche astrologische Deutung der Einflüsse, die an Ihrem Tag aktiv sind.",
      "locale": "de_DE",
      "language": "de-DE",
      "imageAlt": "Titelbild des Premium-Tageshoroskop-Berichts"
    },
    "reportPrice": "9,99 US$",
    "reportPages": "17 Seiten",
    "hero": {
      "kicker": "🌙 Premium-Tageshoroskop",
      "title": "Verstehen Sie die Einflüsse Ihres Tages durch Ihren persönlichen Himmel",
      "description": "Erhalten Sie eine persönliche astrologische Deutung auf Grundlage von Geburtsdatum, Geburtszeit und Geburtsort. Die heutigen Transite werden analysiert, damit Sie Ihre Gefühle, Beziehungen und Entscheidungen besser verstehen.",
      "createButton": "Mein Horoskop erstellen",
      "previewButton": "PDF-Vorschau ansehen",
      "previewLink": "📖 Eine echte Vorschau des Berichts ansehen",
      "personalizedPages": "personalisiert",
      "uniquePayment": "Einmalige Zahlung",
      "downloadAfterPayment": "Download nach der Zahlung",
      "coverAlt": "Titelbild des Premium-Tageshoroskop-Berichts",
      "offerLabel": "Ihr Tagesbericht",
      "previewBeforeOrder": "Vorschau vor der Bestellung ansehen"
    },
    "benefits": [
      "Persönliche Analyse auf Grundlage Ihres Geburtshoroskops",
      "Astrologische Transite Ihres Tages",
      "Liebe, Arbeit, Energie und Entscheidungen",
      "Detaillierter PDF-Bericht mit 17 Seiten"
    ],
    "introduction": {
      "kicker": "Eine Deutung für Sie",
      "title": "Weit mehr als ein allgemeines Horoskop",
      "description": "Ein klassisches Horoskop basiert nur auf Ihrem Sonnenzeichen. Ihr Premium-Horoskop berücksichtigt auch Geburtszeit und Geburtsort und bietet dadurch eine wesentlich persönlichere und differenziertere Deutung.",
      "previewButton": "Berichtsvorschau entdecken"
    },
    "order": {
      "kicker": "Ihr persönliches Horoskop",
      "title": "Geben Sie Ihre Geburtsdaten ein",
      "description": "Diese Angaben ermöglichen die Berechnung Ihres Geburtshoroskops und der heute aktiven astrologischen Transite."
    },
    "navigation": {
      "ariaLabel": "Navigation Premium-Horoskop",
      "allFormulas": "← Alle Angebote",
      "freeHoroscope": "Kostenloses Horoskop →"
    }
  },
  "it": {
    "metadata": {
      "title": "Oroscopo Premium del giorno personalizzato | Luna Astralis",
      "description": "Crea il tuo Oroscopo Premium del giorno a partire da data, ora e luogo di nascita.",
      "ogTitle": "Oroscopo Premium del giorno personalizzato | Luna Astralis",
      "ogDescription": "Scopri le influenze astrologiche della tua giornata con un oroscopo personalizzato secondo i tuoi dati di nascita.",
      "twitterTitle": "Oroscopo Premium del giorno personalizzato | Luna Astralis",
      "twitterDescription": "Ricevi una lettura astrologica personalizzata delle influenze attive nella tua giornata.",
      "locale": "it_IT",
      "language": "it-IT",
      "imageAlt": "Copertina del rapporto Oroscopo Premium del giorno"
    },
    "reportPrice": "9,99 USD",
    "reportPages": "17 pagine",
    "hero": {
      "kicker": "🌙 Oroscopo Premium del giorno",
      "title": "Comprendi le influenze della tua giornata grazie al tuo cielo personale",
      "description": "Ricevi una lettura astrologica personalizzata basata su data, ora e luogo di nascita. I transiti del giorno vengono analizzati per aiutarti a comprendere meglio emozioni, relazioni e decisioni.",
      "createButton": "Crea il mio oroscopo",
      "previewButton": "Vedi l’anteprima PDF",
      "previewLink": "📖 Consulta una vera anteprima del rapporto",
      "personalizedPages": "personalizzate",
      "uniquePayment": "Pagamento unico",
      "downloadAfterPayment": "Download dopo il pagamento",
      "coverAlt": "Copertina del rapporto Oroscopo Premium del giorno",
      "offerLabel": "Il tuo rapporto del giorno",
      "previewBeforeOrder": "Vedi l’anteprima prima di ordinare"
    },
    "benefits": [
      "Analisi personalizzata secondo il tuo tema natale",
      "Transiti astrologici della tua giornata",
      "Amore, lavoro, energia e decisioni",
      "Rapporto PDF dettagliato di 17 pagine"
    ],
    "introduction": {
      "kicker": "Una lettura creata per te",
      "title": "Molto più di un oroscopo generale",
      "description": "Un oroscopo classico si basa soltanto sul segno solare. Il tuo Oroscopo Premium considera anche ora e luogo di nascita per offrire una lettura molto più personale e sfumata.",
      "previewButton": "Scopri l’anteprima del rapporto"
    },
    "order": {
      "kicker": "Il tuo oroscopo personalizzato",
      "title": "Inserisci i tuoi dati di nascita",
      "description": "Queste informazioni permettono di calcolare il tuo tema natale e i transiti astrologici attivi oggi."
    },
    "navigation": {
      "ariaLabel": "Navigazione Oroscopo Premium",
      "allFormulas": "← Tutte le formule",
      "freeHoroscope": "Oroscopo gratuito →"
    }
  },
  "pt": {
    "metadata": {
      "title": "Horóscopo Premium diário personalizado | Luna Astralis",
      "description": "Crie seu Horóscopo Premium diário a partir da data, hora e local de nascimento.",
      "ogTitle": "Horóscopo Premium diário personalizado | Luna Astralis",
      "ogDescription": "Descubra as influências astrológicas do seu dia com um horóscopo personalizado segundo seus dados de nascimento.",
      "twitterTitle": "Horóscopo Premium diário personalizado | Luna Astralis",
      "twitterDescription": "Receba uma leitura astrológica personalizada das influências ativas no seu dia.",
      "locale": "pt_PT",
      "language": "pt-PT",
      "imageAlt": "Capa do relatório Horóscopo Premium diário"
    },
    "reportPrice": "9,99 US$",
    "reportPages": "17 páginas",
    "hero": {
      "kicker": "🌙 Horóscopo Premium diário",
      "title": "Compreenda as influências do seu dia por meio do seu céu pessoal",
      "description": "Receba uma leitura astrológica personalizada com base na data, hora e local de nascimento. Os trânsitos do dia são analisados para ajudar você a compreender melhor suas emoções, relações e decisões.",
      "createButton": "Criar meu horóscopo",
      "previewButton": "Ver a prévia em PDF",
      "previewLink": "📖 Consultar uma prévia real do relatório",
      "personalizedPages": "personalizadas",
      "uniquePayment": "Pagamento único",
      "downloadAfterPayment": "Download após o pagamento",
      "coverAlt": "Capa do relatório Horóscopo Premium diário",
      "offerLabel": "Seu relatório diário",
      "previewBeforeOrder": "Ver a prévia antes de comprar"
    },
    "benefits": [
      "Análise personalizada segundo seu mapa natal",
      "Trânsitos astrológicos do seu dia",
      "Amor, trabalho, energia e decisões",
      "Relatório PDF detalhado de 17 páginas"
    ],
    "introduction": {
      "kicker": "Uma leitura criada para você",
      "title": "Muito mais do que um horóscopo geral",
      "description": "Um horóscopo clássico se baseia apenas no signo solar. Seu Horóscopo Premium também considera a hora e o local de nascimento para oferecer uma leitura muito mais pessoal e detalhada.",
      "previewButton": "Descobrir a prévia do relatório"
    },
    "order": {
      "kicker": "Seu horóscopo personalizado",
      "title": "Informe seus dados de nascimento",
      "description": "Essas informações permitem calcular seu mapa natal e os trânsitos astrológicos ativos hoje."
    },
    "navigation": {
      "ariaLabel": "Navegação do Horóscopo Premium",
      "allFormulas": "← Todas as opções",
      "freeHoroscope": "Horóscopo gratuito →"
    }
  }
};
