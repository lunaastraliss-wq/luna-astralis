"use client";

import dynamic from "next/dynamic";

import type {
  PremiumDailyHoroscopeResult,
} from "@/components/HoroscopePdf/buildPremiumDailyHoroscope";

const HoroscopePdfViewer = dynamic(
  () => import("./HoroscopePdfClientViewer"),
  {
    ssr: false,
  },
);

type PdfHoroscopeViewerProps = {
  horoscope: PremiumDailyHoroscopeResult;
};

export default function PdfHoroscopeViewer({
  horoscope,
}: PdfHoroscopeViewerProps) {
  return (
    <HoroscopePdfViewer
      horoscope={horoscope}
    />
  );
}
