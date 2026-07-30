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
  YearlyHoroscopeResult,
} from "../buildYearlyHoroscope";

import type {
  YearlyAspect,
  YearlyAspectType,
  YearlyPlanetName,
} from "./annualPages/types";

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

type HoroscopeYearMajorAspectsProps =
  Pick<
    YearlyHoroscopeResult,
    | "identity"
    | "period"
  > & {
    aspects: YearlyAspect[];
  };

type AspectTone =
  | "harmonious"
  | "dynamic"
  | "transformative";

type DisplayYearlyAspect = {
  id: string;
  firstPlanet: YearlyPlanetName;
  secondPlanet: YearlyPlanetName;
  firstPlanetIcon: string;
  secondPlanetIcon: string;
  aspect: string;
  tone: AspectTone;
  title: string;
  description: string;
  advice: string;
};

/*
|--------------------------------------------------------------------------
| Correspondance des données astrologiques
|--------------------------------------------------------------------------
*/

function getPlanetIcon(
  planet: YearlyPlanetName,
): string {
  const iconKey =
    planet
      .toLowerCase()
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        "",
      );

  return (
    HOROSCOPE_ICONS[
      iconKey as keyof typeof HOROSCOPE_ICONS
    ] ??
    HOROSCOPE_ICONS.sun
  );
}

const ASPECT_TONES:
  Record<
    YearlyAspectType,
    AspectTone
  > = {
    conjunction:
      "transformative",

    sextile:
      "harmonious",

    square:
      "dynamic",

    trine:
      "harmonious",

    opposition:
      "dynamic",
  };

const ASPECT_TITLES:
  Record<
    YearlyAspectType,
    string
  > = {
    conjunction:
      "Deux forces se réunissent",

    sextile:
      "Une occasion à faire grandir",

    square:
      "Une tension qui demande un ajustement",

    trine:
      "Une énergie qui circule avec fluidité",

    opposition:
      "Deux besoins à rééquilibrer",
  };

const ASPECT_ADVICES:
  Record<
    YearlyAspectType,
    string
  > = {
    conjunction:
      "Concentrez cette énergie sur une priorité claire afin de lui donner une direction constructive.",

    sextile:
      "Restez attentif aux ouvertures du moment et transformez-les en gestes concrets.",

    square:
      "Évitez les réactions précipitées. Prenez le temps de comprendre la tension avant de choisir votre réponse.",

    trine:
      "Appuyez-vous sur cette facilité pour avancer, sans toutefois tenir les résultats pour acquis.",

    opposition:
      "Cherchez un point d’équilibre entre les deux besoins en présence plutôt que de favoriser un seul extrême.",
  };


const ASPECT_LABELS:
  Record<
    YearlyAspectType,
    string
  > = {
    conjunction:
      "Conjonction",

    sextile:
      "Sextile",

    square:
      "Carré",

    trine:
      "Trigone",

    opposition:
      "Opposition",
  };

