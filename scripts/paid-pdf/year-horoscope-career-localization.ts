import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap = Record<
  string,
  string
>;

/* =========================================================
   YEAR HOROSCOPE — CAREER TITLES
   buildYearlyCareer.ts
========================================================= */

const CAREER_TITLES: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
    "Une année pour construire votre avenir professionnel":
      "A Year to Build Your Professional Future",

    "Votre carrière entre dans une nouvelle phase":
      "Your Career Enters a New Phase",

    "Une progression fondée sur la constance":
      "Progress Built on Consistency",

    "Vos ambitions prennent une direction plus claire":
      "Your Ambitions Take a Clearer Direction",

    "Une année de consolidation et d’évolution":
      "A Year of Consolidation and Growth",

    "Votre potentiel professionnel gagne en visibilité":
      "Your Professional Potential Gains Visibility",

    "De nouvelles perspectives se dessinent":
      "New Perspectives Are Taking Shape",

    "Une année pour affirmer vos compétences":
      "A Year to Assert Your Skills",
  },

  es: {
    "Une année pour construire votre avenir professionnel":
      "Un año para construir tu futuro profesional",

    "Votre carrière entre dans une nouvelle phase":
      "Tu carrera entra en una nueva etapa",

    "Une progression fondée sur la constance":
      "Un progreso basado en la constancia",

    "Vos ambitions prennent une direction plus claire":
      "Tus ambiciones toman una dirección más clara",

    "Une année de consolidation et d’évolution":
      "Un año de consolidación y evolución",

    "Votre potentiel professionnel gagne en visibilité":
      "Tu potencial profesional gana visibilidad",

    "De nouvelles perspectives se dessinent":
      "Se perfilan nuevas perspectivas",

    "Une année pour affirmer vos compétences":
      "Un año para afirmar tus competencias",
  },

  de: {
    "Une année pour construire votre avenir professionnel":
      "Ein Jahr, um Ihre berufliche Zukunft aufzubauen",

    "Votre carrière entre dans une nouvelle phase":
      "Ihre Karriere tritt in eine neue Phase ein",

    "Une progression fondée sur la constance":
      "Fortschritt durch Beständigkeit",

    "Vos ambitions prennent une direction plus claire":
      "Ihre Ambitionen erhalten eine klarere Richtung",

    "Une année de consolidation et d’évolution":
      "Ein Jahr der Festigung und Entwicklung",

    "Votre potentiel professionnel gagne en visibilité":
      "Ihr berufliches Potenzial wird sichtbarer",

    "De nouvelles perspectives se dessinent":
      "Neue Perspektiven zeichnen sich ab",

    "Une année pour affirmer vos compétences":
      "Ein Jahr, um Ihre Fähigkeiten zu stärken",
  },

  it: {
    "Une année pour construire votre avenir professionnel":
      "Un anno per costruire il tuo futuro professionale",

    "Votre carrière entre dans une nouvelle phase":
      "La tua carriera entra in una nuova fase",

    "Une progression fondée sur la constance":
      "Un progresso fondato sulla costanza",

    "Vos ambitions prennent une direction plus claire":
      "Le tue ambizioni prendono una direzione più chiara",

    "Une année de consolidation et d’évolution":
      "Un anno di consolidamento e crescita",

    "Votre potentiel professionnel gagne en visibilité":
      "Il tuo potenziale professionale acquista visibilità",

    "De nouvelles perspectives se dessinent":
      "Si delineano nuove prospettive",

    "Une année pour affirmer vos compétences":
      "Un anno per affermare le tue competenze",
  },

  pt: {
    "Une année pour construire votre avenir professionnel":
      "Um ano para construir seu futuro profissional",

    "Votre carrière entre dans une nouvelle phase":
      "Sua carreira entra em uma nova fase",

    "Une progression fondée sur la constance":
      "Um progresso baseado na constância",

    "Vos ambitions prennent une direction plus claire":
      "Suas ambições ganham uma direção mais clara",

    "Une année de consolidation et d’évolution":
      "Um ano de consolidação e evolução",

    "Votre potentiel professionnel gagne en visibilité":
      "Seu potencial profissional ganha visibilidade",

    "De nouvelles perspectives se dessinent":
      "Novas perspectivas começam a surgir",

    "Une année pour affirmer vos compétences":
      "Um ano para afirmar suas competências",
  },
};

/* =========================================================
   YEAR HOROSCOPE — CAREER TEXTS
========================================================= */

