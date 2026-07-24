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

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const NAVY_SOFT = "#101F35";

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";

const DARK_GOLD = "#8F6E35";
const DEEP_GOLD = "#4E412D";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type HoroscopeMonthActivatedHousesProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  >;

type HouseTone =
  | "identity"
  | "relationships"
  | "career"
  | "transformation";

type TemporaryActivatedHouse = {
  id: string;
  number: number;
  name: string;
  icon: string;
  tone: HouseTone;
  category: string;
  title: string;
  description: string;
  manifestation: string;
  advice: string;
};

/*
|--------------------------------------------------------------------------
| Données temporaires
|--------------------------------------------------------------------------
|
| Ces maisons seront remplacées plus tard par les maisons réellement
| activées par les transits astrologiques du mois.
|
*/

const TEMPORARY_ACTIVATED_HOUSES:
  TemporaryActivatedHouse[] = [
    {
      id:
        "house-one",

      number:
        1,

      name:
        "Maison I",

      icon:
        HOROSCOPE_ICONS.sun,

      tone:
        "identity",

      category:
        "Identité",

      title:
        "Votre manière de vous affirmer évolue",

      description:
        "La première maison met en lumière votre identité, votre présence et la manière dont vous vous présentez au monde. Son activation vous encourage à prendre davantage conscience de votre pouvoir personnel.",

      manifestation:
        "Vous pourriez ressentir le besoin de modifier votre attitude, votre apparence ou votre façon de défendre vos choix.",

      advice:
        "Affirmez-vous avec confiance, tout en laissant de la place à l’écoute et à l’adaptation.",
    },

    {
      id:
        "house-seven",

      number:
        7,

      name:
        "Maison VII",

      icon:
        HOROSCOPE_ICONS.soulPath,

      tone:
        "relationships",

      category:
        "Relations",

      title:
        "Vos liens deviennent un miroir important",

      description:
        "La septième maison concerne les relations, les engagements et les partenariats. Son activation attire votre attention sur l’équilibre entre vos besoins personnels et ceux des autres.",

      manifestation:
        "Une relation pourrait demander une décision, une clarification ou une nouvelle manière de fonctionner ensemble.",

      advice:
        "Cherchez une véritable réciprocité plutôt que de maintenir une harmonie uniquement en apparence.",
    },

    {
      id:
        "house-ten",

      number:
        10,

      name:
        "Maison X",

      icon:
        HOROSCOPE_ICONS.lifePurpose,

      tone:
        "career",

      category:
        "Carrière",

      title:
        "Votre direction professionnelle prend de l’importance",

      description:
        "La dixième maison représente la carrière, les ambitions et l’image que vous souhaitez construire dans le monde. Son activation peut renforcer votre désir de progresser ou d’être reconnu.",

      manifestation:
        "Un projet professionnel, une responsabilité ou une décision concernant votre avenir pourrait prendre une place centrale.",

      advice:
        "Concentrez vos efforts sur les objectifs qui correspondent réellement à votre vision à long terme.",
    },

    {
      id:
        "house-eight",

      number:
        8,

      name:
        "Maison VIII",

      icon:
        HOROSCOPE_ICONS.integrationGuide,

      tone:
        "transformation",

      category:
        "Transformation",

      title:
        "Une période de libération intérieure",

      description:
        "La huitième maison est associée aux transformations profondes, aux ressources partagées et aux vérités émotionnelles. Son activation vous invite à regarder ce qui doit être compris ou laissé derrière vous.",

      manifestation:
        "Vous pourriez traverser une prise de conscience importante concernant une peur, un attachement ou une situation financière partagée.",

      advice:
        "Acceptez de transformer ce qui ne peut plus continuer sous sa forme actuelle.",
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
        74,

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

    housesGrid: {
      flexDirection:
        "row",

      flexWrap:
        "wrap",

      justifyContent:
        "space-between",

      marginBottom:
        10,
    },

    houseCard: {
      position:
        "relative",

      width:
        "48.8%",

      minHeight:
        204,

      marginBottom:
        10,

      paddingTop:
        13,

      paddingRight:
        13,

      paddingBottom:
        12,

      paddingLeft:
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

    cardOrbitOne: {
      position:
        "absolute",

      top:
        -67,

      right:
        -66,

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
        -32,

      right:
        -31,

      width:
        91,

      height:
        91,

      borderRadius:
        46,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,
    },

    houseHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        9,
    },

    houseIdentity: {
      flexDirection:
        "row",

      alignItems:
        "center",
    },

    houseNumberCircle: {
      width:
        40,

      height:
        40,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        9,

      borderRadius:
        20,

      borderWidth:
        0.8,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    houseNumber: {
      color:
        GOLD,

      fontSize:
        15,

      lineHeight:
        1,
    },

    houseNumberLabel: {
      marginTop:
        2,

      color:
        SOFT_TEXT,

      fontSize:
        5.2,

      textTransform:
        "uppercase",
    },

    houseNameBlock: {
      flex:
        1,
    },

    houseName: {
      marginBottom:
        3,

      color:
        CREAM,

      fontSize:
        9.2,
    },

    houseCategory: {
      color:
        GOLD,

      fontSize:
        6.2,

      letterSpacing:
        0.8,

      textTransform:
        "uppercase",
    },

    iconCircle: {
      width:
        33,

      height:
        33,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        17,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,

      backgroundColor:
        NAVY_SOFT,
    },

    houseIcon: {
      width:
        21,

      height:
        21,

      objectFit:
        "contain",
    },

    houseTitle: {
      minHeight:
        30,

      marginBottom:
        6,

      color:
        GOLD,

      fontSize:
        10.3,

      lineHeight:
        1.3,
    },

    houseDescription: {
      marginBottom:
        7,

      color:
        MUTED_CREAM,

      fontSize:
        7.7,

      lineHeight:
        1.43,
    },

    manifestationBox: {
      marginBottom:
        7,

      paddingTop:
        6,

      borderTopWidth:
        0.5,

      borderTopColor:
        DEEP_GOLD,
    },

    manifestationLabel: {
      marginBottom:
        3,

      color:
        SOFT_TEXT,

      fontSize:
        6.1,

      letterSpacing:
        0.8,

      textTransform:
        "uppercase",
    },

    manifestationText: {
      color:
        MUTED_CREAM,

      fontSize:
        7.35,

      lineHeight:
        1.4,
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
        6.1,

      letterSpacing:
        0.8,

      textTransform:
        "uppercase",
    },

    adviceText: {
      color:
        CREAM,

      fontSize:
        7.35,

      lineHeight:
        1.4,
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
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthActivatedHouses({
  identity,
  period,
}: HoroscopeMonthActivatedHousesProps) {
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
            Les secteurs de votre vie
          </Text>

          <Text style={styles.title}>
            Les maisons astrologiques activées
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.soulPath}
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
            src={HOROSCOPE_ICONS.soulPath}
            style={
              styles.introductionWatermark
            }
          />

          <Text
            style={styles.introductionLabel}
          >
            Votre carte du mois
          </Text>

          <Text style={styles.introduction}>
            Les maisons astrologiques
            représentent les différents
            secteurs de votre vie. Durant{" "}
            {periodLabel}, certaines maisons
            peuvent recevoir davantage
            d’attention et révéler les
            domaines dans lesquels le signe{" "}
            {identity.zodiacSignLabel} sera
            invité à agir, comprendre ou
            évoluer.
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Maisons activées
        |--------------------------------------------------------------------------
        */}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.sun}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Vos secteurs prioritaires
          </Text>
        </View>

        <View style={styles.housesGrid}>
          {TEMPORARY_ACTIVATED_HOUSES.map(
            (
              house,
            ) => (
              <View
                key={house.id}
                style={styles.houseCard}
                wrap={false}
              >
                <View
                  style={styles.cardOrbitOne}
                />

                <View
                  style={styles.cardOrbitTwo}
                />

                <View style={styles.houseHeader}>
                  <View
                    style={styles.houseIdentity}
                  >
                    <View
                      style={
                        styles.houseNumberCircle
                      }
                    >
                      <Text
                        style={
                          styles.houseNumber
                        }
                      >
                        {house.number}
                      </Text>

                      <Text
                        style={
                          styles.houseNumberLabel
                        }
                      >
                        maison
                      </Text>
                    </View>

                    <View
                      style={
                        styles.houseNameBlock
                      }
                    >
                      <Text
                        style={
                          styles.houseName
                        }
                      >
                        {house.name}
                      </Text>

                      <Text
                        style={
                          styles.houseCategory
                        }
                      >
                        {house.category}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={styles.iconCircle}
                  >
                    <Image
                      src={house.icon}
                      style={styles.houseIcon}
                    />
                  </View>
                </View>

                <Text style={styles.houseTitle}>
                  {house.title}
                </Text>

                <Text
                  style={
                    styles.houseDescription
                  }
                >
                  {house.description}
                </Text>

                <View
                  style={
                    styles.manifestationBox
                  }
                >
                  <Text
                    style={
                      styles.manifestationLabel
                    }
                  >
                    Manifestation possible
                  </Text>

                  <Text
                    style={
                      styles.manifestationText
                    }
                  >
                    {house.manifestation}
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
                    style={styles.adviceText}
                  >
                    {house.advice}
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
              Votre ligne directrice
            </Text>

            <Text
              style={styles.summaryText}
            >
              Votre mois met en relation
              l’affirmation personnelle, les
              relations, les ambitions et la
              transformation intérieure.
              Chaque changement vécu dans un
              secteur pourrait influencer les
              autres et vous aider à créer un
              équilibre plus solide.
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
