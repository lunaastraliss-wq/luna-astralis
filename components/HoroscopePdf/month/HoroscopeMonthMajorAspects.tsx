import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type HoroscopeMonthMajorAspectsProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type TemporaryMonthlyAspect = {
  symbol: string;
  planets: string;
  aspect: string;
  tone:
    | "harmonious"
    | "dynamic"
    | "transformative";
  title: string;
  description: string;
  advice: string;
};

/*
|--------------------------------------------------------------------------
| Données temporaires
|--------------------------------------------------------------------------
|
| Ces données servent uniquement à construire et vérifier la page.
|
| Elles seront remplacées plus tard par les résultats du véritable
| moteur de calcul astrologique mensuel.
|
*/

const TEMPORARY_MONTHLY_ASPECTS:
  TemporaryMonthlyAspect[] = [
    {
      symbol: "△",
      planets:
        "Soleil — Jupiter",
      aspect:
        "Aspect harmonieux",
      tone:
        "harmonious",
      title:
        "Une dynamique d’expansion",
      description:
        "Une énergie encourageante accompagne votre évolution durant ce mois. Elle favorise la confiance, l’ouverture et les décisions capables d’élargir vos possibilités.",
      advice:
        "Avancez avec assurance, mais conservez une vision réaliste de vos priorités.",
    },
    {
      symbol: "□",
      planets:
        "Mercure — Saturne",
      aspect:
        "Aspect de tension",
      tone:
        "dynamic",
      title:
        "Des ajustements dans la communication",
      description:
        "Certaines conversations ou démarches pourraient demander davantage de patience. Les ralentissements rencontrés vous invitent à préciser vos idées avant de les exprimer.",
      advice:
        "Prenez le temps de vérifier les informations et évitez les conclusions trop rapides.",
    },
    {
      symbol: "☌",
      planets:
        "Vénus — Mars",
      aspect:
        "Conjonction",
      tone:
        "transformative",
      title:
        "Une intensité relationnelle renouvelée",
      description:
        "Les émotions, les désirs et les élans affectifs peuvent se manifester avec plus de force. Cette influence soutient autant les rapprochements que les prises de conscience.",
      advice:
        "Exprimez vos besoins clairement sans chercher à provoquer une réaction immédiate.",
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

      minHeight:
        "100%",

      paddingTop:
        54,

      paddingRight:
        48,

      paddingBottom:
        58,

      paddingLeft:
        48,

      backgroundColor:
        "#FBF8F2",

      color:
        "#2E2435",

      fontFamily:
        "Helvetica",
    },

    decorativeCircleTop: {
      position:
        "absolute",

      top:
        -78,

      right:
        -72,

      width:
        190,

      height:
        190,

      borderRadius:
        95,

      backgroundColor:
        "#EDE2F1",

      opacity:
        0.55,
    },

    decorativeCircleBottom: {
      position:
        "absolute",

      bottom:
        -95,

      left:
        -85,

      width:
        210,

      height:
        210,

      borderRadius:
        105,

      backgroundColor:
        "#F2E4C8",

      opacity:
        0.45,
    },

    eyebrow: {
      marginBottom:
        8,

      color:
        "#9A7137",

      fontSize:
        8.5,

      fontWeight:
        700,

      letterSpacing:
        1.5,

      textTransform:
        "uppercase",
    },

    title: {
      maxWidth:
        390,

      color:
        "#38273E",

      fontSize:
        24,

      fontWeight:
        700,

      lineHeight:
        1.12,
    },

    divider: {
      width:
        56,

      height:
        2,

      marginTop:
        14,

      marginBottom:
        17,

      backgroundColor:
        "#C79B52",
    },

    introduction: {
      maxWidth:
        465,

      color:
        "#5F5364",

      fontSize:
        10.2,

      lineHeight:
        1.55,
    },

    cardsContainer: {
      marginTop:
        22,

      gap:
        13,
    },

    card: {
      position:
        "relative",

      paddingTop:
        16,

      paddingRight:
        17,

      paddingBottom:
        15,

      paddingLeft:
        72,

      border:
        "1 solid #E4DCE4",

      borderRadius:
        8,

      backgroundColor:
        "#FFFFFF",
    },

    aspectIconContainer: {
      position:
        "absolute",

      top:
        16,

      left:
        16,

      width:
        40,

      height:
        40,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        20,

      backgroundColor:
        "#F4EDF5",
    },

    aspectIcon: {
      color:
        "#633E69",

      fontSize:
        20,

      fontWeight:
        700,
    },

    cardHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        6,
    },

    planets: {
      color:
        "#4B3450",

      fontSize:
        10,

      fontWeight:
        700,
    },

    badge: {
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

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.3,

      textTransform:
        "uppercase",
    },

    badgeHarmonious: {
      color:
        "#4F704F",

      backgroundColor:
        "#EAF2E8",
    },

    badgeDynamic: {
      color:
        "#8A5B38",

      backgroundColor:
        "#F8ECDD",
    },

    badgeTransformative: {
      color:
        "#69466E",

      backgroundColor:
        "#EFE5F1",
    },

    cardTitle: {
      marginBottom:
        5,

      color:
        "#342638",

      fontSize:
        12,

      fontWeight:
        700,

      lineHeight:
        1.25,
    },

    cardDescription: {
      color:
        "#625766",

      fontSize:
        8.7,

      lineHeight:
        1.5,
    },

    adviceContainer: {
      marginTop:
        9,

      paddingTop:
        7,

      borderTop:
        "1 solid #EEE8EE",
    },

    adviceLabel: {
      marginBottom:
        3,

      color:
        "#A17638",

      fontSize:
        7,

      fontWeight:
        700,

      letterSpacing:
        0.7,

      textTransform:
        "uppercase",
    },

    advice: {
      color:
        "#514756",

      fontSize:
        8.2,

      fontStyle:
        "italic",

      lineHeight:
        1.45,
    },

    summaryBox: {
      marginTop:
        18,

      paddingTop:
        13,

      paddingRight:
        15,

      paddingBottom:
        13,

      paddingLeft:
        15,

      borderLeft:
        "3 solid #C79B52",

      backgroundColor:
        "#F4EEE5",
    },

    summaryTitle: {
      marginBottom:
        4,

      color:
        "#4A354E",

      fontSize:
        9,

      fontWeight:
        700,
    },

    summaryText: {
      color:
        "#625665",

      fontSize:
        8.5,

      lineHeight:
        1.48,
    },

    footer: {
      position:
        "absolute",

      right:
        48,

      bottom:
        25,

      left:
        48,

      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      paddingTop:
        8,

      borderTop:
        "1 solid #DED5DF",
    },

    footerBrand: {
      color:
        "#8E7E91",

      fontSize:
        7,
    },

    footerPeriod: {
      color:
        "#8E7E91",

      fontSize:
        7,
    },
  });

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

