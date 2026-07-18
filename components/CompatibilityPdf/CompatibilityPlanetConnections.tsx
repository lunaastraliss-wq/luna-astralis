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
    marginBottom: 13,
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
    fontSize: 23,
    lineHeight: 1.15,
    color: CREAM,
    textAlign: "center",
    marginBottom: 7,
  },
  subtitle: {
    width: "87%",
    fontSize: 8,
    lineHeight: 1.45,
    color: MUTED_CREAM,
    textAlign: "center",
  },
  divider: {
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
    paddingVertical: 9,
    paddingHorizontal: 14,
    marginBottom: 11,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.65,
    borderColor: DARK_GOLD,
  },
  name: {
    width: "40%",
    fontSize: 12,
    color: CREAM,
    textAlign: "center",
  },
  nameSeparator: {
    width: "12%",
    fontSize: 13,
    color: BRIGHT_GOLD,
    textAlign: "center",
  },
  mainCard: {
    position: "relative",
    paddingTop: 13,
    paddingBottom: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },
  mainAccent: {
    position: "absolute",
    top: -1,
    left: "34%",
    width: "32%",
    height: 2,
    backgroundColor: BRIGHT_GOLD,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  iconFrame: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 0.75,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  icon: {
    width: 28,
    height: 28,
    objectFit: "contain",
  },
  connectionSymbol: {
    width: 31,
    fontSize: 13,
    color: BRIGHT_GOLD,
    textAlign: "center",
  },
  placementsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  placementCard: {
    width: "48.4%",
    paddingVertical: 9,
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
    fontSize: 10.2,
    color: BRIGHT_GOLD,
    textAlign: "center",
    marginBottom: 3,
  },
  placementElement: {
    fontSize: 6.1,
    color: MUTED_CREAM,
    textAlign: "center",
  },
  interpretationTitle: {
    fontSize: 8.5,
    color: CREAM,
    marginBottom: 5,
  },
  interpretationText: {
    fontSize: 6.85,
    lineHeight: 1.45,
    color: MUTED_CREAM,
    textAlign: "justify",
  },
  sectionTitle: {
    fontSize: 6.2,
    letterSpacing: 1.6,
    color: "#d5c49a",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 7,
  },
  aspectCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
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
    fontSize: 10.5,
    color: BRIGHT_GOLD,
  },
  aspectContent: {
    flex: 1,
  },
  aspectTitle: {
    fontSize: 7.2,
    color: CREAM,
    marginBottom: 2,
  },
  aspectText: {
    fontSize: 5.95,
    lineHeight: 1.34,
    color: SOFT_TEXT,
  },
  synthesisRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 9,
  },
  synthesisCard: {
    width: "48.4%",
    minHeight: 80,
    paddingVertical: 9,
    paddingHorizontal: 11,
    backgroundColor: NAVY_CARD_LIGHT,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },
  synthesisTitle: {
    fontSize: 7.4,
    color: CREAM,
    marginBottom: 5,
  },
  synthesisText: {
    fontSize: 6.1,
    lineHeight: 1.39,
    color: SOFT_TEXT,
    textAlign: "justify",
  },
  adviceCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
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
    fontSize: 11.5,
    color: BRIGHT_GOLD,
  },
  adviceContent: {
    flex: 1,
  },
  adviceTitle: {
    fontSize: 7.4,
    color: CREAM,
    marginBottom: 3,
  },
  adviceText: {
    fontSize: 6.25,
    lineHeight: 1.38,
    color: SOFT_TEXT,
  },
  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  summaryCard: {
    width: "48.4%",
    minHeight: 102,
    marginBottom: 9,
    paddingVertical: 10,
    paddingHorizontal: 11,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },
  summaryCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  summaryIcons: {
    flexDirection: "row",
    marginRight: 8,
  },
  summaryIcon: {
    width: 19,
    height: 19,
    objectFit: "contain",
    marginRight: 2,
  },
  summaryCardTitle: {
    flex: 1,
    fontSize: 7.7,
    color: CREAM,
  },
  summaryCardText: {
    fontSize: 6.15,
    lineHeight: 1.39,
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

type PlanetKey =
  | "Sun"
  | "Moon"
  | "Venus"
  | "Mars";

interface ConnectionDefinition {
  page: number;
  label: string;
  title: string;
  subtitle: string;
  planet1: PlanetKey;
  planet2: PlanetKey;
  symbol: string;
  strength: string;
  challenge: string;
  advice: string;
}

interface ConnectionAspect {
  id: string;
  person1Planet: string;
  person2Planet: string;
  type: CompatibilityAspect["type"];
  orb: number;
}

const CONNECTIONS: ConnectionDefinition[] = [
  {
    page: 22,
    label: "Identité et direction",
    title: "Soleil × Soleil",
    subtitle:
      "Cette rencontre révèle comment vos identités, vos ambitions et vos manières d’occuper l’espace peuvent s’accorder.",
    planet1: "Sun",
    planet2: "Sun",
    symbol: "☉",
    strength:
      "Votre couple peut développer une direction claire lorsque chacun reconnaît la valeur, les talents et les objectifs personnels de l’autre.",
    challenge:
      "Une rivalité peut apparaître si chacun souhaite imposer son rythme, recevoir toute la reconnaissance ou décider seul de la direction commune.",
    advice:
      "Célébrez régulièrement les réussites individuelles. Deux identités respectées deviennent une force commune plutôt qu’une compétition.",
  },
  {
    page: 23,
    label: "Besoins émotionnels",
    title: "Lune × Lune",
    subtitle:
      "Cette comparaison montre comment vos besoins de sécurité, vos réactions instinctives et vos habitudes affectives se rencontrent.",
    planet1: "Moon",
    planet2: "Moon",
    symbol: "☽",
    strength:
      "Vous pouvez construire un véritable refuge émotionnel lorsque vous apprenez à reconnaître les signes subtils de fatigue, de peur ou de besoin de réconfort.",
    challenge:
      "Vos réactions automatiques peuvent être très différentes : l’un recherche le rapprochement pendant que l’autre a besoin de silence ou de recul.",
    advice:
      "Ne jugez pas la réaction émotionnelle de l’autre. Demandez plutôt ce qui l’aiderait à retrouver un sentiment de sécurité.",
  },
  {
    page: 24,
    label: "Identité et sensibilité",
    title: "Soleil × Lune",
    subtitle:
      "Le Soleil représente l’expression consciente, tandis que la Lune révèle le monde intérieur et les besoins émotionnels.",
    planet1: "Sun",
    planet2: "Moon",
    symbol: "☉☽",
    strength:
      "Cette connexion peut créer un sentiment profond de reconnaissance : l’un éclaire et encourage, tandis que l’autre nourrit, comprend et protège.",
    challenge:
      "L’expression directe de l’un peut parfois heurter la sensibilité de l’autre, surtout lorsque les besoins affectifs ne sont pas clairement formulés.",
    advice:
      "Alternez les rôles : parfois il faut agir et encourager, parfois il faut simplement écouter et accueillir ce qui est ressenti.",
  },
  {
    page: 25,
    label: "Charme et reconnaissance",
    title: "Soleil × Vénus",
    subtitle:
      "Cette interaction décrit l’admiration, le plaisir d’être ensemble et la manière dont l’affection soutient l’identité.",
    planet1: "Sun",
    planet2: "Venus",
    symbol: "☉♀",
    strength:
      "L’admiration et le plaisir partagé peuvent renforcer la confiance du couple. Chacun peut aider l’autre à se sentir apprécié, désirable et valorisé.",
    challenge:
      "Le besoin de plaire ou d’éviter les désaccords peut parfois masquer des différences importantes de valeurs, de goûts ou d’attentes.",
    advice:
      "Conservez la douceur, mais exprimez aussi vos préférences réelles. Une harmonie sincère vaut mieux qu’une paix obtenue par l’effacement.",
  },
  {
    page: 26,
    label: "Tendresse et attachement",
    title: "Lune × Vénus",
    subtitle:
      "Cette rencontre unit les besoins émotionnels de la Lune à la manière d’aimer, de séduire et de créer l’harmonie de Vénus.",
    planet1: "Moon",
    planet2: "Venus",
    symbol: "☽♀",
    strength:
      "La tendresse, les gestes simples et le plaisir de prendre soin l’un de l’autre peuvent devenir une grande source de stabilité affective.",
    challenge:
      "L’un peut offrir de l’amour d’une façon qui ne répond pas exactement au besoin émotionnel de l’autre, malgré une intention sincère.",
    advice:
      "Demandez clairement quels gestes font réellement sentir aimé : présence, paroles, contact, aide concrète ou moments de qualité.",
  },
  {
    page: 27,
    label: "Émotion et désir",
    title: "Mars × Lune",
    subtitle:
      "Mars stimule l’action et le désir, tandis que la Lune réagit avec sensibilité, mémoire et instinct de protection.",
    planet1: "Mars",
    planet2: "Moon",
    symbol: "♂☽",
    strength:
      "Cette interaction peut créer une forte énergie protectrice, une attraction instinctive et une capacité à agir rapidement pour défendre le lien.",
    challenge:
      "Les réactions impulsives peuvent toucher des zones très sensibles. Une parole rapide ou un geste brusque peut laisser une trace émotionnelle durable.",
    advice:
      "Lorsque l’émotion monte, ralentissez avant d’agir. La sécurité affective doit rester plus importante que le besoin d’avoir immédiatement raison.",
  },
];

function normalizeValue(value: unknown): string {
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
  planet: PlanetKey,
): string {
  const value = getCompatibilityPlanet(
    person.planets,
    planet,
  );

  const sign =
    typeof value?.sign === "string"
      ? value.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getElement(sign: string): string {
  const normalized = normalizeValue(sign);

  if (
    ["belier", "lion", "sagittaire"].includes(
      normalized,
    )
  ) {
    return "Feu";
  }

  if (
    ["taureau", "vierge", "capricorne"].includes(
      normalized,
    )
  ) {
    return "Terre";
  }

  if (
    ["gemeaux", "balance", "verseau"].includes(
      normalized,
    )
  ) {
    return "Air";
  }

  if (
    ["cancer", "scorpion", "poissons"].includes(
      normalized,
    )
  ) {
    return "Eau";
  }

  return "Non précisé";
}

function getConnectionInterpretation(
  definition: ConnectionDefinition,
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return (
      "Certaines positions planétaires ne sont pas disponibles. " +
      "L’interprétation demeure générale et pourra être précisée lorsque les deux thèmes complets seront fournis."
    );
  }

  const normalized1 = normalizeValue(sign1);
  const normalized2 = normalizeValue(sign2);
  const element1 = getElement(sign1);
  const element2 = getElement(sign2);

  if (normalized1 === normalized2) {
    return (
      `Vos deux énergies se rencontrent dans le signe ${sign1}. ` +
      "Cette ressemblance crée une compréhension rapide et une manière commune d’aborder ce domaine de la relation. " +
      "Elle peut aussi amplifier les mêmes besoins, les mêmes réactions et les mêmes angles morts."
    );
  }

  if (element1 === element2) {
    return (
      `Les signes ${sign1} et ${sign2} appartiennent tous deux à l’élément ${element1}. ` +
      "Vos fonctionnements reposent donc sur une sensibilité ou une logique comparable. " +
      "Cette proximité facilite l’accord, à condition de ne pas renforcer ensemble les mêmes excès."
    );
  }

  const complementary =
    (element1 === "Feu" && element2 === "Air") ||
    (element1 === "Air" && element2 === "Feu") ||
    (element1 === "Terre" && element2 === "Eau") ||
    (element1 === "Eau" && element2 === "Terre");

  if (complementary) {
    return (
      `Les signes ${sign1} et ${sign2} appartiennent aux éléments ${element1} et ${element2}, qui peuvent se soutenir naturellement. ` +
      "L’un apporte mouvement, inspiration ou initiative, tandis que l’autre ajoute profondeur, stabilité ou compréhension. " +
      "Votre différence peut devenir une véritable complémentarité."
    );
  }

  return (
    `Les signes ${sign1} et ${sign2} fonctionnent selon des éléments différents, ${element1} et ${element2}. ` +
    "Vos réactions et vos priorités ne sont donc pas toujours immédiates à comprendre. " +
    "Cette différence devient enrichissante lorsque chacun cesse d’attendre que l’autre ressente, décide ou aime exactement de la même façon."
  );
}

function isPlanet(
  value: string,
  planet: PlanetKey,
): boolean {
  const normalized = normalizeValue(value);

  const names: Record<PlanetKey, string[]> = {
    Sun: ["sun", "soleil"],
    Moon: ["moon", "lune"],
    Venus: ["venus"],
    Mars: ["mars"],
  };

  return names[planet].includes(normalized);
}

function getConnectionAspects(
  aspects: CompatibilityAspect[],
  planet1: PlanetKey,
  planet2: PlanetKey,
): ConnectionAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects
    .filter((aspect) => {
      const first = aspect.person1Planet || "";
      const second = aspect.person2Planet || "";

      return (
        (isPlanet(first, planet1) &&
          isPlanet(second, planet2)) ||
        (isPlanet(first, planet2) &&
          isPlanet(second, planet1))
      );
    })
    .sort(
      (first, second) =>
        first.orb - second.orb,
    )
    .slice(0, 3)
    .map((aspect, index) => ({
      id: `${planet1}-${planet2}-${index}`,
      person1Planet: aspect.person1Planet,
      person2Planet: aspect.person2Planet,
      type: aspect.type,
      orb: aspect.orb,
    }));
}

