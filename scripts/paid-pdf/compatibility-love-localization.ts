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

type LocaleData = {
  text: TranslationMap;
  jsx: TranslationMap;
  signs: TranslationMap;
  planets: TranslationMap;
  aspects: TranslationMap;
  elements: TranslationMap;
  templates: {
    sameVenus: string;
    sameElementVenus: string;
    complementaryVenus: string;
    differentVenus: string;
    sameMars: string;
    sameElementMars: string;
    complementaryMars: string;
    differentMars: string;
  };
};

type Row = [
  fr: string,
  en: string,
  es: string,
  de: string,
  it: string,
  pt: string,
];

const LOCALE_INDEX: Record<
  NonFrenchLocale,
  1 | 2 | 3 | 4 | 5
> = {
  en: 1,
  es: 2,
  de: 3,
  it: 4,
  pt: 5,
};

function rowsToMap(
  rows: Row[],
  locale: NonFrenchLocale,
): TranslationMap {
  const index = LOCALE_INDEX[locale];

  return Object.fromEntries(
    rows.map(
      (row) => [
        row[0],
        row[index],
      ],
    ),
  );
}

/* =========================================================
   SIGNES
========================================================= */

const SIGN_ROWS: Row[] = [
  ["Non précisé", "Not specified", "No especificado", "Nicht angegeben", "Non specificato", "Não especificado"],
  ["Bélier", "Aries", "Aries", "Widder", "Ariete", "Áries"],
  ["Taureau", "Taurus", "Tauro", "Stier", "Toro", "Touro"],
  ["Gémeaux", "Gemini", "Géminis", "Zwillinge", "Gemelli", "Gêmeos"],
  ["Cancer", "Cancer", "Cáncer", "Krebs", "Cancro", "Câncer"],
  ["Lion", "Leo", "Leo", "Löwe", "Leone", "Leão"],
  ["Vierge", "Virgo", "Virgo", "Jungfrau", "Vergine", "Virgem"],
  ["Balance", "Libra", "Libra", "Waage", "Bilancia", "Libra"],
  ["Scorpion", "Scorpio", "Escorpio", "Skorpion", "Scorpione", "Escorpião"],
  ["Sagittaire", "Sagittarius", "Sagitario", "Schütze", "Sagittario", "Sagitário"],
  ["Capricorne", "Capricorn", "Capricornio", "Steinbock", "Capricorno", "Capricórnio"],
  ["Verseau", "Aquarius", "Acuario", "Wassermann", "Acquario", "Aquário"],
  ["Poissons", "Pisces", "Piscis", "Fische", "Pesci", "Peixes"],

  /* Alias anglais possibles dans les données */
  ["Aries", "Aries", "Aries", "Widder", "Ariete", "Áries"],
  ["Taurus", "Taurus", "Tauro", "Stier", "Toro", "Touro"],
  ["Gemini", "Gemini", "Géminis", "Zwillinge", "Gemelli", "Gêmeos"],
  ["Leo", "Leo", "Leo", "Löwe", "Leone", "Leão"],
  ["Virgo", "Virgo", "Virgo", "Jungfrau", "Vergine", "Virgem"],
  ["Libra", "Libra", "Libra", "Waage", "Bilancia", "Libra"],
  ["Scorpio", "Scorpio", "Escorpio", "Skorpion", "Scorpione", "Escorpião"],
  ["Sagittarius", "Sagittarius", "Sagitario", "Schütze", "Sagittario", "Sagitário"],
  ["Capricorn", "Capricorn", "Capricornio", "Steinbock", "Capricorno", "Capricórnio"],
  ["Aquarius", "Aquarius", "Acuario", "Wassermann", "Acquario", "Aquário"],
  ["Pisces", "Pisces", "Piscis", "Fische", "Pesci", "Peixes"],
];

/* =========================================================
   PLANÈTES
========================================================= */

const PLANET_ROWS: Row[] = [
  ["Soleil", "Sun", "Sol", "Sonne", "Sole", "Sol"],
  ["Lune", "Moon", "Luna", "Mond", "Luna", "Lua"],
  ["Mercure", "Mercury", "Mercurio", "Merkur", "Mercurio", "Mercúrio"],
  ["Vénus", "Venus", "Venus", "Venus", "Venere", "Vênus"],
  ["Mars", "Mars", "Marte", "Mars", "Marte", "Marte"],
  ["Jupiter", "Jupiter", "Júpiter", "Jupiter", "Giove", "Júpiter"],
  ["Saturne", "Saturn", "Saturno", "Saturn", "Saturno", "Saturno"],
  ["Uranus", "Uranus", "Urano", "Uranus", "Urano", "Urano"],
  ["Neptune", "Neptune", "Neptuno", "Neptun", "Nettuno", "Netuno"],
  ["Pluton", "Pluto", "Plutón", "Pluto", "Plutone", "Plutão"],

  /* Alias anglais */
  ["Sun", "Sun", "Sol", "Sonne", "Sole", "Sol"],
  ["Moon", "Moon", "Luna", "Mond", "Luna", "Lua"],
  ["Mercury", "Mercury", "Mercurio", "Merkur", "Mercurio", "Mercúrio"],
  ["Venus", "Venus", "Venus", "Venus", "Venere", "Vênus"],
  ["Saturn", "Saturn", "Saturno", "Saturn", "Saturno", "Saturno"],
  ["Pluto", "Pluto", "Plutón", "Pluto", "Plutone", "Plutão"],
];

/* =========================================================
   ASPECTS
========================================================= */

const ASPECT_ROWS: Row[] = [
  ["Conjonction", "Conjunction", "Conjunción", "Konjunktion", "Congiunzione", "Conjunção"],
  ["Opposition", "Opposition", "Oposición", "Opposition", "Opposizione", "Oposição"],
  ["Trigone", "Trine", "Trígono", "Trigon", "Trigono", "Trígono"],
  ["Carré", "Square", "Cuadratura", "Quadrat", "Quadratura", "Quadratura"],
  ["Sextile", "Sextile", "Sextil", "Sextil", "Sestile", "Sextil"],
  ["Quinconce", "Quincunx", "Quincuncio", "Quinkunx", "Quinconce", "Quincúncio"],
];

/* =========================================================
   ÉLÉMENTS
========================================================= */

const ELEMENT_ROWS: Row[] = [
  ["Feu", "Fire", "Fuego", "Feuer", "Fuoco", "Fogo"],
  ["Terre", "Earth", "Tierra", "Erde", "Terra", "Terra"],
  ["Air", "Air", "Aire", "Luft", "Aria", "Ar"],
  ["Eau", "Water", "Agua", "Wasser", "Acqua", "Água"],
];

/* =========================================================
   TEXTES FIXES + TEXTES RETOURNÉS PAR LES FONCTIONS
========================================================= */

