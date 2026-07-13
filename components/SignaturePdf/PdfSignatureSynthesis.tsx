import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import PdfBrandHeader from "../PremiumPdf/PdfBrandHeader";
import PdfPageFooter from "../PremiumPdf/PdfPageFooter";
import { pdfStyles } from "../PremiumPdf/PremiumPdfStyles";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },

  badge: {
    color: "#f4c95d",
    fontSize: 8,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  title: {
    color: "#fff8e7",
    fontSize: 22,
    lineHeight: 1.2,
    marginBottom: 10,
  },

  intro: {
    color: "#d9d7e8",
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 18,
  },

  card: {
    borderWidth: 1,
    borderColor: "#6f5a8f",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#171329",
  },

  cardTitle: {
    color: "#f4c95d",
    fontSize: 11,
    marginBottom: 6,
  },

  cardText: {
    color: "#f4f0ff",
    fontSize: 9.5,
    lineHeight: 1.55,
  },
});

export default function PdfSignatureSynthesis() {
  return (
    <Page
      size="A4"
      style={pdfStyles.page}
    >
      <PdfBrandHeader />

      <View style={styles.content}>
        <Text style={styles.badge}>
          Analyse Signature
        </Text>

        <Text style={styles.title}>
          Votre signature astrologique profonde
        </Text>

        <Text style={styles.intro}>
          Cette section relie les principales forces de votre thème afin de
          révéler les dynamiques qui donnent à votre personnalité sa cohérence,
          ses contrastes et son potentiel d’évolution.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Votre moteur intérieur
          </Text>

          <Text style={styles.cardText}>
            Votre moteur intérieur sera déterminé à partir de la relation entre
            votre Soleil, votre Lune, votre Ascendant et vos planètes
            dominantes.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Votre principal contraste
          </Text>

          <Text style={styles.cardText}>
            Cette partie mettra en lumière les besoins ou les élans qui peuvent
            parfois sembler contradictoires dans votre thème.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Votre potentiel d’accomplissement
          </Text>

          <Text style={styles.cardText}>
            Cette synthèse montrera comment vos qualités naturelles peuvent
            collaborer pour soutenir une évolution plus consciente et plus
            personnelle.
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
