import {
  Image,
  View,
} from "@react-pdf/renderer";

import { LOGO_URL } from "./SignaturePdfAssets";
import { pdfStyles } from "./SignaturePdfStyles";

export default function PdfSignatureBrandHeader() {
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
