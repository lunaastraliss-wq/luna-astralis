import type {
  PaidPdfLocale,
} from "./premium-localization";

type TranslationMap = Record<string, string>;

const BEST_PERIODS_BUILDER_TRANSLATIONS: Record<
  Exclude<PaidPdfLocale, "fr">,
  TranslationMap
> = {
  en: {
    "Aucun mois n’est disponible pour déterminer les meilleures périodes.":
      "No month is available to determine the best periods.",
    "Les meilleurs moments de votre année ":
      "The best moments of your year ",
  },
  es: {
    "Aucun mois n’est disponible pour déterminer les meilleures périodes.":
      "No hay ningún mes disponible para determinar los mejores períodos.",
    "Les meilleurs moments de votre année ":
      "Los mejores momentos de tu año ",
  },
  de: {
    "Aucun mois n’est disponible pour déterminer les meilleures périodes.":
      "Es ist kein Monat verfügbar, um die besten Zeiträume zu bestimmen.",
    "Les meilleurs moments de votre année ":
      "Die besten Momente Ihres Jahres ",
  },
  it: {
    "Aucun mois n’est disponible pour déterminer les meilleures périodes.":
      "Non è disponibile alcun mese per determinare i periodi migliori.",
    "Les meilleurs moments de votre année ":
      "I momenti migliori del vostro anno ",
  },
  pt: {
    "Aucun mois n’est disponible pour déterminer les meilleures périodes.":
      "Nenhum mês está disponível para determinar os melhores períodos.",
    "Les meilleurs moments de votre année ":
      "Os melhores momentos do seu ano ",
  },
};

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  for (const [from, to] of Object.entries(translations)) {
    output = output.split(from).join(to);
  }

  return output;
}

export function localizeYearHoroscopeBestPeriods(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  return applyTranslations(
    source,
    BEST_PERIODS_BUILDER_TRANSLATIONS[locale],
  );
}
