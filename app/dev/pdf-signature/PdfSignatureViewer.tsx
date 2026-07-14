"use client";

import { PDFViewer } from "@react-pdf/renderer";

import SignaturePdfDocument from "@/components/SignaturePdf/SignaturePdfDocument";

const testPlanets = [
  {
    name: "Sun",
    sign: "Scorpio",
    degree: 25,
    longitude: 235,
    house: 4,
    retrograde: false,
  },
  {
    name: "Moon",
    sign: "Cancer",
    degree: 23,
    longitude: 113,
    house: 12,
    retrograde: false,
  },
  {
    name: "Mercury",
    sign: "Sagittarius",
    degree: 7,
    longitude: 247,
    house: 5,
    retrograde: false,
  },
  {
    name: "Venus",
    sign: "Scorpio",
    degree: 13,
    longitude: 223,
    house: 4,
    retrograde: false,
  },
  {
    name: "Mars",
    sign: "Libra",
    degree: 18,
    longitude: 198,
    house: 3,
    retrograde: false,
  },
  {
    name: "Jupiter",
    sign: "Scorpio",
    degree: 18,
    longitude: 228,
    house: 4,
    retrograde: false,
  },
  {
    name: "Saturn",
    sign: "Taurus",
    degree: 18,
    longitude: 48,
    house: 10,
    retrograde: true,
  },
  {
    name: "Uranus",
    sign: "Libra",
    degree: 11,
    longitude: 191,
    house: 3,
    retrograde: false,
  },
  {
    name: "Neptune",
    sign: "Sagittarius",
    degree: 0,
    longitude: 240,
    house: 5,
    retrograde: false,
  },
  {
    name: "Pluto",
    sign: "Virgo",
    degree: 29,
    longitude: 179,
    house: 2,
    retrograde: false,
  },
];

const testAngles = {
  ascendant: 131,
  midheaven: 26,
  descendant: 311,
  imumCoeli: 206,
};

export default function PdfSignatureViewer() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#081020",
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
        <SignaturePdfDocument
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
