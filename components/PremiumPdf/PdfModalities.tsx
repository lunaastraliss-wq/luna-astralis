import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  MODALITY_TEXT,
  SIGN_MODALITY,
} from "@/lib/astrology";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./PremiumPdfAssets";

import { pdfStyles } from "./PremiumPdfStyles";

import type {
  PremiumPdfPlanetsProps,
  PremiumPlanet,
} from "./PremiumPdfTypes";

import { MAIN_PLANETS } from "./PremiumPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const MODALITIES = [
  "Cardinal",
  "Fixe",
  "Mutable",
] as const;

type ModalityName =
  (typeof MODALITIES)[number];

const MODALITY_WORDS: Record<
  ModalityName,
  string
> = {
  Cardinal:
    "Initiative • Impulsion • Leadership",

  Fixe:
    "Persévérance • Stabilité • Détermination",

  Mutable:
    "Adaptation • Évolution • Souplesse",
};

const MODALITY_DESCRIPTIONS: Record<
  ModalityName,
  string
> = {
  Cardinal:
    "La modalité cardinale représente l’élan du commencement, la capacité à prendre les devants et le besoin de créer du mouvement.",

  Fixe:
    "La modalité fixe représente la continuité, la concentration, la fidélité à une direction et la capacité à préserver vos efforts.",

  Mutable:
    "La modalité mutable représente l’adaptation, la transition, l’apprentissage et la capacité à modifier votre approche selon les circonstances.",
};

const MODALITY_INSIGHTS: Record<
  ModalityName,
  {
    strength: string;
    balance: string;
    premium: string;
  }
> = {
  Cardinal: {
    strength:
      "Votre force réside dans votre capacité à démarrer, à prendre les devants et à insuffler un nouvel élan. Vous avancez plus facilement lorsqu’un objectif vous stimule.",

    balance:
      "Accordez davantage d’attention à la continuité. Commencer est une force, mais consolider vos efforts vous permet de transformer votre impulsion en réussite durable.",

    premium:
      "Une dominante cardinale indique un tempérament naturellement tourné vers l’action et le renouvellement. Vous avez souvent besoin de sentir qu’un projet avance. Votre défi consiste à maintenir votre engagement une fois l’enthousiasme du départ passé.",
  },

  Fixe: {
    strength:
      "Votre force réside dans votre persévérance, votre fidélité et votre capacité à maintenir le cap malgré les obstacles. Vous construisez avec constance.",

    balance:
      "Laissez une place au changement et à l’imprévu. Votre stabilité devient encore plus puissante lorsqu’elle s’accompagne de souplesse.",

    premium:
      "Une dominante fixe renforce votre endurance, votre capacité de concentration et votre besoin de préserver ce qui possède de la valeur. Votre défi consiste à reconnaître le moment où la persévérance devient résistance au changement.",
  },

  Mutable: {
    strength:
      "Votre force réside dans votre adaptabilité, votre intelligence du mouvement et votre capacité à évoluer lorsque les circonstances changent.",

    balance:
      "Veillez à ne pas disperser votre énergie. Choisir une direction claire vous aide à transformer votre souplesse en progression concrète.",

    premium:
      "Une dominante mutable vous permet de comprendre rapidement les changements et d’ajuster votre comportement avec souplesse. Votre défi consiste à conserver une direction stable lorsque plusieurs possibilités attirent simultanément votre attention.",
  },
};

