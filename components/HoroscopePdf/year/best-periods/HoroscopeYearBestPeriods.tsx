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
} from "../../HoroscopePdfUtils";

import type {
  YearBestPeriodItem,
  YearBestPeriodsResult,
} from "../data/types";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type HoroscopeYearBestPeriodsProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  bestPeriods: YearBestPeriodsResult;
};

/*
|--------------------------------------------------------------------------
| Couleurs
|--------------------------------------------------------------------------
*/

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

/*
|--------------------------------------------------------------------------
| Icônes
|--------------------------------------------------------------------------
*/

const ICONS =
  HOROSCOPE_ICONS as Record<string, string>;

function icon(
  key: string,
  fallback = "jupiter",
): string {
  return (
    ICONS[key]?.trim() ||
    ICONS[fallback]?.trim() ||
    Object.values(ICONS).find(Boolean) ||
    ""
  );
}

const PERIOD_ICON = icon("jupiter");

const LOVE_ICON =
  icon("heart", "venus");

const CAREER_ICON =
  icon("lifePurpose", "sun");

const FINANCE_ICON =
  icon("money", "jupiter");

const PROJECT_ICON =
  icon("mars", "uranus");

const CAUTION_ICON =
  icon("lifeBlocks", "saturn");

const CONCLUSION_ICON =
  icon(
    "integrationGuide",
    "jupiter",
  );

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 33,
    paddingHorizontal: 42,
    paddingBottom: 53,
    backgroundColor: NAVY,
    fontFamily: "Helvetica",
    overflow: "hidden",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
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
    marginBottom: 13,
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
    marginBottom: 12,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.35,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.2,
    marginBottom: 7,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 9.6,
    marginBottom: 8,
  },

  decoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    width: 60,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  titleIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 9,
  },

  lineSmall: {
    width: 22,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  /*
  |--------------------------------------------------------------------------
  | Introduction
  |--------------------------------------------------------------------------
  */

  introCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 11,
    borderRadius: 13,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2.2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
  },

  introIconCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  introIcon: {
    width: 38,
    height: 38,
    objectFit: "contain",
  },

  introContent: {
    flex: 1,
  },

  introLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.15,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  introText: {
    color: CREAM,
    fontSize: 8.6,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  /*
  |--------------------------------------------------------------------------
  | Grille des périodes
  |--------------------------------------------------------------------------
  */

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  card: {
    width: "48.7%",
    minHeight: 130,
    paddingVertical: 11,
    paddingHorizontal: 12,
    marginBottom: 9,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  cardIconCircle: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  cardIcon: {
    width: 19,
    height: 19,
    objectFit: "contain",
  },

  cardTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 9,
    lineHeight: 1.25,
  },

  monthsLabel: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  months: {
    color: CREAM,
    fontSize: 8.1,
    lineHeight: 1.35,
    marginBottom: 7,
  },

  cardText: {
    color: MUTED_CREAM,
    fontSize: 7.25,
    lineHeight: 1.42,
    marginBottom: 6,
  },

  adviceLabel: {
    color: SOFT_TEXT,
    fontSize: 6.1,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  advice: {
    color: CREAM,
    fontSize: 7.1,
    lineHeight: 1.38,
  },

  /*
  |--------------------------------------------------------------------------
  | Vigilance
  |--------------------------------------------------------------------------
  */

  cautionCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 11,
    paddingHorizontal: 13,
    marginBottom: 9,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  cautionIconCircle: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  cautionIcon: {
    width: 23,
    height: 23,
    objectFit: "contain",
  },

  cautionContent: {
    flex: 1,
  },

  cautionLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.15,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  cautionMonths: {
    color: CREAM,
    fontSize: 8.5,
    marginBottom: 5,
  },

  cautionText: {
    color: MUTED_CREAM,
    fontSize: 7.4,
    lineHeight: 1.42,
  },

  /*
  |--------------------------------------------------------------------------
  | Conclusion
  |--------------------------------------------------------------------------
  */

  conclusionCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  watermark: {
    position: "absolute",
    right: 14,
    top: 7,
    width: 54,
    height: 54,
    objectFit: "contain",
    opacity: 0.06,
  },

  conclusionIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  conclusionIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  conclusionContent: {
    flex: 1,
  },

  conclusionLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  conclusionText: {
    color: CREAM,
    fontSize: 8.4,
    lineHeight: 1.48,
  },
});

/*
|--------------------------------------------------------------------------
| Formatage de la période
|--------------------------------------------------------------------------
*/

