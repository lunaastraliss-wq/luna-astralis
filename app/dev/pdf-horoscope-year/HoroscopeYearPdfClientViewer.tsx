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
    zodiacIconUrl,
  } = horoscope;

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
          identity={identity}
          period={period}
          content={content}
          mantra={mantra}
          overview={overview}
          majorEnergies={
            majorEnergies
          }
          majorAspects={
            majorAspects
          }
          dominantPlanets={
            dominantPlanets
          }
          activatedHouses={
            activatedHouses
          }
          strengths={strengths}
          hiddenTalents={
            hiddenTalents
          }
          premiumPages={
            premiumPages
          }
          zodiacIconUrl={
            zodiacIconUrl
          }
        />
      </PDFViewer>
    </main>
  );
}
