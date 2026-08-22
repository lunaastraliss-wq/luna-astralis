import type {
  PaidPdfLocale,
} from "./premium-localization";

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

const BEST_PERIODS_TEXT_TRANSLATIONS: TranslationEntry[] = [
  /* =======================================================
     SIGN PROFILES — BÉLIER
  ======================================================= */

  T("votre spontanéité et votre franchise",
    "your spontaneity and honesty",
    "tu espontaneidad y franqueza",
    "Ihre Spontaneität und Offenheit",
    "la vostra spontaneità e franchezza",
    "sua espontaneidade e franqueza"),

  T("votre courage et votre capacité d’initiative",
    "your courage and initiative",
    "tu valentía y capacidad de iniciativa",
    "Ihr Mut und Ihre Initiative",
    "il vostro coraggio e la vostra capacità di iniziativa",
    "sua coragem e capacidade de iniciativa"),

  T("votre rapidité à reconnaître une occasion",
    "your ability to quickly recognize an opportunity",
    "tu rapidez para reconocer una oportunidad",
    "Ihre Fähigkeit, Chancen schnell zu erkennen",
    "la vostra rapidità nel riconoscere un’opportunità",
    "sua rapidez para reconhecer uma oportunidade"),

  T("votre énergie de démarrage",
    "your ability to get things started",
    "tu energía para iniciar",
    "Ihre Startenergie",
    "la vostra energia iniziale",
    "sua energia para começar"),

  T("les réactions affectives trop rapides",
    "overly quick emotional reactions",
    "las reacciones afectivas demasiado rápidas",
    "zu schnelle emotionale Reaktionen",
    "le reazioni affettive troppo rapide",
    "as reações afetivas rápidas demais"),

  T("l’impatience devant les résultats",
    "impatience with results",
    "la impaciencia ante los resultados",
    "Ungeduld gegenüber Ergebnissen",
    "l’impazienza davanti ai risultati",
    "a impaciência diante dos resultados"),

  T("les décisions financières impulsives",
    "impulsive financial decisions",
    "las decisiones financieras impulsivas",
    "impulsive finanzielle Entscheidungen",
    "le decisioni finanziarie impulsive",
    "as decisões financeiras impulsivas"),

  T("la tendance à commencer trop de choses à la fois",
    "the tendency to start too many things at once",
    "la tendencia a empezar demasiadas cosas a la vez",
    "die Tendenz, zu viele Dinge gleichzeitig zu beginnen",
    "la tendenza a iniziare troppe cose contemporaneamente",
    "a tendência de começar coisas demais ao mesmo tempo"),

  /* =======================================================
     TAUREAU
  ======================================================= */

  T("votre fidélité et votre stabilité",
    "your loyalty and stability",
    "tu fidelidad y estabilidad",
    "Ihre Treue und Stabilität",
    "la vostra fedeltà e stabilità",
    "sua fidelidade e estabilidade"),

  T("votre persévérance et votre fiabilité",
    "your perseverance and reliability",
    "tu perseverancia y fiabilidad",
    "Ihre Ausdauer und Zuverlässigkeit",
    "la vostra perseveranza e affidabilità",
    "sua perseverança e confiabilidade"),

  T("votre prudence et votre sens pratique",
    "your caution and practical sense",
    "tu prudencia y sentido práctico",
    "Ihre Vorsicht und Ihr praktischer Sinn",
    "la vostra prudenza e senso pratico",
    "sua prudência e senso prático"),

  T("votre capacité à construire sur des bases solides",
    "your ability to build on solid foundations",
    "tu capacidad para construir sobre bases sólidas",
    "Ihre Fähigkeit, auf soliden Grundlagen aufzubauen",
    "la vostra capacità di costruire su basi solide",
    "sua capacidade de construir sobre bases sólidas"),

  T("la difficulté à modifier certaines habitudes relationnelles",
    "difficulty changing certain relationship habits",
    "la dificultad para modificar ciertos hábitos relacionales",
    "Schwierigkeiten, bestimmte Beziehungsgewohnheiten zu verändern",
    "la difficoltà a modificare alcune abitudini relazionali",
    "a dificuldade de modificar certos hábitos nos relacionamentos"),

  T("la résistance aux nouvelles méthodes",
    "resistance to new methods",
    "la resistencia a nuevos métodos",
    "Widerstand gegen neue Methoden",
    "la resistenza ai nuovi metodi",
    "a resistência a novos métodos"),

  T("l’attachement excessif à la sécurité",
    "excessive attachment to security",
    "el apego excesivo a la seguridad",
    "eine übermäßige Bindung an Sicherheit",
    "l’attaccamento eccessivo alla sicurezza",
    "o apego excessivo à segurança"),

  T("la peur de sortir de votre zone de confort",
    "the fear of leaving your comfort zone",
    "el miedo a salir de tu zona de confort",
    "die Angst, Ihre Komfortzone zu verlassen",
    "la paura di uscire dalla vostra zona di comfort",
    "o medo de sair da sua zona de conforto"),

  /* =======================================================
     GÉMEAUX
  ======================================================= */

  T("votre curiosité et votre facilité à communiquer",
    "your curiosity and ease of communication",
    "tu curiosidad y facilidad para comunicarte",
    "Ihre Neugier und Kommunikationsstärke",
    "la vostra curiosità e facilità nel comunicare",
    "sua curiosidade e facilidade para se comunicar"),

  T("votre adaptabilité et votre intelligence",
    "your adaptability and intelligence",
    "tu capacidad de adaptación e inteligencia",
    "Ihre Anpassungsfähigkeit und Intelligenz",
    "la vostra adattabilità e intelligenza",
    "sua adaptabilidade e inteligência"),

  T("votre capacité à repérer plusieurs possibilités",
    "your ability to identify several possibilities",
    "tu capacidad para detectar varias posibilidades",
    "Ihre Fähigkeit, mehrere Möglichkeiten zu erkennen",
    "la vostra capacità di individuare diverse possibilità",
    "sua capacidade de identificar várias possibilidades"),

  T("votre créativité mentale et votre souplesse",
    "your mental creativity and flexibility",
    "tu creatividad mental y flexibilidad",
    "Ihre geistige Kreativität und Flexibilität",
    "la vostra creatività mentale e flessibilità",
    "sua criatividade mental e flexibilidade"),

  T("la dispersion émotionnelle",
    "emotional dispersion",
    "la dispersión emocional",
    "emotionale Zerstreuung",
    "la dispersione emotiva",
    "a dispersão emocional"),

  T("le manque de continuité",
    "lack of consistency",
    "la falta de continuidad",
    "mangelnde Beständigkeit",
    "la mancanza di continuità",
    "a falta de continuidade"),

  T("les décisions prises sans analyse suffisante",
    "decisions made without sufficient analysis",
    "las decisiones tomadas sin un análisis suficiente",
    "Entscheidungen ohne ausreichende Analyse",
    "le decisioni prese senza un’analisi sufficiente",
    "as decisões tomadas sem análise suficiente"),

  T("la tendance à changer trop rapidement de direction",
    "the tendency to change direction too quickly",
    "la tendencia a cambiar de dirección demasiado rápido",
    "die Tendenz, zu schnell die Richtung zu wechseln",
    "la tendenza a cambiare direzione troppo rapidamente",
    "a tendência de mudar de direção rápido demais"),

  /* =======================================================
     CANCER
  ======================================================= */

  T("votre sensibilité et votre intuition",
    "your sensitivity and intuition",
    "tu sensibilidad e intuición",
    "Ihre Sensibilität und Intuition",
    "la vostra sensibilità e intuizione",
    "sua sensibilidade e intuição"),

  T("votre loyauté et votre capacité à comprendre les besoins",
    "your loyalty and ability to understand needs",
    "tu lealtad y capacidad para comprender las necesidades",
    "Ihre Loyalität und Ihre Fähigkeit, Bedürfnisse zu verstehen",
    "la vostra lealtà e capacità di comprendere i bisogni",
    "sua lealdade e capacidade de compreender necessidades"),

  T("votre désir de créer une sécurité durable",
    "your desire to create lasting security",
    "tu deseo de crear una seguridad duradera",
    "Ihr Wunsch, dauerhafte Sicherheit zu schaffen",
    "il vostro desiderio di creare una sicurezza duratura",
    "seu desejo de criar uma segurança duradoura"),

  T("votre capacité à protéger et à faire grandir une idée",
    "your ability to protect and develop an idea",
    "tu capacidad para proteger y hacer crecer una idea",
    "Ihre Fähigkeit, eine Idee zu schützen und wachsen zu lassen",
    "la vostra capacità di proteggere e far crescere un’idea",
    "sua capacidade de proteger e desenvolver uma ideia"),

  T("l’hypersensibilité et le repli",
    "hypersensitivity and withdrawal",
    "la hipersensibilidad y el retraimiento",
    "Hypersensibilität und Rückzug",
    "l’ipersensibilità e il ritiro",
    "a hipersensibilidade e o retraimento"),

  T("la difficulté à séparer les émotions des décisions",
    "difficulty separating emotions from decisions",
    "la dificultad para separar las emociones de las decisiones",
    "Schwierigkeiten, Emotionen von Entscheidungen zu trennen",
    "la difficoltà a separare le emozioni dalle decisioni",
    "a dificuldade de separar emoções de decisões"),

  T("les dépenses influencées par l’état émotionnel",
    "spending influenced by emotional state",
    "los gastos influenciados por el estado emocional",
    "Ausgaben, die vom emotionalen Zustand beeinflusst werden",
    "le spese influenzate dallo stato emotivo",
    "os gastos influenciados pelo estado emocional"),

  T("la peur de quitter des repères familiers",
    "the fear of leaving familiar reference points",
    "el miedo a dejar referencias familiares",
    "die Angst, vertraute Orientierungspunkte zu verlassen",
    "la paura di lasciare riferimenti familiari",
    "o medo de deixar referências familiares"),

  /* =======================================================
     LION
  ======================================================= */

  T("votre chaleur et votre générosité",
    "your warmth and generosity",
    "tu calidez y generosidad",
    "Ihre Herzlichkeit und Großzügigkeit",
    "il vostro calore e generosità",
    "seu calor e generosidade"),

  T("votre charisme et votre confiance",
    "your charisma and confidence",
    "tu carisma y confianza",
    "Ihr Charisma und Selbstvertrauen",
    "il vostro carisma e fiducia",
    "seu carisma e confiança"),

  T("votre ambition et votre sens de la valeur",
    "your ambition and sense of value",
    "tu ambición y sentido del valor",
    "Ihr Ehrgeiz und Ihr Gespür für Wert",
    "la vostra ambizione e senso del valore",
    "sua ambição e senso de valor"),

  T("votre créativité et votre capacité à inspirer",
    "your creativity and ability to inspire",
    "tu creatividad y capacidad para inspirar",
    "Ihre Kreativität und Fähigkeit, andere zu inspirieren",
    "la vostra creatività e capacità di ispirare",
    "sua criatividade e capacidade de inspirar"),

  T("le besoin excessif de reconnaissance",
    "an excessive need for recognition",
    "la necesidad excesiva de reconocimiento",
    "ein übermäßiges Bedürfnis nach Anerkennung",
    "il bisogno eccessivo di riconoscimento",
    "a necessidade excessiva de reconhecimento"),

  T("la difficulté à accepter un rôle moins visible",
    "difficulty accepting a less visible role",
    "la dificultad para aceptar un papel menos visible",
    "Schwierigkeiten, eine weniger sichtbare Rolle zu akzeptieren",
    "la difficoltà ad accettare un ruolo meno visibile",
    "a dificuldade de aceitar um papel menos visível"),

  T("les dépenses liées à l’image ou au prestige",
    "spending related to image or prestige",
    "los gastos relacionados con la imagen o el prestigio",
    "Ausgaben für Image oder Prestige",
    "le spese legate all’immagine o al prestigio",
    "os gastos ligados à imagem ou ao prestígio"),

  T("l’entêtement lorsque des ajustements deviennent nécessaires",
    "stubbornness when adjustments become necessary",
    "la terquedad cuando los ajustes se vuelven necesarios",
    "Sturheit, wenn Anpassungen notwendig werden",
    "l’ostinazione quando diventano necessari degli aggiustamenti",
    "a teimosia quando ajustes se tornam necessários"),

  /* =======================================================
     VIERGE
  ======================================================= */

  T("votre attention et votre fiabilité",
    "your attentiveness and reliability",
    "tu atención y fiabilidad",
    "Ihre Aufmerksamkeit und Zuverlässigkeit",
    "la vostra attenzione e affidabilità",
    "sua atenção e confiabilidade"),

  T("votre méthode et votre sens de l’organisation",
    "your method and organizational skills",
    "tu método y sentido de la organización",
    "Ihre methodische Art und Ihr Organisationstalent",
    "il vostro metodo e senso dell’organizzazione",
    "seu método e senso de organização"),

  T("votre capacité d’analyse et votre prudence",
    "your analytical ability and caution",
    "tu capacidad de análisis y prudencia",
    "Ihre Analysefähigkeit und Vorsicht",
    "la vostra capacità di analisi e prudenza",
    "sua capacidade de análise e prudência"),

  T("votre précision et votre constance",
    "your precision and consistency",
    "tu precisión y constancia",
    "Ihre Präzision und Beständigkeit",
    "la vostra precisione e costanza",
    "sua precisão e constância"),

  T("l’analyse excessive des émotions",
    "overanalyzing emotions",
    "el análisis excesivo de las emociones",
    "übermäßige Analyse von Emotionen",
    "l’analisi eccessiva delle emozioni",
    "a análise excessiva das emoções"),

  T("le perfectionnisme",
    "perfectionism",
    "el perfeccionismo",
    "Perfektionismus",
    "il perfezionismo",
    "o perfeccionismo"),

  T("l’inquiétude devant l’incertitude",
    "worry in the face of uncertainty",
    "la preocupación ante la incertidumbre",
    "Sorge angesichts von Unsicherheit",
    "la preoccupazione di fronte all’incertezza",
    "a preocupação diante da incerteza"),

  T("la difficulté à commencer avant que tout soit parfait",
    "difficulty starting before everything is perfect",
    "la dificultad para empezar antes de que todo sea perfecto",
    "Schwierigkeiten anzufangen, bevor alles perfekt ist",
    "la difficoltà a iniziare prima che tutto sia perfetto",
    "a dificuldade de começar antes que tudo esteja perfeito"),

  /* =======================================================
     BALANCE
  ======================================================= */

  T("votre diplomatie et votre sens de l’harmonie",
    "your diplomacy and sense of harmony",
    "tu diplomacia y sentido de la armonía",
    "Ihre Diplomatie und Ihr Sinn für Harmonie",
    "la vostra diplomazia e senso dell’armonia",
    "sua diplomacia e senso de harmonia"),

  T("votre capacité à collaborer",
    "your ability to collaborate",
    "tu capacidad para colaborar",
    "Ihre Fähigkeit zur Zusammenarbeit",
    "la vostra capacità di collaborare",
    "sua capacidade de colaborar"),

  T("votre recherche d’équilibre",
    "your search for balance",
    "tu búsqueda de equilibrio",
    "Ihr Streben nach Ausgleich",
    "la vostra ricerca di equilibrio",
    "sua busca por equilíbrio"),

  T("votre sens esthétique et relationnel",
    "your aesthetic and interpersonal sense",
    "tu sentido estético y relacional",
    "Ihr ästhetisches und zwischenmenschliches Gespür",
    "il vostro senso estetico e relazionale",
    "seu senso estético e relacional"),

  T("les compromis excessifs",
    "excessive compromises",
    "los compromisos excesivos",
    "übermäßige Kompromisse",
    "i compromessi eccessivi",
    "os compromissos excessivos"),

  T("l’hésitation devant les choix importants",
    "hesitation when facing important choices",
    "la vacilación ante decisiones importantes",
    "Zögern bei wichtigen Entscheidungen",
    "l’esitazione davanti alle scelte importanti",
    "a hesitação diante de escolhas importantes"),

  T("la difficulté à établir des limites claires",
    "difficulty setting clear boundaries",
    "la dificultad para establecer límites claros",
    "Schwierigkeiten, klare Grenzen zu setzen",
    "la difficoltà a stabilire limiti chiari",
    "a dificuldade de estabelecer limites claros"),

  T("la dépendance à l’approbation extérieure",
    "dependence on external approval",
    "la dependencia de la aprobación externa",
    "Abhängigkeit von äußerer Anerkennung",
    "la dipendenza dall’approvazione esterna",
    "a dependência da aprovação externa"),

  /* =======================================================
     SCORPION
  ======================================================= */

  T("votre profondeur et votre intensité émotionnelle",
    "your depth and emotional intensity",
    "tu profundidad e intensidad emocional",
    "Ihre Tiefe und emotionale Intensität",
    "la vostra profondità e intensità emotiva",
    "sua profundidade e intensidade emocional"),

  T("votre détermination et votre lucidité",
    "your determination and clarity",
    "tu determinación y lucidez",
    "Ihre Entschlossenheit und Klarheit",
    "la vostra determinazione e lucidità",
    "sua determinação e lucidez"),

  T("votre instinct stratégique",
    "your strategic instinct",
    "tu instinto estratégico",
    "Ihr strategischer Instinkt",
    "il vostro istinto strategico",
    "seu instinto estratégico"),

  T("votre puissance de transformation",
    "your power of transformation",
    "tu poder de transformación",
    "Ihre Transformationskraft",
    "la vostra forza di trasformazione",
    "seu poder de transformação"),

  T("la méfiance et le besoin de contrôle",
    "mistrust and the need for control",
    "la desconfianza y la necesidad de control",
    "Misstrauen und Kontrollbedürfnis",
    "la diffidenza e il bisogno di controllo",
    "a desconfiança e a necessidade de controle"),

  T("les rapports de force",
    "power struggles",
    "las luchas de poder",
    "Machtkämpfe",
    "i rapporti di forza",
    "as disputas de poder"),

  T("les décisions radicales",
    "radical decisions",
    "las decisiones radicales",
    "radikale Entscheidungen",
    "le decisioni radicali",
    "as decisões radicais"),

  T("la difficulté à abandonner une direction devenue inefficace",
    "difficulty abandoning a direction that has become ineffective",
    "la dificultad para abandonar una dirección que se ha vuelto ineficaz",
    "Schwierigkeiten, eine ineffektiv gewordene Richtung aufzugeben",
    "la difficoltà ad abbandonare una direzione diventata inefficace",
    "a dificuldade de abandonar uma direção que se tornou ineficaz"),

  /* =======================================================
     SAGITTAIRE
  ======================================================= */

  T("votre enthousiasme et votre ouverture",
    "your enthusiasm and openness",
    "tu entusiasmo y apertura",
    "Ihre Begeisterung und Offenheit",
    "il vostro entusiasmo e apertura",
    "seu entusiasmo e abertura"),

  T("votre vision et votre optimisme",
    "your vision and optimism",
    "tu visión y optimismo",
    "Ihre Vision und Ihr Optimismus",
    "la vostra visione e ottimismo",
    "sua visão e otimismo"),

  T("votre capacité à voir grand",
    "your ability to think big",
    "tu capacidad para pensar en grande",
    "Ihre Fähigkeit, groß zu denken",
    "la vostra capacità di pensare in grande",
    "sua capacidade de pensar grande"),

  T("votre audace et votre désir d’expansion",
    "your boldness and desire for expansion",
    "tu audacia y deseo de expansión",
    "Ihr Mut und Ihr Wunsch nach Expansion",
    "la vostra audacia e desiderio di espansione",
    "sua ousadia e desejo de expansão"),

  T("la peur de perdre votre liberté",
    "the fear of losing your freedom",
    "el miedo a perder tu libertad",
    "die Angst, Ihre Freiheit zu verlieren",
    "la paura di perdere la vostra libertà",
    "o medo de perder sua liberdade"),

  T("la dispersion entre plusieurs objectifs",
    "scattering yourself among several goals",
    "la dispersión entre varios objetivos",
    "die Zerstreuung zwischen mehreren Zielen",
    "la dispersione tra più obiettivi",
    "a dispersão entre vários objetivos"),

  T("les excès de confiance",
    "overconfidence",
    "el exceso de confianza",
    "übermäßiges Selbstvertrauen",
    "l’eccesso di fiducia",
    "o excesso de confiança"),

  T("le manque de préparation avant l’action",
    "lack of preparation before taking action",
    "la falta de preparación antes de actuar",
    "mangelnde Vorbereitung vor dem Handeln",
    "la mancanza di preparazione prima dell’azione",
    "a falta de preparação antes de agir"),

  /* =======================================================
     CAPRICORNE
  ======================================================= */

  T("votre loyauté et votre maturité",
    "your loyalty and maturity",
    "tu lealtad y madurez",
    "Ihre Loyalität und Reife",
    "la vostra lealtà e maturità",
    "sua lealdade e maturidade"),

  T("votre discipline et votre ambition",
    "your discipline and ambition",
    "tu disciplina y ambición",
    "Ihre Disziplin und Ihr Ehrgeiz",
    "la vostra disciplina e ambizione",
    "sua disciplina e ambição"),

  T("votre sens de la planification",
    "your planning skills",
    "tu sentido de la planificación",
    "Ihr Planungsgeschick",
    "il vostro senso della pianificazione",
    "seu senso de planejamento"),

  T("votre endurance et votre stratégie",
    "your endurance and strategy",
    "tu resistencia y estrategia",
    "Ihre Ausdauer und Strategie",
    "la vostra resistenza e strategia",
    "sua resistência e estratégia"),

  T("la difficulté à exprimer votre vulnérabilité",
    "difficulty expressing your vulnerability",
    "la dificultad para expresar tu vulnerabilidad",
    "Schwierigkeiten, Ihre Verletzlichkeit auszudrücken",
    "la difficoltà a esprimere la vostra vulnerabilità",
    "a dificuldade de expressar sua vulnerabilidade"),

  T("le surmenage",
    "overwork",
    "el exceso de trabajo",
    "Überarbeitung",
    "il sovraccarico",
    "a sobrecarga"),

  T("une prudence parfois excessive",
    "sometimes excessive caution",
    "una prudencia a veces excesiva",
    "manchmal übermäßige Vorsicht",
    "una prudenza talvolta eccessiva",
    "uma prudência às vezes excessiva"),

  T("la rigidité devant les changements de plan",
    "rigidity when plans change",
    "la rigidez ante los cambios de plan",
    "Starrheit bei Planänderungen",
    "la rigidità davanti ai cambiamenti di programma",
    "a rigidez diante de mudanças de plano"),

  /* =======================================================
     VERSEAU
  ======================================================= */

  T("votre authenticité et votre ouverture d’esprit",
    "your authenticity and open-mindedness",
    "tu autenticidad y apertura mental",
    "Ihre Authentizität und Offenheit",
    "la vostra autenticità e apertura mentale",
    "sua autenticidade e mente aberta"),

  T("votre originalité et votre vision",
    "your originality and vision",
    "tu originalidad y visión",
    "Ihre Originalität und Vision",
    "la vostra originalità e visione",
    "sua originalidade e visão"),

  T("votre capacité à explorer de nouvelles solutions",
    "your ability to explore new solutions",
    "tu capacidad para explorar nuevas soluciones",
    "Ihre Fähigkeit, neue Lösungen zu erkunden",
    "la vostra capacità di esplorare nuove soluzioni",
    "sua capacidade de explorar novas soluções"),

  T("votre inventivité et votre indépendance",
    "your inventiveness and independence",
    "tu inventiva e independencia",
    "Ihr Einfallsreichtum und Ihre Unabhängigkeit",
    "la vostra inventiva e indipendenza",
    "sua inventividade e independência"),

  T("le détachement émotionnel",
    "emotional detachment",
    "el desapego emocional",
    "emotionale Distanz",
    "il distacco emotivo",
    "o desapego emocional"),

  T("la difficulté à suivre des structures trop rigides",
    "difficulty following overly rigid structures",
    "la dificultad para seguir estructuras demasiado rígidas",
    "Schwierigkeiten, zu starren Strukturen zu folgen",
    "la difficoltà a seguire strutture troppo rigide",
    "a dificuldade de seguir estruturas rígidas demais"),

  T("les choix inhabituels insuffisamment vérifiés",
    "unusual choices that have not been sufficiently verified",
    "las decisiones poco habituales insuficientemente verificadas",
    "ungewöhnliche Entscheidungen, die nicht ausreichend geprüft wurden",
    "le scelte insolite non sufficientemente verificate",
    "as escolhas incomuns insuficientemente verificadas"),

  T("les changements brusques de direction",
    "sudden changes of direction",
    "los cambios bruscos de dirección",
    "plötzliche Richtungswechsel",
    "i bruschi cambi di direzione",
    "as mudanças bruscas de direção"),

  /* =======================================================
     POISSONS
  ======================================================= */

  T("votre compassion et votre intuition",
    "your compassion and intuition",
    "tu compasión e intuición",
    "Ihr Mitgefühl und Ihre Intuition",
    "la vostra compassione e intuizione",
    "sua compaixão e intuição"),

  T("votre créativité et votre sensibilité",
    "your creativity and sensitivity",
    "tu creatividad y sensibilidad",
    "Ihre Kreativität und Sensibilität",
    "la vostra creatività e sensibilità",
    "sua criatividade e sensibilidade"),

  T("votre capacité à ressentir le potentiel d’une situation",
    "your ability to sense the potential of a situation",
    "tu capacidad para percibir el potencial de una situación",
    "Ihre Fähigkeit, das Potenzial einer Situation zu spüren",
    "la vostra capacità di percepire il potenziale di una situazione",
    "sua capacidade de perceber o potencial de uma situação"),

  T("votre imagination et votre inspiration",
    "your imagination and inspiration",
    "tu imaginación e inspiración",
    "Ihre Vorstellungskraft und Inspiration",
    "la vostra immaginazione e ispirazione",
    "sua imaginação e inspiração"),

  T("l’idéalisation des relations",
    "idealizing relationships",
    "la idealización de las relaciones",
    "die Idealisierung von Beziehungen",
    "l’idealizzazione delle relazioni",
    "a idealização dos relacionamentos"),

  T("le manque de limites claires",
    "lack of clear boundaries",
    "la falta de límites claros",
    "mangelnde klare Grenzen",
    "la mancanza di limiti chiari",
    "a falta de limites claros"),

  T("les décisions guidées uniquement par l’émotion",
    "decisions guided only by emotion",
    "las decisiones guiadas únicamente por la emoción",
    "Entscheidungen, die ausschließlich von Emotionen geleitet werden",
    "le decisioni guidate unicamente dall’emozione",
    "as decisões guiadas apenas pela emoção"),

  T("la difficulté à transformer une vision en étapes concrètes",
    "difficulty turning a vision into concrete steps",
    "la dificultad para transformar una visión en pasos concretos",
    "Schwierigkeiten, eine Vision in konkrete Schritte umzusetzen",
    "la difficoltà a trasformare una visione in passaggi concreti",
    "a dificuldade de transformar uma visão em etapas concretas"),

  /* =======================================================
     INTRODUCTION
  ======================================================= */

  T("Certaines périodes de votre année possèdent une énergie particulièrement favorable. Elles peuvent soutenir vos relations, votre carrière, vos finances ou le lancement de nouveaux projets.",
    "Certain periods of your year carry particularly favorable energy. They can support your relationships, career, finances, or the launch of new projects.",
    "Ciertos períodos de tu año poseen una energía especialmente favorable. Pueden apoyar tus relaciones, tu carrera, tus finanzas o el lanzamiento de nuevos proyectos.",
    "Bestimmte Phasen Ihres Jahres besitzen eine besonders günstige Energie. Sie können Ihre Beziehungen, Karriere, Finanzen oder den Start neuer Projekte unterstützen.",
    "Alcuni periodi del vostro anno possiedono un’energia particolarmente favorevole. Possono sostenere le vostre relazioni, la carriera, le finanze o il lancio di nuovi progetti.",
    "Certos períodos do seu ano possuem uma energia especialmente favorável. Eles podem apoiar seus relacionamentos, sua carreira, suas finanças ou o lançamento de novos projetos."),

  T("Votre année comprend plusieurs fenêtres d’opportunité. En reconnaissant leur nature, vous pourrez choisir plus consciemment les moments où agir, décider ou vous engager.",
    "Your year includes several windows of opportunity. By recognizing their nature, you can choose more consciously when to act, decide, or commit.",
    "Tu año incluye varias ventanas de oportunidad. Al reconocer su naturaleza, podrás elegir de manera más consciente los momentos para actuar, decidir o comprometerte.",
    "Ihr Jahr enthält mehrere Chancenfenster. Wenn Sie deren Natur erkennen, können Sie bewusster entscheiden, wann Sie handeln, entscheiden oder sich festlegen.",
    "Il vostro anno comprende diverse finestre di opportunità. Riconoscendone la natura, potrete scegliere più consapevolmente quando agire, decidere o impegnarvi.",
    "Seu ano inclui várias janelas de oportunidade. Ao reconhecer a natureza delas, você poderá escolher com mais consciência quando agir, decidir ou se comprometer."),

  T("Les meilleurs moments de votre année ne concernent pas tous les mêmes domaines. Chaque période favorable possède une fonction précise dans votre évolution.",
    "The best moments of your year do not all concern the same areas. Each favorable period has a specific role in your growth.",
    "Los mejores momentos de tu año no se refieren todos a los mismos ámbitos. Cada período favorable cumple una función precisa en tu evolución.",
    "Die besten Momente Ihres Jahres betreffen nicht alle dieselben Bereiche. Jede günstige Phase erfüllt eine bestimmte Funktion in Ihrer Entwicklung.",
    "I momenti migliori del vostro anno non riguardano tutti gli stessi ambiti. Ogni periodo favorevole svolge una funzione precisa nella vostra evoluzione.",
    "Os melhores momentos do seu ano não dizem respeito aos mesmos aspectos. Cada período favorável possui uma função específica em sua evolução."),

  T("Cette analyse met en lumière les mois où votre potentiel sera le plus facile à mobiliser, ainsi que les périodes qui demanderont davantage de prudence.",
    "This analysis highlights the months when your potential will be easiest to mobilize, as well as the periods that will require greater caution.",
    "Este análisis destaca los meses en los que será más fácil movilizar tu potencial, así como los períodos que requerirán mayor prudencia.",
    "Diese Analyse zeigt die Monate, in denen sich Ihr Potenzial am leichtesten mobilisieren lässt, sowie die Phasen, die mehr Vorsicht erfordern.",
    "Questa analisi mette in luce i mesi in cui il vostro potenziale sarà più facile da mobilitare, così come i periodi che richiederanno maggiore prudenza.",
    "Esta análise destaca os meses em que seu potencial será mais fácil de mobilizar, assim como os períodos que exigirão mais prudência."),

  T("Votre calendrier annuel révèle plusieurs moments stratégiques. Ils pourront faciliter certaines décisions lorsque vos actions restent cohérentes avec vos priorités.",
    "Your yearly calendar reveals several strategic moments. They can make certain decisions easier when your actions remain aligned with your priorities.",
    "Tu calendario anual revela varios momentos estratégicos. Podrán facilitar ciertas decisiones cuando tus acciones sigan siendo coherentes con tus prioridades.",
    "Ihr Jahreskalender zeigt mehrere strategische Momente. Sie können bestimmte Entscheidungen erleichtern, wenn Ihre Handlungen mit Ihren Prioritäten übereinstimmen.",
    "Il vostro calendario annuale rivela diversi momenti strategici. Potranno facilitare alcune decisioni quando le vostre azioni rimangono coerenti con le vostre priorità.",
    "Seu calendário anual revela vários momentos estratégicos. Eles poderão facilitar certas decisões quando suas ações permanecerem coerentes com suas prioridades."),

  /* =======================================================
     CATEGORY TITLES
  ======================================================= */

  T("Meilleure période en amour",
    "Best period for love",
    "Mejor período para el amor",
    "Beste Zeit für die Liebe",
    "Periodo migliore per l’amore",
    "Melhor período para o amor"),

  T("Meilleure période professionnelle",
    "Best professional period",
    "Mejor período profesional",
    "Beste berufliche Phase",
    "Periodo professionale migliore",
    "Melhor período profissional"),

  T("Meilleure période financière",
    "Best financial period",
    "Mejor período financiero",
    "Beste finanzielle Phase",
    "Periodo finanziario migliore",
    "Melhor período financeiro"),

  T("Meilleure période pour entreprendre",
    "Best period to start something",
    "Mejor período para emprender",
    "Beste Zeit für neue Vorhaben",
    "Periodo migliore per intraprendere",
    "Melhor período para empreender"),

  /* =======================================================
     LOVE
  ======================================================= */

  T("Ce mois favorise les rapprochements, les conversations sincères et les décisions affectives importantes. ${profile.loveStrength} devient un avantage essentiel.",
    "This month favors closer connections, sincere conversations, and important emotional decisions. ${profile.loveStrength} becomes an essential advantage.",
    "Este mes favorece los acercamientos, las conversaciones sinceras y las decisiones afectivas importantes. ${profile.loveStrength} se convierte en una ventaja esencial.",
    "Dieser Monat begünstigt Annäherungen, aufrichtige Gespräche und wichtige emotionale Entscheidungen. ${profile.loveStrength} wird zu einem entscheidenden Vorteil.",
    "Questo mese favorisce gli avvicinamenti, le conversazioni sincere e le decisioni affettive importanti. ${profile.loveStrength} diventa un vantaggio essenziale.",
    "Este mês favorece aproximações, conversas sinceras e decisões afetivas importantes. ${profile.loveStrength} torna-se uma vantagem essencial."),

  T("Le climat relationnel de cette période soutient une meilleure compréhension de vos besoins. Vous pourrez renforcer un lien existant ou accueillir une nouvelle ouverture affective.",
    "The relationship climate of this period supports a better understanding of your needs. You may strengthen an existing bond or welcome a new emotional opening.",
    "El clima relacional de este período favorece una mejor comprensión de tus necesidades. Podrás fortalecer un vínculo existente o abrirte a una nueva posibilidad afectiva.",
    "Das Beziehungsklima dieser Phase unterstützt ein besseres Verständnis Ihrer Bedürfnisse. Sie können eine bestehende Verbindung stärken oder sich einer neuen emotionalen Öffnung zuwenden.",
    "Il clima relazionale di questo periodo favorisce una migliore comprensione dei vostri bisogni. Potrete rafforzare un legame esistente o accogliere una nuova apertura affettiva.",
    "O clima dos relacionamentos neste período favorece uma melhor compreensão de suas necessidades. Você poderá fortalecer um vínculo existente ou acolher uma nova abertura afetiva."),

  T("Cette période possède une énergie favorable pour exprimer vos sentiments, clarifier une relation ou construire une plus grande complicité.",
    "This period carries favorable energy for expressing your feelings, clarifying a relationship, or building greater closeness.",
    "Este período posee una energía favorable para expresar tus sentimientos, aclarar una relación o construir una mayor complicidad.",
    "Diese Phase besitzt eine günstige Energie, um Gefühle auszudrücken, eine Beziehung zu klären oder mehr Verbundenheit aufzubauen.",
    "Questo periodo possiede un’energia favorevole per esprimere i vostri sentimenti, chiarire una relazione o costruire una maggiore complicità.",
    "Este período possui uma energia favorável para expressar seus sentimentos, esclarecer um relacionamento ou construir maior cumplicidade."),

  T("Les relations gagnent en fluidité durant ce mois. Votre disponibilité émotionnelle pourra créer un rapprochement significatif.",
    "Relationships become more fluid during this month. Your emotional availability may create a meaningful closer connection.",
    "Las relaciones ganan fluidez durante este mes. Tu disponibilidad emocional podrá crear un acercamiento significativo.",
    "Beziehungen werden in diesem Monat fließender. Ihre emotionale Offenheit kann eine bedeutsame Annäherung ermöglichen.",
    "Le relazioni acquistano maggiore fluidità durante questo mese. La vostra disponibilità emotiva potrà creare un avvicinamento significativo.",
    "Os relacionamentos ganham mais fluidez durante este mês. Sua disponibilidade emocional poderá criar uma aproximação significativa."),

  T("Ce mois vous aide à mieux unir désir, confiance et réciprocité. Une relation peut évoluer de manière plus naturelle et plus équilibrée.",
    "This month helps you better combine desire, trust, and reciprocity. A relationship can evolve in a more natural and balanced way.",
    "Este mes te ayuda a unir mejor deseo, confianza y reciprocidad. Una relación puede evolucionar de manera más natural y equilibrada.",
    "Dieser Monat hilft Ihnen, Wunsch, Vertrauen und Gegenseitigkeit besser zu verbinden. Eine Beziehung kann sich natürlicher und ausgewogener entwickeln.",
    "Questo mese vi aiuta a unire meglio desiderio, fiducia e reciprocità. Una relazione può evolvere in modo più naturale ed equilibrato.",
    "Este mês ajuda você a unir melhor desejo, confiança e reciprocidade. Um relacionamento pode evoluir de forma mais natural e equilibrada."),

  T("Utilisez ${profile.loveStrength}, mais restez attentif à ${profile.loveChallenge}.",
    "Use ${profile.loveStrength}, but remain attentive to ${profile.loveChallenge}.",
    "Utiliza ${profile.loveStrength}, pero mantente atento a ${profile.loveChallenge}.",
    "Nutzen Sie ${profile.loveStrength}, bleiben Sie jedoch aufmerksam gegenüber ${profile.loveChallenge}.",
    "Utilizzate ${profile.loveStrength}, ma restate attenti a ${profile.loveChallenge}.",
    "Use ${profile.loveStrength}, mas permaneça atento a ${profile.loveChallenge}."),

  T("Exprimez vos besoins clairement sans chercher à contrôler la réaction de l’autre.",
    "Express your needs clearly without trying to control the other person's reaction.",
    "Expresa tus necesidades con claridad sin intentar controlar la reacción de la otra persona.",
    "Drücken Sie Ihre Bedürfnisse klar aus, ohne die Reaktion des anderen kontrollieren zu wollen.",
    "Esprimete chiaramente i vostri bisogni senza cercare di controllare la reazione dell’altra persona.",
    "Expresse suas necessidades com clareza sem tentar controlar a reação da outra pessoa."),

  T("Accordez davantage de place aux échanges authentiques qu’aux suppositions.",
    "Give more space to authentic exchanges than to assumptions.",
    "Da más espacio a los intercambios auténticos que a las suposiciones.",
    "Geben Sie authentischem Austausch mehr Raum als Vermutungen.",
    "Date più spazio agli scambi autentici che alle supposizioni.",
    "Dê mais espaço a trocas autênticas do que a suposições."),

  T("Observez la réciprocité avant de vous engager plus profondément.",
    "Observe reciprocity before committing more deeply.",
    "Observa la reciprocidad antes de comprometerte más profundamente.",
    "Beobachten Sie die Gegenseitigkeit, bevor Sie sich tiefer binden.",
    "Osservate la reciprocità prima di impegnarvi più profondamente.",
    "Observe a reciprocidade antes de se envolver mais profundamente."),

  T("Profitez de cette période pour créer un climat de confiance durable.",
    "Use this period to create a lasting climate of trust.",
    "Aprovecha este período para crear un clima de confianza duradero.",
    "Nutzen Sie diese Phase, um ein dauerhaftes Klima des Vertrauens zu schaffen.",
    "Approfittate di questo periodo per creare un clima di fiducia duraturo.",
    "Aproveite este período para criar um clima de confiança duradouro."),

  /* =======================================================
     CAREER
  ======================================================= */

  T("Cette période favorise la progression, la reconnaissance et les décisions liées à votre carrière. ${profile.careerStrength} peut vous permettre de vous démarquer.",
    "This period favors progress, recognition, and career-related decisions. ${profile.careerStrength} can help you stand out.",
    "Este período favorece el progreso, el reconocimiento y las decisiones relacionadas con tu carrera. ${profile.careerStrength} puede ayudarte a destacar.",
    "Diese Phase begünstigt Fortschritt, Anerkennung und Entscheidungen rund um Ihre Karriere. ${profile.careerStrength} kann Ihnen helfen, sich hervorzuheben.",
    "Questo periodo favorisce il progresso, il riconoscimento e le decisioni legate alla vostra carriera. ${profile.careerStrength} può aiutarvi a distinguervi.",
    "Este período favorece o progresso, o reconhecimento e decisões ligadas à sua carreira. ${profile.careerStrength} pode ajudar você a se destacar."),

  T("Le mois soutient les démarches professionnelles et les projets ambitieux. Une occasion de montrer votre valeur ou d’élargir vos responsabilités peut apparaître.",
    "The month supports professional initiatives and ambitious projects. An opportunity to demonstrate your value or expand your responsibilities may appear.",
    "El mes favorece las gestiones profesionales y los proyectos ambiciosos. Puede surgir una oportunidad para demostrar tu valor o ampliar tus responsabilidades.",
    "Der Monat unterstützt berufliche Schritte und ehrgeizige Projekte. Eine Gelegenheit, Ihren Wert zu zeigen oder Ihre Verantwortung zu erweitern, kann sich ergeben.",
    "Il mese sostiene le iniziative professionali e i progetti ambiziosi. Potrebbe presentarsi un’occasione per mostrare il vostro valore o ampliare le vostre responsabilità.",
    "O mês favorece iniciativas profissionais e projetos ambiciosos. Poderá surgir uma oportunidade de demonstrar seu valor ou ampliar suas responsabilidades."),

  T("Votre position professionnelle peut évoluer favorablement. Les actions entreprises durant cette période auront davantage de visibilité.",
    "Your professional position may evolve favorably. Actions taken during this period will receive greater visibility.",
    "Tu posición profesional puede evolucionar favorablemente. Las acciones realizadas durante este período tendrán mayor visibilidad.",
    "Ihre berufliche Position kann sich günstig entwickeln. Handlungen in dieser Phase werden stärker wahrgenommen.",
    "La vostra posizione professionale può evolvere favorevolmente. Le azioni intraprese durante questo periodo avranno maggiore visibilità.",
    "Sua posição profissional poderá evoluir favoravelmente. As ações realizadas durante este período terão maior visibilidade."),

  T("Ce mois encourage les négociations, les candidatures, les présentations et les décisions capables de faire progresser votre parcours.",
    "This month encourages negotiations, applications, presentations, and decisions capable of advancing your path.",
    "Este mes favorece las negociaciones, las candidaturas, las presentaciones y las decisiones capaces de hacer avanzar tu trayectoria.",
    "Dieser Monat fördert Verhandlungen, Bewerbungen, Präsentationen und Entscheidungen, die Ihren Weg voranbringen können.",
    "Questo mese favorisce negoziazioni, candidature, presentazioni e decisioni capaci di far progredire il vostro percorso.",
    "Este mês favorece negociações, candidaturas, apresentações e decisões capazes de fazer seu percurso avançar."),

  T("Une énergie constructive soutient votre ambition. Votre constance et votre capacité à saisir le bon moment pourront produire un résultat important.",
    "Constructive energy supports your ambition. Your consistency and ability to seize the right moment may produce an important result.",
    "Una energía constructiva apoya tu ambición. Tu constancia y tu capacidad para aprovechar el momento adecuado podrán producir un resultado importante.",
    "Eine konstruktive Energie unterstützt Ihren Ehrgeiz. Ihre Beständigkeit und Ihre Fähigkeit, den richtigen Moment zu nutzen, können zu einem wichtigen Ergebnis führen.",
    "Un’energia costruttiva sostiene la vostra ambizione. La vostra costanza e la capacità di cogliere il momento giusto potranno produrre un risultato importante.",
    "Uma energia construtiva apoia sua ambição. Sua constância e sua capacidade de aproveitar o momento certo poderão produzir um resultado importante."),

  T("Appuyez-vous sur ${profile.careerStrength}, tout en évitant ${profile.careerChallenge}.",
    "Rely on ${profile.careerStrength} while avoiding ${profile.careerChallenge}.",
    "Apóyate en ${profile.careerStrength}, evitando al mismo tiempo ${profile.careerChallenge}.",
    "Stützen Sie sich auf ${profile.careerStrength} und vermeiden Sie gleichzeitig ${profile.careerChallenge}.",
    "Fate affidamento su ${profile.careerStrength}, evitando al tempo stesso ${profile.careerChallenge}.",
    "Apoie-se em ${profile.careerStrength}, evitando ao mesmo tempo ${profile.careerChallenge}."),

  T("Présentez clairement votre valeur et les résultats que vous pouvez apporter.",
    "Clearly present your value and the results you can deliver.",
    "Presenta claramente tu valor y los resultados que puedes aportar.",
    "Stellen Sie Ihren Wert und die Ergebnisse, die Sie liefern können, klar dar.",
    "Presentate chiaramente il vostro valore e i risultati che potete apportare.",
    "Apresente claramente seu valor e os resultados que você pode oferecer."),

  T("Concentrez-vous sur les occasions qui servent réellement votre progression à long terme.",
    "Focus on opportunities that truly support your long-term progress.",
    "Concéntrate en las oportunidades que realmente favorecen tu progreso a largo plazo.",
    "Konzentrieren Sie sich auf Chancen, die Ihren langfristigen Fortschritt wirklich unterstützen.",
    "Concentratevi sulle opportunità che servono realmente il vostro progresso a lungo termine.",
    "Concentre-se nas oportunidades que realmente favorecem seu progresso de longo prazo."),

  T("Préparez vos démarches avant d’agir afin de profiter pleinement de cette période.",
    "Prepare your steps before acting so you can fully benefit from this period.",
    "Prepara tus gestiones antes de actuar para aprovechar plenamente este período.",
    "Bereiten Sie Ihre Schritte vor dem Handeln vor, um diese Phase voll nutzen zu können.",
    "Preparate le vostre iniziative prima di agire per sfruttare pienamente questo periodo.",
    "Prepare suas ações antes de agir para aproveitar plenamente este período."),

  T("N’attendez pas que votre travail soit remarqué spontanément : rendez vos réalisations visibles.",
    "Do not wait for your work to be noticed spontaneously: make your achievements visible.",
    "No esperes a que tu trabajo sea reconocido espontáneamente: haz visibles tus logros.",
    "Warten Sie nicht darauf, dass Ihre Arbeit von selbst bemerkt wird: Machen Sie Ihre Leistungen sichtbar.",
    "Non aspettate che il vostro lavoro venga notato spontaneamente: rendete visibili i vostri risultati.",
    "Não espere que seu trabalho seja percebido espontaneamente: torne suas realizações visíveis."),

  /* =======================================================
     FINANCE
  ======================================================= */

  T("Cette période favorise les décisions matérielles, l’amélioration des revenus et la consolidation de votre sécurité. ${profile.financeStrength} sera particulièrement utile.",
    "This period favors material decisions, improved income, and stronger security. ${profile.financeStrength} will be particularly useful.",
    "Este período favorece las decisiones materiales, la mejora de los ingresos y la consolidación de tu seguridad. ${profile.financeStrength} será especialmente útil.",
    "Diese Phase begünstigt materielle Entscheidungen, Einkommensverbesserungen und die Festigung Ihrer Sicherheit. ${profile.financeStrength} wird besonders hilfreich sein.",
    "Questo periodo favorisce le decisioni materiali, il miglioramento delle entrate e il consolidamento della vostra sicurezza. ${profile.financeStrength} sarà particolarmente utile.",
    "Este período favorece decisões materiais, melhoria da renda e consolidação da sua segurança. ${profile.financeStrength} será especialmente útil."),

  T("Le mois possède un potentiel financier constructif. Une occasion d’améliorer votre organisation, vos revenus ou votre stratégie peut se présenter.",
    "The month has constructive financial potential. An opportunity to improve your organization, income, or strategy may appear.",
    "El mes posee un potencial financiero constructivo. Puede surgir una oportunidad para mejorar tu organización, tus ingresos o tu estrategia.",
    "Der Monat besitzt konstruktives finanzielles Potenzial. Eine Gelegenheit, Ihre Organisation, Ihr Einkommen oder Ihre Strategie zu verbessern, kann sich ergeben.",
    "Il mese possiede un potenziale finanziario costruttivo. Potrebbe presentarsi un’occasione per migliorare la vostra organizzazione, le entrate o la strategia.",
    "O mês possui um potencial financeiro construtivo. Poderá surgir uma oportunidade de melhorar sua organização, sua renda ou sua estratégia."),

  T("Les questions d’argent bénéficient d’un climat plus favorable. Les décisions réfléchies pourront produire des résultats durables.",
    "Money matters benefit from a more favorable climate. Thoughtful decisions may produce lasting results.",
    "Las cuestiones económicas se benefician de un clima más favorable. Las decisiones reflexivas podrán producir resultados duraderos.",
    "Finanzielle Fragen profitieren von einem günstigeren Klima. Durchdachte Entscheidungen können nachhaltige Ergebnisse hervorbringen.",
    "Le questioni finanziarie beneficiano di un clima più favorevole. Le decisioni ponderate potranno produrre risultati duraturi.",
    "As questões financeiras se beneficiam de um clima mais favorável. Decisões bem pensadas poderão produzir resultados duradouros."),

  T("Cette période vous aide à mieux reconnaître les choix capables de renforcer votre stabilité matérielle.",
    "This period helps you better recognize choices that can strengthen your material stability.",
    "Este período te ayuda a reconocer mejor las decisiones capaces de reforzar tu estabilidad material.",
    "Diese Phase hilft Ihnen, Entscheidungen besser zu erkennen, die Ihre materielle Stabilität stärken können.",
    "Questo periodo vi aiuta a riconoscere meglio le scelte capaci di rafforzare la vostra stabilità materiale.",
    "Este período ajuda você a reconhecer melhor as escolhas capazes de fortalecer sua estabilidade material."),

  T("Une possibilité de progression financière peut apparaître, à condition de vérifier les détails et de conserver une vision réaliste.",
    "An opportunity for financial progress may appear, provided you check the details and maintain a realistic perspective.",
    "Puede surgir una posibilidad de progreso financiero, siempre que compruebes los detalles y mantengas una visión realista.",
    "Eine Möglichkeit für finanziellen Fortschritt kann sich ergeben, sofern Sie die Details prüfen und realistisch bleiben.",
    "Può presentarsi una possibilità di progresso finanziario, a condizione di verificare i dettagli e mantenere una visione realistica.",
    "Poderá surgir uma possibilidade de progresso financeiro, desde que você verifique os detalhes e mantenha uma visão realista."),

  T("Utilisez ${profile.financeStrength}, mais surveillez ${profile.financeChallenge}.",
    "Use ${profile.financeStrength}, but watch out for ${profile.financeChallenge}.",
    "Utiliza ${profile.financeStrength}, pero vigila ${profile.financeChallenge}.",
    "Nutzen Sie ${profile.financeStrength}, behalten Sie jedoch ${profile.financeChallenge} im Blick.",
    "Utilizzate ${profile.financeStrength}, ma fate attenzione a ${profile.financeChallenge}.",
    "Use ${profile.financeStrength}, mas fique atento a ${profile.financeChallenge}."),

  T("Analysez les bénéfices et les risques avant de prendre une décision importante.",
    "Analyze the benefits and risks before making an important decision.",
    "Analiza los beneficios y los riesgos antes de tomar una decisión importante.",
    "Analysieren Sie Nutzen und Risiken, bevor Sie eine wichtige Entscheidung treffen.",
    "Analizzate i benefici e i rischi prima di prendere una decisione importante.",
    "Analise os benefícios e os riscos antes de tomar uma decisão importante."),

  T("Privilégiez les occasions capables de produire une amélioration durable.",
    "Favor opportunities capable of producing lasting improvement.",
    "Da prioridad a las oportunidades capaces de producir una mejora duradera.",
    "Bevorzugen Sie Chancen, die eine nachhaltige Verbesserung bewirken können.",
    "Privilegiate le opportunità capaci di produrre un miglioramento duraturo.",
    "Priorize oportunidades capazes de produzir uma melhoria duradoura."),

  T("Profitez de ce mois pour revoir vos prix, vos revenus, vos dépenses ou votre stratégie.",
    "Use this month to review your prices, income, expenses, or strategy.",
    "Aprovecha este mes para revisar tus precios, ingresos, gastos o estrategia.",
    "Nutzen Sie diesen Monat, um Preise, Einkommen, Ausgaben oder Ihre Strategie zu überprüfen.",
    "Approfittate di questo mese per rivedere prezzi, entrate, spese o strategia.",
    "Aproveite este mês para revisar seus preços, sua renda, suas despesas ou sua estratégia."),

  T("Conservez une marge de sécurité même lorsque la période semble favorable.",
    "Maintain a safety margin even when the period seems favorable.",
    "Mantén un margen de seguridad incluso cuando el período parezca favorable.",
    "Behalten Sie auch in einer günstigen Phase einen Sicherheitsspielraum.",
    "Mantenete un margine di sicurezza anche quando il periodo sembra favorevole.",
    "Mantenha uma margem de segurança mesmo quando o período parecer favorável."),

  /* =======================================================
     PROJECT
  ======================================================= */

  T("Ce mois favorise le lancement, la relance ou l’accélération d’un projet important. ${profile.projectStrength} devient l’un de vos principaux atouts.",
    "This month favors launching, relaunching, or accelerating an important project. ${profile.projectStrength} becomes one of your main strengths.",
    "Este mes favorece el lanzamiento, el relanzamiento o la aceleración de un proyecto importante. ${profile.projectStrength} se convierte en uno de tus principales recursos.",
    "Dieser Monat begünstigt den Start, Neustart oder die Beschleunigung eines wichtigen Projekts. ${profile.projectStrength} wird zu einer Ihrer wichtigsten Stärken.",
    "Questo mese favorisce il lancio, il rilancio o l’accelerazione di un progetto importante. ${profile.projectStrength} diventa uno dei vostri principali punti di forza.",
    "Este mês favorece o lançamento, a retomada ou a aceleração de um projeto importante. ${profile.projectStrength} torna-se um dos seus principais pontos fortes."),

  T("Une énergie de commencement soutient vos initiatives. Les actions posées maintenant peuvent créer un mouvement durable.",
    "An energy of beginnings supports your initiatives. Actions taken now can create lasting momentum.",
    "Una energía de comienzo apoya tus iniciativas. Las acciones realizadas ahora pueden crear un impulso duradero.",
    "Eine Energie des Neubeginns unterstützt Ihre Initiativen. Handlungen, die Sie jetzt setzen, können nachhaltige Dynamik schaffen.",
    "Un’energia di inizio sostiene le vostre iniziative. Le azioni intraprese ora possono creare uno slancio duraturo.",
    "Uma energia de começo apoia suas iniciativas. As ações realizadas agora podem criar um movimento duradouro."),

  T("Cette période vous aide à transformer une idée en plan concret. Votre motivation sera plus facile à mobiliser.",
    "This period helps you turn an idea into a concrete plan. Your motivation will be easier to mobilize.",
    "Este período te ayuda a transformar una idea en un plan concreto. Te resultará más fácil movilizar tu motivación.",
    "Diese Phase hilft Ihnen, eine Idee in einen konkreten Plan umzusetzen. Ihre Motivation lässt sich leichter mobilisieren.",
    "Questo periodo vi aiuta a trasformare un’idea in un piano concreto. La vostra motivazione sarà più facile da mobilitare.",
    "Este período ajuda você a transformar uma ideia em um plano concreto. Sua motivação será mais fácil de mobilizar."),

  T("Le mois possède un potentiel favorable pour officialiser une décision, présenter un projet ou commencer une nouvelle étape.",
    "The month has favorable potential for formalizing a decision, presenting a project, or beginning a new stage.",
    "El mes posee un potencial favorable para formalizar una decisión, presentar un proyecto o comenzar una nueva etapa.",
    "Der Monat bietet günstiges Potenzial, um eine Entscheidung offiziell zu machen, ein Projekt vorzustellen oder eine neue Etappe zu beginnen.",
    "Il mese possiede un potenziale favorevole per ufficializzare una decisione, presentare un progetto o iniziare una nuova fase.",
    "O mês possui um potencial favorável para formalizar uma decisão, apresentar um projeto ou iniciar uma nova etapa."),

  T("Une fenêtre d’action s’ouvre devant vous. Elle favorise les projets préparés avec sérieux et portés par une intention claire.",
    "A window for action is opening before you. It favors projects prepared seriously and driven by a clear intention.",
    "Se abre ante ti una ventana de acción. Favorece los proyectos preparados con seriedad y guiados por una intención clara.",
    "Ein Handlungsfenster öffnet sich vor Ihnen. Es begünstigt Projekte, die sorgfältig vorbereitet und von einer klaren Absicht getragen werden.",
    "Si apre davanti a voi una finestra d’azione. Favorisce i progetti preparati con serietà e sostenuti da un’intenzione chiara.",
    "Uma janela de ação se abre diante de você. Ela favorece projetos preparados com seriedade e guiados por uma intenção clara."),

  T("Faites confiance à ${profile.projectStrength}, mais évitez ${profile.projectChallenge}.",
    "Trust ${profile.projectStrength}, but avoid ${profile.projectChallenge}.",
    "Confía en ${profile.projectStrength}, pero evita ${profile.projectChallenge}.",
    "Vertrauen Sie auf ${profile.projectStrength}, vermeiden Sie jedoch ${profile.projectChallenge}.",
    "Fidatevi di ${profile.projectStrength}, ma evitate ${profile.projectChallenge}.",
    "Confie em ${profile.projectStrength}, mas evite ${profile.projectChallenge}."),

  T("Définissez la première étape concrète avant de chercher à tout accomplir.",
    "Define the first concrete step before trying to accomplish everything.",
    "Define el primer paso concreto antes de intentar lograrlo todo.",
    "Definieren Sie den ersten konkreten Schritt, bevor Sie versuchen, alles zu erreichen.",
    "Definite il primo passo concreto prima di cercare di realizzare tutto.",
    "Defina a primeira etapa concreta antes de tentar realizar tudo."),

  T("Utilisez cette période pour créer un élan, puis protégez-le avec une organisation réaliste.",
    "Use this period to create momentum, then protect it with realistic organization.",
    "Utiliza este período para crear impulso y luego protégelo con una organización realista.",
    "Nutzen Sie diese Phase, um Dynamik aufzubauen, und schützen Sie sie anschließend durch realistische Organisation.",
    "Utilizzate questo periodo per creare slancio, poi proteggetelo con un’organizzazione realistica.",
    "Use este período para criar impulso e depois proteja-o com uma organização realista."),

  T("Vérifiez que votre projet correspond toujours à vos priorités à long terme.",
    "Make sure your project still matches your long-term priorities.",
    "Comprueba que tu proyecto siga correspondiendo a tus prioridades a largo plazo.",
    "Prüfen Sie, ob Ihr Projekt weiterhin zu Ihren langfristigen Prioritäten passt.",
    "Verificate che il vostro progetto corrisponda ancora alle vostre priorità a lungo termine.",
    "Verifique se seu projeto ainda corresponde às suas prioridades de longo prazo."),

  T("Commencez avec une structure simple que vous pourrez améliorer progressivement.",
    "Start with a simple structure that you can improve gradually.",
    "Empieza con una estructura sencilla que puedas mejorar progresivamente.",
    "Beginnen Sie mit einer einfachen Struktur, die Sie schrittweise verbessern können.",
    "Iniziate con una struttura semplice che potrete migliorare progressivamente.",
    "Comece com uma estrutura simples que poderá melhorar progressivamente."),

  /* =======================================================
     FAVORABLE INTRODUCTION
  ======================================================= */

  T("Ces trois mois possèdent les scores les plus élevés de votre calendrier annuel. Ils représentent vos principales fenêtres d’expansion et d’action.",
    "These three months have the highest scores in your yearly calendar. They represent your main windows for expansion and action.",
    "Estos tres meses poseen las puntuaciones más altas de tu calendario anual. Representan tus principales ventanas de expansión y acción.",
    "Diese drei Monate haben die höchsten Werte in Ihrem Jahreskalender. Sie stellen Ihre wichtigsten Fenster für Expansion und Handeln dar.",
    "Questi tre mesi possiedono i punteggi più alti del vostro calendario annuale. Rappresentano le principali finestre di espansione e azione.",
    "Esses três meses possuem as pontuações mais altas do seu calendário anual. Eles representam suas principais janelas de expansão e ação."),

  T("Les périodes suivantes concentrent le potentiel le plus favorable de votre année. Elles pourront soutenir plusieurs avancées importantes.",
    "The following periods concentrate the most favorable potential of your year. They may support several important advances.",
    "Los siguientes períodos concentran el potencial más favorable de tu año. Podrán apoyar varios avances importantes.",
    "Die folgenden Phasen bündeln das günstigste Potenzial Ihres Jahres. Sie können mehrere wichtige Fortschritte unterstützen.",
    "I periodi seguenti concentrano il potenziale più favorevole del vostro anno. Potranno sostenere diversi progressi importanti.",
    "Os períodos a seguir concentram o potencial mais favorável do seu ano. Eles poderão apoiar vários avanços importantes."),

  T("Ces mois offrent un climat particulièrement constructif. Vos initiatives pourront y rencontrer moins de résistance et davantage d’ouverture.",
    "These months offer a particularly constructive climate. Your initiatives may encounter less resistance and greater openness.",
    "Estos meses ofrecen un clima especialmente constructivo. Tus iniciativas podrán encontrar menos resistencia y mayor apertura.",
    "Diese Monate bieten ein besonders konstruktives Klima. Ihre Initiativen können auf weniger Widerstand und mehr Offenheit stoßen.",
    "Questi mesi offrono un clima particolarmente costruttivo. Le vostre iniziative potranno incontrare meno resistenza e maggiore apertura.",
    "Esses meses oferecem um clima especialmente construtivo. Suas iniciativas poderão encontrar menos resistência e mais abertura."),

  T("Votre calendrier révèle trois périodes majeures durant lesquelles votre énergie, votre clarté et vos possibilités seront renforcées.",
    "Your calendar reveals three major periods during which your energy, clarity, and possibilities will be strengthened.",
    "Tu calendario revela tres períodos importantes durante los cuales tu energía, claridad y posibilidades estarán reforzadas.",
    "Ihr Kalender zeigt drei wichtige Phasen, in denen Ihre Energie, Klarheit und Möglichkeiten gestärkt werden.",
    "Il vostro calendario rivela tre periodi importanti durante i quali la vostra energia, chiarezza e possibilità saranno rafforzate.",
    "Seu calendário revela três períodos importantes durante os quais sua energia, clareza e possibilidades serão fortalecidas."),

  T("Ces fenêtres favorables méritent une attention particulière. Elles peuvent devenir des moments stratégiques pour faire progresser vos priorités.",
    "These favorable windows deserve special attention. They can become strategic moments for advancing your priorities.",
    "Estas ventanas favorables merecen una atención especial. Pueden convertirse en momentos estratégicos para hacer avanzar tus prioridades.",
    "Diese günstigen Zeitfenster verdienen besondere Aufmerksamkeit. Sie können zu strategischen Momenten werden, um Ihre Prioritäten voranzubringen.",
    "Queste finestre favorevoli meritano un’attenzione particolare. Possono diventare momenti strategici per far progredire le vostre priorità.",
    "Essas janelas favoráveis merecem atenção especial. Elas podem se tornar momentos estratégicos para fazer suas prioridades avançarem."),

  /* =======================================================
     CAUTION INTRODUCTION
  ======================================================= */

  T("Ces périodes demandent davantage de vigilance. Elles ne sont pas nécessairement négatives, mais elles favorisent la réflexion, les corrections et la prudence.",
    "These periods require greater vigilance. They are not necessarily negative, but they favor reflection, correction, and caution.",
    "Estos períodos requieren mayor vigilancia. No son necesariamente negativos, pero favorecen la reflexión, las correcciones y la prudencia.",
    "Diese Phasen erfordern mehr Aufmerksamkeit. Sie sind nicht unbedingt negativ, fördern jedoch Reflexion, Korrekturen und Vorsicht.",
    "Questi periodi richiedono maggiore attenzione. Non sono necessariamente negativi, ma favoriscono la riflessione, le correzioni e la prudenza.",
    "Esses períodos exigem mais atenção. Eles não são necessariamente negativos, mas favorecem reflexão, correções e prudência."),

  T("Les mois suivants possèdent une énergie plus exigeante. Il sera préférable d’y éviter les décisions impulsives et les engagements insuffisamment préparés.",
    "The following months carry more demanding energy. It will be better to avoid impulsive decisions and insufficiently prepared commitments.",
    "Los siguientes meses poseen una energía más exigente. Será preferible evitar las decisiones impulsivas y los compromisos insuficientemente preparados.",
    "Die folgenden Monate besitzen eine anspruchsvollere Energie. Es ist besser, impulsive Entscheidungen und unzureichend vorbereitete Verpflichtungen zu vermeiden.",
    "I mesi seguenti possiedono un’energia più esigente. Sarà preferibile evitare decisioni impulsive e impegni non sufficientemente preparati.",
    "Os meses a seguir possuem uma energia mais exigente. Será melhor evitar decisões impulsivas e compromissos insuficientemente preparados."),

  T("Ces périodes peuvent révéler des limites, des retards ou des tensions utiles à votre évolution. La patience deviendra alors un avantage.",
    "These periods may reveal limits, delays, or tensions that are useful to your growth. Patience will then become an advantage.",
    "Estos períodos pueden revelar límites, retrasos o tensiones útiles para tu evolución. La paciencia se convertirá entonces en una ventaja.",
    "Diese Phasen können Grenzen, Verzögerungen oder Spannungen sichtbar machen, die Ihrer Entwicklung dienen. Geduld wird dann zu einem Vorteil.",
    "Questi periodi possono rivelare limiti, ritardi o tensioni utili alla vostra evoluzione. La pazienza diventerà allora un vantaggio.",
    "Esses períodos podem revelar limites, atrasos ou tensões úteis à sua evolução. A paciência se tornará então uma vantagem."),

  T("Votre calendrier identifie certains mois où votre énergie devra être mieux protégée. Ils seront plus adaptés aux ajustements qu’aux prises de risque.",
    "Your calendar identifies certain months when your energy will need greater protection. They will be better suited to adjustments than to risk-taking.",
    "Tu calendario identifica ciertos meses en los que deberás proteger mejor tu energía. Serán más adecuados para los ajustes que para asumir riesgos.",
    "Ihr Kalender zeigt bestimmte Monate, in denen Ihre Energie besser geschützt werden sollte. Sie eignen sich eher für Anpassungen als für Risiken.",
    "Il vostro calendario identifica alcuni mesi in cui la vostra energia dovrà essere meglio protetta. Saranno più adatti agli aggiustamenti che ai rischi.",
    "Seu calendário identifica certos meses em que sua energia deverá ser melhor protegida. Eles serão mais adequados para ajustes do que para assumir riscos."),

  T("Ces moments plus délicats vous inviteront à ralentir, à vérifier les faits et à préserver vos ressources.",
    "These more delicate moments will invite you to slow down, verify the facts, and preserve your resources.",
    "Estos momentos más delicados te invitarán a reducir el ritmo, comprobar los hechos y preservar tus recursos.",
    "Diese anspruchsvolleren Momente laden Sie ein, langsamer zu werden, die Fakten zu prüfen und Ihre Ressourcen zu bewahren.",
    "Questi momenti più delicati vi inviteranno a rallentare, verificare i fatti e preservare le vostre risorse.",
    "Esses momentos mais delicados convidarão você a desacelerar, verificar os fatos e preservar seus recursos."),

  /* =======================================================
     SYNTHESIS
  ======================================================= */

  T("Vos meilleures périodes ne se limitent pas à une impression générale de chance. Chacune soutient un domaine précis et demande une manière différente d’utiliser son potentiel.",
    "Your best periods are not limited to a general feeling of luck. Each supports a specific area and requires a different way of using its potential.",
    "Tus mejores períodos no se limitan a una impresión general de suerte. Cada uno apoya un ámbito específico y requiere una manera diferente de utilizar su potencial.",
    "Ihre besten Phasen beschränken sich nicht auf ein allgemeines Glücksgefühl. Jede unterstützt einen bestimmten Bereich und verlangt eine andere Art, ihr Potenzial zu nutzen.",
    "I vostri periodi migliori non si limitano a una sensazione generale di fortuna. Ognuno sostiene un ambito preciso e richiede un modo diverso di utilizzare il proprio potenziale.",
    "Seus melhores períodos não se limitam a uma sensação geral de sorte. Cada um apoia uma área específica e exige uma forma diferente de utilizar seu potencial."),

  T("L’année vous offre plusieurs fenêtres d’action complémentaires. En choisissant le bon moment selon votre objectif, vous pourrez avancer avec davantage de fluidité.",
    "The year offers you several complementary windows for action. By choosing the right moment according to your goal, you can move forward more smoothly.",
    "El año te ofrece varias ventanas de acción complementarias. Al elegir el momento adecuado según tu objetivo, podrás avanzar con mayor fluidez.",
    "Das Jahr bietet Ihnen mehrere sich ergänzende Handlungsfenster. Wenn Sie je nach Ziel den richtigen Moment wählen, können Sie flüssiger vorankommen.",
    "L’anno vi offre diverse finestre d’azione complementari. Scegliendo il momento giusto in base al vostro obiettivo, potrete avanzare con maggiore fluidità.",
    "O ano oferece várias janelas de ação complementares. Ao escolher o momento certo de acordo com seu objetivo, você poderá avançar com mais fluidez."),

  T("Le véritable avantage de cette analyse consiste à harmoniser vos décisions avec le rythme de votre année plutôt qu’à forcer les résultats.",
    "The real advantage of this analysis is aligning your decisions with the rhythm of your year rather than forcing results.",
    "La verdadera ventaja de este análisis consiste en armonizar tus decisiones con el ritmo de tu año en lugar de forzar los resultados.",
    "Der eigentliche Vorteil dieser Analyse besteht darin, Ihre Entscheidungen mit dem Rhythmus Ihres Jahres in Einklang zu bringen, statt Ergebnisse zu erzwingen.",
    "Il vero vantaggio di questa analisi consiste nell’armonizzare le vostre decisioni con il ritmo dell’anno invece di forzare i risultati.",
    "A verdadeira vantagem desta análise consiste em harmonizar suas decisões com o ritmo do seu ano em vez de forçar resultados."),

  T("Les périodes favorables soutiendront vos initiatives, tandis que les mois plus délicats vous aideront à renforcer votre stratégie et à éviter certaines erreurs.",
    "Favorable periods will support your initiatives, while more delicate months will help you strengthen your strategy and avoid certain mistakes.",
    "Los períodos favorables apoyarán tus iniciativas, mientras que los meses más delicados te ayudarán a reforzar tu estrategia y evitar ciertos errores.",
    "Günstige Phasen unterstützen Ihre Initiativen, während anspruchsvollere Monate Ihnen helfen, Ihre Strategie zu stärken und bestimmte Fehler zu vermeiden.",
    "I periodi favorevoli sosterranno le vostre iniziative, mentre i mesi più delicati vi aiuteranno a rafforzare la strategia e a evitare alcuni errori.",
    "Os períodos favoráveis apoiarão suas iniciativas, enquanto os meses mais delicados ajudarão você a fortalecer sua estratégia e evitar certos erros."),

  T("Votre progression dépendra autant de votre capacité à saisir les occasions que de votre sagesse à respecter les périodes de ralentissement.",
    "Your progress will depend as much on your ability to seize opportunities as on your wisdom in respecting slower periods.",
    "Tu progreso dependerá tanto de tu capacidad para aprovechar las oportunidades como de tu sabiduría para respetar los períodos de desaceleración.",
    "Ihr Fortschritt hängt ebenso von Ihrer Fähigkeit ab, Chancen zu nutzen, wie von Ihrer Weisheit, ruhigere Phasen zu respektieren.",
    "Il vostro progresso dipenderà tanto dalla capacità di cogliere le opportunità quanto dalla saggezza nel rispettare i periodi di rallentamento.",
    "Seu progresso dependerá tanto da sua capacidade de aproveitar oportunidades quanto da sua sabedoria em respeitar os períodos de desaceleração."),

  /* =======================================================
     CONCLUSION
  ======================================================= */

  T("Utilisez ces périodes comme des repères stratégiques, tout en conservant votre libre arbitre et votre capacité d’adaptation.",
    "Use these periods as strategic reference points while preserving your free will and ability to adapt.",
    "Utiliza estos períodos como referencias estratégicas, conservando al mismo tiempo tu libre albedrío y tu capacidad de adaptación.",
    "Nutzen Sie diese Phasen als strategische Orientierungspunkte und bewahren Sie zugleich Ihren freien Willen und Ihre Anpassungsfähigkeit.",
    "Utilizzate questi periodi come riferimenti strategici, mantenendo al tempo stesso il vostro libero arbitrio e la capacità di adattamento.",
    "Use esses períodos como referências estratégicas, preservando ao mesmo tempo seu livre-arbítrio e sua capacidade de adaptação."),

  T("Les mois favorables ouvrent des possibilités, mais vos décisions et votre constance détermineront la manière dont elles se concrétiseront.",
    "Favorable months open possibilities, but your decisions and consistency will determine how they become reality.",
    "Los meses favorables abren posibilidades, pero tus decisiones y tu constancia determinarán cómo se concretarán.",
    "Günstige Monate eröffnen Möglichkeiten, doch Ihre Entscheidungen und Ihre Beständigkeit bestimmen, wie sie sich verwirklichen.",
    "I mesi favorevoli aprono possibilità, ma le vostre decisioni e la vostra costanza determineranno il modo in cui si concretizzeranno.",
    "Os meses favoráveis abrem possibilidades, mas suas decisões e sua constância determinarão como elas se concretizarão."),

  T("Préparez vos actions avant les périodes les plus porteuses afin de pouvoir profiter pleinement de leur potentiel.",
    "Prepare your actions before the most promising periods so you can fully benefit from their potential.",
    "Prepara tus acciones antes de los períodos más favorables para poder aprovechar plenamente su potencial.",
    "Bereiten Sie Ihre Handlungen vor den vielversprechendsten Phasen vor, damit Sie deren Potenzial vollständig nutzen können.",
    "Preparate le vostre azioni prima dei periodi più favorevoli per poter sfruttare pienamente il loro potenziale.",
    "Prepare suas ações antes dos períodos mais favoráveis para poder aproveitar plenamente o potencial deles."),

  T("Respectez les périodes plus exigeantes sans les craindre. Elles peuvent vous permettre de corriger une trajectoire avant une nouvelle phase d’expansion.",
    "Respect more demanding periods without fearing them. They can allow you to correct your course before a new phase of expansion.",
    "Respeta los períodos más exigentes sin temerlos. Pueden permitirte corregir tu trayectoria antes de una nueva fase de expansión.",
    "Respektieren Sie anspruchsvollere Phasen, ohne sie zu fürchten. Sie können Ihnen ermöglichen, Ihren Kurs vor einer neuen Expansionsphase zu korrigieren.",
    "Rispettate i periodi più impegnativi senza temerli. Possono permettervi di correggere la traiettoria prima di una nuova fase di espansione.",
    "Respeite os períodos mais exigentes sem temê-los. Eles podem permitir que você corrija sua trajetória antes de uma nova fase de expansão."),

  T("Votre meilleure stratégie consistera à agir avec confiance lorsque le climat est ouvert et avec discernement lorsqu’il demande davantage de prudence.",
    "Your best strategy will be to act confidently when conditions are open and with discernment when they require greater caution.",
    "Tu mejor estrategia consistirá en actuar con confianza cuando el clima sea favorable y con discernimiento cuando exija mayor prudencia.",
    "Ihre beste Strategie besteht darin, bei günstigen Bedingungen selbstbewusst und bei größerem Vorsichtsbedarf mit Urteilsvermögen zu handeln.",
    "La vostra migliore strategia consisterà nell’agire con fiducia quando il clima è favorevole e con discernimento quando richiede maggiore prudenza.",
    "Sua melhor estratégia será agir com confiança quando o clima estiver favorável e com discernimento quando exigir mais prudência."),
];

/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

export function localizeYearHoroscopeBestPeriodsTexts(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  let output = source;

  const ordered =
    [...BEST_PERIODS_TEXT_TRANSLATIONS]
      .sort(
        (a, b) =>
          b.from.length -
          a.from.length,
      );

  for (const entry of ordered) {
    output =
      output
        .split(entry.from)
        .join(entry.to[locale]);
  }

  return output;
}
