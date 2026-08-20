// lib/compatibility.ts

import type { Locale } from "@/i18n/config";

import {
  COMPATIBILITY_TRANSLATIONS,
} from "@/i18n/lib/compatibility";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export type SignKey =
  | "belier"
  | "taureau"
  | "gemeaux"
  | "cancer"
  | "lion"
  | "vierge"
  | "balance"
  | "scorpion"
  | "sagittaire"
  | "capricorne"
  | "verseau"
  | "poissons";

export type ElementKey =
  | "feu"
  | "terre"
  | "air"
  | "eau";

export type SignDefinition = {
  key: SignKey;
  label: string;
  symbol: string;
  element: ElementKey;
};

type ConnectionKey =
  | "magnetic"
  | "harmonious"
  | "dynamic"
  | "stable"
  | "intense"
  | "complementary"
  | "stimulating"
  | "sensual"
  | "emotional"
  | "adventurous"
  | "intellectual"
  | "transformative";

type StrengthKey =
  | "passion"
  | "communication"
  | "loyalty"
  | "stability"
  | "creativity"
  | "empathy"
  | "growth"
  | "freedom"
  | "ambition"
  | "intuition"
  | "balance"
  | "resilience";

type ChallengeKey =
  | "control"
  | "pace"
  | "emotionalNeeds"
  | "routine"
  | "distance"
  | "jealousy"
  | "stubbornness"
  | "criticism"
  | "inconsistency"
  | "sensitivity"
  | "independence"
  | "communication";

type PairProfile = {
  score: number;
  connection: ConnectionKey;
  strength: StrengthKey;
  challenge: ChallengeKey;
};

/*
|--------------------------------------------------------------------------
| Définitions des signes
|--------------------------------------------------------------------------
*/

const SIGN_DEFINITIONS: Omit<
  SignDefinition,
  "label"
>[] = [
  {
    key: "belier",
    symbol: "♈",
    element: "feu",
  },
  {
    key: "taureau",
    symbol: "♉",
    element: "terre",
  },
  {
    key: "gemeaux",
    symbol: "♊",
    element: "air",
  },
  {
    key: "cancer",
    symbol: "♋",
    element: "eau",
  },
  {
    key: "lion",
    symbol: "♌",
    element: "feu",
  },
  {
    key: "vierge",
    symbol: "♍",
    element: "terre",
  },
  {
    key: "balance",
    symbol: "♎",
    element: "air",
  },
  {
    key: "scorpion",
    symbol: "♏",
    element: "eau",
  },
  {
    key: "sagittaire",
    symbol: "♐",
    element: "feu",
  },
  {
    key: "capricorne",
    symbol: "♑",
    element: "terre",
  },
  {
    key: "verseau",
    symbol: "♒",
    element: "air",
  },
  {
    key: "poissons",
    symbol: "♓",
    element: "eau",
  },
];

/*
|--------------------------------------------------------------------------
| Ordre zodiacal
|--------------------------------------------------------------------------
|
| Permet d'utiliser la même paire dans les deux sens :
|
| Bélier + Lion
| Lion + Bélier
|
| = belier-lion
|
*/

const SIGN_ORDER: SignKey[] = [
  "belier",
  "taureau",
  "gemeaux",
  "cancer",
  "lion",
  "vierge",
  "balance",
  "scorpion",
  "sagittaire",
  "capricorne",
  "verseau",
  "poissons",
];

function getPairKey(
  signA: SignKey,
  signB: SignKey,
): string {
  const indexA =
    SIGN_ORDER.indexOf(
      signA,
    );

  const indexB =
    SIGN_ORDER.indexOf(
      signB,
    );

  if (indexA <= indexB) {
    return `${signA}-${signB}`;
  }

  return `${signB}-${signA}`;
}

/*
|--------------------------------------------------------------------------
| Profils des 78 paires uniques
|--------------------------------------------------------------------------
|
| Ces scores sont des évaluations astrologiques éditoriales.
| Ils ne constituent pas une mesure scientifique.
|
*/

const PAIR_PROFILES: Record<
  string,
  PairProfile