const TEXT_ROWS: Row[] = [
  ["Première personne", "First person", "Primera persona", "Erste Person", "Prima persona", "Primeira pessoa"],
  ["Deuxième personne", "Second person", "Segunda persona", "Zweite Person", "Seconda persona", "Segunda pessoa"],
  ["la première personne", "the first person", "la primera persona", "die erste Person", "la prima persona", "a primeira pessoa"],
  ["la deuxième personne", "the second person", "la segunda persona", "die zweite Person", "la seconda persona", "a segunda pessoa"],
  ["Luna Astralis • Rapport de synastrie", "Luna Astralis • Synastry report", "Luna Astralis • Informe de sinastría", "Luna Astralis • Synastrie-Bericht", "Luna Astralis • Rapporto di sinastria", "Luna Astralis • Relatório de sinastria"],

  ["Aime avec spontanéité, enthousiasme et franchise. Le sentiment doit rester vivant, stimulant et porté par un élan sincère.", "Loves with spontaneity, enthusiasm, and honesty. Feelings need to remain alive, stimulating, and driven by genuine momentum.", "Ama con espontaneidad, entusiasmo y franqueza. El sentimiento necesita mantenerse vivo, estimulante e impulsado por un entusiasmo sincero.", "Liebt spontan, begeistert und offen. Gefühle sollen lebendig, anregend und von ehrlichem Schwung getragen bleiben.", "Ama con spontaneità, entusiasmo e sincerità. Il sentimento deve restare vivo, stimolante e sostenuto da uno slancio autentico.", "Ama com espontaneidade, entusiasmo e franqueza. O sentimento precisa permanecer vivo, estimulante e sustentado por um impulso sincero."],
  ["Aime avec fidélité, sensualité et constance. La sécurité, la présence et les gestes concrets nourrissent profondément son attachement.", "Loves with loyalty, sensuality, and consistency. Security, presence, and tangible gestures deeply nurture attachment.", "Ama con fidelidad, sensualidad y constancia. La seguridad, la presencia y los gestos concretos alimentan profundamente su apego.", "Liebt treu, sinnlich und beständig. Sicherheit, Präsenz und konkrete Gesten nähren die Bindung besonders stark.", "Ama con fedeltà, sensualità e costanza. Sicurezza, presenza e gesti concreti nutrono profondamente l'attaccamento.", "Ama com fidelidade, sensualidade e constância. Segurança, presença e gestos concretos alimentam profundamente o vínculo."],
  ["Aime par les mots, la curiosité et la légèreté. L’échange intellectuel et la variété entretiennent son intérêt amoureux.", "Loves through words, curiosity, and lightness. Intellectual exchange and variety sustain romantic interest.", "Ama a través de las palabras, la curiosidad y la ligereza. El intercambio intelectual y la variedad mantienen su interés amoroso.", "Liebt durch Worte, Neugier und Leichtigkeit. Geistiger Austausch und Abwechslung halten das romantische Interesse lebendig.", "Ama attraverso le parole, la curiosità e la leggerezza. Lo scambio intellettuale e la varietà mantengono vivo l'interesse amoroso.", "Ama através das palavras, da curiosidade e da leveza. A troca intelectual e a variedade mantêm o interesse amoroso."],
  ["Aime avec douceur, protection et sensibilité. La confiance émotionnelle et le sentiment de former un foyer sont essentiels.", "Loves with tenderness, protectiveness, and sensitivity. Emotional trust and the feeling of creating a home together are essential.", "Ama con ternura, protección y sensibilidad. La confianza emocional y la sensación de formar un hogar son esenciales.", "Liebt zärtlich, beschützend und sensibel. Emotionales Vertrauen und das Gefühl eines gemeinsamen Zuhauses sind wesentlich.", "Ama con dolcezza, protezione e sensibilità. La fiducia emotiva e la sensazione di creare una casa insieme sono essenziali.", "Ama com ternura, proteção e sensibilidade. A confiança emocional e a sensação de formar um lar são essenciais."],
  ["Aime avec chaleur, générosité et fierté. Cette Vénus recherche une relation expressive, loyale et valorisante.", "Loves with warmth, generosity, and pride. This Venus seeks an expressive, loyal, and affirming relationship.", "Ama con calidez, generosidad y orgullo. Esta Venus busca una relación expresiva, leal y que valore a ambos.", "Liebt warmherzig, großzügig und stolz. Diese Venus sucht eine ausdrucksstarke, loyale und wertschätzende Beziehung.", "Ama con calore, generosità e orgoglio. Questa Venere cerca una relazione espressiva, leale e valorizzante.", "Ama com calor, generosidade e orgulho. Esta Vênus procura uma relação expressiva, leal e valorizadora."],
  ["Aime par l’attention, le service et la fiabilité. Les preuves discrètes comptent souvent davantage que les grandes déclarations.", "Loves through attentiveness, helpfulness, and reliability. Quiet demonstrations often matter more than grand declarations.", "Ama mediante la atención, la ayuda y la fiabilidad. Las demostraciones discretas suelen importar más que las grandes declaraciones.", "Liebt durch Aufmerksamkeit, Hilfsbereitschaft und Verlässlichkeit. Leise Beweise zählen oft mehr als große Erklärungen.", "Ama attraverso attenzione, disponibilità e affidabilità. Le dimostrazioni discrete contano spesso più delle grandi dichiarazioni.", "Ama através da atenção, do cuidado e da confiabilidade. Demonstrações discretas costumam valer mais do que grandes declarações."],
  ["Aime avec charme, diplomatie et romantisme. L’harmonie, le respect et la beauté du lien occupent une place centrale.", "Loves with charm, diplomacy, and romance. Harmony, respect, and the beauty of the bond are central.", "Ama con encanto, diplomacia y romanticismo. La armonía, el respeto y la belleza del vínculo ocupan un lugar central.", "Liebt charmant, diplomatisch und romantisch. Harmonie, Respekt und die Schönheit der Verbindung stehen im Mittelpunkt.", "Ama con fascino, diplomazia e romanticismo. Armonia, rispetto e bellezza del legame occupano un posto centrale.", "Ama com charme, diplomacia e romantismo. Harmonia, respeito e beleza do vínculo ocupam um lugar central."],
  ["Aime avec intensité, profondeur et exclusivité. La loyauté et la vérité émotionnelle sont indispensables à son abandon.", "Loves with intensity, depth, and exclusivity. Loyalty and emotional truth are essential for fully opening up.", "Ama con intensidad, profundidad y exclusividad. La lealtad y la verdad emocional son indispensables para entregarse plenamente.", "Liebt intensiv, tief und exklusiv. Loyalität und emotionale Wahrhaftigkeit sind notwendig, um sich vollständig zu öffnen.", "Ama con intensità, profondità ed esclusività. Lealtà e verità emotiva sono indispensabili per aprirsi pienamente.", "Ama com intensidade, profundidade e exclusividade. Lealdade e verdade emocional são indispensáveis para se entregar plenamente."],
  ["Aime avec liberté, enthousiasme et sincérité. Le couple doit offrir de l’espace, des projets et un horizon commun.", "Loves with freedom, enthusiasm, and sincerity. The relationship needs space, shared projects, and a common horizon.", "Ama con libertad, entusiasmo y sinceridad. La relación necesita espacio, proyectos y un horizonte común.", "Liebt frei, begeistert und aufrichtig. Die Beziehung braucht Raum, Projekte und einen gemeinsamen Horizont.", "Ama con libertà, entusiasmo e sincerità. La relazione deve offrire spazio, progetti e un orizzonte comune.", "Ama com liberdade, entusiasmo e sinceridade. A relação precisa oferecer espaço, projetos e um horizonte comum."],
  ["Aime avec sérieux, prudence et engagement. La stabilité et la capacité de construire dans le temps définissent son attachement.", "Loves with seriousness, caution, and commitment. Stability and the ability to build over time define attachment.", "Ama con seriedad, prudencia y compromiso. La estabilidad y la capacidad de construir a largo plazo definen su apego.", "Liebt ernsthaft, vorsichtig und verbindlich. Stabilität und die Fähigkeit, langfristig aufzubauen, prägen die Bindung.", "Ama con serietà, prudenza e impegno. Stabilità e capacità di costruire nel tempo definiscono l'attaccamento.", "Ama com seriedade, prudência e compromisso. Estabilidade e capacidade de construir ao longo do tempo definem o vínculo."],
  ["Aime avec indépendance, complicité et originalité. L’amitié, la liberté et l’authenticité soutiennent le sentiment.", "Loves with independence, companionship, and originality. Friendship, freedom, and authenticity support romantic feelings.", "Ama con independencia, complicidad y originalidad. La amistad, la libertad y la autenticidad sostienen el sentimiento.", "Liebt unabhängig, freundschaftlich und originell. Freundschaft, Freiheit und Authentizität tragen die Gefühle.", "Ama con indipendenza, complicità e originalità. Amicizia, libertà e autenticità sostengono il sentimento.", "Ama com independência, cumplicidade e originalidade. Amizade, liberdade e autenticidade sustentam o sentimento."],
  ["Aime avec empathie, imagination et dévouement. La connexion émotionnelle et le rêve partagé donnent tout son sens à la relation.", "Loves with empathy, imagination, and devotion. Emotional connection and shared dreams give the relationship its meaning.", "Ama con empatía, imaginación y entrega. La conexión emocional y los sueños compartidos dan sentido a la relación.", "Liebt einfühlsam, fantasievoll und hingebungsvoll. Emotionale Verbundenheit und gemeinsame Träume geben der Beziehung Sinn.", "Ama con empatia, immaginazione e dedizione. La connessione emotiva e i sogni condivisi danno significato alla relazione.", "Ama com empatia, imaginação e dedicação. A conexão emocional e os sonhos partilhados dão sentido à relação."],
  ["Les données disponibles ne permettent pas encore de préciser entièrement sa manière d’aimer.", "The available data does not yet allow a complete description of this person's way of loving.", "Los datos disponibles aún no permiten describir completamente su manera de amar.", "Die verfügbaren Daten erlauben noch keine vollständige Beschreibung der persönlichen Art zu lieben.", "I dati disponibili non permettono ancora di descrivere completamente il suo modo di amare.", "Os dados disponíveis ainda não permitem descrever completamente a sua maneira de amar."],

  ["Désir direct, rapide et conquérant. L’initiative, la spontanéité et le défi éveillent fortement son énergie.", "Direct, quick, and conquering desire. Initiative, spontaneity, and challenge strongly awaken this energy.", "Deseo directo, rápido y conquistador. La iniciativa, la espontaneidad y el desafío despiertan intensamente su energía.", "Direktes, schnelles und eroberndes Verlangen. Initiative, Spontaneität und Herausforderung wecken diese Energie stark.", "Desiderio diretto, rapido e conquistatore. Iniziativa, spontaneità e sfida risvegliano fortemente questa energia.", "Desejo direto, rápido e conquistador. Iniciativa, espontaneidade e desafio despertam fortemente esta energia."],
  ["Désir sensuel, constant et physique. Le rythme lent, la confiance et le confort favorisent l’abandon.", "Sensual, steady, and physical desire. A slower pace, trust, and comfort encourage openness.", "Deseo sensual, constante y físico. Un ritmo lento, la confianza y la comodidad favorecen la entrega.", "Sinnliches, beständiges und körperliches Verlangen. Ein langsamer Rhythmus, Vertrauen und Komfort fördern das Sich-Öffnen.", "Desiderio sensuale, costante e fisico. Un ritmo lento, fiducia e comfort favoriscono l'apertura.", "Desejo sensual, constante e físico. Um ritmo lento, confiança e conforto favorecem a entrega."],
  ["Désir curieux, joueur et mental. La parole, l’humour et la nouveauté stimulent l’attirance.", "Curious, playful, and mental desire. Conversation, humor, and novelty stimulate attraction.", "Deseo curioso, lúdico y mental. La conversación, el humor y la novedad estimulan la atracción.", "Neugieriges, spielerisches und geistiges Verlangen. Gespräch, Humor und Neues stimulieren die Anziehung.", "Desiderio curioso, giocoso e mentale. Conversazione, umorismo e novità stimolano l'attrazione.", "Desejo curioso, lúdico e mental. Conversa, humor e novidade estimulam a atração."],
  ["Désir protecteur, émotionnel et réceptif. La sécurité affective conditionne fortement l’ouverture intime.", "Protective, emotional, and receptive desire. Emotional security strongly influences intimate openness.", "Deseo protector, emocional y receptivo. La seguridad afectiva influye profundamente en la apertura íntima.", "Beschützendes, emotionales und empfängliches Verlangen. Emotionale Sicherheit beeinflusst die intime Öffnung stark.", "Desiderio protettivo, emotivo e ricettivo. La sicurezza affettiva influenza fortemente l'apertura intima.", "Desejo protetor, emocional e receptivo. A segurança afetiva influencia fortemente a abertura íntima."],
  ["Désir chaleureux, théâtral et passionné. La reconnaissance et l’admiration renforcent son élan.", "Warm, expressive, and passionate desire. Recognition and admiration strengthen this drive.", "Deseo cálido, expresivo y apasionado. El reconocimiento y la admiración refuerzan su impulso.", "Warmes, ausdrucksstarkes und leidenschaftliches Verlangen. Anerkennung und Bewunderung verstärken den Impuls.", "Desiderio caloroso, espressivo e passionale. Riconoscimento e ammirazione rafforzano lo slancio.", "Desejo caloroso, expressivo e apaixonado. Reconhecimento e admiração reforçam o impulso."],
  ["Désir attentif, précis et réservé. La confiance se développe par les détails, le soin et la présence réelle.", "Attentive, precise, and reserved desire. Trust develops through details, care, and genuine presence.", "Deseo atento, preciso y reservado. La confianza se desarrolla mediante los detalles, el cuidado y la presencia auténtica.", "Aufmerksames, präzises und zurückhaltendes Verlangen. Vertrauen wächst durch Details, Fürsorge und echte Präsenz.", "Desiderio attento, preciso e riservato. La fiducia cresce attraverso dettagli, cura e presenza autentica.", "Desejo atento, preciso e reservado. A confiança cresce através dos detalhes, do cuidado e da presença verdadeira."],
  ["Désir charmeur, relationnel et harmonieux. La séduction et l’équilibre du partage sont essentiels.", "Charming, relational, and harmonious desire. Seduction and balance in the relationship are essential.", "Deseo encantador, relacional y armonioso. La seducción y el equilibrio en el intercambio son esenciales.", "Charmantes, beziehungsorientiertes und harmonisches Verlangen. Verführung und ein ausgewogenes Miteinander sind wesentlich.", "Desiderio affascinante, relazionale e armonioso. Seduzione ed equilibrio nella condivisione sono essenziali.", "Desejo encantador, relacional e harmonioso. Sedução e equilíbrio na partilha são essenciais."],
  ["Désir magnétique, intense et profond. L’intimité devient une expérience de fusion, de vérité et de transformation.", "Magnetic, intense, and deep desire. Intimacy becomes an experience of fusion, truth, and transformation.", "Deseo magnético, intenso y profundo. La intimidad se convierte en una experiencia de fusión, verdad y transformación.", "Magnetisches, intensives und tiefes Verlangen. Intimität wird zu einer Erfahrung von Verschmelzung, Wahrheit und Transformation.", "Desiderio magnetico, intenso e profondo. L'intimità diventa un'esperienza di fusione, verità e trasformazione.", "Desejo magnético, intenso e profundo. A intimidade torna-se uma experiência de fusão, verdade e transformação."],
  ["Désir libre, enthousiaste et aventureux. L’élan augmente lorsque la relation reste vivante et ouverte.", "Free, enthusiastic, and adventurous desire. Desire grows when the relationship remains lively and open.", "Deseo libre, entusiasta y aventurero. El impulso aumenta cuando la relación se mantiene viva y abierta.", "Freies, begeistertes und abenteuerliches Verlangen. Der Impuls wächst, wenn die Beziehung lebendig und offen bleibt.", "Desiderio libero, entusiasta e avventuroso. Lo slancio cresce quando la relazione rimane viva e aperta.", "Desejo livre, entusiasta e aventureiro. O impulso aumenta quando a relação permanece viva e aberta."],
  ["Désir maîtrisé, persévérant et solide. L’intensité grandit avec le temps, la confiance et l’engagement.", "Controlled, persistent, and steady desire. Intensity grows with time, trust, and commitment.", "Deseo controlado, perseverante y sólido. La intensidad crece con el tiempo, la confianza y el compromiso.", "Kontrolliertes, ausdauerndes und stabiles Verlangen. Die Intensität wächst mit Zeit, Vertrauen und Verbindlichkeit.", "Desiderio controllato, perseverante e solido. L'intensità cresce con il tempo, la fiducia e l'impegno.", "Desejo controlado, perseverante e sólido. A intensidade cresce com o tempo, a confiança e o compromisso."],
  ["Désir indépendant, imprévisible et original. La liberté et la stimulation mentale entretiennent l’attraction.", "Independent, unpredictable, and original desire. Freedom and mental stimulation sustain attraction.", "Deseo independiente, imprevisible y original. La libertad y la estimulación mental mantienen la atracción.", "Unabhängiges, unvorhersehbares und originelles Verlangen. Freiheit und geistige Anregung erhalten die Anziehung.", "Desiderio indipendente, imprevedibile e originale. Libertà e stimolazione mentale mantengono l'attrazione.", "Desejo independente, imprevisível e original. Liberdade e estimulação mental mantêm a atração."],
  ["Désir intuitif, romantique et fusionnel. L’imaginaire et la sensibilité jouent un rôle majeur dans l’intimité.", "Intuitive, romantic, and deeply merging desire. Imagination and sensitivity play a major role in intimacy.", "Deseo intuitivo, romántico y fusional. La imaginación y la sensibilidad desempeñan un papel importante en la intimidad.", "Intuitives, romantisches und verschmelzendes Verlangen. Fantasie und Sensibilität spielen in der Intimität eine große Rolle.", "Desiderio intuitivo, romantico e fusionale. Immaginazione e sensibilità svolgono un ruolo importante nell'intimità.", "Desejo intuitivo, romântico e fusional. Imaginação e sensibilidade desempenham um papel importante na intimidade."],
  ["Les données disponibles ne permettent pas encore de préciser entièrement son expression du désir.", "The available data does not yet allow a complete description of this person's expression of desire.", "Los datos disponibles aún no permiten describir completamente su expresión del deseo.", "Die verfügbaren Daten erlauben noch keine vollständige Beschreibung des persönlichen Ausdrucks von Verlangen.", "I dati disponibili non permettono ancora di descrivere completamente la sua espressione del desiderio.", "Os dados disponíveis ainda não permitem descrever completamente a sua expressão do desejo."],

  ["Les deux positions de Vénus ne sont pas disponibles. L’analyse amoureuse pourra être approfondie lorsque les thèmes complets seront fournis.", "Both Venus positions are unavailable. The romantic analysis can be deepened once both complete charts are available.", "Las dos posiciones de Venus no están disponibles. El análisis amoroso podrá profundizarse cuando se disponga de ambas cartas completas.", "Beide Venus-Positionen sind nicht verfügbar. Die Liebesanalyse kann vertieft werden, sobald beide vollständigen Horoskope vorliegen.", "Le due posizioni di Venere non sono disponibili. L'analisi amorosa potrà essere approfondita quando saranno disponibili entrambi i temi completi.", "As duas posições de Vênus não estão disponíveis. A análise amorosa poderá ser aprofundada quando ambos os mapas completos estiverem disponíveis."],
  ["Les deux positions de Mars ne sont pas disponibles. L’analyse de l’attirance et de la gestion des tensions pourra être approfondie lorsque les thèmes complets seront fournis.", "Both Mars positions are unavailable. The analysis of attraction and conflict dynamics can be deepened once both complete charts are available.", "Las dos posiciones de Marte no están disponibles. El análisis de la atracción y de la gestión de las tensiones podrá profundizarse cuando se disponga de ambas cartas completas.", "Beide Mars-Positionen sind nicht verfügbar. Die Analyse von Anziehung und Spannungsdynamik kann vertieft werden, sobald beide vollständigen Horoskope vorliegen.", "Le due posizioni di Marte non sono disponibili. L'analisi dell'attrazione e della gestione delle tensioni potrà essere approfondita quando saranno disponibili entrambi i temi completi.", "As duas posições de Marte não estão disponíveis. A análise da atração e da gestão das tensões poderá ser aprofundada quando ambos os mapas completos estiverem disponíveis."],

  ["Énergie fluide", "Flowing energy", "Energía fluida", "Fließende Energie", "Energia fluida", "Energia fluida"],
  ["Lien puissant", "Powerful bond", "Vínculo poderoso", "Starke Verbindung", "Legame potente", "Ligação poderosa"],
  ["Polarité intense", "Intense polarity", "Polaridad intensa", "Intensive Polarität", "Polarità intensa", "Polaridade intensa"],
  ["Tension créatrice", "Creative tension", "Tensión creativa", "Kreative Spannung", "Tensione creativa", "Tensão criativa"],
  ["Ajustement subtil", "Subtle adjustment", "Ajuste sutil", "Feine Anpassung", "Adattamento sottile", "Ajuste sutil"],
  ["Influence relationnelle", "Relational influence", "Influencia relacional", "Beziehungseinfluss", "Influenza relazionale", "Influência relacional"],

  ["L’affection et le désir se répondent naturellement. La séduction, la tendresse et l’attirance physique peuvent circuler avec beaucoup de fluidité.", "Affection and desire respond naturally to one another. Seduction, tenderness, and physical attraction can flow with great ease.", "El afecto y el deseo se responden de manera natural. La seducción, la ternura y la atracción física pueden fluir con gran facilidad.", "Zuneigung und Verlangen reagieren natürlich aufeinander. Verführung, Zärtlichkeit und körperliche Anziehung können sehr leicht fließen.", "Affetto e desiderio si rispondono naturalmente. Seduzione, tenerezza e attrazione fisica possono fluire con grande facilità.", "Afeto e desejo respondem naturalmente um ao outro. Sedução, ternura e atração física podem fluir com muita facilidade."],
  ["L’attirance peut être très forte, mais les attentes affectives et le rythme du désir ne coïncident pas toujours. Cette tension nourrit la chimie autant qu’elle exige des ajustements.", "Attraction can be very strong, but emotional expectations and the rhythm of desire do not always align. This tension fuels chemistry while also requiring adjustment.", "La atracción puede ser muy intensa, pero las expectativas afectivas y el ritmo del deseo no siempre coinciden. Esta tensión alimenta la química y, al mismo tiempo, exige ajustes.", "Die Anziehung kann sehr stark sein, doch emotionale Erwartungen und der Rhythmus des Verlangens stimmen nicht immer überein. Diese Spannung nährt die Chemie und verlangt zugleich Anpassungen.", "L'attrazione può essere molto forte, ma le aspettative affettive e il ritmo del desiderio non coincidono sempre. Questa tensione alimenta la chimica e richiede allo stesso tempo adattamenti.", "A atração pode ser muito forte, mas as expectativas afetivas e o ritmo do desejo nem sempre coincidem. Esta tensão alimenta a química e, ao mesmo tempo, exige ajustes."],
  ["Cette connexion renforce fortement le magnétisme, la séduction et le sentiment d’être attirés l’un vers l’autre.", "This connection strongly reinforces magnetism, seduction, and the feeling of being drawn toward one another.", "Esta conexión refuerza intensamente el magnetismo, la seducción y la sensación de sentirse atraídos el uno por el otro.", "Diese Verbindung verstärkt Magnetismus, Verführung und das Gefühl gegenseitiger Anziehung deutlich.", "Questa connessione rafforza fortemente magnetismo, seduzione e la sensazione di essere attratti l'uno dall'altra.", "Esta conexão reforça fortemente o magnetismo, a sedução e a sensação de atração mútua."],
  ["Cet aspect favorise la douceur, l’affection et la capacité de reconnaître les besoins amoureux de l’autre.", "This aspect encourages tenderness, affection, and the ability to recognize each other's romantic needs.", "Este aspecto favorece la ternura, el afecto y la capacidad de reconocer las necesidades amorosas del otro.", "Dieser Aspekt fördert Zärtlichkeit, Zuneigung und die Fähigkeit, die Liebesbedürfnisse des anderen zu erkennen.", "Questo aspetto favorisce dolcezza, affetto e la capacità di riconoscere i bisogni amorosi dell'altra persona.", "Este aspeto favorece a ternura, o afeto e a capacidade de reconhecer as necessidades amorosas da outra pessoa."],
  ["Les attentes affectives peuvent différer. L’un peut donner de l’amour d’une manière que l’autre ne reconnaît pas immédiatement.", "Emotional expectations may differ. One person may express love in a way the other does not immediately recognize.", "Las expectativas afectivas pueden diferir. Una persona puede dar amor de una forma que la otra no reconoce inmediatamente.", "Emotionale Erwartungen können unterschiedlich sein. Eine Person kann Liebe auf eine Weise zeigen, die die andere nicht sofort erkennt.", "Le aspettative affettive possono differire. Una persona può dare amore in un modo che l'altra non riconosce immediatamente.", "As expectativas afetivas podem diferir. Uma pessoa pode demonstrar amor de uma forma que a outra não reconhece imediatamente."],
  ["Cette interaction donne une grande importance aux sentiments, aux valeurs et à la manière de construire l’harmonie.", "This interaction gives great importance to feelings, values, and the way harmony is built.", "Esta interacción concede gran importancia a los sentimientos, los valores y la manera de construir armonía.", "Diese Wechselwirkung gibt Gefühlen, Werten und der Art, Harmonie aufzubauen, große Bedeutung.", "Questa interazione attribuisce grande importanza ai sentimenti, ai valori e al modo di costruire armonia.", "Esta interação dá grande importância aos sentimentos, aos valores e à forma de construir harmonia."],
  ["Les énergies s’accordent avec naturel, favorisant le désir, l’initiative et la capacité d’agir ensemble.", "Your energies align naturally, encouraging desire, initiative, and the ability to act together.", "Las energías se armonizan de forma natural, favoreciendo el deseo, la iniciativa y la capacidad de actuar juntos.", "Die Energien stimmen natürlich überein und fördern Verlangen, Initiative und gemeinsames Handeln.", "Le energie si accordano naturalmente, favorendo desiderio, iniziativa e capacità di agire insieme.", "As energias harmonizam-se naturalmente, favorecendo o desejo, a iniciativa e a capacidade de agir em conjunto."],
  ["La passion peut s’accompagner de réactions vives, de compétition ou d’un décalage dans la manière de prendre l’initiative.", "Passion may come with strong reactions, competition, or differences in how each person takes initiative.", "La pasión puede ir acompañada de reacciones intensas, competencia o diferencias en la manera de tomar la iniciativa.", "Leidenschaft kann von heftigen Reaktionen, Konkurrenz oder unterschiedlichen Arten der Initiative begleitet werden.", "La passione può accompagnarsi a reazioni intense, competizione o differenze nel modo di prendere l'iniziativa.", "A paixão pode vir acompanhada de reações intensas, competição ou diferenças na forma de tomar a iniciativa."],
  ["Cette interaction intensifie l’action, la volonté, l’attirance et la manière dont vous réagissez sous pression.", "This interaction intensifies action, determination, attraction, and the way you react under pressure.", "Esta interacción intensifica la acción, la voluntad, la atracción y la forma en que reaccionan bajo presión.", "Diese Wechselwirkung verstärkt Handlung, Willenskraft, Anziehung und Ihre Reaktion unter Druck.", "Questa interazione intensifica azione, volontà, attrazione e il modo in cui reagite sotto pressione.", "Esta interação intensifica a ação, a vontade, a atração e a forma como reagem sob pressão."],
  ["Cet aspect soutient la confiance, la tendresse et la capacité de créer un espace intime où chacun peut se montrer vulnérable.", "This aspect supports trust, tenderness, and the ability to create an intimate space where each person can be vulnerable.", "Este aspecto favorece la confianza, la ternura y la capacidad de crear un espacio íntimo donde cada persona pueda mostrarse vulnerable.", "Dieser Aspekt unterstützt Vertrauen, Zärtlichkeit und die Fähigkeit, einen intimen Raum zu schaffen, in dem sich beide verletzlich zeigen können.", "Questo aspetto sostiene fiducia, tenerezza e la capacità di creare uno spazio intimo in cui ciascuno possa mostrarsi vulnerabile.", "Este aspeto apoia a confiança, a ternura e a capacidade de criar um espaço íntimo onde cada pessoa possa mostrar-se vulnerável."],
  ["Cette interaction peut révéler des peurs, des attentes implicites ou des réactions défensives qui demandent patience et honnêteté.", "This interaction may reveal fears, unspoken expectations, or defensive reactions that require patience and honesty.", "Esta interacción puede revelar miedos, expectativas implícitas o reacciones defensivas que requieren paciencia y honestidad.", "Diese Wechselwirkung kann Ängste, unausgesprochene Erwartungen oder defensive Reaktionen zeigen, die Geduld und Ehrlichkeit erfordern.", "Questa interazione può rivelare paure, aspettative implicite o reazioni difensive che richiedono pazienza e onestà.", "Esta interação pode revelar medos, expectativas implícitas ou reações defensivas que exigem paciência e honestidade."],
  ["Cette connexion joue un rôle important dans votre proximité émotionnelle, votre confiance et votre manière de vous abandonner au lien.", "This connection plays an important role in your emotional closeness, trust, and ability to surrender to the bond.", "Esta conexión desempeña un papel importante en su cercanía emocional, su confianza y su capacidad de entregarse al vínculo.", "Diese Verbindung spielt eine wichtige Rolle für emotionale Nähe, Vertrauen und die Fähigkeit, sich der Beziehung zu öffnen.", "Questa connessione svolge un ruolo importante nella vicinanza emotiva, nella fiducia e nella capacità di affidarsi al legame.", "Esta conexão desempenha um papel importante na proximidade emocional, na confiança e na capacidade de se entregar ao vínculo."],

  ["Amour, valeurs et affection", "Love, values and affection", "Amor, valores y afecto", "Liebe, Werte und Zuneigung", "Amore, valori e affetto", "Amor, valores e afeto"],
  ["Votre compatibilité amoureuse", "Your romantic compatibility", "Su compatibilidad amorosa", "Ihre Liebeskompatibilität", "La vostra compatibilità amorosa", "A sua compatibilidade amorosa"],
  ["Vénus révèle votre manière d’aimer, de séduire, de recevoir l’affection et de construire l’harmonie dans le couple.", "Venus reveals how you love, seduce, receive affection, and build harmony within the relationship.", "Venus revela su manera de amar, seducir, recibir afecto y construir armonía en la relación.", "Venus zeigt, wie Sie lieben, verführen, Zuneigung empfangen und Harmonie in der Beziehung aufbauen.", "Venere rivela il vostro modo di amare, sedurre, ricevere affetto e costruire armonia nella relazione.", "Vênus revela a sua forma de amar, seduzir, receber afeto e construir harmonia na relação."],
  ["Sentiments, séduction et valeurs", "Feelings, seduction and values", "Sentimientos, seducción y valores", "Gefühle, Verführung und Werte", "Sentimenti, seduzione e valori", "Sentimentos, sedução e valores"],
  ["La rencontre de vos deux Vénus", "The meeting of your two Venuses", "El encuentro de sus dos Venus", "Das Zusammentreffen Ihrer beiden Venus-Positionen", "L'incontro delle vostre due Veneri", "O encontro das suas duas Vênus"],
  ["Cette comparaison montre comment vous donnez de l’amour, ce que vous attendez d’une relation et les gestes qui vous permettent de vous sentir choisis.", "This comparison shows how you give love, what you expect from a relationship, and the gestures that help you feel chosen.", "Esta comparación muestra cómo dan amor, qué esperan de una relación y qué gestos les permiten sentirse elegidos.", "Dieser Vergleich zeigt, wie Sie Liebe geben, was Sie von einer Beziehung erwarten und welche Gesten Ihnen das Gefühl geben, gewählt zu sein.", "Questo confronto mostra come date amore, cosa vi aspettate da una relazione e quali gesti vi permettono di sentirvi scelti.", "Esta comparação mostra como dão amor, o que esperam de uma relação e quais gestos permitem que se sintam escolhidos."],
  ["Votre langage amoureux", "Your love language", "Su lenguaje amoroso", "Ihre Liebessprache", "Il vostro linguaggio amoroso", "A sua linguagem amorosa"],
  ["Votre manière personnelle d’aimer", "Your personal way of loving", "Su manera personal de amar", "Ihre persönliche Art zu lieben", "Il vostro modo personale di amare", "A sua forma pessoal de amar"],
  ["Vos principales interactions amoureuses", "Your main romantic interactions", "Sus principales interacciones amorosas", "Ihre wichtigsten Liebesinteraktionen", "Le vostre principali interazioni amorose", "As suas principais interações amorosas"],
  ["Votre clé amoureuse", "Your key to love", "Su clave amorosa", "Ihr Liebesschlüssel", "La vostra chiave amorosa", "A sua chave amorosa"],
  ["Ne mesurez pas uniquement l’amour à partir de votre propre langage affectif. Demandez clairement à l’autre ce qui lui permet de se sentir aimé, puis transformez cette réponse en gestes concrets et réguliers.", "Do not measure love only through your own emotional language. Ask clearly what helps the other person feel loved, then turn that answer into concrete and consistent gestures.", "No midan el amor únicamente desde su propio lenguaje afectivo. Pregunten claramente a la otra persona qué le ayuda a sentirse amada y conviertan esa respuesta en gestos concretos y regulares.", "Messen Sie Liebe nicht nur an Ihrer eigenen emotionalen Sprache. Fragen Sie klar, wodurch sich die andere Person geliebt fühlt, und setzen Sie diese Antwort in konkrete, regelmäßige Gesten um.", "Non misurate l'amore soltanto attraverso il vostro linguaggio affettivo. Chiedete chiaramente all'altra persona cosa la fa sentire amata e trasformate la risposta in gesti concreti e regolari.", "Não meçam o amor apenas através da própria linguagem afetiva. Perguntem claramente à outra pessoa o que a faz sentir-se amada e transformem essa resposta em gestos concretos e regulares."],

  ["Désir, action et passion", "Desire, action and passion", "Deseo, acción y pasión", "Verlangen, Handlung und Leidenschaft", "Desiderio, azione e passione", "Desejo, ação e paixão"],
  ["Votre attirance et votre désir", "Your attraction and desire", "Su atracción y su deseo", "Ihre Anziehung und Ihr Verlangen", "La vostra attrazione e il vostro desiderio", "A sua atração e o seu desejo"],
  ["Mars décrit votre élan, votre manière de prendre l’initiative, votre expression du désir et vos réactions lorsque la tension monte.", "Mars describes your drive, the way you take initiative, your expression of desire, and your reactions when tension rises.", "Marte describe su impulso, su manera de tomar la iniciativa, su expresión del deseo y sus reacciones cuando aumenta la tensión.", "Mars beschreibt Ihren Antrieb, Ihre Art, Initiative zu ergreifen, Ihren Ausdruck von Verlangen und Ihre Reaktionen bei zunehmender Spannung.", "Marte descrive il vostro slancio, il modo di prendere l'iniziativa, l'espressione del desiderio e le reazioni quando aumenta la tensione.", "Marte descreve o seu impulso, a forma de tomar a iniciativa, a expressão do desejo e as reações quando a tensão aumenta."],
  ["Énergie, initiative et instinct", "Energy, initiative and instinct", "Energía, iniciativa e instinto", "Energie, Initiative und Instinkt", "Energia, iniziativa e istinto", "Energia, iniciativa e instinto"],
  ["La rencontre de vos deux Mars", "The meeting of your two Mars placements", "El encuentro de sus dos Marte", "Das Zusammentreffen Ihrer beiden Mars-Positionen", "L'incontro dei vostri due Marte", "O encontro dos seus dois Marte"],
  ["Cette comparaison révèle votre rythme d’action, votre intensité, votre façon d’exprimer le désir et votre manière de réagir dans les moments de confrontation.", "This comparison reveals your pace of action, your intensity, how you express desire, and how you react during moments of confrontation.", "Esta comparación revela su ritmo de acción, su intensidad, su manera de expresar el deseo y de reaccionar en momentos de confrontación.", "Dieser Vergleich zeigt Ihren Handlungsrhythmus, Ihre Intensität, Ihren Ausdruck von Verlangen und Ihre Reaktion in Momenten der Konfrontation.", "Questo confronto rivela il vostro ritmo d'azione, l'intensità, il modo di esprimere il desiderio e di reagire nei momenti di confronto.", "Esta comparação revela o seu ritmo de ação, a intensidade, a forma de expressar o desejo e de reagir nos momentos de confronto."],
  ["Votre dynamique de passion", "Your passion dynamic", "Su dinámica de pasión", "Ihre Leidenschaftsdynamik", "La vostra dinamica della passione", "A sua dinâmica de paixão"],
  ["Votre expression personnelle du désir", "Your personal expression of desire", "Su expresión personal del deseo", "Ihr persönlicher Ausdruck von Verlangen", "La vostra espressione personale del desiderio", "A sua expressão pessoal do desejo"],
  ["Vos principales interactions de désir", "Your main desire interactions", "Sus principales interacciones de deseo", "Ihre wichtigsten Interaktionen des Verlangens", "Le vostre principali interazioni del desiderio", "As suas principais interações de desejo"],
  ["Votre force", "Your strength", "Su fortaleza", "Ihre Stärke", "Il vostro punto di forza", "A sua força"],
  ["Votre attirance peut devenir une énergie de création, de motivation et de dépassement lorsque vous choisissez un objectif commun plutôt que la compétition.", "Your attraction can become a source of creativity, motivation, and growth when you choose a shared goal rather than competition.", "Su atracción puede convertirse en una energía de creación, motivación y superación cuando eligen un objetivo común en lugar de competir.", "Ihre Anziehung kann zu kreativer, motivierender und entwicklungsfördernder Energie werden, wenn Sie ein gemeinsames Ziel statt Konkurrenz wählen.", "La vostra attrazione può diventare energia di creazione, motivazione e crescita quando scegliete un obiettivo comune invece della competizione.", "A sua atração pode tornar-se energia de criação, motivação e superação quando escolhem um objetivo comum em vez da competição."],
  ["Votre point de vigilance", "Your point of attention", "Su punto de atención", "Ihr Aufmerksamkeitspunkt", "Il vostro punto di attenzione", "O seu ponto de atenção"],
  ["Les réactions rapides, la frustration ou les différences de rythme peuvent amplifier les conflits. Une pause consciente évite que la passion ne se transforme en opposition.", "Quick reactions, frustration, or differences in pace can intensify conflict. A conscious pause can prevent passion from turning into opposition.", "Las reacciones rápidas, la frustración o las diferencias de ritmo pueden intensificar los conflictos. Una pausa consciente evita que la pasión se transforme en oposición.", "Schnelle Reaktionen, Frustration oder unterschiedliche Rhythmen können Konflikte verstärken. Eine bewusste Pause verhindert, dass Leidenschaft in Gegnerschaft umschlägt.", "Reazioni rapide, frustrazione o differenze di ritmo possono amplificare i conflitti. Una pausa consapevole evita che la passione si trasformi in opposizione.", "Reações rápidas, frustração ou diferenças de ritmo podem amplificar os conflitos. Uma pausa consciente evita que a paixão se transforme em oposição."],
  ["Votre clé de passion", "Your key to passion", "Su clave de pasión", "Ihr Schlüssel zur Leidenschaft", "La vostra chiave della passione", "A sua chave da paixão"],
  ["Exprimez clairement vos envies et vos limites sans transformer le désir en épreuve de force. L’intensité devient constructive lorsqu’elle repose sur le consentement, l’écoute et la confiance.", "Express your desires and boundaries clearly without turning desire into a power struggle. Intensity becomes constructive when it rests on consent, listening, and trust.", "Expresen claramente sus deseos y límites sin convertir el deseo en una lucha de poder. La intensidad se vuelve constructiva cuando se basa en el consentimiento, la escucha y la confianza.", "Drücken Sie Wünsche und Grenzen klar aus, ohne Verlangen in einen Machtkampf zu verwandeln. Intensität wird konstruktiv, wenn sie auf Zustimmung, Zuhören und Vertrauen beruht.", "Esprimete chiaramente desideri e limiti senza trasformare il desiderio in una prova di forza. L'intensità diventa costruttiva quando si basa su consenso, ascolto e fiducia.", "Expressem claramente desejos e limites sem transformar o desejo numa disputa de poder. A intensidade torna-se construtiva quando se baseia no consentimento, na escuta e na confiança."],

  ["Chimie, séduction et magnétisme", "Chemistry, seduction and magnetism", "Química, seducción y magnetismo", "Chemie, Verführung und Magnetismus", "Chimica, seduzione e magnetismo", "Química, sedução e magnetismo"],
  ["Votre alchimie Vénus × Mars", "Your Venus × Mars chemistry", "Su química Venus × Marte", "Ihre Venus-×-Mars-Chemie", "La vostra alchimia Venere × Marte", "A sua química Vênus × Marte"],
  ["La rencontre de Vénus et de Mars montre comment la tendresse, la séduction, l’attirance et le désir se répondent entre vous.", "The meeting of Venus and Mars shows how tenderness, seduction, attraction, and desire interact between you.", "El encuentro de Venus y Marte muestra cómo la ternura, la seducción, la atracción y el deseo interactúan entre ustedes.", "Das Zusammentreffen von Venus und Mars zeigt, wie Zärtlichkeit, Verführung, Anziehung und Verlangen zwischen Ihnen aufeinander reagieren.", "L'incontro di Venere e Marte mostra come tenerezza, seduzione, attrazione e desiderio interagiscono tra voi.", "O encontro de Vênus e Marte mostra como ternura, sedução, atração e desejo interagem entre vocês."],
  ["La rencontre entre l’amour et le désir", "The meeting between love and desire", "El encuentro entre el amor y el deseo", "Das Zusammentreffen von Liebe und Verlangen", "L'incontro tra amore e desiderio", "O encontro entre amor e desejo"],
  ["Vénus représente ce qui attire, apaise et donne envie de se rapprocher. Mars représente l’élan, l’initiative et l’intensité physique. Lorsque ces deux fonctions se répondent, elles créent la chimie du couple : la manière dont l’un séduit, dont l’autre réagit et dont la passion trouve sa place dans la tendresse.", "Venus represents what attracts, soothes, and creates the desire to grow closer. Mars represents drive, initiative, and physical intensity. When these two functions respond to each other, they create the couple's chemistry: how one seduces, how the other responds, and how passion finds its place within tenderness.", "Venus representa lo que atrae, calma y despierta el deseo de acercarse. Marte representa el impulso, la iniciativa y la intensidad física. Cuando estas dos funciones se responden, crean la química de la pareja: cómo una persona seduce, cómo la otra reacciona y cómo la pasión encuentra su lugar dentro de la ternura.", "Venus steht für das, was anzieht, beruhigt und Nähe entstehen lässt. Mars steht für Antrieb, Initiative und körperliche Intensität. Wenn diese beiden Funktionen aufeinander reagieren, entsteht die Chemie der Beziehung: wie eine Person verführt, wie die andere reagiert und wie Leidenschaft ihren Platz in der Zärtlichkeit findet.", "Venere rappresenta ciò che attrae, rassicura e fa desiderare vicinanza. Marte rappresenta slancio, iniziativa e intensità fisica. Quando queste due funzioni si rispondono, creano la chimica della coppia: il modo in cui una persona seduce, l'altra reagisce e la passione trova spazio nella tenerezza.", "Vênus representa o que atrai, acalma e desperta vontade de se aproximar. Marte representa impulso, iniciativa e intensidade física. Quando estas duas funções respondem uma à outra, criam a química do casal: como uma pessoa seduz, como a outra reage e como a paixão encontra o seu lugar na ternura."],
  ["Vos deux circuits d’attraction", "Your two attraction patterns", "Sus dos circuitos de atracción", "Ihre beiden Anziehungsmuster", "I vostri due circuiti di attrazione", "Os seus dois circuitos de atração"],
  ["Vos aspects Vénus–Mars les plus importants", "Your most important Venus–Mars aspects", "Sus aspectos Venus–Marte más importantes", "Ihre wichtigsten Venus-Mars-Aspekte", "I vostri aspetti Venere–Marte più importanti", "Os seus aspetos Vênus–Marte mais importantes"],
  ["Une chimie qui se construit autrement", "Chemistry built in a different way", "Una química que se construye de otra manera", "Chemie, die sich anders entwickelt", "Una chimica che si costruisce in modo diverso", "Uma química construída de outra forma"],
  ["Aucun aspect majeur Vénus–Mars ne ressort avec les orbes retenus. Cela ne signifie pas une absence d’attirance. La chimie peut plutôt se construire grâce aux signes, aux maisons, aux angles et à d’autres interactions entre la Lune, le Soleil, Pluton ou Neptune.", "No major Venus–Mars aspect stands out within the selected orbs. This does not mean there is no attraction. Chemistry may instead develop through signs, houses, angles, and other interactions involving the Moon, Sun, Pluto, or Neptune.", "No destaca ningún aspecto mayor Venus–Marte dentro de los orbes seleccionados. Esto no significa que no exista atracción. La química puede construirse a través de los signos, las casas, los ángulos y otras interacciones entre la Luna, el Sol, Plutón o Neptuno.", "Innerhalb der gewählten Orben hebt sich kein bedeutender Venus-Mars-Aspekt hervor. Das bedeutet nicht, dass keine Anziehung vorhanden ist. Die Chemie kann sich über Zeichen, Häuser, Achsen und andere Wechselwirkungen zwischen Mond, Sonne, Pluto oder Neptun entwickeln.", "Nessun aspetto maggiore Venere–Marte emerge con le orbite considerate. Questo non significa assenza di attrazione. La chimica può costruirsi attraverso segni, case, angoli e altre interazioni tra Luna, Sole, Plutone o Nettuno.", "Nenhum aspeto maior Vênus–Marte se destaca com os orbes selecionados. Isso não significa ausência de atração. A química pode desenvolver-se através dos signos, casas, ângulos e outras interações entre Lua, Sol, Plutão ou Netuno."],
  ["Passion", "Passion", "Pasión", "Leidenschaft", "Passione", "Paixão"],
  ["L’attirance grandit lorsque chacun se sent libre d’exprimer son désir sans devoir jouer un rôle ou deviner les attentes de l’autre.", "Attraction grows when each person feels free to express desire without having to play a role or guess the other's expectations.", "La atracción crece cuando cada persona se siente libre de expresar su deseo sin tener que desempeñar un papel ni adivinar las expectativas de la otra.", "Die Anziehung wächst, wenn beide ihr Verlangen frei ausdrücken können, ohne eine Rolle spielen oder die Erwartungen des anderen erraten zu müssen.", "L'attrazione cresce quando ciascuno si sente libero di esprimere il proprio desiderio senza dover recitare un ruolo o indovinare le aspettative dell'altro.", "A atração cresce quando cada pessoa se sente livre para expressar o desejo sem ter de desempenhar um papel ou adivinhar as expectativas da outra."],
  ["Tendresse", "Tenderness", "Ternura", "Zärtlichkeit", "Tenerezza", "Ternura"],
  ["La passion reste durable lorsque les gestes affectifs, la sécurité et le respect continuent d’exister en dehors des moments intenses.", "Passion remains sustainable when affectionate gestures, security, and respect continue to exist outside intense moments.", "La pasión se mantiene cuando los gestos afectivos, la seguridad y el respeto siguen presentes fuera de los momentos intensos.", "Leidenschaft bleibt dauerhaft, wenn liebevolle Gesten, Sicherheit und Respekt auch außerhalb intensiver Momente bestehen bleiben.", "La passione resta duratura quando gesti affettivi, sicurezza e rispetto continuano a esistere anche fuori dai momenti intensi.", "A paixão permanece duradoura quando gestos afetivos, segurança e respeito continuam presentes fora dos momentos intensos."],
  ["Votre clé d’alchimie", "Your key to chemistry", "Su clave de química", "Ihr Schlüssel zur Chemie", "La vostra chiave dell'alchimia", "A sua chave da química"],
  ["Entretenez à la fois le jeu de la séduction et la sécurité émotionnelle. La chimie se renouvelle lorsque le couple continue de créer de la nouveauté sans perdre la douceur ni la confiance.", "Nurture both playful seduction and emotional security. Chemistry renews itself when the couple continues creating novelty without losing tenderness or trust.", "Cultiven tanto el juego de la seducción como la seguridad emocional. La química se renueva cuando la pareja sigue creando novedad sin perder la ternura ni la confianza.", "Pflegen Sie sowohl das Spiel der Verführung als auch emotionale Sicherheit. Chemie erneuert sich, wenn die Beziehung Neues schafft, ohne Zärtlichkeit oder Vertrauen zu verlieren.", "Coltivate sia il gioco della seduzione sia la sicurezza emotiva. La chimica si rinnova quando la coppia continua a creare novità senza perdere dolcezza né fiducia.", "Cultivem tanto o jogo da sedução como a segurança emocional. A química renova-se quando o casal continua a criar novidade sem perder ternura nem confiança."],

  ["Confiance, proximité et abandon", "Trust, closeness and openness", "Confianza, cercanía y entrega", "Vertrauen, Nähe und Sich-Öffnen", "Fiducia, vicinanza e apertura", "Confiança, proximidade e entrega"],
  ["Votre intimité et votre vie affective", "Your intimacy and emotional life", "Su intimidad y su vida afectiva", "Ihre Intimität und Ihr Gefühlsleben", "La vostra intimità e vita affettiva", "A sua intimidade e vida afetiva"],
  ["L’intimité naît lorsque le désir, l’affection et la sécurité émotionnelle trouvent un espace commun où chacun peut se montrer vrai.", "Intimacy develops when desire, affection, and emotional security find a shared space where each person can be authentic.", "La intimidad nace cuando el deseo, el afecto y la seguridad emocional encuentran un espacio común donde cada persona puede mostrarse auténtica.", "Intimität entsteht, wenn Verlangen, Zuneigung und emotionale Sicherheit einen gemeinsamen Raum finden, in dem beide authentisch sein können.", "L'intimità nasce quando desiderio, affetto e sicurezza emotiva trovano uno spazio comune in cui ciascuno può mostrarsi autentico.", "A intimidade nasce quando desejo, afeto e segurança emocional encontram um espaço comum onde cada pessoa pode ser autêntica."],
  ["Votre espace intime", "Your intimate space", "Su espacio íntimo", "Ihr intimer Raum", "Il vostro spazio intimo", "O seu espaço íntimo"],
  ["La Lune montre ce qui rassure émotionnellement. Vénus révèle la manière de donner et de recevoir l’affection. Mars décrit le désir, l’initiative et la réaction instinctive. Ensemble, ces trois fonctions indiquent comment vous construisez la confiance, la proximité et la sécurité nécessaires à une intimité épanouie.", "The Moon shows what provides emotional reassurance. Venus reveals how affection is given and received. Mars describes desire, initiative, and instinctive reactions. Together, these three functions show how you build the trust, closeness, and security needed for fulfilling intimacy.", "La Luna muestra lo que brinda seguridad emocional. Venus revela cómo se da y se recibe afecto. Marte describe el deseo, la iniciativa y la reacción instintiva. Juntas, estas tres funciones indican cómo construyen la confianza, la cercanía y la seguridad necesarias para una intimidad plena.", "Der Mond zeigt, was emotional beruhigt. Venus zeigt, wie Zuneigung gegeben und empfangen wird. Mars beschreibt Verlangen, Initiative und instinktive Reaktionen. Gemeinsam zeigen diese drei Funktionen, wie Sie Vertrauen, Nähe und Sicherheit für erfüllende Intimität aufbauen.", "La Luna mostra ciò che rassicura emotivamente. Venere rivela come dare e ricevere affetto. Marte descrive desiderio, iniziativa e reazione istintiva. Insieme, queste tre funzioni indicano come costruite fiducia, vicinanza e sicurezza necessarie a un'intimità appagante.", "A Lua mostra o que traz segurança emocional. Vênus revela como dar e receber afeto. Marte descreve desejo, iniciativa e reação instintiva. Em conjunto, estas três funções indicam como constroem confiança, proximidade e segurança necessárias a uma intimidade plena."],
  ["Vos besoins affectifs essentiels", "Your essential emotional needs", "Sus necesidades afectivas esenciales", "Ihre wesentlichen emotionalen Bedürfnisse", "I vostri bisogni affettivi essenziali", "As suas necessidades afetivas essenciais"],
  ["Cette combinaison montre que la sécurité émotionnelle, les preuves d’affection et le rythme du désir doivent être reconnus ensemble pour permettre un véritable abandon.", "This combination shows that emotional security, expressions of affection, and the rhythm of desire need to be recognized together to allow genuine openness.", "Esta combinación muestra que la seguridad emocional, las muestras de afecto y el ritmo del deseo deben reconocerse en conjunto para permitir una verdadera entrega.", "Diese Kombination zeigt, dass emotionale Sicherheit, Zeichen der Zuneigung und der Rhythmus des Verlangens gemeinsam anerkannt werden müssen, damit echtes Sich-Öffnen möglich wird.", "Questa combinazione mostra che sicurezza emotiva, dimostrazioni d'affetto e ritmo del desiderio devono essere riconosciuti insieme per permettere una vera apertura.", "Esta combinação mostra que segurança emocional, demonstrações de afeto e ritmo do desejo precisam ser reconhecidos em conjunto para permitir uma verdadeira entrega."],
  ["Cette combinaison montre que la confiance se développe lorsque les émotions, la tendresse et le désir peuvent être exprimés sans jugement ni pression.", "This combination shows that trust develops when emotions, tenderness, and desire can be expressed without judgment or pressure.", "Esta combinación muestra que la confianza se desarrolla cuando las emociones, la ternura y el deseo pueden expresarse sin juicio ni presión.", "Diese Kombination zeigt, dass Vertrauen wächst, wenn Emotionen, Zärtlichkeit und Verlangen ohne Bewertung oder Druck ausgedrückt werden können.", "Questa combinazione mostra che la fiducia cresce quando emozioni, tenerezza e desiderio possono essere espressi senza giudizio né pressione.", "Esta combinação mostra que a confiança cresce quando emoções, ternura e desejo podem ser expressos sem julgamento nem pressão."],
  ["Vos principales interactions intimes", "Your main intimate interactions", "Sus principales interacciones íntimas", "Ihre wichtigsten intimen Interaktionen", "Le vostre principali interazioni intime", "As suas principais interações íntimas"],
  ["Ce qui vous rapproche", "What brings you closer", "Lo que los acerca", "Was Sie einander näherbringt", "Ciò che vi avvicina", "O que vos aproxima"],
  ["La proximité augmente lorsque chacun peut parler de ses besoins, de ses peurs et de ses limites sans se sentir faible, jugé ou rejeté.", "Closeness grows when each person can speak about needs, fears, and boundaries without feeling weak, judged, or rejected.", "La cercanía aumenta cuando cada persona puede hablar de sus necesidades, miedos y límites sin sentirse débil, juzgada o rechazada.", "Nähe wächst, wenn beide über Bedürfnisse, Ängste und Grenzen sprechen können, ohne sich schwach, bewertet oder zurückgewiesen zu fühlen.", "La vicinanza cresce quando ciascuno può parlare dei propri bisogni, paure e limiti senza sentirsi debole, giudicato o rifiutato.", "A proximidade cresce quando cada pessoa pode falar das suas necessidades, medos e limites sem se sentir fraca, julgada ou rejeitada."],
  ["Ce qui demande du soin", "What needs care", "Lo que requiere cuidado", "Was besondere Sorgfalt braucht", "Ciò che richiede cura", "O que requer cuidado"],
  ["Les attentes silencieuses, les blessures anciennes ou un décalage entre tendresse et désir peuvent créer de la distance lorsqu’ils ne sont pas nommés.", "Unspoken expectations, old wounds, or a mismatch between tenderness and desire can create distance when they remain unspoken.", "Las expectativas silenciosas, las heridas antiguas o un desfase entre ternura y deseo pueden crear distancia cuando no se expresan.", "Unausgesprochene Erwartungen, alte Verletzungen oder ein Unterschied zwischen Zärtlichkeit und Verlangen können Distanz schaffen, wenn sie nicht benannt werden.", "Aspettative silenziose, vecchie ferite o uno scarto tra tenerezza e desiderio possono creare distanza quando non vengono nominati.", "Expectativas silenciosas, feridas antigas ou um descompasso entre ternura e desejo podem criar distância quando não são nomeados."],
  ["Votre langage intime commun", "Your shared language of intimacy", "Su lenguaje íntimo compartido", "Ihre gemeinsame intime Sprache", "Il vostro linguaggio intimo condiviso", "A sua linguagem íntima partilhada"],
  ["Votre intimité devient plus profonde lorsque vous alternez les moments de dialogue, les gestes d’affection et les expériences partagées. La sécurité ne s’oppose pas à la passion : elle permet au désir de se renouveler sans peur et donne à chacun la liberté d’être pleinement présent.", "Your intimacy deepens when you alternate moments of dialogue, affectionate gestures, and shared experiences. Security does not oppose passion: it allows desire to renew itself without fear and gives each person the freedom to be fully present.", "Su intimidad se vuelve más profunda cuando alternan momentos de diálogo, gestos de afecto y experiencias compartidas. La seguridad no se opone a la pasión: permite que el deseo se renueve sin miedo y da a cada persona la libertad de estar plenamente presente.", "Ihre Intimität vertieft sich, wenn sich Dialog, liebevolle Gesten und gemeinsame Erfahrungen abwechseln. Sicherheit steht Leidenschaft nicht entgegen: Sie ermöglicht, dass sich Verlangen ohne Angst erneuert, und gibt beiden die Freiheit, ganz präsent zu sein.", "La vostra intimità diventa più profonda quando alternate momenti di dialogo, gesti d'affetto ed esperienze condivise. La sicurezza non si oppone alla passione: permette al desiderio di rinnovarsi senza paura e dà a ciascuno la libertà di essere pienamente presente.", "A sua intimidade aprofunda-se quando alternam momentos de diálogo, gestos de afeto e experiências partilhadas. A segurança não se opõe à paixão: permite que o desejo se renove sem medo e dá a cada pessoa liberdade para estar plenamente presente."],
  ["Votre clé d’intimité", "Your key to intimacy", "Su clave de intimidad", "Ihr Schlüssel zur Intimität", "La vostra chiave dell'intimità", "A sua chave da intimidade"],
  ["Créez régulièrement un moment sans écrans, sans obligation et sans attente précise. Utilisez cet espace pour vous retrouver, vous écouter et dire ce qui vous rapproche réellement en ce moment.", "Regularly create time without screens, obligations, or specific expectations. Use this space to reconnect, listen to one another, and express what genuinely brings you closer right now.", "Creen regularmente un momento sin pantallas, obligaciones ni expectativas concretas. Utilicen ese espacio para reencontrarse, escucharse y expresar lo que realmente los acerca en este momento.", "Schaffen Sie regelmäßig Zeit ohne Bildschirme, Verpflichtungen oder konkrete Erwartungen. Nutzen Sie diesen Raum, um sich wiederzufinden, einander zuzuhören und auszusprechen, was Sie gerade wirklich näher zusammenbringt.", "Create regolarmente un momento senza schermi, obblighi o aspettative precise. Usate questo spazio per ritrovarvi, ascoltarvi e dire ciò che vi avvicina davvero in questo momento.", "Criem regularmente um momento sem ecrãs, obrigações ou expectativas específicas. Usem esse espaço para se reencontrarem, ouvirem um ao outro e dizerem o que realmente vos aproxima neste momento."],
];

