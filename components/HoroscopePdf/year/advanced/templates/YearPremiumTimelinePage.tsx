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
  YearPremiumTimelineItem,
} from "./YearPremiumPageTypes";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type YearPremiumTimelinePageProps = {
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

type YearPremiumTimelineItemWithIconKey =
  YearPremiumTimelineItem & {
    iconKey?: YearPremiumIconKey;
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
    inferIconKeyFromText(page.introduction) ||
    inferIconKeyFromText(page.conclusion) ||
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

function resolveTimelineItemIconKey(
  item: YearPremiumTimelineItem,
  fallbackKey: YearPremiumIconKey,
): YearPremiumIconKey {
  const itemWithIconKey =
    item as YearPremiumTimelineItemWithIconKey;

  if (isPremiumIconKey(itemWithIconKey.iconKey)) {
    return itemWithIconKey.iconKey;
  }

  return (
    inferIconKeyFromText(item.title) ||
    inferIconKeyFromText(item.text) ||
    inferIconKeyFromText(item.advice) ||
    inferIconKeyFromText(item.period) ||
    fallbackKey
  );
}

function resolveTimelineItemIcon(
  item: YearPremiumTimelineItem,
  fallbackKey: YearPremiumIconKey,
): string {
  const iconKey = resolveTimelineItemIconKey(
    item,
    fallbackKey,
  );

  return getIcon(iconKey, fallbackKey);
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
    minHeight: 86,
    paddingVertical: 12,
    paddingHorizontal: 14,
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
    right: -44,
    top: -62,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  introductionIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  introductionIcon: {
    width: 30,
    height: 30,
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
    fontSize: 8.1,
    lineHeight: 1.45,
    textAlign: "justify",
  },

  scoreBadge: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 0.75,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 13.5,
    lineHeight: 1,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 5.6,
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

  timeline: {
    position: "relative",
    marginBottom: 9,
  },

  timelineLine: {
    position: "absolute",
    left: 55,
    top: 18,
    bottom: 18,
    width: 1,
    backgroundColor: DARK_GOLD,
  },

  timelineItem: {
    position: "relative",
    flexDirection: "row",
    minHeight: 101,
    marginBottom: 8,
  },

  periodColumn: {
    width: 46,
    paddingTop: 8,
    alignItems: "flex-end",
  },

  periodText: {
    color: GOLD,
    fontSize: 7.2,
    lineHeight: 1.25,
    textAlign: "right",
  },

  markerColumn: {
    width: 20,
    alignItems: "center",
    paddingTop: 11,
  },

  markerOuter: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY,
    alignItems: "center",
    justifyContent: "center",
  },

  markerInner: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: GOLD,
  },

  timelineCard: {
    position: "relative",
    flex: 1,
    minHeight: 94,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  timelineWatermark: {
    position: "absolute",
    right: 8,
    bottom: 5,
    width: 42,
    height: 42,
    objectFit: "contain",
    opacity: 0.045,
  },

  timelineHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  timelineIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.65,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  timelineIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },

  timelineTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 8.7,
    lineHeight: 1.25,
  },

  timelineText: {
    color: MUTED_CREAM,
    fontSize: 7.15,
    lineHeight: 1.38,
    textAlign: "justify",
    marginBottom: 5,
  },

  adviceBox: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 7,
    borderWidth: 0.45,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 5.8,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  adviceText: {
    color: CREAM,
    fontSize: 6.7,
    lineHeight: 1.35,
  },

  lowerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  lowerCard: {
    width: "48.5%",
    minHeight: 72,
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
    minHeight: 74,
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
| Élément chronologique
|--------------------------------------------------------------------------
*/

type PremiumTimelineItemProps = {
  item: YearPremiumTimelineItem;
  fallbackIconKey: YearPremiumIconKey;
};

function PremiumTimelineItem({
  item,
  fallbackIconKey,
}: PremiumTimelineItemProps) {
  const icon =
    resolveTimelineItemIcon(
      item,
      fallbackIconKey,
    );

  return (
    <View
      style={styles.timelineItem}
      wrap={false}
    >
      <View style={styles.periodColumn}>
        <Text style={styles.periodText}>
          {item.period}
        </Text>
      </View>

      <View style={styles.markerColumn}>
        <View style={styles.markerOuter}>
          <View style={styles.markerInner} />
        </View>
      </View>

      <View style={styles.timelineCard}>
        <Image
          src={icon}
          style={styles.timelineWatermark}
        />

        <View style={styles.timelineHeader}>
          <View style={styles.timelineIconCircle}>
            <Image
              src={icon}
              style={styles.timelineIcon}
            />
          </View>

          <Text style={styles.timelineTitle}>
            {item.title}
          </Text>
        </View>

        <Text style={styles.timelineText}>
          {item.text}
        </Text>

        {item.advice ? (
          <View style={styles.adviceBox}>
            <Text style={styles.adviceLabel}>
              Conseil
            </Text>

            <Text style={styles.adviceText}>
              {item.advice}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function YearPremiumTimelinePage({
  identity,
  period,
  page,
}: YearPremiumTimelinePageProps) {
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

  const timeline =
    Array.isArray(page.timeline)
      ? page.timeline.slice(0, 4)
      : [];

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

        {personalizedIntroduction ? (
          <View style={styles.introductionCard}>
            <View style={styles.introductionOrbit} />

            <View style={styles.introductionIconCircle}>
              <Image
                src={pageIcon}
                style={styles.introductionIcon}
              />
            </View>

            <View style={styles.introductionContent}>
              <Text style={styles.introductionLabel}>
                Votre parcours annuel
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
                  "Intensité globale de cette évolution"}
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
            src={pageIcon}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Les grandes étapes de votre année
          </Text>
        </View>

        {timeline.length > 0 ? (
          <View style={styles.timeline}>
            <View style={styles.timelineLine} />

            {timeline.map(
              (item, index) => (
                <PremiumTimelineItem
                  key={`${page.key}-${item.period}-${index}`}
                  item={item}
                  fallbackIconKey={pageIconKey}
                />
              ),
            )}
          </View>
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              Les étapes chronologiques de cette analyse
              seront ajoutées dans les données de la page.
            </Text>
          </View>
        )}

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
              Synthèse du parcours
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
