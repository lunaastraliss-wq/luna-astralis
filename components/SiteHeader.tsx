"use client";





import __i18n from "../i18n/migrated/fr/components/siteheader.json";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

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
  lunarNodes: string;
  lunarNodesSubtitle: string;
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
  logout: string;
  openMenu: string;
  closeMenu: string;
  mainNavigation: string;
  homeAria: string;
};

const HEADER_TRANSLATIONS: Record<Locale, HeaderText> = {
  fr: {
    brandSubtitle: __i18n["astrologie_decouverte_de_soi"],
    home: "Accueil",
    horoscope: "Horoscope",
    yourHoroscope: __i18n["votre_horoscope"],
    freeOrPersonalized: __i18n["gratuit_ou_personnalise"],
    freeHoroscope: __i18n["horoscope_gratuit"],
    twelveSignsToday: __i18n["les_12_signes_du_jour"],
    dailyPremium: __i18n["premium_du_jour"],
    personalizedDay: __i18n["votre_journee_personnalisee"],
    monthlyPremium: __i18n["premium_du_mois"],
    monthlyTrends: __i18n["vos_tendances_du_mois"],
    yearlyPremium: __i18n["premium_de_l_annee"],
    completeYear: __i18n["votre_annee_complete"],
    compareOffers: __i18n["comparer_les_offres"],
    dayMonthYear: __i18n["jour_mois_ou_annee"],
    birthChart: __i18n["carte_du_ciel"],
    yourBirthChart: __i18n["votre_carte_du_ciel"],
    freeOrDetailed: __i18n["gratuite_ou_detaillee"],
    freeBirthChart: __i18n["carte_du_ciel_gratuite"],
    createBirthChart: __i18n["creez_votre_theme_astral"],
    essentialReport: __i18n["rapport_essentielle"],
    firstAnalysis: __i18n["premiere_analyse_24_99_us"],
    premiumReport: __i18n["rapport_premium"],
    inDepthAnalysis: __i18n["analyse_approfondie_49_99_us"],
    signatureReport: __i18n["rapport_signature"],
    mostComplete: __i18n["le_plus_complet_79_99_us"],
    compatibility: __i18n["compatibilite"],
    loveCompatibility: __i18n["compatibilite_amoureuse"],
    freeOrPersonalizedFeminine: __i18n["gratuite_ou_personnalisee"],
    freeCompatibility: __i18n["compatibilite_gratuite"],
    compareTwoSigns: __i18n["comparez_deux_signes"],
    premiumCompatibility: __i18n["compatibilite_premium"],
    completeCoupleAnalysis: __i18n["analyse_complete_du_couple"],
    astrology: "Astrologie",
    exploreAstrology: __i18n["explorer_l_astrologie"],
    signsPlanetsHousesAspects: __i18n["signes_planetes_maisons_et_aspects"],
    discoverAstrology: __i18n["decouvrir_l_astrologie"],
    mainPage: __i18n["la_page_principale"],
    signs: __i18n["les_signes"],
    twelveZodiacSigns: __i18n["les_12_signes_du_zodiaque"],
    planets: __i18n["les_planetes"],
    theirInfluences: __i18n["leurs_influences"],
    houses: __i18n["les_maisons"],
    lifeAreas: __i18n["les_domaines_de_vie"],
    aspects: __i18n["les_aspects"],
    planetaryConnections: __i18n["les_liens_planetaires"],
    lunarNodes: "Nœuds lunaires",
    lunarNodesSubtitle: "Nœud Nord et Nœud Sud",
    sun: __i18n["le_soleil"],
    identityVitality: __i18n["identite_et_vitalite"],
    moon: __i18n["la_lune"],
    emotionsIntuition: __i18n["emotions_et_intuition"],
    ascendant: __i18n["l_ascendant"],
    imagePersonality: __i18n["image_et_personnalite"],
    books: "Livres",
    lunaAI: __i18n["luna_ia"],
    account: __i18n["mon_compte"],
    login: __i18n["se_connecter"],
    logout: "Se déconnecter",
    openMenu: __i18n["ouvrir_le_menu"],
    closeMenu: __i18n["fermer_le_menu"],
    mainNavigation: __i18n["navigation_principale"],
    homeAria: __i18n["accueil_luna_astralis"],
  },
  en: {
    brandSubtitle: __i18n["astrology_self_discovery"],
    home: "Home",
    horoscope: "Horoscope",
    yourHoroscope: __i18n["your_horoscope"],
    freeOrPersonalized: __i18n["free_or_personalized"],
    freeHoroscope: __i18n["free_horoscope"],
    twelveSignsToday: __i18n["today_s_12_zodiac_signs"],
    dailyPremium: __i18n["daily_premium"],
    personalizedDay: __i18n["your_personalized_day"],
    monthlyPremium: __i18n["monthly_premium"],
    monthlyTrends: __i18n["your_monthly_trends"],
    yearlyPremium: __i18n["yearly_premium"],
    completeYear: __i18n["your_complete_year"],
    compareOffers: __i18n["compare_plans"],
    dayMonthYear: __i18n["day_month_or_year"],
    birthChart: __i18n["birth_chart"],
    yourBirthChart: __i18n["your_birth_chart"],
    freeOrDetailed: __i18n["free_or_detailed"],
    freeBirthChart: __i18n["free_birth_chart"],
    createBirthChart: __i18n["create_your_birth_chart"],
    essentialReport: __i18n["essential_report"],
    firstAnalysis: __i18n["first_analysis_us_24_99"],
    premiumReport: __i18n["premium_report"],
    inDepthAnalysis: __i18n["in_depth_analysis_us_49_99"],
    signatureReport: __i18n["signature_report"],
    mostComplete: __i18n["most_complete_us_79_99"],
    compatibility: "Compatibility",
    loveCompatibility: __i18n["love_compatibility"],
    freeOrPersonalizedFeminine: __i18n["free_or_personalized_2"],
    freeCompatibility: __i18n["free_compatibility"],
    compareTwoSigns: __i18n["compare_two_signs"],
    premiumCompatibility: __i18n["premium_compatibility"],
    completeCoupleAnalysis: __i18n["complete_couple_analysis"],
    astrology: "Astrology",
    exploreAstrology: __i18n["explore_astrology"],
    signsPlanetsHousesAspects: __i18n["signs_planets_houses_and_aspects"],
    discoverAstrology: __i18n["discover_astrology"],
    mainPage: __i18n["main_page"],
    signs: __i18n["zodiac_signs"],
    twelveZodiacSigns: __i18n["the_12_zodiac_signs"],
    planets: "Planets",
    theirInfluences: __i18n["their_influences"],
    houses: "Houses",
    lifeAreas: __i18n["areas_of_life"],
    aspects: "Aspects",
    planetaryConnections: __i18n["planetary_connections"],
    lunarNodes: "Lunar Nodes",
    lunarNodesSubtitle: "North Node and South Node",
    sun: __i18n["the_sun"],
    identityVitality: __i18n["identity_and_vitality"],
    moon: __i18n["the_moon"],
    emotionsIntuition: __i18n["emotions_and_intuition"],
    ascendant: __i18n["the_ascendant"],
    imagePersonality: __i18n["image_and_personality"],
    books: "Books",
    lunaAI: __i18n["luna_ai"],
    account: __i18n["my_account"],
    login: __i18n["sign_in"],
    logout: "Sign out",
    openMenu: __i18n["open_menu"],
    closeMenu: __i18n["close_menu"],
    mainNavigation: __i18n["main_navigation"],
    homeAria: __i18n["luna_astralis_home"],
  },
  es: {
    brandSubtitle: __i18n["astrologia_y_autoconocimiento"],
    home: "Inicio",
    horoscope: __i18n["horoscopo"],
    yourHoroscope: __i18n["tu_horoscopo"],
    freeOrPersonalized: __i18n["gratis_o_personalizado"],
    freeHoroscope: __i18n["horoscopo_gratis"],
    twelveSignsToday: __i18n["los_12_signos_de_hoy"],
    dailyPremium: __i18n["premium_diario"],
    personalizedDay: __i18n["tu_dia_personalizado"],
    monthlyPremium: __i18n["premium_mensual"],
    monthlyTrends: __i18n["tus_tendencias_del_mes"],
    yearlyPremium: __i18n["premium_anual"],
    completeYear: __i18n["tu_ano_completo"],
    compareOffers: __i18n["comparar_ofertas"],
    dayMonthYear: __i18n["dia_mes_o_ano"],
    birthChart: __i18n["carta_natal"],
    yourBirthChart: __i18n["tu_carta_natal"],
    freeOrDetailed: __i18n["gratis_o_detallada"],
    freeBirthChart: __i18n["carta_natal_gratis"],
    createBirthChart: __i18n["crea_tu_carta_natal"],
    essentialReport: __i18n["informe_esencial"],
    firstAnalysis: __i18n["primer_analisis_24_99_us"],
    premiumReport: __i18n["informe_premium"],
    inDepthAnalysis: __i18n["analisis_profundo_49_99_us"],
    signatureReport: __i18n["informe_signature"],
    mostComplete: __i18n["el_mas_completo_79_99_us"],
    compatibility: "Compatibilidad",
    loveCompatibility: __i18n["compatibilidad_amorosa"],
    freeOrPersonalizedFeminine: __i18n["gratis_o_personalizada"],
    freeCompatibility: __i18n["compatibilidad_gratis"],
    compareTwoSigns: __i18n["compara_dos_signos"],
    premiumCompatibility: __i18n["compatibilidad_premium"],
    completeCoupleAnalysis: __i18n["analisis_completo_de_la_pareja"],
    astrology: __i18n["astrologia"],
    exploreAstrology: __i18n["explorar_la_astrologia"],
    signsPlanetsHousesAspects: __i18n["signos_planetas_casas_y_aspectos"],
    discoverAstrology: __i18n["descubrir_la_astrologia"],
    mainPage: __i18n["pagina_principal"],
    signs: __i18n["los_signos"],
    twelveZodiacSigns: __i18n["los_12_signos_del_zodiaco"],
    planets: __i18n["los_planetas"],
    theirInfluences: __i18n["sus_influencias"],
    houses: __i18n["las_casas"],
    lifeAreas: __i18n["las_areas_de_la_vida"],
    aspects: __i18n["los_aspectos"],
    planetaryConnections: __i18n["las_conexiones_planetarias"],
    lunarNodes: "Nodos lunares",
    lunarNodesSubtitle: "Nodo Norte y Nodo Sur",
    sun: __i18n["el_sol"],
    identityVitality: __i18n["identidad_y_vitalidad"],
    moon: __i18n["la_luna"],
    emotionsIntuition: __i18n["emociones_e_intuicion"],
    ascendant: __i18n["el_ascendente"],
    imagePersonality: __i18n["imagen_y_personalidad"],
    books: "Libros",
    lunaAI: __i18n["luna_ia_2"],
    account: __i18n["mi_cuenta"],
    login: __i18n["iniciar_sesion"],
    logout: "Cerrar sesión",
    openMenu: __i18n["abrir_menu"],
    closeMenu: __i18n["cerrar_menu"],
    mainNavigation: __i18n["navegacion_principal"],
    homeAria: __i18n["inicio_de_luna_astralis"],
  },
  de: {
    brandSubtitle: __i18n["astrologie_selbsterkenntnis"],
    home: "Startseite",
    horoscope: "Horoskop",
    yourHoroscope: __i18n["ihr_horoskop"],
    freeOrPersonalized: __i18n["kostenlos_oder_personalisiert"],
    freeHoroscope: __i18n["kostenloses_horoskop"],
    twelveSignsToday: __i18n["die_12_zeichen_des_tages"],
    dailyPremium: "Tages-Premium",
    personalizedDay: __i18n["ihr_personalisierter_tag"],
    monthlyPremium: "Monats-Premium",
    monthlyTrends: __i18n["ihre_monatstrends"],
    yearlyPremium: "Jahres-Premium",
    completeYear: __i18n["ihr_vollstandiges_jahr"],
    compareOffers: __i18n["angebote_vergleichen"],
    dayMonthYear: __i18n["tag_monat_oder_jahr"],
    birthChart: "Geburtshoroskop",
    yourBirthChart: __i18n["ihr_geburtshoroskop"],
    freeOrDetailed: __i18n["kostenlos_oder_ausfuhrlich"],
    freeBirthChart: __i18n["kostenloses_geburtshoroskop"],
    createBirthChart: __i18n["erstellen_sie_ihr_geburtshoroskop"],
    essentialReport: "Essential-Bericht",
    firstAnalysis: __i18n["erste_analyse_24_99_us"],
    premiumReport: "Premium-Bericht",
    inDepthAnalysis: __i18n["ausfuhrliche_analyse_49_99_us"],
    signatureReport: "Signature-Bericht",
    mostComplete: __i18n["am_umfassendsten_79_99_us"],
    compatibility: __i18n["kompatibilitat"],
    loveCompatibility: __i18n["liebeskompatibilitat"],
    freeOrPersonalizedFeminine: __i18n["kostenlos_oder_personalisiert_2"],
    freeCompatibility: __i18n["kostenlose_kompatibilitat"],
    compareTwoSigns: __i18n["zwei_zeichen_vergleichen"],
    premiumCompatibility: __i18n["premium_kompatibilitat"],
    completeCoupleAnalysis: __i18n["vollstandige_paaranalyse"],
    astrology: "Astrologie",
    exploreAstrology: __i18n["astrologie_entdecken"],
    signsPlanetsHousesAspects: __i18n["zeichen_planeten_hauser_und_aspekte"],
    discoverAstrology: __i18n["astrologie_kennenlernen"],
    mainPage: "Hauptseite",
    signs: __i18n["die_zeichen"],
    twelveZodiacSigns: __i18n["die_12_tierkreiszeichen"],
    planets: __i18n["die_planeten"],
    theirInfluences: __i18n["ihre_einflusse"],
    houses: __i18n["die_hauser"],
    lifeAreas: "Lebensbereiche",
    aspects: __i18n["die_aspekte"],
    planetaryConnections: __i18n["planetare_verbindungen"],
    lunarNodes: "Mondknoten",
    lunarNodesSubtitle: "Nordknoten und Südknoten",
    sun: __i18n["die_sonne"],
    identityVitality: __i18n["identitat_und_vitalitat"],
    moon: __i18n["der_mond"],
    emotionsIntuition: __i18n["emotionen_und_intuition"],
    ascendant: __i18n["der_aszendent"],
    imagePersonality: __i18n["auftreten_und_personlichkeit"],
    books: __i18n["bucher"],
    lunaAI: __i18n["luna_ki"],
    account: __i18n["mein_konto"],
    login: "Anmelden",
    logout: "Abmelden",
    openMenu: __i18n["menu_offnen"],
    closeMenu: __i18n["menu_schlie_en"],
    mainNavigation: "Hauptnavigation",
    homeAria: "Luna-Astralis-Startseite",
  },
  it: {
    brandSubtitle: __i18n["astrologia_e_scoperta_di_se"],
    home: "Home",
    horoscope: "Oroscopo",
    yourHoroscope: __i18n["il_tuo_oroscopo"],
    freeOrPersonalized: __i18n["gratuito_o_personalizzato"],
    freeHoroscope: __i18n["oroscopo_gratuito"],
    twelveSignsToday: __i18n["i_12_segni_di_oggi"],
    dailyPremium: __i18n["premium_giornaliero"],
    personalizedDay: __i18n["la_tua_giornata_personalizzata"],
    monthlyPremium: __i18n["premium_mensile"],
    monthlyTrends: __i18n["le_tendenze_del_mese"],
    yearlyPremium: __i18n["premium_annuale"],
    completeYear: __i18n["il_tuo_anno_completo"],
    compareOffers: __i18n["confronta_le_offerte"],
    dayMonthYear: __i18n["giorno_mese_o_anno"],
    birthChart: __i18n["tema_natale"],
    yourBirthChart: __i18n["il_tuo_tema_natale"],
    freeOrDetailed: __i18n["gratuito_o_dettagliato"],
    freeBirthChart: __i18n["tema_natale_gratuito"],
    createBirthChart: __i18n["crea_il_tuo_tema_natale"],
    essentialReport: __i18n["rapporto_essenziale"],
    firstAnalysis: __i18n["prima_analisi_24_99_usd"],
    premiumReport: __i18n["rapporto_premium"],
    inDepthAnalysis: __i18n["analisi_approfondita_49_99_usd"],
    signatureReport: __i18n["rapporto_signature"],
    mostComplete: __i18n["il_piu_completo_79_99_usd"],
    compatibility: __i18n["compatibilita"],
    loveCompatibility: __i18n["compatibilita_amorosa"],
    freeOrPersonalizedFeminine: __i18n["gratuita_o_personalizzata"],
    freeCompatibility: __i18n["compatibilita_gratuita"],
    compareTwoSigns: __i18n["confronta_due_segni"],
    premiumCompatibility: __i18n["compatibilita_premium"],
    completeCoupleAnalysis: __i18n["analisi_completa_della_coppia"],
    astrology: "Astrologia",
    exploreAstrology: __i18n["esplora_l_astrologia"],
    signsPlanetsHousesAspects: __i18n["segni_pianeti_case_e_aspetti"],
    discoverAstrology: __i18n["scopri_l_astrologia"],
    mainPage: __i18n["pagina_principale"],
    signs: __i18n["i_segni"],
    twelveZodiacSigns: __i18n["i_12_segni_zodiacali"],
    planets: __i18n["i_pianeti"],
    theirInfluences: __i18n["le_loro_influenze"],
    houses: __i18n["le_case"],
    lifeAreas: __i18n["gli_ambiti_della_vita"],
    aspects: __i18n["gli_aspetti"],
    planetaryConnections: __i18n["i_legami_planetari"],
    lunarNodes: "Nodi lunari",
    lunarNodesSubtitle: "Nodo Nord e Nodo Sud",
    sun: __i18n["il_sole"],
    identityVitality: __i18n["identita_e_vitalita"],
    moon: __i18n["la_luna_2"],
    emotionsIntuition: __i18n["emozioni_e_intuizione"],
    ascendant: __i18n["l_ascendente"],
    imagePersonality: __i18n["immagine_e_personalita"],
    books: "Libri",
    lunaAI: __i18n["luna_ia_3"],
    account: __i18n["il_mio_account"],
    login: "Accedi",
    logout: "Disconnetti",
    openMenu: __i18n["apri_menu"],
    closeMenu: __i18n["chiudi_menu"],
    mainNavigation: __i18n["navigazione_principale"],
    homeAria: __i18n["home_di_luna_astralis"],
  },
  pt: {
    brandSubtitle: __i18n["astrologia_e_autoconhecimento"],
    home: __i18n["inicio"],
    horoscope: __i18n["horoscopo_2"],
    yourHoroscope: __i18n["seu_horoscopo"],
    freeOrPersonalized: __i18n["gratis_ou_personalizado"],
    freeHoroscope: __i18n["horoscopo_gratis_2"],
    twelveSignsToday: __i18n["os_12_signos_de_hoje"],
    dailyPremium: __i18n["premium_diario_2"],
    personalizedDay: __i18n["seu_dia_personalizado"],
    monthlyPremium: __i18n["premium_mensal"],
    monthlyTrends: __i18n["suas_tendencias_do_mes"],
    yearlyPremium: __i18n["premium_anual_2"],
    completeYear: __i18n["seu_ano_completo"],
    compareOffers: __i18n["comparar_ofertas_2"],
    dayMonthYear: __i18n["dia_mes_ou_ano"],
    birthChart: __i18n["mapa_astral"],
    yourBirthChart: __i18n["seu_mapa_astral"],
    freeOrDetailed: __i18n["gratis_ou_detalhado"],
    freeBirthChart: __i18n["mapa_astral_gratis"],
    createBirthChart: __i18n["crie_seu_mapa_astral"],
    essentialReport: __i18n["relatorio_essencial"],
    firstAnalysis: __i18n["primeira_analise_us_24_99"],
    premiumReport: __i18n["relatorio_premium"],
    inDepthAnalysis: __i18n["analise_aprofundada_us_49_99"],
    signatureReport: __i18n["relatorio_signature"],
    mostComplete: __i18n["o_mais_completo_us_79_99"],
    compatibility: "Compatibilidade",
    loveCompatibility: __i18n["compatibilidade_amorosa"],
    freeOrPersonalizedFeminine: __i18n["gratis_ou_personalizada"],
    freeCompatibility: __i18n["compatibilidade_gratis"],
    compareTwoSigns: __i18n["compare_dois_signos"],
    premiumCompatibility: __i18n["compatibilidade_premium"],
    completeCoupleAnalysis: __i18n["analise_completa_do_casal"],
    astrology: "Astrologia",
    exploreAstrology: __i18n["explorar_a_astrologia"],
    signsPlanetsHousesAspects: __i18n["signos_planetas_casas_e_aspectos"],
    discoverAstrology: __i18n["descobrir_a_astrologia"],
    mainPage: __i18n["pagina_principal_2"],
    signs: __i18n["os_signos"],
    twelveZodiacSigns: __i18n["os_12_signos_do_zodiaco"],
    planets: __i18n["os_planetas"],
    theirInfluences: __i18n["suas_influencias"],
    houses: __i18n["as_casas"],
    lifeAreas: __i18n["as_areas_da_vida"],
    aspects: __i18n["os_aspectos"],
    planetaryConnections: __i18n["as_conexoes_planetarias"],
    lunarNodes: "Nodos lunares",
    lunarNodesSubtitle: "Nodo Norte e Nodo Sul",
    sun: __i18n["o_sol"],
    identityVitality: __i18n["identidade_e_vitalidade"],
    moon: __i18n["a_lua"],
    emotionsIntuition: __i18n["emocoes_e_intuicao"],
    ascendant: __i18n["o_ascendente"],
    imagePersonality: __i18n["imagem_e_personalidade"],
    books: "Livros",
    lunaAI: __i18n["luna_ia_4"],
    account: __i18n["minha_conta"],
    login: "Entrar",
    logout: "Sair",
    openMenu: __i18n["abrir_menu_2"],
    closeMenu: __i18n["fechar_menu"],
    mainNavigation: __i18n["navegacao_principal"],
    homeAria: __i18n["inicio_da_luna_astralis"],
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
  const router = useRouter();
  const supabase = useMemo(() => createClientComponentClient(), []);
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
      | Routes multilingues
      |----------------------------------------------------------------------
      |
      | Toutes les routes internes sont préfixées par la langue active.
      | La fonction conserve les paramètres de recherche et les ancres,
      | puis évite d’ajouter deux fois un préfixe de langue.
      |
      */

      if (!path.startsWith("/")) {
        return path;
      }

      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");

      const suffixStartCandidates = [
        hashIndex,
        queryIndex,
      ].filter((index) => index >= 0);

      const suffixStart =
        suffixStartCandidates.length > 0
          ? Math.min(...suffixStartCandidates)
          : path.length;

      const pathnamePart =
        path.slice(0, suffixStart) || "/";

      const suffix =
        path.slice(suffixStart);

      const segments =
        pathnamePart
          .split("/")
          .filter(Boolean);

      if (
        segments.length > 0 &&
        isLocale(segments[0])
      ) {
        segments[0] = locale;
      } else {
        segments.unshift(locale);
      }

      const localizedPath =
        `/${segments.join("/")}`;

      return `${localizedPath}${suffix}`;
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

  const handleLogout = useCallback(async () => {
    closeMenu();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Supabase signOut error:", error.message);
      return;
    }

    router.replace(`/${locale}`);
    router.refresh();
  }, [closeMenu, locale, router, supabase]);

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
            alt={__i18n["luna_astralis"]}
          />
        </div>

        <div className="premium-brand-text">
          <div className="premium-brand-name">{__i18n["luna_astralis_2"]}</div>
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
                  href={localize("/carte-du-ciel/gratuite")}
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
                  href={localize("/astrologie/noeuds-lunaires")}
                  icon="☊"
                  title={text.lunarNodes}
                  subtitle={text.lunarNodesSubtitle}
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

          {isAuth ? (
            <button
              type="button"
              className="premium-account-button"
              onClick={handleLogout}
            >
              {text.logout}
            </button>
          ) : (
            <Link
              href={localize("/login")}
              className="premium-account-button"
              onClick={closeMenu}
            >
              {text.login}
            </Link>
          )}

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
              href={localize("/carte-du-ciel/gratuite")}
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
              href={localize("/astrologie/noeuds-lunaires")}
              label={`☊ ${text.lunarNodes}`}
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

          {isAuth ? (
            <button
              type="button"
              className="premium-mobile-account"
              onClick={handleLogout}
            >
              <span>↪</span>
              {text.logout}
            </button>
          ) : (
            <Link
              href={localize("/login")}
              className="premium-mobile-account"
              onClick={closeMenu}
            >
              <span>♙</span>
              {text.login}
            </Link>
          )}

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
