"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import { useAuth } from "./AuthProvider";
import LanguageSwitcher from "./LanguageSwitcher";

import {
  defaultLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";

import "./SiteHeader.css";

type HeaderText = {
  brandSubtitle: string;
  home: string;
  horoscope: string;
  yourHoroscope: string;
  freeOrPersonalized: string;
  freeHoroscope: string;
  twelveSignsToday: string;
  dailyPremium: string;
  personalizedDay: string;
  monthlyPremium: string;
  monthlyTrends: string;
  yearlyPremium: string;
  completeYear: string;
  compareOffers: string;
  dayMonthYear: string;
  birthChart: string;
  yourBirthChart: string;
  freeOrDetailed: string;
  freeBirthChart: string;
  createBirthChart: string;
  essentialReport: string;
  firstAnalysis: string;
  premiumReport: string;
  inDepthAnalysis: string;
  signatureReport: string;
  mostComplete: string;
  compatibility: string;
  loveCompatibility: string;
  freeOrPersonalizedFeminine: string;
  freeCompatibility: string;
  compareTwoSigns: string;
  premiumCompatibility: string;
  completeCoupleAnalysis: string;
  astrology: string;
  exploreAstrology: string;
  signsPlanetsHousesAspects: string;
  discoverAstrology: string;
  mainPage: string;
  signs: string;
  twelveZodiacSigns: string;
  planets: string;
  theirInfluences: string;
  houses: string;
  lifeAreas: string;
  aspects: string;
  planetaryConnections: string;
  sun: string;
  identityVitality: string;
  moon: string;
  emotionsIntuition: string;
  ascendant: string;
  imagePersonality: string;
  books: string;
  lunaAI: string;
  account: string;
  login: string;
  openMenu: string;
  closeMenu: string;
  mainNavigation: string;
  homeAria: string;
};

const HEADER_TRANSLATIONS: Record<Locale, HeaderText> = {
  fr: {
    brandSubtitle: "Astrologie & découverte de soi",
    home: "Accueil",
    horoscope: "Horoscope",
    yourHoroscope: "Votre horoscope",
    freeOrPersonalized: "Gratuit ou personnalisé",
    freeHoroscope: "Horoscope gratuit",
    twelveSignsToday: "Les 12 signes du jour",
    dailyPremium: "Premium du jour",
    personalizedDay: "Votre journée personnalisée",
    monthlyPremium: "Premium du mois",
    monthlyTrends: "Vos tendances du mois",
    yearlyPremium: "Premium de l’année",
    completeYear: "Votre année complète",
    compareOffers: "Comparer les offres",
    dayMonthYear: "Jour, mois ou année",
    birthChart: "Carte du ciel",
    yourBirthChart: "Votre carte du ciel",
    freeOrDetailed: "Gratuite ou détaillée",
    freeBirthChart: "Carte du ciel gratuite",
    createBirthChart: "Créez votre thème astral",
    essentialReport: "Rapport Essentielle",
    firstAnalysis: "Première analyse — 24,99 $ US",
    premiumReport: "Rapport Premium",
    inDepthAnalysis: "Analyse approfondie — 49,99 $ US",
    signatureReport: "Rapport Signature",
    mostComplete: "Le plus complet — 79,99 $ US",
    compatibility: "Compatibilité",
    loveCompatibility: "Compatibilité amoureuse",
    freeOrPersonalizedFeminine: "Gratuite ou personnalisée",
    freeCompatibility: "Compatibilité gratuite",
    compareTwoSigns: "Comparez deux signes",
    premiumCompatibility: "Compatibilité Premium",
    completeCoupleAnalysis: "Analyse complète du couple",
    astrology: "Astrologie",
    exploreAstrology: "Explorer l’astrologie",
    signsPlanetsHousesAspects: "Signes, planètes, maisons et aspects",
    discoverAstrology: "Découvrir l’astrologie",
    mainPage: "La page principale",
    signs: "Les signes",
    twelveZodiacSigns: "Les 12 signes du zodiaque",
    planets: "Les planètes",
    theirInfluences: "Leurs influences",
    houses: "Les maisons",
    lifeAreas: "Les domaines de vie",
    aspects: "Les aspects",
    planetaryConnections: "Les liens planétaires",
    sun: "Le Soleil",
    identityVitality: "Identité et vitalité",
    moon: "La Lune",
    emotionsIntuition: "Émotions et intuition",
    ascendant: "L’Ascendant",
    imagePersonality: "Image et personnalité",
    books: "Livres",
    lunaAI: "Luna IA",
    account: "Mon compte",
    login: "Se connecter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNavigation: "Navigation principale",
    homeAria: "Accueil Luna Astralis",
  },
  en: {
    brandSubtitle: "Astrology & self-discovery",
    home: "Home",
    horoscope: "Horoscope",
    yourHoroscope: "Your horoscope",
    freeOrPersonalized: "Free or personalized",
    freeHoroscope: "Free horoscope",
    twelveSignsToday: "Today’s 12 zodiac signs",
    dailyPremium: "Daily Premium",
    personalizedDay: "Your personalized day",
    monthlyPremium: "Monthly Premium",
    monthlyTrends: "Your monthly trends",
    yearlyPremium: "Yearly Premium",
    completeYear: "Your complete year",
    compareOffers: "Compare plans",
    dayMonthYear: "Day, month or year",
    birthChart: "Birth chart",
    yourBirthChart: "Your birth chart",
    freeOrDetailed: "Free or detailed",
    freeBirthChart: "Free birth chart",
    createBirthChart: "Create your birth chart",
    essentialReport: "Essential Report",
    firstAnalysis: "First analysis — US$24.99",
    premiumReport: "Premium Report",
    inDepthAnalysis: "In-depth analysis — US$49.99",
    signatureReport: "Signature Report",
    mostComplete: "Most complete — US$79.99",
    compatibility: "Compatibility",
    loveCompatibility: "Love compatibility",
    freeOrPersonalizedFeminine: "Free or personalized",
    freeCompatibility: "Free compatibility",
    compareTwoSigns: "Compare two signs",
    premiumCompatibility: "Premium Compatibility",
    completeCoupleAnalysis: "Complete couple analysis",
    astrology: "Astrology",
    exploreAstrology: "Explore astrology",
    signsPlanetsHousesAspects: "Signs, planets, houses and aspects",
    discoverAstrology: "Discover astrology",
    mainPage: "Main page",
    signs: "Zodiac signs",
    twelveZodiacSigns: "The 12 zodiac signs",
    planets: "Planets",
    theirInfluences: "Their influences",
    houses: "Houses",
    lifeAreas: "Areas of life",
    aspects: "Aspects",
    planetaryConnections: "Planetary connections",
    sun: "The Sun",
    identityVitality: "Identity and vitality",
    moon: "The Moon",
    emotionsIntuition: "Emotions and intuition",
    ascendant: "The Ascendant",
    imagePersonality: "Image and personality",
    books: "Books",
    lunaAI: "Luna AI",
    account: "My account",
    login: "Sign in",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNavigation: "Main navigation",
    homeAria: "Luna Astralis home",
  },
  es: {
    brandSubtitle: "Astrología y autoconocimiento",
    home: "Inicio",
    horoscope: "Horóscopo",
    yourHoroscope: "Tu horóscopo",
    freeOrPersonalized: "Gratis o personalizado",
    freeHoroscope: "Horóscopo gratis",
    twelveSignsToday: "Los 12 signos de hoy",
    dailyPremium: "Premium diario",
    personalizedDay: "Tu día personalizado",
    monthlyPremium: "Premium mensual",
    monthlyTrends: "Tus tendencias del mes",
    yearlyPremium: "Premium anual",
    completeYear: "Tu año completo",
    compareOffers: "Comparar ofertas",
    dayMonthYear: "Día, mes o año",
    birthChart: "Carta natal",
    yourBirthChart: "Tu carta natal",
    freeOrDetailed: "Gratis o detallada",
    freeBirthChart: "Carta natal gratis",
    createBirthChart: "Crea tu carta natal",
    essentialReport: "Informe Esencial",
    firstAnalysis: "Primer análisis — 24,99 US$",
    premiumReport: "Informe Premium",
    inDepthAnalysis: "Análisis profundo — 49,99 US$",
    signatureReport: "Informe Signature",
    mostComplete: "El más completo — 79,99 US$",
    compatibility: "Compatibilidad",
    loveCompatibility: "Compatibilidad amorosa",
    freeOrPersonalizedFeminine: "Gratis o personalizada",
    freeCompatibility: "Compatibilidad gratis",
    compareTwoSigns: "Compara dos signos",
    premiumCompatibility: "Compatibilidad Premium",
    completeCoupleAnalysis: "Análisis completo de la pareja",
    astrology: "Astrología",
    exploreAstrology: "Explorar la astrología",
    signsPlanetsHousesAspects: "Signos, planetas, casas y aspectos",
    discoverAstrology: "Descubrir la astrología",
    mainPage: "Página principal",
    signs: "Los signos",
    twelveZodiacSigns: "Los 12 signos del zodiaco",
    planets: "Los planetas",
    theirInfluences: "Sus influencias",
    houses: "Las casas",
    lifeAreas: "Las áreas de la vida",
    aspects: "Los aspectos",
    planetaryConnections: "Las conexiones planetarias",
    sun: "El Sol",
    identityVitality: "Identidad y vitalidad",
    moon: "La Luna",
    emotionsIntuition: "Emociones e intuición",
    ascendant: "El Ascendente",
    imagePersonality: "Imagen y personalidad",
    books: "Libros",
    lunaAI: "Luna IA",
    account: "Mi cuenta",
    login: "Iniciar sesión",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNavigation: "Navegación principal",
    homeAria: "Inicio de Luna Astralis",
  },
  de: {
    brandSubtitle: "Astrologie & Selbsterkenntnis",
    home: "Startseite",
    horoscope: "Horoskop",
    yourHoroscope: "Ihr Horoskop",
    freeOrPersonalized: "Kostenlos oder personalisiert",
    freeHoroscope: "Kostenloses Horoskop",
    twelveSignsToday: "Die 12 Zeichen des Tages",
    dailyPremium: "Tages-Premium",
    personalizedDay: "Ihr personalisierter Tag",
    monthlyPremium: "Monats-Premium",
    monthlyTrends: "Ihre Monatstrends",
    yearlyPremium: "Jahres-Premium",
    completeYear: "Ihr vollständiges Jahr",
    compareOffers: "Angebote vergleichen",
    dayMonthYear: "Tag, Monat oder Jahr",
    birthChart: "Geburtshoroskop",
    yourBirthChart: "Ihr Geburtshoroskop",
    freeOrDetailed: "Kostenlos oder ausführlich",
    freeBirthChart: "Kostenloses Geburtshoroskop",
    createBirthChart: "Erstellen Sie Ihr Geburtshoroskop",
    essentialReport: "Essential-Bericht",
    firstAnalysis: "Erste Analyse — 24,99 US$",
    premiumReport: "Premium-Bericht",
    inDepthAnalysis: "Ausführliche Analyse — 49,99 US$",
    signatureReport: "Signature-Bericht",
    mostComplete: "Am umfassendsten — 79,99 US$",
    compatibility: "Kompatibilität",
    loveCompatibility: "Liebeskompatibilität",
    freeOrPersonalizedFeminine: "Kostenlos oder personalisiert",
    freeCompatibility: "Kostenlose Kompatibilität",
    compareTwoSigns: "Zwei Zeichen vergleichen",
    premiumCompatibility: "Premium-Kompatibilität",
    completeCoupleAnalysis: "Vollständige Paaranalyse",
    astrology: "Astrologie",
    exploreAstrology: "Astrologie entdecken",
    signsPlanetsHousesAspects: "Zeichen, Planeten, Häuser und Aspekte",
    discoverAstrology: "Astrologie kennenlernen",
    mainPage: "Hauptseite",
    signs: "Die Zeichen",
    twelveZodiacSigns: "Die 12 Tierkreiszeichen",
    planets: "Die Planeten",
    theirInfluences: "Ihre Einflüsse",
    houses: "Die Häuser",
    lifeAreas: "Lebensbereiche",
    aspects: "Die Aspekte",
    planetaryConnections: "Planetare Verbindungen",
    sun: "Die Sonne",
    identityVitality: "Identität und Vitalität",
    moon: "Der Mond",
    emotionsIntuition: "Emotionen und Intuition",
    ascendant: "Der Aszendent",
    imagePersonality: "Auftreten und Persönlichkeit",
    books: "Bücher",
    lunaAI: "Luna KI",
    account: "Mein Konto",
    login: "Anmelden",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    mainNavigation: "Hauptnavigation",
    homeAria: "Luna-Astralis-Startseite",
  },
  it: {
    brandSubtitle: "Astrologia e scoperta di sé",
    home: "Home",
    horoscope: "Oroscopo",
    yourHoroscope: "Il tuo oroscopo",
    freeOrPersonalized: "Gratuito o personalizzato",
    freeHoroscope: "Oroscopo gratuito",
    twelveSignsToday: "I 12 segni di oggi",
    dailyPremium: "Premium giornaliero",
    personalizedDay: "La tua giornata personalizzata",
    monthlyPremium: "Premium mensile",
    monthlyTrends: "Le tendenze del mese",
    yearlyPremium: "Premium annuale",
    completeYear: "Il tuo anno completo",
    compareOffers: "Confronta le offerte",
    dayMonthYear: "Giorno, mese o anno",
    birthChart: "Tema natale",
    yourBirthChart: "Il tuo tema natale",
    freeOrDetailed: "Gratuito o dettagliato",
    freeBirthChart: "Tema natale gratuito",
    createBirthChart: "Crea il tuo tema natale",
    essentialReport: "Rapporto Essenziale",
    firstAnalysis: "Prima analisi — 24,99 USD",
    premiumReport: "Rapporto Premium",
    inDepthAnalysis: "Analisi approfondita — 49,99 USD",
    signatureReport: "Rapporto Signature",
    mostComplete: "Il più completo — 79,99 USD",
    compatibility: "Compatibilità",
    loveCompatibility: "Compatibilità amorosa",
    freeOrPersonalizedFeminine: "Gratuita o personalizzata",
    freeCompatibility: "Compatibilità gratuita",
    compareTwoSigns: "Confronta due segni",
    premiumCompatibility: "Compatibilità Premium",
    completeCoupleAnalysis: "Analisi completa della coppia",
    astrology: "Astrologia",
    exploreAstrology: "Esplora l’astrologia",
    signsPlanetsHousesAspects: "Segni, pianeti, case e aspetti",
    discoverAstrology: "Scopri l’astrologia",
    mainPage: "Pagina principale",
    signs: "I segni",
    twelveZodiacSigns: "I 12 segni zodiacali",
    planets: "I pianeti",
    theirInfluences: "Le loro influenze",
    houses: "Le case",
    lifeAreas: "Gli ambiti della vita",
    aspects: "Gli aspetti",
    planetaryConnections: "I legami planetari",
    sun: "Il Sole",
    identityVitality: "Identità e vitalità",
    moon: "La Luna",
    emotionsIntuition: "Emozioni e intuizione",
    ascendant: "L’Ascendente",
    imagePersonality: "Immagine e personalità",
    books: "Libri",
    lunaAI: "Luna IA",
    account: "Il mio account",
    login: "Accedi",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    mainNavigation: "Navigazione principale",
    homeAria: "Home di Luna Astralis",
  },
  pt: {
    brandSubtitle: "Astrologia e autoconhecimento",
    home: "Início",
    horoscope: "Horóscopo",
    yourHoroscope: "Seu horóscopo",
    freeOrPersonalized: "Grátis ou personalizado",
    freeHoroscope: "Horóscopo grátis",
    twelveSignsToday: "Os 12 signos de hoje",
    dailyPremium: "Premium diário",
    personalizedDay: "Seu dia personalizado",
    monthlyPremium: "Premium mensal",
    monthlyTrends: "Suas tendências do mês",
    yearlyPremium: "Premium anual",
    completeYear: "Seu ano completo",
    compareOffers: "Comparar ofertas",
    dayMonthYear: "Dia, mês ou ano",
    birthChart: "Mapa astral",
    yourBirthChart: "Seu mapa astral",
    freeOrDetailed: "Grátis ou detalhado",
    freeBirthChart: "Mapa astral grátis",
    createBirthChart: "Crie seu mapa astral",
    essentialReport: "Relatório Essencial",
    firstAnalysis: "Primeira análise — US$ 24,99",
    premiumReport: "Relatório Premium",
    inDepthAnalysis: "Análise aprofundada — US$ 49,99",
    signatureReport: "Relatório Signature",
    mostComplete: "O mais completo — US$ 79,99",
    compatibility: "Compatibilidade",
    loveCompatibility: "Compatibilidade amorosa",
    freeOrPersonalizedFeminine: "Grátis ou personalizada",
    freeCompatibility: "Compatibilidade grátis",
    compareTwoSigns: "Compare dois signos",
    premiumCompatibility: "Compatibilidade Premium",
    completeCoupleAnalysis: "Análise completa do casal",
    astrology: "Astrologia",
    exploreAstrology: "Explorar a astrologia",
    signsPlanetsHousesAspects: "Signos, planetas, casas e aspectos",
    discoverAstrology: "Descobrir a astrologia",
    mainPage: "Página principal",
    signs: "Os signos",
    twelveZodiacSigns: "Os 12 signos do zodíaco",
    planets: "Os planetas",
    theirInfluences: "Suas influências",
    houses: "As casas",
    lifeAreas: "As áreas da vida",
    aspects: "Os aspectos",
    planetaryConnections: "As conexões planetárias",
    sun: "O Sol",
    identityVitality: "Identidade e vitalidade",
    moon: "A Lua",
    emotionsIntuition: "Emoções e intuição",
    ascendant: "O Ascendente",
    imagePersonality: "Imagem e personalidade",
    books: "Livros",
    lunaAI: "Luna IA",
    account: "Minha conta",
    login: "Entrar",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    mainNavigation: "Navegação principal",
    homeAria: "Início da Luna Astralis",
  },
};

function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/")[1];
  return firstSegment && isLocale(firstSegment)
    ? firstSegment
    : defaultLocale;
}

