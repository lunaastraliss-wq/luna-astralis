export const PLANET_FR: Record<
  string,
  string
> = {
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

export const PLANET_MEANINGS: Record<
  string,
  string
> = {
  Sun:
    "Identité, volonté et rayonnement",

  Moon:
    "Émotions, sécurité et besoins intérieurs",

  Mercury:
    "Pensée, apprentissage et communication",

  Venus:
    "Amour, valeurs et sensibilité relationnelle",

  Mars:
    "Action, désir et affirmation personnelle",

  Jupiter:
    "Expansion, confiance et développement",

  Saturn:
    "Structure, responsabilité et maturité",

  Uranus:
    "Liberté, changement et originalité",

  Neptune:
    "Intuition, imagination et inspiration",

  Pluto:
    "Transformation, profondeur et puissance intérieure",
};

export const SIGN_NAMES_FR: Record<
  string,
  string
> = {
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

  Bélier: "Bélier",
  Taureau: "Taureau",
  Gémeaux: "Gémeaux",
  Lion: "Lion",
  Vierge: "Vierge",
  Balance: "Balance",
  Scorpion: "Scorpion",
  Sagittaire: "Sagittaire",
  Capricorne: "Capricorne",
  Verseau: "Verseau",
  Poissons: "Poissons",
};

export const SIGN_KEYS: Record<
  string,
  string
> = {
  Aries: "Aries",
  Taurus: "Taurus",
  Gemini: "Gemini",
  Cancer: "Cancer",
  Leo: "Leo",
  Virgo: "Virgo",
  Libra: "Libra",
  Scorpio: "Scorpio",
  Sagittarius: "Sagittarius",
  Capricorn: "Capricorn",
  Aquarius: "Aquarius",
  Pisces: "Pisces",

  Bélier: "Aries",
  Taureau: "Taurus",
  Gémeaux: "Gemini",
  Lion: "Leo",
  Vierge: "Virgo",
  Balance: "Libra",
  Scorpion: "Scorpio",
  Sagittaire: "Sagittarius",
  Capricorne: "Capricorn",
  Verseau: "Aquarius",
  Poissons: "Pisces",
};

export const SIGNS_FROM_LONGITUDE = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;
