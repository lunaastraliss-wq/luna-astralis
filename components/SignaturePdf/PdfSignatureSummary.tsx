import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./SignaturePdfAssets";

import { pdfStyles } from "./SignaturePdfStyles";

import type {
  SignatureAngles,
  SignatureLocale,
  SignaturePdfSummaryProps,
  SignaturePlanet,
} from "./SignaturePdfTypes";

import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

import frSummary from "../../i18n/migrated/fr/components/signaturepdf/pdfsignaturesummary.json";
import enSummary from "../../i18n/migrated/en/components/signaturepdf/pdfsignaturesummary.json";
import esSummary from "../../i18n/migrated/es/components/signaturepdf/pdfsignaturesummary.json";
import deSummary from "../../i18n/migrated/de/components/signaturepdf/pdfsignaturesummary.json";
import itSummary from "../../i18n/migrated/it/components/signaturepdf/pdfsignaturesummary.json";
import ptSummary from "../../i18n/migrated/pt/components/signaturepdf/pdfsignaturesummary.json";

const GOLD = "#f4c95d";
const SOFT_GOLD = "#8f793c";

const CREAM = "#fff8e7";
const MUTED = "#bfc5d5";
const LIGHT_TEXT = "#d8d4ca";

const CARD_BACKGROUND = "#111a34";
const DARK_BACKGROUND = "#0b1124";
const SECONDARY_BACKGROUND = "#0d152d";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 17,
  },

  premiumBadge: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,
    marginBottom: 8,
    backgroundColor: DARK_BACKGROUND,
    borderWidth: 0.7,
    borderColor: GOLD,
  },

  premiumBadgeText: {
    color: GOLD,
    fontSize: 6.6,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    textAlign: "center",
  },

  kicker: {
    color: GOLD,
    fontSize: 8.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  title: {
    color: CREAM,
    fontSize: 25,
    lineHeight: 1.15,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 9,
  },

  dividerLine: {
    width: 50,
    height: 1,
    backgroundColor: SOFT_GOLD,
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  lead: {
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9.4,
    lineHeight: 1.45,
    textAlign: "center",
  },

  cardsRow: {
    flexDirection: "row",
    marginBottom: 13,
  },

  card: {
    position: "relative",
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 172,
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardSpacing: {
    marginRight: 8,
  },

  cardAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 48,
    height: 2,
    backgroundColor: GOLD,
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: DARK_BACKGROUND,
    borderWidth: 1,
    borderColor: SOFT_GOLD,
  },

  icon: {
    width: 29,
    height: 29,
    objectFit: "contain",
  },

  cardLabel: {
    color: "#9da4b7",
    fontSize: 7.7,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
    textAlign: "center",
  },

  cardValue: {
    color: GOLD,
    fontSize: 15,
    lineHeight: 1.2,
    marginBottom: 8,
    textAlign: "center",
  },

  cardDivider: {
    width: 32,
    height: 1,
    backgroundColor: SOFT_GOLD,
    marginBottom: 8,
  },

  cardMeaning: {
    color: CREAM,
    fontSize: 9.5,
    lineHeight: 1.3,
    marginBottom: 6,
    textAlign: "center",
  },

  cardDescription: {
    color: MUTED,
    fontSize: 8.1,
    lineHeight: 1.4,
    textAlign: "center",
  },

  synthesis: {
    position: "relative",
    flexDirection: "row",
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 17,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: SOFT_GOLD,
  },

  synthesisAccentTop: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 100,
    height: 2,
    backgroundColor: GOLD,
  },

  synthesisAccentBottom: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 72,
    height: 2,
    backgroundColor: GOLD,
  },

  synthesisIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: DARK_BACKGROUND,
    borderWidth: 1,
    borderColor: GOLD,
  },

  synthesisIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
  },

  synthesisWatermark: {
    position: "absolute",
    right: 12,
    top: 7,
    width: 82,
    height: 82,
    objectFit: "contain",
    opacity: 0.035,
  },

  synthesisContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  synthesisKicker: {
    color: GOLD,
    fontSize: 7.8,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  synthesisTitle: {
    color: CREAM,
    fontSize: 13,
    lineHeight: 1.3,
    marginBottom: 8,
  },

  synthesisText: {
    color: LIGHT_TEXT,
    fontSize: 8.8,
    lineHeight: 1.48,
    marginBottom: 7,
  },

  synthesisTextLast: {
    color: MUTED,
    fontSize: 8.8,
    lineHeight: 1.48,
  },

  insightRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  insightBox: {
    position: "relative",
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 84,
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 13,
    backgroundColor: SECONDARY_BACKGROUND,
    borderWidth: 1,
    borderColor: "#39415d",
  },

  insightBoxLeft: {
    marginRight: 8,
  },

  insightAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 42,
    height: 1.5,
    backgroundColor: GOLD,
  },

  insightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  insightIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 8,
  },

  insightTitle: {
    flexGrow: 1,
    flexBasis: 0,
    color: GOLD,
    fontSize: 8.3,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  insightText: {
    color: MUTED,
    fontSize: 8.2,
    lineHeight: 1.42,
  },

  note: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 13,
    marginBottom: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: SOFT_GOLD,
  },

  noteAccent: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 64,
    height: 1.5,
    backgroundColor: GOLD,
  },

  noteIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 10,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: MUTED,
    fontSize: 7.9,
    lineHeight: 1.32,
  },
});