function getAspectSymbol(
  type: CompatibilityAspect["type"],
): string {
  const symbols: Record<
    CompatibilityAspect["type"],
    string
  > = {
    conjunction: "☌",
    opposition: "☍",
    trine: "△",
    square: "□",
    sextile: "✶",
    quincunx: "⚻",
  };

  return symbols[type];
}

function getAspectInterpretation(
  type: CompatibilityAspect["type"],
): string {
  if (
    type === "trine" ||
    type === "sextile"
  ) {
    return "Cette interaction facilite la circulation de l’énergie et permet aux deux fonctions planétaires de se soutenir avec davantage de naturel.";
  }

  if (type === "conjunction") {
    return "Cette connexion intensifie fortement la rencontre des deux énergies. Elle peut créer une grande proximité, mais aussi amplifier leurs réactions.";
  }

  if (type === "square") {
    return "Cette tension pousse le couple à agir et à évoluer, mais elle demande de reconnaître les réactions défensives et les besoins contradictoires.";
  }

  if (type === "opposition") {
    return "Cette polarité crée une forte attraction et révèle deux manières opposées d’exprimer le même besoin relationnel.";
  }

  return "Cette interaction demande des ajustements répétés. La compréhension se construit lorsque chacun accepte de modifier certaines habitudes.";
}

