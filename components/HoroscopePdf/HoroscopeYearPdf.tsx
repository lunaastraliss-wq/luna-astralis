import {
  Document,
} from "@react-pdf/renderer";

import type {
  YearlyHoroscopeResult,
} from "./buildYearlyHoroscope";

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
| Pages principales propres à l’horoscope annuel
|--------------------------------------------------------------------------
*/

import HoroscopeYearOverview
  from "./year/HoroscopeYearOverview";

import HoroscopeYearMajorEnergies
  from "./year/HoroscopeYearMajorEnergies";

import HoroscopeYearMajorAspects
  from "./year/HoroscopeYearMajorAspects";

import HoroscopeYearDominantPlanets
  from "./year/HoroscopeYearDominantPlanets";

import HoroscopeYearActivatedHouses
  from "./year/HoroscopeYearActivatedHouses";

/*
|--------------------------------------------------------------------------
| Mantra annuel
|--------------------------------------------------------------------------
*/

import HoroscopeYearMantra
  from "./year/mantra/HoroscopeYearMantra";

/*
|--------------------------------------------------------------------------
| Pages avancées propres à l’horoscope annuel
|--------------------------------------------------------------------------
*/

import HoroscopeYearStrengths
  from "./year/advanced/HoroscopeYearStrengths";

import HoroscopeYearHiddenTalents
  from "./year/advanced/HoroscopeYearHiddenTalents";

/*
|--------------------------------------------------------------------------
| Pages Premium propres à l’horoscope annuel
|--------------------------------------------------------------------------
*/

import YearPremiumPage
  from "./year/advanced/templates/YearPremiumPage";

/*
|--------------------------------------------------------------------------
| Propriétés du document annuel
|--------------------------------------------------------------------------
*/

type HoroscopeYearPdfProps =
  Pick<
    YearlyHoroscopeResult,
    | "identity"
    | "period"
    | "content"
    | "mantra"
    | "overview"
    | "majorEnergies"
    | "majorAspects"
    | "dominantPlanets"
    | "activatedHouses"
    | "zodiacIconUrl"
    | "strengths"
    | "hiddenTalents"
    | "premiumPages"
  > & {
    logoUrl?: string;
  };

/*
|--------------------------------------------------------------------------
| Document PDF annuel
|--------------------------------------------------------------------------
*/

export default function HoroscopeYearPdf({
  identity,
  period,
  content,
  mantra,
  overview,
  majorEnergies,
  majorAspects,
  dominantPlanets,
  activatedHouses,
  logoUrl,
  zodiacIconUrl,
  strengths,
  hiddenTalents,
  premiumPages,
}: HoroscopeYearPdfProps) {
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
        `Horoscope annuel ${identity.zodiacSignLabel}`
      }
      author="Luna Astralis"
      subject={
        `Horoscope annuel personnalisé — ${identity.zodiacSignLabel}`
      }
      creator="Luna Astralis"
      producer="Luna Astralis"
      keywords={[
        "horoscope annuel",
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

      {/*
      |--------------------------------------------------------------------------
      | Pages principales d’analyse annuelle
      |--------------------------------------------------------------------------
      */}

      <HoroscopeYearOverview
        identity={identity}
        period={period}
        overview={overview}
      />

      <HoroscopeYearMajorEnergies
        identity={identity}
        period={period}
        majorEnergies={
          majorEnergies
        }
      />

      <HoroscopeYearMajorAspects
        identity={identity}
        period={period}
        majorAspects={
          majorAspects
        }
      />

      <HoroscopeYearDominantPlanets
        identity={identity}
        period={period}
        dominantPlanets={
          dominantPlanets
        }
      />

      <HoroscopeYearActivatedHouses
        identity={identity}
        period={period}
        activatedHouses={
          activatedHouses
        }
      />

      {/*
      |--------------------------------------------------------------------------
      | Climat général de l’année
      |--------------------------------------------------------------------------
      */}

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

      {/*
      |--------------------------------------------------------------------------
      | Éléments symboliques et conclusion
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

      {/*
      |--------------------------------------------------------------------------
      | Mantra de l’année
      |--------------------------------------------------------------------------
      */}

      <HoroscopeYearMantra
        identity={identity}
        period={period}
        mantra={mantra}
      />

      {/*
      |--------------------------------------------------------------------------
      | Vos plus grandes forces
      |--------------------------------------------------------------------------
      */}

      <HoroscopeYearStrengths
        identity={identity}
        period={period}
        strengths={strengths}
      />

      {/*
      |--------------------------------------------------------------------------
      | Vos talents cachés
      |--------------------------------------------------------------------------
      */}

      <HoroscopeYearHiddenTalents
        identity={identity}
        period={period}
        hiddenTalents={
          hiddenTalents
        }
      />

      {/*
      |--------------------------------------------------------------------------
      | Pages Premium annuelles
      |--------------------------------------------------------------------------
      */}

      {premiumPages.map(
        (page, index) => (
          <YearPremiumPage
            key={
              `year-premium-page-${index}`
            }
            identity={identity}
            period={period}
            page={page}
          />
        ),
      )}
    </Document>
  );
}
