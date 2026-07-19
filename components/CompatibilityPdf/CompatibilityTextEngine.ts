import {
  SUN_COMPLEMENTARY_ELEMENT_TEXTS,
  SUN_DIFFERENT_ELEMENT_TEXTS,
  SUN_SAME_ELEMENT_TEXTS,
  SUN_SAME_SIGN_TEXTS,
  type CompatibilitySunTextContext,
  type CompatibilitySunTextTemplate,
} from "./texts/CompatibilitySunTexts";

export type CompatibilityPillarName =
  | "Sun"
  | "Moon"
  | "Ascendant";

export interface CompatibilityTextSelectionInput {
  pillar: CompatibilityPillarName;
  sign1: string;
  sign2: string;
  person1Name?: string;
  person2Name?: string;
}

type CompatibilityElement =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau"
  | "";

type CompatibilityTextCategory =
  | "same-sign"
  | "same-element"
  | "complementary-elements"
  | "different-elements";

/*
 * Normalise une valeur texte afin d’obtenir un résultat stable.
 */
function normalizeText(
  value: string | undefined,
): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

/*
 * Retire les accents et transforme le texte en minuscules.
 */
function normalizeKey(
  value: string,
): string {
  return normalizeText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/*
 * Retourne l’élément associé à un signe astrologique.
 */
export function getCompatibilityElement(
  sign: string,
): CompatibilityElement {
  const normalizedSign = normalizeKey(sign);

  const fireSigns = [
    "belier",
    "lion",
    "sagittaire",
    "aries",
    "leo",
    "sagittarius",
  ];

  const earthSigns = [
    "taureau",
    "vierge",
    "capricorne",
    "taurus",
    "virgo",
    "capricorn",
  ];

  const airSigns = [
    "gemeaux",
    "balance",
    "verseau",
    "gemini",
    "libra",
    "aquarius",
  ];

  const waterSigns = [
    "cancer",
    "scorpion",
    "poissons",
    "scorpio",
    "pisces",
  ];

  if (fireSigns.includes(normalizedSign)) {
    return "Feu";
  }

  if (earthSigns.includes(normalizedSign)) {
    return "Terre";
  }

  if (airSigns.includes(normalizedSign)) {
    return "Air";
  }

  if (waterSigns.includes(normalizedSign)) {
    return "Eau";
  }

  return "";
}

/*
 * Détermine si deux éléments sont complémentaires.
 *
 * Feu + Air
 * Terre + Eau
 */
export function areComplementaryElements(
  element1: CompatibilityElement,
  element2: CompatibilityElement,
): boolean {
  return (
    (element1 === "Feu" && element2 === "Air") ||
    (element1 === "Air" && element2 === "Feu") ||
    (element1 === "Terre" && element2 === "Eau") ||
    (element1 === "Eau" && element2 === "Terre")
  );
}

/*
 * Produit un nombre stable à partir d’un texte.
 *
 * Le résultat dépend du couple, des signes et du pilier.
 * Un même couple recevra donc toujours la même variante.
 */
function createStableHash(
  value: string,
): number {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash =
      (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

/*
 * Sélectionne une variante de manière stable.
 */
function selectStableTemplate(
  templates: CompatibilitySunTextTemplate[],
  seed: string,
): CompatibilitySunTextTemplate | undefined {
  if (templates.length === 0) {
    return undefined;
  }

  const hash = createStableHash(seed);
  const index = hash % templates.length;

  return templates[index];
}

/*
 * Détermine la catégorie correspondant aux deux signes.
 */
function getTextCategory(
  sign1: string,
  sign2: string,
  element1: CompatibilityElement,
  element2: CompatibilityElement,
): CompatibilityTextCategory {
  const normalizedSign1 = normalizeKey(sign1);
  const normalizedSign2 = normalizeKey(sign2);

  if (
    normalizedSign1 &&
    normalizedSign1 === normalizedSign2
  ) {
    return "same-sign";
  }

  if (
    element1 &&
    element2 &&
    element1 === element2
  ) {
    return "same-element";
  }

  if (
    areComplementaryElements(
      element1,
      element2,
    )
  ) {
    return "complementary-elements";
  }

  return "different-elements";
}

/*
 * Retourne la banque de textes du Soleil.
 */
function getSunTemplates(
  category: CompatibilityTextCategory,
): CompatibilitySunTextTemplate[] {
  switch (category) {
    case "same-sign":
      return SUN_SAME_SIGN_TEXTS;

    case "same-element":
      return SUN_SAME_ELEMENT_TEXTS;

    case "complementary-elements":
      return SUN_COMPLEMENTARY_ELEMENT_TEXTS;

    case "different-elements":
    default:
      return SUN_DIFFERENT_ELEMENT_TEXTS;
  }
}

/*
 * Génère l’interprétation du Soleil.
 */
function getSunInterpretation(
  input: CompatibilityTextSelectionInput,
): string {
  const sign1 = normalizeText(input.sign1);
  const sign2 = normalizeText(input.sign2);

  if (
    !sign1 ||
    !sign2 ||
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      "Les données disponibles ne permettent pas encore " +
      "de produire une comparaison entièrement personnalisée " +
      "pour ce pilier."
    );
  }

  const element1 =
    getCompatibilityElement(sign1);

  const element2 =
    getCompatibilityElement(sign2);

  const category =
    getTextCategory(
      sign1,
      sign2,
      element1,
      element2,
    );

  const templates =
    getSunTemplates(category);

  const seed = [
    input.pillar,
    input.person1Name,
    input.person2Name,
    sign1,
    sign2,
    category,
  ]
    .map((value) => normalizeText(value))
    .join("|");

  const selectedTemplate =
    selectStableTemplate(
      templates,
      seed,
    );

  if (!selectedTemplate) {
    return (
      `${sign1} et ${sign2} révèlent deux manières ` +
      "différentes de construire l’identité et d’exprimer " +
      "la volonté personnelle."
    );
  }

  const context: CompatibilitySunTextContext = {
    sign1,
    sign2,
    element1,
    element2,
  };

  return selectedTemplate(context);
}

/*
 * Fonction principale appelée par les composants PDF.
 *
 * Pour le moment, seul le Soleil utilise sa banque dédiée.
 * La Lune et l’Ascendant conservent temporairement
 * leur interprétation existante.
 */
export function getCompatibilityPillarText(
  input: CompatibilityTextSelectionInput,
): string | null {
  if (input.pillar === "Sun") {
    return getSunInterpretation(input);
  }

  return null;
}
