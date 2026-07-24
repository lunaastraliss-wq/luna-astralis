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

import HoroscopePageFooter from "../HoroscopePageFooter";
import HoroscopeStarBackground from "../HoroscopeStarBackground";

import type {
  HoroscopeSectionProps,
} from "../HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
  normalizeHoroscopeScore,
} from "../HoroscopePdfUtils";

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
    paddingTop: 36,
    paddingHorizontal: 42,
    paddingBottom: 56,
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
    top: 116,
    right: -100,
    width: 258,
    height: 258,
    borderRadius: 129,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    opacity: 0.3,
  },

  orbitMedium: {
    position: "absolute",
    top: 151,
    right: -63,
    width: 184,
    height: 184,
    borderRadius: 92,
    borderWidth: 0.45,
    borderColor: GOLD,
    opacity: 0.18,
  },

  orbitSmall: {
    position: "absolute",
    bottom: 86,
    left: -65,
    width: 146,
    height: 146,
    borderRadius: 73,
    borderWidth: 0.45,
    borderColor: DARK_GOLD,
    opacity: 0.24,
  },

  watermark: {
    position: "absolute",
    right: -7,
    bottom: 14,
    width: 114,
    height: 114,
    objectFit: "contain",
    opacity: 0.045,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
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
    fontSize: 8.8,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  title: {
    color: CREAM,
    fontSize: 25,
    lineHeight: 1.15,
  },

  weekBadge: {
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  weekBadgeText: {
    color: GOLD,
    fontSize: 8.2,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    marginBottom: 9,
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
    paddingVertical: 16,
    paddingHorizontal: 17,
    borderRadius: 15,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 11,
  },

  heroGlow: {
    position: "absolute",
    top: -43,
    right: -27,
    width: 136,
    height: 136,
    borderRadius: 68,
    borderWidth: 0.65,
    borderColor: GOLD,
    opacity: 0.16,
  },

  heroTopRow: {
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
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  heroIcon: {
    width: 29,
    height: 29,
    objectFit: "contain",
  },

  heroHeading: {
    flex: 1,
  },

  heroLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.15,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 13.2,
    lineHeight: 1.28,
  },

  scoreOuter: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreInner: {
    width: 57,
    height: 57,
    borderRadius: 28.5,
    borderWidth: 1,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreNumber: {
    color: GOLD,
    fontSize: 17,
  },

  scoreLabel: {
    color: SOFT_TEXT,
    fontSize: 6.1,
    marginTop: 1,
  },

  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  heroDividerLine: {
    width: 31,
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
    fontSize: 8.4,
    lineHeight: 1.47,
    marginBottom: 6,
  },

  mainText: {
    color: CREAM,
    fontSize: 8.8,
    lineHeight: 1.52,
    textAlign: "justify",
  },

  indicatorsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
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
    fontSize: 9.2,
    letterSpacing: 1.35,
    textTransform: "uppercase",
  },

  scoresGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  scoreCard: {
    width: "19%",
    minHeight: 82,
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  scoreCardIconBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  scoreCardIcon: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },

  scoreCardLabel: {
    color: CREAM,
    fontSize: 6.8,
    marginBottom: 5,
  },

  scoreCardValue: {
    color: GOLD,
    fontSize: 10.2,
    marginBottom: 5,
  },

  scoreTrack: {
    width: "100%",
    height: 4,
    borderRadius: 2,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  scoreFill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
  },

  twoColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  detailCard: {
    position: "relative",
    overflow: "hidden",
    width: "48.8%",
    minHeight: 112,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  opportunityCard: {
    borderTopWidth: 1.5,
    borderTopColor: GOLD,
  },

  vigilanceCard: {
    borderLeftWidth: 1.5,
    borderLeftColor: GOLD,
  },

  detailWatermark: {
    position: "absolute",
    right: -7,
    bottom: -13,
    width: 64,
    height: 64,
    objectFit: "contain",
    opacity: 0.05,
  },

  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  detailIconBox: {
    width: 29,
    height: 29,
    borderRadius: 14.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  detailIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },

  detailTitle: {
    color: GOLD,
    fontSize: 8.4,
    lineHeight: 1.25,
  },

  detailText: {
    color: MUTED_CREAM,
    fontSize: 7.1,
    lineHeight: 1.43,
    paddingRight: 12,
  },

  adviceCard: {
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 70,
    paddingVertical: 11,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  adviceWatermark: {
    position: "absolute",
    right: -6,
    bottom: -18,
    width: 78,
    height: 78,
    objectFit: "contain",
    opacity: 0.05,
  },

  adviceIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  adviceIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
  },

  adviceBody: {
    flex: 1,
    paddingRight: 24,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7.1,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  adviceText: {
    color: CREAM,
    fontSize: 7.8,
    lineHeight: 1.45,
  },
});

type WeekScores = {
  energy: number;
  love: number;
  career: number;
  money: number;
  health: number;
};

export type HoroscopeMonthWeekContent = {
  title: string;
  dateLabel: string;
  introduction: string;
  text: string;
  opportunity: string;
  vigilance: string;
  advice: string;
  scores: WeekScores;
};

type HoroscopeMonthWeek1Props = Pick<
  HoroscopeSectionProps,
  "identity" | "period"
> & {
  week: HoroscopeMonthWeekContent;
};

type ScoreItem = {
  label: string;
  value: number;
  iconUrl: string;
};

function WeeklyScoreCard({
  label,
  value,
  iconUrl,
}: ScoreItem) {
  const safeValue = normalizeHoroscopeScore(value);

  return (
    <View style={styles.scoreCard} wrap={false}>
      <View style={styles.scoreCardIconBox}>
        <Image
          src={iconUrl}
          style={styles.scoreCardIcon}
        />
      </View>

      <Text style={styles.scoreCardLabel}>
        {label}
      </Text>

      <Text style={styles.scoreCardValue}>
        {safeValue}
      </Text>

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
    </View>
  );
}

export default function HoroscopeMonthWeek1({
  identity,
  period,
  week,
}: HoroscopeMonthWeek1Props) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const scores: ScoreItem[] = [
    {
      label: "Énergie",
      value: week.scores.energy,
      iconUrl: HOROSCOPE_ICONS.sun,
    },
    {
      label: "Amour",
      value: week.scores.love,
      iconUrl: HOROSCOPE_ICONS.love,
    },
    {
      label: "Travail",
      value: week.scores.career,
      iconUrl: HOROSCOPE_ICONS.lifePurpose,
    },
    {
      label: "Finances",
      value: week.scores.money,
      iconUrl: HOROSCOPE_ICONS.money,
    },
    {
      label: "Bien-être",
      value: week.scores.health,
      iconUrl: HOROSCOPE_ICONS.innerWorld,
    },
  ];

  const overallScore = Math.round(
    scores.reduce(
      (total, score) =>
        total + normalizeHoroscopeScore(score.value),
      0,
    ) / scores.length,
  );

  return (
    <Page size="A4" style={styles.page} wrap={false}>
      <HoroscopeStarBackground />

      <View style={styles.orbitLarge} />
      <View style={styles.orbitMedium} />
      <View style={styles.orbitSmall} />

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
            Horoscope mensuel
          </Text>

          <View style={styles.titleRow}>
            <Text style={styles.title}>
              Votre première semaine
            </Text>

            <View style={styles.weekBadge}>
              <Text style={styles.weekBadgeText}>
                Semaine 1
              </Text>
            </View>
          </View>

          <Text style={styles.period}>
            {week.dateLabel || periodLabel}
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

          <View style={styles.heroTopRow}>
            <View style={styles.heroIdentity}>
              <View style={styles.heroIconBox}>
                <Image
                  src={HOROSCOPE_ICONS.sun}
                  style={styles.heroIcon}
                />
              </View>

              <View style={styles.heroHeading}>
                <Text style={styles.heroLabel}>
                  Thème de la semaine
                </Text>

                <Text style={styles.heroTitle}>
                  {week.title}
                </Text>
              </View>
            </View>

            <View style={styles.scoreOuter}>
              <View style={styles.scoreInner}>
                <Text style={styles.scoreNumber}>
                  {overallScore}
                </Text>

                <Text style={styles.scoreLabel}>
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
            {week.introduction}
          </Text>

          <Text style={styles.mainText}>
            {week.text}
          </Text>
        </View>

        <View style={styles.indicatorsHeader}>
          <View style={styles.indicatorsLine} />

          <Image
            src={HOROSCOPE_ICONS.hiddenTalents}
            style={styles.indicatorsIcon}
          />

          <Text style={styles.indicatorsTitle}>
            Vos indicateurs de la semaine
          </Text>
        </View>

        <View style={styles.scoresGrid}>
          {scores.map((score) => (
            <WeeklyScoreCard
              key={score.label}
              label={score.label}
              value={score.value}
              iconUrl={score.iconUrl}
            />
          ))}
        </View>

        <View style={styles.twoColumns}>
          <View
            style={[
              styles.detailCard,
              styles.opportunityCard,
            ]}
            wrap={false}
          >
            <Image
              src={HOROSCOPE_ICONS.hiddenTalents}
              style={styles.detailWatermark}
            />

            <View style={styles.detailHeader}>
              <View style={styles.detailIconBox}>
                <Image
                  src={HOROSCOPE_ICONS.hiddenTalents}
                  style={styles.detailIcon}
                />
              </View>

              <Text style={styles.detailTitle}>
                Opportunité de la semaine
              </Text>
            </View>

            <Text style={styles.detailText}>
              {week.opportunity}
            </Text>
          </View>

          <View
            style={[
              styles.detailCard,
              styles.vigilanceCard,
            ]}
            wrap={false}
          >
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.detailWatermark}
            />

            <View style={styles.detailHeader}>
              <View style={styles.detailIconBox}>
                <Image
                  src={HOROSCOPE_ICONS.integrationGuide}
                  style={styles.detailIcon}
                />
              </View>

              <Text style={styles.detailTitle}>
                Point de vigilance
              </Text>
            </View>

            <Text style={styles.detailText}>
              {week.vigilance}
            </Text>
          </View>
        </View>

        <View style={styles.adviceCard} wrap={false}>
          <Image
            src={HOROSCOPE_ICONS.integrationGuide}
            style={styles.adviceWatermark}
          />

          <View style={styles.adviceIconBox}>
            <Image
              src={HOROSCOPE_ICONS.integrationGuide}
              style={styles.adviceIcon}
            />
          </View>

          <View style={styles.adviceBody}>
            <Text style={styles.adviceLabel}>
              Conseil astrologique
            </Text>

            <Text style={styles.adviceText}>
              {week.advice}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
