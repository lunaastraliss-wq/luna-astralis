"use client";

import { PDFViewer } from "@react-pdf/renderer";

import HoroscopePdf from "@/components/HoroscopePdf/HoroscopePdf";
import { buildDailyHoroscope } from "@/components/HoroscopePdf/buildDailyHoroscope";

const horoscope = buildDailyHoroscope({
  firstName: "Martine",
  zodiacSign: "scorpion",
  date: "2026-07-21",

  birthDate: "17/11/1970",
  birthTime: "21:36",
  birthCity: "Québec",
  birthCountry: "Canada",
});

export default function PdfHoroscopeViewer() {
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
          zodiacIconUrl={horoscope.zodiacIconUrl}
        />
      </PDFViewer>
    </main>
  );
}