/* =========================================================
   PETITS FRAGMENTS JSX
   Important : on traduit les fragments visibles,
   jamais les mots TypeScript du fichier.
========================================================= */

const JSX_ROWS: Row[] = [
  ["L’amour", "Love", "El amor", "Die Liebe", "L'amore", "O amor"],
  ["Le désir", "Desire", "El deseo", "Das Verlangen", "Il desiderio", "O desejo"],
  ["de", "of", "de", "von", "di", "de"],
  ["Vénus en", "Venus in", "Venus en", "Venus in", "Venere in", "Vênus em"],
  ["Mars en", "Mars in", "Marte en", "Mars in", "Marte in", "Marte em"],
  ["Lune en", "Moon in", "Luna en", "Mond in", "Luna in", "Lua em"],
  ["Élément", "Element", "Elemento", "Element", "Elemento", "Elemento"],
  ["recherche", "seeks", "busca", "sucht", "cerca", "procura"],
  ["exprime", "expresses", "expresa", "drückt aus", "esprime", "expressa"],
  ["et Mars en", "and Mars in", "y Marte en", "und Mars in", "e Marte in", "e Marte em"],
  ["• orbe", "• orb", "• orbe", "• Orb", "• orbe", "• orbe"],
];

/* =========================================================
   TEMPLATES DYNAMIQUES VÉNUS / MARS
========================================================= */

