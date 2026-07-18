import type {
  PremiumAngles,
  PremiumPlanet,
} from "@/components/PremiumPdf/PremiumPdfTypes";

/*
 * Données de naissance et données astrologiques
 * d’une personne utilisée dans le rapport de compatibilité.
 */
export type CompatibilityPerson = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;

  planets?: PremiumPlanet[];
  angles?: PremiumAngles;

  wheelImage?: string;
};

/*
 * Types d’aspects utilisés dans la synastrie.
 */
export type CompatibilityAspectType =
  | "conjunction"
  | "opposition"
  | "trine"
  | "square"
  | "sextile"
  | "quincunx";

/*
 * Aspect astrologique calculé entre une planète
 * de la première personne et une planète
 * de la deuxième personne.
 */
export type CompatibilityAspect = {
  person1Planet: string;
  person2Planet: string;

  type: CompatibilityAspectType;

  orb: number;

  person1Longitude: number;
  person2Longitude: number;
};

/*
 * Propriétés principales reçues
 * par le document PDF de compatibilité.
 */
export type CompatibilityPdfProps = {
  person1?: CompatibilityPerson;
  person2?: CompatibilityPerson;

  /*
   * Les aspects peuvent être fournis par la route serveur.
   * S’ils sont absents, ils seront calculés
   * à partir des longitudes planétaires.
   */
  aspects?: CompatibilityAspect[];
};

/*
 * Version sécurisée d’une personne après normalisation.
 *
 * Toutes les valeurs sont garanties
 * et ne sont plus optionnelles.
 */
export type SafeCompatibilityPerson = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;

  planets: PremiumPlanet[];
  angles: PremiumAngles;

  wheelImage: string;
};

/*
 * Propriétés communes utilisées par les sections
 * qui analysent les deux personnes et leurs aspects.
 */
export type CompatibilitySectionProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects: CompatibilityAspect[];
};

/*
 * Propriétés utilisées par les sections
 * qui présentent uniquement les deux profils.
 */
export type CompatibilityProfilesProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
};

/*
 * Propriétés de la couverture.
 */
export type CompatibilityCoverProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
};

/*
 * Propriétés de la page présentant
 * les deux roues astrologiques.
 */
export type CompatibilityWheelsProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
};

/*
 * Propriétés de la page de bienvenue.
 */
export type CompatibilityWelcomeProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
};

/*
 * Propriétés de la conclusion.
 */
export type CompatibilityConclusionProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
};

/*
 * Propriétés pour les sections qui analysent
 * les aspects entre les deux thèmes.
 */
export type CompatibilityAspectsProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects: CompatibilityAspect[];
};

/*
 * Comparaison ciblée entre deux planètes.
 *
 * Exemple :
 * Vénus de la personne 1 avec Mars de la personne 2.
 */
export type CompatibilityPlanetComparisonProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;

  person1Planet: string;
  person2Planet: string;

  aspects: CompatibilityAspect[];
};

/*
 * Catégories utilisées pour classer
 * les différents aspects du rapport.
 */
export type CompatibilityAspectCategory =
  | "identity"
  | "emotions"
  | "love"
  | "attraction"
  | "communication"
  | "stability"
  | "growth"
  | "challenges";

/*
 * Aspect enrichi avec les informations
 * nécessaires pour générer une interprétation.
 */
export type CompatibilityAspectAnalysis =
  CompatibilityAspect & {
    category: CompatibilityAspectCategory;
    harmonious: boolean;
    title: string;
    description: string;
  };

/*
 * Résumé chiffré de la compatibilité.
 */
export type CompatibilityScores = {
  overall: number;
  emotional: number;
  love: number;
  communication: number;
  attraction: number;
  stability: number;
};

/*
 * Propriétés de la synthèse finale.
 *
 * Les scores sont optionnels pour le moment,
 * car CompatibilityPdfDocument ne les calcule
 * pas encore directement.
 */
export type CompatibilitySynthesisProps =
  CompatibilitySectionProps & {
    scores?: CompatibilityScores;
  };
