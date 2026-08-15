export interface CompatibilityJupiterTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityJupiterTextTemplate = (
  context: CompatibilityJupiterTextContext,
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
 * Jupiter dans le même signe
 *
 * Exemple :
 * Jupiter Scorpion + Jupiter Scorpion
 */
export const JUPITER_SAME_SIGN_TEXTS: CompatibilityJupiterTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Jupiter en ${sign1} révèlent une manière très semblable d’envisager la croissance, les opportunités et l’évolution personnelle. Vous partagez souvent des ambitions comparables et une vision commune de ce qui donne du sens à votre vie. Cette proximité favorise les projets à long terme, tout en demandant de rester ouverts à d’autres perspectives.`,

  ({ sign1 }) =>
    `Avec vos deux Jupiter en ${sign1}, vous encouragez naturellement les rêves et les aspirations de l’autre. Vous comprenez ce qui nourrit sa confiance et son enthousiasme. Cette dynamique peut renforcer votre relation, à condition d’éviter l’excès d’assurance ou la tendance à croire que votre vision est toujours la meilleure.`,

  ({ sign1 }) =>
    `Le partage de Jupiter en ${sign1} crée une grande compatibilité dans votre manière d’apprendre, de découvrir et de construire votre avenir. Vous avancez souvent avec un optimisme similaire, ce qui facilite les décisions importantes et les projets communs.`,

  ({ sign1 }) =>
    `Vos Jupiter en ${sign1} donnent à votre relation une philosophie de vie comparable. Vous pouvez partager les mêmes valeurs, les mêmes idéaux et une manière semblable de transformer les expériences en occasions d’évoluer. Cette affinité nourrit un climat de confiance durable.`,

  ({ sign1 }) =>
    `Lorsque Jupiter occupe le même signe chez deux partenaires, chacun reconnaît facilement ce qui inspire l’autre. En ${sign1}, vous développez une confiance mutuelle qui peut soutenir votre relation dans les périodes de changement comme dans les moments de réussite.`,

  ({ sign1 }) =>
    `Vos deux Jupiter en ${sign1} favorisent une évolution commune. Vous aimez généralement apprendre ensemble, découvrir de nouvelles possibilités et encourager les initiatives de votre partenaire. Cette proximité devient particulièrement enrichissante lorsque chacun reste curieux des différences qui existent malgré vos ressemblances.`,

  ({ sign1 }) =>
    `La présence de Jupiter en ${sign1} dans vos deux thèmes crée une dynamique positive où chacun peut devenir une source de motivation pour l’autre. Vous partagez souvent la même manière d’interpréter les défis et de rechercher les occasions de progresser.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre besoin d’expansion à travers l’énergie ${withFrenchArticle(sign1, "de")}. Cette ressemblance facilite les projets communs, les voyages, les apprentissages ou les expériences qui enrichissent votre relation. Elle demande toutefois de garder un certain réalisme afin de concrétiser vos ambitions.`,

  ({ sign1 }) =>
    `Deux Jupiter en ${sign1} créent une belle harmonie dans votre façon de soutenir les rêves de l’autre. Vous savez généralement comment redonner confiance à votre partenaire lorsqu’il doute de ses capacités. Cette qualité peut devenir l’une des grandes forces de votre couple.`,

  ({ sign1 }) =>
    `Le même placement de Jupiter en ${sign1} vous rapproche par vos idéaux et votre vision de l’avenir. Vous avancez souvent avec un enthousiasme comparable et pouvez construire des projets solides lorsque chacun contribue activement à leur réalisation.`,
];

/*
 * Jupiter dans deux signes du même élément
 *
 * Exemple :
 * Jupiter Scorpion + Jupiter Cancer = Eau + Eau
 */
export const JUPITER_SAME_ELEMENT_TEXTS: CompatibilityJupiterTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Jupiter en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vos aspirations profondes reposent donc sur une énergie commune qui facilite les projets partagés et la confiance dans votre avenir.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité favorise une vision similaire de la réussite et du développement personnel. Vous savez souvent comment encourager l’autre à poursuivre ses objectifs.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Jupiter parlent le langage de l’élément ${element1}. Même si chacun poursuit ses ambitions à sa manière, vous partagez une philosophie de vie compatible qui renforce votre capacité à évoluer ensemble.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos Jupiter et favorise une compréhension naturelle de vos valeurs. Vous avancez généralement dans une direction semblable et trouvez facilement un terrain d’entente pour construire l’avenir.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Jupiter en ${sign1} et Jupiter en ${sign2}, une affinité de croissance s’installe naturellement grâce à l’élément ${element1}. Vous partagez une confiance comparable dans vos capacités et dans celles de votre partenaire.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Jupiter puisent leur force dans l’élément ${element1}. Cette base commune soutient vos ambitions et favorise une évolution harmonieuse lorsque chacun respecte le rythme de progression de l’autre.`,

  ({ sign1, sign2, element1 }) =>
    `${withFrenchArticle(sign1, "definite", true)} et ${withFrenchArticle(sign2, "definite")} expriment deux facettes différentes d’une même énergie d’expansion, celle ${withFrenchArticle(element1, "de")}. Cette proximité vous aide à construire des projets solides et à maintenir une vision optimiste.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Jupiter repose sur leur élément commun, ${withFrenchArticle(element1, "definite")}. Vous partagez des valeurs compatibles et une manière semblable d’aborder les opportunités qui se présentent à vous.`,

  ({ sign1, sign2, element1 }) =>
    `Les Jupiter en ${sign1} et en ${sign2} se rejoignent grâce à l’élément ${element1}. Cette affinité favorise les apprentissages communs, les projets de vie et la capacité à traverser les défis avec confiance.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Jupiter développent une vision compatible de l’avenir. Chacun apporte sa nuance personnelle, mais vos objectifs fondamentaux restent souvent proches.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const JUPITER_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityJupiterTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Jupiter en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux manières d’évoluer peuvent naturellement se soutenir et créer une relation où l’enthousiasme, la confiance et le réalisme trouvent un équilibre constructif.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} recherche l’expansion à travers ${withFrenchArticle(element1, "definite")}, tandis que ${sign2} construit sa confiance selon ${withFrenchArticle(element2, "definite")}. Cette complémentarité peut vous aider à transformer vos idées en expériences concrètes et vos ambitions en projets réalisables.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Jupiter fonctionnent selon des styles différents, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. L’un apporte une forme d’audace, de stabilité, d’inspiration ou de sensibilité qui complète naturellement la vision de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Jupiter en ${sign1} et Jupiter en ${sign2}, les éléments ${element1} et ${element2} forment une association favorable à la croissance. Vous ne poursuivez pas toujours les mêmes objectifs de la même façon, mais vos approches peuvent se renforcer.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo jupitérien réunit ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")}. Cette combinaison crée un équilibre intéressant entre vos manières de prendre des risques, de saisir les occasions et de donner du sens à vos expériences.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Jupiter en ${sign1} et Jupiter en ${sign2} peuvent développer une dynamique très enrichissante. Les éléments ${element1} et ${element2} se répondent et vous encouragent à grandir sans nécessairement suivre exactement le même chemin.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Jupiter associent deux éléments capables de se renforcer : ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")}. L’un peut ouvrir de nouvelles possibilités, tandis que l’autre leur donne une direction, une profondeur ou une forme plus durable.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Jupiter en ${sign1} et Jupiter en ${sign2} repose sur l’alliance ${withFrenchArticle(element1, "de")} et ${withFrenchArticle(element2, "de")}. Vos différences de vision deviennent une force lorsque chacun soutient l’expansion de l’autre sans chercher à la contrôler.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Jupiter des qualités qui peuvent s’équilibrer dans les projets communs. ${withFrenchArticle(sign1, "definite", true)} peut inspirer une possibilité que ${withFrenchArticle(sign2, "definite")} aide à développer, structurer ou approfondir.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association ${withFrenchArticle(element1, "de")} et ${withFrenchArticle(element2, "de")} favorise une dynamique où vos ambitions peuvent se compléter. Jupiter en ${sign1} et Jupiter en ${sign2} deviennent particulièrement compatibles lorsque vous considérez vos différences comme des ressources pour grandir ensemble.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const JUPITER_DIFFERENT_ELEMENT_TEXTS: CompatibilityJupiterTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Jupiter en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos manières d’envisager la croissance, les opportunités et l’avenir suivent des logiques différentes, ce qui peut créer des désaccords sur les priorités à long terme.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} développe sa confiance à travers ${withFrenchArticle(element1, "definite")}, tandis que ${sign2} recherche l’expansion selon ${withFrenchArticle(element2, "definite")}. Vous ne saisissez pas toujours les mêmes occasions et pouvez avoir des visions distinctes de ce qui constitue une réussite.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Jupiter réunissent ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")}. Cette combinaison demande de l’adaptation, car chacun possède sa propre manière de prendre des risques, d’apprendre de ses expériences et de construire son avenir.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Jupiter en ${sign1} et Jupiter en ${sign2} abordent l’évolution personnelle selon des valeurs différentes. Les éléments ${element1} et ${element2} peuvent provoquer certains décalages, mais ils peuvent aussi élargir considérablement votre vision du monde.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre ${withFrenchArticle(sign1, "definite")} et ${withFrenchArticle(sign2, "definite")}, les ambitions peuvent suivre des directions distinctes. ${withFrenchArticle(element1, "definite", true)} et ${withFrenchArticle(element2, "definite")} ne donnent pas toujours la même importance à la sécurité, à l’aventure, à l’émotion ou à la réflexion, ce qui demande une véritable écoute.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos philosophies de vie ne parlent pas spontanément le même langage. Jupiter lié ${withFrenchArticle(element1, "a")} peut considérer une possibilité comme essentielle, tandis que Jupiter associé ${withFrenchArticle(element2, "a")} la juge irréaliste, prématurée ou peu significative.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Jupiter en ${sign1} et Jupiter en ${sign2} possèdent des façons distinctes de rechercher la confiance et l’accomplissement. Cette différence entre ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")} peut créer des frustrations, mais elle peut aussi empêcher votre couple de rester enfermé dans une seule vision.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Jupiter des priorités différentes face aux projets, aux voyages, aux apprentissages et aux engagements futurs. Votre défi consiste à soutenir les aspirations de l’autre sans les comparer constamment aux vôtres.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Jupiter en ${sign1} peut poursuivre une forme d’expansion que Jupiter en ${sign2} ne comprend pas immédiatement. Cette différence entre ${withFrenchArticle(element1, "definite")} et ${withFrenchArticle(element2, "definite")} demande de clarifier vos objectifs afin d’éviter que l’un se sente freiné ou que l’autre se sente entraîné trop loin.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos chemins d’évolution suivent des directions distinctes en raison de l’association ${withFrenchArticle(element1, "de")} et ${withFrenchArticle(element2, "de")}. ${withFrenchArticle(sign1, "definite", true)} et ${withFrenchArticle(sign2, "definite")} peuvent néanmoins bâtir un avenir enrichissant lorsqu’ils apprennent à faire coexister leurs ambitions plutôt qu’à déterminer laquelle est la plus valable.`,
  ];
