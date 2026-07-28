"use client";

import dynamic from "next/dynamic";

import type {
  YearlyHoroscopeResult,
} from "@/components/HoroscopePdf/buildYearlyHoroscope";

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
  horoscope: YearlyHoroscopeResult;
};

export default function PdfHoroscopeYearViewer({
  horoscope,
}: PdfHoroscopeYearViewerProps) {
  return (
    <HoroscopeYearPdfViewer
      horoscope={horoscope}
    />
  );
}