const TEMPLATE_ROWS = {
  sameVenus: {
    en: "Your two Venus placements in ${localizeLoveSign(sign1)} seek love in very similar ways. You easily recognize the gestures, attention, and values that reassure the other person. This closeness encourages a strong sense of familiarity, but affection should never be taken for granted.",
    es: "Sus dos Venus en ${localizeLoveSign(sign1)} buscan una forma de amor muy similar. Reconocen fácilmente los gestos, las atenciones y los valores que tranquilizan a la otra persona. Esta cercanía favorece una fuerte sensación de familiaridad, pero exige no dar el afecto por sentado.",
    de: "Ihre beiden Venus-Positionen in ${localizeLoveSign(sign1)} suchen eine sehr ähnliche Form von Liebe. Sie erkennen leicht die Gesten, Aufmerksamkeiten und Werte, die den anderen beruhigen. Diese Nähe fördert ein starkes Gefühl von Vertrautheit, doch Zuneigung sollte nie als selbstverständlich gelten.",
    it: "Le vostre due Veneri in ${localizeLoveSign(sign1)} cercano una forma d'amore molto simile. Riconoscete facilmente i gesti, le attenzioni e i valori che rassicurano l'altra persona. Questa vicinanza favorisce un forte senso di familiarità, ma richiede di non dare l'affetto per scontato.",
    pt: "As suas duas Vênus em ${localizeLoveSign(sign1)} procuram uma forma de amor muito semelhante. Reconhecem facilmente os gestos, as atenções e os valores que tranquilizam a outra pessoa. Esta proximidade favorece uma forte sensação de familiaridade, mas exige não dar o afeto como garantido.",
  },
  sameElementVenus: {
    en: "Your Venus placements in ${localizeLoveSign(sign1)} and ${localizeLoveSign(sign2)} belong to the same element, ${localizeLoveElement(element1)}. Your emotional needs therefore share a common foundation. Even if your styles differ, you can generally understand what the other considers a sign of love.",
    es: "Sus Venus en ${localizeLoveSign(sign1)} y ${localizeLoveSign(sign2)} pertenecen al mismo elemento, ${localizeLoveElement(element1)}. Sus necesidades afectivas comparten por tanto una base común. Aunque sus estilos difieran, suelen comprender lo que la otra persona considera una muestra de amor.",
    de: "Ihre Venus-Positionen in ${localizeLoveSign(sign1)} und ${localizeLoveSign(sign2)} gehören zum selben Element, ${localizeLoveElement(element1)}. Ihre emotionalen Bedürfnisse haben daher eine gemeinsame Grundlage. Auch wenn sich Ihre Stile unterscheiden, verstehen Sie meist, was der andere als Liebesbeweis empfindet.",
    it: "Le vostre Veneri in ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} appartengono allo stesso elemento, ${localizeLoveElement(element1)}. I vostri bisogni affettivi condividono quindi una base comune. Anche se gli stili differiscono, comprendete generalmente ciò che l'altra persona considera una prova d'amore.",
    pt: "As suas Vênus em ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} pertencem ao mesmo elemento, ${localizeLoveElement(element1)}. As necessidades afetivas têm, portanto, uma base comum. Mesmo que os estilos sejam diferentes, geralmente compreendem o que a outra pessoa considera uma prova de amor.",
  },
  complementaryVenus: {
    en: "Your Venus placements in ${localizeLoveSign(sign1)} and ${localizeLoveSign(sign2)} express love in different but complementary ways. One brings momentum, expression, or lightness, while the other adds depth, stability, or sensitivity. Your bond becomes richer when you communicate your needs instead of expecting the other person to guess them.",
    es: "Sus Venus en ${localizeLoveSign(sign1)} y ${localizeLoveSign(sign2)} expresan el amor de maneras diferentes pero complementarias. Una aporta impulso, expresión o ligereza, mientras la otra añade profundidad, estabilidad o sensibilidad. El vínculo se enriquece cuando expresan sus necesidades en lugar de esperar que la otra persona las adivine.",
    de: "Ihre Venus-Positionen in ${localizeLoveSign(sign1)} und ${localizeLoveSign(sign2)} drücken Liebe unterschiedlich, aber ergänzend aus. Eine Person bringt Schwung, Ausdruck oder Leichtigkeit, während die andere Tiefe, Stabilität oder Sensibilität hinzufügt. Ihre Verbindung wird reicher, wenn Sie Bedürfnisse aussprechen, statt zu erwarten, dass der andere sie errät.",
    it: "Le vostre Veneri in ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} esprimono l'amore in modi diversi ma complementari. Una persona porta slancio, espressione o leggerezza, mentre l'altra aggiunge profondità, stabilità o sensibilità. Il legame si arricchisce quando comunicate i bisogni invece di aspettare che l'altro li indovini.",
    pt: "As suas Vênus em ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} expressam o amor de maneiras diferentes, mas complementares. Uma pessoa traz impulso, expressão ou leveza, enquanto a outra acrescenta profundidade, estabilidade ou sensibilidade. O vínculo enriquece quando comunicam as necessidades em vez de esperar que a outra pessoa as adivinhe.",
  },
  differentVenus: {
    en: "Your Venus placements in ${localizeLoveSign(sign1)} and ${localizeLoveSign(sign2)} do not always expect the same signs of love. One person may seek more spontaneity, words, or movement, while the other values security, depth, or practical gestures. Compatibility grows when each person truly learns the other's emotional language.",
    es: "Sus Venus en ${localizeLoveSign(sign1)} y ${localizeLoveSign(sign2)} no siempre esperan las mismas muestras de amor. Una persona puede buscar más espontaneidad, palabras o movimiento, mientras la otra valora la seguridad, la profundidad o los gestos concretos. La compatibilidad crece cuando cada persona aprende realmente el lenguaje afectivo de la otra.",
    de: "Ihre Venus-Positionen in ${localizeLoveSign(sign1)} und ${localizeLoveSign(sign2)} erwarten nicht immer dieselben Liebesbeweise. Eine Person sucht vielleicht mehr Spontaneität, Worte oder Bewegung, während die andere Sicherheit, Tiefe oder konkrete Gesten bevorzugt. Kompatibilität wächst, wenn beide die emotionale Sprache des anderen wirklich lernen.",
    it: "Le vostre Veneri in ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} non si aspettano sempre le stesse prove d'amore. Una persona può cercare più spontaneità, parole o movimento, mentre l'altra privilegia sicurezza, profondità o gesti concreti. La compatibilità cresce quando ciascuno impara davvero il linguaggio affettivo dell'altro.",
    pt: "As suas Vênus em ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} nem sempre esperam as mesmas provas de amor. Uma pessoa pode procurar mais espontaneidade, palavras ou movimento, enquanto a outra privilegia segurança, profundidade ou gestos concretos. A compatibilidade cresce quando cada pessoa aprende verdadeiramente a linguagem afetiva da outra.",
  },
  sameMars: {
    en: "Your two Mars placements in ${localizeLoveSign(sign1)} share a very similar rhythm of action and desire. Attraction can be immediate, and you instinctively understand how the other takes initiative. This similarity can also intensify competition or impulsive reactions.",
    es: "Sus dos Marte en ${localizeLoveSign(sign1)} comparten un ritmo de acción y deseo muy parecido. La atracción puede ser inmediata y comprenden instintivamente cómo la otra persona toma la iniciativa. Esta semejanza también puede intensificar la competencia o las reacciones impulsivas.",
    de: "Ihre beiden Mars-Positionen in ${localizeLoveSign(sign1)} teilen einen sehr ähnlichen Rhythmus von Handlung und Verlangen. Anziehung kann unmittelbar sein, und Sie verstehen instinktiv, wie der andere Initiative ergreift. Diese Ähnlichkeit kann auch Konkurrenz oder impulsive Reaktionen verstärken.",
    it: "I vostri due Marte in ${localizeLoveSign(sign1)} condividono un ritmo di azione e desiderio molto simile. L'attrazione può essere immediata e comprendete istintivamente come l'altra persona prende l'iniziativa. Questa somiglianza può anche intensificare competizione o reazioni impulsive.",
    pt: "Os seus dois Marte em ${localizeLoveSign(sign1)} partilham um ritmo de ação e desejo muito semelhante. A atração pode ser imediata e compreendem instintivamente como a outra pessoa toma a iniciativa. Esta semelhança também pode intensificar competição ou reações impulsivas.",
  },
  sameElementMars: {
    en: "Your Mars placements in ${localizeLoveSign(sign1)} and ${localizeLoveSign(sign2)} belong to the same element, ${localizeLoveElement(element1)}. Your energies can move in a similar direction, encouraging cooperation, desire, and the realization of shared projects.",
    es: "Sus Marte en ${localizeLoveSign(sign1)} y ${localizeLoveSign(sign2)} pertenecen al mismo elemento, ${localizeLoveElement(element1)}. Sus energías pueden movilizarse en una dirección similar, favoreciendo la cooperación, el deseo y la realización de proyectos comunes.",
    de: "Ihre Mars-Positionen in ${localizeLoveSign(sign1)} und ${localizeLoveSign(sign2)} gehören zum selben Element, ${localizeLoveElement(element1)}. Ihre Energien können sich in eine ähnliche Richtung bewegen und fördern Zusammenarbeit, Verlangen und gemeinsame Projekte.",
    it: "I vostri Marte in ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} appartengono allo stesso elemento, ${localizeLoveElement(element1)}. Le vostre energie possono muoversi in una direzione simile, favorendo cooperazione, desiderio e realizzazione di progetti comuni.",
    pt: "Os seus Marte em ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} pertencem ao mesmo elemento, ${localizeLoveElement(element1)}. As energias podem mover-se numa direção semelhante, favorecendo cooperação, desejo e realização de projetos comuns.",
  },
  complementaryMars: {
    en: "Your Mars placements in ${localizeLoveSign(sign1)} and ${localizeLoveSign(sign2)} can create complementary attraction. One stimulates movement and initiative, while the other brings perseverance, sensitivity, or depth. The balance becomes especially strong when neither person tries to impose their own rhythm.",
    es: "Sus Marte en ${localizeLoveSign(sign1)} y ${localizeLoveSign(sign2)} pueden crear una atracción complementaria. Una persona estimula el movimiento y la iniciativa, mientras la otra aporta perseverancia, sensibilidad o profundidad. El equilibrio se fortalece cuando nadie intenta imponer su propio ritmo.",
    de: "Ihre Mars-Positionen in ${localizeLoveSign(sign1)} und ${localizeLoveSign(sign2)} können eine ergänzende Anziehung schaffen. Eine Person fördert Bewegung und Initiative, während die andere Ausdauer, Sensibilität oder Tiefe einbringt. Das Gleichgewicht wird besonders stark, wenn niemand versucht, den eigenen Rhythmus aufzuzwingen.",
    it: "I vostri Marte in ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} possono creare un'attrazione complementare. Una persona stimola movimento e iniziativa, mentre l'altra porta perseveranza, sensibilità o profondità. L'equilibrio diventa particolarmente forte quando nessuno cerca di imporre il proprio ritmo.",
    pt: "Os seus Marte em ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} podem criar uma atração complementar. Uma pessoa estimula movimento e iniciativa, enquanto a outra traz perseverança, sensibilidade ou profundidade. O equilíbrio torna-se especialmente forte quando ninguém tenta impor o próprio ritmo.",
  },
  differentMars: {
    en: "Your Mars placements in ${localizeLoveSign(sign1)} and ${localizeLoveSign(sign2)} do not act at the same pace. One person may react immediately while the other moves with caution, emotion, or reflection. This difference can feed attraction, but it requires conscious management of frustration and conflict.",
    es: "Sus Marte en ${localizeLoveSign(sign1)} y ${localizeLoveSign(sign2)} no actúan al mismo ritmo. Una persona puede reaccionar inmediatamente mientras la otra avanza con prudencia, emoción o reflexión. Esta diferencia puede alimentar la atracción, pero requiere una gestión consciente de la frustración y los conflictos.",
    de: "Ihre Mars-Positionen in ${localizeLoveSign(sign1)} und ${localizeLoveSign(sign2)} handeln nicht im selben Rhythmus. Eine Person reagiert vielleicht sofort, während die andere vorsichtig, emotional oder überlegt vorgeht. Dieser Unterschied kann Anziehung nähren, verlangt aber einen bewussten Umgang mit Frustration und Konflikten.",
    it: "I vostri Marte in ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} non agiscono allo stesso ritmo. Una persona può reagire immediatamente mentre l'altra procede con prudenza, emozione o riflessione. Questa differenza può alimentare l'attrazione, ma richiede una gestione consapevole di frustrazione e conflitti.",
    pt: "Os seus Marte em ${localizeLoveSign(sign1)} e ${localizeLoveSign(sign2)} não agem ao mesmo ritmo. Uma pessoa pode reagir imediatamente enquanto a outra avança com prudência, emoção ou reflexão. Esta diferença pode alimentar a atração, mas exige uma gestão consciente da frustração e dos conflitos.",
  },
} satisfies Record<
  string,
  Record<NonFrenchLocale, string>
