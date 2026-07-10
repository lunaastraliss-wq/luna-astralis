import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type { EssentialPdfProps } from "./EssentialPdfTypes";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 40,
  },

  testContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#ff0000",
  },

  testText: {
    fontSize: 38,
    color: "#ff0000",
    textAlign: "center",
  },

  testSubtext: {
    marginTop: 20,
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
});

export default function PdfCover(
  _props: EssentialPdfProps
) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.testContainer}>
        <Text style={styles.testText}>
          TEST PDF COVER
        </Text>

        <Text style={styles.testSubtext}>
          Ce fichier PdfCover est bien utilisé.
        </Text>
      </View>
    </Page>
  );
}
