import type {
  PdfLocale,
} from "./EssentialPdfTypes";

import {
  SUN,
  MOON,
  MERCURY,
  VENUS,
  MARS,
  JUPITER,
  SATURN,
  URANUS,
  NEPTUNE,
  PLUTO,
} from "@/lib/astrology";

import {
  getLocalizedPlanetInterpretation,
} from "../PdfI18n/PdfAstrologyI18n";

/*
|--------------------------------------------------------------------------
| i18n — EssentialPdfUtils
|--------------------------------------------------------------------------
*/

import utilsFr from "../../i18n/migrated/fr/components/essentialpdf/essentialpdfutils.json";
import utilsEn from "../../i18n/migrated/en/components/essentialpdf/essentialpdfutils.json";
import utilsEs from "../../i18n/migrated/es/components/essentialpdf/essentialpdfutils.json";
import utilsDe from "../../i18n/migrated/de/components/essentialpdf/essentialpdfutils.json";
import utilsIt from "../../i18n/migrated/it/components/essentialpdf/essentialpdfutils.json";
import utilsPt from "../../i18n/migrated/pt/components/essentialpdf/essentialpdfutils.json";

/*
|--------------------------------------------------------------------------
| i18n — PdfPlanet
|--------------------------------------------------------------------------
*/

import pdfPlanetFr from "../../i18n/migrated/fr/components/essentialpdf/pdfplanet.json";
import pdfPlanetEn from "../../i18n/migrated/en/components/essentialpdf/pdfplanet.json";
import pdfPlanetEs from "../../i18n/migrated/es/components/essentialpdf/pdfplanet.json";
import pdfPlanetDe from "../../i18n/migrated/de/components/essentialpdf/pdfplanet.json";
import pdfPlanetIt from "../../i18n/migrated/it/components/essentialpdf/pdfplanet.json";
import pdfPlanetPt from "../../i18n/migrated/pt/components/essentialpdf/pdfplanet.json";

type Dictionary =
  Record<string, string>;

const UTILS_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: utilsFr,
  en: utilsEn,
  es: utilsEs,
  de: utilsDe,
  it: utilsIt,
  pt: utilsPt,
};

const PDF_PLANET_BY_LOCALE: Record<
  PdfLocale,
  Dictionary
> = {
  fr: pdfPlanetFr,
  en: pdfPlanetEn,
  es: pdfPlanetEs,
  de: pdfPlanetDe,
  it: pdfPlanetIt,
  pt: pdfPlanetPt,
};

/*
|--------------------------------------------------------------------------
| Signes
|--------------------------------------------------------------------------
*/

export const SIGN_FR: Record<
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
};

const SIGN_NAMES: Record<
  PdfLocale,
  Record<string, string>
> = {
  fr: {
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
  },

  en: {
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
  },

  es: {
    Aries: "Aries",
    Taurus: "Tauro",
    Gemini: "Géminis",
    Cancer: "Cáncer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Escorpio",
    Sagittarius: "Sagitario",
    Capricorn: "Capricornio",
    Aquarius: "Acuario",
    Pisces: "Piscis",
  },

  de: {
    Aries: "Widder",
    Taurus: "Stier",
    Gemini: "Zwillinge",
    Cancer: "Krebs",
    Leo: "Löwe",
    Virgo: "Jungfrau",
    Libra: "Waage",
    Scorpio: "Skorpion",
    Sagittarius: "Schütze",
    Capricorn: "Steinbock",
    Aquarius: "Wassermann",
    Pisces: "Fische",
  },

  it: {
    Aries: "Ariete",
    Taurus: "Toro",
    Gemini: "Gemelli",
    Cancer: "Cancro",
    Leo: "Leone",
    Virgo: "Vergine",
    Libra: "Bilancia",
    Scorpio: "Scorpione",
    Sagittarius: "Sagittario",
    Capricorn: "Capricorno",
    Aquarius: "Acquario",
    Pisces: "Pesci",
  },

  pt: {
    Aries: "Áries",
    Taurus: "Touro",
    Gemini: "Gêmeos",
    Cancer: "Câncer",
    Leo: "Leão",
    Virgo: "Virgem",
    Libra: "Libra",
    Scorpio: "Escorpião",
    Sagittarius: "Sagitário",
    Capricorn: "Capricórnio",
    Aquarius: "Aquário",
    Pisces: "Peixes",
  },
};