function getMonth(
  item: YearBestPeriodItem,
): string {
  return item.month?.trim() || "";
}

/*
|--------------------------------------------------------------------------
| Carte d’une période
|--------------------------------------------------------------------------
*/

function PeriodCard({
  title,
  item,
  iconUrl,
}: {
  title: string;
  item: YearBestPeriodItem;
  iconUrl: string;
}) {
  return (
    <View
      style={styles.card}
      wrap={false}
    >
      <View style={styles.cardHeader}>
        <View style={styles.cardIconCircle}>
          <Image
            src={iconUrl}
            style={styles.cardIcon}
          />
        </View>

        <Text style={styles.cardTitle}>
          {title}
        </Text>
      </View>

      <Text style={styles.monthsLabel}>
        Période favorable
      </Text>

      <Text style={styles.months}>
        {getMonth(item)}
      </Text>

      <Text style={styles.cardText}>
        {item.text}
      </Text>

      <Text style={styles.adviceLabel}>
        Conseil
      </Text>

      <Text style={styles.advice}>
        {item.advice}
      </Text>
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| Page principale
|--------------------------------------------------------------------------
*/

export default function HoroscopeYearBestPeriods({
  identity,
  period,
  bestPeriods,
}: HoroscopeYearBestPeriodsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(period);

  const firstName =
    identity.firstName?.trim() || null;

  const introduction =
    firstName
      ? `${firstName}, ${bestPeriods.introduction}`
      : bestPeriods.introduction;

  const cautionMonths =
    Array.isArray(bestPeriods.cautionMonths)
      ? bestPeriods.cautionMonths
          .map((item) => item.month?.trim())
          .filter(Boolean)
          .join(" • ")
      : "";

  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      <HoroscopeStarBackground />

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
            Les temps forts de votre année
          </Text>

          <Text style={styles.title}>
            {firstName
              ? `${firstName}, vos meilleures périodes`
              : "Vos meilleures périodes"}
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.decoration}>
            <View style={styles.line} />

            <Image
              src={PERIOD_ICON}
              style={styles.titleIcon}
            />

            <View style={styles.lineSmall} />
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Introduction
        |--------------------------------------------------------------------------
        */}

        <View style={styles.introCard}>
          <View style={styles.introIconCircle}>
            <Image
              src={PERIOD_ICON}
              style={styles.introIcon}
            />
          </View>

          <View style={styles.introContent}>
            <Text style={styles.introLabel}>
              Votre rythme annuel
            </Text>

            <Text style={styles.introText}>
              {introduction}
            </Text>
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Meilleures périodes
        |--------------------------------------------------------------------------
        */}

        <View style={styles.grid}>
          <PeriodCard
            title="Amour et relations"
            item={bestPeriods.love}
            iconUrl={LOVE_ICON}
          />

          <PeriodCard
            title="Carrière et évolution"
            item={bestPeriods.career}
            iconUrl={CAREER_ICON}
          />

          <PeriodCard
            title="Finances et stabilité"
            item={bestPeriods.finance}
            iconUrl={FINANCE_ICON}
          />

          <PeriodCard
            title="Projets et initiatives"
            item={bestPeriods.project}
            iconUrl={PROJECT_ICON}
          />
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Périodes de vigilance
        |--------------------------------------------------------------------------
        */}

        <View style={styles.cautionCard}>
          <View style={styles.cautionIconCircle}>
            <Image
              src={CAUTION_ICON}
              style={styles.cautionIcon}
            />
          </View>

          <View style={styles.cautionContent}>
            <Text style={styles.cautionLabel}>
              Périodes de vigilance
            </Text>

            <Text style={styles.cautionMonths}>
              {cautionMonths}
            </Text>

            <Text style={styles.cautionText}>
  Ces périodes demandent davantage de patience, de recul et de prudence.
  Évitez de forcer les décisions importantes et prenez le temps de vérifier
  les détails avant de vous engager.
</Text>
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Conclusion
        |--------------------------------------------------------------------------
        */}

        <View style={styles.conclusionCard}>
          <Image
            src={PERIOD_ICON}
            style={styles.watermark}
          />

          <View style={styles.conclusionIconCircle}>
            <Image
              src={CONCLUSION_ICON}
              style={styles.conclusionIcon}
            />
          </View>

          <View style={styles.conclusionContent}>
            <Text style={styles.conclusionLabel}>
              Votre stratégie gagnante
            </Text>

            <Text style={styles.conclusionText}>
              {bestPeriods.synthesis}{" "}
              {bestPeriods.conclusion}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
