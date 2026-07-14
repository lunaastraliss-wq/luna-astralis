import {
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import PdfSignatureBrandHeader from "./PdfSignatureBrandHeader";
import PdfSignaturePageFooter from "./PdfSignaturePageFooter";

type SignatureAspectPlanet = {
  name?: string;
  sign?: string;
  degree?: number;
  longitude?: number;
  house?: number | string | null;
  retrograde?: boolean;
};

type PdfSignatureAspectsProps = {
  planets?: SignatureAspectPlanet[];
};

type AspectName =
  | "Conjonction"
  | "Sextile"
  | "Carré"
  | "Trigone"
  | "Opposition";

type AspectCategory =
  | "harmonieux"
  | "dynamique"
  | "intense";

type AspectDefinition = {
  name: AspectName;
  angle: number;
  orb: number;
  nature: string;
  category: AspectCategory;
};

type CalculatedAspect = {
  planetA: string;
  planetB: string;
  aspect: AspectDefinition;
  exactDifference: number;
  orb: number;
};

type AspectInterpretation = {
  introduction: string;
  manifestation: string;
  evolution: string;
};

type PairTheme = {
  title: string;
  core: string;
  life: string;
  integration: string;
};

type AspectStatistics = {
  total: number;
  harmoniousCount: number;
  dynamicCount: number;
  conjunctionCount: number;
  sextileCount: number;
  squareCount: number;
  trineCount: number;
  oppositionCount: number;
  mostAspectedPlanet: string | null;
  mostAspectedCount: number;
  leastAspectedPlanets: string[];
};

const MAIN_PLANETS = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
] as const;

const PLANET_NAMES_FR: Record<
  string,
  string