/*
|--------------------------------------------------------------------------
| Planètes
|--------------------------------------------------------------------------
*/

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

const PLANET_NAMES: Record<
  PdfLocale,
  Record<string, string>
> = {
  fr: {
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
  },

  en: {
    Sun: "Sun",
    Moon: "Moon",
    Mercury: "Mercury",
    Venus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturn: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluto: "Pluto",
  },

  es: {
    Sun: "Sol",
    Moon: "Luna",
    Mercury: "Mercurio",
    Venus: "Venus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturn: "Saturno",
    Uranus: "Urano",
    Neptune: "Neptuno",
    Pluto: "Plutón",
  },

  de: {
    Sun: "Sonne",
    Moon: "Mond",
    Mercury: "Merkur",
    Venus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturn: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptun",
    Pluto: "Pluto",
  },

  it: {
    Sun: "Sole",
    Moon: "Luna",
    Mercury: "Mercurio",
    Venus: "Venere",
    Mars: "Marte",
    Jupiter: "Giove",
    Saturn: "Saturno",
    Uranus: "Urano",
    Neptune: "Nettuno",
    Pluto: "Plutone",
  },

  pt: {
    Sun: "Sol",
    Moon: "Lua",
    Mercury: "Mercúrio",
    Venus: "Vênus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturn: "Saturno",
    Uranus: "Urano",
    Neptune: "Netuno",
    Pluto: "Plutão",
  },
};

/*
|--------------------------------------------------------------------------
| Significations des planètes
|--------------------------------------------------------------------------
*/

export const PLANET_MEANINGS: Record<
  string,
  string
> = {
  Sun: "Identité et volonté",
  Moon: "Émotions et besoins",
  Mercury: "Pensée et communication",
  Venus: "Amour et valeurs",
  Mars: "Action et désir",
  Jupiter: "Expansion et confiance",
  Saturn: "Structure et apprentissage",
  Uranus: "Liberté et changement",
  Neptune: "Intuition et idéal",
  Pluto: "Transformation et puissance",
};

const PLANET_MEANING_KEYS: Record<
  string,
  string
> = {
  Sun: "identite_et_volonte",
  Moon: "emotions_et_besoins",
  Mercury: "pensee_et_communication",
  Venus: "amour_et_valeurs",
  Mars: "action_et_desir",
  Jupiter: "expansion_et_confiance",
  Saturn: "structure_et_apprentissage",
  Uranus: "liberte_et_changement",
  Neptune: "intuition_et_ideal",
  Pluto: "transformation_et_puissance",
};

/*
|--------------------------------------------------------------------------
| Textes astrologiques français
|--------------------------------------------------------------------------
|
| Conservés pour les anciens composants qui utilisent encore PLANET_TEXTS.
|
*/

export const PLANET_TEXTS: Record<
  string,
  Record<string, string>
> = {
  Sun: SUN,
  Moon: MOON,
  Mercury: MERCURY,
  Venus: VENUS,
  Mars: MARS,
  Jupiter: JUPITER,
  Saturn: SATURN,
  Uranus: URANUS,
  Neptune: NEPTUNE,
  Pluto: PLUTO,
};

export const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

/*
|--------------------------------------------------------------------------
| Éléments
|--------------------------------------------------------------------------
|
| On garde ces données pour ne pas casser PdfElements pendant la migration.
|
*/

export const ELEMENT_PROFILES: Record<
  string,
  {
    qualities: string[];
    challenges: string[];
    summary: string;
  }
