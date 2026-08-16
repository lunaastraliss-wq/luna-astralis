import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type TranslationMap =
  Record<string, string>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  TranslationMap
> = {
  en: {
    "Influence planétaire":
      "Planetary influence",
    "Influence dominante":
      "Dominant influence",
    "Votre clé astrologique":
      "Your astrological key",
    "Conseil":
      "Advice",
    "Influences célestes":
      "Celestial influences",
    "Les planètes qui vous accompagnent":
      "The planets guiding you",
    "Les autres mouvements célestes":
      "Other celestial movements",
    "Synthèse des influences":
      "Overview of the influences",
    "Conseil pour cette période":
      "Guidance for this period",
    "Une énergie céleste subtile":
      "A subtle celestial energy",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "The planetary movements of this period never act in isolation. Together, they create a dynamic that influences your emotions, your way of acting, your relationships, and the opportunities that may arise.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Your dominant planet sets the main tone for this period, while the other influences add nuance to your journey by emphasizing certain areas of your life. Some will favor action, while others will encourage reflection, caution, or openness.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "By observing these energies as a whole rather than separately, you can make more informed decisions, recognize favorable periods, and navigate challenges more effectively when they arise.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Use these indications as a compass rather than a certainty. Astrology highlights tendencies, but your choices remain at the heart of your evolution.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "The planets illuminate the tendencies along your path, but they never make decisions for you. Welcome opportunities with discernment, take time to observe recurring patterns, and choose actions that truly respect your rhythm. Every conscious decision can transform tension into learning and possibility into genuine growth.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "The planetary influences for this period will be added here when your personalized horoscope is generated.",
  },

  es: {
    "Influence planétaire":
      "Influencia planetaria",
    "Influence dominante":
      "Influencia dominante",
    "Votre clé astrologique":
      "Su clave astrológica",
    "Conseil":
      "Consejo",
    "Influences célestes":
      "Influencias celestes",
    "Les planètes qui vous accompagnent":
      "Los planetas que le acompañan",
    "Les autres mouvements célestes":
      "Los otros movimientos celestes",
    "Synthèse des influences":
      "Síntesis de las influencias",
    "Conseil pour cette période":
      "Consejo para este período",
    "Une énergie céleste subtile":
      "Una energía celeste sutil",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "Los movimientos planetarios de este período nunca actúan de forma aislada. Juntos crean una dinámica que influye en sus emociones, su manera de actuar, sus relaciones y las oportunidades que se presentarán.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Su planeta dominante marca el tono principal de este período, mientras que las demás influencias aportan matices a su camino y destacan determinados ámbitos de su vida. Algunas favorecerán la acción, mientras que otras invitarán a la reflexión, la prudencia o la apertura.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Al observar estas energías en conjunto y no por separado, podrá tomar decisiones más informadas, reconocer los períodos favorables y afrontar mejor los desafíos cuando aparezcan.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Utilice estas indicaciones como una brújula y no como una certeza. La astrología revela tendencias, pero sus decisiones permanecen en el centro de su evolución.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "Los planetas iluminan las tendencias de su camino, pero nunca toman decisiones por usted. Reciba las oportunidades con discernimiento, observe lo que se repite y elija acciones que respeten verdaderamente su ritmo. Cada decisión consciente puede transformar una tensión en aprendizaje y una posibilidad en una verdadera evolución.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "Las influencias planetarias de este período se añadirán aquí al generar su horóscopo personalizado.",
  },

  de: {
    "Influence planétaire":
      "Planetarischer Einfluss",
    "Influence dominante":
      "Dominanter Einfluss",
    "Votre clé astrologique":
      "Ihr astrologischer Schlüssel",
    "Conseil":
      "Rat",
    "Influences célestes":
      "Himmlische Einflüsse",
    "Les planètes qui vous accompagnent":
      "Die Planeten, die Sie begleiten",
    "Les autres mouvements célestes":
      "Weitere himmlische Bewegungen",
    "Synthèse des influences":
      "Zusammenfassung der Einflüsse",
    "Conseil pour cette période":
      "Rat für diesen Zeitraum",
    "Une énergie céleste subtile":
      "Eine subtile himmlische Energie",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "Die planetarischen Bewegungen dieses Zeitraums wirken niemals isoliert. Gemeinsam erzeugen sie eine Dynamik, die Ihre Emotionen, Ihre Handlungsweise, Ihre Beziehungen und die sich bietenden Möglichkeiten beeinflusst.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Ihr dominanter Planet gibt den Grundton dieses Zeitraums vor, während die anderen Einflüsse Ihren Weg nuancieren und bestimmte Lebensbereiche hervorheben. Einige fördern das Handeln, andere laden zu Reflexion, Vorsicht oder Offenheit ein.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Wenn Sie diese Energien als Ganzes statt getrennt betrachten, können Sie fundiertere Entscheidungen treffen, günstige Phasen erkennen und Herausforderungen besser bewältigen.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Nutzen Sie diese Hinweise als Kompass und nicht als Gewissheit. Die Astrologie zeigt Tendenzen auf, doch Ihre Entscheidungen bleiben der Kern Ihrer Entwicklung.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "Die Planeten beleuchten die Tendenzen Ihres Weges, treffen jedoch niemals Entscheidungen für Sie. Begegnen Sie Chancen mit Urteilsvermögen, beobachten Sie wiederkehrende Muster und wählen Sie Handlungen, die Ihren eigenen Rhythmus respektieren. Jede bewusste Entscheidung kann Spannung in Erkenntnis und eine Möglichkeit in echte Entwicklung verwandeln.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "Die planetarischen Einflüsse dieses Zeitraums werden hier bei der Erstellung Ihres persönlichen Horoskops ergänzt.",
  },

  it: {
    "Influence planétaire":
      "Influenza planetaria",
    "Influence dominante":
      "Influenza dominante",
    "Votre clé astrologique":
      "La tua chiave astrologica",
    "Conseil":
      "Consiglio",
    "Influences célestes":
      "Influenze celesti",
    "Les planètes qui vous accompagnent":
      "I pianeti che ti accompagnano",
    "Les autres mouvements célestes":
      "Gli altri movimenti celesti",
    "Synthèse des influences":
      "Sintesi delle influenze",
    "Conseil pour cette période":
      "Consiglio per questo periodo",
    "Une énergie céleste subtile":
      "Una sottile energia celeste",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "I movimenti planetari di questo periodo non agiscono mai in modo isolato. Insieme creano una dinamica che influenza le tue emozioni, il tuo modo di agire, le tue relazioni e le opportunità che si presenteranno.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Il tuo pianeta dominante dà il tono principale a questo periodo, mentre le altre influenze arricchiscono il tuo percorso mettendo in evidenza determinati ambiti della tua vita. Alcune favoriranno l'azione, mentre altre inviteranno alla riflessione, alla prudenza o all'apertura.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Osservando queste energie nel loro insieme anziché separatamente, potrai prendere decisioni più consapevoli, riconoscere i periodi favorevoli e affrontare meglio le sfide quando si presenteranno.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Usa queste indicazioni come una bussola anziché come una certezza. L'astrologia mette in luce delle tendenze, ma le tue scelte restano al centro della tua evoluzione.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "I pianeti illuminano le tendenze del tuo cammino, ma non prendono mai decisioni al posto tuo. Accogli le opportunità con discernimento, osserva ciò che si ripete e scegli azioni che rispettino davvero il tuo ritmo. Ogni decisione consapevole può trasformare una tensione in apprendimento e una possibilità in una vera evoluzione.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "Le influenze planetarie di questo periodo saranno aggiunte qui durante la generazione del tuo oroscopo personalizzato.",
  },

  pt: {
    "Influence planétaire":
      "Influência planetária",
    "Influence dominante":
      "Influência dominante",
    "Votre clé astrologique":
      "Sua chave astrológica",
    "Conseil":
      "Conselho",
    "Influences célestes":
      "Influências celestes",
    "Les planètes qui vous accompagnent":
      "Os planetas que acompanham você",
    "Les autres mouvements célestes":
      "Os outros movimentos celestes",
    "Synthèse des influences":
      "Síntese das influências",
    "Conseil pour cette période":
      "Conselho para este período",
    "Une énergie céleste subtile":
      "Uma energia celeste sutil",

    "Les mouvements planétaires de cette période ne s'expriment jamais de façon isolée. Ensemble, ils créent une dynamique qui influence vos émotions, votre manière d'agir, vos relations et les occasions qui se présenteront à vous.":
      "Os movimentos planetários deste período nunca atuam de forma isolada. Juntos, criam uma dinâmica que influencia suas emoções, sua maneira de agir, seus relacionamentos e as oportunidades que surgirão.",

    "Votre planète dominante donne le ton principal de cette période, tandis que les autres influences viennent nuancer votre parcours en mettant l'accent sur certains domaines de votre vie. Certaines favoriseront l'action, alors que d'autres inviteront à la réflexion, à la prudence ou à l'ouverture.":
      "Seu planeta dominante define o tom principal deste período, enquanto as outras influências acrescentam nuances ao seu caminho, destacando determinadas áreas de sua vida. Algumas favorecerão a ação, enquanto outras convidarão à reflexão, à prudência ou à abertura.",

    "En observant ces énergies dans leur ensemble plutôt que séparément, vous pourrez prendre des décisions plus éclairées, reconnaître les périodes favorables et mieux traverser les défis lorsqu'ils se présenteront.":
      "Ao observar essas energias em conjunto, em vez de separadamente, você poderá tomar decisões mais conscientes, reconhecer períodos favoráveis e enfrentar melhor os desafios quando surgirem.",

    "Utilisez ces indications comme une boussole plutôt qu'une certitude. L'astrologie met en lumière des tendances, mais vos choix demeurent au cœur de votre évolution.":
      "Use essas indicações como uma bússola, e não como uma certeza. A astrologia revela tendências, mas suas escolhas permanecem no centro da sua evolução.",

    "Les planètes éclairent les tendances de votre chemin, mais elles ne prennent jamais les décisions à votre place. Accueillez les occasions avec discernement, prenez le temps d'observer ce qui se répète et choisissez les actions qui respectent réellement votre rythme. Chaque décision consciente peut transformer une tension en apprentissage et une possibilité en véritable évolution.":
      "Os planetas iluminam as tendências do seu caminho, mas nunca tomam decisões por você. Receba as oportunidades com discernimento, observe o que se repete e escolha ações que realmente respeitem o seu ritmo. Cada decisão consciente pode transformar uma tensão em aprendizado e uma possibilidade em verdadeira evolução.",

    "Les influences planétaires de cette période seront ajoutées ici lors de la génération de votre horoscope personnalisé.":
      "As influências planetárias deste período serão adicionadas aqui durante a geração do seu horóscopo personalizado.",
  },
};