/*
|--------------------------------------------------------------------------
| Dictionnaires Summary
|--------------------------------------------------------------------------
*/

type SummaryDictionary =
  Record<string, string>;

const SUMMARY_DICTIONARIES:
Record<
  SignatureLocale,
  SummaryDictionary
> = {
  fr: frSummary,
  en: enSummary,
  es: esSummary,
  de: deSummary,
  it: itSummary,
  pt: ptSummary,
};

function getDictionary(
  locale: SignatureLocale
): SummaryDictionary {
  return (
    SUMMARY_DICTIONARIES[
      locale
    ] ||
    SUMMARY_DICTIONARIES.fr
  );
}

function text(
  dictionary: SummaryDictionary,
  key: string,
  fallback = ""
): string {
  const value =
    dictionary[key];

  return (
    typeof value === "string" &&
    value.trim().length > 0
      ? value
      : fallback
  );
}

/*
|--------------------------------------------------------------------------
| Signes astrologiques
|--------------------------------------------------------------------------
*/

type SignKey =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

const SIGNS_BY_LONGITUDE:
SignKey[] = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

const SIGN_ALIASES:
Record<string, SignKey> = {
  aries: "aries",
  bélier: "aries",
  belier: "aries",

  taurus: "taurus",
  taureau: "taurus",

  gemini: "gemini",
  gémeaux: "gemini",
  gemeaux: "gemini",

  cancer: "cancer",

  leo: "leo",
  lion: "leo",

  virgo: "virgo",
  vierge: "virgo",

  libra: "libra",
  balance: "libra",

  scorpio: "scorpio",
  scorpion: "scorpio",

  sagittarius:
    "sagittarius",
  sagittaire:
    "sagittarius",

  capricorn:
    "capricorn",
  capricorne:
    "capricorn",

  aquarius:
    "aquarius",
  verseau:
    "aquarius",

  pisces:
    "pisces",
  poissons:
    "pisces",
};

const LOCALIZED_SIGNS:
Record<
  SignatureLocale,
  Record<SignKey, string>
