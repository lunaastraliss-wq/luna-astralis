import {
  Image,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";
import type { EssentialPdfProps } from "./EssentialPdfTypes";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

export default function PdfWheel({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  wheelImage,
}: EssentialPdfProps) {
  const safeWheelImage =
    typeof wheelImage === "string" &&
    wheelImage.trim().length > 0
      ? wheelImage.trim()
      : "";

  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfBrandHeader />

      <Text style={pdfStyles.sectionTitle}>
        Votre roue astrologique
      </Text>

      <Text style={pdfStyles.sectionIntro}>
        Cette roue représente la position des planètes, des signes et
        des principaux angles au moment précis de votre naissance.
      </Text>

      <View style={pdfStyles.wheelContainer}>
        {safeWheelImage ? (
          <Image
            src={safeWheelImage}
            style={pdfStyles.wheelImage}
          />
        ) : (
          <View style={pdfStyles.wheelMissing}>
            <Text style={pdfStyles.wheelMissingTitle}>
              Roue astrologique
            </Text>

            <Text style={pdfStyles.wheelMissingText}>
              L’image de la roue n’a pas été transmise au document PDF.
              Les données astrologiques du rapport demeurent disponibles
              dans les pages suivantes.
            </Text>
          </View>
        )}
      </View>

      <View style={pdfStyles.box}>
        <Text style={pdfStyles.informationLine}>
          Préparé pour : {firstName || "Votre nom"}
        </Text>

        <Text style={pdfStyles.informationLine}>
          Date : {birthDate || "—"}
        </Text>

        <Text style={pdfStyles.informationLine}>
          Heure : {birthTime || "—"}
        </Text>

        <Text style={pdfStyles.informationLine}>
          Lieu : {birthCity || "—"}
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
