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
  SignaturePdfSummaryProps,
  SignaturePlanet,
  SignatureAngles,
} from "./SignaturePdfTypes";

import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

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

const SIGN_NAMES_FR: Record<string, string> = {
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

const SIGNS_BY_LONGITUDE = [
  "Bélier",
  "Taureau",
  "Gémeaux",
  "Cancer",
  "Lion",
  "Vierge",
  "Balance",
  "Scorpion",
  "Sagittaire",
  "Capricorne",
  "Verseau",
  "Poissons",
];

function translateSign(
  value: unknown
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    return "Non précisé";
  }

  const cleanValue = value.trim();

  return (
    SIGN_NAMES_FR[cleanValue] ||
    cleanValue
  );
}

function getSignFromLongitude(
  value: number
): string {
  if (!Number.isFinite(value)) {
    return "Non précisé";
  }

  const normalized =
    ((value % 360) + 360) % 360;

  const index =
    Math.floor(normalized / 30);

  return (
    SIGNS_BY_LONGITUDE[index] ||
    "Non précisé"
  );
}

function getPlanet(
  planets: SignaturePlanet[],
  planetName: string
): SignaturePlanet | null {
  return (
    planets.find((planet) => {
      return (
        typeof planet?.name === "string" &&
        planet.name.toLowerCase() ===
          planetName.toLowerCase()
      );
    }) || null
  );
}

function getPlanetSign(
  planet: SignaturePlanet | null
): string {
  if (!planet) {
    return "Non précisé";
  }

  return translateSign(
    planet.sign
  );
}

function asRecord(
  value: unknown
): Record<string, unknown> | null {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return null;
  }

  return value as Record<
    string,
    unknown
  >;
}

function extractSignFromValue(
  value: unknown
): string {
  if (
    typeof value === "number" &&
    Number.isFinite(value)
  ) {
    return getSignFromLongitude(
      value
    );
  }

  if (typeof value === "string") {
    const numericValue =
      Number(value);

    if (
      value.trim().length > 0 &&
      Number.isFinite(numericValue)
    ) {
      return getSignFromLongitude(
        numericValue
      );
    }

    return translateSign(value);
  }

  const record = asRecord(value);

  if (!record) {
    return "Non précisé";
  }

  const signKeys = [
    "sign",
    "signName",
    "zodiacSign",
    "name",
  ];

  for (const key of signKeys) {
    const possibleValue =
      record[key];

    if (
      typeof possibleValue === "string" &&
      possibleValue.trim().length > 0
    ) {
      return translateSign(
        possibleValue
      );
    }
  }

  const longitudeKeys = [
    "longitude",
    "degree",
    "degrees",
    "value",
  ];

  for (const key of longitudeKeys) {
    const possibleValue =
      record[key];

    if (
      typeof possibleValue === "number" &&
      Number.isFinite(possibleValue)
    ) {
      return getSignFromLongitude(
        possibleValue
      );
    }

    if (
      typeof possibleValue === "string"
    ) {
      const numericValue =
        Number(possibleValue);

      if (
        possibleValue.trim().length > 0 &&
        Number.isFinite(numericValue)
      ) {
        return getSignFromLongitude(
          numericValue
        );
      }
    }
  }

  return "Non précisé";
}

