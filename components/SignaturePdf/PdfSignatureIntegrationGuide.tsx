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
} from "./SignaturePdfStyles";

import PdfSignatureBrandHeader from "./PdfSignatureBrandHeader";
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

const INTEGRATION_GUIDE_ICON = assetUrl(
  "/astrology/integration-guide.png"
);

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureIntegrationGuideProps = {
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

type IntegrationProfile = {
  title: string;
  introduction: string;
  observe: string;
  nourish: string;
  balance: string;
  release: string;
  dailyAction: string;
  relationshipAction: string;
  professionalAction: string;
  innerAction: string;
  affirmation: string;
};

/*
|--------------------------------------------------------------------------
| Signes
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
| Guide selon le Soleil
|--------------------------------------------------------------------------
*/

const INTEGRATION_BY_SIGN: Record<
  string,
  IntegrationProfile
> = {
  Aries: {
    title:
      "Transformer votre énergie en direction consciente",
    introduction:
      "Votre intégration passe par une utilisation plus consciente de votre force d’initiative. Vous avancez rapidement lorsque votre énergie rencontre un objectif clair, mais vous gagnez à ralentir suffisamment pour distinguer l’urgence réelle de l’impulsion.",
    observe:
      "Observez les moments où vous réagissez avant d’avoir identifié ce que vous voulez réellement défendre ou construire.",
    nourish:
      "Nourrissez votre courage, votre autonomie et votre capacité à commencer.",
    balance:
      "Équilibrez votre spontanéité par davantage de patience, d’écoute et de continuité.",
    release:
      "Libérez le besoin de prouver constamment votre force par l’action immédiate.",
    dailyAction:
      "Choisissez chaque jour une priorité principale et engagez-y votre énergie jusqu’à une étape concrète.",
    relationshipAction:
      "Exprimez votre besoin clairement avant que la frustration ne se transforme en réaction.",
    professionalAction:
      "Privilégiez les projets où vous pouvez initier, décider et voir rapidement un résultat.",
    innerAction:
      "Accordez-vous quelques minutes avant toute décision prise sous l’effet d’une émotion forte.",
    affirmation:
      "Je dirige mon énergie avec courage, conscience et constance.",
  },

  Taurus: {
    title:
      "Faire évoluer vos fondations sans perdre votre stabilité",
    introduction:
      "Votre intégration passe par la capacité à préserver ce qui est essentiel tout en acceptant les transformations nécessaires. Votre constance est une force immense lorsqu’elle soutient la croissance plutôt que l’immobilité.",
    observe:
      "Observez les situations que vous maintenez uniquement parce qu’elles sont connues ou rassurantes.",
    nourish:
      "Nourrissez votre stabilité, votre patience et votre rapport aux plaisirs simples.",
    balance:
      "Équilibrez votre besoin de sécurité par une ouverture progressive au changement.",
    release:
      "Libérez l’idée que toute transformation représente une menace pour ce que vous avez construit.",
    dailyAction:
      "Introduisez un petit changement concret dans une habitude devenue trop rigide.",
    relationshipAction:
      "Exprimez vos besoins de stabilité sans attendre que l’autre les devine.",
    professionalAction:
      "Construisez vos projets par étapes régulières et mesurables.",
    innerAction:
      "Revenez au corps, au souffle et aux sensations lorsque l’inquiétude augmente.",
    affirmation:
      "Je peux évoluer tout en demeurant solidement enraciné.",
  },

  Gemini: {
    title:
      "Transformer vos idées en compréhension profonde",
    introduction:
      "Votre intégration passe par la capacité à choisir, approfondir et transmettre. Votre curiosité est une richesse, mais elle devient encore plus puissante lorsqu’elle s’organise autour de quelques directions essentielles.",
    observe:
      "Observez les moments où vous changez de sujet ou de direction avant d’avoir réellement approfondi.",
    nourish:
      "Nourrissez votre curiosité, votre communication et votre besoin d’apprendre.",
    balance:
      "Équilibrez la variété par davantage de concentration et de continuité.",
    release:
      "Libérez le besoin de tout comprendre en même temps.",
    dailyAction:
      "Consacrez un temps défini à un seul sujet ou projet sans ouvrir une nouvelle direction.",
    relationshipAction:
      "Dites ce que vous ressentez sans transformer immédiatement l’émotion en analyse.",
    professionalAction:
      "Utilisez votre capacité à expliquer, relier et simplifier les informations.",
    innerAction:
      "Écrivez vos pensées afin d’identifier l’idée ou l’émotion centrale.",
    affirmation:
      "Je donne de la profondeur et une direction à mon intelligence.",
  },

  Cancer: {
    title:
      "Créer une sécurité intérieure capable de soutenir votre sensibilité",
    introduction:
      "Votre intégration passe par la reconnaissance de vos besoins émotionnels et la création de limites protectrices. Votre sensibilité devient une force lorsque vous cessez de la vivre uniquement à travers les besoins des autres.",
    observe:
      "Observez les moments où vous prenez soin de tout le monde sans reconnaître votre propre fatigue.",
    nourish:
      "Nourrissez votre besoin d’intimité, de sécurité et de liens sincères.",
    balance:
      "Équilibrez votre instinct protecteur par une meilleure attention à vos propres besoins.",
    release:
      "Libérez les responsabilités émotionnelles qui ne vous appartiennent pas.",
    dailyAction:
      "Créez chaque jour un moment où vous pouvez vous retirer, respirer et retrouver votre propre état intérieur.",
    relationshipAction:
      "Exprimez un besoin avant qu’il ne devienne un ressentiment.",
    professionalAction:
      "Utilisez votre capacité à comprendre, accueillir et créer un climat humain.",
    innerAction:
      "Distinguez ce que vous ressentez de ce que les autres ressentent autour de vous.",
    affirmation:
      "Je prends soin de moi avec la même présence que celle que j’offre aux autres.",
  },

  Leo: {
    title:
      "Rayonner depuis votre vérité plutôt que depuis le besoin d’approbation",
    introduction:
      "Votre intégration passe par une expression personnelle plus libre, plus créative et moins dépendante du regard extérieur. Votre lumière devient naturelle lorsque vous créez parce que cela vous ressemble.",
    observe:
      "Observez les moments où votre confiance dépend entièrement de la réaction reçue.",
    nourish:
      "Nourrissez votre créativité, votre générosité et votre capacité à inspirer.",
    balance:
      "Équilibrez votre besoin de reconnaissance par une validation intérieure plus stable.",
    release:
      "Libérez la peur de ne pas être suffisamment remarquable.",
    dailyAction:
      "Créez ou exprimez quelque chose chaque jour sans chercher immédiatement à l’évaluer.",
    relationshipAction:
      "Montrez votre vulnérabilité au lieu de protéger systématiquement votre fierté.",
    professionalAction:
      "Prenez une place visible dans les projets où votre personnalité et votre créativité apportent une valeur réelle.",
    innerAction:
      "Reconnaissez une qualité personnelle sans attendre qu’une autre personne la confirme.",
    affirmation:
      "Ma lumière demeure réelle même lorsqu’elle n’est pas applaudie.",
  },

  Virgo: {
    title:
      "Transformer votre exigence en compétence utile et bienveillante",
    introduction:
      "Votre intégration passe par une relation plus souple avec l’imperfection. Votre précision et votre discernement deviennent des forces lorsque vous les utilisez pour améliorer plutôt que pour condamner.",
    observe:
      "Observez les moments où la peur de l’erreur retarde une action pourtant réalisable.",
    nourish:
      "Nourrissez votre sens de l’organisation, votre compétence et votre capacité à aider concrètement.",
    balance:
      "Équilibrez votre exigence par davantage de tolérance et de réalisme.",
    release:
      "Libérez l’idée que votre valeur dépend de votre capacité à tout faire correctement.",
    dailyAction:
      "Définissez une version suffisamment bonne avant de commencer une tâche.",
    relationshipAction:
      "Exprimez votre affection sans la traduire uniquement par l’aide ou les corrections.",
    professionalAction:
      "Valorisez votre capacité à créer des méthodes, résoudre et améliorer.",
    innerAction:
      "Remplacez une critique intérieure par une action simple et constructive.",
    affirmation:
      "Je progresse avec précision sans exiger la perfection.",
  },

  Libra: {
    title:
      "Créer l’harmonie sans vous éloigner de votre propre vérité",
    introduction:
      "Votre intégration passe par la capacité à coopérer sans vous effacer. Votre sens de l’équilibre devient plus solide lorsque votre propre position fait partie de la relation.",
    observe:
      "Observez les moments où vous retardez un choix pour éviter de déplaire.",
    nourish:
      "Nourrissez votre sens de la justice, de la beauté et de la coopération.",
    balance:
      "Équilibrez votre attention aux autres par une écoute plus claire de vos propres besoins.",
    release:
      "Libérez la croyance qu’un désaccord détruit nécessairement une relation.",
    dailyAction:
      "Prenez une petite décision sans demander plusieurs validations extérieures.",
    relationshipAction:
      "Exprimez votre position avant de chercher un compromis.",
    professionalAction:
      "Utilisez votre capacité à négocier, relier et créer un climat de collaboration.",
    innerAction:
      "Demandez-vous ce que vous choisiriez si vous ne craigniez pas de décevoir.",
    affirmation:
      "Je peux créer l’harmonie sans abandonner ma vérité.",
  },

  Scorpio: {
    title:
      "Transformer votre intensité en puissance consciente",
    introduction:
      "Votre intégration passe par une relation plus libre avec la vulnérabilité, le contrôle et la transformation. Votre profondeur devient une force lorsque vous l’utilisez pour comprendre et régénérer plutôt que pour vous protéger de toute perte.",
    observe:
      "Observez les moments où la méfiance ou le besoin de comprendre chaque détail vous empêche d’avancer.",
    nourish:
      "Nourrissez votre profondeur, votre intuition et votre capacité de transformation.",
    balance:
      "Équilibrez votre intensité par davantage de confiance, de souplesse et d’ouverture progressive.",
    release:
      "Libérez le besoin de tout contrôler avant de vous engager.",
    dailyAction:
      "Choisissez une situation dans laquelle vous pouvez lâcher une petite part de contrôle.",
    relationshipAction:
      "Partagez une vérité émotionnelle avant qu’elle ne se transforme en silence ou en distance.",
    professionalAction:
      "Utilisez votre capacité à analyser les enjeux profonds, gérer les crises et comprendre les mécanismes cachés.",
    innerAction:
      "Demandez-vous si votre vigilance correspond au présent ou à une ancienne blessure.",
    affirmation:
      "Ma vulnérabilité et ma puissance peuvent exister ensemble.",
  },

  Sagittarius: {
    title:
      "Donner une structure réelle à votre besoin de liberté et de sens",
    introduction:
      "Votre intégration passe par l’union entre exploration et engagement. Votre vision devient plus puissante lorsque vous acceptez de lui donner une forme concrète et durable.",
    observe:
      "Observez les moments où vous cherchez un nouvel horizon pour éviter une contrainte ou une responsabilité présente.",
    nourish:
      "Nourrissez votre besoin de sens, d’apprentissage et d’ouverture.",
    balance:
      "Équilibrez votre liberté par une meilleure continuité dans vos choix.",
    release:
      "Libérez l’idée qu’un engagement ferme nécessairement toutes les possibilités.",
    dailyAction:
      "Choisissez une direction et avancez-y avant d’en ouvrir une nouvelle.",
    relationshipAction:
      "Restez présent dans les conversations difficiles au lieu de prendre immédiatement de la distance.",
    professionalAction:
      "Utilisez votre capacité à transmettre une vision, enseigner et inspirer.",
    innerAction:
      "Reliez chaque grand idéal à une action concrète réalisable cette semaine.",
    affirmation:
      "Je donne une forme durable à la liberté qui m’inspire.",
  },

  Capricorn: {
    title:
      "Construire sans faire de l’effort la seule preuve de votre valeur",
    introduction:
      "Votre intégration passe par une définition plus humaine de la réussite. Votre discipline et votre ambition sont de grandes forces, mais elles doivent soutenir votre vie plutôt que l’épuiser.",
    observe:
      "Observez les moments où vous augmentez vos efforts alors que vous auriez surtout besoin de repos ou de soutien.",
    nourish:
      "Nourrissez votre sens des responsabilités, votre patience et votre capacité à bâtir.",
    balance:
      "Équilibrez votre ambition par une meilleure écoute de vos limites.",
    release:
      "Libérez l’idée que tout ce qui possède de la valeur doit être difficile.",
    dailyAction:
      "Définissez trois priorités réalistes plutôt qu’une liste impossible à terminer.",
    relationshipAction:
      "Permettez aux autres de vous soutenir sans croire que cela diminue votre autonomie.",
    professionalAction:
      "Utilisez votre capacité à organiser, structurer et construire sur le long terme.",
    innerAction:
      "Mesurez votre progression par la cohérence plutôt que seulement par la performance.",
    affirmation:
      "Je construis avec ambition sans sacrifier mon équilibre.",
  },

  Aquarius: {
    title:
      "Faire de votre différence une contribution concrète et humaine",
    introduction:
      "Votre intégration passe par la capacité à relier votre indépendance à une véritable participation. Votre originalité devient une force collective lorsque vous acceptez de lui donner une forme accessible.",
    observe:
      "Observez les moments où vous prenez de la distance uniquement pour éviter de vous sentir limité ou vulnérable.",
    nourish:
      "Nourrissez votre liberté de pensée, votre originalité et votre vision du futur.",
    balance:
      "Équilibrez votre indépendance par davantage de présence émotionnelle et de collaboration.",
    release:
      "Libérez la croyance que l’appartenance exige de perdre votre singularité.",
    dailyAction:
      "Transformez une idée originale en une petite expérimentation concrète.",
    relationshipAction:
      "Expliquez votre besoin d’espace sans disparaître émotionnellement.",
    professionalAction:
      "Utilisez votre capacité à innover, moderniser et comprendre les mouvements collectifs.",
    innerAction:
      "Identifiez une manière de contribuer sans renoncer à votre autonomie.",
    affirmation:
      "Ma différence devient une force lorsque je la partage consciemment.",
  },

  Pisces: {
    title:
      "Protéger votre sensibilité afin de lui donner une forme concrète",
    introduction:
      "Votre intégration passe par une meilleure distinction entre intuition, compassion et absorption émotionnelle. Votre sensibilité devient une force durable lorsqu’elle est soutenue par des limites et des habitudes claires.",
    observe:
      "Observez les moments où vous portez une émotion, une responsabilité ou une attente qui ne vous appartient pas.",
    nourish:
      "Nourrissez votre intuition, votre imagination et votre compassion.",
    balance:
      "Équilibrez votre ouverture par des limites concrètes et une meilleure protection de votre énergie.",
    release:
      "Libérez le besoin de sauver, réparer ou absorber les difficultés des autres.",
    dailyAction:
      "Créez un moment de silence, de création ou de retrait pour retrouver votre propre état intérieur.",
    relationshipAction:
      "Posez une limite avant que votre disponibilité ne devienne de l’épuisement.",
    professionalAction:
      "Donnez une structure concrète à vos intuitions, vos créations ou votre capacité d’accompagnement.",
    innerAction:
      "Demandez-vous régulièrement : est-ce que cette émotion m’appartient réellement ?",
    affirmation:
      "Mes limites permettent à ma sensibilité de devenir une force.",
  },
};

/*
|--------------------------------------------------------------------------
| Conseils complémentaires
|--------------------------------------------------------------------------
*/

const MOON_GUIDANCE: Record<string, string> = {
  Aries:
    "Votre Lune en Bélier se régule par le mouvement, la franchise et une action simple.",

  Taurus:
    "Votre Lune en Taureau retrouve son équilibre par la stabilité, le repos et le retour au corps.",

  Gemini:
    "Votre Lune en Gémeaux s’apaise par les mots, l’écriture et un échange clair.",

  Cancer:
    "Votre Lune en Cancer se régule dans un environnement intime, sécurisant et émotionnellement fiable.",

  Leo:
    "Votre Lune en Lion retrouve son équilibre par la création, la chaleur et une expression sincère.",

  Virgo:
    "Votre Lune en Vierge s’apaise par une routine simple, une action utile et un environnement organisé.",

  Libra:
    "Votre Lune en Balance retrouve son équilibre par un dialogue respectueux et une relation plus harmonieuse.",

  Scorpio:
    "Votre Lune en Scorpion se régule par la vérité émotionnelle, la confiance et la transformation consciente.",

  Sagittarius:
    "Votre Lune en Sagittaire s’apaise par l’espace, le mouvement et une perspective porteuse de sens.",

  Capricorn:
    "Votre Lune en Capricorne retrouve son équilibre par la structure, le repos et la permission de recevoir du soutien.",

  Aquarius:
    "Votre Lune en Verseau se régule par le recul, la liberté et un espace où votre différence est respectée.",

  Pisces:
    "Votre Lune en Poissons s’apaise par le silence, la création et des limites protectrices.",
};

const SATURN_GUIDANCE: Record<string, string> = {
  Aries:
    "Votre maîtrise grandit lorsque vous agissez sans chercher à prouver immédiatement votre force.",

  Taurus:
    "Votre maîtrise grandit lorsque vous adaptez progressivement vos fondations.",

  Gemini:
    "Votre maîtrise grandit lorsque vous exprimez vos idées avant qu’elles ne soient parfaites.",

  Cancer:
    "Votre maîtrise grandit lorsque vous reconnaissez et exprimez vos besoins émotionnels.",

  Leo:
    "Votre maîtrise grandit lorsque vous créez sans faire de l’approbation une condition.",

  Virgo:
    "Votre maîtrise grandit lorsque vous acceptez une progression imparfaite, mais constante.",

  Libra:
    "Votre maîtrise grandit lorsque vous prenez position sans craindre tout désaccord.",

  Scorpio:
    "Votre maîtrise grandit lorsque vous développez une confiance progressive sans renoncer à votre discernement.",

  Sagittarius:
    "Votre maîtrise grandit lorsque vous donnez une continuité concrète à votre vision.",

  Capricorn:
    "Votre maîtrise grandit lorsque votre discipline respecte aussi votre humanité.",

  Aquarius:
    "Votre maîtrise grandit lorsque votre originalité s’inscrit dans un engagement réel.",

  Pisces:
    "Votre maîtrise grandit lorsque votre sensibilité est soutenue par des limites simples et stables.",

};

const ELEMENT_BY_SIGN: Record<string, "Feu" | "Terre" | "Air" | "Eau"> = {
  Aries: "Feu",
  Leo: "Feu",
  Sagittarius: "Feu",
  Taurus: "Terre",
  Virgo: "Terre",
  Capricorn: "Terre",
  Gemini: "Air",
  Libra: "Air",
  Aquarius: "Air",
  Cancer: "Eau",
  Scorpio: "Eau",
  Pisces: "Eau",
};

const MODALITY_BY_SIGN: Record<string, "Cardinal" | "Fixe" | "Mutable"> = {
  Aries: "Cardinal",
  Cancer: "Cardinal",
  Libra: "Cardinal",
  Capricorn: "Cardinal",
  Taurus: "Fixe",
  Leo: "Fixe",
  Scorpio: "Fixe",
  Aquarius: "Fixe",
  Gemini: "Mutable",
  Virgo: "Mutable",
  Sagittarius: "Mutable",
  Pisces: "Mutable",
};

/*
|--------------------------------------------------------------------------
| Utilitaires
|--------------------------------------------------------------------------
*/

function normalizeSign(
  sign: unknown
): string {
  if (typeof sign !== "string") {
    return "";
  }

  const trimmedSign = sign.trim();

  if (!trimmedSign) {
    return "";
  }

  const entry = Object.entries(
    SIGN_NAMES
  ).find(
    ([english, french]) =>
      english.toLowerCase() === trimmedSign.toLowerCase() ||
      french.toLowerCase() === trimmedSign.toLowerCase()
  );

  return entry?.[0] ?? trimmedSign;
}

function getFrenchSign(
  sign: unknown
): string {
  const normalized = normalizeSign(sign);
  return normalized ? (SIGN_NAMES[normalized] ?? normalized) : "";
}

function getPlanet(
  planets: SignaturePlanet[],
  name: string
): PlanetData | undefined {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const planet = safePlanets.find(
    (item) =>
      item &&
      typeof item.name === "string" &&
      item.name.toLowerCase() === name.toLowerCase()
  );

  if (!planet) {
    return undefined;
  }

  return {
    name: planet.name,
    sign: normalizeSign(planet.sign),
    house:
      typeof planet.house === "number" &&
      Number.isFinite(planet.house)
        ? planet.house
        : undefined,
    degree:
      typeof planet.degree === "number" &&
      Number.isFinite(planet.degree)
        ? planet.degree
        : undefined,
  };
}

function longitudeToSign(
  longitude: unknown
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

  const safeLongitude =
    typeof longitude === "number" &&
    Number.isFinite(longitude)
      ? longitude
      : 0;

  const normalized =
    ((safeLongitude % 360) + 360) % 360;

  return signs[
    Math.floor(normalized / 30)
  ] ?? "Aries";
}

function getDisplayName(
  firstName?: string
): string {
  return typeof firstName === "string"
    ? firstName.trim()
    : "";
}


function getElement(
  sign: string | undefined
): string {
  return sign
    ? ELEMENT_BY_SIGN[sign] ?? ""
    : "";
}

function getModality(
  sign: string | undefined
): string {
  return sign
    ? MODALITY_BY_SIGN[sign] ?? ""
    : "";
}

function buildCoreIntegration(
  sun?: PlanetData,
  moon?: PlanetData,
  ascendantSign?: string
): string {
  const sunSign = sun?.sign ?? "";
  const moonSign = moon?.sign ?? "";
  const ascSign = ascendantSign ?? "";

  const sunFr = getFrenchSign(sunSign) || "non précisé";
  const moonFr = getFrenchSign(moonSign) || "non précisé";
  const ascFr = getFrenchSign(ascSign) || "non précisé";

  const sunElement = getElement(sunSign);
  const moonElement = getElement(moonSign);
  const ascElement = getElement(ascSign);

  if (
    sunElement &&
    sunElement === moonElement &&
    sunElement === ascElement
  ) {
    return (
      `Votre Soleil en ${sunFr}, votre Lune en ${moonFr} et votre Ascendant ${ascFr} appartiennent tous à l’élément ${sunElement}. ` +
      "Votre identité, vos besoins émotionnels et votre manière d’aborder le monde parlent donc un langage semblable. " +
      "Cette cohérence renforce votre authenticité, mais peut aussi accentuer les réflexes propres à cet élément lorsque vous êtes sous pression."
    );
  }

  if (sunElement && sunElement === moonElement) {
    return (
      `Votre Soleil en ${sunFr} et votre Lune en ${moonFr} partagent l’élément ${sunElement}. ` +
      "Votre volonté consciente et votre monde émotionnel peuvent ainsi se soutenir naturellement. " +
      `Votre Ascendant ${ascFr}, lié à l’élément ${ascElement || "différent"}, ajoute toutefois une manière distincte de vous présenter et d’entrer dans l’action.`
    );
  }

  if (sunElement && sunElement === ascElement) {
    return (
      `Votre Soleil en ${sunFr} et votre Ascendant ${ascFr} partagent l’élément ${sunElement}. ` +
      "Ce que vous cherchez à devenir et ce que vous montrez spontanément peuvent donc paraître assez cohérents. " +
      `Votre Lune en ${moonFr}, liée à l’élément ${moonElement || "différent"}, révèle des besoins intérieurs plus nuancés qui demandent à être reconnus.`
    );
  }

  if (moonElement && moonElement === ascElement) {
    return (
      `Votre Lune en ${moonFr} et votre Ascendant ${ascFr} partagent l’élément ${moonElement}. ` +
      "Vos réactions émotionnelles peuvent être rapidement visibles dans votre manière d’aborder les situations. " +
      `Votre Soleil en ${sunFr}, lié à l’élément ${sunElement || "différent"}, vous invite à construire une direction consciente qui ne dépend pas uniquement de votre premier réflexe.`
    );
  }

  return (
    `Votre Soleil en ${sunFr}, votre Lune en ${moonFr} et votre Ascendant ${ascFr} appartiennent à des registres différents. ` +
    "Cette diversité donne de la richesse à votre personnalité, mais elle peut aussi créer des besoins qui ne progressent pas toujours au même rythme. " +
    "Votre intégration consiste à laisser votre identité, votre sensibilité et votre manière d’agir participer ensemble à vos décisions."
  );
}

function buildDecisionGuidance(
  mercury?: PlanetData,
  mars?: PlanetData,
  saturn?: PlanetData
): string {
  const mercuryFr =
    getFrenchSign(mercury?.sign) || "non précisé";
  const marsFr =
    getFrenchSign(mars?.sign) || "non précisé";
  const saturnFr =
    getFrenchSign(saturn?.sign) || "non précisé";

  const mercuryModality = getModality(mercury?.sign);
  const marsModality = getModality(mars?.sign);

  const pace =
    mercuryModality === "Cardinal" || marsModality === "Cardinal"
      ? "Vous pouvez ressentir le besoin de décider ou d’agir rapidement."
      : mercuryModality === "Fixe" || marsModality === "Fixe"
        ? "Vous avez tendance à approfondir ou à maintenir une position avant de changer de direction."
        : "Vous pouvez ajuster rapidement votre pensée et votre action selon les informations disponibles.";

  return (
    `Mercure en ${mercuryFr} décrit votre manière de réfléchir, Mars en ${marsFr} votre passage à l’action et Saturne en ${saturnFr} votre filtre de prudence. ` +
    `${pace} Votre meilleure décision apparaît lorsque vous laissez Mercure clarifier les faits, Mars nommer ce que vous voulez réellement et Saturne vérifier ce qui peut être soutenu dans la durée.`
  );
}

function buildRelationshipSynthesis(
  moon?: PlanetData,
  venus?: PlanetData,
  mars?: PlanetData
): string {
  const moonFr =
    getFrenchSign(moon?.sign) || "non précisé";
  const venusFr =
    getFrenchSign(venus?.sign) || "non précisé";
  const marsFr =
    getFrenchSign(mars?.sign) || "non précisé";

  const moonElement = getElement(moon?.sign);
  const venusElement = getElement(venus?.sign);

  const harmony =
    moonElement &&
    venusElement &&
    moonElement === venusElement
      ? "Vos besoins émotionnels et votre manière d’aimer utilisent un langage assez proche."
      : "Vos besoins émotionnels et votre manière d’aimer ne s’expriment pas nécessairement de la même façon.";

  return (
    `Votre Lune en ${moonFr} montre ce qui vous rassure, Vénus en ${venusFr} ce que vous valorisez dans une relation et Mars en ${marsFr} la manière dont vous exprimez le désir ou le désaccord. ` +
    `${harmony} Dans vos liens, votre équilibre grandit lorsque vous exprimez clairement vos besoins avant que Mars ne transforme une frustration silencieuse en réaction.`
  );
}

function buildProfessionalSynthesis(
  sun?: PlanetData,
  jupiter?: PlanetData,
  saturn?: PlanetData,
  midheavenSign?: string
): string {
  const sunFr =
    getFrenchSign(sun?.sign) || "non précisé";
  const jupiterFr =
    getFrenchSign(jupiter?.sign) || "non précisé";
  const saturnFr =
    getFrenchSign(saturn?.sign) || "non précisé";
  const mcFr =
    getFrenchSign(midheavenSign) || "non précisé";

  return (
    `Votre Soleil en ${sunFr} indique la qualité que vous cherchez à incarner, Jupiter en ${jupiterFr} la manière dont vous élargissez vos possibilités, Saturne en ${saturnFr} ce que vous construisez avec patience et le Milieu du Ciel en ${mcFr} votre direction sociale. ` +
    "Votre progression professionnelle devient plus solide lorsque l’ambition de Jupiter reste alignée sur votre identité solaire et peut être organisée par Saturne en étapes réalistes."
  );
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
    fontSize: 9.3,
    lineHeight: 1.63,
    textAlign: "justify",
  },

  twoColumns: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },

  halfCard: {
    flex: 1,
    minHeight: 164,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    padding: 15,
  },

  cardLabel: {
    color: GOLD,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    marginBottom: 7,
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

  profileRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },

  profileCard: {
    flex: 1,
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 11,
    padding: 13,
  },

  profileLabel: {
    color: CREAM,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },

  profileValue: {
    color: GOLD,
    fontSize: 12,
    marginBottom: 6,
  },

  profileText: {
    color: MUTED,
    fontSize: 8.1,
    lineHeight: 1.48,
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

  affirmationCard: {
    backgroundColor: CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 14,
    padding: 20,
    marginTop: 2,
    alignItems: "center",
  },

  affirmationLabel: {
    color: GOLD,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1.6,
    marginBottom: 10,
  },

  affirmationText: {
    color: CREAM,
    fontSize: 14,
    lineHeight: 1.5,
    textAlign: "center",
    fontStyle: "italic",
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function PdfSignatureIntegrationGuide({
  firstName,
  planets,
  angles,
}: PdfSignatureIntegrationGuideProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const safeAngles = angles ?? ({ ascendant:0, midheaven:0, descendant:180, imumCoeli:180 } as SignatureAngles);

  const sun = getPlanet(
    safePlanets,
    "Sun"
  );

  const moon = getPlanet(
    safePlanets,
    "Moon"
  );

  const mercury = getPlanet(
    safePlanets,
    "Mercury"
  );

  const venus = getPlanet(
    safePlanets,
    "Venus"
  );

  const mars = getPlanet(
    safePlanets,
    "Mars"
  );

  const saturn = getPlanet(
    safePlanets,
    "Saturn"
  );

  const jupiter = getPlanet(
    safePlanets,
    "Jupiter"
  );

  const ascendantSign =
    longitudeToSign(
      safeAngles.ascendant
    );

  const midheavenSign =
    longitudeToSign(
      safeAngles.midheaven
    );

  const profileSign =
    sun?.sign || ascendantSign;

  const profile =
    INTEGRATION_BY_SIGN[
      profileSign
    ] ??
    INTEGRATION_BY_SIGN.Scorpio;

  const moonGuidance =
    MOON_GUIDANCE[
      moon?.sign ?? ""
    ] ??
    "Votre Lune montre la manière dont votre monde émotionnel retrouve naturellement un sentiment de sécurité.";

  const saturnGuidance =
    SATURN_GUIDANCE[
      saturn?.sign ?? ""
    ] ??
    "Saturne montre la qualité que vous développez progressivement grâce à la patience, aux limites et à l’expérience.";

  const displayName =
    getDisplayName(firstName);

  const coreIntegration =
    buildCoreIntegration(
      sun,
      moon,
      ascendantSign
    );

  const decisionGuidance =
    buildDecisionGuidance(
      mercury,
      mars,
      saturn
    );

  const relationshipSynthesis =
    buildRelationshipSynthesis(
      moon,
      venus,
      mars
    );

  const professionalSynthesis =
    buildProfessionalSynthesis(
      sun,
      jupiter,
      saturn,
      midheavenSign
    );

  return (
    <>
      {/* Page 1 — Guide personnel */}

      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfSignatureBrandHeader />

        <View style={styles.content}>
          <View style={styles.hero}>
            <View
              style={
                styles.heroIconContainer
              }
            >
              <Image
                src={INTEGRATION_GUIDE_ICON}
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
                Votre guide d’intégration
              </Text>

              <Text
                style={styles.subtitle}
              >
                Des repères concrets pour
                utiliser votre thème dans vos
                choix, vos relations et votre
                évolution quotidienne.
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
              Votre direction d’intégration
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              {profile.title}
            </Text>

            <Text
              style={styles.paragraph}
            >
              {displayName
                ? `${displayName}, `
                : ""}
              {profile.introduction}
              {"\n\n"}
              {coreIntegration}
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                À observer
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Le réflexe qui mérite votre
                attention
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.observe}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                À nourrir
              </Text>

              <Text
                style={styles.cardTitle}
              >
                La qualité qui soutient votre
                évolution
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.nourish}
              </Text>
            </View>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                À équilibrer
              </Text>

              <Text
                style={styles.cardTitle}
              >
                La polarité à développer
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.balance}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                À libérer
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui ne doit plus diriger
                vos choix
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.release}
              </Text>
            </View>
          </View>

          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>
              « Votre thème devient réellement
              utile lorsqu’il vous aide à
              reconnaître vos automatismes,
              à mieux comprendre vos besoins
              et à choisir une réponse plus
              consciente. »
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 2 — Mise en pratique */}

      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfSignatureBrandHeader />

        <View style={styles.content}>
          <View
            style={
              styles.introductionCard
            }
          >
            <Text
              style={styles.sectionLabel}
            >
              Votre plan d’action personnel
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Intégrer votre thème dans les
              domaines essentiels de votre vie
            </Text>

            <Text
              style={styles.paragraph}
            >
              L’intégration ne demande pas de
              modifier toute votre vie en une
              seule fois. Elle se construit
              dans les décisions répétées, les
              habitudes simples et les réponses
              différentes que vous choisissez
              face aux situations familières.
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Dans votre quotidien
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.dailyAction}
              {"\n\n"}
              {decisionGuidance}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Dans vos relations
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.relationshipAction}
              {"\n\n"}
              {relationshipSynthesis}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Dans votre vie professionnelle
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.professionalAction}
              {"\n\n"}
              {professionalSynthesis}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Dans votre monde intérieur
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.innerAction}
              {"\n\n"}
              {moonGuidance}
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 3 — Synthèse pratique */}

      <Page
        size="A4"
        style={pdfStyles.page}
        wrap={false}
      >
        <PdfSignatureBrandHeader />

        <View style={styles.content}>
          <View
            style={
              styles.introductionCard
            }
          >
            <Text
              style={styles.sectionLabel}
            >
              Vos repères astrologiques
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Quatre forces à utiliser ensemble
            </Text>

            <Text
              style={styles.paragraph}
            >
              Le Soleil donne la direction,
              la Lune protège votre équilibre
              émotionnel, Jupiter ouvre les
              possibilités et Saturne construit
              la maîtrise.
              {"\n\n"}
              {coreIntegration}
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
                La direction que vous cherchez
                à développer consciemment.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Lune
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  moon?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Vos besoins émotionnels et
                votre sécurité intérieure.
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
                Votre confiance, votre
                expansion et vos possibilités.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Saturne
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  saturn?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre maîtrise, vos limites et
                vos apprentissages durables.
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Pour protéger votre équilibre
              émotionnel
            </Text>

            <Text
              style={styles.paragraph}
            >
              {moonGuidance}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Pour construire votre maîtrise
            </Text>

            <Text
              style={styles.paragraph}
            >
              {saturnGuidance}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Trois engagements personnels
            </Text>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Reconnaître vos besoins avant
                qu’ils ne deviennent de la
                fatigue, de la frustration ou
                un retrait.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Choisir une action réaliste
                plutôt que d’attendre une
                transformation parfaite.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Relire ce guide lorsque vous
                traversez une période de doute,
                de changement ou de décision.
              </Text>
            </View>
          </View>

          <View
            style={styles.affirmationCard}
          >
            <Text
              style={styles.affirmationLabel}
            >
              Votre affirmation Signature
            </Text>

            <Text
              style={styles.affirmationText}
            >
              « {profile.affirmation} »
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>
    </>
  );
}
