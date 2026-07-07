import NatalChartForm from "@/components/NatalChartForm";

export const metadata = {
  title: "Carte du ciel - Thème astral personnalisé",
  description:
    "Découvre ton thème astral complet : Soleil, Lune, Ascendant et plus encore.",
};

export default function CarteDuCielPage() {
  return (
    <div className="page-astro">
      <main className="wrap" style={{ paddingTop: 60 }}>
        <div className="section-head">
          <h1>Ta carte du ciel</h1>
          <p className="section-sub">
            Entre tes informations de naissance pour découvrir ton thème astral.
          </p>
        </div>
        <NatalChartForm />
      </main>
    </div>
  );
}
