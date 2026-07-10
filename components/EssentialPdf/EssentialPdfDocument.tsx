import { Document } from "@react-pdf/renderer";

import type { EssentialPdfProps } from "./EssentialPdfTypes";
import { MAIN_PLANETS } from "./EssentialPdfUtils";

import PdfCover from "./PdfCover";
import PdfWheel from "./PdfWheel";
import PdfWelcome from "./PdfWelcome";
import PdfSummary from "./PdfSummary";
import PdfPlanet from "./PdfPlanet";
import PdfElements from "./PdfElements";
import PdfModalities from "./PdfModalities";
import PdfConclusion from "./PdfConclusion";

export default function EssentialPdfDocument({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  planets,
  angles,
  wheelImage,
}: EssentialPdfProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const safeAngles =
    angles &&
    typeof angles === "object"
      ? angles
      : {};

  return (
    <Document
      title={`Carte du ciel essentielle - ${
        firstName || "Luna Astralis"
      }`}
      author="Luna Astralis"
      subject="Rapport astrologique personnalisé"
    >
      <PdfCover
        firstName={firstName}
        birthDate={birthDate}
        birthTime={birthTime}
        birthCity={birthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={wheelImage}
      />

      <PdfWheel
        firstName={firstName}
        birthDate={birthDate}
        birthTime={birthTime}
        birthCity={birthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={wheelImage}
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

      <PdfConclusion />
    </Document>
  );
}