> = {
  /*
  |--------------------------------------------------------------------------
  | Bélier
  |--------------------------------------------------------------------------
  */

  "belier-belier": {
    score: 79,
    connection: "dynamic",
    strength: "passion",
    challenge: "control",
  },

  "belier-taureau": {
    score: 61,
    connection: "complementary",
    strength: "resilience",
    challenge: "pace",
  },

  "belier-gemeaux": {
    score: 88,
    connection: "stimulating",
    strength: "communication",
    challenge: "inconsistency",
  },

  "belier-cancer": {
    score: 57,
    connection: "emotional",
    strength: "growth",
    challenge: "sensitivity",
  },

  "belier-lion": {
    score: 93,
    connection: "dynamic",
    strength: "passion",
    challenge: "control",
  },

  "belier-vierge": {
    score: 60,
    connection: "complementary",
    strength: "growth",
    challenge: "criticism",
  },

  "belier-balance": {
    score: 84,
    connection: "magnetic",
    strength: "balance",
    challenge: "independence",
  },

  "belier-scorpion": {
    score: 72,
    connection: "intense",
    strength: "passion",
    challenge: "control",
  },

  "belier-sagittaire": {
    score: 95,
    connection: "adventurous",
    strength: "freedom",
    challenge: "inconsistency",
  },

  "belier-capricorne": {
    score: 64,
    connection: "dynamic",
    strength: "ambition",
    challenge: "control",
  },

  "belier-verseau": {
    score: 90,
    connection: "stimulating",
    strength: "freedom",
    challenge: "distance",
  },

  "belier-poissons": {
    score: 56,
    connection: "emotional",
    strength: "growth",
    challenge: "sensitivity",
  },

  /*
  |--------------------------------------------------------------------------
  | Taureau
  |--------------------------------------------------------------------------
  */

  "taureau-taureau": {
    score: 82,
    connection: "stable",
    strength: "loyalty",
    challenge: "stubbornness",
  },

  "taureau-gemeaux": {
    score: 59,
    connection: "stimulating",
    strength: "growth",
    challenge: "pace",
  },

  "taureau-cancer": {
    score: 92,
    connection: "harmonious",
    strength: "stability",
    challenge: "sensitivity",
  },

  "taureau-lion": {
    score: 68,
    connection: "sensual",
    strength: "loyalty",
    challenge: "stubbornness",
  },

  "taureau-vierge": {
    score: 94,
    connection: "stable",
    strength: "stability",
    challenge: "routine",
  },

  "taureau-balance": {
    score: 74,
    connection: "sensual",
    strength: "balance",
    challenge: "pace",
  },

  "taureau-scorpion": {
    score: 86,
    connection: "magnetic",
    strength: "loyalty",
    challenge: "jealousy",
  },

  "taureau-sagittaire": {
    score: 53,
    connection: "complementary",
    strength: "growth",
    challenge: "independence",
  },

  "taureau-capricorne": {
    score: 96,
    connection: "stable",
    strength: "ambition",
    challenge: "routine",
  },

  "taureau-verseau": {
    score: 51,
    connection: "complementary",
    strength: "growth",
    challenge: "independence",
  },

  "taureau-poissons": {
    score: 91,
    connection: "sensual",
    strength: "empathy",
    challenge: "sensitivity",
  },

  /*
  |--------------------------------------------------------------------------
  | Gémeaux
  |--------------------------------------------------------------------------
  */

  "gemeaux-gemeaux": {
    score: 81,
    connection: "intellectual",
    strength: "communication",
    challenge: "inconsistency",
  },

  "gemeaux-cancer": {
    score: 58,
    connection: "complementary",
    strength: "growth",
    challenge: "emotionalNeeds",
  },

  "gemeaux-lion": {
    score: 89,
    connection: "stimulating",
    strength: "creativity",
    challenge: "control",
  },

  "gemeaux-vierge": {
    score: 69,
    connection: "intellectual",
    strength: "communication",
    challenge: "criticism",
  },

  "gemeaux-balance": {
    score: 95,
    connection: "harmonious",
    strength: "communication",
    challenge: "inconsistency",
  },

  "gemeaux-scorpion": {
    score: 55,
    connection: "intense",
    strength: "growth",
    challenge: "communication",
  },

  "gemeaux-sagittaire": {
    score: 87,
    connection: "adventurous",
    strength: "freedom",
    challenge: "inconsistency",
  },

  "gemeaux-capricorne": {
    score: 62,
    connection: "complementary",
    strength: "growth",
    challenge: "pace",
  },

  "gemeaux-verseau": {
    score: 96,
    connection: "intellectual",
    strength: "freedom",
    challenge: "distance",
  },

  "gemeaux-poissons": {
    score: 63,
    connection: "stimulating",
    strength: "creativity",
    challenge: "communication",
  },

  /*
  |--------------------------------------------------------------------------
  | Cancer
  |--------------------------------------------------------------------------
  */

  "cancer-cancer": {
    score: 85,
    connection: "emotional",
    strength: "empathy",
    challenge: "sensitivity",
  },

  "cancer-lion": {
    score: 66,
    connection: "complementary",
    strength: "loyalty",
    challenge: "emotionalNeeds",
  },

  "cancer-vierge": {
    score: 90,
    connection: "harmonious",
    strength: "stability",
    challenge: "criticism",
  },

  "cancer-balance": {
    score: 60,
    connection: "complementary",
    strength: "balance",
    challenge: "emotionalNeeds",
  },

  "cancer-scorpion": {
    score: 97,
    connection: "intense",
    strength: "intuition",
    challenge: "jealousy",
  },

  "cancer-sagittaire": {
    score: 54,
    connection: "complementary",
    strength: "growth",
    challenge: "independence",
  },

  "cancer-capricorne": {
    score: 83,
    connection: "complementary",
    strength: "stability",
    challenge: "emotionalNeeds",
  },

  "cancer-verseau": {
    score: 49,
    connection: "complementary",
    strength: "growth",
    challenge: "distance",
  },

  "cancer-poissons": {
    score: 96,
    connection: "emotional",
    strength: "empathy",
    challenge: "sensitivity",
  },

  /*
  |--------------------------------------------------------------------------
  | Lion
  |--------------------------------------------------------------------------
  */

  "lion-lion": {
    score: 84,
    connection: "dynamic",
    strength: "passion",
    challenge: "control",
  },

  "lion-vierge": {
    score: 63,
    connection: "complementary",
    strength: "growth",
    challenge: "criticism",
  },

  "lion-balance": {
    score: 92,
    connection: "harmonious",
    strength: "creativity",
    challenge: "independence",
  },

  "lion-scorpion": {
    score: 70,
    connection: "intense",
    strength: "loyalty",
    challenge: "control",
  },

  "lion-sagittaire": {
    score: 96,
    connection: "adventurous",
    strength: "passion",
    challenge: "inconsistency",
  },

  "lion-capricorne": {
    score: 65,
    connection: "dynamic",
    strength: "ambition",
    challenge: "control",
  },

  "lion-verseau": {
    score: 85,
    connection: "magnetic",
    strength: "creativity",
    challenge: "independence",
  },

  "lion-poissons": {
    score: 57,
    connection: "emotional",
    strength: "growth",
    challenge: "sensitivity",
  },

  /*
  |--------------------------------------------------------------------------
  | Vierge
  |--------------------------------------------------------------------------
  */

  "vierge-vierge": {
    score: 83,
    connection: "stable",
    strength: "stability",
    challenge: "criticism",
  },

  "vierge-balance": {
    score: 67,
    connection: "complementary",
    strength: "balance",
    challenge: "pace",
  },

  "vierge-scorpion": {
    score: 91,
    connection: "transformative",
    strength: "loyalty",
    challenge: "control",
  },

  "vierge-sagittaire": {
    score: 56,
    connection: "complementary",
    strength: "growth",
    challenge: "routine",
  },

  "vierge-capricorne": {
    score: 97,
    connection: "stable",
    strength: "ambition",
    challenge: "routine",
  },

  "vierge-verseau": {
    score: 61,
    connection: "intellectual",
    strength: "growth",
    challenge: "independence",
  },

  "vierge-poissons": {
    score: 84,
    connection: "complementary",
    strength: "empathy",
    challenge: "sensitivity",
  },

  /*
  |--------------------------------------------------------------------------
  | Balance
  |--------------------------------------------------------------------------
  */

  "balance-balance": {
    score: 86,
    connection: "harmonious",
    strength: "balance",
    challenge: "communication",
  },

  "balance-scorpion": {
    score: 71,
    connection: "magnetic",
    strength: "growth",
    challenge: "jealousy",
  },

  "balance-sagittaire": {
    score: 90,
    connection: "stimulating",
    strength: "freedom",
    challenge: "inconsistency",
  },

  "balance-capricorne": {
    score: 59,
    connection: "complementary",
    strength: "growth",
    challenge: "pace",
  },

  "balance-verseau": {
    score: 94,
    connection: "intellectual",
    strength: "balance",
    challenge: "distance",
  },

  "balance-poissons": {
    score: 73,
    connection: "emotional",
    strength: "empathy",
    challenge: "communication",
  },

  /*
  |--------------------------------------------------------------------------
  | Scorpion
  |--------------------------------------------------------------------------
  */

  "scorpion-scorpion": {
    score: 88,
    connection: "intense",
    strength: "loyalty",
    challenge: "jealousy",
  },

  "scorpion-sagittaire": {
    score: 62,
    connection: "transformative",
    strength: "growth",
    challenge: "independence",
  },

  "scorpion-capricorne": {
    score: 92,
    connection: "stable",
    strength: "ambition",
    challenge: "control",
  },

  "scorpion-verseau": {
    score: 52,
    connection: "intense",
    strength: "growth",
    challenge: "distance",
  },

  "scorpion-poissons": {
    score: 98,
    connection: "transformative",
    strength: "intuition",
    challenge: "sensitivity",
  },

  /*
  |--------------------------------------------------------------------------
  | Sagittaire
  |--------------------------------------------------------------------------
  */

  "sagittaire-sagittaire": {
    score: 85,
    connection: "adventurous",
    strength: "freedom",
    challenge: "inconsistency",
  },

  "sagittaire-capricorne": {
    score: 58,
    connection: "complementary",
    strength: "growth",
    challenge: "pace",
  },

  "sagittaire-verseau": {
    score: 93,
    connection: "stimulating",
    strength: "freedom",
    challenge: "distance",
  },

  "sagittaire-poissons": {
    score: 64,
    connection: "emotional",
    strength: "growth",
    challenge: "sensitivity",
  },

  /*
  |--------------------------------------------------------------------------
  | Capricorne
  |--------------------------------------------------------------------------
  */

  "capricorne-capricorne": {
    score: 89,
    connection: "stable",
    strength: "ambition",
    challenge: "routine",
  },

  "capricorne-verseau": {
    score: 66,
    connection: "complementary",
    strength: "growth",
    challenge: "independence",
  },

  "capricorne-poissons": {
    score: 90,
    connection: "harmonious",
    strength: "stability",
    challenge: "emotionalNeeds",
  },

  /*
  |--------------------------------------------------------------------------
  | Verseau
  |--------------------------------------------------------------------------
  */

  "verseau-verseau": {
    score: 87,
    connection: "intellectual",
    strength: "freedom",
    challenge: "distance",
  },

  "verseau-poissons": {
    score: 60,
    connection: "complementary",
    strength: "growth",
    challenge: "communication",
  },

  /*
  |--------------------------------------------------------------------------
  | Poissons
  |--------------------------------------------------------------------------
  */

  "poissons-poissons": {
    score: 88,
    connection: "emotional",
    strength: "intuition",
    challenge: "sensitivity",
  },
};

