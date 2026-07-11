import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./EssentialPdfStyles";
import type { EssentialPdfProps } from "./EssentialPdfTypes";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#f4c95d";
const SOFT_GOLD = "#8f6e35";

const PAGE_BACKGROUND = "#06101f";
const CARD_BACKGROUND = "#081426";
const CREAM = "#fff8e7";
const MUTED = "#d8d0c2";

const styles = StyleSheet.create({
  pageContent: {
    position: "relative",
    flexGrow: 1,
  },

  titleSection: {
    alignItems: "center",
    marginTop: 4,
    marginBottom: 12,
  },

  eyebrow: {
    fontSize: 6.8,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    color: "#cdbb92",
    marginBottom: 5,
  },

  title: {
    fontSize: 24,
    lineHeight: 1.15,
    color: BRIGHT_GOLD,
    textAlign: "center",
    marginBottom: 7,
  },

  titleLine: {
    width: 92,
    height: 0.8,
    backgroundColor: GOLD,
    marginBottom: 9,
  },

  intro: {
    width: "82%",
    fontSize: 9.2,
    lineHeight: 1.45,
    color: MUTED,
    textAlign: "center",
  },

  wheelFrame: {
    position: "relative",
    alignSelf: "center",

    width: 410,
    height: 410,

    borderWidth: 0.9,
    borderColor: SOFT_GOLD,

    backgroundColor: PAGE_BACKGROUND,

    alignItems: "center",
    justifyContent: "center",

    padding: 14,
    marginBottom: 14,
  },

  wheelFrameInner: {
    position: "absolute",

    top: 6,
    left: 6,
    right: 6,
    bottom: 6,

    borderWidth: 0.35,
    borderColor: "#5d4b2e",
  },

  wheelAccentTop: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 105,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  wheelAccentBottom: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 78,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  wheelImage: {
    width: 374,
    height: 374,
    objectFit: "contain",
  },

  wheelMissing: {
    width: 350,
    height: 350,

    borderWidth: 0.8,
    borderColor: "#735d36",

    backgroundColor: CARD_BACKGROUND,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 32,
  },

  wheelMissingSymbol: {
    fontSize: 32,
    color: GOLD,
    marginBottom: 12,
  },

  wheelMissingTitle: {
    fontSize: 16,
    color: BRIGHT_GOLD,
    textAlign: "center",
    marginBottom: 8,
  },

  wheelMissingText: {
    fontSize: 8.5,
    lineHeight: 1.5,
    color: MUTED,
    textAlign: "center",
  },

  identityCard: {
    position: "relative",

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,

    backgroundColor: CARD_BACKGROUND,

    paddingTop: 11,
    paddingBottom: 11,
    paddingHorizontal: 18,
  },

  identityAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 84,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  identityAccentRight: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 64,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  preparedFor: {
    fontSize: 6.3,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: "#c8b98f",
    textAlign: "center",
    marginBottom: 5,
  },

  clientName: {
    fontSize: 18,
    color: CREAM,
    textAlign: "center",
    marginBottom: 9,
  },

  infoDivider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#705a35",
    marginBottom: 9,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoColumn: {
    width: "31.5%",
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 5.6,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#bfae87",
    textAlign: "center",
    marginBottom: 3,
  },

  infoValue: {
    fontSize: 8.6,
    lineHeight: 1.3,
    color: CREAM,
    textAlign: "center",
  },

  note: {
    fontSize: 6.8,
    lineHeight: 1.4,
    color: "#bfb6a6",
    textAlign: "center",
    marginTop: 9,
    paddingHorizontal: 22,
  },
});

function displayValue(
  value: string | undefined,
  fallback = "Non précisé"
): string {
  const cleanValue = value?.trim();

  return cleanValue || fallback;
}

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

      <View style={styles.pageContent}>
        <View style={styles.titleSection} wrap={false}>
          <Text style={styles.eyebrow}>
            Votre thème natal
          </Text>

          <Text style={styles.title}>
            Votre roue astrologique
          </Text>

          <View style={styles.titleLine} />

          <Text style={styles.intro}>
            Cette roue représente la position des planètes, des signes,
            des maisons et des principaux angles au moment précis de
            votre naissance.
          </Text>
        </View>

        <View style={styles.wheelFrame} wrap={false}>
          <View style={styles.wheelFrameInner} />
          <View style={styles.wheelAccentTop} />
          <View style={styles.wheelAccentBottom} />

          {safeWheelImage ? (
            <Image
              src={safeWheelImage}
              style={styles.wheelImage}
            />
          ) : (
            <View style={styles.wheelMissing}>
              <Text style={styles.wheelMissingSymbol}>
                ✦
              </Text>

              <Text style={styles.wheelMissingTitle}>
                Roue astrologique indisponible
              </Text>

              <Text style={styles.wheelMissingText}>
                L’image de la roue n’a pas été transmise au document.
                Les données astrologiques et les interprétations du
                rapport demeurent néanmoins disponibles dans les pages
                suivantes.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.identityCard} wrap={false}>
          <View style={styles.identityAccentLeft} />
          <View style={styles.identityAccentRight} />

          <Text style={styles.preparedFor}>
            Carte du ciel préparée pour
          </Text>

          <Text style={styles.clientName}>
            {displayValue(firstName, "Votre nom")}
          </Text>

          <View style={styles.infoDivider} />

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

        <Text style={styles.note}>
          Les symboles et les lignes présents dans la roue seront
          expliqués progressivement dans les pages suivantes.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
