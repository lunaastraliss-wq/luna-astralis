import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  HOROSCOPE_LOGO_URL,
} from "../../../HoroscopePdfAssets";

import HoroscopePageFooter
  from "../../../HoroscopePageFooter";

import HoroscopeStarBackground
  from "../../../HoroscopeStarBackground";

import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../../../HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
  normalizeHoroscopeScore,
} from "../../../HoroscopePdfUtils";

import type {
  YearPremiumCardItem,
  YearPremiumPageData,
} from "./YearPremiumPageTypes";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type YearPremiumSummaryPageProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  page: YearPremiumPageData;
};

/*
|--------------------------------------------------------------------------
| Couleurs
|--------------------------------------------------------------------------
*/

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
const DEEP_GOLD = "#4E412D";

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

  titleBlock: {
    marginBottom: 11,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.3,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 24,
    lineHeight: 1.2,
    marginBottom: 7,
  },

  subtitle: {
    color: MUTED_CREAM,
    fontSize: 9.3,
    lineHeight: 1.4,
    marginBottom: 6,
  },

  period: {
    color: SOFT_TEXT,
    fontSize: 8.8,
    marginBottom: 8,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleLine: {
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

  titleLineSmall: {
    width: 22,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  summaryHero: {
    position: "relative",
    minHeight: 132,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderRadius: 13,
    borderWidth: 0.65,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2.2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  heroOrbitOne: {
    position: "absolute",
    top: -70,
    right: -55,
    width: 175,
    height: 175,
    borderRadius: 87.5,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -36,
    right: -21,
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  heroIconCircle: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  heroIcon: {
    width: 34,
    height: 34,
    objectFit: "contain",
  },

  heroHeading: {
    flex: 1,
    paddingRight: 10,
  },

  heroLabel: {
    color: SOFT_TEXT,
    fontSize: 6.5,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 12.5,
    lineHeight: 1.3,
  },

  scoreBadge: {
    width: 49,
    height: 49,
    borderRadius: 24.5,
    borderWidth: 0.75,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 14,
    lineHeight: 1,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 5.8,
    marginTop: 2,
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 8.3,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  progressCard: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    marginBottom: 10,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  progressLabel: {
    color: CREAM,
    fontSize: 8.1,
  },

  progressValue: {
    color: GOLD,
    fontSize: 8.7,
  },

  progressTrack: {
    width: "100%",
    height: 5,
    borderRadius: 2.5,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  progressFill: {
    height: 5,
    borderRadius: 2.5,
    backgroundColor: GOLD,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionLine: {
    width: 28,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  sectionIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 8,
  },

  sectionTitle: {
    color: GOLD,
    fontSize: 9.1,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },

  summaryList: {
    marginBottom: 3,
  },

  summaryItem: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 80,
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  summaryWatermark: {
    position: "absolute",
    right: 7,
    bottom: 4,
    width: 40,
    height: 40,
    objectFit: "contain",
    opacity: 0.045,
  },

  itemNumber: {
    width: 29,
    height: 29,
    borderRadius: 14.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  itemNumberText: {
    color: GOLD,
    fontSize: 8.5,
  },

  itemContent: {
    flex: 1,
    paddingRight: 8,
  },

  itemLabel: {
    color: SOFT_TEXT,
    fontSize: 5.8,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  itemTitle: {
    color: GOLD,
    fontSize: 8.8,
    lineHeight: 1.25,
    marginBottom: 5,
  },

  itemText: {
    color: MUTED_CREAM,
    fontSize: 7.2,
    lineHeight: 1.4,
    textAlign: "justify",
  },

  itemScore: {
    minWidth: 29,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  itemScoreText: {
    color: GOLD,
    fontSize: 7,
  },

  lowerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  lowerCard: {
    width: "48.5%",
    minHeight: 75,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  lowerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  lowerIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
    marginRight: 7,
  },

  lowerTitle: {
    color: GOLD,
    fontSize: 8.2,
  },

  lowerText: {
    color: MUTED_CREAM,
    fontSize: 7.1,
    lineHeight: 1.4,
  },

  conclusionCard: {
    position: "relative",
    minHeight: 86,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    borderTopWidth: 1.4,
    borderTopColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  conclusionWatermark: {
    position: "absolute",
    right: 12,
    top: 7,
    width: 58,
    height: 58,
    objectFit: "contain",
    opacity: 0.06,
  },

  conclusionLabel: {
    color: GOLD,
    fontSize: 6.8,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  conclusionText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.48,
    paddingRight: 40,
  },

  emptyCard: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  emptyText: {
    color: MUTED_CREAM,
    fontSize: 8.4,
    lineHeight: 1.45,
    textAlign: "center",
  },
});

/*
|--------------------------------------------------------------------------
| Élément de synthèse
|--------------------------------------------------------------------------
*/

type PremiumSummaryItemProps = {
  item: YearPremiumCardItem;
  index: number;
  fallbackIcon: string;
};

function PremiumSummaryItem({
  item,
  index,
  fallbackIcon,
}: PremiumSummaryItemProps) {
  const score =
    item.score !== undefined
      ? normalizeHoroscopeScore(item.score)
      : null;

  const icon =
    item.icon || fallbackIcon;

  return (
    <View
      style={styles.summaryItem}
      wrap={false}
    >
      <Image
        src={icon}
        style={styles.summaryWatermark}
      />

      <View style={styles.itemNumber}>
        <Text style={styles.itemNumberText}>
          {index + 1}
        </Text>
      </View>

      <View style={styles.itemContent}>
        {item.label ? (
          <Text style={styles.itemLabel}>
            {item.label}
          </Text>
        ) : null}

        <Text style={styles.itemTitle}>
          {item.title}
        </Text>

        <Text style={styles.itemText}>
          {item.text}
        </Text>

        {item.secondaryText ? (
          <Text style={styles.itemText}>
            {item.secondaryText}
          </Text>
        ) : null}
      </View>

      {score !== null ? (
        <View style={styles.itemScore}>
          <Text style={styles.itemScoreText}>
            {score} %
          </Text>
        </View>
      ) : null}
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function YearPremiumSummaryPage({
  identity,
  period,
  page,
}: YearPremiumSummaryPageProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(period);

  const firstName =
    identity.firstName?.trim() || null;

  const score =
    page.score !== undefined
      ? normalizeHoroscopeScore(page.score)
      : null;

  const cards =
    Array.isArray(page.cards)
      ? page.cards.slice(0, 5)
      : [];

  const personalizedIntroduction =
    page.introduction
      ? firstName
        ? `${firstName}, ${page.introduction}`
        : page.introduction
      : null;

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
            {page.eyebrow ||
              "Analyse approfondie de votre année"}
          </Text>

          <Text style={styles.title}>
            {page.title}
          </Text>

          {page.subtitle ? (
            <Text style={styles.subtitle}>
              {page.subtitle}
            </Text>
          ) : null}

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={page.icon}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.summaryHero}>
          <View style={styles.heroOrbitOne} />
          <View style={styles.heroOrbitTwo} />

          <View style={styles.heroHeader}>
            <View style={styles.heroIconCircle}>
              <Image
                src={page.icon}
                style={styles.heroIcon}
              />
            </View>

            <View style={styles.heroHeading}>
              <Text style={styles.heroLabel}>
                {page.scoreLabel ||
                  "Vision globale de cette influence"}
              </Text>

              <Text style={styles.heroTitle}>
                {page.heroTitle ||
                  page.title}
              </Text>
            </View>

            {score !== null ? (
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreValue}>
                  {score}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            ) : null}
          </View>

          {personalizedIntroduction ? (
            <Text style={styles.introduction}>
              {personalizedIntroduction}
            </Text>
          ) : null}
        </View>

        {score !== null ? (
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>
                {page.scoreLabel ||
                  "Niveau global pour cette année"}
              </Text>

              <Text style={styles.progressValue}>
                {score} %
              </Text>
            </View>

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
        ) : null}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={page.icon}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Les points essentiels à retenir
          </Text>
        </View>

        {cards.length > 0 ? (
          <View style={styles.summaryList}>
            {cards.map(
              (item, index) => (
                <PremiumSummaryItem
                  key={`${page.key}-${item.title}-${index}`}
                  item={item}
                  index={index}
                  fallbackIcon={page.icon}
                />
              ),
            )}
          </View>
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              Les principaux éléments de cette synthèse
              seront ajoutés dans les données de la page.
            </Text>
          </View>
        )}

        {page.opportunity || page.vigilance ? (
          <View style={styles.lowerRow}>
            {page.opportunity ? (
              <View style={styles.lowerCard}>
                <View style={styles.lowerHeader}>
                  <Image
                    src={page.icon}
                    style={styles.lowerIcon}
                  />

                  <Text style={styles.lowerTitle}>
                    Opportunité
                  </Text>
                </View>

                <Text style={styles.lowerText}>
                  {page.opportunity}
                </Text>
              </View>
            ) : null}

            {page.vigilance ? (
              <View style={styles.lowerCard}>
                <View style={styles.lowerHeader}>
                  <Image
                    src={page.icon}
                    style={styles.lowerIcon}
                  />

                  <Text style={styles.lowerTitle}>
                    Point de vigilance
                  </Text>
                </View>

                <Text style={styles.lowerText}>
                  {page.vigilance}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}

        {page.conclusion ? (
          <View style={styles.conclusionCard}>
            <Image
              src={page.icon}
              style={styles.conclusionWatermark}
            />

            <Text style={styles.conclusionLabel}>
              Synthèse finale
            </Text>

            <Text style={styles.conclusionText}>
              {page.conclusion}
            </Text>
          </View>
        ) : null}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
