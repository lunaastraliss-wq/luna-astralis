export type HoroscopePeriod = "day" | "month" | "year";

export type HoroscopeZodiacSign =
  | "belier"
  | "taureau"
  | "gemeaux"
  | "cancer"
  | "lion"
  | "vierge"
  | "balance"
  | "scorpion"
  | "sagittaire"
  | "capricorne"
  | "verseau"
  | "poissons";

export type HoroscopeScore = {
  label: string;
  value: number;
};

export type HoroscopeLuckyData = {
  number: number;
  color: string;
  hour: string;
  keyword?: string;
};

export type HoroscopeTimelineItem = {
  period: "morning" | "afternoon" | "evening";
  title: string;
  text: string;
  score?: number;
};

export type HoroscopePlanetaryInfluence = {
  planet: string;
  sign?: string;
  aspect?: string;
  title: string;
  description: string;
  advice?: string;
};

export type HoroscopeSectionContent = {
  title: string;
  introduction?: string;
  text: string;
  advice?: string;
  score?: number;
  highlights?: string[];
};

export type HoroscopeChallenge = {
  title: string;
  description: string;
  advice: string;
};

export type HoroscopeOpportunity = {
  title: string;
  description: string;
  action: string;
};

export type HoroscopeIdentity = {
  firstName?: string;
  zodiacSign: HoroscopeZodiacSign;
  zodiacSignLabel: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  birthCountry?: string;
};

export type HoroscopePeriodData = {
  type: HoroscopePeriod;

  /**
   * Exemples :
   * - Jour : "20 juillet 2026"
   * - Mois : "Juillet 2026"
   * - Année : "2026"
   */
  label: string;

  /**
   * Format recommandé : YYYY-MM-DD
   */
  startDate: string;

  /**
   * Format recommandé : YYYY-MM-DD
   */
  endDate: string;
};

export type HoroscopePdfContent = {
  reportTitle: string;
  reportSubtitle?: string;
  welcomeText: string;
  openingQuote?: string;

  summary: HoroscopeSectionContent;
  energy: HoroscopeSectionContent;

  planetaryIntroduction?: string;
  planetaryInfluences: HoroscopePlanetaryInfluence[];

  love: HoroscopeSectionContent;
  career: HoroscopeSectionContent;
  money: HoroscopeSectionContent;
  health: HoroscopeSectionContent;
  social: HoroscopeSectionContent;

  challenges: HoroscopeChallenge[];
  opportunities: HoroscopeOpportunity[];

  timeline?: HoroscopeTimelineItem[];

  lucky: HoroscopeLuckyData;

  scores: {
    energy: number;
    love: number;
    career: number;
    money: number;
    health: number;
    social?: number;
  };

  conclusionTitle?: string;
  conclusionText: string;
  finalAdvice?: string;
};

export type HoroscopePdfProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  content: HoroscopePdfContent;

  /**
   * URL ou chemin public vers le logo Luna Astralis.
   */
  logoUrl?: string;

  /**
   * URL ou chemin public vers l’image de couverture.
   */
  coverImageUrl?: string;

  /**
   * URL ou chemin public vers l’icône du signe.
   */
  zodiacIconUrl?: string;

  /**
   * Permet de masquer le numéro sur certaines pages.
   */
  hiddenPageNumbers?: number[];
};

export type HoroscopeSectionProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  content: HoroscopePdfContent;
};

export type HoroscopeCoverProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  reportTitle: string;
  reportSubtitle?: string;
  logoUrl?: string;
  coverImageUrl?: string;
  zodiacIconUrl?: string;
};

export type HoroscopeFooterProps = {
  pageNumber?: number;
  totalPages?: number;
  hidden?: boolean;
};

export type HoroscopeScoreCardProps = {
  label: string;
  value: number;
  description?: string;
};

export type SafeHoroscopePdfProps = HoroscopePdfProps & {
  identity: Required<
    Pick<
      HoroscopeIdentity,
      "zodiacSign" | "zodiacSignLabel"
    >
  > &
    HoroscopeIdentity;

  content: HoroscopePdfContent;
};
