import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

type HoroscopeMonthMoonPhasesProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type MoonPhaseTone =
  | "new-moon"
  | "first-quarter"
  | "full-moon"
  | "last-quarter";

type TemporaryMoonPhase = {
  id: string;
  date: string;
  phase: string;
  symbol: string;
  sign: string;
  tone: MoonPhaseTone;
  title: string;
  description: string;
  influence: string;
  advice: string;
};

const TEMPORARY_MOON_PHASES:
  TemporaryMoonPhase[] = [
    {
      id:
        "new-moon",

      date:
        "4 du mois",

      phase:
        "Nouvelle Lune",

      symbol:
        "●",

      sign:
        "Dans un signe de renouveau",

      tone:
        "new-moon",

      title:
        "Un nouveau cycle commence à prendre forme",

      description:
        "La Nouvelle Lune ouvre une période d’intention, de réflexion et de recommencement. Elle vous invite à identifier ce que vous souhaitez construire durant les prochaines semaines.",

      influence:
        "Cette phase peut soutenir un nouveau projet, une décision personnelle ou une intention que vous souhaitez développer progressivement.",

      advice:
        "Choisissez une intention claire et réaliste, puis posez un premier geste concret pour lui donner vie.",
    },

    {
      id:
        "first-quarter",

      date:
        "11 du mois",

      phase:
        "Premier quartier",

      symbol:
        "◐",

      sign:
        "Dans un signe d’action",

      tone:
        "first-quarter",

      title:
        "Le moment d’agir malgré les premiers obstacles",

      description:
        "Le Premier quartier représente une étape de mouvement et d’ajustement. Les intentions formulées plus tôt demandent maintenant davantage d’engagement et de détermination.",

      influence:
        "Vous pourriez devoir modifier votre approche, défendre une priorité ou poursuivre un projet malgré une hésitation passagère.",

      advice:
        "Ne confondez pas un obstacle temporaire avec un signe que vous devez abandonner.",
    },

    {
      id:
        "full-moon",

      date:
        "19 du mois",

      phase:
        "Pleine Lune",

      symbol:
        "○",

      sign:
        "Dans un signe de révélation",

      tone:
        "full-moon",

      title:
        "Une prise de conscience devient difficile à ignorer",

      description:
        "La Pleine Lune amplifie les émotions et met en lumière ce qui demande une réponse. Elle peut marquer un accomplissement, une révélation ou la fin d’une étape importante.",

      influence:
        "Une situation relationnelle, professionnelle ou personnelle pourrait atteindre un point culminant et vous aider à voir plus clairement ce qui doit évoluer.",

      advice:
        "Accueillez ce qui devient évident sans prendre une décision uniquement sous le coup de l’émotion.",
    },

    {
      id:
        "last-quarter",

      date:
        "26 du mois",

      phase:
        "Dernier quartier",

      symbol:
        "◑",

      sign:
        "Dans un signe de libération",

      tone:
        "last-quarter",

      title:
        "Une période favorable au tri et au détachement",

      description:
        "Le Dernier quartier invite à faire le point, à alléger ce qui est devenu inutile et à préparer la transition vers un nouveau cycle.",

      influence:
        "Cette phase peut vous aider à abandonner une habitude, à terminer une démarche ou à prendre de la distance face à une situation devenue trop lourde.",

      advice:
        "Libérez de l’espace dans votre horaire, vos pensées ou vos relations afin de mieux accueillir la suite.",
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
        -80,

      right:
        -70,

      width:
        192,

      height:
        192,

      borderRadius:
        96,

      backgroundColor:
        "#E6DCEA",

      opacity:
        0.56,
    },

    bottomDecoration: {
      position:
        "absolute",

      bottom:
        -96,

      left:
        -82,

      width:
        212,

      height:
        212,

      borderRadius:
        106,

      backgroundColor:
        "#EEE2CC",

      opacity:
        0.46,
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

    explanationBox: {
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
        "3 solid #765279",

      backgroundColor:
        "#F1EAF2",
    },

    explanationText: {
      color:
        "#5B4C5E",

      fontSize:
        8.4,

      lineHeight:
        1.48,
    },

    cardsContainer: {
      marginTop:
        17,

      gap:
        11,
    },

    card: {
      position:
        "relative",

      minHeight:
        112,

      paddingTop:
        15,

      paddingRight:
        16,

      paddingBottom:
        14,

      paddingLeft:
        106,

      border:
        "1 solid #E4DCE4",

      borderRadius:
        8,

      backgroundColor:
        "#FFFFFF",
    },

    moonBlock: {
      position:
        "absolute",

      top:
        15,

      bottom:
        15,

      left:
        15,

      width:
        74,

      alignItems:
        "center",

      justifyContent:
        "center",

      paddingRight:
        7,

      paddingLeft:
        7,

      borderRadius:
        7,

      backgroundColor:
        "#F5F0F5",
    },

    moonSymbol: {
      color:
        "#56365C",

      fontSize:
        28,

      fontWeight:
        700,

      lineHeight:
        1,
    },

    moonPhase: {
      marginTop:
        6,

      color:
        "#4A354E",

      fontSize:
        8.2,

      fontWeight:
        700,

      textAlign:
        "center",

      lineHeight:
        1.2,
    },

    moonDate: {
      marginTop:
        4,

      color:
        "#8D778F",

      fontSize:
        6.7,

      fontWeight:
        700,

      textAlign:
        "center",

      textTransform:
        "uppercase",
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

    phaseLabel: {
      color:
        "#8E7E91",

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.45,

      textTransform:
        "uppercase",
    },

    signBadge: {
      maxWidth:
        180,

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
        6.6,

      fontWeight:
        700,

      letterSpacing:
        0.3,

      textTransform:
        "uppercase",
    },

    signNewMoon: {
      color:
        "#6B5C35",

      backgroundColor:
        "#F3ECD9",
    },

    signFirstQuarter: {
      color:
        "#5C6780",

      backgroundColor:
        "#E9EDF3",
    },

    signFullMoon: {
      color:
        "#765279",

      backgroundColor:
        "#EFE6F1",
    },

    signLastQuarter: {
      color:
        "#6C6F50",

      backgroundColor:
        "#EEF0E3",
    },

    cardTitle: {
      marginBottom:
        5,

      color:
        "#342638",

      fontSize:
        11.3,

      fontWeight:
        700,

      lineHeight:
        1.25,
    },

    description: {
      color:
        "#625766",

      fontSize:
        8.3,

      lineHeight:
        1.47,
    },

    influenceContainer: {
      marginTop:
        7,

      paddingTop:
        7,

      borderTop:
        "1 solid #EEE8EE",
    },

    influenceTitle: {
      marginBottom:
        3,

      color:
        "#765279",

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.65,

      textTransform:
        "uppercase",
    },

    influenceText: {
      color:
        "#514756",

      fontSize:
        7.9,

      lineHeight:
        1.42,
    },

    adviceContainer: {
      marginTop:
        7,

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
        7.9,

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

function getMoonPhaseStyle(
  tone: MoonPhaseTone,
) {
  switch (tone) {
    case "new-moon":
      return styles.signNewMoon;

    case "first-quarter":
      return styles.signFirstQuarter;

    case "full-moon":
      return styles.signFullMoon;

    case "last-quarter":
      return styles.signLastQuarter;

    default:
      return styles.signNewMoon;
  }
}

export default function HoroscopeMonthMoonPhases({
  identity,
  period,
}: HoroscopeMonthMoonPhasesProps) {
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
        Le rythme lunaire
      </Text>

      <Text style={styles.title}>
        Les phases de la Lune de votre mois
      </Text>

      <View style={styles.divider} />

      <Text style={styles.introduction}>
        Durant{" "}
        {period.label}, les différentes
        phases de la Lune accompagnent le
        signe{" "}
        {identity.zodiacSignLabel}
        à travers un cycle de renouveau,
        d’action, de révélation et de
        libération. Chaque étape possède
        une énergie particulière que vous
        pouvez utiliser pour mieux rythmer
        vos décisions.
      </Text>

      <View
        style={styles.explanationBox}
      >
        <Text
          style={styles.explanationText}
        >
          Les phases lunaires ne
          représentent pas des événements
          obligatoires. Elles indiquent
          plutôt le climat émotionnel et
          symbolique qui accompagne
          certaines étapes du mois.
        </Text>
      </View>

      <View
        style={styles.cardsContainer}
      >
        {TEMPORARY_MOON_PHASES.map(
          (
            item,
          ) => (
            <View
              key={item.id}
              style={styles.card}
              wrap={false}
            >
              <View
                style={styles.moonBlock}
              >
                <Text
                  style={styles.moonSymbol}
                >
                  {item.symbol}
                </Text>

                <Text
                  style={styles.moonPhase}
                >
                  {item.phase}
                </Text>

                <Text
                  style={styles.moonDate}
                >
                  {item.date}
                </Text>
              </View>

              <View
                style={styles.cardHeader}
              >
                <Text
                  style={styles.phaseLabel}
                >
                  Phase lunaire
                </Text>

                <Text
                  style={[
                    styles.signBadge,
                    getMoonPhaseStyle(
                      item.tone,
                    ),
                  ]}
                >
                  {item.sign}
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
                  styles.influenceContainer
                }
              >
                <Text
                  style={
                    styles.influenceTitle
                  }
                >
                  Influence possible
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
          ),
        )}
      </View>

      <View style={styles.closingBox}>
        <Text
          style={styles.closingTitle}
        >
          Suivre le rythme plutôt que le forcer
        </Text>

        <Text
          style={styles.closingText}
        >
          Utilisez la Nouvelle Lune pour
          poser vos intentions, le Premier
          quartier pour agir, la Pleine
          Lune pour observer ce qui devient
          évident et le Dernier quartier
          pour vous libérer de ce qui
          ralentit votre évolution.
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

