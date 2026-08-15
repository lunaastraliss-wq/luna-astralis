"use client";

import dynamic from "next/dynamic";

import type {
  YearlyHoroscopeResult,
} from "@/components/HoroscopePdf/buildYearlyHoroscope";

type HoroscopeLocale =
  | "fr"
  | "en"
  | "es"
  | "de"
  | "it"
  | "pt";

const HoroscopeYearPdfViewer = dynamic(
  () =>
    import(
      "./HoroscopeYearPdfClientViewer"
    ),
  {
    ssr: false,
  },
);

type PdfHoroscopeYearViewerProps = {
  horoscope:
    YearlyHoroscopeResult;

  locale:
    HoroscopeLocale;
};

export default function PdfHoroscopeYearViewer({
  horoscope,
  locale,
}: PdfHoroscopeYearViewerProps) {
  return (
    <HoroscopeYearPdfViewer
      horoscope={horoscope}
      locale={locale}
    />
  );
}
