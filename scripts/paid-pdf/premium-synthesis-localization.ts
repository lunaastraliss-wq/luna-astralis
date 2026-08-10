import type { PaidPdfLocale } from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;

const DATA = {
  "labels": {
    "en": {
      "badge": "Premium Synthesis",
      "title1": "The signature of your chart",
      "intro1": "This synthesis brings together the main information from your birth chart to highlight the major themes of your personality, needs, and potential.",
      "core": "Your core identity",
      "energy": "Your dominant energy",
      "domain": "Your central life area",
      "sunmoon": "Sun and Moon",
      "conscious": "Consciousness and emotions",
      "sunmoontext": "The Sun shows what you seek to become, while the Moon reveals what you need to remain emotionally stable. Your balance depends on your ability to respect both dimensions at the same time.",
      "asc": "Ascendant and presence",
      "outer": "Outer expression",
      "title2": "Your path to fulfillment",
      "intro2": "Your birth chart becomes truly useful when it helps you recognize your strengths, understand your reactions, and choose a more conscious direction.",
      "thought": "Thought and communication",
      "love": "Love and values",
      "action": "Action and will",
      "expansion": "Expansion and maturity",
      "direction": "Your life direction",
      "balances": "Your major balances",
      "personal": "Personal synthesis",
      "portrait": "Your Premium portrait",
      "closing": "Read this report again at different moments in your life. Some interpretations will gain more meaning through your experiences, decisions, and personal growth.",
      "unspecified": "unspecified",
      "house": "House",
      "inword": "in"
    },
    "es": {
      "badge": "Síntesis Premium",
      "title1": "La firma de tu carta",
      "intro1": "Esta síntesis reúne la información principal de tu carta natal para destacar las grandes líneas de tu funcionamiento, tus necesidades y tu potencial.",
      "core": "Tu identidad central",
      "energy": "Tu energía dominante",
      "domain": "Tu ámbito central",
      "sunmoon": "Sol y Luna",
      "conscious": "Conciencia y emociones",
      "sunmoontext": "El Sol muestra aquello en lo que buscas convertirte, mientras que la Luna revela lo que necesitas para mantener tu estabilidad emocional. Tu equilibrio depende de tu capacidad para respetar ambas dimensiones al mismo tiempo.",
      "asc": "Ascendente y presencia",
      "outer": "Expresión exterior",
      "title2": "Tu camino de realización",
      "intro2": "Tu carta natal se vuelve realmente útil cuando te ayuda a reconocer tus fortalezas, comprender tus reacciones y elegir una dirección más consciente.",
      "thought": "Pensamiento y comunicación",
      "love": "Amor y valores",
      "action": "Acción y voluntad",
      "expansion": "Expansión y madurez",
      "direction": "Tu dirección de vida",
      "balances": "Tus grandes equilibrios",
      "personal": "Síntesis personal",
      "portrait": "Tu retrato Premium",
      "closing": "Vuelve a leer este informe en distintos momentos de tu vida. Algunas interpretaciones adquirirán más sentido con tus experiencias, decisiones y evolución personal.",
      "unspecified": "no especificado",
      "house": "Casa",
      "inword": "en"
    },
    "de": {
      "badge": "Premium-Synthese",
      "title1": "Die Signatur Ihres Horoskops",
      "intro1": "Diese Synthese bündelt die wichtigsten Informationen Ihres Geburtshoroskops und hebt die großen Linien Ihrer Persönlichkeit, Bedürfnisse und Ihres Potenzials hervor.",
      "core": "Ihre zentrale Identität",
      "energy": "Ihre dominante Energie",
      "domain": "Ihr zentraler Lebensbereich",
      "sunmoon": "Sonne und Mond",
      "conscious": "Bewusstsein und Emotionen",
      "sunmoontext": "Die Sonne zeigt, was Sie werden möchten, während der Mond offenbart, was Sie für emotionale Stabilität brauchen. Ihr Gleichgewicht hängt davon ab, beide Dimensionen gleichzeitig zu respektieren.",
      "asc": "Aszendent und Präsenz",
      "outer": "Äußerer Ausdruck",
      "title2": "Ihr Weg zur Entfaltung",
      "intro2": "Ihr Geburtshoroskop wird wirklich nützlich, wenn es Ihnen hilft, Ihre Stärken zu erkennen, Ihre Reaktionen zu verstehen und eine bewusstere Richtung zu wählen.",
      "thought": "Denken und Kommunikation",
      "love": "Liebe und Werte",
      "action": "Handlung und Wille",
      "expansion": "Entwicklung und Reife",
      "direction": "Ihre Lebensrichtung",
      "balances": "Ihre großen Gleichgewichte",
      "personal": "Persönliche Synthese",
      "portrait": "Ihr Premium-Porträt",
      "closing": "Lesen Sie diesen Bericht zu verschiedenen Zeiten Ihres Lebens erneut. Manche Deutungen werden durch Ihre Erfahrungen, Entscheidungen und persönliche Entwicklung an Bedeutung gewinnen.",
      "unspecified": "nicht angegeben",
      "house": "Haus",
      "inword": "in"
    },
    "it": {
      "badge": "Sintesi Premium",
      "title1": "La firma del tuo tema",
      "intro1": "Questa sintesi riunisce le principali informazioni del tuo tema natale per mettere in evidenza le grandi linee del tuo funzionamento, dei tuoi bisogni e del tuo potenziale.",
      "core": "La tua identità centrale",
      "energy": "La tua energia dominante",
      "domain": "Il tuo ambito centrale",
      "sunmoon": "Sole e Luna",
      "conscious": "Coscienza ed emozioni",
      "sunmoontext": "Il Sole mostra ciò che cerchi di diventare, mentre la Luna rivela ciò di cui hai bisogno per restare emotivamente stabile. Il tuo equilibrio dipende dalla capacità di rispettare entrambe le dimensioni nello stesso momento.",
      "asc": "Ascendente e presenza",
      "outer": "Espressione esteriore",
      "title2": "Il tuo percorso di realizzazione",
      "intro2": "Il tuo tema natale diventa davvero utile quando ti aiuta a riconoscere i tuoi punti di forza, comprendere le tue reazioni e scegliere una direzione più consapevole.",
      "thought": "Pensiero e comunicazione",
      "love": "Amore e valori",
      "action": "Azione e volontà",
      "expansion": "Espansione e maturità",
      "direction": "La tua direzione di vita",
      "balances": "I tuoi grandi equilibri",
      "personal": "Sintesi personale",
      "portrait": "Il tuo ritratto Premium",
      "closing": "Rileggi questo rapporto in diversi momenti della tua vita. Alcune interpretazioni acquisteranno più significato attraverso le tue esperienze, decisioni ed evoluzione personale.",
      "unspecified": "non specificato",
      "house": "Casa",
      "inword": "in"
    },
    "pt": {
      "badge": "Síntese Premium",
      "title1": "A assinatura do seu mapa",
      "intro1": "Esta síntese reúne as principais informações do seu mapa natal para destacar as grandes linhas do seu funcionamento, das suas necessidades e do seu potencial.",
      "core": "Sua identidade central",
      "energy": "Sua energia dominante",
      "domain": "Sua área central",
      "sunmoon": "Sol e Lua",
      "conscious": "Consciência e emoções",
      "sunmoontext": "O Sol mostra aquilo que você busca se tornar, enquanto a Lua revela o que você precisa para permanecer emocionalmente estável. Seu equilíbrio depende da sua capacidade de respeitar essas duas dimensões ao mesmo tempo.",
      "asc": "Ascendente e presença",
      "outer": "Expressão exterior",
      "title2": "Seu caminho de realização",
      "intro2": "Seu mapa natal se torna realmente útil quando ajuda você a reconhecer suas forças, compreender suas reações e escolher uma direção mais consciente.",
      "thought": "Pensamento e comunicação",
      "love": "Amor e valores",
      "action": "Ação e vontade",
      "expansion": "Expansão e maturidade",
      "direction": "Sua direção de vida",
      "balances": "Seus grandes equilíbrios",
      "personal": "Síntese pessoal",
      "portrait": "Seu retrato Premium",
      "closing": "Releia este relatório em diferentes momentos da sua vida. Algumas interpretações ganharão mais sentido ao longo das suas experiências, decisões e evolução pessoal.",
      "unspecified": "não especificado",
      "house": "Casa",
      "inword": "em"
    }
  },
  "signs": {
    "en": {
      "Bélier": "Aries",
      "Taureau": "Taurus",
      "Gémeaux": "Gemini",
      "Cancer": "Cancer",
      "Lion": "Leo",
      "Vierge": "Virgo",
      "Balance": "Libra",
      "Scorpion": "Scorpio",
      "Sagittaire": "Sagittarius",
      "Capricorne": "Capricorn",
      "Verseau": "Aquarius",
      "Poissons": "Pisces"
    },
    "es": {
      "Bélier": "Aries",
      "Taureau": "Tauro",
      "Gémeaux": "Géminis",
      "Cancer": "Cáncer",
      "Lion": "Leo",
      "Vierge": "Virgo",
      "Balance": "Libra",
      "Scorpion": "Escorpio",
      "Sagittaire": "Sagitario",
      "Capricorne": "Capricornio",
      "Verseau": "Acuario",
      "Poissons": "Piscis"
    },
    "de": {
      "Bélier": "Widder",
      "Taureau": "Stier",
      "Gémeaux": "Zwillinge",
      "Cancer": "Krebs",
      "Lion": "Löwe",
      "Vierge": "Jungfrau",
      "Balance": "Waage",
      "Scorpion": "Skorpion",
      "Sagittaire": "Schütze",
      "Capricorne": "Steinbock",
      "Verseau": "Wassermann",
      "Poissons": "Fische"
    },
    "it": {
      "Bélier": "Ariete",
      "Taureau": "Toro",
      "Gémeaux": "Gemelli",
      "Cancer": "Cancro",
      "Lion": "Leone",
      "Vierge": "Vergine",
      "Balance": "Bilancia",
      "Scorpion": "Scorpione",
      "Sagittaire": "Sagittario",
      "Capricorne": "Capricorno",
      "Verseau": "Acquario",
      "Poissons": "Pesci"
    },
    "pt": {
      "Bélier": "Áries",
      "Taureau": "Touro",
      "Gémeaux": "Gêmeos",
      "Cancer": "Câncer",
      "Lion": "Leão",
      "Vierge": "Virgem",
      "Balance": "Libra",
      "Scorpion": "Escorpião",
      "Sagittaire": "Sagitário",
      "Capricorne": "Capricórnio",
      "Verseau": "Aquário",
      "Poissons": "Peixes"
    }
  }
} as const;

