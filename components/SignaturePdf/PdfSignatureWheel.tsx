import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { pdfStyles } from "./SignaturePdfStyles";

import type {
  SignaturePdfProps,
} from "./SignaturePdfTypes";

import {
  getSignatureWheelDictionary,
} from "./SignaturePdfI18n";

import PdfSignatureBrandHeader from "./PdfSignatureBrandHeader";

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
    marginBottom: 5,
  },

  signatureBadge: {
    alignSelf: "center",
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingHorizontal: 12,
    marginBottom: 4,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 0.7,
    borderColor: GOLD,
  },

  signatureBadgeText: {
    color: BRIGHT_GOLD,
    fontSize: 6.2,
    letterSpacing: 1.7,
    textTransform: "uppercase",
    textAlign: "center",
  },

  eyebrow: {
    color: "#cdbb92",
    fontSize: 6.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  title: {
    color: BRIGHT_GOLD,
    fontSize: 22,
    lineHeight: 1.1,
    textAlign: "center",
    marginBottom: 4,
  },

  titleLine: {
    width: 86,
    height: 0.8,
    backgroundColor: GOLD,
    marginBottom: 5,
  },

  intro: {
    width: "88%",
    color: MUTED,
    fontSize: 7.8,
    lineHeight: 1.3,
    textAlign: "center",
  },

  wheelFrame: {
    position: "relative",
    alignSelf: "center",
    width: 426,
    height: 426,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    marginBottom: 7,
    backgroundColor: PAGE_BACKGROUND,
    borderWidth: 0.9,
    borderColor: SOFT_GOLD,
  },

  wheelFrameInner: {
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
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
    width: 410,
    height: 410,
    objectFit: "contain",
  },

  wheelMissing: {
    width: 390,
    height: 390,
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

  identityCard: {
    position: "relative",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 16,
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
    fontSize: 5.8,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 3,
  },

  clientName: {
    color: CREAM,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },

  infoDivider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#705a35",
    marginBottom: 5,
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
    fontSize: 5,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 1.5,
  },

  infoValue: {
    color: CREAM,
    fontSize: 7.7,
    lineHeight: 1.2,
    textAlign: "center",
  },
});

function displayValue(
  value: string | undefined,
  fallback: string
): string {
  const cleanValue =
    typeof value === "string"
      ? value.trim()
      : "";

  return cleanValue || fallback;
}

export default function PdfSignatureWheel({
  locale = "fr",
  firstName,
  birthDate,
  birthTime,
  birthCity,
  wheelImage,
}: SignaturePdfProps) {
  const t =
    getSignatureWheelDictionary(
      locale
    );

  const missingValue =
    t["non_precise"] ||
    "Non précisé";

  const defaultName =
    t["votre_nom"] ||
    "Votre nom";

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
      <PdfSignatureBrandHeader />

      <View style={styles.pageContent}>
        <View style={styles.titleSection}>
          <View
            style={styles.signatureBadge}
          >
            <Text
              style={
                styles.signatureBadgeText
              }
            >
              {
                t[
                  "lecture_signature"
                ]
              }
            </Text>
          </View>

          <Text style={styles.eyebrow}>
            {
              t[
                "la_structure_de_votre_theme_natal"
              ]
            }
          </Text>

          <Text style={styles.title}>
            {
              t[
                "votre_roue_astrologique"
              ]
            }
          </Text>

          <View
            style={styles.titleLine}
          />

          <Text style={styles.intro}>
            {
              t[
                "la_configuration_du_ciel_au_moment_precis_de_votre_naissance"
              ]
            }
          </Text>
        </View>

        <View style={styles.wheelFrame}>
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
                {
                  t[
                    "roue_astrologique_indisponible"
                  ]
                }
              </Text>

              <Text
                style={
                  styles.wheelMissingText
                }
              >
                {
                  t[
                    "l_image_de_la_roue_n_a_pas_ete_transmise_au_document_les_int"
                  ]
                }
              </Text>
            </View>
          )}
        </View>

        <View
          style={styles.identityCard}
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
            {
              t[
                "carte_du_ciel_signature_preparee_pour"
              ]
            }
          </Text>

          <Text
            style={styles.clientName}
          >
            {displayValue(
              firstName,
              defaultName
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
                {
                  t[
                    "date_de_naissance"
                  ]
                }
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthDate,
                  missingValue
                )}
              </Text>
            </View>

            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                {
                  t[
                    "heure_de_naissance"
                  ]
                }
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthTime,
                  missingValue
                )}
              </Text>
            </View>

            <View
              style={styles.infoColumn}
            >
              <Text
                style={styles.infoLabel}
              >
                {
                  t[
                    "lieu_de_naissance"
                  ]
                }
              </Text>

              <Text
                style={styles.infoValue}
              >
                {displayValue(
                  birthCity,
                  missingValue
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}
