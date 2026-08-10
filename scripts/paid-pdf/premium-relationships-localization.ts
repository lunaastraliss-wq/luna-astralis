import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

const COPY = {
  "en": {
    "labels": {
      "premiumAnalysis": "Premium Analysis",
      "relationalLife": "Your relational life",
      "relationalIntro": "Your way of loving does not depend solely on your Sun sign. The Moon, Venus, Mars, and Descendant describe your emotional needs, attractions, desires, and the lessons you learn through relationships.",
      "descendantTitle": "Your Descendant",
      "loveNeeds": "Your romantic needs",
      "loveNeedsIntro": "A fulfilling relationship respects your emotional security, your values in love, your desire, and your need to remain true to yourself.",
      "relationshipStrength": "Your relational strength",
      "relationshipChallenge": "Your relational challenge",
      "communicationLimits": "Communication and boundaries",
      "balance": "Balance",
      "emotionalReciprocity": "Emotional reciprocity",
      "essentialNeed": "Essential need",
      "relationshipSynthesis": "Relational synthesis",
      "unavailable": "Data unavailable",
      "unavailableText": "The available data do not allow a precise analysis of {planet}.",
      "unspecified": "unspecified",
      "genericSignText": "This position describes a personal way of relating and expressing your emotional needs.",
      "housePrefix": "Its position in House {house} adds particular importance: ",
      "descUnavailable": "The Descendant sign cannot be determined from the available data. The Descendant nevertheless describes the qualities you often seek in others and the lessons learned through partnership.",
      "descStart": "Your Descendant is in {sign}. ",
      "descEnd": "This energy may appear in the partners who attract you or in the qualities you develop through relationships.",
      "linkWord": "in",
      "communicationText": "The quality of your relationships depends on your ability to express your needs before dissatisfaction builds up. A clear boundary is not a rejection: it allows the relationship to remain honest, balanced, and respectful.",
      "reciprocityText": "You need a relationship in which attention, commitment, and effort flow both ways. Giving a great deal should not require you to ignore your own needs or carry the stability of the relationship alone."
    },
    "planetNames": {
      "Moon": "Moon",
      "Venus": "Venus",
      "Mars": "Mars"
    },
    "signNames": {
      "Aries": "Aries",
      "Taurus": "Taurus",
      "Gemini": "Gemini",
      "Cancer": "Cancer",
      "Leo": "Leo",
      "Virgo": "Virgo",
      "Libra": "Libra",
      "Scorpio": "Scorpio",
      "Sagittarius": "Sagittarius",
      "Capricorn": "Capricorn",
      "Aquarius": "Aquarius",
      "Pisces": "Pisces"
    },
    "signTexts": {
      "Aries": "You seek a lively, direct, and authentic relationship. You appreciate people who express their intentions clearly and respect your need for initiative.",
      "Taurus": "You need stability, consistency, and concrete signs of affection. Trust is built gradually through reliability and everyday presence.",
      "Gemini": "Communication plays an essential role in your relationships. You need stimulating exchanges, curiosity, and a certain lightness to maintain your interest.",
      "Cancer": "You seek a secure, protective, and deeply emotional relationship. The feeling of trust and belonging strongly influences your emotional openness.",
      "Leo": "You need warmth, loyalty, and recognition. You give a great deal when you feel appreciated and when the relationship allows you to express your heart fully.",
      "Virgo": "You often express affection through useful gestures, attentiveness, and reliability. You seek a sincere, structured relationship that respects everyday needs.",
      "Libra": "You seek harmony, dialogue, and reciprocity. The quality of exchanges, balance, and mutual respect are essential to your romantic well-being.",
      "Scorpio": "You need intensity, depth, and loyalty. You rarely commit halfway and place great importance on emotional trust.",
      "Sagittarius": "You need freedom, enthusiasm, and growth in your relationships. A relationship must allow you to evolve without making you feel confined.",
      "Capricorn": "You seek a solid, mature, and lasting relationship. You place great value on commitment, responsibility, and the ability to build together.",
      "Aquarius": "You need space, authenticity, and intellectual companionship. You appreciate relationships that respect individuality and are based on genuine friendship.",
      "Pisces": "You seek a sensitive, intuitive, and inspiring connection. You can feel the other person's needs deeply and need to preserve clear emotional boundaries."
    },
    "planetRoles": {
      "Moon": "The Moon describes your emotional needs, instinctive reactions, and what makes you feel secure in a relationship.",
      "Venus": "Venus describes your way of loving, your emotional values, what attracts you, and how you create harmony.",
      "Mars": "Mars describes your desire, your way of acting, your manner of asserting yourself, and the dynamics of your relational energy."
    },
    "houseTexts": {
      "1": "Your relational life is closely linked to your identity. You need to remain yourself and preserve a strong presence within the relationship.",
      "2": "Trust, security, and shared values occupy a major place. Material matters and stability can influence your emotional choices.",
      "3": "Daily communication is essential. You need to exchange, understand, and be able to speak freely about what you are experiencing.",
      "4": "The relationship is linked to home, roots, and the feeling of belonging. You often seek a relationship that gives a true sense of family.",
      "5": "Love, seduction, creativity, and pleasure occupy an important place. You need spontaneity and emotional expression.",
      "6": "You place great importance on everyday gestures, mutual support, and sharing responsibilities.",
      "7": "Relationships form a central axis of your life. You learn a great deal about yourself through partnership and the search for balance.",
      "8": "You seek a deep, transformative, and intimate relationship. Trust, vulnerability, and emotional sharing are decisive.",
      "9": "You need a relationship that broadens your horizons. Travel, beliefs, projects, and shared growth can bring you closer.",
      "10": "Your emotional life may be linked to your ambitions, public image, or long-term goals.",
      "11": "Friendship, shared projects, and freedom are essential. You need to share a vision of the future with your partner.",
      "12": "Your relational life can be very intuitive and introspective. You need clarity to avoid unspoken issues, projections, or excessive sacrifices."
    },
    "strength": "Your emotional strength rests on the meeting between your Moon in {moon} and your Venus in {venus}. When your emotional needs and your way of loving are respected at the same time, you can build deep, sincere, and lasting bonds.",
    "challenge": "Venus in {venus} describes what you seek in love, while Mars in {mars} shows how you act and react. Your challenge is to reconcile the need for harmony with the clear expression of your desires, boundaries, and frustrations.",
    "synthesis": "Your relational functioning combines a Moon in {moon}, a Venus in {venus}, and a Mars in {mars}. The Moon shows what you need to feel secure, Venus reveals your emotional language, and Mars describes how you pursue your desires or defend your boundaries. {descendant} A balanced relationship allows you to be loved without giving up your identity, to communicate your needs honestly, and to preserve genuine reciprocity.",
    "descendantSentence": "Your Descendant in {sign} completes this dynamic by revealing the relational qualities you are called to encounter or develop."
  },
  "es": {
    "labels": {
      "premiumAnalysis": "Análisis Premium",
      "relationalLife": "Tu vida relacional",
      "relationalIntro": "Tu manera de amar no depende únicamente de tu signo solar. La Luna, Venus, Marte y el Descendente describen tus necesidades afectivas, tus atracciones, tus deseos y los aprendizajes que realizas a través de las relaciones.",
      "descendantTitle": "Tu Descendente",
      "loveNeeds": "Tus necesidades amorosas",
      "loveNeedsIntro": "Una relación satisfactoria respeta a la vez tu seguridad emocional, tus valores afectivos, tu deseo y tu necesidad de permanecer fiel a ti misma.",
      "relationshipStrength": "Tu fuerza relacional",
      "relationshipChallenge": "Tu desafío relacional",
      "communicationLimits": "Comunicación y límites",
      "balance": "Equilibrio",
      "emotionalReciprocity": "Reciprocidad afectiva",
      "essentialNeed": "Necesidad esencial",
      "relationshipSynthesis": "Síntesis relacional",
      "unavailable": "Dato no disponible",
      "unavailableText": "Los datos disponibles no permiten analizar con precisión {planet}.",
      "unspecified": "no especificado",
      "genericSignText": "Esta posición describe una manera personal de relacionarte y expresar tus necesidades afectivas.",
      "housePrefix": "Su posición en la Casa {house} añade una importancia particular: ",
      "descUnavailable": "El signo del Descendente no puede determinarse con los datos disponibles. El Descendente describe, sin embargo, las cualidades que sueles buscar en los demás y los aprendizajes realizados en pareja.",
      "descStart": "Tu Descendente se encuentra en {sign}. ",
      "descEnd": "Esta energía puede aparecer en las parejas que te atraen o en las cualidades que desarrollas a través de las relaciones.",
      "linkWord": "en",
      "communicationText": "La calidad de tus relaciones depende de tu capacidad para expresar tus necesidades antes de que se acumule la insatisfacción. Un límite claro no es un rechazo: permite que la relación siga siendo honesta, equilibrada y respetuosa.",
      "reciprocityText": "Necesitas una relación en la que la atención, el compromiso y los esfuerzos circulen en ambos sentidos. Dar mucho no debe obligarte a ignorar tus propias necesidades ni a sostener sola la estabilidad del vínculo."
    },
    "planetNames": {
      "Moon": "Luna",
      "Venus": "Venus",
      "Mars": "Marte"
    },
    "signNames": {
      "Aries": "Aries",
      "Taurus": "Tauro",
      "Gemini": "Géminis",
      "Cancer": "Cáncer",
      "Leo": "Leo",
      "Virgo": "Virgo",
      "Libra": "Libra",
      "Scorpio": "Escorpio",
      "Sagittarius": "Sagitario",
      "Capricorn": "Capricornio",
      "Aquarius": "Acuario",
      "Pisces": "Piscis"
    },
    "signTexts": {
      "Aries": "Buscas una relación viva, directa y auténtica. Aprecias a las personas capaces de expresar claramente sus intenciones y respetar tu necesidad de iniciativa.",
      "Taurus": "Necesitas estabilidad, constancia y demostraciones concretas de afecto. La confianza se construye progresivamente gracias a la fiabilidad y la presencia cotidiana.",
      "Gemini": "La comunicación ocupa un lugar esencial en tus relaciones. Necesitas intercambios estimulantes, curiosidad y cierta ligereza para mantener tu interés.",
      "Cancer": "Buscas una relación segura, protectora y profundamente emocional. El sentimiento de confianza y pertenencia influye mucho en tu apertura afectiva.",
      "Leo": "Necesitas calidez, lealtad y reconocimiento. Das mucho cuando te sientes apreciada y cuando la relación te permite expresar plenamente tu corazón.",
      "Virgo": "Sueles expresar tu afecto mediante gestos útiles, atención y fiabilidad. Buscas una relación sincera, estructurada y respetuosa de las necesidades cotidianas.",
      "Libra": "Buscas armonía, diálogo y reciprocidad. La calidad de los intercambios, el equilibrio y el respeto mutuo son esenciales para tu bienestar amoroso.",
      "Scorpio": "Necesitas intensidad, profundidad y lealtad. Rara vez te comprometes a medias y das gran importancia a la confianza emocional.",
      "Sagittarius": "Necesitas libertad, entusiasmo y crecimiento en tus relaciones. Una relación debe permitirte evolucionar sin darte la sensación de estar encerrada.",
      "Capricorn": "Buscas una relación sólida, madura y duradera. Das mucho valor al compromiso, la responsabilidad y la capacidad de construir juntos.",
      "Aquarius": "Necesitas espacio, autenticidad y complicidad intelectual. Aprecias las relaciones que respetan la individualidad y se basan en una verdadera amistad.",
      "Pisces": "Buscas una conexión sensible, intuitiva e inspiradora. Puedes sentir profundamente las necesidades del otro y necesitas preservar límites emocionales claros."
    },
    "planetRoles": {
      "Moon": "La Luna describe tus necesidades emocionales, tus reacciones instintivas y lo que te permite sentirte segura en una relación.",
      "Venus": "Venus describe tu manera de amar, tus valores afectivos, lo que te atrae y tu manera de crear armonía.",
      "Mars": "Marte describe tu deseo, tu manera de actuar, de afirmarte y la dinámica de tu energía relacional."
    },
    "houseTexts": {
      "1": "Tu vida relacional está estrechamente ligada a tu identidad. Necesitas seguir siendo tú misma y conservar una presencia fuerte en la pareja.",
      "2": "La confianza, la seguridad y los valores compartidos ocupan un lugar importante. Las cuestiones materiales y la estabilidad pueden influir en tus elecciones afectivas.",
      "3": "La comunicación cotidiana es esencial. Necesitas intercambiar, comprender y poder hablar libremente de lo que vives.",
      "4": "La pareja está vinculada al hogar, las raíces y el sentimiento de pertenencia. Sueles buscar una relación que proporcione una verdadera sensación de familia.",
      "5": "El amor, la seducción, la creatividad y el placer ocupan un lugar importante. Necesitas espontaneidad y expresión afectiva.",
      "6": "Das mucha importancia a los gestos cotidianos, al apoyo mutuo y al reparto de responsabilidades.",
      "7": "Las relaciones constituyen un eje central de tu vida. Aprendes mucho sobre ti misma a través de la pareja, las asociaciones y la búsqueda de equilibrio.",
      "8": "Buscas una relación profunda, transformadora e íntima. La confianza, la vulnerabilidad y el intercambio emocional son determinantes.",
      "9": "Necesitas una relación que amplíe tus horizontes. Los viajes, las creencias, los proyectos y el crecimiento compartido pueden acercar a la pareja.",
      "10": "Tu vida afectiva puede estar vinculada con tus ambiciones, tu imagen pública o tus objetivos a largo plazo.",
      "11": "La amistad, los proyectos comunes y la libertad son esenciales. Necesitas compartir una visión de futuro con tu pareja.",
      "12": "Tu vida relacional puede ser muy intuitiva e interior. Necesitas claridad para evitar silencios, proyecciones o sacrificios excesivos."
    },
    "strength": "Tu fuerza afectiva se apoya en el encuentro entre tu Luna en {moon} y tu Venus en {venus}. Cuando tus necesidades emocionales y tu manera de amar son respetadas al mismo tiempo, puedes construir vínculos profundos, sinceros y duraderos.",
    "challenge": "Venus en {venus} describe lo que buscas en el amor, mientras que Marte en {mars} muestra tu manera de actuar y reaccionar. Tu desafío consiste en armonizar la necesidad de equilibrio con la expresión clara de tus deseos, tus límites y tus frustraciones.",
    "synthesis": "Tu funcionamiento relacional combina una Luna en {moon}, una Venus en {venus} y un Marte en {mars}. La Luna muestra lo que necesitas para sentirte segura, Venus revela tu lenguaje afectivo y Marte describe tu manera de perseguir tus deseos o defender tus límites. {descendant} Una relación equilibrada te permite ser amada sin renunciar a tu identidad, comunicar tus necesidades con honestidad y preservar una reciprocidad real.",
    "descendantSentence": "Tu Descendente en {sign} completa esta dinámica al revelar las cualidades relacionales que estás llamada a encontrar o desarrollar."
  },
  "de": {
    "labels": {
      "premiumAnalysis": "Premium-Analyse",
      "relationalLife": "Ihr Beziehungsleben",
      "relationalIntro": "Ihre Art zu lieben hängt nicht nur von Ihrem Sonnenzeichen ab. Mond, Venus, Mars und Deszendent beschreiben Ihre emotionalen Bedürfnisse, Anziehungen, Wünsche und die Lernprozesse, die Sie durch Beziehungen erfahren.",
      "descendantTitle": "Ihr Deszendent",
      "loveNeeds": "Ihre Liebesbedürfnisse",
      "loveNeedsIntro": "Eine erfüllende Beziehung respektiert zugleich Ihre emotionale Sicherheit, Ihre Werte in der Liebe, Ihr Begehren und Ihr Bedürfnis, sich selbst treu zu bleiben.",
      "relationshipStrength": "Ihre Beziehungsstärke",
      "relationshipChallenge": "Ihre Beziehungsherausforderung",
      "communicationLimits": "Kommunikation und Grenzen",
      "balance": "Gleichgewicht",
      "emotionalReciprocity": "Emotionale Gegenseitigkeit",
      "essentialNeed": "Wesentliches Bedürfnis",
      "relationshipSynthesis": "Beziehungssynthese",
      "unavailable": "Daten nicht verfügbar",
      "unavailableText": "Die verfügbaren Daten erlauben keine genaue Analyse von {planet}.",
      "unspecified": "nicht angegeben",
      "genericSignText": "Diese Position beschreibt eine persönliche Art, Beziehungen einzugehen und emotionale Bedürfnisse auszudrücken.",
      "housePrefix": "Die Position in Haus {house} verleiht diesem Thema besondere Bedeutung: ",
      "descUnavailable": "Das Zeichen des Deszendenten kann mit den verfügbaren Daten nicht bestimmt werden. Der Deszendent beschreibt dennoch die Eigenschaften, die Sie häufig bei anderen suchen, und die Lernprozesse in Partnerschaften.",
      "descStart": "Ihr Deszendent steht in {sign}. ",
      "descEnd": "Diese Energie kann sich in den Partnern zeigen, die Sie anziehen, oder in den Eigenschaften, die Sie durch Beziehungen entwickeln.",
      "linkWord": "in",
      "communicationText": "Die Qualität Ihrer Beziehungen hängt davon ab, ob Sie Ihre Bedürfnisse ausdrücken, bevor sich Unzufriedenheit aufbaut. Eine klare Grenze ist keine Zurückweisung: Sie ermöglicht es der Beziehung, ehrlich, ausgewogen und respektvoll zu bleiben.",
      "reciprocityText": "Sie brauchen eine Beziehung, in der Aufmerksamkeit, Engagement und Einsatz in beide Richtungen fließen. Viel zu geben sollte nicht bedeuten, die eigenen Bedürfnisse zu ignorieren oder allein die Stabilität der Verbindung zu tragen."
    },
    "planetNames": {
      "Moon": "Mond",
      "Venus": "Venus",
      "Mars": "Mars"
    },
    "signNames": {
      "Aries": "Widder",
      "Taurus": "Stier",
      "Gemini": "Zwillinge",
      "Cancer": "Krebs",
      "Leo": "Löwe",
      "Virgo": "Jungfrau",
      "Libra": "Waage",
      "Scorpio": "Skorpion",
      "Sagittarius": "Schütze",
      "Capricorn": "Steinbock",
      "Aquarius": "Wassermann",
      "Pisces": "Fische"
    },
    "signTexts": {
      "Aries": "Sie suchen eine lebendige, direkte und authentische Beziehung. Sie schätzen Menschen, die ihre Absichten klar ausdrücken und Ihr Bedürfnis nach Initiative respektieren.",
      "Taurus": "Sie brauchen Stabilität, Beständigkeit und konkrete Zeichen der Zuneigung. Vertrauen entsteht schrittweise durch Zuverlässigkeit und alltägliche Präsenz.",
      "Gemini": "Kommunikation spielt in Ihren Beziehungen eine wesentliche Rolle. Sie brauchen anregenden Austausch, Neugier und eine gewisse Leichtigkeit, um Ihr Interesse lebendig zu halten.",
      "Cancer": "Sie suchen eine sichere, schützende und tief emotionale Beziehung. Das Gefühl von Vertrauen und Zugehörigkeit beeinflusst Ihre emotionale Offenheit stark.",
      "Leo": "Sie brauchen Wärme, Loyalität und Anerkennung. Sie geben viel, wenn Sie sich wertgeschätzt fühlen und die Beziehung Ihnen erlaubt, Ihr Herz voll auszudrücken.",
      "Virgo": "Sie drücken Zuneigung häufig durch hilfreiche Gesten, Aufmerksamkeit und Zuverlässigkeit aus. Sie suchen eine aufrichtige, strukturierte Beziehung, die alltägliche Bedürfnisse respektiert.",
      "Libra": "Sie suchen Harmonie, Dialog und Gegenseitigkeit. Die Qualität des Austauschs, Ausgleich und gegenseitiger Respekt sind wesentlich für Ihr Liebeswohlbefinden.",
      "Scorpio": "Sie brauchen Intensität, Tiefe und Loyalität. Sie gehen selten halbe Bindungen ein und legen großen Wert auf emotionales Vertrauen.",
      "Sagittarius": "Sie brauchen Freiheit, Begeisterung und Wachstum in Beziehungen. Eine Beziehung sollte Ihnen Entwicklung ermöglichen, ohne Ihnen das Gefühl von Enge zu geben.",
      "Capricorn": "Sie suchen eine solide, reife und dauerhafte Beziehung. Sie legen großen Wert auf Engagement, Verantwortung und die Fähigkeit, gemeinsam etwas aufzubauen.",
      "Aquarius": "Sie brauchen Raum, Authentizität und geistige Verbundenheit. Sie schätzen Beziehungen, die Individualität respektieren und auf echter Freundschaft beruhen.",
      "Pisces": "Sie suchen eine sensible, intuitive und inspirierende Verbindung. Sie können die Bedürfnisse des anderen tief spüren und brauchen klare emotionale Grenzen."
    },
    "planetRoles": {
      "Moon": "Der Mond beschreibt Ihre emotionalen Bedürfnisse, instinktiven Reaktionen und das, was Ihnen in einer Beziehung Sicherheit gibt.",
      "Venus": "Venus beschreibt Ihre Art zu lieben, Ihre emotionalen Werte, das, was Sie anzieht, und wie Sie Harmonie schaffen.",
      "Mars": "Mars beschreibt Ihr Begehren, Ihre Handlungsweise, Ihre Art sich zu behaupten und die Dynamik Ihrer Beziehungsenergie."
    },
    "houseTexts": {
      "1": "Ihr Beziehungsleben ist eng mit Ihrer Identität verbunden. Sie müssen Sie selbst bleiben und eine starke Präsenz in der Partnerschaft bewahren.",
      "2": "Vertrauen, Sicherheit und gemeinsame Werte spielen eine große Rolle. Materielle Fragen und Stabilität können Ihre emotionalen Entscheidungen beeinflussen.",
      "3": "Tägliche Kommunikation ist wesentlich. Sie müssen sich austauschen, verstehen und frei über Ihre Erfahrungen sprechen können.",
      "4": "Partnerschaft ist mit Zuhause, Wurzeln und Zugehörigkeit verbunden. Sie suchen häufig eine Beziehung, die ein echtes Familiengefühl vermittelt.",
      "5": "Liebe, Verführung, Kreativität und Freude spielen eine wichtige Rolle. Sie brauchen Spontaneität und emotionalen Ausdruck.",
      "6": "Sie legen großen Wert auf alltägliche Gesten, gegenseitige Unterstützung und das Teilen von Verantwortung.",
      "7": "Beziehungen bilden eine zentrale Achse Ihres Lebens. Sie lernen viel über sich selbst durch Partnerschaft und die Suche nach Gleichgewicht.",
      "8": "Sie suchen eine tiefe, transformierende und intime Beziehung. Vertrauen, Verletzlichkeit und emotionales Teilen sind entscheidend.",
      "9": "Sie brauchen eine Beziehung, die Ihren Horizont erweitert. Reisen, Überzeugungen, Projekte und gemeinsames Wachstum können Sie einander näherbringen.",
      "10": "Ihr Gefühlsleben kann mit Ihren Ambitionen, Ihrem öffentlichen Bild oder langfristigen Zielen verbunden sein.",
      "11": "Freundschaft, gemeinsame Projekte und Freiheit sind wesentlich. Sie müssen mit Ihrem Partner eine Zukunftsvision teilen.",
      "12": "Ihr Beziehungsleben kann sehr intuitiv und nach innen gerichtet sein. Sie brauchen Klarheit, um unausgesprochene Themen, Projektionen oder übermäßige Opfer zu vermeiden."
    },
    "strength": "Ihre emotionale Stärke beruht auf dem Zusammenspiel Ihres Mondes in {moon} und Ihrer Venus in {venus}. Wenn Ihre emotionalen Bedürfnisse und Ihre Art zu lieben gleichzeitig respektiert werden, können Sie tiefe, aufrichtige und dauerhafte Bindungen aufbauen.",
    "challenge": "Venus in {venus} beschreibt, was Sie in der Liebe suchen, während Mars in {mars} zeigt, wie Sie handeln und reagieren. Ihre Herausforderung besteht darin, das Bedürfnis nach Harmonie mit dem klaren Ausdruck Ihrer Wünsche, Grenzen und Frustrationen zu verbinden.",
    "synthesis": "Ihre Beziehungsdynamik verbindet einen Mond in {moon}, eine Venus in {venus} und einen Mars in {mars}. Der Mond zeigt, was Sie brauchen, um sich sicher zu fühlen, Venus offenbart Ihre emotionale Sprache und Mars beschreibt, wie Sie Ihre Wünsche verfolgen oder Grenzen verteidigen. {descendant} Eine ausgewogene Beziehung erlaubt Ihnen, geliebt zu werden, ohne Ihre Identität aufzugeben, Ihre Bedürfnisse ehrlich mitzuteilen und echte Gegenseitigkeit zu bewahren.",
    "descendantSentence": "Ihr Deszendent in {sign} ergänzt diese Dynamik, indem er die Beziehungsqualitäten zeigt, denen Sie begegnen oder die Sie entwickeln sollen."
  },
  "it": {
    "labels": {
      "premiumAnalysis": "Analisi Premium",
      "relationalLife": "La tua vita relazionale",
      "relationalIntro": "Il tuo modo di amare non dipende soltanto dal tuo segno solare. Luna, Venere, Marte e Discendente descrivono i tuoi bisogni affettivi, le attrazioni, i desideri e gli apprendimenti che vivi attraverso le relazioni.",
      "descendantTitle": "Il tuo Discendente",
      "loveNeeds": "I tuoi bisogni amorosi",
      "loveNeedsIntro": "Una relazione appagante rispetta allo stesso tempo la tua sicurezza emotiva, i tuoi valori affettivi, il tuo desiderio e il bisogno di restare fedele a te stessa.",
      "relationshipStrength": "La tua forza relazionale",
      "relationshipChallenge": "La tua sfida relazionale",
      "communicationLimits": "Comunicazione e limiti",
      "balance": "Equilibrio",
      "emotionalReciprocity": "Reciprocità affettiva",
      "essentialNeed": "Bisogno essenziale",
      "relationshipSynthesis": "Sintesi relazionale",
      "unavailable": "Dato non disponibile",
      "unavailableText": "I dati disponibili non consentono di analizzare con precisione {planet}.",
      "unspecified": "non specificato",
      "genericSignText": "Questa posizione descrive un modo personale di entrare in relazione ed esprimere i tuoi bisogni affettivi.",
      "housePrefix": "La sua posizione nella Casa {house} aggiunge un'importanza particolare: ",
      "descUnavailable": "Il segno del Discendente non può essere determinato con i dati disponibili. Il Discendente descrive comunque le qualità che spesso cerchi negli altri e gli apprendimenti vissuti nella coppia.",
      "descStart": "Il tuo Discendente si trova in {sign}. ",
      "descEnd": "Questa energia può apparire nei partner che ti attraggono o nelle qualità che sviluppi attraverso le relazioni.",
      "linkWord": "in",
      "communicationText": "La qualità delle tue relazioni dipende dalla capacità di esprimere i tuoi bisogni prima che l'insoddisfazione si accumuli. Un limite chiaro non è un rifiuto: permette alla relazione di restare onesta, equilibrata e rispettosa.",
      "reciprocityText": "Hai bisogno di una relazione in cui attenzione, impegno e sforzi circolino in entrambe le direzioni. Dare molto non deve obbligarti a ignorare i tuoi bisogni o a sostenere da sola la stabilità del legame."
    },
    "planetNames": {
      "Moon": "Luna",
      "Venus": "Venere",
      "Mars": "Marte"
    },
    "signNames": {
      "Aries": "Ariete",
      "Taurus": "Toro",
      "Gemini": "Gemelli",
      "Cancer": "Cancro",
      "Leo": "Leone",
      "Virgo": "Vergine",
      "Libra": "Bilancia",
      "Scorpio": "Scorpione",
      "Sagittarius": "Sagittario",
      "Capricorn": "Capricorno",
      "Aquarius": "Acquario",
      "Pisces": "Pesci"
    },
    "signTexts": {
      "Aries": "Cerchi una relazione viva, diretta e autentica. Apprezzi le persone capaci di esprimere chiaramente le proprie intenzioni e rispettare il tuo bisogno di iniziativa.",
      "Taurus": "Hai bisogno di stabilità, costanza e prove concrete di affetto. La fiducia si costruisce gradualmente grazie all'affidabilità e alla presenza quotidiana.",
      "Gemini": "La comunicazione occupa un posto essenziale nelle tue relazioni. Hai bisogno di scambi stimolanti, curiosità e una certa leggerezza per mantenere vivo il tuo interesse.",
      "Cancer": "Cerchi una relazione rassicurante, protettiva e profondamente emotiva. Il sentimento di fiducia e appartenenza influenza fortemente la tua apertura affettiva.",
      "Leo": "Hai bisogno di calore, lealtà e riconoscimento. Dai molto quando ti senti apprezzata e quando la relazione ti permette di esprimere pienamente il tuo cuore.",
      "Virgo": "Esprimi spesso l'affetto attraverso gesti utili, attenzione e affidabilità. Cerchi una relazione sincera, strutturata e rispettosa dei bisogni quotidiani.",
      "Libra": "Cerchi armonia, dialogo e reciprocità. La qualità degli scambi, l'equilibrio e il rispetto reciproco sono essenziali per il tuo benessere amoroso.",
      "Scorpio": "Hai bisogno di intensità, profondità e lealtà. Raramente ti impegni a metà e attribuisci grande importanza alla fiducia emotiva.",
      "Sagittarius": "Hai bisogno di libertà, entusiasmo e crescita nelle relazioni. Una relazione deve permetterti di evolvere senza darti la sensazione di essere rinchiusa.",
      "Capricorn": "Cerchi una relazione solida, matura e duratura. Dai molto valore all'impegno, alla responsabilità e alla capacità di costruire insieme.",
      "Aquarius": "Hai bisogno di spazio, autenticità e complicità intellettuale. Apprezzi le relazioni che rispettano l'individualità e si basano su una vera amicizia.",
      "Pisces": "Cerchi una connessione sensibile, intuitiva e ispirante. Puoi percepire profondamente i bisogni dell'altro e hai bisogno di preservare limiti emotivi chiari."
    },
    "planetRoles": {
      "Moon": "La Luna descrive i tuoi bisogni emotivi, le reazioni istintive e ciò che ti permette di sentirti al sicuro in una relazione.",
      "Venus": "Venere descrive il tuo modo di amare, i tuoi valori affettivi, ciò che ti attrae e il modo in cui crei armonia.",
      "Mars": "Marte descrive il tuo desiderio, il tuo modo di agire, di affermarti e la dinamica della tua energia relazionale."
    },
    "houseTexts": {
      "1": "La tua vita relazionale è strettamente legata alla tua identità. Hai bisogno di restare te stessa e conservare una presenza forte nella coppia.",
      "2": "Fiducia, sicurezza e valori condivisi occupano un posto importante. Le questioni materiali e la stabilità possono influenzare le tue scelte affettive.",
      "3": "La comunicazione quotidiana è essenziale. Hai bisogno di scambiare, capire e poter parlare liberamente di ciò che vivi.",
      "4": "La coppia è legata alla casa, alle radici e al senso di appartenenza. Cerchi spesso una relazione che dia una vera sensazione di famiglia.",
      "5": "Amore, seduzione, creatività e piacere occupano un posto importante. Hai bisogno di spontaneità ed espressione affettiva.",
      "6": "Dai molta importanza ai gesti quotidiani, al sostegno reciproco e alla condivisione delle responsabilità.",
      "7": "Le relazioni costituiscono un asse centrale della tua vita. Impari molto su te stessa attraverso la coppia e la ricerca di equilibrio.",
      "8": "Cerchi una relazione profonda, trasformativa e intima. Fiducia, vulnerabilità e condivisione emotiva sono determinanti.",
      "9": "Hai bisogno di una relazione che allarghi i tuoi orizzonti. Viaggi, convinzioni, progetti e crescita comune possono avvicinare la coppia.",
      "10": "La tua vita affettiva può essere legata alle tue ambizioni, alla tua immagine pubblica o ai tuoi obiettivi a lungo termine.",
      "11": "Amicizia, progetti comuni e libertà sono essenziali. Hai bisogno di condividere una visione del futuro con il partner.",
      "12": "La tua vita relazionale può essere molto intuitiva e interiore. Hai bisogno di chiarezza per evitare non detti, proiezioni o sacrifici eccessivi."
    },
    "strength": "La tua forza affettiva si basa sull'incontro tra la tua Luna in {moon} e la tua Venere in {venus}. Quando i tuoi bisogni emotivi e il tuo modo di amare vengono rispettati insieme, puoi costruire legami profondi, sinceri e duraturi.",
    "challenge": "Venere in {venus} descrive ciò che cerchi nell'amore, mentre Marte in {mars} mostra il tuo modo di agire e reagire. La tua sfida consiste nell'accordare il bisogno di armonia con l'espressione chiara dei tuoi desideri, limiti e frustrazioni.",
    "synthesis": "Il tuo funzionamento relazionale combina una Luna in {moon}, una Venere in {venus} e un Marte in {mars}. La Luna mostra ciò di cui hai bisogno per sentirti al sicuro, Venere rivela il tuo linguaggio affettivo e Marte descrive il modo in cui insegui i tuoi desideri o difendi i tuoi limiti. {descendant} Una relazione equilibrata ti permette di essere amata senza rinunciare alla tua identità, comunicare i tuoi bisogni con onestà e preservare una vera reciprocità.",
    "descendantSentence": "Il tuo Discendente in {sign} completa questa dinamica rivelando le qualità relazionali che sei chiamata a incontrare o sviluppare."
  },
  "pt": {
    "labels": {
      "premiumAnalysis": "Análise Premium",
      "relationalLife": "Sua vida relacional",
      "relationalIntro": "Sua maneira de amar não depende apenas do seu signo solar. Lua, Vênus, Marte e Descendente descrevem suas necessidades afetivas, atrações, desejos e os aprendizados que você vivencia por meio dos relacionamentos.",
      "descendantTitle": "Seu Descendente",
      "loveNeeds": "Suas necessidades amorosas",
      "loveNeedsIntro": "Um relacionamento satisfatório respeita ao mesmo tempo sua segurança emocional, seus valores afetivos, seu desejo e sua necessidade de permanecer fiel a si mesma.",
      "relationshipStrength": "Sua força relacional",
      "relationshipChallenge": "Seu desafio relacional",
      "communicationLimits": "Comunicação e limites",
      "balance": "Equilíbrio",
      "emotionalReciprocity": "Reciprocidade afetiva",
      "essentialNeed": "Necessidade essencial",
      "relationshipSynthesis": "Síntese relacional",
      "unavailable": "Dado indisponível",
      "unavailableText": "Os dados disponíveis não permitem analisar com precisão {planet}.",
      "unspecified": "não especificado",
      "genericSignText": "Esta posição descreve uma maneira pessoal de se relacionar e expressar suas necessidades afetivas.",
      "housePrefix": "Sua posição na Casa {house} acrescenta uma importância particular: ",
      "descUnavailable": "O signo do Descendente não pode ser determinado com os dados disponíveis. O Descendente descreve, porém, as qualidades que você costuma buscar nos outros e os aprendizados realizados na parceria.",
      "descStart": "Seu Descendente está em {sign}. ",
      "descEnd": "Essa energia pode aparecer nos parceiros que atraem você ou nas qualidades que você desenvolve por meio dos relacionamentos.",
      "linkWord": "em",
      "communicationText": "A qualidade dos seus relacionamentos depende da sua capacidade de expressar suas necessidades antes que a insatisfação se acumule. Um limite claro não é uma rejeição: ele permite que o relacionamento permaneça honesto, equilibrado e respeitoso.",
      "reciprocityText": "Você precisa de um relacionamento no qual atenção, compromisso e esforços circulem nos dois sentidos. Dar muito não deve obrigá-la a ignorar suas próprias necessidades nem a sustentar sozinha a estabilidade do vínculo."
    },
    "planetNames": {
      "Moon": "Lua",
      "Venus": "Vênus",
      "Mars": "Marte"
    },
    "signNames": {
      "Aries": "Áries",
      "Taurus": "Touro",
      "Gemini": "Gêmeos",
      "Cancer": "Câncer",
      "Leo": "Leão",
      "Virgo": "Virgem",
      "Libra": "Libra",
      "Scorpio": "Escorpião",
      "Sagittarius": "Sagitário",
      "Capricorn": "Capricórnio",
      "Aquarius": "Aquário",
      "Pisces": "Peixes"
    },
    "signTexts": {
      "Aries": "Você busca um relacionamento vivo, direto e autêntico. Aprecia pessoas capazes de expressar claramente suas intenções e respeitar sua necessidade de iniciativa.",
      "Taurus": "Você precisa de estabilidade, constância e demonstrações concretas de afeto. A confiança é construída gradualmente por meio da confiabilidade e da presença cotidiana.",
      "Gemini": "A comunicação ocupa um lugar essencial nos seus relacionamentos. Você precisa de trocas estimulantes, curiosidade e certa leveza para manter seu interesse.",
      "Cancer": "Você busca um relacionamento seguro, protetor e profundamente emocional. O sentimento de confiança e pertencimento influencia fortemente sua abertura afetiva.",
      "Leo": "Você precisa de calor, lealdade e reconhecimento. Dá muito quando se sente valorizada e quando o relacionamento permite que expresse plenamente seu coração.",
      "Virgo": "Você costuma expressar afeto por meio de gestos úteis, atenção e confiabilidade. Busca um relacionamento sincero, estruturado e respeitoso com as necessidades do dia a dia.",
      "Libra": "Você busca harmonia, diálogo e reciprocidade. A qualidade das trocas, o equilíbrio e o respeito mútuo são essenciais para seu bem-estar amoroso.",
      "Scorpio": "Você precisa de intensidade, profundidade e lealdade. Raramente se compromete pela metade e dá grande importância à confiança emocional.",
      "Sagittarius": "Você precisa de liberdade, entusiasmo e crescimento nos relacionamentos. Um relacionamento deve permitir que evolua sem lhe dar a sensação de estar presa.",
      "Capricorn": "Você busca um relacionamento sólido, maduro e duradouro. Dá muito valor ao compromisso, à responsabilidade e à capacidade de construir juntos.",
      "Aquarius": "Você precisa de espaço, autenticidade e cumplicidade intelectual. Aprecia relacionamentos que respeitam a individualidade e se baseiam em uma verdadeira amizade.",
      "Pisces": "Você busca uma conexão sensível, intuitiva e inspiradora. Pode sentir profundamente as necessidades do outro e precisa preservar limites emocionais claros."
    },
    "planetRoles": {
      "Moon": "A Lua descreve suas necessidades emocionais, suas reações instintivas e o que permite que você se sinta segura em um relacionamento.",
      "Venus": "Vênus descreve sua maneira de amar, seus valores afetivos, o que atrai você e como cria harmonia.",
      "Mars": "Marte descreve seu desejo, sua maneira de agir, de se afirmar e a dinâmica da sua energia relacional."
    },
    "houseTexts": {
      "1": "Sua vida relacional está intimamente ligada à sua identidade. Você precisa continuar sendo você mesma e preservar uma presença forte no relacionamento.",
      "2": "Confiança, segurança e valores compartilhados ocupam um lugar importante. Questões materiais e estabilidade podem influenciar suas escolhas afetivas.",
      "3": "A comunicação diária é essencial. Você precisa trocar, compreender e poder falar livremente sobre o que está vivendo.",
      "4": "O relacionamento está ligado ao lar, às raízes e ao sentimento de pertencimento. Você costuma buscar uma relação que proporcione uma verdadeira sensação de família.",
      "5": "Amor, sedução, criatividade e prazer ocupam um lugar importante. Você precisa de espontaneidade e expressão afetiva.",
      "6": "Você dá muita importância aos gestos cotidianos, ao apoio mútuo e à divisão de responsabilidades.",
      "7": "Os relacionamentos constituem um eixo central da sua vida. Você aprende muito sobre si mesma por meio da parceria e da busca por equilíbrio.",
      "8": "Você busca um relacionamento profundo, transformador e íntimo. Confiança, vulnerabilidade e compartilhamento emocional são determinantes.",
      "9": "Você precisa de um relacionamento que amplie seus horizontes. Viagens, crenças, projetos e crescimento em comum podem aproximar o casal.",
      "10": "Sua vida afetiva pode estar ligada às suas ambições, à sua imagem pública ou aos seus objetivos de longo prazo.",
      "11": "Amizade, projetos em comum e liberdade são essenciais. Você precisa compartilhar uma visão de futuro com seu parceiro.",
      "12": "Sua vida relacional pode ser muito intuitiva e interior. Você precisa de clareza para evitar assuntos não ditos, projeções ou sacrifícios excessivos."
    },
    "strength": "Sua força afetiva se baseia no encontro entre sua Lua em {moon} e sua Vênus em {venus}. Quando suas necessidades emocionais e sua maneira de amar são respeitadas ao mesmo tempo, você pode construir vínculos profundos, sinceros e duradouros.",
    "challenge": "Vênus em {venus} descreve o que você busca no amor, enquanto Marte em {mars} mostra sua maneira de agir e reagir. Seu desafio é conciliar a necessidade de harmonia com a expressão clara dos seus desejos, limites e frustrações.",
    "synthesis": "Seu funcionamento relacional combina uma Lua em {moon}, uma Vênus em {venus} e um Marte em {mars}. A Lua mostra o que você precisa para se sentir segura, Vênus revela sua linguagem afetiva e Marte descreve como você persegue seus desejos ou defende seus limites. {descendant} Um relacionamento equilibrado permite que você seja amada sem renunciar à sua identidade, comunique suas necessidades com honestidade e preserve uma reciprocidade real.",
    "descendantSentence": "Seu Descendente em {sign} completa essa dinâmica ao revelar as qualidades relacionais que você é chamada a encontrar ou desenvolver."
  }
} as const;

