export interface CompatibilityPlutoTextContext {
  sign1: string;
  sign2: string;
  element1: string;
  element2: string;
}

export type CompatibilityPlutoTextTemplate = (
  context: CompatibilityPlutoTextContext,
) => string;

/*
 * Pluton dans le même signe
 *
 * Exemple :
 * Pluton Scorpion + Pluton Scorpion
 */
export const PLUTO_SAME_SIGN_TEXTS: CompatibilityPlutoTextTemplate[] = [
  ({ sign1 }) =>
    `Vos deux Pluton en ${sign1} révèlent une manière très semblable de vivre l’intensité, le pouvoir et les transformations profondes. Vous comprenez instinctivement les peurs, les attachements et les réactions extrêmes de l’autre. Cette proximité peut créer une grande force, mais aussi amplifier les rapports de contrôle.`,

  ({ sign1 }) =>
    `Avec vos deux Pluton en ${sign1}, vous partagez une même façon d’affronter les crises et de traverser les changements majeurs. Vous pouvez vous soutenir dans les périodes difficiles, mais devez éviter de nourrir ensemble les mêmes obsessions ou les mêmes mécanismes de défense.`,

  ({ sign1 }) =>
    `Le partage de Pluton en ${sign1} crée une forte résonance dans votre manière de rechercher la vérité, de vous protéger et de vous transformer. Cette affinité peut donner à la relation une profondeur remarquable, à condition que chacun respecte les limites de l’autre.`,

  ({ sign1 }) =>
    `Vos Pluton en ${sign1} donnent au lien une intensité commune. Vous pouvez ressentir rapidement les zones sensibles, les désirs cachés et les peurs de l’autre. Cette proximité favorise une grande lucidité, mais peut aussi rendre les conflits plus difficiles à relâcher.`,

  ({ sign1 }) =>
    `Lorsque Pluton occupe le même signe chez deux partenaires, chacun reconnaît instinctivement les stratégies de protection et les besoins de pouvoir de l’autre. En ${sign1}, vous partagez une manière comparable de vous engager profondément et de refuser les liens superficiels.`,

  ({ sign1 }) =>
    `Vos deux Pluton en ${sign1} favorisent une relation capable de provoquer de grandes transformations personnelles. Vous pouvez vous pousser mutuellement à dépasser certaines peurs et à abandonner d’anciens schémas. Cette évolution demande toutefois beaucoup d’honnêteté.`,

  ({ sign1 }) =>
    `La présence de Pluton en ${sign1} dans vos deux thèmes crée une compréhension instinctive de vos zones de vulnérabilité. Vous savez souvent où l’autre se protège ou résiste. Cette ressemblance peut favoriser la guérison, mais aussi rendre les confrontations particulièrement intenses.`,

  ({ sign1 }) =>
    `Vous exprimez tous les deux votre besoin de transformation à travers l’énergie du ${sign1}. Cette proximité peut renforcer la loyauté, la profondeur et la capacité à renaître après une crise. Elle exige cependant que chacun renonce aux jeux de pouvoir et aux manipulations silencieuses.`,

  ({ sign1 }) =>
    `Deux Pluton en ${sign1} donnent souvent à la relation une force magnétique et difficile à ignorer. Vous pouvez vous sentir profondément liés, parfois au point de vouloir tout comprendre ou tout contrôler. Cette intensité devient constructive lorsqu’elle laisse une place réelle à la liberté individuelle.`,

  ({ sign1 }) =>
    `Le même placement de Pluton en ${sign1} vous rapproche par votre manière de gérer les pertes, les crises et les transformations. Vous pouvez former un couple très résilient. Votre équilibre dépendra toutefois de votre capacité à utiliser votre puissance commune pour évoluer plutôt que pour vous dominer.`,
];

/*
 * Pluton dans deux signes du même élément
 *
 * Exemple :
 * Pluton Scorpion + Pluton Cancer = Eau + Eau
 */
