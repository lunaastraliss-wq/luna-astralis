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
    paddingTop: 40,
    paddingHorizontal: 44,
    paddingBottom: 58,
    backgroundColor: "#06101F",
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
    marginBottom: 27,
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
    paddingHorizontal: 11,
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
    marginBottom: 22,
  },

  mainCard: {
    paddingVertical: 23,
    paddingHorizontal: 23,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 22,
  },

  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  sectionTitle: {
    color: GOLD,
    fontSize: 13,
    maxWidth: "74%",
  },

  scoreCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 1.2,
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

  progressSection: {
    marginBottom: 22,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
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
    height: 8,
    borderRadius: 4,
    backgroundColor: "#202C3E",
    overflow: "hidden",
  },

  progressFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: GOLD,
  },

  highlightsTitle: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 12,
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
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  highlightNumber: {
    color: GOLD,
    fontSize: 8,
    marginBottom: 6,
  },

  highlightText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  adviceCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  adviceText: {
    color: CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
  },
});

export default function HoroscopeMoney({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const moneyScore = normalizeHoroscopeScore(
    content.money.score ?? content.scores.money,
  );

  const highlights = Array.isArray(content.money.highlights)
    ? content.money.highlights.slice(0, 4)
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

        <Text style={styles.eyebrow}>
          Finances et sécurité
        </Text>

        <Text style={styles.title}>
          Votre climat financier
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        <View style={styles.mainCard} wrap={false}>
          <View style={styles.mainHeader}>
            <Text style={styles.sectionTitle}>
              {content.money.title}
            </Text>

            <View style={styles.scoreCircle}>
              <Text style={styles.scoreValue}>
                {moneyScore}
              </Text>

              <Text style={styles.scoreMaximum}>
                sur 100
              </Text>
            </View>
          </View>

          {content.money.introduction ? (
            <Text style={styles.introduction}>
              {content.money.introduction}
            </Text>
          ) : null}

          <Text style={styles.mainText}>
            {content.money.text}
          </Text>
        </View>

        <View style={styles.progressSection} wrap={false}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>
              Stabilité financière
            </Text>

            <Text style={styles.progressValue}>
              {moneyScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${moneyScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <Text style={styles.highlightsTitle}>
              Points financiers
            </Text>

            <View style={styles.highlightsGrid}>
              {highlights.map((highlight, index) => (
                <View
                  key={`${highlight}-${index}`}
                  style={styles.highlightCard}
                  wrap={false}
                >
                  <Text style={styles.highlightNumber}>
                    0{index + 1}
                  </Text>

                  <Text style={styles.highlightText}>
                    {highlight}
                  </Text>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {content.money.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <Text style={styles.adviceLabel}>
              Conseil financier
            </Text>

            <Text style={styles.adviceText}>
              {content.money.advice}
            </Text>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
