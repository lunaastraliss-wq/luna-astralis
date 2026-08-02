import type { Locale } from "@/i18n/config";

export type HoroscopeMonthlyPageText = {
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

export const HOROSCOPE_MONTHLY_TRANSLATIONS: Record<Locale, HoroscopeMonthlyPageText> = {
  "fr": {
    "metadata": {
      "title": "Horoscope Premium du mois personnalisé | Luna Astralis",
      "description": "Découvrez les grandes influences astrologiques de votre mois grâce à un horoscope personnalisé selon votre date, votre heure et votre lieu de naissance.",
      "ogTitle": "Horoscope Premium du mois personnalisé | Luna Astralis",
      "ogDescription": "Recevez une lecture astrologique personnalisée de votre mois avec vos transits, vos périodes clés, vos défis et vos opportunités.",
      "twitterTitle": "Horoscope Premium du mois personnalisé | Luna Astralis",
      "twitterDescription": "Découvrez les influences astrologiques, les périodes clés et les grandes tendances de votre mois.",
      "locale": "fr_CA",
      "language": "fr-CA",
      "imageAlt": "Couverture du rapport Horoscope Premium du mois"
    },
    "reportPrice": "19,99 $ US",
    "reportPages": "30 pages",
    "hero": {
      "kicker": "🌙 Horoscope Premium du mois",
      "title": "Comprenez les grandes influences de votre mois grâce à votre ciel personnel",
      "description": "Recevez une lecture astrologique personnalisée à partir de votre date, votre heure et votre lieu de naissance. Découvrez les énergies dominantes, les périodes importantes et les tendances qui pourraient influencer votre mois.",
      "createButton": "Créer mon horoscope mensuel",
      "previewButton": "Voir l’aperçu PDF",
      "previewLink": "📖 Consulter un véritable aperçu du rapport",
      "personalizedPages": "personnalisées",
      "uniquePayment": "Paiement unique",
      "downloadAfterPayment": "Téléchargement après paiement",
      "coverAlt": "Couverture du rapport Horoscope Premium du mois",
      "offerLabel": "Votre rapport du mois",
      "previewBeforeOrder": "Voir l’aperçu avant de commander"
    },
    "benefits": [
      "Analyse personnalisée selon votre thème natal",
      "Grandes influences astrologiques du mois",
      "Amour, travail, finances, énergie et relations",
      "Périodes favorables et moments plus délicats",
      "Rapport PDF détaillé d’environ 30 pages"
    ],
    "introduction": {
      "kicker": "Une vision complète de votre mois",
      "title": "Bien plus qu’un horoscope mensuel général",
      "description": "Un horoscope mensuel classique se base uniquement sur votre signe solaire. Votre rapport Premium tient également compte de votre heure et de votre lieu de naissance afin de proposer une lecture plus personnelle, plus nuancée et mieux adaptée à votre situation.",
      "previewButton": "Découvrir l’aperçu du rapport"
    },
    "order": {
      "kicker": "Votre horoscope mensuel personnalisé",
      "title": "Entrez vos informations de naissance",
      "description": "Ces renseignements permettent de calculer votre thème natal et les transits astrologiques actifs pendant le mois sélectionné."
    },
    "navigation": {
      "ariaLabel": "Navigation Horoscope Premium",
      "allFormulas": "← Toutes les formules",
      "freeHoroscope": "Horoscope gratuit →"
    }
  },
  "en": {
    "metadata": {
      "title": "Personalized Monthly Premium Horoscope | Luna Astralis",
      "description": "Discover the major astrological influences of your month with a horoscope personalized from your birth date, time and place.",
      "ogTitle": "Personalized Monthly Premium Horoscope | Luna Astralis",
      "ogDescription": "Receive a personalized astrological reading of your month, including transits, key periods, challenges and opportunities.",
      "twitterTitle": "Personalized Monthly Premium Horoscope | Luna Astralis",
      "twitterDescription": "Discover the astrological influences, key periods and major trends of your month.",
      "locale": "en_US",
      "language": "en-US",
      "imageAlt": "Cover of the Monthly Premium Horoscope report"
    },
    "reportPrice": "US$19.99",
    "reportPages": "30 pages",
    "hero": {
      "kicker": "🌙 Monthly Premium Horoscope",
      "title": "Understand the major influences of your month through your personal sky",
      "description": "Receive a personalized astrological reading based on your birth date, time and place. Discover the dominant energies, important periods and trends that may influence your month.",
      "createButton": "Create my monthly horoscope",
      "previewButton": "View PDF preview",
      "previewLink": "📖 View a real preview of the report",
      "personalizedPages": "personalized",
      "uniquePayment": "One-time payment",
      "downloadAfterPayment": "Download after payment",
      "coverAlt": "Cover of the Monthly Premium Horoscope report",
      "offerLabel": "Your monthly report",
      "previewBeforeOrder": "View the preview before ordering"
    },
    "benefits": [
      "Personalized analysis based on your birth chart",
      "Major astrological influences of the month",
      "Love, work, finances, energy and relationships",
      "Favorable periods and more delicate moments",
      "Detailed PDF report of about 30 pages"
    ],
    "introduction": {
      "kicker": "A complete view of your month",
      "title": "Much more than a general monthly horoscope",
      "description": "A standard monthly horoscope is based only on your Sun sign. Your Premium report also considers your birth time and place to provide a more personal, nuanced interpretation better suited to your situation.",
      "previewButton": "Discover the report preview"
    },
    "order": {
      "kicker": "Your personalized monthly horoscope",
      "title": "Enter your birth information",
      "description": "This information is used to calculate your birth chart and the astrological transits active during the selected month."
    },
    "navigation": {
      "ariaLabel": "Premium Horoscope navigation",
      "allFormulas": "← All options",
      "freeHoroscope": "Free horoscope →"
    }
  },
  "es": {
    "metadata": {
      "title": "Horóscopo Premium mensual personalizado | Luna Astralis",
      "description": "Descubre las grandes influencias astrológicas de tu mes con un horóscopo personalizado según tu fecha, hora y lugar de nacimiento.",
      "ogTitle": "Horóscopo Premium mensual personalizado | Luna Astralis",
      "ogDescription": "Recibe una lectura astrológica personalizada de tu mes con tus tránsitos, períodos clave, desafíos y oportunidades.",
      "twitterTitle": "Horóscopo Premium mensual personalizado | Luna Astralis",
      "twitterDescription": "Descubre las influencias astrológicas, los períodos clave y las grandes tendencias de tu mes.",
      "locale": "es_ES",
      "language": "es-ES",
      "imageAlt": "Portada del informe Horóscopo Premium mensual"
    },
    "reportPrice": "19,99 US$",
    "reportPages": "30 páginas",
    "hero": {
      "kicker": "🌙 Horóscopo Premium mensual",
      "title": "Comprende las grandes influencias de tu mes gracias a tu cielo personal",
      "description": "Recibe una lectura astrológica personalizada a partir de tu fecha, hora y lugar de nacimiento. Descubre las energías dominantes, los períodos importantes y las tendencias que podrían influir en tu mes.",
      "createButton": "Crear mi horóscopo mensual",
      "previewButton": "Ver la vista previa PDF",
      "previewLink": "📖 Consultar una vista previa real del informe",
      "personalizedPages": "personalizadas",
      "uniquePayment": "Pago único",
      "downloadAfterPayment": "Descarga después del pago",
      "coverAlt": "Portada del informe Horóscopo Premium mensual",
      "offerLabel": "Tu informe mensual",
      "previewBeforeOrder": "Ver la vista previa antes de comprar"
    },
    "benefits": [
      "Análisis personalizado según tu carta natal",
      "Grandes influencias astrológicas del mes",
      "Amor, trabajo, finanzas, energía y relaciones",
      "Períodos favorables y momentos más delicados",
      "Informe PDF detallado de unas 30 páginas"
    ],
    "introduction": {
      "kicker": "Una visión completa de tu mes",
      "title": "Mucho más que un horóscopo mensual general",
      "description": "Un horóscopo mensual clásico se basa únicamente en tu signo solar. Tu informe Premium también tiene en cuenta tu hora y lugar de nacimiento para ofrecer una lectura más personal, matizada y adaptada a tu situación.",
      "previewButton": "Descubrir la vista previa del informe"
    },
    "order": {
      "kicker": "Tu horóscopo mensual personalizado",
      "title": "Introduce tus datos de nacimiento",
      "description": "Estos datos permiten calcular tu carta natal y los tránsitos astrológicos activos durante el mes seleccionado."
    },
    "navigation": {
      "ariaLabel": "Navegación del Horóscopo Premium",
      "allFormulas": "← Todas las opciones",
      "freeHoroscope": "Horóscopo gratuito →"
    }
  },
  "de": {
    "metadata": {
      "title": "Personalisiertes Premium-Monatshoroskop | Luna Astralis",
      "description": "Entdecken Sie die großen astrologischen Einflüsse Ihres Monats mit einem persönlichen Horoskop auf Grundlage von Geburtsdatum, Geburtszeit und Geburtsort.",
      "ogTitle": "Personalisiertes Premium-Monatshoroskop | Luna Astralis",
      "ogDescription": "Erhalten Sie eine persönliche astrologische Monatsdeutung mit Transiten, Schlüsselphasen, Herausforderungen und Chancen.",
      "twitterTitle": "Personalisiertes Premium-Monatshoroskop | Luna Astralis",
      "twitterDescription": "Entdecken Sie die astrologischen Einflüsse, Schlüsselphasen und großen Tendenzen Ihres Monats.",
      "locale": "de_DE",
      "language": "de-DE",
      "imageAlt": "Titelbild des Premium-Monatshoroskop-Berichts"
    },
    "reportPrice": "19,99 US$",
    "reportPages": "30 Seiten",
    "hero": {
      "kicker": "🌙 Premium-Monatshoroskop",
      "title": "Verstehen Sie die großen Einflüsse Ihres Monats durch Ihren persönlichen Himmel",
      "description": "Erhalten Sie eine persönliche astrologische Deutung auf Grundlage von Geburtsdatum, Geburtszeit und Geburtsort. Entdecken Sie dominante Energien, wichtige Phasen und Tendenzen, die Ihren Monat beeinflussen können.",
      "createButton": "Mein Monatshoroskop erstellen",
      "previewButton": "PDF-Vorschau ansehen",
      "previewLink": "📖 Eine echte Vorschau des Berichts ansehen",
      "personalizedPages": "personalisiert",
      "uniquePayment": "Einmalige Zahlung",
      "downloadAfterPayment": "Download nach der Zahlung",
      "coverAlt": "Titelbild des Premium-Monatshoroskop-Berichts",
      "offerLabel": "Ihr Monatsbericht",
      "previewBeforeOrder": "Vorschau vor der Bestellung ansehen"
    },
    "benefits": [
      "Persönliche Analyse auf Grundlage Ihres Geburtshoroskops",
      "Große astrologische Einflüsse des Monats",
      "Liebe, Arbeit, Finanzen, Energie und Beziehungen",
      "Günstige Phasen und anspruchsvollere Momente",
      "Detaillierter PDF-Bericht mit etwa 30 Seiten"
    ],
    "introduction": {
      "kicker": "Ein vollständiger Blick auf Ihren Monat",
      "title": "Weit mehr als ein allgemeines Monatshoroskop",
      "description": "Ein klassisches Monatshoroskop basiert nur auf Ihrem Sonnenzeichen. Ihr Premium-Bericht berücksichtigt auch Geburtszeit und Geburtsort und bietet dadurch eine persönlichere, differenziertere und besser auf Ihre Situation abgestimmte Deutung.",
      "previewButton": "Berichtsvorschau entdecken"
    },
    "order": {
      "kicker": "Ihr persönliches Monatshoroskop",
      "title": "Geben Sie Ihre Geburtsdaten ein",
      "description": "Diese Angaben ermöglichen die Berechnung Ihres Geburtshoroskops und der astrologischen Transite, die im ausgewählten Monat aktiv sind."
    },
    "navigation": {
      "ariaLabel": "Navigation Premium-Horoskop",
      "allFormulas": "← Alle Angebote",
      "freeHoroscope": "Kostenloses Horoskop →"
    }
  },
  "it": {
    "metadata": {
      "title": "Oroscopo Premium del mese personalizzato | Luna Astralis",
      "description": "Scopri le grandi influenze astrologiche del tuo mese con un oroscopo personalizzato secondo data, ora e luogo di nascita.",
      "ogTitle": "Oroscopo Premium del mese personalizzato | Luna Astralis",
      "ogDescription": "Ricevi una lettura astrologica personalizzata del tuo mese con transiti, periodi chiave, sfide e opportunità.",
      "twitterTitle": "Oroscopo Premium del mese personalizzato | Luna Astralis",
      "twitterDescription": "Scopri le influenze astrologiche, i periodi chiave e le grandi tendenze del tuo mese.",
      "locale": "it_IT",
      "language": "it-IT",
      "imageAlt": "Copertina del rapporto Oroscopo Premium del mese"
    },
    "reportPrice": "19,99 USD",
    "reportPages": "30 pagine",
    "hero": {
      "kicker": "🌙 Oroscopo Premium del mese",
      "title": "Comprendi le grandi influenze del tuo mese grazie al tuo cielo personale",
      "description": "Ricevi una lettura astrologica personalizzata basata su data, ora e luogo di nascita. Scopri le energie dominanti, i periodi importanti e le tendenze che potrebbero influenzare il tuo mese.",
      "createButton": "Crea il mio oroscopo mensile",
      "previewButton": "Vedi l’anteprima PDF",
      "previewLink": "📖 Consulta una vera anteprima del rapporto",
      "personalizedPages": "personalizzate",
      "uniquePayment": "Pagamento unico",
      "downloadAfterPayment": "Download dopo il pagamento",
      "coverAlt": "Copertina del rapporto Oroscopo Premium del mese",
      "offerLabel": "Il tuo rapporto mensile",
      "previewBeforeOrder": "Vedi l’anteprima prima di ordinare"
    },
    "benefits": [
      "Analisi personalizzata secondo il tuo tema natale",
      "Grandi influenze astrologiche del mese",
      "Amore, lavoro, finanze, energia e relazioni",
      "Periodi favorevoli e momenti più delicati",
      "Rapporto PDF dettagliato di circa 30 pagine"
    ],
    "introduction": {
      "kicker": "Una visione completa del tuo mese",
      "title": "Molto più di un oroscopo mensile generale",
      "description": "Un oroscopo mensile classico si basa soltanto sul segno solare. Il tuo rapporto Premium considera anche ora e luogo di nascita per offrire una lettura più personale, sfumata e adatta alla tua situazione.",
      "previewButton": "Scopri l’anteprima del rapporto"
    },
    "order": {
      "kicker": "Il tuo oroscopo mensile personalizzato",
      "title": "Inserisci i tuoi dati di nascita",
      "description": "Queste informazioni permettono di calcolare il tuo tema natale e i transiti astrologici attivi nel mese selezionato."
    },
    "navigation": {
      "ariaLabel": "Navigazione Oroscopo Premium",
      "allFormulas": "← Tutte le formule",
      "freeHoroscope": "Oroscopo gratuito →"
    }
  },
  "pt": {
    "metadata": {
      "title": "Horóscopo Premium mensal personalizado | Luna Astralis",
      "description": "Descubra as grandes influências astrológicas do seu mês com um horóscopo personalizado segundo data, hora e local de nascimento.",
      "ogTitle": "Horóscopo Premium mensal personalizado | Luna Astralis",
      "ogDescription": "Receba uma leitura astrológica personalizada do seu mês com trânsitos, períodos-chave, desafios e oportunidades.",
      "twitterTitle": "Horóscopo Premium mensal personalizado | Luna Astralis",
      "twitterDescription": "Descubra as influências astrológicas, os períodos-chave e as grandes tendências do seu mês.",
      "locale": "pt_PT",
      "language": "pt-PT",
      "imageAlt": "Capa do relatório Horóscopo Premium mensal"
    },
    "reportPrice": "19,99 US$",
    "reportPages": "30 páginas",
    "hero": {
      "kicker": "🌙 Horóscopo Premium mensal",
      "title": "Compreenda as grandes influências do seu mês por meio do seu céu pessoal",
      "description": "Receba uma leitura astrológica personalizada com base na data, hora e local de nascimento. Descubra as energias dominantes, os períodos importantes e as tendências que podem influenciar seu mês.",
      "createButton": "Criar meu horóscopo mensal",
      "previewButton": "Ver a prévia em PDF",
      "previewLink": "📖 Consultar uma prévia real do relatório",
      "personalizedPages": "personalizadas",
      "uniquePayment": "Pagamento único",
      "downloadAfterPayment": "Download após o pagamento",
      "coverAlt": "Capa do relatório Horóscopo Premium mensal",
      "offerLabel": "Seu relatório mensal",
      "previewBeforeOrder": "Ver a prévia antes de comprar"
    },
    "benefits": [
      "Análise personalizada segundo seu mapa natal",
      "Grandes influências astrológicas do mês",
      "Amor, trabalho, finanças, energia e relações",
      "Períodos favoráveis e momentos mais delicados",
      "Relatório PDF detalhado de cerca de 30 páginas"
    ],
    "introduction": {
      "kicker": "Uma visão completa do seu mês",
      "title": "Muito mais do que um horóscopo mensal geral",
      "description": "Um horóscopo mensal clássico se baseia apenas no signo solar. Seu relatório Premium também considera a hora e o local de nascimento para oferecer uma leitura mais pessoal, detalhada e adaptada à sua situação.",
      "previewButton": "Descobrir a prévia do relatório"
    },
    "order": {
      "kicker": "Seu horóscopo mensal personalizado",
      "title": "Informe seus dados de nascimento",
      "description": "Essas informações permitem calcular seu mapa natal e os trânsitos astrológicos ativos durante o mês selecionado."
    },
    "navigation": {
      "ariaLabel": "Navegação do Horóscopo Premium",
      "allFormulas": "← Todas as opções",
      "freeHoroscope": "Horóscopo gratuito →"
    }
  }
};
