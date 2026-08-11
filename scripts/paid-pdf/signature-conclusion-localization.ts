import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<
    PaidPdfLocale,
    "fr"
  >;

type ElementName =
  | "Feu"
  | "Terre"
  | "Air"
  | "Eau";

type ModalityName =
  | "Cardinal"
  | "Fixe"
  | "Mutable";

type ConclusionLabels = {
  analysis: string;
  finalSynthesis: string;
  innerSky: string;

  lead: string;

  conclusionParagraph1: string;
  conclusionParagraph2: string;
  conclusionParagraph3: string;

  evolutionKey: string;
  consciousChoices: string;

  cultivateTitle: string;

  closingText: string;

  fire: string;
  earth: string;
  air: string;
  water: string;

  cardinal: string;
  fixed: string;
  mutable: string;

  aries: string;
  taurus: string;
  gemini: string;
  cancer: string;
  leo: string;
  virgo: string;
  libra: string;
  scorpio: string;
  sagittarius: string;
  capricorn: string;
  aquarius: string;
  pisces: string;

  elementFinalTexts:
    Record<
      ElementName,
      string
    >;

  elementSignatures:
    Record<
      ElementName,
      string
    >;

  modalitySignatures:
    Record<
      ModalityName,
      string
    >;
};

const LABELS:
Record<
  NonFrenchLocale,
  ConclusionLabels
