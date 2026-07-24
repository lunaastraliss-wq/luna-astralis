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

type HoroscopeMonthMoonPhasesProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type MoonPhaseTone =
  | "beginning"
  | "growth"
  | "culmination"
  | "release";

type TemporaryMoonPhase = {
  id:
    string;

  order:
    number;

  name:
    string;

  period:
    string;

  tone:
    MoonPhaseTone;

  keyword:
    string;

  title:
    string;

  description:
    string;

  favorableFor:
    string;

  advice:
    string;

  icon:
    string;
};

/*
|--------------------------------------------------------------------------
| Données temporaires
|--------------------------------------------------------------------------
|
| Les périodes exactes seront remplacées par les véritables dates
| des phases lunaires lorsque le moteur astrologique sera branché.
|
*/

const TEMPORARY_MOON_PHASES:
  TemporaryMoonPhase[] = [
    {
      id:
        "new-moon",

      order:
        1,

      name:
        "Nouvelle Lune",

      period:
        "Début du cycle lunaire",

      tone:
        "beginning",

      keyword:
        "Nouveau départ",

      title:
        "Définir une intention claire",

      description:
        "La Nouvelle Lune ouvre un nouveau cycle. Elle favorise l’introspection, les décisions intérieures et les intentions que vous souhaitez faire grandir au cours des semaines suivantes.",

      favorableFor:
        "Commencer un projet, clarifier une priorité, définir une nouvelle direction ou modifier une habitude.",

      advice:
        "Choisissez une intention simple et réaliste plutôt que de multiplier les objectifs.",

      icon:
        HOROSCOPE_ICONS.moon,
    },

    {
      id:
        "first-quarter",

      order:
        2,

      name:
        "Premier quartier",

      period:
        "Phase de progression",

      tone:
        "growth",

      keyword:
        "Mise en action",

      title:
        "Transformer vos intentions en actions",

      description:
        "Le premier quartier vous encourage à agir. Les premières résistances peuvent apparaître, mais elles servent à tester votre motivation et à préciser la manière dont vous souhaitez avancer.",

      favorableFor:
        "Prendre une décision, organiser vos démarches, défendre une idée ou relancer un projet qui stagnait.",

      advice:
        "Ne confondez pas un obstacle temporaire avec un signal vous demandant d’abandonner.",

      icon:
        HOROSCOPE_ICONS.mars,
    },

    {
      id:
        "full-moon",

      order:
        3,

      name:
        "Pleine Lune",

      period:
        "Sommet du cycle lunaire",

      tone:
        "culmination",

      keyword:
        "Révélation",

      title:
        "Voir plus clairement ce qui arrive à maturité",

      description:
        "La Pleine Lune intensifie les émotions et met en lumière les résultats d’une situation amorcée auparavant. Elle peut apporter une compréhension, une réponse ou une prise de conscience importante.",

      favorableFor:
        "Observer les résultats obtenus, reconnaître une vérité, célébrer une progression ou prendre une décision éclairée.",

      advice:
        "Accueillez vos émotions sans prendre immédiatement une décision sous leur influence.",

      icon:
        HOROSCOPE_ICONS.sun,
    },

    {
      id:
        "last-quarter",

      order:
        4,

      name:
        "Dernier quartier",

      period:
        "Fin du cycle lunaire",

      tone:
        "release",

      keyword:
        "Libération",

      title:
        "Faire de la place avant le prochain cycle",

      description:
        "Le dernier quartier marque une période de tri, de réflexion et de détachement. Il vous aide à identifier ce que vous ne souhaitez plus transporter dans le prochain cycle.",

      favorableFor:
        "Terminer une démarche, modifier une stratégie, ranger, pardonner ou abandonner une habitude devenue inutile.",

      advice:
        "Libérez-vous de ce qui vous épuise sans chercher à tout résoudre dans la précipitation.",

      icon:
        HOROSCOPE_ICONS.saturn,
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
        75,

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
        4,

      right:
        16,

      width:
        66,

      height:
        66,

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

    phasesGrid: {
      flexDirection:
        "row",

      flexWrap:
        "wrap",

      justifyContent:
        "space-between",

      marginBottom:
        10,
    },

    phaseCard: {
      position:
        "relative",

      width:
        "48.8%",

      minHeight:
        205,

      marginBottom:
        10,

      paddingVertical:
        13,

      paddingHorizontal:
        13,

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

    orbitOne: {
      position:
        "absolute",

      top:
        -66,

      right:
        -67,

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

    orbitTwo: {
      position:
        "absolute",

      top:
        -31,

      right:
        -32,

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

    phaseHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        9,
    },

    phaseIdentity: {
      flexDirection:
        "row",

      alignItems:
        "center",

      flex:
        1,
    },

    phaseIconOuter: {
      width:
        45,

      height:
        45,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        9,

      borderRadius:
        23,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,
    },

    phaseIconInner: {
      width:
        37,

      height:
        37,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        19,

      borderWidth:
        0.8,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    phaseIcon: {
      width:
        24,

      height:
        24,

      objectFit:
        "contain",
    },

    phaseNameBlock: {
      flex:
        1,
    },

    phaseOrder: {
      marginBottom:
        3,

      color:
        SOFT_TEXT,

      fontSize:
        5.8,

      letterSpacing:
        0.9,

      textTransform:
        "uppercase",
    },

    phaseName: {
      marginBottom:
        3,

      color:
        CREAM,

      fontSize:
        9.4,

      lineHeight:
        1.2,
    },

    phasePeriod: {
      color:
        MUTED_CREAM,

      fontSize:
        6.4,
    },

    keywordBadge: {
      paddingVertical:
        4,

      paddingHorizontal:
        7,

      borderRadius:
        10,

      borderWidth:
        0.5,

      fontSize:
        6,

      letterSpacing:
        0.35,

      textTransform:
        "uppercase",
    },

    badgeBeginning: {
      color:
        "#E2D8F1",

      borderColor:
        "#6D5C82",

      backgroundColor:
        "#251F31",
    },

    badgeGrowth: {
      color:
        "#DCEFD8",

      borderColor:
        "#627C5E",

      backgroundColor:
        "#182C25",
    },

    badgeCulmination: {
      color:
        "#F7E6AB",

      borderColor:
        "#8C753E",

      backgroundColor:
        "#30291A",
    },

    badgeRelease: {
      color:
        "#D7DFED",

      borderColor:
        "#596B82",

      backgroundColor:
        "#1B2735",
    },

    phaseTitle: {
      minHeight:
        29,

      marginBottom:
        6,

      color:
        GOLD,

      fontSize:
        10.2,

      lineHeight:
        1.3,
    },

    phaseDescription: {
      marginBottom:
        7,

      color:
        MUTED_CREAM,

      fontSize:
        7.55,

      lineHeight:
        1.42,
    },

    favorableBox: {
      marginBottom:
        7,

      paddingTop:
        6,

      borderTopWidth:
        0.5,

      borderTopColor:
        DEEP_GOLD,
    },

    favorableLabel: {
      marginBottom:
        3,

      color:
        SOFT_TEXT,

      fontSize:
        6,

      letterSpacing:
        0.8,

      textTransform:
        "uppercase",
    },

    favorableText: {
      color:
        MUTED_CREAM,

      fontSize:
        7.25,

      lineHeight:
        1.38,
    },

    adviceBox: {
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
        6,

      letterSpacing:
        0.8,

      textTransform:
        "uppercase",
    },

    adviceText: {
      color:
        CREAM,

      fontSize:
        7.25,

      lineHeight:
        1.38,
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

function getKeywordStyle(
  tone:
    MoonPhaseTone,
) {
  switch (tone) {
    case "beginning":
      return styles.badgeBeginning;

    case "growth":
      return styles.badgeGrowth;

    case "culmination":
      return styles.badgeCulmination;

    case "release":
      return styles.badgeRelease;

    default:
      return styles.badgeBeginning;
  }
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthMoonPhases({
  identity,
  period,
}: HoroscopeMonthMoonPhasesProps) {
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
            Votre rythme émotionnel
          </Text>

          <Text style={styles.title}>
            Les phases de la Lune
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.moon}
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
            src={HOROSCOPE_ICONS.moon}
            style={
              styles.introductionWatermark
            }
          />

          <Text
            style={styles.introductionLabel}
          >
            Le cycle lunaire
          </Text>

          <Text style={styles.introduction}>
            La Lune accompagne les mouvements
            émotionnels, les besoins intérieurs
            et les différentes étapes de vos
            projets. Durant{" "}
            {periodLabel}, chaque phase apporte
            au signe{" "}
            {identity.zodiacSignLabel} un rythme
            particulier : commencer, agir,
            comprendre puis libérer.
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Phases
        |--------------------------------------------------------------------------
        */}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.moon}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Les quatre temps du cycle
          </Text>
        </View>

        <View style={styles.phasesGrid}>
          {TEMPORARY_MOON_PHASES.map(
            (
              phase,
            ) => (
              <View
                key={phase.id}
                style={styles.phaseCard}
                wrap={false}
              >
                <View style={styles.orbitOne} />
                <View style={styles.orbitTwo} />

                <View style={styles.phaseHeader}>
                  <View
                    style={styles.phaseIdentity}
                  >
                    <View
                      style={
                        styles.phaseIconOuter
                      }
                    >
                      <View
                        style={
                          styles.phaseIconInner
                        }
                      >
                        <Image
                          src={phase.icon}
                          style={
                            styles.phaseIcon
                          }
                        />
                      </View>
                    </View>

                    <View
                      style={
                        styles.phaseNameBlock
                      }
                    >
                      <Text
                        style={
                          styles.phaseOrder
                        }
                      >
                        Phase {phase.order}
                      </Text>

                      <Text
                        style={
                          styles.phaseName
                        }
                      >
                        {phase.name}
                      </Text>

                      <Text
                        style={
                          styles.phasePeriod
                        }
                      >
                        {phase.period}
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={[
                      styles.keywordBadge,
                      getKeywordStyle(
                        phase.tone,
                      ),
                    ]}
                  >
                    {phase.keyword}
                  </Text>
                </View>

                <Text
                  style={styles.phaseTitle}
                >
                  {phase.title}
                </Text>

                <Text
                  style={
                    styles.phaseDescription
                  }
                >
                  {phase.description}
                </Text>

                <View
                  style={styles.favorableBox}
                >
                  <Text
                    style={
                      styles.favorableLabel
                    }
                  >
                    Période favorable pour
                  </Text>

                  <Text
                    style={
                      styles.favorableText
                    }
                  >
                    {phase.favorableFor}
                  </Text>
                </View>

                <View style={styles.adviceBox}>
                  <Text
                    style={
                      styles.adviceLabel
                    }
                  >
                    Conseil
                  </Text>

                  <Text
                    style={
                      styles.adviceText
                    }
                  >
                    {phase.advice}
                  </Text>
                </View>
              </View>
            ),
          )}
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Synthèse
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
              Votre rythme du mois
            </Text>

            <Text
              style={styles.summaryText}
            >
              Respectez les différentes étapes
              du cycle lunaire. Tout ne doit
              pas commencer, progresser ou se
              terminer au même moment. En
              adaptant vos actions au rythme
              du mois, vous pourrez mieux
              reconnaître quand avancer et
              quand prendre du recul.
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
