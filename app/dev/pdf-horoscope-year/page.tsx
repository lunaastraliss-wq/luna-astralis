import PdfHoroscopeYearViewer
  from "./PdfHoroscopeYearViewer";

import {
  buildYearlyHoroscope,
} from "@/components/HoroscopePdf/buildYearlyHoroscope";

export default function PdfHoroscopeYearDevPage() {
  const horoscope =
    buildYearlyHoroscope({
      firstName: "Martine",

      zodiacSign: "scorpion",

      year: 2027,

      birthDate: "17/11/1970",
      birthTime: "21:36",
      birthCity: "Québec",
      birthCountry: "Canada",
    });

  return (
    <PdfHoroscopeYearViewer
      horoscope={horoscope}
    />
  );
}
