import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

type HoroscopeMonthDelicatePeriodsProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type DelicatePeriodCategory =
  | "communication"
  | "relationships"
  | "career"
  | "energy";

type TemporaryDelicatePeriod = {
  id: string;
  dates: string;
  category:
    DelicatePeriodCategory;
  categoryLabel: string;
  title: string;
  description: string;
  advice: string;
};

const TEMPORARY_DELICATE_PERIODS:
  TemporaryDelicatePeriod[] = [
    {
      id:
        "delicate-period-1",

      dates:
        "Du 6 au 9",

      category:
        "communication",

      categoryLabel:
        "Communication",

      title:
        "Des échanges qui demandent plus de précision",

      description:
        "Certains messages pourraient être mal compris ou manquer de clarté. Une réponse trop rapide pourrait accentuer une tension qui aurait pourtant pu être évitée.",

      advice:
        "Relisez vos messages, vérifiez les informations et demandez des précisions avant de tirer une conclusion.",
    },

    {
      id:
        "delicate-period-2",

      dates:
        "Du 13 au 16",

      category:
        "relationships",

      categoryLabel:
        "Relations",

      title:
        "Une sensibilité émotionnelle plus marquée",

      description:
        "Les réactions peuvent être plus intenses durant cette période. Une ancienne frustration ou un besoin longtemps retenu pourrait refaire surface dans une relation importante.",

      advice:
        "Exprimez vos besoins calmement et évitez de transformer une émotion passagère en décision définitive.",
    },

    {
      id:
        "delicate-period-3",

      dates:
        "Du 20 au 23",

      category:
        "career",

      categoryLabel:
        "Carrière",

      title:
        "Des ralentissements à utiliser intelligemment",

      description:
        "Un délai, une réponse tardive ou une responsabilité imprévue pourrait modifier votre organisation. Cette période vous demande davantage de structure et de patience.",

      advice:
        "Concentrez-vous sur ce qui dépend réellement de vous et utilisez les délais pour consolider votre préparation.",
    },

    {
      id:
        "delicate-period-4",

      dates:
        "Du 27 au 29",

      category:
        "energy",

      categoryLabel:
        "Énergie",

      title:
        "Un besoin de ralentir et de récupérer",

      description:
        "Votre énergie pourrait être moins constante. Une accumulation de responsabilités peut vous rendre plus impatient ou diminuer votre capacité à rester concentré.",

      advice:
        "Allégez votre horaire lorsque cela est possible et accordez davantage de place au repos.",
    },
  ];

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

    topDecoration: {
      position:
        "absolute",

      top:
        -76,

      right:
        -68,

      width:
        185,

      height:
        185,

      borderRadius:
        93,

      backgroundColor:
        "#E9DEE9",

      opacity:
        0.52,
    },

    bottomDecoration: {
      position:
        "absolute",

      bottom:
        -92,

      left:
        -78,

      width:
        205,

      height:
        205,

      borderRadius:
        103,

      backgroundColor:
        "#EFE2D3",

      opacity:
        0.48,
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
        420,

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

    noticeBox: {
      marginTop:
        17,

      paddingTop:
        11,

      paddingRight:
        14,

      paddingBottom:
        11,

      paddingLeft:
        14,

      borderLeft:
        "3 solid #9B738C",

      backgroundColor:
        "#F3ECF1",
    },

    noticeText: {
      color:
        "#5D4D5A",

      fontSize:
        8.4,

      lineHeight:
        1.48,
    },

    cardsContainer: {
      marginTop:
        16,

      gap:
        11,
    },

    card: {
      position:
        "relative",

      minHeight:
        104,

      paddingTop:
        15,

      paddingRight:
        16,

      paddingBottom:
        14,

      paddingLeft:
        114,

      border:
        "1 solid #E4DCE4",

      borderRadius:
        8,

      backgroundColor:
        "#FFFFFF",
    },

    dateBlock: {
      position:
        "absolute",

      top:
        15,

      bottom:
        15,

      left:
        15,

      width:
        82,

      alignItems:
        "center",

      justifyContent:
        "center",

      paddingRight:
        8,

      paddingLeft:
        8,

      borderRadius:
        7,

      backgroundColor:
        "#F2E9EC",
    },

    dateLabel: {
      marginBottom:
        5,

      color:
        "#8D5E72",

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.7,

      textTransform:
        "uppercase",
    },

    dates: {
      color:
        "#4A354E",

      fontSize:
        11,

      fontWeight:
        700,

      textAlign:
        "center",

      lineHeight:
        1.25,
    },

    cardHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        5,
    },

    categoryBadge: {
      paddingTop:
        3,

      paddingRight:
        8,

      paddingBottom:
        3,

      paddingLeft:
        8,

      borderRadius:
        9,

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.35,

      textTransform:
        "uppercase",
    },

    categoryCommunication: {
      color:
        "#6B5B84",

      backgroundColor:
        "#EDE9F3",
    },

    categoryRelationships: {
      color:
        "#8A5367",

      backgroundColor:
        "#F5E8ED",
    },

    categoryCareer: {
      color:
        "#5B667F",

      backgroundColor:
        "#E9EDF3",
    },

    categoryEnergy: {
      color:
        "#806044",

      backgroundColor:
        "#F4EBDD",
    },

    delicateLabel: {
      color:
        "#9A7A87",

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.5,

      textTransform:
        "uppercase",
    },

    cardTitle: {
      marginBottom:
        5,

      color:
        "#342638",

      fontSize:
        11.5,

      fontWeight:
        700,

      lineHeight:
        1.25,
    },

    description: {
      color:
        "#625766",

      fontSize:
        8.4,

      lineHeight:
        1.48,
    },

    adviceContainer: {
      marginTop:
        8,

      paddingTop:
        7,

      borderTop:
        "1 solid #EEE8EE",
    },

    adviceLabel: {
      marginBottom:
        3,

      color:
        "#8D5E72",

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.65,

      textTransform:
        "uppercase",
    },

    advice: {
      color:
        "#514756",

      fontSize:
        8,

      fontStyle:
        "italic",

      lineHeight:
        1.42,
    },

    closingBox: {
      marginTop:
        17,

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

    closingTitle: {
      marginBottom:
        4,

      color:
        "#4A354E",

      fontSize:
        9,

      fontWeight:
        700,
    },

    closingText: {
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

    footerText: {
      color:
        "#8E7E91",

      fontSize:
        7,
    },
  });

