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
  getHoroscopeFirstName,
  getHoroscopeZodiacIconUrl,
} from "./HoroscopePdfUtils";

const NAVY_CARD = "#0A1729";
const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 42,
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
    marginBottom: 34,
  },

  logo: {
    width: 112,
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
    width: 23,
    height: 23,
    objectFit: "contain",
    marginRight: 8,
  },

  signName: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  eyebrow: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    marginBottom: 11,
  },

  title: {
    color: CREAM,
    fontSize: 27,
    lineHeight: 1.2,
    marginBottom: 12,
  },

  intro: {
    color: MUTED_CREAM,
    fontSize: 11,
    lineHeight: 1.65,
    marginBottom: 27,
  },

  mainCard: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 24,
  },

  cardLabel: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  welcomeText: {
    color: CREAM,
    fontSize: 11,
    lineHeight: 1.75,
    textAlign: "justify",
  },

  quoteCard: {
    paddingVertical: 19,
    paddingHorizontal: 24,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: "#0D1B30",
    marginBottom: 24,
  },

  quote: {
    color: CREAM,
    fontSize: 12,
    lineHeight: 1.6,
    fontStyle: "italic",
    textAlign: "center",
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  detailCard: {
    flex: 1,
    minHeight: 74,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  detailLabel: {
    color: SOFT_TEXT,
    fontSize: 7,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  detailValue: {
    color: CREAM,
    fontSize: 10,
    lineHeight: 1.4,
  },

  bottomText: {
    marginTop: 24,
    color: MUTED_CREAM,
    fontSize: 9,
    lineHeight: 1.6,
    textAlign: "center",
  },
});

export default function HoroscopeWelcome({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const firstName = getHoroscopeFirstName(identity.firstName);
  const periodLabel = formatHoroscopePeriodLabel(period);
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const welcomeIntroduction =
    identity.firstName
      ? `${firstName}, ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.`
      : "Ce rapport a été préparé pour vous accompagner durant cette période et vous aider à mieux comprendre les énergies qui vous entourent.";

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
          Votre horoscope personnalisé
        </Text>

        <Text style={styles.title}>
          Bienvenue dans votre guidance astrologique
        </Text>

        <Text style={styles.intro}>
          {welcomeIntroduction}
        </Text>

        <View style={styles.mainCard} wrap={false}>
          <Text style={styles.cardLabel}>
            Votre message d’introduction
          </Text>

          <Text style={styles.welcomeText}>
            {content.welcomeText}
          </Text>
        </View>

        {content.openingQuote ? (
          <View style={styles.quoteCard} wrap={false}>
            <Text style={styles.quote}>
              « {content.openingQuote} »
            </Text>
          </View>
        ) : null}

        <View style={styles.detailsRow} wrap={false}>
          <View style={styles.detailCard}>
            <Text style={styles.detailLabel}>
              Signe astrologique
            </Text>

            <Text style={styles.detailValue}>
              {identity.zodiacSignLabel}
            </Text>
          </View>

          <View style={styles.detailCard}>
            <Text style={styles.detailLabel}>
              Période analysée
            </Text>

            <Text style={styles.detailValue}>
              {periodLabel}
            </Text>
          </View>

          <View style={styles.detailCard}>
            <Text style={styles.detailLabel}>
              Rapport
            </Text>

            <Text style={styles.detailValue}>
              {content.reportTitle}
            </Text>
          </View>
        </View>

        <Text style={styles.bottomText}>
          Prenez le temps de lire chaque section avec attention.
          Votre horoscope met en lumière des tendances et des
          possibilités, tout en vous laissant libre de vos décisions.
        </Text>
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
