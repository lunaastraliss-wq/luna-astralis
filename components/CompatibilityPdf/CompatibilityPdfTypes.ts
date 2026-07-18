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
  birthCountry?: string;

  planets?: PremiumPlanet[];
  angles?: PremiumAngles;

  wheelImage?: string;
};

/*
 * Version sécurisée d’une personne après normalisation.
 *
 * Toutes les valeurs nécessaires au PDF
 * sont garanties et ne sont plus optionnelles.
 */
export type SafeCompatibilityPerson = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;

  planets: PremiumPlanet[];
  angles: PremiumAngles;

  wheelImage: string;
};

/*
 * Types d’aspects utilisés dans la synastrie.
 *
 * Les valeurs demeurent en anglais dans les données,
 * puis elles seront traduites dans le PDF.
 */
export type CompatibilityAspectType =
  | "conjunction"
  | "opposition"
  | "trine"
  | "square"
  | "sextile"
  | "quincunx";

/*
 * Nature générale d’un aspect.
 */
export type CompatibilityAspectNature =
  | "harmonious"
  | "challenging"
  | "intense"
  | "adjustment";

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

  exactAngle?: number;
  distance?: number;
  nature?: CompatibilityAspectNature;
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

  /*
   * Les scores peuvent être fournis directement.
   * Sinon, ils pourront être calculés à partir des aspects.
   */
  scores?: CompatibilityScores;
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
 * Propriétés de la page des trois piliers.
 */
export type CompatibilityPillarsProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
};

/*
 * Propriétés de la page émotionnelle.
 *
 * Les aspects demeurent optionnels afin que
 * la page puisse fonctionner avant le branchement final.
 */
export type CompatibilityEmotionalProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects?: CompatibilityAspect[];
};

/*
 * Propriétés de la page des scores.
 */
export type CompatibilityScoresProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  scores?: CompatibilityScores;
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
 *
 * Ces propriétés correspondent exactement
 * à la page CompatibilityScores.
 */
export type CompatibilityScores = {
  overall: number;
  emotional: number;
  communication: number;
  romantic: number;
  attraction: number;
  stability: number;
  growth: number;
};

/*
 * Propriétés de la synthèse finale.
 *
 * Les scores demeurent optionnels jusqu’au
 * branchement du calcul automatique.
 */
export type CompatibilitySynthesisProps =
  CompatibilitySectionProps & {
    scores?: CompatibilityScores;
  };