> = {
  Feu: {
    qualities: [
      "Enthousiasme",
      "Courage",
      "Créativité",
    ],
    challenges: [
      "Impatience",
      "Impulsivité",
    ],
    summary:
      "Votre dominante de Feu vous pousse à agir avec passion, spontanéité et confiance. Vous avancez grâce à votre enthousiasme et à votre désir de créer.",
  },

  Terre: {
    qualities: [
      "Stabilité",
      "Réalisme",
      "Persévérance",
    ],
    challenges: [
      "Rigidité",
      "Besoin de contrôle",
    ],
    summary:
      "Votre dominante de Terre vous donne un grand sens pratique, de la constance et le désir de construire quelque chose de durable.",
  },

  Air: {
    qualities: [
      "Curiosité",
      "Communication",
      "Ouverture",
    ],
    challenges: [
      "Dispersion",
      "Détachement émotionnel",
    ],
    summary:
      "Votre dominante d’Air favorise la réflexion, les échanges et l’ouverture aux idées nouvelles. Vous avez besoin de comprendre et de communiquer.",
  },

  Eau: {
    qualities: [
      "Intuition",
      "Empathie",
      "Profondeur",
    ],
    challenges: [
      "Hypersensibilité",
      "Difficulté à lâcher prise",
    ],
    summary:
      "Votre dominante d’Eau vous rend particulièrement intuitive, réceptive et sensible aux ambiances. Vous comprenez souvent ce qui n’est pas exprimé.",
  },
};

/*
|--------------------------------------------------------------------------
| Modalités
|--------------------------------------------------------------------------
*/

export const MODALITY_PROFILES: Record<
  string,
  {
    quality: string;
    challenge: string;
    summary: string;
  }
> = {
  Cardinal: {
    quality: "Initiative",
    challenge:
      "Aller au bout de chaque projet",
    summary:
      "La modalité Cardinale vous pousse à entreprendre, à initier les changements et à ouvrir de nouvelles voies.",
  },

  Fixe: {
    quality: "Persévérance",
    challenge:
      "Accepter plus facilement le changement",
    summary:
      "La modalité Fixe vous apporte de la loyauté, de l’endurance et une remarquable capacité à maintenir vos efforts dans le temps.",
  },

  Mutable: {
    quality: "Adaptabilité",
    challenge:
      "Maintenir une direction stable",
    summary:
      "La modalité Mutable vous permet de vous adapter, d’évoluer et de comprendre rapidement les changements qui vous entourent.",
  },
};

/*
|--------------------------------------------------------------------------
| Localisation des noms
|--------------------------------------------------------------------------
*/

export function getLocalizedPlanetName(
  planet: string,
  locale: PdfLocale = "fr"
): string {
  return (
    PLANET_NAMES[locale]?.[
      planet
    ] ||
    PLANET_NAMES.fr[
      planet
    ] ||
    planet
  );
}

export function getLocalizedSignName(
  sign?: string,
  locale: PdfLocale = "fr"
): string {
  if (!sign) {
    return "—";
  }

  return (
    SIGN_NAMES[locale]?.[
      sign
    ] ||
    SIGN_NAMES.fr[
      sign
    ] ||
    sign
  );
}

export function getLocalizedPlanetMeaning(
  planet: string,
  locale: PdfLocale = "fr"
): string {
  const key =
    PLANET_MEANING_KEYS[
      planet
    ];

  if (!key) {
    return (
      PLANET_MEANINGS[
        planet
      ] || ""
    );
  }

  const dictionary =
    UTILS_BY_LOCALE[
      locale
    ];

  return (
    dictionary?.[key] ||
    UTILS_BY_LOCALE.fr[
      key
    ] ||
    PLANET_MEANINGS[
      planet
    ] ||
    ""
  );
}

/*
|--------------------------------------------------------------------------
| Anciennes fonctions
|--------------------------------------------------------------------------
*/

export function signFr(
  sign?: string
): string {
  return getLocalizedSignName(
    sign,
    "fr"
  );
}

export function translateSigns(
  value?: string
): string {
  if (!value) {
    return "—";
  }

  let translated =
    value;

  Object.keys(
    SIGN_FR
  ).forEach(
    (englishSign) => {
      translated =
        translated.replace(
          new RegExp(
            englishSign,
            "g"
          ),
          SIGN_FR[
            englishSign
          ]
        );
    }
  );

  return translated;
}

/*
|--------------------------------------------------------------------------
| Planètes
|--------------------------------------------------------------------------
*/

export function getPlanet(
  planets: any[],
  name: string
) {
  return planets.find(
    (planet) =>
      planet.name === name
  );
}

export function getPlanetSignName(
  planet: any
): string {
  if (!planet) {
    return "";
  }

  if (
    typeof planet.signName ===
    "string"
  ) {
    return planet.signName;
  }

  if (
    typeof planet.sign ===
    "string"
  ) {
    return planet.sign;
  }

  return "";
}

/*
|--------------------------------------------------------------------------
| Ascendant
|--------------------------------------------------------------------------
*/

