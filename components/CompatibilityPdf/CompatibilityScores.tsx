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
  CompatibilityScores as CompatibilityScoresData,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

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

    top: 61,
    right: -54,

    width: 150,
    height: 150,

    borderRadius: 75,

    borderWidth: 0.5,
    borderColor: SOFT_GOLD,

    opacity: 0.2,
  },

  decorativeCircleBottom: {
    position: "absolute",

    bottom: 67,
    left: -54,

    width: 145,
    height: 145,

    borderRadius: 72.5,

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

  namesCard: {
    position: "relative",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 14,

    marginBottom: 15,

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

  nameText: {
    width: "40%",

    fontSize: 13,

    color: CREAM,

    textAlign: "center",
  },

  nameSeparator: {
    width: "12%",

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorFrame: {
    width: 27,
    height: 27,

    borderRadius: 13.5,

    borderWidth: 0.6,
    borderColor: GOLD,

    backgroundColor: NAVY_CARD_LIGHT,

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorIcon: {
    width: 19,
    height: 19,

    objectFit: "contain",
  },

  overallSection: {
    position: "relative",

    alignItems: "center",

    paddingTop: 18,
    paddingBottom: 17,
    paddingHorizontal: 18,

    marginBottom: 16,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.8,
    borderColor: SOFT_GOLD,
  },

  overallAccentTop: {
    position: "absolute",

    top: -1,
    left: "33%",

    width: "34%",
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  overallLabel: {
    fontSize: 6.1,
    letterSpacing: 1.7,

    color: "#d5c49a",

    textTransform: "uppercase",
    textAlign: "center",

    marginBottom: 7,
  },

  overallScoreRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",

    marginBottom: 8,
  },

  overallScore: {
    fontSize: 48,
    lineHeight: 1,

    color: BRIGHT_GOLD,

    textAlign: "center",
  },

  overallPercent: {
    fontSize: 18,

    color: GOLD,

    marginLeft: 3,
    marginBottom: 5,
  },

  overallLevel: {
    fontSize: 12,

    color: CREAM,

    textAlign: "center",

    marginBottom: 6,
  },

  overallText: {
    width: "84%",

    fontSize: 7.4,
    lineHeight: 1.45,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  overallBarTrack: {
    width: "78%",
    height: 7,

    marginTop: 11,

    backgroundColor: "#152135",

    borderWidth: 0.4,
    borderColor: DARK_GOLD,
  },

  overallBarFill: {
    height: "100%",

    backgroundColor: BRIGHT_GOLD,
  },

  scoreGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",

    marginBottom: 15,
  },

  scoreCard: {
    width: "48.4%",

    paddingTop: 11,
    paddingBottom: 11,
    paddingHorizontal: 12,

    marginBottom: 10,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  scoreCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 7,
  },

  scoreIdentity: {
    flexDirection: "row",
    alignItems: "center",

    flex: 1,
  },

  scoreIconFrame: {
    width: 27,
    height: 27,

    borderRadius: 13.5,

    borderWidth: 0.6,
    borderColor: SOFT_GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 8,
  },

  scoreIcon: {
    width: 17,
    height: 17,

    objectFit: "contain",
  },

  scoreTitle: {
    flex: 1,

    fontSize: 8.2,
    lineHeight: 1.2,

    color: CREAM,
  },

  scoreValue: {
    fontSize: 13,

    color: BRIGHT_GOLD,

    textAlign: "right",
  },

  scoreBarTrack: {
    height: 5,

    backgroundColor: "#152135",

    borderWidth: 0.35,
    borderColor: DARK_GOLD,

    marginBottom: 6,
  },

  scoreBarFill: {
    height: "100%",

    backgroundColor: GOLD,
  },

  scoreDescription: {
    fontSize: 6.2,
    lineHeight: 1.38,

    color: SOFT_TEXT,
  },

  interpretationSection: {
    position: "relative",

    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 17,

    marginBottom: 14,

    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },

  interpretationSymbol: {
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

  interpretationIcon: {
    width: 18,
    height: 18,

    objectFit: "contain",
  },

  interpretationTitle: {
    fontSize: 11,

    color: CREAM,

    textAlign: "center",

    marginBottom: 7,
  },

  interpretationText: {
    fontSize: 7.3,
    lineHeight: 1.48,

    color: MUTED_CREAM,

    textAlign: "center",
  },

  noteCard: {
    flexDirection: "row",
    alignItems: "center",

    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 13,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  noteSymbolFrame: {
    width: 30,
    height: 30,

    borderRadius: 15,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 11,
  },

  noteIcon: {
    width: 18,
    height: 18,

    objectFit: "contain",
  },

  noteContent: {
    flex: 1,
  },

  noteTitle: {
    fontSize: 7.5,

    color: CREAM,

    marginBottom: 3,
  },

  noteText: {
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

export interface CompatibilityScoresProps {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  scores?: CompatibilityScoresData;
}

interface ScoreItem {
  key: keyof CompatibilityScoresData;
  title: string;
  icon: string;
  description: string;
}

const SCORE_ITEMS: ScoreItem[] = [
  {
    key: "emotional",
    title: "Lien émotionnel",
    icon: PLANET_ICONS.Moon,
    description:
      "La capacité à comprendre les besoins affectifs et à créer un sentiment de sécurité.",
  },
  {
    key: "communication",
    title: "Communication",
    icon: PLANET_ICONS.Mercury,
    description:
      "La fluidité des échanges, la compréhension mutuelle et la gestion des désaccords.",
  },
  {
    key: "romantic",
    title: "Affinité amoureuse",
    icon: PLANET_ICONS.Venus,
    description:
      "L’expression de l’affection, de la tendresse, de l’harmonie et des valeurs partagées.",
  },
  {
    key: "attraction",
    title: "Attirance",
    icon: PLANET_ICONS.Mars,
    description:
      "L’intensité du désir, de l’élan mutuel et de la dynamique physique entre les deux personnes.",
  },
  {
    key: "stability",
    title: "Stabilité",
    icon: PLANET_ICONS.Saturn,
    description:
      "Le potentiel de continuité, d’engagement, de structure et de construction dans le temps.",
  },
  {
    key: "growth",
    title: "Évolution",
    icon: PLANET_ICONS.Jupiter,
    description:
      "La capacité de la relation à favoriser l’apprentissage, la transformation et la croissance.",
  },
];

const DEFAULT_SCORES: CompatibilityScoresData = {
  overall: 0,
  emotional: 0,
  communication: 0,
  romantic: 0,
  attraction: 0,
  stability: 0,
  growth: 0,
};

function clampScore(
  score?: number,
): number {
  if (
    typeof score !== "number" ||
    !Number.isFinite(score)
  ) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(100, Math.round(score)),
  );
}

function getPersonName(
  person: SafeCompatibilityPerson,
  fallback: string,
): string {
  const name =
    typeof person.firstName === "string"
      ? person.firstName.trim()
      : "";

  return name || fallback;
}

function getScoreLevel(
  score: number,
): string {
  if (score >= 90) {
    return "Connexion exceptionnelle";
  }

  if (score >= 80) {
    return "Très forte compatibilité";
  }

  if (score >= 70) {
    return "Belle harmonie";
  }

  if (score >= 60) {
    return "Compatibilité prometteuse";
  }

  if (score >= 50) {
    return "Équilibre à construire";
  }

  if (score >= 35) {
    return "Relation évolutive";
  }

  return "Dynamique exigeante";
}

function getOverallText(
  score: number,
): string {
  if (score >= 85) {
    return (
      "Votre synastrie révèle une connexion particulièrement harmonieuse. " +
      "Vos différences peuvent enrichir la relation tandis que vos affinités " +
      "favorisent naturellement la proximité, la compréhension et l’évolution commune."
    );
  }

  if (score >= 70) {
    return (
      "Votre relation bénéficie de plusieurs affinités importantes. " +
      "Certaines différences demanderont des ajustements, mais elles peuvent aussi " +
      "devenir des sources de complémentarité et de croissance."
    );
  }

  if (score >= 55) {
    return (
      "Votre dynamique présente un mélange équilibré de fluidité et de défis. " +
      "La qualité de la relation dépendra notamment de votre capacité à communiquer, " +
      "à respecter vos différences et à construire des repères communs."
    );
  }

  if (score >= 40) {
    return (
      "Cette relation peut être profondément formatrice. " +
      "Elle demande toutefois davantage de conscience, de dialogue et d’adaptation " +
      "afin que les tensions deviennent des occasions de compréhension."
    );
  }

  return (
    "Votre synastrie met en lumière une dynamique complexe et exigeante. " +
    "Cela ne condamne pas la relation, mais souligne l’importance de la patience, " +
    "de la communication et d’un engagement conscient des deux personnes."
  );
}

function ScoreBar({
  value,
  large = false,
}: {
  value: number;
  large?: boolean;
}) {
  return (
    <View
      style={
        large
          ? localStyles.overallBarTrack
          : localStyles.scoreBarTrack
      }
    >
      <View
        style={[
          large
            ? localStyles.overallBarFill
            : localStyles.scoreBarFill,
          {
            width: `${value}%`,
          },
        ]}
      />
    </View>
  );
}

function ScoreCard({
  item,
  value,
}: {
  item: ScoreItem;
  value: number;
}) {
  return (
    <View
      style={localStyles.scoreCard}
      wrap={false}
    >
      <View
        style={localStyles.scoreCardHeader}
      >
        <View
          style={localStyles.scoreIdentity}
        >
          <View
            style={localStyles.scoreIconFrame}
          >
            <Image
              src={item.icon}
              style={localStyles.scoreIcon}
            />
          </View>

          <Text
            style={localStyles.scoreTitle}
          >
            {item.title}
          </Text>
        </View>

        <Text
          style={localStyles.scoreValue}
        >
          {value} %
        </Text>
      </View>

      <ScoreBar value={value} />

      <Text
        style={localStyles.scoreDescription}
      >
        {item.description}
      </Text>
    </View>
  );
}

export default function CompatibilityScores({
  person1,
  person2,
  scores,
}: CompatibilityScoresProps) {
  const safeScores = {
    ...DEFAULT_SCORES,
    ...(scores || {}),
  };

  const overall =
    clampScore(safeScores.overall);

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
        style={localStyles.decorativeCircleTop}
        fixed
      />

      <View
        style={localStyles.decorativeCircleBottom}
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
            Vue d’ensemble
          </Text>

          <Text style={localStyles.title}>
            Votre compatibilité globale
          </Text>

          <Text
            style={localStyles.subtitle}
          >
            Une lecture synthétique des grandes
            dimensions de votre relation avant
            d’explorer chaque connexion en
            profondeur.
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
            style={localStyles.namesAccentRight}
          />

          <Text
            style={localStyles.nameText}
          >
            {person1Name}
          </Text>

          <View
            style={localStyles.nameSeparator}
          >
            <View
              style={localStyles.nameSeparatorFrame}
            >
              <Image
                src={LOGO_URL}
                style={localStyles.nameSeparatorIcon}
              />
            </View>
          </View>

          <Text
            style={localStyles.nameText}
          >
            {person2Name}
          </Text>
        </View>

        <View
          style={localStyles.overallSection}
          wrap={false}
        >
          <View
            style={localStyles.overallAccentTop}
          />

          <Text
            style={localStyles.overallLabel}
          >
            Indice général de compatibilité
          </Text>

          <View
            style={localStyles.overallScoreRow}
          >
            <Text
              style={localStyles.overallScore}
            >
              {overall}
            </Text>

            <Text
              style={localStyles.overallPercent}
            >
              %
            </Text>
          </View>

          <Text
            style={localStyles.overallLevel}
          >
            {getScoreLevel(overall)}
          </Text>

          <Text
            style={localStyles.overallText}
          >
            {getOverallText(overall)}
          </Text>

          <ScoreBar
            value={overall}
            large
          />
        </View>

        <View
          style={localStyles.scoreGrid}
        >
          {SCORE_ITEMS.map((item) => {
            const value =
              clampScore(
                safeScores[item.key],
              );

            return (
              <ScoreCard
                key={item.key}
                item={item}
                value={value}
              />
            );
          })}
        </View>

        <View
          style={localStyles.interpretationSection}
          wrap={false}
        >
          <View
            style={localStyles.interpretationSymbol}
          >
            <Image
              src={LOGO_URL}
              style={localStyles.interpretationIcon}
            />
          </View>

          <Text
            style={localStyles.interpretationTitle}
          >
            Un score n’est jamais un verdict
          </Text>

          <Text
            style={localStyles.interpretationText}
          >
            Ces indices offrent une vue
            d’ensemble des interactions
            astrologiques. Une note élevée
            révèle davantage de fluidité
            naturelle, tandis qu’une note plus
            basse signale généralement une zone
            qui demande davantage de
            compréhension, de maturité ou
            d’ajustement. La qualité réelle
            d’une relation dépend toujours de
            la manière dont les deux personnes
            choisissent de vivre ces énergies.
          </Text>
        </View>

        <View
          style={localStyles.noteCard}
          wrap={false}
        >
          <View
            style={localStyles.noteSymbolFrame}
          >
            <Image
              src={PLANET_ICONS.Moon}
              style={localStyles.noteIcon}
            />
          </View>

          <View style={localStyles.noteContent}>
            <Text
              style={localStyles.noteTitle}
            >
              La suite de votre analyse
            </Text>

            <Text
              style={localStyles.noteText}
            >
              Les prochaines sections
              expliqueront la source de ces
              résultats à travers vos planètes
              personnelles, vos aspects de
              synastrie, vos forces naturelles
              et vos principaux défis.
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
          5
        </Text>
      </View>
    </Page>
  );
    }
