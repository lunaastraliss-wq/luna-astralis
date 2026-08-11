import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale =
  Exclude<PaidPdfLocale, "fr">;

type ChallengeLabels = {
  analysis: string;

  evolutionChallenges: string;
  evolutionIntro: string;
  overview: string;
  attentionPoints: string;

  transformationAxes: string;
  transformationIntro: string;

  transformTensions: string;
  integrationText: string;
  anglesText: string;

  accompanyChallenges: string;
  practicalKeys: string;
  guidanceText: string;

  invitationToEvolve: string;
  finalText: string;

  undeterminedSign: string;

  sun: string;
  moon: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  pluto: string;

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
};

const LABELS: Record<
  NonFrenchLocale,
  ChallengeLabels
> = {
  en: {
    analysis:
      "Signature Analysis",

    evolutionChallenges:
      "Your challenges for growth",

    evolutionIntro:
      "The challenges in your natal chart represent neither flaws nor definitive limitations. They reveal reactions that can become repetitive, as well as qualities that benefit from being developed with greater awareness.",

    overview:
      "Each planet has a more fluid way of expressing itself and an area that requires attention. Recognizing these mechanisms allows you to choose a more appropriate response rather than automatically repeating the same reactions.",

    attentionPoints:
      "Your main points of attention",

    transformationAxes:
      "Your paths of transformation",

    transformationIntro:
      "The slower influences in your natal chart describe lessons that develop over time. They show how experience can transform difficulty into maturity, discernment, and inner strength.",

    transformTensions:
      "Transforming tensions into resources",

    integrationText:
      "The tensions in your natal chart become constructive when you can recognize the need they are trying to protect. An excessive reaction often conceals a search for security, recognition, freedom, or inner coherence. By identifying this need, you can choose a more conscious way of expressing it.",

    anglesText:
      " Your astrological angles also indicate the areas in which certain lessons may become particularly visible throughout your journey.",

    accompanyChallenges:
      "How to work with your challenges",

    practicalKeys:
      "Practical keys",

    guidanceText:
      "• Observe the situations that regularly trigger the same reactions. They often point to an important need that requires recognition.\n\n• Avoid judging yourself when you identify a difficulty. Becoming aware of a pattern is already an essential step toward transformation.\n\n• Rely on your natural strengths to move through the more demanding areas of your natal chart.\n\n• Allow yourself to evolve gradually. Some qualities require time, experience, and several attempts before they become fully available.",

    invitationToEvolve:
      "An invitation to evolve",

    finalText:
      "Your natal chart does not ask you to erase your contradictions. It invites you to understand what they reveal, recognize the needs that run through them, and develop freer responses. Your deepest challenges can therefore become the places where your maturity, confidence, and discernment are built with the greatest strength.",

    undeterminedSign:
      "Undetermined sign",

    sun: "Sun",
    moon: "Moon",
    mercury: "Mercury",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    pluto: "Pluto",

    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",
  },

  es: {
    analysis:
      "Análisis Firma",

    evolutionChallenges:
      "Tus desafíos de evolución",

    evolutionIntro:
      "Los desafíos de tu carta natal no representan defectos ni límites definitivos. Revelan reacciones que pueden volverse repetitivas, así como cualidades que conviene desarrollar con mayor conciencia.",

    overview:
      "Cada planeta posee una manera más fluida de expresarse y una zona que requiere atención. Reconocer estos mecanismos te permite elegir una respuesta más adecuada en lugar de repetir automáticamente las mismas reacciones.",

    attentionPoints:
      "Tus principales puntos de atención",

    transformationAxes:
      "Tus ejes de transformación",

    transformationIntro:
      "Las influencias más lentas de tu carta natal describen aprendizajes que se construyen con el tiempo. Muestran cómo la experiencia puede transformar una dificultad en madurez, discernimiento y fuerza interior.",

    transformTensions:
      "Transformar las tensiones en recursos",

    integrationText:
      "Las tensiones de tu carta natal se vuelven constructivas cuando puedes reconocer la necesidad que intentan proteger. Una reacción excesiva suele ocultar una búsqueda de seguridad, reconocimiento, libertad o coherencia interior. Al identificar esta necesidad, puedes elegir una manera más consciente de expresarla.",

    anglesText:
      " Tus ángulos astrológicos también indican los ámbitos en los que ciertos aprendizajes pueden hacerse especialmente visibles en tu recorrido.",

    accompanyChallenges:
      "Cómo acompañar tus desafíos",

    practicalKeys:
      "Claves prácticas",

    guidanceText:
      "• Observa las situaciones que desencadenan regularmente las mismas reacciones. A menudo señalan una necesidad importante que necesita ser reconocida.\n\n• Evita juzgarte cuando identifiques una dificultad. Tomar conciencia de un mecanismo ya constituye una etapa esencial de transformación.\n\n• Apóyate en tus fortalezas naturales para atravesar las zonas más exigentes de tu carta natal.\n\n• Concédete el derecho de evolucionar progresivamente. Algunas cualidades requieren tiempo, experiencia y varios intentos antes de estar plenamente disponibles.",

    invitationToEvolve:
      "Una invitación a evolucionar",

    finalText:
      "Tu carta natal no te pide borrar tus contradicciones. Te invita a comprender lo que revelan, reconocer las necesidades que las atraviesan y desarrollar respuestas más libres. Tus desafíos más profundos pueden convertirse así en los lugares donde tu madurez, tu confianza y tu discernimiento se construyen con mayor fuerza.",

    undeterminedSign:
      "Signo no determinado",

    sun: "Sol",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Neptuno",
    pluto: "Plutón",

    aries: "Aries",
    taurus: "Tauro",
    gemini: "Géminis",
    cancer: "Cáncer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Escorpio",
    sagittarius: "Sagitario",
    capricorn: "Capricornio",
    aquarius: "Acuario",
    pisces: "Piscis",
  },

  de: {
    analysis:
      "Signatur-Analyse",

    evolutionChallenges:
      "Ihre Entwicklungsherausforderungen",

    evolutionIntro:
      "Die Herausforderungen Ihres Geburtshoroskops stellen weder Fehler noch endgültige Grenzen dar. Sie zeigen Reaktionen, die sich wiederholen können, sowie Qualitäten, die durch mehr Bewusstsein weiterentwickelt werden können.",

    overview:
      "Jeder Planet besitzt eine fließendere Ausdrucksweise und einen Bereich, der besondere Aufmerksamkeit verlangt. Wenn Sie diese Mechanismen erkennen, können Sie angemessener reagieren, anstatt automatisch dieselben Reaktionen zu wiederholen.",

    attentionPoints:
      "Ihre wichtigsten Aufmerksamkeitspunkte",

    transformationAxes:
      "Ihre Wege der Transformation",

    transformationIntro:
      "Die langsameren Einflüsse Ihres Geburtshoroskops beschreiben Lernprozesse, die sich mit der Zeit entwickeln. Sie zeigen, wie Erfahrung eine Schwierigkeit in Reife, Urteilsvermögen und innere Stärke verwandeln kann.",

    transformTensions:
      "Spannungen in Ressourcen verwandeln",

    integrationText:
      "Die Spannungen Ihres Geburtshoroskops werden konstruktiv, wenn Sie das Bedürfnis erkennen können, das sie zu schützen versuchen. Eine übermäßige Reaktion verbirgt häufig die Suche nach Sicherheit, Anerkennung, Freiheit oder innerer Kohärenz. Wenn Sie dieses Bedürfnis erkennen, können Sie einen bewussteren Ausdruck dafür wählen.",

    anglesText:
      " Ihre astrologischen Achsen zeigen außerdem die Lebensbereiche, in denen bestimmte Lernprozesse auf Ihrem Weg besonders sichtbar werden können.",

    accompanyChallenges:
      "Wie Sie mit Ihren Herausforderungen umgehen",

    practicalKeys:
      "Praktische Schlüssel",

    guidanceText:
      "• Beobachten Sie Situationen, die regelmäßig dieselben Reaktionen auslösen. Sie weisen häufig auf ein wichtiges Bedürfnis hin, das erkannt werden möchte.\n\n• Verurteilen Sie sich nicht, wenn Sie eine Schwierigkeit erkennen. Das Bewusstsein für einen Mechanismus ist bereits ein wesentlicher Schritt zur Veränderung.\n\n• Nutzen Sie Ihre natürlichen Stärken, um die anspruchsvolleren Bereiche Ihres Geburtshoroskops zu bewältigen.\n\n• Erlauben Sie sich, sich schrittweise weiterzuentwickeln. Manche Qualitäten benötigen Zeit, Erfahrung und mehrere Versuche, bevor sie vollständig verfügbar werden.",

    invitationToEvolve:
      "Eine Einladung zur Entwicklung",

    finalText:
      "Ihr Geburtshoroskop verlangt nicht von Ihnen, Ihre Widersprüche auszulöschen. Es lädt Sie dazu ein, zu verstehen, was sie offenbaren, die dahinterliegenden Bedürfnisse zu erkennen und freiere Reaktionen zu entwickeln. Ihre tiefsten Herausforderungen können so zu den Bereichen werden, in denen Ihre Reife, Ihr Vertrauen und Ihr Urteilsvermögen besonders kraftvoll wachsen.",

    undeterminedSign:
      "Unbestimmtes Zeichen",

    sun: "Sonne",
    moon: "Mond",
    mercury: "Merkur",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptun",
    pluto: "Pluto",

    aries: "Widder",
    taurus: "Stier",
    gemini: "Zwillinge",
    cancer: "Krebs",
    leo: "Löwe",
    virgo: "Jungfrau",
    libra: "Waage",
    scorpio: "Skorpion",
    sagittarius: "Schütze",
    capricorn: "Steinbock",
    aquarius: "Wassermann",
    pisces: "Fische",
  },

  it: {
    analysis:
      "Analisi Firma",

    evolutionChallenges:
      "Le tue sfide di evoluzione",

    evolutionIntro:
      "Le sfide del tuo tema natale non rappresentano difetti né limiti definitivi. Rivelano reazioni che possono diventare ripetitive e qualità che possono essere sviluppate con maggiore consapevolezza.",

    overview:
      "Ogni pianeta possiede un modo più fluido di esprimersi e una zona che richiede attenzione. Riconoscere questi meccanismi ti permette di scegliere una risposta più adatta invece di ripetere automaticamente le stesse reazioni.",

    attentionPoints:
      "I tuoi principali punti di attenzione",

    transformationAxes:
      "I tuoi assi di trasformazione",

    transformationIntro:
      "Le influenze più lente del tuo tema natale descrivono apprendimenti che si costruiscono nel tempo. Mostrano come l’esperienza possa trasformare una difficoltà in maturità, discernimento e forza interiore.",

    transformTensions:
      "Trasformare le tensioni in risorse",

    integrationText:
      "Le tensioni del tuo tema natale diventano costruttive quando riesci a riconoscere il bisogno che cercano di proteggere. Una reazione eccessiva nasconde spesso una ricerca di sicurezza, riconoscimento, libertà o coerenza interiore. Identificando questo bisogno, puoi scegliere un modo più consapevole di esprimerlo.",

    anglesText:
      " I tuoi angoli astrologici indicano inoltre gli ambiti nei quali alcuni apprendimenti possono diventare particolarmente visibili nel tuo percorso.",

    accompanyChallenges:
      "Come affrontare le tue sfide",

    practicalKeys:
      "Chiavi pratiche",

    guidanceText:
      "• Osserva le situazioni che scatenano regolarmente le stesse reazioni. Spesso segnalano un bisogno importante che richiede di essere riconosciuto.\n\n• Evita di giudicarti quando identifichi una difficoltà. La consapevolezza di un meccanismo costituisce già una tappa essenziale della trasformazione.\n\n• Appoggiati ai tuoi punti di forza naturali per attraversare le zone più impegnative del tuo tema natale.\n\n• Concediti il diritto di evolvere gradualmente. Alcune qualità richiedono tempo, esperienza e diversi tentativi prima di diventare pienamente disponibili.",

    invitationToEvolve:
      "Un invito a evolvere",

    finalText:
      "Il tuo tema natale non ti chiede di cancellare le tue contraddizioni. Ti invita a comprendere ciò che rivelano, a riconoscere i bisogni che le attraversano e a sviluppare risposte più libere. Le tue sfide più profonde possono così diventare i luoghi in cui la tua maturità, la tua fiducia e il tuo discernimento si costruiscono con maggiore forza.",

    undeterminedSign:
      "Segno non determinato",

    sun: "Sole",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venere",
    mars: "Marte",
    jupiter: "Giove",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Nettuno",
    pluto: "Plutone",

    aries: "Ariete",
    taurus: "Toro",
    gemini: "Gemelli",
    cancer: "Cancro",
    leo: "Leone",
    virgo: "Vergine",
    libra: "Bilancia",
    scorpio: "Scorpione",
    sagittarius: "Sagittario",
    capricorn: "Capricorno",
    aquarius: "Acquario",
    pisces: "Pesci",
  },

  pt: {
    analysis:
      "Análise Assinatura",

    evolutionChallenges:
      "Seus desafios de evolução",

    evolutionIntro:
      "Os desafios do seu mapa natal não representam defeitos nem limites definitivos. Eles revelam reações que podem se tornar repetitivas, assim como qualidades que podem ser desenvolvidas com maior consciência.",

    overview:
      "Cada planeta possui uma maneira mais fluida de se expressar e uma área que exige atenção. Reconhecer esses mecanismos permite escolher uma resposta mais adequada em vez de repetir automaticamente as mesmas reações.",

    attentionPoints:
      "Seus principais pontos de atenção",

    transformationAxes:
      "Seus eixos de transformação",

    transformationIntro:
      "As influências mais lentas do seu mapa natal descrevem aprendizados que se constroem ao longo do tempo. Elas mostram como a experiência pode transformar uma dificuldade em maturidade, discernimento e força interior.",

    transformTensions:
      "Transformar tensões em recursos",

    integrationText:
      "As tensões do seu mapa natal tornam-se construtivas quando você consegue reconhecer a necessidade que elas procuram proteger. Uma reação excessiva muitas vezes esconde uma busca por segurança, reconhecimento, liberdade ou coerência interior. Ao identificar essa necessidade, você pode escolher uma maneira mais consciente de expressá-la.",

    anglesText:
      " Seus ângulos astrológicos também indicam as áreas nas quais certos aprendizados podem se tornar particularmente visíveis em sua trajetória.",

    accompanyChallenges:
      "Como acompanhar seus desafios",

    practicalKeys:
      "Chaves práticas",

    guidanceText:
      "• Observe as situações que desencadeiam regularmente as mesmas reações. Elas frequentemente indicam uma necessidade importante que precisa ser reconhecida.\n\n• Evite se julgar quando identificar uma dificuldade. A consciência de um mecanismo já constitui uma etapa essencial de transformação.\n\n• Apoie-se em suas forças naturais para atravessar as áreas mais exigentes do seu mapa natal.\n\n• Permita-se evoluir gradualmente. Algumas qualidades exigem tempo, experiência e várias tentativas antes de se tornarem plenamente disponíveis.",

    invitationToEvolve:
      "Um convite para evoluir",

    finalText:
      "Seu mapa natal não pede que você apague suas contradições. Ele convida você a compreender o que elas revelam, reconhecer as necessidades que as atravessam e desenvolver respostas mais livres. Seus desafios mais profundos podem assim se tornar os lugares onde sua maturidade, sua confiança e seu discernimento se constroem com mais força.",

    undeterminedSign:
      "Signo não determinado",

    sun: "Sol",
    moon: "Lua",
    mercury: "Mercúrio",
    venus: "Vênus",
    mars: "Marte",
    jupiter: "Júpiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Netuno",
    pluto: "Plutão",

    aries: "Áries",
    taurus: "Touro",
    gemini: "Gêmeos",
    cancer: "Câncer",
    leo: "Leão",
    virgo: "Virgem",
    libra: "Libra",
    scorpio: "Escorpião",
    sagittarius: "Sagitário",
    capricorn: "Capricórnio",
    aquarius: "Aquário",
    pisces: "Peixes",
  },
};

