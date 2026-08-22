import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   HEALTH TITLES
========================================================= */

const HEALTH_TITLES: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
    "Une année pour retrouver votre équilibre":
      "A year to restore your balance",

    "Votre énergie demande une attention plus consciente":
      "Your energy requires more mindful attention",

    "Une année de recentrage et de récupération":
      "A year of refocusing and recovery",

    "Votre bien-être se construit dans la régularité":
      "Your well-being is built through consistency",

    "Un nouvel équilibre entre action et repos":
      "A new balance between action and rest",

    "Votre vitalité évolue au fil des saisons":
      "Your vitality evolves with the seasons",

    "Une année pour mieux respecter votre rythme":
      "A year to better respect your own rhythm",

    "Votre énergie retrouve des bases plus solides":
      "Your energy is regaining a stronger foundation",
  },

  es: {
    "Une année pour retrouver votre équilibre":
      "Un año para recuperar tu equilibrio",

    "Votre énergie demande une attention plus consciente":
      "Tu energía requiere una atención más consciente",

    "Une année de recentrage et de récupération":
      "Un año de recentramiento y recuperación",

    "Votre bien-être se construit dans la régularité":
      "Tu bienestar se construye con constancia",

    "Un nouvel équilibre entre action et repos":
      "Un nuevo equilibrio entre acción y descanso",

    "Votre vitalité évolue au fil des saisons":
      "Tu vitalidad evoluciona con las estaciones",

    "Une année pour mieux respecter votre rythme":
      "Un año para respetar mejor tu propio ritmo",

    "Votre énergie retrouve des bases plus solides":
      "Tu energía recupera bases más sólidas",
  },

  de: {
    "Une année pour retrouver votre équilibre":
      "Ein Jahr, um Ihr Gleichgewicht wiederzufinden",

    "Votre énergie demande une attention plus consciente":
      "Ihre Energie erfordert mehr bewusste Aufmerksamkeit",

    "Une année de recentrage et de récupération":
      "Ein Jahr der Neuausrichtung und Erholung",

    "Votre bien-être se construit dans la régularité":
      "Ihr Wohlbefinden entsteht durch Beständigkeit",

    "Un nouvel équilibre entre action et repos":
      "Ein neues Gleichgewicht zwischen Aktivität und Ruhe",

    "Votre vitalité évolue au fil des saisons":
      "Ihre Vitalität entwickelt sich im Laufe der Jahreszeiten",

    "Une année pour mieux respecter votre rythme":
      "Ein Jahr, um Ihren eigenen Rhythmus besser zu respektieren",

    "Votre énergie retrouve des bases plus solides":
      "Ihre Energie gewinnt wieder eine solidere Grundlage",
  },

  it: {
    "Une année pour retrouver votre équilibre":
      "Un anno per ritrovare il tuo equilibrio",

    "Votre énergie demande une attention plus consciente":
      "La tua energia richiede un'attenzione più consapevole",

    "Une année de recentrage et de récupération":
      "Un anno di riequilibrio e recupero",

    "Votre bien-être se construit dans la régularité":
      "Il tuo benessere si costruisce con la costanza",

    "Un nouvel équilibre entre action et repos":
      "Un nuovo equilibrio tra azione e riposo",

    "Votre vitalité évolue au fil des saisons":
      "La tua vitalità evolve con il susseguirsi delle stagioni",

    "Une année pour mieux respecter votre rythme":
      "Un anno per rispettare meglio il tuo ritmo",

    "Votre énergie retrouve des bases plus solides":
      "La tua energia ritrova basi più solide",
  },

  pt: {
    "Une année pour retrouver votre équilibre":
      "Um ano para recuperar seu equilíbrio",

    "Votre énergie demande une attention plus consciente":
      "Sua energia exige uma atenção mais consciente",

    "Une année de recentrage et de récupération":
      "Um ano de recentramento e recuperação",

    "Votre bien-être se construit dans la régularité":
      "Seu bem-estar é construído com constância",

    "Un nouvel équilibre entre action et repos":
      "Um novo equilíbrio entre ação e descanso",

    "Votre vitalité évolue au fil des saisons":
      "Sua vitalidade evolui ao longo das estações",

    "Une année pour mieux respecter votre rythme":
      "Um ano para respeitar melhor o seu ritmo",

    "Votre énergie retrouve des bases plus solides":
      "Sua energia recupera bases mais sólidas",
  },
};

/* =========================================================
   HEALTH TEXTS
========================================================= */

