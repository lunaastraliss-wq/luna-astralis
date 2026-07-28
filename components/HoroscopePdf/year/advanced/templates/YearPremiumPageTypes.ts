/*
|--------------------------------------------------------------------------
| Types généraux
|--------------------------------------------------------------------------
*/

export type YearPremiumPageType =
  | "hero"
  | "grid"
  | "timeline"
  | "balance"
  | "summary";

/*
|--------------------------------------------------------------------------
| Élément de carte
|--------------------------------------------------------------------------
*/

export type YearPremiumCardItem = {
  title: string;
  text: string;

  label?: string;
  secondaryText?: string;

  icon?: string;
  score?: number;
};

/*
|--------------------------------------------------------------------------
| Élément chronologique
|--------------------------------------------------------------------------
*/

export type YearPremiumTimelineItem = {
  period: string;
  title: string;
  text: string;

  advice?: string;
  icon?: string;
};

/*
|--------------------------------------------------------------------------
| Élément comparatif
|--------------------------------------------------------------------------
*/

export type YearPremiumBalanceColumn = {
  title: string;
  text: string;

  items?: string[];
  icon?: string;
};

/*
|--------------------------------------------------------------------------
| Données communes d’une page
|--------------------------------------------------------------------------
*/

export type YearPremiumPageData = {
  key: string;

  pageType: YearPremiumPageType;

  eyebrow?: string;
  title: string;
  subtitle?: string;

  icon: string;

  introduction?: string;

  score?: number;
  scoreLabel?: string;

  heroTitle?: string;
  heroText?: string;
  heroAdvice?: string;

  cards?: YearPremiumCardItem[];

  timeline?: YearPremiumTimelineItem[];

  leftColumn?: YearPremiumBalanceColumn;
  rightColumn?: YearPremiumBalanceColumn;

  opportunity?: string;
  vigilance?: string;

  conclusion?: string;
};

/*
|--------------------------------------------------------------------------
| Configuration d’une page
|--------------------------------------------------------------------------
*/

export type YearPremiumPageConfig = {
  key: string;

  pageType: YearPremiumPageType;

  title: string;
  eyebrow?: string;

  icon: string;

  scoreLabel?: string;

  sectionLabels?: {
    cards?: string;
    timeline?: string;
    opportunity?: string;
    vigilance?: string;
    conclusion?: string;
  };
};