const CAREER_TEXTS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* INTRODUCTION */

    "Votre vie professionnelle entre dans une année où la vision à long terme jouera un rôle déterminant. Les prochains mois vous aideront à construire des bases plus solides.":
      "Your professional life enters a year in which long-term vision will play a decisive role. The coming months will help you build stronger foundations.",

    "Cette année favorise une progression réfléchie dans votre carrière. Certaines décisions prises récemment commenceront progressivement à produire leurs effets.":
      "This year favors thoughtful progress in your career. Some recent decisions will gradually begin to produce results.",

    "Le climat professionnel vous invite à revoir votre manière d'investir votre temps, votre énergie et vos priorités. Une meilleure organisation pourrait transformer votre efficacité.":
      "The professional climate invites you to reconsider how you invest your time, energy and priorities. Better organization could transform your effectiveness.",

    "Votre carrière pourrait connaître une évolution importante. Il ne s'agira pas forcément d'un changement spectaculaire, mais d'une progression durable.":
      "Your career could undergo significant development. It may not be a spectacular change, but rather lasting progress.",

    "Une année de consolidation commence. Vous serez amené à protéger ce qui fonctionne tout en améliorant les aspects qui limitent encore votre évolution.":
      "A year of consolidation begins. You will be encouraged to protect what works while improving the areas that still limit your progress.",

    "Cette période met en lumière vos ambitions profondes. Vous pourriez ressentir le besoin de construire un projet davantage aligné avec vos valeurs.":
      "This period highlights your deepest ambitions. You may feel the need to build a project that is more closely aligned with your values.",

    "Votre environnement professionnel demandera parfois de l'adaptation. Votre souplesse deviendra un véritable atout face aux changements.":
      "Your professional environment will sometimes require adaptation. Your flexibility will become a genuine asset when facing change.",

    "Les prochains mois vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d'être présenté avec davantage d'assurance.":
      "The coming months encourage you to better recognize the value of your skills. Your work deserves to be presented with greater confidence.",

    "Une nouvelle dynamique pourrait progressivement s'installer dans votre quotidien professionnel. Les efforts passés commenceront à devenir plus visibles.":
      "A new dynamic could gradually emerge in your professional life. Past efforts will begin to become more visible.",

    "Cette année vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière pour les années à venir.":
      "This year encourages you to reflect on the direction you truly want your career to take in the years ahead.",

    /* GENERAL */

    "Votre efficacité dépendra principalement de votre capacité à distinguer les tâches urgentes des objectifs réellement importants.":
      "Your effectiveness will depend mainly on your ability to distinguish urgent tasks from truly important goals.",

    "Une meilleure organisation vous permettra d'avancer avec davantage de constance. La régularité produira plus de résultats que les efforts ponctuels.":
      "Better organization will allow you to move forward more consistently. Regular effort will produce better results than occasional bursts of effort.",

    "Votre travail pourrait être remarqué par une personne capable d'influencer positivement votre évolution professionnelle.":
      "Your work could be noticed by someone capable of positively influencing your professional development.",

    "Une évolution dans vos méthodes pourrait améliorer considérablement votre productivité. Restez ouvert aux nouvelles façons de travailler.":
      "A change in your methods could considerably improve your productivity. Remain open to new ways of working.",

    "Vous pourriez ressentir un besoin croissant d'autonomie. Cherchez davantage de liberté tout en respectant vos engagements.":
      "You may feel a growing need for autonomy. Seek greater freedom while honoring your commitments.",

    "Votre progression sera progressive mais solide. Chaque étape préparera naturellement la suivante.":
      "Your progress will be gradual but solid. Each step will naturally prepare the next.",

    "Certaines responsabilités demanderont davantage de concentration. Une approche structurée évitera une fatigue inutile.":
      "Some responsibilities will require greater concentration. A structured approach will help prevent unnecessary fatigue.",

    "Votre capacité à résoudre des problèmes complexes renforcera progressivement votre crédibilité.":
      "Your ability to solve complex problems will gradually strengthen your credibility.",

    "Cette année vous invite à travailler avec davantage de stratégie plutôt qu'avec davantage d'efforts.":
      "This year invites you to work more strategically rather than simply working harder.",

    "Une situation professionnelle deviendra progressivement plus claire grâce à une meilleure compréhension de votre environnement.":
      "A professional situation will gradually become clearer as you gain a better understanding of your environment.",

    /* PROJECTS */

    "Un projet qui avançait lentement pourrait finalement prendre de l'ampleur au cours de l'année.":
      "A project that was moving slowly could finally gain momentum during the year.",

    "Une idée ancienne mérite probablement d'être développée davantage. Les prochains mois sont favorables à sa structuration.":
      "An old idea probably deserves further development. The coming months are favorable for giving it structure.",

    "Vous pourriez modifier certains éléments de votre plan initial. Cette adaptation renforcera vos chances de réussite.":
      "You may modify certain elements of your original plan. This adaptation will strengthen your chances of success.",

    "L'année favorise les projets demandant de la patience, de la méthode et une vision à long terme.":
      "The year favors projects requiring patience, method and long-term vision.",

    "Une collaboration pourrait accélérer votre progression. Choisissez des partenaires partageant vos objectifs.":
      "A collaboration could accelerate your progress. Choose partners who share your goals.",

    "Un projet personnel pourrait progressivement prendre une place plus importante dans votre quotidien.":
      "A personal project could gradually take on a more important place in your daily life.",

    "Une réponse longtemps attendue pourrait enfin arriver. Préparez-vous à agir rapidement lorsque l'occasion se présentera.":
      "A long-awaited answer could finally arrive. Be prepared to act quickly when the opportunity arises.",

    "Une nouvelle responsabilité pourrait modifier votre organisation, mais aussi ouvrir une évolution positive.":
      "A new responsibility could change your organization while also opening the door to positive development.",

    "L'année convient particulièrement à la réalisation de projets ambitieux demandant plusieurs étapes.":
      "The year is particularly favorable for ambitious projects requiring several stages.",

    "Votre créativité pourrait devenir l'un de vos meilleurs leviers de progression.":
      "Your creativity could become one of your strongest drivers of progress.",

    /* PROFESSIONAL EVOLUTION */

    "Votre carrière pourrait évoluer plus rapidement que vous ne l'imaginez actuellement si vous acceptez de sortir progressivement de votre zone de confort.":
      "Your career could progress faster than you currently imagine if you gradually step outside your comfort zone.",

    "Une nouvelle compétence acquise cette année pourrait ouvrir des portes importantes dans les années suivantes.":
      "A new skill acquired this year could open important doors in the years ahead.",

    "Votre crédibilité continuera de grandir grâce à votre constance et à votre sérieux.":
      "Your credibility will continue to grow through your consistency and professionalism.",

    "Une évolution de poste, de responsabilités ou de statut pourrait devenir envisageable.":
      "A change in position, responsibilities or status could become possible.",

    "Cette année favorise les décisions construites sur une vision durable plutôt que sur des résultats immédiats.":
      "This year favors decisions based on a lasting vision rather than immediate results.",

    "Vous développerez progressivement davantage de confiance dans vos capacités professionnelles.":
      "You will gradually develop greater confidence in your professional abilities.",

    "Votre expérience deviendra un véritable avantage compétitif face à de nouveaux défis.":
      "Your experience will become a genuine competitive advantage when facing new challenges.",

    "Les prochains mois pourraient modifier votre façon de définir la réussite professionnelle.":
      "The coming months could change the way you define professional success.",

    "Vous pourriez découvrir une nouvelle orientation correspondant davantage à vos aspirations profondes.":
      "You may discover a new direction that better reflects your deepest aspirations.",

    "Chaque étape franchie renforcera progressivement votre indépendance professionnelle.":
      "Each step you complete will gradually strengthen your professional independence.",

    /* PROFESSIONAL RELATIONSHIPS */

    "Les échanges professionnels gagneront à rester simples, précis et transparents.":
      "Professional exchanges will benefit from remaining simple, precise and transparent.",

    "Une personne expérimentée pourrait devenir un mentor ou un allié précieux.":
      "An experienced person could become a valuable mentor or ally.",

    "Une tension pourrait être résolue grâce à une communication directe.":
      "A tension could be resolved through direct communication.",

    "Votre diplomatie vous aidera à défendre vos idées sans créer de conflits inutiles.":
      "Your diplomacy will help you defend your ideas without creating unnecessary conflict.",

    "Une collaboration importante pourrait naître d'une rencontre apparemment anodine.":
      "An important collaboration could emerge from a seemingly ordinary encounter.",

    "Votre professionnalisme renforcera naturellement votre réputation.":
      "Your professionalism will naturally strengthen your reputation.",

    "Un collègue ou un partenaire pourrait jouer un rôle déterminant dans votre progression.":
      "A colleague or partner could play a decisive role in your progress.",

    "Votre réseau professionnel gagnera progressivement en importance.":
      "Your professional network will gradually become more important.",

    "Une ancienne relation professionnelle pourrait réapparaître sous une forme favorable.":
      "A former professional connection could reappear in a favorable way.",

    "Le dialogue restera votre meilleur outil pour résoudre les désaccords.":
      "Dialogue will remain your best tool for resolving disagreements.",

    /* OPPORTUNITIES */

    "Une évolution importante pourrait prendre la forme d'un nouveau mandat, d'une promotion ou d'un partenariat.":
      "An important development could take the form of a new assignment, promotion or partnership.",

    "Une compétence rarement utilisée pourrait devenir votre principal avantage.":
      "A rarely used skill could become your main advantage.",

    "Cette année favorise les candidatures, les négociations et les nouvelles initiatives.":
      "This year favors applications, negotiations and new initiatives.",

    "Une opportunité modeste au départ pourrait produire des effets durables.":
      "An opportunity that seems modest at first could produce lasting results.",

    "Vous pourriez participer à un projet augmentant votre visibilité professionnelle.":
      "You could participate in a project that increases your professional visibility.",

    "Une amélioration de vos conditions de travail deviendra possible grâce à une meilleure communication.":
      "An improvement in your working conditions could become possible through better communication.",

    "Une nouvelle source de revenus pourrait progressivement apparaître.":
      "A new source of income could gradually emerge.",

    "Une formation ou un apprentissage stratégique pourrait accélérer votre évolution.":
      "Training or strategic learning could accelerate your development.",

    "Votre capacité à prendre une initiative au bon moment fera la différence.":
      "Your ability to take initiative at the right moment will make the difference.",

    "Une rencontre pourrait transformer positivement votre vision de votre avenir professionnel.":
      "An encounter could positively transform your vision of your professional future.",

    /* KEY PERIODS */

    "Le début de l'année favorisera la préparation et la planification des grands projets.":
      "The beginning of the year will favor preparation and planning for major projects.",

    "Le printemps pourrait accélérer plusieurs dossiers restés en attente.":
      "Spring could accelerate several matters that have remained on hold.",

    "Le milieu de l'année favorisera les collaborations et les décisions importantes.":
      "The middle of the year will favor collaborations and important decisions.",

    "L'été permettra de consolider les progrès déjà réalisés.":
      "Summer will allow you to consolidate the progress already made.",

    "L'automne sera particulièrement favorable aux nouveaux projets et aux responsabilités accrues.":
      "Autumn will be particularly favorable for new projects and increased responsibilities.",

    "La fin de l'année favorisera les bilans, les récompenses et les nouvelles perspectives.":
      "The end of the year will favor reflection, rewards and new perspectives.",

    "Certaines occasions demanderont une réaction rapide au cours du deuxième semestre.":
      "Some opportunities will require a quick response during the second half of the year.",

    "Les périodes les plus favorables seront celles où vous resterez fidèle à votre stratégie.":
      "The most favorable periods will be those in which you remain faithful to your strategy.",

    "Une phase de ralentissement apparent permettra finalement de préparer une évolution plus importante.":
      "A period of apparent slowdown will ultimately help prepare for a more significant development.",

    "La patience deviendra votre meilleur allié lorsque les résultats sembleront tarder.":
      "Patience will become your best ally when results seem slow to arrive.",

    /* CHALLENGES */

    "Le principal défi sera d'éviter la dispersion.":
      "The main challenge will be to avoid scattering your efforts.",

    "Vous pourriez accepter davantage de responsabilités que nécessaire.":
      "You may take on more responsibilities than necessary.",

    "L'impatience pourrait vous pousser à modifier trop rapidement une stratégie efficace.":
      "Impatience could push you to change an effective strategy too quickly.",

    "Veillez à ne pas confondre activité et réelle progression.":
      "Be careful not to confuse activity with genuine progress.",

    "Une critique pourrait temporairement affecter votre confiance.":
      "Criticism could temporarily affect your confidence.",

    "Le besoin de tout contrôler pourrait ralentir certains projets.":
      "The need to control everything could slow down certain projects.",

    "Des situations ambiguës demanderont davantage de communication.":
      "Ambiguous situations will require greater communication.",

    "Votre concentration devra être protégée des nombreuses distractions.":
      "Your concentration will need to be protected from numerous distractions.",

    "Le perfectionnisme pourrait retarder la finalisation de certains objectifs.":
      "Perfectionism could delay the completion of certain goals.",

    "Le défi principal sera de préserver votre équilibre tout en poursuivant vos ambitions.":
      "The main challenge will be to preserve your balance while pursuing your ambitions.",

    /* ADVICE */

    "Définissez des objectifs réalistes pour chaque trimestre.":
      "Set realistic goals for each quarter.",

    "Présentez vos idées avec confiance et méthode.":
      "Present your ideas with confidence and method.",

    "Construisez votre progression étape par étape.":
      "Build your progress step by step.",

    "Investissez votre énergie dans les projets ayant un véritable potentiel.":
      "Invest your energy in projects with genuine potential.",

    "Développez continuellement vos compétences.":
      "Continuously develop your skills.",

    "Acceptez les ajustements sans perdre votre objectif principal.":
      "Accept adjustments without losing sight of your main objective.",

    "N'hésitez pas à demander conseil aux personnes expérimentées.":
      "Do not hesitate to seek advice from experienced people.",

    "Prenez le temps de reconnaître les progrès déjà accomplis.":
      "Take the time to recognize the progress you have already made.",

    "Préservez un bon équilibre entre ambition et qualité de vie.":
      "Maintain a healthy balance between ambition and quality of life.",

    "Faites preuve de constance : les résultats les plus durables demandent du temps.":
      "Be consistent: the most lasting results take time.",

    /* CONCLUSION */

    "Cette année peut renforcer durablement votre position professionnelle si vous avancez avec méthode et confiance.":
      "This year can strengthen your professional position over the long term if you move forward with method and confidence.",

    "Votre progression dépendra davantage de votre constance que de la rapidité de vos résultats.":
      "Your progress will depend more on your consistency than on the speed of your results.",

    "Une nouvelle étape importante pourrait commencer dans votre carrière.":
      "An important new stage could begin in your career.",

    "Vous développerez progressivement une vision beaucoup plus claire de votre avenir professionnel.":
      "You will gradually develop a much clearer vision of your professional future.",

    "Cette année pourrait devenir un véritable tournant dans votre évolution.":
      "This year could become a genuine turning point in your development.",

    "Vos compétences gagneront progressivement en reconnaissance.":
      "Your skills will gradually gain recognition.",

    "Votre carrière évoluera favorablement si vous restez fidèle à vos objectifs.":
      "Your career will develop favorably if you remain committed to your goals.",

    "Les décisions prises cette année auront des effets positifs pendant plusieurs années.":
      "The decisions made this year will have positive effects for several years.",

    "Une progression discrète mais solide représentera votre plus grande réussite.":
      "Quiet but solid progress will represent your greatest achievement.",

    "Votre avenir professionnel gagnera en stabilité à mesure que vous construirez sur des bases durables.":
      "Your professional future will become more stable as you build on lasting foundations.",
  },
    /* =======================================================
     SPANISH
  ======================================================= */

  es: {
    /* INTRODUCTION */

    "Votre vie professionnelle entre dans une année où la vision à long terme jouera un rôle déterminant. Les prochains mois vous aideront à construire des bases plus solides.":
      "Tu vida profesional entra en un año en el que la visión a largo plazo desempeñará un papel determinante. Los próximos meses te ayudarán a construir bases más sólidas.",

    "Cette année favorise une progression réfléchie dans votre carrière. Certaines décisions prises récemment commenceront progressivement à produire leurs effets.":
      "Este año favorece un progreso reflexivo en tu carrera. Algunas decisiones tomadas recientemente comenzarán poco a poco a producir sus efectos.",

    "Le climat professionnel vous invite à revoir votre manière d'investir votre temps, votre énergie et vos priorités. Une meilleure organisation pourrait transformer votre efficacité.":
      "El clima profesional te invita a revisar la manera en que inviertes tu tiempo, tu energía y tus prioridades. Una mejor organización podría transformar tu eficacia.",

    "Votre carrière pourrait connaître une évolution importante. Il ne s'agira pas forcément d'un changement spectaculaire, mais d'une progression durable.":
      "Tu carrera podría experimentar una evolución importante. No se tratará necesariamente de un cambio espectacular, sino de un progreso duradero.",

    "Une année de consolidation commence. Vous serez amené à protéger ce qui fonctionne tout en améliorant les aspects qui limitent encore votre évolution.":
      "Comienza un año de consolidación. Tendrás que proteger lo que funciona mientras mejoras los aspectos que todavía limitan tu evolución.",

    "Cette période met en lumière vos ambitions profondes. Vous pourriez ressentir le besoin de construire un projet davantage aligné avec vos valeurs.":
      "Este período pone de relieve tus ambiciones más profundas. Podrías sentir la necesidad de construir un proyecto más alineado con tus valores.",

    "Votre environnement professionnel demandera parfois de l'adaptation. Votre souplesse deviendra un véritable atout face aux changements.":
      "Tu entorno profesional exigirá adaptación en algunos momentos. Tu flexibilidad se convertirá en una verdadera ventaja frente a los cambios.",

    "Les prochains mois vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d'être présenté avec davantage d'assurance.":
      "Los próximos meses te animan a reconocer mejor el valor de tus competencias. Tu trabajo merece ser presentado con mayor seguridad.",

    "Une nouvelle dynamique pourrait progressivement s'installer dans votre quotidien professionnel. Les efforts passés commenceront à devenir plus visibles.":
      "Una nueva dinámica podría instalarse progresivamente en tu vida profesional cotidiana. Los esfuerzos del pasado comenzarán a hacerse más visibles.",

    "Cette année vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière pour les années à venir.":
      "Este año te impulsa a reflexionar sobre la dirección que realmente deseas dar a tu carrera en los próximos años.",

    /* GENERAL */

    "Votre efficacité dépendra principalement de votre capacité à distinguer les tâches urgentes des objectifs réellement importants.":
      "Tu eficacia dependerá principalmente de tu capacidad para distinguir las tareas urgentes de los objetivos realmente importantes.",

    "Une meilleure organisation vous permettra d'avancer avec davantage de constance. La régularité produira plus de résultats que les efforts ponctuels.":
      "Una mejor organización te permitirá avanzar con mayor constancia. La regularidad producirá más resultados que los esfuerzos ocasionales.",

    "Votre travail pourrait être remarqué par une personne capable d'influencer positivement votre évolution professionnelle.":
      "Tu trabajo podría ser reconocido por una persona capaz de influir positivamente en tu evolución profesional.",

    "Une évolution dans vos méthodes pourrait améliorer considérablement votre productivité. Restez ouvert aux nouvelles façons de travailler.":
      "Una evolución en tus métodos podría mejorar considerablemente tu productividad. Mantente abierto a nuevas formas de trabajar.",

    "Vous pourriez ressentir un besoin croissant d'autonomie. Cherchez davantage de liberté tout en respectant vos engagements.":
      "Podrías sentir una necesidad creciente de autonomía. Busca una mayor libertad sin dejar de respetar tus compromisos.",

    "Votre progression sera progressive mais solide. Chaque étape préparera naturellement la suivante.":
      "Tu progreso será gradual pero sólido. Cada etapa preparará naturalmente la siguiente.",

    "Certaines responsabilités demanderont davantage de concentration. Une approche structurée évitera une fatigue inutile.":
      "Algunas responsabilidades exigirán una mayor concentración. Un enfoque estructurado evitará un cansancio innecesario.",

    "Votre capacité à résoudre des problèmes complexes renforcera progressivement votre crédibilité.":
      "Tu capacidad para resolver problemas complejos reforzará progresivamente tu credibilidad.",

    "Cette année vous invite à travailler avec davantage de stratégie plutôt qu'avec davantage d'efforts.":
      "Este año te invita a trabajar con más estrategia en lugar de multiplicar tus esfuerzos.",

    "Une situation professionnelle deviendra progressivement plus claire grâce à une meilleure compréhension de votre environnement.":
      "Una situación profesional se volverá progresivamente más clara gracias a una mejor comprensión de tu entorno.",

    /* PROJECTS */

    "Un projet qui avançait lentement pourrait finalement prendre de l'ampleur au cours de l'année.":
      "Un proyecto que avanzaba lentamente podría finalmente cobrar impulso a lo largo del año.",

    "Une idée ancienne mérite probablement d'être développée davantage. Les prochains mois sont favorables à sa structuration.":
      "Una idea antigua probablemente merece desarrollarse más. Los próximos meses son favorables para darle una estructura más sólida.",

    "Vous pourriez modifier certains éléments de votre plan initial. Cette adaptation renforcera vos chances de réussite.":
      "Podrías modificar algunos elementos de tu plan inicial. Esta adaptación reforzará tus posibilidades de éxito.",

    "L'année favorise les projets demandant de la patience, de la méthode et une vision à long terme.":
      "El año favorece los proyectos que requieren paciencia, método y una visión a largo plazo.",

    "Une collaboration pourrait accélérer votre progression. Choisissez des partenaires partageant vos objectifs.":
      "Una colaboración podría acelerar tu progreso. Elige socios que compartan tus objetivos.",

    "Un projet personnel pourrait progressivement prendre une place plus importante dans votre quotidien.":
      "Un proyecto personal podría ocupar progresivamente un lugar más importante en tu vida cotidiana.",

    "Une réponse longtemps attendue pourrait enfin arriver. Préparez-vous à agir rapidement lorsque l'occasion se présentera.":
      "Una respuesta esperada desde hace tiempo podría llegar finalmente. Prepárate para actuar con rapidez cuando se presente la oportunidad.",

    "Une nouvelle responsabilité pourrait modifier votre organisation, mais aussi ouvrir une évolution positive.":
      "Una nueva responsabilidad podría modificar tu organización, pero también abrir el camino hacia una evolución positiva.",

    "L'année convient particulièrement à la réalisation de projets ambitieux demandant plusieurs étapes.":
      "El año es especialmente favorable para realizar proyectos ambiciosos que requieren varias etapas.",

    "Votre créativité pourrait devenir l'un de vos meilleurs leviers de progression.":
      "Tu creatividad podría convertirse en uno de tus mejores motores de progreso.",

    /* PROFESSIONAL EVOLUTION */

    "Votre carrière pourrait évoluer plus rapidement que vous ne l'imaginez actuellement si vous acceptez de sortir progressivement de votre zone de confort.":
      "Tu carrera podría evolucionar más rápidamente de lo que imaginas actualmente si aceptas salir progresivamente de tu zona de confort.",

    "Une nouvelle compétence acquise cette année pourrait ouvrir des portes importantes dans les années suivantes.":
      "Una nueva competencia adquirida este año podría abrirte puertas importantes en los años siguientes.",

    "Votre crédibilité continuera de grandir grâce à votre constance et à votre sérieux.":
      "Tu credibilidad seguirá creciendo gracias a tu constancia y profesionalismo.",

    "Une évolution de poste, de responsabilités ou de statut pourrait devenir envisageable.":
      "Un cambio de puesto, de responsabilidades o de estatus podría convertirse en una posibilidad.",

    "Cette année favorise les décisions construites sur une vision durable plutôt que sur des résultats immédiats.":
      "Este año favorece las decisiones basadas en una visión duradera más que en resultados inmediatos.",

    "Vous développerez progressivement davantage de confiance dans vos capacités professionnelles.":
      "Desarrollarás progresivamente una mayor confianza en tus capacidades profesionales.",

    "Votre expérience deviendra un véritable avantage compétitif face à de nouveaux défis.":
      "Tu experiencia se convertirá en una verdadera ventaja competitiva frente a nuevos desafíos.",

    "Les prochains mois pourraient modifier votre façon de définir la réussite professionnelle.":
      "Los próximos meses podrían modificar tu manera de definir el éxito profesional.",

    "Vous pourriez découvrir une nouvelle orientation correspondant davantage à vos aspirations profondes.":
      "Podrías descubrir una nueva orientación que corresponda mejor a tus aspiraciones más profundas.",

    "Chaque étape franchie renforcera progressivement votre indépendance professionnelle.":
      "Cada etapa superada reforzará progresivamente tu independencia profesional.",

    /* PROFESSIONAL RELATIONSHIPS */

    "Les échanges professionnels gagneront à rester simples, précis et transparents.":
      "Los intercambios profesionales se beneficiarán de mantenerse simples, precisos y transparentes.",

    "Une personne expérimentée pourrait devenir un mentor ou un allié précieux.":
      "Una persona experimentada podría convertirse en un mentor o un aliado valioso.",

    "Une tension pourrait être résolue grâce à une communication directe.":
      "Una tensión podría resolverse gracias a una comunicación directa.",

    "Votre diplomatie vous aidera à défendre vos idées sans créer de conflits inutiles.":
      "Tu diplomacia te ayudará a defender tus ideas sin crear conflictos innecesarios.",

    "Une collaboration importante pourrait naître d'une rencontre apparemment anodine.":
      "Una colaboración importante podría surgir de un encuentro aparentemente insignificante.",

    "Votre professionnalisme renforcera naturellement votre réputation.":
      "Tu profesionalismo reforzará naturalmente tu reputación.",

    "Un collègue ou un partenaire pourrait jouer un rôle déterminant dans votre progression.":
      "Un colega o un socio podría desempeñar un papel determinante en tu progreso.",

    "Votre réseau professionnel gagnera progressivement en importance.":
      "Tu red profesional adquirirá progresivamente mayor importancia.",

    "Une ancienne relation professionnelle pourrait réapparaître sous une forme favorable.":
      "Una antigua relación profesional podría reaparecer de una manera favorable.",

    "Le dialogue restera votre meilleur outil pour résoudre les désaccords.":
      "El diálogo seguirá siendo tu mejor herramienta para resolver los desacuerdos.",

    /* OPPORTUNITIES */

    "Une évolution importante pourrait prendre la forme d'un nouveau mandat, d'une promotion ou d'un partenariat.":
      "Una evolución importante podría tomar la forma de una nueva misión, un ascenso o una asociación.",

    "Une compétence rarement utilisée pourrait devenir votre principal avantage.":
      "Una competencia que utilizas poco podría convertirse en tu principal ventaja.",

    "Cette année favorise les candidatures, les négociations et les nouvelles initiatives.":
      "Este año favorece las candidaturas, las negociaciones y las nuevas iniciativas.",

    "Une opportunité modeste au départ pourrait produire des effets durables.":
      "Una oportunidad inicialmente modesta podría producir efectos duraderos.",

    "Vous pourriez participer à un projet augmentant votre visibilité professionnelle.":
      "Podrías participar en un proyecto que aumente tu visibilidad profesional.",

    "Une amélioration de vos conditions de travail deviendra possible grâce à une meilleure communication.":
      "Una mejora de tus condiciones de trabajo podría hacerse posible gracias a una mejor comunicación.",

    "Une nouvelle source de revenus pourrait progressivement apparaître.":
      "Una nueva fuente de ingresos podría aparecer progresivamente.",

    "Une formation ou un apprentissage stratégique pourrait accélérer votre évolution.":
      "Una formación o un aprendizaje estratégico podría acelerar tu evolución.",

    "Votre capacité à prendre une initiative au bon moment fera la différence.":
      "Tu capacidad para tomar la iniciativa en el momento adecuado marcará la diferencia.",

    "Une rencontre pourrait transformer positivement votre vision de votre avenir professionnel.":
      "Un encuentro podría transformar positivamente tu visión de tu futuro profesional.",

    /* KEY PERIODS */

    "Le début de l'année favorisera la préparation et la planification des grands projets.":
      "El comienzo del año favorecerá la preparación y la planificación de grandes proyectos.",

    "Le printemps pourrait accélérer plusieurs dossiers restés en attente.":
      "La primavera podría acelerar varios asuntos que habían quedado pendientes.",

    "Le milieu de l'année favorisera les collaborations et les décisions importantes.":
      "La mitad del año favorecerá las colaboraciones y las decisiones importantes.",

    "L'été permettra de consolider les progrès déjà réalisés.":
      "El verano permitirá consolidar los progresos ya realizados.",

    "L'automne sera particulièrement favorable aux nouveaux projets et aux responsabilités accrues.":
      "El otoño será especialmente favorable para los nuevos proyectos y el aumento de responsabilidades.",

    "La fin de l'année favorisera les bilans, les récompenses et les nouvelles perspectives.":
      "El final del año favorecerá los balances, las recompensas y las nuevas perspectivas.",

    "Certaines occasions demanderont une réaction rapide au cours du deuxième semestre.":
      "Algunas oportunidades exigirán una reacción rápida durante el segundo semestre.",

    "Les périodes les plus favorables seront celles où vous resterez fidèle à votre stratégie.":
      "Los períodos más favorables serán aquellos en los que te mantengas fiel a tu estrategia.",

    "Une phase de ralentissement apparent permettra finalement de préparer une évolution plus importante.":
      "Una fase de aparente desaceleración permitirá finalmente preparar una evolución más importante.",

    "La patience deviendra votre meilleur allié lorsque les résultats sembleront tarder.":
      "La paciencia se convertirá en tu mejor aliada cuando los resultados parezcan tardar.",

    /* CHALLENGES */

    "Le principal défi sera d'éviter la dispersion.":
      "El principal desafío será evitar la dispersión.",

    "Vous pourriez accepter davantage de responsabilités que nécessaire.":
      "Podrías aceptar más responsabilidades de las necesarias.",

    "L'impatience pourrait vous pousser à modifier trop rapidement une stratégie efficace.":
      "La impaciencia podría llevarte a modificar demasiado rápido una estrategia eficaz.",

    "Veillez à ne pas confondre activité et réelle progression.":
      "Procura no confundir actividad con verdadero progreso.",

    "Une critique pourrait temporairement affecter votre confiance.":
      "Una crítica podría afectar temporalmente tu confianza.",

    "Le besoin de tout contrôler pourrait ralentir certains projets.":
      "La necesidad de controlarlo todo podría ralentizar algunos proyectos.",

    "Des situations ambiguës demanderont davantage de communication.":
      "Las situaciones ambiguas exigirán una mayor comunicación.",

    "Votre concentration devra être protégée des nombreuses distractions.":
      "Tendrás que proteger tu concentración de las numerosas distracciones.",

    "Le perfectionnisme pourrait retarder la finalisation de certains objectifs.":
      "El perfeccionismo podría retrasar la finalización de algunos objetivos.",

    "Le défi principal sera de préserver votre équilibre tout en poursuivant vos ambitions.":
      "El principal desafío será preservar tu equilibrio mientras persigues tus ambiciones.",

    /* ADVICE */

    "Définissez des objectifs réalistes pour chaque trimestre.":
      "Define objetivos realistas para cada trimestre.",

    "Présentez vos idées avec confiance et méthode.":
      "Presenta tus ideas con confianza y método.",

    "Construisez votre progression étape par étape.":
      "Construye tu progreso paso a paso.",

    "Investissez votre énergie dans les projets ayant un véritable potentiel.":
      "Invierte tu energía en proyectos que tengan un verdadero potencial.",

    "Développez continuellement vos compétences.":
      "Desarrolla continuamente tus competencias.",

    "Acceptez les ajustements sans perdre votre objectif principal.":
      "Acepta los ajustes sin perder de vista tu objetivo principal.",

    "N'hésitez pas à demander conseil aux personnes expérimentées.":
      "No dudes en pedir consejo a personas experimentadas.",

    "Prenez le temps de reconnaître les progrès déjà accomplis.":
      "Tómate el tiempo necesario para reconocer los progresos que ya has realizado.",

    "Préservez un bon équilibre entre ambition et qualité de vie.":
      "Mantén un buen equilibrio entre ambición y calidad de vida.",

    "Faites preuve de constance : les résultats les plus durables demandent du temps.":
      "Sé constante: los resultados más duraderos requieren tiempo.",

    /* CONCLUSION */

    "Cette année peut renforcer durablement votre position professionnelle si vous avancez avec méthode et confiance.":
      "Este año puede reforzar de manera duradera tu posición profesional si avanzas con método y confianza.",

    "Votre progression dépendra davantage de votre constance que de la rapidité de vos résultats.":
      "Tu progreso dependerá más de tu constancia que de la rapidez de tus resultados.",

    "Une nouvelle étape importante pourrait commencer dans votre carrière.":
      "Una nueva etapa importante podría comenzar en tu carrera.",

    "Vous développerez progressivement une vision beaucoup plus claire de votre avenir professionnel.":
      "Desarrollarás progresivamente una visión mucho más clara de tu futuro profesional.",

    "Cette année pourrait devenir un véritable tournant dans votre évolution.":
      "Este año podría convertirse en un verdadero punto de inflexión en tu evolución.",

    "Vos compétences gagneront progressivement en reconnaissance.":
      "Tus competencias obtendrán progresivamente un mayor reconocimiento.",

    "Votre carrière évoluera favorablement si vous restez fidèle à vos objectifs.":
      "Tu carrera evolucionará favorablemente si te mantienes fiel a tus objetivos.",

    "Les décisions prises cette année auront des effets positifs pendant plusieurs années.":
      "Las decisiones tomadas este año tendrán efectos positivos durante varios años.",

    "Une progression discrète mais solide représentera votre plus grande réussite.":
      "Un progreso discreto pero sólido representará tu mayor logro.",

    "Votre avenir professionnel gagnera en stabilité à mesure que vous construirez sur des bases durables.":
      "Tu futuro profesional ganará estabilidad a medida que construyas sobre bases duraderas.",
  },

  /* DE arrive juste derrière */
    /* =======================================================
     GERMAN
  ======================================================= */

  de: {
    /* INTRODUCTION */

    "Votre vie professionnelle entre dans une année où la vision à long terme jouera un rôle déterminant. Les prochains mois vous aideront à construire des bases plus solides.":
      "Ihr Berufsleben tritt in ein Jahr ein, in dem langfristiges Denken eine entscheidende Rolle spielen wird. Die kommenden Monate werden Ihnen helfen, solidere Grundlagen zu schaffen.",

    "Cette année favorise une progression réfléchie dans votre carrière. Certaines décisions prises récemment commenceront progressivement à produire leurs effets.":
      "Dieses Jahr begünstigt eine wohlüberlegte berufliche Entwicklung. Einige Entscheidungen, die Sie kürzlich getroffen haben, werden allmählich ihre Wirkung zeigen.",

    "Le climat professionnel vous invite à revoir votre manière d'investir votre temps, votre énergie et vos priorités. Une meilleure organisation pourrait transformer votre efficacité.":
      "Das berufliche Umfeld lädt Sie dazu ein, neu zu überdenken, wie Sie Ihre Zeit, Energie und Prioritäten einsetzen. Eine bessere Organisation könnte Ihre Effizienz deutlich steigern.",

    "Votre carrière pourrait connaître une évolution importante. Il ne s'agira pas forcément d'un changement spectaculaire, mais d'une progression durable.":
      "Ihre Karriere könnte eine bedeutende Entwicklung erfahren. Dabei muss es sich nicht unbedingt um eine spektakuläre Veränderung handeln, sondern vielmehr um einen nachhaltigen Fortschritt.",

    "Une année de consolidation commence. Vous serez amené à protéger ce qui fonctionne tout en améliorant les aspects qui limitent encore votre évolution.":
      "Ein Jahr der Festigung beginnt. Sie werden dazu angeregt, das zu bewahren, was funktioniert, und gleichzeitig die Bereiche zu verbessern, die Ihre Entwicklung noch begrenzen.",

    "Cette période met en lumière vos ambitions profondes. Vous pourriez ressentir le besoin de construire un projet davantage aligné avec vos valeurs.":
      "Diese Phase rückt Ihre tiefsten Ambitionen in den Mittelpunkt. Sie könnten das Bedürfnis verspüren, ein Projekt aufzubauen, das stärker mit Ihren Werten übereinstimmt.",

    "Votre environnement professionnel demandera parfois de l'adaptation. Votre souplesse deviendra un véritable atout face aux changements.":
      "Ihr berufliches Umfeld wird gelegentlich Anpassungsfähigkeit verlangen. Ihre Flexibilität wird angesichts von Veränderungen zu einer echten Stärke.",

    "Les prochains mois vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d'être présenté avec davantage d'assurance.":
      "Die kommenden Monate ermutigen Sie dazu, den Wert Ihrer Fähigkeiten stärker anzuerkennen. Ihre Arbeit verdient es, mit mehr Selbstvertrauen präsentiert zu werden.",

    "Une nouvelle dynamique pourrait progressivement s'installer dans votre quotidien professionnel. Les efforts passés commenceront à devenir plus visibles.":
      "In Ihrem beruflichen Alltag könnte sich allmählich eine neue Dynamik entwickeln. Frühere Anstrengungen werden zunehmend sichtbarer werden.",

    "Cette année vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière pour les années à venir.":
      "Dieses Jahr regt Sie dazu an, darüber nachzudenken, welche Richtung Sie Ihrer Karriere in den kommenden Jahren wirklich geben möchten.",

    /* GENERAL */

    "Votre efficacité dépendra principalement de votre capacité à distinguer les tâches urgentes des objectifs réellement importants.":
      "Ihre Effizienz wird hauptsächlich von Ihrer Fähigkeit abhängen, dringende Aufgaben von wirklich wichtigen Zielen zu unterscheiden.",

    "Une meilleure organisation vous permettra d'avancer avec davantage de constance. La régularité produira plus de résultats que les efforts ponctuels.":
      "Eine bessere Organisation wird Ihnen ermöglichen, beständiger voranzukommen. Regelmäßigkeit wird mehr Ergebnisse bringen als vereinzelte Anstrengungen.",

    "Votre travail pourrait être remarqué par une personne capable d'influencer positivement votre évolution professionnelle.":
      "Ihre Arbeit könnte von einer Person wahrgenommen werden, die Ihre berufliche Entwicklung positiv beeinflussen kann.",

    "Une évolution dans vos méthodes pourrait améliorer considérablement votre productivité. Restez ouvert aux nouvelles façons de travailler.":
      "Eine Weiterentwicklung Ihrer Arbeitsmethoden könnte Ihre Produktivität erheblich verbessern. Bleiben Sie offen für neue Arbeitsweisen.",

    "Vous pourriez ressentir un besoin croissant d'autonomie. Cherchez davantage de liberté tout en respectant vos engagements.":
      "Sie könnten ein zunehmendes Bedürfnis nach Selbstständigkeit verspüren. Suchen Sie nach mehr Freiheit, ohne dabei Ihre Verpflichtungen zu vernachlässigen.",

    "Votre progression sera progressive mais solide. Chaque étape préparera naturellement la suivante.":
      "Ihre Entwicklung wird schrittweise, aber solide verlaufen. Jede Etappe wird auf natürliche Weise die nächste vorbereiten.",

    "Certaines responsabilités demanderont davantage de concentration. Une approche structurée évitera une fatigue inutile.":
      "Einige Verantwortlichkeiten werden mehr Konzentration erfordern. Ein strukturierter Ansatz wird unnötige Erschöpfung vermeiden.",

    "Votre capacité à résoudre des problèmes complexes renforcera progressivement votre crédibilité.":
      "Ihre Fähigkeit, komplexe Probleme zu lösen, wird Ihre Glaubwürdigkeit nach und nach stärken.",

    "Cette année vous invite à travailler avec davantage de stratégie plutôt qu'avec davantage d'efforts.":
      "Dieses Jahr lädt Sie dazu ein, strategischer zu arbeiten, anstatt einfach nur mehr Anstrengungen zu investieren.",

    "Une situation professionnelle deviendra progressivement plus claire grâce à une meilleure compréhension de votre environnement.":
      "Eine berufliche Situation wird allmählich klarer werden, da Sie Ihr Umfeld besser verstehen.",

    /* PROJECTS */

    "Un projet qui avançait lentement pourrait finalement prendre de l'ampleur au cours de l'année.":
      "Ein Projekt, das bisher nur langsam vorankam, könnte im Laufe des Jahres schließlich an Dynamik gewinnen.",

    "Une idée ancienne mérite probablement d'être développée davantage. Les prochains mois sont favorables à sa structuration.":
      "Eine ältere Idee verdient es wahrscheinlich, weiterentwickelt zu werden. Die kommenden Monate eignen sich gut dazu, ihr eine klare Struktur zu geben.",

    "Vous pourriez modifier certains éléments de votre plan initial. Cette adaptation renforcera vos chances de réussite.":
      "Sie könnten einige Elemente Ihres ursprünglichen Plans verändern. Diese Anpassung wird Ihre Erfolgschancen erhöhen.",

    "L'année favorise les projets demandant de la patience, de la méthode et une vision à long terme.":
      "Das Jahr begünstigt Projekte, die Geduld, methodisches Vorgehen und eine langfristige Perspektive erfordern.",

    "Une collaboration pourrait accélérer votre progression. Choisissez des partenaires partageant vos objectifs.":
      "Eine Zusammenarbeit könnte Ihre Entwicklung beschleunigen. Wählen Sie Partner, die Ihre Ziele teilen.",

    "Un projet personnel pourrait progressivement prendre une place plus importante dans votre quotidien.":
      "Ein persönliches Projekt könnte nach und nach einen größeren Platz in Ihrem Alltag einnehmen.",

    "Une réponse longtemps attendue pourrait enfin arriver. Préparez-vous à agir rapidement lorsque l'occasion se présentera.":
      "Eine lange erwartete Antwort könnte endlich eintreffen. Seien Sie bereit, schnell zu handeln, wenn sich die Gelegenheit bietet.",

    "Une nouvelle responsabilité pourrait modifier votre organisation, mais aussi ouvrir une évolution positive.":
      "Eine neue Verantwortung könnte Ihre Organisation verändern, zugleich aber auch eine positive Entwicklung ermöglichen.",

    "L'année convient particulièrement à la réalisation de projets ambitieux demandant plusieurs étapes.":
      "Das Jahr eignet sich besonders gut für die Umsetzung ambitionierter Projekte, die mehrere Etappen erfordern.",

    "Votre créativité pourrait devenir l'un de vos meilleurs leviers de progression.":
      "Ihre Kreativität könnte zu einem Ihrer stärksten Hebel für Ihre weitere Entwicklung werden.",

    /* PROFESSIONAL EVOLUTION */

    "Votre carrière pourrait évoluer plus rapidement que vous ne l'imaginez actuellement si vous acceptez de sortir progressivement de votre zone de confort.":
      "Ihre Karriere könnte sich schneller entwickeln, als Sie derzeit erwarten, wenn Sie bereit sind, Ihre Komfortzone schrittweise zu verlassen.",

    "Une nouvelle compétence acquise cette année pourrait ouvrir des portes importantes dans les années suivantes.":
      "Eine neue Fähigkeit, die Sie in diesem Jahr erwerben, könnte Ihnen in den folgenden Jahren wichtige Türen öffnen.",

    "Votre crédibilité continuera de grandir grâce à votre constance et à votre sérieux.":
      "Ihre Glaubwürdigkeit wird dank Ihrer Beständigkeit und Zuverlässigkeit weiter wachsen.",

    "Une évolution de poste, de responsabilités ou de statut pourrait devenir envisageable.":
      "Eine Veränderung Ihrer Position, Ihrer Verantwortlichkeiten oder Ihres beruflichen Status könnte in Betracht kommen.",

    "Cette année favorise les décisions construites sur une vision durable plutôt que sur des résultats immédiats.":
      "Dieses Jahr begünstigt Entscheidungen, die auf einer nachhaltigen Perspektive statt auf unmittelbaren Ergebnissen beruhen.",

    "Vous développerez progressivement davantage de confiance dans vos capacités professionnelles.":
      "Sie werden nach und nach mehr Vertrauen in Ihre beruflichen Fähigkeiten entwickeln.",

    "Votre expérience deviendra un véritable avantage compétitif face à de nouveaux défis.":
      "Ihre Erfahrung wird angesichts neuer Herausforderungen zu einem echten Wettbewerbsvorteil.",

    "Les prochains mois pourraient modifier votre façon de définir la réussite professionnelle.":
      "Die kommenden Monate könnten Ihre Vorstellung von beruflichem Erfolg verändern.",

    "Vous pourriez découvrir une nouvelle orientation correspondant davantage à vos aspirations profondes.":
      "Sie könnten eine neue Richtung entdecken, die stärker Ihren tiefsten Bestrebungen entspricht.",

    "Chaque étape franchie renforcera progressivement votre indépendance professionnelle.":
      "Jeder erreichte Meilenstein wird Ihre berufliche Unabhängigkeit schrittweise stärken.",

    /* PROFESSIONAL RELATIONSHIPS */

    "Les échanges professionnels gagneront à rester simples, précis et transparents.":
      "Berufliche Kommunikation wird davon profitieren, einfach, präzise und transparent zu bleiben.",

    "Une personne expérimentée pourrait devenir un mentor ou un allié précieux.":
      "Eine erfahrene Person könnte zu einem Mentor oder wertvollen Verbündeten werden.",

    "Une tension pourrait être résolue grâce à une communication directe.":
      "Eine Spannung könnte durch direkte Kommunikation gelöst werden.",

    "Votre diplomatie vous aidera à défendre vos idées sans créer de conflits inutiles.":
      "Ihr diplomatisches Geschick wird Ihnen helfen, Ihre Ideen zu vertreten, ohne unnötige Konflikte zu verursachen.",

    "Une collaboration importante pourrait naître d'une rencontre apparemment anodine.":
      "Aus einer scheinbar beiläufigen Begegnung könnte eine wichtige Zusammenarbeit entstehen.",

    "Votre professionnalisme renforcera naturellement votre réputation.":
      "Ihre Professionalität wird Ihren Ruf auf natürliche Weise stärken.",

    "Un collègue ou un partenaire pourrait jouer un rôle déterminant dans votre progression.":
      "Ein Kollege oder Partner könnte eine entscheidende Rolle bei Ihrer weiteren Entwicklung spielen.",

    "Votre réseau professionnel gagnera progressivement en importance.":
      "Ihr berufliches Netzwerk wird nach und nach an Bedeutung gewinnen.",

    "Une ancienne relation professionnelle pourrait réapparaître sous une forme favorable.":
      "Ein früherer beruflicher Kontakt könnte auf positive Weise wieder in Erscheinung treten.",

    "Le dialogue restera votre meilleur outil pour résoudre les désaccords.":
      "Der Dialog wird weiterhin Ihr bestes Mittel sein, um Meinungsverschiedenheiten zu lösen.",

    /* OPPORTUNITIES */

    "Une évolution importante pourrait prendre la forme d'un nouveau mandat, d'une promotion ou d'un partenariat.":
      "Eine bedeutende Entwicklung könnte die Form eines neuen Auftrags, einer Beförderung oder einer Partnerschaft annehmen.",

    "Une compétence rarement utilisée pourrait devenir votre principal avantage.":
      "Eine selten genutzte Fähigkeit könnte zu Ihrem größten Vorteil werden.",

    "Cette année favorise les candidatures, les négociations et les nouvelles initiatives.":
      "Dieses Jahr begünstigt Bewerbungen, Verhandlungen und neue Initiativen.",

    "Une opportunité modeste au départ pourrait produire des effets durables.":
      "Eine zunächst bescheidene Gelegenheit könnte langfristige Auswirkungen haben.",

    "Vous pourriez participer à un projet augmentant votre visibilité professionnelle.":
      "Sie könnten an einem Projekt teilnehmen, das Ihre berufliche Sichtbarkeit erhöht.",

    "Une amélioration de vos conditions de travail deviendra possible grâce à une meilleure communication.":
      "Eine Verbesserung Ihrer Arbeitsbedingungen könnte durch bessere Kommunikation möglich werden.",

    "Une nouvelle source de revenus pourrait progressivement apparaître.":
      "Eine neue Einkommensquelle könnte sich nach und nach entwickeln.",

    "Une formation ou un apprentissage stratégique pourrait accélérer votre évolution.":
      "Eine Weiterbildung oder strategisches Lernen könnte Ihre Entwicklung beschleunigen.",

    "Votre capacité à prendre une initiative au bon moment fera la différence.":
      "Ihre Fähigkeit, im richtigen Moment Initiative zu ergreifen, wird den Unterschied ausmachen.",

    "Une rencontre pourrait transformer positivement votre vision de votre avenir professionnel.":
      "Eine Begegnung könnte Ihre Sicht auf Ihre berufliche Zukunft positiv verändern.",

    /* KEY PERIODS */

    "Le début de l'année favorisera la préparation et la planification des grands projets.":
      "Der Jahresbeginn wird die Vorbereitung und Planung größerer Projekte begünstigen.",

    "Le printemps pourrait accélérer plusieurs dossiers restés en attente.":
      "Der Frühling könnte mehrere bisher liegen gebliebene Angelegenheiten beschleunigen.",

    "Le milieu de l'année favorisera les collaborations et les décisions importantes.":
      "Die Jahresmitte wird Zusammenarbeit und wichtige Entscheidungen begünstigen.",

    "L'été permettra de consolider les progrès déjà réalisés.":
      "Der Sommer wird es ermöglichen, bereits erzielte Fortschritte zu festigen.",

    "L'automne sera particulièrement favorable aux nouveaux projets et aux responsabilités accrues.":
      "Der Herbst wird besonders günstig für neue Projekte und größere Verantwortlichkeiten sein.",

    "La fin de l'année favorisera les bilans, les récompenses et les nouvelles perspectives.":
      "Das Jahresende wird Rückblicke, Anerkennung und neue Perspektiven begünstigen.",

    "Certaines occasions demanderont une réaction rapide au cours du deuxième semestre.":
      "Einige Gelegenheiten werden in der zweiten Jahreshälfte eine schnelle Reaktion erfordern.",

    "Les périodes les plus favorables seront celles où vous resterez fidèle à votre stratégie.":
      "Die günstigsten Phasen werden jene sein, in denen Sie Ihrer Strategie treu bleiben.",

    "Une phase de ralentissement apparent permettra finalement de préparer une évolution plus importante.":
      "Eine Phase scheinbarer Verlangsamung wird letztlich dazu beitragen, eine bedeutendere Entwicklung vorzubereiten.",

    "La patience deviendra votre meilleur allié lorsque les résultats sembleront tarder.":
      "Geduld wird zu Ihrem besten Verbündeten, wenn Ergebnisse länger auf sich warten lassen.",

    /* CHALLENGES */

    "Le principal défi sera d'éviter la dispersion.":
      "Die größte Herausforderung wird darin bestehen, Ihre Kräfte nicht zu verzetteln.",

    "Vous pourriez accepter davantage de responsabilités que nécessaire.":
      "Sie könnten mehr Verantwortung übernehmen, als tatsächlich notwendig ist.",

    "L'impatience pourrait vous pousser à modifier trop rapidement une stratégie efficace.":
      "Ungeduld könnte Sie dazu verleiten, eine wirksame Strategie zu schnell zu verändern.",

    "Veillez à ne pas confondre activité et réelle progression.":
      "Achten Sie darauf, Aktivität nicht mit tatsächlichem Fortschritt zu verwechseln.",

    "Une critique pourrait temporairement affecter votre confiance.":
      "Kritik könnte Ihr Selbstvertrauen vorübergehend beeinträchtigen.",

    "Le besoin de tout contrôler pourrait ralentir certains projets.":
      "Das Bedürfnis, alles kontrollieren zu wollen, könnte einige Projekte verlangsamen.",

    "Des situations ambiguës demanderont davantage de communication.":
      "Unklare Situationen werden mehr Kommunikation erfordern.",

    "Votre concentration devra être protégée des nombreuses distractions.":
      "Sie werden Ihre Konzentration vor zahlreichen Ablenkungen schützen müssen.",

    "Le perfectionnisme pourrait retarder la finalisation de certains objectifs.":
      "Perfektionismus könnte die Fertigstellung bestimmter Ziele verzögern.",

    "Le défi principal sera de préserver votre équilibre tout en poursuivant vos ambitions.":
      "Die größte Herausforderung wird darin bestehen, Ihr Gleichgewicht zu bewahren und gleichzeitig Ihre Ambitionen weiterzuverfolgen.",

    /* ADVICE */

    "Définissez des objectifs réalistes pour chaque trimestre.":
      "Setzen Sie sich für jedes Quartal realistische Ziele.",

    "Présentez vos idées avec confiance et méthode.":
      "Präsentieren Sie Ihre Ideen selbstbewusst und strukturiert.",

    "Construisez votre progression étape par étape.":
      "Bauen Sie Ihren Fortschritt Schritt für Schritt auf.",

    "Investissez votre énergie dans les projets ayant un véritable potentiel.":
      "Investieren Sie Ihre Energie in Projekte mit echtem Potenzial.",

    "Développez continuellement vos compétences.":
      "Entwickeln Sie Ihre Fähigkeiten kontinuierlich weiter.",

    "Acceptez les ajustements sans perdre votre objectif principal.":
      "Akzeptieren Sie notwendige Anpassungen, ohne Ihr Hauptziel aus den Augen zu verlieren.",

    "N'hésitez pas à demander conseil aux personnes expérimentées.":
      "Zögern Sie nicht, erfahrene Menschen um Rat zu fragen.",

    "Prenez le temps de reconnaître les progrès déjà accomplis.":
      "Nehmen Sie sich die Zeit, Ihre bereits erzielten Fortschritte anzuerkennen.",

    "Préservez un bon équilibre entre ambition et qualité de vie.":
      "Bewahren Sie ein gutes Gleichgewicht zwischen Ehrgeiz und Lebensqualität.",

    "Faites preuve de constance : les résultats les plus durables demandent du temps.":
      "Bleiben Sie beständig: Die nachhaltigsten Ergebnisse brauchen Zeit.",

    /* CONCLUSION */

    "Cette année peut renforcer durablement votre position professionnelle si vous avancez avec méthode et confiance.":
      "Dieses Jahr kann Ihre berufliche Position nachhaltig stärken, wenn Sie strukturiert und selbstbewusst vorangehen.",

    "Votre progression dépendra davantage de votre constance que de la rapidité de vos résultats.":
      "Ihre Entwicklung wird stärker von Ihrer Beständigkeit als von der Geschwindigkeit Ihrer Ergebnisse abhängen.",

    "Une nouvelle étape importante pourrait commencer dans votre carrière.":
      "Eine neue wichtige Etappe Ihrer Karriere könnte beginnen.",

    "Vous développerez progressivement une vision beaucoup plus claire de votre avenir professionnel.":
      "Sie werden nach und nach eine deutlich klarere Vorstellung von Ihrer beruflichen Zukunft entwickeln.",

    "Cette année pourrait devenir un véritable tournant dans votre évolution.":
      "Dieses Jahr könnte zu einem echten Wendepunkt Ihrer Entwicklung werden.",

    "Vos compétences gagneront progressivement en reconnaissance.":
      "Ihre Fähigkeiten werden zunehmend Anerkennung finden.",

    "Votre carrière évoluera favorablement si vous restez fidèle à vos objectifs.":
      "Ihre Karriere wird sich positiv entwickeln, wenn Sie Ihren Zielen treu bleiben.",

    "Les décisions prises cette année auront des effets positifs pendant plusieurs années.":
      "Die Entscheidungen, die Sie in diesem Jahr treffen, werden über mehrere Jahre hinweg positive Auswirkungen haben.",

    "Une progression discrète mais solide représentera votre plus grande réussite.":
      "Ein unauffälliger, aber solider Fortschritt wird Ihren größten Erfolg darstellen.",

    "Votre avenir professionnel gagnera en stabilité à mesure que vous construirez sur des bases durables.":
      "Ihre berufliche Zukunft wird stabiler werden, je mehr Sie auf nachhaltigen Grundlagen aufbauen.",
  },

  /* IT arrive juste derrière */
    /* =======================================================
     ITALIAN
  ======================================================= */

  it: {
    /* INTRODUCTION */

    "Votre vie professionnelle entre dans une année où la vision à long terme jouera un rôle déterminant. Les prochains mois vous aideront à construire des bases plus solides.":
      "La tua vita professionale entra in un anno in cui la visione a lungo termine avrà un ruolo determinante. I prossimi mesi ti aiuteranno a costruire basi più solide.",

    "Cette année favorise une progression réfléchie dans votre carrière. Certaines décisions prises récemment commenceront progressivement à produire leurs effets.":
      "Quest'anno favorisce un progresso ponderato nella tua carriera. Alcune decisioni prese di recente cominceranno gradualmente a produrre i loro effetti.",

    "Le climat professionnel vous invite à revoir votre manière d'investir votre temps, votre énergie et vos priorités. Une meilleure organisation pourrait transformer votre efficacité.":
      "Il clima professionale ti invita a rivedere il modo in cui investi il tuo tempo, la tua energia e le tue priorità. Una migliore organizzazione potrebbe trasformare la tua efficacia.",

    "Votre carrière pourrait connaître une évolution importante. Il ne s'agira pas forcément d'un changement spectaculaire, mais d'une progression durable.":
      "La tua carriera potrebbe conoscere un'evoluzione importante. Non si tratterà necessariamente di un cambiamento spettacolare, ma di un progresso duraturo.",

    "Une année de consolidation commence. Vous serez amené à protéger ce qui fonctionne tout en améliorant les aspects qui limitent encore votre évolution.":
      "Inizia un anno di consolidamento. Sarai portato a proteggere ciò che funziona, migliorando al tempo stesso gli aspetti che limitano ancora la tua evoluzione.",

    "Cette période met en lumière vos ambitions profondes. Vous pourriez ressentir le besoin de construire un projet davantage aligné avec vos valeurs.":
      "Questo periodo mette in luce le tue ambizioni più profonde. Potresti sentire il bisogno di costruire un progetto maggiormente in linea con i tuoi valori.",

    "Votre environnement professionnel demandera parfois de l'adaptation. Votre souplesse deviendra un véritable atout face aux changements.":
      "Il tuo ambiente professionale richiederà talvolta capacità di adattamento. La tua flessibilità diventerà un vero punto di forza di fronte ai cambiamenti.",

    "Les prochains mois vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d'être présenté avec davantage d'assurance.":
      "I prossimi mesi ti incoraggiano a riconoscere meglio il valore delle tue competenze. Il tuo lavoro merita di essere presentato con maggiore sicurezza.",

    "Une nouvelle dynamique pourrait progressivement s'installer dans votre quotidien professionnel. Les efforts passés commenceront à devenir plus visibles.":
      "Una nuova dinamica potrebbe gradualmente affermarsi nella tua quotidianità professionale. Gli sforzi del passato cominceranno a diventare più visibili.",

    "Cette année vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière pour les années à venir.":
      "Quest'anno ti spinge a riflettere sulla direzione che desideri realmente dare alla tua carriera negli anni a venire.",

    /* GENERAL */

    "Votre efficacité dépendra principalement de votre capacité à distinguer les tâches urgentes des objectifs réellement importants.":
      "La tua efficacia dipenderà principalmente dalla capacità di distinguere i compiti urgenti dagli obiettivi realmente importanti.",

    "Une meilleure organisation vous permettra d'avancer avec davantage de constance. La régularité produira plus de résultats que les efforts ponctuels.":
      "Una migliore organizzazione ti permetterà di avanzare con maggiore costanza. La regolarità produrrà più risultati degli sforzi occasionali.",

    "Votre travail pourrait être remarqué par une personne capable d'influencer positivement votre évolution professionnelle.":
      "Il tuo lavoro potrebbe essere notato da una persona capace di influenzare positivamente la tua evoluzione professionale.",

    "Une évolution dans vos méthodes pourrait améliorer considérablement votre productivité. Restez ouvert aux nouvelles façons de travailler.":
      "Un'evoluzione nei tuoi metodi potrebbe migliorare considerevolmente la tua produttività. Rimani aperto a nuovi modi di lavorare.",

    "Vous pourriez ressentir un besoin croissant d'autonomie. Cherchez davantage de liberté tout en respectant vos engagements.":
      "Potresti sentire un crescente bisogno di autonomia. Cerca maggiore libertà continuando a rispettare i tuoi impegni.",

    "Votre progression sera progressive mais solide. Chaque étape préparera naturellement la suivante.":
      "La tua progressione sarà graduale ma solida. Ogni tappa preparerà naturalmente quella successiva.",

    "Certaines responsabilités demanderont davantage de concentration. Une approche structurée évitera une fatigue inutile.":
      "Alcune responsabilità richiederanno maggiore concentrazione. Un approccio strutturato eviterà una stanchezza inutile.",

    "Votre capacité à résoudre des problèmes complexes renforcera progressivement votre crédibilité.":
      "La tua capacità di risolvere problemi complessi rafforzerà progressivamente la tua credibilità.",

    "Cette année vous invite à travailler avec davantage de stratégie plutôt qu'avec davantage d'efforts.":
      "Quest'anno ti invita a lavorare con maggiore strategia anziché aumentare semplicemente gli sforzi.",

    "Une situation professionnelle deviendra progressivement plus claire grâce à une meilleure compréhension de votre environnement.":
      "Una situazione professionale diventerà gradualmente più chiara grazie a una migliore comprensione del tuo ambiente.",

    /* PROJECTS */

    "Un projet qui avançait lentement pourrait finalement prendre de l'ampleur au cours de l'année.":
      "Un progetto che procedeva lentamente potrebbe finalmente acquistare slancio nel corso dell'anno.",

    "Une idée ancienne mérite probablement d'être développée davantage. Les prochains mois sont favorables à sa structuration.":
      "Una vecchia idea merita probabilmente di essere sviluppata ulteriormente. I prossimi mesi sono favorevoli per darle una struttura più solida.",

    "Vous pourriez modifier certains éléments de votre plan initial. Cette adaptation renforcera vos chances de réussite.":
      "Potresti modificare alcuni elementi del tuo piano iniziale. Questo adattamento aumenterà le tue possibilità di successo.",

    "L'année favorise les projets demandant de la patience, de la méthode et une vision à long terme.":
      "L'anno favorisce i progetti che richiedono pazienza, metodo e una visione a lungo termine.",

    "Une collaboration pourrait accélérer votre progression. Choisissez des partenaires partageant vos objectifs.":
      "Una collaborazione potrebbe accelerare la tua progressione. Scegli partner che condividano i tuoi obiettivi.",

    "Un projet personnel pourrait progressivement prendre une place plus importante dans votre quotidien.":
      "Un progetto personale potrebbe gradualmente assumere un ruolo più importante nella tua quotidianità.",

    "Une réponse longtemps attendue pourrait enfin arriver. Préparez-vous à agir rapidement lorsque l'occasion se présentera.":
      "Una risposta attesa da tempo potrebbe finalmente arrivare. Preparati ad agire rapidamente quando si presenterà l'occasione.",

    "Une nouvelle responsabilité pourrait modifier votre organisation, mais aussi ouvrir une évolution positive.":
      "Una nuova responsabilità potrebbe modificare la tua organizzazione, ma anche aprire la strada a un'evoluzione positiva.",

    "L'année convient particulièrement à la réalisation de projets ambitieux demandant plusieurs étapes.":
      "L'anno è particolarmente adatto alla realizzazione di progetti ambiziosi che richiedono diverse fasi.",

    "Votre créativité pourrait devenir l'un de vos meilleurs leviers de progression.":
      "La tua creatività potrebbe diventare una delle tue migliori leve di crescita.",

    /* PROFESSIONAL EVOLUTION */

    "Votre carrière pourrait évoluer plus rapidement que vous ne l'imaginez actuellement si vous acceptez de sortir progressivement de votre zone de confort.":
      "La tua carriera potrebbe evolvere più rapidamente di quanto immagini attualmente se accetterai di uscire gradualmente dalla tua zona di comfort.",

    "Une nouvelle compétence acquise cette année pourrait ouvrir des portes importantes dans les années suivantes.":
      "Una nuova competenza acquisita quest'anno potrebbe aprire porte importanti negli anni successivi.",

    "Votre crédibilité continuera de grandir grâce à votre constance et à votre sérieux.":
      "La tua credibilità continuerà a crescere grazie alla tua costanza e alla tua serietà.",

    "Une évolution de poste, de responsabilités ou de statut pourrait devenir envisageable.":
      "Un cambiamento di ruolo, di responsabilità o di posizione professionale potrebbe diventare possibile.",

    "Cette année favorise les décisions construites sur une vision durable plutôt que sur des résultats immédiats.":
      "Quest'anno favorisce le decisioni basate su una visione duratura piuttosto che sui risultati immediati.",

    "Vous développerez progressivement davantage de confiance dans vos capacités professionnelles.":
      "Svilupperai gradualmente una maggiore fiducia nelle tue capacità professionali.",

    "Votre expérience deviendra un véritable avantage compétitif face à de nouveaux défis.":
      "La tua esperienza diventerà un vero vantaggio competitivo di fronte a nuove sfide.",

    "Les prochains mois pourraient modifier votre façon de définir la réussite professionnelle.":
      "I prossimi mesi potrebbero modificare il tuo modo di definire il successo professionale.",

    "Vous pourriez découvrir une nouvelle orientation correspondant davantage à vos aspirations profondes.":
      "Potresti scoprire un nuovo orientamento più in linea con le tue aspirazioni profonde.",

    "Chaque étape franchie renforcera progressivement votre indépendance professionnelle.":
      "Ogni tappa superata rafforzerà progressivamente la tua indipendenza professionale.",

    /* PROFESSIONAL RELATIONSHIPS */

    "Les échanges professionnels gagneront à rester simples, précis et transparents.":
      "Gli scambi professionali trarranno beneficio dal rimanere semplici, precisi e trasparenti.",

    "Une personne expérimentée pourrait devenir un mentor ou un allié précieux.":
      "Una persona esperta potrebbe diventare un mentore o un alleato prezioso.",

    "Une tension pourrait être résolue grâce à une communication directe.":
      "Una tensione potrebbe essere risolta grazie a una comunicazione diretta.",

    "Votre diplomatie vous aidera à défendre vos idées sans créer de conflits inutiles.":
      "La tua diplomazia ti aiuterà a difendere le tue idee senza creare conflitti inutili.",

    "Une collaboration importante pourrait naître d'une rencontre apparemment anodine.":
      "Una collaborazione importante potrebbe nascere da un incontro apparentemente insignificante.",

    "Votre professionnalisme renforcera naturellement votre réputation.":
      "La tua professionalità rafforzerà naturalmente la tua reputazione.",

    "Un collègue ou un partenaire pourrait jouer un rôle déterminant dans votre progression.":
      "Un collega o un partner potrebbe svolgere un ruolo determinante nella tua progressione.",

    "Votre réseau professionnel gagnera progressivement en importance.":
      "La tua rete professionale acquisterà progressivamente maggiore importanza.",

    "Une ancienne relation professionnelle pourrait réapparaître sous une forme favorable.":
      "Un vecchio rapporto professionale potrebbe riapparire in una forma favorevole.",

    "Le dialogue restera votre meilleur outil pour résoudre les désaccords.":
      "Il dialogo resterà il tuo strumento migliore per risolvere i disaccordi.",

    /* OPPORTUNITIES */

    "Une évolution importante pourrait prendre la forme d'un nouveau mandat, d'une promotion ou d'un partenariat.":
      "Un'evoluzione importante potrebbe assumere la forma di un nuovo incarico, di una promozione o di una collaborazione.",

    "Une compétence rarement utilisée pourrait devenir votre principal avantage.":
      "Una competenza utilizzata raramente potrebbe diventare il tuo principale vantaggio.",

    "Cette année favorise les candidatures, les négociations et les nouvelles initiatives.":
      "Quest'anno favorisce le candidature, le negoziazioni e le nuove iniziative.",

    "Une opportunité modeste au départ pourrait produire des effets durables.":
      "Un'opportunità inizialmente modesta potrebbe produrre effetti duraturi.",

    "Vous pourriez participer à un projet augmentant votre visibilité professionnelle.":
      "Potresti partecipare a un progetto che aumenti la tua visibilità professionale.",

    "Une amélioration de vos conditions de travail deviendra possible grâce à une meilleure communication.":
      "Un miglioramento delle tue condizioni di lavoro potrebbe diventare possibile grazie a una migliore comunicazione.",

    "Une nouvelle source de revenus pourrait progressivement apparaître.":
      "Una nuova fonte di reddito potrebbe apparire gradualmente.",

    "Une formation ou un apprentissage stratégique pourrait accélérer votre évolution.":
      "Una formazione o un apprendimento strategico potrebbe accelerare la tua evoluzione.",

    "Votre capacité à prendre une initiative au bon moment fera la différence.":
      "La tua capacità di prendere l'iniziativa al momento giusto farà la differenza.",

    "Une rencontre pourrait transformer positivement votre vision de votre avenir professionnel.":
      "Un incontro potrebbe trasformare positivamente la tua visione del futuro professionale.",

    /* KEY PERIODS */

    "Le début de l'année favorisera la préparation et la planification des grands projets.":
      "L'inizio dell'anno favorirà la preparazione e la pianificazione dei grandi progetti.",

    "Le printemps pourrait accélérer plusieurs dossiers restés en attente.":
      "La primavera potrebbe accelerare diverse questioni rimaste in sospeso.",

    "Le milieu de l'année favorisera les collaborations et les décisions importantes.":
      "La metà dell'anno favorirà le collaborazioni e le decisioni importanti.",

    "L'été permettra de consolider les progrès déjà réalisés.":
      "L'estate permetterà di consolidare i progressi già realizzati.",

    "L'automne sera particulièrement favorable aux nouveaux projets et aux responsabilités accrues.":
      "L'autunno sarà particolarmente favorevole ai nuovi progetti e alle maggiori responsabilità.",

    "La fin de l'année favorisera les bilans, les récompenses et les nouvelles perspectives.":
      "La fine dell'anno favorirà i bilanci, i riconoscimenti e le nuove prospettive.",

    "Certaines occasions demanderont une réaction rapide au cours du deuxième semestre.":
      "Alcune opportunità richiederanno una reazione rapida durante la seconda metà dell'anno.",

    "Les périodes les plus favorables seront celles où vous resterez fidèle à votre stratégie.":
      "I periodi più favorevoli saranno quelli in cui rimarrai fedele alla tua strategia.",

    "Une phase de ralentissement apparent permettra finalement de préparer une évolution plus importante.":
      "Una fase di apparente rallentamento permetterà infine di preparare un'evoluzione più importante.",

    "La patience deviendra votre meilleur allié lorsque les résultats sembleront tarder.":
      "La pazienza diventerà la tua migliore alleata quando i risultati sembreranno tardare.",

    /* CHALLENGES */

    "Le principal défi sera d'éviter la dispersion.":
      "La sfida principale sarà evitare la dispersione.",

    "Vous pourriez accepter davantage de responsabilités que nécessaire.":
      "Potresti assumerti più responsabilità del necessario.",

    "L'impatience pourrait vous pousser à modifier trop rapidement une stratégie efficace.":
      "L'impazienza potrebbe spingerti a modificare troppo rapidamente una strategia efficace.",

    "Veillez à ne pas confondre activité et réelle progression.":
      "Fai attenzione a non confondere l'attività con un reale progresso.",

    "Une critique pourrait temporairement affecter votre confiance.":
      "Una critica potrebbe temporaneamente influire sulla tua fiducia.",

    "Le besoin de tout contrôler pourrait ralentir certains projets.":
      "Il bisogno di controllare tutto potrebbe rallentare alcuni progetti.",

    "Des situations ambiguës demanderont davantage de communication.":
      "Le situazioni ambigue richiederanno una maggiore comunicazione.",

    "Votre concentration devra être protégée des nombreuses distractions.":
      "Dovrai proteggere la tua concentrazione dalle numerose distrazioni.",

    "Le perfectionnisme pourrait retarder la finalisation de certains objectifs.":
      "Il perfezionismo potrebbe ritardare il completamento di alcuni obiettivi.",

    "Le défi principal sera de préserver votre équilibre tout en poursuivant vos ambitions.":
      "La sfida principale sarà preservare il tuo equilibrio mentre persegui le tue ambizioni.",

    /* ADVICE */

    "Définissez des objectifs réalistes pour chaque trimestre.":
      "Definisci obiettivi realistici per ogni trimestre.",

    "Présentez vos idées avec confiance et méthode.":
      "Presenta le tue idee con sicurezza e metodo.",

    "Construisez votre progression étape par étape.":
      "Costruisci il tuo progresso passo dopo passo.",

    "Investissez votre énergie dans les projets ayant un véritable potentiel.":
      "Investi la tua energia nei progetti che hanno un reale potenziale.",

    "Développez continuellement vos compétences.":
      "Sviluppa continuamente le tue competenze.",

    "Acceptez les ajustements sans perdre votre objectif principal.":
      "Accetta gli aggiustamenti senza perdere di vista il tuo obiettivo principale.",

    "N'hésitez pas à demander conseil aux personnes expérimentées.":
      "Non esitare a chiedere consiglio alle persone più esperte.",

    "Prenez le temps de reconnaître les progrès déjà accomplis.":
      "Prenditi il tempo per riconoscere i progressi già compiuti.",

    "Préservez un bon équilibre entre ambition et qualité de vie.":
      "Mantieni un buon equilibrio tra ambizione e qualità della vita.",

    "Faites preuve de constance : les résultats les plus durables demandent du temps.":
      "Sii costante: i risultati più duraturi richiedono tempo.",

    /* CONCLUSION */

    "Cette année peut renforcer durablement votre position professionnelle si vous avancez avec méthode et confiance.":
      "Quest'anno può rafforzare in modo duraturo la tua posizione professionale se procederai con metodo e fiducia.",

    "Votre progression dépendra davantage de votre constance que de la rapidité de vos résultats.":
      "La tua progressione dipenderà più dalla tua costanza che dalla rapidità dei risultati.",

    "Une nouvelle étape importante pourrait commencer dans votre carrière.":
      "Una nuova tappa importante potrebbe iniziare nella tua carriera.",

    "Vous développerez progressivement une vision beaucoup plus claire de votre avenir professionnel.":
      "Svilupperai gradualmente una visione molto più chiara del tuo futuro professionale.",

    "Cette année pourrait devenir un véritable tournant dans votre évolution.":
      "Quest'anno potrebbe diventare un vero punto di svolta nella tua evoluzione.",

    "Vos compétences gagneront progressivement en reconnaissance.":
      "Le tue competenze otterranno progressivamente maggiore riconoscimento.",

    "Votre carrière évoluera favorablement si vous restez fidèle à vos objectifs.":
      "La tua carriera evolverà favorevolmente se rimarrai fedele ai tuoi obiettivi.",

    "Les décisions prises cette année auront des effets positifs pendant plusieurs années.":
      "Le decisioni prese quest'anno avranno effetti positivi per diversi anni.",

    "Une progression discrète mais solide représentera votre plus grande réussite.":
      "Un progresso discreto ma solido rappresenterà il tuo più grande successo.",

    "Votre avenir professionnel gagnera en stabilité à mesure que vous construirez sur des bases durables.":
      "Il tuo futuro professionale acquisterà stabilità man mano che costruirai su basi durature.",
  },

  /* PT-BR arrive juste derrière */
    /* =======================================================
     PORTUGUESE — BRAZIL
  ======================================================= */

  pt: {
    /* INTRODUCTION */

    "Votre vie professionnelle entre dans une année où la vision à long terme jouera un rôle déterminant. Les prochains mois vous aideront à construire des bases plus solides.":
      "Sua vida profissional entra em um ano no qual a visão de longo prazo terá um papel determinante. Os próximos meses ajudarão você a construir bases mais sólidas.",

    "Cette année favorise une progression réfléchie dans votre carrière. Certaines décisions prises récemment commenceront progressivement à produire leurs effets.":
      "Este ano favorece um progresso ponderado em sua carreira. Algumas decisões tomadas recentemente começarão gradualmente a produzir seus efeitos.",

    "Le climat professionnel vous invite à revoir votre manière d'investir votre temps, votre énergie et vos priorités. Une meilleure organisation pourrait transformer votre efficacité.":
      "O ambiente profissional convida você a rever a maneira como investe seu tempo, sua energia e suas prioridades. Uma organização melhor poderá transformar sua eficiência.",

    "Votre carrière pourrait connaître une évolution importante. Il ne s'agira pas forcément d'un changement spectaculaire, mais d'une progression durable.":
      "Sua carreira poderá passar por uma evolução importante. Não se tratará necessariamente de uma mudança espetacular, mas de um progresso duradouro.",

    "Une année de consolidation commence. Vous serez amené à protéger ce qui fonctionne tout en améliorant les aspects qui limitent encore votre évolution.":
      "Um ano de consolidação começa. Você será levado a preservar o que funciona enquanto melhora os aspectos que ainda limitam sua evolução.",

    "Cette période met en lumière vos ambitions profondes. Vous pourriez ressentir le besoin de construire un projet davantage aligné avec vos valeurs.":
      "Este período destaca suas ambições mais profundas. Você poderá sentir a necessidade de construir um projeto mais alinhado aos seus valores.",

    "Votre environnement professionnel demandera parfois de l'adaptation. Votre souplesse deviendra un véritable atout face aux changements.":
      "Seu ambiente profissional exigirá adaptação em alguns momentos. Sua flexibilidade se tornará uma verdadeira vantagem diante das mudanças.",

    "Les prochains mois vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d'être présenté avec davantage d'assurance.":
      "Os próximos meses incentivarão você a reconhecer melhor o valor de suas competências. Seu trabalho merece ser apresentado com mais confiança.",

    "Une nouvelle dynamique pourrait progressivement s'installer dans votre quotidien professionnel. Les efforts passés commenceront à devenir plus visibles.":
      "Uma nova dinâmica poderá se estabelecer gradualmente em sua rotina profissional. Os esforços do passado começarão a se tornar mais visíveis.",

    "Cette année vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière pour les années à venir.":
      "Este ano incentiva você a refletir sobre a direção que realmente deseja dar à sua carreira nos próximos anos.",

    /* GENERAL */

    "Votre efficacité dépendra principalement de votre capacité à distinguer les tâches urgentes des objectifs réellement importants.":
      "Sua eficiência dependerá principalmente de sua capacidade de distinguir as tarefas urgentes dos objetivos realmente importantes.",

    "Une meilleure organisation vous permettra d'avancer avec davantage de constance. La régularité produira plus de résultats que les efforts ponctuels.":
      "Uma organização melhor permitirá que você avance com mais constância. A regularidade produzirá mais resultados do que esforços ocasionais.",

    "Votre travail pourrait être remarqué par une personne capable d'influencer positivement votre évolution professionnelle.":
      "Seu trabalho poderá ser notado por uma pessoa capaz de influenciar positivamente sua evolução profissional.",

    "Une évolution dans vos méthodes pourrait améliorer considérablement votre productivité. Restez ouvert aux nouvelles façons de travailler.":
      "Uma evolução em seus métodos poderá melhorar consideravelmente sua produtividade. Mantenha-se aberto a novas formas de trabalhar.",

    "Vous pourriez ressentir un besoin croissant d'autonomie. Cherchez davantage de liberté tout en respectant vos engagements.":
      "Você poderá sentir uma necessidade crescente de autonomia. Busque mais liberdade sem deixar de respeitar seus compromissos.",

    "Votre progression sera progressive mais solide. Chaque étape préparera naturellement la suivante.":
      "Seu progresso será gradual, porém sólido. Cada etapa preparará naturalmente a seguinte.",

    "Certaines responsabilités demanderont davantage de concentration. Une approche structurée évitera une fatigue inutile.":
      "Algumas responsabilidades exigirão mais concentração. Uma abordagem estruturada evitará um cansaço desnecessário.",

    "Votre capacité à résoudre des problèmes complexes renforcera progressivement votre crédibilité.":
      "Sua capacidade de resolver problemas complexos fortalecerá gradualmente sua credibilidade.",

    "Cette année vous invite à travailler avec davantage de stratégie plutôt qu'avec davantage d'efforts.":
      "Este ano convida você a trabalhar com mais estratégia, em vez de simplesmente aumentar seus esforços.",

    "Une situation professionnelle deviendra progressivement plus claire grâce à une meilleure compréhension de votre environnement.":
      "Uma situação profissional se tornará gradualmente mais clara graças a uma melhor compreensão de seu ambiente.",

    /* PROJECTS */

    "Un projet qui avançait lentement pourrait finalement prendre de l'ampleur au cours de l'année.":
      "Um projeto que avançava lentamente poderá finalmente ganhar força ao longo do ano.",

    "Une idée ancienne mérite probablement d'être développée davantage. Les prochains mois sont favorables à sa structuration.":
      "Uma ideia antiga provavelmente merece ser mais desenvolvida. Os próximos meses serão favoráveis para dar a ela uma estrutura mais sólida.",

    "Vous pourriez modifier certains éléments de votre plan initial. Cette adaptation renforcera vos chances de réussite.":
      "Você poderá modificar alguns elementos de seu plano inicial. Essa adaptação aumentará suas chances de sucesso.",

    "L'année favorise les projets demandant de la patience, de la méthode et une vision à long terme.":
      "O ano favorece projetos que exigem paciência, método e uma visão de longo prazo.",

    "Une collaboration pourrait accélérer votre progression. Choisissez des partenaires partageant vos objectifs.":
      "Uma colaboração poderá acelerar seu progresso. Escolha parceiros que compartilhem seus objetivos.",

    "Un projet personnel pourrait progressivement prendre une place plus importante dans votre quotidien.":
      "Um projeto pessoal poderá gradualmente ocupar um espaço mais importante em sua rotina.",

    "Une réponse longtemps attendue pourrait enfin arriver. Préparez-vous à agir rapidement lorsque l'occasion se présentera.":
      "Uma resposta esperada há muito tempo poderá finalmente chegar. Prepare-se para agir rapidamente quando a oportunidade surgir.",

    "Une nouvelle responsabilité pourrait modifier votre organisation, mais aussi ouvrir une évolution positive.":
      "Uma nova responsabilidade poderá modificar sua organização, mas também abrir caminho para uma evolução positiva.",

    "L'année convient particulièrement à la réalisation de projets ambitieux demandant plusieurs étapes.":
      "O ano será particularmente favorável à realização de projetos ambiciosos que exigem várias etapas.",

    "Votre créativité pourrait devenir l'un de vos meilleurs leviers de progression.":
      "Sua criatividade poderá se tornar uma de suas melhores ferramentas de progresso.",

    /* PROFESSIONAL EVOLUTION */

    "Votre carrière pourrait évoluer plus rapidement que vous ne l'imaginez actuellement si vous acceptez de sortir progressivement de votre zone de confort.":
      "Sua carreira poderá evoluir mais rapidamente do que você imagina atualmente se aceitar sair gradualmente de sua zona de conforto.",

    "Une nouvelle compétence acquise cette année pourrait ouvrir des portes importantes dans les années suivantes.":
      "Uma nova competência adquirida este ano poderá abrir portas importantes nos anos seguintes.",

    "Votre crédibilité continuera de grandir grâce à votre constance et à votre sérieux.":
      "Sua credibilidade continuará crescendo graças à sua constância e ao seu profissionalismo.",

    "Une évolution de poste, de responsabilités ou de statut pourrait devenir envisageable.":
      "Uma mudança de cargo, de responsabilidades ou de posição profissional poderá se tornar possível.",

    "Cette année favorise les décisions construites sur une vision durable plutôt que sur des résultats immédiats.":
      "Este ano favorece decisões baseadas em uma visão duradoura, em vez de resultados imediatos.",

    "Vous développerez progressivement davantage de confiance dans vos capacités professionnelles.":
      "Você desenvolverá gradualmente mais confiança em suas capacidades profissionais.",

    "Votre expérience deviendra un véritable avantage compétitif face à de nouveaux défis.":
      "Sua experiência se tornará uma verdadeira vantagem competitiva diante de novos desafios.",

    "Les prochains mois pourraient modifier votre façon de définir la réussite professionnelle.":
      "Os próximos meses poderão modificar sua maneira de definir o sucesso profissional.",

    "Vous pourriez découvrir une nouvelle orientation correspondant davantage à vos aspirations profondes.":
      "Você poderá descobrir uma nova direção mais alinhada às suas aspirações profundas.",

    "Chaque étape franchie renforcera progressivement votre indépendance professionnelle.":
      "Cada etapa concluída fortalecerá gradualmente sua independência profissional.",

    /* PROFESSIONAL RELATIONSHIPS */

    "Les échanges professionnels gagneront à rester simples, précis et transparents.":
      "As relações profissionais serão favorecidas por uma comunicação simples, precisa e transparente.",

    "Une personne expérimentée pourrait devenir un mentor ou un allié précieux.":
      "Uma pessoa experiente poderá se tornar um mentor ou um aliado valioso.",

    "Une tension pourrait être résolue grâce à une communication directe.":
      "Uma tensão poderá ser resolvida graças a uma comunicação direta.",

    "Votre diplomatie vous aidera à défendre vos idées sans créer de conflits inutiles.":
      "Sua diplomacia ajudará você a defender suas ideias sem criar conflitos desnecessários.",

    "Une collaboration importante pourrait naître d'une rencontre apparemment anodine.":
      "Uma colaboração importante poderá surgir de um encontro aparentemente casual.",

    "Votre professionnalisme renforcera naturellement votre réputation.":
      "Seu profissionalismo fortalecerá naturalmente sua reputação.",

    "Un collègue ou un partenaire pourrait jouer un rôle déterminant dans votre progression.":
      "Um colega ou parceiro poderá desempenhar um papel determinante em seu progresso.",

    "Votre réseau professionnel gagnera progressivement en importance.":
      "Sua rede profissional ganhará gradualmente mais importância.",

    "Une ancienne relation professionnelle pourrait réapparaître sous une forme favorable.":
      "Um antigo contato profissional poderá reaparecer de maneira favorável.",

    "Le dialogue restera votre meilleur outil pour résoudre les désaccords.":
      "O diálogo continuará sendo sua melhor ferramenta para resolver divergências.",

    /* OPPORTUNITIES */

    "Une évolution importante pourrait prendre la forme d'un nouveau mandat, d'une promotion ou d'un partenariat.":
      "Uma evolução importante poderá assumir a forma de uma nova responsabilidade, uma promoção ou uma parceria.",

    "Une compétence rarement utilisée pourrait devenir votre principal avantage.":
      "Uma competência pouco utilizada poderá se tornar sua principal vantagem.",

    "Cette année favorise les candidatures, les négociations et les nouvelles initiatives.":
      "Este ano favorece candidaturas, negociações e novas iniciativas.",

    "Une opportunité modeste au départ pourrait produire des effets durables.":
      "Uma oportunidade inicialmente modesta poderá produzir efeitos duradouros.",

    "Vous pourriez participer à un projet augmentant votre visibilité professionnelle.":
      "Você poderá participar de um projeto que aumente sua visibilidade profissional.",

    "Une amélioration de vos conditions de travail deviendra possible grâce à une meilleure communication.":
      "Uma melhoria em suas condições de trabalho poderá se tornar possível graças a uma comunicação melhor.",

    "Une nouvelle source de revenus pourrait progressivement apparaître.":
      "Uma nova fonte de renda poderá surgir gradualmente.",

    "Une formation ou un apprentissage stratégique pourrait accélérer votre évolution.":
      "Uma formação ou um aprendizado estratégico poderá acelerar sua evolução.",

    "Votre capacité à prendre une initiative au bon moment fera la différence.":
      "Sua capacidade de tomar a iniciativa no momento certo fará a diferença.",

    "Une rencontre pourrait transformer positivement votre vision de votre avenir professionnel.":
      "Um encontro poderá transformar positivamente sua visão sobre seu futuro profissional.",

    /* KEY PERIODS */

    "Le début de l'année favorisera la préparation et la planification des grands projets.":
      "O início do ano favorecerá a preparação e o planejamento de grandes projetos.",

    "Le printemps pourrait accélérer plusieurs dossiers restés en attente.":
      "A primavera poderá acelerar várias questões que permaneceram pendentes.",

    "Le milieu de l'année favorisera les collaborations et les décisions importantes.":
      "O meio do ano favorecerá as colaborações e as decisões importantes.",

    "L'été permettra de consolider les progrès déjà réalisés.":
      "O verão permitirá consolidar os progressos já alcançados.",

    "L'automne sera particulièrement favorable aux nouveaux projets et aux responsabilités accrues.":
      "O outono será particularmente favorável a novos projetos e ao aumento das responsabilidades.",

    "La fin de l'année favorisera les bilans, les récompenses et les nouvelles perspectives.":
      "O final do ano favorecerá avaliações, recompensas e novas perspectivas.",

    "Certaines occasions demanderont une réaction rapide au cours du deuxième semestre.":
      "Algumas oportunidades exigirão uma reação rápida durante o segundo semestre.",

    "Les périodes les plus favorables seront celles où vous resterez fidèle à votre stratégie.":
      "Os períodos mais favoráveis serão aqueles em que você permanecer fiel à sua estratégia.",

    "Une phase de ralentissement apparent permettra finalement de préparer une évolution plus importante.":
      "Uma fase de aparente desaceleração permitirá, no final, preparar uma evolução mais importante.",

    "La patience deviendra votre meilleur allié lorsque les résultats sembleront tarder.":
      "A paciência se tornará sua melhor aliada quando os resultados parecerem demorar.",

    /* CHALLENGES */

    "Le principal défi sera d'éviter la dispersion.":
      "O principal desafio será evitar a dispersão.",

    "Vous pourriez accepter davantage de responsabilités que nécessaire.":
      "Você poderá assumir mais responsabilidades do que o necessário.",

    "L'impatience pourrait vous pousser à modifier trop rapidement une stratégie efficace.":
      "A impaciência poderá levar você a modificar rapidamente demais uma estratégia eficaz.",

    "Veillez à ne pas confondre activité et réelle progression.":
      "Tenha cuidado para não confundir atividade com progresso real.",

    "Une critique pourrait temporairement affecter votre confiance.":
      "Uma crítica poderá afetar temporariamente sua confiança.",

    "Le besoin de tout contrôler pourrait ralentir certains projets.":
      "A necessidade de controlar tudo poderá desacelerar alguns projetos.",

    "Des situations ambiguës demanderont davantage de communication.":
      "Situações ambíguas exigirão mais comunicação.",

    "Votre concentration devra être protégée des nombreuses distractions.":
      "Sua concentração precisará ser protegida das muitas distrações.",

    "Le perfectionnisme pourrait retarder la finalisation de certains objectifs.":
      "O perfeccionismo poderá atrasar a conclusão de alguns objetivos.",

    "Le défi principal sera de préserver votre équilibre tout en poursuivant vos ambitions.":
      "O principal desafio será preservar seu equilíbrio enquanto você busca realizar suas ambições.",

    /* ADVICE */

    "Définissez des objectifs réalistes pour chaque trimestre.":
      "Defina objetivos realistas para cada trimestre.",

    "Présentez vos idées avec confiance et méthode.":
      "Apresente suas ideias com confiança e método.",

    "Construisez votre progression étape par étape.":
      "Construa seu progresso etapa por etapa.",

    "Investissez votre énergie dans les projets ayant un véritable potentiel.":
      "Invista sua energia em projetos que tenham verdadeiro potencial.",

    "Développez continuellement vos compétences.":
      "Desenvolva continuamente suas competências.",

    "Acceptez les ajustements sans perdre votre objectif principal.":
      "Aceite os ajustes sem perder de vista seu objetivo principal.",

    "N'hésitez pas à demander conseil aux personnes expérimentées.":
      "Não hesite em pedir conselhos a pessoas experientes.",

    "Prenez le temps de reconnaître les progrès déjà accomplis.":
      "Reserve um tempo para reconhecer os progressos que você já alcançou.",

    "Préservez un bon équilibre entre ambition et qualité de vie.":
      "Mantenha um bom equilíbrio entre ambição e qualidade de vida.",

    "Faites preuve de constance : les résultats les plus durables demandent du temps.":
      "Seja constante: os resultados mais duradouros exigem tempo.",

    /* CONCLUSION */

    "Cette année peut renforcer durablement votre position professionnelle si vous avancez avec méthode et confiance.":
      "Este ano poderá fortalecer de forma duradoura sua posição profissional se você avançar com método e confiança.",

    "Votre progression dépendra davantage de votre constance que de la rapidité de vos résultats.":
      "Seu progresso dependerá mais de sua constância do que da rapidez de seus resultados.",

    "Une nouvelle étape importante pourrait commencer dans votre carrière.":
      "Uma nova etapa importante poderá começar em sua carreira.",

    "Vous développerez progressivement une vision beaucoup plus claire de votre avenir professionnel.":
      "Você desenvolverá gradualmente uma visão muito mais clara de seu futuro profissional.",

    "Cette année pourrait devenir un véritable tournant dans votre évolution.":
      "Este ano poderá se tornar um verdadeiro ponto de virada em sua evolução.",

    "Vos compétences gagneront progressivement en reconnaissance.":
      "Suas competências ganharão gradualmente mais reconhecimento.",

    "Votre carrière évoluera favorablement si vous restez fidèle à vos objectifs.":
      "Sua carreira evoluirá favoravelmente se você permanecer fiel aos seus objetivos.",

    "Les décisions prises cette année auront des effets positifs pendant plusieurs années.":
      "As decisões tomadas este ano terão efeitos positivos durante vários anos.",

    "Une progression discrète mais solide représentera votre plus grande réussite.":
      "Um progresso discreto, porém sólido, representará sua maior conquista.",

    "Votre avenir professionnel gagnera en stabilité à mesure que vous construirez sur des bases durables.":
      "Seu futuro profissional ganhará estabilidade à medida que você construir sobre bases duradouras.",
  },
};

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeYearHoroscopeCareer(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  const translations: TranslationMap = {
    ...CAREER_TITLES[locale],
    ...CAREER_TEXTS[locale],
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

  /* ES arrive juste derrière */
