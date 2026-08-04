// app/page.tsx

"use client";





import __i18n from "../i18n/migrated/fr/app/page.json";
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
    title: __i18n["astro_101"],
    amazon: "https://a.co/d/05rwtdhp",
  },
  {
    image: "ASTROLOGIE ET CHIROMANCIE.png",
    title: __i18n["astrologie_et_chiromancie"],
    amazon: "https://a.co/d/03osw44E",
  },
  {
    image: "ASTROLOGIE ET DEVELOPPEMENT PERSONNEL.jpg",
    title: __i18n["developpement_personnel"],
    amazon: "https://a.co/d/05mlDRXi",
  },
  {
    image:
      "Astrologie et transformation personnelle (1).jpg",
    title: __i18n["transformation_personnelle"],
    amazon: "https://a.co/d/08qzDp1D",
  },
  {
    image: "guide-de-compatibilite-astrologique.jpg",
    title: __i18n["guide_de_compatibilite_astrologique"],
    amazon: "https://a.co/d/00V8gKyx",
  },
  {
    image: "Bélier.jpg",
    title: __i18n["belier"],
    amazon: "https://a.co/d/0h9C8bSp",
  },
  {
    image: "Taureau.jpg",
    title: "Taureau",
    amazon: "https://a.co/d/06iXVhrd",
  },
  {
    image: "Gémeaux.jpg",
    title: __i18n["gemeaux"],
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
    heroAria: __i18n["presentation_de_luna_astralis"],
    toolsAria: __i18n["outils_astrologiques_gratuits"],
    reviewsAria: __i18n["avis_des_utilisateurs"],
    fiveStarsAria: __i18n["cinq_etoiles_sur_cinq"],
    legalLinksAria: __i18n["liens_legaux"],

    heroBadge: __i18n["carte_du_ciel_horoscope_compatibilite"],
    heroTitle: __i18n["carte_du_ciel_gratuite_et_compatibilite_amoureuse"],
    heroSubtitle:
      __i18n["decouvrez_gratuitement_votre_soleil_votre_lune_votre_ascenda"],
    heroLead:
      __i18n["creez_votre_theme_astral_consultez_votre_horoscope_quotidien"],

    dailyUpdated: __i18n["mis_a_jour_chaque_jour"],
    horoscopeTitle: __i18n["horoscope_du_jour_gratuit"],
    horoscopeDescription:
      __i18n["consultez_les_previsions_astrologiques_de_votre_signe_pour_m"],
    horoscopeItems: [
      __i18n["energie_generale"],
      __i18n["amour_et_relations"],
      __i18n["travail_et_projets"],
      __i18n["finances"],
      __i18n["bien_etre"],
      __i18n["conseil_du_jour"],
    ],
    horoscopeButton: __i18n["voir_mon_horoscope"],

    birthChartTitle: __i18n["carte_du_ciel_gratuite"],
    birthChartDescription:
      __i18n["generez_votre_theme_astral_avec_votre_soleil_votre_lune_votr"],
    birthChartItems: [
      __i18n["soleil"],
      __i18n["lune"],
      __i18n["ascendant"],
      __i18n["roue_astrologique"],
      __i18n["resume_personnalise"],
    ],
    birthChartButton: __i18n["creer_ma_carte"],

    compatibilityTitle: __i18n["compatibilite_amoureuse"],
    compatibilityDescription:
      __i18n["comparez_deux_signes_astrologiques_et_obtenez_instantanement"],
    compatibilityItems: [
      __i18n["score_amoureux"],
      __i18n["forces_du_couple"],
      __i18n["defis_possibles"],
      __i18n["conseils_relationnels"],
      __i18n["analyse_instantanee"],
    ],
    compatibilityButton: __i18n["comparer_deux_signes"],

    trustBadge: __i18n["une_astrologie_accessible"],
    trustTitle: __i18n["pourquoi_choisir_luna_astralis"],
    trustSubtitle:
      __i18n["des_outils_simples_personnalises_et_concus_pour_vous_aider_a"],
    trustFeatures: [
      {
        icon: "🔮",
        title: __i18n["calculs_astrologiques_personnalises"],
        text:
          __i18n["vos_resultats_sont_etablis_a_partir_de_vos_informations_de_n"],
      },
      {
        icon: "⚡",
        title: __i18n["resultats_instantanes"],
        text:
          __i18n["decouvrez_rapidement_votre_horoscope_votre_carte_du_ciel_ou"],
      },
      {
        icon: "📄",
        title: __i18n["rapports_pdf_detailles"],
        text:
          __i18n["approfondissez_votre_theme_natal_grace_a_des_analyses_person"],
      },
      {
        icon: "🌍",
        title: __i18n["une_experience_multilingue"],
        text:
          __i18n["explorez_l_astrologie_avec_des_explications_claires_et_acces"],
      },
    ],

    reportsBadge: __i18n["rapports_astrologiques_personnalises"],
    reportsTitle: __i18n["approfondissez_votre_theme_natal"],
    reportsDescription:
      __i18n["apres_avoir_cree_votre_carte_du_ciel_gratuitement_choisissez"],
    reports: [
      {
        name: "Essentielle",
        price: __i18n["24_99_us"],
        badge: __i18n["pour_commencer"],
        description:
          __i18n["une_premiere_lecture_personnalisee_de_votre_theme_natal_pour"],
        features: [
          __i18n["votre_roue_astrologique"],
          __i18n["votre_soleil_votre_lune_et_votre_ascendant"],
          __i18n["vos_dix_principales_planetes"],
          __i18n["vos_elements_et_vos_modalites"],
          __i18n["rapport_pdf_personnalise"],
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: __i18n["49_99_us"],
        badge: __i18n["analyse_approfondie"],
        description:
          __i18n["une_exploration_complete_de_votre_personnalite_de_vos_maison"],
        features: [
          __i18n["tout_le_contenu_de_l_analyse_essentielle"],
          __i18n["vos_douze_maisons_astrologiques"],
          __i18n["vos_aspects_planetaires"],
          __i18n["vos_dominantes_astrologiques"],
          __i18n["relations_carriere_forces_et_defis"],
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: __i18n["79_99_us"],
        badge: __i18n["le_plus_complet"],
        description:
          __i18n["l_analyse_la_plus_complete_de_votre_theme_natal_avec_vos_gra"],
        features: [
          __i18n["tout_le_contenu_du_rapport_premium"],
          __i18n["mission_de_vie_et_chemin_de_l_ame"],
          __i18n["monde_interieur_et_blocages_inconscients"],
          __i18n["talents_caches_et_guide_d_integration"],
          __i18n["synthese_signature_personnalisee"],
        ],
        featured: false,
      },
    ],
    recommended: __i18n["recommande"],
    reportPrefix: "Rapport",
    oneTimePayment: __i18n["paiement_unique"],
    freeChartButton: __i18n["creer_ma_carte_gratuite"],
    reportsNote:
      __i18n["commencez_gratuitement_vos_offres_personnalisees_apparaitron"],
    discoverChartButton: __i18n["decouvrir_mon_theme_natal"],

    talkToLuna: __i18n["parler_avec_luna"],
    discoverBooks: __i18n["decouvrir_les_livres"],
    freeNote:
      __i18n["gratuit_pour_commencer_resultat_instantane_compatible_avec_m"],

    reviews: [
      {
        sign: __i18n["belier_2"],
        name: "Marie L.",
        text:
          __i18n["je_ne_comprenais_plus_si_ce_qu_il_ressentait_etait_vrai_ou_j"],
      },
      {
        sign: __i18n["gemeaux_2"],
        name: "Julie R.",
        text:
          __i18n["j_attendais_un_message_chaque_jour_en_quelques_minutes_j_ai"],
      },
      {
        sign: __i18n["cancer"],
        name: "Camille D.",
        text:
          __i18n["il_etait_distant_et_je_tournais_en_rond_ca_m_a_aidee_a_compr"],
      },
    ],
    techNote:
      __i18n["fonctionne_instantanement_sur_mobile_aucun_telechargement_ne"],
    disclaimer: __i18n["exploration_personnelle_non_therapeutique"],

    problemIntro:
      __i18n["en_quelques_minutes_vous_comprenez_mieux_ce_que_vous_vivez_e"],
    problems: [
      __i18n["il_ou_elle_est_distant_e_et_vous_ne_comprenez_pas_pourquoi"],
      __i18n["vous_attendez_un_message_mais_rien_ne_vient"],
      __i18n["vous_sentez_que_quelque_chose_cloche_sans_savoir_quoi"],
    ],

    libraryTitle: __i18n["la_bibliotheque_luna_astralis"],
    librarySubtitle:
      __i18n["decouvrez_des_guides_astrologiques_concus_pour_mieux_compren"],
    availableAmazon: __i18n["disponible_sur_amazon"],
    collectionTitle: __i18n["une_collection_complete_d_astrologie"],
    collectionDescription:
      __i18n["signes_du_zodiaque_developpement_personnel_compatibilite_amo"],
    bookCoverAlt: __i18n["couverture_du_livre"],
    viewAmazon: __i18n["voir_sur_amazon"],
    fullCollectionTitle:
      __i18n["decouvrez_toute_la_collection_luna_astralis"],
    fullCollectionDescription:
      __i18n["retrouvez_tous_les_guides_astrologiques_disponibles_sur_amaz"],
    fullCollectionButton: __i18n["voir_toute_la_collection"],

    howTitle: __i18n["comment_ca_fonctionne"],
    howSubtitle: __i18n["quatre_etapes_simples_pour_commencer"],
    steps: [
      {
        icon: "♈",
        title: __i18n["choisissez_votre_outil"],
        text:
          __i18n["horoscope_carte_du_ciel_compatibilite_ou_discussion_avec_lun"],
      },
      {
        icon: "🌙",
        title: __i18n["obtenez_votre_resultat"],
        text: __i18n["votre_analyse_apparait_en_quelques_secondes"],
      },
      {
        icon: "✧",
        title: __i18n["gagnez_en_clarte"],
        text:
          __i18n["decouvrez_vos_forces_vos_besoins_vos_defis_et_vos_dynamiques"],
      },
      {
        icon: "🔐",
        title: __i18n["allez_plus_loin"],
        text:
          __i18n["choisissez_l_analyse_essentielle_premium_ou_signature_pour_a"],
      },
    ],

    rightsReserved: __i18n["tous_droits_reserves"],
    legalNotices: __i18n["mentions_legales"],
    privacy: __i18n["confidentialite"],
    terms: "Conditions",
    footerNote:
      __i18n["exploration_personnelle_non_therapeutique_reserve_aux_person"],
  },

  en: {
    heroAria: __i18n["introduction_to_luna_astralis"],
    toolsAria: __i18n["free_astrology_tools"],
    reviewsAria: __i18n["user_reviews"],
    fiveStarsAria: __i18n["five_stars_out_of_five"],
    legalLinksAria: __i18n["legal_links"],

    heroBadge: __i18n["birth_chart_horoscope_compatibility"],
    heroTitle: __i18n["free_birth_chart_and_love_compatibility"],
    heroSubtitle:
      __i18n["discover_your_sun_moon_ascendant_and_romantic_chemistry_for"],
    heroLead:
      __i18n["create_your_birth_chart_read_your_daily_horoscope_and_compar"],

    dailyUpdated: __i18n["updated_daily"],
    horoscopeTitle: __i18n["free_daily_horoscope"],
    horoscopeDescription:
      __i18n["read_the_astrological_forecast_for_your_sign_and_better_unde"],
    horoscopeItems: [
      __i18n["general_energy"],
      __i18n["love_and_relationships"],
      __i18n["work_and_projects"],
      __i18n["finances_2"],
      __i18n["well_being"],
      __i18n["daily_guidance"],
    ],
    horoscopeButton: __i18n["view_my_horoscope"],

    birthChartTitle: __i18n["free_birth_chart"],
    birthChartDescription:
      __i18n["generate_your_birth_chart_with_your_sun_moon_ascendant_and_a"],
    birthChartItems: [
      __i18n["sun"],
      __i18n["moon"],
      __i18n["ascendant_2"],
      __i18n["astrological_wheel"],
      __i18n["personalized_summary"],
    ],
    birthChartButton: __i18n["create_my_chart"],

    compatibilityTitle: __i18n["love_compatibility"],
    compatibilityDescription:
      __i18n["compare_two_zodiac_signs_and_instantly_receive_your_score_st"],
    compatibilityItems: [
      __i18n["love_score"],
      __i18n["couple_strengths"],
      __i18n["possible_challenges"],
      __i18n["relationship_advice"],
      __i18n["instant_analysis"],
    ],
    compatibilityButton: __i18n["compare_two_signs"],

    trustBadge: __i18n["astrology_made_accessible"],
    trustTitle: __i18n["why_choose_luna_astralis"],
    trustSubtitle:
      __i18n["simple_personalized_tools_designed_to_help_you_better_unders"],
    trustFeatures: [
      {
        icon: "🔮",
        title: __i18n["personalized_astrological_calculations"],
        text:
          __i18n["your_results_are_calculated_from_your_birth_information_and"],
      },
      {
        icon: "⚡",
        title: __i18n["instant_results"],
        text:
          __i18n["quickly_discover_your_horoscope_birth_chart_or_love_compatib"],
      },
      {
        icon: "📄",
        title: __i18n["detailed_pdf_reports"],
        text:
          __i18n["explore_your_birth_chart_more_deeply_through_personalized_an"],
      },
      {
        icon: "🌍",
        title: __i18n["a_multilingual_experience"],
        text:
          __i18n["explore_astrology_with_clear_and_accessible_explanations_in"],
      },
    ],

    reportsBadge: __i18n["personalized_astrology_reports"],
    reportsTitle: __i18n["explore_your_birth_chart_more_deeply"],
    reportsDescription:
      __i18n["after_creating_your_free_birth_chart_choose_the_level_of_ana"],
    reports: [
      {
        name: "Essential",
        price: "US$24.99",
        badge: __i18n["a_great_starting_point"],
        description:
          __i18n["a_personalized_first_reading_of_your_birth_chart_to_understa"],
        features: [
          __i18n["your_astrological_wheel"],
          __i18n["your_sun_moon_and_ascendant"],
          __i18n["your_ten_main_planets"],
          __i18n["your_elements_and_modalities"],
          __i18n["personalized_pdf_report"],
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: "US$49.99",
        badge: __i18n["in_depth_analysis"],
        description:
          __i18n["a_complete_exploration_of_your_personality_houses_relationsh"],
        features: [
          __i18n["everything_in_the_essential_analysis"],
          __i18n["your_twelve_astrological_houses"],
          __i18n["your_planetary_aspects"],
          __i18n["your_dominant_astrological_influences"],
          __i18n["relationships_career_strengths_and_challenges"],
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: "US$79.99",
        badge: __i18n["most_complete"],
        description:
          __i18n["our_most_complete_birth_chart_analysis_including_your_major"],
        features: [
          __i18n["everything_in_the_premium_report"],
          __i18n["life_mission_and_soul_path"],
          __i18n["inner_world_and_unconscious_blocks"],
          __i18n["hidden_talents_and_integration_guide"],
          __i18n["personalized_signature_synthesis"],
        ],
        featured: false,
      },
    ],
    recommended: "Recommended",
    reportPrefix: "Report",
    oneTimePayment: __i18n["one_time_payment"],
    freeChartButton: __i18n["create_my_free_chart"],
    reportsNote:
      __i18n["start_for_free_your_personalized_offers_will_appear_after_yo"],
    discoverChartButton: __i18n["discover_my_birth_chart"],

    talkToLuna: __i18n["talk_with_luna"],
    discoverBooks: __i18n["discover_the_books"],
    freeNote:
      __i18n["free_to_start_instant_result_mobile_friendly"],

    reviews: [
      {
        sign: __i18n["aries"],
        name: "Marie L.",
        text:
          __i18n["i_could_no_longer_tell_whether_what_he_felt_was_real_or_whet"],
      },
      {
        sign: __i18n["gemini"],
        name: "Julie R.",
        text:
          __i18n["i_waited_for_a_message_every_day_within_minutes_i_understood"],
      },
      {
        sign: __i18n["cancer_2"],
        name: "Camille D.",
        text:
          __i18n["he_was_distant_and_i_kept_going_in_circles_this_helped_me_un"],
      },
    ],
    techNote:
      __i18n["works_instantly_on_mobile_no_download_required_for_free_tool"],
    disclaimer: __i18n["personal_exploration_not_therapy"],

    problemIntro:
      __i18n["in_just_a_few_minutes_gain_a_clearer_understanding_of_what_y"],
    problems: [
      __i18n["they_seem_distant_and_you_do_not_understand_why"],
      __i18n["you_are_waiting_for_a_message_but_nothing_arrives"],
      __i18n["you_feel_that_something_is_wrong_without_knowing_what"],
    ],

    libraryTitle: __i18n["the_luna_astralis_library"],
    librarySubtitle:
      __i18n["discover_astrology_guides_designed_to_help_you_better_unders"],
    availableAmazon: __i18n["available_on_amazon"],
    collectionTitle: __i18n["a_complete_astrology_collection"],
    collectionDescription:
      __i18n["zodiac_signs_personal_development_love_compatibility_and_muc"],
    bookCoverAlt: __i18n["book_cover"],
    viewAmazon: __i18n["view_on_amazon"],
    fullCollectionTitle:
      __i18n["discover_the_complete_luna_astralis_collection"],
    fullCollectionDescription:
      __i18n["find_all_available_astrology_guides_on_amazon"],
    fullCollectionButton: __i18n["view_the_complete_collection"],

    howTitle: __i18n["how_it_works"],
    howSubtitle: __i18n["four_simple_steps_to_get_started"],
    steps: [
      {
        icon: "♈",
        title: __i18n["choose_your_tool"],
        text:
          __i18n["horoscope_birth_chart_compatibility_or_a_conversation_with_l"],
      },
      {
        icon: "🌙",
        title: __i18n["get_your_result"],
        text: __i18n["your_analysis_appears_in_just_a_few_seconds"],
      },
      {
        icon: "✧",
        title: __i18n["gain_clarity"],
        text:
          __i18n["discover_your_strengths_needs_challenges_and_relationship_dy"],
      },
      {
        icon: "🔐",
        title: __i18n["go_further"],
        text:
          __i18n["choose_the_essential_premium_or_signature_analysis_to_explor"],
      },
    ],

    rightsReserved: __i18n["all_rights_reserved"],
    legalNotices: __i18n["legal_notice"],
    privacy: "Privacy",
    terms: "Terms",
    footerNote:
      __i18n["personal_exploration_not_therapy_for_adults_aged_18_and_over"],
  },

  es: {
    heroAria: __i18n["presentacion_de_luna_astralis"],
    toolsAria: __i18n["herramientas_astrologicas_gratuitas"],
    reviewsAria: __i18n["opiniones_de_usuarios"],
    fiveStarsAria: __i18n["cinco_estrellas_de_cinco"],
    legalLinksAria: __i18n["enlaces_legales"],

    heroBadge: __i18n["carta_natal_horoscopo_compatibilidad"],
    heroTitle: __i18n["carta_natal_gratis_y_compatibilidad_amorosa"],
    heroSubtitle:
      __i18n["descubre_gratis_tu_sol_tu_luna_tu_ascendente_y_tu_quimica_am"],
    heroLead:
      __i18n["crea_tu_carta_natal_consulta_tu_horoscopo_diario_y_compara_d"],

    dailyUpdated: __i18n["actualizado_cada_dia"],
    horoscopeTitle: __i18n["horoscopo_diario_gratis"],
    horoscopeDescription:
      __i18n["consulta_las_previsiones_astrologicas_de_tu_signo_para_compr"],
    horoscopeItems: [
      __i18n["energia_general"],
      __i18n["amor_y_relaciones"],
      __i18n["trabajo_y_proyectos"],
      __i18n["finanzas"],
      __i18n["bienestar"],
      __i18n["consejo_del_dia"],
    ],
    horoscopeButton: __i18n["ver_mi_horoscopo"],

    birthChartTitle: __i18n["carta_natal_gratis"],
    birthChartDescription:
      __i18n["genera_tu_carta_natal_con_tu_sol_tu_luna_tu_ascendente_y_tu"],
    birthChartItems: [
      __i18n["sol"],
      __i18n["luna"],
      __i18n["ascendente"],
      __i18n["rueda_astrologica"],
      __i18n["resumen_personalizado"],
    ],
    birthChartButton: __i18n["crear_mi_carta"],

    compatibilityTitle: __i18n["compatibilidad_amorosa"],
    compatibilityDescription:
      __i18n["compara_dos_signos_del_zodiaco_y_obten_al_instante_tu_puntua"],
    compatibilityItems: [
      __i18n["puntuacion_amorosa"],
      __i18n["fortalezas_de_la_pareja"],
      __i18n["posibles_desafios"],
      __i18n["consejos_de_pareja"],
      __i18n["analisis_instantaneo"],
    ],
    compatibilityButton: __i18n["comparar_dos_signos"],

    trustBadge: __i18n["astrologia_accesible"],
    trustTitle: __i18n["por_que_elegir_luna_astralis"],
    trustSubtitle:
      __i18n["herramientas_sencillas_y_personalizadas_para_ayudarte_a_comp"],
    trustFeatures: [
      {
        icon: "🔮",
        title: __i18n["calculos_astrologicos_personalizados"],
        text:
          __i18n["tus_resultados_se_calculan_a_partir_de_tus_datos_de_nacimien"],
      },
      {
        icon: "⚡",
        title: __i18n["resultados_instantaneos"],
        text:
          __i18n["descubre_rapidamente_tu_horoscopo_tu_carta_natal_o_tu_compat"],
      },
      {
        icon: "📄",
        title: __i18n["informes_pdf_detallados"],
        text:
          __i18n["profundiza_en_tu_carta_natal_con_analisis_personalizados_dis"],
      },
      {
        icon: "🌍",
        title: __i18n["una_experiencia_multilingue"],
        text:
          __i18n["explora_la_astrologia_con_explicaciones_claras_y_accesibles"],
      },
    ],

    reportsBadge: __i18n["informes_astrologicos_personalizados"],
    reportsTitle: __i18n["profundiza_en_tu_carta_natal"],
    reportsDescription:
      __i18n["despues_de_crear_gratis_tu_carta_natal_elige_el_nivel_de_ana"],
    reports: [
      {
        name: "Esencial",
        price: __i18n["24_99_us_2"],
        badge: __i18n["para_comenzar"],
        description:
          __i18n["una_primera_lectura_personalizada_de_tu_carta_natal_para_com"],
        features: [
          __i18n["tu_rueda_astrologica"],
          __i18n["tu_sol_tu_luna_y_tu_ascendente"],
          __i18n["tus_diez_planetas_principales"],
          __i18n["tus_elementos_y_modalidades"],
          __i18n["informe_pdf_personalizado"],
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: __i18n["49_99_us_2"],
        badge: __i18n["analisis_profundo"],
        description:
          __i18n["una_exploracion_completa_de_tu_personalidad_tus_casas_tus_re"],
        features: [
          __i18n["todo_el_contenido_del_analisis_esencial"],
          __i18n["tus_doce_casas_astrologicas"],
          __i18n["tus_aspectos_planetarios"],
          __i18n["tus_influencias_dominantes"],
          __i18n["relaciones_carrera_fortalezas_y_desafios"],
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: __i18n["79_99_us_2"],
        badge: __i18n["el_mas_completo"],
        description:
          __i18n["el_analisis_mas_completo_de_tu_carta_natal_con_tus_grandes_d"],
        features: [
          __i18n["todo_el_contenido_del_informe_premium"],
          __i18n["mision_de_vida_y_camino_del_alma"],
          __i18n["mundo_interior_y_bloqueos_inconscientes"],
          __i18n["talentos_ocultos_y_guia_de_integracion"],
          __i18n["sintesis_signature_personalizada"],
        ],
        featured: false,
      },
    ],
    recommended: "Recomendado",
    reportPrefix: "Informe",
    oneTimePayment: __i18n["pago_unico"],
    freeChartButton: __i18n["crear_mi_carta_gratis"],
    reportsNote:
      __i18n["comienza_gratis_tus_ofertas_personalizadas_apareceran_despue"],
    discoverChartButton: __i18n["descubrir_mi_carta_natal"],

    talkToLuna: __i18n["hablar_con_luna"],
    discoverBooks: __i18n["descubrir_los_libros"],
    freeNote:
      __i18n["gratis_para_comenzar_resultado_instantaneo_compatible_con_mo"],

    reviews: [
      {
        sign: __i18n["aries_2"],
        name: "Marie L.",
        text:
          __i18n["ya_no_sabia_si_lo_que_sentia_era_real_o_si_solo_era_silencio"],
      },
      {
        sign: __i18n["geminis"],
        name: "Julie R.",
        text:
          __i18n["esperaba_un_mensaje_cada_dia_en_pocos_minutos_comprendi_si_v"],
      },
      {
        sign: __i18n["cancer_3"],
        name: "Camille D.",
        text:
          __i18n["estaba_distante_y_yo_daba_vueltas_sin_parar_esto_me_ayudo_a"],
      },
    ],
    techNote:
      __i18n["funciona_al_instante_en_movil_no_es_necesario_descargar_nada"],
    disclaimer: __i18n["exploracion_personal_no_terapeutica"],

    problemIntro:
      __i18n["en_pocos_minutos_comprendes_mejor_lo_que_estas_viviendo_y_la"],
    problems: [
      __i18n["esta_distante_y_no_entiendes_por_que"],
      __i18n["esperas_un_mensaje_pero_no_llega_nada"],
      __i18n["sientes_que_algo_no_esta_bien_sin_saber_que"],
    ],

    libraryTitle: __i18n["la_biblioteca_luna_astralis"],
    librarySubtitle:
      __i18n["descubre_guias_astrologicas_creadas_para_comprender_mejor_tu"],
    availableAmazon: __i18n["disponible_en_amazon"],
    collectionTitle: __i18n["una_coleccion_completa_de_astrologia"],
    collectionDescription:
      __i18n["signos_del_zodiaco_desarrollo_personal_compatibilidad_amoros"],
    bookCoverAlt: __i18n["portada_del_libro"],
    viewAmazon: __i18n["ver_en_amazon"],
    fullCollectionTitle:
      __i18n["descubre_toda_la_coleccion_luna_astralis"],
    fullCollectionDescription:
      __i18n["encuentra_todas_las_guias_astrologicas_disponibles_en_amazon"],
    fullCollectionButton: __i18n["ver_toda_la_coleccion"],

    howTitle: __i18n["como_funciona"],
    howSubtitle: __i18n["cuatro_pasos_sencillos_para_comenzar"],
    steps: [
      {
        icon: "♈",
        title: __i18n["elige_tu_herramienta"],
        text:
          __i18n["horoscopo_carta_natal_compatibilidad_o_conversacion_con_luna"],
      },
      {
        icon: "🌙",
        title: __i18n["obten_tu_resultado"],
        text: __i18n["tu_analisis_aparece_en_pocos_segundos"],
      },
      {
        icon: "✧",
        title: __i18n["gana_claridad"],
        text:
          __i18n["descubre_tus_fortalezas_necesidades_desafios_y_dinamicas_de"],
      },
      {
        icon: "🔐",
        title: __i18n["ve_mas_lejos"],
        text:
          __i18n["elige_el_analisis_esencial_premium_o_signature_para_profundi"],
      },
    ],

    rightsReserved: __i18n["todos_los_derechos_reservados"],
    legalNotices: __i18n["aviso_legal"],
    privacy: "Privacidad",
    terms: "Condiciones",
    footerNote:
      __i18n["exploracion_personal_no_terapeutica_reservado_para_mayores_d"],
  },

  de: {
    heroAria: __i18n["vorstellung_von_luna_astralis"],
    toolsAria: __i18n["kostenlose_astrologie_tools"],
    reviewsAria: "Nutzerbewertungen",
    fiveStarsAria: __i18n["funf_von_funf_sternen"],
    legalLinksAria: __i18n["rechtliche_links"],

    heroBadge: __i18n["geburtshoroskop_horoskop_kompatibilitat"],
    heroTitle: __i18n["kostenloses_geburtshoroskop_und_liebeskompatibilitat"],
    heroSubtitle:
      __i18n["entdecken_sie_kostenlos_ihre_sonne_ihren_mond_ihren_aszenden"],
    heroLead:
      __i18n["erstellen_sie_ihr_geburtshoroskop_lesen_sie_ihr_tageshorosko"],

    dailyUpdated: __i18n["taglich_aktualisiert"],
    horoscopeTitle: __i18n["kostenloses_tageshoroskop"],
    horoscopeDescription:
      __i18n["lesen_sie_die_astrologische_prognose_fur_ihr_zeichen_und_ver"],
    horoscopeItems: [
      __i18n["allgemeine_energie"],
      __i18n["liebe_und_beziehungen"],
      __i18n["arbeit_und_projekte"],
      __i18n["finanzen"],
      __i18n["wohlbefinden"],
      __i18n["rat_des_tages"],
    ],
    horoscopeButton: __i18n["mein_horoskop_ansehen"],

    birthChartTitle: __i18n["kostenloses_geburtshoroskop"],
    birthChartDescription:
      __i18n["erstellen_sie_ihr_geburtshoroskop_mit_sonne_mond_aszendent_u"],
    birthChartItems: [
      __i18n["sonne"],
      __i18n["mond"],
      __i18n["aszendent"],
      __i18n["astrologisches_rad"],
      __i18n["personliche_zusammenfassung"],
    ],
    birthChartButton: __i18n["mein_horoskop_erstellen"],

    compatibilityTitle: __i18n["liebeskompatibilitat"],
    compatibilityDescription:
      __i18n["vergleichen_sie_zwei_tierkreiszeichen_und_erhalten_sie_sofor"],
    compatibilityItems: [
      __i18n["liebeswert"],
      __i18n["starken_des_paares"],
      __i18n["mogliche_herausforderungen"],
      __i18n["beziehungstipps"],
      __i18n["sofortanalyse"],
    ],
    compatibilityButton: __i18n["zwei_zeichen_vergleichen"],

    trustBadge: __i18n["astrologie_leicht_zuganglich"],
    trustTitle: __i18n["warum_luna_astralis_wahlen"],
    trustSubtitle:
      __i18n["einfache_personalisierte_werkzeuge_die_ihnen_helfen_ihre_per"],
    trustFeatures: [
      {
        icon: "🔮",
        title: __i18n["personalisierte_astrologische_berechnungen"],
        text:
          __i18n["ihre_ergebnisse_werden_aus_ihren_geburtsdaten_berechnet_und"],
      },
      {
        icon: "⚡",
        title: __i18n["sofortige_ergebnisse"],
        text:
          __i18n["entdecken_sie_schnell_ihr_horoskop_geburtshoroskop_oder_ihre"],
      },
      {
        icon: "📄",
        title: __i18n["detaillierte_pdf_berichte"],
        text:
          __i18n["vertiefen_sie_ihr_geburtshoroskop_mit_personalisierten_analy"],
      },
      {
        icon: "🌍",
        title: __i18n["mehrsprachiges_erlebnis"],
        text:
          __i18n["entdecken_sie_astrologie_mit_klaren_und_verstandlichen_erkla"],
      },
    ],

    reportsBadge: __i18n["personalisierte_astrologie_berichte"],
    reportsTitle: __i18n["vertiefen_sie_ihr_geburtshoroskop"],
    reportsDescription:
      __i18n["nachdem_sie_ihr_kostenloses_geburtshoroskop_erstellt_haben_w"],
    reports: [
      {
        name: "Essential",
        price: __i18n["24_99_us_3"],
        badge: __i18n["zum_einstieg"],
        description:
          __i18n["eine_erste_personliche_deutung_ihres_geburtshoroskops_um_ihr"],
        features: [
          __i18n["ihr_astrologisches_rad"],
          __i18n["ihre_sonne_ihr_mond_und_ihr_aszendent"],
          __i18n["ihre_zehn_wichtigsten_planeten"],
          __i18n["ihre_elemente_und_modalitaten"],
          __i18n["personalisierter_pdf_bericht"],
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: __i18n["49_99_us_3"],
        badge: __i18n["ausfuhrliche_analyse"],
        description:
          __i18n["eine_umfassende_erkundung_ihrer_personlichkeit_hauser_bezieh"],
        features: [
          __i18n["alle_inhalte_der_essential_analyse"],
          __i18n["ihre_zwolf_astrologischen_hauser"],
          __i18n["ihre_planetaren_aspekte"],
          __i18n["ihre_dominanten_astrologischen_einflusse"],
          __i18n["beziehungen_karriere_starken_und_herausforderungen"],
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: __i18n["79_99_us_3"],
        badge: __i18n["am_umfassendsten"],
        description:
          __i18n["die_umfassendste_analyse_ihres_geburtshoroskops_mit_ihren_gr"],
        features: [
          __i18n["alle_inhalte_des_premium_berichts"],
          __i18n["lebensaufgabe_und_seelenweg"],
          __i18n["innere_welt_und_unbewusste_blockaden"],
          __i18n["verborgene_talente_und_integrationsleitfaden"],
          __i18n["personalisierte_signature_synthese"],
        ],
        featured: false,
      },
    ],
    recommended: "Empfohlen",
    reportPrefix: "Bericht",
    oneTimePayment: __i18n["einmalige_zahlung"],
    freeChartButton: __i18n["kostenloses_horoskop_erstellen"],
    reportsNote:
      __i18n["starten_sie_kostenlos_ihre_personalisierten_angebote_erschei"],
    discoverChartButton: __i18n["mein_geburtshoroskop_entdecken"],

    talkToLuna: __i18n["mit_luna_sprechen"],
    discoverBooks: __i18n["bucher_entdecken"],
    freeNote:
      __i18n["kostenlos_starten_sofortiges_ergebnis_mobilfreundlich"],

    reviews: [
      {
        sign: __i18n["widder"],
        name: "Marie L.",
        text:
          __i18n["ich_wusste_nicht_mehr_ob_seine_gefuhle_echt_waren_oder_ob_nu"],
      },
      {
        sign: __i18n["zwillinge"],
        name: "Julie R.",
        text:
          __i18n["ich_wartete_jeden_tag_auf_eine_nachricht_nach_wenigen_minute"],
      },
      {
        sign: __i18n["krebs"],
        name: "Camille D.",
        text:
          __i18n["er_war_distanziert_und_ich_drehte_mich_im_kreis_das_half_mir"],
      },
    ],
    techNote:
      __i18n["funktioniert_sofort_auf_mobilgeraten_fur_kostenlose_tools_is"],
    disclaimer: __i18n["personliche_erkundung_keine_therapie"],

    problemIntro:
      __i18n["in_wenigen_minuten_verstehen_sie_besser_was_sie_erleben_und"],
    problems: [
      __i18n["die_person_wirkt_distanziert_und_sie_verstehen_nicht_warum"],
      __i18n["sie_warten_auf_eine_nachricht_aber_es_kommt_nichts"],
      __i18n["sie_spuren_dass_etwas_nicht_stimmt_wissen_aber_nicht_was"],
    ],

    libraryTitle: __i18n["die_luna_astralis_bibliothek"],
    librarySubtitle:
      __i18n["entdecken_sie_astrologie_ratgeber_die_ihnen_helfen_ihre_pers"],
    availableAmazon: __i18n["bei_amazon_erhaltlich"],
    collectionTitle: __i18n["eine_umfassende_astrologie_sammlung"],
    collectionDescription:
      __i18n["tierkreiszeichen_personliche_entwicklung_liebeskompatibilita"],
    bookCoverAlt: "Buchcover",
    viewAmazon: __i18n["bei_amazon_ansehen"],
    fullCollectionTitle:
      __i18n["entdecken_sie_die_gesamte_luna_astralis_sammlung"],
    fullCollectionDescription:
      __i18n["finden_sie_alle_verfugbaren_astrologie_ratgeber_bei_amazon"],
    fullCollectionButton: __i18n["gesamte_sammlung_ansehen"],

    howTitle: __i18n["so_funktioniert_es"],
    howSubtitle: __i18n["vier_einfache_schritte_zum_start"],
    steps: [
      {
        icon: "♈",
        title: __i18n["werkzeug_auswahlen"],
        text:
          __i18n["horoskop_geburtshoroskop_kompatibilitat_oder_gesprach_mit_lu"],
      },
      {
        icon: "🌙",
        title: __i18n["ergebnis_erhalten"],
        text: __i18n["ihre_analyse_erscheint_in_wenigen_sekunden"],
      },
      {
        icon: "✧",
        title: __i18n["klarheit_gewinnen"],
        text:
          __i18n["entdecken_sie_ihre_starken_bedurfnisse_herausforderungen_und"],
      },
      {
        icon: "🔐",
        title: __i18n["tiefer_gehen"],
        text:
          __i18n["wahlen_sie_die_essential_premium_oder_signature_analyse_um_i"],
      },
    ],

    rightsReserved: __i18n["alle_rechte_vorbehalten"],
    legalNotices: "Impressum",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    footerNote:
      __i18n["personliche_erkundung_keine_therapie_nur_fur_personen_ab_18"],
  },

  it: {
    heroAria: __i18n["presentazione_di_luna_astralis"],
    toolsAria: __i18n["strumenti_astrologici_gratuiti"],
    reviewsAria: __i18n["recensioni_degli_utenti"],
    fiveStarsAria: __i18n["cinque_stelle_su_cinque"],
    legalLinksAria: __i18n["link_legali"],

    heroBadge: __i18n["tema_natale_oroscopo_compatibilita"],
    heroTitle: __i18n["tema_natale_gratuito_e_compatibilita_amorosa"],
    heroSubtitle:
      __i18n["scopri_gratuitamente_il_tuo_sole_la_tua_luna_il_tuo_ascenden"],
    heroLead:
      __i18n["crea_il_tuo_tema_natale_consulta_il_tuo_oroscopo_quotidiano"],

    dailyUpdated: __i18n["aggiornato_ogni_giorno"],
    horoscopeTitle: __i18n["oroscopo_quotidiano_gratuito"],
    horoscopeDescription:
      __i18n["consulta_le_previsioni_astrologiche_del_tuo_segno_per_compre"],
    horoscopeItems: [
      __i18n["energia_generale"],
      __i18n["amore_e_relazioni"],
      __i18n["lavoro_e_progetti"],
      __i18n["finanze"],
      __i18n["benessere"],
      __i18n["consiglio_del_giorno"],
    ],
    horoscopeButton: __i18n["vedi_il_mio_oroscopo"],

    birthChartTitle: __i18n["tema_natale_gratuito"],
    birthChartDescription:
      __i18n["genera_il_tuo_tema_natale_con_sole_luna_ascendente_e_ruota_a"],
    birthChartItems: [
      __i18n["sole"],
      __i18n["luna_2"],
      __i18n["ascendente_2"],
      __i18n["ruota_astrologica"],
      __i18n["sintesi_personalizzata"],
    ],
    birthChartButton: __i18n["crea_il_mio_tema"],

    compatibilityTitle: __i18n["compatibilita_amorosa"],
    compatibilityDescription:
      __i18n["confronta_due_segni_zodiacali_e_ottieni_subito_il_punteggio"],
    compatibilityItems: [
      __i18n["punteggio_d_amore"],
      __i18n["punti_di_forza_della_coppia"],
      __i18n["possibili_sfide"],
      __i18n["consigli_di_coppia"],
      __i18n["analisi_immediata"],
    ],
    compatibilityButton: __i18n["confronta_due_segni"],

    trustBadge: __i18n["astrologia_accessibile"],
    trustTitle: __i18n["perche_scegliere_luna_astralis"],
    trustSubtitle:
      __i18n["strumenti_semplici_e_personalizzati_per_aiutarti_a_comprende"],
    trustFeatures: [
      {
        icon: "🔮",
        title: __i18n["calcoli_astrologici_personalizzati"],
        text:
          __i18n["i_risultati_sono_calcolati_dai_tuoi_dati_di_nascita_e_adatta"],
      },
      {
        icon: "⚡",
        title: __i18n["risultati_immediati"],
        text:
          __i18n["scopri_rapidamente_il_tuo_oroscopo_il_tema_natale_o_la_compa"],
      },
      {
        icon: "📄",
        title: __i18n["rapporti_pdf_dettagliati"],
        text:
          __i18n["approfondisci_il_tuo_tema_natale_con_analisi_personalizzate"],
      },
      {
        icon: "🌍",
        title: __i18n["un_esperienza_multilingue"],
        text:
          __i18n["esplora_l_astrologia_con_spiegazioni_chiare_e_accessibili_in"],
      },
    ],

    reportsBadge: __i18n["rapporti_astrologici_personalizzati"],
    reportsTitle: __i18n["approfondisci_il_tuo_tema_natale"],
    reportsDescription:
      __i18n["dopo_aver_creato_gratuitamente_il_tuo_tema_natale_scegli_il"],
    reports: [
      {
        name: "Essenziale",
        price: __i18n["24_99_usd"],
        badge: __i18n["per_iniziare"],
        description:
          __i18n["una_prima_lettura_personalizzata_del_tuo_tema_natale_per_com"],
        features: [
          __i18n["la_tua_ruota_astrologica"],
          __i18n["il_tuo_sole_la_tua_luna_e_il_tuo_ascendente"],
          __i18n["i_tuoi_dieci_pianeti_principali"],
          __i18n["i_tuoi_elementi_e_le_tue_modalita"],
          __i18n["rapporto_pdf_personalizzato"],
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: __i18n["49_99_usd"],
        badge: __i18n["analisi_approfondita"],
        description:
          __i18n["un_esplorazione_completa_della_tua_personalita_delle_case_de"],
        features: [
          __i18n["tutto_il_contenuto_dell_analisi_essenziale"],
          __i18n["le_tue_dodici_case_astrologiche"],
          __i18n["i_tuoi_aspetti_planetari"],
          __i18n["le_tue_influenze_astrologiche_dominanti"],
          __i18n["relazioni_carriera_punti_di_forza_e_sfide"],
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: __i18n["79_99_usd"],
        badge: __i18n["il_piu_completo"],
        description:
          __i18n["l_analisi_piu_completa_del_tuo_tema_natale_con_le_principali"],
        features: [
          __i18n["tutto_il_contenuto_del_rapporto_premium"],
          __i18n["missione_di_vita_e_cammino_dell_anima"],
          __i18n["mondo_interiore_e_blocchi_inconsci"],
          __i18n["talenti_nascosti_e_guida_all_integrazione"],
          __i18n["sintesi_signature_personalizzata"],
        ],
        featured: false,
      },
    ],
    recommended: "Consigliato",
    reportPrefix: "Rapporto",
    oneTimePayment: __i18n["pagamento_unico"],
    freeChartButton: __i18n["crea_il_mio_tema_gratuito"],
    reportsNote:
      __i18n["inizia_gratuitamente_le_offerte_personalizzate_appariranno_d"],
    discoverChartButton: __i18n["scopri_il_mio_tema_natale"],

    talkToLuna: __i18n["parla_con_luna"],
    discoverBooks: __i18n["scopri_i_libri"],
    freeNote:
      __i18n["gratis_per_iniziare_risultato_immediato_compatibile_con_disp"],

    reviews: [
      {
        sign: __i18n["ariete"],
        name: "Marie L.",
        text:
          __i18n["non_capivo_piu_se_cio_che_provava_fosse_reale_o_se_ci_fosse"],
      },
      {
        sign: __i18n["gemelli"],
        name: "Julie R.",
        text:
          __i18n["aspettavo_un_messaggio_ogni_giorno_in_pochi_minuti_ho_capito"],
      },
      {
        sign: __i18n["cancro"],
        name: "Camille D.",
        text:
          __i18n["era_distante_e_continuavo_a_girare_in_tondo_questo_mi_ha_aiu"],
      },
    ],
    techNote:
      __i18n["funziona_subito_su_mobile_nessun_download_richiesto_per_gli"],
    disclaimer: __i18n["esplorazione_personale_non_terapeutica"],

    problemIntro:
      __i18n["in_pochi_minuti_comprendi_meglio_cio_che_stai_vivendo_e_le_d"],
    problems: [
      __i18n["e_distante_e_non_capisci_perche"],
      __i18n["aspetti_un_messaggio_ma_non_arriva_nulla"],
      __i18n["senti_che_qualcosa_non_va_senza_sapere_cosa"],
    ],

    libraryTitle: __i18n["la_biblioteca_luna_astralis_2"],
    librarySubtitle:
      __i18n["scopri_guide_astrologiche_create_per_comprendere_meglio_la_t"],
    availableAmazon: __i18n["disponibile_su_amazon"],
    collectionTitle: __i18n["una_collezione_completa_di_astrologia"],
    collectionDescription:
      __i18n["segni_zodiacali_crescita_personale_compatibilita_amorosa_e_m"],
    bookCoverAlt: __i18n["copertina_del_libro"],
    viewAmazon: __i18n["vedi_su_amazon"],
    fullCollectionTitle:
      __i18n["scopri_tutta_la_collezione_luna_astralis"],
    fullCollectionDescription:
      __i18n["trova_tutte_le_guide_astrologiche_disponibili_su_amazon"],
    fullCollectionButton: __i18n["vedi_tutta_la_collezione"],

    howTitle: __i18n["come_funziona"],
    howSubtitle: __i18n["quattro_semplici_passaggi_per_iniziare"],
    steps: [
      {
        icon: "♈",
        title: __i18n["scegli_il_tuo_strumento"],
        text:
          __i18n["oroscopo_tema_natale_compatibilita_o_conversazione_con_luna"],
      },
      {
        icon: "🌙",
        title: __i18n["ottieni_il_risultato"],
        text: __i18n["la_tua_analisi_appare_in_pochi_secondi"],
      },
      {
        icon: "✧",
        title: __i18n["ottieni_chiarezza"],
        text:
          __i18n["scopri_i_tuoi_punti_di_forza_bisogni_sfide_e_dinamiche_relaz"],
      },
      {
        icon: "🔐",
        title: __i18n["vai_oltre"],
        text:
          __i18n["scegli_l_analisi_essenziale_premium_o_signature_per_approfon"],
      },
    ],

    rightsReserved: __i18n["tutti_i_diritti_riservati"],
    legalNotices: __i18n["note_legali"],
    privacy: "Privacy",
    terms: "Condizioni",
    footerNote:
      __i18n["esplorazione_personale_non_terapeutica_riservato_ai_maggiori"],
  },

  pt: {
    heroAria: __i18n["apresentacao_da_luna_astralis"],
    toolsAria: __i18n["ferramentas_astrologicas_gratuitas"],
    reviewsAria: __i18n["avaliacoes_dos_usuarios"],
    fiveStarsAria: __i18n["cinco_estrelas_de_cinco"],
    legalLinksAria: __i18n["links_legais"],

    heroBadge: __i18n["mapa_astral_horoscopo_compatibilidade"],
    heroTitle: __i18n["mapa_astral_gratis_e_compatibilidade_amorosa"],
    heroSubtitle:
      __i18n["descubra_gratuitamente_seu_sol_sua_lua_seu_ascendente_e_sua"],
    heroLead:
      __i18n["crie_seu_mapa_astral_consulte_seu_horoscopo_diario_e_compare"],

    dailyUpdated: __i18n["atualizado_todos_os_dias"],
    horoscopeTitle: __i18n["horoscopo_diario_gratis_2"],
    horoscopeDescription:
      __i18n["consulte_as_previsoes_astrologicas_do_seu_signo_para_compree"],
    horoscopeItems: [
      __i18n["energia_geral"],
      __i18n["amor_e_relacionamentos"],
      __i18n["trabalho_e_projetos"],
      __i18n["financas"],
      __i18n["bem_estar"],
      __i18n["conselho_do_dia"],
    ],
    horoscopeButton: __i18n["ver_meu_horoscopo"],

    birthChartTitle: __i18n["mapa_astral_gratis"],
    birthChartDescription:
      __i18n["gere_seu_mapa_astral_com_seu_sol_sua_lua_seu_ascendente_e_su"],
    birthChartItems: [
      __i18n["sol_2"],
      __i18n["lua"],
      __i18n["ascendente_3"],
      __i18n["roda_astrologica"],
      __i18n["resumo_personalizado"],
    ],
    birthChartButton: __i18n["criar_meu_mapa"],

    compatibilityTitle: __i18n["compatibilidade_amorosa"],
    compatibilityDescription:
      __i18n["compare_dois_signos_do_zodiaco_e_receba_imediatamente_sua_po"],
    compatibilityItems: [
      __i18n["pontuacao_amorosa"],
      __i18n["forcas_do_casal"],
      __i18n["possiveis_desafios"],
      __i18n["conselhos_de_relacionamento"],
      __i18n["analise_instantanea"],
    ],
    compatibilityButton: __i18n["comparar_dois_signos"],

    trustBadge: __i18n["astrologia_acessivel"],
    trustTitle: __i18n["por_que_escolher_a_luna_astralis"],
    trustSubtitle:
      __i18n["ferramentas_simples_e_personalizadas_para_ajudar_voce_a_comp"],
    trustFeatures: [
      {
        icon: "🔮",
        title: __i18n["calculos_astrologicos_personalizados_2"],
        text:
          __i18n["seus_resultados_sao_calculados_a_partir_dos_seus_dados_de_na"],
      },
      {
        icon: "⚡",
        title: __i18n["resultados_instantaneos_2"],
        text:
          __i18n["descubra_rapidamente_seu_horoscopo_mapa_astral_ou_compatibil"],
      },
      {
        icon: "📄",
        title: __i18n["relatorios_pdf_detalhados"],
        text:
          __i18n["aprofunde_seu_mapa_astral_com_analises_personalizadas_dispon"],
      },
      {
        icon: "🌍",
        title: __i18n["uma_experiencia_multilingue"],
        text:
          __i18n["explore_a_astrologia_com_explicacoes_claras_e_acessiveis_em"],
      },
    ],

    reportsBadge: __i18n["relatorios_astrologicos_personalizados"],
    reportsTitle: __i18n["aprofunde_seu_mapa_astral"],
    reportsDescription:
      __i18n["depois_de_criar_gratuitamente_seu_mapa_astral_escolha_o_nive"],
    reports: [
      {
        name: "Essencial",
        price: __i18n["us_24_99"],
        badge: __i18n["para_comecar"],
        description:
          __i18n["uma_primeira_leitura_personalizada_do_seu_mapa_astral_para_c"],
        features: [
          __i18n["sua_roda_astrologica"],
          __i18n["seu_sol_sua_lua_e_seu_ascendente"],
          __i18n["seus_dez_planetas_principais"],
          __i18n["seus_elementos_e_modalidades"],
          __i18n["relatorio_pdf_personalizado"],
        ],
        featured: false,
      },
      {
        name: "Premium",
        price: __i18n["us_49_99"],
        badge: __i18n["analise_aprofundada"],
        description:
          __i18n["uma_exploracao_completa_da_sua_personalidade_das_casas_dos_r"],
        features: [
          __i18n["todo_o_conteudo_da_analise_essencial"],
          __i18n["suas_doze_casas_astrologicas"],
          __i18n["seus_aspectos_planetarios"],
          __i18n["suas_influencias_astrologicas_dominantes"],
          __i18n["relacionamentos_carreira_forcas_e_desafios"],
        ],
        featured: true,
      },
      {
        name: "Signature",
        price: __i18n["us_79_99"],
        badge: __i18n["o_mais_completo"],
        description:
          __i18n["a_analise_mais_completa_do_seu_mapa_astral_com_suas_grandes"],
        features: [
          __i18n["todo_o_conteudo_do_relatorio_premium"],
          __i18n["missao_de_vida_e_caminho_da_alma"],
          __i18n["mundo_interior_e_bloqueios_inconscientes"],
          __i18n["talentos_ocultos_e_guia_de_integracao"],
          __i18n["sintese_signature_personalizada"],
        ],
        featured: false,
      },
    ],
    recommended: "Recomendado",
    reportPrefix: __i18n["relatorio"],
    oneTimePayment: __i18n["pagamento_unico_2"],
    freeChartButton: __i18n["criar_meu_mapa_gratis"],
    reportsNote:
      __i18n["comece_gratuitamente_suas_ofertas_personalizadas_aparecerao"],
    discoverChartButton: __i18n["descobrir_meu_mapa_astral"],

    talkToLuna: __i18n["falar_com_luna"],
    discoverBooks: __i18n["descobrir_os_livros"],
    freeNote:
      __i18n["gratis_para_comecar_resultado_instantaneo_compativel_com_cel"],

    reviews: [
      {
        sign: __i18n["aries_3"],
        name: "Marie L.",
        text:
          __i18n["eu_ja_nao_sabia_se_o_que_ele_sentia_era_real_ou_se_havia_ape"],
      },
      {
        sign: __i18n["gemeos"],
        name: "Julie R.",
        text:
          __i18n["eu_esperava_uma_mensagem_todos_os_dias_em_poucos_minutos_ent"],
      },
      {
        sign: __i18n["cancer_4"],
        name: "Camille D.",
        text:
          __i18n["ele_estava_distante_e_eu_continuava_andando_em_circulos_isso"],
      },
    ],
    techNote:
      __i18n["funciona_instantaneamente_no_celular_nenhum_download_e_neces"],
    disclaimer: __i18n["exploracao_pessoal_nao_terapeutica"],

    problemIntro:
      __i18n["em_poucos_minutos_voce_entende_melhor_o_que_esta_vivendo_e_a"],
    problems: [
      __i18n["a_pessoa_esta_distante_e_voce_nao_entende_por_que"],
      __i18n["voce_espera_uma_mensagem_mas_nada_chega"],
      __i18n["voce_sente_que_algo_esta_errado_sem_saber_o_que"],
    ],

    libraryTitle: __i18n["a_biblioteca_luna_astralis"],
    librarySubtitle:
      __i18n["descubra_guias_astrologicos_criados_para_compreender_melhor"],
    availableAmazon: __i18n["disponivel_na_amazon"],
    collectionTitle: __i18n["uma_colecao_completa_de_astrologia"],
    collectionDescription:
      __i18n["signos_do_zodiaco_desenvolvimento_pessoal_compatibilidade_am"],
    bookCoverAlt: __i18n["capa_do_livro"],
    viewAmazon: __i18n["ver_na_amazon"],
    fullCollectionTitle:
      __i18n["descubra_toda_a_colecao_luna_astralis"],
    fullCollectionDescription:
      __i18n["encontre_todos_os_guias_astrologicos_disponiveis_na_amazon"],
    fullCollectionButton: __i18n["ver_toda_a_colecao"],

    howTitle: __i18n["como_funciona_2"],
    howSubtitle: __i18n["quatro_passos_simples_para_comecar"],
    steps: [
      {
        icon: "♈",
        title: __i18n["escolha_sua_ferramenta"],
        text:
          __i18n["horoscopo_mapa_astral_compatibilidade_ou_conversa_com_luna"],
      },
      {
        icon: "🌙",
        title: __i18n["receba_seu_resultado"],
        text: __i18n["sua_analise_aparece_em_poucos_segundos"],
      },
      {
        icon: "✧",
        title: __i18n["ganhe_clareza"],
        text:
          __i18n["descubra_suas_forcas_necessidades_desafios_e_dinamicas_de_re"],
      },
      {
        icon: "🔐",
        title: __i18n["va_mais_longe"],
        text:
          __i18n["escolha_a_analise_essencial_premium_ou_signature_para_aprofu"],
      },
    ],

    rightsReserved: __i18n["todos_os_direitos_reservados"],
    legalNotices: __i18n["aviso_legal_2"],
    privacy: "Privacidade",
    terms: __i18n["condicoes"],
    footerNote:
      __i18n["exploracao_pessoal_nao_terapeutica_reservado_para_maiores_de"],
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
                    {__i18n["luna_astralis"]}</span>

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
                    {__i18n["luna_astralis_2"]}</div>

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
