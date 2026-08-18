import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type TranslationMap =
  Record<string, string>;

/* =========================================================
   TITRES DU BUILDER
========================================================= */

const CHALLENGE_TITLES: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Le défi principal de votre mois":
      "The main challenge of your month",
    "Une période de transformation intérieure":
      "A period of inner transformation",
    "Les obstacles deviennent des apprentissages":
      "Obstacles become lessons",
    "Un mois pour dépasser vos limites":
      "A month to move beyond your limits",
    "Votre évolution passe par un défi important":
      "Your growth goes through an important challenge",
    "Une occasion de grandir se présente":
      "An opportunity to grow is emerging",
    "Le changement demande de l'adaptation":
      "Change requires adaptation",
    "Chaque défi prépare votre prochaine réussite":
      "Every challenge prepares your next success",
  },
  es: {
    "Le défi principal de votre mois":
      "El principal desafío de su mes",
    "Une période de transformation intérieure":
      "Un período de transformación interior",
    "Les obstacles deviennent des apprentissages":
      "Los obstáculos se convierten en aprendizajes",
    "Un mois pour dépasser vos limites":
      "Un mes para superar sus límites",
    "Votre évolution passe par un défi important":
      "Su evolución pasa por un desafío importante",
    "Une occasion de grandir se présente":
      "Se presenta una oportunidad para crecer",
    "Le changement demande de l'adaptation":
      "El cambio exige adaptación",
    "Chaque défi prépare votre prochaine réussite":
      "Cada desafío prepara su próximo éxito",
  },
  de: {
    "Le défi principal de votre mois":
      "Die wichtigste Herausforderung Ihres Monats",
    "Une période de transformation intérieure":
      "Eine Phase innerer Transformation",
    "Les obstacles deviennent des apprentissages":
      "Hindernisse werden zu Lernerfahrungen",
    "Un mois pour dépasser vos limites":
      "Ein Monat, um Ihre Grenzen zu überwinden",
    "Votre évolution passe par un défi important":
      "Ihre Entwicklung führt über eine wichtige Herausforderung",
    "Une occasion de grandir se présente":
      "Eine Gelegenheit zum Wachstum zeigt sich",
    "Le changement demande de l'adaptation":
      "Veränderung erfordert Anpassung",
    "Chaque défi prépare votre prochaine réussite":
      "Jede Herausforderung bereitet Ihren nächsten Erfolg vor",
  },
  it: {
    "Le défi principal de votre mois":
      "La sfida principale del tuo mese",
    "Une période de transformation intérieure":
      "Un periodo di trasformazione interiore",
    "Les obstacles deviennent des apprentissages":
      "Gli ostacoli diventano insegnamenti",
    "Un mois pour dépasser vos limites":
      "Un mese per superare i tuoi limiti",
    "Votre évolution passe par un défi important":
      "La tua evoluzione passa attraverso una sfida importante",
    "Une occasion de grandir se présente":
      "Si presenta un'opportunità di crescita",
    "Le changement demande de l'adaptation":
      "Il cambiamento richiede adattamento",
    "Chaque défi prépare votre prochaine réussite":
      "Ogni sfida prepara il tuo prossimo successo",
  },
  pt: {
    "Le défi principal de votre mois":
      "O principal desafio do seu mês",
    "Une période de transformation intérieure":
      "Um período de transformação interior",
    "Les obstacles deviennent des apprentissages":
      "Os obstáculos se tornam aprendizados",
    "Un mois pour dépasser vos limites":
      "Um mês para superar seus limites",
    "Votre évolution passe par un défi important":
      "Sua evolução passa por um desafio importante",
    "Une occasion de grandir se présente":
      "Surge uma oportunidade de crescimento",
    "Le changement demande de l'adaptation":
      "A mudança exige adaptação",
    "Chaque défi prépare votre prochaine réussite":
      "Cada desafio prepara seu próximo sucesso",
  },
};

/* =========================================================
   BANQUE DE TEXTES
========================================================= */

