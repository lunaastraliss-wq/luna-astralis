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

const HEALTH_TITLES: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Votre équilibre intérieur évolue":
      "Your inner balance is evolving",
    "Une période favorable au bien-être":
      "A favorable period for well-being",
    "Votre énergie retrouve son rythme":
      "Your energy is finding its rhythm again",
    "Le mois invite à prendre soin de vous":
      "The month invites you to take care of yourself",
    "Un nouvel équilibre se met en place":
      "A new balance is taking shape",
    "Votre vitalité demande de l'attention":
      "Your vitality needs attention",
    "Un mois pour retrouver votre harmonie":
      "A month to restore your harmony",
    "Votre bien-être devient une priorité":
      "Your well-being becomes a priority",
  },
  es: {
    "Votre équilibre intérieur évolue":
      "Su equilibrio interior evoluciona",
    "Une période favorable au bien-être":
      "Un período favorable para el bienestar",
    "Votre énergie retrouve son rythme":
      "Su energía recupera su ritmo",
    "Le mois invite à prendre soin de vous":
      "El mes le invita a cuidarse",
    "Un nouvel équilibre se met en place":
      "Un nuevo equilibrio se está estableciendo",
    "Votre vitalité demande de l'attention":
      "Su vitalidad requiere atención",
    "Un mois pour retrouver votre harmonie":
      "Un mes para recuperar su armonía",
    "Votre bien-être devient une priorité":
      "Su bienestar se convierte en una prioridad",
  },
  de: {
    "Votre équilibre intérieur évolue":
      "Ihr inneres Gleichgewicht entwickelt sich",
    "Une période favorable au bien-être":
      "Eine günstige Phase für Ihr Wohlbefinden",
    "Votre énergie retrouve son rythme":
      "Ihre Energie findet ihren Rhythmus wieder",
    "Le mois invite à prendre soin de vous":
      "Der Monat lädt Sie dazu ein, gut für sich zu sorgen",
    "Un nouvel équilibre se met en place":
      "Ein neues Gleichgewicht entsteht",
    "Votre vitalité demande de l'attention":
      "Ihre Vitalität braucht Aufmerksamkeit",
    "Un mois pour retrouver votre harmonie":
      "Ein Monat, um Ihre Harmonie wiederzufinden",
    "Votre bien-être devient une priorité":
      "Ihr Wohlbefinden wird zur Priorität",
  },
  it: {
    "Votre équilibre intérieur évolue":
      "Il tuo equilibrio interiore evolve",
    "Une période favorable au bien-être":
      "Un periodo favorevole al benessere",
    "Votre énergie retrouve son rythme":
      "La tua energia ritrova il suo ritmo",
    "Le mois invite à prendre soin de vous":
      "Il mese ti invita a prenderti cura di te",
    "Un nouvel équilibre se met en place":
      "Un nuovo equilibrio si sta creando",
    "Votre vitalité demande de l'attention":
      "La tua vitalità richiede attenzione",
    "Un mois pour retrouver votre harmonie":
      "Un mese per ritrovare la tua armonia",
    "Votre bien-être devient une priorité":
      "Il tuo benessere diventa una priorità",
  },
  pt: {
    "Votre équilibre intérieur évolue":
      "Seu equilíbrio interior evolui",
    "Une période favorable au bien-être":
      "Um período favorável ao bem-estar",
    "Votre énergie retrouve son rythme":
      "Sua energia recupera o ritmo",
    "Le mois invite à prendre soin de vous":
      "O mês convida você a cuidar de si",
    "Un nouvel équilibre se met en place":
      "Um novo equilíbrio está se estabelecendo",
    "Votre vitalité demande de l'attention":
      "Sua vitalidade precisa de atenção",
    "Un mois pour retrouver votre harmonie":
      "Um mês para recuperar sua harmonia",
    "Votre bien-être devient une priorité":
      "Seu bem-estar se torna uma prioridade",
  },
};

/* =========================================================
   BANQUE DE TEXTES
========================================================= */

