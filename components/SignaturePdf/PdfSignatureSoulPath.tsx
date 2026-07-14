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

const SOUL_PATH_ICON = assetUrl(
  "/astrology/soul-path.png"
);

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureSoulPathProps = {
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

type SoulPathProfile = {
  title: string;
  introduction: string;
  oldPattern: string;
  evolution: string;
  innerNeed: string;
  transformation: string;
  alignment: string;
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
| Chemin de l’âme selon le Soleil
|--------------------------------------------------------------------------
*/

const SOUL_PATH_BY_SIGN: Record<
  string,
  SoulPathProfile
> = {
  Aries: {
    title:
      "Apprendre à choisir votre propre direction",
    introduction:
      "Votre chemin intérieur vous invite à développer une relation consciente avec le courage, l’initiative et l’affirmation personnelle. Votre âme cherche à expérimenter la vie directement, à prendre des décisions et à découvrir ce qui devient possible lorsque vous cessez d’attendre une permission extérieure.",
    oldPattern:
      "Vous pouvez parfois réagir très rapidement, confondre mouvement et véritable progression ou croire que votre force dépend de votre capacité à ne jamais hésiter.",
    evolution:
      "Votre évolution consiste à transformer l’impulsion en volonté consciente. Vous progressez lorsque vous choisissez vos combats, assumez vos désirs et apprenez à agir sans écraser votre sensibilité ni celle des autres.",
    innerNeed:
      "Votre âme a besoin de sentir qu’elle demeure libre d’initier, d’explorer et de se définir par elle-même.",
    transformation:
      "Votre transformation s’accomplit lorsque votre courage devient une force créatrice plutôt qu’une réaction défensive.",
    alignment:
      "Vous êtes aligné lorsque vos décisions sont franches, responsables et suffisamment réfléchies pour soutenir une direction durable.",
    affirmation:
      "J’avance avec courage sans perdre la conscience de ce que je construis.",
  },

  Taurus: {
    title:
      "Transformer la sécurité en véritable stabilité intérieure",
    introduction:
      "Votre chemin intérieur vous invite à développer la patience, l’enracinement et une relation plus consciente avec vos valeurs. Votre âme cherche à bâtir, à protéger et à donner une forme durable à ce qu’elle considère comme essentiel.",
    oldPattern:
      "Vous pouvez parfois maintenir une situation uniquement parce qu’elle est connue, résister au changement ou associer la sécurité à ce que vous possédez et contrôlez.",
    evolution:
      "Votre évolution consiste à comprendre que la stabilité véritable ne dépend pas de l’immobilité. Elle naît de votre capacité à vous adapter sans renier ce qui compte profondément pour vous.",
    innerNeed:
      "Votre âme a besoin de continuité, de simplicité, de beauté et de repères concrets.",
    transformation:
      "Votre transformation s’accomplit lorsque vous acceptez de renouveler vos fondations au lieu de protéger des structures devenues limitantes.",
    alignment:
      "Vous êtes aligné lorsque vos choix respectent votre rythme tout en laissant une place réelle à l’évolution.",
    affirmation:
      "Je peux évoluer sans perdre ce qui donne un sens profond à ma vie.",
  },

  Gemini: {
    title:
      "Passer de la curiosité à une compréhension vivante",
    introduction:
      "Votre chemin intérieur vous invite à explorer les idées, les mots et les liens qui permettent de mieux comprendre le monde. Votre âme cherche à apprendre, à transmettre et à créer des ponts entre différentes perspectives.",
    oldPattern:
      "Vous pouvez parfois multiplier les informations, changer rapidement de direction ou demeurer dans l’analyse afin d’éviter un engagement plus profond.",
    evolution:
      "Votre évolution consiste à choisir certaines idées, à les approfondir et à leur donner une véritable continuité. Votre intelligence devient plus puissante lorsqu’elle relie la curiosité à l’expérience.",
    innerNeed:
      "Votre âme a besoin d’échanges, de mouvement mental et de liberté dans sa manière de penser.",
    transformation:
      "Votre transformation s’accomplit lorsque vous cessez de chercher toutes les réponses à la fois et acceptez d’habiter pleinement une question importante.",
    alignment:
      "Vous êtes aligné lorsque votre communication devient claire, sincère et capable de transmettre une compréhension réellement intégrée.",
    affirmation:
      "Je transforme mes idées en connaissances vivantes et utiles.",
  },

  Cancer: {
    title:
      "Créer une sécurité émotionnelle qui vous appartient",
    introduction:
      "Votre chemin intérieur vous invite à reconnaître la profondeur de votre sensibilité, de votre mémoire et de vos besoins affectifs. Votre âme cherche à comprendre ce qui nourrit véritablement le sentiment d’appartenance.",
    oldPattern:
      "Vous pouvez parfois demeurer attaché au passé, porter les émotions de votre entourage ou croire que votre valeur dépend du rôle protecteur que vous occupez.",
    evolution:
      "Votre évolution consiste à prendre soin de vous avec la même présence que celle que vous offrez aux autres. Vous progressez lorsque vos émotions deviennent des informations plutôt que des prisons.",
    innerNeed:
      "Votre âme a besoin de douceur, de sécurité, d’intimité et de liens où elle peut demeurer authentique.",
    transformation:
      "Votre transformation s’accomplit lorsque vous libérez les mémoires qui ne correspondent plus à votre présent.",
    alignment:
      "Vous êtes aligné lorsque vous protégez ce qui est précieux sans vous enfermer ni vous oublier.",
    affirmation:
      "Je crée en moi la sécurité que j’ai longtemps cherchée autour de moi.",
  },

  Leo: {
    title:
      "Passer du besoin d’être reconnu au courage de rayonner",
    introduction:
      "Votre chemin intérieur vous invite à développer une expression personnelle vivante, créative et sincère. Votre âme cherche à reconnaître sa valeur et à partager une lumière qui ne dépend pas entièrement du regard extérieur.",
    oldPattern:
      "Vous pouvez parfois mesurer votre valeur à l’attention reçue, cacher votre vulnérabilité derrière la fierté ou craindre que votre expression ne soit pas suffisamment reconnue.",
    evolution:
      "Votre évolution consiste à créer depuis votre centre. Vous progressez lorsque vous assumez ce qui vous rend unique, même lorsque le résultat n’est pas immédiatement applaudi.",
    innerNeed:
      "Votre âme a besoin de joie, de création, de chaleur et de la liberté d’exprimer ce qu’elle porte.",
    transformation:
      "Votre transformation s’accomplit lorsque votre rayonnement devient un partage plutôt qu’une preuve de votre valeur.",
    alignment:
      "Vous êtes aligné lorsque vous prenez votre place avec générosité, dignité et simplicité.",
    affirmation:
      "Ma lumière a de la valeur même lorsqu’elle n’est pas immédiatement reconnue.",
  },

  Virgo: {
    title:
      "Transformer l’exigence en maîtrise bienveillante",
    introduction:
      "Votre chemin intérieur vous invite à développer le discernement, la précision et une relation plus consciente avec le service. Votre âme cherche à améliorer, à comprendre et à devenir utile sans se réduire à sa performance.",
    oldPattern:
      "Vous pouvez parfois vous concentrer sur ce qui manque, retarder une action par peur de l’imperfection ou associer votre valeur au fait d’être irréprochable.",
    evolution:
      "Votre évolution consiste à reconnaître que votre compétence grandit grâce à l’expérience. Vous progressez lorsque vous remplacez la critique constante par une amélioration concrète et réaliste.",
    innerNeed:
      "Votre âme a besoin de clarté, d’ordre, d’utilité et de sentir que ses efforts produisent un effet tangible.",
    transformation:
      "Votre transformation s’accomplit lorsque vous utilisez votre intelligence pour soutenir la vie plutôt que pour surveiller chaque erreur.",
    alignment:
      "Vous êtes aligné lorsque votre exigence devient une ressource, sans devenir une condamnation permanente.",
    affirmation:
      "Je peux progresser sans exiger de moi une perfection impossible.",
  },

  Libra: {
    title:
      "Construire l’harmonie sans abandonner votre vérité",
    introduction:
      "Votre chemin intérieur vous invite à comprendre la relation, la coopération et l’équilibre entre vous et les autres. Votre âme cherche à créer des liens plus justes sans perdre son propre centre.",
    oldPattern:
      "Vous pouvez parfois éviter les désaccords, retarder vos décisions ou adapter excessivement votre position afin de préserver une paix fragile.",
    evolution:
      "Votre évolution consiste à développer une diplomatie qui inclut votre propre vérité. Vous progressez lorsque vous comprenez qu’une relation saine peut supporter une différence, une limite et une décision claire.",
    innerNeed:
      "Votre âme a besoin de beauté, de respect, d’échange et de relations fondées sur une véritable réciprocité.",
    transformation:
      "Votre transformation s’accomplit lorsque vous cessez d’associer l’amour à l’effacement personnel.",
    alignment:
      "Vous êtes aligné lorsque vous créez l’harmonie à partir d’un centre intérieur stable.",
    affirmation:
      "Je peux aimer, collaborer et demeurer fidèle à moi-même.",
  },

  Scorpio: {
    title:
      "Transformer la peur de perdre en puissance de renaissance",
    introduction:
      "Votre chemin intérieur vous invite à explorer les zones profondes de l’expérience humaine : l’attachement, la confiance, la vulnérabilité, la perte et la transformation. Votre âme cherche à comprendre ce qui demeure lorsque les anciennes structures disparaissent.",
    oldPattern:
      "Vous pouvez parfois retenir, contrôler, tester ou dissimuler votre vulnérabilité afin de réduire le risque d’être blessé ou trahi.",
    evolution:
      "Votre évolution consiste à reconnaître que votre pouvoir ne dépend pas de votre capacité à tout maîtriser. Vous progressez lorsque vous laissez mourir ce qui n’a plus de vérité et acceptez de reconstruire depuis un espace plus authentique.",
    innerNeed:
      "Votre âme a besoin de profondeur, de loyauté, d’intensité et de relations capables de soutenir une véritable transformation.",
    transformation:
      "Votre transformation s’accomplit lorsque vous choisissez la lucidité sans vous enfermer dans la méfiance.",
    alignment:
      "Vous êtes aligné lorsque votre intensité devient une force de guérison, de création et de renouvellement.",
    affirmation:
      "Je peux traverser le changement sans perdre ma puissance intérieure.",
  },

  Sagittarius: {
    title:
      "Transformer la recherche de liberté en quête de vérité",
    introduction:
      "Votre chemin intérieur vous invite à explorer, à apprendre et à élargir votre compréhension de la vie. Votre âme cherche une direction porteuse de sens et une vérité suffisamment vaste pour soutenir son besoin d’évolution.",
    oldPattern:
      "Vous pouvez parfois fuir les limites, multiplier les expériences ou défendre une conviction avant d’avoir réellement exploré toute sa complexité.",
    evolution:
      "Votre évolution consiste à unir liberté et responsabilité. Vous progressez lorsque vos découvertes deviennent une sagesse vécue plutôt qu’une succession de possibilités.",
    innerNeed:
      "Votre âme a besoin d’espace, d’espérance, de mouvement et d’une vision qui donne un sens à ses expériences.",
    transformation:
      "Votre transformation s’accomplit lorsque vous cessez de chercher ailleurs ce que l’expérience présente cherche déjà à vous enseigner.",
    alignment:
      "Vous êtes aligné lorsque votre liberté nourrit votre conscience et votre capacité de transmission.",
    affirmation:
      "J’élargis mes horizons sans fuir les responsabilités qui donnent du sens à mon chemin.",
  },

  Capricorn: {
    title:
      "Transformer le devoir en autorité intérieure",
    introduction:
      "Votre chemin intérieur vous invite à développer la patience, la responsabilité et une capacité réelle à construire dans le temps. Votre âme cherche à créer une œuvre, une structure ou une maîtrise capable de résister aux épreuves.",
    oldPattern:
      "Vous pouvez parfois vous imposer une responsabilité excessive, croire que votre valeur dépend uniquement de vos résultats ou craindre de perdre le contrôle si vous ralentissez.",
    evolution:
      "Votre évolution consiste à reconnaître que la véritable autorité ne repose pas seulement sur l’effort. Elle vient aussi de la cohérence, de l’expérience et du respect de vos propres limites.",
    innerNeed:
      "Votre âme a besoin de direction, de solidité, de respect et du sentiment que ses efforts contribuent à une construction durable.",
    transformation:
      "Votre transformation s’accomplit lorsque vous cessez de faire de la difficulté une preuve obligatoire de mérite.",
    alignment:
      "Vous êtes aligné lorsque votre ambition soutient votre intégrité et non votre épuisement.",
    affirmation:
      "Je construis avec patience sans sacrifier mon humanité à mes objectifs.",
  },

  Aquarius: {
    title:
      "Transformer la différence en contribution consciente",
    introduction:
      "Votre chemin intérieur vous invite à préserver votre liberté de pensée, à remettre en question les modèles trop étroits et à participer à une évolution plus collective. Votre âme cherche à comprendre comment son originalité peut devenir utile.",
    oldPattern:
      "Vous pouvez parfois vous détacher émotionnellement, rejeter une structure uniquement parce qu’elle semble conventionnelle ou vous protéger derrière une position d’observateur.",
    evolution:
      "Votre évolution consiste à relier l’indépendance à la participation. Vous progressez lorsque vos idées nouvelles prennent une forme concrète et restent reliées aux besoins humains.",
    innerNeed:
      "Votre âme a besoin d’autonomie, de vision, d’amitié et de la liberté d’imaginer une autre manière de vivre.",
    transformation:
      "Votre transformation s’accomplit lorsque vous acceptez que l’appartenance n’exige pas la disparition de votre individualité.",
    alignment:
      "Vous êtes aligné lorsque votre différence crée un espace d’ouverture plutôt qu’une distance permanente.",
    affirmation:
      "Ma singularité devient une force lorsque je la relie à une contribution concrète.",
  },

  Pisces: {
    title:
      "Transformer l’hypersensibilité en présence inspirée",
    introduction:
      "Votre chemin intérieur vous invite à développer la compassion, l’intuition et une relation consciente avec le monde invisible des émotions, des symboles et de l’imagination. Votre âme cherche à relier ce qui semble séparé.",
    oldPattern:
      "Vous pouvez parfois absorber les émotions environnantes, idéaliser, éviter une réalité difficile ou perdre vos repères dans les besoins des autres.",
    evolution:
      "Votre évolution consiste à donner une forme concrète à votre sensibilité. Vous progressez lorsque votre intuition s’accompagne de limites, d’habitudes et de choix suffisamment clairs.",
    innerNeed:
      "Votre âme a besoin de silence, d’inspiration, de compassion et d’espaces où elle peut retrouver sa propre fréquence intérieure.",
    transformation:
      "Votre transformation s’accomplit lorsque vous cessez de confondre ouverture du cœur et absence de protection.",
    alignment:
      "Vous êtes aligné lorsque votre sensibilité devient une création, une présence ou une aide consciente.",
    affirmation:
      "Je protège ma sensibilité afin qu’elle puisse devenir une véritable force.",
  },
};

/*
|--------------------------------------------------------------------------
| Influence de la Lune
|--------------------------------------------------------------------------
*/

const MOON_INNER_NEEDS: Record<
  string,
  string
> = {
  Aries:
    "Votre Lune en Bélier a besoin de mouvement, de franchise et de sentir qu’elle peut réagir librement. Votre équilibre émotionnel s’améliore lorsque vous exprimez rapidement ce que vous ressentez sans laisser l’impulsion décider seule de la suite.",

  Taurus:
    "Votre Lune en Taureau a besoin de stabilité, de calme et de repères sensoriels. Votre équilibre émotionnel se reconstruit lorsque vous ralentissez, revenez au corps et retrouvez un environnement sécurisant.",

  Gemini:
    "Votre Lune en Gémeaux a besoin de parler, de comprendre et de mettre des mots sur ce qu’elle traverse. Votre équilibre émotionnel dépend souvent de votre capacité à créer du mouvement dans vos pensées.",

  Cancer:
    "Votre Lune en Cancer a besoin d’intimité, de continuité et de liens protecteurs. Votre équilibre émotionnel passe par la reconnaissance de vos besoins plutôt que par leur dissimulation.",

  Leo:
    "Votre Lune en Lion a besoin de chaleur, de reconnaissance et d’une expression affective généreuse. Votre équilibre émotionnel grandit lorsque vous vous accordez le droit de créer et d’être visible.",

  Virgo:
    "Votre Lune en Vierge a besoin d’ordre, de clarté et du sentiment de pouvoir améliorer une situation. Votre équilibre émotionnel passe par des gestes simples, utiles et concrets.",

  Libra:
    "Votre Lune en Balance a besoin d’harmonie, de respect et de relations équilibrées. Votre paix intérieure devient plus stable lorsque vous ne sacrifiez pas votre vérité pour éviter un désaccord.",

  Scorpio:
    "Votre Lune en Scorpion a besoin de profondeur, de confiance et d’une loyauté réelle. Votre équilibre émotionnel passe par la possibilité de ressentir intensément sans devoir contrôler chaque conséquence.",

  Sagittarius:
    "Votre Lune en Sagittaire a besoin d’espace, de mouvement et d’une perspective porteuse d’espoir. Votre équilibre émotionnel revient lorsque vous pouvez redonner du sens à ce que vous traversez.",

  Capricorn:
    "Votre Lune en Capricorne a besoin de solidité, de maîtrise et de sentir qu’elle demeure capable de faire face. Votre équilibre émotionnel s’approfondit lorsque vous vous permettez aussi de recevoir du soutien.",

  Aquarius:
    "Votre Lune en Verseau a besoin de liberté, de recul et d’un environnement où sa différence peut être respectée. Votre équilibre émotionnel grandit lorsque vous restez connecté à vos émotions sans vous y sentir enfermé.",

  Pisces:
    "Votre Lune en Poissons a besoin de douceur, de silence et d’un espace permettant de se retirer des influences extérieures. Votre équilibre émotionnel dépend de limites claires et d’une expression créative ou intuitive.",
};

/*
|--------------------------------------------------------------------------
| Influence de Pluton
|--------------------------------------------------------------------------
*/

const PLUTO_TRANSFORMATION: Record<
  string,
  string
> = {
  Aries:
    "Pluton en Bélier intensifie les transformations liées à l’autonomie, au courage et à la manière d’exercer votre volonté.",

  Taurus:
    "Pluton en Taureau transforme profondément votre rapport à la sécurité, aux ressources et à ce que vous considérez comme durable.",

  Gemini:
    "Pluton en Gémeaux pousse votre pensée à dépasser les réponses superficielles et transforme votre rapport aux mots, aux idées et à l’information.",

  Cancer:
    "Pluton en Cancer transforme votre rapport aux racines, à la famille, à la mémoire et à la sécurité émotionnelle.",

  Leo:
    "Pluton en Lion intensifie votre besoin de créer, de rayonner et de découvrir une puissance personnelle plus authentique.",

  Virgo:
    "Pluton en Vierge transforme votre rapport au contrôle, à la perfection, au service et à la maîtrise du quotidien.",

  Libra:
    "Pluton en Balance transforme votre manière de vivre l’engagement, la dépendance, la justice et les rapports de pouvoir dans les relations.",

  Scorpio:
    "Pluton en Scorpion amplifie votre capacité de régénération et vous invite à traverser consciemment les processus de perte, de vérité et de renaissance.",

  Sagittarius:
    "Pluton en Sagittaire transforme vos croyances, votre vision du monde et votre rapport à la vérité.",

  Capricorn:
    "Pluton en Capricorne transforme votre rapport à l’autorité, aux structures, à l’ambition et à la réussite.",

  Aquarius:
    "Pluton en Verseau transforme votre rapport à la liberté, au collectif, à la technologie et aux modèles sociaux.",

  Pisces:
    "Pluton en Poissons transforme votre rapport à la compassion, aux frontières émotionnelles, à l’intuition et au lâcher-prise.",
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
      english.toLowerCase() ===
        trimmedSign.toLowerCase() ||
      french.toLowerCase() ===
        trimmedSign.toLowerCase()
  );

  return entry?.[0] ?? trimmedSign;
}

function getFrenchSign(
  sign: unknown
): string {
  const normalized = normalizeSign(sign);

  return normalized
    ? SIGN_NAMES[normalized] ?? normalized
    : "";
}

function getPlanet(
  planets: SignaturePlanet[],
  name: string
): PlanetData | undefined {
  const safePlanets = Array.isArray(planets)
    ? planets
    : [];

  const planet = safePlanets.find(
    (item) =>
      item &&
      typeof item.name === "string" &&
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

  return normalized || "";
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

  profileLabel: {
    color: CREAM,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },

  profileValue: {
    color: GOLD,
    fontSize: 13,
    marginBottom: 6,
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

  bulletRow: {
    flexDirection: "row",
    marginBottom: 10,
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

export default function PdfSignatureSoulPath({
  firstName,
  planets,
  angles,
}: PdfSignatureSoulPathProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const safeAngles = angles ?? ({ ascendant:0, midheaven:0, descendant:180, imumCoeli:180 } as SignatureAngles);

  const sun = getPlanet(safePlanets, "Sun");
  const moon = getPlanet(planets, "Moon");
  const pluto = getPlanet(planets, "Pluto");
  const saturn = getPlanet(
    safePlanets,
    "Saturn"
  );

  const ascendantSign =
    longitudeToSign(
      safeAngles.ascendant
    );

  const sunSign =
    sun?.sign || ascendantSign;

  const profile =
    SOUL_PATH_BY_SIGN[sunSign] ??
    SOUL_PATH_BY_SIGN.Scorpio;

  const moonNeed =
    MOON_INNER_NEEDS[
      moon?.sign ?? ""
    ] ??
    "Votre Lune révèle les conditions émotionnelles dont vous avez besoin pour rester relié à vous-même et traverser les périodes de transformation avec davantage de stabilité.";

  const plutoTransformation =
    PLUTO_TRANSFORMATION[
      pluto?.sign ?? ""
    ] ??
    "Pluton décrit les transformations profondes qui vous invitent à abandonner les anciens mécanismes de protection et à reconstruire depuis une vérité plus intérieure.";

  const displayName =
    getDisplayName(firstName);

  return (
    <>
      {/* Page 1 — Chemin intérieur */}

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
                src={SOUL_PATH_ICON}
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
                Le chemin de votre âme
              </Text>

              <Text
                style={styles.subtitle}
              >
                Les mouvements intérieurs qui
                vous invitent à dépasser vos
                anciens réflexes et à devenir
                plus pleinement vous-même.
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
              Votre axe d’évolution
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
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Ancien réflexe
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui peut vous retenir
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.oldPattern}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Mouvement évolutif
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce que votre parcours cherche
                à développer
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.evolution}
              </Text>
            </View>
          </View>

          <View
            style={styles.quoteCard}
          >
            <Text
              style={styles.quoteText}
            >
              « Votre évolution ne consiste
              pas à rejeter ce que vous avez
              été. Elle consiste à utiliser
              vos expériences comme un passage
              vers une expression plus libre
              et plus consciente de vous-même. »
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 2 — Besoins et transformation */}

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
              Vos forces intérieures
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Comprendre ce qui vous nourrit
              et ce qui vous transforme
            </Text>

            <Text
              style={styles.paragraph}
            >
              Le Soleil montre la conscience
              que vous êtes invité à
              développer. La Lune révèle les
              besoins émotionnels qui doivent
              être respectés pour que cette
              évolution demeure vivable.
              Pluton indique les zones où
              votre parcours exige une
              transformation profonde, tandis
              que Saturne représente les
              apprentissages qui demandent du
              temps et de la maturité.
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
                La conscience que vous êtes
                appelé à développer et à
                exprimer davantage.
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
                Vos besoins affectifs,
                protecteurs et instinctifs.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Pluton
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  pluto?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre capacité à traverser
                les pertes, les crises et les
                renaissances.
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Ce dont votre monde intérieur a
              besoin
            </Text>

            <Text
              style={styles.paragraph}
            >
              {moonNeed}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre processus de transformation
            </Text>

            <Text
              style={styles.paragraph}
            >
              {plutoTransformation}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre besoin profond d’alignement
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.innerNeed}
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 3 — Intégration */}

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
              Intégration consciente
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Faire de vos expériences un
              véritable chemin d’évolution
            </Text>

            <Text
              style={styles.paragraph}
            >
              Votre chemin intérieur ne suit
              pas une ligne parfaitement
              droite. Certaines situations
              peuvent revenir jusqu’à ce que
              vous puissiez y répondre depuis
              une conscience différente.
              L’évolution apparaît lorsque
              vos choix ne reproduisent plus
              automatiquement les anciens
              mécanismes de protection.
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Transformation
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce que vous êtes invité à
                libérer
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.transformation}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Alignement
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Comment reconnaître que vous
                avancez
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.alignment}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Trois questions à vous poser
            </Text>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Est-ce que cette décision
                correspond à ce que je ressens
                réellement aujourd’hui, ou
                reproduit-elle une ancienne
                manière de me protéger ?
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Quelle émotion ou quelle peur
                cherche à influencer mon choix,
                et de quoi ai-je besoin pour
                l’écouter sans lui céder toute
                la direction ?
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Quelle version plus consciente
                de moi-même pourrait répondre
                différemment à cette situation ?
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Le rôle de Saturne dans votre
              évolution
            </Text>

            <Text
              style={styles.paragraph}
            >
              Saturne en{" "}
              {getFrenchSign(
                saturn?.sign
              ) || "votre thème"}{" "}
              rappelle que certaines qualités
              ne se révèlent qu’avec le temps.
              Ce qui semble d’abord représenter
              une limite peut devenir une
              maîtrise profonde lorsque vous
              acceptez de progresser avec
              patience, constance et réalisme.
            </Text>
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
