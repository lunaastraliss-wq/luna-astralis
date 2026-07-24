import type {
  HoroscopePlanetaryInfluence,
  HoroscopeZodiacSign,
} from "./HoroscopePdfTypes";

export type BuildMonthlyPlanetaryInfluencesOptions = {
  zodiacSign: HoroscopeZodiacSign;
  zodiacSignLabel: string;
  isoMonth: string;
  seed: number;
};

export type MonthlyPlanetaryInfluencesResult = {
  introduction: string;
  influences: HoroscopePlanetaryInfluence[];
};

type PlanetaryText = {
  planet: string;
  title: string;
  description: string;
  advice: string;
};

const SIGN_RULERS: Record<HoroscopeZodiacSign, string> = {
  belier: "Mars",
  taureau: "Vénus",
  gemeaux: "Mercure",
  cancer: "Lune",
  lion: "Soleil",
  vierge: "Mercure",
  balance: "Vénus",
  scorpion: "Pluton",
  sagittaire: "Jupiter",
  capricorne: "Saturne",
  verseau: "Uranus",
  poissons: "Neptune",
};

const PLANETARY_TEXTS: Record<string, readonly PlanetaryText[]> = {
  Soleil: [
    {
      planet: "Soleil",
      title: "Retrouver une direction claire",
      description:
        "Le Soleil met l’accent sur votre identité, votre volonté et la manière dont vous souhaitez prendre votre place. Ce mois favorise les choix cohérents avec ce que vous voulez réellement construire.",
      advice:
        "Choisissez une priorité qui vous ressemble et donnez-lui une place visible dans votre quotidien.",
    },
    {
      planet: "Soleil",
      title: "Assumer davantage votre présence",
      description:
        "Votre besoin d’expression devient plus important. Vous pourriez ressentir l’envie de montrer votre travail, de défendre une idée ou de reprendre la direction d’une situation devenue trop passive.",
      advice:
        "Exprimez votre intention avec simplicité plutôt que de chercher à convaincre tout le monde.",
    },
  ],

  Lune: [
    {
      planet: "Lune",
      title: "Écouter vos besoins émotionnels",
      description:
        "La Lune souligne votre sensibilité, vos habitudes et votre besoin de sécurité. Certaines réactions vous aideront à reconnaître ce qui vous apaise réellement et ce qui vous demande trop d’énergie.",
      advice:
        "Accordez-vous du recul avant de répondre lorsque l’émotion devient plus forte que la situation.",
    },
    {
      planet: "Lune",
      title: "Créer un rythme plus protecteur",
      description:
        "Votre équilibre dépendra davantage de la qualité de votre environnement et de vos moments de récupération. Les échanges sincères et les repères familiers auront un effet stabilisant.",
      advice:
        "Préservez régulièrement un espace calme où vous n’avez rien à prouver ni à résoudre.",
    },
  ],

  Mercure: [
    {
      planet: "Mercure",
      title: "Clarifier vos idées et vos échanges",
      description:
        "Mercure stimule la réflexion, les démarches et les conversations importantes. Une information ou une discussion peut modifier votre compréhension d’un projet ou d’une relation.",
      advice:
        "Vérifiez les détails et reformulez clairement ce que vous attendez avant de conclure.",
    },
    {
      planet: "Mercure",
      title: "Transformer une idée en plan concret",
      description:
        "Votre esprit cherche des solutions pratiques. Une intention encore floue peut devenir réalisable si vous la divisez en étapes simples et mesurables.",
      advice:
        "Notez votre prochaine action précise au lieu de conserver seulement l’idée générale.",
    },
  ],

  Vénus: [
    {
      planet: "Vénus",
      title: "Favoriser des liens plus sincères",
      description:
        "Vénus met en lumière l’affection, les valeurs et la qualité de vos relations. Les gestes réguliers et la disponibilité émotionnelle auront davantage d’impact que les grandes déclarations.",
      advice:
        "Montrez votre attachement d’une manière concrète et laissez l’autre répondre à son propre rythme.",
    },
    {
      planet: "Vénus",
      title: "Rééquilibrer plaisir et sécurité",
      description:
        "Ce mois vous invite à mieux reconnaître ce qui vous fait du bien sans fragiliser votre stabilité. Cette réflexion peut concerner vos relations, vos dépenses ou votre environnement.",
      advice:
        "Choisissez ce qui apporte une satisfaction durable plutôt qu’un apaisement très temporaire.",
    },
  ],

  Mars: [
    {
      planet: "Mars",
      title: "Canaliser votre volonté",
      description:
        "Mars renforce l’initiative, le courage et le désir d’obtenir des résultats. Votre énergie sera plus efficace lorsqu’elle sera dirigée vers une priorité précise plutôt que dispersée entre plusieurs urgences.",
      advice:
        "Agissez rapidement sur ce qui dépend de vous, puis laissez le temps faire son travail sur le reste.",
    },
    {
      planet: "Mars",
      title: "Affirmer vos limites avec calme",
      description:
        "Une situation peut vous demander davantage de fermeté. Vous aurez intérêt à défendre votre position sans transformer une divergence en confrontation inutile.",
      advice:
        "Dites clairement ce que vous acceptez et ce que vous refusez, sans multiplier les justifications.",
    },
  ],

  Jupiter: [
    {
      planet: "Jupiter",
      title: "Élargir une possibilité",
      description:
        "Jupiter soutient la croissance, la confiance et l’ouverture à de nouvelles perspectives. Une occasion peut prendre de l’importance si vous lui donnez une structure réaliste.",
      advice:
        "Voyez plus grand, mais vérifiez les ressources et le temps nécessaires avant de vous engager.",
    },
    {
      planet: "Jupiter",
      title: "Faire confiance à votre progression",
      description:
        "Vous pourriez constater qu’une démarche avance davantage que vous ne le pensiez. Les résultats les plus solides viendront toutefois d’efforts réguliers plutôt que d’un seul grand geste.",
      advice:
        "Appuyez votre optimisme sur une action concrète répétée chaque semaine.",
    },
  ],

  Saturne: [
    {
      planet: "Saturne",
      title: "Consolider ce qui compte",
      description:
        "Saturne rappelle l’importance des limites, de la constance et des responsabilités choisies. Ce mois favorise les décisions capables de soutenir votre stabilité à long terme.",
      advice:
        "Réduisez les engagements inutiles afin de mieux respecter ceux qui ont une véritable valeur.",
    },
    {
      planet: "Saturne",
      title: "Donner une structure à vos ambitions",
      description:
        "Une ambition demande maintenant une méthode plus précise. Les contraintes rencontrées peuvent vous aider à corriger votre organisation plutôt qu’à abandonner votre objectif.",
      advice:
        "Mesurez votre progrès selon votre constance, pas seulement selon la rapidité du résultat.",
    },
  ],

  Uranus: [
    {
      planet: "Uranus",
      title: "Ouvrir une nouvelle voie",
      description:
        "Uranus encourage l’innovation, l’indépendance et les changements qui libèrent une énergie devenue stagnante. Une solution différente peut apparaître lorsque vous cessez de répéter l’ancienne méthode.",
      advice:
        "Expérimentez un changement précis sans bouleverser inutilement tout ce qui fonctionne déjà.",
    },
    {
      planet: "Uranus",
      title: "Reprendre votre liberté de décision",
      description:
        "Vous pourriez ressentir plus fortement le besoin de choisir selon vos propres critères. Cette évolution sera constructive si elle repose sur une intention claire plutôt que sur une réaction soudaine.",
      advice:
        "Modifiez ce qui limite réellement votre progression, pas seulement ce qui vous contrarie momentanément.",
    },
  ],

  Neptune: [
    {
      planet: "Neptune",
      title: "Écouter votre intuition avec discernement",
      description:
        "Neptune accentue l’imagination, la sensibilité et la perception de ce qui n’est pas encore clairement formulé. Une impression récurrente mérite votre attention, mais aussi une vérification concrète.",
      advice:
        "Accueillez votre ressenti, puis cherchez les faits capables de le confirmer ou de le nuancer.",
    },
    {
      planet: "Neptune",
      title: "Protéger votre clarté intérieure",
      description:
        "Les ambiances et les émotions extérieures peuvent vous influencer davantage. Un moment de retrait vous permettra de distinguer vos véritables besoins de ce que vous absorbez autour de vous.",
      advice:
        "Éloignez-vous temporairement du bruit lorsque vous devez prendre une décision importante.",
    },
  ],

  Pluton: [
    {
      planet: "Pluton",
      title: "Transformer une situation en profondeur",
      description:
        "Pluton met l’accent sur les changements irréversibles, les vérités cachées et la capacité à reprendre votre pouvoir. Une situation peut vous montrer clairement ce qui ne peut plus continuer de la même manière.",
      advice:
        "Laissez derrière vous ce qui a terminé son rôle au lieu d’essayer de lui redonner son ancienne forme.",
    },
    {
      planet: "Pluton",
      title: "Retrouver votre pouvoir de choix",
      description:
        "Une prise de conscience peut modifier votre rapport à une relation, une peur ou une obligation. Cette lucidité vous aidera à agir depuis une position plus solide.",
      advice:
        "Concentrez-vous sur ce que vous pouvez réellement décider, changer ou protéger dès maintenant.",
    },
  ],
};

