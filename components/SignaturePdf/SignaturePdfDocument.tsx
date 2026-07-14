import { Document } from "@react-pdf/renderer";

import type {
  SignatureAngles,
  SignaturePdfProps,
  SignaturePlanet,
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
import PdfSignatureStrengths from "./PdfSignatureStrengths";
import PdfSignatureChallenges from "./PdfSignatureChallenges";
import PdfSignatureRelationships from "./PdfSignatureRelationships";
import PdfSignatureCareer from "./PdfSignatureCareer";
import PdfSignatureSynthesis from "./PdfSignatureSynthesis";
import PdfSignatureConclusion from "./PdfSignatureConclusion";

/*
|--------------------------------------------------------------------------
| Planètes analysées
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Valeurs de secours
|--------------------------------------------------------------------------
*/

const EMPTY_ANGLES: SignatureAngles = {
  ascendant: 0,
  midheaven: 0,
  descendant: 180,
  imumCoeli: 180,
};

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function normalizeText(
  value: string | null | undefined
): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function normalizePlanets(
  value:
    | SignaturePlanet[]
    | null
    | undefined
): SignaturePlanet[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (
      planet
    ): planet is SignaturePlanet =>
      Boolean(
        planet &&
          typeof planet === "object" &&
          typeof planet.name === "string"
      )
  );
}

function normalizeAngles(
  value:
    | SignatureAngles
    | null
    | undefined
): SignatureAngles {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return EMPTY_ANGLES;
  }

  return {
    ascendant:
      typeof value.ascendant === "number" &&
      Number.isFinite(value.ascendant)
        ? value.ascendant
        : EMPTY_ANGLES.ascendant,

    midheaven:
      typeof value.midheaven === "number" &&
      Number.isFinite(value.midheaven)
        ? value.midheaven
        : EMPTY_ANGLES.midheaven,

    descendant:
      typeof value.descendant === "number" &&
      Number.isFinite(value.descendant)
        ? value.descendant
        : EMPTY_ANGLES.descendant,

    imumCoeli:
      typeof value.imumCoeli === "number" &&
      Number.isFinite(value.imumCoeli)
        ? value.imumCoeli
        : EMPTY_ANGLES.imumCoeli,
  };
}

/*
|--------------------------------------------------------------------------
| Document Signature
|--------------------------------------------------------------------------
*/

export default function SignaturePdfDocument({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  planets,
  angles,
  wheelImage,
}: SignaturePdfProps) {
  /*
  |--------------------------------------------------------------------------
  | Données sécurisées
  |--------------------------------------------------------------------------
  */

  const safeFirstName =
    normalizeText(firstName);

  const safeBirthDate =
    normalizeText(birthDate);

  const safeBirthTime =
    normalizeText(birthTime);

  const safeBirthCity =
    normalizeText(birthCity);

  const safeWheelImage =
    normalizeText(wheelImage);

  const safePlanets: SignaturePlanet[] =
    normalizePlanets(planets);

  const safeAngles: SignatureAngles =
    normalizeAngles(angles);

  const documentName =
    safeFirstName || "Luna Astralis";

  /*
  |--------------------------------------------------------------------------
  | Rendu du document
  |--------------------------------------------------------------------------
  */

  return (
    <Document
      title={`Carte du ciel Signature - ${documentName}`}
      author="Luna Astralis"
      subject="Rapport astrologique Signature personnalisé"
      creator="Luna Astralis"
      producer="Luna Astralis"
      language="fr-CA"
      keywords={[
        "astrologie",
        "carte du ciel",
        "thème natal",
        "rapport astrologique",
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

      {/* 6 à 15. Analyse des dix planètes */}
      {SIGNATURE_PLANETS.map(
        (planetName) => (
          <PdfSignaturePlanet
            key={planetName}
            planet={planetName}
            planets={safePlanets}
          />
        )
      )}

      {/* 16. Répartition des éléments */}
      <PdfSignatureElements
        planets={safePlanets}
      />

      {/* 17. Répartition des modalités */}
      <PdfSignatureModalities
        planets={safePlanets}
      />

      {/* 18. Analyse des maisons */}
      <PdfSignatureHouses
        planets={safePlanets}
      />

      {/* 19. Aspects planétaires */}
      <PdfSignatureAspects
        planets={safePlanets}
      />

      {/* 20. Dominantes du thème */}
      <PdfSignatureDominants
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* 21 et 22. Forces naturelles */}
      <PdfSignatureStrengths
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* 23 et 24. Défis d’évolution */}
      <PdfSignatureChallenges
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* 25. Vie relationnelle */}
      <PdfSignatureRelationships
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* 26. Carrière et vocation */}
      <PdfSignatureCareer
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* 27. Synthèse Signature */}
      <PdfSignatureSynthesis
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* 28. Conclusion */}
      <PdfSignatureConclusion />
    </Document>
  );
}
