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
    width: "88%",

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

    alignItems: "center",
    justifyContent: "center",
  },

  nameSeparatorIcon: {
    width: 19,
    height: 19,

    objectFit: "contain",
  },

  introCard: {
    position: "relative",

    paddingVertical: 12,
    paddingHorizontal: 14,

    marginBottom: 10,

    backgroundColor: NAVY_CARD,

    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },

  introAccent: {
    position: "absolute",

    top: -1,
    left: "34%",

    width: "32%",
    height: 2,

    backgroundColor: BRIGHT_GOLD,
  },

  introTitle: {
    fontSize: 8.6,

    color: CREAM,

    marginBottom: 5,
  },

  introText: {
    fontSize: 6.85,
    lineHeight: 1.45,

    color: MUTED_CREAM,

    textAlign: "justify",
  },

  placementsRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 9,
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
    fontSize: 9.8,

    color: BRIGHT_GOLD,

    textAlign: "center",

    marginBottom: 3,
  },

  placementText: {
    fontSize: 6.1,
    lineHeight: 1.34,

    color: MUTED_CREAM,

    textAlign: "center",
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
    width: 17,
    height: 17,

    objectFit: "contain",
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

  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 5,
    marginBottom: 9,
  },

  twoColumnCard: {
    width: "48.4%",

    minHeight: 80,

    paddingVertical: 9,
    paddingHorizontal: 11,

    backgroundColor: NAVY_CARD_LIGHT,

    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },

  twoColumnTitle: {
    fontSize: 7.4,

    color: CREAM,

    marginBottom: 5,
  },

  twoColumnText: {
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
    width: 18,
    height: 18,

    objectFit: "contain",
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
  | "Mercury"
  | "Venus"
  | "Mars"
  | "Jupiter"
  | "Saturn";

interface LifeDefinition {
  page: number;
  label: string;
  title: string;
  subtitle: string;
  planet1: PlanetKey;
  planet2: PlanetKey;
  introTitle: string;
  introText: string;
  strength: string;
  challenge: string;
  advice: string;
  keywords: string[];
}

const LIFE_PAGES: LifeDefinition[] = [
  {
    page: 37,

    label: "Rythmes et habitudes",

    title: "Votre vie quotidienne",

    subtitle:
      "La compatibilité se construit aussi dans les horaires, les responsabilités, les habitudes et les petits gestes répétés.",

    planet1: "Moon",
    planet2: "Saturn",

    introTitle: "Partager le réel",

    introText:
      "La Lune montre les habitudes et les besoins de confort, tandis que Saturne décrit l’organisation, les devoirs et la stabilité. Leur combinaison révèle comment vous pouvez créer un quotidien rassurant sans laisser la routine étouffer la relation.",

    strength:
      "Vous pouvez bâtir des repères solides lorsque chacun participe concrètement et respecte le rythme naturel de l’autre.",

    challenge:
      "Les frustrations s’accumulent lorsque les tâches, les horaires ou la charge mentale semblent déséquilibrés.",

    advice:
      "Définissez clairement ce qui appartient à chacun et conservez aussi des moments spontanés qui ne servent aucun objectif pratique.",

    keywords: [
      "moon",
      "lune",
      "saturn",
      "saturne",
      "mercury",
      "mercure",
    ],
  },

  {
    page: 38,

    label: "Sécurité et appartenance",

    title: "Famille et foyer",

    subtitle:
      "Le foyer représente l’endroit où le couple cherche protection, intimité, continuité et sentiment d’appartenance.",

    planet1: "Moon",
    planet2: "Venus",

    introTitle: "Créer un refuge commun",

    introText:
      "La Lune décrit le besoin de sécurité émotionnelle et Vénus la manière de créer douceur, harmonie et plaisir. Ensemble, elles montrent comment le couple peut construire un climat familial chaleureux et respectueux.",

    strength:
      "La tendresse, l’écoute et les traditions partagées peuvent devenir une importante source de cohésion.",

    challenge:
      "Les attentes familiales, les habitudes héritées ou les besoins de proximité peuvent différer davantage qu’il n’y paraît.",

    advice:
      "Créez vos propres traditions au lieu de reproduire automatiquement celles de vos familles d’origine.",

    keywords: [
      "moon",
      "lune",
      "venus",
      "saturn",
      "saturne",
    ],
  },

  {
    page: 39,

    label: "Dialogue dans le réel",

    title: "Communication approfondie",

    subtitle:
      "Au-delà du style mental, cette page observe la manière dont vous discutez des décisions, des émotions et des sujets sensibles.",

    planet1: "Mercury",
    planet2: "Moon",

    introTitle: "Parler pour être compris",

    introText:
      "Mercure organise les idées et les mots, tandis que la Lune réagit selon le ressenti. Leur interaction montre si le dialogue peut rejoindre l’émotion ou si la logique et la sensibilité ont besoin d’un pont plus conscient.",

    strength:
      "Vous pouvez résoudre beaucoup de situations lorsque vous prenez le temps de distinguer les faits, les émotions et les attentes.",

    challenge:
      "Une discussion peut déraper lorsque l’un cherche une solution pendant que l’autre souhaite d’abord être entendu.",

    advice:
      "Avant de répondre, demandez : « Veux-tu une solution, un avis ou simplement être écouté ? »",

    keywords: [
      "mercury",
      "mercure",
      "moon",
      "lune",
      "saturn",
      "saturne",
    ],
  },

  {
    page: 40,

    label: "Corps et proximité",

    title: "Sexualité et intimité",

    subtitle:
      "L’intimité révèle comment désir, confiance, tendresse et vulnérabilité se rencontrent dans la relation.",

    planet1: "Venus",
    planet2: "Mars",

    introTitle: "L’alchimie vécue",

    introText:
      "Vénus décrit la manière d’attirer, de recevoir et de créer le plaisir, tandis que Mars représente l’élan, l’initiative et le désir. Leur rencontre montre le rythme de l’attirance et la façon dont l’intimité peut rester vivante.",

    strength:
      "Votre alchimie peut devenir un langage puissant de réconciliation, de confiance et de présence.",

    challenge:
      "Les différences de rythme, de spontanéité ou de besoin affectif peuvent être mal interprétées comme un manque d’amour.",

    advice:
      "Parlez ouvertement de vos besoins et de vos limites sans attendre qu’ils soient devinés.",

    keywords: [
      "venus",
      "mars",
      "moon",
      "lune",
      "pluto",
      "pluton",
    ],
  },

  {
    page: 41,

    label: "Ressources et stabilité",

    title: "Argent et sécurité matérielle",

    subtitle:
      "Les finances mettent en lumière les valeurs, les priorités, le besoin de sécurité et la manière de prendre des décisions concrètes.",

    planet1: "Venus",
    planet2: "Saturn",

    introTitle: "Construire sans se limiter",

    introText:
      "Vénus parle des valeurs et du plaisir, tandis que Saturne décrit la prudence, la responsabilité et le long terme. Leur interaction montre comment vous pouvez équilibrer dépenses, sécurité, projets et qualité de vie.",

    strength:
      "Une vision claire et des objectifs partagés peuvent vous aider à construire une stabilité durable.",

    challenge:
      "L’un peut privilégier la sécurité alors que l’autre souhaite davantage profiter du présent ou investir dans des expériences.",

    advice:
      "Décidez ensemble d’un budget pour les obligations, l’épargne et le plaisir afin que personne ne se sente contrôlé ou négligé.",

    keywords: [
      "venus",
      "saturn",
      "saturne",
      "jupiter",
      "mercury",
      "mercure",
    ],
  },

  {
    page: 42,

    label: "Ambition et réalisation",

    title: "Carrière et ambitions",

    subtitle:
      "Le couple influence la confiance, la motivation, les choix professionnels et la capacité à soutenir les objectifs de chacun.",

    planet1: "Sun",
    planet2: "Jupiter",

    introTitle: "Grandir sans se rivaliser",

    introText:
      "Le Soleil représente l’identité et l’accomplissement, tandis que Jupiter amplifie la confiance, l’ambition et la vision. Cette combinaison montre comment vous pouvez encourager la réussite sans transformer les objectifs personnels en compétition.",

    strength:
      "Vous pouvez devenir une véritable équipe lorsque chacun célèbre les avancées de l’autre et partage ses ressources.",

    challenge:
      "La réussite, le temps consacré au travail ou les différences d’ambition peuvent créer distance ou comparaison.",

    advice:
      "Soutenez les projets personnels tout en protégeant des moments où la relation n’est pas reléguée au second plan.",

    keywords: [
      "sun",
      "soleil",
      "jupiter",
      "saturn",
      "saturne",
      "mars",
    ],
  },

  {
    page: 43,

    label: "Vision commune",

    title: "Vos projets de vie",

    subtitle:
      "Les projets communs donnent une direction au couple et transforment les aspirations individuelles en construction partagée.",

    planet1: "Jupiter",
    planet2: "Saturn",

    introTitle: "Rêver et concrétiser",

    introText:
      "Jupiter ouvre les possibilités et Saturne donne une structure. Ensemble, ils montrent comment le couple peut transformer une idée en projet réel, à condition d’équilibrer enthousiasme, patience et responsabilité.",

    strength:
      "Vous pouvez avancer loin lorsque l’un apporte la vision et l’autre la méthode, ou lorsque vous alternez naturellement ces rôles.",

    challenge:
      "Le projet peut ralentir si l’un juge l’autre trop prudent, trop ambitieux ou insuffisamment engagé.",

    advice:
      "Définissez une vision commune, puis divisez-la en étapes concrètes avec des responsabilités et des échéances réalistes.",

    keywords: [
      "jupiter",
      "saturn",
      "saturne",
      "sun",
      "soleil",
      "mars",
    ],
  },

  {
    page: 44,

    label: "Durée et évolution",

    title: "Votre potentiel à long terme",

    subtitle:
      "La durée dépend moins d’une perfection immédiate que de la capacité à grandir, réparer, s’adapter et renouveler le lien.",

    planet1: "Saturn",
    planet2: "Jupiter",

    introTitle: "Construire dans le temps",

    introText:
      "Saturne décrit l’engagement et la résistance du lien, tandis que Jupiter représente l’évolution, l’espoir et la croissance. Leur équilibre révèle si le couple sait rester stable sans cesser d’avancer.",

    strength:
      "La relation peut durer lorsqu’elle conserve une direction, des engagements clairs et la capacité de créer de nouvelles expériences.",

    challenge:
      "La stabilité peut devenir rigidité, tandis que le besoin de changement peut être vécu comme une menace.",

    advice:
      "Réévaluez régulièrement vos projets, vos besoins et vos règles de couple afin que l’engagement reste vivant plutôt que figé.",

    keywords: [
      "saturn",
      "saturne",
      "jupiter",
      "uranus",
      "pluto",
      "pluton",
    ],
  },
];

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
  planet: PlanetKey,
): string {
  const value =
    getCompatibilityPlanet(
      person.planets,
      planet,
    );

  const sign =
    typeof value?.sign === "string"
      ? value.sign.trim()
      : "";

  return sign || "Non précisé";
}

