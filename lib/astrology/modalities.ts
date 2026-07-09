export const SIGN_MODALITY: Record<string, "Cardinal" | "Fixe" | "Mutable"> = {
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

export const MODALITY_TEXT: Record<string, string> = {
  Cardinal: `Une dominante Cardinal révèle une personnalité qui initie, provoque le mouvement et aime ouvrir de nouveaux chemins. Vous possédez une énergie de départ, une capacité à lancer les choses et à agir lorsque la situation demande une impulsion claire.`,

  Fixe: `Une dominante Fixe révèle une personnalité persévérante, loyale et capable de maintenir ses efforts dans le temps. Vous avez besoin de stabilité et de profondeur. Votre force réside dans votre endurance, votre fidélité et votre capacité à aller jusqu'au bout.`,

  Mutable: `Une dominante Mutable révèle une personnalité adaptable, souple et capable d'évoluer avec les circonstances. Vous savez vous ajuster, apprendre et accompagner les transitions. Votre force réside dans votre flexibilité, votre ouverture et votre capacité à comprendre plusieurs réalités.`,
};