> = {
  en: {
    analysis:
      "Signature Conclusion",

    finalSynthesis:
      "Your final synthesis",

    innerSky:
      "Your inner sky",

    lead:
      "Your natal chart brings together several complementary dimensions. Together, they tell a unique story: yours.",

    conclusionParagraph1:
      "This Signature report has allowed you to explore the essential foundations of your natal chart: your Sun, Moon, Ascendant, planets, houses, aspects, dominant energies, relational life, and professional direction.",

    conclusionParagraph2:
      "Each position reveals a particular facet of your personality. Some energies flow naturally, while others require greater awareness, experience, or maturity. These contrasts are not contradictions to eliminate: they are part of the richness of your inner world.",

    conclusionParagraph3:
      "Your birth chart is not a rigid destiny. It highlights your natural tendencies, needs, strengths, sensitivities, and the challenges that may accompany your evolution. You always retain the freedom to choose how you express these energies.",

    evolutionKey:
      "The key to your evolution",

    consciousChoices:
      "Transforming self-knowledge into conscious choices",

    cultivateTitle:
      "What your chart invites you to cultivate",

    closingText:
      "Thank you for choosing Luna Astralis to accompany you in this deep, personal, and conscious exploration of your inner universe.",

    fire:
      "Fire",

    earth:
      "Earth",

    air:
      "Air",

    water:
      "Water",

    cardinal:
      "Cardinal",

    fixed:
      "Fixed",

    mutable:
      "Mutable",

    aries:
      "Aries",

    taurus:
      "Taurus",

    gemini:
      "Gemini",

    cancer:
      "Cancer",

    leo:
      "Leo",

    virgo:
      "Virgo",

    libra:
      "Libra",

    scorpio:
      "Scorpio",

    sagittarius:
      "Sagittarius",

    capricorn:
      "Capricorn",

    aquarius:
      "Aquarius",

    pisces:
      "Pisces",

    elementFinalTexts: {
      Feu:
        "Your chart invites you to direct your energy with intention. Your strength grows when momentum, courage, and the desire to move forward serve a direction that truly reflects who you are.",

      Terre:
        "Your chart invites you to build patiently without turning security into a prison. Your strength grows when your values, efforts, and choices become part of a concrete and lasting progression.",

      Air:
        "Your chart invites you to transform your ideas into living understanding. Your strength grows when reflection, communication, and openness become ways of acting more consciously.",

      Eau:
        "Your chart invites you to turn your sensitivity into a form of knowledge. Your strength grows when your intuition, depth, and emotions are welcomed without trapping or overwhelming you.",
    },

    elementSignatures: {
      Feu:
        "Your light becomes fully visible when your courage follows a conscious direction.",

      Terre:
        "Your power reveals itself in what you build with patience, coherence, and truth.",

      Air:
        "Your intelligence becomes a strength when your ideas create connection, meaning, and movement.",

      Eau:
        "Your depth becomes a strength when your sensitivity illuminates your choices without directing them alone.",
    },

    modalitySignatures: {
      Cardinal:
        "You are called to initiate, decide, and open new paths without carrying the full responsibility for movement alone.",

      Fixe:
        "You are called to deepen, consolidate, and protect what has real value without resisting necessary transformations.",

      Mutable:
        "You are called to adapt, understand, and evolve without scattering yourself or losing your essential direction.",
    },
  },

  es: {
    analysis:
      "Conclusión Firma",

    finalSynthesis:
      "Tu síntesis final",

    innerSky:
      "Tu cielo interior",

    lead:
      "Tu carta natal reúne varias dimensiones complementarias. Juntas cuentan una historia única: la tuya.",

    conclusionParagraph1:
      "Este informe Firma te ha permitido explorar los fundamentos esenciales de tu carta natal: tu Sol, tu Luna, tu Ascendente, tus planetas, tus casas, tus aspectos, tus dominantes, tu vida relacional y tu orientación profesional.",

    conclusionParagraph2:
      "Cada posición revela una faceta particular de tu personalidad. Algunas energías se expresan con fluidez, mientras que otras requieren mayor conciencia, experiencia o madurez. Estos contrastes no son contradicciones que deban eliminarse: forman parte de la riqueza de tu mundo interior.",

    conclusionParagraph3:
      "Tu carta natal no constituye un destino rígido. Pone de manifiesto tus tendencias naturales, tus necesidades, tus fortalezas, tus sensibilidades y los desafíos que pueden acompañar tu evolución. Siempre conservas la libertad de elegir la manera en que expresas estas energías.",

    evolutionKey:
      "La clave de tu evolución",

    consciousChoices:
      "Transformar el conocimiento de ti en elecciones conscientes",

    cultivateTitle:
      "Lo que tu carta te invita a cultivar",

    closingText:
      "Gracias por elegir Luna Astralis para acompañarte en esta exploración profunda, personal y consciente de tu universo interior.",

    fire:
      "Fuego",

    earth:
      "Tierra",

    air:
      "Aire",

    water:
      "Agua",

    cardinal:
      "Cardinal",

    fixed:
      "Fijo",

    mutable:
      "Mutable",

    aries:
      "Aries",

    taurus:
      "Tauro",

    gemini:
      "Géminis",

    cancer:
      "Cáncer",

    leo:
      "Leo",

    virgo:
      "Virgo",

    libra:
      "Libra",

    scorpio:
      "Escorpio",

    sagittarius:
      "Sagitario",

    capricorn:
      "Capricornio",

    aquarius:
      "Acuario",

    pisces:
      "Piscis",

    elementFinalTexts: {
      Feu:
        "Tu carta te invita a dirigir tu energía con intención. Tu fuerza crece cuando el impulso, el valor y el deseo de avanzar sirven a una dirección que realmente te representa.",

      Terre:
        "Tu carta te invita a construir con paciencia sin convertir la seguridad en una prisión. Tu fuerza crece cuando tus valores, tus esfuerzos y tus elecciones forman parte de una progresión concreta y duradera.",

      Air:
        "Tu carta te invita a transformar tus ideas en comprensión viva. Tu fuerza crece cuando la reflexión, la comunicación y la apertura se convierten en medios para actuar con mayor conciencia.",

      Eau:
        "Tu carta te invita a convertir tu sensibilidad en una forma de conocimiento. Tu fuerza crece cuando tu intuición, tu profundidad y tus emociones son acogidas sin encerrarte ni desbordarte.",
    },

    elementSignatures: {
      Feu:
        "Tu luz se vuelve plenamente visible cuando tu valor sigue una dirección consciente.",

      Terre:
        "Tu poder se revela en aquello que construyes con paciencia, coherencia y verdad.",

      Air:
        "Tu inteligencia se convierte en una fuerza cuando tus ideas crean vínculo, sentido y movimiento.",

      Eau:
        "Tu profundidad se convierte en una fuerza cuando tu sensibilidad ilumina tus elecciones sin dirigirlas por sí sola.",
    },

    modalitySignatures: {
      Cardinal:
        "Estás llamado a iniciar, decidir y abrir nuevos caminos sin cargar tú solo con toda la responsabilidad del movimiento.",

      Fixe:
        "Estás llamado a profundizar, consolidar y proteger aquello que posee un valor real sin resistirte a las transformaciones necesarias.",

      Mutable:
        "Estás llamado a adaptarte, comprender y evolucionar sin dispersarte ni perder tu dirección esencial.",
    },
  },

  de: {
    analysis:
      "Signatur-Schluss",

    finalSynthesis:
      "Ihre abschließende Synthese",

    innerSky:
      "Ihr innerer Himmel",

    lead:
      "Ihr Geburtshoroskop vereint mehrere sich ergänzende Dimensionen. Gemeinsam erzählen sie eine einzigartige Geschichte: Ihre.",

    conclusionParagraph1:
      "Dieser Signatur-Bericht hat Ihnen ermöglicht, die wesentlichen Grundlagen Ihres Geburtshoroskops zu erkunden: Sonne, Mond, Aszendent, Planeten, Häuser, Aspekte, dominante Energien, Beziehungsleben und berufliche Ausrichtung.",

    conclusionParagraph2:
      "Jede Position zeigt eine besondere Facette Ihrer Persönlichkeit. Manche Energien fließen leicht, andere verlangen mehr Bewusstsein, Erfahrung oder Reife. Diese Kontraste sind keine Widersprüche, die beseitigt werden müssen: Sie gehören zum Reichtum Ihrer inneren Welt.",

    conclusionParagraph3:
      "Ihr Geburtshoroskop ist kein starres Schicksal. Es beleuchtet Ihre natürlichen Tendenzen, Bedürfnisse, Stärken, Sensibilitäten und die Herausforderungen, die Ihre Entwicklung begleiten können. Sie behalten immer die Freiheit zu wählen, wie Sie diese Energien ausdrücken.",

    evolutionKey:
      "Der Schlüssel zu Ihrer Entwicklung",

    consciousChoices:
      "Selbsterkenntnis in bewusste Entscheidungen verwandeln",

    cultivateTitle:
      "Was Ihr Horoskop Sie zu entwickeln einlädt",

    closingText:
      "Vielen Dank, dass Sie Luna Astralis gewählt haben, um Sie bei dieser tiefen, persönlichen und bewussten Erforschung Ihrer inneren Welt zu begleiten.",

    fire:
      "Feuer",

    earth:
      "Erde",

    air:
      "Luft",

    water:
      "Wasser",

    cardinal:
      "Kardinal",

    fixed:
      "Fix",

    mutable:
      "Veränderlich",

    aries:
      "Widder",

    taurus:
      "Stier",

    gemini:
      "Zwillinge",

    cancer:
      "Krebs",

    leo:
      "Löwe",

    virgo:
      "Jungfrau",

    libra:
      "Waage",

    scorpio:
      "Skorpion",

    sagittarius:
      "Schütze",

    capricorn:
      "Steinbock",

    aquarius:
      "Wassermann",

    pisces:
      "Fische",

    elementFinalTexts: {
      Feu:
        "Ihr Horoskop lädt Sie ein, Ihre Energie bewusst zu lenken. Ihre Stärke wächst, wenn Schwung, Mut und der Wunsch voranzugehen einer Richtung dienen, die wirklich zu Ihnen passt.",

      Terre:
        "Ihr Horoskop lädt Sie ein, geduldig aufzubauen, ohne Sicherheit zu einem Gefängnis zu machen. Ihre Stärke wächst, wenn Werte, Anstrengungen und Entscheidungen Teil einer konkreten und dauerhaften Entwicklung werden.",

      Air:
        "Ihr Horoskop lädt Sie ein, Ihre Ideen in lebendiges Verständnis zu verwandeln. Ihre Stärke wächst, wenn Nachdenken, Kommunikation und Offenheit zu Wegen bewussteren Handelns werden.",

      Eau:
        "Ihr Horoskop lädt Sie ein, Ihre Sensibilität in eine Form von Erkenntnis zu verwandeln. Ihre Stärke wächst, wenn Intuition, Tiefe und Gefühle angenommen werden, ohne Sie einzuengen oder zu überwältigen.",
    },

    elementSignatures: {
      Feu:
        "Ihr Licht wird vollständig sichtbar, wenn Ihr Mut einer bewussten Richtung folgt.",

      Terre:
        "Ihre Kraft zeigt sich in dem, was Sie mit Geduld, Kohärenz und Wahrheit aufbauen.",

      Air:
        "Ihre Intelligenz wird zur Stärke, wenn Ihre Ideen Verbindung, Sinn und Bewegung schaffen.",

      Eau:
        "Ihre Tiefe wird zur Stärke, wenn Ihre Sensibilität Ihre Entscheidungen erhellt, ohne sie allein zu bestimmen.",
    },

    modalitySignatures: {
      Cardinal:
        "Sie sind dazu aufgerufen, zu initiieren, zu entscheiden und neue Wege zu öffnen, ohne allein die gesamte Verantwortung für Bewegung zu tragen.",

      Fixe:
        "Sie sind dazu aufgerufen, zu vertiefen, zu festigen und das Wertvolle zu schützen, ohne notwendige Veränderungen abzuwehren.",

      Mutable:
        "Sie sind dazu aufgerufen, sich anzupassen, zu verstehen und sich weiterzuentwickeln, ohne sich zu verzetteln oder Ihre wesentliche Richtung zu verlieren.",
    },
  },

  it: {
    analysis:
      "Conclusione Firma",

    finalSynthesis:
      "La tua sintesi finale",

    innerSky:
      "Il tuo cielo interiore",

    lead:
      "Il tuo tema natale riunisce diverse dimensioni complementari. Insieme raccontano una storia unica: la tua.",

    conclusionParagraph1:
      "Questo rapporto Firma ti ha permesso di esplorare le fondamenta essenziali del tuo tema natale: Sole, Luna, Ascendente, pianeti, case, aspetti, dominanti, vita relazionale e orientamento professionale.",

    conclusionParagraph2:
      "Ogni posizione rivela una particolare sfaccettatura della tua personalità. Alcune energie si esprimono con fluidità, mentre altre richiedono maggiore consapevolezza, esperienza o maturità. Questi contrasti non sono contraddizioni da eliminare: fanno parte della ricchezza del tuo mondo interiore.",

    conclusionParagraph3:
      "Il tuo tema natale non costituisce un destino rigido. Mette in luce le tue tendenze naturali, i bisogni, le forze, le sensibilità e le sfide che possono accompagnare la tua evoluzione. Conservi sempre la libertà di scegliere il modo in cui esprimere queste energie.",

    evolutionKey:
      "La chiave della tua evoluzione",

    consciousChoices:
      "Trasformare la conoscenza di sé in scelte consapevoli",

    cultivateTitle:
      "Ciò che il tuo tema ti invita a coltivare",

    closingText:
      "Grazie per aver scelto Luna Astralis per accompagnarti in questa esplorazione profonda, personale e consapevole del tuo universo interiore.",

    fire:
      "Fuoco",

    earth:
      "Terra",

    air:
      "Aria",

    water:
      "Acqua",

    cardinal:
      "Cardinale",

    fixed:
      "Fisso",

    mutable:
      "Mutevole",

    aries:
      "Ariete",

    taurus:
      "Toro",

    gemini:
      "Gemelli",

    cancer:
      "Cancro",

    leo:
      "Leone",

    virgo:
      "Vergine",

    libra:
      "Bilancia",

    scorpio:
      "Scorpione",

    sagittarius:
      "Sagittario",

    capricorn:
      "Capricorno",

    aquarius:
      "Acquario",

    pisces:
      "Pesci",

    elementFinalTexts: {
      Feu:
        "Il tuo tema ti invita a dirigere la tua energia con intenzione. La tua forza cresce quando slancio, coraggio e desiderio di avanzare servono una direzione che ti rappresenta davvero.",

      Terre:
        "Il tuo tema ti invita a costruire con pazienza senza trasformare la sicurezza in una prigione. La tua forza cresce quando valori, sforzi e scelte fanno parte di una progressione concreta e duratura.",

      Air:
        "Il tuo tema ti invita a trasformare le idee in comprensione viva. La tua forza cresce quando riflessione, comunicazione e apertura diventano modi per agire con maggiore consapevolezza.",

      Eau:
        "Il tuo tema ti invita a trasformare la sensibilità in una forma di conoscenza. La tua forza cresce quando intuizione, profondità ed emozioni vengono accolte senza imprigionarti né sommergerti.",
    },

    elementSignatures: {
      Feu:
        "La tua luce diventa pienamente visibile quando il tuo coraggio segue una direzione consapevole.",

      Terre:
        "Il tuo potere si rivela in ciò che costruisci con pazienza, coerenza e verità.",

      Air:
        "La tua intelligenza diventa una forza quando le tue idee creano legame, significato e movimento.",

      Eau:
        "La tua profondità diventa una forza quando la sensibilità illumina le tue scelte senza dirigerle da sola.",
    },

    modalitySignatures: {
      Cardinal:
        "Sei chiamato a iniziare, decidere e aprire nuove strade senza portare da solo tutta la responsabilità del movimento.",

      Fixe:
        "Sei chiamato ad approfondire, consolidare e proteggere ciò che possiede un valore reale senza resistere alle trasformazioni necessarie.",

      Mutable:
        "Sei chiamato ad adattarti, comprendere ed evolvere senza disperderti né perdere la tua direzione essenziale.",
    },
  },

  pt: {
    analysis:
      "Conclusão Assinatura",

    finalSynthesis:
      "Sua síntese final",

    innerSky:
      "Seu céu interior",

    lead:
      "Seu mapa natal reúne várias dimensões complementares. Juntas, elas contam uma história única: a sua.",

    conclusionParagraph1:
      "Este relatório Assinatura permitiu que você explorasse os fundamentos essenciais do seu mapa natal: Sol, Lua, Ascendente, planetas, casas, aspectos, dominantes, vida relacional e orientação profissional.",

    conclusionParagraph2:
      "Cada posição revela uma faceta particular da sua personalidade. Algumas energias se expressam com fluidez, enquanto outras exigem mais consciência, experiência ou maturidade. Esses contrastes não são contradições a eliminar: fazem parte da riqueza do seu mundo interior.",

    conclusionParagraph3:
      "Seu mapa natal não constitui um destino rígido. Ele destaca suas tendências naturais, necessidades, forças, sensibilidades e os desafios que podem acompanhar sua evolução. Você sempre conserva a liberdade de escolher como expressa essas energias.",

    evolutionKey:
      "A chave da sua evolução",

    consciousChoices:
      "Transformar autoconhecimento em escolhas conscientes",

    cultivateTitle:
      "O que seu mapa convida você a cultivar",

    closingText:
      "Obrigado por escolher Luna Astralis para acompanhar você nesta exploração profunda, pessoal e consciente do seu universo interior.",

    fire:
      "Fogo",

    earth:
      "Terra",

    air:
      "Ar",

    water:
      "Água",

    cardinal:
      "Cardinal",

    fixed:
      "Fixo",

    mutable:
      "Mutável",

    aries:
      "Áries",

    taurus:
      "Touro",

    gemini:
      "Gêmeos",

    cancer:
      "Câncer",

    leo:
      "Leão",

    virgo:
      "Virgem",

    libra:
      "Libra",

    scorpio:
      "Escorpião",

    sagittarius:
      "Sagitário",

    capricorn:
      "Capricórnio",

    aquarius:
      "Aquário",

    pisces:
      "Peixes",

    elementFinalTexts: {
      Feu:
        "Seu mapa convida você a direcionar sua energia com intenção. Sua força cresce quando impulso, coragem e desejo de avançar servem a uma direção que realmente representa quem você é.",

      Terre:
        "Seu mapa convida você a construir com paciência sem transformar segurança em prisão. Sua força cresce quando seus valores, esforços e escolhas fazem parte de uma progressão concreta e duradoura.",

      Air:
        "Seu mapa convida você a transformar suas ideias em compreensão viva. Sua força cresce quando reflexão, comunicação e abertura se tornam maneiras de agir com mais consciência.",

      Eau:
        "Seu mapa convida você a transformar sua sensibilidade em uma forma de conhecimento. Sua força cresce quando intuição, profundidade e emoções são acolhidas sem aprisionar nem sobrecarregar você.",
    },

    elementSignatures: {
      Feu:
        "Sua luz se torna plenamente visível quando sua coragem segue uma direção consciente.",

      Terre:
        "Seu poder se revela naquilo que você constrói com paciência, coerência e verdade.",

      Air:
        "Sua inteligência se torna uma força quando suas ideias criam conexão, sentido e movimento.",

      Eau:
        "Sua profundidade se torna uma força quando sua sensibilidade ilumina suas escolhas sem dirigi-las sozinha.",
    },

    modalitySignatures: {
      Cardinal:
        "Você é chamado a iniciar, decidir e abrir novos caminhos sem carregar sozinho toda a responsabilidade pelo movimento.",

      Fixe:
        "Você é chamado a aprofundar, consolidar e proteger aquilo que possui valor real sem resistir às transformações necessárias.",

      Mutable:
        "Você é chamado a adaptar-se, compreender e evoluir sem se dispersar nem perder sua direção essencial.",
    },
  },
};
type ConclusionCultivationProfiles = {
  sunCultivation:
    Record<
      string,
      string
    >;

  moonCultivation:
    Record<
      string,
      string
    >;

  saturnCultivation:
    Record<
      string,
      string
    >;
};

