"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import {
  useSearchParams,
} from "next/navigation";

import Link from "next/link";

import EssentialPdfDocumentFr
  from "@/paid-pdf-generated/fr/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentEn
  from "@/paid-pdf-generated/en/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentEs
  from "@/paid-pdf-generated/es/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentDe
  from "@/paid-pdf-generated/de/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentIt
  from "@/paid-pdf-generated/it/EssentialPdf/EssentialPdfDocument";

import EssentialPdfDocumentPt
  from "@/paid-pdf-generated/pt/EssentialPdf/EssentialPdfDocument";

type Locale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const PDF_DOCUMENTS = {
  fr: EssentialPdfDocumentFr,
  en: EssentialPdfDocumentEn,
  es: EssentialPdfDocumentEs,
  de: EssentialPdfDocumentDe,
  it: EssentialPdfDocumentIt,
  pt: EssentialPdfDocumentPt,
};

const LANGUAGES:
Locale[] = [
  "fr",
  "en",
  "es",
  "de",
  "it",
  "pt",
];

const testPlanets = [
  {
    name: "Sun",
    sign: "Scorpio",
    degree: 25,
    longitude: 235,
    retrograde: false,
  },
  {
    name: "Moon",
    sign: "Cancer",
    degree: 23,
    longitude: 113,
    retrograde: false,
  },
  {
    name: "Mercury",
    sign: "Sagittarius",
    degree: 7,
    longitude: 247,
    retrograde: false,
  },
  {
    name: "Venus",
    sign: "Scorpio",
    degree: 13,
    longitude: 223,
    retrograde: false,
  },
  {
    name: "Mars",
    sign: "Libra",
    degree: 18,
    longitude: 198,
    retrograde: false,
  },
  {
    name: "Jupiter",
    sign: "Scorpio",
    degree: 18,
    longitude: 228,
    retrograde: false,
  },
  {
    name: "Saturn",
    sign: "Taurus",
    degree: 18,
    longitude: 48,
    retrograde: true,
  },
  {
    name: "Uranus",
    sign: "Libra",
    degree: 11,
    longitude: 191,
    retrograde: false,
  },
  {
    name: "Neptune",
    sign: "Sagittarius",
    degree: 0,
    longitude: 240,
    retrograde: false,
  },
  {
    name: "Pluto",
    sign: "Virgo",
    degree: 29,
    longitude: 179,
    retrograde: false,
  },
];

const testAngles = {
  ascendant: {
    sign: "Leo",
    degree: 11,
    longitude: 131,
  },

  midheaven: {
    sign: "Aries",
    degree: 26,
    longitude: 26,
  },
};

export default function PdfEssentialViewer() {
  const searchParams =
    useSearchParams();

  const rawLocale =
    searchParams.get("locale");

  const locale: Locale =
    LANGUAGES.includes(
      rawLocale as Locale,
    )
      ? (rawLocale as Locale)
      : "fr";

  const EssentialDocument =
    PDF_DOCUMENTS[locale];

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
        }}
      >
        {LANGUAGES.map(
          (language) => (
            <Link
              key={language}
              href={
                `/dev/pdf-essential?locale=${language}`
              }
              style={{
                padding:
                  "6px 9px",

                borderRadius:
                  5,

                textDecoration:
                  "none",

                fontFamily:
                  "Arial, sans-serif",

                fontSize:
                  12,

                fontWeight:
                  700,

                color:
                  locale === language
                    ? "#081020"
                    : "#fff8e7",

                backgroundColor:
                  locale === language
                    ? "#f4c95d"
                    : "#152033",
              }}
            >
              {language.toUpperCase()}
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
        <EssentialDocument
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
