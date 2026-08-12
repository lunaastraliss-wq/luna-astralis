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

const HIDDEN_TALENTS_ICON = assetUrl(
  "/astrology/hidden-talents.png"
);

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureHiddenTalentsProps = {
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

type TalentProfile = {
  title: string;
  introduction: string;
  naturalGift: string;
  hiddenPotential: string;
  expression: string;
  underusedStrength: string;
  development: string;
  contribution: string;
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
| Talents selon Jupiter
|--------------------------------------------------------------------------
*/

const TALENTS_BY_JUPITER_SIGN: Record<
  string,
  TalentProfile
> = {
  Aries: {
    title:
      "Le talent d’initier, de mobiliser et de créer un nouvel élan",
    introduction:
      "Jupiter en Bélier amplifie votre capacité à agir avec courage et à provoquer un mouvement lorsque les autres hésitent. Votre potentiel se révèle lorsque vous faites confiance à votre instinct d’initiative.",
    naturalGift:
      "Vous savez repérer rapidement ce qui doit être commencé, défendu ou relancé.",
    hiddenPotential:
      "Vous pouvez devenir une personne capable d’ouvrir une voie nouvelle et d’encourager les autres à agir.",
    expression:
      "Votre talent s’exprime dans les projets qui demandent audace, rapidité, autonomie et leadership.",
    underusedStrength:
      "Votre capacité à décider sans attendre une validation extérieure peut être plus grande que vous ne le pensez.",
    development:
      "Votre talent grandit lorsque vous apprenez à soutenir votre impulsion par une stratégie et une continuité.",
    contribution:
      "Vous apportez du courage, de l’élan et une énergie capable de sortir une situation de l’immobilité.",
    key:
      "Commencer avec audace, puis rester suffisamment longtemps pour construire.",
  },

  Taurus: {
    title:
      "Le talent de construire, stabiliser et faire fructifier",
    introduction:
      "Jupiter en Taureau développe une intelligence concrète, patiente et tournée vers la croissance durable. Vous possédez un potentiel naturel pour transformer une ressource simple en quelque chose de solide.",
    naturalGift:
      "Vous savez reconnaître ce qui peut durer, être développé ou devenir réellement utile.",
    hiddenPotential:
      "Vous pouvez créer une sécurité, une œuvre ou une activité qui grandit progressivement avec le temps.",
    expression:
      "Votre talent s’exprime dans la gestion, la création, les ressources, la matière, la beauté et les projets à long terme.",
    underusedStrength:
      "Votre patience et votre constance peuvent produire davantage que des actions rapides et dispersées.",
    development:
      "Votre talent grandit lorsque vous acceptez d’adapter vos méthodes sans abandonner vos valeurs.",
    contribution:
      "Vous apportez stabilité, réalisme, fiabilité et capacité de concrétisation.",
    key:
      "Faire confiance à la puissance des progrès réguliers.",
  },

  Gemini: {
    title:
      "Le talent de comprendre, relier et transmettre les idées",
    introduction:
      "Jupiter en Gémeaux amplifie votre curiosité, votre mobilité mentale et votre capacité à créer des liens entre plusieurs sujets. Vous possédez un potentiel naturel pour rendre une information plus claire et plus vivante.",
    naturalGift:
      "Vous savez rapidement repérer les liens, les nuances et les différentes manières d’expliquer une idée.",
    hiddenPotential:
      "Vous pouvez devenir un transmetteur, un vulgarisateur, un enseignant ou un créateur de contenu particulièrement efficace.",
    expression:
      "Votre talent s’exprime par l’écriture, la communication, l’enseignement, les langues, le commerce ou les réseaux.",
    underusedStrength:
      "Votre capacité à rendre accessible ce qui semble complexe peut devenir une véritable expertise.",
    development:
      "Votre talent grandit lorsque vous choisissez certains sujets à approfondir au lieu de multiplier constamment les directions.",
    contribution:
      "Vous apportez compréhension, mouvement, curiosité et circulation des connaissances.",
    key:
      "Transformer la curiosité en savoir réellement maîtrisé.",
  },

  Cancer: {
    title:
      "Le talent de protéger, nourrir et créer un sentiment d’appartenance",
    introduction:
      "Jupiter en Cancer amplifie votre sensibilité, votre intuition et votre capacité à comprendre les besoins émotionnels. Vous possédez un potentiel naturel pour créer un espace sécurisant et humain.",
    naturalGift:
      "Vous savez percevoir ce dont une personne ou un groupe a besoin pour se sentir accueilli et soutenu.",
    hiddenPotential:
      "Vous pouvez devenir une référence dans les domaines liés à l’accompagnement, à la transmission, à la famille ou à l’hospitalité.",
    expression:
      "Votre talent s’exprime lorsque vous prenez soin, rassemblez, enseignez ou protégez ce qui possède une valeur émotionnelle.",
    underusedStrength:
      "Votre mémoire, votre intuition et votre sens du lien peuvent devenir de puissants outils professionnels ou créatifs.",
    development:
      "Votre talent grandit lorsque vous aidez sans vous rendre responsable de tout.",
    contribution:
      "Vous apportez chaleur, sécurité, écoute et profondeur humaine.",
    key:
      "Prendre soin sans vous oublier.",
  },

  Leo: {
    title:
      "Le talent de créer, inspirer et donner confiance",
    introduction:
      "Jupiter en Lion amplifie votre créativité, votre générosité et votre capacité à transmettre de l’enthousiasme. Votre potentiel se révèle lorsque vous assumez pleinement votre expression personnelle.",
    naturalGift:
      "Vous savez naturellement attirer l’attention, encourager et donner de la valeur à une idée ou à une personne.",
    hiddenPotential:
      "Vous pouvez devenir une figure inspirante, créative ou dirigeante capable de mobiliser par la chaleur et la vision.",
    expression:
      "Votre talent s’exprime dans la création, la scène, la direction, l’enseignement ou les projets où votre personnalité devient une force.",
    underusedStrength:
      "Votre capacité à valoriser les autres peut être aussi importante que votre propre rayonnement.",
    development:
      "Votre talent grandit lorsque vous créez pour partager plutôt que pour recevoir uniquement une reconnaissance.",
    contribution:
      "Vous apportez joie, confiance, créativité et puissance d’expression.",
    key:
      "Rayonner avec générosité sans faire de l’approbation une condition.",
  },

  Virgo: {
    title:
      "Le talent d’améliorer, structurer et rendre les choses utiles",
    introduction:
      "Jupiter en Vierge amplifie votre sens de l’observation, votre méthode et votre capacité à développer une compétence précise. Votre potentiel apparaît dans les détails que les autres négligent.",
    naturalGift:
      "Vous savez repérer ce qui peut être corrigé, simplifié ou rendu plus efficace.",
    hiddenPotential:
      "Vous pouvez devenir une véritable référence grâce à votre précision, votre fiabilité et votre capacité à créer des méthodes.",
    expression:
      "Votre talent s’exprime dans l’analyse, la santé, l’organisation, le service, la gestion ou les métiers techniques.",
    underusedStrength:
      "Votre capacité à transformer une difficulté en procédure claire peut avoir une grande valeur.",
    development:
      "Votre talent grandit lorsque vous acceptez que l’efficacité ne demande pas toujours la perfection.",
    contribution:
      "Vous apportez méthode, discernement, utilité et amélioration concrète.",
    key:
      "Chercher le progrès plutôt que l’irréprochable.",
  },

  Libra: {
    title:
      "Le talent de rapprocher, équilibrer et créer des alliances",
    introduction:
      "Jupiter en Balance amplifie votre sens de la relation, de l’équité et de la coopération. Vous possédez un potentiel naturel pour comprendre plusieurs points de vue et restaurer un équilibre.",
    naturalGift:
      "Vous savez créer un climat favorable à l’échange, à la négociation et à la collaboration.",
    hiddenPotential:
      "Vous pouvez devenir un médiateur, un conseiller, un créateur ou un partenaire stratégique très efficace.",
    expression:
      "Votre talent s’exprime dans les relations, le droit, l’esthétique, la diplomatie, les partenariats et le conseil.",
    underusedStrength:
      "Votre capacité à percevoir ce qui est juste pour plusieurs personnes peut devenir une compétence rare.",
    development:
      "Votre talent grandit lorsque vous développez une position personnelle claire avant de rechercher l’accord.",
    contribution:
      "Vous apportez harmonie, justice, élégance et sens de la coopération.",
    key:
      "Créer l’équilibre sans vous effacer.",
  },

  Scorpio: {
    title:
      "Le talent de comprendre, transformer et régénérer",
    introduction:
      "Jupiter en Scorpion amplifie votre profondeur, votre intuition et votre capacité à percevoir les mécanismes cachés. Vous possédez un potentiel naturel pour traverser les situations complexes et en extraire une compréhension puissante.",
    naturalGift:
      "Vous savez lire entre les lignes, comprendre les motivations et détecter les véritables enjeux.",
    hiddenPotential:
      "Vous pouvez devenir un excellent stratège, chercheur, thérapeute, analyste ou accompagnateur de transformation.",
    expression:
      "Votre talent s’exprime dans les domaines qui demandent profondeur, discrétion, psychologie, investigation ou gestion de crise.",
    underusedStrength:
      "Votre capacité à rester présent dans les situations intenses peut rassurer et guider les autres.",
    development:
      "Votre talent grandit lorsque vous utilisez votre lucidité pour transformer plutôt que pour contrôler.",
    contribution:
      "Vous apportez vérité, courage émotionnel, stratégie et capacité de renaissance.",
    key:
      "Faire de votre intensité un outil de transformation consciente.",
  },

  Sagittarius: {
    title:
      "Le talent d’élargir, enseigner et transmettre une vision",
    introduction:
      "Jupiter en Sagittaire amplifie votre besoin de comprendre le sens global des expériences. Vous possédez un potentiel naturel pour inspirer, enseigner et ouvrir de nouvelles perspectives.",
    naturalGift:
      "Vous savez redonner de l’espoir et replacer une situation dans un contexte plus vaste.",
    hiddenPotential:
      "Vous pouvez devenir un enseignant, un guide, un auteur ou un explorateur capable de transmettre une vision forte.",
    expression:
      "Votre talent s’exprime dans l’enseignement, les voyages, les langues, la philosophie, le droit ou la communication inspirante.",
    underusedStrength:
      "Votre capacité à transmettre une conviction et à mobiliser autour d’une vision peut être considérable.",
    development:
      "Votre talent grandit lorsque vos convictions reposent sur une expérience approfondie.",
    contribution:
      "Vous apportez sens, expansion, confiance et ouverture.",
    key:
      "Transformer votre vision en savoir vécu et transmissible.",
  },

  Capricorn: {
    title:
      "Le talent de structurer, diriger et bâtir sur le long terme",
    introduction:
      "Jupiter en Capricorne amplifie votre capacité à planifier, organiser et assumer une responsabilité importante. Vous possédez un potentiel naturel pour construire quelque chose de durable.",
    naturalGift:
      "Vous savez transformer un objectif ambitieux en étapes réalistes et progressives.",
    hiddenPotential:
      "Vous pouvez devenir une personne de référence, un dirigeant ou un expert reconnu pour sa solidité.",
    expression:
      "Votre talent s’exprime dans la gestion, l’entrepreneuriat, la stratégie, l’administration et les projets de longue durée.",
    underusedStrength:
      "Votre patience stratégique peut vous permettre d’atteindre des objectifs que d’autres abandonnent trop tôt.",
    development:
      "Votre talent grandit lorsque vous associez ambition, souplesse et respect de vos limites.",
    contribution:
      "Vous apportez structure, maturité, endurance et sens des responsabilités.",
    key:
      "Construire avec ambition sans transformer chaque étape en épreuve.",
  },

  Aquarius: {
    title:
      "Le talent d’innover, connecter et imaginer autrement",
    introduction:
      "Jupiter en Verseau amplifie votre originalité, votre indépendance intellectuelle et votre capacité à comprendre les mouvements collectifs. Vous possédez un potentiel naturel pour proposer de nouvelles solutions.",
    naturalGift:
      "Vous savez voir les possibilités futures et remettre en question les modèles devenus trop limitants.",
    hiddenPotential:
      "Vous pouvez devenir un innovateur, un créateur de réseau ou une personne capable de rassembler autour d’une idée nouvelle.",
    expression:
      "Votre talent s’exprime dans la technologie, les groupes, les projets collectifs, l’innovation et les causes sociales.",
    underusedStrength:
      "Votre capacité à penser différemment peut résoudre des problèmes que les méthodes traditionnelles ne parviennent pas à dépasser.",
    development:
      "Votre talent grandit lorsque vos idées prennent une forme concrète et accessible.",
    contribution:
      "Vous apportez innovation, liberté de pensée, vision et ouverture.",
    key:
      "Relier votre différence à un besoin réel.",
  },

  Pisces: {
    title:
      "Le talent d’inspirer, ressentir et créer à partir de l’intuition",
    introduction:
      "Jupiter en Poissons amplifie votre imagination, votre compassion et votre sensibilité aux dimensions invisibles de l’expérience. Vous possédez un potentiel naturel pour créer du sens à partir du ressenti.",
    naturalGift:
      "Vous savez percevoir les émotions, les symboles et les atmosphères avec beaucoup de finesse.",
    hiddenPotential:
      "Vous pouvez devenir un créateur, un accompagnateur, un artiste ou une présence profondément inspirante.",
    expression:
      "Votre talent s’exprime dans l’art, l’intuition, le soin, la spiritualité, la musique ou les projets humanitaires.",
    underusedStrength:
      "Votre sensibilité peut devenir un véritable instrument de compréhension lorsqu’elle est protégée par des limites claires.",
    development:
      "Votre talent grandit lorsque vous donnez une forme concrète à vos intuitions.",
    contribution:
      "Vous apportez compassion, imagination, inspiration et profondeur sensible.",
    key:
      "Transformer l’intuition en création, en présence ou en action.",
  },
};

/*
|--------------------------------------------------------------------------
| Intelligence selon Mercure
|--------------------------------------------------------------------------
*/

const MERCURY_TALENTS: Record<string, string> = {
  Aries:
    "Mercure en Bélier vous donne une pensée vive, directe et capable de décider rapidement.",

  Taurus:
    "Mercure en Taureau vous donne une pensée concrète, méthodique et capable de retenir durablement l’information.",

  Gemini:
    "Mercure en Gémeaux renforce votre curiosité, votre souplesse mentale et votre facilité à communiquer.",

  Cancer:
    "Mercure en Cancer vous donne une intelligence intuitive, sensible aux émotions, aux souvenirs et aux atmosphères.",

  Leo:
    "Mercure en Lion favorise une communication expressive, créative et capable de convaincre.",

  Virgo:
    "Mercure en Vierge renforce l’analyse, la précision et la capacité à organiser les détails.",

  Libra:
    "Mercure en Balance vous permet de comprendre plusieurs perspectives et de communiquer avec diplomatie.",

  Scorpio:
    "Mercure en Scorpion vous donne une pensée profonde, stratégique et attentive aux non-dits.",

  Sagittarius:
    "Mercure en Sagittaire favorise la vision globale, l’enseignement et la transmission des idées.",

  Capricorn:
    "Mercure en Capricorne renforce la logique, la structure et la capacité à planifier.",

  Aquarius:
    "Mercure en Verseau développe une pensée originale, indépendante et tournée vers l’innovation.",

  Pisces:
    "Mercure en Poissons favorise l’imagination, l’intuition et une compréhension symbolique des situations.",
};

/*
|--------------------------------------------------------------------------
| Originalité selon Uranus
|--------------------------------------------------------------------------
*/

const URANUS_TALENTS: Record<string, string> = {
  Aries:
    "Uranus en Bélier renforce votre capacité à agir autrement et à initier des changements rapides.",

  Taurus:
    "Uranus en Taureau vous permet d’innover dans les domaines matériels, financiers ou créatifs.",

  Gemini:
    "Uranus en Gémeaux développe une intelligence rapide, inventive et capable de relier des idées inattendues.",

  Cancer:
    "Uranus en Cancer renouvelle votre manière de créer la sécurité, la famille et l’appartenance.",

  Leo:
    "Uranus en Lion renforce votre originalité créative et votre besoin d’expression personnelle.",

  Virgo:
    "Uranus en Vierge vous permet d’inventer de nouvelles méthodes et d’améliorer les systèmes existants.",

  Libra:
    "Uranus en Balance renouvelle votre manière de penser les relations, les alliances et la coopération.",

  Scorpio:
    "Uranus en Scorpion développe une capacité puissante à transformer les structures profondes et les situations complexes.",

  Sagittarius:
    "Uranus en Sagittaire amplifie votre liberté de pensée et votre capacité à explorer des visions nouvelles.",

  Capricorn:
    "Uranus en Capricorne vous permet de moderniser les structures et de construire autrement.",

  Aquarius:
    "Uranus en Verseau amplifie fortement votre innovation, votre vision du futur et votre indépendance intellectuelle.",

  Pisces:
    "Uranus en Poissons développe une intuition originale et une créativité sensible aux dimensions invisibles.",
};

/*
|--------------------------------------------------------------------------
| Direction professionnelle selon le Milieu du Ciel
|--------------------------------------------------------------------------
*/

const MIDHEAVEN_TALENTS: Record<string, string> = {
  Aries:
    "Votre Milieu du Ciel en Bélier favorise les rôles autonomes, les nouveaux projets et les environnements où vous pouvez décider rapidement.",

  Taurus:
    "Votre Milieu du Ciel en Taureau favorise les activités stables, concrètes, créatives ou reliées aux ressources.",

  Gemini:
    "Votre Milieu du Ciel en Gémeaux favorise la communication, l’écriture, la transmission, le commerce et les activités multiples.",

  Cancer:
    "Votre Milieu du Ciel en Cancer favorise les domaines liés à l’accompagnement, au soin, à l’accueil, à la famille ou à l’immobilier.",

  Leo:
    "Votre Milieu du Ciel en Lion favorise la création, la direction, la visibilité et les rôles où votre personnalité devient une force.",

  Virgo:
    "Votre Milieu du Ciel en Vierge favorise l’analyse, la santé, le service, la gestion et les métiers demandant de la précision.",

  Libra:
    "Votre Milieu du Ciel en Balance favorise le conseil, les partenariats, le droit, l’esthétique et la médiation.",

  Scorpio:
    "Votre Milieu du Ciel en Scorpion favorise la psychologie, la recherche, la stratégie, la finance et les transformations profondes.",

  Sagittarius:
    "Votre Milieu du Ciel en Sagittaire favorise l’enseignement, les voyages, l’édition, le droit et la transmission d’une vision.",

  Capricorn:
    "Votre Milieu du Ciel en Capricorne favorise la gestion, l’entrepreneuriat, l’administration et les responsabilités importantes.",

  Aquarius:
    "Votre Milieu du Ciel en Verseau favorise l’innovation, la technologie, les réseaux et les projets collectifs.",

  Pisces:
    "Votre Milieu du Ciel en Poissons favorise l’art, l’accompagnement, l’intuition, la création et les activités humanitaires.",
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
    minHeight: 165,
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

export default function PdfSignatureHiddenTalents({
  firstName,
  planets,
  angles,
}: PdfSignatureHiddenTalentsProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const safeAngles = angles ?? ({ ascendant:0, midheaven:0, descendant:180, imumCoeli:180 } as SignatureAngles);

  const jupiter = getPlanet(
    safePlanets,
    "Jupiter"
  );

  const mercury = getPlanet(
    safePlanets,
    "Mercury"
  );

  const uranus = getPlanet(
    safePlanets,
    "Uranus"
  );

  const sun = getPlanet(
    safePlanets,
    "Sun"
  );

  const midheavenSign =
    longitudeToSign(
      safeAngles.midheaven
    );

  const talentSign =
    jupiter?.sign ||
    sun?.sign ||
    midheavenSign;

  const profile =
    TALENTS_BY_JUPITER_SIGN[
      talentSign
    ] ??
    TALENTS_BY_JUPITER_SIGN.Scorpio;

  const mercuryTalent =
    MERCURY_TALENTS[
      mercury?.sign ?? ""
    ] ??
    "Mercure révèle votre manière d’apprendre, de comprendre, de communiquer et de transformer vos idées en compétence.";

  const uranusTalent =
    URANUS_TALENTS[
      uranus?.sign ?? ""
    ] ??
    "Uranus révèle votre capacité à innover, à penser différemment et à apporter une solution inattendue.";

  const midheavenTalent =
    MIDHEAVEN_TALENTS[
      midheavenSign
    ] ??
    "Votre Milieu du Ciel montre les talents qui peuvent prendre une place visible dans votre parcours professionnel.";

  const displayName =
    getDisplayName(firstName);

  return (
    <>
      {/* Page 1 — Talent principal */}

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
                src={HIDDEN_TALENTS_ICON}
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
                Vos talents cachés
              </Text>

              <Text
                style={styles.subtitle}
              >
                Les compétences naturelles,
                les ressources inexploitées
                et les forces qui peuvent
                prendre davantage de place
                dans votre vie.
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
              Votre potentiel principal
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
                Don naturel
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce que vous faites
                instinctivement bien
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.naturalGift}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Potentiel caché
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce qui peut encore prendre
                de l’ampleur
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.hiddenPotential}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre manière naturelle
              d’exprimer ce talent
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.expression}
            </Text>
          </View>

          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>
              « Un talent caché n’est pas
              toujours une capacité inconnue.
              Il peut être une qualité que vous
              utilisez depuis longtemps sans
              reconnaître sa véritable valeur. »
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 2 — Intelligence et innovation */}

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
              Vos ressources complémentaires
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Intelligence, expansion,
              originalité et réalisation
            </Text>

            <Text
              style={styles.paragraph}
            >
              Jupiter montre les domaines où
              votre confiance peut s’élargir.
              Mercure décrit votre intelligence
              et votre manière d’apprendre.
              Uranus révèle votre originalité,
              tandis que le Milieu du Ciel
              indique les qualités qui peuvent
              devenir visibles dans votre
              parcours professionnel.
            </Text>
          </View>

          <View style={styles.profileRow}>
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
                Votre capacité d’expansion,
                de confiance et de croissance.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Mercure
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  mercury?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre intelligence, votre
                communication et votre méthode
                d’apprentissage.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Uranus
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  uranus?.sign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Votre originalité et votre
                capacité à innover.
              </Text>
            </View>

            <View
              style={styles.profileCard}
            >
              <Text
                style={styles.profileLabel}
              >
                Milieu du Ciel
              </Text>

              <Text
                style={styles.profileValue}
              >
                {getFrenchSign(
                  midheavenSign
                )}
              </Text>

              <Text
                style={styles.profileText}
              >
                Les qualités qui peuvent
                prendre une place visible dans
                votre vocation.
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre intelligence naturelle
            </Text>

            <Text
              style={styles.paragraph}
            >
              {mercuryTalent}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre force d’innovation
            </Text>

            <Text
              style={styles.paragraph}
            >
              {uranusTalent}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre potentiel visible
            </Text>

            <Text
              style={styles.paragraph}
            >
              {midheavenTalent}
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 3 — Développement */}

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
              Déployer votre potentiel
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Donner davantage de place à
              ce qui existe déjà en vous
            </Text>

            <Text
              style={styles.paragraph}
            >
              Un potentiel devient un talent
              pleinement disponible lorsqu’il
              est reconnu, pratiqué et intégré
              dans des situations concrètes.
              Vous n’avez pas besoin de tout
              changer. Il suffit souvent de
              donner plus de place à une
              qualité déjà présente.
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Force sous-utilisée
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce que vous pourriez davantage
                reconnaître
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.underusedStrength}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Développement
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Comment faire grandir ce
                potentiel
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.development}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Trois manières de développer
              vos talents
            </Text>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Observez les situations dans
                lesquelles les autres viennent
                naturellement chercher votre
                aide, votre opinion ou votre
                présence.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Identifiez les tâches qui vous
                semblent simples, mais qui
                représentent une difficulté
                réelle pour d’autres personnes.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Choisissez un projet concret
                dans lequel vous pourrez
                pratiquer cette capacité de
                manière régulière et visible.
              </Text>
            </View>
          </View>

          <View
            style={styles.closingCard}
          >
            <Text
              style={styles.closingLabel}
            >
              Votre clé Signature
            </Text>

            <Text
              style={styles.closingTitle}
            >
              Un talent devient une contribution
            </Text>

            <Text
              style={styles.closingText}
            >
              {profile.key} {profile.contribution}{" "}
              Plus vous reconnaissez la valeur
              de vos capacités naturelles,
              plus vous pouvez les utiliser
              consciemment au lieu de les
              considérer comme ordinaires.
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>
    </>
  );
}
