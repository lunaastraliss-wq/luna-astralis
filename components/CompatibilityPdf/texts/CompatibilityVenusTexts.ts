export interface CompatibilityVenusTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityVenusTextTemplate = (
  context: CompatibilityVenusTextContext,
) => string;

/*
 * Vénus dans le même signe
 *
 * Exemple :
 * Vénus Scorpion + Vénus Scorpion
 */
export const VENUS_SAME_SIGN_TEXTS: CompatibilityVenusTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Vénus en ${sign1} révèlent une manière très semblable d’aimer, de séduire et de recevoir l’affection. Vous reconnaissez spontanément les gestes qui touchent l’autre, car ils correspondent souvent à vos propres attentes. Cette proximité favorise la tendresse et la complicité, tout en demandant de préserver une part de surprise dans la relation.`,

  ({ sign1 }) =>
    `Avec vos deux Vénus en ${sign1}, vous partagez des valeurs affectives comparables. Vous recherchez généralement le même type d’attention, de présence et de beauté dans la relation. Cette harmonie facilite l’attachement, mais peut aussi renforcer certaines exigences communes lorsque chacun attend de l’autre une réponse identique à la sienne.`,

  ({ sign1 }) =>
    `Le partage de Vénus en ${sign1} crée une affinité naturelle dans votre manière de montrer votre amour. Vous comprenez instinctivement ce qui plaît, rassure ou attire l’autre. Cette ressemblance peut rendre la relation particulièrement fluide, à condition de ne pas supposer que tous vos besoins affectifs sont exactement les mêmes.`,

  ({ sign1 }) =>
    `Vos Vénus en ${sign1} donnent à votre relation un langage amoureux commun. Vos gestes de tendresse, vos goûts et votre manière de créer de la proximité suivent des repères semblables. Cette compatibilité favorise une belle harmonie, mais demande aussi de respecter les différences liées à votre histoire personnelle.`,

  ({ sign1 }) =>
    `Lorsque Vénus occupe le même signe chez deux partenaires, l’attraction repose souvent sur une reconnaissance immédiate. En ${sign1}, vous partagez une conception comparable du plaisir, de l’attachement et de la fidélité. Cette proximité peut renforcer le sentiment d’être profondément compris dans votre manière d’aimer.`,

  ({ sign1 }) =>
    `Vos deux Vénus en ${sign1} créent une sensibilité affective commune. Vous appréciez souvent les mêmes attentions et savez intuitivement comment nourrir le lien. Le défi consiste à ne pas laisser vos ressemblances vous enfermer dans des habitudes trop prévisibles ou dans des attentes jamais exprimées.`,

  ({ sign1 }) =>
    `La présence de Vénus en ${sign1} dans vos deux thèmes favorise une compréhension spontanée de vos besoins amoureux. Vous partagez une manière comparable de rechercher l’harmonie, le plaisir et la proximité. Cette configuration peut devenir très stable lorsque chacun continue à cultiver sa propre façon de séduire et d’aimer.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre affection à travers l’énergie du ${sign1}. Cette ressemblance crée une belle cohérence dans votre vie sentimentale et dans votre manière d’apprécier les moments à deux. Elle peut toutefois amplifier certains besoins communs lorsque chacun attend d’être rassuré de la même façon.`,

  ({ sign1 }) =>
    `Deux Vénus en ${sign1} donnent souvent l’impression que vous parlez le même langage du cœur. Vous reconnaissez facilement ce qui rend l’autre heureux et ce qui peut le blesser. Cette affinité devient particulièrement enrichissante lorsque vous osez exprimer clairement vos attentes plutôt que de croire qu’elles sont évidentes.`,

  ({ sign1 }) =>
    `Le même placement de Vénus en ${sign1} vous rapproche par vos goûts, vos valeurs et votre manière d’entrer dans l’intimité. Vous pouvez créer ensemble une relation harmonieuse et rassurante. Votre évolution dépendra néanmoins de votre capacité à préserver le désir, la curiosité et l’individualité au sein de cette grande ressemblance.`,
];

/*
 * Vénus dans deux signes du même élément
 *
 * Exemple :
 * Vénus Scorpion + Vénus Cancer = Eau + Eau
 */
export const VENUS_SAME_ELEMENT_TEXTS: CompatibilityVenusTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Vénus en ${sign1} et en ${sign2} appartiennent toutes les deux à l’élément ${element1}. Vos manières d’aimer reposent donc sur une sensibilité fondamentale semblable, même si chacun exprime son affection avec les nuances propres à son signe.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité favorise une compréhension naturelle de vos besoins affectifs, de vos valeurs sentimentales et de votre manière de créer de l’intimité.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Vénus parlent le langage commun de l’élément ${element1}. Vous n’exprimez pas toujours l’amour de la même manière, mais vous reconnaissez généralement ce qui donne à l’autre le sentiment d’être apprécié et choisi.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos sensibilités amoureuses. Vénus en ${sign1} et Vénus en ${sign2} possèdent des styles différents, mais elles recherchent une forme de plaisir, de proximité et d’harmonie qui repose sur des besoins comparables.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Vénus en ${sign1} et Vénus en ${sign2}, une affinité affective peut s’installer naturellement grâce à l’élément ${element1}. Vous comprenez souvent les attentes de l’autre sans qu’elles aient besoin d’être constamment expliquées.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Vénus puisent leur manière d’aimer dans l’élément ${element1}. Cette base commune facilite la tendresse, l’attachement et la création d’un univers partagé. Chacun apporte néanmoins une nuance différente à cette même sensibilité.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes distinctes d’une même énergie vénusienne, celle du ${element1}. Cette proximité vous aide à respecter les besoins amoureux de l’autre, même lorsque vos gestes ou vos rythmes diffèrent.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Vénus repose sur leur élément commun, le ${element1}. Vous partagez une manière comparable de rechercher l’harmonie, la satisfaction et le lien. Cette affinité peut créer une relation chaleureuse et naturellement cohérente.`,

  ({ sign1, sign2, element1 }) =>
    `Les Vénus en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Cette correspondance favorise la confiance affective et la capacité à offrir à l’autre une forme d’amour qu’il peut reconnaître et recevoir facilement.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Vénus possèdent des valeurs sentimentales compatibles. Le ${sign1} et le ${sign2} ne séduisent pas exactement de la même façon, mais ils comprennent généralement la logique affective de l’autre.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const VENUS_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityVenusTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Vénus en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux sensibilités peuvent naturellement se soutenir et créer une relation dans laquelle l’attraction, l’affection et la complicité trouvent un équilibre vivant.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} exprime l’amour à travers le ${element1}, tandis que ${sign2} le vit selon le ${element2}. Cette complémentarité permet souvent à chacun de recevoir une forme d’affection différente, mais particulièrement enrichissante.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Vénus fonctionnent selon des styles distincts, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. L’un apporte une qualité que l’autre possède moins spontanément, ce qui peut renforcer l’attraction et l’évolution du lien.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Vénus en ${sign1} et Vénus en ${sign2}, les éléments ${element1} et ${element2} forment une association naturellement complémentaire. Vos façons d’aimer ne sont pas identiques, mais elles peuvent s’accorder avec beaucoup de richesse.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo vénusien réunit le ${element1} et le ${element2}. Cette combinaison crée un équilibre intéressant entre vos manières de séduire, de vous attacher et de nourrir la relation. Chacun peut offrir à l’autre une expérience affective plus complète.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vénus en ${sign1} et Vénus en ${sign2} peuvent développer une dynamique amoureuse très enrichissante. Les éléments ${element1} et ${element2} se répondent et favorisent une relation où le plaisir, la tendresse et le soutien peuvent se renforcer mutuellement.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Vénus associent deux éléments capables de se compléter : le ${element1} et le ${element2}. L’un peut apporter l’élan, la légèreté, la stabilité ou la profondeur qui aide l’autre à mieux exprimer ses sentiments.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Vénus en ${sign1} et Vénus en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences deviennent une force lorsque chacun reconnaît et valorise la manière particulière dont l’autre donne de l’amour.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Vénus des qualités qui peuvent s’équilibrer dans la relation. Le ${sign1} peut éveiller un besoin que le ${sign2} sait nourrir autrement, créant ainsi une attraction fondée autant sur la différence que sur l’affinité.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} favorise une dynamique amoureuse où vos façons d’aimer peuvent s’enrichir. Vénus en ${sign1} et Vénus en ${sign2} deviennent particulièrement compatibles lorsque vous accueillez vos différences avec ouverture et confiance.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const VENUS_DIFFERENT_ELEMENT_TEXTS: CompatibilityVenusTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Vénus en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos manières d’aimer suivent des logiques différentes, ce qui peut créer des incompréhensions lorsque chacun offre naturellement ce qu’il aimerait lui-même recevoir.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} exprime son affection à travers le ${element1}, tandis que ${sign2} recherche l’amour selon le ${element2}. Vous ne percevez pas toujours les mêmes gestes comme des preuves d’attachement, ce qui demande une communication affective plus consciente.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Vénus réunissent le ${element1} et le ${element2}. Cette combinaison demande de l’adaptation, car chacun possède sa propre manière de séduire, de se rapprocher et de se sentir apprécié dans la relation.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vénus en ${sign1} et Vénus en ${sign2} abordent l’amour selon des priorités distinctes. Les éléments ${element1} et ${element2} peuvent provoquer certains décalages, mais ils peuvent aussi vous apprendre à reconnaître plusieurs formes d’affection.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre le ${sign1} et le ${sign2}, les différences sentimentales peuvent être importantes. Le ${element1} et le ${element2} ne recherchent pas toujours le même rythme, la même proximité ou les mêmes démonstrations. Votre relation demande donc écoute et souplesse.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos langages amoureux ne sont pas spontanément identiques. Vénus liée au ${element1} peut offrir une attention que Vénus associée au ${element2} ne reconnaît pas immédiatement comme une preuve d’amour. Nommer vos besoins devient alors essentiel.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vénus en ${sign1} et Vénus en ${sign2} possèdent des sensibilités distinctes. Cette différence entre le ${element1} et le ${element2} peut créer des frustrations, mais elle peut aussi rendre la relation plus riche en vous ouvrant à une autre manière d’aimer.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Vénus des façons différentes d’exprimer le désir, la tendresse et l’attachement. Votre défi consiste à ne pas mesurer l’amour de l’autre uniquement selon vos propres attentes.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vénus en ${sign1} peut rechercher une forme de proximité que Vénus en ${sign2} ne propose pas spontanément. Cette différence entre le ${element1} et le ${element2} demande de préciser vos attentes afin d’éviter que les silences soient interprétés comme un manque d’intérêt.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos besoins amoureux suivent des chemins distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent néanmoins développer une relation profonde lorsqu’ils apprennent à traduire leurs gestes affectifs plutôt qu’à les comparer.`,
  ];
