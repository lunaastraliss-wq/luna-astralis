"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import {
  useSearchParams,
} from "next/navigation";

import Link from "next/link";

import PremiumPdfDocumentFr
  from "@/paid-pdf-generated/fr/PremiumPdf/PremiumPdfDocument";

import PremiumPdfDocumentEn
  from "@/paid-pdf-generated/en/PremiumPdf/PremiumPdfDocument";

import PremiumPdfDocumentEs
  from "@/paid-pdf-generated/es/PremiumPdf/PremiumPdfDocument";

import PremiumPdfDocumentDe
  from "@/paid-pdf-generated/de/PremiumPdf/PremiumPdfDocument";

import PremiumPdfDocumentIt
  from "@/paid-pdf-generated/it/PremiumPdf/PremiumPdfDocument";

import PremiumPdfDocumentPt
  from "@/paid-pdf-generated/pt/PremiumPdf/PremiumPdfDocument";

type PremiumLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const SUPPORTED_LOCALES:
  PremiumLocale[] = [
    "fr",
    "en",
    "es",
    "de",
    "it",
    "pt",
  ];

const LANGUAGE_LABELS:
  Record<
    PremiumLocale,
    string
  > = {
    fr: "FR",
    en: "EN",
    es: "ES",
    de: "DE",
    it: "IT",
    pt: "PT",
  };

const PDF_DOCUMENTS = {
  fr: PremiumPdfDocumentFr,
  en: PremiumPdfDocumentEn,
  es: PremiumPdfDocumentEs,
  de: PremiumPdfDocumentDe,
  it: PremiumPdfDocumentIt,
  pt: PremiumPdfDocumentPt,
};

function normalizeLocale(
  value:
    | string
    | null,
): PremiumLocale {
  if (
    value &&
    SUPPORTED_LOCALES.includes(
      value as PremiumLocale,
    )
  ) {
    return value as PremiumLocale;
  }

  return "fr";
}

const testPlanets = [
  {
    name: "Sun",
    sign: "Scorpio",
    degree: 25,
    longitude: 235,
    house: 4,
    retrograde: false,
  },
  {
    name: "Moon",
    sign: "Cancer",
    degree: 23,
    longitude: 113,
    house: 12,
    retrograde: false,
  },
  {
    name: "Mercury",
    sign: "Sagittarius",
    degree: 7,
    longitude: 247,
    house: 5,
    retrograde: false,
  },
  {
    name: "Venus",
    sign: "Scorpio",
    degree: 13,
    longitude: 223,
    house: 4,
    retrograde: false,
  },
  {
    name: "Mars",
    sign: "Libra",
    degree: 18,
    longitude: 198,
    house: 3,
    retrograde: false,
  },
  {
    name: "Jupiter",
    sign: "Scorpio",
    degree: 18,
    longitude: 228,
    house: 4,
    retrograde: false,
  },
  {
    name: "Saturn",
    sign: "Taurus",
    degree: 18,
    longitude: 48,
    house: 10,
    retrograde: true,
  },
  {
    name: "Uranus",
    sign: "Libra",
    degree: 11,
    longitude: 191,
    house: 3,
    retrograde: false,
  },
  {
    name: "Neptune",
    sign: "Sagittarius",
    degree: 0,
    longitude: 240,
    house: 5,
    retrograde: false,
  },
  {
    name: "Pluto",
    sign: "Virgo",
    degree: 29,
    longitude: 179,
    house: 2,
    retrograde: false,
  },
];

const testAngles = {
  ascendant: 131,
  midheaven: 26,
  descendant: 311,
  imumCoeli: 206,
};

export default function PdfPremiumViewer() {
  const searchParams =
    useSearchParams();

  const locale =
    normalizeLocale(
      searchParams.get(
        "locale",
      ),
    );

  const PremiumDocument =
    PDF_DOCUMENTS[
      locale
    ];

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#081020",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 20,
          display: "flex",
          gap: 6,
          padding: 7,
          backgroundColor:
            "rgba(6,16,31,0.92)",
          border:
            "1px solid #8f6e35",
          borderRadius: 8,
        }}
      >
        {SUPPORTED_LOCALES.map(
          (language) => (
            <Link
              key={language}
              href={
                `/dev/pdf-premium?locale=${language}`
              }
              style={{
                padding:
                  "6px 9px",
                borderRadius: 5,
                textDecoration:
                  "none",
                fontFamily:
                  "Arial, sans-serif",
                fontSize: 12,
                fontWeight: 700,

                color:
                  locale ===
                  language
                    ? "#081020"
                    : "#fff8e7",

                backgroundColor:
                  locale ===
                  language
                    ? "#f4c95d"
                    : "#152033",
              }}
            >
              {
                LANGUAGE_LABELS[
                  language
                ]
              }
            </Link>
          ),
        )}
      </div>

      <PDFViewer
        key={locale}
        width="100%"
        height="100%"
        style={{
          border: "none",
        }}
        showToolbar
      >
        <PremiumDocument
          firstName="Martine"
          birthDate="17/11/1970"
          birthTime="21:36"
          birthCity="Québec"
          planets={testPlanets}
          angles={testAngles}
          wheelImage=""
        />
      </PDFViewer>
    </main>
  );
}
