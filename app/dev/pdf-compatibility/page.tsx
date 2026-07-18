"use client";

import dynamic from "next/dynamic";

const PdfCompatibilityViewer = dynamic(
  () => import("./PdfCompatibilityViewer"),
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
        Génération du rapport de compatibilité…
      </main>
    ),
  },
);

export default function PdfCompatibilityDevPage() {
  return <PdfCompatibilityViewer />;
}
