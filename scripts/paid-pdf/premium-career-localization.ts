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
      "vocationTitle": "Your professional vocation",
      "vocationIntro": "Vocation does not correspond solely to a specific job. It represents how you wish to use your skills, progress, contribute, and be recognized in the world.",
      "midheavenFallbackTitle": "Your Midheaven",
      "professionalInfluence": "Professional influence",
      "successTitle": "Your success and ambitions",
      "successIntro": "Success depends on how you combine your talents, your action energy, your confidence, and your ability to persevere.",
      "development": "Development",
      "strengthTitle": "Your professional strength",
      "challengeTitle": "Your professional challenge",
      "synthesisTitle": "Summary of your vocation",
      "unavailableTag": "Data unavailable",
      "unavailableText": "The available data do not allow a precise analysis of the professional influence of {planet}.",
      "unspecified": "unspecified",
      "genericSignText": "This position describes a personal way of working, progressing, and pursuing your ambitions.",
      "genericMidheavenText": "The Midheaven describes your professional direction, reputation, and how you wish to be recognized.",
      "housePrefix": "Its position in House {house} adds this: ",
      "mcPrefix": "Midheaven in "
    },
    "planetNames": {
      "Sun": "Sun",
      "Mercury": "Mercury",
      "Mars": "Mars",
      "Jupiter": "Jupiter",
      "Saturn": "Saturn"
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
      "Aries": "You progress when you can take initiative, act quickly, and open new paths. Environments that are too passive or controlling can reduce your motivation.",
      "Taurus": "You seek a stable, concrete, and lasting activity. You move forward best when your efforts produce visible results and when you can build gradually.",
      "Gemini": "You need variety, intellectual stimulation, and communication. Professions that allow you to learn, explain, write, or connect people can suit you well.",
      "Cancer": "You give your best when your work has a human, protective, or emotional dimension. A sense of usefulness and security strongly influences your commitment.",
      "Leo": "You need creativity, recognition, and a certain freedom of expression. You can excel when you take on a visible position or a leadership role.",
      "Virgo": "You have a natural sense of analysis, organization, and improvement. You are effective in roles requiring precision, method, and attention to detail.",
      "Libra": "You work well in environments based on cooperation, balance, and the quality of relationships. Diplomacy, aesthetics, or mediation can be strengths.",
      "Scorpio": "You are drawn to complex, strategic, or transformative situations. You can excel when the work requires depth, discretion, research, or crisis-management skills.",
      "Sagittarius": "You need growth, movement, and meaning. Fields related to teaching, travel, transmission, or exploration can nourish your motivation.",
      "Capricorn": "You seek progress, responsibility, and long-term construction. Your endurance and sense of structure support management or authority roles.",
      "Aquarius": "You need independence, innovation, and intellectual freedom. You can stand out in technological, collective, creative, or unconventional fields.",
      "Pisces": "Your intuition, imagination, and sensitivity can flourish in creative, human, spiritual, or therapeutic fields. You need to feel that your work has meaning."
    },
    "planetRoles": {
      "Sun": "The Sun describes your need for fulfillment, radiance, and a professional identity that reflects who you are.",
      "Mercury": "Mercury describes how you think, communicate, learn, and process information at work.",
      "Mars": "Mars describes your action energy, ambition, competitiveness, and how you pursue your goals.",
      "Jupiter": "Jupiter describes your potential for expansion, confidence, transmission, and the areas in which you can think bigger.",
      "Saturn": "Saturn describes your discipline, sense of responsibility, maturity challenges, and ability to build for the long term."
    },
    "houseTexts": {
      "1": "Your personal identity and presence strongly influence your professional path. You need to feel directly involved in what you do.",
      "2": "Income, stability, and recognition of your skills are important drivers. You seek to build concrete security.",
      "3": "Communication, learning, writing, commerce, or exchanges play an important role in your activity.",
      "4": "Your professional life may be linked to home, family, real estate, or creating a secure environment.",
      "5": "Creativity, personal expression, teaching, leisure, or independent projects can play a major role.",
      "6": "Daily work, organization, service, methods, and professional habits are central to your progress.",
      "7": "Partnerships, clients, and collaborations strongly influence your success. You progress through exchange and cooperation.",
      "8": "Shared finances, psychology, investigation, transformation, or crisis management can become important fields.",
      "9": "Teaching, travel, languages, law, publishing, or knowledge transmission can support your vocation.",
      "10": "Career, reputation, and public achievement occupy a central place. You need to build a visible and recognized trajectory.",
      "11": "Networks, collective projects, communities, and a vision of the future can support your success.",
      "12": "Your vocation may include a discreet, intuitive, artistic, spiritual, or helping dimension."
    },
    "mcTexts": {
      "Aries": "Your Midheaven in Aries indicates a vocation based on initiative, autonomy, and courage. You need to move forward independently and open your own path.",
      "Taurus": "Your Midheaven in Taurus favors steady, patient, and concrete progress. You build your reputation through reliability and consistency.",
      "Gemini": "Your Midheaven in Gemini emphasizes communication, versatility, and learning. Several activities or roles may form part of your path.",
      "Cancer": "Your Midheaven in Cancer connects vocation with protection, care, home, or human support.",
      "Leo": "Your Midheaven in Leo favors visibility, creativity, leadership, and recognition of your talents.",
      "Virgo": "Your Midheaven in Virgo emphasizes competence, service, analysis, and constant improvement.",
      "Libra": "Your Midheaven in Libra supports careers related to relationships, mediation, aesthetics, law, or cooperation.",
      "Scorpio": "Your Midheaven in Scorpio indicates an intense, strategic, or transformative vocation. You can handle complex situations with depth.",
      "Sagittarius": "Your Midheaven in Sagittarius favors teaching, travel, transmission, publishing, and projects that broaden horizons.",
      "Capricorn": "Your Midheaven in Capricorn emphasizes ambition, patience, and the ability to gradually take on important responsibilities.",
      "Aquarius": "Your Midheaven in Aquarius favors innovation, technology, networks, independence, and original professional paths.",
      "Pisces": "Your Midheaven in Pisces highlights creativity, intuition, helping, spirituality, and activities requiring sensitivity and imagination."
    },
    "strength": "Your potential for achievement combines the Sun in {sun} and Jupiter in {jupiter}. The Sun shows what you seek to become, while Jupiter reveals your capacity for expansion, confidence, and transmission.",
    "challenge": "Mars in {mars} describes your way of acting, while Saturn in {saturn} shows your responsibilities and limits. Your challenge is to move forward with determination without rushing the process, while preventing caution from becoming immobility.",
    "synthesis": "Your professional path combines a Sun in {sun}, Mercury in {mercury}, Mars in {mars}, and Saturn in {saturn}. The Sun indicates your need for fulfillment, Mercury your mental skills, Mars your capacity for action, and Saturn your ability to build over time. {mc} You progress most when your activity combines personal meaning, autonomy, concrete skills, and room for growth.",
    "mcSentence": "The Midheaven in {mc} gives a general direction to this evolution."
  },
  "es": {
    "labels": {
      "premiumAnalysis": "Análisis Premium",
      "vocationTitle": "Tu vocación profesional",
      "vocationIntro": "La vocación no corresponde únicamente a un oficio preciso. Representa la manera en que deseas utilizar tus competencias, progresar, contribuir y ser reconocida en el mundo.",
      "midheavenFallbackTitle": "Tu Medio Cielo",
      "professionalInfluence": "Influencia profesional",
      "successTitle": "Tu éxito y tus ambiciones",
      "successIntro": "El éxito depende de cómo combines tus talentos, tu energía de acción, tu confianza y tu capacidad de perseverar.",
      "development": "Desarrollo",
      "strengthTitle": "Tu fuerza profesional",
      "challengeTitle": "Tu desafío profesional",
      "synthesisTitle": "Síntesis de tu vocación",
      "unavailableTag": "Dato no disponible",
      "unavailableText": "Los datos disponibles no permiten analizar con precisión la influencia profesional de {planet}.",
      "unspecified": "no especificado",
      "genericSignText": "Esta posición describe una manera personal de trabajar, progresar y perseguir tus ambiciones.",
      "genericMidheavenText": "El Medio Cielo describe la dirección profesional, la reputación y la manera en que deseas ser reconocida.",
      "housePrefix": "Su posición en la Casa {house} añade lo siguiente: ",
      "mcPrefix": "Medio Cielo en "
    },
    "planetNames": {
      "Sun": "Sol",
      "Mercury": "Mercurio",
      "Mars": "Marte",
      "Jupiter": "Júpiter",
      "Saturn": "Saturno"
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
      "Aries": "Progresas cuando puedes tomar iniciativas, actuar con rapidez y abrir nuevos caminos. Los entornos demasiado pasivos o controladores pueden reducir tu motivación.",
      "Taurus": "Buscas una actividad estable, concreta y duradera. Avanzas mejor cuando tus esfuerzos producen resultados visibles y puedes construir progresivamente.",
      "Gemini": "Necesitas variedad, estimulación intelectual y comunicación. Las profesiones que permiten aprender, explicar, escribir o conectar a las personas pueden convenirte.",
      "Cancer": "Das lo mejor de ti cuando tu trabajo posee una dimensión humana, protectora o emocional. El sentimiento de utilidad y seguridad influye mucho en tu compromiso.",
      "Leo": "Necesitas creatividad, reconocimiento y cierta libertad de expresión. Puedes destacar cuando asumes una posición visible o un papel de liderazgo.",
      "Virgo": "Posees un sentido natural del análisis, la organización y la mejora. Eres eficaz en funciones que requieren precisión, método y atención a los detalles.",
      "Libra": "Trabajas bien en entornos basados en la cooperación, el equilibrio y la calidad de las relaciones. La diplomacia, la estética o la mediación pueden ser fortalezas.",
      "Scorpio": "Te atraen las situaciones complejas, estratégicas o transformadoras. Puedes destacar cuando el trabajo exige profundidad, discreción, investigación o capacidad para gestionar crisis.",
      "Sagittarius": "Necesitas crecimiento, movimiento y sentido. Los ámbitos relacionados con la enseñanza, los viajes, la transmisión o la exploración pueden alimentar tu motivación.",
      "Capricorn": "Buscas progresión, responsabilidad y construcción a largo plazo. Tu resistencia y tu sentido de la estructura favorecen las funciones de gestión o autoridad.",
      "Aquarius": "Necesitas independencia, innovación y libertad intelectual. Puedes destacar en ámbitos tecnológicos, colectivos, creativos o no convencionales.",
      "Pisces": "Tu intuición, imaginación y sensibilidad pueden expresarse en ámbitos creativos, humanos, espirituales o terapéuticos. Necesitas sentir que tu trabajo tiene significado."
    },
    "planetRoles": {
      "Sun": "El Sol describe tu necesidad de realización, de brillar y de construir una identidad profesional que se parezca a ti.",
      "Mercury": "Mercurio describe tu manera de pensar, comunicar, aprender y procesar la información en el trabajo.",
      "Mars": "Marte describe tu energía de acción, tu ambición, tu competitividad y tu manera de perseguir tus objetivos.",
      "Jupiter": "Júpiter describe tu potencial de expansión, tu confianza, tu capacidad de transmitir y los ámbitos en los que puedes pensar en grande.",
      "Saturn": "Saturno describe tu disciplina, tu sentido de la responsabilidad, tus desafíos de madurez y tu capacidad para construir a largo plazo."
    },
    "houseTexts": {
      "1": "Tu identidad personal y tu presencia influyen mucho en tu recorrido profesional. Necesitas sentirte directamente implicada en lo que haces.",
      "2": "Los ingresos, la estabilidad y el reconocimiento de tus competencias son motores importantes. Buscas construir una seguridad concreta.",
      "3": "La comunicación, el aprendizaje, la escritura, el comercio o los intercambios ocupan un lugar importante en tu actividad.",
      "4": "Tu vida profesional puede estar vinculada con el hogar, la familia, los bienes raíces o la creación de un entorno seguro.",
      "5": "La creatividad, la expresión personal, la enseñanza, el ocio o los proyectos independientes pueden desempeñar un papel importante.",
      "6": "El trabajo cotidiano, la organización, el servicio, los métodos y los hábitos profesionales están en el centro de tu progreso.",
      "7": "Las asociaciones, la clientela y las colaboraciones influyen mucho en tu éxito. Progresas mediante el intercambio y la cooperación.",
      "8": "Las finanzas compartidas, la psicología, la investigación, la transformación o la gestión de crisis pueden convertirse en ámbitos importantes.",
      "9": "La enseñanza, los viajes, los idiomas, el derecho, la publicación o la transmisión de conocimientos pueden apoyar tu vocación.",
      "10": "La carrera, la reputación y la realización pública ocupan un lugar central. Necesitas construir una trayectoria visible y reconocida.",
      "11": "Las redes, los proyectos colectivos, las comunidades y la visión de futuro pueden favorecer tu éxito.",
      "12": "Tu vocación puede incluir una dimensión discreta, intuitiva, artística, espiritual o orientada a ayudar a los demás."
    },
    "mcTexts": {
      "Aries": "Tu Medio Cielo en Aries indica una vocación basada en la iniciativa, la autonomía y el valor. Necesitas avanzar por ti misma y abrir tu propio camino.",
      "Taurus": "Tu Medio Cielo en Tauro favorece un progreso estable, paciente y concreto. Construyes tu reputación gracias a la fiabilidad y la constancia.",
      "Gemini": "Tu Medio Cielo en Géminis destaca la comunicación, la versatilidad y el aprendizaje. Varias actividades o funciones pueden formar parte de tu recorrido.",
      "Cancer": "Tu Medio Cielo en Cáncer vincula la vocación con la protección, el cuidado, el hogar o el acompañamiento humano.",
      "Leo": "Tu Medio Cielo en Leo favorece la visibilidad, la creatividad, el liderazgo y el reconocimiento de tus talentos.",
      "Virgo": "Tu Medio Cielo en Virgo pone el acento en la competencia, el servicio, el análisis y la mejora constante.",
      "Libra": "Tu Medio Cielo en Libra favorece las carreras relacionadas con las relaciones, la mediación, la estética, el derecho o la cooperación.",
      "Scorpio": "Tu Medio Cielo en Escorpio indica una vocación intensa, estratégica o transformadora. Puedes gestionar situaciones complejas con profundidad.",
      "Sagittarius": "Tu Medio Cielo en Sagitario favorece la enseñanza, los viajes, la transmisión, la publicación y los proyectos que amplían horizontes.",
      "Capricorn": "Tu Medio Cielo en Capricornio destaca la ambición, la paciencia y la capacidad de asumir progresivamente responsabilidades importantes.",
      "Aquarius": "Tu Medio Cielo en Acuario favorece la innovación, la tecnología, las redes, la independencia y las vías profesionales originales.",
      "Pisces": "Tu Medio Cielo en Piscis destaca la creatividad, la intuición, la ayuda, la espiritualidad y las actividades que requieren sensibilidad e imaginación."
    },
    "strength": "Tu potencial de realización asocia el Sol en {sun} y Júpiter en {jupiter}. El Sol muestra lo que buscas llegar a ser, mientras que Júpiter revela tu capacidad de expansión, confianza y transmisión.",
    "challenge": "Marte en {mars} describe tu manera de actuar, mientras que Saturno en {saturn} muestra tus responsabilidades y tus límites. Tu desafío consiste en avanzar con determinación sin quemar etapas, evitando que la prudencia se convierta en inmovilidad.",
    "synthesis": "Tu trayectoria profesional combina un Sol en {sun}, Mercurio en {mercury}, Marte en {mars} y Saturno en {saturn}. El Sol indica tu necesidad de realización, Mercurio tus competencias mentales, Marte tu capacidad de acción y Saturno tu aptitud para construir con el tiempo. {mc} Progresas más cuando tu actividad reúne sentido personal, autonomía, competencias concretas y posibilidades de evolución.",
    "mcSentence": "El Medio Cielo en {mc} da una dirección general a esta evolución."
  },
  "de": {
    "labels": {
      "premiumAnalysis": "Premium-Analyse",
      "vocationTitle": "Ihre berufliche Berufung",
      "vocationIntro": "Berufung entspricht nicht nur einem bestimmten Beruf. Sie beschreibt, wie Sie Ihre Fähigkeiten einsetzen, sich entwickeln, beitragen und in der Welt anerkannt werden möchten.",
      "midheavenFallbackTitle": "Ihr Medium Coeli",
      "professionalInfluence": "Beruflicher Einfluss",
      "successTitle": "Ihr Erfolg und Ihre Ambitionen",
      "successIntro": "Erfolg hängt davon ab, wie Sie Ihre Talente, Ihre Handlungsenergie, Ihr Vertrauen und Ihre Fähigkeit zur Ausdauer miteinander verbinden.",
      "development": "Entwicklung",
      "strengthTitle": "Ihre berufliche Stärke",
      "challengeTitle": "Ihre berufliche Herausforderung",
      "synthesisTitle": "Synthese Ihrer Berufung",
      "unavailableTag": "Daten nicht verfügbar",
      "unavailableText": "Die verfügbaren Daten erlauben keine genaue Analyse des beruflichen Einflusses von {planet}.",
      "unspecified": "nicht angegeben",
      "genericSignText": "Diese Position beschreibt eine persönliche Art zu arbeiten, Fortschritte zu machen und Ihre Ambitionen zu verfolgen.",
      "genericMidheavenText": "Das Medium Coeli beschreibt Ihre berufliche Richtung, Ihren Ruf und die Art, wie Sie anerkannt werden möchten.",
      "housePrefix": "Die Position in Haus {house} ergänzt Folgendes: ",
      "mcPrefix": "Medium Coeli in "
    },
    "planetNames": {
      "Sun": "Sonne",
      "Mercury": "Merkur",
      "Mars": "Mars",
      "Jupiter": "Jupiter",
      "Saturn": "Saturn"
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
      "Aries": "Sie kommen voran, wenn Sie Initiative ergreifen, schnell handeln und neue Wege eröffnen können. Zu passive oder kontrollierende Umfelder können Ihre Motivation mindern.",
      "Taurus": "Sie suchen eine stabile, konkrete und dauerhafte Tätigkeit. Sie kommen am besten voran, wenn Ihre Anstrengungen sichtbare Ergebnisse hervorbringen und Sie schrittweise aufbauen können.",
      "Gemini": "Sie brauchen Abwechslung, geistige Anregung und Kommunikation. Berufe, in denen Sie lernen, erklären, schreiben oder Menschen verbinden können, passen gut zu Ihnen.",
      "Cancer": "Sie geben Ihr Bestes, wenn Ihre Arbeit eine menschliche, schützende oder emotionale Dimension besitzt. Das Gefühl von Nützlichkeit und Sicherheit beeinflusst Ihr Engagement stark.",
      "Leo": "Sie brauchen Kreativität, Anerkennung und einen gewissen Freiraum für Selbstausdruck. Sie können besonders erfolgreich sein, wenn Sie eine sichtbare Position oder Führungsrolle übernehmen.",
      "Virgo": "Sie besitzen ein natürliches Gespür für Analyse, Organisation und Verbesserung. Sie arbeiten effektiv in Aufgaben, die Präzision, Methode und Aufmerksamkeit für Details verlangen.",
      "Libra": "Sie arbeiten gut in Umfeldern, die auf Kooperation, Ausgleich und Beziehungsqualität beruhen. Diplomatie, Ästhetik oder Vermittlung können Stärken sein.",
      "Scorpio": "Sie fühlen sich zu komplexen, strategischen oder transformierenden Situationen hingezogen. Sie können besonders erfolgreich sein, wenn die Arbeit Tiefe, Diskretion, Forschung oder Krisenmanagement verlangt.",
      "Sagittarius": "Sie brauchen Wachstum, Bewegung und Sinn. Bereiche wie Lehre, Reisen, Wissensvermittlung oder Exploration können Ihre Motivation nähren.",
      "Capricorn": "Sie suchen Fortschritt, Verantwortung und langfristigen Aufbau. Ihre Ausdauer und Ihr Sinn für Struktur unterstützen Führungs- oder Managementaufgaben.",
      "Aquarius": "Sie brauchen Unabhängigkeit, Innovation und geistige Freiheit. Sie können sich in technologischen, kollektiven, kreativen oder unkonventionellen Bereichen auszeichnen.",
      "Pisces": "Ihre Intuition, Vorstellungskraft und Sensibilität können sich in kreativen, menschlichen, spirituellen oder therapeutischen Bereichen entfalten. Sie müssen spüren, dass Ihre Arbeit Sinn besitzt."
    },
    "planetRoles": {
      "Sun": "Die Sonne beschreibt Ihr Bedürfnis nach Erfüllung, Ausstrahlung und einer beruflichen Identität, die zu Ihnen passt.",
      "Mercury": "Merkur beschreibt, wie Sie im Beruf denken, kommunizieren, lernen und Informationen verarbeiten.",
      "Mars": "Mars beschreibt Ihre Handlungsenergie, Ihren Ehrgeiz, Ihren Wettbewerbsgeist und die Art, wie Sie Ihre Ziele verfolgen.",
      "Jupiter": "Jupiter beschreibt Ihr Potenzial für Wachstum, Vertrauen, Vermittlung und die Bereiche, in denen Sie größer denken können.",
      "Saturn": "Saturn beschreibt Ihre Disziplin, Ihr Verantwortungsgefühl, Ihre Reifeaufgaben und Ihre Fähigkeit, langfristig aufzubauen."
    },
    "houseTexts": {
      "1": "Ihre persönliche Identität und Präsenz beeinflussen Ihren Berufsweg stark. Sie müssen sich unmittelbar mit dem verbunden fühlen, was Sie tun.",
      "2": "Einkommen, Stabilität und die Anerkennung Ihrer Fähigkeiten sind wichtige Antriebskräfte. Sie möchten konkrete Sicherheit aufbauen.",
      "3": "Kommunikation, Lernen, Schreiben, Handel oder Austausch spielen in Ihrer Tätigkeit eine wichtige Rolle.",
      "4": "Ihr Berufsleben kann mit Zuhause, Familie, Immobilien oder dem Aufbau eines sicheren Umfelds verbunden sein.",
      "5": "Kreativität, persönlicher Ausdruck, Lehre, Freizeit oder unabhängige Projekte können eine große Rolle spielen.",
      "6": "Alltägliche Arbeit, Organisation, Dienstleistung, Methoden und berufliche Gewohnheiten stehen im Zentrum Ihrer Entwicklung.",
      "7": "Partnerschaften, Kundschaft und Zusammenarbeit beeinflussen Ihren Erfolg stark. Sie kommen durch Austausch und Kooperation voran.",
      "8": "Gemeinsame Finanzen, Psychologie, Forschung, Transformation oder Krisenmanagement können zu wichtigen Bereichen werden.",
      "9": "Lehre, Reisen, Sprachen, Recht, Publikation oder Wissensvermittlung können Ihre Berufung unterstützen.",
      "10": "Karriere, Ruf und öffentliche Verwirklichung nehmen einen zentralen Platz ein. Sie müssen einen sichtbaren und anerkannten Weg aufbauen.",
      "11": "Netzwerke, Gemeinschaftsprojekte, Gruppen und Zukunftsvisionen können Ihren Erfolg fördern.",
      "12": "Ihre Berufung kann eine diskrete, intuitive, künstlerische, spirituelle oder helfende Dimension enthalten."
    },
    "mcTexts": {
      "Aries": "Ihr Medium Coeli im Widder weist auf eine Berufung hin, die auf Initiative, Autonomie und Mut beruht. Sie müssen selbstständig vorangehen und Ihren eigenen Weg eröffnen.",
      "Taurus": "Ihr Medium Coeli im Stier begünstigt einen stabilen, geduldigen und konkreten Fortschritt. Sie bauen Ihren Ruf durch Zuverlässigkeit und Beständigkeit auf.",
      "Gemini": "Ihr Medium Coeli in den Zwillingen betont Kommunikation, Vielseitigkeit und Lernen. Mehrere Tätigkeiten oder Rollen können Ihren Weg prägen.",
      "Cancer": "Ihr Medium Coeli im Krebs verbindet Berufung mit Schutz, Fürsorge, Zuhause oder menschlicher Begleitung.",
      "Leo": "Ihr Medium Coeli im Löwen begünstigt Sichtbarkeit, Kreativität, Führung und die Anerkennung Ihrer Talente.",
      "Virgo": "Ihr Medium Coeli in der Jungfrau betont Kompetenz, Dienst, Analyse und kontinuierliche Verbesserung.",
      "Libra": "Ihr Medium Coeli in der Waage unterstützt Berufe in den Bereichen Beziehungen, Vermittlung, Ästhetik, Recht oder Kooperation.",
      "Scorpio": "Ihr Medium Coeli im Skorpion weist auf eine intensive, strategische oder transformierende Berufung hin. Sie können komplexe Situationen mit Tiefe bewältigen.",
      "Sagittarius": "Ihr Medium Coeli im Schützen begünstigt Lehre, Reisen, Vermittlung, Publikation und Projekte, die Horizonte erweitern.",
      "Capricorn": "Ihr Medium Coeli im Steinbock betont Ehrgeiz, Geduld und die Fähigkeit, schrittweise wichtige Verantwortung zu übernehmen.",
      "Aquarius": "Ihr Medium Coeli im Wassermann begünstigt Innovation, Technologie, Netzwerke, Unabhängigkeit und originelle Berufswege.",
      "Pisces": "Ihr Medium Coeli in den Fischen hebt Kreativität, Intuition, Hilfe, Spiritualität und Tätigkeiten hervor, die Sensibilität und Vorstellungskraft verlangen."
    },
    "strength": "Ihr Erfüllungspotenzial verbindet die Sonne in {sun} mit Jupiter in {jupiter}. Die Sonne zeigt, was Sie werden möchten, während Jupiter Ihre Fähigkeit zu Wachstum, Vertrauen und Vermittlung offenbart.",
    "challenge": "Mars in {mars} beschreibt Ihre Handlungsweise, während Saturn in {saturn} Ihre Verantwortungen und Grenzen zeigt. Ihre Herausforderung besteht darin, entschlossen voranzugehen, ohne Schritte zu überspringen, und zugleich zu verhindern, dass Vorsicht zu Stillstand wird.",
    "synthesis": "Ihr Berufsweg verbindet eine Sonne in {sun}, Merkur in {mercury}, Mars in {mars} und Saturn in {saturn}. Die Sonne zeigt Ihr Bedürfnis nach Erfüllung, Merkur Ihre geistigen Fähigkeiten, Mars Ihre Handlungsfähigkeit und Saturn Ihre Fähigkeit, langfristig aufzubauen. {mc} Sie kommen am besten voran, wenn Ihre Tätigkeit persönlichen Sinn, Autonomie, konkrete Fähigkeiten und Entwicklungsmöglichkeiten vereint.",
    "mcSentence": "Das Medium Coeli in {mc} gibt dieser Entwicklung eine allgemeine Richtung."
  },
  "it": {
    "labels": {
      "premiumAnalysis": "Analisi Premium",
      "vocationTitle": "La tua vocazione professionale",
      "vocationIntro": "La vocazione non corrisponde soltanto a un mestiere preciso. Rappresenta il modo in cui desideri utilizzare le tue competenze, progredire, contribuire ed essere riconosciuta nel mondo.",
      "midheavenFallbackTitle": "Il tuo Medio Cielo",
      "professionalInfluence": "Influenza professionale",
      "successTitle": "Il tuo successo e le tue ambizioni",
      "successIntro": "Il successo dipende da come combini i tuoi talenti, la tua energia d'azione, la fiducia e la capacità di perseverare.",
      "development": "Sviluppo",
      "strengthTitle": "La tua forza professionale",
      "challengeTitle": "La tua sfida professionale",
      "synthesisTitle": "Sintesi della tua vocazione",
      "unavailableTag": "Dato non disponibile",
      "unavailableText": "I dati disponibili non consentono di analizzare con precisione l'influenza professionale di {planet}.",
      "unspecified": "non specificato",
      "genericSignText": "Questa posizione descrive un modo personale di lavorare, progredire e perseguire le tue ambizioni.",
      "genericMidheavenText": "Il Medio Cielo descrive la direzione professionale, la reputazione e il modo in cui desideri essere riconosciuta.",
      "housePrefix": "La sua posizione nella Casa {house} aggiunge questo elemento: ",
      "mcPrefix": "Medio Cielo in "
    },
    "planetNames": {
      "Sun": "Sole",
      "Mercury": "Mercurio",
      "Mars": "Marte",
      "Jupiter": "Giove",
      "Saturn": "Saturno"
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
      "Aries": "Progredisci quando puoi prendere iniziative, agire rapidamente e aprire nuove strade. Ambienti troppo passivi o controllanti possono ridurre la tua motivazione.",
      "Taurus": "Cerchi un'attività stabile, concreta e duratura. Avanzi meglio quando i tuoi sforzi producono risultati visibili e puoi costruire progressivamente.",
      "Gemini": "Hai bisogno di varietà, stimolazione intellettuale e comunicazione. Le professioni che permettono di imparare, spiegare, scrivere o collegare le persone possono essere adatte a te.",
      "Cancer": "Dai il meglio di te quando il tuo lavoro possiede una dimensione umana, protettiva o emotiva. Il senso di utilità e sicurezza influenza molto il tuo impegno.",
      "Leo": "Hai bisogno di creatività, riconoscimento e una certa libertà di espressione. Puoi eccellere quando assumi una posizione visibile o un ruolo di guida.",
      "Virgo": "Possiedi un senso naturale dell'analisi, dell'organizzazione e del miglioramento. Sei efficace nelle funzioni che richiedono precisione, metodo e attenzione ai dettagli.",
      "Libra": "Lavori bene in ambienti fondati sulla cooperazione, l'equilibrio e la qualità delle relazioni. Diplomazia, estetica o mediazione possono essere punti di forza.",
      "Scorpio": "Sei attratta da situazioni complesse, strategiche o trasformative. Puoi eccellere quando il lavoro richiede profondità, discrezione, ricerca o capacità di gestire le crisi.",
      "Sagittarius": "Hai bisogno di crescita, movimento e significato. I settori legati all'insegnamento, ai viaggi, alla trasmissione o all'esplorazione possono nutrire la tua motivazione.",
      "Capricorn": "Cerchi progresso, responsabilità e costruzione a lungo termine. La tua resistenza e il senso della struttura favoriscono funzioni di gestione o autorità.",
      "Aquarius": "Hai bisogno di indipendenza, innovazione e libertà intellettuale. Puoi distinguerti nei settori tecnologici, collettivi, creativi o non convenzionali.",
      "Pisces": "La tua intuizione, immaginazione e sensibilità possono esprimersi in ambiti creativi, umani, spirituali o terapeutici. Hai bisogno di sentire che il tuo lavoro possiede un significato."
    },
    "planetRoles": {
      "Sun": "Il Sole descrive il tuo bisogno di realizzazione, di brillare e di costruire un'identità professionale che ti rispecchi.",
      "Mercury": "Mercurio descrive il tuo modo di pensare, comunicare, imparare e trattare le informazioni nel lavoro.",
      "Mars": "Marte descrive la tua energia d'azione, l'ambizione, la competitività e il modo in cui persegui i tuoi obiettivi.",
      "Jupiter": "Giove descrive il tuo potenziale di espansione, la fiducia, la capacità di trasmettere e gli ambiti in cui puoi pensare più in grande.",
      "Saturn": "Saturno descrive la tua disciplina, il senso di responsabilità, le sfide di maturità e la capacità di costruire nel tempo."
    },
    "houseTexts": {
      "1": "La tua identità personale e la tua presenza influenzano fortemente il percorso professionale. Hai bisogno di sentirti direttamente coinvolta in ciò che fai.",
      "2": "Reddito, stabilità e riconoscimento delle tue competenze sono motori importanti. Cerchi di costruire una sicurezza concreta.",
      "3": "Comunicazione, apprendimento, scrittura, commercio o scambi occupano un posto importante nella tua attività.",
      "4": "La tua vita professionale può essere legata alla casa, alla famiglia, agli immobili o alla creazione di un ambiente sicuro.",
      "5": "Creatività, espressione personale, insegnamento, tempo libero o progetti indipendenti possono svolgere un ruolo importante.",
      "6": "Il lavoro quotidiano, l'organizzazione, il servizio, i metodi e le abitudini professionali sono al centro della tua progressione.",
      "7": "Partnership, clientela e collaborazioni influenzano fortemente il tuo successo. Progredisci attraverso lo scambio e la cooperazione.",
      "8": "Finanze condivise, psicologia, indagine, trasformazione o gestione delle crisi possono diventare ambiti importanti.",
      "9": "Insegnamento, viaggi, lingue, diritto, pubblicazione o trasmissione della conoscenza possono sostenere la tua vocazione.",
      "10": "Carriera, reputazione e realizzazione pubblica occupano un posto centrale. Hai bisogno di costruire una traiettoria visibile e riconosciuta.",
      "11": "Reti, progetti collettivi, comunità e visione del futuro possono favorire il tuo successo.",
      "12": "La tua vocazione può includere una dimensione discreta, intuitiva, artistica, spirituale o orientata all'aiuto degli altri."
    },
    "mcTexts": {
      "Aries": "Il tuo Medio Cielo in Ariete indica una vocazione fondata sull'iniziativa, l'autonomia e il coraggio. Hai bisogno di avanzare da sola e aprire la tua strada.",
      "Taurus": "Il tuo Medio Cielo in Toro favorisce una progressione stabile, paziente e concreta. Costruisci la tua reputazione grazie all'affidabilità e alla costanza.",
      "Gemini": "Il tuo Medio Cielo in Gemelli sottolinea comunicazione, versatilità e apprendimento. Diverse attività o ruoli possono comporre il tuo percorso.",
      "Cancer": "Il tuo Medio Cielo in Cancro collega la vocazione alla protezione, alla cura, alla casa o all'accompagnamento umano.",
      "Leo": "Il tuo Medio Cielo in Leone favorisce visibilità, creatività, leadership e riconoscimento dei tuoi talenti.",
      "Virgo": "Il tuo Medio Cielo in Vergine mette l'accento sulla competenza, il servizio, l'analisi e il miglioramento costante.",
      "Libra": "Il tuo Medio Cielo in Bilancia sostiene le carriere legate alle relazioni, alla mediazione, all'estetica, al diritto o alla cooperazione.",
      "Scorpio": "Il tuo Medio Cielo in Scorpione indica una vocazione intensa, strategica o trasformativa. Puoi gestire situazioni complesse con profondità.",
      "Sagittarius": "Il tuo Medio Cielo in Sagittario favorisce insegnamento, viaggi, trasmissione, pubblicazione e progetti che ampliano gli orizzonti.",
      "Capricorn": "Il tuo Medio Cielo in Capricorno sottolinea ambizione, pazienza e capacità di assumere progressivamente responsabilità importanti.",
      "Aquarius": "Il tuo Medio Cielo in Acquario favorisce innovazione, tecnologia, reti, indipendenza e percorsi professionali originali.",
      "Pisces": "Il tuo Medio Cielo in Pesci valorizza creatività, intuizione, aiuto, spiritualità e attività che richiedono sensibilità e immaginazione."
    },
    "strength": "Il tuo potenziale di realizzazione associa il Sole in {sun} e Giove in {jupiter}. Il Sole mostra ciò che cerchi di diventare, mentre Giove rivela la tua capacità di espansione, fiducia e trasmissione.",
    "challenge": "Marte in {mars} descrive il tuo modo di agire, mentre Saturno in {saturn} mostra le tue responsabilità e i tuoi limiti. La tua sfida consiste nell'avanzare con determinazione senza bruciare le tappe, evitando che la prudenza diventi immobilità.",
    "synthesis": "La tua traiettoria professionale combina un Sole in {sun}, Mercurio in {mercury}, Marte in {mars} e Saturno in {saturn}. Il Sole indica il tuo bisogno di realizzazione, Mercurio le tue competenze mentali, Marte la tua capacità d'azione e Saturno la tua capacità di costruire nel tempo. {mc} Progredisci maggiormente quando la tua attività unisce significato personale, autonomia, competenze concrete e possibilità di evoluzione.",
    "mcSentence": "Il Medio Cielo in {mc} dà una direzione generale a questa evoluzione."
  },
  "pt": {
    "labels": {
      "premiumAnalysis": "Análise Premium",
      "vocationTitle": "Sua vocação profissional",
      "vocationIntro": "A vocação não corresponde apenas a uma profissão específica. Ela representa a maneira como você deseja usar suas competências, progredir, contribuir e ser reconhecida no mundo.",
      "midheavenFallbackTitle": "Seu Meio do Céu",
      "professionalInfluence": "Influência profissional",
      "successTitle": "Seu sucesso e suas ambições",
      "successIntro": "O sucesso depende de como você combina seus talentos, sua energia de ação, sua confiança e sua capacidade de perseverar.",
      "development": "Desenvolvimento",
      "strengthTitle": "Sua força profissional",
      "challengeTitle": "Seu desafio profissional",
      "synthesisTitle": "Síntese da sua vocação",
      "unavailableTag": "Dado indisponível",
      "unavailableText": "Os dados disponíveis não permitem analisar com precisão a influência profissional de {planet}.",
      "unspecified": "não especificado",
      "genericSignText": "Esta posição descreve uma maneira pessoal de trabalhar, progredir e perseguir suas ambições.",
      "genericMidheavenText": "O Meio do Céu descreve a direção profissional, a reputação e a maneira como você deseja ser reconhecida.",
      "housePrefix": "Sua posição na Casa {house} acrescenta o seguinte: ",
      "mcPrefix": "Meio do Céu em "
    },
    "planetNames": {
      "Sun": "Sol",
      "Mercury": "Mercúrio",
      "Mars": "Marte",
      "Jupiter": "Júpiter",
      "Saturn": "Saturno"
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
      "Aries": "Você progride quando pode tomar iniciativas, agir rapidamente e abrir novos caminhos. Ambientes passivos ou controladores demais podem reduzir sua motivação.",
      "Taurus": "Você busca uma atividade estável, concreta e duradoura. Avança melhor quando seus esforços produzem resultados visíveis e quando pode construir gradualmente.",
      "Gemini": "Você precisa de variedade, estímulo intelectual e comunicação. Profissões que permitem aprender, explicar, escrever ou conectar pessoas podem combinar com você.",
      "Cancer": "Você dá o melhor de si quando seu trabalho possui uma dimensão humana, protetora ou emocional. O sentimento de utilidade e segurança influencia fortemente seu compromisso.",
      "Leo": "Você precisa de criatividade, reconhecimento e certa liberdade de expressão. Pode se destacar quando assume uma posição visível ou um papel de liderança.",
      "Virgo": "Você possui um senso natural de análise, organização e melhoria. É eficaz em funções que exigem precisão, método e atenção aos detalhes.",
      "Libra": "Você trabalha bem em ambientes baseados na cooperação, no equilíbrio e na qualidade das relações. Diplomacia, estética ou mediação podem ser forças.",
      "Scorpio": "Você se sente atraída por situações complexas, estratégicas ou transformadoras. Pode se destacar quando o trabalho exige profundidade, discrição, pesquisa ou capacidade de administrar crises.",
      "Sagittarius": "Você precisa de crescimento, movimento e sentido. Áreas ligadas ao ensino, viagens, transmissão ou exploração podem alimentar sua motivação.",
      "Capricorn": "Você busca progresso, responsabilidade e construção de longo prazo. Sua resistência e seu senso de estrutura favorecem funções de gestão ou autoridade.",
      "Aquarius": "Você precisa de independência, inovação e liberdade intelectual. Pode se destacar em áreas tecnológicas, coletivas, criativas ou não convencionais.",
      "Pisces": "Sua intuição, imaginação e sensibilidade podem se expressar em áreas criativas, humanas, espirituais ou terapêuticas. Você precisa sentir que seu trabalho possui significado."
    },
    "planetRoles": {
      "Sun": "O Sol descreve sua necessidade de realização, de brilhar e de construir uma identidade profissional que tenha a sua cara.",
      "Mercury": "Mercúrio descreve sua maneira de pensar, comunicar, aprender e processar informações no trabalho.",
      "Mars": "Marte descreve sua energia de ação, sua ambição, sua competitividade e a maneira como persegue seus objetivos.",
      "Jupiter": "Júpiter descreve seu potencial de expansão, sua confiança, sua capacidade de transmitir e as áreas em que pode pensar maior.",
      "Saturn": "Saturno descreve sua disciplina, seu senso de responsabilidade, seus desafios de maturidade e sua capacidade de construir no longo prazo."
    },
    "houseTexts": {
      "1": "Sua identidade pessoal e sua presença influenciam fortemente sua trajetória profissional. Você precisa sentir-se diretamente envolvida no que faz.",
      "2": "Renda, estabilidade e reconhecimento de suas competências são motores importantes. Você busca construir uma segurança concreta.",
      "3": "Comunicação, aprendizagem, escrita, comércio ou trocas ocupam um lugar importante em sua atividade.",
      "4": "Sua vida profissional pode estar ligada ao lar, à família, a imóveis ou à criação de um ambiente seguro.",
      "5": "Criatividade, expressão pessoal, ensino, lazer ou projetos independentes podem desempenhar um papel importante.",
      "6": "Trabalho cotidiano, organização, serviço, métodos e hábitos profissionais estão no centro do seu progresso.",
      "7": "Parcerias, clientela e colaborações influenciam fortemente seu sucesso. Você progride por meio da troca e da cooperação.",
      "8": "Finanças compartilhadas, psicologia, investigação, transformação ou gestão de crises podem se tornar áreas importantes.",
      "9": "Ensino, viagens, idiomas, direito, publicação ou transmissão de conhecimento podem apoiar sua vocação.",
      "10": "Carreira, reputação e realização pública ocupam um lugar central. Você precisa construir uma trajetória visível e reconhecida.",
      "11": "Redes, projetos coletivos, comunidades e visão de futuro podem favorecer seu sucesso.",
      "12": "Sua vocação pode incluir uma dimensão discreta, intuitiva, artística, espiritual ou voltada à ajuda aos outros."
    },
    "mcTexts": {
      "Aries": "Seu Meio do Céu em Áries indica uma vocação baseada em iniciativa, autonomia e coragem. Você precisa avançar por conta própria e abrir seu próprio caminho.",
      "Taurus": "Seu Meio do Céu em Touro favorece um progresso estável, paciente e concreto. Você constrói sua reputação por meio da confiabilidade e da constância.",
      "Gemini": "Seu Meio do Céu em Gêmeos enfatiza comunicação, versatilidade e aprendizagem. Várias atividades ou funções podem compor sua trajetória.",
      "Cancer": "Seu Meio do Céu em Câncer liga a vocação à proteção, ao cuidado, ao lar ou ao acompanhamento humano.",
      "Leo": "Seu Meio do Céu em Leão favorece visibilidade, criatividade, liderança e reconhecimento de seus talentos.",
      "Virgo": "Seu Meio do Céu em Virgem enfatiza competência, serviço, análise e melhoria constante.",
      "Libra": "Seu Meio do Céu em Libra favorece carreiras ligadas a relacionamentos, mediação, estética, direito ou cooperação.",
      "Scorpio": "Seu Meio do Céu em Escorpião indica uma vocação intensa, estratégica ou transformadora. Você pode administrar situações complexas com profundidade.",
      "Sagittarius": "Seu Meio do Céu em Sagitário favorece ensino, viagens, transmissão, publicação e projetos que ampliam horizontes.",
      "Capricorn": "Seu Meio do Céu em Capricórnio enfatiza ambição, paciência e a capacidade de assumir gradualmente responsabilidades importantes.",
      "Aquarius": "Seu Meio do Céu em Aquário favorece inovação, tecnologia, redes, independência e caminhos profissionais originais.",
      "Pisces": "Seu Meio do Céu em Peixes valoriza criatividade, intuição, ajuda, espiritualidade e atividades que exigem sensibilidade e imaginação."
    },
    "strength": "Seu potencial de realização associa o Sol em {sun} e Júpiter em {jupiter}. O Sol mostra o que você busca se tornar, enquanto Júpiter revela sua capacidade de expansão, confiança e transmissão.",
    "challenge": "Marte em {mars} descreve sua maneira de agir, enquanto Saturno em {saturn} mostra suas responsabilidades e seus limites. Seu desafio é avançar com determinação sem queimar etapas, evitando que a prudência se transforme em imobilidade.",
    "synthesis": "Sua trajetória profissional combina um Sol em {sun}, Mercúrio em {mercury}, Marte em {mars} e Saturno em {saturn}. O Sol indica sua necessidade de realização, Mercúrio suas competências mentais, Marte sua capacidade de ação e Saturno sua aptidão para construir ao longo do tempo. {mc} Você progride mais quando sua atividade reúne sentido pessoal, autonomia, competências concretas e possibilidade de evolução.",
    "mcSentence": "O Meio do Céu em {mc} dá uma direção geral a essa evolução."
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
      "const PREMIUM_CAREER_LOCALIZATION =",
    )
  ) {
    return source;
  }

  const c = COPY[locale];

  const runtime =
    "\nconst PREMIUM_CAREER_LOCALIZATION = " +
    JSON.stringify(c, null, 2) +
    " as const;\n" +
    "const PREMIUM_CAREER_CANONICAL_SIGN = " +
    JSON.stringify(CANONICAL_SIGN, null, 2) +
    " as const;\n\n" +
    String.raw`
function fillPremiumCareerTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(
    /\{([a-z0-9]+)\}/gi,
    (_full, key: string) =>
      values[key] ?? "",
  );
}

function getPremiumCareerCanonicalSign(
  sign?: string,
): string | null {
  if (!sign) {
    return null;
  }

  const map =
    PREMIUM_CAREER_CANONICAL_SIGN as Record<
      string,
      string
    >;

  return map[sign] || sign;
}

function getPremiumCareerSignName(
  sign?: string,
): string {
  const canonical =
    getPremiumCareerCanonicalSign(sign);

  if (!canonical) {
    return PREMIUM_CAREER_LOCALIZATION
      .labels.unspecified;
  }

  const names =
    PREMIUM_CAREER_LOCALIZATION
      .signNames as Record<string, string>;

  return names[canonical] || canonical;
}

function getPremiumCareerPlanetName(
  name: CareerPlanetName,
): string {
  const names =
    PREMIUM_CAREER_LOCALIZATION
      .planetNames as Record<string, string>;

  return names[name] || name;
}

function getPremiumCareerHouseText(
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
    PREMIUM_CAREER_LOCALIZATION
      .houseTexts as Record<string, string>;

  const houseText =
    texts[String(house)];

  if (!houseText) {
    return "";
  }

  return (
    " " +
    fillPremiumCareerTemplate(
      PREMIUM_CAREER_LOCALIZATION
        .labels.housePrefix,
      {
        house: String(house),
      },
    ) +
    houseText
  );
}

function createPremiumCareerInsight(
  planets: PremiumPlanet[],
  planetName: CareerPlanetName,
): CareerInsight {
  const planet =
    getPlanet(
      planets,
      planetName,
    );

  const translatedName =
    getPremiumCareerPlanetName(
      planetName,
    );

  if (!planet) {
    return {
      title: translatedName,
      tag:
        PREMIUM_CAREER_LOCALIZATION
          .labels.unavailableTag,
      text:
        fillPremiumCareerTemplate(
          PREMIUM_CAREER_LOCALIZATION
            .labels.unavailableText,
          {
            planet: translatedName,
          },
        ),
    };
  }

  const canonical =
    getPremiumCareerCanonicalSign(
      planet.sign,
    );

  const signName =
    getPremiumCareerSignName(
      planet.sign,
    );

  const signTexts =
    PREMIUM_CAREER_LOCALIZATION
      .signTexts as Record<string, string>;

  const signText =
    (canonical &&
      signTexts[canonical]) ||
    PREMIUM_CAREER_LOCALIZATION
      .labels.genericSignText;

  const roles =
    PREMIUM_CAREER_LOCALIZATION
      .planetRoles as Record<string, string>;

  return {
    title:
      translatedName +
      " " +
      "in" +
      " " +
      signName,
    tag:
      roles[planetName] ||
      PREMIUM_CAREER_LOCALIZATION
        .labels.professionalInfluence,
    text:
      signText +
      getPremiumCareerHouseText(
        planet,
      ),
  };
}

function getPremiumCareerMidheaven(
  midheaven?: number,
): {
  sign: string | null;
  text: string;
} {
  if (
    typeof midheaven !== "number" ||
    !Number.isFinite(midheaven)
  ) {
    return {
      sign: null,
      text:
        PREMIUM_CAREER_LOCALIZATION
          .labels.genericMidheavenText,
    };
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
    ((midheaven % 360) + 360) % 360;

  const canonical =
    signs[
      Math.floor(
        normalized / 30,
      )
    ] || null;

  if (!canonical) {
    return {
      sign: null,
      text:
        PREMIUM_CAREER_LOCALIZATION
          .labels.genericMidheavenText,
    };
  }

  const mcTexts =
    PREMIUM_CAREER_LOCALIZATION
      .mcTexts as Record<string, string>;

  return {
    sign:
      getPremiumCareerSignName(
        canonical,
      ),
    text:
      mcTexts[canonical] ||
      PREMIUM_CAREER_LOCALIZATION
        .labels.genericMidheavenText,
  };
}

function getPremiumCareerMidheavenTitle(
  sign: string | null,
): string {
  if (!sign) {
    return PREMIUM_CAREER_LOCALIZATION
      .labels.midheavenFallbackTitle;
  }

  return (
    PREMIUM_CAREER_LOCALIZATION
      .labels.mcPrefix +
    sign
  );
}

function getPremiumCareerStrength(
  sun: PremiumPlanet | null,
  jupiter: PremiumPlanet | null,
): string {
  return fillPremiumCareerTemplate(
    PREMIUM_CAREER_LOCALIZATION
      .strength,
    {
      sun:
        getPremiumCareerSignName(
          sun?.sign,
        ),
      jupiter:
        getPremiumCareerSignName(
          jupiter?.sign,
        ),
    },
  );
}

function getPremiumCareerChallenge(
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null,
): string {
  return fillPremiumCareerTemplate(
    PREMIUM_CAREER_LOCALIZATION
      .challenge,
    {
      mars:
        getPremiumCareerSignName(
          mars?.sign,
        ),
      saturn:
        getPremiumCareerSignName(
          saturn?.sign,
        ),
    },
  );
}

function createPremiumCareerSynthesis(
  sun: PremiumPlanet | null,
  mercury: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null,
  midheavenSign: string | null,
): string {
  const mc =
    midheavenSign
      ? fillPremiumCareerTemplate(
          PREMIUM_CAREER_LOCALIZATION
            .mcSentence,
          {
            mc: midheavenSign,
          },
        )
      : "";

  return fillPremiumCareerTemplate(
    PREMIUM_CAREER_LOCALIZATION
      .synthesis,
    {
      sun:
        getPremiumCareerSignName(
          sun?.sign,
        ),
      mercury:
        getPremiumCareerSignName(
          mercury?.sign,
        ),
      mars:
        getPremiumCareerSignName(
          mars?.sign,
        ),
      saturn:
        getPremiumCareerSignName(
          saturn?.sign,
        ),
      mc,
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

export function localizePremiumCareer(
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
    "getHouseText",
    "function createCareerInsight(",
    `
