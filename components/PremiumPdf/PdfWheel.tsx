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
   * En-tête de la page
   */
  titleSection: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 8,
  },

  premiumBadge: {
    alignSelf: "center",
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,
    marginBottom: 6,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 0.7,
    borderColor: GOLD,
  },

  premiumBadgeText: {
    fontSize: 6.4,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: BRIGHT_GOLD,
    textAlign: "center",
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
    width: "84%",
    fontSize: 9.1,
    lineHeight: 1.45,
    color: MUTED,
    textAlign: "center",
  },

  /*
   * Encadrement de la roue
   */
  wheelFrame: {
    position: "relative",
    alignSelf: "center",

    width: 430,
    height: 430,

    borderWidth: 0.9,
    borderColor: SOFT_GOLD,

    backgroundColor: PAGE_BACKGROUND,

    alignItems: "center",
    justifyContent: "center",

    padding: 10,
    marginBottom: 8,
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
    width: 408,
    height: 408,
    objectFit: "contain",
  },

  /*
   * État de remplacement si la roue est absente
   */
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

  /*
   * Informations de naissance
   */
  identityCard: {
    position: "relative",

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,

    backgroundColor: CARD_BACKGROUND,

    paddingTop: 9,
    paddingBottom: 9,
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

  /*
   * Explication Premium
   */
  explanationBox: {
    position: "relative",

    marginTop: 12,

    borderWidth: 0.6,
    borderColor: "#6f5935",

    backgroundColor: CARD_BACKGROUND,

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },

  explanationAccent: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 88,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  explanationTitle: {
    fontSize: 10,
    color: BRIGHT_GOLD,
    textAlign: "center",
    marginBottom: 6,
  },

  explanationText: {
    fontSize: 7.4,
    lineHeight: 1.45,
    color: MUTED,
    textAlign: "center",
    marginBottom: 5,
  },

  explanationTextLast: {
    fontSize: 7.4,
    lineHeight: 1.45,
    color: MUTED,
    textAlign: "center",
  },

  note: {
    fontSize: 6.8,
    lineHeight: 1.4,
    color: "#bfb6a6",
    textAlign: "center",
    marginTop: 6,
    paddingHorizontal: 22,
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
    >
      <PdfBrandHeader />

      <View style={styles.pageContent}>
        <View
          style={styles.titleSection}
          wrap={false}
        >
          <View
            style={styles.premiumBadge}
          >
            <Text
              style={
                styles.premiumBadgeText
              }
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

          <View
            style={styles.titleLine}
          />

          <Text style={styles.intro}>
            Cette roue représente la configuration complète du ciel au
            moment précis de votre naissance. Elle rassemble les
            planètes, les signes, les maisons, les angles et les
            principales relations astrologiques de votre thème natal.
          </Text>
        </View>

        <View
          style={styles.wheelFrame}
          wrap={false}
        >
          <View
            style={
              styles.wheelFrameInner
            }
          />

          <View
            style={
              styles.wheelAccentTop
            }
          />

          <View
            style={
              styles.wheelAccentBottom
            }
          />

          {safeWheelImage ? (
            <Image
              src={safeWheelImage}
              style={styles.wheelImage}
            />
          ) : (
            <View
              style={styles.wheelMissing}
            >
              <Text
                style={
                  styles.wheelMissingSymbol
                }
              >
                ✦
              </Text>

              <Text
                style={
                  styles.wheelMissingTitle
                }
              >
                Roue astrologique indisponible
              </Text>

              <Text
                style={
                  styles.wheelMissingText
                }
              >
                L’image de la roue n’a pas été transmise au document.
                Les données astrologiques et les interprétations
                Premium demeurent néanmoins disponibles dans les pages
                suivantes.
              </Text>
            </View>
          )}
        </View>

        <View
          style={styles.identityCard}
          wrap={false}
        >
          <View
            style={
              styles.identityAccentLeft
            }
          />

          <View
            style={
              styles.identityAccentRight
            }
          />

          <Text
            style={styles.preparedFor}
          >
            Carte du ciel Premium préparée pour
          </Text>

          <Text
            style={styles.clientName}
          >
            {displayValue(
              firstName,
              "Votre nom"
            )}
          </Text>

          <View
            style={styles.infoDivider}
          />

          <View style={styles.infoRow}>
            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                Date de naissance
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthDate
                )}
              </Text>
            </View>

            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                Heure de naissance
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthTime
                )}
              </Text>
            </View>

            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                Lieu de naissance
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthCity
                )}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={styles.explanationBox}
          wrap={false}
        >
          <View
            style={
              styles.explanationAccent
            }
          />

          <Text
            style={
              styles.explanationTitle
            }
          >
            Comment lire votre roue astrologique
          </Text>

          <Text
            style={
              styles.explanationText
            }
          >
            L’anneau extérieur présente les douze signes du zodiaque.
            Les maisons divisent la roue en douze secteurs représentant
            les principaux domaines de votre existence, comme
            l’identité, les relations, la famille, le travail et les
            aspirations personnelles.
          </Text>

          <Text
            style={
              styles.explanationText
            }
          >
            Les symboles indiquent la position exacte des planètes dans
            les signes et les maisons. Les lignes visibles au centre
            représentent les aspects astrologiques, c’est-à-dire les
            liens harmonieux, dynamiques ou plus exigeants entre les
            différentes énergies de votre thème.
          </Text>

          <Text
            style={
              styles.explanationTextLast
            }
          >
            Votre rapport Premium analysera progressivement ces
            composantes afin de mettre en lumière votre personnalité,
            vos réactions émotionnelles, vos forces naturelles, vos
            défis, vos relations et votre potentiel d’évolution.
          </Text>
        </View>

        <Text style={styles.note}>
          Votre roue astrologique constitue la carte de référence de
          toutes les interprétations présentées dans ce rapport
          Premium.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
