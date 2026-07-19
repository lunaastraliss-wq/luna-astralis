export interface CompatibilityMercuryTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityMercuryTextTemplate = (
  context: CompatibilityMercuryTextContext,
) => string;

/*
 * Mercure dans le même signe
 *
 * Exemple :
 * Mercure Scorpion + Mercure Scorpion
 */
export const MERCURY_SAME_SIGN_TEXTS: CompatibilityMercuryTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Mercures en ${sign1} indiquent une manière très semblable de réfléchir, d’analyser les situations et de formuler vos idées. Vous comprenez souvent rapidement la logique de l’autre, ce qui facilite les échanges et donne à vos conversations une impression de fluidité naturelle.`,

  ({ sign1 }) =>
    `Avec vos deux Mercures en ${sign1}, vous partagez un style de communication comparable. Vous utilisez souvent les mêmes repères pour expliquer vos idées, poser des questions et prendre des décisions. Cette proximité favorise la compréhension, mais peut aussi renforcer certains automatismes communs.`,

  ({ sign1 }) =>
    `Le partage de Mercure en ${sign1} crée une forte affinité intellectuelle. Vous traitez l’information selon une logique semblable et pouvez facilement suivre le raisonnement de l’autre. Il reste toutefois important de ne pas supposer que vous arrivez toujours aux mêmes conclusions.`,

  ({ sign1 }) =>
    `Vos Mercures en ${sign1} donnent à votre relation une manière commune d’échanger. Vous reconnaissez instinctivement le ton, le rythme et les intentions de l’autre. Cette compatibilité peut rendre les discussions particulièrement naturelles, même lorsqu’elles portent sur des sujets complexes.`,

  ({ sign1 }) =>
    `Lorsque Mercure occupe le même signe chez deux partenaires, les idées circulent souvent avec facilité. En ${sign1}, vous partagez une façon comparable d’observer, de comprendre et de transmettre l’information. Cette ressemblance peut devenir une véritable force dans la résolution des problèmes.`,

  ({ sign1 }) =>
    `Vos deux Mercures en ${sign1} créent une proximité mentale importante. Vous pouvez vous sentir compris dans votre façon de penser, de parler et d’organiser vos idées. Le défi consiste à éviter de vous enfermer dans une seule manière de voir les choses.`,

  ({ sign1 }) =>
    `La présence de Mercure en ${sign1} dans vos deux thèmes favorise une communication intuitive. Vous devinez souvent ce que l’autre essaie d’exprimer avant même qu’il termine sa phrase. Cette facilité doit néanmoins laisser de la place aux différences d’opinion et aux nuances personnelles.`,

  ({ sign1 }) =>
    `Vous réfléchissez tous les deux à travers l’énergie du ${sign1}. Cette ressemblance peut créer une excellente coordination dans vos décisions et vos échanges quotidiens. Lorsque des désaccords apparaissent, chacun peut toutefois défendre sa logique avec la même intensité.`,

  ({ sign1 }) =>
    `Deux Mercures en ${sign1} donnent souvent l’impression de parler le même langage. Vos conversations peuvent être rapides, profondes ou structurées selon les qualités du signe. Cette affinité intellectuelle devient particulièrement enrichissante lorsque vous restez ouverts à de nouvelles perspectives.`,

  ({ sign1 }) =>
    `Le même placement de Mercure en ${sign1} vous aide à comprendre les mécanismes de pensée de l’autre. Vous savez généralement comment présenter une idée pour qu’elle soit bien reçue. Cette configuration favorise la complicité mentale, à condition de ne pas transformer chaque discussion en débat à gagner.`,
];

/*
 * Mercure dans deux signes du même élément
 *
 * Exemple :
 * Mercure Scorpion + Mercure Cancer = Eau + Eau
 */
export const MERCURY_SAME_ELEMENT_TEXTS: CompatibilityMercuryTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Mercures en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vos façons de penser et de communiquer reposent donc sur une logique fondamentale semblable, même si chacun exprime ses idées avec son propre style.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité mentale facilite la compréhension de vos raisonnements, de vos priorités et de votre manière de traiter l’information. Vos échanges peuvent ainsi devenir naturellement fluides et constructifs.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Mercures parlent le langage commun de l’élément ${element1}. Vous ne formulez pas toujours vos idées de la même façon, mais vous comprenez généralement la logique qui guide le raisonnement de l’autre.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos styles de communication. Mercure en ${sign1} et Mercure en ${sign2} possèdent des nuances différentes, mais ils partagent une manière comparable d’observer, de comprendre et d’expliquer les situations.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Mercure en ${sign1} et Mercure en ${sign2}, une affinité intellectuelle peut s’installer naturellement grâce à l’élément ${element1}. Vous pouvez suivre facilement les idées de l’autre, même lorsque vos points de vue ne sont pas identiques.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Mercures puisent leur manière de penser dans l’élément ${element1}. Cette base commune facilite les discussions importantes et la prise de décision. Chacun apporte toutefois une nuance qui peut enrichir votre compréhension mutuelle.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes différentes d’une même énergie mentale, celle du ${element1}. Cette proximité vous aide à communiquer sans devoir constamment justifier votre manière de réfléchir.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Mercures repose sur leur élément commun, le ${element1}. Vos conversations suivent souvent un rythme compatible et vous savez généralement comment transmettre vos idées pour qu’elles soient comprises.`,

  ({ sign1, sign2, element1 }) =>
    `Les Mercures en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Cette affinité favorise l’écoute, la coopération intellectuelle et la capacité à chercher ensemble des solutions adaptées.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Mercures possèdent des mécanismes de pensée compatibles. Le ${sign1} et le ${sign2} abordent les sujets avec des nuances différentes, mais ils comprennent généralement la logique de l’autre.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const MERCURY_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityMercuryTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Mercures en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux styles de pensée peuvent naturellement se soutenir et créer des échanges stimulants, dans lesquels chacun apporte une perspective différente mais utile.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} réfléchit à travers le ${element1}, tandis que ${sign2} organise ses idées selon le ${element2}. Cette complémentarité peut vous aider à aborder les situations avec davantage de créativité, de profondeur ou de réalisme.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Mercures fonctionnent différemment, mais les éléments ${element1} et ${element2} peuvent enrichir mutuellement vos raisonnements. L’un apporte une manière de penser que l’autre possède moins spontanément, ce qui élargit vos possibilités de compréhension.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Mercure en ${sign1} et Mercure en ${sign2}, les éléments ${element1} et ${element2} forment une association naturellement complémentaire. Vos idées peuvent se répondre et produire ensemble des solutions plus complètes.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo mercurien réunit le ${element1} et le ${element2}. Cette combinaison crée un équilibre intéressant entre vos façons d’analyser, de décider et de transmettre vos idées. Chacun peut aider l’autre à envisager une facette qu’il aurait négligée.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Mercure en ${sign1} et Mercure en ${sign2} peuvent développer une dynamique intellectuelle enrichissante. Les éléments ${element1} et ${element2} se répondent et favorisent souvent une communication à la fois vivante et constructive.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Mercures associent deux éléments capables de se renforcer : le ${element1} et le ${element2}. L’un peut stimuler les idées, tandis que l’autre les approfondit, les organise ou leur donne une forme plus concrète.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Mercure en ${sign1} et Mercure en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences intellectuelles deviennent une force lorsque chacun écoute réellement la contribution de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Mercures des qualités qui peuvent se compléter dans les discussions. Le ${sign1} peut ouvrir une piste que le ${sign2} structure ou approfondit, créant ainsi une communication plus riche.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} favorise une dynamique mentale où vos idées peuvent s’équilibrer. Mercure en ${sign1} et Mercure en ${sign2} deviennent particulièrement compatibles lorsque vous valorisez vos différences au lieu de chercher à penser de la même manière.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const MERCURY_DIFFERENT_ELEMENT_TEXTS: CompatibilityMercuryTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Mercures en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos façons de réfléchir et de communiquer suivent des logiques différentes, ce qui peut créer des malentendus malgré de bonnes intentions.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} traite l’information à travers le ${element1}, tandis que ${sign2} raisonne selon le ${element2}. Vous n’interprétez pas toujours les mots, les silences ou les priorités de la même façon, ce qui demande davantage de précision dans vos échanges.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Mercures réunissent le ${element1} et le ${element2}. Cette combinaison nécessite une certaine adaptation, car chacun possède sa propre manière de comprendre les situations, d’organiser ses idées et de parvenir à une décision.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Mercure en ${sign1} et Mercure en ${sign2} abordent les discussions selon des logiques distinctes. Les éléments ${element1} et ${element2} peuvent provoquer des décalages, mais ils peuvent aussi vous apprendre à communiquer avec davantage de souplesse.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre le ${sign1} et le ${sign2}, les différences mentales peuvent être importantes. Le ${element1} et le ${element2} n’accordent pas toujours la même valeur aux faits, aux émotions, à l’intuition ou à l’action, ce qui demande patience et écoute.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos styles de communication ne parlent pas spontanément le même langage. Mercure lié au ${element1} peut présenter une idée d’une façon que Mercure associé au ${element2} comprend difficilement. Reformuler devient alors essentiel.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Mercure en ${sign1} et Mercure en ${sign2} possèdent des rythmes intellectuels distincts. Cette différence entre le ${element1} et le ${element2} peut ralentir certaines décisions, mais elle peut aussi empêcher les conclusions trop rapides.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Mercures des façons différentes de raisonner et de s’exprimer. Votre défi consiste à écouter la logique de l’autre sans la juger immédiatement selon vos propres critères.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Mercure en ${sign1} peut privilégier une manière de communiquer que Mercure en ${sign2} ne trouve pas naturelle. Cette différence entre le ${element1} et le ${element2} demande de clarifier vos intentions, surtout lors des conversations sensibles.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos pensées suivent des chemins distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent néanmoins développer une communication très enrichissante lorsqu’ils transforment leurs divergences en curiosité plutôt qu’en confrontation.`,
  ];
