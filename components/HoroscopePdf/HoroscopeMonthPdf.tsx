import {
  Document,
} from "@react-pdf/renderer";

import type {
  MonthlyHoroscopeResult,
} from "./buildMonthlyHoroscope";

/*
|--------------------------------------------------------------------------
| Pages communes
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Pages propres à l’horoscope mensuel
|--------------------------------------------------------------------------
*/

import HoroscopeMonthOverview
  from "./month/HoroscopeMonthOverview";

import HoroscopeMonthMajorEnergies
  from "./month/HoroscopeMonthMajorEnergies";

import HoroscopeMonthMajorAspects
  from "./month/HoroscopeMonthMajorAspects";

import HoroscopeMonthBestPeriods
  from "./month/HoroscopeMonthBestPeriods";

import HoroscopeMonthDelicatePeriods
  from "./month/HoroscopeMonthDelicatePeriods";

import HoroscopeMonthDominantPlanets
  from "./month/HoroscopeMonthDominantPlanets";

import HoroscopeMonthActivatedHouses
  from "./month/HoroscopeMonthActivatedHouses";

import HoroscopeMonthMoonPhases
  from "./month/HoroscopeMonthMoonPhases";

import HoroscopeMonthAstroEvents
  from "./month/HoroscopeMonthAstroEvents";

import HoroscopeMonthWeek1
  from "./month/HoroscopeMonthWeek1";

import HoroscopeMonthWeek2
  from "./month/HoroscopeMonthWeek2";

import HoroscopeMonthWeek3
  from "./month/HoroscopeMonthWeek3";

import HoroscopeMonthWeek4
  from "./month/HoroscopeMonthWeek4";

import HoroscopeMonthMantra
  from "./month/HoroscopeMonthMantra";

/*
|--------------------------------------------------------------------------
| Propriétés du document mensuel
|--------------------------------------------------------------------------
*/

type HoroscopeMonthPdfProps =
  Pick<
    MonthlyHoroscopeResult,
    | "identity"
    | "period"
    | "content"
    | "weeks"
    | "majorEnergies"
    | "astrology"
    | "mantra"
    | "zodiacIconUrl"
  > & {
    logoUrl?: string;
  };

/*
|--------------------------------------------------------------------------
| Document PDF mensuel
|--------------------------------------------------------------------------
*/

export default function HoroscopeMonthPdf({
  identity,
  period,
  content,
  weeks,
  majorEnergies,
  astrology,
  mantra,
  logoUrl,
  zodiacIconUrl,
}: HoroscopeMonthPdfProps) {
  /*
  |--------------------------------------------------------------------------
  | Propriétés partagées par les pages communes
  |--------------------------------------------------------------------------
  */

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
      {/*
      |--------------------------------------------------------------------------
      | Introduction
      |--------------------------------------------------------------------------
      */}

      <HoroscopeCover
        identity={identity}
        period={period}
        reportTitle={
          content.reportTitle
        }
        reportSubtitle={
          content.reportSubtitle
        }
        logoUrl={logoUrl}
        zodiacIconUrl={
          zodiacIconUrl
        }
      />

      <HoroscopeWelcome
        {...sharedProps}
      />

      <HoroscopeMonthOverview
        {...sharedProps}
      />

      {/*
      |--------------------------------------------------------------------------
      | Climat général du mois
      |--------------------------------------------------------------------------
      */}

      <HoroscopeMonthMajorEnergies
        majorEnergies={
          majorEnergies
        }
        zodiacSignLabel={
          identity.zodiacSignLabel
        }
        zodiacIconUrl={
          zodiacIconUrl
        }
      />

      <HoroscopeEnergy
        {...sharedProps}
      />

      {/*
      |--------------------------------------------------------------------------
      | Influences astrologiques
      |--------------------------------------------------------------------------
      */}

      <HoroscopePlanets
        {...sharedProps}
      />

      <HoroscopeMonthMajorAspects
        identity={identity}
        period={period}
        aspects={
          astrology.aspects
        }
      />

      <HoroscopeMonthDominantPlanets
        identity={identity}
        period={period}
        dominantPlanets={
          astrology.dominantPlanets
        }
      />

      <HoroscopeMonthActivatedHouses
        identity={identity}
        period={period}
        activatedHouses={
          astrology.activatedHouses
        }
      />

      <HoroscopeMonthMoonPhases
        identity={identity}
        period={period}
        moonPhases={
          astrology.moonPhases
        }
      />

      <HoroscopeMonthAstroEvents
        identity={identity}
        period={period}
        astroEvents={
          astrology.astroEvents
        }
      />

      {/*
      |--------------------------------------------------------------------------
      | Domaines de vie
      |--------------------------------------------------------------------------
      */}

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

      {/*
      |--------------------------------------------------------------------------
      | Défis et possibilités
      |--------------------------------------------------------------------------
      */}

      <HoroscopeChallenges
        {...sharedProps}
      />

      <HoroscopeOpportunities
        {...sharedProps}
      />

      <HoroscopeMonthBestPeriods
        identity={identity}
        period={period}
        favorablePeriods={
          astrology.favorablePeriods
        }
      />

      <HoroscopeMonthDelicatePeriods
        identity={identity}
        period={period}
        delicatePeriods={
          astrology.delicatePeriods
        }
      />

      {/*
      |--------------------------------------------------------------------------
      | Prévisions semaine par semaine
      |--------------------------------------------------------------------------
      */}

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

      {/*
      |--------------------------------------------------------------------------
      | Guidance intérieure
      |--------------------------------------------------------------------------
      */}

      <HoroscopeMonthMantra
        identity={identity}
        period={period}
        mantra={mantra}
      />

      {/*
      |--------------------------------------------------------------------------
      | Fin du rapport
      |--------------------------------------------------------------------------
      */}

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