const ASPECT_MEANINGS:
  Record<
    YearlyAspectType,
    string
  > = {
    conjunction:
      "La conjonction réunit deux énergies planétaires dans une même direction. Son influence peut être très concentrée et devenir particulièrement marquante.",

    sextile:
      "Le sextile crée une ouverture favorable. Il facilite les échanges entre les deux planètes, à condition de saisir consciemment l’occasion qu’il propose.",

    square:
      "Le carré révèle une tension entre deux forces qui ne progressent pas au même rythme. Il pousse à agir autrement et à corriger ce qui ne fonctionne plus.",

    trine:
      "Le trigone favorise une circulation naturelle entre les deux planètes. Les choses peuvent sembler plus simples, plus cohérentes ou plus faciles à mettre en mouvement.",

    opposition:
      "L’opposition place deux besoins face à face. Elle invite à sortir des positions extrêmes pour retrouver une manière plus équilibrée d’avancer.",
  };

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
        14,
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
        82,

      marginBottom:
        14,

      paddingVertical:
        13,

      paddingHorizontal:
        16,

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
        8,

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
        455,

      color:
        MUTED_CREAM,

      fontSize:
        8.6,

      lineHeight:
        1.52,
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

    cardsContainer: {
      marginBottom:
        12,
    },

    card: {
      position:
        "relative",

      flexDirection:
        "row",

      minHeight:
        125,

      marginBottom:
        10,

      paddingVertical:
        13,

      paddingHorizontal:
        14,

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
        -55,

      left:
        -60,

      width:
        145,

      height:
        145,

      borderRadius:
        73,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,
    },

    cardOrbitTwo: {
      position:
        "absolute",

      top:
        -22,

      left:
        -28,

      width:
        87,

      height:
        87,

      borderRadius:
        44,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,
    },

    planetsColumn: {
      width:
        88,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        13,
    },

    planetIconsRow: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "center",

      marginBottom:
        8,
    },

    planetCircle: {
      width:
        39,

      height:
        39,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        20,

      borderWidth:
        0.8,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    planetIcon: {
      width:
        25,

      height:
        25,

      objectFit:
        "contain",
    },

    planetConnector: {
      width:
        12,

      height:
        1,

      backgroundColor:
        DARK_GOLD,
    },

    planetsNames: {
      color:
        GOLD,

      fontSize:
        7.7,

      lineHeight:
        1.35,

      textAlign:
        "center",
    },

    cardContent: {
      flex:
        1,
    },

    cardHeader: {
      flexDirection:
        "row",

      alignItems:
        "flex-start",

      justifyContent:
        "space-between",

      marginBottom:
        5,
    },

    cardHeading: {
      flex:
        1,

      paddingRight:
        10,
    },

    cardLabel: {
      marginBottom:
        3,

      color:
        SOFT_TEXT,

      fontSize:
        6.4,

      letterSpacing:
        1,

      textTransform:
        "uppercase",
    },

    cardTitle: {
      color:
        CREAM,

      fontSize:
        11.2,

      lineHeight:
        1.3,
    },

    badge: {
      paddingVertical:
        4,

      paddingHorizontal:
        8,

      borderRadius:
        10,

      borderWidth:
        0.5,

      fontSize:
        6.3,

      letterSpacing:
        0.45,

      textTransform:
        "uppercase",
    },

    badgeHarmonious: {
      color:
        "#DCEFD8",

      borderColor:
        "#627C5E",

      backgroundColor:
        "#182C25",
    },

    badgeDynamic: {
      color:
        "#F2D3A8",

      borderColor:
        "#936B3E",

      backgroundColor:
        "#302318",
    },

    badgeTransformative: {
      color:
        "#E8D3ED",

      borderColor:
        "#765279",

      backgroundColor:
        "#291E30",
    },

    description: {
      marginBottom:
        7,

      color:
        MUTED_CREAM,

      fontSize:
        8.05,

      lineHeight:
        1.47,
    },

    adviceContainer: {
      paddingTop:
        7,

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
        6.5,

      letterSpacing:
        1,

      textTransform:
        "uppercase",
    },

    advice: {
      color:
        CREAM,

      fontSize:
        7.9,

      lineHeight:
        1.42,
    },

    summaryCard: {
      position:
        "relative",

      flexDirection:
        "row",

      alignItems:
        "center",

      minHeight:
        78,

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
        5,

      right:
        16,

      width:
        59,

      height:
        59,

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
        8.4,

      lineHeight:
        1.48,
    },
  });

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

function getBadgeStyle(
  tone:
    AspectTone,
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

function formatAspectDate(
  value:
    string,
): string {
  if (!value) {
    return "date à confirmer";
  }

  const date =
    new Date(
      value.includes("T")
        ? value
        : `${value}T12:00:00`,
    );

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return value;
  }

  return new Intl.DateTimeFormat(
    "fr-CA",
    {
      day:
        "numeric",

      month:
        "long",
    },
  ).format(date);
}

function formatOrb(
  orb:
    number,
): string {
  if (
    !Number.isFinite(
      orb,
    )
  ) {
    return "orbe non précisé";
  }

  return `orbe de ${orb.toFixed(
    2,
  )}°`;
}

function getApplyingLabel(
  applying:
    boolean | undefined,
): string {
  if (applying === true) {
    return "L’aspect se rapproche encore de son point le plus précis.";
  }

  if (applying === false) {
    return "L’aspect vient de dépasser son point le plus précis, mais son influence demeure active.";
  }

  return "L’aspect agit durant cette période sans indication supplémentaire sur sa progression.";
}

function buildAspectDescription(
  aspect:
    YearlyAspect,
): string {
  const interpretation =
    aspect.interpretation?.trim();

  const meaning =
    ASPECT_MEANINGS[
      aspect.type
    ];

  const exactDate =
    formatAspectDate(
      aspect.date,
    );

  const orb =
    formatOrb(
      aspect.orb,
    );

  return [
    interpretation ||
      meaning,

    `Son influence atteint son maximum autour du ${exactDate}, avec un ${orb}.`,

    getApplyingLabel(
      aspect.applying,
    ),
  ].join(" ");
}

