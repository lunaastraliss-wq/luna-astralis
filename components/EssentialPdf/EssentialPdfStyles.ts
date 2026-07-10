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
