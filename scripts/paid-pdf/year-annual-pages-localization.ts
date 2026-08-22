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
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  en: {
    /* ELEMENTS / MODALITIES */
    "Feu": "Fire",
    "Terre": "Earth",
    "Air": "Air",
    "Eau": "Water",
    "Cardinal": "Cardinal",
    "Fixe": "Fixed",
    "Mutable": "Mutable",

    /* PLANETS */
    "Mercure": "Mercury",
    "Vénus": "Venus",
    "Mars": "Mars",
    "Jupiter": "Jupiter",
    "Saturne": "Saturn",
    "Uranus": "Uranus",
    "Neptune": "Neptune",
    "Pluton": "Pluto",
    "Lune": "Moon",
    "Soleil": "Sun",

    /* GLOBAL YEAR LABELS */
    "Votre année": "Your Year",
    "Énergie dominante": "Dominant Energy",
    "Les grandes énergies de l’année": "The Major Energies of the Year",
    "Les aspects majeurs de l’année": "The Major Aspects of the Year",
    "Les planètes dominantes": "The Dominant Planets",
    "Les maisons activées": "The Activated Houses",
    "Analyse approfondie de votre année": "In-depth analysis of your year",

    /* PAGE 2 */
    "cette lecture vous accompagne à travers les principales tendances symboliques de votre année":
      "this reading guides you through the main symbolic trends of your year",
    "Chaque année ouvre un nouveau cycle et révèle une direction différente.":
      "Each year opens a new cycle and reveals a different direction.",

    /* PAGE 3 — OVERVIEW */
    "l’année met en lumière plusieurs occasions de réorientation, de maturation et de consolidation personnelle.":
      "the year highlights several opportunities for reorientation, maturation, and personal consolidation.",
    "Votre progression dépendra moins de la quantité d’actions entreprises que de votre capacité à choisir les projets réellement alignés avec votre évolution.":
      "Your progress will depend less on the number of actions you take than on your ability to choose projects that are truly aligned with your growth.",
    "L’énergie dominante de votre année repose sur la transformation":
      "The dominant energy of your year is based on transformation",
    "Votre rapport à la transformation évoluera de manière notable. Certaines situations vous aideront à mieux comprendre ce qui mérite réellement votre énergie.":
      "Your relationship with transformation will evolve noticeably. Certain situations will help you better understand what truly deserves your energy.",
    "Cette année favorise une nouvelle façon d’aborder la régénération. Les expériences vécues pourront modifier durablement vos priorités.":
      "This year favors a new way of approaching regeneration. Your experiences may permanently change your priorities.",
    "Le domaine de l’intensité connaîtra plusieurs mouvements au cours de l’année. Une approche progressive vous permettra d’en tirer les meilleurs résultats.":
      "The area of intensity will experience several shifts during the year. A gradual approach will help you get the best results from them.",
    "Évitez de disperser votre énergie. Les résultats les plus durables viendront d’un engagement régulier envers quelques objectifs essentiels.":
      "Avoid scattering your energy. The most lasting results will come from steady commitment to a few essential goals.",
    "Les transformations les plus importantes ne seront pas toujours visibles immédiatement, mais elles prépareront un avenir plus cohérent.":
      "The most important transformations will not always be immediately visible, but they will prepare a more coherent future.",
    "Transformation": "Transformation",
    "Régénération": "Regeneration",
    "Intensité": "Intensity",

    /* PAGE 4 — MAJOR ENERGIES */
    "est portée par plusieurs courants complémentaires. Certains favoriseront l’expansion, tandis que d’autres vous inviteront à ralentir, à observer et à restructurer vos priorités.":
      "is shaped by several complementary currents. Some will favor expansion, while others will invite you to slow down, observe, and restructure your priorities.",
    "Créativité et expression": "Creativity and expression",
    "Affirmation de soi": "Self-assertion",
    "Réorientation professionnelle": "Professional reorientation",
    "Intuition et compréhension": "Intuition and understanding",
    "Influence complémentaire": "Complementary influence",
    "Cette énergie stimule votre": "This energy stimulates your",
    "et vous encourage à développer une approche plus consciente de vos choix. Son influence pourra se manifester dans plusieurs domaines au fil de l’année.":
      "and encourages you to develop a more conscious approach to your choices. Its influence may appear in several areas throughout the year.",
    "Au cours de l’année, cette dynamique renforcera votre capacité à agir avec profondeur. Certaines situations vous demanderont toutefois de canaliser cette force afin de l’utiliser de façon constructive.":
      "During the year, this dynamic will strengthen your ability to act with depth. Some situations will nevertheless require you to channel this strength in a constructive way.",
    "Votre meilleure stratégie consiste à exprimer votre":
      "Your best strategy is to express your",
    "avec mesure, sans laisser la": "with balance, without letting",
    "dominer vos réactions.": "dominate your reactions.",
    "L’équilibre entre votre élément": "The balance between your element",
    "et votre modalité": "and your modality",
    "vous permettra d’alterner entre action, adaptation et consolidation. Votre progression sera plus fluide lorsque vous respecterez votre propre rythme.":
      "will allow you to alternate between action, adaptation, and consolidation. Your progress will be smoother when you respect your own rhythm.",
    "Donnez davantage de place à ce qui nourrit votre stabilité, votre confiance et votre sentiment de progression.":
      "Give more space to what nourishes your stability, confidence, and sense of progress.",

    /* PAGE 5 — MAJOR ASPECTS */
    "Les aspects présentés ici symbolisent les principales dynamiques planétaires qui colorent votre année":
      "The aspects presented here symbolize the main planetary dynamics shaping your year",
    "Ils indiquent les périodes de mouvement, de structuration et de transformation.":
      "They indicate periods of movement, structuring, and transformation.",
    "Été": "Summer",
    "Automne": "Autumn",
    "Hiver": "Winter",
    "Printemps": "Spring",
    "ASPECT D’EXPANSION": "EXPANSION ASPECT",
    "ASPECT DE MAÎTRISE": "MASTERY ASPECT",
    "ASPECT D’HARMONIE": "HARMONY ASPECT",
    "Cette configuration met en mouvement le thème de la transformation. Son influence favorise les prises de conscience capables de transformer durablement votre manière d’agir.":
      "This configuration activates the theme of transformation. Its influence favors insights capable of permanently changing the way you act.",
    "Profiter de cette influence pour revoir vos priorités, consolider ce qui fonctionne et ouvrir une nouvelle voie là où un changement devient nécessaire.":
      "Use this influence to review your priorities, consolidate what works, and open a new path where change becomes necessary.",
    "L’influence de Mars et Saturn crée un climat propice à une évolution intérieure ou concrète. Elle vous demande d’unir votre instinct à une vision plus structurée.":
      "The influence of Mars and Saturn creates a climate favorable to inner or concrete growth. It asks you to unite your instinct with a more structured vision.",
    "Transformer votre resilience en action concrète et faire progresser un projet qui demande davantage de clarté ou de constance.":
      "Transform your resilience into concrete action and move forward a project that requires greater clarity or consistency.",
    "Sous cet aspect, votre intuition devient un outil essentiel. Les événements de cette période pourront vous inciter à faire des choix plus précis et mieux alignés avec vos objectifs.":
      "Under this aspect, your intuition becomes an essential tool. Events during this period may encourage you to make more precise choices that are better aligned with your goals.",
    "Saisir les occasions qui vous permettent d’exprimer votre intuition tout en développant une stratégie plus stable pour la suite.":
      "Seize opportunities that allow you to express your intuition while developing a more stable strategy for what comes next.",
    "Éviter que": "Avoid letting",
    "ne vous pousse à réagir trop rapidement ou à perdre de vue votre objectif principal.":
      "push you to react too quickly or lose sight of your main goal.",
    "Ne pas laisser": "Do not let",
    "transformer une tension passagère en décision définitive. Le recul restera votre meilleur allié.":
      "turn a temporary tension into a final decision. Perspective will remain your best ally.",
    "L’ensemble de ces influences vous demande d’unir votre instinct naturel à une vision plus stratégique.":
      "All of these influences ask you to unite your natural instinct with a more strategic vision.",
    "Les périodes les plus intenses pourront devenir particulièrement constructives si vous acceptez d’ajuster vos méthodes.":
      "The most intense periods can become particularly constructive if you accept adjusting your methods.",

    /* PAGE 6 — DOMINANT PLANETS */
    "Certaines planètes exercent une influence plus marquée sur le climat de votre année":
      "Some planets exert a stronger influence on the climate of your year",
    "Elles représentent les forces que vous serez invité à développer, à maîtriser ou à intégrer.":
      "They represent the strengths you will be invited to develop, master, or integrate.",
    "relations, valeurs et harmonie": "relationships, values and harmony",
    "identité, confiance et rayonnement": "identity, confidence and radiance",
    "changement, liberté et innovation": "change, freedom and innovation",
    "La présence de": "The presence of",
    "renforce les situations qui sollicitent votre":
      "strengthens situations that call upon your",
    "Elle vous aide à reconnaître ce qui doit être développé, corrigé ou dépassé.":
      "It helps you recognize what needs to be developed, corrected, or surpassed.",
    "Le message de": "The message of",
    "consiste à unir conscience et mouvement. Votre évolution deviendra plus fluide lorsque vos décisions respecteront à la fois vos besoins et la réalité.":
      "is to unite awareness and movement. Your growth will become smoother when your decisions respect both your needs and reality.",
    "La présence symbolique du": "The symbolic presence of the",
    "vous rappelle que votre progression dépend autant de votre volonté que de votre capacité à comprendre le bon moment pour agir.":
      "reminds you that your progress depends as much on your will as on your ability to understand the right time to act.",
    "Utilisez cette influence pour soutenir votre":
      "Use this influence to support your",
    "sans laisser": "without letting",
    "prendre trop de place.": "take up too much space.",
    "occupe une place centrale cette année. Son énergie est complétée par le":
      "plays a central role this year. Its energy is complemented by",
    "créant un mélange d’expansion, de réflexion et de transformation.":
      "creating a blend of expansion, reflection, and transformation.",

    /* PAGE 7 — ACTIVATED HOUSES */
    "Les maisons astrologiques représentent les grands secteurs de votre vie. Celles qui apparaissent ici seront particulièrement importantes au cours de votre année":
      "The astrological houses represent the major areas of your life. Those shown here will be particularly important during your year",
    "VOTRE VIE FAMILIALE, VOTRE FOYER ET VOS FONDATIONS ÉMOTIONNELLES":
      "YOUR FAMILY LIFE, HOME, AND EMOTIONAL FOUNDATIONS",
    "VOS TRANSFORMATIONS PROFONDES, VOTRE INTIMITÉ ET VOS RESSOURCES PARTAGÉES":
      "YOUR DEEP TRANSFORMATIONS, INTIMACY, AND SHARED RESOURCES",
    "VOTRE MONDE INTÉRIEUR, VOTRE INTUITION ET VOS PROCESSUS DE GUÉRISON":
      "YOUR INNER WORLD, INTUITION, AND HEALING PROCESSES",
    "VOTRE IDENTITÉ, VOS INITIATIVES ET VOTRE MANIÈRE DE VOUS AFFIRMER":
      "YOUR IDENTITY, INITIATIVES, AND WAY OF ASSERTING YOURSELF",
    "Le secteur associé à cette maison prendra une importance particulière au cours de l’année.":
      "The area associated with this house will take on particular importance during the year.",
    "Les expériences vécues autour de votre vie familiale, votre foyer et vos fondations émotionnelles pourront transformer vos priorités.":
      "Experiences related to your family life, home, and emotional foundations may transform your priorities.",
    "Développer une nouvelle manière d’aborder votre vie familiale, votre foyer et vos fondations émotionnelles, en vous appuyant sur votre profondeur et sur des choix concrets.":
      "Develop a new way of approaching your family life, home, and emotional foundations by relying on your depth and concrete choices.",
    "Cette maison met l’accent sur vos transformations profondes, votre intimité et vos ressources partagées.":
      "This house emphasizes your deep transformations, intimacy, and shared resources.",
    "Plusieurs événements pourront vous amener à revoir vos habitudes, vos attentes ou votre manière d’agir dans ce secteur.":
      "Several events may lead you to review your habits, expectations, or way of acting in this area.",
    "Faire évoluer ce domaine grâce à davantage de":
      "Develop this area through greater",
    "Les décisions prises avec constance pourront créer des effets durables.":
      "Decisions made consistently can create lasting effects.",
    "Les événements liés à votre monde intérieur, votre intuition et vos processus de guérison pourront se multiplier ou gagner en intensité.":
      "Events related to your inner world, intuition, and healing processes may multiply or intensify.",
    "Cette dynamique vous invitera à faire des choix plus conscients dans ce domaine.":
      "This dynamic will invite you to make more conscious choices in this area.",
    "Créer un meilleur équilibre dans ce domaine en transformant votre intuition en actions régulières et mesurables.":
      "Create better balance in this area by transforming your intuition into regular, measurable actions.",
    "Les événements liés à votre identité, vos initiatives et votre manière de vous affirmer pourront se multiplier ou gagner en intensité.":
      "Events related to your identity, initiatives, and way of asserting yourself may multiply or intensify.",
    "Restez attentif à": "Stay alert to",
    "qui pourrait vous faire sous-estimer une occasion ou retarder une décision utile.":
      "which could cause you to underestimate an opportunity or delay a useful decision.",
    "La maison": "House",
    "associée à": "associated with",
    "forme le cœur de votre évolution annuelle.":
      "forms the heart of your annual growth.",
    "Les autres maisons activées montrent comment cette dynamique se répercutera dans plusieurs dimensions de votre vie.":
      "The other activated houses show how this dynamic will affect several dimensions of your life.",

    /* PAGES 8–10 */
    "Organisation": "Organization",
    "Résultats": "Results",
    "Influence de": "Influence of",

    /* PAGES 11–17 — GENERAL SECTION LABELS */
    "Une situation affective pourrait évoluer progressivement.":
      "An emotional situation could evolve gradually.",
    "Ne cherchez pas nécessairement une réponse immédiate : certains liens auront besoin de plusieurs mois pour révéler leur véritable direction.":
      "Do not necessarily seek an immediate answer: some bonds will need several months to reveal their true direction.",
    "Le climat émotionnel favorise une prise de conscience importante.":
      "The emotional climate favors an important realization.",
    "Vous pourriez enfin comprendre pourquoi une situation vous touche autant.":
      "You may finally understand why a situation affects you so deeply.",
    "Une première partie d’année introspective sera suivie d’une période plus ouverte aux rapprochements et aux nouvelles expériences.":
      "An introspective first part of the year will be followed by a period more open to closeness and new experiences.",
    "Votre couple pourrait être amené à prendre une décision concrète. Accordez-vous le temps de vérifier qu’elle respecte les priorités des deux partenaires.":
      "Your relationship may need to make a concrete decision. Give yourselves time to ensure that it respects both partners' priorities.",
    "Le passé pourrait refaire surface sous la forme d’un souvenir, d’un message ou d’une comparaison. Demandez-vous si cette énergie mérite réellement une nouvelle place dans votre vie.":
      "The past may resurface as a memory, message, or comparison. Ask yourself whether this energy truly deserves a new place in your life.",
    "Une différence dans la manière de communiquer pourrait créer une incompréhension. Prenez le temps de vérifier ce que l’autre voulait réellement dire.":
      "A difference in communication style could create a misunderstanding. Take time to verify what the other person really meant.",

    "Votre progression sera progressive mais solide. Chaque étape préparera naturellement la suivante.":
      "Your progress will be gradual but solid. Each step will naturally prepare the next.",
    "Cette année favorise les décisions construites sur une vision durable plutôt que sur des résultats immédiats.":
      "This year favors decisions built on a long-term vision rather than immediate results.",
    "L'automne sera particulièrement favorable aux nouveaux projets et aux responsabilités accrues.":
      "Autumn will be particularly favorable for new projects and increased responsibilities.",
    "Un projet qui avançait lentement pourrait finalement prendre de l'ampleur au cours de l'année.":
      "A project that was moving slowly could finally gain momentum during the year.",
    "Votre diplomatie vous aidera à défendre vos idées sans créer de conflits inutiles.":
      "Your diplomacy will help you defend your ideas without creating unnecessary conflict.",
    "Une amélioration de vos conditions de travail deviendra possible grâce à une meilleure communication.":
      "An improvement in your working conditions may become possible through better communication.",
    "Une critique pourrait temporairement affecter votre confiance.":
      "A criticism could temporarily affect your confidence.",

    "Votre stabilité dépendra surtout de votre capacité à suivre vos chiffres réels plutôt qu’à vous fier à une impression générale.":
      "Your stability will depend mainly on your ability to track your real figures rather than rely on a general impression.",
    "Un projet à long terme pourrait commencer à devenir plus concret grâce à une discipline financière régulière.":
      "A long-term project could begin to become more concrete through consistent financial discipline.",
    "Le début de l’année favorisera les bilans, les vérifications et la mise en place d’un budget plus réaliste.":
      "The beginning of the year will favor reviews, checks, and the establishment of a more realistic budget.",
    "Une discussion concernant votre rémunération pourrait devenir nécessaire. Préparez des arguments précis et réalistes.":
      "A discussion about your compensation may become necessary. Prepare precise and realistic arguments.",
    "Une comparaison de prix ou une négociation pourrait vous permettre d’économiser davantage que prévu.":
      "A price comparison or negotiation could allow you to save more than expected.",
    "Une idée liée à vos compétences pourrait devenir une source de revenu supplémentaire.":
      "An idea related to your skills could become an additional source of income.",
    "Évitez de compter sur un revenu qui n’est pas encore confirmé.":
      "Avoid relying on income that has not yet been confirmed.",

    "Votre humeur pourrait s’améliorer grâce à une routine simple et rassurante.":
      "Your mood could improve through a simple and reassuring routine.",
    "Un changement de rythme pourrait devenir nécessaire au cours du deuxième semestre.":
      "A change of pace may become necessary during the second half of the year.",
    "Votre sommeil mérite une attention particulière cette année. Une routine plus stable pourrait améliorer durablement votre récupération.":
      "Your sleep deserves particular attention this year. A more stable routine could improve your recovery over the long term.",
    "Votre bien-être s’améliorera lorsque vos gestes quotidiens correspondront davantage à vos besoins réels.":
      "Your well-being will improve when your daily actions better match your real needs.",
    "Le principal défi sera de ne pas ignorer votre fatigue sous prétexte que certaines responsabilités semblent urgentes.":
      "The main challenge will be not to ignore your fatigue simply because certain responsibilities seem urgent.",

    "Votre présence sera appréciée lorsque vous resterez naturel, sans chercher à répondre à toutes les attentes de votre entourage.":
      "Your presence will be appreciated when you remain natural, without trying to meet everyone's expectations.",
    "L’année favorise les échanges honnêtes, mais il faudra éviter les paroles prononcées sous le coup de l’impatience.":
      "The year favors honest exchanges, but you should avoid words spoken in impatience.",
    "Les périodes les plus favorables seront celles où vous accepterez de rester vous-même sans chercher à satisfaire tout le monde.":
      "The most favorable periods will be those in which you allow yourself to remain true to yourself without trying to please everyone.",
    "Une invitation pourrait vous permettre de sortir de votre routine et de rencontrer des personnes intéressantes.":
      "An invitation could help you step out of your routine and meet interesting people.",
    "L’année vous invite à éviter les réactions automatiques dans une relation chargée d’émotions anciennes.":
      "The year invites you to avoid automatic reactions in a relationship charged with old emotions.",
    "L’année favorise les liens créés autour d’un intérêt, d’un projet ou d’une valeur commune.":
      "The year favors bonds created around a shared interest, project, or value.",
    "Vous pourriez vous sentir responsable de l’humeur ou du bien-être d’une personne de votre entourage.":
      "You may feel responsible for the mood or well-being of someone around you.",

    "LE BESOIN D’ÊTRE RASSURÉ POURRAIT DEVENIR PLUS FORT LORSQUE CERTAINES RÉPONSES TARDERONT À ARRIVER.":
      "THE NEED FOR REASSURANCE MAY BECOME STRONGER WHEN CERTAIN ANSWERS TAKE TIME TO ARRIVE.",
    "Vous pourriez devoir choisir entre préserver une habitude rassurante et avancer vers une situation plus adaptée à votre évolution.":
      "You may have to choose between preserving a reassuring habit and moving toward a situation better suited to your growth.",
    "Vous découvrirez peut-être que votre première réaction n’est pas toujours celle qui correspond le mieux à vos besoins.":
      "You may discover that your first reaction is not always the one that best matches your needs.",
    "La fin de l’année permettra de mesurer les progrès réalisés et les obstacles dépassés.":
      "The end of the year will allow you to measure the progress made and the obstacles overcome.",
    "LE MANQUE DE PRÉPARATION POURRAIT CRÉER UNE PRESSION ÉVITABLE À CERTAINES PÉRIODES DE L’ANNÉE.":
      "A LACK OF PREPARATION COULD CREATE AVOIDABLE PRESSURE AT CERTAIN TIMES OF THE YEAR.",
    "Le manque de préparation pourrait créer une pression évitable à certaines périodes de l’année.":
      "A lack of preparation could create avoidable pressure at certain times of the year.",
    "Le défi sera de ne pas répondre à une tension par un retrait complet.":
      "The challenge will be not to respond to tension with complete withdrawal.",
    "Cette expérience pourrait vous apprendre à avancer sans avoir besoin de toutes les garanties.":
      "This experience could teach you to move forward without needing every guarantee.",

    "Une idée ancienne pourrait retrouver toute sa pertinence dans le contexte actuel.":
      "An old idea could regain all its relevance in the current context.",
    "Une succession de petites occasions pourrait produire un changement bien plus important que prévu.":
      "A succession of small opportunities could produce a much greater change than expected.",
    "Avancez avec confiance, mais évitez de vous engager avant d’avoir compris toutes les conditions.":
      "Move forward with confidence, but avoid committing before you understand all the conditions.",
    "UNE PERSONNE POURRAIT RECONNAÎTRE LA QUALITÉ DE VOTRE TRAVAIL ET VOUS OFFRIR UNE POSSIBILITÉ CONCRÈTE.":
      "SOMEONE COULD RECOGNIZE THE QUALITY OF YOUR WORK AND OFFER YOU A CONCRETE OPPORTUNITY.",
    "VOUS POURRIEZ POSER UNE BASE SOLIDE POUR UNE NOUVELLE SOURCE DE REVENU.":
      "YOU COULD LAY A SOLID FOUNDATION FOR A NEW SOURCE OF INCOME.",
    "Vous pourriez poser une base solide pour une nouvelle source de revenu.":
      "You could lay a solid foundation for a new source of income.",
    "Une relation pourrait s’approfondir grâce à une conversation plus sincère.":
      "A relationship could deepen through a more sincere conversation.",
    "Vous pourriez découvrir une activité capable de vous apporter davantage de satisfaction ou d’équilibre.":
      "You may discover an activity capable of bringing you greater satisfaction or balance.",
    "Évitez de multiplier les engagements simplement parce que plusieurs portes s’ouvrent en même temps.":
      "Avoid multiplying commitments simply because several doors open at the same time.",

    /* PAGE 19 — HIDDEN TALENTS FIXED TERMS */
    "La lecture de l’invisible": "Reading the invisible",
    "Votre talent caché réside dans votre aptitude à accompagner une transformation profonde sans vous satisfaire d’un changement superficiel.":
      "Your hidden talent lies in your ability to support a deep transformation without settling for superficial change.",
    "Choisissez une situation dans laquelle votre profondeur peut produire une véritable amélioration.":
      "Choose a situation in which your depth can produce real improvement.",
    "Votre persévérance vous permet de découvrir des informations importantes.":
      "Your perseverance allows you to uncover important information.",
    "Rassemblez les faits avant de tirer une conclusion définitive.":
      "Gather the facts before drawing a final conclusion.",
    "Vous pouvez devenir particulièrement lucide lorsque la situation devient intense.":
      "You can become particularly clear-minded when the situation becomes intense.",
    "Utilisez votre intensité pour stabiliser plutôt que pour contrôler.":
      "Use your intensity to stabilize rather than control.",
    "Votre profondeur peut aider à identifier l’origine d’un schéma répétitif.":
      "Your depth can help identify the origin of a recurring pattern.",
    "Utilisez ce talent avec respect et sans imposer votre interprétation.":
      "Use this talent respectfully and without imposing your interpretation.",
    "Vous savez repartir sur des bases entièrement nouvelles après une rupture.":
      "You know how to start again on entirely new foundations after a rupture.",
    "Conservez les leçons sans reproduire l’ancienne structure.":
      "Keep the lessons without reproducing the old structure.",
    "Les situations complexes peuvent faire apparaître des capacités que vous utilisez rarement dans les périodes calmes.":
      "Complex situations can reveal abilities that you rarely use during calm periods.",
    "L’intensité émotionnelle peut parfois déformer une perception initialement juste.":
      "Emotional intensity can sometimes distort an initially accurate perception.",

    /* PREMIUM LEFTOVER SCORE LABELS */
    "Capacité de dépassement": "Capacity to overcome",
    "Équilibre émotionnel": "Emotional balance",
    "Activation de votre mission": "Activation of your mission",
    "Disponibilité de vos ressources": "Availability of your resources",
    "Intensité de la transformation": "Transformation intensity",
    "Dynamique sentimentale": "Emotional dynamic",
    "Force de communication": "Communication strength",
    "Activation du leadership": "Leadership activation",
    "Équilibre de vie": "Life balance",
    "Dynamique financière": "Financial dynamic",
    "Potentiel de prospérité": "Prosperity potential",
    "Équilibre matériel": "Material balance",
    "Niveau de vitalité": "Vitality level",
    "Potentiel de régénération": "Regeneration potential",
    "Capacité de changement": "Capacity for change",
    "Équilibre décisionnel": "Decision-making balance",
    "Clarté de décision": "Decision clarity",
    "Potentiel de progression": "Growth potential",
    "Potentiel de concrétisation": "Realization potential",
    "Maîtrise du rythme": "Mastery of pace",
    "Force de votre stratégie": "Strength of your strategy",
    "Intégration des apprentissages": "Integration of lessons",
    "Potentiel global de l’année": "Overall potential of the year",

    /* PAGE 46 / 47 KEYS */
    "CLÉ 1": "KEY 1",
    "CLÉ 2": "KEY 2",
    "CLÉ 3": "KEY 3",
    "CLÉ 4": "KEY 4",
    "CLÉ 5": "KEY 5",

    /* PAGE 50 */
    "Bleu nuit": "Midnight blue",
    "Quartz rose": "Rose quartz",
    "Trimestre 1": "Quarter 1",
    "Trimestre 2": "Quarter 2",
    "Trimestre 3": "Quarter 3",
    "Trimestre 4": "Quarter 4",

    /* PAGE 52 */
    "Cette orientation peut devenir un véritable fil conducteur pour l’année.":
      "This direction can become a genuine guiding thread for the year.",
    "Elle vous invite à utiliser votre profondeur, votre lucidité et votre capacité exceptionnelle de transformation avec davantage de conscience, sans oublier de ne pas laisser la peur, la méfiance ou le besoin de contrôle fermer les possibilités.":
      "It invites you to use your depth, clarity, and exceptional capacity for transformation with greater awareness, while remembering not to let fear, distrust, or the need for control close off possibilities.",
    "Chaque geste relié à une vérité assumée, une émotion accueillie et une action qui vous rend votre pouvoir renforcera votre sentiment d’alignement.":
      "Every action connected to an accepted truth, an acknowledged emotion, and a choice that restores your power will strengthen your sense of alignment.",

    /* PAGE 53 */
    "Votre message de l’année": "Your message for the year",
    "L’année 2027 vous invite à progresser avec constance, à respecter les différentes étapes de votre évolution et à choisir vos engagements avec discernement.":
      "The year 2027 invites you to move forward consistently, respect the different stages of your growth, and choose your commitments with discernment.",
    "Vous n’avez pas besoin de tout transformer immédiatement.":
      "You do not need to transform everything immediately.",
    "Une direction claire, des décisions cohérentes et des gestes réguliers peuvent produire une évolution profonde et durable.":
      "A clear direction, consistent decisions, and regular actions can produce deep and lasting growth.",
    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Your strength this year lies in your ability to remain faithful to your direction while adapting your path to new realities.",
  },

  es: {
    "Feu": "Fuego", "Terre": "Tierra", "Air": "Aire", "Eau": "Agua",
    "Cardinal": "Cardinal", "Fixe": "Fija", "Mutable": "Mutable",
    "Mercure": "Mercurio", "Vénus": "Venus", "Mars": "Marte", "Jupiter": "Júpiter",
    "Saturne": "Saturno", "Uranus": "Urano", "Neptune": "Neptuno", "Pluton": "Plutón",
    "Lune": "Luna", "Soleil": "Sol",
    "Votre année": "Tu año", "Énergie dominante": "Energía dominante",
    "Les grandes énergies de l’année": "Las grandes energías del año",
    "Les aspects majeurs de l’année": "Los aspectos principales del año",
    "Les planètes dominantes": "Los planetas dominantes",
    "Les maisons activées": "Las casas activadas",
    "Analyse approfondie de votre année": "Análisis profundo de tu año",
    "Chaque année ouvre un nouveau cycle et révèle une direction différente.": "Cada año abre un nuevo ciclo y revela una dirección diferente.",
    "Transformation": "Transformación", "Régénération": "Regeneración", "Intensité": "Intensidad",
    "Créativité et expression": "Creatividad y expresión", "Affirmation de soi": "Autoafirmación",
    "Réorientation professionnelle": "Reorientación profesional", "Intuition et compréhension": "Intuición y comprensión",
    "Influence complémentaire": "Influencia complementaria",
    "Été": "Verano", "Automne": "Otoño", "Hiver": "Invierno", "Printemps": "Primavera",
    "ASPECT D’EXPANSION": "ASPECTO DE EXPANSIÓN", "ASPECT DE MAÎTRISE": "ASPECTO DE DOMINIO", "ASPECT D’HARMONIE": "ASPECTO DE ARMONÍA",
    "relations, valeurs et harmonie": "relaciones, valores y armonía",
    "identité, confiance et rayonnement": "identidad, confianza y proyección",
    "changement, liberté et innovation": "cambio, libertad e innovación",
    "Organisation": "Organización", "Résultats": "Resultados", "Influence de": "Influencia de",
    "Capacité de dépassement": "Capacidad de superación", "Équilibre émotionnel": "Equilibrio emocional",
    "Activation de votre mission": "Activación de tu misión", "Disponibilité de vos ressources": "Disponibilidad de tus recursos",
    "Intensité de la transformation": "Intensidad de la transformación", "Dynamique sentimentale": "Dinámica sentimental",
    "Force de communication": "Fuerza de comunicación", "Activation du leadership": "Activación del liderazgo",
    "Équilibre de vie": "Equilibrio de vida", "Dynamique financière": "Dinámica financiera",
    "Potentiel de prospérité": "Potencial de prosperidad", "Équilibre matériel": "Equilibrio material",
    "Niveau de vitalité": "Nivel de vitalidad", "Potentiel de régénération": "Potencial de regeneración",
    "Capacité de changement": "Capacidad de cambio", "Équilibre décisionnel": "Equilibrio en la toma de decisiones",
    "Clarté de décision": "Claridad de decisión", "Potentiel de progression": "Potencial de progreso",
    "Potentiel de concrétisation": "Potencial de realización", "Maîtrise du rythme": "Dominio del ritmo",
    "Force de votre stratégie": "Fuerza de tu estrategia", "Intégration des apprentissages": "Integración de los aprendizajes",
    "Potentiel global de l’année": "Potencial global del año",
    "CLÉ 1": "CLAVE 1", "CLÉ 2": "CLAVE 2", "CLÉ 3": "CLAVE 3", "CLÉ 4": "CLAVE 4", "CLÉ 5": "CLAVE 5",
    "Bleu nuit": "Azul medianoche", "Quartz rose": "Cuarzo rosa",
    "Trimestre 1": "Trimestre 1", "Trimestre 2": "Trimestre 2", "Trimestre 3": "Trimestre 3", "Trimestre 4": "Trimestre 4",
    "Votre message de l’année": "Tu mensaje del año",
  },

  de: {
    "Feu": "Feuer", "Terre": "Erde", "Air": "Luft", "Eau": "Wasser",
    "Cardinal": "Kardinal", "Fixe": "Fix", "Mutable": "Veränderlich",
    "Mercure": "Merkur", "Vénus": "Venus", "Mars": "Mars", "Jupiter": "Jupiter",
    "Saturne": "Saturn", "Uranus": "Uranus", "Neptune": "Neptun", "Pluton": "Pluto",
    "Lune": "Mond", "Soleil": "Sonne",
    "Votre année": "Ihr Jahr", "Énergie dominante": "Dominante Energie",
    "Les grandes énergies de l’année": "Die großen Energien des Jahres",
    "Les aspects majeurs de l’année": "Die wichtigsten Aspekte des Jahres",
    "Les planètes dominantes": "Die dominanten Planeten",
    "Les maisons activées": "Die aktivierten Häuser",
    "Analyse approfondie de votre année": "Tiefgehende Analyse Ihres Jahres",
    "Chaque année ouvre un nouveau cycle et révèle une direction différente.": "Jedes Jahr eröffnet einen neuen Zyklus und zeigt eine neue Richtung.",
    "Transformation": "Transformation", "Régénération": "Regeneration", "Intensité": "Intensität",
    "Créativité et expression": "Kreativität und Ausdruck", "Affirmation de soi": "Selbstbehauptung",
    "Réorientation professionnelle": "Berufliche Neuorientierung", "Intuition et compréhension": "Intuition und Verständnis",
    "Influence complémentaire": "Ergänzender Einfluss",
    "Été": "Sommer", "Automne": "Herbst", "Hiver": "Winter", "Printemps": "Frühling",
    "ASPECT D’EXPANSION": "EXPANSIONSASPEKT", "ASPECT DE MAÎTRISE": "ASPEKT DER BEHERRSCHUNG", "ASPECT D’HARMONIE": "HARMONIEASPEKT",
    "relations, valeurs et harmonie": "Beziehungen, Werte und Harmonie",
    "identité, confiance et rayonnement": "Identität, Vertrauen und Ausstrahlung",
    "changement, liberté et innovation": "Veränderung, Freiheit und Innovation",
    "Organisation": "Organisation", "Résultats": "Ergebnisse", "Influence de": "Einfluss von",
    "Capacité de dépassement": "Fähigkeit zur Überwindung", "Équilibre émotionnel": "Emotionales Gleichgewicht",
    "Activation de votre mission": "Aktivierung Ihrer Mission", "Disponibilité de vos ressources": "Verfügbarkeit Ihrer Ressourcen",
    "Intensité de la transformation": "Intensität der Transformation", "Dynamique sentimentale": "Emotionale Dynamik",
    "Force de communication": "Kommunikationsstärke", "Activation du leadership": "Aktivierung der Führungskraft",
    "Équilibre de vie": "Lebensbalance", "Dynamique financière": "Finanzielle Dynamik",
    "Potentiel de prospérité": "Wohlstandspotenzial", "Équilibre matériel": "Materielles Gleichgewicht",
    "Niveau de vitalité": "Vitalitätsniveau", "Potentiel de régénération": "Regenerationspotenzial",
    "Capacité de changement": "Veränderungsfähigkeit", "Équilibre décisionnel": "Entscheidungsgleichgewicht",
    "Clarté de décision": "Entscheidungsklarheit", "Potentiel de progression": "Entwicklungspotenzial",
    "Potentiel de concrétisation": "Umsetzungspotenzial", "Maîtrise du rythme": "Beherrschung des Tempos",
    "Force de votre stratégie": "Stärke Ihrer Strategie", "Intégration des apprentissages": "Integration der Lernerfahrungen",
    "Potentiel global de l’année": "Gesamtpotenzial des Jahres",
    "CLÉ 1": "SCHLÜSSEL 1", "CLÉ 2": "SCHLÜSSEL 2", "CLÉ 3": "SCHLÜSSEL 3", "CLÉ 4": "SCHLÜSSEL 4", "CLÉ 5": "SCHLÜSSEL 5",
    "Bleu nuit": "Mitternachtsblau", "Quartz rose": "Rosenquarz",
    "Trimestre 1": "1. Quartal", "Trimestre 2": "2. Quartal", "Trimestre 3": "3. Quartal", "Trimestre 4": "4. Quartal",
    "Votre message de l’année": "Ihre Botschaft des Jahres",
  },

  it: {
    "Feu": "Fuoco", "Terre": "Terra", "Air": "Aria", "Eau": "Acqua",
    "Cardinal": "Cardinale", "Fixe": "Fissa", "Mutable": "Mutevole",
    "Mercure": "Mercurio", "Vénus": "Venere", "Mars": "Marte", "Jupiter": "Giove",
    "Saturne": "Saturno", "Uranus": "Urano", "Neptune": "Nettuno", "Pluton": "Plutone",
    "Lune": "Luna", "Soleil": "Sole",
    "Votre année": "Il tuo anno", "Énergie dominante": "Energia dominante",
    "Les grandes énergies de l’année": "Le grandi energie dell’anno",
    "Les aspects majeurs de l’année": "Gli aspetti principali dell’anno",
    "Les planètes dominantes": "I pianeti dominanti",
    "Les maisons activées": "Le case attivate",
    "Analyse approfondie de votre année": "Analisi approfondita del tuo anno",
    "Chaque année ouvre un nouveau cycle et révèle une direction différente.": "Ogni anno apre un nuovo ciclo e rivela una direzione diversa.",
    "Transformation": "Trasformazione", "Régénération": "Rigenerazione", "Intensité": "Intensità",
    "Créativité et expression": "Creatività ed espressione", "Affirmation de soi": "Affermazione di sé",
    "Réorientation professionnelle": "Riorientamento professionale", "Intuition et compréhension": "Intuizione e comprensione",
    "Influence complémentaire": "Influenza complementare",
    "Été": "Estate", "Automne": "Autunno", "Hiver": "Inverno", "Printemps": "Primavera",
    "ASPECT D’EXPANSION": "ASPETTO DI ESPANSIONE", "ASPECT DE MAÎTRISE": "ASPETTO DI PADRONANZA", "ASPECT D’HARMONIE": "ASPETTO DI ARMONIA",
    "relations, valeurs et harmonie": "relazioni, valori e armonia",
    "identité, confiance et rayonnement": "identità, fiducia e irradiamento",
    "changement, liberté et innovation": "cambiamento, libertà e innovazione",
    "Organisation": "Organizzazione", "Résultats": "Risultati", "Influence de": "Influenza di",
    "Capacité de dépassement": "Capacità di superamento", "Équilibre émotionnel": "Equilibrio emotivo",
    "Activation de votre mission": "Attivazione della vostra missione", "Disponibilité de vos ressources": "Disponibilità delle vostre risorse",
    "Intensité de la transformation": "Intensità della trasformazione", "Dynamique sentimentale": "Dinamica sentimentale",
    "Force de communication": "Forza della comunicazione", "Activation du leadership": "Attivazione della leadership",
    "Équilibre de vie": "Equilibrio di vita", "Dynamique financière": "Dinamica finanziaria",
    "Potentiel de prospérité": "Potenziale di prosperità", "Équilibre matériel": "Equilibrio materiale",
    "Niveau de vitalité": "Livello di vitalità", "Potentiel de régénération": "Potenziale di rigenerazione",
    "Capacité de changement": "Capacità di cambiamento", "Équilibre décisionnel": "Equilibrio decisionale",
    "Clarté de décision": "Chiarezza decisionale", "Potentiel de progression": "Potenziale di progresso",
    "Potentiel de concrétisation": "Potenziale di realizzazione", "Maîtrise du rythme": "Padronanza del ritmo",
    "Force de votre stratégie": "Forza della vostra strategia", "Intégration des apprentissages": "Integrazione degli apprendimenti",
    "Potentiel global de l’année": "Potenziale complessivo dell’anno",
    "CLÉ 1": "CHIAVE 1", "CLÉ 2": "CHIAVE 2", "CLÉ 3": "CHIAVE 3", "CLÉ 4": "CHIAVE 4", "CLÉ 5": "CHIAVE 5",
    "Bleu nuit": "Blu notte", "Quartz rose": "Quarzo rosa",
    "Trimestre 1": "Trimestre 1", "Trimestre 2": "Trimestre 2", "Trimestre 3": "Trimestre 3", "Trimestre 4": "Trimestre 4",
    "Votre message de l’année": "Il vostro messaggio dell’anno",
  },

  pt: {
    "Feu": "Fogo", "Terre": "Terra", "Air": "Ar", "Eau": "Água",
    "Cardinal": "Cardinal", "Fixe": "Fixa", "Mutable": "Mutável",
    "Mercure": "Mercúrio", "Vénus": "Vênus", "Mars": "Marte", "Jupiter": "Júpiter",
    "Saturne": "Saturno", "Uranus": "Urano", "Neptune": "Netuno", "Pluton": "Plutão",
    "Lune": "Lua", "Soleil": "Sol",
    "Votre année": "Seu ano", "Énergie dominante": "Energia dominante",
    "Les grandes énergies de l’année": "As grandes energias do ano",
    "Les aspects majeurs de l’année": "Os principais aspectos do ano",
    "Les planètes dominantes": "Os planetas dominantes",
    "Les maisons activées": "As casas ativadas",
    "Analyse approfondie de votre année": "Análise aprofundada do seu ano",
    "Chaque année ouvre un nouveau cycle et révèle une direction différente.": "Cada ano abre um novo ciclo e revela uma direção diferente.",
    "Transformation": "Transformação", "Régénération": "Regeneração", "Intensité": "Intensidade",
    "Créativité et expression": "Criatividade e expressão", "Affirmation de soi": "Autoafirmação",
    "Réorientation professionnelle": "Reorientação profissional", "Intuition et compréhension": "Intuição e compreensão",
    "Influence complémentaire": "Influência complementar",
    "Été": "Verão", "Automne": "Outono", "Hiver": "Inverno", "Printemps": "Primavera",
    "ASPECT D’EXPANSION": "ASPECTO DE EXPANSÃO", "ASPECT DE MAÎTRISE": "ASPECTO DE DOMÍNIO", "ASPECT D’HARMONIE": "ASPECTO DE HARMONIA",
    "relations, valeurs et harmonie": "relacionamentos, valores e harmonia",
    "identité, confiance et rayonnement": "identidade, confiança e presença",
    "changement, liberté et innovation": "mudança, liberdade e inovação",
    "Organisation": "Organização", "Résultats": "Resultados", "Influence de": "Influência de",
    "Capacité de dépassement": "Capacidade de superação", "Équilibre émotionnel": "Equilíbrio emocional",
    "Activation de votre mission": "Ativação da sua missão", "Disponibilité de vos ressources": "Disponibilidade dos seus recursos",
    "Intensité de la transformation": "Intensidade da transformação", "Dynamique sentimentale": "Dinâmica afetiva",
    "Force de communication": "Força de comunicação", "Activation du leadership": "Ativação da liderança",
    "Équilibre de vie": "Equilíbrio de vida", "Dynamique financière": "Dinâmica financeira",
    "Potentiel de prospérité": "Potencial de prosperidade", "Équilibre matériel": "Equilíbrio material",
    "Niveau de vitalité": "Nível de vitalidade", "Potentiel de régénération": "Potencial de regeneração",
    "Capacité de changement": "Capacidade de mudança", "Équilibre décisionnel": "Equilíbrio nas decisões",
    "Clarté de décision": "Clareza de decisão", "Potentiel de progression": "Potencial de progresso",
    "Potentiel de concrétisation": "Potencial de concretização", "Maîtrise du rythme": "Domínio do ritmo",
    "Force de votre stratégie": "Força da sua estratégia", "Intégration des apprentissages": "Integração dos aprendizados",
    "Potentiel global de l’année": "Potencial global do ano",
    "CLÉ 1": "CHAVE 1", "CLÉ 2": "CHAVE 2", "CLÉ 3": "CHAVE 3", "CLÉ 4": "CHAVE 4", "CLÉ 5": "CHAVE 5",
    "Bleu nuit": "Azul meia-noite", "Quartz rose": "Quartzo rosa",
    "Trimestre 1": "1º trimestre", "Trimestre 2": "2º trimestre", "Trimestre 3": "3º trimestre", "Trimestre 4": "4º trimestre",
    "Votre message de l’année": "Sua mensagem do ano",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearAnnualPages(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  const entries =
    Object.entries(
      TRANSLATIONS[locale],
    ).sort(
      ([first], [second]) =>
        second.length - first.length,
    );

  for (
    const [
      french,
      translated,
    ] of entries
  ) {
    output =
      output
        .split(french)
        .join(translated);
  }

  return output;
}
