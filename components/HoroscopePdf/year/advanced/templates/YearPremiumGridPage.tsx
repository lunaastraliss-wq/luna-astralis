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

type YearPremiumGridPageProps = {
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

  introductionCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 92,
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 0.65,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  introductionOrbit: {
    position: "absolute",
    right: -40,
    top: -58,
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  introductionIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  introductionIcon: {
    width: 32,
    height: 32,
    objectFit: "contain",
  },

  introductionContent: {
    flex: 1,
    paddingRight: 10,
  },

  introductionLabel: {
    color: GOLD,
    fontSize: 6.7,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 8.2,
    lineHeight: 1.47,
    textAlign: "justify",
  },

  scoreBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
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

  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  card: {
    position: "relative",
    width: "48.7%",
    minHeight: 124,
    paddingVertical: 11,
    paddingHorizontal: 11,
    marginBottom: 8,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  cardWatermark: {
    position: "absolute",
    right: 7,
    bottom: 5,
    width: 42,
    height: 42,
    objectFit: "contain",
    opacity: 0.045,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  cardIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  cardIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },

  cardHeading: {
    flex: 1,
  },

  cardLabel: {
    color: SOFT_TEXT,
    fontSize: 5.7,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 2,
  },

  cardTitle: {
    color: GOLD,
    fontSize: 8.7,
    lineHeight: 1.25,
  },

  cardScore: {
    minWidth: 27,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  cardScoreText: {
    color: GOLD,
    fontSize: 7,
  },

  cardText: {
    color: MUTED_CREAM,
    fontSize: 7.25,
    lineHeight: 1.4,
    textAlign: "justify",
    marginBottom: 6,
  },

  cardSecondaryLabel: {
    color: GOLD,
    fontSize: 6,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  cardSecondaryText: {
    color: CREAM,
    fontSize: 6.9,
    lineHeight: 1.36,
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
    minHeight: 76,
    paddingVertical: 12,
    paddingHorizontal: 14,
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
    top: 6,
    width: 56,
    height: 56,
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
    fontSize: 8.3,
    lineHeight: 1.47,
    paddingRight: 38,
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
| Carte individuelle
|--------------------------------------------------------------------------
*/

type PremiumGridCardProps = {
  card: YearPremiumCardItem;
  index: number;
  fallbackIcon: string;
};

function PremiumGridCard({
  card,
  index,
  fallbackIcon,
}: PremiumGridCardProps) {
  const cardScore =
    card.score !== undefined
      ? normalizeHoroscopeScore(card.score)
      : null;

  const icon =
    card.icon || fallbackIcon;

  return (
    <View
      style={styles.card}
      wrap={false}
    >
      <Image
        src={icon}
        style={styles.cardWatermark}
      />

      <View style={styles.cardHeader}>
        <View style={styles.cardIconCircle}>
          <Image
            src={icon}
            style={styles.cardIcon}
          />
        </View>

        <View style={styles.cardHeading}>
          {card.label ? (
            <Text style={styles.cardLabel}>
              {card.label}
            </Text>
          ) : null}

          <Text style={styles.cardTitle}>
            {card.title}
          </Text>
        </View>

        {cardScore !== null ? (
          <View style={styles.cardScore}>
            <Text style={styles.cardScoreText}>
              {cardScore} %
            </Text>
          </View>
        ) : null}
      </View>

      <Text style={styles.cardText}>
        {card.text}
      </Text>

      {card.secondaryText ? (
        <>
          <Text style={styles.cardSecondaryLabel}>
            {card.label
              ? "À retenir"
              : `Clé ${index + 1}`}
          </Text>

          <Text style={styles.cardSecondaryText}>
            {card.secondaryText}
          </Text>
        </>
      ) : null}
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function YearPremiumGridPage({
  identity,
  period,
  page,
}: YearPremiumGridPageProps) {
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
      ? page.cards.slice(0, 4)
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

        {personalizedIntroduction ? (
          <View style={styles.introductionCard}>
            <View style={styles.introductionOrbit} />

            <View style={styles.introductionIconCircle}>
              <Image
                src={page.icon}
                style={styles.introductionIcon}
              />
            </View>

            <View style={styles.introductionContent}>
              <Text style={styles.introductionLabel}>
                Vue d’ensemble
              </Text>

              <Text style={styles.introductionText}>
                {personalizedIntroduction}
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
        ) : null}

        {score !== null ? (
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>
                {page.scoreLabel ||
                  "Niveau d’expression cette année"}
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
            Les quatre dimensions principales
          </Text>
        </View>

        {cards.length > 0 ? (
          <View style={styles.cardsGrid}>
            {cards.map(
              (card, index) => (
                <PremiumGridCard
                  key={`${page.key}-${card.title}-${index}`}
                  card={card}
                  index={index}
                  fallbackIcon={page.icon}
                />
              ),
            )}
          </View>
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              Les éléments détaillés de cette analyse
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
              Synthèse de cette analyse
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
