import PremiumPdfDocument from "../PremiumPdf/PremiumPdfDocument";

import type {
  PremiumPdfProps,
} from "../PremiumPdf/PremiumPdfTypes";

export default function SignaturePdfDocument(
  props: PremiumPdfProps
) {
  return <PremiumPdfDocument {...props} />;
}
