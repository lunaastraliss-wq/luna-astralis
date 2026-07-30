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
} from "../../HoroscopePdfAssets";

import HoroscopePageFooter
  from "../../HoroscopePageFooter";

import HoroscopeStarBackground
  from "../../HoroscopeStarBackground";

import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../../HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
  normalizeHoroscopeScore,
} from "../../HoroscopePdfUtils";

import type {
  YearCalendarResult,
  YearMonthForecastItem,
} from "../data/types";

type HoroscopeYearCalendarProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  calendar: YearCalendarResult;
};

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const TRACK = "#202C3E";
const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

const ICONS =
  HOROSCOPE_ICONS as Record<string, string>;

function icon(
  key: string,
  fallback = "moon",
): string {
  return (
    ICONS[key]?.trim() ||
    ICONS[fallback]?.trim() ||
    Object.values(ICONS).find(Boolean) ||
    ""
  );
}

const CALENDAR_ICON =
  icon("moon", "sun");

const FAVORABLE_ICON =
  icon("jupiter", "sun");

const CAUTION_ICON =
  icon("lifeBlocks", "saturn");

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 31,
    paddingHorizontal: 38,
    paddingBottom: 51,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
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
    marginBottom: 11,
  },

  logo: {
    width: 104,
    height: 36,
    objectFit: "contain",
  },

  signBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 11,
    borderRadius: 17,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  signIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
    marginRight: 7,
  },

  signName: {
    color: GOLD,
    fontSize: 7.8,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  titleBlock: {
    marginBottom: 10,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 8.6,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  title: {
    color: CREAM,
    fontSize: 22.5,
    lineHeight: 1.18,
    marginBottom: 6,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.2,
    marginBottom: 7,
  },

  decoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    width: 58,
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

  lineSmall: {
    width: 21,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  summaryCard: {
    width: "32%",
    minHeight: 66,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 9,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  summaryIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 6,
  },

  summaryLabel: {
    color: SOFT_TEXT,
    fontSize: 5.9,
    letterSpacing: 0.75,
    textTransform: "uppercase",
  },

  summaryValue: {
    color: GOLD,
    fontSize: 9,
    lineHeight: 1.25,
  },

  monthGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  monthCard: {
    width: "32%",
    minHeight: 112,
    paddingVertical: 8,
    paddingHorizontal: 9,
    marginBottom: 7,
    borderRadius: 9,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  favorableCard: {
    borderTopWidth: 1.5,
    borderTopColor: GOLD,
  },

  cautionCard: {
    borderLeftWidth: 1.5,
    borderLeftColor: GOLD,
  },

  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  monthName: {
    color: GOLD,
    fontSize: 8.2,
    lineHeight: 1.2,
  },

  scoreCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 0.65,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  score: {
    color: GOLD,
    fontSize: 7,
  },

  theme: {
    color: CREAM,
    fontSize: 7.2,
    lineHeight: 1.3,
    marginBottom: 5,
  },

  monthText: {
    color: MUTED_CREAM,
    fontSize: 6.15,
    lineHeight: 1.34,
    marginBottom: 5,
  },

  adviceLabel: {
    color: SOFT_TEXT,
    fontSize: 5.3,
    letterSpacing: 0.7,
    textTransform: "uppercase",
    marginBottom: 2,
  },

  advice: {
    color: CREAM,
    fontSize: 5.9,
    lineHeight: 1.3,
  },

  indicatorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  indicatorIcon: {
    width: 10,
    height: 10,
    objectFit: "contain",
    marginRight: 4,
  },

  indicatorText: {
    color: GOLD,
    fontSize: 5.4,
    textTransform: "uppercase",
    letterSpacing: 0.45,
  },

  progressTrack: {
    height: 3,
    borderRadius: 1.5,
    backgroundColor: TRACK,
    marginTop: 6,
    overflow: "hidden",
  },

  progressFill: {
    height: 3,
    borderRadius: 1.5,
    backgroundColor: GOLD,
  },

  conclusionCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginTop: 2,
    borderRadius: 9,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  conclusionIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  conclusionIcon: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },

  conclusionContent: {
    flex: 1,
  },

  conclusionLabel: {
    color: GOLD,
    fontSize: 6.5,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  conclusionText: {
    color: CREAM,
    fontSize: 7.3,
    lineHeight: 1.4,
  },
});

function MonthCard({
  month,
}: {
  month: YearMonthForecastItem;
}) {
  const score =
    normalizeHoroscopeScore(month.score);

  const cardStyle = [
    styles.monthCard,
    month.isFavorable
      ? styles.favorableCard
      : {},
    month.requiresCaution
      ? styles.cautionCard
      : {},
  ];

  return (
    <View
      style={cardStyle}
      wrap={false}
    >
      <View style={styles.monthHeader}>
        <Text style={styles.monthName}>
          {month.month}
        </Text>

        <View style={styles.scoreCircle}>
          <Text style={styles.score}>
            {score}
          </Text>
        </View>
      </View>

      <Text style={styles.theme}>
        {month.theme}
      </Text>

      <Text style={styles.monthText}>
        {month.text}
      </Text>

      <Text style={styles.adviceLabel}>
        Conseil du mois
      </Text>

      <Text style={styles.advice}>
        {month.advice}
      </Text>

      {(month.isFavorable ||
        month.requiresCaution) && (
        <View style={styles.indicatorRow}>
          <Image
            src={
              month.isFavorable
                ? FAVORABLE_ICON
                : CAUTION_ICON
            }
            style={styles.indicatorIcon}
          />

          <Text style={styles.indicatorText}>
            {month.isFavorable
              ? "Période favorable"
              : "Vigilance"}
          </Text>
        </View>
      )}

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${score}%`,
            },
          ]}
        />
      </View>
    </View>
  );
}

export default function HoroscopeYearCalendar({
  identity,
  period,
  calendar,
}: HoroscopeYearCalendarProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(period);

  const firstName =
    identity.firstName?.trim() || null;

  const months =
    Array.isArray(calendar.months)
      ? calendar.months.slice(0, 12)
      : [];

  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
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
            Votre année mois par mois
          </Text>

          <Text style={styles.title}>
            {firstName
              ? `${firstName}, votre calendrier annuel`
              : "Votre calendrier annuel"}
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.decoration}>
            <View style={styles.line} />

            <Image
              src={CALENDAR_ICON}
              style={styles.titleIcon}
            />

            <View style={styles.lineSmall} />
          </View>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Image
                src={FAVORABLE_ICON}
                style={styles.summaryIcon}
              />

              <Text style={styles.summaryLabel}>
                Meilleur mois
              </Text>
            </View>

            <Text style={styles.summaryValue}>
              {calendar.bestMonth.month}
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Image
                src={CAUTION_ICON}
                style={styles.summaryIcon}
              />

              <Text style={styles.summaryLabel}>
                Mois délicat
              </Text>
            </View>

            <Text style={styles.summaryValue}>
              {calendar.mostDelicateMonth.month}
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Image
                src={CALENDAR_ICON}
                style={styles.summaryIcon}
              />

              <Text style={styles.summaryLabel}>
                Moyenne annuelle
              </Text>
            </View>

            <Text style={styles.summaryValue}>
              {normalizeHoroscopeScore(
                calendar.annualAverageScore,
              )} / 100
            </Text>
          </View>
        </View>

        <View style={styles.monthGrid}>
          {months.map((month, index) => (
            <MonthCard
              key={`${month.month}-${index}`}
              month={month}
            />
          ))}
        </View>

        <View style={styles.conclusionCard}>
          <View style={styles.conclusionIconCircle}>
            <Image
              src={CALENDAR_ICON}
              style={styles.conclusionIcon}
            />
          </View>

          <View style={styles.conclusionContent}>
            <Text style={styles.conclusionLabel}>
              Votre fil conducteur
            </Text>

            <Text style={styles.conclusionText}>
              {calendar.synthesis}{" "}
              {calendar.conclusion}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