const MONTHS: Record<
  NonFrenchLocale,
  string[]
> = {
  en: [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December",
  ],

  es: [
    "enero", "febrero", "marzo",
    "abril", "mayo", "junio",
    "julio", "agosto", "septiembre",
    "octubre", "noviembre", "diciembre",
  ],

  de: [
    "Januar", "Februar", "März",
    "April", "Mai", "Juni",
    "Juli", "August", "September",
    "Oktober", "November", "Dezember",
  ],

  it: [
    "gennaio", "febbraio", "marzo",
    "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre",
    "ottobre", "novembre", "dicembre",
  ],

  pt: [
    "janeiro", "fevereiro", "março",
    "abril", "maio", "junho",
    "julho", "agosto", "setembro",
    "outubro", "novembro", "dezembro",
  ],
};

const FRENCH_MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

const PLANETS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Soleil: "Sun",
    Lune: "Moon",
    Mercure: "Mercury",
    Vénus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptune",
    Pluton: "Pluto",
    Chiron: "Chiron",
    "Nœud Nord": "North Node",
    "Noeud Nord": "North Node",
    "Nœud Sud": "South Node",
    "Noeud Sud": "South Node",
  },

  es: {
    Soleil: "Sol",
    Lune: "Luna",
    Mercure: "Mercurio",
    Vénus: "Venus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Neptuno",
    Pluton: "Plutón",
    Chiron: "Quirón",
    "Nœud Nord": "Nodo Norte",
    "Noeud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sur",
    "Noeud Sud": "Nodo Sur",
  },

  de: {
    Soleil: "Sonne",
    Lune: "Mond",
    Mercure: "Merkur",
    Vénus: "Venus",
    Mars: "Mars",
    Jupiter: "Jupiter",
    Saturne: "Saturn",
    Uranus: "Uranus",
    Neptune: "Neptun",
    Pluton: "Pluto",
    Chiron: "Chiron",
    "Nœud Nord": "Nordknoten",
    "Noeud Nord": "Nordknoten",
    "Nœud Sud": "Südknoten",
    "Noeud Sud": "Südknoten",
  },

  it: {
    Soleil: "Sole",
    Lune: "Luna",
    Mercure: "Mercurio",
    Vénus: "Venere",
    Mars: "Marte",
    Jupiter: "Giove",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Nettuno",
    Pluton: "Plutone",
    Chiron: "Chirone",
    "Nœud Nord": "Nodo Nord",
    "Noeud Nord": "Nodo Nord",
    "Nœud Sud": "Nodo Sud",
    "Noeud Sud": "Nodo Sud",
  },

  pt: {
    Soleil: "Sol",
    Lune: "Lua",
    Mercure: "Mercúrio",
    Vénus: "Vênus",
    Mars: "Marte",
    Jupiter: "Júpiter",
    Saturne: "Saturno",
    Uranus: "Urano",
    Neptune: "Netuno",
    Pluton: "Plutão",
    Chiron: "Quíron",
    "Nœud Nord": "Nodo Norte",
    "Noeud Nord": "Nodo Norte",
    "Nœud Sud": "Nodo Sul",
    "Noeud Sud": "Nodo Sul",
  },
};

