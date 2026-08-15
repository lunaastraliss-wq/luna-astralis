import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type LocaleData = {
  text: Record<string, string>;

  planets: Record<string, string>;

  aspects: Record<string, string>;

  nature: Record<string, string>;

  degreeWord: string;

  aspectSingular: string;

  aspectPlural: string;

  ofThisType: string;

  closestOrb: string;

  conjunctionSingular: string;

  conjunctionPlural: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  /* =========================================================
     ENGLISH
  ========================================================= */

  en: {
    text: {
      "Première personne":
        "First person",

      "Deuxième personne":
        "Second person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry Report",

      /* -----------------------------------------------------
         CONJUNCTION
      ----------------------------------------------------- */

      "Fusion des énergies":
        "Fusion of energies",

      "Vos conjonctions":
        "Your conjunctions",

      "La conjonction réunit deux planètes dans une même zone et intensifie fortement leur interaction.":
        "A conjunction brings two planets together in the same area and strongly intensifies their interaction.",

      "Une énergie concentrée":
        "Concentrated energy",

      "Les conjonctions créent des liens puissants, immédiats et difficiles à ignorer. Elles peuvent donner un sentiment de familiarité ou d’évidence, mais elles amplifient également les qualités et les tensions des planètes concernées.":
        "Conjunctions create powerful, immediate connections that are difficult to ignore. They can create a feeling of familiarity or obvious connection, while also amplifying the qualities and tensions of the planets involved.",

      "Elles favorisent la proximité, la reconnaissance mutuelle et une forte concentration d’énergie autour de certains thèmes du couple.":
        "They encourage closeness, mutual recognition, and a strong concentration of energy around certain themes in the relationship.",

      "L’intensité peut devenir excessive lorsque les deux énergies se renforcent sans distance, recul ou espace personnel.":
        "The intensity can become excessive when both energies reinforce one another without enough distance, perspective, or personal space.",

      "Utilisez la puissance des conjonctions pour construire ensemble, tout en laissant chacun respirer et conserver son identité.":
        "Use the power of conjunctions to build together while allowing each person enough space to breathe and preserve their identity.",

      /* -----------------------------------------------------
         TRINE
      ----------------------------------------------------- */

      "Harmonie naturelle":
        "Natural harmony",

      "Vos trigones":
        "Your trines",

      "Le trigone relie des énergies compatibles et révèle les talents qui circulent facilement entre vous.":
        "A trine connects compatible energies and reveals talents that flow easily between you.",

      "Une facilité spontanée":
        "Natural ease",

      "Les trigones montrent les domaines où la relation peut sembler simple, fluide et naturelle. Ils soutiennent la confiance, la coopération et le sentiment que certaines choses se comprennent sans effort.":
        "Trines reveal the areas where the relationship can feel simple, flowing, and natural. They support trust, cooperation, and the feeling that certain things are understood without effort.",

      "Ils facilitent la confiance, l’entraide et la capacité à retrouver rapidement une harmonie après les périodes plus exigeantes.":
        "They facilitate trust, mutual support, and the ability to quickly restore harmony after more demanding periods.",

      "Une facilité constante peut être tenue pour acquise ou devenir passive si le couple ne cherche plus à nourrir consciemment ses qualités.":
        "Constant ease can be taken for granted or become passive if the relationship no longer consciously nurtures its strengths.",

      "Reconnaissez vos talents naturels et utilisez-les comme fondation pour traverser les défis plus complexes.":
        "Recognize your natural strengths and use them as a foundation for navigating more complex challenges.",

      /* -----------------------------------------------------
         SEXTILE
      ----------------------------------------------------- */

      "Opportunités de croissance":
        "Growth opportunities",

      "Vos sextiles":
        "Your sextiles",

      "Le sextile ouvre des portes et montre ce que le couple peut développer par la curiosité, l’initiative et la coopération.":
        "A sextile opens doors and shows what the relationship can develop through curiosity, initiative, and cooperation.",

      "Un potentiel à activer":
        "Potential to activate",

      "Les sextiles sont harmonieux, mais ils demandent une participation consciente. Ils montrent les occasions d’apprendre, de créer et de faire évoluer la relation lorsque chacun accepte de faire un pas vers l’autre.":
        "Sextiles are harmonious, but they require conscious participation. They reveal opportunities to learn, create, and develop the relationship when each person is willing to move toward the other.",

      "Ils offrent de nombreuses possibilités de dialogue, de collaboration et d’enrichissement mutuel.":
        "They offer many opportunities for dialogue, collaboration, and mutual enrichment.",

      "Le potentiel peut rester inutilisé si le couple attend que les choses se développent seules sans initiative ni engagement.":
        "This potential may remain unused if the relationship simply waits for things to develop without initiative or commitment.",

      "Transformez les possibilités en habitudes concrètes : projets partagés, nouvelles expériences et temps de qualité.":
        "Turn possibilities into concrete habits: shared projects, new experiences, and quality time.",

      /* -----------------------------------------------------
         SQUARE
      ----------------------------------------------------- */

      "Tensions créatrices":
        "Creative tensions",

      "Vos carrés":
        "Your squares",

      "Le carré confronte deux énergies qui cherchent à agir différemment et pousse la relation à évoluer.":
        "A square brings two energies into conflict because they seek to act differently, pushing the relationship to evolve.",

      "Une tension qui demande une réponse":
        "A tension that requires a response",

      "Les carrés révèlent les domaines où les réactions sont rapides, défensives ou contradictoires. Ils peuvent créer des conflits, mais ils donnent aussi au couple l’énergie nécessaire pour changer, décider et dépasser certains automatismes.":
        "Squares reveal areas where reactions can be quick, defensive, or contradictory. They can create conflict, but they also give the relationship the energy needed to change, make decisions, and move beyond automatic patterns.",

      "Ils empêchent la relation de stagner et peuvent développer courage, franchise, maturité et capacité à résoudre les problèmes.":
        "They prevent the relationship from stagnating and can develop courage, honesty, maturity, and problem-solving ability.",

      "Les mêmes désaccords peuvent revenir si chacun défend uniquement sa position sans chercher le besoin profond derrière la réaction.":
        "The same disagreements can return if each person only defends their position without identifying the deeper need behind the reaction.",

      "Ne cherchez pas immédiatement un coupable. Identifiez plutôt les deux besoins légitimes qui entrent en collision.":
        "Do not immediately look for someone to blame. Instead, identify the two legitimate needs that are colliding.",

      /* -----------------------------------------------------
         OPPOSITION
      ----------------------------------------------------- */

      "Attraction des contraires":
        "Attraction of opposites",

      "Vos oppositions":
        "Your oppositions",

      "L’opposition place deux énergies face à face et crée une forte attraction accompagnée d’un besoin d’équilibre.":
        "An opposition places two energies face to face and creates strong attraction together with a need for balance.",

      "Deux pôles d’un même axe":
        "Two poles of the same axis",

      "Les oppositions montrent des différences visibles qui peuvent fasciner autant qu’elles déstabilisent. Chacun peut porter une qualité que l’autre doit apprendre à reconnaître, intégrer ou respecter.":
        "Oppositions reveal visible differences that can fascinate as much as they destabilize. Each person may embody a quality that the other needs to recognize, integrate, or respect.",

      "Elles apportent complémentarité, perspective et capacité à voir une situation depuis deux angles opposés.":
        "They bring complementarity, perspective, and the ability to see a situation from two opposing viewpoints.",

      "Le couple peut tomber dans une dynamique où chacun projette sur l’autre ce qu’il refuse ou comprend moins bien en lui-même.":
        "The relationship may fall into a dynamic where each person projects onto the other what they reject or understand less well within themselves.",

      "Cherchez le point d’équilibre entre vos deux positions plutôt que d’essayer de prouver qu’une seule manière est correcte.":
        "Look for the balance between your two positions rather than trying to prove that only one approach is correct.",

      /* -----------------------------------------------------
         QUINCUNX
      ----------------------------------------------------- */

      "Ajustements subtils":
        "Subtle adjustments",

      "Vos quinconces":
        "Your quincunxes",

      "Le quinconce relie des énergies qui ne parlent pas immédiatement le même langage et nécessitent des adaptations répétées.":
        "A quincunx connects energies that do not immediately speak the same language and therefore require repeated adjustments.",

      "Comprendre ce qui échappe":
        "Understanding what is difficult to grasp",

      "Les quinconces créent souvent un sentiment d’incompréhension difficile à expliquer. Il ne s’agit pas toujours d’un conflit direct, mais plutôt d’un décalage de rythme, de priorité ou de manière d’interpréter les événements.":
        "Quincunxes often create a difficult-to-explain feeling of misunderstanding. It is not always a direct conflict, but rather a difference in rhythm, priorities, or interpretation of events.",

      "Ils développent l’adaptabilité, la patience et une compréhension plus fine des différences individuelles.":
        "They develop adaptability, patience, and a more nuanced understanding of individual differences.",

      "La frustration peut s’accumuler si les ajustements sont toujours faits par la même personne ou si les besoins restent implicites.":
        "Frustration can build when adjustments are always made by the same person or when needs remain unspoken.",

      "Formulez précisément ce qui doit être ajusté et vérifiez régulièrement que l’effort demeure équilibré entre vous.":
        "Clearly express what needs to be adjusted and regularly check that the effort remains balanced between you.",

      /* -----------------------------------------------------
         COMMON ASPECT PAGE
      ----------------------------------------------------- */

      "Intensification":
        "Intensification",

      "Opportunité":
        "Opportunity",

      "Tension créatrice":
        "Creative tension",

      "Polarité":
        "Polarity",

      "Ajustement":
        "Adjustment",

      "Vos aspects les plus importants":
        "Your most important aspects",

      "Aucun aspect de ce type n’apparaît parmi les interactions principales calculées pour vos deux thèmes. Cela ne signifie pas que cette énergie est absente de votre relation, seulement qu’elle n’est pas dominante dans les aspects retenus.":
        "No aspect of this type appears among the main interactions calculated for your two charts. This does not mean that this energy is absent from your relationship, only that it is not dominant among the selected aspects.",

      "Votre potentiel":
        "Your potential",

      "Votre point de vigilance":
        "Your point of attention",

      "Votre clé d’intégration":
        "Your key to integration",

      /* -----------------------------------------------------
         TOP 10
      ----------------------------------------------------- */

      "Classement général":
        "Overall ranking",

      "Vos 10 aspects les plus puissants":
        "Your 10 most powerful aspects",

      "Plus l’orbe est précis, plus l’interaction entre les deux planètes tend à se manifester clairement dans la dynamique relationnelle.":
        "The tighter the orb, the more clearly the interaction between the two planets tends to manifest in the relationship dynamic.",

      "Les connexions dominantes":
        "The dominant connections",

      "Ce classement rassemble les aspects les plus précis de votre synastrie. Ils ne sont pas nécessairement tous faciles ou difficiles : ils représentent surtout les interactions les plus présentes, les plus répétitives ou les plus significatives dans votre lien.":
        "This ranking brings together the closest aspects in your synastry. They are not necessarily all easy or difficult: above all, they represent the interactions that are most present, repetitive, or significant in your bond.",

      "Aucun aspect n’est disponible pour établir ce classement. Vérifiez que les deux thèmes ont été calculés avec les positions planétaires complètes.":
        "No aspects are available to establish this ranking. Check that both charts were calculated with complete planetary positions.",

      /* -----------------------------------------------------
         BALANCE PAGE
      ----------------------------------------------------- */

      "Lecture globale":
        "Overall reading",

      "La dynamique générale de vos aspects":
        "The overall dynamic of your aspects",

      "Votre relation se construit dans l’équilibre entre facilités, tensions, intensité et capacité d’ajustement.":
        "Your relationship develops through the balance between ease, tension, intensity, and the ability to adjust.",

      "aspects harmonieux":
        "harmonious aspects",

      "aspects d’évolution":
        "growth aspects",

      "aspects analysés":
        "aspects analyzed",

      "Vos appuis naturels":
        "Your natural strengths",

      "Les trigones et sextiles montrent les domaines où la relation peut retrouver plus facilement confiance, complicité et coopération. Ils constituent vos ressources les plus stables.":
        "Trines and sextiles reveal the areas where the relationship can more easily regain trust, closeness, and cooperation. They are among your most stable resources.",

      "Vos moteurs d’évolution":
        "Your drivers of growth",

      "Les carrés, oppositions et quinconces révèlent les zones où la relation vous demande davantage de conscience, d’ajustement et de maturité.":
        "Squares, oppositions, and quincunxes reveal the areas where the relationship requires greater awareness, adjustment, and maturity.",

      "Votre intensité":
        "Your intensity",

      "Votre équilibre":
        "Your balance",

      "Une relation riche ne repose pas sur l’absence de tension. Elle repose sur la capacité à utiliser les aspects harmonieux pour mieux traverser les aspects qui demandent un effort.":
        "A rich relationship is not based on the absence of tension. It depends on the ability to use harmonious aspects to better navigate those that require effort.",

      "La clé de votre synastrie":
        "The key to your synastry",

      "Vos aspects racontent une relation dynamique, composée de facilités, d’intensité et d’apprentissages. Les aspects harmonieux montrent où vous pouvez vous appuyer l’un sur l’autre. Les aspects difficiles indiquent les endroits précis où le couple gagne en profondeur lorsqu’il choisit le dialogue, la responsabilité et l’adaptation.":
        "Your aspects describe a dynamic relationship made up of ease, intensity, and learning. Harmonious aspects show where you can rely on one another. Challenging aspects identify the precise areas where the relationship gains depth when you choose dialogue, responsibility, and adaptation.",

      "Votre conseil final":
        "Your final guidance",

      "Lorsque vous rencontrez une difficulté, cherchez d’abord quel aspect harmonieux peut vous aider : la communication, la tendresse, la patience, l’humour ou un projet commun. Vos forces naturelles sont les meilleurs outils pour intégrer vos tensions.":
        "When you encounter a difficulty, first identify which harmonious strength can help you: communication, tenderness, patience, humor, or a shared project. Your natural strengths are your best tools for integrating tension.",

      /* -----------------------------------------------------
         ASPECT INTERPRETATIONS
      ----------------------------------------------------- */

      "L’identité de l’un soutient les besoins émotionnels de l’autre, favorisant reconnaissance, sécurité et compréhension.":
        "One person's identity supports the other's emotional needs, encouraging recognition, security, and understanding.",

      "L’expression personnelle de l’un peut parfois heurter la sensibilité ou les besoins affectifs de l’autre.":
        "One person's self-expression can sometimes hurt the other's sensitivity or emotional needs.",

      "Cette connexion lie fortement identité et sensibilité, créant une impression de familiarité et de reconnaissance.":
        "This connection strongly links identity and sensitivity, creating a feeling of familiarity and recognition.",

      "L’affection et le désir circulent avec naturel, renforçant attraction, charme, sensualité et initiative.":
        "Affection and desire flow naturally, strengthening attraction, charm, sensuality, and initiative.",

      "L’attirance peut être intense, mais les rythmes amoureux ou les manières d’exprimer le désir peuvent entrer en tension.":
        "Attraction can be intense, but romantic rhythms or ways of expressing desire may come into tension.",

      "Cette interaction intensifie l’alchimie, l’attirance et le besoin de vivre la relation de manière concrète.":
        "This interaction intensifies chemistry, attraction, and the desire to experience the relationship in a tangible way.",

      "La tendresse répond facilement aux besoins affectifs et favorise douceur, réconfort et plaisir d’être ensemble.":
        "Tenderness responds easily to emotional needs and encourages gentleness, comfort, and enjoyment of being together.",

      "La manière de donner de l’amour ne correspond pas toujours exactement au besoin émotionnel de l’autre.":
        "The way love is expressed may not always exactly match the other person's emotional needs.",

      "Cette connexion renforce l’attachement, la douceur et le besoin de prendre soin de la relation.":
        "This connection strengthens attachment, tenderness, and the desire to care for the relationship.",

      "Les idées et les mots trouvent plus facilement leur chemin, ce qui favorise dialogue, décisions et compréhension.":
        "Ideas and words find their way more easily, supporting dialogue, decisions, and understanding.",

      "Les raisonnements, le ton ou la vitesse des échanges peuvent créer des malentendus et des réactions défensives.":
        "Reasoning, tone, or the speed of communication can create misunderstandings and defensive reactions.",

      "La communication devient un élément central de la relation et influence fortement la manière de résoudre les situations.":
        "Communication becomes a central part of the relationship and strongly influences how situations are resolved.",

      "Saturne apporte stabilité, fiabilité et capacité à construire dans le temps avec sérieux et constance.":
        "Saturn brings stability, reliability, and the ability to build over time with seriousness and consistency.",

      "L’un peut parfois se sentir limité, jugé ou ralenti, tandis que l’autre porte davantage de responsabilités.":
        "One person may sometimes feel restricted, judged, or slowed down, while the other carries more responsibility.",

      "Cette connexion souligne les thèmes d’engagement, de durée, de maturité et de responsabilité.":
        "This connection emphasizes themes of commitment, longevity, maturity, and responsibility.",

      "Uranus apporte fraîcheur, liberté, créativité et capacité à renouveler la relation.":
        "Uranus brings freshness, freedom, creativity, and the ability to renew the relationship.",

      "L’imprévisibilité ou le besoin d’espace peut créer de l’instabilité et un sentiment d’insécurité.":
        "Unpredictability or the need for space can create instability and a feeling of insecurity.",

      "Cette interaction rend la relation stimulante, originale et difficile à enfermer dans une routine rigide.":
        "This interaction makes the relationship stimulating, original, and difficult to confine within a rigid routine.",

      "Neptune soutient compassion, intuition, imagination et sentiment d’une connexion subtile.":
        "Neptune supports compassion, intuition, imagination, and a feeling of subtle connection.",

      "L’idéalisation, les attentes implicites ou le manque de clarté peuvent créer confusion et déception.":
        "Idealization, unspoken expectations, or lack of clarity can create confusion and disappointment.",

      "Cette connexion colore la relation de sensibilité, de rêve, d’intuition et parfois d’idéalisation.":
        "This connection gives the relationship sensitivity, dreams, intuition, and sometimes idealization.",

      "Pluton favorise profondeur, transformation, guérison et capacité à traverser ensemble des périodes intenses.":
        "Pluto encourages depth, transformation, healing, and the ability to move through intense periods together.",

      "Des enjeux de contrôle, de jalousie, de peur de perdre ou de pouvoir peuvent devenir très sensibles.":
        "Issues involving control, jealousy, fear of loss, or power can become highly sensitive.",

      "Cette interaction intensifie fortement le lien et pousse chacun à transformer certaines zones profondes.":
        "This interaction strongly intensifies the bond and encourages each person to transform deeper inner areas.",

      "Cette interaction soutient naturellement l’expression personnelle, l’attachement, l’émotion ou le désir.":
        "This interaction naturally supports personal expression, attachment, emotion, or desire.",

      "Cette connexion demande de mieux comprendre les réactions personnelles, affectives ou instinctives de chacun.":
        "This connection requires a better understanding of each person's personal, emotional, or instinctive reactions.",

      "Cette interaction joue un rôle important dans la manière dont vous vous reconnaissez et réagissez l’un à l’autre.":
        "This interaction plays an important role in how you recognize and respond to one another.",

      "Cet aspect influence votre dynamique relationnelle et montre comment deux fonctions planétaires cherchent à coopérer, se confronter ou s’ajuster.":
        "This aspect influences your relationship dynamic and shows how two planetary functions seek to cooperate, confront one another, or adjust.",
    },

    planets: {
      Soleil: "Sun",
      Lune: "Moon",
      Mercure: "Mercury",
      Vénus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturne: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptune",
      Pluton: "Pluto",
    },

    aspects: {
      Conjonction: "Conjunction",
      Trigone: "Trine",
      Sextile: "Sextile",
      Carré: "Square",
      Opposition: "Opposition",
      Quinconce: "Quincunx",
    },

    nature: {
      Intensification: "Intensification",
      "Harmonie naturelle":
        "Natural harmony",
      Opportunité: "Opportunity",
      "Tension créatrice":
        "Creative tension",
      Polarité: "Polarity",
      Ajustement: "Adjustment",
    },

    degreeWord: "deg",

    aspectSingular: "aspect",
    aspectPlural: "aspects",

    ofThisType: "of this type",

    closestOrb: "closest orb",

    conjunctionSingular:
      "conjunction",

    conjunctionPlural:
      "conjunctions",
  },

  /* =========================================================
     ESPAÑOL
  ========================================================= */

  es: {
    text: {
      "Première personne":
        "Primera persona",

      "Deuxième personne":
        "Segunda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",

      "Fusion des énergies":
        "Fusión de energías",

      "Vos conjonctions":
        "Sus conjunciones",

      "La conjonction réunit deux planètes dans une même zone et intensifie fortement leur interaction.":
        "La conjunción reúne dos planetas en una misma zona e intensifica fuertemente su interacción.",

      "Une énergie concentrée":
        "Una energía concentrada",

      "Les conjonctions créent des liens puissants, immédiats et difficiles à ignorer. Elles peuvent donner un sentiment de familiarité ou d’évidence, mais elles amplifient également les qualités et les tensions des planètes concernées.":
        "Las conjunciones crean vínculos poderosos, inmediatos y difíciles de ignorar. Pueden generar una sensación de familiaridad o evidencia, pero también amplifican las cualidades y tensiones de los planetas implicados.",

      "Elles favorisent la proximité, la reconnaissance mutuelle et une forte concentration d’énergie autour de certains thèmes du couple.":
        "Favorecen la cercanía, el reconocimiento mutuo y una fuerte concentración de energía alrededor de ciertos temas de la relación.",

      "L’intensité peut devenir excessive lorsque les deux énergies se renforcent sans distance, recul ou espace personnel.":
        "La intensidad puede volverse excesiva cuando ambas energías se refuerzan sin distancia, perspectiva o espacio personal.",

      "Utilisez la puissance des conjonctions pour construire ensemble, tout en laissant chacun respirer et conserver son identité.":
        "Utilicen la fuerza de las conjunciones para construir juntos, dejando al mismo tiempo que cada persona respire y conserve su identidad.",

      "Harmonie naturelle":
        "Armonía natural",

      "Vos trigones":
        "Sus trígonos",

      "Le trigone relie des énergies compatibles et révèle les talents qui circulent facilement entre vous.":
        "El trígono conecta energías compatibles y revela los talentos que fluyen fácilmente entre ustedes.",

      "Une facilité spontanée":
        "Una facilidad espontánea",

      "Les trigones montrent les domaines où la relation peut sembler simple, fluide et naturelle. Ils soutiennent la confiance, la coopération et le sentiment que certaines choses se comprennent sans effort.":
        "Los trígonos muestran las áreas donde la relación puede sentirse sencilla, fluida y natural. Favorecen la confianza, la cooperación y la sensación de que ciertas cosas se comprenden sin esfuerzo.",

      "Ils facilitent la confiance, l’entraide et la capacité à retrouver rapidement une harmonie après les périodes plus exigeantes.":
        "Facilitan la confianza, la ayuda mutua y la capacidad de recuperar rápidamente la armonía después de períodos más exigentes.",

      "Une facilité constante peut être tenue pour acquise ou devenir passive si le couple ne cherche plus à nourrir consciemment ses qualités.":
        "Una facilidad constante puede darse por sentada o volverse pasiva si la relación deja de cultivar conscientemente sus cualidades.",

      "Reconnaissez vos talents naturels et utilisez-les comme fondation pour traverser les défis plus complexes.":
        "Reconozcan sus talentos naturales y utilícenlos como base para atravesar los desafíos más complejos.",

      "Opportunités de croissance":
        "Oportunidades de crecimiento",

      "Vos sextiles":
        "Sus sextiles",

      "Le sextile ouvre des portes et montre ce que le couple peut développer par la curiosité, l’initiative et la coopération.":
        "El sextil abre puertas y muestra lo que la relación puede desarrollar mediante la curiosidad, la iniciativa y la cooperación.",

      "Un potentiel à activer":
        "Un potencial por activar",

      "Les sextiles sont harmonieux, mais ils demandent une participation consciente. Ils montrent les occasions d’apprendre, de créer et de faire évoluer la relation lorsque chacun accepte de faire un pas vers l’autre.":
        "Los sextiles son armoniosos, pero requieren una participación consciente. Muestran oportunidades para aprender, crear y hacer evolucionar la relación cuando cada persona acepta acercarse a la otra.",

      "Ils offrent de nombreuses possibilités de dialogue, de collaboration et d’enrichissement mutuel.":
        "Ofrecen numerosas posibilidades de diálogo, colaboración y enriquecimiento mutuo.",

      "Le potentiel peut rester inutilisé si le couple attend que les choses se développent seules sans initiative ni engagement.":
        "El potencial puede quedar sin utilizar si la relación espera que las cosas evolucionen por sí solas, sin iniciativa ni compromiso.",

      "Transformez les possibilités en habitudes concrètes : projets partagés, nouvelles expériences et temps de qualité.":
        "Transformen las posibilidades en hábitos concretos: proyectos compartidos, nuevas experiencias y tiempo de calidad.",

      "Tensions créatrices":
        "Tensiones creativas",

      "Vos carrés":
        "Sus cuadraturas",

      "Le carré confronte deux énergies qui cherchent à agir différemment et pousse la relation à évoluer.":
        "La cuadratura enfrenta dos energías que buscan actuar de manera diferente y empuja a la relación a evolucionar.",

      "Une tension qui demande une réponse":
        "Una tensión que requiere una respuesta",

      "Les carrés révèlent les domaines où les réactions sont rapides, défensives ou contradictoires. Ils peuvent créer des conflits, mais ils donnent aussi au couple l’énergie nécessaire pour changer, décider et dépasser certains automatismes.":
        "Las cuadraturas revelan las áreas donde las reacciones pueden ser rápidas, defensivas o contradictorias. Pueden generar conflictos, pero también proporcionan la energía necesaria para cambiar, decidir y superar ciertos automatismos.",

      "Ils empêchent la relation de stagner et peuvent développer courage, franchise, maturité et capacité à résoudre les problèmes.":
        "Impiden que la relación se estanque y pueden desarrollar valentía, franqueza, madurez y capacidad para resolver problemas.",

      "Les mêmes désaccords peuvent revenir si chacun défend uniquement sa position sans chercher le besoin profond derrière la réaction.":
        "Los mismos desacuerdos pueden repetirse si cada persona defiende únicamente su posición sin buscar la necesidad profunda que hay detrás de la reacción.",

      "Ne cherchez pas immédiatement un coupable. Identifiez plutôt les deux besoins légitimes qui entrent en collision.":
        "No busquen inmediatamente un culpable. Identifiquen más bien las dos necesidades legítimas que están entrando en conflicto.",

      "Attraction des contraires":
        "Atracción de los opuestos",

      "Vos oppositions":
        "Sus oposiciones",

      "L’opposition place deux énergies face à face et crée une forte attraction accompagnée d’un besoin d’équilibre.":
        "La oposición coloca dos energías frente a frente y crea una fuerte atracción acompañada de una necesidad de equilibrio.",

      "Deux pôles d’un même axe":
        "Dos polos de un mismo eje",

      "Les oppositions montrent des différences visibles qui peuvent fasciner autant qu’elles déstabilisent. Chacun peut porter une qualité que l’autre doit apprendre à reconnaître, intégrer ou respecter.":
        "Las oposiciones muestran diferencias visibles que pueden fascinar tanto como desestabilizar. Cada persona puede representar una cualidad que la otra necesita aprender a reconocer, integrar o respetar.",

      "Elles apportent complémentarité, perspective et capacité à voir une situation depuis deux angles opposés.":
        "Aportan complementariedad, perspectiva y capacidad para observar una situación desde dos ángulos opuestos.",

      "Le couple peut tomber dans une dynamique où chacun projette sur l’autre ce qu’il refuse ou comprend moins bien en lui-même.":
        "La relación puede caer en una dinámica donde cada persona proyecta sobre la otra aquello que rechaza o comprende menos de sí misma.",

      "Cherchez le point d’équilibre entre vos deux positions plutôt que d’essayer de prouver qu’une seule manière est correcte.":
        "Busquen el punto de equilibrio entre sus dos posiciones en lugar de intentar demostrar que solo una forma es correcta.",

      "Ajustements subtils":
        "Ajustes sutiles",

      "Vos quinconces":
        "Sus quincuncios",

      "Le quinconce relie des énergies qui ne parlent pas immédiatement le même langage et nécessitent des adaptations répétées.":
        "El quincuncio conecta energías que no hablan inmediatamente el mismo lenguaje y requieren adaptaciones repetidas.",

      "Comprendre ce qui échappe":
        "Comprender lo que se escapa",

      "Les quinconces créent souvent un sentiment d’incompréhension difficile à expliquer. Il ne s’agit pas toujours d’un conflit direct, mais plutôt d’un décalage de rythme, de priorité ou de manière d’interpréter les événements.":
        "Los quincuncios suelen crear una sensación de incomprensión difícil de explicar. No siempre se trata de un conflicto directo, sino de una diferencia de ritmo, prioridad o manera de interpretar los acontecimientos.",

      "Ils développent l’adaptabilité, la patience et une compréhension plus fine des différences individuelles.":
        "Desarrollan la adaptabilidad, la paciencia y una comprensión más profunda de las diferencias individuales.",

      "La frustration peut s’accumuler si les ajustements sont toujours faits par la même personne ou si les besoins restent implicites.":
        "La frustración puede acumularse si los ajustes siempre los realiza la misma persona o si las necesidades permanecen implícitas.",

      "Formulez précisément ce qui doit être ajusté et vérifiez régulièrement que l’effort demeure équilibré entre vous.":
        "Expresen con precisión lo que debe ajustarse y comprueben regularmente que el esfuerzo siga siendo equilibrado entre ambos.",

      "Intensification":
        "Intensificación",

      "Opportunité":
        "Oportunidad",

      "Tension créatrice":
        "Tensión creativa",

      "Polarité":
        "Polaridad",

      "Ajustement":
        "Ajuste",

      "Vos aspects les plus importants":
        "Sus aspectos más importantes",

      "Aucun aspect de ce type n’apparaît parmi les interactions principales calculées pour vos deux thèmes. Cela ne signifie pas que cette énergie est absente de votre relation, seulement qu’elle n’est pas dominante dans les aspects retenus.":
        "Ningún aspecto de este tipo aparece entre las principales interacciones calculadas para sus dos cartas. Esto no significa que esta energía esté ausente de la relación, sino solamente que no domina entre los aspectos seleccionados.",

      "Votre potentiel":
        "Su potencial",

      "Votre point de vigilance":
        "Su punto de atención",

      "Votre clé d’intégration":
        "Su clave de integración",

      "Classement général":
        "Clasificación general",

      "Vos 10 aspects les plus puissants":
        "Sus 10 aspectos más poderosos",

      "Plus l’orbe est précis, plus l’interaction entre les deux planètes tend à se manifester clairement dans la dynamique relationnelle.":
        "Cuanto más cerrado es el orbe, más claramente tiende a manifestarse la interacción entre los dos planetas en la dinámica de la relación.",

      "Les connexions dominantes":
        "Las conexiones dominantes",

      "Ce classement rassemble les aspects les plus précis de votre synastrie. Ils ne sont pas nécessairement tous faciles ou difficiles : ils représentent surtout les interactions les plus présentes, les plus répétitives ou les plus significatives dans votre lien.":
        "Esta clasificación reúne los aspectos más precisos de su sinastría. No necesariamente son todos fáciles o difíciles: representan principalmente las interacciones más presentes, repetitivas o significativas de su vínculo.",

      "Aucun aspect n’est disponible pour établir ce classement. Vérifiez que les deux thèmes ont été calculés avec les positions planétaires complètes.":
        "No hay aspectos disponibles para establecer esta clasificación. Comprueben que ambas cartas hayan sido calculadas con las posiciones planetarias completas.",

      "Lecture globale":
        "Lectura general",

      "La dynamique générale de vos aspects":
        "La dinámica general de sus aspectos",

      "Votre relation se construit dans l’équilibre entre facilités, tensions, intensité et capacité d’ajustement.":
        "Su relación se construye mediante el equilibrio entre facilidades, tensiones, intensidad y capacidad de adaptación.",

      "aspects harmonieux":
        "aspectos armoniosos",

      "aspects d’évolution":
        "aspectos de evolución",

      "aspects analysés":
        "aspectos analizados",

      "Vos appuis naturels":
        "Sus apoyos naturales",

      "Les trigones et sextiles montrent les domaines où la relation peut retrouver plus facilement confiance, complicité et coopération. Ils constituent vos ressources les plus stables.":
        "Los trígonos y sextiles muestran las áreas donde la relación puede recuperar más fácilmente la confianza, la complicidad y la cooperación. Constituyen algunos de sus recursos más estables.",

      "Vos moteurs d’évolution":
        "Sus motores de evolución",

      "Les carrés, oppositions et quinconces révèlent les zones où la relation vous demande davantage de conscience, d’ajustement et de maturité.":
        "Las cuadraturas, oposiciones y quincuncios revelan las áreas donde la relación requiere mayor conciencia, adaptación y madurez.",

      "Votre intensité":
        "Su intensidad",

      "Votre équilibre":
        "Su equilibrio",

      "Une relation riche ne repose pas sur l’absence de tension. Elle repose sur la capacité à utiliser les aspects harmonieux pour mieux traverser les aspects qui demandent un effort.":
        "Una relación rica no se basa en la ausencia de tensión. Se basa en la capacidad de utilizar los aspectos armoniosos para atravesar mejor aquellos que requieren esfuerzo.",

      "La clé de votre synastrie":
        "La clave de su sinastría",

      "Vos aspects racontent une relation dynamique, composée de facilités, d’intensité et d’apprentissages. Les aspects harmonieux montrent où vous pouvez vous appuyer l’un sur l’autre. Les aspects difficiles indiquent les endroits précis où le couple gagne en profondeur lorsqu’il choisit le dialogue, la responsabilité et l’adaptation.":
        "Sus aspectos describen una relación dinámica compuesta de facilidades, intensidad y aprendizaje. Los aspectos armoniosos muestran dónde pueden apoyarse mutuamente. Los aspectos difíciles indican las áreas precisas donde la relación gana profundidad cuando elige el diálogo, la responsabilidad y la adaptación.",

      "Votre conseil final":
        "Su consejo final",

      "Lorsque vous rencontrez une difficulté, cherchez d’abord quel aspect harmonieux peut vous aider : la communication, la tendresse, la patience, l’humour ou un projet commun. Vos forces naturelles sont les meilleurs outils pour intégrer vos tensions.":
        "Cuando encuentren una dificultad, busquen primero qué recurso armonioso puede ayudarles: la comunicación, la ternura, la paciencia, el humor o un proyecto común. Sus fortalezas naturales son las mejores herramientas para integrar sus tensiones.",

      "L’identité de l’un soutient les besoins émotionnels de l’autre, favorisant reconnaissance, sécurité et compréhension.":
        "La identidad de una persona apoya las necesidades emocionales de la otra, favoreciendo el reconocimiento, la seguridad y la comprensión.",

      "L’expression personnelle de l’un peut parfois heurter la sensibilité ou les besoins affectifs de l’autre.":
        "La expresión personal de uno puede a veces herir la sensibilidad o las necesidades afectivas del otro.",

      "Cette connexion lie fortement identité et sensibilité, créant une impression de familiarité et de reconnaissance.":
        "Esta conexión une fuertemente identidad y sensibilidad, creando una sensación de familiaridad y reconocimiento.",

      "L’affection et le désir circulent avec naturel, renforçant attraction, charme, sensualité et initiative.":
        "El afecto y el deseo fluyen naturalmente, reforzando la atracción, el encanto, la sensualidad y la iniciativa.",

      "L’attirance peut être intense, mais les rythmes amoureux ou les manières d’exprimer le désir peuvent entrer en tension.":
        "La atracción puede ser intensa, pero los ritmos amorosos o las formas de expresar el deseo pueden entrar en tensión.",

      "Cette interaction intensifie l’alchimie, l’attirance et le besoin de vivre la relation de manière concrète.":
        "Esta interacción intensifica la química, la atracción y la necesidad de vivir la relación de una manera concreta.",

      "La tendresse répond facilement aux besoins affectifs et favorise douceur, réconfort et plaisir d’être ensemble.":
        "La ternura responde fácilmente a las necesidades afectivas y favorece la dulzura, el consuelo y el placer de estar juntos.",

      "La manière de donner de l’amour ne correspond pas toujours exactement au besoin émotionnel de l’autre.":
        "La manera de dar amor no siempre corresponde exactamente a la necesidad emocional de la otra persona.",

      "Cette connexion renforce l’attachement, la douceur et le besoin de prendre soin de la relation.":
        "Esta conexión refuerza el apego, la ternura y la necesidad de cuidar la relación.",

      "Les idées et les mots trouvent plus facilement leur chemin, ce qui favorise dialogue, décisions et compréhension.":
        "Las ideas y las palabras encuentran más fácilmente su camino, favoreciendo el diálogo, las decisiones y la comprensión.",

      "Les raisonnements, le ton ou la vitesse des échanges peuvent créer des malentendus et des réactions défensives.":
        "Los razonamientos, el tono o la rapidez de los intercambios pueden generar malentendidos y reacciones defensivas.",

      "La communication devient un élément central de la relation et influence fortement la manière de résoudre les situations.":
        "La comunicación se convierte en un elemento central de la relación e influye mucho en la forma de resolver las situaciones.",

      "Saturne apporte stabilité, fiabilité et capacité à construire dans le temps avec sérieux et constance.":
        "Saturno aporta estabilidad, fiabilidad y capacidad para construir a largo plazo con seriedad y constancia.",

      "L’un peut parfois se sentir limité, jugé ou ralenti, tandis que l’autre porte davantage de responsabilités.":
        "Uno puede sentirse a veces limitado, juzgado o frenado, mientras el otro asume más responsabilidades.",

      "Cette connexion souligne les thèmes d’engagement, de durée, de maturité et de responsabilité.":
        "Esta conexión destaca los temas de compromiso, duración, madurez y responsabilidad.",

      "Uranus apporte fraîcheur, liberté, créativité et capacité à renouveler la relation.":
        "Urano aporta frescura, libertad, creatividad y capacidad para renovar la relación.",

      "L’imprévisibilité ou le besoin d’espace peut créer de l’instabilité et un sentiment d’insécurité.":
        "La imprevisibilidad o la necesidad de espacio puede crear inestabilidad y una sensación de inseguridad.",

      "Cette interaction rend la relation stimulante, originale et difficile à enfermer dans une routine rigide.":
        "Esta interacción hace que la relación sea estimulante, original y difícil de encerrar en una rutina rígida.",

      "Neptune soutient compassion, intuition, imagination et sentiment d’une connexion subtile.":
        "Neptuno favorece la compasión, la intuición, la imaginación y la sensación de una conexión sutil.",

      "L’idéalisation, les attentes implicites ou le manque de clarté peuvent créer confusion et déception.":
        "La idealización, las expectativas implícitas o la falta de claridad pueden crear confusión y decepción.",

      "Cette connexion colore la relation de sensibilité, de rêve, d’intuition et parfois d’idéalisation.":
        "Esta conexión aporta a la relación sensibilidad, sueños, intuición y, a veces, idealización.",

      "Pluton favorise profondeur, transformation, guérison et capacité à traverser ensemble des périodes intenses.":
        "Plutón favorece la profundidad, la transformación, la sanación y la capacidad de atravesar juntos períodos intensos.",

      "Des enjeux de contrôle, de jalousie, de peur de perdre ou de pouvoir peuvent devenir très sensibles.":
        "Las cuestiones de control, celos, miedo a perder o poder pueden volverse especialmente sensibles.",

      "Cette interaction intensifie fortement le lien et pousse chacun à transformer certaines zones profondes.":
        "Esta interacción intensifica fuertemente el vínculo e impulsa a cada persona a transformar áreas profundas.",

      "Cette interaction soutient naturellement l’expression personnelle, l’attachement, l’émotion ou le désir.":
        "Esta interacción apoya naturalmente la expresión personal, el apego, la emoción o el deseo.",

      "Cette connexion demande de mieux comprendre les réactions personnelles, affectives ou instinctives de chacun.":
        "Esta conexión requiere comprender mejor las reacciones personales, afectivas o instintivas de cada persona.",

      "Cette interaction joue un rôle important dans la manière dont vous vous reconnaissez et réagissez l’un à l’autre.":
        "Esta interacción desempeña un papel importante en la manera en que se reconocen y reaccionan mutuamente.",

      "Cet aspect influence votre dynamique relationnelle et montre comment deux fonctions planétaires cherchent à coopérer, se confronter ou s’ajuster.":
        "Este aspecto influye en su dinámica relacional y muestra cómo dos funciones planetarias buscan cooperar, enfrentarse o ajustarse.",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Neptuno",
      Pluton: "Plutón",
    },

    aspects: {
      Conjonction: "Conjunción",
      Trigone: "Trígono",
      Sextile: "Sextil",
      Carré: "Cuadratura",
      Opposition: "Oposición",
      Quinconce: "Quincuncio",
    },

    nature: {
      Intensification:
        "Intensificación",
      "Harmonie naturelle":
        "Armonía natural",
      Opportunité:
        "Oportunidad",
      "Tension créatrice":
        "Tensión creativa",
      Polarité:
        "Polaridad",
      Ajustement:
        "Ajuste",
    },

    degreeWord: "grados",

    aspectSingular: "aspecto",

    aspectPlural: "aspectos",

    ofThisType: "de este tipo",

    closestOrb:
      "orbe más preciso",

    conjunctionSingular:
      "conjunción",

    conjunctionPlural:
      "conjunciones",
  },

  /* =========================================================
     DEUTSCH
  ========================================================= */

  de: {
    text: {
      "Première personne":
        "Erste Person",

      "Deuxième personne":
        "Zweite Person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",

      "Fusion des énergies":
        "Verschmelzung der Energien",

      "Vos conjonctions":
        "Ihre Konjunktionen",

      "La conjonction réunit deux planètes dans une même zone et intensifie fortement leur interaction.":
        "Eine Konjunktion bringt zwei Planeten im selben Bereich zusammen und verstärkt ihre Wechselwirkung deutlich.",

      "Une énergie concentrée":
        "Konzentrierte Energie",

      "Les conjonctions créent des liens puissants, immédiats et difficiles à ignorer. Elles peuvent donner un sentiment de familiarité ou d’évidence, mais elles amplifient également les qualités et les tensions des planètes concernées.":
        "Konjunktionen schaffen kraftvolle, unmittelbare Verbindungen, die schwer zu ignorieren sind. Sie können ein Gefühl von Vertrautheit oder Selbstverständlichkeit erzeugen, verstärken jedoch auch die Qualitäten und Spannungen der beteiligten Planeten.",

      "Elles favorisent la proximité, la reconnaissance mutuelle et une forte concentration d’énergie autour de certains thèmes du couple.":
        "Sie fördern Nähe, gegenseitige Anerkennung und eine starke Konzentration von Energie auf bestimmte Beziehungsthemen.",

      "L’intensité peut devenir excessive lorsque les deux énergies se renforcent sans distance, recul ou espace personnel.":
        "Die Intensität kann übermäßig werden, wenn sich beide Energien ohne Distanz, Perspektive oder persönlichen Freiraum gegenseitig verstärken.",

      "Utilisez la puissance des conjonctions pour construire ensemble, tout en laissant chacun respirer et conserver son identité.":
        "Nutzen Sie die Kraft der Konjunktionen, um gemeinsam aufzubauen, und lassen Sie zugleich jedem genügend Raum, um seine eigene Identität zu bewahren.",

      "Harmonie naturelle":
        "Natürliche Harmonie",

      "Vos trigones":
        "Ihre Trigone",

      "Le trigone relie des énergies compatibles et révèle les talents qui circulent facilement entre vous.":
        "Das Trigon verbindet kompatible Energien und zeigt Talente, die leicht zwischen Ihnen fließen.",

      "Une facilité spontanée":
        "Spontane Leichtigkeit",

      "Les trigones montrent les domaines où la relation peut sembler simple, fluide et naturelle. Ils soutiennent la confiance, la coopération et le sentiment que certaines choses se comprennent sans effort.":
        "Trigone zeigen Bereiche, in denen sich die Beziehung einfach, fließend und natürlich anfühlen kann. Sie unterstützen Vertrauen, Zusammenarbeit und das Gefühl, dass manches ohne große Anstrengung verstanden wird.",

      "Ils facilitent la confiance, l’entraide et la capacité à retrouver rapidement une harmonie après les périodes plus exigeantes.":
        "Sie erleichtern Vertrauen, gegenseitige Unterstützung und die Fähigkeit, nach anspruchsvolleren Phasen schnell wieder Harmonie zu finden.",

      "Une facilité constante peut être tenue pour acquise ou devenir passive si le couple ne cherche plus à nourrir consciemment ses qualités.":
        "Dauerhafte Leichtigkeit kann als selbstverständlich angesehen oder passiv werden, wenn die Beziehung ihre Stärken nicht mehr bewusst pflegt.",

      "Reconnaissez vos talents naturels et utilisez-les comme fondation pour traverser les défis plus complexes.":
        "Erkennen Sie Ihre natürlichen Stärken und nutzen Sie sie als Grundlage, um komplexere Herausforderungen zu bewältigen.",

      "Opportunités de croissance":
        "Wachstumschancen",

      "Vos sextiles":
        "Ihre Sextile",

      "Le sextile ouvre des portes et montre ce que le couple peut développer par la curiosité, l’initiative et la coopération.":
        "Das Sextil öffnet Türen und zeigt, was die Beziehung durch Neugier, Initiative und Zusammenarbeit entwickeln kann.",

      "Un potentiel à activer":
        "Potenzial, das aktiviert werden möchte",

      "Les sextiles sont harmonieux, mais ils demandent une participation consciente. Ils montrent les occasions d’apprendre, de créer et de faire évoluer la relation lorsque chacun accepte de faire un pas vers l’autre.":
        "Sextile sind harmonisch, verlangen jedoch bewusste Beteiligung. Sie zeigen Möglichkeiten zum Lernen, Gestalten und Weiterentwickeln der Beziehung, wenn beide bereit sind, aufeinander zuzugehen.",

      "Ils offrent de nombreuses possibilités de dialogue, de collaboration et d’enrichissement mutuel.":
        "Sie bieten viele Möglichkeiten für Dialog, Zusammenarbeit und gegenseitige Bereicherung.",

      "Le potentiel peut rester inutilisé si le couple attend que les choses se développent seules sans initiative ni engagement.":
        "Das Potenzial kann ungenutzt bleiben, wenn die Beziehung darauf wartet, dass sich alles von selbst entwickelt, ohne Initiative oder Engagement.",

      "Transformez les possibilités en habitudes concrètes : projets partagés, nouvelles expériences et temps de qualité.":
        "Verwandeln Sie Möglichkeiten in konkrete Gewohnheiten: gemeinsame Projekte, neue Erfahrungen und wertvolle gemeinsame Zeit.",

      "Tensions créatrices":
        "Kreative Spannungen",

      "Vos carrés":
        "Ihre Quadrate",

      "Le carré confronte deux énergies qui cherchent à agir différemment et pousse la relation à évoluer.":
        "Das Quadrat bringt zwei Energien miteinander in Konflikt, die unterschiedlich handeln wollen, und drängt die Beziehung zur Entwicklung.",

      "Une tension qui demande une réponse":
        "Eine Spannung, die eine Antwort verlangt",

      "Les carrés révèlent les domaines où les réactions sont rapides, défensives ou contradictoires. Ils peuvent créer des conflits, mais ils donnent aussi au couple l’énergie nécessaire pour changer, décider et dépasser certains automatismes.":
        "Quadrate zeigen Bereiche, in denen Reaktionen schnell, defensiv oder widersprüchlich sein können. Sie können Konflikte erzeugen, geben der Beziehung aber auch Energie für Veränderung, Entscheidungen und das Überwinden automatischer Muster.",

      "Ils empêchent la relation de stagner et peuvent développer courage, franchise, maturité et capacité à résoudre les problèmes.":
        "Sie verhindern Stillstand und können Mut, Offenheit, Reife und Problemlösungsfähigkeit fördern.",

      "Les mêmes désaccords peuvent revenir si chacun défend uniquement sa position sans chercher le besoin profond derrière la réaction.":
        "Dieselben Konflikte können wiederkehren, wenn jeder nur seine eigene Position verteidigt, ohne das tiefere Bedürfnis hinter der Reaktion zu erkennen.",

      "Ne cherchez pas immédiatement un coupable. Identifiez plutôt les deux besoins légitimes qui entrent en collision.":
        "Suchen Sie nicht sofort nach einem Schuldigen. Erkennen Sie stattdessen die beiden berechtigten Bedürfnisse, die miteinander kollidieren.",

      "Attraction des contraires":
        "Anziehung der Gegensätze",

      "Vos oppositions":
        "Ihre Oppositionen",

      "L’opposition place deux énergies face à face et crée une forte attraction accompagnée d’un besoin d’équilibre.":
        "Die Opposition stellt zwei Energien einander gegenüber und erzeugt starke Anziehung zusammen mit dem Bedürfnis nach Ausgleich.",

      "Deux pôles d’un même axe":
        "Zwei Pole derselben Achse",

      "Les oppositions montrent des différences visibles qui peuvent fasciner autant qu’elles déstabilisent. Chacun peut porter une qualité que l’autre doit apprendre à reconnaître, intégrer ou respecter.":
        "Oppositionen zeigen sichtbare Unterschiede, die ebenso faszinieren wie destabilisieren können. Jeder kann eine Qualität verkörpern, die der andere lernen muss anzuerkennen, zu integrieren oder zu respektieren.",

      "Elles apportent complémentarité, perspective et capacité à voir une situation depuis deux angles opposés.":
        "Sie bringen Ergänzung, Perspektive und die Fähigkeit, eine Situation aus zwei gegensätzlichen Blickwinkeln zu betrachten.",

      "Le couple peut tomber dans une dynamique où chacun projette sur l’autre ce qu’il refuse ou comprend moins bien en lui-même.":
        "Die Beziehung kann in eine Dynamik geraten, in der jeder auf den anderen projiziert, was er in sich selbst ablehnt oder weniger gut versteht.",

      "Cherchez le point d’équilibre entre vos deux positions plutôt que d’essayer de prouver qu’une seule manière est correcte.":
        "Suchen Sie den Ausgleich zwischen Ihren beiden Positionen, anstatt beweisen zu wollen, dass nur eine Vorgehensweise richtig ist.",

      "Ajustements subtils":
        "Subtile Anpassungen",

      "Vos quinconces":
        "Ihre Quinkunxe",

      "Le quinconce relie des énergies qui ne parlent pas immédiatement le même langage et nécessitent des adaptations répétées.":
        "Das Quinkunx verbindet Energien, die nicht unmittelbar dieselbe Sprache sprechen und wiederholte Anpassungen benötigen.",

      "Comprendre ce qui échappe":
        "Verstehen, was schwer greifbar ist",

      "Les quinconces créent souvent un sentiment d’incompréhension difficile à expliquer. Il ne s’agit pas toujours d’un conflit direct, mais plutôt d’un décalage de rythme, de priorité ou de manière d’interpréter les événements.":
        "Quinkunxe erzeugen häufig ein schwer erklärbares Gefühl des Missverständnisses. Es handelt sich nicht immer um einen direkten Konflikt, sondern eher um Unterschiede im Rhythmus, in Prioritäten oder in der Interpretation von Ereignissen.",

      "Ils développent l’adaptabilité, la patience et une compréhension plus fine des différences individuelles.":
        "Sie fördern Anpassungsfähigkeit, Geduld und ein differenzierteres Verständnis individueller Unterschiede.",

      "La frustration peut s’accumuler si les ajustements sont toujours faits par la même personne ou si les besoins restent implicites.":
        "Frustration kann sich aufbauen, wenn Anpassungen immer von derselben Person vorgenommen werden oder Bedürfnisse unausgesprochen bleiben.",

      "Formulez précisément ce qui doit être ajusté et vérifiez régulièrement que l’effort demeure équilibré entre vous.":
        "Formulieren Sie genau, was angepasst werden muss, und prüfen Sie regelmäßig, ob der Aufwand zwischen Ihnen ausgewogen bleibt.",

      "Intensification":
        "Intensivierung",

      "Opportunité":
        "Chance",

      "Tension créatrice":
        "Kreative Spannung",

      "Polarité":
        "Polarität",

      "Ajustement":
        "Anpassung",

      "Vos aspects les plus importants":
        "Ihre wichtigsten Aspekte",

      "Aucun aspect de ce type n’apparaît parmi les interactions principales calculées pour vos deux thèmes. Cela ne signifie pas que cette énergie est absente de votre relation, seulement qu’elle n’est pas dominante dans les aspects retenus.":
        "Kein Aspekt dieses Typs erscheint unter den wichtigsten berechneten Wechselwirkungen Ihrer beiden Horoskope. Das bedeutet nicht, dass diese Energie in Ihrer Beziehung fehlt, sondern nur, dass sie unter den ausgewählten Aspekten nicht dominant ist.",

      "Votre potentiel":
        "Ihr Potenzial",

      "Votre point de vigilance":
        "Ihr Aufmerksamkeitspunkt",

      "Votre clé d’intégration":
        "Ihr Schlüssel zur Integration",

      "Classement général":
        "Gesamtrangliste",

      "Vos 10 aspects les plus puissants":
        "Ihre 10 stärksten Aspekte",

      "Plus l’orbe est précis, plus l’interaction entre les deux planètes tend à se manifester clairement dans la dynamique relationnelle.":
        "Je enger der Orb, desto deutlicher zeigt sich die Wechselwirkung zwischen den beiden Planeten in der Beziehungsdynamik.",

      "Les connexions dominantes":
        "Die dominanten Verbindungen",

      "Ce classement rassemble les aspects les plus précis de votre synastrie. Ils ne sont pas nécessairement tous faciles ou difficiles : ils représentent surtout les interactions les plus présentes, les plus répétitives ou les plus significatives dans votre lien.":
        "Diese Rangliste fasst die engsten Aspekte Ihrer Synastrie zusammen. Sie sind nicht zwangsläufig alle einfach oder schwierig; vor allem zeigen sie die präsentesten, wiederkehrendsten oder bedeutendsten Wechselwirkungen Ihrer Verbindung.",

      "Aucun aspect n’est disponible pour établir ce classement. Vérifiez que les deux thèmes ont été calculés avec les positions planétaires complètes.":
        "Für diese Rangliste stehen keine Aspekte zur Verfügung. Prüfen Sie, ob beide Horoskope mit vollständigen Planetenpositionen berechnet wurden.",

      "Lecture globale":
        "Gesamtbetrachtung",

      "La dynamique générale de vos aspects":
        "Die Gesamtdynamik Ihrer Aspekte",

      "Votre relation se construit dans l’équilibre entre facilités, tensions, intensité et capacité d’ajustement.":
        "Ihre Beziehung entsteht im Gleichgewicht zwischen Leichtigkeit, Spannung, Intensität und Anpassungsfähigkeit.",

      "aspects harmonieux":
        "harmonische Aspekte",

      "aspects d’évolution":
        "Entwicklungsaspekte",

      "aspects analysés":
        "analysierte Aspekte",

      "Vos appuis naturels":
        "Ihre natürlichen Stützen",

      "Les trigones et sextiles montrent les domaines où la relation peut retrouver plus facilement confiance, complicité et coopération. Ils constituent vos ressources les plus stables.":
        "Trigone und Sextile zeigen Bereiche, in denen die Beziehung leichter Vertrauen, Verbundenheit und Zusammenarbeit wiederfinden kann. Sie gehören zu Ihren stabilsten Ressourcen.",

      "Vos moteurs d’évolution":
        "Ihre Entwicklungskräfte",

      "Les carrés, oppositions et quinconces révèlent les zones où la relation vous demande davantage de conscience, d’ajustement et de maturité.":
        "Quadrate, Oppositionen und Quinkunxe zeigen Bereiche, in denen die Beziehung mehr Bewusstsein, Anpassung und Reife verlangt.",

      "Votre intensité":
        "Ihre Intensität",

      "Votre équilibre":
        "Ihr Gleichgewicht",

      "Une relation riche ne repose pas sur l’absence de tension. Elle repose sur la capacité à utiliser les aspects harmonieux pour mieux traverser les aspects qui demandent un effort.":
        "Eine reiche Beziehung beruht nicht auf der Abwesenheit von Spannung. Sie beruht auf der Fähigkeit, harmonische Aspekte zu nutzen, um jene besser zu bewältigen, die Anstrengung verlangen.",

      "La clé de votre synastrie":
        "Der Schlüssel Ihrer Synastrie",

      "Vos aspects racontent une relation dynamique, composée de facilités, d’intensité et d’apprentissages. Les aspects harmonieux montrent où vous pouvez vous appuyer l’un sur l’autre. Les aspects difficiles indiquent les endroits précis où le couple gagne en profondeur lorsqu’il choisit le dialogue, la responsabilité et l’adaptation.":
        "Ihre Aspekte beschreiben eine dynamische Beziehung aus Leichtigkeit, Intensität und Lernprozessen. Harmonische Aspekte zeigen, wo Sie sich gegenseitig stützen können. Schwierige Aspekte markieren die Bereiche, in denen die Beziehung an Tiefe gewinnt, wenn sie Dialog, Verantwortung und Anpassung wählt.",

      "Votre conseil final":
        "Ihr abschließender Rat",

      "Lorsque vous rencontrez une difficulté, cherchez d’abord quel aspect harmonieux peut vous aider : la communication, la tendresse, la patience, l’humour ou un projet commun. Vos forces naturelles sont les meilleurs outils pour intégrer vos tensions.":
        "Wenn Sie auf eine Schwierigkeit stoßen, suchen Sie zunächst nach einer harmonischen Stärke, die helfen kann: Kommunikation, Zärtlichkeit, Geduld, Humor oder ein gemeinsames Projekt. Ihre natürlichen Stärken sind die besten Werkzeuge, um Spannungen zu integrieren.",

      "L’identité de l’un soutient les besoins émotionnels de l’autre, favorisant reconnaissance, sécurité et compréhension.":
        "Die Identität des einen unterstützt die emotionalen Bedürfnisse des anderen und fördert Anerkennung, Sicherheit und Verständnis.",

      "L’expression personnelle de l’un peut parfois heurter la sensibilité ou les besoins affectifs de l’autre.":
        "Der persönliche Ausdruck des einen kann manchmal die Sensibilität oder emotionalen Bedürfnisse des anderen verletzen.",

      "Cette connexion lie fortement identité et sensibilité, créant une impression de familiarité et de reconnaissance.":
        "Diese Verbindung verknüpft Identität und Sensibilität stark und erzeugt ein Gefühl von Vertrautheit und Wiedererkennung.",

      "L’affection et le désir circulent avec naturel, renforçant attraction, charme, sensualité et initiative.":
        "Zuneigung und Verlangen fließen natürlich und verstärken Anziehung, Charme, Sinnlichkeit und Initiative.",

      "L’attirance peut être intense, mais les rythmes amoureux ou les manières d’exprimer le désir peuvent entrer en tension.":
        "Die Anziehung kann intensiv sein, doch unterschiedliche Liebesrhythmen oder Ausdrucksformen des Verlangens können Spannung erzeugen.",

      "Cette interaction intensifie l’alchimie, l’attirance et le besoin de vivre la relation de manière concrète.":
        "Diese Wechselwirkung verstärkt Chemie, Anziehung und das Bedürfnis, die Beziehung konkret zu erleben.",

      "La tendresse répond facilement aux besoins affectifs et favorise douceur, réconfort et plaisir d’être ensemble.":
        "Zärtlichkeit entspricht leicht den emotionalen Bedürfnissen und fördert Sanftheit, Trost und Freude am Zusammensein.",

      "La manière de donner de l’amour ne correspond pas toujours exactement au besoin émotionnel de l’autre.":
        "Die Art, Liebe zu geben, entspricht nicht immer genau den emotionalen Bedürfnissen des anderen.",

      "Cette connexion renforce l’attachement, la douceur et le besoin de prendre soin de la relation.":
        "Diese Verbindung stärkt Bindung, Zärtlichkeit und das Bedürfnis, sich um die Beziehung zu kümmern.",

      "Les idées et les mots trouvent plus facilement leur chemin, ce qui favorise dialogue, décisions et compréhension.":
        "Gedanken und Worte finden leichter ihren Weg und fördern Dialog, Entscheidungen und Verständnis.",

      "Les raisonnements, le ton ou la vitesse des échanges peuvent créer des malentendus et des réactions défensives.":
        "Denkweisen, Tonfall oder Geschwindigkeit des Austauschs können Missverständnisse und defensive Reaktionen erzeugen.",

      "La communication devient un élément central de la relation et influence fortement la manière de résoudre les situations.":
        "Kommunikation wird zu einem zentralen Bestandteil der Beziehung und beeinflusst stark, wie Situationen gelöst werden.",

      "Saturne apporte stabilité, fiabilité et capacité à construire dans le temps avec sérieux et constance.":
        "Saturn bringt Stabilität, Verlässlichkeit und die Fähigkeit, mit Ernsthaftigkeit und Beständigkeit langfristig aufzubauen.",

      "L’un peut parfois se sentir limité, jugé ou ralenti, tandis que l’autre porte davantage de responsabilités.":
        "Einer kann sich manchmal eingeschränkt, beurteilt oder ausgebremst fühlen, während der andere mehr Verantwortung trägt.",

      "Cette connexion souligne les thèmes d’engagement, de durée, de maturité et de responsabilité.":
        "Diese Verbindung betont Themen wie Bindung, Dauer, Reife und Verantwortung.",

      "Uranus apporte fraîcheur, liberté, créativité et capacité à renouveler la relation.":
        "Uranus bringt Frische, Freiheit, Kreativität und die Fähigkeit, die Beziehung zu erneuern.",

      "L’imprévisibilité ou le besoin d’espace peut créer de l’instabilité et un sentiment d’insécurité.":
        "Unvorhersehbarkeit oder das Bedürfnis nach Freiraum können Instabilität und Unsicherheit erzeugen.",

      "Cette interaction rend la relation stimulante, originale et difficile à enfermer dans une routine rigide.":
        "Diese Wechselwirkung macht die Beziehung anregend, originell und schwer in eine starre Routine zu zwängen.",

      "Neptune soutient compassion, intuition, imagination et sentiment d’une connexion subtile.":
        "Neptun unterstützt Mitgefühl, Intuition, Vorstellungskraft und das Gefühl einer subtilen Verbindung.",

      "L’idéalisation, les attentes implicites ou le manque de clarté peuvent créer confusion et déception.":
        "Idealisierung, unausgesprochene Erwartungen oder mangelnde Klarheit können Verwirrung und Enttäuschung erzeugen.",

      "Cette connexion colore la relation de sensibilité, de rêve, d’intuition et parfois d’idéalisation.":
        "Diese Verbindung prägt die Beziehung mit Sensibilität, Träumen, Intuition und manchmal Idealisierung.",

      "Pluton favorise profondeur, transformation, guérison et capacité à traverser ensemble des périodes intenses.":
        "Pluto fördert Tiefe, Transformation, Heilung und die Fähigkeit, intensive Phasen gemeinsam zu durchlaufen.",

      "Des enjeux de contrôle, de jalousie, de peur de perdre ou de pouvoir peuvent devenir très sensibles.":
        "Themen wie Kontrolle, Eifersucht, Verlustangst oder Macht können sehr sensibel werden.",

      "Cette interaction intensifie fortement le lien et pousse chacun à transformer certaines zones profondes.":
        "Diese Wechselwirkung intensiviert die Verbindung stark und fordert beide auf, tiefere innere Bereiche zu verändern.",

      "Cette interaction soutient naturellement l’expression personnelle, l’attachement, l’émotion ou le désir.":
        "Diese Wechselwirkung unterstützt auf natürliche Weise persönlichen Ausdruck, Bindung, Emotion oder Verlangen.",

      "Cette connexion demande de mieux comprendre les réactions personnelles, affectives ou instinctives de chacun.":
        "Diese Verbindung verlangt ein besseres Verständnis der persönlichen, emotionalen oder instinktiven Reaktionen beider Personen.",

      "Cette interaction joue un rôle important dans la manière dont vous vous reconnaissez et réagissez l’un à l’autre.":
        "Diese Wechselwirkung spielt eine wichtige Rolle dabei, wie Sie einander erkennen und aufeinander reagieren.",

      "Cet aspect influence votre dynamique relationnelle et montre comment deux fonctions planétaires cherchent à coopérer, se confronter ou s’ajuster.":
        "Dieser Aspekt beeinflusst Ihre Beziehungsdynamik und zeigt, wie zwei planetare Funktionen zusammenarbeiten, sich gegenüberstehen oder anpassen möchten.",
    },

    planets: {
      Soleil: "Sonne",
      Lune: "Mond",
      Mercure: "Merkur",
      Vénus: "Venus",
      Mars: "Mars",
      Jupiter: "Jupiter",
      Saturne: "Saturn",
      Uranus: "Uranus",
      Neptune: "Neptun",
      Pluton: "Pluto",
    },

    aspects: {
      Conjonction: "Konjunktion",
      Trigone: "Trigon",
      Sextile: "Sextil",
      Carré: "Quadrat",
      Opposition: "Opposition",
      Quinconce: "Quinkunx",
    },

    nature: {
      Intensification:
        "Intensivierung",

      "Harmonie naturelle":
        "Natürliche Harmonie",

      Opportunité:
        "Chance",

      "Tension créatrice":
        "Kreative Spannung",

      Polarité:
        "Polarität",

      Ajustement:
        "Anpassung",
    },

    degreeWord: "Grad",

    aspectSingular: "Aspekt",

    aspectPlural: "Aspekte",

    ofThisType:
      "dieses Typs",

    closestOrb:
      "engster Orb",

    conjunctionSingular:
      "Konjunktion",

    conjunctionPlural:
      "Konjunktionen",
  },

  /* =========================================================
     ITALIANO
  ========================================================= */

  it: {
    text: {
      "Première personne":
        "Prima persona",

      "Deuxième personne":
        "Seconda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",

      "Fusion des énergies":
        "Fusione delle energie",

      "Vos conjonctions":
        "Le vostre congiunzioni",

      "La conjonction réunit deux planètes dans une même zone et intensifie fortement leur interaction.":
        "La congiunzione riunisce due pianeti nella stessa area e intensifica fortemente la loro interazione.",

      "Une énergie concentrée":
        "Un'energia concentrata",

      "Les conjonctions créent des liens puissants, immédiats et difficiles à ignorer. Elles peuvent donner un sentiment de familiarité ou d’évidence, mais elles amplifient également les qualités et les tensions des planètes concernées.":
        "Le congiunzioni creano legami potenti, immediati e difficili da ignorare. Possono generare un senso di familiarità o evidenza, ma amplificano anche le qualità e le tensioni dei pianeti coinvolti.",

      "Elles favorisent la proximité, la reconnaissance mutuelle et une forte concentration d’énergie autour de certains thèmes du couple.":
        "Favoriscono la vicinanza, il riconoscimento reciproco e una forte concentrazione di energia attorno ad alcuni temi della relazione.",

      "L’intensité peut devenir excessive lorsque les deux énergies se renforcent sans distance, recul ou espace personnel.":
        "L'intensità può diventare eccessiva quando le due energie si rafforzano senza distanza, prospettiva o spazio personale.",

      "Utilisez la puissance des conjonctions pour construire ensemble, tout en laissant chacun respirer et conserver son identité.":
        "Utilizzate la forza delle congiunzioni per costruire insieme, lasciando al tempo stesso a ciascuno spazio sufficiente per respirare e conservare la propria identità.",

      "Harmonie naturelle":
        "Armonia naturale",

      "Vos trigones":
        "I vostri trigoni",

      "Le trigone relie des énergies compatibles et révèle les talents qui circulent facilement entre vous.":
        "Il trigono collega energie compatibili e rivela i talenti che fluiscono facilmente tra voi.",

      "Une facilité spontanée":
        "Una facilità spontanea",

      "Les trigones montrent les domaines où la relation peut sembler simple, fluide et naturelle. Ils soutiennent la confiance, la coopération et le sentiment que certaines choses se comprennent sans effort.":
        "I trigoni mostrano le aree in cui la relazione può sembrare semplice, fluida e naturale. Sostengono fiducia, cooperazione e la sensazione che alcune cose si comprendano senza sforzo.",

      "Ils facilitent la confiance, l’entraide et la capacité à retrouver rapidement une harmonie après les périodes plus exigeantes.":
        "Facilitano la fiducia, il sostegno reciproco e la capacità di ritrovare rapidamente armonia dopo periodi più impegnativi.",

      "Une facilité constante peut être tenue pour acquise ou devenir passive si le couple ne cherche plus à nourrir consciemment ses qualités.":
        "Una facilità costante può essere data per scontata o diventare passiva se la relazione non cerca più di coltivare consapevolmente le proprie qualità.",

      "Reconnaissez vos talents naturels et utilisez-les comme fondation pour traverser les défis plus complexes.":
        "Riconoscete i vostri talenti naturali e utilizzateli come base per affrontare le sfide più complesse.",

      "Opportunités de croissance":
        "Opportunità di crescita",

      "Vos sextiles":
        "I vostri sestili",

      "Le sextile ouvre des portes et montre ce que le couple peut développer par la curiosité, l’initiative et la coopération.":
        "Il sestile apre delle porte e mostra ciò che la relazione può sviluppare attraverso curiosità, iniziativa e cooperazione.",

      "Un potentiel à activer":
        "Un potenziale da attivare",

      "Les sextiles sont harmonieux, mais ils demandent une participation consciente. Ils montrent les occasions d’apprendre, de créer et de faire évoluer la relation lorsque chacun accepte de faire un pas vers l’autre.":
        "I sestili sono armoniosi, ma richiedono una partecipazione consapevole. Mostrano opportunità per imparare, creare e far evolvere la relazione quando ciascuno accetta di fare un passo verso l'altro.",

      "Ils offrent de nombreuses possibilités de dialogue, de collaboration et d’enrichissement mutuel.":
        "Offrono numerose possibilità di dialogo, collaborazione e arricchimento reciproco.",

      "Le potentiel peut rester inutilisé si le couple attend que les choses se développent seules sans initiative ni engagement.":
        "Il potenziale può rimanere inutilizzato se la relazione aspetta che le cose si sviluppino da sole senza iniziativa né impegno.",

      "Transformez les possibilités en habitudes concrètes : projets partagés, nouvelles expériences et temps de qualité.":
        "Trasformate le possibilità in abitudini concrete: progetti condivisi, nuove esperienze e tempo di qualità.",

      "Tensions créatrices":
        "Tensioni creative",

      "Vos carrés":
        "Le vostre quadrature",

      "Le carré confronte deux énergies qui cherchent à agir différemment et pousse la relation à évoluer.":
        "La quadratura mette a confronto due energie che cercano di agire in modo diverso e spinge la relazione a evolvere.",

      "Une tension qui demande une réponse":
        "Una tensione che richiede una risposta",

      "Les carrés révèlent les domaines où les réactions sont rapides, défensives ou contradictoires. Ils peuvent créer des conflits, mais ils donnent aussi au couple l’énergie nécessaire pour changer, décider et dépasser certains automatismes.":
        "Le quadrature rivelano le aree in cui le reazioni possono essere rapide, difensive o contraddittorie. Possono creare conflitti, ma danno anche alla relazione l'energia necessaria per cambiare, decidere e superare alcuni automatismi.",

      "Ils empêchent la relation de stagner et peuvent développer courage, franchise, maturité et capacité à résoudre les problèmes.":
        "Impediscono alla relazione di stagnare e possono sviluppare coraggio, sincerità, maturità e capacità di risolvere i problemi.",

      "Les mêmes désaccords peuvent revenir si chacun défend uniquement sa position sans chercher le besoin profond derrière la réaction.":
        "Gli stessi disaccordi possono ripresentarsi se ciascuno difende soltanto la propria posizione senza cercare il bisogno profondo dietro la reazione.",

      "Ne cherchez pas immédiatement un coupable. Identifiez plutôt les deux besoins légitimes qui entrent en collision.":
        "Non cercate subito un colpevole. Identificate invece i due bisogni legittimi che stanno entrando in collisione.",

      "Attraction des contraires":
        "Attrazione degli opposti",

      "Vos oppositions":
        "Le vostre opposizioni",

      "L’opposition place deux énergies face à face et crée une forte attraction accompagnée d’un besoin d’équilibre.":
        "L'opposizione pone due energie una di fronte all'altra e crea una forte attrazione accompagnata dal bisogno di equilibrio.",

      "Deux pôles d’un même axe":
        "Due poli dello stesso asse",

      "Les oppositions montrent des différences visibles qui peuvent fasciner autant qu’elles déstabilisent. Chacun peut porter une qualité que l’autre doit apprendre à reconnaître, intégrer ou respecter.":
        "Le opposizioni mostrano differenze visibili che possono affascinare quanto destabilizzare. Ciascuno può incarnare una qualità che l'altro deve imparare a riconoscere, integrare o rispettare.",

      "Elles apportent complémentarité, perspective et capacité à voir une situation depuis deux angles opposés.":
        "Portano complementarità, prospettiva e capacità di vedere una situazione da due punti di vista opposti.",

      "Le couple peut tomber dans une dynamique où chacun projette sur l’autre ce qu’il refuse ou comprend moins bien en lui-même.":
        "La relazione può entrare in una dinamica in cui ciascuno proietta sull'altro ciò che rifiuta o comprende meno bene di sé.",

      "Cherchez le point d’équilibre entre vos deux positions plutôt que d’essayer de prouver qu’une seule manière est correcte.":
        "Cercate il punto di equilibrio tra le vostre due posizioni invece di provare che un solo modo sia corretto.",

      "Ajustements subtils":
        "Adattamenti sottili",

      "Vos quinconces":
        "I vostri quinconce",

      "Le quinconce relie des énergies qui ne parlent pas immédiatement le même langage et nécessitent des adaptations répétées.":
        "Il quinconce collega energie che non parlano immediatamente lo stesso linguaggio e richiedono adattamenti ripetuti.",

      "Comprendre ce qui échappe":
        "Comprendere ciò che sfugge",

      "Les quinconces créent souvent un sentiment d’incompréhension difficile à expliquer. Il ne s’agit pas toujours d’un conflit direct, mais plutôt d’un décalage de rythme, de priorité ou de manière d’interpréter les événements.":
        "I quinconce creano spesso una sensazione di incomprensione difficile da spiegare. Non si tratta sempre di un conflitto diretto, ma piuttosto di una differenza di ritmo, priorità o modo di interpretare gli eventi.",

      "Ils développent l’adaptabilité, la patience et une compréhension plus fine des différences individuelles.":
        "Sviluppano adattabilità, pazienza e una comprensione più sottile delle differenze individuali.",

      "La frustration peut s’accumuler si les ajustements sont toujours faits par la même personne ou si les besoins restent implicites.":
        "La frustrazione può accumularsi se gli adattamenti vengono sempre fatti dalla stessa persona o se i bisogni rimangono impliciti.",

      "Formulez précisément ce qui doit être ajusté et vérifiez régulièrement que l’effort demeure équilibré entre vous.":
        "Formulate con precisione ciò che deve essere adattato e verificate regolarmente che lo sforzo rimanga equilibrato tra voi.",

      "Intensification":
        "Intensificazione",

      "Opportunité":
        "Opportunità",

      "Tension créatrice":
        "Tensione creativa",

      "Polarité":
        "Polarità",

      "Ajustement":
        "Adattamento",

      "Vos aspects les plus importants":
        "I vostri aspetti più importanti",

      "Aucun aspect de ce type n’apparaît parmi les interactions principales calculées pour vos deux thèmes. Cela ne signifie pas que cette énergie est absente de votre relation, seulement qu’elle n’est pas dominante dans les aspects retenus.":
        "Nessun aspetto di questo tipo appare tra le principali interazioni calcolate per i vostri due temi. Ciò non significa che questa energia sia assente dalla relazione, ma soltanto che non è dominante tra gli aspetti selezionati.",

      "Votre potentiel":
        "Il vostro potenziale",

      "Votre point de vigilance":
        "Il vostro punto di attenzione",

      "Votre clé d’intégration":
        "La vostra chiave di integrazione",

      "Classement général":
        "Classifica generale",

      "Vos 10 aspects les plus puissants":
        "I vostri 10 aspetti più potenti",

      "Plus l’orbe est précis, plus l’interaction entre les deux planètes tend à se manifester clairement dans la dynamique relationnelle.":
        "Più l'orbe è preciso, più l'interazione tra i due pianeti tende a manifestarsi chiaramente nella dinamica della relazione.",

      "Les connexions dominantes":
        "Le connessioni dominanti",

      "Ce classement rassemble les aspects les plus précis de votre synastrie. Ils ne sont pas nécessairement tous faciles ou difficiles : ils représentent surtout les interactions les plus présentes, les plus répétitives ou les plus significatives dans votre lien.":
        "Questa classifica riunisce gli aspetti più precisi della vostra sinastria. Non sono necessariamente tutti facili o difficili: rappresentano soprattutto le interazioni più presenti, ripetitive o significative nel vostro legame.",

      "Aucun aspect n’est disponible pour établir ce classement. Vérifiez que les deux thèmes ont été calculés avec les positions planétaires complètes.":
        "Nessun aspetto è disponibile per stabilire questa classifica. Verificate che entrambi i temi siano stati calcolati con le posizioni planetarie complete.",

      "Lecture globale":
        "Lettura generale",

      "La dynamique générale de vos aspects":
        "La dinamica generale dei vostri aspetti",

      "Votre relation se construit dans l’équilibre entre facilités, tensions, intensité et capacité d’ajustement.":
        "La vostra relazione si costruisce nell'equilibrio tra facilità, tensioni, intensità e capacità di adattamento.",

      "aspects harmonieux":
        "aspetti armoniosi",

      "aspects d’évolution":
        "aspetti evolutivi",

      "aspects analysés":
        "aspetti analizzati",

      "Vos appuis naturels":
        "I vostri sostegni naturali",

      "Les trigones et sextiles montrent les domaines où la relation peut retrouver plus facilement confiance, complicité et coopération. Ils constituent vos ressources les plus stables.":
        "Trigoni e sestili mostrano le aree in cui la relazione può ritrovare più facilmente fiducia, complicità e cooperazione. Costituiscono alcune delle vostre risorse più stabili.",

      "Vos moteurs d’évolution":
        "I vostri motori di evoluzione",

      "Les carrés, oppositions et quinconces révèlent les zones où la relation vous demande davantage de conscience, d’ajustement et de maturité.":
        "Quadrature, opposizioni e quinconce rivelano le aree in cui la relazione richiede maggiore consapevolezza, adattamento e maturità.",

      "Votre intensité":
        "La vostra intensità",

      "Votre équilibre":
        "Il vostro equilibrio",

      "Une relation riche ne repose pas sur l’absence de tension. Elle repose sur la capacité à utiliser les aspects harmonieux pour mieux traverser les aspects qui demandent un effort.":
        "Una relazione ricca non si basa sull'assenza di tensione. Si basa sulla capacità di utilizzare gli aspetti armoniosi per attraversare meglio quelli che richiedono uno sforzo.",

      "La clé de votre synastrie":
        "La chiave della vostra sinastria",

      "Vos aspects racontent une relation dynamique, composée de facilités, d’intensité et d’apprentissages. Les aspects harmonieux montrent où vous pouvez vous appuyer l’un sur l’autre. Les aspects difficiles indiquent les endroits précis où le couple gagne en profondeur lorsqu’il choisit le dialogue, la responsabilité et l’adaptation.":
        "I vostri aspetti raccontano una relazione dinamica composta da facilità, intensità e apprendimento. Gli aspetti armoniosi mostrano dove potete sostenervi reciprocamente. Gli aspetti difficili indicano i punti precisi in cui la relazione acquista profondità quando sceglie dialogo, responsabilità e adattamento.",

      "Votre conseil final":
        "Il vostro consiglio finale",

      "Lorsque vous rencontrez une difficulté, cherchez d’abord quel aspect harmonieux peut vous aider : la communication, la tendresse, la patience, l’humour ou un projet commun. Vos forces naturelles sont les meilleurs outils pour intégrer vos tensions.":
        "Quando incontrate una difficoltà, cercate prima quale risorsa armoniosa può aiutarvi: comunicazione, tenerezza, pazienza, umorismo o un progetto comune. I vostri punti di forza naturali sono gli strumenti migliori per integrare le tensioni.",

      "L’identité de l’un soutient les besoins émotionnels de l’autre, favorisant reconnaissance, sécurité et compréhension.":
        "L'identità di una persona sostiene i bisogni emotivi dell'altra, favorendo riconoscimento, sicurezza e comprensione.",

      "L’expression personnelle de l’un peut parfois heurter la sensibilité ou les besoins affectifs de l’autre.":
        "L'espressione personale di uno può talvolta ferire la sensibilità o i bisogni affettivi dell'altro.",

      "Cette connexion lie fortement identité et sensibilité, créant une impression de familiarité et de reconnaissance.":
        "Questa connessione lega fortemente identità e sensibilità, creando una sensazione di familiarità e riconoscimento.",

      "L’affection et le désir circulent avec naturel, renforçant attraction, charme, sensualité et initiative.":
        "Affetto e desiderio fluiscono naturalmente, rafforzando attrazione, fascino, sensualità e iniziativa.",

      "L’attirance peut être intense, mais les rythmes amoureux ou les manières d’exprimer le désir peuvent entrer en tension.":
        "L'attrazione può essere intensa, ma i ritmi amorosi o i modi di esprimere il desiderio possono entrare in tensione.",

      "Cette interaction intensifie l’alchimie, l’attirance et le besoin de vivre la relation de manière concrète.":
        "Questa interazione intensifica l'alchimia, l'attrazione e il bisogno di vivere la relazione in modo concreto.",

      "La tendresse répond facilement aux besoins affectifs et favorise douceur, réconfort et plaisir d’être ensemble.":
        "La tenerezza risponde facilmente ai bisogni affettivi e favorisce dolcezza, conforto e piacere di stare insieme.",

      "La manière de donner de l’amour ne correspond pas toujours exactement au besoin émotionnel de l’autre.":
        "Il modo di dare amore non corrisponde sempre esattamente al bisogno emotivo dell'altra persona.",

      "Cette connexion renforce l’attachement, la douceur et le besoin de prendre soin de la relation.":
        "Questa connessione rafforza l'attaccamento, la dolcezza e il bisogno di prendersi cura della relazione.",

      "Les idées et les mots trouvent plus facilement leur chemin, ce qui favorise dialogue, décisions et compréhension.":
        "Idee e parole trovano più facilmente la loro strada, favorendo dialogo, decisioni e comprensione.",

      "Les raisonnements, le ton ou la vitesse des échanges peuvent créer des malentendus et des réactions défensives.":
        "I ragionamenti, il tono o la velocità degli scambi possono creare malintesi e reazioni difensive.",

      "La communication devient un élément central de la relation et influence fortement la manière de résoudre les situations.":
        "La comunicazione diventa un elemento centrale della relazione e influenza fortemente il modo di risolvere le situazioni.",

      "Saturne apporte stabilité, fiabilité et capacité à construire dans le temps avec sérieux et constance.":
        "Saturno porta stabilità, affidabilità e capacità di costruire nel tempo con serietà e costanza.",

      "L’un peut parfois se sentir limité, jugé ou ralenti, tandis que l’autre porte davantage de responsabilités.":
        "Uno può talvolta sentirsi limitato, giudicato o rallentato, mentre l'altro porta maggiori responsabilità.",

      "Cette connexion souligne les thèmes d’engagement, de durée, de maturité et de responsabilité.":
        "Questa connessione sottolinea i temi dell'impegno, della durata, della maturità e della responsabilità.",

      "Uranus apporte fraîcheur, liberté, créativité et capacité à renouveler la relation.":
        "Urano porta freschezza, libertà, creatività e capacità di rinnovare la relazione.",

      "L’imprévisibilité ou le besoin d’espace peut créer de l’instabilité et un sentiment d’insécurité.":
        "L'imprevedibilità o il bisogno di spazio possono creare instabilità e un senso di insicurezza.",

      "Cette interaction rend la relation stimulante, originale et difficile à enfermer dans une routine rigide.":
        "Questa interazione rende la relazione stimolante, originale e difficile da racchiudere in una routine rigida.",

      "Neptune soutient compassion, intuition, imagination et sentiment d’une connexion subtile.":
        "Nettuno sostiene compassione, intuizione, immaginazione e la sensazione di una connessione sottile.",

      "L’idéalisation, les attentes implicites ou le manque de clarté peuvent créer confusion et déception.":
        "L'idealizzazione, le aspettative implicite o la mancanza di chiarezza possono creare confusione e delusione.",

      "Cette connexion colore la relation de sensibilité, de rêve, d’intuition et parfois d’idéalisation.":
        "Questa connessione colora la relazione di sensibilità, sogni, intuizione e talvolta idealizzazione.",

      "Pluton favorise profondeur, transformation, guérison et capacité à traverser ensemble des périodes intenses.":
        "Plutone favorisce profondità, trasformazione, guarigione e capacità di attraversare insieme periodi intensi.",

      "Des enjeux de contrôle, de jalousie, de peur de perdre ou de pouvoir peuvent devenir très sensibles.":
        "Questioni di controllo, gelosia, paura di perdere o potere possono diventare molto sensibili.",

      "Cette interaction intensifie fortement le lien et pousse chacun à transformer certaines zones profondes.":
        "Questa interazione intensifica fortemente il legame e spinge ciascuno a trasformare alcune aree profonde.",

      "Cette interaction soutient naturellement l’expression personnelle, l’attachement, l’émotion ou le désir.":
        "Questa interazione sostiene naturalmente l'espressione personale, l'attaccamento, l'emozione o il desiderio.",

      "Cette connexion demande de mieux comprendre les réactions personnelles, affectives ou instinctives de chacun.":
        "Questa connessione richiede una migliore comprensione delle reazioni personali, affettive o istintive di ciascuno.",

      "Cette interaction joue un rôle important dans la manière dont vous vous reconnaissez et réagissez l’un à l’autre.":
        "Questa interazione svolge un ruolo importante nel modo in cui vi riconoscete e reagite l'uno all'altro.",

      "Cet aspect influence votre dynamique relationnelle et montre comment deux fonctions planétaires cherchent à coopérer, se confronter ou s’ajuster.":
        "Questo aspetto influenza la vostra dinamica relazionale e mostra come due funzioni planetarie cercano di cooperare, confrontarsi o adattarsi.",
    },

    planets: {
      Soleil: "Sole",
      Lune: "Luna",
      Mercure: "Mercurio",
      Vénus: "Venere",
      Mars: "Marte",
      Jupiter: "Giove",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Nettuno",
      Pluton: "Plutone",
    },

    aspects: {
      Conjonction:
        "Congiunzione",

      Trigone:
        "Trigono",

      Sextile:
        "Sestile",

      Carré:
        "Quadratura",

      Opposition:
        "Opposizione",

      Quinconce:
        "Quinconce",
    },

    nature: {
      Intensification:
        "Intensificazione",

      "Harmonie naturelle":
        "Armonia naturale",

      Opportunité:
        "Opportunità",

      "Tension créatrice":
        "Tensione creativa",

      Polarité:
        "Polarità",

      Ajustement:
        "Adattamento",
    },

    degreeWord:
      "gradi",

    aspectSingular:
      "aspetto",

    aspectPlural:
      "aspetti",

    ofThisType:
      "di questo tipo",

    closestOrb:
      "orbe più preciso",

    conjunctionSingular:
      "congiunzione",

    conjunctionPlural:
      "congiunzioni",
  },

  /* =========================================================
     PORTUGUÊS
  ========================================================= */

  pt: {
    text: {
      "Première personne":
        "Primeira pessoa",

      "Deuxième personne":
        "Segunda pessoa",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",

      "Fusion des énergies":
        "Fusão das energias",

      "Vos conjonctions":
        "As suas conjunções",

      "La conjonction réunit deux planètes dans une même zone et intensifie fortement leur interaction.":
        "A conjunção reúne dois planetas na mesma área e intensifica fortemente a interação entre eles.",

      "Une énergie concentrée":
        "Uma energia concentrada",

      "Les conjonctions créent des liens puissants, immédiats et difficiles à ignorer. Elles peuvent donner un sentiment de familiarité ou d’évidence, mais elles amplifient également les qualités et les tensions des planètes concernées.":
        "As conjunções criam ligações poderosas, imediatas e difíceis de ignorar. Podem gerar uma sensação de familiaridade ou evidência, mas também amplificam as qualidades e tensões dos planetas envolvidos.",

      "Elles favorisent la proximité, la reconnaissance mutuelle et une forte concentration d’énergie autour de certains thèmes du couple.":
        "Favorecem a proximidade, o reconhecimento mútuo e uma forte concentração de energia em torno de determinados temas da relação.",

      "L’intensité peut devenir excessive lorsque les deux énergies se renforcent sans distance, recul ou espace personnel.":
        "A intensidade pode tornar-se excessiva quando ambas as energias se reforçam sem distância, perspetiva ou espaço pessoal.",

      "Utilisez la puissance des conjonctions pour construire ensemble, tout en laissant chacun respirer et conserver son identité.":
        "Utilizem a força das conjunções para construir juntos, deixando ao mesmo tempo espaço para cada pessoa respirar e preservar a sua identidade.",

      "Harmonie naturelle":
        "Harmonia natural",

      "Vos trigones":
        "Os seus trígonos",

      "Le trigone relie des énergies compatibles et révèle les talents qui circulent facilement entre vous.":
        "O trígono liga energias compatíveis e revela talentos que fluem facilmente entre vocês.",

      "Une facilité spontanée":
        "Uma facilidade espontânea",

      "Les trigones montrent les domaines où la relation peut sembler simple, fluide et naturelle. Ils soutiennent la confiance, la coopération et le sentiment que certaines choses se comprennent sans effort.":
        "Os trígonos mostram as áreas onde a relação pode parecer simples, fluida e natural. Apoiam a confiança, a cooperação e a sensação de que certas coisas são compreendidas sem esforço.",

      "Ils facilitent la confiance, l’entraide et la capacité à retrouver rapidement une harmonie après les périodes plus exigeantes.":
        "Facilitam a confiança, o apoio mútuo e a capacidade de recuperar rapidamente a harmonia após períodos mais exigentes.",

      "Une facilité constante peut être tenue pour acquise ou devenir passive si le couple ne cherche plus à nourrir consciemment ses qualités.":
        "Uma facilidade constante pode ser dada como garantida ou tornar-se passiva se a relação deixar de alimentar conscientemente as suas qualidades.",

      "Reconnaissez vos talents naturels et utilisez-les comme fondation pour traverser les défis plus complexes.":
        "Reconheçam os seus talentos naturais e utilizem-nos como base para atravessar desafios mais complexos.",

      "Opportunités de croissance":
        "Oportunidades de crescimento",

      "Vos sextiles":
        "Os seus sextis",

      "Le sextile ouvre des portes et montre ce que le couple peut développer par la curiosité, l’initiative et la coopération.":
        "O sextil abre portas e mostra aquilo que a relação pode desenvolver através da curiosidade, iniciativa e cooperação.",

      "Un potentiel à activer":
        "Um potencial a ativar",

      "Les sextiles sont harmonieux, mais ils demandent une participation consciente. Ils montrent les occasions d’apprendre, de créer et de faire évoluer la relation lorsque chacun accepte de faire un pas vers l’autre.":
        "Os sextis são harmoniosos, mas exigem participação consciente. Mostram oportunidades para aprender, criar e desenvolver a relação quando cada pessoa aceita aproximar-se da outra.",

      "Ils offrent de nombreuses possibilités de dialogue, de collaboration et d’enrichissement mutuel.":
        "Oferecem muitas possibilidades de diálogo, colaboração e enriquecimento mútuo.",

      "Le potentiel peut rester inutilisé si le couple attend que les choses se développent seules sans initiative ni engagement.":
        "O potencial pode permanecer inutilizado se a relação esperar que tudo se desenvolva sozinho, sem iniciativa nem compromisso.",

      "Transformez les possibilités en habitudes concrètes : projets partagés, nouvelles expériences et temps de qualité.":
        "Transformem possibilidades em hábitos concretos: projetos partilhados, novas experiências e tempo de qualidade.",

      "Tensions créatrices":
        "Tensões criativas",

      "Vos carrés":
        "As suas quadraturas",

      "Le carré confronte deux énergies qui cherchent à agir différemment et pousse la relation à évoluer.":
        "A quadratura confronta duas energias que procuram agir de forma diferente e impulsiona a relação a evoluir.",

      "Une tension qui demande une réponse":
        "Uma tensão que exige uma resposta",

      "Les carrés révèlent les domaines où les réactions sont rapides, défensives ou contradictoires. Ils peuvent créer des conflits, mais ils donnent aussi au couple l’énergie nécessaire pour changer, décider et dépasser certains automatismes.":
        "As quadraturas revelam áreas onde as reações podem ser rápidas, defensivas ou contraditórias. Podem criar conflitos, mas também fornecem à relação a energia necessária para mudar, decidir e ultrapassar certos automatismos.",

      "Ils empêchent la relation de stagner et peuvent développer courage, franchise, maturité et capacité à résoudre les problèmes.":
        "Impedem que a relação fique estagnada e podem desenvolver coragem, franqueza, maturidade e capacidade de resolver problemas.",

      "Les mêmes désaccords peuvent revenir si chacun défend uniquement sa position sans chercher le besoin profond derrière la réaction.":
        "Os mesmos desacordos podem voltar se cada pessoa defender apenas a sua posição sem procurar a necessidade profunda por trás da reação.",

      "Ne cherchez pas immédiatement un coupable. Identifiez plutôt les deux besoins légitimes qui entrent en collision.":
        "Não procurem imediatamente um culpado. Identifiquem antes as duas necessidades legítimas que estão a entrar em conflito.",

      "Attraction des contraires":
        "Atração dos opostos",

      "Vos oppositions":
        "As suas oposições",

      "L’opposition place deux énergies face à face et crée une forte attraction accompagnée d’un besoin d’équilibre.":
        "A oposição coloca duas energias frente a frente e cria uma forte atração acompanhada pela necessidade de equilíbrio.",

      "Deux pôles d’un même axe":
        "Dois polos do mesmo eixo",

      "Les oppositions montrent des différences visibles qui peuvent fasciner autant qu’elles déstabilisent. Chacun peut porter une qualité que l’autre doit apprendre à reconnaître, intégrer ou respecter.":
        "As oposições mostram diferenças visíveis que podem fascinar tanto quanto desestabilizar. Cada pessoa pode representar uma qualidade que a outra precisa aprender a reconhecer, integrar ou respeitar.",

      "Elles apportent complémentarité, perspective et capacité à voir une situation depuis deux angles opposés.":
        "Trazem complementaridade, perspetiva e capacidade de observar uma situação a partir de dois ângulos opostos.",

      "Le couple peut tomber dans une dynamique où chacun projette sur l’autre ce qu’il refuse ou comprend moins bien en lui-même.":
        "A relação pode entrar numa dinâmica em que cada pessoa projeta na outra aquilo que rejeita ou compreende menos bem em si própria.",

      "Cherchez le point d’équilibre entre vos deux positions plutôt que d’essayer de prouver qu’une seule manière est correcte.":
        "Procurem o ponto de equilíbrio entre as duas posições em vez de tentar provar que apenas uma forma está correta.",

      "Ajustements subtils":
        "Ajustes subtis",

      "Vos quinconces":
        "Os seus quincúncios",

      "Le quinconce relie des énergies qui ne parlent pas immédiatement le même langage et nécessitent des adaptations répétées.":
        "O quincúncio liga energias que não falam imediatamente a mesma linguagem e exigem adaptações repetidas.",

      "Comprendre ce qui échappe":
        "Compreender o que escapa",

      "Les quinconces créent souvent un sentiment d’incompréhension difficile à expliquer. Il ne s’agit pas toujours d’un conflit direct, mais plutôt d’un décalage de rythme, de priorité ou de manière d’interpréter les événements.":
        "Os quincúncios criam frequentemente uma sensação de incompreensão difícil de explicar. Nem sempre se trata de um conflito direto, mas sim de uma diferença de ritmo, prioridade ou forma de interpretar os acontecimentos.",

      "Ils développent l’adaptabilité, la patience et une compréhension plus fine des différences individuelles.":
        "Desenvolvem adaptabilidade, paciência e uma compreensão mais subtil das diferenças individuais.",

      "La frustration peut s’accumuler si les ajustements sont toujours faits par la même personne ou si les besoins restent implicites.":
        "A frustração pode acumular-se se os ajustes forem sempre feitos pela mesma pessoa ou se as necessidades permanecerem implícitas.",

      "Formulez précisément ce qui doit être ajusté et vérifiez régulièrement que l’effort demeure équilibré entre vous.":
        "Expressem claramente aquilo que precisa de ser ajustado e verifiquem regularmente se o esforço continua equilibrado entre ambos.",

      "Intensification":
        "Intensificação",

      "Opportunité":
        "Oportunidade",

      "Tension créatrice":
        "Tensão criativa",

      "Polarité":
        "Polaridade",

      "Ajustement":
        "Ajuste",

      "Vos aspects les plus importants":
        "Os seus aspetos mais importantes",

      "Aucun aspect de ce type n’apparaît parmi les interactions principales calculées pour vos deux thèmes. Cela ne signifie pas que cette énergie est absente de votre relation, seulement qu’elle n’est pas dominante dans les aspects retenus.":
        "Nenhum aspeto deste tipo aparece entre as principais interações calculadas para os seus dois mapas. Isto não significa que esta energia esteja ausente da relação, apenas que não é dominante entre os aspetos selecionados.",

      "Votre potentiel":
        "O seu potencial",

      "Votre point de vigilance":
        "O seu ponto de atenção",

      "Votre clé d’intégration":
        "A sua chave de integração",

      "Classement général":
        "Classificação geral",

      "Vos 10 aspects les plus puissants":
        "Os seus 10 aspetos mais poderosos",

      "Plus l’orbe est précis, plus l’interaction entre les deux planètes tend à se manifester clairement dans la dynamique relationnelle.":
        "Quanto mais preciso for o orbe, mais claramente a interação entre os dois planetas tende a manifestar-se na dinâmica da relação.",

      "Les connexions dominantes":
        "As conexões dominantes",

      "Ce classement rassemble les aspects les plus précis de votre synastrie. Ils ne sont pas nécessairement tous faciles ou difficiles : ils représentent surtout les interactions les plus présentes, les plus répétitives ou les plus significatives dans votre lien.":
        "Esta classificação reúne os aspetos mais precisos da sua sinastria. Não são necessariamente todos fáceis ou difíceis: representam sobretudo as interações mais presentes, repetitivas ou significativas da sua ligação.",

      "Aucun aspect n’est disponible pour établir ce classement. Vérifiez que les deux thèmes ont été calculés avec les positions planétaires complètes.":
        "Não existem aspetos disponíveis para estabelecer esta classificação. Verifiquem se ambos os mapas foram calculados com as posições planetárias completas.",

      "Lecture globale":
        "Leitura global",

      "La dynamique générale de vos aspects":
        "A dinâmica geral dos seus aspetos",

      "Votre relation se construit dans l’équilibre entre facilités, tensions, intensité et capacité d’ajustement.":
        "A sua relação constrói-se no equilíbrio entre facilidades, tensões, intensidade e capacidade de adaptação.",

      "aspects harmonieux":
        "aspetos harmoniosos",

      "aspects d’évolution":
        "aspetos de evolução",

      "aspects analysés":
        "aspetos analisados",

      "Vos appuis naturels":
        "Os seus apoios naturais",

      "Les trigones et sextiles montrent les domaines où la relation peut retrouver plus facilement confiance, complicité et coopération. Ils constituent vos ressources les plus stables.":
        "Os trígonos e sextis mostram as áreas onde a relação pode recuperar mais facilmente confiança, cumplicidade e cooperação. Constituem alguns dos seus recursos mais estáveis.",

      "Vos moteurs d’évolution":
        "Os seus motores de evolução",

      "Les carrés, oppositions et quinconces révèlent les zones où la relation vous demande davantage de conscience, d’ajustement et de maturité.":
        "As quadraturas, oposições e quincúncios revelam as áreas onde a relação exige maior consciência, adaptação e maturidade.",

      "Votre intensité":
        "A sua intensidade",

      "Votre équilibre":
        "O seu equilíbrio",

      "Une relation riche ne repose pas sur l’absence de tension. Elle repose sur la capacité à utiliser les aspects harmonieux pour mieux traverser les aspects qui demandent un effort.":
        "Uma relação rica não depende da ausência de tensão. Depende da capacidade de utilizar os aspetos harmoniosos para atravessar melhor aqueles que exigem esforço.",

      "La clé de votre synastrie":
        "A chave da sua sinastria",

      "Vos aspects racontent une relation dynamique, composée de facilités, d’intensité et d’apprentissages. Les aspects harmonieux montrent où vous pouvez vous appuyer l’un sur l’autre. Les aspects difficiles indiquent les endroits précis où le couple gagne en profondeur lorsqu’il choisit le dialogue, la responsabilité et l’adaptation.":
        "Os seus aspetos descrevem uma relação dinâmica composta por facilidades, intensidade e aprendizagem. Os aspetos harmoniosos mostram onde podem apoiar-se mutuamente. Os aspetos difíceis indicam os pontos precisos onde a relação ganha profundidade quando escolhe diálogo, responsabilidade e adaptação.",

      "Votre conseil final":
        "O seu conselho final",

      "Lorsque vous rencontrez une difficulté, cherchez d’abord quel aspect harmonieux peut vous aider : la communication, la tendresse, la patience, l’humour ou un projet commun. Vos forces naturelles sont les meilleurs outils pour intégrer vos tensions.":
        "Quando encontrarem uma dificuldade, procurem primeiro qual recurso harmonioso pode ajudar: comunicação, ternura, paciência, humor ou um projeto comum. Os seus pontos fortes naturais são as melhores ferramentas para integrar as tensões.",

      "L’identité de l’un soutient les besoins émotionnels de l’autre, favorisant reconnaissance, sécurité et compréhension.":
        "A identidade de uma pessoa apoia as necessidades emocionais da outra, favorecendo reconhecimento, segurança e compreensão.",

      "L’expression personnelle de l’un peut parfois heurter la sensibilité ou les besoins affectifs de l’autre.":
        "A expressão pessoal de uma pessoa pode por vezes ferir a sensibilidade ou as necessidades afetivas da outra.",

      "Cette connexion lie fortement identité et sensibilité, créant une impression de familiarité et de reconnaissance.":
        "Esta conexão liga fortemente identidade e sensibilidade, criando uma sensação de familiaridade e reconhecimento.",

      "L’affection et le désir circulent avec naturel, renforçant attraction, charme, sensualité et initiative.":
        "O afeto e o desejo fluem naturalmente, reforçando atração, charme, sensualidade e iniciativa.",

      "L’attirance peut être intense, mais les rythmes amoureux ou les manières d’exprimer le désir peuvent entrer en tension.":
        "A atração pode ser intensa, mas os ritmos amorosos ou as formas de expressar o desejo podem entrar em tensão.",

      "Cette interaction intensifie l’alchimie, l’attirance et le besoin de vivre la relation de manière concrète.":
        "Esta interação intensifica a química, a atração e a necessidade de viver a relação de forma concreta.",

      "La tendresse répond facilement aux besoins affectifs et favorise douceur, réconfort et plaisir d’être ensemble.":
        "A ternura responde facilmente às necessidades afetivas e favorece suavidade, conforto e prazer de estarem juntos.",

      "La manière de donner de l’amour ne correspond pas toujours exactement au besoin émotionnel de l’autre.":
        "A forma de dar amor nem sempre corresponde exatamente à necessidade emocional da outra pessoa.",

      "Cette connexion renforce l’attachement, la douceur et le besoin de prendre soin de la relation.":
        "Esta conexão reforça o apego, a ternura e a necessidade de cuidar da relação.",

      "Les idées et les mots trouvent plus facilement leur chemin, ce qui favorise dialogue, décisions et compréhension.":
        "As ideias e as palavras encontram mais facilmente o seu caminho, favorecendo diálogo, decisões e compreensão.",

      "Les raisonnements, le ton ou la vitesse des échanges peuvent créer des malentendus et des réactions défensives.":
        "Os raciocínios, o tom ou a rapidez das conversas podem criar mal-entendidos e reações defensivas.",

      "La communication devient un élément central de la relation et influence fortement la manière de résoudre les situations.":
        "A comunicação torna-se um elemento central da relação e influencia fortemente a forma de resolver as situações.",

      "Saturne apporte stabilité, fiabilité et capacité à construire dans le temps avec sérieux et constance.":
        "Saturno traz estabilidade, fiabilidade e capacidade de construir ao longo do tempo com seriedade e constância.",

      "L’un peut parfois se sentir limité, jugé ou ralenti, tandis que l’autre porte davantage de responsabilités.":
        "Uma pessoa pode por vezes sentir-se limitada, julgada ou travada, enquanto a outra assume mais responsabilidades.",

      "Cette connexion souligne les thèmes d’engagement, de durée, de maturité et de responsabilité.":
        "Esta conexão destaca os temas do compromisso, duração, maturidade e responsabilidade.",

      "Uranus apporte fraîcheur, liberté, créativité et capacité à renouveler la relation.":
        "Urano traz frescura, liberdade, criatividade e capacidade de renovar a relação.",

      "L’imprévisibilité ou le besoin d’espace peut créer de l’instabilité et un sentiment d’insécurité.":
        "A imprevisibilidade ou a necessidade de espaço pode criar instabilidade e uma sensação de insegurança.",

      "Cette interaction rend la relation stimulante, originale et difficile à enfermer dans une routine rigide.":
        "Esta interação torna a relação estimulante, original e difícil de prender numa rotina rígida.",

      "Neptune soutient compassion, intuition, imagination et sentiment d’une connexion subtile.":
        "Netuno apoia a compaixão, a intuição, a imaginação e a sensação de uma conexão subtil.",

      "L’idéalisation, les attentes implicites ou le manque de clarté peuvent créer confusion et déception.":
        "A idealização, as expectativas implícitas ou a falta de clareza podem criar confusão e desilusão.",

      "Cette connexion colore la relation de sensibilité, de rêve, d’intuition et parfois d’idéalisation.":
        "Esta conexão dá à relação sensibilidade, sonho, intuição e, por vezes, idealização.",

      "Pluton favorise profondeur, transformation, guérison et capacité à traverser ensemble des périodes intenses.":
        "Plutão favorece profundidade, transformação, cura e capacidade de atravessar juntos períodos intensos.",

      "Des enjeux de contrôle, de jalousie, de peur de perdre ou de pouvoir peuvent devenir très sensibles.":
        "Questões de controlo, ciúme, medo de perder ou poder podem tornar-se muito sensíveis.",

      "Cette interaction intensifie fortement le lien et pousse chacun à transformer certaines zones profondes.":
        "Esta interação intensifica fortemente a ligação e incentiva cada pessoa a transformar áreas profundas.",

      "Cette interaction soutient naturellement l’expression personnelle, l’attachement, l’émotion ou le désir.":
        "Esta interação apoia naturalmente a expressão pessoal, o apego, a emoção ou o desejo.",

      "Cette connexion demande de mieux comprendre les réactions personnelles, affectives ou instinctives de chacun.":
        "Esta conexão exige uma melhor compreensão das reações pessoais, afetivas ou instintivas de cada pessoa.",

      "Cette interaction joue un rôle important dans la manière dont vous vous reconnaissez et réagissez l’un à l’autre.":
        "Esta interação desempenha um papel importante na forma como se reconhecem e reagem um ao outro.",

      "Cet aspect influence votre dynamique relationnelle et montre comment deux fonctions planétaires cherchent à coopérer, se confronter ou s’ajuster.":
        "Este aspeto influencia a sua dinâmica relacional e mostra como duas funções planetárias procuram cooperar, confrontar-se ou adaptar-se.",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Lua",
      Mercure: "Mercúrio",
      Vénus: "Vênus",
      Mars: "Marte",
      Jupiter: "Júpiter",
      Saturne: "Saturno",
      Uranus: "Urano",
      Neptune: "Netuno",
      Pluton: "Plutão",
    },

    aspects: {
      Conjonction:
        "Conjunção",

      Trigone:
        "Trígono",

      Sextile:
        "Sextil",

      Carré:
        "Quadratura",

      Opposition:
        "Oposição",

      Quinconce:
        "Quincúncio",
    },

    nature: {
      Intensification:
        "Intensificação",

      "Harmonie naturelle":
        "Harmonia natural",

      Opportunité:
        "Oportunidade",

      "Tension créatrice":
        "Tensão criativa",

      Polarité:
        "Polaridade",

      Ajustement:
        "Ajuste",
    },

    degreeWord:
      "graus",

    aspectSingular:
      "aspeto",

    aspectPlural:
      "aspetos",

    ofThisType:
      "deste tipo",

    closestOrb:
      "orbe mais preciso",

    conjunctionSingular:
      "conjunção",

    conjunctionPlural:
      "conjunções",
  },
};

