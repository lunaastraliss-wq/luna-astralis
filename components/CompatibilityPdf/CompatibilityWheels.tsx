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
  CompatibilityWheelsProps,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

const NAVY = "#06101f";
const NAVY_CARD = "#0a1729";

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
    paddingBottom: 44,
    paddingHorizontal: 42,

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

  decorativeCircleLeft: {
    position: "absolute",

    top: 74,
    left: -58,

    width: 156,
    height: 156,

    borderRadius: 78,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.22,
  },

  decorativeCircleRight: {
    position: "absolute",

    bottom: 68,
    right: -58,

    width: 156,
    height: 156,

    borderRadius: 78,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.22,
  },

  content: {
    position: "relative",

    height: "100%",
  },

  header: {
    alignItems: "center",

    marginBottom: 19,
  },

  logo: {
    width: 112,
    height: 41,

    objectFit: "contain",

    marginBottom: 5,
  },

  sectionLabel: {
    fontSize: 6.5,
    letterSpacing: 2.15,

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
    width: "84%",

    fontSize: 8.4,
    lineHeight: 1.45,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  titleDivider: {
    width: 76,
    height: 1,

    backgroundColor: GOLD,

    marginTop: 12,
  },

  wheelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 19,
  },

  wheelColumn: {
    width: "47.8%",

    alignItems: "center",
  },

  personBadge: {
    minWidth: 128,

    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 12,

    marginBottom: 9,

    borderWidth: 0.7,
    borderColor: SOFT_GOLD,

    backgroundColor: NAVY_CARD,
  },

  personBadgeText: {
    fontSize: 6,
    letterSpacing: 1.5,

    color: "#d5c59f",

    textTransform: "uppercase",
    textAlign: "center",
  },

  personName: {
    fontSize: 16,
    lineHeight: 1.15,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 10,
  },

  wheelFrame: {
    position: "relative",

    width: 226,
    height: 226,

    borderRadius: 113,

    borderWidth: 1,
    borderColor: GOLD,

    backgroundColor: "#071221",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 12,

    overflow: "hidden",
  },

  wheelFrameInner: {
    position: "absolute",

    top: 7,
    left: 7,
    right: 7,
    bottom: 7,

    borderRadius: 106,

    borderWidth: 0.45,
    borderColor: SOFT_GOLD,
  },

  wheelFrameOuterAccent: {
    position: "absolute",

    top: 14,
    left: 14,
    right: 14,
    bottom: 14,

    borderRadius: 99,

    borderWidth: 0.3,
    borderColor: DARK_GOLD,
  },

  wheelImage: {
    width: 205,
    height: 205,

    objectFit: "contain",
  },

  wheelPlaceholder: {
    width: 192,
    height: 192,

    borderRadius: 96,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 22,
  },

  placeholderIcon: {
    width: 48,
    height: 48,

    objectFit: "contain",

    opacity: 0.85,

    marginBottom: 9,
  },

  placeholderTitle: {
    fontSize: 8.3,
    lineHeight: 1.35,

    color: CREAM,

    textAlign: "center",

    marginBottom: 5,
  },

  placeholderText: {
    fontSize: 6.5,
    lineHeight: 1.35,

    color: SOFT_TEXT,

    textAlign: "center",
  },

  personInfo: {
    width: "100%",

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 12,

    borderWidth: 0.6,
    borderColor: DARK_GOLD,

    backgroundColor: NAVY_CARD,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingTop: 3,
    paddingBottom: 3,
  },

  infoLabel: {
    width: "39%",

    fontSize: 5.7,
    letterSpacing: 0.7,

    color: "#c6b78f",

    textTransform: "uppercase",
  },

  infoValue: {
    width: "61%",

    fontSize: 7,
    lineHeight: 1.25,

    color: MUTED_CREAM,

    textAlign: "right",
  },

  connectionSection: {
    position: "relative",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 24,

    marginBottom: 15,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  connectionSymbol: {
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

  connectionSymbolText: {
    width: 16,
    height: 16,

    objectFit: "contain",
  },

  connectionTitle: {
    fontSize: 11.5,

    color: CREAM,

    textAlign: "center",

    marginBottom: 6,
  },

  connectionText: {
    fontSize: 7.5,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  legendCard: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  legendTitle: {
    fontSize: 6.3,
    letterSpacing: 1.5,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 7,
  },

  legendRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  legendItem: {
    width: "24%",

    alignItems: "center",
  },

  legendSymbol: {
    width: 18,
    height: 18,

    objectFit: "contain",

    marginBottom: 3,
  },

  legendText: {
    fontSize: 5.8,
    lineHeight: 1.3,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  footer: {
    position: "absolute",

    left: 42,
    right: 42,
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

function displayValue(
  value?: string,
): string {
  const safeValue =
    typeof value === "string"
      ? value.trim()
      : "";

  return safeValue || "Non précisé";
}

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

function getLocation(
  person: SafeCompatibilityPerson,
): string {
  const city =
    typeof person.birthCity === "string"
      ? person.birthCity.trim()
      : "";

  const country =
    typeof person.birthCountry === "string"
      ? person.birthCountry.trim()
      : "";

  if (city && country) {
    return `${city}, ${country}`;
  }

  return city || country || "Non précisé";
}

function PersonWheel({
  person,
}: {
  person: SafeCompatibilityPerson;
}) {
  const wheelImage =
    typeof person.wheelImage === "string"
      ? person.wheelImage.trim()
      : "";

  return (
    <View style={localStyles.wheelFrame}>
      <View
        style={localStyles.wheelFrameInner}
      />

      <View
        style={
          localStyles.wheelFrameOuterAccent
        }
      />

      {wheelImage ? (
        <Image
          src={wheelImage}
          style={localStyles.wheelImage}
        />
      ) : (
        <View
          style={localStyles.wheelPlaceholder}
        >
          <Image
            src={PLANET_ICONS.moon}
            style={
              localStyles.placeholderIcon
            }
          />

          <Text
            style={
              localStyles.placeholderTitle
            }
          >
            Carte du ciel
          </Text>

          <Text
            style={
              localStyles.placeholderText
            }
          >
            La roue astrologique personnalisée
            apparaîtra ici lorsque les données
            de naissance auront été calculées.
          </Text>
        </View>
      )}
    </View>
  );
}

function PersonInformation({
  person,
}: {
  person: SafeCompatibilityPerson;
}) {
  return (
    <View
      style={localStyles.personInfo}
      wrap={false}
    >
      <View style={localStyles.infoRow}>
        <Text style={localStyles.infoLabel}>
          Date
        </Text>

        <Text style={localStyles.infoValue}>
          {displayValue(person.birthDate)}
        </Text>
      </View>

      <View style={localStyles.infoRow}>
        <Text style={localStyles.infoLabel}>
          Heure
        </Text>

        <Text style={localStyles.infoValue}>
          {displayValue(person.birthTime)}
        </Text>
      </View>

      <View style={localStyles.infoRow}>
        <Text style={localStyles.infoLabel}>
          Lieu
        </Text>

        <Text style={localStyles.infoValue}>
          {getLocation(person)}
        </Text>
      </View>
    </View>
  );
}

function PersonColumn({
  person,
  label,
  fallbackName,
}: {
  person: SafeCompatibilityPerson;
  label: string;
  fallbackName: string;
}) {
  return (
    <View
      style={localStyles.wheelColumn}
      wrap={false}
    >
      <View
        style={localStyles.personBadge}
      >
        <Text
          style={
            localStyles.personBadgeText
          }
        >
          {label}
        </Text>
      </View>

      <Text
        style={localStyles.personName}
      >
        {getPersonName(
          person,
          fallbackName,
        )}
      </Text>

      <PersonWheel person={person} />

      <PersonInformation
        person={person}
      />
    </View>
  );
}

export default function CompatibilityWheels({
  person1,
  person2,
}: CompatibilityWheelsProps) {
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
          localStyles.decorativeCircleLeft
        }
        fixed
      />

      <View
        style={
          localStyles.decorativeCircleRight
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
            Vos thèmes natals
          </Text>

          <Text style={localStyles.title}>
            Deux cartes du ciel,
            une rencontre unique
          </Text>

          <Text
            style={localStyles.subtitle}
          >
            Chaque roue représente la position
            des planètes au moment précis de la
            naissance. La synastrie observe la
            manière dont ces deux univers
            astrologiques entrent en relation.
          </Text>

          <View
            style={localStyles.titleDivider}
          />
        </View>

        <View
          style={localStyles.wheelsRow}
          wrap={false}
        >
          <PersonColumn
            person={person1}
            label="Thème natal I"
            fallbackName="Première personne"
          />

          <PersonColumn
            person={person2}
            label="Thème natal II"
            fallbackName="Deuxième personne"
          />
        </View>

        <View
          style={localStyles.connectionSection}
          wrap={false}
        >
          <View
            style={
              localStyles.connectionSymbol
            }
          >
            <Image
              src={LOGO_URL}
              style={
                localStyles.connectionSymbolText
              }
            />
          </View>

          <Text
            style={
              localStyles.connectionTitle
            }
          >
            La rencontre de deux univers
          </Text>

          <Text
            style={
              localStyles.connectionText
            }
          >
            Une compatibilité astrologique ne
            repose pas uniquement sur les signes
            solaires. Elle naît de l’ensemble des
            interactions entre les planètes, les
            angles et les maisons de vos deux
            thèmes. Certaines connexions créent
            une fluidité immédiate, tandis que
            d’autres invitent à évoluer, à mieux
            se comprendre et à construire un
            équilibre plus conscient.
          </Text>
        </View>

        <View
          style={localStyles.legendCard}
          wrap={false}
        >
          <Text
            style={localStyles.legendTitle}
          >
            Les quatre dimensions de la synastrie
          </Text>

          <View
            style={localStyles.legendRow}
          >
            <View
              style={localStyles.legendItem}
            >
              <Image
                src={PLANET_ICONS.sun}
                style={localStyles.legendSymbol}
              />

              <Text
                style={localStyles.legendText}
              >
                Identité et expression personnelle
              </Text>
            </View>

            <View
              style={localStyles.legendItem}
            >
              <Image
                src={PLANET_ICONS.moon}
                style={localStyles.legendSymbol}
              />

              <Text
                style={localStyles.legendText}
              >
                Émotions et sécurité affective
              </Text>
            </View>

            <View
              style={localStyles.legendItem}
            >
              <Image
                src={PLANET_ICONS.venus}
                style={localStyles.legendSymbol}
              />

              <Text
                style={localStyles.legendText}
              >
                Amour, harmonie et séduction
              </Text>
            </View>

            <View
              style={localStyles.legendItem}
            >
              <Image
                src={PLANET_ICONS.mars}
                style={localStyles.legendSymbol}
              />

              <Text
                style={localStyles.legendText}
              >
                Désir, action et attraction
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
          2
        </Text>
      </View>
    </Page>
  );
  }
