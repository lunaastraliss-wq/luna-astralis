import { StyleSheet } from "@react-pdf/renderer";

export const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 44,
    paddingHorizontal: 46,
    backgroundColor: "#0b1124",
    color: "#fff8e7",
    fontSize: 11,
    lineHeight: 1.55,
  },

  coverLogo: {
    width: 190,
    height: 70,
    objectFit: "contain",
    marginBottom: 20,
  },

  pageLogo: {
    width: 112,
    height: 34,
    objectFit: "contain",
  },

  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  pageHeaderLine: {
    width: 250,
    height: 1,
    backgroundColor: "#39415d",
  },

  title: {
    fontSize: 30,
    color: "#fff8e7",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 14,
    color: "#f4c95d",
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 22,
    color: "#f4c95d",
    marginBottom: 15,
  },

  sectionIntro: {
    fontSize: 11,
    color: "#e9e4d8",
    lineHeight: 1.55,
    marginBottom: 18,
  },

  text: {
    fontSize: 11,
    color: "#fff8e7",
    marginBottom: 10,
    lineHeight: 1.55,
  },

  smallText: {
    fontSize: 9.5,
    color: "#d9d4c7",
    lineHeight: 1.5,
  },

  box: {
    borderWidth: 1,
    borderColor: "#f4c95d",
    padding: 16,
    marginTop: 12,
    marginBottom: 18,
    backgroundColor: "#0d152d",
  },

  softBox: {
    borderWidth: 1,
    borderColor: "#39415d",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#111a34",
  },

  informationLine: {
    fontSize: 11,
    color: "#fff8e7",
    marginBottom: 6,
  },

  quoteBox: {
    borderLeftWidth: 3,
    borderLeftColor: "#f4c95d",
    backgroundColor: "#111a34",
    padding: 18,
    marginTop: 16,
    marginBottom: 18,
  },

  quoteText: {
    fontSize: 15,
    color: "#fff8e7",
    lineHeight: 1.5,
  },

  centeredHeader: {
    alignItems: "center",
    marginBottom: 24,
  },

  pageKicker: {
    color: "#f4c95d",
    fontSize: 9,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 10,
  },

  largePageTitle: {
    color: "#fff8e7",
    fontSize: 27,
    lineHeight: 1.2,
    textAlign: "center",
  },

  decorativeDivider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 12,
  },

  dividerLine: {
    width: 55,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerSymbol: {
    color: "#f4c95d",
    fontSize: 13,
    marginHorizontal: 10,
  },

  pageLead: {
    maxWidth: 420,
    color: "#d9d4c7",
    fontSize: 10.5,
    lineHeight: 1.55,
    textAlign: "center",
  },

  contentCard: {
    padding: 24,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
    marginBottom: 20,
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 10.5,
    lineHeight: 1.6,
    marginBottom: 12,
  },

  paragraphLast: {
    color: "#e9e4d8",
    fontSize: 10.5,
    lineHeight: 1.6,
  },

  highlightQuote: {
    flexDirection: "row",
    padding: 18,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  quoteMark: {
    color: "#f4c95d",
    fontSize: 34,
    lineHeight: 1,
    marginRight: 12,
  },

  quoteContent: {
    flexGrow: 1,
  },

  highlightQuoteText: {
    color: "#f4c95d",
    fontSize: 12.5,
    lineHeight: 1.5,
  },

  quoteSignature: {
    color: "#9da4b7",
    fontSize: 8,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginTop: 9,
  },

  summaryGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  summaryCard: {
    width: "31.5%",
    minHeight: 220,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  summaryIconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
    marginBottom: 12,
  },

  summaryIcon: {
    width: 28,
    height: 28,
    objectFit: "contain",
  },

  summaryLabel: {
    color: "#9da4b7",
    fontSize: 8.5,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 7,
    textAlign: "center",
  },

  summaryValue: {
    color: "#fff8e7",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  summaryDivider: {
    width: 38,
    height: 1,
    backgroundColor: "#8f793c",
    marginBottom: 10,
  },

  summaryMeaning: {
    color: "#f4c95d",
    fontSize: 10.5,
    lineHeight: 1.4,
    marginBottom: 8,
    textAlign: "center",
  },

  summaryDescription: {
    color: "#bfc5d5",
    fontSize: 8.8,
    lineHeight: 1.45,
    textAlign: "center",
  },

  summarySynthesis: {
    flexDirection: "row",
    padding: 22,
    marginBottom: 16,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  synthesisBadge: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
    marginRight: 16,
  },

  synthesisBadgeText: {
    color: "#f4c95d",
    fontSize: 18,
  },

  synthesisContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  synthesisKicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  synthesisTitle: {
    color: "#fff8e7",
    fontSize: 15,
    lineHeight: 1.3,
    marginBottom: 10,
  },

  synthesisText: {
    color: "#d9d4c7",
    fontSize: 9.5,
    lineHeight: 1.55,
    marginBottom: 8,
  },

  synthesisTextLast: {
    color: "#d9d4c7",
    fontSize: 9.5,
    lineHeight: 1.55,
  },

  summaryNote: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  summaryNoteSymbol: {
    color: "#f4c95d",
    fontSize: 18,
    marginRight: 12,
  },

  summaryNoteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 9,
    lineHeight: 1.5,
  },

  wheelContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 8,
  },

  wheelImage: {
    width: 455,
    height: 455,
    objectFit: "contain",
  },

  wheelMissing: {
    width: 510,
    height: 510,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  wheelMissingTitle: {
    fontSize: 15,
    color: "#f4c95d",
    textAlign: "center",
    marginBottom: 10,
  },

  wheelMissingText: {
    fontSize: 10,
    color: "#d9d4c7",
    textAlign: "center",
    lineHeight: 1.5,
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 46,
    right: 46,
    textAlign: "center",
    fontSize: 8,
    color: "#8f96aa",
  },
});
