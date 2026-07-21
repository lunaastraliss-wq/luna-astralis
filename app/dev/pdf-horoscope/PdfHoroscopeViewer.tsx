"use client";

import { PDFViewer } from "@react-pdf/renderer";

import HoroscopePdf from "@/components/HoroscopePdf/HoroscopePdf";

import type {
  PremiumDailyHoroscopeResult,
} from "@/components/HoroscopePdf/buildPremiumDailyHoroscope";

type PdfHoroscopeViewerProps = {
  horoscope: PremiumDailyHoroscopeResult;
};

export default function PdfHoroscopeViewer({
  horoscope,
}: PdfHoroscopeViewerProps) {
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
        <HoroscopePdf
          identity={horoscope.identity}
          period={horoscope.period}
          content={horoscope.content}
        />
      </PDFViewer>
    </main>
  );
}
