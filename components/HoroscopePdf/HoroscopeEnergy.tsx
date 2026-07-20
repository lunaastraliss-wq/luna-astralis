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
    marginBottom: 28,
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
    marginBottom: 24,
  },

  energyCard: {
    paddingVertical: 23,
    paddingHorizontal: 23,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 22,
  },

  energyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  energyTitle: {
    color: GOLD,
    fontSize: 13,
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
    marginBottom: 23,
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

  highlightTitle: {
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
    marginBottom: 20,
  },

  highlightCard: {
    width: "48.5%",
    minHeight: 74,
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
    fontSize: 9,
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

export default function HoroscopeEnergy({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const energyScore = normalizeHoroscopeScore(
    content.energy.score ?? content.scores.energy,
  );

  const highlights = Array.isArray(content.energy.highlights)
    ? content.energy.highlights.slice(0, 4)
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
          Énergie générale
        </Text>

        <Text style={styles.title}>
          Votre climat énergétique
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        <View style={styles.energyCard} wrap={false}>
          <View style={styles.energyHeader}>
            <Text style={styles.energyTitle}>
              {content.energy.title}
            </Text>

            <View style={styles.scoreCircle}>
              <Text style={styles.scoreValue}>
                {energyScore}
              </Text>

              <Text style={styles.scoreMaximum}>
                sur 100
              </Text>
            </View>
          </View>

          {content.energy.introduction ? (
            <Text style={styles.introduction}>
              {content.energy.introduction}
            </Text>
          ) : null}

          <Text style={styles.mainText}>
            {content.energy.text}
          </Text>
        </View>

        <View style={styles.progressSection} wrap={false}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>
              Niveau d’énergie
            </Text>

            <Text style={styles.progressValue}>
              {energyScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${energyScore}%`,
                },
              ]}
            />
          </View>
        </View>

        {highlights.length > 0 ? (
          <>
            <Text style={styles.highlightTitle}>
              Points à retenir
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

        {content.energy.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <Text style={styles.adviceLabel}>
              Conseil énergétique
            </Text>

            <Text style={styles.adviceText}>
              {content.energy.advice}
            </Text>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
