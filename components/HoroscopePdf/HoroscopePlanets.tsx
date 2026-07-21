import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  HOROSCOPE_ICONS,
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

const NAVY = "#06101F";
const NAVY_CARD = "#0A1729";
const NAVY_CARD_LIGHT = "#0D1B30";
const NAVY_HIGHLIGHT = "#10213A";

const GOLD = "#F4C95D";
const CREAM = "#FFF8E7";
const MUTED_CREAM = "#DDD5C6";
const SOFT_TEXT = "#B9AE98";
const DARK_GOLD = "#8F6E35";
const VERY_DARK_GOLD = "#4E412D";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingTop: 40,
    paddingHorizontal: 44,
    paddingBottom: 58,
    backgroundColor: NAVY,
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
    marginBottom: 24,
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
    fontSize: 25,
    lineHeight: 1.18,
    marginBottom: 7,
  },

  period: {
    color: MUTED_CREAM,
    fontSize: 10,
    marginBottom: 15,
  },

  titleDecoration: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },

  decorationLineLong: {
    width: 66,
    height: 1,
    backgroundColor: GOLD,
  },

  decorationLineShort: {
    width: 22,
    height: 1,
    backgroundColor: DARK_GOLD,
  },

  decorationSymbol: {
    color: GOLD,
    fontSize: 11,
    marginHorizontal: 9,
  },

  introductionCard: {
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    backgroundColor: NAVY_CARD,
    marginBottom: 16,
  },

  introductionText: {
    color: MUTED_CREAM,
    fontSize: 9.2,
    lineHeight: 1.55,
  },

  dominantCard: {
    position: "relative",
    minHeight: 170,
    paddingVertical: 18,
    paddingLeft: 108,
    paddingRight: 18,
    marginBottom: 18,
    borderRadius: 12,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD_LIGHT,
    overflow: "hidden",
  },

  dominantOrbitOne: {
    position: "absolute",
    top: -48,
    left: -50,
    width: 178,
    height: 178,
    borderRadius: 89,
    borderWidth: 0.6,
    borderColor: VERY_DARK_GOLD,
  },

  dominantOrbitTwo: {
    position: "absolute",
    top: -20,
    left: -22,
    width: 126,
    height: 126,
    borderRadius: 63,
    borderWidth: 0.7,
    borderColor: DARK_GOLD,
  },

  dominantOrbitThree: {
    position: "absolute",
    top: 8,
    left: 6,
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 0.5,
    borderColor: VERY_DARK_GOLD,
  },

  dominantPlanetCircle: {
    position: "absolute",
    top: 34,
    left: 25,
    width: 67,
    height: 67,
    borderRadius: 34,
    borderWidth: 1.1,
    borderColor: GOLD,
    backgroundColor: NAVY_HIGHLIGHT,
    alignItems: "center",
    justifyContent: "center",
  },

  dominantPlanetImage: {
    width: 43,
    height: 43,
    objectFit: "contain",
  },

  dominantFallback: {
    color: GOLD,
    fontSize: 18,
  },

  dominantLabel: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  dominantHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  dominantPlanetName: {
    color: GOLD,
    fontSize: 15,
  },

  dominantAspectBadge: {
    maxWidth: 105,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 11,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  dominantAspectText: {
    color: SOFT_TEXT,
    fontSize: 6.5,
    textAlign: "center",
  },

  dominantSign: {
    color: MUTED_CREAM,
    fontSize: 8,
    marginBottom: 8,
  },

  dominantTitle: {
    color: CREAM,
    fontSize: 11.5,
    lineHeight: 1.35,
    marginBottom: 7,
  },

  dominantDescription: {
    color: MUTED_CREAM,
    fontSize: 8.3,
    lineHeight: 1.5,
    marginBottom: 9,
  },

  dominantAdvice: {
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: DARK_GOLD,
  },

  dominantAdviceLabel: {
    color: GOLD,
    fontSize: 6.5,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  dominantAdviceText: {
    color: CREAM,
    fontSize: 7.7,
    lineHeight: 1.4,
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionHeadingLine: {
    width: 28,
    height: 1,
    backgroundColor: GOLD,
    marginRight: 9,
  },

  sectionHeadingSymbol: {
    color: GOLD,
    fontSize: 9,
    marginRight: 8,
  },

  sectionHeadingText: {
    color: GOLD,
    fontSize: 8.5,
    letterSpacing: 1.7,
    textTransform: "uppercase",
  },

  orbitList: {
    position: "relative",
    paddingLeft: 25,
  },

  orbitLine: {
    position: "absolute",
    top: 7,
    bottom: 7,
    left: 11,
    width: 0.7,
    backgroundColor: DARK_GOLD,
  },

  influenceRow: {
    position: "relative",
    flexDirection: "row",
    marginBottom: 11,
  },

  orbitPoint: {
    position: "absolute",
    top: 19,
    left: -20,
    width: 13,
    height: 13,
    borderRadius: 7,
    borderWidth: 0.8,
    borderColor: GOLD,
    backgroundColor: NAVY,
    alignItems: "center",
    justifyContent: "center",
  },

  orbitPointInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: GOLD,
  },

  smallPlanetCircle: {
    width: 49,
    height: 49,
    borderRadius: 25,
    borderWidth: 0.8,
    borderColor: DARK_GOLD,
    backgroundColor: NAVY_HIGHLIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 4,
  },

  smallPlanetImage: {
    width: 31,
    height: 31,
    objectFit: "contain",
  },

  smallPlanetFallback: {
    color: GOLD,
    fontSize: 12,
  },

  influenceCard: {
    flex: 1,
    minHeight: 91,
    paddingVertical: 11,
    paddingHorizontal: 13,
    borderRadius: 9,
    borderWidth: 0.6,
    borderColor: VERY_DARK_GOLD,
    backgroundColor: NAVY_CARD,
  },

  influenceHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  influencePlanetName: {
    color: GOLD,
    fontSize: 9.5,
  },

  influenceAspectBadge: {
    maxWidth: 90,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 9,
    borderWidth: 0.4,
    borderColor: DARK_GOLD,
  },

  influenceAspectText: {
    color: SOFT_TEXT,
    fontSize: 5.8,
    textAlign: "center",
  },

  influenceSign: {
    color: SOFT_TEXT,
    fontSize: 6.8,
    marginBottom: 5,
  },

  influenceTitle: {
    color: CREAM,
    fontSize: 8.5,
    lineHeight: 1.3,
    marginBottom: 4,
  },

  influenceDescription: {
    color: MUTED_CREAM,
    fontSize: 7,
    lineHeight: 1.42,
    marginBottom: 5,
  },

  influenceAdvice: {
    paddingTop: 5,
    borderTopWidth: 0.4,
    borderTopColor: VERY_DARK_GOLD,
  },

  influenceAdviceLabel: {
    color: GOLD,
    fontSize: 5.7,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  influenceAdviceText: {
    color: CREAM,
    fontSize: 6.6,
    lineHeight: 1.35,
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

  emptyCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 1,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  emptySymbol: {
    color: GOLD,
    fontSize: 19,
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

function normalizePlanetName(
  influence: HoroscopePlanetaryInfluence,
) {
  if (
    typeof influence.planet === "string" &&
    influence.planet.trim()
  ) {
    return influence.planet.trim();
  }

  return "Influence planétaire";
}

function normalizePlanetKey(planet?: string) {
  if (typeof planet !== "string") {
    return "";
  }

  return planet
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getPlanetIconUrl(planet?: string) {
  const normalized = normalizePlanetKey(planet);

  return HOROSCOPE_ICONS[normalized as keyof typeof HOROSCOPE_ICONS] ?? null;
}

function getPlanetFallback(planet?: string) {
  const normalized = normalizePlanetKey(planet);

  const fallbacks: Record<string, string> = {
    soleil: "SO",
    sun: "SO",

    lune: "LU",
    moon: "LU",

    mercure: "ME",
    mercury: "ME",

    venus: "VE",

    mars: "MA",

    jupiter: "JU",

    saturne: "SA",
    saturn: "SA",

    uranus: "UR",

    neptune: "NE",

    pluton: "PL",
    pluto: "PL",

    chiron: "CH",

    "noeud nord": "NN",
    "north node": "NN",

    "noeud sud": "NS",
    "south node": "NS",
  };

  return fallbacks[normalized] ?? "AS";
}

function DominantInfluence({
  influence,
}: {
  influence: HoroscopePlanetaryInfluence;
}) {
  const planetName = normalizePlanetName(influence);
  const planetIconUrl = getPlanetIconUrl(planetName);
  const fallback = getPlanetFallback(planetName);

  return (
    <View style={styles.dominantCard} wrap={false}>
      <View style={styles.dominantOrbitOne} />
      <View style={styles.dominantOrbitTwo} />
      <View style={styles.dominantOrbitThree} />

      <View style={styles.dominantPlanetCircle}>
        {planetIconUrl ? (
          <Image
            src={planetIconUrl}
            style={styles.dominantPlanetImage}
          />
        ) : (
          <Text style={styles.dominantFallback}>
            {fallback}
          </Text>
        )}
      </View>

      <Text style={styles.dominantLabel}>
        Influence dominante
      </Text>

      <View style={styles.dominantHeader}>
        <Text style={styles.dominantPlanetName}>
          {planetName}
        </Text>

        {influence.aspect ? (
          <View style={styles.dominantAspectBadge}>
            <Text style={styles.dominantAspectText}>
              {influence.aspect}
            </Text>
          </View>
        ) : null}
      </View>

      {influence.sign ? (
        <Text style={styles.dominantSign}>
          En {influence.sign}
        </Text>
      ) : null}

      <Text style={styles.dominantTitle}>
        {influence.title}
      </Text>

      <Text style={styles.dominantDescription}>
        {influence.description}
      </Text>

      {influence.advice ? (
        <View style={styles.dominantAdvice}>
          <Text style={styles.dominantAdviceLabel}>
            Votre clé astrologique
          </Text>

          <Text style={styles.dominantAdviceText}>
            {influence.advice}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

function SecondaryInfluence({
  influence,
}: {
  influence: HoroscopePlanetaryInfluence;
}) {
  const planetName = normalizePlanetName(influence);
  const planetIconUrl = getPlanetIconUrl(planetName);
  const fallback = getPlanetFallback(planetName);

  return (
    <View style={styles.influenceRow} wrap={false}>
      <View style={styles.orbitPoint}>
        <View style={styles.orbitPointInner} />
      </View>

      <View style={styles.smallPlanetCircle}>
        {planetIconUrl ? (
          <Image
            src={planetIconUrl}
            style={styles.smallPlanetImage}
          />
        ) : (
          <Text style={styles.smallPlanetFallback}>
            {fallback}
          </Text>
        )}
      </View>

      <View style={styles.influenceCard}>
        <View style={styles.influenceHeader}>
          <Text style={styles.influencePlanetName}>
            {planetName}
          </Text>

          {influence.aspect ? (
            <View style={styles.influenceAspectBadge}>
              <Text style={styles.influenceAspectText}>
                {influence.aspect}
              </Text>
            </View>
          ) : null}
        </View>

        {influence.sign ? (
          <Text style={styles.influenceSign}>
            En {influence.sign}
          </Text>
        ) : null}

        <Text style={styles.influenceTitle}>
          {influence.title}
        </Text>

        <Text style={styles.influenceDescription}>
          {influence.description}
        </Text>

        {influence.advice ? (
          <View style={styles.influenceAdvice}>
            <Text style={styles.influenceAdviceLabel}>
              Conseil
            </Text>

            <Text style={styles.influenceAdviceText}>
              {influence.advice}
            </Text>
          </View>
        ) : null}
      </View>
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
    ? content.planetaryInfluences
        .filter(
          (
            influence,
          ): influence is HoroscopePlanetaryInfluence =>
            Boolean(influence),
        )
        .slice(0, 6)
    : [];

  const dominantInfluence = influences[0];
  const secondaryInfluences = influences.slice(1);

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

        <View style={styles.titleDecoration}>
          <View style={styles.decorationLineLong} />

          <Text style={styles.decorationSymbol}>
            ✦
          </Text>

          <View style={styles.decorationLineShort} />
        </View>

        {content.planetaryIntroduction ? (
          <View
            style={styles.introductionCard}
            wrap={false}
          >
            <Text style={styles.introductionText}>
              {content.planetaryIntroduction}
            </Text>
          </View>
        ) : null}

        {dominantInfluence ? (
          <>
            <DominantInfluence
              influence={dominantInfluence}
            />

            {secondaryInfluences.length > 0 ? (
              <>
                <View style={styles.sectionHeading}>
                  <View style={styles.sectionHeadingLine} />

                  <Text style={styles.sectionHeadingSymbol}>
                    ✦
                  </Text>

                  <Text style={styles.sectionHeadingText}>
                    Les autres mouvements célestes
                  </Text>
                </View>

                <View style={styles.orbitList}>
                  <View style={styles.orbitLine} />

                  {secondaryInfluences.map(
                    (influence, index) => (
                      <SecondaryInfluence
                        key={`${influence.planet}-${influence.title}-${index}`}
                        influence={influence}
                      />
                    ),
                  )}
                </View>
              </>
            ) : null}
          </>
        ) : (
          <View style={styles.emptyCard}>
            <View style={styles.emptyCircle}>
              <Text style={styles.emptySymbol}>
                ✦
              </Text>
            </View>

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