> = {
  fr: {
    aries: "Bélier",
    taurus: "Taureau",
    gemini: "Gémeaux",
    cancer: "Cancer",
    leo: "Lion",
    virgo: "Vierge",
    libra: "Balance",
    scorpio: "Scorpion",
    sagittarius:
      "Sagittaire",
    capricorn:
      "Capricorne",
    aquarius:
      "Verseau",
    pisces:
      "Poissons",
  },

  en: {
    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius:
      "Sagittarius",
    capricorn:
      "Capricorn",
    aquarius:
      "Aquarius",
    pisces:
      "Pisces",
  },

  es: {
    aries: "Aries",
    taurus: "Tauro",
    gemini: "Géminis",
    cancer: "Cáncer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Escorpio",
    sagittarius:
      "Sagitario",
    capricorn:
      "Capricornio",
    aquarius:
      "Acuario",
    pisces:
      "Piscis",
  },

  de: {
    aries: "Widder",
    taurus: "Stier",
    gemini:
      "Zwillinge",
    cancer: "Krebs",
    leo: "Löwe",
    virgo:
      "Jungfrau",
    libra: "Waage",
    scorpio:
      "Skorpion",
    sagittarius:
      "Schütze",
    capricorn:
      "Steinbock",
    aquarius:
      "Wassermann",
    pisces:
      "Fische",
  },

  it: {
    aries: "Ariete",
    taurus: "Toro",
    gemini: "Gemelli",
    cancer: "Cancro",
    leo: "Leone",
    virgo: "Vergine",
    libra: "Bilancia",
    scorpio:
      "Scorpione",
    sagittarius:
      "Sagittario",
    capricorn:
      "Capricorno",
    aquarius:
      "Acquario",
    pisces:
      "Pesci",
  },

  pt: {
    aries: "Áries",
    taurus: "Touro",
    gemini: "Gêmeos",
    cancer: "Câncer",
    leo: "Leão",
    virgo: "Virgem",
    libra: "Libra",
    scorpio:
      "Escorpião",
    sagittarius:
      "Sagitário",
    capricorn:
      "Capricórnio",
    aquarius:
      "Aquário",
    pisces:
      "Peixes",
  },
};

const MISSING_VALUE:
Record<
  SignatureLocale,
  string
> = {
  fr: "Non précisé",
  en: "Not specified",
  es: "No especificado",
  de: "Nicht angegeben",
  it: "Non specificato",
  pt: "Não especificado",
};

function getCanonicalSign(
  value: unknown
): SignKey | null {
  if (
    typeof value !== "string"
  ) {
    return null;
  }

  const cleanValue =
    value
      .trim()
      .toLowerCase();

  if (
    cleanValue.length === 0
  ) {
    return null;
  }

  return (
    SIGN_ALIASES[
      cleanValue
    ] || null
  );
}

function getLocalizedSign(
  value: unknown,
  locale: SignatureLocale
): string {
  const sign =
    getCanonicalSign(
      value
    );

  if (!sign) {
    return MISSING_VALUE[
      locale
    ];
  }

  return (
    LOCALIZED_SIGNS[
      locale
    ][sign]
  );
}

function getSignFromLongitude(
  value: number,
  locale: SignatureLocale
): string {
  if (
    !Number.isFinite(
      value
    )
  ) {
    return MISSING_VALUE[
      locale
    ];
  }

  const normalized =
    ((value % 360) +
      360) %
    360;

  const index =
    Math.floor(
      normalized / 30
    );

  const sign =
    SIGNS_BY_LONGITUDE[
      index
    ];

  if (!sign) {
    return MISSING_VALUE[
      locale
    ];
  }

  return (
    LOCALIZED_SIGNS[
      locale
    ][sign]
  );
}

/*
|--------------------------------------------------------------------------
| Planètes
|--------------------------------------------------------------------------
*/

function getPlanet(
  planets:
    SignaturePlanet[],
  planetName: string
): SignaturePlanet | null {
  return (
    planets.find(
      (planet) =>
        typeof planet?.name ===
          "string" &&
        planet.name.toLowerCase() ===
          planetName.toLowerCase()
    ) || null
  );
}

function getPlanetSign(
  planet:
    | SignaturePlanet
    | null,
  locale: SignatureLocale
): string {
  if (!planet) {
    return MISSING_VALUE[
      locale
    ];
  }

  if (
    typeof planet.sign ===
      "string" &&
    planet.sign
      .trim()
      .length >
      0
  ) {
    return getLocalizedSign(
      planet.sign,
      locale
    );
  }

  if (
    typeof planet.longitude ===
      "number" &&
    Number.isFinite(
      planet.longitude
    )
  ) {
    return getSignFromLongitude(
      planet.longitude,
      locale
    );
  }

  return MISSING_VALUE[
    locale
  ];
}