function getCategoryStyle(
  category:
    DelicatePeriodCategory,
) {
  switch (category) {
    case "communication":
      return styles.categoryCommunication;

    case "relationships":
      return styles.categoryRelationships;

    case "career":
      return styles.categoryCareer;

    case "energy":
      return styles.categoryEnergy;

    default:
      return styles.categoryEnergy;
  }
}

export default function HoroscopeMonthDelicatePeriods({
  identity,
  period,
}: HoroscopeMonthDelicatePeriodsProps) {
  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      <View
        style={styles.topDecoration}
      />

      <View
        style={styles.bottomDecoration}
      />

      <Text style={styles.eyebrow}>
        Les moments de vigilance
      </Text>

      <Text style={styles.title}>
        Les périodes plus délicates de votre mois
      </Text>

      <View style={styles.divider} />

      <Text style={styles.introduction}>
        Certaines périodes de{" "}
        {period.label} pourraient demander
        davantage de patience au signe{" "}
        {identity.zodiacSignLabel}.
        Elles ne représentent pas des
        événements négatifs inévitables,
        mais plutôt des moments où une
        réaction réfléchie peut faire une
        réelle différence.
      </Text>

      <View style={styles.noticeBox}>
        <Text style={styles.noticeText}>
          Une période délicate peut devenir
          constructive lorsqu’elle vous
          aide à ralentir, à revoir une
          décision ou à mieux comprendre
          ce qui demande votre attention.
        </Text>
      </View>

      <View
        style={styles.cardsContainer}
      >
        {TEMPORARY_DELICATE_PERIODS.map(
          (
            item,
          ) => (
            <View
              key={item.id}
              style={styles.card}
              wrap={false}
            >
              <View
                style={styles.dateBlock}
              >
                <Text
                  style={
                    styles.dateLabel
                  }
                >
                  Vigilance
                </Text>

                <Text
                  style={styles.dates}
                >
                  {item.dates}
                </Text>
              </View>

              <View
                style={styles.cardHeader}
              >
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

                <Text
                  style={
                    styles.delicateLabel
                  }
                >
                  À surveiller
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
                <Text
                  style={
                    styles.adviceLabel
                  }
                >
                  La meilleure approche
                </Text>

                <Text
                  style={styles.advice}
                >
                  {item.advice}
                </Text>
              </View>
            </View>
          ),
        )}
      </View>

      <View style={styles.closingBox}>
        <Text
          style={styles.closingTitle}
        >
          Gardez votre pouvoir de décision
        </Text>

        <Text
          style={styles.closingText}
        >
          L’objectif n’est pas d’éviter
          toute difficulté, mais de choisir
          une réponse plus consciente.
          Prenez du recul lorsque la tension
          augmente et attendez d’avoir une
          vision plus claire avant de
          prendre une décision importante.
        </Text>
      </View>

      <View
        fixed
        style={styles.footer}
      >
        <Text
          style={styles.footerText}
        >
          Luna Astralis
        </Text>

        <Text
          style={styles.footerText}
        >
          {identity.zodiacSignLabel}
          {" • "}
          {period.label}
        </Text>
      </View>
    </Page>
  );
}
