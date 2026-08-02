// i18n/pages/astrologie/signes.ts

import type {
  Locale,
} from "@/i18n/config";

export type AstrologySign = {
  symbol: string;
  name: string;
  dates: string;
  element: string;
  description: string;
  slug: string;
};

export type AstrologySignsPageText = {
  metadata: {
    title: string;
    description: string;
  };

  hero: {
    badge: string;
    title: string;
    description: string;
    chartButton: string;
    guidesButton: string;
  };

  library: {
    kicker: string;
    title: string;
    description: string;
    discoverLabel: string;
  };

  signs: AstrologySign[];

  callout: {
    badge: string;
    title: string;
    description: string;
    button: string;
  };
};

export const SIGNES_TRANSLATIONS:
  Record<
    Locale,
    AstrologySignsPageText
  > = {
  fr: {
    metadata: {
      title:
        "Les 12 signes astrologiques | Luna Astralis",

      description:
        "Découvrez la personnalité, les forces, les défis et les grandes caractéristiques des douze signes astrologiques.",
    },

    hero: {
      badge:
        "Les douze signes du zodiaque",

      title:
        "Découvrez votre signe astrologique",

      description:
        "Explorez la personnalité, les forces, les défis, les émotions et les grandes énergies associées à chacun des douze signes astrologiques.",

      chartButton:
        "✨ Créer ma carte du ciel",

      guidesButton:
        "Retour aux guides",
    },

    library: {
      kicker:
        "Bibliothèque astrologique",

      title:
        "Les 12 signes astrologiques",

      description:
        "Sélectionnez un signe pour découvrir son portrait astrologique complet.",

      discoverLabel:
        "Découvrir le signe →",
    },

    signs: [
      {
        symbol:
          "♈",

        name:
          "Bélier",

        dates:
          "21 mars au 19 avril",

        element:
          "Feu",

        description:
          "Énergie, courage, spontanéité et désir d’avancer.",

        slug:
          "belier",
      },

      {
        symbol:
          "♉",

        name:
          "Taureau",

        dates:
          "20 avril au 20 mai",

        element:
          "Terre",

        description:
          "Stabilité, persévérance, sensualité et attachement aux valeurs sûres.",

        slug:
          "taureau",
      },

      {
        symbol:
          "♊",

        name:
          "Gémeaux",

        dates:
          "21 mai au 20 juin",

        element:
          "Air",

        description:
          "Curiosité, communication, mouvement et vivacité intellectuelle.",

        slug:
          "gemeaux",
      },

      {
        symbol:
          "♋",

        name:
          "Cancer",

        dates:
          "21 juin au 22 juillet",

        element:
          "Eau",

        description:
          "Sensibilité, intuition, protection et attachement aux racines.",

        slug:
          "cancer",
      },

      {
        symbol:
          "♌",

        name:
          "Lion",

        dates:
          "23 juillet au 22 août",

        element:
          "Feu",

        description:
          "Créativité, générosité, rayonnement et besoin d’expression.",

        slug:
          "lion",
      },

      {
        symbol:
          "♍",

        name:
          "Vierge",

        dates:
          "23 août au 22 septembre",

        element:
          "Terre",

        description:
          "Analyse, précision, sens du service et recherche d’amélioration.",

        slug:
          "vierge",
      },

      {
        symbol:
          "♎",

        name:
          "Balance",

        dates:
          "23 septembre au 22 octobre",

        element:
          "Air",

        description:
          "Harmonie, diplomatie, équilibre et importance des relations.",

        slug:
          "balance",
      },

      {
        symbol:
          "♏",

        name:
          "Scorpion",

        dates:
          "23 octobre au 21 novembre",

        element:
          "Eau",

        description:
          "Intensité, profondeur, transformation et puissance émotionnelle.",

        slug:
          "scorpion",
      },

      {
        symbol:
          "♐",

        name:
          "Sagittaire",

        dates:
          "22 novembre au 21 décembre",

        element:
          "Feu",

        description:
          "Liberté, enthousiasme, exploration et recherche de sens.",

        slug:
          "sagittaire",
      },

      {
        symbol:
          "♑",

        name:
          "Capricorne",

        dates:
          "22 décembre au 19 janvier",

        element:
          "Terre",

        description:
          "Ambition, discipline, responsabilité et vision à long terme.",

        slug:
          "capricorne",
      },

      {
        symbol:
          "♒",

        name:
          "Verseau",

        dates:
          "20 janvier au 18 février",

        element:
          "Air",

        description:
          "Indépendance, originalité, innovation et ouverture collective.",

        slug:
          "verseau",
      },

      {
        symbol:
          "♓",

        name:
          "Poissons",

        dates:
          "19 février au 20 mars",

        element:
          "Eau",

        description:
          "Intuition, compassion, imagination et grande réceptivité.",

        slug:
          "poissons",
      },
    ],

    callout: {
      badge:
        "Au-delà de votre signe solaire",

      title:
        "Votre thème natal raconte toute votre histoire",

      description:
        "Votre Soleil n’est qu’une partie de votre personnalité. Découvrez également votre Lune, votre Ascendant et votre roue astrologique.",

      button:
        "Découvrir mon thème natal",
    },
  },

  en: {
    metadata: {
      title:
        "The 12 Zodiac Signs | Luna Astralis",

      description:
        "Discover the personality, strengths, challenges and main characteristics of the twelve zodiac signs.",
    },

    hero: {
      badge:
        "The twelve signs of the zodiac",

      title:
        "Discover your zodiac sign",

      description:
        "Explore the personality, strengths, challenges, emotions and main energies associated with each of the twelve zodiac signs.",

      chartButton:
        "✨ Create my birth chart",

      guidesButton:
        "Back to the guides",
    },

    library: {
      kicker:
        "Astrology library",

      title:
        "The 12 zodiac signs",

      description:
        "Select a sign to discover its complete astrological profile.",

      discoverLabel:
        "Discover this sign →",
    },

    signs: [
      {
        symbol:
          "♈",

        name:
          "Aries",

        dates:
          "March 21 to April 19",

        element:
          "Fire",

        description:
          "Energy, courage, spontaneity and the desire to move forward.",

        slug:
          "belier",
      },

      {
        symbol:
          "♉",

        name:
          "Taurus",

        dates:
          "April 20 to May 20",

        element:
          "Earth",

        description:
          "Stability, perseverance, sensuality and attachment to secure values.",

        slug:
          "taureau",
      },

      {
        symbol:
          "♊",

        name:
          "Gemini",

        dates:
          "May 21 to June 20",

        element:
          "Air",

        description:
          "Curiosity, communication, movement and intellectual liveliness.",

        slug:
          "gemeaux",
      },

      {
        symbol:
          "♋",

        name:
          "Cancer",

        dates:
          "June 21 to July 22",

        element:
          "Water",

        description:
          "Sensitivity, intuition, protection and attachment to one’s roots.",

        slug:
          "cancer",
      },

      {
        symbol:
          "♌",

        name:
          "Leo",

        dates:
          "July 23 to August 22",

        element:
          "Fire",

        description:
          "Creativity, generosity, radiance and the need for self-expression.",

        slug:
          "lion",
      },

      {
        symbol:
          "♍",

        name:
          "Virgo",

        dates:
          "August 23 to September 22",

        element:
          "Earth",

        description:
          "Analysis, precision, service and the desire for improvement.",

        slug:
          "vierge",
      },

      {
        symbol:
          "♎",

        name:
          "Libra",

        dates:
          "September 23 to October 22",

        element:
          "Air",

        description:
          "Harmony, diplomacy, balance and the importance of relationships.",

        slug:
          "balance",
      },

      {
        symbol:
          "♏",

        name:
          "Scorpio",

        dates:
          "October 23 to November 21",

        element:
          "Water",

        description:
          "Intensity, depth, transformation and emotional power.",

        slug:
          "scorpion",
      },

      {
        symbol:
          "♐",

        name:
          "Sagittarius",

        dates:
          "November 22 to December 21",

        element:
          "Fire",

        description:
          "Freedom, enthusiasm, exploration and the search for meaning.",

        slug:
          "sagittaire",
      },

      {
        symbol:
          "♑",

        name:
          "Capricorn",

        dates:
          "December 22 to January 19",

        element:
          "Earth",

        description:
          "Ambition, discipline, responsibility and long-term vision.",

        slug:
          "capricorne",
      },

      {
        symbol:
          "♒",

        name:
          "Aquarius",

        dates:
          "January 20 to February 18",

        element:
          "Air",

        description:
          "Independence, originality, innovation and collective awareness.",

        slug:
          "verseau",
      },

      {
        symbol:
          "♓",

        name:
          "Pisces",

        dates:
          "February 19 to March 20",

        element:
          "Water",

        description:
          "Intuition, compassion, imagination and strong receptivity.",

        slug:
          "poissons",
      },
    ],

    callout: {
      badge:
        "Beyond your Sun sign",

      title:
        "Your birth chart tells your whole story",

      description:
        "Your Sun is only one part of your personality. Discover your Moon, your Rising sign and your complete astrological wheel.",

      button:
        "Discover my birth chart",
    },
  },

  es: {
    metadata: {
      title:
        "Los 12 signos del zodiaco | Luna Astralis",

      description:
        "Descubre la personalidad, las fortalezas, los desafíos y las principales características de los doce signos del zodiaco.",
    },

    hero: {
      badge:
        "Los doce signos del zodiaco",

      title:
        "Descubre tu signo zodiacal",

      description:
        "Explora la personalidad, las fortalezas, los desafíos, las emociones y las principales energías asociadas con cada uno de los doce signos del zodiaco.",

      chartButton:
        "✨ Crear mi carta natal",

      guidesButton:
        "Volver a las guías",
    },

    library: {
      kicker:
        "Biblioteca astrológica",

      title:
        "Los 12 signos zodiacales",

      description:
        "Selecciona un signo para descubrir su perfil astrológico completo.",

      discoverLabel:
        "Descubrir el signo →",
    },

    signs: [
      {
        symbol:
          "♈",

        name:
          "Aries",

        dates:
          "21 de marzo al 19 de abril",

        element:
          "Fuego",

        description:
          "Energía, valentía, espontaneidad y deseo de avanzar.",

        slug:
          "belier",
      },

      {
        symbol:
          "♉",

        name:
          "Tauro",

        dates:
          "20 de abril al 20 de mayo",

        element:
          "Tierra",

        description:
          "Estabilidad, perseverancia, sensualidad y apego a los valores seguros.",

        slug:
          "taureau",
      },

      {
        symbol:
          "♊",

        name:
          "Géminis",

        dates:
          "21 de mayo al 20 de junio",

        element:
          "Aire",

        description:
          "Curiosidad, comunicación, movimiento y vivacidad intelectual.",

        slug:
          "gemeaux",
      },

      {
        symbol:
          "♋",

        name:
          "Cáncer",

        dates:
          "21 de junio al 22 de julio",

        element:
          "Agua",

        description:
          "Sensibilidad, intuición, protección y apego a las raíces.",

        slug:
          "cancer",
      },

      {
        symbol:
          "♌",

        name:
          "Leo",

        dates:
          "23 de julio al 22 de agosto",

        element:
          "Fuego",

        description:
          "Creatividad, generosidad, brillo y necesidad de expresión.",

        slug:
          "lion",
      },

      {
        symbol:
          "♍",

        name:
          "Virgo",

        dates:
          "23 de agosto al 22 de septiembre",

        element:
          "Tierra",

        description:
          "Análisis, precisión, sentido del servicio y búsqueda de mejora.",

        slug:
          "vierge",
      },

      {
        symbol:
          "♎",

        name:
          "Libra",

        dates:
          "23 de septiembre al 22 de octubre",

        element:
          "Aire",

        description:
          "Armonía, diplomacia, equilibrio e importancia de las relaciones.",

        slug:
          "balance",
      },

      {
        symbol:
          "♏",

        name:
          "Escorpio",

        dates:
          "23 de octubre al 21 de noviembre",

        element:
          "Agua",

        description:
          "Intensidad, profundidad, transformación y poder emocional.",

        slug:
          "scorpion",
      },

      {
        symbol:
          "♐",

        name:
          "Sagitario",

        dates:
          "22 de noviembre al 21 de diciembre",

        element:
          "Fuego",

        description:
          "Libertad, entusiasmo, exploración y búsqueda de sentido.",

        slug:
          "sagittaire",
      },

      {
        symbol:
          "♑",

        name:
          "Capricornio",

        dates:
          "22 de diciembre al 19 de enero",

        element:
          "Tierra",

        description:
          "Ambición, disciplina, responsabilidad y visión a largo plazo.",

        slug:
          "capricorne",
      },

      {
        symbol:
          "♒",

        name:
          "Acuario",

        dates:
          "20 de enero al 18 de febrero",

        element:
          "Aire",

        description:
          "Independencia, originalidad, innovación y apertura colectiva.",

        slug:
          "verseau",
      },

      {
        symbol:
          "♓",

        name:
          "Piscis",

        dates:
          "19 de febrero al 20 de marzo",

        element:
          "Agua",

        description:
          "Intuición, compasión, imaginación y gran receptividad.",

        slug:
          "poissons",
      },
    ],

    callout: {
      badge:
        "Más allá de tu signo solar",

      title:
        "Tu carta natal cuenta toda tu historia",

      description:
        "Tu Sol es solo una parte de tu personalidad. Descubre también tu Luna, tu Ascendente y tu rueda astrológica completa.",

      button:
        "Descubrir mi carta natal",
    },
  },

  de: {
    metadata: {
      title:
        "Die 12 Sternzeichen | Luna Astralis",

      description:
        "Entdecken Sie Persönlichkeit, Stärken, Herausforderungen und die wichtigsten Eigenschaften der zwölf Sternzeichen.",
    },

    hero: {
      badge:
        "Die zwölf Zeichen des Tierkreises",

      title:
        "Entdecken Sie Ihr Sternzeichen",

      description:
        "Entdecken Sie Persönlichkeit, Stärken, Herausforderungen, Gefühle und die wichtigsten Energien jedes der zwölf Sternzeichen.",

      chartButton:
        "✨ Mein Geburtshoroskop erstellen",

      guidesButton:
        "Zurück zu den Ratgebern",
    },

    library: {
      kicker:
        "Astrologische Bibliothek",

      title:
        "Die 12 Sternzeichen",

      description:
        "Wählen Sie ein Zeichen aus, um sein vollständiges astrologisches Profil zu entdecken.",

      discoverLabel:
        "Sternzeichen entdecken →",
    },

    signs: [
      {
        symbol:
          "♈",

        name:
          "Widder",

        dates:
          "21. März bis 19. April",

        element:
          "Feuer",

        description:
          "Energie, Mut, Spontaneität und der Wunsch, voranzugehen.",

        slug:
          "belier",
      },

      {
        symbol:
          "♉",

        name:
          "Stier",

        dates:
          "20. April bis 20. Mai",

        element:
          "Erde",

        description:
          "Stabilität, Ausdauer, Sinnlichkeit und Verbundenheit mit sicheren Werten.",

        slug:
          "taureau",
      },

      {
        symbol:
          "♊",

        name:
          "Zwillinge",

        dates:
          "21. Mai bis 20. Juni",

        element:
          "Luft",

        description:
          "Neugier, Kommunikation, Bewegung und geistige Lebendigkeit.",

        slug:
          "gemeaux",
      },

      {
        symbol:
          "♋",

        name:
          "Krebs",

        dates:
          "21. Juni bis 22. Juli",

        element:
          "Wasser",

        description:
          "Sensibilität, Intuition, Schutz und Verbundenheit mit den eigenen Wurzeln.",

        slug:
          "cancer",
      },

      {
        symbol:
          "♌",

        name:
          "Löwe",

        dates:
          "23. Juli bis 22. August",

        element:
          "Feuer",

        description:
          "Kreativität, Großzügigkeit, Ausstrahlung und Ausdrucksbedürfnis.",

        slug:
          "lion",
      },

      {
        symbol:
          "♍",

        name:
          "Jungfrau",

        dates:
          "23. August bis 22. September",

        element:
          "Erde",

        description:
          "Analyse, Genauigkeit, Hilfsbereitschaft und der Wunsch nach Verbesserung.",

        slug:
          "vierge",
      },

      {
        symbol:
          "♎",

        name:
          "Waage",

        dates:
          "23. September bis 22. Oktober",

        element:
          "Luft",

        description:
          "Harmonie, Diplomatie, Gleichgewicht und die Bedeutung von Beziehungen.",

        slug:
          "balance",
      },

      {
        symbol:
          "♏",

        name:
          "Skorpion",

        dates:
          "23. Oktober bis 21. November",

        element:
          "Wasser",

        description:
          "Intensität, Tiefe, Transformation und emotionale Kraft.",

        slug:
          "scorpion",
      },

      {
        symbol:
          "♐",

        name:
          "Schütze",

        dates:
          "22. November bis 21. Dezember",

        element:
          "Feuer",

        description:
          "Freiheit, Begeisterung, Entdeckung und Sinnsuche.",

        slug:
          "sagittaire",
      },

      {
        symbol:
          "♑",

        name:
          "Steinbock",

        dates:
          "22. Dezember bis 19. Januar",

        element:
          "Erde",

        description:
          "Ehrgeiz, Disziplin, Verantwortung und langfristige Planung.",

        slug:
          "capricorne",
      },

      {
        symbol:
          "♒",

        name:
          "Wassermann",

        dates:
          "20. Januar bis 18. Februar",

        element:
          "Luft",

        description:
          "Unabhängigkeit, Originalität, Innovation und gesellschaftliche Offenheit.",

        slug:
          "verseau",
      },

      {
        symbol:
          "♓",

        name:
          "Fische",

        dates:
          "19. Februar bis 20. März",

        element:
          "Wasser",

        description:
          "Intuition, Mitgefühl, Fantasie und große Empfänglichkeit.",

        slug:
          "poissons",
      },
    ],

    callout: {
      badge:
        "Mehr als nur Ihr Sonnenzeichen",

      title:
        "Ihr Geburtshoroskop erzählt Ihre ganze Geschichte",

      description:
        "Ihre Sonne ist nur ein Teil Ihrer Persönlichkeit. Entdecken Sie auch Ihren Mond, Ihren Aszendenten und Ihr vollständiges astrologisches Rad.",

      button:
        "Mein Geburtshoroskop entdecken",
    },
  },

  it: {
    metadata: {
      title:
        "I 12 segni zodiacali | Luna Astralis",

      description:
        "Scopri la personalità, i punti di forza, le sfide e le principali caratteristiche dei dodici segni zodiacali.",
    },

    hero: {
      badge:
        "I dodici segni dello zodiaco",

      title:
        "Scopri il tuo segno zodiacale",

      description:
        "Esplora la personalità, i punti di forza, le sfide, le emozioni e le principali energie associate a ciascuno dei dodici segni zodiacali.",

      chartButton:
        "✨ Creare il mio tema natale",

      guidesButton:
        "Tornare alle guide",
    },

    library: {
      kicker:
        "Biblioteca astrologica",

      title:
        "I 12 segni zodiacali",

      description:
        "Seleziona un segno per scoprire il suo profilo astrologico completo.",

      discoverLabel:
        "Scoprire il segno →",
    },

    signs: [
      {
        symbol:
          "♈",

        name:
          "Ariete",

        dates:
          "21 marzo - 19 aprile",

        element:
          "Fuoco",

        description:
          "Energia, coraggio, spontaneità e desiderio di avanzare.",

        slug:
          "belier",
      },

      {
        symbol:
          "♉",

        name:
          "Toro",

        dates:
          "20 aprile - 20 maggio",

        element:
          "Terra",

        description:
          "Stabilità, perseveranza, sensualità e attaccamento ai valori sicuri.",

        slug:
          "taureau",
      },

      {
        symbol:
          "♊",

        name:
          "Gemelli",

        dates:
          "21 maggio - 20 giugno",

        element:
          "Aria",

        description:
          "Curiosità, comunicazione, movimento e vivacità intellettuale.",

        slug:
          "gemeaux",
      },

      {
        symbol:
          "♋",

        name:
          "Cancro",

        dates:
          "21 giugno - 22 luglio",

        element:
          "Acqua",

        description:
          "Sensibilità, intuizione, protezione e legame con le proprie radici.",

        slug:
          "cancer",
      },

      {
        symbol:
          "♌",

        name:
          "Leone",

        dates:
          "23 luglio - 22 agosto",

        element:
          "Fuoco",

        description:
          "Creatività, generosità, splendore e bisogno di espressione.",

        slug:
          "lion",
      },

      {
        symbol:
          "♍",

        name:
          "Vergine",

        dates:
          "23 agosto - 22 settembre",

        element:
          "Terra",

        description:
          "Analisi, precisione, senso del servizio e ricerca di miglioramento.",

        slug:
          "vierge",
      },

      {
        symbol:
          "♎",

        name:
          "Bilancia",

        dates:
          "23 settembre - 22 ottobre",

        element:
          "Aria",

        description:
          "Armonia, diplomazia, equilibrio e importanza delle relazioni.",

        slug:
          "balance",
      },

      {
        symbol:
          "♏",

        name:
          "Scorpione",

        dates:
          "23 ottobre - 21 novembre",

        element:
          "Acqua",

        description:
          "Intensità, profondità, trasformazione e potere emotivo.",

        slug:
          "scorpion",
      },

      {
        symbol:
          "♐",

        name:
          "Sagittario",

        dates:
          "22 novembre - 21 dicembre",

        element:
          "Fuoco",

        description:
          "Libertà, entusiasmo, esplorazione e ricerca di significato.",

        slug:
          "sagittaire",
      },

      {
        symbol:
          "♑",

        name:
          "Capricorno",

        dates:
          "22 dicembre - 19 gennaio",

        element:
          "Terra",

        description:
          "Ambizione, disciplina, responsabilità e visione a lungo termine.",

        slug:
          "capricorne",
      },

      {
        symbol:
          "♒",

        name:
          "Acquario",

        dates:
          "20 gennaio - 18 febbraio",

        element:
          "Aria",

        description:
          "Indipendenza, originalità, innovazione e apertura collettiva.",

        slug:
          "verseau",
      },

      {
        symbol:
          "♓",

        name:
          "Pesci",

        dates:
          "19 febbraio - 20 marzo",

        element:
          "Acqua",

        description:
          "Intuizione, compassione, immaginazione e grande ricettività.",

        slug:
          "poissons",
      },
    ],

    callout: {
      badge:
        "Oltre il tuo segno solare",

      title:
        "Il tuo tema natale racconta tutta la tua storia",

      description:
        "Il Sole è soltanto una parte della tua personalità. Scopri anche la Luna, l’Ascendente e la tua ruota astrologica completa.",

      button:
        "Scoprire il mio tema natale",
    },
  },

  pt: {
    metadata: {
      title:
        "Os 12 signos do zodíaco | Luna Astralis",

      description:
        "Descubra a personalidade, as forças, os desafios e as principais características dos doze signos do zodíaco.",
    },

    hero: {
      badge:
        "Os doze signos do zodíaco",

      title:
        "Descubra seu signo astrológico",

      description:
        "Explore a personalidade, as forças, os desafios, as emoções e as principais energias associadas a cada um dos doze signos do zodíaco.",

      chartButton:
        "✨ Criar meu mapa astral",

      guidesButton:
        "Voltar aos guias",
    },

    library: {
      kicker:
        "Biblioteca astrológica",

      title:
        "Os 12 signos astrológicos",

      description:
        "Selecione um signo para descobrir seu perfil astrológico completo.",

      discoverLabel:
        "Descobrir o signo →",
    },

    signs: [
      {
        symbol:
          "♈",

        name:
          "Áries",

        dates:
          "21 de março a 19 de abril",

        element:
          "Fogo",

        description:
          "Energia, coragem, espontaneidade e desejo de avançar.",

        slug:
          "belier",
      },

      {
        symbol:
          "♉",

        name:
          "Touro",

        dates:
          "20 de abril a 20 de maio",

        element:
          "Terra",

        description:
          "Estabilidade, perseverança, sensualidade e apego a valores seguros.",

        slug:
          "taureau",
      },

      {
        symbol:
          "♊",

        name:
          "Gêmeos",

        dates:
          "21 de maio a 20 de junho",

        element:
          "Ar",

        description:
          "Curiosidade, comunicação, movimento e vivacidade intelectual.",

        slug:
          "gemeaux",
      },

      {
        symbol:
          "♋",

        name:
          "Câncer",

        dates:
          "21 de junho a 22 de julho",

        element:
          "Água",

        description:
          "Sensibilidade, intuição, proteção e ligação com as raízes.",

        slug:
          "cancer",
      },

      {
        symbol:
          "♌",

        name:
          "Leão",

        dates:
          "23 de julho a 22 de agosto",

        element:
          "Fogo",

        description:
          "Criatividade, generosidade, brilho e necessidade de expressão.",

        slug:
          "lion",
      },

      {
        symbol:
          "♍",

        name:
          "Virgem",

        dates:
          "23 de agosto a 22 de setembro",

        element:
          "Terra",

        description:
          "Análise, precisão, senso de serviço e busca por melhorias.",

        slug:
          "vierge",
      },

      {
        symbol:
          "♎",

        name:
          "Libra",

        dates:
          "23 de setembro a 22 de outubro",

        element:
          "Ar",

        description:
          "Harmonia, diplomacia, equilíbrio e importância dos relacionamentos.",

        slug:
          "balance",
      },

      {
        symbol:
          "♏",

        name:
          "Escorpião",

        dates:
          "23 de outubro a 21 de novembro",

        element:
          "Água",

        description:
          "Intensidade, profundidade, transformação e poder emocional.",

        slug:
          "scorpion",
      },

      {
        symbol:
          "♐",

        name:
          "Sagitário",

        dates:
          "22 de novembro a 21 de dezembro",

        element:
          "Fogo",

        description:
          "Liberdade, entusiasmo, exploração e busca de sentido.",

        slug:
          "sagittaire",
      },

      {
        symbol:
          "♑",

        name:
          "Capricórnio",

        dates:
          "22 de dezembro a 19 de janeiro",

        element:
          "Terra",

        description:
          "Ambição, disciplina, responsabilidade e visão de longo prazo.",

        slug:
          "capricorne",
      },

      {
        symbol:
          "♒",

        name:
          "Aquário",

        dates:
          "20 de janeiro a 18 de fevereiro",

        element:
          "Ar",

        description:
          "Independência, originalidade, inovação e abertura coletiva.",

        slug:
          "verseau",
      },

      {
        symbol:
          "♓",

        name:
          "Peixes",

        dates:
          "19 de fevereiro a 20 de março",

        element:
          "Água",

        description:
          "Intuição, compaixão, imaginação e grande receptividade.",

        slug:
          "poissons",
      },
    ],

    callout: {
      badge:
        "Além do seu signo solar",

      title:
        "Seu mapa natal conta toda a sua história",

      description:
        "Seu Sol é apenas uma parte da sua personalidade. Descubra também sua Lua, seu Ascendente e sua roda astrológica completa.",

      button:
        "Descobrir meu mapa natal",
    },
  },
};
