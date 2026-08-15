export interface CompatibilityAscendantTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityAscendantTextTemplate = (
  context: CompatibilityAscendantTextContext,
) => string;

type FrenchArticleForm =
  | "definite"
  | "de"
  | "a";

function withFrenchArticle(
  value: string,
  form: FrenchArticleForm,
  capitalize = false,
): string {
  const cleanValue = value.trim();

  if (!cleanValue) {
    return "";
  }

  const normalized = cleanValue
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr");

  const isPlural =
    normalized === "gemeaux" ||
    normalized === "poissons";

  const isFeminine =
    normalized === "terre" ||
    normalized === "vierge" ||
    normalized === "balance";

  const isElided =
    normalized === "air" ||
    normalized === "eau";

  let prefix = "";

  if (form === "definite") {
    if (isPlural) {
      prefix = "les ";
    } else if (isElided) {
      prefix = "l’";
    } else if (isFeminine) {
      prefix = "la ";
    } else {
      prefix = "le ";
    }
  } else if (form === "de") {
    if (isPlural) {
      prefix = "des ";
    } else if (isElided) {
      prefix = "de l’";
    } else if (isFeminine) {
      prefix = "de la ";
    } else {
      prefix = "du ";
    }
  } else {
    if (isPlural) {
      prefix = "aux ";
    } else if (isElided) {
      prefix = "à l’";
    } else if (isFeminine) {
      prefix = "à la ";
    } else {
      prefix = "au ";
    }
  }

  const result = `${prefix}${cleanValue}`;

  return capitalize
    ? result.charAt(0).toLocaleUpperCase("fr") +
        result.slice(1)
    : result;
}

/*
 * Ascendant dans le même signe
 *
 * Exemple :
 * Ascendant Scorpion + Ascendant Scorpion
 */