function buildDisplayAspect(
  aspect:
    YearlyAspect,
): DisplayYearlyAspect {
  return {
    id:
      aspect.id,

    firstPlanet:
      aspect.planet1,

    secondPlanet:
      aspect.planet2,

    firstPlanetIcon:
      getPlanetIcon(
        aspect.planet1,
      ),

    secondPlanetIcon:
      getPlanetIcon(
        aspect.planet2,
      ),

    aspect:
      ASPECT_LABELS[
        aspect.type
      ],

    tone:
      ASPECT_TONES[
        aspect.type
      ],

    title:
      ASPECT_TITLES[
        aspect.type
      ],

    description:
      buildAspectDescription(
        aspect,
      ),

    advice:
      ASPECT_ADVICES[
        aspect.type
      ],
  };
}

function sortAspectsByImportance(
  aspects:
    YearlyAspect[],
): YearlyAspect[] {
  return [...aspects].sort(
    (
      first,
      second,
    ) => {
      const firstOrb =
        Number.isFinite(
          first.orb,
        )
          ? first.orb
          : Number.POSITIVE_INFINITY;

      const secondOrb =
        Number.isFinite(
          second.orb,
        )
          ? second.orb
          : Number.POSITIVE_INFINITY;

      if (
        firstOrb !==
        secondOrb
      ) {
        return (
          firstOrb -
          secondOrb
        );
      }

      return first.date.localeCompare(
        second.date,
      );
    },
  );
}

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeYearMajorAspects({
  identity,
  period,
  aspects,
}: HoroscopeYearMajorAspectsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(
      period,
    );

  const displayedAspects =
    sortAspectsByImportance(
      Array.isArray(
        aspects,
      )
        ? aspects
        : [],
    )
      .slice(
        0,
        3,
      )
      .map(
        buildDisplayAspect,
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
            Les mouvements du ciel
          </Text>

          <Text style={styles.title}>
            Les grands aspects de votre mois
          </Text>

          <Text style={styles.period}>
            {periodLabel}
          </Text>

          <View style={styles.titleDecoration}>
            <View style={styles.titleLine} />

            <Image
              src={HOROSCOPE_ICONS.sun}
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
            Votre climat astrologique
          </Text>

          <Text style={styles.introduction}>
            Les aspects astrologiques décrivent
            la manière dont les planètes
            interagissent entre elles. Pour le
            signe{" "}
            {identity.zodiacSignLabel}, ils
            révèlent les dynamiques les plus
            importantes de{" "}
            {periodLabel}. Certains soutiennent
            votre progression, tandis que
            d’autres mettent en lumière un
            ajustement, une décision ou un nouvel
            équilibre à trouver.
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Aspects de l’année
        |--------------------------------------------------------------------------
        */}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.jupiter}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Les trois influences les plus marquantes
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {displayedAspects.map(
            (
              item,
            ) => (
              <View
                key={item.id}
                style={styles.card}
                wrap={false}
              >
                <View
                  style={styles.cardOrbitOne}
                />

                <View
                  style={styles.cardOrbitTwo}
                />

                <View
                  style={styles.planetsColumn}
                >
                  <View
                    style={
                      styles.planetIconsRow
                    }
                  >
                    <View
                      style={
                        styles.planetCircle
                      }
                    >
                      <Image
                        src={
                          item.firstPlanetIcon
                        }
                        style={
                          styles.planetIcon
                        }
                      />
                    </View>

                    <View
                      style={
                        styles.planetConnector
                      }
                    />

                    <View
                      style={
                        styles.planetCircle
                      }
                    >
                      <Image
                        src={
                          item.secondPlanetIcon
                        }
                        style={
                          styles.planetIcon
                        }
                      />
                    </View>
                  </View>

                  <Text
                    style={
                      styles.planetsNames
                    }
                  >
                    {item.firstPlanet}
                    {"\n"}
                    {item.secondPlanet}
                  </Text>
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View
                      style={styles.cardHeading}
                    >
                      <Text
                        style={styles.cardLabel}
                      >
                        Dynamique planétaire
                      </Text>

                      <Text
                        style={styles.cardTitle}
                      >
                        {item.title}
                      </Text>
                    </View>

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
                      Conseil
                    </Text>

                    <Text
                      style={styles.advice}
                    >
                      {item.advice}
                    </Text>
                  </View>
                </View>
              </View>
            ),
          )}
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Conclusion
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
              {displayedAspects.length > 0
                ? `Les aspects les plus précis de ${periodLabel} vous invitent à observer comment les différentes forces de l’année se complètent ou se confrontent. Appuyez-vous sur les ouvertures disponibles, tout en prenant le temps de comprendre les tensions avant d’y répondre.`
                : `Aucun aspect majeur n’a été retenu pour ${periodLabel}. Le climat astrologique de l’année demeure toutefois évolutif : observez les changements de rythme et adaptez vos décisions avec discernement.`}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