/*
|--------------------------------------------------------------------------
| Ascendant
|--------------------------------------------------------------------------
*/

function asRecord(
  value: unknown
): Record<
  string,
  unknown
> | null {
  if (
    !value ||
    typeof value !==
      "object" ||
    Array.isArray(
      value
    )
  ) {
    return null;
  }

  return value as Record<
    string,
    unknown
  >;
}

function extractSignFromValue(
  value: unknown,
  locale: SignatureLocale
): string {
  if (
    typeof value ===
      "number" &&
    Number.isFinite(
      value
    )
  ) {
    return getSignFromLongitude(
      value,
      locale
    );
  }

  if (
    typeof value ===
    "string"
  ) {
    const cleanValue =
      value.trim();

    if (
      cleanValue.length ===
      0
    ) {
      return MISSING_VALUE[
        locale
      ];
    }

    const numericValue =
      Number(
        cleanValue
      );

    if (
      Number.isFinite(
        numericValue
      )
    ) {
      return getSignFromLongitude(
        numericValue,
        locale
      );
    }

    return getLocalizedSign(
      cleanValue,
      locale
    );
  }

  const record =
    asRecord(
      value
    );

  if (!record) {
    return MISSING_VALUE[
      locale
    ];
  }

  const signKeys = [
    "sign",
    "signName",
    "zodiacSign",
    "name",
  ];

  for (
    const key of signKeys
  ) {
    const possibleValue =
      record[key];

    if (
      typeof possibleValue ===
        "string" &&
      possibleValue
        .trim()
        .length >
        0
    ) {
      return getLocalizedSign(
        possibleValue,
        locale
      );
    }
  }

  const longitudeKeys = [
    "longitude",
    "degree",
    "degrees",
    "value",
  ];

  for (
    const key of
    longitudeKeys
  ) {
    const possibleValue =
      record[key];

    if (
      typeof possibleValue ===
        "number" &&
      Number.isFinite(
        possibleValue
      )
    ) {
      return getSignFromLongitude(
        possibleValue,
        locale
      );
    }

    if (
      typeof possibleValue ===
      "string"
    ) {
      const cleanValue =
        possibleValue.trim();

      const numericValue =
        Number(
          cleanValue
        );

      if (
        cleanValue.length >
          0 &&
        Number.isFinite(
          numericValue
        )
      ) {
        return getSignFromLongitude(
          numericValue,
          locale
        );
      }
    }
  }

  return MISSING_VALUE[
    locale
  ];
}

function getAscendantSign(
  angles:
    SignatureAngles,
  locale: SignatureLocale
): string {
  const record =
    asRecord(
      angles
    );

  if (!record) {
    return MISSING_VALUE[
      locale
    ];
  }

  const directSignKeys = [
    "ascendantSign",
    "ascendant_sign",
    "risingSign",
    "rising_sign",
  ];

  for (
    const key of
    directSignKeys
  ) {
    const value =
      record[key];

    if (
      typeof value ===
        "string" &&
      value
        .trim()
        .length >
        0
    ) {
      return getLocalizedSign(
        value,
        locale
      );
    }
  }

  const ascendantKeys = [
    "ascendant",
    "Ascendant",
    "ASC",
    "asc",
    "rising",
  ];

  for (
    const key of
    ascendantKeys
  ) {
    const sign =
      extractSignFromValue(
        record[key],
        locale
      );

    if (
      sign !==
      MISSING_VALUE[
        locale
      ]
    ) {
      return sign;
    }
  }

  return MISSING_VALUE[
    locale
  ];
}

/*
|--------------------------------------------------------------------------
| Page Summary
|--------------------------------------------------------------------------
*/

