import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  HOROSCOPE_LOGO_URL,
} from "./HoroscopePdfAssets";

import HoroscopePageFooter from "./HoroscopePageFooter";
import HoroscopeStarBackground from "./HoroscopeStarBackground";

import type {
  HoroscopeSectionProps,
} from "./HoroscopePdfTypes";

import {
  formatHoroscopePeriodLabel,
  getHoroscopeZodiacIconUrl,
} from "./HoroscopePdfUtils";

const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 40,
    paddingHorizontal: 44,
    paddingBottom: 58,
    backgroundColor: "#06101F",
    fontFamily: "Helvetica",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 27,
  },

  logo: {
    width: 110,
    height: 40,
    objectFit: "contain",
  },

  signBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 18,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  signIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
    marginRight: 7,
  },

  signName: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.4,
    textTransform: "uppercase",
    marginBottom: 10,
  },

  title: {
    color: CREAM,
    fontSize: 26,
    lineHeight: 1.2,
    marginBottom: 8,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 22,
  },

  introductionCard: {
    paddingVertical: 17,
    paddingHorizontal: 19,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 21,
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.65,
  },

  sectionLabel: {
    color: GOLD,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  luckyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  luckyCard: {
    width: "48.5%",
    minHeight: 92,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderRadius: 9,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  cardLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  cardValue: {
    color: GOLD,
    fontSize: 12,
    lineHeight: 1.35,
    marginBottom: 5,
  },

  cardDescription: {
    color: MUTED_CREAM,
    fontSize: 7.8,
    lineHeight: 1.45,
  },

  numbersCard: {
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 9,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  numbersHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  numbersTitle: {
    color: CREAM,
    fontSize: 11,
  },

  numbersRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  numberCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
    marginBottom: 7,
  },

  numberText: {
    color: GOLD,
    fontSize: 11,
  },

  quoteCard: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 18,
  },

  quoteLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 9,
    textAlign: "center",
  },

  quoteText: {
    color: CREAM,
    fontSize: 11,
    lineHeight: 1.6,
    fontStyle: "italic",
    textAlign: "center",
  },

  reminderCard: {
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  reminderLabel: {
    color: GOLD,
    fontSize: 7.5,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  reminderText: {
    color: MUTED_CREAM,
    fontSize: 8.5,
    lineHeight: 1.55,
  },
});

export default function HoroscopeLucky({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const lucky = content.lucky;

  const luckyNumbers = Array.isArray(lucky.numbers)
    ? lucky.numbers.slice(0, 6)
    : [];

  const cards = [
    {
      label: "Couleur favorable",
      value: lucky.color,
      description:
        "Une teinte à privilégier dans vos vêtements, vos accessoires ou votre environnement.",
    },
    {
      label: "Jour favorable",
      value: lucky.day,
      description:
        "Une journée propice pour agir, communiquer ou prendre une initiative.",
    },
    {
      label: "Pierre symbolique",
      value: lucky.stone,
      description:
        "Une pierre associée aux énergies astrologiques de votre période.",
    },
    {
      label: "Élément dominant",
      value: lucky.element,
      description:
        "L’énergie élémentaire qui peut soutenir votre équilibre et votre intuition.",
    },
    {
      label: "Planète favorable",
      value: lucky.planet,
      description:
        "L’influence céleste à observer plus particulièrement durant cette période.",
    },
    {
      label: "Moment favorable",
      value: lucky.time,
      description:
        "Un moment de la journée où votre énergie pourrait être plus fluide.",
    },
  ].filter(
    (item) =>
      typeof item.value === "string" &&
      item.value.trim().length > 0,
  );

  return (
    <Page size="A4" style={styles.page}>
      <HoroscopeStarBackground />

      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            src={HOROSCOPE_LOGO_URL}
            style={styles.logo}
          />

          <View style={styles.signBadge}>
            <Image
              src={zodiacIconUrl}
              style={styles.signIcon}
            />

            <Text style={styles.signName}>
              {identity.zodiacSignLabel}
            </Text>
          </View>
        </View>

        <Text style={styles.eyebrow}>
          Vos repères favorables
        </Text>

        <Text style={styles.title}>
          Chance, intuition et symboles
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        {lucky.introduction ? (
          <View style={styles.introductionCard} wrap={false}>
            <Text style={styles.introductionText}>
              {lucky.introduction}
            </Text>
          </View>
        ) : null}

        <Text style={styles.sectionLabel}>
          Vos symboles de la période
        </Text>

        <View style={styles.luckyGrid}>
          {cards.map((card) => (
            <View
              key={card.label}
              style={styles.luckyCard}
              wrap={false}
            >
              <Text style={styles.cardLabel}>
                {card.label}
              </Text>

              <Text style={styles.cardValue}>
                {card.value}
              </Text>

              <Text style={styles.cardDescription}>
                {card.description}
              </Text>
            </View>
          ))}
        </View>

        {luckyNumbers.length > 0 ? (
          <View style={styles.numbersCard} wrap={false}>
            <View style={styles.numbersHeader}>
              <Text style={styles.numbersTitle}>
                Vos nombres favorables
              </Text>
            </View>

            <View style={styles.numbersRow}>
              {luckyNumbers.map((number, index) => (
                <View
                  key={`${number}-${index}`}
                  style={styles.numberCircle}
                >
                  <Text style={styles.numberText}>
                    {number}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {lucky.quote ? (
          <View style={styles.quoteCard} wrap={false}>
            <Text style={styles.quoteLabel}>
              Votre phrase d’inspiration
            </Text>

            <Text style={styles.quoteText}>
              « {lucky.quote} »
            </Text>
          </View>
        ) : null}

        <View style={styles.reminderCard} wrap={false}>
          <Text style={styles.reminderLabel}>
            À retenir
          </Text>

          <Text style={styles.reminderText}>
            Ces éléments sont des repères symboliques destinés à
            accompagner votre intuition. Ils ne garantissent pas un
            résultat précis, mais peuvent vous aider à créer un rituel
            personnel et à rester attentive aux occasions favorables.
          </Text>
        </View>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
