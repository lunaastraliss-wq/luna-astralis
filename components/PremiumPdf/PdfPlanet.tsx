import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { PLANET_ICONS } from "./PremiumPdfAssets";
import { pdfStyles } from "./PremiumPdfStyles";

import type {
  PremiumPdfPlanetProps,
  PremiumPlanet,
} from "./PremiumPdfTypes";

import PdfBrandHeader from "./PdfBrandHeader";
import PdfPageFooter from "./PdfPageFooter";

const PLANET_FR: Record<string, string> = {
  Sun: "Soleil",
  Moon: "Lune",
  Mercury: "Mercure",
  Venus: "Vénus",
  Mars: "Mars",
  Jupiter: "Jupiter",
  Saturn: "Saturne",
  Uranus: "Uranus",
  Neptune: "Neptune",
  Pluto: "Pluton",
};

const PLANET_MEANINGS: Record<string, string> = {
  Sun: "Identité, volonté et rayonnement",
  Moon: "Émotions, sécurité et besoins intérieurs",
  Mercury: "Pensée, apprentissage et communication",
  Venus: "Amour, valeurs et sensibilité relationnelle",
  Mars: "Action, désir et affirmation personnelle",
  Jupiter: "Expansion, confiance et développement",
  Saturn: "Structure, responsabilité et maturité",
  Uranus: "Liberté, changement et originalité",
  Neptune: "Intuition, imagination et inspiration",
  Pluto: "Transformation, profondeur et puissance intérieure",
};

const PLANET_QUESTIONS: Record<string, string> = {
  Sun:
    "Qu’est-ce qui vous permet de rayonner pleinement ?",

  Moon:
    "De quoi avez-vous besoin pour vous sentir intérieurement en sécurité ?",

  Mercury:
    "Comment votre esprit comprend-il et transmet-il les idées ?",

  Venus:
    "Qu’est-ce qui nourrit votre manière d’aimer et de créer du lien ?",

  Mars:
    "Comment votre énergie se mobilise-t-elle lorsque vous passez à l’action ?",

  Jupiter:
    "Où trouvez-vous confiance, croissance et ouverture ?",

  Saturn:
    "Quelles expériences vous invitent à développer votre maturité ?",

  Uranus:
    "Comment exprimez-vous votre liberté et votre originalité ?",

  Neptune:
    "Comment votre intuition et votre imaginaire influencent-ils votre vie ?",

  Pluto:
    "Quelles transformations révèlent votre puissance intérieure ?",
};

const PLANET_GUIDANCE: Record<string, string> = {
  Sun:
    "Votre Soleil représente le centre de votre identité. Plus vous assumez ses qualités, plus vous développez une présence cohérente, une confiance intérieure solide et une direction personnelle claire.",

  Moon:
    "Votre Lune décrit votre univers émotionnel. Comprendre ses besoins vous aide à créer davantage de stabilité, de douceur et de sécurité intérieure, particulièrement dans les périodes de changement.",

  Mercury:
    "Mercure décrit votre manière de réfléchir, d’apprendre et de communiquer. Cette énergie influence votre façon d’organiser vos idées, d’interpréter les situations et de vous faire comprendre.",

  Venus:
    "Vénus révèle votre sensibilité relationnelle, vos valeurs et ce qui vous attire. Elle montre également la manière dont vous créez l’harmonie, donnez de l’affection et recevez l’amour.",

  Mars:
    "Mars représente votre force d’action, votre courage et votre manière de défendre vos désirs. Lorsqu’elle est utilisée consciemment, cette énergie devient un moteur puissant d’affirmation et de réalisation.",

  Jupiter:
    "Jupiter montre les expériences qui favorisent votre confiance, votre croissance et votre développement. Il indique comment vous pouvez élargir votre vision de la vie et reconnaître les occasions qui vous font avancer.",

  Saturn:
    "Saturne révèle les domaines où la patience, la discipline et la persévérance sont nécessaires. Ses défis peuvent sembler exigeants, mais ils deviennent souvent de véritables forces avec le temps.",

  Uranus:
    "Uranus représente votre besoin de liberté, de renouvellement et d’authenticité. Il vous encourage à sortir des modèles devenus trop étroits et à reconnaître ce qui vous rend véritablement unique.",

  Neptune:
    "Neptune révèle votre imagination, votre intuition et votre sensibilité à l’invisible. Cette énergie demande de préserver votre inspiration tout en développant suffisamment de discernement et d’ancrage.",

  Pluto:
    "Pluton représente votre capacité de transformation profonde. Il montre où vous êtes invité à abandonner d’anciens mécanismes afin de retrouver votre force, votre lucidité et votre pouvoir intérieur.",
};

