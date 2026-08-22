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
   CAREER — TITLES
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
   CAREER — TEXTS
========================================================= */

const CAREER_TEXTS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
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
      "This period highlights your deepest ambitions. You may feel the need to build a project that is more aligned with your values.",

    "Votre environnement professionnel demandera parfois de l'adaptation. Votre souplesse deviendra un véritable atout face aux changements.":
      "Your professional environment will sometimes require adaptation. Your flexibility will become a real asset when facing change.",

    "Les prochains mois vous encouragent à mieux reconnaître la valeur de vos compétences. Votre travail mérite d'être présenté avec davantage d'assurance.":
      "The coming months encourage you to better recognize the value of your skills. Your work deserves to be presented with greater confidence.",

    "Une nouvelle dynamique pourrait progressivement s'installer dans votre quotidien professionnel. Les efforts passés commenceront à devenir plus visibles.":
      "A new dynamic could gradually emerge in your professional life. Past efforts will begin to become more visible.",

    "Cette année vous pousse à réfléchir à la direction que vous souhaitez réellement donner à votre carrière pour les années à venir.":
      "This year encourages you to reflect on the direction you truly want your career to take in the years ahead.",

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

  es: {},
  de: {},
  it: {},
  pt: {},
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
