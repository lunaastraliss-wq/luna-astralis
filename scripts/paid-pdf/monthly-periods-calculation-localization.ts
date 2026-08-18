import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type TranslationMap =
  Record<string, string>;

/* =========================================================
   MONTHLY PERIODS — CALCULATION TRANSLATIONS
========================================================= */

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Amour et relations":
      "Love and relationships",
    "Travail et carrière":
      "Work and career",
    "Finances":
      "Finances",
    "Communication":
      "Communication",
    "Énergie et action":
      "Energy and action",
    "Bien-être":
      "Well-being",
    "Évolution générale":
      "General outlook",
    "Période favorable — ":
      "Favorable period — ",
    "Période délicate — ":
      "Delicate period — ",
    "Cette période favorise les rapprochements, les échanges sincères et une meilleure compréhension des besoins affectifs. Les relations peuvent évoluer plus naturellement lorsque les intentions sont clairement exprimées.":
      "This period favors closeness, sincere exchanges, and a better understanding of emotional needs. Relationships can evolve more naturally when intentions are expressed clearly.",
    "Cette période soutient les initiatives professionnelles, les décisions utiles et les démarches qui permettent de faire avancer un objectif. Les efforts peuvent produire des résultats plus visibles.":
      "This period supports professional initiatives, useful decisions, and actions that help move an objective forward. Efforts may produce more visible results.",
    "Cette période peut faciliter les décisions financières, les négociations ou la recherche de solutions concrètes. Elle favorise une gestion plus claire des ressources disponibles.":
      "This period can facilitate financial decisions, negotiations, or the search for practical solutions. It supports clearer management of available resources.",
    "Les échanges, les discussions et les démarches administratives bénéficient d’une énergie plus fluide. Il devient plus facile d’exprimer une idée ou de clarifier une situation.":
      "Exchanges, discussions, and administrative steps benefit from smoother energy. It becomes easier to express an idea or clarify a situation.",
    "L’énergie disponible permet d’agir avec davantage de motivation et de confiance. Cette période convient particulièrement aux initiatives et aux projets qui demandent de l’élan.":
      "The available energy allows you to act with greater motivation and confidence. This period is especially suitable for initiatives and projects that require momentum.",
    "Cette période soutient le repos, l’équilibre émotionnel et l’écoute des besoins personnels. Elle peut aider à retrouver un rythme plus harmonieux.":
      "This period supports rest, emotional balance, and attention to personal needs. It can help you return to a more harmonious rhythm.",
    "Plusieurs influences constructives se rejoignent durant cette période. Les événements peuvent progresser plus facilement lorsque les occasions sont accompagnées d’actions concrètes.":
      "Several constructive influences come together during this period. Events can progress more easily when opportunities are supported by concrete actions.",
    "Exprimez clairement vos sentiments et profitez de cette ouverture pour renforcer les liens importants.":
      "Express your feelings clearly and use this opening to strengthen important bonds.",
    "Présentez vos idées, avancez vos démarches et concentrez vos efforts sur une priorité professionnelle.":
      "Present your ideas, move your initiatives forward, and focus your efforts on one professional priority.",
    "Prenez les décisions utiles avec réalisme et vérifiez les détails avant de confirmer un engagement.":
      "Make useful decisions realistically and check the details before confirming a commitment.",
    "Utilisez cette période pour discuter, négocier, écrire ou clarifier ce qui demeurait imprécis.":
      "Use this period to discuss, negotiate, write, or clarify what remained unclear.",
    "Canalisez votre motivation vers un objectif précis afin de transformer l’élan en résultat concret.":
      "Channel your motivation toward a specific goal in order to turn momentum into a concrete result.",
    "Accordez du temps aux habitudes qui restaurent votre énergie physique et émotionnelle.":
      "Give time to habits that restore your physical and emotional energy.",
    "Profitez des ouvertures présentes sans attendre que les événements se développent entièrement seuls.":
      "Use the current openings without waiting for events to develop entirely on their own.",
    "Cette période peut rendre les émotions ou les attentes relationnelles plus sensibles. Des incompréhensions peuvent apparaître lorsque les besoins ne sont pas exprimés clairement.":
      "This period can make emotions or relationship expectations more sensitive. Misunderstandings may arise when needs are not expressed clearly.",
    "Cette période peut apporter des ralentissements, des responsabilités supplémentaires ou des divergences professionnelles. Les résultats demandent davantage de patience et de méthode.":
      "This period may bring delays, additional responsibilities, or professional disagreements. Results require more patience and method.",
    "Cette période demande davantage de prudence dans les dépenses, les engagements et les décisions financières. Certains détails peuvent nécessiter une vérification supplémentaire.":
      "This period calls for greater caution with spending, commitments, and financial decisions. Some details may require additional verification.",
    "Les échanges peuvent être plus tendus, imprécis ou facilement mal interprétés. Une réponse trop rapide risque d’aggraver une situation qui pourrait être clarifiée calmement.":
      "Exchanges may be more tense, imprecise, or easily misunderstood. A response that is too quick could worsen a situation that might otherwise be clarified calmly.",
    "L’énergie peut devenir irrégulière, excessive ou difficile à canaliser. La précipitation augmente le risque de fatigue, de conflit ou de décision impulsive.":
      "Energy may become irregular, excessive, or difficult to channel. Rushing increases the risk of fatigue, conflict, or impulsive decisions.",
    "Cette période peut accentuer la fatigue, la sensibilité ou le besoin de recul. Le corps et les émotions demandent davantage d’attention.":
      "This period may increase fatigue, sensitivity, or the need to step back. The body and emotions require more attention.",
    "Plusieurs influences demandent des ajustements durant cette période. Les tensions ne sont pas nécessairement négatives, mais elles signalent ce qui doit être revu ou réorganisé.":
      "Several influences require adjustments during this period. Tensions are not necessarily negative, but they indicate what needs to be reviewed or reorganized.",
    "Évitez les conclusions rapides et privilégiez une discussion honnête lorsque les émotions sont redescendues.":
      "Avoid quick conclusions and favor an honest discussion once emotions have settled.",
    "Revérifiez les détails, respectez les étapes nécessaires et ne forcez pas une décision qui manque encore de clarté.":
      "Recheck the details, respect the necessary steps, and do not force a decision that still lacks clarity.",
    "Limitez les décisions impulsives et prenez le temps de comparer les options avant de vous engager.":
      "Limit impulsive decisions and take time to compare options before committing.",
    "Relisez les messages importants et demandez une clarification plutôt que de présumer des intentions de l’autre personne.":
      "Reread important messages and ask for clarification rather than assuming the other person's intentions.",
    "Ralentissez avant d’atteindre l’épuisement et évitez de disperser vos efforts dans trop de directions.":
      "Slow down before reaching exhaustion and avoid scattering your efforts in too many directions.",
    "Respectez vos limites, réduisez les surcharges inutiles et donnez davantage de place au repos.":
      "Respect your limits, reduce unnecessary overload, and make more room for rest.",
    "Observez ce qui résiste avant d’agir et utilisez cette période pour ajuster votre stratégie.":
      "Observe what resists before acting and use this period to adjust your strategy.",
  },
  es: {
    "Amour et relations":
      "Amor y relaciones",
    "Travail et carrière":
      "Trabajo y carrera",
    "Finances":
      "Finanzas",
    "Communication":
      "Comunicación",
    "Énergie et action":
      "Energía y acción",
    "Bien-être":
      "Bienestar",
    "Évolution générale":
      "Evolución general",
    "Période favorable — ":
      "Período favorable — ",
    "Période délicate — ":
      "Período delicado — ",
    "Cette période favorise les rapprochements, les échanges sincères et une meilleure compréhension des besoins affectifs. Les relations peuvent évoluer plus naturellement lorsque les intentions sont clairement exprimées.":
      "Este período favorece los acercamientos, los intercambios sinceros y una mejor comprensión de las necesidades afectivas. Las relaciones pueden evolucionar con mayor naturalidad cuando las intenciones se expresan claramente.",
    "Cette période soutient les initiatives professionnelles, les décisions utiles et les démarches qui permettent de faire avancer un objectif. Les efforts peuvent produire des résultats plus visibles.":
      "Este período apoya las iniciativas profesionales, las decisiones útiles y las gestiones que permiten avanzar hacia un objetivo. Los esfuerzos pueden producir resultados más visibles.",
    "Cette période peut faciliter les décisions financières, les négociations ou la recherche de solutions concrètes. Elle favorise une gestion plus claire des ressources disponibles.":
      "Este período puede facilitar las decisiones financieras, las negociaciones o la búsqueda de soluciones concretas. Favorece una gestión más clara de los recursos disponibles.",
    "Les échanges, les discussions et les démarches administratives bénéficient d’une énergie plus fluide. Il devient plus facile d’exprimer une idée ou de clarifier une situation.":
      "Los intercambios, las conversaciones y las gestiones administrativas se benefician de una energía más fluida. Resulta más fácil expresar una idea o aclarar una situación.",
    "L’énergie disponible permet d’agir avec davantage de motivation et de confiance. Cette période convient particulièrement aux initiatives et aux projets qui demandent de l’élan.":
      "La energía disponible permite actuar con mayor motivación y confianza. Este período es especialmente favorable para iniciativas y proyectos que requieren impulso.",
    "Cette période soutient le repos, l’équilibre émotionnel et l’écoute des besoins personnels. Elle peut aider à retrouver un rythme plus harmonieux.":
      "Este período favorece el descanso, el equilibrio emocional y la atención a las necesidades personales. Puede ayudar a recuperar un ritmo más armonioso.",
    "Plusieurs influences constructives se rejoignent durant cette période. Les événements peuvent progresser plus facilement lorsque les occasions sont accompagnées d’actions concrètes.":
      "Varias influencias constructivas se unen durante este período. Los acontecimientos pueden avanzar con mayor facilidad cuando las oportunidades van acompañadas de acciones concretas.",
    "Exprimez clairement vos sentiments et profitez de cette ouverture pour renforcer les liens importants.":
      "Exprese claramente sus sentimientos y aproveche esta apertura para fortalecer los vínculos importantes.",
    "Présentez vos idées, avancez vos démarches et concentrez vos efforts sur une priorité professionnelle.":
      "Presente sus ideas, avance en sus gestiones y concentre sus esfuerzos en una prioridad profesional.",
    "Prenez les décisions utiles avec réalisme et vérifiez les détails avant de confirmer un engagement.":
      "Tome decisiones útiles con realismo y verifique los detalles antes de confirmar un compromiso.",
    "Utilisez cette période pour discuter, négocier, écrire ou clarifier ce qui demeurait imprécis.":
      "Utilice este período para conversar, negociar, escribir o aclarar lo que seguía siendo impreciso.",
    "Canalisez votre motivation vers un objectif précis afin de transformer l’élan en résultat concret.":
      "Canalice su motivación hacia un objetivo preciso para transformar el impulso en un resultado concreto.",
    "Accordez du temps aux habitudes qui restaurent votre énergie physique et émotionnelle.":
      "Dedique tiempo a los hábitos que restauran su energía física y emocional.",
    "Profitez des ouvertures présentes sans attendre que les événements se développent entièrement seuls.":
      "Aproveche las oportunidades presentes sin esperar que los acontecimientos se desarrollen completamente por sí solos.",
    "Cette période peut rendre les émotions ou les attentes relationnelles plus sensibles. Des incompréhensions peuvent apparaître lorsque les besoins ne sont pas exprimés clairement.":
      "Este período puede hacer más sensibles las emociones o las expectativas relacionales. Pueden surgir malentendidos cuando las necesidades no se expresan claramente.",
    "Cette période peut apporter des ralentissements, des responsabilités supplémentaires ou des divergences professionnelles. Les résultats demandent davantage de patience et de méthode.":
      "Este período puede traer retrasos, responsabilidades adicionales o desacuerdos profesionales. Los resultados requieren más paciencia y método.",
    "Cette période demande davantage de prudence dans les dépenses, les engagements et les décisions financières. Certains détails peuvent nécessiter une vérification supplémentaire.":
      "Este período exige más prudencia en los gastos, los compromisos y las decisiones financieras. Algunos detalles pueden requerir una verificación adicional.",
    "Les échanges peuvent être plus tendus, imprécis ou facilement mal interprétés. Une réponse trop rapide risque d’aggraver une situation qui pourrait être clarifiée calmement.":
      "Los intercambios pueden ser más tensos, imprecisos o fáciles de malinterpretar. Una respuesta demasiado rápida puede agravar una situación que podría aclararse con calma.",
    "L’énergie peut devenir irrégulière, excessive ou difficile à canaliser. La précipitation augmente le risque de fatigue, de conflit ou de décision impulsive.":
      "La energía puede volverse irregular, excesiva o difícil de canalizar. La precipitación aumenta el riesgo de fatiga, conflicto o decisiones impulsivas.",
    "Cette période peut accentuer la fatigue, la sensibilité ou le besoin de recul. Le corps et les émotions demandent davantage d’attention.":
      "Este período puede acentuar el cansancio, la sensibilidad o la necesidad de tomar distancia. El cuerpo y las emociones requieren mayor atención.",
    "Plusieurs influences demandent des ajustements durant cette période. Les tensions ne sont pas nécessairement négatives, mais elles signalent ce qui doit être revu ou réorganisé.":
      "Varias influencias exigen ajustes durante este período. Las tensiones no son necesariamente negativas, pero indican lo que debe revisarse o reorganizarse.",
    "Évitez les conclusions rapides et privilégiez une discussion honnête lorsque les émotions sont redescendues.":
      "Evite las conclusiones precipitadas y favorezca una conversación honesta cuando las emociones se hayan calmado.",
    "Revérifiez les détails, respectez les étapes nécessaires et ne forcez pas une décision qui manque encore de clarté.":
      "Revise nuevamente los detalles, respete las etapas necesarias y no fuerce una decisión que todavía carece de claridad.",
    "Limitez les décisions impulsives et prenez le temps de comparer les options avant de vous engager.":
      "Limite las decisiones impulsivas y tómese el tiempo de comparar las opciones antes de comprometerse.",
    "Relisez les messages importants et demandez une clarification plutôt que de présumer des intentions de l’autre personne.":
      "Vuelva a leer los mensajes importantes y pida una aclaración en lugar de suponer las intenciones de la otra persona.",
    "Ralentissez avant d’atteindre l’épuisement et évitez de disperser vos efforts dans trop de directions.":
      "Reduzca el ritmo antes de llegar al agotamiento y evite dispersar sus esfuerzos en demasiadas direcciones.",
    "Respectez vos limites, réduisez les surcharges inutiles et donnez davantage de place au repos.":
      "Respete sus límites, reduzca las sobrecargas innecesarias y dé más espacio al descanso.",
    "Observez ce qui résiste avant d’agir et utilisez cette période pour ajuster votre stratégie.":
      "Observe lo que ofrece resistencia antes de actuar y utilice este período para ajustar su estrategia.",
  },
  de: {
    "Amour et relations":
      "Liebe und Beziehungen",
    "Travail et carrière":
      "Arbeit und Karriere",
    "Finances":
      "Finanzen",
    "Communication":
      "Kommunikation",
    "Énergie et action":
      "Energie und Handeln",
    "Bien-être":
      "Wohlbefinden",
    "Évolution générale":
      "Allgemeine Entwicklung",
    "Période favorable — ":
      "Günstige Phase — ",
    "Période délicate — ":
      "Anspruchsvolle Phase — ",
    "Cette période favorise les rapprochements, les échanges sincères et une meilleure compréhension des besoins affectifs. Les relations peuvent évoluer plus naturellement lorsque les intentions sont clairement exprimées.":
      "Diese Phase begünstigt Annäherung, aufrichtigen Austausch und ein besseres Verständnis emotionaler Bedürfnisse. Beziehungen können sich natürlicher entwickeln, wenn Absichten klar ausgedrückt werden.",
    "Cette période soutient les initiatives professionnelles, les décisions utiles et les démarches qui permettent de faire avancer un objectif. Les efforts peuvent produire des résultats plus visibles.":
      "Diese Phase unterstützt berufliche Initiativen, hilfreiche Entscheidungen und Schritte, die ein Ziel voranbringen. Bemühungen können sichtbarere Ergebnisse hervorbringen.",
    "Cette période peut faciliter les décisions financières, les négociations ou la recherche de solutions concrètes. Elle favorise une gestion plus claire des ressources disponibles.":
      "Diese Phase kann finanzielle Entscheidungen, Verhandlungen oder die Suche nach konkreten Lösungen erleichtern. Sie fördert einen klareren Umgang mit den verfügbaren Ressourcen.",
    "Les échanges, les discussions et les démarches administratives bénéficient d’une énergie plus fluide. Il devient plus facile d’exprimer une idée ou de clarifier une situation.":
      "Austausch, Gespräche und administrative Schritte profitieren von einer fließenderen Energie. Es wird leichter, eine Idee auszudrücken oder eine Situation zu klären.",
    "L’énergie disponible permet d’agir avec davantage de motivation et de confiance. Cette période convient particulièrement aux initiatives et aux projets qui demandent de l’élan.":
      "Die verfügbare Energie ermöglicht es Ihnen, mit mehr Motivation und Vertrauen zu handeln. Diese Phase eignet sich besonders für Initiativen und Projekte, die Schwung brauchen.",
    "Cette période soutient le repos, l’équilibre émotionnel et l’écoute des besoins personnels. Elle peut aider à retrouver un rythme plus harmonieux.":
      "Diese Phase unterstützt Erholung, emotionales Gleichgewicht und die Aufmerksamkeit für persönliche Bedürfnisse. Sie kann helfen, zu einem harmonischeren Rhythmus zurückzufinden.",
    "Plusieurs influences constructives se rejoignent durant cette période. Les événements peuvent progresser plus facilement lorsque les occasions sont accompagnées d’actions concrètes.":
      "Mehrere konstruktive Einflüsse kommen in dieser Phase zusammen. Ereignisse können leichter vorankommen, wenn Chancen durch konkrete Handlungen unterstützt werden.",
    "Exprimez clairement vos sentiments et profitez de cette ouverture pour renforcer les liens importants.":
      "Drücken Sie Ihre Gefühle klar aus und nutzen Sie diese Öffnung, um wichtige Beziehungen zu stärken.",
    "Présentez vos idées, avancez vos démarches et concentrez vos efforts sur une priorité professionnelle.":
      "Präsentieren Sie Ihre Ideen, bringen Sie Ihre Schritte voran und konzentrieren Sie Ihre Bemühungen auf eine berufliche Priorität.",
    "Prenez les décisions utiles avec réalisme et vérifiez les détails avant de confirmer un engagement.":
      "Treffen Sie sinnvolle Entscheidungen mit Realismus und prüfen Sie die Details, bevor Sie eine Verpflichtung bestätigen.",
    "Utilisez cette période pour discuter, négocier, écrire ou clarifier ce qui demeurait imprécis.":
      "Nutzen Sie diese Phase, um zu diskutieren, zu verhandeln, zu schreiben oder Unklares zu klären.",
    "Canalisez votre motivation vers un objectif précis afin de transformer l’élan en résultat concret.":
      "Lenken Sie Ihre Motivation auf ein konkretes Ziel, um Schwung in ein greifbares Ergebnis zu verwandeln.",
    "Accordez du temps aux habitudes qui restaurent votre énergie physique et émotionnelle.":
      "Nehmen Sie sich Zeit für Gewohnheiten, die Ihre körperliche und emotionale Energie wiederherstellen.",
    "Profitez des ouvertures présentes sans attendre que les événements se développent entièrement seuls.":
      "Nutzen Sie vorhandene Öffnungen, ohne darauf zu warten, dass sich die Ereignisse vollständig von selbst entwickeln.",
    "Cette période peut rendre les émotions ou les attentes relationnelles plus sensibles. Des incompréhensions peuvent apparaître lorsque les besoins ne sont pas exprimés clairement.":
      "Diese Phase kann Emotionen oder Erwartungen in Beziehungen empfindlicher machen. Missverständnisse können entstehen, wenn Bedürfnisse nicht klar ausgedrückt werden.",
    "Cette période peut apporter des ralentissements, des responsabilités supplémentaires ou des divergences professionnelles. Les résultats demandent davantage de patience et de méthode.":
      "Diese Phase kann Verzögerungen, zusätzliche Verantwortlichkeiten oder berufliche Meinungsverschiedenheiten mit sich bringen. Ergebnisse erfordern mehr Geduld und Methode.",
    "Cette période demande davantage de prudence dans les dépenses, les engagements et les décisions financières. Certains détails peuvent nécessiter une vérification supplémentaire.":
      "Diese Phase verlangt mehr Vorsicht bei Ausgaben, Verpflichtungen und finanziellen Entscheidungen. Manche Details können eine zusätzliche Prüfung erfordern.",
    "Les échanges peuvent être plus tendus, imprécis ou facilement mal interprétés. Une réponse trop rapide risque d’aggraver une situation qui pourrait être clarifiée calmement.":
      "Der Austausch kann angespannter, ungenauer oder leichter missverständlich sein. Eine zu schnelle Antwort kann eine Situation verschärfen, die sich ruhig klären ließe.",
    "L’énergie peut devenir irrégulière, excessive ou difficile à canaliser. La précipitation augmente le risque de fatigue, de conflit ou de décision impulsive.":
      "Die Energie kann unregelmäßig, übermäßig oder schwer zu lenken werden. Eile erhöht das Risiko von Müdigkeit, Konflikten oder impulsiven Entscheidungen.",
    "Cette période peut accentuer la fatigue, la sensibilité ou le besoin de recul. Le corps et les émotions demandent davantage d’attention.":
      "Diese Phase kann Müdigkeit, Sensibilität oder das Bedürfnis nach Abstand verstärken. Körper und Emotionen brauchen mehr Aufmerksamkeit.",
    "Plusieurs influences demandent des ajustements durant cette période. Les tensions ne sont pas nécessairement négatives, mais elles signalent ce qui doit être revu ou réorganisé.":
      "Mehrere Einflüsse erfordern in dieser Phase Anpassungen. Spannungen sind nicht unbedingt negativ, sondern zeigen, was überprüft oder neu organisiert werden muss.",
    "Évitez les conclusions rapides et privilégiez une discussion honnête lorsque les émotions sont redescendues.":
      "Vermeiden Sie vorschnelle Schlüsse und bevorzugen Sie ein ehrliches Gespräch, sobald sich die Emotionen beruhigt haben.",
    "Revérifiez les détails, respectez les étapes nécessaires et ne forcez pas une décision qui manque encore de clarté.":
      "Prüfen Sie die Details erneut, respektieren Sie die notwendigen Schritte und erzwingen Sie keine Entscheidung, der noch Klarheit fehlt.",
    "Limitez les décisions impulsives et prenez le temps de comparer les options avant de vous engager.":
      "Begrenzen Sie impulsive Entscheidungen und nehmen Sie sich Zeit, Optionen zu vergleichen, bevor Sie sich festlegen.",
    "Relisez les messages importants et demandez une clarification plutôt que de présumer des intentions de l’autre personne.":
      "Lesen Sie wichtige Nachrichten noch einmal und bitten Sie um Klärung, statt die Absichten der anderen Person vorauszusetzen.",
    "Ralentissez avant d’atteindre l’épuisement et évitez de disperser vos efforts dans trop de directions.":
      "Verlangsamen Sie rechtzeitig vor der Erschöpfung und vermeiden Sie es, Ihre Kräfte in zu viele Richtungen zu zerstreuen.",
    "Respectez vos limites, réduisez les surcharges inutiles et donnez davantage de place au repos.":
      "Respektieren Sie Ihre Grenzen, reduzieren Sie unnötige Überlastung und schaffen Sie mehr Raum für Erholung.",
    "Observez ce qui résiste avant d’agir et utilisez cette période pour ajuster votre stratégie.":
      "Beobachten Sie, was Widerstand zeigt, bevor Sie handeln, und nutzen Sie diese Phase, um Ihre Strategie anzupassen.",
  },
  it: {
    "Amour et relations":
      "Amore e relazioni",
    "Travail et carrière":
      "Lavoro e carriera",
    "Finances":
      "Finanze",
    "Communication":
      "Comunicazione",
    "Énergie et action":
      "Energia e azione",
    "Bien-être":
      "Benessere",
    "Évolution générale":
      "Evoluzione generale",
    "Période favorable — ":
      "Periodo favorevole — ",
    "Période délicate — ":
      "Periodo delicato — ",
    "Cette période favorise les rapprochements, les échanges sincères et une meilleure compréhension des besoins affectifs. Les relations peuvent évoluer plus naturellement lorsque les intentions sont clairement exprimées.":
      "Questo periodo favorisce i riavvicinamenti, gli scambi sinceri e una migliore comprensione dei bisogni affettivi. Le relazioni possono evolvere più naturalmente quando le intenzioni vengono espresse chiaramente.",
    "Cette période soutient les initiatives professionnelles, les décisions utiles et les démarches qui permettent de faire avancer un objectif. Les efforts peuvent produire des résultats plus visibles.":
      "Questo periodo sostiene le iniziative professionali, le decisioni utili e le azioni che permettono di far avanzare un obiettivo. Gli sforzi possono produrre risultati più visibili.",
    "Cette période peut faciliter les décisions financières, les négociations ou la recherche de solutions concrètes. Elle favorise une gestion plus claire des ressources disponibles.":
      "Questo periodo può facilitare le decisioni finanziarie, le negoziazioni o la ricerca di soluzioni concrete. Favorisce una gestione più chiara delle risorse disponibili.",
    "Les échanges, les discussions et les démarches administratives bénéficient d’une énergie plus fluide. Il devient plus facile d’exprimer une idée ou de clarifier une situation.":
      "Gli scambi, le discussioni e le pratiche amministrative beneficiano di un'energia più fluida. Diventa più facile esprimere un'idea o chiarire una situazione.",
    "L’énergie disponible permet d’agir avec davantage de motivation et de confiance. Cette période convient particulièrement aux initiatives et aux projets qui demandent de l’élan.":
      "L'energia disponibile permette di agire con maggiore motivazione e fiducia. Questo periodo è particolarmente adatto alle iniziative e ai progetti che richiedono slancio.",
    "Cette période soutient le repos, l’équilibre émotionnel et l’écoute des besoins personnels. Elle peut aider à retrouver un rythme plus harmonieux.":
      "Questo periodo sostiene il riposo, l'equilibrio emotivo e l'ascolto dei bisogni personali. Può aiutare a ritrovare un ritmo più armonioso.",
    "Plusieurs influences constructives se rejoignent durant cette période. Les événements peuvent progresser plus facilement lorsque les occasions sont accompagnées d’actions concrètes.":
      "Diverse influenze costruttive si uniscono durante questo periodo. Gli eventi possono progredire più facilmente quando le opportunità sono accompagnate da azioni concrete.",
    "Exprimez clairement vos sentiments et profitez de cette ouverture pour renforcer les liens importants.":
      "Esprimi chiaramente i tuoi sentimenti e approfitta di questa apertura per rafforzare i legami importanti.",
    "Présentez vos idées, avancez vos démarches et concentrez vos efforts sur une priorité professionnelle.":
      "Presenta le tue idee, porta avanti le tue iniziative e concentra i tuoi sforzi su una priorità professionale.",
    "Prenez les décisions utiles avec réalisme et vérifiez les détails avant de confirmer un engagement.":
      "Prendi decisioni utili con realismo e verifica i dettagli prima di confermare un impegno.",
    "Utilisez cette période pour discuter, négocier, écrire ou clarifier ce qui demeurait imprécis.":
      "Usa questo periodo per discutere, negoziare, scrivere o chiarire ciò che era rimasto impreciso.",
    "Canalisez votre motivation vers un objectif précis afin de transformer l’élan en résultat concret.":
      "Canalizza la tua motivazione verso un obiettivo preciso per trasformare lo slancio in un risultato concreto.",
    "Accordez du temps aux habitudes qui restaurent votre énergie physique et émotionnelle.":
      "Dedica tempo alle abitudini che ristabiliscono la tua energia fisica ed emotiva.",
    "Profitez des ouvertures présentes sans attendre que les événements se développent entièrement seuls.":
      "Approfitta delle aperture presenti senza aspettare che gli eventi si sviluppino interamente da soli.",
    "Cette période peut rendre les émotions ou les attentes relationnelles plus sensibles. Des incompréhensions peuvent apparaître lorsque les besoins ne sont pas exprimés clairement.":
      "Questo periodo può rendere più sensibili le emozioni o le aspettative relazionali. Possono emergere incomprensioni quando i bisogni non vengono espressi chiaramente.",
    "Cette période peut apporter des ralentissements, des responsabilités supplémentaires ou des divergences professionnelles. Les résultats demandent davantage de patience et de méthode.":
      "Questo periodo può portare rallentamenti, responsabilità aggiuntive o divergenze professionali. I risultati richiedono maggiore pazienza e metodo.",
    "Cette période demande davantage de prudence dans les dépenses, les engagements et les décisions financières. Certains détails peuvent nécessiter une vérification supplémentaire.":
      "Questo periodo richiede maggiore prudenza nelle spese, negli impegni e nelle decisioni finanziarie. Alcuni dettagli possono richiedere una verifica aggiuntiva.",
    "Les échanges peuvent être plus tendus, imprécis ou facilement mal interprétés. Une réponse trop rapide risque d’aggraver une situation qui pourrait être clarifiée calmement.":
      "Gli scambi possono essere più tesi, imprecisi o facilmente fraintesi. Una risposta troppo rapida rischia di aggravare una situazione che potrebbe essere chiarita con calma.",
    "L’énergie peut devenir irrégulière, excessive ou difficile à canaliser. La précipitation augmente le risque de fatigue, de conflit ou de décision impulsive.":
      "L'energia può diventare irregolare, eccessiva o difficile da canalizzare. La fretta aumenta il rischio di stanchezza, conflitto o decisioni impulsive.",
    "Cette période peut accentuer la fatigue, la sensibilité ou le besoin de recul. Le corps et les émotions demandent davantage d’attention.":
      "Questo periodo può accentuare la stanchezza, la sensibilità o il bisogno di fare un passo indietro. Il corpo e le emozioni richiedono maggiore attenzione.",
    "Plusieurs influences demandent des ajustements durant cette période. Les tensions ne sont pas nécessairement négatives, mais elles signalent ce qui doit être revu ou réorganisé.":
      "Diverse influenze richiedono aggiustamenti durante questo periodo. Le tensioni non sono necessariamente negative, ma indicano ciò che deve essere rivisto o riorganizzato.",
    "Évitez les conclusions rapides et privilégiez une discussion honnête lorsque les émotions sont redescendues.":
      "Evita conclusioni affrettate e privilegia una conversazione sincera quando le emozioni si saranno calmate.",
    "Revérifiez les détails, respectez les étapes nécessaires et ne forcez pas une décision qui manque encore de clarté.":
      "Ricontrolla i dettagli, rispetta le fasi necessarie e non forzare una decisione che manca ancora di chiarezza.",
    "Limitez les décisions impulsives et prenez le temps de comparer les options avant de vous engager.":
      "Limita le decisioni impulsive e prenditi il tempo di confrontare le opzioni prima di impegnarti.",
    "Relisez les messages importants et demandez une clarification plutôt que de présumer des intentions de l’autre personne.":
      "Rileggi i messaggi importanti e chiedi chiarimenti invece di presumere le intenzioni dell'altra persona.",
    "Ralentissez avant d’atteindre l’épuisement et évitez de disperser vos efforts dans trop de directions.":
      "Rallenta prima di arrivare all'esaurimento ed evita di disperdere i tuoi sforzi in troppe direzioni.",
    "Respectez vos limites, réduisez les surcharges inutiles et donnez davantage de place au repos.":
      "Rispetta i tuoi limiti, riduci i sovraccarichi inutili e lascia più spazio al riposo.",
    "Observez ce qui résiste avant d’agir et utilisez cette période pour ajuster votre stratégie.":
      "Osserva ciò che oppone resistenza prima di agire e usa questo periodo per adattare la tua strategia.",
  },
  pt: {
    "Amour et relations":
      "Amor e relacionamentos",
    "Travail et carrière":
      "Trabalho e carreira",
    "Finances":
      "Finanças",
    "Communication":
      "Comunicação",
    "Énergie et action":
      "Energia e ação",
    "Bien-être":
      "Bem-estar",
    "Évolution générale":
      "Evolução geral",
    "Période favorable — ":
      "Período favorável — ",
    "Période délicate — ":
      "Período delicado — ",
    "Cette période favorise les rapprochements, les échanges sincères et une meilleure compréhension des besoins affectifs. Les relations peuvent évoluer plus naturellement lorsque les intentions sont clairement exprimées.":
      "Este período favorece aproximações, trocas sinceras e uma melhor compreensão das necessidades afetivas. Os relacionamentos podem evoluir de forma mais natural quando as intenções são expressas com clareza.",
    "Cette période soutient les initiatives professionnelles, les décisions utiles et les démarches qui permettent de faire avancer un objectif. Les efforts peuvent produire des résultats plus visibles.":
      "Este período apoia iniciativas profissionais, decisões úteis e ações que ajudam a fazer um objetivo avançar. Os esforços podem produzir resultados mais visíveis.",
    "Cette période peut faciliter les décisions financières, les négociations ou la recherche de solutions concrètes. Elle favorise une gestion plus claire des ressources disponibles.":
      "Este período pode facilitar decisões financeiras, negociações ou a busca por soluções concretas. Ele favorece uma gestão mais clara dos recursos disponíveis.",
    "Les échanges, les discussions et les démarches administratives bénéficient d’une énergie plus fluide. Il devient plus facile d’exprimer une idée ou de clarifier une situation.":
      "As trocas, conversas e procedimentos administrativos se beneficiam de uma energia mais fluida. Fica mais fácil expressar uma ideia ou esclarecer uma situação.",
    "L’énergie disponible permet d’agir avec davantage de motivation et de confiance. Cette période convient particulièrement aux initiatives et aux projets qui demandent de l’élan.":
      "A energia disponível permite agir com mais motivação e confiança. Este período é especialmente adequado para iniciativas e projetos que exigem impulso.",
    "Cette période soutient le repos, l’équilibre émotionnel et l’écoute des besoins personnels. Elle peut aider à retrouver un rythme plus harmonieux.":
      "Este período favorece o descanso, o equilíbrio emocional e a atenção às necessidades pessoais. Ele pode ajudar a recuperar um ritmo mais harmonioso.",
    "Plusieurs influences constructives se rejoignent durant cette période. Les événements peuvent progresser plus facilement lorsque les occasions sont accompagnées d’actions concrètes.":
      "Várias influências construtivas se encontram durante este período. Os acontecimentos podem avançar com mais facilidade quando as oportunidades são acompanhadas de ações concretas.",
    "Exprimez clairement vos sentiments et profitez de cette ouverture pour renforcer les liens importants.":
      "Expresse claramente seus sentimentos e aproveite esta abertura para fortalecer vínculos importantes.",
    "Présentez vos idées, avancez vos démarches et concentrez vos efforts sur une priorité professionnelle.":
      "Apresente suas ideias, avance com suas iniciativas e concentre seus esforços em uma prioridade profissional.",
    "Prenez les décisions utiles avec réalisme et vérifiez les détails avant de confirmer un engagement.":
      "Tome decisões úteis com realismo e verifique os detalhes antes de confirmar um compromisso.",
    "Utilisez cette période pour discuter, négocier, écrire ou clarifier ce qui demeurait imprécis.":
      "Use este período para conversar, negociar, escrever ou esclarecer o que permanecia impreciso.",
    "Canalisez votre motivation vers un objectif précis afin de transformer l’élan en résultat concret.":
      "Canalize sua motivação para um objetivo específico a fim de transformar o impulso em um resultado concreto.",
    "Accordez du temps aux habitudes qui restaurent votre énergie physique et émotionnelle.":
      "Dedique tempo aos hábitos que restauram sua energia física e emocional.",
    "Profitez des ouvertures présentes sans attendre que les événements se développent entièrement seuls.":
      "Aproveite as aberturas presentes sem esperar que os acontecimentos se desenvolvam completamente sozinhos.",
    "Cette période peut rendre les émotions ou les attentes relationnelles plus sensibles. Des incompréhensions peuvent apparaître lorsque les besoins ne sont pas exprimés clairement.":
      "Este período pode tornar as emoções ou expectativas nos relacionamentos mais sensíveis. Mal-entendidos podem surgir quando as necessidades não são expressas com clareza.",
    "Cette période peut apporter des ralentissements, des responsabilités supplémentaires ou des divergences professionnelles. Les résultats demandent davantage de patience et de méthode.":
      "Este período pode trazer atrasos, responsabilidades adicionais ou divergências profissionais. Os resultados exigem mais paciência e método.",
    "Cette période demande davantage de prudence dans les dépenses, les engagements et les décisions financières. Certains détails peuvent nécessiter une vérification supplémentaire.":
      "Este período exige mais prudência com gastos, compromissos e decisões financeiras. Alguns detalhes podem precisar de uma verificação adicional.",
    "Les échanges peuvent être plus tendus, imprécis ou facilement mal interprétés. Une réponse trop rapide risque d’aggraver une situation qui pourrait être clarifiée calmement.":
      "As trocas podem ficar mais tensas, imprecisas ou fáceis de interpretar mal. Uma resposta rápida demais pode agravar uma situação que poderia ser esclarecida com calma.",
    "L’énergie peut devenir irrégulière, excessive ou difficile à canaliser. La précipitation augmente le risque de fatigue, de conflit ou de décision impulsive.":
      "A energia pode ficar irregular, excessiva ou difícil de canalizar. A pressa aumenta o risco de cansaço, conflito ou decisões impulsivas.",
    "Cette période peut accentuer la fatigue, la sensibilité ou le besoin de recul. Le corps et les émotions demandent davantage d’attention.":
      "Este período pode acentuar o cansaço, a sensibilidade ou a necessidade de recuo. O corpo e as emoções exigem mais atenção.",
    "Plusieurs influences demandent des ajustements durant cette période. Les tensions ne sont pas nécessairement négatives, mais elles signalent ce qui doit être revu ou réorganisé.":
      "Várias influências exigem ajustes durante este período. As tensões não são necessariamente negativas, mas indicam o que precisa ser revisto ou reorganizado.",
    "Évitez les conclusions rapides et privilégiez une discussion honnête lorsque les émotions sont redescendues.":
      "Evite conclusões precipitadas e prefira uma conversa honesta quando as emoções tiverem se acalmado.",
    "Revérifiez les détails, respectez les étapes nécessaires et ne forcez pas une décision qui manque encore de clarté.":
      "Revise os detalhes, respeite as etapas necessárias e não force uma decisão que ainda não esteja clara.",
    "Limitez les décisions impulsives et prenez le temps de comparer les options avant de vous engager.":
      "Limite decisões impulsivas e reserve tempo para comparar as opções antes de se comprometer.",
    "Relisez les messages importants et demandez une clarification plutôt que de présumer des intentions de l’autre personne.":
      "Releia mensagens importantes e peça esclarecimentos em vez de presumir as intenções da outra pessoa.",
    "Ralentissez avant d’atteindre l’épuisement et évitez de disperser vos efforts dans trop de directions.":
      "Diminua o ritmo antes de chegar à exaustão e evite dispersar seus esforços em muitas direções.",
    "Respectez vos limites, réduisez les surcharges inutiles et donnez davantage de place au repos.":
      "Respeite seus limites, reduza sobrecargas desnecessárias e dê mais espaço ao descanso.",
    "Observez ce qui résiste avant d’agir et utilisez cette période pour ajuster votre stratégie.":
      "Observe o que oferece resistência antes de agir e use este período para ajustar sua estratégia.",
  },
};

/* =========================================================
   REPLACEMENT
========================================================= */

function replaceAll(
  source: string,
  translations: TranslationMap,
): string {
  let output = source;

  const entries =
    Object.entries(
      translations,
    ).sort(
      ([a], [b]) =>
        b.length - a.length,
    );

  for (
    const [from, to]
    of entries
  ) {
    output =
      output
        .split(from)
        .join(to);
  }

  return output;
}

/* =========================================================
   MAIN LOCALIZER
========================================================= */

export function localizeMonthlyPeriodsCalculation(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  if (
    !source.includes(
      "calculateMonthlyPeriods",
    )
  ) {
    return source;
  }

  const translations =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!translations) {
    return source;
  }

  return replaceAll(
    source,
    translations,
  );
}
