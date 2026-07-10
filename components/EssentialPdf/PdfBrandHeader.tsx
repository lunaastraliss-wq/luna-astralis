import {
  Image,
  View,
} from "@react-pdf/renderer";

import { LOGO_URL } from "./EssentialPdfAssets";
import { pdfStyles } from "./EssentialPdfStyles";

export default function PdfBrandHeader() {
  return (
    <View style={pdfStyles.pageHeader} fixed>
      <Image
        src={LOGO_URL}
        style={pdfStyles.pageLogo}
      />

      <View style={pdfStyles.pageHeaderLine} />
    </View>
  );
}
