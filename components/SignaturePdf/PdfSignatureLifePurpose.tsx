import {
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type {
  SignatureAngles,
  SignaturePlanet,
} from "./SignaturePdfTypes";

import {
  assetUrl,
} from "./SignaturePdfAssets";

import {
  pdfStyles,
} from "../PremiumPdf/PremiumPdfStyles";

import PdfBrandHeader from "../PremiumPdf/PdfBrandHeader";
import PdfSignaturePageFooter from "./PdfSignaturePageFooter";

/*
|--------------------------------------------------------------------------
| Couleurs
|--------------------------------------------------------------------------
*/

const GOLD = "#f4c95d";
const CREAM = "#fff8e7";
const MUTED = "#d8cfbc";
const CARD_BACKGROUND = "#081426";
const CARD_BACKGROUND_LIGHT = "#0b1a30";
const BORDER = "#30415e";

const LIFE_PURPOSE_ICON = assetUrl(
  "/astrology/life-purpose.png"
);

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureLifePurposeProps = {
  firstName?: string;
  planets: SignaturePlanet[];
  angles: SignatureAngles;
};

type PlanetData = {
  name: string;
  sign: string;
  house?: number;
  degree?: number;
};

type PurposeProfile = {
  title: string;
  introduction: string;
  naturalDirection: string;
  fulfillment: string;
  contribution: string;
  challenge: string;
  key: string;
};

/*
|--------------------------------------------------------------------------
| Noms des signes
|--------------------------------------------------------------------------
*/

const SIGN_NAMES: Record<string, string> = {
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

/*
|--------------------------------------------------------------------------
| Profil de mission selon le Soleil
|--------------------------------------------------------------------------
*/

const PURPOSE_BY_SIGN: Record<
  string,
  PurposeProfile
> = {
  Aries: {
    title:
      "Ouvrir la voie et développer votre pouvoir d’initiative",
    introduction:
      "Votre direction profonde vous invite à avancer avec courage, à créer votre propre mouvement et à ne pas attendre que les circonstances décident à votre place. Votre présence devient particulièrement significative lorsque vous osez commencer, proposer et défendre ce qui vous semble essentiel.",
    naturalDirection:
      "Vous êtes naturellement appelé à expérimenter, à agir et à transformer une impulsion intérieure en décision concrète. Votre chemin ne consiste pas seulement à aller vite, mais à apprendre à reconnaître les combats qui méritent réellement votre énergie.",
    fulfillment:
      "Vous vous sentez pleinement vivant lorsque vous pouvez prendre des initiatives, relever un défi ou sentir qu’une action dépend directement de votre volonté.",
    contribution:
      "Votre contribution consiste à réveiller le courage, l’autonomie et l’envie d’avancer chez les personnes qui vous entourent.",
    challenge:
      "Votre défi est d’unir la spontanéité à la patience afin que votre force ne s’épuise pas dans des réactions momentanées.",
    key:
      "Choisir consciemment votre direction avant d’engager toute votre énergie.",
  },

  Taurus: {
    title:
      "Construire une vie stable, féconde et profondément alignée",
    introduction:
      "Votre direction profonde vous invite à créer quelque chose de durable. Vous êtes appelé à donner une forme concrète à vos valeurs, à protéger ce qui compte réellement et à développer une relation plus consciente avec la sécurité, la matière et le temps.",
    naturalDirection:
      "Votre progression passe par la capacité à bâtir lentement sans perdre de vue votre évolution. Votre constance constitue une grande force lorsque vous l’utilisez pour faire grandir un projet plutôt que pour maintenir une situation devenue trop étroite.",
    fulfillment:
      "Vous vous accomplissez lorsque vos efforts produisent un résultat tangible, utile et durable.",
    contribution:
      "Votre contribution consiste à apporter stabilité, réalisme, fiabilité et profondeur dans un monde souvent pressé.",
    challenge:
      "Votre défi est de différencier la persévérance de l’attachement et d’accepter que certaines transformations protègent précisément ce que vous voulez construire.",
    key:
      "Faire évoluer vos fondations sans renier les valeurs essentielles qui vous définissent.",
  },

  Gemini: {
    title:
      "Relier les idées, transmettre et ouvrir de nouvelles perspectives",
    introduction:
      "Votre direction profonde vous invite à comprendre, à communiquer et à établir des ponts entre des personnes, des idées ou des univers différents. Votre curiosité devient une véritable mission lorsqu’elle permet aux autres de mieux saisir ce qui semblait complexe ou inaccessible.",
    naturalDirection:
      "Vous êtes appelé à apprendre continuellement, mais aussi à transformer vos connaissances en messages clairs. Votre mobilité mentale vous permet de vous adapter, de traduire et de faire circuler l’information.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez échanger, écrire, enseigner, expliquer ou découvrir de nouvelles manières de penser.",
    contribution:
      "Votre contribution consiste à rendre les idées vivantes, accessibles et capables de créer du mouvement.",
    challenge:
      "Votre défi est de dépasser la dispersion afin de donner de la profondeur et une véritable continuité à vos multiples intérêts.",
    key:
      "Choisir les idées que vous souhaitez réellement approfondir et transmettre.",
  },

  Cancer: {
    title:
      "Créer un espace de sécurité, de mémoire et d’appartenance",
    introduction:
      "Votre direction profonde vous invite à comprendre le monde émotionnel, à protéger ce qui est vulnérable et à créer des liens qui donnent un véritable sentiment d’appartenance. Votre sensibilité devient une force lorsque vous lui donnez une forme consciente.",
    naturalDirection:
      "Vous êtes appelé à reconnaître vos besoins émotionnels plutôt qu’à les dissimuler derrière la protection des autres. Votre chemin consiste à transformer votre capacité de ressentir en présence, en intuition et en soutien juste.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez prendre soin, transmettre une mémoire, créer un foyer ou offrir un espace où les autres se sentent compris.",
    contribution:
      "Votre contribution consiste à rappeler l’importance des racines, des émotions et de la sécurité intérieure.",
    challenge:
      "Votre défi est de ne pas rester prisonnier du passé ou de relations fondées uniquement sur le besoin d’être indispensable.",
    key:
      "Protéger sans vous oublier et accueillir vos émotions sans leur abandonner toutes vos décisions.",
  },

  Leo: {
    title:
      "Rayonner, créer et inspirer par une expression authentique",
    introduction:
      "Votre direction profonde vous invite à prendre votre place avec cœur, créativité et dignité. Votre mission ne consiste pas seulement à être vu, mais à laisser circuler une lumière personnelle capable d’encourager les autres à reconnaître la leur.",
    naturalDirection:
      "Vous êtes appelé à développer une expression qui vous ressemble réellement. Plus vous créez depuis votre centre plutôt que pour obtenir une validation extérieure, plus votre présence devient naturellement inspirante.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez créer, diriger, transmettre de l’enthousiasme ou donner une forme visible à ce qui vous habite.",
    contribution:
      "Votre contribution consiste à apporter chaleur, confiance, générosité et puissance créatrice.",
    challenge:
      "Votre défi est de ne pas mesurer votre valeur uniquement à la reconnaissance que vous recevez.",
    key:
      "Créer parce que cela vous ressemble, et non seulement pour être applaudi.",
  },

  Virgo: {
    title:
      "Améliorer, organiser et mettre vos compétences au service du réel",
    introduction:
      "Votre direction profonde vous invite à rendre les choses plus claires, plus efficaces et plus utiles. Votre sens de l’observation devient une véritable mission lorsqu’il permet d’apporter des solutions concrètes plutôt que de nourrir une insatisfaction permanente.",
    naturalDirection:
      "Vous êtes appelé à développer une maîtrise fondée sur l’expérience, la précision et l’attention portée aux détails. Votre progression consiste également à reconnaître que l’utilité n’exige pas la perfection.",
    fulfillment:
      "Vous vous accomplissez lorsque vos compétences améliorent concrètement une situation, une méthode ou le quotidien d’une personne.",
    contribution:
      "Votre contribution consiste à apporter discernement, fiabilité, méthode et sens pratique.",
    challenge:
      "Votre défi est de ne pas transformer votre capacité d’analyse en critique constante de vous-même ou des autres.",
    key:
      "Mettre votre exigence au service d’une amélioration réaliste et bienveillante.",
  },

  Libra: {
    title:
      "Créer davantage d’équilibre, de beauté et de coopération",
    introduction:
      "Votre direction profonde vous invite à comprendre la relation, à rapprocher les points de vue et à chercher une forme d’équilibre qui respecte chaque personne. Votre talent pour percevoir plusieurs perspectives devient une force lorsque vous osez aussi définir la vôtre.",
    naturalDirection:
      "Vous êtes appelé à favoriser la coopération, la justice et l’harmonie sans sacrifier votre vérité personnelle. Votre chemin vous apprend que la paix durable ne repose pas sur l’évitement des désaccords.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez réunir, négocier, embellir ou restaurer une relation plus équitable.",
    contribution:
      "Votre contribution consiste à rappeler que l’élégance relationnelle et le respect peuvent transformer profondément les échanges.",
    challenge:
      "Votre défi est de prendre des décisions sans attendre l’approbation de toutes les personnes concernées.",
    key:
      "Construire l’harmonie à partir d’une position intérieure claire.",
  },

  Scorpio: {
    title:
      "Transformer, approfondir et révéler ce qui demande à évoluer",
    introduction:
      "Votre direction profonde vous invite à aller au-delà des apparences. Vous êtes appelé à comprendre les mouvements invisibles, à traverser les périodes de transformation et à utiliser votre intensité pour régénérer plutôt que pour contrôler.",
    naturalDirection:
      "Votre chemin se développe lorsque vous acceptez de regarder honnêtement ce qui se joue sous la surface. Vous possédez une capacité naturelle à percevoir les enjeux profonds, les contradictions et les vérités que les autres préfèrent parfois éviter.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez transformer une épreuve, comprendre un mécanisme complexe ou accompagner une évolution profonde.",
    contribution:
      "Votre contribution consiste à apporter lucidité, courage émotionnel, profondeur et capacité de renaissance.",
    challenge:
      "Votre défi est de ne pas laisser la peur de perdre vous pousser à retenir, surveiller ou fermer votre monde intérieur.",
    key:
      "Utiliser votre puissance pour transformer et non pour vous protéger de toute vulnérabilité.",
  },

  Sagittarius: {
    title:
      "Explorer, comprendre et transmettre une vision plus vaste",
    introduction:
      "Votre direction profonde vous invite à élargir les horizons, à rechercher du sens et à partager une vision capable de redonner de l’élan. Votre besoin de liberté devient une mission lorsqu’il vous conduit vers une compréhension plus profonde plutôt que vers une fuite constante.",
    naturalDirection:
      "Vous êtes appelé à apprendre par l’expérience, à confronter vos convictions au réel et à transmettre ce que vos explorations vous ont permis de comprendre.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez voyager, enseigner, découvrir, entreprendre ou défendre une vision porteuse d’espoir.",
    contribution:
      "Votre contribution consiste à redonner du sens, de la perspective et de la confiance dans les possibilités à venir.",
    challenge:
      "Votre défi est de ne pas confondre conviction et certitude absolue.",
    key:
      "Faire de votre liberté un espace d’apprentissage, de responsabilité et de transmission.",
  },

  Capricorn: {
    title:
      "Bâtir une œuvre solide et assumer progressivement votre autorité",
    introduction:
      "Votre direction profonde vous invite à développer une maîtrise, à construire sur le long terme et à assumer une responsabilité qui vous ressemble. Votre ambition devient porteuse lorsqu’elle s’appuie sur une vision intérieure plutôt que sur la seule nécessité de prouver votre valeur.",
    naturalDirection:
      "Vous êtes appelé à avancer avec patience, stratégie et engagement. Votre chemin consiste aussi à reconnaître que la réussite extérieure ne remplace pas le sentiment intérieur d’avoir construit quelque chose de juste.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez structurer, diriger, consolider ou laisser une réalisation durable.",
    contribution:
      "Votre contribution consiste à apporter maturité, fiabilité, continuité et sens des responsabilités.",
    challenge:
      "Votre défi est de ne pas faire de l’effort, du contrôle ou de la performance les seules preuves de votre légitimité.",
    key:
      "Construire une réussite qui respecte autant votre humanité que vos objectifs.",
  },

  Aquarius: {
    title:
      "Innover, libérer et contribuer à une vision plus collective",
    introduction:
      "Votre direction profonde vous invite à penser autrement, à remettre en question les modèles devenus trop limitants et à participer à une évolution collective. Votre originalité prend tout son sens lorsqu’elle devient utile et accessible.",
    naturalDirection:
      "Vous êtes appelé à préserver votre indépendance intellectuelle tout en développant votre capacité à collaborer. Votre regard différent peut ouvrir de nouvelles possibilités lorsque vous acceptez de créer un pont entre l’idée et la réalité.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez inventer, moderniser, rassembler ou défendre une cause qui dépasse votre intérêt personnel.",
    contribution:
      "Votre contribution consiste à apporter innovation, liberté de pensée, vision et ouverture vers l’avenir.",
    challenge:
      "Votre défi est de ne pas vous couper de vos émotions ou des autres pour préserver votre autonomie.",
    key:
      "Mettre votre différence au service d’une transformation concrète et humaine.",
  },

  Pisces: {
    title:
      "Relier, inspirer et donner une forme sensible à l’invisible",
    introduction:
      "Votre direction profonde vous invite à développer la compassion, l’imagination et la capacité de percevoir ce qui ne se formule pas toujours avec des mots. Votre sensibilité devient une mission lorsqu’elle nourrit une création, une présence ou une aide véritable.",
    naturalDirection:
      "Vous êtes appelé à écouter votre intuition tout en développant des limites suffisamment claires pour ne pas absorber toutes les émotions qui vous entourent.",
    fulfillment:
      "Vous vous accomplissez lorsque vous pouvez créer, soulager, inspirer, accompagner ou donner du sens à une expérience intérieure.",
    contribution:
      "Votre contribution consiste à rappeler la valeur de la sensibilité, de l’imagination et de la compassion.",
    challenge:
      "Votre défi est de ne pas vous perdre dans les attentes, les émotions ou les besoins des autres.",
    key:
      "Donner une forme concrète à votre intuition sans abandonner vos propres repères.",
  },
};

/*
|--------------------------------------------------------------------------
| Influence de Saturne
|--------------------------------------------------------------------------
*/

const SATURN_LESSONS: Record<string, string> = {
  Aries:
    "Saturne en Bélier vous apprend à développer une autorité personnelle qui ne dépend ni de la précipitation ni de la confrontation. Votre affirmation devient plus puissante lorsqu’elle repose sur une décision mûrie et une confiance construite dans le temps.",

  Taurus:
    "Saturne en Taureau vous invite à bâtir votre sécurité sur des fondations intérieures et réalistes. Votre évolution demande de trouver un équilibre entre prudence, attachement et capacité d’adaptation.",

  Gemini:
    "Saturne en Gémeaux vous apprend à structurer votre pensée, à préciser vos messages et à accorder davantage de valeur à votre propre intelligence. La maîtrise vient lorsque vous acceptez d’approfondir plutôt que de tout comprendre immédiatement.",

  Cancer:
    "Saturne en Cancer vous invite à développer une sécurité émotionnelle qui ne dépend pas entièrement de votre famille, de votre passé ou du rôle que vous jouez auprès des autres.",

  Leo:
    "Saturne en Lion vous apprend à exprimer votre créativité sans exiger une validation constante. Votre rayonnement devient plus solide lorsque vous acceptez d’avancer même lorsque les applaudissements ne sont pas immédiats.",

  Virgo:
    "Saturne en Vierge vous invite à transformer votre exigence en compétence et votre inquiétude en méthode. Votre progression s’accélère lorsque vous acceptez qu’une action imparfaite peut être plus utile qu’une préparation sans fin.",

  Libra:
    "Saturne en Balance vous apprend à construire des relations fondées sur la responsabilité, la réciprocité et des limites claires. Votre équilibre ne doit pas dépendre du maintien de la paix à tout prix.",

  Scorpio:
    "Saturne en Scorpion vous invite à apprivoiser la vulnérabilité, la confiance et les transformations que vous ne pouvez pas entièrement contrôler. Votre véritable pouvoir se développe lorsque vous cessez de confondre protection et fermeture.",

  Sagittarius:
    "Saturne en Sagittaire vous apprend à confronter vos convictions à l’expérience. Votre vision gagne en crédibilité lorsqu’elle repose sur une compréhension approfondie et une discipline réelle.",

  Capricorn:
    "Saturne en Capricorne renforce votre besoin de bâtir et de maîtriser. Votre leçon consiste à assumer votre ambition sans vous enfermer dans une responsabilité excessive ou dans la peur de ne jamais en faire assez.",

  Aquarius:
    "Saturne en Verseau vous invite à donner une structure concrète à vos idées novatrices. Votre différence devient une véritable contribution lorsque vous acceptez les efforts nécessaires pour l’inscrire dans la durée.",

  Pisces:
    "Saturne en Poissons vous apprend à donner une forme claire à votre sensibilité. Les limites, les habitudes et les engagements concrets peuvent soutenir votre intuition plutôt que l’étouffer.",
};

/*
|--------------------------------------------------------------------------
| Expansion selon Jupiter
|--------------------------------------------------------------------------
*/

const JUPITER_EXPANSION: Record<string, string> = {
  Aries:
    "Votre expansion passe par l’initiative, le courage et la capacité à croire en vos propres décisions.",

  Taurus:
    "Votre expansion passe par la patience, la stabilité et la création de ressources durables.",

  Gemini:
    "Votre expansion passe par l’apprentissage, les échanges et la circulation des idées.",

  Cancer:
    "Votre expansion passe par la sécurité intérieure, la transmission et la création de liens nourrissants.",

  Leo:
    "Votre expansion passe par la créativité, la générosité et l’expression confiante de votre personnalité.",

  Virgo:
    "Votre expansion passe par le développement de compétences utiles et la recherche de solutions concrètes.",

  Libra:
    "Votre expansion passe par les alliances, la coopération et la recherche d’une plus grande équité.",

  Scorpio:
    "Votre expansion passe par la transformation, la profondeur émotionnelle et la capacité à renouveler vos ressources.",

  Sagittarius:
    "Votre expansion passe par l’exploration, la connaissance et la transmission d’une vision plus vaste.",

  Capricorn:
    "Votre expansion passe par la construction progressive d’une autorité, d’une œuvre ou d’une expertise.",

  Aquarius:
    "Votre expansion passe par l’innovation, les réseaux et les projets tournés vers le collectif.",

  Pisces:
    "Votre expansion passe par l’intuition, la création et la capacité à donner du sens à votre sensibilité.",
};

/*
|--------------------------------------------------------------------------
| Ascendant
|--------------------------------------------------------------------------
*/

const ASCENDANT_DIRECTION: Record<
  string,
  string
> = {
  Aries:
    "Votre Ascendant Bélier vous demande d’avancer avec davantage d’audace, d’autonomie et de spontanéité.",

  Taurus:
    "Votre Ascendant Taureau vous demande de construire votre vie avec constance, simplicité et fidélité à vos valeurs.",

  Gemini:
    "Votre Ascendant Gémeaux vous demande de rester curieux, mobile et ouvert aux échanges qui renouvellent votre compréhension.",

  Cancer:
    "Votre Ascendant Cancer vous demande de reconnaître votre sensibilité et de construire une sécurité émotionnelle qui vous appartient.",

  Leo:
    "Votre Ascendant Lion vous demande d’assumer votre présence, votre créativité et votre droit de prendre une place visible.",

  Virgo:
    "Votre Ascendant Vierge vous demande de développer votre discernement, vos compétences et votre capacité à améliorer le réel.",

  Libra:
    "Votre Ascendant Balance vous demande d’apprendre à collaborer tout en restant fidèle à votre propre position.",

  Scorpio:
    "Votre Ascendant Scorpion vous demande de vivre avec intensité, lucidité et courage face aux transformations nécessaires.",

  Sagittarius:
    "Votre Ascendant Sagittaire vous demande d’élargir vos horizons et de suivre une direction porteuse de sens.",

  Capricorn:
    "Votre Ascendant Capricorne vous demande de construire avec patience, responsabilité et vision à long terme.",

  Aquarius:
    "Votre Ascendant Verseau vous demande de préserver votre liberté intérieure et d’apporter une perspective différente.",

  Pisces:
    "Votre Ascendant Poissons vous demande d’écouter votre intuition tout en développant des limites protectrices.",
};

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function normalizeSign(
  sign: string | undefined
): string {
  if (!sign) {
    return "";
  }

  const trimmedSign = sign.trim();

  const englishEntry = Object.entries(
    SIGN_NAMES
  ).find(
    ([english, french]) =>
      english.toLowerCase() ===
        trimmedSign.toLowerCase() ||
      french.toLowerCase() ===
        trimmedSign.toLowerCase()
  );

  return englishEntry?.[0] ?? trimmedSign;
}

function getFrenchSign(
  sign: string | undefined
): string {
  const normalized = normalizeSign(sign);

  return SIGN_NAMES[normalized] ?? sign ?? "";
}

function getPlanet(
  planets: SignaturePlanet[],
  name: string
): PlanetData | undefined {
  const planet = planets.find(
    (item) =>
      item.name.toLowerCase() ===
      name.toLowerCase()
  );

  if (!planet) {
    return undefined;
  }

  return {
    name: planet.name,
    sign: normalizeSign(planet.sign),
    house:
      typeof planet.house === "number"
        ? planet.house
        : undefined,
    degree:
      typeof planet.degree === "number"
        ? planet.degree
        : undefined,
  };
}

function longitudeToSign(
  longitude: number
): string {
  const signs = [
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
  ];

  const normalized =
    ((longitude % 360) + 360) % 360;

  const index = Math.floor(
    normalized / 30
  );

  return signs[index] ?? "Aries";
}

function getDisplayName(
  firstName?: string
): string {
  const normalized =
    typeof firstName === "string"
      ? firstName.trim()
      : "";

  return normalized || "vous";
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: 42,
    paddingTop: 18,
    paddingBottom: 52,
  },

  hero: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 16,
    backgroundColor: CARD_BACKGROUND,
    padding: 18,
    marginBottom: 18,
  },

  heroIconContainer: {
    width: 76,
    height: 76,
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },

  heroIcon: {
    width: 54,
    height: 54,
    objectFit: "contain",
  },

  heroTextContainer: {
    flex: 1,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 6,
  },

  title: {
    color: CREAM,
    fontSize: 22,
    lineHeight: 1.2,
    marginBottom: 7,
  },

  subtitle: {
    color: MUTED,
    fontSize: 9.5,
    lineHeight: 1.55,
  },

  introductionCard: {
    backgroundColor: CARD_BACKGROUND_LIGHT,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 13,
    padding: 18,
    marginBottom: 15,
  },

  sectionLabel: {
    color: GOLD,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  sectionTitle: {
    color: CREAM,
    fontSize: 15,
    lineHeight: 1.3,
    marginBottom: 9,
  },

  paragraph: {
    color: MUTED,
    fontSize: 9.4,
    lineHeight: 1.65,
    textAlign: "justify",
  },

  twoColumns: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },

  halfCard: {
    flex: 1,
    minHeight: 154,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    padding: 15,
  },

  cardNumber: {
    color: GOLD,
    fontSize: 9,
    marginBottom: 6,
  },

  cardTitle: {
    color: CREAM,
    fontSize: 12,
    lineHeight: 1.3,
    marginBottom: 8,
  },

  cardText: {
    color: MUTED,
    fontSize: 8.8,
    lineHeight: 1.55,
    textAlign: "justify",
  },

  quoteCard: {
    borderLeftWidth: 3,
    borderLeftColor: GOLD,
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginTop: 2,
  },

  quoteText: {
    color: CREAM,
    fontSize: 11,
    lineHeight: 1.55,
    fontStyle: "italic",
  },

  profileRow: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 14,
  },

  profileCard: {
    flex: 1,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 11,
    padding: 14,
  },

  profileValue: {
    color: GOLD,
    fontSize: 13,
    marginBottom: 5,
  },

  profileLabel: {
    color: CREAM,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 7,
  },

  profileText: {
    color: MUTED,
    fontSize: 8.2,
    lineHeight: 1.5,
  },

  guidanceCard: {
    backgroundColor: CARD_BACKGROUND_LIGHT,
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 13,
    padding: 17,
    marginBottom: 14,
  },

  guidanceTitle: {
    color: GOLD,
    fontSize: 13,
    marginBottom: 8,
  },

  bulletRow: {
    flexDirection: "row",
    marginBottom: 9,
  },

  bullet: {
    color: GOLD,
    width: 16,
    fontSize: 10,
  },

  bulletText: {
    flex: 1,
    color: MUTED,
    fontSize: 9,
    lineHeight: 1.55,
  },

  closingCard: {
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 13,
    padding: 18,
    marginTop: 2,
  },

  closingTitle: {
    color: CREAM,
    fontSize: 15,
    marginBottom: 9,
  },

  closingText: {
    color: MUTED,
    fontSize: 9.4,
    lineHeight: 1.65,
    textAlign: "justify",
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function PdfSignatureLifePurpose({
  firstName,
  planets,
  angles,
}: PdfSignatureLifePurposeProps) {
  const sun = getPlanet(planets, "Sun");
  const saturn = getPlanet(
    planets,
    "Saturn"
  );
  const jupiter = getPlanet(
    planets,
    "Jupiter"
  );

  const ascendantSign =
    longitudeToSign(
      angles.ascendant
    );

  const sunSign =
    sun?.sign || ascendantSign;

  const profile =
    PURPOSE_BY_SIGN[sunSign] ??
    PURPOSE_BY_SIGN.Scorpio;

  const saturnLesson =
    SATURN_LESSONS[
      saturn?.sign ?? ""
    ] ??
    "Saturne montre que votre accomplissement demande du temps, de la persévérance et une relation plus consciente avec vos responsabilités.";

  const jupiterExpansion =
    JUPITER_EXPANSION[
      jupiter?.sign ?? ""
    ] ??
    "Votre expansion passe par la confiance, l’expérience et la capacité à reconnaître les possibilités qui correspondent réellement à votre évolution.";

  const ascendantDirection =
    ASCENDANT_DIRECTION[
      ascendantSign
    ] ??
    "Votre Ascendant décrit la manière dont votre direction intérieure cherche progressivement à prendre forme dans votre vie.";

  const displayName =
    getDisplayName(firstName);

  return (
    <>
      {/* Page 1 — Direction fondamentale */}

      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfBrandHeader />

        <View style={styles.content}>
          <View style={styles.hero}>
            <View
              style={
                styles.heroIconContainer
              }
            >
              <Image
                src={LIFE_PURPOSE_ICON}
                style={styles.heroIcon}
              />
            </View>

            <View
              style={
                styles.heroTextContainer
              }
            >
              <Text style={styles.eyebrow}>
                Analyse Signature
              </Text>

              <Text style={styles.title}>
                Votre mission de vie
              </Text>

              <Text
                style={styles.subtitle}
              >
                La direction profonde qui
                donne du sens à vos choix,
                à vos expériences et à votre
                évolution.
              </Text>
            </View>
          </View>

          <View
            style={
              styles.introductionCard
            }
          >
            <Text
              style={styles.sectionLabel}
            >
              Votre direction fondamentale
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              {profile.title}
            </Text>

            <Text
              style={styles.paragraph}
            >
              {displayName !== "vous"
                ? `${displayName}, `
                : ""}
              {profile.introduction}
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardNumber}
              >
                01
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Votre mouvement naturel
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.naturalDirection}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardNumber}
              >
                02
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui nourrit votre
                accomplissement
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.fulfillment}
              </Text>
            </View>
          </View>

          <View
            style={styles.quoteCard}
          >
            <Text
              style={styles.quoteText}
            >
              « Votre mission ne vous
              demande pas de devenir une
              autre personne. Elle vous
              invite à exprimer plus
              consciemment ce qui cherche
              déjà à prendre vie en vous. »
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 2 — Piliers d’accomplissement */}

      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfBrandHeader />

        <View style={styles.content}>
          <View
            style={
              styles.introductionCard
            }
          >
            <Text
              style={styles.sectionLabel}
            >
              Les piliers de votre mission
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Une direction construite par
              plusieurs forces complémentaires
            </Text>

            <Text
              style={styles.paragraph}
            >
              Le Soleil indique ce que vous
              êtes appelé à développer
              consciemment. L’Ascendant
              décrit la manière dont cette
              direction prend progressivement
              forme. Jupiter révèle les
              expériences qui agrandissent
              votre confiance, tandis que
              Saturne montre la maîtrise que
              vous êtes invité à construire
              avec le temps.
            </Text>
          </View>

          <View style={styles.profileRow}>
            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Soleil
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  sun?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre centre de volonté,
                d’identité et de réalisation
                personnelle.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Ascendant
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  ascendantSign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                La manière dont vous apprenez
                à vous présenter, à agir et à
                prendre votre place.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Jupiter
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  jupiter?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre voie d’expansion, de
                confiance et d’ouverture.
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre manière de prendre votre
              place
            </Text>

            <Text
              style={styles.paragraph}
            >
              {ascendantDirection}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre voie d’expansion
            </Text>

            <Text
              style={styles.paragraph}
            >
              {jupiterExpansion}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              La contribution que vous pouvez
              offrir
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.contribution}
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 3 — Mise en pratique */}

      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfBrandHeader />

        <View style={styles.content}>
          <View
            style={
              styles.introductionCard
            }
          >
            <Text
              style={styles.sectionLabel}
            >
              Votre évolution consciente
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Transformer votre potentiel en
              direction vécue
            </Text>

            <Text
              style={styles.paragraph}
            >
              Une mission de vie ne se
              manifeste pas comme une seule
              profession ou comme un destin
              entièrement fixé. Elle apparaît
              dans la manière dont vous
              choisissez, apprenez, créez,
              traversez les défis et donnez
              une cohérence plus profonde à
              vos expériences.
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              La maîtrise que votre parcours
              vous demande
            </Text>

            <Text
              style={styles.paragraph}
            >
              {saturnLesson}
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardNumber}
              >
                Votre point d’attention
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui peut ralentir votre
                accomplissement
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.challenge}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardNumber}
              >
                Votre clé Signature
              </Text>

              <Text
                style={styles.cardTitle}
              >
                La décision intérieure à
                cultiver
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.key}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Comment avancer concrètement
            </Text>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Identifiez les activités qui
                vous donnent simultanément
                de l’énergie, du sens et le
                sentiment d’utiliser une
                qualité essentielle de votre
                personnalité.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Observez les situations qui
                reviennent régulièrement.
                Elles indiquent souvent une
                compétence, une limite ou une
                responsabilité que votre
                parcours vous invite à
                développer.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Ne cherchez pas une réponse
                unique et définitive. Votre
                mission s’affine à mesure que
                vous agissez, expérimentez et
                reconnaissez ce qui demeure
                profondément cohérent pour
                vous.
              </Text>
            </View>
          </View>

          <View
            style={styles.closingCard}
          >
            <Text
              style={styles.closingTitle}
            >
              Votre intention directrice
            </Text>

            <Text
              style={styles.closingText}
            >
              Votre accomplissement se
              construit lorsque vous cessez
              de séparer ce que vous êtes,
              ce que vous apprenez et ce que
              vous apportez au monde. Plus
              vos choix reflètent vos valeurs
              profondes, plus votre parcours
              gagne naturellement en
              direction, en cohérence et en
              signification.
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>
    </>
  );
}
