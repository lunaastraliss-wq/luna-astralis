import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

type LocaleData = {
  text: Record<string, string>;
  signs: Record<string, string>;
  planets: Record<string, string>;
  aspects: Record<string, string>;
  elements: Record<string, string>;

  inWord: string;
  elementWord: string;
  orbWord: string;

  aspectFallbacks: Record<string, string>;

  connection: {
    missing: string;

    sameSignStart: string;
    sameSignMiddle: string;

    sameElementStart: string;
    sameElementMiddle: string;

    complementaryStart: string;
    complementaryMiddle: string;

    differentStart: string;
    differentMiddle: string;
  };

  summaryMeets: string;
};

const TRANSLATIONS: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: {
    text: {
      "Non précisé":
        "Not specified",

      "Première personne":
        "First person",

      "Deuxième personne":
        "Second person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastry Report",

      "Identité et direction":
        "Identity and direction",

      "Soleil et Soleil":
        "Sun and Sun",

      "Cette rencontre révèle comment vos identités, vos ambitions et vos manières d’occuper l’espace peuvent s’accorder.":
        "This connection reveals how your identities, ambitions, and ways of expressing yourselves can work together.",

      "Votre couple peut développer une direction claire lorsque chacun reconnaît la valeur, les talents et les objectifs personnels de l’autre.":
        "Your relationship can develop a clear direction when each person recognizes the other's value, talents, and personal goals.",

      "Une rivalité peut apparaître si chacun souhaite imposer son rythme, recevoir toute la reconnaissance ou décider seul de la direction commune.":
        "Rivalry may appear if each person wants to impose their own pace, receive all the recognition, or decide the shared direction alone.",

      "Célébrez régulièrement les réussites individuelles. Deux identités respectées deviennent une force commune plutôt qu’une compétition.":
        "Regularly celebrate individual achievements. Two respected identities become a shared strength rather than a competition.",

      "Besoins émotionnels":
        "Emotional needs",

      "Lune et Lune":
        "Moon and Moon",

      "Cette comparaison montre comment vos besoins de sécurité, vos réactions instinctives et vos habitudes affectives se rencontrent.":
        "This comparison shows how your needs for security, instinctive reactions, and emotional habits interact.",

      "Vous pouvez construire un véritable refuge émotionnel lorsque vous apprenez à reconnaître les signes subtils de fatigue, de peur ou de besoin de réconfort.":
        "You can build a genuine emotional refuge when you learn to recognize subtle signs of fatigue, fear, or the need for comfort.",

      "Vos réactions automatiques peuvent être très différentes : l’un recherche le rapprochement pendant que l’autre a besoin de silence ou de recul.":
        "Your automatic reactions can be very different: one person may seek closeness while the other needs silence or distance.",

      "Ne jugez pas la réaction émotionnelle de l’autre. Demandez plutôt ce qui l’aiderait à retrouver un sentiment de sécurité.":
        "Do not judge the other person's emotional reaction. Instead, ask what would help them regain a sense of security.",

      "Identité et sensibilité":
        "Identity and sensitivity",

      "Soleil et Lune":
        "Sun and Moon",

      "Le Soleil représente l’expression consciente, tandis que la Lune révèle le monde intérieur et les besoins émotionnels.":
        "The Sun represents conscious expression, while the Moon reveals the inner world and emotional needs.",

      "Cette connexion peut créer un sentiment profond de reconnaissance : l’un éclaire et encourage, tandis que l’autre nourrit, comprend et protège.":
        "This connection can create a deep sense of recognition: one person illuminates and encourages, while the other nurtures, understands, and protects.",

      "L’expression directe de l’un peut parfois heurter la sensibilité de l’autre, surtout lorsque les besoins affectifs ne sont pas clairement formulés.":
        "One person's direct expression may sometimes hurt the other's sensitivity, especially when emotional needs are not clearly expressed.",

      "Alternez les rôles : parfois il faut agir et encourager, parfois il faut simplement écouter et accueillir ce qui est ressenti.":
        "Alternate roles: sometimes action and encouragement are needed, while at other times it is enough simply to listen and receive what is being felt.",

      "Charme et reconnaissance":
        "Charm and appreciation",

      "Soleil et Vénus":
        "Sun and Venus",

      "Cette interaction décrit l’admiration, le plaisir d’être ensemble et la manière dont l’affection soutient l’identité.":
        "This interaction describes admiration, the pleasure of being together, and the way affection supports identity.",

      "L’admiration et le plaisir partagé peuvent renforcer la confiance du couple. Chacun peut aider l’autre à se sentir apprécié, désirable et valorisé.":
        "Admiration and shared pleasure can strengthen the relationship's confidence. Each person can help the other feel appreciated, desirable, and valued.",

      "Le besoin de plaire ou d’éviter les désaccords peut parfois masquer des différences importantes de valeurs, de goûts ou d’attentes.":
        "The desire to please or avoid disagreement may sometimes hide important differences in values, preferences, or expectations.",

      "Conservez la douceur, mais exprimez aussi vos préférences réelles. Une harmonie sincère vaut mieux qu’une paix obtenue par l’effacement.":
        "Preserve tenderness, but also express your genuine preferences. Sincere harmony is better than peace achieved through self-erasure.",

      "Tendresse et attachement":
        "Tenderness and attachment",

      "Lune et Vénus":
        "Moon and Venus",

      "Cette rencontre unit les besoins émotionnels de la Lune à la manière d’aimer, de séduire et de créer l’harmonie de Vénus.":
        "This connection brings together the Moon's emotional needs with Venus's way of loving, attracting, and creating harmony.",

      "La tendresse, les gestes simples et le plaisir de prendre soin l’un de l’autre peuvent devenir une grande source de stabilité affective.":
        "Tenderness, simple gestures, and the pleasure of caring for one another can become a major source of emotional stability.",

      "L’un peut offrir de l’amour d’une façon qui ne répond pas exactement au besoin émotionnel de l’autre, malgré une intention sincère.":
        "One person may express love in a way that does not exactly meet the other's emotional needs, despite sincere intentions.",

      "Demandez clairement quels gestes font réellement sentir aimé : présence, paroles, contact, aide concrète ou moments de qualité.":
        "Clearly ask which gestures genuinely make each person feel loved: presence, words, touch, practical help, or quality time.",

      "Émotion et désir":
        "Emotion and desire",

      "Mars et Lune":
        "Mars and Moon",

      "Mars stimule l’action et le désir, tandis que la Lune réagit avec sensibilité, mémoire et instinct de protection.":
        "Mars stimulates action and desire, while the Moon responds through sensitivity, memory, and protective instinct.",

      "Cette interaction peut créer une forte énergie protectrice, une attraction instinctive et une capacité à agir rapidement pour défendre le lien.":
        "This interaction can create strong protective energy, instinctive attraction, and an ability to act quickly to defend the relationship.",

      "Les réactions impulsives peuvent toucher des zones très sensibles. Une parole rapide ou un geste brusque peut laisser une trace émotionnelle durable.":
        "Impulsive reactions can touch very sensitive areas. A quick remark or abrupt gesture can leave a lasting emotional impression.",

      "Lorsque l’émotion monte, ralentissez avant d’agir. La sécurité affective doit rester plus importante que le besoin d’avoir immédiatement raison.":
        "When emotions rise, slow down before acting. Emotional security should remain more important than the need to be immediately right.",

      "Votre dynamique":
        "Your dynamic",

      "Aspect direct entre ces énergies":
        "Direct aspect between these energies",

      "Votre potentiel":
        "Your potential",

      "Votre point de vigilance":
        "Your point of attention",

      "Votre clé relationnelle":
        "Your relationship key",

      "Lecture d’ensemble":
        "Overall reading",

      "Synthèse des interactions planétaires":
        "Summary of planetary interactions",

      "Les principales connexions entre vos planètes personnelles décrivent la manière dont identité, émotion, affection et désir forment votre dynamique de couple.":
        "The main connections between your personal planets describe how identity, emotion, affection, and desire shape your relationship dynamic.",

      "Ce que révèle l’ensemble":
        "What the overall picture reveals",

      "Aucune connexion ne définit seule votre relation. La compatibilité se construit dans l’équilibre entre identité, sécurité émotionnelle, affection, communication et désir. Vos différences ne représentent pas nécessairement des obstacles : elles indiquent souvent les endroits précis où le couple apprend à mieux se connaître et à évoluer.":
        "No single connection defines your relationship. Compatibility develops through the balance between identity, emotional security, affection, communication, and desire. Your differences are not necessarily obstacles: they often indicate the exact areas where the relationship learns to understand itself better and grow.",
    },

    signs: {
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
      "Non précisé": "Not specified",
    },

    planets: {
      Soleil: "Sun",
      Lune: "Moon",
      Vénus: "Venus",
      Mars: "Mars",
    },

    aspects: {
      Conjonction: "Conjunction",
      Opposition: "Opposition",
      Trigone: "Trine",
      Carré: "Square",
      Sextile: "Sextile",
      Quinconce: "Quincunx",
    },

    elements: {
      Feu: "Fire",
      Terre: "Earth",
      Air: "Air",
      Eau: "Water",
      "Non précisé": "Not specified",
    },

    inWord: "in",

    elementWord: "Element",

    orbWord: "orb",

    aspectFallbacks: {
      conjunction: "This conjunction intensifies the meeting of the two planetary energies. It can create strong closeness, while also amplifying their reactions and needs.",
      trine: "This trine encourages a natural flow between the two energies. Each person can support the other with greater ease, understanding, and confidence.",
      sextile: "This sextile creates an opportunity for cooperation and mutual enrichment. Its potential develops when both partners consciously choose to use it.",
      square: "This square creates dynamic tension between the two energies. It can trigger defensive reactions, but it can also encourage the relationship to evolve and find new solutions.",
      opposition: "This opposition brings two contrasting needs or ways of functioning face to face. Balance develops when each person recognizes the value of the opposing point of view.",
      quincunx: "This quincunx requires regular adjustments. The two energies do not function naturally in the same way, but they can learn to cooperate more effectively.",
    },

    connection: {
      missing:
        "Some planetary positions are not available. The interpretation therefore remains general and can be refined once both complete birth charts are available.",

      sameSignStart:
        "Both energies meet in {sign1}. ",

      sameSignMiddle:
        "This similarity creates quick understanding and a shared way of approaching this area of the relationship. It can also amplify the same needs, reactions, and blind spots.",

      sameElementStart:
        "The signs {sign1} and {sign2} both belong to the {element1} element. ",

      sameElementMiddle:
        "Your ways of functioning therefore share a comparable sensitivity or logic. This closeness facilitates harmony, provided you do not reinforce the same excesses together.",

      complementaryStart:
        "The signs {sign1} and {sign2} belong to the elements {element1} and {element2}, which can naturally support one another. ",

      complementaryMiddle:
        "One brings movement, inspiration, or initiative, while the other adds depth, stability, or understanding. Your differences can become genuine complementarity.",

      differentStart:
        "The signs {sign1} and {sign2} function through different elements, {element1} and {element2}. ",

      differentMiddle:
        "Your reactions and priorities may therefore not be immediately easy to understand. This difference becomes enriching when each person stops expecting the other to feel, decide, or love in exactly the same way.",
    },

    summaryMeets:
      "meets",
  },

  es: {
    text: {
      "Non précisé":
        "No especificado",

      "Première personne":
        "Primera persona",

      "Deuxième personne":
        "Segunda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Informe de sinastría",

      "Identité et direction":
        "Identidad y dirección",

      "Soleil et Soleil":
        "Sol y Sol",

      "Cette rencontre révèle comment vos identités, vos ambitions et vos manières d’occuper l’espace peuvent s’accorder.":
        "Este encuentro revela cómo sus identidades, ambiciones y maneras de expresarse pueden armonizar.",

      "Votre couple peut développer une direction claire lorsque chacun reconnaît la valeur, les talents et les objectifs personnels de l’autre.":
        "Su relación puede desarrollar una dirección clara cuando cada persona reconoce el valor, los talentos y los objetivos personales de la otra.",

      "Une rivalité peut apparaître si chacun souhaite imposer son rythme, recevoir toute la reconnaissance ou décider seul de la direction commune.":
        "Puede aparecer rivalidad si cada persona desea imponer su ritmo, recibir todo el reconocimiento o decidir por sí sola la dirección común.",

      "Célébrez régulièrement les réussites individuelles. Deux identités respectées deviennent une force commune plutôt qu’une compétition.":
        "Celebren regularmente los logros individuales. Dos identidades respetadas se convierten en una fuerza común en lugar de una competencia.",

      "Besoins émotionnels":
        "Necesidades emocionales",

      "Lune et Lune":
        "Luna y Luna",

      "Cette comparaison montre comment vos besoins de sécurité, vos réactions instinctives et vos habitudes affectives se rencontrent.":
        "Esta comparación muestra cómo se encuentran sus necesidades de seguridad, sus reacciones instintivas y sus hábitos afectivos.",

      "Vous pouvez construire un véritable refuge émotionnel lorsque vous apprenez à reconnaître les signes subtils de fatigue, de peur ou de besoin de réconfort.":
        "Pueden construir un verdadero refugio emocional cuando aprenden a reconocer los signos sutiles de cansancio, miedo o necesidad de consuelo.",

      "Vos réactions automatiques peuvent être très différentes : l’un recherche le rapprochement pendant que l’autre a besoin de silence ou de recul.":
        "Sus reacciones automáticas pueden ser muy diferentes: uno busca acercarse mientras el otro necesita silencio o distancia.",

      "Ne jugez pas la réaction émotionnelle de l’autre. Demandez plutôt ce qui l’aiderait à retrouver un sentiment de sécurité.":
        "No juzguen la reacción emocional del otro. Pregunten más bien qué le ayudaría a recuperar una sensación de seguridad.",

      "Identité et sensibilité":
        "Identidad y sensibilidad",

      "Soleil et Lune":
        "Sol y Luna",

      "Le Soleil représente l’expression consciente, tandis que la Lune révèle le monde intérieur et les besoins émotionnels.":
        "El Sol representa la expresión consciente, mientras que la Luna revela el mundo interior y las necesidades emocionales.",

      "Cette connexion peut créer un sentiment profond de reconnaissance : l’un éclaire et encourage, tandis que l’autre nourrit, comprend et protège.":
        "Esta conexión puede crear un profundo sentimiento de reconocimiento: uno ilumina y anima, mientras que el otro nutre, comprende y protege.",

      "L’expression directe de l’un peut parfois heurter la sensibilité de l’autre, surtout lorsque les besoins affectifs ne sont pas clairement formulés.":
        "La expresión directa de uno puede herir a veces la sensibilidad del otro, especialmente cuando las necesidades afectivas no están claramente expresadas.",

      "Alternez les rôles : parfois il faut agir et encourager, parfois il faut simplement écouter et accueillir ce qui est ressenti.":
        "Alternen los roles: a veces es necesario actuar y animar, y otras simplemente escuchar y acoger lo que se siente.",

      "Charme et reconnaissance":
        "Encanto y reconocimiento",

      "Soleil et Vénus":
        "Sol y Venus",

      "Cette interaction décrit l’admiration, le plaisir d’être ensemble et la manière dont l’affection soutient l’identité.":
        "Esta interacción describe la admiración, el placer de estar juntos y la manera en que el afecto apoya la identidad.",

      "L’admiration et le plaisir partagé peuvent renforcer la confiance du couple. Chacun peut aider l’autre à se sentir apprécié, désirable et valorisé.":
        "La admiración y el placer compartido pueden reforzar la confianza de la relación. Cada persona puede ayudar a la otra a sentirse apreciada, deseada y valorada.",

      "Le besoin de plaire ou d’éviter les désaccords peut parfois masquer des différences importantes de valeurs, de goûts ou d’attentes.":
        "La necesidad de agradar o evitar desacuerdos puede ocultar diferencias importantes de valores, gustos o expectativas.",

      "Conservez la douceur, mais exprimez aussi vos préférences réelles. Une harmonie sincère vaut mieux qu’une paix obtenue par l’effacement.":
        "Conserven la ternura, pero expresen también sus verdaderas preferencias. Una armonía sincera vale más que una paz obtenida anulándose.",

      "Tendresse et attachement":
        "Ternura y apego",

      "Lune et Vénus":
        "Luna y Venus",

      "Cette rencontre unit les besoins émotionnels de la Lune à la manière d’aimer, de séduire et de créer l’harmonie de Vénus.":
        "Este encuentro une las necesidades emocionales de la Luna con la manera de amar, seducir y crear armonía de Venus.",

      "La tendresse, les gestes simples et le plaisir de prendre soin l’un de l’autre peuvent devenir une grande source de stabilité affective.":
        "La ternura, los gestos sencillos y el placer de cuidarse mutuamente pueden convertirse en una gran fuente de estabilidad afectiva.",

      "L’un peut offrir de l’amour d’une façon qui ne répond pas exactement au besoin émotionnel de l’autre, malgré une intention sincère.":
        "Uno puede ofrecer amor de una forma que no responde exactamente a la necesidad emocional del otro, a pesar de una intención sincera.",

      "Demandez clairement quels gestes font réellement sentir aimé : présence, paroles, contact, aide concrète ou moments de qualité.":
        "Pregunten claramente qué gestos hacen que cada uno se sienta realmente amado: presencia, palabras, contacto, ayuda concreta o tiempo de calidad.",

      "Émotion et désir":
        "Emoción y deseo",

      "Mars et Lune":
        "Marte y Luna",

      "Mars stimule l’action et le désir, tandis que la Lune réagit avec sensibilité, mémoire et instinct de protection.":
        "Marte estimula la acción y el deseo, mientras que la Luna reacciona con sensibilidad, memoria e instinto de protección.",

      "Cette interaction peut créer une forte énergie protectrice, une attraction instinctive et une capacité à agir rapidement pour défendre le lien.":
        "Esta interacción puede crear una fuerte energía protectora, atracción instintiva y capacidad de actuar rápidamente para defender el vínculo.",

      "Les réactions impulsives peuvent toucher des zones très sensibles. Une parole rapide ou un geste brusque peut laisser une trace émotionnelle durable.":
        "Las reacciones impulsivas pueden tocar zonas muy sensibles. Una palabra precipitada o un gesto brusco puede dejar una huella emocional duradera.",

      "Lorsque l’émotion monte, ralentissez avant d’agir. La sécurité affective doit rester plus importante que le besoin d’avoir immédiatement raison.":
        "Cuando aumente la emoción, reduzcan el ritmo antes de actuar. La seguridad afectiva debe seguir siendo más importante que la necesidad de tener razón inmediatamente.",

      "Votre dynamique":
        "Su dinámica",

      "Aspect direct entre ces énergies":
        "Aspecto directo entre estas energías",

      "Votre potentiel":
        "Su potencial",

      "Votre point de vigilance":
        "Su punto de atención",

      "Votre clé relationnelle":
        "Su clave relacional",

      "Lecture d’ensemble":
        "Lectura general",

      "Synthèse des interactions planétaires":
        "Síntesis de las interacciones planetarias",

      "Les principales connexions entre vos planètes personnelles décrivent la manière dont identité, émotion, affection et désir forment votre dynamique de couple.":
        "Las principales conexiones entre sus planetas personales describen cómo la identidad, la emoción, el afecto y el deseo forman la dinámica de su relación.",

      "Ce que révèle l’ensemble":
        "Lo que revela el conjunto",

      "Aucune connexion ne définit seule votre relation. La compatibilité se construit dans l’équilibre entre identité, sécurité émotionnelle, affection, communication et désir. Vos différences ne représentent pas nécessairement des obstacles : elles indiquent souvent les endroits précis où le couple apprend à mieux se connaître et à évoluer.":
        "Ninguna conexión define por sí sola su relación. La compatibilidad se construye mediante el equilibrio entre identidad, seguridad emocional, afecto, comunicación y deseo. Sus diferencias no representan necesariamente obstáculos: a menudo indican los lugares exactos donde la relación aprende a conocerse mejor y evolucionar.",
    },

    signs: {
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
      "Non précisé": "No especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Luna",
      Vénus: "Venus",
      Mars: "Marte",
    },

    aspects: {
      Conjonction: "Conjunción",
      Opposition: "Oposición",
      Trigone: "Trígono",
      Carré: "Cuadratura",
      Sextile: "Sextil",
      Quinconce: "Quincuncio",
    },

    elements: {
      Feu: "Fuego",
      Terre: "Tierra",
      Air: "Aire",
      Eau: "Agua",
      "Non précisé": "No especificado",
    },

    inWord: "en",
    elementWord: "Elemento",
    orbWord: "orbe",

    aspectFallbacks: {
      conjunction: "Esta conjunción intensifica el encuentro de las dos energías planetarias. Puede crear una gran cercanía y también amplificar sus reacciones y necesidades.",
      trine: "Este trígono favorece una circulación natural entre las dos energías. Cada persona puede apoyar a la otra con mayor fluidez, comprensión y confianza.",
      sextile: "Este sextil crea una oportunidad de cooperación y enriquecimiento mutuo. Su potencial se desarrolla cuando ambos eligen conscientemente utilizarlo.",
      square: "Esta cuadratura crea una tensión dinámica entre las dos energías. Puede provocar reacciones defensivas, pero también impulsar a la relación a evolucionar y encontrar nuevas soluciones.",
      opposition: "Esta oposición enfrenta dos necesidades o formas de funcionar contrastantes. El equilibrio se construye cuando cada persona reconoce el valor del punto de vista opuesto.",
      quincunx: "Este quincuncio requiere ajustes regulares. Las dos energías no funcionan naturalmente de la misma manera, pero pueden aprender a colaborar mejor.",
    },

    connection: {
      missing:
        "Algunas posiciones planetarias no están disponibles. La interpretación sigue siendo general y podrá precisarse cuando estén disponibles ambas cartas natales completas.",

      sameSignStart:
        "Sus dos energías se encuentran en el signo {sign1}. ",

      sameSignMiddle:
        "Esta semejanza crea una comprensión rápida y una manera común de abordar esta área de la relación. También puede amplificar las mismas necesidades, reacciones y puntos ciegos.",

      sameElementStart:
        "Los signos {sign1} y {sign2} pertenecen ambos al elemento {element1}. ",

      sameElementMiddle:
        "Sus formas de funcionar se apoyan por tanto en una sensibilidad o lógica comparable. Esta cercanía facilita la armonía siempre que no refuercen juntos los mismos excesos.",

      complementaryStart:
        "Los signos {sign1} y {sign2} pertenecen a los elementos {element1} y {element2}, que pueden apoyarse naturalmente. ",

      complementaryMiddle:
        "Uno aporta movimiento, inspiración o iniciativa, mientras el otro añade profundidad, estabilidad o comprensión. Su diferencia puede convertirse en una verdadera complementariedad.",

      differentStart:
        "Los signos {sign1} y {sign2} funcionan mediante elementos diferentes, {element1} y {element2}. ",

      differentMiddle:
        "Por lo tanto, sus reacciones y prioridades no siempre son fáciles de comprender inmediatamente. Esta diferencia se vuelve enriquecedora cuando cada persona deja de esperar que la otra sienta, decida o ame exactamente de la misma manera.",
    },

    summaryMeets:
      "se encuentra con",
  },

  de: {
    text: {
      "Non précisé":
        "Nicht angegeben",

      "Première personne":
        "Erste Person",

      "Deuxième personne":
        "Zweite Person",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Synastrie-Bericht",

      "Identité et direction":
        "Identität und Richtung",

      "Soleil et Soleil":
        "Sonne und Sonne",

      "Cette rencontre révèle comment vos identités, vos ambitions et vos manières d’occuper l’espace peuvent s’accorder.":
        "Diese Verbindung zeigt, wie Ihre Identitäten, Ambitionen und Ausdrucksweisen miteinander harmonieren können.",

      "Votre couple peut développer une direction claire lorsque chacun reconnaît la valeur, les talents et les objectifs personnels de l’autre.":
        "Ihre Beziehung kann eine klare Richtung entwickeln, wenn jeder den Wert, die Talente und persönlichen Ziele des anderen anerkennt.",

      "Une rivalité peut apparaître si chacun souhaite imposer son rythme, recevoir toute la reconnaissance ou décider seul de la direction commune.":
        "Rivalität kann entstehen, wenn jeder seinen eigenen Rhythmus durchsetzen, die gesamte Anerkennung erhalten oder allein über die gemeinsame Richtung entscheiden möchte.",

      "Célébrez régulièrement les réussites individuelles. Deux identités respectées deviennent une force commune plutôt qu’une compétition.":
        "Feiern Sie regelmäßig individuelle Erfolge. Zwei respektierte Identitäten werden zu einer gemeinsamen Stärke statt zu Konkurrenz.",

      "Besoins émotionnels":
        "Emotionale Bedürfnisse",

      "Lune et Lune":
        "Mond und Mond",

      "Cette comparaison montre comment vos besoins de sécurité, vos réactions instinctives et vos habitudes affectives se rencontrent.":
        "Dieser Vergleich zeigt, wie Ihre Sicherheitsbedürfnisse, instinktiven Reaktionen und emotionalen Gewohnheiten aufeinandertreffen.",

      "Vous pouvez construire un véritable refuge émotionnel lorsque vous apprenez à reconnaître les signes subtils de fatigue, de peur ou de besoin de réconfort.":
        "Sie können einen echten emotionalen Rückzugsort schaffen, wenn Sie lernen, subtile Zeichen von Müdigkeit, Angst oder Trostbedürfnis zu erkennen.",

      "Vos réactions automatiques peuvent être très différentes : l’un recherche le rapprochement pendant que l’autre a besoin de silence ou de recul.":
        "Ihre automatischen Reaktionen können sehr unterschiedlich sein: Einer sucht Nähe, während der andere Ruhe oder Abstand braucht.",

      "Ne jugez pas la réaction émotionnelle de l’autre. Demandez plutôt ce qui l’aiderait à retrouver un sentiment de sécurité.":
        "Beurteilen Sie die emotionale Reaktion des anderen nicht. Fragen Sie stattdessen, was ihm helfen würde, wieder ein Gefühl von Sicherheit zu finden.",

      "Identité et sensibilité":
        "Identität und Sensibilität",

      "Soleil et Lune":
        "Sonne und Mond",

      "Le Soleil représente l’expression consciente, tandis que la Lune révèle le monde intérieur et les besoins émotionnels.":
        "Die Sonne steht für bewussten Ausdruck, während der Mond die innere Welt und emotionale Bedürfnisse zeigt.",

      "Cette connexion peut créer un sentiment profond de reconnaissance : l’un éclaire et encourage, tandis que l’autre nourrit, comprend et protège.":
        "Diese Verbindung kann ein tiefes Gefühl gegenseitiger Anerkennung schaffen: Einer ermutigt und bringt Licht, während der andere nährt, versteht und schützt.",

      "L’expression directe de l’un peut parfois heurter la sensibilité de l’autre, surtout lorsque les besoins affectifs ne sont pas clairement formulés.":
        "Der direkte Ausdruck des einen kann die Sensibilität des anderen manchmal verletzen, besonders wenn emotionale Bedürfnisse nicht klar ausgesprochen werden.",

      "Alternez les rôles : parfois il faut agir et encourager, parfois il faut simplement écouter et accueillir ce qui est ressenti.":
        "Wechseln Sie die Rollen: Manchmal braucht es Handeln und Ermutigung, manchmal genügt es, zuzuhören und Gefühle anzunehmen.",

      "Charme et reconnaissance":
        "Charme und Wertschätzung",

      "Soleil et Vénus":
        "Sonne und Venus",

      "Cette interaction décrit l’admiration, le plaisir d’être ensemble et la manière dont l’affection soutient l’identité.":
        "Diese Wechselwirkung beschreibt Bewunderung, die Freude am Zusammensein und die Art, wie Zuneigung die Identität unterstützt.",

      "L’admiration et le plaisir partagé peuvent renforcer la confiance du couple. Chacun peut aider l’autre à se sentir apprécié, désirable et valorisé.":
        "Bewunderung und gemeinsame Freude können das Vertrauen in der Beziehung stärken. Jeder kann dem anderen helfen, sich geschätzt, begehrt und wertvoll zu fühlen.",

      "Le besoin de plaire ou d’éviter les désaccords peut parfois masquer des différences importantes de valeurs, de goûts ou d’attentes.":
        "Der Wunsch zu gefallen oder Konflikte zu vermeiden kann wichtige Unterschiede in Werten, Vorlieben oder Erwartungen verdecken.",

      "Conservez la douceur, mais exprimez aussi vos préférences réelles. Une harmonie sincère vaut mieux qu’une paix obtenue par l’effacement.":
        "Bewahren Sie die Zärtlichkeit, äußern Sie jedoch auch Ihre wirklichen Vorlieben. Aufrichtige Harmonie ist wertvoller als Frieden durch Selbstverleugnung.",

      "Tendresse et attachement":
        "Zärtlichkeit und Bindung",

      "Lune et Vénus":
        "Mond und Venus",

      "Cette rencontre unit les besoins émotionnels de la Lune à la manière d’aimer, de séduire et de créer l’harmonie de Vénus.":
        "Diese Verbindung vereint die emotionalen Bedürfnisse des Mondes mit Venus' Art zu lieben, anzuziehen und Harmonie zu schaffen.",

      "La tendresse, les gestes simples et le plaisir de prendre soin l’un de l’autre peuvent devenir une grande source de stabilité affective.":
        "Zärtlichkeit, einfache Gesten und die Freude daran, füreinander zu sorgen, können zu einer wichtigen Quelle emotionaler Stabilität werden.",

      "L’un peut offrir de l’amour d’une façon qui ne répond pas exactement au besoin émotionnel de l’autre, malgré une intention sincère.":
        "Einer kann Liebe auf eine Weise zeigen, die trotz ehrlicher Absicht nicht genau dem emotionalen Bedürfnis des anderen entspricht.",

      "Demandez clairement quels gestes font réellement sentir aimé : présence, paroles, contact, aide concrète ou moments de qualité.":
        "Fragen Sie klar, welche Gesten tatsächlich das Gefühl vermitteln, geliebt zu werden: Präsenz, Worte, Berührung, praktische Hilfe oder gemeinsame Qualitätszeit.",

      "Émotion et désir":
        "Emotion und Verlangen",

      "Mars et Lune":
        "Mars und Mond",

      "Mars stimule l’action et le désir, tandis que la Lune réagit avec sensibilité, mémoire et instinct de protection.":
        "Mars stimuliert Handlung und Verlangen, während der Mond mit Sensibilität, Erinnerung und Schutzinstinkt reagiert.",

      "Cette interaction peut créer une forte énergie protectrice, une attraction instinctive et une capacité à agir rapidement pour défendre le lien.":
        "Diese Wechselwirkung kann starke Schutzenergie, instinktive Anziehung und die Fähigkeit schaffen, schnell für die Beziehung einzutreten.",

      "Les réactions impulsives peuvent toucher des zones très sensibles. Une parole rapide ou un geste brusque peut laisser une trace émotionnelle durable.":
        "Impulsive Reaktionen können sehr empfindliche Bereiche treffen. Ein vorschnelles Wort oder eine abrupte Geste kann nachhaltige emotionale Spuren hinterlassen.",

      "Lorsque l’émotion monte, ralentissez avant d’agir. La sécurité affective doit rester plus importante que le besoin d’avoir immédiatement raison.":
        "Wenn Emotionen steigen, verlangsamen Sie sich, bevor Sie handeln. Emotionale Sicherheit sollte wichtiger bleiben als das Bedürfnis, sofort recht zu haben.",

      "Votre dynamique":
        "Ihre Dynamik",

      "Aspect direct entre ces énergies":
        "Direkter Aspekt zwischen diesen Energien",

      "Votre potentiel":
        "Ihr Potenzial",

      "Votre point de vigilance":
        "Ihr Aufmerksamkeitspunkt",

      "Votre clé relationnelle":
        "Ihr Beziehungsschlüssel",

      "Lecture d’ensemble":
        "Gesamtbetrachtung",

      "Synthèse des interactions planétaires":
        "Zusammenfassung der planetaren Wechselwirkungen",

      "Les principales connexions entre vos planètes personnelles décrivent la manière dont identité, émotion, affection et désir forment votre dynamique de couple.":
        "Die wichtigsten Verbindungen zwischen Ihren persönlichen Planeten zeigen, wie Identität, Emotion, Zuneigung und Verlangen Ihre Beziehungsdynamik formen.",

      "Ce que révèle l’ensemble":
        "Was das Gesamtbild zeigt",

      "Aucune connexion ne définit seule votre relation. La compatibilité se construit dans l’équilibre entre identité, sécurité émotionnelle, affection, communication et désir. Vos différences ne représentent pas nécessairement des obstacles : elles indiquent souvent les endroits précis où le couple apprend à mieux se connaître et à évoluer.":
        "Keine einzelne Verbindung definiert Ihre Beziehung. Kompatibilität entsteht aus dem Gleichgewicht zwischen Identität, emotionaler Sicherheit, Zuneigung, Kommunikation und Verlangen. Ihre Unterschiede sind nicht zwangsläufig Hindernisse: Sie zeigen oft genau die Bereiche, in denen die Beziehung lernt, sich besser zu verstehen und weiterzuentwickeln.",
    },

    signs: {
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
      "Non précisé": "Nicht angegeben",
    },

    planets: {
      Soleil: "Sonne",
      Lune: "Mond",
      Vénus: "Venus",
      Mars: "Mars",
    },

    aspects: {
      Conjonction: "Konjunktion",
      Opposition: "Opposition",
      Trigone: "Trigon",
      Carré: "Quadrat",
      Sextile: "Sextil",
      Quinconce: "Quinkunx",
    },

    elements: {
      Feu: "Feuer",
      Terre: "Erde",
      Air: "Luft",
      Eau: "Wasser",
      "Non précisé": "Nicht angegeben",
    },

    inWord: "in",
    elementWord: "Element",
    orbWord: "Orb",

    aspectFallbacks: {
      conjunction: "Diese Konjunktion intensiviert das Zusammentreffen der beiden planetaren Energien. Sie kann große Nähe schaffen und zugleich Reaktionen und Bedürfnisse verstärken.",
      trine: "Dieses Trigon fördert einen natürlichen Fluss zwischen den beiden Energien. Beide können einander mit mehr Leichtigkeit, Verständnis und Vertrauen unterstützen.",
      sextile: "Dieses Sextil schafft eine Möglichkeit für Zusammenarbeit und gegenseitige Bereicherung. Sein Potenzial entfaltet sich, wenn beide es bewusst nutzen.",
      square: "Dieses Quadrat erzeugt eine dynamische Spannung zwischen den beiden Energien. Es kann defensive Reaktionen auslösen, aber auch die Beziehung dazu anregen, sich weiterzuentwickeln und neue Lösungen zu finden.",
      opposition: "Diese Opposition bringt zwei gegensätzliche Bedürfnisse oder Funktionsweisen gegenüber. Gleichgewicht entsteht, wenn beide den Wert der jeweils anderen Sichtweise anerkennen.",
      quincunx: "Dieses Quinkunx erfordert regelmäßige Anpassungen. Die beiden Energien funktionieren nicht von selbst auf dieselbe Weise, können aber lernen, besser zusammenzuarbeiten.",
    },

    connection: {
      missing:
        "Einige Planetenpositionen sind nicht verfügbar. Die Deutung bleibt daher allgemein und kann präzisiert werden, sobald beide vollständigen Geburtshoroskope vorliegen.",

      sameSignStart:
        "Ihre beiden Energien begegnen sich im Zeichen {sign1}. ",

      sameSignMiddle:
        "Diese Ähnlichkeit schafft schnelles Verständnis und eine gemeinsame Art, diesen Bereich der Beziehung anzugehen. Sie kann jedoch auch dieselben Bedürfnisse, Reaktionen und blinden Flecken verstärken.",

      sameElementStart:
        "Die Zeichen {sign1} und {sign2} gehören beide zum Element {element1}. ",

      sameElementMiddle:
        "Ihre Funktionsweisen beruhen daher auf einer vergleichbaren Sensibilität oder Logik. Diese Nähe erleichtert Harmonie, solange Sie nicht gemeinsam dieselben Übertreibungen verstärken.",

      complementaryStart:
        "Die Zeichen {sign1} und {sign2} gehören zu den Elementen {element1} und {element2}, die sich auf natürliche Weise unterstützen können. ",

      complementaryMiddle:
        "Einer bringt Bewegung, Inspiration oder Initiative, während der andere Tiefe, Stabilität oder Verständnis hinzufügt. Ihre Unterschiede können zu echter Ergänzung werden.",

      differentStart:
        "Die Zeichen {sign1} und {sign2} funktionieren über unterschiedliche Elemente, {element1} und {element2}. ",

      differentMiddle:
        "Ihre Reaktionen und Prioritäten sind daher nicht immer sofort verständlich. Dieser Unterschied wird bereichernd, wenn keiner mehr erwartet, dass der andere auf genau dieselbe Weise fühlt, entscheidet oder liebt.",
    },

    summaryMeets:
      "trifft auf",
  },

  it: {
    text: {
      "Non précisé":
        "Non specificato",

      "Première personne":
        "Prima persona",

      "Deuxième personne":
        "Seconda persona",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Rapporto di sinastria",

      "Identité et direction":
        "Identità e direzione",

      "Soleil et Soleil":
        "Sole e Sole",

      "Cette rencontre révèle comment vos identités, vos ambitions et vos manières d’occuper l’espace peuvent s’accorder.":
        "Questo incontro rivela come le vostre identità, ambizioni e modalità di espressione possano armonizzarsi.",

      "Votre couple peut développer une direction claire lorsque chacun reconnaît la valeur, les talents et les objectifs personnels de l’autre.":
        "La vostra relazione può sviluppare una direzione chiara quando ciascuno riconosce il valore, i talenti e gli obiettivi personali dell'altro.",

      "Une rivalité peut apparaître si chacun souhaite imposer son rythme, recevoir toute la reconnaissance ou décider seul de la direction commune.":
        "Può nascere rivalità se ciascuno vuole imporre il proprio ritmo, ricevere tutto il riconoscimento o decidere da solo la direzione comune.",

      "Célébrez régulièrement les réussites individuelles. Deux identités respectées deviennent une force commune plutôt qu’une compétition.":
        "Celebrate regolarmente i successi individuali. Due identità rispettate diventano una forza comune invece di una competizione.",

      "Besoins émotionnels":
        "Bisogni emotivi",

      "Lune et Lune":
        "Luna e Luna",

      "Cette comparaison montre comment vos besoins de sécurité, vos réactions instinctives et vos habitudes affectives se rencontrent.":
        "Questo confronto mostra come si incontrano i vostri bisogni di sicurezza, le reazioni istintive e le abitudini emotive.",

      "Vous pouvez construire un véritable refuge émotionnel lorsque vous apprenez à reconnaître les signes subtils de fatigue, de peur ou de besoin de réconfort.":
        "Potete costruire un vero rifugio emotivo quando imparate a riconoscere i segnali sottili di stanchezza, paura o bisogno di conforto.",

      "Vos réactions automatiques peuvent être très différentes : l’un recherche le rapprochement pendant que l’autre a besoin de silence ou de recul.":
        "Le vostre reazioni automatiche possono essere molto diverse: uno cerca vicinanza mentre l'altro ha bisogno di silenzio o distanza.",

      "Ne jugez pas la réaction émotionnelle de l’autre. Demandez plutôt ce qui l’aiderait à retrouver un sentiment de sécurité.":
        "Non giudicate la reazione emotiva dell'altro. Chiedete invece cosa potrebbe aiutarlo a ritrovare un senso di sicurezza.",

      "Identité et sensibilité":
        "Identità e sensibilità",

      "Soleil et Lune":
        "Sole e Luna",

      "Le Soleil représente l’expression consciente, tandis que la Lune révèle le monde intérieur et les besoins émotionnels.":
        "Il Sole rappresenta l'espressione consapevole, mentre la Luna rivela il mondo interiore e i bisogni emotivi.",

      "Cette connexion peut créer un sentiment profond de reconnaissance : l’un éclaire et encourage, tandis que l’autre nourrit, comprend et protège.":
        "Questa connessione può creare un profondo senso di riconoscimento: uno illumina e incoraggia, mentre l'altro nutre, comprende e protegge.",

      "L’expression directe de l’un peut parfois heurter la sensibilité de l’autre, surtout lorsque les besoins affectifs ne sont pas clairement formulés.":
        "L'espressione diretta di uno può talvolta ferire la sensibilità dell'altro, soprattutto quando i bisogni affettivi non sono espressi chiaramente.",

      "Alternez les rôles : parfois il faut agir et encourager, parfois il faut simplement écouter et accueillir ce qui est ressenti.":
        "Alternate i ruoli: a volte è necessario agire e incoraggiare, altre volte basta ascoltare e accogliere ciò che viene sentito.",

      "Charme et reconnaissance":
        "Fascino e riconoscimento",

      "Soleil et Vénus":
        "Sole e Venere",

      "Cette interaction décrit l’admiration, le plaisir d’être ensemble et la manière dont l’affection soutient l’identité.":
        "Questa interazione descrive l'ammirazione, il piacere di stare insieme e il modo in cui l'affetto sostiene l'identità.",

      "L’admiration et le plaisir partagé peuvent renforcer la confiance du couple. Chacun peut aider l’autre à se sentir apprécié, désirable et valorisé.":
        "L'ammirazione e il piacere condiviso possono rafforzare la fiducia della relazione. Ciascuno può aiutare l'altro a sentirsi apprezzato, desiderabile e valorizzato.",

      "Le besoin de plaire ou d’éviter les désaccords peut parfois masquer des différences importantes de valeurs, de goûts ou d’attentes.":
        "Il bisogno di piacere o evitare disaccordi può talvolta nascondere importanti differenze di valori, gusti o aspettative.",

      "Conservez la douceur, mais exprimez aussi vos préférences réelles. Une harmonie sincère vaut mieux qu’une paix obtenue par l’effacement.":
        "Conservate la dolcezza, ma esprimete anche le vostre reali preferenze. Un'armonia sincera vale più di una pace ottenuta annullandosi.",

      "Tendresse et attachement":
        "Tenerezza e attaccamento",

      "Lune et Vénus":
        "Luna e Venere",

      "Cette rencontre unit les besoins émotionnels de la Lune à la manière d’aimer, de séduire et de créer l’harmonie de Vénus.":
        "Questo incontro unisce i bisogni emotivi della Luna al modo di amare, sedurre e creare armonia di Venere.",

      "La tendresse, les gestes simples et le plaisir de prendre soin l’un de l’autre peuvent devenir une grande source de stabilité affective.":
        "La tenerezza, i gesti semplici e il piacere di prendersi cura l'uno dell'altro possono diventare una grande fonte di stabilità affettiva.",

      "L’un peut offrir de l’amour d’une façon qui ne répond pas exactement au besoin émotionnel de l’autre, malgré une intention sincère.":
        "Uno può offrire amore in un modo che non risponde esattamente al bisogno emotivo dell'altro, nonostante un'intenzione sincera.",

      "Demandez clairement quels gestes font réellement sentir aimé : présence, paroles, contact, aide concrète ou moments de qualité.":
        "Chiedete chiaramente quali gesti fanno davvero sentire amati: presenza, parole, contatto, aiuto concreto o tempo di qualità.",

      "Émotion et désir":
        "Emozione e desiderio",

      "Mars et Lune":
        "Marte e Luna",

      "Mars stimule l’action et le désir, tandis que la Lune réagit avec sensibilité, mémoire et instinct de protection.":
        "Marte stimola l'azione e il desiderio, mentre la Luna reagisce con sensibilità, memoria e istinto protettivo.",

      "Cette interaction peut créer une forte énergie protectrice, une attraction instinctive et une capacité à agir rapidement pour défendre le lien.":
        "Questa interazione può creare una forte energia protettiva, attrazione istintiva e capacità di agire rapidamente per difendere il legame.",

      "Les réactions impulsives peuvent toucher des zones très sensibles. Une parole rapide ou un geste brusque peut laisser une trace émotionnelle durable.":
        "Le reazioni impulsive possono toccare aree molto sensibili. Una parola affrettata o un gesto brusco può lasciare una traccia emotiva duratura.",

      "Lorsque l’émotion monte, ralentissez avant d’agir. La sécurité affective doit rester plus importante que le besoin d’avoir immédiatement raison.":
        "Quando l'emozione aumenta, rallentate prima di agire. La sicurezza affettiva deve rimanere più importante del bisogno di avere immediatamente ragione.",

      "Votre dynamique":
        "La vostra dinamica",

      "Aspect direct entre ces énergies":
        "Aspetto diretto tra queste energie",

      "Votre potentiel":
        "Il vostro potenziale",

      "Votre point de vigilance":
        "Il vostro punto di attenzione",

      "Votre clé relationnelle":
        "La vostra chiave relazionale",

      "Lecture d’ensemble":
        "Lettura complessiva",

      "Synthèse des interactions planétaires":
        "Sintesi delle interazioni planetarie",

      "Les principales connexions entre vos planètes personnelles décrivent la manière dont identité, émotion, affection et désir forment votre dynamique de couple.":
        "Le principali connessioni tra i vostri pianeti personali descrivono come identità, emozione, affetto e desiderio formano la dinamica della vostra relazione.",

      "Ce que révèle l’ensemble":
        "Ciò che rivela l'insieme",

      "Aucune connexion ne définit seule votre relation. La compatibilité se construit dans l’équilibre entre identité, sécurité émotionnelle, affection, communication et désir. Vos différences ne représentent pas nécessairement des obstacles : elles indiquent souvent les endroits précis où le couple apprend à mieux se connaître et à évoluer.":
        "Nessuna connessione definisce da sola la vostra relazione. La compatibilità si costruisce nell'equilibrio tra identità, sicurezza emotiva, affetto, comunicazione e desiderio. Le vostre differenze non rappresentano necessariamente ostacoli: spesso indicano i punti precisi in cui la relazione impara a conoscersi meglio e a evolvere.",
    },

    signs: {
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
      "Non précisé": "Non specificato",
    },

    planets: {
      Soleil: "Sole",
      Lune: "Luna",
      Vénus: "Venere",
      Mars: "Marte",
    },

    aspects: {
      Conjonction: "Congiunzione",
      Opposition: "Opposizione",
      Trigone: "Trigono",
      Carré: "Quadratura",
      Sextile: "Sestile",
      Quinconce: "Quinconce",
    },

    elements: {
      Feu: "Fuoco",
      Terre: "Terra",
      Air: "Aria",
      Eau: "Acqua",
      "Non précisé": "Non specificato",
    },

    inWord: "in",
    elementWord: "Elemento",
    orbWord: "orbita",

    aspectFallbacks: {
      conjunction: "Questa congiunzione intensifica l'incontro delle due energie planetarie. Può creare una forte vicinanza e allo stesso tempo amplificare reazioni e bisogni.",
      trine: "Questo trigono favorisce un flusso naturale tra le due energie. Ciascuno può sostenere l'altro con maggiore facilità, comprensione e fiducia.",
      sextile: "Questo sestile crea un'opportunità di cooperazione e arricchimento reciproco. Il suo potenziale si sviluppa quando entrambi scelgono consapevolmente di utilizzarlo.",
      square: "Questa quadratura crea una tensione dinamica tra le due energie. Può provocare reazioni difensive, ma anche spingere la relazione a evolvere e trovare nuove soluzioni.",
      opposition: "Questa opposizione mette di fronte due bisogni o modi di funzionare contrastanti. L'equilibrio si costruisce quando ciascuno riconosce il valore del punto di vista opposto.",
      quincunx: "Questo quinconce richiede adattamenti regolari. Le due energie non funzionano naturalmente nello stesso modo, ma possono imparare a collaborare meglio.",
    },

    connection: {
      missing:
        "Alcune posizioni planetarie non sono disponibili. L'interpretazione rimane quindi generale e potrà essere precisata quando saranno disponibili entrambi i temi natali completi.",

      sameSignStart:
        "Le vostre due energie si incontrano nel segno {sign1}. ",

      sameSignMiddle:
        "Questa somiglianza crea una comprensione rapida e un modo comune di affrontare quest'area della relazione. Può anche amplificare gli stessi bisogni, reazioni e punti ciechi.",

      sameElementStart:
        "I segni {sign1} e {sign2} appartengono entrambi all'elemento {element1}. ",

      sameElementMiddle:
        "I vostri modi di funzionare si basano quindi su una sensibilità o logica simile. Questa vicinanza facilita l'armonia, purché non rafforziate insieme gli stessi eccessi.",

      complementaryStart:
        "I segni {sign1} e {sign2} appartengono agli elementi {element1} e {element2}, che possono sostenersi naturalmente. ",

      complementaryMiddle:
        "Uno porta movimento, ispirazione o iniziativa, mentre l'altro aggiunge profondità, stabilità o comprensione. La vostra differenza può diventare una vera complementarità.",

      differentStart:
        "I segni {sign1} e {sign2} funzionano attraverso elementi diversi, {element1} e {element2}. ",

      differentMiddle:
        "Le vostre reazioni e priorità quindi non sono sempre immediatamente facili da comprendere. Questa differenza diventa arricchente quando ciascuno smette di aspettarsi che l'altro senta, decida o ami esattamente nello stesso modo.",
    },

    summaryMeets:
      "incontra",
  },

  pt: {
    text: {
      "Non précisé":
        "Não especificado",

      "Première personne":
        "Primeira pessoa",

      "Deuxième personne":
        "Segunda pessoa",

      "Luna Astralis • Rapport de synastrie":
        "Luna Astralis • Relatório de sinastria",

      "Identité et direction":
        "Identidade e direção",

      "Soleil et Soleil":
        "Sol e Sol",

      "Cette rencontre révèle comment vos identités, vos ambitions et vos manières d’occuper l’espace peuvent s’accorder.":
        "Este encontro revela como as suas identidades, ambições e formas de expressão podem harmonizar-se.",

      "Votre couple peut développer une direction claire lorsque chacun reconnaît la valeur, les talents et les objectifs personnels de l’autre.":
        "A sua relação pode desenvolver uma direção clara quando cada pessoa reconhece o valor, os talentos e os objetivos pessoais da outra.",

      "Une rivalité peut apparaître si chacun souhaite imposer son rythme, recevoir toute la reconnaissance ou décider seul de la direction commune.":
        "Pode surgir rivalidade se cada pessoa quiser impor o seu ritmo, receber todo o reconhecimento ou decidir sozinha a direção comum.",

      "Célébrez régulièrement les réussites individuelles. Deux identités respectées deviennent une force commune plutôt qu’une compétition.":
        "Celebrem regularmente as conquistas individuais. Duas identidades respeitadas tornam-se uma força comum em vez de uma competição.",

      "Besoins émotionnels":
        "Necessidades emocionais",

      "Lune et Lune":
        "Lua e Lua",

      "Cette comparaison montre comment vos besoins de sécurité, vos réactions instinctives et vos habitudes affectives se rencontrent.":
        "Esta comparação mostra como as suas necessidades de segurança, reações instintivas e hábitos afetivos se encontram.",

      "Vous pouvez construire un véritable refuge émotionnel lorsque vous apprenez à reconnaître les signes subtils de fatigue, de peur ou de besoin de réconfort.":
        "Podem construir um verdadeiro refúgio emocional quando aprendem a reconhecer sinais subtis de cansaço, medo ou necessidade de conforto.",

      "Vos réactions automatiques peuvent être très différentes : l’un recherche le rapprochement pendant que l’autre a besoin de silence ou de recul.":
        "As suas reações automáticas podem ser muito diferentes: uma pessoa procura proximidade enquanto a outra precisa de silêncio ou distância.",

      "Ne jugez pas la réaction émotionnelle de l’autre. Demandez plutôt ce qui l’aiderait à retrouver un sentiment de sécurité.":
        "Não julguem a reação emocional da outra pessoa. Perguntem antes o que a ajudaria a recuperar um sentimento de segurança.",

      "Identité et sensibilité":
        "Identidade e sensibilidade",

      "Soleil et Lune":
        "Sol e Lua",

      "Le Soleil représente l’expression consciente, tandis que la Lune révèle le monde intérieur et les besoins émotionnels.":
        "O Sol representa a expressão consciente, enquanto a Lua revela o mundo interior e as necessidades emocionais.",

      "Cette connexion peut créer un sentiment profond de reconnaissance : l’un éclaire et encourage, tandis que l’autre nourrit, comprend et protège.":
        "Esta conexão pode criar um profundo sentimento de reconhecimento: uma pessoa ilumina e encoraja, enquanto a outra nutre, compreende e protege.",

      "L’expression directe de l’un peut parfois heurter la sensibilité de l’autre, surtout lorsque les besoins affectifs ne sont pas clairement formulés.":
        "A expressão direta de uma pessoa pode por vezes ferir a sensibilidade da outra, sobretudo quando as necessidades afetivas não são expressas claramente.",

      "Alternez les rôles : parfois il faut agir et encourager, parfois il faut simplement écouter et accueillir ce qui est ressenti.":
        "Alternem os papéis: por vezes é necessário agir e encorajar, outras vezes basta ouvir e acolher aquilo que está a ser sentido.",

      "Charme et reconnaissance":
        "Charme e reconhecimento",

      "Soleil et Vénus":
        "Sol e Vênus",

      "Cette interaction décrit l’admiration, le plaisir d’être ensemble et la manière dont l’affection soutient l’identité.":
        "Esta interação descreve a admiração, o prazer de estarem juntos e a forma como o afeto apoia a identidade.",

      "L’admiration et le plaisir partagé peuvent renforcer la confiance du couple. Chacun peut aider l’autre à se sentir apprécié, désirable et valorisé.":
        "A admiração e o prazer partilhado podem reforçar a confiança da relação. Cada pessoa pode ajudar a outra a sentir-se apreciada, desejável e valorizada.",

      "Le besoin de plaire ou d’éviter les désaccords peut parfois masquer des différences importantes de valeurs, de goûts ou d’attentes.":
        "A necessidade de agradar ou evitar desacordos pode esconder diferenças importantes de valores, gostos ou expectativas.",

      "Conservez la douceur, mais exprimez aussi vos préférences réelles. Une harmonie sincère vaut mieux qu’une paix obtenue par l’effacement.":
        "Conservem a ternura, mas expressem também as suas verdadeiras preferências. Uma harmonia sincera vale mais do que uma paz obtida através da anulação pessoal.",

      "Tendresse et attachement":
        "Ternura e apego",

      "Lune et Vénus":
        "Lua e Vênus",

      "Cette rencontre unit les besoins émotionnels de la Lune à la manière d’aimer, de séduire et de créer l’harmonie de Vénus.":
        "Este encontro une as necessidades emocionais da Lua à forma de amar, seduzir e criar harmonia de Vênus.",

      "La tendresse, les gestes simples et le plaisir de prendre soin l’un de l’autre peuvent devenir une grande source de stabilité affective.":
        "A ternura, os gestos simples e o prazer de cuidar um do outro podem tornar-se uma grande fonte de estabilidade afetiva.",

      "L’un peut offrir de l’amour d’une façon qui ne répond pas exactement au besoin émotionnel de l’autre, malgré une intention sincère.":
        "Uma pessoa pode oferecer amor de uma forma que não corresponde exatamente à necessidade emocional da outra, apesar de uma intenção sincera.",

      "Demandez clairement quels gestes font réellement sentir aimé : présence, paroles, contact, aide concrète ou moments de qualité.":
        "Perguntem claramente quais gestos fazem cada pessoa sentir-se verdadeiramente amada: presença, palavras, contacto, ajuda concreta ou tempo de qualidade.",

      "Émotion et désir":
        "Emoção e desejo",

      "Mars et Lune":
        "Marte e Lua",

      "Mars stimule l’action et le désir, tandis que la Lune réagit avec sensibilité, mémoire et instinct de protection.":
        "Marte estimula a ação e o desejo, enquanto a Lua reage com sensibilidade, memória e instinto de proteção.",

      "Cette interaction peut créer une forte énergie protectrice, une attraction instinctive et une capacité à agir rapidement pour défendre le lien.":
        "Esta interação pode criar uma forte energia protetora, atração instintiva e capacidade de agir rapidamente para defender a ligação.",

      "Les réactions impulsives peuvent toucher des zones très sensibles. Une parole rapide ou un geste brusque peut laisser une trace émotionnelle durable.":
        "As reações impulsivas podem atingir áreas muito sensíveis. Uma palavra precipitada ou um gesto brusco pode deixar uma marca emocional duradoura.",

      "Lorsque l’émotion monte, ralentissez avant d’agir. La sécurité affective doit rester plus importante que le besoin d’avoir immédiatement raison.":
        "Quando a emoção aumentar, abrande antes de agir. A segurança afetiva deve continuar a ser mais importante do que a necessidade de ter imediatamente razão.",

      "Votre dynamique":
        "A sua dinâmica",

      "Aspect direct entre ces énergies":
        "Aspeto direto entre estas energias",

      "Votre potentiel":
        "O seu potencial",

      "Votre point de vigilance":
        "O seu ponto de atenção",

      "Votre clé relationnelle":
        "A sua chave relacional",

      "Lecture d’ensemble":
        "Leitura geral",

      "Synthèse des interactions planétaires":
        "Síntese das interações planetárias",

      "Les principales connexions entre vos planètes personnelles décrivent la manière dont identité, émotion, affection et désir forment votre dynamique de couple.":
        "As principais conexões entre os seus planetas pessoais descrevem como identidade, emoção, afeto e desejo formam a dinâmica da sua relação.",

      "Ce que révèle l’ensemble":
        "O que o conjunto revela",

      "Aucune connexion ne définit seule votre relation. La compatibilité se construit dans l’équilibre entre identité, sécurité émotionnelle, affection, communication et désir. Vos différences ne représentent pas nécessairement des obstacles : elles indiquent souvent les endroits précis où le couple apprend à mieux se connaître et à évoluer.":
        "Nenhuma conexão define sozinha a sua relação. A compatibilidade constrói-se no equilíbrio entre identidade, segurança emocional, afeto, comunicação e desejo. As suas diferenças não representam necessariamente obstáculos: muitas vezes indicam os pontos exatos onde a relação aprende a conhecer-se melhor e a evoluir.",
    },

    signs: {
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
      "Non précisé": "Não especificado",
    },

    planets: {
      Soleil: "Sol",
      Lune: "Lua",
      Vénus: "Vênus",
      Mars: "Marte",
    },

    aspects: {
      Conjonction: "Conjunção",
      Opposition: "Oposição",
      Trigone: "Trígono",
      Carré: "Quadratura",
      Sextile: "Sextil",
      Quinconce: "Quincúncio",
    },

    elements: {
      Feu: "Fogo",
      Terre: "Terra",
      Air: "Ar",
      Eau: "Água",
      "Non précisé": "Não especificado",
    },

    inWord: "em",
    elementWord: "Elemento",
    orbWord: "orbe",

    aspectFallbacks: {
      conjunction: "Esta conjunção intensifica o encontro das duas energias planetárias. Pode criar uma grande proximidade e também amplificar as suas reações e necessidades.",
      trine: "Este trígono favorece um fluxo natural entre as duas energias. Cada pessoa pode apoiar a outra com maior fluidez, compreensão e confiança.",
      sextile: "Este sextil cria uma oportunidade de cooperação e enriquecimento mútuo. O seu potencial desenvolve-se quando ambos escolhem conscientemente utilizá-lo.",
      square: "Esta quadratura cria uma tensão dinâmica entre as duas energias. Pode provocar reações defensivas, mas também incentivar a relação a evoluir e encontrar novas soluções.",
      opposition: "Esta oposição coloca frente a frente duas necessidades ou formas de funcionamento contrastantes. O equilíbrio constrói-se quando cada pessoa reconhece o valor do ponto de vista oposto.",
      quincunx: "Este quincúncio exige ajustes regulares. As duas energias não funcionam naturalmente da mesma forma, mas podem aprender a colaborar melhor.",
    },

    connection: {
      missing:
        "Algumas posições planetárias não estão disponíveis. A interpretação permanece, portanto, geral e poderá ser aprofundada quando ambos os mapas natais completos estiverem disponíveis.",

      sameSignStart:
        "As suas duas energias encontram-se no signo {sign1}. ",

      sameSignMiddle:
        "Esta semelhança cria uma compreensão rápida e uma forma comum de abordar esta área da relação. Também pode amplificar as mesmas necessidades, reações e pontos cegos.",

      sameElementStart:
        "Os signos {sign1} e {sign2} pertencem ambos ao elemento {element1}. ",

      sameElementMiddle:
        "As suas formas de funcionamento baseiam-se, portanto, numa sensibilidade ou lógica semelhante. Esta proximidade facilita a harmonia, desde que não reforcem juntos os mesmos excessos.",

      complementaryStart:
        "Os signos {sign1} e {sign2} pertencem aos elementos {element1} e {element2}, que podem apoiar-se naturalmente. ",

      complementaryMiddle:
        "Uma pessoa traz movimento, inspiração ou iniciativa, enquanto a outra acrescenta profundidade, estabilidade ou compreensão. A diferença pode tornar-se uma verdadeira complementaridade.",

      differentStart:
        "Os signos {sign1} e {sign2} funcionam através de elementos diferentes, {element1} e {element2}. ",

      differentMiddle:
        "As suas reações e prioridades podem, portanto, não ser imediatamente fáceis de compreender. Esta diferença torna-se enriquecedora quando cada pessoa deixa de esperar que a outra sinta, decida ou ame exatamente da mesma forma.",
    },

    summaryMeets:
      "encontra",
  },
};

