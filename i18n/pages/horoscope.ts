import type {
  Locale,
} from "@/i18n/config";

export type HoroscopeSignText = {
  name: string;
  slug: string;
  symbol: string;
  dates: string;
  element: string;
  ariaLabel: string;
};

export type HoroscopePageText = {
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    locale: string;
    language: string;
  };

  dateLocale: string;

  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };

  signsSection: {
    kicker: string;
    title: string;
    description: string;
    elementLabel: string;
  };

  signs: HoroscopeSignText[];

  info: {
    title: string;
    description: string;
  };

  cta: {
    kicker: string;
    title: string;
    description: string;
    chartButton: string;
    compatibilityButton: string;
  };

  navigation: {
    ariaLabel: string;
    home: string;
    astrology: string;
    signs: string;
    pricing: string;
  };
};

export const HOROSCOPE_TRANSLATIONS: Record<
  Locale,
  HoroscopePageText
> = {
  fr: {
    metadata: {
      title:
        "Horoscope du jour gratuit | Les 12 signes astrologiques | Luna Astralis",
      description:
        "Découvrez gratuitement votre horoscope du jour pour les 12 signes astrologiques : amour, travail, finances, bien-être et conseil astrologique.",
      ogTitle:
        "Horoscope du jour gratuit | Luna Astralis",
      ogDescription:
        "Consultez gratuitement l’horoscope du jour de votre signe astrologique.",
      locale:
        "fr_CA",
      language:
        "fr-CA",
    },

    dateLocale:
      "fr-CA",

    hero: {
      eyebrow:
        "✦ Mis à jour chaque jour",
      title:
        "Horoscope du jour gratuit",
      intro:
        "Découvrez les grandes tendances astrologiques de votre journée. Sélectionnez votre signe pour consulter votre horoscope en amour, au travail, dans vos finances et pour votre bien-être.",
    },

    signsSection: {
      kicker:
        "Les 12 signes du zodiaque",
      title:
        "Choisissez votre signe astrologique",
      description:
        "Consultez gratuitement les énergies qui pourraient influencer votre journée.",
      elementLabel:
        "Élément",
    },

    signs: [
      {
        name:
          "Bélier",
        slug:
          "belier",
        symbol:
          "♈",
        dates:
          "21 mars au 19 avril",
        element:
          "Feu",
        ariaLabel:
          "Voir l’horoscope du jour du signe Bélier",
      },
      {
        name:
          "Taureau",
        slug:
          "taureau",
        symbol:
          "♉",
        dates:
          "20 avril au 20 mai",
        element:
          "Terre",
        ariaLabel:
          "Voir l’horoscope du jour du signe Taureau",
      },
      {
        name:
          "Gémeaux",
        slug:
          "gemeaux",
        symbol:
          "♊",
        dates:
          "21 mai au 20 juin",
        element:
          "Air",
        ariaLabel:
          "Voir l’horoscope du jour du signe Gémeaux",
      },
      {
        name:
          "Cancer",
        slug:
          "cancer",
        symbol:
          "♋",
        dates:
          "21 juin au 22 juillet",
        element:
          "Eau",
        ariaLabel:
          "Voir l’horoscope du jour du signe Cancer",
      },
      {
        name:
          "Lion",
        slug:
          "lion",
        symbol:
          "♌",
        dates:
          "23 juillet au 22 août",
        element:
          "Feu",
        ariaLabel:
          "Voir l’horoscope du jour du signe Lion",
      },
      {
        name:
          "Vierge",
        slug:
          "vierge",
        symbol:
          "♍",
        dates:
          "23 août au 22 septembre",
        element:
          "Terre",
        ariaLabel:
          "Voir l’horoscope du jour du signe Vierge",
      },
      {
        name:
          "Balance",
        slug:
          "balance",
        symbol:
          "♎",
        dates:
          "23 septembre au 22 octobre",
        element:
          "Air",
        ariaLabel:
          "Voir l’horoscope du jour du signe Balance",
      },
      {
        name:
          "Scorpion",
        slug:
          "scorpion",
        symbol:
          "♏",
        dates:
          "23 octobre au 21 novembre",
        element:
          "Eau",
        ariaLabel:
          "Voir l’horoscope du jour du signe Scorpion",
      },
      {
        name:
          "Sagittaire",
        slug:
          "sagittaire",
        symbol:
          "♐",
        dates:
          "22 novembre au 21 décembre",
        element:
          "Feu",
        ariaLabel:
          "Voir l’horoscope du jour du signe Sagittaire",
      },
      {
        name:
          "Capricorne",
        slug:
          "capricorne",
        symbol:
          "♑",
        dates:
          "22 décembre au 19 janvier",
        element:
          "Terre",
        ariaLabel:
          "Voir l’horoscope du jour du signe Capricorne",
      },
      {
        name:
          "Verseau",
        slug:
          "verseau",
        symbol:
          "♒",
        dates:
          "20 janvier au 18 février",
        element:
          "Air",
        ariaLabel:
          "Voir l’horoscope du jour du signe Verseau",
      },
      {
        name:
          "Poissons",
        slug:
          "poissons",
        symbol:
          "♓",
        dates:
          "19 février au 20 mars",
        element:
          "Eau",
        ariaLabel:
          "Voir l’horoscope du jour du signe Poissons",
      },
    ],

    info: {
      title:
        "Une lecture astrologique chaque jour",
      description:
        "L’horoscope du jour présente une interprétation générale des influences astrologiques associées à chaque signe. Pour obtenir une analyse plus personnelle, votre date, votre heure et votre lieu de naissance sont nécessaires.",
    },

    cta: {
      kicker:
        "Allez plus loin",
      title:
        "Votre signe solaire ne raconte qu’une partie de votre histoire",
      description:
        "Découvrez votre Soleil, votre Lune, votre Ascendant, vos maisons astrologiques et les principales influences de votre carte du ciel.",
      chartButton:
        "Créer ma carte du ciel gratuite",
      compatibilityButton:
        "Tester une compatibilité",
    },

    navigation: {
      ariaLabel:
        "Navigation astrologique",
      home:
        "Retour à l’accueil",
      astrology:
        "Découvrir l’astrologie",
      signs:
        "Les signes astrologiques",
      pricing:
        "Voir les analyses complètes",
    },
  },

  en: {
    metadata: {
      title:
        "Free Daily Horoscope | All 12 Zodiac Signs | Luna Astralis",
      description:
        "Discover your free daily horoscope for all 12 zodiac signs, including love, work, finances, well-being and astrological guidance.",
      ogTitle:
        "Free Daily Horoscope | Luna Astralis",
      ogDescription:
        "Read the free daily horoscope for your zodiac sign.",
      locale:
        "en_US",
      language:
        "en-US",
    },

    dateLocale:
      "en-US",

    hero: {
      eyebrow:
        "✦ Updated every day",
      title:
        "Free daily horoscope",
      intro:
        "Discover the main astrological trends influencing your day. Select your sign to read your horoscope for love, work, finances and well-being.",
    },

    signsSection: {
      kicker:
        "The 12 zodiac signs",
      title:
        "Choose your zodiac sign",
      description:
        "Discover the energies that may influence your day.",
      elementLabel:
        "Element",
    },

    signs: [
      {
        name:
          "Aries",
        slug:
          "belier",
        symbol:
          "♈",
        dates:
          "March 21 to April 19",
        element:
          "Fire",
        ariaLabel:
          "View today’s horoscope for Aries",
      },
      {
        name:
          "Taurus",
        slug:
          "taureau",
        symbol:
          "♉",
        dates:
          "April 20 to May 20",
        element:
          "Earth",
        ariaLabel:
          "View today’s horoscope for Taurus",
      },
      {
        name:
          "Gemini",
        slug:
          "gemeaux",
        symbol:
          "♊",
        dates:
          "May 21 to June 20",
        element:
          "Air",
        ariaLabel:
          "View today’s horoscope for Gemini",
      },
      {
        name:
          "Cancer",
        slug:
          "cancer",
        symbol:
          "♋",
        dates:
          "June 21 to July 22",
        element:
          "Water",
        ariaLabel:
          "View today’s horoscope for Cancer",
      },
      {
        name:
          "Leo",
        slug:
          "lion",
        symbol:
          "♌",
        dates:
          "July 23 to August 22",
        element:
          "Fire",
        ariaLabel:
          "View today’s horoscope for Leo",
      },
      {
        name:
          "Virgo",
        slug:
          "vierge",
        symbol:
          "♍",
        dates:
          "August 23 to September 22",
        element:
          "Earth",
        ariaLabel:
          "View today’s horoscope for Virgo",
      },
      {
        name:
          "Libra",
        slug:
          "balance",
        symbol:
          "♎",
        dates:
          "September 23 to October 22",
        element:
          "Air",
        ariaLabel:
          "View today’s horoscope for Libra",
      },
      {
        name:
          "Scorpio",
        slug:
          "scorpion",
        symbol:
          "♏",
        dates:
          "October 23 to November 21",
        element:
          "Water",
        ariaLabel:
          "View today’s horoscope for Scorpio",
      },
      {
        name:
          "Sagittarius",
        slug:
          "sagittaire",
        symbol:
          "♐",
        dates:
          "November 22 to December 21",
        element:
          "Fire",
        ariaLabel:
          "View today’s horoscope for Sagittarius",
      },
      {
        name:
          "Capricorn",
        slug:
          "capricorne",
        symbol:
          "♑",
        dates:
          "December 22 to January 19",
        element:
          "Earth",
        ariaLabel:
          "View today’s horoscope for Capricorn",
      },
      {
        name:
          "Aquarius",
        slug:
          "verseau",
        symbol:
          "♒",
        dates:
          "January 20 to February 18",
        element:
          "Air",
        ariaLabel:
          "View today’s horoscope for Aquarius",
      },
      {
        name:
          "Pisces",
        slug:
          "poissons",
        symbol:
          "♓",
        dates:
          "February 19 to March 20",
        element:
          "Water",
        ariaLabel:
          "View today’s horoscope for Pisces",
      },
    ],

    info: {
      title:
        "A new astrological reading every day",
      description:
        "The daily horoscope offers a general interpretation of the astrological influences associated with each sign. For a more personal analysis, your birth date, time and location are required.",
    },

    cta: {
      kicker:
        "Go further",
      title:
        "Your Sun sign tells only part of your story",
      description:
        "Discover your Sun, Moon, Ascendant, astrological houses and the main influences in your birth chart.",
      chartButton:
        "Create my free birth chart",
      compatibilityButton:
        "Test a compatibility",
    },

    navigation: {
      ariaLabel:
        "Astrology navigation",
      home:
        "Back to home",
      astrology:
        "Discover astrology",
      signs:
        "Zodiac signs",
      pricing:
        "View complete analyses",
    },
  },

  es: {
    metadata: {
      title:
        "Horóscopo diario gratis | Los 12 signos del zodiaco | Luna Astralis",
      description:
        "Descubre gratis tu horóscopo diario para los 12 signos del zodiaco: amor, trabajo, finanzas, bienestar y consejo astrológico.",
      ogTitle:
        "Horóscopo diario gratis | Luna Astralis",
      ogDescription:
        "Consulta gratis el horóscopo diario de tu signo zodiacal.",
      locale:
        "es_ES",
      language:
        "es-ES",
    },

    dateLocale:
      "es-ES",

    hero: {
      eyebrow:
        "✦ Actualizado cada día",
      title:
        "Horóscopo diario gratis",
      intro:
        "Descubre las principales tendencias astrológicas de tu día. Selecciona tu signo para consultar tu horóscopo en el amor, el trabajo, las finanzas y el bienestar.",
    },

    signsSection: {
      kicker:
        "Los 12 signos del zodiaco",
      title:
        "Elige tu signo zodiacal",
      description:
        "Consulta gratis las energías que podrían influir en tu día.",
      elementLabel:
        "Elemento",
    },

    signs: [
      {
        name:
          "Aries",
        slug:
          "belier",
        symbol:
          "♈",
        dates:
          "21 de marzo al 19 de abril",
        element:
          "Fuego",
        ariaLabel:
          "Ver el horóscopo diario de Aries",
      },
      {
        name:
          "Tauro",
        slug:
          "taureau",
        symbol:
          "♉",
        dates:
          "20 de abril al 20 de mayo",
        element:
          "Tierra",
        ariaLabel:
          "Ver el horóscopo diario de Tauro",
      },
      {
        name:
          "Géminis",
        slug:
          "gemeaux",
        symbol:
          "♊",
        dates:
          "21 de mayo al 20 de junio",
        element:
          "Aire",
        ariaLabel:
          "Ver el horóscopo diario de Géminis",
      },
      {
        name:
          "Cáncer",
        slug:
          "cancer",
        symbol:
          "♋",
        dates:
          "21 de junio al 22 de julio",
        element:
          "Agua",
        ariaLabel:
          "Ver el horóscopo diario de Cáncer",
      },
      {
        name:
          "Leo",
        slug:
          "lion",
        symbol:
          "♌",
        dates:
          "23 de julio al 22 de agosto",
        element:
          "Fuego",
        ariaLabel:
          "Ver el horóscopo diario de Leo",
      },
      {
        name:
          "Virgo",
        slug:
          "vierge",
        symbol:
          "♍",
        dates:
          "23 de agosto al 22 de septiembre",
        element:
          "Tierra",
        ariaLabel:
          "Ver el horóscopo diario de Virgo",
      },
      {
        name:
          "Libra",
        slug:
          "balance",
        symbol:
          "♎",
        dates:
          "23 de septiembre al 22 de octubre",
        element:
          "Aire",
        ariaLabel:
          "Ver el horóscopo diario de Libra",
      },
      {
        name:
          "Escorpio",
        slug:
          "scorpion",
        symbol:
          "♏",
        dates:
          "23 de octubre al 21 de noviembre",
        element:
          "Agua",
        ariaLabel:
          "Ver el horóscopo diario de Escorpio",
      },
      {
        name:
          "Sagitario",
        slug:
          "sagittaire",
        symbol:
          "♐",
        dates:
          "22 de noviembre al 21 de diciembre",
        element:
          "Fuego",
        ariaLabel:
          "Ver el horóscopo diario de Sagitario",
      },
      {
        name:
          "Capricornio",
        slug:
          "capricorne",
        symbol:
          "♑",
        dates:
          "22 de diciembre al 19 de enero",
        element:
          "Tierra",
        ariaLabel:
          "Ver el horóscopo diario de Capricornio",
      },
      {
        name:
          "Acuario",
        slug:
          "verseau",
        symbol:
          "♒",
        dates:
          "20 de enero al 18 de febrero",
        element:
          "Aire",
        ariaLabel:
          "Ver el horóscopo diario de Acuario",
      },
      {
        name:
          "Piscis",
        slug:
          "poissons",
        symbol:
          "♓",
        dates:
          "19 de febrero al 20 de marzo",
        element:
          "Agua",
        ariaLabel:
          "Ver el horóscopo diario de Piscis",
      },
    ],

    info: {
      title:
        "Una lectura astrológica cada día",
      description:
        "El horóscopo diario presenta una interpretación general de las influencias astrológicas asociadas a cada signo. Para obtener un análisis más personal, se necesitan tu fecha, hora y lugar de nacimiento.",
    },

    cta: {
      kicker:
        "Ve más allá",
      title:
        "Tu signo solar solo cuenta una parte de tu historia",
      description:
        "Descubre tu Sol, tu Luna, tu Ascendente, tus casas astrológicas y las principales influencias de tu carta natal.",
      chartButton:
        "Crear mi carta natal gratis",
      compatibilityButton:
        "Probar una compatibilidad",
    },

    navigation: {
      ariaLabel:
        "Navegación astrológica",
      home:
        "Volver al inicio",
      astrology:
        "Descubrir la astrología",
      signs:
        "Los signos zodiacales",
      pricing:
        "Ver los análisis completos",
    },
  },

  de: {
    metadata: {
      title:
        "Kostenloses Tageshoroskop | Alle 12 Sternzeichen | Luna Astralis",
      description:
        "Entdecken Sie kostenlos Ihr Tageshoroskop für alle 12 Sternzeichen: Liebe, Arbeit, Finanzen, Wohlbefinden und astrologischer Rat.",
      ogTitle:
        "Kostenloses Tageshoroskop | Luna Astralis",
      ogDescription:
        "Lesen Sie kostenlos das Tageshoroskop Ihres Sternzeichens.",
      locale:
        "de_DE",
      language:
        "de-DE",
    },

    dateLocale:
      "de-DE",

    hero: {
      eyebrow:
        "✦ Täglich aktualisiert",
      title:
        "Kostenloses Tageshoroskop",
      intro:
        "Entdecken Sie die wichtigsten astrologischen Tendenzen Ihres Tages. Wählen Sie Ihr Sternzeichen, um Ihr Horoskop für Liebe, Arbeit, Finanzen und Wohlbefinden zu lesen.",
    },

    signsSection: {
      kicker:
        "Die 12 Sternzeichen",
      title:
        "Wählen Sie Ihr Sternzeichen",
      description:
        "Entdecken Sie kostenlos die Energien, die Ihren Tag beeinflussen könnten.",
      elementLabel:
        "Element",
    },

    signs: [
      {
        name:
          "Widder",
        slug:
          "belier",
        symbol:
          "♈",
        dates:
          "21. März bis 19. April",
        element:
          "Feuer",
        ariaLabel:
          "Tageshoroskop für Widder anzeigen",
      },
      {
        name:
          "Stier",
        slug:
          "taureau",
        symbol:
          "♉",
        dates:
          "20. April bis 20. Mai",
        element:
          "Erde",
        ariaLabel:
          "Tageshoroskop für Stier anzeigen",
      },
      {
        name:
          "Zwillinge",
        slug:
          "gemeaux",
        symbol:
          "♊",
        dates:
          "21. Mai bis 20. Juni",
        element:
          "Luft",
        ariaLabel:
          "Tageshoroskop für Zwillinge anzeigen",
      },
      {
        name:
          "Krebs",
        slug:
          "cancer",
        symbol:
          "♋",
        dates:
          "21. Juni bis 22. Juli",
        element:
          "Wasser",
        ariaLabel:
          "Tageshoroskop für Krebs anzeigen",
      },
      {
        name:
          "Löwe",
        slug:
          "lion",
        symbol:
          "♌",
        dates:
          "23. Juli bis 22. August",
        element:
          "Feuer",
        ariaLabel:
          "Tageshoroskop für Löwe anzeigen",
      },
      {
        name:
          "Jungfrau",
        slug:
          "vierge",
        symbol:
          "♍",
        dates:
          "23. August bis 22. September",
        element:
          "Erde",
        ariaLabel:
          "Tageshoroskop für Jungfrau anzeigen",
      },
      {
        name:
          "Waage",
        slug:
          "balance",
        symbol:
          "♎",
        dates:
          "23. September bis 22. Oktober",
        element:
          "Luft",
        ariaLabel:
          "Tageshoroskop für Waage anzeigen",
      },
      {
        name:
          "Skorpion",
        slug:
          "scorpion",
        symbol:
          "♏",
        dates:
          "23. Oktober bis 21. November",
        element:
          "Wasser",
        ariaLabel:
          "Tageshoroskop für Skorpion anzeigen",
      },
      {
        name:
          "Schütze",
        slug:
          "sagittaire",
        symbol:
          "♐",
        dates:
          "22. November bis 21. Dezember",
        element:
          "Feuer",
        ariaLabel:
          "Tageshoroskop für Schütze anzeigen",
      },
      {
        name:
          "Steinbock",
        slug:
          "capricorne",
        symbol:
          "♑",
        dates:
          "22. Dezember bis 19. Januar",
        element:
          "Erde",
        ariaLabel:
          "Tageshoroskop für Steinbock anzeigen",
      },
      {
        name:
          "Wassermann",
        slug:
          "verseau",
        symbol:
          "♒",
        dates:
          "20. Januar bis 18. Februar",
        element:
          "Luft",
        ariaLabel:
          "Tageshoroskop für Wassermann anzeigen",
      },
      {
        name:
          "Fische",
        slug:
          "poissons",
        symbol:
          "♓",
        dates:
          "19. Februar bis 20. März",
        element:
          "Wasser",
        ariaLabel:
          "Tageshoroskop für Fische anzeigen",
      },
    ],

    info: {
      title:
        "Jeden Tag eine astrologische Deutung",
      description:
        "Das Tageshoroskop bietet eine allgemeine Deutung der astrologischen Einflüsse, die jedem Sternzeichen zugeordnet sind. Für eine persönlichere Analyse werden Geburtsdatum, Geburtszeit und Geburtsort benötigt.",
    },

    cta: {
      kicker:
        "Gehen Sie weiter",
      title:
        "Ihr Sonnenzeichen erzählt nur einen Teil Ihrer Geschichte",
      description:
        "Entdecken Sie Sonne, Mond, Aszendent, astrologische Häuser und die wichtigsten Einflüsse Ihres Geburtshoroskops.",
      chartButton:
        "Kostenloses Geburtshoroskop erstellen",
      compatibilityButton:
        "Kompatibilität testen",
    },

    navigation: {
      ariaLabel:
        "Astrologische Navigation",
      home:
        "Zurück zur Startseite",
      astrology:
        "Astrologie entdecken",
      signs:
        "Die Sternzeichen",
      pricing:
        "Vollständige Analysen ansehen",
    },
  },

  it: {
    metadata: {
      title:
        "Oroscopo del giorno gratis | I 12 segni zodiacali | Luna Astralis",
      description:
        "Scopri gratuitamente il tuo oroscopo del giorno per tutti i 12 segni zodiacali: amore, lavoro, finanze, benessere e consiglio astrologico.",
      ogTitle:
        "Oroscopo del giorno gratis | Luna Astralis",
      ogDescription:
        "Consulta gratuitamente l’oroscopo del giorno del tuo segno zodiacale.",
      locale:
        "it_IT",
      language:
        "it-IT",
    },

    dateLocale:
      "it-IT",

    hero: {
      eyebrow:
        "✦ Aggiornato ogni giorno",
      title:
        "Oroscopo del giorno gratis",
      intro:
        "Scopri le principali tendenze astrologiche della tua giornata. Seleziona il tuo segno per consultare l’oroscopo di amore, lavoro, finanze e benessere.",
    },

    signsSection: {
      kicker:
        "I 12 segni zodiacali",
      title:
        "Scegli il tuo segno zodiacale",
      description:
        "Consulta gratuitamente le energie che potrebbero influenzare la tua giornata.",
      elementLabel:
        "Elemento",
    },

    signs: [
      {
        name:
          "Ariete",
        slug:
          "belier",
        symbol:
          "♈",
        dates:
          "21 marzo - 19 aprile",
        element:
          "Fuoco",
        ariaLabel:
          "Vedi l’oroscopo del giorno dell’Ariete",
      },
      {
        name:
          "Toro",
        slug:
          "taureau",
        symbol:
          "♉",
        dates:
          "20 aprile - 20 maggio",
        element:
          "Terra",
        ariaLabel:
          "Vedi l’oroscopo del giorno del Toro",
      },
      {
        name:
          "Gemelli",
        slug:
          "gemeaux",
        symbol:
          "♊",
        dates:
          "21 maggio - 20 giugno",
        element:
          "Aria",
        ariaLabel:
          "Vedi l’oroscopo del giorno dei Gemelli",
      },
      {
        name:
          "Cancro",
        slug:
          "cancer",
        symbol:
          "♋",
        dates:
          "21 giugno - 22 luglio",
        element:
          "Acqua",
        ariaLabel:
          "Vedi l’oroscopo del giorno del Cancro",
      },
      {
        name:
          "Leone",
        slug:
          "lion",
        symbol:
          "♌",
        dates:
          "23 luglio - 22 agosto",
        element:
          "Fuoco",
        ariaLabel:
          "Vedi l’oroscopo del giorno del Leone",
      },
      {
        name:
          "Vergine",
        slug:
          "vierge",
        symbol:
          "♍",
        dates:
          "23 agosto - 22 settembre",
        element:
          "Terra",
        ariaLabel:
          "Vedi l’oroscopo del giorno della Vergine",
      },
      {
        name:
          "Bilancia",
        slug:
          "balance",
        symbol:
          "♎",
        dates:
          "23 settembre - 22 ottobre",
        element:
          "Aria",
        ariaLabel:
          "Vedi l’oroscopo del giorno della Bilancia",
      },
      {
        name:
          "Scorpione",
        slug:
          "scorpion",
        symbol:
          "♏",
        dates:
          "23 ottobre - 21 novembre",
        element:
          "Acqua",
        ariaLabel:
          "Vedi l’oroscopo del giorno dello Scorpione",
      },
      {
        name:
          "Sagittario",
        slug:
          "sagittaire",
        symbol:
          "♐",
        dates:
          "22 novembre - 21 dicembre",
        element:
          "Fuoco",
        ariaLabel:
          "Vedi l’oroscopo del giorno del Sagittario",
      },
      {
        name:
          "Capricorno",
        slug:
          "capricorne",
        symbol:
          "♑",
        dates:
          "22 dicembre - 19 gennaio",
        element:
          "Terra",
        ariaLabel:
          "Vedi l’oroscopo del giorno del Capricorno",
      },
      {
        name:
          "Acquario",
        slug:
          "verseau",
        symbol:
          "♒",
        dates:
          "20 gennaio - 18 febbraio",
        element:
          "Aria",
        ariaLabel:
          "Vedi l’oroscopo del giorno dell’Acquario",
      },
      {
        name:
          "Pesci",
        slug:
          "poissons",
        symbol:
          "♓",
        dates:
          "19 febbraio - 20 marzo",
        element:
          "Acqua",
        ariaLabel:
          "Vedi l’oroscopo del giorno dei Pesci",
      },
    ],

    info: {
      title:
        "Una lettura astrologica ogni giorno",
      description:
        "L’oroscopo del giorno presenta un’interpretazione generale delle influenze astrologiche associate a ogni segno. Per un’analisi più personale sono necessari data, ora e luogo di nascita.",
    },

    cta: {
      kicker:
        "Vai oltre",
      title:
        "Il tuo segno solare racconta solo una parte della tua storia",
      description:
        "Scopri il tuo Sole, la tua Luna, il tuo Ascendente, le case astrologiche e le principali influenze del tuo tema natale.",
      chartButton:
        "Crea il mio tema natale gratuito",
      compatibilityButton:
        "Prova una compatibilità",
    },

    navigation: {
      ariaLabel:
        "Navigazione astrologica",
      home:
        "Torna alla home",
      astrology:
        "Scopri l’astrologia",
      signs:
        "I segni zodiacali",
      pricing:
        "Vedi le analisi complete",
    },
  },

  pt: {
    metadata: {
      title:
        "Horóscopo diário grátis | Os 12 signos do zodíaco | Luna Astralis",
      description:
        "Descubra gratuitamente seu horóscopo diário para os 12 signos do zodíaco: amor, trabalho, finanças, bem-estar e conselho astrológico.",
      ogTitle:
        "Horóscopo diário grátis | Luna Astralis",
      ogDescription:
        "Consulte gratuitamente o horóscopo diário do seu signo.",
      locale:
        "pt_PT",
      language:
        "pt-PT",
    },

    dateLocale:
      "pt-PT",

    hero: {
      eyebrow:
        "✦ Atualizado todos os dias",
      title:
        "Horóscopo diário grátis",
      intro:
        "Descubra as principais tendências astrológicas do seu dia. Selecione seu signo para consultar seu horóscopo no amor, trabalho, finanças e bem-estar.",
    },

    signsSection: {
      kicker:
        "Os 12 signos do zodíaco",
      title:
        "Escolha seu signo",
      description:
        "Consulte gratuitamente as energias que podem influenciar seu dia.",
      elementLabel:
        "Elemento",
    },

    signs: [
      {
        name:
          "Áries",
        slug:
          "belier",
        symbol:
          "♈",
        dates:
          "21 de março a 19 de abril",
        element:
          "Fogo",
        ariaLabel:
          "Ver o horóscopo diário de Áries",
      },
      {
        name:
          "Touro",
        slug:
          "taureau",
        symbol:
          "♉",
        dates:
          "20 de abril a 20 de maio",
        element:
          "Terra",
        ariaLabel:
          "Ver o horóscopo diário de Touro",
      },
      {
        name:
          "Gêmeos",
        slug:
          "gemeaux",
        symbol:
          "♊",
        dates:
          "21 de maio a 20 de junho",
        element:
          "Ar",
        ariaLabel:
          "Ver o horóscopo diário de Gêmeos",
      },
      {
        name:
          "Câncer",
        slug:
          "cancer",
        symbol:
          "♋",
        dates:
          "21 de junho a 22 de julho",
        element:
          "Água",
        ariaLabel:
          "Ver o horóscopo diário de Câncer",
      },
      {
        name:
          "Leão",
        slug:
          "lion",
        symbol:
          "♌",
        dates:
          "23 de julho a 22 de agosto",
        element:
          "Fogo",
        ariaLabel:
          "Ver o horóscopo diário de Leão",
      },
      {
        name:
          "Virgem",
        slug:
          "vierge",
        symbol:
          "♍",
        dates:
          "23 de agosto a 22 de setembro",
        element:
          "Terra",
        ariaLabel:
          "Ver o horóscopo diário de Virgem",
      },
      {
        name:
          "Libra",
        slug:
          "balance",
        symbol:
          "♎",
        dates:
          "23 de setembro a 22 de outubro",
        element:
          "Ar",
        ariaLabel:
          "Ver o horóscopo diário de Libra",
      },
      {
        name:
          "Escorpião",
        slug:
          "scorpion",
        symbol:
          "♏",
        dates:
          "23 de outubro a 21 de novembro",
        element:
          "Água",
        ariaLabel:
          "Ver o horóscopo diário de Escorpião",
      },
      {
        name:
          "Sagitário",
        slug:
          "sagittaire",
        symbol:
          "♐",
        dates:
          "22 de novembro a 21 de dezembro",
        element:
          "Fogo",
        ariaLabel:
          "Ver o horóscopo diário de Sagitário",
      },
      {
        name:
          "Capricórnio",
        slug:
          "capricorne",
        symbol:
          "♑",
        dates:
          "22 de dezembro a 19 de janeiro",
        element:
          "Terra",
        ariaLabel:
          "Ver o horóscopo diário de Capricórnio",
      },
      {
        name:
          "Aquário",
        slug:
          "verseau",
        symbol:
          "♒",
        dates:
          "20 de janeiro a 18 de fevereiro",
        element:
          "Ar",
        ariaLabel:
          "Ver o horóscopo diário de Aquário",
      },
      {
        name:
          "Peixes",
        slug:
          "poissons",
        symbol:
          "♓",
        dates:
          "19 de fevereiro a 20 de março",
        element:
          "Água",
        ariaLabel:
          "Ver o horóscopo diário de Peixes",
      },
    ],

    info: {
      title:
        "Uma leitura astrológica todos os dias",
      description:
        "O horóscopo diário apresenta uma interpretação geral das influências astrológicas associadas a cada signo. Para uma análise mais pessoal, são necessários data, hora e local de nascimento.",
    },

    cta: {
      kicker:
        "Vá mais longe",
      title:
        "Seu signo solar conta apenas uma parte da sua história",
      description:
        "Descubra seu Sol, sua Lua, seu Ascendente, suas casas astrológicas e as principais influências do seu mapa natal.",
      chartButton:
        "Criar meu mapa natal gratuito",
      compatibilityButton:
        "Testar uma compatibilidade",
    },

    navigation: {
      ariaLabel:
        "Navegação astrológica",
      home:
        "Voltar ao início",
      astrology:
        "Descobrir a astrologia",
      signs:
        "Os signos do zodíaco",
      pricing:
        "Ver as análises completas",
    },
  },
};
