import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { SIGN_MODALITY, MODALITY_TEXT } from "@/lib/astrology";

import { pdfStyles } from "./EssentialPdfStyles";
import type { PlanetsProps } from "./EssentialPdfTypes";
import {
  getPlanet,
  getPlanetSignName,
  MAIN_PLANETS,
} from "./EssentialPdfUtils";
import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const MODALITIES = [
  "Cardinal",
  "Fixe",
  "Mutable",
];

const MODALITY_SYMBOLS: Record<string, string> = {
  Cardinal: "▲",
  Fixe: "⬢",
  Mutable: "◈",
};

const MODALITY_WORDS: Record<string, string> = {
  Cardinal:
    "Initiative • Impulsion • Leadership",
  Fixe:
    "Persévérance • Stabilité • Détermination",
  Mutable:
    "Adaptation • Évolution • Souplesse",
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  card: {
    width: "31.5%",
    minHeight: 190,
    padding: 17,
    alignItems: "center",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  symbolCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  symbol: {
    color: "#f4c95d",
    fontSize: 21,
  },

  name: {
    color: "#fff8e7",
    fontSize: 15,
    marginBottom: 9,
  },

  value: {
    color: "#f4c95d",
    fontSize: 28,
    lineHeight: 1,
    marginBottom: 7,
  },

  count: {
    color: "#9da4b7",
    fontSize: 8.5,
    marginBottom: 13,
  },

  words: {
    color: "#bfc5d5",
    fontSize: 8.4,
    lineHeight: 1.45,
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
    fontSize: 19,
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

export default function PdfModalities({
  planets,
}: PlanetsProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const counts: Record<string, number> = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
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

    const modality =
      SIGN_MODALITY[signName];

    if (
      modality &&
      counts[modality] !== undefined
    ) {
      counts[modality] += 1;
    }
  });

  const dominantModality =
    Object.entries(counts).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "";

  const dominantText =
    dominantModality &&
    counts[dominantModality] > 0
      ? MODALITY_TEXT[dominantModality]
      : "Aucune modalité dominante n’a pu être déterminée avec les données disponibles.";

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
    >
      <PdfBrandHeader />

      <View style={pdfStyles.centeredHeader}>
        <Text style={pdfStyles.pageKicker}>
          Rythme intérieur
        </Text>

        <Text style={pdfStyles.largePageTitle}>
          Les modalités astrologiques
        </Text>

        <View
          style={pdfStyles.decorativeDivider}
        >
          <View style={pdfStyles.dividerLine} />

          <Text style={pdfStyles.dividerSymbol}>
            ✦
          </Text>

          <View style={pdfStyles.dividerLine} />
        </View>

        <Text style={pdfStyles.pageLead}>
          Les modalités révèlent la manière
          dont votre énergie se met en
          mouvement et évolue au fil de vos
          expériences.
        </Text>
      </View>

      <View style={styles.grid}>
        {MODALITIES.map((modality) => {
          const value = counts[modality];

          return (
            <View
              style={styles.card}
              key={modality}
              wrap={false}
            >
              <View
                style={styles.symbolCircle}
              >
                <Text style={styles.symbol}>
                  {
                    MODALITY_SYMBOLS[
                      modality
                    ]
                  }
                </Text>
              </View>

              <Text style={styles.name}>
                {modality}
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
                {
                  MODALITY_WORDS[
                    modality
                  ]
                }
              </Text>
            </View>
          );
        })}
      </View>

      <View
        style={styles.dominantBox}
        wrap={false}
      >
        <View
          style={styles.dominantBadge}
        >
          <Text
            style={
              styles.dominantBadgeText
            }
          >
            ✦
          </Text>
        </View>

        <View
          style={styles.dominantContent}
        >
          <Text style={styles.kicker}>
            Votre dynamique dominante
          </Text>

          <Text
            style={styles.dominantTitle}
          >
            {dominantModality || "—"}
          </Text>

          <Text
            style={styles.dominantText}
          >
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
          Aucune modalité n’est supérieure
          aux autres. Leur répartition révèle
          simplement votre manière
          privilégiée d’initier, de maintenir
          ou d’adapter votre énergie.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