/* =========================================================
   EXTRA DYNAMIC TEXT

   Ces textes contiennent des valeurs calculées et ne peuvent
   pas être traduits par simple remplacement littéral.
========================================================= */

const ASPECTS_EXTRA: Record<
  NonFrenchLocale,
  {
    intensityTemplate: string;
    intensityFragment: string;
  }
> = {
  en: {
    intensityTemplate:
      "Your {count} {conjunctionWord} strongly concentrate certain energies. They can create closeness, fusion, and very immediate reactions.",
    intensityFragment:
      " strongly concentrate certain ",
  },

  es: {
    intensityTemplate:
      "Sus {count} {conjunctionWord} concentran fuertemente ciertas energías. Pueden crear cercanía, fusión y reacciones muy inmediatas.",
    intensityFragment:
      " concentran fuertemente ciertas ",
  },

  de: {
    intensityTemplate:
      "Ihre {count} {conjunctionWord} bündeln bestimmte Energien besonders stark. Sie können Nähe, Verschmelzung und sehr unmittelbare Reaktionen erzeugen.",
    intensityFragment:
      " konzentrieren bestimmte ",
  },

  it: {
    intensityTemplate:
      "Le vostre {count} {conjunctionWord} concentrano fortemente alcune energie. Possono creare vicinanza, fusione e reazioni molto immediate.",
    intensityFragment:
      " concentrano fortemente alcune ",
  },

  pt: {
    intensityTemplate:
      "As suas {count} {conjunctionWord} concentram fortemente determinadas energias. Podem criar proximidade, fusão e reações muito imediatas.",
    intensityFragment:
      " concentram fortemente determinadas ",
  },
};

