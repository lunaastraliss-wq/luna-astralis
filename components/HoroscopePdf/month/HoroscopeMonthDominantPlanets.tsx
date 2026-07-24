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
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

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

type HoroscopeMonthDominantPlanetsProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type DominantPlanetTone =
  | "expansion"
  | "relationships"
  | "action";

type TemporaryDominantPlanet = {
  id: string;
  rank: number;
  planet: string;
  icon: string;
  influenceLabel: string;
  tone: DominantPlanetTone;
  theme: string;
  title: string;
  description: string;
  influence: string;
  advice: string;
};

/*
|--------------------------------------------------------------------------
| Données temporaires
|--------------------------------------------------------------------------
*/

const TEMPORARY_DOMINANT_PLANETS:
  TemporaryDominantPlanet[] = [
    {
      id:
        "dominant-jupiter",

      rank:
        1,

      planet:
        "Jupiter",

      icon:
        HOROSCOPE_ICONS.jupiter,

      influenceLabel:
        "Influence principale",

      tone:
        "expansion",

      theme:
        "Expansion",

      title:
        "Une volonté de progresser et d’élargir vos possibilités",

      description:
        "Jupiter représente la croissance, la confiance et l’ouverture vers de nouvelles possibilités. Son influence dominante vous encourage à dépasser certaines limites et à envisager votre avenir avec davantage d’optimisme.",

      influence:
        "Cette énergie peut soutenir les projets ambitieux, les apprentissages, les démarches professionnelles et les décisions qui vous permettent d’évoluer.",

      advice:
        "Voyez grand, mais avancez avec une stratégie réaliste et des objectifs clairement définis.",
    },

    {
      id:
        "dominant-venus",

      rank:
        2,

      planet:
        "Vénus",

      icon:
        HOROSCOPE_ICONS.venus,

      influenceLabel:
        "Influence secondaire",

      tone:
        "relationships",

      theme:
        "Relations",

      title:
        "Un besoin plus marqué d’harmonie et de proximité",

      description:
        "Vénus met l’accent sur les relations, l’affection, les plaisirs et la manière dont vous reconnaissez votre propre valeur. Elle adoucit certaines tensions et favorise des échanges plus chaleureux.",

      influence:
        "Vous pourriez accorder davantage d’importance à votre vie affective, à votre environnement et aux relations qui contribuent réellement à votre bien-être.",

      advice:
        "Recherchez l’harmonie sans taire vos besoins ni accepter des compromis qui vous désavantagent.",
    },

    {
      id:
        "dominant-mars",

      rank:
        3,

      planet:
        "Mars",

      icon:
        HOROSCOPE_ICONS.mars,

      influenceLabel:
        "Influence dynamique",

      tone:
        "action",

      theme:
        "Action",

      title:
        "Une énergie qui vous pousse à agir plus directement",

      description:
        "Mars représente l’action, le courage, le désir et la manière dont vous défendez vos intérêts. Son influence augmente votre volonté d’avancer, mais peut également accentuer votre impatience.",

      influence:
        "Cette énergie est utile pour prendre une décision, affirmer une limite, défendre un projet ou reprendre le contrôle d’une situation qui stagnait.",

      advice:
        "Utilisez votre détermination pour construire, plutôt que pour réagir sous le coup de l’impulsion.",
    },
  ];

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
        13,
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
        76,

      marginBottom:
        13,

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
        NAVY_CARD,

      overflow:
        "hidden",
    },

    introductionWatermark: {
      position:
        "absolute",

      top:
        5,

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
        460,

      color:
        MUTED_CREAM,

      fontSize:
        8.5,

      lineHeight:
        1.5,
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
        11,
    },

    card: {
      position:
        "relative",

      flexDirection:
        "row",

      minHeight:
        133,

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
        -58,

      left:
        -62,

      width:
        150,

      height:
        150,

      borderRadius:
        75,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,
    },

    cardOrbitTwo: {
      position:
        "absolute",

      top:
        -23,

      left:
        -29,

      width:
        92,

      height:
        92,

      borderRadius:
        46,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,
    },

    planetColumn: {
      width:
        83,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        14,
    },

    rankCircle: {
      width:
        20,

      height:
        20,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginBottom:
        7,

      borderRadius:
        10,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    rankText: {
      color:
        GOLD,

      fontSize:
        7.2,
    },

    planetCircleOuter: {
      width:
        58,

      height:
        58,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        29,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,
    },

    planetCircleInner: {
      width:
        48,

      height:
        48,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        24,

      borderWidth:
        0.8,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    planetIcon: {
      width:
        31,

      height:
        31,

      objectFit:
        "contain",
    },

    planetName: {
      marginTop:
        6,

      color:
        GOLD,

      fontSize:
        8.4,

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

    influenceLabel: {
      marginBottom:
        3,

      color:
        SOFT_TEXT,

      fontSize:
        6.3,

      letterSpacing:
        1,

      textTransform:
        "uppercase",
    },

    cardTitle: {
      color:
        CREAM,

      fontSize:
        10.9,

      lineHeight:
        1.28,
    },

    themeBadge: {
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

    themeExpansion: {
      color:
        "#F3E2A9",

      borderColor:
        "#8A743F",

      backgroundColor:
        "#2F291B",
    },

    themeRelationships: {
      color:
        "#EBCEDB",

      borderColor:
        "#875267",

      backgroundColor:
        "#301F29",
    },

    themeAction: {
      color:
        "#F1D0B8",

      borderColor:
        "#8B573D",

      backgroundColor:
        "#322118",
    },

    description: {
      marginBottom:
        7,

      color:
        MUTED_CREAM,

      fontSize:
        7.95,

      lineHeight:
        1.45,
    },

    influenceContainer: {
      marginBottom:
        7,

      paddingTop:
        6,

      borderTopWidth:
        0.5,

      borderTopColor:
        DEEP_GOLD,
    },

    influenceTitle: {
      marginBottom:
        3,

      color:
        GOLD,

      fontSize:
        6.4,

      letterSpacing:
        0.9,

      textTransform:
        "uppercase",
    },

    influenceText: {
      color:
        MUTED_CREAM,

      fontSize:
        7.75,

      lineHeight:
        1.4,
    },

    adviceContainer: {
      paddingTop:
        6,

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
        6.4,

      letterSpacing:
        0.9,

      textTransform:
        "uppercase",
    },

    advice: {
      color:
        CREAM,

      fontSize:
        7.75,

      lineHeight:
        1.4,
    },

    summaryCard: {
      position:
        "relative",

      flexDirection:
        "row",

      alignItems:
        "center",

      minHeight:
        76,

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
        4,

      right:
        16,

      width:
        60,

      height:
        60,

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
        8.25,

      lineHeight:
        1.46,
    },
  });

/*
|--------------------------------------------------------------------------
| Utilitaire
|--------------------------------------------------------------------------
*/

function getThemeStyle(
  tone:
    DominantPlanetTone,
) {
  switch (tone) {
    case "expansion":
      return styles.themeExpansion;

    case "relationships":
      return styles.themeRelationships;

    case "action":
      return styles.themeAction;

    default:
      return styles.themeExpansion;
  }
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthDominantPlanets({
  identity,
  period,
}: HoroscopeMonthDominantPlanetsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(
      period,
    );

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
            Les forces dominantes
          </Text>

          <Text style={styles.title}>
            Les planètes dominantes de votre mois
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.jupiter}
              style={styles.titleIcon}
            />

            <View
              style={styles.titleLineSmall}
            />
          </View>
        </View>

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
            Votre climat planétaire
          </Text>

          <Text style={styles.introduction}>
            Parmi les différentes influences
            astrologiques de{" "}
            {periodLabel}, certaines planètes
            occupent une place plus importante
            pour le signe{" "}
            {identity.zodiacSignLabel}.
            Elles représentent les énergies
            que vous pourriez ressentir avec
            le plus d’intensité durant le mois.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.sun}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Votre trio dominant
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {TEMPORARY_DOMINANT_PLANETS.map(
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
                  style={styles.planetColumn}
                >
                  <View
                    style={styles.rankCircle}
                  >
                    <Text
                      style={styles.rankText}
                    >
                      {item.rank}
                    </Text>
                  </View>

                  <View
                    style={
                      styles.planetCircleOuter
                    }
                  >
                    <View
                      style={
                        styles.planetCircleInner
                      }
                    >
                      <Image
                        src={item.icon}
                        style={
                          styles.planetIcon
                        }
                      />
                    </View>
                  </View>

                  <Text
                    style={
                      styles.planetName
                    }
                  >
                    {item.planet}
                  </Text>
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View
                      style={styles.cardHeading}
                    >
                      <Text
                        style={
                          styles.influenceLabel
                        }
                      >
                        {item.influenceLabel}
                      </Text>

                      <Text
                        style={styles.cardTitle}
                      >
                        {item.title}
                      </Text>
                    </View>

                    <Text
                      style={[
                        styles.themeBadge,
                        getThemeStyle(
                          item.tone,
                        ),
                      ]}
                    >
                      {item.theme}
                    </Text>
                  </View>

                  <Text
                    style={styles.description}
                  >
                    {item.description}
                  </Text>

                  <View
                    style={
                      styles.influenceContainer
                    }
                  >
                    <Text
                      style={
                        styles.influenceTitle
                      }
                    >
                      Influence dans votre mois
                    </Text>

                    <Text
                      style={
                        styles.influenceText
                      }
                    >
                      {item.influence}
                    </Text>
                  </View>

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
              Votre combinaison dominante
            </Text>

            <Text
              style={styles.summaryText}
            >
              Ce mois combine une volonté
              d’expansion, un besoin
              d’harmonie relationnelle et une
              énergie d’action plus directe.
              Votre équilibre dépendra de
              votre capacité à avancer avec
              confiance sans négliger vos
              limites ni les besoins des
              personnes qui vous entourent.
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
