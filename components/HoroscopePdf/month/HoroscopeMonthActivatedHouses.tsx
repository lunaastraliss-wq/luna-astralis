import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

type HoroscopeMonthActivatedHousesProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type ActivatedHouseTone =
  | "identity"
  | "relationships"
  | "career";

type TemporaryActivatedHouse = {
  id: string;
  rank: number;
  house: number;
  tone: ActivatedHouseTone;
  area: string;
  title: string;
  description: string;
  manifestations: string[];
  advice: string;
};

const TEMPORARY_ACTIVATED_HOUSES:
  TemporaryActivatedHouse[] = [
    {
      id:
        "activated-house-1",

      rank:
        1,

      house:
        1,

      tone:
        "identity",

      area:
        "Identité et initiatives",

      title:
        "La Maison I met votre évolution personnelle au premier plan",

      description:
        "Cette maison représente votre manière d’avancer, votre image, votre confiance et les nouveaux départs. Son activation indique un mois où vos décisions personnelles peuvent avoir davantage d’importance.",

      manifestations: [
        "Un désir de reprendre votre place ou d’affirmer vos priorités.",
        "Une envie de modifier votre manière de vous présenter.",
        "Le besoin de commencer quelque chose qui vous ressemble davantage.",
      ],

      advice:
        "Choisissez des initiatives qui correspondent réellement à la personne que vous souhaitez devenir.",
    },

    {
      id:
        "activated-house-7",

      rank:
        2,

      house:
        7,

      tone:
        "relationships",

      area:
        "Relations et engagements",

      title:
        "La Maison VII attire votre attention sur vos relations importantes",

      description:
        "Cette maison concerne les relations de couple, les associations, les engagements et les rapports d’équilibre. Son activation peut rendre certaines interactions plus révélatrices.",

      manifestations: [
        "Une conversation importante dans une relation proche.",
        "Un besoin de rééquilibrer les efforts et les responsabilités.",
        "Une décision concernant un engagement ou une collaboration.",
      ],

      advice:
        "Recherchez la réciprocité sans oublier vos propres besoins et vos limites.",
    },

    {
      id:
        "activated-house-10",

      rank:
        3,

      house:
        10,

      tone:
        "career",

      area:
        "Carrière et accomplissement",

      title:
        "La Maison X renforce vos ambitions et votre visibilité",

      description:
        "Cette maison représente votre carrière, votre réputation, vos objectifs et la direction que vous souhaitez donner à votre vie professionnelle. Son activation peut mettre en lumière une responsabilité ou une occasion de progresser.",

      manifestations: [
        "Une attention plus grande portée à vos objectifs professionnels.",
        "Une occasion de démontrer votre sérieux ou votre expertise.",
        "Le besoin de clarifier la prochaine étape de votre parcours.",
      ],

      advice:
        "Concentrez votre énergie sur les projets capables de renforcer durablement votre position.",
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
        -67,

      width:
        188,

      height:
        188,

      borderRadius:
        94,

      backgroundColor:
        "#E9DFEC",

      opacity:
        0.55,
    },

    bottomDecoration: {
      position:
        "absolute",

      bottom:
        -92,

      left:
        -79,

      width:
        206,

      height:
        206,

      borderRadius:
        103,

      backgroundColor:
        "#F0E3CD",

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
        94,

      border:
        "1 solid #E4DCE4",

      borderRadius:
        8,

      backgroundColor:
        "#FFFFFF",
    },

    houseBlock: {
      position:
        "absolute",

      top:
        16,

      left:
        16,

      width:
        60,

      alignItems:
        "center",
    },

    rankCircle: {
      width:
        19,

      height:
        19,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginBottom:
        7,

      borderRadius:
        10,

      backgroundColor:
        "#EDE3EF",
    },

    rankText: {
      color:
        "#67446D",

      fontSize:
        7,

      fontWeight:
        700,
    },

    houseCircle: {
      width:
        46,

      height:
        46,

      alignItems:
        "center",

      justifyContent:
        "center",

      border:
        "1.5 solid #765279",

      borderRadius:
        23,

      backgroundColor:
        "#F7F1F7",
    },

    houseLabel: {
      marginBottom:
        2,

      color:
        "#8D778F",

      fontSize:
        5.8,

      fontWeight:
        700,

      letterSpacing:
        0.4,

      textTransform:
        "uppercase",
    },

    houseNumber: {
      color:
        "#56365C",

      fontSize:
        18,

      fontWeight:
        700,

      lineHeight:
        1,
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

    activatedLabel: {
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

    areaBadge: {
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

    areaIdentity: {
      color:
        "#725B35",

      backgroundColor:
        "#F3ECD9",
    },

    areaRelationships: {
      color:
        "#875267",

      backgroundColor:
        "#F5E8ED",
    },

    areaCareer: {
      color:
        "#526986",

      backgroundColor:
        "#E9EEF5",
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
        8.35,

      lineHeight:
        1.48,
    },

    manifestationsContainer: {
      marginTop:
        8,

      paddingTop:
        7,

      borderTop:
        "1 solid #EEE8EE",
    },

    manifestationsTitle: {
      marginBottom:
        4,

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

    manifestationRow: {
      flexDirection:
        "row",

      marginBottom:
        3,
    },

    manifestationBullet: {
      width:
        11,

      color:
        "#A17638",

      fontSize:
        8,

      fontWeight:
        700,
    },

    manifestationText: {
      flex:
        1,

      color:
        "#514756",

      fontSize:
        7.9,

      lineHeight:
        1.4,
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

function getAreaStyle(
  tone: ActivatedHouseTone,
) {
  switch (tone) {
    case "identity":
      return styles.areaIdentity;

    case "relationships":
      return styles.areaRelationships;

    case "career":
      return styles.areaCareer;

    default:
      return styles.areaIdentity;
  }
}

export default function HoroscopeMonthActivatedHouses({
  identity,
  period,
}: HoroscopeMonthActivatedHousesProps) {
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
        Les domaines mis en lumière
      </Text>

      <Text style={styles.title}>
        Les maisons astrologiques activées
      </Text>

      <View style={styles.divider} />

      <Text style={styles.introduction}>
        Pour le signe{" "}
        {identity.zodiacSignLabel},
        certaines maisons astrologiques
        prennent davantage d’importance
        durant{" "}
        {period.label}. Elles indiquent
        les domaines de vie qui pourraient
        recevoir plus d’attention,
        d’énergie ou de mouvement.
      </Text>

      <View
        style={styles.explanationBox}
      >
        <Text
          style={styles.explanationText}
        >
          Les maisons astrologiques
          représentent les grandes sphères
          de votre existence. Leur
          activation peut annoncer une
          période de décisions, de prises
          de conscience ou d’évolution
          dans les domaines concernés.
        </Text>
      </View>

      <View
        style={styles.cardsContainer}
      >
        {TEMPORARY_ACTIVATED_HOUSES.map(
          (
            item,
          ) => (
            <View
              key={item.id}
              style={styles.card}
              wrap={false}
            >
              <View
                style={styles.houseBlock}
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
                  style={styles.houseCircle}
                >
                  <Text
                    style={styles.houseLabel}
                  >
                    Maison
                  </Text>

                  <Text
                    style={styles.houseNumber}
                  >
                    {item.house}
                  </Text>
                </View>
              </View>

              <View
                style={styles.cardHeader}
              >
                <Text
                  style={
                    styles.activatedLabel
                  }
                >
                  Maison dominante
                </Text>

                <Text
                  style={[
                    styles.areaBadge,
                    getAreaStyle(
                      item.tone,
                    ),
                  ]}
                >
                  {item.area}
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
                  styles.manifestationsContainer
                }
              >
                <Text
                  style={
                    styles.manifestationsTitle
                  }
                >
                  Comment cela peut se manifester
                </Text>

                {item.manifestations.map(
                  (
                    manifestation,
                    index,
                  ) => (
                    <View
                      key={
                        `${item.id}-${index}`
                      }
                      style={
                        styles.manifestationRow
                      }
                    >
                      <Text
                        style={
                          styles.manifestationBullet
                        }
                      >
                        •
                      </Text>

                      <Text
                        style={
                          styles.manifestationText
                        }
                      >
                        {manifestation}
                      </Text>
                    </View>
                  ),
                )}
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
          Les priorités de votre mois
        </Text>

        <Text
          style={styles.closingText}
        >
          Votre évolution personnelle,
          vos relations et vos ambitions
          professionnelles constituent les
          trois grands axes de ce mois.
          Cherchez un équilibre entre ce
          que vous souhaitez pour vous-même,
          ce que vous construisez avec les
          autres et la direction que vous
          voulez donner à votre avenir.
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