const CULTIVATION_PROFILES:
Record<
  NonFrenchLocale,
  ConclusionCultivationProfiles
> = {
  en: {
    sunCultivation: {
      Aries:
        "Cultivate more conscious action: move forward with courage while leaving room for reflection and listening.",

      Taurus:
        "Cultivate flexible inner security: protect your foundations without refusing changes that have become necessary.",

      Gemini:
        "Cultivate depth: choose a few important ideas and give them enough time to become genuine knowledge.",

      Cancer:
        "Cultivate autonomous emotional security: care for yourself without carrying all the emotions of those around you.",

      Leo:
        "Cultivate stable inner confidence: create and shine without making approval a condition.",

      Virgo:
        "Cultivate compassionate high standards: improve what can be improved without reducing your value to perfection.",

      Libra:
        "Cultivate a clear position: create harmony without moving away from your own needs.",

      Scorpio:
        "Cultivate gradual trust: use your depth to transform rather than control.",

      Sagittarius:
        "Cultivate continuity: give concrete and lasting form to the visions that inspire you.",

      Capricorn:
        "Cultivate a more human form of achievement: build ambitiously while respecting your limits.",

      Aquarius:
        "Cultivate committed freedom: share your difference without cutting yourself off from the relationships that can support it.",

      Pisces:
        "Cultivate protective boundaries: preserve your sensitivity so that it can become a clear and creative strength.",
    },

    moonCultivation: {
      Aries:
        "Welcome your reactions before acting so that your emotional energy can become a chosen response.",

      Taurus:
        "Return to your body, calm, and simple reference points when worry or instability increases.",

      Gemini:
        "Put words to what you feel without immediately turning every emotion into analysis.",

      Cancer:
        "Express your needs before they turn into withdrawal, fatigue, or resentment.",

      Leo:
        "Create a space where your emotions can be acknowledged without depending entirely on the reactions of others.",

      Virgo:
        "Replace self-criticism with a simple, useful, and good-enough action.",

      Libra:
        "Recognize your own position before trying to restore balance with others.",

      Scorpio:
        "Distinguish what belongs to the present from what reactivates an old wound or a fear of losing control.",

      Sagittarius:
        "Regain a broader perspective without using distance to avoid an important emotion.",

      Capricorn:
        "Allow yourself to receive support and set down some emotional responsibilities.",

      Aquarius:
        "Preserve your need for space without completely withdrawing from the relationship or the emotion.",

      Pisces:
        "Distinguish your own emotions from those you absorb from your environment.",
    },

    saturnCultivation: {
      Aries:
        "Build courage through regular action rather than through the need to prove your strength immediately.",

      Taurus:
        "Trust your ability to rebuild so that change is no longer experienced only as a threat.",

      Gemini:
        "Share your thinking before it is perfect and let experience strengthen your intellectual confidence.",

      Cancer:
        "Recognize your emotional needs as legitimate and accept that a relationship can also support you.",

      Leo:
        "Create even when recognition is not guaranteed and let practice build your confidence.",

      Virgo:
        "Define what is good enough so that precision supports action instead of blocking it.",

      Libra:
        "Take a position respectfully and understand that a strong relationship can move through disagreement.",

      Scorpio:
        "Gradually open yourself to trust without abandoning your discernment or boundaries.",

      Sagittarius:
        "Give real structure to your freedom so that your possibilities can become a lasting experience.",

      Capricorn:
        "Measure your progress through coherence rather than only through the amount accomplished.",

      Aquarius:
        "Participate in a collective vision without believing that belonging requires the disappearance of your individuality.",

      Pisces:
        "Give your intuition a simple and stable form in order to protect your energy and reference points.",
    },
  },

  es: {
    sunCultivation: {
      Aries:
        "Cultivar una acción más consciente: avanzar con valor dejando al mismo tiempo espacio para la reflexión y la escucha.",

      Taurus:
        "Cultivar una seguridad interior flexible: proteger tus bases sin rechazar los cambios que se han vuelto necesarios.",

      Gemini:
        "Cultivar la profundidad: elegir algunas ideas importantes y darles tiempo para convertirse en verdadero conocimiento.",

      Cancer:
        "Cultivar una seguridad emocional autónoma: cuidar de ti sin cargar con todas las emociones de quienes te rodean.",

      Leo:
        "Cultivar una confianza interior estable: crear y brillar sin convertir la aprobación en una condición.",

      Virgo:
        "Cultivar una exigencia benevolente: mejorar aquello que puede mejorarse sin reducir tu valor a la perfección.",

      Libra:
        "Cultivar una posición clara: crear armonía sin alejarte de tus propias necesidades.",

      Scorpio:
        "Cultivar una confianza progresiva: utilizar tu profundidad para transformar en lugar de controlar.",

      Sagittarius:
        "Cultivar la continuidad: dar una forma concreta y duradera a las visiones que te inspiran.",

      Capricorn:
        "Cultivar una realización más humana: construir con ambición respetando al mismo tiempo tus límites.",

      Aquarius:
        "Cultivar una libertad comprometida: compartir tu diferencia sin aislarte de los vínculos que pueden sostenerla.",

      Pisces:
        "Cultivar límites protectores: preservar tu sensibilidad para que pueda convertirse en una fuerza clara y creativa.",
    },

    moonCultivation: {
      Aries:
        "Acoger tus reacciones antes de actuar para que tu energía emocional pueda convertirse en una respuesta elegida.",

      Taurus:
        "Volver al cuerpo, la calma y las referencias sencillas cuando aumentan la inquietud o la inestabilidad.",

      Gemini:
        "Poner palabras a lo que sientes sin transformar inmediatamente cada emoción en análisis.",

      Cancer:
        "Expresar tus necesidades antes de que se conviertan en retirada, cansancio o resentimiento.",

      Leo:
        "Crear un espacio donde tus emociones puedan ser reconocidas sin depender completamente de la reacción de los demás.",

      Virgo:
        "Sustituir la autocrítica por una acción sencilla, útil y suficientemente buena.",

      Libra:
        "Reconocer tu propia posición antes de intentar restablecer el equilibrio con los demás.",

      Scorpio:
        "Distinguir aquello que pertenece al presente de aquello que reactiva una antigua herida o el miedo a perder el control.",

      Sagittarius:
        "Recuperar una perspectiva más amplia sin utilizar la distancia para evitar una emoción importante.",

      Capricorn:
        "Permitirte recibir apoyo y soltar algunas responsabilidades emocionales.",

      Aquarius:
        "Preservar tu necesidad de espacio sin alejarte completamente del vínculo o de la emoción.",

      Pisces:
        "Distinguir tus propias emociones de aquellas que absorbes de tu entorno.",
    },

    saturnCultivation: {
      Aries:
        "Construir el valor mediante acciones regulares en lugar de la necesidad de demostrar inmediatamente tu fuerza.",

      Taurus:
        "Confiar en tu capacidad para reconstruir para que el cambio deje de vivirse únicamente como una amenaza.",

      Gemini:
        "Compartir tu pensamiento antes de que sea perfecto y permitir que la experiencia fortalezca tu confianza intelectual.",

      Cancer:
        "Reconocer tus necesidades emocionales como legítimas y aceptar que una relación también puede sostenerte.",

      Leo:
        "Crear incluso cuando el reconocimiento no está garantizado y permitir que la práctica construya tu confianza.",

      Virgo:
        "Definir aquello que es suficientemente bueno para que la precisión sostenga la acción en lugar de bloquearla.",

      Libra:
        "Tomar posición con respeto y comprender que una relación sólida puede atravesar un desacuerdo.",

      Scorpio:
        "Abrir progresivamente tu confianza sin abandonar tu discernimiento ni tus límites.",

      Sagittarius:
        "Dar una estructura real a tu libertad para que tus posibilidades se conviertan en una experiencia duradera.",

      Capricorn:
        "Medir tu progreso por la coherencia y no únicamente por la cantidad realizada.",

      Aquarius:
        "Participar en una visión colectiva sin creer que pertenecer exige la desaparición de tu singularidad.",

      Pisces:
        "Dar una forma sencilla y estable a tu intuición para proteger tu energía y tus referencias.",
    },
  },

  de: {
    sunCultivation: {
      Aries:
        "Entwickeln Sie bewussteres Handeln: Gehen Sie mutig voran und lassen Sie zugleich Raum für Reflexion und Zuhören.",

      Taurus:
        "Entwickeln Sie flexible innere Sicherheit: Schützen Sie Ihre Grundlagen, ohne notwendige Veränderungen abzulehnen.",

      Gemini:
        "Entwickeln Sie Tiefe: Wählen Sie einige wichtige Ideen und geben Sie ihnen Zeit, zu echtem Wissen zu werden.",

      Cancer:
        "Entwickeln Sie eigenständige emotionale Sicherheit: Sorgen Sie für sich, ohne alle Gefühle Ihres Umfelds zu tragen.",

      Leo:
        "Entwickeln Sie stabiles inneres Vertrauen: Erschaffen und strahlen Sie, ohne Anerkennung zur Voraussetzung zu machen.",

      Virgo:
        "Entwickeln Sie wohlwollende Ansprüche: Verbessern Sie, was verbessert werden kann, ohne Ihren Wert auf Perfektion zu reduzieren.",

      Libra:
        "Entwickeln Sie eine klare Position: Schaffen Sie Harmonie, ohne sich von Ihren eigenen Bedürfnissen zu entfernen.",

      Scorpio:
        "Entwickeln Sie schrittweises Vertrauen: Nutzen Sie Ihre Tiefe zur Transformation statt zur Kontrolle.",

      Sagittarius:
        "Entwickeln Sie Kontinuität: Geben Sie den Visionen, die Sie inspirieren, eine konkrete und dauerhafte Form.",

      Capricorn:
        "Entwickeln Sie eine menschlichere Form von Erfolg: Bauen Sie ehrgeizig auf und respektieren Sie zugleich Ihre Grenzen.",

      Aquarius:
        "Entwickeln Sie engagierte Freiheit: Teilen Sie Ihre Besonderheit, ohne sich von den Beziehungen abzuschneiden, die sie unterstützen können.",

      Pisces:
        "Entwickeln Sie schützende Grenzen: Bewahren Sie Ihre Sensibilität, damit sie zu einer klaren und schöpferischen Stärke werden kann.",
    },

    moonCultivation: {
      Aries:
        "Nehmen Sie Ihre Reaktionen wahr, bevor Sie handeln, damit Ihre emotionale Energie zu einer bewussten Antwort werden kann.",

      Taurus:
        "Kehren Sie zu Körper, Ruhe und einfachen Orientierungspunkten zurück, wenn Unruhe oder Instabilität zunimmt.",

      Gemini:
        "Finden Sie Worte für Ihre Gefühle, ohne jede Emotion sofort in Analyse zu verwandeln.",

      Cancer:
        "Äußern Sie Ihre Bedürfnisse, bevor sie zu Rückzug, Erschöpfung oder Groll werden.",

      Leo:
        "Schaffen Sie einen Raum, in dem Ihre Gefühle anerkannt werden können, ohne vollständig von den Reaktionen anderer abzuhängen.",

      Virgo:
        "Ersetzen Sie Selbstkritik durch eine einfache, nützliche und ausreichend gute Handlung.",

      Libra:
        "Erkennen Sie zunächst Ihre eigene Position, bevor Sie versuchen, das Gleichgewicht mit anderen wiederherzustellen.",

      Scorpio:
        "Unterscheiden Sie zwischen dem, was zur Gegenwart gehört, und dem, was eine alte Verletzung oder die Angst vor Kontrollverlust reaktiviert.",

      Sagittarius:
        "Gewinnen Sie eine größere Perspektive zurück, ohne Distanz zu benutzen, um einer wichtigen Emotion auszuweichen.",

      Capricorn:
        "Erlauben Sie sich, Unterstützung anzunehmen und einige emotionale Verantwortungen abzulegen.",

      Aquarius:
        "Bewahren Sie Ihr Bedürfnis nach Raum, ohne sich vollständig von der Beziehung oder dem Gefühl zu entfernen.",

      Pisces:
        "Unterscheiden Sie Ihre eigenen Gefühle von denen, die Sie aus Ihrem Umfeld aufnehmen.",
    },

    saturnCultivation: {
      Aries:
        "Bauen Sie Mut durch regelmäßige Handlungen auf, statt durch das Bedürfnis, Ihre Stärke sofort beweisen zu müssen.",

      Taurus:
        "Vertrauen Sie auf Ihre Fähigkeit zum Wiederaufbau, damit Veränderung nicht länger nur als Bedrohung erlebt wird.",

      Gemini:
        "Teilen Sie Ihre Gedanken, bevor sie perfekt sind, und lassen Sie Erfahrung Ihr intellektuelles Vertrauen stärken.",

      Cancer:
        "Erkennen Sie Ihre emotionalen Bedürfnisse als berechtigt an und akzeptieren Sie, dass eine Beziehung auch Sie unterstützen kann.",

      Leo:
        "Erschaffen Sie auch dann, wenn Anerkennung nicht garantiert ist, und lassen Sie Übung Ihr Vertrauen aufbauen.",

      Virgo:
        "Definieren Sie, was ausreichend gut ist, damit Präzision das Handeln unterstützt, statt es zu blockieren.",

      Libra:
        "Beziehen Sie respektvoll Stellung und verstehen Sie, dass eine stabile Beziehung Meinungsverschiedenheiten überstehen kann.",

      Scorpio:
        "Öffnen Sie Ihr Vertrauen schrittweise, ohne Ihr Urteilsvermögen oder Ihre Grenzen aufzugeben.",

      Sagittarius:
        "Geben Sie Ihrer Freiheit eine reale Struktur, damit Ihre Möglichkeiten zu einer dauerhaften Erfahrung werden können.",

      Capricorn:
        "Messen Sie Ihren Fortschritt an Kohärenz und nicht nur an der Menge dessen, was Sie erreicht haben.",

      Aquarius:
        "Beteiligen Sie sich an einer kollektiven Vision, ohne zu glauben, dass Zugehörigkeit das Verschwinden Ihrer Einzigartigkeit verlangt.",

      Pisces:
        "Geben Sie Ihrer Intuition eine einfache und stabile Form, um Ihre Energie und Orientierung zu schützen.",
    },
  },

  it: {
    sunCultivation: {
      Aries:
        "Coltivare un’azione più consapevole: avanzare con coraggio lasciando allo stesso tempo spazio alla riflessione e all’ascolto.",

      Taurus:
        "Coltivare una sicurezza interiore flessibile: proteggere le tue fondamenta senza rifiutare i cambiamenti diventati necessari.",

      Gemini:
        "Coltivare la profondità: scegliere alcune idee importanti e dare loro il tempo di diventare una vera conoscenza.",

      Cancer:
        "Coltivare una sicurezza emotiva autonoma: prenderti cura di te senza portare tutte le emozioni di chi ti circonda.",

      Leo:
        "Coltivare una fiducia interiore stabile: creare e risplendere senza fare dell’approvazione una condizione.",

      Virgo:
        "Coltivare un’esigenza benevola: migliorare ciò che può esserlo senza ridurre il tuo valore alla perfezione.",

      Libra:
        "Coltivare una posizione chiara: creare armonia senza allontanarti dai tuoi bisogni.",

      Scorpio:
        "Coltivare una fiducia progressiva: utilizzare la tua profondità per trasformare invece che controllare.",

      Sagittarius:
        "Coltivare la continuità: dare una forma concreta e duratura alle visioni che ti ispirano.",

      Capricorn:
        "Coltivare una realizzazione più umana: costruire con ambizione rispettando allo stesso tempo i tuoi limiti.",

      Aquarius:
        "Coltivare una libertà impegnata: condividere la tua differenza senza tagliarti fuori dai legami che possono sostenerla.",

      Pisces:
        "Coltivare limiti protettivi: preservare la tua sensibilità affinché possa diventare una forza chiara e creativa.",
    },

    moonCultivation: {
      Aries:
        "Accogliere le tue reazioni prima di agire affinché la tua energia emotiva possa diventare una risposta scelta.",

      Taurus:
        "Ritornare al corpo, alla calma e a riferimenti semplici quando aumentano inquietudine o instabilità.",

      Gemini:
        "Mettere in parole ciò che senti senza trasformare immediatamente ogni emozione in analisi.",

      Cancer:
        "Esprimere i tuoi bisogni prima che diventino ritiro, stanchezza o risentimento.",

      Leo:
        "Creare uno spazio in cui le tue emozioni possano essere riconosciute senza dipendere completamente dalla reazione degli altri.",

      Virgo:
        "Sostituire l’autocritica con un’azione semplice, utile e sufficientemente buona.",

      Libra:
        "Riconoscere la tua posizione prima di cercare di ristabilire l’equilibrio con gli altri.",

      Scorpio:
        "Distinguere ciò che appartiene al presente da ciò che riattiva una vecchia ferita o la paura di perdere il controllo.",

      Sagittarius:
        "Ritrovare una prospettiva più ampia senza usare la distanza per evitare un’emozione importante.",

      Capricorn:
        "Permetterti di ricevere sostegno e deporre alcune responsabilità emotive.",

      Aquarius:
        "Preservare il tuo bisogno di spazio senza allontanarti completamente dal legame o dall’emozione.",

      Pisces:
        "Distinguere le tue emozioni da quelle che assorbi dall’ambiente.",
    },

    saturnCultivation: {
      Aries:
        "Costruire il coraggio attraverso azioni regolari invece che attraverso il bisogno di dimostrare immediatamente la tua forza.",

      Taurus:
        "Avere fiducia nella tua capacità di ricostruire affinché il cambiamento non venga più vissuto soltanto come una minaccia.",

      Gemini:
        "Condividere il tuo pensiero prima che sia perfetto e lasciare che l’esperienza rafforzi la tua fiducia intellettuale.",

      Cancer:
        "Riconoscere i tuoi bisogni emotivi come legittimi e accettare che una relazione possa anche sostenerti.",

      Leo:
        "Creare anche quando il riconoscimento non è garantito e lasciare che la pratica costruisca la tua fiducia.",

      Virgo:
        "Definire ciò che è sufficientemente buono affinché la precisione sostenga l’azione invece di bloccarla.",

      Libra:
        "Prendere posizione con rispetto e comprendere che una relazione solida può attraversare un disaccordo.",

      Scorpio:
        "Aprire progressivamente la tua fiducia senza abbandonare il discernimento né i tuoi limiti.",

      Sagittarius:
        "Dare una struttura reale alla tua libertà affinché le tue possibilità diventino un’esperienza duratura.",

      Capricorn:
        "Misurare il tuo progresso attraverso la coerenza e non soltanto attraverso la quantità realizzata.",

      Aquarius:
        "Partecipare a una visione collettiva senza credere che appartenere richieda la scomparsa della tua unicità.",

      Pisces:
        "Dare una forma semplice e stabile alla tua intuizione per proteggere la tua energia e i tuoi riferimenti.",
    },
  },

  pt: {
    sunCultivation: {
      Aries:
        "Cultivar uma ação mais consciente: avançar com coragem deixando ao mesmo tempo espaço para reflexão e escuta.",

      Taurus:
        "Cultivar uma segurança interior flexível: proteger suas bases sem rejeitar mudanças que se tornaram necessárias.",

      Gemini:
        "Cultivar profundidade: escolher algumas ideias importantes e dar a elas tempo para se tornarem verdadeiro conhecimento.",

      Cancer:
        "Cultivar uma segurança emocional autônoma: cuidar de si sem carregar todas as emoções das pessoas ao seu redor.",

      Leo:
        "Cultivar uma confiança interior estável: criar e brilhar sem transformar aprovação em condição.",

      Virgo:
        "Cultivar uma exigência benevolente: melhorar aquilo que pode ser melhorado sem reduzir seu valor à perfeição.",

      Libra:
        "Cultivar uma posição clara: criar harmonia sem se afastar das suas próprias necessidades.",

      Scorpio:
        "Cultivar confiança progressiva: utilizar sua profundidade para transformar em vez de controlar.",

      Sagittarius:
        "Cultivar continuidade: dar uma forma concreta e duradoura às visões que inspiram você.",

      Capricorn:
        "Cultivar uma realização mais humana: construir com ambição respeitando ao mesmo tempo seus limites.",

      Aquarius:
        "Cultivar uma liberdade comprometida: compartilhar sua diferença sem se afastar dos vínculos que podem sustentá-la.",

      Pisces:
        "Cultivar limites protetores: preservar sua sensibilidade para que ela possa se tornar uma força clara e criativa.",
    },

    moonCultivation: {
      Aries:
        "Acolher suas reações antes de agir para que sua energia emocional possa se tornar uma resposta escolhida.",

      Taurus:
        "Retornar ao corpo, à calma e a referências simples quando inquietação ou instabilidade aumentarem.",

      Gemini:
        "Colocar em palavras aquilo que sente sem transformar imediatamente cada emoção em análise.",

      Cancer:
        "Expressar suas necessidades antes que se transformem em afastamento, cansaço ou ressentimento.",

      Leo:
        "Criar um espaço no qual suas emoções possam ser reconhecidas sem depender inteiramente da reação dos outros.",

      Virgo:
        "Substituir a autocrítica por uma ação simples, útil e suficientemente boa.",

      Libra:
        "Reconhecer sua própria posição antes de tentar restabelecer o equilíbrio com os outros.",

      Scorpio:
        "Distinguir aquilo que pertence ao presente daquilo que reativa uma antiga ferida ou o medo de perder o controle.",

      Sagittarius:
        "Recuperar uma perspectiva mais ampla sem utilizar a distância para evitar uma emoção importante.",

      Capricorn:
        "Permitir-se receber apoio e deixar de carregar algumas responsabilidades emocionais.",

      Aquarius:
        "Preservar sua necessidade de espaço sem se afastar completamente do vínculo ou da emoção.",

      Pisces:
        "Distinguir suas próprias emoções daquelas que absorve do ambiente.",
    },

    saturnCultivation: {
      Aries:
        "Construir coragem através de ações regulares em vez da necessidade de provar imediatamente sua força.",

      Taurus:
        "Confiar na sua capacidade de reconstruir para que a mudança deixe de ser vivida apenas como uma ameaça.",

      Gemini:
        "Compartilhar seu pensamento antes que esteja perfeito e permitir que a experiência fortaleça sua confiança intelectual.",

      Cancer:
        "Reconhecer suas necessidades emocionais como legítimas e aceitar que uma relação também pode apoiar você.",

      Leo:
        "Criar mesmo quando o reconhecimento não é garantido e permitir que a prática construa sua confiança.",

      Virgo:
        "Definir aquilo que é suficientemente bom para que a precisão sustente a ação em vez de bloqueá-la.",

      Libra:
        "Tomar posição com respeito e compreender que uma relação sólida pode atravessar uma discordância.",

      Scorpio:
        "Abrir progressivamente sua confiança sem abandonar seu discernimento nem seus limites.",

      Sagittarius:
        "Dar uma estrutura real à sua liberdade para que suas possibilidades se tornem uma experiência duradoura.",

      Capricorn:
        "Medir seu progresso pela coerência e não apenas pela quantidade realizada.",

      Aquarius:
        "Participar de uma visão coletiva sem acreditar que pertencer exige o desaparecimento da sua singularidade.",

      Pisces:
        "Dar uma forma simples e estável à sua intuição para proteger sua energia e suas referências.",
    },
  },
};
type ConclusionDynamicTexts = {
  personalIdentity:
    (
      sun: string,
      moon: string,
      ascendant: string,
    ) => string;

  personalIdentityFallback: string;

  personalElementFallback: string;

  personalClosing: string;

  cultivationElementFallback:
    (
      element: string,
    ) => string;

  cultivationMoonFallback: string;

  cultivationSaturnFallback: string;

  dynamicSignatureFallback: string;

  dynamicSignatureSun:
    (
      sun: string,
    ) => string;
};