function getRelevantAspects(
  aspects: CompatibilityAspect[],
  keywords: string[],
): CompatibilityAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects
    .filter((aspect) => {
      const first =
        normalizeValue(
          aspect.person1Planet,
        );

      const second =
        normalizeValue(
          aspect.person2Planet,
        );

      return (
        keywords.includes(first) ||
        keywords.includes(second)
      );
    })
    .sort(
      (first, second) =>
        first.orb - second.orb,
    )
    .slice(0, 3);
}

function getAspectInterpretation(
  aspect: CompatibilityAspect,
): string {
  if (
    aspect.type === "trine" ||
    aspect.type === "sextile"
  ) {
    return "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel.";
  }

  if (aspect.type === "conjunction") {
    return "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple.";
  }

  if (aspect.type === "square") {
    return "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités.";
  }

  if (aspect.type === "opposition") {
    return "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue.";
  }

  return "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration.";
}

function getPersonalStyle(
  planet: PlanetKey,
  sign: string,
): string {
  if (sign === "Non précisé") {
    return "Position non disponible";
  }

  const elementMap: Record<
    string,
    string
  > = {
    belier:
      "spontané et direct",

    taureau:
      "stable et concret",

    gemeaux:
      "souple et curieux",

    cancer:
      "protecteur et sensible",

    lion:
      "chaleureux et affirmé",

    vierge:
      "méthodique et pratique",

    balance:
      "coopératif et diplomate",

    scorpion:
      "profond et intense",

    sagittaire:
      "enthousiaste et expansif",

    capricorne:
      "responsable et structuré",

    verseau:
      "indépendant et original",

    poissons:
      "intuitif et réceptif",
  };

  const tone =
    elementMap[normalizeValue(sign)] ||
    "personnel et nuancé";

  return (
    `${translateCompatibilityPlanet(
      planet,
    )} en ${sign} : ` +
    `fonctionnement ${tone}.`
  );
}