const SIGNS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Bélier: "Aries",
    Taureau: "Taurus",
    Gémeaux: "Gemini",
    Cancer: "Cancer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Scorpio",
    Sagittaire: "Sagittarius",
    Capricorne: "Capricorn",
    Verseau: "Aquarius",
    Poissons: "Pisces",
  },

  es: {
    Bélier: "Aries",
    Taureau: "Tauro",
    Gémeaux: "Géminis",
    Cancer: "Cáncer",
    Lion: "Leo",
    Vierge: "Virgo",
    Balance: "Libra",
    Scorpion: "Escorpio",
    Sagittaire: "Sagitario",
    Capricorne: "Capricornio",
    Verseau: "Acuario",
    Poissons: "Piscis",
  },

  de: {
    Bélier: "Widder",
    Taureau: "Stier",
    Gémeaux: "Zwillinge",
    Cancer: "Krebs",
    Lion: "Löwe",
    Vierge: "Jungfrau",
    Balance: "Waage",
    Scorpion: "Skorpion",
    Sagittaire: "Schütze",
    Capricorne: "Steinbock",
    Verseau: "Wassermann",
    Poissons: "Fische",
  },

  it: {
    Bélier: "Ariete",
    Taureau: "Toro",
    Gémeaux: "Gemelli",
    Cancer: "Cancro",
    Lion: "Leone",
    Vierge: "Vergine",
    Balance: "Bilancia",
    Scorpion: "Scorpione",
    Sagittaire: "Sagittario",
    Capricorne: "Capricorno",
    Verseau: "Acquario",
    Poissons: "Pesci",
  },

  pt: {
    Bélier: "Áries",
    Taureau: "Touro",
    Gémeaux: "Gêmeos",
    Cancer: "Câncer",
    Lion: "Leão",
    Vierge: "Virgem",
    Balance: "Libra",
    Scorpion: "Escorpião",
    Sagittaire: "Sagitário",
    Capricorne: "Capricórnio",
    Verseau: "Aquário",
    Poissons: "Peixes",
  },
};