function replaceAll(
  source: string,
  from: string,
  to: string,
): string {
  return source
    .split(from)
    .join(to);
}

export function localizeSignatureChallenges(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const lang =
    locale as NonFrenchLocale;

  const labels =
    LABELS[lang];

  const challengeTranslations: Record<
    string,
    string
  > = {
  "en": {
    "Affirmer pleinement son identité": "Fully affirm your identity",
    "Développer une confiance stable": "Develop stable self-confidence",
    "Trouver son équilibre personnel": "Find your personal balance",
    "Exprimer son potentiel": "Express your potential",
    "Gérer les émotions": "Manage emotions",
    "Créer une sécurité intérieure": "Build inner security",
    "Éviter les réactions impulsives": "Avoid impulsive reactions",
    "Exprimer ses besoins": "Express your needs",
    "Canaliser le mental": "Channel your thoughts",
    "Clarifier la communication": "Clarify communication",
    "Éviter la dispersion": "Avoid scattering your energy",
    "Développer l'écoute": "Develop listening skills",
    "Équilibrer le donner et le recevoir": "Balance giving and receiving",
    "Développer l'estime de soi": "Develop self-esteem",
    "Poser des limites saines": "Set healthy boundaries",
    "Clarifier ses attentes": "Clarify your expectations",
    "Canaliser l'énergie": "Channel your energy",
    "Gérer l'impatience": "Manage impatience",
    "Choisir ses combats": "Choose your battles",
    "Agir avec discernement": "Act with discernment",
    "Éviter les excès": "Avoid excess",
    "Conserver le sens des réalités": "Stay grounded in reality",
    "Mesurer les risques": "Assess risks",
    "Développer la constance": "Develop consistency",
    "Alléger la pression": "Ease the pressure",
    "Faire confiance au temps": "Trust the timing",
    "Accepter l'imperfection": "Accept imperfection",
    "Reconnaître ses réussites": "Recognize your achievements",
    "Trouver un équilibre entre liberté et stabilité": "Find a balance between freedom and stability",
    "Canaliser les changements": "Channel change constructively",
    "Accepter certains cadres": "Accept certain structures",
    "Développer la patience": "Develop patience",
    "Rester ancré dans le réel": "Stay grounded in reality",
    "Clarifier ses intuitions": "Clarify your intuitions",
    "Éviter les illusions": "Avoid illusions",
    "Protéger son énergie": "Protect your energy",
    "Lâcher le contrôle": "Let go of control",
    "Accepter les transformations": "Accept transformation",
    "Faire confiance au renouveau": "Trust renewal",
    "Transformer les peurs en forces": "Transform fears into strengths",
    "Impulsivité": "Impulsiveness",
    "Manque de patience": "Lack of patience",
    "Difficulté à écouter les autres": "Difficulty listening to others",
    "Tendance à vouloir tout diriger": "Tendency to want to control everything",
    "Résistance au changement": "Resistance to change",
    "Attachement excessif aux habitudes": "Excessive attachment to habits",
    "Possessivité": "Possessiveness",
    "Difficulté à sortir de sa zone de confort": "Difficulty leaving your comfort zone",
    "Dispersion": "Scattered focus",
    "Hésitation": "Hesitation",
    "Difficulté à approfondir": "Difficulty going deeper",
    "Surcharge mentale": "Mental overload",
    "Hypersensibilité": "Hypersensitivity",
    "Attachement au passé": "Attachment to the past",
    "Difficulté à exprimer directement ses besoins": "Difficulty expressing your needs directly",
    "Protection émotionnelle excessive": "Excessive emotional self-protection",
    "Besoin de reconnaissance": "Need for recognition",
    "Fierté blessée": "Wounded pride",
    "Difficulté à accepter la critique": "Difficulty accepting criticism",
    "Tendance à vouloir tout contrôler": "Tendency to want to control everything",
    "Perfectionnisme": "Perfectionism",
    "Autocritique": "Self-criticism",
    "Anxiété face aux erreurs": "Anxiety about mistakes",
    "Difficulté à lâcher prise": "Difficulty letting go",
    "Indécision": "Indecision",
    "Peur du conflit": "Fear of conflict",
    "Recherche excessive d'approbation": "Excessive need for approval",
    "Difficulté à affirmer ses besoins": "Difficulty asserting your needs",
    "Tendance à tout intérioriser": "Tendency to internalize everything",
    "Besoin de contrôler certaines situations": "Need to control certain situations",
    "Méfiance excessive": "Excessive mistrust",
    "Excès d'optimisme": "Excessive optimism",
    "Manque de constance": "Lack of consistency",
    "Difficulté avec les contraintes": "Difficulty with constraints",
    "Impatience": "Impatience",
    "Rigidité": "Rigidity",
    "Exigence envers soi-même": "Excessive self-demand",
    "Difficulté à montrer sa vulnérabilité": "Difficulty showing vulnerability",
    "Priorité excessive au travail": "Excessive priority given to work",
    "Distance émotionnelle": "Emotional distance",
    "Besoin d'indépendance très marqué": "Very strong need for independence",
    "Remise en question permanente": "Constant questioning",
    "Difficulté avec l'autorité": "Difficulty with authority",
    "Manque de limites": "Lack of boundaries",
    "Idéalisation": "Idealization",
    "Tendance à fuir certaines réalités": "Tendency to avoid certain realities",
    "Grande sensibilité émotionnelle": "High emotional sensitivity",
    "Développer davantage de conscience": "Develop greater awareness",
    "Trouver un meilleur équilibre": "Find a better balance",
    "Faire confiance à son évolution": "Trust your evolution",
    "Exprimer pleinement son potentiel": "Fully express your potential"
  },
  "es": {
    "Affirmer pleinement son identité": "Afirmar plenamente tu identidad",
    "Développer une confiance stable": "Desarrollar una confianza estable",
    "Trouver son équilibre personnel": "Encontrar tu equilibrio personal",
    "Exprimer son potentiel": "Expresar tu potencial",
    "Gérer les émotions": "Gestionar las emociones",
    "Créer une sécurité intérieure": "Crear seguridad interior",
    "Éviter les réactions impulsives": "Evitar las reacciones impulsivas",
    "Exprimer ses besoins": "Expresar tus necesidades",
    "Canaliser le mental": "Canalizar la mente",
    "Clarifier la communication": "Aclarar la comunicación",
    "Éviter la dispersion": "Evitar la dispersión",
    "Développer l'écoute": "Desarrollar la escucha",
    "Équilibrer le donner et le recevoir": "Equilibrar el dar y el recibir",
    "Développer l'estime de soi": "Desarrollar la autoestima",
    "Poser des limites saines": "Establecer límites saludables",
    "Clarifier ses attentes": "Aclarar tus expectativas",
    "Canaliser l'énergie": "Canalizar la energía",
    "Gérer l'impatience": "Gestionar la impaciencia",
    "Choisir ses combats": "Elegir tus batallas",
    "Agir avec discernement": "Actuar con discernimiento",
    "Éviter les excès": "Evitar los excesos",
    "Conserver le sens des réalités": "Mantener el sentido de la realidad",
    "Mesurer les risques": "Evaluar los riesgos",
    "Développer la constance": "Desarrollar la constancia",
    "Alléger la pression": "Aligerar la presión",
    "Faire confiance au temps": "Confiar en el tiempo",
    "Accepter l'imperfection": "Aceptar la imperfección",
    "Reconnaître ses réussites": "Reconocer tus logros",
    "Trouver un équilibre entre liberté et stabilité": "Encontrar un equilibrio entre libertad y estabilidad",
    "Canaliser les changements": "Canalizar los cambios",
    "Accepter certains cadres": "Aceptar ciertos marcos",
    "Développer la patience": "Desarrollar la paciencia",
    "Rester ancré dans le réel": "Mantenerte anclado en la realidad",
    "Clarifier ses intuitions": "Aclarar tus intuiciones",
    "Éviter les illusions": "Evitar las ilusiones",
    "Protéger son énergie": "Proteger tu energía",
    "Lâcher le contrôle": "Soltar el control",
    "Accepter les transformations": "Aceptar las transformaciones",
    "Faire confiance au renouveau": "Confiar en la renovación",
    "Transformer les peurs en forces": "Transformar los miedos en fortalezas",
    "Impulsivité": "Impulsividad",
    "Manque de patience": "Falta de paciencia",
    "Difficulté à écouter les autres": "Dificultad para escuchar a los demás",
    "Tendance à vouloir tout diriger": "Tendencia a querer dirigirlo todo",
    "Résistance au changement": "Resistencia al cambio",
    "Attachement excessif aux habitudes": "Apego excesivo a los hábitos",
    "Possessivité": "Posesividad",
    "Difficulté à sortir de sa zone de confort": "Dificultad para salir de tu zona de confort",
    "Dispersion": "Dispersión",
    "Hésitation": "Vacilación",
    "Difficulté à approfondir": "Dificultad para profundizar",
    "Surcharge mentale": "Sobrecarga mental",
    "Hypersensibilité": "Hipersensibilidad",
    "Attachement au passé": "Apego al pasado",
    "Difficulté à exprimer directement ses besoins": "Dificultad para expresar directamente tus necesidades",
    "Protection émotionnelle excessive": "Protección emocional excesiva",
    "Besoin de reconnaissance": "Necesidad de reconocimiento",
    "Fierté blessée": "Orgullo herido",
    "Difficulté à accepter la critique": "Dificultad para aceptar la crítica",
    "Tendance à vouloir tout contrôler": "Tendencia a querer controlarlo todo",
    "Perfectionnisme": "Perfeccionismo",
    "Autocritique": "Autocrítica",
    "Anxiété face aux erreurs": "Ansiedad ante los errores",
    "Difficulté à lâcher prise": "Dificultad para soltar",
    "Indécision": "Indecisión",
    "Peur du conflit": "Miedo al conflicto",
    "Recherche excessive d'approbation": "Búsqueda excesiva de aprobación",
    "Difficulté à affirmer ses besoins": "Dificultad para afirmar tus necesidades",
    "Tendance à tout intérioriser": "Tendencia a interiorizarlo todo",
    "Besoin de contrôler certaines situations": "Necesidad de controlar ciertas situaciones",
    "Méfiance excessive": "Desconfianza excesiva",
    "Excès d'optimisme": "Exceso de optimismo",
    "Manque de constance": "Falta de constancia",
    "Difficulté avec les contraintes": "Dificultad con las restricciones",
    "Impatience": "Impaciencia",
    "Rigidité": "Rigidez",
    "Exigence envers soi-même": "Exigencia excesiva contigo mismo",
    "Difficulté à montrer sa vulnérabilité": "Dificultad para mostrar vulnerabilidad",
    "Priorité excessive au travail": "Prioridad excesiva al trabajo",
    "Distance émotionnelle": "Distancia emocional",
    "Besoin d'indépendance très marqué": "Necesidad muy marcada de independencia",
    "Remise en question permanente": "Cuestionamiento constante",
    "Difficulté avec l'autorité": "Dificultad con la autoridad",
    "Manque de limites": "Falta de límites",
    "Idéalisation": "Idealización",
    "Tendance à fuir certaines réalités": "Tendencia a evitar ciertas realidades",
    "Grande sensibilité émotionnelle": "Gran sensibilidad emocional",
    "Développer davantage de conscience": "Desarrollar mayor conciencia",
    "Trouver un meilleur équilibre": "Encontrar un mejor equilibrio",
    "Faire confiance à son évolution": "Confiar en tu evolución",
    "Exprimer pleinement son potentiel": "Expresar plenamente tu potencial"
  },
  "de": {
    "Affirmer pleinement son identité": "Die eigene Identität vollständig behaupten",
    "Développer une confiance stable": "Stabiles Selbstvertrauen entwickeln",
    "Trouver son équilibre personnel": "Das persönliche Gleichgewicht finden",
    "Exprimer son potentiel": "Das eigene Potenzial ausdrücken",
    "Gérer les émotions": "Mit Emotionen umgehen",
    "Créer une sécurité intérieure": "Innere Sicherheit aufbauen",
    "Éviter les réactions impulsives": "Impulsive Reaktionen vermeiden",
    "Exprimer ses besoins": "Eigene Bedürfnisse ausdrücken",
    "Canaliser le mental": "Gedanken bündeln",
    "Clarifier la communication": "Kommunikation klären",
    "Éviter la dispersion": "Zerstreuung vermeiden",
    "Développer l'écoute": "Zuhören entwickeln",
    "Équilibrer le donner et le recevoir": "Geben und Nehmen ausgleichen",
    "Développer l'estime de soi": "Selbstwert entwickeln",
    "Poser des limites saines": "Gesunde Grenzen setzen",
    "Clarifier ses attentes": "Erwartungen klären",
    "Canaliser l'énergie": "Energie kanalisieren",
    "Gérer l'impatience": "Ungeduld regulieren",
    "Choisir ses combats": "Die eigenen Kämpfe wählen",
    "Agir avec discernement": "Mit Urteilsvermögen handeln",
    "Éviter les excès": "Übermaß vermeiden",
    "Conserver le sens des réalités": "Realitätssinn bewahren",
    "Mesurer les risques": "Risiken abwägen",
    "Développer la constance": "Beständigkeit entwickeln",
    "Alléger la pression": "Druck verringern",
    "Faire confiance au temps": "Dem Lauf der Zeit vertrauen",
    "Accepter l'imperfection": "Unvollkommenheit akzeptieren",
    "Reconnaître ses réussites": "Eigene Erfolge anerkennen",
    "Trouver un équilibre entre liberté et stabilité": "Ein Gleichgewicht zwischen Freiheit und Stabilität finden",
    "Canaliser les changements": "Veränderungen konstruktiv lenken",
    "Accepter certains cadres": "Bestimmte Rahmen akzeptieren",
    "Développer la patience": "Geduld entwickeln",
    "Rester ancré dans le réel": "In der Realität verankert bleiben",
    "Clarifier ses intuitions": "Intuitionen klären",
    "Éviter les illusions": "Illusionen vermeiden",
    "Protéger son énergie": "Eigene Energie schützen",
    "Lâcher le contrôle": "Kontrolle loslassen",
    "Accepter les transformations": "Transformationen akzeptieren",
    "Faire confiance au renouveau": "Erneuerung vertrauen",
    "Transformer les peurs en forces": "Ängste in Stärken verwandeln",
    "Impulsivité": "Impulsivität",
    "Manque de patience": "Mangel an Geduld",
    "Difficulté à écouter les autres": "Schwierigkeit, anderen zuzuhören",
    "Tendance à vouloir tout diriger": "Tendenz, alles bestimmen zu wollen",
    "Résistance au changement": "Widerstand gegen Veränderung",
    "Attachement excessif aux habitudes": "Übermäßige Bindung an Gewohnheiten",
    "Possessivité": "Besitzdenken",
    "Difficulté à sortir de sa zone de confort": "Schwierigkeit, die Komfortzone zu verlassen",
    "Dispersion": "Zerstreutheit",
    "Hésitation": "Zögern",
    "Difficulté à approfondir": "Schwierigkeit, in die Tiefe zu gehen",
    "Surcharge mentale": "Mentale Überlastung",
    "Hypersensibilité": "Hypersensibilität",
    "Attachement au passé": "Festhalten an der Vergangenheit",
    "Difficulté à exprimer directement ses besoins": "Schwierigkeit, eigene Bedürfnisse direkt auszudrücken",
    "Protection émotionnelle excessive": "Übermäßiger emotionaler Selbstschutz",
    "Besoin de reconnaissance": "Bedürfnis nach Anerkennung",
    "Fierté blessée": "Verletzter Stolz",
    "Difficulté à accepter la critique": "Schwierigkeit, Kritik anzunehmen",
    "Tendance à vouloir tout contrôler": "Tendenz, alles kontrollieren zu wollen",
    "Perfectionnisme": "Perfektionismus",
    "Autocritique": "Selbstkritik",
    "Anxiété face aux erreurs": "Angst vor Fehlern",
    "Difficulté à lâcher prise": "Schwierigkeit loszulassen",
    "Indécision": "Unentschlossenheit",
    "Peur du conflit": "Angst vor Konflikten",
    "Recherche excessive d'approbation": "Übermäßiges Bedürfnis nach Zustimmung",
    "Difficulté à affirmer ses besoins": "Schwierigkeit, eigene Bedürfnisse durchzusetzen",
    "Tendance à tout intérioriser": "Tendenz, alles in sich hineinzufressen",
    "Besoin de contrôler certaines situations": "Bedürfnis, bestimmte Situationen zu kontrollieren",
    "Méfiance excessive": "Übermäßiges Misstrauen",
    "Excès d'optimisme": "Übertriebener Optimismus",
    "Manque de constance": "Mangel an Beständigkeit",
    "Difficulté avec les contraintes": "Schwierigkeit mit Einschränkungen",
    "Impatience": "Ungeduld",
    "Rigidité": "Starrheit",
    "Exigence envers soi-même": "Überhöhte Ansprüche an sich selbst",
    "Difficulté à montrer sa vulnérabilité": "Schwierigkeit, Verletzlichkeit zu zeigen",
    "Priorité excessive au travail": "Übermäßige Priorität für Arbeit",
    "Distance émotionnelle": "Emotionale Distanz",
    "Besoin d'indépendance très marqué": "Sehr starkes Bedürfnis nach Unabhängigkeit",
    "Remise en question permanente": "Ständiges Hinterfragen",
    "Difficulté avec l'autorité": "Schwierigkeit mit Autorität",
    "Manque de limites": "Fehlende Grenzen",
    "Idéalisation": "Idealisierung",
    "Tendance à fuir certaines réalités": "Tendenz, bestimmten Realitäten auszuweichen",
    "Grande sensibilité émotionnelle": "Hohe emotionale Sensibilität",
    "Développer davantage de conscience": "Mehr Bewusstsein entwickeln",
    "Trouver un meilleur équilibre": "Ein besseres Gleichgewicht finden",
    "Faire confiance à son évolution": "Der eigenen Entwicklung vertrauen",
    "Exprimer pleinement son potentiel": "Das eigene Potenzial vollständig ausdrücken"
  },
  "it": {
    "Affirmer pleinement son identité": "Affermare pienamente la propria identità",
    "Développer une confiance stable": "Sviluppare una fiducia stabile",
    "Trouver son équilibre personnel": "Trovare il proprio equilibrio personale",
    "Exprimer son potentiel": "Esprimere il proprio potenziale",
    "Gérer les émotions": "Gestire le emozioni",
    "Créer une sécurité intérieure": "Creare sicurezza interiore",
    "Éviter les réactions impulsives": "Evitare reazioni impulsive",
    "Exprimer ses besoins": "Esprimere i propri bisogni",
    "Canaliser le mental": "Canalizzare la mente",
    "Clarifier la communication": "Chiarire la comunicazione",
    "Éviter la dispersion": "Evitare la dispersione",
    "Développer l'écoute": "Sviluppare l’ascolto",
    "Équilibrer le donner et le recevoir": "Equilibrare il dare e il ricevere",
    "Développer l'estime de soi": "Sviluppare l’autostima",
    "Poser des limites saines": "Stabilire limiti sani",
    "Clarifier ses attentes": "Chiarire le proprie aspettative",
    "Canaliser l'énergie": "Canalizzare l’energia",
    "Gérer l'impatience": "Gestire l’impazienza",
    "Choisir ses combats": "Scegliere le proprie battaglie",
    "Agir avec discernement": "Agire con discernimento",
    "Éviter les excès": "Evitare gli eccessi",
    "Conserver le sens des réalités": "Mantenere il senso della realtà",
    "Mesurer les risques": "Valutare i rischi",
    "Développer la constance": "Sviluppare la costanza",
    "Alléger la pression": "Ridurre la pressione",
    "Faire confiance au temps": "Fidarsi del tempo",
    "Accepter l'imperfection": "Accettare l’imperfezione",
    "Reconnaître ses réussites": "Riconoscere i propri successi",
    "Trouver un équilibre entre liberté et stabilité": "Trovare un equilibrio tra libertà e stabilità",
    "Canaliser les changements": "Canalizzare i cambiamenti",
    "Accepter certains cadres": "Accettare alcune strutture",
    "Développer la patience": "Sviluppare la pazienza",
    "Rester ancré dans le réel": "Restare ancorati alla realtà",
    "Clarifier ses intuitions": "Chiarire le proprie intuizioni",
    "Éviter les illusions": "Evitare le illusioni",
    "Protéger son énergie": "Proteggere la propria energia",
    "Lâcher le contrôle": "Lasciare andare il controllo",
    "Accepter les transformations": "Accettare le trasformazioni",
    "Faire confiance au renouveau": "Fidarsi del rinnovamento",
    "Transformer les peurs en forces": "Trasformare le paure in forze",
    "Impulsivité": "Impulsività",
    "Manque de patience": "Mancanza di pazienza",
    "Difficulté à écouter les autres": "Difficoltà ad ascoltare gli altri",
    "Tendance à vouloir tout diriger": "Tendenza a voler dirigere tutto",
    "Résistance au changement": "Resistenza al cambiamento",
    "Attachement excessif aux habitudes": "Attaccamento eccessivo alle abitudini",
    "Possessivité": "Possessività",
    "Difficulté à sortir de sa zone de confort": "Difficoltà a uscire dalla propria zona di comfort",
    "Dispersion": "Dispersione",
    "Hésitation": "Esitazione",
    "Difficulté à approfondir": "Difficoltà ad approfondire",
    "Surcharge mentale": "Sovraccarico mentale",
    "Hypersensibilité": "Ipersensibilità",
    "Attachement au passé": "Attaccamento al passato",
    "Difficulté à exprimer directement ses besoins": "Difficoltà a esprimere direttamente i propri bisogni",
    "Protection émotionnelle excessive": "Protezione emotiva eccessiva",
    "Besoin de reconnaissance": "Bisogno di riconoscimento",
    "Fierté blessée": "Orgoglio ferito",
    "Difficulté à accepter la critique": "Difficoltà ad accettare le critiche",
    "Tendance à vouloir tout contrôler": "Tendenza a voler controllare tutto",
    "Perfectionnisme": "Perfezionismo",
    "Autocritique": "Autocritica",
    "Anxiété face aux erreurs": "Ansia di fronte agli errori",
    "Difficulté à lâcher prise": "Difficoltà a lasciar andare",
    "Indécision": "Indecisione",
    "Peur du conflit": "Paura del conflitto",
    "Recherche excessive d'approbation": "Ricerca eccessiva di approvazione",
    "Difficulté à affirmer ses besoins": "Difficoltà ad affermare i propri bisogni",
    "Tendance à tout intérioriser": "Tendenza a interiorizzare tutto",
    "Besoin de contrôler certaines situations": "Bisogno di controllare alcune situazioni",
    "Méfiance excessive": "Diffidenza eccessiva",
    "Excès d'optimisme": "Eccesso di ottimismo",
    "Manque de constance": "Mancanza di costanza",
    "Difficulté avec les contraintes": "Difficoltà con i vincoli",
    "Impatience": "Impazienza",
    "Rigidité": "Rigidità",
    "Exigence envers soi-même": "Eccessiva esigenza verso se stessi",
    "Difficulté à montrer sa vulnérabilité": "Difficoltà a mostrare vulnerabilità",
    "Priorité excessive au travail": "Priorità eccessiva data al lavoro",
    "Distance émotionnelle": "Distanza emotiva",
    "Besoin d'indépendance très marqué": "Bisogno molto forte di indipendenza",
    "Remise en question permanente": "Messa in discussione continua",
    "Difficulté avec l'autorité": "Difficoltà con l’autorità",
    "Manque de limites": "Mancanza di limiti",
    "Idéalisation": "Idealizzazione",
    "Tendance à fuir certaines réalités": "Tendenza a evitare alcune realtà",
    "Grande sensibilité émotionnelle": "Grande sensibilità emotiva",
    "Développer davantage de conscience": "Sviluppare maggiore consapevolezza",
    "Trouver un meilleur équilibre": "Trovare un equilibrio migliore",
    "Faire confiance à son évolution": "Fidarsi della propria evoluzione",
    "Exprimer pleinement son potentiel": "Esprimere pienamente il proprio potenziale"
  },
  "pt": {
    "Affirmer pleinement son identité": "Afirmar plenamente sua identidade",
    "Développer une confiance stable": "Desenvolver uma confiança estável",
    "Trouver son équilibre personnel": "Encontrar seu equilíbrio pessoal",
    "Exprimer son potentiel": "Expressar seu potencial",
    "Gérer les émotions": "Gerenciar as emoções",
    "Créer une sécurité intérieure": "Criar segurança interior",
    "Éviter les réactions impulsives": "Evitar reações impulsivas",
    "Exprimer ses besoins": "Expressar suas necessidades",
    "Canaliser le mental": "Canalizar a mente",
    "Clarifier la communication": "Clarificar a comunicação",
    "Éviter la dispersion": "Evitar a dispersão",
    "Développer l'écoute": "Desenvolver a escuta",
    "Équilibrer le donner et le recevoir": "Equilibrar dar e receber",
    "Développer l'estime de soi": "Desenvolver a autoestima",
    "Poser des limites saines": "Estabelecer limites saudáveis",
    "Clarifier ses attentes": "Clarificar suas expectativas",
    "Canaliser l'énergie": "Canalizar a energia",
    "Gérer l'impatience": "Gerenciar a impaciência",
    "Choisir ses combats": "Escolher suas batalhas",
    "Agir avec discernement": "Agir com discernimento",
    "Éviter les excès": "Evitar excessos",
    "Conserver le sens des réalités": "Manter o senso de realidade",
    "Mesurer les risques": "Avaliar os riscos",
    "Développer la constance": "Desenvolver constância",
    "Alléger la pression": "Reduzir a pressão",
    "Faire confiance au temps": "Confiar no tempo",
    "Accepter l'imperfection": "Aceitar a imperfeição",
    "Reconnaître ses réussites": "Reconhecer suas conquistas",
    "Trouver un équilibre entre liberté et stabilité": "Encontrar equilíbrio entre liberdade e estabilidade",
    "Canaliser les changements": "Canalizar as mudanças",
    "Accepter certains cadres": "Aceitar certas estruturas",
    "Développer la patience": "Desenvolver a paciência",
    "Rester ancré dans le réel": "Manter-se ancorado na realidade",
    "Clarifier ses intuitions": "Clarificar suas intuições",
    "Éviter les illusions": "Evitar ilusões",
    "Protéger son énergie": "Proteger sua energia",
    "Lâcher le contrôle": "Abrir mão do controle",
    "Accepter les transformations": "Aceitar as transformações",
    "Faire confiance au renouveau": "Confiar na renovação",
    "Transformer les peurs en forces": "Transformar medos em forças",
    "Impulsivité": "Impulsividade",
    "Manque de patience": "Falta de paciência",
    "Difficulté à écouter les autres": "Dificuldade para ouvir os outros",
    "Tendance à vouloir tout diriger": "Tendência a querer dirigir tudo",
    "Résistance au changement": "Resistência à mudança",
    "Attachement excessif aux habitudes": "Apego excessivo aos hábitos",
    "Possessivité": "Possessividade",
    "Difficulté à sortir de sa zone de confort": "Dificuldade para sair da zona de conforto",
    "Dispersion": "Dispersão",
    "Hésitation": "Hesitação",
    "Difficulté à approfondir": "Dificuldade para aprofundar",
    "Surcharge mentale": "Sobrecarga mental",
    "Hypersensibilité": "Hipersensibilidade",
    "Attachement au passé": "Apego ao passado",
    "Difficulté à exprimer directement ses besoins": "Dificuldade para expressar diretamente suas necessidades",
    "Protection émotionnelle excessive": "Proteção emocional excessiva",
    "Besoin de reconnaissance": "Necessidade de reconhecimento",
    "Fierté blessée": "Orgulho ferido",
    "Difficulté à accepter la critique": "Dificuldade para aceitar críticas",
    "Tendance à vouloir tout contrôler": "Tendência a querer controlar tudo",
    "Perfectionnisme": "Perfeccionismo",
    "Autocritique": "Autocrítica",
    "Anxiété face aux erreurs": "Ansiedade diante dos erros",
    "Difficulté à lâcher prise": "Dificuldade para desapegar",
    "Indécision": "Indecisão",
    "Peur du conflit": "Medo do conflito",
    "Recherche excessive d'approbation": "Busca excessiva por aprovação",
    "Difficulté à affirmer ses besoins": "Dificuldade para afirmar suas necessidades",
    "Tendance à tout intérioriser": "Tendência a interiorizar tudo",
    "Besoin de contrôler certaines situations": "Necessidade de controlar certas situações",
    "Méfiance excessive": "Desconfiança excessiva",
    "Excès d'optimisme": "Excesso de otimismo",
    "Manque de constance": "Falta de constância",
    "Difficulté avec les contraintes": "Dificuldade com restrições",
    "Impatience": "Impaciência",
    "Rigidité": "Rigidez",
    "Exigence envers soi-même": "Exigência excessiva consigo mesmo",
    "Difficulté à montrer sa vulnérabilité": "Dificuldade para mostrar vulnerabilidade",
    "Priorité excessive au travail": "Prioridade excessiva ao trabalho",
    "Distance émotionnelle": "Distância emocional",
    "Besoin d'indépendance très marqué": "Necessidade muito forte de independência",
    "Remise en question permanente": "Questionamento constante",
    "Difficulté avec l'autorité": "Dificuldade com autoridade",
    "Manque de limites": "Falta de limites",
    "Idéalisation": "Idealização",
    "Tendance à fuir certaines réalités": "Tendência a evitar certas realidades",
    "Grande sensibilité émotionnelle": "Grande sensibilidade emocional",
    "Développer davantage de conscience": "Desenvolver mais consciência",
    "Trouver un meilleur équilibre": "Encontrar um equilíbrio melhor",
    "Faire confiance à son évolution": "Confiar na sua evolução",
    "Exprimer pleinement son potentiel": "Expressar plenamente seu potencial"
  }
}[lang];

  let out =
    source.replace(/\r\n/g, "\n");

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des planètes
  |--------------------------------------------------------------------------
  */

  const planetNames = {
    Sun: labels.sun,
    Moon: labels.moon,
    Mercury: labels.mercury,
    Venus: labels.venus,
    Mars: labels.mars,
    Jupiter: labels.jupiter,
    Saturn: labels.saturn,
    Uranus: labels.uranus,
    Neptune: labels.neptune,
    Pluto: labels.pluto,
  };

  out = out.replace(
    /const PLANET_NAMES:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const PLANET_NAMES: Record<string, string> = ${JSON.stringify(
      planetNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Noms visibles des signes
  |--------------------------------------------------------------------------
  */

  const signNames = {
    Aries: labels.aries,
    Taurus: labels.taurus,
    Gemini: labels.gemini,
    Cancer: labels.cancer,
    Leo: labels.leo,
    Virgo: labels.virgo,
    Libra: labels.libra,
    Scorpio: labels.scorpio,
    Sagittarius: labels.sagittarius,
    Capricorn: labels.capricorn,
    Aquarius: labels.aquarius,
    Pisces: labels.pisces,

    Bélier: labels.aries,
    Taureau: labels.taurus,
    Gémeaux: labels.gemini,
    Lion: labels.leo,
    Vierge: labels.virgo,
    Balance: labels.libra,
    Scorpion: labels.scorpio,
    Sagittaire: labels.sagittarius,
    Capricorne: labels.capricorn,
    Verseau: labels.aquarius,
    Poissons: labels.pisces,
  };

  out = out.replace(
    /const SIGN_NAMES:\s*Record<string,\s*string>\s*=\s*\{[\s\S]*?\};/,
    `const SIGN_NAMES: Record<string, string> = ${JSON.stringify(
      signNames,
      null,
      2,
    )};`,
  );

  /*
  |--------------------------------------------------------------------------
  | Défis dynamiques des planètes
  |--------------------------------------------------------------------------
  |
  | getSignaturePlanetChallenges() vient du fichier français partagé par le
  | composant. On conserve sa logique et on traduit seulement les valeurs
  | visibles qu'il retourne.
  |--------------------------------------------------------------------------
  */

  const challengeMapSource =
    JSON.stringify(
      challengeTranslations,
      null,
      2,
    );

  if (
    !out.includes(
      "const SIGNATURE_CHALLENGE_TRANSLATIONS",
    )
  ) {
    const marker =
      "function getChallengeCards(";

    const index =
      out.indexOf(marker);

    if (index >= 0) {
      const helper = `
const SIGNATURE_CHALLENGE_TRANSLATIONS: Record<
  string,
  string
> = ${challengeMapSource};

function localizeSignatureChallenge(
  value: string
): string {
  return (
    SIGNATURE_CHALLENGE_TRANSLATIONS[value] ||
    value
  );
}

`;

      out =
        out.slice(0, index) +
        helper +
        out.slice(index);
    }
  }

  out = out.replace(
    /challenges:\s*getSignaturePlanetChallenges\(\s*planetName,\s*normalizedSign\s*\),/g,
    `challenges:
          getSignaturePlanetChallenges(
            planetName,
            normalizedSign
          ).map(
            localizeSignatureChallenge
          ),`,
  );

  /*
  |--------------------------------------------------------------------------
  | Textes visibles
  |--------------------------------------------------------------------------
  */

  const replacements:
    Array<[string, string]> = [
      [
        "Analyse Signature",
        labels.analysis,
      ],
      [
        "Vos défis d’évolution",
        labels.evolutionChallenges,
      ],
      [
        `Les défis de votre thème ne représentent
               ni des défauts ni des limites définitives.
               Ils révèlent les réactions qui peuvent
               devenir répétitives ainsi que les
               qualités qui gagnent à être développées
               avec davantage de conscience.`,
        labels.evolutionIntro,
      ],
      [
        `Chaque planète possède une manière plus
               fluide de s’exprimer et une zone de
               vigilance. Reconnaître ces mécanismes vous
               permet de choisir une réponse plus adaptée
               plutôt que de reproduire automatiquement
               les mêmes réactions.`,
        labels.overview,
      ],
      [
        "Vos principaux points d’attention",
        labels.attentionPoints,
      ],
      [
        "Vos axes de transformation",
        labels.transformationAxes,
      ],
      [
        `Les influences plus lentes de votre thème
               décrivent des apprentissages qui se
               construisent au fil du temps. Elles
               montrent comment l’expérience peut
               transformer une difficulté en maturité,
               en discernement et en force intérieure.`,
        labels.transformationIntro,
      ],
      [
        "Transformer les tensions en ressources",
        labels.transformTensions,
      ],
      [
        `Les tensions de votre thème deviennent
               constructives lorsque vous pouvez
               reconnaître le besoin qu’elles cherchent
               à protéger. Une réaction excessive cache
               souvent une recherche de sécurité, de
               reconnaissance, de liberté ou de
               cohérence intérieure. En identifiant ce
               besoin, vous pouvez choisir une manière
               plus consciente de l’exprimer.`,
        labels.integrationText,
      ],
      [
        " Vos angles astrologiques indiquent aussi les domaines dans lesquels certains apprentissages peuvent devenir particulièrement visibles dans votre parcours.",
        labels.anglesText,
      ],
      [
        "Comment accompagner vos défis",
        labels.accompanyChallenges,
      ],
      [
        "Clés pratiques",
        labels.practicalKeys,
      ],
      [
        "Une invitation à évoluer",
        labels.invitationToEvolve,
      ],
      [
        `Votre thème natal ne vous demande pas
               d’effacer vos contradictions. Il vous
               invite à comprendre ce qu’elles révèlent,
               à reconnaître les besoins qui les
               traversent et à développer des réponses
               plus libres. Vos défis les plus profonds
               peuvent ainsi devenir les lieux où votre
               maturité, votre confiance et votre
               discernement se construisent avec le plus
               de force.`,
        labels.finalText,
      ],
      [
        "Signe non déterminé",
        labels.undeterminedSign,
      ],
    ];

  for (
    const [from, to] of replacements
  ) {
    out =
      replaceAll(
        out,
        from,
        to,
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Conseils pratiques
  |--------------------------------------------------------------------------
  */

  out = out.replace(
    /<Text style=\{styles\.guidanceText\}>[\s\S]*?<\/Text>/,
    `<Text style={styles.guidanceText}>
              {${JSON.stringify(
                labels.guidanceText,
              )}}
            </Text>`,
  );

  return out;
}