/*
|--------------------------------------------------------------------------
| Textes des connexions — FR
|--------------------------------------------------------------------------
*/

const CONNECTION_FR: Record<
  ConnectionKey,
  (
    a: string,
    b: string,
  ) => string
> = {
  magnetic: (a, b) =>
    `Entre ${a} et ${b}, l’attirance peut être immédiate et difficile à ignorer.`,

  harmonious: (a, b) =>
    `${a} et ${b} peuvent naturellement trouver un rythme relationnel fluide et rassurant.`,

  dynamic: (a, b) =>
    `La relation entre ${a} et ${b} possède une énergie vive, directe et rarement monotone.`,

  stable: (a, b) =>
    `${a} et ${b} peuvent construire une relation solide lorsqu’ils avancent vers des objectifs communs.`,

  intense: (a, b) =>
    `Entre ${a} et ${b}, les émotions et les réactions peuvent atteindre une grande profondeur.`,

  complementary: (a, b) =>
    `${a} et ${b} fonctionnent différemment, mais leurs différences peuvent devenir complémentaires.`,

  stimulating: (a, b) =>
    `${a} et ${b} peuvent constamment stimuler la curiosité et l’énergie de l’autre.`,

  sensual: (a, b) =>
    `Entre ${a} et ${b}, la connexion peut être particulièrement sensuelle et attachante.`,

  emotional: (a, b) =>
    `${a} et ${b} peuvent développer une relation profondément sensible et émotionnelle.`,

  adventurous: (a, b) =>
    `${a} et ${b} partagent facilement le goût du mouvement, des découvertes et des nouvelles expériences.`,

  intellectual: (a, b) =>
    `La connexion entre ${a} et ${b} passe souvent par les idées, les échanges et la stimulation mentale.`,

  transformative: (a, b) =>
    `La rencontre entre ${a} et ${b} peut pousser chacun à évoluer et à transformer sa manière d’aimer.`,
};

