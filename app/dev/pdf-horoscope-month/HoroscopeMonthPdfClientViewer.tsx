"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import Link from "next/link";

import HoroscopeMonthPdfFr
  from "@/paid-pdf-generated/fr/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeMonthPdfEn
  from "@/paid-pdf-generated/en/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeMonthPdfEs
  from "@/paid-pdf-generated/es/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeMonthPdfDe
  from "@/paid-pdf-generated/de/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeMonthPdfIt
  from "@/paid-pdf-generated/it/HoroscopePdf/HoroscopeMonthPdf";

import HoroscopeMonthPdfPt
  from "@/paid-pdf-generated/pt/HoroscopePdf/HoroscopeMonthPdf";

import type {
  MonthlyHoroscopeResult,
} from "@/components/HoroscopePdf/buildMonthlyHoroscope";

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
  fr: HoroscopeMonthPdfFr,
  en: HoroscopeMonthPdfEn,
  es: HoroscopeMonthPdfEs,
  de: HoroscopeMonthPdfDe,
  it: HoroscopeMonthPdfIt,
  pt: HoroscopeMonthPdfPt,
};

type HoroscopeMonthPdfClientViewerProps = {
  horoscope:
    MonthlyHoroscopeResult;

  locale:
    HoroscopeLocale;
};

export default function HoroscopeMonthPdfClientViewer({
  horoscope,
  locale,
}: HoroscopeMonthPdfClientViewerProps) {
  const HoroscopeMonthPdfDocument =
    PDF_DOCUMENTS[
      locale
    ];

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
                `/dev/pdf-horoscope-month?locale=${language}`
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
        <HoroscopeMonthPdfDocument
          identity={
            horoscope.identity
          }
          period={
            horoscope.period
          }
          content={
            horoscope.content
          }
          weeks={
            horoscope.weeks
          }
          majorEnergies={
            horoscope.majorEnergies
          }
          zodiacIconUrl={
            horoscope.zodiacIconUrl
          }
          astrology={
            horoscope.astrology
          }
          mantra={
            horoscope.mantra
          }
        />
      </PDFViewer>
    </main>
  );
}
