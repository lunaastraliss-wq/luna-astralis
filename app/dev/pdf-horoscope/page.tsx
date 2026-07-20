"use client";

import dynamic from "next/dynamic";

const PdfHoroscopeViewer = dynamic(
  () => import("./PdfHoroscopeViewer"),
  {
    ssr: false,

    loading: () => (
      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
          backgroundColor: "#081020",
          color: "#fff8e7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Génération de l’horoscope personnalisé…
      </main>
    ),
  },
);

export default function PdfHoroscopeDevPage() {
  return <PdfHoroscopeViewer />;
}
