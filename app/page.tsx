// app/page.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import AuthProvider from "@/components/AuthProvider";
import SignGrid from "@/components/SignGrid";
import SiteHeader from "@/components/SiteHeader";
import WelcomeVideo from "@/components/WelcomeVideo";

import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";

import "./home.css";

const AMAZON_AUTHOR_LINK =
  "https://www.amazon.com/stores/author/B0DLVLC7QF";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Review = {
  sign: string;
  name: string;
  text: string;
};

type TrustFeature = {
  icon: string;
  title: string;
  text: string;
};

type PaidReport = {
  name: string;
  price: string;
  badge: string;
  description: string;
  features: string[];
  featured: boolean;
};

type Step = {
  icon: string;
  title: string;
  text: string;
};

type HomeText = {
  heroAria: string;
  toolsAria: string;
  reviewsAria: string;
  fiveStarsAria: string;
  legalLinksAria: string;

  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroLead: string;

  dailyUpdated: string;
  horoscopeTitle: string;
  horoscopeDescription: string;
  horoscopeItems: string[];
  horoscopeButton: string;

  birthChartTitle: string;
  birthChartDescription: string;
  birthChartItems: string[];
  birthChartButton: string;

  compatibilityTitle: string;
  compatibilityDescription: string;
  compatibilityItems: string[];
  compatibilityButton: string;

  trustBadge: string;
  trustTitle: string;
  trustSubtitle: string;
  trustFeatures: TrustFeature[];

  reportsBadge: string;
  reportsTitle: string;
  reportsDescription: string;
  reports: PaidReport[];
  recommended: string;
  reportPrefix: string;
  oneTimePayment: string;
  freeChartButton: string;
  reportsNote: string;
  discoverChartButton: string;

  talkToLuna: string;
  discoverBooks: string;
  freeNote: string;

  reviews: Review[];
  techNote: string;
  disclaimer: string;

  problemIntro: string;
  problems: string[];

  libraryTitle: string;
  librarySubtitle: string;
  availableAmazon: string;
  collectionTitle: string;
  collectionDescription: string;
  bookCoverAlt: string;
  viewAmazon: string;
  fullCollectionTitle: string;
  fullCollectionDescription: string;
  fullCollectionButton: string;

  howTitle: string;
  howSubtitle: string;
  steps: Step[];

  rightsReserved: string;
  legalNotices: string;
  privacy: string;
  terms: string;
  footerNote: string;
};

/*
|--------------------------------------------------------------------------
| Livres
|--------------------------------------------------------------------------
|
| Les titres restent dans leur langue de publication, car ils correspondent
| aux couvertures et aux fiches Amazon existantes.
|
*/

const BOOKS = [
  {
    image: "ASTRO 101.jpg",
    title: "Astro 101",
    amazon: "https://a.co/d/05rwtdhp",
  },
  {
    image: "ASTROLOGIE ET CHIROMANCIE.png",
    title: "Astrologie et Chiromancie",
    amazon: "https://a.co/d/03osw44E",
  },
  {
    image: "ASTROLOGIE ET DEVELOPPEMENT PERSONNEL.jpg",
    title: "Développement personnel",
    amazon: "https://a.co/d/05mlDRXi",
  },
  {
    image:
      "Astrologie et transformation personnelle (1).jpg",
    title: "Transformation personnelle",
    amazon: "https://a.co/d/08qzDp1D",
  },
  {
    image: "guide-de-compatibilite-astrologique.jpg",
    title: "Guide de compatibilité astrologique",
    amazon: "https://a.co/d/00V8gKyx",
  },
  {
    image: "Bélier.jpg",
    title: "Bélier",
    amazon: "https://a.co/d/0h9C8bSp",
  },
  {
    image: "Taureau.jpg",
    title: "Taureau",
    amazon: "https://a.co/d/06iXVhrd",
  },
  {
    image: "Gémeaux.jpg",
    title: "Gémeaux",
    amazon: "https://a.co/d/02MIWm2d",
  },
  {
    image: "Cancer.jpg",
    title: "Cancer",
    amazon: "https://a.co/d/0bfnfFhD",
  },
  {
    image: "Lion.png",
    title: "Lion",
    amazon: "https://a.co/d/0cFooiSG",
  },
  {
    image: "Vierge.jpg",
    title: "Vierge",
    amazon: "https://a.co/d/0aQhmhkB",
  },
  {
    image: "Balance.jpg",
    title: "Balance",
    amazon: "https://a.co/d/0gnJSdeE",
  },
  {
    image: "Scorpion.jpg",
    title: "Scorpion",
    amazon: "https://a.co/d/07JHWrTe",
  },
  {
    image: "Sagittaire.jpg",
    title: "Sagittaire",
    amazon: "https://a.co/d/05jeVtb0",
  },
  {
    image: "Capricorne.jpg",
    title: "Capricorne",
    amazon: "https://a.co/d/0cwFnIuC",
  },
  {
    image: "Verseau.jpg",
    title: "Verseau",
    amazon: "https://a.co/d/07MPr0lj",
  },
  {
    image: "Poisson.jpg",
    title: "Poissons",
    amazon: "https://a.co/d/04E0atUr",
  },
];

/*
|--------------------------------------------------------------------------
| Traductions
|--------------------------------------------------------------------------
*/