const styles = StyleSheet.create({
  /*
   * En-tête
   */
  header: {
    alignItems: "center",
    marginBottom: 15,
  },

  premiumBadge: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,

    marginBottom: 7,

    backgroundColor: "#0b1124",

    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  premiumBadgeText: {
    color: "#f4c95d",

    fontSize: 6.5,
    letterSpacing: 1.8,

    textTransform: "uppercase",
    textAlign: "center",
  },

  headerKicker: {
    color: "#f4c95d",

    fontSize: 8.5,
    letterSpacing: 2,

    textTransform: "uppercase",

    marginBottom: 7,
  },

  headerTitle: {
    color: "#fff8e7",

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

    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 18,
    height: 18,

    objectFit: "contain",

    marginHorizontal: 10,
  },

  headerLead: {
    maxWidth: 415,

    color: "#c9c5bb",

    fontSize: 9.2,
    lineHeight: 1.45,

    textAlign: "center",
  },

  /*
   * Cartes des modalités
   */
  grid: {
    flexDirection: "row",

    marginBottom: 12,
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

    backgroundColor: "#111a34",

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

    width: 40,
    height: 1.5,

    backgroundColor: "#f4c95d",
  },

  iconCircle: {
    width: 52,
    height: 52,

    borderRadius: 26,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 10,

    backgroundColor: "#0d152d",

    borderWidth: 1,
    borderColor: "#8f793c",
  },

  modalityIcon: {
    width: 29,
    height: 29,

    objectFit: "contain",
  },

  name: {
    color: "#fff8e7",

    fontSize: 14,

    marginBottom: 7,
  },

  value: {
    color: "#f4c95d",

    fontSize: 26,
    lineHeight: 1,

    marginBottom: 6,
  },

  count: {
    color: "#9da4b7",

    fontSize: 8.2,

    marginBottom: 10,
  },

  words: {
    color: "#bfc5d5",

    fontSize: 7.8,
    lineHeight: 1.42,

    textAlign: "center",
  },

  /*
   * Modalité dominante
   */
  dominantBox: {
    position: "relative",

    flexDirection: "row",

    minHeight: 128,

    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 18,

    marginBottom: 9,

    overflow: "hidden",

    backgroundColor: "#111a34",

    borderWidth: 1,
    borderColor: "#8f793c",
  },

  dominantAccentTop: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 100,
    height: 2,

    backgroundColor: "#f4c95d",
  },

  dominantAccentBottom: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 72,
    height: 2,

    backgroundColor: "#f4c95d",
  },

  dominantBadge: {
    width: 53,
    height: 53,

    borderRadius: 27,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 15,

    backgroundColor: "#0d152d",

    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  dominantIcon: {
    width: 30,
    height: 30,

    objectFit: "contain",
  },

  dominantWatermark: {
    position: "absolute",

    top: 10,
    right: 15,

    width: 90,
    height: 90,

    objectFit: "contain",

    opacity: 0.035,
  },

  dominantContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  kicker: {
    color: "#f4c95d",

    fontSize: 8,
    letterSpacing: 1.3,

    textTransform: "uppercase",

    marginBottom: 5,
  },

  dominantTitle: {
    color: "#fff8e7",

    fontSize: 18,

    marginBottom: 7,
  },

  dominantText: {
    color: "#d9d4c7",

    fontSize: 8.9,
    lineHeight: 1.45,

    marginBottom: 6,
  },

  dominantDescription: {
    color: "#bfc5d5",

    fontSize: 8.3,
    lineHeight: 1.42,
  },

  /*
   * Analyse Premium
   */
  premiumInsight: {
    position: "relative",

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,

    marginBottom: 8,

    backgroundColor: "#111a34",

    borderWidth: 1,
    borderColor: "#8f793c",
  },

  premiumInsightAccent: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 66,
    height: 1.5,

    backgroundColor: "#f4c95d",
  },

  premiumInsightTitle: {
    color: "#f4c95d",

    fontSize: 7.8,
    letterSpacing: 1.2,

    textTransform: "uppercase",

    marginBottom: 5,
  },

  premiumInsightText: {
    color: "#d8d4ca",

    fontSize: 8.5,
    lineHeight: 1.42,
  },

  /*
   * Forces et équilibre
   */
  insightRow: {
    flexDirection: "row",

    marginBottom: 8,
  },

  insightBox: {
    position: "relative",

    flexGrow: 1,
    flexBasis: 0,

    minHeight: 94,

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 14,

    backgroundColor: "#0d152d",

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

    backgroundColor: "#8f793c",
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

    color: "#f4c95d",

    fontSize: 8.2,
    letterSpacing: 0.8,

    textTransform: "uppercase",
  },

  insightText: {
    color: "#bfc5d5",

    fontSize: 8.2,
    lineHeight: 1.41,
  },

  /*
   * Note finale
   */
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
    borderColor: "#8f793c",
  },

  noteAccent: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 62,
    height: 1.5,

    backgroundColor: "#f4c95d",
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

    color: "#bfc5d5",

    fontSize: 7.8,
    lineHeight: 1.32,
  },
});

