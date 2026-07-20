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
  HoroscopePlanetaryInfluence,
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
    marginBottom: 26,
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
    marginBottom: 19,
  },

  introductionCard: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 20,
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
  },

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  planetCard: {
    width: "48.5%",
    minHeight: 194,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 13,
    borderRadius: 9,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
  },

  planetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  planetName: {
    color: GOLD,
    fontSize: 11,
  },

  aspectBadge: {
    maxWidth: 100,
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  aspectText: {
    color: SOFT_TEXT,
    fontSize: 6.5,
    textAlign: "center",
  },

  signText: {
    color: MUTED_CREAM,
    fontSize: 8,
    marginBottom: 9,
  },

  cardTitle: {
    color: CREAM,
    fontSize: 10,
    lineHeight: 1.35,
    marginBottom: 8,
  },

  description: {
    color: MUTED_CREAM,
    fontSize: 8.2,
    lineHeight: 1.55,
    textAlign: "justify",
    marginBottom: 10,
  },

  adviceBox: {
    paddingTop: 9,
    borderTopWidth: 0.5,
    borderTopColor: DARK_GOLD,
  },

  adviceLabel: {
    color: GOLD,
    fontSize: 6.8,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  adviceText: {
    color: CREAM,
    fontSize: 7.8,
    lineHeight: 1.45,
  },

  emptyCard: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
    alignItems: "center",
  },

  emptyTitle: {
    color: GOLD,
    fontSize: 12,
    marginBottom: 9,
  },

  emptyText: {
    color: MUTED_CREAM,
    fontSize: 9.5,
    lineHeight: 1.6,
    textAlign: "center",
  },
});

function PlanetCard({
  influence,
}: {
  influence: HoroscopePlanetaryInfluence;
}) {
  const planetName =
    typeof influence.planet === "string" &&
    influence.planet.trim()
      ? influence.planet.trim()
      : "Influence planétaire";

  return (
    <View style={styles.planetCard} wrap={false}>
      <View style={styles.planetHeader}>
        <Text style={styles.planetName}>
          {planetName}
        </Text>

        {influence.aspect ? (
          <View style={styles.aspectBadge}>
            <Text style={styles.aspectText}>
              {influence.aspect}
            </Text>
          </View>
        ) : null}
      </View>

      {influence.sign ? (
        <Text style={styles.signText}>
          En {influence.sign}
        </Text>
      ) : null}

      <Text style={styles.cardTitle}>
        {influence.title}
      </Text>

      <Text style={styles.description}>
        {influence.description}
      </Text>

      {influence.advice ? (
        <View style={styles.adviceBox}>
          <Text style={styles.adviceLabel}>
            Conseil
          </Text>

          <Text style={styles.adviceText}>
            {influence.advice}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

export default function HoroscopePlanets({
  identity,
  period,
  content,
}: HoroscopeSectionProps) {
  const zodiacIconUrl = getHoroscopeZodiacIconUrl(
    identity.zodiacSign,
  );

  const periodLabel = formatHoroscopePeriodLabel(period);

  const influences = Array.isArray(
    content.planetaryInfluences,
  )
    ? content.planetaryInfluences.slice(0, 6)
    : [];

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
          Influences célestes
        </Text>

        <Text style={styles.title}>
          Les planètes qui vous accompagnent
        </Text>

        <Text style={styles.period}>
          {periodLabel}
        </Text>

        {content.planetaryIntroduction ? (
          <View style={styles.introductionCard} wrap={false}>
            <Text style={styles.introductionText}>
              {content.planetaryIntroduction}
            </Text>
          </View>
        ) : null}

        {influences.length > 0 ? (
          <View style={styles.cardsContainer}>
            {influences.map((influence, index) => (
              <PlanetCard
                key={`${influence.planet}-${influence.title}-${index}`}
                influence={influence}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              Une énergie céleste subtile
            </Text>

            <Text style={styles.emptyText}>
              Les influences planétaires de cette période
              seront ajoutées ici lors de la génération de
              votre horoscope personnalisé.
            </Text>
          </View>
        )}
      </View>

      <HoroscopePageFooter />
    </Page>
  );
}
