import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Partial<
  Record<
    PaidPdfLocale,
    TranslationMap
  >
> = {
  en: {
    "Analyse approfondie de votre année":
      "In-depth analysis of your year",

    "Recherche d’équilibre":
      "Search for balance",

    "sur 100":
      "out of 100",

    "Niveau d’équilibre cette année":
      "Balance level this year",

    "Les deux forces à harmoniser":
      "The two forces to harmonize",

    "Première dynamique":
      "First dynamic",

    "Seconde dynamique":
      "Second dynamic",

    "Analyse à compléter":
      "Analysis to be completed",

    "Le contenu principal de cette dynamique sera ajouté dans les données de la page.":
      "The main content of this dynamic will be added to the page data.",

    "Opportunité":
      "Opportunity",

    "Point de vigilance":
      "Point of vigilance",

    "Point d’équilibre":
      "Balance point",

    /* SCORE LABELS */

    "Disponibilité de vos ressources":
      "Resource availability",

    "Availability de vos ressources":
      "Resource availability",

    "Niveau de confiance":
      "Confidence level",

    "Équilibre relationnel":
      "Relationship balance",

    "Influence de votre entourage":
      "Influence of your social circle",

    "Potentiel professionnel":
      "Professional potential",
  },

  es: {
    "Analyse approfondie de votre année":
      "Análisis profundo de tu año",

    "Recherche d’équilibre":
      "Búsqueda de equilibrio",

    "sur 100":
      "sobre 100",

    "Niveau d’équilibre cette année":
      "Nivel de equilibrio este año",

    "Les deux forces à harmoniser":
      "Las dos fuerzas que debes armonizar",

    "Première dynamique":
      "Primera dinámica",

    "Seconde dynamique":
      "Segunda dinámica",

    "Analyse à compléter":
      "Análisis por completar",

    "Le contenu principal de cette dynamique sera ajouté dans les données de la page.":
      "El contenido principal de esta dinámica se añadirá a los datos de la página.",

    "Opportunité":
      "Oportunidad",

    "Point de vigilance":
      "Punto de atención",

    "Point d’équilibre":
      "Punto de equilibrio",

    /* SCORE LABELS */

    "Disponibilité de vos ressources":
      "Disponibilidad de tus recursos",

    "Disponibilidad de vos ressources":
      "Disponibilidad de tus recursos",

    "Niveau de confiance":
      "Nivel de confianza",

    "Équilibre relationnel":
      "Equilibrio relacional",

    "Influence de votre entourage":
      "Influencia de tu entorno",

    "Potentiel professionnel":
      "Potencial profesional",
  },

  de: {
    "Analyse approfondie de votre année":
      "Tiefgehende Analyse Ihres Jahres",

    "Recherche d’équilibre":
      "Suche nach Gleichgewicht",

    "sur 100":
      "von 100",

    "Niveau d’équilibre cette année":
      "Gleichgewichtsniveau in diesem Jahr",

    "Les deux forces à harmoniser":
      "Die zwei Kräfte, die Sie in Einklang bringen sollten",

    "Première dynamique":
      "Erste Dynamik",

    "Seconde dynamique":
      "Zweite Dynamik",

    "Analyse à compléter":
      "Analyse noch zu vervollständigen",

    "Le contenu principal de cette dynamique sera ajouté dans les données de la page.":
      "Der Hauptinhalt dieser Dynamik wird in den Seitendaten ergänzt.",

    "Opportunité":
      "Chance",

    "Point de vigilance":
      "Aufmerksamkeitspunkt",

    "Point d’équilibre":
      "Gleichgewichtspunkt",

    /* SCORE LABELS */

    "Disponibilité de vos ressources":
      "Verfügbarkeit Ihrer Ressourcen",

    "Verfügbarkeit de vos ressources":
      "Verfügbarkeit Ihrer Ressourcen",

    "Niveau de confiance":
      "Vertrauensniveau",

    "Équilibre relationnel":
      "Beziehungsgleichgewicht",

    "Influence de votre entourage":
      "Einfluss Ihres Umfelds",

    "Potentiel professionnel":
      "Berufliches Potenzial",
  },

  it: {
    "Analyse approfondie de votre année":
      "Analisi approfondita del tuo anno",

    "Recherche d’équilibre":
      "Ricerca dell’equilibrio",

    "sur 100":
      "su 100",

    "Niveau d’équilibre cette année":
      "Livello di equilibrio quest’anno",

    "Les deux forces à harmoniser":
      "Le due forze da armonizzare",

    "Première dynamique":
      "Prima dinamica",

    "Seconde dynamique":
      "Seconda dinamica",

    "Analyse à compléter":
      "Analisi da completare",

    "Le contenu principal de cette dynamique sera ajouté dans les données de la page.":
      "Il contenuto principale di questa dinamica sarà aggiunto ai dati della pagina.",

    "Opportunité":
      "Opportunità",

    "Point de vigilance":
      "Punto di attenzione",

    "Point d’équilibre":
      "Punto di equilibrio",

    /* SCORE LABELS */

    "Disponibilité de vos ressources":
      "Disponibilità delle tue risorse",

    "Disponibilità de vos ressources":
      "Disponibilità delle tue risorse",

    "Niveau de confiance":
      "Livello di fiducia",

    "Équilibre relationnel":
      "Equilibrio relazionale",

    "Influence de votre entourage":
      "Influenza del tuo ambiente sociale",

    "Potentiel professionnel":
      "Potenziale professionale",
  },

  pt: {
    "Analyse approfondie de votre année":
      "Análise aprofundada do seu ano",

    "Recherche d’équilibre":
      "Busca de equilíbrio",

    "sur 100":
      "de 100",

    "Niveau d’équilibre cette année":
      "Nível de equilíbrio neste ano",

    "Les deux forces à harmoniser":
      "As duas forças a harmonizar",

    "Première dynamique":
      "Primeira dinâmica",

    "Seconde dynamique":
      "Segunda dinâmica",

    "Analyse à compléter":
      "Análise a completar",

    "Le contenu principal de cette dynamique sera ajouté dans les données de la page.":
      "O conteúdo principal desta dinâmica será adicionado aos dados da página.",

    "Opportunité":
      "Oportunidade",

    "Point de vigilance":
      "Ponto de atenção",

    "Point d’équilibre":
      "Ponto de equilíbrio",

    /* SCORE LABELS */

    "Disponibilité de vos ressources":
      "Disponibilidade dos seus recursos",

    "Disponibilidade de vos ressources":
      "Disponibilidade dos seus recursos",

    "Niveau de confiance":
      "Nível de confiança",

    "Équilibre relationnel":
      "Equilíbrio nos relacionamentos",

    "Influence de votre entourage":
      "Influência do seu círculo social",

    "Potentiel professionnel":
      "Potencial profissional",
  },
};

/* =========================================================
   REPLACE EXACT TEXT
========================================================= */

function replaceExactText(
  source: string,
  translations: TranslationMap,
): string {
  let result = source;

  const entries =
    Object.entries(translations).sort(
      ([first], [second]) =>
        second.length - first.length,
    );

  for (
    const [from, translated]
    of entries
  ) {
    result =
      result
        .split(from)
        .join(translated);
  }

  return result;
}

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearPremiumBalancePage(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const translations =
    TRANSLATIONS[locale];

  if (!translations) {
    return source;
  }

  return replaceExactText(
    source,
    translations,
  );
}
