"use client";

import { PDFViewer } from "@react-pdf/renderer";

import CompatibilityPdfDocument from "@/components/CompatibilityPdf/CompatibilityPdfDocument";

const person1Planets = [
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

const person2Planets = [
  {
    name: "Sun",
    sign: "Taurus",
    degree: 21,
    longitude: 51,
    house: 8,
    retrograde: false,
  },
  {
    name: "Moon",
    sign: "Pisces",
    degree: 19,
    longitude: 349,
    house: 6,
    retrograde: false,
  },
  {
    name: "Mercury",
    sign: "Gemini",
    degree: 3,
    longitude: 63,
    house: 9,
    retrograde: false,
  },
  {
    name: "Venus",
    sign: "Aries",
    degree: 16,
    longitude: 16,
    house: 7,
    retrograde: false,
  },
  {
    name: "Mars",
    sign: "Cancer",
    degree: 20,
    longitude: 110,
    house: 10,
    retrograde: false,
  },
  {
    name: "Jupiter",
    sign: "Virgo",
    degree: 17,
    longitude: 167,
    house: 12,
    retrograde: false,
  },
  {
    name: "Saturn",
    sign: "Capricorn",
    degree: 24,
    longitude: 294,
    house: 4,
    retrograde: true,
  },
  {
    name: "Uranus",
    sign: "Capricorn",
    degree: 9,
    longitude: 279,
    house: 4,
    retrograde: true,
  },
  {
    name: "Neptune",
    sign: "Capricorn",
    degree: 14,
    longitude: 284,
    house: 4,
    retrograde: true,
  },
  {
    name: "Pluto",
    sign: "Scorpio",
    degree: 16,
    longitude: 226,
    house: 2,
    retrograde: true,
  },
];

const person1 = {
  firstName: "Martine",
  birthDate: "17/11/1970",
  birthTime: "21:36",
  birthCity: "Québec",
  birthCountry: "Canada",

  planets: person1Planets,

  angles: {
    ascendant: {
      longitude: 131,
    },
    midheaven: {
      longitude: 26,
    },
    descendant: {
      longitude: 311,
    },
    imumCoeli: {
      longitude: 206,
    },
  },

  wheelImage: "",
};

const person2 = {
  firstName: "Alexandre",
  birthDate: "12/05/1988",
  birthTime: "10:15",
  birthCity: "Montréal",
  birthCountry: "Canada",

  planets: person2Planets,

  angles: {
    ascendant: {
      longitude: 188,
    },
    midheaven: {
      longitude: 102,
    },
    descendant: {
      longitude: 8,
    },
    imumCoeli: {
      longitude: 282,
    },
  },

  wheelImage: "",
};

export default function PdfCompatibilityViewer() {
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
        <CompatibilityPdfDocument
          person1={person1}
          person2={person2}
          aspects={[]}
        />
      </PDFViewer>
    </main>
  );
}
