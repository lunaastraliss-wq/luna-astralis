type Props = {
  planets: any[];
};

const ELEMENTS: Record<string, string> = {
  Aries: "Feu",
  Leo: "Feu",
  Sagittarius: "Feu",
  Taurus: "Terre",
  Virgo: "Terre",
  Capricorn: "Terre",
  Gemini: "Air",
  Libra: "Air",
  Aquarius: "Air",
  Cancer: "Eau",
  Scorpio: "Eau",
  Pisces: "Eau",
};

export default function EssentialElements({ planets }: Props) {
  const counts = { Feu: 0, Terre: 0, Air: 0, Eau: 0 };

  planets.forEach((p) => {
    const element = ELEMENTS[p.sign];
    if (element) counts[element as keyof typeof counts]++;
  });

  return (
    <section className="essential-page essential-content-page">
      <div className="essential-page-header">
        <p>Équilibre du thème</p>
        <h2>Les éléments dominants</h2>
      </div>

      <div className="essential-stats-grid">
        {Object.entries(counts).map(([name, value]) => (
          <div className="essential-stat-card" key={name}>
            <span>{name}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="essential-text">
        <p>
          Les éléments décrivent la grande tonalité énergétique de votre thème.
          Le Feu parle d’élan, d’inspiration et de vitalité. La Terre parle de
          stabilité, de réalisme et de construction. L’Air parle d’idées, de
          communication et de mouvement mental. L’Eau parle d’émotions,
          d’intuition et de profondeur intérieure.
        </p>

        <p>
          L’équilibre entre ces éléments montre comment vous combinez action,
          réflexion, sensibilité et ancrage dans votre vie quotidienne.
        </p>
      </div>
    </section>
  );
}
