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

import HoroscopePageFooter
  from "../HoroscopePageFooter";

import HoroscopeStarBackground
  from "../HoroscopeStarBackground";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
} from "../HoroscopePdfUtils";

import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../HoroscopePdfTypes";

import type {
  YearMajorAspectsResult,
} from "./data/types";

/*
|--------------------------------------------------------------------------
| Couleurs Luna Astralis
|--------------------------------------------------------------------------
*/

const NAVY =
  "#06101F";

const NAVY_CARD =
  "#0A1729";

const NAVY_CARD_LIGHT =
  "#0D1B30";

const NAVY_SOFT =
  "#101F35";

const GOLD =
  "#F4C95D";

const CREAM =
  "#FFF8E7";

const MUTED_CREAM =
  "#DDD5C6";

const SOFT_TEXT =
  "#B9AE98";

const DARK_GOLD =
  "#8F6E35";

const DEEP_GOLD =
  "#4E412D";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type HoroscopeYearMajorAspectsProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  majorAspects: YearMajorAspectsResult;
};

type AspectTone =
  | "harmonious"
  | "dynamic"
  | "transformative";

type DisplayYearlyAspect = {
  id: string;
  firstPlanet: string;
  secondPlanet: string;
  firstPlanetIcon: string;
  secondPlanetIcon: string;
  aspect: string;
  tone: AspectTone;
  title: string;
  description: string;
  advice: string;
};

/*
|--------------------------------------------------------------------------
| Correspondance des données annuelles
|--------------------------------------------------------------------------
*/

const PLANET_ICON_KEYS: Record<string, keyof typeof HOROSCOPE_ICONS> = {
  soleil: "sun",
  lune: "moon",
  mercure: "mercury",
  venus: "venus",
  mars: "mars",
  jupiter: "jupiter",
  saturne: "saturn",
  uranus: "uranus",
  neptune: "neptune",
  pluton: "pluto",
};

function normalizePlanetName(
  value: string,
): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    );
}

function getPlanetIcon(
  planet: string,
): string {
  const key =
    PLANET_ICON_KEYS[
      normalizePlanetName(planet)
    ];

  return key
    ? HOROSCOPE_ICONS[key]
    : HOROSCOPE_ICONS.sun;
}

function splitPlanetNames(
  value: string,
): [string, string] {
  const cleaned = value.trim();

  const parts = cleaned
    .split(
      /\s*(?:–|—|-|\/|\+|&| et )\s*/i,
    )
    .map((item) => item.trim())
    .filter(Boolean);

  if (parts.length >= 2) {
    return [
      parts[0],
      parts.slice(1).join(" "),
    ];
  }

  return [
    cleaned || "Planète dominante",
    "Influence associée",
  ];
}

