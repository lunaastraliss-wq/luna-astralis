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

  dynamicBalance: {
    harmonious: string;
    conjunctionSingular: string;
    conjunctionPlural: string;
    growth: string;
  };

  signature: {
    before: string;
    orb: string;
    after: string;
  };
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

      /* =====================================================
         SCORE
      ===================================================== */

      "Compatibilité exceptionnelle":
        "Exceptional compatibility",

      "Compatibilité très favorable":
        "Highly favorable compatibility",

      "Compatibilité solide et évolutive":
        "Strong and evolving compatibility",

      "Compatibilité exigeante mais prometteuse":
        "Demanding but promising compatibility",

      "Compatibilité complexe et transformatrice":
        "Complex and transformative compatibility",

      "Votre lien réunit de nombreuses facilités naturelles, une forte capacité de compréhension et un potentiel remarquable de croissance commune.":
        "Your bond combines many natural strengths, a strong capacity for mutual understanding, and remarkable potential for shared growth.",

      "Votre relation possède des bases favorables et plusieurs ressources naturelles pour traverser les périodes plus exigeantes.":
        "Your relationship has favorable foundations and several natural resources for navigating more demanding periods.",

      "Votre compatibilité repose sur un équilibre entre affinités réelles et apprentissages importants qui peuvent renforcer le couple.":
        "Your compatibility rests on a balance between genuine affinities and important lessons that can strengthen the relationship.",

      "Votre relation demande de la conscience, de la communication et des ajustements, mais elle peut devenir très constructive.":
        "Your relationship requires awareness, communication, and adjustment, but it can become highly constructive.",

      "Votre lien est intense et profondément évolutif. Il demande une grande maturité émotionnelle pour exprimer tout son potentiel.":
        "Your bond is intense and deeply transformative. It requires significant emotional maturity to express its full potential.",

      /* =====================================================
         STRENGTHS
      ===================================================== */

      "Cette connexion soutient l’attirance, l’alchimie et la capacité à maintenir une énergie vivante dans la relation.":
        "This connection supports attraction, chemistry, and the ability to keep a vibrant energy alive in the relationship.",

      "La tendresse et le besoin affectif peuvent se rejoindre avec douceur, favorisant sécurité et attachement.":
        "Tenderness and emotional needs can meet gently, encouraging security and attachment.",

      "Le dialogue, les idées et la capacité à comprendre l’autre constituent une ressource importante du couple.":
        "Dialogue, ideas, and the ability to understand one another are important resources for the relationship.",

      "L’identité de l’un et la sensibilité de l’autre peuvent se reconnaître et se soutenir de manière naturelle.":
        "One person's identity and the other's sensitivity can naturally recognize and support each other.",

      "Cette interaction favorise confiance, encouragement, expansion et vision commune.":
        "This interaction encourages confidence, mutual encouragement, expansion, and a shared vision.",

      "Cet aspect apporte une ressource naturelle que le couple peut utiliser pour renforcer sa stabilité et sa complicité.":
        "This aspect provides a natural resource the relationship can use to strengthen stability and connection.",

      /* =====================================================
         CHALLENGES
      ===================================================== */

      "Cette interaction peut créer un sentiment de pression, de distance, de jugement ou de responsabilité trop lourde.":
        "This interaction can create feelings of pressure, distance, judgment, or excessive responsibility.",

      "Cette connexion peut intensifier les peurs, les enjeux de contrôle, la jalousie ou le besoin de transformation.":
        "This connection can intensify fears, control issues, jealousy, or the need for transformation.",

      "Le besoin de liberté, l’imprévisibilité ou les changements soudains peuvent fragiliser le sentiment de sécurité.":
        "The need for freedom, unpredictability, or sudden changes can weaken the sense of security.",

      "Le ton, les mots ou la manière de raisonner peuvent provoquer des malentendus et des réactions défensives.":
        "Tone, words, or ways of reasoning can cause misunderstandings and defensive reactions.",

      "Les réactions rapides, l’impatience ou les différences de rythme peuvent transformer une frustration en confrontation.":
        "Quick reactions, impatience, or differences in pace can turn frustration into confrontation.",

      "Cette tension demande davantage de recul, d’écoute et de souplesse afin d’éviter les réactions répétitives.":
        "This tension requires more perspective, listening, and flexibility to avoid repetitive reactions.",

      /* =====================================================
         PAGE 45
      ===================================================== */

      "Vos ressources":
        "Your resources",

      "Les grandes forces de votre relation":
        "The great strengths of your relationship",

      "Ces énergies constituent les appuis naturels sur lesquels votre couple peut compter pour grandir, se rapprocher et traverser les périodes plus exigeantes.":
        "These energies are natural strengths your relationship can rely on to grow, become closer, and navigate more demanding periods.",

      "Ce qui vous unit naturellement":
        "What naturally unites you",

      "Vos forces ne se limitent pas aux aspects faciles. Certaines connexions intenses deviennent aussi de puissantes ressources lorsqu’elles sont vécues avec maturité, respect et conscience.":
        "Your strengths are not limited to easy aspects. Some intense connections can also become powerful resources when experienced with maturity, respect, and awareness.",

      "Vos cinq appuis principaux":
        "Your five main strengths",

      "Les données disponibles ne permettent pas d’établir un classement précis. Votre rapport demeure néanmoins utile pour comprendre les grandes dynamiques relationnelles.":
        "The available data does not allow a precise ranking to be established. Your report nevertheless remains useful for understanding the major dynamics of your relationship.",

      "Complicité":
        "Connection",

      "Les aspects harmonieux montrent les domaines où vous pouvez vous comprendre, collaborer et retrouver plus rapidement votre équilibre.":
        "Harmonious aspects reveal the areas where you can understand one another, collaborate, and regain balance more quickly.",

      "Intensité":
        "Intensity",

      "Les conjonctions concentrent l’énergie et donnent à certains thèmes une importance majeure dans votre histoire commune.":
        "Conjunctions concentrate energy and give certain themes major importance in your shared story.",

      "Résilience":
        "Resilience",

      "Vos ressources naturelles deviennent particulièrement précieuses lorsque vous traversez une période de doute, de fatigue ou de changement.":
        "Your natural resources become particularly valuable when you go through periods of doubt, fatigue, or change.",

      "Croissance":
        "Growth",

      "Votre relation possède un potentiel d’évolution lorsqu’elle transforme ses différences en compréhension plutôt qu’en opposition.":
        "Your relationship has growth potential when it transforms differences into understanding rather than opposition.",

      /* =====================================================
         PAGE 46
      ===================================================== */

      "Vos apprentissages":
        "Your lessons",

      "Les défis à transformer":
        "Challenges to transform",

      "Les tensions ne prédisent pas un échec. Elles montrent les endroits où la relation demande plus de conscience, de dialogue et de responsabilité.":
        "Tensions do not predict failure. They reveal the areas where the relationship requires greater awareness, dialogue, and responsibility.",

      "Comprendre avant de corriger":
        "Understand before correcting",

      "Un aspect difficile devient réellement problématique lorsqu’il reste inconscient. Dès que vous identifiez le besoin, la peur ou la différence derrière la réaction, vous récupérez une marge de choix.":
        "A difficult aspect becomes truly problematic when it remains unconscious. Once you identify the need, fear, or difference behind the reaction, you regain room to choose your response.",

      "Vos principaux points de vigilance":
        "Your main points of attention",

      "Aucun aspect difficile majeur ne se distingue dans les données analysées. Cela ne supprime pas les désaccords, mais indique une dynamique globale plus fluide.":
        "No major challenging aspect stands out in the analyzed data. This does not eliminate disagreements, but it suggests an overall smoother dynamic.",

      "Éviter la répétition":
        "Avoid repetition",

      "Lorsque le même conflit revient, cherchez le besoin non exprimé plutôt que de reprendre exactement la même discussion.":
        "When the same conflict returns, look for the unexpressed need instead of repeating exactly the same discussion.",

      "Réduire la projection":
        "Reduce projection",

      "Demandez-vous ce qui appartient réellement à l’autre et ce qui réveille une peur, une blessure ou une attente personnelle.":
        "Ask yourself what truly belongs to the other person and what is awakening a personal fear, wound, or expectation.",

      "Choisir le bon moment":
        "Choose the right moment",

      "Une discussion importante devient plus constructive lorsque les deux personnes sont disponibles, calmes et capables d’écouter.":
        "An important discussion becomes more constructive when both people are available, calm, and able to listen.",

      "Réparer rapidement":
        "Repair quickly",

      "La solidité d’un couple dépend moins de l’absence de conflit que de sa capacité à reconnaître, réparer et recommencer autrement.":
        "The strength of a relationship depends less on the absence of conflict than on its ability to acknowledge, repair, and begin again differently.",

      /* =====================================================
         PAGE 47
      ===================================================== */

      "Lecture globale":
        "Overall reading",

      "Votre potentiel amoureux":
        "Your romantic potential",

      "Ce score représente une synthèse symbolique de vos aspects. Il ne décide pas de l’avenir du couple, mais décrit la qualité des ressources et des apprentissages présents.":
        "This score is a symbolic synthesis of your aspects. It does not determine the future of the relationship, but describes the quality of the resources and lessons present.",

      "Compatibilité émotionnelle":
        "Emotional compatibility",

      "Votre potentiel affectif dépend de votre capacité à reconnaître les besoins de sécurité, de proximité, d’écoute et de réconfort de chacun.":
        "Your emotional potential depends on your ability to recognize each person's needs for security, closeness, listening, and reassurance.",

      "Compatibilité intellectuelle":
        "Intellectual compatibility",

      "La qualité de votre dialogue devient une force lorsque vous distinguez les faits, les émotions, les attentes et les interprétations.":
        "The quality of your dialogue becomes a strength when you distinguish facts, emotions, expectations, and interpretations.",

      "Compatibilité intime":
        "Intimate compatibility",

      "L’intimité se nourrit de confiance, de désir, de tendresse et de la liberté de parler clairement de ses besoins et de ses limites.":
        "Intimacy is nourished by trust, desire, tenderness, and the freedom to speak clearly about needs and boundaries.",

      "Compatibilité de vie":
        "Lifestyle compatibility",

      "Le quotidien devient plus harmonieux lorsque les responsabilités, le temps, l’argent et les projets sont discutés avec transparence.":
        "Daily life becomes more harmonious when responsibilities, time, money, and plans are discussed transparently.",

      "Potentiel à long terme":
        "Long-term potential",

      "Votre durée repose sur la capacité à préserver le lien tout en permettant à chacun de continuer à évoluer personnellement.":
        "Your longevity depends on preserving the bond while allowing each person to continue growing individually.",

      "Dynamique générale":
        "Overall dynamic",

      "« Une grande compatibilité ne signifie pas tout ressentir de la même manière, mais apprendre à faire de deux mondes différents un espace commun. »":
        "“Great compatibility does not mean feeling everything in the same way, but learning to turn two different worlds into a shared space.”",

      /* =====================================================
         PAGE 48
      ===================================================== */

      "Mise en pratique":
        "Putting it into practice",

      "Vos conseils personnalisés":
        "Your personalized guidance",

      "La compréhension astrologique devient réellement utile lorsqu’elle se transforme en gestes simples, réguliers et observables.":
        "Astrological understanding becomes truly useful when it is transformed into simple, consistent, and observable actions.",

      "Transformer la connaissance en action":
        "Turn knowledge into action",

      "Vous n’avez pas besoin de tout changer immédiatement. Choisissez une seule habitude relationnelle, appliquez-la pendant quelques semaines, puis observez ce qu’elle transforme dans votre manière de vous comprendre.":
        "You do not need to change everything immediately. Choose one relationship habit, practice it for a few weeks, and then observe how it changes the way you understand each other.",

      "Communication":
        "Communication",

      "Parlez du besoin derrière la réaction. Une phrase précise et calme est souvent plus utile qu’une longue accumulation de reproches.":
        "Talk about the need behind the reaction. One precise, calm sentence is often more useful than a long accumulation of criticism.",

      "Émotions":
        "Emotions",

      "Ne minimisez pas un ressenti simplement parce que vous ne l’auriez pas vécu de la même façon. Accueillir n’oblige pas à être d’accord.":
        "Do not minimize a feeling simply because you would not have experienced it in the same way. Acknowledging a feeling does not require agreeing with it.",

      "Gestion des conflits":
        "Conflict management",

      "Faites une pause lorsque le dialogue devient défensif, puis revenez au sujet avec un objectif concret : comprendre, décider ou réparer.":
        "Take a break when the conversation becomes defensive, then return to the subject with a clear goal: understand, decide, or repair.",

      "Vie quotidienne":
        "Daily life",

      "Clarifiez régulièrement les responsabilités, les horaires et la charge mentale afin que les frustrations pratiques ne contaminent pas le lien affectif.":
        "Regularly clarify responsibilities, schedules, and the mental load so that practical frustrations do not contaminate the emotional bond.",

      "Intimité":
        "Intimacy",

      "Préservez un espace où chacun peut exprimer ses désirs, ses limites et son rythme sans honte, pression ni interprétation automatique.":
        "Preserve a space where each person can express desires, boundaries, and personal rhythm without shame, pressure, or automatic interpretation.",

      "Projets communs":
        "Shared projects",

      "Choisissez au moins un projet qui appartient réellement au couple et définissez des étapes simples pour le rendre vivant.":
        "Choose at least one project that truly belongs to the relationship and define simple steps to bring it to life.",

      "Votre meilleure stratégie est de protéger le lien sans vous abandonner vous-même : rester deux personnes entières qui choisissent de construire ensemble.":
        "Your best strategy is to protect the bond without abandoning yourselves: remain two whole individuals who choose to build together.",

      /* =====================================================
         PAGE 49
      ===================================================== */

      "Vision d’ensemble":
        "Overall vision",

      "La synthèse complète de votre relation":
        "The complete summary of your relationship",

      "Votre synastrie décrit une dynamique unique : un mélange de reconnaissance, d’attirance, de différences, de ressources et d’apprentissages.":
        "Your synastry describes a unique dynamic: a blend of recognition, attraction, differences, resources, and learning.",

      "Le portrait global":
        "The overall picture",

      "Ce qui vous rapproche":
        "What brings you closer",

      "La reconnaissance, la curiosité, l’attirance ou le sentiment de pouvoir être compris créent une base affective importante.":
        "Recognition, curiosity, attraction, and the feeling of being understood create an important emotional foundation.",

      "Ce qui vous met à l’épreuve":
        "What tests you",

      "Les différences de rythme, de communication ou de besoin de sécurité peuvent devenir sensibles lorsqu’elles restent implicites.":
        "Differences in pace, communication, or need for security can become sensitive when they remain unspoken.",

      "Ce qui vous fait grandir":
        "What helps you grow",

      "Votre relation vous invite à mieux connaître vos réactions, à exprimer vos besoins et à développer une forme plus mature d’engagement.":
        "Your relationship invites you to better understand your reactions, express your needs, and develop a more mature form of commitment.",

      "Ce qui peut faire durer":
        "What can make it last",

      "La durée se construit par les réparations, les projets, la souplesse, le respect de l’individualité et les décisions renouvelées.":
        "Longevity is built through repair, shared projects, flexibility, respect for individuality, and renewed decisions.",

      "Votre signature relationnelle":
        "Your relationship signature",

      "Votre thème ne vous enferme pas dans une destinée. Il vous montre les forces à utiliser, les réactions à comprendre et les choix qui peuvent rendre votre relation plus consciente.":
        "Your chart does not lock you into a destiny. It shows you the strengths to use, the reactions to understand, and the choices that can make your relationship more conscious.",

      "Synthèse Luna Astralis":
        "Luna Astralis Summary",

      /* =====================================================
         PAGE 50
      ===================================================== */

      "Fin de votre rapport":
        "End of your report",

      "Votre compatibilité n’est pas une réponse figée, mais une carte de votre dynamique. Elle montre comment vos forces peuvent soutenir votre amour, comment vos différences peuvent devenir des chemins de compréhension et comment votre lien peut évoluer lorsque chacun choisit d’y participer pleinement.":
        "Your compatibility is not a fixed answer, but a map of your dynamic. It shows how your strengths can support your love, how your differences can become paths toward understanding, and how your bond can evolve when each person chooses to participate fully.",

      "« Les étoiles révèlent une rencontre. Le temps, la conscience et les choix écrivent l’histoire. »":
        "“The stars reveal an encounter. Time, awareness, and choices write the story.”",

      "Poursuivez votre exploration astrologique":
        "Continue your astrological exploration",

      "Carte du ciel Premium":
        "Premium Birth Chart",

      "Horoscope Premium":
        "Premium Horoscope",

      "Compatibilité approfondie":
        "In-depth Compatibility",

      "Analyses astrologiques personnalisées":
        "Personalized Astrological Analyses",

      "Merci de votre confiance.":
        "Thank you for your trust.",
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
      Opposition: "Opposition",
      Trigone: "Trine",
      Carré: "Square",
      Sextile: "Sextile",
      Quinconce: "Quincunx",
    },

    dynamicBalance: {
      harmonious: "harmonious aspects",
      conjunctionSingular: "conjunction",
      conjunctionPlural: "conjunctions",
      growth: "growth aspects",
    },

    signature: {
      before:
        "The most significant aspect in your synastry is",
      orb:
        "with an orb of",
      after:
        "This interaction strongly influences the way you recognize each other, react, and build your bond.",
    },
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

      "Compatibilité exceptionnelle":
        "Compatibilidad excepcional",

      "Compatibilité très favorable":
        "Compatibilidad muy favorable",

      "Compatibilité solide et évolutive":
        "Compatibilidad sólida y evolutiva",

      "Compatibilité exigeante mais prometteuse":
        "Compatibilidad exigente pero prometedora",

      "Compatibilité complexe et transformatrice":
        "Compatibilidad compleja y transformadora",

      "Votre lien réunit de nombreuses facilités naturelles, une forte capacité de compréhension et un potentiel remarquable de croissance commune.":
        "Su vínculo reúne numerosas facilidades naturales, una gran capacidad de comprensión y un notable potencial de crecimiento conjunto.",

      "Votre relation possède des bases favorables et plusieurs ressources naturelles pour traverser les périodes plus exigeantes.":
        "Su relación posee bases favorables y varios recursos naturales para atravesar los períodos más exigentes.",

      "Votre compatibilité repose sur un équilibre entre affinités réelles et apprentissages importants qui peuvent renforcer le couple.":
        "Su compatibilidad se basa en un equilibrio entre afinidades reales y aprendizajes importantes que pueden fortalecer la relación.",

      "Votre relation demande de la conscience, de la communication et des ajustements, mais elle peut devenir très constructive.":
        "Su relación requiere conciencia, comunicación y ajustes, pero puede llegar a ser muy constructiva.",

      "Votre lien est intense et profondément évolutif. Il demande une grande maturité émotionnelle pour exprimer tout son potentiel.":
        "Su vínculo es intenso y profundamente transformador. Requiere una gran madurez emocional para expresar todo su potencial.",

      "Cette connexion soutient l’attirance, l’alchimie et la capacité à maintenir une énergie vivante dans la relation.":
        "Esta conexión favorece la atracción, la química y la capacidad de mantener una energía viva en la relación.",

      "La tendresse et le besoin affectif peuvent se rejoindre avec douceur, favorisant sécurité et attachement.":
        "La ternura y la necesidad afectiva pueden encontrarse con suavidad, favoreciendo la seguridad y el apego.",

      "Le dialogue, les idées et la capacité à comprendre l’autre constituent une ressource importante du couple.":
        "El diálogo, las ideas y la capacidad de comprender al otro constituyen un recurso importante para la relación.",

      "L’identité de l’un et la sensibilité de l’autre peuvent se reconnaître et se soutenir de manière naturelle.":
        "La identidad de uno y la sensibilidad del otro pueden reconocerse y apoyarse de manera natural.",

      "Cette interaction favorise confiance, encouragement, expansion et vision commune.":
        "Esta interacción favorece la confianza, el estímulo, la expansión y una visión común.",

      "Cet aspect apporte une ressource naturelle que le couple peut utiliser pour renforcer sa stabilité et sa complicité.":
        "Este aspecto aporta un recurso natural que la relación puede utilizar para reforzar su estabilidad y complicidad.",

      "Cette interaction peut créer un sentiment de pression, de distance, de jugement ou de responsabilité trop lourde.":
        "Esta interacción puede crear una sensación de presión, distancia, juicio o responsabilidad excesiva.",

      "Cette connexion peut intensifier les peurs, les enjeux de contrôle, la jalousie ou le besoin de transformation.":
        "Esta conexión puede intensificar los miedos, las cuestiones de control, los celos o la necesidad de transformación.",

      "Le besoin de liberté, l’imprévisibilité ou les changements soudains peuvent fragiliser le sentiment de sécurité.":
        "La necesidad de libertad, la imprevisibilidad o los cambios repentinos pueden debilitar la sensación de seguridad.",

      "Le ton, les mots ou la manière de raisonner peuvent provoquer des malentendus et des réactions défensives.":
        "El tono, las palabras o la forma de razonar pueden provocar malentendidos y reacciones defensivas.",

      "Les réactions rapides, l’impatience ou les différences de rythme peuvent transformer une frustration en confrontation.":
        "Las reacciones rápidas, la impaciencia o las diferencias de ritmo pueden transformar una frustración en confrontación.",

      "Cette tension demande davantage de recul, d’écoute et de souplesse afin d’éviter les réactions répétitives.":
        "Esta tensión requiere más perspectiva, escucha y flexibilidad para evitar reacciones repetitivas.",

      "Vos ressources":
        "Sus recursos",

      "Les grandes forces de votre relation":
        "Las grandes fortalezas de su relación",

      "Ces énergies constituent les appuis naturels sur lesquels votre couple peut compter pour grandir, se rapprocher et traverser les périodes plus exigeantes.":
        "Estas energías constituyen los apoyos naturales con los que su relación puede contar para crecer, acercarse y atravesar los períodos más exigentes.",

      "Ce qui vous unit naturellement":
        "Lo que los une naturalmente",

      "Vos forces ne se limitent pas aux aspects faciles. Certaines connexions intenses deviennent aussi de puissantes ressources lorsqu’elles sont vécues avec maturité, respect et conscience.":
        "Sus fortalezas no se limitan a los aspectos fáciles. Algunas conexiones intensas también se convierten en recursos poderosos cuando se viven con madurez, respeto y conciencia.",

      "Vos cinq appuis principaux":
        "Sus cinco principales fortalezas",

      "Les données disponibles ne permettent pas d’établir un classement précis. Votre rapport demeure néanmoins utile pour comprendre les grandes dynamiques relationnelles.":
        "Los datos disponibles no permiten establecer una clasificación precisa. Sin embargo, su informe sigue siendo útil para comprender las grandes dinámicas de la relación.",

      "Complicité":
        "Complicidad",

      "Les aspects harmonieux montrent les domaines où vous pouvez vous comprendre, collaborer et retrouver plus rapidement votre équilibre.":
        "Los aspectos armoniosos muestran las áreas donde pueden comprenderse, colaborar y recuperar más rápidamente el equilibrio.",

      "Intensité":
        "Intensidad",

      "Les conjonctions concentrent l’énergie et donnent à certains thèmes une importance majeure dans votre histoire commune.":
        "Las conjunciones concentran la energía y otorgan a ciertos temas una importancia fundamental en su historia común.",

      "Résilience":
        "Resiliencia",

      "Vos ressources naturelles deviennent particulièrement précieuses lorsque vous traversez une période de doute, de fatigue ou de changement.":
        "Sus recursos naturales se vuelven especialmente valiosos cuando atraviesan un período de duda, cansancio o cambio.",

      "Croissance":
        "Crecimiento",

      "Votre relation possède un potentiel d’évolution lorsqu’elle transforme ses différences en compréhension plutôt qu’en opposition.":
        "Su relación posee potencial de evolución cuando transforma sus diferencias en comprensión en lugar de oposición.",

      "Vos apprentissages":
        "Sus aprendizajes",

      "Les défis à transformer":
        "Los desafíos que transformar",

      "Les tensions ne prédisent pas un échec. Elles montrent les endroits où la relation demande plus de conscience, de dialogue et de responsabilité.":
        "Las tensiones no predicen un fracaso. Muestran las áreas donde la relación requiere más conciencia, diálogo y responsabilidad.",

      "Comprendre avant de corriger":
        "Comprender antes de corregir",

      "Un aspect difficile devient réellement problématique lorsqu’il reste inconscient. Dès que vous identifiez le besoin, la peur ou la différence derrière la réaction, vous récupérez une marge de choix.":
        "Un aspecto difícil se vuelve realmente problemático cuando permanece inconsciente. En cuanto identifican la necesidad, el miedo o la diferencia detrás de la reacción, recuperan capacidad de elección.",

      "Vos principaux points de vigilance":
        "Sus principales áreas de atención",

      "Aucun aspect difficile majeur ne se distingue dans les données analysées. Cela ne supprime pas les désaccords, mais indique une dynamique globale plus fluide.":
        "No destaca ningún aspecto difícil importante en los datos analizados. Esto no elimina los desacuerdos, pero indica una dinámica general más fluida.",

      "Éviter la répétition":
        "Evitar la repetición",

      "Lorsque le même conflit revient, cherchez le besoin non exprimé plutôt que de reprendre exactement la même discussion.":
        "Cuando vuelva el mismo conflicto, busquen la necesidad no expresada en lugar de repetir exactamente la misma discusión.",

      "Réduire la projection":
        "Reducir la proyección",

      "Demandez-vous ce qui appartient réellement à l’autre et ce qui réveille une peur, une blessure ou une attente personnelle.":
        "Pregúntense qué pertenece realmente a la otra persona y qué despierta un miedo, una herida o una expectativa personal.",

      "Choisir le bon moment":
        "Elegir el momento adecuado",

      "Une discussion importante devient plus constructive lorsque les deux personnes sont disponibles, calmes et capables d’écouter.":
        "Una conversación importante se vuelve más constructiva cuando ambas personas están disponibles, tranquilas y capaces de escuchar.",

      "Réparer rapidement":
        "Reparar rápidamente",

      "La solidité d’un couple dépend moins de l’absence de conflit que de sa capacité à reconnaître, réparer et recommencer autrement.":
        "La solidez de una relación depende menos de la ausencia de conflictos que de su capacidad para reconocer, reparar y volver a empezar de otra manera.",

      "Lecture globale":
        "Lectura global",

      "Votre potentiel amoureux":
        "Su potencial amoroso",

      "Ce score représente une synthèse symbolique de vos aspects. Il ne décide pas de l’avenir du couple, mais décrit la qualité des ressources et des apprentissages présents.":
        "Esta puntuación representa una síntesis simbólica de sus aspectos. No decide el futuro de la relación, sino que describe la calidad de los recursos y aprendizajes presentes.",

      "Compatibilité émotionnelle":
        "Compatibilidad emocional",

      "Votre potentiel affectif dépend de votre capacité à reconnaître les besoins de sécurité, de proximité, d’écoute et de réconfort de chacun.":
        "Su potencial afectivo depende de la capacidad de reconocer las necesidades de seguridad, cercanía, escucha y consuelo de cada persona.",

      "Compatibilité intellectuelle":
        "Compatibilidad intelectual",

      "La qualité de votre dialogue devient une force lorsque vous distinguez les faits, les émotions, les attentes et les interprétations.":
        "La calidad de su diálogo se convierte en una fortaleza cuando distinguen los hechos, las emociones, las expectativas y las interpretaciones.",

      "Compatibilité intime":
        "Compatibilidad íntima",

      "L’intimité se nourrit de confiance, de désir, de tendresse et de la liberté de parler clairement de ses besoins et de ses limites.":
        "La intimidad se alimenta de confianza, deseo, ternura y libertad para hablar claramente de las necesidades y los límites.",

      "Compatibilité de vie":
        "Compatibilidad de vida",

      "Le quotidien devient plus harmonieux lorsque les responsabilités, le temps, l’argent et les projets sont discutés avec transparence.":
        "La vida cotidiana se vuelve más armoniosa cuando las responsabilidades, el tiempo, el dinero y los proyectos se hablan con transparencia.",

      "Potentiel à long terme":
        "Potencial a largo plazo",

      "Votre durée repose sur la capacité à préserver le lien tout en permettant à chacun de continuer à évoluer personnellement.":
        "La duración depende de la capacidad de preservar el vínculo permitiendo al mismo tiempo que cada persona continúe evolucionando individualmente.",

      "Dynamique générale":
        "Dinámica general",

      "« Une grande compatibilité ne signifie pas tout ressentir de la même manière, mais apprendre à faire de deux mondes différents un espace commun. »":
        "«Una gran compatibilidad no significa sentirlo todo de la misma manera, sino aprender a convertir dos mundos diferentes en un espacio común.»",

      "Mise en pratique":
        "Aplicación práctica",

      "Vos conseils personnalisés":
        "Sus consejos personalizados",

      "La compréhension astrologique devient réellement utile lorsqu’elle se transforme en gestes simples, réguliers et observables.":
        "La comprensión astrológica se vuelve realmente útil cuando se transforma en acciones sencillas, regulares y observables.",

      "Transformer la connaissance en action":
        "Transformar el conocimiento en acción",

      "Vous n’avez pas besoin de tout changer immédiatement. Choisissez une seule habitude relationnelle, appliquez-la pendant quelques semaines, puis observez ce qu’elle transforme dans votre manière de vous comprendre.":
        "No necesitan cambiarlo todo inmediatamente. Elijan un solo hábito relacional, aplíquenlo durante algunas semanas y observen lo que transforma en su manera de comprenderse.",

      "Communication":
        "Comunicación",

      "Parlez du besoin derrière la réaction. Une phrase précise et calme est souvent plus utile qu’une longue accumulation de reproches.":
        "Hablen de la necesidad que existe detrás de la reacción. Una frase precisa y tranquila suele ser más útil que una larga acumulación de reproches.",

      "Émotions":
        "Emociones",

      "Ne minimisez pas un ressenti simplement parce que vous ne l’auriez pas vécu de la même façon. Accueillir n’oblige pas à être d’accord.":
        "No minimicen un sentimiento simplemente porque ustedes no lo habrían vivido de la misma manera. Acogerlo no obliga a estar de acuerdo.",

      "Gestion des conflits":
        "Gestión de conflictos",

      "Faites une pause lorsque le dialogue devient défensif, puis revenez au sujet avec un objectif concret : comprendre, décider ou réparer.":
        "Hagan una pausa cuando el diálogo se vuelva defensivo y después vuelvan al tema con un objetivo concreto: comprender, decidir o reparar.",

      "Vie quotidienne":
        "Vida cotidiana",

      "Clarifiez régulièrement les responsabilités, les horaires et la charge mentale afin que les frustrations pratiques ne contaminent pas le lien affectif.":
        "Aclaren regularmente las responsabilidades, los horarios y la carga mental para que las frustraciones prácticas no contaminen el vínculo afectivo.",

      "Intimité":
        "Intimidad",

      "Préservez un espace où chacun peut exprimer ses désirs, ses limites et son rythme sans honte, pression ni interprétation automatique.":
        "Conserven un espacio donde cada persona pueda expresar sus deseos, límites y ritmo sin vergüenza, presión ni interpretación automática.",

      "Projets communs":
        "Proyectos comunes",

      "Choisissez au moins un projet qui appartient réellement au couple et définissez des étapes simples pour le rendre vivant.":
        "Elijan al menos un proyecto que pertenezca realmente a la relación y definan pasos sencillos para darle vida.",

      "Votre meilleure stratégie est de protéger le lien sans vous abandonner vous-même : rester deux personnes entières qui choisissent de construire ensemble.":
        "Su mejor estrategia es proteger el vínculo sin abandonarse a sí mismos: seguir siendo dos personas completas que eligen construir juntas.",

      "Vision d’ensemble":
        "Visión general",

      "La synthèse complète de votre relation":
        "La síntesis completa de su relación",

      "Votre synastrie décrit une dynamique unique : un mélange de reconnaissance, d’attirance, de différences, de ressources et d’apprentissages.":
        "Su sinastría describe una dinámica única: una mezcla de reconocimiento, atracción, diferencias, recursos y aprendizajes.",

      "Le portrait global":
        "El panorama general",

      "Ce qui vous rapproche":
        "Lo que los acerca",

      "La reconnaissance, la curiosité, l’attirance ou le sentiment de pouvoir être compris créent une base affective importante.":
        "El reconocimiento, la curiosidad, la atracción o la sensación de ser comprendidos crean una base afectiva importante.",

      "Ce qui vous met à l’épreuve":
        "Lo que los pone a prueba",

      "Les différences de rythme, de communication ou de besoin de sécurité peuvent devenir sensibles lorsqu’elles restent implicites.":
        "Las diferencias de ritmo, comunicación o necesidad de seguridad pueden volverse sensibles cuando permanecen implícitas.",

      "Ce qui vous fait grandir":
        "Lo que los hace crecer",

      "Votre relation vous invite à mieux connaître vos réactions, à exprimer vos besoins et à développer une forme plus mature d’engagement.":
        "Su relación los invita a conocer mejor sus reacciones, expresar sus necesidades y desarrollar una forma más madura de compromiso.",

      "Ce qui peut faire durer":
        "Lo que puede hacerla durar",

      "La durée se construit par les réparations, les projets, la souplesse, le respect de l’individualité et les décisions renouvelées.":
        "La duración se construye mediante las reparaciones, los proyectos, la flexibilidad, el respeto de la individualidad y las decisiones renovadas.",

      "Votre signature relationnelle":
        "Su firma relacional",

      "Votre thème ne vous enferme pas dans une destinée. Il vous montre les forces à utiliser, les réactions à comprendre et les choix qui peuvent rendre votre relation plus consciente.":
        "Su carta no los encierra en un destino. Les muestra las fortalezas que pueden utilizar, las reacciones que necesitan comprender y las decisiones que pueden hacer que su relación sea más consciente.",

      "Synthèse Luna Astralis":
        "Síntesis Luna Astralis",

      "Fin de votre rapport":
        "Fin de su informe",

      "Votre compatibilité n’est pas une réponse figée, mais une carte de votre dynamique. Elle montre comment vos forces peuvent soutenir votre amour, comment vos différences peuvent devenir des chemins de compréhension et comment votre lien peut évoluer lorsque chacun choisit d’y participer pleinement.":
        "Su compatibilidad no es una respuesta fija, sino un mapa de su dinámica. Muestra cómo sus fortalezas pueden apoyar su amor, cómo sus diferencias pueden convertirse en caminos de comprensión y cómo su vínculo puede evolucionar cuando cada persona elige participar plenamente.",

      "« Les étoiles révèlent une rencontre. Le temps, la conscience et les choix écrivent l’histoire. »":
        "«Las estrellas revelan un encuentro. El tiempo, la conciencia y las elecciones escriben la historia.»",

      "Poursuivez votre exploration astrologique":
        "Continúe su exploración astrológica",

      "Carte du ciel Premium":
        "Carta natal Premium",

      "Horoscope Premium":
        "Horóscopo Premium",

      "Compatibilité approfondie":
        "Compatibilidad en profundidad",

      "Analyses astrologiques personnalisées":
        "Análisis astrológicos personalizados",

      "Merci de votre confiance.":
        "Gracias por su confianza.",
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
      Opposition: "Oposición",
      Trigone: "Trígono",
      Carré: "Cuadratura",
      Sextile: "Sextil",
      Quinconce: "Quincuncio",
    },

    dynamicBalance: {
      harmonious:
        "aspectos armoniosos",

      conjunctionSingular:
        "conjunción",

      conjunctionPlural:
        "conjunciones",

      growth:
        "aspectos de evolución",
    },

    signature: {
      before:
        "El aspecto más destacado de su sinastría es",

      orb:
        "con un orbe de",

      after:
        "Esta interacción influye fuertemente en la forma en que se reconocen, reaccionan y construyen su vínculo.",
    },
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

      "Compatibilité exceptionnelle":
        "Außergewöhnliche Kompatibilität",

      "Compatibilité très favorable":
        "Sehr günstige Kompatibilität",

      "Compatibilité solide et évolutive":
        "Starke und entwicklungsfähige Kompatibilität",

      "Compatibilité exigeante mais prometteuse":
        "Anspruchsvolle, aber vielversprechende Kompatibilität",

      "Compatibilité complexe et transformatrice":
        "Komplexe und transformative Kompatibilität",

      "Votre lien réunit de nombreuses facilités naturelles, une forte capacité de compréhension et un potentiel remarquable de croissance commune.":
        "Ihre Verbindung vereint viele natürliche Stärken, eine ausgeprägte Fähigkeit zum gegenseitigen Verständnis und bemerkenswertes Potenzial für gemeinsames Wachstum.",

      "Votre relation possède des bases favorables et plusieurs ressources naturelles pour traverser les périodes plus exigeantes.":
        "Ihre Beziehung besitzt günstige Grundlagen und mehrere natürliche Ressourcen, um anspruchsvollere Phasen zu bewältigen.",

      "Votre compatibilité repose sur un équilibre entre affinités réelles et apprentissages importants qui peuvent renforcer le couple.":
        "Ihre Kompatibilität beruht auf einem Gleichgewicht zwischen echten Gemeinsamkeiten und wichtigen Lernprozessen, die die Beziehung stärken können.",

      "Votre relation demande de la conscience, de la communication et des ajustements, mais elle peut devenir très constructive.":
        "Ihre Beziehung verlangt Bewusstsein, Kommunikation und Anpassung, kann sich jedoch sehr konstruktiv entwickeln.",

      "Votre lien est intense et profondément évolutif. Il demande une grande maturité émotionnelle pour exprimer tout son potentiel.":
        "Ihre Verbindung ist intensiv und zutiefst entwicklungsorientiert. Sie erfordert große emotionale Reife, um ihr volles Potenzial zu entfalten.",

      "Cette connexion soutient l’attirance, l’alchimie et la capacité à maintenir une énergie vivante dans la relation.":
        "Diese Verbindung unterstützt Anziehung, Chemie und die Fähigkeit, eine lebendige Energie in der Beziehung zu erhalten.",

      "La tendresse et le besoin affectif peuvent se rejoindre avec douceur, favorisant sécurité et attachement.":
        "Zärtlichkeit und emotionale Bedürfnisse können sanft zusammenfinden und Sicherheit sowie Bindung fördern.",

      "Le dialogue, les idées et la capacité à comprendre l’autre constituent une ressource importante du couple.":
        "Dialog, Gedanken und die Fähigkeit, den anderen zu verstehen, bilden eine wichtige Ressource der Beziehung.",

      "L’identité de l’un et la sensibilité de l’autre peuvent se reconnaître et se soutenir de manière naturelle.":
        "Die Identität des einen und die Sensibilität des anderen können sich auf natürliche Weise erkennen und unterstützen.",

      "Cette interaction favorise confiance, encouragement, expansion et vision commune.":
        "Diese Wechselwirkung fördert Vertrauen, Ermutigung, Wachstum und eine gemeinsame Vision.",

      "Cet aspect apporte une ressource naturelle que le couple peut utiliser pour renforcer sa stabilité et sa complicité.":
        "Dieser Aspekt bringt eine natürliche Ressource mit sich, die die Beziehung nutzen kann, um Stabilität und Verbundenheit zu stärken.",

      "Cette interaction peut créer un sentiment de pression, de distance, de jugement ou de responsabilité trop lourde.":
        "Diese Wechselwirkung kann Druck, Distanz, Bewertung oder ein übermäßiges Verantwortungsgefühl erzeugen.",

      "Cette connexion peut intensifier les peurs, les enjeux de contrôle, la jalousie ou le besoin de transformation.":
        "Diese Verbindung kann Ängste, Kontrollthemen, Eifersucht oder den Wunsch nach Veränderung verstärken.",

      "Le besoin de liberté, l’imprévisibilité ou les changements soudains peuvent fragiliser le sentiment de sécurité.":
        "Das Bedürfnis nach Freiheit, Unvorhersehbarkeit oder plötzliche Veränderungen können das Sicherheitsgefühl schwächen.",

      "Le ton, les mots ou la manière de raisonner peuvent provoquer des malentendus et des réactions défensives.":
        "Tonfall, Worte oder Denkweisen können Missverständnisse und defensive Reaktionen hervorrufen.",

      "Les réactions rapides, l’impatience ou les différences de rythme peuvent transformer une frustration en confrontation.":
        "Schnelle Reaktionen, Ungeduld oder unterschiedliche Rhythmen können Frustration in Konfrontation verwandeln.",

      "Cette tension demande davantage de recul, d’écoute et de souplesse afin d’éviter les réactions répétitives.":
        "Diese Spannung erfordert mehr Abstand, Zuhören und Flexibilität, um wiederkehrende Reaktionen zu vermeiden.",

      "Vos ressources":
        "Ihre Ressourcen",

      "Les grandes forces de votre relation":
        "Die großen Stärken Ihrer Beziehung",

      "Ces énergies constituent les appuis naturels sur lesquels votre couple peut compter pour grandir, se rapprocher et traverser les périodes plus exigeantes.":
        "Diese Energien bilden natürliche Stützen, auf die Ihre Beziehung zurückgreifen kann, um zu wachsen, sich näherzukommen und anspruchsvollere Phasen zu bewältigen.",

      "Ce qui vous unit naturellement":
        "Was Sie auf natürliche Weise verbindet",

      "Vos forces ne se limitent pas aux aspects faciles. Certaines connexions intenses deviennent aussi de puissantes ressources lorsqu’elles sont vécues avec maturité, respect et conscience.":
        "Ihre Stärken beschränken sich nicht auf leichte Aspekte. Einige intensive Verbindungen können ebenfalls zu kraftvollen Ressourcen werden, wenn sie mit Reife, Respekt und Bewusstsein gelebt werden.",

      "Vos cinq appuis principaux":
        "Ihre fünf wichtigsten Stärken",

      "Les données disponibles ne permettent pas d’établir un classement précis. Votre rapport demeure néanmoins utile pour comprendre les grandes dynamiques relationnelles.":
        "Die verfügbaren Daten erlauben keine präzise Rangfolge. Ihr Bericht bleibt dennoch hilfreich, um die wichtigsten Beziehungsdynamiken zu verstehen.",

      "Complicité":
        "Verbundenheit",

      "Les aspects harmonieux montrent les domaines où vous pouvez vous comprendre, collaborer et retrouver plus rapidement votre équilibre.":
        "Harmonische Aspekte zeigen Bereiche, in denen Sie einander verstehen, zusammenarbeiten und schneller wieder ins Gleichgewicht finden können.",

      "Intensité":
        "Intensität",

      "Les conjonctions concentrent l’énergie et donnent à certains thèmes une importance majeure dans votre histoire commune.":
        "Konjunktionen bündeln Energie und verleihen bestimmten Themen in Ihrer gemeinsamen Geschichte besondere Bedeutung.",

      "Résilience":
        "Resilienz",

      "Vos ressources naturelles deviennent particulièrement précieuses lorsque vous traversez une période de doute, de fatigue ou de changement.":
        "Ihre natürlichen Ressourcen werden besonders wertvoll, wenn Sie Phasen von Zweifel, Erschöpfung oder Veränderung durchlaufen.",

      "Croissance":
        "Wachstum",

      "Votre relation possède un potentiel d’évolution lorsqu’elle transforme ses différences en compréhension plutôt qu’en opposition.":
        "Ihre Beziehung besitzt Entwicklungspotenzial, wenn sie Unterschiede in Verständnis statt in Gegensätze verwandelt.",

      "Vos apprentissages":
        "Ihre Lernprozesse",

      "Les défis à transformer":
        "Herausforderungen, die verwandelt werden können",

      "Les tensions ne prédisent pas un échec. Elles montrent les endroits où la relation demande plus de conscience, de dialogue et de responsabilité.":
        "Spannungen sagen kein Scheitern voraus. Sie zeigen Bereiche, in denen die Beziehung mehr Bewusstsein, Dialog und Verantwortung verlangt.",

      "Comprendre avant de corriger":
        "Verstehen, bevor man korrigiert",

      "Un aspect difficile devient réellement problématique lorsqu’il reste inconscient. Dès que vous identifiez le besoin, la peur ou la différence derrière la réaction, vous récupérez une marge de choix.":
        "Ein schwieriger Aspekt wird dann wirklich problematisch, wenn er unbewusst bleibt. Sobald Sie das Bedürfnis, die Angst oder den Unterschied hinter einer Reaktion erkennen, gewinnen Sie Handlungsspielraum zurück.",

      "Vos principaux points de vigilance":
        "Ihre wichtigsten Aufmerksamkeitspunkte",

      "Aucun aspect difficile majeur ne se distingue dans les données analysées. Cela ne supprime pas les désaccords, mais indique une dynamique globale plus fluide.":
        "In den analysierten Daten hebt sich kein bedeutender schwieriger Aspekt hervor. Das beseitigt Meinungsverschiedenheiten nicht, deutet jedoch auf eine insgesamt fließendere Dynamik hin.",

      "Éviter la répétition":
        "Wiederholungen vermeiden",

      "Lorsque le même conflit revient, cherchez le besoin non exprimé plutôt que de reprendre exactement la même discussion.":
        "Wenn derselbe Konflikt wiederkehrt, suchen Sie nach dem unausgesprochenen Bedürfnis, statt genau dieselbe Diskussion erneut zu führen.",

      "Réduire la projection":
        "Projektionen reduzieren",

      "Demandez-vous ce qui appartient réellement à l’autre et ce qui réveille une peur, une blessure ou une attente personnelle.":
        "Fragen Sie sich, was tatsächlich zum anderen gehört und was eine eigene Angst, Verletzung oder Erwartung aktiviert.",

      "Choisir le bon moment":
        "Den richtigen Zeitpunkt wählen",

      "Une discussion importante devient plus constructive lorsque les deux personnes sont disponibles, calmes et capables d’écouter.":
        "Ein wichtiges Gespräch wird konstruktiver, wenn beide Personen verfügbar, ruhig und zum Zuhören bereit sind.",

      "Réparer rapidement":
        "Schnell reparieren",

      "La solidité d’un couple dépend moins de l’absence de conflit que de sa capacité à reconnaître, réparer et recommencer autrement.":
        "Die Stärke einer Beziehung hängt weniger von der Abwesenheit von Konflikten ab als von ihrer Fähigkeit, sie anzuerkennen, zu reparieren und anders neu zu beginnen.",

      "Lecture globale":
        "Gesamtbetrachtung",

      "Votre potentiel amoureux":
        "Ihr Liebespotenzial",

      "Ce score représente une synthèse symbolique de vos aspects. Il ne décide pas de l’avenir du couple, mais décrit la qualité des ressources et des apprentissages présents.":
        "Diese Bewertung ist eine symbolische Zusammenfassung Ihrer Aspekte. Sie entscheidet nicht über die Zukunft Ihrer Beziehung, sondern beschreibt die Qualität der vorhandenen Ressourcen und Lernprozesse.",

      "Compatibilité émotionnelle":
        "Emotionale Kompatibilität",

      "Votre potentiel affectif dépend de votre capacité à reconnaître les besoins de sécurité, de proximité, d’écoute et de réconfort de chacun.":
        "Ihr emotionales Potenzial hängt davon ab, wie gut Sie die Bedürfnisse beider nach Sicherheit, Nähe, Zuhören und Trost erkennen.",

      "Compatibilité intellectuelle":
        "Intellektuelle Kompatibilität",

      "La qualité de votre dialogue devient une force lorsque vous distinguez les faits, les émotions, les attentes et les interprétations.":
        "Die Qualität Ihres Dialogs wird zur Stärke, wenn Sie Fakten, Emotionen, Erwartungen und Interpretationen unterscheiden.",

      "Compatibilité intime":
        "Intime Kompatibilität",

      "L’intimité se nourrit de confiance, de désir, de tendresse et de la liberté de parler clairement de ses besoins et de ses limites.":
        "Intimität wird durch Vertrauen, Verlangen, Zärtlichkeit und die Freiheit genährt, offen über Bedürfnisse und Grenzen zu sprechen.",

      "Compatibilité de vie":
        "Alltagskompatibilität",

      "Le quotidien devient plus harmonieux lorsque les responsabilités, le temps, l’argent et les projets sont discutés avec transparence.":
        "Der Alltag wird harmonischer, wenn Verantwortung, Zeit, Geld und gemeinsame Pläne transparent besprochen werden.",

      "Potentiel à long terme":
        "Langfristiges Potenzial",

      "Votre durée repose sur la capacité à préserver le lien tout en permettant à chacun de continuer à évoluer personnellement.":
        "Ihre Beständigkeit beruht darauf, die Verbindung zu bewahren und zugleich jedem persönliche Weiterentwicklung zu ermöglichen.",

      "Dynamique générale":
        "Gesamtdynamik",

      "« Une grande compatibilité ne signifie pas tout ressentir de la même manière, mais apprendre à faire de deux mondes différents un espace commun. »":
        "„Große Kompatibilität bedeutet nicht, alles gleich zu empfinden, sondern zu lernen, aus zwei unterschiedlichen Welten einen gemeinsamen Raum zu schaffen.“",

      "Mise en pratique":
        "Praktische Umsetzung",

      "Vos conseils personnalisés":
        "Ihre persönlichen Empfehlungen",

      "La compréhension astrologique devient réellement utile lorsqu’elle se transforme en gestes simples, réguliers et observables.":
        "Astrologisches Verständnis wird wirklich nützlich, wenn es in einfache, regelmäßige und beobachtbare Handlungen umgesetzt wird.",

      "Transformer la connaissance en action":
        "Wissen in Handeln verwandeln",

      "Vous n’avez pas besoin de tout changer immédiatement. Choisissez une seule habitude relationnelle, appliquez-la pendant quelques semaines, puis observez ce qu’elle transforme dans votre manière de vous comprendre.":
        "Sie müssen nicht sofort alles verändern. Wählen Sie eine einzige Beziehungsgewohnheit, wenden Sie sie einige Wochen lang an und beobachten Sie anschließend, was sie in Ihrer Art verändert, einander zu verstehen.",

      "Communication":
        "Kommunikation",

      "Parlez du besoin derrière la réaction. Une phrase précise et calme est souvent plus utile qu’une longue accumulation de reproches.":
        "Sprechen Sie über das Bedürfnis hinter der Reaktion. Ein klarer, ruhiger Satz ist oft hilfreicher als eine lange Ansammlung von Vorwürfen.",

      "Émotions":
        "Emotionen",

      "Ne minimisez pas un ressenti simplement parce que vous ne l’auriez pas vécu de la même façon. Accueillir n’oblige pas à être d’accord.":
        "Spielen Sie ein Gefühl nicht herunter, nur weil Sie es selbst anders erlebt hätten. Ein Gefühl anzuerkennen bedeutet nicht, ihm zustimmen zu müssen.",

      "Gestion des conflits":
        "Konfliktbewältigung",

      "Faites une pause lorsque le dialogue devient défensif, puis revenez au sujet avec un objectif concret : comprendre, décider ou réparer.":
        "Machen Sie eine Pause, wenn das Gespräch defensiv wird, und kehren Sie anschließend mit einem konkreten Ziel zum Thema zurück: verstehen, entscheiden oder reparieren.",

      "Vie quotidienne":
        "Alltag",

      "Clarifiez régulièrement les responsabilités, les horaires et la charge mentale afin que les frustrations pratiques ne contaminent pas le lien affectif.":
        "Klären Sie regelmäßig Verantwortlichkeiten, Zeitpläne und mentale Belastung, damit praktische Frustrationen die emotionale Verbindung nicht belasten.",

      "Intimité":
        "Intimität",

      "Préservez un espace où chacun peut exprimer ses désirs, ses limites et son rythme sans honte, pression ni interprétation automatique.":
        "Bewahren Sie einen Raum, in dem jeder Wünsche, Grenzen und den eigenen Rhythmus ohne Scham, Druck oder automatische Interpretation ausdrücken kann.",

      "Projets communs":
        "Gemeinsame Projekte",

      "Choisissez au moins un projet qui appartient réellement au couple et définissez des étapes simples pour le rendre vivant.":
        "Wählen Sie mindestens ein Projekt, das wirklich Ihrer Beziehung gehört, und definieren Sie einfache Schritte, um es lebendig werden zu lassen.",

      "Votre meilleure stratégie est de protéger le lien sans vous abandonner vous-même : rester deux personnes entières qui choisissent de construire ensemble.":
        "Ihre beste Strategie besteht darin, die Verbindung zu schützen, ohne sich selbst aufzugeben: zwei vollständige Menschen zu bleiben, die sich entscheiden, gemeinsam aufzubauen.",

      "Vision d’ensemble":
        "Gesamtvision",

      "La synthèse complète de votre relation":
        "Die vollständige Zusammenfassung Ihrer Beziehung",

      "Votre synastrie décrit une dynamique unique : un mélange de reconnaissance, d’attirance, de différences, de ressources et d’apprentissages.":
        "Ihre Synastrie beschreibt eine einzigartige Dynamik: eine Mischung aus Wiedererkennung, Anziehung, Unterschieden, Ressourcen und Lernprozessen.",

      "Le portrait global":
        "Das Gesamtbild",

      "Ce qui vous rapproche":
        "Was Sie einander näherbringt",

      "La reconnaissance, la curiosité, l’attirance ou le sentiment de pouvoir être compris créent une base affective importante.":
        "Wiedererkennung, Neugier, Anziehung oder das Gefühl, verstanden zu werden, schaffen eine wichtige emotionale Grundlage.",

      "Ce qui vous met à l’épreuve":
        "Was Sie herausfordert",

      "Les différences de rythme, de communication ou de besoin de sécurité peuvent devenir sensibles lorsqu’elles restent implicites.":
        "Unterschiede im Rhythmus, in der Kommunikation oder im Sicherheitsbedürfnis können empfindlich werden, wenn sie unausgesprochen bleiben.",

      "Ce qui vous fait grandir":
        "Was Sie wachsen lässt",

      "Votre relation vous invite à mieux connaître vos réactions, à exprimer vos besoins et à développer une forme plus mature d’engagement.":
        "Ihre Beziehung lädt Sie dazu ein, Ihre Reaktionen besser kennenzulernen, Bedürfnisse auszudrücken und eine reifere Form von Bindung zu entwickeln.",

      "Ce qui peut faire durer":
        "Was Beständigkeit fördern kann",

      "La durée se construit par les réparations, les projets, la souplesse, le respect de l’individualité et les décisions renouvelées.":
        "Beständigkeit entsteht durch Reparatur, gemeinsame Projekte, Flexibilität, Respekt vor Individualität und immer wieder erneuerte Entscheidungen.",

      "Votre signature relationnelle":
        "Ihre Beziehungssignatur",

      "Votre thème ne vous enferme pas dans une destinée. Il vous montre les forces à utiliser, les réactions à comprendre et les choix qui peuvent rendre votre relation plus consciente.":
        "Ihr Horoskop legt Sie nicht auf ein Schicksal fest. Es zeigt Ihnen die Stärken, die Sie nutzen können, die Reaktionen, die Sie verstehen sollten, und die Entscheidungen, die Ihre Beziehung bewusster machen können.",

      "Synthèse Luna Astralis":
        "Luna Astralis Zusammenfassung",

      "Fin de votre rapport":
        "Ende Ihres Berichts",

      "Votre compatibilité n’est pas une réponse figée, mais une carte de votre dynamique. Elle montre comment vos forces peuvent soutenir votre amour, comment vos différences peuvent devenir des chemins de compréhension et comment votre lien peut évoluer lorsque chacun choisit d’y participer pleinement.":
        "Ihre Kompatibilität ist keine starre Antwort, sondern eine Karte Ihrer Dynamik. Sie zeigt, wie Ihre Stärken Ihre Liebe unterstützen können, wie Unterschiede zu Wegen des Verständnisses werden können und wie sich Ihre Verbindung entwickeln kann, wenn beide sich bewusst daran beteiligen.",

      "« Les étoiles révèlent une rencontre. Le temps, la conscience et les choix écrivent l’histoire. »":
        "„Die Sterne zeigen eine Begegnung. Zeit, Bewusstsein und Entscheidungen schreiben die Geschichte.“",

      "Poursuivez votre exploration astrologique":
        "Setzen Sie Ihre astrologische Entdeckungsreise fort",

      "Carte du ciel Premium":
        "Premium-Geburtshoroskop",

      "Horoscope Premium":
        "Premium-Horoskop",

      "Compatibilité approfondie":
        "Vertiefte Kompatibilitätsanalyse",

      "Analyses astrologiques personnalisées":
        "Personalisierte astrologische Analysen",

      "Merci de votre confiance.":
        "Vielen Dank für Ihr Vertrauen.",
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
      Opposition: "Opposition",
      Trigone: "Trigon",
      Carré: "Quadrat",
      Sextile: "Sextil",
      Quinconce: "Quinkunx",
    },

    dynamicBalance: {
      harmonious:
        "harmonische Aspekte",

      conjunctionSingular:
        "Konjunktion",

      conjunctionPlural:
        "Konjunktionen",

      growth:
        "Entwicklungsaspekte",
    },

    signature: {
      before:
        "Der prägendste Aspekt Ihrer Synastrie ist",

      orb:
        "mit einem Orb von",

      after:
        "Diese Wechselwirkung prägt stark, wie Sie einander erkennen, aufeinander reagieren und Ihre Verbindung gestalten.",
    },
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

      "Compatibilité exceptionnelle":
        "Compatibilità eccezionale",

      "Compatibilité très favorable":
        "Compatibilità molto favorevole",

      "Compatibilité solide et évolutive":
        "Compatibilità solida e in evoluzione",

      "Compatibilité exigeante mais prometteuse":
        "Compatibilità impegnativa ma promettente",

      "Compatibilité complexe et transformatrice":
        "Compatibilità complessa e trasformativa",

      "Votre lien réunit de nombreuses facilités naturelles, une forte capacité de compréhension et un potentiel remarquable de croissance commune.":
        "Il vostro legame riunisce numerose affinità naturali, una forte capacità di comprensione e un notevole potenziale di crescita comune.",

      "Votre relation possède des bases favorables et plusieurs ressources naturelles pour traverser les périodes plus exigeantes.":
        "La vostra relazione possiede basi favorevoli e diverse risorse naturali per attraversare i periodi più impegnativi.",

      "Votre compatibilité repose sur un équilibre entre affinités réelles et apprentissages importants qui peuvent renforcer le couple.":
        "La vostra compatibilità si basa su un equilibrio tra affinità reali e importanti apprendimenti che possono rafforzare la relazione.",

      "Votre relation demande de la conscience, de la communication et des ajustements, mais elle peut devenir très constructive.":
        "La vostra relazione richiede consapevolezza, comunicazione e adattamenti, ma può diventare molto costruttiva.",

      "Votre lien est intense et profondément évolutif. Il demande une grande maturité émotionnelle pour exprimer tout son potentiel.":
        "Il vostro legame è intenso e profondamente trasformativo. Richiede una grande maturità emotiva per esprimere tutto il suo potenziale.",

      "Cette connexion soutient l’attirance, l’alchimie et la capacité à maintenir une énergie vivante dans la relation.":
        "Questa connessione sostiene l'attrazione, l'alchimia e la capacità di mantenere viva l'energia nella relazione.",

      "La tendresse et le besoin affectif peuvent se rejoindre avec douceur, favorisant sécurité et attachement.":
        "La tenerezza e il bisogno affettivo possono incontrarsi con dolcezza, favorendo sicurezza e attaccamento.",

      "Le dialogue, les idées et la capacité à comprendre l’autre constituent une ressource importante du couple.":
        "Il dialogo, le idee e la capacità di comprendere l'altro costituiscono una risorsa importante per la relazione.",

      "L’identité de l’un et la sensibilité de l’autre peuvent se reconnaître et se soutenir de manière naturelle.":
        "L'identità di uno e la sensibilità dell'altro possono riconoscersi e sostenersi naturalmente.",

      "Cette interaction favorise confiance, encouragement, expansion et vision commune.":
        "Questa interazione favorisce fiducia, incoraggiamento, espansione e una visione comune.",

      "Cet aspect apporte une ressource naturelle que le couple peut utiliser pour renforcer sa stabilité et sa complicité.":
        "Questo aspetto offre una risorsa naturale che la relazione può utilizzare per rafforzare stabilità e complicità.",

      "Cette interaction peut créer un sentiment de pression, de distance, de jugement ou de responsabilité trop lourde.":
        "Questa interazione può creare una sensazione di pressione, distanza, giudizio o responsabilità eccessiva.",

      "Cette connexion peut intensifier les peurs, les enjeux de contrôle, la jalousie ou le besoin de transformation.":
        "Questa connessione può intensificare paure, dinamiche di controllo, gelosia o bisogno di trasformazione.",

      "Le besoin de liberté, l’imprévisibilité ou les changements soudains peuvent fragiliser le sentiment de sécurité.":
        "Il bisogno di libertà, l'imprevedibilità o i cambiamenti improvvisi possono indebolire il senso di sicurezza.",

      "Le ton, les mots ou la manière de raisonner peuvent provoquer des malentendus et des réactions défensives.":
        "Il tono, le parole o il modo di ragionare possono provocare incomprensioni e reazioni difensive.",

      "Les réactions rapides, l’impatience ou les différences de rythme peuvent transformer une frustration en confrontation.":
        "Le reazioni rapide, l'impazienza o le differenze di ritmo possono trasformare una frustrazione in confronto.",

      "Cette tension demande davantage de recul, d’écoute et de souplesse afin d’éviter les réactions répétitives.":
        "Questa tensione richiede maggiore distacco, ascolto e flessibilità per evitare reazioni ripetitive.",

      "Vos ressources":
        "Le vostre risorse",

      "Les grandes forces de votre relation":
        "I grandi punti di forza della vostra relazione",

      "Ces énergies constituent les appuis naturels sur lesquels votre couple peut compter pour grandir, se rapprocher et traverser les périodes plus exigeantes.":
        "Queste energie costituiscono i sostegni naturali su cui la vostra relazione può contare per crescere, avvicinarsi e attraversare i periodi più impegnativi.",

      "Ce qui vous unit naturellement":
        "Ciò che vi unisce naturalmente",

      "Vos forces ne se limitent pas aux aspects faciles. Certaines connexions intenses deviennent aussi de puissantes ressources lorsqu’elles sont vécues avec maturité, respect et conscience.":
        "I vostri punti di forza non si limitano agli aspetti facili. Alcune connessioni intense possono diventare potenti risorse quando vengono vissute con maturità, rispetto e consapevolezza.",

      "Vos cinq appuis principaux":
        "I vostri cinque principali punti di forza",

      "Les données disponibles ne permettent pas d’établir un classement précis. Votre rapport demeure néanmoins utile pour comprendre les grandes dynamiques relationnelles.":
        "I dati disponibili non permettono di stabilire una classifica precisa. Il vostro rapporto rimane comunque utile per comprendere le principali dinamiche relazionali.",

      "Complicité":
        "Complicità",

      "Les aspects harmonieux montrent les domaines où vous pouvez vous comprendre, collaborer et retrouver plus rapidement votre équilibre.":
        "Gli aspetti armoniosi mostrano le aree in cui potete comprendervi, collaborare e ritrovare più rapidamente il vostro equilibrio.",

      "Intensité":
        "Intensità",

      "Les conjonctions concentrent l’énergie et donnent à certains thèmes une importance majeure dans votre histoire commune.":
        "Le congiunzioni concentrano l'energia e attribuiscono a determinati temi una grande importanza nella vostra storia comune.",

      "Résilience":
        "Resilienza",

      "Vos ressources naturelles deviennent particulièrement précieuses lorsque vous traversez une période de doute, de fatigue ou de changement.":
        "Le vostre risorse naturali diventano particolarmente preziose quando attraversate un periodo di dubbio, stanchezza o cambiamento.",

      "Croissance":
        "Crescita",

      "Votre relation possède un potentiel d’évolution lorsqu’elle transforme ses différences en compréhension plutôt qu’en opposition.":
        "La vostra relazione possiede un potenziale di crescita quando trasforma le differenze in comprensione anziché in opposizione.",

      "Vos apprentissages":
        "I vostri apprendimenti",

      "Les défis à transformer":
        "Le sfide da trasformare",

      "Les tensions ne prédisent pas un échec. Elles montrent les endroits où la relation demande plus de conscience, de dialogue et de responsabilité.":
        "Le tensioni non prevedono un fallimento. Mostrano le aree in cui la relazione richiede maggiore consapevolezza, dialogo e responsabilità.",

      "Comprendre avant de corriger":
        "Comprendere prima di correggere",

      "Un aspect difficile devient réellement problématique lorsqu’il reste inconscient. Dès que vous identifiez le besoin, la peur ou la différence derrière la réaction, vous récupérez une marge de choix.":
        "Un aspetto difficile diventa realmente problematico quando rimane inconsapevole. Quando identificate il bisogno, la paura o la differenza dietro la reazione, recuperate uno spazio di scelta.",

      "Vos principaux points de vigilance":
        "I vostri principali punti di attenzione",

      "Aucun aspect difficile majeur ne se distingue dans les données analysées. Cela ne supprime pas les désaccords, mais indique une dynamique globale plus fluide.":
        "Nessun aspetto difficile importante emerge dai dati analizzati. Questo non elimina i disaccordi, ma indica una dinamica complessivamente più fluida.",

      "Éviter la répétition":
        "Evitare la ripetizione",

      "Lorsque le même conflit revient, cherchez le besoin non exprimé plutôt que de reprendre exactement la même discussion.":
        "Quando lo stesso conflitto ritorna, cercate il bisogno non espresso invece di ripetere esattamente la stessa discussione.",

      "Réduire la projection":
        "Ridurre la proiezione",

      "Demandez-vous ce qui appartient réellement à l’autre et ce qui réveille une peur, une blessure ou une attente personnelle.":
        "Chiedetevi cosa appartiene realmente all'altra persona e cosa risveglia una paura, una ferita o un'aspettativa personale.",

      "Choisir le bon moment":
        "Scegliere il momento giusto",

      "Une discussion importante devient plus constructive lorsque les deux personnes sont disponibles, calmes et capables d’écouter.":
        "Una discussione importante diventa più costruttiva quando entrambe le persone sono disponibili, calme e capaci di ascoltare.",

      "Réparer rapidement":
        "Riparare rapidamente",

      "La solidité d’un couple dépend moins de l’absence de conflit que de sa capacité à reconnaître, réparer et recommencer autrement.":
        "La solidità di una relazione dipende meno dall'assenza di conflitto che dalla capacità di riconoscere, riparare e ricominciare in modo diverso.",

      "Lecture globale":
        "Lettura globale",

      "Votre potentiel amoureux":
        "Il vostro potenziale amoroso",

      "Ce score représente une synthèse symbolique de vos aspects. Il ne décide pas de l’avenir du couple, mais décrit la qualité des ressources et des apprentissages présents.":
        "Questo punteggio rappresenta una sintesi simbolica dei vostri aspetti. Non decide il futuro della relazione, ma descrive la qualità delle risorse e degli apprendimenti presenti.",

      "Compatibilité émotionnelle":
        "Compatibilità emotiva",

      "Votre potentiel affectif dépend de votre capacité à reconnaître les besoins de sécurité, de proximité, d’écoute et de réconfort de chacun.":
        "Il vostro potenziale affettivo dipende dalla capacità di riconoscere i bisogni di sicurezza, vicinanza, ascolto e conforto di ciascuno.",

      "Compatibilité intellectuelle":
        "Compatibilità intellettuale",

      "La qualité de votre dialogue devient une force lorsque vous distinguez les faits, les émotions, les attentes et les interprétations.":
        "La qualità del vostro dialogo diventa una forza quando distinguete fatti, emozioni, aspettative e interpretazioni.",

      "Compatibilité intime":
        "Compatibilità intima",

      "L’intimité se nourrit de confiance, de désir, de tendresse et de la liberté de parler clairement de ses besoins et de ses limites.":
        "L'intimità si nutre di fiducia, desiderio, tenerezza e libertà di parlare chiaramente dei propri bisogni e limiti.",

      "Compatibilité de vie":
        "Compatibilità nella vita quotidiana",

      "Le quotidien devient plus harmonieux lorsque les responsabilités, le temps, l’argent et les projets sont discutés avec transparence.":
        "La vita quotidiana diventa più armoniosa quando responsabilità, tempo, denaro e progetti vengono discussi con trasparenza.",

      "Potentiel à long terme":
        "Potenziale a lungo termine",

      "Votre durée repose sur la capacité à préserver le lien tout en permettant à chacun de continuer à évoluer personnellement.":
        "La durata si basa sulla capacità di preservare il legame permettendo al tempo stesso a ciascuno di continuare a crescere personalmente.",

      "Dynamique générale":
        "Dinamica generale",

      "« Une grande compatibilité ne signifie pas tout ressentir de la même manière, mais apprendre à faire de deux mondes différents un espace commun. »":
        "«Una grande compatibilità non significa sentire tutto nello stesso modo, ma imparare a trasformare due mondi diversi in uno spazio comune.»",

      "Mise en pratique":
        "Applicazione pratica",

      "Vos conseils personnalisés":
        "I vostri consigli personalizzati",

      "La compréhension astrologique devient réellement utile lorsqu’elle se transforme en gestes simples, réguliers et observables.":
        "La comprensione astrologica diventa realmente utile quando si trasforma in azioni semplici, regolari e osservabili.",

      "Transformer la connaissance en action":
        "Trasformare la conoscenza in azione",

      "Vous n’avez pas besoin de tout changer immédiatement. Choisissez une seule habitude relationnelle, appliquez-la pendant quelques semaines, puis observez ce qu’elle transforme dans votre manière de vous comprendre.":
        "Non dovete cambiare tutto immediatamente. Scegliete una sola abitudine relazionale, applicatela per alcune settimane e osservate ciò che trasforma nel vostro modo di comprendervi.",

      "Communication":
        "Comunicazione",

      "Parlez du besoin derrière la réaction. Une phrase précise et calme est souvent plus utile qu’une longue accumulation de reproches.":
        "Parlate del bisogno che si trova dietro la reazione. Una frase precisa e calma è spesso più utile di una lunga accumulazione di rimproveri.",

      "Émotions":
        "Emozioni",

      "Ne minimisez pas un ressenti simplement parce que vous ne l’auriez pas vécu de la même façon. Accueillir n’oblige pas à être d’accord.":
        "Non minimizzate un sentimento semplicemente perché voi non lo avreste vissuto nello stesso modo. Accoglierlo non significa dover essere d'accordo.",

      "Gestion des conflits":
        "Gestione dei conflitti",

      "Faites une pause lorsque le dialogue devient défensif, puis revenez au sujet avec un objectif concret : comprendre, décider ou réparer.":
        "Fate una pausa quando il dialogo diventa difensivo, poi tornate sull'argomento con un obiettivo concreto: comprendere, decidere o riparare.",

      "Vie quotidienne":
        "Vita quotidiana",

      "Clarifiez régulièrement les responsabilités, les horaires et la charge mentale afin que les frustrations pratiques ne contaminent pas le lien affectif.":
        "Chiarite regolarmente responsabilità, orari e carico mentale affinché le frustrazioni pratiche non contaminino il legame affettivo.",

      "Intimité":
        "Intimità",

      "Préservez un espace où chacun peut exprimer ses désirs, ses limites et son rythme sans honte, pression ni interprétation automatique.":
        "Preservate uno spazio in cui ciascuno possa esprimere desideri, limiti e ritmo personale senza vergogna, pressione o interpretazioni automatiche.",

      "Projets communs":
        "Progetti comuni",

      "Choisissez au moins un projet qui appartient réellement au couple et définissez des étapes simples pour le rendre vivant.":
        "Scegliete almeno un progetto che appartenga realmente alla relazione e definite semplici tappe per renderlo vivo.",

      "Votre meilleure stratégie est de protéger le lien sans vous abandonner vous-même : rester deux personnes entières qui choisissent de construire ensemble.":
        "La vostra strategia migliore è proteggere il legame senza abbandonare voi stessi: restare due persone complete che scelgono di costruire insieme.",

      "Vision d’ensemble":
        "Visione d'insieme",

      "La synthèse complète de votre relation":
        "La sintesi completa della vostra relazione",

      "Votre synastrie décrit une dynamique unique : un mélange de reconnaissance, d’attirance, de différences, de ressources et d’apprentissages.":
        "La vostra sinastria descrive una dinamica unica: un insieme di riconoscimento, attrazione, differenze, risorse e apprendimenti.",

      "Le portrait global":
        "Il quadro generale",

      "Ce qui vous rapproche":
        "Ciò che vi avvicina",

      "La reconnaissance, la curiosité, l’attirance ou le sentiment de pouvoir être compris créent une base affective importante.":
        "Il riconoscimento, la curiosità, l'attrazione o la sensazione di poter essere compresi creano una base affettiva importante.",

      "Ce qui vous met à l’épreuve":
        "Ciò che vi mette alla prova",

      "Les différences de rythme, de communication ou de besoin de sécurité peuvent devenir sensibles lorsqu’elles restent implicites.":
        "Le differenze di ritmo, comunicazione o bisogno di sicurezza possono diventare sensibili quando rimangono implicite.",

      "Ce qui vous fait grandir":
        "Ciò che vi fa crescere",

      "Votre relation vous invite à mieux connaître vos réactions, à exprimer vos besoins et à développer une forme plus mature d’engagement.":
        "La vostra relazione vi invita a conoscere meglio le vostre reazioni, esprimere i vostri bisogni e sviluppare una forma più matura di impegno.",

      "Ce qui peut faire durer":
        "Ciò che può far durare la relazione",

      "La durée se construit par les réparations, les projets, la souplesse, le respect de l’individualité et les décisions renouvelées.":
        "La durata si costruisce attraverso le riparazioni, i progetti, la flessibilità, il rispetto dell'individualità e le decisioni rinnovate.",

      "Votre signature relationnelle":
        "La vostra firma relazionale",

      "Votre thème ne vous enferme pas dans une destinée. Il vous montre les forces à utiliser, les réactions à comprendre et les choix qui peuvent rendre votre relation plus consciente.":
        "Il vostro tema non vi imprigiona in un destino. Vi mostra le forze da utilizzare, le reazioni da comprendere e le scelte che possono rendere la relazione più consapevole.",

      "Synthèse Luna Astralis":
        "Sintesi Luna Astralis",

      "Fin de votre rapport":
        "Fine del vostro rapporto",

      "Votre compatibilité n’est pas une réponse figée, mais une carte de votre dynamique. Elle montre comment vos forces peuvent soutenir votre amour, comment vos différences peuvent devenir des chemins de compréhension et comment votre lien peut évoluer lorsque chacun choisit d’y participer pleinement.":
        "La vostra compatibilità non è una risposta fissa, ma una mappa della vostra dinamica. Mostra come i vostri punti di forza possono sostenere il vostro amore, come le differenze possono diventare percorsi di comprensione e come il legame può evolvere quando ciascuno sceglie di parteciparvi pienamente.",

      "« Les étoiles révèlent une rencontre. Le temps, la conscience et les choix écrivent l’histoire. »":
        "«Le stelle rivelano un incontro. Il tempo, la consapevolezza e le scelte scrivono la storia.»",

      "Poursuivez votre exploration astrologique":
        "Continuate la vostra esplorazione astrologica",

      "Carte du ciel Premium":
        "Tema natale Premium",

      "Horoscope Premium":
        "Oroscopo Premium",

      "Compatibilité approfondie":
        "Compatibilità approfondita",

      "Analyses astrologiques personnalisées":
        "Analisi astrologiche personalizzate",

      "Merci de votre confiance.":
        "Grazie per la vostra fiducia.",
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
      Conjonction: "Congiunzione",
      Opposition: "Opposizione",
      Trigone: "Trigono",
      Carré: "Quadratura",
      Sextile: "Sestile",
      Quinconce: "Quinconce",
    },

    dynamicBalance: {
      harmonious:
        "aspetti armoniosi",

      conjunctionSingular:
        "congiunzione",

      conjunctionPlural:
        "congiunzioni",

      growth:
        "aspetti evolutivi",
    },

    signature: {
      before:
        "L'aspetto più significativo della vostra sinastria è",

      orb:
        "con un'orbe di",

      after:
        "Questa interazione influenza fortemente il modo in cui vi riconoscete, reagite e costruite il vostro legame.",
    },
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

      "Compatibilité exceptionnelle":
        "Compatibilidade excecional",

      "Compatibilité très favorable":
        "Compatibilidade muito favorável",

      "Compatibilité solide et évolutive":
        "Compatibilidade sólida e evolutiva",

      "Compatibilité exigeante mais prometteuse":
        "Compatibilidade exigente mas promissora",

      "Compatibilité complexe et transformatrice":
        "Compatibilidade complexa e transformadora",

      "Votre lien réunit de nombreuses facilités naturelles, une forte capacité de compréhension et un potentiel remarquable de croissance commune.":
        "A sua ligação reúne muitas facilidades naturais, uma forte capacidade de compreensão e um potencial notável de crescimento conjunto.",

      "Votre relation possède des bases favorables et plusieurs ressources naturelles pour traverser les périodes plus exigeantes.":
        "A sua relação possui bases favoráveis e vários recursos naturais para atravessar períodos mais exigentes.",

      "Votre compatibilité repose sur un équilibre entre affinités réelles et apprentissages importants qui peuvent renforcer le couple.":
        "A sua compatibilidade assenta num equilíbrio entre afinidades reais e aprendizagens importantes que podem fortalecer a relação.",

      "Votre relation demande de la conscience, de la communication et des ajustements, mais elle peut devenir très constructive.":
        "A sua relação exige consciência, comunicação e ajustes, mas pode tornar-se muito construtiva.",

      "Votre lien est intense et profondément évolutif. Il demande une grande maturité émotionnelle pour exprimer tout son potentiel.":
        "A sua ligação é intensa e profundamente transformadora. Exige grande maturidade emocional para expressar todo o seu potencial.",

      "Cette connexion soutient l’attirance, l’alchimie et la capacité à maintenir une énergie vivante dans la relation.":
        "Esta conexão apoia a atração, a química e a capacidade de manter uma energia viva na relação.",

      "La tendresse et le besoin affectif peuvent se rejoindre avec douceur, favorisant sécurité et attachement.":
        "A ternura e a necessidade afetiva podem encontrar-se com suavidade, favorecendo segurança e apego.",

      "Le dialogue, les idées et la capacité à comprendre l’autre constituent une ressource importante du couple.":
        "O diálogo, as ideias e a capacidade de compreender a outra pessoa constituem um recurso importante da relação.",

      "L’identité de l’un et la sensibilité de l’autre peuvent se reconnaître et se soutenir de manière naturelle.":
        "A identidade de uma pessoa e a sensibilidade da outra podem reconhecer-se e apoiar-se naturalmente.",

      "Cette interaction favorise confiance, encouragement, expansion et vision commune.":
        "Esta interação favorece confiança, encorajamento, expansão e uma visão comum.",

      "Cet aspect apporte une ressource naturelle que le couple peut utiliser pour renforcer sa stabilité et sa complicité.":
        "Este aspeto oferece um recurso natural que a relação pode utilizar para reforçar estabilidade e cumplicidade.",

      "Cette interaction peut créer un sentiment de pression, de distance, de jugement ou de responsabilité trop lourde.":
        "Esta interação pode criar uma sensação de pressão, distância, julgamento ou responsabilidade excessiva.",

      "Cette connexion peut intensifier les peurs, les enjeux de contrôle, la jalousie ou le besoin de transformation.":
        "Esta conexão pode intensificar medos, questões de controlo, ciúme ou necessidade de transformação.",

      "Le besoin de liberté, l’imprévisibilité ou les changements soudains peuvent fragiliser le sentiment de sécurité.":
        "A necessidade de liberdade, a imprevisibilidade ou mudanças repentinas podem enfraquecer a sensação de segurança.",

      "Le ton, les mots ou la manière de raisonner peuvent provoquer des malentendus et des réactions défensives.":
        "O tom, as palavras ou a forma de raciocinar podem provocar mal-entendidos e reações defensivas.",

      "Les réactions rapides, l’impatience ou les différences de rythme peuvent transformer une frustration en confrontation.":
        "Reações rápidas, impaciência ou diferenças de ritmo podem transformar frustração em confronto.",

      "Cette tension demande davantage de recul, d’écoute et de souplesse afin d’éviter les réactions répétitives.":
        "Esta tensão exige maior distanciamento, escuta e flexibilidade para evitar reações repetitivas.",

      "Vos ressources":
        "Os seus recursos",

      "Les grandes forces de votre relation":
        "Os grandes pontos fortes da sua relação",

      "Ces énergies constituent les appuis naturels sur lesquels votre couple peut compter pour grandir, se rapprocher et traverser les périodes plus exigeantes.":
        "Estas energias constituem apoios naturais com os quais a sua relação pode contar para crescer, aproximar-se e atravessar períodos mais exigentes.",

      "Ce qui vous unit naturellement":
        "O que vos une naturalmente",

      "Vos forces ne se limitent pas aux aspects faciles. Certaines connexions intenses deviennent aussi de puissantes ressources lorsqu’elles sont vécues avec maturité, respect et conscience.":
        "Os seus pontos fortes não se limitam aos aspetos fáceis. Algumas conexões intensas também podem tornar-se recursos poderosos quando vividas com maturidade, respeito e consciência.",

      "Vos cinq appuis principaux":
        "Os seus cinco principais pontos fortes",

      "Les données disponibles ne permettent pas d’établir un classement précis. Votre rapport demeure néanmoins utile pour comprendre les grandes dynamiques relationnelles.":
        "Os dados disponíveis não permitem estabelecer uma classificação precisa. O relatório continua, no entanto, útil para compreender as principais dinâmicas da relação.",

      "Complicité":
        "Cumplicidade",

      "Les aspects harmonieux montrent les domaines où vous pouvez vous comprendre, collaborer et retrouver plus rapidement votre équilibre.":
        "Os aspetos harmoniosos mostram as áreas onde podem compreender-se, colaborar e recuperar mais rapidamente o equilíbrio.",

      "Intensité":
        "Intensidade",

      "Les conjonctions concentrent l’énergie et donnent à certains thèmes une importance majeure dans votre histoire commune.":
        "As conjunções concentram energia e dão a determinados temas uma importância fundamental na vossa história comum.",

      "Résilience":
        "Resiliência",

      "Vos ressources naturelles deviennent particulièrement précieuses lorsque vous traversez une période de doute, de fatigue ou de changement.":
        "Os seus recursos naturais tornam-se particularmente valiosos quando atravessam períodos de dúvida, cansaço ou mudança.",

      "Croissance":
        "Crescimento",

      "Votre relation possède un potentiel d’évolution lorsqu’elle transforme ses différences en compréhension plutôt qu’en opposition.":
        "A sua relação possui potencial de evolução quando transforma as diferenças em compreensão em vez de oposição.",

      "Vos apprentissages":
        "As suas aprendizagens",

      "Les défis à transformer":
        "Os desafios a transformar",

      "Les tensions ne prédisent pas un échec. Elles montrent les endroits où la relation demande plus de conscience, de dialogue et de responsabilité.":
        "As tensões não preveem fracasso. Mostram as áreas onde a relação exige mais consciência, diálogo e responsabilidade.",

      "Comprendre avant de corriger":
        "Compreender antes de corrigir",

      "Un aspect difficile devient réellement problématique lorsqu’il reste inconscient. Dès que vous identifiez le besoin, la peur ou la différence derrière la réaction, vous récupérez une marge de choix.":
        "Um aspeto difícil torna-se realmente problemático quando permanece inconsciente. Assim que identificam a necessidade, o medo ou a diferença por trás da reação, recuperam espaço para escolher.",

      "Vos principaux points de vigilance":
        "Os seus principais pontos de atenção",

      "Aucun aspect difficile majeur ne se distingue dans les données analysées. Cela ne supprime pas les désaccords, mais indique une dynamique globale plus fluide.":
        "Nenhum aspeto difícil importante se destaca nos dados analisados. Isso não elimina desacordos, mas indica uma dinâmica geral mais fluida.",

      "Éviter la répétition":
        "Evitar a repetição",

      "Lorsque le même conflit revient, cherchez le besoin non exprimé plutôt que de reprendre exactement la même discussion.":
        "Quando o mesmo conflito regressar, procurem a necessidade não expressa em vez de repetir exatamente a mesma discussão.",

      "Réduire la projection":
        "Reduzir a projeção",

      "Demandez-vous ce qui appartient réellement à l’autre et ce qui réveille une peur, une blessure ou une attente personnelle.":
        "Perguntem-se o que pertence realmente à outra pessoa e o que desperta um medo, uma ferida ou uma expectativa pessoal.",

      "Choisir le bon moment":
        "Escolher o momento certo",

      "Une discussion importante devient plus constructive lorsque les deux personnes sont disponibles, calmes et capables d’écouter.":
        "Uma conversa importante torna-se mais construtiva quando ambas as pessoas estão disponíveis, calmas e capazes de ouvir.",

      "Réparer rapidement":
        "Reparar rapidamente",

      "La solidité d’un couple dépend moins de l’absence de conflit que de sa capacité à reconnaître, réparer et recommencer autrement.":
        "A solidez de uma relação depende menos da ausência de conflito do que da capacidade de reconhecer, reparar e recomeçar de outra forma.",

      "Lecture globale":
        "Leitura global",

      "Votre potentiel amoureux":
        "O seu potencial amoroso",

      "Ce score représente une synthèse symbolique de vos aspects. Il ne décide pas de l’avenir du couple, mais décrit la qualité des ressources et des apprentissages présents.":
        "Esta pontuação representa uma síntese simbólica dos seus aspetos. Não decide o futuro da relação, mas descreve a qualidade dos recursos e aprendizagens presentes.",

      "Compatibilité émotionnelle":
        "Compatibilidade emocional",

      "Votre potentiel affectif dépend de votre capacité à reconnaître les besoins de sécurité, de proximité, d’écoute et de réconfort de chacun.":
        "O seu potencial afetivo depende da capacidade de reconhecer as necessidades de segurança, proximidade, escuta e conforto de cada pessoa.",

      "Compatibilité intellectuelle":
        "Compatibilidade intelectual",

      "La qualité de votre dialogue devient une force lorsque vous distinguez les faits, les émotions, les attentes et les interprétations.":
        "A qualidade do diálogo torna-se uma força quando distinguem factos, emoções, expectativas e interpretações.",

      "Compatibilité intime":
        "Compatibilidade íntima",

      "L’intimité se nourrit de confiance, de désir, de tendresse et de la liberté de parler clairement de ses besoins et de ses limites.":
        "A intimidade alimenta-se de confiança, desejo, ternura e liberdade para falar claramente das necessidades e limites.",

      "Compatibilité de vie":
        "Compatibilidade na vida quotidiana",

      "Le quotidien devient plus harmonieux lorsque les responsabilités, le temps, l’argent et les projets sont discutés avec transparence.":
        "A vida quotidiana torna-se mais harmoniosa quando responsabilidades, tempo, dinheiro e projetos são discutidos com transparência.",

      "Potentiel à long terme":
        "Potencial a longo prazo",

      "Votre durée repose sur la capacité à préserver le lien tout en permettant à chacun de continuer à évoluer personnellement.":
        "A duração depende da capacidade de preservar a ligação permitindo simultaneamente que cada pessoa continue a evoluir individualmente.",

      "Dynamique générale":
        "Dinâmica geral",

      "« Une grande compatibilité ne signifie pas tout ressentir de la même manière, mais apprendre à faire de deux mondes différents un espace commun. »":
        "«Uma grande compatibilidade não significa sentir tudo da mesma forma, mas aprender a transformar dois mundos diferentes num espaço comum.»",

      "Mise en pratique":
        "Aplicação prática",

      "Vos conseils personnalisés":
        "Os seus conselhos personalizados",

      "La compréhension astrologique devient réellement utile lorsqu’elle se transforme en gestes simples, réguliers et observables.":
        "A compreensão astrológica torna-se realmente útil quando se transforma em ações simples, regulares e observáveis.",

      "Transformer la connaissance en action":
        "Transformar conhecimento em ação",

      "Vous n’avez pas besoin de tout changer immédiatement. Choisissez une seule habitude relationnelle, appliquez-la pendant quelques semaines, puis observez ce qu’elle transforme dans votre manière de vous comprendre.":
        "Não precisam de mudar tudo imediatamente. Escolham um único hábito relacional, apliquem-no durante algumas semanas e observem o que ele transforma na forma como se compreendem.",

      "Communication":
        "Comunicação",

      "Parlez du besoin derrière la réaction. Une phrase précise et calme est souvent plus utile qu’une longue accumulation de reproches.":
        "Falem da necessidade por trás da reação. Uma frase precisa e calma é muitas vezes mais útil do que uma longa acumulação de críticas.",

      "Émotions":
        "Emoções",

      "Ne minimisez pas un ressenti simplement parce que vous ne l’auriez pas vécu de la même façon. Accueillir n’oblige pas à être d’accord.":
        "Não minimizem um sentimento simplesmente porque não o teriam vivido da mesma forma. Acolhê-lo não significa ser obrigado a concordar.",

      "Gestion des conflits":
        "Gestão de conflitos",

      "Faites une pause lorsque le dialogue devient défensif, puis revenez au sujet avec un objectif concret : comprendre, décider ou réparer.":
        "Façam uma pausa quando o diálogo se tornar defensivo e depois regressem ao assunto com um objetivo concreto: compreender, decidir ou reparar.",

      "Vie quotidienne":
        "Vida quotidiana",

      "Clarifiez régulièrement les responsabilités, les horaires et la charge mentale afin que les frustrations pratiques ne contaminent pas le lien affectif.":
        "Clarifiquem regularmente responsabilidades, horários e carga mental para que as frustrações práticas não contaminem a ligação afetiva.",

      "Intimité":
        "Intimidade",

      "Préservez un espace où chacun peut exprimer ses désirs, ses limites et son rythme sans honte, pression ni interprétation automatique.":
        "Preservem um espaço onde cada pessoa possa expressar desejos, limites e ritmo sem vergonha, pressão ou interpretação automática.",

      "Projets communs":
        "Projetos comuns",

      "Choisissez au moins un projet qui appartient réellement au couple et définissez des étapes simples pour le rendre vivant.":
        "Escolham pelo menos um projeto que pertença realmente à relação e definam etapas simples para lhe dar vida.",

      "Votre meilleure stratégie est de protéger le lien sans vous abandonner vous-même : rester deux personnes entières qui choisissent de construire ensemble.":
        "A melhor estratégia é proteger a ligação sem se abandonarem: continuar duas pessoas inteiras que escolhem construir juntas.",

      "Vision d’ensemble":
        "Visão geral",

      "La synthèse complète de votre relation":
        "A síntese completa da sua relação",

      "Votre synastrie décrit une dynamique unique : un mélange de reconnaissance, d’attirance, de différences, de ressources et d’apprentissages.":
        "A sua sinastria descreve uma dinâmica única: uma combinação de reconhecimento, atração, diferenças, recursos e aprendizagens.",

      "Le portrait global":
        "O retrato global",

      "Ce qui vous rapproche":
        "O que vos aproxima",

      "La reconnaissance, la curiosité, l’attirance ou le sentiment de pouvoir être compris créent une base affective importante.":
        "O reconhecimento, a curiosidade, a atração ou a sensação de serem compreendidos criam uma base afetiva importante.",

      "Ce qui vous met à l’épreuve":
        "O que vos põe à prova",

      "Les différences de rythme, de communication ou de besoin de sécurité peuvent devenir sensibles lorsqu’elles restent implicites.":
        "As diferenças de ritmo, comunicação ou necessidade de segurança podem tornar-se sensíveis quando permanecem implícitas.",

      "Ce qui vous fait grandir":
        "O que vos faz crescer",

      "Votre relation vous invite à mieux connaître vos réactions, à exprimer vos besoins et à développer une forme plus mature d’engagement.":
        "A sua relação convida-vos a conhecer melhor as próprias reações, expressar as necessidades e desenvolver uma forma mais madura de compromisso.",

      "Ce qui peut faire durer":
        "O que pode fazer a relação durar",

      "La durée se construit par les réparations, les projets, la souplesse, le respect de l’individualité et les décisions renouvelées.":
        "A duração constrói-se através das reparações, dos projetos, da flexibilidade, do respeito pela individualidade e de decisões renovadas.",

      "Votre signature relationnelle":
        "A sua assinatura relacional",

      "Votre thème ne vous enferme pas dans une destinée. Il vous montre les forces à utiliser, les réactions à comprendre et les choix qui peuvent rendre votre relation plus consciente.":
        "O seu mapa não o prende a um destino. Mostra as forças que pode utilizar, as reações que precisa compreender e as escolhas que podem tornar a relação mais consciente.",

      "Synthèse Luna Astralis":
        "Síntese Luna Astralis",

      "Fin de votre rapport":
        "Fim do seu relatório",

      "Votre compatibilité n’est pas une réponse figée, mais une carte de votre dynamique. Elle montre comment vos forces peuvent soutenir votre amour, comment vos différences peuvent devenir des chemins de compréhension et comment votre lien peut évoluer lorsque chacun choisit d’y participer pleinement.":
        "A sua compatibilidade não é uma resposta fixa, mas um mapa da sua dinâmica. Mostra como os seus pontos fortes podem apoiar o amor, como as diferenças podem tornar-se caminhos de compreensão e como a ligação pode evoluir quando cada pessoa escolhe participar plenamente.",

      "« Les étoiles révèlent une rencontre. Le temps, la conscience et les choix écrivent l’histoire. »":
        "«As estrelas revelam um encontro. O tempo, a consciência e as escolhas escrevem a história.»",

      "Poursuivez votre exploration astrologique":
        "Continue a sua exploração astrológica",

      "Carte du ciel Premium":
        "Mapa Astral Premium",

      "Horoscope Premium":
        "Horóscopo Premium",

      "Compatibilité approfondie":
        "Compatibilidade aprofundada",

      "Analyses astrologiques personnalisées":
        "Análises astrológicas personalizadas",

      "Merci de votre confiance.":
        "Obrigado pela sua confiança.",
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
      Conjonction: "Conjunção",
      Opposition: "Oposição",
      Trigone: "Trígono",
      Carré: "Quadratura",
      Sextile: "Sextil",
      Quinconce: "Quincúncio",
    },

    dynamicBalance: {
      harmonious:
        "aspetos harmoniosos",

      conjunctionSingular:
        "conjunção",

      conjunctionPlural:
        "conjunções",

      growth:
        "aspetos de evolução",
    },

    signature: {
      before:
        "O aspeto mais marcante da sua sinastria é",

      orb:
        "com um orbe de",

      after:
        "Esta interação influencia fortemente a forma como se reconhecem, reagem e constroem a sua ligação.",
    },
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
      (first, second) =>
        second.start -
        first.start,
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
   SAFE LITERAL LOCALIZATION
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
      "CompatibilitySummary.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  /*
   * Valeurs utilisées par la logique.
   *
   * On ne les traduit JAMAIS.
   */
  const technicalValues =
    new Set([
      "harmonious",
      "challenging",
      "intense",

      "conjunction",
      "opposition",
      "trine",
      "square",
      "sextile",
      "quincunx",

      "venus",
      "mars",

      "moon",
      "lune",

      "mercury",
      "mercure",

      "sun",
      "soleil",

      "jupiter",

      "saturn",
      "saturne",

      "pluto",
      "pluton",

      "uranus",

      "A4",
      "NFD",
    ]);

  const visit = (
    node: ts.Node,
  ): void => {
    /*
     * Texte JSX visible.
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
     * Chaînes normales.
     *
     * Ceci traduit notamment :
     *
     * - Header
     * - SummaryCard
     * - advice[]
     * - score labels
     * - score interpretations
     * - strength texts
     * - challenge texts
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

      const original =
        normalizeVisibleText(
          node.text,
        );

      const translated =
        translations[node.text] ??
        translations[original];

      if (
        translated &&
        translated !== node.text
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
   DYNAMIC HELPERS
========================================================= */

function buildHelpers(
  data: LocaleData,
): string {
  return `
const __SUMMARY_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __SUMMARY_ASPECTS =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __SUMMARY_BALANCE =
  ${JSON.stringify(
    data.dynamicBalance,
    null,
    2,
  )};

const __SUMMARY_SIGNATURE =
  ${JSON.stringify(
    data.signature,
    null,
    2,
  )};

function localizeSummaryPlanet(
  value: string,
): string {
  return (
    __SUMMARY_PLANETS[value] ??
    value
  );
}

function localizeSummaryAspect(
  value: string,
): string {
  return (
    __SUMMARY_ASPECTS[value] ??
    value
  );
}

function getLocalizedSummaryAspectTitle(
  aspect: CompatibilityAspect,
): string {
  return \`\${localizeSummaryPlanet(
    translateCompatibilityPlanet(
      aspect.person1Planet,
    ),
  )} \${localizeSummaryAspect(
    translateCompatibilityAspect(
      aspect.type,
    ),
  )} \${localizeSummaryPlanet(
    translateCompatibilityPlanet(
      aspect.person2Planet,
    ),
  )}\`;
}

function getLocalizedSummaryBalance(
  harmonious: number,
  intense: number,
  challenging: number,
): string {
  const conjunctionWord =
    intense === 1
      ? __SUMMARY_BALANCE
          .conjunctionSingular
      : __SUMMARY_BALANCE
          .conjunctionPlural;

  return \`\${harmonious} \${__SUMMARY_BALANCE.harmonious}, \${intense} \${conjunctionWord} et \${challenging} \${__SUMMARY_BALANCE.growth}\`;
}

function getLocalizedRelationshipSignature(
  aspect: CompatibilityAspect,
): string {
  return \`\${__SUMMARY_SIGNATURE.before} \${getLocalizedSummaryAspectTitle(
    aspect,
  )}, \${__SUMMARY_SIGNATURE.orb} \${aspect.orb.toFixed(
    1,
  )}°. \${__SUMMARY_SIGNATURE.after}\`;
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
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
    )}\n${marker}`,
  );
}

