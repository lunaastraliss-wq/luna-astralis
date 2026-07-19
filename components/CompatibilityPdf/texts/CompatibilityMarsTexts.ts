export interface CompatibilityMarsTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityMarsTextTemplate = (
  context: CompatibilityMarsTextContext,
) => string;

/*
 * Mars dans le même signe
 *
 * Exemple :
 * Mars Scorpion + Mars Scorpion
 */
export const MARS_SAME_SIGN_TEXTS: CompatibilityMarsTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Mars en ${sign1} indiquent une manière très semblable d’agir, de poursuivre vos désirs et de défendre vos positions. Cette proximité crée une forte compréhension de vos rythmes et de vos réactions, mais peut aussi intensifier la compétition lorsque chacun veut diriger la situation.`,

  ({ sign1 }) =>
    `Avec vos deux Mars en ${sign1}, vous partagez une énergie d’action comparable. Vous savez instinctivement ce qui motive l’autre, ce qui peut renforcer l’attirance, l’efficacité et la capacité à avancer ensemble. Cette similitude demande toutefois de ne pas transformer chaque désaccord en rapport de force.`,

  ({ sign1 }) =>
    `Le partage de Mars en ${sign1} crée une dynamique vive et reconnaissable. Vos façons de prendre des initiatives, d’exprimer le désir et de réagir aux obstacles suivent des repères similaires. Cette compatibilité peut être très puissante lorsque vous dirigez votre énergie vers un objectif commun.`,

  ({ sign1 }) =>
    `Vos Mars en ${sign1} donnent à la relation un rythme d’action commun. Vous pouvez facilement comprendre les élans, les frustrations et les ambitions de l’autre. Cette proximité favorise la passion et la solidarité, mais elle peut aussi amplifier l’impatience ou l’entêtement lorsque vos volontés s’opposent.`,

  ({ sign1 }) =>
    `Lorsque Mars occupe le même signe chez deux partenaires, l’attirance et la manière d’agir peuvent sembler immédiatement familières. En ${sign1}, vous partagez une façon comparable de poursuivre ce que vous voulez. Le défi consiste à respecter le territoire et le pouvoir d’action de chacun.`,

  ({ sign1 }) =>
    `Vos deux Mars en ${sign1} créent une forte résonance dans votre manière de désirer, de décider et de passer à l’action. Vous pouvez former une équipe très efficace, surtout lorsque vos objectifs convergent. En revanche, la rivalité peut apparaître rapidement si chacun cherche à imposer son propre rythme.`,

  ({ sign1 }) =>
    `La présence de Mars en ${sign1} dans vos deux thèmes favorise une compréhension instinctive de vos impulsions. Vous savez souvent comment stimuler l’autre ou l’aider à retrouver son élan. Cette configuration demande néanmoins de canaliser les réactions trop vives et les conflits qui pourraient s’enflammer rapidement.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre force d’action à travers l’énergie du ${sign1}. Cette ressemblance peut nourrir une grande intensité physique, une belle détermination et un réel esprit d’équipe. Elle exige cependant que chacun puisse agir sans se sentir contrôlé ou constamment défié.`,

  ({ sign1 }) =>
    `Deux Mars en ${sign1} donnent souvent à la relation une énergie directe et puissante. Vous reconnaissez facilement les désirs et les réactions de l’autre, ce qui peut renforcer l’attirance. Cette proximité devient constructive lorsque vous apprenez à transformer la tension en mouvement plutôt qu’en affrontement.`,

  ({ sign1 }) =>
    `Le même placement de Mars en ${sign1} vous rapproche par votre manière de prendre des initiatives et de gérer les obstacles. Vous pouvez avancer avec une grande efficacité lorsque vous poursuivez le même but. Votre équilibre dépendra toutefois de votre capacité à partager l’espace, les décisions et le pouvoir.`,
];

/*
 * Mars dans deux signes du même élément
 *
 * Exemple :
 * Mars Scorpion + Mars Cancer = Eau + Eau
 */
export const MARS_SAME_ELEMENT_TEXTS: CompatibilityMarsTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Mars en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vos manières d’agir et de poursuivre vos désirs reposent donc sur une logique fondamentale semblable, même si chacun exprime son énergie avec les nuances propres à son signe.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité favorise une compréhension naturelle de vos rythmes, de vos ambitions et de votre manière de réagir aux obstacles. Vous pouvez ainsi unir vos forces avec une certaine fluidité.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Mars parlent le langage commun de l’élément ${element1}. Vous n’agissez pas toujours de façon identique, mais vous reconnaissez généralement la logique qui pousse l’autre à prendre une initiative, à persévérer ou à défendre sa position.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos forces d’action. Mars en ${sign1} et Mars en ${sign2} possèdent des styles différents, mais ils partagent une manière comparable de canaliser le désir, l’ambition et la colère.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Mars en ${sign1} et Mars en ${sign2}, une affinité dynamique peut s’installer naturellement grâce à l’élément ${element1}. Vous comprenez souvent le rythme de l’autre et pouvez coordonner vos efforts sans devoir constamment réajuster votre manière d’avancer.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Mars puisent leur énergie dans l’élément ${element1}. Cette base commune facilite l’action, l’attirance et la mobilisation autour de projets partagés. Chacun apporte néanmoins une nuance différente à cette même force.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes distinctes d’une même énergie martienne, celle du ${element1}. Cette proximité vous aide à respecter les élans de l’autre, même lorsque vos stratégies ou vos façons de réagir ne sont pas exactement les mêmes.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Mars repose sur leur élément commun, le ${element1}. Vos rythmes d’action sont souvent compatibles et vous pouvez former une équipe solide lorsque vous dirigez votre énergie vers un même objectif.`,

  ({ sign1, sign2, element1 }) =>
    `Les Mars en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Cette affinité favorise la coopération, l’attirance et la capacité à gérer ensemble les défis, à condition de ne pas laisser la compétition prendre trop de place.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Mars possèdent des mécanismes d’action compatibles. Le ${sign1} et le ${sign2} ne poursuivent pas toujours leurs buts de la même façon, mais ils comprennent généralement l’énergie qui anime l’autre.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const MARS_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityMarsTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Mars en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux forces peuvent naturellement se soutenir et créer une dynamique dans laquelle l’initiative de l’un renforce la persévérance, la stratégie ou l’inspiration de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} agit à travers le ${element1}, tandis que ${sign2} mobilise son énergie selon le ${element2}. Cette complémentarité peut vous aider à passer plus facilement de l’idée à l’action et à équilibrer impulsion, réflexion et constance.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Mars fonctionnent selon des styles différents, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. L’un apporte une énergie que l’autre possède moins spontanément, ce qui peut renforcer l’efficacité et l’attirance.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Mars en ${sign1} et Mars en ${sign2}, les éléments ${element1} et ${element2} forment une association naturellement complémentaire. Vos manières d’agir ne sont pas identiques, mais elles peuvent s’accorder pour produire une dynamique très constructive.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo martien réunit le ${element1} et le ${element2}. Cette combinaison crée un équilibre intéressant entre vos façons de prendre des initiatives, de poursuivre vos désirs et de surmonter les obstacles.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Mars en ${sign1} et Mars en ${sign2} peuvent développer une dynamique d’action enrichissante. Les éléments ${element1} et ${element2} se répondent et favorisent souvent une relation où chacun stimule le courage, la motivation et la progression de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Mars associent deux éléments capables de se renforcer : le ${element1} et le ${element2}. L’un peut apporter l’élan, tandis que l’autre consolide, oriente ou approfondit l’action. Cette complémentarité peut rendre votre duo particulièrement efficace.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Mars en ${sign1} et Mars en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences deviennent une force lorsque chacun reconnaît la valeur de la stratégie naturelle de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Mars des qualités qui peuvent s’équilibrer dans l’action. Le ${sign1} peut lancer une initiative que le ${sign2} soutient, approfondit ou rend plus durable.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} favorise une dynamique où vos énergies peuvent collaborer sans être identiques. Mars en ${sign1} et Mars en ${sign2} deviennent particulièrement compatibles lorsque vous transformez vos différences en répartition naturelle des forces.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const MARS_DIFFERENT_ELEMENT_TEXTS: CompatibilityMarsTextTemplate[] = [
  ({ sign1, sign2, element1, element2 }) =>
    `Les Mars en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos manières d’agir suivent des logiques différentes, ce qui peut créer des tensions lorsque chacun cherche à imposer son propre rythme ou sa propre stratégie.`,

  ({ sign1, sign2, element1, element2 }) =>
    `${sign1} passe à l’action à travers le ${element1}, tandis que ${sign2} mobilise son énergie selon le ${element2}. Vous ne poursuivez pas toujours vos désirs de la même façon, ce qui demande davantage de coordination et de respect mutuel.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos Mars réunissent le ${element1} et le ${element2}. Cette combinaison nécessite une certaine adaptation, car chacun possède sa propre manière d’initier, de persévérer, de réagir à la frustration et de défendre sa position.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Mars en ${sign1} et Mars en ${sign2} abordent les défis selon des stratégies distinctes. Les éléments ${element1} et ${element2} peuvent provoquer des affrontements, mais ils peuvent aussi vous apprendre à diversifier vos façons d’agir.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Entre le ${sign1} et le ${sign2}, les différences d’énergie peuvent être importantes. Le ${element1} et le ${element2} ne réagissent pas toujours au même rythme ni avec la même intensité, ce qui demande patience et ajustement.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos manières de poursuivre vos désirs ne parlent pas spontanément le même langage. Mars lié au ${element1} peut agir d’une façon que Mars associé au ${element2} perçoit comme trop rapide, trop lente, trop directe ou trop indirecte.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Mars en ${sign1} et Mars en ${sign2} possèdent des réflexes distincts face aux obstacles. Cette différence entre le ${element1} et le ${element2} peut créer des frustrations, mais elle peut aussi vous aider à éviter une approche trop uniforme.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Les éléments ${element1} et ${element2} donnent à vos Mars des façons différentes d’exprimer l’initiative, le désir et la colère. Votre défi consiste à ne pas interpréter le style d’action de l’autre comme un manque d’intérêt ou une volonté de domination.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Mars en ${sign1} peut privilégier une stratégie que Mars en ${sign2} ne comprend pas immédiatement. Cette différence entre le ${element1} et le ${element2} demande de clarifier vos intentions avant que les tensions ne deviennent personnelles.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos énergies d’action suivent des chemins distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent néanmoins devenir très efficaces ensemble lorsqu’ils apprennent à coordonner leurs forces plutôt qu’à se mesurer constamment.`,
];
