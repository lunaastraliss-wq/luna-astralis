import type { ReactNode } from "react";

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
  CompatibilityAspect,
  CompatibilitySectionProps,
  SafeCompatibilityPerson,
} from "./CompatibilityPdfTypes";

import {
  getCompatibilityPlanet,
  translateCompatibilityAspect,
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

const styles = StyleSheet.create({
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
    top: 80,
    left: -56,
    width: 145,
    height: 145,
    borderRadius: 72.5,
    borderWidth: 0.5,
    borderColor: SOFT_GOLD,
    opacity: 0.18,
  },
  decorativeCircleBottom: {
    position: "absolute",
    right: -49,
    bottom: 72,
    width: 132,
    height: 132,
    borderRadius: 66,
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
    marginBottom: 15,
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
    width: "86%",
    fontSize: 8.1,
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
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.65,
    borderColor: DARK_GOLD,
  },
  namesAccentLeft: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 70,
    height: 2,
    backgroundColor: BRIGHT_GOLD,
  },
  namesAccentRight: {
    position: "absolute",
    right: 0,
    bottom: -1,
    width: 70,
    height: 2,
    backgroundColor: BRIGHT_GOLD,
  },
  name: {
    width: "40%",
    fontSize: 12.5,
    color: CREAM,
    textAlign: "center",
  },
  nameSeparator: {
    width: "12%",
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nameSeparatorIcon: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginHorizontal: 1,
  },
  nameSeparatorLogo: {
    width: 22,
    height: 16,
    objectFit: "contain",
  },
  heroCard: {
    position: "relative",
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 14,
    marginBottom: 11,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },
  heroAccent: {
    position: "absolute",
    top: -1,
    left: "34%",
    width: "32%",
    height: 2,
    backgroundColor: BRIGHT_GOLD,
  },
  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconFrame: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 0.75,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  planetIcon: {
    width: 26,
    height: 26,
    objectFit: "contain",
  },
  heroHeading: {
    flex: 1,
  },
  heroLabel: {
    fontSize: 5.8,
    letterSpacing: 1.4,
    color: "#cbb98e",
    textTransform: "uppercase",
    marginBottom: 3,
  },
  heroTitle: {
    fontSize: 13,
    color: CREAM,
    marginBottom: 3,
  },
  heroIntro: {
    fontSize: 6.4,
    lineHeight: 1.35,
    color: SOFT_TEXT,
  },
  placementRow: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  placementCard: {
    width: "43%",
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 10,
    backgroundColor: NAVY_CARD_LIGHT,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    alignItems: "center",
  },
  placementName: {
    fontSize: 5.8,
    letterSpacing: 1,
    color: SOFT_TEXT,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  placementValue: {
    fontSize: 10.8,
    color: BRIGHT_GOLD,
    textAlign: "center",
    marginBottom: 3,
  },
  placementStyle: {
    fontSize: 6.2,
    lineHeight: 1.3,
    color: MUTED_CREAM,
    textAlign: "center",
  },
  placementCenter: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  placementCenterCircle: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    borderWidth: 0.65,
    borderColor: SOFT_GOLD,
    alignItems: "center",
    justifyContent: "center",
  },
  placementCenterSymbol: {
    width: 17,
    height: 17,
    objectFit: "contain",
  },
  interpretationTitle: {
    fontSize: 8.6,
    color: CREAM,
    marginBottom: 5,
  },
  interpretationText: {
    fontSize: 7,
    lineHeight: 1.47,
    color: MUTED_CREAM,
    textAlign: "justify",
  },
  section: {
    marginBottom: 11,
  },
  sectionTitle: {
    fontSize: 6.2,
    letterSpacing: 1.6,
    color: "#d5c49a",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 8,
  },
  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoCard: {
    width: "48.4%",
    minHeight: 93,
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 11,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  cardSymbolFrame: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 0.6,
    borderColor: SOFT_GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  cardSymbol: {
    width: 16,
    height: 16,
    objectFit: "contain",
  },
  cardSymbolPair: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardSymbolPairIcon: {
    width: 11,
    height: 11,
    objectFit: "contain",
  },
  cardTitle: {
    flex: 1,
    fontSize: 8.1,
    color: CREAM,
  },
  cardText: {
    fontSize: 6.35,
    lineHeight: 1.42,
    color: SOFT_TEXT,
    textAlign: "justify",
  },
  aspectCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },
  aspectSymbolFrame: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.6,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  aspectSymbol: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },
  aspectContent: {
    flex: 1,
  },
  aspectTitle: {
    fontSize: 7.4,
    color: CREAM,
    marginBottom: 2,
  },
  aspectText: {
    fontSize: 6,
    lineHeight: 1.36,
    color: SOFT_TEXT,
  },
  aspectNature: {
    width: 63,
    fontSize: 5.6,
    lineHeight: 1.25,
    color: MUTED_CREAM,
    textAlign: "right",
  },
  synthesisRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  synthesisCard: {
    width: "48.4%",
    minHeight: 83,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 11,
    backgroundColor: NAVY_CARD_LIGHT,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },
  synthesisTitle: {
    fontSize: 7.5,
    color: CREAM,
    marginBottom: 5,
  },
  synthesisText: {
    fontSize: 6.2,
    lineHeight: 1.4,
    color: SOFT_TEXT,
    textAlign: "justify",
  },
  adviceCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 13,
    backgroundColor: NAVY_CARD,
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: SOFT_GOLD,
  },
  adviceSymbolFrame: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.6,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  adviceSymbol: {
    width: 19,
    height: 19,
    objectFit: "contain",
  },
  adviceContent: {
    flex: 1,
  },
  adviceTitle: {
    fontSize: 7.5,
    color: CREAM,
    marginBottom: 3,
  },
  adviceText: {
    fontSize: 6.35,
    lineHeight: 1.4,
    color: SOFT_TEXT,
  },
  fullCard: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },
  fullCardTitle: {
    fontSize: 8.2,
    color: CREAM,
    marginBottom: 5,
  },
  fullCardText: {
    fontSize: 6.5,
    lineHeight: 1.45,
    color: SOFT_TEXT,
    textAlign: "justify",
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

interface LoveAspect {
  id: string;
  person1Planet: string;
  person2Planet: string;
  type: CompatibilityAspect["type"];
  orb: number;
}

type NamesCardSymbol =
  | {
      type: "planet";
      source: string;
    }
  | {
      type: "planets";
      sources: string[];
    }
  | {
      type: "logo";
    };

function normalizeValue(value: unknown): string {
  if (typeof value !== "string") return "";

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
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

function getPlanetSign(
  person: SafeCompatibilityPerson,
  planetName: string,
): string {
  const planet = getCompatibilityPlanet(
    person.planets,
    planetName,
  );

  const sign =
    typeof planet?.sign === "string"
      ? planet.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getElement(sign: string): string {
  const normalized = normalizeValue(sign);

  if (["belier", "lion", "sagittaire"].includes(normalized)) {
    return "Feu";
  }

  if (["taureau", "vierge", "capricorne"].includes(normalized)) {
    return "Terre";
  }

  if (["gemeaux", "balance", "verseau"].includes(normalized)) {
    return "Air";
  }

  if (["cancer", "scorpion", "poissons"].includes(normalized)) {
    return "Eau";
  }

  return "Non précisé";
}

function getVenusStyle(sign: string): string {
  const texts: Record<string, string> = {
    belier:
      "Aime avec spontanéité, enthousiasme et franchise. Le sentiment doit rester vivant, stimulant et porté par un élan sincère.",
    taureau:
      "Aime avec fidélité, sensualité et constance. La sécurité, la présence et les gestes concrets nourrissent profondément son attachement.",
    gemeaux:
      "Aime par les mots, la curiosité et la légèreté. L’échange intellectuel et la variété entretiennent son intérêt amoureux.",
    cancer:
      "Aime avec douceur, protection et sensibilité. La confiance émotionnelle et le sentiment de former un foyer sont essentiels.",
    lion:
      "Aime avec chaleur, générosité et fierté. Cette Vénus recherche une relation expressive, loyale et valorisante.",
    vierge:
      "Aime par l’attention, le service et la fiabilité. Les preuves discrètes comptent souvent davantage que les grandes déclarations.",
    balance:
      "Aime avec charme, diplomatie et romantisme. L’harmonie, le respect et la beauté du lien occupent une place centrale.",
    scorpion:
      "Aime avec intensité, profondeur et exclusivité. La loyauté et la vérité émotionnelle sont indispensables à son abandon.",
    sagittaire:
      "Aime avec liberté, enthousiasme et sincérité. Le couple doit offrir de l’espace, des projets et un horizon commun.",
    capricorne:
      "Aime avec sérieux, prudence et engagement. La stabilité et la capacité de construire dans le temps définissent son attachement.",
    verseau:
      "Aime avec indépendance, complicité et originalité. L’amitié, la liberté et l’authenticité soutiennent le sentiment.",
    poissons:
      "Aime avec empathie, imagination et dévouement. La connexion émotionnelle et le rêve partagé donnent tout son sens à la relation.",
  };

  return (
    texts[normalizeValue(sign)] ||
    "Les données disponibles ne permettent pas encore de préciser entièrement sa manière d’aimer."
  );
}

function getMarsStyle(sign: string): string {
  const texts: Record<string, string> = {
    belier:
      "Désir direct, rapide et conquérant. L’initiative, la spontanéité et le défi éveillent fortement son énergie.",
    taureau:
      "Désir sensuel, constant et physique. Le rythme lent, la confiance et le confort favorisent l’abandon.",
    gemeaux:
      "Désir curieux, joueur et mental. La parole, l’humour et la nouveauté stimulent l’attirance.",
    cancer:
      "Désir protecteur, émotionnel et réceptif. La sécurité affective conditionne fortement l’ouverture intime.",
    lion:
      "Désir chaleureux, théâtral et passionné. La reconnaissance et l’admiration renforcent son élan.",
    vierge:
      "Désir attentif, précis et réservé. La confiance se développe par les détails, le soin et la présence réelle.",
    balance:
      "Désir charmeur, relationnel et harmonieux. La séduction et l’équilibre du partage sont essentiels.",
    scorpion:
      "Désir magnétique, intense et profond. L’intimité devient une expérience de fusion, de vérité et de transformation.",
    sagittaire:
      "Désir libre, enthousiaste et aventureux. L’élan augmente lorsque la relation reste vivante et ouverte.",
    capricorne:
      "Désir maîtrisé, persévérant et solide. L’intensité grandit avec le temps, la confiance et l’engagement.",
    verseau:
      "Désir indépendant, imprévisible et original. La liberté et la stimulation mentale entretiennent l’attraction.",
    poissons:
      "Désir intuitif, romantique et fusionnel. L’imaginaire et la sensibilité jouent un rôle majeur dans l’intimité.",
  };

  return (
    texts[normalizeValue(sign)] ||
    "Les données disponibles ne permettent pas encore de préciser entièrement son expression du désir."
  );
}

function areComplementaryElements(
  first: string,
  second: string,
): boolean {
  return (
    (first === "Feu" && second === "Air") ||
    (first === "Air" && second === "Feu") ||
    (first === "Terre" && second === "Eau") ||
    (first === "Eau" && second === "Terre")
  );
}

function getVenusCompatibilityText(
  sign1: string,
  sign2: string,
): string {
  if (sign1 === "Non précisé" || sign2 === "Non précisé") {
    return "Les deux positions de Vénus ne sont pas disponibles. L’analyse amoureuse pourra être approfondie lorsque les thèmes complets seront fournis.";
  }

  const normalized1 = normalizeValue(sign1);
  const normalized2 = normalizeValue(sign2);
  const element1 = getElement(sign1);
  const element2 = getElement(sign2);

  if (normalized1 === normalized2) {
    return `Vos deux Vénus en ${sign1} recherchent un amour exprimé de manière très semblable. Vous reconnaissez facilement les gestes, les attentions et les valeurs qui rassurent l’autre. Cette proximité favorise un fort sentiment d’évidence, mais demande de ne pas considérer l’affection comme acquise.`;
  }

  if (element1 === element2) {
    return `Vos Vénus en ${sign1} et en ${sign2} appartiennent au même élément, ${element1}. Vos besoins affectifs reposent donc sur une base commune. Même si vos styles diffèrent, vous pouvez généralement comprendre ce que l’autre considère comme une preuve d’amour.`;
  }

  if (areComplementaryElements(element1, element2)) {
    return `Vos Vénus en ${sign1} et en ${sign2} expriment l’amour de façons différentes mais complémentaires. L’une apporte l’élan, l’expression ou la légèreté, tandis que l’autre ajoute de la profondeur, de la stabilité ou de la sensibilité. Votre lien gagne en richesse lorsque vous traduisez vos besoins sans attendre que l’autre les devine.`;
  }

  return `Vos Vénus en ${sign1} et en ${sign2} n’attendent pas toujours les mêmes preuves d’amour. L’un peut rechercher davantage de spontanéité, de mots ou de mouvement, tandis que l’autre privilégie la sécurité, la profondeur ou les gestes concrets. La compatibilité grandit lorsque chacun apprend réellement le langage affectif de l’autre.`;
}

function getMarsCompatibilityText(
  sign1: string,
  sign2: string,
): string {
  if (sign1 === "Non précisé" || sign2 === "Non précisé") {
    return "Les deux positions de Mars ne sont pas disponibles. L’analyse de l’attirance et de la gestion des tensions pourra être approfondie lorsque les thèmes complets seront fournis.";
  }

  const normalized1 = normalizeValue(sign1);
  const normalized2 = normalizeValue(sign2);
  const element1 = getElement(sign1);
  const element2 = getElement(sign2);

  if (normalized1 === normalized2) {
    return `Vos deux Mars en ${sign1} partagent un rythme d’action et de désir très proche. L’attirance peut être immédiate, et vous comprenez instinctivement comment l’autre prend l’initiative. Cette ressemblance peut aussi intensifier la compétition ou les réactions impulsives.`;
  }

  if (element1 === element2) {
    return `Vos Mars en ${sign1} et en ${sign2} appartiennent au même élément, ${element1}. Vos énergies peuvent se mobiliser dans une direction semblable, ce qui favorise la coopération, le désir et la réalisation de projets communs.`;
  }

  if (areComplementaryElements(element1, element2)) {
    return `Vos Mars en ${sign1} et en ${sign2} peuvent créer une attraction complémentaire. L’un stimule le mouvement et l’initiative, tandis que l’autre apporte persévérance, sensibilité ou profondeur. L’équilibre devient particulièrement fort lorsque personne ne cherche à imposer son propre rythme.`;
  }

  return `Vos Mars en ${sign1} et en ${sign2} n’agissent pas au même rythme. L’un peut réagir immédiatement alors que l’autre avance avec prudence, émotion ou réflexion. Cette différence nourrit parfois l’attirance, mais elle demande une gestion consciente de la frustration et des conflits.`;
}

function isPlanet(
  planetName: string,
  expected: string,
): boolean {
  const normalized = normalizeValue(planetName);
  const normalizedExpected = normalizeValue(expected);

  if (normalizedExpected === "venus") {
    return normalized === "venus";
  }

  if (normalizedExpected === "mars") {
    return normalized === "mars";
  }

  if (normalizedExpected === "moon") {
    return normalized === "moon" || normalized === "lune";
  }

  if (normalizedExpected === "sun") {
    return normalized === "sun" || normalized === "soleil";
  }

  if (normalizedExpected === "saturn") {
    return normalized === "saturn" || normalized === "saturne";
  }

  if (normalizedExpected === "pluto") {
    return normalized === "pluto" || normalized === "pluton";
  }

  if (normalizedExpected === "neptune") {
    return normalized === "neptune";
  }

  return normalized === normalizedExpected;
}

function getRelevantAspects(
  aspects: CompatibilityAspect[],
  mode: "venus" | "mars" | "venus-mars" | "intimacy",
  limit = 3,
): LoveAspect[] {
  if (!Array.isArray(aspects)) return [];

  return aspects
    .filter((aspect) => {
      const first = aspect.person1Planet || "";
      const second = aspect.person2Planet || "";

      if (mode === "venus") {
        const hasVenus =
          isPlanet(first, "venus") ||
          isPlanet(second, "venus");

        const other = isPlanet(first, "venus")
          ? second
          : first;

        return (
          hasVenus &&
          [
            "sun",
            "moon",
            "venus",
            "mars",
            "saturn",
            "neptune",
            "pluto",
          ].some((planet) => isPlanet(other, planet))
        );
      }

      if (mode === "mars") {
        const hasMars =
          isPlanet(first, "mars") ||
          isPlanet(second, "mars");

        const other = isPlanet(first, "mars")
          ? second
          : first;

        return (
          hasMars &&
          [
            "sun",
            "moon",
            "venus",
            "mars",
            "saturn",
            "pluto",
          ].some((planet) => isPlanet(other, planet))
        );
      }

      if (mode === "venus-mars") {
        return (
          (isPlanet(first, "venus") &&
            isPlanet(second, "mars")) ||
          (isPlanet(first, "mars") &&
            isPlanet(second, "venus"))
        );
      }

      const intimacyPlanets = [
        "moon",
        "venus",
        "mars",
        "saturn",
        "neptune",
        "pluto",
      ];

      return (
        intimacyPlanets.some((planet) =>
          isPlanet(first, planet),
        ) &&
        intimacyPlanets.some((planet) =>
          isPlanet(second, planet),
        )
      );
    })
    .sort((a, b) => a.orb - b.orb)
    .slice(0, limit)
    .map((aspect, index) => ({
      id: `${mode}-${index}`,
      person1Planet: aspect.person1Planet,
      person2Planet: aspect.person2Planet,
      type: aspect.type,
      orb: aspect.orb,
    }));
}

function getAspectSymbol(
  type: CompatibilityAspect["type"],
): string {
  void type;
  return LOGO_URL;
}

function getAspectNature(
  type: CompatibilityAspect["type"],
): string {
  if (type === "trine" || type === "sextile") {
    return "Énergie fluide";
  }

  if (type === "conjunction") {
    return "Lien puissant";
  }

  if (type === "opposition") {
    return "Polarité intense";
  }

  if (type === "square") {
    return "Tension créatrice";
  }

  if (type === "quincunx") {
    return "Ajustement subtil";
  }

  return "Influence relationnelle";
}

function getLoveAspectInterpretation(
  aspect: LoveAspect,
  mode: "venus" | "mars" | "venus-mars" | "intimacy",
): string {
  const harmonious =
    aspect.type === "trine" ||
    aspect.type === "sextile";

  const challenging =
    aspect.type === "square" ||
    aspect.type === "opposition" ||
    aspect.type === "quincunx";

  if (mode === "venus-mars") {
    if (harmonious) {
      return "L’affection et le désir se répondent naturellement. La séduction, la tendresse et l’attirance physique peuvent circuler avec beaucoup de fluidité.";
    }

    if (challenging) {
      return "L’attirance peut être très forte, mais les attentes affectives et le rythme du désir ne coïncident pas toujours. Cette tension nourrit la chimie autant qu’elle exige des ajustements.";
    }

    return "Cette connexion renforce fortement le magnétisme, la séduction et le sentiment d’être attirés l’un vers l’autre.";
  }

  if (mode === "venus") {
    if (harmonious) {
      return "Cet aspect favorise la douceur, l’affection et la capacité de reconnaître les besoins amoureux de l’autre.";
    }

    if (challenging) {
      return "Les attentes affectives peuvent différer. L’un peut donner de l’amour d’une manière que l’autre ne reconnaît pas immédiatement.";
    }

    return "Cette interaction donne une grande importance aux sentiments, aux valeurs et à la manière de construire l’harmonie.";
  }

  if (mode === "mars") {
    if (harmonious) {
      return "Les énergies s’accordent avec naturel, favorisant le désir, l’initiative et la capacité d’agir ensemble.";
    }

    if (challenging) {
      return "La passion peut s’accompagner de réactions vives, de compétition ou d’un décalage dans la manière de prendre l’initiative.";
    }

    return "Cette interaction intensifie l’action, la volonté, l’attirance et la manière dont vous réagissez sous pression.";
  }

  if (harmonious) {
    return "Cet aspect soutient la confiance, la tendresse et la capacité de créer un espace intime où chacun peut se montrer vulnérable.";
  }

  if (challenging) {
    return "Cette interaction peut révéler des peurs, des attentes implicites ou des réactions défensives qui demandent patience et honnêteté.";
  }

  return "Cette connexion joue un rôle important dans votre proximité émotionnelle, votre confiance et votre manière de vous abandonner au lien.";
}

function PlanetStyleCard({
  person,
  fallbackName,
  planet,
  symbol,
  styleText,
}: {
  person: SafeCompatibilityPerson;
  fallbackName: string;
  planet: "Venus" | "Mars";
  symbol: string;
  styleText: (sign: string) => string;
}) {
  const name = getPersonName(person, fallbackName);
  const sign = getPlanetSign(person, planet);

  return (
    <View style={styles.infoCard} wrap={false}>
      <View style={styles.cardHeader}>
        <View style={styles.cardSymbolFrame}>
          <Image
            src={symbol}
            style={styles.cardSymbol}
          />
        </View>

        <Text style={styles.cardTitle}>
          {planet === "Venus" ? "L’amour" : "Le désir"} de{" "}
          {name}
        </Text>
      </View>

      <Text style={styles.cardText}>
        {planet === "Venus" ? "Vénus" : "Mars"} en {sign}.{" "}
        {styleText(sign)}
      </Text>
    </View>
  );
}

function AspectCard({
  aspect,
  mode,
}: {
  aspect: LoveAspect;
  mode: "venus" | "mars" | "venus-mars" | "intimacy";
}) {
  return (
    <View style={styles.aspectCard} wrap={false}>
      <View style={styles.aspectSymbolFrame}>
        <Image
          src={getAspectSymbol(aspect.type)}
          style={styles.aspectSymbol}
        />
      </View>

      <View style={styles.aspectContent}>
        <Text style={styles.aspectTitle}>
          {translateCompatibilityPlanet(
            aspect.person1Planet,
          )}{" "}
          {translateCompatibilityAspect(aspect.type)}{" "}
          {translateCompatibilityPlanet(
            aspect.person2Planet,
          )}
          {" • orbe "}
          {aspect.orb.toFixed(1)}°
        </Text>

        <Text style={styles.aspectText}>
          {getLoveAspectInterpretation(aspect, mode)}
        </Text>
      </View>

      <Text style={styles.aspectNature}>
        {getAspectNature(aspect.type)}
      </Text>
    </View>
  );
}

function PageFrame({
  pageNumber,
  children,
}: {
  pageNumber: number;
  children: ReactNode;
}) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.topAccent} fixed />
      <View style={styles.outerBorder} fixed />
      <View style={styles.innerBorder} fixed />
      <View style={styles.decorativeCircleTop} fixed />
      <View style={styles.decorativeCircleBottom} fixed />

      <View style={styles.content}>{children}</View>

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          Luna Astralis • Rapport de synastrie
        </Text>

        <Text style={styles.footerPage}>
          {pageNumber}
        </Text>
      </View>
    </Page>
  );
}

