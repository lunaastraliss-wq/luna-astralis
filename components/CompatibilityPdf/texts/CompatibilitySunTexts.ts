export interface CompatibilitySunTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilitySunTextTemplate = (
  context: CompatibilitySunTextContext,
) => string;

/*
 * Soleil dans le même signe
 *
 * Exemple :
 * Soleil Scorpion + Soleil Scorpion
 */
export const SUN_SAME_SIGN_TEXTS: CompatibilitySunTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Soleils en ${sign1} créent une forte impression de reconnaissance. Vous partagez plusieurs réflexes, ambitions et manières de vous affirmer. Cette proximité facilite la compréhension, mais demande aussi de respecter le besoin de chacun d’exister pleinement.`,

  ({ sign1 }) =>
    `Avec vos deux Soleils en ${sign1}, vous percevez rapidement ce qui motive l’autre. Vos personnalités fonctionnent selon des repères semblables, ce qui peut renforcer la complicité, tout en amplifiant parfois certains traits communs.`,

  ({ sign1 }) =>
    `Le Soleil en ${sign1} occupe une place centrale chez vous deux. Cette ressemblance favorise une compréhension spontanée de vos objectifs et de votre manière de rayonner. Il reste toutefois important de préserver vos individualités.`,

  ({ sign1 }) =>
    `Vos identités solaires partagent l’énergie du ${sign1}. Vous avancez souvent avec des intentions semblables et pouvez vous encourager naturellement. Lorsque vos volontés s’opposent, chacun peut cependant avoir du mal à céder.`,

  ({ sign1 }) =>
    `La présence du Soleil en ${sign1} dans vos deux thèmes crée une familiarité immédiate. Vous reconnaissez facilement les forces et les besoins de l’autre, parce qu’ils ressemblent souvent aux vôtres.`,

  ({ sign1 }) =>
    `Vos deux Soleils en ${sign1} donnent à votre relation une base identitaire commune. Vous pouvez partager une vision comparable de la réussite, de l’expression personnelle et de la place que chacun souhaite occuper.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre vitalité à travers le ${sign1}. Cette proximité peut produire une grande solidarité, mais aussi une certaine compétition lorsque chacun cherche à imposer sa manière d’agir.`,

  ({ sign1 }) =>
    `Le même signe solaire vous permet de comprendre instinctivement plusieurs réactions de l’autre. Avec vos Soleils en ${sign1}, la relation peut sembler naturelle, familière et profondément révélatrice.`,

  ({ sign1 }) =>
    `Lorsque vos deux Soleils occupent le signe du ${sign1}, vous reconnaissez naturellement chez l’autre une manière familière d’affirmer ses choix et de poursuivre ses ambitions. Cette ressemblance peut renforcer la confiance et le sentiment de former une véritable équipe. Elle demande néanmoins de laisser à chacun suffisamment d’espace pour développer son identité personnelle.`,

  ({ sign1 }) =>
    `Le partage d’un Soleil en ${sign1} crée une base commune importante dans votre relation. Vous comprenez instinctivement ce qui donne à l’autre confiance, motivation et envie d’avancer. Vos ressemblances deviennent une force lorsque vous les utilisez pour vous soutenir, mais elles peuvent provoquer des tensions si chacun cherche à occuper exactement la même place.`,
];

/*
 * Soleil dans deux signes du même élément
 *
 * Exemple :
 * Scorpion + Cancer = Eau + Eau
 */
export const SUN_SAME_ELEMENT_TEXTS: CompatibilitySunTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Soleils en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Cette proximité favorise une compréhension naturelle de vos motivations, même si chacun exprime cette énergie à sa manière.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Vos personnalités avancent donc selon une énergie fondamentale semblable, ce qui peut faciliter le respect, l’encouragement et la construction de projets communs.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Soleils en ${sign1} et en ${sign2} parlent le langage commun de l’élément ${element1}. Vous pouvez reconnaître rapidement les besoins et les ambitions de l’autre, sans devoir toujours les expliquer.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos identités solaires. Le ${sign1} et le ${sign2} possèdent des qualités différentes, mais ils partagent une manière comparable d’aborder la vie et de poursuivre leurs objectifs.`,

  ({ sign1, sign2, element1 }) =>
    `Entre un Soleil en ${sign1} et un Soleil en ${sign2}, une affinité élémentaire peut s’installer naturellement. L’énergie ${element1} vous aide à vous comprendre tout en laissant à chacun sa propre personnalité.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux signes solaires puisent leur force dans l’élément ${element1}. Cette base commune peut créer une relation fluide, dans laquelle chacun se sent reconnu et encouragé dans sa manière d’être.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux facettes de l’élément ${element1}. Vos différences existent, mais elles reposent sur des motivations profondes qui se ressemblent et peuvent vous rapprocher.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Soleils repose sur leur élément commun, le ${element1}. Vous pouvez avancer avec des valeurs similaires, tout en apportant chacun une nuance différente à la relation.`,

  ({ sign1, sign2, element1 }) =>
    `Les Soleils en ${sign1} et en ${sign2} partagent la même énergie élémentaire, celle du ${element1}. Cette affinité facilite la reconnaissance de vos valeurs et de vos motivations profondes. Même si vos personnalités ne s’expriment pas exactement de la même manière, vous possédez une base commune qui peut soutenir la confiance et la coopération.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, le ${sign1} et le ${sign2} peuvent se comprendre avec une certaine spontanéité. Chacun reconnaît chez l’autre une manière familière de réagir et de construire son avenir. Cette proximité favorise l’harmonie, à condition de respecter les nuances propres à chacun des deux signes.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const SUN_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilitySunTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Soleils en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux énergies peuvent naturellement se soutenir et créer une relation stimulante, équilibrée et constructive.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} apporte l’énergie du ${element1}, tandis que ${sign2} exprime celle du ${element2}. Cette complémentarité peut aider chacun à développer des qualités qu’il possède moins spontanément.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos identités solaires fonctionnent différemment, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. Cette alliance favorise souvent la motivation et la croissance commune.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre le ${sign1} et le ${sign2}, les éléments ${element1} et ${element2} forment une association naturellement complémentaire. Chacun peut offrir à l’autre une énergie utile à son évolution.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo solaire réunit le ${element1} et le ${element2}. Cette combinaison peut créer un équilibre intéressant entre vos façons d’agir, de décider et de poursuivre vos ambitions.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Le Soleil en ${sign1} et le Soleil en ${sign2} peuvent construire une dynamique enrichissante. Les éléments ${element1} et ${element2} se répondent et permettent souvent à chacun de mieux exprimer son potentiel.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Soleils associent deux éléments capables de se renforcer : le ${element1} et le ${element2}. La relation peut devenir un espace où les idées, les émotions et les projets trouvent un meilleur équilibre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre ${sign1} et ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences peuvent devenir une force lorsque chacun reconnaît la contribution particulière de l’autre.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Le Soleil en ${sign1} et celui en ${sign2} réunissent les éléments ${element1} et ${element2}, dont les qualités peuvent se renforcer mutuellement. L’un peut apporter l’impulsion ou la stabilité dont l’autre a besoin pour mieux exprimer son potentiel. Cette complémentarité favorise une relation évolutive lorsque chacun valorise les différences.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} donne à vos Soleils une dynamique naturellement constructive. Le ${sign1} et le ${sign2} n’avancent pas toujours de la même façon, mais leurs énergies peuvent collaborer efficacement. Ensemble, vous pouvez trouver un équilibre capable de soutenir vos ambitions communes.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const SUN_DIFFERENT_ELEMENT_TEXTS: CompatibilitySunTextTemplate[] = [
  ({ sign1, sign2, element1, element2 }) =>
    `Les Soleils en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos personnalités fonctionnent selon des logiques différentes, ce qui peut provoquer des incompréhensions, mais aussi enrichir profondément la relation.`,

  ({ sign1, sign2, element1, element2 }) =>
    `${sign1} exprime l’énergie du ${element1}, tandis que ${sign2} agit à travers le ${element2}. Vous ne poursuivez pas toujours vos objectifs de la même manière, mais vos différences peuvent élargir vos perspectives.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos Soleils réunissent le ${element1} et le ${element2}. Cette combinaison demande davantage d’adaptation, car chacun possède une manière particulière de s’affirmer, de décider et de trouver sa place.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Le Soleil en ${sign1} et le Soleil en ${sign2} abordent la vie selon des priorités différentes. Les éléments ${element1} et ${element2} peuvent parfois se heurter, mais ils peuvent également se compléter avec le temps.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Entre le ${sign1} et le ${sign2}, les différences élémentaires sont importantes. Le ${element1} et le ${element2} ne réagissent pas toujours aux mêmes besoins, ce qui demande écoute, patience et compréhension.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos identités solaires ne parlent pas spontanément le même langage. Pourtant, l’association du ${element1} et du ${element2} peut devenir une source de découverte et de transformation mutuelle.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Le ${sign1} et le ${sign2} avancent avec des motivations différentes. Cette diversité peut créer des tensions ponctuelles, mais elle empêche aussi la relation de devenir trop prévisible ou limitée.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Les éléments ${element1} et ${element2} donnent à vos Soleils des façons distinctes de rayonner. Votre défi consiste à respecter ces différences sans chercher à transformer l’autre selon vos propres attentes.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Le Soleil en ${sign1} et le Soleil en ${sign2} expriment les éléments ${element1} et ${element2}, qui ne recherchent pas toujours les mêmes choses au même moment. Cette différence peut créer des décalages dans vos décisions ou vos priorités. Elle devient toutefois enrichissante lorsque chacun fait l’effort de comprendre la logique intérieure de l’autre.`,

  ({ sign1, sign2, element1, element2 }) =>
    `Vos Soleils possèdent des rythmes et des motivations distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} peut privilégier une approche que le ${sign2} ne comprend pas immédiatement. Votre force réside dans votre capacité à transformer cette diversité en complémentarité, sans demander à l’autre de fonctionner exactement comme vous.`,
];