>;

function buildLocaleData(
  locale: NonFrenchLocale,
): LocaleData {
  return {
    text: rowsToMap(
      TEXT_ROWS,
      locale,
    ),

    jsx: rowsToMap(
      JSX_ROWS,
      locale,
    ),

    signs: rowsToMap(
      SIGN_ROWS,
      locale,
    ),

    planets: rowsToMap(
      PLANET_ROWS,
      locale,
    ),

    aspects: rowsToMap(
      ASPECT_ROWS,
      locale,
    ),

    elements: rowsToMap(
      ELEMENT_ROWS,
      locale,
    ),

    templates: {
      sameVenus:
        TEMPLATE_ROWS.sameVenus[
          locale
        ],

      sameElementVenus:
        TEMPLATE_ROWS.sameElementVenus[
          locale
        ],

      complementaryVenus:
        TEMPLATE_ROWS.complementaryVenus[
          locale
        ],

      differentVenus:
        TEMPLATE_ROWS.differentVenus[
          locale
        ],

      sameMars:
        TEMPLATE_ROWS.sameMars[
          locale
        ],

      sameElementMars:
        TEMPLATE_ROWS.sameElementMars[
          locale
        ],

      complementaryMars:
        TEMPLATE_ROWS.complementaryMars[
          locale
        ],

      differentMars:
        TEMPLATE_ROWS.differentMars[
          locale
        ],
    },
  };
}