/*
|--------------------------------------------------------------------------
| Textes des connexions — EN
|--------------------------------------------------------------------------
*/

const CONNECTION_EN: Record<
  ConnectionKey,
  (
    a: string,
    b: string,
  ) => string
> = {
  magnetic: (a, b) =>
    `Between ${a} and ${b}, attraction can be immediate and difficult to ignore.`,

  harmonious: (a, b) =>
    `${a} and ${b} can naturally find a smooth and reassuring relationship rhythm.`,

  dynamic: (a, b) =>
    `The relationship between ${a} and ${b} carries lively, direct energy and is rarely monotonous.`,

  stable: (a, b) =>
    `${a} and ${b} can build a solid relationship when they move toward shared goals.`,

  intense: (a, b) =>
    `Between ${a} and ${b}, emotions and reactions can reach considerable depth.`,

  complementary: (a, b) =>
    `${a} and ${b} operate differently, yet those differences can become complementary.`,

  stimulating: (a, b) =>
    `${a} and ${b} can continually stimulate each other’s curiosity and energy.`,

  sensual: (a, b) =>
    `Between ${a} and ${b}, the connection can feel especially sensual and affectionate.`,

  emotional: (a, b) =>
    `${a} and ${b} can develop a deeply sensitive and emotional bond.`,

  adventurous: (a, b) =>
    `${a} and ${b} easily share a taste for movement, discovery and new experiences.`,

  intellectual: (a, b) =>
    `The connection between ${a} and ${b} often develops through ideas, conversation and mental stimulation.`,

  transformative: (a, b) =>
    `The connection between ${a} and ${b} can encourage both partners to grow and transform the way they love.`,
};

/*
|--------------------------------------------------------------------------
| Textes des connexions — ES
|--------------------------------------------------------------------------
*/

const CONNECTION_ES: Record<
  ConnectionKey,
  (
    a: string,
    b: string,
  ) => string
> = {
  magnetic: (a, b) =>
    `Entre ${a} y ${b}, la atracción puede ser inmediata y difícil de ignorar.`,

  harmonious: (a, b) =>
    `${a} y ${b} pueden encontrar de forma natural un ritmo de relación fluido y tranquilizador.`,

  dynamic: (a, b) =>
    `La relación entre ${a} y ${b} posee una energía viva, directa y rara vez monótona.`,

  stable: (a, b) =>
    `${a} y ${b} pueden construir una relación sólida cuando avanzan hacia objetivos compartidos.`,

  intense: (a, b) =>
    `Entre ${a} y ${b}, las emociones y las reacciones pueden alcanzar una gran profundidad.`,

  complementary: (a, b) =>
    `${a} y ${b} funcionan de maneras diferentes, pero esas diferencias pueden complementarse.`,

  stimulating: (a, b) =>
    `${a} y ${b} pueden estimular constantemente la curiosidad y la energía del otro.`,

  sensual: (a, b) =>
    `Entre ${a} y ${b}, la conexión puede ser especialmente sensual y afectuosa.`,

  emotional: (a, b) =>
    `${a} y ${b} pueden desarrollar un vínculo profundamente sensible y emocional.`,

  adventurous: (a, b) =>
    `${a} y ${b} comparten fácilmente el gusto por el movimiento, los descubrimientos y las nuevas experiencias.`,

  intellectual: (a, b) =>
    `La conexión entre ${a} y ${b} suele desarrollarse a través de las ideas, las conversaciones y la estimulación mental.`,

  transformative: (a, b) =>
    `La relación entre ${a} y ${b} puede impulsar a ambos a crecer y transformar su manera de amar.`,
};

/*
|--------------------------------------------------------------------------
| Textes des connexions — DE
|--------------------------------------------------------------------------
*/

const CONNECTION_DE: Record<
  ConnectionKey,
  (
    a: string,
    b: string,
  ) => string
> = {
  magnetic: (a, b) =>
    `Zwischen ${a} und ${b} kann die Anziehung unmittelbar und schwer zu übersehen sein.`,

  harmonious: (a, b) =>
    `${a} und ${b} können auf natürliche Weise einen harmonischen und beruhigenden Beziehungsrhythmus finden.`,

  dynamic: (a, b) =>
    `Die Beziehung zwischen ${a} und ${b} besitzt eine lebendige, direkte und selten langweilige Energie.`,

  stable: (a, b) =>
    `${a} und ${b} können eine solide Beziehung aufbauen, wenn sie gemeinsame Ziele verfolgen.`,

  intense: (a, b) =>
    `Zwischen ${a} und ${b} können Gefühle und Reaktionen eine außergewöhnliche Tiefe erreichen.`,

  complementary: (a, b) =>
    `${a} und ${b} funktionieren unterschiedlich, doch gerade diese Unterschiede können sich ergänzen.`,

  stimulating: (a, b) =>
    `${a} und ${b} können Neugier und Energie des anderen immer wieder anregen.`,

  sensual: (a, b) =>
    `Zwischen ${a} und ${b} kann eine besonders sinnliche und liebevolle Verbindung entstehen.`,

  emotional: (a, b) =>
    `${a} und ${b} können eine tiefe, sensible und emotionale Bindung entwickeln.`,

  adventurous: (a, b) =>
    `${a} und ${b} teilen häufig die Freude an Bewegung, Entdeckungen und neuen Erfahrungen.`,

  intellectual: (a, b) =>
    `Die Verbindung zwischen ${a} und ${b} entsteht häufig durch Ideen, Gespräche und geistige Anregung.`,

  transformative: (a, b) =>
    `Die Verbindung zwischen ${a} und ${b} kann beide dazu anregen, zu wachsen und ihre Art zu lieben weiterzuentwickeln.`,
};

