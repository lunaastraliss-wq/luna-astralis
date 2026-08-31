import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   CHALLENGE TITLES
========================================================= */

const CHALLENGE_TITLES: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
    "Les défis qui feront évoluer votre année":
      "The challenges that will shape your year",

    "Une année de dépassement et de transformation":
      "A year of growth and transformation",

    "Vos principaux défis de l’année":
      "Your main challenges of the year",

    "Des obstacles porteurs d’évolution":
      "Obstacles that lead to growth",

    "Une année pour dépasser vos anciennes limites":
      "A year to move beyond your old limits",

    "Les leçons cachées derrière vos défis":
      "The hidden lessons behind your challenges",

    "Votre force se construit dans l’adaptation":
      "Your strength grows through adaptation",

    "Une année pour transformer les tensions":
      "A year to transform tensions",
  },

  es: {
    "Les défis qui feront évoluer votre année":
      "Los desafíos que harán evolucionar tu año",

    "Une année de dépassement et de transformation":
      "Un año de superación y transformación",

    "Vos principaux défis de l’année":
      "Tus principales desafíos del año",

    "Des obstacles porteurs d’évolution":
      "Obstáculos que impulsan tu evolución",

    "Une année pour dépasser vos anciennes limites":
      "Un año para superar tus antiguos límites",

    "Les leçons cachées derrière vos défis":
      "Las lecciones ocultas detrás de tus desafíos",

    "Votre force se construit dans l’adaptation":
      "Tu fuerza se construye a través de la adaptación",

    "Une année pour transformer les tensions":
      "Un año para transformar las tensiones",
  },

  de: {
    "Les défis qui feront évoluer votre année":
      "Die Herausforderungen, die Ihr Jahr prägen werden",

    "Une année de dépassement et de transformation":
      "Ein Jahr des Wachstums und der Transformation",

    "Vos principaux défis de l’année":
      "Ihre wichtigsten Herausforderungen des Jahres",

    "Des obstacles porteurs d’évolution":
      "Hindernisse, die Entwicklung ermöglichen",

    "Une année pour dépasser vos anciennes limites":
      "Ein Jahr, um alte Grenzen zu überwinden",

    "Les leçons cachées derrière vos défis":
      "Die verborgenen Lektionen hinter Ihren Herausforderungen",

    "Votre force se construit dans l’adaptation":
      "Ihre Stärke wächst durch Anpassungsfähigkeit",

    "Une année pour transformer les tensions":
      "Ein Jahr, um Spannungen zu verwandeln",
  },

  it: {
    "Les défis qui feront évoluer votre année":
      "Le sfide che faranno evolvere il tuo anno",

    "Une année de dépassement et de transformation":
      "Un anno di crescita e trasformazione",

    "Vos principaux défis de l’année":
      "Le tue principali sfide dell’anno",

    "Des obstacles porteurs d’évolution":
      "Ostacoli che favoriscono l’evoluzione",

    "Une année pour dépasser vos anciennes limites":
      "Un anno per superare i tuoi vecchi limiti",

    "Les leçons cachées derrière vos défis":
      "Le lezioni nascoste dietro le tue sfide",

    "Votre force se construit dans l’adaptation":
      "La tua forza cresce attraverso l’adattamento",

    "Une année pour transformer les tensions":
      "Un anno per trasformare le tensioni",
  },

  pt: {
    "Les défis qui feront évoluer votre année":
      "Os desafios que farão seu ano evoluir",

    "Une année de dépassement et de transformation":
      "Um ano de superação e transformação",

    "Vos principaux défis de l’année":
      "Seus principais desafios do ano",

    "Des obstacles porteurs d’évolution":
      "Obstáculos que promovem evolução",

    "Une année pour dépasser vos anciennes limites":
      "Um ano para superar seus antigos limites",

    "Les leçons cachées derrière vos défis":
      "As lições ocultas por trás de seus desafios",

    "Votre force se construit dans l’adaptation":
      "Sua força cresce por meio da adaptação",

    "Une année pour transformer les tensions":
      "Um ano para transformar as tensões",
  },
};

/* =========================================================
   CHALLENGE TEXTS
========================================================= */

