import { Text } from "@react-pdf/renderer";

import { pdfStyles } from "./PremiumPdfStyles";

export default function PdfPageFooter() {
  return (
    <Text
      style={pdfStyles.footer}
      fixed
      render={({
        pageNumber,
        totalPages,
      }) =>
        `Luna Astralis • Rapport Premium • ${pageNumber} / ${totalPages}`
      }
    />
  );
}
