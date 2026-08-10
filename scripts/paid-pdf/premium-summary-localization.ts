import type { PaidPdfLocale } from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;

const LABELS = {
  "en": {
    "badge": "Premium Synthesis",
    "kicker": "Astrological portrait",
    "title": "Your Three Great Pillars",
    "lead": "The Sun, the Moon, and the Ascendant form the central core of your personality. Their interaction reveals your conscious identity, your emotional needs, and your spontaneous way of relating to the world.",
    "yourSun": "Your Sun",
    "sunMeaning": "Your deep identity",
    "sunDesc": "The Sun represents your center, your will, your inner direction, and the qualities you are gradually seeking to express with greater confidence.",
    "yourMoon": "Your Moon",
    "moonMeaning": "Your emotional world",
    "moonDesc": "The Moon reveals your sensitivity, your instinctive reactions, your emotional needs, and the conditions that allow you to regain a sense of inner security.",
    "yourAsc": "Your Ascendant",
    "ascMeaning": "Your spontaneous presence",
    "ascDesc": "The Ascendant describes your first impulse when facing life, your way of beginning things, and the energy that others often perceive from the very first contact.",
    "meeting": "The meeting of your three energies",
    "summaryTitle": "Sun in {sun}, Moon in {moon} and Ascendant in {asc}",
    "summary1": "Your Sun represents the person you are consciously seeking to become. Your Moon reveals what you need to feel emotionally nourished and protected. Your Ascendant describes your instinctive way of approaching life and opening each new experience.",
    "summary2": "The balance between these three dimensions forms the central signature of your personality. Some energies may naturally support each other, while others express different needs. These contrasts are not flaws: they reveal the richness, depth, and evolutionary potential of your natal chart.",
    "inner": "Your inner direction",
    "innerText": "Your Sun indicates the qualities you are called to develop and embody. The more consciously you express this energy, the more you can move forward with coherence, confidence, and a sense of direction.",
    "balance": "Your key to balance",
    "balanceText": "Recognizing your lunar needs allows your Ascendant to express itself more accurately. When your inner security supports your identity, your presence becomes more natural and authentic.",
    "note": "The following pages explore your ten main planets in greater depth. The Premium report will then analyze the houses, aspects, and major dominants that make your birth chart entirely unique.",
    "unspecified": "Unspecified"
  },
  "es": {
    "badge": "Síntesis Premium",
    "kicker": "Retrato astrológico",
    "title": "Tus tres grandes pilares",
    "lead": "El Sol, la Luna y el Ascendente forman el núcleo central de tu personalidad. Su interacción revela tu identidad consciente, tus necesidades emocionales y tu manera espontánea de relacionarte con el mundo.",
    "yourSun": "Tu Sol",
    "sunMeaning": "Tu identidad profunda",
    "sunDesc": "El Sol representa tu centro, tu voluntad, tu dirección interior y las cualidades que buscas expresar progresivamente con mayor confianza.",
    "yourMoon": "Tu Luna",
    "moonMeaning": "Tu mundo emocional",
    "moonDesc": "La Luna revela tu sensibilidad, tus reacciones instintivas, tus necesidades afectivas y las condiciones que te permiten recuperar una sensación de seguridad interior.",
    "yourAsc": "Tu Ascendente",
    "ascMeaning": "Tu presencia espontánea",
    "ascDesc": "El Ascendente describe tu primera reacción ante la vida, tu manera de comenzar las cosas y la energía que los demás suelen percibir desde los primeros contactos.",
    "meeting": "El encuentro de tus tres energías",
    "summaryTitle": "Sol en {sun}, Luna en {moon} y Ascendente en {asc}",
    "summary1": "Tu Sol representa la persona en la que buscas convertirte conscientemente. Tu Luna revela lo que necesitas para sentirte emocionalmente nutrida y protegida. Tu Ascendente describe tu forma instintiva de abordar la vida y abrir cada nueva experiencia.",
    "summary2": "El equilibrio entre estas tres dimensiones constituye la firma central de tu personalidad. Algunas energías pueden apoyarse de forma natural, mientras que otras expresan necesidades diferentes. Estos contrastes no son defectos: revelan la riqueza, la profundidad y el potencial de evolución de tu carta natal.",
    "inner": "Tu dirección interior",
    "innerText": "Tu Sol indica las cualidades que estás llamada a desarrollar y asumir. Cuanto más conscientemente expresas esta energía, más puedes avanzar con coherencia, confianza y sentido de dirección.",
    "balance": "Tu clave de equilibrio",
    "balanceText": "Reconocer tus necesidades lunares permite que tu Ascendente se exprese con mayor precisión. Cuando tu seguridad interior sostiene tu identidad, tu presencia se vuelve más natural y auténtica.",
    "note": "Las páginas siguientes profundizan en tus diez planetas principales. El informe Premium analizará después las casas, los aspectos y las grandes dominantes que hacen que tu carta natal sea totalmente única.",
    "unspecified": "No especificado"
  },
  "de": {
    "badge": "Premium-Synthese",
    "kicker": "Astrologisches Porträt",
    "title": "Ihre drei großen Säulen",
    "lead": "Sonne, Mond und Aszendent bilden den zentralen Kern Ihrer Persönlichkeit. Ihr Zusammenspiel zeigt Ihre bewusste Identität, Ihre emotionalen Bedürfnisse und Ihre spontane Art, mit der Welt in Beziehung zu treten.",
    "yourSun": "Ihre Sonne",
    "sunMeaning": "Ihre tiefe Identität",
    "sunDesc": "Die Sonne steht für Ihr Zentrum, Ihren Willen, Ihre innere Richtung und die Qualitäten, die Sie nach und nach mit größerem Vertrauen ausdrücken möchten.",
    "yourMoon": "Ihr Mond",
    "moonMeaning": "Ihre Gefühlswelt",
    "moonDesc": "Der Mond offenbart Ihre Sensibilität, instinktiven Reaktionen, emotionalen Bedürfnisse und die Bedingungen, unter denen Sie innere Sicherheit wiederfinden.",
    "yourAsc": "Ihr Aszendent",
    "ascMeaning": "Ihre spontane Präsenz",
    "ascDesc": "Der Aszendent beschreibt Ihren ersten Impuls gegenüber dem Leben, Ihre Art, Dinge zu beginnen, und die Energie, die andere oft schon bei den ersten Kontakten wahrnehmen.",
    "meeting": "Das Zusammenspiel Ihrer drei Energien",
    "summaryTitle": "Sonne in {sun}, Mond in {moon} und Aszendent in {asc}",
    "summary1": "Ihre Sonne steht für die Person, die Sie bewusst werden möchten. Ihr Mond zeigt, was Sie brauchen, um sich emotional genährt und geschützt zu fühlen. Ihr Aszendent beschreibt Ihre instinktive Art, dem Leben zu begegnen und neue Erfahrungen zu beginnen.",
    "summary2": "Das Gleichgewicht zwischen diesen drei Dimensionen bildet die zentrale Signatur Ihrer Persönlichkeit. Manche Energien unterstützen sich auf natürliche Weise, andere drücken unterschiedliche Bedürfnisse aus. Diese Kontraste sind keine Fehler: Sie zeigen den Reichtum, die Tiefe und das Entwicklungspotenzial Ihres Geburtshoroskops.",
    "inner": "Ihre innere Richtung",
    "innerText": "Ihre Sonne zeigt die Qualitäten, die Sie entwickeln und annehmen sollen. Je bewusster Sie diese Energie ausdrücken, desto klarer, selbstbewusster und zielgerichteter können Sie vorangehen.",
    "balance": "Ihr Schlüssel zum Gleichgewicht",
    "balanceText": "Wenn Sie Ihre Mondbedürfnisse erkennen, kann sich Ihr Aszendent stimmiger ausdrücken. Wenn Ihre innere Sicherheit Ihre Identität trägt, wirkt Ihre Präsenz natürlicher und authentischer.",
    "note": "Die folgenden Seiten vertiefen Ihre zehn wichtigsten Planeten. Anschließend analysiert der Premium-Bericht Häuser, Aspekte und dominante Faktoren, die Ihr Geburtshoroskop einzigartig machen.",
    "unspecified": "Nicht angegeben"
  },
  "it": {
    "badge": "Sintesi Premium",
    "kicker": "Ritratto astrologico",
    "title": "I tuoi tre grandi pilastri",
    "lead": "Il Sole, la Luna e l’Ascendente formano il nucleo centrale della tua personalità. La loro interazione rivela la tua identità cosciente, i tuoi bisogni emotivi e il tuo modo spontaneo di entrare in relazione con il mondo.",
    "yourSun": "Il tuo Sole",
    "sunMeaning": "La tua identità profonda",
    "sunDesc": "Il Sole rappresenta il tuo centro, la tua volontà, la tua direzione interiore e le qualità che cerchi progressivamente di esprimere con maggiore fiducia.",
    "yourMoon": "La tua Luna",
    "moonMeaning": "Il tuo mondo emotivo",
    "moonDesc": "La Luna rivela la tua sensibilità, le reazioni istintive, i bisogni affettivi e le condizioni che ti permettono di ritrovare un senso di sicurezza interiore.",
    "yourAsc": "Il tuo Ascendente",
    "ascMeaning": "La tua presenza spontanea",
    "ascDesc": "L’Ascendente descrive il tuo primo impulso di fronte alla vita, il tuo modo di iniziare le cose e l’energia che gli altri percepiscono spesso fin dai primi contatti.",
    "meeting": "L’incontro delle tue tre energie",
    "summaryTitle": "Sole in {sun}, Luna in {moon} e Ascendente in {asc}",
    "summary1": "Il tuo Sole rappresenta la persona che cerchi consapevolmente di diventare. La tua Luna rivela ciò di cui hai bisogno per sentirti emotivamente nutrita e protetta. Il tuo Ascendente descrive il tuo modo istintivo di affrontare la vita e aprire ogni nuova esperienza.",
    "summary2": "L’equilibrio tra queste tre dimensioni costituisce la firma centrale della tua personalità. Alcune energie possono sostenersi naturalmente, mentre altre esprimono bisogni differenti. Questi contrasti non sono difetti: rivelano la ricchezza, la profondità e il potenziale evolutivo del tuo tema natale.",
    "inner": "La tua direzione interiore",
    "innerText": "Il tuo Sole indica le qualità che sei chiamata a sviluppare e assumere. Più esprimi consapevolmente questa energia, più puoi avanzare con coerenza, fiducia e senso della direzione.",
    "balance": "La tua chiave di equilibrio",
    "balanceText": "Riconoscere i tuoi bisogni lunari permette al tuo Ascendente di esprimersi con maggiore precisione. Quando la tua sicurezza interiore sostiene la tua identità, la tua presenza diventa più naturale e autentica.",
    "note": "Le pagine seguenti approfondiscono i tuoi dieci pianeti principali. Il rapporto Premium analizzerà poi le case, gli aspetti e le grandi dominanti che rendono il tuo tema natale del tutto unico.",
    "unspecified": "Non specificato"
  },
  "pt": {
    "badge": "Síntese Premium",
    "kicker": "Retrato astrológico",
    "title": "Seus três grandes pilares",
    "lead": "O Sol, a Lua e o Ascendente formam o núcleo central da sua personalidade. A interação entre eles revela sua identidade consciente, suas necessidades emocionais e sua maneira espontânea de se relacionar com o mundo.",
    "yourSun": "Seu Sol",
    "sunMeaning": "Sua identidade profunda",
    "sunDesc": "O Sol representa seu centro, sua vontade, sua direção interior e as qualidades que você busca expressar progressivamente com mais confiança.",
    "yourMoon": "Sua Lua",
    "moonMeaning": "Seu mundo emocional",
    "moonDesc": "A Lua revela sua sensibilidade, suas reações instintivas, suas necessidades afetivas e as condições que permitem recuperar um sentimento de segurança interior.",
    "yourAsc": "Seu Ascendente",
    "ascMeaning": "Sua presença espontânea",
    "ascDesc": "O Ascendente descreve seu primeiro impulso diante da vida, sua maneira de começar as coisas e a energia que os outros percebem com frequência desde os primeiros contatos.",
    "meeting": "O encontro das suas três energias",
    "summaryTitle": "Sol em {sun}, Lua em {moon} e Ascendente em {asc}",
    "summary1": "Seu Sol representa a pessoa que você busca conscientemente se tornar. Sua Lua revela o que você precisa para se sentir emocionalmente nutrida e protegida. Seu Ascendente descreve sua maneira instintiva de abordar a vida e abrir cada nova experiência.",
    "summary2": "O equilíbrio entre essas três dimensões constitui a assinatura central da sua personalidade. Algumas energias podem se apoiar naturalmente, enquanto outras expressam necessidades diferentes. Esses contrastes não são defeitos: revelam a riqueza, a profundidade e o potencial de evolução do seu mapa natal.",
    "inner": "Sua direção interior",
    "innerText": "Seu Sol indica as qualidades que você é chamada a desenvolver e assumir. Quanto mais conscientemente expressa essa energia, mais pode avançar com coerência, confiança e senso de direção.",
    "balance": "Sua chave de equilíbrio",
    "balanceText": "Reconhecer suas necessidades lunares permite que seu Ascendente se expresse com mais precisão. Quando sua segurança interior sustenta sua identidade, sua presença se torna mais natural e autêntica.",
    "note": "As páginas seguintes aprofundam seus dez planetas principais. O relatório Premium analisará depois as casas, os aspectos e as grandes dominantes que tornam seu mapa natal totalmente único.",
    "unspecified": "Não especificado"
  }
} as const;
const SIGN_TRANSLATIONS = {
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

export function localizePremiumSummary(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") return source;

  const lang = locale as NonFrenchLocale;
  const l = LABELS[lang];
  const signMap = SIGN_TRANSLATIONS[lang] as Record<string, string>;

  let out = source.replace(/\r\n/g, "\n");

  const staticPairs: Array<[string, string]> = [
    ["Synthèse Premium", l.badge],
    ["Portrait astrologique", l.kicker],
    ["Vos trois grands piliers", l.title],
    ["Le Soleil, la Lune et l’Ascendant forment le noyau\n          central de votre personnalité. Leur interaction révèle\n          votre identité consciente, vos besoins émotionnels et\n          votre manière spontanée d’entrer en relation avec le\n          monde.", l.lead],
    ["Votre Soleil", l.yourSun],
    ["Votre identité profonde", l.sunMeaning],
    ["Le Soleil représente votre centre, votre volonté,\n            votre direction intérieure et les qualités que vous\n            cherchez progressivement à exprimer avec davantage\n            de confiance.", l.sunDesc],
    ["Votre Lune", l.yourMoon],
    ["Votre monde émotionnel", l.moonMeaning],
    ["La Lune révèle votre sensibilité, vos réactions\n            instinctives, vos besoins affectifs et les conditions\n            qui vous permettent de retrouver un sentiment de\n            sécurité intérieure.", l.moonDesc],
    ["Votre Ascendant", l.yourAsc],
    ["Votre présence spontanée", l.ascMeaning],
    ["L’Ascendant décrit votre première impulsion face à\n            l’existence, votre manière de commencer les choses\n            et l’énergie que les autres perçoivent souvent dès\n            les premiers contacts.", l.ascDesc],
    ["La rencontre de vos trois énergies", l.meeting],
    ["Votre Soleil représente la personne que vous cherchez\n            consciemment à devenir. Votre Lune révèle ce dont\n            vous avez besoin pour vous sentir émotionnellement\n            nourri et protégé. Votre Ascendant décrit votre façon\n            instinctive d’aborder la vie et d’ouvrir chaque\n            nouvelle expérience.", l.summary1],
    ["L’équilibre entre ces trois dimensions constitue la\n            signature centrale de votre personnalité. Certaines\n            énergies peuvent se soutenir naturellement, tandis\n            que d’autres expriment des besoins différents. Ces\n            contrastes ne sont pas des défauts : ils révèlent la\n            richesse, la profondeur et le potentiel d’évolution\n            de votre thème natal.", l.summary2],
    ["Votre direction intérieure", l.inner],
    ["Votre Soleil indique les qualités que vous êtes\n            appelé à développer et à assumer. Plus vous exprimez\n            cette énergie consciemment, plus vous pouvez avancer\n            avec cohérence, confiance et sentiment de direction.", l.innerText],
    ["Votre clé d’équilibre", l.balance],
    ["Reconnaître vos besoins lunaires permet à votre\n            Ascendant de s’exprimer avec plus de justesse. Lorsque\n            votre sécurité intérieure soutient votre identité,\n            votre présence devient plus naturelle et authentique.", l.balanceText],
    ["Les prochaines pages approfondissent vos dix principales\n          planètes. Le rapport Premium analysera ensuite les maisons,\n          les aspects et les grandes dominantes qui rendent votre\n          carte du ciel entièrement unique.", l.note],
  ];

  for (const [from, to] of staticPairs) {
    out = replaceAll(out, from, to);
  }

  const signObject = JSON.stringify(signMap);

  out = replaceFunction(out, "translateSign", "getSignFromLongitude", `
function translateSign(
  value: unknown
): string {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    return ${JSON.stringify(l.unspecified)};
  }

  const cleanValue = value.trim();

  const frenchNames: Record<string, string> = {
    Aries: "Bélier",
    Taurus: "Taureau",
    Gemini: "Gémeaux",
    Cancer: "Cancer",
    Leo: "Lion",
    Virgo: "Vierge",
    Libra: "Balance",
    Scorpio: "Scorpion",
    Sagittarius: "Sagittaire",
    Capricorn: "Capricorne",
    Aquarius: "Verseau",
    Pisces: "Poissons",
    Bélier: "Bélier",
    Taureau: "Taureau",
    Gémeaux: "Gémeaux",
    Lion: "Lion",
    Vierge: "Vierge",
    Balance: "Balance",
    Scorpion: "Scorpion",
    Sagittaire: "Sagittaire",
    Capricorne: "Capricorne",
    Verseau: "Verseau",
    Poissons: "Poissons",
  };

  const translated: Record<string, string> = ${signObject};
  const fr = frenchNames[cleanValue] || cleanValue;

  return translated[fr] || translated[cleanValue] || cleanValue;
}
`);

  out = replaceFunction(out, "getSignFromLongitude", "getPlanet", `
function getSignFromLongitude(
  value: number
): string {
  if (!Number.isFinite(value)) {
    return ${JSON.stringify(l.unspecified)};
  }

  const translatedSigns = [
    ${JSON.stringify(signMap["Bélier"])},
    ${JSON.stringify(signMap["Taureau"])},
    ${JSON.stringify(signMap["Gémeaux"])},
    ${JSON.stringify(signMap["Cancer"])},
    ${JSON.stringify(signMap["Lion"])},
    ${JSON.stringify(signMap["Vierge"])},
    ${JSON.stringify(signMap["Balance"])},
    ${JSON.stringify(signMap["Scorpion"])},
    ${JSON.stringify(signMap["Sagittaire"])},
    ${JSON.stringify(signMap["Capricorne"])},
    ${JSON.stringify(signMap["Verseau"])},
    ${JSON.stringify(signMap["Poissons"])},
  ];

  const normalized = ((value % 360) + 360) % 360;
  const index = Math.floor(normalized / 30);

  return translatedSigns[index] || ${JSON.stringify(l.unspecified)};
}
`);

  out = replaceAll(out, '"Non précisé"', JSON.stringify(l.unspecified));

out = replaceAll(
  out,
  "Soleil en {sunSign}, Lune en {moonSign} et\n            Ascendant {ascendantSign}",
  `{${JSON.stringify(l.summaryTitle)}`
    + `.replace("{sun}", sunSign)`
    + `.replace("{moon}", moonSign)`
    + `.replace("{asc}", ascendantSign)}`,
);