const DYNAMIC_TEXTS:
Record<
  NonFrenchLocale,
  ConclusionDynamicTexts
> = {
  en: {
    personalIdentity:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `your Sun in ${sun}, your Moon in ${moon}, and your ${ascendant} Ascendant reveal a personality that must unite conscious direction, emotional security, and your spontaneous way of moving forward.`,

    personalIdentityFallback:
      "your chart reveals a personality that must unite conscious direction, emotional security, and your spontaneous way of moving forward.",

    personalElementFallback:
      "Your evolution becomes freer when your decisions respect your strengths, your needs, and your true values at the same time.",

    personalClosing:
      "Knowledge of your chart becomes truly useful when you use it to recognize your automatic patterns, make more conscious choices, and create a life that does not force you to move away from your nature.",

    cultivationElementFallback:
      (
        element,
      ) =>
        `Cultivate the qualities of your ${element} dominance without allowing a single energy to govern all your choices.`,

    cultivationMoonFallback:
      "Recognize your emotional needs before they become fatigue, withdrawal, or an automatic reaction.",

    cultivationSaturnFallback:
      "Transform your demands and fears into structure, patience, and realistic progress.",

    dynamicSignatureFallback:
      "Your strength reveals itself when your different inner dimensions move in the same direction.",

    dynamicSignatureSun:
      (
        sun,
      ) =>
        `Your Sun in ${sun} reminds you that your identity does not need to be diminished, but understood and fully embraced.`,
  },

  es: {
    personalIdentity:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `tu Sol en ${sun}, tu Luna en ${moon} y tu Ascendente ${ascendant} revelan una personalidad que debe unir dirección consciente, seguridad emocional y manera espontánea de avanzar.`,

    personalIdentityFallback:
      "tu carta revela una personalidad que debe unir dirección consciente, seguridad emocional y manera espontánea de avanzar.",

    personalElementFallback:
      "Tu evolución se vuelve más libre cuando tus decisiones respetan al mismo tiempo tus fortalezas, tus necesidades y tus verdaderos valores.",

    personalClosing:
      "El conocimiento de tu carta se vuelve realmente útil cuando lo utilizas para reconocer tus automatismos, tomar decisiones más conscientes y crear una vida que no te obligue a alejarte de tu naturaleza.",

    cultivationElementFallback:
      (
        element,
      ) =>
        `Cultivar las cualidades de tu dominante ${element} sin permitir que una sola energía gobierne todas tus decisiones.`,

    cultivationMoonFallback:
      "Reconocer tus necesidades emocionales antes de que se conviertan en cansancio, retirada o una reacción automática.",

    cultivationSaturnFallback:
      "Transformar tus exigencias y tus miedos en estructura, paciencia y una progresión realista.",

    dynamicSignatureFallback:
      "Tu fuerza se revela cuando tus diferentes dimensiones interiores avanzan en una misma dirección.",

    dynamicSignatureSun:
      (
        sun,
      ) =>
        `Tu Sol en ${sun} te recuerda que tu identidad no necesita ser disminuida, sino comprendida y plenamente asumida.`,
  },

  de: {
    personalIdentity:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `Ihre Sonne in ${sun}, Ihr Mond in ${moon} und Ihr Aszendent ${ascendant} zeigen eine Persönlichkeit, die bewusste Richtung, emotionale Sicherheit und Ihre spontane Art voranzugehen miteinander verbinden muss.`,

    personalIdentityFallback:
      "Ihr Horoskop zeigt eine Persönlichkeit, die bewusste Richtung, emotionale Sicherheit und Ihre spontane Art voranzugehen miteinander verbinden muss.",

    personalElementFallback:
      "Ihre Entwicklung wird freier, wenn Ihre Entscheidungen zugleich Ihre Stärken, Ihre Bedürfnisse und Ihre wahren Werte respektieren.",

    personalClosing:
      "Die Kenntnis Ihres Horoskops wird wirklich nützlich, wenn Sie sie einsetzen, um automatische Muster zu erkennen, bewusstere Entscheidungen zu treffen und ein Leben zu gestalten, das Sie nicht dazu zwingt, sich von Ihrer eigenen Natur zu entfernen.",

    cultivationElementFallback:
      (
        element,
      ) =>
        `Entwickeln Sie die Qualitäten Ihrer ${element}-Dominanz, ohne zuzulassen, dass eine einzige Energie all Ihre Entscheidungen bestimmt.`,

    cultivationMoonFallback:
      "Erkennen Sie Ihre emotionalen Bedürfnisse, bevor sie zu Erschöpfung, Rückzug oder einer automatischen Reaktion werden.",

    cultivationSaturnFallback:
      "Verwandeln Sie Ihre Ansprüche und Ängste in Struktur, Geduld und realistische Entwicklung.",

    dynamicSignatureFallback:
      "Ihre Stärke zeigt sich, wenn Ihre verschiedenen inneren Dimensionen in dieselbe Richtung gehen.",

    dynamicSignatureSun:
      (
        sun,
      ) =>
        `Ihre Sonne in ${sun} erinnert Sie daran, dass Ihre Identität nicht verkleinert werden muss, sondern verstanden und vollständig angenommen werden darf.`,
  },

  it: {
    personalIdentity:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `il tuo Sole in ${sun}, la tua Luna in ${moon} e il tuo Ascendente ${ascendant} rivelano una personalità che deve unire direzione consapevole, sicurezza emotiva e modo spontaneo di avanzare.`,

    personalIdentityFallback:
      "il tuo tema rivela una personalità che deve unire direzione consapevole, sicurezza emotiva e modo spontaneo di avanzare.",

    personalElementFallback:
      "La tua evoluzione diventa più libera quando le tue decisioni rispettano allo stesso tempo le tue forze, i tuoi bisogni e i tuoi veri valori.",

    personalClosing:
      "La conoscenza del tuo tema diventa realmente utile quando la utilizzi per riconoscere i tuoi automatismi, fare scelte più consapevoli e creare una vita che non ti obblighi ad allontanarti dalla tua natura.",

    cultivationElementFallback:
      (
        element,
      ) =>
        `Coltivare le qualità della tua dominante ${element} senza lasciare che una sola energia governi tutte le tue scelte.`,

    cultivationMoonFallback:
      "Riconoscere i tuoi bisogni emotivi prima che diventino stanchezza, ritiro o una reazione automatica.",

    cultivationSaturnFallback:
      "Trasformare le tue esigenze e le tue paure in struttura, pazienza e progressione realistica.",

    dynamicSignatureFallback:
      "La tua forza si rivela quando le tue diverse dimensioni interiori avanzano nella stessa direzione.",

    dynamicSignatureSun:
      (
        sun,
      ) =>
        `Il tuo Sole in ${sun} ti ricorda che la tua identità non deve essere diminuita, ma compresa e pienamente assunta.`,
  },

  pt: {
    personalIdentity:
      (
        sun,
        moon,
        ascendant,
      ) =>
        `seu Sol em ${sun}, sua Lua em ${moon} e seu Ascendente ${ascendant} revelam uma personalidade que precisa unir direção consciente, segurança emocional e maneira espontânea de avançar.`,

    personalIdentityFallback:
      "seu mapa revela uma personalidade que precisa unir direção consciente, segurança emocional e maneira espontânea de avançar.",

    personalElementFallback:
      "Sua evolução se torna mais livre quando suas decisões respeitam ao mesmo tempo suas forças, suas necessidades e seus verdadeiros valores.",

    personalClosing:
      "O conhecimento do seu mapa se torna realmente útil quando você o utiliza para reconhecer seus automatismos, fazer escolhas mais conscientes e criar uma vida que não obrigue você a se afastar da sua natureza.",

    cultivationElementFallback:
      (
        element,
      ) =>
        `Cultivar as qualidades da sua dominante ${element} sem permitir que uma única energia governe todas as suas escolhas.`,

    cultivationMoonFallback:
      "Reconhecer suas necessidades emocionais antes que elas se transformem em cansaço, afastamento ou uma reação automática.",

    cultivationSaturnFallback:
      "Transformar suas exigências e seus medos em estrutura, paciência e progressão realista.",

    dynamicSignatureFallback:
      "Sua força se revela quando suas diferentes dimensões interiores avançam na mesma direção.",

    dynamicSignatureSun:
      (
        sun,
      ) =>
        `Seu Sol em ${sun} lembra que sua identidade não precisa ser diminuída, mas compreendida e plenamente assumida.`,
  },
};
function escapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

