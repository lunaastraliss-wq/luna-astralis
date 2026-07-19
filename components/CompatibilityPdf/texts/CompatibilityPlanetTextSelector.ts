import {
  SUN_COMPLEMENTARY_ELEMENT_TEXTS,
  SUN_DIFFERENT_ELEMENT_TEXTS,
  SUN_SAME_ELEMENT_TEXTS,
  SUN_SAME_SIGN_TEXTS,
} from "./CompatibilitySunTexts";

import {
  MOON_COMPLEMENTARY_ELEMENT_TEXTS,
  MOON_DIFFERENT_ELEMENT_TEXTS,
  MOON_SAME_ELEMENT_TEXTS,
  MOON_SAME_SIGN_TEXTS,
} from "./CompatibilityMoonTexts";

import {
  ASCENDANT_COMPLEMENTARY_ELEMENT_TEXTS,
  ASCENDANT_DIFFERENT_ELEMENT_TEXTS,
  ASCENDANT_SAME_ELEMENT_TEXTS,
  ASCENDANT_SAME_SIGN_TEXTS,
} from "./CompatibilityAscendantTexts";

import {
  MERCURY_COMPLEMENTARY_ELEMENT_TEXTS,
  MERCURY_DIFFERENT_ELEMENT_TEXTS,
  MERCURY_SAME_ELEMENT_TEXTS,
  MERCURY_SAME_SIGN_TEXTS,
} from "./CompatibilityMercuryTexts";

import {
  VENUS_COMPLEMENTARY_ELEMENT_TEXTS,
  VENUS_DIFFERENT_ELEMENT_TEXTS,
  VENUS_SAME_ELEMENT_TEXTS,
  VENUS_SAME_SIGN_TEXTS,
} from "./CompatibilityVenusTexts";

import {
  MARS_COMPLEMENTARY_ELEMENT_TEXTS,
  MARS_DIFFERENT_ELEMENT_TEXTS,
  MARS_SAME_ELEMENT_TEXTS,
  MARS_SAME_SIGN_TEXTS,
} from "./CompatibilityMarsTexts";

import {
  JUPITER_COMPLEMENTARY_ELEMENT_TEXTS,
  JUPITER_DIFFERENT_ELEMENT_TEXTS,
  JUPITER_SAME_ELEMENT_TEXTS,
  JUPITER_SAME_SIGN_TEXTS,
} from "./CompatibilityJupiterTexts";

import {
  SATURN_COMPLEMENTARY_ELEMENT_TEXTS,
  SATURN_DIFFERENT_ELEMENT_TEXTS,
  SATURN_SAME_ELEMENT_TEXTS,
  SATURN_SAME_SIGN_TEXTS,
} from "./CompatibilitySaturnTexts";

import {
  URANUS_COMPLEMENTARY_ELEMENT_TEXTS,
  URANUS_DIFFERENT_ELEMENT_TEXTS,
  URANUS_SAME_ELEMENT_TEXTS,
  URANUS_SAME_SIGN_TEXTS,
} from "./CompatibilityUranusTexts";

import {
  NEPTUNE_COMPLEMENTARY_ELEMENT_TEXTS,
  NEPTUNE_DIFFERENT_ELEMENT_TEXTS,
  NEPTUNE_SAME_ELEMENT_TEXTS,
  NEPTUNE_SAME_SIGN_TEXTS,
} from "./CompatibilityNeptuneTexts";

import {
  PLUTO_COMPLEMENTARY_ELEMENT_TEXTS,
  PLUTO_DIFFERENT_ELEMENT_TEXTS,
  PLUTO_SAME_ELEMENT_TEXTS,
  PLUTO_SAME_SIGN_TEXTS,
} from "./CompatibilityPlutoTexts";

/*
 * Planètes et points actuellement pris en charge.
 */
export type CompatibilityTextBody =
  | "sun"
  | "moon"
  | "ascendant"
  | "mercury"
  | "venus"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto";

/*
 * Catégories utilisées pour sélectionner le bon groupe de textes.
 */
export type CompatibilityTextCategory =
  | "same-sign"
  | "same-element"
  | "complementary-elements"
  | "different-elements";

/*
 * Contexte commun envoyé aux fonctions de texte.
 */
export interface CompatibilityPlanetTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

/*
 * Données nécessaires pour obtenir un texte.
 *
 * seed est facultatif.
 * Il peut contenir les prénoms, les dates de naissance ou l'identifiant
 * de la commande afin de varier le texte entre différents rapports.
 */
export interface GetCompatibilityPlanetTextParams
  extends CompatibilityPlanetTextContext {
  body: CompatibilityTextBody;
  seed?: string;
}

type CompatibilityTextTemplate = (
  context: CompatibilityPlanetTextContext,
) => string;

