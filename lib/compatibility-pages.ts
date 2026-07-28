import {
  SIGNS,
  type SignKey,
} from "./compatibility";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export type CompatibilityPageData = {
  signA: SignKey;
  signB: SignKey;

  score: number;
  title: string;
  metaDescription: string;

  introduction: string;
  love: string;
  communication: string;
  attraction: string;
  trust: string;
  dailyLife: string;
  strengths: string;
  challenges: string;
  advice: string;
  conclusion: string;
};

/*
|--------------------------------------------------------------------------
| Données des compatibilités
|--------------------------------------------------------------------------
*/

export const COMPATIBILITY_PAGES: CompatibilityPageData[] = [
  /*
  |--------------------------------------------------------------------------
  | Bélier et Bélier
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "belier",

    score: 82,

    title:
      "Compatibilité amoureuse entre Bélier et Bélier",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Bélier : attraction, communication, confiance, forces, défis et conseils pour le couple.",

    introduction:
      "La rencontre entre deux Bélier réunit deux personnalités spontanées, passionnées et déterminées. Cette relation peut avancer rapidement, portée par une énergie commune très forte. Elle demande cependant aux deux partenaires d’apprendre à partager l’initiative et à respecter le rythme de l’autre.",

    love:
      "En amour, deux Bélier recherchent généralement une relation vivante, directe et stimulante. Ils aiment sentir que le lien avance et que la passion reste présente. Leur spontanéité peut créer une histoire intense dès les premiers instants, mais ils doivent aussi apprendre à construire une stabilité au-delà de l’enthousiasme initial.",

    communication:
      "Leur communication est souvent franche et immédiate. Aucun des deux n’apprécie particulièrement les sous-entendus ou les longues hésitations. Cette honnêteté peut être une force, mais les échanges risquent de devenir brusques lorsque chacun souhaite avoir le dernier mot.",

    attraction:
      "L’attirance peut être très forte dès le départ. Chacun reconnaît chez l’autre la même audace, la même énergie et le même goût de l’action. Cette intensité nourrit la passion, mais elle peut aussi transformer la relation en compétition si chacun cherche constamment à impressionner ou à diriger l’autre.",

    trust:
      "La confiance peut s’installer rapidement lorsque les intentions sont clairement exprimées. Les deux partenaires apprécient généralement la loyauté et la franchise. Toutefois, leur impulsivité peut provoquer des réactions précipitées ou des paroles regrettées qui fragilisent temporairement le sentiment de sécurité.",

    dailyLife:
      "Le quotidien de deux Bélier est rarement monotone. Ils aiment entreprendre, bouger, décider et lancer de nouveaux projets. Pour éviter de s’épuiser ou d’abandonner trop rapidement leurs idées, ils gagnent à mieux organiser leurs priorités et à partager les responsabilités.",

    strengths:
      "Cette union possède beaucoup d’énergie, de courage et de capacité à rebondir. Ensemble, les deux Bélier peuvent se motiver, se défendre et affronter les obstacles avec détermination. Leur enthousiasme commun peut également rendre la relation très vivante et inspirante.",

    challenges:
      "Le principal défi consiste à éviter les luttes de pouvoir. Deux personnalités très affirmées peuvent transformer une différence d’opinion en compétition. Les réactions impulsives, l’impatience et la difficulté à céder peuvent alors amplifier des conflits qui auraient pu rester mineurs.",

    advice:
      "Pour renforcer leur relation, les deux partenaires doivent apprendre à alterner les initiatives et à laisser à chacun un espace d’autonomie. Prendre quelques instants avant de répondre pendant un conflit peut aussi les aider à exprimer leurs besoins sans transformer chaque désaccord en affrontement.",

    conclusion:
      "Bélier et Bélier peuvent former un couple passionné, courageux et dynamique. Leur relation fonctionne particulièrement bien lorsqu’ils transforment leur esprit de compétition en collaboration. En apprenant à ralentir, à écouter et à partager les décisions, ils peuvent bâtir une union aussi solide qu’intense.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Taureau
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "taureau",

    score: 58,

    title:
      "Compatibilité amoureuse entre Bélier et Taureau",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Taureau : passion, stabilité, communication, confiance, défis et potentiel du couple.",

    introduction:
      "Bélier et Taureau abordent la vie à des rythmes très différents. Le Bélier agit rapidement, suit son instinct et recherche le mouvement, tandis que le Taureau préfère prendre son temps, sécuriser ses choix et construire sur des bases solides. Leur relation peut devenir très complémentaire lorsqu’ils cessent de vouloir imposer leur propre cadence.",

    love:
      "En amour, le Bélier apporte l’élan, la spontanéité et le désir de faire évoluer rapidement la relation. Le Taureau offre une présence stable, fidèle et rassurante. Le Bélier peut aider le Taureau à sortir de ses habitudes, alors que le Taureau apprend au Bélier à approfondir ses sentiments et à ne pas confondre intensité immédiate et engagement durable.",

    communication:
      "Le Bélier communique de manière directe et peut vouloir régler un problème immédiatement. Le Taureau réfléchit davantage et peut se fermer lorsqu’il se sent pressé. Les discussions deviennent plus constructives lorsque le Bélier modère son impatience et que le Taureau exprime clairement ce qu’il ressent au lieu de laisser le silence installer une tension.",

    attraction:
      "L’attirance entre ces deux signes peut être forte, car chacun possède une énergie très affirmée. Le Bélier est séduit par la sensualité et l’assurance tranquille du Taureau. Le Taureau peut être attiré par l’audace et la vitalité du Bélier. Leur alchimie devient particulièrement riche lorsque la passion du feu rencontre la sensualité de la terre.",

    trust:
      "Le Taureau accorde beaucoup d’importance à la constance et peut avoir besoin de preuves concrètes avant de se sentir pleinement en sécurité. Le Bélier, plus spontané, considère souvent que sa franchise suffit à démontrer sa loyauté. La confiance se construit lorsque le Bélier tient ses engagements et que le Taureau évite de transformer son besoin de sécurité en contrôle.",

    dailyLife:
      "Dans la vie quotidienne, le Bélier aime improviser tandis que le Taureau préfère prévoir. Cette différence peut provoquer des désaccords sur les finances, les sorties, les projets ou l’organisation de la maison. Pourtant, elle peut aussi créer un équilibre efficace : le Bélier stimule l’action et le Taureau s’assure que les décisions demeurent réalistes.",

    strengths:
      "Le Bélier et le Taureau possèdent tous les deux une grande détermination. Lorsqu’ils poursuivent un objectif commun, le Bélier lance le mouvement et le Taureau lui donne de la continuité. Cette combinaison peut produire une relation courageuse, protectrice et capable de transformer une idée spontanée en projet durable.",

    challenges:
      "Leurs conflits peuvent devenir tenaces. Le Bélier s’emporte rapidement, puis souhaite passer à autre chose, alors que le Taureau peut retenir longtemps ce qui l’a blessé. L’impatience du Bélier se heurte alors à l’entêtement du Taureau. Aucun des deux ne doit confondre fermeté et refus systématique de faire un compromis.",

    advice:
      "Le Bélier gagne à respecter le besoin de stabilité du Taureau sans l’interpréter comme un manque d’enthousiasme. Le Taureau doit laisser une place à la nouveauté et éviter de ralentir toutes les initiatives par prudence. En décidant ensemble quels domaines demandent de l’audace et lesquels nécessitent de la patience, ils peuvent mieux unir leurs forces.",

    conclusion:
      "Bélier et Taureau ne forment pas toujours le couple le plus simple, mais leur relation peut être profondément formatrice. Le Bélier apporte l’étincelle et le Taureau la solidité. Lorsqu’ils acceptent leurs différences de rythme, ils peuvent créer une union passionnée, sensuelle et beaucoup plus stable qu’elle ne le paraît au départ.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Gémeaux
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "gemeaux",

    score: 90,

    title:
      "Compatibilité amoureuse entre Bélier et Gémeaux",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Gémeaux : complicité, attraction, communication, confiance et avenir de cette union.",

    introduction:
      "Bélier et Gémeaux forment une combinaison vive, curieuse et rarement monotone. Le Bélier aime agir, entreprendre et relever des défis, tandis que le Gémeaux nourrit la relation par ses idées, son humour et son besoin de découverte. Ensemble, ils peuvent vivre une histoire stimulante où le mouvement et la nouveauté occupent une place centrale.",

    love:
      "En amour, le Bélier apprécie la légèreté et la vivacité du Gémeaux. Le Gémeaux est attiré par l’assurance et l’élan du Bélier. Leur relation se développe souvent rapidement, portée par une forte complicité et une envie commune d’expérimenter. Pour durer, elle doit toutefois intégrer davantage de profondeur émotionnelle et de continuité.",

    communication:
      "La communication représente l’un de leurs plus grands atouts. Le Gémeaux aime échanger, questionner et explorer plusieurs points de vue, tandis que le Bélier répond avec franchise et spontanéité. Leurs conversations peuvent être animées et inspirantes. Ils doivent seulement éviter de parler trop vite ou de passer à autre chose avant d’avoir réellement résolu un désaccord.",

    attraction:
      "L’attraction repose autant sur l’énergie physique que sur la stimulation mentale. Le Bélier aime le caractère imprévisible du Gémeaux, tandis que le Gémeaux est séduit par la confiance et l’audace du Bélier. Leur alchimie reste forte lorsque chacun continue à surprendre l’autre et à nourrir la relation de nouvelles expériences.",

    trust:
      "Le Bélier peut parfois percevoir la souplesse du Gémeaux comme de l’inconstance. De son côté, le Gémeaux peut se sentir limité si le Bélier exige des réponses immédiates ou une disponibilité constante. La confiance grandit lorsque le Gémeaux communique clairement ses intentions et que le Bélier respecte son besoin d’espace intellectuel et social.",

    dailyLife:
      "Leur quotidien peut être rempli de sorties, de projets spontanés, de déplacements et de nouvelles idées. Ils partagent une certaine difficulté avec la routine et apprécient les changements. Le principal risque est de commencer plusieurs choses sans les terminer. Une organisation minimale les aide à transformer leur enthousiasme en réalisations concrètes.",

    strengths:
      "Le Bélier apporte le courage d’agir et le Gémeaux la capacité de trouver plusieurs solutions. Ensemble, ils peuvent se stimuler, rire beaucoup et traverser les périodes difficiles avec créativité. Leur relation favorise l’autonomie, la découverte et une forme de jeunesse intérieure qui peut rester présente très longtemps.",

    challenges:
      "Le Bélier peut devenir impatient devant les hésitations ou les changements d’avis du Gémeaux. Le Gémeaux peut trouver le Bélier trop catégorique ou trop intense. Si les deux évitent les conversations sérieuses par peur de perdre leur légèreté, certains problèmes risquent de revenir sous différentes formes.",

    advice:
      "Pour solidifier leur union, ils doivent conserver leur spontanéité tout en créant quelques repères communs. Le Bélier gagne à écouter les nuances du Gémeaux avant de conclure trop vite. Le Gémeaux doit éviter de détourner les discussions importantes par l’humour ou la distraction. Une communication honnête leur permet de préserver à la fois leur liberté et leur engagement.",

    conclusion:
      "Bélier et Gémeaux possèdent une compatibilité naturelle fondée sur l’énergie, la curiosité et le goût de la nouveauté. Leur couple peut être joyeux, inventif et très stimulant. Lorsqu’ils prennent le temps d’approfondir leur lien et de terminer ce qu’ils commencent, cette relation peut évoluer avec fluidité sans perdre son enthousiasme.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Cancer
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "cancer",

    score: 55,

    title:
      "Compatibilité amoureuse entre Bélier et Cancer",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Cancer : émotions, passion, communication, confiance, différences et conseils de couple.",

    introduction:
      "Bélier et Cancer possèdent des sensibilités très différentes. Le Bélier avance avec franchise, instinct et rapidité, tandis que le Cancer observe l’atmosphère, protège ses émotions et recherche un sentiment de sécurité. Cette relation peut être intense, car chacun touche chez l’autre une dimension qu’il maîtrise moins naturellement.",

    love:
      "Le Bélier aime avec élan et démontre souvent ses sentiments par l’action. Le Cancer exprime son attachement par la présence, les soins et la création d’un espace rassurant. Le Bélier peut apporter du courage au Cancer, tandis que le Cancer peut aider le Bélier à reconnaître la profondeur de ses émotions. Leur amour demande cependant beaucoup de délicatesse.",

    communication:
      "Le Bélier dit généralement ce qu’il pense sans détour. Le Cancer communique davantage par le ton, les silences et les réactions émotionnelles. Le Bélier peut ne pas comprendre pourquoi certaines paroles ont blessé, alors que le Cancer peut se refermer au lieu d’expliquer clairement son malaise. Ils progressent lorsque chacun adapte son langage à la sensibilité de l’autre.",

    attraction:
      "L’attirance peut être surprenante et puissante. Le Cancer est souvent fasciné par la confiance et la détermination du Bélier. Le Bélier peut être touché par la douceur, l’intuition et la profondeur du Cancer. Cette attraction devient durable lorsque la force du Bélier sert à protéger le lien plutôt qu’à dominer les échanges.",

    trust:
      "Le Cancer a besoin de stabilité émotionnelle et peut être déstabilisé par l’impulsivité du Bélier. Le Bélier, de son côté, peut se sentir incompris si le Cancer remet constamment en question ses intentions. La confiance exige des gestes cohérents, des paroles respectueuses et la capacité de rassurer sans tomber dans la dépendance ou la surveillance.",

    dailyLife:
      "Le Cancer apprécie généralement un foyer chaleureux et des habitudes qui renforcent le sentiment d’appartenance. Le Bélier a besoin d’action, d’autonomie et de projets extérieurs. Leur quotidien fonctionne mieux lorsqu’ils alternent les moments intimes avec les activités stimulantes, sans obliger l’un à vivre constamment selon les besoins de l’autre.",

    strengths:
      "Le Bélier peut encourager le Cancer à défendre ses besoins et à sortir de sa zone de confort. Le Cancer peut enseigner au Bélier la patience, l’écoute et l’importance des liens affectifs. Ensemble, ils ont la possibilité d’unir courage et sensibilité, initiative et protection, passion et attachement.",

    challenges:
      "Le Bélier risque de trouver le Cancer trop susceptible ou indirect. Le Cancer peut percevoir le Bélier comme brusque, centré sur lui-même ou émotionnellement imprudent. Les conflits deviennent difficiles lorsque le Bélier attaque pour obtenir une réponse et que le Cancer se retire pour se protéger.",

    advice:
      "Le Bélier doit apprendre à ralentir avant de parler lorsqu’une émotion est forte. Le Cancer gagne à exprimer ses besoins directement plutôt qu’à attendre que son partenaire les devine. Les deux doivent éviter les réactions défensives et créer un climat où la franchise peut coexister avec la bienveillance.",

    conclusion:
      "Bélier et Cancer peuvent vivre une relation exigeante, mais profondément transformatrice. Le Bélier apporte le mouvement et le Cancer la profondeur affective. Lorsqu’ils respectent leurs différences et développent une communication plus douce, ils peuvent construire un lien protecteur, passionné et véritablement complémentaire.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Lion
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "lion",

    score: 82,

    title:
      "Compatibilité amoureuse entre Bélier et Lion",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Lion : passion, admiration, communication, confiance, forces et défis de cette union.",

    introduction:
      "Bélier et Lion partagent une énergie de feu qui favorise la passion, l’audace et le désir de vivre pleinement. Le Bélier aime initier, tandis que le Lion cherche à créer, rayonner et donner de l’ampleur à ce qu’il entreprend. Leur rencontre peut produire un couple dynamique, fier et particulièrement visible.",

    love:
      "En amour, ces deux signes recherchent une relation intense et généreuse. Le Bélier apporte la spontanéité et le Lion une chaleur affective qui donne au lien une dimension spectaculaire. Ils aiment se sentir désirés, admirés et soutenus. Leur amour devient solide lorsqu’ils célèbrent mutuellement leurs réussites au lieu de chercher à occuper seuls le premier plan.",

    communication:
      "La communication est franche, expressive et parfois théâtrale. Le Bélier va droit au but, alors que le Lion souhaite être entendu et respecté. Les disputes peuvent éclater rapidement, notamment lorsque l’un critique l’autre devant des personnes extérieures. Leur capacité à pardonner et à retrouver leur enthousiasme constitue néanmoins un avantage important.",

    attraction:
      "L’attraction est souvent immédiate. Le Bélier est séduit par l’assurance, le charisme et la générosité du Lion. Le Lion apprécie le courage et l’énergie conquérante du Bélier. Leur passion peut rester forte à condition qu’ils continuent à se surprendre et à valoriser sincèrement les qualités de l’autre.",

    trust:
      "La loyauté est importante pour les deux partenaires. Le Lion veut sentir qu’il occupe une place spéciale, tandis que le Bélier souhaite une relation claire et sans manipulation. La confiance peut être solide lorsque chacun respecte la fierté de l’autre. Les jeux de jalousie et les tentatives de provoquer une réaction risquent cependant de créer des blessures durables.",

    dailyLife:
      "Le quotidien de ce couple peut être actif, social et rempli de projets. Ils aiment organiser, recevoir, voyager ou poursuivre des objectifs ambitieux. Des tensions peuvent apparaître autour du leadership ou des dépenses impulsives. Une répartition claire des responsabilités les aide à éviter que chaque décision devienne une démonstration d’autorité.",

    strengths:
      "Bélier et Lion savent se motiver et défendre leur relation avec courage. Ils partagent un goût de l’action, une grande vitalité et la capacité d’encourager les ambitions de leur partenaire. Ensemble, ils peuvent créer une vie stimulante et inspirer leur entourage par leur enthousiasme.",

    challenges:
      "Le principal défi concerne les égos. Le Bélier veut conserver son indépendance et le Lion souhaite que sa valeur soit reconnue. Une critique trop directe, un manque d’attention ou une compétition constante peuvent déclencher des conflits importants. Aucun des deux ne doit transformer l’amour en lutte pour la reconnaissance.",

    advice:
      "Ils gagnent à pratiquer l’admiration réciproque sans flatterie artificielle. Le Bélier doit prendre en considération la sensibilité du Lion à la reconnaissance. Le Lion doit laisser au Bélier la liberté d’agir sans interpréter chaque initiative autonome comme un rejet. Leur couple progresse lorsqu’ils dirigent leur feu vers un projet commun.",

    conclusion:
      "Bélier et Lion peuvent former un couple passionné, ambitieux et profondément vivant. Leur compatibilité est forte lorsqu’ils utilisent leur énergie pour se soutenir plutôt que pour se surpasser mutuellement. Avec du respect, de la générosité et un partage équitable de l’attention, leur union peut rayonner durablement.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Vierge
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "vierge",

    score: 58,

    title:
      "Compatibilité amoureuse entre Bélier et Vierge",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Vierge : différences, communication, attraction, confiance et équilibre du couple.",

    introduction:
      "Bélier et Vierge fonctionnent selon des méthodes presque opposées. Le Bélier agit d’abord et ajuste ensuite, tandis que la Vierge observe, analyse et cherche à limiter les erreurs. Leur relation peut provoquer des incompréhensions, mais elle possède aussi un réel potentiel de complémentarité entre initiative et précision.",

    love:
      "Le Bélier exprime souvent son amour de manière spontanée et énergique. La Vierge démontre davantage ses sentiments par des gestes utiles, une présence fiable et une attention aux détails. Le Bélier peut ne pas reconnaître immédiatement cette forme discrète d’affection, tandis que la Vierge peut douter de la constance d’un partenaire aussi impulsif.",

    communication:
      "Le Bélier parle avec franchise et souhaite des réponses rapides. La Vierge choisit ses mots, analyse les nuances et peut relever ce qui lui semble incohérent. Le Bélier risque de percevoir ces observations comme des critiques, alors que la Vierge peut trouver son partenaire imprudent. Le dialogue devient plus fluide lorsqu’ils distinguent le conseil du jugement.",

    attraction:
      "L’attirance naît souvent de leurs différences. Le Bélier peut être intrigué par l’intelligence, la retenue et la compétence de la Vierge. La Vierge peut admirer le courage et la capacité du Bélier à agir sans se perdre dans les détails. Leur alchimie s’intensifie lorsqu’ils cessent d’essayer de modifier la personnalité de l’autre.",

    trust:
      "La Vierge accorde sa confiance progressivement et observe la cohérence entre les paroles et les actions. Le Bélier peut se montrer très sincère, mais changer rapidement de direction. Pour rassurer la Vierge, il doit respecter ses engagements. De son côté, la Vierge doit éviter d’interpréter chaque imprévu comme un signe d’irresponsabilité.",

    dailyLife:
      "Leur vie quotidienne peut devenir très efficace lorsqu’ils répartissent les rôles selon leurs forces. Le Bélier lance les projets, prend des décisions et crée l’élan. La Vierge structure, vérifie et améliore les détails. Les tensions apparaissent si la Vierge corrige constamment le Bélier ou si le Bélier ignore systématiquement les conseils pratiques de la Vierge.",

    strengths:
      "Cette relation peut unir courage et discernement. Le Bélier aide la Vierge à prendre davantage de risques et à faire confiance à son instinct. La Vierge aide le Bélier à organiser son énergie et à mener ses projets jusqu’au bout. Ensemble, ils peuvent obtenir des résultats qu’aucun des deux n’aurait atteints de la même façon seul.",

    challenges:
      "Le Bélier supporte difficilement les critiques répétées, tandis que la Vierge tolère mal les décisions désordonnées ou précipitées. Leurs conflits peuvent opposer l’impatience à l’inquiétude, puis créer une boucle où chacun renforce précisément le comportement que l’autre redoute.",

    advice:
      "Le Bélier doit reconnaître que les questions de la Vierge ne servent pas toujours à ralentir les choses. La Vierge gagne à formuler ses observations avec encouragement et à accepter qu’une certaine part d’improvisation soit inévitable. Ils doivent se remercier davantage pour ce que chacun apporte concrètement à la relation.",

    conclusion:
      "Bélier et Vierge peuvent construire une relation étonnamment productive et enrichissante. Leur compatibilité demande des ajustements, car l’un privilégie l’instinct et l’autre l’analyse. Lorsqu’ils valorisent leurs différences plutôt que de les combattre, ils forment un duo capable d’allier action, intelligence et sens pratique.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Balance
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "balance",

    score: 90,

    title:
      "Compatibilité amoureuse entre Bélier et Balance",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Balance : attraction, complémentarité, communication, confiance et défis du couple.",

    introduction:
      "Bélier et Balance se trouvent à l’opposé l’un de l’autre dans le zodiaque, ce qui peut créer une attraction particulièrement forte. Le Bélier affirme son individualité et agit rapidement, tandis que la Balance recherche l’équilibre, le dialogue et la coopération. Cette opposition peut devenir une véritable complémentarité lorsqu’ils respectent leurs façons différentes de décider.",

    love:
      "Le Bélier apporte à la relation la passion, le courage et une direction claire. La Balance ajoute le romantisme, l’élégance et le désir de construire un lien harmonieux. Le Bélier peut aider la Balance à choisir plus rapidement, tandis que la Balance apprend au Bélier à considérer les besoins du couple avant d’agir seul.",

    communication:
      "La Balance préfère généralement discuter calmement et examiner plusieurs perspectives. Le Bélier va droit au but et peut trouver cette approche trop hésitante. La Balance peut être déstabilisée par le ton direct du Bélier, mais elle possède souvent la diplomatie nécessaire pour apaiser les tensions. Le dialogue reste leur principal outil d’équilibre.",

    attraction:
      "L’attirance est souvent marquée par un jeu de contrastes. Le Bélier est fasciné par le charme, la douceur et la sociabilité de la Balance. La Balance peut être séduite par l’assurance et la spontanéité du Bélier. Leur alchimie combine initiative et séduction, intensité et raffinement.",

    trust:
      "Le Bélier apprécie les positions claires et peut devenir méfiant lorsque la Balance évite de prendre parti. La Balance peut craindre les réactions trop vives du Bélier et choisir de cacher certains désaccords pour préserver la paix. La confiance se renforce lorsqu’ils expriment honnêtement leurs préférences sans utiliser la colère ou l’évitement.",

    dailyLife:
      "Le Bélier aime décider rapidement, alors que la Balance souhaite souvent comparer les options. Cette différence peut se manifester dans les achats, les sorties ou les projets communs. Leur quotidien devient harmonieux lorsque le Bélier prend en charge les situations qui exigent de l’action et que la Balance organise celles qui demandent négociation et sens de l’équilibre.",

    strengths:
      "Ce couple possède une forte capacité de complémentarité. Le Bélier stimule la confiance et l’autonomie de la Balance. La Balance aide le Bélier à développer la patience, la coopération et une meilleure compréhension des relations. Ensemble, ils peuvent créer un lien vivant sans renoncer au respect mutuel.",

    challenges:
      "Le Bélier peut considérer la Balance comme indécise ou trop préoccupée par l’opinion des autres. La Balance peut juger le Bélier trop brusque ou trop centré sur ses propres objectifs. Les tensions augmentent lorsque le Bélier impose une décision ou lorsque la Balance accepte quelque chose qu’elle ne souhaite pas vraiment.",

    advice:
      "Le Bélier doit laisser à la Balance un temps raisonnable pour réfléchir, sans transformer chaque hésitation en confrontation. La Balance doit exprimer clairement ses limites et ne pas sacrifier ses besoins pour éviter un conflit. En alternant leadership et coopération, ils trouvent un équilibre très naturel.",

    conclusion:
      "Bélier et Balance peuvent former une union magnétique, romantique et profondément complémentaire. Leurs différences les obligent à grandir, mais elles constituent également leur plus grande richesse. Lorsqu’ils unissent l’audace du Bélier au sens relationnel de la Balance, leur couple peut atteindre un équilibre durable.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Scorpion
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "scorpion",

    score: 55,

    title:
      "Compatibilité amoureuse entre Bélier et Scorpion",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Scorpion : passion, intensité, confiance, communication et défis de cette relation.",

    introduction:
      "Bélier et Scorpion créent une rencontre intense entre deux personnalités puissantes. Le Bélier agit ouvertement et immédiatement, tandis que le Scorpion avance avec profondeur, stratégie et instinct. Leur relation peut être passionnée et transformatrice, mais elle exige une grande maturité pour éviter les rapports de force.",

    love:
      "Le Bélier aime avec spontanéité et recherche une relation vivante. Le Scorpion souhaite un lien profond, exclusif et émotionnellement authentique. Le Bélier peut être fasciné par le mystère du Scorpion, tandis que le Scorpion admire le courage du Bélier. Leur amour devient très fort lorsque chacun accepte de montrer sa vulnérabilité.",

    communication:
      "Le Bélier exprime rapidement ce qu’il pense et peut oublier un conflit aussi vite qu’il l’a commencé. Le Scorpion observe davantage, retient les détails et cherche à comprendre ce qui se cache derrière les paroles. Les échanges deviennent difficiles si le Bélier minimise les blessures ou si le Scorpion utilise le silence pour garder le contrôle.",

    attraction:
      "L’attraction peut être extrêmement puissante. Ces deux signes possèdent une énergie passionnée et une forte volonté. Le Bélier apporte l’élan et le Scorpion l’intensité émotionnelle. Leur alchimie peut être magnétique, mais elle doit rester fondée sur le respect plutôt que sur la provocation, la jalousie ou la compétition.",

    trust:
      "Le Scorpion accorde une importance centrale à la loyauté et peut détecter rapidement les contradictions. Le Bélier apprécie la franchise, mais supporte mal d’être interrogé ou surveillé. La confiance nécessite une transparence réelle, des limites claires et l’abandon des jeux de pouvoir. Une trahison ou une manipulation serait difficile à surmonter.",

    dailyLife:
      "Le Bélier aime conserver une grande liberté d’action, tandis que le Scorpion souhaite comprendre les motivations et les projets de son partenaire. Ils peuvent accomplir beaucoup ensemble, car tous deux sont déterminés. Cependant, leur quotidien devient tendu si chaque décision se transforme en test d’influence ou de loyauté.",

    strengths:
      "Bélier et Scorpion possèdent une immense capacité de résistance. Ils peuvent se soutenir dans les crises, défendre leurs projets et refuser d’abandonner lorsque les circonstances deviennent difficiles. Leur relation peut favoriser un profond dépassement de soi et une transformation importante chez les deux partenaires.",

    challenges:
      "Leur principal défi réside dans la gestion du pouvoir. Le Bélier veut agir librement et le Scorpion souhaite garder une certaine maîtrise de la situation. Les réactions impulsives du Bélier peuvent réveiller la méfiance du Scorpion, tandis que l’intensité du Scorpion peut sembler étouffante au Bélier.",

    advice:
      "Le Bélier doit éviter de provoquer le Scorpion simplement pour obtenir une réaction. Le Scorpion doit exprimer ses craintes directement plutôt que de tester ou d’analyser silencieusement son partenaire. Ils gagnent à créer des règles claires concernant la liberté, la fidélité, les conflits et le respect de la vie privée.",

    conclusion:
      "Bélier et Scorpion peuvent vivre une relation passionnée, profonde et inoubliable. Leur compatibilité n’est pas toujours paisible, mais elle possède une force exceptionnelle. Lorsqu’ils transforment leur besoin de contrôle en engagement commun, ils peuvent former un couple loyal, courageux et extrêmement uni.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Sagittaire
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "sagittaire",

    score: 82,

    title:
      "Compatibilité amoureuse entre Bélier et Sagittaire",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Sagittaire : aventure, passion, liberté, communication et potentiel à long terme.",

    introduction:
      "Bélier et Sagittaire partagent une énergie enthousiaste, indépendante et tournée vers l’avenir. Le Bélier aime lancer de nouvelles expériences, tandis que le Sagittaire recherche l’expansion, la découverte et la liberté. Leur relation peut se développer naturellement autour d’une vision optimiste de la vie.",

    love:
      "En amour, ces deux signes apprécient une relation qui laisse de l’espace à l’individualité. Le Bélier apporte la passion immédiate et le Sagittaire une ouverture qui élargit les horizons du couple. Ils se stimulent mutuellement et peuvent vivre une histoire joyeuse, à condition de ne pas fuir les responsabilités affectives lorsque la nouveauté s’estompe.",

    communication:
      "Leur communication est généralement directe, spontanée et remplie d’humour. Le Bélier apprécie la franchise du Sagittaire, même si certaines remarques peuvent manquer de tact. Le Sagittaire comprend bien le besoin d’action du Bélier. Ils doivent toutefois apprendre à écouter jusqu’au bout au lieu de transformer chaque discussion en débat ou en plaisanterie.",

    attraction:
      "L’attraction repose sur l’énergie, la confiance et le goût de l’aventure. Le Bélier est attiré par l’optimisme et l’indépendance du Sagittaire. Le Sagittaire apprécie l’audace et la capacité d’initiative du Bélier. Leur passion reste vivante lorsque le couple continue à explorer de nouveaux projets, lieux ou idées.",

    trust:
      "Les deux partenaires accordent beaucoup d’importance à leur liberté. Cette compréhension commune peut favoriser la confiance, mais elle exige une communication claire sur les limites de la relation. Le Bélier peut devenir jaloux s’il se sent négligé, tandis que le Sagittaire supporte mal les restrictions ou les soupçons constants.",

    dailyLife:
      "Leur quotidien peut être très actif et parfois désorganisé. Ils aiment les projets spontanés, les voyages, les activités physiques et les changements de programme. Les tâches répétitives ou les obligations administratives risquent d’être repoussées. Une certaine structure est nécessaire pour éviter que leur liberté repose constamment sur les efforts d’une autre personne.",

    strengths:
      "Bélier et Sagittaire savent s’encourager et retrouver rapidement leur enthousiasme après une difficulté. Ils partagent le courage, l’optimisme et le désir de progresser. Leur couple peut favoriser la croissance personnelle et offrir à chacun la sensation d’être soutenu sans être limité.",

    challenges:
      "Le Bélier peut vouloir une réponse immédiate, alors que le Sagittaire refuse de se sentir enfermé. Les deux peuvent agir impulsivement, parler trop franchement ou promettre davantage qu’ils ne peuvent réellement accomplir. Leur tendance à chercher constamment la prochaine expérience peut aussi nuire à la construction d’une stabilité durable.",

    advice:
      "Ils doivent préserver leur liberté tout en définissant clairement leurs engagements. Le Bélier gagne à ne pas interpréter chaque besoin d’espace comme un manque d’amour. Le Sagittaire doit démontrer sa fiabilité par des actions concrètes. Des projets communs à long terme peuvent donner une direction à toute leur énergie.",

    conclusion:
      "Bélier et Sagittaire forment souvent un couple naturel, vivant et aventureux. Leur relation peut conserver longtemps sa fraîcheur grâce à leur curiosité commune. Lorsqu’ils ajoutent de la constance à leur enthousiasme, ils peuvent bâtir une union libre, passionnée et durable.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Capricorne
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "capricorne",

    score: 58,

    title:
      "Compatibilité amoureuse entre Bélier et Capricorne",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Capricorne : ambitions, communication, confiance, différences et avenir du couple.",

    introduction:
      "Bélier et Capricorne possèdent tous les deux une forte volonté, mais ils l’expriment de manière très différente. Le Bélier agit rapidement et cherche à ouvrir la voie, tandis que le Capricorne avance avec stratégie, patience et sens des responsabilités. Leur relation peut devenir puissante lorsqu’ils reconnaissent la valeur de ces deux formes d’ambition.",

    love:
      "Le Bélier apporte de la chaleur, de la spontanéité et une énergie qui peut réveiller le côté plus audacieux du Capricorne. Le Capricorne offre de la stabilité, de la loyauté et une capacité à construire dans le temps. Le Bélier peut toutefois souhaiter davantage de démonstrations affectives, alors que le Capricorne exprime souvent son amour par ses actes.",

    communication:
      "Le Bélier communique rapidement et préfère régler les choses sur-le-champ. Le Capricorne réfléchit aux conséquences et peut adopter un ton plus réservé. Le Bélier risque de trouver cette prudence froide ou pessimiste. Le Capricorne peut juger le Bélier imprudent. Leur dialogue s’améliore lorsqu’ils évitent de présenter leur propre méthode comme la seule raisonnable.",

    attraction:
      "L’attraction peut naître d’une admiration réciproque. Le Bélier respecte la force, l’autonomie et la détermination du Capricorne. Le Capricorne peut être séduit par l’audace et la vitalité du Bélier. Leur alchimie devient plus évidente lorsqu’ils quittent les rôles de compétition pour découvrir leur sensibilité respective.",

    trust:
      "Le Capricorne valorise la fiabilité et observe si les promesses sont suivies d’actions. Le Bélier peut être sincère sur le moment, mais changer rapidement de priorité. Pour bâtir la confiance, il doit montrer davantage de constance. Le Capricorne doit aussi éviter de traiter le Bélier comme une personne qu’il faut continuellement encadrer.",

    dailyLife:
      "Le Bélier aime agir selon l’inspiration, alors que le Capricorne organise les étapes et les responsabilités. Cette différence peut devenir très productive : le Bélier crée l’impulsion et le Capricorne assure la progression. Des tensions apparaissent toutefois si le Capricorne contrôle tout ou si le Bélier refuse les contraintes nécessaires à leurs projets.",

    strengths:
      "Ce couple possède une grande capacité de réalisation. Le Bélier ose commencer ce que le Capricorne hésite parfois à entreprendre. Le Capricorne donne au Bélier la discipline nécessaire pour atteindre un objectif à long terme. Ensemble, ils peuvent construire une vie ambitieuse, stable et tournée vers le progrès.",

    challenges:
      "Les deux signes veulent souvent diriger. Le Bélier recherche une victoire rapide, tandis que le Capricorne préfère contrôler le processus et obtenir un résultat durable. Leur rigidité peut créer des affrontements où aucun ne souhaite reconnaître l’autorité ou la compétence de l’autre.",

    advice:
      "Le Bélier doit respecter le rythme du Capricorne et comprendre que la prudence n’est pas nécessairement un refus. Le Capricorne gagne à laisser davantage de place à l’initiative et à l’improvisation. Ils doivent définir ensemble leurs objectifs, leurs responsabilités et les domaines dans lesquels chacun possède le dernier mot.",

    conclusion:
      "Bélier et Capricorne peuvent former un couple exigeant, mais extrêmement solide. Leur réussite dépend de leur capacité à unir l’audace du Bélier à la discipline du Capricorne. Lorsqu’ils cessent de rivaliser pour le contrôle, ils deviennent une équipe ambitieuse et capable de construire sur le long terme.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Verseau
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "verseau",

    score: 90,

    title:
      "Compatibilité amoureuse entre Bélier et Verseau",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Verseau : liberté, complicité, attraction, communication et potentiel du couple.",

    introduction:
      "Bélier et Verseau forment une combinaison dynamique, indépendante et tournée vers la nouveauté. Le Bélier possède l’énergie nécessaire pour lancer les projets, tandis que le Verseau apporte des idées originales et une vision différente. Leur relation peut être très stimulante lorsqu’elle respecte le besoin d’autonomie de chacun.",

    love:
      "Le Bélier apprécie le caractère imprévisible et libre du Verseau. Le Verseau est attiré par la spontanéité et le courage du Bélier. Leur amour peut commencer par une forte complicité ou une amitié stimulante. Ils ont toutefois intérêt à exprimer davantage leurs émotions afin que la relation ne repose pas uniquement sur les activités et les idées partagées.",

    communication:
      "Leur communication est généralement vivante, inventive et directe. Le Verseau aime explorer des concepts originaux, alors que le Bélier veut rapidement transformer les idées en actions. Leurs échanges peuvent produire de nombreux projets. Des tensions apparaissent si le Bélier exige une implication émotionnelle immédiate ou si le Verseau se réfugie dans la distance intellectuelle.",

    attraction:
      "L’attraction est alimentée par la surprise et la liberté. Le Bélier aime conquérir ce qui ne se laisse pas facilement définir, tandis que le Verseau apprécie un partenaire capable de suivre son rythme. Leur alchimie reste forte lorsque chacun conserve ses intérêts personnels et apporte régulièrement quelque chose de nouveau à la relation.",

    trust:
      "Le Verseau a besoin de liberté et peut résister aux attentes qu’il considère comme trop conventionnelles. Le Bélier peut accepter l’indépendance, mais veut savoir clairement où il se situe. La confiance grandit lorsque le Verseau communique ses intentions sans ambiguïté et que le Bélier évite de transformer son besoin de clarté en contrôle.",

    dailyLife:
      "Leur quotidien est rarement traditionnel. Ils aiment expérimenter, modifier leurs habitudes et suivre leurs propres règles. Cette souplesse peut être libératrice, mais elle demande une organisation minimale. Les responsabilités pratiques ne doivent pas être négligées simplement parce qu’elles paraissent moins stimulantes que leurs nouveaux projets.",

    strengths:
      "Bélier et Verseau encouragent l’individualité et l’innovation. Le Bélier donne au Verseau l’impulsion nécessaire pour concrétiser ses idées. Le Verseau aide le Bélier à envisager des solutions moins évidentes. Leur couple peut être créatif, moderne et capable de s’adapter rapidement aux changements.",

    challenges:
      "Le Bélier peut souhaiter davantage de chaleur ou de réactions immédiates, tandis que le Verseau peut prendre de la distance lorsqu’il se sent sous pression. Leurs fortes personnalités risquent également de créer des conflits autour de l’indépendance, des engagements et de la définition même du couple.",

    advice:
      "Ils doivent discuter ouvertement de leurs attentes plutôt que de supposer qu’ils partagent la même vision de la liberté. Le Bélier gagne à respecter les moments de recul du Verseau. Le Verseau doit offrir une présence affective suffisamment claire pour éviter que son indépendance soit interprétée comme de l’indifférence.",

    conclusion:
      "Bélier et Verseau possèdent une excellente compatibilité fondée sur l’énergie, l’originalité et le respect de l’autonomie. Leur relation peut rester stimulante pendant longtemps. Lorsqu’ils associent leur liberté à un engagement clairement défini, ils forment un couple inventif, complice et tourné vers l’avenir.",
  },

  /*
  |--------------------------------------------------------------------------
  | Bélier et Poissons
  |--------------------------------------------------------------------------
  */

  {
    signA: "belier",
    signB: "poissons",

    score: 55,

    title:
      "Compatibilité amoureuse entre Bélier et Poissons",

    metaDescription:
      "Découvrez la compatibilité amoureuse entre Bélier et Poissons : sensibilité, passion, communication, confiance et équilibre de cette union.",

    introduction:
      "Bélier et Poissons réunissent l’action instinctive et la sensibilité intuitive. Le Bélier avance avec franchise et détermination, tandis que les Poissons ressentent les atmosphères, perçoivent les nuances et suivent davantage leur monde intérieur. Cette relation peut être tendre et inspirante, mais elle demande une grande compréhension émotionnelle.",

    love:
      "Le Bélier exprime son amour par l’enthousiasme, la protection et les initiatives. Les Poissons offrent une affection douce, imaginative et profondément empathique. Le Bélier peut aider les Poissons à agir avec davantage de confiance. Les Poissons peuvent révéler au Bélier une dimension plus subtile de ses émotions et de ses besoins affectifs.",

    communication:
      "Le Bélier communique directement et peut s’impatienter devant les réponses vagues ou hésitantes. Les Poissons s’expriment souvent par impressions, émotions et sous-entendus. Ils peuvent se sentir blessés par une parole que le Bélier considérait simplement comme honnête. Une communication plus lente et plus précise est essentielle.",

    attraction:
      "L’attirance repose sur une différence intrigante. Le Bélier peut être touché par la douceur, la créativité et le mystère des Poissons. Les Poissons sont souvent attirés par la force et l’assurance du Bélier. Leur alchimie peut être romantique et intense lorsque le Bélier respecte la sensibilité de son partenaire.",

    trust:
      "Le Bélier souhaite généralement des réponses claires, alors que les Poissons peuvent avoir besoin de temps pour comprendre leurs propres sentiments. Cette différence peut créer de la confusion. La confiance se construit lorsque les Poissons expriment leurs limites avec franchise et que le Bélier évite les pressions, les ultimatums ou les réactions trop brusques.",

    dailyLife:
      "Le Bélier privilégie l’action et les résultats visibles. Les Poissons fonctionnent davantage selon l’inspiration et peuvent avoir besoin de périodes de retrait. Leur quotidien devient harmonieux lorsque le Bélier aide à structurer les projets sans tout contrôler et que les Poissons participent concrètement aux responsabilités du couple.",

    strengths:
      "Le Bélier apporte courage, direction et capacité à défendre la relation. Les Poissons offrent compassion, intuition et imagination. Ensemble, ils peuvent unir la force et la douceur. Le Bélier apprend à considérer davantage les émotions, tandis que les Poissons développent leur confiance et leur capacité d’action.",

    challenges:
      "Le Bélier peut considérer les Poissons comme trop indécis, sensibles ou difficiles à comprendre. Les Poissons peuvent percevoir le Bélier comme trop intense ou peu attentif aux nuances émotionnelles. Le risque principal est que le Bélier impose son rythme pendant que les Poissons évitent le conflit jusqu’à l’épuisement.",

    advice:
      "Le Bélier doit poser des questions avec douceur et laisser aux Poissons le temps de formuler leurs émotions. Les Poissons gagnent à exprimer clairement leurs besoins plutôt que d’espérer qu’ils soient devinés. Des projets créatifs, spirituels ou humanitaires peuvent renforcer leur sentiment de complémentarité.",

    conclusion:
      "Bélier et Poissons peuvent former un couple sensible, protecteur et profondément inspirant. Leur compatibilité demande des efforts, car ils ne perçoivent pas toujours les situations de la même façon. Lorsqu’ils associent la force du Bélier à l’intuition des Poissons, leur relation peut devenir aussi courageuse que tendre.",
  },
];

/*
|--------------------------------------------------------------------------
| Fonctions utilitaires
|--------------------------------------------------------------------------
*/

export function getSignByKey(
  key: SignKey,
) {
  return SIGNS.find(
    (sign) =>
      sign.key === key,
  );
}

export function getCompatibilityPage(
  signA: SignKey,
  signB: SignKey,
) {
  return COMPATIBILITY_PAGES.find(
    (page) =>
      page.signA === signA &&
      page.signB === signB,
  );
}

export function isSignKey(
  value: string,
): value is SignKey {
  return SIGNS.some(
    (sign) =>
      sign.key === value,
  );
}
