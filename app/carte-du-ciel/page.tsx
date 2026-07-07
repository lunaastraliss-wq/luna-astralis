import NatalChartForm from "@/components/NatalChartForm";

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
            Découvre ton thème astral à partir de ta date, de ton heure et de ton
            lieu de naissance.
          </p>
        </section>

        <NatalChartForm />
      </main>
    </div>
  );
}
