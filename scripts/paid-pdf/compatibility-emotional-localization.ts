import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<PaidPdfLocale, "fr">;

type LocaleData = {
  text: Record<string, string>;
  signs: Record<string, string>;
  elements: Record<string, string>;
  planets: Record<string, string>;
  aspects: Record<string, string>;
  aspectNatures: Record<string, string>;
  moonIn: string;
  elementWord: string;
  orbWord: string;
};

const TRANSLATIONS: Record<NonFrenchLocale, LocaleData> = {
  en: {
    text: {
      "Non précisé": "Not specified",
      "Élément non précisé": "Element not specified",
      "Première personne": "First person",
      "Deuxième personne": "Second person",
      "la première personne": "the first person",
      "la deuxième personne": "the second person",
      "Monde affectif": "Emotional world",
      "Votre compatibilité émotionnelle": "Your emotional compatibility",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.":
        "The Moon reveals what each person needs to feel understood, reassured, and deeply secure in the relationship.",
      "Besoins affectifs et sécurité intérieure": "Emotional needs and inner security",
      "La rencontre de vos deux Lunes": "The meeting of your two Moons",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.":
        "This comparison describes how your natural sensitivities recognize and complement one another, or require adjustment.",
      "Votre dynamique affective": "Your emotional dynamic",
      "Ce dont chacun a besoin pour se sentir aimé": "What each person needs to feel loved",
      "Vos principales interactions émotionnelles": "Your main emotional interactions",
      "Créer un climat de sécurité": "Creating a sense of security",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.":
        "Your emotional balance depends less on reacting in the same way than on your ability to recognize each other's needs. When both people feel heard without being judged, differences in sensitivity can become a source of depth, tenderness, and trust.",
      "Votre clé émotionnelle": "Your emotional key",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.":
        "Do not assume that the other person feels loved in the same way you do. Clearly expressing your needs, boundaries, and expectations helps prevent silence or different reactions from being interpreted as a lack of affection.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastry Report",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.":
        "The available data does not yet allow their emotional needs to be fully specified.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.":
        "The available data does not yet allow a fully personalized emotional interpretation.",
      "Vous pouvez reconnaître instinctivement les réactions, les sensibilités et les attentes affectives de l’autre. Cette familiarité favorise la proximité, mais elle peut aussi amplifier certains mécanismes de défense communs.":
        "You can instinctively recognize each other's reactions, sensitivities, and emotional expectations. This familiarity encourages closeness, but it can also amplify certain shared defense mechanisms.",
      "Vous partagez donc une manière fondamentale de vivre et de traiter les émotions. Même si vos réactions ne sont pas identiques, vous pouvez généralement comprendre ce dont l’autre a besoin pour se sentir en sécurité.":
        "You therefore share a fundamental way of experiencing and processing emotions. Even if your reactions are not identical, you can generally understand what the other person needs to feel secure.",
      "Cette dynamique devient particulièrement enrichissante lorsque chacun accepte que l’autre ne manifeste pas ses émotions de la même façon.":
        "This dynamic becomes especially enriching when each person accepts that the other does not express emotions in the same way.",
      "L’un peut avoir besoin de réagir immédiatement alors que l’autre préfère prendre du recul, analyser ou se protéger. La relation gagne en stabilité lorsque chacun apprend à reconnaître le langage émotionnel de l’autre sans l’interpréter comme un rejet.":
        "One person may need to react immediately while the other prefers to step back, analyze, or protect themselves. The relationship becomes more stable when each person learns to recognize the other's emotional language without interpreting it as rejection.",
      "Harmonie naturelle": "Natural harmony",
      "Connexion intense": "Intense connection",
      "Complémentarité": "Complementarity",
      "Zone d’ajustement": "Area of adjustment",
      "Influence relationnelle": "Relationship influence",
      "Aspect": "Aspect",
      "Vos réactions émotionnelles peuvent naturellement se comprendre et se soutenir.":
        "Your emotional reactions can naturally understand and support one another.",
      "Vos besoins affectifs peuvent différer et demander une écoute plus consciente.":
        "Your emotional needs may differ and require more conscious listening.",
      "Cette connexion intensifie la sensibilité et la résonance émotionnelle entre vous.":
        "This connection intensifies sensitivity and emotional resonance between you.",
      "L’affection et la tendresse peuvent répondre naturellement aux besoins émotionnels.":
        "Affection and tenderness can naturally meet emotional needs.",
      "La manière d’aimer peut parfois ne pas correspondre immédiatement aux attentes affectives.":
        "The way love is expressed may not always immediately match emotional expectations.",
      "L’amour, la douceur et la sensibilité occupent une place importante dans votre lien.":
        "Love, tenderness, and sensitivity play an important role in your connection.",
      "Le désir et l’action peuvent stimuler l’expression émotionnelle de façon vivante.":
        "Desire and action can stimulate emotional expression in a lively way.",
      "Les réactions impulsives peuvent parfois heurter la sensibilité de l’autre.":
        "Impulsive reactions can sometimes hurt the other person's sensitivity.",
      "Cette connexion crée une forte réactivité, mêlant émotion, désir et instinct.":
        "This connection creates strong reactivity, blending emotion, desire, and instinct.",
      "Saturne peut apporter stabilité, fiabilité et sécurité aux émotions de la Lune.":
        "Saturn can bring stability, reliability, and security to the Moon's emotions.",
      "La Lune peut parfois ressentir Saturne comme distant, exigeant ou peu démonstratif.":
        "The Moon may sometimes experience Saturn as distant, demanding, or emotionally reserved.",
      "Cette interaction souligne les thèmes de sécurité, de responsabilité et d’engagement émotionnel.":
        "This interaction highlights themes of security, responsibility, and emotional commitment.",
      "L’identité de l’un peut naturellement rassurer et soutenir les besoins émotionnels de l’autre.":
        "One person's identity can naturally reassure and support the other's emotional needs.",
      "L’expression personnelle de l’un peut parfois entrer en conflit avec la sensibilité de l’autre.":
        "One person's self-expression may sometimes conflict with the other's sensitivity.",
      "Le Soleil éclaire les émotions de la Lune et crée un fort sentiment de reconnaissance.":
        "The Sun illuminates the Moon's emotions and creates a strong sense of recognition.",
      "Cet aspect influence la manière dont vos émotions réagissent aux énergies personnelles de l’autre.":
        "This aspect influences how your emotions respond to the other person's personal energies."
    },
    signs: {
      Bélier: "Aries", Taureau: "Taurus", Gémeaux: "Gemini", Cancer: "Cancer",
      Lion: "Leo", Vierge: "Virgo", Balance: "Libra", Scorpion: "Scorpio",
      Sagittaire: "Sagittarius", Capricorne: "Capricorn", Verseau: "Aquarius", Poissons: "Pisces"
    },
    elements: { Feu: "Fire", Terre: "Earth", Air: "Air", Eau: "Water", "Élément non précisé": "Element not specified" },
    planets: { Soleil: "Sun", Lune: "Moon", Mercure: "Mercury", "Vénus": "Venus", Mars: "Mars", Jupiter: "Jupiter", Saturne: "Saturn", Uranus: "Uranus", Neptune: "Neptune", Pluton: "Pluto" },
    aspects: { Conjonction: "Conjunction", Trigone: "Trine", Sextile: "Sextile", Opposition: "Opposition", "Carré": "Square", Quinconce: "Quincunx", Aspect: "Aspect" },
    aspectNatures: { "Harmonie naturelle": "Natural harmony", "Connexion intense": "Intense connection", "Complémentarité": "Complementarity", "Zone d’ajustement": "Area of adjustment", "Influence relationnelle": "Relationship influence" },
    moonIn: "Moon in",
    elementWord: "Element",
    orbWord: "orb"
  },

  es: {
    text: {
      "Non précisé": "No especificado",
      "Élément non précisé": "Elemento no especificado",
      "Première personne": "Primera persona",
      "Deuxième personne": "Segunda persona",
      "la première personne": "la primera persona",
      "la deuxième personne": "la segunda persona",
      "Monde affectif": "Mundo afectivo",
      "Votre compatibilité émotionnelle": "Su compatibilidad emocional",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.":
        "La Luna revela lo que cada persona necesita para sentirse comprendida, tranquilizada y profundamente segura en la relación.",
      "Besoins affectifs et sécurité intérieure": "Necesidades afectivas y seguridad interior",
      "La rencontre de vos deux Lunes": "El encuentro de sus dos Lunas",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.":
        "Esta comparación describe cómo sus sensibilidades naturales se reconocen, se complementan o requieren ajustes.",
      "Votre dynamique affective": "Su dinámica afectiva",
      "Ce dont chacun a besoin pour se sentir aimé": "Lo que cada persona necesita para sentirse amada",
      "Vos principales interactions émotionnelles": "Sus principales interacciones emocionales",
      "Créer un climat de sécurité": "Crear un clima de seguridad",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.":
        "Su equilibrio emocional depende menos de reaccionar de la misma manera que de su capacidad para reconocer las necesidades del otro. Cuando ambos se sienten escuchados sin ser juzgados, las diferencias de sensibilidad pueden convertirse en una fuente de profundidad, ternura y confianza.",
      "Votre clé émotionnelle": "Su clave emocional",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.":
        "No dé por sentado que la otra persona se siente amada de la misma manera que usted. Expresar claramente sus necesidades, límites y expectativas ayuda a evitar que el silencio o las reacciones diferentes se interpreten como falta de afecto.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Informe de sinastría",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.": "Los datos disponibles todavía no permiten precisar por completo sus necesidades emocionales.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.": "Los datos disponibles todavía no permiten producir una interpretación emocional completamente personalizada.",
      "Harmonie naturelle": "Armonía natural", "Connexion intense": "Conexión intensa", "Complémentarité": "Complementariedad", "Zone d’ajustement": "Zona de ajuste", "Influence relationnelle": "Influencia relacional", "Aspect": "Aspecto"
    },
    signs: { Bélier: "Aries", Taureau: "Tauro", Gémeaux: "Géminis", Cancer: "Cáncer", Lion: "Leo", Vierge: "Virgo", Balance: "Libra", Scorpion: "Escorpio", Sagittaire: "Sagitario", Capricorne: "Capricornio", Verseau: "Acuario", Poissons: "Piscis" },
    elements: { Feu: "Fuego", Terre: "Tierra", Air: "Aire", Eau: "Agua", "Élément non précisé": "Elemento no especificado" },
    planets: { Soleil: "Sol", Lune: "Luna", Mercure: "Mercurio", "Vénus": "Venus", Mars: "Marte", Jupiter: "Júpiter", Saturne: "Saturno", Uranus: "Urano", Neptune: "Neptuno", Pluton: "Plutón" },
    aspects: { Conjonction: "Conjunción", Trigone: "Trígono", Sextile: "Sextil", Opposition: "Oposición", "Carré": "Cuadratura", Quinconce: "Quincuncio", Aspect: "Aspecto" },
    aspectNatures: { "Harmonie naturelle": "Armonía natural", "Connexion intense": "Conexión intensa", "Complémentarité": "Complementariedad", "Zone d’ajustement": "Zona de ajuste", "Influence relationnelle": "Influencia relacional" },
    moonIn: "Luna en", elementWord: "Elemento", orbWord: "orbe"
  },

  de: {
    text: {
      "Non précisé": "Nicht angegeben", "Élément non précisé": "Element nicht angegeben",
      "Première personne": "Erste Person", "Deuxième personne": "Zweite Person",
      "la première personne": "die erste Person", "la deuxième personne": "die zweite Person",
      "Monde affectif": "Gefühlswelt", "Votre compatibilité émotionnelle": "Ihre emotionale Kompatibilität",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.": "Der Mond zeigt, was jeder braucht, um sich verstanden, beruhigt und in der Beziehung tief geborgen zu fühlen.",
      "Besoins affectifs et sécurité intérieure": "Emotionale Bedürfnisse und innere Sicherheit",
      "La rencontre de vos deux Lunes": "Die Begegnung Ihrer beiden Monde",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.": "Dieser Vergleich beschreibt, wie Ihre natürlichen Empfindsamkeiten einander erkennen, ergänzen oder Anpassungen erfordern.",
      "Votre dynamique affective": "Ihre emotionale Dynamik",
      "Ce dont chacun a besoin pour se sentir aimé": "Was jeder braucht, um sich geliebt zu fühlen",
      "Vos principales interactions émotionnelles": "Ihre wichtigsten emotionalen Wechselwirkungen",
      "Créer un climat de sécurité": "Ein Gefühl von Sicherheit schaffen",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.": "Ihr emotionales Gleichgewicht hängt weniger davon ab, gleich zu reagieren, als davon, die Bedürfnisse des anderen zu erkennen. Wenn sich beide gehört fühlen, ohne beurteilt zu werden, können unterschiedliche Empfindsamkeiten zu einer Quelle von Tiefe, Zärtlichkeit und Vertrauen werden.",
      "Votre clé émotionnelle": "Ihr emotionaler Schlüssel",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.": "Gehen Sie nicht davon aus, dass sich der andere auf dieselbe Weise geliebt fühlt wie Sie. Wenn Sie Bedürfnisse, Grenzen und Erwartungen klar ausdrücken, vermeiden Sie, dass Schweigen oder unterschiedliche Reaktionen als mangelnde Zuneigung verstanden werden.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastrie-Bericht",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.": "Die verfügbaren Daten reichen noch nicht aus, um die emotionalen Bedürfnisse vollständig zu bestimmen.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.": "Die verfügbaren Daten reichen noch nicht aus, um eine vollständig personalisierte emotionale Deutung zu erstellen.",
      "Harmonie naturelle": "Natürliche Harmonie", "Connexion intense": "Intensive Verbindung", "Complémentarité": "Ergänzung", "Zone d’ajustement": "Anpassungsbereich", "Influence relationnelle": "Beziehungseinfluss", "Aspect": "Aspekt"
    },
    signs: { Bélier: "Widder", Taureau: "Stier", Gémeaux: "Zwillinge", Cancer: "Krebs", Lion: "Löwe", Vierge: "Jungfrau", Balance: "Waage", Scorpion: "Skorpion", Sagittaire: "Schütze", Capricorne: "Steinbock", Verseau: "Wassermann", Poissons: "Fische" },
    elements: { Feu: "Feuer", Terre: "Erde", Air: "Luft", Eau: "Wasser", "Élément non précisé": "Element nicht angegeben" },
    planets: { Soleil: "Sonne", Lune: "Mond", Mercure: "Merkur", "Vénus": "Venus", Mars: "Mars", Jupiter: "Jupiter", Saturne: "Saturn", Uranus: "Uranus", Neptune: "Neptun", Pluton: "Pluto" },
    aspects: { Conjonction: "Konjunktion", Trigone: "Trigon", Sextile: "Sextil", Opposition: "Opposition", "Carré": "Quadrat", Quinconce: "Quinkunx", Aspect: "Aspekt" },
    aspectNatures: { "Harmonie naturelle": "Natürliche Harmonie", "Connexion intense": "Intensive Verbindung", "Complémentarité": "Ergänzung", "Zone d’ajustement": "Anpassungsbereich", "Influence relationnelle": "Beziehungseinfluss" },
    moonIn: "Mond in", elementWord: "Element", orbWord: "Orb"
  },

  it: {
    text: {
      "Non précisé": "Non specificato", "Élément non précisé": "Elemento non specificato",
      "Première personne": "Prima persona", "Deuxième personne": "Seconda persona",
      "la première personne": "la prima persona", "la deuxième personne": "la seconda persona",
      "Monde affectif": "Mondo affettivo", "Votre compatibilité émotionnelle": "La vostra compatibilità emotiva",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.": "La Luna rivela ciò di cui ciascuno ha bisogno per sentirsi compreso, rassicurato e profondamente al sicuro nella relazione.",
      "Besoins affectifs et sécurité intérieure": "Bisogni affettivi e sicurezza interiore",
      "La rencontre de vos deux Lunes": "L'incontro delle vostre due Lune",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.": "Questo confronto descrive il modo in cui le vostre sensibilità naturali si riconoscono, si completano o richiedono adattamenti.",
      "Votre dynamique affective": "La vostra dinamica affettiva",
      "Ce dont chacun a besoin pour se sentir aimé": "Ciò di cui ciascuno ha bisogno per sentirsi amato",
      "Vos principales interactions émotionnelles": "Le vostre principali interazioni emotive",
      "Créer un climat de sécurité": "Creare un clima di sicurezza",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.": "Il vostro equilibrio emotivo dipende meno dal reagire allo stesso modo che dalla capacità di riconoscere i bisogni dell'altro. Quando entrambi si sentono ascoltati senza essere giudicati, le differenze di sensibilità possono diventare una fonte di profondità, tenerezza e fiducia.",
      "Votre clé émotionnelle": "La vostra chiave emotiva",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.": "Non date per scontato che l'altra persona si senta amata nello stesso modo in cui vi sentite voi. Esprimere chiaramente bisogni, limiti e aspettative aiuta a evitare che il silenzio o reazioni diverse vengano interpretati come mancanza di affetto.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Rapporto di sinastria",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.": "I dati disponibili non consentono ancora di precisare completamente i bisogni emotivi.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.": "I dati disponibili non consentono ancora di produrre un'interpretazione emotiva completamente personalizzata.",
      "Harmonie naturelle": "Armonia naturale", "Connexion intense": "Connessione intensa", "Complémentarité": "Complementarità", "Zone d’ajustement": "Area di adattamento", "Influence relationnelle": "Influenza relazionale", "Aspect": "Aspetto"
    },
    signs: { Bélier: "Ariete", Taureau: "Toro", Gémeaux: "Gemelli", Cancer: "Cancro", Lion: "Leone", Vierge: "Vergine", Balance: "Bilancia", Scorpion: "Scorpione", Sagittaire: "Sagittario", Capricorne: "Capricorno", Verseau: "Acquario", Poissons: "Pesci" },
    elements: { Feu: "Fuoco", Terre: "Terra", Air: "Aria", Eau: "Acqua", "Élément non précisé": "Elemento non specificato" },
    planets: { Soleil: "Sole", Lune: "Luna", Mercure: "Mercurio", "Vénus": "Venere", Mars: "Marte", Jupiter: "Giove", Saturne: "Saturno", Uranus: "Urano", Neptune: "Nettuno", Pluton: "Plutone" },
    aspects: { Conjonction: "Congiunzione", Trigone: "Trigono", Sextile: "Sestile", Opposition: "Opposizione", "Carré": "Quadratura", Quinconce: "Quinconce", Aspect: "Aspetto" },
    aspectNatures: { "Harmonie naturelle": "Armonia naturale", "Connexion intense": "Connessione intensa", "Complémentarité": "Complementarità", "Zone d’ajustement": "Area di adattamento", "Influence relationnelle": "Influenza relazionale" },
    moonIn: "Luna in", elementWord: "Elemento", orbWord: "orbita"
  },

  pt: {
    text: {
      "Non précisé": "Não especificado", "Élément non précisé": "Elemento não especificado",
      "Première personne": "Primeira pessoa", "Deuxième personne": "Segunda pessoa",
      "la première personne": "a primeira pessoa", "la deuxième personne": "a segunda pessoa",
      "Monde affectif": "Mundo afetivo", "Votre compatibilité émotionnelle": "A sua compatibilidade emocional",
      "La Lune révèle ce dont chacun a besoin pour se sentir compris, rassuré et profondément en confiance dans la relation.": "A Lua revela aquilo de que cada pessoa precisa para se sentir compreendida, tranquilizada e profundamente segura na relação.",
      "Besoins affectifs et sécurité intérieure": "Necessidades afetivas e segurança interior",
      "La rencontre de vos deux Lunes": "O encontro das suas duas Luas",
      "Cette comparaison décrit la façon dont vos sensibilités naturelles se reconnaissent, se complètent ou demandent des ajustements.": "Esta comparação descreve a forma como as suas sensibilidades naturais se reconhecem, se complementam ou exigem ajustes.",
      "Votre dynamique affective": "A sua dinâmica afetiva",
      "Ce dont chacun a besoin pour se sentir aimé": "Aquilo de que cada pessoa precisa para se sentir amada",
      "Vos principales interactions émotionnelles": "As suas principais interações emocionais",
      "Créer un climat de sécurité": "Criar um ambiente de segurança",
      "Votre équilibre émotionnel repose moins sur le fait de réagir de la même manière que sur votre capacité à reconnaître les besoins de l’autre. Lorsque chacun se sent entendu sans être jugé, les différences de sensibilité peuvent devenir une source de profondeur, de tendresse et de confiance.": "O seu equilíbrio emocional depende menos de reagirem da mesma forma do que da capacidade de reconhecerem as necessidades um do outro. Quando ambos se sentem ouvidos sem serem julgados, as diferenças de sensibilidade podem tornar-se uma fonte de profundidade, ternura e confiança.",
      "Votre clé émotionnelle": "A sua chave emocional",
      "Ne présumez pas que l’autre se sent aimé de la même façon que vous. Exprimer clairement vos besoins, vos limites et vos attentes permet d’éviter que le silence ou les réactions différentes soient interprétés comme un manque d’affection.": "Não presuma que a outra pessoa se sente amada da mesma forma que você. Expressar claramente as suas necessidades, limites e expectativas ajuda a evitar que o silêncio ou reações diferentes sejam interpretados como falta de afeto.",
      "Luna Astralis • Rapport de synastrie": "Luna Astralis • Relatório de sinastria",
      "Les données disponibles ne permettent pas encore de préciser entièrement ses besoins émotionnels.": "Os dados disponíveis ainda não permitem especificar totalmente as necessidades emocionais.",
      "Les données disponibles ne permettent pas encore de produire une interprétation émotionnelle entièrement personnalisée.": "Os dados disponíveis ainda não permitem produzir uma interpretação emocional totalmente personalizada.",
      "Harmonie naturelle": "Harmonia natural", "Connexion intense": "Conexão intensa", "Complémentarité": "Complementaridade", "Zone d’ajustement": "Área de ajuste", "Influence relationnelle": "Influência relacional", "Aspect": "Aspeto"
    },
    signs: { Bélier: "Áries", Taureau: "Touro", Gémeaux: "Gêmeos", Cancer: "Câncer", Lion: "Leão", Vierge: "Virgem", Balance: "Libra", Scorpion: "Escorpião", Sagittaire: "Sagitário", Capricorne: "Capricórnio", Verseau: "Aquário", Poissons: "Peixes" },
    elements: { Feu: "Fogo", Terre: "Terra", Air: "Ar", Eau: "Água", "Élément non précisé": "Elemento não especificado" },
    planets: { Soleil: "Sol", Lune: "Lua", Mercure: "Mercúrio", "Vénus": "Vênus", Mars: "Marte", Jupiter: "Júpiter", Saturne: "Saturno", Uranus: "Urano", Neptune: "Netuno", Pluton: "Plutão" },
    aspects: { Conjonction: "Conjunção", Trigone: "Trígono", Sextile: "Sextil", Opposition: "Oposição", "Carré": "Quadratura", Quinconce: "Quincúncio", Aspect: "Aspeto" },
    aspectNatures: { "Harmonie naturelle": "Harmonia natural", "Connexion intense": "Conexão intensa", "Complémentarité": "Complementaridade", "Zone d’ajustement": "Área de ajuste", "Influence relationnelle": "Influência relacional" },
    moonIn: "Lua em", elementWord: "Elemento", orbWord: "orbe"
  }
};

