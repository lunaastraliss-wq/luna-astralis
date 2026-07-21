"use client";

import { PDFViewer } from "@react-pdf/renderer";

import HoroscopePdf from "@/components/HoroscopePdf/HoroscopePdf";

import {
  buildPremiumDailyHoroscope,
} from "@/components/HoroscopePdf/buildPremiumDailyHoroscope";

import {
  calculateNatalChart,
} from "@/lib/astrology/calculateNatalChart";

const LATITUDE = 46.8139;
const LONGITUDE = -71.208;
const TIME_ZONE = "America/Toronto";

const natalChart =
  calculateNatalChart({
    birthDate:
      "17/11/1970",

    birthTime:
      "21:36",

    latitude:
      LATITUDE,

    longitude:
      LONGITUDE,

    timeZone:
      TIME_ZONE,
  });

const horoscope =
  buildPremiumDailyHoroscope({
    firstName:
      "Martine",

    zodiacSign:
      "scorpion",

    zodiacSignLabel:
      "Scorpion",

    date:
      "2026-07-21",

    birthDate:
      "17/11/1970",

    birthTime:
      "21:36",

    birthCity:
      "Québec",

    birthCountry:
      "Canada",

    latitude:
      natalChart.latitude,

    longitude:
      natalChart.longitude,

    timeZone:
      natalChart.timeZone,

    natalPlanets:
      natalChart.planets,
  });

export default function PdfHoroscopeViewer() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor:
          "#081020",
        overflow: "hidden",
      }}
    >
      <PDFViewer
        width="100%"
        height="100%"
        style={{
          border: "none",
        }}
        showToolbar
      >
        <HoroscopePdf
          identity={
            horoscope.identity
          }
          period={
            horoscope.period
          }
          content={
            horoscope.content
          }
        />
      </PDFViewer>
    </main>
  );
}