/* =========================================================
   REPLACEMENT ENGINE
========================================================= */

type Replacement = {
  start: number;
  end: number;
  value: string;
};

function normalizeVisibleText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (a, b) =>
        b.start - a.start,
    );

  let output = source;

  for (
    const replacement
    of sorted
  ) {
    output =
      output.slice(
        0,
        replacement.start,
      ) +
      replacement.value +
      output.slice(
        replacement.end,
      );
  }

  return output;
}

/* =========================================================
   SAFE AST LOCALIZATION
========================================================= */

function localizeSafeLiterals(
  source: string,
  translations: Record<
    string,
    string
  >,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityAspects.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  /*
   * Ces valeurs servent à la logique.
   * Elles ne doivent JAMAIS être traduites.
   */
  const technicalValues =
    new Set([
      "conjunction",
      "trine",
      "sextile",
      "square",
      "opposition",
      "quincunx",

      "sun",
      "soleil",

      "moon",
      "lune",

      "mercury",
      "mercure",

      "venus",

      "mars",

      "saturn",
      "saturne",

      "uranus",

      "neptune",

      "pluto",
      "pluton",

      "A4",

      "NFD",
    ]);

  const visit = (
    node: ts.Node,
  ): void => {
    /*
     * Texte directement visible
     * dans JSX.
     */
    if (
      ts.isJsxText(node)
    ) {
      const original =
        normalizeVisibleText(
          node.getText(
            sourceFile,
          ),
        );

      const translated =
        translations[original];

      if (
        translated &&
        translated !== original
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              translated,
            )}}`,
        });
      }
    }

    /*
     * Chaînes TypeScript.
     *
     * Ça couvre :
     * - ASPECT_PAGES
     * - getAspectNature()
     * - getAspectInterpretation()
     * - fallbacks de noms
     * - textes des attributs JSX
     */
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      if (
        technicalValues.has(
          node.text,
        )
      ) {
        ts.forEachChild(
          node,
          visit,
        );

        return;
      }

      /*
       * La propriété type des pages
       * doit rester :
       *
       * conjunction
       * trine
       * sextile
       * square
       * opposition
       * quincunx
       */
      if (
        ts.isPropertyAssignment(
          node.parent,
        )
      ) {
        const propertyName =
          node.parent.name.getText(
            sourceFile,
          );

        if (
          propertyName === "type"
        ) {
          ts.forEachChild(
            node,
            visit,
          );

          return;
        }
      }

      const exact =
        node.text;

      const normalized =
        normalizeVisibleText(
          exact,
        );

      const translated =
        translations[exact] ??
        translations[normalized];

      if (
        translated &&
        translated !== exact
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            JSON.stringify(
              translated,
            ),
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

/* =========================================================
   HELPERS ADDED TO GENERATED TSX
========================================================= */

function buildHelpers(
  data: LocaleData,
  locale: NonFrenchLocale,
): string {
  return `
const __ASPECTS_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __ASPECTS_NAMES =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __ASPECTS_NATURE =
  ${JSON.stringify(
    data.nature,
    null,
    2,
  )} as Record<string, string>;

const __ASPECTS_DEGREE_WORD =
  ${JSON.stringify(
    data.degreeWord,
  )};

const __ASPECTS_ASPECT_SINGULAR =
  ${JSON.stringify(
    data.aspectSingular,
  )};

const __ASPECTS_ASPECT_PLURAL =
  ${JSON.stringify(
    data.aspectPlural,
  )};

const __ASPECTS_OF_THIS_TYPE =
  ${JSON.stringify(
    data.ofThisType,
  )};

const __ASPECTS_CLOSEST_ORB =
  ${JSON.stringify(
    data.closestOrb,
  )};

const __ASPECTS_CONJUNCTION_SINGULAR =
  ${JSON.stringify(
    data.conjunctionSingular,
  )};

const __ASPECTS_CONJUNCTION_PLURAL =
  ${JSON.stringify(
    data.conjunctionPlural,
  )};

const __ASPECTS_INTERPRETATIONS = {
  sunMoonHarmonious:
    ${JSON.stringify(
      data.text[
        "L’identité de l’un soutient les besoins émotionnels de l’autre, favorisant reconnaissance, sécurité et compréhension."
      ],
    )},

  sunMoonChallenging:
    ${JSON.stringify(
      data.text[
        "L’expression personnelle de l’un peut parfois heurter la sensibilité ou les besoins affectifs de l’autre."
      ],
    )},

  sunMoonNeutral:
    ${JSON.stringify(
      data.text[
        "Cette connexion lie fortement identité et sensibilité, créant une impression de familiarité et de reconnaissance."
      ],
    )},

  venusMarsHarmonious:
    ${JSON.stringify(
      data.text[
        "L’affection et le désir circulent avec naturel, renforçant attraction, charme, sensualité et initiative."
      ],
    )},

  venusMarsChallenging:
    ${JSON.stringify(
      data.text[
        "L’attirance peut être intense, mais les rythmes amoureux ou les manières d’exprimer le désir peuvent entrer en tension."
      ],
    )},

  venusMarsNeutral:
    ${JSON.stringify(
      data.text[
        "Cette interaction intensifie l’alchimie, l’attirance et le besoin de vivre la relation de manière concrète."
      ],
    )},

  moonVenusHarmonious:
    ${JSON.stringify(
      data.text[
        "La tendresse répond facilement aux besoins affectifs et favorise douceur, réconfort et plaisir d’être ensemble."
      ],
    )},

  moonVenusChallenging:
    ${JSON.stringify(
      data.text[
        "La manière de donner de l’amour ne correspond pas toujours exactement au besoin émotionnel de l’autre."
      ],
    )},

  moonVenusNeutral:
    ${JSON.stringify(
      data.text[
        "Cette connexion renforce l’attachement, la douceur et le besoin de prendre soin de la relation."
      ],
    )},

  mercuryHarmonious:
    ${JSON.stringify(
      data.text[
        "Les idées et les mots trouvent plus facilement leur chemin, ce qui favorise dialogue, décisions et compréhension."
      ],
    )},

  mercuryChallenging:
    ${JSON.stringify(
      data.text[
        "Les raisonnements, le ton ou la vitesse des échanges peuvent créer des malentendus et des réactions défensives."
      ],
    )},

  mercuryNeutral:
    ${JSON.stringify(
      data.text[
        "La communication devient un élément central de la relation et influence fortement la manière de résoudre les situations."
      ],
    )},

  saturnHarmonious:
    ${JSON.stringify(
      data.text[
        "Saturne apporte stabilité, fiabilité et capacité à construire dans le temps avec sérieux et constance."
      ],
    )},

  saturnChallenging:
    ${JSON.stringify(
      data.text[
        "L’un peut parfois se sentir limité, jugé ou ralenti, tandis que l’autre porte davantage de responsabilités."
      ],
    )},

  saturnNeutral:
    ${JSON.stringify(
      data.text[
        "Cette connexion souligne les thèmes d’engagement, de durée, de maturité et de responsabilité."
      ],
    )},

  uranusHarmonious:
    ${JSON.stringify(
      data.text[
        "Uranus apporte fraîcheur, liberté, créativité et capacité à renouveler la relation."
      ],
    )},

  uranusChallenging:
    ${JSON.stringify(
      data.text[
        "L’imprévisibilité ou le besoin d’espace peut créer de l’instabilité et un sentiment d’insécurité."
      ],
    )},

  uranusNeutral:
    ${JSON.stringify(
      data.text[
        "Cette interaction rend la relation stimulante, originale et difficile à enfermer dans une routine rigide."
      ],
    )},

  neptuneHarmonious:
    ${JSON.stringify(
      data.text[
        "Neptune soutient compassion, intuition, imagination et sentiment d’une connexion subtile."
      ],
    )},

  neptuneChallenging:
    ${JSON.stringify(
      data.text[
        "L’idéalisation, les attentes implicites ou le manque de clarté peuvent créer confusion et déception."
      ],
    )},

  neptuneNeutral:
    ${JSON.stringify(
      data.text[
        "Cette connexion colore la relation de sensibilité, de rêve, d’intuition et parfois d’idéalisation."
      ],
    )},

  plutoHarmonious:
    ${JSON.stringify(
      data.text[
        "Pluton favorise profondeur, transformation, guérison et capacité à traverser ensemble des périodes intenses."
      ],
    )},

  plutoChallenging:
    ${JSON.stringify(
      data.text[
        "Des enjeux de contrôle, de jalousie, de peur de perdre ou de pouvoir peuvent devenir très sensibles."
      ],
    )},

  plutoNeutral:
    ${JSON.stringify(
      data.text[
        "Cette interaction intensifie fortement le lien et pousse chacun à transformer certaines zones profondes."
      ],
    )},

  personalHarmonious:
    ${JSON.stringify(
      data.text[
        "Cette interaction soutient naturellement l’expression personnelle, l’attachement, l’émotion ou le désir."
      ],
    )},

  personalChallenging:
    ${JSON.stringify(
      data.text[
        "Cette connexion demande de mieux comprendre les réactions personnelles, affectives ou instinctives de chacun."
      ],
    )},

  personalNeutral:
    ${JSON.stringify(
      data.text[
        "Cette interaction joue un rôle important dans la manière dont vous vous reconnaissez et réagissez l’un à l’autre."
      ],
    )},

  fallback:
    ${JSON.stringify(
      data.text[
        "Cet aspect influence votre dynamique relationnelle et montre comment deux fonctions planétaires cherchent à coopérer, se confronter ou s’ajuster."
      ],
    )},
} as const;

const __ASPECTS_INTENSITY_TEMPLATE =
  ${JSON.stringify(
    ASPECTS_EXTRA[
      locale
    ].intensityTemplate,
  )};

function getLocalizedAspectInterpretation(
  aspect: CompatibilityAspect,
): string {
  const first =
    normalizeValue(
      aspect.person1Planet,
    );

  const second =
    normalizeValue(
      aspect.person2Planet,
    );

  const planets = [
    first,
    second,
  ];

  const hasSun =
    planets.some((planet) =>
      ["sun", "soleil"].includes(
        planet,
      ),
    );

  const hasMoon =
    planets.some((planet) =>
      ["moon", "lune"].includes(
        planet,
      ),
    );

  const hasMercury =
    planets.some((planet) =>
      ["mercury", "mercure"].includes(
        planet,
      ),
    );

  const hasVenus =
    planets.includes("venus");

  const hasMars =
    planets.includes("mars");

  const hasSaturn =
    planets.some((planet) =>
      ["saturn", "saturne"].includes(
        planet,
      ),
    );

  const hasUranus =
    planets.includes("uranus");

  const hasNeptune =
    planets.includes("neptune");

  const hasPluto =
    planets.some((planet) =>
      ["pluto", "pluton"].includes(
        planet,
      ),
    );

  const harmonious =
    aspect.type === "trine" ||
    aspect.type === "sextile";

  const challenging =
    aspect.type === "square" ||
    aspect.type === "opposition" ||
    aspect.type === "quincunx";

  if (hasSun && hasMoon) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.sunMoonHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.sunMoonChallenging
        : __ASPECTS_INTERPRETATIONS.sunMoonNeutral;
  }

  if (hasVenus && hasMars) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.venusMarsHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.venusMarsChallenging
        : __ASPECTS_INTERPRETATIONS.venusMarsNeutral;
  }

  if (hasMoon && hasVenus) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.moonVenusHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.moonVenusChallenging
        : __ASPECTS_INTERPRETATIONS.moonVenusNeutral;
  }

  if (hasMercury) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.mercuryHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.mercuryChallenging
        : __ASPECTS_INTERPRETATIONS.mercuryNeutral;
  }

  if (hasSaturn) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.saturnHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.saturnChallenging
        : __ASPECTS_INTERPRETATIONS.saturnNeutral;
  }

  if (hasUranus) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.uranusHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.uranusChallenging
        : __ASPECTS_INTERPRETATIONS.uranusNeutral;
  }

  if (hasNeptune) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.neptuneHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.neptuneChallenging
        : __ASPECTS_INTERPRETATIONS.neptuneNeutral;
  }

  if (hasPluto) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.plutoHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.plutoChallenging
        : __ASPECTS_INTERPRETATIONS.plutoNeutral;
  }

  if (
    hasSun ||
    hasMoon ||
    hasVenus ||
    hasMars
  ) {
    return harmonious
      ? __ASPECTS_INTERPRETATIONS.personalHarmonious
      : challenging
        ? __ASPECTS_INTERPRETATIONS.personalChallenging
        : __ASPECTS_INTERPRETATIONS.personalNeutral;
  }

  return __ASPECTS_INTERPRETATIONS.fallback;
}