/*
|--------------------------------------------------------------------------
| Textes des connexions — IT
|--------------------------------------------------------------------------
*/

const CONNECTION_IT: Record<
  ConnectionKey,
  (
    a: string,
    b: string,
  ) => string
> = {
  magnetic: (a, b) =>
    `Tra ${a} e ${b}, l’attrazione può essere immediata e difficile da ignorare.`,

  harmonious: (a, b) =>
    `${a} e ${b} possono trovare naturalmente un ritmo di relazione fluido e rassicurante.`,

  dynamic: (a, b) =>
    `La relazione tra ${a} e ${b} possiede un’energia vivace, diretta e raramente monotona.`,

  stable: (a, b) =>
    `${a} e ${b} possono costruire una relazione solida quando procedono verso obiettivi comuni.`,

  intense: (a, b) =>
    `Tra ${a} e ${b}, emozioni e reazioni possono raggiungere una notevole profondità.`,

  complementary: (a, b) =>
    `${a} e ${b} funzionano in modi diversi, ma proprio queste differenze possono completarsi.`,

  stimulating: (a, b) =>
    `${a} e ${b} possono stimolare continuamente la curiosità e l’energia reciproca.`,

  sensual: (a, b) =>
    `Tra ${a} e ${b}, la connessione può essere particolarmente sensuale e affettuosa.`,

  emotional: (a, b) =>
    `${a} e ${b} possono sviluppare un legame profondamente sensibile ed emotivo.`,

  adventurous: (a, b) =>
    `${a} e ${b} condividono facilmente il gusto per il movimento, le scoperte e le nuove esperienze.`,

  intellectual: (a, b) =>
    `La connessione tra ${a} e ${b} passa spesso attraverso idee, dialogo e stimolazione mentale.`,

  transformative: (a, b) =>
    `Il legame tra ${a} e ${b} può spingere entrambi a crescere e trasformare il proprio modo di amare.`,
};

/*
|--------------------------------------------------------------------------
| Textes des connexions — PT
|--------------------------------------------------------------------------
*/

const CONNECTION_PT: Record<
  ConnectionKey,
  (
    a: string,
    b: string,
  ) => string
> = {
  magnetic: (a, b) =>
    `Entre ${a} e ${b}, a atração pode ser imediata e difícil de ignorar.`,

  harmonious: (a, b) =>
    `${a} e ${b} podem encontrar naturalmente um ritmo de relacionamento fluido e reconfortante.`,

  dynamic: (a, b) =>
    `A relação entre ${a} e ${b} possui uma energia viva, direta e raramente monótona.`,

  stable: (a, b) =>
    `${a} e ${b} podem construir uma relação sólida quando caminham em direção a objetivos comuns.`,

  intense: (a, b) =>
    `Entre ${a} e ${b}, emoções e reações podem alcançar uma grande profundidade.`,

  complementary: (a, b) =>
    `${a} e ${b} funcionam de maneiras diferentes, mas essas diferenças podem se complementar.`,

  stimulating: (a, b) =>
    `${a} e ${b} podem estimular constantemente a curiosidade e a energia um do outro.`,

  sensual: (a, b) =>
    `Entre ${a} e ${b}, a conexão pode ser especialmente sensual e afetuosa.`,

  emotional: (a, b) =>
    `${a} e ${b} podem desenvolver um vínculo profundamente sensível e emocional.`,

  adventurous: (a, b) =>
    `${a} e ${b} compartilham facilmente o gosto por movimento, descobertas e novas experiências.`,

  intellectual: (a, b) =>
    `A conexão entre ${a} e ${b} costuma se desenvolver por meio de ideias, conversas e estímulo mental.`,

  transformative: (a, b) =>
    `A relação entre ${a} e ${b} pode incentivar os dois a crescer e transformar sua maneira de amar.`,
};

/*
|--------------------------------------------------------------------------
| Connexions regroupées
|--------------------------------------------------------------------------
*/

const CONNECTION_TEXTS: Record<
  Locale,
  Record<
    ConnectionKey,
    (
      a: string,
      b: string,
    ) => string
  >
> = {
  fr: CONNECTION_FR,
  en: CONNECTION_EN,
  es: CONNECTION_ES,
  de: CONNECTION_DE,
  it: CONNECTION_IT,
  pt: CONNECTION_PT,
};

/*
|--------------------------------------------------------------------------
| Forces
|--------------------------------------------------------------------------
*/

const STRENGTH_TEXTS: Record<
  Locale,
  Record<
    StrengthKey,
    string
  >
