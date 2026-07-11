import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  MODALITY_TEXT,
  SIGN_MODALITY,
} from "@/lib/astrology";

import {
  ASCENDANT_ICON,
  PLANET_ICONS,
} from "./EssentialPdfAssets";

import { pdfStyles } from "./EssentialPdfStyles";
import type { PlanetsProps } from "./EssentialPdfTypes";

import {
  getPlanet,
  getPlanetSignName,
  MAIN_PLANETS,
} from "./EssentialPdfUtils";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const MODALITIES = [
  "Cardinal",
  "Fixe",
  "Mutable",
];

const MODALITY_WORDS: Record<string, string> = {
  Cardinal:
    "Initiative • Impulsion • Leadership",

  Fixe:
    "Persévérance • Stabilité • Détermination",

  Mutable:
    "Adaptation • Évolution • Souplesse",
};

const MODALITY_INSIGHTS: Record<
  string,
  {
    strength: string;
    balance: string;
  }
> = {
  Cardinal: {
    strength:
      "Votre force réside dans votre capacité à démarrer, à prendre les devants et à insuffler un nouvel élan. Vous avancez plus facilement lorsqu’un objectif vous stimule.",

    balance:
      "Accordez davantage d’attention à la continuité. Commencer est une force, mais consolider vos efforts vous permet de transformer votre impulsion en réussite durable.",
  },

  Fixe: {
    strength:
      "Votre force réside dans votre persévérance, votre fidélité et votre capacité à maintenir le cap malgré les obstacles. Vous construisez avec constance.",

    balance:
      "Laissez une place au changement et à l’imprévu. Votre stabilité devient encore plus puissante lorsqu’elle s’accompagne de souplesse.",
  },

  Mutable: {
    strength:
      "Votre force réside dans votre adaptabilité, votre intelligence du mouvement et votre capacité à évoluer lorsque les circonstances changent.",

    balance:
      "Veillez à ne pas disperser votre énergie. Choisir une direction claire vous aide à transformer votre souplesse en progression concrète.",
  },
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 17,
  },

  headerKicker: {
    color: "#f4c95d",
    fontSize: 8.5,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 7,
  },

  headerTitle: {
    color: "#fff8e7",
    fontSize: 25,
    lineHeight: 1.15,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 9,
  },

  dividerLine: {
    width: 50,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  headerLead: {
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9.4,
    lineHeight: 1.45,
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    marginBottom: 13,
  },

  card: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 172,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  cardSpacing: {
    marginRight: 8,
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  modalityIcon: {
    width: 29,
    height: 29,
    objectFit: "contain",
  },

  name: {
    color: "#fff8e7",
    fontSize: 14,
    marginBottom: 8,
  },

  value: {
    color: "#f4c95d",
    fontSize: 26,
    lineHeight: 1,
    marginBottom: 6,
  },

  count: {
    color: "#9da4b7",
    fontSize: 8.2,
    marginBottom: 11,
  },

  words: {
    color: "#bfc5d5",
    fontSize: 8,
    lineHeight: 1.42,
    textAlign: "center",
  },

  dominantBox: {
    position: "relative",
    flexDirection: "row",
    minHeight: 126,
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  dominantBadge: {
    width: 53,
    height: 53,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  dominantIcon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },

  dominantWatermark: {
    position: "absolute",
    top: 10,
    right: 15,
    width: 90,
    height: 90,
    objectFit: "contain",
    opacity: 0.035,
  },

  dominantContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  dominantTitle: {
    color: "#fff8e7",
    fontSize: 18,
    marginBottom: 8,
  },

  dominantText: {
    color: "#d9d4c7",
    fontSize: 9.2,
    lineHeight: 1.48,
  },

  insightRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  insightBox: {
    flexGrow: 1,
    flexBasis: 0,
    minHeight: 94,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  insightBoxLeft: {
    marginRight: 8,
  },

  insightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },

  insightIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 8,
  },

  insightTitle: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#f4c95d",
    fontSize: 8.2,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  insightText: {
    color: "#bfc5d5",
    fontSize: 8.3,
    lineHeight: 1.43,
  },

  note: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 13,
    marginBottom: 24,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  noteIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginRight: 10,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 7.9,
    lineHeight: 1.32,
  },
});

function getModalityIcon(
  modality: string
) {
  switch (modality) {
    case "Cardinal":
      return PLANET_ICONS.Mars;

    case "Fixe":
      return PLANET_ICONS.Saturn;

    case "Mutable":
      return PLANET_ICONS.Mercury;

    default:
      return ASCENDANT_ICON;
  }
}

