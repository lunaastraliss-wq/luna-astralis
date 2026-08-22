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

    "Vos talents cachés":
      "Your hidden talents",

    "vos talents cachés":
      "your hidden talents",

    "Votre talent le plus puissant":
      "Your most powerful talent",

    "sur 100":
      "out of 100",

    "Comment le révéler":
      "How to reveal it",

    "Potentiel de révélation cette année":
      "Potential for revelation this year",

    "Les capacités à révéler":
      "Abilities to reveal",

    "Activation":
      "Activation",

    "Contexte favorable":
      "Favorable context",

    "Frein intérieur":
      "Inner obstacle",

    "Comment révéler votre potentiel":
      "How to reveal your potential",
  },

  /* =======================================================
     ESPAÑOL
  ======================================================= */

  es: {
    "Analyse approfondie de votre année":
      "Análisis profundo de tu año",

    "Vos talents cachés":
      "Tus talentos ocultos",

    "vos talents cachés":
      "tus talentos ocultos",

    "Votre talent le plus puissant":
      "Tu talento más poderoso",

    "sur 100":
      "sobre 100",

    "Comment le révéler":
      "Cómo revelarlo",

    "Potentiel de révélation cette année":
      "Potencial de revelación este año",

    "Les capacités à révéler":
      "Las capacidades por revelar",

    "Activation":
      "Activación",

    "Contexte favorable":
      "Contexto favorable",

    "Frein intérieur":
      "Obstáculo interior",

    "Comment révéler votre potentiel":
      "Cómo revelar tu potencial",
  },

  /* =======================================================
     DEUTSCH
  ======================================================= */

  de: {
    "Analyse approfondie de votre année":
      "Tiefgehende Analyse Ihres Jahres",

    "Vos talents cachés":
      "Ihre verborgenen Talente",

    "vos talents cachés":
      "Ihre verborgenen Talente",

    "Votre talent le plus puissant":
      "Ihr stärkstes Talent",

    "sur 100":
      "von 100",

    "Comment le révéler":
      "Wie Sie es entfalten können",

    "Potentiel de révélation cette année":
      "Entfaltungspotenzial in diesem Jahr",

    "Les capacités à révéler":
      "Fähigkeiten, die Sie entfalten können",

    "Activation":
      "Aktivierung",

    "Contexte favorable":
      "Günstiger Kontext",

    "Frein intérieur":
      "Innere Blockade",

    "Comment révéler votre potentiel":
      "Wie Sie Ihr Potenzial entfalten können",
  },

  /* =======================================================
     ITALIANO
  ======================================================= */

  it: {
    "Analyse approfondie de votre année":
      "Analisi approfondita del tuo anno",

    "Vos talents cachés":
      "I tuoi talenti nascosti",

    "vos talents cachés":
      "i tuoi talenti nascosti",

    "Votre talent le plus puissant":
      "Il tuo talento più potente",

    "sur 100":
      "su 100",

    "Comment le révéler":
      "Come rivelarlo",

    "Potentiel de révélation cette année":
      "Potenziale di rivelazione quest'anno",

    "Les capacités à révéler":
      "Le capacità da rivelare",

    "Activation":
      "Attivazione",

    "Contexte favorable":
      "Contesto favorevole",

    "Frein intérieur":
      "Blocco interiore",

    "Comment révéler votre potentiel":
      "Come rivelare il tuo potenziale",
  },

  /* =======================================================
     PORTUGUÊS — BRASIL
  ======================================================= */

  pt: {
    "Analyse approfondie de votre année":
      "Análise aprofundada do seu ano",

    "Vos talents cachés":
      "Seus talentos ocultos",

    "vos talents cachés":
      "seus talentos ocultos",

    "Votre talent le plus puissant":
      "Seu talento mais poderoso",

    "sur 100":
      "de 100",

    "Comment le révéler":
      "Como revelá-lo",

    "Potentiel de révélation cette année":
      "Potencial de revelação neste ano",

    "Les capacités à révéler":
      "As capacidades a revelar",

    "Activation":
      "Ativação",

    "Contexte favorable":
      "Contexto favorável",

    "Frein intérieur":
      "Bloqueio interior",

    "Comment révéler votre potentiel":
      "Como revelar seu potencial",
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

  for (
    const [french, translated]
    of Object.entries(translations)
  ) {
    result =
      result.split(french).join(
        translated,
      );
  }

  return result;
}

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearHoroscopeHiddenTalentsPage(
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
