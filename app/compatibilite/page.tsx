import CompatibilityCard from "@/components/CompatibilityCard";
import "./page.css";

export const metadata = {
  title: "Compatibilité amoureuse gratuite | Luna Astralis",
  description:
    "Calculez gratuitement la compatibilité amoureuse entre deux signes du zodiaque avec Luna Astralis.",
};

export default function CompatibilitePage() {
  return (
    <div className="compat-page">
      <main className="compat-main">
        <section className="compat-hero">
          <div className="compat-badge">✨ Test gratuit</div>

          <h1>Compatibilité amoureuse</h1>

          <p>
            Découvrez l’alchimie entre deux signes astrologiques, obtenez votre
            score amoureux et partagez votre résultat gratuitement.
          </p>
        </section>

        <section className="compat-card">
          <CompatibilityCard />
        </section>

        <section className="compat-premium">
          <h2>Une analyse plus précise ?</h2>

          <p>
            La compatibilité par signe est un bon début. La carte du ciel va
            plus loin avec la date, l’heure et le lieu de naissance.
          </p>

          <a href="/carte-du-ciel" className="compat-button">
            Découvrir ma carte du ciel
          </a>
        </section>
      </main>
    </div>
  );
}
