import {
  Image,
  View,
} from "@react-pdf/renderer";

import { LOGO_URL } from "./PremiumPdfAssets";
import { pdfStyles } from "./PremiumPdfStyles";

export default function PdfBrandHeader() {
  return (
    <View
      style={pdfStyles.pageHeader}
      fixed
    >
      <Image
        src={LOGO_URL}
        style={pdfStyles.pageLogo}
      />

      <View
        style={pdfStyles.pageHeaderLine}
      />
    </View>
  );
}