function replaceAll(source: string, from: string, to: string): string {
  return source.split(from).join(to);
}

function replaceFunction(
  source: string,
  name: string,
  nextName: string,
  replacement: string,
): string {
  const start = source.indexOf("function " + name + "(");
  if (start < 0) return source;
  const end = source.indexOf("function " + nextName + "(", start);
  if (end < 0) return source;
  return source.slice(0, start) + replacement.trim() + "\n\n" + source.slice(end);
}

export function localizePremiumSynthesis(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") return source;

  const lang = locale as NonFrenchLocale;
  const l = DATA.labels[lang];
  const signMap = DATA.signs[lang] as Record<string, string>;
  let out = source;

  // Static JSX.
  const staticPairs: Array<[string, string]> = [
    ["Synthèse Premium", l.badge],
    ["La signature de votre thème", l.title1],
    ["Cette synthèse rassemble les principales\n            informations de votre carte du ciel afin\n            de faire ressortir les grandes lignes de\n            votre fonctionnement, de vos besoins et de\n            votre potentiel.", l.intro1],
    ["Votre identité centrale", l.core],
    ["Votre énergie dominante", l.energy],
    ["Votre domaine central", l.domain],
    ["Soleil et Lune", l.sunmoon],
    ["Conscience et émotions", l.conscious],
    ["Le Soleil montre ce que vous cherchez à\n              devenir, tandis que la Lune révèle ce\n              dont vous avez besoin pour rester\n              émotionnellement stable. Votre équilibre\n              dépend de votre capacité à respecter ces\n              deux dimensions simultanément.", l.sunmoontext],
    ["Ascendant et présence", l.asc],
    ["Expression extérieure", l.outer],
    ["Votre chemin d’accomplissement", l.title2],
    ["Votre thème natal devient réellement utile\n            lorsqu’il vous aide à reconnaître vos\n            forces, à comprendre vos réactions et à\n            choisir une direction plus consciente.", l.intro2],
    ["Pensée et communication", l.thought],
    ["Amour et valeurs", l.love],
    ["Action et volonté", l.action],
    ["Expansion et maturité", l.expansion],
    ["Votre direction de vie", l.direction],
    ["Vos grands équilibres", l.balances],
    ["Synthèse personnelle", l.personal],
    ["Votre portrait Premium", l.portrait],
    ["Relisez ce rapport à différents moments de votre vie. Certaines\n    interprétations prendront davantage de sens au fil de vos expériences,\n    de vos décisions et de votre évolution personnelle.", l.closing],
    ["non précisé", l.unspecified],
  ];

  for (const [from, to] of staticPairs) out = replaceAll(out, from, to);

  // Localize French sign literals while keeping internal element/modality maps intact.
  // Only replace signs in runtime-generated display helpers below, not the source constants.

  const signObject = JSON.stringify(signMap);

  out = replaceFunction(out, "createCoreIdentityText", "createDominantText", `
function createCoreIdentityText(
  sun: PremiumPlanet | null,
  moon: PremiumPlanet | null,
  ascendantSign: string | null
): string {
  const signs = ${signObject} as Record<string, string>;
  const tr = (value?: string | null) =>
    value ? (signs[getFrenchSign(value)] || signs[value] || value) : "${l.unspecified}";
  const sunSign = tr(sun?.sign);
  const moonSign = tr(moon?.sign);
  const ascendant = tr(ascendantSign);
  return ({"en": "Your astrological identity is based on a Sun in {sun}, a Moon in {moon}, and an Ascendant in {asc}. The Sun describes the direction you seek to give your life. The Moon shows what you need to feel inwardly secure. The Ascendant reveals how you enter the world and the first energy you express. Your balance becomes stronger when these three dimensions support rather than oppose one another.", "es": "Tu identidad astrológica se apoya en un Sol en {sun}, una Luna en {moon} y un Ascendente en {asc}. El Sol describe la dirección que buscas dar a tu vida. La Luna muestra lo que necesitas para sentir seguridad interior. El Ascendente revela tu manera de entrar en el mundo y la primera energía que expresas. Tu equilibrio se fortalece cuando estas tres dimensiones se apoyan en lugar de enfrentarse.", "de": "Ihre astrologische Identität beruht auf einer Sonne in {sun}, einem Mond in {moon} und einem Aszendenten in {asc}. Die Sonne beschreibt die Richtung, die Sie Ihrem Leben geben möchten. Der Mond zeigt, was Sie für innere Sicherheit brauchen. Der Aszendent offenbart, wie Sie der Welt begegnen und welche Energie Sie zuerst ausdrücken. Ihr Gleichgewicht wird stärker, wenn diese drei Dimensionen einander unterstützen.", "it": "La tua identità astrologica si basa su un Sole in {sun}, una Luna in {moon} e un Ascendente in {asc}. Il Sole descrive la direzione che cerchi di dare alla tua vita. La Luna mostra ciò di cui hai bisogno per sentirti interiormente al sicuro. L'Ascendente rivela il tuo modo di entrare nel mondo e la prima energia che esprimi. Il tuo equilibrio diventa più solido quando queste tre dimensioni si sostengono.", "pt": "Sua identidade astrológica se apoia em um Sol em {sun}, uma Lua em {moon} e um Ascendente em {asc}. O Sol descreve a direção que você busca dar à sua vida. A Lua mostra o que você precisa para se sentir interiormente segura. O Ascendente revela sua maneira de entrar no mundo e a primeira energia que expressa. Seu equilíbrio se fortalece quando essas três dimensões se apoiam."}[lang])
    .replace("{sun}", sunSign)
    .replace("{moon}", moonSign)
    .replace("{asc}", ascendant);
}
`);

  out = replaceFunction(out, "createDominantText", "createHouseText", `
function createDominantText(
  element: ElementName,
  modality: ModalityName
): string {
  const elementNames: Record<string, string> = ({"en": {"Feu": "Fire", "Terre": "Earth", "Air": "Air", "Eau": "Water"}, "es": {"Feu": "Fuego", "Terre": "Tierra", "Air": "Aire", "Eau": "Agua"}, "de": {"Feu": "Feuer", "Terre": "Erde", "Air": "Luft", "Eau": "Wasser"}, "it": {"Feu": "Fuoco", "Terre": "Terra", "Air": "Aria", "Eau": "Acqua"}, "pt": {"Feu": "Fogo", "Terre": "Terra", "Air": "Ar", "Eau": "Água"}}[lang]);
  const modalityNames: Record<string, string> = ({"en": {"Cardinal": "Cardinal", "Fixe": "Fixed", "Mutable": "Mutable"}, "es": {"Cardinal": "Cardinal", "Fixe": "Fija", "Mutable": "Mutable"}, "de": {"Cardinal": "Kardinal", "Fixe": "Fix", "Mutable": "Veränderlich"}, "it": {"Cardinal": "Cardinale", "Fixe": "Fissa", "Mutable": "Mutevole"}, "pt": {"Cardinal": "Cardinal", "Fixe": "Fixa", "Mutable": "Mutável"}}[lang]);
  return ({"en": "Your dominant {element} energy colors the overall tone of your chart, while the {modality} modality describes your natural way of moving forward. Together they form one of the most visible signatures of your chart.", "es": "Tu energía dominante de {element} colorea el tono general de tu carta, mientras que la modalidad {modality} describe tu manera natural de avanzar. Juntas forman una de las firmas más visibles de tu carta.", "de": "Ihre dominante {element}-Energie prägt den Grundton Ihres Horoskops, während die Modalität {modality} Ihre natürliche Art des Vorangehens beschreibt. Gemeinsam bilden sie eine der sichtbarsten Signaturen Ihres Horoskops.", "it": "La tua energia dominante di {element} colora il tono generale del tema, mentre la modalità {modality} descrive il tuo modo naturale di avanzare. Insieme formano una delle firme più visibili del tuo tema.", "pt": "Sua energia dominante de {element} colore o tom geral do seu mapa, enquanto a modalidade {modality} descreve sua maneira natural de avançar. Juntas formam uma das assinaturas mais visíveis do seu mapa."}[lang])
    .replace("{element}", elementNames[element] || element)
    .replace("{modality}", modalityNames[modality] || modality);
}
`);

  out = replaceFunction(out, "createHouseText", "createPlanetCardText", `
function createHouseText(
  house: number | null
): string {
  if (!house) return ({"en": "The available data do not identify a clearly dominant house. Your energy appears to be distributed across several areas of life.", "es": "Los datos disponibles no permiten identificar una casa claramente dominante. Tu energía parece distribuirse entre varios ámbitos de la vida.", "de": "Die verfügbaren Daten lassen kein eindeutig dominantes Haus erkennen. Ihre Energie scheint sich auf mehrere Lebensbereiche zu verteilen.", "it": "I dati disponibili non permettono di identificare una casa chiaramente dominante. La tua energia sembra distribuirsi tra diversi ambiti della vita.", "pt": "Os dados disponíveis não permitem identificar uma casa claramente dominante. Sua energia parece se distribuir entre várias áreas da vida."}[lang]);
  const meanings: Record<number, string> = ({"en": {"1": "identity, self-assertion, and how you present yourself to the world", "2": "security, resources, and personal values", "3": "communication, learning, and daily exchanges", "4": "roots, home, and inner security", "5": "creativity, self-expression, pleasure, and love", "6": "daily work, organization, habits, and service", "7": "relationships, commitments, and partnerships", "8": "transformation, intimacy, personal power, and shared resources", "9": "growth, beliefs, travel, and transmission", "10": "vocation, career, ambition, and recognition", "11": "projects, networks, friendships, and your vision of the future", "12": "inner life, the unconscious, intuition, and retreat"}, "es": {"1": "la identidad, la afirmación personal y la manera de presentarte al mundo", "2": "la seguridad, los recursos y los valores personales", "3": "la comunicación, el aprendizaje y los intercambios cotidianos", "4": "las raíces, el hogar y la seguridad interior", "5": "la creatividad, la expresión personal, los placeres y el amor", "6": "el trabajo diario, la organización, los hábitos y el servicio", "7": "las relaciones, los compromisos y las asociaciones", "8": "las transformaciones, la intimidad, el poder personal y los recursos compartidos", "9": "el crecimiento, las creencias, los viajes y la transmisión", "10": "la vocación, la carrera, las ambiciones y el reconocimiento", "11": "los proyectos, las redes, las amistades y la visión de futuro", "12": "la vida interior, el inconsciente, la intuición y el retiro"}, "de": {"1": "Identität, Selbstbehauptung und die Art, wie Sie sich der Welt zeigen", "2": "Sicherheit, Ressourcen und persönliche Werte", "3": "Kommunikation, Lernen und täglicher Austausch", "4": "Wurzeln, Zuhause und innere Sicherheit", "5": "Kreativität, Selbstausdruck, Freude und Liebe", "6": "Alltagsarbeit, Organisation, Gewohnheiten und Dienst", "7": "Beziehungen, Verpflichtungen und Partnerschaften", "8": "Transformation, Intimität, persönliche Macht und gemeinsame Ressourcen", "9": "Wachstum, Überzeugungen, Reisen und Vermittlung", "10": "Berufung, Karriere, Ambitionen und Anerkennung", "11": "Projekte, Netzwerke, Freundschaften und Zukunftsvision", "12": "Innenleben, Unbewusstes, Intuition und Rückzug"}, "it": {"1": "l'identità, l'affermazione personale e il modo in cui ti presenti al mondo", "2": "la sicurezza, le risorse e i valori personali", "3": "la comunicazione, l'apprendimento e gli scambi quotidiani", "4": "le radici, la casa e la sicurezza interiore", "5": "la creatività, l'espressione personale, i piaceri e l'amore", "6": "il lavoro quotidiano, l'organizzazione, le abitudini e il servizio", "7": "le relazioni, gli impegni e le collaborazioni", "8": "le trasformazioni, l'intimità, il potere personale e le risorse condivise", "9": "la crescita, le convinzioni, i viaggi e la trasmissione", "10": "la vocazione, la carriera, le ambizioni e il riconoscimento", "11": "i progetti, le reti, le amicizie e la visione del futuro", "12": "la vita interiore, l'inconscio, l'intuizione e il ritiro"}, "pt": {"1": "a identidade, a afirmação pessoal e a maneira como você se apresenta ao mundo", "2": "a segurança, os recursos e os valores pessoais", "3": "a comunicação, os aprendizados e as trocas cotidianas", "4": "as raízes, o lar e a segurança interior", "5": "a criatividade, a expressão pessoal, os prazeres e o amor", "6": "o trabalho diário, a organização, os hábitos e o serviço", "7": "os relacionamentos, os compromissos e as parcerias", "8": "as transformações, a intimidade, o poder pessoal e os recursos compartilhados", "9": "o crescimento, as crenças, as viagens e a transmissão", "10": "a vocação, a carreira, as ambições e o reconhecimento", "11": "os projetos, as redes, as amizades e a visão de futuro", "12": "a vida interior, o inconsciente, a intuição e o recolhimento"}}[lang]);
  return ({"en": "House {house} concentrates an important part of your energy. It concerns {meaning}. Experiences associated with this house may recur and play a major role in your development.", "es": "La Casa {house} concentra una parte importante de tu energía. Se relaciona con {meaning}. Las experiencias asociadas a esta casa pueden repetirse y desempeñar un papel importante en tu evolución.", "de": "Haus {house} bündelt einen wichtigen Teil Ihrer Energie. Es betrifft {meaning}. Erfahrungen dieses Hauses können wiederkehren und eine wichtige Rolle in Ihrer Entwicklung spielen.", "it": "La Casa {house} concentra una parte importante della tua energia. Riguarda {meaning}. Le esperienze associate a questa casa possono ripresentarsi e svolgere un ruolo importante nella tua evoluzione.", "pt": "A Casa {house} concentra uma parte importante da sua energia. Ela se relaciona com {meaning}. As experiências associadas a essa casa podem se repetir e desempenhar um papel importante na sua evolução."}[lang])
    .replace("{house}", String(house))
    .replace("{meaning}", meanings[house] || "");
}
`);

  out = replaceFunction(out, "createPlanetCardText", "createLifeDirectionText", `
function createPlanetCardText(
  planet: PremiumPlanet | null,
  name: CorePlanetName
): string {
  const names: Record<string, string> = ({"en": {"Sun": "Sun", "Moon": "Moon", "Mercury": "Mercury", "Venus": "Venus", "Mars": "Mars", "Jupiter": "Jupiter", "Saturn": "Saturn"}, "es": {"Sun": "Sol", "Moon": "Luna", "Mercury": "Mercurio", "Venus": "Venus", "Mars": "Marte", "Jupiter": "Júpiter", "Saturn": "Saturno"}, "de": {"Sun": "Sonne", "Moon": "Mond", "Mercury": "Merkur", "Venus": "Venus", "Mars": "Mars", "Jupiter": "Jupiter", "Saturn": "Saturn"}, "it": {"Sun": "Sole", "Moon": "Luna", "Mercury": "Mercurio", "Venus": "Venere", "Mars": "Marte", "Jupiter": "Giove", "Saturn": "Saturno"}, "pt": {"Sun": "Sol", "Moon": "Lua", "Mercury": "Mercúrio", "Venus": "Vênus", "Mars": "Marte", "Jupiter": "Júpiter", "Saturn": "Saturno"}}[lang]);
  const keys: Record<string, string> = ({"en": {"Sun": "The Sun represents your conscious identity and your need to become fully yourself.", "Moon": "The Moon reveals your emotional world, security needs, and instinctive reactions.", "Mercury": "Mercury describes your thinking, communication, and way of understanding situations.", "Venus": "Venus reveals your way of loving, your values, tastes, and need for harmony.", "Mars": "Mars shows your drive, desire, and way of defending your goals.", "Jupiter": "Jupiter describes your confidence, growth, opportunities, and search for meaning.", "Saturn": "Saturn reveals your discipline, responsibilities, and what you build over time."}, "es": {"Sun": "El Sol representa tu identidad consciente y la necesidad de llegar a ser plenamente tú misma.", "Moon": "La Luna revela tu mundo emocional, tus necesidades de seguridad y tus reacciones instintivas.", "Mercury": "Mercurio describe tu pensamiento, tu comunicación y tu manera de comprender las situaciones.", "Venus": "Venus revela tu manera de amar, tus valores, tus gustos y tu necesidad de armonía.", "Mars": "Marte muestra tu energía de acción, tu deseo y tu manera de defender tus objetivos.", "Jupiter": "Júpiter describe tu confianza, tu crecimiento, tus posibilidades y tu búsqueda de sentido.", "Saturn": "Saturno revela tu disciplina, tus responsabilidades y lo que construyes a largo plazo."}, "de": {"Sun": "Die Sonne steht für Ihre bewusste Identität und das Bedürfnis, ganz Sie selbst zu werden.", "Moon": "Der Mond offenbart Ihre Gefühlswelt, Sicherheitsbedürfnisse und instinktiven Reaktionen.", "Mercury": "Merkur beschreibt Ihr Denken, Ihre Kommunikation und Ihre Art, Situationen zu verstehen.", "Venus": "Venus offenbart Ihre Art zu lieben, Ihre Werte, Ihren Geschmack und Ihr Harmoniebedürfnis.", "Mars": "Mars zeigt Ihre Tatkraft, Ihr Begehren und Ihre Art, Ziele zu verteidigen.", "Jupiter": "Jupiter beschreibt Ihr Vertrauen, Wachstum, Ihre Möglichkeiten und Sinnsuche.", "Saturn": "Saturn offenbart Ihre Disziplin, Verantwortung und das, was Sie langfristig aufbauen."}, "it": {"Sun": "Il Sole rappresenta la tua identità cosciente e il bisogno di diventare pienamente te stessa.", "Moon": "La Luna rivela il tuo mondo emotivo, i bisogni di sicurezza e le reazioni istintive.", "Mercury": "Mercurio descrive il tuo pensiero, la comunicazione e il modo di comprendere le situazioni.", "Venus": "Venere rivela il tuo modo di amare, i valori, i gusti e il bisogno di armonia.", "Mars": "Marte mostra la tua energia d'azione, il desiderio e il modo di difendere i tuoi obiettivi.", "Jupiter": "Giove descrive la tua fiducia, la crescita, le possibilità e la ricerca di significato.", "Saturn": "Saturno rivela la tua disciplina, le responsabilità e ciò che costruisci nel tempo."}, "pt": {"Sun": "O Sol representa sua identidade consciente e a necessidade de se tornar plenamente você mesma.", "Moon": "A Lua revela seu mundo emocional, suas necessidades de segurança e suas reações instintivas.", "Mercury": "Mercúrio descreve seu pensamento, sua comunicação e sua maneira de compreender as situações.", "Venus": "Vênus revela sua maneira de amar, seus valores, gostos e necessidade de harmonia.", "Mars": "Marte mostra sua energia de ação, seu desejo e sua maneira de defender seus objetivos.", "Jupiter": "Júpiter descreve sua confiança, seu crescimento, suas possibilidades e sua busca de sentido.", "Saturn": "Saturno revela sua disciplina, suas responsabilidades e aquilo que você constrói ao longo do tempo."}}[lang]);
  const signs = ${signObject} as Record<string, string>;
  const displayName = names[name] || name;
  if (!planet) return ({"en": "The available data do not allow a precise analysis of {planet}.", "es": "Los datos disponibles no permiten analizar con precisión {planet}.", "de": "Die verfügbaren Daten erlauben keine genaue Analyse von {planet}.", "it": "I dati disponibili non consentono di analizzare con precisione {planet}.", "pt": "Os dados disponíveis não permitem analisar com precisão {planet}."}[lang]).replace("{planet}", displayName);
  const frSign = getFrenchSign(planet.sign);
  const sign = signs[frSign] || signs[planet.sign || ""] || planet.sign || "${l.unspecified}";
  const houseText = typeof planet.house === "number"
    ? " " + l.inword + " " + l.house + " " + String(Math.round(planet.house))
    : "";
  return (keys[name] || "") + " " + displayName + " " + l.inword + " " + sign + houseText + ". " + (({"en": "This position shows how this psychological function is expressed concretely in your chart.", "es": "Esta posición muestra cómo se expresa concretamente esta función psicológica en tu carta.", "de": "Diese Position zeigt, wie sich diese psychologische Funktion konkret in Ihrem Horoskop ausdrückt.", "it": "Questa posizione mostra come questa funzione psicologica si esprime concretamente nel tuo tema.", "pt": "Esta posição mostra como essa função psicológica se expressa concretamente no seu mapa."}[lang])) + "";
}
`);

  out = replaceFunction(out, "createLifeDirectionText", "createFinalSynthesis", `
function createLifeDirectionText(
  midheavenSign: string | null,
  dominantHouse: number | null
): string {
  const signs = ${signObject} as Record<string, string>;
  const meanings: Record<number, string> = ({"en": {"1": "identity, self-assertion, and how you present yourself to the world", "2": "security, resources, and personal values", "3": "communication, learning, and daily exchanges", "4": "roots, home, and inner security", "5": "creativity, self-expression, pleasure, and love", "6": "daily work, organization, habits, and service", "7": "relationships, commitments, and partnerships", "8": "transformation, intimacy, personal power, and shared resources", "9": "growth, beliefs, travel, and transmission", "10": "vocation, career, ambition, and recognition", "11": "projects, networks, friendships, and your vision of the future", "12": "inner life, the unconscious, intuition, and retreat"}, "es": {"1": "la identidad, la afirmación personal y la manera de presentarte al mundo", "2": "la seguridad, los recursos y los valores personales", "3": "la comunicación, el aprendizaje y los intercambios cotidianos", "4": "las raíces, el hogar y la seguridad interior", "5": "la creatividad, la expresión personal, los placeres y el amor", "6": "el trabajo diario, la organización, los hábitos y el servicio", "7": "las relaciones, los compromisos y las asociaciones", "8": "las transformaciones, la intimidad, el poder personal y los recursos compartidos", "9": "el crecimiento, las creencias, los viajes y la transmisión", "10": "la vocación, la carrera, las ambiciones y el reconocimiento", "11": "los proyectos, las redes, las amistades y la visión de futuro", "12": "la vida interior, el inconsciente, la intuición y el retiro"}, "de": {"1": "Identität, Selbstbehauptung und die Art, wie Sie sich der Welt zeigen", "2": "Sicherheit, Ressourcen und persönliche Werte", "3": "Kommunikation, Lernen und täglicher Austausch", "4": "Wurzeln, Zuhause und innere Sicherheit", "5": "Kreativität, Selbstausdruck, Freude und Liebe", "6": "Alltagsarbeit, Organisation, Gewohnheiten und Dienst", "7": "Beziehungen, Verpflichtungen und Partnerschaften", "8": "Transformation, Intimität, persönliche Macht und gemeinsame Ressourcen", "9": "Wachstum, Überzeugungen, Reisen und Vermittlung", "10": "Berufung, Karriere, Ambitionen und Anerkennung", "11": "Projekte, Netzwerke, Freundschaften und Zukunftsvision", "12": "Innenleben, Unbewusstes, Intuition und Rückzug"}, "it": {"1": "l'identità, l'affermazione personale e il modo in cui ti presenti al mondo", "2": "la sicurezza, le risorse e i valori personali", "3": "la comunicazione, l'apprendimento e gli scambi quotidiani", "4": "le radici, la casa e la sicurezza interiore", "5": "la creatività, l'espressione personale, i piaceri e l'amore", "6": "il lavoro quotidiano, l'organizzazione, le abitudini e il servizio", "7": "le relazioni, gli impegni e le collaborazioni", "8": "le trasformazioni, l'intimità, il potere personale e le risorse condivise", "9": "la crescita, le convinzioni, i viaggi e la trasmissione", "10": "la vocazione, la carriera, le ambizioni e il riconoscimento", "11": "i progetti, le reti, le amicizie e la visione del futuro", "12": "la vita interiore, l'inconscio, l'intuizione e il ritiro"}, "pt": {"1": "a identidade, a afirmação pessoal e a maneira como você se apresenta ao mundo", "2": "a segurança, os recursos e os valores pessoais", "3": "a comunicação, os aprendizados e as trocas cotidianas", "4": "as raízes, o lar e a segurança interior", "5": "a criatividade, a expressão pessoal, os prazeres e o amor", "6": "o trabalho diário, a organização, os hábitos e o serviço", "7": "os relacionamentos, os compromissos e as parcerias", "8": "as transformações, a intimidade, o poder pessoal e os recursos compartilhados", "9": "o crescimento, as crenças, as viagens e a transmissão", "10": "a vocação, a carreira, as ambições e o reconhecimento", "11": "os projetos, as redes, as amizades e a visão de futuro", "12": "a vida interior, o inconsciente, a intuição e o recolhimento"}}[lang]);
  const mc = midheavenSign
    ? ({"en": "Your Midheaven in {sign} indicates the direction in which your vocation and recognition can develop.", "es": "Tu Medio Cielo en {sign} indica la dirección en la que pueden desarrollarse tu vocación y tu reconocimiento.", "de": "Ihr Medium Coeli in {sign} zeigt die Richtung, in der sich Ihre Berufung und Anerkennung entwickeln können.", "it": "Il tuo Medio Cielo in {sign} indica la direzione in cui possono svilupparsi la tua vocazione e il tuo riconoscimento.", "pt": "Seu Meio do Céu em {sign} indica a direção na qual sua vocação e seu reconhecimento podem se desenvolver."}[lang]).replace("{sign}", signs[midheavenSign] || midheavenSign)
    : ({"en": "The Midheaven sign is not available in the analyzed data.", "es": "El signo del Medio Cielo no está disponible en los datos analizados.", "de": "Das Zeichen des Medium Coeli ist in den analysierten Daten nicht verfügbar.", "it": "Il segno del Medio Cielo non è disponibile nei dati analizzati.", "pt": "O signo do Meio do Céu não está disponível nos dados analisados."}[lang]);
  const house = dominantHouse
    ? ({"en": "House {house} adds particular importance to {meaning}.", "es": "La Casa {house} añade una importancia particular al ámbito de {meaning}.", "de": "Haus {house} verleiht dem Bereich {meaning} besondere Bedeutung.", "it": "La Casa {house} aggiunge un'importanza particolare all'ambito di {meaning}.", "pt": "A Casa {house} acrescenta uma importância particular à área de {meaning}."}[lang]).replace("{house}", String(dominantHouse)).replace("{meaning}", meanings[dominantHouse] || "")
    : "";
  return (mc + " " + house + " " + (({"en": "Your path gains coherence when your outer ambitions remain faithful to your inner needs and personal values.", "es": "Tu trayectoria gana coherencia cuando tus ambiciones exteriores permanecen fieles a tus necesidades interiores y a tus valores personales.", "de": "Ihr Weg gewinnt an Stimmigkeit, wenn Ihre äußeren Ambitionen Ihren inneren Bedürfnissen und persönlichen Werten treu bleiben.", "it": "Il tuo percorso acquista coerenza quando le ambizioni esteriori restano fedeli ai tuoi bisogni interiori e ai tuoi valori personali.", "pt": "Sua trajetória ganha coerência quando suas ambições externas permanecem fiéis às suas necessidades interiores e aos seus valores pessoais."}[lang])) + "").trim();
}
`);

  out = replaceFunction(out, "createFinalSynthesis", "PdfPremiumSynthesis", `
function createFinalSynthesis(
  sun: PremiumPlanet | null,
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null,
  element: ElementName,
  modality: ModalityName
): string {
  const signs = ${signObject} as Record<string, string>;
  const tr = (value?: string) => {
    const fr = getFrenchSign(value);
    return signs[fr] || signs[value || ""] || value || "${l.unspecified}";
  };
  const elements: Record<string, string> = ({"en": {"Feu": "Fire", "Terre": "Earth", "Air": "Air", "Eau": "Water"}, "es": {"Feu": "Fuego", "Terre": "Tierra", "Air": "Aire", "Eau": "Agua"}, "de": {"Feu": "Feuer", "Terre": "Erde", "Air": "Luft", "Eau": "Wasser"}, "it": {"Feu": "Fuoco", "Terre": "Terra", "Air": "Aria", "Eau": "Acqua"}, "pt": {"Feu": "Fogo", "Terre": "Terra", "Air": "Ar", "Eau": "Água"}}[lang]);
  const modalities: Record<string, string> = ({"en": {"Cardinal": "Cardinal", "Fixe": "Fixed", "Mutable": "Mutable"}, "es": {"Cardinal": "Cardinal", "Fixe": "Fija", "Mutable": "Mutable"}, "de": {"Cardinal": "Kardinal", "Fixe": "Fix", "Mutable": "Veränderlich"}, "it": {"Cardinal": "Cardinale", "Fixe": "Fissa", "Mutable": "Mutevole"}, "pt": {"Cardinal": "Cardinal", "Fixe": "Fixa", "Mutable": "Mutável"}}[lang]);
  return ({"en": "Your chart brings together a Sun in {sun}, a Moon in {moon}, Venus in {venus}, Mars in {mars}, and Saturn in {saturn}. Your dominant {element} energy provides the main substance of your energy, while your {modality} modality describes your natural way of moving forward. Your potential does not depend on a single planet or sign. It emerges from the way all these dimensions work together. Your qualities become more powerful when you use them consciously, and your challenges become strengths when you choose to work with them rather than endure them. Your birth chart does not fix your future: it highlights your tendencies, resources, and the paths through which you can become more fully yourself.", "es": "Tu carta reúne un Sol en {sun}, una Luna en {moon}, Venus en {venus}, Marte en {mars} y Saturno en {saturn}. Tu dominante de {element} aporta la sustancia principal de tu energía, mientras que tu modalidad {modality} describe tu manera natural de avanzar. Tu potencial no depende de un solo planeta ni de un solo signo. Nace de la forma en que todas estas dimensiones colaboran. Tus cualidades se vuelven más poderosas cuando las utilizas conscientemente y tus desafíos se transforman en fortalezas cuando decides trabajarlos. Tu carta natal no fija tu futuro: ilumina tus tendencias, tus recursos y los caminos por los que puedes llegar a ser más plenamente tú misma.", "de": "Ihr Horoskop vereint eine Sonne in {sun}, einen Mond in {moon}, Venus in {venus}, Mars in {mars} und Saturn in {saturn}. Ihre dominante {element}-Energie liefert die Hauptsubstanz Ihrer Energie, während die Modalität {modality} Ihre natürliche Art des Vorangehens beschreibt. Ihr Potenzial hängt nicht von einem einzelnen Planeten oder Zeichen ab. Es entsteht aus dem Zusammenspiel all dieser Dimensionen. Ihre Qualitäten werden stärker, wenn Sie sie bewusst einsetzen, und Herausforderungen werden zu Stärken, wenn Sie an ihnen arbeiten. Ihr Geburtshoroskop legt Ihre Zukunft nicht fest: Es beleuchtet Tendenzen, Ressourcen und Wege, auf denen Sie immer mehr Sie selbst werden können.", "it": "Il tuo tema riunisce un Sole in {sun}, una Luna in {moon}, Venere in {venus}, Marte in {mars} e Saturno in {saturn}. La dominante di {element} fornisce la sostanza principale della tua energia, mentre la modalità {modality} descrive il tuo modo naturale di avanzare. Il tuo potenziale non dipende da un solo pianeta o segno. Nasce dal modo in cui tutte queste dimensioni collaborano. Le tue qualità diventano più potenti quando le usi consapevolmente e le sfide diventano punti di forza quando scegli di lavorarci. Il tuo tema natale non fissa il futuro: mette in luce tendenze, risorse e percorsi attraverso cui puoi diventare sempre più pienamente te stessa.", "pt": "Seu mapa reúne um Sol em {sun}, uma Lua em {moon}, Vênus em {venus}, Marte em {mars} e Saturno em {saturn}. Sua dominante de {element} fornece a substância principal da sua energia, enquanto a modalidade {modality} descreve sua maneira natural de avançar. Seu potencial não depende de um único planeta ou signo. Ele nasce da forma como todas essas dimensões trabalham juntas. Suas qualidades se tornam mais poderosas quando você as usa conscientemente, e seus desafios se transformam em forças quando você decide trabalhá-los. Seu mapa natal não fixa seu futuro: ele ilumina suas tendências, seus recursos e os caminhos pelos quais você pode se tornar cada vez mais plenamente você mesma."}[lang])
    .replace("{sun}", tr(sun?.sign))
    .replace("{moon}", tr(moon?.sign))
    .replace("{venus}", tr(venus?.sign))
    .replace("{mars}", tr(mars?.sign))
    .replace("{saturn}", tr(saturn?.sign))
    .replace("{element}", elements[element] || element)
    .replace("{modality}", modalities[modality] || modality);
}

export default function PdfPremiumSynthesis`);

  // Remaining long static sections on page 2.
  out = replaceAll(out, "• Votre thème révèle une personnalité qui progresse en conciliant\n    profondeur, intuition et détermination. Ces qualités deviennent vos\n    plus grandes forces lorsqu'elles s'expriment avec confiance.\n\n    {\"\\n\\n\"}\n\n    • Les défis rencontrés au cours de votre vie ne constituent pas des\n    limites, mais des occasions de mieux comprendre vos besoins et\n    d'affirmer votre véritable identité.\n\n    {\"\\n\\n\"}\n\n    • Votre équilibre se construit lorsque vos émotions, votre réflexion\n    et vos décisions avancent dans une même direction, sans qu'aucune de\n    ces dimensions ne prenne systématiquement le dessus.\n\n    {\"\\n\\n\"}\n\n    • Votre carte du ciel met en lumière un potentiel d'évolution durable.\n    En restant fidèle à vos valeurs tout en accueillant les changements,\n    vous développez progressivement la version la plus accomplie de\n    vous-même.", ({"en": "• Your chart reveals a personality that grows by reconciling depth, intuition, and determination. These qualities become your greatest strengths when expressed with confidence.\\n\\n• The challenges encountered throughout your life are not limits, but opportunities to better understand your needs and affirm your true identity.\\n\\n• Your balance develops when your emotions, thoughts, and decisions move in the same direction without any one dimension consistently taking over.\\n\\n• Your birth chart highlights a potential for lasting growth. By remaining true to your values while welcoming change, you gradually develop the most fulfilled version of yourself.", "es": "• Tu carta revela una personalidad que progresa conciliando profundidad, intuición y determinación. Estas cualidades se convierten en tus mayores fortalezas cuando se expresan con confianza.\\n\\n• Los desafíos de tu vida no son límites, sino oportunidades para comprender mejor tus necesidades y afirmar tu verdadera identidad.\\n\\n• Tu equilibrio se construye cuando tus emociones, tu reflexión y tus decisiones avanzan en una misma dirección.\\n\\n• Tu carta natal destaca un potencial de evolución duradera. Al permanecer fiel a tus valores y aceptar los cambios, desarrollas progresivamente la versión más plena de ti misma.", "de": "• Ihr Horoskop zeigt eine Persönlichkeit, die wächst, indem sie Tiefe, Intuition und Entschlossenheit miteinander verbindet. Diese Qualitäten werden zu Ihren größten Stärken, wenn Sie sie selbstbewusst ausdrücken.\\n\\n• Herausforderungen sind keine Grenzen, sondern Gelegenheiten, Ihre Bedürfnisse besser zu verstehen und Ihre wahre Identität zu stärken.\\n\\n• Ihr Gleichgewicht entsteht, wenn Gefühle, Gedanken und Entscheidungen in dieselbe Richtung gehen.\\n\\n• Ihr Geburtshoroskop zeigt ein Potenzial für nachhaltige Entwicklung. Wenn Sie Ihren Werten treu bleiben und Veränderungen annehmen, entfalten Sie nach und nach Ihre erfüllteste Version.", "it": "• Il tuo tema rivela una personalità che cresce conciliando profondità, intuizione e determinazione. Queste qualità diventano i tuoi maggiori punti di forza quando si esprimono con fiducia.\\n\\n• Le sfide incontrate nella vita non sono limiti, ma occasioni per comprendere meglio i tuoi bisogni e affermare la tua vera identità.\\n\\n• Il tuo equilibrio si costruisce quando emozioni, riflessione e decisioni avanzano nella stessa direzione.\\n\\n• Il tuo tema natale mette in luce un potenziale di evoluzione duratura. Restando fedele ai tuoi valori e accogliendo i cambiamenti, sviluppi progressivamente la versione più realizzata di te stessa.", "pt": "• Seu mapa revela uma personalidade que evolui conciliando profundidade, intuição e determinação. Essas qualidades se tornam suas maiores forças quando são expressas com confiança.\\n\\n• Os desafios encontrados ao longo da vida não são limites, mas oportunidades para compreender melhor suas necessidades e afirmar sua verdadeira identidade.\\n\\n• Seu equilíbrio se constrói quando suas emoções, sua reflexão e suas decisões avançam na mesma direção.\\n\\n• Seu mapa natal destaca um potencial de evolução duradoura. Ao permanecer fiel aos seus valores e acolher as mudanças, você desenvolve gradualmente a versão mais realizada de si mesma."}[lang]));
  out = replaceAll(out, "Au fil des pages, votre thème natal s'est révélé sous différents\n    angles : votre personnalité, votre sensibilité, vos talents, vos\n    relations, vos défis et vos aspirations profondes. Pris séparément,\n    chacun de ces éléments apporte un éclairage précieux. Réunis, ils\n    composent une signature astrologique unique où chaque énergie trouve\n    sa place dans un ensemble cohérent. Cette synthèse rassemble les\n    principaux enseignements de votre carte du ciel afin de vous offrir\n    une vision globale de votre potentiel, de vos ressources naturelles\n    et des chemins qui peuvent accompagner votre évolution.", ({"en": "Throughout these pages, your birth chart has revealed different facets of your personality, sensitivity, talents, relationships, challenges, and deepest aspirations. Each element offers valuable insight on its own; together, they form a unique astrological signature in which every energy has its place. This synthesis brings together the main lessons of your birth chart to offer an overall view of your potential, natural resources, and paths of growth.", "es": "A lo largo de estas páginas, tu carta natal ha revelado distintas facetas de tu personalidad, sensibilidad, talentos, relaciones, desafíos y aspiraciones profundas. Cada elemento aporta una perspectiva valiosa por separado; reunidos, forman una firma astrológica única. Esta síntesis reúne las principales enseñanzas de tu carta natal para ofrecerte una visión global de tu potencial, tus recursos naturales y tus caminos de evolución.", "de": "Im Verlauf dieser Seiten hat Ihr Geburtshoroskop verschiedene Facetten Ihrer Persönlichkeit, Sensibilität, Talente, Beziehungen, Herausforderungen und tiefsten Bestrebungen gezeigt. Jedes Element bietet für sich wertvolle Einsichten; gemeinsam bilden sie eine einzigartige astrologische Signatur. Diese Synthese vereint die wichtigsten Erkenntnisse Ihres Horoskops und bietet einen Gesamtblick auf Ihr Potenzial, Ihre natürlichen Ressourcen und Ihre Entwicklungswege.", "it": "Nel corso di queste pagine, il tuo tema natale ha rivelato diversi aspetti della tua personalità, sensibilità, talenti, relazioni, sfide e aspirazioni profonde. Ogni elemento offre da solo una prospettiva preziosa; insieme formano una firma astrologica unica. Questa sintesi riunisce i principali insegnamenti del tuo tema natale per offrirti una visione globale del tuo potenziale, delle tue risorse naturali e dei tuoi percorsi di evoluzione.", "pt": "Ao longo destas páginas, seu mapa natal revelou diferentes aspectos da sua personalidade, sensibilidade, talentos, relacionamentos, desafios e aspirações profundas. Cada elemento oferece, separadamente, uma perspectiva valiosa; juntos, formam uma assinatura astrológica única. Esta síntese reúne os principais ensinamentos do seu mapa natal para oferecer uma visão global do seu potencial, dos seus recursos naturais e dos caminhos que podem acompanhar sua evolução."}[lang]));

  return out;
}
