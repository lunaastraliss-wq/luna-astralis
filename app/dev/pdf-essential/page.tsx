"use client";

import { PDFViewer } from "@react-pdf/renderer";

import EssentialPdfDocument from "@/components/EssentialPdf/EssentialPdfDocument";

const testPlanets = [
  {
    name: "Sun",
    sign: "Scorpio",
    degree: 25,
    longitude: 235,
    retrograde: false,
  },
  {
    name: "Moon",
    sign: "Cancer",
    degree: 23,
    longitude: 113,
    retrograde: false,
  },
  {
    name: "Mercury",
    sign: "Sagittarius",
    degree: 7,
    longitude: 247,
    retrograde: false,
  },
  {
    name: "Venus",
    sign: "Scorpio",
    degree: 13,
    longitude: 223,
    retrograde: false,
  },
  {
    name: "Mars",
    sign: "Libra",
    degree: 18,
    longitude: 198,
    retrograde: false,
  },
  {
    name: "Jupiter",
    sign: "Scorpio",
    degree: 18,
    longitude: 228,
    retrograde: false,
  },
  {
    name: "Saturn",
    sign: "Taurus",
    degree: 18,
    longitude: 48,
    retrograde: true,
  },
  {
    name: "Uranus",
    sign: "Libra",
    degree: 11,
    longitude: 191,
    retrograde: false,
  },
  {
    name: "Neptune",
    sign: "Sagittarius",
    degree: 0,
    longitude: 240,
    retrograde: false,
  },
  {
    name: "Pluto",
    sign: "Virgo",
    degree: 29,
    longitude: 179,
    retrograde: false,
  },
];

const testAngles = {
  ascendant: {
    sign: "Leo",
    degree: 11,
    longitude: 131,
  },
  midheaven: {
    sign: "Aries",
    degree: 26,
    longitude: 26,
  },
};

export default function EssentialPdfDevPage() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#050a18",
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
        <EssentialPdfDocument
          firstName="Martine"
          birthDate="17/11/1970"
          birthTime="21:36"
          birthCity="Québec"
          planets={testPlanets}
          angles={testAngles}
          wheelImage=""
        />
      </PDFViewer>
    </main>
  );
}