const HEALTH_TEXTS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Votre bien-être dépendra ce mois-ci de votre capacité à respecter votre rythme réel. Votre énergie pourrait varier davantage selon les jours.":
      "Your well-being this month will depend on your ability to respect your true rhythm. Your energy may vary more from day to day.",
    "Les prochaines semaines vous invitent à mieux écouter les signaux de votre corps. Un ralentissement ponctuel pourrait vous aider à retrouver un meilleur équilibre.":
      "The coming weeks invite you to listen more closely to your body's signals. A temporary slowdown could help you regain better balance.",
    "Ce mois met l’accent sur la récupération, la qualité du repos et la gestion de votre énergie quotidienne.":
      "This month emphasizes recovery, quality rest, and the management of your daily energy.",
    "Votre équilibre physique et émotionnel demande davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Your physical and emotional balance requires greater consistency. Small repeated habits will have more impact than sudden changes.",
    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "A period of refocusing begins. You may feel the need to better protect your sleep, your calm, and your recovery time.",
    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Your vitality could improve if you agree to simplify certain obligations and reduce unnecessary sources of fatigue.",
    "Le mois vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "The month encourages you to take care of yourself before fatigue becomes too significant.",
    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer la fatigue passagère d’un besoin réel de repos.":
      "Your body may require more attention. It will be useful to distinguish temporary tiredness from a genuine need for rest.",
    "Une meilleure hygiène de vie pourrait rapidement améliorer votre énergie et votre humeur au cours des prochaines semaines.":
      "A healthier lifestyle could quickly improve your energy and mood over the coming weeks.",
    "Ce mois vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "This month helps you restore a more stable balance between activity, rest, and emotional well-being.",
    "Votre énergie pourrait être plus forte en début de journée. Profitez de ces moments pour accomplir les tâches les plus exigeantes.":
      "Your energy may be stronger at the beginning of the day. Use these moments to complete the most demanding tasks.",
    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "A drop in vitality may appear after an overly busy period. Avoid waiting until exhaustion before slowing down.",
    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Your energy level will be closely linked to the quality of your sleep and the regularity of your habits.",
    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "You may experience bursts of momentum followed by quieter periods. Respect this alternation without guilt.",
    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Moderate physical activity could help you regain greater vitality and mental clarity.",
    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Your energy will increase when you stop scattering yourself among secondary tasks.",
    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "You may feel the need to move more. Choose an enjoyable activity rather than an overly demanding discipline.",
    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps.":
      "A more regular rhythm will help you preserve your energy for longer.",
    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Your vitality may be influenced by your environment. Calm, fresh air, and order will benefit you.",
    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "You will benefit from scheduling breaks before your concentration and patience begin to decline.",
    "Votre sensibilité pourrait être plus forte ce mois-ci. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Your sensitivity may be stronger this month. Give yourself some distance before reacting to an emotionally charged situation.",
    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "An old emotion may resurface so that it can be understood differently.",
    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "You may absorb other people's tensions more easily. Protect your inner space.",
    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "Calm will return when you stop trying to resolve every discomfort immediately.",
    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée.":
      "A sincere conversation could ease accumulated emotional pressure.",
    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Your balance will depend on your ability to express your needs before reaching your limit.",
    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "You may feel a greater need for solitude or silence. Respect it without isolating yourself completely.",
    "Un changement d’environnement pourrait vous aider à retrouver une meilleure perspective.":
      "A change of environment could help you regain a better perspective.",
    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Your mood could improve through a simple and reassuring routine.",
    "Le mois vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "The month invites you to make more room for activities that genuinely soothe you.",
    "Votre sommeil mérite une attention particulière. Une routine plus stable pourrait améliorer votre récupération.":
      "Your sleep deserves special attention. A more stable routine could improve your recovery.",
    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Avoid extending your days simply to finish a task that could wait.",
    "Votre corps pourrait avoir besoin de davantage de repos que d’habitude. Ne considérez pas cela comme un manque de motivation.":
      "Your body may need more rest than usual. Do not interpret this as a lack of motivation.",
    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "A better transition between activity and sleep could reduce accumulated tension.",
    "Le mois favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "The month favors planned breaks rather than stops imposed by fatigue.",
    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "You may benefit from a calmer environment before bedtime.",
    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "A short daytime rest period could be helpful if it does not disrupt your nighttime sleep.",
    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Your recovery will improve if you limit stimulation late in the evening.",
    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "Mental rest will be just as important as physical rest. Step away regularly from screens and worries.",
    "Une nuit réparatrice pourrait changer complètement votre perception d’une situation difficile.":
      "A restorative night's sleep could completely change your perception of a difficult situation.",
    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité.":
      "A new simple habit could improve your well-being if you repeat it consistently.",
    "Le mois convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "The month is well suited to gradually resuming physical activity or a self-care routine.",
    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Avoid trying to transform all your habits at once. Choose one priority change.",
    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Better hydration and more regular meals could support your energy.",
    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Your motivation will increase if your routine remains realistic and enjoyable.",
    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "You may notice that a seemingly ordinary habit strongly influences your mood.",
    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "A simpler organization of your days will reduce fatigue caused by repeated decisions.",
    "Le mois favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "The month favors steady progress rather than short bursts of intense effort.",
    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Prepare your environment so that it supports the habits you want to maintain.",
    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Your well-being will improve when your daily actions align more closely with your true needs.",
    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "The main challenge will be not to ignore your fatigue simply because certain responsibilities seem urgent.",
    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "You may tend to exceed your limits and then lose several days recovering.",
    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Emotional tension could manifest physically if it remains contained for too long.",
    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "A lack of regularity could make your energy more unstable.",
    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "You may want to return to a high level of performance too quickly.",
    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "The need to meet other people's expectations could lead you to neglect your own needs.",
    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Poor sleep quality could reduce your patience and concentration.",
    "Le défi consistera à accepter de ralentir sans vous juger.":
      "The challenge will be to accept slowing down without judging yourself.",
    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "You may confuse rest with complete inactivity. Gentle movement could sometimes do you more good.",
    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "Accumulated stress could push you toward habits that provide immediate relief but leave you more tired afterward.",
    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Plan your periods of rest with as much seriousness as your other obligations.",
    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Listen to the first signs of fatigue instead of waiting until they become impossible to ignore.",
    "Choisissez une routine simple que vous pourrez réellement maintenir tout le mois.":
      "Choose a simple routine that you can realistically maintain throughout the month.",
    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduce unnecessary stimulation when you feel your energy declining.",
    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Take a few minutes each day to breathe, walk, or step away from noise.",
    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Avoid measuring your worth by your level of productivity.",
    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respect your physical needs even when they do not match other people's pace.",
    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Create an environment that supports calm, sleep, and recovery.",
    "Cherchez la régularité plutôt que la perfection.":
      "Seek consistency rather than perfection.",
    "Accordez-vous le droit de modifier votre programme lorsqu’une journée demande davantage de douceur.":
      "Give yourself permission to change your schedule when a day requires more gentleness.",
    "Ce mois peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "This month can help you regain more stable energy if you respect your personal rhythm more fully.",
    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Your well-being will improve through simple, consistent choices adapted to your true needs.",
    "Les prochaines semaines vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "The coming weeks will remind you that rest is an essential part of your balance.",
    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Listening more closely to your body will help you prevent several periods of unnecessary fatigue.",
    "Vous pourriez terminer le mois avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "You may end the month with a more soothing routine and a better understanding of your limits.",
    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Your vitality will increase as you reduce avoidable sources of stress.",
    "Ce mois vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "This month gives you an opportunity to rebuild your energy on stronger foundations.",
    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "A better balance between action and recovery will improve your overall state.",
    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Your body and mind will regain greater harmony when you stop fighting against your own rhythm.",
    "En prenant soin de votre énergie dès maintenant, vous préparerez un mois suivant plus dynamique.":
      "By taking care of your energy now, you will prepare for a more dynamic month ahead.",
  },
  es: {
    "Votre bien-être dépendra ce mois-ci de votre capacité à respecter votre rythme réel. Votre énergie pourrait varier davantage selon les jours.":
      "Su bienestar este mes dependerá de su capacidad para respetar su ritmo real. Su energía podría variar más de un día a otro.",
    "Les prochaines semaines vous invitent à mieux écouter les signaux de votre corps. Un ralentissement ponctuel pourrait vous aider à retrouver un meilleur équilibre.":
      "Las próximas semanas le invitan a escuchar mejor las señales de su cuerpo. Una desaceleración puntual podría ayudarle a recuperar un mejor equilibrio.",
    "Ce mois met l’accent sur la récupération, la qualité du repos et la gestion de votre énergie quotidienne.":
      "Este mes pone el acento en la recuperación, la calidad del descanso y la gestión de su energía diaria.",
    "Votre équilibre physique et émotionnel demande davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Su equilibrio físico y emocional requiere más constancia. Los pequeños hábitos repetidos tendrán más efecto que los cambios bruscos.",
    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Comienza un período de recentramiento. Podría sentir la necesidad de proteger mejor su sueño, su calma y sus momentos de recuperación.",
    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Su vitalidad podría mejorar si acepta simplificar ciertas obligaciones y reducir las fuentes de cansancio innecesarias.",
    "Le mois vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "El mes le anima a cuidarse antes de que el cansancio se vuelva demasiado importante.",
    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer la fatigue passagère d’un besoin réel de repos.":
      "Su cuerpo podría pedirle más atención. Será útil distinguir el cansancio pasajero de una necesidad real de descanso.",
    "Une meilleure hygiène de vie pourrait rapidement améliorer votre énergie et votre humeur au cours des prochaines semaines.":
      "Una mejor higiene de vida podría mejorar rápidamente su energía y su estado de ánimo durante las próximas semanas.",
    "Ce mois vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Este mes le ayuda a recuperar un equilibrio más estable entre actividad, descanso y bienestar emocional.",
    "Votre énergie pourrait être plus forte en début de journée. Profitez de ces moments pour accomplir les tâches les plus exigeantes.":
      "Su energía podría ser más fuerte al comienzo del día. Aproveche esos momentos para realizar las tareas más exigentes.",
    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Podría aparecer una disminución de vitalidad después de un período demasiado cargado. Evite esperar al agotamiento antes de reducir el ritmo.",
    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Su nivel de energía estará estrechamente relacionado con la calidad de su sueño y la regularidad de sus hábitos.",
    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Podría atravesar períodos de impulso seguidos de momentos más tranquilos. Respete esta alternancia sin culpa.",
    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Una actividad física moderada podría ayudarle a recuperar más vitalidad y claridad mental.",
    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Su energía aumentará cuando deje de dispersarse en tareas secundarias.",
    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Podría sentir la necesidad de moverse más. Elija una actividad agradable en lugar de una disciplina demasiado exigente.",
    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps.":
      "Un ritmo más regular le permitirá conservar su energía durante más tiempo.",
    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Su vitalidad podría verse influida por su entorno. La calma, el aire fresco y el orden le sentarán bien.",
    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Le convendrá prever pausas antes de que disminuyan su concentración y su paciencia.",
    "Votre sensibilité pourrait être plus forte ce mois-ci. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Su sensibilidad podría ser más fuerte este mes. Tome distancia antes de reaccionar ante una situación cargada emocionalmente.",
    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Una emoción antigua podría reaparecer para ser comprendida de otra manera.",
    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Podría absorber más fácilmente las tensiones de los demás. Proteja su espacio interior.",
    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "La calma volverá cuando deje de intentar resolver inmediatamente cada incomodidad.",
    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée.":
      "Una conversación sincera podría aliviar una presión emocional acumulada.",
    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Su equilibrio dependerá de su capacidad para expresar sus necesidades antes de alcanzar su límite.",
    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Podría sentir una mayor necesidad de soledad o silencio. Respétela sin aislarse por completo.",
    "Un changement d’environnement pourrait vous aider à retrouver une meilleure perspective.":
      "Un cambio de entorno podría ayudarle a recuperar una mejor perspectiva.",
    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Su estado de ánimo podría mejorar gracias a una rutina sencilla y tranquilizadora.",
    "Le mois vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "El mes le invita a dar más espacio a las actividades que realmente le aportan calma.",
    "Votre sommeil mérite une attention particulière. Une routine plus stable pourrait améliorer votre récupération.":
      "Su sueño merece una atención especial. Una rutina más estable podría mejorar su recuperación.",
    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Evite alargar sus jornadas simplemente para terminar una tarea que podría esperar.",
    "Votre corps pourrait avoir besoin de davantage de repos que d’habitude. Ne considérez pas cela comme un manque de motivation.":
      "Su cuerpo podría necesitar más descanso de lo habitual. No lo considere una falta de motivación.",
    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Una mejor transición entre actividad y sueño podría reducir las tensiones acumuladas.",
    "Le mois favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "El mes favorece las pausas planificadas en lugar de los descansos impuestos por el cansancio.",
    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Podría beneficiarse de un entorno más tranquilo antes de acostarse.",
    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Un breve período de descanso durante el día podría ser útil si no altera su sueño nocturno.",
    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Su recuperación será mejor si limita los estímulos al final de la noche.",
    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "El descanso mental será tan importante como el descanso físico. Aléjese regularmente de las pantallas y de las preocupaciones.",
    "Une nuit réparatrice pourrait changer complètement votre perception d’une situation difficile.":
      "Una noche reparadora podría cambiar por completo su percepción de una situación difícil.",
    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité.":
      "Un nuevo hábito sencillo podría mejorar su bienestar si lo repite con regularidad.",
    "Le mois convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "El mes es adecuado para retomar progresivamente una actividad física o una rutina de cuidado.",
    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Evite querer transformar todos sus hábitos al mismo tiempo. Elija un solo cambio prioritario.",
    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Una mejor hidratación y comidas más regulares podrían apoyar su energía.",
    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Su motivación aumentará si su rutina se mantiene realista y agradable.",
    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Podría descubrir que un hábito aparentemente banal influye mucho en su estado de ánimo.",
    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Una organización más sencilla de sus días reducirá el cansancio relacionado con decisiones repetidas.",
    "Le mois favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "El mes favorece los progresos constantes en lugar de los esfuerzos intensos de corta duración.",
    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Prepare su entorno para que facilite los hábitos que desea conservar.",
    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Su bienestar mejorará cuando sus acciones cotidianas se ajusten más a sus necesidades reales.",
    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "El principal desafío será no ignorar su cansancio con el pretexto de que ciertas responsabilidades parecen urgentes.",
    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Podría tender a superar sus límites y luego perder varios días recuperándose.",
    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Una tensión emocional podría manifestarse físicamente si permanece contenida demasiado tiempo.",
    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "La falta de regularidad podría volver su energía más inestable.",
    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Podría querer recuperar demasiado rápido un nivel alto de rendimiento.",
    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "La necesidad de responder a las expectativas de los demás podría hacerle descuidar sus propias necesidades.",
    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Una mala calidad del sueño podría disminuir su paciencia y su concentración.",
    "Le défi consistera à accepter de ralentir sans vous juger.":
      "El desafío consistirá en aceptar reducir el ritmo sin juzgarse.",
    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Podría confundir descanso con inmovilidad total. Un movimiento suave podría hacerle más bien en ciertos momentos.",
    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "El estrés acumulado podría llevarle a adoptar hábitos que alivian en el momento, pero que cansan más después.",
    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Planifique sus momentos de descanso con tanta seriedad como sus demás obligaciones.",
    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Escuche las primeras señales de cansancio en lugar de esperar a que sean imposibles de ignorar.",
    "Choisissez une routine simple que vous pourrez réellement maintenir tout le mois.":
      "Elija una rutina sencilla que realmente pueda mantener durante todo el mes.",
    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduzca los estímulos innecesarios cuando sienta que su energía disminuye.",
    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Tómese unos minutos cada día para respirar, caminar o alejarse del ruido.",
    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Evite medir su valor según su nivel de productividad.",
    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respete sus necesidades físicas incluso cuando no coincidan con el ritmo de los demás.",
    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Cree un entorno que favorezca la calma, el sueño y la recuperación.",
    "Cherchez la régularité plutôt que la perfection.":
      "Busque la regularidad en lugar de la perfección.",
    "Accordez-vous le droit de modifier votre programme lorsqu’une journée demande davantage de douceur.":
      "Permítase modificar su programa cuando un día requiera más suavidad.",
    "Ce mois peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Este mes puede ayudarle a recuperar una energía más estable si respeta mejor su ritmo personal.",
    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Su bienestar progresará gracias a decisiones sencillas, constantes y adaptadas a sus necesidades reales.",
    "Les prochaines semaines vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "Las próximas semanas le recordarán que el descanso es una parte esencial de su equilibrio.",
    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Escuchar mejor a su cuerpo le permitirá prevenir varios períodos de cansancio innecesario.",
    "Vous pourriez terminer le mois avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Podría terminar el mes con una rutina más calmante y una mejor comprensión de sus límites.",
    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Su vitalidad aumentará a medida que reduzca las fuentes de estrés evitables.",
    "Ce mois vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Este mes le ofrece la oportunidad de reconstruir su energía sobre bases más sólidas.",
    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Un mejor equilibrio entre acción y recuperación mejorará su estado general.",
    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Su cuerpo y su mente recuperarán más armonía cuando deje de luchar contra su propio ritmo.",
    "En prenant soin de votre énergie dès maintenant, vous préparerez un mois suivant plus dynamique.":
      "Al cuidar su energía desde ahora, preparará un mes siguiente más dinámico.",
  },
  de: {
    "Votre bien-être dépendra ce mois-ci de votre capacité à respecter votre rythme réel. Votre énergie pourrait varier davantage selon les jours.":
      "Ihr Wohlbefinden hängt diesen Monat davon ab, wie gut Sie Ihren tatsächlichen Rhythmus respektieren. Ihre Energie könnte von Tag zu Tag stärker schwanken.",
    "Les prochaines semaines vous invitent à mieux écouter les signaux de votre corps. Un ralentissement ponctuel pourrait vous aider à retrouver un meilleur équilibre.":
      "Die kommenden Wochen laden Sie dazu ein, die Signale Ihres Körpers besser wahrzunehmen. Eine vorübergehende Verlangsamung könnte Ihnen helfen, wieder mehr Gleichgewicht zu finden.",
    "Ce mois met l’accent sur la récupération, la qualité du repos et la gestion de votre énergie quotidienne.":
      "Dieser Monat legt den Schwerpunkt auf Erholung, die Qualität des Schlafs und den Umgang mit Ihrer täglichen Energie.",
    "Votre équilibre physique et émotionnel demande davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Ihr körperliches und emotionales Gleichgewicht braucht mehr Beständigkeit. Kleine, regelmäßig wiederholte Gewohnheiten wirken stärker als abrupte Veränderungen.",
    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Eine Phase der Neuausrichtung beginnt. Sie könnten das Bedürfnis verspüren, Ihren Schlaf, Ihre Ruhe und Ihre Erholungszeiten besser zu schützen.",
    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Ihre Vitalität könnte sich verbessern, wenn Sie bestimmte Verpflichtungen vereinfachen und unnötige Ermüdungsquellen reduzieren.",
    "Le mois vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "Der Monat ermutigt Sie, gut für sich zu sorgen, bevor die Müdigkeit zu stark wird.",
    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer la fatigue passagère d’un besoin réel de repos.":
      "Ihr Körper könnte mehr Aufmerksamkeit verlangen. Es ist hilfreich, vorübergehende Müdigkeit von einem echten Erholungsbedarf zu unterscheiden.",
    "Une meilleure hygiène de vie pourrait rapidement améliorer votre énergie et votre humeur au cours des prochaines semaines.":
      "Ein gesünderer Lebensstil könnte Ihre Energie und Stimmung in den kommenden Wochen schnell verbessern.",
    "Ce mois vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Dieser Monat hilft Ihnen, ein stabileres Gleichgewicht zwischen Aktivität, Ruhe und emotionalem Wohlbefinden wiederzufinden.",
    "Votre énergie pourrait être plus forte en début de journée. Profitez de ces moments pour accomplir les tâches les plus exigeantes.":
      "Ihre Energie könnte zu Beginn des Tages stärker sein. Nutzen Sie diese Momente für die anspruchsvollsten Aufgaben.",
    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Nach einer sehr belastenden Phase könnte Ihre Vitalität sinken. Warten Sie nicht bis zur Erschöpfung, bevor Sie langsamer werden.",
    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Ihr Energieniveau hängt eng mit der Qualität Ihres Schlafs und der Regelmäßigkeit Ihrer Gewohnheiten zusammen.",
    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Sie könnten Phasen mit viel Schwung erleben, gefolgt von ruhigeren Momenten. Respektieren Sie diesen Wechsel ohne Schuldgefühle.",
    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Moderate körperliche Aktivität könnte Ihnen helfen, mehr Vitalität und geistige Klarheit zurückzugewinnen.",
    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Ihre Energie steigt, wenn Sie aufhören, sich mit nebensächlichen Aufgaben zu verzetteln.",
    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Sie könnten das Bedürfnis verspüren, sich mehr zu bewegen. Wählen Sie eine angenehme Aktivität statt einer zu anspruchsvollen Disziplin.",
    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps.":
      "Ein regelmäßigerer Rhythmus hilft Ihnen, Ihre Energie länger zu bewahren.",
    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Ihre Vitalität könnte von Ihrer Umgebung beeinflusst werden. Ruhe, frische Luft und Ordnung tun Ihnen gut.",
    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Planen Sie Pausen ein, bevor Konzentration und Geduld nachlassen.",
    "Votre sensibilité pourrait être plus forte ce mois-ci. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Ihre Sensibilität könnte diesen Monat stärker sein. Nehmen Sie Abstand, bevor Sie auf eine emotional aufgeladene Situation reagieren.",
    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Eine alte Emotion könnte wieder auftauchen, um anders verstanden zu werden.",
    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Sie könnten die Spannungen anderer leichter aufnehmen. Schützen Sie Ihren inneren Raum.",
    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "Ruhe kehrt zurück, wenn Sie aufhören, jedes Unbehagen sofort lösen zu wollen.",
    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée.":
      "Ein ehrliches Gespräch könnte angesammelten emotionalen Druck lindern.",
    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Ihr Gleichgewicht hängt davon ab, dass Sie Ihre Bedürfnisse äußern, bevor Sie Ihre Grenze erreichen.",
    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Sie könnten ein größeres Bedürfnis nach Alleinsein oder Stille verspüren. Respektieren Sie es, ohne sich vollständig zu isolieren.",
    "Un changement d’environnement pourrait vous aider à retrouver une meilleure perspective.":
      "Ein Wechsel der Umgebung könnte Ihnen helfen, wieder eine bessere Perspektive zu gewinnen.",
    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Ihre Stimmung könnte sich durch eine einfache und beruhigende Routine verbessern.",
    "Le mois vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "Der Monat lädt Sie dazu ein, Aktivitäten mehr Raum zu geben, die Sie wirklich beruhigen.",
    "Votre sommeil mérite une attention particulière. Une routine plus stable pourrait améliorer votre récupération.":
      "Ihr Schlaf verdient besondere Aufmerksamkeit. Eine stabilere Routine könnte Ihre Erholung verbessern.",
    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Verlängern Sie Ihre Tage nicht nur, um eine Aufgabe zu beenden, die warten könnte.",
    "Votre corps pourrait avoir besoin de davantage de repos que d’habitude. Ne considérez pas cela comme un manque de motivation.":
      "Ihr Körper könnte mehr Ruhe brauchen als gewöhnlich. Betrachten Sie das nicht als mangelnde Motivation.",
    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Ein besserer Übergang zwischen Aktivität und Schlaf könnte angesammelte Spannungen reduzieren.",
    "Le mois favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "Der Monat begünstigt geplante Pausen statt Unterbrechungen, die durch Erschöpfung erzwungen werden.",
    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Eine ruhigere Umgebung vor dem Schlafengehen könnte Ihnen guttun.",
    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Eine kurze Ruhephase am Tag könnte hilfreich sein, sofern sie Ihren Nachtschlaf nicht stört.",
    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Ihre Erholung wird besser, wenn Sie spät am Abend Reize begrenzen.",
    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "Mentale Erholung ist genauso wichtig wie körperliche Ruhe. Nehmen Sie regelmäßig Abstand von Bildschirmen und Sorgen.",
    "Une nuit réparatrice pourrait changer complètement votre perception d’une situation difficile.":
      "Eine erholsame Nacht könnte Ihre Sicht auf eine schwierige Situation völlig verändern.",
    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité.":
      "Eine neue einfache Gewohnheit könnte Ihr Wohlbefinden verbessern, wenn Sie sie regelmäßig wiederholen.",
    "Le mois convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "Der Monat eignet sich gut, um körperliche Aktivität oder eine Pflegeroutine schrittweise wieder aufzunehmen.",
    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Versuchen Sie nicht, alle Gewohnheiten gleichzeitig zu verändern. Wählen Sie eine einzige vorrangige Veränderung.",
    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Eine bessere Flüssigkeitszufuhr und regelmäßigere Mahlzeiten könnten Ihre Energie unterstützen.",
    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Ihre Motivation steigt, wenn Ihre Routine realistisch und angenehm bleibt.",
    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Sie könnten feststellen, dass eine scheinbar banale Gewohnheit Ihre Stimmung stark beeinflusst.",
    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Eine einfachere Organisation Ihrer Tage verringert die Müdigkeit durch wiederholte Entscheidungen.",
    "Le mois favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "Der Monat begünstigt stetige Fortschritte statt kurzer, intensiver Anstrengungen.",
    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Gestalten Sie Ihre Umgebung so, dass sie die Gewohnheiten unterstützt, die Sie beibehalten möchten.",
    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Ihr Wohlbefinden verbessert sich, wenn Ihre täglichen Handlungen besser zu Ihren tatsächlichen Bedürfnissen passen.",
    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "Die größte Herausforderung besteht darin, Ihre Müdigkeit nicht zu ignorieren, nur weil manche Verpflichtungen dringend erscheinen.",
    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Sie könnten dazu neigen, Ihre Grenzen zu überschreiten und anschließend mehrere Tage zur Erholung zu benötigen.",
    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Emotionale Anspannung könnte sich körperlich zeigen, wenn sie zu lange zurückgehalten wird.",
    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "Fehlende Regelmäßigkeit könnte Ihre Energie instabiler machen.",
    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Sie könnten zu schnell wieder ein hohes Leistungsniveau erreichen wollen.",
    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "Das Bedürfnis, die Erwartungen anderer zu erfüllen, könnte dazu führen, dass Sie Ihre eigenen Bedürfnisse vernachlässigen.",
    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Schlechter Schlaf könnte Ihre Geduld und Konzentration verringern.",
    "Le défi consistera à accepter de ralentir sans vous juger.":
      "Die Herausforderung besteht darin, langsamer zu werden, ohne sich dafür zu verurteilen.",
    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Sie könnten Ruhe mit völliger Untätigkeit verwechseln. Sanfte Bewegung könnte Ihnen manchmal besser tun.",
    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "Angesammelter Stress könnte Sie zu Gewohnheiten verleiten, die kurzfristig entlasten, danach aber noch müder machen.",
    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Planen Sie Ihre Ruhezeiten mit derselben Ernsthaftigkeit wie Ihre anderen Verpflichtungen.",
    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Achten Sie auf die ersten Anzeichen von Müdigkeit, statt zu warten, bis sie nicht mehr zu ignorieren sind.",
    "Choisissez une routine simple que vous pourrez réellement maintenir tout le mois.":
      "Wählen Sie eine einfache Routine, die Sie den ganzen Monat realistisch beibehalten können.",
    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduzieren Sie unnötige Reize, wenn Sie spüren, dass Ihre Energie nachlässt.",
    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Nehmen Sie sich jeden Tag ein paar Minuten zum Atmen, Gehen oder um Abstand vom Lärm zu gewinnen.",
    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Messen Sie Ihren Wert nicht an Ihrem Produktivitätsniveau.",
    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respektieren Sie Ihre körperlichen Bedürfnisse, auch wenn sie nicht dem Rhythmus anderer entsprechen.",
    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Schaffen Sie eine Umgebung, die Ruhe, Schlaf und Erholung unterstützt.",
    "Cherchez la régularité plutôt que la perfection.":
      "Streben Sie nach Regelmäßigkeit statt Perfektion.",
    "Accordez-vous le droit de modifier votre programme lorsqu’une journée demande davantage de douceur.":
      "Erlauben Sie sich, Ihren Plan zu ändern, wenn ein Tag mehr Sanftheit verlangt.",
    "Ce mois peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Dieser Monat kann Ihnen helfen, wieder stabilere Energie zu finden, wenn Sie Ihren persönlichen Rhythmus stärker respektieren.",
    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Ihr Wohlbefinden verbessert sich durch einfache, beständige Entscheidungen, die zu Ihren tatsächlichen Bedürfnissen passen.",
    "Les prochaines semaines vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "Die kommenden Wochen erinnern Sie daran, dass Ruhe ein wesentlicher Teil Ihres Gleichgewichts ist.",
    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Wenn Sie besser auf Ihren Körper hören, können Sie mehrere Phasen unnötiger Müdigkeit vermeiden.",
    "Vous pourriez terminer le mois avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Sie könnten den Monat mit einer beruhigenderen Routine und einem besseren Verständnis Ihrer Grenzen beenden.",
    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Ihre Vitalität steigt, wenn Sie vermeidbare Stressquellen reduzieren.",
    "Ce mois vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Dieser Monat bietet Ihnen die Gelegenheit, Ihre Energie auf einer solideren Grundlage neu aufzubauen.",
    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Ein besseres Gleichgewicht zwischen Aktivität und Erholung verbessert Ihr allgemeines Befinden.",
    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Ihr Körper und Ihr Geist finden mehr Harmonie, wenn Sie aufhören, gegen Ihren eigenen Rhythmus anzukämpfen.",
    "En prenant soin de votre énergie dès maintenant, vous préparerez un mois suivant plus dynamique.":
      "Wenn Sie jetzt gut auf Ihre Energie achten, bereiten Sie einen dynamischeren kommenden Monat vor.",
  },
  it: {
    "Votre bien-être dépendra ce mois-ci de votre capacité à respecter votre rythme réel. Votre énergie pourrait varier davantage selon les jours.":
      "Il tuo benessere questo mese dipenderà dalla capacità di rispettare il tuo vero ritmo. La tua energia potrebbe variare maggiormente da un giorno all'altro.",
    "Les prochaines semaines vous invitent à mieux écouter les signaux de votre corps. Un ralentissement ponctuel pourrait vous aider à retrouver un meilleur équilibre.":
      "Le prossime settimane ti invitano ad ascoltare meglio i segnali del tuo corpo. Un rallentamento momentaneo potrebbe aiutarti a ritrovare un equilibrio migliore.",
    "Ce mois met l’accent sur la récupération, la qualité du repos et la gestion de votre énergie quotidienne.":
      "Questo mese mette l'accento sul recupero, sulla qualità del riposo e sulla gestione della tua energia quotidiana.",
    "Votre équilibre physique et émotionnel demande davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Il tuo equilibrio fisico ed emotivo richiede maggiore costanza. Piccole abitudini ripetute avranno più effetto dei cambiamenti bruschi.",
    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Inizia un periodo di ricentratura. Potresti sentire il bisogno di proteggere meglio il sonno, la calma e i momenti di recupero.",
    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "La tua vitalità potrebbe migliorare se accetti di semplificare alcuni impegni e ridurre le fonti di stanchezza inutili.",
    "Le mois vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "Il mese ti incoraggia a prenderti cura di te prima che la stanchezza diventi troppo importante.",
    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer la fatigue passagère d’un besoin réel de repos.":
      "Il tuo corpo potrebbe chiederti più attenzione. Sarà utile distinguere la stanchezza passeggera da un reale bisogno di riposo.",
    "Une meilleure hygiène de vie pourrait rapidement améliorer votre énergie et votre humeur au cours des prochaines semaines.":
      "Uno stile di vita più sano potrebbe migliorare rapidamente la tua energia e il tuo umore nelle prossime settimane.",
    "Ce mois vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Questo mese ti aiuta a ritrovare un equilibrio più stabile tra attività, riposo e benessere emotivo.",
    "Votre énergie pourrait être plus forte en début de journée. Profitez de ces moments pour accomplir les tâches les plus exigeantes.":
      "La tua energia potrebbe essere più forte all'inizio della giornata. Approfitta di questi momenti per svolgere i compiti più impegnativi.",
    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Un calo di vitalità potrebbe comparire dopo un periodo troppo intenso. Evita di aspettare l'esaurimento prima di rallentare.",
    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Il tuo livello di energia sarà strettamente legato alla qualità del sonno e alla regolarità delle abitudini.",
    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Potresti vivere periodi di slancio seguiti da momenti più tranquilli. Rispetta questa alternanza senza sensi di colpa.",
    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Un'attività fisica moderata potrebbe aiutarti a ritrovare maggiore tono e chiarezza mentale.",
    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "La tua energia aumenterà quando smetterai di disperderti in attività secondarie.",
    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Potresti sentire il bisogno di muoverti di più. Scegli un'attività piacevole piuttosto che una disciplina troppo impegnativa.",
    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps.":
      "Un ritmo più regolare ti permetterà di conservare più a lungo la tua energia.",
    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "La tua vitalità potrebbe essere influenzata dall'ambiente. Calma, aria fresca e ordine ti faranno bene.",
    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Ti sarà utile prevedere delle pause prima che concentrazione e pazienza diminuiscano.",
    "Votre sensibilité pourrait être plus forte ce mois-ci. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "La tua sensibilità potrebbe essere più forte questo mese. Prenditi un po' di distanza prima di reagire a una situazione emotivamente intensa.",
    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Un'emozione del passato potrebbe riaffiorare per essere compresa in modo diverso.",
    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Potresti assorbire più facilmente le tensioni degli altri. Proteggi il tuo spazio interiore.",
    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "La calma tornerà quando smetterai di cercare di risolvere immediatamente ogni disagio.",
    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée.":
      "Una conversazione sincera potrebbe alleggerire una pressione emotiva accumulata.",
    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Il tuo equilibrio dipenderà dalla capacità di esprimere i tuoi bisogni prima di raggiungere il limite.",
    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Potresti sentire un maggiore bisogno di solitudine o silenzio. Rispettalo senza isolarti completamente.",
    "Un changement d’environnement pourrait vous aider à retrouver une meilleure perspective.":
      "Un cambiamento di ambiente potrebbe aiutarti a ritrovare una prospettiva migliore.",
    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Il tuo umore potrebbe migliorare grazie a una routine semplice e rassicurante.",
    "Le mois vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "Il mese ti invita a dare più spazio alle attività che ti calmano davvero.",
    "Votre sommeil mérite une attention particulière. Une routine plus stable pourrait améliorer votre récupération.":
      "Il tuo sonno merita un'attenzione particolare. Una routine più stabile potrebbe migliorare il recupero.",
    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Evita di prolungare le giornate solo per terminare un compito che potrebbe aspettare.",
    "Votre corps pourrait avoir besoin de davantage de repos que d’habitude. Ne considérez pas cela comme un manque de motivation.":
      "Il tuo corpo potrebbe aver bisogno di più riposo del solito. Non considerarlo una mancanza di motivazione.",
    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Una migliore transizione tra attività e sonno potrebbe ridurre le tensioni accumulate.",
    "Le mois favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "Il mese favorisce le pause pianificate piuttosto che gli arresti imposti dalla stanchezza.",
    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Potresti beneficiare di un ambiente più tranquillo prima di andare a dormire.",
    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Un breve periodo di riposo durante il giorno potrebbe essere utile se non disturba il sonno notturno.",
    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Il tuo recupero sarà migliore se limiterai gli stimoli nelle ore tarde della sera.",
    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "Il riposo mentale sarà importante quanto quello fisico. Allontanati regolarmente dagli schermi e dalle preoccupazioni.",
    "Une nuit réparatrice pourrait changer complètement votre perception d’une situation difficile.":
      "Una notte davvero riposante potrebbe cambiare completamente la tua percezione di una situazione difficile.",
    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité.":
      "Una nuova abitudine semplice potrebbe migliorare il tuo benessere se la ripeti con regolarità.",
    "Le mois convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "Il mese è adatto a riprendere gradualmente un'attività fisica o una routine di cura.",
    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Evita di voler trasformare tutte le abitudini nello stesso momento. Scegli un solo cambiamento prioritario.",
    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Una migliore idratazione e pasti più regolari potrebbero sostenere la tua energia.",
    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "La tua motivazione aumenterà se la routine rimane realistica e piacevole.",
    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Potresti accorgerti che un'abitudine apparentemente banale influenza molto il tuo umore.",
    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Un'organizzazione più semplice delle giornate ridurrà la stanchezza legata alle decisioni ripetute.",
    "Le mois favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "Il mese favorisce progressi costanti invece di sforzi intensi di breve durata.",
    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Prepara il tuo ambiente in modo che faciliti le abitudini che desideri mantenere.",
    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Il tuo benessere migliorerà quando i gesti quotidiani corrisponderanno maggiormente ai tuoi reali bisogni.",
    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "La sfida principale sarà non ignorare la stanchezza solo perché alcune responsabilità sembrano urgenti.",
    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Potresti avere la tendenza a superare i tuoi limiti e poi impiegare diversi giorni per recuperare.",
    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Una tensione emotiva potrebbe manifestarsi fisicamente se rimane trattenuta troppo a lungo.",
    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "La mancanza di regolarità potrebbe rendere la tua energia più instabile.",
    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Potresti voler recuperare troppo rapidamente un livello elevato di prestazione.",
    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "Il bisogno di rispondere alle aspettative degli altri potrebbe farti trascurare i tuoi bisogni.",
    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Una scarsa qualità del sonno potrebbe ridurre la tua pazienza e concentrazione.",
    "Le défi consistera à accepter de ralentir sans vous juger.":
      "La sfida sarà accettare di rallentare senza giudicarti.",
    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Potresti confondere il riposo con l'immobilità totale. Un movimento dolce potrebbe talvolta farti più bene.",
    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "Lo stress accumulato potrebbe spingerti verso abitudini che danno sollievo sul momento, ma aumentano la stanchezza in seguito.",
    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Pianifica i momenti di riposo con la stessa serietà degli altri impegni.",
    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Ascolta i primi segnali di stanchezza invece di aspettare che diventino impossibili da ignorare.",
    "Choisissez une routine simple que vous pourrez réellement maintenir tout le mois.":
      "Scegli una routine semplice che tu possa realmente mantenere per tutto il mese.",
    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Riduci gli stimoli inutili quando senti diminuire la tua energia.",
    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Prenditi qualche minuto ogni giorno per respirare, camminare o allontanarti dal rumore.",
    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Evita di misurare il tuo valore in base al livello di produttività.",
    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Rispetta i tuoi bisogni fisici anche quando non corrispondono al ritmo degli altri.",
    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Crea un ambiente che favorisca calma, sonno e recupero.",
    "Cherchez la régularité plutôt que la perfection.":
      "Cerca la costanza piuttosto che la perfezione.",
    "Accordez-vous le droit de modifier votre programme lorsqu’une journée demande davantage de douceur.":
      "Concediti il diritto di modificare il programma quando una giornata richiede maggiore dolcezza.",
    "Ce mois peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Questo mese può aiutarti a ritrovare un'energia più stabile se rispetti maggiormente il tuo ritmo personale.",
    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Il tuo benessere migliorerà grazie a scelte semplici, costanti e adatte ai tuoi reali bisogni.",
    "Les prochaines semaines vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "Le prossime settimane ti ricorderanno che il riposo è una parte essenziale del tuo equilibrio.",
    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Un ascolto migliore del tuo corpo ti permetterà di prevenire diversi periodi di stanchezza inutile.",
    "Vous pourriez terminer le mois avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Potresti concludere il mese con una routine più rilassante e una migliore comprensione dei tuoi limiti.",
    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "La tua vitalità aumenterà man mano che ridurrai le fonti di stress evitabili.",
    "Ce mois vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Questo mese ti offre l'opportunità di ricostruire la tua energia su basi più solide.",
    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Un equilibrio migliore tra azione e recupero migliorerà il tuo stato generale.",
    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Il tuo corpo e la tua mente ritroveranno maggiore armonia quando smetterai di lottare contro il tuo ritmo.",
    "En prenant soin de votre énergie dès maintenant, vous préparerez un mois suivant plus dynamique.":
      "Prendendoti cura della tua energia fin da ora, preparerai un mese successivo più dinamico.",
  },
  pt: {
    "Votre bien-être dépendra ce mois-ci de votre capacité à respecter votre rythme réel. Votre énergie pourrait varier davantage selon les jours.":
      "Seu bem-estar neste mês dependerá de sua capacidade de respeitar seu ritmo real. Sua energia poderá variar mais de um dia para o outro.",
    "Les prochaines semaines vous invitent à mieux écouter les signaux de votre corps. Un ralentissement ponctuel pourrait vous aider à retrouver un meilleur équilibre.":
      "As próximas semanas convidam você a ouvir melhor os sinais do seu corpo. Uma desaceleração pontual poderá ajudar a recuperar um equilíbrio melhor.",
    "Ce mois met l’accent sur la récupération, la qualité du repos et la gestion de votre énergie quotidienne.":
      "Este mês destaca a recuperação, a qualidade do descanso e a gestão de sua energia diária.",
    "Votre équilibre physique et émotionnel demande davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Seu equilíbrio físico e emocional exige mais constância. Pequenos hábitos repetidos terão mais efeito do que mudanças bruscas.",
    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Começa um período de recentramento. Você poderá sentir a necessidade de proteger melhor seu sono, sua calma e seus momentos de recuperação.",
    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Sua vitalidade poderá melhorar se você aceitar simplificar algumas obrigações e reduzir fontes desnecessárias de cansaço.",
    "Le mois vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "O mês incentiva você a cuidar de si antes que o cansaço se torne excessivo.",
    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer la fatigue passagère d’un besoin réel de repos.":
      "Seu corpo poderá pedir mais atenção. Será útil distinguir o cansaço passageiro de uma necessidade real de descanso.",
    "Une meilleure hygiène de vie pourrait rapidement améliorer votre énergie et votre humeur au cours des prochaines semaines.":
      "Um estilo de vida mais saudável poderá melhorar rapidamente sua energia e seu humor nas próximas semanas.",
    "Ce mois vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Este mês ajuda você a recuperar um equilíbrio mais estável entre atividade, descanso e bem-estar emocional.",
    "Votre énergie pourrait être plus forte en début de journée. Profitez de ces moments pour accomplir les tâches les plus exigeantes.":
      "Sua energia poderá estar mais forte no início do dia. Aproveite esses momentos para realizar as tarefas mais exigentes.",
    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Uma queda de vitalidade poderá aparecer após um período muito carregado. Evite esperar pelo esgotamento antes de desacelerar.",
    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Seu nível de energia estará estreitamente ligado à qualidade do sono e à regularidade de seus hábitos.",
    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Você poderá passar por períodos de impulso seguidos de momentos mais tranquilos. Respeite essa alternância sem culpa.",
    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Uma atividade física moderada poderá ajudar você a recuperar mais disposição e clareza mental.",
    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Sua energia aumentará quando você parar de se dispersar em tarefas secundárias.",
    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Você poderá sentir necessidade de se movimentar mais. Escolha uma atividade agradável em vez de uma disciplina exigente demais.",
    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps.":
      "Um ritmo mais regular permitirá conservar sua energia por mais tempo.",
    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Sua vitalidade poderá ser influenciada pelo ambiente. Calma, ar fresco e organização farão bem a você.",
    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Será útil programar pausas antes que sua concentração e paciência diminuam.",
    "Votre sensibilité pourrait être plus forte ce mois-ci. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Sua sensibilidade poderá estar mais forte neste mês. Dê a si mesmo um pouco de distância antes de reagir a uma situação emocionalmente intensa.",
    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Uma emoção antiga poderá ressurgir para ser compreendida de outra maneira.",
    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Você poderá absorver com mais facilidade as tensões dos outros. Proteja seu espaço interior.",
    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "A calma voltará quando você parar de tentar resolver imediatamente cada desconforto.",
    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée.":
      "Uma conversa sincera poderá aliviar uma pressão emocional acumulada.",
    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Seu equilíbrio dependerá de sua capacidade de expressar suas necessidades antes de chegar ao limite.",
    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Você poderá sentir uma necessidade maior de solidão ou silêncio. Respeite-a sem se isolar completamente.",
    "Un changement d’environnement pourrait vous aider à retrouver une meilleure perspective.":
      "Uma mudança de ambiente poderá ajudar você a recuperar uma perspectiva melhor.",
    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Seu humor poderá melhorar graças a uma rotina simples e tranquilizadora.",
    "Le mois vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "O mês convida você a dar mais espaço às atividades que realmente trazem calma.",
    "Votre sommeil mérite une attention particulière. Une routine plus stable pourrait améliorer votre récupération.":
      "Seu sono merece atenção especial. Uma rotina mais estável poderá melhorar sua recuperação.",
    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Evite prolongar seus dias apenas para terminar uma tarefa que poderia esperar.",
    "Votre corps pourrait avoir besoin de davantage de repos que d’habitude. Ne considérez pas cela comme un manque de motivation.":
      "Seu corpo poderá precisar de mais descanso do que o habitual. Não interprete isso como falta de motivação.",
    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Uma transição melhor entre atividade e sono poderá reduzir as tensões acumuladas.",
    "Le mois favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "O mês favorece pausas planejadas em vez de paradas impostas pelo cansaço.",
    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Você poderá se beneficiar de um ambiente mais tranquilo antes de dormir.",
    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Um curto período de descanso durante o dia poderá ser útil se não prejudicar seu sono noturno.",
    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Sua recuperação será melhor se você limitar os estímulos no fim da noite.",
    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "O descanso mental será tão importante quanto o físico. Afaste-se regularmente das telas e das preocupações.",
    "Une nuit réparatrice pourrait changer complètement votre perception d’une situation difficile.":
      "Uma noite reparadora poderá mudar completamente sua percepção de uma situação difícil.",
    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité.":
      "Um novo hábito simples poderá melhorar seu bem-estar se você o repetir com regularidade.",
    "Le mois convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "O mês é adequado para retomar gradualmente uma atividade física ou uma rotina de cuidados.",
    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Evite tentar transformar todos os seus hábitos ao mesmo tempo. Escolha apenas uma mudança prioritária.",
    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Uma hidratação melhor e refeições mais regulares poderão apoiar sua energia.",
    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Sua motivação aumentará se sua rotina continuar realista e agradável.",
    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Você poderá perceber que um hábito aparentemente banal influencia fortemente seu humor.",
    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Uma organização mais simples de seus dias reduzirá o cansaço ligado a decisões repetidas.",
    "Le mois favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "O mês favorece progressos constantes em vez de esforços intensos de curta duração.",
    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Prepare seu ambiente para facilitar os hábitos que deseja manter.",
    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Seu bem-estar melhorará quando suas ações diárias corresponderem mais às suas necessidades reais.",
    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "O principal desafio será não ignorar seu cansaço apenas porque algumas responsabilidades parecem urgentes.",
    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Você poderá ter a tendência de ultrapassar seus limites e depois perder vários dias se recuperando.",
    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Uma tensão emocional poderá se manifestar fisicamente se permanecer contida por tempo demais.",
    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "A falta de regularidade poderá deixar sua energia mais instável.",
    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Você poderá querer recuperar rápido demais um nível elevado de desempenho.",
    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "A necessidade de atender às expectativas dos outros poderá fazer você negligenciar suas próprias necessidades.",
    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Uma qualidade ruim de sono poderá diminuir sua paciência e concentração.",
    "Le défi consistera à accepter de ralentir sans vous juger.":
      "O desafio será aceitar desacelerar sem se julgar.",
    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Você poderá confundir descanso com imobilidade total. Um movimento suave poderá, às vezes, fazer mais bem.",
    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "O estresse acumulado poderá levar você a hábitos que aliviam no momento, mas aumentam o cansaço depois.",
    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Planeje seus momentos de descanso com a mesma seriedade de suas outras obrigações.",
    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Observe os primeiros sinais de cansaço em vez de esperar até que se tornem impossíveis de ignorar.",
    "Choisissez une routine simple que vous pourrez réellement maintenir tout le mois.":
      "Escolha uma rotina simples que você consiga realmente manter durante todo o mês.",
    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduza estímulos desnecessários quando sentir sua energia diminuir.",
    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Reserve alguns minutos por dia para respirar, caminhar ou se afastar do barulho.",
    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Evite medir seu valor pelo seu nível de produtividade.",
    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respeite suas necessidades físicas mesmo quando elas não correspondem ao ritmo dos outros.",
    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Crie um ambiente que favoreça calma, sono e recuperação.",
    "Cherchez la régularité plutôt que la perfection.":
      "Busque constância em vez de perfeição.",
    "Accordez-vous le droit de modifier votre programme lorsqu’une journée demande davantage de douceur.":
      "Permita-se modificar seu programa quando um dia exigir mais suavidade.",
    "Ce mois peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Este mês pode ajudar você a recuperar uma energia mais estável se respeitar melhor seu ritmo pessoal.",
    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Seu bem-estar melhorará graças a escolhas simples, constantes e adaptadas às suas necessidades reais.",
    "Les prochaines semaines vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "As próximas semanas lembrarão que o descanso é uma parte essencial do seu equilíbrio.",
    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Ouvir melhor seu corpo permitirá evitar vários períodos de cansaço desnecessário.",
    "Vous pourriez terminer le mois avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Você poderá terminar o mês com uma rotina mais tranquila e uma compreensão melhor de seus limites.",
    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Sua vitalidade aumentará à medida que você reduzir fontes evitáveis de estresse.",
    "Ce mois vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Este mês oferece a oportunidade de reconstruir sua energia sobre bases mais sólidas.",
    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Um equilíbrio melhor entre ação e recuperação melhorará seu estado geral.",
    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Seu corpo e sua mente recuperarão mais harmonia quando você parar de lutar contra seu próprio ritmo.",
    "En prenant soin de votre énergie dès maintenant, vous préparerez un mois suivant plus dynamique.":
      "Ao cuidar de sua energia desde agora, você preparará um próximo mês mais dinâmico.",
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
      "monthly-health.ts",
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

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

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
  }

  visit(sourceFile);

  return replacements
    .sort(
      (a, b) =>
        b.start - a.start,
    )
    .reduce(
      (
        output,
        replacement,
      ) =>
        output.slice(
          0,
          replacement.start,
        ) +
        replacement.value +
        output.slice(
          replacement.end,
        ),
      source,
    );
}

/* =========================================================
   BUILDER
========================================================= */

export function localizeMonthlyHealthBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    HEALTH_TITLES[
      normalizedLocale
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

export function localizeMonthlyHealthTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    HEALTH_TEXTS[
      normalizedLocale
    ];

  if (!translations) {
    return source;
  }

  return replaceTranslations(
    source,
    translations,
  );
}
