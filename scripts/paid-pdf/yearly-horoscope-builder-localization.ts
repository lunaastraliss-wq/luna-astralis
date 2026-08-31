import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type TranslationMap =
  Record<string, string>;

/* =========================================================
   TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  PaidPdfLocale,
  TranslationMap
> = {
  fr: {},

  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    "Horoscope de l’année":
      "Yearly Horoscope",

    "Année":
      "Year",

    /* -----------------------------------------------------
       Welcome
    ----------------------------------------------------- */

    "cette lecture vous accompagne à travers les principales tendances symboliques de votre année":
      "this reading guides you through the main symbolic trends of your year",

    "Cette lecture vous accompagne à travers les principales tendances symboliques de l’année":
      "This reading guides you through the main symbolic trends of the year",

    "Chaque année ouvre un nouveau cycle et révèle une direction différente.":
      "Each year opens a new cycle and reveals a different direction.",

    /* -----------------------------------------------------
       Summary
    ----------------------------------------------------- */

    "Vue d’ensemble de l’année":
      "Overview of the Year",

    "Cette année ouvre un cycle de progression, de clarification et de transformation personnelle.":
      "This year opens a cycle of progress, clarification, and personal transformation.",

    "Les prochains mois vous inviteront à mieux définir vos priorités et à construire une direction cohérente. Certaines évolutions seront rapides, tandis que d’autres demanderont du temps, de la patience et une meilleure compréhension de vos véritables besoins.":
      "The coming months will invite you to define your priorities more clearly and build a coherent direction. Some developments will happen quickly, while others will require time, patience, and a deeper understanding of your true needs.",

    "Avancez avec constance et accordez davantage d’importance à la solidité de vos choix qu’à la rapidité des résultats.":
      "Move forward consistently and give more importance to the strength of your choices than to the speed of the results.",

    "Évolution":
      "Growth",

    "Construction":
      "Building",

    "Une énergie de renouvellement accompagne cette nouvelle année.":
      "An energy of renewal accompanies this new year.",

    "Vous pourriez ressentir le besoin de revoir certaines habitudes, relations ou ambitions. Les transformations les plus importantes seront celles que vous pourrez intégrer durablement à votre quotidien.":
      "You may feel the need to reconsider certain habits, relationships, or ambitions. The most important transformations will be those you can integrate sustainably into your daily life.",

    "Choisissez quelques changements essentiels et donnez-leur suffisamment de temps pour produire leurs effets.":
      "Choose a few essential changes and give them enough time to produce their effects.",

    "Décision":
      "Decision",

    "Cette année favorise une meilleure compréhension de votre direction personnelle.":
      "This year encourages a better understanding of your personal direction.",

    "Les expériences traversées au fil des mois vous aideront à distinguer ce qui correspond réellement à vos aspirations de ce qui vous éloigne de votre équilibre. Cette lucidité soutiendra des décisions plus solides.":
      "The experiences you go through over the months will help you distinguish what truly aligns with your aspirations from what takes you away from your balance. This clarity will support stronger decisions.",

    "Conservez ce qui nourrit votre évolution et réduisez progressivement ce qui disperse votre énergie.":
      "Keep what supports your growth and gradually reduce what disperses your energy.",

    "Compréhension":
      "Understanding",

    "Priorités":
      "Priorities",

    "Alignement":
      "Alignment",

    /* -----------------------------------------------------
       Energy
    ----------------------------------------------------- */

    "Énergie de l’année":
      "Energy of the Year",

    "Votre énergie évoluera par cycles distincts au cours de l’année.":
      "Your energy will evolve through distinct cycles throughout the year.",

    "Certaines périodes seront propices à l’action et au développement, tandis que d’autres favoriseront davantage le recul, la récupération et la réflexion. Le respect de ces variations vous permettra de préserver votre stabilité.":
      "Some periods will favor action and development, while others will encourage rest, recovery, and reflection. Respecting these variations will help you preserve your stability.",

    "Adaptez votre rythme aux différentes étapes de l’année plutôt que de maintenir constamment la même intensité.":
      "Adapt your pace to the different stages of the year rather than constantly maintaining the same intensity.",

    "Rythme":
      "Rhythm",

    "Adaptation":
      "Adaptation",

    "Stabilité":
      "Stability",

    "Cette année soutient une progression régulière et structurée.":
      "This year supports steady and structured progress.",

    "Votre motivation pourra grandir à mesure que vos projets prendront une forme plus concrète. Une organisation réaliste vous aidera à transformer vos intentions en résultats durables.":
      "Your motivation may grow as your projects take on a more concrete form. Realistic organization will help you transform your intentions into lasting results.",

    "Travaillez avec des objectifs trimestriels simples et vérifiez régulièrement votre progression.":
      "Work with simple quarterly goals and regularly review your progress.",

    "Motivation":
      "Motivation",

    "Organisation":
      "Organization",

    "Résultats":
      "Results",

    "Votre sensibilité jouera un rôle important dans la gestion de votre énergie.":
      "Your sensitivity will play an important role in managing your energy.",

    "Les environnements, les relations et les responsabilités qui vous entourent pourront influencer fortement votre niveau de disponibilité. Une meilleure protection de votre temps facilitera votre concentration.":
      "The environments, relationships, and responsibilities around you may strongly influence your level of availability. Protecting your time more effectively will improve your concentration.",

    "Préservez régulièrement des périodes de calme afin de retrouver votre énergie et votre clarté mentale.":
      "Regularly preserve periods of calm to restore your energy and mental clarity.",

    "Sensibilité":
      "Sensitivity",

    "Protection":
      "Protection",

    "Récupération":
      "Recovery",

    /* -----------------------------------------------------
       Planetary influences
    ----------------------------------------------------- */

    "Influence de ":
      "Influence of ",

    "Cette influence planétaire accompagne les principales évolutions de votre année.":
      "This planetary influence accompanies the main developments of your year.",

    /* -----------------------------------------------------
       Challenges / Opportunities
    ----------------------------------------------------- */

    "Discernement":
      "Discernment",

    "Votre principal point de vigilance":
      "Your Main Point of Attention",

    "Développement":
      "Development",

    "Une direction à explorer":
      "A Direction to Explore",

    "Progression":
      "Progress",

    /* -----------------------------------------------------
       Colors
    ----------------------------------------------------- */

    "Bordeaux":
      "Burgundy",

    "Bleu nuit":
      "Midnight blue",

    "Vert émeraude":
      "Emerald green",

    "Or":
      "Gold",

    "Violet profond":
      "Deep purple",

    "Rose poudré":
      "Powder pink",

    /* -----------------------------------------------------
       Stones
    ----------------------------------------------------- */

    "Obsidienne":
      "Obsidian",

    "Améthyste":
      "Amethyst",

    "Quartz rose":
      "Rose quartz",

    "Labradorite":
      "Labradorite",

    "Citrine":
      "Citrine",

    "Pierre de lune":
      "Moonstone",

    /* -----------------------------------------------------
       Keywords
    ----------------------------------------------------- */

    "Transformation":
      "Transformation",

    "Clarté":
      "Clarity",

    "Confiance":
      "Confidence",

    "Équilibre":
      "Balance",

    "Renouveau":
      "Renewal",

    "Intuition":
      "Intuition",

    /* -----------------------------------------------------
       Elements
    ----------------------------------------------------- */

    "Feu":
      "Fire",

    "Terre":
      "Earth",

    "Air":
      "Air",

    "Eau":
      "Water",

    /* -----------------------------------------------------
       Planets
    ----------------------------------------------------- */

    "Vénus":
      "Venus",

    "Mercure":
      "Mercury",

    "Lune":
      "Moon",

    "Soleil":
      "Sun",

    "Pluton":
      "Pluto",

    "Saturne":
      "Saturn",

    "Uranus":
      "Uranus",

    "Neptune":
      "Neptune",

    /* -----------------------------------------------------
       Lucky elements
    ----------------------------------------------------- */

    "Trimestre":
      "Quarter",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "These symbolic elements can accompany you throughout your year.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "The most important transformations take shape through decisions repeated with consistency.",

    /* -----------------------------------------------------
       Conclusion
    ----------------------------------------------------- */

    "Votre message de l’année":
      "Your Message for the Year",

    "L’année":
      "The year",

    "vous invite à progresser avec constance, à respecter les différentes étapes de votre évolution et à choisir vos engagements avec discernement. Vous n’avez pas besoin de tout transformer immédiatement. Une direction claire, des décisions cohérentes et des gestes réguliers peuvent produire une évolution profonde et durable.":
      "invites you to move forward steadily, respect the different stages of your evolution, and choose your commitments with discernment. You do not need to transform everything immediately. A clear direction, consistent decisions, and regular actions can produce deep and lasting growth.",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Your strength this year lies in your ability to remain true to your direction while adapting your path to new realities.",
  },

  /* =======================================================
     ESPAÑOL
  ======================================================= */

  es: {
    "Horoscope de l’année":
      "Horóscopo anual",

    "Année":
      "Año",

    "cette lecture vous accompagne à travers les principales tendances symboliques de votre année":
      "esta lectura te acompaña a través de las principales tendencias simbólicas de tu año",

    "Cette lecture vous accompagne à travers les principales tendances symboliques de l’année":
      "Esta lectura te acompaña a través de las principales tendencias simbólicas del año",

    "Chaque année ouvre un nouveau cycle et révèle une direction différente.":
      "Cada año abre un nuevo ciclo y revela una dirección diferente.",

    "Vue d’ensemble de l’année":
      "Visión general del año",

    "Cette année ouvre un cycle de progression, de clarification et de transformation personnelle.":
      "Este año abre un ciclo de progreso, claridad y transformación personal.",

    "Les prochains mois vous inviteront à mieux définir vos priorités et à construire une direction cohérente. Certaines évolutions seront rapides, tandis que d’autres demanderont du temps, de la patience et une meilleure compréhension de vos véritables besoins.":
      "Los próximos meses te invitarán a definir mejor tus prioridades y a construir una dirección coherente. Algunos cambios serán rápidos, mientras que otros requerirán tiempo, paciencia y una mejor comprensión de tus verdaderas necesidades.",

    "Avancez avec constance et accordez davantage d’importance à la solidité de vos choix qu’à la rapidité des résultats.":
      "Avanza con constancia y concede más importancia a la solidez de tus decisiones que a la rapidez de los resultados.",

    "Évolution":
      "Evolución",

    "Construction":
      "Construcción",

    "Une énergie de renouvellement accompagne cette nouvelle année.":
      "Una energía de renovación acompaña este nuevo año.",

    "Vous pourriez ressentir le besoin de revoir certaines habitudes, relations ou ambitions. Les transformations les plus importantes seront celles que vous pourrez intégrer durablement à votre quotidien.":
      "Podrías sentir la necesidad de revisar ciertos hábitos, relaciones o ambiciones. Las transformaciones más importantes serán aquellas que puedas integrar de manera duradera en tu vida cotidiana.",

    "Choisissez quelques changements essentiels et donnez-leur suffisamment de temps pour produire leurs effets.":
      "Elige algunos cambios esenciales y dales el tiempo suficiente para producir sus efectos.",

    "Décision":
      "Decisión",

    "Cette année favorise une meilleure compréhension de votre direction personnelle.":
      "Este año favorece una mejor comprensión de tu dirección personal.",

    "Les expériences traversées au fil des mois vous aideront à distinguer ce qui correspond réellement à vos aspirations de ce qui vous éloigne de votre équilibre. Cette lucidité soutiendra des décisions plus solides.":
      "Las experiencias vividas a lo largo de los meses te ayudarán a distinguir lo que realmente corresponde a tus aspiraciones de aquello que te aleja de tu equilibrio. Esta claridad favorecerá decisiones más sólidas.",

    "Conservez ce qui nourrit votre évolution et réduisez progressivement ce qui disperse votre énergie.":
      "Conserva aquello que favorece tu evolución y reduce progresivamente lo que dispersa tu energía.",

    "Compréhension":
      "Comprensión",

    "Priorités":
      "Prioridades",

    "Alignement":
      "Alineación",

    "Énergie de l’année":
      "Energía del año",

    "Votre énergie évoluera par cycles distincts au cours de l’année.":
      "Tu energía evolucionará en ciclos distintos a lo largo del año.",

    "Certaines périodes seront propices à l’action et au développement, tandis que d’autres favoriseront davantage le recul, la récupération et la réflexion. Le respect de ces variations vous permettra de préserver votre stabilité.":
      "Algunos períodos favorecerán la acción y el desarrollo, mientras que otros serán más propicios para el descanso, la recuperación y la reflexión. Respetar estas variaciones te permitirá preservar tu estabilidad.",

    "Adaptez votre rythme aux différentes étapes de l’année plutôt que de maintenir constamment la même intensité.":
      "Adapta tu ritmo a las diferentes etapas del año en lugar de mantener constantemente la misma intensidad.",

    "Rythme":
      "Ritmo",

    "Adaptation":
      "Adaptación",

    "Stabilité":
      "Estabilidad",

    "Cette année soutient une progression régulière et structurée.":
      "Este año favorece un progreso constante y estructurado.",

    "Votre motivation pourra grandir à mesure que vos projets prendront une forme plus concrète. Une organisation réaliste vous aidera à transformer vos intentions en résultats durables.":
      "Tu motivación podrá aumentar a medida que tus proyectos adquieran una forma más concreta. Una organización realista te ayudará a transformar tus intenciones en resultados duraderos.",

    "Travaillez avec des objectifs trimestriels simples et vérifiez régulièrement votre progression.":
      "Trabaja con objetivos trimestrales sencillos y revisa regularmente tu progreso.",

    "Motivation":
      "Motivación",

    "Organisation":
      "Organización",

    "Résultats":
      "Resultados",

    "Votre sensibilité jouera un rôle important dans la gestion de votre énergie.":
      "Tu sensibilidad desempeñará un papel importante en la gestión de tu energía.",

    "Les environnements, les relations et les responsabilités qui vous entourent pourront influencer fortement votre niveau de disponibilité. Une meilleure protection de votre temps facilitera votre concentration.":
      "Los entornos, las relaciones y las responsabilidades que te rodean podrán influir considerablemente en tu nivel de disponibilidad. Proteger mejor tu tiempo facilitará tu concentración.",

    "Préservez régulièrement des périodes de calme afin de retrouver votre énergie et votre clarté mentale.":
      "Reserva regularmente períodos de calma para recuperar tu energía y tu claridad mental.",

    "Sensibilité":
      "Sensibilidad",

    "Protection":
      "Protección",

    "Récupération":
      "Recuperación",

    "Influence de ":
      "Influencia de ",

    "Cette influence planétaire accompagne les principales évolutions de votre année.":
      "Esta influencia planetaria acompaña las principales evoluciones de tu año.",

    "Discernement":
      "Discernimiento",

    "Votre principal point de vigilance":
      "Tu principal punto de atención",

    "Développement":
      "Desarrollo",

    "Une direction à explorer":
      "Una dirección por explorar",

    "Progression":
      "Progreso",

    "Bordeaux":
      "Burdeos",

    "Bleu nuit":
      "Azul noche",

    "Vert émeraude":
      "Verde esmeralda",

    "Or":
      "Dorado",

    "Violet profond":
      "Violeta profundo",

    "Rose poudré":
      "Rosa empolvado",

    "Obsidienne":
      "Obsidiana",

    "Améthyste":
      "Amatista",

    "Quartz rose":
      "Cuarzo rosa",

    "Labradorite":
      "Labradorita",

    "Citrine":
      "Citrino",

    "Pierre de lune":
      "Piedra lunar",

    "Transformation":
      "Transformación",

    "Clarté":
      "Claridad",

    "Confiance":
      "Confianza",

    "Équilibre":
      "Equilibrio",

    "Renouveau":
      "Renovación",

    "Intuition":
      "Intuición",

    "Feu":
      "Fuego",

    "Terre":
      "Tierra",

    "Air":
      "Aire",

    "Eau":
      "Agua",

    "Vénus":
      "Venus",

    "Mercure":
      "Mercurio",

    "Lune":
      "Luna",

    "Soleil":
      "Sol",

    "Pluton":
      "Plutón",

    "Saturne":
      "Saturno",

    "Uranus":
      "Urano",

    "Neptune":
      "Neptuno",

    "Trimestre":
      "Trimestre",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Estos elementos simbólicos pueden acompañarte a lo largo del año.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "Las transformaciones más importantes toman forma a través de decisiones repetidas con constancia.",

    "Votre message de l’année":
      "Tu mensaje del año",

    "L’année":
      "El año",

    "vous invite à progresser avec constance, à respecter les différentes étapes de votre évolution et à choisir vos engagements avec discernement. Vous n’avez pas besoin de tout transformer immédiatement. Une direction claire, des décisions cohérentes et des gestes réguliers peuvent produire une évolution profonde et durable.":
      "te invita a avanzar con constancia, respetar las diferentes etapas de tu evolución y elegir tus compromisos con discernimiento. No necesitas transformarlo todo inmediatamente. Una dirección clara, decisiones coherentes y acciones regulares pueden producir una evolución profunda y duradera.",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Tu fuerza este año reside en tu capacidad para mantenerte fiel a tu dirección mientras adaptas tu camino a las nuevas realidades.",
  },

  /* =======================================================
     DEUTSCH
  ======================================================= */

  de: {
    "Horoscope de l’année":
      "Jahreshoroskop",

    "Année":
      "Jahr",

    "cette lecture vous accompagne à travers les principales tendances symboliques de votre année":
      "diese Deutung begleitet Sie durch die wichtigsten symbolischen Tendenzen Ihres Jahres",

    "Cette lecture vous accompagne à travers les principales tendances symboliques de l’année":
      "Diese Deutung begleitet Sie durch die wichtigsten symbolischen Tendenzen des Jahres",

    "Chaque année ouvre un nouveau cycle et révèle une direction différente.":
      "Jedes Jahr eröffnet einen neuen Zyklus und zeigt eine neue Richtung.",

    "Vue d’ensemble de l’année":
      "Jahresüberblick",

    "Cette année ouvre un cycle de progression, de clarification et de transformation personnelle.":
      "Dieses Jahr eröffnet einen Zyklus des Fortschritts, der Klarheit und der persönlichen Transformation.",

    "Les prochains mois vous inviteront à mieux définir vos priorités et à construire une direction cohérente. Certaines évolutions seront rapides, tandis que d’autres demanderont du temps, de la patience et une meilleure compréhension de vos véritables besoins.":
      "Die kommenden Monate laden Sie dazu ein, Ihre Prioritäten klarer zu definieren und eine stimmige Richtung aufzubauen. Manche Entwicklungen werden schnell verlaufen, während andere Zeit, Geduld und ein tieferes Verständnis Ihrer wirklichen Bedürfnisse erfordern.",

    "Avancez avec constance et accordez davantage d’importance à la solidité de vos choix qu’à la rapidité des résultats.":
      "Gehen Sie beständig voran und legen Sie mehr Wert auf die Tragfähigkeit Ihrer Entscheidungen als auf schnelle Ergebnisse.",

    "Évolution":
      "Entwicklung",

    "Construction":
      "Aufbau",

    "Une énergie de renouvellement accompagne cette nouvelle année.":
      "Eine Energie der Erneuerung begleitet dieses neue Jahr.",

    "Vous pourriez ressentir le besoin de revoir certaines habitudes, relations ou ambitions. Les transformations les plus importantes seront celles que vous pourrez intégrer durablement à votre quotidien.":
      "Möglicherweise verspüren Sie das Bedürfnis, bestimmte Gewohnheiten, Beziehungen oder Ambitionen zu überdenken. Die wichtigsten Veränderungen werden jene sein, die Sie dauerhaft in Ihren Alltag integrieren können.",

    "Choisissez quelques changements essentiels et donnez-leur suffisamment de temps pour produire leurs effets.":
      "Wählen Sie einige wesentliche Veränderungen und geben Sie ihnen genügend Zeit, ihre Wirkung zu entfalten.",

    "Décision":
      "Entscheidung",

    "Cette année favorise une meilleure compréhension de votre direction personnelle.":
      "Dieses Jahr fördert ein besseres Verständnis Ihrer persönlichen Richtung.",

    "Les expériences traversées au fil des mois vous aideront à distinguer ce qui correspond réellement à vos aspirations de ce qui vous éloigne de votre équilibre. Cette lucidité soutiendra des décisions plus solides.":
      "Die Erfahrungen der kommenden Monate werden Ihnen helfen zu erkennen, was wirklich Ihren Bestrebungen entspricht und was Sie von Ihrem Gleichgewicht entfernt. Diese Klarheit unterstützt fundiertere Entscheidungen.",

    "Conservez ce qui nourrit votre évolution et réduisez progressivement ce qui disperse votre énergie.":
      "Bewahren Sie, was Ihre Entwicklung unterstützt, und reduzieren Sie schrittweise, was Ihre Energie zerstreut.",

    "Compréhension":
      "Verständnis",

    "Priorités":
      "Prioritäten",

    "Alignement":
      "Ausrichtung",

    "Énergie de l’année":
      "Energie des Jahres",

    "Votre énergie évoluera par cycles distincts au cours de l’année.":
      "Ihre Energie wird sich im Laufe des Jahres in unterschiedlichen Zyklen entwickeln.",

    "Certaines périodes seront propices à l’action et au développement, tandis que d’autres favoriseront davantage le recul, la récupération et la réflexion. Le respect de ces variations vous permettra de préserver votre stabilité.":
      "Einige Phasen eignen sich besonders für Handeln und Entwicklung, während andere eher Rückzug, Erholung und Reflexion fördern. Wenn Sie diese Schwankungen respektieren, können Sie Ihre Stabilität bewahren.",

    "Adaptez votre rythme aux différentes étapes de l’année plutôt que de maintenir constamment la même intensité.":
      "Passen Sie Ihr Tempo den verschiedenen Phasen des Jahres an, anstatt ständig dieselbe Intensität aufrechtzuerhalten.",

    "Rythme":
      "Rhythmus",

    "Adaptation":
      "Anpassung",

    "Stabilité":
      "Stabilität",

    "Cette année soutient une progression régulière et structurée.":
      "Dieses Jahr unterstützt einen stetigen und strukturierten Fortschritt.",

    "Votre motivation pourra grandir à mesure que vos projets prendront une forme plus concrète. Une organisation réaliste vous aidera à transformer vos intentions en résultats durables.":
      "Ihre Motivation kann wachsen, während Ihre Projekte konkretere Formen annehmen. Eine realistische Organisation hilft Ihnen dabei, Ihre Absichten in nachhaltige Ergebnisse umzusetzen.",

    "Travaillez avec des objectifs trimestriels simples et vérifiez régulièrement votre progression.":
      "Arbeiten Sie mit einfachen Quartalszielen und überprüfen Sie regelmäßig Ihre Fortschritte.",

    "Motivation":
      "Motivation",

    "Organisation":
      "Organisation",

    "Résultats":
      "Ergebnisse",

    "Votre sensibilité jouera un rôle important dans la gestion de votre énergie.":
      "Ihre Sensibilität wird bei der Steuerung Ihrer Energie eine wichtige Rolle spielen.",

    "Les environnements, les relations et les responsabilités qui vous entourent pourront influencer fortement votre niveau de disponibilité. Une meilleure protection de votre temps facilitera votre concentration.":
      "Ihr Umfeld, Ihre Beziehungen und Ihre Verantwortlichkeiten können Ihre verfügbare Energie stark beeinflussen. Ein bewussterer Schutz Ihrer Zeit wird Ihre Konzentration fördern.",

    "Préservez régulièrement des périodes de calme afin de retrouver votre énergie et votre clarté mentale.":
      "Schaffen Sie regelmäßig ruhige Phasen, um Ihre Energie und geistige Klarheit wiederzufinden.",

    "Sensibilité":
      "Sensibilität",

    "Protection":
      "Schutz",

    "Récupération":
      "Erholung",

    "Influence de ":
      "Einfluss von ",

    "Cette influence planétaire accompagne les principales évolutions de votre année.":
      "Dieser planetarische Einfluss begleitet die wichtigsten Entwicklungen Ihres Jahres.",

    "Discernement":
      "Urteilsvermögen",

    "Votre principal point de vigilance":
      "Ihr wichtigster Aufmerksamkeitspunkt",

    "Développement":
      "Entwicklung",

    "Une direction à explorer":
      "Eine Richtung zum Erkunden",

    "Progression":
      "Fortschritt",

    "Bordeaux":
      "Bordeauxrot",

    "Bleu nuit":
      "Mitternachtsblau",

    "Vert émeraude":
      "Smaragdgrün",

    "Or":
      "Gold",

    "Violet profond":
      "Dunkelviolett",

    "Rose poudré":
      "Puderrosa",

    "Obsidienne":
      "Obsidian",

    "Améthyste":
      "Amethyst",

    "Quartz rose":
      "Rosenquarz",

    "Labradorite":
      "Labradorit",

    "Citrine":
      "Citrin",

    "Pierre de lune":
      "Mondstein",

    "Transformation":
      "Transformation",

    "Clarté":
      "Klarheit",

    "Confiance":
      "Vertrauen",

    "Équilibre":
      "Gleichgewicht",

    "Renouveau":
      "Erneuerung",

    "Intuition":
      "Intuition",

    "Feu":
      "Feuer",

    "Terre":
      "Erde",

    "Air":
      "Luft",

    "Eau":
      "Wasser",

    "Vénus":
      "Venus",

    "Mercure":
      "Merkur",

    "Lune":
      "Mond",

    "Soleil":
      "Sonne",

    "Pluton":
      "Pluto",

    "Saturne":
      "Saturn",

    "Uranus":
      "Uranus",

    "Neptune":
      "Neptun",

    "Trimestre":
      "Quartal",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Diese symbolischen Elemente können Sie durch Ihr Jahr begleiten.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "Die wichtigsten Veränderungen entstehen durch Entscheidungen, die mit Beständigkeit wiederholt werden.",

    "Votre message de l’année":
      "Ihre Botschaft für das Jahr",

    "L’année":
      "Das Jahr",

    "vous invite à progresser avec constance, à respecter les différentes étapes de votre évolution et à choisir vos engagements avec discernement. Vous n’avez pas besoin de tout transformer immédiatement. Une direction claire, des décisions cohérentes et des gestes réguliers peuvent produire une évolution profonde et durable.":
      "lädt Sie dazu ein, beständig voranzugehen, die verschiedenen Phasen Ihrer Entwicklung zu respektieren und Ihre Verpflichtungen mit Bedacht zu wählen. Sie müssen nicht alles sofort verändern. Eine klare Richtung, stimmige Entscheidungen und regelmäßige Schritte können eine tiefgreifende und nachhaltige Entwicklung bewirken.",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Ihre Stärke liegt in diesem Jahr darin, Ihrer Richtung treu zu bleiben und zugleich Ihren Weg an neue Realitäten anzupassen.",
  },

  /* =======================================================
     ITALIANO
  ======================================================= */

  it: {
    "Horoscope de l’année":
      "Oroscopo annuale",

    "Année":
      "Anno",

    "cette lecture vous accompagne à travers les principales tendances symboliques de votre année":
      "questa lettura ti accompagna attraverso le principali tendenze simboliche del tuo anno",

    "Cette lecture vous accompagne à travers les principales tendances symboliques de l’année":
      "Questa lettura ti accompagna attraverso le principali tendenze simboliche dell’anno",

    "Chaque année ouvre un nouveau cycle et révèle une direction différente.":
      "Ogni anno apre un nuovo ciclo e rivela una direzione diversa.",

    "Vue d’ensemble de l’année":
      "Panoramica dell’anno",

    "Cette année ouvre un cycle de progression, de clarification et de transformation personnelle.":
      "Quest’anno apre un ciclo di crescita, chiarezza e trasformazione personale.",

    "Les prochains mois vous inviteront à mieux définir vos priorités et à construire une direction cohérente. Certaines évolutions seront rapides, tandis que d’autres demanderont du temps, de la patience et une meilleure compréhension de vos véritables besoins.":
      "I prossimi mesi ti inviteranno a definire meglio le tue priorità e a costruire una direzione coerente. Alcuni cambiamenti saranno rapidi, mentre altri richiederanno tempo, pazienza e una migliore comprensione dei tuoi bisogni autentici.",

    "Avancez avec constance et accordez davantage d’importance à la solidité de vos choix qu’à la rapidité des résultats.":
      "Procedi con costanza e attribuisci maggiore importanza alla solidità delle tue scelte che alla rapidità dei risultati.",

    "Évolution":
      "Evoluzione",

    "Construction":
      "Costruzione",

    "Une énergie de renouvellement accompagne cette nouvelle année.":
      "Un’energia di rinnovamento accompagna questo nuovo anno.",

    "Vous pourriez ressentir le besoin de revoir certaines habitudes, relations ou ambitions. Les transformations les plus importantes seront celles que vous pourrez intégrer durablement à votre quotidien.":
      "Potresti sentire il bisogno di rivedere alcune abitudini, relazioni o ambizioni. Le trasformazioni più importanti saranno quelle che riuscirai a integrare stabilmente nella tua vita quotidiana.",

    "Choisissez quelques changements essentiels et donnez-leur suffisamment de temps pour produire leurs effets.":
      "Scegli alcuni cambiamenti essenziali e concedi loro il tempo necessario per produrre i loro effetti.",

    "Décision":
      "Decisione",

    "Cette année favorise une meilleure compréhension de votre direction personnelle.":
      "Quest’anno favorisce una migliore comprensione della tua direzione personale.",

    "Les expériences traversées au fil des mois vous aideront à distinguer ce qui correspond réellement à vos aspirations de ce qui vous éloigne de votre équilibre. Cette lucidité soutiendra des décisions plus solides.":
      "Le esperienze vissute nel corso dei mesi ti aiuteranno a distinguere ciò che corrisponde realmente alle tue aspirazioni da ciò che ti allontana dal tuo equilibrio. Questa chiarezza favorirà decisioni più solide.",

    "Conservez ce qui nourrit votre évolution et réduisez progressivement ce qui disperse votre énergie.":
      "Conserva ciò che sostiene la tua evoluzione e riduci gradualmente ciò che disperde la tua energia.",

    "Compréhension":
      "Comprensione",

    "Priorités":
      "Priorità",

    "Alignement":
      "Allineamento",

    "Énergie de l’année":
      "Energia dell’anno",

    "Votre énergie évoluera par cycles distincts au cours de l’année.":
      "La tua energia evolverà attraverso cicli distinti nel corso dell’anno.",

    "Certaines périodes seront propices à l’action et au développement, tandis que d’autres favoriseront davantage le recul, la récupération et la réflexion. Le respect de ces variations vous permettra de préserver votre stabilité.":
      "Alcuni periodi saranno favorevoli all’azione e allo sviluppo, mentre altri incoraggeranno maggiormente il riposo, il recupero e la riflessione. Rispettare queste variazioni ti permetterà di preservare la tua stabilità.",

    "Adaptez votre rythme aux différentes étapes de l’année plutôt que de maintenir constamment la même intensité.":
      "Adatta il tuo ritmo alle diverse fasi dell’anno invece di mantenere costantemente la stessa intensità.",

    "Rythme":
      "Ritmo",

    "Adaptation":
      "Adattamento",

    "Stabilité":
      "Stabilità",

    "Cette année soutient une progression régulière et structurée.":
      "Quest’anno sostiene una progressione regolare e strutturata.",

    "Votre motivation pourra grandir à mesure que vos projets prendront une forme plus concrète. Une organisation réaliste vous aidera à transformer vos intentions en résultats durables.":
      "La tua motivazione potrà crescere man mano che i tuoi progetti assumeranno una forma più concreta. Un’organizzazione realistica ti aiuterà a trasformare le tue intenzioni in risultati duraturi.",

    "Travaillez avec des objectifs trimestriels simples et vérifiez régulièrement votre progression.":
      "Lavora con semplici obiettivi trimestrali e verifica regolarmente i tuoi progressi.",

    "Motivation":
      "Motivazione",

    "Organisation":
      "Organizzazione",

    "Résultats":
      "Risultati",

    "Votre sensibilité jouera un rôle important dans la gestion de votre énergie.":
      "La tua sensibilità svolgerà un ruolo importante nella gestione della tua energia.",

    "Les environnements, les relations et les responsabilités qui vous entourent pourront influencer fortement votre niveau de disponibilité. Une meilleure protection de votre temps facilitera votre concentration.":
      "Gli ambienti, le relazioni e le responsabilità che ti circondano potranno influenzare fortemente la tua disponibilità. Una migliore protezione del tuo tempo favorirà la concentrazione.",

    "Préservez régulièrement des périodes de calme afin de retrouver votre énergie et votre clarté mentale.":
      "Riserva regolarmente momenti di calma per ritrovare la tua energia e la tua chiarezza mentale.",

    "Sensibilité":
      "Sensibilità",

    "Protection":
      "Protezione",

    "Récupération":
      "Recupero",

    "Influence de ":
      "Influenza di ",

    "Cette influence planétaire accompagne les principales évolutions de votre année.":
      "Questa influenza planetaria accompagna le principali evoluzioni del tuo anno.",

    "Discernement":
      "Discernimento",

    "Votre principal point de vigilance":
      "Il tuo principale punto di attenzione",

    "Développement":
      "Sviluppo",

    "Une direction à explorer":
      "Una direzione da esplorare",

    "Progression":
      "Progresso",

    "Bordeaux":
      "Bordeaux",

    "Bleu nuit":
      "Blu notte",

    "Vert émeraude":
      "Verde smeraldo",

    "Or":
      "Oro",

    "Violet profond":
      "Viola intenso",

    "Rose poudré":
      "Rosa cipria",

    "Obsidienne":
      "Ossidiana",

    "Améthyste":
      "Ametista",

    "Quartz rose":
      "Quarzo rosa",

    "Labradorite":
      "Labradorite",

    "Citrine":
      "Citrino",

    "Pierre de lune":
      "Pietra di luna",

    "Transformation":
      "Trasformazione",

    "Clarté":
      "Chiarezza",

    "Confiance":
      "Fiducia",

    "Équilibre":
      "Equilibrio",

    "Renouveau":
      "Rinnovamento",

    "Intuition":
      "Intuizione",

    "Feu":
      "Fuoco",

    "Terre":
      "Terra",

    "Air":
      "Aria",

    "Eau":
      "Acqua",

    "Vénus":
      "Venere",

    "Mercure":
      "Mercurio",

    "Lune":
      "Luna",

    "Soleil":
      "Sole",

    "Pluton":
      "Plutone",

    "Saturne":
      "Saturno",

    "Uranus":
      "Urano",

    "Neptune":
      "Nettuno",

    "Trimestre":
      "Trimestre",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Questi elementi simbolici possono accompagnarti durante il tuo anno.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "Le trasformazioni più importanti prendono forma attraverso decisioni ripetute con costanza.",

    "Votre message de l’année":
      "Il tuo messaggio dell’anno",

    "L’année":
      "L’anno",

    "vous invite à progresser avec constance, à respecter les différentes étapes de votre évolution et à choisir vos engagements avec discernement. Vous n’avez pas besoin de tout transformer immédiatement. Une direction claire, des décisions cohérentes et des gestes réguliers peuvent produire une évolution profonde et durable.":
      "ti invita a procedere con costanza, a rispettare le diverse fasi della tua evoluzione e a scegliere i tuoi impegni con discernimento. Non devi trasformare tutto immediatamente. Una direzione chiara, decisioni coerenti e azioni regolari possono produrre un’evoluzione profonda e duratura.",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "La tua forza quest’anno risiede nella capacità di rimanere fedele alla tua direzione adattando al tempo stesso il tuo percorso alle nuove realtà.",
  },

  /* =======================================================
     PORTUGUÊS BRASILEIRO
  ======================================================= */

  pt: {
    "Horoscope de l’année":
      "Horóscopo anual",

    "Année":
      "Ano",

    "cette lecture vous accompagne à travers les principales tendances symboliques de votre année":
      "esta leitura acompanha você pelas principais tendências simbólicas do seu ano",

    "Cette lecture vous accompagne à travers les principales tendances symboliques de l’année":
      "Esta leitura acompanha você pelas principais tendências simbólicas do ano",

    "Chaque année ouvre un nouveau cycle et révèle une direction différente.":
      "Cada ano abre um novo ciclo e revela uma direção diferente.",

    "Vue d’ensemble de l’année":
      "Visão geral do ano",

    "Cette année ouvre un cycle de progression, de clarification et de transformation personnelle.":
      "Este ano abre um ciclo de progresso, clareza e transformação pessoal.",

    "Les prochains mois vous inviteront à mieux définir vos priorités et à construire une direction cohérente. Certaines évolutions seront rapides, tandis que d’autres demanderont du temps, de la patience et une meilleure compréhension de vos véritables besoins.":
      "Os próximos meses convidarão você a definir melhor suas prioridades e construir uma direção coerente. Algumas mudanças serão rápidas, enquanto outras exigirão tempo, paciência e uma compreensão mais profunda de suas verdadeiras necessidades.",

    "Avancez avec constance et accordez davantage d’importance à la solidité de vos choix qu’à la rapidité des résultats.":
      "Avance com constância e dê mais importância à solidez de suas escolhas do que à rapidez dos resultados.",

    "Évolution":
      "Evolução",

    "Construction":
      "Construção",

    "Une énergie de renouvellement accompagne cette nouvelle année.":
      "Uma energia de renovação acompanha este novo ano.",

    "Vous pourriez ressentir le besoin de revoir certaines habitudes, relations ou ambitions. Les transformations les plus importantes seront celles que vous pourrez intégrer durablement à votre quotidien.":
      "Você poderá sentir a necessidade de rever certos hábitos, relacionamentos ou ambições. As transformações mais importantes serão aquelas que você conseguir integrar de forma duradoura ao seu cotidiano.",

    "Choisissez quelques changements essentiels et donnez-leur suffisamment de temps pour produire leurs effets.":
      "Escolha algumas mudanças essenciais e dê a elas tempo suficiente para produzir seus efeitos.",

    "Décision":
      "Decisão",

    "Cette année favorise une meilleure compréhension de votre direction personnelle.":
      "Este ano favorece uma melhor compreensão da sua direção pessoal.",

    "Les expériences traversées au fil des mois vous aideront à distinguer ce qui correspond réellement à vos aspirations de ce qui vous éloigne de votre équilibre. Cette lucidité soutiendra des décisions plus solides.":
      "As experiências vividas ao longo dos meses ajudarão você a distinguir o que realmente corresponde às suas aspirações daquilo que o afasta do seu equilíbrio. Essa clareza favorecerá decisões mais sólidas.",

    "Conservez ce qui nourrit votre évolution et réduisez progressivement ce qui disperse votre énergie.":
      "Preserve o que favorece sua evolução e reduza gradualmente aquilo que dispersa sua energia.",

    "Compréhension":
      "Compreensão",

    "Priorités":
      "Prioridades",

    "Alignement":
      "Alinhamento",

    "Énergie de l’année":
      "Energia do ano",

    "Votre énergie évoluera par cycles distincts au cours de l’année.":
      "Sua energia evoluirá em ciclos distintos ao longo do ano.",

    "Certaines périodes seront propices à l’action et au développement, tandis que d’autres favoriseront davantage le recul, la récupération et la réflexion. Le respect de ces variations vous permettra de préserver votre stabilité.":
      "Alguns períodos serão favoráveis à ação e ao desenvolvimento, enquanto outros favorecerão mais o descanso, a recuperação e a reflexão. Respeitar essas variações permitirá preservar sua estabilidade.",

    "Adaptez votre rythme aux différentes étapes de l’année plutôt que de maintenir constamment la même intensité.":
      "Adapte seu ritmo às diferentes etapas do ano em vez de manter constantemente a mesma intensidade.",

    "Rythme":
      "Ritmo",

    "Adaptation":
      "Adaptação",

    "Stabilité":
      "Estabilidade",

    "Cette année soutient une progression régulière et structurée.":
      "Este ano favorece um progresso constante e estruturado.",

    "Votre motivation pourra grandir à mesure que vos projets prendront une forme plus concrète. Une organisation réaliste vous aidera à transformer vos intentions en résultats durables.":
      "Sua motivação poderá crescer à medida que seus projetos ganharem uma forma mais concreta. Uma organização realista ajudará você a transformar suas intenções em resultados duradouros.",

    "Travaillez avec des objectifs trimestriels simples et vérifiez régulièrement votre progression.":
      "Trabalhe com metas trimestrais simples e acompanhe regularmente seu progresso.",

    "Motivation":
      "Motivação",

    "Organisation":
      "Organização",

    "Résultats":
      "Resultados",

    "Votre sensibilité jouera un rôle important dans la gestion de votre énergie.":
      "Sua sensibilidade terá um papel importante na gestão da sua energia.",

    "Les environnements, les relations et les responsabilités qui vous entourent pourront influencer fortement votre niveau de disponibilité. Une meilleure protection de votre temps facilitera votre concentration.":
      "Os ambientes, relacionamentos e responsabilidades ao seu redor poderão influenciar bastante sua disponibilidade. Proteger melhor o seu tempo favorecerá sua concentração.",

    "Préservez régulièrement des périodes de calme afin de retrouver votre énergie et votre clarté mentale.":
      "Reserve regularmente períodos de calma para recuperar sua energia e clareza mental.",

    "Sensibilité":
      "Sensibilidade",

    "Protection":
      "Proteção",

    "Récupération":
      "Recuperação",

    "Influence de ":
      "Influência de ",

    "Cette influence planétaire accompagne les principales évolutions de votre année.":
      "Esta influência planetária acompanha as principais evoluções do seu ano.",

    "Discernement":
      "Discernimento",

    "Votre principal point de vigilance":
      "Seu principal ponto de atenção",

    "Développement":
      "Desenvolvimento",

    "Une direction à explorer":
      "Uma direção a explorar",

    "Progression":
      "Progresso",

    "Bordeaux":
      "Bordô",

    "Bleu nuit":
      "Azul-noturno",

    "Vert émeraude":
      "Verde-esmeralda",

    "Or":
      "Dourado",

    "Violet profond":
      "Violeta profundo",

    "Rose poudré":
      "Rosa-pó",

    "Obsidienne":
      "Obsidiana",

    "Améthyste":
      "Ametista",

    "Quartz rose":
      "Quartzo rosa",

    "Labradorite":
      "Labradorita",

    "Citrine":
      "Citrino",

    "Pierre de lune":
      "Pedra da lua",

    "Transformation":
      "Transformação",

    "Clarté":
      "Clareza",

    "Confiance":
      "Confiança",

    "Équilibre":
      "Equilíbrio",

    "Renouveau":
      "Renovação",

    "Intuition":
      "Intuição",

    "Feu":
      "Fogo",

    "Terre":
      "Terra",

    "Air":
      "Ar",

    "Eau":
      "Água",

    "Vénus":
      "Vênus",

    "Mercure":
      "Mercúrio",

    "Lune":
      "Lua",

    "Soleil":
      "Sol",

    "Pluton":
      "Plutão",

    "Saturne":
      "Saturno",

    "Uranus":
      "Urano",

    "Neptune":
      "Netuno",

    "Trimestre":
      "Trimestre",

    "Ces éléments symboliques peuvent accompagner votre année.":
      "Esses elementos simbólicos podem acompanhar você ao longo do ano.",

    "Les transformations les plus importantes prennent forme à travers des décisions répétées avec constance.":
      "As transformações mais importantes tomam forma por meio de decisões repetidas com constância.",

    "Votre message de l’année":
      "Sua mensagem do ano",

    "L’année":
      "O ano",

    "vous invite à progresser avec constance, à respecter les différentes étapes de votre évolution et à choisir vos engagements avec discernement. Vous n’avez pas besoin de tout transformer immédiatement. Une direction claire, des décisions cohérentes et des gestes réguliers peuvent produire une évolution profonde et durable.":
      "convida você a avançar com constância, respeitar as diferentes etapas da sua evolução e escolher seus compromissos com discernimento. Você não precisa transformar tudo imediatamente. Uma direção clara, decisões coerentes e ações regulares podem produzir uma evolução profunda e duradoura.",

    "Votre force réside cette année dans votre capacité à rester fidèle à votre direction tout en adaptant votre chemin aux nouvelles réalités.":
      "Sua força neste ano está na capacidade de permanecer fiel à sua direção enquanto adapta seu caminho às novas realidades.",
  },
};

/* =========================================================
   LOCALIZER
========================================================= */

export function localizeYearlyHoroscopeBuilder(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  const protectedKeys = new Set([
    "Or",
    "Air",
  ]);

  for (
    const [french, translated] of
    Object.entries(TRANSLATIONS[locale])
  ) {
    if (protectedKeys.has(french)) {
      continue;
    }

    output =
      output.split(french).join(translated);
  }

  // Traduire seulement les valeurs autonomes "Or" et "Air"
  // pour éviter par exemple :
  // Organisation -> Organization -> Goldganization
  for (const key of protectedKeys) {
    const translated = TRANSLATIONS[locale][key];

    if (!translated) {
      continue;
    }

    const escapedKey =
      key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    output = output.replace(
      new RegExp(
        `(["'\`])${escapedKey}\\1`,
        "g",
      ),
      (_match, quote) =>
        `${quote}${translated}${quote}`,
    );
  }

  return output;
}
