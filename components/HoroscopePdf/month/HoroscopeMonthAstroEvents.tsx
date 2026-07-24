import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

type HoroscopeMonthAstroEventsProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type AstroEventTone =
  | "movement"
  | "retrograde"
  | "alignment"
  | "transition";

type TemporaryAstroEvent = {
  id: string;
  date: string;
  symbol: string;
  event: string;
  tone: AstroEventTone;
  category: string;
  title: string;
  description: string;
  impact: string;
  advice: string;
};

const TEMPORARY_ASTRO_EVENTS:
  TemporaryAstroEvent[] = [
    {
      id:
        "astro-event-mercury",

      date:
        "7 du mois",

      symbol:
        "☿",

      event:
        "Mercure change de signe",

      tone:
        "movement",

      category:
        "Communication",

      title:
        "Une nouvelle manière de réfléchir et de communiquer",

      description:
        "Le déplacement de Mercure modifie progressivement le climat des échanges, des décisions et de l’organisation mentale. Certaines conversations peuvent devenir plus directes ou plus constructives.",

      impact:
        "Cette influence peut vous aider à clarifier une idée, à reprendre une démarche ou à formuler plus précisément ce que vous souhaitez obtenir.",

      advice:
        "Utilisez cette période pour poser les bonnes questions et mettre par écrit les décisions importantes.",
    },

    {
      id:
        "astro-event-retrograde",

      date:
        "14 du mois",

      symbol:
        "♄",

      event:
        "Une planète ralentit",

      tone:
        "retrograde",

      category:
        "Révision",

      title:
        "Une période de recul utile avant la prochaine étape",

      description:
        "Un mouvement rétrograde symbolique invite à ralentir et à revoir ce qui a été construit récemment. Il peut faire ressortir une responsabilité, une erreur ou une décision qui demande un ajustement.",

      impact:
        "Vous pourriez ressentir le besoin de reprendre un dossier, de corriger une stratégie ou de réfléchir davantage avant de poursuivre dans la même direction.",

      advice:
        "Ne voyez pas les retards comme un échec. Utilisez-les pour renforcer ce qui doit l’être.",
    },

    {
      id:
        "astro-event-alignment",

      date:
        "21 du mois",

      symbol:
        "△",

      event:
        "Alignement harmonieux",

      tone:
        "alignment",

      category:
        "Opportunité",

      title:
        "Un climat plus favorable à la coopération et au progrès",

      description:
        "Un aspect harmonieux entre plusieurs influences peut faciliter les échanges, la créativité et la recherche de solutions. Ce climat favorise les initiatives qui reposent sur une vision claire.",

      impact:
        "Cette période peut soutenir une discussion importante, une démarche professionnelle ou une décision qui nécessite confiance et collaboration.",

      advice:
        "Avancez sur les projets qui demandent de la diplomatie, de la créativité ou l’appui d’une autre personne.",
    },

    {
      id:
        "astro-event-sun",

      date:
        "28 du mois",

      symbol:
        "☉",

      event:
        "Le Soleil change de signe",

      tone:
        "transition",

      category:
        "Transition",

      title:
        "Une nouvelle priorité commence à émerger",

      description:
        "Le changement de signe du Soleil marque une transition dans l’énergie générale du mois. Vos préoccupations peuvent progressivement se déplacer vers un nouveau domaine de vie.",

      impact:
        "Cette influence peut vous aider à tourner votre attention vers un objectif différent, à terminer une étape ou à préparer le mois suivant avec davantage de clarté.",

      advice:
        "Observez ce qui perd de son importance et ce qui commence naturellement à réclamer votre attention.",
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
        -78,

      right:
        -68,

      width:
        190,

      height:
        190,

      borderRadius:
        95,

      backgroundColor:
        "#E8DEEC",

      opacity:
        0.56,
    },

    bottomDecoration: {
      position:
        "absolute",

      bottom:
        -94,

      left:
        -80,

      width:
        210,

      height:
        210,

      borderRadius:
        105,

      backgroundColor:
        "#F0E2CC",

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

    eventsContainer: {
      marginTop:
        17,

      gap:
        11,
    },

    eventCard: {
      position:
        "relative",

      minHeight:
        116,

      paddingTop:
        15,

      paddingRight:
        16,

      paddingBottom:
        14,

      paddingLeft:
        108,

      border:
        "1 solid #E4DCE4",

      borderRadius:
        8,

      backgroundColor:
        "#FFFFFF",
    },

    eventAside: {
      position:
        "absolute",

      top:
        15,

      bottom:
        15,

      left:
        15,

      width:
        76,

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

    eventSymbol: {
      color:
        "#56365C",

      fontSize:
        27,

      fontWeight:
        700,

      lineHeight:
        1,
    },

    eventName: {
      marginTop:
        6,

      color:
        "#4A354E",

      fontSize:
        7.6,

      fontWeight:
        700,

      textAlign:
        "center",

      lineHeight:
        1.2,
    },

    eventDate: {
      marginTop:
        5,

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

    eventHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        5,
    },

    eventLabel: {
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
        6.7,

      fontWeight:
        700,

      letterSpacing:
        0.3,

      textTransform:
        "uppercase",
    },

    categoryMovement: {
      color:
        "#526A84",

      backgroundColor:
        "#E8EEF4",
    },

    categoryRetrograde: {
      color:
        "#7A5D3E",

      backgroundColor:
        "#F3EBDD",
    },

    categoryAlignment: {
      color:
        "#5E765B",

      backgroundColor:
        "#E9F0E7",
    },

    categoryTransition: {
      color:
        "#80546F",

      backgroundColor:
        "#F2E8EE",
    },

    eventTitle: {
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

    eventDescription: {
      color:
        "#625766",

      fontSize:
        8.3,

      lineHeight:
        1.47,
    },

    impactContainer: {
      marginTop:
        7,

      paddingTop:
        7,

      borderTop:
        "1 solid #EEE8EE",
    },

    impactTitle: {
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

    impactText: {
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

function getEventCategoryStyle(
  tone: AstroEventTone,
) {
  switch (tone) {
    case "movement":
      return styles.categoryMovement;

    case "retrograde":
      return styles.categoryRetrograde;

    case "alignment":
      return styles.categoryAlignment;

    case "transition":
      return styles.categoryTransition;

    default:
      return styles.categoryMovement;
  }
}

export default function HoroscopeMonthAstroEvents({
  identity,
  period,
}: HoroscopeMonthAstroEventsProps) {
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
        Les mouvements du ciel
      </Text>

      <Text style={styles.title}>
        Les événements astrologiques du mois
      </Text>

      <View style={styles.divider} />

      <Text style={styles.introduction}>
        Plusieurs mouvements astrologiques
        peuvent influencer le climat de{" "}
        {period.label} pour le signe{" "}
        {identity.zodiacSignLabel}.
        Ces événements indiquent les
        moments où l’énergie générale
        change, ralentit ou devient plus
        favorable à certaines initiatives.
      </Text>

      <View
        style={styles.explanationBox}
      >
        <Text
          style={styles.explanationText}
        >
          Les événements astrologiques
          décrivent des tendances
          collectives. Leur influence
          personnelle dépendra ensuite de
          leur interaction avec votre signe
          et avec les autres mouvements
          présents durant le mois.
        </Text>
      </View>

      <View
        style={styles.eventsContainer}
      >
        {TEMPORARY_ASTRO_EVENTS.map(
          (
            item,
          ) => (
            <View
              key={item.id}
              style={styles.eventCard}
              wrap={false}
            >
              <View
                style={styles.eventAside}
              >
                <Text
                  style={styles.eventSymbol}
                >
                  {item.symbol}
                </Text>

                <Text
                  style={styles.eventName}
                >
                  {item.event}
                </Text>

                <Text
                  style={styles.eventDate}
                >
                  {item.date}
                </Text>
              </View>

              <View
                style={styles.eventHeader}
              >
                <Text
                  style={styles.eventLabel}
                >
                  Événement astrologique
                </Text>

                <Text
                  style={[
                    styles.categoryBadge,
                    getEventCategoryStyle(
                      item.tone,
                    ),
                  ]}
                >
                  {item.category}
                </Text>
              </View>

              <Text
                style={styles.eventTitle}
              >
                {item.title}
              </Text>

              <Text
                style={
                  styles.eventDescription
                }
              >
                {item.description}
              </Text>

              <View
                style={
                  styles.impactContainer
                }
              >
                <Text
                  style={
                    styles.impactTitle
                  }
                >
                  Influence possible
                </Text>

                <Text
                  style={styles.impactText}
                >
                  {item.impact}
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
          Observer les transitions du mois
        </Text>

        <Text
          style={styles.closingText}
        >
          Certains mouvements vous
          encouragent à agir, tandis que
          d’autres vous invitent à réviser
          votre approche. En observant ces
          changements de rythme, vous
          pouvez choisir plus consciemment
          les périodes où avancer, ajuster
          ou prendre du recul.
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