export function getAscendantSign(
  angles: any
): string {
  const ascendant =
    angles?.ascendant ||
    angles?.Ascendant ||
    angles?.ASC ||
    null;

  if (!ascendant) {
    return "";
  }

  if (
    typeof ascendant.signName ===
    "string"
  ) {
    return ascendant.signName;
  }

  if (
    typeof ascendant.sign ===
    "string"
  ) {
    return ascendant.sign;
  }

  if (
    typeof ascendant.formatted ===
    "string"
  ) {
    const englishSign =
      Object.keys(
        SIGN_FR
      ).find(
        (sign) =>
          ascendant.formatted.includes(
            sign
          )
      );

    return (
      englishSign ||
      ascendant.formatted
    );
  }

  return "";
}

/*
|--------------------------------------------------------------------------
| Interprétation des planètes
|--------------------------------------------------------------------------
*/

export function getPlanetInterpretation(
  planetName: string,
  signName?: string,
  locale: PdfLocale = "fr"
): string {
  if (!signName) {
    return "";
  }

  const localized =
    getLocalizedPlanetInterpretation(
      planetName,
      signName,
      locale
    );

  if (localized) {
    return localized;
  }

  return (
    PLANET_TEXTS[
      planetName
    ]?.[
      signName
    ] || ""
  );
}

/*
|--------------------------------------------------------------------------
| PdfPlanet — traductions fixes
|--------------------------------------------------------------------------
*/

type PdfPlanetTranslations = {
  natalPlanet: string;
  subtitle: string;
  inNatalChart: string;
  astrologicalPosition: string;
  whatPositionTeaches: string;

  signInfluence: string;
  placedIn: string;
  signInfluenceText: string;

  energyToDevelop: string;
  energyToDevelopText: string;

  finalNote: string;

  inWord: string;

  questions: Record<
    string,
    string
  >;

  guidance: Record<
    string,
    string
  >;

  defaultQuestion: string;
  defaultGuidance: string;
};

