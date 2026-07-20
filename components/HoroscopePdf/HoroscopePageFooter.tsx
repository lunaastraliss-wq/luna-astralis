import {
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  HoroscopeFooterProps,
} from "./HoroscopePdfTypes";

const GOLD = "#F4C95D";
const MUTED_TEXT = "#B9AE98";
const LINE = "#4E412D";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 42,
    right: 42,
    bottom: 22,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingTop: 8,
    borderTopWidth: 0.6,
    borderTopColor: LINE,
  },

  brand: {
    fontSize: 8,
    color: GOLD,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },

  page: {
    fontSize: 8,
    color: MUTED_TEXT,
  },
});

export default function HoroscopePageFooter({
  hidden = false,
}: HoroscopeFooterProps) {
  if (hidden) {
    return null;
  }

  return (
    <View style={styles.footer} fixed>
      <Text style={styles.brand}>
        Luna Astralis
      </Text>

      <Text
        style={styles.page}
        render={({ pageNumber, totalPages }) =>
          `${pageNumber} / ${totalPages}`
        }
      />
    </View>
  );
}