function getBadgeStyle(
  tone:
    TemporaryMonthlyAspect["tone"],
) {
  switch (tone) {
    case "harmonious":
      return styles.badgeHarmonious;

    case "dynamic":
      return styles.badgeDynamic;

    case "transformative":
      return styles.badgeTransformative;

    default:
      return styles.badgeTransformative;
  }
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthMajorAspects({
  identity,
  period,
}: HoroscopeMonthMajorAspectsProps) {
  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      <View
        style={
          styles.decorativeCircleTop
        }
      />

      <View
        style={
          styles.decorativeCircleBottom
        }
      />

      <Text style={styles.eyebrow}>
        Les mouvements du ciel
      </Text>

      <Text style={styles.title}>
        Les aspects majeurs de votre mois
      </Text>

      <View style={styles.divider} />

      <Text style={styles.introduction}>
        Les aspects astrologiques
        représentent les relations qui
        se forment entre les planètes.
        Pour le signe{" "}
        {identity.zodiacSignLabel},
        ces mouvements mettent en lumière
        les principales dynamiques de{" "}
        {period.label}. Certains aspects
        facilitent votre progression,
        tandis que d’autres vous invitent
        à ajuster votre manière d’agir.
      </Text>

      <View
        style={styles.cardsContainer}
      >
        {TEMPORARY_MONTHLY_ASPECTS.map(
          (
            item,
          ) => (
            <View
              key={
                `${item.planets}-${item.aspect}`
              }
              style={styles.card}
              wrap={false}
            >
              <View
                style={
                  styles.aspectIconContainer
                }
              >
                <Text
                  style={
                    styles.aspectIcon
                  }
                >
                  {item.symbol}
                </Text>
              </View>

              <View
                style={
                  styles.cardHeader
                }
              >
                <Text
                  style={
                    styles.planets
                  }
                >
                  {item.planets}
                </Text>

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
                style={
                  styles.cardTitle
                }
              >
                {item.title}
              </Text>

              <Text
                style={
                  styles.cardDescription
                }
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
                  style={
                    styles.advice
                  }
                >
                  {item.advice}
                </Text>
              </View>
            </View>
          ),
        )}
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>
          Votre ligne directrice
        </Text>

        <Text style={styles.summaryText}>
          Ce mois vous demande de combiner
          confiance et discernement.
          Accueillez les ouvertures qui se
          présentent, tout en prenant le
          temps nécessaire pour comprendre
          les tensions avant d’y réagir.
        </Text>
      </View>

      <View
        fixed
        style={styles.footer}
      >
        <Text
          style={styles.footerBrand}
        >
          Luna Astralis
        </Text>

        <Text
          style={styles.footerPeriod}
        >
          {identity.zodiacSignLabel}
          {" • "}
          {period.label}
        </Text>
      </View>
    </Page>
  );
}
