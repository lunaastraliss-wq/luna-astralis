export type HoroscopePeriod =
  | "day"
  | "month"
  | "year";

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
  introduction?: string;
  numbers: number[];

  color?: string;
  day?: string;
  stone?: string;
  element?: string;
  planet?: string;
  time?: string;
  quote?: string;
  keyword?: string;
};

export type HoroscopeTimelineItem = {
  period:
    | "morning"
    | "afternoon"
    | "evening";

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
  highlights?: readonly string[];
};

export type HoroscopeChallenge = {
  title: string;
  theme?: string;
  description: string;
  advice?: string;
};

export type HoroscopeOpportunity = {
  title: string;
  theme?: string;
  description: string;
  action?: string;
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

  label: string;
  startDate: string;
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

  challengesIntroduction?: string;
  challenges: HoroscopeChallenge[];

  opportunitiesIntroduction?: string;
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
  conclusion?: string;
  finalMessage?: string;
};

export type HoroscopePdfProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  content: HoroscopePdfContent;

  logoUrl?: string;
  coverImageUrl?: string;
  zodiacIconUrl?: string;

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
  identity: HoroscopeIdentity & {
    zodiacSign: HoroscopeZodiacSign;
    zodiacSignLabel: string;
  };

  period: HoroscopePeriodData;
  content: HoroscopePdfContent;
};
