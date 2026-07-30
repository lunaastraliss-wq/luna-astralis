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
  YearPremiumPageData,
} from "./YearPremiumPageTypes";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type YearPremiumHeroPageProps = {
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
| Icônes PNG stables
|--------------------------------------------------------------------------
*/

type YearPremiumIconKey =
  | "ascendant"
  | "balance"
  | "elementAir"
  | "elementEarth"
  | "elementFire"
  | "elementWater"
  | "fourElements"
  | "heart"
  | "hiddenTalents"
  | "innerWorld"
  | "integrationGuide"
  | "jupiter"
  | "lifeBlocks"
  | "lifePurpose"
  | "mars"
  | "mercury"
  | "modalityCardinal"
  | "modalityFixed"
  | "modalityMutable"
  | "money"
  | "moon"
  | "neptune"
  | "planetSaturn"
  | "pluto"
  | "saturn"
  | "soulPath"
  | "sun"
  | "uranus"
  | "venus";

type YearPremiumPageWithIconKey =
  YearPremiumPageData & {
    iconKey?: YearPremiumIconKey;
    id?: string;
    slug?: string;
  };

const ICONS =
  HOROSCOPE_ICONS as Record<string, string>;

const PAGE_ID_TO_ICON_KEY: Record<
  string,
  YearPremiumIconKey
> = {
  ascendant: "ascendant",
  balance: "balance",
  equilibre: "balance",
  "element-air": "elementAir",
  "element-eau": "elementWater",
  "element-feu": "elementFire",
  "element-terre": "elementEarth",
  elements: "fourElements",
  "four-elements": "fourElements",
  amour: "heart",
  love: "heart",
  "talents-caches": "hiddenTalents",
  "hidden-talents": "hiddenTalents",
  "monde-interieur": "innerWorld",
  "inner-world": "innerWorld",
  "integration-guide": "integrationGuide",
  "guide-integration": "integrationGuide",
  jupiter: "jupiter",
  "blocages-interieurs": "lifeBlocks",
  "life-blocks": "lifeBlocks",
  "raison-etre": "lifePurpose",
  "life-purpose": "lifePurpose",
  mars: "mars",
  mercure: "mercury",
  mercury: "mercury",
  "modalite-cardinale": "modalityCardinal",
  "modality-cardinal": "modalityCardinal",
  "modalite-fixe": "modalityFixed",
  "modality-fixed": "modalityFixed",
  "modalite-mutable": "modalityMutable",
  "modality-mutable": "modalityMutable",
  argent: "money",
  money: "money",
  lune: "moon",
  moon: "moon",
  neptune: "neptune",
  saturne: "saturn",
  saturn: "saturn",
  "planet-saturn": "planetSaturn",
  pluton: "pluto",
  pluto: "pluto",
  "mission-ame": "soulPath",
  "soul-path": "soulPath",
  soleil: "sun",
  sun: "sun",
  uranus: "uranus",
  venus: "venus",
};

function cleanIconUrl(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function getIcon(
  iconKey: YearPremiumIconKey,
  fallbackKey: YearPremiumIconKey = "sun",
): string {
  const requestedIcon = cleanIconUrl(ICONS[iconKey]);

  if (requestedIcon) {
    return requestedIcon;
  }

  const fallbackIcon = cleanIconUrl(ICONS[fallbackKey]);

  if (fallbackIcon) {
    return fallbackIcon;
  }

  const firstAvailableIcon = Object.values(ICONS)
    .map(cleanIconUrl)
    .find(Boolean);

  return firstAvailableIcon || "";
}

function normalizePageId(
  value?: string,
): string {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isPremiumIconKey(
  value: unknown,
): value is YearPremiumIconKey {
  return (
    typeof value === "string" &&
    cleanIconUrl(ICONS[value]).length > 0
  );
}

function inferIconKeyFromText(
  value?: string,
): YearPremiumIconKey | null {
  const normalized = normalizePageId(value);

  if (!normalized) {
    return null;
  }

  if (PAGE_ID_TO_ICON_KEY[normalized]) {
    return PAGE_ID_TO_ICON_KEY[normalized];
  }

  const keywordRules: Array<
    [string[], YearPremiumIconKey]
  > = [
    [["soleil", "solaire"], "sun"],
    [["lune", "lunaire", "emotion"], "moon"],
    [["mercure", "communication", "mental"], "mercury"],
    [["venus"], "venus"],
    [["amour", "relation", "affectif"], "heart"],
    [["mars", "action", "energie", "courage"], "mars"],
    [["jupiter", "expansion", "chance", "croissance"], "jupiter"],
    [["saturne", "structure", "discipline", "responsabilite"], "saturn"],
    [["uranus", "changement", "liberte", "innovation"], "uranus"],
    [["neptune", "intuition", "spiritualite", "reve"], "neptune"],
    [["pluton", "transformation", "renaissance", "pouvoir"], "pluto"],
    [["argent", "finance", "financier"], "money"],
    [["talent", "opportunite", "potentiel"], "hiddenTalents"],
    [["blocage", "defi", "vigilance", "obstacle"], "lifeBlocks"],
    [["mission", "raison-etre", "vocation"], "lifePurpose"],
    [["ame", "chemin"], "soulPath"],
    [["interieur", "introspection"], "innerWorld"],
    [["integration", "synthese", "conclusion"], "integrationGuide"],
    [["feu"], "elementFire"],
    [["terre"], "elementEarth"],
    [["air"], "elementAir"],
    [["eau"], "elementWater"],
    [["cardinal"], "modalityCardinal"],
    [["fixe"], "modalityFixed"],
    [["mutable"], "modalityMutable"],
    [["equilibre", "harmonie", "balance"], "balance"],
  ];

  for (const [keywords, iconKey] of keywordRules) {
    if (
      keywords.some((keyword) =>
        normalized.includes(keyword)
      )
    ) {
      return iconKey;
    }
  }

  return null;
}

function resolvePageIconKey(
  page: YearPremiumPageData,
): YearPremiumIconKey {
  const pageWithIconKey =
    page as YearPremiumPageWithIconKey;

  if (isPremiumIconKey(pageWithIconKey.iconKey)) {
    return pageWithIconKey.iconKey;
  }

  const stableId = normalizePageId(
    pageWithIconKey.id ||
      pageWithIconKey.slug,
  );

  if (stableId && PAGE_ID_TO_ICON_KEY[stableId]) {
    return PAGE_ID_TO_ICON_KEY[stableId];
  }

  return (
    inferIconKeyFromText(page.title) ||
    inferIconKeyFromText(page.subtitle) ||
    inferIconKeyFromText(page.heroTitle) ||
    inferIconKeyFromText(page.heroText) ||
    "sun"
  );
}

function resolvePageIcon(
  page: YearPremiumPageData,
): {
  iconKey: YearPremiumIconKey;
  icon: string;
} {
  const iconKey = resolvePageIconKey(page);

  return {
    iconKey,
    icon: getIcon(iconKey, "sun"),
  };
}

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
    marginBottom: 12,
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
    fontSize: 9.5,
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

  heroCard: {
    position: "relative",
    minHeight: 230,
    paddingVertical: 19,
    paddingHorizontal: 19,
    marginBottom: 12,
    borderRadius: 15,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2.2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  heroOrbitOne: {
    position: "absolute",
    top: -82,
    right: -66,
    width: 205,
    height: 205,
    borderRadius: 102.5,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -47,
    right: -31,
    width: 135,
    height: 135,
    borderRadius: 67.5,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  heroHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },

  heroIconOuter: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  heroIconInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 0.9,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  heroIcon: {
    width: 43,
    height: 43,
    objectFit: "contain",
  },

  heroHeading: {
    flex: 1,
    paddingRight: 10,
  },

  heroLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 14,
    lineHeight: 1.3,
    marginBottom: 6,
  },

  scoreBadge: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 15.5,
    lineHeight: 1,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    marginTop: 2,
  },

  introduction: {
    color: MUTED_CREAM,
    fontSize: 8.6,
    lineHeight: 1.5,
    textAlign: "justify",
    marginBottom: 10,
  },

  heroText: {
    color: CREAM,
    fontSize: 9,
    lineHeight: 1.52,
    textAlign: "justify",
    marginBottom: 11,
  },

  adviceBox: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 6.5,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  adviceText: {
    color: MUTED_CREAM,
    fontSize: 7.7,
    lineHeight: 1.45,
  },

  progressCard: {
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 11,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressLabel: {
    color: CREAM,
    fontSize: 8.5,
  },

  progressValue: {
    color: GOLD,
    fontSize: 9,
  },

  progressTrack: {
    width: "100%",
    height: 6,
    borderRadius: 3,
    backgroundColor: TRACK,
    overflow: "hidden",
  },

  progressFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: GOLD,
  },

  lowerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  lowerCard: {
    width: "48.5%",
    minHeight: 105,
    paddingVertical: 12,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  lowerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  lowerIcon: {
    width: 19,
    height: 19,
    objectFit: "contain",
    marginRight: 7,
  },

  lowerTitle: {
    color: GOLD,
    fontSize: 8.5,
  },

  lowerText: {
    color: MUTED_CREAM,
    fontSize: 7.6,
    lineHeight: 1.45,
    textAlign: "justify",
  },

  conclusionCard: {
    position: "relative",
    minHeight: 88,
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
    right: 13,
    top: 8,
    width: 58,
    height: 58,
    objectFit: "contain",
    opacity: 0.06,
  },

  conclusionLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  conclusionText: {
    color: CREAM,
    fontSize: 8.7,
    lineHeight: 1.5,
    paddingRight: 40,
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function YearPremiumHeroPage({
  identity,
  period,
  page,
}: YearPremiumHeroPageProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(period);

  const firstName =
    identity.firstName?.trim() || null;

  const score =
    normalizeHoroscopeScore(
      page.score ?? 0,
    );

  const personalizedIntroduction =
    page.introduction
      ? firstName
        ? `${firstName}, ${page.introduction}`
        : page.introduction
      : null;

  const {
    iconKey: pageIconKey,
    icon: pageIcon,
  } = resolvePageIcon(page);

  const opportunityIcon =
    getIcon("hiddenTalents", pageIconKey) ||
    pageIcon;

  const vigilanceIcon =
    getIcon("lifeBlocks", pageIconKey) ||
    pageIcon;

  const conclusionIcon =
    getIcon("integrationGuide", pageIconKey) ||
    pageIcon;

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
              src={pageIcon}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroOrbitOne} />
          <View style={styles.heroOrbitTwo} />

          <View style={styles.heroHeader}>
            <View style={styles.heroIconOuter}>
              <View style={styles.heroIconInner}>
                <Image
                  src={pageIcon}
                  style={styles.heroIcon}
                />
              </View>
            </View>

            <View style={styles.heroHeading}>
              <Text style={styles.heroLabel}>
                {page.scoreLabel ||
                  "Votre potentiel principal"}
              </Text>

              <Text style={styles.heroTitle}>
                {page.heroTitle ||
                  page.title}
              </Text>
            </View>

            {page.score !== undefined ? (
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

          {page.heroText ? (
            <Text style={styles.heroText}>
              {page.heroText}
            </Text>
          ) : null}

          {page.heroAdvice ? (
            <View style={styles.adviceBox}>
              <Text style={styles.adviceLabel}>
                Conseil d’activation
              </Text>

              <Text style={styles.adviceText}>
                {page.heroAdvice}
              </Text>
            </View>
          ) : null}
        </View>

        {page.score !== undefined ? (
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>
                {page.scoreLabel ||
                  "Niveau d’activation cette année"}
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

        {page.opportunity || page.vigilance ? (
          <View style={styles.lowerRow}>
            {page.opportunity ? (
              <View style={styles.lowerCard}>
                <View style={styles.lowerHeader}>
                  <Image
                    src={opportunityIcon}
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
                    src={vigilanceIcon}
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
              src={conclusionIcon}
              style={styles.conclusionWatermark}
            />

            <Text style={styles.conclusionLabel}>
              Synthèse de cette influence
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
