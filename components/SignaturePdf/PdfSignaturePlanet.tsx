import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
./Pr
import { PLANET_ICONS } from "./SignaturePdfAssets";
import { pdfStyles } from "./SignaturePdfStyles";

import type {
  PremiumPdfPlanetProps,
} from "./SignaturePdfTypes";

import {
  PLANET_FR,
  PLANET_MEANINGS,
} from "./PlanetConstants";

import {
  FALLBACK_ENERGY,
  FALLBACK_HOUSE_TEXT,
} from "./PlanetFallbacks";

import {
  getEnglishSignKey,
  getPlanetData,
  getPlanetDegree,
  getPlanetHouse,
  getPlanetSign,
  getPositionLine,
  getSafeItems,
  translateSign,
} from "./PlanetUtils";

import {
  getPremiumPlanetSignContent,
} from "./PremiumPlanetSignTexts";

import {
  getHouseDisplayName,
  getPremiumPlanetHouseContent,
} from "./PremiumPlanetHouseTexts";

import {
  getPremiumPlanetStrengths,
} from "./PremiumPlanetStrengths";

import {
  getPremiumPlanetChallenges,
} from "./PremiumPlanetChallenges";

import {
  getPremiumPlanetEvolution,
} from "./PremiumPlanetEvolution";

import {
  getPremiumPlanetQuote,
} from "./PremiumPlanetQuotes";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },

  header: {
    alignItems: "center",
    marginBottom: 8,
  },

  premiumBadge: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,
    marginBottom: 6,
    backgroundColor: "#0b1124",
    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  premiumBadgeText: {
    color: "#f4c95d",
    fontSize: 6.4,
    letterSpacing: 1.7,
    textTransform: "uppercase",
    textAlign: "center",
  },

  kicker: {
    color: "#9da4b7",
    fontSize: 7.2,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  title: {
    color: "#fff8e7",
    fontSize: 21,
    lineHeight: 1.15,
    textAlign: "center",
  },

  titleAccent: {
    color: "#f4c95d",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },

  dividerLine: {
    width: 46,
    height: 0.7,
    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 17,
    height: 17,
    objectFit: "contain",
    marginHorizontal: 9,
  },

  hero: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 70,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    marginBottom: 7,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  heroAccentTop: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 92,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  heroAccentBottom: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 70,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  icon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },

  watermark: {
    position: "absolute",
    top: 0,
    right: 12,
    width: 76,
    height: 76,
    objectFit: "contain",
    opacity: 0.035,
  },

  heroContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  heroLabel: {
    color: "#9da4b7",
    fontSize: 6.8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 3,
  },

  heroPlanet: {
    color: "#fff8e7",
    fontSize: 16.5,
    marginBottom: 2,
  },

  heroPosition: {
    color: "#f4c95d",
    fontSize: 10.5,
    marginBottom: 3,
  },

  heroMeaning: {
    color: "#bfc5d5",
    fontSize: 7.3,
    lineHeight: 1.25,
  },

  sectionCard: {
    position: "relative",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 14,
    marginBottom: 7,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  sectionCardGold: {
    borderColor: "#8f793c",
  },

  sectionAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 66,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  sectionNumber: {
    width: 21,
    height: 21,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: "#0b1124",
    borderWidth: 0.8,
    borderColor: "#8f793c",
  },

  sectionNumberText: {
    color: "#f4c95d",
    fontSize: 6.3,
  },

  sectionTitle: {
    color: "#f4c95d",
    fontSize: 7.6,
    letterSpacing: 1.15,
    textTransform: "uppercase",
  },

  houseLabel: {
    color: "#fff8e7",
    fontSize: 10.5,
    marginBottom: 5,
  },

  bodyText: {
    color: "#e9e4d8",
    fontSize: 8.15,
    lineHeight: 1.38,
    textAlign: "justify",
  },

  qualitiesRow: {
    flexDirection: "row",
    marginBottom: 5,
  },

  qualitiesColumn: {
    flexGrow: 1,
    flexBasis: 0,
  },

  qualitiesColumnLeft: {
    marginRight: 7,
  },

  qualitiesCard: {
    paddingTop: 7,
    paddingBottom: 6,
    paddingHorizontal: 11,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  qualitiesTitle: {
    color: "#f4c95d",
    fontSize: 7.2,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  qualityItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 17,
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 7,
    marginBottom: 4,
    backgroundColor: "#111a34",
    borderWidth: 0.7,
    borderColor: "#39415d",
  },

  qualityItemLast: {
    marginBottom: 0,
  },

  strengthSymbol: {
    width: 13,
    color: "#f4c95d",
    fontSize: 8,
    marginRight: 4,
  },

  challengeSymbol: {
    width: 13,
    color: "#c6a967",
    fontSize: 9,
    marginRight: 4,
  },

  qualityText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#d8d4ca",
    fontSize: 7.3,
    lineHeight: 1.18,
  },

  evolutionCard: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 14,
    marginBottom: 7,
    backgroundColor: "#0d152d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#39415d",
    borderRightColor: "#39415d",
    borderBottomColor: "#39415d",
  },

  evolutionTitle: {
    color: "#f4c95d",
    fontSize: 7.5,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  quoteCard: {
    position: "relative",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 18,
    marginBottom: 28,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  quoteMark: {
    position: "absolute",
    top: 0,
    left: 10,
    color: "#f4c95d",
    opacity: 0.22,
    fontSize: 27,
  },

  quoteLabel: {
    color: "#9da4b7",
    fontSize: 6.3,
    letterSpacing: 1.25,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  quoteText: {
    maxWidth: 420,
    color: "#fff8e7",
    fontSize: 8.5,
    lineHeight: 1.38,
    textAlign: "center",
  },

  quoteAccent: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 74,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },
});