export function getPdfPlanetTranslations(
  locale: PdfLocale = "fr"
): PdfPlanetTranslations {
  const t =
    PDF_PLANET_BY_LOCALE[
      locale
    ] ||
    PDF_PLANET_BY_LOCALE.fr;

  return {
    natalPlanet:
      t.planete_natale ||
      PDF_PLANET_BY_LOCALE.fr
        .planete_natale ||
      "",

    subtitle:
      t.une_dimension_essentielle_de_votre_personnalite_revelee_par ||
      PDF_PLANET_BY_LOCALE.fr
        .une_dimension_essentielle_de_votre_personnalite_revelee_par ||
      "",

    inNatalChart:
      t.dans_votre_theme_natal ||
      PDF_PLANET_BY_LOCALE.fr
        .dans_votre_theme_natal ||
      "",

    astrologicalPosition:
      t.position_astrologique ||
      PDF_PLANET_BY_LOCALE.fr
        .position_astrologique ||
      "",

    whatPositionTeaches:
      t.ce_que_cette_position_vous_enseigne ||
      PDF_PLANET_BY_LOCALE.fr
        .ce_que_cette_position_vous_enseigne ||
      "",

    signInfluence:
      t.l_influence_du_signe ||
      PDF_PLANET_BY_LOCALE.fr
        .l_influence_du_signe ||
      "",

    placedIn:
      t.place_en ||
      PDF_PLANET_BY_LOCALE.fr
        .place_en ||
      "",

    signInfluenceText:
      t.exprime_ses_fonctions_a_travers_les_qualites_les_besoins_et ||
      PDF_PLANET_BY_LOCALE.fr
        .exprime_ses_fonctions_a_travers_les_qualites_les_besoins_et ||
      "",

    energyToDevelop:
      t.une_energie_a_developper ||
      PDF_PLANET_BY_LOCALE.fr
        .une_energie_a_developper ||
      "",

    energyToDevelopText:
      t.cette_position_ne_vous_enferme_pas_elle_revele_une_tendance ||
      PDF_PLANET_BY_LOCALE.fr
        .cette_position_ne_vous_enferme_pas_elle_revele_une_tendance ||
      "",

    finalNote:
      t.cette_position_prend_tout_son_sens_lorsqu_elle_est_observee ||
      PDF_PLANET_BY_LOCALE.fr
        .cette_position_prend_tout_son_sens_lorsqu_elle_est_observee ||
      "",

    inWord:
      locale === "en"
        ? "in"
        : locale === "pt"
          ? "em"
          : locale === "de"
            ? "in"
            : locale === "it"
              ? "in"
              : "en",

    questions: {
      Sun:
        t.qu_est_ce_qui_vous_permet_de_rayonner_pleinement ||
        "",

      Moon:
        t.de_quoi_avez_vous_besoin_pour_vous_sentir_interieurement_en ||
        "",

      Mercury:
        t.comment_votre_esprit_comprend_il_et_transmet_il_les_idees ||
        "",

      Venus:
        t.qu_est_ce_qui_nourrit_votre_maniere_d_aimer_et_de_creer_du_l ||
        "",

      Mars:
        t.comment_votre_energie_se_mobilise_t_elle_lorsque_vous_passez ||
        "",

      Jupiter:
        t.ou_trouvez_vous_confiance_croissance_et_ouverture ||
        "",

      Saturn:
        t.quelles_experiences_vous_invitent_a_developper_votre_maturit ||
        "",

      Uranus:
        t.comment_exprimez_vous_votre_liberte_et_votre_originalite ||
        "",

      Neptune:
        t.comment_votre_intuition_et_votre_imaginaire_influencent_ils ||
        "",

      Pluto:
        t.quelles_transformations_revelent_votre_puissance_interieure ||
        "",
    },

    guidance: {
      Sun:
        t.votre_soleil_represente_le_centre_de_votre_identite_plus_vou ||
        "",

      Moon:
        t.votre_lune_decrit_votre_univers_emotionnel_comprendre_ses_be ||
        "",

      Mercury:
        t.mercure_decrit_votre_maniere_de_reflechir_d_apprendre_et_de ||
        "",

      Venus:
        t.venus_revele_votre_sensibilite_relationnelle_vos_valeurs_et ||
        "",

      Mars:
        t.mars_represente_votre_force_d_action_votre_courage_et_votre ||
        "",

      Jupiter:
        t.jupiter_montre_les_experiences_qui_favorisent_votre_confianc ||
        "",

      Saturn:
        t.saturne_revele_les_domaines_ou_la_patience_la_discipline_et ||
        "",

      Uranus:
        t.uranus_represente_votre_besoin_de_liberte_de_renouvellement ||
        "",

      Neptune:
        t.neptune_revele_votre_imagination_votre_intuition_et_votre_se ||
        "",

      Pluto:
        t.pluton_represente_votre_capacite_de_transformation_profonde ||
        "",
    },

    defaultQuestion: "",
    defaultGuidance: "",
  };
}

/*
|--------------------------------------------------------------------------
| Degrés
|--------------------------------------------------------------------------
*/

export function formatDegree(
  value: unknown
): string {
  const degree =
    Number(value);

  if (
    !Number.isFinite(
      degree
    )
  ) {
    return "";
  }

  const normalized =
    ((degree % 30) +
      30) %
    30;

  const wholeDegrees =
    Math.floor(
      normalized
    );

  const minutes =
    Math.round(
      (
        normalized -
        wholeDegrees
      ) * 60
    );

  if (
    minutes === 60
  ) {
    return `${
      wholeDegrees + 1
    }°00'`;
  }

  return `${wholeDegrees}°${String(
    minutes
  ).padStart(
    2,
    "0"
  )}'`;
}

export function getPlanetDegree(
  planet: any
): string {
  if (!planet) {
    return "";
  }

  const possibleValues = [
    planet.degreeInSign,
    planet.signDegree,
    planet.degree,
    planet.degrees,
    planet.positionInSign,
  ];

  for (
    const value of
    possibleValues
  ) {
    if (
      typeof value ===
      "number"
    ) {
      return formatDegree(
        value
      );
    }
  }

  if (
    typeof planet.formatted ===
    "string"
  ) {
    const match =
      planet.formatted.match(
        /(\d{1,2})[°\s]+(\d{1,2})?/
      );

    if (match) {
      const degrees =
        match[1];

      const minutes =
        match[2] ||
        "00";

      return `${degrees}°${minutes.padStart(
        2,
        "0"
      )}'`;
    }
  }

  return "";
}
