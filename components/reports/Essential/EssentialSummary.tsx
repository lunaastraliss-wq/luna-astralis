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
  return planets.find((planet) => planet.name === name);
}

export default function EssentialSummary({
  planets,
  angles,
}: Props) {
  const sun = getPlanet(planets, "Sun");
  const moon = getPlanet(planets, "Moon");

  const ascSign =
    angles?.Ascendant?.sign ||
    angles?.ASC?.sign ||
    angles?.ascendant?.sign;

  return (
    <section className="essential-page essential-content-page essential-summary-page">
      <div className="essential-page-header essential-summary-header">
        <p>Portrait astrologique</p>
        <h2>Vos trois grands piliers</h2>

        <div className="essential-title-divider">
          <span>✦</span>
        </div>

        <p className="essential-summary-introduction">
          Trois énergies fondamentales qui, ensemble, dessinent les grandes
          lignes de votre personnalité.
        </p>
      </div>

      <div className="essential-summary-grid">
        <article className="essential-summary-card">
          <div className="essential-summary-icon">☉</div>

          <p className="essential-summary-label">Votre Soleil</p>

          <h3>{signFr(sun?.sign)}</h3>

          <div className="essential-card-divider" />

          <small>Votre identité profonde</small>

          <p className="essential-card-description">
            Ce qui vous anime, vous guide et cherche naturellement à
            s’accomplir en vous.
          </p>
        </article>

        <article className="essential-summary-card">
          <div className="essential-summary-icon">☽</div>

          <p className="essential-summary-label">Votre Lune</p>

          <h3>{signFr(moon?.sign)}</h3>

          <div className="essential-card-divider" />

          <small>Votre monde émotionnel</small>

          <p className="essential-card-description">
            Vos besoins affectifs, votre sensibilité et votre manière de
            retrouver un sentiment de sécurité.
          </p>
        </article>

        <article className="essential-summary-card">
          <div className="essential-summary-icon essential-ascendant-icon">
            AC
          </div>

          <p className="essential-summary-label">Votre Ascendant</p>

          <h3>{signFr(ascSign)}</h3>

          <div className="essential-card-divider" />

          <small>Votre présence spontanée</small>

          <p className="essential-card-description">
            Votre première impulsion face à la vie et l’énergie que les autres
            perçoivent d’abord chez vous.
          </p>
        </article>
      </div>

      <div className="essential-summary-synthesis">
        <div className="essential-synthesis-symbol">✦</div>

        <div>
          <p className="essential-synthesis-kicker">
            La rencontre de vos trois énergies
          </p>

          <h3>Une personnalité riche de plusieurs dimensions</h3>

          <p>
            Le Soleil représente la personne que vous cherchez pleinement à
            devenir. La Lune révèle ce dont vous avez besoin pour vous sentir
            intérieurement en sécurité. L’Ascendant décrit votre façon
            instinctive d’aborder le monde et de commencer chaque nouvelle
            expérience.
          </p>

          <p>
            Ces trois dimensions peuvent parfois sembler parfaitement
            harmonieuses et, à d’autres moments, exprimer des besoins
            différents. Cette diversité ne constitue pas une contradiction :
            elle fait partie de la richesse et de la profondeur de votre thème
            natal.
          </p>
        </div>
      </div>

      <div className="essential-summary-note">
        <span>☾</span>

        <p>
          Les prochaines pages approfondissent chacune de vos planètes afin de
          révéler les nuances uniques de votre carte du ciel.
        </p>
      </div>
    </section>
  );
}
