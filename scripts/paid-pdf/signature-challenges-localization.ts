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

  const labels =
    LABELS[locale as NonFrenchLocale];

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
