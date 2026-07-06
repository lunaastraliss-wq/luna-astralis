import CompatibilityCard from "@/components/CompatibilityCard";
import "../home.css";

export const metadata = {
  title: "Compatibilité amoureuse par signe astrologique | Luna Astralis",
  description:
    "Découvrez gratuitement la compatibilité amoureuse entre deux signes astrologiques et partagez votre résultat avec Luna Astralis.",
};

export default function CompatibilitePage() {
  return (
    <div className="page-astro">
      <main className="wrap" style={{ paddingTop: 60 }}>
        <div className="section-head">
          <h1>Compatibilité amoureuse</h1>

          <p className="section-sub">
            Choisissez les deux signes astrologiques et découvrez leur alchimie.
          </p>
        </div>

        <CompatibilityCard />
      </main>
    </div>
  );
}
