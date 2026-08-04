"use client";





import __i18n from "../../../i18n/migrated/fr/app/dev/pdf-signature/page.json";
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
          color: __i18n["fff8e7"],
          fontFamily: "Arial, sans-serif",
        }}
      >
        {__i18n["generation_du_rapport_signature"]}</main>
    ),
  }
);

export default function PdfSignatureDevPage() {
  return <PdfSignatureViewer />;
}
