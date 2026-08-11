export type PdfLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

export type EssentialPdfProps = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  planets: any[];
  angles: any;
  wheelImage?: string;
  locale?: PdfLocale;
};

export type PlanetPageProps = {
  planets: any[];
  planet: string;
  locale?: PdfLocale;
};

export type PlanetsProps = {
  planets: any[];
  locale?: PdfLocale;
};

export type SummaryProps = {
  planets: any[];
  angles: any;
  locale?: PdfLocale;
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