function Header({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.header} wrap={false}>
      <Image
        src={LOGO_URL}
        style={styles.logo}
      />

      <Text style={styles.sectionLabel}>
        {label}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      <View style={styles.titleDivider} />
    </View>
  );
}

function NamesCard({
  person1Name,
  person2Name,
  symbol,
}: {
  person1Name: string;
  person2Name: string;
  symbol: NamesCardSymbol;
}) {
  return (
    <View style={styles.namesCard} wrap={false}>
      <View style={styles.namesAccentLeft} />
      <View style={styles.namesAccentRight} />

      <Text style={styles.name}>
        {person1Name}
      </Text>

      <View style={styles.nameSeparator}>
        {symbol.type === "planet" && (
          <Image
            src={symbol.source}
            style={styles.nameSeparatorIcon}
          />
        )}

        {symbol.type === "planets" &&
          symbol.sources.map((source, index) => (
            <Image
              key={`${source}-${index}`}
              src={source}
              style={styles.nameSeparatorIcon}
            />
          ))}

        {symbol.type === "logo" && (
          <Image
            src={LOGO_URL}
            style={styles.nameSeparatorLogo}
          />
        )}
      </View>

      <Text style={styles.name}>
        {person2Name}
      </Text>
    </View>
  );
}

function VenusPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const person1Name = getPersonName(
    person1,
    "Première personne",
  );

  const person2Name = getPersonName(
    person2,
    "Deuxième personne",
  );

  const sign1 = getPlanetSign(person1, "Venus");
  const sign2 = getPlanetSign(person2, "Venus");

  const venusAspects = getRelevantAspects(
    aspects,
    "venus",
  );

  return (
    <PageFrame pageNumber={9}>
      <Header
        label="Amour, valeurs et affection"
        title="Votre compatibilité amoureuse"
        subtitle="Vénus révèle votre manière d’aimer, de séduire, de recevoir l’affection et de construire l’harmonie dans le couple."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol={{
          type: "planet",
          source: PLANET_ICONS.Venus,
        }}
      />

      <View style={styles.heroCard} wrap={false}>
        <View style={styles.heroAccent} />

        <View style={styles.heroHeader}>
          <View style={styles.iconFrame}>
            <Image
              src={PLANET_ICONS.Venus}
              style={styles.planetIcon}
            />
          </View>

          <View style={styles.heroHeading}>
            <Text style={styles.heroLabel}>
              Sentiments, séduction et valeurs
            </Text>

            <Text style={styles.heroTitle}>
              La rencontre de vos deux Vénus
            </Text>

            <Text style={styles.heroIntro}>
              Cette comparaison montre comment vous donnez
              de l’amour, ce que vous attendez d’une relation
              et les gestes qui vous permettent de vous sentir
              choisis.
            </Text>
          </View>
        </View>

        <View style={styles.placementRow}>
          <View style={styles.placementCard}>
            <Text style={styles.placementName}>
              {person1Name}
            </Text>

            <Text style={styles.placementValue}>
              Vénus en {sign1}
            </Text>

            <Text style={styles.placementStyle}>
              Élément {getElement(sign1)}
            </Text>
          </View>

          <View style={styles.placementCenter}>
            <View style={styles.placementCenterCircle}>
              <Image
                src={PLANET_ICONS.Venus}
                style={styles.placementCenterSymbol}
              />
            </View>
          </View>

          <View style={styles.placementCard}>
            <Text style={styles.placementName}>
              {person2Name}
            </Text>

            <Text style={styles.placementValue}>
              Vénus en {sign2}
            </Text>

            <Text style={styles.placementStyle}>
              Élément {getElement(sign2)}
            </Text>
          </View>
        </View>

        <Text style={styles.interpretationTitle}>
          Votre langage amoureux
        </Text>

        <Text style={styles.interpretationText}>
          {getVenusCompatibilityText(sign1, sign2)}
        </Text>
      </View>

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>
          Votre manière personnelle d’aimer
        </Text>

        <View style={styles.twoColumnRow}>
          <PlanetStyleCard
            person={person1}
            fallbackName="la première personne"
            planet="Venus"
            symbol={PLANET_ICONS.Venus}
            styleText={getVenusStyle}
          />

          <PlanetStyleCard
            person={person2}
            fallbackName="la deuxième personne"
            planet="Venus"
            symbol={PLANET_ICONS.Venus}
            styleText={getVenusStyle}
          />
        </View>
      </View>

      {venusAspects.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>
            Vos principales interactions amoureuses
          </Text>

          {venusAspects.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="venus"
            />
          ))}
        </View>
      )}

      <View style={styles.adviceCard} wrap={false}>
        <View style={styles.adviceSymbolFrame}>
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé amoureuse
          </Text>

          <Text style={styles.adviceText}>
            Ne mesurez pas uniquement l’amour à partir de
            votre propre langage affectif. Demandez clairement
            à l’autre ce qui lui permet de se sentir aimé, puis
            transformez cette réponse en gestes concrets et
            réguliers.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function MarsPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const person1Name = getPersonName(
    person1,
    "Première personne",
  );

  const person2Name = getPersonName(
    person2,
    "Deuxième personne",
  );

  const sign1 = getPlanetSign(person1, "Mars");
  const sign2 = getPlanetSign(person2, "Mars");

  const marsAspects = getRelevantAspects(
    aspects,
    "mars",
  );

  return (
    <PageFrame pageNumber={10}>
      <Header
        label="Désir, action et passion"
        title="Votre attirance et votre désir"
        subtitle="Mars décrit votre élan, votre manière de prendre l’initiative, votre expression du désir et vos réactions lorsque la tension monte."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol={{
          type: "planet",
          source: PLANET_ICONS.Mars,
        }}
      />

      <View style={styles.heroCard} wrap={false}>
        <View style={styles.heroAccent} />

        <View style={styles.heroHeader}>
          <View style={styles.iconFrame}>
            <Image
              src={PLANET_ICONS.Mars}
              style={styles.planetIcon}
            />
          </View>

          <View style={styles.heroHeading}>
            <Text style={styles.heroLabel}>
              Énergie, initiative et instinct
            </Text>

            <Text style={styles.heroTitle}>
              La rencontre de vos deux Mars
            </Text>

            <Text style={styles.heroIntro}>
              Cette comparaison révèle votre rythme d’action,
              votre intensité, votre façon d’exprimer le désir
              et votre manière de réagir dans les moments de
              confrontation.
            </Text>
          </View>
        </View>

        <View style={styles.placementRow}>
          <View style={styles.placementCard}>
            <Text style={styles.placementName}>
              {person1Name}
            </Text>

            <Text style={styles.placementValue}>
              Mars en {sign1}
            </Text>

            <Text style={styles.placementStyle}>
              Élément {getElement(sign1)}
            </Text>
          </View>

          <View style={styles.placementCenter}>
            <View style={styles.placementCenterCircle}>
              <Image
                src={PLANET_ICONS.Mars}
                style={styles.placementCenterSymbol}
              />
            </View>
          </View>

          <View style={styles.placementCard}>
            <Text style={styles.placementName}>
              {person2Name}
            </Text>

            <Text style={styles.placementValue}>
              Mars en {sign2}
            </Text>

            <Text style={styles.placementStyle}>
              Élément {getElement(sign2)}
            </Text>
          </View>
        </View>

        <Text style={styles.interpretationTitle}>
          Votre dynamique de passion
        </Text>

        <Text style={styles.interpretationText}>
          {getMarsCompatibilityText(sign1, sign2)}
        </Text>
      </View>

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>
          Votre expression personnelle du désir
        </Text>

        <View style={styles.twoColumnRow}>
          <PlanetStyleCard
            person={person1}
            fallbackName="la première personne"
            planet="Mars"
            symbol={PLANET_ICONS.Mars}
            styleText={getMarsStyle}
          />

          <PlanetStyleCard
            person={person2}
            fallbackName="la deuxième personne"
            planet="Mars"
            symbol={PLANET_ICONS.Mars}
            styleText={getMarsStyle}
          />
        </View>
      </View>

      {marsAspects.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>
            Vos principales interactions de désir
          </Text>

          {marsAspects.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="mars"
            />
          ))}
        </View>
      )}

      <View style={styles.synthesisRow} wrap={false}>
        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre force
          </Text>

          <Text style={styles.synthesisText}>
            Votre attirance peut devenir une énergie de
            création, de motivation et de dépassement lorsque
            vous choisissez un objectif commun plutôt que la
            compétition.
          </Text>
        </View>

        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre point de vigilance
          </Text>

          <Text style={styles.synthesisText}>
            Les réactions rapides, la frustration ou les
            différences de rythme peuvent amplifier les
            conflits. Une pause consciente évite que la passion
            ne se transforme en opposition.
          </Text>
        </View>
      </View>

      <View style={styles.adviceCard} wrap={false}>
        <View style={styles.adviceSymbolFrame}>
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé de passion
          </Text>

          <Text style={styles.adviceText}>
            Exprimez clairement vos envies et vos limites sans
            transformer le désir en épreuve de force.
            L’intensité devient constructive lorsqu’elle repose
            sur le consentement, l’écoute et la confiance.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function VenusMarsPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const person1Name = getPersonName(
    person1,
    "Première personne",
  );

  const person2Name = getPersonName(
    person2,
    "Deuxième personne",
  );

  const venus1 = getPlanetSign(person1, "Venus");
  const mars1 = getPlanetSign(person1, "Mars");
  const venus2 = getPlanetSign(person2, "Venus");
  const mars2 = getPlanetSign(person2, "Mars");

  const venusMarsAspects = getRelevantAspects(
    aspects,
    "venus-mars",
    4,
  );

  return (
    <PageFrame pageNumber={11}>
      <Header
        label="Chimie, séduction et magnétisme"
        title="Votre alchimie Vénus × Mars"
        subtitle="La rencontre de Vénus et de Mars montre comment la tendresse, la séduction, l’attirance et le désir se répondent entre vous."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol={{
          type: "planets",
          sources: [
            PLANET_ICONS.Venus,
            PLANET_ICONS.Mars,
          ],
        }}
      />

      <View style={styles.fullCard} wrap={false}>
        <Text style={styles.fullCardTitle}>
          La rencontre entre l’amour et le désir
        </Text>

        <Text style={styles.fullCardText}>
          Vénus représente ce qui attire, apaise et donne envie
          de se rapprocher. Mars représente l’élan,
          l’initiative et l’intensité physique. Lorsque ces deux
          fonctions se répondent, elles créent la chimie du
          couple : la manière dont l’un séduit, dont l’autre
          réagit et dont la passion trouve sa place dans la
          tendresse.
        </Text>
      </View>

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>
          Vos deux circuits d’attraction
        </Text>

        <View style={styles.twoColumnRow}>
          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardSymbolFrame}>
                <View style={styles.cardSymbolPair}>
                  <Image
                    src={PLANET_ICONS.Venus}
                    style={styles.cardSymbolPairIcon}
                  />

                  <Image
                    src={PLANET_ICONS.Mars}
                    style={styles.cardSymbolPairIcon}
                  />
                </View>
              </View>

              <Text style={styles.cardTitle}>
                {person1Name}
              </Text>
            </View>

            <Text style={styles.cardText}>
              Vénus en {venus1} recherche{" "}
              {getVenusStyle(venus1).toLowerCase()} Mars en{" "}
              {mars1} exprime{" "}
              {getMarsStyle(mars1).toLowerCase()}
            </Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardSymbolFrame}>
                <View style={styles.cardSymbolPair}>
                  <Image
                    src={PLANET_ICONS.Venus}
                    style={styles.cardSymbolPairIcon}
                  />

                  <Image
                    src={PLANET_ICONS.Mars}
                    style={styles.cardSymbolPairIcon}
                  />
                </View>
              </View>

              <Text style={styles.cardTitle}>
                {person2Name}
              </Text>
            </View>

            <Text style={styles.cardText}>
              Vénus en {venus2} recherche{" "}
              {getVenusStyle(venus2).toLowerCase()} Mars en{" "}
              {mars2} exprime{" "}
              {getMarsStyle(mars2).toLowerCase()}
            </Text>
          </View>
        </View>
      </View>

      {venusMarsAspects.length > 0 ? (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>
            Vos aspects Vénus–Mars les plus importants
          </Text>

          {venusMarsAspects.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="venus-mars"
            />
          ))}
        </View>
      ) : (
        <View style={styles.fullCard} wrap={false}>
          <Text style={styles.fullCardTitle}>
            Une chimie qui se construit autrement
          </Text>

          <Text style={styles.fullCardText}>
            Aucun aspect majeur Vénus–Mars ne ressort avec les
            orbes retenus. Cela ne signifie pas une absence
            d’attirance. La chimie peut plutôt se construire
            grâce aux signes, aux maisons, aux angles et à
            d’autres interactions entre la Lune, le Soleil,
            Pluton ou Neptune.
          </Text>
        </View>
      )}

      <View style={styles.synthesisRow} wrap={false}>
        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Passion
          </Text>

          <Text style={styles.synthesisText}>
            L’attirance grandit lorsque chacun se sent libre
            d’exprimer son désir sans devoir jouer un rôle ou
            deviner les attentes de l’autre.
          </Text>
        </View>

        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Tendresse
          </Text>

          <Text style={styles.synthesisText}>
            La passion reste durable lorsque les gestes
            affectifs, la sécurité et le respect continuent
            d’exister en dehors des moments intenses.
          </Text>
        </View>
      </View>

      <View style={styles.adviceCard} wrap={false}>
        <View style={styles.adviceSymbolFrame}>
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé d’alchimie
          </Text>

          <Text style={styles.adviceText}>
            Entretenez à la fois le jeu de la séduction et la
            sécurité émotionnelle. La chimie se renouvelle
            lorsque le couple continue de créer de la nouveauté
            sans perdre la douceur ni la confiance.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function IntimacyPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const person1Name = getPersonName(
    person1,
    "Première personne",
  );

  const person2Name = getPersonName(
    person2,
    "Deuxième personne",
  );

  const moon1 = getPlanetSign(person1, "Moon");
  const moon2 = getPlanetSign(person2, "Moon");
  const venus1 = getPlanetSign(person1, "Venus");
  const venus2 = getPlanetSign(person2, "Venus");
  const mars1 = getPlanetSign(person1, "Mars");
  const mars2 = getPlanetSign(person2, "Mars");

  const intimacyAspects = getRelevantAspects(
    aspects,
    "intimacy",
    3,
  );

  return (
    <PageFrame pageNumber={12}>
      <Header
        label="Confiance, proximité et abandon"
        title="Votre intimité et votre vie affective"
        subtitle="L’intimité naît lorsque le désir, l’affection et la sécurité émotionnelle trouvent un espace commun où chacun peut se montrer vrai."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol={{
          type: "planet",
          source: PLANET_ICONS.Moon,
        }}
      />

      <View style={styles.fullCard} wrap={false}>
        <Text style={styles.fullCardTitle}>
          Votre espace intime
        </Text>

        <Text style={styles.fullCardText}>
          La Lune montre ce qui rassure émotionnellement. Vénus
          révèle la manière de donner et de recevoir
          l’affection. Mars décrit le désir, l’initiative et la
          réaction instinctive. Ensemble, ces trois fonctions
          indiquent comment vous construisez la confiance, la
          proximité et la sécurité nécessaires à une intimité
          épanouie.
        </Text>
      </View>

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>
          Vos besoins affectifs essentiels
        </Text>

        <View style={styles.twoColumnRow}>
          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardSymbolFrame}>
                <Image
                  src={PLANET_ICONS.Moon}
                  style={styles.cardSymbol}
                />
              </View>

              <Text style={styles.cardTitle}>
                {person1Name}
              </Text>
            </View>

            <Text style={styles.cardText}>
              Lune en {moon1}, Vénus en {venus1} et Mars en{" "}
              {mars1}. Cette combinaison montre que la sécurité
              émotionnelle, les preuves d’affection et le
              rythme du désir doivent être reconnus ensemble
              pour permettre un véritable abandon.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardSymbolFrame}>
                <Image
                  src={PLANET_ICONS.Moon}
                  style={styles.cardSymbol}
                />
              </View>

              <Text style={styles.cardTitle}>
                {person2Name}
              </Text>
            </View>

            <Text style={styles.cardText}>
              Lune en {moon2}, Vénus en {venus2} et Mars en{" "}
              {mars2}. Cette combinaison montre que la
              confiance se développe lorsque les émotions, la
              tendresse et le désir peuvent être exprimés sans
              jugement ni pression.
            </Text>
          </View>
        </View>
      </View>

      {intimacyAspects.length > 0 && (
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>
            Vos principales interactions intimes
          </Text>

          {intimacyAspects.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="intimacy"
            />
          ))}
        </View>
      )}

      <View style={styles.synthesisRow} wrap={false}>
        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Ce qui vous rapproche
          </Text>

          <Text style={styles.synthesisText}>
            La proximité augmente lorsque chacun peut parler
            de ses besoins, de ses peurs et de ses limites sans
            se sentir faible, jugé ou rejeté.
          </Text>
        </View>

        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Ce qui demande du soin
          </Text>

          <Text style={styles.synthesisText}>
            Les attentes silencieuses, les blessures anciennes
            ou un décalage entre tendresse et désir peuvent
            créer de la distance lorsqu’ils ne sont pas nommés.
          </Text>
        </View>
      </View>

      <View style={styles.fullCard} wrap={false}>
        <Text style={styles.fullCardTitle}>
          Votre langage intime commun
        </Text>

        <Text style={styles.fullCardText}>
          Votre intimité devient plus profonde lorsque vous
          alternez les moments de dialogue, les gestes
          d’affection et les expériences partagées. La sécurité
          ne s’oppose pas à la passion : elle permet au désir
          de se renouveler sans peur et donne à chacun la
          liberté d’être pleinement présent.
        </Text>
      </View>

      <View style={styles.adviceCard} wrap={false}>
        <View style={styles.adviceSymbolFrame}>
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé d’intimité
          </Text>

          <Text style={styles.adviceText}>
            Créez régulièrement un moment sans écrans, sans
            obligation et sans attente précise. Utilisez cet
            espace pour vous retrouver, vous écouter et dire ce
            qui vous rapproche réellement en ce moment.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

export default function CompatibilityLove(
  props: CompatibilitySectionProps,
) {
  return (
    <>
      <VenusPage {...props} />
      <MarsPage {...props} />
      <VenusMarsPage {...props} />
      <IntimacyPage {...props} />
    </>
  );
    }
