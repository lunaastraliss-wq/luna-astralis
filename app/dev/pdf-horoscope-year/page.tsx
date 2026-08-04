import __i18n from "../../../i18n/migrated/fr/app/dev/pdf-horoscope-year/page.json";
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
      birthCity: __i18n["quebec"],
      birthCountry: "Canada",
    });

  return (
    <PdfHoroscopeYearViewer
      horoscope={horoscope}
    />
  );
}
