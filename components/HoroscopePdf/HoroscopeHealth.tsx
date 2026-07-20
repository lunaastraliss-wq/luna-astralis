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

import HoroscopePageFooter from "./HoroscopePageFooter";

import type {
  HoroscopeSectionProps,
} from "./HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
  normalizeHoroscopeScore,
} from "./HoroscopePdfUtils";

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

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 40,
    paddingHorizontal: 44,
    paddingBottom: 58,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
  },

  content: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  logo: {
    width: 110,
    height: 40,
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

  titleBlock: {
    marginBottom: 21,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.4,
    textTransform: "uppercase",
    marginBottom: 10,
  },

  title: {
    color: CREAM,
    fontSize: 26,
    lineHeight: 1.2,
    marginBottom: 8,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 13,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
    width: 64,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  titleIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 8,
  },

  titleLineSmall: {
    width: 20,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  mainCard: {
    paddingVertical: 21,
    paddingHorizontal: 21,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  mainHeading: {
    flex: 1,
    paddingRight: 16,
  },

  mainMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionTitleIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.35,
  },

  scoreOuterCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 1.1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 20,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 7,
    marginTop: 1,
  },

  mainDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  mainDividerLine: {
    width: 31,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  mainDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
    marginBottom: 12,
  },

  mainText: {
    color: CREAM,
    fontSize: 10.5,
    lineHeight: 1.75,
    textAlign: "justify",
  },

  progressCard: {
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 19,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  progressLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 7,
  },

  progressLabel: {
    color: CREAM,
    fontSize: 9,
  },

  progressValue: {
    color: GOLD,
    fontSize: 9,
  },

  progressTrack: {
    width: "100%",
    height: 9,
    borderRadius: 4.5,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  progressFill: {
    height: 9,
    borderRadius: 4.5,
    backgroundColor: GOLD,
  },

  highlightsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  highlightsHeaderLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  highlightsHeaderIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  highlightsTitle: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  highlightCard: {
    width: "48.5%",
    minHeight: 78,
    paddingVertical: 13,
    paddingHorizontal: 14,
    marginBottom: 11,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  highlightTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  highlightNumberCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  highlightNumber: {
    color: GOLD,
    fontSize: 8,
  },

  highlightIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
  },

  highlightText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  adviceCard: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  adviceIconBox: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  adviceIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  adviceText: {
    color: CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
  },

  disclaimerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  disclaimerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
    marginRight: 7,
  },

  disclaimer: {
    flex: 1,
    color: SOFT_TEXT,
    fontSize: 7,
    lineHeight: 1.4,
    textAlign: "center",
  },
});

export default function HoroscopeHealth({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const healthScore = normalizeHoroscopeScore(
    content.health.score ?? content.scores.health,
  );

  const highlights = Array.isArray(content.health.highlights)
    ? content.health.highlights.slice(0, 4)
    : [];

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.content}>
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

        <View style={styles.titleBlock}>
          <Text style={styles.eyebrow}>
            Bien-être et équilibre
          </Text>

          <Text style={styles.title}>
            Votre vitalité intérieure
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.mainCard} wrap={false}>
          <View style={styles.mainHeader}>
            <View style={styles.mainHeading}>
              <Text style={styles.mainMiniLabel}>
                Équilibre de la période
              </Text>

              <View style={styles.sectionTitleRow}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.sectionTitleIcon}
                />

                <Text style={styles.sectionTitle}>
                  {content.health.title}
                </Text>
              </View>
            </View>

            <View style={styles.scoreOuterCircle}>
              <View style={styles.scoreCircle}>
                <Text style={styles.scoreValue}>
                  {healthScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.mainDivider}>
            <View style={styles.mainDividerLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.mainDividerIcon}
            />
          </View>

          {content.health.introduction ? (
            <Text style={styles.introduction}>
              {content.health.introduction}
            </Text>
          ) : null}

          <Text style={styles.mainText}>
            {content.health.text}
          </Text>
        </View>

        <View style={styles.progressCard} wrap={false}>
          <View style={styles.progressHeader}>
            <View style={styles.progressLabelRow}>
              <Image
                src={zodiacIconUrl}
                style={styles.progressIcon}
              />

              <Text style={styles.progressLabel}>
                Niveau de bien-être
              </Text>
            </View>

            <Text style={styles.progressValue}>
              {healthScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${healthScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.highlightsHeader}>
              <View style={styles.highlightsHeaderLine} />

              <Image
                src={zodiacIconUrl}
                style={styles.highlightsHeaderIcon}
              />

              <Text style={styles.highlightsTitle}>
                Points d’équilibre
              </Text>
            </View>

            <View style={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <View
                  key={`${highlight}-${index}`}
                  style={styles.highlightCard}
                  wrap={false}
                >
                  <View style={styles.highlightTopRow}>
                    <View style={styles.highlightNumberCircle}>
                      <Text style={styles.highlightNumber}>
                        0{index + 1}
                      </Text>
                    </View>

                    <Image
                      src={zodiacIconUrl}
                      style={styles.highlightIcon}
                    />
                  </View>

                  <Text style={styles.highlightText}>
                    {highlight}
                  </Text>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {content.health.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <View style={styles.adviceHeader}>
              <View style={styles.adviceIconBox}>
                <Image
                  src={zodiacIconUrl}
                  style={styles.adviceIcon}
                />
              </View>

              <Text style={styles.adviceLabel}>
                Conseil bien-être
              </Text>
            </View>

            <Text style={styles.adviceText}>
              {content.health.advice}
            </Text>
          </View>
        ) : null}

        <View style={styles.disclaimerCard} wrap={false}>
          <Image
            src={zodiacIconUrl}
            style={styles.disclaimerIcon}
          />

          <Text style={styles.disclaimer}>
            Cette section présente une lecture astrologique du
            bien-être et ne remplace pas un avis médical.
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