const SIGN_NAMES_EN: Record<
  string,
  string
> = {
  Bélier: "Aries",
  Taureau: "Taurus",
  Gémeaux: "Gemini",
  Cancer: "Cancer",
  Lion: "Leo",
  Vierge: "Virgo",
  Balance: "Libra",
  Scorpion: "Scorpio",
  Sagittaire: "Sagittarius",
  Capricorne: "Capricorn",
  Verseau: "Aquarius",
  Poissons: "Pisces",
};

function getModalityIcon(
  modality: string
): string {
  switch (modality) {
    case "Cardinal":
      return PLANET_ICONS.Mars;

    case "Fixe":
      return PLANET_ICONS.Saturn;

    case "Mutable":
      return PLANET_ICONS.Mercury;

    default:
      return ASCENDANT_ICON;
  }
}

function getPlanetData(
  planets: PremiumPlanet[],
  planetName: string
): PremiumPlanet | null {
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

function normalizeSignName(
  value: unknown
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    return "";
  }

  const cleanValue = value.trim();

  return (
    SIGN_NAMES_EN[cleanValue] ||
    cleanValue
  );
}

function getPlanetModality(
  planet: PremiumPlanet | null
): ModalityName | null {
  if (!planet) {
    return null;
  }

  const signName =
    normalizeSignName(
      planet.sign
    );

  if (!signName) {
    return null;
  }

  const modality =
    SIGN_MODALITY[signName];

  if (
    modality === "Cardinal" ||
    modality === "Fixe" ||
    modality === "Mutable"
  ) {
    return modality;
  }

  return null;
}

function getDominantModality(
  counts: Record<
    ModalityName,
    number
  >
): ModalityName | null {
  const sortedModalities =
    MODALITIES.slice().sort(
      (first, second) =>
        counts[second] -
        counts[first]
    );

  const dominantModality =
    sortedModalities[0];

  if (
    !dominantModality ||
    counts[dominantModality] <= 0
  ) {
    return null;
  }

  return dominantModality;
}

function getModalityText(
  modality: ModalityName | null
): string {
  if (!modality) {
    return "Aucune modalité dominante n’a pu être déterminée avec les données disponibles.";
  }

  const text =
    MODALITY_TEXT[modality];

  if (
    typeof text === "string" &&
    text.trim().length > 0
  ) {
    return text;
  }

  return MODALITY_DESCRIPTIONS[
    modality
  ];
}