> = {
  fr: {
    passion:
      "La passion peut devenir l’un des moteurs les plus puissants de cette union.",

    communication:
      "La communication et la curiosité mutuelle représentent un véritable point fort.",

    loyalty:
      "La loyauté et l’engagement peuvent créer un lien particulièrement solide.",

    stability:
      "La capacité à bâtir quelque chose de stable constitue une force importante.",

    creativity:
      "La créativité et l’enthousiasme peuvent nourrir constamment la relation.",

    empathy:
      "L’écoute et la compréhension émotionnelle peuvent rapprocher profondément les partenaires.",

    growth:
      "Cette relation peut pousser chacun à évoluer et à sortir de ses habitudes.",

    freedom:
      "Le respect de la liberté individuelle peut renforcer considérablement le lien.",

    ambition:
      "Les objectifs communs et l’ambition peuvent donner une direction forte au couple.",

    intuition:
      "Une compréhension presque intuitive peut s’installer entre les deux partenaires.",

    balance:
      "La recherche d’équilibre et de coopération peut devenir l’un des piliers de cette relation.",

    resilience:
      "Avec du temps, cette union peut développer une remarquable capacité à traverser les difficultés.",
  },

  en: {
    passion:
      "Passion can become one of the most powerful driving forces in this union.",

    communication:
      "Communication and mutual curiosity are genuine strengths.",

    loyalty:
      "Loyalty and commitment can create an especially solid bond.",

    stability:
      "The ability to build something stable is an important strength.",

    creativity:
      "Creativity and enthusiasm can continually nourish the relationship.",

    empathy:
      "Listening and emotional understanding can bring both partners deeply closer.",

    growth:
      "This relationship can encourage each person to grow beyond familiar patterns.",

    freedom:
      "Respect for individual freedom can considerably strengthen the bond.",

    ambition:
      "Shared goals and ambition can give the relationship a strong sense of direction.",

    intuition:
      "An almost intuitive understanding can develop between the two partners.",

    balance:
      "A desire for balance and cooperation can become one of the pillars of this relationship.",

    resilience:
      "With time, this union can develop a remarkable capacity to overcome difficulties.",
  },

  es: {
    passion:
      "La pasión puede convertirse en uno de los motores más poderosos de esta unión.",

    communication:
      "La comunicación y la curiosidad mutua representan una verdadera fortaleza.",

    loyalty:
      "La lealtad y el compromiso pueden crear un vínculo especialmente sólido.",

    stability:
      "La capacidad de construir algo estable constituye una fortaleza importante.",

    creativity:
      "La creatividad y el entusiasmo pueden alimentar constantemente la relación.",

    empathy:
      "La escucha y la comprensión emocional pueden acercar profundamente a ambos.",

    growth:
      "Esta relación puede impulsar a cada persona a evolucionar y salir de sus hábitos.",

    freedom:
      "El respeto por la libertad individual puede fortalecer considerablemente el vínculo.",

    ambition:
      "Los objetivos compartidos y la ambición pueden dar una dirección fuerte a la pareja.",

    intuition:
      "Puede desarrollarse una comprensión casi intuitiva entre ambos.",

    balance:
      "La búsqueda de equilibrio y cooperación puede convertirse en uno de los pilares de la relación.",

    resilience:
      "Con el tiempo, esta unión puede desarrollar una notable capacidad para superar dificultades.",
  },

  de: {
    passion:
      "Leidenschaft kann zu einer der stärksten Kräfte dieser Verbindung werden.",

    communication:
      "Kommunikation und gegenseitige Neugier gehören zu den großen Stärken.",

    loyalty:
      "Loyalität und Engagement können eine besonders stabile Bindung schaffen.",

    stability:
      "Die Fähigkeit, gemeinsam etwas Beständiges aufzubauen, ist eine wichtige Stärke.",

    creativity:
      "Kreativität und Begeisterung können die Beziehung immer wieder beleben.",

    empathy:
      "Zuhören und emotionales Verständnis können beide Partner tief miteinander verbinden.",

    growth:
      "Diese Beziehung kann beide dazu anregen, sich weiterzuentwickeln.",

    freedom:
      "Der Respekt vor persönlicher Freiheit kann die Verbindung deutlich stärken.",

    ambition:
      "Gemeinsame Ziele und Ehrgeiz können der Beziehung eine klare Richtung geben.",

    intuition:
      "Zwischen beiden Partnern kann sich ein beinahe intuitives Verständnis entwickeln.",

    balance:
      "Das Streben nach Ausgleich und Zusammenarbeit kann zu einer tragenden Säule werden.",

    resilience:
      "Mit der Zeit kann diese Verbindung eine bemerkenswerte Widerstandskraft entwickeln.",
  },

  it: {
    passion:
      "La passione può diventare una delle forze più potenti di questa unione.",

    communication:
      "La comunicazione e la curiosità reciproca rappresentano un vero punto di forza.",

    loyalty:
      "Lealtà e impegno possono creare un legame particolarmente solido.",

    stability:
      "La capacità di costruire qualcosa di stabile è una forza importante.",

    creativity:
      "Creatività ed entusiasmo possono nutrire continuamente la relazione.",

    empathy:
      "L’ascolto e la comprensione emotiva possono avvicinare profondamente i partner.",

    growth:
      "Questa relazione può spingere entrambi a crescere e uscire dalle proprie abitudini.",

    freedom:
      "Il rispetto della libertà individuale può rafforzare notevolmente il legame.",

    ambition:
      "Obiettivi comuni e ambizione possono dare una direzione forte alla coppia.",

    intuition:
      "Tra i due partner può svilupparsi una comprensione quasi intuitiva.",

    balance:
      "La ricerca di equilibrio e cooperazione può diventare uno dei pilastri della relazione.",

    resilience:
      "Con il tempo, questa unione può sviluppare una notevole capacità di superare le difficoltà.",
  },

  pt: {
    passion:
      "A paixão pode se tornar uma das forças mais poderosas desta união.",

    communication:
      "A comunicação e a curiosidade mútua representam um verdadeiro ponto forte.",

    loyalty:
      "Lealdade e compromisso podem criar um vínculo especialmente sólido.",

    stability:
      "A capacidade de construir algo estável é uma força importante.",

    creativity:
      "Criatividade e entusiasmo podem alimentar continuamente a relação.",

    empathy:
      "Escuta e compreensão emocional podem aproximar profundamente os parceiros.",

    growth:
      "Esta relação pode incentivar cada pessoa a crescer e sair de padrões habituais.",

    freedom:
      "O respeito pela liberdade individual pode fortalecer consideravelmente o vínculo.",

    ambition:
      "Objetivos em comum e ambição podem dar uma direção forte ao casal.",

    intuition:
      "Uma compreensão quase intuitiva pode surgir entre os dois parceiros.",

    balance:
      "A busca por equilíbrio e cooperação pode se tornar um dos pilares da relação.",

    resilience:
      "Com o tempo, esta união pode desenvolver uma notável capacidade de superar dificuldades.",
  },
};

/*
|--------------------------------------------------------------------------
| Défis
|--------------------------------------------------------------------------
*/

const CHALLENGE_TEXTS: Record<
  Locale,
  Record<
    ChallengeKey,
    string
  >
