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

export default function EssentialModalities({ planets }: Props) {
  const counts = { Cardinal: 0, Fixe: 0, Mutable: 0 };

  planets.forEach((p) => {
    const modality = MODALITIES[p.sign];
    if (modality) counts[modality as keyof typeof counts]++;
  });

  return (
    <section className="essential-page essential-content-page">
      <div className="essential-page-header">
        <p>Rythme intérieur</p>
        <h2>Les modalités astrologiques</h2>
      </div>

      <div className="essential-stats-grid three">
        {Object.entries(counts).map(([name, value]) => (
          <div className="essential-stat-card" key={name}>
            <span>{name}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="essential-text">
        <p>
          Les modalités indiquent votre façon naturelle de vous mettre en
          mouvement. Le Cardinal initie, commence et provoque l’élan. Le Fixe
          stabilise, approfondit et persévère. Le Mutable s’adapte, transforme
          et accompagne les changements.
        </p>

        <p>
          Leur équilibre montre si votre énergie est plutôt orientée vers
          l’initiative, la constance ou l’adaptation. Cette lecture complète
          l’analyse des éléments et aide à mieux comprendre votre manière
          d’avancer dans la vie.
        </p>
      </div>
    </section>
  );
}
