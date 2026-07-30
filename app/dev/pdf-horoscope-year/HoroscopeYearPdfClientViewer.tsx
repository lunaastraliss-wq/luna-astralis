"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import HoroscopeYearPdf
  from "@/components/HoroscopePdf/HoroscopeYearPdf";

import type {
  YearlyHoroscopeResult,
} from "@/components/HoroscopePdf/buildYearlyHoroscope";

type HoroscopeYearPdfClientViewerProps = {
  horoscope: YearlyHoroscopeResult;
};

export default function HoroscopeYearPdfClientViewer({
  horoscope,
}: HoroscopeYearPdfClientViewerProps) {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#081020",
        overflow: "hidden",
      }}
    >
      <PDFViewer
        width="100%"
        height="100%"
        style={{
          border: "none",
        }}
        showToolbar
      >
        <HoroscopeYearPdf
          identity={
            horoscope.identity
          }
          period={
            horoscope.period
          }
          content={
            horoscope.content
          }
          mantra={
            horoscope.mantra
          }
          strengths={
            horoscope.strengths
          }
          hiddenTalents={
            horoscope.hiddenTalents
          }
          premiumPages={
            horoscope.premiumPages
          }
          zodiacIconUrl={
            horoscope.zodiacIconUrl
          }
        />
      </PDFViewer>
    </main>
  );
}
