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

import type {
  MonthlyDominantPlanet,
  MonthlyPlanetName,
} from "./calculations/types";

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
  > & {
    dominantPlanets:
      MonthlyDominantPlanet[];
  };

type DominantPlanetTone =
  | "expansion"
  | "relationships"
  | "action";

type DisplayDominantPlanet = {
  id: string;
  rank: number;
  planet: MonthlyPlanetName;
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
| Ton visuel des planètes
|--------------------------------------------------------------------------
*/

const PLANET_TONES:
  Partial<
    Record<
      MonthlyPlanetName,
      DominantPlanetTone
    >
  > = {
    Soleil:
      "action",

    Lune:
      "relationships",

    Mercure:
      "expansion",

    Vénus:
      "relationships",

    Mars:
      "action",

    Jupiter:
      "expansion",

    Saturne:
      "action",

    Uranus:
      "expansion",

    Neptune:
      "relationships",

    Pluton:
      "action",
    };

/*
|--------------------------------------------------------------------------
| Thèmes courts pour les badges
|--------------------------------------------------------------------------
|
| Important :
| Le badge doit toujours contenir un texte court.
|
| Il ne faut pas utiliser planet.reasons ici, car reasons contient
| des phrases complètes comme :
|
| "42 aspects importants influencent son énergie."
|
| Ces phrases écrasaient le titre dans la mise en page React PDF.
|--------------------------------------------------------------------------
*/

const PLANET_THEME_LABELS:
  Record<
    MonthlyPlanetName,
    string
  > = {
    Soleil:
      "Identité • Vitalité",

    Lune:
      "Émotions • Intuition",

    Mercure:
      "Réflexion • Échanges",

    Vénus:
      "Relations • Harmonie",

    Mars:
      "Action • Courage",

    Jupiter:
      "Expansion • Occasions",

    Saturne:
      "Structure • Maturité",

    Uranus:
      "Liberté • Renouveau",

    Neptune:
      "Inspiration • Sensibilité",

    Pluton:
      "Transformation • Vérité",
   };

/*
|--------------------------------------------------------------------------
| Icônes
|--------------------------------------------------------------------------
*/

function normalizePlanetIconKey(
  planet:
    MonthlyPlanetName,
): keyof typeof HOROSCOPE_ICONS {
  const normalized =
    planet
      .toLowerCase()
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        "",
      );

  const iconKeyMap:
    Record<
      string,
      keyof typeof HOROSCOPE_ICONS
    > = {
      soleil:
        "sun",

      lune:
        "moon",

      mercure:
        "mercury",

      venus:
        "venus",

      mars:
        "mars",

      jupiter:
        "jupiter",

      saturne:
        "saturn",

      uranus:
        "uranus",

      neptune:
        "neptune",

      pluton:
        "pluto",
     };

  return (
    iconKeyMap[normalized] ??
    "sun"
  );
}

function getPlanetIcon(
  planet:
    MonthlyPlanetName,
): string {
  return HOROSCOPE_ICONS[
    normalizePlanetIconKey(
      planet,
    )
  ];
}

/*
|--------------------------------------------------------------------------
| Données d’affichage
|--------------------------------------------------------------------------
*/

function getPlanetTone(
  planet:
    MonthlyPlanetName,
): DominantPlanetTone {
  return (
    PLANET_TONES[planet] ??
    "expansion"
  );
}

function getPlanetTheme(
  planet:
    MonthlyPlanetName,
): string {
  return (
    PLANET_THEME_LABELS[planet] ??
    "Influence majeure"
  );
}

function getInfluenceLabel(
  rank:
    number,
): string {
  if (rank === 1) {
    return "Influence principale";
  }

  if (rank === 2) {
    return "Influence secondaire";
  }

  return "Influence complémentaire";
}

/*
|--------------------------------------------------------------------------
| Texte expliquant l’influence
|--------------------------------------------------------------------------
*/

function buildInfluenceText(
  planet:
    MonthlyDominantPlanet,
): string {
  const reasons =
    Array.isArray(
      planet.reasons,
    )
      ? planet.reasons
      : [];

  const scoreText =
    `Cette planète obtient un score d’influence de ${planet.score} %.`;

  if (reasons.length === 0) {
    return scoreText;
  }

  return [
    scoreText,
    ...reasons.slice(
      0,
      2,
    ),
  ].join(" ");
}

