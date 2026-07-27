import type {
  CompatibilityAspect,
} from "../CompatibilityPdfTypes";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AspectType =
  CompatibilityAspect["type"];

type AspectInterpretationMap = Record<
  string,
  string
>;

/*
|--------------------------------------------------------------------------
| Normalisation
|--------------------------------------------------------------------------
*/

function normalizeValue(
  value: unknown,
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

/*
|--------------------------------------------------------------------------
| Noms canoniques des planètes
|--------------------------------------------------------------------------
|
| Cela permet de reconnaître autant :
|
| Sun / Soleil
| Moon / Lune
| Mercury / Mercure
| Venus / Vénus
| Mars
| Jupiter
| Saturn / Saturne
| Uranus
| Neptune
| Pluto / Pluton
|
*/

function normalizePlanet(
  planet: string,
): string {
  const normalized =
    normalizeValue(planet);

  const aliases: Record<
    string,
    string
  > = {
    sun: "sun",
    soleil: "sun",

    moon: "moon",
    lune: "moon",

    mercury: "mercury",
    mercure: "mercury",

    venus: "venus",

    mars: "mars",

    jupiter: "jupiter",

    saturn: "saturn",
    saturne: "saturn",

    uranus: "uranus",

    neptune: "neptune",

    pluto: "pluto",
    pluton: "pluto",
  };

  return (
    aliases[normalized] ??
    normalized
  );
}

/*
|--------------------------------------------------------------------------
| Clé unique
|--------------------------------------------------------------------------
|
| L’ordre des planètes est normalisé.
|
| Mars carré Saturne
| Saturne carré Mars
|
| utiliseront donc la même interprétation.
|
*/

function createAspectKey(
  planet1: string,
  aspect: AspectType,
  planet2: string,
): string {
  const planets = [
    normalizePlanet(planet1),
    normalizePlanet(planet2),
  ].sort();

  return [
    planets[0],
    normalizeValue(aspect),
    planets[1],
  ].join("-");
}

/*
|--------------------------------------------------------------------------
| Interprétations personnalisées
|--------------------------------------------------------------------------
|
| Chaque clé représente :
|
| planète 1 + type d’aspect + planète 2
|
| Les planètes sont placées automatiquement
| dans un ordre alphabétique constant.
|
*/

const ASPECT_INTERPRETATIONS:
  AspectInterpretationMap = {
  /*
  |--------------------------------------------------------------------------
  | Soleil
  |--------------------------------------------------------------------------
  */

  "moon-conjunction-sun":
    "Le Soleil et la Lune unissent ici la volonté et les émotions. Cette conjonction crée une forte impression de familiarité, comme si chacun reconnaissait instinctivement les besoins essentiels de l’autre.",

  "moon-trine-sun":
    "L’expression personnelle de l’un soutient naturellement la sensibilité de l’autre. Cette harmonie favorise la compréhension, la sécurité émotionnelle et le sentiment de pouvoir avancer ensemble.",

  "moon-sextile-sun":
    "La volonté de l’un et les émotions de l’autre peuvent facilement coopérer. Cette relation favorise les encouragements, la confiance et une belle capacité à se soutenir au quotidien.",

  "moon-square-sun":
    "Les besoins émotionnels de l’un peuvent parfois entrer en tension avec la manière dont l’autre affirme son identité. Cette dynamique demande d’éviter de considérer les réactions sensibles comme un obstacle à l’expression personnelle.",

  "moon-opposition-sun":
    "L’expression consciente de l’un peut entrer en contraste avec les réactions émotionnelles de l’autre. Cette polarité invite le couple à concilier affirmation personnelle et sécurité affective.",

  "mercury-conjunction-sun":
    "La pensée et l’identité se rencontrent directement. Les échanges peuvent être nombreux, stimulants et très personnels, à condition de laisser chacun exprimer son point de vue sans se sentir constamment analysé.",

  "mercury-trine-sun":
    "Les idées de l’un soutiennent naturellement l’expression et les projets de l’autre. Les conversations peuvent être stimulantes, constructives et valorisantes.",

  "mercury-sextile-sun":
    "La communication aide chacun à mieux comprendre la personnalité et les intentions de l’autre. Cette interaction facilite les décisions communes et la résolution des désaccords.",

  "mercury-square-sun":
    "Les idées de l’un peuvent parfois sembler contredire ou remettre en question l’identité de l’autre. Le couple gagne à distinguer la discussion intellectuelle de la critique personnelle.",

  "mercury-opposition-sun":
    "Les façons de penser et de s’affirmer peuvent suivre des directions opposées. Cette polarité devient enrichissante lorsque chacun accepte d’écouter sans chercher immédiatement à convaincre.",

  "sun-conjunction-venus":
    "L’identité et la manière d’aimer se rencontrent avec chaleur. Cette conjonction renforce l’attirance, l’admiration et le plaisir d’être ensemble, tout en encourageant chacun à se sentir apprécié.",

  "sun-trine-venus":
    "L’affection circule naturellement et soutient la confiance personnelle. Cette harmonie favorise la tendresse, l’admiration mutuelle et une atmosphère relationnelle agréable.",

  "sun-sextile-venus":
    "La relation bénéficie d’une belle facilité à exprimer l’affection et la reconnaissance. Chacun peut aider l’autre à se sentir valorisé, aimé et encouragé.",

  "sun-square-venus":
    "Les besoins de reconnaissance et les attentes affectives ne s’accordent pas toujours spontanément. Cette tension demande de ne pas confondre amour, approbation et besoin d’être constamment rassuré.",

  "sun-opposition-venus":
    "L’identité de l’un et la manière d’aimer de l’autre peuvent parfois tirer la relation dans deux directions différentes. L’attirance demeure présente, mais l’équilibre demande de respecter autant le besoin de reconnaissance que les attentes affectives.",

  "mars-conjunction-sun":
    "La volonté et l’action se renforcent puissamment. Cette conjonction apporte de l’élan, du désir et une forte capacité à agir ensemble, mais elle peut aussi amplifier la compétition ou l’impatience.",

  "mars-trine-sun":
    "L’énergie et la volonté circulent avec fluidité. Chacun peut stimuler le courage, l’initiative et la confiance de l’autre sans provoquer inutilement de confrontation.",

  "mars-sextile-sun":
    "Cette interaction favorise l’action, l’enthousiasme et la capacité de passer rapidement des intentions aux projets concrets. Le couple peut se motiver efficacement.",

  "mars-square-sun":
    "La volonté et l’action peuvent entrer rapidement en compétition. Cette tension crée beaucoup d’énergie, mais demande d’éviter les luttes d’ego et les réactions trop impulsives.",

  "mars-opposition-sun":
    "L’élan de l’un peut s’opposer directement à la volonté de l’autre. Cette polarité crée une forte stimulation, mais elle exige de partager l’initiative plutôt que de chercher à dominer.",

  "jupiter-conjunction-sun":
    "Cette conjonction apporte confiance, générosité et désir de croissance. Les partenaires peuvent s’encourager à voir plus grand, à condition de rester attentifs aux excès et aux promesses irréalistes.",

  "jupiter-trine-sun":
    "L’optimisme et la confiance soutiennent naturellement l’expression personnelle. Cette harmonie favorise les projets communs, l’encouragement et le sentiment que la relation ouvre de nouvelles possibilités.",

  "jupiter-sextile-sun":
    "Cette interaction stimule l’ambition, l’ouverture et la confiance mutuelle. Chacun peut aider l’autre à développer ses talents et à saisir de nouvelles occasions.",

  "jupiter-square-sun":
    "L’enthousiasme peut devenir excessif ou pousser l’un à promettre davantage qu’il ne peut offrir. Cette tension demande de concilier ambition, réalisme et respect des limites.",

  "jupiter-opposition-sun":
    "Le désir d’expansion de l’un peut parfois dépasser le rythme ou les priorités de l’autre. Cette polarité invite à construire des projets ambitieux sans perdre de vue les besoins individuels.",

  "saturn-conjunction-sun":
    "La relation peut apporter structure, sérieux et sens des responsabilités. Cette conjonction favorise la construction à long terme, mais elle demande d’éviter que l’un se transforme en juge ou en autorité pour l’autre.",

  "saturn-trine-sun":
    "La stabilité et la confiance personnelle se soutiennent mutuellement. Cette harmonie favorise la fidélité, la persévérance et la capacité de bâtir des projets durables.",

  "saturn-sextile-sun":
    "Cette interaction aide le couple à transformer ses intentions en engagements concrets. La relation gagne en solidité grâce à la patience, au respect et à une organisation réaliste.",

  "saturn-square-sun":
    "L’expression personnelle peut parfois se sentir freinée, jugée ou limitée. Cette tension demande d’établir des responsabilités justes sans diminuer la confiance ni l’autonomie de l’autre.",

  "saturn-opposition-sun":
    "Le besoin d’affirmation rencontre ici la prudence, les règles ou les exigences de l’autre. Cette opposition peut renforcer la maturité du couple, à condition d’éviter les rapports d’autorité.",

  "sun-conjunction-uranus":
    "Cette conjonction apporte originalité, surprise et besoin de liberté. Le lien peut être particulièrement stimulant, mais il demande de préserver une place suffisante pour l’indépendance de chacun.",

  "sun-trine-uranus":
    "L’individualité et le changement s’accordent avec naturel. Cette harmonie favorise une relation vivante, ouverte et capable d’évoluer sans menacer l’identité de chacun.",

  "sun-sextile-uranus":
    "La relation encourage l’innovation, l’autonomie et l’ouverture à de nouvelles expériences. Chacun peut aider l’autre à sortir de ses habitudes avec confiance.",

  "sun-square-uranus":
    "Le besoin de liberté peut perturber la stabilité ou la confiance de l’autre. Cette tension demande d’éviter les ruptures impulsives, les provocations et les changements imposés.",

  "sun-opposition-uranus":
    "L’identité de l’un peut se sentir déstabilisée par l’imprévisibilité ou le besoin d’indépendance de l’autre. Cette polarité exige de créer un équilibre entre engagement et liberté.",

  "neptune-conjunction-sun":
    "La relation peut entourer l’identité d’une grande sensibilité, d’inspiration et d’idéalisation. Cette conjonction favorise la compassion, mais demande de voir l’autre tel qu’il est réellement.",

  "neptune-trine-sun":
    "L’intuition et l’identité s’accordent avec douceur. Cette harmonie favorise l’empathie, la créativité et une compréhension subtile des aspirations de chacun.",

  "neptune-sextile-sun":
    "Cette interaction apporte imagination, sensibilité et soutien intuitif. Chacun peut encourager les rêves de l’autre tout en les aidant à prendre une forme concrète.",

  "neptune-square-sun":
    "L’identité, les intentions ou les attentes peuvent manquer de clarté. Cette tension demande d’éviter les projections, les promesses vagues et les rôles de sauveur ou de victime.",

  "neptune-opposition-sun":
    "Les attentes idéalisées peuvent entrer en contraste avec la réalité de la personnalité de l’autre. Cette opposition invite à préserver la sensibilité tout en clarifiant les intentions.",

  "pluto-conjunction-sun":
    "Cette conjonction crée une influence profonde et transformatrice. La relation peut révéler une grande force intérieure, mais elle doit éviter les tentatives de contrôle ou de redéfinition de l’autre.",

  "pluto-trine-sun":
    "Cette harmonie favorise une profonde évolution personnelle. Chacun encourage l’autre à révéler son potentiel sans chercher à le contrôler.",

  "pluto-sextile-sun":
    "La relation peut soutenir les transformations importantes avec courage et lucidité. Chacun aide l’autre à dépasser certaines peurs et à développer davantage de confiance.",

  "pluto-square-sun":
    "Les questions de pouvoir, d’autorité ou de contrôle peuvent provoquer des affrontements intenses. Cette tension demande de respecter l’identité de chacun et d’éviter les rapports de force.",

  "pluto-opposition-sun":
    "La relation peut provoquer une profonde transformation de l’identité et de la volonté de chacun. Cette opposition devient difficile lorsque l’un tente de contrôler, corriger ou redéfinir l’autre.",

  /*
  |--------------------------------------------------------------------------
  | Lune
  |--------------------------------------------------------------------------
  */

  "mercury-conjunction-moon":
    "Les pensées et les émotions se rencontrent directement. Cette conjonction favorise les confidences et la compréhension, mais elle peut aussi rendre les paroles particulièrement sensibles.",

  "mercury-trine-moon":
    "Les émotions trouvent facilement les mots pour s’exprimer. Cette harmonie favorise l’écoute, l’empathie et la résolution des malentendus.",

  "mercury-sextile-moon":
    "La communication émotionnelle est facilitée. Chacun peut expliquer ce qu’il ressent et recevoir une réponse attentive, nuancée et rassurante.",

  "mercury-square-moon":
    "Les paroles de l’un peuvent parfois heurter involontairement la sensibilité de l’autre. Cette tension demande de ralentir les échanges et de vérifier ce qui a réellement été compris.",

  "mercury-opposition-moon":
    "La logique de l’un peut entrer en contraste avec les réactions émotionnelles de l’autre. Cette opposition invite à accorder autant de valeur aux faits qu’aux ressentis.",

  "moon-conjunction-venus":
    "Les besoins émotionnels et la manière d’aimer se rencontrent avec douceur. Cette conjonction renforce la tendresse, la complicité et le plaisir de prendre soin l’un de l’autre.",

  "moon-trine-venus":
    "Les besoins émotionnels et la manière d’offrir de l’affection s’accordent naturellement. Cette harmonie favorise la douceur, la tendresse et le sentiment d’être aimé comme on en a besoin.",

  "moon-sextile-venus":
    "L’affection aide à sécuriser les émotions et à créer une atmosphère chaleureuse. Chacun peut facilement trouver les gestes qui rassurent et rapprochent.",

  "moon-square-venus":
    "Les besoins affectifs et émotionnels ne se manifestent pas toujours de la même façon. Cette tension demande d’apprendre le langage amoureux de l’autre sans minimiser ses attentes.",

  "moon-opposition-venus":
    "La manière d’offrir de l’affection ne répond pas toujours exactement au besoin émotionnel de l’autre. Une meilleure compréhension des langages amoureux peut transformer cette différence en complémentarité.",

  "mars-conjunction-moon":
    "Les émotions et les réactions immédiates sont fortement stimulées. Cette conjonction crée une grande intensité et une attraction vive, mais elle demande de maîtriser l’impulsivité.",

  "mars-trine-moon":
    "L’action soutient naturellement les besoins émotionnels. Cette harmonie favorise la protection, la confiance et la capacité de réagir ensemble face aux difficultés.",

  "mars-sextile-moon":
    "Cette interaction aide à transformer les émotions en actions constructives. Chacun peut encourager l’autre à exprimer ses besoins et à défendre ce qui lui tient à cœur.",

  "mars-square-moon":
    "Les réactions spontanées de l’un peuvent toucher directement la sensibilité de l’autre. Cette tension demande de ralentir lorsque l’émotion monte afin d’éviter que l’impulsivité ne fragilise la sécurité affective.",

  "mars-opposition-moon":
    "L’action de l’un peut sembler brusque ou envahissante pour la sensibilité de l’autre. Cette polarité demande de respecter le rythme émotionnel avant de chercher à résoudre ou à imposer une direction.",

  "jupiter-conjunction-moon":
    "Cette conjonction amplifie la chaleur, la générosité et le besoin de partager. Elle favorise un climat émotionnel optimiste, tout en demandant d’éviter les promesses ou les réactions excessives.",

  "jupiter-trine-moon":
    "La sécurité émotionnelle et l’optimisme se renforcent mutuellement. Cette harmonie favorise la confiance, la générosité et le plaisir de construire un environnement accueillant.",

  "jupiter-sextile-moon":
    "Cette interaction aide chacun à se sentir soutenu et encouragé. Les émotions peuvent être accueillies avec bienveillance et replacées dans une perspective plus positive.",

  "jupiter-square-moon":
    "Les émotions peuvent être amplifiées ou dramatisées. Cette tension demande d’éviter les excès, les attentes irréalistes et la tendance à promettre plus de réconfort qu’il n’est possible d’en offrir.",

  "jupiter-opposition-moon":
    "Le besoin de sécurité peut entrer en contraste avec le désir d’expansion ou d’aventure. Cette polarité invite à concilier confort émotionnel et ouverture à de nouvelles expériences.",

  "moon-conjunction-saturn":
    "Les émotions rencontrent ici la stabilité, le sérieux et le sens des responsabilités. Cette conjonction peut créer un lien durable, mais elle demande d’exprimer la tendresse sans retenue excessive.",

  "moon-trine-saturn":
    "La sensibilité et la stabilité s’accordent naturellement. Cette harmonie favorise la confiance, la fidélité et la capacité à rester présents l’un pour l’autre dans les périodes difficiles.",

  "moon-sextile-saturn":
    "Cette interaction apporte un soutien émotionnel fiable et concret. Chacun peut aider l’autre à se sentir sécurisé par des gestes constants et des engagements réalistes.",

  "moon-square-saturn":
    "Les émotions peuvent parfois rencontrer de la retenue, de la distance ou un sentiment de jugement. La relation gagne en solidité lorsque chacun apprend à rassurer sans minimiser la sensibilité de l’autre.",

  "moon-opposition-saturn":
    "Le besoin d’affection peut se heurter à la prudence ou à la réserve de l’autre. Cette opposition demande de construire la sécurité sans transformer la responsabilité en froideur.",

  "moon-conjunction-uranus":
    "Les émotions sont stimulées par la nouveauté, l’imprévu et le besoin de liberté. Cette conjonction rend le lien vivant, mais elle demande de créer des repères suffisamment souples et rassurants.",

  "moon-trine-uranus":
    "La sensibilité et l’indépendance se complètent avec naturel. Cette harmonie favorise une relation émotionnellement vivante, ouverte et capable de s’adapter.",

  "moon-sextile-uranus":
    "Cette interaction apporte fraîcheur, spontanéité et ouverture émotionnelle. Chacun peut aider l’autre à exprimer ses besoins d’une manière plus libre et originale.",

  "moon-square-uranus":
    "Le besoin de sécurité émotionnelle peut être déstabilisé par des changements soudains, de la distance ou des réactions imprévisibles. Le couple gagne à créer des repères flexibles mais fiables.",

  "moon-opposition-uranus":
    "La stabilité émotionnelle peut entrer en conflit avec le besoin de liberté ou de changement. Cette opposition demande d’éviter les ruptures impulsives et les réactions imprévisibles.",

  "moon-conjunction-neptune":
    "Cette conjonction crée une grande sensibilité intuitive et une profonde réceptivité émotionnelle. Elle favorise la compassion, mais demande de distinguer les émotions réelles des projections.",

  "moon-trine-neptune":
    "La sensibilité, l’intuition et l’imagination créent un lien émotionnel profond. Vous pouvez ressentir les émotions de l’autre avec beaucoup de finesse.",

  "moon-sextile-neptune":
    "Cette interaction favorise l’empathie, la douceur et l’écoute intuitive. Chacun peut offrir un refuge émotionnel inspirant, à condition de rester clair dans ses attentes.",

  "moon-square-neptune":
    "Les émotions peuvent devenir confuses, idéalisées ou difficiles à nommer. Cette tension demande de vérifier les perceptions et d’éviter les suppositions.",

  "moon-opposition-neptune":
    "La sensibilité est profonde, mais les émotions peuvent être influencées par l’idéalisation, la peur ou les projections. Cette opposition demande de vérifier ce qui est réellement ressenti et ce qui est imaginé.",

  "moon-conjunction-pluto":
    "Cette conjonction intensifie profondément les émotions et l’attachement. Elle peut créer une grande intimité, mais aussi réveiller des peurs d’abandon, de perte ou de contrôle.",

  "moon-trine-pluto":
    "Les émotions profondes peuvent être accueillies avec courage et authenticité. Cette harmonie favorise la confiance, la guérison et une intimité transformatrice.",

  "moon-sextile-pluto":
    "Cette interaction aide chacun à comprendre les besoins émotionnels cachés de l’autre. La relation peut devenir un espace de soutien, de transformation et de vérité.",

  "moon-square-pluto":
    "Les émotions peuvent devenir intenses, possessives ou difficiles à apaiser. Cette tension demande d’éviter la pression, les ultimatums et les jeux de pouvoir affectifs.",

  "moon-opposition-pluto":
    "Les émotions peuvent devenir très intenses et réveiller des peurs profondes d’abandon, de perte ou de contrôle. Cette opposition demande de créer une sécurité fondée sur la confiance plutôt que sur la pression.",

  /*
  |--------------------------------------------------------------------------
  | Mercure
  |--------------------------------------------------------------------------
  */

  "mercury-conjunction-venus":
    "Les pensées et les sentiments s’expriment avec charme et délicatesse. Cette conjonction favorise les paroles affectueuses, la diplomatie et le plaisir de partager des intérêts communs.",

  "mercury-trine-venus":
    "La communication et l’affection circulent avec naturel. Cette harmonie aide à exprimer les sentiments, à résoudre les désaccords avec tact et à maintenir une atmosphère agréable.",

  "mercury-sextile-venus":
    "Cette interaction facilite les compliments, les confidences et les échanges tendres. Chacun peut trouver les mots qui rapprochent et rassurent.",

  "mercury-square-venus":
    "Les paroles et les attentes affectives peuvent parfois se décaler. Cette tension demande d’éviter les messages ambigus, les critiques indirectes et les silences utilisés pour obtenir une réaction.",

  "mercury-opposition-venus":
    "La manière de penser de l’un peut entrer en contraste avec la façon d’aimer de l’autre. Cette opposition invite à communiquer les besoins affectifs clairement plutôt que de les laisser être devinés.",

  "mars-conjunction-mercury":
    "Les idées et les réactions sont rapides, directes et stimulantes. Cette conjonction favorise les débats passionnés, mais demande d’éviter les mots impulsifs ou blessants.",

  "mars-trine-mercury":
    "La pensée et l’action se coordonnent facilement. Cette harmonie favorise les décisions rapides, les projets communs et une communication franche sans agressivité inutile.",

  "mars-sextile-mercury":
    "Cette interaction aide à transformer les idées en actions concrètes. Les échanges peuvent être dynamiques, motivants et orientés vers des solutions.",

  "mars-square-mercury":
    "Les discussions peuvent rapidement devenir compétitives ou agressives. Cette tension demande de ralentir, d’écouter réellement et de ne pas utiliser les mots comme des armes.",

  "mars-opposition-mercury":
    "Les échanges peuvent rapidement devenir vifs lorsque les idées de l’un rencontrent les réactions immédiates de l’autre. Cette opposition demande de distinguer le désaccord intellectuel de l’attaque personnelle.",

  "mars-quincunx-mercury":
    "Les idées et les actions ne suivent pas toujours le même rythme. En faisant preuve de souplesse et d’écoute, chacun peut mieux comprendre la façon de réfléchir et de réagir de l’autre.",

  "jupiter-conjunction-mercury":
    "Cette conjonction amplifie les idées, la curiosité et le désir d’apprendre ensemble. Les conversations peuvent être inspirantes, à condition d’éviter les exagérations et les certitudes excessives.",

  "jupiter-trine-mercury":
    "La communication bénéficie d’optimisme, d’ouverture et de confiance. Cette harmonie favorise les projets, les voyages, les apprentissages et les discussions constructives.",

  "jupiter-sextile-mercury":
    "Cette interaction stimule la curiosité et la capacité de voir les situations avec davantage de recul. Chacun peut encourager les idées et les projets de l’autre.",

  "jupiter-square-mercury":
    "Les idées peuvent devenir trop vastes, trop nombreuses ou insuffisamment réalistes. Cette tension demande de vérifier les faits et de transformer l’enthousiasme en plan concret.",

  "jupiter-opposition-mercury":
    "Les détails et la vision d’ensemble peuvent entrer en conflit. Cette opposition invite à concilier précision, ouverture d’esprit et réalisme dans les décisions communes.",

  "mercury-conjunction-saturn":
    "La communication devient sérieuse, structurée et attentive aux responsabilités. Cette conjonction favorise les décisions solides, mais demande d’éviter les critiques constantes ou la peur de parler.",

  "mercury-trine-saturn":
    "La pensée et la discipline s’accordent naturellement. Cette harmonie favorise les conversations réfléchies, les plans réalistes et la capacité à résoudre les problèmes avec maturité.",

  "mercury-sextile-saturn":
    "Cette interaction aide à organiser les idées et à prendre des décisions responsables. Chacun peut apporter à l’autre clarté, patience et sens pratique.",

  "mercury-square-saturn":
    "La communication peut parfois sembler freinée, critiquée ou trop contrôlée. Le couple doit créer un espace où chacun peut exprimer ses idées sans craindre d’être immédiatement corrigé ou jugé.",

  "mercury-opposition-saturn":
    "Les paroles de l’un peuvent rencontrer la réserve, le doute ou le jugement de l’autre. Cette opposition demande de remplacer la critique automatique par une écoute constructive.",

  "mercury-conjunction-uranus":
    "Cette conjonction stimule fortement les idées, la curiosité et l’originalité. Les échanges peuvent être brillants et imprévisibles, mais parfois difficiles à suivre ou à stabiliser.",

  "mercury-trine-uranus":
    "Vos échanges stimulent la curiosité et l’ouverture d’esprit. Ensemble, vous trouvez facilement des idées nouvelles et des solutions originales.",

  "mercury-sextile-uranus":
    "Cette interaction favorise les discussions inventives, l’humour et l’ouverture à des perspectives nouvelles. Chacun encourage la liberté de pensée de l’autre.",

  "mercury-square-uranus":
    "Les échanges peuvent devenir brusques, nerveux ou imprévisibles. Cette tension demande de respecter les opinions différentes sans interrompre, provoquer ou imposer un changement immédiat.",

  "mercury-opposition-uranus":
    "La logique de l’un peut être déstabilisée par les idées inattendues ou radicales de l’autre. Cette opposition devient enrichissante lorsque la liberté de pensée reste compatible avec le respect.",

  "mercury-conjunction-neptune":
    "La pensée et l’intuition se rencontrent avec sensibilité. Cette conjonction favorise l’imagination et les confidences, mais demande de clarifier les faits et les intentions.",

  "mercury-trine-neptune":
    "L’intuition et la communication s’accordent avec douceur. Cette harmonie favorise l’empathie, la créativité et la capacité de comprendre ce qui n’est pas toujours exprimé directement.",

  "mercury-sextile-neptune":
    "Cette interaction apporte finesse, imagination et écoute intuitive. Chacun peut aider l’autre à exprimer des émotions ou des idées difficiles à formuler.",

  "mercury-square-neptune":
    "Les mots, les perceptions et les intentions peuvent manquer de clarté. Cette tension invite à vérifier les faits, à reformuler et à éviter les suppositions.",

  "mercury-opposition-neptune":
    "Les mots, les perceptions et les intentions peuvent manquer de clarté. Cette opposition invite à vérifier les faits et à reformuler les attentes afin d’éviter les malentendus ou les suppositions.",

  "mercury-conjunction-pluto":
    "Les échanges peuvent devenir profonds, révélateurs et transformateurs. Cette conjonction favorise les confidences, mais demande d’éviter les interrogatoires et la pression psychologique.",

  "mercury-trine-pluto":
    "La communication peut atteindre une grande profondeur sans perdre sa fluidité. Cette harmonie favorise l’honnêteté, la lucidité et la capacité à parler des sujets difficiles.",

  "mercury-sextile-pluto":
    "Cette interaction aide à comprendre les motivations cachées et à transformer les problèmes par un dialogue sincère. Chacun peut encourager l’autre à exprimer sa vérité.",

  "mercury-square-pluto":
    "Les conversations peuvent devenir intenses, insistantes ou chargées de sous-entendus. Cette tension demande d’éviter la manipulation, les interrogatoires et le besoin d’avoir le dernier mot.",

  "mercury-opposition-pluto":
    "Les échanges peuvent révéler des vérités profondes, mais aussi devenir insistants ou chargés de suspicion. Cette opposition demande de communiquer sans utiliser les mots comme un moyen de pression.",

  /*
  |--------------------------------------------------------------------------
  | Vénus et Mars
  |--------------------------------------------------------------------------
  */

  "mars-conjunction-venus":
    "L’affection et le désir se rencontrent avec intensité. Cette conjonction favorise une forte attraction, une grande créativité relationnelle et un besoin marqué de proximité.",

  "mars-trine-venus":
    "Le désir, l’affection et l’attirance se complètent avec naturel. Cette harmonie favorise une vie affective et intime épanouissante.",

  "mars-sextile-venus":
    "Cette interaction crée une belle coopération entre tendresse et désir. Chacun peut exprimer son affection et son attirance d’une manière naturelle et respectueuse.",

  "mars-square-venus":
    "L’attirance peut être forte, mais les rythmes du désir et les attentes affectives ne s’accordent pas toujours spontanément. Cette tension devient stimulante lorsque chacun respecte les limites et les besoins de l’autre.",

  "mars-opposition-venus":
    "L’attirance est vive, mais les besoins affectifs et sexuels peuvent fonctionner en polarité. Cette opposition demande d’éviter les jeux de séduction, de poursuite ou de retrait utilisés pour contrôler le lien.",

  "jupiter-conjunction-venus":
    "Cette conjonction apporte chaleur, générosité et plaisir partagé. Elle favorise la joie, les projets et l’affection, tout en demandant de rester attentif aux excès ou aux dépenses impulsives.",

  "jupiter-trine-venus":
    "Cette interaction apporte chaleur, générosité et optimisme dans la relation. Les partenaires peuvent facilement s’encourager, partager du plaisir et développer des projets communs.",

  "jupiter-sextile-venus":
    "L’affection et l’optimisme se renforcent mutuellement. Cette interaction favorise la générosité, les plaisirs partagés et une vision positive de l’avenir.",

  "jupiter-square-venus":
    "Les plaisirs, les attentes affectives ou les dépenses peuvent devenir excessifs. Cette tension demande de concilier générosité, réalisme et respect des limites.",

  "jupiter-opposition-venus":
    "Le désir de plaisir et d’expansion peut dépasser les besoins réels de la relation. Cette opposition invite à trouver un équilibre entre abondance, fidélité aux valeurs et modération.",

  "saturn-conjunction-venus":
    "L’amour rencontre ici la loyauté, la responsabilité et le désir de construire. Cette conjonction favorise les engagements durables, mais elle demande d’éviter la froideur ou la peur de montrer ses sentiments.",

  "saturn-trine-venus":
    "L’affection peut s’appuyer sur la loyauté, la constance et un véritable désir de construire. Cette harmonie favorise les engagements durables et la sécurité relationnelle.",

  "saturn-sextile-venus":
    "Cette interaction renforce la confiance par des gestes constants et réalistes. La relation peut évoluer lentement, mais sur des bases solides et fiables.",

  "saturn-square-venus":
    "L’affection peut parfois sembler freinée par la peur, la distance, les responsabilités ou un manque de spontanéité. La sécurité se construit par des gestes constants plutôt que par des preuves imposées.",

  "saturn-opposition-venus":
    "Le besoin d’amour peut rencontrer de la réserve, des limites ou un sentiment de distance. Cette opposition demande de construire la confiance sans transformer l’engagement en obligation.",

  "uranus-conjunction-venus":
    "L’attirance peut être immédiate, originale et électrisante. Cette conjonction favorise la nouveauté, mais elle demande de ne pas confondre intensité du début et stabilité à long terme.",

  "uranus-trine-venus":
    "L’affection et la liberté se complètent avec naturel. Cette harmonie favorise une relation vivante, originale et respectueuse de l’individualité de chacun.",

  "uranus-sextile-venus":
    "Cette interaction apporte fraîcheur, spontanéité et ouverture dans la vie affective. Chacun peut encourager l’autre à aimer d’une manière plus libre et authentique.",

  "uranus-square-venus":
    "Les besoins de liberté et de sécurité affective peuvent entrer en tension. Cette dynamique demande d’éviter les rapprochements et les retraits soudains qui déstabilisent la confiance.",

  "uranus-opposition-venus":
    "L’attirance peut être vive et stimulante, mais le besoin de liberté peut entrer en conflit avec le désir de proximité. Cette opposition demande d’éviter autant l’étouffement que la fuite.",

  "neptune-conjunction-venus":
    "Cette conjonction enveloppe la relation de romantisme, de sensibilité et d’idéalisation. Elle favorise la tendresse, mais demande de ne pas ignorer les réalités concrètes du lien.",

  "neptune-trine-venus":
    "L’amour, la compassion et l’imagination s’accordent avec douceur. Cette harmonie favorise un lien romantique, inspirant et profondément empathique.",

  "neptune-sextile-venus":
    "Cette interaction apporte délicatesse, créativité et sensibilité dans la manière d’aimer. Chacun peut encourager les rêves de l’autre sans perdre le contact avec la réalité.",

  "neptune-square-venus":
    "Les attentes amoureuses peuvent devenir floues ou idéalisées. Cette tension invite à exprimer clairement les besoins afin que la tendresse repose sur une réalité partagée.",

  "neptune-opposition-venus":
    "L’amour peut être fortement idéalisé, au risque de confondre les rêves avec la réalité du lien. Cette opposition demande de conserver la tendresse tout en clarifiant les attentes et les engagements.",

  "pluto-conjunction-venus":
    "L’attirance et les sentiments prennent une profondeur exceptionnelle. Cette conjonction peut créer un lien magnétique, mais elle demande de surveiller la jalousie, la dépendance et le besoin de possession.",

  "pluto-trine-venus":
    "Les sentiments profonds peuvent s’exprimer avec confiance et authenticité. Cette harmonie favorise l’intimité, la loyauté et une transformation positive de la manière d’aimer.",

  "pluto-sextile-venus":
    "Cette interaction aide la relation à approfondir l’intimité et la confiance. Chacun peut encourager l’autre à aimer avec davantage de vérité et de courage.",

  "pluto-square-venus":
    "Les sentiments peuvent devenir très intenses et réveiller des enjeux de possession, de dépendance ou de pouvoir. Cette tension demande une grande honnêteté émotionnelle et le respect de la liberté de chacun.",

  "pluto-opposition-venus":
    "L’attirance peut être profonde, magnétique et difficile à ignorer. Cette opposition peut cependant réveiller la jalousie, la peur de perdre ou le besoin de contrôler lorsque la sécurité affective devient fragile.",

  /*
  |--------------------------------------------------------------------------
  | Mars
  |--------------------------------------------------------------------------
  */

  "jupiter-conjunction-mars":
    "L’action et l’enthousiasme se renforcent puissamment. Cette conjonction favorise l’audace et les projets ambitieux, mais demande de maîtriser l’impatience et les prises de risque excessives.",

  "jupiter-trine-mars":
    "L’énergie et la confiance avancent dans la même direction. Cette harmonie favorise les projets, l’aventure et une belle capacité à agir ensemble avec enthousiasme.",

  "jupiter-sextile-mars":
    "L’action et l’enthousiasme se renforcent mutuellement. Cette interaction encourage les projets, l’aventure et la capacité du couple à avancer avec confiance.",

  "jupiter-square-mars":
    "L’action peut devenir excessive, précipitée ou trop ambitieuse. Cette tension demande de canaliser l’énergie et de réfléchir aux conséquences avant de prendre des risques.",

  "jupiter-opposition-mars":
    "L’élan de l’un peut être amplifié ou contesté par les ambitions de l’autre. Cette opposition demande de coordonner les objectifs plutôt que de transformer chaque initiative en compétition.",

  "mars-conjunction-saturn":
    "L’action rencontre la discipline, les responsabilités et les limites. Cette conjonction peut soutenir de grands efforts communs, mais elle demande d’éviter la frustration et le contrôle.",

  "mars-trine-saturn":
    "L’énergie et la discipline s’accordent avec efficacité. Cette harmonie favorise les projets durables, la patience et la capacité à agir de manière responsable.",

  "mars-sextile-saturn":
    "Cette interaction aide à canaliser l’énergie vers des objectifs concrets. Chacun peut soutenir l’autre par sa persévérance, son sens pratique et sa fiabilité.",

  "mars-square-saturn":
    "Le désir peut parfois se heurter à des freins, des responsabilités ou un sentiment de retenue. En apprenant à respecter le rythme de chacun, cette tension peut devenir une source de stabilité et de maturité.",

  "mars-opposition-saturn":
    "L’élan de l’un peut rencontrer la prudence, les limites ou les résistances de l’autre. Cette opposition exige de trouver un équilibre entre action immédiate et construction patiente.",

  "mars-conjunction-uranus":
    "Cette conjonction crée une énergie vive, audacieuse et imprévisible. Elle favorise l’innovation et l’aventure, mais demande de maîtriser l’impulsivité et les réactions brusques.",

  "mars-trine-uranus":
    "L’action et l’originalité se complètent avec naturel. Cette harmonie favorise l’audace, l’indépendance et la capacité à renouveler la relation sans provoquer de rupture inutile.",

  "mars-sextile-uranus":
    "Cette interaction stimule le courage, la créativité et l’initiative. Le couple peut facilement essayer de nouvelles approches et sortir des habitudes qui ne lui conviennent plus.",

  "mars-square-uranus":
    "Les réactions peuvent être rapides, imprévisibles et difficiles à contenir. Cette tension demande de laisser une place à l’indépendance tout en évitant les décisions prises sous le coup de l’impulsion.",

  "mars-opposition-uranus":
    "L’action de l’un peut provoquer la résistance ou la rébellion de l’autre. Cette opposition exige de gérer les tensions sans menacer le lien ni imposer de changement brutal.",

  "mars-conjunction-neptune":
    "L’action et le désir se mêlent à l’intuition et à l’imagination. Cette conjonction peut être inspirante, mais elle demande de clarifier les intentions et les limites.",

  "mars-trine-neptune":
    "L’énergie et l’intuition s’accordent avec douceur. Cette harmonie favorise l’empathie, la créativité et la capacité d’agir pour un idéal commun.",

  "mars-sextile-neptune":
    "Cette interaction aide à transformer les rêves en actions sensibles et constructives. Chacun peut soutenir les aspirations de l’autre avec délicatesse.",

  "mars-square-neptune":
    "Le désir et l’action peuvent manquer de clarté ou produire des messages contradictoires. Cette tension demande de préciser les intentions et de ne pas laisser les suppositions diriger la relation.",

  "mars-opposition-neptune":
    "L’action et le désir peuvent manquer de direction claire ou être influencés par des attentes implicites. Cette opposition demande de nommer les intentions avant d’agir ou de tirer des conclusions.",

  "mars-conjunction-pluto":
    "Cette conjonction produit une énergie intense, déterminée et profondément transformatrice. Elle peut soutenir de grands projets, mais demande de partager le pouvoir et d’éviter la domination.",

  "mars-trine-pluto":
    "L’action et la puissance intérieure se soutiennent avec efficacité. Cette harmonie favorise le courage, la persévérance et la capacité à traverser ensemble des périodes exigeantes.",

  "mars-sextile-pluto":
    "Cette interaction aide à canaliser une grande force vers des objectifs constructifs. Chacun peut encourager l’autre à agir avec davantage de courage et de maîtrise.",

  "mars-square-pluto":
    "Cette interaction peut produire une grande intensité, mais aussi des confrontations, des rapports de force ou un besoin de domination. L’énergie devient constructive lorsque le pouvoir est partagé plutôt qu’imposé.",

  "mars-opposition-pluto":
    "Les volontés peuvent s’affronter avec beaucoup d’intensité. Cette opposition demande d’éviter les menaces, la coercition et les luttes de pouvoir afin de transformer l’énergie en force commune.",

  /*
  |--------------------------------------------------------------------------
  | Jupiter
  |--------------------------------------------------------------------------
  */

  "jupiter-conjunction-saturn":
    "L’expansion et la structure se rencontrent directement. Cette conjonction aide à construire de grands projets réalistes, à condition de respecter autant le besoin de croissance que les limites nécessaires.",

  "jupiter-trine-saturn":
    "L’enthousiasme et la prudence se complètent harmonieusement. Cette interaction favorise les projets durables, la confiance et une croissance bien structurée.",

  "jupiter-sextile-saturn":
    "Cette interaction aide à transformer les idées ambitieuses en plans réalistes. Chacun peut équilibrer l’optimisme de l’autre par de la patience et du sens pratique.",

  "jupiter-square-saturn":
    "L’un cherche à développer les possibilités tandis que l’autre souhaite sécuriser, limiter ou structurer. Cette tension peut devenir productive lorsque l’enthousiasme s’appuie sur un plan réaliste.",

  "jupiter-opposition-saturn":
    "La croissance et la prudence peuvent tirer la relation dans des directions contraires. Cette opposition demande de concilier ambition, responsabilité et rythme réaliste.",

  "jupiter-conjunction-uranus":
    "Cette conjonction stimule l’innovation, l’audace et le désir d’explorer de nouvelles possibilités. Elle peut créer des occasions inattendues, mais demande d’éviter les décisions trop précipitées.",

  "jupiter-trine-uranus":
    "L’ouverture, la liberté et l’innovation s’accordent avec naturel. Cette harmonie favorise les projets originaux, les changements positifs et une vision commune tournée vers l’avenir.",

  "jupiter-sextile-uranus":
    "Cette interaction encourage les nouvelles idées et les occasions inattendues. Le couple peut évoluer rapidement lorsque chacun soutient la liberté et la créativité de l’autre.",

  "jupiter-square-uranus":
    "Le besoin de changement peut devenir excessif, imprudent ou difficile à stabiliser. Cette tension demande d’évaluer les risques avant de bouleverser les projets communs.",

  "jupiter-opposition-uranus":
    "L’enthousiasme et le besoin de liberté peuvent pousser vers des décisions imprévisibles. Cette opposition invite à préserver l’ouverture sans sacrifier la stabilité.",

  "jupiter-conjunction-neptune":
    "Cette conjonction amplifie les rêves, la foi et l’imagination. Elle favorise les idéaux communs, mais demande de vérifier leur faisabilité et d’éviter les illusions partagées.",

  "jupiter-trine-neptune":
    "L’optimisme et l’intuition se soutiennent avec douceur. Cette harmonie favorise la générosité, la créativité et la capacité de croire ensemble en un projet inspirant.",

  "jupiter-sextile-neptune":
    "Cette interaction aide à unir la confiance et la sensibilité. Chacun peut encourager les rêves de l’autre tout en leur donnant une direction positive.",

  "jupiter-square-neptune":
    "Les rêves et les attentes peuvent devenir trop vastes ou manquer de repères concrets. Cette tension demande de vérifier les faits et d’éviter les promesses irréalistes.",

  "jupiter-opposition-neptune":
    "Les grands rêves et les espoirs communs peuvent manquer de repères concrets. Cette opposition invite à préserver la foi dans le lien tout en vérifiant la faisabilité des projets.",

  "jupiter-conjunction-pluto":
    "Cette conjonction amplifie l’ambition, la volonté de croissance et le pouvoir de transformation. Elle peut soutenir de grands projets, mais demande de préserver l’équité dans les décisions.",

  "jupiter-trine-pluto":
    "L’expansion et la transformation s’accordent avec puissance. Cette harmonie favorise les ambitions communes, la résilience et la capacité de créer des changements durables.",

  "jupiter-sextile-pluto":
    "Cette interaction encourage une croissance profonde et constructive. Chacun peut aider l’autre à développer ses ressources, son influence et sa confiance.",

  "jupiter-square-pluto":
    "Les ambitions peuvent devenir excessives ou provoquer des désaccords sur le pouvoir, les objectifs et la direction du couple. La croissance reste bénéfique lorsque chacun garde une place équitable.",

  "jupiter-opposition-pluto":
    "Les objectifs de croissance peuvent entrer en conflit avec des enjeux de pouvoir ou de contrôle. Cette opposition demande de partager les décisions et de respecter les priorités de chacun.",

  /*
  |--------------------------------------------------------------------------
  | Saturne
  |--------------------------------------------------------------------------
  */

  "saturn-conjunction-uranus":
    "La stabilité et le changement se rencontrent directement. Cette conjonction peut aider le couple à moderniser ses structures, mais elle demande d’éviter autant la rigidité que la rupture impulsive.",

  "saturn-trine-uranus":
    "La discipline et l’innovation s’accordent harmonieusement. Cette interaction favorise des changements réalistes, progressifs et durables.",

  "saturn-sextile-uranus":
    "Cette interaction aide à intégrer la nouveauté sans perdre les repères essentiels. Chacun peut contribuer à faire évoluer la relation de manière responsable.",

  "saturn-square-uranus":
    "Le besoin de stabilité peut entrer en tension avec le désir de liberté et de changement. Cette dynamique demande de créer des règles souples plutôt que d’imposer ou de rejeter toute évolution.",

  "saturn-opposition-uranus":
    "Le besoin de stabilité rencontre ici un désir de liberté et de changement. Cette opposition demande de créer des engagements suffisamment solides pour rassurer, mais assez souples pour permettre l’évolution.",

  "neptune-conjunction-saturn":
    "La réalité et les idéaux se rencontrent directement. Cette conjonction peut aider à donner une forme concrète aux rêves, mais elle demande de clarifier les responsabilités et les attentes.",

  "neptune-trine-saturn":
    "La sensibilité et la structure s’accordent avec équilibre. Cette harmonie favorise la capacité de transformer les rêves communs en engagements réalistes.",

  "neptune-sextile-saturn":
    "Cette interaction aide à unir intuition, compassion et sens des responsabilités. Chacun peut soutenir les aspirations de l’autre par des gestes concrets.",

  "neptune-square-saturn":
    "La réalité, les responsabilités et les idéaux peuvent sembler difficiles à concilier. Cette tension demande de transformer les rêves en engagements concrets sans étouffer la sensibilité du lien.",

  "neptune-opposition-saturn":
    "Les obligations peuvent entrer en contraste avec les rêves ou la sensibilité de l’autre. Cette opposition demande de clarifier ce qui est possible sans ridiculiser les idéaux.",

  "pluto-conjunction-saturn":
    "Cette conjonction confronte le couple à des transformations profondes dans ses structures, ses responsabilités et ses engagements. Elle exige patience, courage et partage du pouvoir.",

  "pluto-trine-saturn":
    "La discipline et la transformation se soutiennent avec puissance. Cette harmonie favorise la résilience, la maturité et la capacité à reconstruire sur des bases solides.",

  "pluto-sextile-saturn":
    "Cette interaction aide à transformer progressivement les structures qui ne conviennent plus. Chacun peut soutenir l’autre dans les périodes de responsabilité ou de changement important.",

  "pluto-square-saturn":
    "Les responsabilités, le contrôle et les rapports d’autorité peuvent devenir particulièrement lourds. Cette tension pousse le couple à reconstruire des règles plus justes et plus conscientes.",

  "pluto-opposition-saturn":
    "Les enjeux de contrôle, de responsabilité et de transformation peuvent s’opposer directement. Cette polarité demande de revoir les règles du couple sans utiliser la peur ou l’autorité.",

  /*
  |--------------------------------------------------------------------------
  | Uranus, Neptune et Pluton
  |--------------------------------------------------------------------------
  */

  "neptune-conjunction-uranus":
    "Cette conjonction unit l’innovation, l’intuition et les idéaux collectifs. Dans la relation, elle peut stimuler une vision originale du futur, mais son influence demeure souvent plus générationnelle que personnelle.",

  "neptune-trine-uranus":
    "L’intuition et le changement s’accordent avec fluidité. Cette harmonie favorise l’ouverture, l’imagination et une capacité commune à accueillir de nouvelles possibilités.",

  "neptune-sextile-uranus":
    "Cette interaction encourage l’inspiration, l’innovation et l’ouverture à des perspectives différentes. Le couple peut partager une vision créative ou spirituelle du changement.",

  "neptune-square-uranus":
    "Le besoin de rupture ou de nouveauté peut entrer en tension avec des attentes floues ou idéalisées. Cette dynamique demande de distinguer l’intuition de l’impulsion.",

  "neptune-opposition-uranus":
    "La recherche de liberté peut entrer en contraste avec les rêves, les idéaux ou la sensibilité de l’autre. Cette opposition invite à rendre les changements plus conscients et plus clairs.",

  "pluto-conjunction-uranus":
    "Cette conjonction associe une puissante volonté de transformation au besoin de changement radical. Dans la relation, elle peut pousser à renouveler profondément les règles et les projets communs.",

  "pluto-trine-uranus":
    "Le changement et la transformation se soutiennent avec puissance. Cette harmonie favorise le courage de renouveler la relation et de dépasser les anciennes limitations.",

  "pluto-sextile-uranus":
    "Cette interaction encourage des transformations progressives mais profondes. Chacun peut aider l’autre à se libérer d’habitudes ou de structures devenues inutiles.",

  "pluto-square-uranus":
    "Le besoin de changement peut provoquer des crises, des résistances ou des luttes de pouvoir. Cette tension demande d’éviter les décisions radicales imposées à l’autre.",

  "pluto-opposition-uranus":
    "La liberté et la transformation peuvent entrer dans une dynamique de confrontation. Cette opposition exige de renouveler la relation sans chercher à détruire ou contrôler ce qui résiste.",

  "neptune-conjunction-pluto":
    "Cette conjonction unit les idéaux profonds et la transformation collective. Son influence est souvent générationnelle, mais elle peut renforcer une sensibilité commune aux changements invisibles ou spirituels.",

  "neptune-trine-pluto":
    "L’intuition et la transformation s’accordent avec profondeur. Cette harmonie favorise une compréhension subtile des changements intérieurs et une capacité commune à traverser les périodes de transition.",

  "neptune-sextile-pluto":
    "Cette interaction soutient une évolution profonde, intuitive et progressive. Le couple peut partager une grande sensibilité aux transformations psychologiques ou spirituelles.",

  "neptune-square-pluto":
    "Les idéaux, les peurs profondes et les enjeux de pouvoir peuvent se mélanger de manière confuse. Cette tension demande de rester lucide et d’éviter les projections ou les manipulations implicites.",

  "neptune-opposition-pluto":
    "Les idéaux et les transformations profondes peuvent tirer dans des directions opposées. Cette polarité demande de distinguer les intuitions authentiques des peurs ou des fantasmes de contrôle.",
};

/*
|--------------------------------------------------------------------------
| Textes généraux de secours
|--------------------------------------------------------------------------
|
| Ces phrases sont utilisées lorsqu’une combinaison
| précise n’existe pas encore dans le dictionnaire.
|
*/

const FALLBACK_INTERPRETATIONS:
  Record<AspectType, string> = {
  conjunction:
    "Cette conjonction intensifie la rencontre des deux énergies planétaires. Elle peut créer une grande proximité, mais également amplifier leurs réactions et leurs besoins.",

  trine:
    "Ce trigone favorise une circulation naturelle entre les deux énergies. Chacun peut soutenir l’autre avec davantage de fluidité, de compréhension et de confiance.",

  sextile:
    "Ce sextile crée une possibilité de coopération et d’enrichissement mutuel. Son potentiel se développe lorsque les partenaires choisissent consciemment de l’utiliser.",

  square:
    "Ce carré crée une tension dynamique entre les deux énergies. Il peut provoquer des réactions défensives, mais aussi encourager le couple à évoluer et à trouver de nouvelles solutions.",

  opposition:
    "Cette opposition met en présence deux besoins ou deux fonctionnements contrastés. L’équilibre se construit lorsque chacun reconnaît la valeur du point de vue opposé.",

  quincunx:
    "Ce quinconce demande des ajustements réguliers. Les deux énergies ne fonctionnent pas naturellement de la même manière, mais elles peuvent apprendre à mieux collaborer.",
};

/*
|--------------------------------------------------------------------------
| Fonction exportée
|--------------------------------------------------------------------------
*/

export function getCompatibilityAspectInterpretation(
  planet1: string,
  aspect: AspectType,
  planet2: string,
): string {
  const key =
    createAspectKey(
      planet1,
      aspect,
      planet2,
    );

  return (
    ASPECT_INTERPRETATIONS[key] ??
    FALLBACK_INTERPRETATIONS[aspect] ??
    "Cette interaction planétaire influence la dynamique relationnelle et demande une attention consciente de la part des deux partenaires."
  );
}
