// lib/compatibility.ts

export type SignKey =
  | "belier" | "taureau" | "gemeaux" | "cancer" | "lion" | "vierge"
  | "balance" | "scorpion" | "sagittaire" | "capricorne" | "verseau" | "poissons";

export const SIGNS: { key: SignKey; label: string; symbol: string; element: string }[] = [
  { key: "belier", label: "Bélier", symbol: "Ari", element: "feu" },
  { key: "taureau", label: "Taureau", symbol: "Tau", element: "terre" },
  { key: "gemeaux", label: "Gémeaux", symbol: "Gem", element: "air" },
  { key: "cancer", label: "Cancer", symbol: "Can", element: "eau" },
  { key: "lion", label: "Lion", symbol: "Leo", element: "feu" },
  { key: "vierge", label: "Vierge", symbol: "Vir", element: "terre" },
  { key: "balance", label: "Balance", symbol: "Lib", element: "air" },
  { key: "scorpion", label: "Scorpion", symbol: "Sco", element: "eau" },
  { key: "sagittaire", label: "Sagittaire", symbol: "Sag", element: "feu" },
  { key: "capricorne", label: "Capricorne", symbol: "Cap", element: "terre" },
  { key: "verseau", label: "Verseau", symbol: "Ver", element: "air" },
  { key: "poissons", label: "Poissons", symbol: "Poi", element: "eau" },
];

function getSign(key: SignKey) {
  return SIGNS.find((s) => s.key === key)!;
}

const ELEMENT_SCORES: Record<string, number> = {
  "feu-feu": 82,
  "feu-terre": 58,
  "feu-air": 90,
  "feu-eau": 55,
  "terre-terre": 78,
  "terre-air": 52,
  "terre-eau": 88,
  "air-air": 80,
  "air-eau": 60,
  "eau-eau": 85,
};

function elementScore(e1: string, e2: string): number {
  const key1 = `${e1}-${e2}`;
  const key2 = `${e2}-${e1}`;

  return ELEMENT_SCORES[key1] ?? ELEMENT_SCORES[key2] ?? 65;
}

const ELEMENT_TEXTS: Record<string, string> = {
  "feu-feu": "Deux flammes qui s’attisent : passion intense, mais attention aux egos.",
  "feu-terre": "Le feu cherche l’aventure, la terre cherche la stabilité. Un bel équilibre si chacun fait un pas.",
  "feu-air": "L’air nourrit le feu : une connexion vive, stimulante et pleine d’énergie.",
  "feu-eau": "Le feu et l’eau s’attirent autant qu’ils se testent. Une alchimie intense, parfois orageuse.",
  "terre-terre": "Deux ancrages solides : une relation stable, bâtie sur la confiance et le concret.",
  "terre-air": "La terre veut du concret, l’air veut de la liberté. Ça demande des compromis, mais ça peut durer.",
  "terre-eau": "La terre contient l’eau, l’eau nourrit la terre : une complicité naturelle et rassurante.",
  "air-air": "Deux esprits qui se comprennent à demi-mot : légèreté, discussions sans fin, complicité mentale.",
  "air-eau": "L’air analyse, l’eau ressent : deux façons de voir le monde qui peuvent se compléter ou se heurter.",
  "eau-eau": "Une connexion émotionnelle profonde, presque intuitive. Sensible, mais très puissante.",
};

export function getCompatibility(signA: SignKey, signB: SignKey) {
  const a = getSign(signA);
  const b = getSign(signB);

  const score = elementScore(a.element, b.element);
  const key1 = `${a.element}-${b.element}`;
  const key2 = `${b.element}-${a.element}`;

  const text =
    ELEMENT_TEXTS[key1] ??
    ELEMENT_TEXTS[key2] ??
    "Une combinaison unique, pleine de potentiel à découvrir.";

  return { signA: a, signB: b, score, text };
}
