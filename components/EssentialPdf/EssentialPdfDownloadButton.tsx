"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
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
  const safeName = props.firstName
    ? props.firstName.toLowerCase().replace(/[^a-z0-9]/gi, "-")
    : "luna-astralis";

  return (
    <PDFDownloadLink
      document={<EssentialPdfDocument {...props} />}
      fileName={`carte-du-ciel-essentielle-${safeName}.pdf`}
    >
      {({ loading }) => (
        <button
          type="button"
          className="natal-download-btn"
        >
          {loading
            ? "Préparation du PDF..."
            : "📖 Télécharger le rapport PDF"}
        </button>
      )}
    </PDFDownloadLink>
  );
}
