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
| Propriétés du document annuel
|--------------------------------------------------------------------------
*/

type HoroscopeYearPdfProps =
  Pick<
    YearlyHoroscopeResult,
    | "identity"
    | "period"
    | "content"
    | "zodiacIconUrl"
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
  logoUrl,
  zodiacIconUrl,
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