const CANONICAL_SIGN = {
  "Aries": "Aries",
  "Bélier": "Aries",
  "Taurus": "Taurus",
  "Taureau": "Taurus",
  "Gemini": "Gemini",
  "Gémeaux": "Gemini",
  "Cancer": "Cancer",
  "Leo": "Leo",
  "Lion": "Leo",
  "Virgo": "Virgo",
  "Vierge": "Virgo",
  "Libra": "Libra",
  "Balance": "Libra",
  "Scorpio": "Scorpio",
  "Scorpion": "Scorpio",
  "Sagittarius": "Sagittarius",
  "Sagittaire": "Sagittarius",
  "Capricorn": "Capricorn",
  "Capricorne": "Capricorn",
  "Aquarius": "Aquarius",
  "Verseau": "Aquarius",
  "Pisces": "Pisces",
  "Poissons": "Pisces"
} as const;

function replaceFunctionBlock(
  source: string,
  functionName: string,
  nextMarker: string,
  replacement: string,
): string {
  const startMarker =
    "function " + functionName + "(";

  const start = source.indexOf(
    startMarker,
  );

  if (start < 0) {
    return source;
  }

  const end = source.indexOf(
    nextMarker,
    start,
  );

  if (end < 0) {
    return source;
  }

  return (
    source.slice(0, start) +
    replacement.trim() +
    "\n\n" +
    source.slice(end)
  );
}