type Replacement = {
  start: number;
  end: number;
  value: string;
};

function normalizeVisibleText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted = [...replacements].sort(
    (a, b) => b.start - a.start,
  );

  let output = source;

  for (const replacement of sorted) {
    output =
      output.slice(0, replacement.start) +
      replacement.value +
      output.slice(replacement.end);
  }

  return output;
}

function localizeCompleteLiterals(
  source: string,
  translations: Record<string, string>,
): string {
  const sourceFile = ts.createSourceFile(
    "CompatibilityEmotional.tsx",
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const replacements: Replacement[] = [];

  const visit = (node: ts.Node): void => {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node)
    ) {
      const exact = node.text;
      const normalized = normalizeVisibleText(exact);
      const translated =
        translations[exact] ??
        translations[normalized];

      if (
        typeof translated === "string" &&
        translated !== exact
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: JSON.stringify(translated),
        });
      }
    }

    if (ts.isJsxText(node)) {
      const original = normalizeVisibleText(
        node.getText(sourceFile),
      );
      const translated = translations[original];

      if (
        typeof translated === "string" &&
        translated !== original
      ) {
        replacements.push({
          start: node.getStart(sourceFile),
          end: node.getEnd(),
          value: `{${JSON.stringify(translated)}}`,
        });
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  return applyReplacements(source, replacements);
}

function buildHelpers(data: LocaleData): string {
  return `
const __EMOTIONAL_SIGNS = ${JSON.stringify(data.signs, null, 2)} as Record<string, string>;
const __EMOTIONAL_ELEMENTS = ${JSON.stringify(data.elements, null, 2)} as Record<string, string>;
const __EMOTIONAL_PLANETS = ${JSON.stringify(data.planets, null, 2)} as Record<string, string>;
const __EMOTIONAL_ASPECTS = ${JSON.stringify(data.aspects, null, 2)} as Record<string, string>;
const __EMOTIONAL_ASPECT_NATURES = ${JSON.stringify(data.aspectNatures, null, 2)} as Record<string, string>;
const __EMOTIONAL_MOON_IN = ${JSON.stringify(data.moonIn)};
const __EMOTIONAL_ELEMENT_WORD = ${JSON.stringify(data.elementWord)};
const __EMOTIONAL_ORB_WORD = ${JSON.stringify(data.orbWord)};

function localizeEmotionalSign(value: string): string {
  return __EMOTIONAL_SIGNS[value] ?? value;
}

function localizeEmotionalElement(value: string): string {
  return __EMOTIONAL_ELEMENTS[value] ?? value;
}

function localizeEmotionalPlanet(value: string): string {
  return __EMOTIONAL_PLANETS[value] ?? value;
}

function localizeEmotionalAspect(value: string): string {
  return __EMOTIONAL_ASPECTS[value] ?? value;
}

function localizeEmotionalAspectNature(value: string): string {
  return __EMOTIONAL_ASPECT_NATURES[value] ?? value;
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
): string {
  const marker = "function getPersonName(";

  if (!source.includes(marker)) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(data)}\n${marker}`,
  );
}