> = {
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

const ASPECTS: AspectDefinition[] = [
  {
    name: "Conjonction",
    angle: 0,
    orb: 8,
    nature: "Fusion et intensification",
    category: "intense",
  },
  {
    name: "Sextile",
    angle: 60,
    orb: 5,
    nature: "Possibilité et coopération",
    category: "harmonieux",
  },
  {
    name: "Carré",
    angle: 90,
    orb: 7,
    nature: "Tension et évolution",
    category: "dynamique",
  },
  {
    name: "Trigone",
    angle: 120,
    orb: 7,
    nature: "Fluidité et talent naturel",
    category: "harmonieux",
  },
  {
    name: "Opposition",
    angle: 180,
    orb: 8,
    nature: "Polarité et recherche d’équilibre",
    category: "dynamique",
  },
];

const PLANET_ENERGIES: Record<
  string,
  string
> = {
  Sun:
    "votre identité, votre volonté et votre besoin de rayonner",

  Moon:
    "vos émotions, vos besoins affectifs et votre sécurité intérieure",

  Mercury:
    "votre pensée, votre communication et votre manière de comprendre",

  Venus:
    "votre façon d’aimer, vos valeurs et votre sensibilité relationnelle",

  Mars:
    "votre énergie d’action, votre désir et votre capacité d’affirmation",

  Jupiter:
    "votre confiance, votre expansion et votre manière de saisir les possibilités",

  Saturn:
    "votre sens des responsabilités, vos limites et votre maturité",

  Uranus:
    "votre besoin de liberté, votre originalité et votre rapport au changement",

  Neptune:
    "votre imagination, votre intuition et votre réceptivité",

  Pluto:
    "votre pouvoir de transformation, votre intensité et votre capacité de régénération",
};

const PLANET_MANIFESTATIONS: Record<
  string,
  string
> = {
  Sun:
    "dans votre sentiment d’identité, vos choix personnels et votre manière d’occuper votre place",

  Moon:
    "dans vos réactions émotionnelles, votre intimité et votre manière de rechercher la sécurité",

  Mercury:
    "dans vos idées, vos échanges, vos apprentissages et vos prises de décision",

  Venus:
    "dans votre vie affective, vos attirances, votre estime personnelle et vos valeurs",

  Mars:
    "dans vos initiatives, vos conflits, vos désirs et votre manière de poursuivre un objectif",

  Jupiter:
    "dans votre confiance, vos ambitions, vos convictions et votre recherche d’évolution",

  Saturn:
    "dans vos responsabilités, votre discipline, vos peurs et vos constructions à long terme",

  Uranus:
    "dans votre besoin d’indépendance, vos changements et votre manière de sortir des cadres",

  Neptune:
    "dans votre intuition, vos idéaux, votre imagination et votre sensibilité aux ambiances",

  Pluto:
    "dans vos périodes de transformation, vos rapports de force et votre besoin de profondeur",
};

const PAIR_THEMES: Record<
  string,
  PairTheme
> = {
  "Moon-Sun": {
    title:
      "Identité consciente et besoins émotionnels",
    core:
      "Le Soleil décrit la personne que vous cherchez consciemment à devenir, tandis que la Lune révèle ce dont vous avez besoin pour vous sentir émotionnellement en sécurité.",
    life:
      "Cette combinaison influence directement la cohérence entre votre volonté, vos réactions instinctives et votre manière d’exprimer votre véritable personnalité.",
    integration:
      "Votre équilibre grandit lorsque vos décisions conscientes tiennent également compte de vos besoins émotionnels réels.",
  },

  "Mercury-Sun": {
    title:
      "Identité, pensée et expression personnelle",
    core:
      "Le Soleil représente votre identité et votre volonté, tandis que Mercure décrit votre manière de penser, de comprendre et de communiquer.",
    life:
      "Cette relation influence la manière dont vous formulez vos choix, défendez vos idées et faites connaître ce qui compte réellement pour vous.",
    integration:
      "Votre expression devient plus forte lorsque vos paroles traduisent fidèlement votre direction intérieure.",
  },

  "Sun-Venus": {
    title:
      "Identité, valeurs et vie affective",
    core:
      "Le Soleil représente votre besoin d’affirmer votre identité, tandis que Vénus décrit votre manière d’aimer, vos valeurs et ce qui vous procure un sentiment d’harmonie.",
    life:
      "Cette combinaison influence votre charme, votre estime personnelle, vos choix relationnels et la place que vous accordez au regard des autres.",
    integration:
      "Votre équilibre grandit lorsque vous pouvez aimer et créer des liens sans abandonner ce qui vous rend profondément authentique.",
  },

  "Mars-Sun": {
    title:
      "Volonté, action et affirmation personnelle",
    core:
      "Le Soleil représente votre direction intérieure, tandis que Mars décrit votre énergie d’action, votre désir et votre manière de défendre votre position.",
    life:
      "Cette relation influence votre courage, votre ambition, votre impatience et votre manière de transformer une intention en action concrète.",
    integration:
      "Votre puissance augmente lorsque votre action sert une direction consciente plutôt qu’une réaction immédiate.",
  },

  "Jupiter-Sun": {
    title:
      "Identité, confiance et expansion",
    core:
      "Le Soleil représente votre identité et votre besoin de réalisation, tandis que Jupiter décrit votre confiance, vos convictions et votre désir de croissance.",
    life:
      "Cette combinaison influence votre optimisme, votre ambition, votre générosité et votre capacité à croire en vos possibilités.",
    integration:
      "Votre expansion devient plus juste lorsque votre confiance repose sur une connaissance réaliste de vos forces et de vos limites.",
  },

  "Saturn-Sun": {
    title:
      "Identité, responsabilité et accomplissement",
    core:
      "Le Soleil représente votre identité et votre volonté, tandis que Saturne décrit vos responsabilités, vos exigences et les apprentissages qui demandent du temps.",
    life:
      "Cette relation influence votre rapport à l’autorité, à la réussite, au jugement et à la reconnaissance de votre propre valeur.",
    integration:
      "Votre maturité grandit lorsque la discipline soutient votre identité sans étouffer votre spontanéité ni votre confiance.",
  },

  "Sun-Uranus": {
    title:
      "Identité, liberté et originalité",
    core:
      "Le Soleil représente votre identité consciente, tandis qu’Uranus décrit votre besoin de liberté, de changement et d’expression personnelle différente.",
    life:
      "Cette combinaison influence votre indépendance, votre rapport aux conventions et votre besoin de suivre une voie qui vous ressemble réellement.",
    integration:
      "Votre singularité devient constructive lorsque votre liberté s’accompagne d’une direction claire et d’une certaine continuité.",
  },

  "Neptune-Sun": {
    title:
      "Identité, intuition et idéal",
    core:
      "Le Soleil représente votre identité consciente, tandis que Neptune décrit votre imagination, votre intuition et votre sensibilité aux idéaux.",
    life:
      "Cette relation influence votre créativité, votre perception de vous-même, votre inspiration et votre tendance possible à idéaliser certaines directions.",
    integration:
      "Votre inspiration devient une force lorsque vos rêves peuvent s’appuyer sur une identité claire et des choix concrets.",
  },

  "Pluto-Sun": {
    title:
      "Identité, pouvoir intérieur et transformation",
    core:
      "Le Soleil représente votre volonté et votre identité, tandis que Pluton décrit votre intensité, votre besoin de transformation et votre capacité de régénération.",
    life:
      "Cette combinaison influence votre force de caractère, votre rapport au contrôle et votre manière de traverser les périodes de profond changement.",
    integration:
      "Votre puissance devient plus libre lorsque vous utilisez votre intensité pour vous transformer plutôt que pour tout maîtriser.",
  },

  "Mercury-Moon": {
    title:
      "Émotions, pensée et communication",
    core:
      "La Lune décrit vos réactions émotionnelles, tandis que Mercure représente votre pensée et votre manière de mettre les expériences en mots.",
    life:
      "Cette relation influence votre capacité à comprendre vos émotions, à exprimer vos besoins et à distinguer ce que vous ressentez de ce que vous pensez.",
    integration:
      "Votre clarté intérieure grandit lorsque vos émotions peuvent être reconnues avant d’être analysées ou expliquées.",
  },

  "Moon-Venus": {
    title:
      "Sécurité émotionnelle et expression affective",
    core:
      "La Lune représente vos besoins émotionnels, tandis que Vénus décrit votre manière d’aimer, de recevoir l’affection et de créer de l’harmonie.",
    life:
      "Cette combinaison influence votre attachement, votre douceur, votre besoin de proximité et votre manière de chercher du réconfort dans les relations.",
    integration:
      "Votre vie affective devient plus équilibrée lorsque vous distinguez le besoin d’être rassuré du véritable désir de partager.",
  },

  "Mars-Moon": {
    title:
      "Réactions émotionnelles et énergie d’action",
    core:
      "La Lune représente vos réactions instinctives, tandis que Mars décrit votre manière d’agir, de défendre vos besoins et d’exprimer votre colère.",
    life:
      "Cette relation influence votre comportement sous pression, votre impulsivité, votre courage émotionnel et votre manière de réagir lorsque vous vous sentez menacé.",
    integration:
      "Votre force grandit lorsque vous prenez le temps d’identifier l’émotion présente avant de passer immédiatement à l’action.",
  },

  "Jupiter-Moon": {
    title:
      "Sécurité intérieure, confiance et générosité",
    core:
      "La Lune représente votre sécurité émotionnelle, tandis que Jupiter décrit votre confiance, votre générosité et votre besoin d’expansion.",
    life:
      "Cette combinaison influence votre optimisme émotionnel, votre besoin de protéger, votre générosité et votre manière de retrouver confiance après une difficulté.",
    integration:
      "Votre équilibre grandit lorsque votre générosité respecte également vos propres limites émotionnelles.",
  },

  "Moon-Saturn": {
    title:
      "Sensibilité, retenue et maturité émotionnelle",
    core:
      "La Lune représente vos besoins affectifs, tandis que Saturne décrit vos limites, vos responsabilités et votre manière de vous protéger.",
    life:
      "Cette relation influence votre capacité à demander du soutien, votre peur possible de dépendre des autres et votre manière de contenir vos émotions.",
    integration:
      "Votre sécurité devient plus profonde lorsque vous pouvez accueillir votre vulnérabilité sans la considérer comme une faiblesse.",
  },

  "Moon-Uranus": {
    title:
      "Sécurité émotionnelle et besoin de liberté",
    core:
      "La Lune représente votre besoin de stabilité affective, tandis qu’Uranus décrit votre besoin d’indépendance, de nouveauté et de changement.",
    life:
      "Cette relation influence vos changements d’humeur, votre rapport à l’attachement et votre besoin d’alterner entre proximité et espace personnel.",
    integration:
      "Votre équilibre grandit lorsque vous créez une sécurité suffisamment souple pour ne pas devenir une forme d’enfermement.",
  },

  "Moon-Neptune": {
    title:
      "Sensibilité, intuition et réceptivité",
    core:
      "La Lune représente votre monde émotionnel, tandis que Neptune amplifie l’intuition, l’imagination et la sensibilité aux atmosphères.",
    life:
      "Cette combinaison influence votre empathie, vos rêves, votre créativité et votre tendance possible à absorber les émotions qui vous entourent.",
    integration:
      "Votre intuition devient plus claire lorsque vous apprenez à distinguer vos propres émotions de celles de votre environnement.",
  },

  "Moon-Pluto": {
    title:
      "Émotions profondes et transformation intérieure",
    core:
      "La Lune représente votre sécurité émotionnelle, tandis que Pluton décrit l’intensité, les transformations profondes et les mécanismes de protection.",
    life:
      "Cette relation influence votre mémoire affective, votre attachement, votre peur de perdre le contrôle et votre capacité à vous reconstruire après une épreuve.",
    integration:
      "Votre force émotionnelle grandit lorsque vous acceptez de traverser vos émotions sans chercher à les retenir ni à les contrôler entièrement.",
  },

  "Mercury-Venus": {
    title:
      "Pensée, communication et sens relationnel",
    core:
      "Mercure décrit votre manière de penser et de communiquer, tandis que Vénus représente votre sensibilité relationnelle, vos valeurs et votre recherche d’harmonie.",
    life:
      "Cette combinaison influence votre diplomatie, votre créativité verbale, votre charme et votre manière d’aborder les conversations délicates.",
    integration:
      "Votre communication devient plus authentique lorsque le désir de préserver l’harmonie ne vous empêche pas d’exprimer votre vérité.",
  },

  "Mars-Mercury": {
    title:
      "Pensée, parole et passage à l’action",
    core:
      "Mercure représente votre pensée et votre communication, tandis que Mars décrit votre énergie d’action et votre manière de défendre vos idées.",
    life:
      "Cette relation influence votre rapidité mentale, votre franchise, vos débats et votre tendance à agir ou répondre avant d’avoir tout considéré.",
    integration:
      "Votre parole devient plus puissante lorsque votre énergie mentale est dirigée avec précision plutôt que libérée dans l’urgence.",
  },

  "Jupiter-Mercury": {
    title:
      "Pensée, vision et compréhension globale",
    core:
      "Mercure représente votre manière d’analyser les informations, tandis que Jupiter décrit votre vision globale, vos convictions et votre recherche de sens.",
    life:
      "Cette combinaison influence votre apprentissage, votre ouverture intellectuelle, votre talent pour transmettre et votre tendance possible à généraliser.",
    integration:
      "Votre intelligence devient particulièrement convaincante lorsque votre vision d’ensemble repose sur des faits précis.",
  },

  "Mercury-Saturn": {
    title:
      "Pensée, structure et discernement",
    core:
      "Mercure représente votre pensée et votre communication, tandis que Saturne décrit la structure, la prudence et le sens des responsabilités.",
    life:
      "Cette relation influence votre concentration, votre sérieux intellectuel, votre peur de vous tromper et votre manière de prendre des décisions importantes.",
    integration:
      "Votre discernement grandit lorsque la prudence organise votre pensée sans bloquer votre capacité à essayer, parler ou apprendre.",
  },

  "Mercury-Uranus": {
    title:
      "Pensée, intuition intellectuelle et originalité",
    core:
      "Mercure représente votre pensée rationnelle, tandis qu’Uranus décrit les intuitions soudaines, l’originalité et le besoin de remettre en question les idées établies.",
    life:
      "Cette combinaison influence votre inventivité, votre rapidité mentale, votre intérêt pour les nouveautés et votre manière parfois surprenante de communiquer.",
    integration:
      "Votre originalité devient plus utile lorsque vous prenez le temps de structurer vos intuitions pour qu’elles puissent être comprises et appliquées.",
  },

  "Mercury-Neptune": {
    title:
      "Pensée, imagination et intuition",
    core:
      "Mercure représente votre logique et votre communication, tandis que Neptune décrit votre imagination, votre intuition et votre perception des dimensions plus subtiles.",
    life:
      "Cette relation influence votre créativité, votre sensibilité aux mots, votre intuition et votre tendance possible à confondre parfois impression et certitude.",
    integration:
      "Votre inspiration devient plus fiable lorsque l’intuition est accompagnée de vérifications concrètes et d’une expression claire.",
  },

  "Mercury-Pluto": {
    title:
      "Pensée profonde et pouvoir d’analyse",
    core:
      "Mercure représente votre pensée, tandis que Pluton décrit la profondeur, l’intensité et la volonté de comprendre ce qui demeure caché.",
    life:
      "Cette combinaison influence votre lucidité, votre capacité d’investigation, votre pouvoir de persuasion et votre tendance à analyser longuement les situations.",
    integration:
      "Votre intelligence devient transformatrice lorsque votre recherche de vérité n’est pas utilisée pour contrôler les autres ou nourrir la méfiance.",
  },

  "Mars-Venus": {
    title:
      "Amour, désir et dynamique relationnelle",
    core:
      "Vénus représente votre manière d’aimer et de rechercher l’harmonie, tandis que Mars décrit votre désir, votre initiative et votre manière de poursuivre ce que vous voulez.",
    life:
      "Cette relation influence votre séduction, votre passion, votre manière de gérer les désaccords et l’équilibre entre recevoir et prendre l’initiative.",
    integration:
      "Votre vie relationnelle devient plus vivante lorsque le désir peut s’exprimer sans écraser la tendresse ni le respect mutuel.",
  },

  "Jupiter-Venus": {
    title:
      "Affection, valeurs et générosité",
    core:
      "Vénus représente vos valeurs et votre manière d’aimer, tandis que Jupiter amplifie la confiance, la générosité et le désir de profiter pleinement de la vie.",
    life:
      "Cette combinaison influence votre optimisme relationnel, votre sociabilité, votre goût du plaisir et votre tendance possible aux excès affectifs ou matériels.",
    integration:
      "Votre générosité devient plus durable lorsqu’elle reste compatible avec vos ressources, vos limites et vos véritables valeurs.",
  },

  "Saturn-Venus": {
    title:
      "Amour, sécurité et engagement",
    core:
      "Vénus représente votre besoin d’affection et d’harmonie, tandis que Saturne décrit la prudence, les limites et la construction à long terme.",
    life:
      "Cette relation influence votre peur du rejet, votre sérieux affectif, votre loyauté et votre besoin de vérifier qu’une relation peut réellement durer.",
    integration:
      "Votre capacité d’engagement grandit lorsque la prudence protège votre cœur sans vous empêcher de recevoir l’affection.",
  },

  "Uranus-Venus": {
    title:
      "Amour, liberté et originalité relationnelle",
    core:
      "Vénus représente votre manière d’aimer, tandis qu’Uranus décrit votre besoin de liberté, de nouveauté et de relations différentes des conventions.",
    life:
      "Cette combinaison influence vos attirances soudaines, votre besoin d’espace et votre recherche de liens fondés sur l’égalité et l’authenticité.",
    integration:
      "Votre liberté relationnelle devient durable lorsqu’elle peut coexister avec la continuité, la communication et un engagement choisi.",
  },

  "Neptune-Venus": {
    title:
      "Amour, idéalisation et sensibilité",
    core:
      "Vénus représente votre manière d’aimer et vos valeurs, tandis que Neptune décrit l’idéal, l’imagination et la fusion émotionnelle.",
    life:
      "Cette relation influence votre romantisme, votre créativité, votre compassion et votre tendance possible à idéaliser une personne ou une relation.",
    integration:
      "Votre sensibilité affective devient une force lorsque vous pouvez aimer profondément sans renoncer au discernement ni à vos limites.",
  },

  "Pluto-Venus": {
    title:
      "Amour, intensité et transformation",
    core:
      "Vénus représente votre manière d’aimer, tandis que Pluton décrit l’intensité, le pouvoir de transformation et les mécanismes liés au contrôle.",
    life:
      "Cette combinaison influence votre passion, votre loyauté, votre jalousie possible et votre besoin de vivre des relations émotionnellement profondes.",
    integration:
      "Votre amour devient transformateur lorsque la confiance remplace progressivement le besoin de vérifier, retenir ou maîtriser l’autre.",
  },

  "Jupiter-Mars": {
    title:
      "Action, ambition et confiance",
    core:
      "Mars représente votre énergie d’action, tandis que Jupiter amplifie la confiance, l’ambition et le désir d’élargir vos possibilités.",
    life:
      "Cette combinaison influence votre courage, votre enthousiasme, votre esprit d’entreprise et votre tendance possible à agir avec excès ou impatience.",
    integration:
      "Votre capacité d’accomplissement grandit lorsque votre confiance s’accompagne d’une stratégie réaliste et d’un sens de la mesure.",
  },

  "Mars-Saturn": {
    title:
      "Action, résistance et discipline",
    core:
      "Mars représente votre impulsion d’action, tandis que Saturne décrit les limites, la patience, les responsabilités et la maîtrise à long terme.",
    life:
      "Cette relation influence votre persévérance, votre frustration, votre rapport aux obstacles et votre manière de doser effort, prudence et initiative.",
    integration:
      "Votre force devient particulièrement durable lorsque la discipline donne une direction à votre énergie sans la bloquer entièrement.",
  },

  "Mars-Uranus": {
    title:
      "Action, liberté et changements soudains",
    core:
      "Mars représente votre manière d’agir, tandis qu’Uranus décrit votre besoin de liberté, d’innovation et de changement rapide.",
    life:
      "Cette combinaison influence votre audace, votre impatience, vos réactions imprévisibles et votre capacité à prendre des initiatives originales.",
    integration:
      "Votre indépendance devient constructive lorsque l’action rapide conserve suffisamment de recul pour éviter les ruptures inutiles.",
  },

  "Mars-Neptune": {
    title:
      "Action, intuition et inspiration",
    core:
      "Mars représente votre énergie d’action, tandis que Neptune décrit votre intuition, vos idéaux et votre imagination.",
    life:
      "Cette relation influence votre motivation, votre créativité, votre compassion et votre difficulté possible à agir lorsque l’objectif manque de clarté.",
    integration:
      "Votre énergie devient plus efficace lorsque votre inspiration se traduit en étapes concrètes et en intentions clairement définies.",
  },

  "Mars-Pluto": {
    title:
      "Action, pouvoir et transformation",
    core:
      "Mars représente votre désir et votre capacité d’action, tandis que Pluton décrit l’intensité, le pouvoir intérieur et la transformation.",
    life:
      "Cette combinaison influence votre détermination, votre résistance, votre rapport aux conflits et votre capacité à mobiliser une énergie considérable.",
    integration:
      "Votre puissance devient constructive lorsque vous utilisez votre volonté pour transformer une situation plutôt que pour imposer un rapport de force.",
  },

  "Jupiter-Saturn": {
    title:
      "Expansion, prudence et construction",
    core:
      "Jupiter représente la confiance et l’expansion, tandis que Saturne décrit la prudence, la discipline et les responsabilités.",
    life:
      "Cette relation influence l’équilibre entre optimisme et réalisme, votre capacité à prendre des risques et votre manière de bâtir un projet durable.",
    integration:
      "Votre réussite grandit lorsque l’ambition de Jupiter peut s’appuyer sur la méthode, la patience et la solidité de Saturne.",
  },

  "Jupiter-Uranus": {
    title:
      "Expansion, liberté et innovation",
    core:
      "Jupiter représente la croissance et les possibilités, tandis qu’Uranus décrit l’innovation, la liberté et les changements inattendus.",
    life:
      "Cette combinaison influence votre ouverture, votre audace, votre goût de l’exploration et votre capacité à saisir rapidement une occasion différente.",
    integration:
      "Votre expansion devient durable lorsque l’enthousiasme pour le nouveau est accompagné d’un minimum de préparation.",
  },

  "Jupiter-Neptune": {
    title:
      "Confiance, idéal et quête de sens",
    core:
      "Jupiter représente vos convictions et votre désir de croissance, tandis que Neptune décrit vos idéaux, votre spiritualité et votre imagination.",
    life:
      "Cette relation influence votre foi, votre générosité, votre inspiration et votre tendance possible à croire fortement en une vision avant de l’avoir vérifiée.",
    integration:
      "Votre idéal devient une véritable force lorsque la confiance s’accompagne de discernement, de limites et d’actions concrètes.",
  },

  "Jupiter-Pluto": {
    title:
      "Expansion, influence et transformation",
    core:
      "Jupiter représente la croissance et la confiance, tandis que Pluton décrit le pouvoir, la transformation et la capacité à mobiliser des ressources profondes.",
    life:
      "Cette combinaison influence votre ambition, votre capacité de régénération, votre influence et votre désir de produire un changement important.",
    integration:
      "Votre pouvoir d’expansion devient constructif lorsqu’il sert une transformation consciente plutôt qu’une recherche permanente de contrôle.",
  },

  "Saturn-Uranus": {
    title:
      "Stabilité, liberté et changement",
    core:
      "Saturne représente la structure et la continuité, tandis qu’Uranus décrit la liberté, l’innovation et la rupture avec les anciens modèles.",
    life:
      "Cette relation influence votre rapport au changement, votre besoin de stabilité et votre capacité à réformer progressivement ce qui ne fonctionne plus.",
    integration:
      "Votre évolution devient durable lorsque vous savez renouveler les structures sans détruire inutilement les bases qui demeurent utiles.",
  },

  "Neptune-Saturn": {
    title:
      "Réalité, idéal et matérialisation",
    core:
      "Saturne représente la réalité, la discipline et les limites, tandis que Neptune décrit l’imagination, l’idéal et la sensibilité.",
    life:
      "Cette relation influence votre capacité à concrétiser un rêve, votre peur possible de perdre vos repères et votre besoin de donner une forme réelle à votre inspiration.",
    integration:
      "Votre idéal devient réalisable lorsque la structure soutient votre imagination sans l’étouffer.",
  },

  "Pluto-Saturn": {
    title:
      "Structure, résistance et transformation profonde",
    core:
      "Saturne représente les structures et les responsabilités, tandis que Pluton décrit la destruction, la régénération et les transformations profondes.",
    life:
      "Cette relation influence votre endurance, votre rapport aux crises, votre peur de perdre le contrôle et votre capacité à reconstruire sur des bases plus solides.",
    integration:
      "Votre force grandit lorsque vous acceptez de transformer les structures devenues trop rigides plutôt que de les maintenir à tout prix.",
  },

  "Neptune-Uranus": {
    title:
      "Innovation, intuition et vision collective",
    core:
      "Uranus représente l’innovation et le changement, tandis que Neptune décrit l’intuition, l’idéal et la sensibilité aux mouvements collectifs.",
    life:
      "Cette combinaison influence votre ouverture aux nouvelles idées, votre imagination et votre capacité à pressentir des changements avant qu’ils soient pleinement visibles.",
    integration:
      "Votre vision devient plus utile lorsque l’intuition et l’innovation peuvent être traduites en orientations compréhensibles et concrètes.",
  },

  "Pluto-Uranus": {
    title:
      "Liberté, rupture et transformation",
    core:
      "Uranus représente le changement soudain, tandis que Pluton décrit les transformations profondes et irréversibles.",
    life:
      "Cette relation influence votre rapport aux bouleversements, votre volonté de remettre en question les systèmes et votre capacité à participer à de profondes évolutions.",
    integration:
      "Votre force de changement devient constructive lorsqu’elle transforme consciemment plutôt que de rompre uniquement par opposition.",
  },

  "Neptune-Pluto": {
    title:
      "Intuition, profondeur et transformation collective",
    core:
      "Neptune représente l’imagination et la sensibilité, tandis que Pluton décrit la profondeur, le pouvoir de régénération et les transformations collectives.",
    life:
      "Cette combinaison influence votre perception des dimensions cachées, votre sensibilité aux changements profonds et votre capacité à donner un sens symbolique aux épreuves.",
    integration:
      "Votre intuition devient transformatrice lorsqu’elle s’accompagne de discernement et d’un véritable ancrage dans la réalité.",
  },
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 38,
    paddingBottom: 48,
    paddingHorizontal: 46,
    backgroundColor: "#0b1124",
    color: "#fff8e7",
    fontFamily: "Helvetica",
  },

  content: {
    flexGrow: 1,
  },

  badge: {
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginTop: 3,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: "#b88b3f",
    backgroundColor: "#111a34",
  },

  badgeText: {
    color: "#f4c95d",
    fontSize: 8,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },

  title: {
    color: "#fff8e7",
    fontSize: 21,
    textAlign: "center",
    marginBottom: 7,
  },

  intro: {
    color: "#c8c1b3",
    fontSize: 9.2,
    lineHeight: 1.5,
    textAlign: "center",
    marginBottom: 14,
    paddingHorizontal: 14,
  },

  continuation: {
    color: "#858ca0",
    fontSize: 7.5,
    textAlign: "center",
    marginBottom: 13,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  aspectCard: {
    position: "relative",
    marginBottom: 14,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 16,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  goldAccent: {
    position: "absolute",
    top: -1,
    left: -1,
    width: 82,
    height: 2,
    backgroundColor: "#f4c95d",
  },

  aspectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 2,
  },

  aspectHeading: {
    flexGrow: 1,
    flexBasis: 0,
    paddingRight: 10,
  },

  planetNames: {
    color: "#fff8e7",
    fontSize: 12.5,
    marginBottom: 4,
  },

  aspectName: {
    color: "#f4c95d",
    fontSize: 8.4,
    lineHeight: 1.3,
  },

  orbBox: {
    minWidth: 62,
    alignItems: "flex-end",
  },

  orbLabel: {
    color: "#858ca0",
    fontSize: 6.5,
    textTransform: "uppercase",
    marginBottom: 2,
    letterSpacing: 0.8,
  },

  orbValue: {
    color: "#e9e4d8",
    fontSize: 8.8,
    marginBottom: 3,
  },

  strengthValue: {
    color: "#f4c95d",
    fontSize: 7.2,
  },

  separator: {
    height: 1,
    backgroundColor: "#39415d",
    marginBottom: 9,
  },

  sectionLabel: {
    color: "#f4c95d",
    fontSize: 7.3,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
  },

  paragraph: {
    color: "#e9e4d8",
    fontSize: 8.7,
    lineHeight: 1.5,
    marginBottom: 8,
  },

  evolutionBox: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 11,
    backgroundColor: "#161f3d",
    borderLeftWidth: 2,
    borderLeftColor: "#f4c95d",
  },

  evolutionText: {
    color: "#e9e4d8",
    fontSize: 8.4,
    lineHeight: 1.45,
  },

  summaryCard: {
    marginBottom: 13,
    paddingVertical: 15,
    paddingHorizontal: 17,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  summaryTitle: {
    color: "#f4c95d",
    fontSize: 11.5,
    textAlign: "center",
    marginBottom: 8,
  },

  summaryText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },

  statsRow: {
    flexDirection: "row",
    marginBottom: 14,
  },

  statCard: {
    flexGrow: 1,
    flexBasis: 0,
    marginHorizontal: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#39415d",
    alignItems: "center",
  },

  statValue: {
    color: "#f4c95d",
    fontSize: 18,
    marginBottom: 4,
  },

  statLabel: {
    color: "#c8c1b3",
    fontSize: 7.2,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },

  guidanceCard: {
    paddingVertical: 15,
    paddingHorizontal: 17,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  guidanceTitle: {
    color: "#f4c95d",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 8,
  },

  guidanceText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },

  finalCard: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  finalTitle: {
    color: "#f4c95d",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 8,
  },

  finalText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },

  emptyCard: {
    marginTop: 30,
    paddingVertical: 24,
    paddingHorizontal: 22,
    backgroundColor: "#111a34",
    borderWidth: 1,
    borderColor: "#39415d",
  },

  emptyTitle: {
    color: "#f4c95d",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 9,
  },

  emptyText: {
    color: "#e9e4d8",
    fontSize: 9.2,
    lineHeight: 1.55,
    textAlign: "center",
  },

  practiceCard: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#161f3d",
    borderWidth: 1,
    borderColor: "#b88b3f",
  },

  practiceTitle: {
    color: "#f4c95d",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 8,
  },

  practiceText: {
    color: "#e9e4d8",
    fontSize: 9,
    lineHeight: 1.55,
    textAlign: "center",
  },
});