type Replacement = {
  start: number;
  end: number;
  value: string;
};

function normalizeVisibleText(
  value: string,
): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (a, b) =>
        b.start - a.start,
    );

  let output = source;

  for (
    const replacement
    of sorted
  ) {
    output =
      output.slice(
        0,
        replacement.start,
      ) +
      replacement.value +
      output.slice(
        replacement.end,
      );
  }

  return output;
}

function localizeSafeLiterals(
  source: string,
  translations: Record<
    string,
    string
  >,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityPlanetConnections.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  const technicalValues =
    new Set([
      "Sun",
      "Moon",
      "Venus",
      "Mars",

      "sun",
      "moon",
      "soleil",
      "lune",
      "venus",
      "mars",

      "Feu",
      "Terre",
      "Air",
      "Eau",

      "belier",
      "lion",
      "sagittaire",
      "taureau",
      "vierge",
      "capricorne",
      "gemeaux",
      "balance",
      "verseau",
      "cancer",
      "scorpion",
      "poissons",
    ]);

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isJsxText(node)
    ) {
      const original =
        normalizeVisibleText(
          node.getText(
            sourceFile,
          ),
        );

      const translated =
        translations[original];

      if (
        translated &&
        translated !== original
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              translated,
            )}}`,
        });
      }
    }

    if (
      ts.isStringLiteral(node)
    ) {
      /*
       * Les identifiants techniques
       * des planètes doivent rester
       * exactement comme dans le TSX.
       */
      if (
        technicalValues.has(
          node.text,
        )
      ) {
        ts.forEachChild(
          node,
          visit,
        );

        return;
      }

      if (
        ts.isPropertyAssignment(
          node.parent,
        )
      ) {
        const propertyName =
          node.parent.name.getText(
            sourceFile,
          );

        if (
          propertyName === "planet1" ||
          propertyName === "planet2" ||
          propertyName === "type"
        ) {
          ts.forEachChild(
            node,
            visit,
          );

          return;
        }
      }

      const original =
        normalizeVisibleText(
          node.text,
        );

      const translated =
        translations[original];

      if (
        translated &&
        translated !== original
      ) {
        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            JSON.stringify(
              translated,
            ),
        });
      }
    }

    ts.forEachChild(
      node,
      visit,
    );
  };

  visit(sourceFile);

  return applyReplacements(
    source,
    replacements,
  );
}

function buildHelpers(
  data: LocaleData,
): string {
  return `