function getAscendantSign(
  angles: SignatureAngles
): string {
  const record = asRecord(angles);

  if (!record) {
    return "Non précisé";
  }

  const directSignKeys = [
    "ascendantSign",
    "ascendant_sign",
    "risingSign",
    "rising_sign",
  ];

  for (const key of directSignKeys) {
    const value = record[key];

    if (
      typeof value === "string" &&
      value.trim().length > 0
    ) {
      return translateSign(
        value
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

  for (const key of ascendantKeys) {
    const translated =
      extractSignFromValue(
        record[key]
      );

    if (
      translated !== "Non précisé"
    ) {
      return translated;
    }
  }

  return "Non précisé";
}

export default function PdfSignatureSummary({
  planets,
  angles,
}: SignaturePdfSummaryProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const safeAngles =
    angles &&
    typeof angles === "object" &&
    !Array.isArray(angles)
      ? angles
      : {};

  const sun = getPlanet(
    safePlanets,
    "Sun"
  );

  const moon = getPlanet(
    safePlanets,
    "Moon"
  );

  const sunSign =
    getPlanetSign(sun);

  const moonSign =
    getPlanetSign(moon);

  const ascendantSign =
    getAscendantSign(
      safeAngles
    );

  const sunIcon =
    PLANET_ICONS.Sun;

  const moonIcon =
    PLANET_ICONS.Moon;

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <View
          style={styles.premiumBadge}
        >
          <Text
            style={
              styles.premiumBadgeText
            }
          >
            Synthèse Premium
          </Text>
        </View>

        <Text style={styles.kicker}>
          Portrait astrologique
        </Text>

        <Text style={styles.title}>
          Vos trois grands piliers
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

          <Image
            src={sunIcon}
            style={styles.dividerIcon}
          />

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text style={styles.lead}>
          Le Soleil, la Lune et l’Ascendant forment le noyau
          central de votre personnalité. Leur interaction révèle
          votre identité consciente, vos besoins émotionnels et
          votre manière spontanée d’entrer en relation avec le
          monde.
        </Text>
      </View>

      <View style={styles.cardsRow}>
        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View
            style={styles.cardAccent}
          />

          <View
            style={styles.iconCircle}
          >
            <Image
              src={sunIcon}
              style={styles.icon}
            />
          </View>

          <Text
            style={styles.cardLabel}
          >
            Votre Soleil
          </Text>

          <Text
            style={styles.cardValue}
          >
            {sunSign}
          </Text>

          <View
            style={styles.cardDivider}
          />

          <Text
            style={styles.cardMeaning}
          >
            Votre identité profonde
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            Le Soleil représente votre centre, votre volonté,
            votre direction intérieure et les qualités que vous
            cherchez progressivement à exprimer avec davantage
            de confiance.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            styles.cardSpacing,
          ]}
        >
          <View
            style={styles.cardAccent}
          />

          <View
            style={styles.iconCircle}
          >
            <Image
              src={moonIcon}
              style={styles.icon}
            />
          </View>

          <Text
            style={styles.cardLabel}
          >
            Votre Lune
          </Text>

          <Text
            style={styles.cardValue}
          >
            {moonSign}
          </Text>

          <View
            style={styles.cardDivider}
          />

          <Text
            style={styles.cardMeaning}
          >
            Votre monde émotionnel
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            La Lune révèle votre sensibilité, vos réactions
            instinctives, vos besoins affectifs et les conditions
            qui vous permettent de retrouver un sentiment de
            sécurité intérieure.
          </Text>
        </View>

        <View style={styles.card}>
          <View
            style={styles.cardAccent}
          />

          <View
            style={styles.iconCircle}
          >
            <Image
              src={ASCENDANT_ICON}
              style={styles.icon}
            />
          </View>

          <Text
            style={styles.cardLabel}
          >
            Votre Ascendant
          </Text>

          <Text
            style={styles.cardValue}
          >
            {ascendantSign}
          </Text>

          <View
            style={styles.cardDivider}
          />

          <Text
            style={styles.cardMeaning}
          >
            Votre présence spontanée
          </Text>

          <Text
            style={
              styles.cardDescription
            }
          >
            L’Ascendant décrit votre première impulsion face à
            l’existence, votre manière de commencer les choses
            et l’énergie que les autres perçoivent souvent dès
            les premiers contacts.
          </Text>
        </View>
      </View>

      <View style={styles.synthesis}>
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
            src={ASCENDANT_ICON}
            style={
              styles.synthesisIcon
            }
          />
        </View>

        <Image
          src={ASCENDANT_ICON}
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
            La rencontre de vos trois énergies
          </Text>

          <Text
            style={
              styles.synthesisTitle
            }
          >
            Soleil en {sunSign}, Lune en {moonSign} et
            Ascendant {ascendantSign}
          </Text>

          <Text
            style={styles.synthesisText}
          >
            Votre Soleil représente la personne que vous cherchez
            consciemment à devenir. Votre Lune révèle ce dont
            vous avez besoin pour vous sentir émotionnellement
            nourri et protégé. Votre Ascendant décrit votre façon
            instinctive d’aborder la vie et d’ouvrir chaque
            nouvelle expérience.
          </Text>

          <Text
            style={
              styles.synthesisTextLast
            }
          >
            L’équilibre entre ces trois dimensions constitue la
            signature centrale de votre personnalité. Certaines
            énergies peuvent se soutenir naturellement, tandis
            que d’autres expriment des besoins différents. Ces
            contrastes ne sont pas des défauts : ils révèlent la
            richesse, la profondeur et le potentiel d’évolution
            de votre thème natal.
          </Text>
        </View>
      </View>

      <View style={styles.insightRow}>
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
            style={styles.insightHeader}
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
              Votre direction intérieure
            </Text>
          </View>

          <Text
            style={styles.insightText}
          >
            Votre Soleil indique les qualités que vous êtes
            appelé à développer et à assumer. Plus vous exprimez
            cette énergie consciemment, plus vous pouvez avancer
            avec cohérence, confiance et sentiment de direction.
          </Text>
        </View>

        <View
          style={styles.insightBox}
        >
          <View
            style={
              styles.insightAccent
            }
          />

          <View
            style={styles.insightHeader}
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
              Votre clé d’équilibre
            </Text>
          </View>

          <Text
            style={styles.insightText}
          >
            Reconnaître vos besoins lunaires permet à votre
            Ascendant de s’exprimer avec plus de justesse. Lorsque
            votre sécurité intérieure soutient votre identité,
            votre présence devient plus naturelle et authentique.
          </Text>
        </View>
      </View>

      <View style={styles.note}>
        <View
          style={styles.noteAccent}
        />

        <Image
          src={moonIcon}
          style={styles.noteIcon}
        />

        <Text style={styles.noteText}>
          Les prochaines pages approfondissent vos dix principales
          planètes. Le rapport Premium analysera ensuite les maisons,
          les aspects et les grandes dominantes qui rendent votre
          carte du ciel entièrement unique.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