function getAspectTone(
  value: string,
): AspectTone {
  const normalized =
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        "",
      );

  if (
    normalized.includes("trigone") ||
    normalized.includes("sextile")
  ) {
    return "harmonious";
  }

  if (
    normalized.includes("carre") ||
    normalized.includes("opposition")
  ) {
    return "dynamic";
  }

  return "transformative";
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles =
  StyleSheet.create({
    page: {
      position:
        "relative",

      paddingTop:
        34,

      paddingHorizontal:
        42,

      paddingBottom:
        54,

      backgroundColor:
        NAVY,

      fontFamily:
        "Helvetica",

      overflow:
        "hidden",
    },

    content: {
      position:
        "relative",

      zIndex:
        2,

      flex:
        1,
    },

    header: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        15,
    },

    logo: {
      width:
        108,

      height:
        38,

      objectFit:
        "contain",
    },

    signBadge: {
      flexDirection:
        "row",

      alignItems:
        "center",

      paddingVertical:
        7,

      paddingHorizontal:
        12,

      borderRadius:
        18,

      borderWidth:
        0.7,

      borderColor:
        DARK_GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    signIcon: {
      width:
        22,

      height:
        22,

      marginRight:
        7,

      objectFit:
        "contain",
    },

    signName: {
      color:
        GOLD,

      fontSize:
        8,

      letterSpacing:
        1,

      textTransform:
        "uppercase",
    },

    titleBlock: {
      marginBottom:
        14,
    },

    eyebrow: {
      marginBottom:
        7,

      color:
        GOLD,

      fontSize:
        9,

      letterSpacing:
        2.4,

      textTransform:
        "uppercase",
    },

    title: {
      maxWidth:
        430,

      marginBottom:
        7,

      color:
        CREAM,

      fontSize:
        24,

      lineHeight:
        1.2,
    },

    period: {
      marginBottom:
        9,

      color:
        MUTED_CREAM,

      fontSize:
        9.7,
    },

    titleDecoration: {
      flexDirection:
        "row",

      alignItems:
        "center",
    },

    titleLine: {
      width:
        62,

      height:
        1,

      marginRight:
        9,

      backgroundColor:
        GOLD,
    },

    titleIcon: {
      width:
        16,

      height:
        16,

      marginRight:
        9,

      objectFit:
        "contain",
    },

    titleLineSmall: {
      width:
        22,

      height:
        1,

      backgroundColor:
        DARK_GOLD,
    },

    introductionCard: {
      position:
        "relative",

      minHeight:
        82,

      marginBottom:
        14,

      paddingVertical:
        13,

      paddingHorizontal:
        16,

      borderRadius:
        11,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,

      borderLeftWidth:
        2.2,

      borderLeftColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,

      overflow:
        "hidden",
    },

    introductionWatermark: {
      position:
        "absolute",

      top:
        8,

      right:
        17,

      width:
        64,

      height:
        64,

      objectFit:
        "contain",

      opacity:
        0.055,
    },

    introductionLabel: {
      marginBottom:
        5,

      color:
        GOLD,

      fontSize:
        7,

      letterSpacing:
        1.2,

      textTransform:
        "uppercase",
    },

    introduction: {
      maxWidth:
        455,

      color:
        MUTED_CREAM,

      fontSize:
        8.6,

      lineHeight:
        1.52,
    },

    sectionHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      marginBottom:
        9,
    },

    sectionLine: {
      width:
        28,

      height:
        1,

      marginRight:
        9,

      backgroundColor:
        GOLD,
    },

    sectionIcon: {
      width:
        16,

      height:
        16,

      marginRight:
        9,

      objectFit:
        "contain",
    },

    sectionTitle: {
      color:
        GOLD,

      fontSize:
        9.3,

      letterSpacing:
        1.45,

      textTransform:
        "uppercase",
    },

    cardsContainer: {
      marginBottom:
        12,
    },

    card: {
      position:
        "relative",

      flexDirection:
        "row",

      minHeight:
        125,

      marginBottom:
        10,

      paddingVertical:
        13,

      paddingHorizontal:
        14,

      borderRadius:
        11,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,

      backgroundColor:
        NAVY_CARD_LIGHT,

      overflow:
        "hidden",
    },

    cardOrbitOne: {
      position:
        "absolute",

      top:
        -55,

      left:
        -60,

      width:
        145,

      height:
        145,

      borderRadius:
        73,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,
    },

    cardOrbitTwo: {
      position:
        "absolute",

      top:
        -22,

      left:
        -28,

      width:
        87,

      height:
        87,

      borderRadius:
        44,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,
    },

    planetsColumn: {
      width:
        88,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        13,
    },

    planetIconsRow: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "center",

      marginBottom:
        8,
    },

    planetCircle: {
      width:
        39,

      height:
        39,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        20,

      borderWidth:
        0.8,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    planetIcon: {
      width:
        25,

      height:
        25,

      objectFit:
        "contain",
    },

    planetConnector: {
      width:
        12,

      height:
        1,

      backgroundColor:
        DARK_GOLD,
    },

    planetsNames: {
      color:
        GOLD,

      fontSize:
        7.7,

      lineHeight:
        1.35,

      textAlign:
        "center",
    },

    cardContent: {
      flex:
        1,
    },

    cardHeader: {
      flexDirection:
        "row",

      alignItems:
        "flex-start",

      justifyContent:
        "space-between",

      marginBottom:
        5,
    },

    cardHeading: {
      flex:
        1,

      paddingRight:
        10,
    },

    cardLabel: {
      marginBottom:
        3,

      color:
        SOFT_TEXT,

      fontSize:
        6.4,

      letterSpacing:
        1,

      textTransform:
        "uppercase",
    },

    cardTitle: {
      color:
        CREAM,

      fontSize:
        11.2,

      lineHeight:
        1.3,
    },

    badge: {
      paddingVertical:
        4,

      paddingHorizontal:
        8,

      borderRadius:
        10,

      borderWidth:
        0.5,

      fontSize:
        6.3,

      letterSpacing:
        0.45,

      textTransform:
        "uppercase",
    },

    badgeHarmonious: {
      color:
        "#DCEFD8",

      borderColor:
        "#627C5E",

      backgroundColor:
        "#182C25",
    },

    badgeDynamic: {
      color:
        "#F2D3A8",

      borderColor:
        "#936B3E",

      backgroundColor:
        "#302318",
    },

    badgeTransformative: {
      color:
        "#E8D3ED",

      borderColor:
        "#765279",

      backgroundColor:
        "#291E30",
    },

    description: {
      marginBottom:
        7,

      color:
        MUTED_CREAM,

      fontSize:
        8.05,

      lineHeight:
        1.47,
    },

    adviceContainer: {
      paddingTop:
        7,

      borderTopWidth:
        0.5,

      borderTopColor:
        DEEP_GOLD,
    },

    adviceLabel: {
      marginBottom:
        3,

      color:
        GOLD,

      fontSize:
        6.5,

      letterSpacing:
        1,

      textTransform:
        "uppercase",
    },

    advice: {
      color:
        CREAM,

      fontSize:
        7.9,

      lineHeight:
        1.42,
    },

    summaryCard: {
      position:
        "relative",

      flexDirection:
        "row",

      alignItems:
        "center",

      minHeight:
        78,

      paddingVertical:
        12,

      paddingHorizontal:
        15,

      borderRadius:
        11,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,

      borderLeftWidth:
        2.2,

      borderLeftColor:
        GOLD,

      backgroundColor:
        NAVY_SOFT,

      overflow:
        "hidden",
    },

    summaryWatermark: {
      position:
        "absolute",

      top:
        5,

      right:
        16,

      width:
        59,

      height:
        59,

      objectFit:
        "contain",

      opacity:
        0.055,
    },

    summaryIconCircle: {
      width:
        39,

      height:
        39,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        12,

      borderRadius:
        20,

      borderWidth:
        0.7,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD_LIGHT,
    },

    summaryIcon: {
      width:
        24,

      height:
        24,

      objectFit:
        "contain",
    },

    summaryContent: {
      flex:
        1,
    },

    summaryTitle: {
      marginBottom:
        4,

      color:
        GOLD,

      fontSize:
        7,

      letterSpacing:
        1.15,

      textTransform:
        "uppercase",
    },

    summaryText: {
      maxWidth:
        425,

      color:
        CREAM,

      fontSize:
        8.4,

      lineHeight:
        1.48,
    },
  });

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

