"use client";

import dynamic from "next/dynamic";

const PdfSignatureViewer = dynamic(
  () => import("./PdfSignatureViewer"),
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
        Génération du rapport Signature…
      </main>
    ),
  }
);

export default function PdfSignatureDevPage() {
  return <PdfSignatureViewer />;
}
