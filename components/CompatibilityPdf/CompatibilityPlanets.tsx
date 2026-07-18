import type { ReactNode } from "react";

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

const styles = StyleSheet.create({
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

    marginBottom: 14,
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
    width: "88%",

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

    marginBottom: 11,

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

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorFrame: {
    width: 27,
    height: 27,

    borderRadius: 13.5,

    borderWidth: 0.6,
    borderColor: GOLD,

    backgroundColor: NAVY_CARD_LIGHT,

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorIcon: {
    width: 18,
    height: 18,

    objectFit: "contain",
  },

  planetComparison: {
    position: "relative",

    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 14,

    marginBottom: 10,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },

  planetAccent: {
    position: "absolute",

    top: -1,
    left: "34%",

    width: "32%",
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  planetHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 9,
  },

  planetIconFrame: {
    width: 42,
    height: 42,

    borderRadius: 21,

    borderWidth: 0.75,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  planetIcon: {
    width: 26,
    height: 26,

    objectFit: "contain",
  },

  planetHeading: {
    flex: 1,
  },

  planetLabel: {
    fontSize: 5.8,
    letterSpacing: 1.4,

    color: "#cbb98e",

    textTransform: "uppercase",

    marginBottom: 3,
  },

  planetTitle: {
    fontSize: 13,

    color: CREAM,

    marginBottom: 3,
  },

  planetIntro: {
    fontSize: 6.35,
    lineHeight: 1.35,

    color: SOFT_TEXT,
  },

  placementRow: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",

    marginBottom: 9,
  },

  placementCard: {
    width: "43%",

    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 9,

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
    fontSize: 10.5,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 3,
  },

  placementStyle: {
    fontSize: 6.1,
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

  placementCenterIcon: {
    width: 17,
    height: 17,

    objectFit: "contain",
  },

  interpretationTitle: {
    fontSize: 8.6,

    color: CREAM,

    marginBottom: 5,
  },

  interpretationText: {
    fontSize: 6.8,
    lineHeight: 1.45,

    color: MUTED_CREAM,

    textAlign: "justify",
  },

  section: {
    marginBottom: 9,
  },

  sectionTitle: {
    fontSize: 6.2,
    letterSpacing: 1.6,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 7,
  },

  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoCard: {
    width: "48.4%",
    minHeight: 80,

    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 10,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 6,
  },

  cardIconFrame: {
    width: 25,
    height: 25,

    borderRadius: 12.5,

    borderWidth: 0.6,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 7,
  },

  cardIcon: {
    width: 15,
    height: 15,

    objectFit: "contain",
  },

  cardTitle: {
    flex: 1,

    fontSize: 7.8,

    color: CREAM,
  },

  cardText: {
    fontSize: 6.15,
    lineHeight: 1.4,

    color: SOFT_TEXT,

    textAlign: "justify",
  },

  aspectCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 6,
    paddingBottom: 6,
    paddingHorizontal: 9,

    marginBottom: 4,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },

  aspectIconFrame: {
    width: 27,
    height: 27,

    borderRadius: 13.5,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 9,
  },

  aspectIcon: {
    width: 17,
    height: 17,

    objectFit: "contain",
  },

  aspectContent: {
    flex: 1,
  },

  aspectTitle: {
    fontSize: 7.1,

    color: CREAM,

    marginBottom: 2,
  },

  aspectText: {
    fontSize: 5.8,
    lineHeight: 1.34,

    color: SOFT_TEXT,
  },

  aspectNature: {
    width: 61,

    fontSize: 5.4,
    lineHeight: 1.25,

    color: MUTED_CREAM,

    textAlign: "right",
  },

  synthesisRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 9,
  },

  synthesisCard: {
    width: "48.4%",
    minHeight: 72,

    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 10,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  synthesisTitle: {
    fontSize: 7.3,

    color: CREAM,

    marginBottom: 4,
  },

  synthesisText: {
    fontSize: 6,
    lineHeight: 1.38,

    color: SOFT_TEXT,

    textAlign: "justify",
  },

  adviceCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 12,

    backgroundColor: NAVY_CARD,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  adviceIconFrame: {
    width: 29,
    height: 29,

    borderRadius: 14.5,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 10,
  },

  adviceIcon: {
    width: 18,
    height: 18,

    objectFit: "contain",
  },

  adviceContent: {
    flex: 1,
  },

  adviceTitle: {
    fontSize: 7.3,

    color: CREAM,

    marginBottom: 3,
  },

  adviceText: {
    fontSize: 6.1,
    lineHeight: 1.38,

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

type PlanetName =
  | "Jupiter"
  | "Saturn"
  | "Uranus"
  | "Neptune"
  | "Pluto";

type PlanetConfig = {
  planet: PlanetName;
  frenchName: string;
  icon: string;
  pageNumber: number;
  label: string;
  title: string;
  subtitle: string;
  comparisonTitle: string;
  comparisonIntro: string;
  personalSectionTitle: string;
  aspectsTitle: string;
  strengthTitle: string;
  challengeTitle: string;
  adviceTitle: string;
  adviceText: string;
};

type RelevantAspect = {
  id: string;
  person1Planet: string;
  person2Planet: string;
  type: CompatibilityAspect["type"];
  orb: number;
};

const PLANET_CONFIGS: PlanetConfig[] = [
  {
    planet: "Jupiter",
    frenchName: "Jupiter",
    icon: PLANET_ICONS.jupiter,
    pageNumber: 17,
    label: "Expansion, confiance et croissance",
    title: "Jupiter dans votre relation",
    subtitle:
      "Jupiter montre comment votre couple grandit, partage ses espoirs et transforme les expériences communes en possibilités nouvelles.",
    comparisonTitle:
      "La rencontre de vos deux Jupiter",
    comparisonIntro:
      "Cette comparaison révèle vos façons respectives de chercher le bonheur, de croire en l’avenir et d’encourager l’expansion du couple.",
    personalSectionTitle:
      "Votre manière personnelle de grandir",
    aspectsTitle:
      "Vos principales interactions d’expansion",
    strengthTitle:
      "Votre potentiel de croissance",
    challengeTitle:
      "Votre excès possible",
    adviceTitle:
      "Votre clé d’expansion",
    adviceText:
      "Choisissez régulièrement un projet qui agrandit votre monde commun : voyage, apprentissage, création ou objectif partagé. Jupiter devient réellement bénéfique lorsque l’enthousiasme est accompagné d’un plan concret.",
  },
  {
    planet: "Saturn",
    frenchName: "Saturne",
    icon: PLANET_ICONS.saturn,
    pageNumber: 18,
    label: "Temps, responsabilité et construction",
    title: "Saturne dans votre relation",
    subtitle:
      "Saturne révèle ce qui demande patience, maturité et engagement afin que votre lien puisse résister au temps et aux responsabilités.",
    comparisonTitle:
      "La rencontre de vos deux Saturne",
    comparisonIntro:
      "Cette comparaison montre vos rapports respectifs au devoir, aux limites, à la sécurité et aux engagements qui structurent la relation.",
    personalSectionTitle:
      "Votre manière personnelle de construire",
    aspectsTitle:
      "Vos principales interactions de stabilité",
    strengthTitle:
      "Votre force de construction",
    challengeTitle:
      "Votre poids relationnel",
    adviceTitle:
      "Votre clé de solidité",
    adviceText:
      "Transformez les obligations en accords clairement choisis. Répartissez les responsabilités, reconnaissez les efforts de chacun et gardez une place pour la douceur afin que la stabilité ne devienne jamais une prison.",
  },
  {
    planet: "Uranus",
    frenchName: "Uranus",
    icon: PLANET_ICONS.uranus,
    pageNumber: 19,
    label: "Liberté, changement et renouveau",
    title: "Uranus dans votre relation",
    subtitle:
      "Uranus montre où votre couple recherche de l’espace, de l’originalité et une manière unique d’évoluer sans perdre son individualité.",
    comparisonTitle:
      "La rencontre de vos deux Uranus",
    comparisonIntro:
      "Cette comparaison révèle vos besoins de liberté, votre ouverture au changement et la façon dont l’imprévu peut réveiller ou déstabiliser le lien.",
    personalSectionTitle:
      "Votre manière personnelle de vous renouveler",
    aspectsTitle:
      "Vos principales interactions de changement",
    strengthTitle:
      "Votre pouvoir de renouveau",
    challengeTitle:
      "Votre instabilité possible",
    adviceTitle:
      "Votre clé de liberté",
    adviceText:
      "Créez volontairement de la nouveauté avant que la routine ne devienne étouffante. Un couple vivant peut accorder de l’espace à chacun tout en maintenant des repères relationnels fiables et rassurants.",
  },
  {
    planet: "Neptune",
    frenchName: "Neptune",
    icon: PLANET_ICONS.neptune,
    pageNumber: 20,
    label: "Rêves, intuition et idéal amoureux",
    title: "Neptune dans votre relation",
    subtitle:
      "Neptune révèle la sensibilité invisible du lien, vos rêves communs, votre compassion et les zones où l’idéal peut parfois brouiller la réalité.",
    comparisonTitle:
      "La rencontre de vos deux Neptune",
    comparisonIntro:
      "Cette comparaison montre comment vous rêvez, ressentez l’invisible et recherchez une connexion qui dépasse les simples réalités du quotidien.",
    personalSectionTitle:
      "Votre manière personnelle de rêver",
    aspectsTitle:
      "Vos principales interactions intuitives",
    strengthTitle:
      "Votre connexion subtile",
    challengeTitle:
      "Votre risque d’illusion",
    adviceTitle:
      "Votre clé de clarté",
    adviceText:
      "Préservez la poésie de votre lien tout en vérifiant régulièrement les faits, les attentes et les promesses. L’intuition devient une force lorsqu’elle dialogue avec une communication honnête et des limites claires.",
  },
  {
    planet: "Pluto",
    frenchName: "Pluton",
    icon: PLANET_ICONS.pluto,
    pageNumber: 21,
    label: "Intensité, pouvoir et transformation",
    title: "Pluton dans votre relation",
    subtitle:
      "Pluton montre comment votre relation peut révéler des émotions profondes, transformer vos blessures et éveiller une puissante force de régénération.",
    comparisonTitle:
      "La rencontre de vos deux Pluton",
    comparisonIntro:
      "Cette comparaison met en lumière vos façons respectives de vivre l’intensité, le contrôle, la vulnérabilité et les grandes transformations intérieures.",
    personalSectionTitle:
      "Votre manière personnelle de vous transformer",
    aspectsTitle:
      "Vos principales interactions de transformation",
    strengthTitle:
      "Votre puissance de guérison",
    challengeTitle:
      "Votre lutte de pouvoir possible",
    adviceTitle:
      "Votre clé de transformation",
    adviceText:
      "N’utilisez jamais le silence, la jalousie ou la pression pour obtenir de la sécurité. Nommez les peurs profondes avec respect : la vulnérabilité partagée transforme l’intensité en confiance et en guérison.",
  },
];

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

function getPlanetSign(
  person: SafeCompatibilityPerson,
  planet: PlanetName,
): string {
  const placement =
    getCompatibilityPlanet(
      person.planets,
      planet,
    );

  const sign =
    typeof placement?.sign === "string"
      ? placement.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getElement(
  sign: string,
): string {
  const normalized =
    normalizeValue(sign);

  if (
    ["belier", "lion", "sagittaire"].includes(
      normalized,
    )
  ) {
    return "Feu";
  }

  if (
    ["taureau", "vierge", "capricorne"].includes(
      normalized,
    )
  ) {
    return "Terre";
  }

  if (
    ["gemeaux", "balance", "verseau"].includes(
      normalized,
    )
  ) {
    return "Air";
  }

  if (
    ["cancer", "scorpion", "poissons"].includes(
      normalized,
    )
  ) {
    return "Eau";
  }

  return "Non précisé";
}

function getPlanetStyle(
  planet: PlanetName,
  sign: string,
): string {
  const normalized =
    normalizeValue(sign);

  const stylesByPlanet: Record<
    PlanetName,
    Record<string, string>
  > = {
    Jupiter: {
      belier:
        "Grandit par l’action, le courage et les nouveaux départs. L’enthousiasme augmente lorsqu’un défi peut être relevé rapidement.",
      taureau:
        "Grandit par la stabilité, la patience et la création d’une sécurité concrète. Les plaisirs simples nourrissent la confiance.",
      gemeaux:
        "Grandit par les échanges, les apprentissages et la diversité des expériences. La curiosité ouvre constamment de nouvelles possibilités.",
      cancer:
        "Grandit par les liens affectifs, la famille et le sentiment d’appartenance. La générosité s’exprime à travers la protection.",
      lion:
        "Grandit par la créativité, la confiance et le rayonnement personnel. Le bonheur augmente lorsqu’il est partagé avec générosité.",
      vierge:
        "Grandit par l’utilité, l’amélioration et le développement de compétences concrètes. La confiance se construit dans les petits progrès.",
      balance:
        "Grandit par les alliances, l’harmonie et la coopération. Les opportunités apparaissent souvent grâce aux relations et aux échanges équilibrés.",
      scorpion:
        "Grandit par la profondeur, la transformation et la compréhension des vérités cachées. Les crises peuvent devenir des passages de puissance.",
      sagittaire:
        "Grandit par l’aventure, la liberté, les voyages et la recherche de sens. L’optimisme est naturel et contagieux.",
      capricorne:
        "Grandit par l’ambition, la discipline et les objectifs durables. La réussite prend forme à travers la constance et la responsabilité.",
      verseau:
        "Grandit par l’innovation, les réseaux et les idées collectives. Les projets originaux stimulent l’espoir et l’ouverture.",
      poissons:
        "Grandit par l’intuition, la compassion et l’imagination. La foi se nourrit de sensibilité, d’art et de connexion spirituelle.",
    },

    Saturn: {
      belier:
        "Apprend la patience dans l’action et la maîtrise de l’impulsivité. La solidité vient d’un courage discipliné.",
      taureau:
        "Construit lentement, protège les acquis et recherche une sécurité durable. Le changement demande du temps et des preuves concrètes.",
      gemeaux:
        "Structure les idées, les mots et les apprentissages. La maturité passe par une communication plus précise et responsable.",
      cancer:
        "Développe la responsabilité affective et la sécurité intérieure. Les devoirs familiaux peuvent prendre une grande importance.",
      lion:
        "Apprend à assumer son rayonnement sans dépendre constamment de la reconnaissance. La créativité gagne en profondeur avec le temps.",
      vierge:
        "Construit par le travail, l’organisation et le sens du détail. Le perfectionnisme doit rester au service de la progression.",
      balance:
        "Prend les engagements relationnels au sérieux et recherche des accords durables. Les limites doivent être justes et clairement partagées.",
      scorpion:
        "Apprend à gérer le contrôle, la confiance et la vulnérabilité. La solidité naît d’une grande honnêteté émotionnelle.",
      sagittaire:
        "Structure les croyances, les projets et la quête de liberté. La vision devient crédible lorsqu’elle repose sur une méthode.",
      capricorne:
        "Possède un fort sens du devoir, de l’endurance et de la construction. Les objectifs à long terme occupent une place centrale.",
      verseau:
        "Structure l’indépendance, les idées nouvelles et la contribution au collectif. La liberté doit coexister avec la responsabilité.",
      poissons:
        "Apprend à donner une forme concrète aux rêves et à protéger sa sensibilité par des limites saines.",
    },

    Uranus: {
      belier:
        "Recherche une liberté immédiate, audacieuse et active. Les changements sont souvent rapides et initiés sans attendre l’approbation.",
      taureau:
        "Réinvente progressivement la sécurité, les valeurs et le rapport au matériel. Les changements profonds peuvent d’abord rencontrer de la résistance.",
      gemeaux:
        "Innove par les idées, les technologies et les nouvelles manières de communiquer. Le besoin de stimulation mentale est élevé.",
      cancer:
        "Réinvente la famille, le foyer et l’expression émotionnelle. Le sentiment d’appartenance doit laisser de la place à l’individualité.",
      lion:
        "Exprime une créativité libre, originale et parfois spectaculaire. Le besoin d’être soi-même refuse les rôles trop rigides.",
      vierge:
        "Innove dans le travail, les méthodes et les habitudes quotidiennes. Les solutions originales cherchent une utilité concrète.",
      balance:
        "Réinvente les relations, les accords et la manière de vivre à deux. L’égalité et l’espace personnel sont essentiels.",
      scorpion:
        "Provoque des transformations soudaines dans l’intimité, le pouvoir et les attachements profonds. L’intensité exige de la liberté intérieure.",
      sagittaire:
        "Recherche l’aventure, l’indépendance intellectuelle et les horizons nouveaux. Les convictions évoluent à travers l’expérience.",
      capricorne:
        "Réforme les structures, les ambitions et les modèles d’autorité. Le changement devient durable lorsqu’il est stratégiquement organisé.",
      verseau:
        "Exprime fortement l’originalité, l’indépendance et la vision du futur. Les conventions sont naturellement remises en question.",
      poissons:
        "Renouvelle la spiritualité, l’imaginaire et la sensibilité collective. L’intuition peut surgir de manière soudaine et inspirante.",
    },

    Neptune: {
      belier:
        "Rêve d’action héroïque, de courage et de nouveaux départs. L’élan intuitif doit être vérifié avant de devenir une décision.",
      taureau:
        "Recherche un idéal de paix, de beauté et de sécurité sensorielle. La douceur et la nature nourrissent profondément l’imaginaire.",
      gemeaux:
        "Rêve par les mots, les idées et les multiples possibilités. La pensée imaginative doit éviter la dispersion ou les messages ambigus.",
      cancer:
        "Possède une grande sensibilité aux ambiances, à la famille et aux mémoires émotionnelles. La compassion est profonde.",
      lion:
        "Rêve d’un amour créatif, lumineux et inspirant. L’expression artistique peut devenir une voie importante de connexion.",
      vierge:
        "Cherche à donner une utilité concrète à la compassion et aux idéaux. Le risque consiste à vouloir sauver ou réparer sans limites.",
      balance:
        "Idéalise facilement l’amour, la beauté et l’harmonie relationnelle. La clarté des attentes protège contre les désillusions.",
      scorpion:
        "Ressent les liens invisibles avec intensité et profondeur. L’intuition est puissante, mais les peurs peuvent parfois colorer les perceptions.",
      sagittaire:
        "Rêve de sens, de voyages et de vérités universelles. La foi et l’imagination ouvrent de vastes horizons.",
      capricorne:
        "Cherche à matérialiser un idéal dans le monde réel. Les rêves ont besoin d’une structure pour ne pas devenir une obligation pesante.",
      verseau:
        "Rêve d’un avenir collectif plus libre et plus humain. Les idéaux sociaux ou spirituels peuvent unir fortement les partenaires.",
      poissons:
        "Exprime naturellement la compassion, l’intuition et l’imagination. Les limites claires sont indispensables pour préserver l’équilibre.",
    },

    Pluto: {
      belier:
        "Se transforme par l’affirmation de soi, le courage et les confrontations directes. La puissance doit éviter de devenir domination.",
      taureau:
        "Transforme profondément les valeurs, la sécurité et les attachements matériels. Le lâcher-prise peut demander beaucoup de temps.",
      gemeaux:
        "Transforme les idées, les mots et les croyances mentales. Les conversations peuvent avoir un pouvoir révélateur considérable.",
      cancer:
        "Transforme les racines familiales, les mémoires et la sécurité émotionnelle. La guérison passe par une grande profondeur affective.",
      lion:
        "Transforme l’identité créative, le besoin de reconnaissance et l’expression du pouvoir personnel. Le cœur apprend à rayonner sans contrôler.",
      vierge:
        "Transforme les habitudes, le travail et la relation au contrôle quotidien. La guérison vient souvent d’un changement méthodique.",
      balance:
        "Transforme les relations, les compromis et les rapports de pouvoir dans le couple. L’égalité réelle devient un enjeu central.",
      scorpion:
        "Vit intensément la transformation, la fusion et la régénération. Les vérités cachées cherchent naturellement à remonter à la surface.",
      sagittaire:
        "Transforme les croyances, les convictions et la recherche de sens. Les expériences extrêmes peuvent modifier profondément la vision du monde.",
      capricorne:
        "Transforme l’ambition, l’autorité et les structures durables. La puissance se construit à travers la maîtrise et la responsabilité.",
      verseau:
        "Transforme les réseaux, les idéaux collectifs et les modèles de liberté. Le pouvoir peut être utilisé pour réinventer l’avenir.",
      poissons:
        "Transforme les blessures invisibles, la compassion et la vie spirituelle. La guérison demande de distinguer l’intuition de la fuite.",
    },
  };

  return (
    stylesByPlanet[planet][normalized] ||
    "Les données disponibles ne permettent pas encore de préciser entièrement cette expression planétaire."
  );
}

function getCompatibilityText(
  planet: PlanetName,
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      "Les deux positions planétaires ne sont pas entièrement disponibles. " +
      "Cette dynamique pourra être approfondie lorsque les thèmes complets seront fournis."
    );
  }

  const normalized1 =
    normalizeValue(sign1);

  const normalized2 =
    normalizeValue(sign2);

  const element1 =
    getElement(sign1);

  const element2 =
    getElement(sign2);

  const frenchPlanet =
    planet === "Saturn"
      ? "Saturne"
      : planet === "Pluto"
        ? "Pluton"
        : planet;

  const themes: Record<
    PlanetName,
    string
  > = {
    Jupiter:
      "vos espoirs, votre croissance et votre vision de l’avenir",
    Saturn:
      "vos responsabilités, vos limites et votre manière de construire",
    Uranus:
      "vos besoins de liberté, de changement et de renouvellement",
    Neptune:
      "vos rêves, votre intuition et votre idéal relationnel",
    Pluto:
      "votre intensité, votre pouvoir de transformation et votre vulnérabilité",
  };

  if (normalized1 === normalized2) {
    return (
      `Vos deux ${frenchPlanet} en ${sign1} indiquent une manière très semblable de vivre ${themes[planet]}. ` +
      "Cette proximité facilite la reconnaissance mutuelle et crée une base commune forte. " +
      "Elle peut toutefois amplifier les mêmes excès ou les mêmes angles morts si aucun des deux ne prend du recul."
    );
  }

  if (element1 === element2) {
    return (
      `Vos ${frenchPlanet} en ${sign1} et en ${sign2} appartiennent tous deux à l’élément ${element1}. ` +
      `Vos façons de vivre ${themes[planet]} reposent donc sur une sensibilité comparable. ` +
      "Les expressions diffèrent, mais le rythme intérieur reste suffisamment proche pour favoriser la coopération."
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
      `Vos ${frenchPlanet} en ${sign1} et en ${sign2} fonctionnent différemment, ` +
      `mais les éléments ${element1} et ${element2} peuvent se compléter. ` +
      "L’un stimule le mouvement, la vision ou l’expression, tandis que l’autre apporte profondeur, réalisme ou continuité. " +
      "Cette complémentarité devient une richesse lorsque chacun respecte le rythme de l’autre."
    );
  }

  return (
    `Vos ${frenchPlanet} en ${sign1} et en ${sign2} abordent ${themes[planet]} selon des logiques différentes. ` +
    "L’un peut rechercher davantage d’action, de raison ou de liberté, tandis que l’autre privilégie la sécurité, l’émotion ou l’adaptation. " +
    "Votre équilibre repose sur des attentes clairement nommées plutôt que supposées."
  );
}

function isPlanet(
  planetName: string,
  target: PlanetName,
): boolean {
  const normalized =
    normalizeValue(planetName);

  const aliases: Record<
    PlanetName,
    string[]
  > = {
    Jupiter: ["jupiter"],
    Saturn: ["saturn", "saturne"],
    Uranus: ["uranus"],
    Neptune: ["neptune"],
    Pluto: ["pluto", "pluton"],
  };

  return aliases[target].includes(
    normalized,
  );
}

function getRelevantAspects(
  aspects: CompatibilityAspect[],
  planet: PlanetName,
): RelevantAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects
    .filter(
      (aspect) =>
        isPlanet(
          aspect.person1Planet || "",
          planet,
        ) ||
        isPlanet(
          aspect.person2Planet || "",
          planet,
        ),
    )
    .sort(
      (first, second) =>
        first.orb - second.orb,
    )
    .slice(0, 3)
    .map((aspect, index) => ({
      id: `${planet.toLowerCase()}-${index}`,
      person1Planet:
        aspect.person1Planet,
      person2Planet:
        aspect.person2Planet,
      type: aspect.type,
      orb: aspect.orb,
    }));
}

function isHarmonious(
  type: CompatibilityAspect["type"],
): boolean {
  return (
    type === "trine" ||
    type === "sextile"
  );
}

function isChallenging(
  type: CompatibilityAspect["type"],
): boolean {
  return (
    type === "square" ||
    type === "opposition" ||
    type === "quincunx"
  );
}

function getAspectNature(
  type: CompatibilityAspect["type"],
): string {
  if (isHarmonious(type)) {
    return "Énergie fluide";
  }

  if (type === "conjunction") {
    return "Influence amplifiée";
  }

  if (type === "opposition") {
    return "Polarité à équilibrer";
  }

  if (type === "square") {
    return "Tension créatrice";
  }

  if (type === "quincunx") {
    return "Ajustement nécessaire";
  }

  return "Influence relationnelle";
}

function getAspectInterpretation(
  planet: PlanetName,
  aspect: RelevantAspect,
): string {
  const harmonious =
    isHarmonious(aspect.type);

  const challenging =
    isChallenging(aspect.type);

  const texts: Record<
    PlanetName,
    {
      harmonious: string;
      challenging: string;
      conjunction: string;
    }
  > = {
    Jupiter: {
      harmonious:
        "Cette interaction favorise la confiance, l’encouragement mutuel et le sentiment que la relation ouvre de nouvelles possibilités.",
      challenging:
        "Cette interaction peut amplifier les attentes, les promesses ou les excès. L’enthousiasme gagne à être ramené vers des objectifs réalistes.",
      conjunction:
        "Cette connexion intensifie l’optimisme, la générosité et le désir de grandir ensemble, tout en amplifiant parfois les excès.",
    },

    Saturn: {
      harmonious:
        "Cette interaction soutient la fidélité, la constance et la capacité à assumer ensemble les responsabilités importantes.",
      challenging:
        "Cette interaction peut créer un sentiment de jugement, de lourdeur ou de limitation. Les règles doivent être choisies ensemble.",
      conjunction:
        "Cette connexion donne au lien un poids important et un potentiel de durée, mais demande patience, respect et maturité.",
    },

    Uranus: {
      harmonious:
        "Cette interaction apporte fraîcheur, liberté et stimulation. Chacun peut encourager l’autre à devenir plus authentique.",
      challenging:
        "Cette interaction peut créer de l’instabilité, des réactions imprévisibles ou un besoin soudain de distance.",
      conjunction:
        "Cette connexion rend la relation inhabituelle, électrique et profondément stimulante, avec un fort besoin de liberté.",
    },

    Neptune: {
      harmonious:
        "Cette interaction favorise l’empathie, la douceur, l’inspiration et le sentiment d’une compréhension intuitive.",
      challenging:
        "Cette interaction peut brouiller les intentions, idéaliser la relation ou créer des attentes difficiles à vérifier.",
      conjunction:
        "Cette connexion renforce la sensibilité, le romantisme et l’impression d’un lien subtil, mais exige de la clarté.",
    },

    Pluto: {
      harmonious:
        "Cette interaction favorise la guérison profonde, la résilience et la capacité à transformer ensemble les périodes difficiles.",
      challenging:
        "Cette interaction peut réveiller jalousie, peur de perdre, contrôle ou luttes de pouvoir si les émotions restent cachées.",
      conjunction:
        "Cette connexion intensifie fortement le lien et peut provoquer une transformation durable chez les deux partenaires.",
    },
  };

  if (harmonious) {
    return texts[planet].harmonious;
  }

  if (challenging) {
    return texts[planet].challenging;
  }

  return texts[planet].conjunction;
}

function getStrengthText(
  planet: PlanetName,
  sign1: string,
  sign2: string,
): string {
  const sameSign =
    normalizeValue(sign1) ===
    normalizeValue(sign2);

  const sameElement =
    getElement(sign1) ===
    getElement(sign2);

  const base: Record<
    PlanetName,
    string
  > = {
    Jupiter:
      "Vous pouvez vous encourager, élargir vos horizons et faire circuler davantage d’espoir dans la relation.",
    Saturn:
      "Vous pouvez construire des repères solides, traverser les périodes exigeantes et donner une forme durable à vos engagements.",
    Uranus:
      "Vous pouvez maintenir la relation vivante, inventer vos propres règles et soutenir l’authenticité de chacun.",
    Neptune:
      "Vous pouvez développer une grande empathie, partager un imaginaire riche et vous inspirer mutuellement.",
    Pluto:
      "Vous pouvez transformer les crises en véritables passages de guérison et développer une confiance très profonde.",
  };

  if (sameSign) {
    return (
      `${base[planet]} ` +
      "Vos réactions semblables facilitent une compréhension immédiate de cette énergie."
    );
  }

  if (
    sameElement &&
    getElement(sign1) !==
      "Non précisé"
  ) {
    return (
      `${base[planet]} ` +
      "Vos éléments communs donnent un rythme compatible à cette dynamique."
    );
  }

  return base[planet];
}

function getChallengeText(
  planet: PlanetName,
  sign1: string,
  sign2: string,
): string {
  const differentElements =
    getElement(sign1) !==
    getElement(sign2);

  const base: Record<
    PlanetName,
    string
  > = {
    Jupiter:
      "L’optimisme peut devenir exagération, dépense excessive ou promesse difficile à tenir lorsque l’enthousiasme remplace la préparation.",
    Saturn:
      "Les responsabilités peuvent devenir lourdes si l’un impose les règles, critique l’autre ou porte silencieusement une charge disproportionnée.",
    Uranus:
      "Le besoin de liberté peut provoquer distance ou imprévisibilité si les changements surviennent sans explication ni repère rassurant.",
    Neptune:
      "L’idéalisation peut masquer les besoins réels, les désaccords ou les limites personnelles tant que les faits ne sont pas clairement vérifiés.",
    Pluto:
      "L’intensité peut se transformer en contrôle, jalousie ou rapport de force lorsque la peur de perdre n’est pas nommée avec honnêteté.",
  };

  if (differentElements) {
    return (
      `${base[planet]} ` +
      "Vos rythmes différents demandent une communication encore plus explicite."
    );
  }

  return base[planet];
}

function PageFrame({
  pageNumber,
  children,
}: {
  pageNumber: number;
  children: ReactNode;
}) {
  return (
    <Page
      size="A4"
      style={styles.page}
    >
      <View
        style={styles.topAccent}
        fixed
      />

      <View
        style={styles.outerBorder}
        fixed
      />

      <View
        style={styles.innerBorder}
        fixed
      />

      <View
        style={styles.decorativeCircleTop}
        fixed
      />

      <View
        style={styles.decorativeCircleBottom}
        fixed
      />

      <View style={styles.content}>
        {children}
      </View>

      <View
        style={styles.footer}
        fixed
      >
        <Text style={styles.footerText}>
          Luna Astralis • Rapport de synastrie
        </Text>

        <Text style={styles.footerPage}>
          {pageNumber}
        </Text>
      </View>
    </Page>
  );
}

function Header({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <View
      style={styles.header}
      wrap={false}
    >
      <Image
        src={LOGO_URL}
        style={styles.logo}
      />

      <Text style={styles.sectionLabel}>
        {label}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      <View style={styles.titleDivider} />
    </View>
  );
}

function NamesCard({
  person1Name,
  person2Name,
  icon,
}: {
  person1Name: string;
  person2Name: string;
  icon: string;
}) {
  return (
    <View
      style={styles.namesCard}
      wrap={false}
    >
      <View
        style={styles.namesAccentLeft}
      />

      <View
        style={styles.namesAccentRight}
      />

      <Text style={styles.name}>
        {person1Name}
      </Text>

      <View
        style={styles.nameSeparator}
      >
        <View
          style={styles.nameSeparatorFrame}
        >
          <Image
            src={icon}
            style={styles.nameSeparatorIcon}
          />
        </View>
      </View>

      <Text style={styles.name}>
        {person2Name}
      </Text>
    </View>
  );
}

function PersonalStyleCard({
  person,
  fallbackName,
  planet,
  frenchName,
  icon,
}: {
  person: SafeCompatibilityPerson;
  fallbackName: string;
  planet: PlanetName;
  frenchName: string;
  icon: string;
}) {
  const name =
    getPersonName(
      person,
      fallbackName,
    );

  const sign =
    getPlanetSign(
      person,
      planet,
    );

  return (
    <View
      style={styles.infoCard}
      wrap={false}
    >
      <View style={styles.cardHeader}>
        <View
          style={styles.cardIconFrame}
        >
          <Image
            src={icon}
            style={styles.cardIcon}
          />
        </View>

        <Text style={styles.cardTitle}>
          {name}
        </Text>
      </View>

      <Text style={styles.cardText}>
        {frenchName} en {sign}.{" "}
        {getPlanetStyle(
          planet,
          sign,
        )}
      </Text>
    </View>
  );
}

function AspectCard({
  planet,
  aspect,
}: {
  planet: PlanetName;
  aspect: RelevantAspect;
}) {
  return (
    <View
      style={styles.aspectCard}
      wrap={false}
    >
      <View
        style={styles.aspectIconFrame}
      >
        <Image
          src={LOGO_URL}
          style={styles.aspectIcon}
        />
      </View>

      <View style={styles.aspectContent}>
        <Text style={styles.aspectTitle}>
          {translateCompatibilityPlanet(
            aspect.person1Planet,
          )}{" "}
          {translateCompatibilityAspect(
            aspect.type,
          )}{" "}
          {translateCompatibilityPlanet(
            aspect.person2Planet,
          )}
          {" • orbe "}
          {aspect.orb.toFixed(1)}°
        </Text>

        <Text style={styles.aspectText}>
          {getAspectInterpretation(
            planet,
            aspect,
          )}
        </Text>
      </View>

      <Text style={styles.aspectNature}>
        {getAspectNature(aspect.type)}
      </Text>
    </View>
  );
}

function PlanetPage({
  config,
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps & {
  config: PlanetConfig;
}) {
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

  const sign1 =
    getPlanetSign(
      person1,
      config.planet,
    );

  const sign2 =
    getPlanetSign(
      person2,
      config.planet,
    );

  const relevantAspects =
    getRelevantAspects(
      aspects,
      config.planet,
    );

  return (
    <PageFrame
      pageNumber={config.pageNumber}
    >
      <Header
        label={config.label}
        title={config.title}
        subtitle={config.subtitle}
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        icon={config.icon}
      />

      <View
        style={styles.planetComparison}
        wrap={false}
      >
        <View
          style={styles.planetAccent}
        />

        <View style={styles.planetHeader}>
          <View
            style={styles.planetIconFrame}
          >
            <Image
              src={config.icon}
              style={styles.planetIcon}
            />
          </View>

          <View
            style={styles.planetHeading}
          >
            <Text
              style={styles.planetLabel}
            >
              {config.label}
            </Text>

            <Text
              style={styles.planetTitle}
            >
              {config.comparisonTitle}
            </Text>

            <Text
              style={styles.planetIntro}
            >
              {config.comparisonIntro}
            </Text>
          </View>
        </View>

        <View style={styles.placementRow}>
          <View
            style={styles.placementCard}
          >
            <Text
              style={styles.placementName}
            >
              {person1Name}
            </Text>

            <Text
              style={styles.placementValue}
            >
              {config.frenchName} en {sign1}
            </Text>

            <Text
              style={styles.placementStyle}
            >
              Élément {getElement(sign1)}
            </Text>
          </View>

          <View
            style={styles.placementCenter}
          >
            <View
              style={
                styles.placementCenterCircle
              }
            >
              <Image
                src={config.icon}
                style={
                  styles.placementCenterIcon
                }
              />
            </View>
          </View>

          <View
            style={styles.placementCard}
          >
            <Text
              style={styles.placementName}
            >
              {person2Name}
            </Text>

            <Text
              style={styles.placementValue}
            >
              {config.frenchName} en {sign2}
            </Text>

            <Text
              style={styles.placementStyle}
            >
              Élément {getElement(sign2)}
            </Text>
          </View>
        </View>

        <Text
          style={styles.interpretationTitle}
        >
          Votre dynamique commune
        </Text>

        <Text
          style={styles.interpretationText}
        >
          {getCompatibilityText(
            config.planet,
            sign1,
            sign2,
          )}
        </Text>
      </View>

      <View
        style={styles.section}
        wrap={false}
      >
        <Text style={styles.sectionTitle}>
          {config.personalSectionTitle}
        </Text>

        <View style={styles.twoColumnRow}>
          <PersonalStyleCard
            person={person1}
            fallbackName="la première personne"
            planet={config.planet}
            frenchName={config.frenchName}
            icon={config.icon}
          />

          <PersonalStyleCard
            person={person2}
            fallbackName="la deuxième personne"
            planet={config.planet}
            frenchName={config.frenchName}
            icon={config.icon}
          />
        </View>
      </View>

      {relevantAspects.length > 0 && (
        <View
          style={styles.section}
          wrap={false}
        >
          <Text
            style={styles.sectionTitle}
          >
            {config.aspectsTitle}
          </Text>

          {relevantAspects.map(
            (aspect) => (
              <AspectCard
                key={aspect.id}
                planet={config.planet}
                aspect={aspect}
              />
            ),
          )}
        </View>
      )}

      <View
        style={styles.synthesisRow}
        wrap={false}
      >
        <View
          style={styles.synthesisCard}
        >
          <Text
            style={styles.synthesisTitle}
          >
            {config.strengthTitle}
          </Text>

          <Text
            style={styles.synthesisText}
          >
            {getStrengthText(
              config.planet,
              sign1,
              sign2,
            )}
          </Text>
        </View>

        <View
          style={styles.synthesisCard}
        >
          <Text
            style={styles.synthesisTitle}
          >
            {config.challengeTitle}
          </Text>

          <Text
            style={styles.synthesisText}
          >
            {getChallengeText(
              config.planet,
              sign1,
              sign2,
            )}
          </Text>
        </View>
      </View>

      <View
        style={styles.adviceCard}
        wrap={false}
      >
        <View
          style={styles.adviceIconFrame}
        >
          <Image
            src={config.icon}
            style={styles.adviceIcon}
          />
        </View>

        <View
          style={styles.adviceContent}
        >
          <Text
            style={styles.adviceTitle}
          >
            {config.adviceTitle}
          </Text>

          <Text
            style={styles.adviceText}
          >
            {config.adviceText}
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

export default function CompatibilityPlanets(
  props: CompatibilitySectionProps,
) {
  return (
    <>
      {PLANET_CONFIGS.map(
        (config) => (
          <PlanetPage
            key={config.planet}
            config={config}
            {...props}
          />
        ),
      )}
    </>
  );
      }
