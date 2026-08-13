import type {
  PaidPdfLocale,
} from "./premium-localization";

type Dictionary = Record<string, string>;

const translations: Record<
  Exclude<PaidPdfLocale, "fr">,
  Dictionary
> = {
  en: {
    "Rythmes et habitudes": "Rhythms and habits",
    "Votre vie quotidienne": "Your daily life",
    "La compatibilité se construit aussi dans les horaires, les responsabilités, les habitudes et les petits gestes répétés.":
      "Compatibility is also built through schedules, responsibilities, habits, and the small gestures repeated every day.",
    "Partager le réel": "Sharing everyday life",
    "La Lune montre les habitudes et les besoins de confort, tandis que Saturne décrit l’organisation, les devoirs et la stabilité. Leur combinaison révèle comment vous pouvez créer un quotidien rassurant sans laisser la routine étouffer la relation.":
      "The Moon shows habits and the need for comfort, while Saturn describes organization, duties, and stability. Their combination reveals how you can create a reassuring daily life without letting routine suffocate the relationship.",
    "Vous pouvez bâtir des repères solides lorsque chacun participe concrètement et respecte le rythme naturel de l’autre.":
      "You can build solid foundations when each person contributes in practical ways and respects the other's natural rhythm.",
    "Les frustrations s’accumulent lorsque les tâches, les horaires ou la charge mentale semblent déséquilibrés.":
      "Frustrations can build when tasks, schedules, or the mental load feel unbalanced.",
    "Définissez clairement ce qui appartient à chacun et conservez aussi des moments spontanés qui ne servent aucun objectif pratique.":
      "Clearly define each person's responsibilities while preserving spontaneous moments that serve no practical purpose.",

    "Sécurité et appartenance": "Security and belonging",
    "Famille et foyer": "Family and home",
    "Le foyer représente l’endroit où le couple cherche protection, intimité, continuité et sentiment d’appartenance.":
      "Home represents the place where the couple seeks protection, intimacy, continuity, and a sense of belonging.",
    "Créer un refuge commun": "Creating a shared refuge",
    "La Lune décrit le besoin de sécurité émotionnelle et Vénus la manière de créer douceur, harmonie et plaisir. Ensemble, elles montrent comment le couple peut construire un climat familial chaleureux et respectueux.":
      "The Moon describes the need for emotional security, while Venus shows how tenderness, harmony, and pleasure are created. Together, they show how the couple can build a warm and respectful family atmosphere.",
    "La tendresse, l’écoute et les traditions partagées peuvent devenir une importante source de cohésion.":
      "Tenderness, attentive listening, and shared traditions can become an important source of cohesion.",
    "Les attentes familiales, les habitudes héritées ou les besoins de proximité peuvent différer davantage qu’il n’y paraît.":
      "Family expectations, inherited habits, or needs for closeness may differ more than they initially appear.",
    "Créez vos propres traditions au lieu de reproduire automatiquement celles de vos familles d’origine.":
      "Create your own traditions instead of automatically reproducing those of your families of origin.",

    "Dialogue dans le réel": "Dialogue in everyday life",
    "Communication approfondie": "Deeper communication",
    "Au-delà du style mental, cette page observe la manière dont vous discutez des décisions, des émotions et des sujets sensibles.":
      "Beyond mental style, this page explores how you discuss decisions, emotions, and sensitive subjects.",
    "Parler pour être compris": "Speaking to be understood",
    "Mercure organise les idées et les mots, tandis que la Lune réagit selon le ressenti. Leur interaction montre si le dialogue peut rejoindre l’émotion ou si la logique et la sensibilité ont besoin d’un pont plus conscient.":
      "Mercury organizes ideas and words, while the Moon reacts through feelings. Their interaction shows whether dialogue can reach the emotional level or whether logic and sensitivity need a more conscious bridge.",
    "Vous pouvez résoudre beaucoup de situations lorsque vous prenez le temps de distinguer les faits, les émotions et les attentes.":
      "You can resolve many situations when you take the time to distinguish facts, emotions, and expectations.",
    "Une discussion peut déraper lorsque l’un cherche une solution pendant que l’autre souhaite d’abord être entendu.":
      "A discussion can go off track when one person is looking for a solution while the other first wants to be heard.",
    "Avant de répondre, demandez : « Veux-tu une solution, un avis ou simplement être écouté ? »":
      "Before responding, ask: “Do you want a solution, an opinion, or simply to be heard?”",

    "Corps et proximité": "Body and closeness",
    "Sexualité et intimité": "Sexuality and intimacy",
    "L’intimité révèle comment désir, confiance, tendresse et vulnérabilité se rencontrent dans la relation.":
      "Intimacy reveals how desire, trust, tenderness, and vulnerability come together in the relationship.",
    "L’alchimie vécue": "Living the chemistry",
    "Vénus décrit la manière d’attirer, de recevoir et de créer le plaisir, tandis que Mars représente l’élan, l’initiative et le désir. Leur rencontre montre le rythme de l’attirance et la façon dont l’intimité peut rester vivante.":
      "Venus describes how you attract, receive, and create pleasure, while Mars represents drive, initiative, and desire. Their interaction reveals the rhythm of attraction and how intimacy can remain alive.",
    "Votre alchimie peut devenir un langage puissant de réconciliation, de confiance et de présence.":
      "Your chemistry can become a powerful language of reconciliation, trust, and presence.",
    "Les différences de rythme, de spontanéité ou de besoin affectif peuvent être mal interprétées comme un manque d’amour.":
      "Differences in rhythm, spontaneity, or emotional needs can be misinterpreted as a lack of love.",
    "Parlez ouvertement de vos besoins et de vos limites sans attendre qu’ils soient devinés.":
      "Speak openly about your needs and boundaries instead of expecting them to be guessed.",

    "Ressources et stabilité": "Resources and stability",
    "Argent et sécurité matérielle": "Money and material security",
    "Les finances mettent en lumière les valeurs, les priorités, le besoin de sécurité et la manière de prendre des décisions concrètes.":
      "Finances highlight values, priorities, the need for security, and the way practical decisions are made.",
    "Construire sans se limiter": "Building without limiting yourselves",
    "Vénus parle des valeurs et du plaisir, tandis que Saturne décrit la prudence, la responsabilité et le long terme. Leur interaction montre comment vous pouvez équilibrer dépenses, sécurité, projets et qualité de vie.":
      "Venus speaks of values and pleasure, while Saturn describes caution, responsibility, and the long term. Their interaction shows how you can balance spending, security, projects, and quality of life.",
    "Une vision claire et des objectifs partagés peuvent vous aider à construire une stabilité durable.":
      "A clear vision and shared goals can help you build lasting stability.",
    "L’un peut privilégier la sécurité alors que l’autre souhaite davantage profiter du présent ou investir dans des expériences.":
      "One person may prioritize security while the other wants to enjoy the present more or invest in experiences.",
    "Décidez ensemble d’un budget pour les obligations, l’épargne et le plaisir afin que personne ne se sente contrôlé ou négligé.":
      "Decide together on a budget for obligations, savings, and enjoyment so that neither person feels controlled or neglected.",

    "Ambition et réalisation": "Ambition and achievement",
    "Carrière et ambitions": "Career and ambitions",
    "Le couple influence la confiance, la motivation, les choix professionnels et la capacité à soutenir les objectifs de chacun.":
      "The relationship influences confidence, motivation, career choices, and the ability to support each other's goals.",
    "Grandir sans se rivaliser": "Growing without competing",
    "Le Soleil représente l’identité et l’accomplissement, tandis que Jupiter amplifie la confiance, l’ambition et la vision. Cette combinaison montre comment vous pouvez encourager la réussite sans transformer les objectifs personnels en compétition.":
      "The Sun represents identity and fulfillment, while Jupiter amplifies confidence, ambition, and vision. This combination shows how you can encourage success without turning personal goals into competition.",
    "Vous pouvez devenir une véritable équipe lorsque chacun célèbre les avancées de l’autre et partage ses ressources.":
      "You can become a true team when each person celebrates the other's progress and shares their resources.",
    "La réussite, le temps consacré au travail ou les différences d’ambition peuvent créer distance ou comparaison.":
      "Success, time devoted to work, or differences in ambition can create distance or comparison.",
    "Soutenez les projets personnels tout en protégeant des moments où la relation n’est pas reléguée au second plan.":
      "Support personal projects while protecting moments when the relationship is not pushed into the background.",

    "Vision commune": "Shared vision",
    "Vos projets de vie": "Your life plans",
    "Les projets communs donnent une direction au couple et transforment les aspirations individuelles en construction partagée.":
      "Shared projects give the relationship direction and transform individual aspirations into something you build together.",
    "Rêver et concrétiser": "Dreaming and making it real",
    "Jupiter ouvre les possibilités et Saturne donne une structure. Ensemble, ils montrent comment le couple peut transformer une idée en projet réel, à condition d’équilibrer enthousiasme, patience et responsabilité.":
      "Jupiter opens possibilities and Saturn provides structure. Together, they show how the couple can turn an idea into a real project by balancing enthusiasm, patience, and responsibility.",
    "Vous pouvez avancer loin lorsque l’un apporte la vision et l’autre la méthode, ou lorsque vous alternez naturellement ces rôles.":
      "You can go far when one person brings the vision and the other the method, or when you naturally alternate these roles.",
    "Le projet peut ralentir si l’un juge l’autre trop prudent, trop ambitieux ou insuffisamment engagé.":
      "A project can slow down if one person sees the other as too cautious, too ambitious, or insufficiently committed.",
    "Définissez une vision commune, puis divisez-la en étapes concrètes avec des responsabilités et des échéances réalistes.":
      "Define a shared vision, then divide it into concrete steps with responsibilities and realistic deadlines.",

    "Durée et évolution": "Longevity and growth",
    "Votre potentiel à long terme": "Your long-term potential",
    "La durée dépend moins d’une perfection immédiate que de la capacité à grandir, réparer, s’adapter et renouveler le lien.":
      "Longevity depends less on immediate perfection than on the ability to grow, repair, adapt, and renew the bond.",
    "Construire dans le temps": "Building over time",
    "Saturne décrit l’engagement et la résistance du lien, tandis que Jupiter représente l’évolution, l’espoir et la croissance. Leur équilibre révèle si le couple sait rester stable sans cesser d’avancer.":
      "Saturn describes commitment and the resilience of the bond, while Jupiter represents evolution, hope, and growth. Their balance reveals whether the couple can remain stable without stopping its progress.",
    "La relation peut durer lorsqu’elle conserve une direction, des engagements clairs et la capacité de créer de nouvelles expériences.":
      "The relationship can last when it maintains a sense of direction, clear commitments, and the ability to create new experiences.",
    "La stabilité peut devenir rigidité, tandis que le besoin de changement peut être vécu comme une menace.":
      "Stability can become rigidity, while the need for change can be experienced as a threat.",
    "Réévaluez régulièrement vos projets, vos besoins et vos règles de couple afin que l’engagement reste vivant plutôt que figé.":
      "Regularly reassess your plans, needs, and relationship rules so that commitment remains alive rather than becoming fixed.",

    "Cette interaction soutient la coopération et permet à cette dimension de la vie commune de se développer avec davantage de naturel.":
      "This interaction supports cooperation and allows this dimension of your shared life to develop more naturally.",
    "Cette connexion intensifie fortement ce thème et le rend particulièrement visible dans votre quotidien de couple.":
      "This connection strongly intensifies this theme and makes it particularly visible in your daily life as a couple.",
    "Cette tension demande des décisions claires et une meilleure répartition des besoins, des efforts ou des responsabilités.":
      "This tension calls for clear decisions and a better distribution of needs, efforts, or responsibilities.",
    "Cette polarité montre deux approches différentes qui peuvent devenir complémentaires lorsque chacune est reconnue.":
      "This polarity reveals two different approaches that can become complementary when each is acknowledged.",
    "Cette interaction demande des ajustements précis et une communication régulière pour éviter l’accumulation de frustration.":
      "This interaction requires specific adjustments and regular communication to prevent frustration from building up.",

    "Non précisé": "Not specified",
    "Position non disponible": "Position unavailable",
    "spontané et direct": "spontaneous and direct",
    "stable et concret": "stable and practical",
    "souple et curieux": "flexible and curious",
    "protecteur et sensible": "protective and sensitive",
    "chaleureux et affirmé": "warm and confident",
    "méthodique et pratique": "methodical and practical",
    "coopératif et diplomate": "cooperative and diplomatic",
    "profond et intense": "deep and intense",
    "enthousiaste et expansif": "enthusiastic and expansive",
    "responsable et structuré": "responsible and structured",
    "indépendant et original": "independent and original",
    "intuitif et réceptif": "intuitive and receptive",
    "personnel et nuancé": "personal and nuanced",
    "Première personne": "First person",
    "Deuxième personne": "Second person",
    "Influences astrologiques principales": "Main astrological influences",
    "Votre potentiel": "Your potential",
    "Votre point de vigilance": "Your point of attention",
    "Votre clé concrète": "Your practical key",
    "Rapport de synastrie": "Synastry report",
    "orbe": "orb",
    " en ": " in ",
    "fonctionnement ": "style: ",
  },

  es: {
    "Rythmes et habitudes": "Ritmos y hábitos",
    "Votre vie quotidienne": "Su vida cotidiana",
    "Sécurité et appartenance": "Seguridad y pertenencia",
    "Famille et foyer": "Familia y hogar",
    "Dialogue dans le réel": "Diálogo en la vida cotidiana",
    "Communication approfondie": "Comunicación profunda",
    "Corps et proximité": "Cuerpo y cercanía",
    "Sexualité et intimité": "Sexualidad e intimidad",
    "Ressources et stabilité": "Recursos y estabilidad",
    "Argent et sécurité matérielle": "Dinero y seguridad material",
    "Ambition et réalisation": "Ambición y realización",
    "Carrière et ambitions": "Carrera y ambiciones",
    "Vision commune": "Visión compartida",
    "Vos projets de vie": "Sus proyectos de vida",
    "Durée et évolution": "Duración y evolución",
    "Votre potentiel à long terme": "Su potencial a largo plazo",
    "Influences astrologiques principales": "Principales influencias astrológicas",
    "Votre potentiel": "Su potencial",
    "Votre point de vigilance": "Su punto de atención",
    "Votre clé concrète": "Su clave práctica",
    "Rapport de synastrie": "Informe de sinastría",
    "Première personne": "Primera persona",
    "Deuxième personne": "Segunda persona",
    "Non précisé": "No especificado",
    "Position non disponible": "Posición no disponible",
    "orbe": "orbe",
    " en ": " en ",
    "fonctionnement ": "estilo: ",
  },

  de: {
    "Rythmes et habitudes": "Rhythmen und Gewohnheiten",
    "Votre vie quotidienne": "Ihr Alltag",
    "Sécurité et appartenance": "Sicherheit und Zugehörigkeit",
    "Famille et foyer": "Familie und Zuhause",
    "Dialogue dans le réel": "Dialog im Alltag",
    "Communication approfondie": "Vertiefte Kommunikation",
    "Corps et proximité": "Körper und Nähe",
    "Sexualité et intimité": "Sexualität und Intimität",
    "Ressources et stabilité": "Ressourcen und Stabilität",
    "Argent et sécurité matérielle": "Geld und materielle Sicherheit",
    "Ambition et réalisation": "Ehrgeiz und Verwirklichung",
    "Carrière et ambitions": "Karriere und Ambitionen",
    "Vision commune": "Gemeinsame Vision",
    "Vos projets de vie": "Ihre Lebenspläne",
    "Durée et évolution": "Beständigkeit und Entwicklung",
    "Votre potentiel à long terme": "Ihr langfristiges Potenzial",
    "Influences astrologiques principales": "Wichtigste astrologische Einflüsse",
    "Votre potentiel": "Ihr Potenzial",
    "Votre point de vigilance": "Ihr Augenmerk",
    "Votre clé concrète": "Ihr praktischer Schlüssel",
    "Rapport de synastrie": "Synastrie-Bericht",
    "Première personne": "Erste Person",
    "Deuxième personne": "Zweite Person",
    "Non précisé": "Nicht angegeben",
    "Position non disponible": "Position nicht verfügbar",
    "orbe": "Orb",
    " en ": " in ",
    "fonctionnement ": "Stil: ",
  },

  it: {
    "Rythmes et habitudes": "Ritmi e abitudini",
    "Votre vie quotidienne": "La vostra vita quotidiana",
    "Sécurité et appartenance": "Sicurezza e appartenenza",
    "Famille et foyer": "Famiglia e casa",
    "Dialogue dans le réel": "Dialogo nella vita quotidiana",
    "Communication approfondie": "Comunicazione profonda",
    "Corps et proximité": "Corpo e vicinanza",
    "Sexualité et intimité": "Sessualità e intimità",
    "Ressources et stabilité": "Risorse e stabilità",
    "Argent et sécurité matérielle": "Denaro e sicurezza materiale",
    "Ambition et réalisation": "Ambizione e realizzazione",
    "Carrière et ambitions": "Carriera e ambizioni",
    "Vision commune": "Visione condivisa",
    "Vos projets de vie": "I vostri progetti di vita",
    "Durée et évolution": "Durata ed evoluzione",
    "Votre potentiel à long terme": "Il vostro potenziale a lungo termine",
    "Influences astrologiques principales": "Principali influenze astrologiche",
    "Votre potentiel": "Il vostro potenziale",
    "Votre point de vigilance": "Il vostro punto di attenzione",
    "Votre clé concrète": "La vostra chiave pratica",
    "Rapport de synastrie": "Rapporto di sinastria",
    "Première personne": "Prima persona",
    "Deuxième personne": "Seconda persona",
    "Non précisé": "Non specificato",
    "Position non disponible": "Posizione non disponibile",
    "orbe": "orbe",
    " en ": " in ",
    "fonctionnement ": "stile: ",
  },

  pt: {
    "Rythmes et habitudes": "Ritmos e hábitos",
    "Votre vie quotidienne": "Sua vida cotidiana",
    "Sécurité et appartenance": "Segurança e pertencimento",
    "Famille et foyer": "Família e lar",
    "Dialogue dans le réel": "Diálogo na vida cotidiana",
    "Communication approfondie": "Comunicação aprofundada",
    "Corps et proximité": "Corpo e proximidade",
    "Sexualité et intimité": "Sexualidade e intimidade",
    "Ressources et stabilité": "Recursos e estabilidade",
    "Argent et sécurité matérielle": "Dinheiro e segurança material",
    "Ambition et réalisation": "Ambição e realização",
    "Carrière et ambitions": "Carreira e ambições",
    "Vision commune": "Visão compartilhada",
    "Vos projets de vie": "Seus projetos de vida",
    "Durée et évolution": "Duração e evolução",
    "Votre potentiel à long terme": "Seu potencial a longo prazo",
    "Influences astrologiques principales": "Principais influências astrológicas",
    "Votre potentiel": "Seu potencial",
    "Votre point de vigilance": "Seu ponto de atenção",
    "Votre clé concrète": "Sua chave prática",
    "Rapport de synastrie": "Relatório de sinastria",
    "Première personne": "Primeira pessoa",
    "Deuxième personne": "Segunda pessoa",
    "Non précisé": "Não especificado",
    "Position non disponible": "Posição indisponível",
    "orbe": "orbe",
    " en ": " em ",
    "fonctionnement ": "estilo: ",
  },
};

function replaceAllLiteral(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

export function localizeCompatibilityLife(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const dictionary = translations[locale];

  let localized = source;

  for (const [from, to] of Object.entries(
    dictionary,
  )) {
    localized = replaceAllLiteral(
      localized,
      from,
      to,
    );
  }

  return localized;
}
