export interface CompatibilityUranusTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityUranusTextTemplate = (
  context: CompatibilityUranusTextContext,
) => string;

/*
 * Uranus dans le même signe
 *
 * Exemple :
 * Uranus Scorpion + Uranus Scorpion
 */
export const URANUS_SAME_SIGN_TEXTS: CompatibilityUranusTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Uranus en ${sign1} révèlent une manière très semblable d’aborder la liberté, le changement et l’indépendance. Vous comprenez instinctivement le besoin de l’autre de sortir des cadres trop rigides et d’explorer de nouvelles possibilités. Cette proximité peut rendre la relation stimulante, mais aussi imprévisible si aucun repère commun n’est établi.`,

  ({ sign1 }) =>
    `Avec vos deux Uranus en ${sign1}, vous partagez une vision comparable de l’originalité et de l’évolution. Vous pouvez vous encourager mutuellement à penser autrement, à remettre en question certaines habitudes et à construire une relation qui vous ressemble réellement.`,

  ({ sign1 }) =>
    `Le partage d’Uranus en ${sign1} crée une forte affinité dans votre manière de rechercher le renouveau. Vous ressentez souvent au même moment le besoin de changer de rythme, de modifier un projet ou de vous libérer d’une contrainte devenue trop lourde.`,

  ({ sign1 }) =>
    `Vos Uranus en ${sign1} donnent à votre relation une énergie indépendante et inventive. Vous comprenez facilement les élans de liberté de l’autre et pouvez accepter des formes de relation moins conventionnelles. Le défi consiste à maintenir suffisamment de stabilité pour que le lien ne repose pas uniquement sur l’imprévu.`,

  ({ sign1 }) =>
    `Lorsque Uranus occupe le même signe chez deux partenaires, chacun reconnaît naturellement le besoin d’autonomie de l’autre. En ${sign1}, vous partagez une manière semblable de provoquer le changement et de réagir aux situations qui limitent votre liberté.`,

  ({ sign1 }) =>
    `Vos deux Uranus en ${sign1} favorisent une relation dans laquelle l’innovation et la nouveauté occupent une place importante. Vous pouvez vous inspirer mutuellement et éviter facilement la monotonie. Cette configuration demande toutefois d’apprendre à distinguer le besoin de renouveau d’une fuite devant l’engagement.`,

  ({ sign1 }) =>
    `La présence d’Uranus en ${sign1} dans vos deux thèmes crée une compréhension instinctive de vos réactions face aux contraintes. Vous savez généralement quand l’autre a besoin d’espace ou d’un changement. Cette ressemblance peut protéger votre individualité, mais elle peut aussi provoquer des ruptures de rythme simultanées.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre besoin de liberté à travers l’énergie du ${sign1}. Cette proximité peut rendre votre relation audacieuse, originale et capable de se réinventer. Elle exige néanmoins un dialogue clair afin que l’indépendance de chacun ne soit pas interprétée comme un désengagement.`,

  ({ sign1 }) =>
    `Deux Uranus en ${sign1} donnent souvent au couple une manière commune de défier les conventions. Vous pouvez créer vos propres règles et choisir un mode de vie différent de celui qui est attendu. Cette liberté devient constructive lorsqu’elle repose sur une confiance réelle et non sur l’évitement.`,

  ({ sign1 }) =>
    `Le même placement d’Uranus en ${sign1} vous rapproche par votre désir d’évolution et votre capacité à accueillir l’inattendu. Vous pouvez transformer rapidement votre relation lorsque les circonstances changent. Votre équilibre dépendra toutefois de votre capacité à préserver certains repères durables.`,
];

/*
 * Uranus dans deux signes du même élément
 *
 * Exemple :
 * Uranus Scorpion + Uranus Cancer = Eau + Eau
 */
export const URANUS_SAME_ELEMENT_TEXTS: CompatibilityUranusTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Uranus en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vos manières de rechercher la liberté et de provoquer le changement reposent donc sur une énergie commune, même si chacun exprime son indépendance avec les nuances propres à son signe.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité favorise une compréhension naturelle de vos besoins d’autonomie, de nouveauté et d’évolution. Vous reconnaissez généralement les moments où l’autre a besoin d’air ou de mouvement.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Uranus parlent le langage commun de l’élément ${element1}. Vous ne remettez pas toujours en question les mêmes choses, mais vous comprenez la logique qui pousse l’autre à modifier ses habitudes ou à refuser un cadre trop restrictif.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos façons d’accueillir l’imprévu. Uranus en ${sign1} et Uranus en ${sign2} possèdent des expressions différentes, mais ils partagent une manière compatible de rechercher le renouvellement.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Uranus en ${sign1} et Uranus en ${sign2}, une affinité d’indépendance peut s’installer naturellement grâce à l’élément ${element1}. Vous respectez souvent le besoin de l’autre de suivre sa propre voie sans y voir immédiatement une menace pour la relation.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Uranus puisent leur force de transformation dans l’élément ${element1}. Cette base commune facilite l’adaptation aux changements et la création d’un mode de relation plus personnel. Chacun apporte toutefois une nuance différente à cette recherche de liberté.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes distinctes d’une même énergie uranienne, celle du ${element1}. Cette proximité vous aide à accepter les particularités de l’autre et à maintenir une relation ouverte à l’évolution.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Uranus repose sur leur élément commun, le ${element1}. Vos besoins d’autonomie sont souvent compatibles et vous pouvez vous soutenir lorsque l’un de vous souhaite sortir d’une situation devenue trop étroite.`,

  ({ sign1, sign2, element1 }) =>
    `Les Uranus en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Cette affinité favorise l’originalité, la souplesse et la capacité à inventer ensemble de nouvelles façons de faire vivre la relation.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Uranus possèdent des mécanismes de changement compatibles. Le ${sign1} et le ${sign2} ne recherchent pas exactement la même liberté, mais ils comprennent généralement ce qui pousse l’autre à évoluer.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const URANUS_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityUranusTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Uranus en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux manières de rechercher le changement peuvent naturellement se soutenir et créer un équilibre entre innovation, adaptation, inspiration et stabilité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} exprime son indépendance à travers le ${element1}, tandis que ${sign2} accueille le renouveau selon le ${element2}. Cette complémentarité peut vous aider à transformer vos idées nouvelles en changements réellement bénéfiques pour la relation.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Uranus fonctionnent selon des styles différents, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. L’un apporte l’impulsion du changement, tandis que l’autre lui donne une direction, une profondeur ou une forme plus viable.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Uranus en ${sign1} et Uranus en ${sign2}, les éléments ${element1} et ${element2} forment une association favorable à l’évolution. Vos besoins de liberté ne sont pas identiques, mais ils peuvent se compléter sans forcément menacer la stabilité du couple.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo uranien réunit le ${element1} et le ${element2}. Cette combinaison crée un équilibre intéressant entre vos façons de rompre avec la routine, de prendre des risques et d’adapter la relation aux changements de la vie.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Uranus en ${sign1} et Uranus en ${sign2} peuvent développer une dynamique particulièrement stimulante. Les éléments ${element1} et ${element2} se répondent et vous encouragent à évoluer sans perdre complètement vos repères.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Uranus associent deux éléments capables de se renforcer : le ${element1} et le ${element2}. L’un peut introduire l’idée nouvelle, tandis que l’autre l’aide à s’intégrer de manière plus harmonieuse dans votre vie commune.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Uranus en ${sign1} et Uranus en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences deviennent une force lorsque chacun respecte le rythme de changement et le besoin d’espace de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Uranus des qualités qui peuvent s’équilibrer dans les périodes de transition. Le ${sign1} peut provoquer un mouvement que le ${sign2} aide à comprendre, organiser ou rendre durable.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} favorise une dynamique où liberté et engagement peuvent coexister. Uranus en ${sign1} et Uranus en ${sign2} deviennent particulièrement compatibles lorsque vous utilisez le changement pour faire évoluer le lien plutôt que pour vous en éloigner.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const URANUS_DIFFERENT_ELEMENT_TEXTS: CompatibilityUranusTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Uranus en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos façons de rechercher la liberté et de réagir au changement suivent des logiques différentes, ce qui peut créer de l’instabilité lorsque chacun modifie la relation selon son propre rythme.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} exprime son besoin d’indépendance à travers le ${element1}, tandis que ${sign2} accueille la nouveauté selon le ${element2}. Vous ne ressentez pas toujours au même moment le besoin de rompre avec une habitude ou de préserver un repère.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Uranus réunissent le ${element1} et le ${element2}. Cette combinaison demande une certaine adaptation, car chacun possède sa propre manière de vivre l’imprévu, de résister aux contraintes et de réclamer davantage d’espace.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Uranus en ${sign1} et Uranus en ${sign2} abordent l’évolution selon des priorités distinctes. Les éléments ${element1} et ${element2} peuvent provoquer des réactions opposées face aux changements soudains, mais ils peuvent aussi élargir votre capacité d’adaptation.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre le ${sign1} et le ${sign2}, les besoins de liberté peuvent prendre des formes très différentes. Le ${element1} et le ${element2} ne réagissent pas de la même façon à la routine, à la distance ou aux règles du couple.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos manières de vivre l’indépendance ne parlent pas spontanément le même langage. Uranus lié au ${element1} peut provoquer une rupture de rythme que Uranus associé au ${element2} perçoit comme inutile, déstabilisante ou difficile à suivre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Uranus en ${sign1} et Uranus en ${sign2} possèdent des réactions distinctes face à l’imprévu. Cette différence entre le ${element1} et le ${element2} peut créer une impression d’inconstance chez l’un ou de rigidité chez l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Uranus des besoins différents en matière d’espace, de nouveauté et d’autonomie. Votre défi consiste à ne pas interpréter la liberté de l’autre comme un rejet ni son besoin de stabilité comme une volonté de contrôle.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Uranus en ${sign1} peut rechercher un changement que Uranus en ${sign2} ne juge pas nécessaire. Cette différence entre le ${element1} et le ${element2} demande de discuter des transformations importantes avant qu’elles ne soient imposées à la relation.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos chemins d’évolution suivent des rythmes distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent néanmoins préserver une relation vivante lorsqu’ils apprennent à négocier l’espace, la nouveauté et la stabilité.`,
  ];
