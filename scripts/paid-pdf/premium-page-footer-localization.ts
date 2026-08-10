import type {
  PaidPdfLocale,
} from "./premium-localization";

const PREMIUM_PAGE_FOOTER_LABELS: Record<
  PaidPdfLocale,
  string
> = {
  fr: "Rapport Premium",
  en: "Premium Report",
  es: "Informe Premium",
  de: "Premium-Bericht",
  it: "Rapporto Premium",
  pt: "Relatório Premium",
};

export function localizePremiumPageFooter(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  return source.replace(
    "Rapport Premium",
    PREMIUM_PAGE_FOOTER_LABELS[locale],
  );
}
