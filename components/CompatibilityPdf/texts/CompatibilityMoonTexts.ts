export interface CompatibilityMoonTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityMoonTextTemplate = (
  context: CompatibilityMoonTextContext,
) => string;

/*
 * Lune dans le même signe
 *
 * Exemple :
 * Lune Scorpion + Lune Scorpion
 */
export const MOON_SAME_SIGN_TEXTS: CompatibilityMoonTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Lunes en ${sign1} créent une compréhension émotionnelle particulièrement instinctive. Vous ressentez souvent les situations de manière semblable et reconnaissez rapidement ce qui rassure, blesse ou réconforte l’autre. Cette proximité favorise l’intimité, mais peut aussi amplifier certaines réactions communes lorsque les émotions deviennent plus intenses.`,

  ({ sign1 }) =>
    `Avec vos deux Lunes en ${sign1}, vos besoins affectifs reposent sur des repères comparables. Vous pouvez naturellement offrir à l’autre le type de présence, d’attention ou de sécurité que vous recherchez vous-même. Cette harmonie émotionnelle devient une force lorsque chacun respecte aussi les nuances personnelles de l’autre.`,

  ({ sign1 }) =>
    `La Lune en ${sign1} colore votre monde intérieur à tous les deux. Vos façons de réagir, de vous protéger et de chercher du réconfort se ressemblent, ce qui peut créer un profond sentiment de familiarité. Vous devez toutefois éviter de supposer que l’autre ressent toujours exactement la même chose que vous.`,

  ({ sign1 }) =>
    `Vos deux Lunes en ${sign1} favorisent une connexion émotionnelle naturelle. Vous pouvez comprendre les silences, les changements d’humeur et les besoins de l’autre sans avoir constamment besoin de longues explications. Cette sensibilité commune demande néanmoins de ne pas laisser les émotions du moment prendre toute la place.`,

  ({ sign1 }) =>
    `Le partage d’une Lune en ${sign1} donne à votre relation une base affective très reconnaissable. Vous possédez souvent des habitudes, des réflexes protecteurs et une manière semblable de créer un sentiment de sécurité. Cette proximité peut renforcer la confiance et la douceur dans votre vie commune.`,

  ({ sign1 }) =>
    `Lorsque vos deux Lunes occupent le signe du ${sign1}, vous vous retrouvez dans une manière familière de vivre les émotions. Chacun peut devenir un refuge pour l’autre, car vos besoins intérieurs suivent des rythmes comparables. Le défi consiste à ne pas renforcer mutuellement les mêmes peurs ou les mêmes sensibilités.`,

  ({ sign1 }) =>
    `Vos réactions instinctives sont influencées par la même énergie lunaire en ${sign1}. Cette ressemblance facilite l’intimité et permet souvent de créer rapidement un climat de confiance. Elle peut cependant rendre certaines tensions plus fortes lorsque vous traversez simultanément le même type d’insécurité.`,

  ({ sign1 }) =>
    `La présence de vos deux Lunes en ${sign1} crée une profonde affinité dans votre manière de prendre soin, d’écouter et de vous attacher. Vous savez généralement ce dont l’autre a besoin pour retrouver son équilibre. Il reste important de ne pas confondre compréhension émotionnelle et fusion complète.`,

  ({ sign1 }) =>
    `Vos deux mondes intérieurs parlent le langage du ${sign1}. Cette proximité peut donner l’impression d’être compris avec une rare profondeur, particulièrement dans les moments de vulnérabilité. Votre relation émotionnelle gagne en stabilité lorsque chacun conserve la liberté d’exprimer ses propres besoins.`,

  ({ sign1 }) =>
    `Deux Lunes en ${sign1} créent souvent un lien intime fondé sur la reconnaissance et la sécurité. Vos sensibilités se ressemblent suffisamment pour que chacun puisse percevoir les attentes affectives de l’autre. Cette configuration devient particulièrement harmonieuse lorsque vous apprenez à apaiser ensemble vos réactions les plus instinctives.`,
];

/*
 * Lune dans deux signes du même élément
 *
 * Exemple :
 * Scorpion + Cancer = Eau + Eau
 */
export const MOON_SAME_ELEMENT_TEXTS: CompatibilityMoonTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Lunes en ${sign1} et en ${sign2} appartiennent toutes les deux à l’élément ${element1}. Vos besoins émotionnels suivent donc une logique fondamentale semblable, ce qui facilite la compréhension, le réconfort et le sentiment de sécurité dans la relation.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’énergie lunaire du ${element1}. Même si vous n’exprimez pas vos émotions de façon identique, vous reconnaissez souvent instinctivement la manière dont l’autre cherche à se protéger et à retrouver son équilibre.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Lunes parlent toutes les deux le langage de l’élément ${element1}. Cette proximité favorise une belle fluidité émotionnelle et permet à chacun de se sentir compris dans ses réactions les plus intimes. Vos différences de signe apportent toutefois des nuances importantes à cette base commune.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos mondes intérieurs. La Lune en ${sign1} et celle en ${sign2} possèdent des manières distinctes de chercher la sécurité, mais elles reposent sur des besoins émotionnels suffisamment proches pour créer une réelle complicité.`,

  ({ sign1, sign2, element1 }) =>
    `Entre une Lune en ${sign1} et une Lune en ${sign2}, une affinité affective peut s’installer naturellement grâce à l’élément ${element1}. Vous comprenez souvent ce qui apaise l’autre et pouvez construire ensemble un environnement rassurant.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Lunes puisent leur sensibilité dans l’élément ${element1}. Cette base commune facilite les échanges émotionnels et peut renforcer le sentiment de proximité dans la vie quotidienne. Chacun apporte cependant sa propre manière de recevoir et d’offrir du réconfort.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes différentes d’une même énergie émotionnelle, celle du ${element1}. Cette correspondance vous aide à respecter les besoins de l’autre, même lorsque vos réactions visibles ne sont pas exactement les mêmes.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Lunes repose sur leur élément commun, le ${element1}. Vous partagez une manière comparable de gérer l’intimité, les habitudes et le besoin de sécurité. Cette harmonie peut devenir une base solide pour la relation.`,

  ({ sign1, sign2, element1 }) =>
    `Les Lunes en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Vous pouvez ressentir une familiarité émotionnelle rapide, comme si certaines réactions de l’autre étaient déjà connues. Cette affinité favorise la confiance et l’ouverture affective.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Lunes possèdent des besoins intérieurs compatibles. Le ${sign1} et le ${sign2} ne recherchent pas toujours le réconfort de la même façon, mais ils comprennent généralement la logique émotionnelle de l’autre.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const MOON_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityMoonTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Lunes en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux énergies peuvent naturellement se soutenir et créer un équilibre affectif dans lequel chacun apporte à l’autre une forme différente de sécurité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} exprime les émotions à travers le ${element1}, tandis que ${sign2} les vit selon le ${element2}. Cette complémentarité permet souvent à l’un d’apporter ce qui manque à l’autre, particulièrement dans les périodes de vulnérabilité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Lunes fonctionnent selon des sensibilités différentes, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. Cette alliance favorise un lien dans lequel le réconfort, l’écoute et l’adaptation trouvent progressivement leur équilibre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre la Lune en ${sign1} et celle en ${sign2}, les éléments ${element1} et ${element2} forment une combinaison naturellement complémentaire. Chacun peut aider l’autre à exprimer plus librement une facette de sa sensibilité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo lunaire réunit le ${element1} et le ${element2}. Cette association peut créer une belle complémentarité entre vos façons de chercher du réconfort, de traverser les émotions et de construire une atmosphère sécurisante.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La Lune en ${sign1} et la Lune en ${sign2} peuvent développer une dynamique affective enrichissante. Les éléments ${element1} et ${element2} se répondent et permettent à chacun de mieux comprendre une autre manière de vivre l’intimité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Lunes associent deux éléments capables de se renforcer : le ${element1} et le ${element2}. L’un peut apporter de l’élan, de la stabilité, de l’écoute ou de la légèreté selon les besoins du moment. Cette diversité peut rendre la relation émotionnellement plus complète.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre les Lunes en ${sign1} et en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos réactions ne sont pas toujours identiques, mais elles peuvent s’équilibrer lorsque chacun reconnaît la valeur de la sensibilité de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Lunes des qualités qui peuvent se soutenir mutuellement. Le ${sign1} peut offrir une forme de sécurité que le ${sign2} ne crée pas spontanément, tandis que celui-ci apporte une autre manière d’apaiser et de comprendre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association lunaire du ${element1} et du ${element2} favorise une relation où chacun peut apprendre une nouvelle façon de gérer ses émotions. Le ${sign1} et le ${sign2} deviennent complémentaires lorsqu’ils accueillent leurs différences avec douceur et curiosité.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const MOON_DIFFERENT_ELEMENT_TEXTS: CompatibilityMoonTextTemplate[] = [
  ({ sign1, sign2, element1, element2 }) =>
    `Les Lunes en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos réactions émotionnelles suivent des logiques différentes, ce qui peut créer des incompréhensions, particulièrement lorsque l’un attend un réconfort que l’autre n’exprime pas spontanément.`,

  ({ sign1, sign2, element1, element2 }) =>
    `${sign1} vit ses émotions à travers le ${element1}, tandis que ${sign2} réagit selon le ${element2}. Vous n’avez pas toujours la même manière de montrer votre vulnérabilité ou de demander du soutien, ce qui exige une communication claire et bienveillante.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos Lunes réunissent le ${element1} et le ${element2}. Cette combinaison demande une certaine adaptation, car chacun possède sa propre façon de se protéger, de retrouver son calme et de créer un sentiment de sécurité intérieure.`,

  ({ sign1, sign2, element1, element2 }) =>
    `La Lune en ${sign1} et la Lune en ${sign2} ne répondent pas toujours aux émotions de la même manière. Les éléments ${element1} et ${element2} peuvent provoquer des décalages, mais ils peuvent aussi vous apprendre à mieux reconnaître des besoins différents des vôtres.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Entre le ${sign1} et le ${sign2}, les différences émotionnelles sont importantes. Le ${element1} et le ${element2} n’utilisent pas les mêmes moyens pour se rassurer ou exprimer leur attachement. Votre relation demande donc écoute, patience et respect des rythmes de chacun.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos mondes intérieurs ne parlent pas spontanément le même langage. La Lune liée au ${element1} peut attendre une réaction que celle associée au ${element2} ne pense pas naturellement à offrir. Cette différence devient constructive lorsque vous apprenez à traduire vos besoins.`,

  ({ sign1, sign2, element1, element2 }) =>
    `La Lune en ${sign1} et celle en ${sign2} possèdent des sensibilités distinctes. Le ${element1} et le ${element2} peuvent créer des tensions dans la vie quotidienne, mais ils peuvent aussi élargir votre compréhension de l’intimité et de la sécurité affective.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Les éléments ${element1} et ${element2} donnent à vos Lunes des manières différentes de ressentir et de réagir. Votre défi consiste à ne pas juger la sensibilité de l’autre selon vos propres repères émotionnels, mais à reconnaître sa manière particulière de se protéger.`,

  ({ sign1, sign2, element1, element2 }) =>
    `La Lune en ${sign1} peut rechercher une forme de présence que la Lune en ${sign2} n’offre pas spontanément. Cette différence entre le ${element1} et le ${element2} demande de nommer clairement vos attentes plutôt que de croire que l’autre devrait les deviner.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos besoins émotionnels suivent des rythmes distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent apprendre beaucoup l’un de l’autre, à condition de transformer leurs différences en curiosité plutôt qu’en reproches.`,
];
