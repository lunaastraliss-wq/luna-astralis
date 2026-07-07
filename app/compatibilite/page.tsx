import CompatibilityCard from "@/components/CompatibilityCard";
import "../home.css";

export const metadata = {
  title: "Compatibilité amoureuse gratuite | Luna Astralis",
  description:
    "Calculez gratuitement la compatibilité amoureuse entre deux signes du zodiaque. Découvrez votre score, les forces de votre relation et partagez votre résultat avec Luna Astralis.",
  keywords: [
    "compatibilité amoureuse",
    "compatibilité astrologique",
    "compatibilité des signes",
    "signe astrologique",
    "zodiaque",
    "âme sœur",
    "Luna Astralis",
  ],
};

export default function CompatibilitePage() {
  return (
    <div className="page-astro">
      <main className="wrap" style={{ paddingTop: 60 }}>
        <div className="section-head">
          <h1>Compatibilité amoureuse gratuite</h1>

          <p className="section-sub">
            Découvrez instantanément la compatibilité entre deux signes du
            zodiaque. Comparez votre affinité, obtenez votre score amoureux
            et partagez votre résultat gratuitement.
          </p>
        </div>

        <CompatibilityCard />
      </main>
    </div>
  );
}