function replaceTargetedDisplayCode(
  source: string,
): string {
  let output = source;

  output = output.replace(
    /Lune en \{moonSign1\}/g,
    "{__EMOTIONAL_MOON_IN} {localizeEmotionalSign(moonSign1)}",
  );

  output = output.replace(
    /Lune en \{moonSign2\}/g,
    "{__EMOTIONAL_MOON_IN} {localizeEmotionalSign(moonSign2)}",
  );

  output = output.replace(
    /Élément \{element1\}/g,
    "{__EMOTIONAL_ELEMENT_WORD} {localizeEmotionalElement(element1)}",
  );

  output = output.replace(
    /Élément \{element2\}/g,
    "{__EMOTIONAL_ELEMENT_WORD} {localizeEmotionalElement(element2)}",
  );

  output = output.replace(
    /\{planet1\} \{aspect\.aspect\}\{" "\}\s*\{planet2\}/g,
    "{localizeEmotionalPlanet(planet1)} {localizeEmotionalAspect(aspect.aspect)}{\" \"}\n          {localizeEmotionalPlanet(planet2)}",
  );

  output = output.replace(
    /\{getAspectNature\(\s*aspect\.aspect,\s*\)\}/g,
    "{localizeEmotionalAspectNature(getAspectNature(aspect.aspect))}",
  );

  output = output.replace(
    /\? ` • orbe \$\{aspect\.orb\.toFixed\(1\)\}°`/g,
    "? ` • ${__EMOTIONAL_ORB_WORD} ${aspect.orb.toFixed(1)}°`",
  );

  return output;
}

export function localizeCompatibilityEmotional(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const data = TRANSLATIONS[
    locale as NonFrenchLocale
  ];

  if (!data) {
    return source;
  }

  let localized = localizeCompleteLiterals(
    source,
    data.text,
  );

  localized = injectHelpers(
    localized,
    data,
  );

  localized = replaceTargetedDisplayCode(
    localized,
  );

  return localized;
}