/*
|--------------------------------------------------------------------------
| Conversion vers les données visuelles
|--------------------------------------------------------------------------
*/

function buildDisplayDominantPlanet(
  planet:
    MonthlyDominantPlanet,
  index:
    number,
): DisplayDominantPlanet {
  const rank =
    planet.rank ??
    index + 1;

  return {
    id:
      `dominant-${planet.planet}-${rank}`,

    rank,

    planet:
      planet.planet,

    icon:
      getPlanetIcon(
        planet.planet,
      ),

    influenceLabel:
      getInfluenceLabel(
        rank,
      ),

    tone:
      getPlanetTone(
        planet.planet,
      ),

    /*
     * Correction :
     * on utilise un thème court et non planet.reasons.
     */
    theme:
      getPlanetTheme(
        planet.planet,
      ),

    title:
      planet.title,

    description:
      planet.description,

    influence:
      buildInfluenceText(
        planet,
      ),

    advice:
      planet.advice,
  };
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

    /*
    |--------------------------------------------------------------------------
    | En-tête
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Titre
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Titre de section
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Cartes des planètes
    |--------------------------------------------------------------------------
    */

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

      flexShrink:
        0,

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
      flexGrow:
        1,

      flexShrink:
        1,

      minWidth:
        0,
    },

    /*
    |--------------------------------------------------------------------------
    | En-tête de carte
    |--------------------------------------------------------------------------
    */

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
      flexGrow:
        1,

      flexShrink:
        1,

      minWidth:
        0,

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

    /*
    |--------------------------------------------------------------------------
    | Badge court
    |--------------------------------------------------------------------------
    */

    themeBadge: {
      maxWidth:
        136,

      flexShrink:
        0,

      paddingVertical:
        4,

      paddingHorizontal:
        8,

      borderRadius:
        10,

      borderWidth:
        0.5,

      fontSize:
        6.1,

      lineHeight:
        1.2,

      letterSpacing:
        0.35,

      textAlign:
        "center",

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

    /*
    |--------------------------------------------------------------------------
    | Contenu de carte
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Résumé
    |--------------------------------------------------------------------------
    */

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
| Style du badge selon la planète
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
  dominantPlanets,
}: HoroscopeMonthDominantPlanetsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(
      period,
    );

  const displayedPlanets =
    (
      Array.isArray(
        dominantPlanets,
      )
        ? dominantPlanets
        : []
    )
      .slice(
        0,
        3,
      )
      .map(
        buildDisplayDominantPlanet,
      );

  const dominantNames =
    displayedPlanets
      .map(
        (item) =>
          item.planet,
      )
      .join(", ");

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

            <View style={styles.titleLineSmall} />
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
            style={styles.introductionWatermark}
          />

          <Text style={styles.introductionLabel}>
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

        {/*
        |--------------------------------------------------------------------------
        | Section
        |--------------------------------------------------------------------------
        */}

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

        {/*
        |--------------------------------------------------------------------------
        | Cartes
        |--------------------------------------------------------------------------
        */}

        <View style={styles.cardsContainer}>
          {displayedPlanets.map(
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

                <View style={styles.planetColumn}>
                  <View style={styles.rankCircle}>
                    <Text style={styles.rankText}>
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
                        style={styles.planetIcon}
                      />
                    </View>
                  </View>

                  <Text style={styles.planetName}>
                    {item.planet}
                  </Text>
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View style={styles.cardHeading}>
                      <Text
                        style={styles.influenceLabel}
                      >
                        {item.influenceLabel}
                      </Text>

                      <Text style={styles.cardTitle}>
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

                  <Text style={styles.description}>
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
                      style={styles.adviceLabel}
                    >
                      Conseil
                    </Text>

                    <Text style={styles.advice}>
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
        | Résumé
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

          <View style={styles.summaryIconCircle}>
            <Image
              src={
                HOROSCOPE_ICONS.integrationGuide
              }
              style={styles.summaryIcon}
            />
          </View>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryTitle}>
              Votre combinaison dominante
            </Text>

            <Text style={styles.summaryText}>
              {dominantNames
                ? `Les énergies de ${dominantNames} composent votre combinaison dominante de ${periodLabel}. Appuyez-vous sur leurs forces complémentaires, tout en respectant le rythme et les ajustements indiqués dans leurs conseils.`
                : `Les mouvements planétaires de ${periodLabel} vous invitent à avancer avec discernement, en observant les influences qui se présentent avant de prendre vos décisions.`}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
