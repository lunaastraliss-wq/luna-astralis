import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  SIGN_ELEMENT,
  ELEMENT_TEXT,
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
    color: "#d9d4c7
