import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const styles = StyleSheet.create({
  conclusionCard: {
    position: "relative",
    padding: 25,
    marginBottom: 24,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  watermark: {
    position: "absolute",
    top: 10,
    right: 18,
    color: "#f4c95d",
    opacity: 0.1,
    fontSize: 48,
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 10.8,
    lineHeight: 1.65,
    marginBottom: 14,
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 10.8,
    lineHeight: 1.65,
  },

  signatureBox: {
    alignItems: "center",
    padding: 25,
    marginBottom: 22,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  brand: {
    color: "#f4c95d",
    fontSize: 17,
    marginBottom: 13,
  },

  slogan: {
    color: "#fff8e7",
    fontSize: 16,
    lineHeight: 1.5,
    textAlign: "center",
  },

  thanks: {
    color: "#bfc5d5",
    fontSize: 9.5,
    lineHeight: 1.5,
    textAlign: "center",
    marginBottom: 22,
  },

  symbols: {
    flexDirection: "row",
    justifyContent: "center",
  },

  symbol: {
    color: "#8f793c",
    fontSize: 17,
    marginHorizontal: 12,
  },
});

export default function PdfConclusion() {
  return (
    <Page
      size="A4"
      style={pdfStyles.page}
    >
      <PdfBrandHeader />

      <View style={pdfStyles.centeredHeader}>
        <Text style={pdfStyles.pageKicker}>
          Conclusion
        </Text>

        <Text style={pdfStyles.largePageTitle}>
          Votre ciel intérieur
        </Text>

        <View
          style={pdfStyles.decorativeDivider}
        >
          <View style={pdfStyles.dividerLine} />

          <Text style={pdfStyles.dividerSymbol}>
            ✦
          </Text>

          <View style={pdfStyles.dividerLine} />
        </View>

        <Text style={pdfStyles.pageLead}>
          Chaque thème astral raconte une
          histoire unique. Le vôtre ne fait
          que commencer à se dévoiler.
        </Text>
      </View>

      <View style={styles.conclusionCard}>
        <Text style={styles.watermark}>
          ✦
        </Text>

        <Text style={styles.paragraph}>
          Ce rapport Essentiel vous a permis
          de découvrir les premières clés de
          votre thème natal : vos grands
          piliers astrologiques, vos
          principales planètes, l’équilibre
          de vos éléments et votre manière
          naturelle d’aborder la vie.
        </Text>

        <Text style={styles.paragraph}>
          Votre carte du ciel n’est pas un
          destin gravé dans le marbre. Elle
          met en lumière vos forces, vos
          sensibilités, vos défis et les
          potentiels qui vous accompagnent
          tout au long de votre parcours.
        </Text>

        <Text style={styles.paragraphLast}>
          Plus vous apprenez à comprendre
          ces énergies, plus vous développez
          une connaissance profonde de
          vous-même. L’astrologie devient
          alors un outil de réflexion, de
          croissance et d’évolution
          personnelle.
        </Text>
      </View>

      <View
        style={styles.signatureBox}
        wrap={false}
      >
        <Text style={styles.brand}>
          ✦ Luna Astralis ✦
        </Text>

        <Text style={styles.slogan}>
          Votre signe n’est pas une limite.
          {"\n"}
          C’est une force à découvrir.
        </Text>
      </View>

      <Text style={styles.thanks}>
        Merci d’avoir choisi Luna Astralis
        pour explorer votre univers
        intérieur.
      </Text>

      <View style={styles.symbols}>
        <Text style={styles.symbol}>☉</Text>
        <Text style={styles.symbol}>☽</Text>
        <Text style={styles.symbol}>✦</Text>
        <Text style={styles.symbol}>↑</Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
