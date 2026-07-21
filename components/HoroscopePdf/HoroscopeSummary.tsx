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
    paddingTop: 38,
    paddingHorizontal: 42,
    paddingBottom: 58,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
  },

  content: {
    position: "relative",
    zIndex: 3,
    flex: 1,
  },

  orbitLarge: {
    position: "absolute",
    top: 118,
    right: -96,
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    opacity: 0.32,
  },

  orbitMedium: {
    position: "absolute",
    top: 151,
    right: -62,
    width: 182,
    height: 182,
    borderRadius: 91,
    borderWidth: 0.45,
    borderColor: GOLD,
    opacity: 0.2,
  },

  orbitSmall: {
    position: "absolute",
    bottom: 94,
    left: -62,
    width: 142,
    height: 142,
    borderRadius: 71,
    borderWidth: 0.45,
    borderColor: DARK_GOLD,
    opacity: 0.25,
  },

  orbitDot: {
    position: "absolute",
    top: 208,
    right: 55,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
    opacity: 0.7,
  },

  watermark: {
    position: "absolute",
    right: -9,
    bottom: 18,
    width: 112,
    height: 112,
    objectFit: "contain",
    opacity: 0.045,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
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
    marginBottom: 15,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 8.8,
    letterSpacing: 2.3,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  title: {
    color: CREAM,
    fontSize: 25,
    lineHeight: 1.18,
    marginBottom: 7,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.6,
    marginBottom: 11,
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

  heroCard: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 15,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 13,
  },

  heroGlow: {
    position: "absolute",
    top: -42,
    right: -25,
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 0.65,
    borderColor: GOLD,
    opacity: 0.17,
  },

  heroRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  heroIdentity: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 14,
  },

  heroIconBox: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  heroIcon: {
    width: 31,
    height: 31,
    objectFit: "contain",
  },

  heroHeading: {
    flex: 1,
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
    fontSize: 13.2,
    lineHeight: 1.3,
  },

  scoreBadgeOuter: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
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
    fontSize: 6.3,
    marginTop: 1,
  },

  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
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
    fontSize: 8.7,
    lineHeight: 1.48,
    marginBottom: 7,
  },

  summaryText: {
    color: CREAM,
    fontSize: 9.2,
    lineHeight: 1.55,
    textAlign: "justify",
  },

  overallCard: {
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    marginBottom: 12,
  },

  overallHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
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
    fontSize: 8.5,
  },

  overallValue: {
    color: GOLD,
    fontSize: 8.8,
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

  indicatorsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
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
    fontSize: 9.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  scoresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  scoreCard: {
    width: "31.6%",
    minHeight: 92,
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  scoreTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  scoreIdentity: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 4,
  },

  scoreIconBox: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  scoreIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  scoreLabel: {
    color: CREAM,
    fontSize: 7.7,
  },

  scoreValue: {
    color: GOLD,
    fontSize: 10.5,
  },

  scoreTrack: {
    width: "100%",
    height: 5,
    borderRadius: 2.5,
    backgroundColor: TRACK,
    overflow: "hidden",
    marginBottom: 6,
  },

  scoreFill: {
    height: 5,
    borderRadius: 2.5,
    backgroundColor: GOLD,
  },

  scoreMessage: {
    color: SOFT_TEXT,
    fontSize: 6.35,
    lineHeight: 1.32,
  },

  guidanceCard: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 11,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 9,
  },

  guidanceWatermark: {
    position: "absolute",
    right: 5,
    bottom: -19,
    width: 68,
    height: 68,
    objectFit: "contain",
    opacity: 0.055,
  },

  guidanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
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
    fontSize: 6.5,
    letterSpacing: 1.05,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 9.7,
    lineHeight: 1.28,
  },

  guidanceText: {
    color: MUTED_CREAM,
    fontSize: 7.65,
    lineHeight: 1.4,
    paddingRight: 38,
  },

  adviceCard: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 11,
    paddingHorizontal: 13,
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
    marginBottom: 6,
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
    fontSize: 7.4,
    letterSpacing: 1.25,
    textTransform: "uppercase",
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.2,
    lineHeight: 1.45,
    paddingRight: 28,
  },
});

