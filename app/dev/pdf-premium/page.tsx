"use client";







import __i18n from "../../../i18n/migrated/fr/app/dev/pdf-premium/page.json";
import dynamic from "next/dynamic";

const PdfPremiumViewer = dynamic(
  () => import("./PdfPremiumViewer"),
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
        {__i18n["generation_du_rapport"]}</main>
    ),
  }
);

export default function PdfPremiumDevPage() {
  return <PdfPremiumViewer />;
}
