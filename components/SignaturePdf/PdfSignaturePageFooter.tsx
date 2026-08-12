import { Text } from "@react-pdf/renderer";

import { pdfStyles } from "./SignaturePdfStyles";

import type {
  SignatureLocale,
} from "./SignaturePdfTypes";

const REPORT_LABELS: Record<
  SignatureLocale,
  string
> = {
  fr: "Rapport Signature",
  en: "Signature Report",
  es: "Informe Signature",
  de: "Signature-Bericht",
  it: "Rapporto Signature",
  pt: "Relatório Signature",
};

type PdfSignaturePageFooterProps = {
  locale?: SignatureLocale;
};

export default function PdfSignaturePageFooter({
  locale = "fr",
}: PdfSignaturePageFooterProps = {}) {
  const reportLabel =
    REPORT_LABELS[locale] ||
    REPORT_LABELS.fr;

  return (
    <Text
      style={pdfStyles.footer}
      fixed
      render={({
        pageNumber,
        totalPages,
      }) =>
        `Luna Astralis • ${reportLabel} • ${pageNumber} / ${totalPages}`
      }
    />
  );
}
