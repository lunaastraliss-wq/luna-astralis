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
    position: "relative",
    zIndex: 2,
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
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
    marginBottom: 18,
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

  summaryCard: {
    paddingVertical: 19,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 15,
  },

  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  summaryIconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  summaryIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },

  summaryHeading: {
    flex: 1,
  },

  summaryMiniLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  summaryTitle: {
    color: GOLD,
    fontSize: 12.5,
    lineHeight: 1.35,
  },

  summaryDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  summaryDividerLine: {
    width: 32,
    height: 1,
    backgroundColor: DARK_GOLD,
    marginRight: 7,
  },

  summaryDividerIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },

  summaryIntroduction: {
    color: MUTED_CREAM,
    fontSize: 9.1,
    lineHeight: 1.55,
    marginBottom: 9,
  },

  summaryText: {
    color: CREAM,
    fontSize: 9.7,
    lineHeight: 1.62,
    textAlign: "justify",
  },

  indicatorsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  indicatorsLine: {
    width: 24,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 8,
  },

  indicatorsIcon: {
    width: 13,
    height: 13,
    objectFit: "contain",
    marginRight: 8,
  },

  indicatorsTitle: {
    color: GOLD,
    fontSize: 9.8,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  scoresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  scoreCard: {
    width: "31.5%",
    minHeight: 111,
    paddingVertical: 11,
    paddingHorizontal: 11,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  scoreTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  scoreIdentity: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "72%",
  },

  scoreIconBox: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  scoreIcon: {
    width: 12,
    height: 12,
    objectFit: "contain",
  },

  scoreLabel: {
    color: CREAM,
    fontSize: 8.3,
  },

  scoreValueCircle: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 11,
  },

  progressTrack: {
    width: "100%",
    height: 6,
    borderRadius: 3,
    backgroundColor: TRACK,
    overflow: "hidden",
    marginBottom: 8,
  },

  progressFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
  },

  scoreMessage: {
    color: SOFT_TEXT,
    fontSize: 7,
    lineHeight: 1.38,
  },

  overallCard: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 10,
  },

  overallHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  overallLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  overallIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
    marginRight: 7,
  },

  overallLabel: {
    color: CREAM,
    fontSize: 8.7,
  },

  overallValue: {
    color: GOLD,
    fontSize: 9,
  },

  overallTrack: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  overallFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: GOLD,
  },

  guidanceCard: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 10,
  },

  guidanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  guidanceIconBox: {
    width: 29,
    height: 29,
    borderRadius: 14.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  guidanceIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },

  guidanceHeading: {
    flex: 1,
  },

  guidanceLabel: {
    color: SOFT_TEXT,
    fontSize: 6.7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 9.8,
    lineHeight: 1.3,
  },

  guidanceText: {
    color: MUTED_CREAM,
    fontSize: 7.9,
    lineHeight: 1.42,
  },

  adviceCard: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  adviceIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
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
    fontSize: 7.6,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.48,
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

function getOverallGuidance(value: number) {
  if (value >= 75) {
    return {
      title: "Une période porteuse",
      text:
        "Votre climat général soutient l’élan, la confiance et les décisions constructives. Profitez de cette dynamique sans vous disperser.",
    };
  }

  if (value >= 55) {
    return {
      title: "Une période équilibrée",
      text:
        "Les possibilités sont bien présentes, mais elles demandent de la mesure. Avancez avec régularité et restez à l’écoute de vos priorités.",
    };
  }

  return {
    title: "Une période à apprivoiser",
    text:
      "Le climat invite à ralentir, à protéger votre énergie et à choisir soigneusement vos actions. La patience peut devenir votre meilleure force.",
  };
}

