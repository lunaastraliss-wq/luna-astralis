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
  alignItems: "center",
  justifyContent: "center",
},

nameSeparatorFrame: {
  width: 38,
  height: 28,

  borderRadius: 14,

  borderWidth: 0.6,
  borderColor: GOLD,

  alignItems: "center",
  justifyContent: "center",
},

nameSeparatorLogo: {
  width: 32,
  height: 20,
  objectFit: "contain",
},
  
  scoreHero: {
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 14,
    marginBottom: 11,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
  },
  scoreValue: {
    fontSize: 34,
    color: BRIGHT_GOLD,
    marginBottom: 3,
  },
  scoreLabel: {
    fontSize: 6.4,
    letterSpacing: 1.4,
    color: MUTED_CREAM,
    textTransform: "uppercase",
  },
  scoreText: {
    width: "88%",
    marginTop: 6,
    fontSize: 6.7,
    lineHeight: 1.4,
    color: SOFT_TEXT,
    textAlign: "center",
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  card: {
    width: "48.4%",
    minHeight: 92,
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 11,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.55,
    borderColor: DARK_GOLD,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  cardSymbol: {
    width: 25,
    fontSize: 11,
    color: BRIGHT_GOLD,
  },
  cardTitle: {
    flex: 1,
    fontSize: 7.4,
    color: CREAM,
  },
  cardText: {
    fontSize: 6.05,
    lineHeight: 1.38,
    color: SOFT_TEXT,
    textAlign: "justify",
  },
  rankingCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },
  rankCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 0.6,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  rankText: {
    fontSize: 7,
    color: BRIGHT_GOLD,
  },
  rankingContent: {
    flex: 1,
  },
  rankingTitle: {
    fontSize: 7.2,
    color: CREAM,
    marginBottom: 2,
  },
  rankingText: {
    fontSize: 5.95,
    lineHeight: 1.34,
    color: SOFT_TEXT,
  },
  sectionTitle: {
    fontSize: 6.2,
    letterSpacing: 1.6,
    color: "#d5c49a",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 7,
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
  adviceList: {
    marginBottom: 9,
  },
  adviceItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.5,
    borderColor: DARK_GOLD,
  },
  adviceBullet: {
    width: 24,
    fontSize: 10,
    color: BRIGHT_GOLD,
    marginTop: 1,
  },
  adviceContent: {
    flex: 1,
  },
  adviceTitle: {
    fontSize: 7.2,
    color: CREAM,
    marginBottom: 2,
  },
  adviceText: {
    fontSize: 6,
    lineHeight: 1.35,
    color: SOFT_TEXT,
  },
  quoteCard: {
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginTop: 5,
    backgroundColor: NAVY_CARD_LIGHT,
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: SOFT_GOLD,
  },
  quoteText: {
    fontSize: 9.2,
    lineHeight: 1.45,
    color: CREAM,
    textAlign: "center",
  },
  quoteAuthor: {
    marginTop: 7,
    fontSize: 6.1,
    letterSpacing: 1.1,
    color: BRIGHT_GOLD,
    textAlign: "center",
    textTransform: "uppercase",
  },
  finalPageContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  finalLogo: {
    width: 168,
    height: 62,
    objectFit: "contain",
    marginBottom: 22,
  },
  finalLabel: {
    fontSize: 6.6,
    letterSpacing: 2.5,
    color: "#ccb986",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  finalTitle: {
    fontSize: 27,
    lineHeight: 1.18,
    color: CREAM,
    textAlign: "center",
    marginBottom: 13,
  },
  finalText: {
    width: "88%",
    fontSize: 8,
    lineHeight: 1.55,
    color: MUTED_CREAM,
    textAlign: "center",
    marginBottom: 16,
  },
  finalDivider: {
    width: 95,
    height: 1,
    backgroundColor: GOLD,
    marginBottom: 17,
  },
  productsCard: {
    width: "92%",
    paddingVertical: 13,
    paddingHorizontal: 18,
    backgroundColor: NAVY_CARD,
    borderWidth: 0.7,
    borderColor: SOFT_GOLD,
    marginBottom: 18,
  },
  productsTitle: {
    fontSize: 8.5,
    color: CREAM,
    textAlign: "center",
    marginBottom: 8,
  },
  productsText: {
    fontSize: 6.6,
    lineHeight: 1.55,
    color: SOFT_TEXT,
    textAlign: "center",
  },
  website: {
    fontSize: 8,
    letterSpacing: 1.1,
    color: BRIGHT_GOLD,
    textAlign: "center",
    marginTop: 5,
  },
  thankYou: {
    fontSize: 7.3,
    color: MUTED_CREAM,
    textAlign: "center",
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

type AspectNature =
  | "harmonious"
  | "challenging"
  | "intense";

interface RankedAspect {
  aspect: CompatibilityAspect;
  nature: AspectNature;
  score: number;
}

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

function getAspectNature(
  type: CompatibilityAspect["type"],
): AspectNature {
  if (
    type === "trine" ||
    type === "sextile"
  ) {
    return "harmonious";
  }

  if (
    type === "square" ||
    type === "opposition" ||
    type === "quincunx"
  ) {
    return "challenging";
  }

  return "intense";
}

function getAspectWeight(
  aspect: CompatibilityAspect,
): number {
  const base =
    aspect.type === "conjunction"
      ? 10
      : aspect.type === "opposition"
        ? 9
        : aspect.type === "square"
          ? 8
          : aspect.type === "trine"
            ? 7
            : aspect.type === "sextile"
              ? 6
              : 5;

  return Math.max(1, base - aspect.orb / 2);
}

function rankAspects(
  aspects: CompatibilityAspect[],
): RankedAspect[] {
  if (!Array.isArray(aspects)) {
    return [];
  }

  return aspects
    .map((aspect) => ({
      aspect,
      nature: getAspectNature(aspect.type),
      score: getAspectWeight(aspect),
    }))
    .sort(
      (first, second) =>
        second.score - first.score,
    );
}

function getScoreFromAspects(
  aspects: CompatibilityAspect[],
): number {
  if (!Array.isArray(aspects) || aspects.length === 0) {
    return 72;
  }

  let positive = 0;
  let challenging = 0;
  let intensity = 0;

  for (const aspect of aspects) {
    const precision = Math.max(
      0.2,
      1 - aspect.orb / 10,
    );

    if (
      aspect.type === "trine" ||
      aspect.type === "sextile"
    ) {
      positive += 9 * precision;
    } else if (
      aspect.type === "square" ||
      aspect.type === "opposition" ||
      aspect.type === "quincunx"
    ) {
      challenging += 6 * precision;
    } else {
      intensity += 5 * precision;
    }
  }

  const raw =
    67 +
    positive * 0.6 +
    intensity * 0.25 -
    challenging * 0.25;

  return Math.max(
    52,
    Math.min(96, Math.round(raw)),
  );
}

function getScoreLabel(score: number): string {
  if (score >= 88) {
    return "Compatibilité exceptionnelle";
  }

  if (score >= 78) {
    return "Compatibilité très favorable";
  }

  if (score >= 68) {
    return "Compatibilité solide et évolutive";
  }

  if (score >= 58) {
    return "Compatibilité exigeante mais prometteuse";
  }

  return "Compatibilité complexe et transformatrice";
}

function getScoreInterpretation(
  score: number,
): string {
  if (score >= 88) {
    return "Votre lien réunit de nombreuses facilités naturelles, une forte capacité de compréhension et un potentiel remarquable de croissance commune.";
  }

  if (score >= 78) {
    return "Votre relation possède des bases favorables et plusieurs ressources naturelles pour traverser les périodes plus exigeantes.";
  }

  if (score >= 68) {
    return "Votre compatibilité repose sur un équilibre entre affinités réelles et apprentissages importants qui peuvent renforcer le couple.";
  }

  if (score >= 58) {
    return "Votre relation demande de la conscience, de la communication et des ajustements, mais elle peut devenir très constructive.";
  }

  return "Votre lien est intense et profondément évolutif. Il demande une grande maturité émotionnelle pour exprimer tout son potentiel.";
}

function getAspectTitle(
  aspect: CompatibilityAspect,
): string {
  return `${translateCompatibilityPlanet(
    aspect.person1Planet,
  )} ${translateCompatibilityAspect(
    aspect.type,
  )} ${translateCompatibilityPlanet(
    aspect.person2Planet,
  )}`;
}

function getStrengthText(
  aspect: CompatibilityAspect,
): string {
  const first = normalizeValue(
    aspect.person1Planet,
  );
  const second = normalizeValue(
    aspect.person2Planet,
  );
  const planets = [first, second];

  if (
    planets.includes("venus") &&
    planets.includes("mars")
  ) {
    return "Cette connexion soutient l’attirance, l’alchimie et la capacité à maintenir une énergie vivante dans la relation.";
  }

  if (
    planets.some((planet) =>
      ["moon", "lune"].includes(planet),
    ) &&
    planets.includes("venus")
  ) {
    return "La tendresse et le besoin affectif peuvent se rejoindre avec douceur, favorisant sécurité et attachement.";
  }

  if (
    planets.some((planet) =>
      ["mercury", "mercure"].includes(planet),
    )
  ) {
    return "Le dialogue, les idées et la capacité à comprendre l’autre constituent une ressource importante du couple.";
  }

  if (
    planets.some((planet) =>
      ["sun", "soleil"].includes(planet),
    ) &&
    planets.some((planet) =>
      ["moon", "lune"].includes(planet),
    )
  ) {
    return "L’identité de l’un et la sensibilité de l’autre peuvent se reconnaître et se soutenir de manière naturelle.";
  }

  if (
    planets.some((planet) =>
      ["jupiter"].includes(planet),
    )
  ) {
    return "Cette interaction favorise confiance, encouragement, expansion et vision commune.";
  }

  return "Cet aspect apporte une ressource naturelle que le couple peut utiliser pour renforcer sa stabilité et sa complicité.";
}

function getChallengeText(
  aspect: CompatibilityAspect,
): string {
  const first = normalizeValue(
    aspect.person1Planet,
  );
  const second = normalizeValue(
    aspect.person2Planet,
  );
  const planets = [first, second];

  if (
    planets.some((planet) =>
      ["saturn", "saturne"].includes(planet),
    )
  ) {
    return "Cette interaction peut créer un sentiment de pression, de distance, de jugement ou de responsabilité trop lourde.";
  }

  if (
    planets.some((planet) =>
      ["pluto", "pluton"].includes(planet),
    )
  ) {
    return "Cette connexion peut intensifier les peurs, les enjeux de contrôle, la jalousie ou le besoin de transformation.";
  }

  if (
    planets.includes("uranus")
  ) {
    return "Le besoin de liberté, l’imprévisibilité ou les changements soudains peuvent fragiliser le sentiment de sécurité.";
  }

  if (
    planets.some((planet) =>
      ["mercury", "mercure"].includes(planet),
    )
  ) {
    return "Le ton, les mots ou la manière de raisonner peuvent provoquer des malentendus et des réactions défensives.";
  }

  if (
    planets.includes("mars")
  ) {
    return "Les réactions rapides, l’impatience ou les différences de rythme peuvent transformer une frustration en confrontation.";
  }

  return "Cette tension demande davantage de recul, d’écoute et de souplesse afin d’éviter les réactions répétitives.";
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
  symbol = "✦",
}: {
  person1Name: string;
  person2Name: string;
  symbol?: string;
}) {
  return (
    <View style={styles.namesCard} wrap={false}>
      <Text style={styles.name}>
        {person1Name}
      </Text>

     <View style={styles.nameSeparator}>
  <View style={styles.nameSeparatorFrame}>
    <Image
      src={LOGO_URL}
      style={styles.nameSeparatorLogo}
    />
  </View>
</View>

      <Text style={styles.name}>
        {person2Name}
      </Text>
    </View>
  );
}

function SummaryCard({
  symbol,
  title,
  text,
}: {
  symbol: string;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.card} wrap={false}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardSymbol}>
          {symbol}
        </Text>

        <Text style={styles.cardTitle}>
          {title}
        </Text>
      </View>

      <Text style={styles.cardText}>
        {text}
      </Text>
    </View>
  );
}

