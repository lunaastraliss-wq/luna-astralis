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

const NAVY_DEEP =
  "#040B15";

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

type HoroscopeMonthAstroEventsProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
  > & {
    astroEvents:
      MonthlyAstrologyResult[
        "astroEvents"
      ];
  };

type AstroEventTone =
  | "movement"
  | "retrograde"
  | "alignment"
  | "transition";

type DisplayAstroEvent = {
  id: string;
  date: string;
  event: string;
  tone: AstroEventTone;
  category: string;
  title: string;
  description: string;
  impact: string;
  advice: string;
  icon: string;
};

/*
|--------------------------------------------------------------------------
| Adaptation des événements astrologiques calculés
|--------------------------------------------------------------------------
*/

type AstroEventRecord =
  Record<
    string,
    unknown
  >;

type EventPresentation = {
  label: string;
  category: string;
  tone: AstroEventTone;
};

const EVENT_PRESENTATIONS:
  Record<
    string,
    EventPresentation
  > = {
    "sign-ingress": {
      label:
        "Entrée dans un nouveau signe",

      category:
        "Transition",

      tone:
        "transition",
    },

    ingress: {
      label:
        "Entrée dans un nouveau signe",

      category:
        "Transition",

      tone:
        "transition",
    },

    "retrograde-start": {
      label:
        "Début de rétrogradation",

      category:
        "Révision",

      tone:
        "retrograde",
    },

    "retrograde-end": {
      label:
        "Fin de rétrogradation",

      category:
        "Reprise",

      tone:
        "movement",
    },

    "station-retrograde": {
      label:
        "Station rétrograde",

      category:
        "Révision",

      tone:
        "retrograde",
    },

    "station-direct": {
      label:
        "Retour en mouvement direct",

      category:
        "Reprise",

      tone:
        "movement",
    },

    conjunction: {
      label:
        "Conjonction planétaire",

      category:
        "Alignement",

      tone:
        "alignment",
    },

    trine: {
      label:
        "Trigone planétaire",

      category:
        "Harmonie",

      tone:
        "alignment",
    },

    sextile: {
      label:
        "Sextile planétaire",

      category:
        "Ouverture",

      tone:
        "alignment",
    },

    square: {
      label:
        "Carré planétaire",

      category:
        "Ajustement",

      tone:
        "movement",
    },

    opposition: {
      label:
        "Opposition planétaire",

      category:
        "Prise de conscience",

      tone:
        "movement",
    },
  };

function readString(
  source:
    AstroEventRecord,
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

function normalizeEventText(
  value:
    string,
): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .trim();
}

function getEventPresentation(
  rawType:
    string,
): EventPresentation | null {
  const normalizedType =
    normalizeEventText(
      rawType,
    )
      .replace(
        /_/g,
        "-",
      )
      .replace(
        /\s+/g,
        "-",
      );

  return (
    EVENT_PRESENTATIONS[
      normalizedType
    ] ??
    null
  );
}

function getEventTone(
  eventName:
    string,
  category:
    string,
): AstroEventTone {
  const normalized =
    normalizeEventText(
      `${eventName} ${category}`,
    );

  if (
    normalized.includes(
      "retrograde",
    ) ||
    normalized.includes(
      "station",
    )
  ) {
    return "retrograde";
  }

  if (
    normalized.includes(
      "conjonction",
    ) ||
    normalized.includes(
      "trigone",
    ) ||
    normalized.includes(
      "sextile",
    ) ||
    normalized.includes(
      "alignement",
    ) ||
    normalized.includes(
      "aspect",
    )
  ) {
    return "alignment";
  }

  if (
    normalized.includes(
      "entre en",
    ) ||
    normalized.includes(
      "entree",
    ) ||
    normalized.includes(
      "change de signe",
    ) ||
    normalized.includes(
      "ingress",
    ) ||
    normalized.includes(
      "transition",
    )
  ) {
    return "transition";
  }

  return "movement";
}

function getEventCategory(
  tone:
    AstroEventTone,
  fallback:
    string,
): string {
  if (fallback) {
    return fallback;
  }

  switch (tone) {
    case "retrograde":
      return "Révision";

    case "alignment":
      return "Alignement";

    case "transition":
      return "Transition";

    case "movement":
    default:
      return "Mouvement";
  }
}

