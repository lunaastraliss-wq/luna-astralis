import {
  Document,
} from "@react-pdf/renderer";

import type {
  SignatureAngles,
  SignatureLocale,
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
| Signes internes
|--------------------------------------------------------------------------
|
| Important :
| On garde les signes internes en anglais.
| Les composants se chargeront de les afficher dans la bonne langue.
|
|--------------------------------------------------------------------------
*/

const SIGNS_BY_LONGITUDE = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function normalizeText(
  value:
    | string
    | null
    | undefined,
): string {
  return typeof value ===
    "string"
    ? value.trim()
    : "";
}

function normalizeLongitude(
  value: unknown,
): number | undefined {
  if (
    typeof value ===
      "number" &&
    Number.isFinite(
      value,
    )
  ) {
    return (
      ((value % 360) +
        360) %
      360
    );
  }

  if (
    typeof value ===
      "string" &&
    value.trim().length >
      0
  ) {
    const numericValue =
      Number(
        value.trim(),
      );

    if (
      Number.isFinite(
        numericValue,
      )
    ) {
      return (
        ((numericValue %
          360) +
          360) %
        360
      );
    }
  }

  return undefined;
}

function getSignFromLongitude(
  longitude: unknown,
): string {
  const normalizedLongitude =
    normalizeLongitude(
      longitude,
    );

  if (
    typeof normalizedLongitude !==
    "number"
  ) {
    return "";
  }

  const signIndex =
    Math.floor(
      normalizedLongitude /
        30,
    );

  return (
    SIGNS_BY_LONGITUDE[
      signIndex
    ] || ""
  );
}

function normalizePlanets(
  value:
    | SignaturePlanet[]
    | null
    | undefined,
): SignaturePlanet[] {
  if (
    !Array.isArray(
      value,
    )
  ) {
    return [];
  }

  return value
    .filter(
      (
        planet,
      ): planet is SignaturePlanet =>
        Boolean(
          planet &&
            typeof planet ===
              "object" &&
            typeof planet.name ===
              "string" &&
            planet.name
              .trim()
              .length >
              0,
        ),
    )
    .map(
      (
        planet,
      ) => {
        const normalizedName =
          planet.name?.trim() ||
          "";

        const normalizedSign =
          typeof planet.sign ===
          "string"
            ? planet.sign.trim()
            : "";

        const normalizedPlanetLongitude =
          normalizeLongitude(
            planet.longitude,
          );

        const calculatedSign =
          normalizedSign ||
          getSignFromLongitude(
            normalizedPlanetLongitude,
          );

        const normalizedDegree =
          typeof planet.degree ===
            "number" &&
          Number.isFinite(
            planet.degree,
          )
            ? planet.degree
            : undefined;

        const normalizedHouse =
          typeof planet.house ===
            "number" &&
          Number.isFinite(
            planet.house,
          )
            ? planet.house
            : undefined;

        return {
          ...planet,

          name:
            normalizedName,

          sign:
            calculatedSign,

          longitude:
            normalizedPlanetLongitude,

          degree:
            normalizedDegree,

          house:
            normalizedHouse,

          retrograde:
            planet.retrograde ===
            true,
        };
      },
    );
}

function asRecord(
  value: unknown,
): Record<
  string,
  unknown
> | null {
  if (
    !value ||
    typeof value !==
      "object" ||
    Array.isArray(
      value,
    )
  ) {
    return null;
  }

  return value as Record<
    string,
    unknown
  >;
}

function readAngle(
  record: Record<
    string,
    unknown
  >,
  keys: string[],
): number | undefined {
  for (
    const key of keys
  ) {
    const value =
      record[key];

    const normalized =
      normalizeLongitude(
        value,
      );

    if (
      typeof normalized ===
      "number"
    ) {
      return normalized;
    }

    const nestedRecord =
      asRecord(
        value,
      );

    if (
      !nestedRecord
    ) {
      continue;
    }

    const nestedKeys = [
      "longitude",
      "degree",
      "degrees",
      "value",
    ];

    for (
      const nestedKey of
      nestedKeys
    ) {
      const nestedValue =
        normalizeLongitude(
          nestedRecord[
            nestedKey
          ],
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
    | undefined,
): SignatureAngles {
  const record =
    asRecord(
      value,
    );

  if (
    !record
  ) {
    return {};
  }

  const ascendant =
    readAngle(
      record,
      [
        "ascendant",
        "Ascendant",
        "ASC",
        "asc",
        "rising",
      ],
    );

  const midheaven =
    readAngle(
      record,
      [
        "midheaven",
        "midHeaven",
        "Midheaven",
        "MC",
        "mc",
      ],
    );

  const descendant =
    readAngle(
      record,
      [
        "descendant",
        "Descendant",
        "DSC",
        "dsc",
      ],
    ) ??
    (
      typeof ascendant ===
      "number"
        ? (
            ascendant +
            180
          ) %
          360
        : undefined
    );

  const imumCoeli =
    readAngle(
      record,
      [
        "imumCoeli",
        "imum_coeli",
        "ImumCoeli",
        "IC",
        "ic",
      ],
    ) ??
    (
      typeof midheaven ===
      "number"
        ? (
            midheaven +
            180
          ) %
          360
        : undefined
    );

  const normalizedAngles:
    SignatureAngles = {};

  if (
    typeof ascendant ===
    "number"
  ) {
    normalizedAngles.ascendant =
      ascendant;
  }

  if (
    typeof midheaven ===
    "number"
  ) {
    normalizedAngles.midheaven =
      midheaven;
  }

  if (
    typeof descendant ===
    "number"
  ) {
    normalizedAngles.descendant =
      descendant;
  }

  if (
    typeof imumCoeli ===
    "number"
  ) {
    normalizedAngles.imumCoeli =
      imumCoeli;
  }

  return normalizedAngles;
}

/*
|--------------------------------------------------------------------------
| Métadonnées du PDF
|--------------------------------------------------------------------------
*/

const DOCUMENT_META: Record<
  SignatureLocale,
  {
    title: string;
    subject: string;
    language: string;
    keywords: string;
  }
> = {
  fr: {
    title:
      "Carte du ciel Signature",

    subject:
      "Rapport astrologique Signature personnalisé",

    language:
      "fr-CA",

    keywords:
      "astrologie, carte du ciel, thème natal, rapport astrologique, rapport Signature, Luna Astralis",
  },

  en: {
    title:
      "Signature Birth Chart",

    subject:
      "Personalized Signature astrological report",

    language:
      "en",

    keywords:
      "astrology, birth chart, natal chart, astrological report, Signature report, Luna Astralis",
  },

  es: {
    title:
      "Carta natal Signature",

    subject:
      "Informe astrológico Signature personalizado",

    language:
      "es",

    keywords:
      "astrología, carta natal, tema natal, informe astrológico, informe Signature, Luna Astralis",
  },

  de: {
    title:
      "Signature Geburtshoroskop",

    subject:
      "Personalisierter astrologischer Signature-Bericht",

    language:
      "de",

    keywords:
      "Astrologie, Geburtshoroskop, astrologischer Bericht, Signature-Bericht, Luna Astralis",
  },

  it: {
    title:
      "Tema natale Signature",

    subject:
      "Rapporto astrologico Signature personalizzato",

    language:
      "it",

    keywords:
      "astrologia, tema natale, carta natale, rapporto astrologico, rapporto Signature, Luna Astralis",
  },

  pt: {
    title:
      "Mapa astral Signature",

    subject:
      "Relatório astrológico Signature personalizado",

    language:
      "pt-BR",

    keywords:
      "astrologia, mapa astral, mapa natal, relatório astrológico, relatório Signature, Luna Astralis",
  },
};

/*
|--------------------------------------------------------------------------
| Document Signature
|--------------------------------------------------------------------------
*/

export default function SignaturePdfDocument({
  locale = "fr",

  firstName,
  birthDate,
  birthTime,
  birthCity,

  planets,
  angles,
  wheelImage,
}: SignaturePdfProps) {
  const safeLocale:
    SignatureLocale =
    locale || "fr";

  /*
  |--------------------------------------------------------------------------
  | Données sécurisées
  |--------------------------------------------------------------------------
  */

  const safeFirstName =
    normalizeText(
      firstName,
    );

  const safeBirthDate =
    normalizeText(
      birthDate,
    );

  const safeBirthTime =
    normalizeText(
      birthTime,
    );

  const safeBirthCity =
    normalizeText(
      birthCity,
    );

  const safeWheelImage =
    normalizeText(
      wheelImage,
    );

  const safePlanets:
    SignaturePlanet[] =
    normalizePlanets(
      planets,
    );

  const safeAngles:
    SignatureAngles =
    normalizeAngles(
      angles,
    );

  const documentName =
    safeFirstName ||
    "Luna Astralis";

  const meta =
    DOCUMENT_META[
      safeLocale
    ] ||
    DOCUMENT_META.fr;

  /*
  |--------------------------------------------------------------------------
  | Rendu du document
  |--------------------------------------------------------------------------
  */

  return (
    <Document
      title={`${meta.title} - ${documentName}`}
      author="Luna Astralis"
      subject={meta.subject}
      creator="Luna Astralis"
      producer="Luna Astralis"
      language={meta.language}
      keywords={meta.keywords}
    >
      <PdfSignatureCover
        firstName={
          safeFirstName
        }
        birthDate={
          safeBirthDate
        }
        birthTime={
          safeBirthTime
        }
        birthCity={
          safeBirthCity
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        wheelImage={
          safeWheelImage
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureWheel
        firstName={
          safeFirstName
        }
        birthDate={
          safeBirthDate
        }
        birthTime={
          safeBirthTime
        }
        birthCity={
          safeBirthCity
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        wheelImage={
          safeWheelImage
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureWheelGuide
        locale={
          safeLocale
        }
      />

      <PdfSignatureWelcome
        firstName={
          safeFirstName
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureSummary
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      {SIGNATURE_PLANETS.map(
        (
          planetName,
        ) => (
          <PdfSignaturePlanet
            key={
              planetName
            }
            planet={
              planetName
            }
            planets={
              safePlanets
            }
            locale={
              safeLocale
            }
          />
        ),
      )}

      <PdfSignatureElements
        planets={
          safePlanets
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureModalities
        planets={
          safePlanets
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureHouses
        planets={
          safePlanets
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureAspects
        planets={
          safePlanets
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureDominants
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureStrengths
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureChallenges
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureRelationships
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureCareer
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureLifePurpose
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureSoulPath
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureInnerWorld
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureLifeBlocks
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureHiddenTalents
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureIntegrationGuide
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureSynthesis
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />

      <PdfSignatureConclusion
        firstName={
          safeFirstName
        }
        planets={
          safePlanets
        }
        angles={
          safeAngles
        }
        locale={
          safeLocale
        }
      />
    </Document>
  );
}
