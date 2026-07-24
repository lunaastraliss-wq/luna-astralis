import {
  Document,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "./buildMonthlyHoroscope";

import HoroscopeCover from "./HoroscopeCover";
import HoroscopeWelcome from "./HoroscopeWelcome";
import HoroscopeEnergy from "./HoroscopeEnergy";
import HoroscopePlanets from "./HoroscopePlanets";
import HoroscopeLove from "./HoroscopeLove";
import HoroscopeCareer from "./HoroscopeCareer";
import HoroscopeMoney from "./HoroscopeMoney";
import HoroscopeHealth from "./HoroscopeHealth";
import HoroscopeSocial from "./HoroscopeSocial";
import HoroscopeChallenges from "./HoroscopeChallenges";
import HoroscopeOpportunities from "./HoroscopeOpportunities";
import HoroscopeLucky from "./HoroscopeLucky";
import HoroscopeConclusion from "./HoroscopeConclusion";
import HoroscopeExplore from "./HoroscopeExplore";

import HoroscopeMonthOverview from "./month/HoroscopeMonthOverview";
import HoroscopeMonthMajorEnergies from "./month/HoroscopeMonthMajorEnergies";
import HoroscopeMonthMajorAspects from "./month/HoroscopeMonthMajorAspects";
import HoroscopeMonthWeek1 from "./month/HoroscopeMonthWeek1";
import HoroscopeMonthWeek2 from "./month/HoroscopeMonthWeek2";
import HoroscopeMonthWeek3 from "./month/HoroscopeMonthWeek3";
import HoroscopeMonthWeek4 from "./month/HoroscopeMonthWeek4";

type HoroscopeMonthPdfProps = Pick<
  MonthlyHoroscopeResult,
  | "identity"
  | "period"
  | "content"
  | "weeks"
  | "majorEnergies"
  | "zodiacIconUrl"
> & {
  logoUrl?: string;
};

export default function HoroscopeMonthPdf({
  identity,
  period,
  content,
  weeks,
  majorEnergies,
  logoUrl,
  zodiacIconUrl,
}: HoroscopeMonthPdfProps) {
  const sharedProps = {
    identity,
    period,
    content,
  };

  return (
    <Document
      title={
        content.reportTitle ||
        `Horoscope mensuel ${identity.zodiacSignLabel}`
      }
      author="Luna Astralis"
      subject={
        `Horoscope mensuel personnalisé — ${identity.zodiacSignLabel}`
      }
      creator="Luna Astralis"
      producer="Luna Astralis"
      keywords={[
        "horoscope mensuel",
        "astrologie",
        identity.zodiacSignLabel,
        period.label,
        "Luna Astralis",
      ].join(", ")}
      language="fr-FR"
    >
      <HoroscopeCover
        identity={identity}
        period={period}
        reportTitle={content.reportTitle}
        reportSubtitle={content.reportSubtitle}
        logoUrl={logoUrl}
        zodiacIconUrl={zodiacIconUrl}
      />

      <HoroscopeWelcome
        {...sharedProps}
      />

      <HoroscopeMonthOverview
        {...sharedProps}
      />

      <HoroscopeMonthMajorEnergies
        majorEnergies={majorEnergies}
        zodiacSignLabel={
          identity.zodiacSignLabel
        }
      />

      <HoroscopeEnergy
        {...sharedProps}
      />

      <HoroscopePlanets
        {...sharedProps}
      />

      <HoroscopeMonthMajorAspects
        identity={identity}
        period={period}
      />

      <HoroscopeLove
        {...sharedProps}
      />

      <HoroscopeCareer
        {...sharedProps}
      />

      <HoroscopeMoney
        {...sharedProps}
      />

      <HoroscopeHealth
        {...sharedProps}
      />

      <HoroscopeSocial
        {...sharedProps}
      />

      <HoroscopeChallenges
        {...sharedProps}
      />

      <HoroscopeOpportunities
        {...sharedProps}
      />

      <HoroscopeMonthWeek1
        identity={identity}
        period={period}
        week={weeks.week1}
      />

      <HoroscopeMonthWeek2
        identity={identity}
        period={period}
        week={weeks.week2}
      />

      <HoroscopeMonthWeek3
        identity={identity}
        period={period}
        week={weeks.week3}
      />

      <HoroscopeMonthWeek4
        identity={identity}
        period={period}
        week={weeks.week4}
      />

      <HoroscopeLucky
        {...sharedProps}
      />

      <HoroscopeConclusion
        {...sharedProps}
      />

      <HoroscopeExplore
        {...sharedProps}
      />
    </Document>
  );
}
