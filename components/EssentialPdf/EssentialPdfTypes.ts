export type EssentialPdfProps = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  planets: any[];
  angles: any;
  wheelImage?: string;
};

export type PlanetPageProps = {
  planets: any[];
  planet: string;
};

export type PlanetsProps = {
  planets: any[];
};

export type SummaryProps = {
  planets: any[];
  angles: any;
};

export type ElementName =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

export type ModalityName =
  | "Cardinal"
  | "Fixe"
  | "Mutable";
