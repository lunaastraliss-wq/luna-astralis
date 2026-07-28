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
  YearPremiumBalanceColumn,
  YearPremiumPageData,
} from "./YearPremiumPageTypes";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type YearPremiumBalancePageProps = {
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
    right: -42,
    top: -60,
    width: 145,
    height: 145,
    borderRadius: 72.5,
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
    marginBottom: 11,
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

  balanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  balanceHeaderLine: {
    flex: 1,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  balanceHeaderIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 9,
  },

  balanceHeaderText: {
    color: GOLD,
    fontSize: 8.9,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginRight: 9,
  },

  columnsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  columnCard: {
    position: "relative",
    width: "47.8%",
    minHeight: 270,
    paddingVertical: 14,
    paddingHorizontal: 13,
    borderRadius: 12,
    borderWidth: 0.65,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  leftColumn: {
    borderTopWidth: 2,
    borderTopColor: GOLD,
  },

  rightColumn: {
    borderBottomWidth: 2,
    borderBottomColor: GOLD,
  },

  columnWatermark: {
    position: "absolute",
    right: 8,
    bottom: 8,
    width: 60,
    height: 60,
    objectFit: "contain",
    opacity: 0.045,
  },

  columnIconOuter: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 0.65,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  columnIconInner: {
    width: 43,
    height: 43,
    borderRadius: 21.5,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  columnIcon: {
    width: 27,
    height: 27,
    objectFit: "contain",
  },

  columnLabel: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  columnTitle: {
    color: GOLD,
    fontSize: 12,
    lineHeight: 1.3,
    marginBottom: 8,
  },

  columnText: {
    color: MUTED_CREAM,
    fontSize: 7.7,
    lineHeight: 1.47,
    textAlign: "justify",
    marginBottom: 10,
  },

  itemsList: {
    marginTop: 2,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 7,
  },

  itemBulletOuter: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    borderWidth: 0.55,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
    marginTop: 1,
  },

  itemBulletInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
  },

  itemText: {
    flex: 1,
    color: CREAM,
    fontSize: 7.1,
    lineHeight: 1.38,
  },

  centerBridge: {
    position: "absolute",
    left: "48.4%",
    top: 106,
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.75,
    borderColor: GOLD,
    backgroundColor: NAVY,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },

  centerBridgeIcon: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },

  lowerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  lowerCard: {
    width: "48.5%",
    minHeight: 76,
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
    minHeight: 78,
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

  emptyColumnText: {
    color: SOFT_TEXT,
    fontSize: 7.4,
    lineHeight: 1.4,
    fontStyle: "italic",
  },
});

/*
|--------------------------------------------------------------------------
| Colonne
|--------------------------------------------------------------------------
*/

type PremiumBalanceColumnProps = {
  column: YearPremiumBalanceColumn | undefined;
  fallbackIcon: string;
  side: "left" | "right";
};

function PremiumBalanceColumn({
  column,
  fallbackIcon,
  side,
}: PremiumBalanceColumnProps) {
  const icon =
    column?.icon || fallbackIcon;

  const items =
    Array.isArray(column?.items)
      ? column.items.slice(0, 5)
      : [];

  return (
    <View
      style={[
        styles.columnCard,
        side === "left"
          ? styles.leftColumn
          : styles.rightColumn,
      ]}
      wrap={false}
    >
      <Image
        src={icon}
        style={styles.columnWatermark}
      />

      <View style={styles.columnIconOuter}>
        <View style={styles.columnIconInner}>
          <Image
            src={icon}
            style={styles.columnIcon}
          />
        </View>
      </View>

      <Text style={styles.columnLabel}>
        {side === "left"
          ? "Première dynamique"
          : "Seconde dynamique"}
      </Text>

      <Text style={styles.columnTitle}>
        {column?.title ||
          "Analyse à compléter"}
      </Text>

      {column?.text ? (
        <Text style={styles.columnText}>
          {column.text}
        </Text>
      ) : (
        <Text style={styles.emptyColumnText}>
          Le contenu principal de cette dynamique
          sera ajouté dans les données de la page.
        </Text>
      )}

      {items.length > 0 ? (
        <View style={styles.itemsList}>
          {items.map(
            (item, index) => (
              <View
                key={`${side}-${index}-${item}`}
                style={styles.itemRow}
              >
                <View style={styles.itemBulletOuter}>
                  <View style={styles.itemBulletInner} />
                </View>

                <Text style={styles.itemText}>
                  {item}
                </Text>
              </View>
            ),
          )}
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

export default function YearPremiumBalancePage({
  identity,
  period,
  page,
}: YearPremiumBalancePageProps) {
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
                Recherche d’équilibre
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
                  "Niveau d’équilibre cette année"}
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

        <View style={styles.balanceHeader}>
          <View style={styles.balanceHeaderLine} />

          <Image
            src={page.icon}
            style={styles.balanceHeaderIcon}
          />

          <Text style={styles.balanceHeaderText}>
            Les deux forces à harmoniser
          </Text>

          <View style={styles.balanceHeaderLine} />
        </View>

        <View style={styles.columnsRow}>
          <PremiumBalanceColumn
            column={page.leftColumn}
            fallbackIcon={page.icon}
            side="left"
          />

          <View style={styles.centerBridge}>
            <Image
              src={page.icon}
              style={styles.centerBridgeIcon}
            />
          </View>

          <PremiumBalanceColumn
            column={page.rightColumn}
            fallbackIcon={page.icon}
            side="right"
          />
        </View>

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
              Point d’équilibre
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