export default function SiteHeader() {
  const { isAuth } = useAuth();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const text = HEADER_TRANSLATIONS[locale];

  const [menuOpen, setMenuOpen] = useState(false);
  const [horoscopeOpen, setHoroscopeOpen] = useState(false);
  const [chartOpen, setChartOpen] = useState(false);
  const [compatibilityOpen, setCompatibilityOpen] = useState(false);
  const [astrologyOpen, setAstrologyOpen] = useState(false);

  const [mobileHoroscopeOpen, setMobileHoroscopeOpen] = useState(false);
  const [mobileChartOpen, setMobileChartOpen] = useState(false);
  const [mobileCompatibilityOpen, setMobileCompatibilityOpen] = useState(false);
  const [mobileAstrologyOpen, setMobileAstrologyOpen] = useState(false);

  const horoscopeRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const compatibilityRef = useRef<HTMLDivElement | null>(null);
  const astrologyRef = useRef<HTMLDivElement | null>(null);

  const localize = useCallback(
    (path: string) => {
      /*
      |----------------------------------------------------------------------
      | Migration progressive
      |----------------------------------------------------------------------
      |
      | Pour le moment, seule la page d’accueil existe sous /fr, /en, etc.
      | Les autres routes restent donc sans préfixe afin d’éviter les erreurs 404.
      |
      */
      if (path === "/") {
        return `/${locale}`;
      }

      return path;
    },
    [locale]
  );

  const closeDesktopDropdowns = useCallback(() => {
    setHoroscopeOpen(false);
    setChartOpen(false);
    setCompatibilityOpen(false);
    setAstrologyOpen(false);
  }, []);

  const closeMobileDropdowns = useCallback(() => {
    setMobileHoroscopeOpen(false);
    setMobileChartOpen(false);
    setMobileCompatibilityOpen(false);
    setMobileAstrologyOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    closeDesktopDropdowns();
    closeMobileDropdowns();
  }, [closeDesktopDropdowns, closeMobileDropdowns]);

  useEffect(() => {
    closeMenu();
  }, [isAuth, closeMenu]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const insideDesktopDropdown =
        horoscopeRef.current?.contains(target) ||
        chartRef.current?.contains(target) ||
        compatibilityRef.current?.contains(target) ||
        astrologyRef.current?.contains(target);

      if (insideDesktopDropdown) return;

      const insideMobileMenu =
        target.closest(".premium-mobile-menu") ||
        target.closest(".premium-menu-toggle");

      if (insideMobileMenu) return;

      closeDesktopDropdowns();

      if (menuOpen) {
        setMenuOpen(false);
        closeMobileDropdowns();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, [
    closeDesktopDropdowns,
    closeMobileDropdowns,
    closeMenu,
    menuOpen,
  ]);

  const toggleHoroscope = () => {
    setHoroscopeOpen((currentValue) => !currentValue);
    setChartOpen(false);
    setCompatibilityOpen(false);
    setAstrologyOpen(false);
  };

  const toggleChart = () => {
    setChartOpen((currentValue) => !currentValue);
    setHoroscopeOpen(false);
    setCompatibilityOpen(false);
    setAstrologyOpen(false);
  };

  const toggleCompatibility = () => {
    setCompatibilityOpen((currentValue) => !currentValue);
    setHoroscopeOpen(false);
    setChartOpen(false);
    setAstrologyOpen(false);
  };

  const toggleAstrology = () => {
    setAstrologyOpen((currentValue) => !currentValue);
    setHoroscopeOpen(false);
    setChartOpen(false);
    setCompatibilityOpen(false);
  };

  return (
    <header className="premium-site-header" role="banner">
      <div className="premium-header-glow" />

      <Link
        className="premium-brand"
        href={localize("/")}
        aria-label={text.homeAria}
        onClick={closeMenu}
      >
        <div className="premium-logo">
          <img
            src="/logo-luna-astralis-transparent.png"
            alt="Luna Astralis"
          />
        </div>

        <div className="premium-brand-text">
          <div className="premium-brand-name">LUNA ASTRALIS</div>
          <div className="premium-brand-subtitle">
            {text.brandSubtitle}
          </div>
        </div>
      </Link>

      <nav
        className="premium-navigation"
        aria-label={text.mainNavigation}
      >
        <div className="premium-desktop-menu">
          <Link
            href={localize("/")}
            className="premium-nav-link"
            onClick={closeMenu}
          >
            {text.home}
          </Link>

          <div className="premium-dropdown" ref={horoscopeRef}>
            <button
              type="button"
              className={`premium-nav-link premium-dropdown-button ${
                horoscopeOpen ? "premium-dropdown-button--open" : ""
              }`}
              aria-expanded={horoscopeOpen}
              aria-haspopup="true"
              onClick={toggleHoroscope}
            >
              <span>{text.horoscope}</span>
              <span
                className="premium-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`premium-dropdown-menu premium-dropdown-menu--compact ${
                horoscopeOpen ? "premium-dropdown-menu--open" : ""
              }`}
            >
              <div className="premium-dropdown-intro">
                <span className="premium-dropdown-icon">🔮</span>
                <div>
                  <strong>{text.yourHoroscope}</strong>
                  <span>{text.freeOrPersonalized}</span>
                </div>
              </div>

              <div className="premium-dropdown-grid">
                <HeaderMenuLink
                  href={localize("/horoscope")}
                  icon="☀"
                  title={text.freeHoroscope}
                  subtitle={text.twelveSignsToday}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/horoscope/premium/jour")}
                  icon="✦"
                  title={text.dailyPremium}
                  subtitle={text.personalizedDay}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/horoscope/premium/mois")}
                  icon="☾"
                  title={text.monthlyPremium}
                  subtitle={text.monthlyTrends}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/horoscope/premium/annee")}
                  icon="★"
                  title={text.yearlyPremium}
                  subtitle={text.completeYear}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/horoscope/premium")}
                  icon="☰"
                  title={text.compareOffers}
                  subtitle={text.dayMonthYear}
                  onClick={closeMenu}
                />
              </div>
            </div>
          </div>

          <div className="premium-dropdown" ref={chartRef}>
            <button
              type="button"
              className={`premium-nav-link premium-nav-link--highlight premium-dropdown-button ${
                chartOpen ? "premium-dropdown-button--open" : ""
              }`}
              aria-expanded={chartOpen}
              aria-haspopup="true"
              onClick={toggleChart}
            >
              <span>{text.birthChart}</span>
              <span
                className="premium-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`premium-dropdown-menu premium-dropdown-menu--compact ${
                chartOpen ? "premium-dropdown-menu--open" : ""
              }`}
            >
              <div className="premium-dropdown-intro">
                <span className="premium-dropdown-icon">🌌</span>
                <div>
                  <strong>{text.yourBirthChart}</strong>
                  <span>{text.freeOrDetailed}</span>
                </div>
              </div>

              <div className="premium-dropdown-grid">
                <HeaderMenuLink
                  href={localize("/carte-du-ciel")}
                  icon="🆓"
                  title={text.freeBirthChart}
                  subtitle={text.createBirthChart}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/carte-du-ciel/essentielle")}
                  icon="✦"
                  title={text.essentialReport}
                  subtitle={text.firstAnalysis}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/carte-du-ciel/premium")}
                  icon="★"
                  title={text.premiumReport}
                  subtitle={text.inDepthAnalysis}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/carte-du-ciel/signature")}
                  icon="👑"
                  title={text.signatureReport}
                  subtitle={text.mostComplete}
                  onClick={closeMenu}
                />
              </div>
            </div>
          </div>

          <div className="premium-dropdown" ref={compatibilityRef}>
            <button
              type="button"
              className={`premium-nav-link premium-dropdown-button ${
                compatibilityOpen ? "premium-dropdown-button--open" : ""
              }`}
              aria-expanded={compatibilityOpen}
              aria-haspopup="true"
              onClick={toggleCompatibility}
            >
              <span>{text.compatibility}</span>
              <span
                className="premium-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`premium-dropdown-menu premium-dropdown-menu--compact ${
                compatibilityOpen ? "premium-dropdown-menu--open" : ""
              }`}
            >
              <div className="premium-dropdown-intro">
                <span className="premium-dropdown-icon">💕</span>
                <div>
                  <strong>{text.loveCompatibility}</strong>
                  <span>{text.freeOrPersonalizedFeminine}</span>
                </div>
              </div>

              <div className="premium-dropdown-grid">
                <HeaderMenuLink
                  href={localize("/compatibilite")}
                  icon="♡"
                  title={text.freeCompatibility}
                  subtitle={text.compareTwoSigns}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/compatibilite/premium")}
                  icon="✦"
                  title={text.premiumCompatibility}
                  subtitle={text.completeCoupleAnalysis}
                  onClick={closeMenu}
                />
              </div>
            </div>
          </div>

          <div className="premium-dropdown" ref={astrologyRef}>
            <button
              type="button"
              className={`premium-nav-link premium-dropdown-button ${
                astrologyOpen ? "premium-dropdown-button--open" : ""
              }`}
              aria-expanded={astrologyOpen}
              aria-haspopup="true"
              onClick={toggleAstrology}
            >
              <span>{text.astrology}</span>
              <span
                className="premium-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`premium-dropdown-menu ${
                astrologyOpen ? "premium-dropdown-menu--open" : ""
              }`}
            >
              <div className="premium-dropdown-intro">
                <span className="premium-dropdown-icon">✦</span>
                <div>
                  <strong>{text.exploreAstrology}</strong>
                  <span>{text.signsPlanetsHousesAspects}</span>
                </div>
              </div>

              <div className="premium-dropdown-grid">
                <HeaderMenuLink
                  href={localize("/astrologie")}
                  icon="✦"
                  title={text.discoverAstrology}
                  subtitle={text.mainPage}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/astrologie/signes")}
                  icon="♈"
                  title={text.signs}
                  subtitle={text.twelveZodiacSigns}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/astrologie/planetes")}
                  icon="☉"
                  title={text.planets}
                  subtitle={text.theirInfluences}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/astrologie/maisons")}
                  icon="⌂"
                  title={text.houses}
                  subtitle={text.lifeAreas}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/astrologie/aspects")}
                  icon="△"
                  title={text.aspects}
                  subtitle={text.planetaryConnections}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/astrologie/soleil")}
                  icon="☀"
                  title={text.sun}
                  subtitle={text.identityVitality}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/astrologie/lune")}
                  icon="☾"
                  title={text.moon}
                  subtitle={text.emotionsIntuition}
                  onClick={closeMenu}
                />
                <HeaderMenuLink
                  href={localize("/astrologie/ascendant")}
                  icon="↑"
                  title={text.ascendant}
                  subtitle={text.imagePersonality}
                  onClick={closeMenu}
                />
              </div>
            </div>
          </div>

          <Link
            href={`${localize("/")}#livres`}
            className="premium-nav-link"
            onClick={closeMenu}
          >
            {text.books}
          </Link>

          <Link
            href={localize("/pricing")}
            className="premium-nav-link"
            onClick={closeMenu}
          >
            {text.lunaAI}
          </Link>

          <Link
            href={localize("/login")}
            className="premium-account-button"
            onClick={closeMenu}
          >
            {isAuth ? text.account : text.login}
          </Link>

          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="premium-menu-toggle"
          aria-label={menuOpen ? text.closeMenu : text.openMenu}
          aria-expanded={menuOpen}
          aria-controls="premium-mobile-navigation"
          onClick={() => setMenuOpen((currentValue) => !currentValue)}
        >
          <span
            className={
              menuOpen
                ? "premium-burger premium-burger--open"
                : "premium-burger"
            }
          >
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          id="premium-mobile-navigation"
          className={`premium-mobile-menu ${
            menuOpen ? "premium-mobile-menu--open" : ""
          }`}
        >
          <MobileLink
            href={localize("/")}
            icon="⌂"
            label={text.home}
            onClick={closeMenu}
          />

          <MobileDropdownButton
            icon="🔮"
            label={text.horoscope}
            open={mobileHoroscopeOpen}
            onClick={() => {
              setMobileHoroscopeOpen((value) => !value);
              setMobileChartOpen(false);
              setMobileCompatibilityOpen(false);
              setMobileAstrologyOpen(false);
            }}
          />

          <MobileSubmenu open={mobileHoroscopeOpen}>
            <MobileSubmenuLink
              href={localize("/horoscope")}
              label={text.freeHoroscope}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/horoscope/premium/jour")}
              label={`✦ ${text.dailyPremium}`}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/horoscope/premium/mois")}
              label={`☾ ${text.monthlyPremium}`}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/horoscope/premium/annee")}
              label={`★ ${text.yearlyPremium}`}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/horoscope/premium")}
              label={text.compareOffers}
              onClick={closeMenu}
            />
          </MobileSubmenu>

          <MobileDropdownButton
            icon="🌌"
            label={text.birthChart}
            open={mobileChartOpen}
            highlight
            onClick={() => {
              setMobileChartOpen((value) => !value);
              setMobileHoroscopeOpen(false);
              setMobileCompatibilityOpen(false);
              setMobileAstrologyOpen(false);
            }}
          />

          <MobileSubmenu open={mobileChartOpen}>
            <MobileSubmenuLink
              href={localize("/carte-du-ciel")}
              label={`🆓 ${text.freeBirthChart}`}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/carte-du-ciel/essentielle")}
              label={`✦ ${text.essentialReport} — 24,99 $ US`}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/carte-du-ciel/premium")}
              label={`★ ${text.premiumReport} — 49,99 $ US`}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/carte-du-ciel/signature")}
              label={`👑 ${text.signatureReport} — 79,99 $ US`}
              onClick={closeMenu}
            />
          </MobileSubmenu>

          <MobileDropdownButton
            icon="💕"
            label={text.compatibility}
            open={mobileCompatibilityOpen}
            onClick={() => {
              setMobileCompatibilityOpen((value) => !value);
              setMobileHoroscopeOpen(false);
              setMobileChartOpen(false);
              setMobileAstrologyOpen(false);
            }}
          />

          <MobileSubmenu open={mobileCompatibilityOpen}>
            <MobileSubmenuLink
              href={localize("/compatibilite")}
              label={text.freeCompatibility}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/compatibilite/premium")}
              label={`✦ ${text.premiumCompatibility}`}
              onClick={closeMenu}
            />
          </MobileSubmenu>

          <MobileDropdownButton
            icon="✦"
            label={text.astrology}
            open={mobileAstrologyOpen}
            onClick={() => {
              setMobileAstrologyOpen((value) => !value);
              setMobileHoroscopeOpen(false);
              setMobileChartOpen(false);
              setMobileCompatibilityOpen(false);
            }}
          />

          <MobileSubmenu open={mobileAstrologyOpen}>
            <MobileSubmenuLink
              href={localize("/astrologie")}
              label={text.discoverAstrology}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/astrologie/signes")}
              label={text.signs}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/astrologie/planetes")}
              label={text.planets}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/astrologie/maisons")}
              label={text.houses}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/astrologie/aspects")}
              label={text.aspects}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/astrologie/soleil")}
              label={text.sun}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/astrologie/lune")}
              label={text.moon}
              onClick={closeMenu}
            />
            <MobileSubmenuLink
              href={localize("/astrologie/ascendant")}
              label={text.ascendant}
              onClick={closeMenu}
            />
          </MobileSubmenu>

          <MobileLink
            href={`${localize("/")}#livres`}
            icon="📚"
            label={text.books}
            onClick={closeMenu}
          />

          <MobileLink
            href={localize("/pricing")}
            icon="✧"
            label={text.lunaAI}
            onClick={closeMenu}
          />

          <Link
            href={localize("/login")}
            className="premium-mobile-account"
            onClick={closeMenu}
          >
            <span>♙</span>
            {isAuth ? text.account : text.login}
          </Link>

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}

type HeaderMenuLinkProps = {
  href: string;
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
};

function HeaderMenuLink({
  href,
  icon,
  title,
  subtitle,
  onClick,
}: HeaderMenuLinkProps) {
  return (
    <Link href={href} onClick={onClick}>
      <span>{icon}</span>
      <div>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </div>
    </Link>
  );
}

type MobileDropdownButtonProps = {
  icon: string;
  label: string;
  open: boolean;
  highlight?: boolean;
  onClick: () => void;
};

function MobileDropdownButton({
  icon,
  label,
  open,
  highlight = false,
  onClick,
}: MobileDropdownButtonProps) {
  return (
    <button
      type="button"
      className={[
        "premium-mobile-dropdown-button",
        highlight ? "premium-mobile-highlight" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-expanded={open}
      onClick={onClick}
    >
      <span className="premium-mobile-link-left">
        <span>{icon}</span>
        {label}
      </span>

      <span
        className={`premium-mobile-arrow ${
          open ? "premium-mobile-arrow--open" : ""
        }`}
      >
        ▾
      </span>
    </button>
  );
}

function MobileSubmenu({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`premium-mobile-submenu ${
        open ? "premium-mobile-submenu--open" : ""
      }`}
    >
      {children}
    </div>
  );
}

function MobileSubmenuLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  icon,
  label,
  onClick,
}: {
  href: string;
  icon: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <span>{icon}</span>
      {label}
    </Link>
  );
}
