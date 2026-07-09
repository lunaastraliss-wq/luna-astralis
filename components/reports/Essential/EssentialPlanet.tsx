type Props = {
  planets: any[];
  planet: string;
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

const PLANET_FR: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

const GLYPH: Record<string, string> = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Pluto: "♇",
};

const MEANING: Record<string, string> = {
  Sun: "votre identité profonde, votre vitalité et votre manière de rayonner",
  Moon: "votre monde émotionnel, vos besoins intérieurs et votre sécurité affective",
  Mercury: "votre façon de penser, de communiquer et de comprendre le monde",
  Venus: "votre manière d’aimer, de créer du lien et de rechercher l’harmonie",
  Mars: "votre énergie d’action, votre désir, votre courage et votre affirmation",
  Jupiter: "votre croissance, votre confiance, vos élans d’expansion et votre sagesse",
  Saturn: "votre sens des responsabilités, vos limites, vos leçons et votre maturité",
  Uranus: "votre besoin de liberté, d’originalité et de changement",
  Neptune: "votre imaginaire, votre intuition, votre sensibilité spirituelle et vos idéaux",
  Pluto: "vos transformations profondes, votre puissance intérieure et vos renaissances",
};

function signFr(sign?: string) {
  if (!sign) return "—";
  return SIGN_FR[sign] || sign;
}

function getPlanet(planets: any[], name: string) {
  return planets.find((p) => p.name === name);
}

export default function EssentialPlanet({ planets, planet }: Props) {
  const data = getPlanet(planets, planet);
  const name = PLANET_FR[planet] || planet;
  const glyph = GLYPH[planet] || "✦";
  const sign = signFr(data?.sign);

  return (
    <section className="essential-page essential-content-page">
      <div className="essential-page-header">
        <p>Planète natale</p>
        <h2>
          {glyph} {name} en {sign}
        </h2>
      </div>

      <div className="essential-planet-hero">
        <div className="essential-planet-glyph">{glyph}</div>

        <div>
          <p>Dans votre thème natal</p>
          <h3>{name}</h3>
          <span>{sign}</span>
        </div>
      </div>

      <div className="essential-text">
        <p>
          En astrologie, {name} représente {MEANING[planet] || "une dimension importante de votre personnalité"}.
        </p>

        <p>
          Placé en {sign}, {name} colore cette partie de votre personnalité avec
          l’énergie propre de ce signe. Cette position montre comment cette
          planète s’exprime naturellement en vous, dans vos choix, vos réactions
          et votre manière d’avancer dans la vie.
        </p>

        <p>
          Cette page vous donne une première compréhension de cette énergie.
          Dans un rapport plus détaillé, l’analyse pourrait aussi tenir compte
          de la maison astrologique et des aspects formés avec les autres
          planètes.
        </p>
      </div>
    </section>
  );
}
