"use client";

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

function translateSigns(value?: string) {
  if (!value) return "";

  let out = value;

  Object.keys(SIGN_FR).forEach((en) => {
    out = out.replace(new RegExp(en, "g"), SIGN_FR[en]);
  });

  return out;
}

function signFr(sign?: string) {
  if (!sign) return "";
  return SIGN_FR[sign] || sign;
}

function getPlanet(planets: any[], name: string) {
  return planets.find((p) => p.name === name);
}

function textForSun(sign: string) {
  const s = signFr(sign);

  return `Votre Soleil en ${s} montre votre identité profonde, votre manière de rayonner et ce qui vous anime intérieurement. C’est une énergie centrale dans votre thème astral.`;
}

function textForMoon(sign: string) {
  const s = signFr(sign);

  return `Votre Lune en ${s} parle de votre monde émotionnel, de vos besoins affectifs et de votre façon instinctive de réagir aux situations.`;
}

function textForAscendant(formatted?: string) {
  const fr = translateSigns(formatted);

  if (!fr) {
    return "Votre Ascendant représente l’image que vous projetez, votre première réaction face au monde et la façon dont les autres vous perçoivent.";
  }

  return `Votre Ascendant en ${fr} influence votre apparence extérieure, votre attitude spontanée et la première impression que vous laissez aux autres.`;
}

export default function NatalFreeSummary({ planets, angles }: Props) {
  const sun = getPlanet(planets, "Sun");
  const moon = getPlanet(planets, "Moon");
  const ascendant = angles?.ascendant;

  return (
    <section className="natal-free-summary">
      <div className="natal-summary-badge">Résumé gratuit</div>

      <h3>Les grandes lignes de votre thème astral</h3>

      <div className="natal-summary-grid">
        {sun && (
          <article className="natal-summary-card">
            <div className="natal-summary-icon">☉</div>
            <h4>Votre Soleil</h4>
            <p>{textForSun(sun.signName)}</p>
          </article>
        )}

        {moon && (
          <article className="natal-summary-card">
            <div className="natal-summary-icon">☽</div>
            <h4>Votre Lune</h4>
            <p>{textForMoon(moon.signName)}</p>
          </article>
        )}

        <article className="natal-summary-card">
          <div className="natal-summary-icon">⬆</div>
          <h4>Votre Ascendant</h4>
          <p>{textForAscendant(ascendant?.formatted)}</p>
        </article>
      </div>
    </section>
  );
}
