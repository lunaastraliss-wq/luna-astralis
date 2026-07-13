import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  ELEMENT_TEXT,
  SIGN_ELEMENT,
} from "@/lib/astrology";

import {
  ASCENDANT_ICON,
  ELEMENT_ICONS,
  FOUR_ELEMENTS_ICON,
  PLANET_ICONS,
} from "./SignaturePdfAssets";
import { pdfStyles } from "././SignaturePdfStyles";

import type {
  SignaturePlanet,
  SignaturePdfPlanetsProps,
} from "./SignaturePdfTypes";

import {
  MAIN_PLANETS,
} from "./SignaturePdfUtils";

import PdfBrandHeader from "./PdfSignatureBrandHeader";
import PdfPageFooter from "./PdfSignaturePageFooter";

const ELEMENTS = [
  "Feu",
  "Terre",
  "Air",
  "Eau",
] as const;

type ElementName =
  (typeof ELEMENTS)[number];

const ELEMENT_WORDS: Record<
  ElementName,
  string
> = {
  Feu:
    "Action • Courage • Inspiration",

  Terre:
    "Stabilité • Réalisme • Construction",

  Air:
    "Communication • Curiosité • Idées",

  Eau:
    "Émotions • Intuition • Sensibilité",
};

const ELEMENT_DESCRIPTIONS: Record<
  ElementName,
  string
> = {
  Feu:
    "Le Feu représente l’élan, la confiance, le désir d’agir et la capacité de vous engager avec enthousiasme.",

  Terre:
    "La Terre représente l’ancrage, la patience, le sens pratique et la capacité de construire quelque chose de durable.",

  Air:
    "L’Air représente la pensée, les échanges, la curiosité et votre manière de comprendre le monde par les idées.",

  Eau:
    "L’Eau représente la sensibilité, l’intuition, la réceptivité et la profondeur de votre vie émotionnelle.",
};

const ELEMENT_INSIGHTS: Record<
  ElementName,
  {
    strength: string;
    balance: string;
    premium: string;
  }