const __CONNECTION_TEXT =
  ${JSON.stringify(
    data.text,
    null,
    2,
  )} as Record<string, string>;

const __CONNECTION_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __CONNECTION_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __CONNECTION_ASPECTS =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __CONNECTION_ELEMENTS =
  ${JSON.stringify(
    data.elements,
    null,
    2,
  )} as Record<string, string>;

const __CONNECTION_IN_WORD =
  ${JSON.stringify(
    data.inWord,
  )};

const __CONNECTION_ELEMENT_WORD =
  ${JSON.stringify(
    data.elementWord,
  )};

const __CONNECTION_ORB_WORD =
  ${JSON.stringify(
    data.orbWord,
  )};

const __CONNECTION_ASPECT_FALLBACKS =
  ${JSON.stringify(
    data.aspectFallbacks,
    null,
    2,
  )} as Record<string, string>;

const __CONNECTION_DYNAMIC =
  ${JSON.stringify(
    data.connection,
    null,
    2,
  )};

const __CONNECTION_SUMMARY_MEETS =
  ${JSON.stringify(
    data.summaryMeets,
  )};

function localizeConnectionText(
  value: string,
): string {
  return (
    __CONNECTION_TEXT[value] ??
    value
  );
}

function localizeConnectionSign(
  value: string,
): string {
  return (
    __CONNECTION_SIGNS[value] ??
    value
  );
}

