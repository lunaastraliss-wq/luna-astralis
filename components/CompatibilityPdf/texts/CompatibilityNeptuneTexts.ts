export interface CompatibilityNeptuneTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityNeptuneTextTemplate = (
  context: CompatibilityNeptuneTextContext,
) => string;

/*
 * Neptune dans le même signe
 *
 * Exemple :
 * Neptune Scorpion + Neptune Scorpion
 */
export const NEPTUNE_SAME_SIGN_TEXTS: CompatibilityNeptuneTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Neptune en ${sign1} révèlent une sensibilité très semblable face aux rêves, à l’intuition et aux dimensions invisibles de la relation. Vous pouvez ressentir rapidement les états intérieurs de l’autre et partager un imaginaire commun. Cette proximité favorise la fusion émotionnelle, mais demande aussi de préserver des repères clairs.`,

  ({ sign1 }) =>
    `Avec vos deux Neptune en ${sign1}, vous partagez une manière comparable d’idéaliser l’amour et de rechercher une connexion qui dépasse le quotidien. Cette ressemblance peut nourrir une grande douceur, mais elle peut aussi amplifier les attentes irréalistes lorsque la relation est perçue à travers le rêve plutôt que la réalité.`,

  ({ sign1 }) =>
    `Le partage de Neptune en ${sign1} crée une forte affinité intuitive. Vous pouvez comprendre ce que l’autre ressent sans que tout soit exprimé verbalement. Cette sensibilité commune devient une force lorsqu’elle s’accompagne de communication et de lucidité.`,

  ({ sign1 }) =>
    `Vos Neptune en ${sign1} donnent à la relation une atmosphère sensible, imaginative et parfois difficile à définir. Vous êtes attirés par les mêmes rêves et les mêmes formes de connexion. Le défi consiste à ne pas confondre intuition, projection et réalité.`,

  ({ sign1 }) =>
    `Lorsque Neptune occupe le même signe chez deux partenaires, chacun reconnaît naturellement les aspirations profondes de l’autre. En ${sign1}, vous partagez une manière semblable de rechercher l’inspiration, la compassion et le sentiment d’unité.`,

  ({ sign1 }) =>
    `Vos deux Neptune en ${sign1} favorisent une relation où l’imaginaire et la sensibilité occupent une place importante. Vous pouvez vous inspirer mutuellement et créer un univers très personnel. Cette configuration demande toutefois de ne pas éviter les problèmes concrets au nom de l’harmonie.`,

  ({ sign1 }) =>
    `La présence de Neptune en ${sign1} dans vos deux thèmes crée une compréhension subtile de vos rêves, de vos fragilités et de vos idéaux. Vous ressentez facilement les déceptions de l’autre, mais vous pouvez aussi partager les mêmes illusions.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre besoin de connexion à travers l’énergie du ${sign1}. Cette ressemblance peut renforcer l’empathie, la créativité et la dimension spirituelle de la relation. Elle exige néanmoins des limites saines afin que chacun conserve son identité.`,

  ({ sign1 }) =>
    `Deux Neptune en ${sign1} donnent souvent au couple une sensibilité commune difficile à expliquer rationnellement. Vous pouvez vous sentir profondément reliés, comme si certaines émotions circulaient naturellement entre vous. Cette proximité doit toutefois rester ancrée dans des faits et des engagements concrets.`,

  ({ sign1 }) =>
    `Le même placement de Neptune en ${sign1} vous rapproche par vos rêves, vos intuitions et votre manière d’imaginer l’amour. Vous pouvez créer une grande complicité intérieure. Votre équilibre dépendra toutefois de votre capacité à regarder la relation telle qu’elle est, et non seulement telle que vous souhaitez qu’elle soit.`,
];

/*
 * Neptune dans deux signes du même élément
 *
 * Exemple :
 * Neptune Scorpion + Neptune Cancer = Eau + Eau
 */
export const NEPTUNE_SAME_ELEMENT_TEXTS: CompatibilityNeptuneTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Neptune en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vos manières de ressentir, d’imaginer et de rechercher une connexion profonde reposent donc sur une sensibilité commune, même si chacun l’exprime différemment.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité favorise une compréhension intuitive de vos rêves, de vos vulnérabilités et de vos idéaux. Vous ressentez souvent ce que l’autre ne parvient pas encore à formuler.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Neptune parlent le langage commun de l’élément ${element1}. Vous ne poursuivez pas toujours les mêmes rêves, mais vous comprenez généralement le besoin de l’autre de donner un sens plus profond à la relation.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos sensibilités neptuniennes. Neptune en ${sign1} et Neptune en ${sign2} possèdent des nuances différentes, mais ils partagent une manière compatible de vivre l’intuition, l’imagination et la compassion.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Neptune en ${sign1} et Neptune en ${sign2}, une affinité subtile peut s’installer naturellement grâce à l’élément ${element1}. Vous pouvez vous sentir compris dans vos émotions les plus difficiles à expliquer.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Neptune puisent leur sensibilité dans l’élément ${element1}. Cette base commune facilite l’empathie, l’inspiration et la création d’un imaginaire partagé. Chacun apporte néanmoins sa propre manière de rêver et de ressentir.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes distinctes d’une même énergie neptunienne, celle du ${element1}. Cette proximité vous aide à reconnaître les fragilités de l’autre et à développer une compassion réelle.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Neptune repose sur leur élément commun, le ${element1}. Vos intuitions et vos idéaux sont souvent compatibles, ce qui peut nourrir une grande proximité émotionnelle ou spirituelle.`,

  ({ sign1, sign2, element1 }) =>
    `Les Neptune en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Cette affinité favorise les rêves communs, la sensibilité artistique et la capacité à créer ensemble un espace de douceur et de compréhension.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Neptune possèdent des mécanismes intuitifs compatibles. Le ${sign1} et le ${sign2} ne vivent pas exactement l’idéal de la même façon, mais ils comprennent généralement le monde intérieur de l’autre.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const NEPTUNE_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityNeptuneTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Neptune en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux sensibilités peuvent naturellement se soutenir et créer un équilibre entre inspiration, intuition, imagination et ancrage.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} vit ses rêves à travers le ${element1}, tandis que ${sign2} exprime son intuition selon le ${element2}. Cette complémentarité peut vous aider à transformer une vision commune en expérience plus concrète et plus durable.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Neptune fonctionnent selon des styles différents, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. L’un apporte l’inspiration, tandis que l’autre donne une forme, une direction ou une profondeur supplémentaire à cette sensibilité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Neptune en ${sign1} et Neptune en ${sign2}, les éléments ${element1} et ${element2} forment une association favorable à l’imagination partagée. Vos rêves ne sont pas identiques, mais ils peuvent se rejoindre dans une vision commune.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo neptunien réunit le ${element1} et le ${element2}. Cette combinaison crée un équilibre intéressant entre vos façons de ressentir, d’idéaliser et de donner un sens plus profond à la relation.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Neptune en ${sign1} et Neptune en ${sign2} peuvent développer une dynamique très inspirante. Les éléments ${element1} et ${element2} se répondent et permettent à chacun d’élargir sa sensibilité sans perdre complètement ses repères.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Neptune associent deux éléments capables de se renforcer : le ${element1} et le ${element2}. L’un peut ouvrir l’imaginaire, tandis que l’autre aide à comprendre, à accueillir ou à concrétiser ce qui a été ressenti.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Neptune en ${sign1} et Neptune en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences deviennent une force lorsque chacun respecte la manière particulière dont l’autre perçoit l’invisible et l’émotionnel.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Neptune des qualités qui peuvent s’équilibrer dans la relation. Le ${sign1} peut inspirer une vision que le ${sign2} aide à approfondir, apaiser ou rendre plus tangible.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} favorise une dynamique où intuition et réalité peuvent se rejoindre. Neptune en ${sign1} et Neptune en ${sign2} deviennent particulièrement compatibles lorsque vos rêves communs s’appuient sur des gestes concrets.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const NEPTUNE_DIFFERENT_ELEMENT_TEXTS: CompatibilityNeptuneTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Neptune en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos manières de rêver, d’idéaliser et de ressentir la connexion suivent des logiques différentes, ce qui peut créer des projections ou des attentes mal comprises.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} vit son intuition à travers le ${element1}, tandis que ${sign2} recherche l’inspiration selon le ${element2}. Vous ne donnez pas toujours le même sens aux silences, aux impressions et aux attentes implicites.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Neptune réunissent le ${element1} et le ${element2}. Cette combinaison demande une certaine adaptation, car chacun possède sa propre manière de ressentir l’invisible, d’interpréter les émotions et d’imaginer la relation idéale.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Neptune en ${sign1} et Neptune en ${sign2} abordent les rêves et l’intuition selon des sensibilités distinctes. Les éléments ${element1} et ${element2} peuvent provoquer des incompréhensions, mais ils peuvent aussi élargir votre perception mutuelle.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre le ${sign1} et le ${sign2}, les idéaux amoureux peuvent prendre des formes très différentes. Le ${element1} et le ${element2} ne donnent pas toujours la même importance à l’émotion, à l’imagination, à la logique ou à la réalité concrète.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos sensibilités neptuniennes ne parlent pas spontanément le même langage. Neptune lié au ${element1} peut ressentir une connexion que Neptune associé au ${element2} ne reconnaît pas de la même manière.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Neptune en ${sign1} et Neptune en ${sign2} possèdent des façons distinctes d’idéaliser et de se protéger de la déception. Cette différence entre le ${element1} et le ${element2} peut créer une impression de flou si vos attentes restent implicites.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Neptune des besoins différents en matière de fusion, d’inspiration et de compréhension intuitive. Votre défi consiste à ne pas confondre vos perceptions personnelles avec les intentions réelles de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Neptune en ${sign1} peut poursuivre un idéal que Neptune en ${sign2} ne comprend pas immédiatement. Cette différence entre le ${element1} et le ${element2} demande de mettre des mots sur vos rêves, vos peurs et vos attentes.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos univers intérieurs suivent des chemins distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent néanmoins créer une connexion profonde lorsqu’ils choisissent la transparence plutôt que les suppositions.`,
  ];
