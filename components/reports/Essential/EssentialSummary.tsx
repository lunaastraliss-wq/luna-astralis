type Props = {
  planets: any[];
  angles: any;
};

const SIGN_FR: Record<string, string> = {
  Aries: "Bélier",
  Taurus: "Taureau",
  Gemini: "Gémeaux",
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",
};

function signFr(sign?: string) {
  if (!sign) return "—";
  return SIGN_FR[sign] || sign;
}

function getPlanet(planets: any[], name: string) {
  return planets.find((p) => p.name === name);
}

export default function EssentialSummary({ planets, angles }: Props) {
  const sun = getPlanet(planets, "Sun");
  const moon = getPlanet(planets, "Moon");

  const ascSign =
    angles?.Ascendant?.sign ||
    angles?.ASC?.sign ||
    angles?.ascendant?.sign;

  return (
    <section className="essential-page essential-content-page">
      <div className="essential-page-header">
        <p>Portrait astrologique</p>
        <h2>Vos trois grands piliers</h2>
      </div>

      <div className="essential-summary-grid">
        <div className="essential-summary-card">
          <span>☉</span>
          <p>Soleil</p>
          <h3>{signFr(sun?.sign)}</h3>
          <small>Votre identité profonde</small>
        </div>

        <div className="essential-summary-card">
          <span>☽</span>
          <p>Lune</p>
          <h3>{signFr(moon?.sign)}</h3>
          <small>Votre monde émotionnel</small>
        </div>

        <div className="essential-summary-card">
          <span>AC</span>
          <p>Ascendant</p>
          <h3>{signFr(ascSign)}</h3>
          <small>Votre manière d’entrer dans la vie</small>
        </div>
      </div>

      <div className="essential-text">
        <p>
          Le Soleil, la Lune et l’Ascendant forment les trois fondations de
          votre thème natal. Ensemble, ils décrivent votre identité consciente,
          votre sensibilité intérieure et la façon dont vous abordez le monde.
        </p>

        <p>
          Le Soleil révèle votre essence profonde, ce qui vous anime et ce que
          vous cherchez naturellement à incarner. La Lune parle de vos besoins
          affectifs, de votre mémoire émotionnelle et de votre manière de vous
          sécuriser. L’Ascendant, lui, montre votre première impulsion face à la
          vie, votre présence spontanée et l’image que les autres perçoivent
          souvent en premier.
        </p>

        <p>
          Cette première synthèse offre une porte d’entrée simple et puissante
          vers votre carte du ciel. Les pages suivantes viendront préciser ces
          grandes tendances à travers l’analyse de chacune de vos planètes.
        </p>
      </div>
    </section>
  );
}
