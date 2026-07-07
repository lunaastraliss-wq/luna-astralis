import NatalChartForm from "@/components/NatalChartForm";
import "./page.css";

export const metadata = {
  title: "Carte du ciel gratuite - Thème astral personnalisé",
  description:
    "Découvre ton thème astral gratuit : Soleil, Lune, Ascendant et positions planétaires.",
};

export default function CarteDuCielPage() {
  return (
    <div className="page-astro">
      <main className="wrap astro-chart-page">
        <section className="astro-hero">
          <div className="astro-badge">✨ Gratuit</div>

          <h1>Carte du ciel gratuite</h1>

          <p className="section-sub">
            Obtiens gratuitement ta carte du ciel avec les positions de tes
            planètes, de ton Ascendant et de ton Milieu du Ciel.
          </p>
        </section>

        <NatalChartForm />
      </main>
    </div>
  );
}