export const PLUTO_SAME_ELEMENT_TEXTS: CompatibilityPlutoTextTemplate[] = [
  ({ sign1, sign2, element1 }) =>
    `Les Pluton en ${sign1} et en ${sign2} appartiennent tous les deux à l’élément ${element1}. Vos manières de vivre l’intensité, le pouvoir et les transformations reposent donc sur une énergie commune, même si chacun l’exprime différemment.`,

  ({ sign1, sign2, element1 }) =>
    `${sign1} et ${sign2} partagent l’élément ${element1}. Cette proximité favorise une compréhension naturelle de vos besoins de profondeur, de contrôle et de renouvellement. Vous reconnaissez souvent les mécanismes de défense de l’autre.`,

  ({ sign1, sign2, element1 }) =>
    `Vos Pluton parlent le langage commun de l’élément ${element1}. Vous ne traversez pas toujours les crises de la même façon, mais vous comprenez généralement ce qui pousse l’autre à se protéger, à résister ou à se transformer.`,

  ({ sign1, sign2, element1 }) =>
    `L’élément ${element1} relie vos forces plutoniennes. Pluton en ${sign1} et Pluton en ${sign2} possèdent des expressions différentes, mais ils partagent une manière compatible de rechercher la vérité et d’affronter les changements profonds.`,

  ({ sign1, sign2, element1 }) =>
    `Entre Pluton en ${sign1} et Pluton en ${sign2}, une affinité de transformation peut s’installer naturellement grâce à l’élément ${element1}. Vous avez souvent une perception similaire de ce qui doit être dépassé ou reconstruit.`,

  ({ sign1, sign2, element1 }) =>
    `Vos deux Pluton puisent leur puissance dans l’élément ${element1}. Cette base commune facilite la compréhension des blessures profondes et des besoins de contrôle. Chacun apporte néanmoins une nuance particulière à cette intensité.`,

  ({ sign1, sign2, element1 }) =>
    `Le ${sign1} et le ${sign2} expriment deux formes distinctes d’une même énergie plutonienne, celle du ${element1}. Cette proximité vous aide à reconnaître la profondeur de l’autre et à ne pas minimiser ses réactions.`,

  ({ sign1, sign2, element1 }) =>
    `La compatibilité entre vos Pluton repose sur leur élément commun, le ${element1}. Vos façons de gérer les crises et les transformations sont souvent compatibles, ce qui peut renforcer la résilience de votre relation.`,

  ({ sign1, sign2, element1 }) =>
    `Les Pluton en ${sign1} et en ${sign2} se rejoignent à travers l’élément ${element1}. Cette affinité favorise une grande intensité émotionnelle ou psychologique, ainsi qu’une capacité à vous soutenir dans les périodes de remise en question.`,

  ({ sign1, sign2, element1 }) =>
    `Grâce à leur appartenance commune à l’élément ${element1}, vos Pluton possèdent des mécanismes de transformation compatibles. Le ${sign1} et le ${sign2} ne cherchent pas exactement le même type de pouvoir, mais ils comprennent généralement les peurs fondamentales de l’autre.`,
];

/*
 * Éléments complémentaires
 *
 * Feu + Air
 * Terre + Eau
 */
