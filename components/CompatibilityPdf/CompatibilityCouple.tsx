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

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorFrame: {
    width: 26,
    height: 26,

    borderRadius: 13,

    borderWidth: 0.6,
    borderColor: GOLD,

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorIcon: {
    width: 16,
    height: 16,
     objectFit: "contain",
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

  cardNumber: {
    fontSize: 8.5,

    color: BRIGHT_GOLD,

    textAlign: "center",
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
    width: 16,
    height: 16,

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
    width: 17,
    height: 17,

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

interface CoupleAspect {
  id: string;
  person1Planet: string;
  person2Planet: string;
  type: CompatibilityAspect["type"];
  orb: number;
}

function normalizeValue(
  value: unknown,
): string {
  if (typeof value !== "string") {
    return "";
  }

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

function getElement(
  sign: string,
): string {
  const value = normalizeValue(sign);

  if (
    [
      "belier",
      "lion",
      "sagittaire",
    ].includes(value)
  ) {
    return "Feu";
  }

  if (
    [
      "taureau",
      "vierge",
      "capricorne",
    ].includes(value)
  ) {
    return "Terre";
  }

  if (
    [
      "gemeaux",
      "balance",
      "verseau",
    ].includes(value)
  ) {
    return "Air";
  }

  if (
    [
      "cancer",
      "scorpion",
      "poissons",
    ].includes(value)
  ) {
    return "Eau";
  }

  return "Non précisé";
}

function getModality(
  sign: string,
): string {
  const value = normalizeValue(sign);

  if (
    [
      "belier",
      "cancer",
      "balance",
      "capricorne",
    ].includes(value)
  ) {
    return "Cardinal";
  }

  if (
    [
      "taureau",
      "lion",
      "scorpion",
      "verseau",
    ].includes(value)
  ) {
    return "Fixe";
  }

  if (
    [
      "gemeaux",
      "vierge",
      "sagittaire",
      "poissons",
    ].includes(value)
  ) {
    return "Mutable";
  }

  return "Non précisé";
}

function isPlanet(
  name: string,
  candidates: string[],
): boolean {
  return candidates.includes(
    normalizeValue(name),
  );
}

function isHarmonious(
  type: CompatibilityAspect["type"],
): boolean {
  return (
    type === "trine" ||
    type === "sextile"
  );
}

function isChallenging(
  type: CompatibilityAspect["type"],
): boolean {
  return (
    type === "square" ||
    type === "opposition" ||
    type === "quincunx"
  );
}

function toCoupleAspects(
  aspects: CompatibilityAspect[],
  filter: (
    aspect: CompatibilityAspect,
  ) => boolean,
  limit = 3,
): CoupleAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects
    .filter(filter)
    .sort(
      (first, second) =>
        first.orb - second.orb,
    )
    .slice(0, limit)
    .map((aspect, index) => ({
      id:
        `couple-${index}-` +
        `${aspect.person1Planet}-` +
        `${aspect.person2Planet}`,

      person1Planet:
        aspect.person1Planet,

      person2Planet:
        aspect.person2Planet,

      type: aspect.type,

      orb: aspect.orb,
    }));
}

function includesSaturn(
  aspect: CompatibilityAspect,
): boolean {
  return (
    isPlanet(
      aspect.person1Planet,
      ["saturn", "saturne"],
    ) ||
    isPlanet(
      aspect.person2Planet,
      ["saturn", "saturne"],
    )
  );
}

function includesPersonalPlanet(
  aspect: CompatibilityAspect,
): boolean {
  const allowed = [
    "sun",
    "soleil",
    "moon",
    "lune",
    "mercury",
    "mercure",
    "venus",
    "mars",
    "saturn",
    "saturne",
  ];

  return (
    isPlanet(
      aspect.person1Planet,
      allowed,
    ) &&
    isPlanet(
      aspect.person2Planet,
      allowed,
    )
  );
}

function getSaturnStyle(
  sign: string,
): string {
  const texts: Record<string, string> = {
    belier:
      "S’engage par l’action et préfère construire le lien sans perdre son autonomie ni son élan personnel.",

    taureau:
      "Recherche une relation stable, fidèle et concrète, appuyée sur des habitudes fiables et une sécurité partagée.",

    gemeaux:
      "A besoin d’un engagement souple, vivant et nourri par le dialogue, la curiosité et l’évolution intellectuelle.",

    cancer:
      "Prend l’engagement au sérieux lorsqu’un climat de confiance, de protection et d’appartenance familiale est établi.",

    lion:
      "Souhaite bâtir un lien loyal, fier et durable où chacun se sent reconnu, valorisé et pleinement choisi.",

    vierge:
      "Démontre son engagement par la présence, le service, l’organisation et l’attention constante portée aux détails.",

    balance:
      "Construit la durée à travers l’équité, la coopération et des décisions réellement prises à deux.",

    scorpion:
      "S’engage intensément et exige une loyauté profonde, une honnêteté émotionnelle et une confiance sans ambiguïté.",

    sagittaire:
      "A besoin qu’un engagement durable laisse aussi une place à la liberté, aux projets et à l’expansion commune.",

    capricorne:
      "Valorise la responsabilité, la constance et la capacité à bâtir patiemment une relation solide dans le temps.",

    verseau:
      "Recherche un engagement authentique, fondé sur l’amitié, le respect des différences et une vision commune.",

    poissons:
      "S’engage par compassion et dévouement, mais doit conserver des limites claires pour ne pas tout absorber.",
  };

  return (
    texts[normalizeValue(sign)] ||
    "La manière d’aborder l’engagement demande davantage de données astrologiques pour être précisée."
  );
}

function getSaturnCompatibilityText(
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      "Les positions de Saturne ne sont pas toutes disponibles. " +
      "L’analyse de la stabilité et de l’engagement reste donc partielle."
    );
  }

  const element1 =
    getElement(sign1);

  const element2 =
    getElement(sign2);

  const modality1 =
    getModality(sign1);

  const modality2 =
    getModality(sign2);

  if (
    normalizeValue(sign1) ===
    normalizeValue(sign2)
  ) {
    return (
      `Vos deux Saturne en ${sign1} indiquent une conception très semblable des responsabilités. ` +
      "Vous pouvez construire avec les mêmes priorités, mais aussi renforcer les mêmes rigidités ou les mêmes craintes."
    );
  }

  if (element1 === element2) {
    return (
      `Vos Saturne en ${sign1} et en ${sign2} appartiennent au même élément, ${element1}. ` +
      "Votre rapport au temps, aux efforts et à la sécurité repose sur une base compatible qui facilite les projets durables."
    );
  }

  if (modality1 === modality2) {
    return (
      `Vos Saturne partagent une modalité ${modality1.toLowerCase()}. ` +
      "Vous pouvez reconnaître chez l’autre un rythme d’engagement familier, même si vos moyens concrets de sécuriser le lien diffèrent."
    );
  }

  return (
    `Vos Saturne en ${sign1} et en ${sign2} ne construisent pas la sécurité de la même façon. ` +
    "La durée devient possible lorsque les règles du couple, les responsabilités et les attentes sont formulées clairement plutôt que présumées."
  );
}

function getAspectInterpretation(
  aspect: CoupleAspect,
  mode:
    | "saturn"
    | "challenge"
    | "strength"
    | "growth",
): string {
  const harmonious =
    isHarmonious(aspect.type);

  const challenging =
    isChallenging(aspect.type);

  if (mode === "saturn") {
    if (harmonious) {
      return "Cet aspect favorise la fiabilité, la patience et la capacité à traverser les étapes importantes avec maturité.";
    }

    if (challenging) {
      return "Cet aspect peut créer un sentiment de pression, de jugement ou de limitation, mais il révèle aussi ce qui doit être consolidé.";
    }

    return "Cette connexion donne au lien un poids particulier et peut renforcer le sentiment de responsabilité mutuelle.";
  }

  if (mode === "challenge") {
    if (challenging) {
      return "Cette interaction demande un véritable ajustement. Les réactions automatiques peuvent créer de la tension tant qu’elles ne sont pas reconnues.";
    }

    return "Même une énergie fluide peut devenir un automatisme. La conscience de cette dynamique évite de tenir les besoins de l’autre pour acquis.";
  }

  if (mode === "strength") {
    if (harmonious) {
      return "Cette interaction soutient naturellement la coopération, l’affection et la capacité à retrouver un terrain commun.";
    }

    if (
      aspect.type === "conjunction"
    ) {
      return "Cette conjonction concentre une grande énergie commune et donne au couple une force de mobilisation importante.";
    }

    return "Cette différence peut devenir une force lorsque chacun apporte sa perspective sans chercher à effacer celle de l’autre.";
  }

  if (harmonious) {
    return "Cette interaction aide le couple à transformer les expériences en apprentissages et à progresser avec davantage de confiance.";
  }

  if (challenging) {
    return "Cette tension agit comme un moteur d’évolution. Elle invite chacun à dépasser une ancienne réaction et à créer une réponse plus consciente.";
  }

  return "Cette connexion marque une étape importante du chemin relationnel et favorise une compréhension plus profonde de soi à travers l’autre.";
}

function PageFrame({
  pageNumber,
  children,
}: {
  pageNumber: number;
  children: ReactNode;
}) {
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
        style={styles.decorativeCircleTop}
        fixed
      />

      <View
        style={styles.decorativeCircleBottom}
        fixed
      />

      <View style={styles.content}>
        {children}
      </View>

      <View
        style={styles.footer}
        fixed
      >
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
    <View
      style={styles.header}
      wrap={false}
    >
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
  name1,
  name2,
}: {
  name1: string;
  name2: string;
}) {
  return (
    <View
      style={styles.namesCard}
      wrap={false}
    >
      <View
        style={styles.namesAccentLeft}
      />

      <View
        style={styles.namesAccentRight}
      />

      <Text style={styles.name}>
        {name1}
      </Text>

      <View style={styles.nameSeparator}>
        <View
          style={styles.nameSeparatorFrame}
        >
          <Image
            src={LOGO_URL}
            style={styles.nameSeparatorLogo}
          />
        </View>
      </View>

      <Text style={styles.name}>
        {name2}
      </Text>
    </View>
  );
}