const SIGN_NAMES_FR: Record<string, string> = {
  Aries: "Bélier",
  Taurus: "Taureau",
  Gemini: "Gémeaux",
  Cancer: "Cancer",
  Leo: "Lion",
  Virgo: "Vierge",
  Libra: "Balance",
  Scorpio: "Scorpion",
  Sagittarius: "Sagittaire",
  Capricorn: "Capricorne",
  Aquarius: "Verseau",
  Pisces: "Poissons",

  Bélier: "Bélier",
  Taureau: "Taureau",
  Gémeaux: "Gémeaux",
  Lion: "Lion",
  Vierge: "Vierge",
  Balance: "Balance",
  Scorpion: "Scorpion",
  Sagittaire: "Sagittaire",
  Capricorne: "Capricorne",
  Verseau: "Verseau",
  Poissons: "Poissons",
};

const SIGNS_FROM_LONGITUDE = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

const SIGN_QUALITIES: Record<string, string> = {
  Bélier:
    "directe, courageuse, spontanée et tournée vers l’initiative",

  Taureau:
    "stable, patiente, concrète et attachée à la sécurité",

  Gémeaux:
    "curieuse, mobile, communicative et ouverte aux idées",

  Cancer:
    "sensible, protectrice, intuitive et liée au monde affectif",

  Lion:
    "créative, généreuse, expressive et animée par le besoin de rayonner",

  Vierge:
    "analytique, méthodique, attentive et orientée vers l’amélioration",

  Balance:
    "relationnelle, diplomate, harmonieuse et attentive à l’équilibre",

  Scorpion:
    "intense, lucide, profonde et capable de transformation",

  Sagittaire:
    "enthousiaste, expansive, indépendante et tournée vers le sens",

  Capricorne:
    "responsable, structurée, persévérante et orientée vers la réalisation",

  Verseau:
    "originale, libre, inventive et tournée vers une vision différente",

  Poissons:
    "réceptive, imaginative, compatissante et profondément intuitive",
};

const PLANET_FUNCTIONS: Record<string, string> = {
  Sun:
    "votre identité consciente, votre volonté et votre besoin d’accomplissement",

  Moon:
    "vos émotions, vos réactions instinctives et votre besoin de sécurité",

  Mercury:
    "votre pensée, votre communication et votre manière d’apprendre",

  Venus:
    "vos valeurs, votre sensibilité affective et votre manière d’aimer",

  Mars:
    "votre désir, votre courage et votre façon de passer à l’action",

  Jupiter:
    "votre confiance, votre vision et votre capacité d’expansion",

  Saturn:
    "votre discipline, vos responsabilités et votre construction intérieure",

  Uranus:
    "votre besoin de liberté, d’innovation et de renouvellement",

  Neptune:
    "votre intuition, votre imaginaire et votre sensibilité aux dimensions subtiles",

  Pluto:
    "votre pouvoir de transformation, votre profondeur et votre capacité de régénération",
};

