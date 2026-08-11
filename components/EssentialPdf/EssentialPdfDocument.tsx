import { Document } from "@react-pdf/renderer";

import type {
  EssentialPdfProps,
  PdfLocale,
} from "./EssentialPdfTypes";

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
  locale = "fr",
}: EssentialPdfProps) {
  const safeLocale: PdfLocale =
    locale || "fr";

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
        locale={safeLocale}
      />

      <PdfWheel
        firstName={firstName}
        birthDate={birthDate}
        birthTime={birthTime}
        birthCity={birthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={wheelImage}
        locale={safeLocale}
      />

      <PdfWelcome
        locale={safeLocale}
      />

      <PdfSummary
        planets={safePlanets}
        angles={safeAngles}
        locale={safeLocale}
      />

      {MAIN_PLANETS.map(
        (planet) => (
          <PdfPlanet
            key={planet}
            planets={safePlanets}
            planet={planet}
            locale={safeLocale}
          />
        )
      )}

      <PdfElements
        planets={safePlanets}
        locale={safeLocale}
      />

      <PdfModalities
        planets={safePlanets}
        locale={safeLocale}
      />

      <PdfConclusion
        locale={safeLocale}
      />
    </Document>
  );
}