function getHouseText(
  planet: PremiumPlanet | null,
): string {
  return getPremiumCareerHouseText(
    planet,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "createCareerInsight",
    "function getMidheavenText(",
    `
function createCareerInsight(
  planets: PremiumPlanet[],
  planetName: CareerPlanetName,
): CareerInsight {
  return createPremiumCareerInsight(
    planets,
    planetName,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "getMidheavenText",
    "function getCareerStrength(",
    `
function getMidheavenText(
  midheaven?: number,
): {
  sign: string | null;
  text: string;
} {
  return getPremiumCareerMidheaven(
    midheaven,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "getCareerStrength",
    "function getCareerChallenge(",
    `
function getCareerStrength(
  sun: PremiumPlanet | null,
  jupiter: PremiumPlanet | null,
): string {
  return getPremiumCareerStrength(
    sun,
    jupiter,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "getCareerChallenge",
    "function createCareerSynthesis(",
    `
function getCareerChallenge(
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null,
): string {
  return getPremiumCareerChallenge(
    mars,
    saturn,
  );
}
`,
  );

  out = replaceFunctionBlock(
    out,
    "createCareerSynthesis",
    "export default function PdfCareer",
    `
function createCareerSynthesis(
  sun: PremiumPlanet | null,
  mercury: PremiumPlanet | null,
  mars: PremiumPlanet | null,
  saturn: PremiumPlanet | null,
  midheavenSign: string | null,
): string {
  return createPremiumCareerSynthesis(
    sun,
    mercury,
    mars,
    saturn,
    midheavenSign,
  );
}
`,
  );

  const literals: Array<
    [string, string]
  > = [
    [
      "Analyse Premium",
      c.labels.premiumAnalysis,
    ],
    [
      "Votre vocation professionnelle",
      c.labels.vocationTitle,
    ],
    [
      "La vocation ne correspond pas uniquement\n            à un métier précis. Elle représente la\n            manière dont vous souhaitez utiliser vos\n            compétences, progresser, contribuer et\n            être reconnue dans le monde.",
      c.labels.vocationIntro,
    ],
    [
      "Influence professionnelle",
      c.labels.professionalInfluence,
    ],
    [
      "Votre réussite et vos ambitions",
      c.labels.successTitle,
    ],
    [
      "La réussite dépend de la manière dont vous\n            combinez vos talents, votre énergie\n            d’action, votre confiance et votre capacité\n            à persévérer.",
      c.labels.successIntro,
    ],
    [
      "Développement",
      c.labels.development,
    ],
    [
      "Votre force professionnelle",
      c.labels.strengthTitle,
    ],
    [
      "Votre défi professionnel",
      c.labels.challengeTitle,
    ],
    [
      "Synthèse de votre vocation",
      c.labels.synthesisTitle,
    ],
  ];

  for (
    const [
      from,
      to,
    ] of literals
  ) {
    out = replaceText(
      out,
      from,
      to,
    );
  }

  out = out.replace(
    /\{midheaven\.sign\s*\?\s*`Milieu du Ciel en \$\{midheaven\.sign\}`\s*:\s*"Votre Milieu du Ciel"\}/g,
    "{getPremiumCareerMidheavenTitle(midheaven.sign)}",
  );

  return out;
}