export default function PdfSignatureSummary({
  planets,
  angles,
  locale = "fr",
}: SignaturePdfSummaryProps) {
  const t =
    getDictionary(
      locale
    );

  const safePlanets =
    Array.isArray(
      planets
    )
      ? planets
      : [];

  const safeAngles:
    SignatureAngles =
    angles &&
    typeof angles ===
      "object" &&
    !Array.isArray(
      angles
    )
      ? angles
      : {};

  const sun =
    getPlanet(
      safePlanets,
      "Sun"
    );

  const moon =
    getPlanet(
      safePlanets,
      "Moon"
    );

  const sunSign =
    getPlanetSign(
      sun,
      locale
    );

  const moonSign =
    getPlanetSign(
      moon,
      locale
    );

  const ascendantSign =
    getAscendantSign(
      safeAngles,
      locale
    );

  const sunIcon =
    PLANET_ICONS.Sun;

  const moonIcon =
    PLANET_ICONS.Moon;

  const synthesisTitle =
    `${text(
      t,
      "soleil_en",
      "Soleil en"
    )} ${sunSign}${text(
      t,
      "lune_en",
      ", Lune en"
    )} ${moonSign} ${text(
      t,
      "et_ascendant",
      "et Ascendant"
    )} ${ascendantSign}`;

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <View
          style={
            styles.premiumBadge
          }
        >
          <Text
            style={
              styles.premiumBadgeText
            }
          >
            {text(
              t,
              "synthese_premium",
              "Synthèse Premium"
            )}
          </Text>
        </View>

        <Text
          style={
            styles.kicker
          }
        >
          {text(
            t,
            "portrait_astrologique",
            "Portrait astrologique"
          )}
        </Text>

        <Text
          style={
            styles.title
          }
        >
          {text(
            t,
            "vos_trois_grands_piliers",
            "Vos trois grands piliers"
          )}
        </Text>

        <View
          style={
            styles.divider
          }
        >
          <View
            style={
              styles.dividerLine
            }
          />

          <Image
            src={sunIcon}
            style={
              styles.dividerIcon
            }
          />

          <View
            style={
              styles.dividerLine
            }
          />
        </View>

        <Text
          style={
            styles.lead
          }
        >
          {text(
            t,
            "le_soleil_la_lune_et_l_ascendant_forment_le_noyau_central_de"
          )}
        </Text>
      </View>

      <View
        style={
          styles.cardsRow
        }
      >
        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View
            style={
              styles.cardAccent
            }
          />

          <View
            style={
              styles.iconCircle
            }
          >
            <Image
              src={sunIcon}
              style={
                styles.icon
              }
            />
          </View>

          <Text
            style={
              styles.cardLabel
            }
          >
            {text(
              t,
              "votre_soleil",
              "Votre Soleil"
            )}
          </Text>

          <Text
            style={
              styles.cardValue
            }
          >
            {sunSign}
          </Text>

          <View
            style={
              styles.cardDivider
            }
          />

          <Text
            style={
              styles.cardMeaning
            }
          >
            {text(
              t,
              "votre_identite_profonde",
              "Votre identité profonde"
            )}
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            {text(
              t,
              "le_soleil_represente_votre_centre_votre_volonte_votre_direct"
            )}
          </Text>
        </View>

        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View
            style={
              styles.cardAccent
            }
          />

          <View
            style={
              styles.iconCircle
            }
          >
            <Image
              src={moonIcon}
              style={
                styles.icon
              }
            />
          </View>

          <Text
            style={
              styles.cardLabel
            }
          >
            {text(
              t,
              "votre_lune",
              "Votre Lune"
            )}
          </Text>

          <Text
            style={
              styles.cardValue
            }
          >
            {moonSign}
          </Text>

          <View
            style={
              styles.cardDivider
            }
          />

          <Text
            style={
              styles.cardMeaning
            }
          >
            {text(
              t,
              "votre_monde_emotionnel",
              "Votre monde émotionnel"
            )}
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            {text(
              t,
              "la_lune_revele_votre_sensibilite_vos_reactions_instinctives"
            )}
          </Text>
        </View>

        <View
          style={
            styles.card
          }
        >
          <View
            style={
              styles.cardAccent
            }
          />

          <View
            style={
              styles.iconCircle
            }
          >
            <Image
              src={
                ASCENDANT_ICON
              }
              style={
                styles.icon
              }
            />
          </View>

          <Text
            style={
              styles.cardLabel
            }
          >
            {text(
              t,
              "votre_ascendant",
              "Votre Ascendant"
            )}
          </Text>

          <Text
            style={
              styles.cardValue
            }
          >
            {ascendantSign}
          </Text>

          <View
            style={
              styles.cardDivider
            }
          />

          <Text
            style={
              styles.cardMeaning
            }
          >
            {text(
              t,
              "votre_presence_spontanee",
              "Votre présence spontanée"
            )}
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            {text(
              t,
              "l_ascendant_decrit_votre_premiere_impulsion_face_a_l_existen"
            )}
          </Text>
        </View>
      </View>

      <View
        style={
          styles.synthesis
        }
      >
        <View
          style={
            styles.synthesisAccentTop
          }
        />

        <View
          style={
            styles.synthesisAccentBottom
          }
        />

        <View
          style={
            styles.synthesisIconCircle
          }
        >
          <Image
            src={
              ASCENDANT_ICON
            }
            style={
              styles.synthesisIcon
            }
          />
        </View>

        <Image
          src={
            ASCENDANT_ICON
          }
          style={
            styles.synthesisWatermark
          }
        />

        <View
          style={
            styles.synthesisContent
          }
        >
          <Text
            style={
              styles.synthesisKicker
            }
          >
            {text(
              t,
              "la_rencontre_de_vos_trois_energies",
              "La rencontre de vos trois énergies"
            )}
          </Text>

          <Text
            style={
              styles.synthesisTitle
            }
          >
            {synthesisTitle}
          </Text>

          <Text
            style={
              styles.synthesisText
            }
          >
            {text(
              t,
              "votre_soleil_represente_la_personne_que_vous_cherchez_consci"
            )}
          </Text>

          <Text
            style={
              styles.synthesisTextLast
            }
          >
            {text(
              t,
              "l_equilibre_entre_ces_trois_dimensions_constitue_la_signatur"
            )}
          </Text>
        </View>
      </View>

      <View
        style={
          styles.insightRow
        }
      >
        <View
          style={[
            styles.insightBox,
            styles.insightBoxLeft,
          ]}
        >
          <View
            style={
              styles.insightAccent
            }
          />

          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={sunIcon}
              style={
                styles.insightIcon
              }
            />

            <Text
              style={
                styles.insightTitle
              }
            >
              {text(
                t,
                "votre_direction_interieure",
                "Votre direction intérieure"
              )}
            </Text>
          </View>

          <Text
            style={
              styles.insightText
            }
          >
            {text(
              t,
              "votre_soleil_indique_les_qualites_que_vous_etes_appele_a_dev"
            )}
          </Text>
        </View>

        <View
          style={
            styles.insightBox
          }
        >
          <View
            style={
              styles.insightAccent
            }
          />

          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={moonIcon}
              style={
                styles.insightIcon
              }
            />

            <Text
              style={
                styles.insightTitle
              }
            >
              {text(
                t,
                "votre_cle_d_equilibre",
                "Votre clé d’équilibre"
              )}
            </Text>
          </View>

          <Text
            style={
              styles.insightText
            }
          >
            {text(
              t,
              "reconnaitre_vos_besoins_lunaires_permet_a_votre_ascendant_de"
            )}
          </Text>
        </View>
      </View>

      <View
        style={
          styles.note
        }
      >
        <View
          style={
            styles.noteAccent
          }
        />

        <Image
          src={moonIcon}
          style={
            styles.noteIcon
          }
        />

        <Text
          style={
            styles.noteText
          }
        >
          {text(
            t,
            "les_prochaines_pages_approfondissent_vos_dix_principales_pla"
          )}
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