const HOME_TRANSLATIONS: Record<Locale, HomeText> = {
  fr: {
    heroAria: "Présentation de Luna Astralis",
    toolsAria: "Outils astrologiques gratuits",
    reviewsAria: "Avis des utilisateurs",
    fiveStarsAria: "Cinq étoiles sur cinq",
    legalLinksAria: "Liens légaux",

    heroBadge: "Carte du ciel · Horoscope · Compatibilité",
    heroTitle: "Carte du ciel gratuite et compatibilité amoureuse",
    heroSubtitle:
      "Découvrez gratuitement votre Soleil, votre Lune, votre Ascendant et votre alchimie amoureuse.",
    heroLead:
      "Créez votre thème astral, consultez votre horoscope quotidien et comparez deux signes astrologiques en quelques secondes.",

    dailyUpdated: "✨ Mis à jour chaque jour",
    horoscopeTitle: "Horoscope du jour gratuit",
    horoscopeDescription:
      "Consultez les prévisions astrologiques de votre signe pour mieux comprendre l’énergie de votre journée.",
    horoscopeItems: [
      "☀️ Énergie générale",
      "❤️ Amour et relations",
      "💼 Travail et projets",
      "💰 Finances",
      "🌿 Bien-être",
      "✨ Conseil du jour",
    ],
    horoscopeButton: "Voir mon horoscope",

    birthChartTitle: "Carte du ciel gratuite",
    birthChartDescription:
      "Générez votre thème astral avec votre Soleil, votre Lune, votre Ascendant et votre roue astrologique.",
    birthChartItems: [
      "☀️ Soleil",
      "🌙 Lune",
      "⬆️ Ascendant",
      "🪐 Roue astrologique",
      "✨ Résumé personnalisé",
    ],
    birthChartButton: "Créer ma carte",

    compatibilityTitle: "Compatibilité amoureuse",
    compatibilityDescription:
      "Comparez deux signes astrologiques et obtenez instantanément votre score, vos forces, vos défis et des conseils pour votre relation.",
    compatibilityItems: [
      "❤️ Score amoureux",
      "✨ Forces du couple",
      "⚠️ Défis possibles",
      "💡 Conseils relationnels",
      "📊 Analyse instantanée",
    ],
    compatibilityButton: "Comparer deux signes",

    trustBadge: "Une astrologie accessible",
    trustTitle: "Pourquoi choisir Luna Astralis ?",
    trustSubtitle:
      "Des outils simples, personnalisés et conçus pour vous aider à mieux comprendre votre personnalité, vos relations et votre chemin.",
    trustFeatures: [
      {
        icon: "🔮",
        title: "Calculs astrologiques personnalisés",
        text:
          "Vos résultats sont établis à partir de vos informations de naissance et adaptés à votre profil astrologique.",
      },
      {
        icon: "⚡",
        title: "Résultats instantanés",
        text:
          "Découvrez rapidement votre horoscope, votre carte du ciel ou votre compatibilité amoureuse.",
      },
      {
        icon: "📄",
        title: "Rapports PDF détaillés",
        text:
          "Approfondissez votre thème natal grâce à des analyses personnalisées accessibles en format PDF.",
      },
      {
        icon: "🌍",
        title: "Une expérience multilingue",
        text:
          "Explorez l’astrologie avec des explications claires et accessibles dans plusieurs langues.",
      },
    ],

    reportsBadge: "Rapports astrologiques personnalisés",
    reportsTitle: "Approfondissez votre thème natal",
    reportsDescription:
      "Après avoir créé votre carte du ciel gratuitement, choisissez le niveau d’analyse qui correspond à vos besoins. Chaque rapport est personnalisé selon votre date, votre heure et votre lieu de naissance.",
    reports: [
      {
        name: "Essentielle",
        price: "24,99 $ US",
        badge: "Pour commencer",
        description:
          "Une première lecture personnalisée de votre thème natal pour comprendre vos grandes énergies astrologiques.",
        features: [
          "Votre roue astrologique",
          "Votre Soleil, votre Lune et votre Ascendant",
          "Vos dix principales planètes",
          "Vos éléments et vos modalités",
          "Rapport PDF personnalisé",
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: "49,99 $ US",
        badge: "Analyse approfondie",
        description:
          "Une exploration complète de votre personnalité, de vos maisons, de vos relations et de votre potentiel.",
        features: [
          "Tout le contenu de l’analyse Essentielle",
          "Vos douze maisons astrologiques",
          "Vos aspects planétaires",
          "Vos dominantes astrologiques",
          "Relations, carrière, forces et défis",
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: "79,99 $ US",
        badge: "Le plus complet",
        description:
          "L’analyse la plus complète de votre thème natal, avec vos grandes dynamiques de vie et vos axes d’évolution.",
        features: [
          "Tout le contenu du rapport Premium",
          "Mission de vie et chemin de l’âme",
          "Monde intérieur et blocages inconscients",
          "Talents cachés et guide d’intégration",
          "Synthèse Signature personnalisée",
        ],
        featured: false,
      },
    ],
    recommended: "Recommandé",
    reportPrefix: "Rapport",
    oneTimePayment: "Paiement unique",
    freeChartButton: "Créer ma carte gratuite",
    reportsNote:
      "Commencez gratuitement. Vos offres personnalisées apparaîtront après la création de votre carte du ciel.",
    discoverChartButton: "✨ Découvrir mon thème natal",

    talkToLuna: "✨ Parler avec Luna",
    discoverBooks: "📚 Découvrir les livres",
    freeNote:
      "Gratuit pour commencer · Résultat instantané · Compatible avec mobile",

    reviews: [
      {
        sign: "♈ Bélier",
        name: "Marie L.",
        text:
          "Je ne comprenais plus si ce qu’il ressentait était vrai ou juste un silence. Là, j’ai enfin mis des mots sur ce que je vivais.",
      },
      {
        sign: "♊ Gémeaux",
        name: "Julie R.",
        text:
          "J’attendais un message chaque jour. En quelques minutes, j’ai su si ça venait de lui ou de mes pensées.",
      },
      {
        sign: "♋ Cancer",
        name: "Camille D.",
        text:
          "Il était distant et je tournais en rond. Ça m’a aidée à comprendre mes besoins et mes doutes.",
      },
    ],
    techNote:
      "Fonctionne instantanément sur mobile · Aucun téléchargement nécessaire pour les outils gratuits",
    disclaimer: "Exploration personnelle non thérapeutique.",

    problemIntro:
      "En quelques minutes, vous comprenez mieux ce que vous vivez et les dynamiques qui vous entourent.",
    problems: [
      "Il ou elle est distant(e), et vous ne comprenez pas pourquoi ?",
      "Vous attendez un message, mais rien ne vient ?",
      "Vous sentez que quelque chose cloche sans savoir quoi ?",
    ],

    libraryTitle: "La bibliothèque Luna Astralis",
    librarySubtitle:
      "Découvrez des guides astrologiques conçus pour mieux comprendre votre personnalité, vos relations et votre évolution personnelle.",
    availableAmazon: "Disponible sur Amazon",
    collectionTitle: "Une collection complète d’astrologie",
    collectionDescription:
      "Signes du zodiaque, développement personnel, compatibilité amoureuse et bien plus encore.",
    bookCoverAlt: "Couverture du livre",
    viewAmazon: "Voir sur Amazon",
    fullCollectionTitle:
      "Découvrez toute la collection Luna Astralis",
    fullCollectionDescription:
      "Retrouvez tous les guides astrologiques disponibles sur Amazon.",
    fullCollectionButton: "✨ Voir toute la collection",

    howTitle: "Comment ça fonctionne",
    howSubtitle: "Quatre étapes simples pour commencer.",
    steps: [
      {
        icon: "♈",
        title: "Choisissez votre outil",
        text:
          "Horoscope, carte du ciel, compatibilité ou discussion avec Luna.",
      },
      {
        icon: "🌙",
        title: "Obtenez votre résultat",
        text: "Votre analyse apparaît en quelques secondes.",
      },
      {
        icon: "✧",
        title: "Gagnez en clarté",
        text:
          "Découvrez vos forces, vos besoins, vos défis et vos dynamiques relationnelles.",
      },
      {
        icon: "🔐",
        title: "Allez plus loin",
        text:
          "Choisissez l’analyse Essentielle, Premium ou Signature pour approfondir votre thème natal.",
      },
    ],

    rightsReserved: "Tous droits réservés",
    legalNotices: "Mentions légales",
    privacy: "Confidentialité",
    terms: "Conditions",
    footerNote:
      "Exploration personnelle — non thérapeutique. Réservé aux personnes âgées de 18 ans et plus.",
  },

  en: {
    heroAria: "Introduction to Luna Astralis",
    toolsAria: "Free astrology tools",
    reviewsAria: "User reviews",
    fiveStarsAria: "Five stars out of five",
    legalLinksAria: "Legal links",

    heroBadge: "Birth Chart · Horoscope · Compatibility",
    heroTitle: "Free Birth Chart and Love Compatibility",
    heroSubtitle:
      "Discover your Sun, Moon, Ascendant and romantic chemistry for free.",
    heroLead:
      "Create your birth chart, read your daily horoscope and compare two zodiac signs in seconds.",

    dailyUpdated: "✨ Updated daily",
    horoscopeTitle: "Free Daily Horoscope",
    horoscopeDescription:
      "Read the astrological forecast for your sign and better understand the energy of your day.",
    horoscopeItems: [
      "☀️ General energy",
      "❤️ Love and relationships",
      "💼 Work and projects",
      "💰 Finances",
      "🌿 Well-being",
      "✨ Daily guidance",
    ],
    horoscopeButton: "View my horoscope",

    birthChartTitle: "Free Birth Chart",
    birthChartDescription:
      "Generate your birth chart with your Sun, Moon, Ascendant and astrological wheel.",
    birthChartItems: [
      "☀️ Sun",
      "🌙 Moon",
      "⬆️ Ascendant",
      "🪐 Astrological wheel",
      "✨ Personalized summary",
    ],
    birthChartButton: "Create my chart",

    compatibilityTitle: "Love Compatibility",
    compatibilityDescription:
      "Compare two zodiac signs and instantly receive your score, strengths, challenges and relationship advice.",
    compatibilityItems: [
      "❤️ Love score",
      "✨ Couple strengths",
      "⚠️ Possible challenges",
      "💡 Relationship advice",
      "📊 Instant analysis",
    ],
    compatibilityButton: "Compare two signs",

    trustBadge: "Astrology made accessible",
    trustTitle: "Why choose Luna Astralis?",
    trustSubtitle:
      "Simple, personalized tools designed to help you better understand your personality, relationships and path.",
    trustFeatures: [
      {
        icon: "🔮",
        title: "Personalized astrological calculations",
        text:
          "Your results are calculated from your birth information and adapted to your astrological profile.",
      },
      {
        icon: "⚡",
        title: "Instant results",
        text:
          "Quickly discover your horoscope, birth chart or love compatibility.",
      },
      {
        icon: "📄",
        title: "Detailed PDF reports",
        text:
          "Explore your birth chart more deeply through personalized analyses available as PDF reports.",
      },
      {
        icon: "🌍",
        title: "A multilingual experience",
        text:
          "Explore astrology with clear and accessible explanations in several languages.",
      },
    ],

    reportsBadge: "Personalized astrology reports",
    reportsTitle: "Explore your birth chart more deeply",
    reportsDescription:
      "After creating your free birth chart, choose the level of analysis that suits your needs. Every report is personalized using your birth date, time and location.",
    reports: [
      {
        name: "Essential",
        price: "US$24.99",
        badge: "A great starting point",
        description:
          "A personalized first reading of your birth chart to understand your main astrological energies.",
        features: [
          "Your astrological wheel",
          "Your Sun, Moon and Ascendant",
          "Your ten main planets",
          "Your elements and modalities",
          "Personalized PDF report",
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: "US$49.99",
        badge: "In-depth analysis",
        description:
          "A complete exploration of your personality, houses, relationships and potential.",
        features: [
          "Everything in the Essential analysis",
          "Your twelve astrological houses",
          "Your planetary aspects",
          "Your dominant astrological influences",
          "Relationships, career, strengths and challenges",
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: "US$79.99",
        badge: "Most complete",
        description:
          "Our most complete birth-chart analysis, including your major life dynamics and paths of growth.",
        features: [
          "Everything in the Premium report",
          "Life mission and soul path",
          "Inner world and unconscious blocks",
          "Hidden talents and integration guide",
          "Personalized Signature synthesis",
        ],
        featured: false,
      },
    ],
    recommended: "Recommended",
    reportPrefix: "Report",
    oneTimePayment: "One-time payment",
    freeChartButton: "Create my free chart",
    reportsNote:
      "Start for free. Your personalized offers will appear after you create your birth chart.",
    discoverChartButton: "✨ Discover my birth chart",

    talkToLuna: "✨ Talk with Luna",
    discoverBooks: "📚 Discover the books",
    freeNote:
      "Free to start · Instant result · Mobile friendly",

    reviews: [
      {
        sign: "♈ Aries",
        name: "Marie L.",
        text:
          "I could no longer tell whether what he felt was real or whether it was just silence. This finally helped me put words to what I was experiencing.",
      },
      {
        sign: "♊ Gemini",
        name: "Julie R.",
        text:
          "I waited for a message every day. Within minutes, I understood whether it came from him or from my own thoughts.",
      },
      {
        sign: "♋ Cancer",
        name: "Camille D.",
        text:
          "He was distant and I kept going in circles. This helped me understand my needs and doubts.",
      },
    ],
    techNote:
      "Works instantly on mobile · No download required for free tools",
    disclaimer: "Personal exploration — not therapy.",

    problemIntro:
      "In just a few minutes, gain a clearer understanding of what you are experiencing and the dynamics around you.",
    problems: [
      "They seem distant, and you do not understand why?",
      "You are waiting for a message, but nothing arrives?",
      "You feel that something is wrong without knowing what?",
    ],

    libraryTitle: "The Luna Astralis Library",
    librarySubtitle:
      "Discover astrology guides designed to help you better understand your personality, relationships and personal growth.",
    availableAmazon: "Available on Amazon",
    collectionTitle: "A complete astrology collection",
    collectionDescription:
      "Zodiac signs, personal development, love compatibility and much more.",
    bookCoverAlt: "Book cover",
    viewAmazon: "View on Amazon",
    fullCollectionTitle:
      "Discover the complete Luna Astralis collection",
    fullCollectionDescription:
      "Find all available astrology guides on Amazon.",
    fullCollectionButton: "✨ View the complete collection",

    howTitle: "How it works",
    howSubtitle: "Four simple steps to get started.",
    steps: [
      {
        icon: "♈",
        title: "Choose your tool",
        text:
          "Horoscope, birth chart, compatibility or a conversation with Luna.",
      },
      {
        icon: "🌙",
        title: "Get your result",
        text: "Your analysis appears in just a few seconds.",
      },
      {
        icon: "✧",
        title: "Gain clarity",
        text:
          "Discover your strengths, needs, challenges and relationship dynamics.",
      },
      {
        icon: "🔐",
        title: "Go further",
        text:
          "Choose the Essential, Premium or Signature analysis to explore your birth chart more deeply.",
      },
    ],

    rightsReserved: "All rights reserved",
    legalNotices: "Legal notice",
    privacy: "Privacy",
    terms: "Terms",
    footerNote:
      "Personal exploration — not therapy. For adults aged 18 and over.",
  },

  es: {
    heroAria: "Presentación de Luna Astralis",
    toolsAria: "Herramientas astrológicas gratuitas",
    reviewsAria: "Opiniones de usuarios",
    fiveStarsAria: "Cinco estrellas de cinco",
    legalLinksAria: "Enlaces legales",

    heroBadge: "Carta natal · Horóscopo · Compatibilidad",
    heroTitle: "Carta natal gratis y compatibilidad amorosa",
    heroSubtitle:
      "Descubre gratis tu Sol, tu Luna, tu Ascendente y tu química amorosa.",
    heroLead:
      "Crea tu carta natal, consulta tu horóscopo diario y compara dos signos del zodiaco en pocos segundos.",

    dailyUpdated: "✨ Actualizado cada día",
    horoscopeTitle: "Horóscopo diario gratis",
    horoscopeDescription:
      "Consulta las previsiones astrológicas de tu signo para comprender mejor la energía de tu día.",
    horoscopeItems: [
      "☀️ Energía general",
      "❤️ Amor y relaciones",
      "💼 Trabajo y proyectos",
      "💰 Finanzas",
      "🌿 Bienestar",
      "✨ Consejo del día",
    ],
    horoscopeButton: "Ver mi horóscopo",

    birthChartTitle: "Carta natal gratis",
    birthChartDescription:
      "Genera tu carta natal con tu Sol, tu Luna, tu Ascendente y tu rueda astrológica.",
    birthChartItems: [
      "☀️ Sol",
      "🌙 Luna",
      "⬆️ Ascendente",
      "🪐 Rueda astrológica",
      "✨ Resumen personalizado",
    ],
    birthChartButton: "Crear mi carta",

    compatibilityTitle: "Compatibilidad amorosa",
    compatibilityDescription:
      "Compara dos signos del zodiaco y obtén al instante tu puntuación, fortalezas, desafíos y consejos para la relación.",
    compatibilityItems: [
      "❤️ Puntuación amorosa",
      "✨ Fortalezas de la pareja",
      "⚠️ Posibles desafíos",
      "💡 Consejos de pareja",
      "📊 Análisis instantáneo",
    ],
    compatibilityButton: "Comparar dos signos",

    trustBadge: "Astrología accesible",
    trustTitle: "¿Por qué elegir Luna Astralis?",
    trustSubtitle:
      "Herramientas sencillas y personalizadas para ayudarte a comprender mejor tu personalidad, tus relaciones y tu camino.",
    trustFeatures: [
      {
        icon: "🔮",
        title: "Cálculos astrológicos personalizados",
        text:
          "Tus resultados se calculan a partir de tus datos de nacimiento y se adaptan a tu perfil astrológico.",
      },
      {
        icon: "⚡",
        title: "Resultados instantáneos",
        text:
          "Descubre rápidamente tu horóscopo, tu carta natal o tu compatibilidad amorosa.",
      },
      {
        icon: "📄",
        title: "Informes PDF detallados",
        text:
          "Profundiza en tu carta natal con análisis personalizados disponibles en formato PDF.",
      },
      {
        icon: "🌍",
        title: "Una experiencia multilingüe",
        text:
          "Explora la astrología con explicaciones claras y accesibles en varios idiomas.",
      },
    ],

    reportsBadge: "Informes astrológicos personalizados",
    reportsTitle: "Profundiza en tu carta natal",
    reportsDescription:
      "Después de crear gratis tu carta natal, elige el nivel de análisis que mejor se adapte a tus necesidades. Cada informe se personaliza según tu fecha, hora y lugar de nacimiento.",
    reports: [
      {
        name: "Esencial",
        price: "24,99 US$",
        badge: "Para comenzar",
        description:
          "Una primera lectura personalizada de tu carta natal para comprender tus principales energías astrológicas.",
        features: [
          "Tu rueda astrológica",
          "Tu Sol, tu Luna y tu Ascendente",
          "Tus diez planetas principales",
          "Tus elementos y modalidades",
          "Informe PDF personalizado",
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: "49,99 US$",
        badge: "Análisis profundo",
        description:
          "Una exploración completa de tu personalidad, tus casas, tus relaciones y tu potencial.",
        features: [
          "Todo el contenido del análisis Esencial",
          "Tus doce casas astrológicas",
          "Tus aspectos planetarios",
          "Tus influencias dominantes",
          "Relaciones, carrera, fortalezas y desafíos",
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: "79,99 US$",
        badge: "El más completo",
        description:
          "El análisis más completo de tu carta natal, con tus grandes dinámicas de vida y tus caminos de evolución.",
        features: [
          "Todo el contenido del informe Premium",
          "Misión de vida y camino del alma",
          "Mundo interior y bloqueos inconscientes",
          "Talentos ocultos y guía de integración",
          "Síntesis Signature personalizada",
        ],
        featured: false,
      },
    ],
    recommended: "Recomendado",
    reportPrefix: "Informe",
    oneTimePayment: "Pago único",
    freeChartButton: "Crear mi carta gratis",
    reportsNote:
      "Comienza gratis. Tus ofertas personalizadas aparecerán después de crear tu carta natal.",
    discoverChartButton: "✨ Descubrir mi carta natal",

    talkToLuna: "✨ Hablar con Luna",
    discoverBooks: "📚 Descubrir los libros",
    freeNote:
      "Gratis para comenzar · Resultado instantáneo · Compatible con móvil",

    reviews: [
      {
        sign: "♈ Aries",
        name: "Marie L.",
        text:
          "Ya no sabía si lo que sentía era real o si solo era silencio. Por fin pude poner palabras a lo que estaba viviendo.",
      },
      {
        sign: "♊ Géminis",
        name: "Julie R.",
        text:
          "Esperaba un mensaje cada día. En pocos minutos comprendí si venía de él o de mis propios pensamientos.",
      },
      {
        sign: "♋ Cáncer",
        name: "Camille D.",
        text:
          "Estaba distante y yo daba vueltas sin parar. Esto me ayudó a comprender mis necesidades y mis dudas.",
      },
    ],
    techNote:
      "Funciona al instante en móvil · No es necesario descargar nada para usar las herramientas gratuitas",
    disclaimer: "Exploración personal — no terapéutica.",

    problemIntro:
      "En pocos minutos, comprendes mejor lo que estás viviendo y las dinámicas que te rodean.",
    problems: [
      "¿Está distante y no entiendes por qué?",
      "¿Esperas un mensaje, pero no llega nada?",
      "¿Sientes que algo no está bien sin saber qué?",
    ],

    libraryTitle: "La biblioteca Luna Astralis",
    librarySubtitle:
      "Descubre guías astrológicas creadas para comprender mejor tu personalidad, tus relaciones y tu evolución personal.",
    availableAmazon: "Disponible en Amazon",
    collectionTitle: "Una colección completa de astrología",
    collectionDescription:
      "Signos del zodiaco, desarrollo personal, compatibilidad amorosa y mucho más.",
    bookCoverAlt: "Portada del libro",
    viewAmazon: "Ver en Amazon",
    fullCollectionTitle:
      "Descubre toda la colección Luna Astralis",
    fullCollectionDescription:
      "Encuentra todas las guías astrológicas disponibles en Amazon.",
    fullCollectionButton: "✨ Ver toda la colección",

    howTitle: "Cómo funciona",
    howSubtitle: "Cuatro pasos sencillos para comenzar.",
    steps: [
      {
        icon: "♈",
        title: "Elige tu herramienta",
        text:
          "Horóscopo, carta natal, compatibilidad o conversación con Luna.",
      },
      {
        icon: "🌙",
        title: "Obtén tu resultado",
        text: "Tu análisis aparece en pocos segundos.",
      },
      {
        icon: "✧",
        title: "Gana claridad",
        text:
          "Descubre tus fortalezas, necesidades, desafíos y dinámicas de relación.",
      },
      {
        icon: "🔐",
        title: "Ve más lejos",
        text:
          "Elige el análisis Esencial, Premium o Signature para profundizar en tu carta natal.",
      },
    ],

    rightsReserved: "Todos los derechos reservados",
    legalNotices: "Aviso legal",
    privacy: "Privacidad",
    terms: "Condiciones",
    footerNote:
      "Exploración personal — no terapéutica. Reservado para mayores de 18 años.",
  },

  de: {
    heroAria: "Vorstellung von Luna Astralis",
    toolsAria: "Kostenlose Astrologie-Tools",
    reviewsAria: "Nutzerbewertungen",
    fiveStarsAria: "Fünf von fünf Sternen",
    legalLinksAria: "Rechtliche Links",

    heroBadge: "Geburtshoroskop · Horoskop · Kompatibilität",
    heroTitle: "Kostenloses Geburtshoroskop und Liebeskompatibilität",
    heroSubtitle:
      "Entdecken Sie kostenlos Ihre Sonne, Ihren Mond, Ihren Aszendenten und Ihre romantische Chemie.",
    heroLead:
      "Erstellen Sie Ihr Geburtshoroskop, lesen Sie Ihr Tageshoroskop und vergleichen Sie zwei Tierkreiszeichen in wenigen Sekunden.",

    dailyUpdated: "✨ Täglich aktualisiert",
    horoscopeTitle: "Kostenloses Tageshoroskop",
    horoscopeDescription:
      "Lesen Sie die astrologische Prognose für Ihr Zeichen und verstehen Sie die Energie Ihres Tages besser.",
    horoscopeItems: [
      "☀️ Allgemeine Energie",
      "❤️ Liebe und Beziehungen",
      "💼 Arbeit und Projekte",
      "💰 Finanzen",
      "🌿 Wohlbefinden",
      "✨ Rat des Tages",
    ],
    horoscopeButton: "Mein Horoskop ansehen",

    birthChartTitle: "Kostenloses Geburtshoroskop",
    birthChartDescription:
      "Erstellen Sie Ihr Geburtshoroskop mit Sonne, Mond, Aszendent und astrologischem Rad.",
    birthChartItems: [
      "☀️ Sonne",
      "🌙 Mond",
      "⬆️ Aszendent",
      "🪐 Astrologisches Rad",
      "✨ Persönliche Zusammenfassung",
    ],
    birthChartButton: "Mein Horoskop erstellen",

    compatibilityTitle: "Liebeskompatibilität",
    compatibilityDescription:
      "Vergleichen Sie zwei Tierkreiszeichen und erhalten Sie sofort Ihre Punktzahl, Stärken, Herausforderungen und Beziehungstipps.",
    compatibilityItems: [
      "❤️ Liebeswert",
      "✨ Stärken des Paares",
      "⚠️ Mögliche Herausforderungen",
      "💡 Beziehungstipps",
      "📊 Sofortanalyse",
    ],
    compatibilityButton: "Zwei Zeichen vergleichen",

    trustBadge: "Astrologie leicht zugänglich",
    trustTitle: "Warum Luna Astralis wählen?",
    trustSubtitle:
      "Einfache, personalisierte Werkzeuge, die Ihnen helfen, Ihre Persönlichkeit, Beziehungen und Ihren Weg besser zu verstehen.",
    trustFeatures: [
      {
        icon: "🔮",
        title: "Personalisierte astrologische Berechnungen",
        text:
          "Ihre Ergebnisse werden aus Ihren Geburtsdaten berechnet und an Ihr astrologisches Profil angepasst.",
      },
      {
        icon: "⚡",
        title: "Sofortige Ergebnisse",
        text:
          "Entdecken Sie schnell Ihr Horoskop, Geburtshoroskop oder Ihre Liebeskompatibilität.",
      },
      {
        icon: "📄",
        title: "Detaillierte PDF-Berichte",
        text:
          "Vertiefen Sie Ihr Geburtshoroskop mit personalisierten Analysen im PDF-Format.",
      },
      {
        icon: "🌍",
        title: "Mehrsprachiges Erlebnis",
        text:
          "Entdecken Sie Astrologie mit klaren und verständlichen Erklärungen in mehreren Sprachen.",
      },
    ],

    reportsBadge: "Personalisierte Astrologie-Berichte",
    reportsTitle: "Vertiefen Sie Ihr Geburtshoroskop",
    reportsDescription:
      "Nachdem Sie Ihr kostenloses Geburtshoroskop erstellt haben, wählen Sie die Analyse, die zu Ihren Bedürfnissen passt. Jeder Bericht wird anhand Ihres Geburtsdatums, Ihrer Uhrzeit und Ihres Geburtsortes personalisiert.",
    reports: [
      {
        name: "Essential",
        price: "24,99 US$",
        badge: "Zum Einstieg",
        description:
          "Eine erste persönliche Deutung Ihres Geburtshoroskops, um Ihre wichtigsten astrologischen Energien zu verstehen.",
        features: [
          "Ihr astrologisches Rad",
          "Ihre Sonne, Ihr Mond und Ihr Aszendent",
          "Ihre zehn wichtigsten Planeten",
          "Ihre Elemente und Modalitäten",
          "Personalisierter PDF-Bericht",
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: "49,99 US$",
        badge: "Ausführliche Analyse",
        description:
          "Eine umfassende Erkundung Ihrer Persönlichkeit, Häuser, Beziehungen und Ihres Potenzials.",
        features: [
          "Alle Inhalte der Essential-Analyse",
          "Ihre zwölf astrologischen Häuser",
          "Ihre planetaren Aspekte",
          "Ihre dominanten astrologischen Einflüsse",
          "Beziehungen, Karriere, Stärken und Herausforderungen",
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: "79,99 US$",
        badge: "Am umfassendsten",
        description:
          "Die umfassendste Analyse Ihres Geburtshoroskops mit Ihren großen Lebensdynamiken und Entwicklungspfaden.",
        features: [
          "Alle Inhalte des Premium-Berichts",
          "Lebensaufgabe und Seelenweg",
          "Innere Welt und unbewusste Blockaden",
          "Verborgene Talente und Integrationsleitfaden",
          "Personalisierte Signature-Synthese",
        ],
        featured: false,
      },
    ],
    recommended: "Empfohlen",
    reportPrefix: "Bericht",
    oneTimePayment: "Einmalige Zahlung",
    freeChartButton: "Kostenloses Horoskop erstellen",
    reportsNote:
      "Starten Sie kostenlos. Ihre personalisierten Angebote erscheinen nach der Erstellung Ihres Geburtshoroskops.",
    discoverChartButton: "✨ Mein Geburtshoroskop entdecken",

    talkToLuna: "✨ Mit Luna sprechen",
    discoverBooks: "📚 Bücher entdecken",
    freeNote:
      "Kostenlos starten · Sofortiges Ergebnis · Mobilfreundlich",

    reviews: [
      {
        sign: "♈ Widder",
        name: "Marie L.",
        text:
          "Ich wusste nicht mehr, ob seine Gefühle echt waren oder ob nur Schweigen blieb. Endlich konnte ich ausdrücken, was ich erlebte.",
      },
      {
        sign: "♊ Zwillinge",
        name: "Julie R.",
        text:
          "Ich wartete jeden Tag auf eine Nachricht. Nach wenigen Minuten verstand ich, ob es von ihm oder von meinen eigenen Gedanken kam.",
      },
      {
        sign: "♋ Krebs",
        name: "Camille D.",
        text:
          "Er war distanziert und ich drehte mich im Kreis. Das half mir, meine Bedürfnisse und Zweifel besser zu verstehen.",
      },
    ],
    techNote:
      "Funktioniert sofort auf Mobilgeräten · Für kostenlose Tools ist kein Download erforderlich",
    disclaimer: "Persönliche Erkundung — keine Therapie.",

    problemIntro:
      "In wenigen Minuten verstehen Sie besser, was Sie erleben und welche Dynamiken Sie umgeben.",
    problems: [
      "Die Person wirkt distanziert und Sie verstehen nicht warum?",
      "Sie warten auf eine Nachricht, aber es kommt nichts?",
      "Sie spüren, dass etwas nicht stimmt, wissen aber nicht was?",
    ],

    libraryTitle: "Die Luna-Astralis-Bibliothek",
    librarySubtitle:
      "Entdecken Sie Astrologie-Ratgeber, die Ihnen helfen, Ihre Persönlichkeit, Beziehungen und persönliche Entwicklung besser zu verstehen.",
    availableAmazon: "Bei Amazon erhältlich",
    collectionTitle: "Eine umfassende Astrologie-Sammlung",
    collectionDescription:
      "Tierkreiszeichen, persönliche Entwicklung, Liebeskompatibilität und vieles mehr.",
    bookCoverAlt: "Buchcover",
    viewAmazon: "Bei Amazon ansehen",
    fullCollectionTitle:
      "Entdecken Sie die gesamte Luna-Astralis-Sammlung",
    fullCollectionDescription:
      "Finden Sie alle verfügbaren Astrologie-Ratgeber bei Amazon.",
    fullCollectionButton: "✨ Gesamte Sammlung ansehen",

    howTitle: "So funktioniert es",
    howSubtitle: "Vier einfache Schritte zum Start.",
    steps: [
      {
        icon: "♈",
        title: "Werkzeug auswählen",
        text:
          "Horoskop, Geburtshoroskop, Kompatibilität oder Gespräch mit Luna.",
      },
      {
        icon: "🌙",
        title: "Ergebnis erhalten",
        text: "Ihre Analyse erscheint in wenigen Sekunden.",
      },
      {
        icon: "✧",
        title: "Klarheit gewinnen",
        text:
          "Entdecken Sie Ihre Stärken, Bedürfnisse, Herausforderungen und Beziehungsdynamiken.",
      },
      {
        icon: "🔐",
        title: "Tiefer gehen",
        text:
          "Wählen Sie die Essential-, Premium- oder Signature-Analyse, um Ihr Geburtshoroskop zu vertiefen.",
      },
    ],

    rightsReserved: "Alle Rechte vorbehalten",
    legalNotices: "Impressum",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    footerNote:
      "Persönliche Erkundung — keine Therapie. Nur für Personen ab 18 Jahren.",
  },

  it: {
    heroAria: "Presentazione di Luna Astralis",
    toolsAria: "Strumenti astrologici gratuiti",
    reviewsAria: "Recensioni degli utenti",
    fiveStarsAria: "Cinque stelle su cinque",
    legalLinksAria: "Link legali",

    heroBadge: "Tema natale · Oroscopo · Compatibilità",
    heroTitle: "Tema natale gratuito e compatibilità amorosa",
    heroSubtitle:
      "Scopri gratuitamente il tuo Sole, la tua Luna, il tuo Ascendente e la tua alchimia amorosa.",
    heroLead:
      "Crea il tuo tema natale, consulta il tuo oroscopo quotidiano e confronta due segni zodiacali in pochi secondi.",

    dailyUpdated: "✨ Aggiornato ogni giorno",
    horoscopeTitle: "Oroscopo quotidiano gratuito",
    horoscopeDescription:
      "Consulta le previsioni astrologiche del tuo segno per comprendere meglio l’energia della tua giornata.",
    horoscopeItems: [
      "☀️ Energia generale",
      "❤️ Amore e relazioni",
      "💼 Lavoro e progetti",
      "💰 Finanze",
      "🌿 Benessere",
      "✨ Consiglio del giorno",
    ],
    horoscopeButton: "Vedi il mio oroscopo",

    birthChartTitle: "Tema natale gratuito",
    birthChartDescription:
      "Genera il tuo tema natale con Sole, Luna, Ascendente e ruota astrologica.",
    birthChartItems: [
      "☀️ Sole",
      "🌙 Luna",
      "⬆️ Ascendente",
      "🪐 Ruota astrologica",
      "✨ Sintesi personalizzata",
    ],
    birthChartButton: "Crea il mio tema",

    compatibilityTitle: "Compatibilità amorosa",
    compatibilityDescription:
      "Confronta due segni zodiacali e ottieni subito il punteggio, i punti di forza, le sfide e i consigli per la relazione.",
    compatibilityItems: [
      "❤️ Punteggio d’amore",
      "✨ Punti di forza della coppia",
      "⚠️ Possibili sfide",
      "💡 Consigli di coppia",
      "📊 Analisi immediata",
    ],
    compatibilityButton: "Confronta due segni",

    trustBadge: "Astrologia accessibile",
    trustTitle: "Perché scegliere Luna Astralis?",
    trustSubtitle:
      "Strumenti semplici e personalizzati per aiutarti a comprendere meglio la tua personalità, le tue relazioni e il tuo percorso.",
    trustFeatures: [
      {
        icon: "🔮",
        title: "Calcoli astrologici personalizzati",
        text:
          "I risultati sono calcolati dai tuoi dati di nascita e adattati al tuo profilo astrologico.",
      },
      {
        icon: "⚡",
        title: "Risultati immediati",
        text:
          "Scopri rapidamente il tuo oroscopo, il tema natale o la compatibilità amorosa.",
      },
      {
        icon: "📄",
        title: "Rapporti PDF dettagliati",
        text:
          "Approfondisci il tuo tema natale con analisi personalizzate disponibili in formato PDF.",
      },
      {
        icon: "🌍",
        title: "Un’esperienza multilingue",
        text:
          "Esplora l’astrologia con spiegazioni chiare e accessibili in diverse lingue.",
      },
    ],

    reportsBadge: "Rapporti astrologici personalizzati",
    reportsTitle: "Approfondisci il tuo tema natale",
    reportsDescription:
      "Dopo aver creato gratuitamente il tuo tema natale, scegli il livello di analisi più adatto alle tue esigenze. Ogni rapporto è personalizzato in base a data, ora e luogo di nascita.",
    reports: [
      {
        name: "Essenziale",
        price: "24,99 USD",
        badge: "Per iniziare",
        description:
          "Una prima lettura personalizzata del tuo tema natale per comprendere le principali energie astrologiche.",
        features: [
          "La tua ruota astrologica",
          "Il tuo Sole, la tua Luna e il tuo Ascendente",
          "I tuoi dieci pianeti principali",
          "I tuoi elementi e le tue modalità",
          "Rapporto PDF personalizzato",
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: "49,99 USD",
        badge: "Analisi approfondita",
        description:
          "Un’esplorazione completa della tua personalità, delle case, delle relazioni e del tuo potenziale.",
        features: [
          "Tutto il contenuto dell’analisi Essenziale",
          "Le tue dodici case astrologiche",
          "I tuoi aspetti planetari",
          "Le tue influenze astrologiche dominanti",
          "Relazioni, carriera, punti di forza e sfide",
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: "79,99 USD",
        badge: "Il più completo",
        description:
          "L’analisi più completa del tuo tema natale, con le principali dinamiche di vita e i percorsi di evoluzione.",
        features: [
          "Tutto il contenuto del rapporto Premium",
          "Missione di vita e cammino dell’anima",
          "Mondo interiore e blocchi inconsci",
          "Talenti nascosti e guida all’integrazione",
          "Sintesi Signature personalizzata",
        ],
        featured: false,
      },
    ],
    recommended: "Consigliato",
    reportPrefix: "Rapporto",
    oneTimePayment: "Pagamento unico",
    freeChartButton: "Crea il mio tema gratuito",
    reportsNote:
      "Inizia gratuitamente. Le offerte personalizzate appariranno dopo la creazione del tuo tema natale.",
    discoverChartButton: "✨ Scopri il mio tema natale",

    talkToLuna: "✨ Parla con Luna",
    discoverBooks: "📚 Scopri i libri",
    freeNote:
      "Gratis per iniziare · Risultato immediato · Compatibile con dispositivi mobili",

    reviews: [
      {
        sign: "♈ Ariete",
        name: "Marie L.",
        text:
          "Non capivo più se ciò che provava fosse reale o se ci fosse solo silenzio. Finalmente ho trovato le parole per descrivere ciò che vivevo.",
      },
      {
        sign: "♊ Gemelli",
        name: "Julie R.",
        text:
          "Aspettavo un messaggio ogni giorno. In pochi minuti ho capito se dipendeva da lui o dai miei pensieri.",
      },
      {
        sign: "♋ Cancro",
        name: "Camille D.",
        text:
          "Era distante e continuavo a girare in tondo. Questo mi ha aiutata a capire i miei bisogni e i miei dubbi.",
      },
    ],
    techNote:
      "Funziona subito su mobile · Nessun download richiesto per gli strumenti gratuiti",
    disclaimer: "Esplorazione personale — non terapeutica.",

    problemIntro:
      "In pochi minuti comprendi meglio ciò che stai vivendo e le dinamiche che ti circondano.",
    problems: [
      "È distante e non capisci perché?",
      "Aspetti un messaggio, ma non arriva nulla?",
      "Senti che qualcosa non va senza sapere cosa?",
    ],

    libraryTitle: "La biblioteca Luna Astralis",
    librarySubtitle:
      "Scopri guide astrologiche create per comprendere meglio la tua personalità, le tue relazioni e la tua crescita personale.",
    availableAmazon: "Disponibile su Amazon",
    collectionTitle: "Una collezione completa di astrologia",
    collectionDescription:
      "Segni zodiacali, crescita personale, compatibilità amorosa e molto altro.",
    bookCoverAlt: "Copertina del libro",
    viewAmazon: "Vedi su Amazon",
    fullCollectionTitle:
      "Scopri tutta la collezione Luna Astralis",
    fullCollectionDescription:
      "Trova tutte le guide astrologiche disponibili su Amazon.",
    fullCollectionButton: "✨ Vedi tutta la collezione",

    howTitle: "Come funziona",
    howSubtitle: "Quattro semplici passaggi per iniziare.",
    steps: [
      {
        icon: "♈",
        title: "Scegli il tuo strumento",
        text:
          "Oroscopo, tema natale, compatibilità o conversazione con Luna.",
      },
      {
        icon: "🌙",
        title: "Ottieni il risultato",
        text: "La tua analisi appare in pochi secondi.",
      },
      {
        icon: "✧",
        title: "Ottieni chiarezza",
        text:
          "Scopri i tuoi punti di forza, bisogni, sfide e dinamiche relazionali.",
      },
      {
        icon: "🔐",
        title: "Vai oltre",
        text:
          "Scegli l’analisi Essenziale, Premium o Signature per approfondire il tuo tema natale.",
      },
    ],

    rightsReserved: "Tutti i diritti riservati",
    legalNotices: "Note legali",
    privacy: "Privacy",
    terms: "Condizioni",
    footerNote:
      "Esplorazione personale — non terapeutica. Riservato ai maggiori di 18 anni.",
  },

  pt: {
    heroAria: "Apresentação da Luna Astralis",
    toolsAria: "Ferramentas astrológicas gratuitas",
    reviewsAria: "Avaliações dos usuários",
    fiveStarsAria: "Cinco estrelas de cinco",
    legalLinksAria: "Links legais",

    heroBadge: "Mapa astral · Horóscopo · Compatibilidade",
    heroTitle: "Mapa astral grátis e compatibilidade amorosa",
    heroSubtitle:
      "Descubra gratuitamente seu Sol, sua Lua, seu Ascendente e sua química amorosa.",
    heroLead:
      "Crie seu mapa astral, consulte seu horóscopo diário e compare dois signos do zodíaco em poucos segundos.",

    dailyUpdated: "✨ Atualizado todos os dias",
    horoscopeTitle: "Horóscopo diário grátis",
    horoscopeDescription:
      "Consulte as previsões astrológicas do seu signo para compreender melhor a energia do seu dia.",
    horoscopeItems: [
      "☀️ Energia geral",
      "❤️ Amor e relacionamentos",
      "💼 Trabalho e projetos",
      "💰 Finanças",
      "🌿 Bem-estar",
      "✨ Conselho do dia",
    ],
    horoscopeButton: "Ver meu horóscopo",

    birthChartTitle: "Mapa astral grátis",
    birthChartDescription:
      "Gere seu mapa astral com seu Sol, sua Lua, seu Ascendente e sua roda astrológica.",
    birthChartItems: [
      "☀️ Sol",
      "🌙 Lua",
      "⬆️ Ascendente",
      "🪐 Roda astrológica",
      "✨ Resumo personalizado",
    ],
    birthChartButton: "Criar meu mapa",

    compatibilityTitle: "Compatibilidade amorosa",
    compatibilityDescription:
      "Compare dois signos do zodíaco e receba imediatamente sua pontuação, forças, desafios e conselhos para o relacionamento.",
    compatibilityItems: [
      "❤️ Pontuação amorosa",
      "✨ Forças do casal",
      "⚠️ Possíveis desafios",
      "💡 Conselhos de relacionamento",
      "📊 Análise instantânea",
    ],
    compatibilityButton: "Comparar dois signos",

    trustBadge: "Astrologia acessível",
    trustTitle: "Por que escolher a Luna Astralis?",
    trustSubtitle:
      "Ferramentas simples e personalizadas para ajudar você a compreender melhor sua personalidade, seus relacionamentos e seu caminho.",
    trustFeatures: [
      {
        icon: "🔮",
        title: "Cálculos astrológicos personalizados",
        text:
          "Seus resultados são calculados a partir dos seus dados de nascimento e adaptados ao seu perfil astrológico.",
      },
      {
        icon: "⚡",
        title: "Resultados instantâneos",
        text:
          "Descubra rapidamente seu horóscopo, mapa astral ou compatibilidade amorosa.",
      },
      {
        icon: "📄",
        title: "Relatórios PDF detalhados",
        text:
          "Aprofunde seu mapa astral com análises personalizadas disponíveis em PDF.",
      },
      {
        icon: "🌍",
        title: "Uma experiência multilíngue",
        text:
          "Explore a astrologia com explicações claras e acessíveis em vários idiomas.",
      },
    ],

    reportsBadge: "Relatórios astrológicos personalizados",
    reportsTitle: "Aprofunde seu mapa astral",
    reportsDescription:
      "Depois de criar gratuitamente seu mapa astral, escolha o nível de análise ideal para suas necessidades. Cada relatório é personalizado com sua data, hora e local de nascimento.",
    reports: [
      {
        name: "Essencial",
        price: "US$ 24,99",
        badge: "Para começar",
        description:
          "Uma primeira leitura personalizada do seu mapa astral para compreender suas principais energias astrológicas.",
        features: [
          "Sua roda astrológica",
          "Seu Sol, sua Lua e seu Ascendente",
          "Seus dez planetas principais",
          "Seus elementos e modalidades",
          "Relatório PDF personalizado",
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: "US$ 49,99",
        badge: "Análise aprofundada",
        description:
          "Uma exploração completa da sua personalidade, das casas, dos relacionamentos e do seu potencial.",
        features: [
          "Todo o conteúdo da análise Essencial",
          "Suas doze casas astrológicas",
          "Seus aspectos planetários",
          "Suas influências astrológicas dominantes",
          "Relacionamentos, carreira, forças e desafios",
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: "US$ 79,99",
        badge: "O mais completo",
        description:
          "A análise mais completa do seu mapa astral, com suas grandes dinâmicas de vida e caminhos de evolução.",
        features: [
          "Todo o conteúdo do relatório Premium",
          "Missão de vida e caminho da alma",
          "Mundo interior e bloqueios inconscientes",
          "Talentos ocultos e guia de integração",
          "Síntese Signature personalizada",
        ],
        featured: false,
      },
    ],
    recommended: "Recomendado",
    reportPrefix: "Relatório",
    oneTimePayment: "Pagamento único",
    freeChartButton: "Criar meu mapa grátis",
    reportsNote:
      "Comece gratuitamente. Suas ofertas personalizadas aparecerão depois da criação do seu mapa astral.",
    discoverChartButton: "✨ Descobrir meu mapa astral",

    talkToLuna: "✨ Falar com Luna",
    discoverBooks: "📚 Descobrir os livros",
    freeNote:
      "Grátis para começar · Resultado instantâneo · Compatível com celular",

    reviews: [
      {
        sign: "♈ Áries",
        name: "Marie L.",
        text:
          "Eu já não sabia se o que ele sentia era real ou se havia apenas silêncio. Finalmente consegui colocar em palavras o que eu vivia.",
      },
      {
        sign: "♊ Gêmeos",
        name: "Julie R.",
        text:
          "Eu esperava uma mensagem todos os dias. Em poucos minutos, entendi se aquilo vinha dele ou dos meus próprios pensamentos.",
      },
      {
        sign: "♋ Câncer",
        name: "Camille D.",
        text:
          "Ele estava distante e eu continuava andando em círculos. Isso me ajudou a compreender minhas necessidades e dúvidas.",
      },
    ],
    techNote:
      "Funciona instantaneamente no celular · Nenhum download é necessário para as ferramentas gratuitas",
    disclaimer: "Exploração pessoal — não terapêutica.",

    problemIntro:
      "Em poucos minutos, você entende melhor o que está vivendo e as dinâmicas ao seu redor.",
    problems: [
      "A pessoa está distante e você não entende por quê?",
      "Você espera uma mensagem, mas nada chega?",
      "Você sente que algo está errado sem saber o quê?",
    ],

    libraryTitle: "A biblioteca Luna Astralis",
    librarySubtitle:
      "Descubra guias astrológicos criados para compreender melhor sua personalidade, seus relacionamentos e sua evolução pessoal.",
    availableAmazon: "Disponível na Amazon",
    collectionTitle: "Uma coleção completa de astrologia",
    collectionDescription:
      "Signos do zodíaco, desenvolvimento pessoal, compatibilidade amorosa e muito mais.",
    bookCoverAlt: "Capa do livro",
    viewAmazon: "Ver na Amazon",
    fullCollectionTitle:
      "Descubra toda a coleção Luna Astralis",
    fullCollectionDescription:
      "Encontre todos os guias astrológicos disponíveis na Amazon.",
    fullCollectionButton: "✨ Ver toda a coleção",

    howTitle: "Como funciona",
    howSubtitle: "Quatro passos simples para começar.",
    steps: [
      {
        icon: "♈",
        title: "Escolha sua ferramenta",
        text:
          "Horóscopo, mapa astral, compatibilidade ou conversa com Luna.",
      },
      {
        icon: "🌙",
        title: "Receba seu resultado",
        text: "Sua análise aparece em poucos segundos.",
      },
      {
        icon: "✧",
        title: "Ganhe clareza",
        text:
          "Descubra suas forças, necessidades, desafios e dinâmicas de relacionamento.",
      },
      {
        icon: "🔐",
        title: "Vá mais longe",
        text:
          "Escolha a análise Essencial, Premium ou Signature para aprofundar seu mapa astral.",
      },
    ],

    rightsReserved: "Todos os direitos reservados",
    legalNotices: "Aviso legal",
    privacy: "Privacidade",
    terms: "Condições",
    footerNote:
      "Exploração pessoal — não terapêutica. Reservado para maiores de 18 anos.",
  },
};

/*
|--------------------------------------------------------------------------
| Langue de la page
|--------------------------------------------------------------------------
*/

function getLocaleFromPathname(
  pathname: string
): Locale {
  const firstSegment =
    pathname.split("/")[1];

  return firstSegment &&
    isLocale(firstSegment)
    ? firstSegment
    : defaultLocale;
}

/*
|--------------------------------------------------------------------------
| Page principale
|--------------------------------------------------------------------------
*/

export default function HomePage() {
  const pathname =
    usePathname();

  const locale =
    getLocaleFromPathname(
      pathname
    );

  const text =
    HOME_TRANSLATIONS[
      locale
    ];

  const year =
    new Date().getFullYear();

  return (
    <div className="page-astro">
      <AuthProvider>
        <SiteHeader />

        <main
          className="wrap"
          role="main"
        >
          <section
            className="hero-astro"
            aria-label={
              text.heroAria
            }
          >
            <div className="hero-inner">
              <div className="hero-top">
                <div className="hero-kicker">
                  <span className="astro-mark">
                    ☾ Luna Astralis
                  </span>

                  <span className="hero-badge">
                    {text.heroBadge}
                  </span>
                </div>

                <h1 className="hero-title">
                  {text.heroTitle}
                </h1>

                <p className="hero-sub">
                  {text.heroSubtitle}
                </p>

                <p className="lead">
                  {text.heroLead}
                </p>
              </div>

              <section
                className="hero-tools-section"
                aria-label={
                  text.toolsAria
                }
              >
                <div className="hero-showcase">
                  <article className="hero-tool-card hero-tool-card--horoscope">
                    <div
                      className="hero-tool-icon"
                      aria-hidden="true"
                    >
                      🔮
                    </div>

                    <div className="hero-tool-label">
                      {text.dailyUpdated}
                    </div>

                    <h2>
                      {text.horoscopeTitle}
                    </h2>

                    <p>
                      {
                        text.horoscopeDescription
                      }
                    </p>

                    <ul>
                      {text.horoscopeItems.map(
                        (item) => (
                          <li key={item}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                    <Link
                      href="/horoscope"
                      className="hero-free-btn hero-free-btn--pulse"
                    >
                      {
                        text.horoscopeButton
                      }
                    </Link>
                  </article>

                  <div className="hero-video-card">
                    <WelcomeVideo />
                  </div>

                  <article className="hero-tool-card">
                    <div
                      className="hero-tool-icon"
                      aria-hidden="true"
                    >
                      🌌
                    </div>

                    <h2>
                      {text.birthChartTitle}
                    </h2>

                    <p>
                      {
                        text.birthChartDescription
                      }
                    </p>

                    <ul>
                      {text.birthChartItems.map(
                        (item) => (
                          <li key={item}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                    <Link
                      href="/carte-du-ciel"
                      className="hero-free-btn"
                    >
                      {
                        text.birthChartButton
                      }
                    </Link>
                  </article>
                </div>

                <article className="hero-tool-card hero-tool-card--compatibility">
                  <div
                    className="hero-tool-icon"
                    aria-hidden="true"
                  >
                    💕
                  </div>

                  <div className="hero-compatibility-content">
                    <div>
                      <h2>
                        {
                          text.compatibilityTitle
                        }
                      </h2>

                      <p>
                        {
                          text.compatibilityDescription
                        }
                      </p>
                    </div>

                    <ul>
                      {text.compatibilityItems.map(
                        (item) => (
                          <li key={item}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                    <Link
                      href="/compatibilite"
                      className="hero-free-btn"
                    >
                      {
                        text.compatibilityButton
                      }
                    </Link>
                  </div>
                </article>
              </section>

              <section
                className="trust-section"
                aria-labelledby="trust-section-title"
              >
                <div className="section-head">
                  <span className="hero-badge">
                    {text.trustBadge}
                  </span>

                  <h2 id="trust-section-title">
                    {text.trustTitle}
                  </h2>

                  <p className="section-sub">
                    {text.trustSubtitle}
                  </p>
                </div>

                <div className="trust-grid">
                  {text.trustFeatures.map(
                    (feature) => (
                      <article
                        className="trust-card"
                        key={feature.title}
                      >
                        <div
                          className="trust-card-icon"
                          aria-hidden="true"
                        >
                          {feature.icon}
                        </div>

                        <h3>
                          {feature.title}
                        </h3>

                        <p>
                          {feature.text}
                        </p>
                      </article>
                    )
                  )}
                </div>
              </section>

              <section
                id="rapports"
                className="reports-preview"
                aria-labelledby="reports-preview-title"
              >
                <div className="reports-preview-head">
                  <span className="hero-badge">
                    {text.reportsBadge}
                  </span>

                  <h2 id="reports-preview-title">
                    {text.reportsTitle}
                  </h2>

                  <p>
                    {
                      text.reportsDescription
                    }
                  </p>
                </div>

                <div className="reports-preview-grid">
                  {text.reports.map(
                    (report) => (
                      <article
                        key={report.name}
                        className={[
                          "report-preview-card",
                          report.featured
                            ? "report-preview-card--featured"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {report.featured && (
                          <div className="report-featured-label">
                            {
                              text.recommended
                            }
                          </div>
                        )}

                        <div className="report-preview-badge">
                          {report.badge}
                        </div>

                        <h3>
                          {
                            text.reportPrefix
                          }{" "}
                          {report.name}
                        </h3>

                        <div className="report-preview-price">
                          {report.price}
                        </div>

                        <div className="report-preview-payment">
                          {
                            text.oneTimePayment
                          }
                        </div>

                        <p className="report-preview-description">
                          {
                            report.description
                          }
                        </p>

                        <ul className="report-preview-features">
                          {report.features.map(
                            (feature) => (
                              <li
                                key={
                                  feature
                                }
                              >
                                <span aria-hidden="true">
                                  ✓
                                </span>
                                <span>
                                  {
                                    feature
                                  }
                                </span>
                              </li>
                            )
                          )}
                        </ul>

                        <Link
                          href="/carte-du-ciel"
                          className={[
                            "hero-free-btn",
                            report.featured
                              ? "hero-free-btn--pulse"
                              : "",
                          ]
                            .filter(
                              Boolean
                            )
                            .join(" ")}
                        >
                          {
                            text.freeChartButton
                          }
                        </Link>
                      </article>
                    )
                  )}
                </div>

                <div className="reports-preview-note">
                  <p>
                    {text.reportsNote}
                  </p>

                  <Link
                    href="/carte-du-ciel"
                    className="hero-free-btn hero-free-btn--pulse"
                  >
                    {
                      text.discoverChartButton
                    }
                  </Link>
                </div>
              </section>

              <div className="hero-secondary-actions">
                <a
                  href="#signes"
                  className="hero-free-btn"
                >
                  {text.talkToLuna}
                </a>

                <a
                  href="#livres"
                  className="hero-free-btn"
                >
                  {
                    text.discoverBooks
                  }
                </a>
              </div>

              <p className="hero-free-note">
                {text.freeNote}
              </p>

              <section
                className="mini-reviews"
                aria-label={
                  text.reviewsAria
                }
              >
                {text.reviews.map(
                  (review) => (
                    <article
                      key={`${review.name}-${review.sign}`}
                      className="mini-review"
                    >
                      <div className="mini-review-top">
                        <div className="mini-review-name">
                          {
                            review.name
                          }
                        </div>

                        <div
                          className="mini-review-stars"
                          aria-label={
                            text.fiveStarsAria
                          }
                        >
                          ★★★★★
                        </div>
                      </div>

                      <div className="mini-review-sign">
                        {review.sign}
                      </div>

                      <p className="mini-review-text">
                        {review.text}
                      </p>
                    </article>
                  )
                )}
              </section>

              <p className="hero-tech">
                {text.techNote}
              </p>

              <p className="hero-disclaimer">
                {text.disclaimer}
              </p>
            </div>
          </section>

          <section className="section-problem">
            <p className="problem-intro">
              {text.problemIntro}
            </p>

            <ul className="problem-list">
              {text.problems.map(
                (problem) => (
                  <li key={problem}>
                    {problem}
                  </li>
                )
              )}
            </ul>
          </section>

          <section
            id="livres"
            className="section books-section"
          >
            <div className="section-head">
              <h2>
                {text.libraryTitle}
              </h2>

              <p className="section-sub">
                {
                  text.librarySubtitle
                }
              </p>
            </div>

            <div className="books-intro">
              <div className="hero-badge">
                {
                  text.availableAmazon
                }
              </div>

              <h3>
                {
                  text.collectionTitle
                }
              </h3>

              <p>
                {
                  text.collectionDescription
                }
              </p>
            </div>

            <div className="books-grid">
              {BOOKS.map((book) => (
                <article
                  className="book-card"
                  key={book.title}
                >
                  <img
                    src={`/books/${book.image}`}
                    alt={`${text.bookCoverAlt} ${book.title}`}
                    loading="lazy"
                  />

                  <h3>
                    {book.title}
                  </h3>

                  <a
                    href={book.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-free-btn"
                  >
                    {text.viewAmazon}
                  </a>
                </article>
              ))}
            </div>

            <div className="book-final-cta">
              <h3>
                {
                  text.fullCollectionTitle
                }
              </h3>

              <p>
                {
                  text.fullCollectionDescription
                }
              </p>

              <a
                href={
                  AMAZON_AUTHOR_LINK
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hero-free-btn"
              >
                {
                  text.fullCollectionButton
                }
              </a>
            </div>
          </section>

          <section
            id="comment"
            className="section"
          >
            <div className="section-head">
              <h2>
                {text.howTitle}
              </h2>

              <p className="section-sub">
                {text.howSubtitle}
              </p>
            </div>

            <div className="grid4">
              {text.steps.map(
                (step, index) => (
                  <article
                    className="box step"
                    key={step.title}
                  >
                    <div className="step-top">
                      <span className="step-n">
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="step-ico">
                        {step.icon}
                      </span>
                    </div>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          <div id="signes">
            <SignGrid />
          </div>

          <footer className="site-footer">
            <div className="footer-card">
              <div className="footer-row">
                <div className="footer-left">
                  <div className="footer-brand">
                    Luna Astralis
                  </div>

                  <div className="footer-copy">
                    © {year} ·{" "}
                    {
                      text.rightsReserved
                    }
                  </div>
                </div>

                <nav
                  className="footer-links"
                  aria-label={
                    text.legalLinksAria
                  }
                >
                  <Link href="/mentions-legales">
                    {
                      text.legalNotices
                    }
                  </Link>

                  <span className="sep">
                    •
                  </span>

                  <Link href="/confidentialite">
                    {text.privacy}
                  </Link>

                  <span className="sep">
                    •
                  </span>

                  <Link href="/conditions">
                    {text.terms}
                  </Link>

                  <span className="sep">
                    •
                  </span>

                  <Link href="/age-18">
                    18+
                  </Link>
                </nav>
              </div>

              <div className="footer-note">
                {text.footerNote}
              </div>
            </div>
          </footer>
        </main>
      </AuthProvider>
    </div>
  );
}