function PageFrame({
  children,
  page,
}: {
  children: ReactNode;
  page: number;
}) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.topAccent} fixed />
      <View style={styles.outerBorder} fixed />
      <View style={styles.innerBorder} fixed />
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

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          Luna Astralis • Rapport de synastrie
        </Text>

        <Text style={styles.footerPage}>
          {page}
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

      <View style={styles.divider} />
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
  symbol: string;
}) {
  return (
    <View style={styles.namesCard} wrap={false}>
      <Text style={styles.name}>
        {person1Name}
      </Text>

      <Text style={styles.nameSeparator}>
        {symbol}
      </Text>

      <Text style={styles.name}>
        {person2Name}
      </Text>
    </View>
  );
}

function AspectCard({
  aspect,
}: {
  aspect: ConnectionAspect;
}) {
  return (
    <View
      style={styles.aspectCard}
      wrap={false}
    >
      <View style={styles.aspectSymbolFrame}>
        <Text style={styles.aspectSymbol}>
          {getAspectSymbol(aspect.type)}
        </Text>
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
          )}
          {" • orbe "}
          {aspect.orb.toFixed(1)}°
        </Text>

        <Text style={styles.aspectText}>
          {getAspectInterpretation(aspect.type)}
        </Text>
      </View>
    </View>
  );
}

