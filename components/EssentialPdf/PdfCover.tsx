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

const PAGE_TOP = 36;
const PAGE_BOTTOM = 48;
const PAGE_HORIZONTAL = 48;

const styles = StyleSheet.create({
  page: {
  position: "relative",
  padding: 0,
  margin: 0,
  backgroundColor: "#06101f",
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
    position: "relative",
    paddingTop: PAGE_TOP,
    paddingBottom: PAGE_BOTTOM,
    paddingHorizontal: PAGE_HORIZONTAL,
  },

  header: {
    alignItems: "center",
    marginBottom: 17,
  },

  logo: {
    width: 154,
    height: 60,
    objectFit: "contain",
    marginBottom: 7,
  },

  brandDivider: {
    width: 108,
    height: 1,
    backgroundColor: "#d4af4e",
  },

  titleSection: {
    alignItems: "center",
    marginBottom: 18,
  },

  eyebrow: {
    fontSize: 8,
    letterSpacing: 2.5,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 10,
  },

  title: {
    fontSize: 33,
    lineHeight: 1.08,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 2,
  },

  titleAccent: {
    fontSize: 36,
    lineHeight: 1.04,
    color: "#f4c95d",
    textAlign: "center",
    marginBottom: 9,
  },

  subtitle: {
    width: "78%",
    fontSize: 9.8,
    lineHeight: 1.42,
    color: "#e8e2d7",
    textAlign: "center",
  },

  identityCard: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#b7944c",
    backgroundColor: "#081426",

    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 21,

    marginBottom: 14,
  },

  identityAccentLeft: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 92,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  identityAccentRight: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 70,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  preparedLabel: {
    fontSize: 6.8,
    letterSpacing: 2,
    color: "#d7ccb3",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 6,
  },

  name: {
    fontSize: 25,
    lineHeight: 1.15,
    color: "#fff8e7",
    textAlign: "center",
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.6,
    borderTopColor: "#705a35",
    paddingTop: 9,
  },

  infoColumn: {
    width: "31.5%",
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 5.9,
    letterSpacing: 1.05,
    color: "#c8b98f",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 3,
  },

  infoValue: {
    fontSize: 9,
    lineHeight: 1.25,
    color: "#fff8e7",
    textAlign: "center",
  },

  quoteSection: {
    alignItems: "center",
    paddingHorizontal: 26,
    marginBottom: 12,
  },

  quote: {
    fontSize: 11,
    lineHeight: 1.4,
    color: "#f4efe2",
    textAlign: "center",
    marginBottom: 4,
  },

  signature: {
    fontSize: 6.5,
    letterSpacing: 2,
    color: "#d1c2a2",
    textTransform: "uppercase",
  },

  pillars: {
    flexDirection: "row",
    justifyContent: "space-between",

    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#80683d",

    paddingTop: 9,
    paddingBottom: 9,
    marginBottom: 12,
  },

  pillar: {
    width: "31%",
    alignItems: "center",
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,

    borderWidth: 1,
    borderColor: "#c89b42",
    backgroundColor: "#06101f",

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  icon: {
    width: 26,
    height: 26,
    objectFit: "contain",
  },

  pillarTitle: {
    fontSize: 8.2,
    color: "#f4c95d",
    textTransform: "uppercase",
    marginBottom: 2,
  },

  pillarDescription: {
    fontSize: 6.3,
    lineHeight: 1.28,
    color: "#eee8dc",
    textAlign: "center",
  },

  introCard: {
    flexDirection: "row",
    alignItems: "flex-start",

    backgroundColor: "#081426",
    borderWidth: 0.7,
    borderColor: "#8f6e35",

    paddingVertical: 8,
    paddingHorizontal: 11,
  },

  introLabel: {
    width: 30,
    fontSize: 6.8,
    letterSpacing: 1.2,
    color: "#f4c95d",
    paddingTop: 1,
  },

  introText: {
    flexGrow: 1,
    flexBasis: 0,

    fontSize: 7.9,
    lineHeight: 1.42,
    color: "#eee8dc",
  },
});

function displayValue(value?: string): string {
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
        <View style={styles.header} wrap={false}>
          <Image
            src={LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.brandDivider} />
        </View>

        <View style={styles.titleSection} wrap={false}>
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

        <View style={styles.identityCard} wrap={false}>
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

        <View style={styles.quoteSection} wrap={false}>
          <Text style={styles.quote}>
            Chaque naissance possède une signature céleste unique.
          </Text>

          <Text style={styles.signature}>
            Luna Astralis
          </Text>
        </View>

        <View style={styles.pillars} wrap={false}>
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

        <View style={styles.introCard} wrap={false}>
          <Text style={styles.introLabel}>
            01
          </Text>

          <Text style={styles.introText}>
            Ce rapport Essentiel vous guide à travers vos trois grands
            piliers astrologiques, vos planètes natales, vos éléments
            dominants et votre rythme intérieur.
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