const ASPECTS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    Conjonction: "Conjunction",
    Opposition: "Opposition",
    Trigone: "Trine",
    Carré: "Square",
    Sextile: "Sextile",
  },

  es: {
    Conjonction: "Conjunción",
    Opposition: "Oposición",
    Trigone: "Trígono",
    Carré: "Cuadratura",
    Sextile: "Sextil",
  },

  de: {
    Conjonction: "Konjunktion",
    Opposition: "Opposition",
    Trigone: "Trigon",
    Carré: "Quadrat",
    Sextile: "Sextil",
  },

  it: {
    Conjonction: "Congiunzione",
    Opposition: "Opposizione",
    Trigone: "Trigono",
    Carré: "Quadratura",
    Sextile: "Sestile",
  },

  pt: {
    Conjonction: "Conjunção",
    Opposition: "Oposição",
    Trigone: "Trígono",
    Carré: "Quadratura",
    Sextile: "Sextil",
  },
};

function localizeSafeLiterals(
  source: string,
  translations: TranslationMap,
): string {
  const sourceFile =
    ts.createSourceFile(
      "HoroscopePlanets.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements: Array<{
    start: number;
    end: number;
    value: string;
  }> = [];

  function visit(
    node: ts.Node,
  ): void {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const translated =
        translations[node.text];

      if (
        typeof translated === "string" &&
        translated !== node.text
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const raw =
        node.getText(sourceFile);

      const normalized =
        raw.replace(/\s+/g, " ").trim();

      const translated =
        translations[normalized];

      if (
        normalized &&
        typeof translated === "string"
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ?? "";

        const trailing =
          raw.match(/\s*$/)?.[0] ?? "";

        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value:
            `${leading}${translated}${trailing}`,
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  }

  visit(sourceFile);

  return replacements
    .sort(
      (a, b) =>
        b.start - a.start,
    )
    .reduce(
      (
        output,
        replacement,
      ) =>
        output.slice(
          0,
          replacement.start,
        ) +
        replacement.value +
        output.slice(
          replacement.end,
        ),
      source,
    );
}

function replaceDynamicPlanetValues(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /const\s+periodLabel\s*=\s*formatHoroscopePeriodLabel\(\s*period,\s*\);/g,
    `const periodLabel =
    __planetsLocalizedPeriodLabel(
      period,
    );`,
  );

  output = output.replace(
    /\{identity\.zodiacSignLabel\}/g,
    "{__planetsLocalizeSign(identity.zodiacSignLabel)}",
  );

  output = output.replace(
    /\{planetName\}/g,
    "{__planetsLocalizePlanet(planetName)}",
  );

  output = output.replace(
    /\{influence\.aspect\}/g,
    "{__planetsLocalizeAspect(influence.aspect)}",
  );

  output = output.replace(
    /En\s+\{influence\.sign\}/g,
    "{__planetsFormatSignPlacement(influence.sign)}",
  );

  output = output.replace(
    /\{influence\.title\}/g,
    "{__planetsLocalizeDynamicText(influence.title)}",
  );

  output = output.replace(
    /\{influence\.description\}/g,
    "{__planetsLocalizeDynamicText(influence.description)}",
  );

  output = output.replace(
    /\{influence\.advice\}/g,
    "{__planetsLocalizeDynamicText(influence.advice)}",
  );

  output = output.replace(
    /\{\s*content\.planetaryIntroduction\s*\}/g,
    "{__planetsLocalizeDynamicText(content.planetaryIntroduction)}",
  );

  return output;
}

function injectPlanetHelpers(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "function __planetsLocalizeDynamicText",
    )
  ) {
    return source;
  }

  const inWord: Record<
    NonFrenchLocale,
    string
  > = {
    en: "in",
    es: "en",
    de: "in",
    it: "in",
    pt: "em",
  };

  const helper = `
/* =========================================================
   HOROSCOPE PLANETS — GENERATED LOCALE HELPERS
   Locale: ${locale}
========================================================= */

const __PLANETS_MONTHS =
  ${JSON.stringify(MONTHS[locale], null, 2)} as const;

const __PLANETS_FRENCH_MONTHS =
  ${JSON.stringify(FRENCH_MONTHS, null, 2)} as const;

const __PLANETS_NAMES:
  Record<string, string> =
  ${JSON.stringify(PLANETS[locale], null, 2)};

const __PLANETS_SIGNS:
  Record<string, string> =
  ${JSON.stringify(SIGNS[locale], null, 2)};

const __PLANETS_ASPECTS:
  Record<string, string> =
  ${JSON.stringify(ASPECTS[locale], null, 2)};

const __PLANETS_IN_WORD =
  ${JSON.stringify(inWord[locale])};

function __planetsLocalizePlanet(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __PLANETS_NAMES[value] ??
    value
  );
}

function __planetsLocalizeSign(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __PLANETS_SIGNS[value] ??
    value
  );
}

function __planetsLocalizeAspect(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return (
    __PLANETS_ASPECTS[value] ??
    value
  );
}

function __planetsFormatSignPlacement(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  return \`\${__PLANETS_IN_WORD} \${__planetsLocalizeSign(value)}\`;
}

function __planetsLocalizeDynamicText(
  value?: string | null,
): string {
  if (!value) {
    return "";
  }

  let output = value;

  __PLANETS_FRENCH_MONTHS.forEach(
    (frenchMonth, index) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${frenchMonth}\\\\b\`,
          "gi",
        ),
        __PLANETS_MONTHS[index],
      );
    },
  );

  Object.entries(
    __PLANETS_NAMES,
  ).forEach(
    ([french, localized]) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${french}\\\\b\`,
          "gi",
        ),
        localized,
      );
    },
  );

  Object.entries(
    __PLANETS_SIGNS,
  ).forEach(
    ([french, localized]) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${french}\\\\b\`,
          "gi",
        ),
        localized,
      );
    },
  );

  Object.entries(
    __PLANETS_ASPECTS,
  ).forEach(
    ([french, localized]) => {
      output = output.replace(
        new RegExp(
          \`\\\\b\${french}\\\\b\`,
          "gi",
        ),
        localized,
      );
    },
  );

  return output;
}

function __planetsFormatIsoDate(
  isoDate?: string | null,
): string {
  if (!isoDate) {
    return "";
  }

  const match =
    isoDate.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __planetsLocalizeDynamicText(
      isoDate,
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  ${
    locale === "en"
      ? 'return `${__PLANETS_MONTHS[month - 1]} ${day}, ${year}`;'
      : locale === "de"
        ? 'return `${day}. ${__PLANETS_MONTHS[month - 1]} ${year}`;'
        : locale === "es"
          ? 'return `${day} de ${__PLANETS_MONTHS[month - 1]} de ${year}`;'
          : locale === "pt"
            ? 'return `${day} de ${__PLANETS_MONTHS[month - 1]} de ${year}`;'
            : 'return `${day} ${__PLANETS_MONTHS[month - 1]} ${year}`;'
  }
}

function __planetsLocalizedPeriodLabel(
  period: HoroscopeSectionProps["period"],
): string {
  if (period.type === "day") {
    return __planetsFormatIsoDate(
      period.startDate,
    );
  }

  const match =
    period.startDate?.match(
      /^(\\d{4})-(\\d{2})-(\\d{2})$/,
    );

  if (!match) {
    return __planetsLocalizeDynamicText(
      period.label ||
      period.startDate ||
      "",
    );
  }

  const year = Number(match[1]);
  const month = Number(match[2]);

  if (period.type === "month") {
    return \`\${__PLANETS_MONTHS[month - 1]} \${year}\`;
  }

  return String(year);
}

/* =========================================================
   END HOROSCOPE PLANETS — GENERATED LOCALE HELPERS
========================================================= */

`;

  const marker =
    "export default function HoroscopePlanets";

  const index =
    source.indexOf(marker);

  if (index < 0) {
    return source;
  }

  return (
    source.slice(0, index) +
    helper +
    source.slice(index)
  );
}

export function localizeHoroscopePlanets(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const normalizedLocale =
    locale as NonFrenchLocale;

  const translations =
    TRANSLATIONS[normalizedLocale];

  if (!translations) {
    return source;
  }

  let localized =
    replaceDynamicPlanetValues(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      translations,
    );

  localized =
    injectPlanetHelpers(
      localized,
      normalizedLocale,
    );

  return localized;
}
