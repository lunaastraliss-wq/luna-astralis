"use client";

import dynamic from "next/dynamic";

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

const HoroscopePdfViewer = dynamic(
  () => import("./HoroscopePdfClientViewer"),
  {
    ssr: false,
  },
);

type PdfHoroscopeViewerProps = {
  horoscope: PremiumDailyHoroscopeResult;
  locale: HoroscopeLocale;
};

export default function PdfHoroscopeViewer({
  horoscope,
  locale,
}: PdfHoroscopeViewerProps) {
  return (
    <HoroscopePdfViewer
      horoscope={horoscope}
      locale={locale}
    />
  );
}
