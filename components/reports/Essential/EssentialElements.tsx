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

const ICONS: Record<string, string> = {
  Feu: "🔥",
  Terre: "🌍",
  Air: "🌬",
  Eau: "💧",
};

const SHORT: Record<string, string> = {
  Feu: "Action • Courage • Inspiration",
  Terre: "Stabilité • Réalisme • Construction",
  Air: "Communication • Curiosité • Esprit",
  Eau: "Émotions • Intuition • Sensibilité",
};

export default function EssentialElements({
  planets,
}: Props) {
  const counts = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  planets.forEach((planet) => {
    const element = ELEMENTS[planet.sign];
    if (element) {
      counts[element as keyof typeof counts]++;
    }
  });

  const dominant = Object.entries(counts).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  return (
    <section className="essential-page essential-content-page essential-elements-page">
      <div className="essential-page-header essential-elements-header">
        <p>Équilibre du thème</p>

        <h2>Les quatre éléments</h2>

        <div className="essential-title-divider">
          <span>✦</span>
        </div>

        <p className="essential-elements-intro">
          Les éléments montrent comment votre énergie circule naturellement et
          quelles qualités dominent votre personnalité.
        </p>
      </div>

      <div className="essential-elements-grid">
        {Object.entries(counts).map(([name, value]) => (
          <div
            className="essential-element-card"
            key={name}
          >
            <div className="essential-element-icon">
              {ICONS[name]}
            </div>

            <h3>{name}</h3>

            <strong>{value}</strong>

            <small>
              {value > 1
                ? `${value} planètes`
                : `${value} planète`}
            </small>

            <p>{SHORT[name]}</p>
          </div>
        ))}
      </div>

      <div className="essential-elements-summary">
        <div className="essential-synthesis-symbol">
          ✦
        </div>

        <div>
          <p className="essential-synthesis-kicker">
            Votre énergie dominante
          </p>

          <h3>{dominant}</h3>

          <p>
            Les quatre éléments représentent les grandes forces qui façonnent
            votre personnalité. Leur équilibre montre comment vous combinez
            l'action, la réflexion, la stabilité et la sensibilité dans votre
            quotidien.
          </p>

          <p>
            Aucun élément n'est meilleur qu'un autre. Chacun apporte des
            qualités précieuses et contribue à l'équilibre unique de votre
            thème astral.
          </p>
        </div>
      </div>

      <div className="essential-elements-note">
        <span>✦</span>

        <p>
          Un élément très présent indique une énergie naturelle, tandis qu'un
          élément moins représenté constitue souvent une qualité qui se développe
          progressivement avec l'expérience.
        </p>
      </div>
    </section>
  );
}
