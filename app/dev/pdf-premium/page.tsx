"use client";

import {
  PDFViewer,
} from "@react-pdf/renderer";

import PremiumPdfDocument from "@/components/PremiumPdf/PremiumPdfDocument";

export default function PremiumPdfPage() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#0b1124",
      }}
    >
      <PDFViewer
        width="100%"
        height="100%"
        style={{
          border: "none",
          display: "block",
        }}
        showToolbar
      >
        <PremiumPdfDocument
          firstName="Martine"
          birthDate="17/11/1970"
          birthTime="21:36"
          birthCity="Québec, Québec, Canada"
          planets={[]}
          angles={{}}
          wheelImage=""
        />
      </PDFViewer>
    </main>
  );
}

