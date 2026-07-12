import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./PremiumPdfStyles";
import type { PremiumPdfProps } from "./PremiumPdfTypes";
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

  /*
   * En-tête
   */
  titleSection: {
    alignItems: "center",
    marginBottom: 6,
  },

  premiumBadge: {
    alignSelf: "center",
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,
    marginBottom: 5,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 0.7,
    borderColor: GOLD,
  },

  premiumBadgeText: {
    color: BRIGHT_GOLD,
    fontSize: 6.4,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    textAlign: "center",
  },

  eyebrow: {
    color: "#cdbb92",
    fontSize: 6.8,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  title: {
    color: BRIGHT_GOLD,
    fontSize: 23,
    lineHeight: 1.12,
    textAlign: "center",
    marginBottom: 6,
  },

  titleLine: {
    width: 92,
    height: 0.8,
    backgroundColor: GOLD,
    marginBottom: 7,
  },

  intro: {
    width: "84%",
    color: MUTED,
    fontSize: 8.7,
    lineHeight: 1.38,
    textAlign: "center",
  },

  /*
   * Encadrement de la roue
   */
  wheelFrame: {
    position: "relative",
    alignSelf: "center",

    width: 395,
    height: 395,

    alignItems: "center",
    justifyContent: "center",

    padding: 9,
    marginBottom: 7,

    backgroundColor: PAGE_BACKGROUND,

    borderWidth: 0.9,
    borderColor: SOFT_GOLD,
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

    width: 100,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  wheelAccentBottom: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 74,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  wheelImage: {
    width: 375,
    height: 375,
    objectFit: "contain",
  },

  /*
   * Remplacement si la roue est absente
   */
  wheelMissing: {
    width: 325,
    height: 325,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 28,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.8,
    borderColor: "#735d36",
  },

  wheelMissingSymbol: {
    color: GOLD,
    fontSize: 29,
    marginBottom: 10,
  },

  wheelMissingTitle: {
    color: BRIGHT_GOLD,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 7,
  },

  wheelMissingText: {
    color: MUTED,
    fontSize: 8.1,
    lineHeight: 1.4,
    textAlign: "center",
  },

  /*
   * Informations de naissance
   */
  identityCard: {
    position: "relative",

    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 17,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,
  },

  identityAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 80,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  identityAccentRight: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 62,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  preparedFor: {
    color: "#c8b98f",
    fontSize: 6.1,
    letterSpacing: 1.7,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 4,
  },

  clientName: {
    color: CREAM,
    fontSize: 17,
    textAlign: "center",
    marginBottom: 7,
  },

  infoDivider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#705a35",
    marginBottom: 7,
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
    color: "#bfae87",
    fontSize: 5.4,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 2,
  },

  infoValue: {
    color: CREAM,
    fontSize: 8.2,
    lineHeight: 1.25,
    textAlign: "center",
  },

  /*
   * Explication
   */
  explanationBox: {
    position: "relative",

    marginTop: 8,

    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 14,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.6,
    borderColor: "#6f5935",
  },

  explanationAccent: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 84,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  explanationTitle: {
    color: BRIGHT_GOLD,
    fontSize: 9.5,
    textAlign: "center",
    marginBottom: 5,
  },

  explanationText: {
    color: MUTED,
    fontSize: 7,
    lineHeight: 1.34,
    textAlign: "center",
    marginBottom: 4,
  },

  explanationTextLast: {
    color: MUTED,
    fontSize: 7,
    lineHeight: 1.34,
    textAlign: "center",
  },

  referenceNote: {
    color: "#bfb6a6",
    fontSize: 6.2,
    lineHeight: 1.3,
    textAlign: "center",

    marginTop: 5,
    paddingTop: 5,
    paddingHorizontal: 12,

    borderTopWidth: 0.4,
    borderTopColor: "#705a35",
  },
});

function displayValue(
  value: string | undefined,
  fallback = "Non précisé"
): string {
  const cleanValue =
    typeof value === "string"
      ? value.trim()
      : "";

  return cleanValue || fallback;
}

export default function PdfWheel({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  wheelImage,
}: PremiumPdfProps) {
  const safeWheelImage =
    typeof wheelImage === "string" &&
    wheelImage.trim().length > 0
      ? wheelImage.trim()
      : "";

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.pageContent}>
        <View style={styles.titleSection}>
          <View style={styles.premiumBadge}>
            <Text
              style={styles.premiumBadgeText}
            >
              Lecture Premium
            </Text>
          </View>

          <Text style={styles.eyebrow}>
            La structure de votre thème natal
          </Text>

          <Text style={styles.title}>
            Votre roue astrologique
          </Text>

          <View style={styles.titleLine} />

          <Text style={styles.intro}>
            Cette roue représente la configuration complète du ciel au
            moment précis de votre naissance. Elle rassemble les
            planètes, les signes, les maisons, les angles et les
            principales relations astrologiques de votre thème natal.
          </Text>
        </View>

        <View style={styles.wheelFrame}>
          <View
            style={styles.wheelFrameInner}
          />

          <View
            style={styles.wheelAccentTop}
          />

          <View
            style={styles.wheelAccentBottom}
          />

          {safeWheelImage ? (
            <Image
              src={safeWheelImage}
              style={styles.wheelImage}
            />
          ) : (
            <View style={styles.wheelMissing}>
              <Text
                style={styles.wheelMissingSymbol}
              >
                ✦
              </Text>

              <Text
                style={styles.wheelMissingTitle}
              >
                Roue astrologique indisponible
              </Text>

              <Text
                style={styles.wheelMissingText}
              >
                L’image de la roue n’a pas été transmise au document.
                Les données astrologiques et les interprétations
                Premium demeurent néanmoins disponibles dans les pages
                suivantes.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.identityCard}>
          <View
            style={styles.identityAccentLeft}
          />

          <View
            style={styles.identityAccentRight}
          />

          <Text style={styles.preparedFor}>
            Carte du ciel Premium préparée pour
          </Text>

          <Text style={styles.clientName}>
            {displayValue(
              firstName,
              "Votre nom"
            )}
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

        <View style={styles.explanationBox}>
          <View
            style={styles.explanationAccent}
          />

          <Text
            style={styles.explanationTitle}
          >
            Comment lire votre roue astrologique
          </Text>

          <Text style={styles.explanationText}>
            L’anneau extérieur présente les douze signes du zodiaque.
            Les maisons divisent la roue en douze secteurs représentant
            les principaux domaines de votre existence, comme
            l’identité, les relations, la famille, le travail et les
            aspirations personnelles.
          </Text>

          <Text style={styles.explanationText}>
            Les symboles indiquent la position exacte des planètes dans
            les signes et les maisons. Les lignes visibles au centre
            représentent les aspects astrologiques, c’est-à-dire les
            liens harmonieux, dynamiques ou plus exigeants entre les
            différentes énergies de votre thème.
          </Text>

          <Text
            style={styles.explanationTextLast}
          >
            Votre rapport Premium analysera progressivement ces
            composantes afin de mettre en lumière votre personnalité,
            vos réactions émotionnelles, vos forces naturelles, vos
            défis, vos relations et votre potentiel d’évolution.
          </Text>

          <Text style={styles.referenceNote}>
            Votre roue astrologique constitue la carte de référence de
            toutes les interprétations présentées dans ce rapport
            Premium.
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
