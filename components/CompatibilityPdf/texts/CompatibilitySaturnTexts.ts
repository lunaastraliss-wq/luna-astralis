export interface CompatibilitySaturnTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilitySaturnTextTemplate = (
  context: CompatibilitySaturnTextContext,
) => string;

/*
 * Saturne dans le même signe
 *
 * Exemple :
 * Saturne Scorpion + Saturne Scorpion
 */
export const SATURN_SAME_SIGN_TEXTS: CompatibilitySaturnTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Saturne en ${sign1} révèlent une manière très semblable d’aborder les responsabilités, les limites et les engagements à long terme. Vous comprenez instinctivement les inquiétudes, les exigences et le besoin de sécurité de l’autre. Cette proximité peut renforcer la solidité du lien, mais aussi accentuer certaines peurs communes.`,

  ({ sign1 }) =>
    `Avec vos deux Saturne en ${sign1}, vous partagez une vision comparable de la discipline, de la loyauté et de la construction du couple. Vous savez généralement ce que l’autre considère comme sérieux ou essentiel. Cette ressemblance favorise la stabilité, à condition de ne pas rendre la relation trop rigide.`,

  ({ sign1 }) =>
    `Le partage de Saturne en ${sign1} crée une forte compréhension de vos devoirs et de vos attentes. Vous pouvez avancer avec une grande constance lorsque vous poursuivez les mêmes objectifs. Le défi consiste à ne pas laisser vos préoccupations communes limiter la spontanéité et la légèreté.`,

  ({ sign1 }) =>
    `Vos Saturne en ${sign1} donnent à votre relation une structure familière. Vous avez tendance à poser des limites et à rechercher la sécurité selon des repères semblables. Cette compatibilité peut soutenir un engagement durable, mais elle demande aussi d’éviter les critiques excessives ou les exigences trop élevées.`,

  ({ sign1 }) =>
    `Lorsque Saturne occupe le même signe chez deux partenaires, chacun reconnaît facilement les peurs et les besoins de contrôle de l’autre. En ${sign1}, vous partagez une manière comparable de vous protéger et de construire. Cette compréhension peut devenir une force si elle ne nourrit pas une fermeture commune.`,

  ({ sign1 }) =>
    `Vos deux Saturne en ${sign1} favorisent une approche sérieuse de la relation. Vous pouvez être très fiables l’un envers l’autre et prendre vos engagements à cœur. Cette configuration demande toutefois de préserver de la souplesse afin que la responsabilité ne devienne pas une source constante de pression.`,

  ({ sign1 }) =>
    `La présence de Saturne en ${sign1} dans vos deux thèmes crée une compréhension instinctive de vos limites. Vous savez souvent ce qui demande du temps, de la patience et de la persévérance. Cette ressemblance peut vous aider à bâtir quelque chose de durable, mais elle peut également renforcer les mêmes blocages.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre besoin de stabilité à travers l’énergie du ${sign1}. Cette proximité favorise la loyauté, la constance et la capacité à traverser les périodes exigeantes. Elle nécessite néanmoins que chacun puisse évoluer sans se sentir prisonnier de règles trop strictes.`,

  ({ sign1 }) =>
    `Deux Saturne en ${sign1} donnent souvent au couple un sens commun du devoir. Vous comprenez ce que l’autre attend en matière de fiabilité et d’engagement. Cette compatibilité devient particulièrement solide lorsque vous utilisez vos exigences pour construire plutôt que pour vous juger.`,

  ({ sign1 }) =>
    `Le même placement de Saturne en ${sign1} vous rapproche par vos valeurs de responsabilité et de persévérance. Vous pouvez former une équipe capable de résister au temps et aux difficultés. Votre équilibre dépendra toutefois de votre capacité à alléger la relation lorsque le sérieux devient trop lourd.`,
];

/*
 * Saturne dans deux signes du même élément
 *
 * Exemple :
 * Saturne Scorpion + Saturne Cancer = Eau + Eau
 */
export const SATURN_SAME_ELEMENT_TEXTS: CompatibilitySaturnTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Saturne en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vos manières de construire, de vous engager et de gérer les responsabilités reposent donc sur une base commune, même si chacun possède son propre rythme.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité favorise une compréhension naturelle de vos limites, de vos besoins de sécurité et de votre manière d’envisager la durée dans la relation.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Saturne parlent le langage commun de l’élément ${element1}. Vous ne posez pas toujours les mêmes règles, mais vous comprenez généralement ce qui pousse l’autre à rechercher la stabilité, la prudence ou la maîtrise.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos façons d’assumer les responsabilités. Saturne en ${sign1} et Saturne en ${sign2} possèdent des expressions différentes, mais ils partagent une conception compatible de l’effort et de l’engagement.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Saturne en ${sign1} et Saturne en ${sign2}, une compatibilité structurelle peut s’installer naturellement grâce à l’élément ${element1}. Vous avancez souvent avec des attentes proches concernant la loyauté et la construction du couple.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Saturne puisent leur solidité dans l’élément ${element1}. Cette base commune facilite la patience, la persévérance et la capacité à traverser ensemble les périodes exigeantes. Chacun apporte néanmoins une nuance différente à cette stabilité.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes distinctes d’une même énergie saturnienne, celle du ${element1}. Cette proximité vous aide à respecter le besoin de structure de l’autre, même lorsque vos méthodes diffèrent.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Saturne repose sur leur élément commun, le ${element1}. Vos façons de gérer les contraintes et les engagements sont souvent compatibles, ce qui peut soutenir une relation résistante et durable.`,

  ({ sign1, sign2, element1 }) =>
    `Les Saturne en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Cette affinité favorise une compréhension réaliste des efforts nécessaires pour préserver et faire évoluer votre relation.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Saturne possèdent des mécanismes de protection et de construction compatibles. Le ${sign1} et le ${sign2} n’expriment pas leurs craintes de la même façon, mais ils comprennent généralement les besoins fondamentaux de l’autre.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const SATURN_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilitySaturnTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Saturne en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux manières de construire peuvent naturellement se soutenir et créer un équilibre entre prudence, ambition, adaptation et stabilité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} assume ses responsabilités à travers le ${element1}, tandis que ${sign2} recherche la sécurité selon le ${element2}. Cette complémentarité peut vous aider à construire une relation à la fois solide et capable d’évoluer.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Saturne fonctionnent selon des styles différents, mais les éléments ${element1} et ${element2} peuvent se renforcer mutuellement. L’un apporte une forme de structure, de souplesse, de persévérance ou de recul qui complète l’approche de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Saturne en ${sign1} et Saturne en ${sign2}, les éléments ${element1} et ${element2} forment une association favorable à la construction. Vos règles ne sont pas identiques, mais elles peuvent s’unir pour créer un cadre équilibré.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo saturnien réunit le ${element1} et le ${element2}. Cette combinaison crée un équilibre intéressant entre vos façons d’assumer les contraintes, de prévoir l’avenir et de protéger la stabilité du couple.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Saturne en ${sign1} et Saturne en ${sign2} peuvent développer une dynamique de responsabilité très constructive. Les éléments ${element1} et ${element2} se répondent et permettent à chacun de soutenir les efforts de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Saturne associent deux éléments capables de se compléter : le ${element1} et le ${element2}. L’un peut apporter l’endurance, tandis que l’autre introduit la perspective, la sensibilité ou l’adaptabilité nécessaire pour maintenir l’équilibre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Saturne en ${sign1} et Saturne en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences deviennent une force lorsque chacun respecte la manière dont l’autre gère le temps, les limites et les responsabilités.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Saturne des qualités qui peuvent s’équilibrer dans la durée. Le ${sign1} peut poser une structure que le ${sign2} consolide, assouplit ou rend plus humaine.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} favorise une construction relationnelle où vos approches peuvent se compléter. Saturne en ${sign1} et Saturne en ${sign2} deviennent particulièrement compatibles lorsque vous transformez vos différences en répartition naturelle des responsabilités.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const SATURN_DIFFERENT_ELEMENT_TEXTS: CompatibilitySaturnTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Saturne en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos façons d’envisager les responsabilités, les limites et la sécurité suivent des logiques différentes, ce qui peut créer des tensions autour de l’engagement.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} construit la stabilité à travers le ${element1}, tandis que ${sign2} recherche la sécurité selon le ${element2}. Vous ne définissez pas toujours le sérieux ou la fiabilité de la même manière, ce qui demande des attentes clairement exprimées.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Saturne réunissent le ${element1} et le ${element2}. Cette combinaison exige une certaine adaptation, car chacun possède sa propre manière de poser des limites, de gérer les obligations et de faire face aux difficultés.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Saturne en ${sign1} et Saturne en ${sign2} abordent la durée selon des priorités distinctes. Les éléments ${element1} et ${element2} peuvent provoquer des incompréhensions, mais ils peuvent aussi vous apprendre à construire avec davantage de souplesse.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre le ${sign1} et le ${sign2}, les besoins de sécurité peuvent prendre des formes très différentes. Le ${element1} et le ${element2} ne réagissent pas de la même manière face aux risques, aux contraintes ou à l’incertitude.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos conceptions de la responsabilité ne parlent pas spontanément le même langage. Saturne lié au ${element1} peut poser des règles que Saturne associé au ${element2} considère comme trop rigides, trop imprécises ou mal adaptées.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Saturne en ${sign1} et Saturne en ${sign2} possèdent des façons distinctes de gérer la peur, le temps et l’engagement. Cette différence entre le ${element1} et le ${element2} peut créer une impression de distance si vos préoccupations restent silencieuses.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Saturne des attentes différentes face à la stabilité et à la construction du couple. Votre défi consiste à ne pas juger la fiabilité de l’autre uniquement selon vos propres critères.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Saturne en ${sign1} peut rechercher une structure que Saturne en ${sign2} ne trouve pas naturelle. Cette différence entre le ${element1} et le ${element2} demande de définir ensemble les règles, les responsabilités et les limites de la relation.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos manières de construire suivent des chemins distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent néanmoins créer une relation durable lorsqu’ils cessent d’opposer leurs méthodes et élaborent une structure commune.`,
  ];