const translations: Record<
  NonFrenchLocale,
  LocaleData
> = {
  en: buildLocaleData("en"),
  es: buildLocaleData("es"),
  de: buildLocaleData("de"),
  it: buildLocaleData("it"),
  pt: buildLocaleData("pt"),
};

/* =========================================================
   MOTEUR AST SÉCURISÉ
========================================================= */

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
  data: LocaleData,
): string {
  const sourceFile =
    ts.createSourceFile(
      "CompatibilityLove.tsx",
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    /*
     * Texte JSX visible uniquement.
     * On préserve les espaces avant/après
     * pour éviter LoveofName.
     */
    if (
      ts.isJsxText(node)
    ) {
      const raw =
        node.getText(
          sourceFile,
        );

      const normalized =
        normalizeVisibleText(
          raw,
        );

      const translated =
        data.text[normalized] ??
        data.jsx[normalized];

      if (
        translated &&
        translated !== normalized
      ) {
        const leading =
          raw.match(/^\s*/)?.[0] ??
          "";

        const trailing =
          raw.match(/\s*$/)?.[0] ??
          "";

        replacements.push({
          start:
            node.getStart(
              sourceFile,
            ),

          end:
            node.getEnd(),

          value:
            `{${JSON.stringify(
              `${leading}${translated}${trailing}`,
            )}}`,
        });
      }
    }

    /*
     * String literals sûres.
     *
     * On ne remplace jamais des morceaux
     * arbitraires du code TypeScript.
     */
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      const exact =
        node.text;

      const normalized =
        normalizeVisibleText(
          exact,
        );

      const translated =
        data.text[exact] ??
        data.text[normalized] ??
        data.jsx[normalized];

      if (
        translated &&
        translated !== exact
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

/* =========================================================
   HELPERS INSÉRÉS DANS LE TSX GÉNÉRÉ
========================================================= */

function buildHelpers(
  data: LocaleData,
): string {
  return `
const __LOVE_SIGNS =
  ${JSON.stringify(
    data.signs,
    null,
    2,
  )} as Record<string, string>;

const __LOVE_PLANETS =
  ${JSON.stringify(
    data.planets,
    null,
    2,
  )} as Record<string, string>;

const __LOVE_ASPECTS =
  ${JSON.stringify(
    data.aspects,
    null,
    2,
  )} as Record<string, string>;

const __LOVE_ELEMENTS =
  ${JSON.stringify(
    data.elements,
    null,
    2,
  )} as Record<string, string>;

function localizeLoveSign(
  value: string,
): string {
  return (
    __LOVE_SIGNS[value] ??
    value
  );
}

function localizeLovePlanet(
  value: string,
): string {
  return (
    __LOVE_PLANETS[value] ??
    value
  );
}

function localizeLoveAspect(
  value: string,
): string {
  return (
    __LOVE_ASPECTS[value] ??
    value
  );
}

function localizeLoveElement(
  value: string,
): string {
  return (
    __LOVE_ELEMENTS[value] ??
    value
  );
}
`;
}

function injectHelpers(
  source: string,
  data: LocaleData,
): string {
  const marker =
    "function normalizeValue(value: unknown): string {";

  if (
    !source.includes(
      marker,
    )
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

/* =========================================================
   PHRASES DYNAMIQUES VÉNUS / MARS
========================================================= */

function replaceCompatibilityTemplates(
  source: string,
  data: LocaleData,
): string {
  let output = source;

  const replacements:
    Array<[string, string]> = [
      [
        "return `Vos deux Vénus en ${sign1} recherchent un amour exprimé de manière très semblable. Vous reconnaissez facilement les gestes, les attentions et les valeurs qui rassurent l’autre. Cette proximité favorise un fort sentiment d’évidence, mais demande de ne pas considérer l’affection comme acquise.`;",
        `return \`${data.templates.sameVenus}\`;`,
      ],

      [
        "return `Vos Vénus en ${sign1} et en ${sign2} appartiennent au même élément, ${element1}. Vos besoins affectifs reposent donc sur une base commune. Même si vos styles diffèrent, vous pouvez généralement comprendre ce que l’autre considère comme une preuve d’amour.`;",
        `return \`${data.templates.sameElementVenus}\`;`,
      ],

      [
        "return `Vos Vénus en ${sign1} et en ${sign2} expriment l’amour de façons différentes mais complémentaires. L’une apporte l’élan, l’expression ou la légèreté, tandis que l’autre ajoute de la profondeur, de la stabilité ou de la sensibilité. Votre lien gagne en richesse lorsque vous traduisez vos besoins sans attendre que l’autre les devine.`;",
        `return \`${data.templates.complementaryVenus}\`;`,
      ],

      [
        "return `Vos Vénus en ${sign1} et en ${sign2} n’attendent pas toujours les mêmes preuves d’amour. L’un peut rechercher davantage de spontanéité, de mots ou de mouvement, tandis que l’autre privilégie la sécurité, la profondeur ou les gestes concrets. La compatibilité grandit lorsque chacun apprend réellement le langage affectif de l’autre.`;",
        `return \`${data.templates.differentVenus}\`;`,
      ],

      [
        "return `Vos deux Mars en ${sign1} partagent un rythme d’action et de désir très proche. L’attirance peut être immédiate, et vous comprenez instinctivement comment l’autre prend l’initiative. Cette ressemblance peut aussi intensifier la compétition ou les réactions impulsives.`;",
        `return \`${data.templates.sameMars}\`;`,
      ],

      [
        "return `Vos Mars en ${sign1} et en ${sign2} appartiennent au même élément, ${element1}. Vos énergies peuvent se mobiliser dans une direction semblable, ce qui favorise la coopération, le désir et la réalisation de projets communs.`;",
        `return \`${data.templates.sameElementMars}\`;`,
      ],

      [
        "return `Vos Mars en ${sign1} et en ${sign2} peuvent créer une attraction complémentaire. L’un stimule le mouvement et l’initiative, tandis que l’autre apporte persévérance, sensibilité ou profondeur. L’équilibre devient particulièrement fort lorsque personne ne cherche à imposer son propre rythme.`;",
        `return \`${data.templates.complementaryMars}\`;`,
      ],

      [
        "return `Vos Mars en ${sign1} et en ${sign2} n’agissent pas au même rythme. L’un peut réagir immédiatement alors que l’autre avance avec prudence, émotion ou réflexion. Cette différence nourrit parfois l’attirance, mais elle demande une gestion consciente de la frustration et des conflits.`;",
        `return \`${data.templates.differentMars}\`;`,
      ],
    ];

  for (
    const [from, to]
    of replacements
  ) {
    output =
      output
        .split(from)
        .join(to);
  }

  return output;
}

/* =========================================================
   VALEURS DYNAMIQUES VISIBLES
========================================================= */

function replaceDynamicDisplays(
  source: string,
): string {
  let output = source;

  /*
   * Signes visibles.
   */
  for (
    const name
    of [
      "sign1",
      "sign2",
      "sign",
      "venus1",
      "venus2",
      "mars1",
      "mars2",
      "moon1",
      "moon2",
    ]
  ) {
    output =
      output
        .split(
          `{${name}}`,
        )
        .join(
          `{localizeLoveSign(${name})}`,
        );
  }

  /*
   * Éléments visibles.
   */
  output =
    output
      .split(
        "{getElement(sign1)}",
      )
      .join(
        "{localizeLoveElement(getElement(sign1))}",
      );

  output =
    output
      .split(
        "{getElement(sign2)}",
      )
      .join(
        "{localizeLoveElement(getElement(sign2))}",
      );

  /*
   * Planètes et aspects visibles
   * dans les AspectCard.
   */
  output =
    output
      .split(
        "{translateCompatibilityPlanet(aspect.person1Planet)}",
      )
      .join(
        "{localizeLovePlanet(translateCompatibilityPlanet(aspect.person1Planet))}",
      );

  output =
    output
      .split(
        "{translateCompatibilityAspect(aspect.type)}",
      )
      .join(
        "{localizeLoveAspect(translateCompatibilityAspect(aspect.type))}",
      );

  output =
    output
      .split(
        "{translateCompatibilityPlanet(aspect.person2Planet)}",
      )
      .join(
        "{localizeLovePlanet(translateCompatibilityPlanet(aspect.person2Planet))}",
      );

  return output;
}

/* =========================================================
   MAIN
========================================================= */

export function localizeCompatibilityLove(
  source: string,
  locale: PaidPdfLocale,
): string {
  /*
   * Le français reste exactement
   * le fichier source.
   */
  if (
    locale === "fr"
  ) {
    return source;
  }

  const data =
    translations[
      locale as NonFrenchLocale
    ];

  if (!data) {
    return source;
  }

  /*
   * 1.
   * Textes fixes et retours de fonctions.
   */
  let localized =
    localizeSafeLiterals(
      source,
      data,
    );

  /*
   * 2.
   * Helpers des valeurs dynamiques.
   */
  localized =
    injectHelpers(
      localized,
      data,
    );

  /*
   * 3.
   * Templates dynamiques Vénus / Mars.
   */
  localized =
    replaceCompatibilityTemplates(
      localized,
      data,
    );

  /*
   * 4.
   * Signes, éléments, planètes
   * et aspects visibles.
   */
  localized =
    replaceDynamicDisplays(
      localized,
    );

  return localized;
}
