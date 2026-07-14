import { Document } from "@react-pdf/renderer";

import type {
  SignaturePdfProps,
} from "./SignaturePdfTypes";

import PdfSignatureCover from "./PdfSignatureCover";
import PdfSignatureWheel from "./PdfSignatureWheel";
import PdfSignatureWheelGuide from "./PdfSignatureWheelGuide";
import PdfSignatureWelcome from "./PdfSignatureWelcome";
import PdfSignatureSummary from "./PdfSignatureSummary";
import PdfSignaturePlanet from "./PdfSignaturePlanet";
import PdfSignatureElements from "./PdfSignatureElements";
import PdfSignatureModalities from "./PdfSignatureModalities";
import PdfSignatureHouses from "./PdfSignatureHouses";
import PdfSignatureAspects from "./PdfSignatureAspects";
import PdfSignatureDominants from "./PdfSignatureDominants";
import PdfSignatureRelationships from "./PdfSignatureRelationships";
import PdfSignatureCareer from "./PdfSignatureCareer";
import PdfSignatureSynthesis from "./PdfSignatureSynthesis";
import PdfSignatureConclusion from "./PdfSignatureConclusion";

const SIGNATURE_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
] as const;

export default function SignaturePdfDocument({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  planets,
  angles,
  wheelImage,
}: SignaturePdfProps) {
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

  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const safeAngles =
    angles &&
    typeof angles === "object"
      ? angles
      : {};

  const documentName =
    safeFirstName || "Luna Astralis";

  return (
    <Document
      title={`Carte du ciel Signature - ${documentName}`}
      author="Luna Astralis"
      subject="Rapport astrologique Signature personnalisé"
      creator="Luna Astralis"
      producer="Luna Astralis"
      keywords={[
        "astrologie",
        "carte du ciel",
        "thème natal",
        "rapport Signature",
        "Luna Astralis",
      ].join(", ")}
    >
      {/* 1. Couverture */}
      <PdfSignatureCover
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={safeWheelImage}
      />

      {/* 2. Roue astrologique */}
      <PdfSignatureWheel
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={safeWheelImage}
      />

      {/* 3. Guide de lecture de la roue */}
      <PdfSignatureWheelGuide />

      {/* 4. Introduction */}
      <PdfSignatureWelcome
        firstName={safeFirstName}
      />

      {/* 5. Soleil, Lune et Ascendant */}
      <PdfSignatureSummary
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* 6 à 15. Les dix planètes */}
      {SIGNATURE_PLANETS.map(
        (planetName) => (
          <PdfSignaturePlanet
            key={planetName}
            planets={safePlanets}
            planet={planetName}
          />
        )
      )}

      {/* Éléments */}
      <PdfSignatureElements
        planets={safePlanets}
      />

      {/* Modalités */}
      <PdfSignatureModalities
        planets={safePlanets}
      />

      {/* Maisons */}
      <PdfSignatureHouses
        planets={safePlanets}
      />

      {/* Aspects */}
      <PdfSignatureAspects
        planets={safePlanets}
      />

      {/* Dominantes */}
      <PdfSignatureDominants
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Relations */}
      <PdfSignatureRelationships
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Carrière et vocation */}
      <PdfSignatureCareer
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Synthèse Signature */}
      <PdfSignatureSynthesis
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Conclusion */}
      <PdfSignatureConclusion />
    </Document>
  );
}
