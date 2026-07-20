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

  summaryCard: {
    paddingVertical: 21,
    paddingHorizontal: 22,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 23,
  },

  summaryTitle: {
    color: GOLD,
    fontSize: 12,
    marginBottom: 11,
  },

  summaryIntroduction: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
    marginBottom: 10,
  },

  summaryText: {
    color: CREAM,
    fontSize: 10.5,
    lineHeight: 1.7,
    textAlign: "justify",
  },

  scoresTitle: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.7,
    textTransform: "uppercase",
    marginBottom: 13,
  },

  scoresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  scoreCard: {
    width: "31.5%",
    minHeight: 106,
    paddingVertical: 13,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  scoreHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  scoreLabel: {
    color: CREAM,
    fontSize: 9,
  },

  scoreValue: {
    color: GOLD,
    fontSize: 14,
  },

  progressTrack: {
    width: "100%",
    height: 6,
    borderRadius: 3,
    backgroundColor: "#202C3E",
    overflow: "hidden",
    marginBottom: 9,
  },

  progressFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
  },

  scoreMessage: {
    color: SOFT_TEXT,
    fontSize: 7.5,
    lineHeight: 1.45,
  },

  adviceCard: {
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  adviceText: {
    color: CREAM,
    fontSize: 9.5,
    lineHeight: 1.55,
  },
});

type ScoreItem = {
  label: string;
  value: number;
};

function getScoreMessage(value: number): string {
  if (value >= 85) {
    return "Une énergie particulièrement favorable vous accompagne.";
  }

  if (value >= 70) {
    return "Le climat est positif et encourage les initiatives.";
  }

  if (value >= 55) {
    return "Une période équilibrée, à vivre avec attention.";
  }

  if (value >= 40) {
    return "La prudence et la patience seront vos meilleures alliées.";
  }

  return "Avancez doucement et préservez votre énergie.";
}

function ScoreCard({
  label,
  value,
}: ScoreItem) {
  const safeValue = normalizeHoroscopeScore(value);

  return (
    <View style={styles.scoreCard} wrap={false}>
      <View style={styles.scoreHeader}>
        <Text style={styles.scoreLabel}>
          {label}
        </Text>

        <Text style={styles.scoreValue}>
          {safeValue}
        </Text>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${safeValue}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.scoreMessage}>
        {getScoreMessage(safeValue)}
      </Text>
    </View>
  );
}

export default function HoroscopeSummary({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const scores: ScoreItem[] = [
    {
      label: "Énergie",
      value: content.scores.energy,
    },
    {
      label: "Amour",
      value: content.scores.love,
    },
    {
      label: "Travail",
      value: content.scores.career,
    },
    {
      label: "Finances",
      value: content.scores.money,
    },
    {
      label: "Bien-être",
      value: content.scores.health,
    },
    {
      label: "Vie sociale",
      value:
        typeof content.scores.social === "number"
          ? content.scores.social
          : 50,
    },
  ];

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
          Vue d’ensemble
        </Text>

        <Text style={styles.title}>
          Votre résumé astrologique
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        <View style={styles.summaryCard} wrap={false}>
          <Text style={styles.summaryTitle}>
            {content.summary.title}
          </Text>

          {content.summary.introduction ? (
            <Text style={styles.summaryIntroduction}>
              {content.summary.introduction}
            </Text>
          ) : null}

          <Text style={styles.summaryText}>
            {content.summary.text}
          </Text>
        </View>

        <Text style={styles.scoresTitle}>
          Vos indicateurs
        </Text>

        <View style={styles.scoresGrid}>
          {scores.map((score) => (
            <ScoreCard
              key={score.label}
              label={score.label}
              value={score.value}
            />
          ))}
        </View>

        {content.summary.advice ? (
          <View style={styles.adviceCard} wrap={false}>
            <Text style={styles.adviceLabel}>
              Conseil principal
            </Text>

            <Text style={styles.adviceText}>
              {content.summary.advice}
            </Text>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
