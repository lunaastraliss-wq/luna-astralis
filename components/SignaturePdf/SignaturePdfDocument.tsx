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
import PdfSignatureLifePurpose from "./PdfSignatureLifePurpose";
import PdfSignatureSoulPath from "./PdfSignatureSoulPath";
import PdfSignatureInnerWorld from "./PdfSignatureInnerWorld";
import PdfSignatureLifeBlocks from "./PdfSignatureLifeBlocks";
import PdfSignatureHiddenTalents from "./PdfSignatureHiddenTalents";
import PdfSignatureIntegrationGuide from "./PdfSignatureIntegrationGuide";
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
| Signes par longitude
|--------------------------------------------------------------------------
*/

const SIGNS_BY_LONGITUDE = [
  "Bélier",
  "Taureau",
  "Gémeaux",
  "Cancer",
  "Lion",
  "Vierge",
  "Balance",
  "Scorpion",
  "Sagittaire",
  "Capricorne",
  "Verseau",
  "Poissons",
] as const;

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

function normalizeLongitude(
  value: unknown
): number | undefined {
  if (
    typeof value === "number" &&
    Number.isFinite(value)
  ) {
    return (
      ((value % 360) + 360) % 360
    );
  }

  if (
    typeof value === "string" &&
    value.trim().length > 0
  ) {
    const numericValue =
      Number(value.trim());

    if (Number.isFinite(numericValue)) {
      return (
        ((numericValue % 360) + 360) %
        360
      );
    }
  }

  return undefined;
}

function getSignFromLongitude(
  longitude: unknown
): string {
  const normalizedLongitude =
    normalizeLongitude(longitude);

  if (
    typeof normalizedLongitude !==
    "number"
  ) {
    return "";
  }

  const signIndex = Math.floor(
    normalizedLongitude / 30
  );

  return (
    SIGNS_BY_LONGITUDE[signIndex] ||
    ""
  );
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

  return value
    .filter(
      (
        planet
      ): planet is SignaturePlanet =>
        Boolean(
          planet &&
            typeof planet ===
              "object" &&
            typeof planet.name ===
              "string" &&
            planet.name.trim().length >
              0
        )
    )
    .map((planet) => {
      const normalizedName =
        planet.name?.trim() || "";

      const normalizedSign =
        typeof planet.sign ===
          "string"
          ? planet.sign.trim()
          : "";

      const normalizedPlanetLongitude =
        normalizeLongitude(
          planet.longitude
        );

      const calculatedSign =
        normalizedSign ||
        getSignFromLongitude(
          normalizedPlanetLongitude
        );

      const normalizedDegree =
        typeof planet.degree ===
          "number" &&
        Number.isFinite(
          planet.degree
        )
          ? planet.degree
          : undefined;

      const normalizedHouse =
        typeof planet.house ===
          "number" &&
        Number.isFinite(
          planet.house
        )
          ? planet.house
          : undefined;

      return {
        ...planet,
        name: normalizedName,
        sign: calculatedSign,
        longitude:
          normalizedPlanetLongitude,
        degree: normalizedDegree,
        house: normalizedHouse,
        retrograde:
          planet.retrograde === true,
      };
    });
}

function asRecord(
  value: unknown
): Record<string, unknown> | null {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return null;
  }

  return value as Record<
    string,
    unknown
  >;
}

function readAngle(
  record: Record<string, unknown>,
  keys: string[]
): number | undefined {
  for (const key of keys) {
    const value = record[key];

    const normalized =
      normalizeLongitude(value);

    if (
      typeof normalized === "number"
    ) {
      return normalized;
    }

    const nestedRecord =
      asRecord(value);

    if (!nestedRecord) {
      continue;
    }

    const nestedKeys = [
      "longitude",
      "degree",
      "degrees",
      "value",
    ];

    for (const nestedKey of nestedKeys) {
      const nestedValue =
        normalizeLongitude(
          nestedRecord[nestedKey]
        );

      if (
        typeof nestedValue ===
        "number"
      ) {
        return nestedValue;
      }
    }
  }

  return undefined;
}

