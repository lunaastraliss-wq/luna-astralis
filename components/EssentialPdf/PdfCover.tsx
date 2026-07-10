import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { LOGO_URL } from "./EssentialPdfAssets";
import type { EssentialPdfProps } from "./EssentialPdfTypes";
import PdfPageFooter from "./PdfPageFooter";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 34,
    paddingBottom: 42,
    paddingHorizontal: 52,
    backgroundColor: "#081020",
    color: "#fff8e7",
    fontFamily: "Helvetica",
  },

  glowTop: {
    position: "absolute",
    top: -150,
    right: -110,
    width: 370,
    height: 370,
    borderRadius: 185,
    backgroundColor: "#162a55",
    opacity: 0.72,
  },

  glowBottom: {
    position: "absolute",
    bottom: -190,
    left: -130,
    width: 390,
    height: 390,
    borderRadius: 195,
    backgroundColor: "#101c3a",
    opacity: 0.58,
  },

  wheelOuter: {
    position: "absolute",
    top: 95,
    right: 34,
    width: 205,
    height: 205,
    borderRadius: 103,
    borderWidth: 0.8,
    borderColor: "#d8b858",
    opacity: 0.2,
  },

  wheelMiddle: {
    position: "absolute",
    top: 117,
    right: 56,
    width: 161,
    height: 161,
    borderRadius: 81,
    borderWidth: 0.7,
    borderColor: "#d8b858",
    opacity: 0.18,
  },

  wheelInner: {
    position: "absolute",
    top: 148,
    right: 87,
    width: 99,
    height: 99,
    borderRadius: 50,
    borderWidth: 0.7,
    borderColor: "#d8b858",
    opacity: 0.17,
  },

  wheelCore: {
    position: "absolute",
    top: 185,
    right: 124,
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#f4c95d",
    opacity: 0.45,
  },

  decorativeStarOne: {
    position: "absolute",
    top: 116,
    left: 84,
    fontSize: 7,
    color: "#f4c95d",
    opacity: 0.65,
  },

  decorativeStarTwo: {
    position: "absolute",
    top: 277,
    right: 75,
    fontSize: 6,
    color: "#f4c95d",
    opacity: 0.55,
  },

  decorativeStarThree: {
    position: "absolute",
    bottom: 135,
    right: 66,
    fontSize: 7,
    color: "#f4c95d",
    opacity: 0.45,
  },

  header: {
    zIndex: 2,
    alignItems: "center",
    marginBottom: 34,
  },

  logo: {
    width: 150,
    height: 60,
    objectFit: "contain",
    marginBottom: 13,
  },

  brandLine: {
    width: 118,
    height: 1,
    backgroundColor: "#d4af4e",
  },

  titleSection: {
    zIndex: 2,
    alignItems: "center",
    marginBottom: 24,
  },

  reportLabel: {
    fontSize: 8.5,
    letterSpacing: 2.8,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 15,
  },

  title: {
    fontSize: 34,
    lineHeight: 1.08,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 7,
  },

  titleAccent: {
    fontSize: 36,
    color: "#f4c95d",
    textAlign: "center",
    marginBottom: 14,
  },

  subtitle: {
    width: "78%",
    fontSize: 10.5,
    lineHeight: 1.48,
    color: "#c6cde0",
    textAlign: "center",
  },

  identityCard: {
    zIndex: 2,
    position: "relative",
    borderWidth: 1,
    borderColor: "#b19148",
    backgroundColor: "#111b35",
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 24,
    marginBottom: 21,
  },

  identityAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 92,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  identityLabel: {
    fontSize: 7.4,
    letterSpacing: 2.1,
    color: "#aab2c9",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 7,
  },

  name: {
    fontSize: 24,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 15,
  },

  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.6,
    borderTopColor: "#35405d",
    paddingTop: 12,
  },

  dataColumn: {
    width: "31%",
    alignItems: "center",
  },

  dataLabel: {
    fontSize: 6.6,
    letterSpacing: 1.25,
    color: "#8993ae",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 4,
  },

  dataValue: {
    fontSize: 9.5,
    color: "#fff8e7",
    lineHeight: 1.25,
    textAlign: "center",
  },

  quoteBlock: {
    zIndex: 2,
    alignItems: "center",
    paddingHorizontal: 31,
    marginBottom: 21,
  },

  quoteMark: {
    fontSize: 20,
    color: "#f4c95d",
    lineHeight: 1,
    marginBottom: 5,
  },

  quote: {
    fontSize: 12.5,
    lineHeight: 1.46,
    color: "#f1ecdf",
    textAlign: "center",
    marginBottom: 7,
  },

  quoteAuthor: {
    fontSize: 7.4,
    letterSpacing: 2,
    color: "#939cb5",
    textTransform: "uppercase",
  },

  pillars: {
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#3a4562",
    paddingTop: 13,
    paddingBottom: 13,
    marginBottom: 16,
  },

  pillar: {
    width: "31%",
    alignItems: "center",
  },

  pillarSymbol: {
    fontSize: 18,
    color: "#f4c95d",
    marginBottom: 4,
  },

  pillarTitle: {
    fontSize: 8.7,
    color: "#fff8e7",
    marginBottom: 3,
  },

  pillarText: {
    fontSize: 6.8,
    color: "#949db6",
    textAlign: "center",
  },

  introduction: {
    zIndex: 2,
    borderLeftWidth: 1.5,
    borderLeftColor: "#f4c95d",
    paddingLeft: 15,
    paddingRight: 12,
  },

  introText: {
    fontSize: 8.6,
    lineHeight: 1.52,
    color: "#cfd4e1",
    textAlign: "justify",
  },
});