type ScoreItem = {
  label: string;
  value: number;
  iconUrl: string;
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
}: ScoreItem) {
  const safeValue = normalizeHoroscopeScore(value);

  return (
    <View style={styles.scoreCard} wrap={false}>
      <View style={styles.scoreTopRow}>
        <View style={styles.scoreIdentity}>
          <View style={styles.scoreIconBox}>
            <Image src={iconUrl} style={styles.scoreIcon} />
          </View>

          <Text style={styles.scoreLabel}>{label}</Text>
        </View>

        <Text style={styles.scoreValue}>{safeValue}</Text>
      </View>

      <View style={styles.scoreTrack}>
        <View
          style={[
            styles.scoreFill,
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
      iconUrl: HOROSCOPE_ICONS.sun,
    },
    {
      label: "Amour",
      value: content.scores.love,
      iconUrl: HOROSCOPE_ICONS.love,
    },
    {
      label: "Travail",
      value: content.scores.career,
      iconUrl: HOROSCOPE_ICONS.lifePurpose,
    },
    {
      label: "Finances",
      value: content.scores.money,
      iconUrl: HOROSCOPE_ICONS.money,
    },
    {
      label: "Bien-être",
      value: content.scores.health,
      iconUrl: HOROSCOPE_ICONS.innerWorld,
    },
    {
      label: "Vie sociale",
      value:
        typeof content.scores.social === "number"
          ? content.scores.social
          : 50,
      iconUrl: HOROSCOPE_ICONS.soulPath,
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

      <View style={styles.orbitLarge} />
      <View style={styles.orbitMedium} />
      <View style={styles.orbitSmall} />
      <View style={styles.orbitDot} />

      <Image
        src={HOROSCOPE_ICONS.integrationGuide}
        style={styles.watermark}
      />

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
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.heroCard} wrap={false}>
          <View style={styles.heroGlow} />

          <View style={styles.heroRow}>
            <View style={styles.heroIdentity}>
              <View style={styles.heroIconBox}>
                <Image
                  src={HOROSCOPE_ICONS.integrationGuide}
                  style={styles.heroIcon}
                />
              </View>

              <View style={styles.heroHeading}>
                <Text style={styles.heroLabel}>
                  Synthèse personnalisée
                </Text>

                <Text style={styles.heroTitle}>
                  {summaryTitle}
                </Text>
              </View>
            </View>

            <View style={styles.scoreBadgeOuter}>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreNumber}>
                  {overallScore}
                </Text>

                <Text style={styles.scoreOutOf}>
                  sur 100
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.heroDivider}>
            <View style={styles.heroDividerLine} />

            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.heroDividerIcon}
            />
          </View>

          <Text style={styles.introduction}>
            {summaryIntroduction}
          </Text>

          <Text style={styles.summaryText}>
            {summaryText}
          </Text>
        </View>

        <View style={styles.overallCard} wrap={false}>
          <View style={styles.overallHeader}>
            <View style={styles.overallLabelRow}>
              <Image
                src={HOROSCOPE_ICONS.integrationGuide}
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

        <View style={styles.indicatorsHeader}>
          <View style={styles.indicatorsLine} />

          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
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
              iconUrl={score.iconUrl}
            />
          ))}
        </View>

        <View style={styles.guidanceCard} wrap={false}>
          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.guidanceWatermark}
          />

          <View style={styles.guidanceHeader}>
            <View style={styles.guidanceIconBox}>
              <Image
                src={HOROSCOPE_ICONS.hiddenTalents}
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
                src={HOROSCOPE_ICONS.integrationGuide}
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