function ScoreCard({
  label,
  value,
  iconUrl,
}: ScoreItem & {
  iconUrl: string;
}) {
  const safeValue = normalizeHoroscopeScore(value);

  return (
    <View style={styles.scoreCard} wrap={false}>
      <View style={styles.scoreTopRow}>
        <View style={styles.scoreIdentity}>
          <View style={styles.scoreIconBox}>
            <Image
              src={iconUrl}
              style={styles.scoreIcon}
            />
          </View>

          <Text style={styles.scoreLabel}>
            {label}
          </Text>
        </View>

        <View style={styles.scoreValueCircle}>
          <Text style={styles.scoreValue}>
            {safeValue}
          </Text>
        </View>
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

  const normalizedScores = scores.map((score) =>
    normalizeHoroscopeScore(score.value),
  );

  const overallScore = Math.round(
    normalizedScores.reduce(
      (total, value) => total + value,
      0,
    ) / normalizedScores.length,
  );

  const guidance = getOverallGuidance(overallScore);

  const summaryTitle =
    content.summary.title || "Votre climat astrologique";

  const summaryIntroduction =
    content.summary.introduction ||
    "Cette synthèse réunit les grandes tendances qui colorent votre période et met en lumière les domaines les plus porteurs.";

  const summaryText =
    content.summary.text ||
    "Votre horoscope révèle un équilibre entre mouvement, réflexion et ajustement. Certaines sphères pourront évoluer rapidement, tandis que d’autres demanderont davantage de patience et de constance.";

  const advice =
    content.summary.advice ||
    "Concentrez-vous sur une priorité essentielle et laissez le reste évoluer sans pression inutile.";

  return (
    <Page size="A4" style={styles.page} wrap={false}>
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
            Vue d’ensemble
          </Text>

          <Text style={styles.title}>
            Votre résumé astrologique
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

        <View style={styles.summaryCard} wrap={false}>
          <View style={styles.summaryHeader}>
            <View style={styles.summaryIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.summaryIcon}
              />
            </View>

            <View style={styles.summaryHeading}>
              <Text style={styles.summaryMiniLabel}>
                Synthèse personnalisée
              </Text>

              <Text style={styles.summaryTitle}>
                {summaryTitle}
              </Text>
            </View>
          </View>

          <View style={styles.summaryDivider}>
            <View style={styles.summaryDividerLine} />

            <Image
              src={zodiacIconUrl}
              style={styles.summaryDividerIcon}
            />
          </View>

          <Text style={styles.summaryIntroduction}>
            {summaryIntroduction}
          </Text>

          <Text style={styles.summaryText}>
            {summaryText}
          </Text>
        </View>

        <View style={styles.indicatorsHeader}>
          <View style={styles.indicatorsLine} />

          <Image
            src={zodiacIconUrl}
            style={styles.indicatorsIcon}
          />

          <Text style={styles.indicatorsTitle}>
            Vos indicateurs
          </Text>
        </View>

        <View style={styles.scoresGrid}>
          {scores.map((score) => (
            <ScoreCard
              key={score.label}
              label={score.label}
              value={score.value}
              iconUrl={zodiacIconUrl}
            />
          ))}
        </View>

        <View style={styles.overallCard} wrap={false}>
          <View style={styles.overallHeader}>
            <View style={styles.overallLabelRow}>
              <Image
                src={zodiacIconUrl}
                style={styles.overallIcon}
              />

              <Text style={styles.overallLabel}>
                Équilibre général de la période
              </Text>
            </View>

            <Text style={styles.overallValue}>
              {overallScore} %
            </Text>
          </View>

          <View style={styles.overallTrack}>
            <View
              style={[
                styles.overallFill,
                {
                  width: `${overallScore}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.guidanceCard} wrap={false}>
          <View style={styles.guidanceHeader}>
            <View style={styles.guidanceIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.guidanceIcon}
              />
            </View>

            <View style={styles.guidanceHeading}>
              <Text style={styles.guidanceLabel}>
                Tendance générale
              </Text>

              <Text style={styles.guidanceTitle}>
                {guidance.title}
              </Text>
            </View>
          </View>

          <Text style={styles.guidanceText}>
            {guidance.text}
          </Text>
        </View>

        <View style={styles.adviceCard} wrap={false}>
          <View style={styles.adviceHeader}>
            <View style={styles.adviceIconBox}>
              <Image
                src={zodiacIconUrl}
                style={styles.adviceIcon}
              />
            </View>

            <Text style={styles.adviceLabel}>
              Conseil principal
            </Text>
          </View>

          <Text style={styles.adviceText}>
            {advice}
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
