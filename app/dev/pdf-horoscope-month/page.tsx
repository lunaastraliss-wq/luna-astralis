import PdfHoroscopeMonthViewer from "./PdfHoroscopeMonthViewer";

import {
  buildMonthlyHoroscope,
} from "@/components/HoroscopePdf/buildMonthlyHoroscope";

export default function PdfHoroscopeMonthDevPage() {
  const horoscope =
    buildMonthlyHoroscope({
      firstName: "Martine",

      zodiacSign: "scorpion",

      month: "2026-07",

      birthDate: "17/11/1970",
      birthTime: "21:36",
      birthCity: "Québec",
      birthCountry: "Canada",
    });

  return (
    <PdfHoroscopeMonthViewer
      horoscope={horoscope}
    />
  );
}