function fillAspectsTemplate(
  template: string,
  values: Record<string, string>,
): string {
  let output = template;

  for (
    const [key, value]
    of Object.entries(values)
  ) {
    output = output
      .split(\`{\${key}}\`)
      .join(value);
  }

  return output;
}

function getLocalizedIntensityText(
  conjunctions: number,
): string {
  return fillAspectsTemplate(
    __ASPECTS_INTENSITY_TEMPLATE,
    {
      count:
        String(conjunctions),

      conjunctionWord:
        conjunctions === 1
          ? __ASPECTS_CONJUNCTION_SINGULAR
          : __ASPECTS_CONJUNCTION_PLURAL,
    },
  );
}

function localizeAspectPlanet(
  value: string,
): string {
  return (
    __ASPECTS_PLANETS[value] ??
    value
  );
}

function localizeAspectName(
  value: string,
): string {
  return (
    __ASPECTS_NAMES[value] ??
    value
  );
}

function localizeAspectNature(
  value: string,
): string {
  return (
    __ASPECTS_NATURE[value] ??
    value
  );
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
  locale: NonFrenchLocale,
): string {
  const marker =
    "function normalizeValue(";

  if (
    !source.includes(
      marker,
    )
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      data,
      locale,
    )}\n${marker}`,
  );
}

/* =========================================================
   TARGETED DYNAMIC DISPLAY
========================================================= */

function replaceDynamicDisplay(
  source: string,
  locale: NonFrenchLocale,
): string {
  let output = source;

  /*
   * Page 36 — IMPORTANT.
   *
   * Le build i18n traduit déjà les morceaux JSX normaux,
   * mais ne traduit pas cette expression de chaîne :
   *
   * {" concentrent fortement certaines "}
   *
   * On la remplace donc directement, indépendamment du reste
   * de la phrase et sans dépendre d'un regex sur le bloc complet.
   */
  output =
    output.replace(
      /\{\s*" concentrent fortement certaines "\s*\}/g,
      `{${JSON.stringify(
        ASPECTS_EXTRA[
          locale
        ].intensityFragment,
      )}}`,
    );


  /*
   * Page 36 — remplacer le bloc complet AVANT les
   * remplacements partiels du pluriel.
   */
  output =
    output.replace(
      /Vos\s*\{conjunctions\}\s*conjonction\s*\{conjunctions\s*>\s*1\s*\?\s*"s"\s*:\s*""\}\s*\{" concentrent fortement certaines "\}\s*énergies\.\s*Elles peuvent créer\s*proximité, fusion et réactions\s*très immédiates\./g,
      `{getLocalizedIntensityText(
              conjunctions,
            )}`,
    );

  /*
   * -------------------------------------------------------
   * AspectCard
   *
   * Planète 1 + aspect + planète 2
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person1Planet,\s*\)\}/g,
      `{localizeAspectPlanet(
            translateCompatibilityPlanet(
              aspect.person1Planet,
            ),
          )}`,
    );

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person2Planet,\s*\)\}/g,
      `{localizeAspectPlanet(
            translateCompatibilityPlanet(
              aspect.person2Planet,
            ),
          )}`,
    );

  output =
    output.replace(
      /\{translateCompatibilityAspect\(\s*aspect\.type,\s*\)\}/g,
      `{localizeAspectName(
            translateCompatibilityAspect(
              aspect.type,
            ),
          )}`,
    );

  /*
   * -------------------------------------------------------
   * Nature de l'aspect.
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /\{getAspectNature\(\s*aspect\.type,\s*\)\}/g,
      `{localizeAspectNature(
            getAspectNature(
              aspect.type,
            ),
          )}`,
    );

  output =
    output.replace(
      /\{getAspectNature\(\s*definition\.type,\s*\)\}/g,
      `{localizeAspectNature(
              getAspectNature(
                definition.type,
              ),
            )}`,
    );

  /*
   * -------------------------------------------------------
   * "deg"
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /\{" deg"\}/g,
      `{" "}{__ASPECTS_DEGREE_WORD}`,
    );

  /*
   * -------------------------------------------------------
   * Nombre d'aspects de ce type.
   *
   * Original :
   *
   * aspect
   * {total > 1 ? "s" : ""}
   * {" de ce type"}
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /aspect\s*\{total > 1 \? "s" : ""\}\s*\{" de ce type"\}/g,
      `{total === 1
              ? __ASPECTS_ASPECT_SINGULAR
              : __ASPECTS_ASPECT_PLURAL}
            {" "}
            {__ASPECTS_OF_THIS_TYPE}`,
    );

  /*
   * -------------------------------------------------------
   * Orbe le plus précis
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /orbe le plus précis/g,
      "{__ASPECTS_CLOSEST_ORB}",
    );

  /*
   * -------------------------------------------------------
   * Page 36 :
   *
   * Vos X conjonction(s) concentrent...
   *
   * Le mot doit changer correctement
   * selon la langue.
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /Vos \{conjunctions\} conjonction\s*\{conjunctions > 1 \? "s" : ""\}/g,
      `{conjunctions}{" "}
            {conjunctions === 1
              ? __ASPECTS_CONJUNCTION_SINGULAR
              : __ASPECTS_CONJUNCTION_PLURAL}`,
    );

  /*
   * -------------------------------------------------------
   * Interprétations d'aspects.
   *
   * Dans le TSX français elles sont construites par
   * concaténation de plusieurs chaînes. Une traduction
   * littérale ne peut donc pas les attraper de façon fiable.
   * -------------------------------------------------------
   */
  output =
    output.replace(
      /\{getAspectInterpretation\(\s*aspect,\s*\)\}/g,
      "{getLocalizedAspectInterpretation(aspect)}",
    );

  /*
   * -------------------------------------------------------
   * Page 36 — bloc d'intensité avec nombre dynamique.
   * -------------------------------------------------------
   */
  output =
    output.replace(
      /Vos\s*\{conjunctions\}\s*conjonction\s*\{conjunctions\s*>\s*1\s*\?\s*"s"\s*:\s*""\}\s*\{" concentrent fortement certaines "\}\s*énergies\.\s*Elles peuvent créer\s*proximité, fusion et réactions\s*très immédiates\./g,
      `{getLocalizedIntensityText(
              conjunctions,
            )}`,
    );

  return output;
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeCompatibilityAspects(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français reste exactement
   * le fichier source.
   */
  if (
    locale === "fr"
  ) {
    return source;
  }

  const data =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  /*
   * 1.
   * Remplacer d'abord les blocs dynamiques
   * pendant que le TSX est encore en français.
   */
  let localized =
    replaceDynamicDisplay(
      source,
      locale as NonFrenchLocale,
    );

  /*
   * 2.
   * Traduire ensuite les textes statiques.
   */
  localized =
    localizeSafeLiterals(
      localized,
      data.text,
    );

  /*
   * 3.
   * Ajouter enfin les helpers nécessaires
   * aux valeurs dynamiques traduites.
   */
  localized =
    injectHelpers(
      localized,
      data,
      locale as NonFrenchLocale,
    );

  return localized;
}