function replaceText(
  source: string,
  from: string,
  to: string,
): string {
  return source.split(from).join(to);
}

function injectRuntime(
  source: string,
  locale: NonFrenchLocale,
): string {
  if (
    source.includes(
      "const PREMIUM_RELATIONSHIPS_LOCALIZATION =",
    )
  ) {
    return source;
  }

  const c = COPY[locale];

  const runtime =
    "\nconst PREMIUM_RELATIONSHIPS_LOCALIZATION = " +
    JSON.stringify(c, null, 2) +
    " as const;\n" +
    "const PREMIUM_RELATIONSHIPS_CANONICAL_SIGN = " +
    JSON.stringify(CANONICAL_SIGN, null, 2) +
    " as const;\n\n" +
    String.raw`
function fillPremiumRelationshipsTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(
    /\{([a-z0-9]+)\}/gi,
    (_full, key: string) =>
      values[key] ?? "",
  );
}

function getPremiumRelationshipsCanonicalSign(
  sign?: string,
): string | null {
  if (!sign) {
    return null;
  }

  const map =
    PREMIUM_RELATIONSHIPS_CANONICAL_SIGN as Record<
      string,
      string
    >;

  return map[sign] || sign;
}

function getPremiumRelationshipsSignName(
  sign?: string,
): string {
  const canonical =
    getPremiumRelationshipsCanonicalSign(
      sign,
    );

  if (!canonical) {
    return PREMIUM_RELATIONSHIPS_LOCALIZATION
      .labels.unspecified;
  }

  const names =
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .signNames as Record<string, string>;

  return names[canonical] || canonical;
}

function getPremiumRelationshipsPlanetName(
  name: RelationshipPlanetName,
): string {
  const names =
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .planetNames as Record<string, string>;

  return names[name] || name;
}

function getPremiumRelationshipsHouseText(
  planet: PremiumPlanet | null,
): string {
  if (
    !planet ||
    typeof planet.house !== "number"
  ) {
    return "";
  }

  const house = Math.round(
    planet.house,
  );

  const texts =
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .houseTexts as Record<string, string>;

  const interpretation =
    texts[String(house)];

  if (!interpretation) {
    return "";
  }

  return (
    " " +
    fillPremiumRelationshipsTemplate(
      PREMIUM_RELATIONSHIPS_LOCALIZATION
        .labels.housePrefix,
      {
        house: String(house),
      },
    ) +
    interpretation
  );
}

function createPremiumRelationshipInsight(
  planets: PremiumPlanet[],
  planetName: RelationshipPlanetName,
): RelationshipInsight {
  const planet = getPlanet(
    planets,
    planetName,
  );

  const translatedName =
    getPremiumRelationshipsPlanetName(
      planetName,
    );

  if (!planet) {
    return {
      title: translatedName,
      subtitle:
        PREMIUM_RELATIONSHIPS_LOCALIZATION
          .labels.unavailable,
      text:
        fillPremiumRelationshipsTemplate(
          PREMIUM_RELATIONSHIPS_LOCALIZATION
            .labels.unavailableText,
          {
            planet: translatedName,
          },
        ),
    };
  }

  const canonical =
    getPremiumRelationshipsCanonicalSign(
      planet.sign,
    );

  const signName =
    getPremiumRelationshipsSignName(
      planet.sign,
    );

  const signTexts =
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .signTexts as Record<string, string>;

  const roles =
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .planetRoles as Record<string, string>;

  return {
    title:
      translatedName +
      " " +
      PREMIUM_RELATIONSHIPS_LOCALIZATION
        .labels.linkWord +
      " " +
      signName,
    subtitle:
      roles[planetName] || "",
    text:
      (
        (canonical &&
          signTexts[canonical]) ||
        PREMIUM_RELATIONSHIPS_LOCALIZATION
          .labels.genericSignText
      ) +
      getPremiumRelationshipsHouseText(
        planet,
      ),
  };
}

function getPremiumRelationshipsLongitudeSign(
  longitude?: number,
): string | null {
  if (
    typeof longitude !== "number" ||
    !Number.isFinite(longitude)
  ) {
    return null;
  }

  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const normalized =
    ((longitude % 360) + 360) % 360;

  return (
    signs[
      Math.floor(
        normalized / 30,
      )
    ] || null
  );
}

function getPremiumRelationshipsDescendantText(
  sign: string | null,
): string {
  if (!sign) {
    return PREMIUM_RELATIONSHIPS_LOCALIZATION
      .labels.descUnavailable;
  }

  const canonical =
    getPremiumRelationshipsCanonicalSign(
      sign,
    );

  const signName =
    getPremiumRelationshipsSignName(
      sign,
    );

  const signTexts =
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .signTexts as Record<string, string>;

  const middle =
    (canonical &&
      signTexts[canonical]) ||
    "";

  return (
    fillPremiumRelationshipsTemplate(
      PREMIUM_RELATIONSHIPS_LOCALIZATION
        .labels.descStart,
      {
        sign: signName,
      },
    ) +
    middle +
    " " +
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .labels.descEnd
  ).trim();
}

function getPremiumRelationshipStrength(
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null,
): string {
  return fillPremiumRelationshipsTemplate(
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .strength,
    {
      moon:
        getPremiumRelationshipsSignName(
          moon?.sign,
        ),
      venus:
        getPremiumRelationshipsSignName(
          venus?.sign,
        ),
    },
  );
}

function getPremiumRelationshipChallenge(
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null,
): string {
  return fillPremiumRelationshipsTemplate(
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .challenge,
    {
      venus:
        getPremiumRelationshipsSignName(
          venus?.sign,
        ),
      mars:
        getPremiumRelationshipsSignName(
          mars?.sign,
        ),
    },
  );
}

function createPremiumRelationshipSynthesis(
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  descendantSign: string | null,
): string {
  const descendant =
    descendantSign
      ? fillPremiumRelationshipsTemplate(
          PREMIUM_RELATIONSHIPS_LOCALIZATION
            .descendantSentence,
          {
            sign:
              getPremiumRelationshipsSignName(
                descendantSign,
              ),
          },
        )
      : "";

  return fillPremiumRelationshipsTemplate(
    PREMIUM_RELATIONSHIPS_LOCALIZATION
      .synthesis,
    {
      moon:
        getPremiumRelationshipsSignName(
          moon?.sign,
        ),
      venus:
        getPremiumRelationshipsSignName(
          venus?.sign,
        ),
      mars:
        getPremiumRelationshipsSignName(
          mars?.sign,
        ),
      descendant,
    },
  ).trim();
}

`;

  const marker =
    "const styles = StyleSheet.create({";

  if (!source.includes(marker)) {
    return source;
  }

  return source.replace(
    marker,
    runtime + marker,
  );
}

