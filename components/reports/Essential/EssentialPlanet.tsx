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
  Sun:
    "votre identité profonde, votre vitalité et votre manière de rayonner",
  Moon:
    "votre monde émotionnel, vos besoins intérieurs et votre sécurité affective",
  Mercury:
    "votre façon de penser, de communiquer et de comprendre le monde",
  Venus:
    "votre manière d’aimer, de créer du lien et de rechercher l’harmonie",
  Mars:
    "votre énergie d’action, votre désir, votre courage et votre affirmation",
  Jupiter:
    "votre croissance, votre confiance, vos élans d’expansion et votre sagesse",
  Saturn:
    "votre sens des responsabilités, vos limites, vos leçons et votre maturité",
  Uranus:
    "votre besoin de liberté, d’originalité et de changement",
  Neptune:
    "votre imaginaire, votre intuition, votre sensibilité spirituelle et vos idéaux",
  Pluto:
    "vos transformations profondes, votre puissance intérieure et vos renaissances",
};

const PLANET_QUESTION: Record<string, string> = {
  Sun: "Qu’est-ce qui vous permet de rayonner pleinement ?",
  Moon: "De quoi avez-vous besoin pour vous sentir intérieurement en sécurité ?",
  Mercury: "Comment votre esprit comprend-il et transmet-il les idées ?",
  Venus: "Qu’est-ce qui nourrit votre manière d’aimer et de créer du lien ?",
  Mars: "Comment votre énergie se mobilise-t-elle lorsque vous passez à l’action ?",
  Jupiter: "Où trouvez-vous confiance, croissance et ouverture ?",
  Saturn: "Quelles expériences vous invitent à développer votre maturité ?",
  Uranus: "Comment exprimez-vous votre liberté et votre originalité ?",
  Neptune: "Comment votre intuition et votre imaginaire influencent-ils votre vie ?",
  Pluto: "Quelles transformations révèlent votre puissance intérieure ?",
};

function signFr(sign?: string) {
  if (!sign) return "—";
  return SIGN_FR[sign] || sign;
}

function getPlanet(planets: any[], name: string) {
  return planets.find((item) => item.name === name);
}

export default function EssentialPlanet({
  planets,
  planet,
}: Props) {
  const data = getPlanet(planets, planet);

  const name = PLANET_FR[planet] || planet;
  const glyph = GLYPH[planet] || "✦";
  const sign = signFr(data?.sign);

  const meaning =
    MEANING[planet] ||
    "une dimension importante de votre personnalité";

  const question =
    PLANET_QUESTION[planet] ||
    "Comment cette énergie s’exprime-t-elle dans votre vie ?";

  return (
    <section className="essential-page essential-content-page essential-planet-page">
      <div className="essential-page-header essential-planet-header">
        <p>Planète natale</p>

        <h2>
          {name} en {sign}
        </h2>

        <div className="essential-title-divider">
          <span>{glyph}</span>
        </div>

        <p className="essential-planet-subtitle">
          Une dimension essentielle de votre personnalité révélée par votre
          ciel de naissance.
        </p>
      </div>

      <div className="essential-planet-hero">
        <div className="essential-planet-glyph">
          {glyph}
        </div>

        <div className="essential-planet-identity">
          <p>Dans votre thème natal</p>

          <h3>{name}</h3>

          <span>en {sign}</span>
        </div>

        <div className="essential-planet-watermark">
          {glyph}
        </div>
      </div>

      <div className="essential-planet-meaning-card">
        <p className="essential-planet-card-label">
          Ce que représente {name}
        </p>

        <h3>{question}</h3>

        <p>
          En astrologie, {name} représente {meaning}. Cette planète décrit une
          fonction précise de votre personnalité et montre la manière dont cette
          énergie cherche à s’exprimer naturellement dans votre vie.
        </p>
      </div>

      <div className="essential-planet-analysis">
        <div className="essential-planet-analysis-number">
          01
        </div>

        <div>
          <p className="essential-planet-card-label">
            L’influence du signe
          </p>

          <h3>{name} prend la couleur du {sign}</h3>

          <p>
            Placé en {sign}, {name} s’exprime à travers les qualités, les besoins
            et les réflexes propres à ce signe. Cette position influence vos
            choix, vos réactions et votre manière d’utiliser cette énergie au
            quotidien.
          </p>
        </div>
      </div>

      <div className="essential-planet-analysis">
        <div className="essential-planet-analysis-number">
          02
        </div>

        <div>
          <p className="essential-planet-card-label">
            Une première clé de lecture
          </p>

          <h3>Une énergie à reconnaître et à développer</h3>

          <p>
            Cette position ne vous enferme pas dans une définition rigide. Elle
            révèle plutôt une tendance naturelle que vous pouvez apprendre à
            comprendre, à équilibrer et à utiliser avec davantage de
            conscience.
          </p>
        </div>
      </div>

      <div className="essential-planet-note">
        <span>✦</span>

        <p>
          L’interprétation complète d’une planète tient aussi compte de sa
          maison astrologique et des aspects qu’elle forme avec les autres
          planètes.
        </p>
      </div>
    </section>
  );
}