function PageFrame({
  children,
  page,
}: {
  children: ReactNode;
  page: number;
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
        style={
          styles.decorativeCircleTop
        }
        fixed
      />

      <View
        style={
          styles.decorativeCircleBottom
        }
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

      <View style={styles.divider} />
    </View>
  );
}

function NamesCard({
  person1Name,
  person2Name,
}: {
  person1Name: string;
  person2Name: string;
}) {
  return (
    <View
      style={styles.namesCard}
      wrap={false}
    >
      <Text style={styles.name}>
        {person1Name}
      </Text>

      <View style={styles.nameSeparator}>
        <Image
          src={LOGO_URL}
          style={styles.nameSeparatorIcon}
        />
      </View>

      <Text style={styles.name}>
        {person2Name}
      </Text>
    </View>
  );
}

function AspectCard({
  aspect,
}: {
  aspect: CompatibilityAspect;
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
          )}
          {" • orbe "}
          {aspect.orb.toFixed(1)}°
        </Text>

        <Text style={styles.aspectText}>
          {getAspectInterpretation(
            aspect,
          )}
        </Text>
      </View>
    </View>
  );
}

function LifePage({
  definition,
  person1,
  person2,
  aspects,
}: {
  definition: LifeDefinition;
  person1: SafeCompatibilityPerson;
  person2: SafeCompatibilityPerson;
  aspects: CompatibilityAspect[];
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
    getPlanetSign(
      person1,
      definition.planet1,
    );

  const sign2 =
    getPlanetSign(
      person2,
      definition.planet2,
    );

  const relevantAspects =
    getRelevantAspects(
      aspects,
      definition.keywords,
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
      />

      <View
        style={styles.introCard}
        wrap={false}
      >
        <View style={styles.introAccent} />

        <Text style={styles.introTitle}>
          {definition.introTitle}
        </Text>

        <Text style={styles.introText}>
          {definition.introText}
        </Text>
      </View>

      <View
        style={styles.placementsRow}
        wrap={false}
      >
        <View
          style={styles.placementCard}
        >
          <Text
            style={styles.placementName}
          >
            {person1Name}
          </Text>

          <Text
            style={styles.placementValue}
          >
            {translateCompatibilityPlanet(
              definition.planet1,
            )}{" "}
            en {sign1}
          </Text>

          <Text
            style={styles.placementText}
          >
            {getPersonalStyle(
              definition.planet1,
              sign1,
            )}
          </Text>
        </View>

        <View
          style={styles.placementCard}
        >
          <Text
            style={styles.placementName}
          >
            {person2Name}
          </Text>

          <Text
            style={styles.placementValue}
          >
            {translateCompatibilityPlanet(
              definition.planet2,
            )}{" "}
            en {sign2}
          </Text>

          <Text
            style={styles.placementText}
          >
            {getPersonalStyle(
              definition.planet2,
              sign2,
            )}
          </Text>
        </View>
      </View>

      {relevantAspects.length > 0 && (
        <View wrap={false}>
          <Text
            style={styles.sectionTitle}
          >
            Influences astrologiques principales
          </Text>

          {relevantAspects.map(
            (aspect, index) => (
              <AspectCard
                key={
                  `${definition.page}-` +
                  `${index}-` +
                  `${aspect.person1Planet}-` +
                  `${aspect.person2Planet}`
                }
                aspect={aspect}
              />
            ),
          )}
        </View>
      )}

      <View
        style={styles.twoColumnRow}
        wrap={false}
      >
        <View
          style={styles.twoColumnCard}
        >
          <Text
            style={styles.twoColumnTitle}
          >
            Votre potentiel
          </Text>

          <Text
            style={styles.twoColumnText}
          >
            {definition.strength}
          </Text>
        </View>

        <View
          style={styles.twoColumnCard}
        >
          <Text
            style={styles.twoColumnTitle}
          >
            Votre point de vigilance
          </Text>

          <Text
            style={styles.twoColumnText}
          >
            {definition.challenge}
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
            Votre clé concrète
          </Text>

          <Text style={styles.adviceText}>
            {definition.advice}
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

export default function CompatibilityLife({
  person1,
  person2,
  aspects,
}: CompatibilitySectionProps) {
  const safeAspects =
    Array.isArray(aspects)
      ? aspects
      : [];

  return (
    <>
      {LIFE_PAGES.map(
        (definition) => (
          <LifePage
            key={definition.page}
            definition={definition}
            person1={person1}
            person2={person2}
            aspects={safeAspects}
          />
        ),
      )}
    </>
  );
}