export const ASCENDANT_SAME_SIGN_TEXTS: CompatibilityAscendantTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Ascendants en ${sign1} créent une manière très semblable d’aborder le monde, de réagir spontanément et de vous présenter aux autres. Cette proximité facilite les premiers échanges et peut donner rapidement l’impression de fonctionner au même rythme.`,

  ({ sign1 }) =>
    `Avec vos deux Ascendants en ${sign1}, vous partagez une énergie extérieure comparable. Vos réflexes sociaux, votre manière de vous adapter et votre façon d’entrer en relation reposent sur des repères semblables, ce qui favorise une compréhension immédiate.`,

  ({ sign1 }) =>
    `L’Ascendant en ${sign1} influence votre attitude quotidienne à tous les deux. Vous pouvez adopter des comportements similaires dans les situations nouvelles, ce qui crée une impression de familiarité et de cohérence dans votre dynamique.`,

  ({ sign1 }) =>
    `Vos deux Ascendants en ${sign1} donnent à votre relation un style extérieur très reconnaissable. Vous abordez souvent les défis, les rencontres et les changements avec une énergie comparable. Cette ressemblance peut renforcer la complicité, mais aussi amplifier certains automatismes communs.`,

  ({ sign1 }) =>
    `La présence du même Ascendant en ${sign1} crée une affinité naturelle dans votre manière de vous comporter. Vous comprenez instinctivement le rythme, les réactions et les besoins d’adaptation de l’autre, particulièrement dans la vie quotidienne.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre personnalité visible à travers l’énergie ${withFrenchArticle(sign1, "de")}. Cette proximité favorise une belle coordination dans vos habitudes et vos interactions sociales. Elle demande néanmoins de laisser à chacun la liberté de développer son propre style.`,

  ({ sign1 }) =>
    `Deux Ascendants en ${sign1} peuvent donner l’impression que vous avancez avec la même manière de lire votre environnement. Vos réactions spontanées sont souvent compatibles, ce qui peut faciliter la vie commune et la gestion des imprévus.`,

  ({ sign1 }) =>
    `Vos façons d’entrer dans une situation, d’observer les autres et de protéger votre espace personnel sont influencées par le même signe, ${withFrenchArticle(sign1, "definite")}. Cette ressemblance peut créer une impression de compréhension immédiate, parfois même avant que les mots soient nécessaires.`,

  ({ sign1 }) =>
    `Lorsque vos deux Ascendants occupent le signe ${withFrenchArticle(sign1, "de")}, vous partagez une manière familière de vous montrer, de vous adapter et de prendre votre place. Cette proximité peut renforcer la fluidité de votre relation, à condition de ne pas tomber dans une dynamique trop prévisible.`,

  ({ sign1 }) =>
    `Le partage d’un Ascendant en ${sign1} vous donne des réflexes sociaux et comportementaux semblables. Vous pouvez facilement anticiper certaines réactions de l’autre. Cette configuration devient particulièrement harmonieuse lorsque vous utilisez cette ressemblance pour vous soutenir plutôt que pour vous comparer.`,
];

/*
 * Ascendants dans deux signes du même élément
 *
 * Exemple :
 * Ascendant Scorpion + Ascendant Cancer = Eau + Eau
 */
export const ASCENDANT_SAME_ELEMENT_TEXTS: CompatibilityAscendantTextTemplate[] =
  [
    ({ sign1, sign2, element1 }) =>
      `Les Ascendants en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vous abordez donc le monde avec une énergie fondamentale semblable, même si vos styles extérieurs restent différents.`,

    ({ sign1, sign2, element1 }) =>
      `${sign1} et ${sign2} partagent l’élément ${element1}. Vos réflexes sociaux, votre manière de vous adapter et votre rythme quotidien reposent sur une logique commune, ce qui peut faciliter la vie à deux.`,

    ({ sign1, sign2, element1 }) =>
      `Vos Ascendants parlent le langage commun de l’élément ${element1}. Cette proximité crée une compréhension naturelle de vos réactions immédiates et de votre manière d’entrer en relation avec votre environnement.`,

    ({ sign1, sign2, element1 }) =>
      `L’élément ${element1} relie vos comportements extérieurs. L’Ascendant en ${sign1} et celui en ${sign2} ne s’expriment pas exactement de la même façon, mais ils partagent une manière comparable de réagir aux situations nouvelles.`,

    ({ sign1, sign2, element1 }) =>
      `Entre un Ascendant en ${sign1} et un Ascendant en ${sign2}, une affinité naturelle peut s’installer grâce à l’élément ${element1}. Vous comprenez souvent le rythme et les réactions de l’autre sans avoir besoin de longues explications.`,

    ({ sign1, sign2, element1 }) =>
      `Vos deux Ascendants puisent leur énergie dans l’élément ${element1}. Cette base commune favorise une relation fluide dans le quotidien, car vos façons de vous adapter et de prendre votre place sont généralement compatibles.`,

    ({ sign1, sign2, element1 }) =>
      `${withFrenchArticle(sign1, "definite", true)} et ${withFrenchArticle(sign2, "definite")} expriment deux facettes de l’élément ${element1}. Vos attitudes peuvent différer, mais elles reposent sur une dynamique similaire qui facilite la compréhension et la coordination.`,

    ({ sign1, sign2, element1 }) =>
      `La compatibilité entre vos Ascendants repose sur leur élément commun, ${withFrenchArticle(element1, "definite")}. Vous pouvez avancer avec un rythme semblable et partager une manière comparable de vous présenter, de vous protéger et de répondre à votre environnement.`,

    ({ sign1, sign2, element1 }) =>
      `Les Ascendants en ${sign1} et en ${sign2} créent une harmonie visible grâce à l’élément ${element1}. Même si vous ne réagissez pas toujours de façon identique, vous comprenez instinctivement la logique comportementale de l’autre.`,

    ({ sign1, sign2, element1 }) =>
      `Grâce à leur appartenance commune à l’élément ${element1}, vos Ascendants possèdent des réflexes compatibles. ${withFrenchArticle(sign1, "definite", true)} et ${withFrenchArticle(sign2, "definite")} apportent chacun une nuance différente, mais ils partagent une manière cohérente d’aborder la vie.`,
  ];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const ASCENDANT_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityAscendantTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Ascendants en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux énergies peuvent naturellement se soutenir et créer une dynamique extérieure vivante, équilibrée et constructive.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} aborde le monde à travers ${withFrenchArticle(element1, "definite")}, tandis que ${sign2} réagit selon ${withFrenchArticle(element2, "definite")}. Cette complémentarité peut aider chacun à développer une manière plus souple et plus complète de s’adapter.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Ascendants fonctionnent différemment, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. Cette alliance favorise une relation où l’un apporte une énergie que l’autre possède moins spontanément.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre l’Ascendant en ${sign1} et celui en ${sign2}, les éléments ${element1} et ${element2} forment une combinaison naturellement complémentaire. Vos réactions peuvent être différentes tout en allant dans une direction commune.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo d’Ascendants réunit ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")}. Cette association peut créer un bel équilibre entre vos façons d’entrer en action, de vous adapter et de vous présenter aux autres.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’Ascendant en ${sign1} et l’Ascendant en ${sign2} peuvent construire une dynamique extérieure enrichissante. Les éléments ${element1} et ${element2} se répondent et permettent souvent à chacun de mieux gérer les situations nouvelles.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Ascendants associent deux éléments capables de se renforcer : ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")}. L’un peut apporter l’élan, la stabilité, l’ouverture ou l’adaptabilité dont l’autre a besoin selon les circonstances.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre les Ascendants en ${sign1} et en ${sign2} repose sur l’alliance ${withFrenchArticle(element1, "de")} et ${withFrenchArticle(element2, "de")}. Vos différences peuvent devenir une force lorsque chacun reconnaît la valeur du style naturel de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Ascendants des qualités qui peuvent se compléter dans le quotidien. ${withFrenchArticle(sign1, "definite", true)} peut ouvrir une voie que ${withFrenchArticle(sign2, "definite")} consolide, tandis que chacun apporte une manière distincte de réagir.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association ${withFrenchArticle(element1, "de")} et ${withFrenchArticle(element2, "de")} crée une dynamique où vos comportements extérieurs peuvent s’équilibrer. ${withFrenchArticle(sign1, "definite", true)} et ${withFrenchArticle(sign2, "definite")} deviennent complémentaires lorsque vous laissez vos différences contribuer à la relation plutôt que de chercher à les corriger.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const ASCENDANT_DIFFERENT_ELEMENT_TEXTS: CompatibilityAscendantTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Ascendants en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos manières d’aborder le monde peuvent donc être très différentes, ce qui crée parfois des décalages dans le rythme ou les réactions.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} réagit à travers ${withFrenchArticle(element1, "definite")}, tandis que ${sign2} s’adapte selon ${withFrenchArticle(element2, "definite")}. Vous ne lisez pas toujours les situations de la même façon, mais cette différence peut élargir votre manière de comprendre le monde.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Ascendants réunissent ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")}. Cette combinaison demande davantage d’ajustement, car chacun possède sa propre manière de réagir, de se protéger et de prendre sa place.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’Ascendant en ${sign1} et l’Ascendant en ${sign2} abordent les situations nouvelles selon des logiques distinctes. Les éléments ${element1} et ${element2} peuvent parfois se heurter, mais ils peuvent aussi vous apprendre à devenir plus souples.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre ${withFrenchArticle(sign1, "definite")} et ${withFrenchArticle(sign2, "definite")}, les différences de comportement peuvent être visibles. ${withFrenchArticle(element1, "definite", true)} et ${withFrenchArticle(element2, "definite")} n’adoptent pas spontanément le même rythme, ce qui demande patience et compréhension.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos manières de vous présenter et de vous adapter ne parlent pas toujours le même langage. L’Ascendant lié ${withFrenchArticle(element1, "a")} peut réagir d’une façon que celui associé ${withFrenchArticle(element2, "a")} comprend difficilement au premier abord.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’Ascendant en ${sign1} et celui en ${sign2} possèdent des réflexes distincts. Cette différence entre ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")} peut provoquer des tensions dans le quotidien, mais aussi enrichir votre capacité d’adaptation.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Ascendants des façons différentes de réagir et de prendre leur place. Votre défi consiste à respecter ces rythmes sans considérer que l’un est plus juste que l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’Ascendant en ${sign1} peut privilégier une approche que celui en ${sign2} ne choisit pas spontanément. Cette différence entre ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")} demande une certaine flexibilité afin d’éviter les malentendus.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos comportements extérieurs suivent des logiques différentes en raison de l’association ${withFrenchArticle(element1, "de")} et ${withFrenchArticle(element2, "de")}. ${withFrenchArticle(sign1, "definite", true)} et ${withFrenchArticle(sign2, "definite")} peuvent apprendre à mieux se comprendre en observant leurs réactions sans chercher à les uniformiser.`,
  ];
