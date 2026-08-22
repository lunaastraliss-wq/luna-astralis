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
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    "Analyse approfondie de votre année":
      "In-depth analysis of your year",

    "vos plus grandes forces":
      "your greatest strengths",

    "Vos plus grandes forces":
      "Your greatest strengths",

    "Votre force dominante":
      "Your dominant strength",

    "sur 100":
      "out of 100",

    "Potentiel d’expression cette année":
      "Potential for expression this year",

    "Les forces qui vous accompagneront":
      "The strengths that will support you",

    "Comment l’utiliser":
      "How to use it",

    "Votre meilleure ouverture":
      "Your best opportunity",

    "Votre point de vigilance":
      "Your point of vigilance",

    "Votre combinaison gagnante":
      "Your winning combination",
  },

  /* =======================================================
     ESPAÑOL
  ======================================================= */

  es: {
    "Analyse approfondie de votre année":
      "Análisis profundo de tu año",

    "vos plus grandes forces":
      "tus mayores fortalezas",

    "Vos plus grandes forces":
      "Tus mayores fortalezas",

    "Votre force dominante":
      "Tu fortaleza dominante",

    "sur 100":
      "sobre 100",

    "Potentiel d’expression cette année":
      "Potencial de expresión este año",

    "Les forces qui vous accompagneront":
      "Las fortalezas que te acompañarán",

    "Comment l’utiliser":
      "Cómo utilizarla",

    "Votre meilleure ouverture":
      "Tu mejor oportunidad",

    "Votre point de vigilance":
      "Tu punto de atención",

    "Votre combinaison gagnante":
      "Tu combinación ganadora",
  },

  /* =======================================================
     DEUTSCH
  ======================================================= */

  de: {
    "Analyse approfondie de votre année":
      "Tiefgehende Analyse Ihres Jahres",

    "vos plus grandes forces":
      "Ihre größten Stärken",

    "Vos plus grandes forces":
      "Ihre größten Stärken",

    "Votre force dominante":
      "Ihre dominierende Stärke",

    "sur 100":
      "von 100",

    "Potentiel d’expression cette année":
      "Entfaltungspotenzial in diesem Jahr",

    "Les forces qui vous accompagneront":
      "Die Stärken, die Sie begleiten werden",

    "Comment l’utiliser":
      "Wie Sie sie nutzen können",

    "Votre meilleure ouverture":
      "Ihre beste Chance",

    "Votre point de vigilance":
      "Ihr Aufmerksamkeitspunkt",

    "Votre combinaison gagnante":
      "Ihre Erfolgskombination",
  },

  /* =======================================================
     ITALIANO
  ======================================================= */

  it: {
    "Analyse approfondie de votre année":
      "Analisi approfondita del tuo anno",

    "vos plus grandes forces":
      "i tuoi maggiori punti di forza",

    "Vos plus grandes forces":
      "I tuoi maggiori punti di forza",

    "Votre force dominante":
      "Il tuo punto di forza dominante",

    "sur 100":
      "su 100",

    "Potentiel d’expression cette année":
      "Potenziale di espressione quest'anno",

    "Les forces qui vous accompagneront":
      "I punti di forza che ti accompagneranno",

    "Comment l’utiliser":
      "Come utilizzarlo",

    "Votre meilleure ouverture":
      "La tua migliore opportunità",

    "Votre point de vigilance":
      "Il tuo punto di attenzione",

    "Votre combinaison gagnante":
      "La tua combinazione vincente",
  },

  /* =======================================================
     PORTUGUÊS — BRASIL
  ======================================================= */

  pt: {
    "Analyse approfondie de votre année":
      "Análise aprofundada do seu ano",

    "vos plus grandes forces":
      "seus maiores pontos fortes",

    "Vos plus grandes forces":
      "Seus maiores pontos fortes",

    "Votre force dominante":
      "Seu ponto forte dominante",

    "sur 100":
      "de 100",

    "Potentiel d’expression cette année":
      "Potencial de expressão neste ano",

    "Les forces qui vous accompagneront":
      "Os pontos fortes que acompanharão você",

    "Comment l’utiliser":
      "Como utilizá-lo",

    "Votre meilleure ouverture":
      "Sua melhor oportunidade",

    "Votre point de vigilance":
      "Seu ponto de atenção",

    "Votre combinaison gagnante":
      "Sua combinação vencedora",
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

  /*
   * Important :
   * on remplace les expressions les plus longues en premier
   * afin d'éviter qu'une petite expression ne modifie une
   * expression plus longue avant son traitement.
   */

  const entries =
    Object.entries(
      translations,
    ).sort(
      ([first], [second]) =>
        second.length -
        first.length,
    );

  for (
    const [
      french,
      translated,
    ] of entries
  ) {
    result =
      result
        .split(french)
        .join(translated);
  }

  return result;
}

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeStrengthsPage(
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