const PLANET_PREMIUM_INSIGHTS: Record<string, string> = {
  Sun:
    "Cette position montre comment vous pouvez développer une identité plus affirmée sans chercher à correspondre aux attentes extérieures. Votre rayonnement devient plus naturel lorsque vos choix restent fidèles à vos valeurs profondes.",

  Moon:
    "Cette position révèle la manière dont vous absorbez les ambiances et réagissez émotionnellement. Plus vous respectez vos besoins intérieurs, plus vous pouvez répondre aux situations avec calme plutôt qu’avec automatisme.",

  Mercury:
    "Cette position montre que votre intelligence ne se limite pas à ce que vous savez. Elle s’exprime surtout dans votre manière d’observer, de relier les informations et de transmettre ce que vous avez compris.",

  Venus:
    "Cette position met en lumière ce qui vous donne le sentiment d’être aimé et reconnu. Elle révèle également les qualités que vous recherchez dans vos liens et les valeurs qui orientent vos choix relationnels.",

  Mars:
    "Cette position indique comment votre énergie augmente, se bloque ou se libère. Comprendre son fonctionnement vous aide à agir avec davantage de précision, sans vous épuiser ni retenir inutilement votre force.",

  Jupiter:
    "Cette position révèle ce qui nourrit votre confiance et votre désir de progresser. Elle montre aussi les domaines dans lesquels votre enthousiasme peut devenir une ressource, à condition de conserver un sens de la mesure.",

  Saturn:
    "Cette position met en lumière un apprentissage majeur de votre vie. Ce qui semble d’abord difficile ou lent peut devenir une zone de compétence, de solidité et d’autorité naturelle avec le temps.",

  Uranus:
    "Cette position montre où vous avez besoin de respirer librement et de remettre en question certaines habitudes. Votre originalité devient constructive lorsqu’elle sert une vision claire plutôt qu’une simple réaction aux contraintes.",

  Neptune:
    "Cette position révèle une grande capacité de perception, d’imagination ou d’inspiration. Son potentiel s’exprime pleinement lorsque vous apprenez à distinguer l’intuition véritable des projections, des attentes ou des illusions.",

  Pluto:
    "Cette position indique un lieu de transformation intérieure intense. Elle vous invite à reconnaître les mécanismes de contrôle, de peur ou de résistance afin de reconstruire votre vie sur une base plus authentique.",
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 12,
  },

  premiumBadge: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingHorizontal: 13,
    marginBottom: 7,
    backgroundColor: "#0b1124",
    borderWidth: 0.7,
    borderColor: "#f4c95d",
  },

  premiumBadgeText: {
    color: "#f4c95d",
    fontSize: 6.5,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    textAlign: "center",
  },

  kicker: {
    color: "#f4c95d",
    fontSize: 8.3,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  title: {
    color: "#fff8e7",
    fontSize: 24,
    lineHeight: 1.12,
    textAlign: "center",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 7,
  },

  dividerLine: {
    width: 48,
    height: 1,
    backgroundColor: "#8f793c",
  },

  dividerIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },

  subtitle: {
    maxWidth: 410,
    color: "#c9c5bb",
    fontSize: 9,
    lineHeight: 1.35,
    textAlign: "center",
  },

  hero: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 94,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 18,
    marginBottom: 9,
    overflow: "hidden",
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  heroAccentTop: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 100,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  heroAccentBottom: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 70,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  iconCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    backgroundColor: "#0b1124",
    borderWidth: 1,
    borderColor: "#f4c95d",
  },

  icon: {
    width: 35,
    height: 35,
    objectFit: "contain",
  },

  heroContent: {
    flexGrow: 1,
    flexBasis: 0,
  },

  heroKicker: {
    color: "#9da4b7",
    fontSize: 7.8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  heroName: {
    color: "#fff8e7",
    fontSize: 20,
    marginBottom: 3,
  },

  heroSign: {
    color: "#f4c95d",
    fontSize: 13.5,
    marginBottom: 4,
  },

  heroDegree: {
    color: "#aeb5c7",
    fontSize: 8.3,
  },

  watermark: {
    position: "absolute",
    top: 6,
    right: 14,
    width: 82,
    height: 82,
    objectFit: "contain",
    opacity: 0.035,
  },

  meaningCard: {
    position: "relative",
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 18,
    marginBottom: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  meaningAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 74,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  cardKicker: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  question: {
    color: "#fff8e7",
    fontSize: 14,
    lineHeight: 1.25,
    marginBottom: 7,
  },

  interpretation: {
    color: "#e9e4d8",
    fontSize: 9.25,
    lineHeight: 1.45,
    marginBottom: 7,
  },

  interpretationLast: {
    color: "#e9e4d8",
    fontSize: 9.25,
    lineHeight: 1.45,
  },

  guidanceCard: {
    paddingTop: 11,
    paddingBottom: 11,
    paddingHorizontal: 17,
    marginBottom: 8,
    backgroundColor: "#0d152d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#39415d",
    borderRightColor: "#39415d",
    borderBottomColor: "#39415d",
  },

  guidanceTitle: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  guidanceText: {
    color: "#c9cedb",
    fontSize: 8.7,
    lineHeight: 1.4,
  },

  premiumInsightCard: {
    position: "relative",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 17,
    marginBottom: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  premiumInsightAccent: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 66,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  premiumInsightTitle: {
    color: "#f4c95d",
    fontSize: 7.8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 5,
  },

  premiumInsightText: {
    color: "#d8d4ca",
    fontSize: 8.6,
    lineHeight: 1.4,
  },

  keysRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  keyBox: {
    position: "relative",
    flexGrow: 1,
    flexBasis: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 13,
    backgroundColor: "#0d152d",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  keyBoxLeft: {
    marginRight: 8,
  },

  keyAccent: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 36,
    height: 1.5,
    backgroundColor: "#8f793c",
  },

  keyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  keyNumber: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  keyNumberText: {
    color: "#f4c95d",
    fontSize: 7.2,
  },

  keyTitle: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#fff8e7",
    fontSize: 9.8,
    lineHeight: 1.18,
  },

  keyText: {
    color: "#bfc5d5",
    fontSize: 8.1,
    lineHeight: 1.35,
  },

  note: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 13,
    marginBottom: 25,
    backgroundColor: "#141b32",
    borderWidth: 1,
    borderColor: "#8f793c",
  },

  noteAccent: {
    position: "absolute",
    bottom: -1,
    right: 0,
    width: 62,
    height: 1.5,
    backgroundColor: "#f4c95d",
  },

  noteIcon: {
    width: 16,
    height: 16,
    objectFit: "contain",
    marginRight: 10,
  },

  noteText: {
    flexGrow: 1,
    flexBasis: 0,
    color: "#bfc5d5",
    fontSize: 8,
    lineHeight: 1.32,
  },
});

