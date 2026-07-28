import type {
  HoroscopeIdentity,
  HoroscopePeriodData,
} from "../../../HoroscopePdfTypes";

import type {
  YearPremiumPageData,
} from "./YearPremiumPageTypes";

import YearPremiumHeroPage
  from "./YearPremiumHeroPage";

import YearPremiumGridPage
  from "./YearPremiumGridPage";

import YearPremiumTimelinePage
  from "./YearPremiumTimelinePage";

import YearPremiumBalancePage
  from "./YearPremiumBalancePage";

import YearPremiumSummaryPage
  from "./YearPremiumSummaryPage";

/*
|--------------------------------------------------------------------------
| Propriétés
|--------------------------------------------------------------------------
*/

type YearPremiumPageProps = {
  identity: HoroscopeIdentity;
  period: HoroscopePeriodData;
  page: YearPremiumPageData;
};

/*
|--------------------------------------------------------------------------
| Composant central
|--------------------------------------------------------------------------
|
| Ce composant choisit automatiquement le bon modèle visuel selon
| la valeur de page.pageType.
|
*/

export default function YearPremiumPage({
  identity,
  period,
  page,
}: YearPremiumPageProps) {
  switch (page.pageType) {
    case "hero":
      return (
        <YearPremiumHeroPage
          identity={identity}
          period={period}
          page={page}
        />
      );

    case "grid":
      return (
        <YearPremiumGridPage
          identity={identity}
          period={period}
          page={page}
        />
      );

    case "timeline":
      return (
        <YearPremiumTimelinePage
          identity={identity}
          period={period}
          page={page}
        />
      );

    case "balance":
      return (
        <YearPremiumBalancePage
          identity={identity}
          period={period}
          page={page}
        />
      );

    case "summary":
      return (
        <YearPremiumSummaryPage
          identity={identity}
          period={period}
          page={page}
        />
      );

    default:
      return (
        <YearPremiumSummaryPage
          identity={identity}
          period={period}
          page={page}
        />
      );
  }
}