function getEnergyText(
  planet: string,
  sign: string
): string {
  const content =
    getPremiumPlanetSignContent(
      planet,
      sign
    );

  if (
    typeof content?.energy === "string" &&
    content.energy.trim().length > 0
  ) {
    return content.energy.trim();
  }

  return (
    FALLBACK_ENERGY[planet] ||
    "Cette position révèle une dimension importante de votre personnalité et de votre évolution."
  );
}

function getHouseText(
  planet: string,
  house: number | null
): string {
  const content =
    getPremiumPlanetHouseContent(
      planet,
      house
    );

  if (
    typeof content?.influence === "string" &&
    content.influence.trim().length > 0
  ) {
    return content.influence.trim();
  }

  if (house === null) {
    return (
      "La maison astrologique de cette planète n’est pas disponible " +
      "dans les données du thème. L’interprétation repose donc " +
      "principalement sur la planète et son signe."
    );
  }

  return (
    FALLBACK_HOUSE_TEXT[planet] ||
    "La maison astrologique indique le domaine de vie dans lequel cette énergie cherche à s’exprimer."
  );
}

function getPlanetStrengthItems(
  planet: string,
  sign: string
): string[] {
  const signContent =
    getPremiumPlanetSignContent(
      planet,
      sign
    );

  const signStrengths =
    getSafeItems(
      signContent?.strengths
    );

  if (signStrengths.length > 0) {
    return signStrengths;
  }

  return getSafeItems(
    getPremiumPlanetStrengths(
      planet,
      sign
    )
  );
}

function getPlanetChallengeItems(
  planet: string,
  sign: string
): string[] {
  const signContent =
    getPremiumPlanetSignContent(
      planet,
      sign
    );

  const signChallenges =
    getSafeItems(
      signContent?.challenges
    );

  if (signChallenges.length > 0) {
    return signChallenges;
  }

  return getSafeItems(
    getPremiumPlanetChallenges(
      planet,
      sign
    )
  );
}

