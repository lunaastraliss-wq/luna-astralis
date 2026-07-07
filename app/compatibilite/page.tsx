import CompatibilityCard from "@/components/CompatibilityCard";
import "../home.css";

export const metadata = {
  title: "Compatibilité amoureuse gratuite | Luna Astralis",
  description:
    "Calculez gratuitement la compatibilité amoureuse entre deux signes du zodiaque avec Luna Astralis.",
};

export default function CompatibilitePage() {
  return (
    <div className="page-astro compat-page">
      <main className="compat-main">
        <section className="compat-hero">
          <div className="compat-badge">✨ Test gratuit</div>

          <h1>Compatibilité amoureuse</h1>

          <p>
            Découvrez l’alchimie entre deux signes du zodiaque, obtenez votre
            score amoureux et partagez votre résultat gratuitement.
          </p>
        </section>

        <section className="compat-panel">
          <CompatibilityCard />
        </section>

        <section className="compat-upsell">
          <h2>Vous voulez une analyse plus précise ?</h2>

          <p>
            La compatibilité par signe est un excellent début. Pour une lecture
            complète, la carte du ciel utilise la date, l’heure et le lieu de
            naissance.
          </p>

          <a href="/carte-du-ciel" className="compat-cta">
            Découvrir ma carte du ciel
          </a>
        </section>
      </main>
    </div>
  );
}