function getBadgeStyle(
  tone: AspectTone,
) {
  switch (tone) {
    case "harmonious":
      return styles.badgeHarmonious;

    case "dynamic":
      return styles.badgeDynamic;

    case "transformative":
    default:
      return styles.badgeTransformative;
  }
}

function buildDisplayAspect(
  item:
    YearMajorAspectsResult["aspects"][number],
  index: number,
): DisplayYearlyAspect {
  const [
    firstPlanet,
    secondPlanet,
  ] = splitPlanetNames(
    item.planets,
  );

  const opportunity =
    item.opportunity?.trim();

  const influence =
    item.influence?.trim();

  const description = [
    influence,
    opportunity
      ? `Ouverture possible : ${opportunity}`
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return {
    id:
      `${item.planets}-${item.aspect}-${index}`,

    firstPlanet,

    secondPlanet,

    firstPlanetIcon:
      getPlanetIcon(firstPlanet),

    secondPlanetIcon:
      getPlanetIcon(secondPlanet),

    aspect:
      item.aspect,

    tone:
      getAspectTone(item.aspect),

    title:
      item.period,

    description,

    advice:
      item.caution,
  };
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeYearMajorAspects({
  identity,
  period,
  majorAspects,
}: HoroscopeYearMajorAspectsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(
      period,
    );

  const displayedAspects =
    (
      Array.isArray(
        majorAspects.aspects,
      )
        ? majorAspects.aspects
        : []
    )
      .slice(
        0,
        3,
      )
      .map(
        buildDisplayAspect,
      );

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
            Les mouvements du ciel
          </Text>

          <Text style={styles.title}>
            {majorAspects.title}
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.sun}
              style={styles.titleIcon}
            />

            <View
              style={styles.titleLineSmall}
            />
          </View>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Introduction
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.introductionCard}
          wrap={false}
        >
          <Image
            src={HOROSCOPE_ICONS.jupiter}
            style={
              styles.introductionWatermark
            }
          />

          <Text
            style={styles.introductionLabel}
          >
            Votre climat astrologique
          </Text>

          <Text style={styles.introduction}>
            {majorAspects.introduction}
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Aspects de l’année
        |--------------------------------------------------------------------------
        */}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.jupiter}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Les trois influences les plus marquantes de l’année
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {displayedAspects.map(
            (
              item,
            ) => (
              <View
                key={item.id}
                style={styles.card}
                wrap={false}
              >
                <View
                  style={styles.cardOrbitOne}
                />

                <View
                  style={styles.cardOrbitTwo}
                />

                <View
                  style={styles.planetsColumn}
                >
                  <View
                    style={
                      styles.planetIconsRow
                    }
                  >
                    <View
                      style={
                        styles.planetCircle
                      }
                    >
                      <Image
                        src={
                          item.firstPlanetIcon
                        }
                        style={
                          styles.planetIcon
                        }
                      />
                    </View>

                    <View
                      style={
                        styles.planetConnector
                      }
                    />

                    <View
                      style={
                        styles.planetCircle
                      }
                    >
                      <Image
                        src={
                          item.secondPlanetIcon
                        }
                        style={
                          styles.planetIcon
                        }
                      />
                    </View>
                  </View>

                  <Text
                    style={
                      styles.planetsNames
                    }
                  >
                    {item.firstPlanet}
                    {"\n"}
                    {item.secondPlanet}
                  </Text>
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View
                      style={styles.cardHeading}
                    >
                      <Text
                        style={styles.cardLabel}
                      >
                        Dynamique planétaire
                      </Text>

                      <Text
                        style={styles.cardTitle}
                      >
                        {item.title}
                      </Text>
                    </View>

                    <Text
                      style={[
                        styles.badge,
                        getBadgeStyle(
                          item.tone,
                        ),
                      ]}
                    >
                      {item.aspect}
                    </Text>
                  </View>

                  <Text
                    style={styles.description}
                  >
                    {item.description}
                  </Text>

                  <View
                    style={
                      styles.adviceContainer
                    }
                  >
                    <Text
                      style={
                        styles.adviceLabel
                      }
                    >
                      Conseil
                    </Text>

                    <Text
                      style={styles.advice}
                    >
                      {item.advice}
                    </Text>
                  </View>
                </View>
              </View>
            ),
          )}
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Conclusion
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.summaryCard}
          wrap={false}
        >
          <Image
            src={
              HOROSCOPE_ICONS.integrationGuide
            }
            style={styles.summaryWatermark}
          />

          <View
            style={styles.summaryIconCircle}
          >
            <Image
              src={
                HOROSCOPE_ICONS.integrationGuide
              }
              style={styles.summaryIcon}
            />
          </View>

          <View style={styles.summaryContent}>
            <Text
              style={styles.summaryTitle}
            >
              Votre ligne directrice
            </Text>

            <Text
              style={styles.summaryText}
            >
              {[
                  majorAspects.synthesis,
                  majorAspects.advice,
                ]
                  .filter(Boolean)
                  .join(" ")}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
