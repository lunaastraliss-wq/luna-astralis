import type {
  CompatibilityAspect,
} from "../CompatibilityPdfTypes";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AspectType =
  CompatibilityAspect["type"];

type AspectInterpretationMap = Record<
  string,
  string
>;

/*
|--------------------------------------------------------------------------
| Normalisation
|--------------------------------------------------------------------------
*/

function normalizeValue(
  value: unknown,
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

/*
|--------------------------------------------------------------------------
| Noms canoniques des planètes
|--------------------------------------------------------------------------
|
| Cela permet de reconnaître autant :
|
| Sun / Soleil
| Moon / Lune
| Mercury / Mercure
| Venus / Vénus
| Mars
| Jupiter
| Saturn / Saturne
| Uranus
| Neptune
| Pluto / Pluton
|
*/

function normalizePlanet(
  planet: string,
): string {
  const normalized =
    normalizeValue(planet);

  const aliases: Record<
    string,
    string
  > = {
    sun: "sun",
    soleil: "sun",

    moon: "moon",
    lune: "moon",

    mercury: "mercury",
    mercure: "mercury",

    venus: "venus",

    mars: "mars",

    jupiter: "jupiter",

    saturn: "saturn",
    saturne: "saturn",

    uranus: "uranus",

    neptune: "neptune",

    pluto: "pluto",
    pluton: "pluto",
  };

  return (
    aliases[normalized] ??
    normalized
  );
}

/*
|--------------------------------------------------------------------------
| Clé unique
|--------------------------------------------------------------------------
|
| L’ordre des planètes est normalisé.
|
| Mars carré Saturne
| Saturne carré Mars
|
| utiliseront donc la même interprétation.
|
*/

function createAspectKey(
  planet1: string,
  aspect: AspectType,
  planet2: string,
): string {
  const planets = [
    normalizePlanet(planet1),
    normalizePlanet(planet2),
  ].sort();

  return [
    planets[0],
    normalizeValue(aspect),
    planets[1],
  ].join("-");
}

/*
|--------------------------------------------------------------------------
| Interprétations personnalisées
|--------------------------------------------------------------------------
|
| Chaque clé représente :
|
| planète 1 + type d’aspect + planète 2
|
| Les planètes sont placées automatiquement
| dans un ordre alphabétique constant.
|
*/

const ASPECT_INTERPRETATIONS:
  AspectInterpretationMap = {
  /*
  |--------------------------------------------------------------------------
  | Soleil
  |--------------------------------------------------------------------------
  */

  "sun-opposition-venus":
    "L’identité de l’un et la manière d’aimer de l’autre peuvent parfois tirer la relation dans deux directions différentes. L’attirance demeure présente, mais l’équilibre demande de respecter autant le besoin de reconnaissance que les attentes affectives.",

  "moon-opposition-sun":
    "L’expression consciente de l’un peut entrer en contraste avec les réactions émotionnelles de l’autre. Cette polarité invite le couple à concilier affirmation personnelle et sécurité affective.",

  "mars-square-sun":
    "La volonté et l’action peuvent entrer rapidement en compétition. Cette tension crée beaucoup d’énergie, mais demande d’éviter les luttes d’ego et les réactions trop impulsives.",

  /*
  |--------------------------------------------------------------------------
  | Lune
  |--------------------------------------------------------------------------
  */

  "mars-square-moon":
    "Les réactions spontanées de l’un peuvent toucher directement la sensibilité de l’autre. Cette tension demande de ralentir lorsque l’émotion monte afin d’éviter que l’impulsivité ne fragilise la sécurité affective.",

  "moon-opposition-venus":
    "La manière d’offrir de l’affection ne répond pas toujours exactement au besoin émotionnel de l’autre. Une meilleure compréhension des langages amoureux peut transformer cette différence en complémentarité.",

  "moon-square-saturn":
    "Les émotions peuvent parfois rencontrer de la retenue, de la distance ou un sentiment de jugement. La relation gagne en solidité lorsque chacun apprend à rassurer sans minimiser la sensibilité de l’autre.",

  /*
  |--------------------------------------------------------------------------
  | Mercure
  |--------------------------------------------------------------------------
  */

  "mars-opposition-mercury":
    "Les échanges peuvent rapidement devenir vifs lorsque les idées de l’un rencontrent les réactions immédiates de l’autre. Cette opposition demande de distinguer le désaccord intellectuel de l’attaque personnelle.",

  "mars-quincunx-mercury":
    "Les idées et les actions ne suivent pas toujours le même rythme. En faisant preuve de souplesse et d’écoute, chacun peut mieux comprendre la façon de réfléchir et de réagir de l’autre.",

  "mercury-square-saturn":
    "La communication peut parfois sembler freinée, critiquée ou trop contrôlée. Le couple doit créer un espace où chacun peut exprimer ses idées sans craindre d’être immédiatement corrigé ou jugé.",

  "mercury-opposition-neptune":
    "Les mots, les perceptions et les intentions peuvent manquer de clarté. Cette opposition invite à vérifier les faits et à reformuler les attentes afin d’éviter les malentendus ou les suppositions.",

  "mercury-square-pluto":
    "Les conversations peuvent devenir intenses, insistantes ou chargées de sous-entendus. Cette tension demande d’éviter la manipulation, les interrogatoires et le besoin d’avoir le dernier mot.",

  /*
  |--------------------------------------------------------------------------
  | Vénus
  |--------------------------------------------------------------------------
  */

  "pluto-opposition-venus":
    "L’attirance peut être profonde, magnétique et difficile à ignorer. Cette opposition peut cependant réveiller la jalousie, la peur de perdre ou le besoin de contrôler lorsque la sécurité affective devient fragile.",

  "mars-square-venus":
    "L’attirance peut être forte, mais les rythmes du désir et les attentes affectives ne s’accordent pas toujours spontanément. Cette tension devient stimulante lorsque chacun respecte les limites et les besoins de l’autre.",

  "saturn-square-venus":
    "L’affection peut parfois sembler freinée par la peur, la distance, les responsabilités ou un manque de spontanéité. La sécurité se construit par des gestes constants plutôt que par des preuves imposées.",

  "neptune-opposition-venus":
    "L’amour peut être fortement idéalisé, au risque de confondre les rêves avec la réalité du lien. Cette opposition demande de conserver la tendresse tout en clarifiant les attentes et les engagements.",

  "pluto-square-venus":
    "Les sentiments peuvent devenir très intenses et réveiller des enjeux de possession, de dépendance ou de pouvoir. Cette tension demande une grande honnêteté émotionnelle et le respect de la liberté de chacun.",

  /*
  |--------------------------------------------------------------------------
  | Mars
  |--------------------------------------------------------------------------
  */

  "mars-square-saturn":
    "Le désir peut parfois se heurter à des freins, des responsabilités ou un sentiment de retenue. En apprenant à respecter le rythme de chacun, cette tension peut devenir une source de stabilité et de maturité.",

  "mars-opposition-saturn":
    "L’élan de l’un peut rencontrer la prudence, les limites ou les résistances de l’autre. Cette opposition exige de trouver un équilibre entre action immédiate et construction patiente.",

  "mars-square-pluto":
    "Cette interaction peut produire une grande intensité, mais aussi des confrontations, des rapports de force ou un besoin de domination. L’énergie devient constructive lorsque le pouvoir est partagé plutôt qu’imposé.",

  "mars-opposition-neptune":
    "L’action et le désir peuvent manquer de direction claire ou être influencés par des attentes implicites. Cette opposition demande de nommer les intentions avant d’agir ou de tirer des conclusions.",

  /*
  |--------------------------------------------------------------------------
  | Jupiter
  |--------------------------------------------------------------------------
  */

  "jupiter-square-saturn":
    "L’un cherche à développer les possibilités tandis que l’autre souhaite sécuriser, limiter ou structurer. Cette tension peut devenir productive lorsque l’enthousiasme s’appuie sur un plan réaliste.",

  "jupiter-opposition-neptune":
    "Les grands rêves et les espoirs communs peuvent manquer de repères concrets. Cette opposition invite à préserver la foi dans le lien tout en vérifiant la faisabilité des projets.",

  "jupiter-square-pluto":
    "Les ambitions peuvent devenir excessives ou provoquer des désaccords sur le pouvoir, les objectifs et la direction du couple. La croissance reste bénéfique lorsque chacun garde une place équitable.",

  /*
  |--------------------------------------------------------------------------
  | Saturne
  |--------------------------------------------------------------------------
  */

  "saturn-opposition-uranus":
    "Le besoin de stabilité rencontre ici un désir de liberté et de changement. Cette opposition demande de créer des engagements suffisamment solides pour rassurer, mais assez souples pour permettre l’évolution.",

  "saturn-square-neptune":
    "La réalité, les responsabilités et les idéaux peuvent sembler difficiles à concilier. Cette tension demande de transformer les rêves en engagements concrets sans étouffer la sensibilité du lien.",

  "pluto-square-saturn":
    "Les responsabilités, le contrôle et les rapports d’autorité peuvent devenir particulièrement lourds. Cette tension pousse le couple à reconstruire des règles plus justes et plus conscientes.",

  /*
  |--------------------------------------------------------------------------
  | Uranus
  |--------------------------------------------------------------------------
  */

  "moon-square-uranus":
    "Le besoin de sécurité émotionnelle peut être déstabilisé par des changements soudains, de la distance ou des réactions imprévisibles. Le couple gagne à créer des repères flexibles mais fiables.",

  "uranus-opposition-venus":
    "L’attirance peut être vive et stimulante, mais le besoin de liberté peut entrer en conflit avec le désir de proximité. Cette opposition demande d’éviter autant l’étouffement que la fuite.",

  "mars-square-uranus":
    "Les réactions peuvent être rapides, imprévisibles et difficiles à contenir. Cette tension demande de laisser une place à l’indépendance tout en évitant les décisions prises sous le coup de l’impulsion.",

  /*
  |--------------------------------------------------------------------------
  | Neptune
  |--------------------------------------------------------------------------
  */

  "moon-opposition-neptune":
    "La sensibilité est profonde, mais les émotions peuvent être influencées par l’idéalisation, la peur ou les projections. Cette opposition demande de vérifier ce qui est réellement ressenti et ce qui est imaginé.",

  "neptune-square-venus":
    "Les attentes amoureuses peuvent devenir floues ou idéalisées. Cette tension invite à exprimer clairement les besoins afin que la tendresse repose sur une réalité partagée.",

  "mars-square-neptune":
    "Le désir et l’action peuvent manquer de clarté ou produire des messages contradictoires. Cette tension demande de préciser les intentions et de ne pas laisser les suppositions diriger la relation.",

  /*
  |--------------------------------------------------------------------------
  | Pluton
  |--------------------------------------------------------------------------
  */

  "moon-opposition-pluto":
    "Les émotions peuvent devenir très intenses et réveiller des peurs profondes d’abandon, de perte ou de contrôle. Cette opposition demande de créer une sécurité fondée sur la confiance plutôt que sur la pression.",

  "pluto-opposition-sun":
    "La relation peut provoquer une profonde transformation de l’identité et de la volonté de chacun. Cette opposition devient difficile lorsque l’un tente de contrôler, corriger ou redéfinir l’autre.",

  "mercury-opposition-pluto":
    "Les échanges peuvent révéler des vérités profondes, mais aussi devenir insistants ou chargés de suspicion. Cette opposition demande de communiquer sans utiliser les mots comme un moyen de pression.",
};

/*
|--------------------------------------------------------------------------
| Textes généraux de secours
|--------------------------------------------------------------------------
|
| Ces phrases sont utilisées lorsqu’une combinaison
| précise n’existe pas encore dans le dictionnaire.
|
*/

const FALLBACK_INTERPRETATIONS:
  Record<AspectType, string> = {
  conjunction:
    "Cette conjonction intensifie la rencontre des deux énergies planétaires. Elle peut créer une grande proximité, mais également amplifier leurs réactions et leurs besoins.",

  trine:
    "Ce trigone favorise une circulation naturelle entre les deux énergies. Chacun peut soutenir l’autre avec davantage de fluidité, de compréhension et de confiance.",

  sextile:
    "Ce sextile crée une possibilité de coopération et d’enrichissement mutuel. Son potentiel se développe lorsque les partenaires choisissent consciemment de l’utiliser.",

  square:
    "Ce carré crée une tension dynamique entre les deux énergies. Il peut provoquer des réactions défensives, mais aussi encourager le couple à évoluer et à trouver de nouvelles solutions.",

  opposition:
    "Cette opposition met en présence deux besoins ou deux fonctionnements contrastés. L’équilibre se construit lorsque chacun reconnaît la valeur du point de vue opposé.",

  quincunx:
    "Ce quinconce demande des ajustements réguliers. Les deux énergies ne fonctionnent pas naturellement de la même manière, mais elles peuvent apprendre à mieux collaborer.",
};

/*
|--------------------------------------------------------------------------
| Fonction exportée
|--------------------------------------------------------------------------
*/

export function getCompatibilityAspectInterpretation(
  planet1: string,
  aspect: AspectType,
  planet2: string,
): string {
  const key =
    createAspectKey(
      planet1,
      aspect,
      planet2,
    );

  return (
    ASPECT_INTERPRETATIONS[key] ??
    FALLBACK_INTERPRETATIONS[aspect] ??
    "Cette interaction planétaire influence la dynamique relationnelle et demande une attention consciente de la part des deux partenaires."
  );
}