export function localizePremiumRelationships(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const safeLocale =
    locale as NonFrenchLocale;

  const c = COPY[safeLocale];

  let out = injectRuntime(
    source,
    safeLocale,
  );

  out = replaceFunctionBlock(
    out,
    "getPlanetHouseText",
    "function createPlanetInsight(",
    `
function getPlanetHouseText(
  planet: PremiumPlanet | null,
): string {
  return getPremiumRelationshipsHouseText(
    planet,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "createPlanetInsight",
    "function longitudeToSign(",
    `
function createPlanetInsight(
  planets: PremiumPlanet[],
  planetName: RelationshipPlanetName,
): RelationshipInsight {
  return createPremiumRelationshipInsight(
    planets,
    planetName,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "longitudeToSign",
    "function getDescendantSign(",
    `
function longitudeToSign(
  longitude?: number,
): string | null {
  return getPremiumRelationshipsLongitudeSign(
    longitude,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "getDescendantText",
    "function getRelationshipStrength(",
    `
function getDescendantText(
  sign: string | null,
): string {
  return getPremiumRelationshipsDescendantText(
    sign,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "getRelationshipStrength",
    "function getRelationshipChallenge(",
    `
function getRelationshipStrength(
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null,
): string {
  return getPremiumRelationshipStrength(
    moon,
    venus,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "getRelationshipChallenge",
    "function createRelationshipSynthesis(",
    `
function getRelationshipChallenge(
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null,
): string {
  return getPremiumRelationshipChallenge(
    venus,
    mars,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "createRelationshipSynthesis",
    "export default function PdfRelationships",
    `
function createRelationshipSynthesis(
  moon: PremiumPlanet | null,
  venus: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  descendantSign: string | null,
): string {
  return createPremiumRelationshipSynthesis(
    moon,
    venus,
    mars,
    descendantSign,
  );
}
`,
  );

  const literals: Array<
    [string, string]
  > = [
    ["Analyse Premium", c.labels.premiumAnalysis],
    ["Votre vie relationnelle", c.labels.relationalLife],
    [
      "Votre manière d’aimer ne dépend pas\n            seulement de votre signe solaire. La Lune,\n            Vénus, Mars et le Descendant décrivent vos\n            besoins affectifs, vos attirances, votre\n            désir et les apprentissages que vous faites\n            à travers les relations.",
      c.labels.relationalIntro,
    ],
    ["Votre Descendant", c.labels.descendantTitle],
    ["Vos besoins amoureux", c.labels.loveNeeds],
    [
      "Une relation satisfaisante respecte à la\n            fois votre sécurité émotionnelle, vos\n            valeurs affectives, votre désir et votre\n            besoin de rester fidèle à vous-même.",
      c.labels.loveNeedsIntro,
    ],
    ["Votre force relationnelle", c.labels.relationshipStrength],
    ["Votre défi relationnel", c.labels.relationshipChallenge],
    ["Communication et limites", c.labels.communicationLimits],
    ["Équilibre", c.labels.balance],
    ["Réciprocité affective", c.labels.emotionalReciprocity],
    ["Besoin essentiel", c.labels.essentialNeed],
    ["Synthèse relationnelle", c.labels.relationshipSynthesis],
    [
      "La qualité de vos relations dépend de\n              votre capacité à exprimer vos besoins\n              avant que l’insatisfaction ne s’accumule.\n              Une limite claire n’est pas un rejet :\n              elle permet à la relation de rester\n              honnête, équilibrée et respectueuse.",
      c.labels.communicationText,
    ],
    [
      "Vous avez besoin d’une relation dans\n              laquelle l’attention, l’engagement et les\n              efforts circulent dans les deux sens.\n              Donner beaucoup ne doit pas vous obliger\n              à ignorer vos propres besoins ou à porter\n              seule la stabilité du lien.",
      c.labels.reciprocityText,
    ],
  ];

  for (const [from, to] of literals) {
    out = replaceText(
      out,
      from,
      to,
    );
  }

  return out;
}
