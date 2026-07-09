import type { NatalOffer } from "./types";

export const NATAL_OFFERS: Record<
  NatalOffer,
  {
    title: string;
    subtitle: string;
    price: string;
    badge: string;
    sections: string[];
  }
> = {
  essential: {
    title: "Carte du ciel Essentielle",
    subtitle: "Une première lecture claire de votre thème astral.",
    price: "24,99 $",
    badge: "Essentielle",
    sections: [
      "Introduction",
      "Soleil",
      "Lune",
      "Ascendant",
      "Planètes personnelles",
      "Résumé général",
    ],
  },

  premium: {
    title: "Carte du ciel Premium",
    subtitle:
      "Une analyse plus profonde de votre personnalité, de vos relations et de votre chemin de vie.",
    price: "49,99 $",
    badge: "Premium",
    sections: [
      "Introduction",
      "Soleil",
      "Lune",
      "Ascendant",
      "Planètes personnelles",
      "Maisons astrologiques",
      "Amour et relations",
      "Carrière et talents",
      "Défis personnels",
      "Résumé personnalisé",
    ],
  },

  signature: {
    title: "Carte du ciel Signature",
    subtitle:
      "Une lecture complète, détaillée et haut de gamme de votre thème astral.",
    price: "79,99 $",
    badge: "Signature",
    sections: [
      "Introduction",
      "Soleil",
      "Lune",
      "Ascendant",
      "Toutes les planètes",
      "Maisons astrologiques",
      "Aspects majeurs",
      "Nœud Nord",
      "Chiron",
      "Amour et relations",
      "Carrière et mission de vie",
      "Forces dominantes",
      "Défis karmiques",
      "Conseils personnalisés",
      "Conclusion complète",
    ],
  },
};
