import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

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
  id: string;
  dates: string;
  category: BestPeriodCategory;
  categoryLabel: string;
  title: string;
  description: string;
  advice: string;
};

const TEMPORARY_BEST_PERIODS:
  TemporaryBestPeriod[] = [
    {
      id: "best-period-1",
      dates: "Du 3 au 7",
      category: "energy",
      categoryLabel: "Énergie",
      title:
        "Une période idéale pour prendre votre élan",
      description:
        "Le début de cette période favorise les initiatives, les décisions et les actions qui demandent de la confiance. Vous pourriez ressentir davantage de clarté sur la direction à suivre.",
      advice:
        "Profitez de cette énergie pour commencer ce que vous remettez à plus tard.",
    },
    {
      id: "best-period-2",
      dates: "Du 11 au 15",
      category: "love",
      categoryLabel: "Amour",
      title:
        "Des échanges plus fluides et chaleureux",
      description:
        "Les relations bénéficient d’une atmosphère plus douce. Les rapprochements, les conversations sincères et les gestes affectueux pourraient être particulièrement bien reçus.",
      advice:
        "Exprimez ce que vous ressentez avec simplicité et authenticité.",
    },
    {
      id: "best-period-3",
      dates: "Du 18 au 22",
      category: "career",
      categoryLabel: "Carrière",
      title:
        "Une ouverture professionnelle intéressante",
      description:
        "Cette période peut favoriser une avancée, une réponse attendue ou une occasion de mettre vos compétences en valeur. Votre sérieux pourrait attirer une attention positive.",
      advice:
        "Présentez vos idées avec assurance et restez attentif aux nouvelles possibilités.",
    },
    {
      id: "best-period-4",
      dates: "Du 25 au 28",
      category: "money",
      categoryLabel: "Finances",
      title:
        "Un moment favorable pour mieux organiser vos ressources",
      description:
        "Vous pourriez voir plus clairement vos priorités financières. Une décision réfléchie ou une meilleure organisation peut renforcer votre sentiment de sécurité.",
      advice:
        "Privilégiez les choix utiles à long terme plutôt que les dépenses impulsives.",
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
        -74,

      right:
        -64,

      width:
        180,

      height:
        180,

      borderRadius:
        90,

      backgroundColor:
        "#F0E2C7",

      opacity:
        0.55,
    },

    bottomDecoration: {
      position:
        "absolute",

      bottom:
        -90,

      left:
        -75,

      width:
        200,

      height:
        200,

      borderRadius:
        100,

      backgroundColor:
        "#EADFEB",

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
        405,

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
        12,
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
        "#F4EEE5",
    },

    dateLabel: {
      marginBottom:
        5,

      color:
        "#A17638",

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

    categoryLove: {
      color:
        "#895263",

      backgroundColor:
        "#F6E8ED",
    },

    categoryCareer: {
      color:
        "#536987",

      backgroundColor:
        "#E9EEF5",
    },

    categoryMoney: {
      color:
        "#6C7046",

      backgroundColor:
        "#EEF0E1",
    },

    categoryEnergy: {
      color:
        "#815F35",

      backgroundColor:
        "#F6EBDD",
    },

    favorableLabel: {
      color:
        "#8E7E91",

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
        "#A17638",

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
  category: BestPeriodCategory,
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

export default function HoroscopeMonthBestPeriods({
  identity,
  period,
}: HoroscopeMonthBestPeriodsProps) {
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
        Les fenêtres favorables
      </Text>

      <Text style={styles.title}>
        Les meilleures périodes de votre mois
      </Text>

      <View style={styles.divider} />

      <Text style={styles.introduction}>
        Certaines périodes de{" "}
        {period.label} offrent un climat
        particulièrement favorable au
        signe{" "}
        {identity.zodiacSignLabel}.
        Elles peuvent soutenir vos
        initiatives, vos relations, vos
        projets ou votre organisation.
        Utilisez ces moments comme des
        points d’appui, sans oublier que
        votre discernement demeure
        essentiel.
      </Text>

      <View
        style={styles.cardsContainer}
      >
        {TEMPORARY_BEST_PERIODS.map(
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
                  Période
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
          ),
        )}
      </View>

      <View style={styles.closingBox}>
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
          périodes où l’énergie semble
          plus fluide, puis utilisez les
          autres moments pour réfléchir,
          ajuster et préparer la suite.
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
