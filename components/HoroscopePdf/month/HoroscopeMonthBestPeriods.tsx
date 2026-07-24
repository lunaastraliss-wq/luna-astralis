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

const NAVY_DEEP =
  "#040B15";

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

type HoroscopeMonthBestPeriodsProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type BestPeriodCategory =
  | "love"
  | "career"
  | "money"
  | "energy";

type TemporaryBestPeriod = {
  id:
    string;

  dates:
    string;

  category:
    BestPeriodCategory;

  categoryLabel:
    string;

  title:
    string;

  description:
    string;

  advice:
    string;
};

/*
|--------------------------------------------------------------------------
| Périodes temporaires
|--------------------------------------------------------------------------
|
| Ces périodes seront remplacées plus tard par les véritables fenêtres
| favorables calculées pour le mois et le signe sélectionnés.
|
*/

const TEMPORARY_BEST_PERIODS:
  TemporaryBestPeriod[] = [
    {
      id:
        "best-period-1",

      dates:
        "Du 3 au 7",

      category:
        "energy",

      categoryLabel:
        "Énergie",

      title:
        "Une période idéale pour prendre votre élan",

      description:
        "Le début de cette période favorise les initiatives, les décisions et les actions qui demandent de la confiance. Vous pourriez ressentir davantage de clarté sur la direction à suivre.",

      advice:
        "Profitez de cette énergie pour commencer ce que vous remettez à plus tard.",
    },

    {
      id:
        "best-period-2",

      dates:
        "Du 11 au 15",

      category:
        "love",

      categoryLabel:
        "Amour",

      title:
        "Des échanges plus fluides et chaleureux",

      description:
        "Les relations bénéficient d’une atmosphère plus douce. Les rapprochements, les conversations sincères et les gestes affectueux pourraient être particulièrement bien reçus.",

      advice:
        "Exprimez ce que vous ressentez avec simplicité et authenticité.",
    },

    {
      id:
        "best-period-3",

      dates:
        "Du 18 au 22",

      category:
        "career",

      categoryLabel:
        "Carrière",

      title:
        "Une ouverture professionnelle intéressante",

      description:
        "Cette période peut favoriser une avancée, une réponse attendue ou une occasion de mettre vos compétences en valeur. Votre sérieux pourrait attirer une attention positive.",

      advice:
        "Présentez vos idées avec assurance et restez attentif aux nouvelles possibilités.",
    },

    {
      id:
        "best-period-4",

      dates:
        "Du 25 au 28",

      category:
        "money",

      categoryLabel:
        "Finances",

      title:
        "Un moment favorable pour mieux organiser vos ressources",

      description:
        "Vous pourriez voir plus clairement vos priorités financières. Une décision réfléchie ou une meilleure organisation peut renforcer votre sentiment de sécurité.",

      advice:
        "Privilégiez les choix utiles à long terme plutôt que les dépenses impulsives.",
    },
  ];

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles =
  StyleSheet.create({
    /*
    |--------------------------------------------------------------------------
    | Page
    |--------------------------------------------------------------------------
    */

    page: {
      position:
        "relative",

      paddingTop:
        34,

      paddingRight:
        42,

      paddingBottom:
        54,

      paddingLeft:
        42,

      backgroundColor:
        NAVY,

      color:
        CREAM,

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
    | Cercles célestes
    |--------------------------------------------------------------------------
    */

    topOrbitLarge: {
      position:
        "absolute",

      top:
        -112,

      right:
        -101,

      width:
        258,

      height:
        258,

      borderRadius:
        129,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.5,
    },

    topOrbitMedium: {
      position:
        "absolute",

      top:
        -75,

      right:
        -64,

      width:
        184,

      height:
        184,

      borderRadius:
        92,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.45,
    },

    topOrbitSmall: {
      position:
        "absolute",

      top:
        -37,

      right:
        -27,

      width:
        108,

      height:
        108,

      borderRadius:
        54,

      borderWidth:
        0.5,

      borderColor:
        GOLD,

      opacity:
        0.25,
    },

    bottomOrbitLarge: {
      position:
        "absolute",

      bottom:
        -129,

      left:
        -118,

      width:
        275,

      height:
        275,

      borderRadius:
        138,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.42,
    },

    bottomOrbitMedium: {
      position:
        "absolute",

      bottom:
        -84,

      left:
        -73,

      width:
        184,

      height:
        184,

      borderRadius:
        92,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.35,
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
        14,
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

      paddingTop:
        7,

      paddingRight:
        12,

      paddingBottom:
        7,

      paddingLeft:
        10,

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
    | Titre principal
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
        2.35,

      textTransform:
        "uppercase",
    },

    title: {
      maxWidth:
        440,

      marginBottom:
        6,

      color:
        CREAM,

      fontSize:
        23.5,

      lineHeight:
        1.17,
    },

    period: {
      marginBottom:
        9,

      color:
        MUTED_CREAM,

      fontSize:
        9.5,
    },

    titleDecoration: {
      flexDirection:
        "row",

      alignItems:
        "center",
    },

    titleLineLarge: {
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
        23,

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
        75,

      marginBottom:
        12,

      paddingTop:
        12,

      paddingRight:
        15,

      paddingBottom:
        12,

      paddingLeft:
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
        2,

      right:
        14,

      width:
        68,

      height:
        68,

      objectFit:
        "contain",

      opacity:
        0.05,
    },

    introductionLabel: {
      marginBottom:
        5,

      color:
        GOLD,

      fontSize:
        6.8,

      letterSpacing:
        1.1,

      textTransform:
        "uppercase",
    },

    introductionText: {
      maxWidth:
        455,

      color:
        MUTED_CREAM,

      fontSize:
        8.15,

      lineHeight:
        1.46,
    },

    /*
    |--------------------------------------------------------------------------
    | En-tête de section
    |--------------------------------------------------------------------------
    */

    sectionHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      marginBottom:
        8,
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
        15,

      height:
        15,

      marginRight:
        8,

      objectFit:
        "contain",
    },

    sectionTitle: {
      color:
        GOLD,

      fontSize:
        8.9,

      letterSpacing:
        1.35,

      textTransform:
        "uppercase",
    },

    /*
    |--------------------------------------------------------------------------
    | Cartes des périodes favorables
    |--------------------------------------------------------------------------
    */

    cardsContainer: {
      marginBottom:
        10,
    },

    card: {
      position:
        "relative",

      flexDirection:
        "row",

      minHeight:
        105,

      marginBottom:
        8,

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

    cardLast: {
      marginBottom:
        0,
    },

    /*
    |--------------------------------------------------------------------------
    | Colonne de la date
    |--------------------------------------------------------------------------
    */

    dateBlock: {
      position:
        "relative",

      width:
        94,

      alignItems:
        "center",

      justifyContent:
        "center",

      paddingTop:
        11,

      paddingRight:
        8,

      paddingBottom:
        11,

      paddingLeft:
        8,

      borderRightWidth:
        0.6,

      borderRightColor:
        DEEP_GOLD,

      backgroundColor:
        NAVY_DEEP,

      overflow:
        "hidden",
    },

    dateOrbitLarge: {
      position:
        "absolute",

      top:
        -38,

      left:
        -34,

      width:
        104,

      height:
        104,

      borderRadius:
        52,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.65,
    },

    dateOrbitSmall: {
      position:
        "absolute",

      top:
        -13,

      left:
        -9,

      width:
        57,

      height:
        57,

      borderRadius:
        29,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.55,
    },

    dateIconOuter: {
      width:
        40,

      height:
        40,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginBottom:
        7,

      borderRadius:
        20,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,
    },

    dateIconInner: {
      width:
        32,

      height:
        32,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        16,

      borderWidth:
        0.8,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    dateIcon: {
      width:
        21,

      height:
        21,

      objectFit:
        "contain",
    },

    dateLabel: {
      marginBottom:
        3,

      color:
        SOFT_TEXT,

      fontSize:
        5.8,

      letterSpacing:
        0.8,

      textAlign:
        "center",

      textTransform:
        "uppercase",
    },

    dates: {
      maxWidth:
        74,

      color:
        GOLD,

      fontSize:
        8.4,

      lineHeight:
        1.25,

      textAlign:
        "center",
    },

    /*
    |--------------------------------------------------------------------------
    | Contenu de la carte
    |--------------------------------------------------------------------------
    */

    cardMain: {
      position:
        "relative",

      flex:
        1,

      paddingTop:
        10,

      paddingRight:
        13,

      paddingBottom:
        9,

      paddingLeft:
        13,

      overflow:
        "hidden",
    },

    cardOrbitLarge: {
      position:
        "absolute",

      top:
        -65,

      right:
        -68,

      width:
        144,

      height:
        144,

      borderRadius:
        72,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.55,
    },

    cardOrbitSmall: {
      position:
        "absolute",

      top:
        -29,

      right:
        -32,

      width:
        76,

      height:
        76,

      borderRadius:
        38,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.4,
    },

    cardHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        4,
    },

    categoryContent: {
      flexDirection:
        "row",

      alignItems:
        "center",
    },

    categoryIcon: {
      width:
        14,

      height:
        14,

      marginRight:
        6,

      objectFit:
        "contain",
    },

    categoryBadge: {
      paddingTop:
        3,

      paddingRight:
        7,

      paddingBottom:
        3,

      paddingLeft:
        7,

      borderRadius:
        9,

      borderWidth:
        0.5,

      fontSize:
        5.8,

      letterSpacing:
        0.35,

      textTransform:
        "uppercase",
    },

    categoryLove: {
      color:
        "#F1D9E3",

      borderColor:
        "#8A566A",

      backgroundColor:
        "#321D27",
    },

    categoryCareer: {
      color:
        "#D7E5F3",

      borderColor:
        "#566F8D",

      backgroundColor:
        "#17283B",
    },

    categoryMoney: {
      color:
        "#E4E9C8",

      borderColor:
        "#73794B",

      backgroundColor:
        "#272A18",
    },

    categoryEnergy: {
      color:
        "#F3DFC3",

      borderColor:
        "#8A6840",

      backgroundColor:
        "#302719",
    },

    favorableLabel: {
      color:
        GOLD,

      fontSize:
        5.8,

      letterSpacing:
        0.75,

      textTransform:
        "uppercase",
    },

    cardTitle: {
      marginBottom:
        4,

      paddingRight:
        20,

      color:
        GOLD,

      fontSize:
        9.5,

      lineHeight:
        1.25,
    },

    description: {
      marginBottom:
        5,

      color:
        MUTED_CREAM,

      fontSize:
        6.9,

      lineHeight:
        1.38,
    },

    adviceContainer: {
      flexDirection:
        "row",

      alignItems:
        "flex-start",

      paddingTop:
        5,

      borderTopWidth:
        0.5,

      borderTopColor:
        DEEP_GOLD,
    },

    adviceAccent: {
      width:
        2,

      alignSelf:
        "stretch",

      marginRight:
        8,

      borderRadius:
        1,

      backgroundColor:
        GOLD,
    },

    adviceContent: {
      flex:
        1,
    },

    adviceLabel: {
      marginBottom:
        2.5,

      color:
        GOLD,

      fontSize:
        5.5,

      letterSpacing:
        0.7,

      textTransform:
        "uppercase",
    },

    advice: {
      color:
        CREAM,

      fontSize:
        6.4,

      lineHeight:
        1.35,
    },

    /*
    |--------------------------------------------------------------------------
    | Conclusion
    |--------------------------------------------------------------------------
    */

    closingCard: {
      position:
        "relative",

      flexDirection:
        "row",

      alignItems:
        "center",

      minHeight:
        68,

      paddingTop:
        10,

      paddingRight:
        15,

      paddingBottom:
        10,

      paddingLeft:
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

    closingWatermark: {
      position:
        "absolute",

      top:
        3,

      right:
        15,

      width:
        60,

      height:
        60,

      objectFit:
        "contain",

      opacity:
        0.05,
    },

    closingIconCircle: {
      width:
        38,

      height:
        38,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        11,

      borderRadius:
        19,

      borderWidth:
        0.7,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD_LIGHT,
    },

    closingIcon: {
      width:
        23,

      height:
        23,

      objectFit:
        "contain",
    },

    closingContent: {
      flex:
        1,
    },

    closingTitle: {
      marginBottom:
        4,

      color:
        GOLD,

      fontSize:
        6.8,

      letterSpacing:
        1.05,

      textTransform:
        "uppercase",
    },

    closingText: {
      maxWidth:
        425,

      color:
        CREAM,

      fontSize:
        7.8,

      lineHeight:
        1.42,
    },
  });

/*
|--------------------------------------------------------------------------
| Style du badge
|--------------------------------------------------------------------------
*/

function getCategoryStyle(
  category:
    BestPeriodCategory,
) {
  switch (category) {
    case "love":
      return styles.categoryLove;

    case "career":
      return styles.categoryCareer;

    case "money":
      return styles.categoryMoney;

    case "energy":
      return styles.categoryEnergy;

    default:
      return styles.categoryEnergy;
  }
}

/*
|--------------------------------------------------------------------------
| Icône de la catégorie
|--------------------------------------------------------------------------
*/

function getCategoryIcon(
  category:
    BestPeriodCategory,
) {
  switch (category) {
    case "love":
      return HOROSCOPE_ICONS.venus;

    case "career":
      return HOROSCOPE_ICONS.saturn;

    case "money":
      return HOROSCOPE_ICONS.jupiter;

    case "energy":
      return HOROSCOPE_ICONS.mars;

    default:
      return HOROSCOPE_ICONS.sun;
  }
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthBestPeriods({
  identity,
  period,
}: HoroscopeMonthBestPeriodsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      {/*
      |--------------------------------------------------------------------------
      | Fond étoilé
      |--------------------------------------------------------------------------
      */}

      <HoroscopeStarBackground />

      <View style={styles.topOrbitLarge} />
      <View style={styles.topOrbitMedium} />
      <View style={styles.topOrbitSmall} />

      <View style={styles.bottomOrbitLarge} />
      <View style={styles.bottomOrbitMedium} />

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
            Les fenêtres favorables
          </Text>

          <Text style={styles.title}>
            Les meilleures périodes de votre mois
          </Text>

          <Text style={styles.period}>
            {period.label}
          </Text>

          <View style={styles.titleDecoration}>
            <View
              style={styles.titleLineLarge}
            />

            <Image
              src={HOROSCOPE_ICONS.jupiter}
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
            Vos points d’appui
          </Text>

          <Text
            style={styles.introductionText}
          >
            Certaines périodes de{" "}
            {period.label} offrent un climat
            particulièrement favorable au signe{" "}
            {identity.zodiacSignLabel}. Elles
            peuvent soutenir vos initiatives,
            vos relations, vos projets ou votre
            organisation. Utilisez ces moments
            comme des points d’appui, sans
            oublier que votre discernement
            demeure essentiel.
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | En-tête de la liste
        |--------------------------------------------------------------------------
        */}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.sun}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Les périodes à privilégier
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Cartes
        |--------------------------------------------------------------------------
        */}

        <View style={styles.cardsContainer}>
          {TEMPORARY_BEST_PERIODS.map(
            (
              item,
              index,
            ) => {
              const isLast =
                index ===
                TEMPORARY_BEST_PERIODS.length -
                  1;

              const categoryIcon =
                getCategoryIcon(
                  item.category,
                );

              return (
                <View
                  key={item.id}
                  style={[
                    styles.card,
                    isLast
                      ? styles.cardLast
                      : {},
                  ]}
                  wrap={false}
                >
                  {/*
                  |--------------------------------------------------------------------------
                  | Date
                  |--------------------------------------------------------------------------
                  */}

                  <View style={styles.dateBlock}>
                    <View
                      style={
                        styles.dateOrbitLarge
                      }
                    />

                    <View
                      style={
                        styles.dateOrbitSmall
                      }
                    />

                    <View
                      style={
                        styles.dateIconOuter
                      }
                    >
                      <View
                        style={
                          styles.dateIconInner
                        }
                      >
                        <Image
                          src={categoryIcon}
                          style={styles.dateIcon}
                        />
                      </View>
                    </View>

                    <Text
                      style={styles.dateLabel}
                    >
                      Période
                    </Text>

                    <Text style={styles.dates}>
                      {item.dates}
                    </Text>
                  </View>

                  {/*
                  |--------------------------------------------------------------------------
                  | Contenu
                  |--------------------------------------------------------------------------
                  */}

                  <View style={styles.cardMain}>
                    <View
                      style={
                        styles.cardOrbitLarge
                      }
                    />

                    <View
                      style={
                        styles.cardOrbitSmall
                      }
                    />

                    <View style={styles.cardHeader}>
                      <View
                        style={
                          styles.categoryContent
                        }
                      >
                        <Image
                          src={categoryIcon}
                          style={
                            styles.categoryIcon
                          }
                        />

                        <Text
                          style={[
                            styles.categoryBadge,
                            getCategoryStyle(
                              item.category,
                            ),
                          ]}
                        >
                          {item.categoryLabel}
                        </Text>
                      </View>

                      <Text
                        style={
                          styles.favorableLabel
                        }
                      >
                        Favorable
                      </Text>
                    </View>

                    <Text
                      style={styles.cardTitle}
                    >
                      {item.title}
                    </Text>

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
                      <View
                        style={
                          styles.adviceAccent
                        }
                      />

                      <View
                        style={
                          styles.adviceContent
                        }
                      >
                        <Text
                          style={
                            styles.adviceLabel
                          }
                        >
                          À privilégier
                        </Text>

                        <Text
                          style={styles.advice}
                        >
                          {item.advice}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            },
          )}
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Conclusion
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.closingCard}
          wrap={false}
        >
          <Image
            src={HOROSCOPE_ICONS.sun}
            style={styles.closingWatermark}
          />

          <View
            style={
              styles.closingIconCircle
            }
          >
            <Image
              src={HOROSCOPE_ICONS.sun}
              style={styles.closingIcon}
            />
          </View>

          <View style={styles.closingContent}>
            <Text
              style={styles.closingTitle}
            >
              Votre rythme du mois
            </Text>

            <Text
              style={styles.closingText}
            >
              Vous n’avez pas besoin de tout
              accomplir en même temps.
              Concentrez vos efforts sur les
              périodes où l’énergie semble plus
              fluide, puis utilisez les autres
              moments pour réfléchir, ajuster et
              préparer la suite.
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
