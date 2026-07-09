"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import EssentialPdfDocument from "./EssentialPdfDocument";

type Props = {
  firstName?: string;
  birthDate?: string;
  birthTime?: string;
  birthCity?: string;
  planets: any[];
  angles: any;
};

export default function EssentialPdfDownloadButton(props: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);

    try {
      const safeName = props.firstName
        ? props.firstName.toLowerCase().replace(/[^a-z0-9]/gi, "-")
        : "luna-astralis";

      const blob = await pdf(<EssentialPdfDocument {...props} />).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `carte-du-ciel-essentielle-${safeName}.pdf`;
      link.click();

      URL.revokeObjectURL(url);
    } catch {
      alert("Impossible de générer le PDF. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      className="natal-download-btn"
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? "Préparation du PDF..." : "📖 Télécharger le rapport PDF"}
    </button>
  );
}