function normalizeLongitude(
  value: number
): number {
  return ((value % 360) + 360) % 360;
}

function angularDifference(
  firstLongitude: number,
  secondLongitude: number
): number {
  const first =
    normalizeLongitude(
      firstLongitude
    );

  const second =
    normalizeLongitude(
      secondLongitude
    );

  const rawDifference =
    Math.abs(
      first - second
    );

  return rawDifference > 180
    ? 360 - rawDifference
    : rawDifference;
}

function getValidPlanet(
  planets: SignatureAspectPlanet[],
  name: string
): SignatureAspectPlanet | null {
  const normalizedName =
    name.trim().toLowerCase();

  const planet = planets.find(
    (currentPlanet) => {
      const currentName =
        typeof currentPlanet?.name ===
        "string"
          ? currentPlanet.name
              .trim()
              .toLowerCase()
          : "";

      return (
        currentName ===
          normalizedName &&
        typeof currentPlanet.longitude ===
          "number" &&
        Number.isFinite(
          currentPlanet.longitude
        )
      );
    }
  );

  return planet ?? null;
}

function calculateAspects(
  planets: SignatureAspectPlanet[]
): CalculatedAspect[] {
  const calculatedAspects:
    CalculatedAspect[] = [];

  for (
    let firstIndex = 0;
    firstIndex <
    MAIN_PLANETS.length;
    firstIndex += 1
  ) {
    const firstName =
      MAIN_PLANETS[firstIndex];

    const firstPlanet =
      getValidPlanet(
        planets,
        firstName
      );

    if (
      !firstPlanet ||
      typeof firstPlanet.longitude !==
        "number"
    ) {
      continue;
    }

    for (
      let secondIndex =
        firstIndex + 1;
      secondIndex <
      MAIN_PLANETS.length;
      secondIndex += 1
    ) {
      const secondName =
        MAIN_PLANETS[secondIndex];

      const secondPlanet =
        getValidPlanet(
          planets,
          secondName
        );

      if (
        !secondPlanet ||
        typeof secondPlanet.longitude !==
          "number"
      ) {
        continue;
      }

      const difference =
        angularDifference(
          firstPlanet.longitude,
          secondPlanet.longitude
        );

      let closestAspect:
        | CalculatedAspect
        | null = null;

      for (const aspect of ASPECTS) {
        const currentOrb =
          Math.abs(
            difference -
              aspect.angle
          );

        if (
          currentOrb >
          aspect.orb
        ) {
          continue;
        }

        if (
          !closestAspect ||
          currentOrb <
            closestAspect.orb
        ) {
          closestAspect = {
            planetA: firstName,
            planetB: secondName,
            aspect,
            exactDifference:
              difference,
            orb: currentOrb,
          };
        }
      }

      if (closestAspect) {
        calculatedAspects.push(
          closestAspect
        );
      }
    }
  }

  return calculatedAspects.sort(
    (
      firstAspect,
      secondAspect
    ) => {
      const firstStrength =
        firstAspect.orb /
        firstAspect.aspect.orb;

      const secondStrength =
        secondAspect.orb /
        secondAspect.aspect.orb;

      return (
        firstStrength -
        secondStrength
      );
    }
  );
}

