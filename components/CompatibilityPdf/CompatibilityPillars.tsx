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

    top: 63,
    left: -53,

    width: 150,
    height: 150,

    borderRadius: 75,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.2,
  },

  decorativeCircleBottom: {
    position: "absolute",

    right: -50,
    bottom: 70,

    width: 142,
    height: 142,

    borderRadius: 71,

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

    marginBottom: 17,
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

  namesCard: {
    position: "relative",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 14,

    marginBottom: 14,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.65,
    borderColor: DARK_GOLD,
  },

  namesAccentLeft: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 72,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  namesAccentRight: {
    position: "absolute",

    right: 0,
    bottom: -1,

    width: 72,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  name: {
    width: "40%",

    fontSize: 13,

    color: CREAM,

    textAlign: "center",
  },

  nameSeparator: {
    width: "12%",

    fontSize: 13,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  pillarCard: {
    position: "relative",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 14,

    marginBottom: 11,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.65,
    borderColor: DARK_GOLD,
  },

  pillarAccent: {
    position: "absolute",

    top: -1,
    left: 0,

    width: 92,
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  pillarHeader: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 10,
  },

  pillarIconFrame: {
    width: 39,
    height: 39,

    borderRadius: 19.5,

    borderWidth: 0.7,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 11,
  },

  pillarIcon: {
    width: 24,
    height: 24,

    objectFit: "contain",
  },

  ascendantSymbol: {
    fontSize: 10,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  pillarHeading: {
    flex: 1,
  },

  pillarLabel: {
    fontSize: 5.7,
    letterSpacing: 1.4,

    color: "#cbb98e",

    textTransform: "uppercase",

    marginBottom: 3,
  },

  pillarTitle: {
    fontSize: 13,

    color: CREAM,
  },

  comparisonRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 10,
  },

  personPlacement: {
    width: "42%",

    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 9,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.45,
    borderColor: DARK_GOLD,
  },

  placementName: {
    fontSize: 6,
    letterSpacing: 1,

    color: SOFT_TEXT,

    textTransform: "uppercase",

    marginBottom: 4,
  },

  placementValue: {
    fontSize: 10,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  comparisonCenter: {
    width: "12%",

    alignItems: "center",
    justifyContent: "center",
  },

  comparisonLine: {
    width: "100%",
    height: 0.5,

    backgroundColor: SOFT_GOLD,

    marginBottom: 4,
  },

  comparisonSymbol: {
    fontSize: 10,

    color: GOLD,
  },

  interpretationTitle: {
    fontSize: 8.5,

    color: CREAM,

    marginBottom: 5,
  },

  interpretationText: {
    fontSize: 7,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "justify",
  },

  meaningRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 8,
  },

  meaningItem: {
    width: "48.5%",

    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 8,

    borderTopWidth: 0.4,
    borderTopColor: DARK_GOLD,
  },

  meaningLabel: {
    fontSize: 5.6,
    letterSpacing: 1,

    color: "#cbb98e",

    textTransform: "uppercase",

    marginBottom: 3,
  },

  meaningText: {
    fontSize: 6.1,
    lineHeight: 1.35,

    color: SOFT_TEXT,
  },

  synthesisCard: {
    position: "relative",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 17,

    marginTop: 3,
    marginBottom: 13,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  synthesisSymbol: {
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

  synthesisSymbolText: {
    fontSize: 11,

    color: BRIGHT_GOLD,
  },

  synthesisTitle: {
    fontSize: 11,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  synthesisText: {
    fontSize: 7.3,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  guideCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 13,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  guideSymbolFrame: {
    width: 30,
    height: 30,

    borderRadius: 15,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 11,
  },

  guideSymbol: {
    fontSize: 12,

    color: BRIGHT_GOLD,
  },

  guideContent: {
    flex: 1,
  },

  guideTitle: {
    fontSize: 7.5,

    color: CREAM,

    marginBottom: 3,
  },

  guideText: {
    fontSize: 6.4,
    lineHeight: 1.4,

    color: SOFT_TEXT,
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

export interface CompatibilityPillarsProps {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
}

type PillarName =
  | "Sun"
  | "Moon"
  | "Ascendant";

interface PillarDefinition {
  key: PillarName;
  title: string;
  label: string;
  icon?: string;
  symbol?: string;
  personMeaning: string;
  relationshipMeaning: string;
}

const PILLARS: PillarDefinition[] = [
  {
    key: "Sun",
    title: "Soleil et Soleil",
    label: "Identité et expression",
    icon: PLANET_ICONS.Sun,
    personMeaning:
      "Le Soleil représente la personnalité consciente, la vitalité, les ambitions et la manière de rayonner.",
    relationshipMeaning:
      "Cette comparaison montre comment vos identités se reconnaissent, se soutiennent ou se stimulent.",
  },
  {
    key: "Moon",
    title: "Lune et Lune",
    label: "Émotions et intimité",
    icon: PLANET_ICONS.Moon,
    personMeaning:
      "La Lune décrit les besoins affectifs, les habitudes émotionnelles et la manière de rechercher la sécurité.",
    relationshipMeaning:
      "Cette comparaison révèle la facilité avec laquelle vous comprenez et accueillez les émotions de l’autre.",
  },
  {
    key: "Ascendant",
    title: "Ascendant et Ascendant",
    label: "Rencontre et quotidien",
    symbol: "ASC",
    personMeaning:
      "L’Ascendant représente la manière spontanée d’entrer en relation, de réagir et de se présenter au monde.",
    relationshipMeaning:
      "Cette comparaison montre comment vos rythmes, vos attitudes et vos comportements naturels s’accordent.",
  },
];

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

function getAscendantSign(
  person: SafeCompatibilityPerson,
): string {
  const directAscendant =
    typeof person.ascendant === "string"
      ? person.ascendant.trim()
      : "";

  if (directAscendant) {
    return directAscendant;
  }

  const ascendantPlanet =
    getCompatibilityPlanet(
      person.planets,
      "Ascendant",
    );

  const sign =
    typeof ascendantPlanet?.sign === "string"
      ? ascendantPlanet.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getPlacementSign(
  person: SafeCompatibilityPerson,
  pillar: PillarName,
): string {
  if (pillar === "Ascendant") {
    return getAscendantSign(person);
  }

  const planet =
    getCompatibilityPlanet(
      person.planets,
      pillar,
    );

  const sign =
    typeof planet?.sign === "string"
      ? planet.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getElement(
  sign: string,
): string {
  const normalized =
    sign
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const fireSigns = [
    "belier",
    "lion",
    "sagittaire",
  ];

  const earthSigns = [
    "taureau",
    "vierge",
    "capricorne",
  ];

  const airSigns = [
    "gemeaux",
    "balance",
    "verseau",
  ];

  const waterSigns = [
    "cancer",
    "scorpion",
    "poissons",
  ];

  if (fireSigns.includes(normalized)) {
    return "Feu";
  }

  if (earthSigns.includes(normalized)) {
    return "Terre";
  }

  if (airSigns.includes(normalized)) {
    return "Air";
  }

  if (waterSigns.includes(normalized)) {
    return "Eau";
  }

  return "";
}

function getPillarInterpretation(
  pillar: PillarName,
  sign1: string,
  sign2: string,
): string {
  const element1 =
    getElement(sign1);

  const element2 =
    getElement(sign2);

  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      "Les données disponibles ne permettent pas encore de produire " +
      "une comparaison entièrement personnalisée pour ce pilier."
    );
  }

  if (
    sign1.toLowerCase() ===
    sign2.toLowerCase()
  ) {
    if (pillar === "Sun") {
      return (
        `Vos deux Soleils en ${sign1} créent une forte impression de reconnaissance. ` +
        "Vous partagez plusieurs réflexes, ambitions et manières de vous affirmer. " +
        "Cette proximité facilite la compréhension, mais demande aussi de respecter " +
        "le besoin de chacun d’exister pleinement."
      );
    }

    if (pillar === "Moon") {
      return (
        `Vos deux Lunes en ${sign1} indiquent des besoins émotionnels semblables. ` +
        "Vous pouvez instinctivement comprendre les réactions de l’autre et créer " +
        "un climat affectif familier. Il faudra toutefois éviter de renforcer ensemble " +
        "les mêmes inquiétudes ou mécanismes de protection."
      );
    }

    return (
      `Vos deux Ascendants en ${sign1} donnent des rythmes et des attitudes naturelles proches. ` +
      "Vous abordez souvent le quotidien de façon comparable, ce qui peut faciliter " +
      "l’organisation, la spontanéité et la manière de vous présenter ensemble."
    );
  }

  if (
    element1 &&
    element2 &&
    element1 === element2
  ) {
    return (
      `Les signes ${sign1} et ${sign2} appartiennent tous les deux à l’élément ${element1}. ` +
      "Cette proximité élémentaire favorise une compréhension naturelle, même si chacun " +
      "exprime cette énergie à sa manière. Vous pouvez généralement reconnaître les motivations " +
      "et les besoins fondamentaux de l’autre."
    );
  }

  const complementary =
    (element1 === "Feu" &&
      element2 === "Air") ||
    (element1 === "Air" &&
      element2 === "Feu") ||
    (element1 === "Terre" &&
      element2 === "Eau") ||
    (element1 === "Eau" &&
      element2 === "Terre");

  if (complementary) {
    return (
      `Les énergies ${element1} et ${element2} peuvent naturellement se compléter. ` +
      `${sign1} apporte une manière particulière d’avancer, tandis que ${sign2} offre ` +
      "une perspective différente mais compatible. Cette combinaison peut soutenir " +
      "l’équilibre, la motivation et la croissance mutuelle."
    );
  }

  return (
    `${sign1} et ${sign2} fonctionnent selon des logiques différentes. ` +
    "Cette diversité peut provoquer des incompréhensions ponctuelles, mais elle peut " +
    "également enrichir la relation en obligeant chacun à découvrir une autre façon " +
    "de ressentir, d’agir ou de communiquer."
  );
}

function getPlacementLabel(
  pillar: PillarName,
  sign: string,
): string {
  if (pillar === "Ascendant") {
    return `Ascendant ${sign}`;
  }

  return `${translateCompatibilityPlanet(
    pillar,
  )} en ${sign}`;
}

function PillarCard({
  pillar,
  person1,
  person2,
}: {
  pillar: PillarDefinition;
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
}) {
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

  const sign1 =
    getPlacementSign(
      person1,
      pillar.key,
    );

  const sign2 =
    getPlacementSign(
      person2,
      pillar.key,
    );

  const interpretation =
    getPillarInterpretation(
      pillar.key,
      sign1,
      sign2,
    );

  return (
    <View
      style={localStyles.pillarCard}
      wrap={false}
    >
      <View
        style={localStyles.pillarAccent}
      />

      <View
        style={localStyles.pillarHeader}
      >
        <View
          style={
            localStyles.pillarIconFrame
          }
        >
          {pillar.icon ? (
            <Image
              src={pillar.icon}
              style={localStyles.pillarIcon}
            />
          ) : (
            <Text
              style={
                localStyles.ascendantSymbol
              }
            >
              {pillar.symbol}
            </Text>
          )}
        </View>

        <View
          style={localStyles.pillarHeading}
        >
          <Text
            style={localStyles.pillarLabel}
          >
            {pillar.label}
          </Text>

          <Text
            style={localStyles.pillarTitle}
          >
            {pillar.title}
          </Text>
        </View>
      </View>

      <View
        style={localStyles.comparisonRow}
      >
        <View
          style={
            localStyles.personPlacement
          }
        >
          <Text
            style={localStyles.placementName}
          >
            {person1Name}
          </Text>

          <Text
            style={
              localStyles.placementValue
            }
          >
            {getPlacementLabel(
              pillar.key,
              sign1,
            )}
          </Text>
        </View>

        <View
          style={
            localStyles.comparisonCenter
          }
        >
          <View
            style={
              localStyles.comparisonLine
            }
          />

          <Text
            style={
              localStyles.comparisonSymbol
            }
          >
            ✦
          </Text>
        </View>

        <View
          style={
            localStyles.personPlacement
          }
        >
          <Text
            style={localStyles.placementName}
          >
            {person2Name}
          </Text>

          <Text
            style={
              localStyles.placementValue
            }
          >
            {getPlacementLabel(
              pillar.key,
              sign2,
            )}
          </Text>
        </View>
      </View>

      <Text
        style={
          localStyles.interpretationTitle
        }
      >
        Votre dynamique
      </Text>

      <Text
        style={
          localStyles.interpretationText
        }
      >
        {interpretation}
      </Text>

      <View
        style={localStyles.meaningRow}
      >
        <View
          style={localStyles.meaningItem}
        >
          <Text
            style={
              localStyles.meaningLabel
            }
          >
            Sur le plan personnel
          </Text>

          <Text
            style={localStyles.meaningText}
          >
            {pillar.personMeaning}
          </Text>
        </View>

        <View
          style={localStyles.meaningItem}
        >
          <Text
            style={
              localStyles.meaningLabel
            }
          >
            Dans la relation
          </Text>

          <Text
            style={localStyles.meaningText}
          >
            {pillar.relationshipMeaning}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function CompatibilityPillars({
  person1,
  person2,
}: CompatibilityPillarsProps) {
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
            Fondations relationnelles
          </Text>

          <Text style={localStyles.title}>
            Les trois piliers de votre lien
          </Text>

          <Text
            style={localStyles.subtitle}
          >
            Le Soleil, la Lune et l’Ascendant
            révèlent vos identités, vos besoins
            émotionnels et votre manière
            naturelle d’entrer en relation.
          </Text>

          <View
            style={localStyles.titleDivider}
          />
        </View>

        <View
          style={localStyles.namesCard}
          wrap={false}
        >
          <View
            style={localStyles.namesAccentLeft}
          />

          <View
            style={
              localStyles.namesAccentRight
            }
          />

          <Text style={localStyles.name}>
            {person1Name}
          </Text>

          <Text
            style={
              localStyles.nameSeparator
            }
          >
            ✦
          </Text>

          <Text style={localStyles.name}>
            {person2Name}
          </Text>
        </View>

        {PILLARS.map((pillar) => (
          <PillarCard
            key={pillar.key}
            pillar={pillar}
            person1={person1}
            person2={person2}
          />
        ))}

        <View
          style={localStyles.synthesisCard}
          wrap={false}
        >
          <View
            style={
              localStyles.synthesisSymbol
            }
          >
            <Text
              style={
                localStyles.synthesisSymbolText
              }
            >
              ✦
            </Text>
          </View>

          <Text
            style={
              localStyles.synthesisTitle
            }
          >
            Votre fondation relationnelle
          </Text>

          <Text
            style={
              localStyles.synthesisText
            }
          >
            Ces trois comparaisons offrent une
            première lecture de votre relation,
            mais elles ne suffisent pas à elles
            seules pour déterminer toute la
            compatibilité. Les interactions
            entre Mercure, Vénus, Mars, Saturne
            et les autres planètes préciseront
            ensuite la communication,
            l’attirance, la stabilité et les
            principaux défis de votre lien.
          </Text>
        </View>

        <View
          style={localStyles.guideCard}
          wrap={false}
        >
          <View
            style={
              localStyles.guideSymbolFrame
            }
          >
            <Text
              style={localStyles.guideSymbol}
            >
              ☾
            </Text>
          </View>

          <View
            style={localStyles.guideContent}
          >
            <Text
              style={localStyles.guideTitle}
            >
              À retenir
            </Text>

            <Text
              style={localStyles.guideText}
            >
              Une différence entre deux signes
              n’est pas nécessairement un
              obstacle. Elle peut devenir une
              véritable complémentarité lorsque
              chacun comprend et respecte la
              manière naturelle de fonctionner
              de l’autre.
            </Text>
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
          6
        </Text>
      </View>
    </Page>
  );
}