export default function PdfModalities({
  planets,
}: PlanetsProps) {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const counts: Record<string, number> = {
    Cardinal: 0,
    Fixe: 0,
    Mutable: 0,
  };

  MAIN_PLANETS.forEach((planetName) => {
    const planet = getPlanet(
      safePlanets,
      planetName
    );

    const signName =
      getPlanetSignName(planet);

    if (!signName) {
      return;
    }

    const modality =
      SIGN_MODALITY[signName];

    if (
      modality &&
      counts[modality] !== undefined
    ) {
      counts[modality] += 1;
    }
  });

  const dominantModality =
    Object.entries(counts).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "";

  const hasDominantModality =
    Boolean(
      dominantModality &&
        counts[dominantModality] > 0
    );

  const dominantText =
    hasDominantModality
      ? MODALITY_TEXT[dominantModality]
      : "Aucune modalité dominante n’a pu être déterminée avec les données disponibles.";

  const dominantIcon =
    getModalityIcon(dominantModality);

  const insights =
    MODALITY_INSIGHTS[
      dominantModality
    ] || {
      strength:
        "Votre thème combine plusieurs manières d’agir, de poursuivre vos efforts et de vous adapter aux circonstances.",

      balance:
        "Observez les moments où vous initiez facilement, ceux où vous persévérez et ceux où vous préférez ajuster votre direction.",
    };

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <Text style={styles.headerKicker}>
          Rythme intérieur
        </Text>

        <Text style={styles.headerTitle}>
          Les modalités astrologiques
        </Text>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />

          <Image
            src={ASCENDANT_ICON}
            style={styles.dividerIcon}
          />

          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.headerLead}>
          Les modalités montrent comment vous commencez,
          stabilisez ou adaptez votre énergie au fil de
          vos expériences.
        </Text>
      </View>

      <View style={styles.grid}>
        {MODALITIES.map(
          (modality, index) => {
            const value =
              counts[modality];

            const modalityIcon =
              getModalityIcon(modality);

            const cardStyle =
              index <
              MODALITIES.length - 1
                ? [
                    styles.card,
                    styles.cardSpacing,
                  ]
                : styles.card;

            return (
              <View
                key={modality}
                wrap={false}
                style={cardStyle}
              >
                <View
                  style={styles.iconCircle}
                >
                  <Image
                    src={modalityIcon}
                    style={
                      styles.modalityIcon
                    }
                  />
                </View>

                <Text style={styles.name}>
                  {modality}
                </Text>

                <Text style={styles.value}>
                  {value}
                </Text>

                <Text style={styles.count}>
                  {value === 1
                    ? "1 planète"
                    : `${value} planètes`}
                </Text>

                <Text style={styles.words}>
                  {
                    MODALITY_WORDS[
                      modality
                    ]
                  }
                </Text>
              </View>
            );
          }
        )}
      </View>

      <View
        style={styles.dominantBox}
        wrap={false}
      >
        <View
          style={styles.dominantBadge}
        >
          <Image
            src={dominantIcon}
            style={styles.dominantIcon}
          />
        </View>

        <Image
          src={dominantIcon}
          style={
            styles.dominantWatermark
          }
        />

        <View
          style={styles.dominantContent}
        >
          <Text style={styles.kicker}>
            Votre dynamique dominante
          </Text>

          <Text
            style={styles.dominantTitle}
          >
            {hasDominantModality
              ? dominantModality
              : "Non déterminée"}
          </Text>

          <Text
            style={styles.dominantText}
          >
            {dominantText}
          </Text>
        </View>
      </View>

      <View style={styles.insightRow}>
        <View
          style={[
            styles.insightBox,
            styles.insightBoxLeft,
          ]}
          wrap={false}
        >
          <View
            style={styles.insightHeader}
          >
            <Image
              src={dominantIcon}
              style={styles.insightIcon}
            />

            <Text
              style={styles.insightTitle}
            >
              Votre force naturelle
            </Text>
          </View>

          <Text style={styles.insightText}>
            {insights.strength}
          </Text>
        </View>

        <View
          style={styles.insightBox}
          wrap={false}
        >
          <View
            style={styles.insightHeader}
          >
            <Image
              src={ASCENDANT_ICON}
              style={styles.insightIcon}
            />

            <Text
              style={styles.insightTitle}
            >
              Votre équilibre à développer
            </Text>
          </View>

          <Text style={styles.insightText}>
            {insights.balance}
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <Image
          src={PLANET_ICONS.Moon}
          style={styles.noteIcon}
        />

        <Text style={styles.noteText}>
          Aucune modalité n’est meilleure qu’une autre.
          Leur répartition révèle votre manière naturelle
          d’initier une action, de maintenir vos efforts
          ou de vous adapter aux changements.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