export default function PdfModalities({
  planets,
}: PremiumPdfPlanetsProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const counts: Record<
    ModalityName,
    number
  > = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  MAIN_PLANETS.forEach(
    (planetName) => {
      const planet =
        getPlanetData(
          safePlanets,
          planetName
        );

      const modality =
        getPlanetModality(
          planet
        );

      if (modality) {
        counts[modality] += 1;
      }
    }
  );

  const dominantModality =
    getDominantModality(
      counts
    );

  const hasDominantModality =
    dominantModality !== null;

  const dominantText =
    getModalityText(
      dominantModality
    );

  const dominantIcon =
    getModalityIcon(
      dominantModality || ""
    );

  const insights =
    dominantModality
      ? MODALITY_INSIGHTS[
          dominantModality
        ]
      : {
          strength:
            "Votre thème combine plusieurs manières d’agir, de poursuivre vos efforts et de vous adapter aux circonstances.",

          balance:
            "Observez les moments où vous initiez facilement, ceux où vous persévérez et ceux où vous préférez modifier votre direction.",

          premium:
            "Une répartition équilibrée des modalités peut indiquer que vous mobilisez différents rythmes selon les circonstances. Vous pouvez commencer, maintenir ou ajuster vos actions en fonction des besoins de la situation.",
        };

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
            Analyse Premium
          </Text>
        </View>

        <Text
          style={styles.headerKicker}
        >
          Rythme intérieur
        </Text>

        <Text
          style={styles.headerTitle}
        >
          Les modalités astrologiques
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

          <Image
            src={ASCENDANT_ICON}
            style={styles.dividerIcon}
          />

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text
          style={styles.headerLead}
        >
          Les modalités décrivent votre rythme naturel d’action.
          Elles montrent comment vous commencez une expérience,
          maintenez votre engagement ou adaptez votre direction
          lorsque les circonstances évoluent.
        </Text>
      </View>

      <View style={styles.grid}>
        {MODALITIES.map(
          (modality, index) => {
            const value =
              counts[modality];

            const modalityIcon =
              getModalityIcon(
                modality
              );

            return (
              <View
                key={modality}
                wrap={false}
                style={
                  index <
                  MODALITIES.length - 1
                    ? [
                        styles.card,
                        styles.cardSpacing,
                      ]
                    : styles.card
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
                    src={modalityIcon}
                    style={
                      styles.modalityIcon
                    }
                  />
                </View>

                <Text
                  style={styles.name}
                >
                  {modality}
                </Text>

                <Text
                  style={styles.value}
                >
                  {value}
                </Text>

                <Text
                  style={styles.count}
                >
                  {value === 1
                    ? "1 planète"
                    : `${value} planètes`}
                </Text>

                <Text
                  style={styles.words}
                >
                  {
                    MODALITY_WORDS[
                      modality
                    ]
                  }
                </Text>
              </View>
            );
          }
        )}
      </View>

      <View
        style={styles.dominantBox}
        wrap={false}
      >
        <View
          style={
            styles.dominantAccentTop
          }
        />

        <View
          style={
            styles.dominantAccentBottom
          }
        />

        <View
          style={
            styles.dominantBadge
          }
        >
          <Image
            src={dominantIcon}
            style={
              styles.dominantIcon
            }
          />
        </View>

        <Image
          src={dominantIcon}
          style={
            styles.dominantWatermark
          }
        />

        <View
          style={
            styles.dominantContent
          }
        >
          <Text style={styles.kicker}>
            Votre dynamique dominante
          </Text>

          <Text
            style={
              styles.dominantTitle
            }
          >
            {hasDominantModality
              ? dominantModality
              : "Non déterminée"}
          </Text>

          <Text
            style={
              styles.dominantText
            }
          >
            {dominantText}
          </Text>

          {dominantModality ? (
            <Text
              style={
                styles.dominantDescription
              }
            >
              {
                MODALITY_DESCRIPTIONS[
                  dominantModality
                ]
              }
            </Text>
          ) : null}
        </View>
      </View>

      <View
        style={styles.premiumInsight}
        wrap={false}
      >
        <View
          style={
            styles.premiumInsightAccent
          }
        />

        <Text
          style={
            styles.premiumInsightTitle
          }
        >
          Regard Premium
        </Text>

        <Text
          style={
            styles.premiumInsightText
          }
        >
          {insights.premium}
        </Text>
      </View>

      <View style={styles.insightRow}>
        <View
          style={[
            styles.insightBox,
            styles.insightBoxLeft,
          ]}
          wrap={false}
        >
          <View
            style={styles.insightAccent}
          />

          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={dominantIcon}
              style={
                styles.insightIcon
              }
            />

            <Text
              style={
                styles.insightTitle
              }
            >
              Votre force naturelle
            </Text>
          </View>

          <Text
            style={styles.insightText}
          >
            {insights.strength}
          </Text>
        </View>

        <View
          style={styles.insightBox}
          wrap={false}
        >
          <View
            style={styles.insightAccent}
          />

          <View
            style={
              styles.insightHeader
            }
          >
            <Image
              src={ASCENDANT_ICON}
              style={
                styles.insightIcon
              }
            />

            <Text
              style={
                styles.insightTitle
              }
            >
              Votre équilibre à développer
            </Text>
          </View>

          <Text
            style={styles.insightText}
          >
            {insights.balance}
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <View
          style={styles.noteAccent}
        />

        <Image
          src={PLANET_ICONS.Moon}
          style={styles.noteIcon}
        />

        <Text style={styles.noteText}>
          Aucune modalité n’est meilleure qu’une autre. Leur
          répartition révèle votre manière naturelle d’initier une
          action, de préserver vos efforts ou de vous adapter aux
          changements. L’équilibre entre ces trois rythmes favorise
          une évolution plus consciente.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
