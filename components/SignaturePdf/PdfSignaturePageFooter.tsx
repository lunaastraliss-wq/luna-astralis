import { Text } from "@react-pdf/renderer";

import { pdfStyles } from "./SignaturePdfStyles";

export default function PdfSignaturePageFooter() {
  return (
    <Text
      style={pdfStyles.footer}
      fixed
      render={({
        pageNumber,
        totalPages,
      }) =>
        `Luna Astralis • Rapport Signature • ${pageNumber} / ${totalPages}`
      }
    />
  );
}
