"use client";

import dynamic from "next/dynamic";

import type {
  MonthlyHoroscopeResult,
} from "@/components/HoroscopePdf/buildMonthlyHoroscope";

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
  horoscope: MonthlyHoroscopeResult;
};

export default function PdfHoroscopeMonthViewer({
  horoscope,
}: PdfHoroscopeMonthViewerProps) {
  return (
    <HoroscopeMonthPdfViewer
      horoscope={horoscope}
    />
  );
}
