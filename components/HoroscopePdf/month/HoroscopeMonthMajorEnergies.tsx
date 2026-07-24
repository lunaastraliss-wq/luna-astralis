import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  MonthlyMajorEnergiesResult,
} from "./buildMonthlyMajorEnergies";

type HoroscopeMonthMajorEnergiesProps = {
  majorEnergies: MonthlyMajorEnergiesResult;
  zodiacSignLabel: string;
  zodiacIconUrl?: string;
};

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 48,
    paddingRight: 52,
    paddingBottom: 58,
    paddingLeft: 52,
    backgroundColor: "#fbf7f1",
    color: "#2b2033",
    fontFamily: "Helvetica",
  },

  eyebrow: {
    marginBottom: 8,
    color: "#9a7041",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
  },

  title: {
    marginBottom: 8,
    color: "#3f2948",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.15,
    textAlign: "center",
  },

  signLabel: {
    marginBottom: 22,
    color: "#9a7041",
    fontSize: 11,
    textAlign: "center",
  },

  introduction: {
    marginBottom: 22,
    color: "#574b5d",
    fontSize: 10.5,
    lineHeight: 1.65,
    textAlign: "justify",
  },

  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    minHeight: 176,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ded0c0",
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },

  cardHeader: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardTitle: {
    width: "72%",
    color: "#493052",
    fontSize: 13,
    fontWeight: 700,
  },

  scoreBadge: {
    minWidth: 42,
    paddingTop: 5,
    paddingRight: 7,
    paddingBottom: 5,
    paddingLeft: 7,
    borderRadius: 10,
    backgroundColor: "#f1e5d4",
  },

  scoreText: {
    color: "#875f31",
    fontSize: 10,
    fontWeight: 700,
    textAlign: "center",
  },

  scoreTrack: {
    height: 5,
    marginBottom: 12,
    borderRadius: 3,
    backgroundColor: "#eee6dc",
  },

  scoreFill: {
    height: 5,
    borderRadius: 3,
    backgroundColor: "#9a7041",
  },

  description: {
    marginBottom: 10,
    color: "#5c505f",
    fontSize: 9.2,
    lineHeight: 1.5,
    textAlign: "justify",
  },

  adviceLabel: {
    marginBottom: 4,
    color: "#875f31",
    fontSize: 8.5,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  advice: {
    color: "#4e4253",
    fontSize: 9,
    lineHeight: 1.45,
  },

  synthesisBox: {
    marginTop: 4,
    padding: 17,
    borderLeftWidth: 4,
    borderLeftColor: "#9a7041",
    borderRadius: 8,
    backgroundColor: "#f3ebe1",
  },

  synthesisTitle: {
    marginBottom: 7,
    color: "#493052",
    fontSize: 12,
    fontWeight: 700,
  },

  synthesisText: {
    color: "#574b5d",
    fontSize: 9.5,
    lineHeight: 1.55,
    textAlign: "justify",
  },

  finalAdviceBox: {
    marginTop: 14,
    paddingTop: 12,
    paddingRight: 15,
    paddingBottom: 12,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#d8c4aa",
    borderRadius: 8,
  },

  finalAdviceTitle: {
    marginBottom: 5,
    color: "#875f31",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  finalAdviceText: {
    color: "#4f4454",
    fontSize: 9.5,
    lineHeight: 1.5,
  },

  footer: {
    position: "absolute",
    right: 52,
    bottom: 25,
    left: 52,
    color: "#9a8d96",
    fontSize: 8,
    textAlign: "center",
  },
});

export default function HoroscopeMonthMajorEnergies({
  majorEnergies,
  zodiacSignLabel,
}: HoroscopeMonthMajorEnergiesProps) {
  return (
    <Page
      size="A4"
      style={styles.page}
    >
      <Text style={styles.eyebrow}>
        Horoscope Premium mensuel
      </Text>

      <Text style={styles.title}>
        Les grandes énergies du mois
      </Text>

      <Text style={styles.signLabel}>
        {zodiacSignLabel}
      </Text>

      <Text style={styles.introduction}>
        {majorEnergies.introduction}
      </Text>

      <View style={styles.cardsGrid}>
        {majorEnergies.energies.map(
          (energy) => (
            <View
              key={energy.title}
              style={styles.card}
              wrap={false}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>
                  {energy.title}
                </Text>

                <View style={styles.scoreBadge}>
                  <Text style={styles.scoreText}>
                    {energy.score} %
                  </Text>
                </View>
              </View>

              <View style={styles.scoreTrack}>
                <View
                  style={[
                    styles.scoreFill,
                    {
                      width:
                        `${energy.score}%`,
                    },
                  ]}
                />
              </View>

              <Text style={styles.description}>
                {energy.description}
              </Text>

              <Text style={styles.adviceLabel}>
                Votre conseil
              </Text>

              <Text style={styles.advice}>
                {energy.advice}
              </Text>
            </View>
          ),
        )}
      </View>

      <View style={styles.synthesisBox}>
        <Text style={styles.synthesisTitle}>
          Comment ces énergies se combinent
        </Text>

        <Text style={styles.synthesisText}>
          {majorEnergies.synthesis}
        </Text>
      </View>

      <View style={styles.finalAdviceBox}>
        <Text style={styles.finalAdviceTitle}>
          Conseil astrologique
        </Text>

        <Text style={styles.finalAdviceText}>
          {majorEnergies.finalAdvice}
        </Text>
      </View>

      <Text style={styles.footer}>
        Luna Astralis • Les grandes énergies du mois
      </Text>
    </Page>
  );
}
