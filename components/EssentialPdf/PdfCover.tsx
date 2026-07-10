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
    paddingTop: 54,
    paddingBottom: 54,
    paddingHorizontal: 58,
    backgroundColor: "#081020",
    color: "#fff8e7",
    fontFamily: "Helvetica",
  },

  topGlow: {
    position: "absolute",
    top: -160,
    right: -120,
    width: 390,
    height: 390,
    borderRadius: 195,
    backgroundColor: "#111d3b",
    opacity: 0.9,
  },

  bottomGlow: {
    position: "absolute",
    bottom: -190,
    left: -135,
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: "#101a35",
    opacity: 0.75,
  },

  orbitOuter: {
    position: "absolute",
    top: 107,
    right: 48,
    width: 174,
    height: 174,
    borderRadius: 87,
    borderWidth: 0.8,
    borderColor: "#7c6833",
    opacity: 0.34,
  },

  orbitMiddle: {
    position: "absolute",
    top: 127,
    right: 68,
    width: 134,
    height: 134,
    borderRadius: 67,
    borderWidth: 0.7,
    borderColor: "#d1aa4d",
    opacity: 0.24,
  },

  orbitInner: {
    position: "absolute",
    top: 159,
    right: 100,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.7,
    borderColor: "#f4c95d",
    opacity: 0.24,
  },

  starOne: {
    position: "absolute",
    top: 104,
    left: 74,
    fontSize: 9,
    color: "#f4c95d",
    opacity: 0.72,
  },

  starTwo: {
    position: "absolute",
    top: 218,
    right: 89,
    fontSize: 7,
    color: "#f4c95d",
    opacity: 0.65,
  },

  starThree: {
    position: "absolute",
    bottom: 174,
    right: 72,
    fontSize: 8,
    color: "#f4c95d",
    opacity: 0.55,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 68,
    zIndex: 2,
  },

  logo: {
    width: 116,
    height: 46,
    objectFit: "contain",
  },

  headerLine: {
    width: 244,
    height: 1,
    backgroundColor: "#47506b",
  },

  editionLabel: {
    marginBottom: 18,
    fontSize: 10,
    letterSpacing: 3.1,
    color: "#f4c95d",
    textTransform: "uppercase",
  },

  titleBlock: {
    width: "78%",
    marginBottom: 38,
    zIndex: 2,
  },

  title: {
    fontSize: 35,
    lineHeight: 1.12,
    color: "#fff8e7",
    marginBottom: 14,
  },

  titleAccent: {
    color: "#f4c95d",
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 1.45,
    color: "#c7cce0",
    letterSpacing: 0.35,
  },

  goldDivider: {
    width: 82,
    height: 1.5,
    backgroundColor: "#f4c95d",
    marginBottom: 34,
  },

  identityCard: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#9d8040",
    backgroundColor: "#111b35",
    paddingTop: 24,
    paddingBottom: 22,
    paddingHorizontal: 26,
    marginBottom: 30,
    zIndex: 2,
  },

  identityTopLine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 72,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  identityLabel: {
    fontSize: 8.5,
    letterSpacing: 2.2,
    color: "#aab1c8",
    textTransform: "uppercase",
    marginBottom: 9,
  },

  name: {
    fontSize: 24,
    color: "#fff8e7",
    marginBottom: 22,
  },

  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dataColumn: {
    width: "31%",
  },

  dataLabel: {
    fontSize: 7.5,
    letterSpacing: 1.45,
    color: "#8f98b4",
    textTransform: "uppercase",
    marginBottom: 6,
  },

  dataValue: {
    fontSize: 10.5,
    color: "#fff8e7",
    lineHeight: 1.35,
  },

  introduction: {
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    paddingLeft: 20,
    paddingRight: 8,
    marginBottom: 26,
    zIndex: 2,
  },

  introText: {
    fontSize: 11.2,
    lineHeight: 1.62,
    color: "#e8e4da",
    marginBottom: 10,
  },

  featureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
    zIndex: 2,
  },

  feature: {
    width: "31.5%",
    borderTopWidth: 1,
    borderTopColor: "#46506b",
    paddingTop: 13,
  },

  featureNumber: {
    fontSize: 8,
    letterSpacing: 1.6,
    color: "#f4c95d",
    marginBottom: 7,
  },

  featureTitle: {
    fontSize: 10.5,
    color: "#fff8e7",
    marginBottom: 5,
  },

  featureText: {
    fontSize: 8.2,
    lineHeight: 1.45,
    color: "#aeb6ce",
  },

  disclaimer: {
    marginTop: "auto",
    paddingTop: 14,
    borderTopWidth: 0.7,
    borderTopColor: "#39435f",
    zIndex: 2,
  },

  disclaimerText: {
    fontSize: 7.8,
    lineHeight: 1.45,
    color: "#848da8",
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
      <View style={styles.topGlow} />
      <View style={styles.bottomGlow} />

      <View style={styles.orbitOuter} />
      <View style={styles.orbitMiddle} />
      <View style={styles.orbitInner} />

      <Text style={styles.starOne}>✦</Text>
      <Text style={styles.starTwo}>✧</Text>
      <Text style={styles.starThree}>✦</Text>

      <View style={styles.header}>
        <Image src={LOGO_URL} style={styles.logo} />
        <View style={styles.headerLine} />
      </View>

      <View style={styles.titleBlock}>
        <Text style={styles.editionLabel}>
          Rapport astrologique personnalisé
        </Text>

        <Text style={styles.title}>
          Votre carte du ciel{"\n"}
          <Text style={styles.titleAccent}>essentielle</Text>
        </Text>

        <Text style={styles.subtitle}>
          Une lecture élégante et structurée des grandes forces qui
          composent votre thème natal.
        </Text>
      </View>

      <View style={styles.goldDivider} />

      <View style={styles.identityCard}>
        <View style={styles.identityTopLine} />

        <Text style={styles.identityLabel}>
          Ce thème astral a été préparé pour
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

      <View style={styles.introduction}>
        <Text style={styles.introText}>
          Au moment précis de votre naissance, le ciel formait une
          configuration unique. Votre carte du ciel en révèle les
          grandes lignes et met en lumière votre identité, votre monde
          émotionnel, votre manière d’aimer, de réfléchir et d’agir.
        </Text>

        <Text style={styles.introText}>
          Ce rapport Essentiel vous accompagne dans une première
          exploration claire et personnelle de votre univers
          astrologique.
        </Text>
      </View>

      <View style={styles.featureRow}>
        <View style={styles.feature}>
          <Text style={styles.featureNumber}>01</Text>
          <Text style={styles.featureTitle}>Vos trois piliers</Text>
          <Text style={styles.featureText}>
            Soleil, Lune et Ascendant.
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureNumber}>02</Text>
          <Text style={styles.featureTitle}>Vos planètes</Text>
          <Text style={styles.featureText}>
            Les grandes fonctions de votre personnalité.
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureNumber}>03</Text>
          <Text style={styles.featureTitle}>Votre équilibre</Text>
          <Text style={styles.featureText}>
            Éléments dominants et rythme intérieur.
          </Text>
        </View>
      </View>

      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          L’astrologie est un outil symbolique de connaissance de soi.
          Elle révèle des tendances et des possibilités, sans
          déterminer votre avenir de manière absolue.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
