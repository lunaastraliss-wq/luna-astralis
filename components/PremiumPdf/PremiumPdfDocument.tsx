import { Document } from "@react-pdf/renderer";

import type { PremiumPdfProps } from "./PremiumPdfTypes";

import {
  MAIN_PLANETS,
  normalizePlanets,
} from "./PremiumPdfUtils";

import PdfCover from "./PdfCover";
import PdfWheel from "./PdfWheel";
import PdfWelcome from "./PdfWelcome";
import PdfSummary from "./PdfSummary";
import PdfPlanet from "./PdfPlanet";
import PdfElements from "./PdfElements";
import PdfModalities from "./PdfModalities";
import PdfHouses from "./PdfHouses";
import PdfAspects from "./PdfAspects";
import PdfDominants from "./PdfDominants";
import PdfStrengthsChallenges from "./PdfStrengthsChallenges";
import PdfRelationships from "./PdfRelationships";
import PdfCareer from "./PdfCareer";
import PdfPremiumSynthesis from "./PdfPremiumSynthesis";
import PdfConclusion from "./PdfConclusion";

export default function PremiumPdfDocument({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  planets,
  angles,
  wheelImage,
}: PremiumPdfProps) {
  const safeFirstName =
    typeof firstName === "string"
      ? firstName.trim()
      : "";

  const safeBirthDate =
    typeof birthDate === "string"
      ? birthDate.trim()
      : "";

  const safeBirthTime =
    typeof birthTime === "string"
      ? birthTime.trim()
      : "";

  const safeBirthCity =
    typeof birthCity === "string"
      ? birthCity.trim()
      : "";

  const safeWheelImage =
    typeof wheelImage === "string"
      ? wheelImage.trim()
      : "";

  /*
   * Important :
   * les planètes générées après paiement peuvent contenir
   * une longitude sans contenir directement le signe.
   *
   * normalizePlanets ajoute automatiquement le signe
   * calculé depuis la longitude lorsqu'il est absent.
   */
  const safePlanets =
    normalizePlanets(planets);

  const safeAngles =
    angles &&
    typeof angles === "object" &&
    !Array.isArray(angles)
      ? angles
      : {};

  const documentName =
    safeFirstName || "Luna Astralis";

  return (
    <Document
      title={`Carte du ciel Premium - ${documentName}`}
      author="Luna Astralis"
      subject="Rapport astrologique Premium personnalisé"
      creator="Luna Astralis"
      producer="Luna Astralis"
      keywords={[
        "astrologie",
        "carte du ciel",
        "thème natal",
        "rapport Premium",
        "Luna Astralis",
      ].join(", ")}
    >
      <PdfCover
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={safeWheelImage}
      />

      <PdfWheel
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={safeWheelImage}
      />

      <PdfWelcome />

      <PdfSummary
        planets={safePlanets}
        angles={safeAngles}
      />

      {MAIN_PLANETS.map((planet) => (
        <PdfPlanet
          key={planet}
          planets={safePlanets}
          planet={planet}
        />
      ))}

      <PdfElements
        planets={safePlanets}
      />

      <PdfModalities
        planets={safePlanets}
      />

      <PdfHouses
        planets={safePlanets}
      />

      <PdfAspects
        planets={safePlanets}
      />

      <PdfDominants
        planets={safePlanets}
        angles={safeAngles}
      />

      <PdfStrengthsChallenges
        planets={safePlanets}
        angles={safeAngles}
      />

      <PdfRelationships
        planets={safePlanets}
        angles={safeAngles}
      />

      <PdfCareer
        planets={safePlanets}
        angles={safeAngles}
      />

      <PdfPremiumSynthesis
        planets={safePlanets}
        angles={safeAngles}
      />

      <PdfConclusion />
    </Document>
  );
}
