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

/*
|--------------------------------------------------------------------------
| Types
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

export type YearlyStrengthItem = {
  title: string;
  text: string;
  advice: string;
  iconKey?: YearPremiumIconKey;
};

export type YearlyStrengthsResult = {
  title: string;
  introduction: string;
  dominantStrength: YearlyStrengthItem;
  strengths: YearlyStrengthItem[];
  potentialScore: number;
  opportunity: string;
  vigilance: string;
  conclusion: string;
};

type HoroscopeYearStrengthsProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  strengths: YearlyStrengthsResult;
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
| Résolution sécurisée des icônes
|--------------------------------------------------------------------------
*/

const ICONS =
  HOROSCOPE_ICONS as Record<string, string>;

const ICON_ID_TO_KEY: Record<
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
  force: "hiddenTalents",
  forces: "hiddenTalents",
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
  fallbackKey: YearPremiumIconKey = "hiddenTalents",
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

function normalizeIconText(
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
  const normalized = normalizeIconText(value);

  if (!normalized) {
    return null;
  }

  if (ICON_ID_TO_KEY[normalized]) {
    return ICON_ID_TO_KEY[normalized];
  }

  const keywordRules: Array<
    [string[], YearPremiumIconKey]
  > = [
    [["soleil", "solaire", "rayonnement", "confiance"], "sun"],
    [["lune", "lunaire", "emotion", "sensibilite"], "moon"],
    [["mercure", "communication", "mental", "analyse"], "mercury"],
    [["venus"], "venus"],
    [["amour", "relation", "affectif"], "heart"],
    [["mars", "action", "energie", "courage", "initiative"], "mars"],
    [["jupiter", "expansion", "chance", "croissance", "ouverture"], "jupiter"],
    [["saturne", "structure", "discipline", "responsabilite"], "saturn"],
    [["uranus", "changement", "liberte", "innovation"], "uranus"],
    [["neptune", "intuition", "spiritualite", "reve"], "neptune"],
    [["pluton", "transformation", "renaissance", "pouvoir"], "pluto"],
    [["argent", "finance", "financier"], "money"],
    [["force", "talent", "don", "potentiel", "creativite"], "hiddenTalents"],
    [["blocage", "frein", "defi", "vigilance", "obstacle"], "lifeBlocks"],
    [["mission", "raison-etre", "vocation"], "lifePurpose"],
    [["ame", "chemin"], "soulPath"],
    [["interieur", "introspection"], "innerWorld"],
    [["integration", "synthese", "conclusion", "combinaison"], "integrationGuide"],
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

function resolveStrengthIconKey(
  strength: YearlyStrengthItem,
  index: number,
): YearPremiumIconKey {
  if (isPremiumIconKey(strength.iconKey)) {
    return strength.iconKey;
  }

  const inferredIconKey =
    inferIconKeyFromText(strength.title) ||
    inferIconKeyFromText(strength.text) ||
    inferIconKeyFromText(strength.advice);

  if (inferredIconKey) {
    return inferredIconKey;
  }

  const fallbackKeys: YearPremiumIconKey[] = [
    "sun",
    "moon",
    "jupiter",
    "soulPath",
  ];

  return fallbackKeys[index] || "hiddenTalents";
}

function resolveStrengthIcon(
  strength: YearlyStrengthItem,
  index: number,
): string {
  const iconKey = resolveStrengthIconKey(
    strength,
    index,
  );

  return getIcon(iconKey, "hiddenTalents");
}

const STRENGTHS_ICON =
  getIcon("hiddenTalents", "sun");

const OPPORTUNITY_ICON =
  getIcon("hiddenTalents", "jupiter");

const VIGILANCE_ICON =
  getIcon("lifeBlocks", "saturn");

const CONCLUSION_ICON =
  getIcon("integrationGuide", "hiddenTalents");

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
    flexDirection: "row",
    alignItems: "center",
    minHeight: 145,
    paddingVertical: 16,
    paddingHorizontal: 17,
    marginBottom: 11,
    borderRadius: 14,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    borderLeftWidth: 2.2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    overflow: "hidden",
  },

  heroOrbitOne: {
    position: "absolute",
    top: -60,
    left: -56,
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 0.5,
    borderColor: DEEP_GOLD,
  },

  heroOrbitTwo: {
    position: "absolute",
    top: -25,
    left: -23,
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
  },

  heroIconOuter: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  heroIconInner: {
    width: 62,
    height: 62,
    borderRadius: 31,
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

  heroContent: {
    flex: 1,
  },

  heroTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 6,
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
    marginBottom: 4,
  },

  heroTitle: {
    color: GOLD,
    fontSize: 12.4,
    lineHeight: 1.35,
  },

  scoreBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreValue: {
    color: GOLD,
    fontSize: 15,
    lineHeight: 1,
  },

  scoreMaximum: {
    color: SOFT_TEXT,
    fontSize: 6.2,
    marginTop: 2,
  },

  heroIntroduction: {
    color: MUTED_CREAM,
    fontSize: 8.2,
    lineHeight: 1.45,
    marginBottom: 6,
  },

  heroText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.48,
    textAlign: "justify",
  },

  potentialCard: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_SOFT,
  },

  potentialHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  potentialLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  potentialIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 7,
  },

  potentialLabel: {
    color: CREAM,
    fontSize: 8.6,
  },

  potentialValue: {
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

  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionHeaderLine: {
    width: 28,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  sectionHeaderIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 9,
  },

  sectionLabel: {
    color: GOLD,
    fontSize: 9.2,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  strengthsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  strengthCard: {
    width: "48.7%",
    minHeight: 106,
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginBottom: 8,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  strengthHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  strengthIconCircle: {
    width: 29,
    height: 29,
    borderRadius: 14.5,
    borderWidth: 0.7,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  strengthIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },

  strengthTitle: {
    flex: 1,
    color: GOLD,
    fontSize: 8.8,
    lineHeight: 1.25,
  },

  strengthText: {
    color: MUTED_CREAM,
    fontSize: 7.25,
    lineHeight: 1.4,
    marginBottom: 6,
  },

  strengthAdviceLabel: {
    color: SOFT_TEXT,
    fontSize: 6.1,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  strengthAdvice: {
    color: CREAM,
    fontSize: 7.1,
    lineHeight: 1.38,
  },

  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  balanceCard: {
    width: "48.5%",
    minHeight: 71,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  balanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  balanceIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 7,
  },

  balanceTitle: {
    color: GOLD,
    fontSize: 8.4,
  },

  balanceText: {
    color: MUTED_CREAM,
    fontSize: 7.2,
    lineHeight: 1.4,
  },

  adviceCard: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 78,
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

  adviceWatermark: {
    position: "absolute",
    right: 14,
    top: 7,
    width: 54,
    height: 54,
    objectFit: "contain",
    opacity: 0.06,
  },

  adviceIconCircle: {
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

  adviceIcon: {
    width: 24,
    height: 24,
    objectFit: "contain",
  },

  adviceContent: {
    flex: 1,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  adviceText: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.48,
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeYearStrengths({
  identity,
  period,
  strengths,
}: HoroscopeYearStrengthsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(period);

  const firstName =
    identity.firstName?.trim() || null;

  const potentialScore =
    normalizeHoroscopeScore(
      strengths.potentialScore,
    );

  const visibleStrengths =
    Array.isArray(strengths.strengths)
      ? strengths.strengths.slice(0, 4)
      : [];

  const personalizedIntroduction =
    firstName
      ? `${firstName}, ${strengths.introduction}`
      : strengths.introduction;

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
            Analyse approfondie de votre année
          </Text>

          <Text style={styles.title}>
            {firstName
              ? `${firstName}, vos plus grandes forces`
              : "Vos plus grandes forces"}
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={STRENGTHS_ICON}
              style={styles.titleIcon}
            />

            <View style={styles.titleLineSmall} />
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroOrbitOne} />
          <View style={styles.heroOrbitTwo} />

          <View style={styles.heroIconOuter}>
            <View style={styles.heroIconInner}>
              <Image
                src={STRENGTHS_ICON}
                style={styles.heroIcon}
              />
            </View>
          </View>

          <View style={styles.heroContent}>
            <View style={styles.heroTopRow}>
              <View style={styles.heroHeading}>
                <Text style={styles.heroLabel}>
                  Votre force dominante
                </Text>

                <Text style={styles.heroTitle}>
                  {strengths.dominantStrength.title}
                </Text>
              </View>

              <View style={styles.scoreBadge}>
                <Text style={styles.scoreValue}>
                  {potentialScore}
                </Text>

                <Text style={styles.scoreMaximum}>
                  sur 100
                </Text>
              </View>
            </View>

            <Text style={styles.heroIntroduction}>
              {personalizedIntroduction}
            </Text>

            <Text style={styles.heroText}>
              {strengths.dominantStrength.text}
            </Text>
          </View>
        </View>

        <View style={styles.potentialCard}>
          <View style={styles.potentialHeader}>
            <View style={styles.potentialLeft}>
              <Image
                src={STRENGTHS_ICON}
                style={styles.potentialIcon}
              />

              <Text style={styles.potentialLabel}>
                Potentiel d’expression cette année
              </Text>
            </View>

            <Text style={styles.potentialValue}>
              {potentialScore} %
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${potentialScore}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionHeaderLine} />

          <Image
            src={STRENGTHS_ICON}
            style={styles.sectionHeaderIcon}
          />

          <Text style={styles.sectionLabel}>
            Les forces qui vous accompagneront
          </Text>
        </View>

        <View style={styles.strengthsGrid}>
          {visibleStrengths.map(
            (strength, index) => (
              <View
                key={`${strength.title}-${index}`}
                style={styles.strengthCard}
                wrap={false}
              >
                <View style={styles.strengthHeader}>
                  <View style={styles.strengthIconCircle}>
                    <Image
                      src={resolveStrengthIcon(
                        strength,
                        index,
                      )}
                      style={styles.strengthIcon}
                    />
                  </View>

                  <Text style={styles.strengthTitle}>
                    {strength.title}
                  </Text>
                </View>

                <Text style={styles.strengthText}>
                  {strength.text}
                </Text>

                <Text style={styles.strengthAdviceLabel}>
                  Comment l’utiliser
                </Text>

                <Text style={styles.strengthAdvice}>
                  {strength.advice}
                </Text>
              </View>
            ),
          )}
        </View>

        <View style={styles.balanceRow}>
          <View style={styles.balanceCard}>
            <View style={styles.balanceHeader}>
              <Image
                src={OPPORTUNITY_ICON}
                style={styles.balanceIcon}
              />

              <Text style={styles.balanceTitle}>
                Votre meilleure ouverture
              </Text>
            </View>

            <Text style={styles.balanceText}>
              {strengths.opportunity}
            </Text>
          </View>

          <View style={styles.balanceCard}>
            <View style={styles.balanceHeader}>
              <Image
                src={VIGILANCE_ICON}
                style={styles.balanceIcon}
              />

              <Text style={styles.balanceTitle}>
                Votre point de vigilance
              </Text>
            </View>

            <Text style={styles.balanceText}>
              {strengths.vigilance}
            </Text>
          </View>
        </View>

        <View style={styles.adviceCard}>
          <Image
            src={STRENGTHS_ICON}
            style={styles.adviceWatermark}
          />

          <View style={styles.adviceIconCircle}>
            <Image
              src={CONCLUSION_ICON}
              style={styles.adviceIcon}
            />
          </View>

          <View style={styles.adviceContent}>
            <Text style={styles.adviceLabel}>
              Votre combinaison gagnante
            </Text>

            <Text style={styles.adviceText}>
              {strengths.conclusion}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
