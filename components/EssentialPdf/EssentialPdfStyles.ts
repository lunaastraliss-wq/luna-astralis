import { StyleSheet } from "@react-pdf/renderer";

const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;

export const pdfStyles = StyleSheet.create({
  /*
   * Structure générale
   */
  page: {
    position: "relative",
    width: A4_WIDTH,
    height: A4_HEIGHT,
    padding: 0,
    margin: 0,
    overflow: "hidden",
    backgroundColor: "#06101f",
    color: "#fff8e7",
    fontFamily: "Helvetica",
    fontSize: 10.5,
    lineHeight: 1.5,
  },

  /*
   * Image de fond pleine page
   */
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    objectFit: "fill",
  },

  /*
   * Contenu des pages intérieures
   */
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    paddingTop: 42,
    paddingBottom: 60,
    paddingHorizontal: 48,
  },

  /*
   * Variante plus large pour les pages visuelles
   */
  wideContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    paddingTop: 38,
    paddingBottom: 58,
    paddingHorizontal: 34,
  },

  /*
   * Logos
   */
  coverLogo: {
    width: 172,
    height: 68,
    objectFit: "contain",
    marginBottom: 16,
  },

  pageLogo: {
    width: 104,
    height: 32,
    objectFit: "contain",
  },

  /*
   * En-tête récurrent
   */
  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  pageHeaderLine: {
    width: 250,
    height: 0.8,
    backgroundColor: "#a98742",
    opacity: 0.72,
  },

  /*
   * Titres généraux
   */
  title: {
    fontSize: 30,
    lineHeight: 1.15,
    color: "#fff8e7",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13.5,
    lineHeight: 1.4,
    color: "#e5b957",
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 22,
    lineHeight: 1.25,
    color: "#f4c95d",
    marginBottom: 14,
  },

  sectionIntro: {
    fontSize: 10.5,
    lineHeight: 1.55,
    color: "#e5dfd2",
    marginBottom: 18,
  },

  text: {
    fontSize: 10.5,
    lineHeight: 1.55,
    color: "#f5efe3",
    marginBottom: 10,
  },

  smallText: {
    fontSize: 8.8,
    lineHeight: 1.5,
    color: "#d2ccbd",
  },

  /*
   * Encadrés généraux
   */
  box: {
    borderWidth: 0.8,
    borderColor: "#c89c45",
    padding: 16,
    marginTop: 12,
    marginBottom: 18,
    backgroundColor: "rgba(5, 15, 31, 0.88)",
  },

  softBox: {
    borderWidth: 0.7,
    borderColor: "#6d6049",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "rgba(8, 20, 42, 0.86)",
  },

  informationLine: {
    fontSize: 10.5,
    lineHeight: 1.45,
    color: "#fff8e7",
    marginBottom: 6,
  },

  quoteBox: {
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    backgroundColor: "rgba(8, 20, 42, 0.88)",
    padding: 17,
    marginTop: 16,
    marginBottom: 18,
  },

  quoteText: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "#fff8e7",
  },

  /*
   * Titres centrés
   */
  centeredHeader: {
    alignItems: "center",
    marginBottom: 22,
  },

  pageKicker: {
    color: "#e5b957",
    fontSize: 8.5,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    marginBottom: 9,
  },

  largePageTitle: {
    color: "#fff8e7",
    fontSize: 27,
    lineHeight: 1.18,
    textAlign: "center",
  },

  decorativeDivider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 12,
  },

  dividerLine: {
    width: 58,
    height: 0.8,
    backgroundColor: "#b28b41",
  },

  dividerSymbol: {
    color: "#f4c95d",
    fontSize: 12,
    marginHorizontal: 10,
  },

  pageLead: {
    maxWidth: 420,
    color: "#dfd8ca",
    fontSize: 10.2,
    lineHeight: 1.55,
    textAlign: "center",
  },

  /*
   * Cartes de contenu
   */
  contentCard: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 22,
    backgroundColor: "rgba(7, 19, 41, 0.9)",
    borderWidth: 0.8,
    borderColor: "#756340",
    marginBottom: 18,
  },

  paragraph: {
    color: "#eee8dc",
    fontSize: 10.2,
    lineHeight: 1.58,
    marginBottom: 11,
  },

  paragraphLast: {
    color: "#eee8dc",
    fontSize: 10.2,
    lineHeight: 1.58,
  },

  /*
   * Citation mise en valeur
   */
  highlightQuote: {
    flexDirection: "row",
    padding: 17,
    backgroundColor: "rgba(8, 20, 42, 0.9)",
    borderWidth: 0.8,
    borderColor: "#a9843e",
  },

  quoteMark: {
    color: "#f4c95d",
    fontSize: 30,
    lineHeight: 1,
    marginRight: 11,
  },

  quoteContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  highlightQuoteText: {
    color: "#f4c95d",
    fontSize: 12,
    lineHeight: 1.48,
  },

  quoteSignature: {
    color: "#aaa28f",
    fontSize: 7.5,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginTop: 8,
  },

  /*
   * Résumé Soleil, Lune et Ascendant
   */
  summaryGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  summaryCard: {
    width: "31.5%",
    minHeight: 216,
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 13,
    alignItems: "center",
    backgroundColor: "rgba(7, 19, 41, 0.9)",
    borderWidth: 0.8,
    borderColor: "#756340",
  },

  summaryIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(3, 12, 27, 0.94)",
    borderWidth: 0.9,
    borderColor: "#bd9342",
    marginBottom: 11,
  },

  summaryIcon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },

  summaryLabel: {
    color: "#bcb3a0",
    fontSize: 8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 7,
    textAlign: "center",
  },

  summaryValue: {
    color: "#fff8e7",
    fontSize: 18,
    lineHeight: 1.25,
    marginBottom: 9,
    textAlign: "center",
  },

  summaryDivider: {
    width: 38,
    height: 0.8,
    backgroundColor: "#b28b41",
    marginBottom: 9,
  },

  summaryMeaning: {
    color: "#f4c95d",
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 7,
    textAlign: "center",
  },

  summaryDescription: {
    color: "#d2ccbd",
    fontSize: 8.4,
    lineHeight: 1.42,
    textAlign: "center",
  },

  summarySynthesis: {
    flexDirection: "row",
    padding: 20,
    marginBottom: 15,
    backgroundColor: "rgba(7, 19, 41, 0.9)",
    borderWidth: 0.8,
    borderColor: "#a9843e",
  },

  synthesisBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(3, 12, 27, 0.94)",
    borderWidth: 0.9,
    borderColor: "#b98e3f",
    marginRight: 15,
  },

  synthesisBadgeText: {
    color: "#f4c95d",
    fontSize: 17,
  },

  synthesisContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  synthesisKicker: {
    color: "#f4c95d",
    fontSize: 8,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  synthesisTitle: {
    color: "#fff8e7",
    fontSize: 15,
    lineHeight: 1.3,
    marginBottom: 9,
  },

  synthesisText: {
    color: "#ded7ca",
    fontSize: 9.2,
    lineHeight: 1.5,
    marginBottom: 7,
  },

  synthesisTextLast: {
    color: "#ded7ca",
    fontSize: 9.2,
    lineHeight: 1.5,
  },

  summaryNote: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    backgroundColor: "rgba(5, 15, 31, 0.9)",
    borderWidth: 0.7,
    borderColor: "#665b47",
  },

  summaryNoteSymbol: {
    color: "#f4c95d",
    fontSize: 17,
    marginRight: 11,
  },

  summaryNoteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#d0c9bb",
    fontSize: 8.6,
    lineHeight: 1.48,
  },

  /*
   * Roue astrologique
   */
  wheelContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 8,
  },

  wheelImage: {
    width: 470,
    height: 470,
    objectFit: "contain",
  },

  wheelMissing: {
    width: 470,
    height: 470,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "rgba(5, 15, 31, 0.82)",
    borderWidth: 0.8,
    borderColor: "#8f713a",
  },

  wheelMissingTitle: {
    fontSize: 15,
    color: "#f4c95d",
    textAlign: "center",
    marginBottom: 9,
  },

  wheelMissingText: {
    fontSize: 9.5,
    color: "#d9d2c4",
    textAlign: "center",
    lineHeight: 1.5,
  },

    /*
   * Pied de page
   */
  footer: {
    position: "absolute",
    bottom: 18,
    left: 48,
    right: 48,
    textAlign: "center",
    fontSize: 7.5,
    lineHeight: 1,
    letterSpacing: 0.4,
    color: "#a39b8b",
  },

  introConclusion: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#f4c95d",
    textAlign: "center",
    marginTop: 3,
  },

  dividerMoon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },
});
