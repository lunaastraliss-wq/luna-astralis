// app/pricing/PricingClient.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import "../pricing.css";

type PricingDictionary = Record<string, string>;

type PricingClientProps = {
  locale: string;
  dictionary: PricingDictionary;
};

type MsgType = "ok" | "err" | "info";
const LS_SIGN_KEY = "la_sign";

type Locale = "fr" | "en" | "es" | "de" | "it" | "pt";

function normalizeLocale(locale: string): Locale {
  const short = (locale || "fr").toLowerCase().split("-")[0];
  return ["fr", "en", "es", "de", "it", "pt"].includes(short)
    ? (short as Locale)
    : "fr";
}

function safeNext(v: string | null, locale: string) {
  const s = (v || "").trim();
  const fallback = `/${locale}/chat`;

  if (!s) return fallback;
  if (/^https?:\/\//i.test(s) || s.startsWith("//")) return fallback;

  const path = s.startsWith("/") ? s : `/${s}`;
  if (path.startsWith("/login") || path.startsWith("/auth")) return fallback;

  return path;
}

function getStoredSign(): string {
  if (typeof window === "undefined") return "";

  try {
    return (localStorage.getItem(LS_SIGN_KEY) || "").trim();
  } catch {
    return "";
  }
}

const UI: Record<Locale, {
  home: string;
  pricing: string;
  back: string;
  title: string;
  info: string;
  trust: string;
  plans: string;
  month: string;
  year: string;
  redirect: string;
  unlock: string;
  unlimited: string;
  chooseYearly: string;
  yearlyUnlimited: string;
  canceled: string;
  paid: string;
  checking: string;
  openingStripe: string;
  checkoutError: string;
  missingStripeUrl: string;
  errorPrefix: string;
}> = {
  fr: {
    home: "Accueil",
    pricing: "Tarifs",
    back: "Retour",
    title: "TARIFS",
    info: "Informations",
    trust: "Confiance",
    plans: "Formules",
    month: "/ mois",
    year: "/ an",
    redirect: "Redirection…",
    unlock: "Débloquer la réponse",
    unlimited: "Accès illimité 24h/7",
    chooseYearly: "Choisir l’annuel",
    yearlyUnlimited: "Accès illimité annuel",
    canceled: "Paiement annulé. Tu peux réessayer quand tu veux.",
    paid: "Paiement reçu. Merci ✨ Tu peux retourner au chat.",
    checking: "Vérification…",
    openingStripe: "Ouverture de Stripe…",
    checkoutError: "Erreur checkout.",
    missingStripeUrl: "URL Stripe manquante.",
    errorPrefix: "Erreur : ",
  },
  en: {
    home: "Home",
    pricing: "Pricing",
    back: "Back",
    title: "PRICING",
    info: "Information",
    trust: "Trust",
    plans: "Plans",
    month: "/ month",
    year: "/ year",
    redirect: "Redirecting…",
    unlock: "Unlock the answer",
    unlimited: "Unlimited access 24/7",
    chooseYearly: "Choose annual",
    yearlyUnlimited: "Annual unlimited access",
    canceled: "Payment canceled. You can try again anytime.",
    paid: "Payment received. Thank you ✨ You can return to the chat.",
    checking: "Checking…",
    openingStripe: "Opening Stripe…",
    checkoutError: "Checkout error.",
    missingStripeUrl: "Missing Stripe URL.",
    errorPrefix: "Error: ",
  },
  es: {
    home: "Inicio",
    pricing: "Precios",
    back: "Volver",
    title: "PRECIOS",
    info: "Información",
    trust: "Confianza",
    plans: "Planes",
    month: "/ mes",
    year: "/ año",
    redirect: "Redirigiendo…",
    unlock: "Desbloquear la respuesta",
    unlimited: "Acceso ilimitado 24/7",
    chooseYearly: "Elegir anual",
    yearlyUnlimited: "Acceso ilimitado anual",
    canceled: "Pago cancelado. Puedes intentarlo de nuevo cuando quieras.",
    paid: "Pago recibido. Gracias ✨ Puedes volver al chat.",
    checking: "Verificando…",
    openingStripe: "Abriendo Stripe…",
    checkoutError: "Error de pago.",
    missingStripeUrl: "Falta la URL de Stripe.",
    errorPrefix: "Error: ",
  },
  de: {
    home: "Startseite",
    pricing: "Preise",
    back: "Zurück",
    title: "PREISE",
    info: "Informationen",
    trust: "Vertrauen",
    plans: "Tarife",
    month: "/ Monat",
    year: "/ Jahr",
    redirect: "Weiterleitung…",
    unlock: "Antwort freischalten",
    unlimited: "Unbegrenzter Zugang 24/7",
    chooseYearly: "Jahresplan wählen",
    yearlyUnlimited: "Unbegrenzter Jahreszugang",
    canceled: "Zahlung abgebrochen. Du kannst es jederzeit erneut versuchen.",
    paid: "Zahlung erhalten. Danke ✨ Du kannst zum Chat zurückkehren.",
    checking: "Überprüfung…",
    openingStripe: "Stripe wird geöffnet…",
    checkoutError: "Checkout-Fehler.",
    missingStripeUrl: "Stripe-URL fehlt.",
    errorPrefix: "Fehler: ",
  },
  it: {
    home: "Home",
    pricing: "Prezzi",
    back: "Indietro",
    title: "PREZZI",
    info: "Informazioni",
    trust: "Fiducia",
    plans: "Piani",
    month: "/ mese",
    year: "/ anno",
    redirect: "Reindirizzamento…",
    unlock: "Sblocca la risposta",
    unlimited: "Accesso illimitato 24/7",
    chooseYearly: "Scegli annuale",
    yearlyUnlimited: "Accesso illimitato annuale",
    canceled: "Pagamento annullato. Puoi riprovare quando vuoi.",
    paid: "Pagamento ricevuto. Grazie ✨ Puoi tornare alla chat.",
    checking: "Verifica…",
    openingStripe: "Apertura di Stripe…",
    checkoutError: "Errore di checkout.",
    missingStripeUrl: "URL Stripe mancante.",
    errorPrefix: "Errore: ",
  },
  pt: {
    home: "Início",
    pricing: "Preços",
    back: "Voltar",
    title: "PREÇOS",
    info: "Informações",
    trust: "Confiança",
    plans: "Planos",
    month: "/ mês",
    year: "/ ano",
    redirect: "Redirecionando…",
    unlock: "Desbloquear a resposta",
    unlimited: "Acesso ilimitado 24/7",
    chooseYearly: "Escolher anual",
    yearlyUnlimited: "Acesso ilimitado anual",
    canceled: "Pagamento cancelado. Você pode tentar novamente quando quiser.",
    paid: "Pagamento recebido. Obrigado ✨ Você pode voltar ao chat.",
    checking: "Verificando…",
    openingStripe: "Abrindo Stripe…",
    checkoutError: "Erro no checkout.",
    missingStripeUrl: "URL do Stripe ausente.",
    errorPrefix: "Erro: ",
  },
};

const FALLBACK: Record<Locale, Record<string, string>> = {
  fr: {
    accueil_luna_astralis: "Accueil Luna Astralis",
    luna_astralis: "Luna Astralis",
    astro_psycho: "Astro • Psycho",
    navigation_principale: "Navigation principale",
    presentation_des_tarifs: "Présentation des tarifs",
    acces_24h_7: "ACCÈS 24H/7",
    debloque_une_direction_claire_quand_tu_es_dans_le_flou:
      "Débloque une direction claire quand tu es dans le flou",
    paiement_securise_acces_immediat_annule_quand_tu_veux:
      "Paiement sécurisé • accès immédiat • annule quand tu veux",
    prix_en_dollars_us_usd: "Prix en dollars US (USD)",
    change_ou_annule_en_tout_temps: "Change ou annule en tout temps",
    reponse_claire_en_quelques_minutes: "Réponse claire en quelques minutes",
    une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue:
      "Une guidance douce et directe pour comprendre ce qui se joue.",
    paiement_securise_annulation_simple_aucun_frais_cache:
      "Paiement sécurisé • annulation simple • aucun frais caché",
    mensuel_debloquer_la_reponse: "Mensuel — Débloquer la réponse",
    debloquer_la_reponse: "Débloquer la réponse",
    "4_99_nbsp": "4,99 $",
    quand_tu_veux_une_direction_claire_tout_de_suite:
      "Quand tu veux une direction claire tout de suite.",
    clarifier_ce_qui_se_passe_vraiment: "Clarifier ce qui se passe vraiment",
    voir_ta_part_l_autre_part_sans_te_juger:
      "Voir ta part et l’autre part, sans te juger",
    savoir_quoi_faire_maintenant: "Savoir quoi faire maintenant",
    acces_24h_7_mobile: "Accès 24h/7 sur mobile",
    mensuel_illimite_le_plus_populaire: "Mensuel illimité — Le plus populaire",
    mensuel_aller_au_fond_des_choses: "Mensuel — Aller au fond des choses",
    le_plus_populaire: "LE PLUS POPULAIRE",
    aller_au_fond_des_choses: "Aller au fond des choses",
    "9_99_nbsp": "9,99 $",
    pour_avancer_avec_un_vrai_fil_conducteur:
      "Pour avancer avec un vrai fil conducteur.",
    explorer_en_profondeur_patterns_emotions_repetitions:
      "Explorer en profondeur : patterns, émotions, répétitions",
    historique_pour_suivre_ton_evolution: "Historique pour suivre ton évolution",
    guidance_plus_complete_astro_psycho: "Guidance plus complète astro-psycho",
    acces_24h_7_sans_limites: "Accès 24h/7 sans limites",
    annuel_essentiel_pour_celles_qui_reviennent_souvent:
      "Annuel essentiel — Pour celles qui reviennent souvent",
    annuel_essentiel_pour_celles_qui_reviennent_souvent_2:
      "Annuel essentiel",
    "59_99_nbsp": "59,99 $",
    "49_99_nbsp": "49,99 $",
    le_plus_economique_si_tu_utilises_luna_regulierement:
      "Le plus économique si tu utilises Luna régulièrement.",
    direction_claire_quand_tu_en_as_besoin:
      "Une direction claire quand tu en as besoin",
    un_rythme_simple_sans_pression: "Un rythme simple, sans pression",
    acces_24h_7_toute_l_annee: "Accès 24h/7 toute l’année",
    meilleur_prix_sur_12_mois: "Meilleur prix sur 12 mois",
    annuel_illimite_accompagnement_complet:
      "Annuel illimité — Accompagnement complet",
    meilleure_valeur: "MEILLEURE VALEUR",
    annuel_illimite_accompagnement_complet_2: "Annuel illimité",
    "119_99_nbsp": "119,99 $",
    "99_99_nbsp": "99,99 $",
    si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur:
      "Si tu veux un espace stable pour te comprendre en profondeur.",
    illimite_historique_complet: "Illimité + historique complet",
    acces_prioritaire: "Accès prioritaire",
    evolution_future_tarot_lune_ascendant:
      "Évolutions futures : tarot, lune, ascendant",
    le_meilleur_prix_par_mois: "Le meilleur prix par mois",
    luna_astralis_2: "Luna Astralis",
    prix_en_usd_acces_24h_7: "Prix en USD • Accès 24h/7",
  },
  en: {
    accueil_luna_astralis: "Luna Astralis home",
    luna_astralis: "Luna Astralis",
    astro_psycho: "Astro • Psycho",
    navigation_principale: "Main navigation",
    presentation_des_tarifs: "Pricing overview",
    acces_24h_7: "24/7 ACCESS",
    debloque_une_direction_claire_quand_tu_es_dans_le_flou:
      "Unlock clear direction when everything feels uncertain",
    paiement_securise_acces_immediat_annule_quand_tu_veux:
      "Secure payment • immediate access • cancel anytime",
    prix_en_dollars_us_usd: "Prices in US dollars (USD)",
    change_ou_annule_en_tout_temps: "Change or cancel anytime",
    reponse_claire_en_quelques_minutes: "A clear answer in just a few minutes",
    une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue:
      "Gentle, direct guidance to understand what is really happening.",
    paiement_securise_annulation_simple_aucun_frais_cache:
      "Secure payment • easy cancellation • no hidden fees",
    mensuel_debloquer_la_reponse: "Monthly — Unlock the answer",
    debloquer_la_reponse: "Unlock the answer",
    "4_99_nbsp": "$4.99",
    quand_tu_veux_une_direction_claire_tout_de_suite:
      "When you want clear direction right away.",
    clarifier_ce_qui_se_passe_vraiment: "Clarify what is really happening",
    voir_ta_part_l_autre_part_sans_te_juger:
      "See your part and the other person’s part without judgment",
    savoir_quoi_faire_maintenant: "Know what to do next",
    acces_24h_7_mobile: "24/7 mobile access",
    mensuel_illimite_le_plus_populaire: "Unlimited monthly — Most popular",
    mensuel_aller_au_fond_des_choses: "Monthly — Go deeper",
    le_plus_populaire: "MOST POPULAR",
    aller_au_fond_des_choses: "Go deeper",
    "9_99_nbsp": "$9.99",
    pour_avancer_avec_un_vrai_fil_conducteur:
      "For ongoing guidance with a clear thread.",
    explorer_en_profondeur_patterns_emotions_repetitions:
      "Explore patterns, emotions and repetitions in depth",
    historique_pour_suivre_ton_evolution: "History to follow your progress",
    guidance_plus_complete_astro_psycho: "More complete astro-psycho guidance",
    acces_24h_7_sans_limites: "Unlimited 24/7 access",
    annuel_essentiel_pour_celles_qui_reviennent_souvent:
      "Essential annual — For regular users",
    annuel_essentiel_pour_celles_qui_reviennent_souvent_2:
      "Essential annual",
    "59_99_nbsp": "$59.99",
    "49_99_nbsp": "$49.99",
    le_plus_economique_si_tu_utilises_luna_regulierement:
      "The most economical option if you use Luna regularly.",
    direction_claire_quand_tu_en_as_besoin: "Clear direction whenever you need it",
    un_rythme_simple_sans_pression: "A simple rhythm, without pressure",
    acces_24h_7_toute_l_annee: "24/7 access all year",
    meilleur_prix_sur_12_mois: "Better value over 12 months",
    annuel_illimite_accompagnement_complet:
      "Unlimited annual — Complete support",
    meilleure_valeur: "BEST VALUE",
    annuel_illimite_accompagnement_complet_2: "Unlimited annual",
    "119_99_nbsp": "$119.99",
    "99_99_nbsp": "$99.99",
    si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur:
      "If you want a stable space to understand yourself more deeply.",
    illimite_historique_complet: "Unlimited access + complete history",
    acces_prioritaire: "Priority access",
    evolution_future_tarot_lune_ascendant:
      "Future additions: tarot, moon, rising sign",
    le_meilleur_prix_par_mois: "Best monthly value",
    luna_astralis_2: "Luna Astralis",
    prix_en_usd_acces_24h_7: "Prices in USD • 24/7 access",
  },
  es: {
    accueil_luna_astralis: "Inicio Luna Astralis",
    luna_astralis: "Luna Astralis",
    astro_psycho: "Astro • Psico",
    navigation_principale: "Navegación principal",
    presentation_des_tarifs: "Presentación de precios",
    acces_24h_7: "ACCESO 24/7",
    debloque_une_direction_claire_quand_tu_es_dans_le_flou:
      "Encuentra una dirección clara cuando todo se siente confuso",
    paiement_securise_acces_immediat_annule_quand_tu_veux:
      "Pago seguro • acceso inmediato • cancela cuando quieras",
    prix_en_dollars_us_usd: "Precios en dólares estadounidenses (USD)",
    change_ou_annule_en_tout_temps: "Cambia o cancela cuando quieras",
    reponse_claire_en_quelques_minutes: "Una respuesta clara en pocos minutos",
    une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue:
      "Una guía amable y directa para comprender lo que realmente ocurre.",
    paiement_securise_annulation_simple_aucun_frais_cache:
      "Pago seguro • cancelación sencilla • sin cargos ocultos",
    mensuel_debloquer_la_reponse: "Mensual — Desbloquear la respuesta",
    debloquer_la_reponse: "Desbloquear la respuesta",
    "4_99_nbsp": "4,99 $",
    quand_tu_veux_une_direction_claire_tout_de_suite:
      "Cuando quieres una dirección clara de inmediato.",
    clarifier_ce_qui_se_passe_vraiment: "Aclarar lo que realmente está pasando",
    voir_ta_part_l_autre_part_sans_te_juger:
      "Ver tu parte y la de la otra persona sin juzgarte",
    savoir_quoi_faire_maintenant: "Saber qué hacer ahora",
    acces_24h_7_mobile: "Acceso móvil 24/7",
    mensuel_illimite_le_plus_populaire: "Mensual ilimitado — Más popular",
    mensuel_aller_au_fond_des_choses: "Mensual — Ir más a fondo",
    le_plus_populaire: "MÁS POPULAR",
    aller_au_fond_des_choses: "Ir más a fondo",
    "9_99_nbsp": "9,99 $",
    pour_avancer_avec_un_vrai_fil_conducteur:
      "Para avanzar con una guía continua y coherente.",
    explorer_en_profondeur_patterns_emotions_repetitions:
      "Explorar a fondo patrones, emociones y repeticiones",
    historique_pour_suivre_ton_evolution: "Historial para seguir tu evolución",
    guidance_plus_complete_astro_psycho: "Guía astro-psicológica más completa",
    acces_24h_7_sans_limites: "Acceso ilimitado 24/7",
    annuel_essentiel_pour_celles_qui_reviennent_souvent:
      "Anual esencial — Para quienes vuelven con frecuencia",
    annuel_essentiel_pour_celles_qui_reviennent_souvent_2:
      "Anual esencial",
    "59_99_nbsp": "59,99 $",
    "49_99_nbsp": "49,99 $",
    le_plus_economique_si_tu_utilises_luna_regulierement:
      "La opción más económica si usas Luna con regularidad.",
    direction_claire_quand_tu_en_as_besoin: "Dirección clara cuando la necesites",
    un_rythme_simple_sans_pression: "Un ritmo simple, sin presión",
    acces_24h_7_toute_l_annee: "Acceso 24/7 todo el año",
    meilleur_prix_sur_12_mois: "Mejor precio durante 12 meses",
    annuel_illimite_accompagnement_complet:
      "Anual ilimitado — Acompañamiento completo",
    meilleure_valeur: "MEJOR VALOR",
    annuel_illimite_accompagnement_complet_2: "Anual ilimitado",
    "119_99_nbsp": "119,99 $",
    "99_99_nbsp": "99,99 $",
    si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur:
      "Si quieres un espacio estable para comprenderte más profundamente.",
    illimite_historique_complet: "Ilimitado + historial completo",
    acces_prioritaire: "Acceso prioritario",
    evolution_future_tarot_lune_ascendant:
      "Próximas funciones: tarot, luna y ascendente",
    le_meilleur_prix_par_mois: "El mejor precio por mes",
    luna_astralis_2: "Luna Astralis",
    prix_en_usd_acces_24h_7: "Precios en USD • Acceso 24/7",
  },
  de: {
    accueil_luna_astralis: "Luna Astralis Startseite",
    luna_astralis: "Luna Astralis",
    astro_psycho: "Astro • Psycho",
    navigation_principale: "Hauptnavigation",
    presentation_des_tarifs: "Preisübersicht",
    acces_24h_7: "24/7-ZUGANG",
    debloque_une_direction_claire_quand_tu_es_dans_le_flou:
      "Finde klare Orientierung, wenn alles unklar wirkt",
    paiement_securise_acces_immediat_annule_quand_tu_veux:
      "Sichere Zahlung • sofortiger Zugang • jederzeit kündbar",
    prix_en_dollars_us_usd: "Preise in US-Dollar (USD)",
    change_ou_annule_en_tout_temps: "Jederzeit ändern oder kündigen",
    reponse_claire_en_quelques_minutes: "Eine klare Antwort in wenigen Minuten",
    une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue:
      "Sanfte und direkte Orientierung, um zu verstehen, was wirklich geschieht.",
    paiement_securise_annulation_simple_aucun_frais_cache:
      "Sichere Zahlung • einfache Kündigung • keine versteckten Gebühren",
    mensuel_debloquer_la_reponse: "Monatlich — Antwort freischalten",
    debloquer_la_reponse: "Antwort freischalten",
    "4_99_nbsp": "4,99 $",
    quand_tu_veux_une_direction_claire_tout_de_suite:
      "Wenn du sofort klare Orientierung möchtest.",
    clarifier_ce_qui_se_passe_vraiment: "Klären, was wirklich passiert",
    voir_ta_part_l_autre_part_sans_te_juger:
      "Deinen Anteil und den der anderen Person ohne Urteil sehen",
    savoir_quoi_faire_maintenant: "Wissen, was du jetzt tun kannst",
    acces_24h_7_mobile: "24/7-Zugang auf dem Handy",
    mensuel_illimite_le_plus_populaire: "Unbegrenzt monatlich — Am beliebtesten",
    mensuel_aller_au_fond_des_choses: "Monatlich — Tiefer gehen",
    le_plus_populaire: "AM BELIEBTESTEN",
    aller_au_fond_des_choses: "Tiefer gehen",
    "9_99_nbsp": "9,99 $",
    pour_avancer_avec_un_vrai_fil_conducteur:
      "Für kontinuierliche Orientierung mit einem klaren roten Faden.",
    explorer_en_profondeur_patterns_emotions_repetitions:
      "Muster, Emotionen und Wiederholungen vertieft erkunden",
    historique_pour_suivre_ton_evolution: "Verlauf, um deine Entwicklung zu verfolgen",
    guidance_plus_complete_astro_psycho: "Umfassendere astro-psychologische Begleitung",
    acces_24h_7_sans_limites: "Unbegrenzter 24/7-Zugang",
    annuel_essentiel_pour_celles_qui_reviennent_souvent:
      "Essentiell jährlich — Für regelmäßige Nutzer",
    annuel_essentiel_pour_celles_qui_reviennent_souvent_2:
      "Essentiell jährlich",
    "59_99_nbsp": "59,99 $",
    "49_99_nbsp": "49,99 $",
    le_plus_economique_si_tu_utilises_luna_regulierement:
      "Die günstigste Option, wenn du Luna regelmäßig nutzt.",
    direction_claire_quand_tu_en_as_besoin: "Klare Orientierung, wenn du sie brauchst",
    un_rythme_simple_sans_pression: "Ein einfacher Rhythmus ohne Druck",
    acces_24h_7_toute_l_annee: "24/7-Zugang das ganze Jahr",
    meilleur_prix_sur_12_mois: "Besserer Preis über 12 Monate",
    annuel_illimite_accompagnement_complet:
      "Unbegrenzt jährlich — Komplette Begleitung",
    meilleure_valeur: "BESTER WERT",
    annuel_illimite_accompagnement_complet_2: "Unbegrenzt jährlich",
    "119_99_nbsp": "119,99 $",
    "99_99_nbsp": "99,99 $",
    si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur:
      "Wenn du einen stabilen Raum möchtest, um dich tiefer zu verstehen.",
    illimite_historique_complet: "Unbegrenzt + vollständiger Verlauf",
    acces_prioritaire: "Priorisierter Zugang",
    evolution_future_tarot_lune_ascendant:
      "Künftige Erweiterungen: Tarot, Mond, Aszendent",
    le_meilleur_prix_par_mois: "Bester Preis pro Monat",
    luna_astralis_2: "Luna Astralis",
    prix_en_usd_acces_24h_7: "Preise in USD • 24/7-Zugang",
  },
  it: {
    accueil_luna_astralis: "Home Luna Astralis",
    luna_astralis: "Luna Astralis",
    astro_psycho: "Astro • Psico",
    navigation_principale: "Navigazione principale",
    presentation_des_tarifs: "Presentazione dei prezzi",
    acces_24h_7: "ACCESSO 24/7",
    debloque_une_direction_claire_quand_tu_es_dans_le_flou:
      "Trova una direzione chiara quando tutto sembra confuso",
    paiement_securise_acces_immediat_annule_quand_tu_veux:
      "Pagamento sicuro • accesso immediato • annulla quando vuoi",
    prix_en_dollars_us_usd: "Prezzi in dollari USA (USD)",
    change_ou_annule_en_tout_temps: "Modifica o annulla quando vuoi",
    reponse_claire_en_quelques_minutes: "Una risposta chiara in pochi minuti",
    une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue:
      "Una guida dolce e diretta per capire cosa sta davvero succedendo.",
    paiement_securise_annulation_simple_aucun_frais_cache:
      "Pagamento sicuro • cancellazione semplice • nessun costo nascosto",
    mensuel_debloquer_la_reponse: "Mensile — Sblocca la risposta",
    debloquer_la_reponse: "Sblocca la risposta",
    "4_99_nbsp": "4,99 $",
    quand_tu_veux_une_direction_claire_tout_de_suite:
      "Quando vuoi una direzione chiara subito.",
    clarifier_ce_qui_se_passe_vraiment: "Chiarire cosa sta davvero succedendo",
    voir_ta_part_l_autre_part_sans_te_juger:
      "Vedere la tua parte e quella dell’altra persona senza giudicarti",
    savoir_quoi_faire_maintenant: "Sapere cosa fare adesso",
    acces_24h_7_mobile: "Accesso mobile 24/7",
    mensuel_illimite_le_plus_populaire: "Mensile illimitato — Più popolare",
    mensuel_aller_au_fond_des_choses: "Mensile — Andare più a fondo",
    le_plus_populaire: "PIÙ POPOLARE",
    aller_au_fond_des_choses: "Andare più a fondo",
    "9_99_nbsp": "9,99 $",
    pour_avancer_avec_un_vrai_fil_conducteur:
      "Per avanzare con una guida continua e coerente.",
    explorer_en_profondeur_patterns_emotions_repetitions:
      "Esplorare in profondità schemi, emozioni e ripetizioni",
    historique_pour_suivre_ton_evolution: "Cronologia per seguire la tua evoluzione",
    guidance_plus_complete_astro_psycho: "Guida astro-psicologica più completa",
    acces_24h_7_sans_limites: "Accesso illimitato 24/7",
    annuel_essentiel_pour_celles_qui_reviennent_souvent:
      "Annuale essenziale — Per chi torna spesso",
    annuel_essentiel_pour_celles_qui_reviennent_souvent_2:
      "Annuale essenziale",
    "59_99_nbsp": "59,99 $",
    "49_99_nbsp": "49,99 $",
    le_plus_economique_si_tu_utilises_luna_regulierement:
      "L’opzione più conveniente se usi Luna regolarmente.",
    direction_claire_quand_tu_en_as_besoin: "Una direzione chiara quando ne hai bisogno",
    un_rythme_simple_sans_pression: "Un ritmo semplice, senza pressione",
    acces_24h_7_toute_l_annee: "Accesso 24/7 tutto l’anno",
    meilleur_prix_sur_12_mois: "Miglior prezzo su 12 mesi",
    annuel_illimite_accompagnement_complet:
      "Annuale illimitato — Supporto completo",
    meilleure_valeur: "MIGLIOR VALORE",
    annuel_illimite_accompagnement_complet_2: "Annuale illimitato",
    "119_99_nbsp": "119,99 $",
    "99_99_nbsp": "99,99 $",
    si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur:
      "Se vuoi uno spazio stabile per comprenderti più a fondo.",
    illimite_historique_complet: "Illimitato + cronologia completa",
    acces_prioritaire: "Accesso prioritario",
    evolution_future_tarot_lune_ascendant:
      "Prossime funzioni: tarocchi, luna, ascendente",
    le_meilleur_prix_par_mois: "Il miglior prezzo al mese",
    luna_astralis_2: "Luna Astralis",
    prix_en_usd_acces_24h_7: "Prezzi in USD • Accesso 24/7",
  },
  pt: {
    accueil_luna_astralis: "Início Luna Astralis",
    luna_astralis: "Luna Astralis",
    astro_psycho: "Astro • Psico",
    navigation_principale: "Navegação principal",
    presentation_des_tarifs: "Apresentação dos preços",
    acces_24h_7: "ACESSO 24/7",
    debloque_une_direction_claire_quand_tu_es_dans_le_flou:
      "Encontre uma direção clara quando tudo parece confuso",
    paiement_securise_acces_immediat_annule_quand_tu_veux:
      "Pagamento seguro • acesso imediato • cancele quando quiser",
    prix_en_dollars_us_usd: "Preços em dólares americanos (USD)",
    change_ou_annule_en_tout_temps: "Altere ou cancele quando quiser",
    reponse_claire_en_quelques_minutes: "Uma resposta clara em poucos minutos",
    une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue:
      "Uma orientação gentil e direta para entender o que realmente está acontecendo.",
    paiement_securise_annulation_simple_aucun_frais_cache:
      "Pagamento seguro • cancelamento simples • sem taxas ocultas",
    mensuel_debloquer_la_reponse: "Mensal — Desbloquear a resposta",
    debloquer_la_reponse: "Desbloquear a resposta",
    "4_99_nbsp": "US$ 4,99",
    quand_tu_veux_une_direction_claire_tout_de_suite:
      "Quando você quer uma direção clara imediatamente.",
    clarifier_ce_qui_se_passe_vraiment: "Esclarecer o que realmente está acontecendo",
    voir_ta_part_l_autre_part_sans_te_juger:
      "Ver a sua parte e a da outra pessoa sem se julgar",
    savoir_quoi_faire_maintenant: "Saber o que fazer agora",
    acces_24h_7_mobile: "Acesso móvel 24/7",
    mensuel_illimite_le_plus_populaire: "Mensal ilimitado — Mais popular",
    mensuel_aller_au_fond_des_choses: "Mensal — Ir mais fundo",
    le_plus_populaire: "MAIS POPULAR",
    aller_au_fond_des_choses: "Ir mais fundo",
    "9_99_nbsp": "US$ 9,99",
    pour_avancer_avec_un_vrai_fil_conducteur:
      "Para avançar com uma orientação contínua e coerente.",
    explorer_en_profondeur_patterns_emotions_repetitions:
      "Explorar profundamente padrões, emoções e repetições",
    historique_pour_suivre_ton_evolution: "Histórico para acompanhar sua evolução",
    guidance_plus_complete_astro_psycho: "Orientação astro-psicológica mais completa",
    acces_24h_7_sans_limites: "Acesso ilimitado 24/7",
    annuel_essentiel_pour_celles_qui_reviennent_souvent:
      "Anual essencial — Para quem volta com frequência",
    annuel_essentiel_pour_celles_qui_reviennent_souvent_2:
      "Anual essencial",
    "59_99_nbsp": "US$ 59,99",
    "49_99_nbsp": "US$ 49,99",
    le_plus_economique_si_tu_utilises_luna_regulierement:
      "A opção mais econômica se você usa Luna regularmente.",
    direction_claire_quand_tu_en_as_besoin: "Direção clara quando você precisar",
    un_rythme_simple_sans_pression: "Um ritmo simples, sem pressão",
    acces_24h_7_toute_l_annee: "Acesso 24/7 o ano todo",
    meilleur_prix_sur_12_mois: "Melhor preço em 12 meses",
    annuel_illimite_accompagnement_complet:
      "Anual ilimitado — Acompanhamento completo",
    meilleure_valeur: "MELHOR VALOR",
    annuel_illimite_accompagnement_complet_2: "Anual ilimitado",
    "119_99_nbsp": "US$ 119,99",
    "99_99_nbsp": "US$ 99,99",
    si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur:
      "Se você quer um espaço estável para se compreender mais profundamente.",
    illimite_historique_complet: "Ilimitado + histórico completo",
    acces_prioritaire: "Acesso prioritário",
    evolution_future_tarot_lune_ascendant:
      "Próximos recursos: tarô, lua e ascendente",
    le_meilleur_prix_par_mois: "O melhor preço por mês",
    luna_astralis_2: "Luna Astralis",
    prix_en_usd_acces_24h_7: "Preços em USD • Acesso 24/7",
  },
};

export default function PricingClient({
  locale,
  dictionary,
}: PricingClientProps) {
  const currentLocale = normalizeLocale(locale);
  const ui = UI[currentLocale];

  // Priorité au JSON. Si la clé est absente ou vide, on utilise le texte de secours.
  const t = useCallback(
    (key: string) => {
      const fromDictionary = dictionary?.[key];
      if (typeof fromDictionary === "string" && fromDictionary.trim()) {
        // Les dictionnaires peuvent contenir l'entité HTML "&nbsp;".
        // React l'affiche littéralement dans une chaîne, donc on la convertit ici.
        return fromDictionary
          .replace(/&nbsp;/gi, "\u00A0")
          .replace(/&#160;/gi, "\u00A0");
      }

      return FALLBACK[currentLocale]?.[key] || FALLBACK.fr[key] || "";
    },
    [dictionary, currentLocale]
  );

  const router = useRouter();
  const sp = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [msg, setMsg] = useState<{ text: string; type: MsgType } | null>(null);
  const [busyPlan, setBusyPlan] = useState<string | null>(null);
  const autoStartedRef = useRef(false);

  const y = useMemo(() => new Date().getFullYear(), []);

  const nextRaw = sp.get("next");
  const nextUrl = useMemo(
    () => safeNext(nextRaw, currentLocale),
    [nextRaw, currentLocale]
  );
  const nextEnc = useMemo(() => encodeURIComponent(nextUrl), [nextUrl]);

  const showMsg = useCallback((text: string, type: MsgType = "info") => {
    setMsg({ text, type });
  }, []);

  useEffect(() => {
    const canceled = sp.get("canceled");
    const paid = sp.get("paid");

    if (canceled === "1") {
      showMsg(ui.canceled, "info");
    } else if (paid === "1") {
      showMsg(ui.paid, "ok");
    } else {
      setMsg(null);
    }
  }, [sp, showMsg, ui.canceled, ui.paid]);

  const startCheckout = useCallback(
    async (plan: string) => {
      try {
        setBusyPlan(plan);
        showMsg(ui.checking, "info");

        const { data } = await supabase.auth.getSession();
        const authed = !!data?.session?.user?.id;

        const back = `/${currentLocale}/pricing?plan=${encodeURIComponent(
          plan
        )}&next=${encodeURIComponent(nextUrl)}`;

        if (!authed) {
          const afterLogin = `/${currentLocale}/onboarding/sign?next=${encodeURIComponent(
            back
          )}`;

          router.push(
            `/${currentLocale}/login?next=${encodeURIComponent(afterLogin)}`
          );
          setBusyPlan(null);
          return;
        }

        const sign = getStoredSign();

        if (!sign) {
          router.push(
            `/${currentLocale}/onboarding/sign?next=${encodeURIComponent(back)}`
          );
          setBusyPlan(null);
          return;
        }

        showMsg(ui.openingStripe, "info");

        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plan,
            next: nextUrl,
          }),
        });

        const out = (await res.json().catch(() => ({}))) as {
          url?: string;
          error?: string;
        };

        if (!res.ok) {
          throw new Error(out?.error || ui.checkoutError);
        }

        if (!out?.url) {
          throw new Error(ui.missingStripeUrl);
        }

        try {
          router.replace(`/${currentLocale}/pricing?next=${nextEnc}`);
        } catch {}

        window.location.href = out.url;
      } catch (err: unknown) {
        setBusyPlan(null);

        const message =
          err instanceof Error ? err.message : String(err);

        showMsg(ui.errorPrefix + message, "err");
      }
    },
    [
      currentLocale,
      nextEnc,
      nextUrl,
      router,
      showMsg,
      supabase,
      ui.checking,
      ui.checkoutError,
      ui.errorPrefix,
      ui.missingStripeUrl,
      ui.openingStripe,
    ]
  );

  useEffect(() => {
    const plan = sp.get("plan");

    if (!plan) return;
    if (autoStartedRef.current) return;

    let alive = true;

    (async () => {
      try {
        const { data } = await supabase.auth.getSession();

        if (!alive) return;

        const authed = !!data?.session?.user?.id;
        if (!authed) return;

        const sign = getStoredSign();
        if (!sign) return;

        autoStartedRef.current = true;
        await startCheckout(plan);
      } catch {}
    })();

    return () => {
      alive = false;
    };
  }, [sp, supabase, startCheckout]);

  const msgClass =
    msg?.type === "ok"
      ? "is-ok"
      : msg?.type === "err"
        ? "is-err"
        : msg?.type === "info"
          ? "is-info"
          : "";

  return (
    <div className="pricing-body pricing-page">
      <header className="top" role="banner">
        <Link
          className="brand"
          href={`/${currentLocale}`}
          aria-label={t("accueil_luna_astralis")}
        >
          <div className="logo" aria-hidden="true">
            <img src="/logo-luna-astralis-transparent.png" alt="" />
          </div>

          <div className="brand-text">
            <div className="brand-name">{t("luna_astralis")}</div>
            <div className="brand-sub">{t("astro_psycho")}</div>
          </div>
        </Link>

        <nav className="nav" aria-label={t("navigation_principale")}>
          <Link href={`/${currentLocale}`}>{ui.home}</Link>

          <Link
            className="active"
            href={`/${currentLocale}/pricing?next=${nextEnc}`}
          >
            {ui.pricing}
          </Link>

          <Link
            className="btn btn-small btn-ghost"
            href={nextUrl || `/${currentLocale}/chat`}
          >
            {ui.back}
          </Link>
        </nav>
      </header>

      <main className="wrap" role="main">
        <section
          className="pricing-hero"
          aria-label={t("presentation_des_tarifs")}
        >
          <div className="pricing-hero-inner">
            <div className="pricing-kicker">{t("acces_24h_7")}</div>
            <div className="pricing-kicker pricing-kicker-alt">{ui.title}</div>

            <h1 className="pricing-title">
              {t("debloque_une_direction_claire_quand_tu_es_dans_le_flou")}
            </h1>

            <p className="pricing-subtitle">
              {t("paiement_securise_acces_immediat_annule_quand_tu_veux")}
            </p>

            <div className="pricing-chips" aria-label={ui.info}>
              <span className="chip">{t("prix_en_dollars_us_usd")}</span>
              <span className="chip">{t("change_ou_annule_en_tout_temps")}</span>
              <span className="chip">
                {t("reponse_claire_en_quelques_minutes")}
              </span>
            </div>

            {msg ? (
              <div
                role="status"
                aria-live="polite"
                className={`pricing-msg ${msgClass}`}
              >
                {msg.text}
              </div>
            ) : null}
          </div>
        </section>

        <section className="section" aria-label={ui.trust}>
          <div className="pricing-trust">
            <div className="trust-line">
              {t(
                "une_guidance_douce_et_directe_pour_comprendre_ce_qui_se_joue"
              )}
            </div>

            <div className="trust-sub">
              {t("paiement_securise_annulation_simple_aucun_frais_cache")}
            </div>
          </div>
        </section>

        <section className="section" aria-label={ui.plans}>
          <div className="pricing-grid">
            <article
              className="price-card"
              aria-label={t("mensuel_debloquer_la_reponse")}
            >
              <div className="price-head">
                <div className="price-name">{t("debloquer_la_reponse")}</div>

                <div className="price-value">
                  <span className="price-now">{t("4_99_nbsp")}</span>
                  <span className="price-period">{ui.month}</span>
                </div>

                <div className="price-mini">
                  {t("quand_tu_veux_une_direction_claire_tout_de_suite")}
                </div>
              </div>

              <ul className="price-features">
                <li>{t("clarifier_ce_qui_se_passe_vraiment")}</li>
                <li>{t("voir_ta_part_l_autre_part_sans_te_juger")}</li>
                <li>{t("savoir_quoi_faire_maintenant")}</li>
                <li>{t("acces_24h_7_mobile")}</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "monthly_essential"}
                type="button"
                onClick={() => startCheckout("monthly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "monthly_essential" ? ui.redirect : ui.unlock}
              </button>
            </article>

            <div
              className="price-halo"
              role="group"
              aria-label={t("mensuel_illimite_le_plus_populaire")}
            >
              <article
                className="price-card price-featured"
                aria-label={t("mensuel_aller_au_fond_des_choses")}
              >
                <div className="price-badge">{t("le_plus_populaire")}</div>

                <div className="price-head">
                  <div className="price-name">
                    {t("aller_au_fond_des_choses")}
                  </div>

                  <div className="price-value">
                    <span className="price-now">{t("9_99_nbsp")}</span>
                    <span className="price-period">{ui.month}</span>
                  </div>

                  <div className="price-mini">
                    {t("pour_avancer_avec_un_vrai_fil_conducteur")}
                  </div>
                </div>

                <ul className="price-features">
                  <li>
                    {t("explorer_en_profondeur_patterns_emotions_repetitions")}
                  </li>
                  <li>{t("historique_pour_suivre_ton_evolution")}</li>
                  <li>{t("guidance_plus_complete_astro_psycho")}</li>
                  <li>{t("acces_24h_7_sans_limites")}</li>
                </ul>

                <button
                  className="price-cta btn-primary"
                  aria-busy={busyPlan === "monthly_unlimited"}
                  type="button"
                  onClick={() => startCheckout("monthly_unlimited")}
                  disabled={!!busyPlan}
                >
                  {busyPlan === "monthly_unlimited"
                    ? ui.redirect
                    : ui.unlimited}
                </button>
              </article>
            </div>

            <article
              className="price-card"
              aria-label={t(
                "annuel_essentiel_pour_celles_qui_reviennent_souvent"
              )}
            >
              <div className="price-head">
                <div className="price-name">
                  {t("annuel_essentiel_pour_celles_qui_reviennent_souvent_2")}
                </div>

                <div className="price-value">
                  <span className="price-was">
                    <s>{t("59_99_nbsp")}</s>
                  </span>
                  <span className="price-now">{t("49_99_nbsp")}</span>
                  <span className="price-period">{ui.year}</span>
                </div>

                <div className="price-mini">
                  {t("le_plus_economique_si_tu_utilises_luna_regulierement")}
                </div>
              </div>

              <ul className="price-features">
                <li>{t("direction_claire_quand_tu_en_as_besoin")}</li>
                <li>{t("un_rythme_simple_sans_pression")}</li>
                <li>{t("acces_24h_7_toute_l_annee")}</li>
                <li>{t("meilleur_prix_sur_12_mois")}</li>
              </ul>

              <button
                className="price-cta"
                aria-busy={busyPlan === "yearly_essential"}
                type="button"
                onClick={() => startCheckout("yearly_essential")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_essential"
                  ? ui.redirect
                  : ui.chooseYearly}
              </button>
            </article>

            <article
              className="price-card premium"
              aria-label={t("annuel_illimite_accompagnement_complet")}
            >
              <div className="price-badge premium">
                {t("meilleure_valeur")}
              </div>

              <div className="price-head">
                <div className="price-name">
                  {t("annuel_illimite_accompagnement_complet_2")}
                </div>

                <div className="price-value">
                  <span className="price-was">
                    <s>{t("119_99_nbsp")}</s>
                  </span>
                  <span className="price-now">{t("99_99_nbsp")}</span>
                  <span className="price-period">{ui.year}</span>
                </div>

                <div className="price-mini">
                  {t(
                    "si_tu_veux_un_espace_stable_pour_te_comprendre_en_profondeur"
                  )}
                </div>
              </div>

              <ul className="price-features">
                <li>{t("illimite_historique_complet")}</li>
                <li>{t("acces_prioritaire")}</li>
                <li>{t("evolution_future_tarot_lune_ascendant")}</li>
                <li>{t("le_meilleur_prix_par_mois")}</li>
              </ul>

              <button
                className="price-cta btn-primary"
                aria-busy={busyPlan === "yearly_unlimited"}
                type="button"
                onClick={() => startCheckout("yearly_unlimited")}
                disabled={!!busyPlan}
              >
                {busyPlan === "yearly_unlimited"
                  ? ui.redirect
                  : ui.yearlyUnlimited}
              </button>
            </article>
          </div>
        </section>

        <footer className="footer" role="contentinfo">
          <div>
            © {y} {t("luna_astralis_2")}
          </div>
          <div className="footer-note">{t("prix_en_usd_acces_24h_7")}</div>
        </footer>
      </main>

      <style jsx>{`
        .pricing-msg {
          margin: 14px 0 0;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.35;
        }

        .pricing-msg.is-ok {
          background: rgba(120, 255, 190, 0.1);
          border-color: rgba(120, 255, 190, 0.22);
        }

        .pricing-msg.is-err {
          background: rgba(255, 90, 90, 0.1);
          border-color: rgba(255, 90, 90, 0.22);
        }

        .pricing-msg.is-info {
          background: rgba(159, 211, 255, 0.1);
          border-color: rgba(159, 211, 255, 0.22);
        }

        .price-cta[aria-busy="true"] {
          opacity: 0.75;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
