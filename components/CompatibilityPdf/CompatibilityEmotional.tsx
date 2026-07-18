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
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

import {
  getCompatibilityPlanet,
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

    top: 65,
    right: -54,

    width: 150,
    height: 150,

    borderRadius: 75,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.2,
  },

  decorativeCircleBottom: {
    position: "absolute",

    left: -50,
    bottom: 69,

    width: 140,
    height: 140,

    borderRadius: 70,

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

    marginBottom: 17,
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

    fontSize: 8.2,
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

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 14,

    marginBottom: 14,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.65,
    borderColor: DARK_GOLD,
  },

  namesAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 72,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  namesAccentRight: {
    position: "absolute",

    right: 0,
    bottom: -1,

    width: 72,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  name: {
    width: "40%",

    fontSize: 13,

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

    borderWidth: 0.65,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorIcon: {
    width: 17,
    height: 17,

    objectFit: "contain",
  },

  moonComparison: {
    position: "relative",

    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 14,

    marginBottom: 12,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },

  moonAccent: {
    position: "absolute",

    top: -1,
    left: "34%",

    width: "32%",
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  moonHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 11,
  },

  moonIconFrame: {
    width: 42,
    height: 42,

    borderRadius: 21,

    borderWidth: 0.75,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  moonIcon: {
    width: 26,
    height: 26,

    objectFit: "contain",
  },

  moonHeading: {
    flex: 1,
  },

  moonLabel: {
    fontSize: 5.8,
    letterSpacing: 1.4,

    color: "#cbb98e",

    textTransform: "uppercase",

    marginBottom: 3,
  },

  moonTitle: {
    fontSize: 13,

    color: CREAM,

    marginBottom: 3,
  },

  moonIntro: {
    fontSize: 6.4,
    lineHeight: 1.35,

    color: SOFT_TEXT,
  },

  placementRow: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",

    marginBottom: 11,
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
    fontSize: 11,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 3,
  },

  placementElement: {
    fontSize: 6.2,

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
    width: 17,
    height: 17,

    objectFit: "contain",
  },

  moonInterpretationTitle: {
    fontSize: 8.6,

    color: CREAM,

    marginBottom: 5,
  },

  moonInterpretation: {
    fontSize: 7,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "justify",
  },

  needsSection: {
    marginBottom: 12,
  },

  needsTitle: {
    fontSize: 6.2,
    letterSpacing: 1.6,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 8,
  },

  needsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  needCard: {
    width: "48.4%",

    minHeight: 102,

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 11,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  needHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 7,
  },

  needSymbolFrame: {
    width: 27,
    height: 27,

    borderRadius: 13.5,

    borderWidth: 0.6,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 8,
  },

  needSymbol: {
    width: 17,
    height: 17,

    objectFit: "contain",
  },

  needTitle: {
    flex: 1,

    fontSize: 8.2,

    color: CREAM,
  },

  needText: {
    fontSize: 6.4,
    lineHeight: 1.43,

    color: SOFT_TEXT,

    textAlign: "justify",
  },

  aspectsSection: {
    marginBottom: 12,
  },

  aspectsTitle: {
    fontSize: 6.2,
    letterSpacing: 1.6,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 8,
  },

  aspectCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 10,

    marginBottom: 6,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },

  aspectSymbolFrame: {
    width: 29,
    height: 29,

    borderRadius: 14.5,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 9,
  },

  aspectSymbol: {
    width: 17,
    height: 17,

    objectFit: "contain",
  },

  aspectContent: {
    flex: 1,
  },

  aspectTitle: {
    fontSize: 7.5,

    color: CREAM,

    marginBottom: 2,
  },

  aspectText: {
    fontSize: 6.1,
    lineHeight: 1.38,

    color: SOFT_TEXT,
  },

  aspectNature: {
    width: 60,

    fontSize: 5.7,
    lineHeight: 1.25,

    color: MUTED_CREAM,

    textAlign: "right",
  },

  synthesisCard: {
    position: "relative",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 17,

    marginBottom: 12,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  synthesisSymbol: {
    position: "absolute",

    top: -13,
    left: "50%",

    width: 26,
    height: 26,

    marginLeft: -13,

    borderRadius: 13,

    borderWidth: 0.7,
    borderColor: GOLD,

    backgroundColor: NAVY,

    alignItems: "center",
    justifyContent: "center",
  },

  synthesisSymbolText: {
    width: 16,
    height: 16,

    objectFit: "contain",
  },

  synthesisTitle: {
    fontSize: 11,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  synthesisText: {
    fontSize: 7.2,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  adviceCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 13,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
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
    width: 18,
    height: 18,

    objectFit: "contain",
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
    fontSize: 6.4,
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

export interface CompatibilityEmotionalProps {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects?: CompatibilityAspect[];
}

interface EmotionalAspect {
  id: string;
  planet1: string;
  planet2: string;
  aspect: string;
  orb?: number;
}

const EMOTIONAL_PLANETS = [
  "moon",
  "lune",
  "venus",
  "vénus",
  "mars",
  "saturn",
  "saturne",
  "sun",
  "soleil",
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

function getMoonSign(
  person: SafeCompatibilityPerson,
): string {
  const moon =
    getCompatibilityPlanet(
      person.planets,
      "Moon",
    );

  const sign =
    typeof moon?.sign === "string"
      ? moon.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getElement(
  sign: string,
): string {
  const normalized =
    normalizeValue(sign);

  if (
    [
      "belier",
      "lion",
      "sagittaire",
    ].includes(normalized)
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

  return "Élément non précisé";
}

function getEmotionalNeed(
  sign: string,
): string {
  const normalized =
    normalizeValue(sign);

  const needs: Record<string, string> = {
    belier:
      "A besoin de spontanéité, d’authenticité et de pouvoir exprimer rapidement ses émotions sans se sentir retenu.",

    taureau:
      "Recherche la stabilité, la fidélité, la douceur et des preuves concrètes de sécurité affective.",

    gemeaux:
      "A besoin d’échanges, de légèreté, de curiosité et de pouvoir mettre ses émotions en mots.",

    cancer:
      "Recherche une grande proximité, de la tendresse, de la protection et un climat profondément rassurant.",

    lion:
      "A besoin de chaleur, de reconnaissance, de loyauté et de se sentir aimé de manière visible.",

    vierge:
      "Recherche la fiabilité, les gestes utiles, l’attention aux détails et un quotidien affectif cohérent.",

    balance:
      "A besoin d’harmonie, de dialogue, de délicatesse et d’une relation où chacun se sent considéré.",

    scorpion:
      "Recherche l’intensité, la confiance absolue, l’authenticité et une véritable profondeur émotionnelle.",

    sagittaire:
      "A besoin de liberté, d’optimisme, d’honnêteté et d’un lien qui laisse de l’espace pour évoluer.",

    capricorne:
      "Recherche la constance, le respect, la maturité et une relation capable de se construire dans le temps.",

    verseau:
      "A besoin d’indépendance, de compréhension intellectuelle et d’une relation qui respecte sa singularité.",

    poissons:
      "Recherche la compassion, la douceur, l’intuition et un lien émotionnel où il peut se sentir pleinement compris.",
  };

  return (
    needs[normalized] ||
    "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels."
  );
}

function getMoonCompatibilityText(
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      "Les données disponibles ne permettent pas encore de produire " +
      "une interprétation émotionnelle entièrement personnalisée."
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

  if (normalized1 === normalized2) {
    return (
      `Vos deux Lunes en ${sign1} révèlent des besoins émotionnels très semblables. ` +
      "Vous pouvez reconnaître instinctivement les réactions, les sensibilités et les attentes affectives de l’autre. " +
      "Cette familiarité favorise la proximité, mais elle peut aussi amplifier certains mécanismes de défense communs."
    );
  }

  if (element1 === element2) {
    return (
      `Vos Lunes en ${sign1} et en ${sign2} appartiennent toutes les deux à l’élément ${element1}. ` +
      "Vous partagez donc une manière fondamentale de vivre et de traiter les émotions. " +
      "Même si vos réactions ne sont pas identiques, vous pouvez généralement comprendre ce dont l’autre a besoin pour se sentir en sécurité."
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
      `Les Lunes en ${sign1} et en ${sign2} expriment des besoins différents mais complémentaires. ` +
      `L’énergie ${element1} apporte sa propre manière de réagir, tandis que l’énergie ${element2} peut offrir ce qui lui manque. ` +
      "Cette dynamique devient particulièrement enrichissante lorsque chacun accepte que l’autre ne manifeste pas ses émotions de la même façon."
    );
  }

  return (
    `Vos Lunes en ${sign1} et en ${sign2} fonctionnent selon des rythmes émotionnels différents. ` +
    "L’un peut avoir besoin de réagir immédiatement alors que l’autre préfère prendre du recul, analyser ou se protéger. " +
    "La relation gagne en stabilité lorsque chacun apprend à reconnaître le langage émotionnel de l’autre sans l’interpréter comme un rejet."
  );
}

function getAspectField(
  aspect: CompatibilityAspect,
  keys: string[],
): unknown {
  const record =
    aspect as unknown as Record<
      string,
      unknown
    >;

  for (const key of keys) {
    if (
      record[key] !== undefined &&
      record[key] !== null
    ) {
      return record[key];
    }
  }

  return undefined;
}

function getAspectPlanet1(
  aspect: CompatibilityAspect,
): string {
  const value =
    getAspectField(aspect, [
      "planet1",
      "firstPlanet",
      "person1Planet",
      "planetA",
      "body1",
    ]);

  return typeof value === "string"
    ? value
    : "";
}

function getAspectPlanet2(
  aspect: CompatibilityAspect,
): string {
  const value =
    getAspectField(aspect, [
      "planet2",
      "secondPlanet",
      "person2Planet",
      "planetB",
      "body2",
    ]);

  return typeof value === "string"
    ? value
    : "";
}

function getAspectName(
  aspect: CompatibilityAspect,
): string {
  const value =
    getAspectField(aspect, [
      "aspect",
      "aspectType",
      "type",
      "name",
    ]);

  return typeof value === "string"
    ? value
    : "";
}

function getAspectOrb(
  aspect: CompatibilityAspect,
): number | undefined {
  const value =
    getAspectField(aspect, [
      "orb",
      "orbValue",
      "difference",
    ]);

  if (
    typeof value === "number" &&
    Number.isFinite(value)
  ) {
    return value;
  }

  if (typeof value === "string") {
    const parsed =
      Number.parseFloat(value);

    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return undefined;
}

function isMoonAspect(
  aspect: CompatibilityAspect,
): boolean {
  const planet1 =
    normalizeValue(
      getAspectPlanet1(aspect),
    );

  const planet2 =
    normalizeValue(
      getAspectPlanet2(aspect),
    );

  const hasMoon =
    planet1 === "moon" ||
    planet1 === "lune" ||
    planet2 === "moon" ||
    planet2 === "lune";

  const otherPlanet =
    planet1 === "moon" ||
    planet1 === "lune"
      ? planet2
      : planet1;

  return (
    hasMoon &&
    EMOTIONAL_PLANETS.includes(
      otherPlanet,
    )
  );
}

function normalizeAspectName(
  aspect: string,
): string {
  const normalized =
    normalizeValue(aspect);

  if (
    normalized.includes("conjunction") ||
    normalized.includes("conjonction")
  ) {
    return "Conjonction";
  }

  if (
    normalized.includes("trine") ||
    normalized.includes("trigone")
  ) {
    return "Trigone";
  }

  if (
    normalized.includes("sextile")
  ) {
    return "Sextile";
  }

  if (
    normalized.includes("opposition")
  ) {
    return "Opposition";
  }

  if (
    normalized.includes("square") ||
    normalized.includes("carre")
  ) {
    return "Carré";
  }

  if (
    normalized.includes("quincunx") ||
    normalized.includes("quinconce")
  ) {
    return "Quinconce";
  }

  return aspect || "Aspect";
}

function getAspectNature(
  aspectName: string,
): string {
  const normalized =
    normalizeValue(aspectName);

  if (
    normalized.includes("trigone") ||
    normalized.includes("sextile")
  ) {
    return "Harmonie naturelle";
  }

  if (
    normalized.includes("conjonction")
  ) {
    return "Connexion intense";
  }

  if (
    normalized.includes("opposition")
  ) {
    return "Complémentarité";
  }

  if (
    normalized.includes("carre") ||
    normalized.includes("quinconce")
  ) {
    return "Zone d’ajustement";
  }

  return "Influence relationnelle";
}

function translatePlanet(
  planet: string,
): string {
  const normalized =
    normalizeValue(planet);

  const translations: Record<
    string,
    string
  > = {
    sun: "Soleil",
    soleil: "Soleil",
    moon: "Lune",
    lune: "Lune",
    mercury: "Mercure",
    mercure: "Mercure",
    venus: "Vénus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturne",
    saturne: "Saturne",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluton",
    pluton: "Pluton",
  };

  return translations[normalized] || planet;
}

function getAspectInterpretation(
  planet1: string,
  planet2: string,
  aspectName: string,
): string {
  const otherPlanet =
    normalizeValue(planet1) === "moon" ||
    normalizeValue(planet1) === "lune"
      ? translatePlanet(planet2)
      : translatePlanet(planet1);

  const normalizedAspect =
    normalizeValue(aspectName);

  const harmonious =
    normalizedAspect.includes(
      "trigone",
    ) ||
    normalizedAspect.includes(
      "sextile",
    );

  const challenging =
    normalizedAspect.includes(
      "carre",
    ) ||
    normalizedAspect.includes(
      "opposition",
    ) ||
    normalizedAspect.includes(
      "quinconce",
    );

  if (otherPlanet === "Lune") {
    if (harmonious) {
      return "Vos réactions émotionnelles peuvent naturellement se comprendre et se soutenir.";
    }

    if (challenging) {
      return "Vos besoins affectifs peuvent différer et demander une écoute plus consciente.";
    }

    return "Cette connexion intensifie la sensibilité et la résonance émotionnelle entre vous.";
  }

  if (otherPlanet === "Vénus") {
    if (harmonious) {
      return "L’affection et la tendresse peuvent répondre naturellement aux besoins émotionnels.";
    }

    if (challenging) {
      return "La manière d’aimer peut parfois ne pas correspondre immédiatement aux attentes affectives.";
    }

    return "L’amour, la douceur et la sensibilité occupent une place importante dans votre lien.";
  }

  if (otherPlanet === "Mars") {
    if (harmonious) {
      return "Le désir et l’action peuvent stimuler l’expression émotionnelle de façon vivante.";
    }

    if (challenging) {
      return "Les réactions impulsives peuvent parfois heurter la sensibilité de l’autre.";
    }

    return "Cette connexion crée une forte réactivité, mêlant émotion, désir et instinct.";
  }

  if (otherPlanet === "Saturne") {
    if (harmonious) {
      return "Saturne peut apporter stabilité, fiabilité et sécurité aux émotions de la Lune.";
    }

    if (challenging) {
      return "La Lune peut parfois ressentir Saturne comme distant, exigeant ou peu démonstratif.";
    }

    return "Cette interaction souligne les thèmes de sécurité, de responsabilité et d’engagement émotionnel.";
  }

  if (otherPlanet === "Soleil") {
    if (harmonious) {
      return "L’identité de l’un peut naturellement rassurer et soutenir les besoins émotionnels de l’autre.";
    }

    if (challenging) {
      return "L’expression personnelle de l’un peut parfois entrer en conflit avec la sensibilité de l’autre.";
    }

    return "Le Soleil éclaire les émotions de la Lune et crée un fort sentiment de reconnaissance.";
  }

  return "Cet aspect influence la manière dont vos émotions réagissent aux énergies personnelles de l’autre.";
}

function getEmotionalAspects(
  aspects?: CompatibilityAspect[],
): EmotionalAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects
    .filter(isMoonAspect)
    .slice(0, 3)
    .map((aspect, index) => ({
      id: `emotional-${index}`,

      planet1:
        getAspectPlanet1(aspect),

      planet2:
        getAspectPlanet2(aspect),

      aspect:
        normalizeAspectName(
          getAspectName(aspect),
        ),

      orb:
        getAspectOrb(aspect),
    }));
}

function EmotionalNeedCard({
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

  const moonSign =
    getMoonSign(person);

  return (
    <View
      style={localStyles.needCard}
      wrap={false}
    >
      <View
        style={localStyles.needHeader}
      >
        <View
          style={
            localStyles.needSymbolFrame
          }
        >
          <Image
            src={PLANET_ICONS.Moon}
            style={localStyles.needSymbol}
          />
        </View>

        <Text
          style={localStyles.needTitle}
        >
          Les besoins de {name}
        </Text>
      </View>

      <Text style={localStyles.needText}>
        Avec une Lune en {moonSign},{" "}
        {getEmotionalNeed(moonSign)}
      </Text>
    </View>
  );
}

function AspectCard({
  aspect,
}: {
  aspect: EmotionalAspect;
}) {
  const planet1 =
    translatePlanet(aspect.planet1);

  const planet2 =
    translatePlanet(aspect.planet2);

  const orbText =
    typeof aspect.orb === "number"
      ? ` • orbe ${aspect.orb.toFixed(1)}°`
      : "";

  return (
    <View
      style={localStyles.aspectCard}
      wrap={false}
    >
      <View
        style={
          localStyles.aspectSymbolFrame
        }
      >
        <Image
          src={LOGO_URL}
          style={localStyles.aspectSymbol}
        />
      </View>

      <View
        style={localStyles.aspectContent}
      >
        <Text
          style={localStyles.aspectTitle}
        >
          {planet1} {aspect.aspect}{" "}
          {planet2}
          {orbText}
        </Text>

        <Text
          style={localStyles.aspectText}
        >
          {getAspectInterpretation(
            aspect.planet1,
            aspect.planet2,
            aspect.aspect,
          )}
        </Text>
      </View>

      <Text
        style={localStyles.aspectNature}
      >
        {getAspectNature(
          aspect.aspect,
        )}
      </Text>
    </View>
  );
}

export default function CompatibilityEmotional({
  person1,
  person2,
  aspects,
}: CompatibilityEmotionalProps) {
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

  const moonSign1 =
    getMoonSign(person1);

  const moonSign2 =
    getMoonSign(person2);

  const element1 =
    getElement(moonSign1);

  const element2 =
    getElement(moonSign2);

  const emotionalAspects =
    getEmotionalAspects(aspects);

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
            Monde affectif
          </Text>

          <Text style={localStyles.title}>
            Votre compatibilité émotionnelle
          </Text>

          <Text
            style={localStyles.subtitle}
          >
            La Lune révèle ce dont chacun a
            besoin pour se sentir compris,
            rassuré et profondément en
            confiance dans la relation.
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

          <View
            style={localStyles.nameSeparator}
          >
            <View
              style={
                localStyles.nameSeparatorFrame
              }
            >
              <Image
                src={PLANET_ICONS.Moon}
                style={
                  localStyles.nameSeparatorIcon
                }
              />
            </View>
          </View>

          <Text style={localStyles.name}>
            {person2Name}
          </Text>
        </View>

        <View
          style={localStyles.moonComparison}
          wrap={false}
        >
          <View
            style={localStyles.moonAccent}
          />

          <View
            style={localStyles.moonHeader}
          >
            <View
              style={
                localStyles.moonIconFrame
              }
            >
              <Image
                src={PLANET_ICONS.Moon}
                style={localStyles.moonIcon}
              />
            </View>

            <View
              style={localStyles.moonHeading}
            >
              <Text
                style={localStyles.moonLabel}
              >
                Besoins affectifs et sécurité intérieure
              </Text>

              <Text
                style={localStyles.moonTitle}
              >
                La rencontre de vos deux Lunes
              </Text>

              <Text
                style={localStyles.moonIntro}
              >
                Cette comparaison décrit la
                façon dont vos sensibilités
                naturelles se reconnaissent,
                se complètent ou demandent des
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
                Lune en {moonSign1}
              </Text>

              <Text
                style={localStyles.placementElement}
              >
                Élément {element1}
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
                <Image
                  src={PLANET_ICONS.Moon}
                  style={
                    localStyles.placementCenterSymbol
                  }
                />
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
                Lune en {moonSign2}
              </Text>

              <Text
                style={localStyles.placementElement}
              >
                Élément {element2}
              </Text>
            </View>
          </View>

          <Text
            style={
              localStyles.moonInterpretationTitle
            }
          >
            Votre dynamique affective
          </Text>

          <Text
            style={
              localStyles.moonInterpretation
            }
          >
            {getMoonCompatibilityText(
              moonSign1,
              moonSign2,
            )}
          </Text>
        </View>

        <View
          style={localStyles.needsSection}
          wrap={false}
        >
          <Text
            style={localStyles.needsTitle}
          >
            Ce dont chacun a besoin pour se sentir aimé
          </Text>

          <View style={localStyles.needsRow}>
            <EmotionalNeedCard
              person={person1}
              fallbackName="la première personne"
            />

            <EmotionalNeedCard
              person={person2}
              fallbackName="la deuxième personne"
            />
          </View>
        </View>

        {emotionalAspects.length > 0 && (
          <View
            style={localStyles.aspectsSection}
            wrap={false}
          >
            <Text
              style={localStyles.aspectsTitle}
            >
              Vos principales interactions émotionnelles
            </Text>

            {emotionalAspects.map(
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
          style={localStyles.synthesisCard}
          wrap={false}
        >
          <View
            style={
              localStyles.synthesisSymbol
            }
          >
            <Image
              src={PLANET_ICONS.Moon}
              style={
                localStyles.synthesisSymbolText
              }
            />
          </View>

          <Text
            style={localStyles.synthesisTitle}
          >
            Créer un climat de sécurité
          </Text>

          <Text
            style={localStyles.synthesisText}
          >
            Votre équilibre émotionnel repose
            moins sur le fait de réagir de la
            même manière que sur votre capacité
            à reconnaître les besoins de
            l’autre. Lorsque chacun se sent
            entendu sans être jugé, les
            différences de sensibilité peuvent
            devenir une source de profondeur,
            de tendresse et de confiance.
          </Text>
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
            <Image
              src={LOGO_URL}
              style={localStyles.adviceSymbol}
            />
          </View>

          <View
            style={localStyles.adviceContent}
          >
            <Text
              style={localStyles.adviceTitle}
            >
              Votre clé émotionnelle
            </Text>

            <Text
              style={localStyles.adviceText}
            >
              Ne présumez pas que l’autre se
              sent aimé de la même façon que
              vous. Exprimer clairement vos
              besoins, vos limites et vos
              attentes permet d’éviter que le
              silence ou les réactions
              différentes soient interprétés
              comme un manque d’affection.
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
          7
        </Text>
      </View>
    </Page>
  );
    }
