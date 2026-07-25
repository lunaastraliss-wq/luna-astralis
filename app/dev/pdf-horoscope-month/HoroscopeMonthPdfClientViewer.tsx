"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import HoroscopeMonthPdf from "@/components/HoroscopePdf/HoroscopeMonthPdf";

import type {
  MonthlyHoroscopeResult,
} from "@/components/HoroscopePdf/buildMonthlyHoroscope";

type HoroscopeMonthPdfClientViewerProps = {
  horoscope: MonthlyHoroscopeResult;
};

export default function HoroscopeMonthPdfClientViewer({
  horoscope,
}: HoroscopeMonthPdfClientViewerProps) {
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
        <HoroscopeMonthPdf
          identity={horoscope.identity}
          period={horoscope.period}
          content={horoscope.content}
          weeks={horoscope.weeks}
          majorEnergies={horoscope.majorEnergies}
          zodiacIconUrl={horoscope.zodiacIconUrl}
          astrology={horoscope.astrology}
        />
      </PDFViewer>
    </main>
  );
}
