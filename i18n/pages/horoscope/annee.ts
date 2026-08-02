import type { Locale } from "@/i18n/config";

export type HoroscopeYearlyPageText = {
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
    paragraphs: string[];
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

export const HOROSCOPE_YEARLY_TRANSLATIONS: Record<Locale, HoroscopeYearlyPageText> = {
  "fr": {
    "metadata": {
      "title": "Horoscope annuel personnalisé 2027 | Luna Astralis",
      "description": "Découvrez les grandes tendances astrologiques de votre année grâce à un horoscope annuel personnalisé selon votre date, votre heure et votre lieu de naissance.",
      "ogTitle": "Horoscope annuel personnalisé | Luna Astralis",
      "ogDescription": "Recevez une lecture astrologique complète de votre année avec vos périodes clés, vos influences planétaires, vos défis et vos opportunités.",
      "twitterTitle": "Horoscope annuel personnalisé | Luna Astralis",
      "twitterDescription": "Découvrez les influences astrologiques, les périodes clés et les grandes tendances de votre année.",
      "locale": "fr_CA",
      "language": "fr-CA",
      "imageAlt": "Couverture du rapport Horoscope annuel personnalisé"
    },
    "reportPrice": "34,99 $ US",
    "reportPages": "54 pages",
    "hero": {
      "kicker": "✨ Horoscope Premium de l’année",
      "title": "Découvrez les grandes tendances de votre année grâce à votre ciel personnel",
      "description": "Recevez une lecture astrologique personnalisée à partir de votre date, votre heure et votre lieu de naissance. Découvrez les influences dominantes, les périodes importantes et les grands mouvements qui pourraient accompagner votre année.",
      "createButton": "Créer mon horoscope annuel",
      "previewButton": "Voir l’aperçu PDF",
      "previewLink": "📖 Consulter un véritable aperçu du rapport",
      "personalizedPages": "personnalisées",
      "uniquePayment": "Paiement unique",
      "downloadAfterPayment": "Téléchargement après paiement",
      "coverAlt": "Couverture du rapport Horoscope annuel personnalisé",
      "offerLabel": "Votre rapport de l’année",
      "previewBeforeOrder": "Voir l’aperçu avant de commander"
    },
    "benefits": [
      "Analyse personnalisée selon votre thème natal",
      "Grandes tendances et énergies dominantes de votre année",
      "Amour, travail, finances, santé et relations",
      "Planètes dominantes et maisons astrologiques activées",
      "Périodes favorables, défis et occasions importantes",
      "Calendrier astrologique et meilleures périodes de l’année",
      "Rapport PDF détaillé d’environ 54 pages"
    ],
    "introduction": {
      "kicker": "Une vision complète de votre année",
      "title": "Bien plus qu’un horoscope annuel général",
      "paragraphs": [
        "Un horoscope annuel classique se base principalement sur votre signe solaire. Votre rapport Premium tient également compte de votre date, de votre heure et de votre lieu de naissance afin de proposer une lecture plus personnelle, plus nuancée et mieux adaptée à votre ciel astrologique.",
        "Il vous permet de découvrir les domaines les plus actifs de votre année, les périodes favorables, les moments plus délicats ainsi que les grandes occasions d’évolution qui pourraient se présenter."
      ],
      "previewButton": "Découvrir l’aperçu du rapport"
    },
    "order": {
      "kicker": "Votre horoscope annuel personnalisé",
      "title": "Entrez vos informations de naissance",
      "description": "Ces renseignements permettent de calculer votre thème natal et les influences astrologiques actives pendant l’année sélectionnée."
    },
    "navigation": {
      "ariaLabel": "Navigation Horoscope Premium",
      "allFormulas": "← Toutes les formules",
      "freeHoroscope": "Horoscope gratuit →"
    }
  },
  "en": {
    "metadata": {
      "title": "Personalized Yearly Horoscope 2027 | Luna Astralis",
      "description": "Discover the major astrological trends of your year with a yearly horoscope personalized from your birth date, time and place.",
      "ogTitle": "Personalized Yearly Horoscope | Luna Astralis",
      "ogDescription": "Receive a complete astrological reading of your year with key periods, planetary influences, challenges and opportunities.",
      "twitterTitle": "Personalized Yearly Horoscope | Luna Astralis",
      "twitterDescription": "Discover the astrological influences, key periods and major trends of your year.",
      "locale": "en_US",
      "language": "en-US",
      "imageAlt": "Cover of the personalized yearly horoscope report"
    },
    "reportPrice": "US$34.99",
    "reportPages": "54 pages",
    "hero": {
      "kicker": "✨ Yearly Premium Horoscope",
      "title": "Discover the major trends of your year through your personal sky",
      "description": "Receive a personalized astrological reading based on your birth date, time and place. Discover the dominant influences, important periods and major movements that may accompany your year.",
      "createButton": "Create my yearly horoscope",
      "previewButton": "View PDF preview",
      "previewLink": "📖 View a real preview of the report",
      "personalizedPages": "personalized",
      "uniquePayment": "One-time payment",
      "downloadAfterPayment": "Download after payment",
      "coverAlt": "Cover of the personalized yearly horoscope report",
      "offerLabel": "Your yearly report",
      "previewBeforeOrder": "View the preview before ordering"
    },
    "benefits": [
      "Personalized analysis based on your birth chart",
      "Major trends and dominant energies of your year",
      "Love, work, finances, health and relationships",
      "Dominant planets and activated astrological houses",
      "Favorable periods, challenges and important opportunities",
      "Astrological calendar and best periods of the year",
      "Detailed PDF report of about 54 pages"
    ],
    "introduction": {
      "kicker": "A complete view of your year",
      "title": "Much more than a general yearly horoscope",
      "paragraphs": [
        "A standard yearly horoscope is based mainly on your Sun sign. Your Premium report also considers your birth date, time and place to provide a more personal, nuanced interpretation better suited to your astrological sky.",
        "It helps you discover the most active areas of your year, favorable periods, more delicate moments and major opportunities for growth that may arise."
      ],
      "previewButton": "Discover the report preview"
    },
    "order": {
      "kicker": "Your personalized yearly horoscope",
      "title": "Enter your birth information",
      "description": "This information is used to calculate your birth chart and the astrological influences active during the selected year."
    },
    "navigation": {
      "ariaLabel": "Premium Horoscope navigation",
      "allFormulas": "← All options",
      "freeHoroscope": "Free horoscope →"
    }
  },
  "es": {
    "metadata": {
      "title": "Horóscopo anual personalizado 2027 | Luna Astralis",
      "description": "Descubre las grandes tendencias astrológicas de tu año con un horóscopo anual personalizado según tu fecha, hora y lugar de nacimiento.",
      "ogTitle": "Horóscopo anual personalizado | Luna Astralis",
      "ogDescription": "Recibe una lectura astrológica completa de tu año con períodos clave, influencias planetarias, desafíos y oportunidades.",
      "twitterTitle": "Horóscopo anual personalizado | Luna Astralis",
      "twitterDescription": "Descubre las influencias astrológicas, los períodos clave y las grandes tendencias de tu año.",
      "locale": "es_ES",
      "language": "es-ES",
      "imageAlt": "Portada del informe de horóscopo anual personalizado"
    },
    "reportPrice": "34,99 US$",
    "reportPages": "54 páginas",
    "hero": {
      "kicker": "✨ Horóscopo Premium anual",
      "title": "Descubre las grandes tendencias de tu año gracias a tu cielo personal",
      "description": "Recibe una lectura astrológica personalizada a partir de tu fecha, hora y lugar de nacimiento. Descubre las influencias dominantes, los períodos importantes y los grandes movimientos que podrían acompañar tu año.",
      "createButton": "Crear mi horóscopo anual",
      "previewButton": "Ver la vista previa PDF",
      "previewLink": "📖 Consultar una vista previa real del informe",
      "personalizedPages": "personalizadas",
      "uniquePayment": "Pago único",
      "downloadAfterPayment": "Descarga después del pago",
      "coverAlt": "Portada del informe de horóscopo anual personalizado",
      "offerLabel": "Tu informe anual",
      "previewBeforeOrder": "Ver la vista previa antes de comprar"
    },
    "benefits": [
      "Análisis personalizado según tu carta natal",
      "Grandes tendencias y energías dominantes de tu año",
      "Amor, trabajo, finanzas, salud y relaciones",
      "Planetas dominantes y casas astrológicas activadas",
      "Períodos favorables, desafíos y oportunidades importantes",
      "Calendario astrológico y mejores períodos del año",
      "Informe PDF detallado de unas 54 páginas"
    ],
    "introduction": {
      "kicker": "Una visión completa de tu año",
      "title": "Mucho más que un horóscopo anual general",
      "paragraphs": [
        "Un horóscopo anual clásico se basa principalmente en tu signo solar. Tu informe Premium también tiene en cuenta tu fecha, hora y lugar de nacimiento para ofrecer una lectura más personal, matizada y adaptada a tu cielo astrológico.",
        "Te permite descubrir las áreas más activas de tu año, los períodos favorables, los momentos más delicados y las grandes oportunidades de evolución que podrían presentarse."
      ],
      "previewButton": "Descubrir la vista previa del informe"
    },
    "order": {
      "kicker": "Tu horóscopo anual personalizado",
      "title": "Introduce tus datos de nacimiento",
      "description": "Estos datos permiten calcular tu carta natal y las influencias astrológicas activas durante el año seleccionado."
    },
    "navigation": {
      "ariaLabel": "Navegación del Horóscopo Premium",
      "allFormulas": "← Todas las opciones",
      "freeHoroscope": "Horóscopo gratuito →"
    }
  },
  "de": {
    "metadata": {
      "title": "Personalisiertes Jahreshoroskop 2027 | Luna Astralis",
      "description": "Entdecken Sie die großen astrologischen Tendenzen Ihres Jahres mit einem persönlichen Jahreshoroskop auf Grundlage von Geburtsdatum, Geburtszeit und Geburtsort.",
      "ogTitle": "Personalisiertes Jahreshoroskop | Luna Astralis",
      "ogDescription": "Erhalten Sie eine vollständige astrologische Jahresdeutung mit Schlüsselphasen, planetarischen Einflüssen, Herausforderungen und Chancen.",
      "twitterTitle": "Personalisiertes Jahreshoroskop | Luna Astralis",
      "twitterDescription": "Entdecken Sie die astrologischen Einflüsse, Schlüsselphasen und großen Tendenzen Ihres Jahres.",
      "locale": "de_DE",
      "language": "de-DE",
      "imageAlt": "Titelbild des persönlichen Jahreshoroskop-Berichts"
    },
    "reportPrice": "34,99 US$",
    "reportPages": "54 Seiten",
    "hero": {
      "kicker": "✨ Premium-Jahreshoroskop",
      "title": "Entdecken Sie die großen Tendenzen Ihres Jahres durch Ihren persönlichen Himmel",
      "description": "Erhalten Sie eine persönliche astrologische Deutung auf Grundlage von Geburtsdatum, Geburtszeit und Geburtsort. Entdecken Sie dominante Einflüsse, wichtige Phasen und große Bewegungen, die Ihr Jahr begleiten können.",
      "createButton": "Mein Jahreshoroskop erstellen",
      "previewButton": "PDF-Vorschau ansehen",
      "previewLink": "📖 Eine echte Vorschau des Berichts ansehen",
      "personalizedPages": "personalisiert",
      "uniquePayment": "Einmalige Zahlung",
      "downloadAfterPayment": "Download nach der Zahlung",
      "coverAlt": "Titelbild des persönlichen Jahreshoroskop-Berichts",
      "offerLabel": "Ihr Jahresbericht",
      "previewBeforeOrder": "Vorschau vor der Bestellung ansehen"
    },
    "benefits": [
      "Persönliche Analyse auf Grundlage Ihres Geburtshoroskops",
      "Große Tendenzen und dominante Energien Ihres Jahres",
      "Liebe, Arbeit, Finanzen, Gesundheit und Beziehungen",
      "Dominante Planeten und aktivierte astrologische Häuser",
      "Günstige Phasen, Herausforderungen und wichtige Chancen",
      "Astrologischer Kalender und beste Zeiten des Jahres",
      "Detaillierter PDF-Bericht mit etwa 54 Seiten"
    ],
    "introduction": {
      "kicker": "Ein vollständiger Blick auf Ihr Jahr",
      "title": "Weit mehr als ein allgemeines Jahreshoroskop",
      "paragraphs": [
        "Ein klassisches Jahreshoroskop basiert hauptsächlich auf Ihrem Sonnenzeichen. Ihr Premium-Bericht berücksichtigt auch Geburtsdatum, Geburtszeit und Geburtsort und bietet dadurch eine persönlichere, differenziertere und besser auf Ihren astrologischen Himmel abgestimmte Deutung.",
        "Sie entdecken die aktivsten Lebensbereiche Ihres Jahres, günstige Phasen, anspruchsvollere Momente und große Entwicklungsmöglichkeiten, die sich zeigen können."
      ],
      "previewButton": "Berichtsvorschau entdecken"
    },
    "order": {
      "kicker": "Ihr persönliches Jahreshoroskop",
      "title": "Geben Sie Ihre Geburtsdaten ein",
      "description": "Diese Angaben ermöglichen die Berechnung Ihres Geburtshoroskops und der astrologischen Einflüsse, die im ausgewählten Jahr aktiv sind."
    },
    "navigation": {
      "ariaLabel": "Navigation Premium-Horoskop",
      "allFormulas": "← Alle Angebote",
      "freeHoroscope": "Kostenloses Horoskop →"
    }
  },
  "it": {
    "metadata": {
      "title": "Oroscopo annuale personalizzato 2027 | Luna Astralis",
      "description": "Scopri le grandi tendenze astrologiche del tuo anno con un oroscopo annuale personalizzato secondo data, ora e luogo di nascita.",
      "ogTitle": "Oroscopo annuale personalizzato | Luna Astralis",
      "ogDescription": "Ricevi una lettura astrologica completa del tuo anno con periodi chiave, influenze planetarie, sfide e opportunità.",
      "twitterTitle": "Oroscopo annuale personalizzato | Luna Astralis",
      "twitterDescription": "Scopri le influenze astrologiche, i periodi chiave e le grandi tendenze del tuo anno.",
      "locale": "it_IT",
      "language": "it-IT",
      "imageAlt": "Copertina del rapporto di oroscopo annuale personalizzato"
    },
    "reportPrice": "34,99 USD",
    "reportPages": "54 pagine",
    "hero": {
      "kicker": "✨ Oroscopo Premium dell’anno",
      "title": "Scopri le grandi tendenze del tuo anno grazie al tuo cielo personale",
      "description": "Ricevi una lettura astrologica personalizzata basata su data, ora e luogo di nascita. Scopri le influenze dominanti, i periodi importanti e i grandi movimenti che potrebbero accompagnare il tuo anno.",
      "createButton": "Crea il mio oroscopo annuale",
      "previewButton": "Vedi l’anteprima PDF",
      "previewLink": "📖 Consulta una vera anteprima del rapporto",
      "personalizedPages": "personalizzate",
      "uniquePayment": "Pagamento unico",
      "downloadAfterPayment": "Download dopo il pagamento",
      "coverAlt": "Copertina del rapporto di oroscopo annuale personalizzato",
      "offerLabel": "Il tuo rapporto annuale",
      "previewBeforeOrder": "Vedi l’anteprima prima di ordinare"
    },
    "benefits": [
      "Analisi personalizzata secondo il tuo tema natale",
      "Grandi tendenze ed energie dominanti del tuo anno",
      "Amore, lavoro, finanze, salute e relazioni",
      "Pianeti dominanti e case astrologiche attivate",
      "Periodi favorevoli, sfide e opportunità importanti",
      "Calendario astrologico e migliori periodi dell’anno",
      "Rapporto PDF dettagliato di circa 54 pagine"
    ],
    "introduction": {
      "kicker": "Una visione completa del tuo anno",
      "title": "Molto più di un oroscopo annuale generale",
      "paragraphs": [
        "Un oroscopo annuale classico si basa principalmente sul segno solare. Il tuo rapporto Premium considera anche data, ora e luogo di nascita per offrire una lettura più personale, sfumata e adatta al tuo cielo astrologico.",
        "Ti permette di scoprire gli ambiti più attivi dell’anno, i periodi favorevoli, i momenti più delicati e le grandi opportunità di evoluzione che potrebbero presentarsi."
      ],
      "previewButton": "Scopri l’anteprima del rapporto"
    },
    "order": {
      "kicker": "Il tuo oroscopo annuale personalizzato",
      "title": "Inserisci i tuoi dati di nascita",
      "description": "Queste informazioni permettono di calcolare il tuo tema natale e le influenze astrologiche attive durante l’anno selezionato."
    },
    "navigation": {
      "ariaLabel": "Navigazione Oroscopo Premium",
      "allFormulas": "← Tutte le formule",
      "freeHoroscope": "Oroscopo gratuito →"
    }
  },
  "pt": {
    "metadata": {
      "title": "Horóscopo anual personalizado 2027 | Luna Astralis",
      "description": "Descubra as grandes tendências astrológicas do seu ano com um horóscopo anual personalizado segundo data, hora e local de nascimento.",
      "ogTitle": "Horóscopo anual personalizado | Luna Astralis",
      "ogDescription": "Receba uma leitura astrológica completa do seu ano com períodos-chave, influências planetárias, desafios e oportunidades.",
      "twitterTitle": "Horóscopo anual personalizado | Luna Astralis",
      "twitterDescription": "Descubra as influências astrológicas, os períodos-chave e as grandes tendências do seu ano.",
      "locale": "pt_PT",
      "language": "pt-PT",
      "imageAlt": "Capa do relatório de horóscopo anual personalizado"
    },
    "reportPrice": "34,99 US$",
    "reportPages": "54 páginas",
    "hero": {
      "kicker": "✨ Horóscopo Premium anual",
      "title": "Descubra as grandes tendências do seu ano por meio do seu céu pessoal",
      "description": "Receba uma leitura astrológica personalizada com base na data, hora e local de nascimento. Descubra as influências dominantes, os períodos importantes e os grandes movimentos que podem acompanhar seu ano.",
      "createButton": "Criar meu horóscopo anual",
      "previewButton": "Ver a prévia em PDF",
      "previewLink": "📖 Consultar uma prévia real do relatório",
      "personalizedPages": "personalizadas",
      "uniquePayment": "Pagamento único",
      "downloadAfterPayment": "Download após o pagamento",
      "coverAlt": "Capa do relatório de horóscopo anual personalizado",
      "offerLabel": "Seu relatório anual",
      "previewBeforeOrder": "Ver a prévia antes de comprar"
    },
    "benefits": [
      "Análise personalizada segundo seu mapa natal",
      "Grandes tendências e energias dominantes do seu ano",
      "Amor, trabalho, finanças, saúde e relações",
      "Planetas dominantes e casas astrológicas ativadas",
      "Períodos favoráveis, desafios e oportunidades importantes",
      "Calendário astrológico e melhores períodos do ano",
      "Relatório PDF detalhado de cerca de 54 páginas"
    ],
    "introduction": {
      "kicker": "Uma visão completa do seu ano",
      "title": "Muito mais do que um horóscopo anual geral",
      "paragraphs": [
        "Um horóscopo anual clássico se baseia principalmente no signo solar. Seu relatório Premium também considera data, hora e local de nascimento para oferecer uma leitura mais pessoal, detalhada e adaptada ao seu céu astrológico.",
        "Ele permite descobrir as áreas mais ativas do seu ano, os períodos favoráveis, os momentos mais delicados e as grandes oportunidades de evolução que podem surgir."
      ],
      "previewButton": "Descobrir a prévia do relatório"
    },
    "order": {
      "kicker": "Seu horóscopo anual personalizado",
      "title": "Informe seus dados de nascimento",
      "description": "Essas informações permitem calcular seu mapa natal e as influências astrológicas ativas durante o ano selecionado."
    },
    "navigation": {
      "ariaLabel": "Navegação do Horóscopo Premium",
      "allFormulas": "← Todas as opções",
      "freeHoroscope": "Horóscopo gratuito →"
    }
  }
};
