import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  LOGO_URL,
  PLANET_ICONS,
} from "@/components/PremiumPdf/PremiumPdfAssets";

import type {
  CompatibilityAspect,
  CompatibilitySectionProps,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

import {
  getCompatibilityPlanet,
  translateCompatibilityAspect,
  translateCompatibilityPlanet,
} from "./CompatibilityPdfUtils";

const NAVY = "#06101f";
const NAVY_CARD = "#0a1729";
const NAVY_CARD_LIGHT = "#0d1b30";

const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#c99a3d";
const SOFT_GOLD = "#8f6e35";
const DARK_GOLD = "#4e412d";

const CREAM = "#fff8e7";
const MUTED_CREAM = "#ddd5c6";
const SOFT_TEXT = "#b9ae98";

const localStyles = StyleSheet.create({
  page: {
    position: "relative",

    paddingTop: 42,
    paddingBottom: 48,
    paddingHorizontal: 43,

    backgroundColor: NAVY,
    color: CREAM,

    fontFamily: "Helvetica",

    overflow: "hidden",
  },

  topAccent: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,

    height: 5,

    backgroundColor: GOLD,
  },

  outerBorder: {
    position: "absolute",

    top: 18,
    left: 18,
    right: 18,
    bottom: 18,

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,
  },

  innerBorder: {
    position: "absolute",

    top: 23,
    left: 23,
    right: 23,
    bottom: 23,

    borderWidth: 0.35,
    borderColor: DARK_GOLD,
  },

  decorativeCircleTop: {
    position: "absolute",

    top: 80,
    left: -56,

    width: 145,
    height: 145,

    borderRadius: 72.5,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.18,
  },

  decorativeCircleBottom: {
    position: "absolute",

    right: -49,
    bottom: 72,

    width: 132,
    height: 132,

    borderRadius: 66,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.18,
  },

  content: {
    position: "relative",

    height: "100%",
  },

  header: {
    alignItems: "center",

    marginBottom: 15,
  },

  logo: {
    width: 108,
    height: 39,

    objectFit: "contain",

    marginBottom: 7,
  },

  sectionLabel: {
    fontSize: 6.4,
    letterSpacing: 2.2,

    color: "#ccb986",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    lineHeight: 1.15,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  subtitle: {
    width: "86%",

    fontSize: 8.1,
    lineHeight: 1.45,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  titleDivider: {
    width: 74,
    height: 1,

    backgroundColor: GOLD,

    marginTop: 11,
  },

  namesCard: {
    position: "relative",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 14,

    marginBottom: 12,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.65,
    borderColor: DARK_GOLD,
  },

  namesAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 70,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  namesAccentRight: {
    position: "absolute",

    right: 0,
    bottom: -1,

    width: 70,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  name: {
    width: "40%",

    fontSize: 12.5,

    color: CREAM,

    textAlign: "center",
  },

  nameSeparator: {
    width: "12%",

    fontSize: 13,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  mercuryComparison: {
    position: "relative",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 14,

    marginBottom: 11,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },

  mercuryAccent: {
    position: "absolute",

    top: -1,
    left: "34%",

    width: "32%",
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  mercuryHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 10,
  },

  mercuryIconFrame: {
    width: 42,
    height: 42,

    borderRadius: 21,

    borderWidth: 0.75,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  mercuryIcon: {
    width: 26,
    height: 26,

    objectFit: "contain",
  },

  mercuryHeading: {
    flex: 1,
  },

  mercuryLabel: {
    fontSize: 5.8,
    letterSpacing: 1.4,

    color: "#cbb98e",

    textTransform: "uppercase",

    marginBottom: 3,
  },

  mercuryTitle: {
    fontSize: 13,

    color: CREAM,

    marginBottom: 3,
  },

  mercuryIntro: {
    fontSize: 6.4,
    lineHeight: 1.35,

    color: SOFT_TEXT,
  },

  placementRow: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",

    marginBottom: 10,
  },

  placementCard: {
    width: "43%",

    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 10,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.5,
    borderColor: DARK_GOLD,

    alignItems: "center",
  },

  placementName: {
    fontSize: 5.8,
    letterSpacing: 1,

    color: SOFT_TEXT,

    textTransform: "uppercase",

    marginBottom: 4,
  },

  placementValue: {
    fontSize: 10.8,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 3,
  },

  placementStyle: {
    fontSize: 6.2,
    lineHeight: 1.3,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  placementCenter: {
    width: "10%",

    alignItems: "center",
    justifyContent: "center",
  },

  placementCenterCircle: {
    width: 27,
    height: 27,

    borderRadius: 13.5,

    borderWidth: 0.65,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",
  },

  placementCenterSymbol: {
    fontSize: 11,

    color: GOLD,
  },

  interpretationTitle: {
    fontSize: 8.6,

    color: CREAM,

    marginBottom: 5,
  },

  interpretationText: {
    fontSize: 7,
    lineHeight: 1.47,

    color: MUTED_CREAM,

    textAlign: "justify",
  },

  stylesSection: {
    marginBottom: 11,
  },

  sectionTitle: {
    fontSize: 6.2,
    letterSpacing: 1.6,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 8,
  },

  styleCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  styleCard: {
    width: "48.4%",

    minHeight: 93,

    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 11,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  styleCardHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 6,
  },

  styleSymbolFrame: {
    width: 26,
    height: 26,

    borderRadius: 13,

    borderWidth: 0.6,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 8,
  },

  styleSymbol: {
    fontSize: 10.5,

    color: BRIGHT_GOLD,
  },

  styleCardTitle: {
    flex: 1,

    fontSize: 8.1,

    color: CREAM,
  },

  styleCardText: {
    fontSize: 6.35,
    lineHeight: 1.42,

    color: SOFT_TEXT,

    textAlign: "justify",
  },

  aspectsSection: {
    marginBottom: 10,
  },

  aspectCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 10,

    marginBottom: 5,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },

  aspectSymbolFrame: {
    width: 28,
    height: 28,

    borderRadius: 14,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 9,
  },

  aspectSymbol: {
    fontSize: 10.5,

    color: BRIGHT_GOLD,
  },

  aspectContent: {
    flex: 1,
  },

  aspectTitle: {
    fontSize: 7.4,

    color: CREAM,

    marginBottom: 2,
  },

  aspectText: {
    fontSize: 6,
    lineHeight: 1.36,

    color: SOFT_TEXT,
  },

  aspectNature: {
    width: 61,

    fontSize: 5.6,
    lineHeight: 1.25,

    color: MUTED_CREAM,

    textAlign: "right",
  },

  synthesisRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 10,
  },

  synthesisCard: {
    width: "48.4%",

    minHeight: 83,

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 11,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  synthesisCardTitle: {
    fontSize: 7.5,

    color: CREAM,

    marginBottom: 5,
  },

  synthesisCardText: {
    fontSize: 6.2,
    lineHeight: 1.4,

    color: SOFT_TEXT,

    textAlign: "justify",
  },

  adviceCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 13,

    backgroundColor: NAVY_CARD,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  adviceSymbolFrame: {
    width: 30,
    height: 30,

    borderRadius: 15,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 11,
  },

  adviceSymbol: {
    fontSize: 11.5,

    color: BRIGHT_GOLD,
  },

  adviceContent: {
    flex: 1,
  },

  adviceTitle: {
    fontSize: 7.5,

    color: CREAM,

    marginBottom: 3,
  },

  adviceText: {
    fontSize: 6.35,
    lineHeight: 1.4,

    color: SOFT_TEXT,
  },

  footer: {
    position: "absolute",

    left: 43,
    right: 43,
    bottom: 29,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerText: {
    fontSize: 5.7,
    letterSpacing: 0.8,

    color: "#8e836e",
  },

  footerPage: {
    fontSize: 6,

    color: "#b5a886",
  },
});

interface CommunicationAspect {
  id: string;
  person1Planet: string;
  person2Planet: string;
  type: CompatibilityAspect["type"];
  orb: number;
}

function normalizeValue(
  value: unknown,
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function getPersonName(
  person: SafeCompatibilityPerson,
  fallback: string,
): string {
  const name =
    typeof person.firstName === "string"
      ? person.firstName.trim()
      : "";

  return name || fallback;
}

function getMercurySign(
  person: SafeCompatibilityPerson,
): string {
  const mercury =
    getCompatibilityPlanet(
      person.planets,
      "Mercury",
    );

  const sign =
    typeof mercury?.sign === "string"
      ? mercury.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getCommunicationStyle(
  sign: string,
): string {
  const normalized = normalizeValue(sign);

  const styles: Record<string, string> = {
    belier:
      "Communication directe, rapide et spontanée. Cette personne préfère aller droit au but et exprimer immédiatement ce qu’elle pense.",
    taureau:
      "Communication posée, concrète et réfléchie. Elle prend le temps d’assimiler les informations avant de formuler une opinion stable.",
    gemeaux:
      "Communication vive, curieuse et adaptable. Elle aime échanger, poser des questions et explorer plusieurs idées à la fois.",
    cancer:
      "Communication intuitive et sensible. Les mots sont fortement influencés par l’émotion, la mémoire et le climat relationnel.",
    lion:
      "Communication chaleureuse, expressive et assurée. Elle cherche à transmettre ses idées avec conviction et présence.",
    vierge:
      "Communication précise, méthodique et analytique. Elle remarque facilement les détails et cherche des solutions pratiques.",
    balance:
      "Communication diplomate, nuancée et attentive. Elle cherche l’équilibre, la coopération et évite généralement les confrontations inutiles.",
    scorpion:
      "Communication profonde, stratégique et perspicace. Elle observe beaucoup et préfère les échanges sincères aux conversations superficielles.",
    sagittaire:
      "Communication franche, enthousiaste et visionnaire. Elle aime partager ses convictions et parler de possibilités, de projets ou d’avenir.",
    capricorne:
      "Communication structurée, sérieuse et responsable. Elle privilégie les faits, la cohérence et les échanges ayant un objectif concret.",
    verseau:
      "Communication indépendante, originale et intellectuelle. Elle apprécie les idées nouvelles et peut aborder les situations avec détachement.",
    poissons:
      "Communication intuitive, imagée et empathique. Elle perçoit les nuances invisibles et s’exprime souvent à travers le ressenti.",
  };

  return (
    styles[normalized] ||
    "Les données disponibles ne permettent pas encore de préciser entièrement son style de communication."
  );
}

function getElement(
  sign: string,
): string {
  const normalized = normalizeValue(sign);

  if (
    ["belier", "lion", "sagittaire"].includes(
      normalized,
    )
  ) {
    return "Feu";
  }

  if (
    [
      "taureau",
      "vierge",
      "capricorne",
    ].includes(normalized)
  ) {
    return "Terre";
  }

  if (
    [
      "gemeaux",
      "balance",
      "verseau",
    ].includes(normalized)
  ) {
    return "Air";
  }

  if (
    [
      "cancer",
      "scorpion",
      "poissons",
    ].includes(normalized)
  ) {
    return "Eau";
  }

  return "Non précisé";
}

function getMercuryCompatibilityText(
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      "Les positions de Mercure ne sont pas toutes disponibles. " +
      "L’analyse des échanges pourra être approfondie lorsque les deux thèmes complets seront fournis."
    );
  }

  const normalized1 = normalizeValue(sign1);
  const normalized2 = normalizeValue(sign2);

  const element1 = getElement(sign1);
  const element2 = getElement(sign2);

  if (normalized1 === normalized2) {
    return (
      `Vos deux Mercure en ${sign1} indiquent une manière très semblable de réfléchir et de communiquer. ` +
      "Vous pouvez rapidement comprendre la logique de l’autre, terminer ses phrases ou partager les mêmes références. " +
      "Cette proximité mentale favorise les échanges, mais peut aussi renforcer les mêmes habitudes ou les mêmes angles morts."
    );
  }

  if (element1 === element2) {
    return (
      `Vos Mercure en ${sign1} et en ${sign2} appartiennent au même élément, ${element1}. ` +
      "Votre manière de traiter l’information repose donc sur une base commune. " +
      "Vous ne choisissez pas toujours les mêmes mots, mais vous pouvez généralement suivre le raisonnement de l’autre avec naturel."
    );
  }

  const complementary =
    (element1 === "Feu" &&
      element2 === "Air") ||
    (element1 === "Air" &&
      element2 === "Feu") ||
    (element1 === "Terre" &&
      element2 === "Eau") ||
    (element1 === "Eau" &&
      element2 === "Terre");

  if (complementary) {
    return (
      `Vos Mercure en ${sign1} et en ${sign2} fonctionnent différemment, mais leurs éléments ${element1} et ${element2} peuvent se compléter. ` +
      "L’un apporte une forme de mouvement, d’analyse ou de spontanéité, tandis que l’autre ajoute de la profondeur, du réalisme ou de la sensibilité. " +
      "Votre communication devient particulièrement riche lorsque chacun respecte le rythme mental de l’autre."
    );
  }

  return (
    `Vos Mercure en ${sign1} et en ${sign2} ne traitent pas l’information de la même manière. ` +
    "L’un peut privilégier la logique, la rapidité ou l’action, tandis que l’autre se fie davantage au ressenti, à la prudence ou à l’expérience. " +
    "Les malentendus diminuent lorsque vous vérifiez ce que l’autre a réellement compris au lieu de présumer que votre message était évident."
  );
}

function isMercuryPlanet(
  planetName: string,
): boolean {
  const normalized = normalizeValue(planetName);

  return (
    normalized === "mercury" ||
    normalized === "mercure"
  );
}

function isCommunicationPlanet(
  planetName: string,
): boolean {
  const normalized = normalizeValue(planetName);

  return [
    "sun",
    "soleil",
    "moon",
    "lune",
    "mercury",
    "mercure",
    "venus",
    "mars",
    "saturn",
    "saturne",
  ].includes(normalized);
}

function getCommunicationAspects(
  aspects: CompatibilityAspect[],
): CommunicationAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects
    .filter((aspect) => {
      const person1Planet =
        aspect.person1Planet || "";

      const person2Planet =
        aspect.person2Planet || "";

      const hasMercury =
        isMercuryPlanet(person1Planet) ||
        isMercuryPlanet(person2Planet);

      const otherPlanet =
        isMercuryPlanet(person1Planet)
          ? person2Planet
          : person1Planet;

      return (
        hasMercury &&
        isCommunicationPlanet(otherPlanet)
      );
    })
    .sort(
      (first, second) =>
        first.orb - second.orb,
    )
    .slice(0, 3)
    .map((aspect, index) => ({
      id: `communication-${index}`,
      person1Planet: aspect.person1Planet,
      person2Planet: aspect.person2Planet,
      type: aspect.type,
      orb: aspect.orb,
    }));
}

function getAspectSymbol(
  type: CompatibilityAspect["type"],
): string {
  const symbols: Record<
    CompatibilityAspect["type"],
    string
  > = {
    conjunction: "☌",
    opposition: "☍",
    trine: "△",
    square: "□",
    sextile: "✶",
    quincunx: "⚻",
  };

  return symbols[type];
}

function getAspectNature(
  type: CompatibilityAspect["type"],
): string {
  if (
    type === "trine" ||
    type === "sextile"
  ) {
    return "Échange fluide";
  }

  if (type === "conjunction") {
    return "Connexion mentale";
  }

  if (type === "opposition") {
    return "Points de vue opposés";
  }

  if (type === "square") {
    return "Tension mentale";
  }

  if (type === "quincunx") {
    return "Ajustement nécessaire";
  }

  return "Influence relationnelle";
}

function getOtherCommunicationPlanet(
  person1Planet: string,
  person2Planet: string,
): string {
  return isMercuryPlanet(person1Planet)
    ? normalizeValue(person2Planet)
    : normalizeValue(person1Planet);
}

function getCommunicationAspectInterpretation(
  aspect: CommunicationAspect,
): string {
  const otherPlanet =
    getOtherCommunicationPlanet(
      aspect.person1Planet,
      aspect.person2Planet,
    );

  const harmonious =
    aspect.type === "trine" ||
    aspect.type === "sextile";

  const challenging =
    aspect.type === "square" ||
    aspect.type === "opposition" ||
    aspect.type === "quincunx";

  if (
    otherPlanet === "mercury" ||
    otherPlanet === "mercure"
  ) {
    if (harmonious) {
      return "Vos modes de pensée peuvent s’accorder naturellement, facilitant les discussions, les décisions et la compréhension mutuelle.";
    }

    if (challenging) {
      return "Vos raisonnements peuvent suivre des directions différentes et créer des débats, des interruptions ou des incompréhensions.";
    }

    return "Cette connexion renforce fortement votre activité mentale commune et votre besoin d’échanger.";
  }

  if (
    otherPlanet === "moon" ||
    otherPlanet === "lune"
  ) {
    if (harmonious) {
      return "Les mots peuvent facilement rejoindre les émotions, ce qui favorise l’écoute, la confiance et le sentiment d’être compris.";
    }

    if (challenging) {
      return "La logique de l’un peut parfois sembler insensible aux émotions de l’autre, même sans intention de blesser.";
    }

    return "Les pensées et les émotions sont fortement liées dans votre manière de communiquer.";
  }

  if (
    otherPlanet === "sun" ||
    otherPlanet === "soleil"
  ) {
    if (harmonious) {
      return "Les idées de l’un peuvent soutenir l’identité et les projets de l’autre, favorisant une communication stimulante.";
    }

    if (challenging) {
      return "Certaines paroles peuvent être perçues comme une remise en question personnelle ou une critique de l’identité.";
    }

    return "La communication joue un rôle central dans la manière dont vous vous reconnaissez et vous encouragez.";
  }

  if (otherPlanet === "venus") {
    if (harmonious) {
      return "Les échanges peuvent être doux, agréables et diplomates, facilitant les déclarations d’affection et la réconciliation.";
    }

    if (challenging) {
      return "Les mots utilisés pour exprimer l’affection peuvent ne pas toujours correspondre à ce que l’autre souhaite entendre.";
    }

    return "La tendresse, le charme et les valeurs personnelles influencent fortement vos conversations.";
  }

  if (otherPlanet === "mars") {
    if (harmonious) {
      return "Les échanges peuvent être dynamiques, francs et motivants, avec une capacité à transformer rapidement les idées en action.";
    }

    if (challenging) {
      return "Les discussions peuvent devenir rapides, défensives ou impulsives lorsque chacun cherche à imposer son point de vue.";
    }

    return "Cette connexion stimule les débats, les décisions et l’expression directe des opinions.";
  }

  if (
    otherPlanet === "saturn" ||
    otherPlanet === "saturne"
  ) {
    if (harmonious) {
      return "La communication peut gagner en sérieux, en clarté et en fiabilité, particulièrement dans les décisions importantes.";
    }

    if (challenging) {
      return "L’un peut parfois se sentir jugé, corrigé ou limité dans sa manière de s’exprimer.";
    }

    return "Les échanges soulignent les thèmes de responsabilité, de prudence et d’engagement.";
  }

  return "Cet aspect influence la manière dont vos idées, vos paroles et vos réactions mentales interagissent.";
}

function getStrengthText(
  sign1: string,
  sign2: string,
): string {
  const element1 = getElement(sign1);
  const element2 = getElement(sign2);

  if (
    sign1 !== "Non précisé" &&
    normalizeValue(sign1) ===
      normalizeValue(sign2)
  ) {
    return "Vous pouvez saisir rapidement la logique de l’autre et développer un langage commun très personnel.";
  }

  if (
    element1 !== "Non précisé" &&
    element1 === element2
  ) {
    return "Vos raisonnements partagent une base similaire, ce qui facilite la coopération et la prise de décision.";
  }

  return "Vos différences mentales peuvent élargir votre manière de voir les situations et vous aider à envisager davantage de solutions.";
}

function getChallengeText(
  sign1: string,
  sign2: string,
): string {
  const element1 = getElement(sign1);
  const element2 = getElement(sign2);

  if (
    sign1 !== "Non précisé" &&
    normalizeValue(sign1) ===
      normalizeValue(sign2)
  ) {
    return "Vous pouvez parfois présumer que l’autre comprend automatiquement, sans prendre le temps d’expliquer clairement vos attentes.";
  }

  if (
    element1 !== "Non précisé" &&
    element1 === element2
  ) {
    return "Vous pouvez renforcer mutuellement certaines habitudes de pensée et négliger les points de vue extérieurs.";
  }

  return "Vos rythmes de réflexion peuvent différer. L’un peut répondre immédiatement alors que l’autre a besoin de temps pour comprendre ou formuler sa pensée.";
}

function CommunicationStyleCard({
  person,
  fallbackName,
}: {
  person: SafeCompatibilityPerson;
  fallbackName: string;
}) {
  const name =
    getPersonName(
      person,
      fallbackName,
    );

  const mercurySign =
    getMercurySign(person);

  return (
    <View
      style={localStyles.styleCard}
      wrap={false}
    >
      <View
        style={localStyles.styleCardHeader}
      >
        <View
          style={localStyles.styleSymbolFrame}
        >
          <Text
            style={localStyles.styleSymbol}
          >
            ☿
          </Text>
        </View>

        <Text
          style={localStyles.styleCardTitle}
        >
          La communication de {name}
        </Text>
      </View>

      <Text
        style={localStyles.styleCardText}
      >
        Mercure en {mercurySign}.{" "}
        {getCommunicationStyle(mercurySign)}
      </Text>
    </View>
  );
}

function AspectCard({
  aspect,
}: {
  aspect: CommunicationAspect;
}) {
  const person1Planet =
    translateCompatibilityPlanet(
      aspect.person1Planet,
    );

  const person2Planet =
    translateCompatibilityPlanet(
      aspect.person2Planet,
    );

  return (
    <View
      style={localStyles.aspectCard}
      wrap={false}
    >
      <View
        style={localStyles.aspectSymbolFrame}
      >
        <Text
          style={localStyles.aspectSymbol}
        >
          {getAspectSymbol(aspect.type)}
        </Text>
      </View>

      <View
        style={localStyles.aspectContent}
      >
        <Text
          style={localStyles.aspectTitle}
        >
          {person1Planet}{" "}
          {translateCompatibilityAspect(
            aspect.type,
          )}{" "}
          {person2Planet}
          {" • orbe "}
          {aspect.orb.toFixed(1)}°
        </Text>

        <Text
          style={localStyles.aspectText}
        >
          {getCommunicationAspectInterpretation(
            aspect,
          )}
        </Text>
      </View>

      <Text
        style={localStyles.aspectNature}
      >
        {getAspectNature(aspect.type)}
      </Text>
    </View>
  );
}

export default function CompatibilityCommunication({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const person1Name =
    getPersonName(
      person1,
      "Première personne",
    );

  const person2Name =
    getPersonName(
      person2,
      "Deuxième personne",
    );

  const mercurySign1 =
    getMercurySign(person1);

  const mercurySign2 =
    getMercurySign(person2);

  const communicationAspects =
    getCommunicationAspects(aspects);

  return (
    <Page
      size="A4"
      style={localStyles.page}
    >
      <View
        style={localStyles.topAccent}
        fixed
      />

      <View
        style={localStyles.outerBorder}
        fixed
      />

      <View
        style={localStyles.innerBorder}
        fixed
      />

      <View
        style={
          localStyles.decorativeCircleTop
        }
        fixed
      />

      <View
        style={
          localStyles.decorativeCircleBottom
        }
        fixed
      />

      <View style={localStyles.content}>
        <View
          style={localStyles.header}
          wrap={false}
        >
          <Image
            src={LOGO_URL}
            style={localStyles.logo}
          />

          <Text
            style={localStyles.sectionLabel}
          >
            Dialogue et compréhension
          </Text>

          <Text style={localStyles.title}>
            Votre compatibilité de communication
          </Text>

          <Text
            style={localStyles.subtitle}
          >
            Mercure révèle votre manière de
            penser, d’écouter, d’expliquer et
            de transformer vos idées en mots.
          </Text>

          <View
            style={localStyles.titleDivider}
          />
        </View>

        <View
          style={localStyles.namesCard}
          wrap={false}
        >
          <View
            style={
              localStyles.namesAccentLeft
            }
          />

          <View
            style={
              localStyles.namesAccentRight
            }
          />

          <Text style={localStyles.name}>
            {person1Name}
          </Text>

          <Text
            style={
              localStyles.nameSeparator
            }
          >
            ☿
          </Text>

          <Text style={localStyles.name}>
            {person2Name}
          </Text>
        </View>

        <View
          style={
            localStyles.mercuryComparison
          }
          wrap={false}
        >
          <View
            style={localStyles.mercuryAccent}
          />

          <View
            style={localStyles.mercuryHeader}
          >
            <View
              style={
                localStyles.mercuryIconFrame
              }
            >
              <Image
                src={PLANET_ICONS.Mercury}
                style={localStyles.mercuryIcon}
              />
            </View>

            <View
              style={localStyles.mercuryHeading}
            >
              <Text
                style={localStyles.mercuryLabel}
              >
                Pensée, parole et compréhension
              </Text>

              <Text
                style={localStyles.mercuryTitle}
              >
                La rencontre de vos deux Mercure
              </Text>

              <Text
                style={localStyles.mercuryIntro}
              >
                Cette comparaison montre comment
                vos raisonnements, vos mots et vos
                rythmes mentaux peuvent se
                comprendre ou demander certains
                ajustements.
              </Text>
            </View>
          </View>

          <View
            style={localStyles.placementRow}
          >
            <View
              style={localStyles.placementCard}
            >
              <Text
                style={localStyles.placementName}
              >
                {person1Name}
              </Text>

              <Text
                style={localStyles.placementValue}
              >
                Mercure en {mercurySign1}
              </Text>

              <Text
                style={localStyles.placementStyle}
              >
                Élément {getElement(mercurySign1)}
              </Text>
            </View>

            <View
              style={localStyles.placementCenter}
            >
              <View
                style={
                  localStyles.placementCenterCircle
                }
              >
                <Text
                  style={
                    localStyles.placementCenterSymbol
                  }
                >
                  ☿
                </Text>
              </View>
            </View>

            <View
              style={localStyles.placementCard}
            >
              <Text
                style={localStyles.placementName}
              >
                {person2Name}
              </Text>

              <Text
                style={localStyles.placementValue}
              >
                Mercure en {mercurySign2}
              </Text>

              <Text
                style={localStyles.placementStyle}
              >
                Élément {getElement(mercurySign2)}
              </Text>
            </View>
          </View>

          <Text
            style={
              localStyles.interpretationTitle
            }
          >
            Votre dynamique mentale
          </Text>

          <Text
            style={
              localStyles.interpretationText
            }
          >
            {getMercuryCompatibilityText(
              mercurySign1,
              mercurySign2,
            )}
          </Text>
        </View>

        <View
          style={localStyles.stylesSection}
          wrap={false}
        >
          <Text
            style={localStyles.sectionTitle}
          >
            Votre manière personnelle de communiquer
          </Text>

          <View
            style={localStyles.styleCardsRow}
          >
            <CommunicationStyleCard
              person={person1}
              fallbackName="la première personne"
            />

            <CommunicationStyleCard
              person={person2}
              fallbackName="la deuxième personne"
            />
          </View>
        </View>

        {communicationAspects.length > 0 && (
          <View
            style={localStyles.aspectsSection}
            wrap={false}
          >
            <Text
              style={localStyles.sectionTitle}
            >
              Vos principales interactions mentales
            </Text>

            {communicationAspects.map(
              (aspect) => (
                <AspectCard
                  key={aspect.id}
                  aspect={aspect}
                />
              ),
            )}
          </View>
        )}

        <View
          style={localStyles.synthesisRow}
          wrap={false}
        >
          <View
            style={localStyles.synthesisCard}
          >
            <Text
              style={
                localStyles.synthesisCardTitle
              }
            >
              Votre force
            </Text>

            <Text
              style={
                localStyles.synthesisCardText
              }
            >
              {getStrengthText(
                mercurySign1,
                mercurySign2,
              )}
            </Text>
          </View>

          <View
            style={localStyles.synthesisCard}
          >
            <Text
              style={
                localStyles.synthesisCardTitle
              }
            >
              Votre point de vigilance
            </Text>

            <Text
              style={
                localStyles.synthesisCardText
              }
            >
              {getChallengeText(
                mercurySign1,
                mercurySign2,
              )}
            </Text>
          </View>
        </View>

        <View
          style={localStyles.adviceCard}
          wrap={false}
        >
          <View
            style={
              localStyles.adviceSymbolFrame
            }
          >
            <Text
              style={localStyles.adviceSymbol}
            >
              ✦
            </Text>
          </View>

          <View
            style={localStyles.adviceContent}
          >
            <Text
              style={localStyles.adviceTitle}
            >
              Votre clé de communication
            </Text>

            <Text
              style={localStyles.adviceText}
            >
              Lorsque le sujet devient important,
              ralentissez la conversation et
              reformulez ce que vous avez compris
              avant de répondre. Cette simple
              habitude permet de distinguer une
              véritable divergence d’un simple
              malentendu dans les mots ou dans le
              ton employé.
            </Text>
          </View>
        </View>
      </View>

      <View
        style={localStyles.footer}
        fixed
      >
        <Text
          style={localStyles.footerText}
        >
          Luna Astralis • Rapport de synastrie
        </Text>

        <Text
          style={localStyles.footerPage}
        >
          8
        </Text>
      </View>
    </Page>
  );
}
