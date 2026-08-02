import type { Locale } from "@/i18n/config";

export type PremiumFormula = {
  icon: string;
  title: string;
  href: string;
  price: string;
  buttonLabel: string;
  description: string;
  items: string[];
};

export type PremiumStep = {
  number: string;
  title: string;
  description: string;
};

export type PremiumDataItem = {
  icon: string;
  title: string;
  description: string;
};

export type HoroscopePremiumPageText = {
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    locale: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    formulasButton: string;
    chartButton: string;
    features: string[];
  };
  intro: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  formulas: {
    kicker: string;
    title: string;
    description: string;
    items: PremiumFormula[];
  };
  process: {
    kicker: string;
    title: string;
    description: string;
    steps: PremiumStep[];
  };
  data: {
    kicker: string;
    title: string;
    description: string;
    items: PremiumDataItem[];
  };
  waiting: {
    kicker: string;
    title: string;
    description: string;
    dayButton: string;
    freeButton: string;
  };
  navigation: {
    ariaLabel: string;
    free: string;
    astrology: string;
    chart: string;
  };
};

export const HOROSCOPE_PREMIUM_TRANSLATIONS: Record<Locale, HoroscopePremiumPageText> = {
  "fr": {
    "metadata": {
      "title": "Horoscope Premium personnalisé | Luna Astralis",
      "description": "Découvrez votre horoscope Premium personnalisé selon votre date, votre heure et votre lieu de naissance : prévisions du jour, du mois et de l’année.",
      "ogTitle": "Horoscope Premium personnalisé | Luna Astralis",
      "ogDescription": "Des prévisions astrologiques personnalisées selon votre carte du ciel, vos transits et votre naissance.",
      "locale": "fr_CA",
      "language": "fr-CA"
    },
    "hero": {
      "eyebrow": "🌙 Luna Astralis Premium",
      "titleBefore": "Votre horoscope,",
      "titleHighlight": "réellement personnalisé",
      "description": "Votre signe solaire ne raconte qu’une partie de votre histoire. L’Horoscope Premium tient compte de votre date, de votre heure et de votre lieu de naissance afin d’analyser votre carte du ciel et les transits astrologiques qui vous influencent.",
      "formulasButton": "Découvrir les formules",
      "chartButton": "Créer ma carte du ciel gratuite",
      "features": [
        "Analyse personnelle",
        "Carte du ciel",
        "Transits astrologiques",
        "Conseils approfondis"
      ]
    },
    "intro": {
      "kicker": "Au-delà du signe solaire",
      "title": "Pourquoi un horoscope personnalisé est-il différent ?",
      "paragraphs": [
        "Un horoscope général est rédigé pour toutes les personnes d’un même signe astrologique. Il peut révéler une tendance collective, mais il ne connaît ni votre Ascendant, ni votre Lune, ni vos maisons astrologiques.",
        "L’Horoscope Premium de Luna Astralis est basé sur votre propre carte du ciel. Les transits actuels sont comparés à vos positions de naissance afin de produire une lecture plus précise et plus personnelle."
      ]
    },
    "formulas": {
      "kicker": "Trois niveaux de prévisions",
      "title": "Choisissez la période qui vous intéresse",
      "description": "Chaque formule est construite à partir de votre carte du ciel et des mouvements planétaires de la période analysée.",
      "items": [
        {
          "icon": "✨",
          "title": "Horoscope Premium du jour",
          "href": "/horoscope/premium/jour",
          "price": "9,99 $ US",
          "buttonLabel": "Créer mon horoscope du jour",
          "description": "Une lecture personnalisée des énergies, des opportunités et des défis qui influencent votre journée.",
          "items": [
            "Amour et relations",
            "Travail et décisions",
            "Finances et opportunités",
            "Bien-être et énergie",
            "Conseil astrologique personnalisé"
          ]
        },
        {
          "icon": "📅",
          "title": "Horoscope Premium du mois",
          "href": "/horoscope/premium/mois",
          "price": "19,99 $ US",
          "buttonLabel": "Découvrir l’horoscope du mois",
          "description": "Une vision plus large des périodes importantes, des changements et des possibilités du mois.",
          "items": [
            "Grandes tendances du mois",
            "Dates et périodes importantes",
            "Vie affective",
            "Carrière et projets",
            "Évolution personnelle"
          ]
        },
        {
          "icon": "🌟",
          "title": "Horoscope Premium de l’année",
          "href": "/horoscope/premium/annee",
          "price": "34,99 $ US",
          "buttonLabel": "Découvrir l’horoscope de l’année",
          "description": "Une analyse complète des grandes étapes de votre année astrologique et des domaines les plus influencés.",
          "items": [
            "Cycles astrologiques annuels",
            "Amour et relations",
            "Travail et finances",
            "Défis et transformations",
            "Périodes favorables"
          ]
        }
      ]
    },
    "process": {
      "kicker": "Une analyse en quatre étapes",
      "title": "Comment votre horoscope est-il calculé ?",
      "description": "Luna Astralis utilise les mêmes informations fondamentales que pour une véritable analyse de carte du ciel.",
      "steps": [
        {
          "number": "01",
          "title": "Vos informations de naissance",
          "description": "Vous indiquez votre date, votre heure et votre lieu de naissance."
        },
        {
          "number": "02",
          "title": "Votre carte du ciel",
          "description": "Luna Astralis calcule vos positions planétaires, vos maisons et vos principaux aspects."
        },
        {
          "number": "03",
          "title": "Vos transits astrologiques",
          "description": "Les mouvements actuels des planètes sont comparés à votre thème natal."
        },
        {
          "number": "04",
          "title": "Votre horoscope personnalisé",
          "description": "Vous obtenez une lecture adaptée à votre propre configuration astrologique."
        }
      ]
    },
    "data": {
      "kicker": "Votre ciel personnel",
      "title": "Les éléments utilisés dans votre analyse",
      "description": "Votre horoscope ne repose pas uniquement sur votre signe du zodiaque. Plusieurs données astrologiques sont combinées afin de créer une lecture cohérente.",
      "items": [
        {
          "icon": "☉",
          "title": "Soleil",
          "description": "Votre identité, votre volonté et votre direction générale."
        },
        {
          "icon": "☾",
          "title": "Lune",
          "description": "Vos émotions, vos besoins et votre monde intérieur."
        },
        {
          "icon": "↑",
          "title": "Ascendant",
          "description": "Votre manière d’avancer et de réagir au monde."
        },
        {
          "icon": "⌂",
          "title": "Maisons",
          "description": "Les domaines de vie concernés par les mouvements planétaires."
        },
        {
          "icon": "✦",
          "title": "Aspects",
          "description": "Les liens et tensions entre les planètes de votre thème."
        },
        {
          "icon": "◎",
          "title": "Transits",
          "description": "Les influences actuelles comparées à vos positions natales."
        }
      ]
    },
    "waiting": {
      "kicker": "Horoscope personnalisé",
      "title": "Commencez avec l’Horoscope Premium du jour",
      "description": "Entrez vos informations de naissance pour créer une lecture personnalisée fondée sur votre carte du ciel et les transits astrologiques du jour.",
      "dayButton": "Créer mon horoscope du jour",
      "freeButton": "Voir les horoscopes gratuits"
    },
    "navigation": {
      "ariaLabel": "Navigation astrologique",
      "free": "← Horoscope gratuit",
      "astrology": "Découvrir l’astrologie",
      "chart": "Carte du ciel →"
    }
  },
  "en": {
    "metadata": {
      "title": "Personalized Premium Horoscope | Luna Astralis",
      "description": "Discover your personalized Premium horoscope based on your birth date, time and place: daily, monthly and yearly forecasts.",
      "ogTitle": "Personalized Premium Horoscope | Luna Astralis",
      "ogDescription": "Personalized astrology forecasts based on your birth chart, transits and birth information.",
      "locale": "en_US",
      "language": "en-US"
    },
    "hero": {
      "eyebrow": "🌙 Luna Astralis Premium",
      "titleBefore": "Your horoscope,",
      "titleHighlight": "truly personalized",
      "description": "Your Sun sign tells only part of your story. Premium Horoscope uses your birth date, time and place to analyze your birth chart and the astrological transits influencing you.",
      "formulasButton": "Discover the options",
      "chartButton": "Create my free birth chart",
      "features": [
        "Personal analysis",
        "Birth chart",
        "Astrological transits",
        "In-depth guidance"
      ]
    },
    "intro": {
      "kicker": "Beyond the Sun sign",
      "title": "Why is a personalized horoscope different?",
      "paragraphs": [
        "A general horoscope is written for everyone sharing the same zodiac sign. It may reveal a collective trend, but it does not know your Ascendant, Moon or astrological houses.",
        "Luna Astralis Premium Horoscope is based on your own birth chart. Current transits are compared with your natal positions to create a more precise and personal interpretation."
      ]
    },
    "formulas": {
      "kicker": "Three forecast levels",
      "title": "Choose the period that interests you",
      "description": "Each option is built from your birth chart and the planetary movements of the analyzed period.",
      "items": [
        {
          "icon": "✨",
          "title": "Daily Premium Horoscope",
          "href": "/horoscope/premium/jour",
          "price": "US$9.99",
          "buttonLabel": "Create my daily horoscope",
          "description": "A personalized reading of the energies, opportunities and challenges influencing your day.",
          "items": [
            "Love and relationships",
            "Work and decisions",
            "Finances and opportunities",
            "Well-being and energy",
            "Personalized astrological guidance"
          ]
        },
        {
          "icon": "📅",
          "title": "Monthly Premium Horoscope",
          "href": "/horoscope/premium/mois",
          "price": "US$19.99",
          "buttonLabel": "Discover the monthly horoscope",
          "description": "A broader view of the important periods, changes and possibilities during the month.",
          "items": [
            "Major monthly trends",
            "Important dates and periods",
            "Love life",
            "Career and projects",
            "Personal growth"
          ]
        },
        {
          "icon": "🌟",
          "title": "Yearly Premium Horoscope",
          "href": "/horoscope/premium/annee",
          "price": "US$34.99",
          "buttonLabel": "Discover the yearly horoscope",
          "description": "A complete analysis of the major stages of your astrological year and the areas most influenced.",
          "items": [
            "Annual astrological cycles",
            "Love and relationships",
            "Work and finances",
            "Challenges and transformations",
            "Favorable periods"
          ]
        }
      ]
    },
    "process": {
      "kicker": "A four-step analysis",
      "title": "How is your horoscope calculated?",
      "description": "Luna Astralis uses the same fundamental information required for a genuine birth chart analysis.",
      "steps": [
        {
          "number": "01",
          "title": "Your birth information",
          "description": "You provide your birth date, time and place."
        },
        {
          "number": "02",
          "title": "Your birth chart",
          "description": "Luna Astralis calculates your planetary positions, houses and main aspects."
        },
        {
          "number": "03",
          "title": "Your astrological transits",
          "description": "Current planetary movements are compared with your natal chart."
        },
        {
          "number": "04",
          "title": "Your personalized horoscope",
          "description": "You receive a reading adapted to your own astrological configuration."
        }
      ]
    },
    "data": {
      "kicker": "Your personal sky",
      "title": "The elements used in your analysis",
      "description": "Your horoscope is not based only on your zodiac sign. Several astrological factors are combined to create a coherent interpretation.",
      "items": [
        {
          "icon": "☉",
          "title": "Sun",
          "description": "Your identity, will and general direction."
        },
        {
          "icon": "☾",
          "title": "Moon",
          "description": "Your emotions, needs and inner world."
        },
        {
          "icon": "↑",
          "title": "Ascendant",
          "description": "How you move forward and respond to the world."
        },
        {
          "icon": "⌂",
          "title": "Houses",
          "description": "The areas of life affected by planetary movements."
        },
        {
          "icon": "✦",
          "title": "Aspects",
          "description": "The connections and tensions between the planets in your chart."
        },
        {
          "icon": "◎",
          "title": "Transits",
          "description": "Current influences compared with your natal positions."
        }
      ]
    },
    "waiting": {
      "kicker": "Personalized horoscope",
      "title": "Start with the Daily Premium Horoscope",
      "description": "Enter your birth information to create a personalized reading based on your birth chart and today’s astrological transits.",
      "dayButton": "Create my daily horoscope",
      "freeButton": "View free horoscopes"
    },
    "navigation": {
      "ariaLabel": "Astrology navigation",
      "free": "← Free horoscope",
      "astrology": "Discover astrology",
      "chart": "Birth chart →"
    }
  },
  "es": {
    "metadata": {
      "title": "Horóscopo Premium personalizado | Luna Astralis",
      "description": "Descubre tu horóscopo Premium personalizado según tu fecha, hora y lugar de nacimiento: previsiones diarias, mensuales y anuales.",
      "ogTitle": "Horóscopo Premium personalizado | Luna Astralis",
      "ogDescription": "Previsiones astrológicas personalizadas según tu carta natal, tus tránsitos y tus datos de nacimiento.",
      "locale": "es_ES",
      "language": "es-ES"
    },
    "hero": {
      "eyebrow": "🌙 Luna Astralis Premium",
      "titleBefore": "Tu horóscopo,",
      "titleHighlight": "realmente personalizado",
      "description": "Tu signo solar solo cuenta una parte de tu historia. El Horóscopo Premium utiliza tu fecha, hora y lugar de nacimiento para analizar tu carta natal y los tránsitos astrológicos que te influyen.",
      "formulasButton": "Descubrir las opciones",
      "chartButton": "Crear mi carta natal gratis",
      "features": [
        "Análisis personal",
        "Carta natal",
        "Tránsitos astrológicos",
        "Consejos detallados"
      ]
    },
    "intro": {
      "kicker": "Más allá del signo solar",
      "title": "¿Por qué es diferente un horóscopo personalizado?",
      "paragraphs": [
        "Un horóscopo general se redacta para todas las personas de un mismo signo. Puede revelar una tendencia colectiva, pero no conoce tu Ascendente, tu Luna ni tus casas astrológicas.",
        "El Horóscopo Premium de Luna Astralis se basa en tu propia carta natal. Los tránsitos actuales se comparan con tus posiciones natales para crear una lectura más precisa y personal."
      ]
    },
    "formulas": {
      "kicker": "Tres niveles de previsión",
      "title": "Elige el período que te interesa",
      "description": "Cada opción se construye a partir de tu carta natal y de los movimientos planetarios del período analizado.",
      "items": [
        {
          "icon": "✨",
          "title": "Horóscopo Premium diario",
          "href": "/horoscope/premium/jour",
          "price": "9,99 US$",
          "buttonLabel": "Crear mi horóscopo diario",
          "description": "Una lectura personalizada de las energías, oportunidades y desafíos que influyen en tu día.",
          "items": [
            "Amor y relaciones",
            "Trabajo y decisiones",
            "Finanzas y oportunidades",
            "Bienestar y energía",
            "Consejo astrológico personalizado"
          ]
        },
        {
          "icon": "📅",
          "title": "Horóscopo Premium mensual",
          "href": "/horoscope/premium/mois",
          "price": "19,99 US$",
          "buttonLabel": "Descubrir el horóscopo mensual",
          "description": "Una visión más amplia de los períodos importantes, los cambios y las posibilidades del mes.",
          "items": [
            "Grandes tendencias del mes",
            "Fechas y períodos importantes",
            "Vida afectiva",
            "Carrera y proyectos",
            "Evolución personal"
          ]
        },
        {
          "icon": "🌟",
          "title": "Horóscopo Premium anual",
          "href": "/horoscope/premium/annee",
          "price": "34,99 US$",
          "buttonLabel": "Descubrir el horóscopo anual",
          "description": "Un análisis completo de las grandes etapas de tu año astrológico y de las áreas más influidas.",
          "items": [
            "Ciclos astrológicos anuales",
            "Amor y relaciones",
            "Trabajo y finanzas",
            "Desafíos y transformaciones",
            "Períodos favorables"
          ]
        }
      ]
    },
    "process": {
      "kicker": "Un análisis en cuatro etapas",
      "title": "¿Cómo se calcula tu horóscopo?",
      "description": "Luna Astralis utiliza la misma información fundamental que se necesita para un verdadero análisis de carta natal.",
      "steps": [
        {
          "number": "01",
          "title": "Tus datos de nacimiento",
          "description": "Indicas tu fecha, hora y lugar de nacimiento."
        },
        {
          "number": "02",
          "title": "Tu carta natal",
          "description": "Luna Astralis calcula tus posiciones planetarias, casas y aspectos principales."
        },
        {
          "number": "03",
          "title": "Tus tránsitos astrológicos",
          "description": "Los movimientos actuales de los planetas se comparan con tu carta natal."
        },
        {
          "number": "04",
          "title": "Tu horóscopo personalizado",
          "description": "Recibes una lectura adaptada a tu propia configuración astrológica."
        }
      ]
    },
    "data": {
      "kicker": "Tu cielo personal",
      "title": "Los elementos utilizados en tu análisis",
      "description": "Tu horóscopo no se basa únicamente en tu signo zodiacal. Se combinan varios datos astrológicos para crear una lectura coherente.",
      "items": [
        {
          "icon": "☉",
          "title": "Sol",
          "description": "Tu identidad, voluntad y dirección general."
        },
        {
          "icon": "☾",
          "title": "Luna",
          "description": "Tus emociones, necesidades y mundo interior."
        },
        {
          "icon": "↑",
          "title": "Ascendente",
          "description": "Tu manera de avanzar y reaccionar ante el mundo."
        },
        {
          "icon": "⌂",
          "title": "Casas",
          "description": "Las áreas de vida afectadas por los movimientos planetarios."
        },
        {
          "icon": "✦",
          "title": "Aspectos",
          "description": "Los vínculos y tensiones entre los planetas de tu carta."
        },
        {
          "icon": "◎",
          "title": "Tránsitos",
          "description": "Las influencias actuales comparadas con tus posiciones natales."
        }
      ]
    },
    "waiting": {
      "kicker": "Horóscopo personalizado",
      "title": "Comienza con el Horóscopo Premium diario",
      "description": "Introduce tus datos de nacimiento para crear una lectura personalizada basada en tu carta natal y los tránsitos astrológicos del día.",
      "dayButton": "Crear mi horóscopo diario",
      "freeButton": "Ver los horóscopos gratuitos"
    },
    "navigation": {
      "ariaLabel": "Navegación astrológica",
      "free": "← Horóscopo gratuito",
      "astrology": "Descubrir la astrología",
      "chart": "Carta natal →"
    }
  },
  "de": {
    "metadata": {
      "title": "Personalisiertes Premium-Horoskop | Luna Astralis",
      "description": "Entdecken Sie Ihr persönliches Premium-Horoskop anhand von Geburtsdatum, Geburtszeit und Geburtsort: Tages-, Monats- und Jahresprognosen.",
      "ogTitle": "Personalisiertes Premium-Horoskop | Luna Astralis",
      "ogDescription": "Persönliche astrologische Prognosen auf Grundlage Ihres Geburtshoroskops, Ihrer Transite und Geburtsdaten.",
      "locale": "de_DE",
      "language": "de-DE"
    },
    "hero": {
      "eyebrow": "🌙 Luna Astralis Premium",
      "titleBefore": "Ihr Horoskop,",
      "titleHighlight": "wirklich persönlich",
      "description": "Ihr Sonnenzeichen erzählt nur einen Teil Ihrer Geschichte. Das Premium-Horoskop nutzt Geburtsdatum, Geburtszeit und Geburtsort, um Ihr Geburtshoroskop und die astrologischen Transite zu analysieren, die Sie beeinflussen.",
      "formulasButton": "Angebote entdecken",
      "chartButton": "Kostenloses Geburtshoroskop erstellen",
      "features": [
        "Persönliche Analyse",
        "Geburtshoroskop",
        "Astrologische Transite",
        "Ausführliche Hinweise"
      ]
    },
    "intro": {
      "kicker": "Mehr als das Sonnenzeichen",
      "title": "Warum ist ein persönliches Horoskop anders?",
      "paragraphs": [
        "Ein allgemeines Horoskop wird für alle Menschen desselben Sternzeichens geschrieben. Es kann eine kollektive Tendenz zeigen, kennt jedoch weder Ihren Aszendenten noch Ihren Mond oder Ihre astrologischen Häuser.",
        "Das Premium-Horoskop von Luna Astralis basiert auf Ihrem eigenen Geburtshoroskop. Aktuelle Transite werden mit Ihren Geburtspositionen verglichen, um eine präzisere und persönlichere Deutung zu erstellen."
      ]
    },
    "formulas": {
      "kicker": "Drei Prognosezeiträume",
      "title": "Wählen Sie den gewünschten Zeitraum",
      "description": "Jede Variante basiert auf Ihrem Geburtshoroskop und den Planetenbewegungen des analysierten Zeitraums.",
      "items": [
        {
          "icon": "✨",
          "title": "Premium-Tageshoroskop",
          "href": "/horoscope/premium/jour",
          "price": "9,99 US$",
          "buttonLabel": "Mein Tageshoroskop erstellen",
          "description": "Eine persönliche Deutung der Energien, Chancen und Herausforderungen Ihres Tages.",
          "items": [
            "Liebe und Beziehungen",
            "Arbeit und Entscheidungen",
            "Finanzen und Chancen",
            "Wohlbefinden und Energie",
            "Persönlicher astrologischer Rat"
          ]
        },
        {
          "icon": "📅",
          "title": "Premium-Monatshoroskop",
          "href": "/horoscope/premium/mois",
          "price": "19,99 US$",
          "buttonLabel": "Monatshoroskop entdecken",
          "description": "Ein umfassenderer Blick auf wichtige Phasen, Veränderungen und Möglichkeiten des Monats.",
          "items": [
            "Große Monatstendenzen",
            "Wichtige Daten und Phasen",
            "Gefühlsleben",
            "Karriere und Projekte",
            "Persönliche Entwicklung"
          ]
        },
        {
          "icon": "🌟",
          "title": "Premium-Jahreshoroskop",
          "href": "/horoscope/premium/annee",
          "price": "34,99 US$",
          "buttonLabel": "Jahreshoroskop entdecken",
          "description": "Eine vollständige Analyse der großen Etappen Ihres astrologischen Jahres und der am stärksten beeinflussten Lebensbereiche.",
          "items": [
            "Jährliche astrologische Zyklen",
            "Liebe und Beziehungen",
            "Arbeit und Finanzen",
            "Herausforderungen und Veränderungen",
            "Günstige Phasen"
          ]
        }
      ]
    },
    "process": {
      "kicker": "Eine Analyse in vier Schritten",
      "title": "Wie wird Ihr Horoskop berechnet?",
      "description": "Luna Astralis verwendet dieselben grundlegenden Angaben wie für eine echte Geburtshoroskop-Analyse.",
      "steps": [
        {
          "number": "01",
          "title": "Ihre Geburtsdaten",
          "description": "Sie geben Geburtsdatum, Geburtszeit und Geburtsort an."
        },
        {
          "number": "02",
          "title": "Ihr Geburtshoroskop",
          "description": "Luna Astralis berechnet Planetenpositionen, Häuser und Hauptaspekte."
        },
        {
          "number": "03",
          "title": "Ihre astrologischen Transite",
          "description": "Aktuelle Planetenbewegungen werden mit Ihrem Geburtshoroskop verglichen."
        },
        {
          "number": "04",
          "title": "Ihr persönliches Horoskop",
          "description": "Sie erhalten eine Deutung, die an Ihre eigene astrologische Konfiguration angepasst ist."
        }
      ]
    },
    "data": {
      "kicker": "Ihr persönlicher Himmel",
      "title": "Die Elemente Ihrer Analyse",
      "description": "Ihr Horoskop basiert nicht nur auf Ihrem Sternzeichen. Mehrere astrologische Faktoren werden zu einer stimmigen Deutung verbunden.",
      "items": [
        {
          "icon": "☉",
          "title": "Sonne",
          "description": "Ihre Identität, Ihr Wille und Ihre allgemeine Richtung."
        },
        {
          "icon": "☾",
          "title": "Mond",
          "description": "Ihre Gefühle, Bedürfnisse und innere Welt."
        },
        {
          "icon": "↑",
          "title": "Aszendent",
          "description": "Ihre Art voranzugehen und auf die Welt zu reagieren."
        },
        {
          "icon": "⌂",
          "title": "Häuser",
          "description": "Die Lebensbereiche, die von Planetenbewegungen betroffen sind."
        },
        {
          "icon": "✦",
          "title": "Aspekte",
          "description": "Die Verbindungen und Spannungen zwischen den Planeten Ihres Horoskops."
        },
        {
          "icon": "◎",
          "title": "Transite",
          "description": "Aktuelle Einflüsse im Vergleich zu Ihren Geburtspositionen."
        }
      ]
    },
    "waiting": {
      "kicker": "Persönliches Horoskop",
      "title": "Beginnen Sie mit dem Premium-Tageshoroskop",
      "description": "Geben Sie Ihre Geburtsdaten ein, um eine persönliche Deutung auf Grundlage Ihres Geburtshoroskops und der heutigen Transite zu erstellen.",
      "dayButton": "Mein Tageshoroskop erstellen",
      "freeButton": "Kostenlose Horoskope ansehen"
    },
    "navigation": {
      "ariaLabel": "Astrologische Navigation",
      "free": "← Kostenloses Horoskop",
      "astrology": "Astrologie entdecken",
      "chart": "Geburtshoroskop →"
    }
  },
  "it": {
    "metadata": {
      "title": "Oroscopo Premium personalizzato | Luna Astralis",
      "description": "Scopri il tuo Oroscopo Premium personalizzato in base a data, ora e luogo di nascita: previsioni giornaliere, mensili e annuali.",
      "ogTitle": "Oroscopo Premium personalizzato | Luna Astralis",
      "ogDescription": "Previsioni astrologiche personalizzate basate sul tema natale, sui transiti e sui dati di nascita.",
      "locale": "it_IT",
      "language": "it-IT"
    },
    "hero": {
      "eyebrow": "🌙 Luna Astralis Premium",
      "titleBefore": "Il tuo oroscopo,",
      "titleHighlight": "davvero personalizzato",
      "description": "Il segno solare racconta solo una parte della tua storia. L’Oroscopo Premium usa data, ora e luogo di nascita per analizzare il tuo tema natale e i transiti astrologici che ti influenzano.",
      "formulasButton": "Scopri le formule",
      "chartButton": "Crea il mio tema natale gratuito",
      "features": [
        "Analisi personale",
        "Tema natale",
        "Transiti astrologici",
        "Consigli approfonditi"
      ]
    },
    "intro": {
      "kicker": "Oltre il segno solare",
      "title": "Perché un oroscopo personalizzato è diverso?",
      "paragraphs": [
        "Un oroscopo generale è scritto per tutte le persone dello stesso segno zodiacale. Può mostrare una tendenza collettiva, ma non conosce il tuo Ascendente, la tua Luna o le tue case astrologiche.",
        "L’Oroscopo Premium di Luna Astralis si basa sul tuo vero tema natale. I transiti attuali vengono confrontati con le posizioni di nascita per creare una lettura più precisa e personale."
      ]
    },
    "formulas": {
      "kicker": "Tre livelli di previsione",
      "title": "Scegli il periodo che ti interessa",
      "description": "Ogni formula è costruita a partire dal tuo tema natale e dai movimenti planetari del periodo analizzato.",
      "items": [
        {
          "icon": "✨",
          "title": "Oroscopo Premium del giorno",
          "href": "/horoscope/premium/jour",
          "price": "9,99 USD",
          "buttonLabel": "Crea il mio oroscopo del giorno",
          "description": "Una lettura personalizzata delle energie, opportunità e sfide che influenzano la tua giornata.",
          "items": [
            "Amore e relazioni",
            "Lavoro e decisioni",
            "Finanze e opportunità",
            "Benessere ed energia",
            "Consiglio astrologico personalizzato"
          ]
        },
        {
          "icon": "📅",
          "title": "Oroscopo Premium del mese",
          "href": "/horoscope/premium/mois",
          "price": "19,99 USD",
          "buttonLabel": "Scopri l’oroscopo del mese",
          "description": "Una visione più ampia dei periodi importanti, dei cambiamenti e delle possibilità del mese.",
          "items": [
            "Grandi tendenze del mese",
            "Date e periodi importanti",
            "Vita affettiva",
            "Carriera e progetti",
            "Evoluzione personale"
          ]
        },
        {
          "icon": "🌟",
          "title": "Oroscopo Premium dell’anno",
          "href": "/horoscope/premium/annee",
          "price": "34,99 USD",
          "buttonLabel": "Scopri l’oroscopo dell’anno",
          "description": "Un’analisi completa delle grandi tappe del tuo anno astrologico e degli ambiti più influenzati.",
          "items": [
            "Cicli astrologici annuali",
            "Amore e relazioni",
            "Lavoro e finanze",
            "Sfide e trasformazioni",
            "Periodi favorevoli"
          ]
        }
      ]
    },
    "process": {
      "kicker": "Un’analisi in quattro fasi",
      "title": "Come viene calcolato il tuo oroscopo?",
      "description": "Luna Astralis utilizza le stesse informazioni fondamentali necessarie per una vera analisi del tema natale.",
      "steps": [
        {
          "number": "01",
          "title": "I tuoi dati di nascita",
          "description": "Inserisci data, ora e luogo di nascita."
        },
        {
          "number": "02",
          "title": "Il tuo tema natale",
          "description": "Luna Astralis calcola posizioni planetarie, case e aspetti principali."
        },
        {
          "number": "03",
          "title": "I tuoi transiti astrologici",
          "description": "I movimenti attuali dei pianeti vengono confrontati con il tuo tema natale."
        },
        {
          "number": "04",
          "title": "Il tuo oroscopo personalizzato",
          "description": "Ricevi una lettura adattata alla tua configurazione astrologica."
        }
      ]
    },
    "data": {
      "kicker": "Il tuo cielo personale",
      "title": "Gli elementi utilizzati nella tua analisi",
      "description": "Il tuo oroscopo non si basa soltanto sul segno zodiacale. Diversi dati astrologici vengono combinati per creare una lettura coerente.",
      "items": [
        {
          "icon": "☉",
          "title": "Sole",
          "description": "La tua identità, volontà e direzione generale."
        },
        {
          "icon": "☾",
          "title": "Luna",
          "description": "Le tue emozioni, esigenze e mondo interiore."
        },
        {
          "icon": "↑",
          "title": "Ascendente",
          "description": "Il tuo modo di avanzare e reagire al mondo."
        },
        {
          "icon": "⌂",
          "title": "Case",
          "description": "Gli ambiti della vita coinvolti dai movimenti planetari."
        },
        {
          "icon": "✦",
          "title": "Aspetti",
          "description": "I legami e le tensioni tra i pianeti del tuo tema."
        },
        {
          "icon": "◎",
          "title": "Transiti",
          "description": "Le influenze attuali confrontate con le tue posizioni natali."
        }
      ]
    },
    "waiting": {
      "kicker": "Oroscopo personalizzato",
      "title": "Inizia con l’Oroscopo Premium del giorno",
      "description": "Inserisci i tuoi dati di nascita per creare una lettura personalizzata basata sul tema natale e sui transiti astrologici del giorno.",
      "dayButton": "Crea il mio oroscopo del giorno",
      "freeButton": "Vedi gli oroscopi gratuiti"
    },
    "navigation": {
      "ariaLabel": "Navigazione astrologica",
      "free": "← Oroscopo gratuito",
      "astrology": "Scopri l’astrologia",
      "chart": "Tema natale →"
    }
  },
  "pt": {
    "metadata": {
      "title": "Horóscopo Premium personalizado | Luna Astralis",
      "description": "Descubra seu Horóscopo Premium personalizado com base em data, hora e local de nascimento: previsões diárias, mensais e anuais.",
      "ogTitle": "Horóscopo Premium personalizado | Luna Astralis",
      "ogDescription": "Previsões astrológicas personalizadas baseadas no mapa natal, nos trânsitos e nos dados de nascimento.",
      "locale": "pt_PT",
      "language": "pt-PT"
    },
    "hero": {
      "eyebrow": "🌙 Luna Astralis Premium",
      "titleBefore": "Seu horóscopo,",
      "titleHighlight": "realmente personalizado",
      "description": "Seu signo solar conta apenas uma parte da sua história. O Horóscopo Premium utiliza data, hora e local de nascimento para analisar seu mapa natal e os trânsitos astrológicos que influenciam você.",
      "formulasButton": "Descobrir as opções",
      "chartButton": "Criar meu mapa natal gratuito",
      "features": [
        "Análise pessoal",
        "Mapa natal",
        "Trânsitos astrológicos",
        "Orientações aprofundadas"
      ]
    },
    "intro": {
      "kicker": "Além do signo solar",
      "title": "Por que um horóscopo personalizado é diferente?",
      "paragraphs": [
        "Um horóscopo geral é escrito para todas as pessoas do mesmo signo. Ele pode revelar uma tendência coletiva, mas não conhece seu Ascendente, sua Lua nem suas casas astrológicas.",
        "O Horóscopo Premium da Luna Astralis é baseado no seu próprio mapa natal. Os trânsitos atuais são comparados às suas posições de nascimento para criar uma leitura mais precisa e pessoal."
      ]
    },
    "formulas": {
      "kicker": "Três níveis de previsão",
      "title": "Escolha o período que interessa a você",
      "description": "Cada opção é construída a partir do seu mapa natal e dos movimentos planetários do período analisado.",
      "items": [
        {
          "icon": "✨",
          "title": "Horóscopo Premium diário",
          "href": "/horoscope/premium/jour",
          "price": "9,99 US$",
          "buttonLabel": "Criar meu horóscopo diário",
          "description": "Uma leitura personalizada das energias, oportunidades e desafios que influenciam seu dia.",
          "items": [
            "Amor e relações",
            "Trabalho e decisões",
            "Finanças e oportunidades",
            "Bem-estar e energia",
            "Conselho astrológico personalizado"
          ]
        },
        {
          "icon": "📅",
          "title": "Horóscopo Premium mensal",
          "href": "/horoscope/premium/mois",
          "price": "19,99 US$",
          "buttonLabel": "Descobrir o horóscopo mensal",
          "description": "Uma visão mais ampla dos períodos importantes, mudanças e possibilidades do mês.",
          "items": [
            "Grandes tendências do mês",
            "Datas e períodos importantes",
            "Vida afetiva",
            "Carreira e projetos",
            "Evolução pessoal"
          ]
        },
        {
          "icon": "🌟",
          "title": "Horóscopo Premium anual",
          "href": "/horoscope/premium/annee",
          "price": "34,99 US$",
          "buttonLabel": "Descobrir o horóscopo anual",
          "description": "Uma análise completa das grandes etapas do seu ano astrológico e das áreas mais influenciadas.",
          "items": [
            "Ciclos astrológicos anuais",
            "Amor e relações",
            "Trabalho e finanças",
            "Desafios e transformações",
            "Períodos favoráveis"
          ]
        }
      ]
    },
    "process": {
      "kicker": "Uma análise em quatro etapas",
      "title": "Como seu horóscopo é calculado?",
      "description": "A Luna Astralis utiliza as mesmas informações fundamentais necessárias para uma verdadeira análise de mapa natal.",
      "steps": [
        {
          "number": "01",
          "title": "Seus dados de nascimento",
          "description": "Você informa data, hora e local de nascimento."
        },
        {
          "number": "02",
          "title": "Seu mapa natal",
          "description": "A Luna Astralis calcula posições planetárias, casas e aspectos principais."
        },
        {
          "number": "03",
          "title": "Seus trânsitos astrológicos",
          "description": "Os movimentos atuais dos planetas são comparados ao seu mapa natal."
        },
        {
          "number": "04",
          "title": "Seu horóscopo personalizado",
          "description": "Você recebe uma leitura adaptada à sua própria configuração astrológica."
        }
      ]
    },
    "data": {
      "kicker": "Seu céu pessoal",
      "title": "Os elementos usados na sua análise",
      "description": "Seu horóscopo não se baseia apenas no signo do zodíaco. Vários dados astrológicos são combinados para criar uma leitura coerente.",
      "items": [
        {
          "icon": "☉",
          "title": "Sol",
          "description": "Sua identidade, vontade e direção geral."
        },
        {
          "icon": "☾",
          "title": "Lua",
          "description": "Suas emoções, necessidades e mundo interior."
        },
        {
          "icon": "↑",
          "title": "Ascendente",
          "description": "Sua maneira de avançar e reagir ao mundo."
        },
        {
          "icon": "⌂",
          "title": "Casas",
          "description": "As áreas da vida afetadas pelos movimentos planetários."
        },
        {
          "icon": "✦",
          "title": "Aspectos",
          "description": "As ligações e tensões entre os planetas do seu mapa."
        },
        {
          "icon": "◎",
          "title": "Trânsitos",
          "description": "As influências atuais comparadas às suas posições natais."
        }
      ]
    },
    "waiting": {
      "kicker": "Horóscopo personalizado",
      "title": "Comece com o Horóscopo Premium diário",
      "description": "Informe seus dados de nascimento para criar uma leitura personalizada baseada no mapa natal e nos trânsitos astrológicos do dia.",
      "dayButton": "Criar meu horóscopo diário",
      "freeButton": "Ver os horóscopos gratuitos"
    },
    "navigation": {
      "ariaLabel": "Navegação astrológica",
      "free": "← Horóscopo gratuito",
      "astrology": "Descobrir a astrologia",
      "chart": "Mapa natal →"
    }
  }
};