const UNIVERSAL_PLANETS = [
  "Mercure",
  "Vénus",
  "Mars",
  "Jupiter",
  "Saturne",
  "Uranus",
  "Neptune",
  "Pluton",
] as const;

function pick<T>(values: readonly T[], seed: number, offset: number): T {
  return values[(seed + offset * 17) % values.length];
}

function uniquePlanets(planets: readonly string[]): string[] {
  return planets.filter(
    (planet, index) => planets.indexOf(planet) === index,
  );
}

function buildInfluence(
  planet: string,
  seed: number,
  offset: number,
  dominant = false,
): HoroscopePlanetaryInfluence {
  const texts = PLANETARY_TEXTS[planet] ?? PLANETARY_TEXTS.Soleil;
  const selected = pick(texts, seed, offset);

  return {
    planet: selected.planet,
    aspect: dominant
      ? "Influence dominante du mois"
      : "Tendance mensuelle",
    title: selected.title,
    description: selected.description,
    advice: selected.advice,
  };
}

/**
 * Construit les influences symboliques du rapport mensuel.
 *
 * Important : cette fonction ne prétend pas calculer des positions célestes,
 * des signes de transit ou des aspects astronomiques. Elle fournit une lecture
 * astrologique cohérente à partir du signe demandé et du mois sélectionné.
 * Les véritables transits pourront ensuite remplacer cette source sans modifier
 * le composant PDF.
 */
