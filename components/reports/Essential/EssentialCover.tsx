type Props = {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
};

export default function EssentialCover({
  name,
  birthDate,
  birthTime,
  birthPlace,
}: Props) {
  return (
    <section className="essential-page essential-cover">
      <div className="essential-cover-inner">
        <div className="essential-badge">Luna Astralis</div>

        <p className="essential-kicker">Rapport astrologique personnalisé</p>

        <h1>Carte du ciel Essentielle</h1>

        <div className="essential-divider" />

        <div className="essential-client-box">
          <p className="essential-label">Préparé pour</p>
          <h2>{name || "Votre nom"}</h2>

          <div className="essential-birth-info">
            <p>
              <span>Date de naissance</span>
              {birthDate || "—"}
            </p>

            <p>
              <span>Heure de naissance</span>
              {birthTime || "—"}
            </p>

            <p>
              <span>Lieu de naissance</span>
              {birthPlace || "—"}
            </p>
          </div>
        </div>

        <p className="essential-cover-note">
          Une exploration claire de votre Soleil, de votre Lune, de votre
          Ascendant et des grandes forces de votre thème natal.
        </p>
      </div>
    </section>
  );
}