const HEALTH_TEXTS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* INTRODUCTION */

    "Votre bien-être dépendra cette année de votre capacité à respecter votre rythme réel. Votre énergie pourrait évoluer par cycles au fil des mois.":
      "Your well-being this year will depend on your ability to respect your natural rhythm. Your energy may fluctuate in cycles throughout the months.",

    "Les prochains mois vous invitent à mieux écouter les signaux de votre corps. Certains ralentissements ponctuels pourraient vous aider à retrouver un meilleur équilibre.":
      "The coming months invite you to listen more carefully to your body's signals. Occasional periods of slowing down could help you regain a better balance.",

    "Cette année met l’accent sur la récupération, la qualité du repos et la gestion plus consciente de votre énergie quotidienne.":
      "This year emphasizes recovery, the quality of your rest, and a more mindful management of your daily energy.",

    "Votre équilibre physique et émotionnel demandera davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Your physical and emotional balance will require greater consistency. Small repeated habits will have more impact than sudden changes.",

    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "A period of refocusing begins. You may feel the need to better protect your sleep, your peace of mind, and your periods of recovery.",

    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Your vitality could improve if you allow yourself to simplify certain obligations and reduce unnecessary sources of fatigue.",

    "L’année vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "The year encourages you to take care of yourself before fatigue becomes too significant.",

    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer une baisse d’énergie passagère d’un besoin réel de repos.":
      "Your body may require more attention. It will be helpful to distinguish a temporary drop in energy from a genuine need for rest.",

    "Une meilleure hygiène de vie pourrait progressivement améliorer votre énergie et votre humeur au cours des prochains mois.":
      "Healthier daily habits could gradually improve your energy and mood over the coming months.",

    "Cette année vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "This year helps you restore a more stable balance between activity, rest, and emotional well-being.",

    /* ENERGY */

    "Votre énergie pourrait être plus forte pendant certaines périodes de l’année. Profitez de ces phases pour accomplir les tâches les plus exigeantes.":
      "Your energy may be stronger during certain periods of the year. Take advantage of these phases to accomplish your most demanding tasks.",

    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "A drop in vitality may appear after an overly demanding period. Avoid waiting until exhaustion before slowing down.",

    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Your energy level will be closely linked to the quality of your sleep and the consistency of your habits.",

    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "You may experience periods of momentum followed by quieter moments. Respect this alternation without guilt.",

    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Moderate physical activity could help you regain greater vitality and mental clarity.",

    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Your energy will increase when you stop spreading yourself too thin across secondary tasks.",

    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "You may feel the need to move more. Choose an enjoyable activity rather than an overly demanding routine.",

    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps au fil de l’année.":
      "A more regular rhythm will allow you to preserve your energy for longer throughout the year.",

    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Your vitality may be influenced by your environment. Calm surroundings, fresh air, and an orderly space will benefit you.",

    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "You will benefit from planning breaks before your concentration and patience begin to decline.",

    /* EMOTIONAL BALANCE */

    "Votre sensibilité pourrait être plus forte pendant certaines périodes. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Your sensitivity may be stronger during certain periods. Give yourself some distance before reacting to an emotionally charged situation.",

    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "An old emotion may resurface so that it can be understood differently.",

    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "You may absorb other people's tensions more easily. Protect your inner space.",

    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "Calm will return when you stop trying to resolve every discomfort immediately.",

    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée depuis quelque temps.":
      "An honest conversation could ease emotional pressure that has been building for some time.",

    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Your balance will depend on your ability to express your needs before reaching your limit.",

    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "You may feel a greater need for solitude or silence. Respect this need without completely isolating yourself.",

    "Un changement d’environnement ou de rythme pourrait vous aider à retrouver une meilleure perspective.":
      "A change of environment or pace could help you regain a better perspective.",

    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Your mood could improve through a simple and reassuring routine.",

    "L’année vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "The year invites you to make more room for activities that genuinely bring you peace.",

    /* REST */

    "Votre sommeil mérite une attention particulière cette année. Une routine plus stable pourrait améliorer durablement votre récupération.":
      "Your sleep deserves particular attention this year. A more stable routine could sustainably improve your recovery.",

    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Avoid extending your days simply to finish a task that could wait.",

    "Votre corps pourrait avoir besoin de davantage de repos pendant certaines périodes. Ne considérez pas cela comme un manque de motivation.":
      "Your body may need more rest during certain periods. Do not interpret this as a lack of motivation.",

    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "A better transition between activity and sleep could reduce accumulated tension.",

    "L’année favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "The year favors planned periods of rest rather than breaks forced upon you by fatigue.",

    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "You may benefit from a calmer environment before bedtime.",

    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "A short period of daytime rest could be helpful if it does not interfere with your nighttime sleep.",

    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Your recovery will improve if you limit stimulation late in the evening.",

    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "Mental rest will be just as important as physical rest. Regularly step away from screens and worries.",

    "Une période de repos bien utilisée pourrait complètement modifier votre perception d’une situation difficile.":
      "A well-used period of rest could completely change your perception of a difficult situation.",

    /* HABITS */

    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité tout au long de l’année.":
      "A simple new habit could improve your well-being if you practice it consistently throughout the year.",

    "L’année convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "The year is well suited to gradually resuming physical activity or a self-care routine.",

    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Avoid trying to transform all your habits at once. Choose one priority change.",

    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Better hydration and more regular meals could support your energy.",

    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Your motivation will increase if your routine remains realistic and enjoyable.",

    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "You may discover that a seemingly ordinary habit strongly influences your mood.",

    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "A simpler organization of your days will reduce the fatigue associated with repeated decisions.",

    "L’année favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "The year favors steady progress rather than short periods of intense effort.",

    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Prepare your environment so that it supports the habits you want to maintain.",

    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Your well-being will improve when your daily actions align more closely with your genuine needs.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la mise en place de nouvelles habitudes et d’un rythme plus stable.":
      "The beginning of the year will favor the establishment of new habits and a more stable rhythm.",

    "Le printemps pourrait apporter un regain d’énergie et davantage de motivation pour bouger.":
      "Spring could bring renewed energy and greater motivation to be active.",

    "Le milieu de l’année demandera un meilleur équilibre entre activité, obligations et récupération.":
      "The middle of the year will require a better balance between activity, responsibilities, and recovery.",

    "L’été pourrait vous aider à retrouver davantage de légèreté, à condition de ne pas surcharger votre emploi du temps.":
      "Summer could help you regain a greater sense of lightness, provided you do not overload your schedule.",

    "L’automne favorisera la consolidation des routines et le retour à une meilleure discipline personnelle.":
      "Autumn will favor the consolidation of routines and a return to greater personal discipline.",

    "La fin de l’année demandera davantage de repos et une meilleure protection contre l’accumulation de fatigue.":
      "The end of the year will require more rest and better protection against accumulated fatigue.",

    "Une période plus calme vous permettra de retrouver progressivement un niveau d’énergie plus stable.":
      "A quieter period will allow you to gradually regain a more stable level of energy.",

    "Les phases les plus favorables seront celles où vous respecterez vos limites avant qu’elles ne deviennent contraignantes.":
      "The most favorable phases will be those in which you respect your limits before they become restrictive.",

    "Un changement de rythme pourrait devenir nécessaire au cours du deuxième semestre.":
      "A change of pace may become necessary during the second half of the year.",

    "Certaines périodes demanderont davantage de douceur, tandis que d’autres seront idéales pour reprendre de l’élan.":
      "Some periods will require greater gentleness, while others will be ideal for regaining momentum.",

    /* CHALLENGE */

    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "The main challenge will be not to ignore your fatigue simply because certain responsibilities seem urgent.",

    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "You may tend to push beyond your limits and then spend several days recovering.",

    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Emotional tension could manifest physically if it remains contained for too long.",

    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "A lack of consistency could make your energy more unstable.",

    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "You may want to return to a high level of performance too quickly.",

    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "The need to meet other people's expectations could cause you to neglect your own needs.",

    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Poor sleep quality could reduce your patience and concentration.",

    "Le défi consistera à accepter de ralentir sans vous juger.":
      "The challenge will be to accept slowing down without judging yourself.",

    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "You may confuse rest with complete inactivity. Gentle movement could sometimes benefit you more.",

    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "Accumulated stress could lead you to adopt habits that provide temporary relief but leave you more tired afterward.",

    /* ADVICE */

    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Plan your periods of rest as seriously as your other responsibilities.",

    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Pay attention to the first signs of fatigue instead of waiting until they become impossible to ignore.",

    "Choisissez une routine simple que vous pourrez réellement maintenir pendant plusieurs mois.":
      "Choose a simple routine that you can realistically maintain for several months.",

    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduce unnecessary stimulation when you feel your energy declining.",

    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Take a few minutes each day to breathe, walk, or step away from noise.",

    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Avoid measuring your worth by your level of productivity.",

    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respect your physical needs even when they do not match the pace of others.",

    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Create an environment that promotes calm, sleep, and recovery.",

    "Cherchez la régularité plutôt que la perfection.":
      "Aim for consistency rather than perfection.",

    "Accordez-vous le droit de modifier votre programme lorsqu’une période demande davantage de douceur.":
      "Give yourself permission to adjust your schedule when a period requires a gentler pace.",

    /* CONCLUSION */

    "Cette année peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "This year can help you regain more stable energy if you better respect your personal rhythm.",

    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Your well-being will improve through simple, consistent choices adapted to your genuine needs.",

    "Les prochains mois vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "The coming months will remind you that rest is an essential part of your balance.",

    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Listening more carefully to your body will help you prevent several periods of unnecessary fatigue.",

    "Vous pourriez terminer l’année avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "You could end the year with a more calming routine and a better understanding of your limits.",

    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Your vitality will increase as you reduce avoidable sources of stress.",

    "Cette année vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "This year offers you the opportunity to rebuild your energy on a stronger foundation.",

    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "A better balance between activity and recovery will improve your overall well-being.",

    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Your body and mind will regain greater harmony when you stop fighting against your own rhythm.",

    "En prenant soin de votre énergie cette année, vous préparerez les prochaines périodes avec davantage de vitalité.":
      "By taking care of your energy this year, you will prepare for the periods ahead with greater vitality.",
  },

    /* =======================================================
     SPANISH
  ======================================================= */

  es: {
    /* INTRODUCTION */

    "Votre bien-être dépendra cette année de votre capacité à respecter votre rythme réel. Votre énergie pourrait évoluer par cycles au fil des mois.":
      "Tu bienestar dependerá este año de tu capacidad para respetar tu ritmo real. Tu energía podría evolucionar por ciclos a lo largo de los meses.",

    "Les prochains mois vous invitent à mieux écouter les signaux de votre corps. Certains ralentissements ponctuels pourraient vous aider à retrouver un meilleur équilibre.":
      "Los próximos meses te invitan a escuchar mejor las señales de tu cuerpo. Algunos períodos puntuales de menor ritmo podrían ayudarte a recuperar un mejor equilibrio.",

    "Cette année met l’accent sur la récupération, la qualité du repos et la gestion plus consciente de votre énergie quotidienne.":
      "Este año pone el énfasis en la recuperación, la calidad del descanso y una gestión más consciente de tu energía diaria.",

    "Votre équilibre physique et émotionnel demandera davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Tu equilibrio físico y emocional requerirá mayor constancia. Los pequeños hábitos repetidos tendrán más efecto que los cambios bruscos.",

    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Comienza un período de recentramiento. Podrías sentir la necesidad de proteger mejor tu sueño, tu tranquilidad y tus momentos de recuperación.",

    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Tu vitalidad podría mejorar si aceptas simplificar ciertas obligaciones y reducir las fuentes de cansancio innecesarias.",

    "L’année vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "El año te anima a cuidarte antes de que el cansancio se vuelva demasiado importante.",

    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer une baisse d’énergie passagère d’un besoin réel de repos.":
      "Tu cuerpo podría pedirte más atención. Será útil distinguir una disminución pasajera de energía de una verdadera necesidad de descanso.",

    "Une meilleure hygiène de vie pourrait progressivement améliorer votre énergie et votre humeur au cours des prochains mois.":
      "Unos hábitos de vida más saludables podrían mejorar progresivamente tu energía y tu estado de ánimo durante los próximos meses.",

    "Cette année vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Este año te ayuda a recuperar un equilibrio más estable entre actividad, descanso y bienestar emocional.",

    /* ENERGY */

    "Votre énergie pourrait être plus forte pendant certaines périodes de l’année. Profitez de ces phases pour accomplir les tâches les plus exigeantes.":
      "Tu energía podría ser más intensa durante ciertos períodos del año. Aprovecha estas fases para realizar las tareas más exigentes.",

    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Una disminución de vitalidad podría aparecer después de un período demasiado intenso. Evita esperar hasta el agotamiento antes de reducir el ritmo.",

    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Tu nivel de energía estará estrechamente relacionado con la calidad de tu sueño y la regularidad de tus hábitos.",

    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Podrías atravesar períodos de impulso seguidos de momentos más tranquilos. Respeta esta alternancia sin sentirte culpable.",

    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Una actividad física moderada podría ayudarte a recuperar más vitalidad y claridad mental.",

    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Tu energía aumentará cuando dejes de dispersarte en tareas secundarias.",

    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Podrías sentir la necesidad de moverte más. Elige una actividad agradable en lugar de una disciplina demasiado exigente.",

    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps au fil de l’année.":
      "Un ritmo más regular te permitirá conservar tu energía durante más tiempo a lo largo del año.",

    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Tu vitalidad podría verse influida por tu entorno. La tranquilidad, el aire fresco y el orden te harán bien.",

    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Te beneficiará planificar pausas antes de que disminuyan tu concentración y tu paciencia.",

    /* EMOTIONAL BALANCE */

    "Votre sensibilité pourrait être plus forte pendant certaines périodes. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Tu sensibilidad podría ser mayor durante ciertos períodos. Tómate cierta distancia antes de reaccionar ante una situación emocionalmente intensa.",

    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Una emoción del pasado podría resurgir para ser comprendida de una manera diferente.",

    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Podrías absorber con mayor facilidad las tensiones de los demás. Protege tu espacio interior.",

    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "La calma regresará cuando dejes de intentar resolver inmediatamente cada malestar.",

    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée depuis quelque temps.":
      "Una conversación sincera podría aliviar una presión emocional acumulada desde hace algún tiempo.",

    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Tu equilibrio dependerá de tu capacidad para expresar tus necesidades antes de llegar a tu límite.",

    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Podrías sentir una mayor necesidad de soledad o silencio. Respétala sin aislarte por completo.",

    "Un changement d’environnement ou de rythme pourrait vous aider à retrouver une meilleure perspective.":
      "Un cambio de entorno o de ritmo podría ayudarte a recuperar una mejor perspectiva.",

    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Tu estado de ánimo podría mejorar gracias a una rutina sencilla y reconfortante.",

    "L’année vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "El año te invita a dedicar más espacio a las actividades que realmente te aportan tranquilidad.",

    /* REST */

    "Votre sommeil mérite une attention particulière cette année. Une routine plus stable pourrait améliorer durablement votre récupération.":
      "Tu sueño merece una atención especial este año. Una rutina más estable podría mejorar de manera duradera tu recuperación.",

    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Evita alargar tus jornadas simplemente para terminar una tarea que podría esperar.",

    "Votre corps pourrait avoir besoin de davantage de repos pendant certaines périodes. Ne considérez pas cela comme un manque de motivation.":
      "Tu cuerpo podría necesitar más descanso durante ciertos períodos. No lo consideres una falta de motivación.",

    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Una mejor transición entre la actividad y el sueño podría reducir las tensiones acumuladas.",

    "L’année favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "El año favorece los momentos de descanso planificados en lugar de las pausas impuestas por el cansancio.",

    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Podrías beneficiarte de un ambiente más tranquilo antes de acostarte.",

    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Un breve período de descanso durante el día podría ser útil si no altera tu sueño nocturno.",

    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Tu recuperación será mejor si limitas los estímulos a última hora de la noche.",

    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "El descanso mental será tan importante como el descanso físico. Aléjate regularmente de las pantallas y de las preocupaciones.",

    "Une période de repos bien utilisée pourrait complètement modifier votre perception d’une situation difficile.":
      "Un período de descanso bien aprovechado podría cambiar por completo tu percepción de una situación difícil.",

    /* HABITS */

    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité tout au long de l’année.":
      "Un nuevo hábito sencillo podría mejorar tu bienestar si lo mantienes con regularidad durante todo el año.",

    "L’année convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "El año es favorable para retomar progresivamente una actividad física o una rutina de cuidado personal.",

    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Evita intentar transformar todos tus hábitos al mismo tiempo. Elige un solo cambio prioritario.",

    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Una mejor hidratación y unas comidas más regulares podrían favorecer tu energía.",

    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Tu motivación aumentará si tu rutina sigue siendo realista y agradable.",

    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Podrías descubrir que un hábito aparentemente insignificante influye considerablemente en tu estado de ánimo.",

    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Una organización más sencilla de tus días reducirá el cansancio relacionado con las decisiones repetidas.",

    "L’année favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "El año favorece los progresos constantes en lugar de los esfuerzos intensos de corta duración.",

    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Prepara tu entorno para que facilite los hábitos que deseas mantener.",

    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Tu bienestar mejorará cuando tus acciones cotidianas se adapten mejor a tus necesidades reales.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la mise en place de nouvelles habitudes et d’un rythme plus stable.":
      "El comienzo del año favorecerá la incorporación de nuevos hábitos y de un ritmo más estable.",

    "Le printemps pourrait apporter un regain d’énergie et davantage de motivation pour bouger.":
      "La primavera podría traer una renovación de energía y una mayor motivación para mantenerte activo.",

    "Le milieu de l’année demandera un meilleur équilibre entre activité, obligations et récupération.":
      "La mitad del año requerirá un mejor equilibrio entre actividad, obligaciones y recuperación.",

    "L’été pourrait vous aider à retrouver davantage de légèreté, à condition de ne pas surcharger votre emploi du temps.":
      "El verano podría ayudarte a recuperar una mayor sensación de ligereza, siempre que no sobrecargues tu agenda.",

    "L’automne favorisera la consolidation des routines et le retour à une meilleure discipline personnelle.":
      "El otoño favorecerá la consolidación de las rutinas y el regreso a una mayor disciplina personal.",

    "La fin de l’année demandera davantage de repos et une meilleure protection contre l’accumulation de fatigue.":
      "El final del año requerirá más descanso y una mejor protección frente a la acumulación de cansancio.",

    "Une période plus calme vous permettra de retrouver progressivement un niveau d’énergie plus stable.":
      "Un período más tranquilo te permitirá recuperar progresivamente un nivel de energía más estable.",

    "Les phases les plus favorables seront celles où vous respecterez vos limites avant qu’elles ne deviennent contraignantes.":
      "Las fases más favorables serán aquellas en las que respetes tus límites antes de que se vuelvan demasiado restrictivos.",

    "Un changement de rythme pourrait devenir nécessaire au cours du deuxième semestre.":
      "Un cambio de ritmo podría hacerse necesario durante la segunda mitad del año.",

    "Certaines périodes demanderont davantage de douceur, tandis que d’autres seront idéales pour reprendre de l’élan.":
      "Algunos períodos requerirán más suavidad, mientras que otros serán ideales para recuperar el impulso.",

    /* CHALLENGE */

    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "El principal desafío será no ignorar tu cansancio con el pretexto de que ciertas responsabilidades parecen urgentes.",

    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Podrías tener tendencia a superar tus límites y después necesitar varios días para recuperarte.",

    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Una tensión emocional podría manifestarse físicamente si permanece contenida durante demasiado tiempo.",

    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "La falta de regularidad podría hacer que tu energía sea más inestable.",

    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Podrías querer recuperar demasiado rápido un nivel elevado de rendimiento.",

    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "La necesidad de responder a las expectativas de los demás podría llevarte a descuidar tus propias necesidades.",

    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Una mala calidad del sueño podría disminuir tu paciencia y tu concentración.",

    "Le défi consistera à accepter de ralentir sans vous juger.":
      "El desafío consistirá en aceptar reducir el ritmo sin juzgarte.",

    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Podrías confundir el descanso con la inmovilidad total. Un movimiento suave podría hacerte más bien en algunos momentos.",

    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "El estrés acumulado podría llevarte a adoptar hábitos que alivian en el momento, pero que después generan más cansancio.",

    /* ADVICE */

    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Planifica tus momentos de descanso con la misma seriedad que tus demás obligaciones.",

    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Presta atención a las primeras señales de cansancio en lugar de esperar hasta que sea imposible ignorarlas.",

    "Choisissez une routine simple que vous pourrez réellement maintenir pendant plusieurs mois.":
      "Elige una rutina sencilla que realmente puedas mantener durante varios meses.",

    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduce los estímulos innecesarios cuando sientas que tu energía disminuye.",

    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Dedica unos minutos cada día a respirar, caminar o alejarte del ruido.",

    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Evita medir tu valor según tu nivel de productividad.",

    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respeta tus necesidades físicas incluso cuando no coincidan con el ritmo de los demás.",

    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Crea un entorno que favorezca la tranquilidad, el sueño y la recuperación.",

    "Cherchez la régularité plutôt que la perfection.":
      "Busca la constancia en lugar de la perfección.",

    "Accordez-vous le droit de modifier votre programme lorsqu’une période demande davantage de douceur.":
      "Permítete modificar tu programa cuando un período requiera un ritmo más suave.",

    /* CONCLUSION */

    "Cette année peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Este año puede ayudarte a recuperar una energía más estable si respetas mejor tu ritmo personal.",

    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Tu bienestar mejorará gracias a decisiones sencillas, constantes y adaptadas a tus necesidades reales.",

    "Les prochains mois vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "Los próximos meses te recordarán que el descanso es una parte esencial de tu equilibrio.",

    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Escuchar mejor a tu cuerpo te permitirá prevenir varios períodos de cansancio innecesario.",

    "Vous pourriez terminer l’année avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Podrías terminar el año con una rutina más tranquila y una mejor comprensión de tus límites.",

    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Tu vitalidad aumentará a medida que reduzcas las fuentes de estrés evitables.",

    "Cette année vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Este año te ofrece la oportunidad de reconstruir tu energía sobre bases más sólidas.",

    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Un mejor equilibrio entre acción y recuperación mejorará tu bienestar general.",

    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Tu cuerpo y tu mente recuperarán una mayor armonía cuando dejes de luchar contra tu propio ritmo.",

    "En prenant soin de votre énergie cette année, vous préparerez les prochaines périodes avec davantage de vitalité.":
      "Al cuidar tu energía este año, afrontarás los próximos períodos con mayor vitalidad.",
  },

    /* =======================================================
     GERMAN
  ======================================================= */

  de: {
    /* INTRODUCTION */

    "Votre bien-être dépendra cette année de votre capacité à respecter votre rythme réel. Votre énergie pourrait évoluer par cycles au fil des mois.":
      "Ihr Wohlbefinden wird in diesem Jahr davon abhängen, wie gut Sie Ihren tatsächlichen Rhythmus respektieren. Ihre Energie könnte sich im Laufe der Monate in Zyklen verändern.",

    "Les prochains mois vous invitent à mieux écouter les signaux de votre corps. Certains ralentissements ponctuels pourraient vous aider à retrouver un meilleur équilibre.":
      "Die kommenden Monate laden Sie dazu ein, stärker auf die Signale Ihres Körpers zu achten. Gelegentliche ruhigere Phasen könnten Ihnen helfen, ein besseres Gleichgewicht wiederzufinden.",

    "Cette année met l’accent sur la récupération, la qualité du repos et la gestion plus consciente de votre énergie quotidienne.":
      "In diesem Jahr stehen Erholung, die Qualität Ihrer Ruhephasen und ein bewussterer Umgang mit Ihrer täglichen Energie im Mittelpunkt.",

    "Votre équilibre physique et émotionnel demandera davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Ihr körperliches und emotionales Gleichgewicht wird mehr Beständigkeit erfordern. Kleine, regelmäßig wiederholte Gewohnheiten werden mehr bewirken als abrupte Veränderungen.",

    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Eine Phase der Neuausrichtung beginnt. Sie könnten das Bedürfnis verspüren, Ihren Schlaf, Ihre innere Ruhe und Ihre Erholungszeiten besser zu schützen.",

    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Ihre Vitalität könnte sich verbessern, wenn Sie bereit sind, bestimmte Verpflichtungen zu vereinfachen und unnötige Ursachen von Erschöpfung zu reduzieren.",

    "L’année vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "Das Jahr ermutigt Sie, auf sich selbst zu achten, bevor die Erschöpfung zu groß wird.",

    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer une baisse d’énergie passagère d’un besoin réel de repos.":
      "Ihr Körper könnte mehr Aufmerksamkeit von Ihnen verlangen. Es wird hilfreich sein, zwischen einem vorübergehenden Energietief und einem tatsächlichen Bedürfnis nach Ruhe zu unterscheiden.",

    "Une meilleure hygiène de vie pourrait progressivement améliorer votre énergie et votre humeur au cours des prochains mois.":
      "Gesündere Lebensgewohnheiten könnten Ihre Energie und Ihre Stimmung in den kommenden Monaten schrittweise verbessern.",

    "Cette année vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Dieses Jahr hilft Ihnen dabei, ein stabileres Gleichgewicht zwischen Aktivität, Ruhe und emotionalem Wohlbefinden wiederzufinden.",

    /* ENERGY */

    "Votre énergie pourrait être plus forte pendant certaines périodes de l’année. Profitez de ces phases pour accomplir les tâches les plus exigeantes.":
      "Ihre Energie könnte in bestimmten Phasen des Jahres stärker sein. Nutzen Sie diese Zeiten, um besonders anspruchsvolle Aufgaben zu erledigen.",

    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Nach einer zu intensiven Phase könnte Ihre Vitalität nachlassen. Warten Sie nicht bis zur völligen Erschöpfung, bevor Sie Ihr Tempo reduzieren.",

    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Ihr Energieniveau wird eng mit der Qualität Ihres Schlafes und der Regelmäßigkeit Ihrer Gewohnheiten verbunden sein.",

    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Sie könnten Phasen mit viel Schwung erleben, auf die ruhigere Zeiten folgen. Respektieren Sie diesen Wechsel, ohne sich deswegen schuldig zu fühlen.",

    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Moderate körperliche Aktivität könnte Ihnen helfen, mehr Vitalität und geistige Klarheit zurückzugewinnen.",

    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Ihre Energie wird zunehmen, wenn Sie aufhören, sich mit nebensächlichen Aufgaben zu verzetteln.",

    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Sie könnten das Bedürfnis verspüren, sich mehr zu bewegen. Wählen Sie lieber eine angenehme Aktivität als ein zu anspruchsvolles Trainingsprogramm.",

    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps au fil de l’année.":
      "Ein regelmäßigerer Rhythmus wird Ihnen helfen, Ihre Energie im Laufe des Jahres länger zu bewahren.",

    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Ihre Vitalität könnte von Ihrer Umgebung beeinflusst werden. Ruhe, frische Luft und Ordnung werden Ihnen guttun.",

    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Es wird Ihnen helfen, Pausen einzuplanen, bevor Ihre Konzentration und Geduld nachlassen.",

    /* EMOTIONAL BALANCE */

    "Votre sensibilité pourrait être plus forte pendant certaines périodes. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Ihre Sensibilität könnte in bestimmten Phasen stärker ausgeprägt sein. Nehmen Sie sich etwas Abstand, bevor Sie auf eine emotional belastende Situation reagieren.",

    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Ein älteres Gefühl könnte wieder an die Oberfläche kommen, damit Sie es aus einer neuen Perspektive verstehen können.",

    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Sie könnten die Spannungen anderer leichter aufnehmen. Schützen Sie Ihren inneren Raum.",

    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "Ruhe wird zurückkehren, wenn Sie aufhören, jedes Unbehagen sofort lösen zu wollen.",

    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée depuis quelque temps.":
      "Ein ehrliches Gespräch könnte emotionalen Druck lindern, der sich seit einiger Zeit aufgebaut hat.",

    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Ihr Gleichgewicht wird davon abhängen, ob Sie Ihre Bedürfnisse ausdrücken können, bevor Sie an Ihre Grenzen gelangen.",

    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Sie könnten ein stärkeres Bedürfnis nach Rückzug oder Stille verspüren. Respektieren Sie dieses Bedürfnis, ohne sich vollständig zu isolieren.",

    "Un changement d’environnement ou de rythme pourrait vous aider à retrouver une meilleure perspective.":
      "Eine Veränderung Ihrer Umgebung oder Ihres Rhythmus könnte Ihnen helfen, wieder eine klarere Perspektive zu gewinnen.",

    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Ihre Stimmung könnte sich durch eine einfache und beruhigende Routine verbessern.",

    "L’année vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "Das Jahr lädt Sie dazu ein, Aktivitäten, die Ihnen wirklich Ruhe schenken, mehr Raum zu geben.",

    /* REST */

    "Votre sommeil mérite une attention particulière cette année. Une routine plus stable pourrait améliorer durablement votre récupération.":
      "Ihr Schlaf verdient in diesem Jahr besondere Aufmerksamkeit. Eine stabilere Routine könnte Ihre Erholung langfristig verbessern.",

    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Vermeiden Sie es, Ihre Tage unnötig zu verlängern, nur um eine Aufgabe zu beenden, die auch warten könnte.",

    "Votre corps pourrait avoir besoin de davantage de repos pendant certaines périodes. Ne considérez pas cela comme un manque de motivation.":
      "Ihr Körper könnte in bestimmten Phasen mehr Ruhe benötigen. Betrachten Sie dies nicht als mangelnde Motivation.",

    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Ein besserer Übergang zwischen Aktivität und Schlaf könnte angesammelte Spannungen reduzieren.",

    "L’année favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "Das Jahr begünstigt bewusst eingeplante Ruhephasen statt Pausen, zu denen Sie durch Erschöpfung gezwungen werden.",

    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Eine ruhigere Umgebung vor dem Schlafengehen könnte Ihnen guttun.",

    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Eine kurze Ruhephase während des Tages könnte hilfreich sein, sofern sie Ihren nächtlichen Schlaf nicht beeinträchtigt.",

    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Ihre Erholung wird besser sein, wenn Sie spät am Abend übermäßige Reize reduzieren.",

    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "Mentale Erholung wird ebenso wichtig sein wie körperliche Ruhe. Nehmen Sie regelmäßig Abstand von Bildschirmen und Sorgen.",

    "Une période de repos bien utilisée pourrait complètement modifier votre perception d’une situation difficile.":
      "Eine gut genutzte Ruhephase könnte Ihre Wahrnehmung einer schwierigen Situation vollständig verändern.",

    /* HABITS */

    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité tout au long de l’année.":
      "Eine neue, einfache Gewohnheit könnte Ihr Wohlbefinden verbessern, wenn Sie sie das ganze Jahr über regelmäßig beibehalten.",

    "L’année convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "Das Jahr eignet sich gut dafür, körperliche Aktivität oder eine Selbstfürsorge-Routine schrittweise wieder aufzunehmen.",

    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Versuchen Sie nicht, alle Ihre Gewohnheiten gleichzeitig zu verändern. Wählen Sie zunächst eine einzige Veränderung mit hoher Priorität.",

    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Eine bessere Flüssigkeitszufuhr und regelmäßigere Mahlzeiten könnten Ihre Energie unterstützen.",

    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Ihre Motivation wird steigen, wenn Ihre Routine realistisch und angenehm bleibt.",

    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Sie könnten feststellen, dass eine scheinbar unbedeutende Gewohnheit Ihre Stimmung stark beeinflusst.",

    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Eine einfachere Organisation Ihrer Tage wird die Ermüdung durch ständig wiederkehrende Entscheidungen reduzieren.",

    "L’année favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "Das Jahr begünstigt stetige Fortschritte statt kurzer Phasen intensiver Anstrengung.",

    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Gestalten Sie Ihre Umgebung so, dass sie die Gewohnheiten unterstützt, die Sie beibehalten möchten.",

    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Ihr Wohlbefinden wird sich verbessern, wenn Ihre täglichen Handlungen stärker Ihren tatsächlichen Bedürfnissen entsprechen.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la mise en place de nouvelles habitudes et d’un rythme plus stable.":
      "Der Jahresbeginn wird die Einführung neuer Gewohnheiten und eines stabileren Rhythmus begünstigen.",

    "Le printemps pourrait apporter un regain d’énergie et davantage de motivation pour bouger.":
      "Der Frühling könnte neue Energie und mehr Motivation für Bewegung bringen.",

    "Le milieu de l’année demandera un meilleur équilibre entre activité, obligations et récupération.":
      "Die Jahresmitte wird ein besseres Gleichgewicht zwischen Aktivität, Verpflichtungen und Erholung erfordern.",

    "L’été pourrait vous aider à retrouver davantage de légèreté, à condition de ne pas surcharger votre emploi du temps.":
      "Der Sommer könnte Ihnen helfen, mehr Leichtigkeit zurückzugewinnen, vorausgesetzt, Sie überladen Ihren Zeitplan nicht.",

    "L’automne favorisera la consolidation des routines et le retour à une meilleure discipline personnelle.":
      "Der Herbst wird die Festigung Ihrer Routinen und die Rückkehr zu mehr persönlicher Disziplin begünstigen.",

    "La fin de l’année demandera davantage de repos et une meilleure protection contre l’accumulation de fatigue.":
      "Das Jahresende wird mehr Ruhe und einen besseren Schutz vor angesammelter Erschöpfung erfordern.",

    "Une période plus calme vous permettra de retrouver progressivement un niveau d’énergie plus stable.":
      "Eine ruhigere Phase wird Ihnen ermöglichen, schrittweise wieder ein stabileres Energieniveau zu erreichen.",

    "Les phases les plus favorables seront celles où vous respecterez vos limites avant qu’elles ne deviennent contraignantes.":
      "Die günstigsten Phasen werden jene sein, in denen Sie Ihre Grenzen respektieren, bevor sie zu einer Belastung werden.",

    "Un changement de rythme pourrait devenir nécessaire au cours du deuxième semestre.":
      "In der zweiten Jahreshälfte könnte eine Veränderung Ihres Rhythmus notwendig werden.",

    "Certaines périodes demanderont davantage de douceur, tandis que d’autres seront idéales pour reprendre de l’élan.":
      "Manche Phasen werden mehr Behutsamkeit erfordern, während andere ideal sein werden, um neuen Schwung zu gewinnen.",

    /* CHALLENGE */

    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "Die größte Herausforderung wird darin bestehen, Ihre Erschöpfung nicht zu ignorieren, nur weil bestimmte Verpflichtungen dringend erscheinen.",

    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Sie könnten dazu neigen, Ihre Grenzen zu überschreiten und anschließend mehrere Tage für die Erholung zu benötigen.",

    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Emotionale Anspannung könnte sich körperlich bemerkbar machen, wenn sie zu lange zurückgehalten wird.",

    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "Mangelnde Regelmäßigkeit könnte Ihr Energieniveau instabiler machen.",

    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Sie könnten versuchen, zu schnell wieder ein hohes Leistungsniveau zu erreichen.",

    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "Das Bedürfnis, die Erwartungen anderer zu erfüllen, könnte dazu führen, dass Sie Ihre eigenen Bedürfnisse vernachlässigen.",

    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Eine schlechte Schlafqualität könnte Ihre Geduld und Konzentrationsfähigkeit beeinträchtigen.",

    "Le défi consistera à accepter de ralentir sans vous juger.":
      "Die Herausforderung wird darin bestehen, ein langsameres Tempo zu akzeptieren, ohne sich selbst dafür zu verurteilen.",

    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Sie könnten Ruhe mit völliger Bewegungslosigkeit verwechseln. Sanfte Bewegung könnte Ihnen manchmal sogar mehr guttun.",

    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "Angesammelter Stress könnte Sie zu Gewohnheiten verleiten, die kurzfristig Erleichterung bringen, Sie danach jedoch noch stärker ermüden.",

    /* ADVICE */

    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Planen Sie Ihre Ruhezeiten genauso gewissenhaft wie Ihre anderen Verpflichtungen.",

    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Achten Sie auf die ersten Anzeichen von Müdigkeit, anstatt zu warten, bis sie sich nicht mehr ignorieren lassen.",

    "Choisissez une routine simple que vous pourrez réellement maintenir pendant plusieurs mois.":
      "Wählen Sie eine einfache Routine, die Sie tatsächlich mehrere Monate lang beibehalten können.",

    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduzieren Sie unnötige Reize, wenn Sie merken, dass Ihre Energie nachlässt.",

    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Nehmen Sie sich jeden Tag einige Minuten Zeit zum Atmen, Spazierengehen oder um dem Lärm zu entkommen.",

    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Vermeiden Sie es, Ihren persönlichen Wert an Ihrer Produktivität zu messen.",

    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respektieren Sie Ihre körperlichen Bedürfnisse, auch wenn sie nicht dem Rhythmus anderer entsprechen.",

    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Schaffen Sie eine Umgebung, die Ruhe, Schlaf und Erholung fördert.",

    "Cherchez la régularité plutôt que la perfection.":
      "Streben Sie nach Beständigkeit statt nach Perfektion.",

    "Accordez-vous le droit de modifier votre programme lorsqu’une période demande davantage de douceur.":
      "Erlauben Sie sich, Ihren Zeitplan anzupassen, wenn eine Phase mehr Behutsamkeit erfordert.",

    /* CONCLUSION */

    "Cette année peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Dieses Jahr kann Ihnen helfen, wieder ein stabileres Energieniveau zu erreichen, wenn Sie Ihren persönlichen Rhythmus stärker respektieren.",

    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Ihr Wohlbefinden wird sich durch einfache, beständige Entscheidungen verbessern, die Ihren tatsächlichen Bedürfnissen entsprechen.",

    "Les prochains mois vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "Die kommenden Monate werden Sie daran erinnern, dass Ruhe ein wesentlicher Bestandteil Ihres Gleichgewichts ist.",

    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Wenn Sie besser auf Ihren Körper hören, können Sie mehrere Phasen unnötiger Erschöpfung vermeiden.",

    "Vous pourriez terminer l’année avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Sie könnten das Jahr mit einer beruhigenderen Routine und einem besseren Verständnis Ihrer Grenzen beenden.",

    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Ihre Vitalität wird zunehmen, je mehr vermeidbare Stressquellen Sie reduzieren.",

    "Cette année vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Dieses Jahr bietet Ihnen die Gelegenheit, Ihre Energie auf einer solideren Grundlage neu aufzubauen.",

    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Ein besseres Gleichgewicht zwischen Aktivität und Erholung wird Ihr allgemeines Wohlbefinden verbessern.",

    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Ihr Körper und Ihr Geist werden mehr Harmonie finden, wenn Sie aufhören, gegen Ihren eigenen Rhythmus anzukämpfen.",

    "En prenant soin de votre énergie cette année, vous préparerez les prochaines périodes avec davantage de vitalité.":
      "Indem Sie in diesem Jahr gut auf Ihre Energie achten, werden Sie die kommenden Phasen mit mehr Vitalität angehen können.",
  },

    /* =======================================================
     ITALIAN
  ======================================================= */

  it: {
    /* INTRODUCTION */

    "Votre bien-être dépendra cette année de votre capacité à respecter votre rythme réel. Votre énergie pourrait évoluer par cycles au fil des mois.":
      "Il tuo benessere dipenderà quest'anno dalla tua capacità di rispettare il tuo ritmo naturale. La tua energia potrebbe evolvere in cicli nel corso dei mesi.",

    "Les prochains mois vous invitent à mieux écouter les signaux de votre corps. Certains ralentissements ponctuels pourraient vous aider à retrouver un meilleur équilibre.":
      "I prossimi mesi ti invitano ad ascoltare meglio i segnali del tuo corpo. Alcuni momenti di rallentamento potrebbero aiutarti a ritrovare un equilibrio migliore.",

    "Cette année met l’accent sur la récupération, la qualité du repos et la gestion plus consciente de votre énergie quotidienne.":
      "Quest'anno pone l'accento sul recupero, sulla qualità del riposo e su una gestione più consapevole della tua energia quotidiana.",

    "Votre équilibre physique et émotionnel demandera davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Il tuo equilibrio fisico ed emotivo richiederà maggiore costanza. Le piccole abitudini ripetute avranno più effetto dei cambiamenti improvvisi.",

    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Inizia un periodo di riequilibrio. Potresti sentire il bisogno di proteggere meglio il tuo sonno, la tua tranquillità e i tuoi momenti di recupero.",

    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "La tua vitalità potrebbe migliorare se accetti di semplificare alcuni impegni e di ridurre le fonti di stanchezza non necessarie.",

    "L’année vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "L'anno ti incoraggia a prenderti cura di te prima che la stanchezza diventi troppo intensa.",

    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer une baisse d’énergie passagère d’un besoin réel de repos.":
      "Il tuo corpo potrebbe richiedere maggiore attenzione. Sarà utile distinguere un calo temporaneo di energia da un reale bisogno di riposo.",

    "Une meilleure hygiène de vie pourrait progressivement améliorer votre énergie et votre humeur au cours des prochains mois.":
      "Abitudini di vita più sane potrebbero migliorare progressivamente la tua energia e il tuo umore nei prossimi mesi.",

    "Cette année vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Quest'anno ti aiuta a ritrovare un equilibrio più stabile tra attività, riposo e benessere emotivo.",

    /* ENERGY */

    "Votre énergie pourrait être plus forte pendant certaines périodes de l’année. Profitez de ces phases pour accomplir les tâches les plus exigeantes.":
      "La tua energia potrebbe essere più intensa durante alcuni periodi dell'anno. Approfitta di queste fasi per svolgere le attività più impegnative.",

    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Un calo di vitalità potrebbe manifestarsi dopo un periodo troppo intenso. Evita di aspettare l'esaurimento prima di rallentare.",

    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Il tuo livello di energia sarà strettamente legato alla qualità del sonno e alla regolarità delle tue abitudini.",

    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Potresti attraversare periodi di grande slancio seguiti da momenti più tranquilli. Rispetta questa alternanza senza sensi di colpa.",

    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Un'attività fisica moderata potrebbe aiutarti a ritrovare maggiore vitalità e chiarezza mentale.",

    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "La tua energia aumenterà quando smetterai di disperderti in attività secondarie.",

    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Potresti sentire il bisogno di muoverti di più. Scegli un'attività piacevole piuttosto che una disciplina troppo impegnativa.",

    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps au fil de l’année.":
      "Un ritmo più regolare ti permetterà di conservare più a lungo la tua energia nel corso dell'anno.",

    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "La tua vitalità potrebbe essere influenzata dall'ambiente che ti circonda. La tranquillità, l'aria fresca e l'ordine ti faranno bene.",

    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Ti sarà utile prevedere delle pause prima che la concentrazione e la pazienza inizino a diminuire.",

    /* EMOTIONAL BALANCE */

    "Votre sensibilité pourrait être plus forte pendant certaines périodes. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "La tua sensibilità potrebbe essere più intensa durante alcuni periodi. Concediti un po' di distanza prima di reagire a una situazione emotivamente intensa.",

    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Un'emozione del passato potrebbe riaffiorare per essere compresa da una prospettiva diversa.",

    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Potresti assorbire più facilmente le tensioni degli altri. Proteggi il tuo spazio interiore.",

    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "La calma tornerà quando smetterai di cercare di risolvere immediatamente ogni disagio.",

    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée depuis quelque temps.":
      "Una conversazione sincera potrebbe alleviare una pressione emotiva accumulata da qualche tempo.",

    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Il tuo equilibrio dipenderà dalla tua capacità di esprimere i tuoi bisogni prima di raggiungere il limite.",

    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Potresti sentire un maggiore bisogno di solitudine o di silenzio. Rispettalo senza isolarti completamente.",

    "Un changement d’environnement ou de rythme pourrait vous aider à retrouver une meilleure perspective.":
      "Un cambiamento di ambiente o di ritmo potrebbe aiutarti a ritrovare una prospettiva migliore.",

    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Il tuo umore potrebbe migliorare grazie a una routine semplice e rassicurante.",

    "L’année vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "L'anno ti invita a dedicare più spazio alle attività che ti trasmettono realmente serenità.",

    /* REST */

    "Votre sommeil mérite une attention particulière cette année. Une routine plus stable pourrait améliorer durablement votre récupération.":
      "Il tuo sonno merita un'attenzione particolare quest'anno. Una routine più stabile potrebbe migliorare in modo duraturo il tuo recupero.",

    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Evita di prolungare le tue giornate semplicemente per terminare un'attività che potrebbe aspettare.",

    "Votre corps pourrait avoir besoin de davantage de repos pendant certaines périodes. Ne considérez pas cela comme un manque de motivation.":
      "Il tuo corpo potrebbe avere bisogno di più riposo durante alcuni periodi. Non considerarlo una mancanza di motivazione.",

    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Una migliore transizione tra attività e sonno potrebbe ridurre le tensioni accumulate.",

    "L’année favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "L'anno favorisce i momenti di pausa pianificati piuttosto che le interruzioni imposte dalla stanchezza.",

    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Potresti beneficiare di un ambiente più tranquillo prima di andare a dormire.",

    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Un breve periodo di riposo durante il giorno potrebbe essere utile, purché non interferisca con il sonno notturno.",

    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Il tuo recupero sarà migliore se limiterai gli stimoli nelle ore più tarde della sera.",

    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "Il riposo mentale sarà importante quanto quello fisico. Allontanati regolarmente dagli schermi e dalle preoccupazioni.",

    "Une période de repos bien utilisée pourrait complètement modifier votre perception d’une situation difficile.":
      "Un periodo di riposo ben utilizzato potrebbe cambiare completamente la tua percezione di una situazione difficile.",

    /* HABITS */

    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité tout au long de l’année.":
      "Una nuova semplice abitudine potrebbe migliorare il tuo benessere se la manterrai con regolarità durante tutto l'anno.",

    "L’année convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "L'anno è favorevole alla ripresa graduale di un'attività fisica o di una routine di cura personale.",

    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Evita di voler trasformare tutte le tue abitudini contemporaneamente. Scegli un solo cambiamento prioritario.",

    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Una migliore idratazione e pasti più regolari potrebbero sostenere la tua energia.",

    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "La tua motivazione aumenterà se la tua routine rimarrà realistica e piacevole.",

    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Potresti scoprire che un'abitudine apparentemente insignificante influenza fortemente il tuo umore.",

    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Un'organizzazione più semplice delle tue giornate ridurrà la stanchezza legata alle decisioni ripetute.",

    "L’année favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "L'anno favorisce progressi costanti piuttosto che sforzi intensi di breve durata.",

    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Organizza il tuo ambiente in modo che favorisca le abitudini che desideri mantenere.",

    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Il tuo benessere migliorerà quando le tue azioni quotidiane saranno maggiormente in sintonia con i tuoi reali bisogni.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la mise en place de nouvelles habitudes et d’un rythme plus stable.":
      "L'inizio dell'anno favorirà l'introduzione di nuove abitudini e di un ritmo più stabile.",

    "Le printemps pourrait apporter un regain d’énergie et davantage de motivation pour bouger.":
      "La primavera potrebbe portare una rinnovata energia e una maggiore motivazione a muoverti.",

    "Le milieu de l’année demandera un meilleur équilibre entre activité, obligations et récupération.":
      "La metà dell'anno richiederà un migliore equilibrio tra attività, impegni e recupero.",

    "L’été pourrait vous aider à retrouver davantage de légèreté, à condition de ne pas surcharger votre emploi du temps.":
      "L'estate potrebbe aiutarti a ritrovare maggiore leggerezza, a condizione di non sovraccaricare i tuoi impegni.",

    "L’automne favorisera la consolidation des routines et le retour à une meilleure discipline personnelle.":
      "L'autunno favorirà il consolidamento delle routine e il ritorno a una maggiore disciplina personale.",

    "La fin de l’année demandera davantage de repos et une meilleure protection contre l’accumulation de fatigue.":
      "La fine dell'anno richiederà più riposo e una maggiore attenzione per evitare l'accumulo di stanchezza.",

    "Une période plus calme vous permettra de retrouver progressivement un niveau d’énergie plus stable.":
      "Un periodo più tranquillo ti permetterà di ritrovare gradualmente un livello di energia più stabile.",

    "Les phases les plus favorables seront celles où vous respecterez vos limites avant qu’elles ne deviennent contraignantes.":
      "Le fasi più favorevoli saranno quelle in cui rispetterai i tuoi limiti prima che diventino troppo restrittivi.",

    "Un changement de rythme pourrait devenir nécessaire au cours du deuxième semestre.":
      "Un cambiamento di ritmo potrebbe diventare necessario durante la seconda metà dell'anno.",

    "Certaines périodes demanderont davantage de douceur, tandis que d’autres seront idéales pour reprendre de l’élan.":
      "Alcuni periodi richiederanno maggiore delicatezza, mentre altri saranno ideali per ritrovare slancio.",

    /* CHALLENGE */

    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "La sfida principale sarà non ignorare la tua stanchezza solo perché alcune responsabilità sembrano urgenti.",

    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Potresti avere la tendenza a superare i tuoi limiti e poi aver bisogno di diversi giorni per recuperare.",

    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Una tensione emotiva potrebbe manifestarsi fisicamente se rimane contenuta troppo a lungo.",

    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "La mancanza di regolarità potrebbe rendere la tua energia più instabile.",

    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Potresti voler ritrovare troppo rapidamente un livello elevato di rendimento.",

    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "Il bisogno di soddisfare le aspettative degli altri potrebbe portarti a trascurare i tuoi bisogni.",

    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Una scarsa qualità del sonno potrebbe ridurre la tua pazienza e la tua concentrazione.",

    "Le défi consistera à accepter de ralentir sans vous juger.":
      "La sfida consisterà nell'accettare di rallentare senza giudicarti.",

    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Potresti confondere il riposo con l'immobilità totale. Un movimento leggero potrebbe talvolta farti ancora più bene.",

    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "Lo stress accumulato potrebbe spingerti ad adottare abitudini che danno sollievo sul momento, ma che in seguito aumentano la stanchezza.",

    /* ADVICE */

    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Pianifica i tuoi momenti di riposo con la stessa attenzione che dedichi agli altri impegni.",

    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Ascolta i primi segnali di stanchezza invece di aspettare che diventino impossibili da ignorare.",

    "Choisissez une routine simple que vous pourrez réellement maintenir pendant plusieurs mois.":
      "Scegli una routine semplice che tu possa realmente mantenere per diversi mesi.",

    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Riduci gli stimoli inutili quando senti che la tua energia diminuisce.",

    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Dedica ogni giorno qualche minuto a respirare, camminare o allontanarti dal rumore.",

    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Evita di misurare il tuo valore in base al tuo livello di produttività.",

    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Rispetta i tuoi bisogni fisici anche quando non corrispondono al ritmo degli altri.",

    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Crea un ambiente che favorisca la tranquillità, il sonno e il recupero.",

    "Cherchez la régularité plutôt que la perfection.":
      "Cerca la costanza piuttosto che la perfezione.",

    "Accordez-vous le droit de modifier votre programme lorsqu’une période demande davantage de douceur.":
      "Concediti il diritto di modificare il tuo programma quando un periodo richiede un ritmo più delicato.",

    /* CONCLUSION */

    "Cette année peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Quest'anno può aiutarti a ritrovare un'energia più stabile se rispetterai maggiormente il tuo ritmo personale.",

    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Il tuo benessere migliorerà grazie a scelte semplici, costanti e adatte ai tuoi reali bisogni.",

    "Les prochains mois vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "I prossimi mesi ti ricorderanno che il riposo è una parte essenziale del tuo equilibrio.",

    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Ascoltare meglio il tuo corpo ti permetterà di prevenire diversi periodi di stanchezza inutile.",

    "Vous pourriez terminer l’année avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Potresti concludere l'anno con una routine più rilassante e una migliore comprensione dei tuoi limiti.",

    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "La tua vitalità aumenterà man mano che ridurrai le fonti di stress evitabili.",

    "Cette année vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Quest'anno ti offre l'opportunità di ricostruire la tua energia su basi più solide.",

    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Un migliore equilibrio tra attività e recupero migliorerà il tuo benessere generale.",

    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Il tuo corpo e la tua mente ritroveranno maggiore armonia quando smetterai di lottare contro il tuo ritmo naturale.",

    "En prenant soin de votre énergie cette année, vous préparerez les prochaines périodes avec davantage de vitalité.":
      "Prendendoti cura della tua energia quest'anno, affronterai i prossimi periodi con maggiore vitalità.",
  },

   /* =======================================================
     PORTUGUESE — BRAZIL
  ======================================================= */

  pt: {
    /* INTRODUCTION */

    "Votre bien-être dépendra cette année de votre capacité à respecter votre rythme réel. Votre énergie pourrait évoluer par cycles au fil des mois.":
      "Seu bem-estar dependerá, neste ano, da sua capacidade de respeitar seu ritmo natural. Sua energia poderá variar em ciclos ao longo dos meses.",

    "Les prochains mois vous invitent à mieux écouter les signaux de votre corps. Certains ralentissements ponctuels pourraient vous aider à retrouver un meilleur équilibre.":
      "Os próximos meses convidam você a prestar mais atenção aos sinais do seu corpo. Alguns períodos pontuais de desaceleração poderão ajudá-lo a recuperar um equilíbrio melhor.",

    "Cette année met l’accent sur la récupération, la qualité du repos et la gestion plus consciente de votre énergie quotidienne.":
      "Este ano enfatiza a recuperação, a qualidade do descanso e uma gestão mais consciente da sua energia diária.",

    "Votre équilibre physique et émotionnel demandera davantage de constance. Les petites habitudes répétées auront plus d’effet que les changements brusques.":
      "Seu equilíbrio físico e emocional exigirá mais constância. Pequenos hábitos repetidos terão mais efeito do que mudanças bruscas.",

    "Une période de recentrage commence. Vous pourriez ressentir le besoin de mieux protéger votre sommeil, votre calme et vos moments de récupération.":
      "Um período de recentramento começa. Você poderá sentir a necessidade de proteger melhor seu sono, sua tranquilidade e seus momentos de recuperação.",

    "Votre vitalité pourrait s’améliorer si vous acceptez de simplifier certaines obligations et de réduire les sources de fatigue inutiles.":
      "Sua vitalidade poderá melhorar se você aceitar simplificar algumas obrigações e reduzir fontes desnecessárias de cansaço.",

    "L’année vous encourage à prendre soin de vous avant que la fatigue ne devienne trop importante.":
      "O ano incentiva você a cuidar de si antes que o cansaço se torne excessivo.",

    "Votre corps pourrait vous demander davantage d’attention. Il sera utile de distinguer une baisse d’énergie passagère d’un besoin réel de repos.":
      "Seu corpo poderá exigir mais atenção. Será importante distinguir uma queda passageira de energia de uma verdadeira necessidade de descanso.",

    "Une meilleure hygiène de vie pourrait progressivement améliorer votre énergie et votre humeur au cours des prochains mois.":
      "Hábitos de vida mais saudáveis poderão melhorar gradualmente sua energia e seu humor ao longo dos próximos meses.",

    "Cette année vous aide à retrouver un équilibre plus stable entre activité, repos et bien-être émotionnel.":
      "Este ano ajuda você a recuperar um equilíbrio mais estável entre atividade, descanso e bem-estar emocional.",

    /* ENERGY */

    "Votre énergie pourrait être plus forte pendant certaines périodes de l’année. Profitez de ces phases pour accomplir les tâches les plus exigeantes.":
      "Sua energia poderá estar mais forte durante determinados períodos do ano. Aproveite essas fases para realizar as tarefas mais exigentes.",

    "Une baisse de vitalité pourrait apparaître après une période trop chargée. Évitez d’attendre l’épuisement avant de ralentir.":
      "Uma queda de vitalidade poderá surgir depois de um período muito intenso. Evite esperar até a exaustão para diminuir o ritmo.",

    "Votre niveau d’énergie sera étroitement lié à la qualité de votre sommeil et à la régularité de vos habitudes.":
      "Seu nível de energia estará diretamente ligado à qualidade do seu sono e à regularidade dos seus hábitos.",

    "Vous pourriez connaître des périodes d’élan suivies de moments plus calmes. Respectez cette alternance sans culpabilité.":
      "Você poderá passar por períodos de grande disposição seguidos de momentos mais tranquilos. Respeite essa alternância sem culpa.",

    "Une activité physique modérée pourrait vous aider à retrouver davantage de tonus et de clarté mentale.":
      "Uma atividade física moderada poderá ajudar você a recuperar mais disposição e clareza mental.",

    "Votre énergie augmentera lorsque vous cesserez de vous disperser dans des tâches secondaires.":
      "Sua energia aumentará quando você deixar de se dispersar com tarefas secundárias.",

    "Vous pourriez ressentir le besoin de bouger davantage. Choisissez une activité agréable plutôt qu’une discipline trop exigeante.":
      "Você poderá sentir necessidade de se movimentar mais. Escolha uma atividade agradável em vez de uma disciplina muito exigente.",

    "Un rythme plus régulier vous permettra de conserver votre énergie plus longtemps au fil de l’année.":
      "Um ritmo mais regular permitirá que você preserve sua energia por mais tempo ao longo do ano.",

    "Votre vitalité pourrait être influencée par votre environnement. Le calme, l’air frais et l’ordre vous feront du bien.":
      "Sua vitalidade poderá ser influenciada pelo ambiente ao seu redor. Tranquilidade, ar fresco e organização farão bem a você.",

    "Vous gagnerez à prévoir des pauses avant que votre concentration et votre patience ne diminuent.":
      "Será benéfico planejar pausas antes que sua concentração e sua paciência diminuam.",

    /* EMOTIONAL BALANCE */

    "Votre sensibilité pourrait être plus forte pendant certaines périodes. Accordez-vous du recul avant de réagir à une situation chargée émotionnellement.":
      "Sua sensibilidade poderá estar mais intensa durante determinados períodos. Dê a si mesmo algum distanciamento antes de reagir a uma situação emocionalmente carregada.",

    "Une émotion ancienne pourrait refaire surface afin d’être comprise différemment.":
      "Uma emoção antiga poderá voltar à tona para ser compreendida de uma maneira diferente.",

    "Vous pourriez absorber plus facilement les tensions des autres. Protégez votre espace intérieur.":
      "Você poderá absorver com mais facilidade as tensões das outras pessoas. Proteja seu espaço interior.",

    "Le calme reviendra lorsque vous cesserez d’essayer de résoudre immédiatement chaque inconfort.":
      "A calma retornará quando você deixar de tentar resolver imediatamente cada desconforto.",

    "Une conversation sincère pourrait alléger une pression émotionnelle accumulée depuis quelque temps.":
      "Uma conversa sincera poderá aliviar uma pressão emocional acumulada há algum tempo.",

    "Votre équilibre dépendra de votre capacité à exprimer vos besoins avant d’atteindre votre limite.":
      "Seu equilíbrio dependerá da sua capacidade de expressar suas necessidades antes de chegar ao seu limite.",

    "Vous pourriez ressentir un besoin plus grand de solitude ou de silence. Respectez-le sans vous isoler complètement.":
      "Você poderá sentir uma necessidade maior de solidão ou silêncio. Respeite essa necessidade sem se isolar completamente.",

    "Un changement d’environnement ou de rythme pourrait vous aider à retrouver une meilleure perspective.":
      "Uma mudança de ambiente ou de ritmo poderá ajudar você a recuperar uma perspectiva melhor.",

    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Seu humor poderá melhorar graças a uma rotina simples e reconfortante.",

    "L’année vous invite à faire davantage de place aux activités qui vous apaisent réellement.":
      "O ano convida você a reservar mais espaço para atividades que realmente proporcionem tranquilidade.",

    /* REST */

    "Votre sommeil mérite une attention particulière cette année. Une routine plus stable pourrait améliorer durablement votre récupération.":
      "Seu sono merece atenção especial neste ano. Uma rotina mais estável poderá melhorar sua recuperação de maneira duradoura.",

    "Évitez de prolonger vos journées simplement pour terminer une tâche qui pourrait attendre.":
      "Evite prolongar seus dias apenas para terminar uma tarefa que poderia esperar.",

    "Votre corps pourrait avoir besoin de davantage de repos pendant certaines périodes. Ne considérez pas cela comme un manque de motivation.":
      "Seu corpo poderá precisar de mais descanso durante determinados períodos. Não considere isso uma falta de motivação.",

    "Une meilleure transition entre activité et sommeil pourrait réduire les tensions accumulées.":
      "Uma transição melhor entre atividade e sono poderá reduzir as tensões acumuladas.",

    "L’année favorise les moments de pause planifiés plutôt que les arrêts imposés par la fatigue.":
      "O ano favorece momentos de pausa planejados em vez de interrupções impostas pelo cansaço.",

    "Vous pourriez bénéficier d’un environnement plus calme avant le coucher.":
      "Você poderá se beneficiar de um ambiente mais tranquilo antes de dormir.",

    "Une courte période de repos en journée pourrait être utile si elle ne perturbe pas votre sommeil nocturne.":
      "Um curto período de descanso durante o dia poderá ser útil, desde que não prejudique seu sono noturno.",

    "Votre récupération sera meilleure si vous limitez les stimulations tard en soirée.":
      "Sua recuperação será melhor se você limitar os estímulos no final da noite.",

    "Le repos mental sera aussi important que le repos physique. Éloignez-vous régulièrement des écrans et des préoccupations.":
      "O descanso mental será tão importante quanto o descanso físico. Afaste-se regularmente das telas e das preocupações.",

    "Une période de repos bien utilisée pourrait complètement modifier votre perception d’une situation difficile.":
      "Um período de descanso bem aproveitado poderá mudar completamente sua percepção de uma situação difícil.",

    /* HABITS */

    "Une nouvelle habitude simple pourrait améliorer votre bien-être si vous la répétez avec régularité tout au long de l’année.":
      "Um novo hábito simples poderá melhorar seu bem-estar se você o mantiver com regularidade ao longo do ano.",

    "L’année convient bien à la reprise progressive d’une activité physique ou d’une routine de soins.":
      "O ano é favorável para retomar gradualmente uma atividade física ou uma rotina de cuidados pessoais.",

    "Évitez de vouloir transformer toutes vos habitudes en même temps. Choisissez un seul changement prioritaire.":
      "Evite tentar transformar todos os seus hábitos ao mesmo tempo. Escolha apenas uma mudança prioritária.",

    "Une meilleure hydratation et des repas plus réguliers pourraient soutenir votre énergie.":
      "Uma hidratação melhor e refeições mais regulares poderão contribuir para sua energia.",

    "Votre motivation augmentera si votre routine reste réaliste et agréable.":
      "Sua motivação aumentará se sua rotina permanecer realista e agradável.",

    "Vous pourriez constater qu’une habitude apparemment banale influence fortement votre humeur.":
      "Você poderá perceber que um hábito aparentemente simples influencia bastante seu humor.",

    "Une organisation plus simple de vos journées réduira la fatigue liée aux décisions répétées.":
      "Uma organização mais simples dos seus dias reduzirá o cansaço relacionado a decisões repetidas.",

    "L’année favorise les progrès constants plutôt que les efforts intenses de courte durée.":
      "O ano favorece progressos constantes em vez de esforços intensos de curta duração.",

    "Préparez votre environnement afin qu’il facilite les habitudes que vous souhaitez conserver.":
      "Prepare seu ambiente para facilitar os hábitos que você deseja manter.",

    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Seu bem-estar melhorará quando suas ações diárias estiverem mais alinhadas às suas necessidades reais.",

    /* KEY PERIODS */

    "Le début de l’année favorisera la mise en place de nouvelles habitudes et d’un rythme plus stable.":
      "O início do ano favorecerá a criação de novos hábitos e de um ritmo mais estável.",

    "Le printemps pourrait apporter un regain d’énergie et davantage de motivation pour bouger.":
      "A primavera poderá trazer uma renovação de energia e mais motivação para se movimentar.",

    "Le milieu de l’année demandera un meilleur équilibre entre activité, obligations et récupération.":
      "O meio do ano exigirá um equilíbrio melhor entre atividade, obrigações e recuperação.",

    "L’été pourrait vous aider à retrouver davantage de légèreté, à condition de ne pas surcharger votre emploi du temps.":
      "O verão poderá ajudar você a recuperar mais leveza, desde que não sobrecarregue sua agenda.",

    "L’automne favorisera la consolidation des routines et le retour à une meilleure discipline personnelle.":
      "O outono favorecerá a consolidação das rotinas e o retorno a uma disciplina pessoal maior.",

    "La fin de l’année demandera davantage de repos et une meilleure protection contre l’accumulation de fatigue.":
      "O final do ano exigirá mais descanso e uma proteção melhor contra o acúmulo de cansaço.",

    "Une période plus calme vous permettra de retrouver progressivement un niveau d’énergie plus stable.":
      "Um período mais tranquilo permitirá que você recupere gradualmente um nível de energia mais estável.",

    "Les phases les plus favorables seront celles où vous respecterez vos limites avant qu’elles ne deviennent contraignantes.":
      "As fases mais favoráveis serão aquelas em que você respeitar seus limites antes que eles se tornem restritivos.",

    "Un changement de rythme pourrait devenir nécessaire au cours du deuxième semestre.":
      "Uma mudança de ritmo poderá se tornar necessária durante o segundo semestre.",

    "Certaines périodes demanderont davantage de douceur, tandis que d’autres seront idéales pour reprendre de l’élan.":
      "Alguns períodos exigirão mais suavidade, enquanto outros serão ideais para recuperar o impulso.",

    /* CHALLENGE */

    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "O principal desafio será não ignorar seu cansaço apenas porque algumas responsabilidades parecem urgentes.",

    "Vous pourriez avoir tendance à dépasser vos limites puis à perdre plusieurs jours à récupérer.":
      "Você poderá ter a tendência de ultrapassar seus limites e depois precisar de vários dias para se recuperar.",

    "Une tension émotionnelle pourrait se manifester physiquement si elle reste trop longtemps contenue.":
      "Uma tensão emocional poderá se manifestar fisicamente se permanecer contida por tempo demais.",

    "Le manque de régularité pourrait rendre votre énergie plus instable.":
      "A falta de regularidade poderá tornar sua energia mais instável.",

    "Vous pourriez vouloir retrouver trop rapidement un niveau de performance élevé.":
      "Você poderá querer recuperar rapidamente demais um nível elevado de desempenho.",

    "Le besoin de répondre aux attentes des autres pourrait vous faire négliger vos propres besoins.":
      "A necessidade de corresponder às expectativas dos outros poderá fazer você negligenciar suas próprias necessidades.",

    "Une mauvaise qualité de sommeil pourrait diminuer votre patience et votre concentration.":
      "Uma qualidade ruim de sono poderá diminuir sua paciência e sua concentração.",

    "Le défi consistera à accepter de ralentir sans vous juger.":
      "O desafio será aceitar diminuir o ritmo sem se julgar.",

    "Vous pourriez confondre repos et immobilité totale. Un mouvement doux pourrait parfois vous faire davantage de bien.":
      "Você poderá confundir descanso com imobilidade total. Um movimento leve poderá, em alguns momentos, fazer ainda mais bem.",

    "Le stress accumulé pourrait vous pousser à adopter des habitudes qui soulagent sur le moment, mais fatiguent davantage ensuite.":
      "O estresse acumulado poderá levar você a adotar hábitos que proporcionam alívio no momento, mas provocam mais cansaço depois.",

    /* ADVICE */

    "Planifiez vos moments de repos avec autant de sérieux que vos autres obligations.":
      "Planeje seus momentos de descanso com a mesma seriedade que suas outras obrigações.",

    "Écoutez les premiers signes de fatigue au lieu d’attendre qu’ils deviennent impossibles à ignorer.":
      "Preste atenção aos primeiros sinais de cansaço em vez de esperar até que se tornem impossíveis de ignorar.",

    "Choisissez une routine simple que vous pourrez réellement maintenir pendant plusieurs mois.":
      "Escolha uma rotina simples que você realmente consiga manter durante vários meses.",

    "Réduisez les stimulations inutiles lorsque vous sentez votre énergie diminuer.":
      "Reduza estímulos desnecessários quando sentir sua energia diminuindo.",

    "Prenez quelques minutes chaque jour pour respirer, marcher ou vous éloigner du bruit.":
      "Reserve alguns minutos todos os dias para respirar, caminhar ou se afastar do barulho.",

    "Évitez de mesurer votre valeur selon votre niveau de productivité.":
      "Evite medir seu valor pelo seu nível de produtividade.",

    "Respectez vos besoins physiques même lorsqu’ils ne correspondent pas au rythme des autres.":
      "Respeite suas necessidades físicas mesmo quando elas não correspondem ao ritmo das outras pessoas.",

    "Créez un environnement qui favorise le calme, le sommeil et la récupération.":
      "Crie um ambiente que favoreça a tranquilidade, o sono e a recuperação.",

    "Cherchez la régularité plutôt que la perfection.":
      "Busque a constância em vez da perfeição.",

    "Accordez-vous le droit de modifier votre programme lorsqu’une période demande davantage de douceur.":
      "Permita-se modificar sua programação quando um período exigir mais suavidade.",

    /* CONCLUSION */

    "Cette année peut vous aider à retrouver une énergie plus stable si vous respectez davantage votre rythme personnel.":
      "Este ano poderá ajudar você a recuperar uma energia mais estável se respeitar melhor seu ritmo pessoal.",

    "Votre bien-être progressera grâce à des choix simples, constants et adaptés à vos besoins réels.":
      "Seu bem-estar melhorará graças a escolhas simples, constantes e adaptadas às suas necessidades reais.",

    "Les prochains mois vous rappelleront que le repos est une partie essentielle de votre équilibre.":
      "Os próximos meses lembrarão você de que o descanso é uma parte essencial do seu equilíbrio.",

    "Une meilleure écoute de votre corps vous permettra de prévenir plusieurs périodes de fatigue inutile.":
      "Ouvir melhor o seu corpo permitirá evitar vários períodos de cansaço desnecessário.",

    "Vous pourriez terminer l’année avec une routine plus apaisante et une meilleure compréhension de vos limites.":
      "Você poderá terminar o ano com uma rotina mais tranquila e uma compreensão melhor dos seus limites.",

    "Votre vitalité augmentera à mesure que vous réduirez les sources de stress évitables.":
      "Sua vitalidade aumentará à medida que você reduzir as fontes de estresse evitáveis.",

    "Cette année vous offre l’occasion de reconstruire votre énergie sur des bases plus solides.":
      "Este ano oferece a oportunidade de reconstruir sua energia sobre bases mais sólidas.",

    "Un meilleur équilibre entre action et récupération améliorera votre état général.":
      "Um equilíbrio melhor entre atividade e recuperação melhorará seu bem-estar geral.",

    "Votre corps et votre esprit retrouveront davantage d’harmonie lorsque vous cesserez de lutter contre votre propre rythme.":
      "Seu corpo e sua mente recuperarão mais harmonia quando você deixar de lutar contra seu próprio ritmo.",

    "En prenant soin de votre énergie cette année, vous préparerez les prochaines périodes avec davantage de vitalité.":
      "Ao cuidar da sua energia neste ano, você estará mais preparado para os próximos períodos com maior vitalidade.",
  },
};

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(
  source: string,
  translations: TranslationMap,
): string {
  let result = source;

  for (
    const [french, translated] of
    Object.entries(translations)
  ) {
    result =
      result.split(french).join(translated);
  }

  return result;
}

/* =========================================================
   MAIN LOCALIZER — YEAR HOROSCOPE HEALTH
========================================================= */

export function localizeYearHoroscopeHealth(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let localized = source;

  localized = applyTranslations(
    localized,
    HEALTH_TITLES[locale],
  );

  localized = applyTranslations(
    localized,
    HEALTH_TEXTS[locale],
  );

  return localized;
}
