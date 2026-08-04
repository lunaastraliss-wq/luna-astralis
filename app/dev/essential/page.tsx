import __i18n from "../../../i18n/migrated/fr/app/dev/essential/page.json";
import EssentialReport from "@/components/reports/Essential/EssentialReport";

const previewPlanets = [
  { name: "Sun", sign: "Scorpio", degree: 25, house: 4 },
  { name: "Moon", sign: "Cancer", degree: 12, house: 12 },
  { name: "Mercury", sign: "Sagittarius", degree: 3, house: 5 },
  { name: "Venus", sign: "Libra", degree: 18, house: 3 },
  { name: "Mars", sign: "Virgo", degree: 9, house: 2 },
  { name: "Jupiter", sign: "Scorpio", degree: 14, house: 4 },
  { name: "Saturn", sign: "Taurus", degree: 20, house: 10 },
  { name: "Uranus", sign: "Libra", degree: 11, house: 3 },
  { name: "Neptune", sign: "Sagittarius", degree: 1, house: 5 },
  { name: "Pluto", sign: "Virgo", degree: 29, house: 2 },
];

const previewAngles = {
  ascendant: {
    sign: "Leo",
    degree: 18,
  },
  midheaven: {
    sign: "Taurus",
    degree: 8,
  },
};

export default function EssentialPreviewPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: __i18n["40px_20px"],
        background: "#050814",
      }}
    >
      <EssentialReport
        name="Élodie"
        birthDate="17 novembre 1970"
        birthTime="21 h 36"
        birthPlace="Québec, Québec, Canada"
        planets={previewPlanets}
        angles={previewAngles}
      />
    </main>
  );
}
