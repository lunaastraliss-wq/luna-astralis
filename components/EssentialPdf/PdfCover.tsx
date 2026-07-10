import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  ASCENDANT_ICON,
  COVER_BACKGROUND,
  LOGO_URL,
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import type { EssentialPdfProps } from "./EssentialPdfTypes";
import PdfPageFooter from "./PdfPageFooter";

const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;

const styles = StyleSheet.create({
  page: {
    position: "relative",
    width: A4_WIDTH,
    height: A4_HEIGHT,
    padding: 0,
    margin: 0,
    backgroundColor: "#07101f",
    color: "#fff8e7",
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    objectFit: "fill",
  },

  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    paddingTop: 40,
    paddingBottom: 44,
    paddingHorizontal: 46,
  },

  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  logo: {
    width: 164,
    height: 66,
    objectFit: "contain",
    marginBottom: 10,
  },

  brandDivider: {
    width: 118,
    height: 1,
    backgroundColor: "#d4af4e",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 24,
  },

  eyebrow: {
    fontSize: 8.2,
    letterSpacing: 2.7,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 13,
  },

  title: {
    fontSize: 35,
    lineHeight: 1.08,
    textAlign: "center",
    color: "#fff8e7",
    marginBottom: 4,
  },

  titleAccent: {
    fontSize: 38,
    lineHeight: 1.04,
    textAlign: "center",
    color: "#f4c95d",
    marginBottom: 12,
  },

  subtitle: {
    width: "76%",
    fontSize: 10.4,
    lineHeight: 1.45,
    textAlign: "center",
    color: "#e1ded6",
  },

  identityCard: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#b7944c",
    backgroundColor: "#091426",
    paddingTop: 17,
    paddingBottom: 17,
    paddingHorizontal: 24,
    marginBottom: 21,
  },

  identityAccentLeft: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 96,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  identityAccentRight: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 72,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  preparedLabel: {
    fontSize: 7.2,
    letterSpacing: 2.1,
    color: "#d7ccb3",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 8,
  },

  name: {
    fontSize: 27,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 15,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.6,
    borderTopColor: "#705a35",
    paddingTop: 11,
  },

  infoColumn: {
    width: "31.5%",
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 6.3,
    letterSpacing: 1.2,
    color: "#c8b98f",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 9.4,
    lineHeight: 1.25,
    color: "#fff8e7",
    textAlign: "center",
  },

  quoteSection: {
    alignItems: "center",
    marginBottom: 18,
    paddingHorizontal: 28,
  },

  quote: {
    fontSize: 12,
    lineHeight: 1.42,
    color: "#f4efe2",
    textAlign: "center",
    marginBottom: 6,
  },

  signature: {
    fontSize: 7,
    letterSpacing: 2.2,
    color: "#d1c2a2",
    textTransform: "uppercase",
  },

  pillars: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#80683d",
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 17,
  },

  pillar: {
    width: "31%",
    alignItems: "center",
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#c89b42",
    backgroundColor: "#07101f",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },

  icon: {
    width: 27,
    height: 27,
    objectFit: "contain",
  },

  pillarTitle: {
    fontSize: 8.8,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 3,
  },

  pillarDescription: {
    fontSize: 6.7,
    lineHeight: 1.32,
    color: "#eee8dc",
    textAlign: "center",
  },

  introCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#091426",
    borderWidth: 0.7,
    borderColor: "#8f6e35",
    paddingVertical: 11,
    paddingHorizontal: 14,
  },

  introLabel: {
    width: 36,
    fontSize: 7,
    letterSpacing: 1.4,
    color: "#f4c95d",
    paddingTop: 1,
  },

  introText: {
    flex: 1,
    fontSize: 8.4,
    lineHeight: 1.48,
    color: "#eee8dc",
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
      <Image
        src={COVER_BACKGROUND}
        style={styles.background}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            src={LOGO_URL}
            style={styles.logo}
          />

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
            Une première lecture claire et personnelle des grandes
            forces qui composent votre thème natal.
          </Text>
        </View>

        <View style={styles.identityCard}>
          <View style={styles.identityAccentLeft} />
          <View style={styles.identityAccentRight} />

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
          <Text style={styles.quote}>
            Chaque naissance possède une signature céleste unique.
          </Text>

          <Text style={styles.signature}>
            Luna Astralis
          </Text>
        </View>

        <View style={styles.pillars}>
          <View style={styles.pillar}>
            <View style={styles.iconCircle}>
              <Image
                src={PLANET_ICONS.Sun}
                style={styles.icon}
              />
            </View>

            <Text style={styles.pillarTitle}>
              Soleil
            </Text>

            <Text style={styles.pillarDescription}>
              Votre identité profonde
            </Text>
          </View>

          <View style={styles.pillar}>
            <View style={styles.iconCircle}>
              <Image
                src={PLANET_ICONS.Moon}
                style={styles.icon}
              />
            </View>

            <Text style={styles.pillarTitle}>
              Lune
            </Text>

            <Text style={styles.pillarDescription}>
              Votre monde émotionnel
            </Text>
          </View>

          <View style={styles.pillar}>
            <View style={styles.iconCircle}>
              <Image
                src={ASCENDANT_ICON}
                style={styles.icon}
              />
            </View>

            <Text style={styles.pillarTitle}>
              Ascendant
            </Text>

            <Text style={styles.pillarDescription}>
              Votre présence naturelle
            </Text>
          </View>
        </View>

        <View style={styles.introCard}>
          <Text style={styles.introLabel}>
            01
          </Text>

          <Text style={styles.introText}>
            Ce rapport Essentiel vous guide à travers vos trois grands
            piliers astrologiques, vos planètes natales, vos éléments
            dominants et votre rythme intérieur.
          </Text>
        </View>

        <PdfPageFooter />
      </View>
    </Page>
  );
}
