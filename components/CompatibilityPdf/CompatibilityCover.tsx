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
  CompatibilityCoverProps,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

const GOLD = "#d4af4e";
const BRIGHT_GOLD = "#c99a3d";
const SOFT_GOLD = "#8f6e35";
const DARK_GOLD = "#4e412d";

const PAGE_BACKGROUND = "#06101f";
const CARD_BACKGROUND = "#081426";
const CREAM = "#fff8e7";
const MUTED_CREAM = "#e8e2d7";

const styles = StyleSheet.create({
  page: {
    position: "relative",

    paddingTop: 31,
    paddingBottom: 36,
    paddingHorizontal: 43,

    backgroundColor: PAGE_BACKGROUND,
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

    borderWidth: 0.9,
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

    top: 57,
    left: -42,

    width: 135,
    height: 135,

    borderRadius: 67.5,

    borderWidth: 0.7,
    borderColor: DARK_GOLD,

    opacity: 0.38,
  },

  decorativeCircleLeftInner: {
    position: "absolute",

    top: 69,
    left: -30,

    width: 111,
    height: 111,

    borderRadius: 55.5,

    borderWidth: 0.45,
    borderColor: SOFT_GOLD,

    opacity: 0.25,
  },

  decorativeCircleRight: {
    position: "absolute",

    top: 57,
    right: -42,

    width: 135,
    height: 135,

    borderRadius: 67.5,

    borderWidth: 0.7,
    borderColor: DARK_GOLD,

    opacity: 0.38,
  },

  decorativeCircleRightInner: {
    position: "absolute",

    top: 69,
    right: -30,

    width: 111,
    height: 111,

    borderRadius: 55.5,

    borderWidth: 0.45,
    borderColor: SOFT_GOLD,

    opacity: 0.25,
  },

  content: {
    position: "relative",

    height: "100%",
  },

  header: {
    alignItems: "center",

    marginBottom: 7,
  },

  logo: {
    width: 145,
    height: 55,

    objectFit: "contain",

    marginBottom: 6,
  },

  brandDivider: {
    width: 106,
    height: 1,

    backgroundColor: GOLD,
  },

  badge: {
    alignSelf: "center",

    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 18,

    marginBottom: 8,

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.8,
    borderColor: GOLD,
  },

  badgeText: {
    color: GOLD,

    fontSize: 7,
    letterSpacing: 2.1,

    textTransform: "uppercase",
    textAlign: "center",
  },

  titleSection: {
    alignItems: "center",

    marginBottom: 11,
  },

  eyebrow: {
    fontSize: 7.5,
    letterSpacing: 2.2,

    color: "#d7c49a",

    textTransform: "uppercase",

    marginBottom: 5,
  },

  title: {
    fontSize: 27,
    lineHeight: 1.08,

    color: CREAM,

    textAlign: "center",

    marginBottom: 1,
  },

  titleAccent: {
    fontSize: 31,
    lineHeight: 1.05,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 6,
  },

  subtitle: {
    width: "83%",

    fontSize: 8.6,
    lineHeight: 1.4,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  synastryArea: {
    position: "relative",

    height: 175,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 7,
  },

  wheelRow: {
    position: "relative",

    width: 325,
    height: 137,
  },

  wheelContainerLeft: {
    position: "absolute",

    top: 0,
    left: 30,

    width: 137,
    height: 137,

    borderRadius: 68.5,

    borderWidth: 1,
    borderColor: BRIGHT_GOLD,

    backgroundColor: PAGE_BACKGROUND,

    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },

  wheelContainerRight: {
    position: "absolute",

    top: 0,
    right: 30,

    width: 137,
    height: 137,

    borderRadius: 68.5,

    borderWidth: 1,
    borderColor: BRIGHT_GOLD,

    backgroundColor: PAGE_BACKGROUND,

    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },

  wheelInnerBorder: {
    position: "absolute",

    top: 5,
    left: 5,
    right: 5,
    bottom: 5,

    borderRadius: 63,

    borderWidth: 0.45,
    borderColor: SOFT_GOLD,
  },

  wheelImage: {
    width: 119,
    height: 119,

    objectFit: "contain",
  },

  wheelPlaceholder: {
    width: 119,
    height: 119,

    borderRadius: 59.5,

    borderWidth: 0.55,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",
  },

  wheelPlaceholderMoon: {
    width: 34,
    height: 34,

    objectFit: "contain",

    marginBottom: 5,

    opacity: 0.85,
  },

  wheelPlaceholderText: {
    width: 82,

    fontSize: 6.2,
    lineHeight: 1.25,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  centralSymbol: {
    position: "absolute",

    top: 43,
    left: 133,

    width: 59,
    height: 59,

    borderRadius: 29.5,

    borderWidth: 1,
    borderColor: GOLD,

    backgroundColor: CARD_BACKGROUND,

    alignItems: "center",
    justifyContent: "center",
  },

  centralSymbolInner: {
    width: 47,
    height: 47,

    borderRadius: 23.5,

    borderWidth: 0.4,
    borderColor: DARK_GOLD,

    alignItems: "center",
    justifyContent: "center",
  },

  centralSymbolText: {
    fontSize: 21,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  connectingLineLeft: {
    position: "absolute",

    top: 68,
    left: 103,

    width: 35,
    height: 0.6,

    backgroundColor: GOLD,
  },

  connectingLineRight: {
    position: "absolute",

    top: 68,
    right: 103,

    width: 35,
    height: 0.6,

    backgroundColor: GOLD,
  },

  namesRow: {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  personName: {
    width: "40%",

    fontSize: 16,
    lineHeight: 1.15,

    color: CREAM,

    textAlign: "center",
  },

  namesSeparator: {
    width: "12%",

    fontSize: 13,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  identityGrid: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 8,
  },

  identityCard: {
    position: "relative",

    width: "48.4%",

    backgroundColor: CARD_BACKGROUND,

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },

  identityAccentTop: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 69,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  identityAccentBottom: {
    position: "absolute",

    bottom: -1,
    right: 0,

    width: 50,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  identityLabel: {
    fontSize: 5.7,
    letterSpacing: 1.45,

    color: "#cdbb92",

    textTransform: "uppercase",

    marginBottom: 4,
  },

  identityName: {
    fontSize: 13.5,

    color: CREAM,

    marginBottom: 7,
  },

  infoLine: {
    flexDirection: "row",

    borderTopWidth: 0.35,
    borderTopColor: DARK_GOLD,

    paddingTop: 4,
    paddingBottom: 2,
  },

  infoLabel: {
    width: "36%",

    fontSize: 5.6,
    lineHeight: 1.3,

    color: "#c8b98f",

    textTransform: "uppercase",
  },

  infoValue: {
    width: "64%",

    fontSize: 7.2,
    lineHeight: 1.3,

    color: MUTED_CREAM,

    textAlign: "right",
  },

  themesCard: {
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: "#80683d",

    paddingTop: 7,
    paddingBottom: 7,

    marginBottom: 8,
  },

  themesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  themeItem: {
    width: "24%",

    alignItems: "center",
  },

  themeSymbol: {
    fontSize: 11,

    color: BRIGHT_GOLD,

    marginBottom: 2,
  },

  themeTitle: {
    fontSize: 6.4,
    lineHeight: 1.25,

    color: CREAM,

    textAlign: "center",
    textTransform: "uppercase",
  },

  quoteSection: {
    alignItems: "center",

    paddingHorizontal: 22,

    marginTop: 2,
  },

  quote: {
    fontSize: 8.6,
    lineHeight: 1.45,

    color: "#f4efe2",

    textAlign: "center",

    marginBottom: 4,
  },

  signature: {
    fontSize: 6,
    letterSpacing: 1.9,

    color: "#d1c2a2",

    textTransform: "uppercase",
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
  return displayValue(
    person.firstName,
  ) === "Non précisé"
    ? fallback
    : displayValue(person.firstName);
}

function PersonWheel({
  person,
}: {
  person: SafeCompatibilityPerson;
}) {
  const hasWheel =
    typeof person.wheelImage === "string" &&
    person.wheelImage.trim().length > 0;

  return (
    <>
      <View
        style={styles.wheelInnerBorder}
      />

      {hasWheel ? (
        <Image
          src={person.wheelImage}
          style={styles.wheelImage}
        />
      ) : (
        <View
          style={styles.wheelPlaceholder}
        >
          <Image
            src={PLANET_ICONS.Moon}
            style={
              styles.wheelPlaceholderMoon
            }
          />

          <Text
            style={
              styles.wheelPlaceholderText
            }
          >
            Carte du ciel personnalisée
          </Text>
        </View>
      )}
    </>
  );
}

function IdentityCard({
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
      style={styles.identityCard}
      wrap={false}
    >
      <View
        style={styles.identityAccentTop}
      />

      <View
        style={
          styles.identityAccentBottom
        }
      />

      <Text
        style={styles.identityLabel}
      >
        {label}
      </Text>

      <Text
        style={styles.identityName}
      >
        {getPersonName(
          person,
          fallbackName,
        )}
      </Text>

      <View style={styles.infoLine}>
        <Text style={styles.infoLabel}>
          Naissance
        </Text>

        <Text style={styles.infoValue}>
          {displayValue(person.birthDate)}
        </Text>
      </View>

      <View style={styles.infoLine}>
        <Text style={styles.infoLabel}>
          Heure
        </Text>

        <Text style={styles.infoValue}>
          {displayValue(person.birthTime)}
        </Text>
      </View>

      <View style={styles.infoLine}>
        <Text style={styles.infoLabel}>
          Lieu
        </Text>

        <Text style={styles.infoValue}>
          {displayValue(person.birthCity)}
        </Text>
      </View>
    </View>
  );
}

export default function CompatibilityCover({
  person1,
  person2,
}: CompatibilityCoverProps) {
  const person1Name =
    getPersonName(
      person1,
      "Première personne",
    );

  const person2Name =
    getPersonName(
      person2,
      "Deuxième personne",
    );

  return (
    <Page
      size="A4"
      style={styles.page}
    >
      <View
        style={styles.topAccent}
        fixed
      />

      <View
        style={styles.outerBorder}
        fixed
      />

      <View
        style={styles.innerBorder}
        fixed
      />

      <View
        style={
          styles.decorativeCircleLeft
        }
        fixed
      />

      <View
        style={
          styles.decorativeCircleLeftInner
        }
        fixed
      />

      <View
        style={
          styles.decorativeCircleRight
        }
        fixed
      />

      <View
        style={
          styles.decorativeCircleRightInner
        }
        fixed
      />

      <View style={styles.content}>
        <View
          style={styles.header}
          wrap={false}
        >
          <Image
            src={LOGO_URL}
            style={styles.logo}
          />

          <View
            style={styles.brandDivider}
          />
        </View>

        <View
          style={styles.badge}
          wrap={false}
        >
          <Text
            style={styles.badgeText}
          >
            Compatibilité Premium
          </Text>
        </View>

        <View
          style={styles.titleSection}
          wrap={false}
        >
          <Text
            style={styles.eyebrow}
          >
            Rapport astrologique personnalisé
          </Text>

          <Text style={styles.title}>
            Votre rapport de
          </Text>

          <Text
            style={styles.titleAccent}
          >
            Synastrie
          </Text>

          <Text
            style={styles.subtitle}
          >
            Une exploration approfondie de la
            rencontre entre vos deux thèmes
            natals, de vos affinités naturelles,
            de vos défis et de votre potentiel
            d’évolution.
          </Text>
        </View>

        <View
          style={styles.synastryArea}
          wrap={false}
        >
          <View style={styles.wheelRow}>
            <View
              style={
                styles.connectingLineLeft
              }
            />

            <View
              style={
                styles.connectingLineRight
              }
            />

            <View
              style={
                styles.wheelContainerLeft
              }
            >
              <PersonWheel
                person={person1}
              />
            </View>

            <View
              style={
                styles.wheelContainerRight
              }
            >
              <PersonWheel
                person={person2}
              />
            </View>

            <View
              style={styles.centralSymbol}
            >
              <View
                style={
                  styles.centralSymbolInner
                }
              >
                <Text
                  style={
                    styles.centralSymbolText
                  }
                >
                  ♥
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.namesRow}>
            <Text
              style={styles.personName}
            >
              {person1Name}
            </Text>

            <Text
              style={
                styles.namesSeparator
              }
            >
              ✦
            </Text>

            <Text
              style={styles.personName}
            >
              {person2Name}
            </Text>
          </View>
        </View>

        <View
          style={styles.identityGrid}
          wrap={false}
        >
          <IdentityCard
            person={person1}
            label="Première personne"
            fallbackName="Première personne"
          />

          <IdentityCard
            person={person2}
            label="Deuxième personne"
            fallbackName="Deuxième personne"
          />
        </View>

        <View
          style={styles.themesCard}
          wrap={false}
        >
          <View
            style={styles.themesRow}
          >
            <View
              style={styles.themeItem}
            >
              <Text
                style={styles.themeSymbol}
              >
                ♥
              </Text>

              <Text
                style={styles.themeTitle}
              >
                Lien émotionnel
              </Text>
            </View>

            <View
              style={styles.themeItem}
            >
              <Text
                style={styles.themeSymbol}
              >
                ✦
              </Text>

              <Text
                style={styles.themeTitle}
              >
                Communication
              </Text>
            </View>

            <View
              style={styles.themeItem}
            >
              <Text
                style={styles.themeSymbol}
              >
                ☉
              </Text>

              <Text
                style={styles.themeTitle}
              >
                Attirance
              </Text>
            </View>

            <View
              style={styles.themeItem}
            >
              <Text
                style={styles.themeSymbol}
              >
                ♄
              </Text>

              <Text
                style={styles.themeTitle}
              >
                Potentiel durable
              </Text>
            </View>
          </View>
        </View>

        <View
          style={styles.quoteSection}
          wrap={false}
        >
          <Text style={styles.quote}>
            Deux thèmes natals ne racontent
            jamais deux histoires séparées.
            Leur rencontre révèle la manière
            dont deux univers s’attirent,
            s’influencent et évoluent ensemble.
          </Text>

          <Text
            style={styles.signature}
          >
            Luna Astralis
          </Text>
        </View>
      </View>
    </Page>
  );
}
