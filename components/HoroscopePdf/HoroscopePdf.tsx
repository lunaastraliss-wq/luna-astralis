import { Document } from "@react-pdf/renderer";

import type {
  HoroscopePdfProps,
} from "./HoroscopePdfTypes";

import HoroscopeCover from "./HoroscopeCover";
import HoroscopeWelcome from "./HoroscopeWelcome";
import HoroscopeSummary from "./HoroscopeSummary";
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

export default function HoroscopePdf({
  identity,
  period,
  content,
}: HoroscopePdfProps) {
  const sharedProps = {
    identity,
    period,
    content,
  };

  return (
    <Document
      title={
        content.reportTitle ||
        `Horoscope ${identity.zodiacSignLabel}`
      }
      author="Luna Astralis"
      subject={`Horoscope personnalisé — ${identity.zodiacSignLabel}`}
      creator="Luna Astralis"
      producer="Luna Astralis"
      keywords={[
        "horoscope",
        "astrologie",
        identity.zodiacSignLabel,
        "Luna Astralis",
      ].join(", ")}
      language="fr-FR"
    >
      <HoroscopeCover
        identity={identity}
        period={period}
        content={content}
      />

      <HoroscopeWelcome {...sharedProps} />

      <HoroscopeSummary {...sharedProps} />

      <HoroscopeEnergy {...sharedProps} />

      <HoroscopePlanets {...sharedProps} />

      <HoroscopeLove {...sharedProps} />

      <HoroscopeCareer {...sharedProps} />

      <HoroscopeMoney {...sharedProps} />

      <HoroscopeHealth {...sharedProps} />

      <HoroscopeSocial {...sharedProps} />

      <HoroscopeChallenges {...sharedProps} />

      <HoroscopeOpportunities {...sharedProps} />

      <HoroscopeLucky {...sharedProps} />

      <HoroscopeConclusion {...sharedProps} />
    </Document>
  );
}
