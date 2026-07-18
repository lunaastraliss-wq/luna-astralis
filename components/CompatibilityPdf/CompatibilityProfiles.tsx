import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  LOGO_URL,
  PLANET_ICONS,
} from "@/components/PremiumPdf/PremiumPdfAssets";

import type {
  CompatibilityProfilesProps,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

import {
  getCompatibilityPlanet,
  translateCompatibilityPlanet,
} from "./CompatibilityPdfUtils";

const NAVY = "#06101f";
const NAVY_CARD = "#0a1729";
const NAVY_CARD_LIGHT = "#0d1b30";

const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#c99a3d";
const SOFT_GOLD = "#8f6e35";
const DARK_GOLD = "#4e412d";

const CREAM = "#fff8e7";
const MUTED_CREAM = "#ddd5c6";
const SOFT_TEXT = "#b9ae98";

const localStyles = StyleSheet.create({
  page: {
    position: "relative",

    paddingTop: 42,
    paddingBottom: 48,
    paddingHorizontal: 43,

    backgroundColor: NAVY,
    color: CREAM,

    fontFamily: "Helvetica",

    overflow: "hidden",
  },

  topAccent: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,

    height: 5,

    backgroundColor: GOLD,
  },

  outerBorder: {
    position: "absolute",

    top: 18,
    left: 18,
    right: 18,
    bottom: 18,

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,
  },

  innerBorder: {
    position: "absolute",

    top: 23,
    left: 23,
    right: 23,
    bottom: 23,

    borderWidth: 0.35,
    borderColor: DARK_GOLD,
  },

  decorativeCircleTop: {
    position: "absolute",

    top: 67,
    left: -52,

    width: 148,
    height: 148,

    borderRadius: 74,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.2,
  },

  decorativeCircleBottom: {
    position: "absolute",

    right: -48,
    bottom: 70,

    width: 138,
    height: 138,

    borderRadius: 69,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.18,
  },

  content: {
    position: "relative",

    height: "100%",
  },

  header: {
    alignItems: "center",

    marginBottom: 18,
  },

  logo: {
    width: 108,
    height: 39,

    objectFit: "contain",

    marginBottom: 7,
  },

  sectionLabel: {
    fontSize: 6.4,
    letterSpacing: 2.2,

    color: "#ccb986",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    lineHeight: 1.15,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  subtitle: {
    width: "85%",

    fontSize: 8.2,
    lineHeight: 1.45,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  titleDivider: {
    width: 74,
    height: 1,

    backgroundColor: GOLD,

    marginTop: 11,
  },

  profilesRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 16,
  },

  profileColumn: {
    width: "48.1%",
  },

  profileHeader: {
    position: "relative",

    alignItems: "center",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 12,

    marginBottom: 10,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },

  profileHeaderAccent: {
    position: "absolute",

    top: -1,
    left: "30%",

    width: "40%",
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  profileLabel: {
    fontSize: 5.8,
    letterSpacing: 1.5,

    color: "#cbb98e",

    textTransform: "uppercase",

    marginBottom: 5,
  },

  profileName: {
    fontSize: 16,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 5,
  },

  profileIntro: {
    fontSize: 6.5,
    lineHeight: 1.35,

    color: SOFT_TEXT,

    textAlign: "center",
  },

  placementsCard: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 11,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,

    marginBottom: 10,
  },

  placementsTitle: {
    fontSize: 6.1,
    letterSpacing: 1.45,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 9,
  },

  placementRow: {
    flexDirection: "row",
    alignItems: "center",

    minHeight: 45,

    paddingTop: 6,
    paddingBottom: 6,

    borderTopWidth: 0.35,
    borderTopColor: DARK_GOLD,
  },

  placementRowFirst: {
    flexDirection: "row",
    alignItems: "center",

    minHeight: 45,

    paddingBottom: 6,
  },

  planetIconFrame: {
    width: 29,
    height: 29,

    borderRadius: 14.5,

    borderWidth: 0.55,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 9,
  },

  planetIcon: {
    width: 18,
    height: 18,

    objectFit: "contain",
  },

  planetFallback: {
    fontSize: 10,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  placementContent: {
    flex: 1,
  },

  placementPlanet: {
    fontSize: 7.7,

    color: CREAM,

    marginBottom: 2,
  },

  placementSign: {
    fontSize: 6.5,

    color: MUTED_CREAM,
  },

  placementMeaning: {
    fontSize: 5.8,
    lineHeight: 1.35,

    color: SOFT_TEXT,

    marginTop: 3,
  },

  profileSummary: {
    minHeight: 108,

    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 12,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  profileSummaryTitle: {
    fontSize: 9.2,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  profileSummaryText: {
    fontSize: 6.7,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "justify",
  },

  interactionSection: {
    position: "relative",

    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 18,

    marginBottom: 14,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  interactionSymbol: {
    position: "absolute",

    top: -13,
    left: "50%",

    width: 26,
    height: 26,

    marginLeft: -13,

    borderRadius: 13,

    borderWidth: 0.7,
    borderColor: GOLD,

    backgroundColor: NAVY,

    alignItems: "center",
    justifyContent: "center",
  },

  interactionSymbolText: {
    fontSize: 11,

    color: BRIGHT_GOLD,
  },

  interactionTitle: {
    fontSize: 11,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  interactionText: {
    fontSize: 7.3,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  keysCard: {
    paddingTop: 11,
    paddingBottom: 11,
    paddingHorizontal: 14,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  keysTitle: {
    fontSize: 6.2,
    letterSpacing: 1.5,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 8,
  },

  keysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  keyItem: {
    width: "31.5%",

    alignItems: "center",
  },

  keySymbol: {
    fontSize: 11,

    color: BRIGHT_GOLD,

    marginBottom: 3,
  },

  keyTitle: {
    fontSize: 6.6,

    color: CREAM,

    textAlign: "center",

    marginBottom: 3,
  },

  keyText: {
    fontSize: 5.7,
    lineHeight: 1.35,

    color: SOFT_TEXT,

    textAlign: "center",
  },

  footer: {
    position: "absolute",

    left: 43,
    right: 43,
    bottom: 29,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerText: {
    fontSize: 5.7,
    letterSpacing: 0.8,

    color: "#8e836e",
  },

  footerPage: {
    fontSize: 6,

    color: "#b5a886",
  },
});

type PlanetName =
  | "Sun"
  | "Moon"
  | "Mercury"
  | "Venus"
  | "Mars";

const PLANET_MEANINGS: Record<
  PlanetName,
  string
> = {
  Sun: "Identité, vitalité et expression personnelle.",
  Moon: "Émotions, besoins affectifs et sécurité intérieure.",
  Mercury: "Communication, pensée et compréhension.",
  Venus: "Amour, séduction, valeurs et harmonie.",
  Mars: "Désir, action, énergie et affirmation.",
};

const PLANET_SYMBOLS: Record<
  PlanetName,
  string
> = {
  Sun: "☉",
  Moon: "☾",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
};

function getPersonName(
  person: SafeCompatibilityPerson,
  fallback: string,
): string {
  const safeName =
    typeof person.firstName === "string"
      ? person.firstName.trim()
      : "";

  return safeName || fallback;
}

function getPlanetSign(
  person: SafeCompatibilityPerson,
  planetName: PlanetName,
): string {
  const planet =
    getCompatibilityPlanet(
      person.planets,
      planetName,
    );

  const sign =
    typeof planet?.sign === "string"
      ? planet.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getPlanetIcon(
  planetName: PlanetName,
): string | undefined {
  const icon =
    PLANET_ICONS[
      planetName as keyof typeof PLANET_ICONS
    ];

  return typeof icon === "string"
    ? icon
    : undefined;
}

function getProfileSummary(
  person: SafeCompatibilityPerson,
): string {
  const sunSign =
    getPlanetSign(person, "Sun");

  const moonSign =
    getPlanetSign(person, "Moon");

  const mercurySign =
    getPlanetSign(person, "Mercury");

  const venusSign =
    getPlanetSign(person, "Venus");

  const marsSign =
    getPlanetSign(person, "Mars");

  return (
    `Avec un Soleil en ${sunSign} et une Lune en ${moonSign}, ` +
    `cette personnalité combine une manière particulière de s’affirmer ` +
    `et de vivre ses émotions. Mercure en ${mercurySign} influence sa ` +
    `façon de communiquer, tandis que Vénus en ${venusSign} décrit son ` +
    `langage affectif. Mars en ${marsSign} révèle sa manière d’agir, ` +
    `de désirer et de défendre ses besoins.`
  );
}

function PlacementRow({
  person,
  planetName,
  first = false,
}: {
  person: SafeCompatibilityPerson;
  planetName: PlanetName;
  first?: boolean;
}) {
  const icon =
    getPlanetIcon(planetName);

  const translatedPlanet =
    translateCompatibilityPlanet(
      planetName,
    );

  const sign =
    getPlanetSign(
      person,
      planetName,
    );

  return (
    <View
      style={
        first
          ? localStyles.placementRowFirst
          : localStyles.placementRow
      }
      wrap={false}
    >
      <View
        style={
          localStyles.planetIconFrame
        }
      >
        {icon ? (
          <Image
            src={icon}
            style={localStyles.planetIcon}
          />
        ) : (
          <Text
            style={
              localStyles.planetFallback
            }
          >
            {PLANET_SYMBOLS[planetName]}
          </Text>
        )}
      </View>

      <View
        style={
          localStyles.placementContent
        }
      >
        <Text
          style={
            localStyles.placementPlanet
          }
        >
          {translatedPlanet}
        </Text>

        <Text
          style={localStyles.placementSign}
        >
          {translatedPlanet} en {sign}
        </Text>

        <Text
          style={
            localStyles.placementMeaning
          }
        >
          {PLANET_MEANINGS[planetName]}
        </Text>
      </View>
    </View>
  );
}

function ProfileColumn({
  person,
  label,
  fallbackName,
}: {
  person: SafeCompatibilityPerson;
  label: string;
  fallbackName: string;
}) {
  const name =
    getPersonName(
      person,
      fallbackName,
    );

  return (
    <View
      style={localStyles.profileColumn}
    >
      <View
        style={localStyles.profileHeader}
        wrap={false}
      >
        <View
          style={
            localStyles.profileHeaderAccent
          }
        />

        <Text
          style={localStyles.profileLabel}
        >
          {label}
        </Text>

        <Text
          style={localStyles.profileName}
        >
          {name}
        </Text>

        <Text
          style={localStyles.profileIntro}
        >
          Les principales énergies qui
          façonnent son expression
          relationnelle.
        </Text>
      </View>

      <View
        style={localStyles.placementsCard}
      >
        <Text
          style={localStyles.placementsTitle}
        >
          Placements personnels
        </Text>

        <PlacementRow
          person={person}
          planetName="Sun"
          first
        />

        <PlacementRow
          person={person}
          planetName="Moon"
        />

        <PlacementRow
          person={person}
          planetName="Mercury"
        />

        <PlacementRow
          person={person}
          planetName="Venus"
        />

        <PlacementRow
          person={person}
          planetName="Mars"
        />
      </View>

      <View
        style={localStyles.profileSummary}
        wrap={false}
      >
        <Text
          style={
            localStyles.profileSummaryTitle
          }
        >
          Portrait relationnel
        </Text>

        <Text
          style={
            localStyles.profileSummaryText
          }
        >
          {getProfileSummary(person)}
        </Text>
      </View>
    </View>
  );
}

export default function CompatibilityProfiles({
  person1,
  person2,
}: CompatibilityProfilesProps) {
  return (
    <Page
      size="A4"
      style={localStyles.page}
    >
      <View
        style={localStyles.topAccent}
        fixed
      />

      <View
        style={localStyles.outerBorder}
        fixed
      />

      <View
        style={localStyles.innerBorder}
        fixed
      />

      <View
        style={
          localStyles.decorativeCircleTop
        }
        fixed
      />

      <View
        style={
          localStyles.decorativeCircleBottom
        }
        fixed
      />

      <View style={localStyles.content}>
        <View
          style={localStyles.header}
          wrap={false}
        >
          <Image
            src={LOGO_URL}
            style={localStyles.logo}
          />

          <Text
            style={localStyles.sectionLabel}
          >
            Portraits astrologiques
          </Text>

          <Text style={localStyles.title}>
            Vos deux profils relationnels
          </Text>

          <Text
            style={localStyles.subtitle}
          >
            Avant d’étudier vos interactions,
            découvrons les énergies personnelles
            que chacun apporte naturellement
            dans la relation.
          </Text>

          <View
            style={localStyles.titleDivider}
          />
        </View>

        <View
          style={localStyles.profilesRow}
        >
          <ProfileColumn
            person={person1}
            label="Premier profil"
            fallbackName="Première personne"
          />

          <ProfileColumn
            person={person2}
            label="Deuxième profil"
            fallbackName="Deuxième personne"
          />
        </View>

        <View
          style={
            localStyles.interactionSection
          }
          wrap={false}
        >
          <View
            style={
              localStyles.interactionSymbol
            }
          >
            <Text
              style={
                localStyles.interactionSymbolText
              }
            >
              ✦
            </Text>
          </View>

          <Text
            style={
              localStyles.interactionTitle
            }
          >
            La compatibilité commence par la différence
          </Text>

          <Text
            style={
              localStyles.interactionText
            }
          >
            Deux personnes n’ont pas besoin
            d’être identiques pour créer une
            relation harmonieuse. Les
            ressemblances facilitent souvent la
            compréhension, tandis que les
            différences peuvent apporter de la
            complémentarité, du mouvement et de
            nouvelles possibilités d’évolution.
          </Text>
        </View>

        <View
          style={localStyles.keysCard}
          wrap={false}
        >
          <Text
            style={localStyles.keysTitle}
          >
            Trois clés pour comprendre la suite
          </Text>

          <View
            style={localStyles.keysRow}
          >
            <View style={localStyles.keyItem}>
              <Text
                style={localStyles.keySymbol}
              >
                ☉
              </Text>

              <Text
                style={localStyles.keyTitle}
              >
                Se reconnaître
              </Text>

              <Text
                style={localStyles.keyText}
              >
                Les ressemblances créent un
                sentiment de familiarité.
              </Text>
            </View>

            <View style={localStyles.keyItem}>
              <Text
                style={localStyles.keySymbol}
              >
                ☯
              </Text>

              <Text
                style={localStyles.keyTitle}
              >
                Se compléter
              </Text>

              <Text
                style={localStyles.keyText}
              >
                Les différences peuvent équilibrer
                les forces de chacun.
              </Text>
            </View>

            <View style={localStyles.keyItem}>
              <Text
                style={localStyles.keySymbol}
              >
                ✦
              </Text>

              <Text
                style={localStyles.keyTitle}
              >
                Évoluer ensemble
              </Text>

              <Text
                style={localStyles.keyText}
              >
                Les défis révèlent les zones de
                croissance de la relation.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={localStyles.footer}
        fixed
      >
        <Text
          style={localStyles.footerText}
        >
          Luna Astralis • Rapport de synastrie
        </Text>

        <Text
          style={localStyles.footerPage}
        >
          4
        </Text>
      </View>
    </Page>
  );
}