function localizeConnectionPlanet(
  value: string,
): string {
  return (
    __CONNECTION_PLANETS[value] ??
    value
  );
}

function localizeConnectionAspect(
  value: string,
): string {
  return (
    __CONNECTION_ASPECTS[value] ??
    value
  );
}

function getLocalizedConnectionAspectInterpretation(
  planet1: string,
  type: CompatibilityAspect["type"],
  planet2: string,
): string {
  const original =
    getCompatibilityAspectInterpretation(
      planet1,
      type,
      planet2,
    );

  const exactTranslation =
    localizeConnectionText(original);

  if (exactTranslation !== original) {
    return exactTranslation;
  }

  return (
    __CONNECTION_ASPECT_FALLBACKS[type] ??
    original
  );
}

function localizeConnectionElement(
  value: string,
): string {
  return (
    __CONNECTION_ELEMENTS[value] ??
    value
  );
}

function buildLocalizedConnectionInterpretation(
  definition: ConnectionDefinition,
  sign1: string,
  sign2: string,
): string {
  if (
    sign1 === "Non précisé" ||
    sign2 === "Non précisé"
  ) {
    return __CONNECTION_DYNAMIC.missing;
  }

  const normalized1 =
    normalizeValue(sign1);

  const normalized2 =
    normalizeValue(sign2);

  const element1 =
    getElement(sign1);

  const element2 =
    getElement(sign2);

  const displaySign1 =
    localizeConnectionSign(
      sign1,
    );

  const displaySign2 =
    localizeConnectionSign(
      sign2,
    );

  const displayElement1 =
    localizeConnectionElement(
      element1,
    );

  const displayElement2 =
    localizeConnectionElement(
      element2,
    );

  if (
    normalized1 === normalized2
  ) {
    return (
      __CONNECTION_DYNAMIC
        .sameSignStart
        .replace(
          "{sign1}",
          displaySign1,
        ) +
      __CONNECTION_DYNAMIC
        .sameSignMiddle
    );
  }

  if (
    element1 === element2
  ) {
    return (
      __CONNECTION_DYNAMIC
        .sameElementStart
        .replace(
          "{sign1}",
          displaySign1,
        )
        .replace(
          "{sign2}",
          displaySign2,
        )
        .replace(
          "{element1}",
          displayElement1,
        ) +
      __CONNECTION_DYNAMIC
        .sameElementMiddle
    );
  }

  const complementary =
    (
      element1 === "Feu" &&
      element2 === "Air"
    ) ||
    (
      element1 === "Air" &&
      element2 === "Feu"
    ) ||
    (
      element1 === "Terre" &&
      element2 === "Eau"
    ) ||
    (
      element1 === "Eau" &&
      element2 === "Terre"
    );

  if (complementary) {
    return (
      __CONNECTION_DYNAMIC
        .complementaryStart
        .replace(
          "{sign1}",
          displaySign1,
        )
        .replace(
          "{sign2}",
          displaySign2,
        )
        .replace(
          "{element1}",
          displayElement1,
        )
        .replace(
          "{element2}",
          displayElement2,
        ) +
      __CONNECTION_DYNAMIC
        .complementaryMiddle
    );
  }

  return (
    __CONNECTION_DYNAMIC
      .differentStart
      .replace(
        "{sign1}",
        displaySign1,
      )
      .replace(
        "{sign2}",
        displaySign2,
      )
      .replace(
        "{element1}",
        displayElement1,
      )
      .replace(
        "{element2}",
        displayElement2,
      ) +
    __CONNECTION_DYNAMIC
      .differentMiddle
  );
}

