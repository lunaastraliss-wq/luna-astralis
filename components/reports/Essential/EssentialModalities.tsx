type Props = {
  planets: any[];
};

const MODALITIES: Record<string, string> = {
  Aries: "Cardinal",
  Cancer: "Cardinal",
  Libra: "Cardinal",
  Capricorn: "Cardinal",
  Taurus: "Fixe",
  Leo: "Fixe",
  Scorpio: "Fixe",
  Aquarius: "Fixe",
  Gemini: "Mutable",
  Virgo: "Mutable",
  Sagittarius: "Mutable",
  Pisces: "Mutable",
};

const ICONS: Record<string, string> = {
  Cardinal: "▲",
  Fixe: "⬢",
  Mutable: "◈",
};

const SHORT: Record<string, string> = {
  Cardinal: "Initiative • Impulsion • Leadership",
  Fixe: "Persévérance • Stabilité • Détermination",
  Mutable: "Adaptation • Évolution • Souplesse",
};

export default function EssentialModalities({
  planets,
}: Props) {
  const counts = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  planets.forEach((planet) => {
    const modality = MODALITIES[planet.sign];
    if (modality) {
      counts[modality as keyof typeof counts]++;
    }
  });

  const dominant = Object.entries(counts).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  return (
    <section className="essential-page essential-content-page essential-modalities-page">
      <div className="essential-page-header essential-modalities-header">
        <p>Rythme intérieur</p>

        <h2>Les modalités astrologiques</h2>

        <div className="essential-title-divider">
          <span>✦</span>
        </div>

        <p className="essential-modalities-intro">
          Les modalités révèlent la manière dont votre énergie se met
          naturellement en mouvement et évolue au fil des expériences.
        </p>
      </div>

      <div className="essential-modalities-grid">
        {Object.entries(counts).map(([name, value]) => (
          <div
            className="essential-modality-card"
            key={name}
          >
            <div className="essential-modality-icon">
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

      <div className="essential-modalities-summary">
        <div className="essential-synthesis-symbol">
          ✦
        </div>

        <div>
          <p className="essential-synthesis-kicker">
            Votre dynamique dominante
          </p>

          <h3>{dominant}</h3>

          <p>
            Les modalités décrivent votre façon naturelle d'aborder les
            situations. Elles montrent si vous avez tendance à initier les
            projets, à les faire durer ou à vous adapter aux changements.
          </p>

          <p>
            Combinées aux quatre éléments, elles apportent une vision plus
            complète de votre fonctionnement et de votre manière d'évoluer.
          </p>
        </div>
      </div>

      <div className="essential-modalities-note">
        <span>✦</span>

        <p>
          Aucune modalité n'est supérieure aux autres. Leur répartition révèle
          simplement votre manière privilégiée d'agir et de réagir dans les
          différentes situations de la vie.
        </p>
      </div>
    </section>
  );
}