function formatOrb(
  value: number
): string {
  return `${value.toFixed(1)}°`;
}

function getAspectStrength(
  aspect: CalculatedAspect
): string {
  const ratio =
    aspect.orb /
    aspect.aspect.orb;

  if (ratio <= 0.25) {
    return "Très puissant";
  }

  if (ratio <= 0.5) {
    return "Puissant";
  }

  if (ratio <= 0.75) {
    return "Modéré";
  }

  return "Subtil";
}

function getPairKey(
  firstPlanet: string,
  secondPlanet: string
): string {
  return [
    firstPlanet,
    secondPlanet,
  ]
    .sort()
    .join("-");
}

function getPairTheme(
  firstPlanet: string,
  secondPlanet: string
): PairTheme {
  const key =
    getPairKey(
      firstPlanet,
      secondPlanet
    );

  const existingTheme =
    PAIR_THEMES[key];

  if (existingTheme) {
    return existingTheme;
  }

  const firstEnergy =
    PLANET_ENERGIES[
      firstPlanet
    ] ||
    "une dimension importante de votre personnalité";

  const secondEnergy =
    PLANET_ENERGIES[
      secondPlanet
    ] ||
    "une autre dimension importante de votre personnalité";

  const firstManifestation =
    PLANET_MANIFESTATIONS[
      firstPlanet
    ] ||
    "dans votre vie personnelle";

  const secondManifestation =
    PLANET_MANIFESTATIONS[
      secondPlanet
    ] ||
    "dans vos expériences importantes";

  return {
    title:
      "Interaction entre deux dimensions de votre personnalité",

    core:
      `Cette relation astrologique met en dialogue ${firstEnergy} et ${secondEnergy}.`,

    life:
      `Elle peut se manifester ${firstManifestation}, mais également ${secondManifestation}.`,

    integration:
      "Votre équilibre grandit lorsque vous reconnaissez les besoins distincts de ces deux énergies et leur permettez de collaborer consciemment.",
  };
}