const CHALLENGE_TEXTS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* INTRODUCTION */

    "Cette année vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "This year confronts you with a situation that will require greater patience, perspective, and discernment. The real challenge will be to choose your response rather than react automatically.",

    "Les prochains mois pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "The coming months could bring forward a difficulty that you can no longer avoid. This period invites you to transform tension into an opportunity for growth.",

    "Un défi important pourrait apparaître au cours de l’année. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "An important challenge could arise during the year. It will not be there to hold you back, but to show you what requires a new approach.",

    "Cette année met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "This year highlights a limitation, fear, or habit that is slowing your progress. By looking at it honestly, you can begin to move beyond it.",

    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "A demanding situation could require more flexibility than expected. Your ability to adapt will become one of your greatest strengths.",

    "Les prochains mois vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "The coming months invite you to face an issue you may have been postponing. A clear decision will bring you a greater sense of relief.",

    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Your main challenge will be to maintain your balance when events do not unfold at exactly the pace you hoped for.",

    "Cette année pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "This year could test your confidence, patience, or ability to set boundaries. Every difficulty, however, will contain something useful to learn.",

    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "A period of reassessment could help you recognize what no longer corresponds to your current needs.",

    "L’année vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "The year encourages you to move beyond a pattern that has become too restrictive. A different way of acting could produce a more satisfying result.",

    /* MAIN CHALLENGE */

    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "The main challenge will be to avoid spreading yourself too thin across several competing priorities.",

    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "You may have to choose between preserving a reassuring habit and moving toward a situation that better supports your growth.",

    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "A fear of disappointing others could prevent you from expressing your needs clearly.",

    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "The need to anticipate everything could increase your stress when certain elements remain uncertain.",

    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "You may tend to wait for the perfect moment before making a necessary decision.",

    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "A situation could require more patience than you had imagined.",

    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "The main obstacle will be to avoid confusing caution with inaction.",

    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "You could feel external pressure that temporarily pulls you away from your own priorities.",

    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "A communication difficulty could complicate a situation that is actually relatively simple.",

    "Le défi sera d’accepter qu’une progression réelle puisse parfois rester discrète pendant plusieurs mois.":
      "The challenge will be to accept that genuine progress can sometimes remain subtle for several months.",
        /* EMOTIONAL CHALLENGE */

    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "An intense emotion could lead you to interpret a situation more negatively than it actually is.",

    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "You could experience an old insecurity in a new situation. Take the time to distinguish the past from the present.",

    "Le besoin d’être rassuré pourrait devenir plus fort lorsque certaines réponses tarderont à arriver.":
      "The need for reassurance could become stronger when certain answers take longer to arrive.",

    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "A disappointment could awaken a fear of not being sufficiently recognized or supported.",

    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "You could absorb the tensions of those around you and confuse them with your own emotions.",

    "Une frustration contenue pourrait apparaître plus directement. Cherchez à comprendre son origine avant de l’exprimer.":
      "A contained frustration could surface more directly. Try to understand its origin before expressing it.",

    "Certaines périodes pourraient accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "Certain periods could heighten your sensitivity to criticism or poorly worded remarks.",

    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "You may tend to minimize your needs until they become impossible to ignore.",

    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "An ambiguous situation could create more worry than the facts actually justify.",

    "Le défi émotionnel sera de ne pas laisser une période difficile définir toute votre perception de l’année.":
      "The emotional challenge will be not to let a difficult period define your entire perception of the year.",

    /* PRACTICAL CHALLENGE */

    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "An additional responsibility could require you to reconsider your organization.",

    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "A delay, change, or lack of clarity could require a quick and structured response.",

    "Vous pourriez sous-estimer le temps nécessaire pour terminer un projet important.":
      "You could underestimate the time required to complete an important project.",

    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "An accumulation of small obligations could become more burdensome than one clearly defined major responsibility.",

    "Le manque de préparation pourrait créer une pression évitable à certaines périodes de l’année.":
      "A lack of preparation could create avoidable pressure during certain periods of the year.",

    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "An administrative or practical matter could require greater attention.",

    "Vous pourriez devoir gérer plusieurs priorités importantes dans une même période.":
      "You may have to manage several important priorities during the same period.",

    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "A practical problem could keep returning until its underlying cause is addressed.",

    "L’année pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "The year could require you to simplify a schedule that has become too demanding.",

    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un objectif plus important.":
      "A poorly assessed investment of time or energy could slow down a more important goal.",

    /* RELATIONSHIP CHALLENGE */

    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "A relationship could become more demanding if each person's expectations remain unspoken.",

    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "You could hesitate between preserving harmony and expressing a necessary truth.",

    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Someone could interpret your need for distance as a lack of interest.",

    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "An old remark could resurface during a sensitive conversation.",

    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "You could feel responsible for a situation that should actually be shared.",

    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "The need to protect a relationship could lead you to accept a boundary or situation that no longer suits you.",

    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Someone could ask for more of your time and availability than you can reasonably offer.",

    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "A prolonged silence could create more confusion than an honest discussion.",

    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "The challenge will be not to respond to tension by withdrawing completely.",

    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "A difference in pace or priorities could require greater compromise.",
        /* KEY PERIODS */

    "Le début de l’année pourrait mettre en évidence un défi nécessitant une décision plus claire.":
      "The beginning of the year could highlight a challenge requiring a clearer decision.",

    "Le printemps pourrait demander davantage de souplesse face à une situation qui évolue rapidement.":
      "Spring could require greater flexibility in the face of a rapidly changing situation.",

    "Le milieu de l’année pourrait représenter une période importante pour dépasser une ancienne limite.":
      "The middle of the year could represent an important period for moving beyond an old limitation.",

    "L’été pourrait demander davantage de patience dans une situation qui semble progresser lentement.":
      "Summer could require greater patience in a situation that seems to be progressing slowly.",

    "L’automne pourrait mettre en lumière une décision ou une conversation devenue nécessaire.":
      "Autumn could highlight a decision or conversation that has become necessary.",

    "La fin de l’année permettra de mesurer le chemin parcouru face à un défi important.":
      "The end of the year will allow you to recognize how far you have come in facing an important challenge.",

    "Une période de tension pourrait être suivie d’une compréhension beaucoup plus claire de la situation.":
      "A period of tension could be followed by a much clearer understanding of the situation.",

    "Certains défis apparaîtront au moment où vous aurez suffisamment de recul pour les gérer différemment.":
      "Certain challenges will arise when you have enough perspective to handle them differently.",

    "Une période plus calme vous permettra de comprendre la véritable origine d’une difficulté.":
      "A calmer period will allow you to understand the true origin of a difficulty.",

    "Les moments les plus exigeants pourraient finalement devenir les plus instructifs de l’année.":
      "The most demanding moments could ultimately become the most instructive periods of the year.",

    /* HIDDEN LESSON */

    "Ce défi vous apprend à faire confiance à votre capacité d’adaptation.":
      "This challenge teaches you to trust your ability to adapt.",

    "Une difficulté actuelle pourrait vous montrer l’importance de poser des limites plus claires.":
      "A current difficulty could show you the importance of setting clearer boundaries.",

    "Cette situation vous apprend à distinguer ce que vous pouvez contrôler de ce que vous devez accepter.":
      "This situation teaches you to distinguish between what you can control and what you need to accept.",

    "Un obstacle pourrait vous aider à développer une patience qui vous servira longtemps.":
      "An obstacle could help you develop patience that will serve you for a long time.",

    "Cette expérience pourrait renforcer votre confiance dans votre propre jugement.":
      "This experience could strengthen your confidence in your own judgment.",

    "Une tension pourrait révéler un besoin que vous aviez longtemps minimisé.":
      "A tension could reveal a need that you had minimized for a long time.",

    "Ce défi vous invite à remplacer une ancienne réaction par une réponse plus consciente.":
      "This challenge invites you to replace an old reaction with a more conscious response.",

    "Une difficulté pourrait vous apprendre à demander de l’aide au bon moment.":
      "A difficulty could teach you to ask for help at the right time.",

    "Cette situation vous rappelle que la progression n’exige pas toujours de tout comprendre immédiatement.":
      "This situation reminds you that progress does not always require understanding everything immediately.",

    "Le véritable enseignement pourrait être de reconnaître votre capacité à traverser l’incertitude sans perdre votre direction.":
      "The real lesson could be recognizing your ability to move through uncertainty without losing your direction.",

    /* TRANSFORMATION */

    "Une ancienne peur pourrait progressivement perdre son influence sur vos décisions.":
      "An old fear could gradually lose its influence over your decisions.",

    "Vous pourriez apprendre à réagir avec davantage de calme face à une situation autrefois déstabilisante.":
      "You could learn to respond with greater calm to a situation that once destabilized you.",

    "Une difficulté pourrait devenir le point de départ d’une nouvelle manière de fonctionner.":
      "A difficulty could become the starting point for a new way of operating.",

    "Vous développerez une meilleure capacité à reconnaître rapidement ce qui mérite réellement votre énergie.":
      "You will develop a better ability to quickly recognize what truly deserves your energy.",

    "Une situation exigeante pourrait renforcer votre confiance dans votre capacité à prendre des décisions.":
      "A demanding situation could strengthen your confidence in your ability to make decisions.",

    "Vous pourriez devenir beaucoup plus clair dans votre manière d’exprimer vos limites.":
      "You could become much clearer in the way you express your boundaries.",

    "Une période d’incertitude pourrait finalement vous aider à définir une direction plus précise.":
      "A period of uncertainty could ultimately help you define a clearer direction.",

    "Vous apprendrez progressivement à préserver votre énergie face aux situations qui ne dépendent pas entièrement de vous.":
      "You will gradually learn to preserve your energy when facing situations that are not entirely within your control.",

    "Un défi relationnel pourrait transformer votre manière de communiquer vos besoins.":
      "A relationship challenge could transform the way you communicate your needs.",

    "Cette année pourrait vous rendre plus résilient, plus lucide et plus confiant face aux changements.":
      "This year could make you more resilient, more clear-sighted, and more confident when facing change.",
        /* ADVICE */

    "Prenez le temps d’observer une situation avant de décider comment y répondre.":
      "Take the time to observe a situation before deciding how to respond.",

    "Évitez de transformer une difficulté temporaire en conclusion définitive.":
      "Avoid turning a temporary difficulty into a permanent conclusion.",

    "Lorsque la pression augmente, revenez à ce qui dépend réellement de vous.":
      "When pressure increases, return your attention to what is truly within your control.",

    "Posez des limites claires avant que la fatigue ou la frustration ne s’accumulent.":
      "Set clear boundaries before fatigue or frustration begins to build.",

    "Ne cherchez pas à résoudre plusieurs problèmes importants en même temps.":
      "Do not try to solve several important problems at the same time.",

    "Acceptez qu’une adaptation puisse être une preuve de force plutôt qu’un recul.":
      "Accept that adapting can be a sign of strength rather than a step backward.",

    "Lorsque vous doutez, privilégiez les décisions cohérentes avec vos priorités à long terme.":
      "When in doubt, favor decisions that are consistent with your long-term priorities.",

    "Parlez clairement avant qu’une incompréhension ne prenne trop de place.":
      "Communicate clearly before a misunderstanding becomes too significant.",

    "Accordez-vous le droit de modifier une décision lorsque de nouvelles informations apparaissent.":
      "Allow yourself to change a decision when new information becomes available.",

    "Rappelez-vous que les périodes difficiles ne définissent pas votre année entière.":
      "Remember that difficult periods do not define your entire year.",

    /* CONCLUSION */

    "Les défis de cette année pourraient finalement devenir une source importante de confiance et de maturité.":
      "The challenges of this year could ultimately become an important source of confidence and maturity.",

    "Chaque difficulté dépassée renforcera progressivement votre capacité à faire face aux changements futurs.":
      "Each difficulty you overcome will gradually strengthen your ability to face future changes.",

    "Cette année pourrait vous apprendre que certaines limites peuvent être transformées beaucoup plus facilement que vous ne l’imaginiez.":
      "This year could teach you that some limitations can be transformed much more easily than you imagined.",

    "Les périodes exigeantes vous aideront à mieux comprendre vos véritables priorités.":
      "Demanding periods will help you better understand your true priorities.",

    "Vous terminerez probablement l’année avec une vision plus claire de vos forces et de vos limites.":
      "You will probably end the year with a clearer understanding of your strengths and limitations.",

    "Un défi important pourrait finalement devenir l’un des éléments les plus constructifs de votre année.":
      "An important challenge could ultimately become one of the most constructive aspects of your year.",

    "Cette année vous aidera à développer une manière plus calme et plus stratégique de gérer les difficultés.":
      "This year will help you develop a calmer and more strategic way of dealing with difficulties.",

    "Les obstacles rencontrés pourraient renforcer votre confiance dans votre capacité à trouver des solutions.":
      "The obstacles you encounter could strengthen your confidence in your ability to find solutions.",

    "Vous découvrirez probablement que votre capacité d’adaptation est beaucoup plus grande que vous ne le pensiez.":
      "You will probably discover that your ability to adapt is much greater than you thought.",

    "Cette année pourrait transformer plusieurs défis en véritables étapes de croissance personnelle.":
      "This year could transform several challenges into genuine stages of personal growth.",

    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins. La fin de l’année permettra de mesurer les progrès réalisés et les obstacles dépassés.":
      "You may discover that your first reaction is not always the one that best matches your needs. The end of the year will allow you to measure the progress you have made and the obstacles you have overcome.",

    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "This experience could teach you to move forward without needing every guarantee.",
  },

   /* =======================================================
     SPANISH
  ======================================================= */

  es: {
    /* INTRODUCTION */

    "Cette année vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Este año te enfrenta a una situación que requerirá más paciencia, perspectiva y discernimiento. El verdadero desafío será elegir tu respuesta en lugar de reaccionar automáticamente.",

    "Les prochains mois pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "Los próximos meses podrían hacer surgir una dificultad que ya no podrás evitar. Este período te invita a transformar una tensión en una oportunidad de evolución.",

    "Un défi important pourrait apparaître au cours de l’année. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Un desafío importante podría aparecer a lo largo del año. No estará ahí para frenarte, sino para mostrarte aquello que requiere un nuevo enfoque.",

    "Cette année met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Este año pone de relieve un límite, un miedo o un hábito que ralentiza tu progreso. Al observarlo con honestidad, podrás comenzar a superarlo.",

    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Una situación exigente podría requerir más flexibilidad de la prevista. Tu capacidad de adaptación se convertirá en una de tus principales fortalezas.",

    "Les prochains mois vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "Los próximos meses te invitan a afrontar una cuestión que quizás hayas estado posponiendo. Una decisión clara te aportará una mayor sensación de alivio.",

    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Tu principal desafío será mantener el equilibrio cuando los acontecimientos no sigan exactamente el ritmo esperado.",

    "Cette année pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Este año podría poner a prueba tu confianza, tu paciencia o tu capacidad para establecer límites. Sin embargo, cada dificultad contendrá una enseñanza útil.",

    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Un período de reflexión podría ayudarte a reconocer aquello que ya no corresponde a tus necesidades actuales.",

    "L’année vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "El año te impulsa a salir de un patrón automático que se ha vuelto demasiado restrictivo. Otra manera de actuar podría producir un resultado más satisfactorio.",

    /* MAIN CHALLENGE */

    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "El desafío principal consistirá en no dispersarte entre varias prioridades que compiten entre sí.",

    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Podrías tener que elegir entre conservar un hábito que te brinda seguridad y avanzar hacia una situación más adecuada para tu evolución.",

    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "El miedo a decepcionar podría impedirte expresar claramente tus necesidades.",

    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "La necesidad de preverlo todo podría aumentar tu estrés cuando algunos elementos permanezcan inciertos.",

    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "Podrías tener tendencia a esperar el momento perfecto antes de tomar una decisión necesaria.",

    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "Una situación podría exigir más paciencia de la que habías imaginado.",

    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "El principal obstáculo será no confundir la prudencia con la inmovilidad.",

    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "Podrías sentir una presión externa que te aleje temporalmente de tus propias prioridades.",

    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "Una dificultad de comunicación podría complicar una situación que, en realidad, es relativamente sencilla.",

    "Le défi sera d’accepter qu’une progression réelle puisse parfois rester discrète pendant plusieurs mois.":
      "El desafío será aceptar que un progreso real puede permanecer discreto durante varios meses.",

    /* EMOTIONAL CHALLENGE */

    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Una emoción intensa podría llevarte a interpretar una situación de manera más negativa de lo que realmente es.",

    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "Podrías experimentar una antigua inseguridad en una situación nueva. Tómate el tiempo necesario para distinguir el pasado del presente.",

    "Le besoin d’être rassuré pourrait devenir plus fort lorsque certaines réponses tarderont à arriver.":
      "La necesidad de sentirte tranquilizado podría intensificarse cuando algunas respuestas tarden en llegar.",

    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Una decepción podría despertar el miedo a no sentirte suficientemente reconocido o apoyado.",

    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Podrías absorber las tensiones de quienes te rodean y confundirlas con tus propias emociones.",

    "Une frustration contenue pourrait apparaître plus directement. Cherchez à comprendre son origine avant de l’exprimer.":
      "Una frustración contenida podría manifestarse de manera más directa. Intenta comprender su origen antes de expresarla.",

    "Certaines périodes pourraient accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "Algunos períodos podrían aumentar tu sensibilidad ante las críticas o los comentarios poco acertados.",

    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Podrías tender a minimizar tus necesidades hasta que resulte imposible ignorarlas.",

    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Una situación ambigua podría generar más preocupación de la que justifican los hechos.",

    "Le défi émotionnel sera de ne pas laisser une période difficile définir toute votre perception de l’année.":
      "El desafío emocional será no permitir que un período difícil defina toda tu percepción del año.",

    /* PRACTICAL CHALLENGE */

    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Una responsabilidad adicional podría obligarte a revisar tu organización.",

    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Un retraso, una modificación o una falta de precisión podría exigir una reacción rápida y estructurada.",

    "Vous pourriez sous-estimer le temps nécessaire pour terminer un projet important.":
      "Podrías subestimar el tiempo necesario para terminar un proyecto importante.",

    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "La acumulación de pequeñas obligaciones podría resultar más pesada que una gran responsabilidad claramente definida.",

    "Le manque de préparation pourrait créer une pression évitable à certaines périodes de l’année.":
      "La falta de preparación podría generar una presión evitable durante algunos períodos del año.",

    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Una cuestión administrativa o material podría requerir más atención.",

    "Vous pourriez devoir gérer plusieurs priorités importantes dans une même période.":
      "Podrías tener que gestionar varias prioridades importantes durante un mismo período.",

    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Un problema práctico podría repetirse mientras no se corrija su verdadera causa.",

    "L’année pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "El año podría obligarte a simplificar una agenda que se ha vuelto demasiado cargada.",

    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un objectif plus important.":
      "Una inversión de tiempo o energía mal calculada podría retrasar un objetivo más importante.",

    /* RELATIONSHIP CHALLENGE */

    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Una relación podría volverse más exigente si las expectativas de cada persona permanecen implícitas.",

    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Podrías dudar entre preservar la armonía y expresar una verdad necesaria.",

    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Una persona podría interpretar tu necesidad de tomar distancia como una falta de interés.",

    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Un comentario antiguo podría reaparecer durante una conversación delicada.",

    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Podrías sentirte responsable de una situación cuya responsabilidad debería ser compartida.",

    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "La necesidad de proteger una relación podría llevarte a aceptar un límite que ya no te conviene.",

    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Una persona podría pedirte más disponibilidad de la que razonablemente puedes ofrecer.",

    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Un silencio prolongado podría generar más confusión que una conversación sincera.",

    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "El desafío será no responder a una tensión alejándote por completo.",

    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Una diferencia de ritmo o de prioridades podría requerir más compromisos.",

    /* KEY PERIODS */

    "Le début de l’année pourrait mettre en évidence un défi nécessitant une décision plus claire.":
      "El comienzo del año podría poner de relieve un desafío que requiera una decisión más clara.",

    "Le printemps pourrait demander davantage de souplesse face à une situation qui évolue rapidement.":
      "La primavera podría exigir una mayor flexibilidad ante una situación que evoluciona rápidamente.",

    "Le milieu de l’année pourrait représenter une période importante pour dépasser une ancienne limite.":
      "La mitad del año podría representar un período importante para superar un antiguo límite.",

    "L’été pourrait demander davantage de patience dans une situation qui semble progresser lentement.":
      "El verano podría requerir más paciencia ante una situación que parece avanzar lentamente.",

    "L’automne pourrait mettre en lumière une décision ou une conversation devenue nécessaire.":
      "El otoño podría poner de relieve una decisión o una conversación que se ha vuelto necesaria.",

    "La fin de l’année permettra de mesurer le chemin parcouru face à un défi important.":
      "El final del año te permitirá valorar el camino recorrido frente a un desafío importante.",

    "Une période de tension pourrait être suivie d’une compréhension beaucoup plus claire de la situation.":
      "Un período de tensión podría ir seguido de una comprensión mucho más clara de la situación.",

    "Certains défis apparaîtront au moment où vous aurez suffisamment de recul pour les gérer différemment.":
      "Algunos desafíos aparecerán cuando tengas suficiente perspectiva para afrontarlos de otra manera.",

    "Une période plus calme vous permettra de comprendre la véritable origine d’une difficulté.":
      "Un período más tranquilo te permitirá comprender el verdadero origen de una dificultad.",

    "Les moments les plus exigeants pourraient finalement devenir les plus instructifs de l’année.":
      "Los momentos más exigentes podrían convertirse finalmente en los más instructivos del año.",

    /* HIDDEN LESSON */

    "Ce défi vous apprend à faire confiance à votre capacité d’adaptation.":
      "Este desafío te enseña a confiar en tu capacidad de adaptación.",

    "Une difficulté actuelle pourrait vous montrer l’importance de poser des limites plus claires.":
      "Una dificultad actual podría mostrarte la importancia de establecer límites más claros.",

    "Cette situation vous apprend à distinguer ce que vous pouvez contrôler de ce que vous devez accepter.":
      "Esta situación te enseña a distinguir lo que puedes controlar de aquello que debes aceptar.",

    "Un obstacle pourrait vous aider à développer une patience qui vous servira longtemps.":
      "Un obstáculo podría ayudarte a desarrollar una paciencia que te será útil durante mucho tiempo.",

    "Cette expérience pourrait renforcer votre confiance dans votre propre jugement.":
      "Esta experiencia podría reforzar la confianza en tu propio criterio.",

    "Une tension pourrait révéler un besoin que vous aviez longtemps minimisé.":
      "Una tensión podría revelar una necesidad que habías minimizado durante mucho tiempo.",

    "Ce défi vous invite à remplacer une ancienne réaction par une réponse plus consciente.":
      "Este desafío te invita a sustituir una antigua reacción por una respuesta más consciente.",

    "Une difficulté pourrait vous apprendre à demander de l’aide au bon moment.":
      "Una dificultad podría enseñarte a pedir ayuda en el momento adecuado.",

    "Cette situation vous rappelle que la progression n’exige pas toujours de tout comprendre immédiatement.":
      "Esta situación te recuerda que progresar no siempre exige comprenderlo todo de inmediato.",

    "Le véritable enseignement pourrait être de reconnaître votre capacité à traverser l’incertitude sans perdre votre direction.":
      "La verdadera enseñanza podría consistir en reconocer tu capacidad para atravesar la incertidumbre sin perder tu dirección.",

    /* TRANSFORMATION */

    "Une ancienne peur pourrait progressivement perdre son influence sur vos décisions.":
      "Un antiguo miedo podría perder progresivamente su influencia sobre tus decisiones.",

    "Vous pourriez apprendre à réagir avec davantage de calme face à une situation autrefois déstabilisante.":
      "Podrías aprender a reaccionar con mayor calma ante una situación que antes te desestabilizaba.",

    "Une difficulté pourrait devenir le point de départ d’une nouvelle manière de fonctionner.":
      "Una dificultad podría convertirse en el punto de partida de una nueva manera de actuar.",

    "Vous développerez une meilleure capacité à reconnaître rapidement ce qui mérite réellement votre énergie.":
      "Desarrollarás una mayor capacidad para reconocer rápidamente aquello que realmente merece tu energía.",

    "Une situation exigeante pourrait renforcer votre confiance dans votre capacité à prendre des décisions.":
      "Una situación exigente podría reforzar tu confianza en tu capacidad para tomar decisiones.",

    "Vous pourriez devenir beaucoup plus clair dans votre manière d’exprimer vos limites.":
      "Podrías volverte mucho más claro al expresar tus límites.",

    "Une période d’incertitude pourrait finalement vous aider à définir une direction plus précise.":
      "Un período de incertidumbre podría finalmente ayudarte a definir una dirección más precisa.",

    "Vous apprendrez progressivement à préserver votre énergie face aux situations qui ne dépendent pas entièrement de vous.":
      "Aprenderás progresivamente a preservar tu energía ante situaciones que no dependen completamente de ti.",

    "Un défi relationnel pourrait transformer votre manière de communiquer vos besoins.":
      "Un desafío en una relación podría transformar tu manera de comunicar tus necesidades.",

    "Cette année pourrait vous rendre plus résilient, plus lucide et plus confiant face aux changements.":
      "Este año podría hacerte más resiliente, más lúcido y más seguro ante los cambios.",

    /* ADVICE */

    "Prenez le temps d’observer une situation avant de décider comment y répondre.":
      "Tómate el tiempo necesario para observar una situación antes de decidir cómo responder.",

    "Évitez de transformer une difficulté temporaire en conclusion définitive.":
      "Evita convertir una dificultad temporal en una conclusión definitiva.",

    "Lorsque la pression augmente, revenez à ce qui dépend réellement de vous.":
      "Cuando aumente la presión, vuelve a centrarte en aquello que realmente depende de ti.",

    "Posez des limites claires avant que la fatigue ou la frustration ne s’accumulent.":
      "Establece límites claros antes de que se acumulen el cansancio o la frustración.",

    "Ne cherchez pas à résoudre plusieurs problèmes importants en même temps.":
      "No intentes resolver varios problemas importantes al mismo tiempo.",

    "Acceptez qu’une adaptation puisse être une preuve de force plutôt qu’un recul.":
      "Acepta que adaptarte puede ser una muestra de fortaleza y no un retroceso.",

    "Lorsque vous doutez, privilégiez les décisions cohérentes avec vos priorités à long terme.":
      "Cuando tengas dudas, prioriza las decisiones coherentes con tus prioridades a largo plazo.",

    "Parlez clairement avant qu’une incompréhension ne prenne trop de place.":
      "Habla con claridad antes de que un malentendido adquiera demasiada importancia.",

    "Accordez-vous le droit de modifier une décision lorsque de nouvelles informations apparaissent.":
      "Permítete modificar una decisión cuando aparezca nueva información.",

    "Rappelez-vous que les périodes difficiles ne définissent pas votre année entière.":
      "Recuerda que los períodos difíciles no definen todo tu año.",

    /* CONCLUSION */

    "Les défis de cette année pourraient finalement devenir une source importante de confiance et de maturité.":
      "Los desafíos de este año podrían convertirse finalmente en una importante fuente de confianza y madurez.",

    "Chaque difficulté dépassée renforcera progressivement votre capacité à faire face aux changements futurs.":
      "Cada dificultad superada reforzará progresivamente tu capacidad para afrontar futuros cambios.",

    "Cette année pourrait vous apprendre que certaines limites peuvent être transformées beaucoup plus facilement que vous ne l’imaginiez.":
      "Este año podría enseñarte que algunos límites pueden transformarse mucho más fácilmente de lo que imaginabas.",

    "Les périodes exigeantes vous aideront à mieux comprendre vos véritables priorités.":
      "Los períodos exigentes te ayudarán a comprender mejor tus verdaderas prioridades.",

    "Vous terminerez probablement l’année avec une vision plus claire de vos forces et de vos limites.":
      "Probablemente terminarás el año con una visión más clara de tus fortalezas y tus límites.",

    "Un défi important pourrait finalement devenir l’un des éléments les plus constructifs de votre année.":
      "Un desafío importante podría convertirse finalmente en uno de los elementos más constructivos de tu año.",

    "Cette année vous aidera à développer une manière plus calme et plus stratégique de gérer les difficultés.":
      "Este año te ayudará a desarrollar una manera más tranquila y estratégica de afrontar las dificultades.",

    "Les obstacles rencontrés pourraient renforcer votre confiance dans votre capacité à trouver des solutions.":
      "Los obstáculos encontrados podrían reforzar tu confianza en tu capacidad para encontrar soluciones.",

    "Vous découvrirez probablement que votre capacité d’adaptation est beaucoup plus grande que vous ne le pensiez.":
      "Probablemente descubrirás que tu capacidad de adaptación es mucho mayor de lo que pensabas.",

    "Cette année pourrait transformer plusieurs défis en véritables étapes de croissance personnelle.":
      "Este año podría transformar varios desafíos en verdaderas etapas de crecimiento personal.",

    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins. La fin de l’année permettra de mesurer les progrès réalisés et les obstacles dépassés.":
      "Puede que descubras que tu primera reacción no siempre es la que mejor corresponde a tus necesidades. El final del año te permitirá medir los progresos realizados y los obstáculos superados.",

    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Esta experiencia podría enseñarte a avanzar sin necesitar todas las garantías.",
  },

    /* =======================================================
     GERMAN
  ======================================================= */

  de: {
    /* INTRODUCTION */

    "Cette année vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Dieses Jahr konfrontiert Sie mit einer Situation, die mehr Geduld, Abstand und Urteilsvermögen erfordern wird. Die eigentliche Herausforderung besteht darin, Ihre Reaktion bewusst zu wählen, anstatt automatisch zu reagieren.",

    "Les prochains mois pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "Die kommenden Monate könnten eine Schwierigkeit sichtbar machen, der Sie nicht länger ausweichen können. Diese Phase lädt Sie dazu ein, eine Spannung in eine Chance zur Weiterentwicklung zu verwandeln.",

    "Un défi important pourrait apparaître au cours de l’année. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Im Laufe des Jahres könnte eine bedeutende Herausforderung auftreten. Sie soll Sie nicht aufhalten, sondern Ihnen zeigen, wo ein neuer Ansatz erforderlich ist.",

    "Cette année met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Dieses Jahr rückt eine Grenze, eine Angst oder eine Gewohnheit ins Licht, die Ihre Entwicklung verlangsamt. Wenn Sie diese ehrlich betrachten, können Sie beginnen, sie zu überwinden.",

    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Eine anspruchsvolle Situation könnte mehr Flexibilität von Ihnen verlangen als erwartet. Ihre Anpassungsfähigkeit wird zu einer Ihrer größten Stärken werden.",

    "Les prochains mois vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "Die kommenden Monate laden Sie dazu ein, sich einer Frage zu stellen, die Sie möglicherweise aufgeschoben haben. Eine klare Entscheidung wird Ihnen mehr Leichtigkeit bringen.",

    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Ihre größte Herausforderung wird darin bestehen, Ihr Gleichgewicht zu bewahren, wenn sich die Ereignisse nicht genau in dem erhofften Tempo entwickeln.",

    "Cette année pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Dieses Jahr könnte Ihr Vertrauen, Ihre Geduld oder Ihre Fähigkeit, Grenzen zu setzen, auf die Probe stellen. Jede Schwierigkeit wird jedoch eine wertvolle Erkenntnis enthalten.",

    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Eine Phase des Hinterfragens könnte Ihnen helfen zu erkennen, was nicht mehr Ihren aktuellen Bedürfnissen entspricht.",

    "L’année vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "Das Jahr ermutigt Sie dazu, ein automatisches Verhaltensmuster zu verlassen, das zu einschränkend geworden ist. Eine andere Vorgehensweise könnte zu einem zufriedenstellenderen Ergebnis führen.",

    /* MAIN CHALLENGE */

    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "Die größte Herausforderung wird darin bestehen, sich nicht zwischen mehreren konkurrierenden Prioritäten zu verzetteln.",

    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Sie könnten zwischen einer vertrauten, beruhigenden Gewohnheit und einer Situation wählen müssen, die besser zu Ihrer Entwicklung passt.",

    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "Die Angst, andere zu enttäuschen, könnte Sie daran hindern, Ihre Bedürfnisse klar auszudrücken.",

    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "Das Bedürfnis, alles im Voraus planen zu wollen, könnte Ihren Stress erhöhen, wenn bestimmte Faktoren ungewiss bleiben.",

    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "Sie könnten dazu neigen, auf den perfekten Moment zu warten, bevor Sie eine notwendige Entscheidung treffen.",

    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "Eine Situation könnte mehr Geduld erfordern, als Sie erwartet hatten.",

    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "Das größte Hindernis wird darin bestehen, Vorsicht nicht mit Stillstand zu verwechseln.",

    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "Sie könnten äußeren Druck verspüren, der Sie vorübergehend von Ihren eigenen Prioritäten entfernt.",

    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "Kommunikationsprobleme könnten eine eigentlich relativ einfache Situation unnötig erschweren.",

    "Le défi sera d’accepter qu’une progression réelle puisse parfois rester discrète pendant plusieurs mois.":
      "Die Herausforderung wird darin bestehen zu akzeptieren, dass echter Fortschritt manchmal mehrere Monate lang kaum sichtbar sein kann.",

    /* EMOTIONAL CHALLENGE */

    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Eine intensive Emotion könnte dazu führen, dass Sie eine Situation negativer wahrnehmen, als sie tatsächlich ist.",

    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "In einer neuen Situation könnte eine alte Unsicherheit wieder auftauchen. Nehmen Sie sich die Zeit, zwischen Vergangenheit und Gegenwart zu unterscheiden.",

    "Le besoin d’être rassuré pourrait devenir plus fort lorsque certaines réponses tarderont à arriver.":
      "Das Bedürfnis nach Bestätigung könnte stärker werden, wenn bestimmte Antworten länger auf sich warten lassen.",

    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Eine Enttäuschung könnte die Angst wecken, nicht ausreichend anerkannt oder unterstützt zu werden.",

    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Sie könnten die Spannungen Ihres Umfelds aufnehmen und sie mit Ihren eigenen Gefühlen verwechseln.",

    "Une frustration contenue pourrait apparaître plus directement. Cherchez à comprendre son origine avant de l’exprimer.":
      "Eine zurückgehaltene Frustration könnte deutlicher zum Vorschein kommen. Versuchen Sie, ihren Ursprung zu verstehen, bevor Sie sie ausdrücken.",

    "Certaines périodes pourraient accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "In bestimmten Phasen könnten Sie empfindlicher auf Kritik oder ungeschickte Bemerkungen reagieren.",

    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Sie könnten dazu neigen, Ihre Bedürfnisse herunterzuspielen, bis sie sich nicht mehr ignorieren lassen.",

    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Eine unklare Situation könnte mehr Sorgen auslösen, als die tatsächlichen Umstände rechtfertigen.",

    "Le défi émotionnel sera de ne pas laisser une période difficile définir toute votre perception de l’année.":
      "Die emotionale Herausforderung wird darin bestehen, nicht zuzulassen, dass eine schwierige Phase Ihre gesamte Wahrnehmung des Jahres bestimmt.",

    /* PRACTICAL CHALLENGE */

    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Eine zusätzliche Verantwortung könnte Sie dazu zwingen, Ihre Organisation zu überdenken.",

    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Eine Verzögerung, Änderung oder Unklarheit könnte eine schnelle und strukturierte Reaktion erfordern.",

    "Vous pourriez sous-estimer le temps nécessaire pour terminer un projet important.":
      "Sie könnten den Zeitaufwand unterschätzen, der für den Abschluss eines wichtigen Projekts erforderlich ist.",

    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "Die Anhäufung kleiner Verpflichtungen könnte belastender werden als eine große, klar definierte Verantwortung.",

    "Le manque de préparation pourrait créer une pression évitable à certaines périodes de l’année.":
      "Mangelnde Vorbereitung könnte in bestimmten Phasen des Jahres vermeidbaren Druck erzeugen.",

    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Eine administrative oder praktische Angelegenheit könnte mehr Aufmerksamkeit erfordern.",

    "Vous pourriez devoir gérer plusieurs priorités importantes dans une même période.":
      "Sie könnten mehrere wichtige Prioritäten gleichzeitig bewältigen müssen.",

    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Ein praktisches Problem könnte immer wieder auftreten, solange seine eigentliche Ursache nicht behoben wird.",

    "L’année pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "Das Jahr könnte Sie dazu zwingen, einen zu voll gewordenen Zeitplan zu vereinfachen.",

    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un objectif plus important.":
      "Ein falsch eingeschätzter Aufwand an Zeit oder Energie könnte ein wichtigeres Ziel verlangsamen.",

    /* RELATIONSHIP CHALLENGE */

    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Eine Beziehung könnte anspruchsvoller werden, wenn die Erwartungen beider Seiten unausgesprochen bleiben.",

    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Sie könnten zwischen dem Wunsch, die Harmonie zu bewahren, und dem Bedürfnis, eine notwendige Wahrheit auszusprechen, schwanken.",

    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Jemand könnte Ihr Bedürfnis nach Abstand als mangelndes Interesse interpretieren.",

    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Eine frühere Bemerkung könnte in einem sensiblen Gespräch erneut zur Sprache kommen.",

    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Sie könnten sich für eine Situation verantwortlich fühlen, deren Verantwortung eigentlich geteilt werden sollte.",

    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "Das Bedürfnis, eine Beziehung zu schützen, könnte Sie dazu bringen, eine Grenze zu akzeptieren, die für Sie nicht mehr passend ist.",

    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Jemand könnte mehr Zeit und Verfügbarkeit von Ihnen verlangen, als Sie vernünftigerweise anbieten können.",

    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Längeres Schweigen könnte mehr Verwirrung verursachen als ein ehrliches Gespräch.",

    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "Die Herausforderung wird darin bestehen, auf Spannungen nicht mit vollständigem Rückzug zu reagieren.",

    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Unterschiedliche Rhythmen oder Prioritäten könnten mehr Kompromissbereitschaft erfordern.",

    /* KEY PERIODS */

    "Le début de l’année pourrait mettre en évidence un défi nécessitant une décision plus claire.":
      "Zu Beginn des Jahres könnte eine Herausforderung sichtbar werden, die eine klarere Entscheidung erfordert.",

    "Le printemps pourrait demander davantage de souplesse face à une situation qui évolue rapidement.":
      "Der Frühling könnte angesichts einer sich schnell entwickelnden Situation mehr Flexibilität verlangen.",

    "Le milieu de l’année pourrait représenter une période importante pour dépasser une ancienne limite.":
      "Die Jahresmitte könnte eine wichtige Phase darstellen, um eine alte Grenze zu überwinden.",

    "L’été pourrait demander davantage de patience dans une situation qui semble progresser lentement.":
      "Der Sommer könnte in einer Situation, die nur langsam voranzukommen scheint, mehr Geduld erfordern.",

    "L’automne pourrait mettre en lumière une décision ou une conversation devenue nécessaire.":
      "Der Herbst könnte eine Entscheidung oder ein Gespräch in den Vordergrund rücken, das inzwischen notwendig geworden ist.",

    "La fin de l’année permettra de mesurer le chemin parcouru face à un défi important.":
      "Am Jahresende werden Sie erkennen können, wie weit Sie bei der Bewältigung einer wichtigen Herausforderung gekommen sind.",

    "Une période de tension pourrait être suivie d’une compréhension beaucoup plus claire de la situation.":
      "Auf eine Phase der Spannung könnte ein wesentlich klareres Verständnis der Situation folgen.",

    "Certains défis apparaîtront au moment où vous aurez suffisamment de recul pour les gérer différemment.":
      "Einige Herausforderungen werden zu einem Zeitpunkt auftreten, an dem Sie genügend Abstand gewonnen haben, um anders mit ihnen umzugehen.",

    "Une période plus calme vous permettra de comprendre la véritable origine d’une difficulté.":
      "Eine ruhigere Phase wird Ihnen ermöglichen, den tatsächlichen Ursprung einer Schwierigkeit zu verstehen.",

    "Les moments les plus exigeants pourraient finalement devenir les plus instructifs de l’année.":
      "Die anspruchsvollsten Momente könnten sich letztlich als die lehrreichsten des Jahres erweisen.",

    /* HIDDEN LESSON */

    "Ce défi vous apprend à faire confiance à votre capacité d’adaptation.":
      "Diese Herausforderung lehrt Sie, Ihrer Anpassungsfähigkeit zu vertrauen.",

    "Une difficulté actuelle pourrait vous montrer l’importance de poser des limites plus claires.":
      "Eine aktuelle Schwierigkeit könnte Ihnen zeigen, wie wichtig es ist, klarere Grenzen zu setzen.",

    "Cette situation vous apprend à distinguer ce que vous pouvez contrôler de ce que vous devez accepter.":
      "Diese Situation lehrt Sie, zwischen dem zu unterscheiden, was Sie kontrollieren können, und dem, was Sie akzeptieren müssen.",

    "Un obstacle pourrait vous aider à développer une patience qui vous servira longtemps.":
      "Ein Hindernis könnte Ihnen helfen, eine Geduld zu entwickeln, von der Sie noch lange profitieren werden.",

    "Cette expérience pourrait renforcer votre confiance dans votre propre jugement.":
      "Diese Erfahrung könnte Ihr Vertrauen in Ihr eigenes Urteilsvermögen stärken.",

    "Une tension pourrait révéler un besoin que vous aviez longtemps minimisé.":
      "Eine Spannung könnte ein Bedürfnis sichtbar machen, das Sie lange unterschätzt haben.",

    "Ce défi vous invite à remplacer une ancienne réaction par une réponse plus consciente.":
      "Diese Herausforderung lädt Sie dazu ein, eine alte Reaktion durch eine bewusstere Antwort zu ersetzen.",

    "Une difficulté pourrait vous apprendre à demander de l’aide au bon moment.":
      "Eine Schwierigkeit könnte Sie lehren, im richtigen Moment um Hilfe zu bitten.",

    "Cette situation vous rappelle que la progression n’exige pas toujours de tout comprendre immédiatement.":
      "Diese Situation erinnert Sie daran, dass Fortschritt nicht immer voraussetzt, alles sofort zu verstehen.",

    "Le véritable enseignement pourrait être de reconnaître votre capacité à traverser l’incertitude sans perdre votre direction.":
      "Die eigentliche Lektion könnte darin bestehen, Ihre Fähigkeit zu erkennen, Unsicherheit zu durchleben, ohne Ihre Richtung zu verlieren.",

    /* TRANSFORMATION */

    "Une ancienne peur pourrait progressivement perdre son influence sur vos décisions.":
      "Eine alte Angst könnte nach und nach ihren Einfluss auf Ihre Entscheidungen verlieren.",

    "Vous pourriez apprendre à réagir avec davantage de calme face à une situation autrefois déstabilisante.":
      "Sie könnten lernen, auf eine Situation, die Sie früher aus dem Gleichgewicht gebracht hat, ruhiger zu reagieren.",

    "Une difficulté pourrait devenir le point de départ d’une nouvelle manière de fonctionner.":
      "Eine Schwierigkeit könnte zum Ausgangspunkt für eine neue Art des Handelns werden.",

    "Vous développerez une meilleure capacité à reconnaître rapidement ce qui mérite réellement votre énergie.":
      "Sie werden besser darin werden, schnell zu erkennen, was Ihre Energie wirklich verdient.",

    "Une situation exigeante pourrait renforcer votre confiance dans votre capacité à prendre des décisions.":
      "Eine anspruchsvolle Situation könnte Ihr Vertrauen in Ihre Entscheidungsfähigkeit stärken.",

    "Vous pourriez devenir beaucoup plus clair dans votre manière d’exprimer vos limites.":
      "Sie könnten wesentlich klarer darin werden, Ihre Grenzen auszudrücken.",

    "Une période d’incertitude pourrait finalement vous aider à définir une direction plus précise.":
      "Eine Phase der Unsicherheit könnte Ihnen letztlich helfen, eine klarere Richtung festzulegen.",

    "Vous apprendrez progressivement à préserver votre énergie face aux situations qui ne dépendent pas entièrement de vous.":
      "Sie werden nach und nach lernen, Ihre Energie in Situationen zu bewahren, die nicht vollständig von Ihnen abhängen.",

    "Un défi relationnel pourrait transformer votre manière de communiquer vos besoins.":
      "Eine Herausforderung in einer Beziehung könnte die Art verändern, wie Sie Ihre Bedürfnisse kommunizieren.",

    "Cette année pourrait vous rendre plus résilient, plus lucide et plus confiant face aux changements.":
      "Dieses Jahr könnte Sie widerstandsfähiger, klarer und selbstbewusster im Umgang mit Veränderungen machen.",

    /* ADVICE */

    "Prenez le temps d’observer une situation avant de décider comment y répondre.":
      "Nehmen Sie sich die Zeit, eine Situation zu beobachten, bevor Sie entscheiden, wie Sie darauf reagieren.",

    "Évitez de transformer une difficulté temporaire en conclusion définitive.":
      "Vermeiden Sie es, aus einer vorübergehenden Schwierigkeit eine endgültige Schlussfolgerung zu ziehen.",

    "Lorsque la pression augmente, revenez à ce qui dépend réellement de vous.":
      "Wenn der Druck steigt, konzentrieren Sie sich wieder auf das, was tatsächlich in Ihrer Hand liegt.",

    "Posez des limites claires avant que la fatigue ou la frustration ne s’accumulent.":
      "Setzen Sie klare Grenzen, bevor sich Erschöpfung oder Frustration ansammeln.",

    "Ne cherchez pas à résoudre plusieurs problèmes importants en même temps.":
      "Versuchen Sie nicht, mehrere wichtige Probleme gleichzeitig zu lösen.",

    "Acceptez qu’une adaptation puisse être une preuve de force plutôt qu’un recul.":
      "Akzeptieren Sie, dass Anpassung ein Zeichen von Stärke sein kann und keinen Rückschritt bedeuten muss.",

    "Lorsque vous doutez, privilégiez les décisions cohérentes avec vos priorités à long terme.":
      "Wenn Sie Zweifel haben, bevorzugen Sie Entscheidungen, die mit Ihren langfristigen Prioritäten übereinstimmen.",

    "Parlez clairement avant qu’une incompréhension ne prenne trop de place.":
      "Sprechen Sie offen und klar, bevor ein Missverständnis zu viel Raum einnimmt.",

    "Accordez-vous le droit de modifier une décision lorsque de nouvelles informations apparaissent.":
      "Erlauben Sie sich, eine Entscheidung zu ändern, wenn neue Informationen verfügbar werden.",

    "Rappelez-vous que les périodes difficiles ne définissent pas votre année entière.":
      "Denken Sie daran, dass schwierige Phasen nicht Ihr gesamtes Jahr bestimmen.",

    /* CONCLUSION */

    "Les défis de cette année pourraient finalement devenir une source importante de confiance et de maturité.":
      "Die Herausforderungen dieses Jahres könnten letztlich zu einer wichtigen Quelle von Selbstvertrauen und Reife werden.",

    "Chaque difficulté dépassée renforcera progressivement votre capacité à faire face aux changements futurs.":
      "Jede überwundene Schwierigkeit wird nach und nach Ihre Fähigkeit stärken, zukünftigen Veränderungen zu begegnen.",

    "Cette année pourrait vous apprendre que certaines limites peuvent être transformées beaucoup plus facilement que vous ne l’imaginiez.":
      "Dieses Jahr könnte Ihnen zeigen, dass sich manche Grenzen wesentlich leichter verändern lassen, als Sie gedacht haben.",

    "Les périodes exigeantes vous aideront à mieux comprendre vos véritables priorités.":
      "Anspruchsvolle Phasen werden Ihnen helfen, Ihre wirklichen Prioritäten besser zu verstehen.",

    "Vous terminerez probablement l’année avec une vision plus claire de vos forces et de vos limites.":
      "Sie werden das Jahr wahrscheinlich mit einem klareren Verständnis Ihrer Stärken und Grenzen beenden.",

    "Un défi important pourrait finalement devenir l’un des éléments les plus constructifs de votre année.":
      "Eine bedeutende Herausforderung könnte sich letztlich als einer der konstruktivsten Aspekte Ihres Jahres erweisen.",

    "Cette année vous aidera à développer une manière plus calme et plus stratégique de gérer les difficultés.":
      "Dieses Jahr wird Ihnen helfen, einen ruhigeren und strategischeren Umgang mit Schwierigkeiten zu entwickeln.",

    "Les obstacles rencontrés pourraient renforcer votre confiance dans votre capacité à trouver des solutions.":
      "Die Hindernisse, denen Sie begegnen, könnten Ihr Vertrauen in Ihre Fähigkeit stärken, Lösungen zu finden.",

    "Vous découvrirez probablement que votre capacité d’adaptation est beaucoup plus grande que vous ne le pensiez.":
      "Sie werden wahrscheinlich feststellen, dass Ihre Anpassungsfähigkeit wesentlich größer ist, als Sie dachten.",

    "Cette année pourrait transformer plusieurs défis en véritables étapes de croissance personnelle.":
      "Dieses Jahr könnte mehrere Herausforderungen in echte Etappen Ihrer persönlichen Entwicklung verwandeln.",

    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins. La fin de l’année permettra de mesurer les progrès réalisés et les obstacles dépassés.":
      "Vielleicht erkennen Sie, dass Ihre erste Reaktion nicht immer diejenige ist, die Ihren Bedürfnissen am besten entspricht. Am Ende des Jahres können Sie die erzielten Fortschritte und die überwundenen Hindernisse erkennen.",

    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Diese Erfahrung könnte Sie lehren, voranzugehen, ohne für alles eine Garantie zu benötigen.",
  },

   /* =======================================================
     ITALIAN
  ======================================================= */

  it: {
    /* INTRODUCTION */

    "Cette année vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Quest'anno ti mette di fronte a una situazione che richiederà maggiore pazienza, capacità di prendere le distanze e discernimento. La vera sfida sarà scegliere consapevolmente la tua risposta invece di reagire automaticamente.",

    "Les prochains mois pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "I prossimi mesi potrebbero far emergere una difficoltà che non potrai più evitare. Questo periodo ti invita a trasformare una tensione in un'opportunità di crescita.",

    "Un défi important pourrait apparaître au cours de l’année. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Nel corso dell'anno potrebbe presentarsi una sfida importante. Non sarà lì per frenarti, ma per mostrarti ciò che richiede un nuovo approccio.",

    "Cette année met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Quest'anno mette in luce un limite, una paura o un'abitudine che rallenta il tuo progresso. Osservandola con onestà, potrai iniziare a superarla.",

    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Una situazione impegnativa potrebbe richiederti maggiore flessibilità del previsto. La tua capacità di adattamento diventerà uno dei tuoi principali punti di forza.",

    "Les prochains mois vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "I prossimi mesi ti invitano ad affrontare una questione che forse hai rimandato. Una decisione chiara ti porterà una maggiore sensazione di leggerezza.",

    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "La tua sfida principale sarà mantenere il tuo equilibrio quando gli eventi non seguiranno esattamente il ritmo sperato.",

    "Cette année pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Quest'anno potrebbe mettere alla prova la tua fiducia, la tua pazienza o la tua capacità di stabilire dei limiti. Ogni difficoltà, tuttavia, conterrà un insegnamento utile.",

    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Un periodo di riflessione potrebbe aiutarti a riconoscere ciò che non corrisponde più alle tue esigenze attuali.",

    "L’année vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "L'anno ti spinge ad abbandonare un automatismo diventato troppo restrittivo. Un altro modo di agire potrebbe produrre un risultato più soddisfacente.",

    /* MAIN CHALLENGE */

    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "La sfida principale consisterà nel non disperdere le tue energie tra diverse priorità in competizione tra loro.",

    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Potresti dover scegliere tra mantenere un'abitudine rassicurante e avanzare verso una situazione più adatta alla tua evoluzione.",

    "Une peur de décevoir pourrait vous empêcher d’exprimer clairement vos besoins.":
      "La paura di deludere potrebbe impedirti di esprimere chiaramente le tue esigenze.",

    "Le besoin de tout prévoir pourrait augmenter votre stress lorsque certains éléments resteront incertains.":
      "Il bisogno di prevedere tutto potrebbe aumentare il tuo stress quando alcuni elementi rimarranno incerti.",

    "Vous pourriez avoir tendance à attendre le moment parfait avant de prendre une décision nécessaire.":
      "Potresti avere la tendenza ad aspettare il momento perfetto prima di prendere una decisione necessaria.",

    "Une situation pourrait exiger davantage de patience que vous ne l’aviez imaginé.":
      "Una situazione potrebbe richiedere più pazienza di quanto avessi immaginato.",

    "Le principal obstacle sera de ne pas confondre prudence et immobilité.":
      "L'ostacolo principale sarà non confondere la prudenza con l'immobilità.",

    "Vous pourriez ressentir une pression extérieure qui vous éloigne temporairement de vos propres priorités.":
      "Potresti sentire una pressione esterna che ti allontana temporaneamente dalle tue priorità.",

    "Une difficulté de communication pourrait compliquer une situation pourtant relativement simple.":
      "Una difficoltà di comunicazione potrebbe complicare una situazione che in realtà è relativamente semplice.",

    "Le défi sera d’accepter qu’une progression réelle puisse parfois rester discrète pendant plusieurs mois.":
      "La sfida sarà accettare che un progresso reale possa talvolta rimanere poco visibile per diversi mesi.",

    /* EMOTIONAL CHALLENGE */

    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Un'emozione intensa potrebbe portarti a interpretare una situazione in modo più negativo di quanto non sia realmente.",

    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "Potresti avvertire una vecchia insicurezza in una situazione nuova. Prenditi il tempo necessario per distinguere il passato dal presente.",

    "Le besoin d’être rassuré pourrait devenir plus fort lorsque certaines réponses tarderont à arriver.":
      "Il bisogno di rassicurazione potrebbe diventare più forte quando alcune risposte tarderanno ad arrivare.",

    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Una delusione potrebbe risvegliare la paura di non essere sufficientemente riconosciuto o sostenuto.",

    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Potresti assorbire le tensioni delle persone che ti circondano e confonderle con le tue emozioni.",

    "Une frustration contenue pourrait apparaître plus directement. Cherchez à comprendre son origine avant de l’exprimer.":
      "Una frustrazione trattenuta potrebbe emergere in modo più diretto. Cerca di comprenderne l'origine prima di esprimerla.",

    "Certaines périodes pourraient accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "Alcuni periodi potrebbero accentuare la tua sensibilità alle critiche o ai commenti poco delicati.",

    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Potresti avere la tendenza a minimizzare le tue esigenze fino al momento in cui diventeranno impossibili da ignorare.",

    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Una situazione ambigua potrebbe alimentare più preoccupazione di quanto i fatti giustifichino.",

    "Le défi émotionnel sera de ne pas laisser une période difficile définir toute votre perception de l’année.":
      "La sfida emotiva sarà non lasciare che un periodo difficile definisca tutta la tua percezione dell'anno.",

    /* PRACTICAL CHALLENGE */

    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Una responsabilità aggiuntiva potrebbe obbligarti a rivedere la tua organizzazione.",

    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Un ritardo, una modifica o un'imprecisione potrebbe richiedere una reazione rapida e strutturata.",

    "Vous pourriez sous-estimer le temps nécessaire pour terminer un projet important.":
      "Potresti sottovalutare il tempo necessario per completare un progetto importante.",

    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "Un accumulo di piccoli impegni potrebbe diventare più pesante di una grande responsabilità chiaramente definita.",

    "Le manque de préparation pourrait créer une pression évitable à certaines périodes de l’année.":
      "Una preparazione insufficiente potrebbe creare una pressione evitabile in alcuni periodi dell'anno.",

    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Una questione amministrativa o pratica potrebbe richiedere maggiore attenzione.",

    "Vous pourriez devoir gérer plusieurs priorités importantes dans une même période.":
      "Potresti dover gestire diverse priorità importanti nello stesso periodo.",

    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Un problema pratico potrebbe ripresentarsi finché la sua vera causa non verrà risolta.",

    "L’année pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "L'anno potrebbe obbligarti a semplificare un programma diventato troppo impegnativo.",

    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un objectif plus important.":
      "Un investimento di tempo o energia valutato male potrebbe rallentare un obiettivo più importante.",

    /* RELATIONSHIP CHALLENGE */

    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Una relazione potrebbe diventare più impegnativa se le aspettative di ciascuno rimangono implicite.",

    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Potresti esitare tra preservare l'armonia ed esprimere una verità necessaria.",

    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Una persona potrebbe interpretare il tuo bisogno di prendere le distanze come una mancanza di interesse.",

    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Un vecchio commento potrebbe riemergere durante una conversazione delicata.",

    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Potresti sentirti responsabile di una situazione la cui responsabilità dovrebbe invece essere condivisa.",

    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "Il bisogno di proteggere una relazione potrebbe spingerti ad accettare un limite che non ti è più adatto.",

    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Una persona potrebbe chiederti più disponibilità di quanta tu possa ragionevolmente offrire.",

    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Un silenzio prolungato potrebbe creare più confusione di una conversazione sincera.",

    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "La sfida sarà non rispondere a una tensione ritirandoti completamente.",

    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Una differenza di ritmo o di priorità potrebbe richiedere maggiori compromessi.",

    /* KEY PERIODS */

    "Le début de l’année pourrait mettre en évidence un défi nécessitant une décision plus claire.":
      "L'inizio dell'anno potrebbe mettere in evidenza una sfida che richiede una decisione più chiara.",

    "Le printemps pourrait demander davantage de souplesse face à une situation qui évolue rapidement.":
      "La primavera potrebbe richiedere maggiore flessibilità di fronte a una situazione che evolve rapidamente.",

    "Le milieu de l’année pourrait représenter une période importante pour dépasser une ancienne limite.":
      "La metà dell'anno potrebbe rappresentare un periodo importante per superare un vecchio limite.",

    "L’été pourrait demander davantage de patience dans une situation qui semble progresser lentement.":
      "L'estate potrebbe richiedere maggiore pazienza in una situazione che sembra progredire lentamente.",

    "L’automne pourrait mettre en lumière une décision ou une conversation devenue nécessaire.":
      "L'autunno potrebbe mettere in evidenza una decisione o una conversazione diventata necessaria.",

    "La fin de l’année permettra de mesurer le chemin parcouru face à un défi important.":
      "La fine dell'anno ti permetterà di valutare il percorso compiuto nell'affrontare una sfida importante.",

    "Une période de tension pourrait être suivie d’une compréhension beaucoup plus claire de la situation.":
      "Un periodo di tensione potrebbe essere seguito da una comprensione molto più chiara della situazione.",

    "Certains défis apparaîtront au moment où vous aurez suffisamment de recul pour les gérer différemment.":
      "Alcune sfide si presenteranno quando avrai acquisito una prospettiva sufficiente per gestirle in modo diverso.",

    "Une période plus calme vous permettra de comprendre la véritable origine d’une difficulté.":
      "Un periodo più tranquillo ti permetterà di comprendere la vera origine di una difficoltà.",

    "Les moments les plus exigeants pourraient finalement devenir les plus instructifs de l’année.":
      "I momenti più impegnativi potrebbero infine diventare i più istruttivi dell'anno.",

    /* HIDDEN LESSON */

    "Ce défi vous apprend à faire confiance à votre capacité d’adaptation.":
      "Questa sfida ti insegna ad avere fiducia nella tua capacità di adattamento.",

    "Une difficulté actuelle pourrait vous montrer l’importance de poser des limites plus claires.":
      "Una difficoltà attuale potrebbe mostrarti l'importanza di stabilire limiti più chiari.",

    "Cette situation vous apprend à distinguer ce que vous pouvez contrôler de ce que vous devez accepter.":
      "Questa situazione ti insegna a distinguere ciò che puoi controllare da ciò che devi accettare.",

    "Un obstacle pourrait vous aider à développer une patience qui vous servira longtemps.":
      "Un ostacolo potrebbe aiutarti a sviluppare una pazienza che ti sarà utile a lungo.",

    "Cette expérience pourrait renforcer votre confiance dans votre propre jugement.":
      "Questa esperienza potrebbe rafforzare la fiducia nel tuo giudizio.",

    "Une tension pourrait révéler un besoin que vous aviez longtemps minimisé.":
      "Una tensione potrebbe rivelare un'esigenza che avevi minimizzato per molto tempo.",

    "Ce défi vous invite à remplacer une ancienne réaction par une réponse plus consciente.":
      "Questa sfida ti invita a sostituire una vecchia reazione con una risposta più consapevole.",

    "Une difficulté pourrait vous apprendre à demander de l’aide au bon moment.":
      "Una difficoltà potrebbe insegnarti a chiedere aiuto al momento giusto.",

    "Cette situation vous rappelle que la progression n’exige pas toujours de tout comprendre immédiatement.":
      "Questa situazione ti ricorda che progredire non richiede sempre di comprendere tutto immediatamente.",

    "Le véritable enseignement pourrait être de reconnaître votre capacité à traverser l’incertitude sans perdre votre direction.":
      "Il vero insegnamento potrebbe essere riconoscere la tua capacità di attraversare l'incertezza senza perdere la direzione.",

    /* TRANSFORMATION */

    "Une ancienne peur pourrait progressivement perdre son influence sur vos décisions.":
      "Una vecchia paura potrebbe perdere gradualmente la sua influenza sulle tue decisioni.",

    "Vous pourriez apprendre à réagir avec davantage de calme face à une situation autrefois déstabilisante.":
      "Potresti imparare a reagire con maggiore calma di fronte a una situazione che un tempo ti destabilizzava.",

    "Une difficulté pourrait devenir le point de départ d’une nouvelle manière de fonctionner.":
      "Una difficoltà potrebbe diventare il punto di partenza di un nuovo modo di agire.",

    "Vous développerez une meilleure capacité à reconnaître rapidement ce qui mérite réellement votre énergie.":
      "Svilupperai una maggiore capacità di riconoscere rapidamente ciò che merita davvero la tua energia.",

    "Une situation exigeante pourrait renforcer votre confiance dans votre capacité à prendre des décisions.":
      "Una situazione impegnativa potrebbe rafforzare la fiducia nella tua capacità di prendere decisioni.",

    "Vous pourriez devenir beaucoup plus clair dans votre manière d’exprimer vos limites.":
      "Potresti diventare molto più chiaro nel modo in cui esprimi i tuoi limiti.",

    "Une période d’incertitude pourrait finalement vous aider à définir une direction plus précise.":
      "Un periodo di incertezza potrebbe infine aiutarti a definire una direzione più precisa.",

    "Vous apprendrez progressivement à préserver votre énergie face aux situations qui ne dépendent pas entièrement de vous.":
      "Imparerai gradualmente a preservare la tua energia di fronte alle situazioni che non dipendono interamente da te.",

    "Un défi relationnel pourrait transformer votre manière de communiquer vos besoins.":
      "Una sfida relazionale potrebbe trasformare il modo in cui comunichi le tue esigenze.",

    "Cette année pourrait vous rendre plus résilient, plus lucide et plus confiant face aux changements.":
      "Quest'anno potrebbe renderti più resiliente, più lucido e più sicuro di fronte ai cambiamenti.",

    /* ADVICE */

    "Prenez le temps d’observer une situation avant de décider comment y répondre.":
      "Prenditi il tempo necessario per osservare una situazione prima di decidere come rispondere.",

    "Évitez de transformer une difficulté temporaire en conclusion définitive.":
      "Evita di trasformare una difficoltà temporanea in una conclusione definitiva.",

    "Lorsque la pression augmente, revenez à ce qui dépend réellement de vous.":
      "Quando la pressione aumenta, torna a concentrarti su ciò che dipende realmente da te.",

    "Posez des limites claires avant que la fatigue ou la frustration ne s’accumulent.":
      "Stabilisci limiti chiari prima che la stanchezza o la frustrazione si accumulino.",

    "Ne cherchez pas à résoudre plusieurs problèmes importants en même temps.":
      "Non cercare di risolvere diversi problemi importanti contemporaneamente.",

    "Acceptez qu’une adaptation puisse être une preuve de force plutôt qu’un recul.":
      "Accetta che adattarsi possa essere una dimostrazione di forza anziché un passo indietro.",

    "Lorsque vous doutez, privilégiez les décisions cohérentes avec vos priorités à long terme.":
      "Quando hai dei dubbi, privilegia le decisioni coerenti con le tue priorità a lungo termine.",

    "Parlez clairement avant qu’une incompréhension ne prenne trop de place.":
      "Parla con chiarezza prima che un'incomprensione assuma troppa importanza.",

    "Accordez-vous le droit de modifier une décision lorsque de nouvelles informations apparaissent.":
      "Concediti il diritto di modificare una decisione quando emergono nuove informazioni.",

    "Rappelez-vous que les périodes difficiles ne définissent pas votre année entière.":
      "Ricorda che i periodi difficili non definiscono tutto il tuo anno.",

    /* CONCLUSION */

    "Les défis de cette année pourraient finalement devenir une source importante de confiance et de maturité.":
      "Le sfide di quest'anno potrebbero infine diventare un'importante fonte di fiducia e maturità.",

    "Chaque difficulté dépassée renforcera progressivement votre capacité à faire face aux changements futurs.":
      "Ogni difficoltà superata rafforzerà gradualmente la tua capacità di affrontare i cambiamenti futuri.",

    "Cette année pourrait vous apprendre que certaines limites peuvent être transformées beaucoup plus facilement que vous ne l’imaginiez.":
      "Quest'anno potrebbe insegnarti che alcuni limiti possono essere trasformati molto più facilmente di quanto immaginassi.",

    "Les périodes exigeantes vous aideront à mieux comprendre vos véritables priorités.":
      "I periodi più impegnativi ti aiuteranno a comprendere meglio le tue vere priorità.",

    "Vous terminerez probablement l’année avec une vision plus claire de vos forces et de vos limites.":
      "Probabilmente terminerai l'anno con una visione più chiara dei tuoi punti di forza e dei tuoi limiti.",

    "Un défi important pourrait finalement devenir l’un des éléments les plus constructifs de votre année.":
      "Una sfida importante potrebbe infine diventare uno degli elementi più costruttivi del tuo anno.",

    "Cette année vous aidera à développer une manière plus calme et plus stratégique de gérer les difficultés.":
      "Quest'anno ti aiuterà a sviluppare un modo più calmo e strategico di gestire le difficoltà.",

    "Les obstacles rencontrés pourraient renforcer votre confiance dans votre capacité à trouver des solutions.":
      "Gli ostacoli incontrati potrebbero rafforzare la fiducia nella tua capacità di trovare soluzioni.",

    "Vous découvrirez probablement que votre capacité d’adaptation est beaucoup plus grande que vous ne le pensiez.":
      "Probabilmente scoprirai che la tua capacità di adattamento è molto maggiore di quanto pensassi.",

    "Cette année pourrait transformer plusieurs défis en véritables étapes de croissance personnelle.":
      "Quest'anno potrebbe trasformare diverse sfide in vere e proprie tappe di crescita personale.",

    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins. La fin de l’année permettra de mesurer les progrès réalisés et les obstacles dépassés.":
      "Potresti scoprire che la tua prima reazione non è sempre quella che corrisponde meglio alle tue esigenze. La fine dell’anno ti permetterà di valutare i progressi compiuti e gli ostacoli superati.",

    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Questa esperienza potrebbe insegnarti ad andare avanti senza avere bisogno di tutte le garanzie.",
  },

   /* =======================================================
     PORTUGUESE — BRAZIL
  ======================================================= */

  pt: {
    /* INTRODUCTION */

    "Cette année vous confronte à une situation qui demandera davantage de patience, de recul et de discernement. Le véritable défi sera de choisir votre réponse plutôt que de réagir automatiquement.":
      "Este ano coloca você diante de uma situação que exigirá mais paciência, perspectiva e discernimento. O verdadeiro desafio será escolher conscientemente sua resposta em vez de reagir automaticamente.",

    "Les prochains mois pourraient faire ressortir une difficulté que vous ne pourrez plus contourner. Cette période vous invite à transformer une tension en occasion d’évolution.":
      "Os próximos meses poderão trazer à tona uma dificuldade que você não poderá mais evitar. Este período convida você a transformar uma tensão em uma oportunidade de evolução.",

    "Un défi important pourrait apparaître au cours de l’année. Il ne sera pas là pour vous freiner, mais pour vous montrer ce qui demande une nouvelle approche.":
      "Um desafio importante poderá surgir ao longo do ano. Ele não estará ali para impedir seu avanço, mas para mostrar o que exige uma nova abordagem.",

    "Cette année met en lumière une limite, une peur ou une habitude qui ralentit votre progression. En l’observant avec honnêteté, vous pourrez commencer à la dépasser.":
      "Este ano coloca em evidência um limite, um medo ou um hábito que está desacelerando seu progresso. Ao observá-lo com honestidade, você poderá começar a superá-lo.",

    "Une situation exigeante pourrait vous demander davantage de souplesse que prévu. Votre capacité à vous adapter deviendra l’une de vos principales forces.":
      "Uma situação exigente poderá exigir mais flexibilidade do que o previsto. Sua capacidade de adaptação se tornará uma de suas principais forças.",

    "Les prochains mois vous invitent à affronter une question que vous avez peut-être repoussée. Une décision claire vous apportera davantage de légèreté.":
      "Os próximos meses convidam você a enfrentar uma questão que talvez tenha adiado. Uma decisão clara trará uma maior sensação de leveza.",

    "Votre principal défi sera de maintenir votre équilibre lorsque les événements ne suivront pas exactement le rythme espéré.":
      "Seu principal desafio será manter o equilíbrio quando os acontecimentos não seguirem exatamente o ritmo esperado.",

    "Cette année pourrait tester votre confiance, votre patience ou votre capacité à poser des limites. Chaque difficulté contiendra toutefois une information utile.":
      "Este ano poderá testar sua confiança, sua paciência ou sua capacidade de estabelecer limites. No entanto, cada dificuldade trará um aprendizado útil.",

    "Une période de remise en question pourrait vous aider à reconnaître ce qui ne correspond plus à vos besoins actuels.":
      "Um período de reflexão poderá ajudar você a reconhecer o que já não corresponde às suas necessidades atuais.",

    "L’année vous pousse à sortir d’un automatisme devenu trop restrictif. Une autre manière d’agir pourrait produire un résultat plus satisfaisant.":
      "O ano incentiva você a abandonar um padrão automático que se tornou restritivo demais. Outra maneira de agir poderá produzir um resultado mais satisfatório.",

    /* MAIN CHALLENGE */

    "Le défi principal consistera à ne pas vous disperser entre plusieurs priorités concurrentes.":
      "O principal desafio será não dispersar sua energia entre várias prioridades concorrentes.",

    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "Você poderá ter que escolher entre preservar um hábito que transmite segurança e avançar em direção a uma situação mais adequada à sua evolução.",

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

    "Le défi sera d’accepter qu’une progression réelle puisse parfois rester discrète pendant plusieurs mois.":
      "O desafio será aceitar que um progresso real pode, às vezes, permanecer pouco visível durante vários meses.",

    /* EMOTIONAL CHALLENGE */

    "Une émotion intense pourrait vous pousser à interpréter une situation plus négativement qu’elle ne l’est réellement.":
      "Uma emoção intensa poderá levar você a interpretar uma situação de maneira mais negativa do que ela realmente é.",

    "Vous pourriez ressentir une ancienne insécurité dans une situation nouvelle. Prenez le temps de distinguer le passé du présent.":
      "Você poderá sentir uma antiga insegurança em uma situação nova. Reserve um tempo para distinguir o passado do presente.",

    "Le besoin d’être rassuré pourrait devenir plus fort lorsque certaines réponses tarderont à arriver.":
      "A necessidade de se sentir tranquilizado poderá aumentar quando algumas respostas demorarem a chegar.",

    "Une déception pourrait réveiller une peur de ne pas être suffisamment reconnu ou soutenu.":
      "Uma decepção poderá despertar o medo de não ser suficientemente reconhecido ou apoiado.",

    "Vous pourriez absorber les tensions de votre entourage et les confondre avec vos propres émotions.":
      "Você poderá absorver as tensões das pessoas ao seu redor e confundi-las com suas próprias emoções.",

    "Une frustration contenue pourrait apparaître plus directement. Cherchez à comprendre son origine avant de l’exprimer.":
      "Uma frustração contida poderá surgir de maneira mais direta. Procure compreender sua origem antes de expressá-la.",

    "Certaines périodes pourraient accentuer votre sensibilité face aux critiques ou aux remarques maladroites.":
      "Alguns períodos poderão aumentar sua sensibilidade diante de críticas ou comentários pouco delicados.",

    "Vous pourriez avoir tendance à minimiser vos besoins jusqu’au moment où ils deviennent impossibles à ignorer.":
      "Você poderá ter a tendência de minimizar suas necessidades até que se tornem impossíveis de ignorar.",

    "Une situation ambiguë pourrait nourrir davantage d’inquiétude que les faits ne le justifient.":
      "Uma situação ambígua poderá gerar mais preocupação do que os fatos realmente justificam.",

    "Le défi émotionnel sera de ne pas laisser une période difficile définir toute votre perception de l’année.":
      "O desafio emocional será não permitir que um período difícil defina toda a sua percepção do ano.",

    /* PRACTICAL CHALLENGE */

    "Une responsabilité supplémentaire pourrait vous obliger à revoir votre organisation.":
      "Uma responsabilidade adicional poderá obrigar você a rever sua organização.",

    "Un retard, une modification ou une imprécision pourrait demander une réaction rapide et structurée.":
      "Um atraso, uma mudança ou uma imprecisão poderá exigir uma reação rápida e estruturada.",

    "Vous pourriez sous-estimer le temps nécessaire pour terminer un projet important.":
      "Você poderá subestimar o tempo necessário para concluir um projeto importante.",

    "Une accumulation de petites obligations pourrait devenir plus lourde qu’une grande responsabilité clairement définie.":
      "O acúmulo de pequenas obrigações poderá se tornar mais pesado do que uma grande responsabilidade claramente definida.",

    "Le manque de préparation pourrait créer une pression évitable à certaines périodes de l’année.":
      "A falta de preparação poderá criar uma pressão evitável em determinados períodos do ano.",

    "Une question administrative ou matérielle pourrait demander davantage d’attention.":
      "Uma questão administrativa ou prática poderá exigir mais atenção.",

    "Vous pourriez devoir gérer plusieurs priorités importantes dans une même période.":
      "Você poderá ter que administrar várias prioridades importantes durante o mesmo período.",

    "Un problème pratique pourrait revenir tant que sa cause réelle ne sera pas corrigée.":
      "Um problema prático poderá continuar se repetindo enquanto sua verdadeira causa não for corrigida.",

    "L’année pourrait vous obliger à simplifier un programme devenu trop chargé.":
      "O ano poderá obrigar você a simplificar uma rotina que se tornou sobrecarregada.",

    "Une dépense de temps ou d’énergie mal évaluée pourrait ralentir un objectif plus important.":
      "Um investimento de tempo ou energia mal avaliado poderá atrasar um objetivo mais importante.",

    /* RELATIONSHIP CHALLENGE */

    "Une relation pourrait devenir plus exigeante si les attentes de chacun restent implicites.":
      "Uma relação poderá se tornar mais exigente se as expectativas de cada pessoa permanecerem implícitas.",

    "Vous pourriez hésiter entre préserver l’harmonie et exprimer une vérité nécessaire.":
      "Você poderá hesitar entre preservar a harmonia e expressar uma verdade necessária.",

    "Une personne pourrait interpréter votre besoin de recul comme un manque d’intérêt.":
      "Uma pessoa poderá interpretar sua necessidade de se afastar um pouco como falta de interesse.",

    "Une remarque ancienne pourrait refaire surface dans une conversation sensible.":
      "Um comentário antigo poderá voltar à tona durante uma conversa delicada.",

    "Vous pourriez vous sentir responsable d’une situation qui devrait pourtant être partagée.":
      "Você poderá se sentir responsável por uma situação cuja responsabilidade deveria ser compartilhada.",

    "Le besoin de protéger une relation pourrait vous pousser à accepter une limite qui ne vous convient plus.":
      "A necessidade de proteger uma relação poderá levar você a aceitar um limite que já não lhe convém.",

    "Une personne pourrait demander davantage de disponibilité que vous ne pouvez raisonnablement offrir.":
      "Uma pessoa poderá exigir mais disponibilidade do que você pode razoavelmente oferecer.",

    "Un silence prolongé pourrait créer plus de confusion qu’une discussion honnête.":
      "Um silêncio prolongado poderá gerar mais confusão do que uma conversa sincera.",

    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "O desafio será não responder a uma tensão afastando-se completamente.",

    "Une différence de rythme ou de priorité pourrait demander davantage de compromis.":
      "Uma diferença de ritmo ou de prioridades poderá exigir mais concessões.",

    /* KEY PERIODS */

    "Le début de l’année pourrait mettre en évidence un défi nécessitant une décision plus claire.":
      "O início do ano poderá colocar em evidência um desafio que exige uma decisão mais clara.",

    "Le printemps pourrait demander davantage de souplesse face à une situation qui évolue rapidement.":
      "A primavera poderá exigir mais flexibilidade diante de uma situação que evolui rapidamente.",

    "Le milieu de l’année pourrait représenter une période importante pour dépasser une ancienne limite.":
      "O meio do ano poderá representar um período importante para superar um antigo limite.",

    "L’été pourrait demander davantage de patience dans une situation qui semble progresser lentement.":
      "O verão poderá exigir mais paciência diante de uma situação que parece avançar lentamente.",

    "L’automne pourrait mettre en lumière une décision ou une conversation devenue nécessaire.":
      "O outono poderá colocar em evidência uma decisão ou uma conversa que se tornou necessária.",

    "La fin de l’année permettra de mesurer le chemin parcouru face à un défi important.":
      "O final do ano permitirá avaliar o caminho percorrido diante de um desafio importante.",

    "Une période de tension pourrait être suivie d’une compréhension beaucoup plus claire de la situation.":
      "Um período de tensão poderá ser seguido por uma compreensão muito mais clara da situação.",

    "Certains défis apparaîtront au moment où vous aurez suffisamment de recul pour les gérer différemment.":
      "Alguns desafios surgirão quando você tiver perspectiva suficiente para lidar com eles de uma maneira diferente.",

    "Une période plus calme vous permettra de comprendre la véritable origine d’une difficulté.":
      "Um período mais tranquilo permitirá que você compreenda a verdadeira origem de uma dificuldade.",

    "Les moments les plus exigeants pourraient finalement devenir les plus instructifs de l’année.":
      "Os momentos mais exigentes poderão acabar se tornando os mais instrutivos do ano.",

    /* HIDDEN LESSON */

    "Ce défi vous apprend à faire confiance à votre capacité d’adaptation.":
      "Este desafio ensina você a confiar em sua capacidade de adaptação.",

    "Une difficulté actuelle pourrait vous montrer l’importance de poser des limites plus claires.":
      "Uma dificuldade atual poderá mostrar a importância de estabelecer limites mais claros.",

    "Cette situation vous apprend à distinguer ce que vous pouvez contrôler de ce que vous devez accepter.":
      "Esta situação ensina você a distinguir o que pode controlar daquilo que precisa aceitar.",

    "Un obstacle pourrait vous aider à développer une patience qui vous servira longtemps.":
      "Um obstáculo poderá ajudar você a desenvolver uma paciência que será útil por muito tempo.",

    "Cette expérience pourrait renforcer votre confiance dans votre propre jugement.":
      "Esta experiência poderá fortalecer sua confiança em seu próprio julgamento.",

    "Une tension pourrait révéler un besoin que vous aviez longtemps minimisé.":
      "Uma tensão poderá revelar uma necessidade que você minimizou durante muito tempo.",

    "Ce défi vous invite à remplacer une ancienne réaction par une réponse plus consciente.":
      "Este desafio convida você a substituir uma antiga reação por uma resposta mais consciente.",

    "Une difficulté pourrait vous apprendre à demander de l’aide au bon moment.":
      "Uma dificuldade poderá ensinar você a pedir ajuda no momento certo.",

    "Cette situation vous rappelle que la progression n’exige pas toujours de tout comprendre immédiatement.":
      "Esta situação lembra que progredir nem sempre exige compreender tudo imediatamente.",

    "Le véritable enseignement pourrait être de reconnaître votre capacité à traverser l’incertitude sans perdre votre direction.":
      "O verdadeiro aprendizado poderá ser reconhecer sua capacidade de atravessar a incerteza sem perder sua direção.",

    /* TRANSFORMATION */

    "Une ancienne peur pourrait progressivement perdre son influence sur vos décisions.":
      "Um antigo medo poderá perder gradualmente sua influência sobre suas decisões.",

    "Vous pourriez apprendre à réagir avec davantage de calme face à une situation autrefois déstabilisante.":
      "Você poderá aprender a reagir com mais calma diante de uma situação que antes o desestabilizava.",

    "Une difficulté pourrait devenir le point de départ d’une nouvelle manière de fonctionner.":
      "Uma dificuldade poderá se tornar o ponto de partida para uma nova maneira de agir.",

    "Vous développerez une meilleure capacité à reconnaître rapidement ce qui mérite réellement votre énergie.":
      "Você desenvolverá uma capacidade maior de reconhecer rapidamente o que realmente merece sua energia.",

    "Une situation exigeante pourrait renforcer votre confiance dans votre capacité à prendre des décisions.":
      "Uma situação exigente poderá fortalecer sua confiança em sua capacidade de tomar decisões.",

    "Vous pourriez devenir beaucoup plus clair dans votre manière d’exprimer vos limites.":
      "Você poderá se tornar muito mais claro ao expressar seus limites.",

    "Une période d’incertitude pourrait finalement vous aider à définir une direction plus précise.":
      "Um período de incerteza poderá finalmente ajudar você a definir uma direção mais precisa.",

    "Vous apprendrez progressivement à préserver votre énergie face aux situations qui ne dépendent pas entièrement de vous.":
      "Você aprenderá gradualmente a preservar sua energia diante de situações que não dependem inteiramente de você.",

    "Un défi relationnel pourrait transformer votre manière de communiquer vos besoins.":
      "Um desafio em uma relação poderá transformar a maneira como você comunica suas necessidades.",

    "Cette année pourrait vous rendre plus résilient, plus lucide et plus confiant face aux changements.":
      "Este ano poderá tornar você mais resiliente, mais lúcido e mais confiante diante das mudanças.",

    /* ADVICE */

    "Prenez le temps d’observer une situation avant de décider comment y répondre.":
      "Reserve um tempo para observar uma situação antes de decidir como responder.",

    "Évitez de transformer une difficulté temporaire en conclusion définitive.":
      "Evite transformar uma dificuldade temporária em uma conclusão definitiva.",

    "Lorsque la pression augmente, revenez à ce qui dépend réellement de vous.":
      "Quando a pressão aumentar, volte sua atenção para aquilo que realmente depende de você.",

    "Posez des limites claires avant que la fatigue ou la frustration ne s’accumulent.":
      "Estabeleça limites claros antes que o cansaço ou a frustração se acumulem.",

    "Ne cherchez pas à résoudre plusieurs problèmes importants en même temps.":
      "Não tente resolver vários problemas importantes ao mesmo tempo.",

    "Acceptez qu’une adaptation puisse être une preuve de force plutôt qu’un recul.":
      "Aceite que se adaptar pode ser uma demonstração de força, e não um retrocesso.",

    "Lorsque vous doutez, privilégiez les décisions cohérentes avec vos priorités à long terme.":
      "Quando tiver dúvidas, priorize decisões coerentes com suas prioridades de longo prazo.",

    "Parlez clairement avant qu’une incompréhension ne prenne trop de place.":
      "Fale com clareza antes que um mal-entendido ganhe importância demais.",

    "Accordez-vous le droit de modifier une décision lorsque de nouvelles informations apparaissent.":
      "Permita-se modificar uma decisão quando surgirem novas informações.",

    "Rappelez-vous que les périodes difficiles ne définissent pas votre année entière.":
      "Lembre-se de que os períodos difíceis não definem todo o seu ano.",

    /* CONCLUSION */

    "Les défis de cette année pourraient finalement devenir une source importante de confiance et de maturité.":
      "Os desafios deste ano poderão finalmente se tornar uma importante fonte de confiança e maturidade.",

    "Chaque difficulté dépassée renforcera progressivement votre capacité à faire face aux changements futurs.":
      "Cada dificuldade superada fortalecerá gradualmente sua capacidade de enfrentar mudanças futuras.",

    "Cette année pourrait vous apprendre que certaines limites peuvent être transformées beaucoup plus facilement que vous ne l’imaginiez.":
      "Este ano poderá ensinar que alguns limites podem ser transformados com muito mais facilidade do que você imaginava.",

    "Les périodes exigeantes vous aideront à mieux comprendre vos véritables priorités.":
      "Os períodos exigentes ajudarão você a compreender melhor suas verdadeiras prioridades.",

    "Vous terminerez probablement l’année avec une vision plus claire de vos forces et de vos limites.":
      "Você provavelmente terminará o ano com uma visão mais clara de suas forças e de seus limites.",

    "Un défi important pourrait finalement devenir l’un des éléments les plus constructifs de votre année.":
      "Um desafio importante poderá finalmente se tornar um dos elementos mais construtivos do seu ano.",

    "Cette année vous aidera à développer une manière plus calme et plus stratégique de gérer les difficultés.":
      "Este ano ajudará você a desenvolver uma maneira mais tranquila e estratégica de lidar com as dificuldades.",

    "Les obstacles rencontrés pourraient renforcer votre confiance dans votre capacité à trouver des solutions.":
      "Os obstáculos encontrados poderão fortalecer sua confiança em sua capacidade de encontrar soluções.",

    "Vous découvrirez probablement que votre capacité d’adaptation est beaucoup plus grande que vous ne le pensiez.":
      "Você provavelmente descobrirá que sua capacidade de adaptação é muito maior do que imaginava.",

    "Cette année pourrait transformer plusieurs défis en véritables étapes de croissance personnelle.":
      "Este ano poderá transformar vários desafios em verdadeiras etapas de crescimento pessoal.",

    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins. La fin de l’année permettra de mesurer les progrès réalisés et les obstacles dépassés.":
      "Você poderá descobrir que sua primeira reação nem sempre é a que melhor corresponde às suas necessidades. O final do ano permitirá avaliar os progressos realizados e os obstáculos superados.",

    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "Esta experiência poderá ensinar você a seguir em frente sem precisar de todas as garantias.",
  },
};

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeYearHoroscopeChallenge(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  const translations: TranslationMap = {
    ...CHALLENGE_TITLES[locale],
    ...CHALLENGE_TEXTS[locale],
  };

  for (
    const [french, translated] of
    Object.entries(translations)
  ) {
    output =
      output.split(french).join(translated);
  }

  return output;
}
  