function normalizeAngles(
  value:
    | SignatureAngles
    | null
    | undefined
): SignatureAngles {
  const record = asRecord(value);

  if (!record) {
    return {};
  }

  const ascendant = readAngle(
    record,
    [
      "ascendant",
      "Ascendant",
      "ASC",
      "asc",
      "rising",
    ]
  );

  const midheaven = readAngle(
    record,
    [
      "midheaven",
      "midHeaven",
      "Midheaven",
      "MC",
      "mc",
    ]
  );

  const descendant =
    readAngle(record, [
      "descendant",
      "Descendant",
      "DSC",
      "dsc",
    ]) ??
    (typeof ascendant === "number"
      ? (ascendant + 180) % 360
      : undefined);

  const imumCoeli =
    readAngle(record, [
      "imumCoeli",
      "imum_coeli",
      "ImumCoeli",
      "IC",
      "ic",
    ]) ??
    (typeof midheaven === "number"
      ? (midheaven + 180) % 360
      : undefined);

  const normalizedAngles:
    SignatureAngles = {};

  if (
    typeof ascendant === "number"
  ) {
    normalizedAngles.ascendant =
      ascendant;
  }

  if (
    typeof midheaven === "number"
  ) {
    normalizedAngles.midheaven =
      midheaven;
  }

  if (
    typeof descendant === "number"
  ) {
    normalizedAngles.descendant =
      descendant;
  }

  if (
    typeof imumCoeli === "number"
  ) {
    normalizedAngles.imumCoeli =
      imumCoeli;
  }

  return normalizedAngles;
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

  const safePlanets:
    SignaturePlanet[] =
    normalizePlanets(planets);

  const safeAngles:
    SignatureAngles =
    normalizeAngles(angles);

  const documentName =
    safeFirstName ||
    "Luna Astralis";

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
      {/* Couverture */}
      <PdfSignatureCover
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={safeWheelImage}
      />

      {/* Roue astrologique */}
      <PdfSignatureWheel
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={safeAngles}
        wheelImage={safeWheelImage}
      />

      {/* Guide de lecture */}
      <PdfSignatureWheelGuide />

      {/* Introduction */}
      <PdfSignatureWelcome
        firstName={safeFirstName}
      />

      {/* Soleil, Lune et Ascendant */}
      <PdfSignatureSummary
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Analyse des dix planètes */}
      {SIGNATURE_PLANETS.map(
        (planetName) => (
          <PdfSignaturePlanet
            key={planetName}
            planet={planetName}
            planets={safePlanets}
          />
        )
      )}

      {/* Répartition des éléments */}
      <PdfSignatureElements
        planets={safePlanets}
      />

      {/* Répartition des modalités */}
      <PdfSignatureModalities
        planets={safePlanets}
      />

      {/* Analyse des maisons */}
      <PdfSignatureHouses
        planets={safePlanets}
      />

      {/* Aspects planétaires */}
      <PdfSignatureAspects
        planets={safePlanets}
      />

      {/* Dominantes du thème */}
      <PdfSignatureDominants
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Forces naturelles */}
      <PdfSignatureStrengths
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Défis d’évolution */}
      <PdfSignatureChallenges
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Vie relationnelle */}
      <PdfSignatureRelationships
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Carrière et vocation */}
      <PdfSignatureCareer
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Mission de vie */}
      <PdfSignatureLifePurpose
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Chemin de l’âme */}
      <PdfSignatureSoulPath
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Monde intérieur */}
      <PdfSignatureInnerWorld
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Blocages inconscients */}
      <PdfSignatureLifeBlocks
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Talents cachés */}
      <PdfSignatureHiddenTalents
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Guide d’intégration */}
      <PdfSignatureIntegrationGuide
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Synthèse Signature */}
      <PdfSignatureSynthesis
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />

      {/* Conclusion personnalisée */}
      <PdfSignatureConclusion
        firstName={safeFirstName}
        planets={safePlanets}
        angles={safeAngles}
      />
    </Document>
  );
      }
