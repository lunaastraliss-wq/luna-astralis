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
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import { pdfStyles } from "./EssentialPdfStyles";
import type { PlanetsProps } from "./EssentialPdfTypes";

import {
  getPlanet,
  getPlanetSignName,
  MAIN_PLANETS,
} from "./EssentialPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const ELEMENTS = ["Feu", "Terre", "Air", "Eau"];

const ELEMENT_WORDS: Record<string, string> = {
  Feu: "Action • Courage • Inspiration",
  Terre: "Stabilité • Réalisme • Construction",
  Air: "Communication • Curiosité • Idées",
  Eau: "Émotions • Intuition • Sensibilité",
};

const ELEMENT_INSIGHTS: Record<
  string,
  {
    strength: string;
    balance: string;
  }
> = {
  Feu: {
    strength:
      "Votre force réside dans votre capacité à initier, à agir et à avancer avec courage. Votre énergie se nourrit du mouvement, de l’enthousiasme et du désir de créer.",
    balance:
      "Prenez le temps de ralentir, d’écouter et de consolider vos projets. La patience permet à votre inspiration de produire des résultats durables.",
  },

  Terre: {
    strength:
      "Votre force réside dans votre stabilité, votre sens pratique et votre capacité à transformer une idée en réalité concrète.",
    balance:
      "Laissez davantage de place à la spontanéité, à l’intuition et au changement. Tout ne doit pas être parfaitement contrôlé avant d’avancer.",
  },

  Air: {
    strength:
      "Votre force réside dans votre curiosité, votre intelligence relationnelle et votre capacité à comprendre plusieurs points de vue.",
    balance:
      "Revenez régulièrement à vos émotions et à vos sensations. Une idée devient plus puissante lorsqu’elle est aussi ressentie et incarnée.",
  },

  Eau: {
    strength:
      "Votre force réside dans votre intuition, votre profondeur émotionnelle et votre capacité à percevoir ce qui n’est pas toujours exprimé.",
    balance:
      "Protégez votre sensibilité sans vous isoler. Des limites claires vous permettent de rester disponible aux autres sans absorber leurs émotions.",
  },
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 17,
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
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9.4,
    lineHeight: 1.45,
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    marginBottom: 13,
  },

  card: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 170,
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardSpacing: {
    marginRight: 8,
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
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
    marginBottom: 7,
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
    marginBottom: 10,
  },

  words: {
    color: "#bfc5d5",
    fontSize: 7.8,
    lineHeight: 1.4,
    textAlign: "center",
  },

  dominantBox: {
    position: "relative",
    flexDirection: "row",
    minHeight: 135,
    paddingVertical: 17,
    paddingHorizontal: 18,
    marginBottom: 12,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
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
    marginBottom: 8,
  },

  dominantText: {
    color: "#d9d4c7",
    fontSize: 9.2,
    lineHeight: 1.48,
  },

  insightRow: {
    flexDirection: "row",
    marginBottom: 12,
  },

  insightBox: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 104,
    paddingVertical: 13,
    paddingHorizontal: 14,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  insightBoxLeft: {
    marginRight: 8,
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
    fontSize: 8.3,
    lineHeight: 1.43,
  },

  note: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
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
    fontSize: 8.2,
    lineHeight: 1.4,
  },
});

function getElementIcon(element: string) {
  switch (element) {
    case "Feu":
      return PLANET_ICONS.Sun;

    case "Terre":
      return PLANET_ICONS.Saturn;

    case "Air":
      return PLANET_ICONS.Mercury;

    case "Eau":
      return PLANET_ICONS.Moon;

    default:
      return ASCENDANT_ICON;
  }
}

