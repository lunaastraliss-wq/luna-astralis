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
    paddingHorizontal: 48,
    backgroundColor: "#07101f",
    color: "#fff8e7",
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  glowTop: {
    position: "absolute",
    top: -185,
    right: -125,
    width: 430,
    height: 430,
    borderRadius: 215,
    backgroundColor: "#18356f",
    opacity: 0.58,
  },

  glowBottom: {
    position: "absolute",
    bottom: -235,
    left: -150,
    width: 470,
    height: 470,
    borderRadius: 235,
    backgroundColor: "#12284f",
    opacity: 0.42,
  },

  wheelOuter: {
    position: "absolute",
    top: 122,
    right: -12,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 0.8,
    borderColor: "#d8b858",
    opacity: 0.15,
  },

  wheelRingTwo: {
    position: "absolute",
    top: 148,
    right: 14,
    width: 248,
    height: 248,
    borderRadius: 124,
    borderWidth: 0.7,
    borderColor: "#d8b858",
    opacity: 0.14,
  },

  wheelRingThree: {
    position: "absolute",
    top: 184,
    right: 50,
    width: 176,
    height: 176,
    borderRadius: 88,
    borderWidth: 0.7,
    borderColor: "#d8b858",
    opacity: 0.13,
  },

  wheelCore: {
    position: "absolute",
    top: 244,
    right: 110,
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 0.8,
    borderColor: "#f4c95d",
    opacity: 0.22,
  },

  orbitLineOne: {
    position: "absolute",
    top: 269,
    right: -4,
    width: 306,
    height: 0.7,
    backgroundColor: "#d8b858",
    opacity: 0.1,
    transform: "rotate(23deg)",
  },

  orbitLineTwo: {
    position: "absolute",
    top: 267,
    right: -6,
    width: 306,
    height: 0.7,
    backgroundColor: "#d8b858",
    opacity: 0.1,
    transform: "rotate(-23deg)",
  },

  starOne: {
    position: "absolute",
    top: 110,
    left: 92,
    fontSize: 8,
    color: "#f4c95d",
    opacity: 0.62,
  },

  starTwo: {
    position: "absolute",
    top: 324,
    left: 66,
    fontSize: 6,
    color: "#f4c95d",
    opacity: 0.48,
  },

  starThree: {
    position: "absolute",
    bottom: 148,
    right: 76,
    fontSize: 7,
    color: "#f4c95d",
    opacity: 0.44,
  },

  header: {
    zIndex: 2,
    alignItems: "center",
    marginBottom: 26,
  },

  logo: {
    width: 178,
    height: 72,
    objectFit: "contain",
    marginBottom: 12,
  },

  brandDivider: {
    width: 136,
    height: 1,
    backgroundColor: "#d4af4e",
  },

  titleSection: {
    zIndex: 2,
    alignItems: "center",
    marginBottom: 26,
  },

  eyebrow: {
    fontSize: 8.2,
    letterSpacing: 2.8,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 14,
  },

  title: {
    fontSize: 36,
    lineHeight: 1.08,
    textAlign: "center",
    color: "#fff8e7",
    marginBottom: 5,
  },

  titleAccent: {
    fontSize: 38,
    lineHeight: 1.05,
    textAlign: "center",
    color: "#f4c95d",
    marginBottom: 12,
  },

  subtitle: {
    width: "75%",
    fontSize: 10.6,
    lineHeight: 1.45,
    textAlign: "center",
    color: "#c6cde0",
  },

  nameCard: {
    zIndex: 2,
    position: "relative",
    borderWidth: 1,
    borderColor: "#b7944c",
    backgroundColor: "#111b35",
    paddingTop: 17,
    paddingBottom: 17,
    paddingHorizontal: 24,
    marginBottom: 21,
  },

  nameCardAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 104,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  nameCardAccentRight: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 74,
    height: 1.5,
    backgroundColor: "#f4c95d",
    opacity: 0.65,
  },

  preparedLabel: {
    fontSize: 7.2,
    letterSpacing: 2.2,
    color: "#aab2c9",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 8,
  },

  name: {
    fontSize: 27,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 14,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.6,
    borderTopColor: "#39435f",
    paddingTop: 11,
  },

  infoColumn: {
    width: "31.5%",
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 6.4,
    letterSpacing: 1.25,
    color: "#8d97b1",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 9.4,
    color: "#fff8e7",
    textAlign: "center",
    lineHeight: 1.25,
  },

  quoteSection: {
    zIndex: 2,
    alignItems: "center",
    marginBottom: 19,
    paddingHorizontal: 28,
  },

  quoteMark: {
    fontSize: 18,
    color: "#f4c95d",
    marginBottom: 3,
  },

  quote: {
    fontSize: 12.4,
    lineHeight: 1.42,
    color: "#f4efe2",
    textAlign: "center",
    marginBottom: 6,
  },

  signature: {
    fontSize: 7,
    letterSpacing: 2.3,
    color: "#939cb5",
    textTransform: "uppercase",
  },

  pillars: {
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#39435f",
    paddingVertical: 12,
    marginBottom: 17,
  },

  pillar: {
    width: "31%",
    alignItems: "center",
  },

  pillarSymbol: {
    fontSize: 17,
    color: "#f4c95d",
    marginBottom: 4,
  },

  pillarTitle: {
    fontSize: 8.4,
    color: "#fff8e7",
    marginBottom: 2,
  },

  pillarDescription: {
    fontSize: 6.5,
    lineHeight: 1.3,
    color: "#959eb7",
    textAlign: "center",
  },

  introCard: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#0e1830",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    paddingVertical: 10,
    paddingHorizontal: 13,
  },

  introNumber: {
    width: 32,
    fontSize: 7,
    letterSpacing: 1.5,
    color: "#f4c95d",
    paddingTop: 1,
  },

  introText: {
    flex: 1,
    fontSize: 8.3,
    lineHeight: 1.48,
    color: "#cfd4e1",
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
      <View style={styles.wheelRingTwo} />
      <View style={styles.wheelRingThree} />
      <View style={styles.wheelCore} />
      <View style={styles.orbitLineOne} />
      <View style={styles.orbitLineTwo} />

      <Text style={styles.starOne}>✦</Text>
      <Text style={styles.starTwo}>✧</Text>
      <Text style={styles.starThree}>✦</Text>

      <View style={styles.header}>
        <Image src={LOGO_URL} style={styles.logo} />
        <View style={styles.brandDivider} />
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.eyebrow}>
          Rapport astrologique personnalisé
        </Text>

        <Text style={styles.title}>
          Votre carte du ciel
        </Text>

        <Text style={styles.titleAccent}>
          essentielle
        </Text>

        <Text style={styles.subtitle}>
          Une première lecture claire et personnelle des grandes forces
          qui composent votre thème natal.
        </Text>
      </View>

      <View style={styles.nameCard}>
        <View style={styles.nameCardAccent} />
        <View style={styles.nameCardAccentRight} />

        <Text style={styles.preparedLabel}>
          Préparé exclusivement pour
        </Text>

        <Text style={styles.name}>
          {displayValue(firstName)}
        </Text>

        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>
              Date de naissance
            </Text>
            <Text style={styles.infoValue}>
              {displayValue(birthDate)}
            </Text>
          </View>

          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>
              Heure de naissance
            </Text>
            <Text style={styles.infoValue}>
              {displayValue(birthTime)}
            </Text>
          </View>

          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>
              Lieu de naissance
            </Text>
            <Text style={styles.infoValue}>
              {displayValue(birthCity)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.quoteSection}>
        <Text style={styles.quoteMark}>“</Text>

        <Text style={styles.quote}>
          Chaque naissance possède une signature céleste unique.
        </Text>

        <Text style={styles.signature}>
          Luna Astralis
        </Text>
      </View>

      <View style={styles.pillars}>
        <View style={styles.pillar}>
          <Text style={styles.pillarSymbol}>☉</Text>
          <Text style={styles.pillarTitle}>Soleil</Text>
          <Text style={styles.pillarDescription}>
            Votre identité profonde
          </Text>
        </View>

        <View style={styles.pillar}>
          <Text style={styles.pillarSymbol}>☽</Text>
          <Text style={styles.pillarTitle}>Lune</Text>
          <Text style={styles.pillarDescription}>
            Votre monde émotionnel
          </Text>
        </View>

        <View style={styles.pillar}>
          <Text style={styles.pillarSymbol}>↑</Text>
          <Text style={styles.pillarTitle}>Ascendant</Text>
          <Text style={styles.pillarDescription}>
            Votre présence naturelle
          </Text>
        </View>
      </View>

      <View style={styles.introCard}>
        <Text style={styles.introNumber}>01</Text>

        <Text style={styles.introText}>
          Ce rapport Essentiel vous guide à travers vos trois grands
          piliers astrologiques, vos planètes natales, vos éléments
          dominants et votre rythme intérieur.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