function getAspectInterpretation(
  calculatedAspect: CalculatedAspect
): AspectInterpretation {
  const firstPlanet =
    PLANET_NAMES_FR[
      calculatedAspect.planetA
    ] ||
    calculatedAspect.planetA;

  const secondPlanet =
    PLANET_NAMES_FR[
      calculatedAspect.planetB
    ] ||
    calculatedAspect.planetB;

  const pairTheme =
    getPairTheme(
      calculatedAspect.planetA,
      calculatedAspect.planetB
    );

  switch (
    calculatedAspect.aspect.name
  ) {
    case "Conjonction":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} unissent étroitement leurs fonctions. ` +
          `${pairTheme.core} ` +
          `La conjonction intensifie cette combinaison et lui donne une place centrale dans votre fonctionnement.`,

        manifestation:
          `${pairTheme.life} ` +
          `Ces deux énergies ont tendance à réagir simultanément. Elles peuvent créer une grande concentration, une forte détermination et une manière très personnelle de vivre le thème suivant : ${pairTheme.title.toLowerCase()}. ` +
          `Cette intensité peut toutefois réduire votre recul lorsque l’une des deux fonctions prend toute la place.`,

        evolution:
          `${pairTheme.integration} ` +
          `Votre clé d’évolution consiste à distinguer ce qui appartient à ${firstPlanet} de ce qui appartient à ${secondPlanet}, afin que leur fusion devienne une force cohérente plutôt qu’un automatisme.`,
      };

    case "Sextile":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} entretiennent un échange constructif. ` +
          `${pairTheme.core} ` +
          `Le sextile indique une possibilité naturelle de coopération qui demande généralement une initiative consciente pour révéler tout son potentiel.`,

        manifestation:
          `${pairTheme.life} ` +
          `Vous pouvez progressivement développer une manière souple et créative d’utiliser ces deux fonctions ensemble. ` +
          `Les occasions offertes par cet aspect peuvent toutefois rester discrètes si vous ne choisissez pas activement de les explorer.`,

        evolution:
          `${pairTheme.integration} ` +
          `Votre clé d’évolution consiste à pratiquer volontairement cette alliance afin qu’une disposition favorable devienne un véritable talent personnel.`,
      };

    case "Carré":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} créent une tension dynamique. ` +
          `${pairTheme.core} ` +
          `Le carré révèle deux besoins puissants qui peuvent se contredire, s’interrompre ou chercher à s’imposer l’un au détriment de l’autre.`,

        manifestation:
          `${pairTheme.life} ` +
          `Vous pouvez avoir l’impression de devoir choisir entre deux attitudes différentes, ou répéter certaines réactions jusqu’à trouver une manière plus consciente de les concilier. ` +
          `Cette friction peut être exigeante, mais elle constitue également un puissant moteur de progression.`,

        evolution:
          `${pairTheme.integration} ` +
          `Votre clé d’évolution ne consiste pas à supprimer l’un des deux pôles, mais à créer une troisième voie dans laquelle tension, volonté et maturité peuvent travailler ensemble.`,
      };

    case "Trigone":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} circulent ensemble avec fluidité. ` +
          `${pairTheme.core} ` +
          `Le trigone indique une qualité naturelle qui peut s’exprimer avec peu d’effort et soutenir spontanément votre équilibre.`,

        manifestation:
          `${pairTheme.life} ` +
          `Vous pouvez utiliser cette facilité presque instinctivement, parfois sans réaliser qu’elle représente un véritable talent. ` +
          `Lorsque vous lui donnez une direction précise, elle peut devenir une ressource importante dans vos choix, vos relations et vos accomplissements.`,

        evolution:
          `${pairTheme.integration} ` +
          `Votre clé d’évolution consiste à ne pas laisser cette facilité fonctionner uniquement de manière automatique. En la développant consciemment, vous transformez une disposition naturelle en talent durable.`,
      };

    case "Opposition":
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} se placent face à face. ` +
          `${pairTheme.core} ` +
          `L’opposition crée une polarité dans laquelle les deux besoins cherchent à être reconnus, mais peuvent sembler difficiles à satisfaire simultanément.`,

        manifestation:
          `${pairTheme.life} ` +
          `Vous pouvez alterner entre deux attitudes extrêmes ou rencontrer chez les autres une qualité que vous avez plus de difficulté à reconnaître en vous-même. ` +
          `Les relations deviennent souvent un miroir important de cette dynamique.`,

        evolution:
          `${pairTheme.integration} ` +
          `Votre clé d’évolution consiste à sortir de la logique du tout ou rien. L’équilibre apparaît lorsque vous intégrez progressivement les qualités complémentaires de ${firstPlanet} et de ${secondPlanet}.`,
      };

    default:
      return {
        introduction:
          `${firstPlanet} et ${secondPlanet} forment une interaction importante dans votre thème natal. ${pairTheme.core}`,

        manifestation:
          pairTheme.life,

        evolution:
          pairTheme.integration,
      };
  }
}

function getAspectStatistics(
  aspects: CalculatedAspect[]
): AspectStatistics {
  const planetCounts:
    Record<string, number> = {};

  for (const planet of MAIN_PLANETS) {
    planetCounts[planet] = 0;
  }

  for (const aspect of aspects) {
    planetCounts[
      aspect.planetA
    ] =
      (planetCounts[
        aspect.planetA
      ] || 0) + 1;

    planetCounts[
      aspect.planetB
    ] =
      (planetCounts[
        aspect.planetB
      ] || 0) + 1;
  }

  const rankedPlanets =
    Object.entries(
      planetCounts
    ).sort(
      (
        firstEntry,
        secondEntry
      ) =>
        secondEntry[1] -
        firstEntry[1]
    );

  const mostAspectedPlanet =
    rankedPlanets.length > 0 &&
    rankedPlanets[0][1] > 0
      ? rankedPlanets[0][0]
      : null;

  const mostAspectedCount =
    rankedPlanets.length > 0
      ? rankedPlanets[0][1]
      : 0;

  const positiveCounts =
    rankedPlanets
      .map(([, count]) => count)
      .filter(
        (count) =>
          count > 0
      );

  const minimumPositiveCount =
    positiveCounts.length > 0
      ? Math.min(
          ...positiveCounts
        )
      : 0;

  const leastAspectedPlanets =
    rankedPlanets
      .filter(
        ([, count]) =>
          count === 0 ||
          count ===
            minimumPositiveCount
      )
      .map(
        ([planet]) =>
          planet
      )
      .slice(0, 3);

  const conjunctionCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name ===
        "Conjonction"
    ).length;

  const sextileCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name ===
        "Sextile"
    ).length;

  const squareCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name ===
        "Carré"
    ).length;

  const trineCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name ===
        "Trigone"
    ).length;

  const oppositionCount =
    aspects.filter(
      ({ aspect }) =>
        aspect.name ===
        "Opposition"
    ).length;

  return {
    total: aspects.length,

    harmoniousCount:
      sextileCount +
      trineCount,

    dynamicCount:
      squareCount +
      oppositionCount,

    conjunctionCount,
    sextileCount,
    squareCount,
    trineCount,
    oppositionCount,
    mostAspectedPlanet,
    mostAspectedCount,
    leastAspectedPlanets,
  };
}

function getDominantAspectName(
  statistics: AspectStatistics
): AspectName | null {
  const entries: Array<
    [AspectName, number]
  > = [
    [
      "Conjonction",
      statistics.conjunctionCount,
    ],
    [
      "Sextile",
      statistics.sextileCount,
    ],
    [
      "Carré",
      statistics.squareCount,
    ],
    [
      "Trigone",
      statistics.trineCount,
    ],
    [
      "Opposition",
      statistics.oppositionCount,
    ],
  ];

  const sorted =
    entries.sort(
      (
        firstEntry,
        secondEntry
      ) =>
        secondEntry[1] -
        firstEntry[1]
    );

  if (
    sorted.length === 0 ||
    sorted[0][1] === 0
  ) {
    return null;
  }

  return sorted[0][0];
}

function getGlobalSynthesis(
  aspects: CalculatedAspect[]
): string {
  const statistics =
    getAspectStatistics(
      aspects
    );

  const dominantAspect =
    getDominantAspectName(
      statistics
    );

  const mostAspectedName =
    statistics.mostAspectedPlanet
      ? PLANET_NAMES_FR[
          statistics
            .mostAspectedPlanet
        ] ||
        statistics
          .mostAspectedPlanet
      : null;

  let generalMessage =
    "Votre thème présente un équilibre entre fluidité, intensité et tension créatrice.";

  if (
    statistics.dynamicCount >
      statistics.harmoniousCount &&
    statistics.dynamicCount >
      statistics.conjunctionCount
  ) {
    generalMessage =
      "Votre thème présente une proportion importante d’aspects dynamiques. Ces configurations créent une forte énergie de transformation. Elles vous poussent à dépasser certaines contradictions, à développer votre maîtrise intérieure et à convertir les tensions en décisions plus conscientes.";
  } else if (
    statistics.harmoniousCount >
      statistics.dynamicCount &&
    statistics.harmoniousCount >=
      statistics.conjunctionCount
  ) {
    generalMessage =
      "Votre thème présente plusieurs échanges harmonieux entre les planètes. Vous disposez de ressources naturelles, de talents spontanés et d’une capacité à relier différentes facettes de votre personnalité. Votre défi consiste surtout à utiliser activement ces facilités plutôt qu’à les considérer comme acquises.";
  } else if (
    statistics.conjunctionCount >
      statistics.harmoniousCount &&
    statistics.conjunctionCount >
      statistics.dynamicCount
  ) {
    generalMessage =
      "Les conjonctions occupent une place importante dans votre thème. Plusieurs énergies planétaires sont concentrées et fonctionnent comme des moteurs centraux de votre personnalité. Cette intensité soutient une grande détermination, mais demande également du recul et de la souplesse.";
  }

  let dominantMessage = "";

  switch (dominantAspect) {
    case "Carré":
      dominantMessage =
        " Le carré est l’aspect le plus fréquent : votre évolution s’appuie fortement sur votre capacité à transformer les conflits intérieurs en action constructive.";
      break;

    case "Trigone":
      dominantMessage =
        " Le trigone est l’aspect le plus fréquent : votre thème contient plusieurs qualités naturelles qui peuvent devenir de véritables talents lorsque vous les utilisez consciemment.";
      break;

    case "Opposition":
      dominantMessage =
        " L’opposition est l’aspect le plus fréquent : votre parcours demande souvent de trouver un équilibre entre des besoins apparemment contraires, notamment à travers vos relations.";
      break;

    case "Sextile":
      dominantMessage =
        " Le sextile est l’aspect le plus fréquent : de nombreuses possibilités de coopération existent entre vos énergies, mais elles demandent généralement une initiative personnelle pour se développer.";
      break;

    case "Conjonction":
      dominantMessage =
        " La conjonction est l’aspect le plus fréquent : certaines dimensions de votre personnalité fonctionnent de manière très rapprochée et donnent une forte intensité à vos réactions et à vos choix.";
      break;

    default:
      dominantMessage = "";
      break;
  }

  const planetMessage =
    mostAspectedName
      ? ` ${mostAspectedName} est la planète la plus reliée de cette analyse, avec ${statistics.mostAspectedCount} interactions majeures. Son énergie agit donc comme un point de convergence important entre plusieurs dimensions de votre personnalité.`
      : "";

  return (
    generalMessage +
    dominantMessage +
    planetMessage
  );
}

function getGlobalGuidance(
  aspects: CalculatedAspect[]
): string {
  const strongestAspect =
    aspects[0];

  if (!strongestAspect) {
    return (
      "Observez progressivement la manière dont vos différentes énergies intérieures collaborent dans votre vie quotidienne."
    );
  }

  const firstPlanet =
    PLANET_NAMES_FR[
      strongestAspect.planetA
    ] ||
    strongestAspect.planetA;

  const secondPlanet =
    PLANET_NAMES_FR[
      strongestAspect.planetB
    ] ||
    strongestAspect.planetB;

  const pairTheme =
    getPairTheme(
      strongestAspect.planetA,
      strongestAspect.planetB
    );

  return (
    `L’aspect le plus précis de cette analyse relie ${firstPlanet} et ${secondPlanet} par une ${strongestAspect.aspect.name.toLowerCase()}, avec un orbe de ${formatOrb(strongestAspect.orb)}. ` +
    `Il concerne principalement ${pairTheme.title.toLowerCase()}. ` +
    `${pairTheme.integration} ` +
    `Cette interaction mérite une attention particulière, car elle peut se manifester régulièrement dans vos réactions, vos choix et vos relations.`
  );
}

function getFinalAspectMessage(
  aspects: CalculatedAspect[]
): string {
  if (aspects.length === 0) {
    return (
      "Votre thème natal forme un ensemble vivant dans lequel chaque planète participe à votre évolution."
    );
  }

  const statistics =
    getAspectStatistics(
      aspects
    );

  const mostAspectedName =
    statistics.mostAspectedPlanet
      ? PLANET_NAMES_FR[
          statistics
            .mostAspectedPlanet
        ] ||
        statistics
          .mostAspectedPlanet
      : null;

  const lessConnectedNames =
    statistics
      .leastAspectedPlanets
      .map(
        (planet) =>
          PLANET_NAMES_FR[
            planet
          ] || planet
      )
      .join(", ");

  let centralMessage =
    "Votre personnalité combine des ressources naturelles, des concentrations d’énergie et des tensions capables de soutenir une évolution profonde.";

  if (
    statistics.squareCount +
      statistics.oppositionCount >=
    statistics.trineCount +
      statistics.sextileCount +
      2
  ) {
    centralMessage =
      "Votre thème possède une forte énergie de progression. Les tensions ne sont pas de simples obstacles : elles vous obligent à développer des réponses plus conscientes, une plus grande maîtrise et une capacité remarquable à évoluer à travers l’expérience.";
  } else if (
    statistics.trineCount +
      statistics.sextileCount >=
    statistics.squareCount +
      statistics.oppositionCount +
      2
  ) {
    centralMessage =
      "Votre thème contient plusieurs ressources naturelles. Certaines qualités fonctionnent avec une grande fluidité et peuvent vous aider à retrouver plus facilement votre équilibre. Votre progression dépend surtout de votre volonté d’utiliser activement ces talents.";
  } else if (
    statistics.conjunctionCount >=
      4
  ) {
    centralMessage =
      "Votre thème présente plusieurs concentrations planétaires importantes. Certaines fonctions intérieures agissent comme un seul moteur et donnent beaucoup d’intensité à votre personnalité, à vos choix et à vos engagements.";
  }

  const planetMessage =
    mostAspectedName
      ? ` ${mostAspectedName} joue un rôle particulièrement central, car cette planète relie plusieurs dimensions de votre thème et influence la manière dont vos différentes énergies se répondent.`
      : "";

  const independentMessage =
    lessConnectedNames
      ? ` Les planètes moins directement reliées, notamment ${lessConnectedNames}, peuvent s’exprimer de manière plus autonome ou demander une attention volontaire afin d’être pleinement intégrées au reste de votre fonctionnement.`
      : "";

  return (
    centralMessage +
    planetMessage +
    independentMessage +
    " En observant ces dialogues avec recul, vous pouvez comprendre non seulement chacune de vos qualités, mais surtout la manière unique dont elles s’unissent pour former votre signature astrologique."
  );
}

function getAspectPriority(
  aspects: CalculatedAspect[]
): string {
  const statistics =
    getAspectStatistics(
      aspects
    );

  const dominantAspect =
    getDominantAspectName(
      statistics
    );

  switch (dominantAspect) {
    case "Conjonction":
      return (
        "Votre priorité consiste à mieux distinguer puis intégrer les énergies qui fonctionnent ensemble avec une forte intensité. En créant plus de recul entre ces fonctions, vous pouvez utiliser leur puissance sans agir uniquement par automatisme."
      );

    case "Trigone":
      return (
        "Votre priorité consiste à utiliser plus consciemment vos talents naturels afin qu’ils deviennent de véritables forces d’accomplissement. Une facilité non développée peut rester discrète, tandis qu’un talent cultivé devient une ressource durable."
      );

    case "Carré":
      return (
        "Votre priorité consiste à transformer les tensions répétitives en décisions plus conscientes et en progression concrète. Les défis de votre thème peuvent devenir de puissants moteurs lorsque vous cessez de les vivre comme des contradictions impossibles à résoudre."
      );

    case "Opposition":
      return (
        "Votre priorité consiste à sortir du tout ou rien et à créer un meilleur équilibre entre des besoins apparemment contraires. Les relations et les situations de polarité peuvent vous aider à reconnaître des qualités que vous projetez parfois à l’extérieur de vous."
      );

    case "Sextile":
      return (
        "Votre priorité consiste à saisir activement les possibilités de coopération présentes dans votre thème. Ces ressources demandent souvent une initiative personnelle avant de révéler tout leur potentiel."
      );

    default:
      return (
        "Votre priorité consiste à observer comment vos différentes énergies collaborent dans vos choix, vos relations et votre évolution. Cette attention vous aide à transformer vos réactions automatiques en réponses plus conscientes."
      );
  }
}

function splitIntoPages<T>(
  values: T[],
  pageSize: number
): T[][] {
  const pages: T[][] = [];

  for (
    let index = 0;
    index < values.length;
    index += pageSize
  ) {
    pages.push(
      values.slice(
        index,
        index + pageSize
      )
    );
  }

  return pages;
}

export default function PdfSignatureAspects({
  planets,
}: PdfSignatureAspectsProps) {
  const safePlanets =
    Array.isArray(planets)
      ? planets
      : [];

  const allCalculatedAspects =
    calculateAspects(
      safePlanets
    );

  if (
    allCalculatedAspects.length ===
    0
  ) {
    return (
      <Page
        size="A4"
        style={styles.page}
      >
        <PdfSignatureBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text
              style={
                styles.badgeText
              }
            >
              Analyse Signature
            </Text>
          </View>

          <Text style={styles.title}>
            Vos aspects planétaires
          </Text>

          <Text style={styles.intro}>
            Les aspects représentent les relations angulaires
            entre les planètes. Ils montrent comment les
            différentes dimensions de votre personnalité
            collaborent, se renforcent ou se mettent
            mutuellement au défi.
          </Text>

          <View
            style={styles.emptyCard}
          >
            <Text
              style={
                styles.emptyTitle
              }
            >
              Analyse indisponible
            </Text>

            <Text
              style={
                styles.emptyText
              }
            >
              Les longitudes planétaires nécessaires au calcul
              des aspects ne sont pas disponibles dans les
              données de ce thème natal.
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>
    );
  }

  const displayedAspects =
    allCalculatedAspects.slice(
      0,
      18
    );

  const aspectPages =
    splitIntoPages(
      displayedAspects,
      2
    );

  const statistics =
    getAspectStatistics(
      allCalculatedAspects
    );

  return (
    <>
      {aspectPages.map(
        (
          pageAspects,
          pageIndex
        ) => (
          <Page
            key={`signature-aspects-page-${pageIndex}`}
            size="A4"
            style={styles.page}
          >
            <PdfSignatureBrandHeader />

            <View
              style={
                styles.content
              }
            >
              <View
                style={
                  styles.badge
                }
              >
                <Text
                  style={
                    styles.badgeText
                  }
                >
                  Analyse Signature
                </Text>
              </View>

              <Text
                style={
                  styles.title
                }
              >
                {pageIndex === 0
                  ? "Vos aspects planétaires"
                  : "Vos aspects planétaires — suite"}
              </Text>

              {pageIndex === 0 ? (
                <Text
                  style={
                    styles.intro
                  }
                >
                  Les aspects décrivent les échanges entre les
                  planètes de votre thème. Ils révèlent vos
                  talents naturels, vos tensions intérieures et
                  les mécanismes qui participent à votre
                  évolution personnelle.
                </Text>
              ) : (
                <Text
                  style={
                    styles.continuation
                  }
                >
                  Partie{" "}
                  {pageIndex + 1}{" "}
                  sur{" "}
                  {
                    aspectPages.length
                  }
                </Text>
              )}

              {pageAspects.map(
                (
                  calculatedAspect
                ) => {
                  const firstPlanet =
                    PLANET_NAMES_FR[
                      calculatedAspect
                        .planetA
                    ] ||
                    calculatedAspect
                      .planetA;

                  const secondPlanet =
                    PLANET_NAMES_FR[
                      calculatedAspect
                        .planetB
                    ] ||
                    calculatedAspect
                      .planetB;

                  const interpretation =
                    getAspectInterpretation(
                      calculatedAspect
                    );

                  const pairTheme =
                    getPairTheme(
                      calculatedAspect
                        .planetA,
                      calculatedAspect
                        .planetB
                    );

                  return (
                    <View
                      key={[
                        calculatedAspect
                          .planetA,
                        calculatedAspect
                          .aspect.name,
                        calculatedAspect
                          .planetB,
                      ].join("-")}
                      style={
                        styles.aspectCard
                      }
                      wrap={false}
                    >
                      <View
                        style={
                          styles.goldAccent
                        }
                      />

                      <View
                        style={
                          styles.aspectHeader
                        }
                      >
                        <View
                          style={
                            styles.aspectHeading
                          }
                        >
                          <Text
                            style={
                              styles.planetNames
                            }
                          >
                            {
                              firstPlanet
                            }{" "}
                            {
                              calculatedAspect
                                .aspect.name
                            }{" "}
                            {
                              secondPlanet
                            }
                          </Text>

                          <Text
                            style={
                              styles.aspectName
                            }
                          >
                            {
                              pairTheme.title
                            }{" "}
                            ·{" "}
                            {
                              calculatedAspect
                                .aspect.nature
                            }
                          </Text>
                        </View>

                        <View
                          style={
                            styles.orbBox
                          }
                        >
                          <Text
                            style={
                              styles.orbLabel
                            }
                          >
                            Orbe
                          </Text>

                          <Text
                            style={
                              styles.orbValue
                            }
                          >
                            {formatOrb(
                              calculatedAspect.orb
                            )}
                          </Text>

                          <Text
                            style={
                              styles.strengthValue
                            }
                          >
                            {getAspectStrength(
                              calculatedAspect
                            )}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={
                          styles.separator
                        }
                      />

                      <Text
                        style={
                          styles.sectionLabel
                        }
                      >
                        Signification de
                        l’aspect
                      </Text>

                      <Text
                        style={
                          styles.paragraph
                        }
                      >
                        {
                          interpretation.introduction
                        }
                      </Text>

                      <Text
                        style={
                          styles.sectionLabel
                        }
                      >
                        Manifestation dans
                        votre vie
                      </Text>

                      <Text
                        style={
                          styles.paragraph
                        }
                      >
                        {
                          interpretation.manifestation
                        }
                      </Text>

                      <View
                        style={
                          styles.evolutionBox
                        }
                      >
                        <Text
                          style={
                            styles.sectionLabel
                          }
                        >
                          Votre clé
                          d’évolution
                        </Text>

                        <Text
                          style={
                            styles.evolutionText
                          }
                        >
                          {
                            interpretation.evolution
                          }
                        </Text>
                      </View>
                    </View>
                  );
                }
              )}
            </View>

            <PdfSignaturePageFooter />
          </Page>
        )
      )}

      <Page
        size="A4"
        style={styles.page}
      >
        <PdfSignatureBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text
              style={
                styles.badgeText
              }
            >
              Synthèse Signature
            </Text>
          </View>

          <Text style={styles.title}>
            Synthèse de vos aspects
          </Text>

          <Text style={styles.intro}>
            Cette synthèse présente l’équilibre général entre
            vos facilités naturelles, vos tensions créatrices,
            vos concentrations d’énergie et les planètes qui
            occupent une place centrale dans votre thème natal.
          </Text>

          <View
            style={styles.statsRow}
          >
            <View
              style={styles.statCard}
            >
              <Text
                style={
                  styles.statValue
                }
              >
                {statistics.total}
              </Text>

              <Text
                style={
                  styles.statLabel
                }
              >
                Aspects détectés
              </Text>
            </View>

            <View
              style={styles.statCard}
            >
              <Text
                style={
                  styles.statValue
                }
              >
                {
                  statistics.harmoniousCount
                }
              </Text>

              <Text
                style={
                  styles.statLabel
                }
              >
                Aspects harmonieux
              </Text>
            </View>

            <View
              style={styles.statCard}
            >
              <Text
                style={
                  styles.statValue
                }
              >
                {
                  statistics.dynamicCount
                }
              </Text>

              <Text
                style={
                  styles.statLabel
                }
              >
                Aspects dynamiques
              </Text>
            </View>

            <View
              style={styles.statCard}
            >
              <Text
                style={
                  styles.statValue
                }
              >
                {
                  statistics.conjunctionCount
                }
              </Text>

              <Text
                style={
                  styles.statLabel
                }
              >
                Conjonctions
              </Text>
            </View>
          </View>

          <View
            style={
              styles.summaryCard
            }
          >
            <Text
              style={
                styles.summaryTitle
              }
            >
              Votre dynamique
              générale
            </Text>

            <Text
              style={
                styles.summaryText
              }
            >
              {getGlobalSynthesis(
                allCalculatedAspects
              )}
            </Text>
          </View>

          <View
            style={
              styles.guidanceCard
            }
          >
            <Text
              style={
                styles.guidanceTitle
              }
            >
              Votre point
              d’attention principal
            </Text>

            <Text
              style={
                styles.guidanceText
              }
            >
              {getGlobalGuidance(
                allCalculatedAspects
              )}
            </Text>
          </View>

          <View
            style={
              styles.finalCard
            }
          >
            <Text
              style={
                styles.finalTitle
              }
            >
              Ce que révèlent
              ensemble vos aspects
              planétaires
            </Text>

            <Text
              style={
                styles.finalText
              }
            >
              {getFinalAspectMessage(
                allCalculatedAspects
              )}
            </Text>
          </View>

        </View>

        <PdfSignaturePageFooter />
      </Page>

      <Page
        size="A4"
        style={styles.page}
        wrap={false}
      >
        <PdfSignatureBrandHeader />

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Guide Signature
            </Text>
          </View>

          <Text style={styles.title}>
            Comment intégrer vos aspects
          </Text>

          <Text style={styles.intro}>
            Cette page vous aide à transformer la lecture de vos
            aspects planétaires en repères concrets pour votre
            évolution personnelle.
          </Text>

          <View
            style={styles.practiceCard}
            wrap={false}
          >
            <Text style={styles.practiceTitle}>
              Comment utiliser cette analyse
            </Text>

            <Text style={styles.practiceText}>
              Les aspects planétaires décrivent des tendances qui
              évoluent avec votre expérience de vie. Les aspects
              harmonieux représentent vos ressources naturelles,
              tandis que les aspects dynamiques révèlent les domaines
              où votre progression peut être la plus profonde.
              Observez particulièrement les situations qui activent
              votre aspect le plus précis et votre planète la plus
              reliée. Elles constituent souvent des points importants
              de votre fonctionnement intérieur et de votre évolution
              personnelle.
            </Text>
          </View>

          <View
            style={styles.finalCard}
            wrap={false}
          >
            <Text style={styles.finalTitle}>
              Ce que vos aspects vous enseignent
            </Text>

            <Text style={styles.finalText}>
              Les interactions de votre thème montrent que votre
              évolution ne dépend pas seulement de vos qualités
              naturelles. Elle repose aussi sur votre capacité à relier
              des besoins parfois différents, à reconnaître vos
              automatismes et à choisir une réponse plus consciente.
              Avec le temps, certaines tensions deviennent des forces,
              tandis que certaines facilités demandent à être
              développées pour révéler tout leur potentiel.
            </Text>
          </View>

          <View
            style={styles.guidanceCard}
            wrap={false}
          >
            <Text style={styles.guidanceTitle}>
              Votre priorité actuelle
            </Text>

            <Text style={styles.guidanceText}>
              {getAspectPriority(
                allCalculatedAspects
              )}
            </Text>
          </View>

          <View
            style={styles.finalCard}
            wrap={false}
          >
            <Text style={styles.finalTitle}>
              Trois repères à conserver
            </Text>

            <Text style={styles.finalText}>
              ✦ Observez les situations qui activent vos aspects
              les plus précis.
              {"\n\n"}
              ✦ Appuyez-vous sur vos aspects harmonieux lorsque
              vous traversez une période plus exigeante.
              {"\n\n"}
              ✦ Revenez à cette analyse au fil du temps : certains
              aspects prennent davantage de sens avec l’expérience.
            </Text>
          </View>
        </View>

        <PdfSignaturePageFooter />
      </Page>
    </>
  );
}