function buildLocalizedConnectionSummary(
  definition: ConnectionDefinition,
  person1: SafeCompatibilityPerson,
  person2: SafeCompatibilityPerson,
): string {
  const sign1 =
    getPlanetSign(
      person1,
      definition.planet1,
    );

  const sign2 =
    getPlanetSign(
      person2,
      definition.planet2,
    );

  const planet1 =
    localizeConnectionPlanet(
      translateCompatibilityPlanet(
        definition.planet1,
      ),
    );

  const planet2 =
    localizeConnectionPlanet(
      translateCompatibilityPlanet(
        definition.planet2,
      ),
    );

  return (
    \`\${planet1} \${__CONNECTION_IN_WORD} \${localizeConnectionSign(
      sign1,
    )} \${__CONNECTION_SUMMARY_MEETS} \${planet2} \${__CONNECTION_IN_WORD} \${localizeConnectionSign(
      sign2,
    )}. \` +
    buildLocalizedConnectionInterpretation(
      definition,
      sign1,
      sign2,
    )
  );
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
): string {
  const marker =
    "function getPersonName(";

  if (
    !source.includes(marker)
  ) {
    return source;
  }

  return source.replace(
    marker,
    `${buildHelpers(
      data,
    )}\n${marker}`,
  );
}

function replaceDynamicDisplay(
  source: string,
): string {
  let output = source;

  /*
   * Planète + signe, personne 1.
   */
  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*definition\.planet1,\s*\)\}\{" "\}\s*en \{sign1\}/g,
      `{localizeConnectionPlanet(
                translateCompatibilityPlanet(
                  definition.planet1,
                ),
              )}{" "}
              {__CONNECTION_IN_WORD}{" "}
              {localizeConnectionSign(sign1)}`,
    );

  /*
   * Planète + signe, personne 2.
   */
  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*definition\.planet2,\s*\)\}\{" "\}\s*en \{sign2\}/g,
      `{localizeConnectionPlanet(
                translateCompatibilityPlanet(
                  definition.planet2,
                ),
              )}{" "}
              {__CONNECTION_IN_WORD}{" "}
              {localizeConnectionSign(sign2)}`,
    );

  /*
   * Élément visible.
   */
  output =
    output.replace(
      /Élément \{getElement\(sign1\)\}/g,
      `{__CONNECTION_ELEMENT_WORD}{" "}
              {localizeConnectionElement(
                getElement(sign1),
              )}`,
    );

  output =
    output.replace(
      /Élément \{getElement\(sign2\)\}/g,
      `{__CONNECTION_ELEMENT_WORD}{" "}
              {localizeConnectionElement(
                getElement(sign2),
              )}`,
    );

  /*
   * Interprétation dynamique.
   */
  output =
    output.replace(
      /\{getConnectionInterpretation\(\s*definition,\s*sign1,\s*sign2,\s*\)\}/g,
      `{buildLocalizedConnectionInterpretation(
            definition,
            sign1,
            sign2,
          )}`,
    );

  /*
   * Planètes dans les cartes d'aspects.
   */
  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person1Planet,\s*\)\}/g,
      `{localizeConnectionPlanet(
              translateCompatibilityPlanet(
                aspect.person1Planet,
              ),
            )}`,
    );

  output =
    output.replace(
      /\{translateCompatibilityPlanet\(\s*aspect\.person2Planet,\s*\)\}/g,
      `{localizeConnectionPlanet(
              translateCompatibilityPlanet(
                aspect.person2Planet,
              ),
            )}`,
    );

  /*
   * Type d'aspect.
   */
  output =
    output.replace(
      /\{translateCompatibilityAspect\(\s*aspect\.type,\s*\)\}/g,
      `{localizeConnectionAspect(
              translateCompatibilityAspect(
                aspect.type,
              ),
            )}`,
    );

  /*
   * Orbe.
   */
  output =
    output.replace(
      /\{" • orbe "\}/g,
      `{" • "}
          {__CONNECTION_ORB_WORD}
          {" "}`,
    );

  /*
   * Interprétation externe des aspects.
   *
   * Si le texte correspondant existe
   * dans notre dictionnaire, il sera
   * traduit.
   */
  output =
    output.replace(
      /\{getCompatibilityAspectInterpretation\(\s*aspect\.person1Planet,\s*aspect\.type,\s*aspect\.person2Planet,\s*\)\}/g,
      `{getLocalizedConnectionAspectInterpretation(
              aspect.person1Planet,
              aspect.type,
              aspect.person2Planet,
            )}`,
    );

  /*
   * La synthèse de la page 28
   * doit utiliser notre version
   * entièrement localisée.
   */
  output =
    output.replace(
      /\{getSummaryText\(\s*definition,\s*person1,\s*person2,\s*\)\}/g,
      `{buildLocalizedConnectionSummary(
                  definition,
                  person1,
                  person2,
                )}`,
    );

  return output;
}

export function localizeCompatibilityPlanetConnections(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (
    locale === "fr"
  ) {
    return source;
  }

  const data =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  /*
   * Transformer d'abord les expressions dynamiques pendant
   * qu'elles ont encore leur forme française originale.
   * Sinon « Élément » est traduit avant que le motif soit
   * reconnu, ce qui produit des chaînes comme ElementEau.
   */
  let localized =
    replaceDynamicDisplay(
      source,
    );

  localized =
    localizeSafeLiterals(
      localized,
      data.text,
    );

  /*
   * Injecter les helpers en dernier pour éviter que leurs
   * dictionnaires localisés soient retraités.
   */
  localized =
    injectHelpers(
      localized,
      data,
    );

  return localized;
}