> = {
  Feu: {
    strength:
      "Votre force réside dans votre capacité à initier, à agir et à avancer avec courage. Votre énergie se nourrit du mouvement, de l’enthousiasme et du désir de créer.",

    balance:
      "Prenez le temps de ralentir, d’écouter et de consolider vos projets. La patience permet à votre inspiration de produire des résultats plus durables.",

    premium:
      "Une dominante de Feu vous pousse à vivre avec intensité et à rechercher les expériences qui stimulent votre volonté. Votre défi consiste à préserver votre élan sans agir trop rapidement ni vous disperser.",
  },

  Terre: {
    strength:
      "Votre force réside dans votre stabilité, votre sens pratique et votre capacité à transformer une idée en réalité concrète.",

    balance:
      "Laissez davantage de place à la spontanéité, à l’intuition et au changement. Tout ne doit pas être parfaitement contrôlé avant d’avancer.",

    premium:
      "Une dominante de Terre vous donne souvent un fort besoin de sécurité et de résultats tangibles. Vous progressez grâce à la constance, mais vous gagnez à accepter que certaines étapes demandent de la souplesse.",
  },

  Air: {
    strength:
      "Votre force réside dans votre curiosité, votre intelligence relationnelle et votre capacité à comprendre plusieurs points de vue.",

    balance:
      "Revenez régulièrement à vos émotions et à vos sensations. Une idée devient plus puissante lorsqu’elle est aussi ressentie et incarnée.",

    premium:
      "Une dominante d’Air favorise la réflexion, la communication et le besoin de comprendre. Votre défi consiste à ne pas rester uniquement dans l’analyse lorsque la situation demande une décision ou un engagement émotionnel.",
  },

  Eau: {
    strength:
      "Votre force réside dans votre intuition, votre profondeur émotionnelle et votre capacité à percevoir ce qui n’est pas toujours exprimé.",

    balance:
      "Protégez votre sensibilité sans vous isoler. Des limites claires vous permettent de rester disponible aux autres sans absorber leurs émotions.",

    premium:
      "Une dominante d’Eau intensifie votre réceptivité et votre vie intérieure. Vous pouvez ressentir fortement les atmosphères et les non-dits. Votre équilibre dépend souvent de votre capacité à distinguer vos émotions de celles des autres.",
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
   * Cartes des quatre éléments
   */
  grid: {
    flexDirection: "row",

    marginBottom: 12,
  },

  card: {
    position: "relative",

    flexGrow: 1,
    flexBasis: 0,

    minHeight: 170,

    alignItems: "center",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 9,

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

    width: 35,
    height: 1.5,

    backgroundColor: "#f4c95d",
  },

  iconCircle: {
    width: 48,
    height: 48,

    borderRadius: 24,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 9,

    backgroundColor: "#0d152d",

    borderWidth: 1,
    borderColor: "#8f793c",
  },

  elementIcon: {
    width: 27,
    height: 27,

    objectFit: "contain",
  },

  name: {
    color: "#fff8e7",

    fontSize: 13,

    marginBottom: 6,
  },

  value: {
    color: "#f4c95d",

    fontSize: 25,
    lineHeight: 1,

    marginBottom: 5,
  },

  count: {
    color: "#9da4b7",

    fontSize: 8,

    marginBottom: 9,
  },

  words: {
    color: "#bfc5d5",

    fontSize: 7.5,
    lineHeight: 1.4,

    textAlign: "center",
  },

  /*
   * Élément dominant
   */
  dominantBox: {
    position: "relative",

    flexDirection: "row",

    minHeight: 132,

    paddingTop: 15,
    paddingBottom: 15,
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
   * Regard Premium
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
   * Force et équilibre
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
    paddingHorizontal: 13,

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

function getElementIcon(
  element: string
): string {
  switch (element) {
    case "Feu":
      return ELEMENT_ICONS.Feu;

    case "Terre":
      return ELEMENT_ICONS.Terre;

    case "Air":
      return ELEMENT_ICONS.Air;

    case "Eau":
      return ELEMENT_ICONS.Eau;

    default:
      return ASCENDANT_ICON;
  }
}
function getPlanetData(
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

function getPlanetElement(
  planet: SignaturePlanet | null
): ElementName | null {
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

  const element =
    SIGN_ELEMENT[signName];

  if (
    element === "Feu" ||
    element === "Terre" ||
    element === "Air" ||
    element === "Eau"
  ) {
    return element;
  }

  return null;
}

function getDominantElement(
  counts: Record<
    ElementName,
    number
  >
): ElementName | null {
  const sortedElements =
    ELEMENTS.slice().sort(
      (first, second) =>
        counts[second] -
        counts[first]
    );

  const dominantElement =
    sortedElements[0];

  if (
    !dominantElement ||
    counts[dominantElement] <= 0
  ) {
    return null;
  }

  return dominantElement;
}

function getElementText(
  element: ElementName | null
): string {
  if (!element) {
    return "Aucun élément dominant n’a pu être déterminé avec les données disponibles.";
  }

  const text =
    ELEMENT_TEXT[element];

  if (
    typeof text === "string" &&
    text.trim().length > 0
  ) {
    return text;
  }

  return ELEMENT_DESCRIPTIONS[
    element
  ];
}

export default function PdfSignatureElements({
  planets,
}: SignaturePdfPlanetsProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const counts: Record<
    ElementName,
    number
  > = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  MAIN_PLANETS.forEach(
    (planetName) => {
      const planet =
        getPlanetData(
          safePlanets,
          planetName
        );

      const element =
        getPlanetElement(
          planet
        );

      if (element) {
        counts[element] += 1;
      }
    }
  );

  const dominantElement =
    getDominantElement(
      counts
    );

  const hasDominantElement =
    dominantElement !== null;

  const dominantText =
    getElementText(
      dominantElement
    );

  const dominantIcon =
    getElementIcon(
      dominantElement || ""
    );

  const insights =
    dominantElement
      ? ELEMENT_INSIGHTS[
          dominantElement
        ]
      : {
          strength:
            "Votre thème réunit plusieurs formes d’énergie qui peuvent se compléter selon les situations.",

          balance:
            "Observez les qualités que vous utilisez spontanément et celles qui demandent davantage d’attention ou de pratique.",

          premium:
            "Une répartition équilibrée peut indiquer une capacité à mobiliser différentes qualités selon les circonstances. L’analyse complète du thème permet de comprendre comment ces énergies coopèrent entre elles.",
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
            Analyse Signature
          </Text>
        </View>

        <Text
          style={styles.headerKicker}
        >
          Équilibre énergétique
        </Text>

        <Text
          style={styles.headerTitle}
        >
          Les quatre éléments
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

         <Image
  src={FOUR_ELEMENTS_ICON}
  style={styles.dividerIcon}
/>

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text
          style={styles.headerLead}
        >
           Les quatre éléments révèlent la manière dont votre
  énergie circule naturellement. Leur équilibre permet de
  mieux comprendre vos réactions spontanées, vos
  ressources dominantes et les qualités que votre
  évolution vous invite à développer.
        </Text>
      </View>

      <View style={styles.grid}>
        {ELEMENTS.map(
          (element, index) => {
            const value =
              counts[element];

            const elementIcon =
              getElementIcon(
                element
              );

            return (
              <View
                key={element}
                wrap={false}
                style={
                  index <
                  ELEMENTS.length - 1
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
                    src={elementIcon}
                    style={
                      styles.elementIcon
                    }
                  />
                </View>

                <Text
                  style={styles.name}
                >
                  {element}
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
                    ELEMENT_WORDS[
                      element
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
            Votre énergie dominante
          </Text>

          <Text
            style={
              styles.dominantTitle
            }
          >
            {hasDominantElement
              ? dominantElement
              : "Non déterminée"}
          </Text>

          <Text
            style={
              styles.dominantText
            }
          >
            {dominantText}
          </Text>

          {dominantElement ? (
            <Text
              style={
                styles.dominantDescription
              }
            >
              {
                ELEMENT_DESCRIPTIONS[
                  dominantElement
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
          Analyse Signature
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
          Un élément très présent représente une énergie que vous
          exprimez spontanément. Un élément moins représenté n’est
          pas une faiblesse : il correspond souvent à une qualité
          que vous développez grâce aux expériences, aux relations
          et aux choix de votre parcours.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