> = {
  fr: {
    control:
      "Le défi sera d’éviter les luttes de pouvoir et de laisser suffisamment de place à chacun.",

    pace:
      "Leurs rythmes différents demanderont des compromis pour éviter frustration et impatience.",

    emotionalNeeds:
      "Les besoins affectifs peuvent être très différents et devront être exprimés clairement.",

    routine:
      "La stabilité ne devra pas se transformer en routine ou en immobilisme.",

    distance:
      "Une certaine distance émotionnelle pourrait parfois créer un sentiment d’incompréhension.",

    jealousy:
      "La jalousie ou la possessivité devront être maîtrisées pour préserver la confiance.",

    stubbornness:
      "Les deux partenaires devront apprendre à céder plutôt que de rester figés sur leurs positions.",

    criticism:
      "Une tendance à analyser ou critiquer excessivement peut fragiliser la spontanéité du lien.",

    inconsistency:
      "Le manque de constance peut devenir frustrant si les attentes ne sont pas clairement établies.",

    sensitivity:
      "Une grande sensibilité peut amplifier les blessures si les émotions ne sont pas exprimées avec douceur.",

    independence:
      "Le besoin d’indépendance devra coexister avec le besoin de sécurité affective.",

    communication:
      "Des malentendus peuvent apparaître si chacun suppose que l’autre comprend sans avoir besoin d’expliquer.",
  },

  en: {
    control:
      "The challenge will be avoiding power struggles and leaving enough room for each partner.",

    pace:
      "Different rhythms will require compromise to prevent frustration and impatience.",

    emotionalNeeds:
      "Emotional needs can differ considerably and will need to be expressed clearly.",

    routine:
      "Stability should not turn into routine or stagnation.",

    distance:
      "A degree of emotional distance could sometimes create a sense of misunderstanding.",

    jealousy:
      "Jealousy or possessiveness will need to be managed to preserve trust.",

    stubbornness:
      "Both partners will need to learn when to compromise rather than remaining fixed in their positions.",

    criticism:
      "A tendency to overanalyze or criticize can weaken the spontaneity of the bond.",

    inconsistency:
      "A lack of consistency can become frustrating when expectations are not clearly established.",

    sensitivity:
      "Strong sensitivity can magnify hurt feelings unless emotions are expressed gently.",

    independence:
      "The need for independence will have to coexist with the need for emotional security.",

    communication:
      "Misunderstandings can arise if either partner assumes the other already understands.",
  },

  es: {
    control:
      "El desafío será evitar las luchas de poder y dejar suficiente espacio a cada persona.",

    pace:
      "Los ritmos diferentes exigirán compromisos para evitar frustración e impaciencia.",

    emotionalNeeds:
      "Las necesidades afectivas pueden ser muy diferentes y deberán expresarse claramente.",

    routine:
      "La estabilidad no deberá convertirse en rutina o inmovilismo.",

    distance:
      "Cierta distancia emocional podría generar a veces una sensación de incomprensión.",

    jealousy:
      "Los celos o la posesividad deberán gestionarse para preservar la confianza.",

    stubbornness:
      "Ambos deberán aprender a ceder en lugar de mantenerse rígidos en sus posiciones.",

    criticism:
      "Una tendencia a analizar o criticar demasiado puede debilitar la espontaneidad del vínculo.",

    inconsistency:
      "La falta de constancia puede resultar frustrante si las expectativas no están claras.",

    sensitivity:
      "Una gran sensibilidad puede amplificar las heridas si las emociones no se expresan con delicadeza.",

    independence:
      "La necesidad de independencia deberá convivir con la necesidad de seguridad afectiva.",

    communication:
      "Pueden surgir malentendidos si cada uno supone que el otro comprende sin necesidad de explicaciones.",
  },

  de: {
    control:
      "Die Herausforderung besteht darin, Machtkämpfe zu vermeiden und beiden genügend Raum zu lassen.",

    pace:
      "Unterschiedliche Geschwindigkeiten erfordern Kompromisse, um Frustration zu vermeiden.",

    emotionalNeeds:
      "Emotionale Bedürfnisse können sehr unterschiedlich sein und sollten klar ausgesprochen werden.",

    routine:
      "Stabilität sollte nicht in Routine oder Stillstand übergehen.",

    distance:
      "Emotionale Distanz kann gelegentlich ein Gefühl des Unverständnisses hervorrufen.",

    jealousy:
      "Eifersucht oder Besitzdenken sollten bewusst kontrolliert werden, um Vertrauen zu bewahren.",

    stubbornness:
      "Beide Partner müssen lernen nachzugeben, statt starr an ihren Positionen festzuhalten.",

    criticism:
      "Übermäßiges Analysieren oder Kritisieren kann die Spontaneität der Verbindung beeinträchtigen.",

    inconsistency:
      "Mangelnde Beständigkeit kann frustrierend werden, wenn Erwartungen nicht klar sind.",

    sensitivity:
      "Hohe Sensibilität kann Verletzungen verstärken, wenn Gefühle nicht behutsam ausgedrückt werden.",

    independence:
      "Das Bedürfnis nach Unabhängigkeit muss mit emotionaler Sicherheit in Einklang gebracht werden.",

    communication:
      "Missverständnisse sind möglich, wenn beide voraussetzen, dass der andere alles automatisch versteht.",
  },

  it: {
    control:
      "La sfida sarà evitare lotte di potere e lasciare spazio sufficiente a entrambi.",

    pace:
      "Ritmi diversi richiederanno compromessi per evitare frustrazione e impazienza.",

    emotionalNeeds:
      "I bisogni affettivi possono essere molto diversi e dovranno essere espressi chiaramente.",

    routine:
      "La stabilità non dovrà trasformarsi in routine o immobilità.",

    distance:
      "Una certa distanza emotiva potrebbe talvolta creare incomprensione.",

    jealousy:
      "Gelosia o possessività dovranno essere gestite per preservare la fiducia.",

    stubbornness:
      "Entrambi dovranno imparare a cedere invece di restare rigidamente sulle proprie posizioni.",

    criticism:
      "La tendenza ad analizzare o criticare eccessivamente può indebolire la spontaneità del legame.",

    inconsistency:
      "La mancanza di costanza può diventare frustrante se le aspettative non sono chiare.",

    sensitivity:
      "Una forte sensibilità può amplificare le ferite se le emozioni non vengono espresse con delicatezza.",

    independence:
      "Il bisogno di indipendenza dovrà convivere con il bisogno di sicurezza emotiva.",

    communication:
      "Possono nascere incomprensioni se ciascuno presume che l’altro capisca senza spiegazioni.",
  },

  pt: {
    control:
      "O desafio será evitar disputas de poder e deixar espaço suficiente para cada parceiro.",

    pace:
      "Ritmos diferentes exigirão concessões para evitar frustração e impaciência.",

    emotionalNeeds:
      "As necessidades afetivas podem ser muito diferentes e precisarão ser expressas claramente.",

    routine:
      "A estabilidade não deverá se transformar em rotina ou imobilidade.",

    distance:
      "Uma certa distância emocional pode às vezes gerar sensação de incompreensão.",

    jealousy:
      "Ciúme ou possessividade precisarão ser administrados para preservar a confiança.",

    stubbornness:
      "Os dois precisarão aprender a ceder em vez de permanecer rígidos em suas posições.",

    criticism:
      "A tendência de analisar ou criticar em excesso pode enfraquecer a espontaneidade da relação.",

    inconsistency:
      "A falta de constância pode se tornar frustrante quando as expectativas não estão claras.",

    sensitivity:
      "Uma grande sensibilidade pode ampliar mágoas se as emoções não forem expressas com delicadeza.",

    independence:
      "A necessidade de independência terá de coexistir com a necessidade de segurança emocional.",

    communication:
      "Mal-entendidos podem surgir se cada um presumir que o outro entende sem precisar explicar.",
  },
};

