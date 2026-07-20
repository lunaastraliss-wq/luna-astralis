import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  HOROSCOPE_LOGO_URL,
} from "./HoroscopePdfAssets";

import type {
  HoroscopeCoverProps,
} from "./HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
} from "./HoroscopePdfUtils";

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    backgroundColor: NAVY,
    paddingHorizontal: 52,
    paddingTop: 45,
    paddingBottom: 44,
    fontFamily: "Helvetica",
  },

  content: {
    flex: 1,
    alignItems: "center",
  },

  logoSection: {
    alignItems: "center",
    marginBottom: 33,
  },

  logo: {
    width: 150,
    height: 54,
    objectFit: "contain",
    marginBottom: 12,
  },

  logoDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoLine: {
    width: 50,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  logoDecorIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  titleSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 27,
  },

  smallLabel: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 14,
  },

  title: {
    color: CREAM,
    fontSize: 29,
    lineHeight: 1.18,
    textAlign: "center",
    marginBottom: 11,
    maxWidth: 440,
  },

  subtitle: {
    color: MUTED_CREAM,
    fontSize: 11.5,
    lineHeight: 1.55,
    textAlign: "center",
    maxWidth: 410,
  },

  zodiacSection: {
    alignItems: "center",
    marginBottom: 21,
  },

  zodiacFrameOuter: {
    width: 206,
    height: 206,
    borderRadius: 103,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  zodiacFrame: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 1.1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacInnerFrame: {
    width: 164,
    height: 164,
    borderRadius: 82,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacIcon: {
    width: 108,
    height: 108,
    objectFit: "contain",
  },

  zodiacName: {
    color: GOLD,
    fontSize: 23,
    marginBottom: 8,
    textAlign: "center",
  },

  zodiacUnderline: {
    flexDirection: "row",
    alignItems: "center",
  },

  zodiacUnderlineLong: {
    width: 36,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  zodiacUnderlineIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
    marginHorizontal: 8,
  },

  periodCard: {
    minWidth: 250,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    marginBottom: 18,
  },

  periodLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  period: {
    color: CREAM,
    fontSize: 12.5,
    textAlign: "center",
  },

  personCard: {
    width: "84%",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
  },

  personHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  personIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 7,
  },

  personLabel: {
    color: MUTED_CREAM,
    fontSize: 7.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  personName: {
    color: CREAM,
    fontSize: 14,
  },

  footerDecoration: {
    position: "absolute",
    bottom: 29,
    left: 52,
    right: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  footerLine: {
    width: 58,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  footerIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
    marginHorizontal: 9,
  },

  footerText: {
    position: "absolute",
    bottom: 14,
    left: 0,
    right: 0,
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default function HoroscopeCover({
  identity,
  period,
  reportTitle,
  reportSubtitle,
  logoUrl,
  zodiacIconUrl,
}: HoroscopeCoverProps) {
  const finalLogoUrl = logoUrl || HOROSCOPE_LOGO_URL;

  const finalZodiacIconUrl =
    zodiacIconUrl ||
    getHoroscopeZodiacIconUrl(identity.zodiacSign);

  const periodLabel = formatHoroscopePeriodLabel(period);

  const firstName =
    typeof identity.firstName === "string" &&
    identity.firstName.trim().length > 0
      ? identity.firstName.trim()
      : null;

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.content}>
        <View style={styles.logoSection}>
          <Image
            src={finalLogoUrl}
            style={styles.logo}
          />

          <View style={styles.logoDecoration}>
            <View style={styles.logoLine} />

            <Image
              src={finalZodiacIconUrl}
              style={styles.logoDecorIcon}
            />

            <View style={styles.logoLine} />
          </View>
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.smallLabel}>
            Luna Astralis
          </Text>

          <Text style={styles.title}>
            {reportTitle}
          </Text>

          <Text style={styles.subtitle}>
            {reportSubtitle ||
              "Votre guidance astrologique personnalisée"}
          </Text>
        </View>

        <View style={styles.zodiacSection}>
          <View style={styles.zodiacFrameOuter}>
            <View style={styles.zodiacFrame}>
              <View style={styles.zodiacInnerFrame}>
                <Image
                  src={finalZodiacIconUrl}
                  style={styles.zodiacIcon}
                />
              </View>
            </View>
          </View>

          <Text style={styles.zodiacName}>
            {identity.zodiacSignLabel}
          </Text>

          <View style={styles.zodiacUnderline}>
            <View style={styles.zodiacUnderlineLong} />

            <Image
              src={finalZodiacIconUrl}
              style={styles.zodiacUnderlineIcon}
            />

            <View style={styles.zodiacUnderlineLong} />
          </View>
        </View>

        <View style={styles.periodCard} wrap={false}>
          <Text style={styles.periodLabel}>
            Période astrologique
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>
        </View>

        {firstName ? (
          <View style={styles.personCard} wrap={false}>
            <View style={styles.personHeader}>
              <Image
                src={finalZodiacIconUrl}
                style={styles.personIcon}
              />

              <Text style={styles.personLabel}>
                Préparé spécialement pour
              </Text>
            </View>

            <Text style={styles.personName}>
              {firstName}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.footerDecoration}>
        <View style={styles.footerLine} />

        <Image
          src={finalZodiacIconUrl}
          style={styles.footerIcon}
        />

        <View style={styles.footerLine} />
      </View>

      <Text style={styles.footerText}>
        Horoscope personnalisé
      </Text>
    </Page>
  );
}
