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

import type {
  MonthlyAstrologyResult,
} from "./calculations/types";

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
  > & {
    moonPhases:
      MonthlyAstrologyResult[
        "moonPhases"
      ];
  };

type MoonPhaseTone =
  | "beginning"
  | "growth"
  | "culmination"
  | "release";

type DisplayMoonPhase = {
  id: string;
  order: number;
  name: string;
  period: string;
  tone: MoonPhaseTone;
  keyword: string;
  title: string;
  description: string;
  favorableFor: string;
  advice: string;
  icon: string;
};

/*
|--------------------------------------------------------------------------
| Adaptation des vraies phases lunaires
|--------------------------------------------------------------------------
*/

type MoonPhaseRecord =
  Record<
    string,
    unknown
  >;

function readString(
  source:
    MoonPhaseRecord,
  keys:
    string[],
): string {
  for (
    const key of keys
  ) {
    const value =
      source[key];

    if (
      typeof value ===
        "string" &&
      value.trim()
    ) {
      return value.trim();
    }
  }

  return "";
}

function normalizePhaseName(
  value:
    string,
): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    );
}

function getPhaseTone(
  phaseName:
    string,
): MoonPhaseTone {
  const normalized =
    normalizePhaseName(
      phaseName,
    );

  if (
    normalized.includes(
      "nouvelle",
    ) ||
    normalized.includes(
      "new moon",
    )
  ) {
    return "beginning";
  }

  if (
    normalized.includes(
      "premier quartier",
    ) ||
    normalized.includes(
      "first quarter",
    ) ||
    normalized.includes(
      "croissant",
    )
  ) {
    return "growth";
  }

  if (
    normalized.includes(
      "pleine",
    ) ||
    normalized.includes(
      "full moon",
    )
  ) {
    return "culmination";
  }

  return "release";
}

function getPhaseIcon(
  tone:
    MoonPhaseTone,
): string {
  switch (tone) {
    case "beginning":
      return HOROSCOPE_ICONS.moon;

    case "growth":
      return HOROSCOPE_ICONS.mars;

    case "culmination":
      return HOROSCOPE_ICONS.sun;

    case "release":
      return HOROSCOPE_ICONS.saturn;

    default:
      return HOROSCOPE_ICONS.moon;
  }
}

function getPhaseKeyword(
  tone:
    MoonPhaseTone,
): string {
  switch (tone) {
    case "beginning":
      return "Nouveau départ";

    case "growth":
      return "Mise en action";

    case "culmination":
      return "Révélation";

    case "release":
      return "Libération";

    default:
      return "Évolution";
  }
}

function getDefaultPhaseTitle(
  tone:
    MoonPhaseTone,
): string {
  switch (tone) {
    case "beginning":
      return "Définir une intention claire";

    case "growth":
      return "Transformer vos intentions en actions";

    case "culmination":
      return "Observer ce qui arrive à maturité";

    case "release":
      return "Faire de la place avant le prochain cycle";

    default:
      return "Suivre le mouvement du cycle lunaire";
  }
}

function getDefaultFavorableText(
  tone:
    MoonPhaseTone,
): string {
  switch (tone) {
    case "beginning":
      return "Commencer, clarifier une priorité et définir une nouvelle direction.";

    case "growth":
      return "Agir, organiser vos démarches et relancer ce qui demande du mouvement.";

    case "culmination":
      return "Observer les résultats, reconnaître une vérité et prendre du recul.";

    case "release":
      return "Terminer, trier, pardonner et abandonner ce qui est devenu inutile.";

    default:
      return "Adapter vos actions au rythme émotionnel du moment.";
  }
}

function getDefaultAdvice(
  tone:
    MoonPhaseTone,
): string {
  switch (tone) {
    case "beginning":
      return "Choisissez une intention simple, précise et réaliste.";

    case "growth":
      return "Avancez malgré les résistances, sans confondre obstacle et échec.";

    case "culmination":
      return "Accueillez vos émotions avant de prendre une décision importante.";

    case "release":
      return "Libérez-vous de ce qui vous épuise sans agir dans la précipitation.";

    default:
      return "Respectez votre rythme intérieur avant de forcer une évolution.";
  }
}

function formatMoonPhaseDate(
  value:
    string,
): string {
  if (!value) {
    return "";
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

function buildDisplayMoonPhase(
  phase:
    MonthlyAstrologyResult[
      "moonPhases"
    ][number],
  index:
    number,
): DisplayMoonPhase {
  const source =
    phase as unknown as
      MoonPhaseRecord;

  const name =
    readString(
      source,
      [
        "name",
        "phase",
        "phaseName",
        "label",
        "type",
      ],
    ) ||
    `Phase lunaire ${index + 1}`;

  const tone =
    getPhaseTone(
      name,
    );

  const rawDate =
    readString(
      source,
      [
        "date",
        "isoDate",
        "exactDate",
        "occursOn",
      ],
    );

  const zodiacSign =
    readString(
      source,
      [
        "zodiacSignLabel",
        "zodiacSign",
        "signLabel",
        "sign",
      ],
    );

  const formattedDate =
    formatMoonPhaseDate(
      rawDate,
    );

  const periodParts =
    [
      formattedDate,
      zodiacSign
        ? `en ${zodiacSign}`
        : "",
    ].filter(Boolean);

  const title =
    readString(
      source,
      [
        "title",
        "headline",
      ],
    ) ||
    getDefaultPhaseTitle(
      tone,
    );

  const description =
    readString(
      source,
      [
        "interpretation",
        "description",
        "meaning",
        "text",
      ],
    ) ||
    "Cette phase lunaire marque une étape importante du cycle émotionnel et vous invite à adapter vos actions à l’énergie du moment.";

  const favorableFor =
    readString(
      source,
      [
        "favorableFor",
        "bestFor",
        "opportunities",
        "focus",
      ],
    ) ||
    getDefaultFavorableText(
      tone,
    );

  const advice =
    readString(
      source,
      [
        "advice",
        "guidance",
        "recommendation",
        "tip",
      ],
    ) ||
    getDefaultAdvice(
      tone,
    );

  return {
    id:
      readString(
        source,
        [
          "id",
          "key",
        ],
      ) ||
      `moon-phase-${index + 1}`,

    order:
      index + 1,

    name,

    period:
      periodParts.join(" • ") ||
      "Moment clé du cycle lunaire",

    tone,

    keyword:
      readString(
        source,
        [
          "keyword",
          "theme",
        ],
      ) ||
      getPhaseKeyword(
        tone,
      ),

    title,

    description,

    favorableFor,

    advice,

    icon:
      getPhaseIcon(
        tone,
      ),
  };
}

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
  moonPhases,
}: HoroscopeMonthMoonPhasesProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const periodLabel =
    formatHoroscopePeriodLabel(
      period,
    );

  const displayedPhases =
    (
      Array.isArray(
        moonPhases,
      )
        ? moonPhases
        : []
    )
      .slice(0, 4)
      .map(
        buildDisplayMoonPhase,
      );

  const phaseDates =
    displayedPhases
      .map(
        (phase) =>
          `${phase.name} (${phase.period})`,
      )
      .join(", ");

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
          {displayedPhases.map(
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
              {phaseDates
                ? `Les principaux repères lunaires de ${periodLabel} sont ${phaseDates}. Utilisez ces dates pour distinguer les moments propices aux commencements, à l’action, aux prises de conscience et au détachement.`
                : `Les phases lunaires de ${periodLabel} vous invitent à respecter une progression naturelle : commencer, agir, comprendre puis libérer. Tout ne doit pas évoluer au même moment.`}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
