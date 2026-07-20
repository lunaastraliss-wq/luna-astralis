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
import HoroscopeStarBackground from "./HoroscopeStarBackground";

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

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 34,
    paddingHorizontal: 44,
    paddingBottom: 52,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
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
    marginBottom: 13,
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
    fontSize: 24,
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

  titleDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
    marginRight: 5,
  },

  titleDotSmall: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: DARK_GOLD,
  },

  mainCard: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 13,
  },

  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  sectionHeading: {
    maxWidth: "72%",
  },

  sectionMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  sectionTitle: {
    color: GOLD,
    fontSize: 13,
    lineHeight: 1.4,
  },

  scoreCircleOuter: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreCircle: {
    width: 51,
    height: 51,
    borderRadius: 25.5,
    borderWidth: 1.1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 17,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 7,
    marginTop: 1,
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
    marginBottom: 12,
  },

  mainText: {
    color: CREAM,
    fontSize: 9.4,
    lineHeight: 1.5,
    textAlign: "justify",
  },

  progressCard: {
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 11,
    backgroundColor: NAVY_SOFT,
    marginBottom: 13,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
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
    height: 6,
    borderRadius: 3,
    backgroundColor: "#202C3E",
    overflow: "hidden",
  },

  progressFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
  },

  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionHeaderLine: {
    width: 22,
    height: 1,
    backgroundColor: GOLD,
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
    marginBottom: 10,
  },

  highlightCard: {
    width: "48.5%",
    minHeight: 58,
    paddingVertical: 9,
    paddingHorizontal: 11,
    marginBottom: 8,
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

  highlightNumber: {
    color: GOLD,
    fontSize: 8,
    marginRight: 7,
  },

  highlightAccent: {
    width: 18,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  highlightText: {
    color: CREAM,
    fontSize: 8.1,
    lineHeight: 1.5,
  },

  adviceCard: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 11,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  adviceDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
    marginRight: 7,
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
});

export default function HoroscopeCareer({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const careerScore = normalizeHoroscopeScore(
    content.career.score ?? content.scores.career,
  );

  const highlights = Array.isArray(content.career.highlights)
    ? content.career.highlights.slice(0, 4)
    : [];

  return (
    <Page size="A4" style={styles.page}>
      <HoroscopeStarBackground />

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
            Travail et ambitions
          </Text>

          <Text style={styles.title}>
            Votre évolution professionnelle
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />
            <View style={styles.titleDot} />
            <View style={styles.titleDotSmall} />
          </View>
        </View>

        <View style={styles.mainCard} wrap={false}>
          <View style={styles.mainHeader}>
            <View style={styles.sectionHeading}>
              <Text style={styles.sectionMiniLabel}>
                Lecture professionnelle
              </Text>

              <Text style={styles.sectionTitle}>
                {content.career.title}
              </Text>
            </View>

            <View style={styles.scoreCircleOuter}>
              <View style={styles.scoreCircle}>
                <Text style={styles.scoreValue}>
                  {careerScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>
          </View>

          {content.career.introduction ? (
            <Text style={styles.introduction}>
              {content.career.introduction}
            </Text>
          ) : null}

          <Text style={styles.mainText}>
            {content.career.text}
          </Text>
        </View>

        <View style={styles.progressCard} wrap={false}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>
              Potentiel professionnel
            </Text>

            <Text style={styles.progressValue}>
              {careerScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${careerScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <View style={styles.sectionHeaderRow}>
              <View style={styles.sectionHeaderLine} />

              <Text style={styles.highlightsTitle}>
                Points à surveiller
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
                    <Text style={styles.highlightNumber}>
                      0{index + 1}
                    </Text>

                    <View style={styles.highlightAccent} />
                  </View>

                  <Text style={styles.highlightText}>
                    {highlight}
                  </Text>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {content.career.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <View style={styles.adviceHeader}>
              <View style={styles.adviceDot} />

              <Text style={styles.adviceLabel}>
                Conseil professionnel
              </Text>
            </View>

            <Text style={styles.adviceText}>
              {content.career.advice}
            </Text>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