function StrengthsPage({
  person1Name,
  person2Name,
  aspects,
}: {
  person1Name: string;
  person2Name: string;
  aspects: CompatibilityAspect[];
}) {
  const strengths = rankAspects(aspects)
    .filter(
      (item) =>
        item.nature === "harmonious" ||
        item.nature === "intense",
    )
    .slice(0, 5);

  return (
    <PageFrame page={45}>
      <Header
        label="Vos ressources"
        title="Les grandes forces de votre relation"
        subtitle="Ces énergies constituent les appuis naturels sur lesquels votre couple peut compter pour grandir, se rapprocher et traverser les périodes plus exigeantes."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol="♡"
      />

      <View
        style={styles.introCard}
        wrap={false}
      >
        <View style={styles.introAccent} />

        <Text style={styles.introTitle}>
          Ce qui vous unit naturellement
        </Text>

        <Text style={styles.introText}>
          Vos forces ne se limitent pas aux
          aspects faciles. Certaines connexions
          intenses deviennent aussi de puissantes
          ressources lorsqu’elles sont vécues avec
          maturité, respect et conscience.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Vos cinq appuis principaux
      </Text>

      {strengths.length > 0 ? (
        strengths.map((item, index) => (
          <View
            key={`strength-${index}`}
            style={styles.rankingCard}
            wrap={false}
          >
            <View style={styles.rankCircle}>
              <Text style={styles.rankText}>
                {index + 1}
              </Text>
            </View>

            <View style={styles.rankingContent}>
              <Text style={styles.rankingTitle}>
                {getAspectTitle(item.aspect)}
                {" • "}
                {item.aspect.orb.toFixed(1)}°
              </Text>

              <Text style={styles.rankingText}>
                {getStrengthText(item.aspect)}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.introCard}>
          <Text style={styles.introText}>
            Les données disponibles ne permettent
            pas d’établir un classement précis.
            Votre rapport demeure néanmoins utile
            pour comprendre les grandes dynamiques
            relationnelles.
          </Text>
        </View>
      )}

      <View style={styles.cardGrid}>
        <SummaryCard
          symbol="△"
          title="Complicité"
          text="Les aspects harmonieux montrent les domaines où vous pouvez vous comprendre, collaborer et retrouver plus rapidement votre équilibre."
        />

        <SummaryCard
          symbol="☌"
          title="Intensité"
          text="Les conjonctions concentrent l’énergie et donnent à certains thèmes une importance majeure dans votre histoire commune."
        />

        <SummaryCard
          symbol="✦"
          title="Résilience"
          text="Vos ressources naturelles deviennent particulièrement précieuses lorsque vous traversez une période de doute, de fatigue ou de changement."
        />

        <SummaryCard
          symbol="∞"
          title="Croissance"
          text="Votre relation possède un potentiel d’évolution lorsqu’elle transforme ses différences en compréhension plutôt qu’en opposition."
        />
      </View>
    </PageFrame>
  );
}

function ChallengesPage({
  person1Name,
  person2Name,
  aspects,
}: {
  person1Name: string;
  person2Name: string;
  aspects: CompatibilityAspect[];
}) {
  const challenges = rankAspects(aspects)
    .filter(
      (item) =>
        item.nature === "challenging",
    )
    .slice(0, 5);

  return (
    <PageFrame page={46}>
      <Header
        label="Vos apprentissages"
        title="Les défis à transformer"
        subtitle="Les tensions ne prédisent pas un échec. Elles montrent les endroits où la relation demande plus de conscience, de dialogue et de responsabilité."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol="□"
      />

      <View
        style={styles.introCard}
        wrap={false}
      >
        <View style={styles.introAccent} />

        <Text style={styles.introTitle}>
          Comprendre avant de corriger
        </Text>

        <Text style={styles.introText}>
          Un aspect difficile devient réellement
          problématique lorsqu’il reste inconscient.
          Dès que vous identifiez le besoin, la peur
          ou la différence derrière la réaction,
          vous récupérez une marge de choix.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Vos principaux points de vigilance
      </Text>

      {challenges.length > 0 ? (
        challenges.map((item, index) => (
          <View
            key={`challenge-${index}`}
            style={styles.rankingCard}
            wrap={false}
          >
            <View style={styles.rankCircle}>
              <Text style={styles.rankText}>
                {index + 1}
              </Text>
            </View>

            <View style={styles.rankingContent}>
              <Text style={styles.rankingTitle}>
                {getAspectTitle(item.aspect)}
                {" • "}
                {item.aspect.orb.toFixed(1)}°
              </Text>

              <Text style={styles.rankingText}>
                {getChallengeText(item.aspect)}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.introCard}>
          <Text style={styles.introText}>
            Aucun aspect difficile majeur ne se
            distingue dans les données analysées.
            Cela ne supprime pas les désaccords,
            mais indique une dynamique globale plus
            fluide.
          </Text>
        </View>
      )}

      <View style={styles.cardGrid}>
        <SummaryCard
          symbol="1"
          title="Éviter la répétition"
          text="Lorsque le même conflit revient, cherchez le besoin non exprimé plutôt que de reprendre exactement la même discussion."
        />

        <SummaryCard
          symbol="2"
          title="Réduire la projection"
          text="Demandez-vous ce qui appartient réellement à l’autre et ce qui réveille une peur, une blessure ou une attente personnelle."
        />

        <SummaryCard
          symbol="3"
          title="Choisir le bon moment"
          text="Une discussion importante devient plus constructive lorsque les deux personnes sont disponibles, calmes et capables d’écouter."
        />

        <SummaryCard
          symbol="4"
          title="Réparer rapidement"
          text="La solidité d’un couple dépend moins de l’absence de conflit que de sa capacité à reconnaître, réparer et recommencer autrement."
        />
      </View>
    </PageFrame>
  );
}

function PotentialPage({
  person1Name,
  person2Name,
  aspects,
}: {
  person1Name: string;
  person2Name: string;
  aspects: CompatibilityAspect[];
}) {
  const score = getScoreFromAspects(aspects);

  const harmonious = aspects.filter(
    (aspect) =>
      aspect.type === "trine" ||
      aspect.type === "sextile",
  ).length;

  const intense = aspects.filter(
    (aspect) =>
      aspect.type === "conjunction",
  ).length;

  const challenging = aspects.filter(
    (aspect) =>
      aspect.type === "square" ||
      aspect.type === "opposition" ||
      aspect.type === "quincunx",
  ).length;

  return (
    <PageFrame page={47}>
      <Header
        label="Lecture globale"
        title="Votre potentiel amoureux"
        subtitle="Ce score représente une synthèse symbolique de vos aspects. Il ne décide pas de l’avenir du couple, mais décrit la qualité des ressources et des apprentissages présents."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol="♡"
      />

      <View style={styles.scoreHero} wrap={false}>
        <Text style={styles.scoreValue}>
          {score} %
        </Text>

        <Text style={styles.scoreLabel}>
          {getScoreLabel(score)}
        </Text>

        <Text style={styles.scoreText}>
          {getScoreInterpretation(score)}
        </Text>
      </View>

      <View style={styles.cardGrid}>
        <SummaryCard
          symbol="☽"
          title="Compatibilité émotionnelle"
          text="Votre potentiel affectif dépend de votre capacité à reconnaître les besoins de sécurité, de proximité, d’écoute et de réconfort de chacun."
        />

        <SummaryCard
          symbol="☿"
          title="Compatibilité intellectuelle"
          text="La qualité de votre dialogue devient une force lorsque vous distinguez les faits, les émotions, les attentes et les interprétations."
        />

        <SummaryCard
          symbol="♀♂"
          title="Compatibilité intime"
          text="L’intimité se nourrit de confiance, de désir, de tendresse et de la liberté de parler clairement de ses besoins et de ses limites."
        />

        <SummaryCard
          symbol="⌂"
          title="Compatibilité de vie"
          text="Le quotidien devient plus harmonieux lorsque les responsabilités, le temps, l’argent et les projets sont discutés avec transparence."
        />

        <SummaryCard
          symbol="∞"
          title="Potentiel à long terme"
          text="Votre durée repose sur la capacité à préserver le lien tout en permettant à chacun de continuer à évoluer personnellement."
        />

        <SummaryCard
          symbol="✦"
          title="Dynamique générale"
          text={`${harmonious} aspects harmonieux, ${intense} conjonction${intense > 1 ? "s" : ""} et ${challenging} aspects d’évolution composent votre équilibre relationnel.`}
        />
      </View>

      <View style={styles.quoteCard} wrap={false}>
        <Text style={styles.quoteText}>
          « Une grande compatibilité ne signifie
          pas tout ressentir de la même manière,
          mais apprendre à faire de deux mondes
          différents un espace commun. »
        </Text>

        <Text style={styles.quoteAuthor}>
          Luna Astralis
        </Text>
      </View>
    </PageFrame>
  );
}

function AdvicePage({
  person1Name,
  person2Name,
}: {
  person1Name: string;
  person2Name: string;
}) {
  const advice = [
    {
      symbol: "☿",
      title: "Communication",
      text: "Parlez du besoin derrière la réaction. Une phrase précise et calme est souvent plus utile qu’une longue accumulation de reproches.",
    },
    {
      symbol: "☽",
      title: "Émotions",
      text: "Ne minimisez pas un ressenti simplement parce que vous ne l’auriez pas vécu de la même façon. Accueillir n’oblige pas à être d’accord.",
    },
    {
      symbol: "□",
      title: "Gestion des conflits",
      text: "Faites une pause lorsque le dialogue devient défensif, puis revenez au sujet avec un objectif concret : comprendre, décider ou réparer.",
    },
    {
      symbol: "⌂",
      title: "Vie quotidienne",
      text: "Clarifiez régulièrement les responsabilités, les horaires et la charge mentale afin que les frustrations pratiques ne contaminent pas le lien affectif.",
    },
    {
      symbol: "♀♂",
      title: "Intimité",
      text: "Préservez un espace où chacun peut exprimer ses désirs, ses limites et son rythme sans honte, pression ni interprétation automatique.",
    },
    {
      symbol: "↗",
      title: "Projets communs",
      text: "Choisissez au moins un projet qui appartient réellement au couple et définissez des étapes simples pour le rendre vivant.",
    },
  ];

  return (
    <PageFrame page={48}>
      <Header
        label="Mise en pratique"
        title="Vos conseils personnalisés"
        subtitle="La compréhension astrologique devient réellement utile lorsqu’elle se transforme en gestes simples, réguliers et observables."
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
          Transformer la connaissance en action
        </Text>

        <Text style={styles.introText}>
          Vous n’avez pas besoin de tout changer
          immédiatement. Choisissez une seule
          habitude relationnelle, appliquez-la
          pendant quelques semaines, puis observez
          ce qu’elle transforme dans votre manière
          de vous comprendre.
        </Text>
      </View>

      <View style={styles.adviceList}>
        {advice.map((item) => (
          <View
            key={item.title}
            style={styles.adviceItem}
            wrap={false}
          >
            <Text style={styles.adviceBullet}>
              {item.symbol}
            </Text>

            <View style={styles.adviceContent}>
              <Text style={styles.adviceTitle}>
                {item.title}
              </Text>

              <Text style={styles.adviceText}>
                {item.text}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.quoteCard} wrap={false}>
        <Text style={styles.quoteText}>
          Votre meilleure stratégie est de protéger
          le lien sans vous abandonner vous-même :
          rester deux personnes entières qui
          choisissent de construire ensemble.
        </Text>
      </View>
    </PageFrame>
  );
}

function GlobalSummaryPage({
  person1Name,
  person2Name,
  aspects,
}: {
  person1Name: string;
  person2Name: string;
  aspects: CompatibilityAspect[];
}) {
  const score = getScoreFromAspects(aspects);
  const ranked = rankAspects(aspects);
  const strongest = ranked[0]?.aspect;

  return (
    <PageFrame page={49}>
      <Header
        label="Vision d’ensemble"
        title="La synthèse complète de votre relation"
        subtitle="Votre synastrie décrit une dynamique unique : un mélange de reconnaissance, d’attirance, de différences, de ressources et d’apprentissages."
      />

      <NamesCard
        person1Name={person1Name}
        person2Name={person2Name}
        symbol="∞"
      />

      <View
        style={styles.introCard}
        wrap={false}
      >
        <View style={styles.introAccent} />

        <Text style={styles.introTitle}>
          Le portrait global
        </Text>

        <Text style={styles.introText}>
          {`Avec un potentiel estimé à ${score} %, votre relation possède des qualités suffisamment fortes pour soutenir une construction réelle, à condition de ne pas laisser les automatismes décider à votre place. Les facilités montrent où vous pouvez vous retrouver. Les tensions indiquent où vous devez devenir plus conscients, plus précis et plus responsables.`}
        </Text>
      </View>

      <View style={styles.cardGrid}>
        <SummaryCard
          symbol="♡"
          title="Ce qui vous rapproche"
          text="La reconnaissance, la curiosité, l’attirance ou le sentiment de pouvoir être compris créent une base affective importante."
        />

        <SummaryCard
          symbol="□"
          title="Ce qui vous met à l’épreuve"
          text="Les différences de rythme, de communication ou de besoin de sécurité peuvent devenir sensibles lorsqu’elles restent implicites."
        />

        <SummaryCard
          symbol="✦"
          title="Ce qui vous fait grandir"
          text="Votre relation vous invite à mieux connaître vos réactions, à exprimer vos besoins et à développer une forme plus mature d’engagement."
        />

        <SummaryCard
          symbol="∞"
          title="Ce qui peut faire durer"
          text="La durée se construit par les réparations, les projets, la souplesse, le respect de l’individualité et les décisions renouvelées."
        />
      </View>

      {strongest && (
        <View
          style={styles.introCard}
          wrap={false}
        >
          <View style={styles.introAccent} />

          <Text style={styles.introTitle}>
            Votre signature relationnelle
          </Text>

          <Text style={styles.introText}>
            {`L’aspect le plus marquant de votre synastrie est ${getAspectTitle(
              strongest,
            )}, avec un orbe de ${strongest.orb.toFixed(
              1,
            )}°. Cette interaction colore fortement votre manière de vous reconnaître, de réagir et de construire votre lien.`}
          </Text>
        </View>
      )}

      <View style={styles.quoteCard} wrap={false}>
        <Text style={styles.quoteText}>
          Votre thème ne vous enferme pas dans une
          destinée. Il vous montre les forces à
          utiliser, les réactions à comprendre et
          les choix qui peuvent rendre votre
          relation plus consciente.
        </Text>

        <Text style={styles.quoteAuthor}>
          Synthèse Luna Astralis
        </Text>
      </View>
    </PageFrame>
  );
}

function ConclusionPage({
  person1Name,
  person2Name,
}: {
  person1Name: string;
  person2Name: string;
}) {
  return (
    <PageFrame page={50}>
      <View style={styles.finalPageContent}>
        <Image
          src={LOGO_URL}
          style={styles.finalLogo}
        />

        <Text style={styles.finalLabel}>
          Fin de votre rapport
        </Text>

        <Text style={styles.finalTitle}>
          {person1Name} & {person2Name}
        </Text>

        <Text style={styles.finalText}>
          Votre compatibilité n’est pas une réponse
          figée, mais une carte de votre dynamique.
          Elle montre comment vos forces peuvent
          soutenir votre amour, comment vos
          différences peuvent devenir des chemins
          de compréhension et comment votre lien
          peut évoluer lorsque chacun choisit d’y
          participer pleinement.
        </Text>

        <View style={styles.finalDivider} />

        <View style={styles.quoteCard} wrap={false}>
          <Text style={styles.quoteText}>
            « Les étoiles révèlent une rencontre.
            Le temps, la conscience et les choix
            écrivent l’histoire. »
          </Text>

          <Text style={styles.quoteAuthor}>
            Luna Astralis
          </Text>
        </View>

        <View
          style={styles.productsCard}
          wrap={false}
        >
          <Text style={styles.productsTitle}>
            Poursuivez votre exploration astrologique
          </Text>

          <Text style={styles.productsText}>
            Carte du ciel Premium
            {"\n"}
            Horoscope Premium
            {"\n"}
            Compatibilité approfondie
            {"\n"}
            Analyses astrologiques personnalisées
          </Text>

          <Text style={styles.website}>
            luna-astralis.app
          </Text>
        </View>

        <Text style={styles.thankYou}>
          Merci de votre confiance.
        </Text>
      </View>
    </PageFrame>
  );
}

export default function CompatibilitySummary({
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
      <StrengthsPage
        person1Name={person1Name}
        person2Name={person2Name}
        aspects={safeAspects}
      />

      <ChallengesPage
        person1Name={person1Name}
        person2Name={person2Name}
        aspects={safeAspects}
      />

      <PotentialPage
        person1Name={person1Name}
        person2Name={person2Name}
        aspects={safeAspects}
      />

      <AdvicePage
        person1Name={person1Name}
        person2Name={person2Name}
      />

      <GlobalSummaryPage
        person1Name={person1Name}
        person2Name={person2Name}
        aspects={safeAspects}
      />

      <ConclusionPage
        person1Name={person1Name}
        person2Name={person2Name}
      />
    </>
  );
}