/* =========================================================
   DYNAMIC DISPLAY REPLACEMENTS
========================================================= */

function replaceDynamicDisplay(
  source: string,
): string {
  let output = source;

  /*
   * -------------------------------------------------------
   * Aspect titles dans pages 45 et 46.
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /\{getAspectTitle\(item\.aspect\)\}/g,
      `{getLocalizedSummaryAspectTitle(
                  item.aspect,
                )}`,
    );

  /*
   * -------------------------------------------------------
   * Phrase dynamique page 47 :
   *
   * X aspects harmonieux,
   * X conjonction(s)
   * et X aspects d'évolution...
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /\{`\$\{harmonious\} aspects harmonieux, \$\{intense\} conjonction\$\{intense > 1 \? "s" : ""\} et \$\{challenging\} aspects d’évolution composent votre équilibre relationnel\.`\}/g,
      `{getLocalizedSummaryBalance(
              harmonious,
              intense,
              challenging,
            ) + "."}`,
    );

  /*
   * -------------------------------------------------------
   * Signature relationnelle page 49.
   *
   * On remplace le paragraphe dynamique
   * français complet.
   * -------------------------------------------------------
   */

    /*
   * -------------------------------------------------------
   * Page 49 — valeurs dynamiques.
   * Fonctionne dans toutes les langues.
   * -------------------------------------------------------
   */

  output =
    output.replace(
      /\{getAspectTitle\(strongest\)\}/g,
      `{getLocalizedSummaryAspectTitle(
              strongest,
            )}`,
    );

  output =
    output.replace(
      /\{strongest\.orb\.toFixed\(1\)\}°/g,
      `{" "}{strongest.orb.toFixed(1)}°`,
    );

  output =
    output.replace(
      /\{score\}\s*%/g,
      `{" "}{score} %`,
    );

  return output;
}

/* =========================================================
   MAIN
========================================================= */

export function localizeCompatibilitySummary({
  source,
  locale,
}: {
  source: string;
  locale: PaidPdfLocale;
}): string {
  /*
   * Français =
   * fichier original intact.
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
   * Tous les textes fixes,
   * plus les chaînes retournées
   * par les fonctions.
   */
  let localized =
    localizeSafeLiterals(
      source,
      data.text,
    );

  /*
   * 2.
   * Helpers nécessaires
   * aux planètes/aspects dynamiques.
   */
  localized =
    injectHelpers(
      localized,
      data,
    );

  /*
   * 3.
   * Fragments dynamiques.
   */
  localized =
    replaceDynamicDisplay(
      localized,
    );

  return localized;
}