function replaceRecordConstant(
  source: string,
  constantName: string,
  value:
    Record<
      string,
      string
    >,
): string {
  const pattern =
    new RegExp(
      `const\\s+${escapeRegExp(
        constantName,
      )}\\s*:\\s*Record<[^>]+>\\s*=\\s*\\{[\\s\\S]*?\\n\\};`,
      "m",
    );

  return source.replace(
    pattern,
    `const ${constantName}: Record<string, string> = ${JSON.stringify(
      value,
      null,
      2,
    )};`,
  );
}

function replaceElementRecordConstant(
  source: string,
  constantName: string,
  value:
    Record<
      ElementName,
      string
    >,
): string {
  const pattern =
    new RegExp(
      `const\\s+${escapeRegExp(
        constantName,
      )}\\s*:\\s*Record<ElementName,\\s*string>\\s*=\\s*\\{[\\s\\S]*?\\n\\};`,
      "m",
    );

  return source.replace(
    pattern,
    `const ${constantName}: Record<ElementName, string> = ${JSON.stringify(
      value,
      null,
      2,
    )};`,
  );
}

function replaceModalityRecordConstant(
  source: string,
  constantName: string,
  value:
    Record<
      ModalityName,
      string
    >,
): string {
  const pattern =
    new RegExp(
      `const\\s+${escapeRegExp(
        constantName,
      )}\\s*:\\s*Record<ModalityName,\\s*string>\\s*=\\s*\\{[\\s\\S]*?\\n\\};`,
      "m",
    );

  return source.replace(
    pattern,
    `const ${constantName}: Record<ModalityName, string> = ${JSON.stringify(
      value,
      null,
      2,
    )};`,
  );
}

