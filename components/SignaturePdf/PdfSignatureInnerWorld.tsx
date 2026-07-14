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

const INNER_WORLD_ICON = assetUrl(
  "/astrology/inner-world.png"
);

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureInnerWorldProps = {
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

type EmotionalProfile = {
  title: string;
  introduction: string;
  instinctiveReaction: string;
  emotionalNeed: string;
  protection: string;
  underPressure: string;
  healing: string;
  relationshipNeed: string;
  balanceKey: string;
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
| Profil émotionnel selon la Lune
|--------------------------------------------------------------------------
*/

const EMOTIONAL_PROFILE_BY_SIGN: Record<
  string,
  EmotionalProfile
> = {
  Aries: {
    title:
      "Une vie émotionnelle vive, directe et immédiatement mobilisée",
    introduction:
      "Votre monde intérieur réagit rapidement. Vous ressentez souvent une émotion comme un mouvement qui demande une réponse, une action ou une décision. Votre sensibilité n’est pas passive : elle cherche naturellement une manière d’avancer.",
    instinctiveReaction:
      "Votre premier réflexe consiste souvent à agir, à répondre ou à reprendre rapidement le contrôle de la situation.",
    emotionalNeed:
      "Vous avez besoin de liberté émotionnelle, de franchise et de sentir que vos réactions peuvent être exprimées sans être constamment retenues.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par l’impatience, l’indépendance ou une apparente combativité.",
    underPressure:
      "Sous pression, vous pouvez réagir avant d’avoir identifié précisément ce que vous ressentez.",
    healing:
      "Votre apaisement passe par le mouvement, une décision claire et la possibilité de transformer l’émotion en action constructive.",
    relationshipNeed:
      "Vous avez besoin de relations vivantes, honnêtes et capables de respecter votre autonomie.",
    balanceKey:
      "Créer un espace entre l’émotion et la réaction afin de choisir consciemment votre réponse.",
  },

  Taurus: {
    title:
      "Une sensibilité stable qui recherche la continuité et la sécurité",
    introduction:
      "Votre monde intérieur a besoin de temps pour absorber les expériences. Vous ressentez profondément, mais vous préférez souvent laisser l’émotion se déposer avant de l’exprimer. La stabilité extérieure influence fortement votre équilibre intérieur.",
    instinctiveReaction:
      "Votre premier réflexe consiste à préserver vos repères, à ralentir et à éviter les changements trop brusques.",
    emotionalNeed:
      "Vous avez besoin de constance, de douceur, de sécurité matérielle et d’un environnement prévisible.",
    protection:
      "Vous pouvez protéger votre vulnérabilité en vous attachant à vos habitudes ou en refusant d’exprimer ce qui pourrait déstabiliser une relation.",
    underPressure:
      "Sous pression, vous pouvez vous fermer, résister ou maintenir une position longtemps après que la situation a évolué.",
    healing:
      "Votre apaisement passe par le corps, le repos, les gestes simples, la nature et le retour à des repères concrets.",
    relationshipNeed:
      "Vous avez besoin de fidélité, de présence et de preuves régulières de stabilité.",
    balanceKey:
      "Accepter que l’évolution ne détruit pas nécessairement la sécurité et peut parfois la renforcer.",
  },

  Gemini: {
    title:
      "Une vie émotionnelle mobile qui cherche à comprendre et à nommer",
    introduction:
      "Votre monde intérieur se transforme rapidement en pensée, en questions et en besoin d’échange. Mettre des mots sur ce que vous ressentez vous aide à reprendre de la distance et à mieux comprendre votre expérience.",
    instinctiveReaction:
      "Votre premier réflexe consiste à analyser, parler, comparer ou chercher une nouvelle perspective.",
    emotionalNeed:
      "Vous avez besoin de mouvement mental, de dialogue et de variété dans votre environnement.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par l’humour, l’intellectualisation ou le changement rapide de sujet.",
    underPressure:
      "Sous pression, vos pensées peuvent se multiplier et rendre difficile l’identification de l’émotion centrale.",
    healing:
      "Votre apaisement passe par l’écriture, l’échange, la compréhension et une respiration mentale plus légère.",
    relationshipNeed:
      "Vous avez besoin de relations où la communication reste ouverte et stimulante.",
    balanceKey:
      "Ne pas seulement expliquer l’émotion, mais prendre le temps de la ressentir réellement.",
  },

  Cancer: {
    title:
      "Une sensibilité profonde, protectrice et fortement reliée à la mémoire",
    introduction:
      "Votre monde intérieur est riche, réceptif et intimement relié au sentiment d’appartenance. Vous percevez rapidement les atmosphères, les changements d’humeur et les besoins non exprimés.",
    instinctiveReaction:
      "Votre premier réflexe consiste à protéger, vous retirer ou chercher un espace émotionnel sécurisant.",
    emotionalNeed:
      "Vous avez besoin de douceur, d’intimité, de continuité et de liens où vous pouvez demeurer pleinement vous-même.",
    protection:
      "Vous pouvez protéger votre vulnérabilité en cachant vos besoins derrière le soin offert aux autres.",
    underPressure:
      "Sous pression, le passé peut revenir avec force et influencer votre perception du présent.",
    healing:
      "Votre apaisement passe par un lieu sécurisant, l’expression des émotions et la reconnaissance de vos véritables besoins.",
    relationshipNeed:
      "Vous avez besoin de loyauté, de tendresse et d’une présence affective constante.",
    balanceKey:
      "Prendre soin des autres sans faire de leur bien-être la condition de votre propre sécurité.",
  },

  Leo: {
    title:
      "Une vie émotionnelle chaleureuse qui cherche à être reconnue et partagée",
    introduction:
      "Votre monde intérieur a besoin d’expression, de chaleur et de reconnaissance sincère. Vos émotions prennent souvent une dimension créative, généreuse et visible.",
    instinctiveReaction:
      "Votre premier réflexe consiste à exprimer ce que vous ressentez ou à chercher une manière de retrouver votre dignité.",
    emotionalNeed:
      "Vous avez besoin d’attention sincère, de joie, de créativité et d’un sentiment de valeur personnelle.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par la fierté ou en donnant l’impression que rien ne vous atteint.",
    underPressure:
      "Sous pression, vous pouvez ressentir fortement le manque de reconnaissance ou interpréter une distance comme un rejet.",
    healing:
      "Votre apaisement passe par la création, l’affection, le jeu et la possibilité d’exprimer votre cœur librement.",
    relationshipNeed:
      "Vous avez besoin de relations démonstratives, loyales et chaleureuses.",
    balanceKey:
      "Reconnaître votre valeur sans attendre que les autres la confirment constamment.",
  },

  Virgo: {
    title:
      "Une sensibilité discrète qui cherche à comprendre, organiser et améliorer",
    introduction:
      "Votre monde intérieur analyse rapidement ce qui ne fonctionne pas et cherche une solution concrète. Vous pouvez exprimer votre affection à travers l’aide, la présence et l’attention portée aux détails.",
    instinctiveReaction:
      "Votre premier réflexe consiste à analyser la situation et à chercher ce qui peut être corrigé.",
    emotionalNeed:
      "Vous avez besoin de clarté, d’ordre, de cohérence et de sentir que vous pouvez agir utilement.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par le contrôle, l’autocritique ou une attention excessive aux détails.",
    underPressure:
      "Sous pression, vous pouvez vous concentrer sur les erreurs, les risques ou ce qui aurait dû être fait différemment.",
    healing:
      "Votre apaisement passe par des gestes simples, une routine réaliste et la possibilité de résoudre une chose à la fois.",
    relationshipNeed:
      "Vous avez besoin de fiabilité, de respect et d’attentions concrètes.",
    balanceKey:
      "Accueillir ce qui est imparfait sans croire que tout doit être immédiatement réparé.",
  },

  Libra: {
    title:
      "Une vie émotionnelle relationnelle qui recherche l’harmonie et la réciprocité",
    introduction:
      "Votre monde intérieur est fortement influencé par la qualité de vos relations. Vous êtes sensible aux tensions, aux injustices et aux déséquilibres dans les échanges.",
    instinctiveReaction:
      "Votre premier réflexe consiste à chercher un compromis, à calmer la tension ou à comprendre le point de vue de l’autre.",
    emotionalNeed:
      "Vous avez besoin de respect, d’élégance relationnelle, d’équité et d’un environnement harmonieux.",
    protection:
      "Vous pouvez protéger votre vulnérabilité en évitant le conflit ou en adaptant votre position.",
    underPressure:
      "Sous pression, l’hésitation peut augmenter parce que chaque choix semble avoir un effet sur une relation.",
    healing:
      "Votre apaisement passe par un dialogue honnête, un environnement agréable et une décision qui respecte aussi votre vérité.",
    relationshipNeed:
      "Vous avez besoin d’échanges équilibrés et d’une véritable coopération.",
    balanceKey:
      "Construire la paix sans vous retirer de l’équation.",
  },

  Scorpio: {
    title:
      "Une vie émotionnelle intense, lucide et profondément transformatrice",
    introduction:
      "Votre monde intérieur ressent avec force, même lorsque vous ne montrez pas immédiatement ce qui vous traverse. Vous percevez les non-dits, les tensions et les mouvements émotionnels cachés.",
    instinctiveReaction:
      "Votre premier réflexe consiste à observer, protéger votre intimité et évaluer la confiance possible.",
    emotionalNeed:
      "Vous avez besoin de profondeur, de loyauté, de vérité et de relations capables de soutenir une forte intensité émotionnelle.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par le contrôle, le silence, la méfiance ou une apparente maîtrise.",
    underPressure:
      "Sous pression, vous pouvez ruminer, anticiper une perte ou chercher à comprendre chaque motivation cachée.",
    healing:
      "Votre apaisement passe par la vérité, l’expression de ce qui a été retenu et la possibilité de transformer l’expérience.",
    relationshipNeed:
      "Vous avez besoin d’engagement, de confiance profonde et de sincérité émotionnelle.",
    balanceKey:
      "Accepter la vulnérabilité comme une forme de puissance et non comme une perte de contrôle.",
  },

  Sagittarius: {
    title:
      "Une vie émotionnelle expansive qui recherche le sens et la liberté",
    introduction:
      "Votre monde intérieur a besoin d’espace, de mouvement et d’une perspective capable de donner du sens à ce qui arrive. Vous retrouvez souvent votre équilibre en élargissant votre vision.",
    instinctiveReaction:
      "Votre premier réflexe consiste à prendre de la distance, chercher une solution ou vous projeter vers l’avenir.",
    emotionalNeed:
      "Vous avez besoin de liberté, d’espoir, de découverte et de relations qui soutiennent votre croissance.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par l’humour, la fuite en avant ou une minimisation de la douleur.",
    underPressure:
      "Sous pression, vous pouvez vouloir quitter trop rapidement une situation avant d’avoir compris ce qu’elle vous enseigne.",
    healing:
      "Votre apaisement passe par le mouvement, la nature, l’apprentissage et une vision plus large de l’expérience.",
    relationshipNeed:
      "Vous avez besoin de confiance, d’espace et d’une direction commune.",
    balanceKey:
      "Conserver votre liberté tout en restant présent à ce qui demande réellement votre attention.",
  },

  Capricorn: {
    title:
      "Une sensibilité contenue qui recherche la maîtrise et la solidité",
    introduction:
      "Votre monde intérieur peut être beaucoup plus sensible que ce que vous montrez. Vous cherchez souvent à demeurer fiable, fonctionnel et capable de faire face, même lorsque l’émotion est forte.",
    instinctiveReaction:
      "Votre premier réflexe consiste à reprendre le contrôle, organiser la situation et continuer à avancer.",
    emotionalNeed:
      "Vous avez besoin de stabilité, de respect, de continuité et de sentir que vous pouvez compter sur vous-même.",
    protection:
      "Vous pouvez protéger votre vulnérabilité en limitant l’expression émotionnelle ou en vous rendant indispensable.",
    underPressure:
      "Sous pression, vous pouvez vous isoler, travailler davantage ou croire que vous devez tout porter seul.",
    healing:
      "Votre apaisement passe par le repos, une structure rassurante et la permission de recevoir du soutien.",
    relationshipNeed:
      "Vous avez besoin de fidélité, de maturité et d’engagement réel.",
    balanceKey:
      "Reconnaître qu’exprimer un besoin ne diminue ni votre force ni votre autonomie.",
  },

  Aquarius: {
    title:
      "Une vie émotionnelle indépendante qui recherche l’espace et la compréhension",
    introduction:
      "Votre monde intérieur a besoin de recul pour comprendre ce qu’il ressent. Vous pouvez observer vos émotions avec beaucoup de lucidité, mais parfois au prix d’une certaine distance.",
    instinctiveReaction:
      "Votre premier réflexe consiste à analyser la situation de manière objective ou à prendre de l’espace.",
    emotionalNeed:
      "Vous avez besoin de liberté, d’amitié, de respect de votre différence et d’un environnement non possessif.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par le détachement, l’intellectualisation ou l’indépendance excessive.",
    underPressure:
      "Sous pression, vous pouvez vous couper temporairement de vos émotions ou donner l’impression que rien ne vous touche.",
    healing:
      "Votre apaisement passe par le recul, les échanges ouverts et un espace où vous pouvez être différent sans être jugé.",
    relationshipNeed:
      "Vous avez besoin de liberté, de complicité mentale et d’authenticité.",
    balanceKey:
      "Rester libre sans transformer la distance en protection permanente.",
  },

  Pisces: {
    title:
      "Une sensibilité intuitive, réceptive et fortement influencée par l’atmosphère",
    introduction:
      "Votre monde intérieur perçoit les émotions, les ambiances et les nuances invisibles avec une grande finesse. Votre sensibilité peut devenir une source d’inspiration, mais elle demande aussi une protection consciente.",
    instinctiveReaction:
      "Votre premier réflexe consiste à ressentir l’ensemble de la situation avant d’identifier ce qui vous appartient réellement.",
    emotionalNeed:
      "Vous avez besoin de douceur, de silence, d’imagination et d’un espace où votre sensibilité peut se déposer.",
    protection:
      "Vous pouvez protéger votre vulnérabilité par le retrait, l’idéalisation ou l’évitement d’une réalité trop dure.",
    underPressure:
      "Sous pression, vous pouvez absorber l’état émotionnel des autres ou perdre momentanément vos propres repères.",
    healing:
      "Votre apaisement passe par le repos, la création, l’eau, la musique et des limites clairement définies.",
    relationshipNeed:
      "Vous avez besoin de compassion, de délicatesse et d’une présence émotionnelle sincère.",
    balanceKey:
      "Rester ouvert sans porter ce qui appartient aux autres.",
  },
};

/*
|--------------------------------------------------------------------------
| Expression affective selon Vénus
|--------------------------------------------------------------------------
*/

const VENUS_RELATIONSHIP_STYLE: Record<
  string,
  string
> = {
  Aries:
    "Vénus en Bélier exprime l’affection avec spontanéité, franchise et enthousiasme. Vous avez besoin de sentir que la relation demeure vivante et qu’elle vous permet de rester pleinement vous-même.",

  Taurus:
    "Vénus en Taureau recherche la stabilité, la fidélité et une présence tangible. Vous exprimez souvent l’affection par la constance, le contact, les gestes simples et la création d’un environnement sécurisant.",

  Gemini:
    "Vénus en Gémeaux recherche la complicité mentale, l’échange et la légèreté. La communication et la curiosité occupent une place essentielle dans votre manière d’aimer.",

  Cancer:
    "Vénus en Cancer exprime l’affection par la protection, la tendresse et le soin. Vous avez besoin d’un lien où la confiance émotionnelle se construit progressivement.",

  Leo:
    "Vénus en Lion aime avec chaleur, générosité et loyauté. Vous avez besoin de sentir que la relation valorise votre cœur, votre créativité et votre présence.",

  Virgo:
    "Vénus en Vierge exprime souvent l’amour par les gestes utiles, la fiabilité et l’attention aux détails. Vous recherchez une relation sincère, cohérente et concrète.",

  Libra:
    "Vénus en Balance recherche l’harmonie, l’élégance et la réciprocité. Vous avez besoin de coopération et d’un échange où chacun se sent respecté.",

  Scorpio:
    "Vénus en Scorpion recherche une intimité profonde, exclusive et authentique. Vous aimez avec intensité et avez besoin d’une confiance réelle pour vous ouvrir complètement.",

  Sagittarius:
    "Vénus en Sagittaire recherche une relation vivante, libre et porteuse de croissance. Vous avez besoin de partager une vision, des découvertes et un espace d’évolution.",

  Capricorn:
    "Vénus en Capricorne recherche la stabilité, la maturité et un engagement démontré dans le temps. Vous exprimez souvent l’amour par la responsabilité et la présence durable.",

  Aquarius:
    "Vénus en Verseau recherche une relation libre, complice et respectueuse de l’individualité. L’amitié et la connexion intellectuelle occupent une place importante.",

  Pisces:
    "Vénus en Poissons aime avec sensibilité, compassion et imagination. Vous recherchez une connexion profonde, mais devez aussi préserver des limites suffisamment claires.",
};

/*
|--------------------------------------------------------------------------
| Réaction et désir selon Mars
|--------------------------------------------------------------------------
*/

const MARS_REACTION_STYLE: Record<
  string,
  string
> = {
  Aries:
    "Mars en Bélier réagit rapidement et directement. Lorsque quelque chose vous atteint, votre énergie cherche immédiatement une sortie, une décision ou une action.",

  Taurus:
    "Mars en Taureau réagit lentement, mais avec persévérance. Vous supportez beaucoup avant de bouger, mais une fois engagé, votre énergie devient difficile à détourner.",

  Gemini:
    "Mars en Gémeaux mobilise votre énergie par les mots, les idées et les échanges. Les tensions peuvent rapidement devenir mentales ou verbales.",

  Cancer:
    "Mars en Cancer réagit à partir de la sensibilité et de l’instinct protecteur. Votre énergie augmente fortement lorsque vous devez défendre un proche ou votre sécurité émotionnelle.",

  Leo:
    "Mars en Lion agit avec fierté, créativité et courage. Vous avez besoin de sentir que vos actions expriment pleinement qui vous êtes.",

  Virgo:
    "Mars en Vierge mobilise votre énergie par l’analyse, l’organisation et la recherche d’efficacité. Vous agissez mieux lorsque vous savez exactement ce qui doit être fait.",

  Libra:
    "Mars en Balance cherche à agir sans détruire l’équilibre. Vous pouvez hésiter avant de confronter, mais devenez très engagé lorsqu’une situation vous semble injuste.",

  Scorpio:
    "Mars en Scorpion concentre votre énergie avec intensité. Vous agissez rarement à moitié et pouvez retenir longtemps une émotion avant de la transformer en décision.",

  Sagittarius:
    "Mars en Sagittaire agit avec enthousiasme, franchise et besoin de liberté. Votre énergie augmente lorsque vous poursuivez un objectif porteur de sens.",

  Capricorn:
    "Mars en Capricorne agit avec stratégie, endurance et contrôle. Vous avancez mieux lorsque votre énergie sert un objectif clair et durable.",

  Aquarius:
    "Mars en Verseau agit de manière indépendante et parfois imprévisible. Votre énergie se mobilise fortement lorsqu’il faut défendre une idée, une liberté ou une cause.",

  Pisces:
    "Mars en Poissons agit à partir de l’intuition, de la sensibilité et de l’inspiration. Votre énergie peut fluctuer selon l’atmosphère et la signification émotionnelle de l’action.",
};

/*
|--------------------------------------------------------------------------
| Sensibilité selon Neptune
|--------------------------------------------------------------------------
*/

const NEPTUNE_SENSITIVITY: Record<
  string,
  string
> = {
  Aries:
    "Neptune en Bélier peut rendre votre intuition spontanée, vive et reliée à l’instinct d’agir.",

  Taurus:
    "Neptune en Taureau peut relier votre sensibilité à la nature, au corps, à la beauté et à la recherche de paix.",

  Gemini:
    "Neptune en Gémeaux peut amplifier l’imagination mentale, la perception des mots et la capacité à capter plusieurs niveaux de sens.",

  Cancer:
    "Neptune en Cancer peut renforcer la mémoire émotionnelle, l’intuition familiale et la réceptivité aux atmosphères.",

  Leo:
    "Neptune en Lion peut amplifier la créativité, l’imaginaire et le désir d’exprimer une vision inspirante.",

  Virgo:
    "Neptune en Vierge peut rendre votre sensibilité attentive aux détails, au soin et aux besoins subtils des autres.",

  Libra:
    "Neptune en Balance peut idéaliser la relation, l’harmonie et l’amour, tout en développant une grande finesse dans la perception des échanges.",

  Scorpio:
    "Neptune en Scorpion peut amplifier votre intuition face aux non-dits, aux émotions cachées et aux transformations profondes.",

  Sagittarius:
    "Neptune en Sagittaire peut relier votre sensibilité à la quête de sens, aux croyances et à une vision plus vaste de l’existence.",

  Capricorn:
    "Neptune en Capricorne peut chercher à donner une structure concrète à une intuition, un idéal ou une vision intérieure.",

  Aquarius:
    "Neptune en Verseau peut amplifier votre sensibilité aux mouvements collectifs, aux idées nouvelles et aux transformations sociales.",

  Pisces:
    "Neptune en Poissons amplifie fortement la compassion, l’imagination, l’intuition et la réceptivité aux ambiances.",
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

  if (!planet) return undefined;

  return {
    name: planet.name,
    sign: normalizeSign(planet.sign),
    house:
      typeof planet.house==="number" && Number.isFinite(planet.house)?planet.house:undefined,
    degree:
      typeof planet.degree==="number" && Number.isFinite(planet.degree)?planet.degree:undefined,
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
    typeof longitude === "number" && Number.isFinite(longitude)
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
    minHeight: 160,
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
    borderColor: GOLD,
    borderRadius: 14,
    padding: 19,
    marginTop: 2,
  },

  closingLabel: {
    color: GOLD,
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  closingTitle: {
    color: CREAM,
    fontSize: 14,
    marginBottom: 9,
  },

  closingText: {
    color: MUTED,
    fontSize: 9.3,
    lineHeight: 1.62,
    textAlign: "justify",
  },
});

/*
|--------------------------------------------------------------------------
| Composant
|--------------------------------------------------------------------------
*/

export default function PdfSignatureInnerWorld({
  firstName,
  planets,
  angles,
}: PdfSignatureInnerWorldProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const safeAngles = angles ?? ({ascendant:0,midheaven:0,descendant:180,imumCoeli:180} as SignatureAngles);

  const moon = getPlanet(
    safePlanets,
    "Moon"
  );

  const venus = getPlanet(
    safePlanets,
    "Venus"
  );

  const mars = getPlanet(
    safePlanets,
    "Mars"
  );

  const neptune = getPlanet(
    safePlanets,
    "Neptune"
  );

  const ascendantSign =
    longitudeToSign(
      safeAngles.ascendant
    );

  const moonSign =
    moon?.sign || ascendantSign;

  const profile =
    EMOTIONAL_PROFILE_BY_SIGN[
      moonSign
    ] ??
    EMOTIONAL_PROFILE_BY_SIGN.Cancer;

  const venusStyle =
    VENUS_RELATIONSHIP_STYLE[
      venus?.sign ?? ""
    ] ??
    "Vénus décrit votre manière de donner de l’affection, de recevoir l’amour et de rechercher une relation qui correspond à vos valeurs.";

  const marsStyle =
    MARS_REACTION_STYLE[
      mars?.sign ?? ""
    ] ??
    "Mars décrit votre manière de réagir, de défendre vos besoins et de mobiliser votre énergie lorsque la tension augmente.";

  const neptuneSensitivity =
    NEPTUNE_SENSITIVITY[
      neptune?.sign ?? ""
    ] ??
    "Neptune décrit votre sensibilité intuitive, votre imagination et votre réceptivité aux atmosphères émotionnelles.";

  const displayName =
    getDisplayName(firstName);

  return (
    <>
      {/* Page 1 — Portrait émotionnel */}

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
                src={INNER_WORLD_ICON}
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
                Votre monde intérieur
              </Text>

              <Text
                style={styles.subtitle}
              >
                Vos besoins émotionnels,
                vos mécanismes de protection
                et la manière dont vous
                retrouvez votre équilibre.
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
              Portrait émotionnel
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
                Réaction instinctive
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Votre premier mouvement
                émotionnel
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.instinctiveReaction}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Besoin fondamental
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui nourrit votre sécurité
                intérieure
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.emotionalNeed}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre mécanisme de protection
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.protection}
            </Text>
          </View>

          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>
              « Comprendre vos émotions ne
              signifie pas devoir les
              contrôler parfaitement. Cela
              signifie apprendre à reconnaître
              ce qu’elles cherchent à protéger,
              à exprimer ou à transformer. »
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 2 — Lune, Vénus, Mars et Neptune */}

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
              Vos quatre dimensions sensibles
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Ressentir, aimer, réagir et
              percevoir
            </Text>

            <Text
              style={styles.paragraph}
            >
              La Lune décrit vos besoins
              instinctifs et votre sécurité
              émotionnelle. Vénus révèle votre
              manière de créer le lien et de
              recevoir l’affection. Mars montre
              votre façon de réagir, de défendre
              vos besoins et de mobiliser votre
              énergie. Neptune indique votre
              sensibilité intuitive et votre
              réceptivité aux atmosphères.
            </Text>
          </View>

          <View style={styles.profileRow}>
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
                vos réactions instinctives.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Vénus
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  venus?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre manière d’aimer et de
                rechercher l’harmonie.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Mars
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  mars?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre réaction face à la
                tension, au désir et à l’action.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Neptune
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  neptune?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre intuition, votre
                imagination et votre
                réceptivité.
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre langage affectif
            </Text>

            <Text
              style={styles.paragraph}
            >
              {venusStyle}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre manière de réagir
            </Text>

            <Text
              style={styles.paragraph}
            >
              {marsStyle}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre sensibilité intuitive
            </Text>

            <Text
              style={styles.paragraph}
            >
              {neptuneSensitivity}
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 3 — Pression et équilibre */}

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
              Régulation émotionnelle
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Reconnaître ce qui se passe
              lorsque la pression augmente
            </Text>

            <Text
              style={styles.paragraph}
            >
              Vos réactions sous pression ne
              représentent pas toute votre
              personnalité. Elles révèlent
              surtout la stratégie que votre
              monde intérieur utilise pour
              retrouver rapidement un sentiment
              de sécurité, de contrôle ou de
              compréhension.
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Sous pression
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui peut devenir plus
                difficile
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.underPressure}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Apaisement
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui vous aide à retrouver
                votre centre
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.healing}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Vos besoins dans les relations
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.relationshipNeed}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Trois gestes pour protéger votre
              équilibre
            </Text>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Nommez l’émotion principale
                avant de chercher une solution.
                Une émotion reconnue devient
                généralement plus facile à
                traverser.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Identifiez le besoin situé
                derrière votre réaction :
                sécurité, espace, reconnaissance,
                clarté, repos ou connexion.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Accordez-vous un délai avant
                une décision importante lorsque
                l’intensité émotionnelle est
                élevée.
              </Text>
            </View>
          </View>

          <View
            style={styles.closingCard}
          >
            <Text
              style={styles.closingLabel}
            >
              Votre clé d’équilibre
            </Text>

            <Text
              style={styles.closingTitle}
            >
              Une sensibilité mieux comprise
              devient une force
            </Text>

            <Text
              style={styles.closingText}
            >
              {profile.balanceKey} Votre monde
              intérieur ne cherche pas à vous
              limiter. Il vous informe sur les
              conditions nécessaires pour
              aimer, créer, décider et évoluer
              sans vous éloigner de vous-même.
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>
    </>
  );
}
