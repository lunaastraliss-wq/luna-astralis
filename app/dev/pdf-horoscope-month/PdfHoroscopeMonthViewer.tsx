"use client";

import dynamic from "next/dynamic";

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

const HoroscopeMonthPdfViewer = dynamic(
  () =>
    import(
      "./HoroscopeMonthPdfClientViewer"
    ),
  {
    ssr: false,
  },
);

type PdfHoroscopeMonthViewerProps = {
  horoscope:
    MonthlyHoroscopeResult;

  locale:
    HoroscopeLocale;
};

export default function PdfHoroscopeMonthViewer({
  horoscope,
  locale,
}: PdfHoroscopeMonthViewerProps) {
  return (
    <HoroscopeMonthPdfViewer
      horoscope={horoscope}
      locale={locale}
    />
  );
}