/*
|--------------------------------------------------------------------------
| Conclusions
|--------------------------------------------------------------------------
*/

const CONCLUSIONS: Record<
  Locale,
  string
> = {
  fr:
    "Avec de la communication et une bonne compréhension mutuelle, cette dynamique peut évoluer de façon très positive.",

  en:
    "With communication and mutual understanding, this dynamic can develop in a very positive direction.",

  es:
    "Con comunicación y comprensión mutua, esta dinámica puede evolucionar de una manera muy positiva.",

  de:
    "Mit Kommunikation und gegenseitigem Verständnis kann sich diese Dynamik sehr positiv entwickeln.",

  it:
    "Con comunicazione e comprensione reciproca, questa dinamica può evolvere in modo molto positivo.",

  pt:
    "Com comunicação e compreensão mútua, essa dinâmica pode evoluir de forma muito positiva.",
};

/*
|--------------------------------------------------------------------------
| Liste des signes localisée
|--------------------------------------------------------------------------
*/

export function getSigns(
  locale: Locale = "fr",
): SignDefinition[] {
  const translations =
    COMPATIBILITY_TRANSLATIONS[
      locale
    ];

  return SIGN_DEFINITIONS.map(
    (sign) => ({
      ...sign,

      label:
        translations.signs[
          sign.key
        ],
    }),
  );
}

/*
|--------------------------------------------------------------------------
| Compatibilité avec le reste du site
|--------------------------------------------------------------------------
*/

export const SIGNS:
  SignDefinition[] =
  getSigns(
    "fr",
  );

/*
|--------------------------------------------------------------------------
| Trouver un signe
|--------------------------------------------------------------------------
*/

function getSign(
  key: SignKey,
  locale: Locale,
): SignDefinition {
  const sign =
    getSigns(
      locale,
    ).find(
      (item) =>
        item.key === key,
    );

  if (!sign) {
    throw new Error(
      `Unknown zodiac sign: ${key}`,
    );
  }

  return sign;
}

/*
|--------------------------------------------------------------------------
| Obtenir le profil de la paire
|--------------------------------------------------------------------------
*/

function getPairProfile(
  signA: SignKey,
  signB: SignKey,
): PairProfile {
  const pairKey =
    getPairKey(
      signA,
      signB,
    );

  const profile =
    PAIR_PROFILES[
      pairKey
    ];

  if (!profile) {
    throw new Error(
      `Missing compatibility profile: ${pairKey}`,
    );
  }

  return profile;
}

/*
|--------------------------------------------------------------------------
| Construire le texte personnalisé
|--------------------------------------------------------------------------
*/

function buildCompatibilityText(
  signA: SignDefinition,
  signB: SignDefinition,
  profile: PairProfile,
  locale: Locale,
): string {
  const connection =
    CONNECTION_TEXTS[
      locale
    ][
      profile.connection
    ](
      signA.label,
      signB.label,
    );

  const strength =
    STRENGTH_TEXTS[
      locale
    ][
      profile.strength
    ];

  const challenge =
    CHALLENGE_TEXTS[
      locale
    ][
      profile.challenge
    ];

  const conclusion =
    CONCLUSIONS[
      locale
    ];

  return [
    connection,
    strength,
    challenge,
    conclusion,
  ].join(
    " ",
  );
}

/*
|--------------------------------------------------------------------------
| Résultat public
|--------------------------------------------------------------------------
*/

export function getCompatibility(
  signA: SignKey,
  signB: SignKey,
  locale: Locale = "fr",
) {
  const a =
    getSign(
      signA,
      locale,
    );

  const b =
    getSign(
      signB,
      locale,
    );

  const profile =
    getPairProfile(
      signA,
      signB,
    );

  const text =
    buildCompatibilityText(
      a,
      b,
      profile,
      locale,
    );

  return {
    signA:
      a,

    signB:
      b,

    score:
      profile.score,

    text,
  };
    }