interface CompatibilityTextCollection {
  sameSign: CompatibilityTextTemplate[];
  sameElement: CompatibilityTextTemplate[];
  complementaryElements: CompatibilityTextTemplate[];
  differentElements: CompatibilityTextTemplate[];
}

/*
 * Regroupe les quatre banques de textes de chaque planète.
 */
const PLANET_TEXT_COLLECTIONS: Record<
  CompatibilityTextBody,
  CompatibilityTextCollection
> = {
  sun: {
    sameSign: SUN_SAME_SIGN_TEXTS,
    sameElement: SUN_SAME_ELEMENT_TEXTS,
    complementaryElements: SUN_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: SUN_DIFFERENT_ELEMENT_TEXTS,
  },

  moon: {
    sameSign: MOON_SAME_SIGN_TEXTS,
    sameElement: MOON_SAME_ELEMENT_TEXTS,
    complementaryElements: MOON_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: MOON_DIFFERENT_ELEMENT_TEXTS,
  },

  ascendant: {
    sameSign: ASCENDANT_SAME_SIGN_TEXTS,
    sameElement: ASCENDANT_SAME_ELEMENT_TEXTS,
    complementaryElements: ASCENDANT_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: ASCENDANT_DIFFERENT_ELEMENT_TEXTS,
  },

  mercury: {
    sameSign: MERCURY_SAME_SIGN_TEXTS,
    sameElement: MERCURY_SAME_ELEMENT_TEXTS,
    complementaryElements: MERCURY_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: MERCURY_DIFFERENT_ELEMENT_TEXTS,
  },

  venus: {
    sameSign: VENUS_SAME_SIGN_TEXTS,
    sameElement: VENUS_SAME_ELEMENT_TEXTS,
    complementaryElements: VENUS_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: VENUS_DIFFERENT_ELEMENT_TEXTS,
  },

  mars: {
    sameSign: MARS_SAME_SIGN_TEXTS,
    sameElement: MARS_SAME_ELEMENT_TEXTS,
    complementaryElements: MARS_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: MARS_DIFFERENT_ELEMENT_TEXTS,
  },

  jupiter: {
    sameSign: JUPITER_SAME_SIGN_TEXTS,
    sameElement: JUPITER_SAME_ELEMENT_TEXTS,
    complementaryElements: JUPITER_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: JUPITER_DIFFERENT_ELEMENT_TEXTS,
  },

  saturn: {
    sameSign: SATURN_SAME_SIGN_TEXTS,
    sameElement: SATURN_SAME_ELEMENT_TEXTS,
    complementaryElements: SATURN_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: SATURN_DIFFERENT_ELEMENT_TEXTS,
  },

  uranus: {
    sameSign: URANUS_SAME_SIGN_TEXTS,
    sameElement: URANUS_SAME_ELEMENT_TEXTS,
    complementaryElements: URANUS_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: URANUS_DIFFERENT_ELEMENT_TEXTS,
  },

  neptune: {
    sameSign: NEPTUNE_SAME_SIGN_TEXTS,
    sameElement: NEPTUNE_SAME_ELEMENT_TEXTS,
    complementaryElements: NEPTUNE_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: NEPTUNE_DIFFERENT_ELEMENT_TEXTS,
  },

  pluto: {
    sameSign: PLUTO_SAME_SIGN_TEXTS,
    sameElement: PLUTO_SAME_ELEMENT_TEXTS,
    complementaryElements: PLUTO_COMPLEMENTARY_ELEMENT_TEXTS,
    differentElements: PLUTO_DIFFERENT_ELEMENT_TEXTS,
  },
};

/*
 * Sécurise les valeurs utilisées pour les comparaisons.
 *
 * Exemples :
 * "Bélier" devient "belier"
 * "Éau" devient "eau"
 * "  Feu " devient "feu"
 */
