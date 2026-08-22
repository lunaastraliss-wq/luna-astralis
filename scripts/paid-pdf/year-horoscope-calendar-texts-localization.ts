import type {
  PaidPdfLocale,
} from "./premium-localization";

/* =========================================================
   TYPES
========================================================= */

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type LocaleTranslations = Record<
  NonFrenchLocale,
  string
>;

type TranslationEntry = {
  from: string;
  to: LocaleTranslations;
};

/* =========================================================
   TRANSLATIONS
========================================================= */

const T = (
  from: string,
  en: string,
  es: string,
  de: string,
  it: string,
  pt: string,
): TranslationEntry => ({
  from,
  to: { en, es, de, it, pt },
});

const CALENDAR_TEXT_TRANSLATIONS: TranslationEntry[] = [
  /* =======================================================
     SIGN PROFILES
  ======================================================= */

  T("votre courage", "your courage", "tu valentía", "Ihr Mut", "il vostro coraggio", "sua coragem"),
  T("votre capacité d’initiative", "your initiative", "tu capacidad de iniciativa", "Ihre Initiative", "la vostra capacità di iniziativa", "sua capacidade de iniciativa"),
  T("votre énergie d’action", "your drive to act", "tu energía de acción", "Ihre Tatkraft", "la vostra energia d’azione", "sua energia de ação"),
  T("votre détermination", "your determination", "tu determinación", "Ihre Entschlossenheit", "la vostra determinazione", "sua determinação"),

  T("l’impatience", "impatience", "la impaciencia", "Ungeduld", "l’impazienza", "a impaciência"),
  T("les décisions précipitées", "hasty decisions", "las decisiones precipitadas", "übereilte Entscheidungen", "le decisioni affrettate", "as decisões precipitadas"),
  T("la dispersion de votre énergie", "scattered energy", "la dispersión de tu energía", "die Zerstreuung Ihrer Energie", "la dispersione della vostra energia", "a dispersão da sua energia"),
  T("les réactions impulsives", "impulsive reactions", "las reacciones impulsivas", "impulsive Reaktionen", "le reazioni impulsive", "as reações impulsivas"),

  T("vos nouveaux projets", "your new projects", "tus nuevos proyectos", "Ihre neuen Projekte", "i vostri nuovi progetti", "seus novos projetos"),
  T("votre affirmation personnelle", "your self-assertion", "tu afirmación personal", "Ihre Selbstbehauptung", "la vostra affermazione personale", "sua afirmação pessoal"),
  T("votre vie professionnelle", "your professional life", "tu vida profesional", "Ihr Berufsleben", "la vostra vita professionale", "sua vida profissional"),
  T("votre autonomie", "your independence", "tu autonomía", "Ihre Selbstständigkeit", "la vostra autonomia", "sua autonomia"),

  T("votre persévérance", "your perseverance", "tu perseverancia", "Ihre Ausdauer", "la vostra perseveranza", "sua perseverança"),
  T("votre sens pratique", "your practical sense", "tu sentido práctico", "Ihr praktischer Sinn", "il vostro senso pratico", "seu senso prático"),
  T("votre stabilité", "your stability", "tu estabilidad", "Ihre Stabilität", "la vostra stabilità", "sua estabilidade"),
  T("votre patience", "your patience", "tu paciencia", "Ihre Geduld", "la vostra pazienza", "sua paciência"),

  T("la résistance au changement", "resistance to change", "la resistencia al cambio", "Widerstand gegen Veränderungen", "la resistenza al cambiamento", "a resistência à mudança"),
  T("les attachements excessifs", "excessive attachments", "los apegos excesivos", "übermäßige Bindungen", "gli attaccamenti eccessivi", "os apegos excessivos"),
  T("la rigidité", "rigidity", "la rigidez", "Starrheit", "la rigidità", "a rigidez"),
  T("la peur de perdre vos repères", "the fear of losing your bearings", "el miedo a perder tus referencias", "die Angst, den Halt zu verlieren", "la paura di perdere i vostri punti di riferimento", "o medo de perder suas referências"),

  T("votre sécurité matérielle", "your material security", "tu seguridad material", "Ihre materielle Sicherheit", "la vostra sicurezza materiale", "sua segurança material"),
  T("vos finances", "your finances", "tus finanzas", "Ihre Finanzen", "le vostre finanze", "suas finanças"),
  T("votre vie affective", "your emotional life", "tu vida afectiva", "Ihr Gefühlsleben", "la vostra vita affettiva", "sua vida afetiva"),
  T("la consolidation de vos projets", "the consolidation of your projects", "la consolidación de tus proyectos", "die Festigung Ihrer Projekte", "il consolidamento dei vostri progetti", "a consolidação dos seus projetos"),

  T("votre adaptabilité", "your adaptability", "tu capacidad de adaptación", "Ihre Anpassungsfähigkeit", "la vostra adattabilità", "sua adaptabilidade"),
  T("votre curiosité", "your curiosity", "tu curiosidad", "Ihre Neugier", "la vostra curiosità", "sua curiosidade"),
  T("votre intelligence relationnelle", "your interpersonal intelligence", "tu inteligencia relacional", "Ihre soziale Intelligenz", "la vostra intelligenza relazionale", "sua inteligência relacional"),
  T("votre capacité à communiquer", "your ability to communicate", "tu capacidad para comunicarte", "Ihre Kommunikationsfähigkeit", "la vostra capacità di comunicare", "sua capacidade de se comunicar"),

  T("la dispersion", "scattered focus", "la dispersión", "Zerstreuung", "la dispersione", "a dispersão"),
  T("l’indécision", "indecision", "la indecisión", "Unentschlossenheit", "l’indecisione", "a indecisão"),
  T("la nervosité", "nervousness", "el nerviosismo", "Nervosität", "il nervosismo", "o nervosismo"),
  T("le manque de continuité", "lack of consistency", "la falta de continuidad", "mangelnde Beständigkeit", "la mancanza di continuità", "a falta de continuidade"),

  T("vos communications", "your communications", "tus comunicaciones", "Ihre Kommunikation", "le vostre comunicazioni", "suas comunicações"),
  T("vos apprentissages", "your learning", "tus aprendizajes", "Ihre Lernprozesse", "i vostri apprendimenti", "seus aprendizados"),
  T("vos relations sociales", "your social relationships", "tus relaciones sociales", "Ihre sozialen Beziehungen", "le vostre relazioni sociali", "seus relacionamentos sociais"),

  T("votre intuition", "your intuition", "tu intuición", "Ihre Intuition", "la vostra intuizione", "sua intuição"),
  T("votre sensibilité", "your sensitivity", "tu sensibilidad", "Ihre Sensibilität", "la vostra sensibilità", "sua sensibilidade"),
  T("votre loyauté", "your loyalty", "tu lealtad", "Ihre Loyalität", "la vostra lealtà", "sua lealdade"),
  T("votre capacité à protéger", "your protective nature", "tu capacidad de proteger", "Ihre Fähigkeit zu schützen", "la vostra capacità di proteggere", "sua capacidade de proteger"),

  T("l’hypersensibilité", "hypersensitivity", "la hipersensibilidad", "Hypersensibilität", "l’ipersensibilità", "a hipersensibilidade"),
  T("le repli émotionnel", "emotional withdrawal", "el retraimiento emocional", "emotionalen Rückzug", "il ritiro emotivo", "o retraimento emocional"),
  T("la nostalgie", "nostalgia", "la nostalgia", "Nostalgie", "la nostalgia", "a nostalgia"),
  T("la difficulté à lâcher prise", "difficulty letting go", "la dificultad para soltar", "Schwierigkeiten beim Loslassen", "la difficoltà a lasciar andare", "a dificuldade de deixar ir"),

  T("votre foyer", "your home", "tu hogar", "Ihr Zuhause", "la vostra casa", "seu lar"),
  T("votre sécurité émotionnelle", "your emotional security", "tu seguridad emocional", "Ihre emotionale Sicherheit", "la vostra sicurezza emotiva", "sua segurança emocional"),
  T("vos relations familiales", "your family relationships", "tus relaciones familiares", "Ihre familiären Beziehungen", "le vostre relazioni familiari", "seus relacionamentos familiares"),
  T("votre équilibre intérieur", "your inner balance", "tu equilibrio interior", "Ihr inneres Gleichgewicht", "il vostro equilibrio interiore", "seu equilíbrio interior"),

  T("votre créativité", "your creativity", "tu creatividad", "Ihre Kreativität", "la vostra creatività", "sua criatividade"),
  T("votre charisme", "your charisma", "tu carisma", "Ihr Charisma", "il vostro carisma", "seu carisma"),
  T("votre confiance", "your confidence", "tu confianza", "Ihr Selbstvertrauen", "la vostra fiducia", "sua confiança"),
  T("votre générosité", "your generosity", "tu generosidad", "Ihre Großzügigkeit", "la vostra generosità", "sua generosidade"),

  T("le besoin de reconnaissance", "the need for recognition", "la necesidad de reconocimiento", "das Bedürfnis nach Anerkennung", "il bisogno di riconoscimento", "a necessidade de reconhecimento"),
  T("l’orgueil", "pride", "el orgullo", "Stolz", "l’orgoglio", "o orgulho"),
  T("la dramatisation", "dramatization", "la dramatización", "Dramatisierung", "la drammatizzazione", "a dramatização"),
  T("l’entêtement", "stubbornness", "la terquedad", "Sturheit", "l’ostinazione", "a teimosia"),

  T("votre expression personnelle", "your self-expression", "tu expresión personal", "Ihr persönlicher Ausdruck", "la vostra espressione personale", "sua expressão pessoal"),
  T("vos projets créatifs", "your creative projects", "tus proyectos creativos", "Ihre kreativen Projekte", "i vostri progetti creativi", "seus projetos criativos"),
  T("votre carrière", "your career", "tu carrera", "Ihre Karriere", "la vostra carriera", "sua carreira"),
  T("votre rayonnement", "your visibility", "tu proyección", "Ihre Ausstrahlung", "la vostra visibilità", "sua projeção"),

  T("votre sens de l’organisation", "your organizational skills", "tu sentido de la organización", "Ihr Organisationstalent", "il vostro senso dell’organizzazione", "seu senso de organização"),
  T("votre capacité d’analyse", "your analytical ability", "tu capacidad de análisis", "Ihre Analysefähigkeit", "la vostra capacità di analisi", "sua capacidade de análise"),
  T("votre fiabilité", "your reliability", "tu fiabilidad", "Ihre Zuverlässigkeit", "la vostra affidabilità", "sua confiabilidade"),
  T("votre discipline", "your discipline", "tu disciplina", "Ihre Disziplin", "la vostra disciplina", "sua disciplina"),

  T("le perfectionnisme", "perfectionism", "el perfeccionismo", "Perfektionismus", "il perfezionismo", "o perfeccionismo"),
  T("l’autocritique", "self-criticism", "la autocrítica", "Selbstkritik", "l’autocritica", "a autocrítica"),
  T("l’inquiétude", "worry", "la preocupación", "Sorge", "la preoccupazione", "a preocupação"),
  T("le besoin de tout contrôler", "the need to control everything", "la necesidad de controlarlo todo", "das Bedürfnis, alles zu kontrollieren", "il bisogno di controllare tutto", "a necessidade de controlar tudo"),

  T("votre organisation quotidienne", "your daily organization", "tu organización cotidiana", "Ihre tägliche Organisation", "la vostra organizzazione quotidiana", "sua organização diária"),
  T("votre travail", "your work", "tu trabajo", "Ihre Arbeit", "il vostro lavoro", "seu trabalho"),
  T("votre bien-être", "your well-being", "tu bienestar", "Ihr Wohlbefinden", "il vostro benessere", "seu bem-estar"),
  T("l’amélioration de vos projets", "the improvement of your projects", "la mejora de tus proyectos", "die Verbesserung Ihrer Projekte", "il miglioramento dei vostri progetti", "a melhoria dos seus projetos"),

  T("votre diplomatie", "your diplomacy", "tu diplomacia", "Ihre Diplomatie", "la vostra diplomazia", "sua diplomacia"),
  T("votre sens de l’équilibre", "your sense of balance", "tu sentido del equilibrio", "Ihr Sinn für Ausgleich", "il vostro senso dell’equilibrio", "seu senso de equilíbrio"),
  T("votre capacité d’écoute", "your listening skills", "tu capacidad de escucha", "Ihre Fähigkeit zuzuhören", "la vostra capacità di ascolto", "sua capacidade de ouvir"),
  T("votre élégance relationnelle", "your relational grace", "tu elegancia en las relaciones", "Ihre zwischenmenschliche Eleganz", "la vostra eleganza relazionale", "sua elegância nos relacionamentos"),

  T("l’évitement des conflits", "conflict avoidance", "la evitación de los conflictos", "Konfliktvermeidung", "l’evitamento dei conflitti", "a evitação de conflitos"),
  T("les compromis excessifs", "excessive compromises", "los compromisos excesivos", "übermäßige Kompromisse", "i compromessi eccessivi", "os compromissos excessivos"),
  T("la dépendance au regard des autres", "dependence on others’ approval", "la dependencia de la mirada de los demás", "die Abhängigkeit von der Meinung anderer", "la dipendenza dal giudizio degli altri", "a dependência da opinião dos outros"),

  T("vos relations", "your relationships", "tus relaciones", "Ihre Beziehungen", "le vostre relazioni", "seus relacionamentos"),
  T("vos engagements", "your commitments", "tus compromisos", "Ihre Verpflichtungen", "i vostri impegni", "seus compromissos"),
  T("votre équilibre personnel", "your personal balance", "tu equilibrio personal", "Ihr persönliches Gleichgewicht", "il vostro equilibrio personale", "seu equilíbrio pessoal"),
  T("vos collaborations", "your collaborations", "tus colaboraciones", "Ihre Kooperationen", "le vostre collaborazioni", "suas colaborações"),

  T("votre profondeur", "your depth", "tu profundidad", "Ihre Tiefe", "la vostra profondità", "sua profundidade"),
  T("votre résilience", "your resilience", "tu resiliencia", "Ihre Widerstandskraft", "la vostra resilienza", "sua resiliência"),

  T("le besoin de contrôle", "the need for control", "la necesidad de control", "das Kontrollbedürfnis", "il bisogno di controllo", "a necessidade de controle"),
  T("la méfiance", "mistrust", "la desconfianza", "Misstrauen", "la diffidenza", "a desconfiança"),
  T("les réactions radicales", "extreme reactions", "las reacciones radicales", "radikale Reaktionen", "le reazioni radicali", "as reações radicais"),
  T("les attachements émotionnels intenses", "intense emotional attachments", "los apegos emocionales intensos", "intensive emotionale Bindungen", "gli attaccamenti emotivi intensi", "os apegos emocionais intensos"),

  T("votre transformation personnelle", "your personal transformation", "tu transformación personal", "Ihre persönliche Transformation", "la vostra trasformazione personale", "sua transformação pessoal"),
  T("vos relations profondes", "your deep relationships", "tus relaciones profundas", "Ihre tiefen Beziehungen", "le vostre relazioni profonde", "seus relacionamentos profundos"),
  T("votre pouvoir intérieur", "your inner power", "tu poder interior", "Ihre innere Kraft", "il vostro potere interiore", "seu poder interior"),
  T("vos projets à long terme", "your long-term projects", "tus proyectos a largo plazo", "Ihre langfristigen Projekte", "i vostri progetti a lungo termine", "seus projetos de longo prazo"),

  T("votre optimisme", "your optimism", "tu optimismo", "Ihr Optimismus", "il vostro ottimismo", "seu otimismo"),
  T("votre vision", "your vision", "tu visión", "Ihre Vision", "la vostra visione", "sua visão"),
  T("votre enthousiasme", "your enthusiasm", "tu entusiasmo", "Ihre Begeisterung", "il vostro entusiasmo", "seu entusiasmo"),
  T("votre ouverture d’esprit", "your open-mindedness", "tu apertura mental", "Ihre Offenheit", "la vostra apertura mentale", "sua mente aberta"),

  T("les excès", "excess", "los excesos", "Übertreibungen", "gli eccessi", "os excessos"),
  T("l’imprudence", "recklessness", "la imprudencia", "Unvorsichtigkeit", "l’imprudenza", "a imprudência"),
  T("le manque de constance", "lack of consistency", "la falta de constancia", "mangelnde Beständigkeit", "la mancanza di costanza", "a falta de constância"),

  T("votre expansion", "your expansion", "tu expansión", "Ihre Expansion", "la vostra espansione", "sua expansão"),
  T("vos voyages", "your travels", "tus viajes", "Ihre Reisen", "i vostri viaggi", "suas viagens"),
  T("vos projets d’avenir", "your future projects", "tus proyectos de futuro", "Ihre Zukunftsprojekte", "i vostri progetti futuri", "seus projetos futuros"),

  T("votre endurance", "your endurance", "tu resistencia", "Ihre Ausdauer", "la vostra resistenza", "sua resistência"),
  T("votre sens stratégique", "your strategic sense", "tu sentido estratégico", "Ihr strategisches Gespür", "il vostro senso strategico", "seu senso estratégico"),
  T("votre maturité", "your maturity", "tu madurez", "Ihre Reife", "la vostra maturità", "sua maturidade"),

  T("le surmenage", "overwork", "el exceso de trabajo", "Überarbeitung", "il sovraccarico", "a sobrecarga"),
  T("le pessimisme", "pessimism", "el pesimismo", "Pessimismus", "il pessimismo", "o pessimismo"),
  T("la difficulté à ralentir", "difficulty slowing down", "la dificultad para reducir el ritmo", "Schwierigkeiten, langsamer zu werden", "la difficoltà a rallentare", "a dificuldade de desacelerar"),

  T("vos responsabilités", "your responsibilities", "tus responsabilidades", "Ihre Verantwortlichkeiten", "le vostre responsabilità", "suas responsabilidades"),
  T("vos objectifs à long terme", "your long-term goals", "tus objetivos a largo plazo", "Ihre langfristigen Ziele", "i vostri obiettivi a lungo termine", "seus objetivos de longo prazo"),

  T("votre originalité", "your originality", "tu originalidad", "Ihre Originalität", "la vostra originalità", "sua originalidade"),
  T("votre indépendance", "your independence", "tu independencia", "Ihre Unabhängigkeit", "la vostra indipendenza", "sua independência"),
  T("votre inventivité", "your inventiveness", "tu inventiva", "Ihr Einfallsreichtum", "la vostra inventiva", "sua inventividade"),

  T("le détachement", "detachment", "el desapego", "Distanz", "il distacco", "o desapego"),
  T("l’imprévisibilité", "unpredictability", "la imprevisibilidad", "Unberechenbarkeit", "l’imprevedibilità", "a imprevisibilidade"),
  T("les ruptures brusques", "sudden breaks", "las rupturas bruscas", "plötzliche Brüche", "le rotture improvvise", "as rupturas bruscas"),

  T("vos projets innovants", "your innovative projects", "tus proyectos innovadores", "Ihre innovativen Projekte", "i vostri progetti innovativi", "seus projetos inovadores"),
  T("votre liberté", "your freedom", "tu libertad", "Ihre Freiheit", "la vostra libertà", "sua liberdade"),
  T("votre vision de l’avenir", "your vision of the future", "tu visión del futuro", "Ihre Zukunftsvision", "la vostra visione del futuro", "sua visão de futuro"),

  T("votre imagination", "your imagination", "tu imaginación", "Ihre Vorstellungskraft", "la vostra immaginazione", "sua imaginação"),
  T("votre compassion", "your compassion", "tu compasión", "Ihr Mitgefühl", "la vostra compassione", "sua compaixão"),

  T("la confusion", "confusion", "la confusión", "Verwirrung", "la confusione", "a confusão"),
  T("l’idéalisme excessif", "excessive idealism", "el idealismo excesivo", "übermäßiger Idealismus", "l’idealismo eccessivo", "o idealismo excessivo"),
  T("la fuite", "escapism", "la evasión", "Flucht", "la fuga", "a fuga"),
  T("les limites émotionnelles fragiles", "fragile emotional boundaries", "los límites emocionales frágiles", "fragile emotionale Grenzen", "i confini emotivi fragili", "os limites emocionais frágeis"),

  T("votre monde intérieur", "your inner world", "tu mundo interior", "Ihre innere Welt", "il vostro mondo interiore", "seu mundo interior"),
  T("votre évolution spirituelle", "your spiritual growth", "tu evolución espiritual", "Ihre spirituelle Entwicklung", "la vostra evoluzione spirituale", "sua evolução espiritual"),

  /* =======================================================
     INTRODUCTION
  ======================================================= */

  T(
    "Votre calendrier astrologique présente les douze grandes étapes de votre année. Chaque mois possède son propre rythme, ses occasions d’évolution et ses points de vigilance.",
    "Your astrological calendar presents the twelve major stages of your year. Each month has its own rhythm, opportunities for growth, and points that require attention.",
    "Tu calendario astrológico presenta las doce grandes etapas de tu año. Cada mes tiene su propio ritmo, sus oportunidades de evolución y sus puntos de atención.",
    "Ihr astrologischer Kalender zeigt die zwölf wichtigsten Etappen Ihres Jahres. Jeder Monat besitzt seinen eigenen Rhythmus, Entwicklungsmöglichkeiten und Punkte, die besondere Aufmerksamkeit erfordern.",
    "Il vostro calendario astrologico presenta le dodici grandi tappe dell’anno. Ogni mese possiede il proprio ritmo, le proprie opportunità di crescita e i propri punti di attenzione.",
    "Seu calendário astrológico apresenta as doze grandes etapas do seu ano. Cada mês possui seu próprio ritmo, suas oportunidades de evolução e seus pontos de atenção.",
  ),

  T(
    "Les douze mois à venir formeront un parcours progressif. Certaines périodes favoriseront l’action, tandis que d’autres vous inviteront à ralentir, à observer et à ajuster vos choix.",
    "The twelve months ahead will form a progressive journey. Some periods will favor action, while others will invite you to slow down, observe, and adjust your choices.",
    "Los próximos doce meses formarán un recorrido progresivo. Algunos períodos favorecerán la acción, mientras que otros te invitarán a reducir el ritmo, observar y ajustar tus decisiones.",
    "Die kommenden zwölf Monate bilden einen fortschreitenden Weg. Einige Phasen begünstigen das Handeln, während andere Sie dazu einladen, langsamer zu werden, zu beobachten und Ihre Entscheidungen anzupassen.",
    "I prossimi dodici mesi formeranno un percorso progressivo. Alcuni periodi favoriranno l’azione, mentre altri vi inviteranno a rallentare, osservare e adattare le vostre scelte.",
    "Os próximos doze meses formarão uma trajetória progressiva. Alguns períodos favorecerão a ação, enquanto outros convidarão você a desacelerar, observar e ajustar suas escolhas.",
  ),

  T(
    "Ce calendrier vous permet de visualiser les principaux mouvements de votre année et de mieux comprendre les moments propices à l’action, à la réflexion ou à la consolidation.",
    "This calendar helps you visualize the main movements of your year and better understand the periods suited to action, reflection, or consolidation.",
    "Este calendario te permite visualizar los principales movimientos de tu año y comprender mejor los momentos favorables para la acción, la reflexión o la consolidación.",
    "Dieser Kalender hilft Ihnen, die wichtigsten Bewegungen Ihres Jahres zu erkennen und die geeigneten Zeiten für Handeln, Nachdenken oder Festigung besser zu verstehen.",
    "Questo calendario vi permette di visualizzare i principali movimenti dell’anno e di comprendere meglio i momenti favorevoli all’azione, alla riflessione o al consolidamento.",
    "Este calendário permite visualizar os principais movimentos do seu ano e compreender melhor os momentos favoráveis à ação, à reflexão ou à consolidação.",
  ),

  T(
    "Votre année ne suivra pas une progression parfaitement linéaire. Les périodes d’expansion alterneront avec des phases de recentrage nécessaires à votre évolution.",
    "Your year will not follow a perfectly linear progression. Periods of expansion will alternate with phases of recentering that are necessary for your growth.",
    "Tu año no seguirá una progresión perfectamente lineal. Los períodos de expansión alternarán con fases de recentramiento necesarias para tu evolución.",
    "Ihr Jahr wird nicht vollkommen linear verlaufen. Phasen der Expansion werden sich mit Zeiten der Neuausrichtung abwechseln, die für Ihre Entwicklung notwendig sind.",
    "Il vostro anno non seguirà un percorso perfettamente lineare. I periodi di espansione si alterneranno a fasi di ricentramento necessarie alla vostra evoluzione.",
    "Seu ano não seguirá uma progressão perfeitamente linear. Períodos de expansão se alternarão com fases de recentramento necessárias à sua evolução.",
  ),

  T(
    "Chaque mois apportera une nuance différente à votre parcours. En respectant le rythme de chaque période, vous pourrez utiliser plus consciemment les possibilités offertes par l’année.",
    "Each month will bring a different nuance to your journey. By respecting the rhythm of each period, you will be able to use the year's opportunities more consciously.",
    "Cada mes aportará un matiz diferente a tu recorrido. Al respetar el ritmo de cada período, podrás aprovechar de manera más consciente las posibilidades que ofrece el año.",
    "Jeder Monat bringt eine andere Nuance in Ihren Weg. Wenn Sie den Rhythmus jeder Phase respektieren, können Sie die Möglichkeiten des Jahres bewusster nutzen.",
    "Ogni mese porterà una sfumatura diversa al vostro percorso. Rispettando il ritmo di ogni periodo, potrete utilizzare più consapevolmente le possibilità offerte dall’anno.",
    "Cada mês trará uma nuance diferente ao seu percurso. Ao respeitar o ritmo de cada período, você poderá aproveitar de forma mais consciente as possibilidades oferecidas pelo ano.",
  ),

  /* =======================================================
     THEMES
  ======================================================= */

  T("Nouveaux départs", "New beginnings", "Nuevos comienzos", "Neue Anfänge", "Nuovi inizi", "Novos começos"),
  T("Progression professionnelle", "Professional progress", "Progreso profesional", "Berufliche Entwicklung", "Progresso professionale", "Progresso profissional"),
  T("Relations et rapprochements", "Relationships and closer connections", "Relaciones y acercamientos", "Beziehungen und Annäherungen", "Relazioni e avvicinamenti", "Relacionamentos e aproximações"),
  T("Consolidation financière", "Financial consolidation", "Consolidación financiera", "Finanzielle Stabilisierung", "Consolidamento finanziario", "Consolidação financeira"),
  T("Transformation intérieure", "Inner transformation", "Transformación interior", "Innere Transformation", "Trasformazione interiore", "Transformação interior"),
  T("Créativité et expression", "Creativity and expression", "Creatividad y expresión", "Kreativität und Ausdruck", "Creatività ed espressione", "Criatividade e expressão"),
  T("Organisation et équilibre", "Organization and balance", "Organización y equilibrio", "Organisation und Gleichgewicht", "Organizzazione ed equilibrio", "Organização e equilíbrio"),
  T("Ouverture et expansion", "Openness and expansion", "Apertura y expansión", "Öffnung und Expansion", "Apertura ed espansione", "Abertura e expansão"),
  T("Décisions importantes", "Important decisions", "Decisiones importantes", "Wichtige Entscheidungen", "Decisioni importanti", "Decisões importantes"),
  T("Ralentissement nécessaire", "Necessary slowdown", "Desaceleración necesaria", "Notwendige Verlangsamung", "Rallentamento necessario", "Desaceleração necessária"),
  T("Récolte et reconnaissance", "Rewards and recognition", "Resultados y reconocimiento", "Ernte und Anerkennung", "Risultati e riconoscimento", "Resultados e reconhecimento"),
  T("Clôture et préparation", "Closure and preparation", "Cierre y preparación", "Abschluss und Vorbereitung", "Chiusura e preparazione", "Encerramento e preparação"),

  /* =======================================================
     DYNAMIC THEMES — 1 TO 4
  ======================================================= */

  T(
    "Une dynamique de renouveau stimule ${priorityOne}. Cette période favorise les décisions capables de donner une nouvelle direction à votre année.",
    "A sense of renewal stimulates ${priorityOne}. This period favors decisions capable of giving your year a new direction.",
    "Una dinámica de renovación estimula ${priorityOne}. Este período favorece las decisiones capaces de dar una nueva dirección a tu año.",
    "Eine Dynamik des Neubeginns belebt ${priorityOne}. Diese Phase begünstigt Entscheidungen, die Ihrem Jahr eine neue Richtung geben können.",
    "Una dinamica di rinnovamento stimola ${priorityOne}. Questo periodo favorisce decisioni capaci di dare una nuova direzione al vostro anno.",
    "Uma dinâmica de renovação estimula ${priorityOne}. Este período favorece decisões capazes de dar uma nova direção ao seu ano.",
  ),

  T(
    "Le mois ouvre une porte vers de nouvelles possibilités concernant ${priorityOne}. Votre capacité à prendre une initiative mesurée pourra faire évoluer rapidement la situation.",
    "The month opens a door to new possibilities concerning ${priorityOne}. Your ability to take measured initiative could quickly move the situation forward.",
    "El mes abre una puerta a nuevas posibilidades relacionadas con ${priorityOne}. Tu capacidad para tomar una iniciativa mesurada podrá hacer evolucionar rápidamente la situación.",
    "Der Monat öffnet eine Tür zu neuen Möglichkeiten im Zusammenhang mit ${priorityOne}. Ihre Fähigkeit, besonnen die Initiative zu ergreifen, kann die Situation rasch voranbringen.",
    "Il mese apre una porta verso nuove possibilità riguardo a ${priorityOne}. La vostra capacità di prendere un’iniziativa misurata potrà far evolvere rapidamente la situazione.",
    "O mês abre uma porta para novas possibilidades relacionadas a ${priorityOne}. Sua capacidade de tomar uma iniciativa ponderada poderá fazer a situação evoluir rapidamente.",
  ),

  T(
    "Une nouvelle étape se dessine autour de ${priorityOne}. Les choix posés maintenant pourront influencer plusieurs mois de votre parcours.",
    "A new stage is taking shape around ${priorityOne}. The choices you make now may influence several months of your journey.",
    "Una nueva etapa se perfila alrededor de ${priorityOne}. Las decisiones que tomes ahora podrán influir en varios meses de tu recorrido.",
    "Rund um ${priorityOne} zeichnet sich eine neue Etappe ab. Die Entscheidungen, die Sie jetzt treffen, können mehrere Monate Ihres Weges beeinflussen.",
    "Una nuova fase si delinea attorno a ${priorityOne}. Le scelte fatte ora potranno influenzare diversi mesi del vostro percorso.",
    "Uma nova etapa se desenha em torno de ${priorityOne}. As escolhas feitas agora poderão influenciar vários meses do seu percurso.",
  ),

  T(
    "Appuyez-vous sur ${strengthOne}, mais évitez ${challengeOne}.",
    "Rely on ${strengthOne}, but avoid ${challengeOne}.",
    "Apóyate en ${strengthOne}, pero evita ${challengeOne}.",
    "Stützen Sie sich auf ${strengthOne}, vermeiden Sie jedoch ${challengeOne}.",
    "Fate affidamento su ${strengthOne}, ma evitate ${challengeOne}.",
    "Apoie-se em ${strengthOne}, mas evite ${challengeOne}.",
  ),

  T(
    "Le climat du mois soutient l’évolution de ${priorityTwo}. Une occasion de démontrer vos compétences ou de consolider votre position pourrait apparaître.",
    "The month's climate supports the development of ${priorityTwo}. An opportunity to demonstrate your skills or consolidate your position could appear.",
    "El clima del mes favorece la evolución de ${priorityTwo}. Podría surgir una oportunidad para demostrar tus competencias o consolidar tu posición.",
    "Die Stimmung des Monats unterstützt die Entwicklung von ${priorityTwo}. Eine Gelegenheit, Ihre Fähigkeiten zu zeigen oder Ihre Position zu festigen, könnte sich ergeben.",
    "Il clima del mese sostiene l’evoluzione di ${priorityTwo}. Potrebbe presentarsi un’occasione per dimostrare le vostre competenze o consolidare la vostra posizione.",
    "O clima do mês favorece a evolução de ${priorityTwo}. Poderá surgir uma oportunidade de demonstrar suas competências ou consolidar sua posição.",
  ),

  T(
    "Votre progression dépendra de votre capacité à utiliser ${strengthTwo} avec constance. Les résultats les plus importants viendront d’une stratégie bien structurée.",
    "Your progress will depend on your ability to use ${strengthTwo} consistently. The most important results will come from a well-structured strategy.",
    "Tu progreso dependerá de tu capacidad para utilizar ${strengthTwo} con constancia. Los resultados más importantes vendrán de una estrategia bien estructurada.",
    "Ihr Fortschritt hängt davon ab, wie beständig Sie ${strengthTwo} einsetzen. Die wichtigsten Ergebnisse werden aus einer gut strukturierten Strategie hervorgehen.",
    "I vostri progressi dipenderanno dalla capacità di utilizzare ${strengthTwo} con costanza. I risultati più importanti nasceranno da una strategia ben strutturata.",
    "Seu progresso dependerá da sua capacidade de usar ${strengthTwo} com constância. Os resultados mais importantes virão de uma estratégia bem estruturada.",
  ),

  T(
    "Une décision professionnelle ou matérielle pourrait modifier vos objectifs. Cette période vous invite à agir avec ambition sans négliger les détails.",
    "A professional or material decision could change your goals. This period invites you to act with ambition without neglecting the details.",
    "Una decisión profesional o material podría modificar tus objetivos. Este período te invita a actuar con ambición sin descuidar los detalles.",
    "Eine berufliche oder materielle Entscheidung könnte Ihre Ziele verändern. Diese Phase lädt Sie ein, ehrgeizig zu handeln, ohne die Details zu vernachlässigen.",
    "Una decisione professionale o materiale potrebbe modificare i vostri obiettivi. Questo periodo vi invita ad agire con ambizione senza trascurare i dettagli.",
    "Uma decisão profissional ou material poderá modificar seus objetivos. Este período convida você a agir com ambição sem negligenciar os detalhes.",
  ),

  T(
    "Utilisez ${strengthTwo} pour avancer, tout en surveillant ${challengeTwo}.",
    "Use ${strengthTwo} to move forward while keeping an eye on ${challengeTwo}.",
    "Utiliza ${strengthTwo} para avanzar, vigilando al mismo tiempo ${challengeTwo}.",
    "Nutzen Sie ${strengthTwo}, um voranzukommen, und behalten Sie dabei ${challengeTwo} im Blick.",
    "Utilizzate ${strengthTwo} per avanzare, tenendo sotto controllo ${challengeTwo}.",
    "Use ${strengthTwo} para avançar, mantendo atenção a ${challengeTwo}.",
  ),

  T(
    "Les relations prennent davantage de place durant cette période. Les échanges concernant ${priorityThree} pourront devenir plus profonds et plus révélateurs.",
    "Relationships take on greater importance during this period. Exchanges concerning ${priorityThree} may become deeper and more revealing.",
    "Las relaciones adquieren mayor importancia durante este período. Los intercambios relacionados con ${priorityThree} podrán volverse más profundos y reveladores.",
    "Beziehungen gewinnen in dieser Phase an Bedeutung. Gespräche über ${priorityThree} können tiefer und aufschlussreicher werden.",
    "Le relazioni assumono maggiore importanza durante questo periodo. Gli scambi riguardanti ${priorityThree} potranno diventare più profondi e rivelatori.",
    "Os relacionamentos ganham mais importância durante este período. As trocas relacionadas a ${priorityThree} poderão se tornar mais profundas e reveladoras.",
  ),

  T(
    "Le mois favorise une meilleure compréhension de vos besoins affectifs. Certaines conversations permettront de clarifier une relation ou un engagement.",
    "The month favors a better understanding of your emotional needs. Some conversations will help clarify a relationship or commitment.",
    "El mes favorece una mejor comprensión de tus necesidades afectivas. Algunas conversaciones permitirán aclarar una relación o un compromiso.",
    "Der Monat fördert ein besseres Verständnis Ihrer emotionalen Bedürfnisse. Einige Gespräche können eine Beziehung oder Verpflichtung klären.",
    "Il mese favorisce una migliore comprensione dei vostri bisogni affettivi. Alcune conversazioni permetteranno di chiarire una relazione o un impegno.",
    "O mês favorece uma melhor compreensão de suas necessidades afetivas. Algumas conversas permitirão esclarecer um relacionamento ou compromisso.",
  ),

  T(
    "Une ouverture relationnelle peut créer de nouvelles possibilités. Votre sincérité sera essentielle pour établir des liens plus équilibrés.",
    "Greater openness in relationships can create new possibilities. Your sincerity will be essential for building more balanced connections.",
    "Una apertura relacional puede crear nuevas posibilidades. Tu sinceridad será esencial para establecer vínculos más equilibrados.",
    "Mehr Offenheit in Beziehungen kann neue Möglichkeiten schaffen. Ihre Aufrichtigkeit ist entscheidend, um ausgewogenere Verbindungen aufzubauen.",
    "Una maggiore apertura nelle relazioni può creare nuove possibilità. La vostra sincerità sarà essenziale per costruire legami più equilibrati.",
    "Uma maior abertura nos relacionamentos pode criar novas possibilidades. Sua sinceridade será essencial para estabelecer vínculos mais equilibrados.",
  ),

  T(
    "Laissez ${strengthThree} guider vos échanges sans céder à ${challengeThree}.",
    "Let ${strengthThree} guide your exchanges without giving in to ${challengeThree}.",
    "Deja que ${strengthThree} guíe tus intercambios sin ceder a ${challengeThree}.",
    "Lassen Sie ${strengthThree} Ihre Gespräche leiten, ohne ${challengeThree} nachzugeben.",
    "Lasciate che ${strengthThree} guidi i vostri scambi senza cedere a ${challengeThree}.",
    "Deixe ${strengthThree} orientar suas trocas sem ceder a ${challengeThree}.",
  ),

  T(
    "La période vous invite à renforcer votre stabilité et à examiner plus attentivement les décisions liées à ${priorityFour}.",
    "This period invites you to strengthen your stability and examine decisions related to ${priorityFour} more carefully.",
    "Este período te invita a reforzar tu estabilidad y examinar con más atención las decisiones relacionadas con ${priorityFour}.",
    "Diese Phase lädt Sie dazu ein, Ihre Stabilität zu stärken und Entscheidungen im Zusammenhang mit ${priorityFour} genauer zu prüfen.",
    "Questo periodo vi invita a rafforzare la vostra stabilità e a esaminare più attentamente le decisioni legate a ${priorityFour}.",
    "Este período convida você a fortalecer sua estabilidade e examinar com mais atenção as decisões relacionadas a ${priorityFour}.",
  ),

  T(
    "Les questions matérielles demandent une approche méthodique. Une meilleure organisation pourra vous permettre de sécuriser vos acquis.",
    "Material matters require a methodical approach. Better organization may help you secure what you have already achieved.",
    "Las cuestiones materiales requieren un enfoque metódico. Una mejor organización podrá ayudarte a proteger lo que ya has conseguido.",
    "Materielle Fragen erfordern ein methodisches Vorgehen. Eine bessere Organisation kann Ihnen helfen, das Erreichte zu sichern.",
    "Le questioni materiali richiedono un approccio metodico. Una migliore organizzazione potrà aiutarvi a proteggere ciò che avete già acquisito.",
    "As questões materiais exigem uma abordagem metódica. Uma melhor organização poderá ajudar você a proteger o que já conquistou.",
  ),

  T(
    "Ce mois favorise la consolidation plutôt que les prises de risque. Les décisions prudentes pourront produire des effets durables.",
    "This month favors consolidation rather than risk-taking. Careful decisions may produce lasting effects.",
    "Este mes favorece la consolidación más que la toma de riesgos. Las decisiones prudentes podrán producir efectos duraderos.",
    "Dieser Monat begünstigt Festigung statt Risikobereitschaft. Umsichtige Entscheidungen können nachhaltige Wirkungen haben.",
    "Questo mese favorisce il consolidamento più che l’assunzione di rischi. Le decisioni prudenti potranno produrre effetti duraturi.",
    "Este mês favorece a consolidação em vez da tomada de riscos. Decisões prudentes poderão produzir efeitos duradouros.",
  ),

  T(
    "Faites confiance à ${strengthFour}, mais restez attentif à ${challengeFour}.",
    "Trust ${strengthFour}, but remain attentive to ${challengeFour}.",
    "Confía en ${strengthFour}, pero mantente atento a ${challengeFour}.",
    "Vertrauen Sie auf ${strengthFour}, bleiben Sie jedoch aufmerksam gegenüber ${challengeFour}.",
    "Fidatevi di ${strengthFour}, ma restate attenti a ${challengeFour}.",
    "Confie em ${strengthFour}, mas permaneça atento a ${challengeFour}.",
  ),

  /* =======================================================
     STATIC ADVICE — THEMES 1 TO 4
  ======================================================= */

  T(
    "Commencez par une action claire plutôt que de vouloir transformer toute la situation immédiatement.",
    "Start with one clear action rather than trying to transform the entire situation immediately.",
    "Empieza con una acción clara en lugar de querer transformar toda la situación de inmediato.",
    "Beginnen Sie mit einer klaren Handlung, statt sofort die gesamte Situation verändern zu wollen.",
    "Iniziate con un’azione chiara invece di voler trasformare immediatamente l’intera situazione.",
    "Comece com uma ação clara em vez de querer transformar toda a situação imediatamente.",
  ),

  T(
    "Définissez votre priorité avant de vous engager dans plusieurs directions à la fois.",
    "Define your priority before committing yourself in several directions at once.",
    "Define tu prioridad antes de comprometerte en varias direcciones al mismo tiempo.",
    "Legen Sie Ihre Priorität fest, bevor Sie sich gleichzeitig in mehrere Richtungen engagieren.",
    "Definite la vostra priorità prima di impegnarvi in più direzioni contemporaneamente.",
    "Defina sua prioridade antes de se comprometer em várias direções ao mesmo tempo.",
  ),

  T(
    "Concentrez votre énergie sur les démarches qui offrent un potentiel durable.",
    "Focus your energy on actions that offer lasting potential.",
    "Concentra tu energía en las acciones que ofrecen un potencial duradero.",
    "Konzentrieren Sie Ihre Energie auf Schritte mit nachhaltigem Potenzial.",
    "Concentrate la vostra energia sulle iniziative che offrono un potenziale duraturo.",
    "Concentre sua energia nas ações que oferecem potencial duradouro.",
  ),

  T(
    "Évitez de sous-estimer les petites actions régulières : elles construiront les résultats les plus solides.",
    "Avoid underestimating small, consistent actions: they will build the strongest results.",
    "Evita subestimar las pequeñas acciones constantes: construirán los resultados más sólidos.",
    "Unterschätzen Sie kleine, regelmäßige Schritte nicht: Sie schaffen die solidesten Ergebnisse.",
    "Evitate di sottovalutare le piccole azioni costanti: costruiranno i risultati più solidi.",
    "Evite subestimar pequenas ações constantes: elas construirão os resultados mais sólidos.",
  ),

  T(
    "Exprimez clairement vos besoins plutôt que d’attendre que les autres les devinent.",
    "Express your needs clearly rather than waiting for others to guess them.",
    "Expresa claramente tus necesidades en lugar de esperar que los demás las adivinen.",
    "Drücken Sie Ihre Bedürfnisse klar aus, statt darauf zu warten, dass andere sie erraten.",
    "Esprimete chiaramente i vostri bisogni invece di aspettare che gli altri li intuiscano.",
    "Expresse claramente suas necessidades em vez de esperar que os outros as adivinhem.",
  ),

  T(
    "Privilégiez les relations dans lesquelles l’écoute et la réciprocité sont réellement présentes.",
    "Favor relationships in which listening and reciprocity are truly present.",
    "Da prioridad a las relaciones en las que la escucha y la reciprocidad estén realmente presentes.",
    "Bevorzugen Sie Beziehungen, in denen Zuhören und Gegenseitigkeit wirklich vorhanden sind.",
    "Privilegiate le relazioni in cui ascolto e reciprocità siano realmente presenti.",
    "Priorize relacionamentos em que a escuta e a reciprocidade estejam realmente presentes.",
  ),

  T(
    "Vérifiez les conséquences à long terme avant de prendre une décision financière importante.",
    "Check the long-term consequences before making an important financial decision.",
    "Verifica las consecuencias a largo plazo antes de tomar una decisión financiera importante.",
    "Prüfen Sie die langfristigen Folgen, bevor Sie eine wichtige finanzielle Entscheidung treffen.",
    "Valutate le conseguenze a lungo termine prima di prendere una decisione finanziaria importante.",
    "Verifique as consequências de longo prazo antes de tomar uma decisão financeira importante.",
  ),

  T(
    "Privilégiez la stabilité et la préparation plutôt que les résultats immédiats.",
    "Favor stability and preparation rather than immediate results.",
    "Da prioridad a la estabilidad y la preparación antes que a los resultados inmediatos.",
    "Setzen Sie auf Stabilität und Vorbereitung statt auf sofortige Ergebnisse.",
    "Privilegiate la stabilità e la preparazione rispetto ai risultati immediati.",
    "Priorize a estabilidade e a preparação em vez de resultados imediatos.",
  ),

  /* =======================================================
     THEMES 5 TO 12 — TEXTS + ADVICE
  ======================================================= */

  T("Une transformation discrète mais importante s’opère dans votre manière de percevoir vos priorités. Certaines anciennes certitudes peuvent évoluer.",
    "A subtle but important transformation is taking place in the way you perceive your priorities. Some old certainties may evolve.",
    "Una transformación discreta pero importante se está produciendo en tu manera de percibir tus prioridades. Algunas antiguas certezas pueden evolucionar.",
    "Eine unauffällige, aber wichtige Veränderung vollzieht sich in Ihrer Wahrnehmung Ihrer Prioritäten. Manche alten Gewissheiten können sich wandeln.",
    "Una trasformazione discreta ma importante sta avvenendo nel modo in cui percepite le vostre priorità. Alcune vecchie certezze possono evolvere.",
    "Uma transformação discreta, porém importante, está ocorrendo na forma como você percebe suas prioridades. Algumas antigas certezas podem evoluir."),

  T("Le mois favorise les prises de conscience et la libération de comportements qui ne correspondent plus à votre évolution.",
    "The month favors greater awareness and the release of behaviors that no longer support your growth.",
    "El mes favorece las tomas de conciencia y la liberación de comportamientos que ya no corresponden a tu evolución.",
    "Der Monat begünstigt neue Erkenntnisse und das Loslassen von Verhaltensweisen, die nicht mehr zu Ihrer Entwicklung passen.",
    "Il mese favorisce le prese di coscienza e il rilascio di comportamenti che non corrispondono più alla vostra evoluzione.",
    "O mês favorece novas percepções e a liberação de comportamentos que já não correspondem à sua evolução."),

  T("Une période d’introspection vous aide à comprendre ce que vous souhaitez conserver, modifier ou laisser derrière vous.",
    "A period of introspection helps you understand what you want to keep, change, or leave behind.",
    "Un período de introspección te ayuda a comprender lo que deseas conservar, modificar o dejar atrás.",
    "Eine Phase der Selbstreflexion hilft Ihnen zu verstehen, was Sie bewahren, verändern oder hinter sich lassen möchten.",
    "Un periodo di introspezione vi aiuta a comprendere ciò che desiderate conservare, modificare o lasciare alle spalle.",
    "Um período de introspecção ajuda você a compreender o que deseja conservar, modificar ou deixar para trás."),

  T("Accueillez les prises de conscience sans chercher à obtenir immédiatement toutes les réponses.",
    "Welcome new realizations without trying to obtain every answer immediately.",
    "Acoge las nuevas comprensiones sin intentar obtener inmediatamente todas las respuestas.",
    "Nehmen Sie neue Erkenntnisse an, ohne sofort alle Antworten finden zu wollen.",
    "Accogliete le nuove consapevolezze senza cercare di ottenere subito tutte le risposte.",
    "Acolha novas percepções sem tentar obter imediatamente todas as respostas."),

  T("Donnez-vous le droit de modifier une décision devenue incompatible avec vos besoins.",
    "Give yourself permission to change a decision that is no longer compatible with your needs.",
    "Date permiso para modificar una decisión que ya no es compatible con tus necesidades.",
    "Erlauben Sie sich, eine Entscheidung zu ändern, die nicht mehr mit Ihren Bedürfnissen vereinbar ist.",
    "Concedetevi il diritto di modificare una decisione diventata incompatibile con i vostri bisogni.",
    "Permita-se modificar uma decisão que já não é compatível com suas necessidades."),

  T("Laissez les changements intérieurs se préciser avant de les transformer en décisions définitives.",
    "Allow inner changes to become clearer before turning them into final decisions.",
    "Deja que los cambios interiores se definan antes de convertirlos en decisiones definitivas.",
    "Lassen Sie innere Veränderungen klarer werden, bevor Sie daraus endgültige Entscheidungen machen.",
    "Lasciate che i cambiamenti interiori si definiscano prima di trasformarli in decisioni definitive.",
    "Deixe as mudanças interiores se tornarem mais claras antes de transformá-las em decisões definitivas."),

  T("Votre créativité devient une source importante de motivation. Une idée personnelle pourrait prendre une forme plus concrète.",
    "Your creativity becomes an important source of motivation. A personal idea could take a more concrete form.",
    "Tu creatividad se convierte en una fuente importante de motivación. Una idea personal podría adquirir una forma más concreta.",
    "Ihre Kreativität wird zu einer wichtigen Motivationsquelle. Eine persönliche Idee könnte konkretere Formen annehmen.",
    "La vostra creatività diventa una fonte importante di motivazione. Un’idea personale potrebbe assumere una forma più concreta.",
    "Sua criatividade se torna uma importante fonte de motivação. Uma ideia pessoal poderá ganhar uma forma mais concreta."),

  T("Le mois favorise l’expression, l’innovation et les projets qui reflètent davantage votre personnalité.",
    "The month favors expression, innovation, and projects that better reflect your personality.",
    "El mes favorece la expresión, la innovación y los proyectos que reflejan mejor tu personalidad.",
    "Der Monat begünstigt Ausdruck, Innovation und Projekte, die Ihre Persönlichkeit stärker widerspiegeln.",
    "Il mese favorisce l’espressione, l’innovazione e i progetti che riflettono maggiormente la vostra personalità.",
    "O mês favorece a expressão, a inovação e os projetos que refletem melhor sua personalidade."),

  T("Une énergie créative vous encourage à sortir des habitudes et à explorer une nouvelle manière de vous exprimer.",
    "Creative energy encourages you to step outside your usual habits and explore a new way of expressing yourself.",
    "Una energía creativa te anima a salir de tus hábitos y explorar una nueva manera de expresarte.",
    "Eine kreative Energie ermutigt Sie, gewohnte Muster zu verlassen und eine neue Ausdrucksform zu erkunden.",
    "Un’energia creativa vi incoraggia a uscire dalle abitudini e a esplorare un nuovo modo di esprimervi.",
    "Uma energia criativa incentiva você a sair dos hábitos e explorar uma nova forma de se expressar."),

  T("Ne jugez pas trop rapidement vos idées : accordez-leur le temps de se développer.",
    "Do not judge your ideas too quickly: give them time to develop.",
    "No juzgues tus ideas demasiado rápido: dales tiempo para desarrollarse.",
    "Beurteilen Sie Ihre Ideen nicht zu schnell: Geben Sie ihnen Zeit, sich zu entwickeln.",
    "Non giudicate troppo rapidamente le vostre idee: concedete loro il tempo di svilupparsi.",
    "Não julgue suas ideias rápido demais: dê a elas tempo para se desenvolver."),

  T("Transformez votre inspiration en une action concrète, même modeste.",
    "Turn your inspiration into concrete action, even if it is modest.",
    "Transforma tu inspiración en una acción concreta, aunque sea modesta.",
    "Verwandeln Sie Ihre Inspiration in eine konkrete Handlung, auch wenn sie klein ist.",
    "Trasformate la vostra ispirazione in un’azione concreta, anche modesta.",
    "Transforme sua inspiração em uma ação concreta, mesmo que modesta."),

  T("Choisissez un projet capable de réunir plaisir, sens et potentiel d’évolution.",
    "Choose a project that combines enjoyment, meaning, and potential for growth.",
    "Elige un proyecto capaz de reunir placer, sentido y potencial de evolución.",
    "Wählen Sie ein Projekt, das Freude, Sinn und Entwicklungspotenzial verbindet.",
    "Scegliete un progetto capace di unire piacere, significato e potenziale di crescita.",
    "Escolha um projeto capaz de reunir prazer, significado e potencial de evolução."),

  T("Le mois vous invite à réorganiser votre quotidien afin de mieux protéger votre énergie et vos priorités.",
    "The month invites you to reorganize your daily life in order to better protect your energy and priorities.",
    "El mes te invita a reorganizar tu vida cotidiana para proteger mejor tu energía y tus prioridades.",
    "Der Monat lädt Sie dazu ein, Ihren Alltag neu zu organisieren, um Ihre Energie und Prioritäten besser zu schützen.",
    "Il mese vi invita a riorganizzare la vostra quotidianità per proteggere meglio la vostra energia e le vostre priorità.",
    "O mês convida você a reorganizar sua rotina para proteger melhor sua energia e suas prioridades."),

  T("Une meilleure gestion de votre temps pourra réduire la pression et améliorer votre efficacité.",
    "Better time management could reduce pressure and improve your effectiveness.",
    "Una mejor gestión de tu tiempo podrá reducir la presión y mejorar tu eficacia.",
    "Ein besseres Zeitmanagement kann den Druck reduzieren und Ihre Effizienz verbessern.",
    "Una migliore gestione del tempo potrà ridurre la pressione e migliorare la vostra efficacia.",
    "Uma melhor gestão do seu tempo poderá reduzir a pressão e melhorar sua eficiência."),

  T("La période favorise le tri, la simplification et la mise en place de nouvelles habitudes plus équilibrées.",
    "This period favors sorting, simplifying, and establishing new, more balanced habits.",
    "El período favorece la selección, la simplificación y la creación de nuevos hábitos más equilibrados.",
    "Diese Phase begünstigt das Sortieren, Vereinfachen und Einführen neuer, ausgewogenerer Gewohnheiten.",
    "Il periodo favorisce la selezione, la semplificazione e l’introduzione di nuove abitudini più equilibrate.",
    "O período favorece a organização, a simplificação e a criação de novos hábitos mais equilibrados."),

  T("Éliminez une obligation devenue inutile avant d’en ajouter une nouvelle.",
    "Eliminate an unnecessary obligation before adding a new one.",
    "Elimina una obligación que se ha vuelto innecesaria antes de añadir una nueva.",
    "Beseitigen Sie eine unnötig gewordene Verpflichtung, bevor Sie eine neue hinzufügen.",
    "Eliminate un obbligo diventato inutile prima di aggiungerne uno nuovo.",
    "Elimine uma obrigação que se tornou desnecessária antes de acrescentar uma nova."),

  T("Construisez un rythme réaliste plutôt qu’un programme impossible à maintenir.",
    "Build a realistic rhythm rather than a schedule that is impossible to maintain.",
    "Construye un ritmo realista en lugar de un programa imposible de mantener.",
    "Bauen Sie einen realistischen Rhythmus auf statt eines Programms, das sich nicht durchhalten lässt.",
    "Costruite un ritmo realistico invece di un programma impossibile da mantenere.",
    "Construa um ritmo realista em vez de um programa impossível de manter."),

  T("Accordez autant d’importance à votre récupération qu’à votre productivité.",
    "Give your recovery as much importance as your productivity.",
    "Da tanta importancia a tu recuperación como a tu productividad.",
    "Messen Sie Ihrer Erholung ebenso viel Bedeutung bei wie Ihrer Produktivität.",
    "Date al vostro recupero la stessa importanza che date alla produttività.",
    "Dê à sua recuperação a mesma importância que dá à sua produtividade."),

  T("Une occasion d’élargir vos horizons pourrait se présenter. Elle peut concerner un projet, une rencontre ou un nouvel apprentissage.",
    "An opportunity to broaden your horizons could appear. It may involve a project, a meeting, or a new learning experience.",
    "Podría presentarse una oportunidad para ampliar tus horizontes. Puede estar relacionada con un proyecto, un encuentro o un nuevo aprendizaje.",
    "Eine Gelegenheit, Ihren Horizont zu erweitern, könnte sich ergeben. Sie kann ein Projekt, eine Begegnung oder eine neue Lernerfahrung betreffen.",
    "Potrebbe presentarsi un’occasione per ampliare i vostri orizzonti. Può riguardare un progetto, un incontro o un nuovo apprendimento.",
    "Poderá surgir uma oportunidade para ampliar seus horizontes. Ela pode envolver um projeto, um encontro ou um novo aprendizado."),

  T("Le mois encourage l’exploration et les décisions capables d’ouvrir votre parcours à de nouvelles possibilités.",
    "The month encourages exploration and decisions that can open your path to new possibilities.",
    "El mes favorece la exploración y las decisiones capaces de abrir tu recorrido a nuevas posibilidades.",
    "Der Monat fördert Erkundung und Entscheidungen, die Ihren Weg für neue Möglichkeiten öffnen können.",
    "Il mese incoraggia l’esplorazione e le decisioni capaci di aprire il vostro percorso a nuove possibilità.",
    "O mês incentiva a exploração e as decisões capazes de abrir seu percurso a novas possibilidades."),

  T("Une énergie d’expansion stimule votre confiance et vous invite à regarder au-delà de vos limites habituelles.",
    "An expansive energy strengthens your confidence and invites you to look beyond your usual limits.",
    "Una energía de expansión estimula tu confianza y te invita a mirar más allá de tus límites habituales.",
    "Eine expansive Energie stärkt Ihr Selbstvertrauen und lädt Sie ein, über Ihre gewohnten Grenzen hinauszublicken.",
    "Un’energia di espansione stimola la vostra fiducia e vi invita a guardare oltre i vostri limiti abituali.",
    "Uma energia de expansão fortalece sua confiança e convida você a olhar além de seus limites habituais."),

  T("Restez ouvert aux occasions nouvelles sans perdre de vue vos priorités essentielles.",
    "Remain open to new opportunities without losing sight of your essential priorities.",
    "Mantente abierto a nuevas oportunidades sin perder de vista tus prioridades esenciales.",
    "Bleiben Sie offen für neue Chancen, ohne Ihre wesentlichen Prioritäten aus den Augen zu verlieren.",
    "Rimanete aperti alle nuove opportunità senza perdere di vista le vostre priorità essenziali.",
    "Permaneça aberto a novas oportunidades sem perder de vista suas prioridades essenciais."),

  T("Évaluez le potentiel réel d’une proposition avant de vous engager.",
    "Evaluate the real potential of a proposal before committing yourself.",
    "Evalúa el potencial real de una propuesta antes de comprometerte.",
    "Bewerten Sie das tatsächliche Potenzial eines Vorschlags, bevor Sie sich festlegen.",
    "Valutate il reale potenziale di una proposta prima di impegnarvi.",
    "Avalie o potencial real de uma proposta antes de se comprometer."),

  T("Saisissez les occasions qui favorisent une croissance durable plutôt qu’un enthousiasme passager.",
    "Seize opportunities that support lasting growth rather than temporary enthusiasm.",
    "Aprovecha las oportunidades que favorecen un crecimiento duradero en lugar de un entusiasmo pasajero.",
    "Nutzen Sie Chancen, die nachhaltiges Wachstum fördern, statt nur vorübergehende Begeisterung auszulösen.",
    "Cogliete le opportunità che favoriscono una crescita duratura invece di un entusiasmo passeggero.",
    "Aproveite oportunidades que favoreçam um crescimento duradouro em vez de um entusiasmo passageiro."),

  T("Une situation demande une prise de position plus claire. Reporter la décision pourrait maintenir une incertitude devenue pesante.",
    "A situation requires a clearer position. Postponing the decision could prolong an uncertainty that has become burdensome.",
    "Una situación exige una posición más clara. Aplazar la decisión podría mantener una incertidumbre que se ha vuelto pesada.",
    "Eine Situation verlangt eine klarere Position. Die Entscheidung aufzuschieben könnte eine belastend gewordene Unsicherheit verlängern.",
    "Una situazione richiede una presa di posizione più chiara. Rimandare la decisione potrebbe mantenere un’incertezza diventata pesante.",
    "Uma situação exige uma posição mais clara. Adiar a decisão poderá manter uma incerteza que se tornou pesada."),

  T("Le mois vous place devant un choix susceptible de modifier la suite de votre année.",
    "The month places you before a choice that could change the course of your year.",
    "El mes te sitúa ante una elección que podría modificar el curso de tu año.",
    "Der Monat stellt Sie vor eine Entscheidung, die den weiteren Verlauf Ihres Jahres verändern könnte.",
    "Il mese vi pone davanti a una scelta che potrebbe modificare il seguito del vostro anno.",
    "O mês coloca você diante de uma escolha que poderá modificar o restante do seu ano."),

  T("Une décision importante peut devenir nécessaire afin de préserver votre cohérence et votre progression.",
    "An important decision may become necessary in order to preserve your consistency and progress.",
    "Una decisión importante puede volverse necesaria para preservar tu coherencia y tu progreso.",
    "Eine wichtige Entscheidung kann notwendig werden, um Ihre Stimmigkeit und Ihren Fortschritt zu bewahren.",
    "Una decisione importante può diventare necessaria per preservare la vostra coerenza e il vostro progresso.",
    "Uma decisão importante poderá se tornar necessária para preservar sua coerência e seu progresso."),

  T("Distinguez ce que vous souhaitez vraiment de ce que les autres attendent de vous.",
    "Distinguish what you truly want from what others expect of you.",
    "Distingue lo que realmente deseas de lo que los demás esperan de ti.",
    "Unterscheiden Sie zwischen dem, was Sie wirklich wollen, und dem, was andere von Ihnen erwarten.",
    "Distinguete ciò che desiderate veramente da ciò che gli altri si aspettano da voi.",
    "Diferencie aquilo que você realmente deseja daquilo que os outros esperam de você."),

  T("Prenez le temps de vérifier les faits avant de suivre une réaction émotionnelle.",
    "Take time to verify the facts before following an emotional reaction.",
    "Tómate el tiempo de verificar los hechos antes de seguir una reacción emocional.",
    "Nehmen Sie sich Zeit, die Fakten zu prüfen, bevor Sie einer emotionalen Reaktion folgen.",
    "Prendetevi il tempo di verificare i fatti prima di seguire una reazione emotiva.",
    "Reserve um tempo para verificar os fatos antes de seguir uma reação emocional."),

  T("Choisissez la direction qui reste cohérente avec vos objectifs à long terme.",
    "Choose the direction that remains consistent with your long-term goals.",
    "Elige la dirección que siga siendo coherente con tus objetivos a largo plazo.",
    "Wählen Sie die Richtung, die mit Ihren langfristigen Zielen im Einklang bleibt.",
    "Scegliete la direzione che rimane coerente con i vostri obiettivi a lungo termine.",
    "Escolha a direção que permaneça coerente com seus objetivos de longo prazo."),

  T("Le rythme ralentit afin de vous permettre d’observer les résultats obtenus et de corriger certaines décisions.",
    "The pace slows down so that you can observe the results obtained and correct certain decisions.",
    "El ritmo disminuye para permitirte observar los resultados obtenidos y corregir algunas decisiones.",
    "Das Tempo verlangsamt sich, damit Sie die erzielten Ergebnisse beobachten und bestimmte Entscheidungen korrigieren können.",
    "Il ritmo rallenta per permettervi di osservare i risultati ottenuti e correggere alcune decisioni.",
    "O ritmo desacelera para permitir que você observe os resultados obtidos e corrija algumas decisões."),

  T("Cette période demande davantage de patience. Les retards éventuels peuvent révéler un élément qui avait été négligé.",
    "This period requires greater patience. Possible delays may reveal something that had been overlooked.",
    "Este período requiere más paciencia. Los posibles retrasos pueden revelar un elemento que había sido descuidado.",
    "Diese Phase erfordert mehr Geduld. Mögliche Verzögerungen können etwas sichtbar machen, das übersehen wurde.",
    "Questo periodo richiede maggiore pazienza. Eventuali ritardi possono rivelare un elemento che era stato trascurato.",
    "Este período exige mais paciência. Possíveis atrasos podem revelar algo que havia sido negligenciado."),

  T("Le mois favorise la réflexion, la récupération et la préparation plutôt que les actions précipitées.",
    "The month favors reflection, recovery, and preparation rather than rushed action.",
    "El mes favorece la reflexión, la recuperación y la preparación en lugar de las acciones precipitadas.",
    "Der Monat begünstigt Reflexion, Erholung und Vorbereitung statt übereilter Handlungen.",
    "Il mese favorisce la riflessione, il recupero e la preparazione piuttosto che le azioni affrettate.",
    "O mês favorece a reflexão, a recuperação e a preparação em vez de ações precipitadas."),

  T("Ne considérez pas un ralentissement comme un échec : utilisez-le pour améliorer votre stratégie.",
    "Do not view a slowdown as a failure: use it to improve your strategy.",
    "No consideres una desaceleración como un fracaso: utilízala para mejorar tu estrategia.",
    "Betrachten Sie eine Verlangsamung nicht als Misserfolg: Nutzen Sie sie, um Ihre Strategie zu verbessern.",
    "Non considerate un rallentamento come un fallimento: utilizzatelo per migliorare la vostra strategia.",
    "Não considere uma desaceleração como um fracasso: use-a para melhorar sua estratégia."),

  T("Évitez de forcer une situation qui demande encore du temps.",
    "Avoid forcing a situation that still requires time.",
    "Evita forzar una situación que todavía necesita tiempo.",
    "Vermeiden Sie es, eine Situation zu erzwingen, die noch Zeit braucht.",
    "Evitate di forzare una situazione che richiede ancora tempo.",
    "Evite forçar uma situação que ainda precisa de tempo."),

  T("Profitez de cette période pour terminer, vérifier et simplifier.",
    "Use this period to finish, verify, and simplify.",
    "Aprovecha este período para terminar, verificar y simplificar.",
    "Nutzen Sie diese Phase, um abzuschließen, zu überprüfen und zu vereinfachen.",
    "Approfittate di questo periodo per completare, verificare e semplificare.",
    "Aproveite este período para concluir, verificar e simplificar."),

  T("Les efforts des derniers mois peuvent commencer à produire des résultats plus visibles. Une forme de reconnaissance devient possible.",
    "The efforts of recent months may begin to produce more visible results. Some form of recognition becomes possible.",
    "Los esfuerzos de los últimos meses pueden empezar a producir resultados más visibles. Alguna forma de reconocimiento se vuelve posible.",
    "Die Anstrengungen der letzten Monate können beginnen, sichtbarere Ergebnisse hervorzubringen. Eine Form der Anerkennung wird möglich.",
    "Gli sforzi degli ultimi mesi possono iniziare a produrre risultati più visibili. Una forma di riconoscimento diventa possibile.",
    "Os esforços dos últimos meses podem começar a produzir resultados mais visíveis. Alguma forma de reconhecimento se torna possível."),

  T("Le mois met en lumière les progrès accomplis et vous aide à mieux mesurer la valeur de votre constance.",
    "The month highlights the progress you have made and helps you better appreciate the value of your consistency.",
    "El mes pone de relieve los progresos realizados y te ayuda a valorar mejor tu constancia.",
    "Der Monat hebt Ihre Fortschritte hervor und hilft Ihnen, den Wert Ihrer Beständigkeit besser einzuschätzen.",
    "Il mese mette in luce i progressi compiuti e vi aiuta a valutare meglio il valore della vostra costanza.",
    "O mês destaca os progressos realizados e ajuda você a valorizar melhor sua constância."),

  T("Une période constructive permet de récolter les effets d’une décision ou d’un engagement antérieur.",
    "A constructive period allows you to reap the results of a previous decision or commitment.",
    "Un período constructivo permite recoger los frutos de una decisión o compromiso anterior.",
    "Eine konstruktive Phase ermöglicht es Ihnen, die Ergebnisse einer früheren Entscheidung oder Verpflichtung zu ernten.",
    "Un periodo costruttivo permette di raccogliere gli effetti di una decisione o di un impegno precedente.",
    "Um período construtivo permite colher os resultados de uma decisão ou compromisso anterior."),

  T("Reconnaissez votre progression sans relâcher les efforts qui ont permis ces résultats.",
    "Acknowledge your progress without abandoning the efforts that produced these results.",
    "Reconoce tu progreso sin abandonar los esfuerzos que permitieron estos resultados.",
    "Erkennen Sie Ihren Fortschritt an, ohne die Anstrengungen nachzulassen, die diese Ergebnisse ermöglicht haben.",
    "Riconoscete i vostri progressi senza diminuire gli sforzi che hanno permesso questi risultati.",
    "Reconheça seu progresso sem abandonar os esforços que possibilitaram esses resultados."),

  T("Utilisez cette période favorable pour consolider votre position.",
    "Use this favorable period to consolidate your position.",
    "Utiliza este período favorable para consolidar tu posición.",
    "Nutzen Sie diese günstige Phase, um Ihre Position zu festigen.",
    "Utilizzate questo periodo favorevole per consolidare la vostra posizione.",
    "Use este período favorável para consolidar sua posição."),

  T("Partagez vos réussites avec discernement et préparez déjà la prochaine étape.",
    "Share your successes wisely and begin preparing for the next step.",
    "Comparte tus logros con discernimiento y empieza ya a preparar la siguiente etapa.",
    "Teilen Sie Ihre Erfolge mit Bedacht und bereiten Sie bereits den nächsten Schritt vor.",
    "Condividete i vostri successi con discernimento e preparate già la prossima fase.",
    "Compartilhe suas conquistas com discernimento e comece a preparar a próxima etapa."),

  T("Une étape arrive à son terme. Cette période vous aide à comprendre ce qui doit être conservé avant d’ouvrir un nouveau cycle.",
    "A stage is coming to an end. This period helps you understand what should be preserved before beginning a new cycle.",
    "Una etapa llega a su fin. Este período te ayuda a comprender lo que debe conservarse antes de abrir un nuevo ciclo.",
    "Eine Etappe geht zu Ende. Diese Phase hilft Ihnen zu verstehen, was bewahrt werden sollte, bevor ein neuer Zyklus beginnt.",
    "Una fase giunge al termine. Questo periodo vi aiuta a comprendere ciò che deve essere conservato prima di aprire un nuovo ciclo.",
    "Uma etapa chega ao fim. Este período ajuda você a compreender o que deve ser preservado antes de iniciar um novo ciclo."),

  T("Le mois favorise les bilans, les ajustements et la préparation des projets à venir.",
    "The month favors assessment, adjustments, and preparation for upcoming projects.",
    "El mes favorece los balances, los ajustes y la preparación de los proyectos futuros.",
    "Der Monat begünstigt Bilanz, Anpassungen und die Vorbereitung kommender Projekte.",
    "Il mese favorisce i bilanci, gli aggiustamenti e la preparazione dei progetti futuri.",
    "O mês favorece balanços, ajustes e a preparação de projetos futuros."),

  T("Une phase de clôture permet de libérer de l’espace pour de nouvelles priorités.",
    "A closing phase helps create space for new priorities.",
    "Una fase de cierre permite liberar espacio para nuevas prioridades.",
    "Eine Abschlussphase schafft Raum für neue Prioritäten.",
    "Una fase di chiusura permette di liberare spazio per nuove priorità.",
    "Uma fase de encerramento permite liberar espaço para novas prioridades."),

  T("Terminez ce qui peut l’être avant de vous lancer dans une nouvelle direction.",
    "Finish what can be completed before moving in a new direction.",
    "Termina lo que pueda concluirse antes de emprender una nueva dirección.",
    "Schließen Sie ab, was abgeschlossen werden kann, bevor Sie eine neue Richtung einschlagen.",
    "Concludete ciò che può essere concluso prima di intraprendere una nuova direzione.",
    "Conclua o que puder ser concluído antes de seguir uma nova direção."),

  T("Faites un bilan honnête de vos progrès, de vos erreurs et de vos besoins.",
    "Take an honest look at your progress, mistakes, and needs.",
    "Haz un balance honesto de tus progresos, errores y necesidades.",
    "Ziehen Sie eine ehrliche Bilanz Ihrer Fortschritte, Fehler und Bedürfnisse.",
    "Fate un bilancio onesto dei vostri progressi, errori e bisogni.",
    "Faça um balanço honesto de seus progressos, erros e necessidades."),

  T("Préparez la prochaine étape sans chercher à contrôler immédiatement tous ses détails.",
    "Prepare the next step without trying to control every detail immediately.",
    "Prepara la siguiente etapa sin intentar controlar inmediatamente todos sus detalles.",
    "Bereiten Sie den nächsten Schritt vor, ohne sofort jedes Detail kontrollieren zu wollen.",
    "Preparate la prossima fase senza cercare di controllarne immediatamente ogni dettaglio.",
    "Prepare a próxima etapa sem tentar controlar imediatamente todos os detalhes."),

  /* =======================================================
     SCORE TEXTS
  ======================================================= */

  T("Ce mois figure parmi les périodes les plus porteuses de votre année. Les initiatives prises avec discernement peuvent produire des résultats rapides et durables.",
    "This month is among the most promising periods of your year. Initiatives taken with discernment can produce rapid and lasting results.",
    "Este mes se encuentra entre los períodos más favorables de tu año. Las iniciativas tomadas con discernimiento pueden producir resultados rápidos y duraderos.",
    "Dieser Monat gehört zu den vielversprechendsten Phasen Ihres Jahres. Überlegte Initiativen können schnelle und nachhaltige Ergebnisse hervorbringen.",
    "Questo mese rientra tra i periodi più favorevoli dell’anno. Le iniziative prese con discernimento possono produrre risultati rapidi e duraturi.",
    "Este mês está entre os períodos mais favoráveis do seu ano. Iniciativas tomadas com discernimento podem produzir resultados rápidos e duradouros."),

  T("Une énergie favorable soutient vos projets et renforce votre capacité à saisir les occasions importantes.",
    "Favorable energy supports your projects and strengthens your ability to seize important opportunities.",
    "Una energía favorable apoya tus proyectos y fortalece tu capacidad para aprovechar oportunidades importantes.",
    "Eine günstige Energie unterstützt Ihre Projekte und stärkt Ihre Fähigkeit, wichtige Chancen zu nutzen.",
    "Un’energia favorevole sostiene i vostri progetti e rafforza la vostra capacità di cogliere opportunità importanti.",
    "Uma energia favorável apoia seus projetos e fortalece sua capacidade de aproveitar oportunidades importantes."),

  T("Cette période possède un potentiel d’expansion notable. Votre confiance et votre clarté faciliteront les avancées.",
    "This period has significant potential for expansion. Your confidence and clarity will make progress easier.",
    "Este período posee un notable potencial de expansión. Tu confianza y claridad facilitarán los avances.",
    "Diese Phase besitzt ein bemerkenswertes Expansionspotenzial. Ihr Selbstvertrauen und Ihre Klarheit erleichtern Fortschritte.",
    "Questo periodo possiede un notevole potenziale di espansione. La vostra fiducia e chiarezza faciliteranno i progressi.",
    "Este período possui um potencial significativo de expansão. Sua confiança e clareza facilitarão os avanços."),

  T("Le climat du mois favorise les décisions, les rencontres et les actions capables de faire progresser votre situation.",
    "The month's climate favors decisions, encounters, and actions capable of moving your situation forward.",
    "El clima del mes favorece las decisiones, los encuentros y las acciones capaces de hacer avanzar tu situación.",
    "Die Stimmung des Monats begünstigt Entscheidungen, Begegnungen und Handlungen, die Ihre Situation voranbringen können.",
    "Il clima del mese favorisce decisioni, incontri e azioni capaci di far progredire la vostra situazione.",
    "O clima do mês favorece decisões, encontros e ações capazes de fazer sua situação avançar."),

  T("Plusieurs éléments peuvent s’aligner en votre faveur. Restez attentif aux occasions qui correspondent réellement à vos objectifs.",
    "Several elements may align in your favor. Stay attentive to opportunities that truly match your goals.",
    "Varios elementos pueden alinearse a tu favor. Mantente atento a las oportunidades que realmente correspondan a tus objetivos.",
    "Mehrere Faktoren können sich zu Ihren Gunsten ausrichten. Achten Sie auf Chancen, die wirklich zu Ihren Zielen passen.",
    "Diversi elementi possono allinearsi a vostro favore. Restate attenti alle opportunità che corrispondono davvero ai vostri obiettivi.",
    "Vários elementos podem se alinhar a seu favor. Permaneça atento às oportunidades que realmente correspondam aos seus objetivos."),

  T("Ce mois présente une énergie équilibrée. Les résultats dépendront principalement de votre capacité à rester constant et organisé.",
    "This month carries balanced energy. Results will mainly depend on your ability to remain consistent and organized.",
    "Este mes presenta una energía equilibrada. Los resultados dependerán principalmente de tu capacidad para mantenerte constante y organizado.",
    "Dieser Monat besitzt eine ausgeglichene Energie. Die Ergebnisse hängen hauptsächlich von Ihrer Fähigkeit ab, beständig und organisiert zu bleiben.",
    "Questo mese presenta un’energia equilibrata. I risultati dipenderanno principalmente dalla vostra capacità di rimanere costanti e organizzati.",
    "Este mês apresenta uma energia equilibrada. Os resultados dependerão principalmente de sua capacidade de permanecer constante e organizado."),

  T("La période offre un potentiel constructif, mais demande une implication régulière et des attentes réalistes.",
    "The period offers constructive potential but requires consistent involvement and realistic expectations.",
    "El período ofrece un potencial constructivo, pero requiere una implicación constante y expectativas realistas.",
    "Die Phase bietet konstruktives Potenzial, verlangt jedoch kontinuierlichen Einsatz und realistische Erwartungen.",
    "Il periodo offre un potenziale costruttivo, ma richiede un impegno costante e aspettative realistiche.",
    "O período oferece um potencial construtivo, mas exige envolvimento constante e expectativas realistas."),

  T("Le climat du mois alterne entre possibilités et ajustements. Une approche souple vous permettra de maintenir votre progression.",
    "The month's climate alternates between opportunities and adjustments. A flexible approach will help you maintain your progress.",
    "El clima del mes alterna entre posibilidades y ajustes. Un enfoque flexible te permitirá mantener tu progreso.",
    "Die Stimmung des Monats wechselt zwischen Möglichkeiten und Anpassungen. Ein flexibler Ansatz hilft Ihnen, Ihren Fortschritt zu bewahren.",
    "Il clima del mese alterna possibilità e aggiustamenti. Un approccio flessibile vi permetterà di mantenere i vostri progressi.",
    "O clima do mês alterna entre possibilidades e ajustes. Uma abordagem flexível permitirá que você mantenha seu progresso."),

  T("Cette période peut devenir positive si vous respectez votre rythme et évitez de disperser votre énergie.",
    "This period can become positive if you respect your rhythm and avoid scattering your energy.",
    "Este período puede volverse positivo si respetas tu ritmo y evitas dispersar tu energía.",
    "Diese Phase kann positiv werden, wenn Sie Ihren Rhythmus respektieren und vermeiden, Ihre Energie zu zerstreuen.",
    "Questo periodo può diventare positivo se rispettate il vostro ritmo ed evitate di disperdere la vostra energia.",
    "Este período pode se tornar positivo se você respeitar seu ritmo e evitar dispersar sua energia."),

  T("Le mois vous invite à avancer avec mesure. Les progrès seront plus solides que spectaculaires.",
    "The month invites you to move forward with moderation. Progress will be more solid than spectacular.",
    "El mes te invita a avanzar con moderación. Los progresos serán más sólidos que espectaculares.",
    "Der Monat lädt Sie ein, mit Maß voranzugehen. Die Fortschritte werden eher solide als spektakulär sein.",
    "Il mese vi invita ad avanzare con misura. I progressi saranno più solidi che spettacolari.",
    "O mês convida você a avançar com moderação. Os progressos serão mais sólidos do que espetaculares."),

  T("Cette période demande davantage de prudence. Les décisions prises sous pression pourraient créer des complications inutiles.",
    "This period requires greater caution. Decisions made under pressure could create unnecessary complications.",
    "Este período requiere mayor prudencia. Las decisiones tomadas bajo presión podrían crear complicaciones innecesarias.",
    "Diese Phase erfordert mehr Vorsicht. Entscheidungen unter Druck könnten unnötige Komplikationen verursachen.",
    "Questo periodo richiede maggiore prudenza. Le decisioni prese sotto pressione potrebbero creare complicazioni inutili.",
    "Este período exige mais prudência. Decisões tomadas sob pressão poderão criar complicações desnecessárias."),

  T("Le mois peut révéler certaines tensions ou limites. Il sera préférable d’observer avant de réagir.",
    "The month may reveal certain tensions or limitations. It will be better to observe before reacting.",
    "El mes puede revelar algunas tensiones o límites. Será preferible observar antes de reaccionar.",
    "Der Monat kann bestimmte Spannungen oder Grenzen aufzeigen. Es ist besser, zunächst zu beobachten, bevor Sie reagieren.",
    "Il mese può rivelare alcune tensioni o limiti. Sarà preferibile osservare prima di reagire.",
    "O mês poderá revelar algumas tensões ou limites. Será melhor observar antes de reagir."),

  T("Une énergie plus exigeante vous invite à ralentir et à vérifier vos choix avant de vous engager.",
    "More demanding energy invites you to slow down and review your choices before committing.",
    "Una energía más exigente te invita a reducir el ritmo y revisar tus decisiones antes de comprometerte.",
    "Eine anspruchsvollere Energie lädt Sie ein, langsamer zu werden und Ihre Entscheidungen zu prüfen, bevor Sie sich festlegen.",
    "Un’energia più esigente vi invita a rallentare e a verificare le vostre scelte prima di impegnarvi.",
    "Uma energia mais exigente convida você a desacelerar e revisar suas escolhas antes de se comprometer."),

  T("Cette période favorise les ajustements plutôt que les grandes prises de risque.",
    "This period favors adjustments rather than major risks.",
    "Este período favorece los ajustes en lugar de asumir grandes riesgos.",
    "Diese Phase begünstigt Anpassungen statt großer Risiken.",
    "Questo periodo favorisce gli aggiustamenti piuttosto che i grandi rischi.",
    "Este período favorece ajustes em vez de grandes riscos."),

  T("Le climat du mois demande patience et discernement. Les obstacles rencontrés pourront néanmoins vous aider à améliorer votre stratégie.",
    "The month's climate requires patience and discernment. The obstacles you encounter may nevertheless help you improve your strategy.",
    "El clima del mes exige paciencia y discernimiento. Sin embargo, los obstáculos encontrados podrán ayudarte a mejorar tu estrategia.",
    "Die Stimmung des Monats verlangt Geduld und Urteilsvermögen. Die auftretenden Hindernisse können Ihnen dennoch helfen, Ihre Strategie zu verbessern.",
    "Il clima del mese richiede pazienza e discernimento. Gli ostacoli incontrati potranno comunque aiutarvi a migliorare la vostra strategia.",
    "O clima do mês exige paciência e discernimento. Os obstáculos encontrados poderão, ainda assim, ajudar você a melhorar sua estratégia."),

  /* =======================================================
     SYNTHESIS
  ======================================================= */

  T("Votre année alternera entre périodes d’expansion, phases de consolidation et moments de recentrage. Le respect de ce rythme vous permettra de progresser sans épuiser vos ressources.",
    "Your year will alternate between periods of expansion, phases of consolidation, and moments of recentering. Respecting this rhythm will allow you to progress without exhausting your resources.",
    "Tu año alternará entre períodos de expansión, fases de consolidación y momentos de recentramiento. Respetar este ritmo te permitirá avanzar sin agotar tus recursos.",
    "Ihr Jahr wird zwischen Phasen der Expansion, Konsolidierung und Neuausrichtung wechseln. Wenn Sie diesen Rhythmus respektieren, können Sie Fortschritte machen, ohne Ihre Ressourcen zu erschöpfen.",
    "Il vostro anno alternerà periodi di espansione, fasi di consolidamento e momenti di ricentramento. Rispettare questo ritmo vi permetterà di progredire senza esaurire le vostre risorse.",
    "Seu ano alternará entre períodos de expansão, fases de consolidação e momentos de recentramento. Respeitar esse ritmo permitirá que você avance sem esgotar seus recursos."),

  T("Les mois les plus favorables soutiendront vos initiatives, tandis que les périodes plus exigeantes vous aideront à corriger votre trajectoire et à renforcer vos fondations.",
    "The most favorable months will support your initiatives, while more demanding periods will help you correct your course and strengthen your foundations.",
    "Los meses más favorables apoyarán tus iniciativas, mientras que los períodos más exigentes te ayudarán a corregir tu trayectoria y reforzar tus bases.",
    "Die günstigsten Monate unterstützen Ihre Initiativen, während anspruchsvollere Phasen Ihnen helfen, Ihren Kurs zu korrigieren und Ihre Grundlagen zu stärken.",
    "I mesi più favorevoli sosterranno le vostre iniziative, mentre i periodi più impegnativi vi aiuteranno a correggere la vostra traiettoria e a rafforzare le vostre basi.",
    "Os meses mais favoráveis apoiarão suas iniciativas, enquanto os períodos mais exigentes ajudarão você a corrigir sua trajetória e fortalecer suas bases."),

  T("Votre progression annuelle dépendra de votre capacité à reconnaître les bons moments pour agir, attendre, ajuster ou conclure.",
    "Your yearly progress will depend on your ability to recognize the right moments to act, wait, adjust, or conclude.",
    "Tu progreso anual dependerá de tu capacidad para reconocer los momentos adecuados para actuar, esperar, ajustar o concluir.",
    "Ihr jährlicher Fortschritt hängt davon ab, ob Sie die richtigen Momente zum Handeln, Warten, Anpassen oder Abschließen erkennen.",
    "Il vostro progresso annuale dipenderà dalla capacità di riconoscere i momenti giusti per agire, attendere, adattare o concludere.",
    "Seu progresso anual dependerá da sua capacidade de reconhecer os momentos certos para agir, esperar, ajustar ou concluir."),

  T("L’ensemble de l’année forme une évolution cohérente. Chaque mois prépare le suivant et contribue à une transformation plus profonde.",
    "The entire year forms a coherent progression. Each month prepares the next and contributes to a deeper transformation.",
    "El conjunto del año forma una evolución coherente. Cada mes prepara el siguiente y contribuye a una transformación más profunda.",
    "Das gesamte Jahr bildet eine stimmige Entwicklung. Jeder Monat bereitet den nächsten vor und trägt zu einer tieferen Veränderung bei.",
    "L’intero anno forma un’evoluzione coerente. Ogni mese prepara il successivo e contribuisce a una trasformazione più profonda.",
    "O ano inteiro forma uma evolução coerente. Cada mês prepara o seguinte e contribui para uma transformação mais profunda."),

  T("Les variations d’intensité au cours de l’année ne représentent pas des contradictions, mais les différentes étapes nécessaires à votre progression.",
    "The variations in intensity throughout the year are not contradictions, but different stages necessary for your progress.",
    "Las variaciones de intensidad a lo largo del año no representan contradicciones, sino las distintas etapas necesarias para tu progreso.",
    "Die Intensitätsschwankungen im Laufe des Jahres sind keine Widersprüche, sondern verschiedene notwendige Etappen Ihres Fortschritts.",
    "Le variazioni di intensità nel corso dell’anno non rappresentano contraddizioni, ma le diverse fasi necessarie al vostro progresso.",
    "As variações de intensidade ao longo do ano não representam contradições, mas diferentes etapas necessárias ao seu progresso."),

  /* =======================================================
     CONCLUSION
  ======================================================= */

  T("Utilisez ce calendrier comme un guide souple. Vos choix, votre constance et votre capacité d’adaptation resteront les véritables moteurs de votre année.",
    "Use this calendar as a flexible guide. Your choices, consistency, and ability to adapt will remain the true driving forces of your year.",
    "Utiliza este calendario como una guía flexible. Tus decisiones, tu constancia y tu capacidad de adaptación seguirán siendo los verdaderos motores de tu año.",
    "Nutzen Sie diesen Kalender als flexiblen Leitfaden. Ihre Entscheidungen, Ihre Beständigkeit und Ihre Anpassungsfähigkeit bleiben die eigentlichen Motoren Ihres Jahres.",
    "Utilizzate questo calendario come una guida flessibile. Le vostre scelte, la vostra costanza e la vostra capacità di adattamento rimarranno i veri motori dell’anno.",
    "Use este calendário como um guia flexível. Suas escolhas, sua constância e sua capacidade de adaptação continuarão sendo os verdadeiros motores do seu ano."),

  T("En respectant les besoins propres à chaque période, vous pourrez mieux utiliser les occasions et traverser les moments plus délicats avec lucidité.",
    "By respecting the needs of each period, you will be better able to use opportunities and navigate more delicate moments with clarity.",
    "Al respetar las necesidades propias de cada período, podrás aprovechar mejor las oportunidades y atravesar los momentos más delicados con claridad.",
    "Wenn Sie die Bedürfnisse jeder Phase respektieren, können Sie Chancen besser nutzen und schwierigere Momente mit Klarheit durchlaufen.",
    "Rispettando le esigenze proprie di ogni periodo, potrete utilizzare meglio le opportunità e attraversare i momenti più delicati con lucidità.",
    "Ao respeitar as necessidades de cada período, você poderá aproveitar melhor as oportunidades e atravessar os momentos mais delicados com clareza."),

  T("Votre calendrier annuel vous invite à agir avec confiance lorsque le climat est favorable et à préserver votre énergie lorsque la période demande davantage de recul.",
    "Your yearly calendar invites you to act confidently when conditions are favorable and preserve your energy when a period requires greater perspective.",
    "Tu calendario anual te invita a actuar con confianza cuando el clima es favorable y a preservar tu energía cuando el período exige mayor perspectiva.",
    "Ihr Jahreskalender lädt Sie ein, bei günstigen Bedingungen selbstbewusst zu handeln und Ihre Energie zu bewahren, wenn eine Phase mehr Abstand verlangt.",
    "Il vostro calendario annuale vi invita ad agire con fiducia quando il clima è favorevole e a preservare la vostra energia quando il periodo richiede maggiore distacco.",
    "Seu calendário anual convida você a agir com confiança quando o clima é favorável e preservar sua energia quando o período exige mais perspectiva."),

  T("Chaque mois possède une fonction particulière dans votre évolution. Même les périodes plus exigeantes peuvent préparer une avancée importante.",
    "Each month has a particular role in your growth. Even more demanding periods can prepare an important breakthrough.",
    "Cada mes cumple una función particular en tu evolución. Incluso los períodos más exigentes pueden preparar un avance importante.",
    "Jeder Monat erfüllt eine besondere Funktion in Ihrer Entwicklung. Selbst anspruchsvollere Phasen können einen wichtigen Fortschritt vorbereiten.",
    "Ogni mese svolge una funzione particolare nella vostra evoluzione. Anche i periodi più impegnativi possono preparare un importante progresso.",
    "Cada mês possui uma função particular em sua evolução. Mesmo os períodos mais exigentes podem preparar um avanço importante."),

  T("L’année vous offre plusieurs occasions de progression. Votre capacité à associer intuition, réalisme et constance fera toute la différence.",
    "The year offers you several opportunities for progress. Your ability to combine intuition, realism, and consistency will make all the difference.",
    "El año te ofrece varias oportunidades de progreso. Tu capacidad para combinar intuición, realismo y constancia marcará toda la diferencia.",
    "Das Jahr bietet Ihnen mehrere Möglichkeiten zum Fortschritt. Ihre Fähigkeit, Intuition, Realismus und Beständigkeit zu verbinden, wird den entscheidenden Unterschied machen.",
    "L’anno vi offre diverse opportunità di progresso. La vostra capacità di unire intuizione, realismo e costanza farà tutta la differenza.",
    "O ano oferece várias oportunidades de progresso. Sua capacidade de combinar intuição, realismo e constância fará toda a diferença."),
];

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

export function localizeYearHoroscopeCalendarTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  /*
  |----------------------------------------------------------
  | IMPORTANT
  |----------------------------------------------------------
  |
  | Longest strings first.
  |
  | This prevents a short profile expression such as
  | "votre courage" from being translated before a longer
  | template string containing the same expression.
  |
  */

  const orderedTranslations =
    [...CALENDAR_TEXT_TRANSLATIONS]
      .sort(
        (a, b) =>
          b.from.length -
          a.from.length,
      );

  for (const entry of orderedTranslations) {
    output =
      output
        .split(entry.from)
        .join(entry.to[locale]);
  }

  return output;
}
