"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import Link from "next/link";

import HoroscopeYearPdfFr
  from "@/paid-pdf-generated/fr/HoroscopePdf/HoroscopeYearPdf";

import HoroscopeYearPdfEn
  from "@/paid-pdf-generated/en/HoroscopePdf/HoroscopeYearPdf";

import HoroscopeYearPdfEs
  from "@/paid-pdf-generated/es/HoroscopePdf/HoroscopeYearPdf";

import HoroscopeYearPdfDe
  from "@/paid-pdf-generated/de/HoroscopePdf/HoroscopeYearPdf";

import HoroscopeYearPdfIt
  from "@/paid-pdf-generated/it/HoroscopePdf/HoroscopeYearPdf";

import HoroscopeYearPdfPt
  from "@/paid-pdf-generated/pt/HoroscopePdf/HoroscopeYearPdf";

import type {
  YearlyHoroscopeResult,
} from "@/components/HoroscopePdf/buildYearlyHoroscope";

type HoroscopeLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const SUPPORTED_LOCALES:
  HoroscopeLocale[] = [
    "fr",
    "en",
    "es",
    "de",
    "it",
    "pt",
  ];

const LANGUAGE_LABELS:
  Record<
    HoroscopeLocale,
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
  fr: HoroscopeYearPdfFr,
  en: HoroscopeYearPdfEn,
  es: HoroscopeYearPdfEs,
  de: HoroscopeYearPdfDe,
  it: HoroscopeYearPdfIt,
  pt: HoroscopeYearPdfPt,
};

type HoroscopeYearPdfClientViewerProps = {
  horoscope:
    YearlyHoroscopeResult;

  locale:
    HoroscopeLocale;
};

export default function HoroscopeYearPdfClientViewer({
  horoscope,
  locale,
}: HoroscopeYearPdfClientViewerProps) {
  const HoroscopeYearPdfDocument =
    PDF_DOCUMENTS[
      locale
    ];

  const {
    identity,
    period,
    content,
    mantra,
    overview,
    majorEnergies,
    majorAspects,
    dominantPlanets,
    activatedHouses,
    strengths,
    hiddenTalents,
    premiumPages,
    bestPeriods,
    calendar,
    zodiacIconUrl,
  } = horoscope;

  return (
    <main
      style={{
        width:
          "100vw",

        height:
          "100vh",

        margin:
          0,

        padding:
          0,

        backgroundColor:
          "#081020",

        overflow:
          "hidden",

        position:
          "relative",
      }}
    >
      <div
        style={{
          position:
            "absolute",

          top:
            12,

          left:
            12,

          zIndex:
            20,

          display:
            "flex",

          gap:
            6,

          padding:
            7,

          backgroundColor:
            "rgba(6,16,31,0.92)",

          border:
            "1px solid #8f6e35",

          borderRadius:
            8,
        }}
      >
        {SUPPORTED_LOCALES.map(
          (
            language,
          ) => (
            <Link
              key={language}
              href={
                `/dev/pdf-horoscope-year?locale=${language}`
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
          border:
            "none",
        }}
        showToolbar
      >
        <HoroscopeYearPdfDocument
          identity={identity}
          period={period}
          content={content}
          mantra={mantra}
          overview={overview}
          majorEnergies={majorEnergies}
          majorAspects={majorAspects}
          dominantPlanets={dominantPlanets}
          activatedHouses={activatedHouses}
          strengths={strengths}
          hiddenTalents={hiddenTalents}
          premiumPages={premiumPages}
          bestPeriods={bestPeriods}
          calendar={calendar}
          zodiacIconUrl={zodiacIconUrl}
        />
      </PDFViewer>
    </main>
  );
}
