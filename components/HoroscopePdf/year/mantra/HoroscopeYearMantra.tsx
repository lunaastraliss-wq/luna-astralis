import {
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

/* Évite les mots coupés automatiquement en fin de ligne. */
Font.registerHyphenationCallback((word) => [word]);

import {
  HOROSCOPE_ICONS,
  HOROSCOPE_LOGO_URL,
} from "../../HoroscopePdfAssets";

import HoroscopePageFooter
  from "../../HoroscopePageFooter";

import HoroscopeStarBackground
  from "../../HoroscopeStarBackground";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
} from "../../HoroscopePdfUtils";

import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../../HoroscopePdfTypes";

import type {
  YearlyMantraResult,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Couleurs Luna Astralis
|--------------------------------------------------------------------------
*/

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const NAVY_SOFT = "#101F35";

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";

const DARK_GOLD = "#8F6E35";
const DEEP_GOLD = "#4E412D";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type HoroscopeYearMantraProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  mantra: YearlyMantraResult;
};

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 30,
    paddingHorizontal: 42,
    paddingBottom: 50,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
  },

  /*
  |--------------------------------------------------------------------------
  | En-tête
  |--------------------------------------------------------------------------
  */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  logo: {
    width: 108,
    height: 38,
    objectFit: "contain",
  },

  signBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 18,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  signIcon: {
    width: 22,
    height: 22,
    marginRight: 7,
    objectFit: "contain",
  },

  signName: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  /*
  |--------------------------------------------------------------------------
  | Titre
  |--------------------------------------------------------------------------
  */

  titleBlock: {
    marginBottom: 15,
  },

  eyebrow: {
    marginBottom: 7,
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.4,
    textTransform: "uppercase",
  },

  title: {
    maxWidth: 430,
    marginBottom: 7,
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.2,
  },

  period: {
    marginBottom: 9,
    color: MUTED_CREAM,
    fontSize: 9.7,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 62,
    height: 1,
    marginRight: 9,
    backgroundColor: GOLD,
  },

  titleIcon: {
    width: 16,
    height: 16,
    marginRight: 9,
    objectFit: "contain",
  },

  titleLineSmall: {
    width: 22,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  /*
  |--------------------------------------------------------------------------
  | Mantra principal
  |--------------------------------------------------------------------------
  */

  mantraCard: {
    position: "relative",
    minHeight: 150,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    paddingVertical: 22,
    paddingHorizontal: 30,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  mantraOrbitOne: {
    position: "absolute",
    top: -88,
    right: -75,
    width: 185,
    height: 185,
    borderRadius: 93,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  mantraOrbitTwo: {
    position: "absolute",
    top: -43,
    right: -31,
    width: 102,
    height: 102,
    borderRadius: 51,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },

  mantraWatermark: {
    position: "absolute",
    top: 20,
    right: 24,
    width: 92,
    height: 92,
    objectFit: "contain",
    opacity: 0.05,
  },

  mantraIconCircle: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
    borderRadius: 20,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_SOFT,
  },

  mantraIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  mantraLabel: {
    marginBottom: 10,
    color: GOLD,
    fontSize: 7.2,
    letterSpacing: 1.65,
    textAlign: "center",
    textTransform: "uppercase",
  },

  mantraText: {
    maxWidth: 445,
    color: CREAM,
    fontSize: 16.5,
    lineHeight: 1.42,
    textAlign: "center",
  },

  /*
  |--------------------------------------------------------------------------
  | Intention et affirmation
  |--------------------------------------------------------------------------
  */

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionLine: {
    width: 28,
    height: 1,
    marginRight: 9,
    backgroundColor: GOLD,
  },

  sectionHeaderIcon: {
    width: 16,
    height: 16,
    marginRight: 9,
    objectFit: "contain",
  },

  sectionHeaderTitle: {
    color: GOLD,
    fontSize: 9.3,
    letterSpacing: 1.45,
    textTransform: "uppercase",
  },

  sectionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    alignItems: "stretch",
  },

  sectionCard: {
    position: "relative",
    width: "48.8%",
    minHeight: 166,
    paddingTop: 13,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  cardOrbit: {
    position: "absolute",
    top: -54,
    right: -50,
    width: 115,
    height: 115,
    borderRadius: 58,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  sectionCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  sectionNumberCircle: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 17,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_SOFT,
  },

  sectionNumber: {
    color: GOLD,
    fontSize: 12,
    lineHeight: 1,
  },

  sectionTitleBlock: {
    flex: 1,
  },

  sectionSmallLabel: {
    marginBottom: 3,
    color: SOFT_TEXT,
    fontSize: 6,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  sectionTitle: {
    color: GOLD,
    fontSize: 9.5,
    lineHeight: 1.25,
  },

  sectionText: {
    color: MUTED_CREAM,
    fontSize: 8.15,
    lineHeight: 1.42,
  },

  /*
  |--------------------------------------------------------------------------
  | Message Luna Astralis
  |--------------------------------------------------------------------------
  */

  messageCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 96,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2.2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_SOFT,
    overflow: "hidden",
  },

  messageWatermark: {
    position: "absolute",
    top: 8,
    right: 18,
    width: 74,
    height: 74,
    objectFit: "contain",
    opacity: 0.05,
  },

  messageIconCircle: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
    borderRadius: 21,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  messageIcon: {
    width: 25,
    height: 25,
    objectFit: "contain",
  },

  messageContent: {
    flex: 1,
  },

  messageLabel: {
    marginBottom: 5,
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.15,
    textTransform: "uppercase",
  },

  messageText: {
    maxWidth: 420,
    color: CREAM,
    fontSize: 8.25,
    lineHeight: 1.42,
  },

  mantraTextCompact: {
    fontSize: 15,
    lineHeight: 1.36,
  },

  sectionTextCompact: {
    fontSize: 7.55,
    lineHeight: 1.34,
  },

  messageTextCompact: {
    fontSize: 7.75,
    lineHeight: 1.34,
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeYearMantra({
  identity,
  period,
  mantra,
}: HoroscopeYearMantraProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(
      period,
    );

  const personLabel =
    identity.firstName?.trim() ||
    identity.zodiacSignLabel ||
    "Votre signe";

  const mantraText = mantra.mantra.trim();
  const intentionText = mantra.intention.trim();
  const affirmationText = mantra.affirmation.trim();
  const messageText = mantra.message.trim();

  const useCompactMantra = mantraText.length > 95;
  const useCompactSections =
    Math.max(intentionText.length, affirmationText.length) > 360;
  const useCompactMessage = messageText.length > 430;

  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      <HoroscopeStarBackground />

      <View style={styles.content}>
        {/*
        |--------------------------------------------------------------------------
        | En-tête
        |--------------------------------------------------------------------------
        */}

        <View style={styles.header}>
          <Image
            src={HOROSCOPE_LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.signBadge}>
            <Image
              src={zodiacIconUrl}
              style={styles.signIcon}
            />

            <Text style={styles.signName}>
              {identity.zodiacSignLabel}
            </Text>
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Titre
        |--------------------------------------------------------------------------
        */}

        <View style={styles.titleBlock}>
          <Text style={styles.eyebrow}>
            Guidance intérieure
          </Text>

          <Text style={styles.title}>
            Votre mantra de l’année
          </Text>

          <Text style={styles.period}>
            {personLabel} • {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.soulPath}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Mantra principal
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.mantraCard}
          wrap={false}
        >
          <View style={styles.mantraOrbitOne} />
          <View style={styles.mantraOrbitTwo} />

          <Image
            src={HOROSCOPE_ICONS.soulPath}
            style={styles.mantraWatermark}
          />

          <View style={styles.mantraIconCircle}>
            <Image
              src={HOROSCOPE_ICONS.soulPath}
              style={styles.mantraIcon}
            />
          </View>

          <Text style={styles.mantraLabel}>
            À méditer tout au long de l’année
          </Text>

          <Text
            style={[
              styles.mantraText,
              useCompactMantra ? styles.mantraTextCompact : {},
            ]}
          >
            « {mantraText} »
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Intention et affirmation
        |--------------------------------------------------------------------------
        */}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.sun}
            style={styles.sectionHeaderIcon}
          />

          <Text style={styles.sectionHeaderTitle}>
            Votre pratique intérieure
          </Text>
        </View>

        <View style={styles.sectionsRow}>
          <View
            style={styles.sectionCard}
            wrap={false}
          >
            <View style={styles.cardOrbit} />

            <View style={styles.sectionCardHeader}>
              <View style={styles.sectionNumberCircle}>
                <Text style={styles.sectionNumber}>
                  1
                </Text>
              </View>

              <View style={styles.sectionTitleBlock}>
                <Text style={styles.sectionSmallLabel}>
                  Direction de l’année
                </Text>

                <Text style={styles.sectionTitle}>
                  Votre intention
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.sectionText,
                useCompactSections ? styles.sectionTextCompact : {},
              ]}
            >
              {intentionText}
            </Text>
          </View>

          <View
            style={styles.sectionCard}
            wrap={false}
          >
            <View style={styles.cardOrbit} />

            <View style={styles.sectionCardHeader}>
              <View style={styles.sectionNumberCircle}>
                <Text style={styles.sectionNumber}>
                  2
                </Text>
              </View>

              <View style={styles.sectionTitleBlock}>
                <Text style={styles.sectionSmallLabel}>
                  Parole consciente
                </Text>

                <Text style={styles.sectionTitle}>
                  Votre affirmation
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.sectionText,
                useCompactSections ? styles.sectionTextCompact : {},
              ]}
            >
              {affirmationText}
            </Text>
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Message Luna Astralis
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.messageCard}
          wrap={false}
        >
          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.messageWatermark}
          />

          <View style={styles.messageIconCircle}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.messageIcon}
            />
          </View>

          <View style={styles.messageContent}>
            <Text style={styles.messageLabel}>
              Message de Luna Astralis
            </Text>

            <Text
              style={[
                styles.messageText,
                useCompactMessage ? styles.messageTextCompact : {},
              ]}
            >
              {messageText}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