function AspectCard({
  aspect,
  mode,
}: {
  aspect: CoupleAspect;
  mode:
    | "saturn"
    | "challenge"
    | "strength"
    | "growth";
}) {
  return (
    <View
      style={styles.aspectCard}
      wrap={false}
    >
      <View
        style={styles.aspectSymbolFrame}
      >
        <Image
          src={LOGO_URL}
          style={styles.aspectSymbol}
        />
      </View>

      <View style={styles.aspectContent}>
        <Text style={styles.aspectTitle}>
          {translateCompatibilityPlanet(
            aspect.person1Planet,
          )}{" "}
          {translateCompatibilityAspect(
            aspect.type,
          )}{" "}
          {translateCompatibilityPlanet(
            aspect.person2Planet,
          )}{" "}
          • orbe {aspect.orb.toFixed(1)}°
        </Text>

        <Text style={styles.aspectText}>
          {getAspectInterpretation(
            aspect,
            mode,
          )}
        </Text>
      </View>
    </View>
  );
}

function SaturnPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const name1 =
    getPersonName(
      person1,
      "Première personne",
    );

  const name2 =
    getPersonName(
      person2,
      "Deuxième personne",
    );

  const saturn1 =
    getPlanetSign(
      person1,
      "Saturn",
    );

  const saturn2 =
    getPlanetSign(
      person2,
      "Saturn",
    );

  const saturnAspects =
    toCoupleAspects(
      aspects,
      (aspect) =>
        includesSaturn(aspect) &&
        includesPersonalPlanet(aspect),
    );

  return (
    <PageFrame pageNumber={13}>
      <Header
        label="Durée, structure et responsabilité"
        title="Saturne et votre engagement"
        subtitle="Saturne révèle ce que votre relation demande pour devenir stable, fiable et capable de traverser le temps."
      />

      <NamesCard
        name1={name1}
        name2={name2}
      />

      <View
        style={styles.heroCard}
        wrap={false}
      >
        <View style={styles.heroAccent} />

        <View style={styles.heroHeader}>
          <View style={styles.iconFrame}>
            <Image
              src={PLANET_ICONS.saturn}
              style={styles.planetIcon}
            />
          </View>

          <View style={styles.heroHeading}>
            <Text style={styles.heroLabel}>
              Engagement, maturité et long terme
            </Text>

            <Text style={styles.heroTitle}>
              La rencontre de vos deux Saturne
            </Text>

            <Text style={styles.heroIntro}>
              Cette comparaison montre comment
              chacun construit la confiance,
              assume les responsabilités et
              envisage la durée du lien.
            </Text>
          </View>
        </View>

        <View style={styles.placementRow}>
          <View style={styles.placementCard}>
            <Text
              style={styles.placementName}
            >
              {name1}
            </Text>

            <Text
              style={styles.placementValue}
            >
              Saturne en {saturn1}
            </Text>

            <Text
              style={styles.placementStyle}
            >
              {getElement(saturn1)} •{" "}
              {getModality(saturn1)}
            </Text>
          </View>

          <View
            style={styles.placementCenter}
          >
            <View
              style={
                styles.placementCenterCircle
              }
            >
              <Image
                src={PLANET_ICONS.saturn}
                style={
                  styles.placementCenterSymbol
                }
              />
            </View>
          </View>

          <View style={styles.placementCard}>
            <Text
              style={styles.placementName}
            >
              {name2}
            </Text>

            <Text
              style={styles.placementValue}
            >
              Saturne en {saturn2}
            </Text>

            <Text
              style={styles.placementStyle}
            >
              {getElement(saturn2)} •{" "}
              {getModality(saturn2)}
            </Text>
          </View>
        </View>

        <Text
          style={styles.interpretationTitle}
        >
          Votre manière de construire
        </Text>

        <Text
          style={styles.interpretationText}
        >
          {getSaturnCompatibilityText(
            saturn1,
            saturn2,
          )}
        </Text>
      </View>

      <View
        style={styles.twoColumnRow}
        wrap={false}
      >
        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Image
                src={PLANET_ICONS.saturn}
                style={styles.cardSymbol}
              />
            </View>

            <Text style={styles.cardTitle}>
              {name1}
            </Text>
          </View>

          <Text style={styles.cardText}>
            Saturne en {saturn1}.{" "}
            {getSaturnStyle(saturn1)}
          </Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Image
                src={PLANET_ICONS.saturn}
                style={styles.cardSymbol}
              />
            </View>

            <Text style={styles.cardTitle}>
              {name2}
            </Text>
          </View>

          <Text style={styles.cardText}>
            Saturne en {saturn2}.{" "}
            {getSaturnStyle(saturn2)}
          </Text>
        </View>
      </View>

      {saturnAspects.length > 0 && (
        <View
          style={styles.section}
          wrap={false}
        >
          <Text style={styles.sectionTitle}>
            Vos principales interactions
            d’engagement
          </Text>

          {saturnAspects.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="saturn"
            />
          ))}
        </View>
      )}

      <View
        style={styles.adviceCard}
        wrap={false}
      >
        <View
          style={styles.adviceSymbolFrame}
        >
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé de stabilité
          </Text>

          <Text style={styles.adviceText}>
            Transformez les attentes implicites
            en accords concrets. Parlez clairement
            du temps, de l’argent, des
            responsabilités, des limites et des
            projets afin que la sécurité repose
            sur une réalité partagée.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function ChallengesPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const name1 =
    getPersonName(
      person1,
      "Première personne",
    );

  const name2 =
    getPersonName(
      person2,
      "Deuxième personne",
    );

  const difficult =
    toCoupleAspects(
      aspects,
      (aspect) =>
        includesPersonalPlanet(aspect) &&
        isChallenging(aspect.type),
      4,
    );

  return (
    <PageFrame pageNumber={14}>
      <Header
        label="Tensions, différences et ajustements"
        title="Les défis de votre couple"
        subtitle="Les aspects difficiles ne condamnent pas une relation. Ils montrent les endroits où la conscience, la communication et la maturité deviennent essentielles."
      />

      <NamesCard
        name1={name1}
        name2={name2}
      />

      <View
        style={styles.fullCard}
        wrap={false}
      >
        <Text style={styles.fullCardTitle}>
          Ce que les tensions cherchent à
          révéler
        </Text>

        <Text style={styles.fullCardText}>
          Un défi relationnel apparaît souvent
          lorsqu’un besoin important s’exprime
          sous une forme défensive. Derrière la
          critique, le retrait, l’impatience ou
          le contrôle se trouve généralement une
          demande de sécurité, de reconnaissance,
          de liberté ou de proximité.
        </Text>
      </View>

      {difficult.length > 0 ? (
        <View
          style={styles.section}
          wrap={false}
        >
          <Text style={styles.sectionTitle}>
            Vos principales zones de tension
          </Text>

          {difficult.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="challenge"
            />
          ))}
        </View>
      ) : (
        <View
          style={styles.fullCard}
          wrap={false}
        >
          <Text style={styles.fullCardTitle}>
            Une dynamique globalement souple
          </Text>

          <Text style={styles.fullCardText}>
            Aucun aspect difficile majeur
            n’apparaît parmi les interactions
            personnelles les plus serrées. Cela
            n’élimine pas tous les désaccords,
            mais suggère que plusieurs tensions
            peuvent être résolues sans blocage
            durable.
          </Text>
        </View>
      )}

      <View
        style={styles.twoColumnRow}
        wrap={false}
      >
        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Text style={styles.cardNumber}>
                1
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Éviter l’escalade
            </Text>
          </View>

          <Text style={styles.cardText}>
            Lorsque l’émotion monte, cessez de
            chercher immédiatement qui a raison.
            Identifiez plutôt ce que chacun
            essaie de protéger ou de faire
            comprendre.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Text style={styles.cardNumber}>
                2
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Respecter les rythmes
            </Text>
          </View>

          <Text style={styles.cardText}>
            L’un peut avoir besoin de parler tout
            de suite alors que l’autre doit
            d’abord retrouver son calme. Fixez un
            moment précis pour reprendre la
            discussion afin d’éviter le silence
            prolongé.
          </Text>
        </View>
      </View>

      <View
        style={styles.synthesisRow}
        wrap={false}
      >
        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre point de vigilance
          </Text>

          <Text style={styles.synthesisText}>
            Ne transformez pas une différence de
            fonctionnement en jugement sur la
            valeur, l’amour ou les intentions de
            l’autre.
          </Text>
        </View>

        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre potentiel
          </Text>

          <Text style={styles.synthesisText}>
            Chaque tension comprise peut devenir
            une compétence relationnelle durable
            et rendre le couple plus solide
            qu’avant le conflit.
          </Text>
        </View>
      </View>

      <View
        style={styles.adviceCard}
        wrap={false}
      >
        <View
          style={styles.adviceSymbolFrame}
        >
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé face aux défis
          </Text>

          <Text style={styles.adviceText}>
            Utilisez des phrases centrées sur
            votre expérience : « je ressens »,
            « j’ai besoin », « je comprends ».
            Elles réduisent la défensive et
            permettent d’aborder le vrai sujet
            sans attaquer l’identité de l’autre.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function StrengthsPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const name1 =
    getPersonName(
      person1,
      "Première personne",
    );

  const name2 =
    getPersonName(
      person2,
      "Deuxième personne",
    );

  const strengths =
    toCoupleAspects(
      aspects,
      (aspect) =>
        includesPersonalPlanet(aspect) &&
        (
          isHarmonious(aspect.type) ||
          aspect.type === "conjunction"
        ),
      4,
    );

  return (
    <PageFrame pageNumber={15}>
      <Header
        label="Soutien, complicité et ressources communes"
        title="Les forces de votre couple"
        subtitle="Vos forces montrent ce qui circule naturellement entre vous et ce qui peut soutenir la relation lorsque la vie devient plus exigeante."
      />

      <NamesCard
        name1={name1}
        name2={name2}
      />

      <View
        style={styles.fullCard}
        wrap={false}
      >
        <Text style={styles.fullCardTitle}>
          Votre capital relationnel
        </Text>

        <Text style={styles.fullCardText}>
          Une relation durable ne repose pas
          uniquement sur l’absence de conflits.
          Elle se construit aussi grâce aux
          gestes, aux valeurs et aux qualités qui
          donnent envie de revenir l’un vers
          l’autre après les périodes plus
          difficiles.
        </Text>
      </View>

      {strengths.length > 0 ? (
        <View
          style={styles.section}
          wrap={false}
        >
          <Text style={styles.sectionTitle}>
            Vos principales ressources
            astrologiques
          </Text>

          {strengths.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="strength"
            />
          ))}
        </View>
      ) : (
        <View
          style={styles.fullCard}
          wrap={false}
        >
          <Text style={styles.fullCardTitle}>
            Une force à construire consciemment
          </Text>

          <Text style={styles.fullCardText}>
            Les aspects les plus fluides ne
            dominent pas nécessairement votre
            synastrie. Votre force peut alors
            venir de la volonté commune, de la
            fidélité aux engagements et de la
            capacité à apprendre réellement de
            vos différences.
          </Text>
        </View>
      )}

      <View
        style={styles.twoColumnRow}
        wrap={false}
      >
        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Image
                src={LOGO_URL}
                style={styles.cardSymbol}
              />
            </View>

            <Text style={styles.cardTitle}>
              Votre lien affectif
            </Text>
          </View>

          <Text style={styles.cardText}>
            La tendresse, la reconnaissance et
            les gestes simples nourrissent la
            sécurité du couple bien davantage que
            les grandes déclarations
            occasionnelles.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Image
                src={LOGO_URL}
                style={styles.cardSymbol}
              />
            </View>

            <Text style={styles.cardTitle}>
              Votre esprit d’équipe
            </Text>
          </View>

          <Text style={styles.cardText}>
            Vous devenez particulièrement forts
            lorsque le problème est placé devant
            vous plutôt qu’entre vous et que
            chacun contribue selon ses capacités.
          </Text>
        </View>
      </View>

      <View
        style={styles.synthesisRow}
        wrap={false}
      >
        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Ce qui vous unit
          </Text>

          <Text style={styles.synthesisText}>
            Le sentiment d’être compris, choisi
            et soutenu peut devenir une base très
            puissante pour vos décisions communes.
          </Text>
        </View>

        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Ce qui vous protège
          </Text>

          <Text style={styles.synthesisText}>
            Votre capacité à vous rappeler les
            qualités de l’autre empêche les
            tensions temporaires de définir toute
            la relation.
          </Text>
        </View>
      </View>

      <View
        style={styles.adviceCard}
        wrap={false}
      >
        <View
          style={styles.adviceSymbolFrame}
        >
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé de complicité
          </Text>

          <Text style={styles.adviceText}>
            N’attendez pas une crise pour parler
            de ce qui fonctionne. Nommez
            régulièrement les gestes que vous
            appréciez et les moments où vous vous
            êtes sentis soutenus, désirés ou
            compris.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function GrowthPage({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const name1 =
    getPersonName(
      person1,
      "Première personne",
    );

  const name2 =
    getPersonName(
      person2,
      "Deuxième personne",
    );

  const growthAspects =
    toCoupleAspects(
      aspects,
      (aspect) =>
        includesPersonalPlanet(aspect),
      3,
    );

  const saturn1 =
    getPlanetSign(
      person1,
      "Saturn",
    );

  const saturn2 =
    getPlanetSign(
      person2,
      "Saturn",
    );

  return (
    <PageFrame pageNumber={16}>
      <Header
        label="Apprentissage, maturité et avenir commun"
        title="Votre évolution ensemble"
        subtitle="Votre relation peut devenir un espace de transformation où chacun apprend à aimer avec davantage de conscience, de liberté et de responsabilité."
      />

      <NamesCard
        name1={name1}
        name2={name2}
      />

      <View
        style={styles.heroCard}
        wrap={false}
      >
        <View style={styles.heroAccent} />

        <View style={styles.heroHeader}>
          <View style={styles.iconFrame}>
            <Image
              src={LOGO_URL}
              style={styles.planetIcon}
            />
          </View>

          <View style={styles.heroHeading}>
            <Text style={styles.heroLabel}>
              Le chemin relationnel
            </Text>

            <Text style={styles.heroTitle}>
              Ce que votre lien vous apprend
            </Text>

            <Text style={styles.heroIntro}>
              La croissance apparaît lorsque les
              forces sont utilisées consciemment
              et que les défis cessent d’être
              vécus comme des preuves
              d’incompatibilité.
            </Text>
          </View>
        </View>

        <Text
          style={styles.interpretationText}
        >
          Avec Saturne en {saturn1} et en{" "}
          {saturn2}, votre couple apprend à
          définir sa propre forme de stabilité.
          Le lien évolue lorsque vous remplacez
          les réactions automatiques par des
          choix clairs, répétés et cohérents avec
          la relation que vous souhaitez
          réellement construire.
        </Text>
      </View>

      {growthAspects.length > 0 && (
        <View
          style={styles.section}
          wrap={false}
        >
          <Text style={styles.sectionTitle}>
            Vos moteurs d’évolution
          </Text>

          {growthAspects.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
              mode="growth"
            />
          ))}
        </View>
      )}

      <View
        style={styles.twoColumnRow}
        wrap={false}
      >
        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Text style={styles.cardNumber}>
                I
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Grandir individuellement
            </Text>
          </View>

          <Text style={styles.cardText}>
            Une relation saine permet à chacun de
            conserver son identité, ses intérêts
            et sa capacité de décision sans
            menacer la proximité affective.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <View
              style={styles.cardSymbolFrame}
            >
              <Text style={styles.cardNumber}>
                II
              </Text>
            </View>

            <Text style={styles.cardTitle}>
              Grandir ensemble
            </Text>
          </View>

          <Text style={styles.cardText}>
            Les projets communs donnent une
            direction au couple lorsqu’ils sont
            choisis librement et révisés à mesure
            que vos réalités évoluent.
          </Text>
        </View>
      </View>

      <View
        style={styles.synthesisRow}
        wrap={false}
      >
        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre prochaine étape
          </Text>

          <Text style={styles.synthesisText}>
            Définir un objectif commun concret
            qui nourrit à la fois la sécurité du
            lien et le développement personnel de
            chacun.
          </Text>
        </View>

        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre potentiel à long terme
          </Text>

          <Text style={styles.synthesisText}>
            La durée devient réelle lorsque
            l’engagement reste vivant : choisi,
            exprimé et adapté plutôt que
            simplement supposé.
          </Text>
        </View>
      </View>

      <View
        style={styles.fullCard}
        wrap={false}
      >
        <Text style={styles.fullCardTitle}>
          Votre vision commune
        </Text>

        <Text style={styles.fullCardText}>
          Votre relation n’a pas besoin d’être
          parfaite pour être profondément
          constructive. Elle a surtout besoin
          d’un espace où les besoins peuvent
          évoluer, où les erreurs peuvent être
          réparées et où les décisions
          importantes restent alignées sur vos
          valeurs communes.
        </Text>
      </View>

      <View
        style={styles.adviceCard}
        wrap={false}
      >
        <View
          style={styles.adviceSymbolFrame}
        >
          <Image
            src={LOGO_URL}
            style={styles.adviceSymbol}
          />
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé d’évolution
          </Text>

          <Text style={styles.adviceText}>
            Une fois par mois, prenez un moment
            pour répondre ensemble à trois
            questions : qu’est-ce qui nous
            rapproche actuellement, qu’est-ce qui
            nous éloigne, et quel petit changement
            concret voulons-nous essayer?
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

export default function CompatibilityCouple(
  props: CompatibilitySectionProps,
) {
  return (
    <>
      <SaturnPage {...props} />

      <ChallengesPage {...props} />

      <StrengthsPage {...props} />

      <GrowthPage {...props} />
    </>
  );
    }
