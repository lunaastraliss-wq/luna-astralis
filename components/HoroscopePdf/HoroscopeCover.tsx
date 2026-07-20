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
const DEEP_NAVY = "#030A14";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";

const GOLD = "#F4C95D";
const GOLD_LIGHT = "#FFE59A";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";
const VERY_DARK_GOLD = "#4D3B1C";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    backgroundColor: NAVY,
    paddingHorizontal: 44,
    paddingTop: 34,
    paddingBottom: 38,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  backgroundTopGlow: {
    position: "absolute",
    top: -125,
    left: 92,
    width: 410,
    height: 410,
    borderRadius: 205,
    borderWidth: 1,
    borderColor: VERY_DARK_GOLD,
  },

  backgroundTopGlowInner: {
    position: "absolute",
    top: -90,
    left: 128,
    width: 338,
    height: 338,
    borderRadius: 169,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  backgroundBottomGlow: {
    position: "absolute",
    bottom: -190,
    left: 128,
    width: 340,
    height: 340,
    borderRadius: 170,
    borderWidth: 0.8,
    borderColor: VERY_DARK_GOLD,
  },

  leftVerticalLine: {
    position: "absolute",
    top: 104,
    bottom: 104,
    left: 26,
    width: 1,
    backgroundColor: VERY_DARK_GOLD,
  },

  rightVerticalLine: {
    position: "absolute",
    top: 104,
    bottom: 104,
    right: 26,
    width: 1,
    backgroundColor: VERY_DARK_GOLD,
  },

  outerBorder: {
    position: "absolute",
    top: 22,
    bottom: 22,
    left: 22,
    right: 22,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
  },

  innerBorder: {
    position: "absolute",
    top: 28,
    bottom: 28,
    left: 28,
    right: 28,
    borderWidth: 0.35,
    borderColor: VERY_DARK_GOLD,
  },

  cornerTopLeft: {
    position: "absolute",
    top: 22,
    left: 22,
    width: 42,
    height: 42,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: GOLD,
  },

  cornerTopRight: {
    position: "absolute",
    top: 22,
    right: 22,
    width: 42,
    height: 42,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: GOLD,
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: 22,
    left: 22,
    width: 42,
    height: 42,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: GOLD,
  },

  cornerBottomRight: {
    position: "absolute",
    bottom: 22,
    right: 22,
    width: 42,
    height: 42,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: GOLD,
  },

  topStar: {
    position: "absolute",
    top: 42,
    left: 296,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
  },

  topStarLeft: {
    position: "absolute",
    top: 68,
    left: 92,
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: GOLD_LIGHT,
  },

  topStarRight: {
    position: "absolute",
    top: 82,
    right: 86,
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: GOLD,
  },

  middleStarLeft: {
    position: "absolute",
    top: 355,
    left: 61,
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: DARK_GOLD,
  },

  middleStarRight: {
    position: "absolute",
    top: 402,
    right: 63,
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: GOLD_LIGHT,
  },

  bottomStarLeft: {
    position: "absolute",
    bottom: 116,
    left: 91,
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: GOLD,
  },

  bottomStarRight: {
    position: "absolute",
    bottom: 145,
    right: 104,
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: DARK_GOLD,
  },

  content: {
    flex: 1,
    alignItems: "center",
    zIndex: 2,
  },

  logoSection: {
    alignItems: "center",
    marginTop: 3,
    marginBottom: 14,
  },

  logo: {
    width: 158,
    height: 56,
    objectFit: "contain",
    marginBottom: 10,
  },

  logoDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoLine: {
    width: 62,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  logoLineAccent: {
    width: 18,
    height: 1.4,
    backgroundColor: GOLD,
  },

  logoDecorIconFrame: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: DEEP_NAVY,
  },

  logoDecorIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  titleSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },

  smallLabelContainer: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: DARK_GOLD,
    marginBottom: 12,
  },

  smallLabel: {
    color: GOLD,
    fontSize: 8.5,
    letterSpacing: 3.2,
    textTransform: "uppercase",
    textAlign: "center",
  },

  title: {
    color: CREAM,
    fontSize: 30,
    lineHeight: 1.14,
    textAlign: "center",
    marginBottom: 10,
    maxWidth: 445,
  },

  subtitle: {
    color: MUTED_CREAM,
    fontSize: 11,
    lineHeight: 1.55,
    textAlign: "center",
    maxWidth: 390,
  },

  heroSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },

  zodiacHaloOuter: {
    width: 230,
    height: 230,
    borderRadius: 115,
    borderWidth: 0.5,
    borderColor: VERY_DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacHaloMiddle: {
    width: 214,
    height: 214,
    borderRadius: 107,
    borderWidth: 1,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacHaloAccent: {
    width: 198,
    height: 198,
    borderRadius: 99,
    borderWidth: 1.4,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacInnerFrame: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  zodiacIcon: {
    width: 116,
    height: 116,
    objectFit: "contain",
  },

  zodiacNameBand: {
    minWidth: 230,
    marginTop: -15,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: GOLD,
    backgroundColor: DEEP_NAVY,
    alignItems: "center",
  },

  zodiacName: {
    color: GOLD_LIGHT,
    fontSize: 23,
    textAlign: "center",
  },

  zodiacNameDecoration: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  zodiacNameLine: {
    width: 42,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  zodiacNameDiamond: {
    width: 6,
    height: 6,
    borderWidth: 1,
    borderColor: GOLD,
    marginHorizontal: 8,
    transform: "rotate(45deg)",
  },

  detailsSection: {
    width: "82%",
    alignItems: "center",
  },

  periodCardOuter: {
    width: "100%",
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    padding: 4,
    marginBottom: 10,
  },

  periodCard: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
  },

  periodLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.7,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  period: {
    color: CREAM,
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },

  personCard: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
  },

  personHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  personIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
    marginRight: 7,
  },

  personLabel: {
    color: MUTED_CREAM,
    fontSize: 7.2,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  personName: {
    color: "#FFF4C9",
    fontSize: 19,
    fontWeight: 600,
     letterSpacing: 0.3,
  marginTop: 3,
},

  footerDecoration: {
    position: "absolute",
    bottom: 48,
    left: 75,
    right: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  footerLineLong: {
    flex: 1,
    height: 1,
    backgroundColor: VERY_DARK_GOLD,
  },

  footerLineShort: {
    width: 24,
    height: 1.4,
    backgroundColor: GOLD,
  },

  footerIconFrame: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: DEEP_NAVY,
  },

  footerIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  footerText: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 2.1,
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
  const finalLogoUrl =
    logoUrl || HOROSCOPE_LOGO_URL;

  const finalZodiacIconUrl =
    zodiacIconUrl ||
    getHoroscopeZodiacIconUrl(identity.zodiacSign);

  const periodLabel =
    formatHoroscopePeriodLabel(period);

  const firstName =
    typeof identity.firstName === "string" &&
    identity.firstName.trim().length > 0
      ? identity.firstName.trim()
      : null;

  return (
    <Page size="A4" style={styles.page} wrap={false}>
      <View style={styles.backgroundTopGlow} />
      <View style={styles.backgroundTopGlowInner} />
      <View style={styles.backgroundBottomGlow} />

      <View style={styles.leftVerticalLine} />
      <View style={styles.rightVerticalLine} />

      <View style={styles.outerBorder} />
      <View style={styles.innerBorder} />

      <View style={styles.cornerTopLeft} />
      <View style={styles.cornerTopRight} />
      <View style={styles.cornerBottomLeft} />
      <View style={styles.cornerBottomRight} />

      <View style={styles.topStar} />
      <View style={styles.topStarLeft} />
      <View style={styles.topStarRight} />
      <View style={styles.middleStarLeft} />
      <View style={styles.middleStarRight} />
      <View style={styles.bottomStarLeft} />
      <View style={styles.bottomStarRight} />

      <View style={styles.content}>
        <View style={styles.logoSection}>
          <Image
            src={finalLogoUrl}
            style={styles.logo}
          />

          <View style={styles.logoDecoration}>
            <View style={styles.logoLine} />
            <View style={styles.logoLineAccent} />

            <View style={styles.logoDecorIconFrame}>
              <Image
                src={finalZodiacIconUrl}
                style={styles.logoDecorIcon}
              />
            </View>

            <View style={styles.logoLineAccent} />
            <View style={styles.logoLine} />
          </View>
        </View>

        <View style={styles.titleSection}>
          <View style={styles.smallLabelContainer}>
            <Text style={styles.smallLabel}>
              Luna Astralis
            </Text>
          </View>

          <Text style={styles.title}>
            {reportTitle}
          </Text>

          <Text style={styles.subtitle}>
            {reportSubtitle ||
              "Votre guidance astrologique personnalisée"}
          </Text>
        </View>

        <View style={styles.heroSection}>
          <View style={styles.zodiacHaloOuter}>
            <View style={styles.zodiacHaloMiddle}>
              <View style={styles.zodiacHaloAccent}>
                <View style={styles.zodiacInnerFrame}>
                  <Image
                    src={finalZodiacIconUrl}
                    style={styles.zodiacIcon}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.zodiacNameBand}>
            <Text style={styles.zodiacName}>
              {identity.zodiacSignLabel}
            </Text>

            <View style={styles.zodiacNameDecoration}>
              <View style={styles.zodiacNameLine} />
              <View style={styles.zodiacNameDiamond} />
              <View style={styles.zodiacNameLine} />
            </View>
          </View>
        </View>

        <View style={styles.detailsSection}>
          <View
            style={styles.periodCardOuter}
            wrap={false}
          >
            <View style={styles.periodCard}>
              <Text style={styles.periodLabel}>
                Période astrologique
              </Text>

              <Text style={styles.period}>
                {periodLabel}
              </Text>
            </View>
          </View>

          {firstName ? (
            <View
              style={styles.personCard}
              wrap={false}
            >
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
      </View>

      <View style={styles.footerDecoration}>
        <View style={styles.footerLineLong} />
        <View style={styles.footerLineShort} />

        <View style={styles.footerIconFrame}>
          <Image
            src={finalZodiacIconUrl}
            style={styles.footerIcon}
          />
        </View>

        <View style={styles.footerLineShort} />
        <View style={styles.footerLineLong} />
      </View>

      <Text style={styles.footerText}>
        Horoscope personnalisé
      </Text>
    </Page>
  );
}