function displayValue(value?: string) {
  const cleanValue = value?.trim();
  return cleanValue || "Non précisé";
}

export default function PdfCover({
  firstName,
  birthDate,
  birthTime,
  birthCity,
}: EssentialPdfProps) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <View style={styles.wheelOuter} />
      <View style={styles.wheelMiddle} />
      <View style={styles.wheelInner} />
      <View style={styles.wheelCore} />

      <Text style={styles.decorativeStarOne}>✦</Text>
      <Text style={styles.decorativeStarTwo}>✧</Text>
      <Text style={styles.decorativeStarThree}>✦</Text>

      <View style={styles.header}>
        <Image src={LOGO_URL} style={styles.logo} />
        <View style={styles.brandLine} />
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.reportLabel}>
          Rapport astrologique personnalisé
        </Text>

        <Text style={styles.title}>
          Votre carte du ciel
        </Text>

        <Text style={styles.titleAccent}>
          essentielle
        </Text>

        <Text style={styles.subtitle}>
          Une lecture personnelle des grandes forces qui composent
          votre thème natal.
        </Text>
      </View>

      <View style={styles.identityCard}>
        <View style={styles.identityAccent} />

        <Text style={styles.identityLabel}>
          Préparé exclusivement pour
        </Text>

        <Text style={styles.name}>
          {displayValue(firstName)}
        </Text>

        <View style={styles.dataRow}>
          <View style={styles.dataColumn}>
            <Text style={styles.dataLabel}>
              Date de naissance
            </Text>
            <Text style={styles.dataValue}>
              {displayValue(birthDate)}
            </Text>
          </View>

          <View style={styles.dataColumn}>
            <Text style={styles.dataLabel}>
              Heure de naissance
            </Text>
            <Text style={styles.dataValue}>
              {displayValue(birthTime)}
            </Text>
          </View>

          <View style={styles.dataColumn}>
            <Text style={styles.dataLabel}>
              Lieu de naissance
            </Text>
            <Text style={styles.dataValue}>
              {displayValue(birthCity)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.quoteBlock}>
        <Text style={styles.quoteMark}>“</Text>

        <Text style={styles.quote}>
          Chaque naissance possède une signature céleste unique.
        </Text>

        <Text style={styles.quoteAuthor}>
          Luna Astralis
        </Text>
      </View>

      <View style={styles.pillars}>
        <View style={styles.pillar}>
          <Text style={styles.pillarSymbol}>☉</Text>
          <Text style={styles.pillarTitle}>Soleil</Text>
          <Text style={styles.pillarText}>
            Votre identité profonde
          </Text>
        </View>

        <View style={styles.pillar}>
          <Text style={styles.pillarSymbol}>☽</Text>
          <Text style={styles.pillarTitle}>Lune</Text>
          <Text style={styles.pillarText}>
            Votre monde émotionnel
          </Text>
        </View>

        <View style={styles.pillar}>
          <Text style={styles.pillarSymbol}>↑</Text>
          <Text style={styles.pillarTitle}>Ascendant</Text>
          <Text style={styles.pillarText}>
            Votre présence naturelle
          </Text>
        </View>
      </View>

      <View style={styles.introduction}>
        <Text style={styles.introText}>
          Au moment précis de votre naissance, le ciel formait une
          configuration unique. Ce rapport vous invite à découvrir vos
          grands piliers astrologiques, vos planètes natales, vos
          éléments dominants et votre rythme intérieur.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
