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
    fontSize: 13,
    color: BRIGHT_GOLD,
    textAlign: "center",
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
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  summaryCard: {
    width: "31.8%",
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: NAVY_CARD_LIGHT,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
    alignItems: "center",
  },
  summaryValue: {
    fontSize: 16,
    color: BRIGHT_GOLD,
    marginBottom: 2,
  },
  summaryLabel: {
    fontSize: 5.6,
    lineHeight: 1.3,
    color: SOFT_TEXT,
    textAlign: "center",
    textTransform: "uppercase",
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
  aspectRank: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  aspectRankText: {
    fontSize: 7,
    color: BRIGHT_GOLD,
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
    fontSize: 7.3,
    color: CREAM,
    marginBottom: 2,
  },
  aspectText: {
    fontSize: 5.95,
    lineHeight: 1.34,
    color: SOFT_TEXT,
  },
  aspectOrb: {
    width: 48,
    fontSize: 5.7,
    color: MUTED_CREAM,
    textAlign: "right",
  },
  emptyCard: {
    paddingVertical: 14,
    paddingHorizontal: 13,
    marginBottom: 10,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },
  emptyText: {
    fontSize: 6.7,
    lineHeight: 1.45,
    color: MUTED_CREAM,
    textAlign: "center",
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
  balanceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  balanceCard: {
    width: "48.4%",
    minHeight: 88,
    marginBottom: 8,
    paddingVertical: 9,
    paddingHorizontal: 11,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },
  balanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  balanceSymbol: {
    width: 24,
    fontSize: 11,
    color: BRIGHT_GOLD,
  },
  balanceTitle: {
    flex: 1,
    fontSize: 7.5,
    color: CREAM,
  },
  balanceText: {
    fontSize: 6.05,
    lineHeight: 1.38,
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

type AspectType = CompatibilityAspect["type"];

interface AspectPageDefinition {
  page: number;
  type: AspectType;
  label: string;
  title: string;
  subtitle: string;
  introTitle: string;
  introText: string;
  strength: string;
  challenge: string;
  advice: string;
}

const ASPECT_PAGES: AspectPageDefinition[] = [
  {
    page: 29,
    type: "conjunction",
    label: "Fusion des énergies",
    title: "Vos conjonctions",
    subtitle:
      "La conjonction réunit deux planètes dans une même zone et intensifie fortement leur interaction.",
    introTitle: "Une énergie concentrée",
    introText:
      "Les conjonctions créent des liens puissants, immédiats et difficiles à ignorer. Elles peuvent donner un sentiment de familiarité ou d’évidence, mais elles amplifient également les qualités et les tensions des planètes concernées.",
    strength:
      "Elles favorisent la proximité, la reconnaissance mutuelle et une forte concentration d’énergie autour de certains thèmes du couple.",
    challenge:
      "L’intensité peut devenir excessive lorsque les deux énergies se renforcent sans distance, recul ou espace personnel.",
    advice:
      "Utilisez la puissance des conjonctions pour construire ensemble, tout en laissant chacun respirer et conserver son identité.",
  },
  {
    page: 30,
    type: "trine",
    label: "Harmonie naturelle",
    title: "Vos trigones",
    subtitle:
      "Le trigone relie des énergies compatibles et révèle les talents qui circulent facilement entre vous.",
    introTitle: "Une facilité spontanée",
    introText:
      "Les trigones montrent les domaines où la relation peut sembler simple, fluide et naturelle. Ils soutiennent la confiance, la coopération et le sentiment que certaines choses se comprennent sans effort.",
    strength:
      "Ils facilitent la confiance, l’entraide et la capacité à retrouver rapidement une harmonie après les périodes plus exigeantes.",
    challenge:
      "Une facilité constante peut être tenue pour acquise ou devenir passive si le couple ne cherche plus à nourrir consciemment ses qualités.",
    advice:
      "Reconnaissez vos talents naturels et utilisez-les comme fondation pour traverser les défis plus complexes.",
  },
  {
    page: 31,
    type: "sextile",
    label: "Opportunités de croissance",
    title: "Vos sextiles",
    subtitle:
      "Le sextile ouvre des portes et montre ce que le couple peut développer par la curiosité, l’initiative et la coopération.",
    introTitle: "Un potentiel à activer",
    introText:
      "Les sextiles sont harmonieux, mais ils demandent une participation consciente. Ils montrent les occasions d’apprendre, de créer et de faire évoluer la relation lorsque chacun accepte de faire un pas vers l’autre.",
    strength:
      "Ils offrent de nombreuses possibilités de dialogue, de collaboration et d’enrichissement mutuel.",
    challenge:
      "Le potentiel peut rester inutilisé si le couple attend que les choses se développent seules sans initiative ni engagement.",
    advice:
      "Transformez les possibilités en habitudes concrètes : projets partagés, nouvelles expériences et temps de qualité.",
  },
  {
    page: 32,
    type: "square",
    label: "Tensions créatrices",
    title: "Vos carrés",
    subtitle:
      "Le carré confronte deux énergies qui cherchent à agir différemment et pousse la relation à évoluer.",
    introTitle: "Une tension qui demande une réponse",
    introText:
      "Les carrés révèlent les domaines où les réactions sont rapides, défensives ou contradictoires. Ils peuvent créer des conflits, mais ils donnent aussi au couple l’énergie nécessaire pour changer, décider et dépasser certains automatismes.",
    strength:
      "Ils empêchent la relation de stagner et peuvent développer courage, franchise, maturité et capacité à résoudre les problèmes.",
    challenge:
      "Les mêmes désaccords peuvent revenir si chacun défend uniquement sa position sans chercher le besoin profond derrière la réaction.",
    advice:
      "Ne cherchez pas immédiatement un coupable. Identifiez plutôt les deux besoins légitimes qui entrent en collision.",
  },
  {
    page: 33,
    type: "opposition",
    label: "Attraction des contraires",
    title: "Vos oppositions",
    subtitle:
      "L’opposition place deux énergies face à face et crée une forte attraction accompagnée d’un besoin d’équilibre.",
    introTitle: "Deux pôles d’un même axe",
    introText:
      "Les oppositions montrent des différences visibles qui peuvent fasciner autant qu’elles déstabilisent. Chacun peut porter une qualité que l’autre doit apprendre à reconnaître, intégrer ou respecter.",
    strength:
      "Elles apportent complémentarité, perspective et capacité à voir une situation depuis deux angles opposés.",
    challenge:
      "Le couple peut tomber dans une dynamique où chacun projette sur l’autre ce qu’il refuse ou comprend moins bien en lui-même.",
    advice:
      "Cherchez le point d’équilibre entre vos deux positions plutôt que d’essayer de prouver qu’une seule manière est correcte.",
  },
  {
    page: 34,
    type: "quincunx",
    label: "Ajustements subtils",
    title: "Vos quinconces",
    subtitle:
      "Le quinconce relie des énergies qui ne parlent pas immédiatement le même langage et nécessitent des adaptations répétées.",
    introTitle: "Comprendre ce qui échappe",
    introText:
      "Les quinconces créent souvent un sentiment d’incompréhension difficile à expliquer. Il ne s’agit pas toujours d’un conflit direct, mais plutôt d’un décalage de rythme, de priorité ou de manière d’interpréter les événements.",
    strength:
      "Ils développent l’adaptabilité, la patience et une compréhension plus fine des différences individuelles.",
    challenge:
      "La frustration peut s’accumuler si les ajustements sont toujours faits par la même personne ou si les besoins restent implicites.",
    advice:
      "Formulez précisément ce qui doit être ajusté et vérifiez régulièrement que l’effort demeure équilibré entre vous.",
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

function getAspectSymbol(type: AspectType): string {
  const symbols: Record<AspectType, string> = {
    conjunction: "☌",
    opposition: "☍",
    trine: "△",
    square: "□",
    sextile: "✶",
    quincunx: "⚻",
  };

  return symbols[type];
}

function getAspectNature(type: AspectType): string {
  if (type === "conjunction") {
    return "Intensification";
  }

  if (type === "trine") {
    return "Harmonie naturelle";
  }

  if (type === "sextile") {
    return "Opportunité";
  }

  if (type === "square") {
    return "Tension créatrice";
  }

  if (type === "opposition") {
    return "Polarité";
  }

  return "Ajustement";
}

function getAspectInterpretation(
  aspect: CompatibilityAspect,
): string {
  const first = normalizeValue(
    aspect.person1Planet,
  );

  const second = normalizeValue(
    aspect.person2Planet,
  );

  const planets = [first, second];

  const hasSun = planets.some((planet) =>
    ["sun", "soleil"].includes(planet),
  );
  const hasMoon = planets.some((planet) =>
    ["moon", "lune"].includes(planet),
  );
  const hasMercury = planets.some((planet) =>
    ["mercury", "mercure"].includes(planet),
  );
  const hasVenus = planets.includes("venus");
  const hasMars = planets.includes("mars");
  const hasSaturn = planets.some((planet) =>
    ["saturn", "saturne"].includes(planet),
  );
  const hasUranus = planets.includes("uranus");
  const hasNeptune = planets.includes("neptune");
  const hasPluto = planets.some((planet) =>
    ["pluto", "pluton"].includes(planet),
  );

  const harmonious =
    aspect.type === "trine" ||
    aspect.type === "sextile";

  const challenging =
    aspect.type === "square" ||
    aspect.type === "opposition" ||
    aspect.type === "quincunx";

  if (hasSun && hasMoon) {
    if (harmonious) {
      return "L’identité de l’un soutient les besoins émotionnels de l’autre, favorisant reconnaissance, sécurité et compréhension.";
    }

    if (challenging) {
      return "L’expression personnelle de l’un peut parfois heurter la sensibilité ou les besoins affectifs de l’autre.";
    }

    return "Cette connexion lie fortement identité et sensibilité, créant une impression de familiarité et de reconnaissance.";
  }

  if (hasVenus && hasMars) {
    if (harmonious) {
      return "L’affection et le désir circulent avec naturel, renforçant attraction, charme, sensualité et initiative.";
    }

    if (challenging) {
      return "L’attirance peut être intense, mais les rythmes amoureux ou les manières d’exprimer le désir peuvent entrer en tension.";
    }

    return "Cette interaction intensifie l’alchimie, l’attirance et le besoin de vivre la relation de manière concrète.";
  }

  if (hasMoon && hasVenus) {
    if (harmonious) {
      return "La tendresse répond facilement aux besoins affectifs et favorise douceur, réconfort et plaisir d’être ensemble.";
    }

    if (challenging) {
      return "La manière de donner de l’amour ne correspond pas toujours exactement au besoin émotionnel de l’autre.";
    }

    return "Cette connexion renforce l’attachement, la douceur et le besoin de prendre soin de la relation.";
  }

  if (hasMercury) {
    if (harmonious) {
      return "Les idées et les mots trouvent plus facilement leur chemin, ce qui favorise dialogue, décisions et compréhension.";
    }

    if (challenging) {
      return "Les raisonnements, le ton ou la vitesse des échanges peuvent créer des malentendus et des réactions défensives.";
    }

    return "La communication devient un élément central de la relation et influence fortement la manière de résoudre les situations.";
  }

  if (hasSaturn) {
    if (harmonious) {
      return "Saturne apporte stabilité, fiabilité et capacité à construire dans le temps avec sérieux et constance.";
    }

    if (challenging) {
      return "L’un peut parfois se sentir limité, jugé ou ralenti, tandis que l’autre porte davantage de responsabilités.";
    }

    return "Cette connexion souligne les thèmes d’engagement, de durée, de maturité et de responsabilité.";
  }

  if (hasUranus) {
    if (harmonious) {
      return "Uranus apporte fraîcheur, liberté, créativité et capacité à renouveler la relation.";
    }

    if (challenging) {
      return "L’imprévisibilité ou le besoin d’espace peut créer de l’instabilité et un sentiment d’insécurité.";
    }

    return "Cette interaction rend la relation stimulante, originale et difficile à enfermer dans une routine rigide.";
  }

  if (hasNeptune) {
    if (harmonious) {
      return "Neptune soutient compassion, intuition, imagination et sentiment d’une connexion subtile.";
    }

    if (challenging) {
      return "L’idéalisation, les attentes implicites ou le manque de clarté peuvent créer confusion et déception.";
    }

    return "Cette connexion colore la relation de sensibilité, de rêve, d’intuition et parfois d’idéalisation.";
  }

  if (hasPluto) {
    if (harmonious) {
      return "Pluton favorise profondeur, transformation, guérison et capacité à traverser ensemble des périodes intenses.";
    }

    if (challenging) {
      return "Des enjeux de contrôle, de jalousie, de peur de perdre ou de pouvoir peuvent devenir très sensibles.";
    }

    return "Cette interaction intensifie fortement le lien et pousse chacun à transformer certaines zones profondes.";
  }

  if (hasSun || hasMoon || hasVenus || hasMars) {
    if (harmonious) {
      return "Cette interaction soutient naturellement l’expression personnelle, l’attachement, l’émotion ou le désir.";
    }

    if (challenging) {
      return "Cette connexion demande de mieux comprendre les réactions personnelles, affectives ou instinctives de chacun.";
    }

    return "Cette interaction joue un rôle important dans la manière dont vous vous reconnaissez et réagissez l’un à l’autre.";
  }

  return "Cet aspect influence votre dynamique relationnelle et montre comment deux fonctions planétaires cherchent à coopérer, se confronter ou s’ajuster.";
}

function sortByOrb(
  aspects: CompatibilityAspect[],
): CompatibilityAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return [...aspects].sort(
    (first, second) =>
      first.orb - second.orb,
  );
}

function getAspectsByType(
  aspects: CompatibilityAspect[],
  type: AspectType,
  limit = 5,
): CompatibilityAspect[] {
  return sortByOrb(aspects)
    .filter((aspect) => aspect.type === type)
    .slice(0, limit);
}

function getAspectCount(
  aspects: CompatibilityAspect[],
  type: AspectType,
): number {
  if (!Array.isArray(aspects)) {
    return 0;
  }

  return aspects.filter(
    (aspect) => aspect.type === type,
  ).length;
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
  rank,
}: {
  aspect: CompatibilityAspect;
  rank?: number;
}) {
  return (
    <View
      style={styles.aspectCard}
      wrap={false}
    >
      {typeof rank === "number" ? (
        <View style={styles.aspectRank}>
          <Text style={styles.aspectRankText}>
            {rank}
          </Text>
        </View>
      ) : (
        <View style={styles.aspectSymbolFrame}>
          <Text style={styles.aspectSymbol}>
            {getAspectSymbol(aspect.type)}
          </Text>
        </View>
      )}

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
        </Text>

        <Text style={styles.aspectText}>
          {getAspectInterpretation(aspect)}
        </Text>
      </View>

      <Text style={styles.aspectOrb}>
        {aspect.orb.toFixed(1)}°
        {"\n"}
        {getAspectNature(aspect.type)}
      </Text>
    </View>
  );
}

function AspectTypePage({
  definition,
  person1Name,
  person2Name,
  aspects,
}: {
  definition: AspectPageDefinition;
  person1Name: string;
  person2Name: string;
  aspects: CompatibilityAspect[];
}) {
  const selected = getAspectsByType(
    aspects,
    definition.type,
    5,
  );

  const total = getAspectCount(
    aspects,
    definition.type,
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
        symbol={getAspectSymbol(definition.type)}
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
        style={styles.summaryRow}
        wrap={false}
      >
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            {total}
          </Text>

          <Text style={styles.summaryLabel}>
            aspect{total > 1 ? "s" : ""} de ce type
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            {selected.length > 0
              ? selected[0].orb.toFixed(1)
              : "—"}
          </Text>

          <Text style={styles.summaryLabel}>
            orbe le plus précis
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            {getAspectSymbol(definition.type)}
          </Text>

          <Text style={styles.summaryLabel}>
            {getAspectNature(definition.type)}
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Vos aspects les plus importants
      </Text>

      {selected.length > 0 ? (
        selected.map((aspect) => (
          <AspectCard
            key={`${definition.type}-${aspect.person1Planet}-${aspect.person2Planet}-${aspect.orb}`}
            aspect={aspect}
          />
        ))
      ) : (
        <View
          style={styles.emptyCard}
          wrap={false}
        >
          <Text style={styles.emptyText}>
            Aucun aspect de ce type n’apparaît
            parmi les interactions principales
            calculées pour vos deux thèmes. Cela
            ne signifie pas que cette énergie est
            absente de votre relation, seulement
            qu’elle n’est pas dominante dans les
            aspects retenus.
          </Text>
        </View>
      )}

      <View
        style={styles.twoColumnRow}
        wrap={false}
      >
        <View style={styles.twoColumnCard}>
          <Text style={styles.twoColumnTitle}>
            Votre potentiel
          </Text>

          <Text style={styles.twoColumnText}>
            {definition.strength}
          </Text>
        </View>

        <View style={styles.twoColumnCard}>
          <Text style={styles.twoColumnTitle}>
            Votre point de vigilance
          </Text>

          <Text style={styles.twoColumnText}>
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
            Votre clé d’intégration
          </Text>

          <Text style={styles.adviceText}>
            {definition.advice}
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

function TopAspectsPage({
  person1Name,
  person2Name,
  aspects,
}: {
  person1Name: string;
  person2Name: string;
  aspects: CompatibilityAspect[];
}) {
  const topAspects = sortByOrb(aspects).slice(0, 10);

  return (
    <PageFrame page={35}>
      <Header
        label="Classement général"
        title="Vos 10 aspects les plus puissants"
        subtitle="Plus l’orbe est précis, plus l’interaction entre les deux planètes tend à se manifester clairement dans la dynamique relationnelle."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol="✦"
      />

      <View
        style={styles.introCard}
        wrap={false}
      >
        <View style={styles.introAccent} />

        <Text style={styles.introTitle}>
          Les connexions dominantes
        </Text>

        <Text style={styles.introText}>
          Ce classement rassemble les aspects
          les plus précis de votre synastrie.
          Ils ne sont pas nécessairement tous
          faciles ou difficiles : ils représentent
          surtout les interactions les plus
          présentes, les plus répétitives ou les
          plus significatives dans votre lien.
        </Text>
      </View>

      {topAspects.length > 0 ? (
        topAspects.map((aspect, index) => (
          <AspectCard
            key={`top-${index}-${aspect.person1Planet}-${aspect.person2Planet}-${aspect.orb}`}
            aspect={aspect}
            rank={index + 1}
          />
        ))
      ) : (
        <View
          style={styles.emptyCard}
          wrap={false}
        >
          <Text style={styles.emptyText}>
            Aucun aspect n’est disponible pour
            établir ce classement. Vérifiez que
            les deux thèmes ont été calculés avec
            les positions planétaires complètes.
          </Text>
        </View>
      )}
    </PageFrame>
  );
}

function BalancePage({
  person1Name,
  person2Name,
  aspects,
}: {
  person1Name: string;
  person2Name: string;
  aspects: CompatibilityAspect[];
}) {
  const harmonious =
    getAspectCount(aspects, "trine") +
    getAspectCount(aspects, "sextile");

  const challenging =
    getAspectCount(aspects, "square") +
    getAspectCount(aspects, "opposition") +
    getAspectCount(aspects, "quincunx");

  const conjunctions =
    getAspectCount(aspects, "conjunction");

  const total = Array.isArray(aspects)
    ? aspects.length
    : 0;

  return (
    <PageFrame page={36}>
      <Header
        label="Lecture globale"
        title="La dynamique générale de vos aspects"
        subtitle="Votre relation se construit dans l’équilibre entre facilités, tensions, intensité et capacité d’ajustement."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol="✦"
      />

      <View
        style={styles.summaryRow}
        wrap={false}
      >
        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            {harmonious}
          </Text>

          <Text style={styles.summaryLabel}>
            aspects harmonieux
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            {challenging}
          </Text>

          <Text style={styles.summaryLabel}>
            aspects d’évolution
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryValue}>
            {total}
          </Text>

          <Text style={styles.summaryLabel}>
            aspects analysés
          </Text>
        </View>
      </View>

      <View style={styles.balanceGrid}>
        <View
          style={styles.balanceCard}
          wrap={false}
        >
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceSymbol}>
              △
            </Text>

            <Text style={styles.balanceTitle}>
              Vos appuis naturels
            </Text>
          </View>

          <Text style={styles.balanceText}>
            Les trigones et sextiles montrent les
            domaines où la relation peut retrouver
            plus facilement confiance, complicité
            et coopération. Ils constituent vos
            ressources les plus stables.
          </Text>
        </View>

        <View
          style={styles.balanceCard}
          wrap={false}
        >
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceSymbol}>
              □
            </Text>

            <Text style={styles.balanceTitle}>
              Vos moteurs d’évolution
            </Text>
          </View>

          <Text style={styles.balanceText}>
            Les carrés, oppositions et quinconces
            révèlent les zones où la relation vous
            demande davantage de conscience,
            d’ajustement et de maturité.
          </Text>
        </View>

        <View
          style={styles.balanceCard}
          wrap={false}
        >
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceSymbol}>
              ☌
            </Text>

            <Text style={styles.balanceTitle}>
              Votre intensité
            </Text>
          </View>

          <Text style={styles.balanceText}>
            Vos {conjunctions} conjonction
            {conjunctions > 1 ? "s" : ""} concentrent
            fortement certaines énergies. Elles
            peuvent créer proximité, fusion et
            réactions très immédiates.
          </Text>
        </View>

        <View
          style={styles.balanceCard}
          wrap={false}
        >
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceSymbol}>
              ✦
            </Text>

            <Text style={styles.balanceTitle}>
              Votre équilibre
            </Text>
          </View>

          <Text style={styles.balanceText}>
            Une relation riche ne repose pas sur
            l’absence de tension. Elle repose sur
            la capacité à utiliser les aspects
            harmonieux pour mieux traverser les
            aspects qui demandent un effort.
          </Text>
        </View>
      </View>

      <View
        style={styles.introCard}
        wrap={false}
      >
        <View style={styles.introAccent} />

        <Text style={styles.introTitle}>
          La clé de votre synastrie
        </Text>

        <Text style={styles.introText}>
          Vos aspects racontent une relation
          dynamique, composée de facilités,
          d’intensité et d’apprentissages. Les
          aspects harmonieux montrent où vous
          pouvez vous appuyer l’un sur l’autre.
          Les aspects difficiles indiquent les
          endroits précis où le couple gagne en
          profondeur lorsqu’il choisit le dialogue,
          la responsabilité et l’adaptation.
        </Text>
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
            Votre conseil final
          </Text>

          <Text style={styles.adviceText}>
            Lorsque vous rencontrez une difficulté,
            cherchez d’abord quel aspect harmonieux
            peut vous aider : la communication, la
            tendresse, la patience, l’humour ou un
            projet commun. Vos forces naturelles
            sont les meilleurs outils pour intégrer
            vos tensions.
          </Text>
        </View>
      </View>
    </PageFrame>
  );
}

export default function CompatibilityAspects({
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

  const safeAspects = Array.isArray(aspects)
    ? aspects
    : [];

  return (
    <>
      {ASPECT_PAGES.map((definition) => (
        <AspectTypePage
          key={definition.page}
          definition={definition}
          person1Name={person1Name}
          person2Name={person2Name}
          aspects={safeAspects}
        />
      ))}

      <TopAspectsPage
        person1Name={person1Name}
        person2Name={person2Name}
        aspects={safeAspects}
      />

      <BalancePage
        person1Name={person1Name}
        person2Name={person2Name}
        aspects={safeAspects}
      />
    </>
  );
}
