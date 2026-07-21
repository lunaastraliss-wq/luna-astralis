import PdfHoroscopeViewer from "./PdfHoroscopeViewer";

import {
  buildPremiumDailyHoroscope,
} from "@/components/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  calculateNatalChart,
} from "@/lib/astrology/calculateNatalChart";

const LATITUDE = 46.8139;
const LONGITUDE = -71.208;
const TIME_ZONE = "America/Toronto";

export default function PdfHoroscopeDevPage() {
  const natalChart = calculateNatalChart({
    birthDate: "17/11/1970",
    birthTime: "21:36",
    latitude: LATITUDE,
    longitude: LONGITUDE,
    timeZone: TIME_ZONE,
  });

  const horoscope = buildPremiumDailyHoroscope({
    firstName: "Martine",

    zodiacSign: "scorpion",
    zodiacSignLabel: "Scorpion",

    date: "2026-07-21",

    birthDate: "17/11/1970",
    birthTime: "21:36",
    birthCity: "Québec",
    birthCountry: "Canada",

    latitude: natalChart.latitude,
    longitude: natalChart.longitude,
    timeZone: natalChart.timeZone,
    natalPlanets: natalChart.planets,
  });

  return (
    <PdfHoroscopeViewer
      horoscope={horoscope}
    />
  );
}