function ConnectionPage({
  definition,
  person1,
  person2,
  aspects,
}: {
  definition: ConnectionDefinition;
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects: CompatibilityAspect[];
}) {
  const person1Name = getPersonName(
    person1,
    "Première personne",
  );

  const person2Name = getPersonName(
    person2,
    "Deuxième personne",
  );

  const sign1 = getPlanetSign(
    person1,
    definition.planet1,
  );

  const sign2 = getPlanetSign(
    person2,
    definition.planet2,
  );

  const connectionAspects =
    getConnectionAspects(
      aspects,
      definition.planet1,
      definition.planet2,
    );

  return (
    <PageFrame page={definition.page}>
      <Header
        label={definition.label}
        title={definition.title}
        subtitle={definition.subtitle}
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol={definition.symbol}
      />

      <View
        style={styles.mainCard}
        wrap={false}
      >
        <View style={styles.mainAccent} />

        <View style={styles.iconRow}>
          <View style={styles.iconFrame}>
            <Image
              src={
                PLANET_ICONS[
                  definition.planet1
                ]
              }
              style={styles.icon}
            />
          </View>

          <Text style={styles.connectionSymbol}>
            ×
          </Text>

          <View style={styles.iconFrame}>
            <Image
              src={
                PLANET_ICONS[
                  definition.planet2
                ]
              }
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.placementsRow}>
          <View style={styles.placementCard}>
            <Text style={styles.placementName}>
              {person1Name}
            </Text>

            <Text style={styles.placementValue}>
              {translateCompatibilityPlanet(
                definition.planet1,
              )}{" "}
              en {sign1}
            </Text>

            <Text style={styles.placementElement}>
              Élément {getElement(sign1)}
            </Text>
          </View>

          <View style={styles.placementCard}>
            <Text style={styles.placementName}>
              {person2Name}
            </Text>

            <Text style={styles.placementValue}>
              {translateCompatibilityPlanet(
                definition.planet2,
              )}{" "}
              en {sign2}
            </Text>

            <Text style={styles.placementElement}>
              Élément {getElement(sign2)}
            </Text>
          </View>
        </View>

        <Text style={styles.interpretationTitle}>
          Votre dynamique
        </Text>

        <Text style={styles.interpretationText}>
          {getConnectionInterpretation(
            definition,
            sign1,
            sign2,
          )}
        </Text>
      </View>

      {connectionAspects.length > 0 && (
        <View wrap={false}>
          <Text style={styles.sectionTitle}>
            Aspect direct entre ces énergies
          </Text>

          {connectionAspects.map((aspect) => (
            <AspectCard
              key={aspect.id}
              aspect={aspect}
            />
          ))}
        </View>
      )}

      <View
        style={styles.synthesisRow}
        wrap={false}
      >
        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre potentiel
          </Text>

          <Text style={styles.synthesisText}>
            {definition.strength}
          </Text>
        </View>

        <View style={styles.synthesisCard}>
          <Text style={styles.synthesisTitle}>
            Votre point de vigilance
          </Text>

          <Text style={styles.synthesisText}>
            {definition.challenge}
          </Text>
        </View>
      </View>

      <View
        style={styles.adviceCard}
        wrap={false}
      >
        <View style={styles.adviceSymbolFrame}>
          <Text style={styles.adviceSymbol}>
            ✦
          </Text>
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Votre clé relationnelle
          </Text>

          <Text style={styles.adviceText}>
            {definition.advice}
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function getSummaryText(
  definition: ConnectionDefinition,
  person1: SafeCompatibilityPerson,
  person2: SafeCompatibilityPerson,
): string {
  const sign1 = getPlanetSign(
    person1,
    definition.planet1,
  );

  const sign2 = getPlanetSign(
    person2,
    definition.planet2,
  );

  return (
    `${translateCompatibilityPlanet(
      definition.planet1,
    )} en ${sign1} rencontre ` +
    `${translateCompatibilityPlanet(
      definition.planet2,
    )} en ${sign2}. ` +
    getConnectionInterpretation(
      definition,
      sign1,
      sign2,
    )
  );
}

function SummaryPage({
  person1,
  person2,
}: {
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
}) {
  const person1Name = getPersonName(
    person1,
    "Première personne",
  );

  const person2Name = getPersonName(
    person2,
    "Deuxième personne",
  );

  return (
    <PageFrame page={28}>
      <Header
        label="Lecture d’ensemble"
        title="Synthèse des interactions planétaires"
        subtitle="Les principales connexions entre vos planètes personnelles décrivent la manière dont identité, émotion, affection et désir forment votre dynamique de couple."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol="✦"
      />

      <View style={styles.summaryGrid}>
        {CONNECTIONS.map((definition) => (
          <View
            key={definition.page}
            style={styles.summaryCard}
            wrap={false}
          >
            <View
              style={styles.summaryCardHeader}
            >
              <View style={styles.summaryIcons}>
                <Image
                  src={
                    PLANET_ICONS[
                      definition.planet1
                    ]
                  }
                  style={styles.summaryIcon}
                />

                <Image
                  src={
                    PLANET_ICONS[
                      definition.planet2
                    ]
                  }
                  style={styles.summaryIcon}
                />
              </View>

              <Text
                style={styles.summaryCardTitle}
              >
                {definition.title}
              </Text>
            </View>

            <Text style={styles.summaryCardText}>
              {getSummaryText(
                definition,
                person1,
                person2,
              )}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={styles.adviceCard}
        wrap={false}
      >
        <View style={styles.adviceSymbolFrame}>
          <Text style={styles.adviceSymbol}>
            ✦
          </Text>
        </View>

        <View style={styles.adviceContent}>
          <Text style={styles.adviceTitle}>
            Ce que révèle l’ensemble
          </Text>

          <Text style={styles.adviceText}>
            Aucune connexion ne définit seule votre
            relation. La compatibilité se construit
            dans l’équilibre entre identité,
            sécurité émotionnelle, affection,
            communication et désir. Vos différences
            ne représentent pas nécessairement des
            obstacles : elles indiquent souvent les
            endroits précis où le couple apprend à
            mieux se connaître et à évoluer.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

export default function CompatibilityPlanetConnections({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  return (
    <>
      {CONNECTIONS.map((definition) => (
        <ConnectionPage
          key={definition.page}
          definition={definition}
          person1={person1}
          person2={person2}
          aspects={aspects}
        />
      ))}

      <SummaryPage
        person1={person1}
        person2={person2}
      />
    </>
  );
}
