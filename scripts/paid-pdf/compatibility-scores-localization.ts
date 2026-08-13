import ts from "typescript";

import type {
  PaidPdfLocale,
} from "./premium-localization";

type NonFrenchLocale = Exclude<
  PaidPdfLocale,
  "fr"
>;

const TRANSLATIONS: Record<
  NonFrenchLocale,
  Record<string, string>
> = {
  en: {
    "Lien émotionnel": "Emotional bond",
    "La capacité à comprendre les besoins affectifs et à créer un sentiment de sécurité.":
      "The ability to understand emotional needs and create a sense of security.",
    "Communication": "Communication",
    "La fluidité des échanges, la compréhension mutuelle et la gestion des désaccords.":
      "The ease of communication, mutual understanding, and the way disagreements are handled.",
    "Affinité amoureuse": "Romantic affinity",
    "L’expression de l’affection, de la tendresse, de l’harmonie et des valeurs partagées.":
      "The expression of affection, tenderness, harmony, and shared values.",
    "Attirance": "Attraction",
    "L’intensité du désir, de l’élan mutuel et de la dynamique physique entre les deux personnes.":
      "The intensity of desire, mutual attraction, and physical chemistry between the two people.",
    "Stabilité": "Stability",
    "Le potentiel de continuité, d’engagement, de structure et de construction dans le temps.":
      "The potential for continuity, commitment, structure, and long-term development.",
    "Évolution": "Growth",
    "La capacité de la relation à favoriser l’apprentissage, la transformation et la croissance.":
      "The relationship's ability to encourage learning, transformation, and growth.",
    "Connexion exceptionnelle": "Exceptional connection",
    "Très forte compatibilité": "Very strong compatibility",
    "Belle harmonie": "Beautiful harmony",
    "Compatibilité prometteuse": "Promising compatibility",
    "Équilibre à construire": "Balance to build",
    "Relation évolutive": "Growth-oriented relationship",
    "Dynamique exigeante": "Challenging dynamic",
    "Votre synastrie révèle une connexion particulièrement harmonieuse. ":
      "Your synastry reveals a particularly harmonious connection. ",
    "Vos différences peuvent enrichir la relation tandis que vos affinités ":
      "Your differences can enrich the relationship, while your affinities ",
    "favorisent naturellement la proximité, la compréhension et l’évolution commune.":
      "naturally encourage closeness, understanding, and mutual growth.",
    "Votre relation bénéficie de plusieurs affinités importantes. ":
      "Your relationship benefits from several important affinities. ",
    "Certaines différences demanderont des ajustements, mais elles peuvent aussi ":
      "Some differences will require adjustments, but they can also ",
    "devenir des sources de complémentarité et de croissance.":
      "become sources of complementarity and growth.",
    "Votre dynamique présente un mélange équilibré de fluidité et de défis. ":
      "Your dynamic presents a balanced mix of ease and challenges. ",
    "La qualité de la relation dépendra notamment de votre capacité à communiquer, ":
      "The quality of the relationship will depend in particular on your ability to communicate, ",
    "à respecter vos différences et à construire des repères communs.":
      "respect your differences, and build shared foundations.",
    "Cette relation peut être profondément formatrice. ":
      "This relationship can be deeply transformative. ",
    "Elle demande toutefois davantage de conscience, de dialogue et d’adaptation ":
      "However, it requires greater awareness, dialogue, and adaptability ",
    "afin que les tensions deviennent des occasions de compréhension.":
      "so that tensions can become opportunities for understanding.",
    "Votre synastrie met en lumière une dynamique complexe et exigeante. ":
      "Your synastry highlights a complex and demanding dynamic. ",
    "Cela ne condamne pas la relation, mais souligne l’importance de la patience, ":
      "This does not condemn the relationship, but emphasizes the importance of patience, ",
    "de la communication et d’un engagement conscient des deux personnes.":
      "communication, and conscious commitment from both people.",
    "Première personne": "First person",
    "Deuxième personne": "Second person",
    "Vue d’ensemble": "Overview",
    "Votre compatibilité globale": "Your overall compatibility",
    "Une lecture synthétique des grandes dimensions de votre relation avant d’explorer chaque connexion en profondeur.":
      "A concise overview of the major dimensions of your relationship before exploring each connection in depth.",
    "Indice général de compatibilité": "Overall compatibility score",
    "Un score n’est jamais un verdict": "A score is never a verdict",
    "Ces indices offrent une vue d’ensemble des interactions astrologiques. Une note élevée révèle davantage de fluidité naturelle, tandis qu’une note plus basse signale généralement une zone qui demande davantage de compréhension, de maturité ou d’ajustement. La qualité réelle d’une relation dépend toujours de la manière dont les deux personnes choisissent de vivre ces énergies.":
      "These scores provide an overview of your astrological interactions. A high score indicates greater natural ease, while a lower score generally points to an area requiring more understanding, maturity, or adjustment. The true quality of a relationship always depends on how both people choose to experience these energies.",
    "La suite de votre analyse": "What comes next in your analysis",
    "Les prochaines sections expliqueront la source de ces résultats à travers vos planètes personnelles, vos aspects de synastrie, vos forces naturelles et vos principaux défis.":
      "The following sections will explain the source of these results through your personal planets, synastry aspects, natural strengths, and main challenges.",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastry Report",
  },

  es: {
    "Lien émotionnel": "Vínculo emocional",
    "La capacité à comprendre les besoins affectifs et à créer un sentiment de sécurité.":
      "La capacidad de comprender las necesidades afectivas y crear una sensación de seguridad.",
    "Communication": "Comunicación",
    "La fluidité des échanges, la compréhension mutuelle et la gestion des désaccords.":
      "La fluidez de los intercambios, la comprensión mutua y la gestión de los desacuerdos.",
    "Affinité amoureuse": "Afinidad amorosa",
    "L’expression de l’affection, de la tendresse, de l’harmonie et des valeurs partagées.":
      "La expresión del afecto, la ternura, la armonía y los valores compartidos.",
    "Attirance": "Atracción",
    "L’intensité du désir, de l’élan mutuel et de la dynamique physique entre les deux personnes.":
      "La intensidad del deseo, del impulso mutuo y de la dinámica física entre ambas personas.",
    "Stabilité": "Estabilidad",
    "Le potentiel de continuité, d’engagement, de structure et de construction dans le temps.":
      "El potencial de continuidad, compromiso, estructura y construcción a largo plazo.",
    "Évolution": "Evolución",
    "La capacité de la relation à favoriser l’apprentissage, la transformation et la croissance.":
      "La capacidad de la relación para favorecer el aprendizaje, la transformación y el crecimiento.",
    "Connexion exceptionnelle": "Conexión excepcional",
    "Très forte compatibilité": "Compatibilidad muy alta",
    "Belle harmonie": "Hermosa armonía",
    "Compatibilité prometteuse": "Compatibilidad prometedora",
    "Équilibre à construire": "Equilibrio por construir",
    "Relation évolutive": "Relación evolutiva",
    "Dynamique exigeante": "Dinámica exigente",
    "Votre synastrie révèle une connexion particulièrement harmonieuse. ":
      "Su sinastría revela una conexión especialmente armoniosa. ",
    "Vos différences peuvent enrichir la relation tandis que vos affinités ":
      "Sus diferencias pueden enriquecer la relación, mientras que sus afinidades ",
    "favorisent naturellement la proximité, la compréhension et l’évolution commune.":
      "favorecen naturalmente la cercanía, la comprensión y la evolución conjunta.",
    "Votre relation bénéficie de plusieurs affinités importantes. ":
      "Su relación se beneficia de varias afinidades importantes. ",
    "Certaines différences demanderont des ajustements, mais elles peuvent aussi ":
      "Algunas diferencias requerirán ajustes, pero también pueden ",
    "devenir des sources de complémentarité et de croissance.":
      "convertirse en fuentes de complementariedad y crecimiento.",
    "Votre dynamique présente un mélange équilibré de fluidité et de défis. ":
      "Su dinámica presenta una combinación equilibrada de fluidez y desafíos. ",
    "La qualité de la relation dépendra notamment de votre capacité à communiquer, ":
      "La calidad de la relación dependerá especialmente de su capacidad para comunicarse, ",
    "à respecter vos différences et à construire des repères communs.":
      "respetar sus diferencias y construir referencias comunes.",
    "Cette relation peut être profondément formatrice. ":
      "Esta relación puede ser profundamente transformadora. ",
    "Elle demande toutefois davantage de conscience, de dialogue et d’adaptation ":
      "Sin embargo, requiere mayor conciencia, diálogo y adaptación ",
    "afin que les tensions deviennent des occasions de compréhension.":
      "para que las tensiones se conviertan en oportunidades de comprensión.",
    "Votre synastrie met en lumière une dynamique complexe et exigeante. ":
      "Su sinastría pone de relieve una dinámica compleja y exigente. ",
    "Cela ne condamne pas la relation, mais souligne l’importance de la patience, ":
      "Esto no condena la relación, pero subraya la importancia de la paciencia, ",
    "de la communication et d’un engagement conscient des deux personnes.":
      "la comunicación y el compromiso consciente de ambas personas.",
    "Première personne": "Primera persona",
    "Deuxième personne": "Segunda persona",
    "Vue d’ensemble": "Visión general",
    "Votre compatibilité globale": "Su compatibilidad global",
    "Une lecture synthétique des grandes dimensions de votre relation avant d’explorer chaque connexion en profondeur.":
      "Una visión sintética de las grandes dimensiones de su relación antes de explorar cada conexión en profundidad.",
    "Indice général de compatibilité": "Índice general de compatibilidad",
    "Un score n’est jamais un verdict": "Una puntuación nunca es un veredicto",
    "Ces indices offrent une vue d’ensemble des interactions astrologiques. Une note élevée révèle davantage de fluidité naturelle, tandis qu’une note plus basse signale généralement une zone qui demande davantage de compréhension, de maturité ou d’ajustement. La qualité réelle d’une relation dépend toujours de la manière dont les deux personnes choisissent de vivre ces énergies.":
      "Estos índices ofrecen una visión general de las interacciones astrológicas. Una puntuación alta revela una mayor fluidez natural, mientras que una más baja suele señalar un área que requiere más comprensión, madurez o ajuste. La calidad real de una relación siempre depende de cómo ambas personas eligen vivir estas energías.",
    "La suite de votre analyse": "La continuación de su análisis",
    "Les prochaines sections expliqueront la source de ces résultats à travers vos planètes personnelles, vos aspects de synastrie, vos forces naturelles et vos principaux défis.":
      "Las siguientes secciones explicarán el origen de estos resultados a través de sus planetas personales, sus aspectos de sinastría, sus fortalezas naturales y sus principales desafíos.",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Informe de sinastría",
  },

  de: {
    "Lien émotionnel": "Emotionale Verbindung",
    "La capacité à comprendre les besoins affectifs et à créer un sentiment de sécurité.":
      "Die Fähigkeit, emotionale Bedürfnisse zu verstehen und ein Gefühl von Sicherheit zu schaffen.",
    "Communication": "Kommunikation",
    "La fluidité des échanges, la compréhension mutuelle et la gestion des désaccords.":
      "Die Leichtigkeit des Austauschs, das gegenseitige Verständnis und der Umgang mit Meinungsverschiedenheiten.",
    "Affinité amoureuse": "Romantische Verbundenheit",
    "L’expression de l’affection, de la tendresse, de l’harmonie et des valeurs partagées.":
      "Der Ausdruck von Zuneigung, Zärtlichkeit, Harmonie und gemeinsamen Werten.",
    "Attirance": "Anziehung",
    "L’intensité du désir, de l’élan mutuel et de la dynamique physique entre les deux personnes.":
      "Die Intensität des Verlangens, der gegenseitigen Anziehung und der körperlichen Dynamik zwischen beiden Personen.",
    "Stabilité": "Stabilität",
    "Le potentiel de continuité, d’engagement, de structure et de construction dans le temps.":
      "Das Potenzial für Beständigkeit, Engagement, Struktur und langfristigen Aufbau.",
    "Évolution": "Entwicklung",
    "La capacité de la relation à favoriser l’apprentissage, la transformation et la croissance.":
      "Die Fähigkeit der Beziehung, Lernen, Veränderung und Wachstum zu fördern.",
    "Connexion exceptionnelle": "Außergewöhnliche Verbindung",
    "Très forte compatibilité": "Sehr hohe Kompatibilität",
    "Belle harmonie": "Schöne Harmonie",
    "Compatibilité prometteuse": "Vielversprechende Kompatibilität",
    "Équilibre à construire": "Gleichgewicht im Aufbau",
    "Relation évolutive": "Entwicklungsorientierte Beziehung",
    "Dynamique exigeante": "Anspruchsvolle Dynamik",
    "Votre synastrie révèle une connexion particulièrement harmonieuse. ":
      "Ihre Synastrie zeigt eine besonders harmonische Verbindung. ",
    "Vos différences peuvent enrichir la relation tandis que vos affinités ":
      "Ihre Unterschiede können die Beziehung bereichern, während Ihre Gemeinsamkeiten ",
    "favorisent naturellement la proximité, la compréhension et l’évolution commune.":
      "auf natürliche Weise Nähe, Verständnis und gemeinsames Wachstum fördern.",
    "Votre relation bénéficie de plusieurs affinités importantes. ":
      "Ihre Beziehung profitiert von mehreren wichtigen Gemeinsamkeiten. ",
    "Certaines différences demanderont des ajustements, mais elles peuvent aussi ":
      "Einige Unterschiede erfordern Anpassungen, können aber auch ",
    "devenir des sources de complémentarité et de croissance.":
      "zu Quellen von Ergänzung und Wachstum werden.",
    "Votre dynamique présente un mélange équilibré de fluidité et de défis. ":
      "Ihre Dynamik zeigt eine ausgewogene Mischung aus Leichtigkeit und Herausforderungen. ",
    "La qualité de la relation dépendra notamment de votre capacité à communiquer, ":
      "Die Qualität der Beziehung hängt insbesondere von Ihrer Fähigkeit ab, zu kommunizieren, ",
    "à respecter vos différences et à construire des repères communs.":
      "Ihre Unterschiede zu respektieren und gemeinsame Orientierungspunkte aufzubauen.",
    "Cette relation peut être profondément formatrice. ":
      "Diese Beziehung kann tiefgreifend prägend sein. ",
    "Elle demande toutefois davantage de conscience, de dialogue et d’adaptation ":
      "Sie erfordert jedoch mehr Bewusstsein, Dialog und Anpassungsfähigkeit, ",
    "afin que les tensions deviennent des occasions de compréhension.":
      "damit Spannungen zu Chancen für gegenseitiges Verständnis werden.",
    "Votre synastrie met en lumière une dynamique complexe et exigeante. ":
      "Ihre Synastrie macht eine komplexe und anspruchsvolle Dynamik sichtbar. ",
    "Cela ne condamne pas la relation, mais souligne l’importance de la patience, ":
      "Das verurteilt die Beziehung nicht, unterstreicht jedoch die Bedeutung von Geduld, ",
    "de la communication et d’un engagement conscient des deux personnes.":
      "Kommunikation und bewusstem Engagement beider Personen.",
    "Première personne": "Erste Person",
    "Deuxième personne": "Zweite Person",
    "Vue d’ensemble": "Überblick",
    "Votre compatibilité globale": "Ihre Gesamtkompatibilität",
    "Une lecture synthétique des grandes dimensions de votre relation avant d’explorer chaque connexion en profondeur.":
      "Ein kompakter Überblick über die wichtigsten Dimensionen Ihrer Beziehung, bevor jede Verbindung eingehend betrachtet wird.",
    "Indice général de compatibilité": "Gesamtindex der Kompatibilität",
    "Un score n’est jamais un verdict": "Ein Wert ist niemals ein Urteil",
    "Ces indices offrent une vue d’ensemble des interactions astrologiques. Une note élevée révèle davantage de fluidité naturelle, tandis qu’une note plus basse signale généralement une zone qui demande davantage de compréhension, de maturité ou d’ajustement. La qualité réelle d’une relation dépend toujours de la manière dont les deux personnes choisissent de vivre ces énergies.":
      "Diese Werte geben einen Überblick über die astrologischen Wechselwirkungen. Ein hoher Wert zeigt mehr natürliche Leichtigkeit, während ein niedrigerer Wert meist auf einen Bereich hinweist, der mehr Verständnis, Reife oder Anpassung erfordert. Die tatsächliche Qualität einer Beziehung hängt immer davon ab, wie beide Menschen mit diesen Energien umgehen.",
    "La suite de votre analyse": "Der weitere Verlauf Ihrer Analyse",
    "Les prochaines sections expliqueront la source de ces résultats à travers vos planètes personnelles, vos aspects de synastrie, vos forces naturelles et vos principaux défis.":
      "Die folgenden Abschnitte erklären die Grundlage dieser Ergebnisse anhand Ihrer persönlichen Planeten, Ihrer Synastrie-Aspekte, Ihrer natürlichen Stärken und Ihrer wichtigsten Herausforderungen.",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Synastrie-Bericht",
  },

  it: {
    "Lien émotionnel": "Legame emotivo",
    "La capacité à comprendre les besoins affectifs et à créer un sentiment de sécurité.":
      "La capacità di comprendere i bisogni affettivi e creare un senso di sicurezza.",
    "Communication": "Comunicazione",
    "La fluidité des échanges, la compréhension mutuelle et la gestion des désaccords.":
      "La fluidità degli scambi, la comprensione reciproca e la gestione dei disaccordi.",
    "Affinité amoureuse": "Affinità amorosa",
    "L’expression de l’affection, de la tendresse, de l’harmonie et des valeurs partagées.":
      "L'espressione dell'affetto, della tenerezza, dell'armonia e dei valori condivisi.",
    "Attirance": "Attrazione",
    "L’intensité du désir, de l’élan mutuel et de la dynamique physique entre les deux personnes.":
      "L'intensità del desiderio, dello slancio reciproco e della dinamica fisica tra le due persone.",
    "Stabilité": "Stabilità",
    "Le potentiel de continuité, d’engagement, de structure et de construction dans le temps.":
      "Il potenziale di continuità, impegno, struttura e costruzione nel tempo.",
    "Évolution": "Evoluzione",
    "La capacité de la relation à favoriser l’apprentissage, la transformation et la croissance.":
      "La capacità della relazione di favorire l'apprendimento, la trasformazione e la crescita.",
    "Connexion exceptionnelle": "Connessione eccezionale",
    "Très forte compatibilité": "Compatibilità molto elevata",
    "Belle harmonie": "Bella armonia",
    "Compatibilité prometteuse": "Compatibilità promettente",
    "Équilibre à construire": "Equilibrio da costruire",
    "Relation évolutive": "Relazione evolutiva",
    "Dynamique exigeante": "Dinamica impegnativa",
    "Votre synastrie révèle une connexion particulièrement harmonieuse. ":
      "La vostra sinastria rivela una connessione particolarmente armoniosa. ",
    "Vos différences peuvent enrichir la relation tandis que vos affinités ":
      "Le vostre differenze possono arricchire la relazione, mentre le vostre affinità ",
    "favorisent naturellement la proximité, la compréhension et l’évolution commune.":
      "favoriscono naturalmente la vicinanza, la comprensione e la crescita comune.",
    "Votre relation bénéficie de plusieurs affinités importantes. ":
      "La vostra relazione beneficia di diverse affinità importanti. ",
    "Certaines différences demanderont des ajustements, mais elles peuvent aussi ":
      "Alcune differenze richiederanno degli adattamenti, ma possono anche ",
    "devenir des sources de complémentarité et de croissance.":
      "diventare fonti di complementarità e crescita.",
    "Votre dynamique présente un mélange équilibré de fluidité et de défis. ":
      "La vostra dinamica presenta un equilibrio tra fluidità e sfide. ",
    "La qualité de la relation dépendra notamment de votre capacité à communiquer, ":
      "La qualità della relazione dipenderà in particolare dalla vostra capacità di comunicare, ",
    "à respecter vos différences et à construire des repères communs.":
      "rispettare le vostre differenze e costruire punti di riferimento comuni.",
    "Cette relation peut être profondément formatrice. ":
      "Questa relazione può essere profondamente formativa. ",
    "Elle demande toutefois davantage de conscience, de dialogue et d’adaptation ":
      "Richiede tuttavia maggiore consapevolezza, dialogo e adattamento ",
    "afin que les tensions deviennent des occasions de compréhension.":
      "affinché le tensioni diventino occasioni di comprensione.",
    "Votre synastrie met en lumière une dynamique complexe et exigeante. ":
      "La vostra sinastria mette in luce una dinamica complessa e impegnativa. ",
    "Cela ne condamne pas la relation, mais souligne l’importance de la patience, ":
      "Questo non condanna la relazione, ma sottolinea l'importanza della pazienza, ",
    "de la communication et d’un engagement conscient des deux personnes.":
      "della comunicazione e di un impegno consapevole da parte di entrambe le persone.",
    "Première personne": "Prima persona",
    "Deuxième personne": "Seconda persona",
    "Vue d’ensemble": "Panoramica",
    "Votre compatibilité globale": "La vostra compatibilità complessiva",
    "Une lecture synthétique des grandes dimensions de votre relation avant d’explorer chaque connexion en profondeur.":
      "Una lettura sintetica delle principali dimensioni della vostra relazione prima di esplorare ogni connessione in profondità.",
    "Indice général de compatibilité": "Indice generale di compatibilità",
    "Un score n’est jamais un verdict": "Un punteggio non è mai un verdetto",
    "Ces indices offrent une vue d’ensemble des interactions astrologiques. Une note élevée révèle davantage de fluidité naturelle, tandis qu’une note plus basse signale généralement une zone qui demande davantage de compréhension, de maturité ou d’ajustement. La qualité réelle d’une relation dépend toujours de la manière dont les deux personnes choisissent de vivre ces énergies.":
      "Questi indici offrono una visione d'insieme delle interazioni astrologiche. Un punteggio elevato indica una maggiore fluidità naturale, mentre uno più basso segnala generalmente un'area che richiede maggiore comprensione, maturità o adattamento. La qualità reale di una relazione dipende sempre dal modo in cui entrambe le persone scelgono di vivere queste energie.",
    "La suite de votre analyse": "Il seguito della vostra analisi",
    "Les prochaines sections expliqueront la source de ces résultats à travers vos planètes personnelles, vos aspects de synastrie, vos forces naturelles et vos principaux défis.":
      "Le sezioni successive spiegheranno l'origine di questi risultati attraverso i vostri pianeti personali, gli aspetti di sinastria, i vostri punti di forza naturali e le principali sfide.",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Rapporto di sinastria",
  },

  pt: {
    "Lien émotionnel": "Vínculo emocional",
    "La capacité à comprendre les besoins affectifs et à créer un sentiment de sécurité.":
      "A capacidade de compreender as necessidades afetivas e criar uma sensação de segurança.",
    "Communication": "Comunicação",
    "La fluidité des échanges, la compréhension mutuelle et la gestion des désaccords.":
      "A fluidez das trocas, a compreensão mútua e a gestão das divergências.",
    "Affinité amoureuse": "Afinidade amorosa",
    "L’expression de l’affection, de la tendresse, de l’harmonie et des valeurs partagées.":
      "A expressão do afeto, da ternura, da harmonia e dos valores partilhados.",
    "Attirance": "Atração",
    "L’intensité du désir, de l’élan mutuel et de la dynamique physique entre les deux personnes.":
      "A intensidade do desejo, do impulso mútuo e da dinâmica física entre as duas pessoas.",
    "Stabilité": "Estabilidade",
    "Le potentiel de continuité, d’engagement, de structure et de construction dans le temps.":
      "O potencial de continuidade, compromisso, estrutura e construção ao longo do tempo.",
    "Évolution": "Evolução",
    "La capacité de la relation à favoriser l’apprentissage, la transformation et la croissance.":
      "A capacidade da relação de favorecer a aprendizagem, a transformação e o crescimento.",
    "Connexion exceptionnelle": "Conexão excecional",
    "Très forte compatibilité": "Compatibilidade muito elevada",
    "Belle harmonie": "Bela harmonia",
    "Compatibilité prometteuse": "Compatibilidade promissora",
    "Équilibre à construire": "Equilíbrio a construir",
    "Relation évolutive": "Relação evolutiva",
    "Dynamique exigeante": "Dinâmica exigente",
    "Votre synastrie révèle une connexion particulièrement harmonieuse. ":
      "A sua sinastria revela uma conexão particularmente harmoniosa. ",
    "Vos différences peuvent enrichir la relation tandis que vos affinités ":
      "As suas diferenças podem enriquecer a relação, enquanto as suas afinidades ",
    "favorisent naturellement la proximité, la compréhension et l’évolution commune.":
      "favorecem naturalmente a proximidade, a compreensão e a evolução conjunta.",
    "Votre relation bénéficie de plusieurs affinités importantes. ":
      "A sua relação beneficia de várias afinidades importantes. ",
    "Certaines différences demanderont des ajustements, mais elles peuvent aussi ":
      "Algumas diferenças exigirão ajustes, mas também podem ",
    "devenir des sources de complémentarité et de croissance.":
      "tornar-se fontes de complementaridade e crescimento.",
    "Votre dynamique présente un mélange équilibré de fluidité et de défis. ":
      "A sua dinâmica apresenta uma combinação equilibrada de fluidez e desafios. ",
    "La qualité de la relation dépendra notamment de votre capacité à communiquer, ":
      "A qualidade da relação dependerá, em particular, da sua capacidade de comunicar, ",
    "à respecter vos différences et à construire des repères communs.":
      "respeitar as suas diferenças e construir referências comuns.",
    "Cette relation peut être profondément formatrice. ":
      "Esta relação pode ser profundamente transformadora. ",
    "Elle demande toutefois davantage de conscience, de dialogue et d’adaptation ":
      "No entanto, exige maior consciência, diálogo e adaptação ",
    "afin que les tensions deviennent des occasions de compréhension.":
      "para que as tensões se transformem em oportunidades de compreensão.",
    "Votre synastrie met en lumière une dynamique complexe et exigeante. ":
      "A sua sinastria evidencia uma dinâmica complexa e exigente. ",
    "Cela ne condamne pas la relation, mais souligne l’importance de la patience, ":
      "Isto não condena a relação, mas sublinha a importância da paciência, ",
    "de la communication et d’un engagement conscient des deux personnes.":
      "da comunicação e de um compromisso consciente de ambas as pessoas.",
    "Première personne": "Primeira pessoa",
    "Deuxième personne": "Segunda pessoa",
    "Vue d’ensemble": "Visão geral",
    "Votre compatibilité globale": "A sua compatibilidade global",
    "Une lecture synthétique des grandes dimensions de votre relation avant d’explorer chaque connexion en profondeur.":
      "Uma leitura sintética das principais dimensões da sua relação antes de explorar cada conexão em profundidade.",
    "Indice général de compatibilité": "Índice geral de compatibilidade",
    "Un score n’est jamais un verdict": "Uma pontuação nunca é um veredito",
    "Ces indices offrent une vue d’ensemble des interactions astrologiques. Une note élevée révèle davantage de fluidité naturelle, tandis qu’une note plus basse signale généralement une zone qui demande davantage de compréhension, de maturité ou d’ajustement. La qualité réelle d’une relation dépend toujours de la manière dont les deux personnes choisissent de vivre ces énergies.":
      "Estes índices oferecem uma visão geral das interações astrológicas. Uma pontuação elevada revela maior fluidez natural, enquanto uma pontuação mais baixa geralmente indica uma área que exige mais compreensão, maturidade ou adaptação. A qualidade real de uma relação depende sempre da forma como ambas as pessoas escolhem viver estas energias.",
    "La suite de votre analyse": "A continuação da sua análise",
    "Les prochaines sections expliqueront la source de ces résultats à travers vos planètes personnelles, vos aspects de synastrie, vos forces naturelles et vos principaux défis.":
      "As próximas secções explicarão a origem destes resultados através dos seus planetas pessoais, dos seus aspetos de sinastria, dos seus pontos fortes naturais e dos seus principais desafios.",
    "Luna Astralis • Rapport de synastrie": "Luna Astralis • Relatório de sinastria",
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

function getScriptKind(
  filePath: string,
): ts.ScriptKind {
  if (filePath.endsWith(".tsx")) {
    return ts.ScriptKind.TSX;
  }

  if (filePath.endsWith(".jsx")) {
    return ts.ScriptKind.JSX;
  }

  if (filePath.endsWith(".js")) {
    return ts.ScriptKind.JS;
  }

  return ts.ScriptKind.TS;
}

function applyReplacements(
  source: string,
  replacements: Replacement[],
): string {
  const sorted =
    [...replacements].sort(
      (a, b) => b.start - a.start,
    );

  let output = source;

  for (const replacement of sorted) {
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

/*
 * Localisation sécurisée :
 *
 * - traduit uniquement les chaînes complètes;
 * - traduit uniquement les blocs JSX visibles complets;
 * - ne modifie jamais les identifiants TypeScript;
 * - ne fait aucun remplacement global par RegExp sur le code.
 */
function localizeVisibleText(
  source: string,
  translations: Record<string, string>,
  filePath: string,
): string {
  const sourceFile =
    ts.createSourceFile(
      filePath,
      source,
      ts.ScriptTarget.Latest,
      true,
      getScriptKind(filePath),
    );

  const replacements:
    Replacement[] = [];

  const visit = (
    node: ts.Node,
  ): void => {
    if (
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(
        node,
      )
    ) {
      /*
       * Pour les chaînes TypeScript, on utilise node.text
       * sans normaliser avant la recherche.
       *
       * C'est important pour les morceaux concaténés de
       * getOverallText(), dont l'espace final doit être
       * conservé.
       */
      const exact =
        node.text;

      const normalized =
        normalizeVisibleText(
          node.text,
        );

      const translated =
        translations[exact] ??
        translations[normalized];

      if (
        typeof translated === "string" &&
        translated !== node.text
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
        typeof translated === "string" &&
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

export function localizeCompatibilityScores(
  source: string,
  locale: PaidPdfLocale,
): string {
  if (locale === "fr") {
    return source;
  }

  const translations =
    TRANSLATIONS[
      locale as NonFrenchLocale
    ];

  if (!translations) {
    return source;
  }

  return localizeVisibleText(
    source,
    translations,
    "CompatibilityScores.tsx",
  );
}
