import { Text } from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";

export default function PdfPageFooter() {
  return (
    <Text
      style={pdfStyles.footer}
      fixed
      render={({ pageNumber, totalPages }) =>
        `Luna Astralis  •  ${pageNumber} / ${totalPages}`
      }
    />
  );
}