const CHALLENGE_TEXTS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Ce mois vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "This month confronts you with a situation that will require more patience, perspective, and discernment. The real challenge will be choosing your response rather than reacting automatically.",
    "Les prochaines semaines pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "The coming weeks may bring forward a difficulty you can no longer avoid. This period invites you to transform tension into an opportunity for growth.",
    "Un défi important pourrait apparaître dans votre quotidien. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "An important challenge may appear in your daily life. It is not there to hold you back, but to show you what requires a new approach.",
    "Ce mois met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "This month highlights a limit, fear, or habit that is slowing your progress. By observing it honestly, you can begin to move beyond it.",
    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "A demanding situation may require more flexibility than expected. Your ability to adapt will become one of your main strengths.",
    "Les prochaines semaines vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "The coming weeks invite you to face a question you may have postponed. A clear decision will bring you greater lightness.",
    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Your main challenge will be maintaining your balance when events do not follow exactly the pace you hoped for.",
    "Ce mois pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "This month may test your confidence, patience, or ability to set boundaries. Every difficulty will nevertheless contain useful information.",
    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "A period of questioning may help you recognize what no longer matches your current needs.",
    "Le mois vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "The month pushes you to break free from a pattern that has become too restrictive. Another way of acting could produce a more satisfying result.",
    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "The main challenge will be avoiding scattering yourself among several competing priorities.",
    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "You may have to choose between preserving a reassuring habit and moving toward a situation better suited to your growth.",
    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "A fear of disappointing others could prevent you from expressing your needs clearly.",
    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "The need to anticipate everything could increase your stress when some elements remain uncertain.",
    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "You may tend to wait for the perfect moment before making a necessary decision.",
    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "A situation may require more patience than you imagined.",
    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "The main obstacle will be not confusing caution with immobility.",
    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "You may feel outside pressure temporarily pulling you away from your own priorities.",
    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "A communication difficulty could complicate a situation that is actually fairly simple.",
    "Le défi sera d’accepter qu’une progression réelle puisse rester discrète pendant plusieurs semaines.":
      "The challenge will be accepting that real progress can remain subtle for several weeks.",
    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "An intense emotion could lead you to interpret a situation more negatively than it really is.",
    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "You may feel an old insecurity in a new situation. Take time to distinguish the past from the present.",
    "Le besoin d’être rassuré pourrait devenir plus fort lorsque les réponses tarderont à arriver.":
      "The need for reassurance could become stronger when answers take time to arrive.",
    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "A disappointment could awaken a fear of not being sufficiently recognized or supported.",
    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "You may absorb the tensions of those around you and confuse them with your own emotions.",
    "Une frustration contenue pourrait apparaître de manière plus directe. Cherchez à comprendre son origine avant de l’exprimer.":
      "Contained frustration may emerge more directly. Try to understand its source before expressing it.",
    "Le mois pourrait accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "The month may heighten your sensitivity to criticism or clumsy remarks.",
    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "You may tend to minimize your needs until they become impossible to ignore.",
    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "An ambiguous situation could create more worry than the facts justify.",
    "Le défi émotionnel sera de ne pas laisser une mauvaise journée définir toute votre perception du mois.":
      "The emotional challenge will be not letting one bad day define your entire perception of the month.",
    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "An additional responsibility may force you to review your organization.",
    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "A delay, change, or lack of precision may require a quick and structured response.",
    "Vous pourriez sous-estimer le temps nécessaire pour terminer une tâche importante.":
      "You may underestimate the time needed to complete an important task.",
    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "An accumulation of small obligations may become heavier than one clearly defined major responsibility.",
    "Le manque de préparation pourrait créer une pression évitable dans la seconde partie du mois.":
      "A lack of preparation could create avoidable pressure in the second half of the month.",
    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "An administrative or material matter may require more attention.",
    "Vous pourriez devoir gérer deux priorités importantes dans une période rapprochée.":
      "You may have to manage two important priorities within a short period.",
    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "A practical problem may keep returning until its real cause is corrected.",
    "Le mois pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "The month may force you to simplify a schedule that has become too full.",
    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un projet plus important.":
      "A poorly estimated expenditure of time or energy could slow down a more important project.",
    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "A relationship may become more demanding if everyone's expectations remain implicit.",
    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "You may hesitate between preserving harmony and expressing a necessary truth.",
    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Someone may interpret your need for distance as a lack of interest.",
    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "An old remark may resurface in a sensitive conversation.",
    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "You may feel responsible for a situation that should actually be shared.",
    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "The need to protect a relationship may lead you to accept a boundary that no longer suits you.",
    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Someone may ask for more availability than you can reasonably offer.",
    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Prolonged silence may create more confusion than an honest discussion.",
    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "The challenge will be not responding to tension by withdrawing completely.",
    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "A difference in pace or priorities may require more compromise.",
    "Cette difficulté vous apprendra à mieux distinguer ce qui dépend réellement de vous.":
      "This difficulty will teach you to better distinguish what truly depends on you.",
    "La situation vous rappellera que poser une limite peut protéger une relation plutôt que la fragiliser.":
      "The situation will remind you that setting a boundary can protect a relationship rather than weaken it.",
    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins.":
      "You may discover that your first reaction is not always the one that best matches your needs.",
    "Ce défi vous aidera à reconnaître une force que vous utilisez encore trop rarement.":
      "This challenge will help you recognize a strength you still use too rarely.",
    "La période vous montrera qu’une réponse simple peut parfois être plus efficace qu’une stratégie compliquée.":
      "This period will show you that a simple response can sometimes be more effective than a complicated strategy.",
    "Vous apprendrez à faire davantage confiance à votre progression, même lorsque les résultats restent incomplets.":
      "You will learn to trust your progress more, even when the results remain incomplete.",
    "Cette expérience pourrait vous aider à abandonner une attente devenue irréaliste.":
      "This experience may help you let go of an expectation that has become unrealistic.",
    "Le défi vous invitera à demander de l’aide plus tôt plutôt qu’à attendre l’épuisement.":
      "The challenge will invite you to ask for help earlier rather than waiting until exhaustion.",
    "Vous comprendrez mieux la différence entre protéger votre paix et éviter une conversation nécessaire.":
      "You will better understand the difference between protecting your peace and avoiding a necessary conversation.",
    "Cette situation pourrait révéler une priorité que vous n’aviez pas encore clairement reconnue.":
      "This situation may reveal a priority you had not yet clearly recognized.",
    "En affrontant cette difficulté avec calme, vous pourriez gagner davantage de confiance dans vos décisions.":
      "By facing this difficulty calmly, you may gain greater confidence in your decisions.",
    "Cette période peut transformer votre manière de réagir aux imprévus et aux changements.":
      "This period can transform the way you respond to unexpected events and changes.",
    "Une ancienne peur pourrait perdre de son influence lorsque vous choisirez une action concrète.":
      "An old fear may lose some of its influence when you choose a concrete action.",
    "Le mois pourrait vous aider à remplacer une habitude défensive par une réponse plus équilibrée.":
      "The month may help you replace a defensive habit with a more balanced response.",
    "Vous pourriez sortir de cette période avec une meilleure compréhension de vos limites et de vos besoins.":
      "You may emerge from this period with a better understanding of your limits and needs.",
    "Une situation inconfortable pourrait devenir le point de départ d’un changement durable.":
      "An uncomfortable situation may become the starting point for lasting change.",
    "Votre capacité à rester centré renforcera votre stabilité dans les prochains mois.":
      "Your ability to stay centered will strengthen your stability in the months ahead.",
    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "This experience may teach you to move forward without needing every guarantee.",
    "Une décision difficile pourrait finalement vous libérer d’une pression persistante.":
      "A difficult decision may ultimately free you from persistent pressure.",
    "Le défi du mois pourrait devenir une étape importante dans votre évolution personnelle.":
      "The challenge of the month may become an important step in your personal growth.",
    "Ne cherchez pas à résoudre tout le problème en une seule fois. Identifiez la prochaine action utile.":
      "Do not try to solve the entire problem at once. Identify the next useful action.",
    "Accordez-vous un délai avant de répondre lorsque vos émotions sont particulièrement fortes.":
      "Give yourself time before responding when your emotions are particularly strong.",
    "Demandez des précisions plutôt que de construire une réponse autour d’une supposition.":
      "Ask for clarification rather than building a response around an assumption.",
    "Protégez votre énergie en distinguant les responsabilités qui vous appartiennent de celles qui appartiennent aux autres.":
      "Protect your energy by distinguishing your responsibilities from those that belong to others.",
    "Ne repoussez pas une décision uniquement parce qu’elle risque de déplaire temporairement.":
      "Do not postpone a decision solely because it may temporarily displease someone.",
    "Revenez aux faits lorsque votre esprit commence à imaginer plusieurs scénarios négatifs.":
      "Return to the facts when your mind starts imagining several negative scenarios.",
    "Acceptez d’ajuster votre plan sans considérer cela comme un abandon.":
      "Accept adjusting your plan without viewing it as giving up.",
    "Choisissez une limite claire et appliquez-la avec constance.":
      "Choose a clear boundary and apply it consistently.",
    "Concentrez-vous sur ce que cette situation peut vous apprendre plutôt que sur ce qu’elle vient perturber.":
      "Focus on what this situation can teach you rather than on what it disrupts.",
    "Faites preuve de patience envers vous-même pendant cette période d’adaptation.":
      "Be patient with yourself during this period of adaptation.",
    "Ce défi pourrait devenir l’un des éléments les plus constructifs du mois si vous l’abordez avec lucidité et patience.":
      "This challenge could become one of the most constructive elements of the month if you approach it with clarity and patience.",
    "Vous terminerez cette période avec davantage de clarté sur ce que vous acceptez, ce que vous refusez et ce que vous souhaitez construire.":
      "You will end this period with greater clarity about what you accept, what you refuse, and what you want to build.",
    "Les prochaines semaines vous aideront à développer une manière plus solide de faire face aux imprévus.":
      "The coming weeks will help you develop a stronger way of dealing with the unexpected.",
    "Une difficulté temporaire pourrait vous conduire vers une décision plus adaptée à votre avenir.":
      "A temporary difficulty could lead you toward a decision better suited to your future.",
    "Ce mois vous rappellera que votre force ne réside pas dans l’absence de difficulté, mais dans votre manière de la traverser.":
      "This month will remind you that your strength lies not in the absence of difficulty, but in the way you move through it.",
    "Vous pourriez découvrir que cette période exigeante vous apporte finalement une forme de libération.":
      "You may discover that this demanding period ultimately brings you a form of liberation.",
    "Votre capacité à rester fidèle à vos besoins vous permettra de transformer une tension en progression.":
      "Your ability to stay true to your needs will allow you to transform tension into progress.",
    "Une meilleure compréhension de vos réactions vous aidera à éviter de répéter certaines situations.":
      "A better understanding of your reactions will help you avoid repeating certain situations.",
    "Ce défi pourrait renforcer votre confiance et votre stabilité pour les mois à venir.":
      "This challenge could strengthen your confidence and stability for the months ahead.",
    "En avançant avec honnêteté et discernement, vous pourrez tirer une leçon durable de cette période.":
      "By moving forward with honesty and discernment, you can draw a lasting lesson from this period.",
  },
  es: {
    "Ce mois vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Este mes le enfrenta a una situación que requerirá más paciencia, perspectiva y discernimiento. El verdadero desafío será elegir su respuesta en lugar de reaccionar automáticamente.",
    "Les prochaines semaines pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "Las próximas semanas podrían hacer surgir una dificultad que ya no podrá evitar. Este período le invita a transformar una tensión en una oportunidad de evolución.",
    "Un défi important pourrait apparaître dans votre quotidien. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Un desafío importante podría aparecer en su vida cotidiana. No estará ahí para frenarle, sino para mostrarle lo que requiere un nuevo enfoque.",
    "Ce mois met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Este mes pone de relieve un límite, un miedo o un hábito que frena su progreso. Al observarlo con honestidad, podrá empezar a superarlo.",
    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Una situación exigente podría requerir más flexibilidad de la prevista. Su capacidad de adaptación se convertirá en una de sus principales fortalezas.",
    "Les prochaines semaines vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "Las próximas semanas le invitan a afrontar una cuestión que quizá haya pospuesto. Una decisión clara le aportará mayor ligereza.",
    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Su principal desafío será mantener el equilibrio cuando los acontecimientos no sigan exactamente el ritmo esperado.",
    "Ce mois pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Este mes podría poner a prueba su confianza, su paciencia o su capacidad para establecer límites. Sin embargo, cada dificultad contendrá información útil.",
    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Un período de cuestionamiento podría ayudarle a reconocer lo que ya no corresponde a sus necesidades actuales.",
    "Le mois vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "El mes le impulsa a salir de un automatismo que se ha vuelto demasiado restrictivo. Otra manera de actuar podría producir un resultado más satisfactorio.",
    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "El principal desafío será no dispersarse entre varias prioridades que compiten entre sí.",
    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Podría tener que elegir entre conservar un hábito tranquilizador y avanzar hacia una situación más adecuada a su evolución.",
    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "El miedo a decepcionar podría impedirle expresar claramente sus necesidades.",
    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "La necesidad de preverlo todo podría aumentar su estrés cuando algunos elementos sigan siendo inciertos.",
    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "Podría tender a esperar el momento perfecto antes de tomar una decisión necesaria.",
    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "Una situación podría exigir más paciencia de la que había imaginado.",
    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "El principal obstáculo será no confundir prudencia con inmovilidad.",
    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "Podría sentir una presión externa que le aleje temporalmente de sus propias prioridades.",
    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "Una dificultad de comunicación podría complicar una situación que, sin embargo, es relativamente sencilla.",
    "Le défi sera d’accepter qu’une progression réelle puisse rester discrète pendant plusieurs semaines.":
      "El desafío será aceptar que un progreso real pueda seguir siendo discreto durante varias semanas.",
    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Una emoción intensa podría llevarle a interpretar una situación de forma más negativa de lo que realmente es.",
    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "Podría sentir una antigua inseguridad en una situación nueva. Tómese el tiempo de distinguir el pasado del presente.",
    "Le besoin d’être rassuré pourrait devenir plus fort lorsque les réponses tarderont à arriver.":
      "La necesidad de sentirse tranquilizado podría aumentar cuando las respuestas tarden en llegar.",
    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Una decepción podría despertar el miedo a no ser suficientemente reconocido o apoyado.",
    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Podría absorber las tensiones de su entorno y confundirlas con sus propias emociones.",
    "Une frustration contenue pourrait apparaître de manière plus directe. Cherchez à comprendre son origine avant de l’exprimer.":
      "Una frustración contenida podría aparecer de manera más directa. Intente comprender su origen antes de expresarla.",
    "Le mois pourrait accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "El mes podría aumentar su sensibilidad ante las críticas o los comentarios torpes.",
    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Podría tender a minimizar sus necesidades hasta que se vuelvan imposibles de ignorar.",
    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Una situación ambigua podría generar más preocupación de la que justifican los hechos.",
    "Le défi émotionnel sera de ne pas laisser une mauvaise journée définir toute votre perception du mois.":
      "El desafío emocional será no dejar que un mal día defina toda su percepción del mes.",
    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Una responsabilidad adicional podría obligarle a revisar su organización.",
    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Un retraso, una modificación o una imprecisión podría exigir una reacción rápida y estructurada.",
    "Vous pourriez sous-estimer le temps nécessaire pour terminer une tâche importante.":
      "Podría subestimar el tiempo necesario para terminar una tarea importante.",
    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "Una acumulación de pequeñas obligaciones podría resultar más pesada que una gran responsabilidad claramente definida.",
    "Le manque de préparation pourrait créer une pression évitable dans la seconde partie du mois.":
      "La falta de preparación podría crear una presión evitable en la segunda parte del mes.",
    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Una cuestión administrativa o material podría requerir más atención.",
    "Vous pourriez devoir gérer deux priorités importantes dans une période rapprochée.":
      "Podría tener que gestionar dos prioridades importantes en un período cercano.",
    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Un problema práctico podría reaparecer hasta que se corrija su verdadera causa.",
    "Le mois pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "El mes podría obligarle a simplificar un programa que se ha vuelto demasiado cargado.",
    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un projet plus important.":
      "Una inversión de tiempo o energía mal calculada podría ralentizar un proyecto más importante.",
    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Una relación podría volverse más exigente si las expectativas de cada persona permanecen implícitas.",
    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Podría dudar entre preservar la armonía y expresar una verdad necesaria.",
    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Una persona podría interpretar su necesidad de distancia como falta de interés.",
    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Un comentario antiguo podría reaparecer en una conversación delicada.",
    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Podría sentirse responsable de una situación que en realidad debería compartirse.",
    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "La necesidad de proteger una relación podría llevarle a aceptar un límite que ya no le conviene.",
    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Una persona podría pedirle más disponibilidad de la que razonablemente puede ofrecer.",
    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Un silencio prolongado podría crear más confusión que una conversación sincera.",
    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "El desafío será no responder a una tensión con un retiro completo.",
    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Una diferencia de ritmo o de prioridades podría requerir más compromisos.",
    "Cette difficulté vous apprendra à mieux distinguer ce qui dépend réellement de vous.":
      "Esta dificultad le enseñará a distinguir mejor lo que realmente depende de usted.",
    "La situation vous rappellera que poser une limite peut protéger une relation plutôt que la fragiliser.":
      "La situación le recordará que establecer un límite puede proteger una relación en lugar de debilitarla.",
    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins.":
      "Quizá descubra que su primera reacción no siempre es la que mejor corresponde a sus necesidades.",
    "Ce défi vous aidera à reconnaître une force que vous utilisez encore trop rarement.":
      "Este desafío le ayudará a reconocer una fortaleza que todavía utiliza demasiado poco.",
    "La période vous montrera qu’une réponse simple peut parfois être plus efficace qu’une stratégie compliquée.":
      "Este período le mostrará que una respuesta sencilla puede ser a veces más eficaz que una estrategia complicada.",
    "Vous apprendrez à faire davantage confiance à votre progression, même lorsque les résultats restent incomplets.":
      "Aprenderá a confiar más en su progreso, incluso cuando los resultados sigan incompletos.",
    "Cette expérience pourrait vous aider à abandonner une attente devenue irréaliste.":
      "Esta experiencia podría ayudarle a abandonar una expectativa que se ha vuelto poco realista.",
    "Le défi vous invitera à demander de l’aide plus tôt plutôt qu’à attendre l’épuisement.":
      "El desafío le invitará a pedir ayuda antes en lugar de esperar al agotamiento.",
    "Vous comprendrez mieux la différence entre protéger votre paix et éviter une conversation nécessaire.":
      "Comprenderá mejor la diferencia entre proteger su paz y evitar una conversación necesaria.",
    "Cette situation pourrait révéler une priorité que vous n’aviez pas encore clairement reconnue.":
      "Esta situación podría revelar una prioridad que aún no había reconocido claramente.",
    "En affrontant cette difficulté avec calme, vous pourriez gagner davantage de confiance dans vos décisions.":
      "Al afrontar esta dificultad con calma, podría ganar más confianza en sus decisiones.",
    "Cette période peut transformer votre manière de réagir aux imprévus et aux changements.":
      "Este período puede transformar su manera de reaccionar ante los imprevistos y los cambios.",
    "Une ancienne peur pourrait perdre de son influence lorsque vous choisirez une action concrète.":
      "Un antiguo miedo podría perder parte de su influencia cuando elija una acción concreta.",
    "Le mois pourrait vous aider à remplacer une habitude défensive par une réponse plus équilibrée.":
      "El mes podría ayudarle a sustituir un hábito defensivo por una respuesta más equilibrada.",
    "Vous pourriez sortir de cette période avec une meilleure compréhension de vos limites et de vos besoins.":
      "Podría salir de este período con una mejor comprensión de sus límites y necesidades.",
    "Une situation inconfortable pourrait devenir le point de départ d’un changement durable.":
      "Una situación incómoda podría convertirse en el punto de partida de un cambio duradero.",
    "Votre capacité à rester centré renforcera votre stabilité dans les prochains mois.":
      "Su capacidad para mantenerse centrado reforzará su estabilidad en los próximos meses.",
    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Esta experiencia podría enseñarle a avanzar sin necesitar todas las garantías.",
    "Une décision difficile pourrait finalement vous libérer d’une pression persistante.":
      "Una decisión difícil podría finalmente liberarle de una presión persistente.",
    "Le défi du mois pourrait devenir une étape importante dans votre évolution personnelle.":
      "El desafío del mes podría convertirse en una etapa importante de su evolución personal.",
    "Ne cherchez pas à résoudre tout le problème en une seule fois. Identifiez la prochaine action utile.":
      "No intente resolver todo el problema de una sola vez. Identifique la próxima acción útil.",
    "Accordez-vous un délai avant de répondre lorsque vos émotions sont particulièrement fortes.":
      "Dése tiempo antes de responder cuando sus emociones sean especialmente intensas.",
    "Demandez des précisions plutôt que de construire une réponse autour d’une supposition.":
      "Pida aclaraciones en lugar de construir una respuesta alrededor de una suposición.",
    "Protégez votre énergie en distinguant les responsabilités qui vous appartiennent de celles qui appartiennent aux autres.":
      "Proteja su energía distinguiendo las responsabilidades que le pertenecen de las que corresponden a los demás.",
    "Ne repoussez pas une décision uniquement parce qu’elle risque de déplaire temporairement.":
      "No posponga una decisión únicamente porque pueda desagradar temporalmente.",
    "Revenez aux faits lorsque votre esprit commence à imaginer plusieurs scénarios négatifs.":
      "Vuelva a los hechos cuando su mente empiece a imaginar varios escenarios negativos.",
    "Acceptez d’ajuster votre plan sans considérer cela comme un abandon.":
      "Acepte ajustar su plan sin considerarlo un abandono.",
    "Choisissez une limite claire et appliquez-la avec constance.":
      "Elija un límite claro y aplíquelo con constancia.",
    "Concentrez-vous sur ce que cette situation peut vous apprendre plutôt que sur ce qu’elle vient perturber.":
      "Concéntrese en lo que esta situación puede enseñarle en lugar de en lo que viene a alterar.",
    "Faites preuve de patience envers vous-même pendant cette période d’adaptation.":
      "Tenga paciencia consigo mismo durante este período de adaptación.",
    "Ce défi pourrait devenir l’un des éléments les plus constructifs du mois si vous l’abordez avec lucidité et patience.":
      "Este desafío podría convertirse en uno de los elementos más constructivos del mes si lo aborda con claridad y paciencia.",
    "Vous terminerez cette période avec davantage de clarté sur ce que vous acceptez, ce que vous refusez et ce que vous souhaitez construire.":
      "Terminará este período con mayor claridad sobre lo que acepta, lo que rechaza y lo que desea construir.",
    "Les prochaines semaines vous aideront à développer une manière plus solide de faire face aux imprévus.":
      "Las próximas semanas le ayudarán a desarrollar una manera más sólida de afrontar los imprevistos.",
    "Une difficulté temporaire pourrait vous conduire vers une décision plus adaptée à votre avenir.":
      "Una dificultad temporal podría llevarle hacia una decisión más adecuada para su futuro.",
    "Ce mois vous rappellera que votre force ne réside pas dans l’absence de difficulté, mais dans votre manière de la traverser.":
      "Este mes le recordará que su fuerza no reside en la ausencia de dificultades, sino en la manera de atravesarlas.",
    "Vous pourriez découvrir que cette période exigeante vous apporte finalement une forme de libération.":
      "Podría descubrir que este período exigente termina aportándole una forma de liberación.",
    "Votre capacité à rester fidèle à vos besoins vous permettra de transformer une tension en progression.":
      "Su capacidad para mantenerse fiel a sus necesidades le permitirá transformar una tensión en progreso.",
    "Une meilleure compréhension de vos réactions vous aidera à éviter de répéter certaines situations.":
      "Una mejor comprensión de sus reacciones le ayudará a evitar repetir ciertas situaciones.",
    "Ce défi pourrait renforcer votre confiance et votre stabilité pour les mois à venir.":
      "Este desafío podría reforzar su confianza y estabilidad para los próximos meses.",
    "En avançant avec honnêteté et discernement, vous pourrez tirer une leçon durable de cette période.":
      "Al avanzar con honestidad y discernimiento, podrá extraer una lección duradera de este período.",
  },
  de: {
    "Ce mois vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Dieser Monat konfrontiert Sie mit einer Situation, die mehr Geduld, Abstand und Urteilsvermögen erfordert. Die eigentliche Herausforderung besteht darin, Ihre Reaktion bewusst zu wählen, statt automatisch zu reagieren.",
    "Les prochaines semaines pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "Die kommenden Wochen könnten eine Schwierigkeit sichtbar machen, der Sie nicht länger ausweichen können. Diese Phase lädt Sie ein, Spannung in eine Chance zur Entwicklung zu verwandeln.",
    "Un défi important pourrait apparaître dans votre quotidien. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Eine wichtige Herausforderung könnte in Ihrem Alltag auftauchen. Sie soll Sie nicht bremsen, sondern Ihnen zeigen, was einen neuen Ansatz braucht.",
    "Ce mois met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Dieser Monat beleuchtet eine Grenze, Angst oder Gewohnheit, die Ihren Fortschritt verlangsamt. Wenn Sie sie ehrlich betrachten, können Sie beginnen, sie zu überwinden.",
    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Eine anspruchsvolle Situation könnte mehr Flexibilität verlangen als erwartet. Ihre Anpassungsfähigkeit wird zu einer Ihrer größten Stärken.",
    "Les prochaines semaines vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "Die kommenden Wochen laden Sie dazu ein, sich einer Frage zu stellen, die Sie vielleicht aufgeschoben haben. Eine klare Entscheidung wird Ihnen mehr Leichtigkeit bringen.",
    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Ihre wichtigste Herausforderung wird darin bestehen, Ihr Gleichgewicht zu bewahren, wenn die Ereignisse nicht genau dem erhofften Tempo folgen.",
    "Ce mois pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Dieser Monat könnte Ihr Vertrauen, Ihre Geduld oder Ihre Fähigkeit, Grenzen zu setzen, auf die Probe stellen. Jede Schwierigkeit enthält jedoch auch eine nützliche Information.",
    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Eine Phase des Hinterfragens könnte Ihnen helfen zu erkennen, was nicht mehr zu Ihren aktuellen Bedürfnissen passt.",
    "Le mois vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "Der Monat drängt Sie dazu, ein zu einschränkend gewordenes Verhaltensmuster zu verlassen. Eine andere Vorgehensweise könnte zu einem befriedigenderen Ergebnis führen.",
    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "Die größte Herausforderung besteht darin, sich nicht zwischen mehreren konkurrierenden Prioritäten zu verzetteln.",
    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Sie könnten zwischen einer beruhigenden Gewohnheit und einer Situation wählen müssen, die besser zu Ihrer Entwicklung passt.",
    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "Die Angst, andere zu enttäuschen, könnte Sie daran hindern, Ihre Bedürfnisse klar auszudrücken.",
    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "Das Bedürfnis, alles vorherzusehen, könnte Ihren Stress erhöhen, wenn manche Dinge unsicher bleiben.",
    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "Sie könnten dazu neigen, auf den perfekten Moment zu warten, bevor Sie eine notwendige Entscheidung treffen.",
    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "Eine Situation könnte mehr Geduld erfordern, als Sie erwartet haben.",
    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "Das größte Hindernis wird darin bestehen, Vorsicht nicht mit Stillstand zu verwechseln.",
    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "Sie könnten äußeren Druck verspüren, der Sie vorübergehend von Ihren eigenen Prioritäten entfernt.",
    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "Eine Kommunikationsschwierigkeit könnte eine eigentlich recht einfache Situation komplizieren.",
    "Le défi sera d’accepter qu’une progression réelle puisse rester discrète pendant plusieurs semaines.":
      "Die Herausforderung besteht darin zu akzeptieren, dass echter Fortschritt mehrere Wochen lang unauffällig bleiben kann.",
    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Eine intensive Emotion könnte Sie dazu bringen, eine Situation negativer zu interpretieren, als sie tatsächlich ist.",
    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "Sie könnten in einer neuen Situation eine alte Unsicherheit spüren. Nehmen Sie sich Zeit, Vergangenheit und Gegenwart zu unterscheiden.",
    "Le besoin d’être rassuré pourrait devenir plus fort lorsque les réponses tarderont à arriver.":
      "Das Bedürfnis nach Bestätigung könnte stärker werden, wenn Antworten länger auf sich warten lassen.",
    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Eine Enttäuschung könnte die Angst wecken, nicht genügend anerkannt oder unterstützt zu werden.",
    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Sie könnten Spannungen Ihres Umfelds aufnehmen und mit Ihren eigenen Emotionen verwechseln.",
    "Une frustration contenue pourrait apparaître de manière plus directe. Cherchez à comprendre son origine avant de l’exprimer.":
      "Zurückgehaltene Frustration könnte sich direkter zeigen. Versuchen Sie, ihren Ursprung zu verstehen, bevor Sie sie ausdrücken.",
    "Le mois pourrait accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "Der Monat könnte Ihre Sensibilität gegenüber Kritik oder ungeschickten Bemerkungen verstärken.",
    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Sie könnten dazu neigen, Ihre Bedürfnisse kleinzureden, bis sie nicht mehr zu ignorieren sind.",
    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Eine unklare Situation könnte mehr Sorge auslösen, als die Fakten rechtfertigen.",
    "Le défi émotionnel sera de ne pas laisser une mauvaise journée définir toute votre perception du mois.":
      "Die emotionale Herausforderung besteht darin, nicht zuzulassen, dass ein schlechter Tag Ihre Wahrnehmung des ganzen Monats bestimmt.",
    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Eine zusätzliche Verantwortung könnte Sie dazu zwingen, Ihre Organisation zu überdenken.",
    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Eine Verzögerung, Änderung oder Ungenauigkeit könnte eine schnelle und strukturierte Reaktion erfordern.",
    "Vous pourriez sous-estimer le temps nécessaire pour terminer une tâche importante.":
      "Sie könnten die Zeit unterschätzen, die für eine wichtige Aufgabe erforderlich ist.",
    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "Viele kleine Verpflichtungen könnten belastender werden als eine klar definierte große Verantwortung.",
    "Le manque de préparation pourrait créer une pression évitable dans la seconde partie du mois.":
      "Mangelnde Vorbereitung könnte in der zweiten Monatshälfte vermeidbaren Druck erzeugen.",
    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Eine administrative oder materielle Angelegenheit könnte mehr Aufmerksamkeit verlangen.",
    "Vous pourriez devoir gérer deux priorités importantes dans une période rapprochée.":
      "Sie könnten zwei wichtige Prioritäten in kurzer Folge bewältigen müssen.",
    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Ein praktisches Problem könnte immer wieder auftreten, solange seine eigentliche Ursache nicht behoben ist.",
    "Le mois pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "Der Monat könnte Sie zwingen, einen zu voll gewordenen Zeitplan zu vereinfachen.",
    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un projet plus important.":
      "Ein falsch eingeschätzter Zeit- oder Energieaufwand könnte ein wichtigeres Projekt verlangsamen.",
    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Eine Beziehung könnte anspruchsvoller werden, wenn die Erwartungen aller unausgesprochen bleiben.",
    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Sie könnten zwischen dem Erhalt der Harmonie und dem Aussprechen einer notwendigen Wahrheit schwanken.",
    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Jemand könnte Ihr Bedürfnis nach Abstand als mangelndes Interesse interpretieren.",
    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Eine alte Bemerkung könnte in einem sensiblen Gespräch wieder auftauchen.",
    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Sie könnten sich für eine Situation verantwortlich fühlen, die eigentlich geteilt werden sollte.",
    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "Das Bedürfnis, eine Beziehung zu schützen, könnte Sie dazu bringen, eine Grenze zu akzeptieren, die nicht mehr zu Ihnen passt.",
    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Jemand könnte mehr Verfügbarkeit verlangen, als Sie vernünftigerweise bieten können.",
    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Längeres Schweigen könnte mehr Verwirrung schaffen als ein ehrliches Gespräch.",
    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "Die Herausforderung besteht darin, auf Spannung nicht mit vollständigem Rückzug zu reagieren.",
    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Unterschiede im Tempo oder bei den Prioritäten könnten mehr Kompromisse erfordern.",
    "Cette difficulté vous apprendra à mieux distinguer ce qui dépend réellement de vous.":
      "Diese Schwierigkeit wird Ihnen helfen, besser zu unterscheiden, was wirklich von Ihnen abhängt.",
    "La situation vous rappellera que poser une limite peut protéger une relation plutôt que la fragiliser.":
      "Die Situation wird Sie daran erinnern, dass eine Grenze eine Beziehung schützen kann, statt sie zu schwächen.",
    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins.":
      "Sie könnten entdecken, dass Ihre erste Reaktion nicht immer am besten zu Ihren Bedürfnissen passt.",
    "Ce défi vous aidera à reconnaître une force que vous utilisez encore trop rarement.":
      "Diese Herausforderung hilft Ihnen, eine Stärke zu erkennen, die Sie bisher zu selten nutzen.",
    "La période vous montrera qu’une réponse simple peut parfois être plus efficace qu’une stratégie compliquée.":
      "Diese Phase zeigt Ihnen, dass eine einfache Antwort manchmal wirksamer sein kann als eine komplizierte Strategie.",
    "Vous apprendrez à faire davantage confiance à votre progression, même lorsque les résultats restent incomplets.":
      "Sie werden lernen, Ihrem Fortschritt mehr zu vertrauen, auch wenn die Ergebnisse noch unvollständig sind.",
    "Cette expérience pourrait vous aider à abandonner une attente devenue irréaliste.":
      "Diese Erfahrung könnte Ihnen helfen, eine unrealistisch gewordene Erwartung loszulassen.",
    "Le défi vous invitera à demander de l’aide plus tôt plutôt qu’à attendre l’épuisement.":
      "Die Herausforderung lädt Sie dazu ein, früher um Hilfe zu bitten, statt bis zur Erschöpfung zu warten.",
    "Vous comprendrez mieux la différence entre protéger votre paix et éviter une conversation nécessaire.":
      "Sie werden den Unterschied zwischen dem Schutz Ihrer inneren Ruhe und dem Vermeiden eines notwendigen Gesprächs besser verstehen.",
    "Cette situation pourrait révéler une priorité que vous n’aviez pas encore clairement reconnue.":
      "Diese Situation könnte eine Priorität sichtbar machen, die Sie bisher noch nicht klar erkannt haben.",
    "En affrontant cette difficulté avec calme, vous pourriez gagner davantage de confiance dans vos décisions.":
      "Wenn Sie dieser Schwierigkeit ruhig begegnen, könnten Sie mehr Vertrauen in Ihre Entscheidungen gewinnen.",
    "Cette période peut transformer votre manière de réagir aux imprévus et aux changements.":
      "Diese Phase kann verändern, wie Sie auf Unerwartetes und Veränderungen reagieren.",
    "Une ancienne peur pourrait perdre de son influence lorsque vous choisirez une action concrète.":
      "Eine alte Angst könnte an Einfluss verlieren, wenn Sie sich für eine konkrete Handlung entscheiden.",
    "Le mois pourrait vous aider à remplacer une habitude défensive par une réponse plus équilibrée.":
      "Der Monat könnte Ihnen helfen, eine defensive Gewohnheit durch eine ausgewogenere Reaktion zu ersetzen.",
    "Vous pourriez sortir de cette période avec une meilleure compréhension de vos limites et de vos besoins.":
      "Sie könnten aus dieser Phase mit einem besseren Verständnis Ihrer Grenzen und Bedürfnisse hervorgehen.",
    "Une situation inconfortable pourrait devenir le point de départ d’un changement durable.":
      "Eine unangenehme Situation könnte zum Ausgangspunkt einer dauerhaften Veränderung werden.",
    "Votre capacité à rester centré renforcera votre stabilité dans les prochains mois.":
      "Ihre Fähigkeit, zentriert zu bleiben, stärkt Ihre Stabilität in den kommenden Monaten.",
    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Diese Erfahrung könnte Ihnen beibringen, voranzugehen, ohne alle Sicherheiten zu benötigen.",
    "Une décision difficile pourrait finalement vous libérer d’une pression persistante.":
      "Eine schwierige Entscheidung könnte Sie schließlich von anhaltendem Druck befreien.",
    "Le défi du mois pourrait devenir une étape importante dans votre évolution personnelle.":
      "Die Herausforderung des Monats könnte zu einem wichtigen Schritt in Ihrer persönlichen Entwicklung werden.",
    "Ne cherchez pas à résoudre tout le problème en une seule fois. Identifiez la prochaine action utile.":
      "Versuchen Sie nicht, das ganze Problem auf einmal zu lösen. Bestimmen Sie den nächsten hilfreichen Schritt.",
    "Accordez-vous un délai avant de répondre lorsque vos émotions sont particulièrement fortes.":
      "Geben Sie sich Zeit, bevor Sie antworten, wenn Ihre Emotionen besonders stark sind.",
    "Demandez des précisions plutôt que de construire une réponse autour d’une supposition.":
      "Bitten Sie um Klarstellung, statt Ihre Reaktion auf einer Vermutung aufzubauen.",
    "Protégez votre énergie en distinguant les responsabilités qui vous appartiennent de celles qui appartiennent aux autres.":
      "Schützen Sie Ihre Energie, indem Sie Ihre eigenen Verantwortlichkeiten von denen anderer unterscheiden.",
    "Ne repoussez pas une décision uniquement parce qu’elle risque de déplaire temporairement.":
      "Verschieben Sie eine Entscheidung nicht nur deshalb, weil sie vorübergehend missfallen könnte.",
    "Revenez aux faits lorsque votre esprit commence à imaginer plusieurs scénarios négatifs.":
      "Kehren Sie zu den Fakten zurück, wenn Ihr Geist beginnt, mehrere negative Szenarien auszumalen.",
    "Acceptez d’ajuster votre plan sans considérer cela comme un abandon.":
      "Akzeptieren Sie eine Anpassung Ihres Plans, ohne sie als Aufgeben zu betrachten.",
    "Choisissez une limite claire et appliquez-la avec constance.":
      "Setzen Sie eine klare Grenze und halten Sie sie konsequent ein.",
    "Concentrez-vous sur ce que cette situation peut vous apprendre plutôt que sur ce qu’elle vient perturber.":
      "Konzentrieren Sie sich darauf, was diese Situation Sie lehren kann, statt darauf, was sie stört.",
    "Faites preuve de patience envers vous-même pendant cette période d’adaptation.":
      "Seien Sie während dieser Anpassungsphase geduldig mit sich selbst.",
    "Ce défi pourrait devenir l’un des éléments les plus constructifs du mois si vous l’abordez avec lucidité et patience.":
      "Diese Herausforderung könnte zu einem der konstruktivsten Elemente des Monats werden, wenn Sie ihr mit Klarheit und Geduld begegnen.",
    "Vous terminerez cette période avec davantage de clarté sur ce que vous acceptez, ce que vous refusez et ce que vous souhaitez construire.":
      "Sie werden diese Phase mit mehr Klarheit darüber beenden, was Sie akzeptieren, ablehnen und aufbauen möchten.",
    "Les prochaines semaines vous aideront à développer une manière plus solide de faire face aux imprévus.":
      "Die kommenden Wochen helfen Ihnen, einen stabileren Umgang mit Unerwartetem zu entwickeln.",
    "Une difficulté temporaire pourrait vous conduire vers une décision plus adaptée à votre avenir.":
      "Eine vorübergehende Schwierigkeit könnte Sie zu einer Entscheidung führen, die besser zu Ihrer Zukunft passt.",
    "Ce mois vous rappellera que votre force ne réside pas dans l’absence de difficulté, mais dans votre manière de la traverser.":
      "Dieser Monat wird Sie daran erinnern, dass Ihre Stärke nicht in der Abwesenheit von Schwierigkeiten liegt, sondern darin, wie Sie mit ihnen umgehen.",
    "Vous pourriez découvrir que cette période exigeante vous apporte finalement une forme de libération.":
      "Sie könnten feststellen, dass diese anspruchsvolle Phase Ihnen letztlich eine Form von Befreiung bringt.",
    "Votre capacité à rester fidèle à vos besoins vous permettra de transformer une tension en progression.":
      "Ihre Fähigkeit, Ihren Bedürfnissen treu zu bleiben, ermöglicht es Ihnen, Spannung in Fortschritt zu verwandeln.",
    "Une meilleure compréhension de vos réactions vous aidera à éviter de répéter certaines situations.":
      "Ein besseres Verständnis Ihrer Reaktionen hilft Ihnen, bestimmte Situationen nicht zu wiederholen.",
    "Ce défi pourrait renforcer votre confiance et votre stabilité pour les mois à venir.":
      "Diese Herausforderung könnte Ihr Vertrauen und Ihre Stabilität für die kommenden Monate stärken.",
    "En avançant avec honnêteté et discernement, vous pourrez tirer une leçon durable de cette période.":
      "Wenn Sie mit Ehrlichkeit und Urteilsvermögen vorangehen, können Sie aus dieser Phase eine nachhaltige Lektion ziehen.",
  },
  it: {
    "Ce mois vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Questo mese ti mette di fronte a una situazione che richiederà più pazienza, distacco e discernimento. La vera sfida sarà scegliere la tua risposta invece di reagire automaticamente.",
    "Les prochaines semaines pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "Le prossime settimane potrebbero far emergere una difficoltà che non potrai più evitare. Questo periodo ti invita a trasformare una tensione in un'opportunità di crescita.",
    "Un défi important pourrait apparaître dans votre quotidien. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Una sfida importante potrebbe comparire nella tua quotidianità. Non sarà lì per frenarti, ma per mostrarti ciò che richiede un nuovo approccio.",
    "Ce mois met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Questo mese mette in luce un limite, una paura o un'abitudine che rallenta i tuoi progressi. Osservandola con onestà, potrai iniziare a superarla.",
    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Una situazione impegnativa potrebbe richiedere più flessibilità del previsto. La tua capacità di adattarti diventerà una delle tue principali risorse.",
    "Les prochaines semaines vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "Le prossime settimane ti invitano ad affrontare una questione che potresti aver rimandato. Una decisione chiara ti darà maggiore leggerezza.",
    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "La tua sfida principale sarà mantenere l'equilibrio quando gli eventi non seguiranno esattamente il ritmo sperato.",
    "Ce mois pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Questo mese potrebbe mettere alla prova la tua fiducia, la pazienza o la capacità di porre limiti. Ogni difficoltà conterrà comunque un'informazione utile.",
    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Un periodo di riflessione potrebbe aiutarti a riconoscere ciò che non corrisponde più ai tuoi bisogni attuali.",
    "Le mois vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "Il mese ti spinge a uscire da un automatismo diventato troppo restrittivo. Un altro modo di agire potrebbe produrre un risultato più soddisfacente.",
    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "La sfida principale sarà evitare di disperderti tra diverse priorità in competizione.",
    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Potresti dover scegliere tra conservare un'abitudine rassicurante e avanzare verso una situazione più adatta alla tua evoluzione.",
    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "La paura di deludere potrebbe impedirti di esprimere chiaramente i tuoi bisogni.",
    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "Il bisogno di prevedere tutto potrebbe aumentare il tuo stress quando alcuni elementi resteranno incerti.",
    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "Potresti tendere ad aspettare il momento perfetto prima di prendere una decisione necessaria.",
    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "Una situazione potrebbe richiedere più pazienza di quanto avevi immaginato.",
    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "L'ostacolo principale sarà non confondere prudenza e immobilità.",
    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "Potresti sentire una pressione esterna che ti allontana temporaneamente dalle tue priorità.",
    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "Una difficoltà di comunicazione potrebbe complicare una situazione in realtà piuttosto semplice.",
    "Le défi sera d’accepter qu’une progression réelle puisse rester discrète pendant plusieurs semaines.":
      "La sfida sarà accettare che un progresso reale possa rimanere discreto per diverse settimane.",
    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Un'emozione intensa potrebbe spingerti a interpretare una situazione in modo più negativo di quanto sia realmente.",
    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "Potresti sentire una vecchia insicurezza in una situazione nuova. Prenditi il tempo di distinguere il passato dal presente.",
    "Le besoin d’être rassuré pourrait devenir plus fort lorsque les réponses tarderont à arriver.":
      "Il bisogno di essere rassicurato potrebbe diventare più forte quando le risposte tardano ad arrivare.",
    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Una delusione potrebbe risvegliare la paura di non essere sufficientemente riconosciuto o sostenuto.",
    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Potresti assorbire le tensioni di chi ti circonda e confonderle con le tue emozioni.",
    "Une frustration contenue pourrait apparaître de manière plus directe. Cherchez à comprendre son origine avant de l’exprimer.":
      "Una frustrazione trattenuta potrebbe emergere in modo più diretto. Cerca di comprenderne l'origine prima di esprimerla.",
    "Le mois pourrait accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "Il mese potrebbe accentuare la tua sensibilità alle critiche o alle osservazioni maldestre.",
    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Potresti tendere a minimizzare i tuoi bisogni finché non diventano impossibili da ignorare.",
    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Una situazione ambigua potrebbe alimentare più preoccupazione di quanto i fatti giustifichino.",
    "Le défi émotionnel sera de ne pas laisser une mauvaise journée définir toute votre perception du mois.":
      "La sfida emotiva sarà non lasciare che una brutta giornata definisca tutta la tua percezione del mese.",
    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Una responsabilità aggiuntiva potrebbe obbligarti a rivedere la tua organizzazione.",
    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Un ritardo, una modifica o un'imprecisione potrebbero richiedere una reazione rapida e strutturata.",
    "Vous pourriez sous-estimer le temps nécessaire pour terminer une tâche importante.":
      "Potresti sottovalutare il tempo necessario per completare un'attività importante.",
    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "Un accumulo di piccoli obblighi potrebbe diventare più pesante di una grande responsabilità chiaramente definita.",
    "Le manque de préparation pourrait créer une pression évitable dans la seconde partie du mois.":
      "La mancanza di preparazione potrebbe creare una pressione evitabile nella seconda parte del mese.",
    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Una questione amministrativa o materiale potrebbe richiedere maggiore attenzione.",
    "Vous pourriez devoir gérer deux priorités importantes dans une période rapprochée.":
      "Potresti dover gestire due priorità importanti a breve distanza l'una dall'altra.",
    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Un problema pratico potrebbe ripresentarsi finché la sua vera causa non verrà corretta.",
    "Le mois pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "Il mese potrebbe obbligarti a semplificare un programma diventato troppo pieno.",
    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un projet plus important.":
      "Una valutazione errata del tempo o dell'energia necessari potrebbe rallentare un progetto più importante.",
    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Una relazione potrebbe diventare più esigente se le aspettative di ciascuno restano implicite.",
    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Potresti esitare tra preservare l'armonia ed esprimere una verità necessaria.",
    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Una persona potrebbe interpretare il tuo bisogno di distanza come mancanza d'interesse.",
    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Una vecchia osservazione potrebbe riaffiorare in una conversazione delicata.",
    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Potresti sentirti responsabile di una situazione che dovrebbe invece essere condivisa.",
    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "Il bisogno di proteggere una relazione potrebbe spingerti ad accettare un limite che non ti conviene più.",
    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Una persona potrebbe chiedere più disponibilità di quanta tu possa ragionevolmente offrire.",
    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Un silenzio prolungato potrebbe creare più confusione di una conversazione sincera.",
    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "La sfida sarà non rispondere a una tensione con un ritiro completo.",
    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Una differenza di ritmo o di priorità potrebbe richiedere più compromessi.",
    "Cette difficulté vous apprendra à mieux distinguer ce qui dépend réellement de vous.":
      "Questa difficoltà ti insegnerà a distinguere meglio ciò che dipende realmente da te.",
    "La situation vous rappellera que poser une limite peut protéger une relation plutôt que la fragiliser.":
      "La situazione ti ricorderà che porre un limite può proteggere una relazione invece di indebolirla.",
    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins.":
      "Potresti scoprire che la tua prima reazione non è sempre quella che corrisponde meglio ai tuoi bisogni.",
    "Ce défi vous aidera à reconnaître une force que vous utilisez encore trop rarement.":
      "Questa sfida ti aiuterà a riconoscere una forza che utilizzi ancora troppo raramente.",
    "La période vous montrera qu’une réponse simple peut parfois être plus efficace qu’une stratégie compliquée.":
      "Questo periodo ti mostrerà che una risposta semplice può talvolta essere più efficace di una strategia complicata.",
    "Vous apprendrez à faire davantage confiance à votre progression, même lorsque les résultats restent incomplets.":
      "Imparerai a fidarti maggiormente dei tuoi progressi, anche quando i risultati restano incompleti.",
    "Cette expérience pourrait vous aider à abandonner une attente devenue irréaliste.":
      "Questa esperienza potrebbe aiutarti ad abbandonare un'aspettativa diventata irrealistica.",
    "Le défi vous invitera à demander de l’aide plus tôt plutôt qu’à attendre l’épuisement.":
      "La sfida ti inviterà a chiedere aiuto prima invece di aspettare l'esaurimento.",
    "Vous comprendrez mieux la différence entre protéger votre paix et éviter une conversation nécessaire.":
      "Comprenderai meglio la differenza tra proteggere la tua pace ed evitare una conversazione necessaria.",
    "Cette situation pourrait révéler une priorité que vous n’aviez pas encore clairement reconnue.":
      "Questa situazione potrebbe rivelare una priorità che non avevi ancora riconosciuto chiaramente.",
    "En affrontant cette difficulté avec calme, vous pourriez gagner davantage de confiance dans vos décisions.":
      "Affrontando questa difficoltà con calma, potresti acquisire maggiore fiducia nelle tue decisioni.",
    "Cette période peut transformer votre manière de réagir aux imprévus et aux changements.":
      "Questo periodo può trasformare il tuo modo di reagire agli imprevisti e ai cambiamenti.",
    "Une ancienne peur pourrait perdre de son influence lorsque vous choisirez une action concrète.":
      "Una vecchia paura potrebbe perdere parte della sua influenza quando sceglierai un'azione concreta.",
    "Le mois pourrait vous aider à remplacer une habitude défensive par une réponse plus équilibrée.":
      "Il mese potrebbe aiutarti a sostituire un'abitudine difensiva con una risposta più equilibrata.",
    "Vous pourriez sortir de cette période avec une meilleure compréhension de vos limites et de vos besoins.":
      "Potresti uscire da questo periodo con una migliore comprensione dei tuoi limiti e bisogni.",
    "Une situation inconfortable pourrait devenir le point de départ d’un changement durable.":
      "Una situazione scomoda potrebbe diventare il punto di partenza di un cambiamento duraturo.",
    "Votre capacité à rester centré renforcera votre stabilité dans les prochains mois.":
      "La tua capacità di restare centrato rafforzerà la tua stabilità nei prossimi mesi.",
    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Questa esperienza potrebbe insegnarti ad avanzare senza aver bisogno di tutte le garanzie.",
    "Une décision difficile pourrait finalement vous libérer d’une pression persistante.":
      "Una decisione difficile potrebbe infine liberarti da una pressione persistente.",
    "Le défi du mois pourrait devenir une étape importante dans votre évolution personnelle.":
      "La sfida del mese potrebbe diventare una tappa importante nella tua crescita personale.",
    "Ne cherchez pas à résoudre tout le problème en une seule fois. Identifiez la prochaine action utile.":
      "Non cercare di risolvere tutto il problema in una volta sola. Individua la prossima azione utile.",
    "Accordez-vous un délai avant de répondre lorsque vos émotions sont particulièrement fortes.":
      "Concediti del tempo prima di rispondere quando le tue emozioni sono particolarmente forti.",
    "Demandez des précisions plutôt que de construire une réponse autour d’une supposition.":
      "Chiedi chiarimenti invece di costruire una risposta basata su un'ipotesi.",
    "Protégez votre énergie en distinguant les responsabilités qui vous appartiennent de celles qui appartiennent aux autres.":
      "Proteggi la tua energia distinguendo le responsabilità che ti appartengono da quelle degli altri.",
    "Ne repoussez pas une décision uniquement parce qu’elle risque de déplaire temporairement.":
      "Non rimandare una decisione solo perché potrebbe dispiacere temporaneamente.",
    "Revenez aux faits lorsque votre esprit commence à imaginer plusieurs scénarios négatifs.":
      "Torna ai fatti quando la mente comincia a immaginare diversi scenari negativi.",
    "Acceptez d’ajuster votre plan sans considérer cela comme un abandon.":
      "Accetta di modificare il tuo piano senza considerarlo una rinuncia.",
    "Choisissez une limite claire et appliquez-la avec constance.":
      "Scegli un limite chiaro e applicalo con costanza.",
    "Concentrez-vous sur ce que cette situation peut vous apprendre plutôt que sur ce qu’elle vient perturber.":
      "Concentrati su ciò che questa situazione può insegnarti invece che su ciò che viene a disturbare.",
    "Faites preuve de patience envers vous-même pendant cette période d’adaptation.":
      "Sii paziente con te stesso durante questo periodo di adattamento.",
    "Ce défi pourrait devenir l’un des éléments les plus constructifs du mois si vous l’abordez avec lucidité et patience.":
      "Questa sfida potrebbe diventare uno degli elementi più costruttivi del mese se la affronterai con lucidità e pazienza.",
    "Vous terminerez cette période avec davantage de clarté sur ce que vous acceptez, ce que vous refusez et ce que vous souhaitez construire.":
      "Concluderai questo periodo con maggiore chiarezza su ciò che accetti, ciò che rifiuti e ciò che desideri costruire.",
    "Les prochaines semaines vous aideront à développer une manière plus solide de faire face aux imprévus.":
      "Le prossime settimane ti aiuteranno a sviluppare un modo più solido di affrontare gli imprevisti.",
    "Une difficulté temporaire pourrait vous conduire vers une décision plus adaptée à votre avenir.":
      "Una difficoltà temporanea potrebbe portarti verso una decisione più adatta al tuo futuro.",
    "Ce mois vous rappellera que votre force ne réside pas dans l’absence de difficulté, mais dans votre manière de la traverser.":
      "Questo mese ti ricorderà che la tua forza non risiede nell'assenza di difficoltà, ma nel modo in cui le attraversi.",
    "Vous pourriez découvrir que cette période exigeante vous apporte finalement une forme de libération.":
      "Potresti scoprire che questo periodo impegnativo ti porta infine una forma di liberazione.",
    "Votre capacité à rester fidèle à vos besoins vous permettra de transformer une tension en progression.":
      "La tua capacità di restare fedele ai tuoi bisogni ti permetterà di trasformare una tensione in progresso.",
    "Une meilleure compréhension de vos réactions vous aidera à éviter de répéter certaines situations.":
      "Una migliore comprensione delle tue reazioni ti aiuterà a evitare di ripetere alcune situazioni.",
    "Ce défi pourrait renforcer votre confiance et votre stabilité pour les mois à venir.":
      "Questa sfida potrebbe rafforzare la tua fiducia e stabilità per i mesi a venire.",
    "En avançant avec honnêteté et discernement, vous pourrez tirer une leçon durable de cette période.":
      "Avanzando con onestà e discernimento, potrai trarre una lezione duratura da questo periodo.",
  },
  pt: {
    "Ce mois vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Este mês coloca você diante de uma situação que exigirá mais paciência, distanciamento e discernimento. O verdadeiro desafio será escolher sua resposta em vez de reagir automaticamente.",
    "Les prochaines semaines pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "As próximas semanas poderão trazer à tona uma dificuldade que você já não poderá contornar. Este período convida você a transformar uma tensão em oportunidade de evolução.",
    "Un défi important pourrait apparaître dans votre quotidien. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Um desafio importante poderá surgir em seu cotidiano. Ele não estará ali para impedir você, mas para mostrar o que exige uma nova abordagem.",
    "Ce mois met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Este mês destaca um limite, medo ou hábito que desacelera seu progresso. Ao observá-lo com honestidade, você poderá começar a superá-lo.",
    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Uma situação exigente poderá pedir mais flexibilidade do que o esperado. Sua capacidade de adaptação se tornará uma de suas principais forças.",
    "Les prochaines semaines vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "As próximas semanas convidam você a enfrentar uma questão que talvez tenha adiado. Uma decisão clara trará mais leveza.",
    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Seu principal desafio será manter o equilíbrio quando os acontecimentos não seguirem exatamente o ritmo esperado.",
    "Ce mois pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Este mês poderá testar sua confiança, paciência ou capacidade de estabelecer limites. Cada dificuldade, porém, conterá uma informação útil.",
    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Um período de questionamento poderá ajudar você a reconhecer o que já não corresponde às suas necessidades atuais.",
    "Le mois vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "O mês incentiva você a sair de um automatismo que se tornou restritivo demais. Outra maneira de agir poderá produzir um resultado mais satisfatório.",
    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "O principal desafio será não se dispersar entre várias prioridades concorrentes.",
    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Você poderá ter de escolher entre preservar um hábito tranquilizador e avançar para uma situação mais adequada à sua evolução.",
    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "O medo de decepcionar poderá impedir você de expressar claramente suas necessidades.",
    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "A necessidade de prever tudo poderá aumentar seu estresse quando alguns elementos permanecerem incertos.",
    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "Você poderá ter a tendência de esperar o momento perfeito antes de tomar uma decisão necessária.",
    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "Uma situação poderá exigir mais paciência do que você imaginava.",
    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "O principal obstáculo será não confundir prudência com imobilidade.",
    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "Você poderá sentir uma pressão externa que o afaste temporariamente de suas próprias prioridades.",
    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "Uma dificuldade de comunicação poderá complicar uma situação que, na verdade, é relativamente simples.",
    "Le défi sera d’accepter qu’une progression réelle puisse rester discrète pendant plusieurs semaines.":
      "O desafio será aceitar que um progresso real possa permanecer discreto durante várias semanas.",
    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Uma emoção intensa poderá levar você a interpretar uma situação de forma mais negativa do que ela realmente é.",
    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "Você poderá sentir uma antiga insegurança em uma situação nova. Reserve tempo para distinguir o passado do presente.",
    "Le besoin d’être rassuré pourrait devenir plus fort lorsque les réponses tarderont à arriver.":
      "A necessidade de tranquilização poderá ficar mais forte quando as respostas demorarem a chegar.",
    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Uma decepção poderá despertar o medo de não ser suficientemente reconhecido ou apoiado.",
    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Você poderá absorver as tensões de quem está ao seu redor e confundi-las com suas próprias emoções.",
    "Une frustration contenue pourrait apparaître de manière plus directe. Cherchez à comprendre son origine avant de l’exprimer.":
      "Uma frustração contida poderá aparecer de forma mais direta. Procure compreender sua origem antes de expressá-la.",
    "Le mois pourrait accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "O mês poderá aumentar sua sensibilidade a críticas ou comentários infelizes.",
    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Você poderá ter a tendência de minimizar suas necessidades até que se tornem impossíveis de ignorar.",
    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Uma situação ambígua poderá gerar mais preocupação do que os fatos justificam.",
    "Le défi émotionnel sera de ne pas laisser une mauvaise journée définir toute votre perception du mois.":
      "O desafio emocional será não deixar que um dia ruim defina toda a sua percepção do mês.",
    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Uma responsabilidade adicional poderá obrigar você a rever sua organização.",
    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Um atraso, uma alteração ou uma imprecisão poderá exigir uma reação rápida e estruturada.",
    "Vous pourriez sous-estimer le temps nécessaire pour terminer une tâche importante.":
      "Você poderá subestimar o tempo necessário para concluir uma tarefa importante.",
    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "Um acúmulo de pequenas obrigações poderá se tornar mais pesado do que uma grande responsabilidade claramente definida.",
    "Le manque de préparation pourrait créer une pression évitable dans la seconde partie du mois.":
      "A falta de preparação poderá criar uma pressão evitável na segunda metade do mês.",
    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Uma questão administrativa ou material poderá exigir mais atenção.",
    "Vous pourriez devoir gérer deux priorités importantes dans une période rapprochée.":
      "Você poderá ter de administrar duas prioridades importantes em um período próximo.",
    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Um problema prático poderá voltar até que sua verdadeira causa seja corrigida.",
    "Le mois pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "O mês poderá obrigar você a simplificar uma agenda que ficou cheia demais.",
    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un projet plus important.":
      "Uma estimativa inadequada de tempo ou energia poderá desacelerar um projeto mais importante.",
    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Um relacionamento poderá se tornar mais exigente se as expectativas de cada pessoa permanecerem implícitas.",
    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Você poderá hesitar entre preservar a harmonia e expressar uma verdade necessária.",
    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Uma pessoa poderá interpretar sua necessidade de distância como falta de interesse.",
    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Um comentário antigo poderá ressurgir em uma conversa delicada.",
    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Você poderá se sentir responsável por uma situação que, na verdade, deveria ser compartilhada.",
    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "A necessidade de proteger um relacionamento poderá levar você a aceitar um limite que já não lhe convém.",
    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Uma pessoa poderá pedir mais disponibilidade do que você pode razoavelmente oferecer.",
    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Um silêncio prolongado poderá criar mais confusão do que uma conversa sincera.",
    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "O desafio será não responder a uma tensão com um afastamento completo.",
    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Uma diferença de ritmo ou de prioridades poderá exigir mais concessões.",
    "Cette difficulté vous apprendra à mieux distinguer ce qui dépend réellement de vous.":
      "Esta dificuldade ensinará você a distinguir melhor o que realmente depende de você.",
    "La situation vous rappellera que poser une limite peut protéger une relation plutôt que la fragiliser.":
      "A situação lembrará que estabelecer um limite pode proteger um relacionamento em vez de enfraquecê-lo.",
    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins.":
      "Você poderá descobrir que sua primeira reação nem sempre é a que melhor corresponde às suas necessidades.",
    "Ce défi vous aidera à reconnaître une force que vous utilisez encore trop rarement.":
      "Este desafio ajudará você a reconhecer uma força que ainda utiliza pouco.",
    "La période vous montrera qu’une réponse simple peut parfois être plus efficace qu’une stratégie compliquée.":
      "Este período mostrará que uma resposta simples pode, às vezes, ser mais eficaz do que uma estratégia complicada.",
    "Vous apprendrez à faire davantage confiance à votre progression, même lorsque les résultats restent incomplets.":
      "Você aprenderá a confiar mais em seu progresso, mesmo quando os resultados ainda estiverem incompletos.",
    "Cette expérience pourrait vous aider à abandonner une attente devenue irréaliste.":
      "Esta experiência poderá ajudar você a abandonar uma expectativa que se tornou irrealista.",
    "Le défi vous invitera à demander de l’aide plus tôt plutôt qu’à attendre l’épuisement.":
      "O desafio convidará você a pedir ajuda mais cedo, em vez de esperar até a exaustão.",
    "Vous comprendrez mieux la différence entre protéger votre paix et éviter une conversation nécessaire.":
      "Você compreenderá melhor a diferença entre proteger sua paz e evitar uma conversa necessária.",
    "Cette situation pourrait révéler une priorité que vous n’aviez pas encore clairement reconnue.":
      "Esta situação poderá revelar uma prioridade que você ainda não havia reconhecido claramente.",
    "En affrontant cette difficulté avec calme, vous pourriez gagner davantage de confiance dans vos décisions.":
      "Ao enfrentar esta dificuldade com calma, você poderá ganhar mais confiança em suas decisões.",
    "Cette période peut transformer votre manière de réagir aux imprévus et aux changements.":
      "Este período pode transformar sua maneira de reagir a imprevistos e mudanças.",
    "Une ancienne peur pourrait perdre de son influence lorsque vous choisirez une action concrète.":
      "Um medo antigo poderá perder parte de sua influência quando você escolher uma ação concreta.",
    "Le mois pourrait vous aider à remplacer une habitude défensive par une réponse plus équilibrée.":
      "O mês poderá ajudar você a substituir um hábito defensivo por uma resposta mais equilibrada.",
    "Vous pourriez sortir de cette période avec une meilleure compréhension de vos limites et de vos besoins.":
      "Você poderá sair deste período com uma compreensão melhor de seus limites e necessidades.",
    "Une situation inconfortable pourrait devenir le point de départ d’un changement durable.":
      "Uma situação desconfortável poderá se tornar o ponto de partida de uma mudança duradoura.",
    "Votre capacité à rester centré renforcera votre stabilité dans les prochains mois.":
      "Sua capacidade de permanecer centrado fortalecerá sua estabilidade nos próximos meses.",
    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Esta experiência poderá ensinar você a avançar sem precisar de todas as garantias.",
    "Une décision difficile pourrait finalement vous libérer d’une pression persistante.":
      "Uma decisão difícil poderá finalmente libertar você de uma pressão persistente.",
    "Le défi du mois pourrait devenir une étape importante dans votre évolution personnelle.":
      "O desafio do mês poderá se tornar uma etapa importante em sua evolução pessoal.",
    "Ne cherchez pas à résoudre tout le problème en une seule fois. Identifiez la prochaine action utile.":
      "Não tente resolver todo o problema de uma só vez. Identifique a próxima ação útil.",
    "Accordez-vous un délai avant de répondre lorsque vos émotions sont particulièrement fortes.":
      "Dê a si mesmo um tempo antes de responder quando suas emoções estiverem especialmente fortes.",
    "Demandez des précisions plutôt que de construire une réponse autour d’une supposition.":
      "Peça esclarecimentos em vez de construir uma resposta em torno de uma suposição.",
    "Protégez votre énergie en distinguant les responsabilités qui vous appartiennent de celles qui appartiennent aux autres.":
      "Proteja sua energia distinguindo as responsabilidades que pertencem a você das que pertencem aos outros.",
    "Ne repoussez pas une décision uniquement parce qu’elle risque de déplaire temporairement.":
      "Não adie uma decisão apenas porque ela poderá desagradar temporariamente.",
    "Revenez aux faits lorsque votre esprit commence à imaginer plusieurs scénarios négatifs.":
      "Volte aos fatos quando sua mente começar a imaginar vários cenários negativos.",
    "Acceptez d’ajuster votre plan sans considérer cela comme un abandon.":
      "Aceite ajustar seu plano sem considerar isso uma desistência.",
    "Choisissez une limite claire et appliquez-la avec constance.":
      "Escolha um limite claro e aplique-o com constância.",
    "Concentrez-vous sur ce que cette situation peut vous apprendre plutôt que sur ce qu’elle vient perturber.":
      "Concentre-se no que esta situação pode ensinar a você, em vez de no que ela vem perturbar.",
    "Faites preuve de patience envers vous-même pendant cette période d’adaptation.":
      "Tenha paciência consigo mesmo durante este período de adaptação.",
    "Ce défi pourrait devenir l’un des éléments les plus constructifs du mois si vous l’abordez avec lucidité et patience.":
      "Este desafio poderá se tornar um dos elementos mais construtivos do mês se você o abordar com clareza e paciência.",
    "Vous terminerez cette période avec davantage de clarté sur ce que vous acceptez, ce que vous refusez et ce que vous souhaitez construire.":
      "Você terminará este período com mais clareza sobre o que aceita, o que recusa e o que deseja construir.",
    "Les prochaines semaines vous aideront à développer une manière plus solide de faire face aux imprévus.":
      "As próximas semanas ajudarão você a desenvolver uma maneira mais sólida de lidar com imprevistos.",
    "Une difficulté temporaire pourrait vous conduire vers une décision plus adaptée à votre avenir.":
      "Uma dificuldade temporária poderá conduzir você a uma decisão mais adequada ao seu futuro.",
    "Ce mois vous rappellera que votre force ne réside pas dans l’absence de difficulté, mais dans votre manière de la traverser.":
      "Este mês lembrará que sua força não está na ausência de dificuldades, mas na maneira como você as atravessa.",
    "Vous pourriez découvrir que cette période exigeante vous apporte finalement une forme de libération.":
      "Você poderá descobrir que este período exigente acaba trazendo uma forma de libertação.",
    "Votre capacité à rester fidèle à vos besoins vous permettra de transformer une tension en progression.":
      "Sua capacidade de permanecer fiel às suas necessidades permitirá transformar tensão em progresso.",
    "Une meilleure compréhension de vos réactions vous aidera à éviter de répéter certaines situations.":
      "Uma compreensão melhor de suas reações ajudará você a evitar repetir certas situações.",
    "Ce défi pourrait renforcer votre confiance et votre stabilité pour les mois à venir.":
      "Este desafio poderá fortalecer sua confiança e estabilidade para os próximos meses.",
    "En avançant avec honnêteté et discernement, vous pourrez tirer une leçon durable de cette période.":
      "Ao avançar com honestidade e discernimento, você poderá tirar uma lição duradoura deste período.",
  },
};

/* =========================================================
   REPLACEMENT ENGINE
========================================================= */

function replaceTranslations(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "monthly-challenge.ts",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );

  const replacements: Array<{
    start: number;
    end: number;
    value: string;
  }> = [];

  function visit(node: ts.Node): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      const translated =
        translations[node.text];

      if (
        translated &&
        translated !== node.text
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: JSON.stringify(translated),
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return replacements
    .sort((a, b) => b.start - a.start)
    .reduce(
      (output, replacement) =>
        output.slice(0, replacement.start) +
        replacement.value +
        output.slice(replacement.end),
      source,
    );
}

/* =========================================================
   BUILDER
========================================================= */

export function localizeMonthlyChallengeBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const translations =
    CHALLENGE_TITLES[
      locale as NonFrenchLocale
    ];

  if (!translations) {
    return source;
  }

  return replaceTranslations(
    source,
    translations,
  );
}

/* =========================================================
   TEXT BANK
========================================================= */

export function localizeMonthlyChallengeTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const translations =
    CHALLENGE_TEXTS[
      locale as NonFrenchLocale
    ];

  if (!translations) {
    return source;
  }

  return replaceTranslations(
    source,
    translations,
  );
}
