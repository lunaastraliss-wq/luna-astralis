import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  SIGN_ELEMENT,
  ELEMENT_TEXT,
} from "@/lib/astrology";

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

const ELEMENT_SYMBOLS: Record<string, string> = {
  Feu: "△",
  Terre: "▽",
  Air: "△̶",
  Eau: "▽̶",
};
const ELEMENT_WORDS: Record<string, string> = {
  Feu: "Action • Courage • Inspiration",
  Terre: "Stabilité • Réalisme • Construction",
  Air: "Communication • Curiosité • Idées",
  Eau: "Émotions • Intuition • Sensibilité",
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  card: {
    width: "23.5%",
    minHeight: 175,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  symbolCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  symbol: {
    color: "#f4c95d",
    fontSize: 22,
  },

  name: {
    color: "#fff8e7",
    fontSize: 14,
    marginBottom: 8,
  },

  value: {
    color: "#f4c95d",
    fontSize: 27,
    lineHeight: 1,
    marginBottom: 6,
  },

  count: {
    color: "#9da4b7",
    fontSize: 8.5,
    marginBottom: 12,
  },

  words: {
    color: "#bfc5d5",
    fontSize: 8,
    lineHeight: 1.4,
    textAlign: "center",
  },

  dominantBox: {
    flexDirection: "row",
    padding: 22,
    marginBottom: 18,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  dominantBadge: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 17,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  dominantBadgeText: {
    color: "#f4c95d",
    fontSize: 20,
  },

  dominantContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  dominantTitle: {
    color: "#fff8e7",
    fontSize: 20,
    marginBottom: 10,
  },

  dominantText: {
    color: "#d9d4c7",
    fontSize: 10,
    lineHeight: 1.55,
  },

  note: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  noteSymbol: {
    color: "#f4c95d",
    fontSize: 16,
    marginRight: 12,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 9,
    lineHeight: 1.5,
  },
});

export default function PdfElements({
  planets,
}: PlanetsProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const counts: Record<string, number> = {
    Feu: 0,
    Terre: 0,
    Air: 0,
    Eau: 0,
  };

  MAIN_PLANETS.forEach((planetName) => {
    const planet = getPlanet(safePlanets, planetName);
    const signName = getPlanetSignName(planet);

    if (!signName) {
      return;
    }

    const element = SIGN_ELEMENT[signName];

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

  const dominantText =
    dominantElement &&
    counts[dominantElement] > 0
      ? ELEMENT_TEXT[dominantElement]
      : "Aucun élément dominant n’a pu être déterminé avec les données disponibles.";

  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfBrandHeader />

      <View style={pdfStyles.centeredHeader}>
        <Text style={pdfStyles.pageKicker}>
          Équilibre du thème
        </Text>

        <Text style={pdfStyles.largePageTitle}>
          Les quatre éléments
        </Text>

        <View style={pdfStyles.decorativeDivider}>
          <View style={pdfStyles.dividerLine} />

          <Text style={pdfStyles.dividerSymbol}>
            ✦
          </Text>

          <View style={pdfStyles.dividerLine} />
        </View>

        <Text style={pdfStyles.pageLead}>
          Les éléments montrent comment votre énergie circule
          naturellement et quelles qualités dominent votre
          personnalité.
        </Text>
      </View>

      <View style={styles.grid}>
        {ELEMENTS.map((element) => {
          const value = counts[element];

          return (
            <View
              style={styles.card}
              key={element}
              wrap={false}
            >
              <View style={styles.symbolCircle}>
                <Text style={styles.symbol}>
                  {ELEMENT_SYMBOLS[element]}
                </Text>
              </View>

              <Text style={styles.name}>
                {element}
              </Text>

              <Text style={styles.value}>
                {value}
              </Text>

              <Text style={styles.count}>
                {value > 1
                  ? `${value} planètes`
                  : `${value} planète`}
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
          <Text style={styles.dominantBadgeText}>
            ✦
          </Text>
        </View>

        <View style={styles.dominantContent}>
          <Text style={styles.kicker}>
            Votre énergie dominante
          </Text>

          <Text style={styles.dominantTitle}>
            {dominantElement || "—"}
          </Text>

          <Text style={styles.dominantText}>
            {dominantText}
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <Text style={styles.noteSymbol}>
          ✦
        </Text>

        <Text style={styles.noteText}>
          Un élément très présent représente une énergie que vous exprimez
  spontanément. Un élément moins représenté n’est pas une faiblesse :
  il correspond souvent à une qualité que vous apprenez à développer
  avec le temps et l’expérience.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
