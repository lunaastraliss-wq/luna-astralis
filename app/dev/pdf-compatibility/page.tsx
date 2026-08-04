"use client";



import __i18n from "../../../i18n/migrated/fr/app/dev/pdf-compatibility/page.json";
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
          color: __i18n["fff8e7"],
          fontFamily: "Arial, sans-serif",
        }}
      >
        {__i18n["generation_du_rapport_de_compatibilite"]}</main>
    ),
  },
);

export default function PdfCompatibilityDevPage() {
  return <PdfCompatibilityViewer />;
}
