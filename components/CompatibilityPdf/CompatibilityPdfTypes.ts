import type {
  PremiumAngles,
  PremiumPlanet,
} from "@/components/PremiumPdf/PremiumPdfTypes";

export type CompatibilityPerson = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;

  planets?: PremiumPlanet[];
  angles?: PremiumAngles;

  wheelImage?: string;
};

export type CompatibilityAspect = {
  person1Planet: string;
  person2Planet: string;

  type:
    | "conjunction"
    | "opposition"
    | "trine"
    | "square"
    | "sextile"
    | "quincunx";

  orb: number;

  person1Longitude: number;
  person2Longitude: number;
};

export type CompatibilityPdfProps = {
  person1?: CompatibilityPerson;
  person2?: CompatibilityPerson;

  aspects?: CompatibilityAspect[];
};

export type SafeCompatibilityPerson = {
  firstName: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;

  planets: PremiumPlanet[];
  angles: PremiumAngles;

  wheelImage: string;
};

export type CompatibilitySectionProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects: CompatibilityAspect[];
};

export type CompatibilityPlanetComparisonProps =
  CompatibilitySectionProps & {
    person1Planet: string;
    person2Planet: string;
  };

export type CompatibilitySummaryProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
};

export type CompatibilityAspectsProps = {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects: CompatibilityAspect[];
};
