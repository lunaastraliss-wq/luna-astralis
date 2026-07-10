import {
  Image,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import { LOGO_URL } from "./EssentialPdfAssets";
import { pdfStyles } from "./EssentialPdfStyles";
import type { EssentialPdfProps } from "./EssentialPdfTypes";
import PdfPageFooter from "./PdfPageFooter";

export default function PdfCover({
  firstName,
  birthDate,
  birthTime,
  birthCity,
}: EssentialPdfProps) {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <Image
        src={LOGO_URL}
        style={pdfStyles.coverLogo}
      />

      <Text style={pdfStyles.title}>
        Carte du ciel essentielle
      </Text>

      <Text style={pdfStyles.subtitle}>
        Rapport astrologique personnalisé
      </Text>

      <View style={pdfStyles.box}>
        <Text style={pdfStyles.informationLine}>
          Préparé pour : {firstName || "Votre nom"}
        </Text>

        <Text style={pdfStyles.informationLine}>
          Date de naissance : {birthDate || "—"}
        </Text>

        <Text style={pdfStyles.informationLine}>
          Heure de naissance : {birthTime || "—"}
        </Text>

        <Text style={pdfStyles.informationLine}>
          Lieu de naissance : {birthCity || "—"}
        </Text>
      </View>

      <Text style={pdfStyles.text}>
        Votre carte du ciel représente la position des planètes au
        moment précis de votre naissance. Elle met en lumière votre
        personnalité, votre sensibilité, votre manière d’aimer,
        d’agir, de communiquer et d’évoluer.
      </Text>

      <Text style={pdfStyles.text}>
        Ce rapport essentiel vous présente les grandes fondations de
        votre thème natal : votre Soleil, votre Lune, votre Ascendant,
        les dix planètes, vos éléments dominants et vos modalités
        astrologiques.
      </Text>

      <Text style={pdfStyles.smallText}>
        L’astrologie est un outil symbolique de connaissance de soi.
        Elle révèle des tendances et des possibilités sans déterminer
        votre avenir de manière absolue.
      </Text>

      <PdfPageFooter />
    </Page>
  );
}