function getPlanetEvolutionText(
  planet: string,
  sign: string
): string {
  const signContent =
    getPremiumPlanetSignContent(
      planet,
      sign
    );

  if (
    typeof signContent?.evolution ===
      "string" &&
    signContent.evolution.trim().length >
      0
  ) {
    return signContent.evolution.trim();
  }

  return getPremiumPlanetEvolution(
    planet,
    sign
  );
}

function getPlanetQuoteText(
  planet: string,
  sign: string
): string {
  const signContent =
    getPremiumPlanetSignContent(
      planet,
      sign
    );

  if (
    typeof signContent?.quote ===
      "string" &&
    signContent.quote.trim().length > 0
  ) {
    return signContent.quote.trim();
  }

  return getPremiumPlanetQuote(
    planet
  );
}

export default function PdfSignaturePlanet({
  planets,
  planet,
}: SignaturePdfPlanetProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const planetData =
    getPlanetData(
      safePlanets,
      planet
    );

  const planetName =
    PLANET_FR[planet] ||
    planet;

  const rawSign =
    getPlanetSign(
      planetData
    );

  const signKey =
    getEnglishSignKey(
      rawSign
    );

  const translatedSign =
    translateSign(
      rawSign
    );

  const degree =
    getPlanetDegree(
      planetData
    );

  const house =
    getPlanetHouse(
      planetData
    );

  const houseName =
    getHouseDisplayName(
      house
    );

  const retrograde =
    planetData?.retrograde === true;

  const positionLine =
    getPositionLine(
      translatedSign,
      degree,
      houseName,
      retrograde
    );

  const energyText =
    getEnergyText(
      planet,
      signKey
    );

  const houseText =
    getHouseText(
      planet,
      house
    );

  const strengths =
    getPlanetStrengthItems(
      planet,
      signKey
    );

  const challenges =
    getPlanetChallengeItems(
      planet,
      signKey
    );

  const evolutionText =
    getPlanetEvolutionText(
      planet,
      signKey
    );

  const quote =
    getPlanetQuoteText(
      planet,
      signKey
    );

  const meaning =
    PLANET_MEANINGS[planet] ||
    "Énergie astrologique personnelle";

  const icon =
    PLANET_ICONS[planet];

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.content}>
        <View style={styles.header}>
          <View
            style={styles.premiumBadge}
          >
            <Text
              style={
                styles.premiumBadgeText
              }
            >
              Analyse Signature
            </Text>
          </View>

          <Text style={styles.kicker}>
            Planète natale
          </Text>

          <Text style={styles.title}>
            {planetName} en{" "}
            <Text
              style={
                styles.titleAccent
              }
            >
              {translatedSign}
            </Text>
          </Text>

          <View style={styles.divider}>
            <View
              style={styles.dividerLine}
            />

            {icon ? (
              <Image
                src={icon}
                style={
                  styles.dividerIcon
                }
              />
            ) : (
              <Text
                style={{
                  color: "#f4c95d",
                  fontSize: 12,
                  marginHorizontal: 9,
                }}
              >
                ✦
              </Text>
            )}

            <View
              style={styles.dividerLine}
            />
          </View>
        </View>

        <View
          style={styles.hero}
          wrap={false}
        >
          <View
            style={
              styles.heroAccentTop
            }
          />

          <View
            style={
              styles.heroAccentBottom
            }
          />

          {icon ? (
            <>
              <View
                style={
                  styles.iconCircle
                }
              >
                <Image
                  src={icon}
                  style={styles.icon}
                />
              </View>

              <Image
                src={icon}
                style={
                  styles.watermark
                }
              />
            </>
          ) : null}

          <View
            style={
              styles.heroContent
            }
          >
            <Text
              style={
                styles.heroLabel
              }
            >
              Dans votre thème natal
            </Text>

            <Text
              style={
                styles.heroPlanet
              }
            >
              {planetName}
            </Text>

            <Text
              style={
                styles.heroPosition
              }
            >
              {positionLine}
            </Text>

            <Text
              style={
                styles.heroMeaning
              }
            >
              {meaning}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.sectionCard,
            styles.sectionCardGold,
          ]}
          wrap={false}
        >
          <View
            style={
              styles.sectionAccent
            }
          />

          <View
            style={
              styles.sectionHeader
            }
          >
            <View
              style={
                styles.sectionNumber
              }
            >
              <Text
                style={
                  styles.sectionNumberText
                }
              >
                01
              </Text>
            </View>

            <Text
              style={
                styles.sectionTitle
              }
            >
              Votre énergie essentielle
            </Text>
          </View>

          <Text
            style={styles.bodyText}
          >
            {energyText}
          </Text>
        </View>

        <View
          style={styles.sectionCard}
          wrap={false}
        >
          <View
            style={
              styles.sectionAccent
            }
          />

          <View
            style={
              styles.sectionHeader
            }
          >
            <View
              style={
                styles.sectionNumber
              }
            >
              <Text
                style={
                  styles.sectionNumberText
                }
              >
                02
              </Text>
            </View>

            <Text
              style={
                styles.sectionTitle
              }
            >
              L’influence de la maison
            </Text>
          </View>

          <Text
            style={
              styles.houseLabel
            }
          >
            {houseName}
          </Text>

          <Text
            style={styles.bodyText}
          >
            {houseText}
          </Text>
        </View>

        <View
          style={
            styles.qualitiesRow
          }
          wrap={false}
        >
          <View
            style={[
              styles.qualitiesColumn,
              styles.qualitiesColumnLeft,
            ]}
          >
            <View
              style={
                styles.qualitiesCard
              }
            >
              <Text
                style={
                  styles.qualitiesTitle
                }
              >
                Vos forces naturelles
              </Text>

              {strengths.map(
                (strength, index) => (
                  <View
                    key={`${planet}-strength-${index}`}
                    style={[
                      styles.qualityItem,
                      index ===
                      strengths.length - 1
                        ? styles.qualityItemLast
                        : {},
                    ]}
                  >
                    <Text
                      style={
                        styles.strengthSymbol
                      }
                    >
                      ✓
                    </Text>

                    <Text
                      style={
                        styles.qualityText
                      }
                    >
                      {strength}
                    </Text>
                  </View>
                )
              )}
            </View>
          </View>

          <View
            style={
              styles.qualitiesColumn
            }
          >
            <View
              style={
                styles.qualitiesCard
              }
            >
              <Text
                style={
                  styles.qualitiesTitle
                }
              >
                Vos points de vigilance
              </Text>

              {challenges.map(
                (challenge, index) => (
                  <View
                    key={`${planet}-challenge-${index}`}
                    style={[
                      styles.qualityItem,
                      index ===
                      challenges.length - 1
                        ? styles.qualityItemLast
                        : {},
                    ]}
                  >
                    <Text
                      style={
                        styles.challengeSymbol
                      }
                    >
                      •
                    </Text>

                    <Text
                      style={
                        styles.qualityText
                      }
                    >
                      {challenge}
                    </Text>
                  </View>
                )
              )}
            </View>
          </View>
        </View>

        <View
          style={
            styles.evolutionCard
          }
          wrap={false}
        >
          <Text
            style={
              styles.evolutionTitle
            }
          >
            Votre potentiel d’évolution
          </Text>

          <Text
            style={styles.bodyText}
          >
            {evolutionText}
          </Text>
        </View>

        <View
          style={styles.quoteCard}
          wrap={false}
        >
          <View
            style={
              styles.quoteAccent
            }
          />

          <Text
            style={styles.quoteMark}
          >
            “
          </Text>

          <Text
            style={
              styles.quoteLabel
            }
          >
            Citation Signature
          </Text>

          <Text
            style={
              styles.quoteText
            }
          >
            « {quote} »
          </Text>
        </View>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
