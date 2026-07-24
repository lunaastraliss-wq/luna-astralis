import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "../buildMonthlyHoroscope";

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
  symbol: string;
  planet: string;
  sign: string;
  tone: DominantPlanetTone;
  theme: string;
  title: string;
  description: string;
  influence: string;
  advice: string;
};

const TEMPORARY_DOMINANT_PLANETS:
  TemporaryDominantPlanet[] = [
    {
      id:
        "dominant-jupiter",

      rank:
        1,

      symbol:
        "♃",

      planet:
        "Jupiter",

      sign:
        "En influence principale",

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

      symbol:
        "♀",

      planet:
        "Vénus",

      sign:
        "En influence secondaire",

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

      symbol:
        "♂",

      planet:
        "Mars",

      sign:
        "En influence dynamique",

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
        -65,

      width:
        185,

      height:
        185,

      borderRadius:
        93,

      backgroundColor:
        "#E9DFED",

      opacity:
        0.55,
    },

    bottomDecoration: {
      position:
        "absolute",

      bottom:
        -94,

      left:
        -82,

      width:
        210,

      height:
        210,

      borderRadius:
        105,

      backgroundColor:
        "#F1E3CA",

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
        415,

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

    highlightBox: {
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
        "3 solid #7B587E",

      backgroundColor:
        "#F1EAF2",
    },

    highlightText: {
      color:
        "#5C4B5F",

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
        92,

      border:
        "1 solid #E4DCE4",

      borderRadius:
        8,

      backgroundColor:
        "#FFFFFF",
    },

    planetBlock: {
      position:
        "absolute",

      top:
        16,

      left:
        16,

      width:
        58,

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

    planetSymbol: {
      color:
        "#5A3860",

      fontSize:
        29,

      fontWeight:
        700,

      lineHeight:
        1,
    },

    planetName: {
      marginTop:
        5,

      color:
        "#4A354E",

      fontSize:
        8,

      fontWeight:
        700,

      textAlign:
        "center",
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

    influenceLabel: {
      color:
        "#8E7E91",

      fontSize:
        6.8,

      fontWeight:
        700,

      letterSpacing:
        0.4,

      textTransform:
        "uppercase",
    },

    themeBadge: {
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

    themeExpansion: {
      color:
        "#796331",

      backgroundColor:
        "#F3ECD9",
    },

    themeRelationships: {
      color:
        "#875267",

      backgroundColor:
        "#F5E8ED",
    },

    themeAction: {
      color:
        "#8B573D",

      backgroundColor:
        "#F6E8DF",
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

    influenceContainer: {
      marginTop:
        8,

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
        8,

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

function getThemeStyle(
  tone: DominantPlanetTone,
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

export default function HoroscopeMonthDominantPlanets({
  identity,
  period,
}: HoroscopeMonthDominantPlanetsProps) {
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
        Les forces dominantes
      </Text>

      <Text style={styles.title}>
        Les planètes dominantes de votre mois
      </Text>

      <View style={styles.divider} />

      <Text style={styles.introduction}>
        Parmi les différentes influences
        astrologiques de{" "}
        {period.label}, certaines planètes
        occupent une place plus importante
        pour le signe{" "}
        {identity.zodiacSignLabel}.
        Elles représentent les énergies
        que vous pourriez ressentir avec
        le plus d’intensité durant le mois.
      </Text>

      <View style={styles.highlightBox}>
        <Text style={styles.highlightText}>
          Une planète dominante ne décide
          pas de vos actions. Elle indique
          plutôt le type d’énergie qui
          pourrait revenir plus souvent
          dans vos expériences, vos
          décisions et vos relations.
        </Text>
      </View>

      <View
        style={styles.cardsContainer}
      >
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
                style={styles.planetBlock}
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

                <Text
                  style={
                    styles.planetSymbol
                  }
                >
                  {item.symbol}
                </Text>

                <Text
                  style={
                    styles.planetName
                  }
                >
                  {item.planet}
                </Text>
              </View>

              <View
                style={styles.cardHeader}
              >
                <Text
                  style={
                    styles.influenceLabel
                  }
                >
                  {item.sign}
                </Text>

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
          ),
        )}
      </View>

      <View style={styles.closingBox}>
        <Text
          style={styles.closingTitle}
        >
          Votre combinaison dominante
        </Text>

        <Text
          style={styles.closingText}
        >
          Ce mois combine une volonté
          d’expansion, un besoin d’harmonie
          relationnelle et une énergie
          d’action plus directe. Votre
          équilibre dépendra de votre
          capacité à avancer avec confiance
          sans négliger vos limites ni les
          besoins des personnes qui vous
          entourent.
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