function getPlanetIcon(
  value:
    string,
): string {
  const normalized =
    normalizeEventText(
      value,
    );

  if (
    normalized.includes(
      "mercure",
    ) ||
    normalized.includes(
      "mercury",
    )
  ) {
    return HOROSCOPE_ICONS.mercury;
  }

  if (
    normalized.includes(
      "venus",
    )
  ) {
    return HOROSCOPE_ICONS.venus;
  }

  if (
    normalized.includes(
      "mars",
    )
  ) {
    return HOROSCOPE_ICONS.mars;
  }

  if (
    normalized.includes(
      "jupiter",
    )
  ) {
    return HOROSCOPE_ICONS.jupiter;
  }

  if (
    normalized.includes(
      "saturne",
    ) ||
    normalized.includes(
      "saturn",
    )
  ) {
    return HOROSCOPE_ICONS.saturn;
  }

  if (
    normalized.includes(
      "uranus",
    )
  ) {
    return HOROSCOPE_ICONS.uranus;
  }

  if (
    normalized.includes(
      "neptune",
    )
  ) {
    return HOROSCOPE_ICONS.neptune;
  }

  if (
    normalized.includes(
      "pluton",
    ) ||
    normalized.includes(
      "pluto",
    )
  ) {
    return HOROSCOPE_ICONS.pluto;
  }

  if (
    normalized.includes(
      "lune",
    ) ||
    normalized.includes(
      "moon",
    )
  ) {
    return HOROSCOPE_ICONS.moon;
  }

  return HOROSCOPE_ICONS.sun;
}

