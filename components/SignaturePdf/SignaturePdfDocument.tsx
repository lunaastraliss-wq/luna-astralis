import { Document } from "@react-pdf/renderer";

import type {
  PremiumPdfProps,
} from "../PremiumPdf/PremiumPdfTypes";

import PdfSignatureCover from "./PdfSignatureCover";
import PdfSignatureWheel from "./PdfSignatureWheel";
import PdfSignatureHouses from "./PdfSignatureHouses";

export default function SignaturePdfDocument({
  firstName,
  birthDate,
  birthTime,
  birthCity,
  planets,
  angles,
  wheelImage,
}: PremiumPdfProps) {
  const safeFirstName =
    typeof firstName === "string"
      ? firstName.trim()
      : "";

  const safeBirthDate =
    typeof birthDate === "string"
      ? birthDate.trim()
      : "";

  const safeBirthTime =
    typeof birthTime === "string"
      ? birthTime.trim()
      : "";

  const safeBirthCity =
    typeof birthCity === "string"
      ? birthCity.trim()
      : "";

  const safeWheelImage =
    typeof wheelImage === "string"
      ? wheelImage.trim()
      : "";

  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const documentName =
    safeFirstName || "Luna Astralis";

  return (
    <Document
      title={`Carte du ciel Signature - ${documentName}`}
      author="Luna Astralis"
      subject="Rapport astrologique Signature personnalisé"
      creator="Luna Astralis"
      producer="Luna Astralis"
      keywords={[
        "astrologie",
        "carte du ciel",
        "thème natal",
        "rapport Signature",
        "Luna Astralis",
      ].join(", ")}
    >
      <PdfSignatureCover
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={angles}
        wheelImage={safeWheelImage}
      />

      <PdfSignatureWheel
        firstName={safeFirstName}
        birthDate={safeBirthDate}
        birthTime={safeBirthTime}
        birthCity={safeBirthCity}
        planets={safePlanets}
        angles={angles}
        wheelImage={safeWheelImage}
      />

      <PdfSignatureHouses
        planets={safePlanets}
      />
    </Document>
  );
}
