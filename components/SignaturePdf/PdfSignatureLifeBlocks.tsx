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

const LIFE_BLOCKS_ICON = assetUrl(
  "/astrology/life-blocks.png"
);

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type PdfSignatureLifeBlocksProps = {
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

type BlockProfile = {
  title: string;
  introduction: string;
  automaticPattern: string;
  hiddenFear: string;
  defenseMechanism: string;
  consequence: string;
  liberation: string;
  practicalKey: string;
  affirmation: string;
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
| Blocages selon Saturne
|--------------------------------------------------------------------------
*/

const BLOCKS_BY_SATURN_SIGN: Record<
  string,
  BlockProfile
> = {
  Aries: {
    title:
      "La peur de ne pas être assez fort ou suffisamment légitime",
    introduction:
      "Saturne en Bélier peut créer une tension entre le désir d’agir librement et la peur de vous tromper, d’échouer ou de ne pas être pris au sérieux. Vous pouvez alterner entre retenue et réactions très affirmées.",
    automaticPattern:
      "Vous pouvez attendre trop longtemps avant d’agir, puis vous engager brusquement afin de reprendre le contrôle.",
    hiddenFear:
      "La peur de paraître faible, dépendant ou incapable de défendre votre position.",
    defenseMechanism:
      "L’impatience, la rigidité, la confrontation ou le besoin de tout accomplir seul.",
    consequence:
      "Vous risquez de dépenser beaucoup d’énergie à prouver votre autonomie au lieu d’utiliser cette autonomie pour avancer.",
    liberation:
      "Votre libération commence lorsque vous acceptez que le courage ne signifie pas l’absence d’hésitation, mais la capacité d’agir malgré elle.",
    practicalKey:
      "Choisissez une action précise, réaliste et volontaire plutôt qu’une réaction destinée à prouver votre force.",
    affirmation:
      "Je peux agir avec courage sans devoir tout maîtriser immédiatement.",
  },

  Taurus: {
    title:
      "La peur de perdre vos repères, vos ressources ou votre sécurité",
    introduction:
      "Saturne en Taureau peut renforcer le besoin de contrôler ce qui semble stable. Vous pouvez développer une grande endurance, mais aussi rester longtemps attaché à une situation par crainte de manquer ou de devoir recommencer.",
    automaticPattern:
      "Vous pouvez conserver une habitude, un lien ou une structure même lorsqu’elle ne répond plus réellement à vos besoins.",
    hiddenFear:
      "La peur de l’instabilité, du manque ou de perdre ce que vous avez construit.",
    defenseMechanism:
      "La résistance, la prudence excessive, l’attachement ou la difficulté à prendre un risque.",
    consequence:
      "Vous pouvez confondre sécurité et immobilité, ce qui ralentit certaines transformations nécessaires.",
    liberation:
      "Votre libération passe par la construction d’une confiance intérieure indépendante de ce que vous possédez ou contrôlez.",
    practicalKey:
      "Introduisez les changements progressivement afin que votre besoin de stabilité puisse accompagner votre évolution.",
    affirmation:
      "Je peux évoluer sans perdre la solidité qui me protège.",
  },

  Gemini: {
    title:
      "La peur de ne pas savoir, de mal comprendre ou de mal vous exprimer",
    introduction:
      "Saturne en Gémeaux peut rendre la communication plus sérieuse, prudente ou contrôlée. Vous pouvez douter de votre intelligence malgré une réelle capacité d’analyse.",
    automaticPattern:
      "Vous pouvez réfléchir longtemps avant de parler, modifier plusieurs fois vos idées ou craindre de ne pas avoir les bons mots.",
    hiddenFear:
      "La peur d’être mal compris, jugé intellectuellement ou incapable de répondre correctement.",
    defenseMechanism:
      "Le silence, l’intellectualisation, l’accumulation d’informations ou une communication très contrôlée.",
    consequence:
      "Vous risquez de retenir une parole pertinente uniquement parce qu’elle ne semble pas encore parfaite.",
    liberation:
      "Votre libération commence lorsque vous acceptez que la clarté se construit aussi par l’échange et l’expérience.",
    practicalKey:
      "Exprimez une idée simple avant de chercher à développer une réponse complète.",
    affirmation:
      "Ma pensée devient plus forte lorsque j’accepte de la partager.",
  },

  Cancer: {
    title:
      "La peur de dépendre, d’être rejeté ou de manquer de sécurité affective",
    introduction:
      "Saturne en Cancer peut rendre les besoins émotionnels difficiles à montrer. Vous pouvez ressentir profondément tout en vous imposant de rester solide ou autonome.",
    automaticPattern:
      "Vous pouvez prendre soin des autres tout en dissimulant ce dont vous avez vous-même besoin.",
    hiddenFear:
      "La peur d’être abandonné, incompris ou trop vulnérable.",
    defenseMechanism:
      "Le retrait, la protection excessive, le contrôle du foyer ou le refus de demander du soutien.",
    consequence:
      "Vous pouvez créer une grande distance entre votre sensibilité réelle et l’image de stabilité que vous cherchez à maintenir.",
    liberation:
      "Votre libération passe par la reconnaissance de vos besoins émotionnels comme des réalités légitimes.",
    practicalKey:
      "Exprimez un besoin clairement avant qu’il ne se transforme en fatigue, ressentiment ou fermeture.",
    affirmation:
      "Je peux recevoir du soutien sans perdre mon autonomie.",
  },

  Leo: {
    title:
      "La peur de ne pas être reconnu, aimé ou suffisamment remarquable",
    introduction:
      "Saturne en Lion peut rendre l’expression personnelle plus contrôlée. Vous pouvez posséder une forte créativité tout en craignant qu’elle ne soit pas assez valable ou visible.",
    automaticPattern:
      "Vous pouvez retenir votre expression jusqu’à être certain de recevoir une réaction favorable.",
    hiddenFear:
      "La peur de l’humiliation, du rejet ou de ne pas être à la hauteur de votre propre potentiel.",
    defenseMechanism:
      "La fierté, la distance, l’exigence ou le besoin de contrôler l’image projetée.",
    consequence:
      "Vous pouvez limiter votre créativité en attendant une confiance qui ne peut se construire qu’en créant.",
    liberation:
      "Votre libération commence lorsque vous vous autorisez à exprimer quelque chose avant qu’il ne soit parfait ou unanimement apprécié.",
    practicalKey:
      "Créez régulièrement dans un espace où le résultat n’a pas besoin d’être évalué.",
    affirmation:
      "Ma valeur ne dépend pas uniquement de la reconnaissance que je reçois.",
  },

  Virgo: {
    title:
      "La peur de l’erreur, du désordre et de ne pas être suffisamment utile",
    introduction:
      "Saturne en Vierge peut renforcer l’exigence, le sens du devoir et l’attention portée aux détails. Cette position donne une grande capacité de maîtrise, mais peut aussi nourrir une autocritique constante.",
    automaticPattern:
      "Vous pouvez retarder une action en cherchant à éliminer toutes les erreurs possibles.",
    hiddenFear:
      "La peur d’être inefficace, imparfait ou incapable de répondre aux attentes.",
    defenseMechanism:
      "Le contrôle, la suranalyse, le perfectionnisme ou une organisation très rigide.",
    consequence:
      "Vous risquez de consacrer plus d’énergie à prévenir l’erreur qu’à reconnaître ce qui fonctionne déjà.",
    liberation:
      "Votre libération passe par l’acceptation d’une progression réaliste fondée sur l’expérience.",
    practicalKey:
      "Définissez ce qui est suffisamment bon avant de commencer une tâche.",
    affirmation:
      "Je peux être compétent sans exiger de moi une perfection impossible.",
  },

  Libra: {
    title:
      "La peur du conflit, du rejet et de prendre une décision qui déplaît",
    introduction:
      "Saturne en Balance peut rendre les relations très importantes, mais aussi exigeantes. Vous pouvez ressentir une forte responsabilité envers l’équilibre et la satisfaction des autres.",
    automaticPattern:
      "Vous pouvez retarder une décision afin d’éviter de créer une tension ou de décevoir quelqu’un.",
    hiddenFear:
      "La peur d’être rejeté, jugé injuste ou tenu responsable d’une rupture d’harmonie.",
    defenseMechanism:
      "L’hésitation, la diplomatie excessive, l’effacement ou le contrôle indirect de la relation.",
    consequence:
      "Vous pouvez préserver une paix apparente tout en accumulant une insatisfaction silencieuse.",
    liberation:
      "Votre libération commence lorsque vous comprenez qu’une relation saine peut supporter une différence ou une limite.",
    practicalKey:
      "Exprimez votre position avant de chercher immédiatement un compromis.",
    affirmation:
      "Je peux protéger une relation sans abandonner ma vérité.",
  },

  Scorpio: {
    title:
      "La peur de perdre le contrôle, d’être trahi ou profondément vulnérable",
    introduction:
      "Saturne en Scorpion peut rendre les émotions, la confiance et le partage de pouvoir particulièrement sensibles. Vous pouvez posséder une grande force intérieure tout en protégeant étroitement votre vulnérabilité.",
    automaticPattern:
      "Vous pouvez observer, tester ou retenir avant de vous engager complètement.",
    hiddenFear:
      "La peur de perdre votre pouvoir, d’être manipulé ou de dépendre émotionnellement.",
    defenseMechanism:
      "Le silence, le contrôle, la méfiance ou l’intensification de la vigilance.",
    consequence:
      "Vous risquez de maintenir une distance qui empêche précisément la confiance profonde que vous recherchez.",
    liberation:
      "Votre libération passe par une vulnérabilité progressive, choisie et accompagnée de limites claires.",
    practicalKey:
      "Partagez une vérité mesurée avec une personne fiable sans attendre une certitude absolue.",
    affirmation:
      "Je peux m’ouvrir sans abandonner mon discernement.",
  },

  Sagittarius: {
    title:
      "La peur d’être limité, enfermé ou privé de sens",
    introduction:
      "Saturne en Sagittaire peut créer une tension entre le besoin d’expansion et la nécessité de structurer vos convictions. Vous pouvez craindre qu’un engagement réduise vos possibilités.",
    automaticPattern:
      "Vous pouvez changer de direction lorsque la réalité demande trop de patience ou de continuité.",
    hiddenFear:
      "La peur de perdre votre liberté, de vous tromper de voie ou de découvrir que vos convictions sont insuffisantes.",
    defenseMechanism:
      "La fuite, l’optimisme excessif, la généralisation ou la recherche constante d’un nouvel horizon.",
    consequence:
      "Vous pouvez multiplier les possibilités sans leur donner le temps de devenir une véritable expérience.",
    liberation:
      "Votre libération commence lorsque vous comprenez que la discipline peut soutenir votre liberté plutôt que l’annuler.",
    practicalKey:
      "Choisissez une direction et accordez-lui suffisamment de temps avant de conclure qu’elle vous limite.",
    affirmation:
      "Je peux m’engager sans perdre ma liberté intérieure.",
  },

  Capricorn: {
    title:
      "La peur de l’échec, de la faiblesse et de ne jamais en faire assez",
    introduction:
      "Saturne en Capricorne renforce le sens du devoir, l’ambition et la capacité à construire. Cette force peut toutefois devenir lourde lorsque vous associez votre valeur à votre productivité.",
    automaticPattern:
      "Vous pouvez augmenter vos efforts lorsque vous êtes fatigué ou inquiet, au lieu de ralentir.",
    hiddenFear:
      "La peur d’échouer, de perdre votre crédibilité ou de ne pas mériter le respect.",
    defenseMechanism:
      "Le contrôle, le travail excessif, la distance émotionnelle ou le refus de montrer une limite.",
    consequence:
      "Vous pouvez atteindre vos objectifs tout en ayant constamment le sentiment que ce n’est pas encore suffisant.",
    liberation:
      "Votre libération passe par une définition de la réussite qui inclut votre santé, votre temps et votre vie intérieure.",
    practicalKey:
      "Mesurez votre progression par la cohérence et non seulement par la quantité accomplie.",
    affirmation:
      "Ma valeur ne dépend pas uniquement de ce que je réussis à produire.",
  },

  Aquarius: {
    title:
      "La peur de perdre votre liberté ou de ne pas appartenir",
    introduction:
      "Saturne en Verseau peut créer une tension entre le désir d’indépendance et le besoin de participer à un groupe ou à une vision collective.",
    automaticPattern:
      "Vous pouvez prendre de la distance lorsqu’une relation, une structure ou un engagement semble limiter votre autonomie.",
    hiddenFear:
      "La peur d’être contrôlé, normalisé ou rejeté pour votre différence.",
    defenseMechanism:
      "Le détachement, l’opposition, l’indépendance excessive ou la rationalisation.",
    consequence:
      "Vous pouvez vous protéger du rejet en maintenant une distance qui empêche une véritable appartenance.",
    liberation:
      "Votre libération commence lorsque vous découvrez que la collaboration n’exige pas la disparition de votre singularité.",
    practicalKey:
      "Participez à un projet collectif dans lequel votre rôle et vos limites sont clairement définis.",
    affirmation:
      "Je peux appartenir sans renoncer à ma différence.",
  },

  Pisces: {
    title:
      "La peur d’être submergé, perdu ou incapable de poser des limites",
    introduction:
      "Saturne en Poissons peut rendre la sensibilité difficile à contenir. Vous pouvez percevoir beaucoup de choses tout en doutant de votre capacité à leur donner une forme claire.",
    automaticPattern:
      "Vous pouvez éviter une situation trop exigeante, absorber les émotions des autres ou attendre que la clarté apparaisse seule.",
    hiddenFear:
      "La peur d’être submergé, incompris ou incapable de répondre aux exigences concrètes.",
    defenseMechanism:
      "Le retrait, l’évitement, l’idéalisation ou le sacrifice silencieux.",
    consequence:
      "Vous pouvez porter des responsabilités émotionnelles qui ne vous appartiennent pas ou manquer de structure pour protéger votre énergie.",
    liberation:
      "Votre libération passe par des limites simples, des habitudes stables et une distinction claire entre compassion et responsabilité.",
    practicalKey:
      "Demandez-vous régulièrement ce qui vous appartient réellement et ce qui appartient aux autres.",
    affirmation:
      "Mes limites protègent ma sensibilité et lui permettent de devenir une force.",
  },
};

/*
|--------------------------------------------------------------------------
| Transformation selon Pluton
|--------------------------------------------------------------------------
*/

const PLUTO_BLOCKS: Record<string, string> = {
  Aries:
    "Pluton en Bélier peut intensifier les enjeux liés à la volonté, à l’affirmation et au besoin de contrôler votre direction.",

  Taurus:
    "Pluton en Taureau peut amplifier les peurs liées à la perte, à la sécurité, aux ressources et à la stabilité matérielle.",

  Gemini:
    "Pluton en Gémeaux peut rendre la pensée très pénétrante, mais aussi créer une tendance à analyser excessivement les mots, les intentions ou les informations.",

  Cancer:
    "Pluton en Cancer peut intensifier les liens avec le passé, la famille, la mémoire émotionnelle et le besoin de protection.",

  Leo:
    "Pluton en Lion peut amplifier les enjeux liés à la reconnaissance, à la puissance créatrice et à la peur de ne pas laisser une trace.",

  Virgo:
    "Pluton en Vierge peut renforcer le besoin de contrôle, de précision et de maîtrise des détails.",

  Libra:
    "Pluton en Balance peut intensifier les rapports de pouvoir, la dépendance ou les transformations vécues à travers les relations.",

  Scorpio:
    "Pluton en Scorpion amplifie la profondeur émotionnelle, les enjeux de confiance et la nécessité de transformer les mécanismes de contrôle.",

  Sagittarius:
    "Pluton en Sagittaire peut rendre les convictions très puissantes et créer une difficulté à remettre en question certaines vérités intérieures.",

  Capricorn:
    "Pluton en Capricorne peut renforcer la peur de perdre le contrôle, l’autorité, la réussite ou les structures construites.",

  Aquarius:
    "Pluton en Verseau peut intensifier la résistance aux systèmes, aux contraintes collectives ou aux modèles imposés.",

  Pisces:
    "Pluton en Poissons peut amplifier la sensibilité aux émotions collectives, aux pertes de repères et aux frontières invisibles.",
};

/*
|--------------------------------------------------------------------------
| Influence de Neptune
|--------------------------------------------------------------------------
*/

const NEPTUNE_BLOCKS: Record<string, string> = {
  Aries:
    "Neptune en Bélier peut brouiller la distinction entre intuition et impulsion, surtout lorsque vous souhaitez agir rapidement.",

  Taurus:
    "Neptune en Taureau peut idéaliser la sécurité, le confort ou certaines attaches matérielles.",

  Gemini:
    "Neptune en Gémeaux peut rendre les pensées très intuitives, mais parfois difficiles à organiser ou à vérifier.",

  Cancer:
    "Neptune en Cancer peut amplifier les souvenirs, la nostalgie et l’absorption des émotions familiales.",

  Leo:
    "Neptune en Lion peut idéaliser la reconnaissance, l’amour ou le rôle créatif que vous souhaitez incarner.",

  Virgo:
    "Neptune en Vierge peut rendre difficile la distinction entre aide juste, sacrifice et responsabilité excessive.",

  Libra:
    "Neptune en Balance peut favoriser l’idéalisation du couple, de l’harmonie ou de la personne aimée.",

  Scorpio:
    "Neptune en Scorpion peut amplifier les intuitions, mais aussi les craintes liées aux non-dits et aux intentions cachées.",

  Sagittarius:
    "Neptune en Sagittaire peut idéaliser une croyance, une direction ou une promesse d’expansion.",

  Capricorn:
    "Neptune en Capricorne peut rendre difficile la distinction entre ambition personnelle et attentes extérieures.",

  Aquarius:
    "Neptune en Verseau peut idéaliser une cause, un groupe ou une vision collective.",

  Pisces:
    "Neptune en Poissons amplifie fortement la sensibilité et demande des limites particulièrement conscientes.",
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

export default function PdfSignatureLifeBlocks({
  firstName,
  planets,
  angles,
}: PdfSignatureLifeBlocksProps) {
  const safePlanets = Array.isArray(planets) ? planets : [];

  const safeAngles = angles ?? ({ ascendant:0, midheaven:0, descendant:180, imumCoeli:180 } as SignatureAngles);

  const saturn = getPlanet(
    safePlanets,
    "Saturn"
  );

  const pluto = getPlanet(
    safePlanets,
    "Pluto"
  );

  const neptune = getPlanet(
    safePlanets,
    "Neptune"
  );

  const moon = getPlanet(
    safePlanets,
    "Moon"
  );

  const ascendantSign =
    longitudeToSign(
      safeAngles.ascendant
    );

  const blockSign =
    saturn?.sign || ascendantSign;

  const profile =
    BLOCKS_BY_SATURN_SIGN[
      blockSign
    ] ??
    BLOCKS_BY_SATURN_SIGN.Capricorn;

  const plutoText =
    PLUTO_BLOCKS[
      pluto?.sign ?? ""
    ] ??
    "Pluton révèle les mécanismes profonds qui cherchent à conserver le contrôle lorsque vous traversez une période d’incertitude ou de transformation.";

  const neptuneText =
    NEPTUNE_BLOCKS[
      neptune?.sign ?? ""
    ] ??
    "Neptune montre les zones où l’intuition, l’idéalisation ou la sensibilité peuvent rendre certaines limites plus difficiles à identifier.";

  const displayName =
    getDisplayName(firstName);

  return (
    <>
      {/* Page 1 — Schéma principal */}

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
                src={LIFE_BLOCKS_ICON}
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
                Vos blocages inconscients
              </Text>

              <Text
                style={styles.subtitle}
              >
                Les réflexes de protection,
                les peurs cachées et les
                mécanismes qui peuvent freiner
                votre évolution.
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
              Votre schéma principal
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
                Réflexe automatique
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce que vous pouvez reproduire
                sans le vouloir
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.automaticPattern}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Peur cachée
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce que votre mécanisme cherche
                à éviter
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.hiddenFear}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Votre mécanisme de défense
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.defenseMechanism}
            </Text>
          </View>

          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>
              « Un blocage n’est pas une
              faiblesse. Il représente souvent
              une ancienne stratégie de
              protection qui continue d’agir
              même lorsque la situation a
              changé. »
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 2 — Saturne, Pluton et Neptune */}

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
              Les racines du mécanisme
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Comprendre ce qui protège,
              contrôle ou idéalise
            </Text>

            <Text
              style={styles.paragraph}
            >
              Saturne montre les peurs,
              les limites et les apprentissages
              qui demandent du temps. Pluton
              révèle les mécanismes profonds
              liés au contrôle, à la perte et
              à la transformation. Neptune
              indique les zones où les repères,
              les limites ou les attentes
              peuvent devenir moins clairs.
            </Text>
          </View>

          <View style={styles.profileRow}>
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
                Vos peurs, vos limites et la
                maîtrise que vous construisez.
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
                Vos transformations profondes
                et votre rapport au contrôle.
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
                Vos idéalisations, votre
                sensibilité et vos frontières.
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
                Votre besoin de sécurité
                émotionnelle et vos réactions
                instinctives.
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              La profondeur de Pluton
            </Text>

            <Text
              style={styles.paragraph}
            >
              {plutoText}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Le brouillard de Neptune
            </Text>

            <Text
              style={styles.paragraph}
            >
              {neptuneText}
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              La conséquence possible
            </Text>

            <Text
              style={styles.paragraph}
            >
              {profile.consequence}
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>

      {/* Page 3 — Libération */}

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
              Dépasser les anciens mécanismes
            </Text>

            <Text
              style={styles.sectionTitle}
            >
              Transformer la protection en
              conscience
            </Text>

            <Text
              style={styles.paragraph}
            >
              Vous ne dépassez pas un blocage
              en le combattant constamment.
              Vous commencez à le transformer
              lorsque vous reconnaissez ce
              qu’il cherche à protéger et que
              vous développez une réponse plus
              adaptée à votre réalité actuelle.
            </Text>
          </View>

          <View
            style={styles.twoColumns}
          >
            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Libération
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Ce que votre évolution vous
                invite à comprendre
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.liberation}
              </Text>
            </View>

            <View style={styles.halfCard}>
              <Text
                style={styles.cardLabel}
              >
                Clé pratique
              </Text>

              <Text
                style={styles.cardTitle}
              >
                Une nouvelle réponse à
                expérimenter
              </Text>

              <Text
                style={styles.cardText}
              >
                {profile.practicalKey}
              </Text>
            </View>
          </View>

          <View
            style={styles.guidanceCard}
          >
            <Text
              style={styles.guidanceTitle}
            >
              Trois étapes pour interrompre
              un schéma répétitif
            </Text>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Identifiez le moment précis
                où votre réaction devient
                automatique : fermeture,
                contrôle, fuite, silence,
                justification ou suractivité.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Demandez-vous quelle peur
                ancienne cherche à vous
                protéger et si elle correspond
                réellement à la situation
                présente.
              </Text>
            </View>

            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>
                ✦
              </Text>

              <Text
                style={styles.bulletText}
              >
                Choisissez une réponse plus
                petite, mais différente :
                parler, demander, ralentir,
                poser une limite ou accepter
                de ne pas tout contrôler.
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