function formatEventDate(
  value:
    string,
): string {
  if (!value) {
    return "Date à confirmer";
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

function getDefaultTitle(
  tone:
    AstroEventTone,
): string {
  switch (tone) {
    case "retrograde":
      return "Une période propice à la révision";

    case "alignment":
      return "Une configuration qui transforme le climat du mois";

    case "transition":
      return "Une nouvelle dynamique commence à se dessiner";

    case "movement":
    default:
      return "Un mouvement céleste attire votre attention";
  }
}

function getDefaultImpact(
  tone:
    AstroEventTone,
): string {
  switch (tone) {
    case "retrograde":
      return "Cette influence peut ramener un dossier, une décision ou une situation qui mérite d’être examinée avec davantage de recul.";

    case "alignment":
      return "Cette configuration peut favoriser une ouverture, une prise de conscience ou une nouvelle manière d’envisager la situation.";

    case "transition":
      return "Cette transition peut déplacer progressivement votre attention vers de nouvelles priorités ou un autre domaine de votre vie.";

    case "movement":
    default:
      return "Ce mouvement peut modifier le rythme de vos échanges, de vos décisions ou de vos initiatives.";
  }
}

function getDefaultAdvice(
  tone:
    AstroEventTone,
): string {
  switch (tone) {
    case "retrograde":
      return "Prenez le temps de vérifier, de corriger et de consolider avant de poursuivre.";

    case "alignment":
      return "Accueillez cette ouverture avec clarté et utilisez-la pour coordonner vos efforts.";

    case "transition":
      return "Observez ce qui se termine et ce qui commence naturellement à prendre de l’importance.";

    case "movement":
    default:
      return "Restez attentif aux changements de rythme et adaptez vos décisions au contexte.";
  }
}

function buildDisplayAstroEvent(
  item:
    MonthlyAstrologyResult[
      "astroEvents"
    ][number],
  index:
    number,
): DisplayAstroEvent {
  const source =
    item as unknown as
      AstroEventRecord;

  const rawType =
    readString(
      source,
      [
        "type",
        "kind",
      ],
    );

  const presentation =
    getEventPresentation(
      rawType,
    );

  const explicitEvent =
    readString(
      source,
      [
        "event",
        "name",
        "label",
      ],
    );

  const event =
    explicitEvent ||
    presentation?.label ||
    `Événement astrologique ${index + 1}`;

  const rawCategory =
    readString(
      source,
      [
        "category",
        "theme",
      ],
    );

  const tone =
    presentation?.tone ??
    getEventTone(
      event,
      rawCategory,
    );

  const category =
    rawCategory ||
    presentation?.category ||
    getEventCategory(
      tone,
      "",
    );

  const rawDate =
    readString(
      source,
      [
        "date",
        "isoDate",
        "exactDate",
        "occursOn",
        "startDate",
      ],
    );

  const title =
    readString(
      source,
      [
        "title",
        "headline",
      ],
    ) ||
    getDefaultTitle(
      tone,
    );

  const description =
    readString(
      source,
      [
        "description",
        "interpretation",
        "meaning",
        "text",
      ],
    ) ||
    "Cet événement astrologique fait évoluer le climat général du mois. Il peut mettre en lumière une nouvelle priorité, un ajustement nécessaire ou une étape importante de votre progression.";

  const impact =
    readString(
      source,
      [
        "impact",
        "influence",
        "effect",
        "possibleImpact",
      ],
    ) ||
    getDefaultImpact(
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
      `${rawType || "astro-event"}-${rawDate || index}`,

    date:
      formatEventDate(
        rawDate,
      ),

    event,

    tone,

    category,

    title,

    description,

    impact,

    advice,

    icon:
      getPlanetIcon(
        `${explicitEvent} ${title} ${description}`,
      ),
  };
}

function sortAstroEventsByDate(
  astroEvents:
    MonthlyAstrologyResult[
      "astroEvents"
    ],
): MonthlyAstrologyResult[
  "astroEvents"
] {
  return [...astroEvents].sort(
    (
      first,
      second,
    ) => {
      const firstSource =
        first as unknown as
          AstroEventRecord;

      const secondSource =
        second as unknown as
          AstroEventRecord;

      const firstDate =
        readString(
          firstSource,
          [
            "date",
            "isoDate",
            "exactDate",
            "occursOn",
            "startDate",
          ],
        );

      const secondDate =
        readString(
          secondSource,
          [
            "date",
            "isoDate",
            "exactDate",
            "occursOn",
            "startDate",
          ],
        );

      return firstDate.localeCompare(
        secondDate,
      );
    },
  );
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles =
  StyleSheet.create({
    /*
    |--------------------------------------------------------------------------
    | Page
    |--------------------------------------------------------------------------
    */

    page: {
      position:
        "relative",

      paddingTop:
        34,

      paddingRight:
        42,

      paddingBottom:
        54,

      paddingLeft:
        42,

      backgroundColor:
        NAVY,

      color:
        CREAM,

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

    /*
    |--------------------------------------------------------------------------
    | Décorations générales
    |--------------------------------------------------------------------------
    */

    topOrbitLarge: {
      position:
        "absolute",

      top:
        -112,

      right:
        -101,

      width:
        258,

      height:
        258,

      borderRadius:
        129,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.5,
    },

    topOrbitMedium: {
      position:
        "absolute",

      top:
        -75,

      right:
        -64,

      width:
        184,

      height:
        184,

      borderRadius:
        92,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.45,
    },

    topOrbitSmall: {
      position:
        "absolute",

      top:
        -37,

      right:
        -27,

      width:
        108,

      height:
        108,

      borderRadius:
        54,

      borderWidth:
        0.5,

      borderColor:
        GOLD,

      opacity:
        0.25,
    },

    bottomOrbitLarge: {
      position:
        "absolute",

      bottom:
        -129,

      left:
        -118,

      width:
        275,

      height:
        275,

      borderRadius:
        138,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.42,
    },

    bottomOrbitMedium: {
      position:
        "absolute",

      bottom:
        -84,

      left:
        -73,

      width:
        184,

      height:
        184,

      borderRadius:
        92,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.35,
    },

    /*
    |--------------------------------------------------------------------------
    | En-tête
    |--------------------------------------------------------------------------
    */

    header: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        14,
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

      paddingTop:
        7,

      paddingRight:
        12,

      paddingBottom:
        7,

      paddingLeft:
        10,

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

    /*
    |--------------------------------------------------------------------------
    | Titre
    |--------------------------------------------------------------------------
    */

    titleBlock: {
      marginBottom:
        12,
    },

    eyebrow: {
      marginBottom:
        7,

      color:
        GOLD,

      fontSize:
        9,

      letterSpacing:
        2.35,

      textTransform:
        "uppercase",
    },

    title: {
      maxWidth:
        440,

      marginBottom:
        6,

      color:
        CREAM,

      fontSize:
        23.5,

      lineHeight:
        1.17,
    },

    period: {
      marginBottom:
        9,

      color:
        MUTED_CREAM,

      fontSize:
        9.5,
    },

    titleDecoration: {
      flexDirection:
        "row",

      alignItems:
        "center",
    },

    titleLineLarge: {
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
        23,

      height:
        1,

      backgroundColor:
        DARK_GOLD,
    },

    /*
    |--------------------------------------------------------------------------
    | Introduction
    |--------------------------------------------------------------------------
    */

    introductionCard: {
      position:
        "relative",

      minHeight:
        69,

      marginBottom:
        11,

      paddingTop:
        11,

      paddingRight:
        15,

      paddingBottom:
        11,

      paddingLeft:
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
        3,

      right:
        15,

      width:
        64,

      height:
        64,

      objectFit:
        "contain",

      opacity:
        0.05,
    },

    introductionLabel: {
      marginBottom:
        5,

      color:
        GOLD,

      fontSize:
        6.8,

      letterSpacing:
        1.1,

      textTransform:
        "uppercase",
    },

    introductionText: {
      maxWidth:
        455,

      color:
        MUTED_CREAM,

      fontSize:
        8.35,

      lineHeight:
        1.47,
    },

    /*
    |--------------------------------------------------------------------------
    | Note explicative
    |--------------------------------------------------------------------------
    */

    explanationCard: {
      position:
        "relative",

      flexDirection:
        "row",

      alignItems:
        "center",

      minHeight:
        54,

      marginBottom:
        11,

      paddingTop:
        9,

      paddingRight:
        13,

      paddingBottom:
        9,

      paddingLeft:
        11,

      borderRadius:
        10,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      backgroundColor:
        NAVY_SOFT,

      overflow:
        "hidden",
    },

    explanationAccent: {
      width:
        2,

      alignSelf:
        "stretch",

      marginRight:
        10,

      borderRadius:
        1,

      backgroundColor:
        DARK_GOLD,
    },

    explanationIconCircle: {
      width:
        31,

      height:
        31,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        10,

      borderRadius:
        16,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    explanationIcon: {
      width:
        19,

      height:
        19,

      objectFit:
        "contain",
    },

    explanationText: {
      flex:
        1,

      color:
        SOFT_TEXT,

      fontSize:
        7.5,

      lineHeight:
        1.42,
    },

    /*
    |--------------------------------------------------------------------------
    | En-tête de section
    |--------------------------------------------------------------------------
    */

    sectionHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      marginBottom:
        8,
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
        15,

      height:
        15,

      marginRight:
        8,

      objectFit:
        "contain",
    },

    sectionTitle: {
      color:
        GOLD,

      fontSize:
        8.9,

      letterSpacing:
        1.35,

      textTransform:
        "uppercase",
    },

    /*
    |--------------------------------------------------------------------------
    | Liste des événements
    |--------------------------------------------------------------------------
    */

    eventsContainer: {
      marginBottom:
        10,
    },

    eventCard: {
      position:
        "relative",

      flexDirection:
        "row",

      minHeight:
        109,

      marginBottom:
        8,

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

    eventCardLast: {
      marginBottom:
        0,
    },

    eventAside: {
      position:
        "relative",

      width:
        91,

      alignItems:
        "center",

      justifyContent:
        "center",

      paddingTop:
        11,

      paddingRight:
        8,

      paddingBottom:
        11,

      paddingLeft:
        8,

      borderRightWidth:
        0.6,

      borderRightColor:
        DEEP_GOLD,

      backgroundColor:
        NAVY_DEEP,

      overflow:
        "hidden",
    },

    asideOrbitLarge: {
      position:
        "absolute",

      top:
        -35,

      left:
        -30,

      width:
        98,

      height:
        98,

      borderRadius:
        49,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.65,
    },

    asideOrbitSmall: {
      position:
        "absolute",

      top:
        -12,

      left:
        -8,

      width:
        55,

      height:
        55,

      borderRadius:
        28,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.55,
    },

    eventIconOuter: {
      width:
        43,

      height:
        43,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginBottom:
        7,

      borderRadius:
        22,

      borderWidth:
        0.6,

      borderColor:
        DARK_GOLD,
    },

    eventIconInner: {
      width:
        35,

      height:
        35,

      alignItems:
        "center",

      justifyContent:
        "center",

      borderRadius:
        18,

      borderWidth:
        0.8,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD,
    },

    eventIcon: {
      width:
        23,

      height:
        23,

      objectFit:
        "contain",
    },

    eventName: {
      maxWidth:
        72,

      marginBottom:
        4,

      color:
        CREAM,

      fontSize:
        6.6,

      lineHeight:
        1.24,

      textAlign:
        "center",
    },

    eventDate: {
      color:
        GOLD,

      fontSize:
        6,

      letterSpacing:
        0.55,

      textAlign:
        "center",

      textTransform:
        "uppercase",
    },

    eventMain: {
      position:
        "relative",

      flex:
        1,

      paddingTop:
        10,

      paddingRight:
        13,

      paddingBottom:
        9,

      paddingLeft:
        13,

      overflow:
        "hidden",
    },

    eventMainOrbitLarge: {
      position:
        "absolute",

      top:
        -65,

      right:
        -68,

      width:
        144,

      height:
        144,

      borderRadius:
        72,

      borderWidth:
        0.5,

      borderColor:
        DEEP_GOLD,

      opacity:
        0.55,
    },

    eventMainOrbitSmall: {
      position:
        "absolute",

      top:
        -29,

      right:
        -32,

      width:
        76,

      height:
        76,

      borderRadius:
        38,

      borderWidth:
        0.5,

      borderColor:
        DARK_GOLD,

      opacity:
        0.4,
    },

    eventHeader: {
      flexDirection:
        "row",

      alignItems:
        "center",

      justifyContent:
        "space-between",

      marginBottom:
        4,
    },

    eventLabel: {
      color:
        SOFT_TEXT,

      fontSize:
        5.9,

      letterSpacing:
        0.75,

      textTransform:
        "uppercase",
    },

    categoryBadge: {
      paddingTop:
        3,

      paddingRight:
        7,

      paddingBottom:
        3,

      paddingLeft:
        7,

      borderRadius:
        9,

      borderWidth:
        0.5,

      fontSize:
        5.8,

      letterSpacing:
        0.35,

      textTransform:
        "uppercase",
    },

    categoryMovement: {
      color:
        "#D5E5F4",

      borderColor:
        "#526D88",

      backgroundColor:
        "#17283B",
    },

    categoryRetrograde: {
      color:
        "#F1DFC2",

      borderColor:
        "#806843",

      backgroundColor:
        "#302719",
    },

    categoryAlignment: {
      color:
        "#D9ECD6",

      borderColor:
        "#5F7B5A",

      backgroundColor:
        "#182B22",
    },

    categoryTransition: {
      color:
        "#E7D7EA",

      borderColor:
        "#755679",

      backgroundColor:
        "#2B1E30",
    },

    eventTitle: {
      marginBottom:
        4,

      paddingRight:
        20,

      color:
        GOLD,

      fontSize:
        9.4,

      lineHeight:
        1.25,
    },

    eventDescription: {
      marginBottom:
        5,

      color:
        MUTED_CREAM,

      fontSize:
        6.85,

      lineHeight:
        1.36,
    },

    informationRow: {
      flexDirection:
        "row",

      paddingTop:
        5,

      borderTopWidth:
        0.5,

      borderTopColor:
        DEEP_GOLD,
    },

    informationColumn: {
      width:
        "50%",

      paddingRight:
        9,
    },

    adviceColumn: {
      width:
        "50%",

      paddingLeft:
        9,

      borderLeftWidth:
        0.5,

      borderLeftColor:
        DEEP_GOLD,
    },

    informationLabel: {
      marginBottom:
        2.5,

      color:
        SOFT_TEXT,

      fontSize:
        5.5,

      letterSpacing:
        0.65,

      textTransform:
        "uppercase",
    },

    adviceLabel: {
      marginBottom:
        2.5,

      color:
        GOLD,

      fontSize:
        5.5,

      letterSpacing:
        0.65,

      textTransform:
        "uppercase",
    },

    informationText: {
      color:
        MUTED_CREAM,

      fontSize:
        6.3,

      lineHeight:
        1.34,
    },

    adviceText: {
      color:
        CREAM,

      fontSize:
        6.3,

      lineHeight:
        1.34,
    },

    /*
    |--------------------------------------------------------------------------
    | Synthèse
    |--------------------------------------------------------------------------
    */

    closingCard: {
      position:
        "relative",

      flexDirection:
        "row",

      alignItems:
        "center",

      minHeight:
        68,

      paddingTop:
        10,

      paddingRight:
        15,

      paddingBottom:
        10,

      paddingLeft:
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

    closingWatermark: {
      position:
        "absolute",

      top:
        3,

      right:
        15,

      width:
        60,

      height:
        60,

      objectFit:
        "contain",

      opacity:
        0.05,
    },

    closingIconCircle: {
      width:
        38,

      height:
        38,

      alignItems:
        "center",

      justifyContent:
        "center",

      marginRight:
        11,

      borderRadius:
        19,

      borderWidth:
        0.7,

      borderColor:
        GOLD,

      backgroundColor:
        NAVY_CARD_LIGHT,
    },

    closingIcon: {
      width:
        23,

      height:
        23,

      objectFit:
        "contain",
    },

    closingContent: {
      flex:
        1,
    },

    closingTitle: {
      marginBottom:
        4,

      color:
        GOLD,

      fontSize:
        6.8,

      letterSpacing:
        1.05,

      textTransform:
        "uppercase",
    },

    closingText: {
      maxWidth:
        425,

      color:
        CREAM,

      fontSize:
        7.8,

      lineHeight:
        1.42,
    },
  });

/*
|--------------------------------------------------------------------------
| Style du badge selon le type d’événement
|--------------------------------------------------------------------------
*/

function getEventCategoryStyle(
  tone:
    AstroEventTone,
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

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthAstroEvents({
  identity,
  period,
  astroEvents,
}: HoroscopeMonthAstroEventsProps) {
  const zodiacIconUrl =
    getHoroscopeZodiacIconUrl(
      identity.zodiacSign,
    );

  const displayedEvents =
    sortAstroEventsByDate(
      Array.isArray(
        astroEvents,
      )
        ? astroEvents
        : [],
    )
      .slice(
        0,
        4,
      )
      .map(
        buildDisplayAstroEvent,
      );

  const eventNames =
    displayedEvents
      .map(
        (item) =>
          `${item.event} (${item.date})`,
      )
      .join(", ");

  return (
    <Page
      size="A4"
      style={styles.page}
      wrap={false}
    >
      {/*
      |--------------------------------------------------------------------------
      | Fond
      |--------------------------------------------------------------------------
      */}

      <HoroscopeStarBackground />

      <View style={styles.topOrbitLarge} />
      <View style={styles.topOrbitMedium} />
      <View style={styles.topOrbitSmall} />

      <View style={styles.bottomOrbitLarge} />
      <View style={styles.bottomOrbitMedium} />

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
            Les événements astrologiques du mois
          </Text>

          <Text style={styles.period}>
            {period.label}
          </Text>

          <View style={styles.titleDecoration}>
            <View
              style={styles.titleLineLarge}
            />

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
            src={HOROSCOPE_ICONS.sun}
            style={
              styles.introductionWatermark
            }
          />

          <Text
            style={styles.introductionLabel}
          >
            Votre calendrier céleste
          </Text>

          <Text
            style={styles.introductionText}
          >
            Les mouvements astrologiques de{" "}
            {period.label} font évoluer le climat
            général du mois pour le signe{" "}
            {identity.zodiacSignLabel}. Ils mettent
            en lumière les périodes où l’énergie
            s’intensifie, ralentit ou vous invite
            à modifier votre manière d’avancer.
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Explication
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.explanationCard}
          wrap={false}
        >
          <View
            style={styles.explanationAccent}
          />

          <View
            style={
              styles.explanationIconCircle
            }
          >
            <Image
              src={HOROSCOPE_ICONS.jupiter}
              style={styles.explanationIcon}
            />
          </View>

          <Text
            style={styles.explanationText}
          >
            Ces événements décrivent d’abord
            des tendances collectives. Leur effet
            personnel dépend de leur interaction
            avec votre signe, votre thème natal
            et les autres mouvements présents
            durant le mois.
          </Text>
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Événements
        |--------------------------------------------------------------------------
        */}

        <View style={styles.sectionHeader}>
          <View style={styles.sectionLine} />

          <Image
            src={HOROSCOPE_ICONS.mercury}
            style={styles.sectionIcon}
          />

          <Text style={styles.sectionTitle}>
            Les moments importants du mois
          </Text>
        </View>

        <View style={styles.eventsContainer}>
          {displayedEvents.map(
            (
              item,
              index,
            ) => {
              const isLast =
                index ===
                displayedEvents.length -
                  1;

              return (
                <View
                  key={item.id}
                  style={[
                    styles.eventCard,
                    isLast
                      ? styles.eventCardLast
                      : {},
                  ]}
                  wrap={false}
                >
                  {/*
                  |--------------------------------------------------------------------------
                  | Colonne gauche
                  |--------------------------------------------------------------------------
                  */}

                  <View style={styles.eventAside}>
                    <View
                      style={
                        styles.asideOrbitLarge
                      }
                    />

                    <View
                      style={
                        styles.asideOrbitSmall
                      }
                    />

                    <View
                      style={
                        styles.eventIconOuter
                      }
                    >
                      <View
                        style={
                          styles.eventIconInner
                        }
                      >
                        <Image
                          src={item.icon}
                          style={
                            styles.eventIcon
                          }
                        />
                      </View>
                    </View>

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

                  {/*
                  |--------------------------------------------------------------------------
                  | Contenu principal
                  |--------------------------------------------------------------------------
                  */}

                  <View style={styles.eventMain}>
                    <View
                      style={
                        styles.eventMainOrbitLarge
                      }
                    />

                    <View
                      style={
                        styles.eventMainOrbitSmall
                      }
                    />

                    <View
                      style={styles.eventHeader}
                    >
                      <Text
                        style={
                          styles.eventLabel
                        }
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
                        styles.informationRow
                      }
                    >
                      <View
                        style={
                          styles.informationColumn
                        }
                      >
                        <Text
                          style={
                            styles.informationLabel
                          }
                        >
                          Influence possible
                        </Text>

                        <Text
                          style={
                            styles.informationText
                          }
                        >
                          {item.impact}
                        </Text>
                      </View>

                      <View
                        style={
                          styles.adviceColumn
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
                          style={
                            styles.adviceText
                          }
                        >
                          {item.advice}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            },
          )}
        </View>

        {/*
        |--------------------------------------------------------------------------
        | Conclusion
        |--------------------------------------------------------------------------
        */}

        <View
          style={styles.closingCard}
          wrap={false}
        >
          <Image
            src={HOROSCOPE_ICONS.saturn}
            style={styles.closingWatermark}
          />

          <View
            style={
              styles.closingIconCircle
            }
          >
            <Image
              src={HOROSCOPE_ICONS.saturn}
              style={styles.closingIcon}
            />
          </View>

          <View style={styles.closingContent}>
            <Text
              style={styles.closingTitle}
            >
              Observer les transitions du mois
            </Text>

            <Text
              style={styles.closingText}
            >
              {eventNames
                ? `Les principaux événements de ${period.label} sont ${eventNames}. Certains favorisent l’élan et les prises de décision, tandis que d’autres invitent à réviser, ajuster ou ralentir. Utilisez ces repères pour avancer au moment le plus juste.`
                : `Aucun événement astrologique majeur n’a été retenu pour ${period.label}. Restez néanmoins attentif aux changements de rythme afin d’adapter vos décisions avec davantage de discernement.`}
            </Text>
          </View>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