function translateSign(
  value: unknown
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    return "Signe non précisé";
  }

  const cleanValue = value.trim();

  return (
    SIGN_NAMES_FR[cleanValue] ||
    cleanValue
  );
}

function getPlanetData(
  planets: PremiumPlanet[],
  planetName: string
): PremiumPlanet | null {
  const normalizedPlanetName =
    planetName.trim().toLowerCase();

  return (
    planets.find((item) => {
      if (typeof item?.name !== "string") {
        return false;
      }

      return (
        item.name.trim().toLowerCase() ===
        normalizedPlanetName
      );
    }) || null
  );
}

function getPlanetSign(
  planetData: PremiumPlanet | null
): string {
  if (!planetData) {
    return "";
  }

  if (
    typeof planetData.sign === "string" &&
    planetData.sign.trim().length > 0
  ) {
    return planetData.sign.trim();
  }

  if (
    typeof planetData.longitude === "number" &&
    Number.isFinite(planetData.longitude)
  ) {
    const normalizedLongitude =
      ((planetData.longitude % 360) + 360) % 360;

    const signIndex =
      Math.floor(normalizedLongitude / 30);

    return (
      SIGNS_FROM_LONGITUDE[signIndex] ||
      ""
    );
  }

  return "";
}

function getPlanetDegree(
  planetData: PremiumPlanet | null
): string {
  if (!planetData) {
    return "";
  }

  const directDegree =
    planetData.degree;

  if (
    typeof directDegree === "number" &&
    Number.isFinite(directDegree)
  ) {
    return `${directDegree.toFixed(1)}°`;
  }

  const longitude =
    planetData.longitude;

  if (
    typeof longitude === "number" &&
    Number.isFinite(longitude)
  ) {
    const normalizedLongitude =
      ((longitude % 360) + 360) % 360;

    const degreeInsideSign =
      normalizedLongitude % 30;

    return `${degreeInsideSign.toFixed(
      1
    )}°`;
  }

  return "";
}

