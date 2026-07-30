import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  HOROSCOPE_ICONS,
  HOROSCOPE_LOGO_URL,
} from "../HoroscopePdfAssets";

import HoroscopePageFooter
  from "../HoroscopePageFooter";

import HoroscopeStarBackground
  from "../HoroscopeStarBackground";

import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
  normalizeHoroscopeScore,
} from "../HoroscopePdfUtils";

import type {
  YearOverviewResult,
} from "./data/types";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type YearPremiumIconKey =
  | "sun"
  | "moon"
  | "mercury"
  | "venus"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto"
  | "heart"
  | "money"
  | "hiddenTalents"
  | "innerWorld"
  | "integrationGuide"
  | "lifeBlocks"
  | "lifePurpose"
  | "soulPath";

type HoroscopeYearOverviewProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  overview: YearOverviewResult;
};

/*
|--------------------------------------------------------------------------
| Couleurs
|--------------------------------------------------------------------------
*/

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const NAVY_SOFT = "#101F35";
const TRACK = "#202C3E";

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

/*
|--------------------------------------------------------------------------
| Résolution sécurisée des PNG
|--------------------------------------------------------------------------
*/

const ICONS =
  HOROSCOPE_ICONS as Record<string, string>;

function cleanIconUrl(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function getIcon(
  iconKey: YearPremiumIconKey,
  fallbackKey: YearPremiumIconKey = "integrationGuide",
): string {
  const requestedIcon =
    cleanIconUrl(ICONS[iconKey]);

  if (requestedIcon) {
    return requestedIcon;
  }

  const fallbackIcon =
    cleanIconUrl(ICONS[fallbackKey]);

  if (fallbackIcon) {
    return fallbackIcon;
  }

  return (
    Object.values(ICONS)
      .map(cleanIconUrl)
      .find(Boolean) || ""
  );
}

const AXIS_ICON_KEYS: YearPremiumIconKey[] = [
  "sun",
  "jupiter",
  "innerWorld",
];

const PAGE_ICON =
  getIcon("integrationGuide", "sun");

const HERO_ICON =
  getIcon("integrationGuide", "sun");

const ENERGY_ICON =
  getIcon("sun", "integrationGuide");

const DOMINANT_ICON =
  getIcon("sun", "integrationGuide");

const AXES_SECTION_ICON =
  getIcon("hiddenTalents", "integrationGuide");

const ADVICE_ICON =
  getIcon("integrationGuide", "sun");

const DIRECTION_ICON =
  getIcon("soulPath", "integrationGuide");

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 34,
    paddingHorizontal: 40,
    paddingBottom: 54,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  content: {
    position: "relative",
    zIndex: 3,
    flex: 1,
  },

  orbitLarge: {
    position: "absolute",
    top: 104,
    right: -104,
    width: 270,
    height: 270,
    borderRadius: 135,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    opacity: 0.3,
  },

  orbitMedium: {
    position: "absolute",
    top: 145,
    right: -66,
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 0.45,
    borderColor: GOLD,
    opacity: 0.18,
  },

  orbitSmall: {
    position: "absolute",
    bottom: 82,
    left: -68,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 0.45,
    borderColor: DARK_GOLD,
    opacity: 0.24,
  },

  orbitDot: {
    position: "absolute",
    top: 196,
    right: 50,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
    opacity: 0.72,
  },

  watermark: {
    position: "absolute",
    right: -8,
    bottom: 12,
    width: 116,
    height: 116,
    objectFit: "contain",
    opacity: 0.045,
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
    marginBottom: 14,
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
    objectFit: "contain",
    marginRight: 7,
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
    marginBottom: 11,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 8.8,
    letterSpacing: 2.3,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.18,
    marginBottom: 6,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.4,
    marginBottom: 8,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 62,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  titleIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 8,
  },

  titleLineSmall: {
    width: 20,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  /*
  |--------------------------------------------------------------------------
  | Carte principale
  |--------------------------------------------------------------------------
  */

  heroCard: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderRadius: 15,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 10,
  },

  heroGlow: {
    position: "absolute",
    top: -46,
    right: -28,
    width: 138,
    height: 138,
    borderRadius: 69,
    borderWidth: 0.65,
    borderColor: GOLD,
    opacity: 0.17,
  },

  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  heroIdentity: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    paddingRight: 14,
  },

  heroIconBox: {
    width: 50,
    height: 50,
    flexShrink: 0,
    borderRadius: 25,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  heroIcon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },

  heroHeading: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },

  heroLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.3,
  },

  scoreBadgeOuter: {
    width: 70,
    height: 70,
    flexShrink: 0,
    borderRadius: 35,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreBadge: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreNumber: {
    color: GOLD,
    fontSize: 18,
  },

  scoreOutOf: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    marginTop: 1,
  },

  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  heroDividerLine: {
    width: 32,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  heroDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 8.3,
    lineHeight: 1.45,
    marginBottom: 6,
  },

  summaryText: {
    color: CREAM,
    fontSize: 8.7,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  /*
  |--------------------------------------------------------------------------
  | Intensité annuelle
  |--------------------------------------------------------------------------
  */

  energyCard: {
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 10,
  },

  energyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  energyLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    paddingRight: 10,
  },

  energyIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 7,
  },

  energyLabel: {
    color: CREAM,
    fontSize: 8.3,
  },

  energyValue: {
    color: GOLD,
    fontSize: 8.8,
  },

  energyTrack: {
    width: "100%",
    height: 7,
    borderRadius: 3.5,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  energyFill: {
    height: 7,
    borderRadius: 3.5,
    backgroundColor: GOLD,
  },

  /*
  |--------------------------------------------------------------------------
  | Thème dominant
  |--------------------------------------------------------------------------
  */

  dominantCard: {
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 10,
  },

  dominantWatermark: {
    position: "absolute",
    right: -6,
    bottom: -14,
    width: 72,
    height: 72,
    objectFit: "contain",
    opacity: 0.05,
  },

  dominantIconBox: {
    width: 34,
    height: 34,
    flexShrink: 0,
    borderRadius: 17,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  dominantIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
  },

  dominantBody: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    paddingRight: 22,
  },

  dominantLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.15,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  dominantText: {
    color: CREAM,
    fontSize: 7.5,
    lineHeight: 1.4,
  },

  /*
  |--------------------------------------------------------------------------
  | Axes de l’année
  |--------------------------------------------------------------------------
  */

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  sectionLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  sectionIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionTitle: {
    color: GOLD,
    fontSize: 9.1,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  axesGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  axisCard: {
    position: "relative",
    width: "31.7%",
    minHeight: 104,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  axisWatermark: {
    position: "absolute",
    right: -8,
    bottom: -10,
    width: 54,
    height: 54,
    objectFit: "contain",
    opacity: 0.045,
  },

  axisNumberBox: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },

  axisNumber: {
    color: GOLD,
    fontSize: 9,
  },

  axisTitle: {
    color: GOLD,
    fontSize: 8,
    lineHeight: 1.25,
    marginBottom: 5,
  },

  axisText: {
    color: MUTED_CREAM,
    fontSize: 6.7,
    lineHeight: 1.38,
    paddingRight: 4,
  },

  /*
  |--------------------------------------------------------------------------
  | Conseil et conclusion
  |--------------------------------------------------------------------------
  */

  bottomGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  bottomCard: {
    position: "relative",
    overflow: "hidden",
    width: "48.8%",
    minHeight: 75,
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 11,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  bottomCardHighlighted: {
    borderTopWidth: 1.3,
    borderTopColor: GOLD,
  },

  bottomHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  bottomIconBox: {
    width: 26,
    height: 26,
    flexShrink: 0,
    borderRadius: 13,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  bottomIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
  },

  bottomLabel: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    color: GOLD,
    fontSize: 7,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  bottomText: {
    color: CREAM,
    fontSize: 6.9,
    lineHeight: 1.4,
  },

  bottomWatermark: {
    position: "absolute",
    right: -5,
    bottom: -10,
    width: 54,
    height: 54,
    objectFit: "contain",
    opacity: 0.04,
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeYearOverview({
  identity,
  period,
  overview,
}: HoroscopeYearOverviewProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(period);

  const safeScore =
    normalizeHoroscopeScore(
      overview.score,
    );

  const axes =
    Array.isArray(overview.axes)
      ? overview.axes.slice(0, 3)
      : [];

  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      <HoroscopeStarBackground />

      <View style={styles.orbitLarge} />
      <View style={styles.orbitMedium} />
      <View style={styles.orbitSmall} />
      <View style={styles.orbitDot} />

      <Image
        src={PAGE_ICON}
        style={styles.watermark}
      />

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
            Horoscope annuel
          </Text>

          <Text style={styles.title}>
            Les grandes tendances de l’année
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View
            style={styles.titleDecoration}
          >
            <View style={styles.titleLine} />

            <Image
              src={PAGE_ICON}
              style={styles.titleIcon}
            />

            <View
              style={styles.titleLineSmall}
            />
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Vue générale
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.heroCard}
          wrap={false}
        >
          <View style={styles.heroGlow} />

          <View style={styles.heroTopRow}>
            <View style={styles.heroIdentity}>
              <View
                style={styles.heroIconBox}
              >
                <Image
                  src={HERO_ICON}
                  style={styles.heroIcon}
                />
              </View>

              <View
                style={styles.heroHeading}
              >
                <Text
                  style={styles.heroLabel}
                >
                  L’année en un regard
                </Text>

                <Text
                  style={styles.heroTitle}
                >
                  {overview.title}
                </Text>
              </View>
            </View>

            <View
              style={
                styles.scoreBadgeOuter
              }
            >
              <View
                style={styles.scoreBadge}
              >
                <Text
                  style={styles.scoreNumber}
                >
                  {safeScore}
                </Text>

                <Text
                  style={styles.scoreOutOf}
                >
                  sur 100
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.heroDivider}>
            <View
              style={
                styles.heroDividerLine
              }
            />

            <Image
              src={HERO_ICON}
              style={
                styles.heroDividerIcon
              }
            />
          </View>

          <Text style={styles.introduction}>
            {overview.introduction}
          </Text>

          <Text style={styles.summaryText}>
            {overview.summary}
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Intensité
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.energyCard}
          wrap={false}
        >
          <View
            style={styles.energyHeader}
          >
            <View
              style={
                styles.energyLabelRow
              }
            >
              <Image
                src={ENERGY_ICON}
                style={styles.energyIcon}
              />

              <Text
                style={styles.energyLabel}
              >
                Intensité énergétique de
                l’année
              </Text>
            </View>

            <Text
              style={styles.energyValue}
            >
              {safeScore} %
            </Text>
          </View>

          <View
            style={styles.energyTrack}
          >
            <View
              style={[
                styles.energyFill,
                {
                  width: `${safeScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Thème dominant
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.dominantCard}
          wrap={false}
        >
          <Image
            src={DOMINANT_ICON}
            style={
              styles.dominantWatermark
            }
          />

          <View
            style={
              styles.dominantIconBox
            }
          >
            <Image
              src={DOMINANT_ICON}
              style={styles.dominantIcon}
            />
          </View>

          <View
            style={styles.dominantBody}
          >
            <Text
              style={styles.dominantLabel}
            >
              Votre énergie dominante
            </Text>

            <Text
              style={styles.dominantText}
            >
              {overview.dominantTheme}
            </Text>
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Axes majeurs
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.sectionHeader}
        >
          <View
            style={styles.sectionLine}
          />

          <Image
            src={AXES_SECTION_ICON}
            style={styles.sectionIcon}
          />

          <Text
            style={styles.sectionTitle}
          >
            Les axes majeurs de votre
            année
          </Text>
        </View>

        <View style={styles.axesGrid}>
          {axes.map((axis, index) => (
            <View
              key={`${axis.title}-${index}`}
              style={styles.axisCard}
              wrap={false}
            >
              <Image
                src={getIcon(
                  AXIS_ICON_KEYS[
                    index % AXIS_ICON_KEYS.length
                  ],
                  "sun",
                )}
                style={
                  styles.axisWatermark
                }
              />

              <View
                style={styles.axisNumberBox}
              >
                <Text
                  style={styles.axisNumber}
                >
                  {index + 1}
                </Text>
              </View>

              <Text
                style={styles.axisTitle}
              >
                {axis.title}
              </Text>

              <Text
                style={styles.axisText}
              >
                {axis.text}
              </Text>
            </View>
          ))}
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Conseil et conclusion
        |--------------------------------------------------------------------------
        */}

        <View style={styles.bottomGrid}>
          <View
            style={[
              styles.bottomCard,
              styles.bottomCardHighlighted,
            ]}
            wrap={false}
          >
            <Image
              src={ADVICE_ICON}
              style={
                styles.bottomWatermark
              }
            />

            <View
              style={styles.bottomHeader}
            >
              <View
                style={
                  styles.bottomIconBox
                }
              >
                <Image
                  src={ADVICE_ICON}
                  style={
                    styles.bottomIcon
                  }
                />
              </View>

              <Text
                style={styles.bottomLabel}
              >
                Votre conseil annuel
              </Text>
            </View>

            <Text
              style={styles.bottomText}
            >
              {overview.advice}
            </Text>
          </View>

          <View
            style={styles.bottomCard}
            wrap={false}
          >
            <Image
              src={DIRECTION_ICON}
              style={
                styles.bottomWatermark
              }
            />

            <View
              style={styles.bottomHeader}
            >
              <View
                style={
                  styles.bottomIconBox
                }
              >
                <Image
                  src={DIRECTION_ICON}
                  style={
                    styles.bottomIcon
                  }
                />
              </View>

              <Text
                style={styles.bottomLabel}
              >
                Votre direction
              </Text>
            </View>

            <Text
              style={styles.bottomText}
            >
              {overview.conclusion}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