export default function PdfElements({
  planets,
}: PlanetsProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const counts: Record<string, number> = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  MAIN_PLANETS.forEach((planetName) => {
    const planet = getPlanet(
      safePlanets,
      planetName
    );

    const signName =
      getPlanetSignName(planet);

    if (!signName) {
      return;
    }

    const element =
      SIGN_ELEMENT[signName];

    if (
      element &&
      counts[element] !== undefined
    ) {
      counts[element] += 1;
    }
  });

  const dominantElement =
    Object.entries(counts).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "";

  const hasDominantElement =
    Boolean(
      dominantElement &&
        counts[dominantElement] > 0
    );

  const dominantText =
    hasDominantElement
      ? ELEMENT_TEXT[dominantElement]
      : "Aucun élément dominant n’a pu être déterminé avec les données disponibles.";

  const dominantIcon =
    getElementIcon(dominantElement);

  const insights =
    ELEMENT_INSIGHTS[dominantElement] || {
      strength:
        "Votre thème réunit plusieurs formes d’énergie qui peuvent se compléter selon les situations.",
      balance:
        "Observez les qualités que vous utilisez spontanément et celles que vous développez avec davantage d’effort.",
    };

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <Text style={styles.headerKicker}>
          Équilibre du thème
        </Text>

        <Text style={styles.headerTitle}>
          Les quatre éléments
        </Text>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />

          <Image
            src={PLANET_ICONS.Sun}
            style={styles.dividerIcon}
          />

          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.headerLead}>
          Les éléments montrent comment votre énergie circule
          naturellement et quelles qualités dominent votre
          personnalité.
        </Text>
      </View>

      <View style={styles.grid}>
        {ELEMENTS.map((element, index) => {
          const value = counts[element];

          const elementIcon =
            getElementIcon(element);

          const cardStyle =
            index < ELEMENTS.length - 1
              ? [
                  styles.card,
                  styles.cardSpacing,
                ]
              : styles.card;

          return (
            <View
              key={element}
              wrap={false}
              style={cardStyle}
            >
              <View style={styles.iconCircle}>
                <Image
                  src={elementIcon}
                  style={styles.elementIcon}
                />
              </View>

              <Text style={styles.name}>
                {element}
              </Text>

              <Text style={styles.value}>
                {value}
              </Text>

              <Text style={styles.count}>
                {value === 1
                  ? "1 planète"
                  : `${value} planètes`}
              </Text>

              <Text style={styles.words}>
                {ELEMENT_WORDS[element]}
              </Text>
            </View>
          );
        })}
      </View>

      <View
        style={styles.dominantBox}
        wrap={false}
      >
        <View style={styles.dominantBadge}>
          <Image
            src={dominantIcon}
            style={styles.dominantIcon}
          />
        </View>

        <Image
          src={dominantIcon}
          style={styles.dominantWatermark}
        />

        <View style={styles.dominantContent}>
          <Text style={styles.kicker}>
            Votre énergie dominante
          </Text>

          <Text style={styles.dominantTitle}>
            {hasDominantElement
              ? dominantElement
              : "Non déterminée"}
          </Text>

          <Text style={styles.dominantText}>
            {dominantText}
          </Text>
        </View>
      </View>

      <View style={styles.insightRow}>
        <View
          style={[
            styles.insightBox,
            styles.insightBoxLeft,
          ]}
          wrap={false}
        >
          <View style={styles.insightHeader}>
            <Image
              src={dominantIcon}
              style={styles.insightIcon}
            />

            <Text style={styles.insightTitle}>
              Votre force naturelle
            </Text>
          </View>

          <Text style={styles.insightText}>
            {insights.strength}
          </Text>
        </View>

        <View
          style={styles.insightBox}
          wrap={false}
        >
          <View style={styles.insightHeader}>
            <Image
              src={ASCENDANT_ICON}
              style={styles.insightIcon}
            />

            <Text style={styles.insightTitle}>
              Votre équilibre à développer
            </Text>
          </View>

          <Text style={styles.insightText}>
            {insights.balance}
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <Image
          src={PLANET_ICONS.Moon}
          style={styles.noteIcon}
        />

        <Text style={styles.noteText}>
          Un élément très présent représente une énergie que
          vous exprimez spontanément. Un élément moins représenté
          n’est pas une faiblesse : il correspond souvent à une
          qualité que vous apprenez à développer avec le temps.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