function getPlanetInterpretation(
  planet: string,
  sign: string
): string {
  const planetName =
    PLANET_FR[planet] || planet;

  const planetFunction =
    PLANET_FUNCTIONS[planet] ||
    "une dimension importante de votre personnalité";

  const signQuality =
    SIGN_QUALITIES[sign] ||
    "personnelle, nuancée et propre à votre expérience";

  return `${planetName} représente ${planetFunction}. Placé en ${sign}, il exprime cette fonction d’une manière ${signQuality}. Cette combinaison colore votre comportement naturel et influence la manière dont vous réagissez, prenez vos décisions et cherchez à satisfaire les besoins associés à cette planète.`;
}

function getSecondInterpretation(
  planet: string,
  sign: string
): string {
  const planetName =
    PLANET_FR[planet] || planet;

  return `Cette position ne doit pas être interprétée isolément. ${planetName} en ${sign} dialogue avec vos autres planètes, vos maisons astrologiques et les aspects de votre thème. Selon les situations, ses qualités peuvent apparaître avec fluidité ou demander davantage de conscience, d’équilibre et de maturité.`;
}

export default function PdfPlanet({
  planets,
  planet,
}: PremiumPdfPlanetProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const planetData =
    getPlanetData(
      safePlanets,
      planet
    );

  const planetName =
    PLANET_FR[planet] || planet;

  const signName =
    getPlanetSign(
      planetData
    );

  const translatedSign =
    translateSign(
      signName
    );

  const degree =
    getPlanetDegree(
      planetData
    );

  const meaning =
    PLANET_MEANINGS[planet] ||
    "Une dimension importante de votre personnalité";

  const question =
    PLANET_QUESTIONS[planet] ||
    "Comment cette énergie s’exprime-t-elle dans votre vie ?";

  const interpretation =
    getPlanetInterpretation(
      planet,
      translatedSign
    );

  const secondInterpretation =
    getSecondInterpretation(
      planet,
      translatedSign
    );

  const guidance =
    PLANET_GUIDANCE[planet] ||
    "Cette position révèle une énergie naturelle que vous pouvez apprendre à reconnaître, à comprendre et à exprimer avec davantage de conscience.";

  const premiumInsight =
    PLANET_PREMIUM_INSIGHTS[
      planet
    ] ||
    "Cette position possède plusieurs niveaux d’expression. Plus vous en comprenez les besoins, les réflexes et les possibilités, plus vous pouvez l’utiliser de manière consciente et constructive.";

  const icon =
    PLANET_ICONS[planet];

  return (
    <Page
      size="A4"
      style={pdfStyles.page}
      wrap={false}
    >
      <PdfBrandHeader />

      <View style={styles.header}>
        <View
          style={styles.premiumBadge}
        >
          <Text
            style={
              styles.premiumBadgeText
            }
          >
            Analyse Premium
          </Text>
        </View>

        <Text style={styles.kicker}>
          Planète natale
        </Text>

        <Text style={styles.title}>
          {planetName} en{" "}
          {translatedSign}
        </Text>

        <View style={styles.divider}>
          <View
            style={styles.dividerLine}
          />

          {icon ? (
            <Image
              src={icon}
              style={
                styles.dividerIcon
              }
            />
          ) : (
            <Text
              style={{
                color: "#f4c95d",
                fontSize: 13,
                marginHorizontal: 10,
              }}
            >
              ✦
            </Text>
          )}

          <View
            style={styles.dividerLine}
          />
        </View>

        <Text style={styles.subtitle}>
          Une lecture approfondie de la manière dont cette énergie
          s’exprime dans votre personnalité, vos choix et votre
          évolution.
        </Text>
      </View>

      <View
        style={styles.hero}
        wrap={false}
      >
        <View
          style={styles.heroAccentTop}
        />

        <View
          style={
            styles.heroAccentBottom
          }
        />

        {icon ? (
          <>
            <View
              style={styles.iconCircle}
            >
              <Image
                src={icon}
                style={styles.icon}
              />
            </View>

            <Image
              src={icon}
              style={styles.watermark}
            />
          </>
        ) : null}

        <View
          style={styles.heroContent}
        >
          <Text
            style={styles.heroKicker}
          >
            Dans votre thème natal
          </Text>

          <Text
            style={styles.heroName}
          >
            {planetName}
          </Text>

          <Text
            style={styles.heroSign}
          >
            en {translatedSign}
          </Text>

          {degree ? (
            <Text
              style={styles.heroDegree}
            >
              Position astrologique :{" "}
              {degree}
            </Text>
          ) : (
            <Text
              style={styles.heroDegree}
            >
              Degré astrologique non précisé
            </Text>
          )}
        </View>
      </View>

      <View
        style={styles.meaningCard}
        wrap={false}
      >
        <View
          style={
            styles.meaningAccent
          }
        />

        <Text
          style={styles.cardKicker}
        >
          {meaning}
        </Text>

        <Text style={styles.question}>
          {question}
        </Text>

        <Text
          style={
            styles.interpretation
          }
        >
          {interpretation}
        </Text>

        <Text
          style={
            styles.interpretationLast
          }
        >
          {secondInterpretation}
        </Text>
      </View>

      <View
        style={styles.guidanceCard}
        wrap={false}
      >
        <Text
          style={styles.guidanceTitle}
        >
          Ce que cette position vous enseigne
        </Text>

        <Text
          style={styles.guidanceText}
        >
          {guidance}
        </Text>
      </View>

      <View
        style={
          styles.premiumInsightCard
        }
        wrap={false}
      >
        <View
          style={
            styles.premiumInsightAccent
          }
        />

        <Text
          style={
            styles.premiumInsightTitle
          }
        >
          Regard Premium
        </Text>

        <Text
          style={
            styles.premiumInsightText
          }
        >
          {premiumInsight}
        </Text>
      </View>

      <View
        style={styles.keysRow}
        wrap={false}
      >
        <View
          style={[
            styles.keyBox,
            styles.keyBoxLeft,
          ]}
        >
          <View
            style={styles.keyAccent}
          />

          <View
            style={styles.keyHeader}
          >
            <View
              style={styles.keyNumber}
            >
              <Text
                style={
                  styles.keyNumberText
                }
              >
                01
              </Text>
            </View>

            <Text
              style={styles.keyTitle}
            >
              L’influence du signe
            </Text>
          </View>

          <Text style={styles.keyText}>
            Placé en {translatedSign},{" "}
            {planetName} exprime ses
            fonctions à travers les
            qualités, les besoins et les
            réflexes propres à ce signe.
            Le signe colore la manière
            dont l’énergie planétaire
            devient visible dans votre
            vie.
          </Text>
        </View>

        <View style={styles.keyBox}>
          <View
            style={styles.keyAccent}
          />

          <View
            style={styles.keyHeader}
          >
            <View
              style={styles.keyNumber}
            >
              <Text
                style={
                  styles.keyNumberText
                }
              >
                02
              </Text>
            </View>

            <Text
              style={styles.keyTitle}
            >
              Une énergie à développer
            </Text>
          </View>

          <Text style={styles.keyText}>
            Cette position ne vous
            enferme pas dans une seule
            manière d’être. Elle révèle
            une tendance naturelle que
            vous pouvez exprimer avec
            plus de conscience, de
            souplesse et de maturité.
          </Text>
        </View>
      </View>

      <View
        style={styles.note}
        wrap={false}
      >
        <View
          style={styles.noteAccent}
        />

        {icon ? (
          <Image
            src={icon}
            style={styles.noteIcon}
          />
        ) : null}

        <Text style={styles.noteText}>
          Cette position prend tout son sens lorsqu’elle est mise en
          relation avec vos autres planètes, la maison qu’elle occupe
          et les aspects qu’elle forme. Ces dimensions seront
          approfondies dans les prochaines sections du rapport
          Premium.
        </Text>
      </View>

      <PdfPageFooter />
    </Page>
  );
}
