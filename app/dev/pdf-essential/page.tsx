"use client";

import dynamic from "next/dynamic";

const PdfEssentialViewer = dynamic(
  () => import("./PdfEssentialViewer"),
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
          backgroundColor: "#081020",
          color: "#fff8e7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Génération du rapport…
      </main>
    ),
  }
);

export default function PdfEssentialDevPage() {
  return <PdfEssentialViewer />;
}
