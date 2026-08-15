"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import Link from "next/link";

import HoroscopePdfFr
  from "@/paid-pdf-generated/fr/HoroscopePdf/HoroscopePdf";

import HoroscopePdfEn
  from "@/paid-pdf-generated/en/HoroscopePdf/HoroscopePdf";

import HoroscopePdfEs
  from "@/paid-pdf-generated/es/HoroscopePdf/HoroscopePdf";

import HoroscopePdfDe
  from "@/paid-pdf-generated/de/HoroscopePdf/HoroscopePdf";

import HoroscopePdfIt
  from "@/paid-pdf-generated/it/HoroscopePdf/HoroscopePdf";

import HoroscopePdfPt
  from "@/paid-pdf-generated/pt/HoroscopePdf/HoroscopePdf";

import type {
  PremiumDailyHoroscopeResult,
} from "@/components/HoroscopePdf/buildPremiumDailyHoroscope";

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
  fr: HoroscopePdfFr,
  en: HoroscopePdfEn,
  es: HoroscopePdfEs,
  de: HoroscopePdfDe,
  it: HoroscopePdfIt,
  pt: HoroscopePdfPt,
};

type HoroscopePdfClientViewerProps = {
  horoscope:
    PremiumDailyHoroscopeResult;

  locale:
    HoroscopeLocale;
};

export default function HoroscopePdfClientViewer({
  horoscope,
  locale,
}: HoroscopePdfClientViewerProps) {
  const HoroscopePdfDocument =
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
      {/*
       * ---------------------------------------------------------------
       * Sélecteur des 6 langues
       * ---------------------------------------------------------------
       */}
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
              key={
                language
              }
              href={
                `/dev/pdf-horoscope?locale=${language}`
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

      {/*
       * ---------------------------------------------------------------
       * PDF
       * ---------------------------------------------------------------
       */}
      <PDFViewer
        key={
          locale
        }
        width="100%"
        height="100%"
        style={{
          border:
            "none",
        }}
        showToolbar
      >
        <HoroscopePdfDocument
          identity={
            horoscope.identity
          }
          period={
            horoscope.period
          }
          content={
            horoscope.content
          }
        />
      </PDFViewer>
    </main>
  );
}