function replaceFlexibleText(
  source: string,
  from: string,
  to: string,
): string {
  const pattern =
    from
      .trim()
      .split(/\s+/)
      .map(
        escapeRegExp,
      )
      .join(
        "\\s+",
      );

  return source.replace(
    new RegExp(
      pattern,
      "g",
    ),
    to,
  );
}

export function localizeSignatureConclusion(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  const labels =
    LABELS[
      locale as NonFrenchLocale
    ];

  const cultivation =
    CULTIVATION_PROFILES[
      locale as NonFrenchLocale
    ];

  const dynamic =
    DYNAMIC_TEXTS[
      locale as NonFrenchLocale
    ];

  let out =
    source.replace(
      /\r\n/g,
      "\n",
    );

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des signes
  |--------------------------------------------------------------------------
  |
  | Les clés techniques restent en anglais.
  |
  |--------------------------------------------------------------------------
  */

  const signNames:
    Record<
      string,
      string
    > = {
    Aries:
      labels.aries,

    Taurus:
      labels.taurus,

    Gemini:
      labels.gemini,

    Cancer:
      labels.cancer,

    Leo:
      labels.leo,

    Virgo:
      labels.virgo,

    Libra:
      labels.libra,

    Scorpio:
      labels.scorpio,

    Sagittarius:
      labels.sagittarius,

    Capricorn:
      labels.capricorn,

    Aquarius:
      labels.aquarius,

    Pisces:
      labels.pisces,

    Bélier:
      labels.aries,

    Taureau:
      labels.taurus,

    Gémeaux:
      labels.gemini,

    Lion:
      labels.leo,

    Vierge:
      labels.virgo,

    Balance:
      labels.libra,

    Scorpion:
      labels.scorpio,

    Sagittaire:
      labels.sagittarius,

    Capricorne:
      labels.capricorn,

    Verseau:
      labels.aquarius,

    Poissons:
      labels.pisces,
  };

  out =
    replaceRecordConstant(
      out,
      "SIGN_NAMES",
      signNames,
    );

  /*
  |--------------------------------------------------------------------------
  | Textes finaux par élément
  |--------------------------------------------------------------------------
  */

  out =
    replaceElementRecordConstant(
      out,
      "ELEMENT_FINAL_TEXTS",
      labels.elementFinalTexts,
    );

  /*
  |--------------------------------------------------------------------------
  | Signatures par élément
  |--------------------------------------------------------------------------
  */

  out =
    replaceElementRecordConstant(
      out,
      "ELEMENT_SIGNATURES",
      labels.elementSignatures,
    );

  /*
  |--------------------------------------------------------------------------
  | Signatures par modalité
  |--------------------------------------------------------------------------
  */

  out =
    replaceModalityRecordConstant(
      out,
      "MODALITY_SIGNATURES",
      labels.modalitySignatures,
    );

  /*
  |--------------------------------------------------------------------------
  | Conseils Soleil
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "SUN_CULTIVATION",
      cultivation.sunCultivation,
    );

  /*
  |--------------------------------------------------------------------------
  | Conseils Lune
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "MOON_CULTIVATION",
      cultivation.moonCultivation,
    );

  /*
  |--------------------------------------------------------------------------
  | Conseils Saturne
  |--------------------------------------------------------------------------
  */

  out =
    replaceRecordConstant(
      out,
      "SATURN_CULTIVATION",
      cultivation.saturnCultivation,
    );

  /*
  |--------------------------------------------------------------------------
  | Traduction visible des éléments
  |--------------------------------------------------------------------------
  |
  | Les valeurs internes restent :
  |
  | Feu
  | Terre
  | Air
  | Eau
  |
  |--------------------------------------------------------------------------
  */

  const visibleElements:
    Record<
      ElementName,
      string
    > = {
    Feu:
      labels.fire,

    Terre:
      labels.earth,

    Air:
      labels.air,

    Eau:
      labels.water,
  };

  /*
  |--------------------------------------------------------------------------
  | Traduction visible des modalités
  |--------------------------------------------------------------------------
  |
  | Les valeurs internes restent :
  |
  | Cardinal
  | Fixe
  | Mutable
  |
  |--------------------------------------------------------------------------
  */

  const visibleModalities:
    Record<
      ModalityName,
      string
    > = {
    Cardinal:
      labels.cardinal,

    Fixe:
      labels.fixed,

    Mutable:
      labels.mutable,
  };

  const elementLookup =
    JSON.stringify(
      visibleElements,
    );

  const modalityLookup =
    JSON.stringify(
      visibleModalities,
    );

  /*
  |--------------------------------------------------------------------------
  | Textes fixes visibles
  |--------------------------------------------------------------------------
  */

  const fixedTexts:
    Array<
      [
        string,
        string,
      ]
    > = [
    [
      "Conclusion Signature",
      labels.analysis,
    ],

    [
      "Votre synthèse finale",
      labels.finalSynthesis,
    ],

    [
      "Votre ciel intérieur",
      labels.innerSky,
    ],

    [
      "Votre thème natal rassemble plusieurs dimensions complémentaires. Ensemble, elles racontent une histoire unique : la vôtre.",
      labels.lead,
    ],

    [
      "Ce rapport Signature vous a permis d’explorer les fondations essentielles de votre thème natal : votre Soleil, votre Lune, votre Ascendant, vos planètes, vos maisons, vos aspects, vos dominantes, votre vie relationnelle et votre orientation professionnelle.",
      labels.conclusionParagraph1,
    ],

    [
      "Chaque position révèle une facette particulière de votre personnalité. Certaines énergies s’expriment avec fluidité, tandis que d’autres demandent davantage de conscience, d’expérience ou de maturité. Ces contrastes ne sont pas des contradictions à éliminer : ils font partie de la richesse de votre monde intérieur.",
      labels.conclusionParagraph2,
    ],

    [
      "Votre thème natal ne constitue pas un destin rigide. Il met en lumière vos tendances naturelles, vos besoins, vos forces, vos sensibilités et les défis qui peuvent accompagner votre évolution. Vous conservez toujours la liberté de choisir la manière dont vous exprimez ces énergies.",
      labels.conclusionParagraph3,
    ],

    [
      "La clé de votre évolution",
      labels.evolutionKey,
    ],

    [
      "Transformer la connaissance de soi en choix conscients",
      labels.consciousChoices,
    ],

    [
      "Ce que votre thème vous invite à cultiver",
      labels.cultivateTitle,
    ],

    [
      "Merci d’avoir choisi Luna Astralis pour vous accompagner dans cette exploration profonde, personnelle et consciente de votre univers intérieur.",
      labels.closingText,
    ],
  ];

  for (
    const [
      from,
      to,
    ] of fixedTexts
  ) {
    out =
      replaceFlexibleText(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | ATTENTION
  |--------------------------------------------------------------------------
  |
  | Ne pas ajouter encore :
  |
  | return out;
  | }
  |
  | Le bloc 5 continue directement cette fonction.
  |
  |--------------------------------------------------------------------------
  */
  /*
  |--------------------------------------------------------------------------
  | getPersonalFinalText
  |--------------------------------------------------------------------------
  |
  | Soleil + Lune + Ascendant.
  |
  | getFrenchSign() utilise SIGN_NAMES, qui a déjà été localisé
  | dans le bloc précédent. sunSign / moonSign / ascSign sont donc
  | déjà affichés dans la bonne langue.
  |
  |--------------------------------------------------------------------------
  */

  const personalIdentityText =
    dynamic.personalIdentity(
      "__SUN__",
      "__MOON__",
      "__ASCENDANT__",
    );

  out =
    out.replace(
      /`votre Soleil en \$\{sunSign\}, votre Lune en \$\{moonSign\} et votre Ascendant \$\{ascSign\} révèlent une personnalité qui doit unir direction consciente, sécurité émotionnelle et manière spontanée d’avancer\.`/g,
      "`" +
        personalIdentityText
          .replace(
            "__SUN__",
            "${sunSign}",
          )
          .replace(
            "__MOON__",
            "${moonSign}",
          )
          .replace(
            "__ASCENDANT__",
            "${ascSign}",
          ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Fallback identité
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "votre thème révèle une personnalité qui doit unir direction consciente, sécurité émotionnelle et manière spontanée d’avancer.",
      dynamic.personalIdentityFallback,
    );

  /*
  |--------------------------------------------------------------------------
  | Fallback élément dominant
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Votre évolution devient plus libre lorsque vos décisions respectent à la fois vos forces, vos besoins et vos véritables valeurs.",
      dynamic.personalElementFallback,
    );

  /*
  |--------------------------------------------------------------------------
  | Conclusion personnelle
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "La connaissance de votre thème devient réellement utile lorsque vous l’employez pour reconnaître vos automatismes, poser des choix plus conscients et créer une vie qui ne vous oblige pas à vous éloigner de votre nature.",
      dynamic.personalClosing,
    );

  /*
  |--------------------------------------------------------------------------
  | getCultivationPoints
  |--------------------------------------------------------------------------
  |
  | Premier fallback :
  |
  | dominantElement peut être :
  |
  | Feu
  | Terre
  | Air
  | Eau
  |
  | Ces valeurs restent internes en français.
  | On traduit seulement leur affichage.
  |
  |--------------------------------------------------------------------------
  */

  const personalDominant =
    locale === "en"
      ? "personal"
      : locale === "es"
        ? "personal"
        : locale === "de"
          ? "persönlichen"
          : locale === "it"
            ? "personale"
            : "pessoal";

  const cultivationElementText =
    dynamic.cultivationElementFallback(
      "__ELEMENT__",
    );

  const visibleDominantExpression =
    `\${dominantElement
      ? ((${elementLookup} as Record<string, string>)[
          dominantElement
        ] ?? dominantElement)
      : ${JSON.stringify(
        personalDominant,
      )}}`;

  out =
    out.replace(
      /`Cultiver les qualités de votre dominante \$\{dominantElement \?\? "personnelle"\} sans laisser une seule énergie gouverner tous vos choix\.`/g,
      "`" +
        cultivationElementText.replace(
          "__ELEMENT__",
          visibleDominantExpression,
        ) +
        "`",
    );

  /*
  |--------------------------------------------------------------------------
  | Deuxième fallback — Lune
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Reconnaître vos besoins émotionnels avant qu’ils ne deviennent de la fatigue, du retrait ou une réaction automatique.",
      dynamic.cultivationMoonFallback,
    );

  /*
  |--------------------------------------------------------------------------
  | Troisième fallback — Saturne
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Transformer vos exigences et vos peurs en structure, en patience et en progression réaliste.",
      dynamic.cultivationSaturnFallback,
    );

  /*
  |--------------------------------------------------------------------------
  | getDynamicSignature — fallback élément
  |--------------------------------------------------------------------------
  */

  out =
    replaceFlexibleText(
      out,
      "Votre force se révèle lorsque vos différentes dimensions intérieures avancent dans une même direction.",
      dynamic.dynamicSignatureFallback,
    );

  /*
  |--------------------------------------------------------------------------
  | getDynamicSignature — Soleil
  |--------------------------------------------------------------------------
  |
  | sunSign est déjà traduit grâce à SIGN_NAMES.
  |
  |--------------------------------------------------------------------------
  */

  const dynamicSunText =
    dynamic.dynamicSignatureSun(
      "__SUN__",
    );

  out =
    out.replace(
      /`Votre Soleil en \$\{sunSign\} vous rappelle que votre identité ne demande pas à être diminuée, mais comprise et pleinement assumée\. `/g,
      "`" +
        dynamicSunText.replace(
          "__SUN__",
          "${sunSign}",
        ) +
        " `",
    );

  /*
  |--------------------------------------------------------------------------
  | Sécurité
  |--------------------------------------------------------------------------
  |
  | IMPORTANT :
  |
  | On ne traduit jamais les clés techniques utilisées pour récupérer
  | les planètes dans chart.planets :
  |
  | Sun
  | Moon
  | Saturn
  |
  | On ne traduit pas non plus les valeurs internes :
  |
  | Feu
  | Terre
  | Air
  | Eau
  |
  | Cardinal
  | Fixe
  | Mutable
  |
  | Seul leur affichage est localisé.
  |
  |--------------------------------------------------------------------------
  */

  return out;
}