function normalizeCompatibilityValue(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/*
 * Retourne le nom français propre d'un élément.
 *
 * Cette fonction évite d'afficher "feu" ou "FEU" dans le PDF.
 */
export function formatCompatibilityElement(element: string): string {
  const normalizedElement = normalizeCompatibilityValue(element);

  const labels: Record<string, string> = {
    feu: "Feu",
    terre: "Terre",
    air: "Air",
    eau: "Eau",
  };

  return labels[normalizedElement] ?? element.trim();
}

/*
 * Retourne le nom propre du signe.
 *
 * Cela conserve les accents déjà présents et ajoute simplement
 * une majuscule lorsque nécessaire.
 */
export function formatCompatibilitySign(sign: string): string {
  const cleanSign = sign.trim();

  if (!cleanSign) {
    return "";
  }

  return cleanSign.charAt(0).toLocaleUpperCase("fr") + cleanSign.slice(1);
}

/*
 * Vérifie les associations complémentaires :
 *
 * Feu + Air
 * Air + Feu
 * Terre + Eau
 * Eau + Terre
 */
export function areCompatibilityElementsComplementary(
  element1: string,
  element2: string,
): boolean {
  const firstElement = normalizeCompatibilityValue(element1);
  const secondElement = normalizeCompatibilityValue(element2);

  const pair = [firstElement, secondElement].sort().join("-");

  return pair === "air-feu" || pair === "eau-terre";
}

/*
 * Détermine la catégorie astrologique à utiliser.
 */
export function getCompatibilityTextCategory(
  context: CompatibilityPlanetTextContext,
): CompatibilityTextCategory {
  const sign1 = normalizeCompatibilityValue(context.sign1);
  const sign2 = normalizeCompatibilityValue(context.sign2);

  const element1 = normalizeCompatibilityValue(context.element1);
  const element2 = normalizeCompatibilityValue(context.element2);

  if (sign1 && sign2 && sign1 === sign2) {
    return "same-sign";
  }

  if (element1 && element2 && element1 === element2) {
    return "same-element";
  }

  if (
    element1 &&
    element2 &&
    areCompatibilityElementsComplementary(element1, element2)
  ) {
    return "complementary-elements";
  }

  return "different-elements";
}

/*
 * Produit un nombre stable à partir d'une chaîne.
 *
 * Contrairement à Math.random(), le résultat ne change pas pendant
 * la génération du PDF.
 */
function createStableCompatibilityHash(value: string): number {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

/*
 * Sélectionne une variante stable dans une banque de textes.
 */
function selectStableCompatibilityTemplate(
  templates: CompatibilityTextTemplate[],
  selectionKey: string,
): CompatibilityTextTemplate | null {
  if (!templates.length) {
    return null;
  }

  const hash = createStableCompatibilityHash(selectionKey);
  const templateIndex = hash % templates.length;

  return templates[templateIndex] ?? null;
}

/*
 * Retourne la banque correspondant à la catégorie trouvée.
 */
function getTemplatesForCategory(
  collection: CompatibilityTextCollection,
  category: CompatibilityTextCategory,
): CompatibilityTextTemplate[] {
  switch (category) {
    case "same-sign":
      return collection.sameSign;

    case "same-element":
      return collection.sameElement;

    case "complementary-elements":
      return collection.complementaryElements;

    case "different-elements":
    default:
      return collection.differentElements;
  }
}

/*
 * Fonction principale.
 *
 * Elle :
 * 1. détermine la relation entre les signes et les éléments;
 * 2. récupère la bonne banque;
 * 3. choisit une variante stable;
 * 4. génère le texte final.
 */
export function getCompatibilityPlanetText({
  body,
  sign1,
  sign2,
  element1,
  element2,
  seed = "",
}: GetCompatibilityPlanetTextParams): string {
  const collection = PLANET_TEXT_COLLECTIONS[body];

  if (!collection) {
    return "";
  }

  const safeContext: CompatibilityPlanetTextContext = {
    sign1: formatCompatibilitySign(sign1),
    sign2: formatCompatibilitySign(sign2),
    element1: formatCompatibilityElement(element1),
    element2: formatCompatibilityElement(element2),
  };

  if (
    !safeContext.sign1 ||
    !safeContext.sign2 ||
    !safeContext.element1 ||
    !safeContext.element2
  ) {
    return "";
  }

  const category = getCompatibilityTextCategory(safeContext);

  const templates = getTemplatesForCategory(collection, category);

  /*
   * Le body est inclus afin que Soleil, Lune, Vénus, etc.
   * ne sélectionnent pas nécessairement le même numéro de variante.
   */
  const selectionKey = [
    seed,
    body,
    normalizeCompatibilityValue(safeContext.sign1),
    normalizeCompatibilityValue(safeContext.sign2),
    normalizeCompatibilityValue(safeContext.element1),
    normalizeCompatibilityValue(safeContext.element2),
    category,
  ].join("|");

  const selectedTemplate = selectStableCompatibilityTemplate(
    templates,
    selectionKey,
  );

  if (!selectedTemplate) {
    return "";
  }

  return selectedTemplate(safeContext);
}

/*
 * Version utile lorsque tu veux également connaître la catégorie choisie.
 */
export function getCompatibilityPlanetTextResult(
  params: GetCompatibilityPlanetTextParams,
): {
  text: string;
  category: CompatibilityTextCategory;
} {
  const context: CompatibilityPlanetTextContext = {
    sign1: params.sign1,
    sign2: params.sign2,
    element1: params.element1,
    element2: params.element2,
  };

  return {
    text: getCompatibilityPlanetText(params),
    category: getCompatibilityTextCategory(context),
  };
}