export const PLUTO_COMPLEMENTARY_ELEMENT_TEXTS: CompatibilityPlutoTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Pluton en ${sign1} et en ${sign2} associent les éléments ${element1} et ${element2}. Ces deux manières de vivre la transformation peuvent naturellement se soutenir et créer un équilibre entre intensité, lucidité, action et reconstruction.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} traverse les crises à travers le ${element1}, tandis que ${sign2} mobilise sa puissance selon le ${element2}. Cette complémentarité peut vous aider à transformer les périodes difficiles en occasions réelles d’évolution.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Pluton fonctionnent selon des styles différents, mais les éléments ${element1} et ${element2} peuvent se nourrir mutuellement. L’un apporte l’impulsion du changement, tandis que l’autre lui donne une profondeur, une stabilité ou une direction.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre Pluton en ${sign1} et Pluton en ${sign2}, les éléments ${element1} et ${element2} forment une association favorable à la transformation. Vos réactions face aux crises ne sont pas identiques, mais elles peuvent se compléter efficacement.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Votre duo plutonien réunit le ${element1} et le ${element2}. Cette combinaison crée un équilibre intéressant entre vos façons de gérer le pouvoir, les peurs, les pertes et les changements profonds.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Pluton en ${sign1} et Pluton en ${sign2} peuvent développer une dynamique très transformatrice. Les éléments ${element1} et ${element2} se répondent et vous permettent d’affronter ensemble des situations qui auraient été plus difficiles séparément.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Pluton associent deux éléments capables de se renforcer : le ${element1} et le ${element2}. L’un peut provoquer une prise de conscience, tandis que l’autre aide à reconstruire, à intégrer ou à approfondir ce changement.`,

    ({ sign1, sign2, element1, element2 }) =>
      `La complémentarité entre Pluton en ${sign1} et Pluton en ${sign2} repose sur l’alliance du ${element1} et du ${element2}. Vos différences deviennent une force lorsque chacun respecte la manière dont l’autre affronte la peur et le changement.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Pluton des qualités qui peuvent s’équilibrer dans les périodes intenses. Le ${sign1} peut provoquer une transformation que le ${sign2} aide à stabiliser, comprendre ou rendre durable.`,

    ({ sign1, sign2, element1, element2 }) =>
      `L’association du ${element1} et du ${element2} favorise une dynamique où puissance et transformation peuvent s’exprimer sans devenir destructrices. Pluton en ${sign1} et Pluton en ${sign2} deviennent particulièrement compatibles lorsque vous choisissez l’évolution plutôt que le contrôle.`,
  ];

/*
 * Éléments fonctionnant selon des logiques différentes
 *
 * Exemple :
 * Feu + Eau
 * Air + Terre
 */
export const PLUTO_DIFFERENT_ELEMENT_TEXTS: CompatibilityPlutoTextTemplate[] =
  [
    ({ sign1, sign2, element1, element2 }) =>
      `Les Pluton en ${sign1} et en ${sign2} appartiennent aux éléments ${element1} et ${element2}. Vos façons de vivre le pouvoir, les crises et les transformations suivent des logiques différentes, ce qui peut créer des tensions difficiles à exprimer clairement.`,

    ({ sign1, sign2, element1, element2 }) =>
      `${sign1} affronte les changements à travers le ${element1}, tandis que ${sign2} cherche à se protéger selon le ${element2}. Vous ne réagissez pas toujours de la même façon face à la perte de contrôle ou à l’incertitude.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos Pluton réunissent le ${element1} et le ${element2}. Cette combinaison demande une certaine adaptation, car chacun possède sa propre manière de gérer la peur, l’attachement, le pouvoir et les transformations profondes.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Pluton en ${sign1} et Pluton en ${sign2} abordent les crises selon des réactions distinctes. Les éléments ${element1} et ${element2} peuvent provoquer des affrontements, mais ils peuvent aussi révéler des forces que chacun n’aurait pas développées seul.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Entre le ${sign1} et le ${sign2}, les besoins de contrôle peuvent prendre des formes très différentes. Le ${element1} et le ${element2} ne réagissent pas de la même façon face à la vulnérabilité, à la dépendance ou au changement.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos façons de gérer l’intensité ne parlent pas spontanément le même langage. Pluton lié au ${element1} peut provoquer une réaction que Pluton associé au ${element2} perçoit comme trop brutale, trop silencieuse, trop rationnelle ou trop émotionnelle.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Pluton en ${sign1} et Pluton en ${sign2} possèdent des mécanismes de défense distincts. Cette différence entre le ${element1} et le ${element2} peut créer une impression de menace ou de fermeture lorsque les tensions ne sont pas nommées.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Les éléments ${element1} et ${element2} donnent à vos Pluton des besoins différents en matière de pouvoir, de profondeur et de transformation. Votre défi consiste à ne pas utiliser les faiblesses de l’autre comme moyen de pression.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Pluton en ${sign1} peut rechercher une transformation que Pluton en ${sign2} ne se sent pas prêt à vivre. Cette différence entre le ${element1} et le ${element2} demande du temps, de la transparence et un profond respect des limites.`,

    ({ sign1, sign2, element1, element2 }) =>
      `Vos chemins de transformation suivent des rythmes distincts en raison de l’association du ${element1} et du ${element2}. Le ${sign1} et le ${sign2} peuvent néanmoins construire une relation très puissante lorsqu’ils choisissent la confiance plutôt que le contrôle.`,
  ];