export function buildMonthlyPlanetaryInfluences({
  zodiacSign,
  zodiacSignLabel,
  isoMonth,
  seed,
}: BuildMonthlyPlanetaryInfluencesOptions): MonthlyPlanetaryInfluencesResult {
  const ruler = SIGN_RULERS[zodiacSign];

  const secondaryPlanets = UNIVERSAL_PLANETS.filter(
    (planet) => planet !== ruler,
  );

  const selectedPlanets = uniquePlanets([
    ruler,
    pick(secondaryPlanets, seed, 1),
    pick(secondaryPlanets, seed, 2),
    pick(secondaryPlanets, seed, 3),
    pick(secondaryPlanets, seed, 4),
    pick(secondaryPlanets, seed, 5),
  ]).slice(0, 6);

  const influences = selectedPlanets.map((planet, index) =>
    buildInfluence(
      planet,
      seed,
      index + 1,
      index === 0,
    ),
  );

  return {
    introduction:
      `Pour ${zodiacSignLabel}, ${ruler} agit comme fil conducteur symbolique de ce mois. ` +
      "Les influences suivantes décrivent les grands mouvements intérieurs, relationnels et pratiques qui peuvent accompagner votre progression. Elles sont interprétatives et ne présentent pas de positions ou d’aspects astronomiques non calculés.",
    influences,
  };
}
